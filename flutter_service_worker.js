'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0bbcce22545351d62c7ce1ceb4483630",
"index.html": "5df638dbdce8438d6f724050559d179a",
"/": "5df638dbdce8438d6f724050559d179a",
"styles.css": "a0dc6a54fe48184368ee306a285bd535",
"main.dart.js": "e76b4e138fc9b6acb36f46ed2ddcb1fb",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/favicon.ico": "6f40ec54c92efbc75b3bbb5253be714c",
"icons/apple-icon.png": "e8a067d2da2c5bd075758d53b9c06f5e",
"icons/apple-icon-144x144.png": "6fc014ab2da2bcef3248e007fce7e11f",
"icons/android-icon-192x192.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/apple-icon-114x114.png": "7df1ca9a58ceeca4db5d20eae3af08be",
"icons/ms-icon-310x310.png": "98d70e9b4849755569cc8f4c89027609",
"icons/ms-icon-144x144.png": "23321393bd79ecd0f65eea08b4fe502d",
"icons/apple-icon-57x57.png": "18f58ab587bf5f74da3fe694afdca77f",
"icons/apple-icon-152x152.png": "440b6f962245129a1294f7488172e1d3",
"icons/favicon.png": "389f856db9f5a4676fdc832629b80597",
"icons/ms-icon-150x150.png": "440b6f962245129a1294f7488172e1d3",
"icons/android-icon-72x72.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/android-icon-96x96.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/android-icon-36x36.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/apple-icon-180x180.png": "9fba3052c74ac5673efa105d8cccfeb6",
"icons/android-icon-48x48.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/apple-icon-76x76.png": "695529cfaa5dd85fec036e4ed9417d3e",
"icons/android-icon.png": "7df1ca9a58ceeca4db5d20eae3af08be",
"icons/apple-icon-60x60.png": "0ad109ac60c3688f90004367553c9bd9",
"icons/browserconfig.xml": "73f219ccbdaf1246006641473be68810",
"icons/android-icon-144x144.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/apple-icon-72x72.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/apple-icon-120x120.png": "23321393bd79ecd0f65eea08b4fe502d",
"icons/ms-icon-70x70.png": "695529cfaa5dd85fec036e4ed9417d3e",
"manifest.json": "ae9252263625d5e6542e1d4fffff29fe",
"assets/AssetManifest.json": "c94d71b97e219ca6463ad9f6051a6bd9",
"assets/NOTICES": "1b6b9c204a60ce776b769c99aa050534",
"assets/FontManifest.json": "927f2f13a2d04e1dbe1ab15efbdb72fa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/shaders/ink_sparkle.frag": "416c7c25475ffc7c528ab813200ff8e5",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/bagvandCV.pdf": "f8d003f345d0da05d9d909287756771f",
"assets/assets/images/me.png": "3086622ac0e6e8e1c19557ccff5f164c",
"assets/assets/images/kresna_icon.png": "bf91379081fbe80c272bebb82aaf5f27",
"assets/assets/images/tda_icon.png": "12908089a7c46ac2e21bdf4611df67c3",
"assets/assets/images/zou.png": "6718284023d13188048b859d4e829ad2",
"assets/assets/images/kresna_officer_icon.png": "879b49c1ec8c3d4cf1d4b4edac62b148",
"assets/assets/images/reps_icon.png": "09116a0f122ef19588cdbd7de086570e",
"assets/assets/images/mans.png": "6459a78b8d655079c08d4249cbcc0db5",
"assets/assets/images/man.png": "32f19a488bd2b9d7a65c56d906ba736b",
"assets/assets/images/reps_inst_icon.png": "ec76268504ad3c5101189d0df765d351",
"assets/assets/images/exp.png": "a092dab41abc5ec0f931f51993503d0a",
"assets/assets/images/por_icon.png": "8ac5fd4cb1fa8bc21c74a814c044adda",
"assets/assets/images/medi_dokter_icon.png": "ff0c8618f6c4fcfcb602b15d38333eb3",
"assets/assets/images/phr_icon.png": "e8ad464be1f43e482ba0aed76a6bd8f3",
"assets/assets/images/medi_icon.png": "93195c3bc71fd39d60676792d671ad28",
"assets/assets/images/hf_icon.png": "98da1c82e77d51db498bd6ae3685c273",
"assets/assets/fonts/Ubuntu-Medium.ttf": "8e22c2a6e3a3c679787e763a97fa11f7",
"assets/assets/fonts/Ubuntu-Regular.ttf": "2505bfbd9bde14a7829cc8c242a0d25c",
"assets/assets/fonts/Ubuntu-Bold.ttf": "e00e2a77dd88a8fe75573a5d993af76a",
"assets/assets/fonts/MySocialIcons.ttf": "345787fe6cbe5bf827f3a84436278f6f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
