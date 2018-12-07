let cacheName = 'countdown-v1';
let appShellFiles = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/countdown.js',
    '/fonts/Mountains_of_Christmas/MountainsofChristmas-Regular.ttf',
    '/img/slinger.png',
    '/img/icon.png',
    '/manifest.webmanifest'
];

self.addEventListener('install', (e) => {
    console.log('Service Worker: installed');

    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('Service Worker: Caching files');
                cache.addAll(appShellFiles);
            })
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('fetch', function(e) {
    console.log('Service Worker: Fetching');
    e.respondWith(
        fetch(e.request)
        .catch(() => caches.match(e.request))
    );
});