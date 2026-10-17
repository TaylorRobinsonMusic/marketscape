/*
 * Working contact form for marketscape.co (BDV-5001).
 *
 * This site is a Framer EXPORT served from GitHub Pages — it is NOT Framer-hosted. Framer's runtime
 * wires the contact form's submit to api.framer.com/forms/v1/forms/<id>/submit, which on an export
 * answers HTTP 400 "Form config not found". So every contact submission was silently LOST.
 *
 * This script takes the submit over. It listens for `submit` on `document` in the CAPTURE phase, so
 * it runs BEFORE Framer's React handler; stopImmediatePropagation + preventDefault block the dead
 * Framer path entirely. It then POSTs the fields as JSON to an endpoint we control
 * (marketscape-contact edge fn on the self-hosted box), which stores the lead and emails Connor. A
 * document-level listener survives Framer's re-renders (the same reason login-link.js watches the
 * DOM) without needing to re-bind to the form.
 *
 * Only forms that contain an email input are taken over, so a stray form (e.g. a search box) is left
 * to behave normally. Hidden Framer honeypot inputs are collected into `hp`; the server drops a
 * submission with any honeypot filled.
 */
(function () {
  'use strict';

  var ENDPOINT = 'https://db.bigdesk.energy/functions/v1/marketscape-contact';
  var BUSY = 'data-ms-contact-busy';

  function visible(el) {
    return !!(el && el.offsetParent !== null && el.getClientRects().length);
  }

  // A honeypot is a hidden/aria-hidden/tab-skipped field a human never fills.
  function isHoneypot(el) {
    return !visible(el) || el.getAttribute('aria-hidden') === 'true' || el.tabIndex === -1;
  }

  function attr(el, name) {
    return (el.getAttribute(name) || '').toLowerCase();
  }

  // Is this a contact form (has an email field)? We only take over those.
  function isContactForm(form) {
    return !!(form && form.tagName === 'FORM' && form.querySelector('input[type="email"], input[name*="mail" i]'));
  }

  // Read the form into our payload. Visible fields are real; non-visible inputs with a value are
  // honeypots. Names/types are matched loosely because Framer's field names are its label text.
  function collect(form) {
    var payload = { firstName: '', lastName: '', email: '', phone: '', message: '', hp: [] };
    var nameParts = [];
    var fields = form.querySelectorAll('input, textarea');
    for (var i = 0; i < fields.length; i++) {
      var el = fields[i];
      var type = (el.type || '').toLowerCase();
      if (type === 'submit' || type === 'button' || type === 'hidden' && isHoneypot(el)) {
        if (type === 'hidden' && el.value) payload.hp.push(el.value);
        continue;
      }
      if (isHoneypot(el)) { if (el.value) payload.hp.push(el.value); continue; }

      var key = (attr(el, 'name') + ' ' + attr(el, 'placeholder') + ' ' + attr(el, 'aria-label')).trim();
      var val = (el.value || '').trim();
      if (el.tagName === 'TEXTAREA') { payload.message = payload.message || val; continue; }
      if (type === 'email' || /mail/.test(key)) { payload.email = payload.email || val; continue; }
      if (type === 'tel' || /phone|mobile|tel/.test(key)) { payload.phone = payload.phone || val; continue; }
      if (/first/.test(key)) { payload.firstName = payload.firstName || val; continue; }
      if (/last|surname/.test(key)) { payload.lastName = payload.lastName || val; continue; }
      if (/message|note|how|help/.test(key)) { payload.message = payload.message || val; continue; }
      if (val) nameParts.push(val); // an unlabelled text field → treat as a name part
    }
    if (!payload.firstName && !payload.lastName && nameParts.length) payload.firstName = nameParts.join(' ');
    payload.hp = payload.hp.join(' ');
    payload.pageUrl = location.href;
    return payload;
  }

  // Replace the form with a short confirmation (keeps the surrounding Framer layout intact).
  function showDone(form, ok) {
    var box = document.createElement('div');
    box.setAttribute('role', 'status');
    box.style.cssText = 'padding:20px 0;font-size:16px;line-height:24px;';
    box.textContent = ok
      ? 'Thanks — your message has been sent. We’ll be in touch shortly.'
      : 'Sorry, something went wrong sending your message. Please email connor@marketscape.co directly.';
    form.parentNode.insertBefore(box, form);
    form.style.display = 'none';
  }

  function submitButton(form) {
    return form.querySelector('button[type="submit"], input[type="submit"], button');
  }

  function onSubmit(e) {
    var form = e.target;
    if (!isContactForm(form)) return; // leave non-contact forms alone
    // Block Framer's dead handler entirely.
    e.preventDefault();
    e.stopImmediatePropagation();
    if (form.hasAttribute(BUSY)) return;

    var payload = collect(form);
    if (!payload.email) { return; } // let the browser's own required-field UI stand; nothing to send

    form.setAttribute(BUSY, '');
    var btn = submitButton(form);
    var btnLabel = btn ? btn.textContent : '';
    if (btn) { btn.disabled = true; try { btn.textContent = 'Sending…'; } catch (_) {} }

    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(function (r) { return r.ok; })
      .catch(function () { return false; })
      .then(function (ok) {
        if (ok) { showDone(form, true); return; }
        form.removeAttribute(BUSY);
        if (btn) { btn.disabled = false; try { btn.textContent = btnLabel; } catch (_) {} }
        showDone(form, false);
      });
  }

  // Capture phase on document: runs before Framer's React submit handler; survives re-renders.
  document.addEventListener('submit', onSubmit, true);
})();
