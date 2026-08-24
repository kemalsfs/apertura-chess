import React from 'react';
import type { EvaluationResult } from '../../types/explorer';
import type { RepertoireColor } from '../../types/chess';

interface EvalBarProps {
  evaluation: EvaluationResult;
  orientation: RepertoireColor;
}

export const EvalBar: React.FC<EvalBarProps> = ({ evaluation, orientation }) => {
  // Calculate White's advantage percentage on standard 0–100 scale (50% = equal)
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
    // Smooth Lichess winning chance sigmoid curve:
    // cp = 0 -> 50%
    // cp = +100 (+1 pawn) -> ~58%
    // cp = +300 (+3 pawns) -> ~73%
    // cp = +500 (+5 pawns) -> ~84%
    const cp = Math.max(-1200, Math.min(1200, evaluation.value));
    whitePercent = 50 + 50 * (2 / (1 + Math.exp(-0.00368208 * cp)) - 1);
    whitePercent = Math.max(4, Math.min(96, whitePercent));
  }

  // If orientation is white: White is on bottom (height = whitePercent%), Black is on top
  // If orientation is black: Black is on bottom (height = 100 - whitePercent%), White is on top
  const whiteBarHeight = orientation === 'white' ? whitePercent : 100 - whitePercent;

  // Format display text
  let displayText = '0.0';

  if (evaluation.type === 'mate') {
    displayText = evaluation.value === 0 ? 'Mat' : `M${Math.abs(evaluation.value)}`;
  } else {
    const cpInPawns = (Math.abs(evaluation.value) / 100).toFixed(1);
    if (Math.abs(evaluation.value) < 15) {
      displayText = '0.0';
    } else if (evaluation.value > 0) {
      displayText = `+${cpInPawns}`;
    } else {
      displayText = `-${cpInPawns}`;
    }
  }

  // Determine pill badge position & style
  const isWhiteDominant = whiteBarHeight >= 50;

  return (
    <div className="flex flex-col items-center select-none h-full py-1">
      {/* Eval Bar Track: Solid two-tone container */}
      <div className="relative w-8 h-full min-h-[320px] max-h-[600px] bg-zinc-900 rounded-xl overflow-hidden border-2 border-zinc-700 shadow-xl flex flex-col justify-end">
        {/* Top Half: Solid Black side */}
        <div className="absolute inset-0 bg-[#121214]" />

        {/* Bottom Half: Solid White side (dynamically advances up or recedes down) */}
        <div
          className="relative w-full bg-[#f4f4f6]"
          style={{
            height: `${whiteBarHeight}%`,
            transition: 'height 600ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        {/* Center 50% Equality Baseline */}
        <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-emerald-500/80 z-10 pointer-events-none shadow-xs" />

        {/* Floating High-Contrast Score Badge */}
        <div
          className={`absolute left-0.5 right-0.5 py-1 rounded-md text-center font-mono text-[10px] font-black tracking-tight shadow-lg z-20 transition-all duration-500 ease-out ${
            isWhiteDominant
              ? 'bottom-2 bg-zinc-950/90 text-zinc-100 border border-zinc-700'
              : 'top-2 bg-white/95 text-zinc-950 border border-zinc-300'
          }`}
        >
          {displayText}
        </div>
      </div>

      {/* Engine Depth & Source Badge */}
      <div className="text-[9px] font-mono text-zinc-500 mt-1.5 flex items-center gap-1">
        {evaluation.source === 'cloud' && (
          <span className="text-emerald-400 font-bold" title="Lichess Cloud Eval (Derinlik 30-75)">
            ☁ {evaluation.depth}
          </span>
        )}
        {evaluation.source === 'local' && (
          <span className="text-amber-400 font-bold" title="WebAssembly Stockfish Motoru">
            ⚡ {evaluation.depth}
          </span>
        )}
        {evaluation.isLoading && (
          <span className="text-zinc-500 animate-pulse text-[8px]">...</span>
        )}
      </div>
    </div>
  );
};