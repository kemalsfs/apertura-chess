import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import vm from 'node:vm';

test('built app shell opens the cached home page when the network is down', async () => {
  const source = await readFile(new URL('../dist/sw.js', import.meta.url), 'utf8');
  const handlers = new Map();
  const home = { body: 'cached Apertura home' };
  const cached = new Map();
  const cache = {
    addAll: async urls => {
      assert.ok(urls.includes('/index.html'));
      assert.ok(urls.some(url => url.endsWith('.js')));
      assert.ok(urls.some(url => url.endsWith('.css')));
      cached.set('/index.html', home);
    },
    match: async request => cached.get(request),
  };
  const caches = {
    open: async () => cache,
    match: async () => undefined,
  };
  const self = {
    location: { origin: 'http://127.0.0.1:4173' },
    addEventListener: (type, handler) => handlers.set(type, handler),
    skipWaiting: async () => {},
  };
  vm.runInNewContext(source, {
    self, caches, URL,
    fetch: async () => { throw new Error('offline'); },
  });

  let installation;
  handlers.get('install')({ waitUntil: promise => { installation = promise; } });
  await installation;

  let response;
  handlers.get('fetch')({
    request: { url: 'http://127.0.0.1:4173/', method: 'GET', mode: 'navigate' },
    respondWith: promise => { response = promise; },
  });
  assert.equal(await response, home);

  response = undefined;
  handlers.get('fetch')({
    request: { url: 'https://lichess.org/api/cloud-eval', method: 'GET', mode: 'cors' },
    respondWith: promise => { response = promise; },
  });
  assert.equal(response, undefined, 'third-party API requests must not be cached');
});
