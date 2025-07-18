self.addEventListener('message', (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error }),
      ),
    );
  }
});

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerNavigationRoute(
  workbox.precaching.getCacheKeyForURL('/index.html'),
);

workbox.routing.registerRoute(/\/api\//, workbox.strategies.networkFirst());

workbox.routing.registerRoute(
  /^https:\/\/gw\.alipayobjects\.com\//,
  workbox.strategies.networkFirst(),
);

workbox.routing.registerRoute(
  /^https:\/\/cdnjs\.cloudflare\.com\//,
  workbox.strategies.networkFirst(),
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
