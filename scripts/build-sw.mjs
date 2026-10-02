import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? listFiles(path) : [path];
  }));
  return nested.flat();
}

const files = (await listFiles(dist))
  .filter(file => !file.endsWith(`${sep}sw.js`))
  .sort();
const urls = files.map(file => `/${relative(dist, file).split(sep).join('/')}`);
const hash = createHash('sha256');
for (const file of files) {
  hash.update(relative(dist, file));
  hash.update(await readFile(file));
}
const cacheName = `apertura-shell-${hash.digest('hex').slice(0, 16)}`;

const source = `const CACHE = ${JSON.stringify(cacheName)};
const SHELL = ${JSON.stringify(urls)};

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(Promise.all([
    caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('apertura-shell-') && key !== CACHE).map(key => caches.delete(key)))),
    self.clients.claim(),
  ]));
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).catch(async () => (await caches.open(CACHE)).match('/index.html')));
    return;
  }
  if (SHELL.includes(url.pathname)) {
    event.respondWith(caches.match(request).then(cached => cached || fetch(request)));
  }
});
`;

await writeFile(join(dist, 'sw.js'), source);
console.log(`Generated offline shell ${cacheName} with ${urls.length} assets.`);
