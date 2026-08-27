import { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { fetchCloudEval } from '../services/cloudEval';
import { stockfishEngine } from '../services/stockfishEngine';
import type { EvaluationResult } from '../types/explorer';

export function useEvaluation(fen: string, turn: 'w' | 'b') {
  const [evaluation, setEvaluation] = useState<EvaluationResult>({
    type: 'cp',
    value: 20, // +0.2 starting default
    depth: 0,
    source: 'none',
    isLoading: true,
  });

  useEffect(() => {
    const controller = new AbortController();
    let isCancelled = false;

    setEvaluation(prev => ({ ...prev, isLoading: true }));

    // Helper to compute SAN for top UCI moves
    const enrichWithSan = (evalRes: EvaluationResult): EvaluationResult => {
      try {
        const tempChess = new Chess(fen);
        if (evalRes.topMoves && evalRes.topMoves.length > 0) {
          const enrichedMoves = evalRes.topMoves.map(m => {
            try {
              const moveObj = tempChess.move({
                from: m.from,
                to: m.to,
                promotion: m.uci.length > 4 ? m.uci[4] : undefined,
              });
              // Undo temp move
              tempChess.undo();
              return {
                ...m,
                san: moveObj ? moveObj.san : m.uci,
              };
            } catch (e) {
              return m;
            }
          });
          return {
            ...evalRes,
            topMoves: enrichedMoves,
          };
        }
      } catch (e) {
        // Ignore
      }
      return evalRes;
    };

    async function runEval() {
      // 1. Try instant Lichess Cloud Eval (depth 30-75)
      try {
        const cloudResult = await fetchCloudEval(fen, turn, controller.signal);
        if (isCancelled) return;

        if (cloudResult) {
          setEvaluation(enrichWithSan(cloudResult));
          return;
        }
      } catch (err) {
        // Continue to local engine
      }

      if (isCancelled) return;

      // 2. Fallback to local Stockfish Web Worker with MultiPV=3
      stockfishEngine.evaluate(fen, turn, (localResult) => {
        if (!isCancelled) {
          setEvaluation(enrichWithSan(localResult));
        }
      });
    }

    const timer = setTimeout(runEval, 80);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
      controller.abort();
      stockfishEngine.stop();
    };
  }, [fen, turn]);

  return evaluation;
}
