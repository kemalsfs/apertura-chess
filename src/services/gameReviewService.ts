import { fetchCloudEval } from './cloudEval';

export interface EvalPoint {
  ply: number;
  cp: number;
  bestMove?: string;
  depth: number;
}

export class GameReviewService {
  private worker: Worker | null = null;
  private isCancelled = false;

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
      console.warn('GameReviewService worker init failed:', e);
    }
  }

  public cancel() {
    this.isCancelled = true;
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
    targetDepth = 10,
    maxTimeMs = 350
  ): Promise<EvalPoint> {
    return new Promise((resolve) => {
      if (this.isCancelled) {
        return resolve({ ply: 0, cp: 0, depth: 0 });
      }

      if (!this.worker) {
        this.initWorker();
      }

      if (!this.worker) {
        return resolve({ ply: 0, cp: 0, depth: 0 });
      }

      let bestCp = 0;
      let bestMove: string | undefined = undefined;
      let currentDepth = 0;
      let isResolved = false;

      const finish = () => {
        if (!isResolved) {
          isResolved = true;
          clearTimeout(timeoutTimer);
          if (this.worker) {
            this.worker.onmessage = null;
            this.worker.postMessage('stop');
          }
          resolve({
            ply: 0,
            cp: bestCp,
            bestMove,
            depth: currentDepth,
          });
        }
      };

      const timeoutTimer = setTimeout(finish, maxTimeMs);

      this.worker.onmessage = (e: MessageEvent) => {
        if (isResolved || this.isCancelled) return;
        const line = typeof e.data === 'string' ? e.data : '';

        if (line.startsWith('info') && line.includes('score')) {
          const depthMatch = line.match(/depth\s+(\d+)/);
          if (depthMatch) {
            currentDepth = parseInt(depthMatch[1], 10);
          }

          const pvMatch = line.match(/pv\s+([a-h1-8]{4,5})/);
          if (pvMatch) {
            bestMove = pvMatch[1];
          }

          const scoreMatch = line.match(/score\s+(cp|mate)\s+(-?\d+)/);
          if (scoreMatch) {
            const rawVal = parseInt(scoreMatch[2], 10);
            const scoreType = scoreMatch[1];
            const perspectiveVal = turn === 'w' ? rawVal : -rawVal;
            bestCp = scoreType === 'mate' ? (perspectiveVal > 0 ? 10000 : -10000) : perspectiveVal;
          }

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

      this.worker.postMessage('stop');
      this.worker.postMessage(`position fen ${fen}`);
      this.worker.postMessage(`go depth ${targetDepth}`);
    });
  }

  /**
   * Reviews all positions sequentially:
   * 1. Checks Cloud Eval first (instant Depth 50 for opening and popular positions).
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

      // 1. Try Cloud Eval (instant Depth 50)
      try {
        const cloudRes = await fetchCloudEval(pos.fen, pos.turn);
        if (cloudRes && !this.isCancelled) {
          const cpVal = cloudRes.type === 'mate'
            ? (cloudRes.value > 0 ? 10000 : -10000)
            : cloudRes.value;
          point = {
            ply: pos.ply,
            cp: cpVal,
            bestMove: cloudRes.bestMove,
            depth: cloudRes.depth || 50,
          };
        }
      } catch (e) {
        // Fallback to local
      }

      // 2. Fallback to Dedicated Local Stockfish Worker
      if (!point && !this.isCancelled) {
        const localPoint = await this.evaluatePosition(pos.fen, pos.turn, 10, 300);
        point = {
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
