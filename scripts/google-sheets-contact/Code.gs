/**
 * Marketscape contact form -> Google Sheets
 * ------------------------------------------
 * This Google Apps Script receives POSTs from the contact form on
 * contact.html and appends one row per submission to a Google Sheet
 * in your Google Drive.
 *
 * Setup instructions live in README.md next to this file.
 *
 * The web app is deployed with "Execute as: Me" and "Who has access:
 * Anyone", so the public site can post to it without a login. Only the
 * fields below are written to the sheet, and a shared-secret token plus
 * honeypot check keep out casual spam.
 */

// Optional: set this to any random string and put the SAME string in
// contact.html (the TOKEN constant). Leave both empty to disable the check.
var SHARED_TOKEN = '';

// The tab (sheet) name that rows are written to. Created automatically
// if it does not already exist.
var SHEET_NAME = 'Contact Submissions';

// Email notifications: an email is sent for each new submission.
// Leave NOTIFY_EMAIL empty ('') to send to the account that owns this
// script, or set it to a specific address (or comma-separated list).
// Set NOTIFY_ENABLED to false to turn notifications off entirely.
var NOTIFY_ENABLED = true;
var NOTIFY_EMAIL = '';

var HEADERS = [
  'Timestamp',
  'First Name',
  'Last Name',
  'Email',
  'Phone',
  'Message',
  'Source Page'
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(30000);
  try {
    var data = parseBody(e);

    // Honeypot: real users never fill this; bots often do.
    if (data.honeypot) {
      return json({ result: 'ignored' });
    }

    // Optional shared-secret check.
    if (SHARED_TOKEN && data.token !== SHARED_TOKEN) {
      return json({ result: 'error', message: 'Unauthorized' });
    }

    var sheet = getSheet();
    sheet.appendRow([
      new Date(),
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.message || '',
      data.page || ''
    ]);

    notify(data);

    return json({ result: 'success' });
  } catch (err) {
    return json({ result: 'error', message: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Lets you open the /exec URL in a browser to confirm it is live.
function doGet() {
  return json({ result: 'ok', message: 'Marketscape contact endpoint is live.' });
}

function parseBody(e) {
  if (e && e.postData && e.postData.contents) {
    try {
      return JSON.parse(e.postData.contents);
    } catch (ignore) {
      // Fall through to form-encoded parameters below.
    }
  }
  return (e && e.parameter) ? e.parameter : {};
}

function notify(data) {
  if (!NOTIFY_ENABLED) return;
  try {
    var to = NOTIFY_EMAIL || Session.getEffectiveUser().getEmail();
    if (!to) return;

    var name = ((data.firstName || '') + ' ' + (data.lastName || '')).trim();
    var subject = 'New contact form submission' + (name ? ' from ' + name : '');
    var lines = [
      'Name:    ' + (name || '(not provided)'),
      'Email:   ' + (data.email || '(not provided)'),
      'Phone:   ' + (data.phone || '(not provided)'),
      'Page:    ' + (data.page || '(not provided)'),
      '',
      'Message:',
      data.message || '(no message)'
    ];

    var options = {};
    if (data.email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) {
      options.replyTo = data.email;
    }
    MailApp.sendEmail(to, subject, lines.join('\n'), options);
  } catch (err) {
    // Never let a notification failure block saving the submission.
  }
}

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
