#!/usr/bin/env node
/*
 * check-forms-have-handlers.js (BDV-6081) — REGRESSION GUARD for the marketscape.co static export.
 *
 * The recurring failure (BDV-5001 for /contact, BDV-6081 for the home Deal Box form): a Framer-export
 * form whose submit goes to api.framer.com (a dead end on an export), so leads are silently lost while
 * the visitor sees "received". The fix each time is a takeover script that POSTs to our own endpoint
 * (the marketscape-contact edge fn). This guard makes that mandatory: EVERY lead form on EVERY page must
 * be covered by a loaded takeover script, so the next page someone adds can't ship a lost-lead form.
 *
 * Definition of a "lead form": a <form> that contains an email input (type="email" or name*="mail").
 * Those are the ones that capture a person we must reach; a stray search box has no email input.
 *
 * For each HTML page with a lead form, the page must reference (via <script src="/scripts/X.js">) at
 * least one LOCAL script whose source contains the marketscape-contact endpoint path AND a capture-phase
 * document submit listener — i.e. an actual takeover. Otherwise the page FAILS, naming the file.
 *
 * Dependency-free. Exit 0 = every lead-form page is covered; 1 = an uncovered lead form; 2 = can't run.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SKIP_DIRS = new Set(['node_modules', 'vendor', '.git', 'scripts']);
const ENDPOINT_MARK = 'marketscape-contact'; // the edge fn path — the thing a takeover must POST to
const TAKEOVER_SIGNAL = /addEventListener\(\s*['"]submit['"]\s*,[^)]*,\s*true\s*\)/; // capture-phase submit

function walkHtml(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) walkHtml(path.join(dir, entry.name), out);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.html')) {
      out.push(path.join(dir, entry.name));
    }
  }
  return out;
}

// A <form> on this page has an email input?
function hasLeadForm(html) {
  const forms = html.match(/<form\b[\s\S]*?<\/form>/gi) || [];
  return forms.some((f) => /<input[^>]*type=["']?email["']?/i.test(f) || /<input[^>]*name=["'][^"']*mail/i.test(f));
}

// The local /scripts/*.js files this page references.
function referencedLocalScripts(html) {
  const out = [];
  const re = /<script[^>]*\bsrc=["'](\/scripts\/[^"']+\.js)["']/gi;
  let m;
  while ((m = re.exec(html)) !== null) out.push(m[1].replace(/^\//, ''));
  return out;
}

// Does any referenced local script actually take a form over and POST to our endpoint?
function pageHasTakeover(scripts) {
  for (const rel of scripts) {
    const p = path.join(ROOT, rel);
    let src;
    try { src = fs.readFileSync(p, 'utf8'); } catch { continue; }
    if (src.includes(ENDPOINT_MARK) && TAKEOVER_SIGNAL.test(src)) return true;
  }
  return false;
}

function main() {
  let pages;
  try { pages = walkHtml(ROOT, []); }
  catch (e) { console.error(`check-forms-have-handlers: cannot scan: ${e.message}`); process.exit(2); }

  const failures = [];
  let leadPages = 0;
  for (const file of pages) {
    const html = fs.readFileSync(file, 'utf8');
    if (!hasLeadForm(html)) continue;
    leadPages += 1;
    if (!pageHasTakeover(referencedLocalScripts(html))) {
      failures.push(path.relative(ROOT, file));
    }
  }

  if (failures.length) {
    console.error(`check-forms-have-handlers: ${failures.length} page(s) with a lead form but NO takeover to our endpoint:`);
    for (const f of failures) {
      console.error(`  FAIL  ${f} — its form(s) post to Framer (lost leads). Add a /scripts takeover that POSTs to ${ENDPOINT_MARK}.`);
    }
    process.exit(1);
  }
  console.log(`check-forms-have-handlers: OK — ${leadPages} lead-form page(s), all covered by a takeover to ${ENDPOINT_MARK} (${pages.length} HTML page(s) scanned).`);
  process.exit(0);
}

main();
