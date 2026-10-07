/*
 * "Log in" link for the marketscape.co nav (BDV-4310, owner T-0015).
 *
 * This site is a Framer export: Framer's runtime re-renders the nav after load and on every
 * breakpoint change, so a link typed into the exported HTML would be wiped. Instead this script
 * COPIES an existing nav item (so the font, brackets, colours and hover match exactly), points the
 * copy at the app sign-in page, and re-adds it whenever Framer redraws the nav.
 *
 *   Desktop / tablet nav:  [How it works] [The edge]  logo  [Engagements] [Log in] (Request access)
 *   Phone menu panel:      ... Engagements / Request access / Log in
 *
 * LOGIN_URL keeps ?skin=marketscape so a browser that once picked the BigDesk look still lands on
 * the Marketscape sign-in screen. Once the app forces the skin by host (BDV-4257), it can drop to
 * plain https://app.marketscape.co/.
 */
(function () {
  'use strict';

  var LOGIN_URL = 'https://app.marketscape.co/?skin=marketscape';
  var LABEL = 'Log in';
  var MARK = 'data-ms-login';

  function visible(el) {
    return !!(el && el.offsetParent !== null && el.getClientRects().length);
  }

  function textOf(el) {
    return (el.textContent || '').replace(/[\[\]\s]+/g, ' ').trim();
  }

  // The nav item wrapper Framer puts around each link ("framer-xxxx-container"), or the link itself.
  function itemOf(a) {
    var p = a.parentElement;
    return p && /-container\b/.test(p.className) && p.children.length === 1 ? p : a;
  }

  function findLink(scope, label) {
    var links = scope.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      if (visible(links[i]) && textOf(links[i]) === label) return links[i];
    }
    return null;
  }

  // Copy `template` (a visible nav item), relabel it, point it at LOGIN_URL.
  function makeLogin(template, fromLabel) {
    var copy = template.cloneNode(true);
    copy.setAttribute(MARK, '');
    var a = copy.tagName === 'A' ? copy : copy.querySelector('a');
    a.setAttribute('href', LOGIN_URL);
    a.removeAttribute('target');
    a.setAttribute('aria-label', LABEL);
    // Replace the label text in the deepest element that holds it (keeps the bracket spans). The copy
    // itself is included: on a plain page the link IS the leaf.
    var all = [copy].concat(Array.prototype.slice.call(copy.querySelectorAll('*')));
    for (var i = all.length - 1; i >= 0; i--) {
      var el = all[i];
      if (el.children.length === 0 && el.textContent.trim() === fromLabel) el.textContent = LABEL;
    }
    return copy;
  }

  function ensure() {
    // 1) Desktop / tablet nav bar: copy [Engagements], place it just before the Request access button.
    var navs = document.querySelectorAll('nav');
    for (var n = 0; n < navs.length; n++) {
      var nav = navs[n];
      if (!visible(nav) || nav.querySelector('[' + MARK + ']')) continue;
      var request = findLink(nav, 'Request access');
      var sibling = findLink(nav, 'Engagements');
      if (request && sibling) {
        var reqItem = itemOf(request);
        reqItem.parentElement.insertBefore(makeLogin(itemOf(sibling), 'Engagements'), reqItem);
      }
    }
    // 2) Phone menu panel (rendered outside <nav> when the menu button is open): add after Request access.
    var panelRequest = null;
    var links = document.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      if (!links[i].closest('nav') && visible(links[i]) && textOf(links[i]) === 'Request access') {
        panelRequest = links[i];
        break;
      }
    }
    if (panelRequest) {
      var item = itemOf(panelRequest);
      var next = item.nextElementSibling;
      if (!(next && next.hasAttribute(MARK))) {
        item.parentElement.insertBefore(makeLogin(item, 'Request access'), next);
      }
    }
  }

  var queued = false;
  function schedule() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () {
      queued = false;
      try { ensure(); } catch (e) { /* never break the page */ }
    });
  }

  function start() {
    schedule();
    new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
    window.addEventListener('resize', schedule);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
