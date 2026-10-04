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
  // Stay waiting while pages from the previous build are open. They may still
  // request versioned lazy chunks after this worker has finished installing.
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key.startsWith('apertura-shell-') && key !== CACHE)
      .map(key => caches.delete(key))
  )));
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    // Pair each controlled page with this worker's HTML and asset manifest.
    // A network-first HTML response could reference chunks from a newer build.
    event.respondWith(caches.open(CACHE).then(cache => cache.match('/index.html')).then(cached => cached || fetch(request)));
    return;
  }
  if (SHELL.includes(url.pathname)) {
    event.respondWith(caches.match(request).then(cached => cached || fetch(request)));
  }
});
`;

await writeFile(join(dist, 'sw.js'), source);
console.log(`Generated offline shell ${cacheName} with ${urls.length} assets.`);
