// Generate sw.js from sw.ts
// https://github.com/vercel/next.js/issues/33863#issuecomment-1793001847

/// <reference lib="webworker" />
const sw = self as unknown as ServiceWorkerGlobalScope // we still need to override the "self" variable

const installEvent = () => {
    self.addEventListener('install', () => {
        console.log('service worker installed')
    })
}
installEvent()

const activateEvent = () => {
    self.addEventListener('activate', () => {
        console.log('service worker activated')
        // https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim
        sw.clients.claim()
    })
}
activateEvent()

const cacheClone = async (e) => {
    const res = await fetch(e.request)
    const resClone = res.clone()

    const cache = await caches.open('theOnlyCacheAvailable')
    await cache.put(e.request, resClone)
    return res
}

const fetchListener = () => {
    self.addEventListener('fetch', (e: FetchEvent) => {
        // TODO 1: If there is a live data request - never access the cache
        // HINT: you can call fetch from the service worker

        // TODO 2: Whenever the static content is called - store it in a specific cache
        // HINT: send the response with "e.respondWIth"
        // HINT: use the cacheClone helper function

        // TODO 3: Identify the pictures an put those in a specific cache
    })
}
// fetchListener()