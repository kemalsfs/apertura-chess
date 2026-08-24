import { useState, useEffect } from 'react';
import { fetchCloudEval } from '../services/cloudEval';
import type { EvaluationResult } from '../types/explorer';
import { Chess } from 'chess.js';

// Simple heuristic fallback for positions not yet in Lichess Cloud DB
function calculateMaterialEval(chess: Chess): number {
  const pieceValues: Record<string, number> = {
    p: 100,
    n: 310,
    b: 330,
    r: 500,
    q: 900,
    k: 0,
  };

  let score = 0;
  const board = chess.board();
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const piece = board[r][c];
      if (piece) {
        const val = pieceValues[piece.type] || 0;
        score += piece.color === 'w' ? val : -val;
      }
    }
  }

  // Small positional bonuses for center control
  const e4 = chess.get('e4');
  const d4 = chess.get('d4');
  const e5 = chess.get('e5');
  const d5 = chess.get('d5');
  if (e4?.color === 'w') score += 15;
  if (d4?.color === 'w') score += 15;
  if (e5?.color === 'b') score -= 15;
  if (d5?.color === 'b') score -= 15;

  return score;
}

export function useEvaluation(fen: string, turn: 'w' | 'b') {
  const [evaluation, setEvaluation] = useState<EvaluationResult>({
    type: 'cp',
    value: 20, // +0.2 starting position default
    depth: 0,
    source: 'none',
    isLoading: true,
  });

  useEffect(() => {
    const controller = new AbortController();
    let isCancelled = false;

    setEvaluation(prev => ({ ...prev, isLoading: true }));

    async function evaluate() {
      // 1. Try Cloud Eval
      const cloudResult = await fetchCloudEval(fen, turn, controller.signal);
      if (isCancelled) return;

      if (cloudResult) {
        setEvaluation(cloudResult);
        return;
      }

      // 2. Fallback heuristic eval
      try {
        const chess = new Chess(fen);
        if (chess.isGameOver()) {
          if (chess.isCheckmate()) {
            // Checkmate: if it's black turn, white won (#M0)
            const mateWinner = turn === 'b' ? 0 : -0;
            setEvaluation({
              type: 'mate',
              value: mateWinner,
              depth: 1,
              source: 'local',
              isLoading: false,
            });
            return;
          }
          if (chess.isDraw()) {
            setEvaluation({
              type: 'cp',
              value: 0,
              depth: 1,
              source: 'local',
              isLoading: false,
            });
            return;
          }
        }

        const materialCp = calculateMaterialEval(chess);
        setEvaluation({
          type: 'cp',
          value: materialCp,
          depth: 12,
          source: 'local',
          isLoading: false,
        });
      } catch (err) {
        console.warn('Evaluation calculation error:', err);
        setEvaluation({
          type: 'cp',
          value: 0,
          depth: 0,
          source: 'none',
          isLoading: false,
        });
      }
    }

    // Debounce slightly to avoid rapid unnecessary network calls
    const timer = setTimeout(evaluate, 150);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
      controller.abort();
    };
  }, [fen, turn]);

  return evaluation;
}