/// <reference lib="webworker" />
/* eslint-env serviceworker */
const sw = self as unknown as ServiceWorkerGlobalScope
sw.addEventListener('install', () => sw.skipWaiting())
sw.addEventListener('activate', (e) => e.waitUntil(sw.clients.claim()))
