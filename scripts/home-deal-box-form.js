/*
 * Working HOME-PAGE "Deal Box Form" for marketscape.co (BDV-6081).
 *
 * This site is a Framer EXPORT served from GitHub Pages — NOT Framer-hosted. Framer's runtime wires the
 * home "Deal Box" form's submit to api.framer.com/forms/v1/forms/<id>/submit. On an export that endpoint
 * is a dead end: it answers 201 and the Framer UI says "received", but the lead lands in a Framer project
 * nobody here watches — so every home-form submission since the site launched (2026-07-16) reached no one.
 *
 * This script takes the submit over, exactly like scripts/contact-form.js does for /contact (BDV-5001),
 * with ONE important difference: the home form has extra fields (Firm, Target Sector, Revenue Range,
 * Geography, Notes) that the shared marketscape-contact edge fn has no columns for, so we FOLD them into
 * the message text (with a "[Home Deal Box Form]" source marker) rather than drop them.
 *
 * Mechanics (same as contact-form.js, proven live on /contact):
 *   - A `submit` listener on `document` in the CAPTURE phase runs BEFORE Framer's React handler, and a
 *     document-level listener survives Framer's re-renders without re-binding.
 *   - preventDefault + stopImmediatePropagation kill the dead Framer path entirely, so Framer never shows
 *     its own (false) "received" — WE own the confirmation UI.
 *   - We POST the fields as JSON to the marketscape-contact edge fn (self-hosted box), which STORES the
 *     lead in public.web_contact_inquiry (source=web_contact_marketscape_co, page_url='/') and emails
 *     Connor (To) + the owner (Cc). Success is shown ONLY after that POST returns ok; on failure the form
 *     stays usable and shows a plain retry message — never a false "received" (BDV-6081 coordinator rule).
 *   - Scoped to the HOME page only (path '/' or '/index.html') and to the one form that has an email
 *     input — the Deal Box form. Hidden Framer honeypot inputs are collected into `hp`; the server drops
 *     any submission with a honeypot filled.
 *
 * Phase 2 (held under T-0694 edge deploy): a confirmation email to the lead + optionally a distinct
 * source tag — an edge-fn change, not a site change, so it is NOT in this script.
 */
(function () {
  'use strict';

  var ENDPOINT = 'https://db.bigdesk.energy/functions/v1/marketscape-contact';
  var MARKER = '[Home Deal Box Form]';
  var BUSY = 'data-ms-dealbox-busy';
  var MSG_ID = 'ms-dealbox-msg';

  // Only act on the home page — contact-form.js owns /contact; this owns '/'.
  function isHomePath() {
    var p = location.pathname || '/';
    return p === '/' || p === '' || /\/index\.html?$/i.test(p);
  }

  function visible(el) {
    return !!(el && el.offsetParent !== null && el.getClientRects().length);
  }

  // A honeypot is a hidden / aria-hidden / tab-skipped field a human never fills.
  function isHoneypot(el) {
    return !visible(el) || el.getAttribute('aria-hidden') === 'true' || el.tabIndex === -1;
  }

  function attr(el, name) {
    return (el.getAttribute(name) || '').trim();
  }

  // The Deal Box form is the one FORM on the home page that has an email input.
  function isDealBoxForm(form) {
    return !!(
      form && form.tagName === 'FORM' &&
      form.querySelector('input[type="email"], input[name*="mail" i]')
    );
  }

  // A human-readable label for a field, from its name / placeholder / aria-label.
  function labelOf(el) {
    return attr(el, 'name') || attr(el, 'placeholder') || attr(el, 'aria-label') || 'Field';
  }

  // Read the form into the edge-fn payload. Email + Name map to their own keys; every other visible
  // field is folded into `message` as "Label: value" lines under the source marker. Honeypots → hp.
  function collect(form) {
    var payload = { name: '', email: '', phone: '', message: '', hp: [], pageUrl: location.href };
    var details = [];
    var fields = form.querySelectorAll('input, select, textarea');
    for (var i = 0; i < fields.length; i++) {
      var el = fields[i];
      var type = (el.type || '').toLowerCase();
      if (type === 'submit' || type === 'button') continue;
      if (isHoneypot(el)) { if (el.value) payload.hp.push(el.value); continue; }

      var nameAttr = attr(el, 'name');
      var key = (nameAttr + ' ' + attr(el, 'placeholder') + ' ' + attr(el, 'aria-label')).toLowerCase();
      var val = (el.value || '').trim();

      if (type === 'email' || /mail/.test(key)) { payload.email = payload.email || val; continue; }
      if (type === 'tel' || /phone|mobile|tel/.test(key)) { payload.phone = payload.phone || val; continue; }
      if (/^name$/i.test(nameAttr) || /\byour name\b/.test(key) || /full name/.test(key)) {
        payload.name = payload.name || val; continue;
      }
      if (val) details.push(labelOf(el) + ': ' + val); // Firm / Target Sector / Revenue Range / Geography / Notes …
    }
    payload.message = details.length ? MARKER + '\n' + details.join('\n') : MARKER;
    payload.hp = payload.hp.join(' ');
    return payload;
  }

  function submitButton(form) {
    return form.querySelector('button[type="submit"], input[type="submit"], button');
  }

  function removeMsg(form) {
    var old = form.parentNode && form.parentNode.querySelector('#' + MSG_ID);
    if (old) old.parentNode.removeChild(old);
  }

  // Success: replace the form with a confirmation (keeps the surrounding Framer layout intact).
  function showSuccess(form) {
    removeMsg(form);
    var box = document.createElement('div');
    box.id = MSG_ID;
    box.setAttribute('role', 'status');
    box.style.cssText = 'padding:20px 0;font-size:16px;line-height:24px;';
    box.textContent = 'Thanks — your deal box has been received. We’ll be in touch shortly.';
    form.parentNode.insertBefore(box, form);
    form.style.display = 'none';
  }

  // Failure: leave the form usable and show a plain retry message — NEVER a false "received".
  function showRetry(form) {
    removeMsg(form);
    var box = document.createElement('div');
    box.id = MSG_ID;
    box.setAttribute('role', 'alert');
    box.style.cssText = 'padding:12px 0;font-size:15px;line-height:22px;color:#b42318;';
    box.textContent = 'Sorry — we couldn’t submit that just now. Please try again in a moment.';
    form.parentNode.insertBefore(box, form);
  }

  function onSubmit(e) {
    if (!isHomePath()) return;
    var form = e.target;
    if (!isDealBoxForm(form)) return; // leave any non-deal-box form alone
    // Block Framer's dead handler entirely so it never shows its own false "received".
    e.preventDefault();
    e.stopImmediatePropagation();
    if (form.hasAttribute(BUSY)) return;

    var payload = collect(form);
    if (!payload.email) { return; } // let the browser's own required-field UI stand; nothing to send

    form.setAttribute(BUSY, '');
    removeMsg(form);
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
        if (ok) { showSuccess(form); return; }
        form.removeAttribute(BUSY);
        if (btn) { btn.disabled = false; try { btn.textContent = btnLabel; } catch (_) {} }
        showRetry(form);
      });
  }

  // Capture phase on document: runs before Framer's React submit handler; survives re-renders.
  document.addEventListener('submit', onSubmit, true);
})();
