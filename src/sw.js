importScripts('workbox-sw.prod.v1.0.1.js');

const workboxSW = new WorkboxSW();

self.addEventListener('fetch', function (event) {
  console.log('requested: ', event.request);
});

workboxSW.precache([]);
