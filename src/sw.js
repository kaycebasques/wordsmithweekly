importScripts('workbox-sw.prod.v1.0.1.js');

const workboxSW = new goog.SWLib();

self.addEventListener('fetch', function (event) {
  console.log('requested: ', event.request);
});

workboxSW.precache([]);
