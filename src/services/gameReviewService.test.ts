import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const fetchCloudEval = vi.hoisted(() => vi.fn());
vi.mock('./cloudEval', () => ({ fetchCloudEval }));

import { GameReviewService, REVIEW_MIN_DEPTH, classifyEvaluatedMove } from './gameReviewService';

const startFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

class FakeWorker {
  static instances: FakeWorker[] = [];
  onmessage: ((event: MessageEvent) => void) | null = null;
  onerror: ((event: ErrorEvent) => void) | null = null;
  messages: string[] = [];
  terminated = false;

  constructor() { FakeWorker.instances.push(this); }
  postMessage(message: string) { this.messages.push(message); }
  terminate() { this.terminated = true; }
  emit(line: string) { this.onmessage?.({ data: line } as MessageEvent); }
}

describe('game review score validity', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    FakeWorker.instances = [];
    fetchCloudEval.mockResolvedValue(null);
    vi.stubGlobal('window', undefined);
    vi.stubGlobal('Worker', undefined);
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it('does not emit a fabricated zero when cloud and worker are unavailable', async () => {
    const points: unknown[] = [];
    const service = new GameReviewService();
    expect(await service.evaluatePosition('fen', 'w')).toBeNull();
    await service.analyzePositions([{ ply: 1, fen: 'fen', turn: 'b' }], point => points.push(point));
    expect(points).toEqual([]);
  });

  it('requires measured positions before and after a move even when it is in the opening book', () => {
    const move = {
      prevFen: startFen, playedUci: 'e2e4', playedSan: 'e4',
      turn: 'w' as const, plyNumber: 1,
    };
    const previous = { ply: 0, cp: 0, depth: REVIEW_MIN_DEPTH, bestMove: 'e2e4' };
    const current = { ply: 1, cp: 20, depth: REVIEW_MIN_DEPTH };

    expect(classifyEvaluatedMove(move, undefined, current)).toBeNull();
    expect(classifyEvaluatedMove(move, previous, { ...current, depth: 9 })).toBeNull();
    expect(classifyEvaluatedMove(move, previous, current)?.quality).toBe('book');
  });

  it('rejects shallow results and accepts an actual zero at minimum depth', async () => {
    vi.stubGlobal('window', {});
    vi.stubGlobal('Worker', FakeWorker);
    const service = new GameReviewService();
    const worker = FakeWorker.instances[0];

    const shallow = service.evaluatePosition('fen1', 'w');
    worker.emit('info depth 9 score cp 58 pv e2e4');
    worker.emit('bestmove e2e4');
    expect(await shallow).toBeNull();

    const valid = service.evaluatePosition('fen2', 'b');
    worker.emit('info depth 10 multipv 2 score cp 500 pv d2d4');
    worker.emit('info depth 10 score cp 0 pv e2e4');
    expect(await valid).toMatchObject({ cp: 0, depth: REVIEW_MIN_DEPTH, bestMove: 'e2e4' });
  });

  it('returns no score on a shallow timeout and settles immediately on cancellation', async () => {
    vi.stubGlobal('window', {});
    vi.stubGlobal('Worker', FakeWorker);
    vi.useFakeTimers();
    const service = new GameReviewService();
    const worker = FakeWorker.instances[0];

    const timedOut = service.evaluatePosition('fen1', 'w', REVIEW_MIN_DEPTH, 50);
    worker.emit('info depth 5 score cp 42 pv e2e4');
    await vi.advanceTimersByTimeAsync(50);
    expect(await timedOut).toBeNull();

    const cancelled = service.evaluatePosition('fen2', 'w');
    service.cancel();
    expect(await cancelled).toBeNull();
    expect(worker.terminated).toBe(true);
  });

  it('publishes only cloud evaluations with a real score and sufficient depth', async () => {
    fetchCloudEval
      .mockResolvedValueOnce({ type: 'cp', value: 0, depth: 15, bestMove: 'e2e4' })
      .mockResolvedValueOnce({ type: 'cp', value: 44, depth: 8 })
      .mockResolvedValueOnce({ type: 'cp', value: Number.NaN, depth: 30 });
    const points: unknown[] = [];
    const service = new GameReviewService();
    await service.analyzePositions([
      { ply: 0, fen: 'fen0', turn: 'w' },
      { ply: 1, fen: 'fen1', turn: 'b' },
      { ply: 2, fen: 'fen2', turn: 'w' },
    ], point => points.push(point));
    expect(points).toEqual([{ ply: 0, cp: 0, depth: 15, bestMove: 'e2e4' }]);
  });
});
