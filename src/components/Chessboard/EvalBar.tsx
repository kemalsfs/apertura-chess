import React from 'react';
import type { EvaluationResult } from '../../types/explorer';
import type { RepertoireColor } from '../../types/chess';

interface EvalBarProps {
  evaluation: EvaluationResult;
  orientation: RepertoireColor;
}

export const EvalBar: React.FC<EvalBarProps> = ({ evaluation, orientation }) => {
  // Calculate White advantage percentage on 0–100 scale (50% = dead equal)
  let whitePercent = 50;

  if (evaluation.type === 'mate') {
    if (evaluation.value > 0) {
      whitePercent = 98;
    } else if (evaluation.value < 0) {
      whitePercent = 2;
    } else {
      whitePercent = 50;
    }
  } else {
    // Standard Lichess winning chance sigmoid curve
    const cp = Math.max(-1200, Math.min(1200, evaluation.value));
    whitePercent = 50 + 50 * (2 / (1 + Math.exp(-0.00368208 * cp)) - 1);
    whitePercent = Math.max(3, Math.min(97, whitePercent));
  }

  // If orientation is white: White is on bottom, Black is on top
  // If orientation is black: Black is on bottom, White is on top
  const whiteBarHeight = orientation === 'white' ? whitePercent : 100 - whitePercent;

  // Format display score dynamically without artificial 0.0 zeroing
  let displayText = '0.0';

  if (evaluation.type === 'mate') {
    displayText = evaluation.value === 0 ? 'Mat' : `M${Math.abs(evaluation.value)}`;
  } else {
    const valInPawns = evaluation.value / 100;
    const formatted = Math.abs(valInPawns).toFixed(1);
    if (formatted === '0.0') {
      displayText = '0.0';
    } else if (valInPawns > 0) {
      displayText = `+${formatted}`;
    } else {
      displayText = `-${formatted}`;
    }
  }

  const isWhiteDominant = whiteBarHeight >= 50;

  return (
    <div className="flex flex-col items-center select-none h-full py-1 shrink-0">
      {/* Eval Bar Track: Solid two-tone container with explicit styling */}
      <div className="relative w-7 h-full min-h-[340px] max-h-[520px] bg-[#121214] rounded-xl overflow-hidden border-2 border-zinc-700 shadow-2xl">
        {/* Bottom Half: Solid White side that rises or falls */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-[#f4f4f6]"
          style={{
            height: `${whiteBarHeight}%`,
            transition: 'height 500ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        {/* Center 50% Equality Baseline */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-emerald-500 z-10 pointer-events-none shadow-sm" />

        {/* High-Contrast Floating Score Pill Badge */}
        <div
          className={`absolute left-0.5 right-0.5 py-0.5 rounded text-center font-mono text-[9px] font-black tracking-tight shadow-md z-20 transition-all duration-400 ease-out ${
            isWhiteDominant
              ? 'bottom-2 bg-zinc-950/95 text-zinc-100 border border-zinc-700'
              : 'top-2 bg-white/95 text-zinc-950 border border-zinc-300'
          }`}
        >
          {displayText}
        </div>
      </div>

      {/* Engine Depth & Source Badge */}
      <div className="text-[9px] font-mono text-zinc-500 mt-1 flex items-center justify-center h-4">
        {evaluation.source === 'cloud' && (
          <span className="text-emerald-400 font-bold" title="Lichess Cloud Eval">
            ☁ {evaluation.depth}
          </span>
        )}
        {evaluation.source === 'local' && (
          <span className="text-amber-400 font-bold" title="WebAssembly Stockfish">
            ⚡ {evaluation.depth}
          </span>
        )}
      </div>
    </div>
  );
};