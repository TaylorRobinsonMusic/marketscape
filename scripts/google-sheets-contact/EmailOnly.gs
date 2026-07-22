/**
 * Marketscape contact form -> Email only (NO spreadsheet required)
 * ----------------------------------------------------------------
 * Use this to verify email notifications today, before setting up the
 * Google Sheet. It sends the same email as the full Code.gs version but
 * writes nothing to a sheet.
 *
 * TWO ways to test:
 *
 *   A) Instant test (no form needed):
 *      In the Apps Script editor, choose the `sendTestEmail` function in
 *      the toolbar dropdown and click Run. Approve the permission prompt
 *      (it needs to send mail as you). Check your inbox.
 *
 *   B) Live end-to-end test from the site:
 *      Deploy this as a Web app (Deploy -> New deployment -> Web app,
 *      Execute as: Me, Who has access: Anyone), copy the /exec URL, and
 *      paste it into CONTACT_FORM_ENDPOINT in contact.html. Submit the
 *      form and watch your inbox.
 *
 * When you're ready to also log rows to a sheet, switch to Code.gs
 * (create the sheet, Extensions -> Apps Script, paste Code.gs, redeploy).
 * The email body/recipient logic is identical, so nothing else changes.
 */

// Where notifications go. Leave '' to send to the account that owns/deploys
// this script. Or set a specific address, e.g. 'you@example.com'.
var NOTIFY_EMAIL = '';

// Optional shared-secret. If set here, set the same value as TOKEN in
// contact.html. Leave '' to disable the check.
var SHARED_TOKEN = '';

function doPost(e) {
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

    notify(data);
    return json({ result: 'success' });
  } catch (err) {
    return json({ result: 'error', message: String(err) });
  }
}

// Lets you open the /exec URL in a browser to confirm it is live.
function doGet() {
  return json({ result: 'ok', message: 'Marketscape email-only endpoint is live.' });
}

// Run this directly from the editor to send yourself a sample email.
function sendTestEmail() {
  notify({
    firstName: 'Test',
    lastName: 'Submission',
    email: 'visitor@example.com',
    phone: '+1-555-010-2345',
    message: 'This is a test of the contact form email notification.',
    page: 'https://marketscape.co/contact'
  });
}

function notify(data) {
  var to = NOTIFY_EMAIL || Session.getEffectiveUser().getEmail();
  if (!to) {
    throw new Error('No recipient: set NOTIFY_EMAIL at the top of the script.');
  }

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

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
