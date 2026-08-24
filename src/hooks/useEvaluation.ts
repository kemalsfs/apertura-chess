import { useState, useEffect } from 'react';
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

    async function runEval() {
      // 1. Try instant Lichess Cloud Eval (depth 30-75)
      try {
        const cloudResult = await fetchCloudEval(fen, turn, controller.signal);
        if (isCancelled) return;

        if (cloudResult) {
          setEvaluation(cloudResult);
          return;
        }
      } catch (err) {
        // Continue to local engine
      }

      if (isCancelled) return;

      // 2. Fallback to local Stockfish Web Worker (runs in background thread)
      stockfishEngine.evaluate(fen, turn, (localResult) => {
        if (!isCancelled) {
          setEvaluation(localResult);
        }
      });
    }

    const timer = setTimeout(runEval, 100);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
      controller.abort();
      stockfishEngine.stop();
    };
  }, [fen, turn]);

  return evaluation;
}