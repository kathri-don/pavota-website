// PAVOTA Office service worker: lets the tool open and make PDFs without signal.
// Bump VERSION whenever index.html changes so phones pick up the new version.
const VERSION = 'pavota-office-v6';
const SHELL = [
  './', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png',
  'https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js',
  'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  // The page itself: network first (fresh when online), cached copy when offline.
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  // Everything else in the shell: cache first.
  if (SHELL.some(s => url.href === new URL(s, self.registration.scope).href)) {
    e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request)));
  }
});
