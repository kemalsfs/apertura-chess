import React from 'react';
import type { DrillFeedback as DrillFeedbackType } from '../../hooks/useDrillSession';
import { CheckCircle2, XCircle, Sparkles, MessageSquare, Loader2 } from 'lucide-react';

interface DrillFeedbackProps {
  feedback: DrillFeedbackType;
}

export const DrillFeedback: React.FC<DrillFeedbackProps> = ({ feedback }) => {
  return (
    <div className="flex flex-col gap-2.5 w-full">
      {/* Main Feedback Banner */}
      <div
        className={`flex items-center justify-between p-3.5 rounded-xl border transition-all duration-300 shadow-md ${
          feedback.status === 'your_turn'
            ? 'bg-zinc-900 border-zinc-700 text-zinc-100'
            : feedback.status === 'opponent_turn'
            ? 'bg-zinc-900/60 border-zinc-800 text-zinc-400'
            : feedback.status === 'correct'
            ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300'
            : feedback.status === 'wrong'
            ? 'bg-red-950/60 border-red-500/50 text-red-300'
            : 'bg-amber-950/60 border-amber-500/50 text-amber-300'
        }`}
      >
        <div className="flex items-center gap-2.5">
          {feedback.status === 'opponent_turn' && (
            <Loader2 className="w-5 h-5 animate-spin text-zinc-500" />
          )}
          {feedback.status === 'your_turn' && (
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          )}
          {feedback.status === 'correct' && (
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          )}
          {feedback.status === 'wrong' && (
            <XCircle className="w-5 h-5 text-red-400" />
          )}
          {feedback.status === 'complete' && (
            <Sparkles className="w-5 h-5 text-amber-400" />
          )}

          <span className="text-xs font-semibold">{feedback.message}</span>
        </div>
      </div>

      {/* Move Explanation / Comment Card (if any) */}
      {feedback.comment && (
        <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-3 text-xs text-zinc-300 flex items-start gap-2 shadow-xs">
          <MessageSquare className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">
              Açılış Notu:
            </div>
            <div className="text-zinc-200 leading-relaxed">{feedback.comment}</div>
          </div>
        </div>
      )}
    </div>
  );
};