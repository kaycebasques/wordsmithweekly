importScripts('workbox-sw.prod.v1.0.1.js');

const workbox = new WorkboxSW();

function handlePrettyUrl(args) {
  console.log(args);
  if (args.url.pathname.endsWith('/')) return caches.match(args.url +
      'index.html');
  if (args.url.pathname === '') return caches.match('/index.html');
  return caches.match(args.url + '.html');
}

workbox.router.registerRoute(/^https\:\/\/wordsmithweekly\.com[^.]*$/,
    handlePrettyUrl);

workbox.precache([]);
