import type { EvaluationResult, EngineMoveOption } from '../types/explorer';

type EvalCallback = (evalResult: EvaluationResult) => void;

class StockfishService {
  private worker: Worker | null = null;
  private currentTurn: 'w' | 'b' = 'w';
  private callback: EvalCallback | null = null;
  private multiPvMap = new Map<number, EngineMoveOption>();

  constructor() {
    this.initWorker();
  }

  private initWorker() {
    if (typeof window === 'undefined') return;

    try {
      this.worker = new Worker('/stockfish.js');

      this.worker.onmessage = (e: MessageEvent) => {
        const line = typeof e.data === 'string' ? e.data : '';

        // Parse UCI "info depth X ... multipv N ... score cp Y ... pv ..." or "score mate Z"
        if (line.startsWith('info') && line.includes('score') && line.includes('pv')) {
          this.parseUciInfo(line);
        }
      };

      this.worker.postMessage('uci');
      this.worker.postMessage('setoption name MultiPV value 3');
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

    // Match multipv rank (defaults to 1 if not specified)
    const multipvMatch = line.match(/multipv\s+(\d+)/);
    const rank = multipvMatch ? parseInt(multipvMatch[1], 10) : 1;

    // Match best move in pv
    const pvMatch = line.match(/pv\s+([a-h1-8]{4,5})/);
    const uciMove = pvMatch ? pvMatch[1] : undefined;
    if (!uciMove) return;

    // Match score cp or mate
    const scoreMatch = line.match(/score\s+(cp|mate)\s+(-?\d+)/);
    if (!scoreMatch) return;

    const scoreType = scoreMatch[1] as 'cp' | 'mate';
    const rawVal = parseInt(scoreMatch[2], 10);

    // Convert to White's perspective
    const whitePerspectiveVal = this.currentTurn === 'w' ? rawVal : -rawVal;

    const from = uciMove.slice(0, 2);
    const to = uciMove.slice(2, 4);

    const moveOption: EngineMoveOption = {
      uci: uciMove,
      from,
      to,
      type: scoreType,
      value: whitePerspectiveVal,
      depth,
      rank,
    };

    this.multiPvMap.set(rank, moveOption);

    const topMoves = Array.from(this.multiPvMap.values()).sort((a, b) => a.rank - b.rank);
    const bestOption = this.multiPvMap.get(1);

    this.callback({
      type: bestOption?.type || scoreType,
      value: bestOption?.value ?? whitePerspectiveVal,
      depth,
      bestMove: bestOption?.uci,
      topMoves,
      source: 'local',
      isLoading: false,
    });
  }

  public evaluate(fen: string, turn: 'w' | 'b', onEval: EvalCallback) {
    this.currentTurn = turn;
    this.callback = onEval;
    this.multiPvMap.clear();

    if (!this.worker) {
      this.initWorker();
    }

    if (this.worker) {
      this.worker.postMessage('stop');
      this.worker.postMessage('setoption name MultiPV value 3');
      this.worker.postMessage(`position fen ${fen}`);
      this.worker.postMessage('go depth 15');
    }
  }

  public stop() {
    if (this.worker) {
      this.worker.postMessage('stop');
    }
  }
}

export const stockfishEngine = new StockfishService();
