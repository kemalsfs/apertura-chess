import type { EvaluationResult } from '../types/explorer';

type EvalCallback = (evalResult: EvaluationResult) => void;

class StockfishService {
  private worker: Worker | null = null;
  private currentTurn: 'w' | 'b' = 'w';
  private callback: EvalCallback | null = null;

  constructor() {
    this.initWorker();
  }

  private initWorker() {
    if (typeof window === 'undefined') return;

    try {
      this.worker = new Worker('/stockfish.js');

      this.worker.onmessage = (e: MessageEvent) => {
        const line = typeof e.data === 'string' ? e.data : '';

        // Parse UCI "info depth X ... score cp Y ... pv ..." or "score mate Z"
        if (line.startsWith('info') && line.includes('score')) {
          this.parseUciInfo(line);
        }
      };

      this.worker.postMessage('uci');
      this.worker.postMessage('isready');
    } catch (err) {
      console.warn('Stockfish Web Worker initialization failed:', err);
    }
  }

  private parseUciInfo(line: string) {
    if (!this.callback) return;

    // Match depth
    const depthMatch = line.match(/depth\s+(\d+)/);
    const depth = depthMatch ? parseInt(depthMatch[1], 10) : 10;

    // Match best move in pv
    const pvMatch = line.match(/pv\s+([a-h1-8]{4,5})/);
    const bestMove = pvMatch ? pvMatch[1] : undefined;

    // Match score cp or mate
    const scoreMatch = line.match(/score\s+(cp|mate)\s+(-?\d+)/);
    if (!scoreMatch) return;

    const scoreType = scoreMatch[1] as 'cp' | 'mate';
    const rawVal = parseInt(scoreMatch[2], 10);

    // CRITICAL: In UCI protocol, score is from the active player's perspective.
    // We convert everything to White's perspective (positive = White winning, negative = Black winning)
    const whitePerspectiveVal = this.currentTurn === 'w' ? rawVal : -rawVal;

    this.callback({
      type: scoreType,
      value: whitePerspectiveVal,
      depth,
      bestMove,
      source: 'local',
      isLoading: false,
    });
  }

  public evaluate(fen: string, turn: 'w' | 'b', onEval: EvalCallback) {
    this.currentTurn = turn;
    this.callback = onEval;

    if (!this.worker) {
      this.initWorker();
    }

    if (this.worker) {
      this.worker.postMessage('stop');
      this.worker.postMessage(`position fen ${fen}`);
      this.worker.postMessage('go depth 14');
    }
  }

  public stop() {
    if (this.worker) {
      this.worker.postMessage('stop');
    }
  }
}

export const stockfishEngine = new StockfishService();