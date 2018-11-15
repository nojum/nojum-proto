importScripts("precache-manifest.e811aa05a7bb5bddb4d0da98bb68f248.js", "https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

console.log("front-end stack from service-worker.js");

workbox.skipWaiting();
workbox.clientsClaim();

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
