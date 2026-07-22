# Contact form → Google Sheets

The contact form on `contact.html` submits to a **Google Apps Script Web App**,
which appends each submission as a row in a Google Sheet in your Google Drive.

There is no server to run — the Apps Script *is* the backend, hosted for free
by Google and bound to a spreadsheet you own.

```
contact.html form  ──POST (JSON)──▶  Apps Script Web App  ──appendRow──▶  Google Sheet
```

## One-time setup (do this in your Google account)

1. **Create the spreadsheet.**
   Go to <https://sheets.google.com> and create a new blank spreadsheet.
   Name it something like `Marketscape – Contact Submissions`. You do not
   need to add headers; the script creates them on the first submission.

2. **Open the bound Apps Script project.**
   In that spreadsheet: **Extensions → Apps Script**. This opens a script
   project that is already attached to this spreadsheet.

3. **Paste the code.**
   Delete the placeholder `myFunction` code, then copy the entire contents of
   [`Code.gs`](./Code.gs) into the editor. Click the 💾 save icon.

4. *(Optional but recommended)* **Turn on the shared-secret check.**
   In `Code.gs`, set `SHARED_TOKEN` to any random string, e.g.
   `var SHARED_TOKEN = 'k7f2-marketscape-9xQ';`. You will paste this same
   string into `contact.html` in step 8. Save again.

5. **Deploy as a Web App.**
   Click **Deploy → New deployment**. Choose type **Web app**. Set:
   - **Description:** `Contact form endpoint`
   - **Execute as:** `Me (your@email)`
   - **Who has access:** `Anyone`

   Click **Deploy**. Grant the permissions it asks for (it needs to edit the
   spreadsheet). Google will warn "Google hasn't verified this app" — this is
   normal for your own scripts: click **Advanced → Go to (project name)**.

6. **Copy the Web App URL.**
   After deploying, copy the **Web app URL**. It looks like:
   `https://script.google.com/macros/s/AKfycb.................../exec`

7. **Verify it's live.**
   Paste that URL into a browser. You should see:
   `{"result":"ok","message":"Marketscape contact endpoint is live."}`

8. **Wire it into the site.**
   Open `contact.html` and find the config block near the bottom
   (search for `CONTACT_FORM_ENDPOINT`). Paste your Web App URL there.
   If you set a `SHARED_TOKEN` in step 4, paste the same string into `TOKEN`.
   Commit and push — GitHub Pages will publish the change.

## Updating the script later

If you edit `Code.gs`, you must **re-deploy** for changes to go live:
**Deploy → Manage deployments →** (pencil / edit) **→ Version: New version → Deploy.**
This keeps the same `/exec` URL, so you don't need to touch `contact.html` again.

## Columns written to the sheet

| Timestamp | First Name | Last Name | Email | Phone | Message | Source Page |
|-----------|------------|-----------|-------|-------|---------|-------------|

## Notes

- **Spam protection:** The form includes hidden honeypot fields; if any are
  filled (bots do this), the submission is silently ignored. The optional
  `SHARED_TOKEN` adds a second layer.
- **Email notifications:** Want an email each time someone submits? In the
  Google Sheet: **Tools → Notification settings → Notify me when… any changes
  are made**, or add a `MailApp.sendEmail(...)` call inside `doPost` in `Code.gs`.
- **CORS:** The browser posts with `Content-Type: text/plain` and `mode:
  'no-cors'`, which is the standard, preflight-free way to reach an Apps Script
  Web App from a static site. The response is opaque to the page, so the form
  treats a completed request as success.
