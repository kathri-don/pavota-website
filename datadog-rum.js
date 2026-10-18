// Datadog RUM: page speed, JS errors and visits for pavotaplumbing.lk.
// To switch it off, empty this file (or delete it and the <script src="/datadog-rum.js"> tags).
(function () {
  // Only report from the live site, not from localhost or file:// previews.
  if (!/(^|\.)pavotaplumbing\.lk$/.test(location.hostname)) return;

  (function (h, o, u, n, d) {
    h = h[d] = h[d] || { q: [], onReady: function (c) { h.q.push(c); } };
    d = o.createElement(u); d.async = 1; d.src = n;
    n = o.getElementsByTagName(u)[0]; n.parentNode.insertBefore(d, n);
  })(window, document, 'script', 'https://www.datadoghq-browser-agent.com/us5/v6/datadog-rum.js', 'DD_RUM');

  window.DD_RUM.onReady(function () {
    window.DD_RUM.init({
      applicationId: '6bb30850-7c35-414a-b18a-170c0dbb8e7d',
      clientToken: 'pubf7531521e0b136735b264dea53c3d830',
      remoteConfiguration: { id: '972872c8-8337-4baf-95a3-8a54e61e221c' },
      site: 'us5.datadoghq.com',
      // Refuse to start if this script is copied onto another site.
      allowedTrackingOrigins: ['https://www.pavotaplumbing.lk', 'https://pavotaplumbing.lk'],
      service: 'pavota-website',
      env: 'prod',
      sessionSampleRate: 100,
      sessionReplaySampleRate: 20,
      trackResources: true,
      trackUserInteractions: true,
      trackLongTasks: true,
      // Office shows customer names and job details, so hide all text in its replays.
      defaultPrivacyLevel: location.pathname.indexOf('/office') === 0 ? 'mask' : 'mask-user-input'
    });
  });
})();
