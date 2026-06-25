// service worker version number
const SW_VERSION = 2;

// cache name including version number
const cacheName = `ganjoor-cache-${SW_VERSION}`;

// static files to cache
const staticFiles = [
  "/manifest.json",
  "/offline",
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
  const cache = await caches.open(cacheName);
  await cache.put(request, response);
};

const networkFirst = async ({ request, fallbackUrl, event }) => {
  try {
    const responseFromNetwork = await fetch(request);

    if (responseFromNetwork.ok){
      event.waitUntil(putInCache(request, responseFromNetwork.clone()));
    }

    return responseFromNetwork;
  } catch (error) {
    const responseFromCache = await caches.match(request);

    if (responseFromCache) {
      return responseFromCache;
    }

    const fallbackResponse = await caches.match(fallbackUrl);

    if (fallbackResponse) {
      return fallbackResponse;
    }

    return new Response("Offline", {
      status: 503,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
};

const cacheFirst = async ({ request, event }) => {
  const responseFromCache = await caches.match(request);

  if (responseFromCache) {
    return responseFromCache;
  }

  try {
    const responseFromNetwork = await fetch(request);
      if (responseFromNetwork.ok){
        event.waitUntil(
          putInCache(request, responseFromNetwork.clone())
        );
      }
    return responseFromNetwork;
  } catch {
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

  if (event.request.method !== "GET") {
    return;
  }

  // HTML Pages
  if (request.mode === "navigate") {
    event.respondWith(
      networkFirst({
        request,
        fallbackUrl: "/offline",
        event,
      }),
    );
    return;
  }

  if (event.request.url.includes("/_next/static/")) {
    event.respondWith(
      cacheFirst({
        request: event.request,
        event,
      }),
    );

    return;
  }

  // Images
  if (request.destination === "image") {
    event.respondWith(
      cacheFirst({
        request,
        event,
      }),
    );
    return;
  }

// API
if (url.pathname.startsWith("/api")) {
  event.respondWith(fetch(request));
  return;
}

event.respondWith(fetch(request));

});
