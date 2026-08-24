import React from 'react';
import type { OverallAnalytics } from '../../types/analytics';
import { Trophy, TrendingUp, ShieldAlert, Swords } from 'lucide-react';

interface AnalyticsSummaryCardsProps {
  analytics: OverallAnalytics;
}

export const AnalyticsSummaryCards: React.FC<AnalyticsSummaryCardsProps> = ({ analytics }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {/* 1. Total Games & Record */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-md flex flex-col justify-between">
        <div className="flex items-center justify-between text-zinc-400 mb-2">
          <span className="text-xs font-semibold">Toplam Maç</span>
          <Swords className="w-4 h-4 text-emerald-400" />
        </div>
        <div>
          <div className="text-2xl font-mono font-black text-zinc-100 mb-1">
            {analytics.totalGames}
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono">
            <span className="text-emerald-400 font-bold">{analytics.wins}G</span>
            <span className="text-zinc-500">/</span>
            <span className="text-zinc-400 font-medium">{analytics.draws}B</span>
            <span className="text-zinc-500">/</span>
            <span className="text-red-400 font-bold">{analytics.losses}M</span>
          </div>
        </div>
      </div>

      {/* 2. Winrate Bar */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-md flex flex-col justify-between">
        <div className="flex items-center justify-between text-zinc-400 mb-2">
          <span className="text-xs font-semibold">Kazanma Oranı</span>
          <TrendingUp className="w-4 h-4 text-emerald-400" />
        </div>
        <div>
          <div className="text-2xl font-mono font-black text-emerald-400 mb-2">
            %{analytics.winRate}
          </div>
          {/* Visual Winrate distribution */}
          <div className="w-full h-2 bg-zinc-950 rounded-full overflow-hidden flex">
            <div
              style={{
                width: `${analytics.totalGames > 0 ? (analytics.wins / analytics.totalGames) * 100 : 0}%`,
              }}
              className="bg-emerald-500 h-full"
              title={`Galibiyet: %${analytics.winRate}`}
            />
            <div
              style={{
                width: `${analytics.totalGames > 0 ? (analytics.draws / analytics.totalGames) * 100 : 0}%`,
              }}
              className="bg-zinc-500 h-full"
              title="Beraberlik"
            />
            <div
              style={{
                width: `${analytics.totalGames > 0 ? (analytics.losses / analytics.totalGames) * 100 : 0}%`,
              }}
              className="bg-red-500 h-full"
              title="Mağlubiyet"
            />
          </div>
        </div>
      </div>

      {/* 3. White vs Black Performance */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-md flex flex-col justify-between">
        <div className="flex items-center justify-between text-zinc-400 mb-2">
          <span className="text-xs font-semibold">Renk Bazlı Başarı</span>
          <div className="flex gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-100 border border-zinc-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-950 border border-zinc-600" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] text-zinc-500 font-medium">Beyaz ({analytics.whiteGames})</div>
            <div className="text-lg font-mono font-bold text-zinc-100">
              %{analytics.whiteWinRate}
            </div>
          </div>
          <div className="h-8 w-px bg-zinc-800" />
          <div>
            <div className="text-[10px] text-zinc-500 font-medium">Siyah ({analytics.blackGames})</div>
            <div className="text-lg font-mono font-bold text-zinc-100">
              %{analytics.blackWinRate}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Best & Weakest Opening */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-md flex flex-col justify-between">
        <div className="flex items-center justify-between text-zinc-400 mb-1">
          <span className="text-xs font-semibold">Açılış Trendi</span>
          <Trophy className="w-4 h-4 text-amber-400" />
        </div>
        <div className="flex flex-col gap-1 text-xs">
          {analytics.bestOpening ? (
            <div className="flex items-center justify-between">
              <span className="text-emerald-400 font-medium truncate max-w-[120px]" title={analytics.bestOpening.name}>
                ★ {analytics.bestOpening.name}
              </span>
              <span className="font-mono font-bold text-emerald-400 shrink-0">
                %{analytics.bestOpening.winRate}
              </span>
            </div>
          ) : (
            <span className="text-zinc-500 italic text-[11px]">Yeterli maç yok</span>
          )}

          {analytics.weakestOpening && analytics.weakestOpening !== analytics.bestOpening && (
            <div className="flex items-center justify-between border-t border-zinc-800/80 pt-1">
              <span className="text-red-400 font-medium truncate max-w-[120px]" title={analytics.weakestOpening.name}>
                <ShieldAlert className="w-3 h-3 inline mr-1" />
                {analytics.weakestOpening.name}
              </span>
              <span className="font-mono font-bold text-red-400 shrink-0">
                %{analytics.weakestOpening.winRate}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};