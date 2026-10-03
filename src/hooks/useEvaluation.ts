import { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { fetchCloudEval } from '../services/cloudEval';
import { stockfishEngine } from '../services/stockfishEngine';
import type { EvaluationResult } from '../types/explorer';

const DISABLED_EVALUATION: EvaluationResult = {
  type: 'cp', value: 0, depth: 0, source: 'none', isLoading: false,
};
const INITIAL_EVALUATION: EvaluationResult = {
  type: 'cp', value: 20, depth: 0, source: 'none', isLoading: true,
};

export function useEvaluation(fen: string, turn: 'w' | 'b', enabled: boolean = true) {
  const [latest, setLatest] = useState<{ key: string; result: EvaluationResult } | null>(null);
  const requestKey = JSON.stringify([fen, turn]);
  const evaluation = latest?.key === requestKey
    ? latest.result
    : { ...(latest?.result ?? INITIAL_EVALUATION), isLoading: true };

  useEffect(() => {
    if (!enabled) return;

    const controller = new AbortController();
    let isCancelled = false;

    // Helper to compute SAN for top UCI moves
    const enrichWithSan = (evalRes: EvaluationResult): EvaluationResult => {
      try {
        if (!evalRes.topMoves || evalRes.topMoves.length === 0) return evalRes;
        
        // Check if SAN is already enriched
        const needsSan = evalRes.topMoves.some(m => !m.san || m.san === m.uci);
        if (!needsSan) return evalRes;

        const tempChess = new Chess(fen);
        const enrichedMoves = evalRes.topMoves.map(m => {
          if (m.san && m.san !== m.uci) return m;
          try {
            const moveObj = tempChess.move({
              from: m.from,
              to: m.to,
              promotion: m.uci.length > 4 ? m.uci[4] : undefined,
            });
            tempChess.undo();
            return {
              ...m,
              san: moveObj ? moveObj.san : m.uci,
            };
          } catch {
            return m;
          }
        });
        return {
          ...evalRes,
          topMoves: enrichedMoves,
        };
      } catch {
        // Ignore
      }
      return evalRes;
    };

    async function runEval() {
      // 1. Try instant Lichess Cloud Eval (multiPv=3)
      try {
        const cloudResult = await fetchCloudEval(fen, turn, controller.signal);
        if (isCancelled) return;

        if (cloudResult && cloudResult.topMoves && cloudResult.topMoves.length >= 3) {
          setLatest({ key: requestKey, result: enrichWithSan(cloudResult) });
          return;
        } else if (cloudResult) {
          // If cloud eval gave only 1 move, set it quickly while local engine calculates full 3 moves
          setLatest({ key: requestKey, result: enrichWithSan(cloudResult) });
        }
      } catch {
        // Continue to local engine
      }

      if (isCancelled) return;

      // 2. Local Stockfish Web Worker with MultiPV=3
      stockfishEngine.evaluate(fen, turn, (localResult) => {
        if (!isCancelled) {
          setLatest({ key: requestKey, result: enrichWithSan(localResult) });
        }
      });
    }

    // 200ms debounce: allows Chessground 200ms piece animation to finish at full 60 FPS
    const timer = setTimeout(runEval, 200);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
      controller.abort();
      stockfishEngine.stop();
    };
  }, [fen, turn, enabled, requestKey]);

  return enabled ? evaluation : DISABLED_EVALUATION;
}
