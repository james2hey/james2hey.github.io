// The old Gatsby site registered an offline service worker at /sw.js. Browsers that still have it
// installed will fetch this file when checking for updates; it replaces the old worker, clears its
// caches, unregisters itself and reloads any open tabs so they get the live site.
// Safe to delete once old visitors have had time to pick it up.

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
    event.waitUntil(
        (async () => {
            const cacheNames = await caches.keys();
            await Promise.all(cacheNames.map(name => caches.delete(name)));
            await self.registration.unregister();
            const clients = await self.clients.matchAll({ type: 'window' });
            clients.forEach(client => client.navigate(client.url));
        })()
    );
});
