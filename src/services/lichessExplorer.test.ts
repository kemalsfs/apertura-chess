import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { ExplorerSource } from '../types/explorer';

const explorerCache = vi.hoisted(() => ({ get: vi.fn(), put: vi.fn() }));
vi.mock('../db/db', () => ({ db: { explorerCache } }));

import { fetchOpeningExplorer } from './lichessExplorer';

const startFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

describe('opening explorer provenance', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    explorerCache.get.mockResolvedValue(undefined);
    explorerCache.put.mockResolvedValue(undefined);
  });

  afterEach(() => vi.unstubAllGlobals());

  it.each<ExplorerSource>(['masters', 'lichess'])(
    'does not replace unavailable %s API statistics with bundled counts',
    async (source) => {
      const request = vi.fn().mockRejectedValue(new Error('offline'));
      vi.stubGlobal('fetch', request);

      const first = await fetchOpeningExplorer(startFen, source);
      const second = await fetchOpeningExplorer(startFen, source);

      expect(first).toMatchObject({
        provenance: { kind: 'unavailable', source, retrievedAt: null, schemaVersion: 1 },
        moves: [], totalGames: 0, white: 0, draws: 0, black: 0,
      });
      expect(second.provenance.kind).toBe('unavailable');
      expect(request).toHaveBeenCalledTimes(2);
      expect(explorerCache.put).not.toHaveBeenCalled();
    },
  );

  it('keeps live statistics and records the actual query and retrieval time', async () => {
    const request = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        white: 2, draws: 1, black: 1,
        moves: [{ uci: 'e2e4', san: 'e4', white: 2, draws: 1, black: 1 }],
      }),
    });
    vi.stubGlobal('fetch', request);

    const result = await fetchOpeningExplorer(startFen, 'lichess');

    expect(result.totalGames).toBe(4);
    expect(result.moves[0].whitePercent).toBe(50);
    expect(result.provenance).toMatchObject({
      kind: 'lichess-api', source: 'lichess',
      sourceUrl: 'https://explorer.lichess.ovh/lichess',
      filters: { ratings: '1600,1800,2000,2200,2500', speeds: 'blitz,rapid,classical', topGames: 0 },
      schemaVersion: 1,
    });
    expect(Date.parse(result.provenance.retrievedAt!)).not.toBeNaN();
    expect(explorerCache.put).toHaveBeenCalledOnce();
  });

  it('retries and recovers when a previously unavailable position comes online', async () => {
    const request = vi.fn()
      .mockRejectedValueOnce(new Error('offline'))
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ white: 1, draws: 0, black: 0, moves: [] }),
      });
    vi.stubGlobal('fetch', request);

    expect((await fetchOpeningExplorer(startFen, 'masters')).provenance.kind).toBe('unavailable');
    const recovered = await fetchOpeningExplorer(startFen, 'masters');

    expect(recovered.provenance.kind).toBe('lichess-api');
    expect(recovered.totalGames).toBe(1);
    expect(request).toHaveBeenCalledTimes(2);
  });
});
