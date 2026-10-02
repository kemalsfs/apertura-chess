import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('./lichessExplorer', () => ({ getLichessToken: () => '' }));

import { fetchCloudEval } from './cloudEval';

describe('cloud evaluation score validity', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('rejects responses without a measured depth or a scored PV', async () => {
    const request = vi.fn()
      .mockResolvedValueOnce({ ok: true, json: async () => ({ pvs: [{ moves: 'e2e4', cp: 42 }] }) })
      .mockResolvedValueOnce({ ok: true, json: async () => ({ depth: 30, pvs: [{ moves: 'e2e4' }] }) });
    vi.stubGlobal('fetch', request);

    expect(await fetchCloudEval('missing-depth', 'w')).toBeNull();
    expect(await fetchCloudEval('missing-score', 'w')).toBeNull();
  });

  it('keeps a genuine zero score and skips unscored variations', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        depth: 21,
        pvs: [
          { moves: 'e2e4' },
          { moves: 'd2d4 d7d5', cp: 0 },
          { moves: 'g1f3', cp: 12 },
        ],
      }),
    }));

    expect(await fetchCloudEval('real-zero', 'w')).toMatchObject({
      type: 'cp', value: 0, depth: 21, bestMove: 'd2d4',
      topMoves: [{ uci: 'd2d4', rank: 1 }, { uci: 'g1f3', rank: 2 }],
    });
  });
});
