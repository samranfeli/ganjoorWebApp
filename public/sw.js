// service worker version number
const SW_VERSION = 7;

// cache name including version number
const cacheName = `ganjoor-cache-${SW_VERSION}`;

// static files to cache
const staticFiles = [
  "/manifest.json",
  "/offline.html",
  "/offline-fonts/Vazir-Bold-FD.woff2",
  "/offline-fonts/Vazir-FD.woff2",
  "/offline-fonts/Vazir-Medium-FD.woff2",
  "/about",
  "/privacy",
  "/faq",
  "/contact",
  "/web-app-manifest-192x192.png",
  "/web-app-manifest-512x512.png",
  "/images/icons/twitter.svg",
  "/images/icons/instagram.svg",
  "/images/icons/facebook.svg",
  "/images/icons/telegram.svg",
  "/images/logo.png",
  "/images/logo-large.png"
];

const addResourcesToCache = async (resources) => {
  const cache = await caches.open(cacheName);
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(addResourcesToCache(staticFiles));
});

const putInCache = async (request, response) => {
  if (!response || !response.ok) return;

  const cache = await caches.open(cacheName);
  await cache.put(request, response);
};

const staleWhileRevalidate = async ({ request, fallbackUrl }) => {
  const cachedResponse = await caches.match(request);

  // Cache Hit
  if (cachedResponse) {

    // Update cache in background
    (async () => {
      try {
        const response = await fetch(request);

        await putInCache(request, response.clone());

      } catch {
        // Ignore network errors
      }
    })();

    return cachedResponse;
  }

  // Cache Miss
  try {
    const response = await fetch(request);

    await putInCache(request, response.clone());

    return response;

  } catch {

    if (fallbackUrl) {
      const fallback = await caches.match(fallbackUrl);

      if (fallback) {
        return fallback;
      }
    }

    return Response.error();
  }
};

const deleteCache = async (key) => {
  await caches.delete(key);
};

const deleteOldCaches = async () => {
  const keyList = await caches.keys();
  const cachesToDelete = keyList.filter((key) => cacheName !== key);
  await Promise.all(cachesToDelete.map(deleteCache));
};

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      deleteOldCaches(),
      clients.claim(),
    ]),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== "GET") {
    return;
  }

  const isNavigation = request.mode === "navigate";

  const isApi = url.pathname.startsWith("/api");

  const isStatic = url.pathname.startsWith("/_next/static/");

  const isCacheableAsset =
    request.destination === "image" ||
    request.destination === "font" ||
    request.destination === "style" ||
    request.destination === "script";

  // API
  if (isApi) {
    event.respondWith(fetch(request));
    return;
  }

  // HTML Pages
  if (isNavigation) {
    event.respondWith(
      staleWhileRevalidate({
        request,
        fallbackUrl: "/offline.html",
      }),
    );
    return;
  }

  // JS / CSS / Images / Fonts / _next/static
  if (isStatic || isCacheableAsset) {
    event.respondWith(
      staleWhileRevalidate({
        request,
      }),
    );
    return;
  }

  // Everything else
  event.respondWith(fetch(request));
});
