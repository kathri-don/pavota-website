# pavota-website

## Google Review QR Kit

Use the page at `/reviews/` to print the customer QR card.
Public short URL: `https://www.pavotaplumbing.lk/reviews`

### Notes

- Keep one laminated QR card with each technician.
- Also send the same review link in WhatsApp after job completion.

## PAVOTA Office (quotations, invoices, receipts)

Private tool at `/office/` (files: `office/index.html`, `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`).

- PIN-locked, `noindex`. Do NOT add `/office/` to `sitemap.xml` or `robots.txt` (robots.txt is public and would advertise the path).
- Flow: New job -> Create quotation (PQ-YYYY-NNN, valid 7 days, optional advance amount) -> Mark accepted -> Record advance (receipt RCPT-YYYY-NNN) -> Create invoice (INV-YYYY-NNN) -> Record balance (final receipt carries the Google review QR).
- Materials can be itemised or shown as a lump sum, chosen per job.
- Advance amount and travel cost are optional per job; left empty, they are not shown on documents.
- Titles and headings are bilingual (English / Sinhala); edit the wording in the `SI` list in `office/index.html`.
- Bank details are never printed; they are sent on WhatsApp after the customer accepts.
- All records live in the phone's browser storage. Export a backup weekly from Settings.
- After testing, use Settings -> "Erase all jobs & reset numbers" so real documents start at 001.
- After editing `office/index.html`, bump `VERSION` in `office/sw.js` so phones load the new version.
