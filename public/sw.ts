// Generate sw.js from sw.ts
// https://github.com/vercel/next.js/issues/33863#issuecomment-1793001847

/// <reference lib="webworker" />
const sw = self as unknown as ServiceWorkerGlobalScope; // we still need to override the "self" variable

const installEvent = () => {
    self.addEventListener('install', () => {
        console.log('service worker installed')
    })
}
installEvent()

const activateEvent = () => {
    self.addEventListener('activate', () => {
        console.log('service worker activated');
        // https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim
        sw.clients.claim();
    });
};
activateEvent();

const cacheClone = async (e) => {
    const res = await fetch(e.request);
    const resClone = res.clone();

    const cache = await caches.open(getCache(e.request));
    await cache.put(e.request, resClone);
    return res;
};

const fetchEvent = () => {
    self.addEventListener('fetch', (e: FetchEvent) => {
        if(isLiveApiContent(e.request)) {
            return fetch(e.request);
        }

        return e.respondWith(
            cacheClone(e)
            .catch(() => caches.match(e.request))
            .then((res) => res)
        );
    });
};
fetchEvent();


const getCache = (request: Request) => {
    if(isStaticApiContent(request)) {
        return 'list-content'
    }
    if(imageCache(request)) {
        return 'picsum-images'
    }
    return 'app-shell'
}

const imageCache = (request: Request) => {
    const hostname = new URL(request.url).hostname;
    return hostname.includes('picsum.photos')
}

const isStaticApiContent = (request: Request) => {
    const pathname = new URL(request.url).pathname;
    return pathname.startsWith('/api/content')
}

const isLiveApiContent = (request: Request) => {
    const pathname = new URL(request.url).pathname;
    return pathname.startsWith('/api/live')
}