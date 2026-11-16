/*
 * Proof band for the marketscape.co home page (BDV-5943).
 *
 * Adds one compact band directly under the hero (above the stats strip) holding one
 * statement. Nothing else on the page is touched.
 *
 * Why a script and not text typed into index.html: this site is a Framer export. Framer's runtime
 * hydrates the page from its own bundles after load, and any element in the exported HTML that the
 * bundles do not know about is thrown away (or, worse, forces a full client re-render). So, like
 * login-link.js, this script adds the band AFTER Framer has taken over the page, keeps ONE node,
 * and puts it back whenever Framer redraws the sections (breakpoint change, route change and back).
 *
 * Undo: delete this file and its <script> tag in index.html (or revert the commit that added them).
 */
(function () {
  'use strict';

  var LEAD = 'A typical campaign reaches 20,000 owners and executives. At our measured response rate, about 160 reply with interest.';
  var MARK = 'data-ms-proof';
  var STYLE_ID = 'ms-proof-style';
  var FALLBACK_MS = 5000; // if Framer never takes over (bundle failed), show the band anyway

  // Values copied from the page's own sections and text presets (Stats section, 20px title preset,
  // 14px body preset) so the band reads as native at every breakpoint.
  var CSS =
    '.ms-proof{box-sizing:border-box;flex:none;position:relative;display:flex;flex-flow:column;' +
    'place-content:center;align-items:center;gap:10px;width:100%;max-width:1180px;height:min-content;' +
    'padding:50px 28px;margin:0;' +
    'border:solid var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d,#d1d1d1);border-width:1px 1px 0 1px}' +
    '.ms-proof p{margin:0;padding:0;text-align:center;font-style:normal;font-weight:400;' +
    'font-family:"Google Sans Flex Variable","Google Sans Flex Variable Placeholder",sans-serif;' +
    'text-wrap:balance}' +
    '.ms-proof .ms-proof-lead{max-width:820px;font-size:20px;line-height:1.6em;letter-spacing:.01em;color:#000}' +
    '@media (min-width:810px) and (max-width:1199.98px){.ms-proof{max-width:780px}}' +
    '@media (max-width:809.98px){.ms-proof{max-width:600px}}';

  var band = null;
  var startedAt = Date.now();

  function visible(el) {
    return !!(el && el.offsetParent !== null && el.getClientRects().length);
  }

  // True once React (Framer's runtime) has hydrated this element.
  function hydrated(el) {
    for (var k in el) if (k.indexOf('__reactFiber$') === 0) return true;
    return false;
  }

  function ensureStyle() {
    if (document.getElementById(STYLE_ID)) return;
    var s = document.createElement('style');
    s.id = STYLE_ID;
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  function build() {
    var el = document.createElement('section');
    el.className = 'ms-proof';
    el.setAttribute(MARK, '');
    var p1 = document.createElement('p');
    p1.className = 'ms-proof-lead';
    p1.textContent = LEAD;
    el.appendChild(p1);
    return el;
  }

  // The stats strip that sits directly under the hero on the home page (the visible copy only).
  function findAnchor() {
    var list = document.querySelectorAll('main section[data-framer-name="Stats"]');
    for (var i = 0; i < list.length; i++) {
      var prev = list[i].previousElementSibling;
      while (prev && prev.hasAttribute(MARK)) prev = prev.previousElementSibling;
      if (visible(list[i]) && prev && prev.getAttribute('data-framer-name') === 'Hero') return list[i];
    }
    return null;
  }

  function ensure() {
    var anchor = findAnchor();
    // Never more than one band: drop any copy that is not ours.
    var all = document.querySelectorAll('[' + MARK + ']');
    for (var i = 0; i < all.length; i++) if (all[i] !== band) all[i].parentNode.removeChild(all[i]);
    if (!anchor) {
      // Not the home layout (or not drawn yet): show nothing.
      if (band && band.parentNode) band.parentNode.removeChild(band);
      return;
    }
    // Wait for Framer to take over the section first, so the band is never hydrated away.
    if (!hydrated(anchor) && Date.now() - startedAt < FALLBACK_MS) return;
    if (band && band.parentNode === anchor.parentNode && band.nextElementSibling === anchor) return;
    ensureStyle();
    if (!band) band = build();
    anchor.parentNode.insertBefore(band, anchor);
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
    window.addEventListener('load', schedule);
    // Hydration marks elements without changing the DOM tree, so also check on a short timer
    // until the band is in (and once more after the fallback deadline).
    var iv = setInterval(function () {
      schedule();
      if ((band && band.isConnected) || Date.now() - startedAt > FALLBACK_MS + 1000) clearInterval(iv);
    }, 100);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
