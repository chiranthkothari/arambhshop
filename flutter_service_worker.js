'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "858524721e1fea613e3f2167ca6ca504",
"/assets\assets\fonts\product_sans.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"/assets\assets\images\bag.jpg": "156e802e11a15988e8c08048aa49e84b",
"/assets\FontManifest.json": "f853a9a8eccfb925f9d7b717674e3b69",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\LICENSE": "a92011770f07ff1bcf863593642141ce",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "71157ba6a5c28267ed55d96d0b32dde8",
"/main.dart.js": "0e2b596c3e39725ea4d2271ecae39cbc",
"/manifest.json": "2631f824b406905e632b46598352f285"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
