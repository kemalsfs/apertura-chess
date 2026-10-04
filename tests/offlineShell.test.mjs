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
      assert.ok(urls.some(url => url.includes('DrillView-')));
      assert.ok(urls.some(url => url.includes('RepertoireAtlasView-')));
      assert.ok(urls.some(url => url.includes('AnalyticsView-')));
      cached.set('/index.html', home);
    },
    match: async request => cached.get(request),
  };
  let networkRequests = 0;
  let skippedWaiting = false;
  const caches = {
    open: async () => cache,
    match: async () => undefined,
  };
  const self = {
    location: { origin: 'http://127.0.0.1:4173' },
    addEventListener: (type, handler) => handlers.set(type, handler),
    skipWaiting: async () => { skippedWaiting = true; },
  };
  vm.runInNewContext(source, {
    self, caches, URL,
    fetch: async () => { networkRequests++; throw new Error('offline'); },
  });

  let installation;
  handlers.get('install')({ waitUntil: promise => { installation = promise; } });
  await installation;
  assert.equal(skippedWaiting, false, 'an update must wait for older open pages to close');

  let response;
  handlers.get('fetch')({
    request: { url: 'http://127.0.0.1:4173/', method: 'GET', mode: 'navigate' },
    respondWith: promise => { response = promise; },
  });
  assert.equal(await response, home);
  assert.equal(networkRequests, 0, 'controlled navigation must use its own cached HTML even when online');

  response = undefined;
  handlers.get('fetch')({
    request: { url: 'https://lichess.org/api/cloud-eval', method: 'GET', mode: 'cors' },
    respondWith: promise => { response = promise; },
  });
  assert.equal(response, undefined, 'third-party API requests must not be cached');
});
