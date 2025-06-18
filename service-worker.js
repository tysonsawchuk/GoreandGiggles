// ⚙️ PromptForge MONSTER – Service Worker (v1)

const CACHE_NAME = "promptforge-cache-v1";
const ASSETS_TO_CACHE = [
  "./index.html",
  "./index_glitchy.html",
  "./manifest.json",
  "./css/styles.css",
  "./scripts/main.js",
  "./scripts/backlink-loader.js",
  "./scripts/help-globals.js",
  "./scripts/forge-config.js",
  "./tools/randomizer.js",
  "./tools/watermark-tool.js",
  "./tools/signature-box.js",
  "./vault/vault.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
});
