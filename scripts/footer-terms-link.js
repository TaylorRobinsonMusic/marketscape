/*
 * "Terms of Service" link for the home page footer.
 *
 * The home page is a site-builder export whose runtime redraws the footer after load and on every
 * breakpoint change, so a link typed into the exported HTML would be wiped. This script copies the
 * existing "Acceptable Use" footer item (so the styling matches), points the copy at the client
 * Terms of Service page, and re-adds it whenever the footer is redrawn.
 */
(function () {
  'use strict';
  var URL = '/terms-of-service';
  var LABEL = 'Terms of Service';
  var FROM = 'Acceptable Use';
  var MARK = 'data-ms-tos';

  function textOf(el) { return (el.textContent || '').replace(/[\[\]\s]+/g, ' ').trim(); }
  function itemOf(a) {
    var p = a.parentElement;
    return p && /-container\b/.test(p.className) && p.children.length === 1 ? p : a;
  }
  function ensure() {
    var links = document.querySelectorAll('a[href*="acceptable-use"]');
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      if (a.closest('[' + MARK + ']') || textOf(a) !== FROM) continue;
      var item = itemOf(a);
      var next = item.nextElementSibling;
      if (next && next.hasAttribute(MARK)) continue;
      var copy = item.cloneNode(true);
      copy.setAttribute(MARK, '');
      var link = copy.tagName === 'A' ? copy : copy.querySelector('a');
      if (!link) continue;
      link.setAttribute('href', URL);
      link.removeAttribute('target');
      var all = [copy].concat(Array.prototype.slice.call(copy.querySelectorAll('*')));
      for (var j = all.length - 1; j >= 0; j--) {
        if (all[j].children.length === 0 && all[j].textContent.trim() === FROM) all[j].textContent = LABEL;
      }
      item.parentElement.insertBefore(copy, next);
    }
  }
  var queued = false;
  function schedule() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; try { ensure(); } catch (e) { /* never break the page */ } });
  }
  function start() {
    schedule();
    new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
    window.addEventListener('resize', schedule);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
