# CLAUDE.md

## What this is
Marketing site for PAVOTA Plumbing Solutions (Piliyandala / Colombo, Sri Lanka) at https://www.pavotaplumbing.lk, plus a private office tool at `/office/`.

## Build and deploy
- Plain static HTML. No build step, no package.json, no tests.
- Hosted on GitHub Pages from `main` at `/` (legacy build). `CNAME` sets the domain. A merge to `main` is live within minutes.
- `main` is protected by the "Main Branch Protection" ruleset: changes go through a PR (no approvals needed); force pushes and deleting the branch are blocked.
- Preview locally with `python3 -m http.server` from the repo root. Pages use root-absolute paths such as `/datadog-rum.js`, so opening files with `file://` breaks them.

## Layout
- `index.html`: home page (services, projects, contact form, LocalBusiness JSON-LD).
- `contact.html`: contact page.
- `works/`: client work list (`index.html`) and detail pages `prj1.html` to `prj3.html`.
- `projects/prjN/`: photos for those pages. Folder numbers don't match page numbers: `works/prj3.html` uses `projects/prj2/`.
- `reviews/`: printable Google review QR card. `review-qr-card.html` redirects there. `review-request-whatsapp.txt` holds the WhatsApp message text.
- `office/`: PAVOTA Office PWA for quotations, invoices and receipts (`index.html`, `sw.js`, manifest, icons). README.md describes how it works.
- `datadog-rum.js`: Datadog RUM, loaded by every page. It only runs on pavotaplumbing.lk.
- `hero_bg.webp`, `logo.jpg` (logo, favicon and og:image), `robots.txt`, `sitemap.xml`, `google98b5d36892b8116f.html` (Search Console verification).

## Conventions
- Styling uses Tailwind from the CDN (`cdn.tailwindcss.com`) with an inline `tailwind.config` per page. Brand colours: `pavota-navy` `#0d1b3e` and `pavota-cyan` `#00d4ff`. Font Awesome 6.4.0 for icons, Inter for text.
- CSS and JS live inline in each page. Shared pieces such as the nav and footer are copied between pages, so a change to one usually has to go into the others too.
- Each public page has its own `<title>`, meta description, canonical URL and Open Graph and Twitter tags, aimed at local search ("plumber in Colombo", Piliyandala, Dehiwala, Mount Lavinia). Keep them when you edit a page.
- Images are `.webp` with `width`/`height` set. Use `loading="lazy"` below the fold.
- Contact details are +94 70 111 1994 (`wa.me/94701111994`), pavotaplumbing@gmail.com and facebook.com/pavotaplumbing. They appear in many places, so change all of them together.
- Copy is in English. Office documents have English and Sinhala titles (the `SI` list in `office/index.html`).
- When you add or change a public page, update `sitemap.xml` (`<loc>` and `<lastmod>`).

## Risky to change
- `CNAME`: changing or removing it takes the site off its domain.
- `google98b5d36892b8116f.html`: removing it loses Search Console verification.
- Formspree endpoint `https://formspree.io/f/mykdyjbw` is used by the forms in `index.html` and `contact.html`. Customer enquiries go there.
- `office/`:
  - Bump `VERSION` in `office/sw.js` after every change to `office/index.html`, or installed phones keep the old version.
  - Never add `/office/` to `sitemap.xml` or `robots.txt`, and keep its `noindex`.
  - Access is enforced by Google sign-in and Firestore security rules in the Firebase console (project `pavota-plumbing`), not by this repo. The Firebase config in the page is public by design.
  - Document numbers (PQ / INV / RCPT) come from a shared Firestore counter. Don't change the numbering format.
- `datadog-rum.js`: the client token is public by design. Keep the hostname check and `allowedTrackingOrigins`. Office replays must stay fully masked because they show customer data.
- JSON-LD in `index.html` (rating, phone, service area) is what Google shows. Keep it in line with the real Google Business profile.
