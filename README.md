# pavota-website

## Google Review QR Kit

Use the page at `/reviews/` to print the customer QR card.
Public short URL: `https://www.pavotaplumbing.lk/reviews`

### Notes

- Keep one laminated QR card with each technician.
- Also send the same review link in WhatsApp after job completion.

## PAVOTA Office (quotations, invoices, receipts)

Private tool at `/office/` (files: `office/index.html`, `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`).

- Opens only after Google sign-in with `pavotaplumbing@gmail.com`, then a per-device PIN (locks after 15 min idle). `noindex`. Do NOT add `/office/` to `sitemap.xml` or `robots.txt` (robots.txt is public and would advertise the path).
- Flow: New job -> Create quotation (PQ-YYYY-NNN, valid 7 days, optional advance amount) -> Mark accepted -> Record advance (receipt RCPT-YYYY-NNN) -> Create invoice (INV-YYYY-NNN) -> Record balance (final receipt carries the Google review QR).
- Materials can be itemised or shown as a lump sum, chosen per job.
- Advance amount and travel cost are optional per job; left empty, they are not shown on documents.
- Titles and headings are bilingual (English / Sinhala); edit the wording in the `SI` list in `office/index.html`.
- Bank details are never printed; they are sent on WhatsApp after the customer accepts.
- Cloud sync: sign in with Google (Settings -> Cloud sync, or the cloud button) to share jobs, settings and document numbers across phone and PC through Firebase project `pavota-plumbing` (Firestore). Access is limited to the allowed Google accounts by the Firestore security rules set in the Firebase console. Each device keeps its own copy, so the app still works offline; issuing a new PQ / INV / RCPT number needs internet while signed in.
- Settings -> "Sign out of this device" removes the jobs from that device (after checking everything reached the cloud). A device that signed in before can still open its own copy offline with the PIN. Export a backup from Settings now and then.
- After testing, use Settings -> "Erase all jobs & reset numbers" so real documents start at 001.
- After editing `office/index.html`, bump `VERSION` in `office/sw.js` so phones load the new version.
