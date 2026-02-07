importScripts('/scram/scramjet.all.js');

const scramjet = new ScramjetController({
    prefix: '/sj/', 
    files: {
        wasm: '/scram/scramjet.wasm.wasm',
        all: '/scram/scramjet.all.js',
    },
    transport: {
        wisp: 'wss://wisp.mercurywork.shop/'
    }
});

self.addEventListener('fetch', (event) => {
    // This catches any request with /sj/ and unblocks it
    if (event.request.url.includes('/sj/')) {
        event.respondWith(scramjet.fetch(event));
    }
});
