import { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { fetchCloudEval } from '../services/cloudEval';
import { stockfishEngine } from '../services/stockfishEngine';
import type { EvaluationResult } from '../types/explorer';

export function useEvaluation(fen: string, turn: 'w' | 'b', enabled: boolean = true) {
  const [evaluation, setEvaluation] = useState<EvaluationResult>({
    type: 'cp',
    value: 20, // +0.2 starting default
    depth: 0,
    source: 'none',
    isLoading: true,
  });

  useEffect(() => {
    if (!enabled) {
      setEvaluation({
        type: 'cp',
        value: 0,
        depth: 0,
        source: 'none',
        isLoading: false,
      });
      return;
    }

    const controller = new AbortController();
    let isCancelled = false;

    setEvaluation(prev => ({ ...prev, isLoading: true }));

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
          } catch (e) {
            return m;
          }
        });
        return {
          ...evalRes,
          topMoves: enrichedMoves,
        };
      } catch (e) {
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
          setEvaluation(enrichWithSan(cloudResult));
          return;
        } else if (cloudResult) {
          // If cloud eval gave only 1 move, set it quickly while local engine calculates full 3 moves
          setEvaluation(enrichWithSan(cloudResult));
        }
      } catch (err) {
        // Continue to local engine
      }

      if (isCancelled) return;

      // 2. Local Stockfish Web Worker with MultiPV=3
      stockfishEngine.evaluate(fen, turn, (localResult) => {
        if (!isCancelled) {
          setEvaluation(enrichWithSan(localResult));
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
  }, [fen, turn, enabled]);

  return evaluation;
}
