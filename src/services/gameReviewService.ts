import { fetchCloudEval } from './cloudEval';

import { classifyMove, type ClassificationResult, type ClassifyInput } from '../utils/moveClassifier';

export const REVIEW_MIN_DEPTH = 10;

export interface EvalPoint {
  ply: number;
  cp: number;
  bestMove?: string;
  depth: number;
}

export function classifyEvaluatedMove(
  move: Omit<ClassifyInput, 'bestMoveUci' | 'prevCp' | 'currentCp'>,
  previous: EvalPoint | undefined,
  current: EvalPoint | undefined
): ClassificationResult | null {
  if (!previous || !current ||
      previous.depth < REVIEW_MIN_DEPTH || current.depth < REVIEW_MIN_DEPTH ||
      !Number.isFinite(previous.cp) || !Number.isFinite(current.cp)) return null;

  return classifyMove({
    ...move,
    bestMoveUci: previous.bestMove,
    prevCp: previous.cp,
    currentCp: current.cp,
  });
}

export class GameReviewService {
  private worker: Worker | null = null;
  private isCancelled = false;
  private cancelPendingEvaluation: (() => void) | null = null;
  private cloudController: AbortController | null = null;

  constructor() {
    this.initWorker();
  }

  private initWorker() {
    if (typeof window === 'undefined') return;
    try {
      this.worker = new Worker('/stockfish.js');
      this.worker.postMessage('uci');
      this.worker.postMessage('isready');
    } catch (e) {
      this.worker = null;
      console.warn('GameReviewService worker init failed:', e);
    }
  }

  public cancel() {
    this.isCancelled = true;
    this.cloudController?.abort();
    this.cancelPendingEvaluation?.();
    if (this.worker) {
      try {
        this.worker.postMessage('stop');
        this.worker.terminate();
      } catch (e) {}
      this.worker = null;
    }
  }

  /**
   * Evaluates a single position on the dedicated review worker with a promise.
   */
  public evaluatePosition(
    fen: string,
    turn: 'w' | 'b',
    targetDepth = REVIEW_MIN_DEPTH,
    maxTimeMs = 1000
  ): Promise<EvalPoint | null> {
    return new Promise((resolve) => {
      if (this.isCancelled) {
        return resolve(null);
      }

      if (!this.worker) {
        this.initWorker();
      }

      if (!this.worker) {
        return resolve(null);
      }

      let bestCp: number | undefined;
      let bestMove: string | undefined = undefined;
      let currentDepth = 0;
      let isResolved = false;

      const finish = (cancelled = false) => {
        if (!isResolved) {
          isResolved = true;
          clearTimeout(timeoutTimer);
          this.cancelPendingEvaluation = null;
          if (this.worker) {
            this.worker.onmessage = null;
            this.worker.onerror = null;
            try { this.worker.postMessage('stop'); } catch (e) { /* Worker may already be gone. */ }
          }
          resolve(!cancelled && bestCp !== undefined && currentDepth >= targetDepth ? {
            ply: 0,
            cp: bestCp,
            bestMove,
            depth: currentDepth,
          } : null);
        }
      };

      const timeoutTimer = setTimeout(finish, maxTimeMs);
      this.cancelPendingEvaluation = () => finish(true);
      this.worker.onerror = () => finish(true);

      this.worker.onmessage = (e: MessageEvent) => {
        if (isResolved || this.isCancelled) return;
        const line = typeof e.data === 'string' ? e.data : '';

        if (line.startsWith('info') && line.includes('score') && !/\bmultipv\s+[2-9]\d*\b/.test(line)) {
          const depthMatch = line.match(/depth\s+(\d+)/);
          const scoreMatch = line.match(/score\s+(cp|mate)\s+(-?\d+)/);
          if (!depthMatch || !scoreMatch) return;
          currentDepth = parseInt(depthMatch[1], 10);

          const pvMatch = line.match(/pv\s+([a-h1-8]{4,5})/);
          if (pvMatch) {
            bestMove = pvMatch[1];
          }

          const rawVal = parseInt(scoreMatch[2], 10);
          const scoreType = scoreMatch[1];
          const perspectiveVal = rawVal === 0 ? 0 : turn === 'w' ? rawVal : -rawVal;
          bestCp = scoreType === 'mate' ? (perspectiveVal > 0 ? 10000 : -10000) : perspectiveVal;

          if (currentDepth >= targetDepth) {
            finish();
          }
        } else if (line.startsWith('bestmove')) {
          const parts = line.split(' ');
          if (parts[1] && parts[1] !== '(none)') {
            bestMove = parts[1];
          }
          finish();
        }
      };

      try {
        this.worker.postMessage('stop');
        this.worker.postMessage(`position fen ${fen}`);
        this.worker.postMessage(`go depth ${targetDepth}`);
      } catch (e) {
        finish(true);
      }
    });
  }

  /**
   * Reviews all positions sequentially:
   * 1. Checks Cloud Eval first when it has a measured score and sufficient depth.
   * 2. Falls back to local worker for unindexed middle/endgame positions.
   */
  public async analyzePositions(
    positions: { ply: number; fen: string; turn: 'w' | 'b' }[],
    onPoint: (point: EvalPoint) => void
  ) {
    this.isCancelled = false;

    for (let i = 0; i < positions.length; i++) {
      if (this.isCancelled) break;
      const pos = positions[i];

      let point: EvalPoint | null = null;

      // 1. Try Cloud Eval with a bounded wait.
      const cloudController = new AbortController();
      this.cloudController = cloudController;
      const cloudTimeout = setTimeout(() => cloudController.abort(), 1500);
      try {
        const cloudRes = await fetchCloudEval(pos.fen, pos.turn, cloudController.signal);
        if (cloudRes && !this.isCancelled &&
            Number.isFinite(cloudRes.value) &&
            Number.isFinite(cloudRes.depth) && cloudRes.depth >= REVIEW_MIN_DEPTH) {
          const cpVal = cloudRes.type === 'mate'
            ? (cloudRes.value > 0 ? 10000 : -10000)
            : cloudRes.value;
          point = {
            ply: pos.ply,
            cp: cpVal,
            bestMove: cloudRes.bestMove,
            depth: cloudRes.depth,
          };
        }
      } catch (e) {
        // Fallback to local
      } finally {
        clearTimeout(cloudTimeout);
        if (this.cloudController === cloudController) this.cloudController = null;
      }

      // 2. Fallback to Dedicated Local Stockfish Worker
      if (!point && !this.isCancelled) {
        const localPoint = await this.evaluatePosition(pos.fen, pos.turn);
        if (localPoint) point = {
          ply: pos.ply,
          cp: localPoint.cp,
          bestMove: localPoint.bestMove,
          depth: localPoint.depth,
        };
      }

      if (point && !this.isCancelled) {
        onPoint(point);
      }
    }
  }
}
