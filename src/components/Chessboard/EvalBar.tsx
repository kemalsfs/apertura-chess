import React from 'react';
import type { EvaluationResult } from '../../types/explorer';
import type { RepertoireColor } from '../../types/chess';

interface EvalBarProps {
  evaluation: EvaluationResult;
  orientation: RepertoireColor;
}

export const EvalBar: React.FC<EvalBarProps> = ({ evaluation, orientation }) => {
  // Convert score into percentage (0% = Black totally winning, 100% = White totally winning)
  let whitePercent = 50;

  if (evaluation.type === 'mate') {
    whitePercent = evaluation.value > 0 ? 100 : evaluation.value < 0 ? 0 : 50;
  } else {
    // Standard winning chance sigmoid formula
    const cp = Math.max(-1500, Math.min(1500, evaluation.value));
    whitePercent = 50 + 50 * (2 / (1 + Math.exp(-0.00368208 * cp)) - 1);
    whitePercent = Math.max(5, Math.min(95, whitePercent));
  }

  // If orientation is black, bottom of bar is Black, top is White
  const fillPercent = orientation === 'white' ? whitePercent : 100 - whitePercent;

  // Format display text
  let displayText = '0.0';
  if (evaluation.type === 'mate') {
    displayText = evaluation.value === 0 ? 'Mat' : `M${Math.abs(evaluation.value)}`;
  } else {
    const cpInPawns = (evaluation.value / 100).toFixed(1);
    displayText = evaluation.value > 0 ? `+${cpInPawns}` : cpInPawns === '-0.0' ? '0.0' : cpInPawns;
  }

  return (
    <div className="flex flex-col items-center select-none h-full py-1">
      {/* Eval Bar Track */}
      <div className="relative w-7 h-full min-h-[300px] max-h-[600px] bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800 shadow-inner flex flex-col justify-end">
        {/* White Portion (bottom when white orientation, top when black) */}
        <div
          className="w-full bg-zinc-100 transition-all duration-300 ease-out"
          style={{ height: `${fillPercent}%` }}
        />

        {/* Text Badge Over Bar */}
        <div
          className={`absolute left-0 right-0 py-1 text-center font-mono text-[10px] font-black transition-all duration-300 ${
            fillPercent > 50 ? 'bottom-2 text-zinc-900' : 'top-2 text-zinc-100'
          }`}
        >
          {displayText}
        </div>
      </div>

      {/* Depth & Source Tag */}
      <div className="text-[9px] font-mono text-zinc-500 mt-1.5 flex items-center gap-1">
        {evaluation.source === 'cloud' && (
          <span className="text-emerald-400 font-bold" title="Lichess Cloud Eval (Derinlik 30-50)">
            ☁ {evaluation.depth}
          </span>
        )}
        {evaluation.source === 'local' && (
          <span className="text-zinc-400" title="Yerel Motor">
            ⚡ {evaluation.depth}
          </span>
        )}
      </div>
    </div>
  );
};