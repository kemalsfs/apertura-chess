import React, { useState, useEffect } from 'react';
import type { Repertoire } from '../../types/chess';
import { db } from '../../db/db';
import { OpeningRadarCard } from './OpeningRadarCard';
import { 
  Flame, 
  Zap, 
  ChevronRight, 
  BookOpen, 
  Target, 
  Award, 
  Sparkles,
  Play
} from 'lucide-react';

interface HubViewProps {
  repertoires: Repertoire[];
  activeRepertoireId: string;
  onSelectRepertoire: (id: string) => void;
  onNavigateTab: (tab: 'repertoire' | 'drill' | 'analytics') => void;
}

export const HubView: React.FC<HubViewProps> = ({
  repertoires,
  onSelectRepertoire,
  onNavigateTab,
}) => {
  const whiteRep = repertoires.find(r => r.color === 'white');
  const blackRep = repertoires.find(r => r.color === 'black');

  const [whiteNodes, setWhiteNodes] = useState(0);
  const [blackNodes, setBlackNodes] = useState(0);

  useEffect(() => {
    async function loadCounts() {
      if (whiteRep) {
        const w = await db.nodes.where('repertoireId').equals(whiteRep.id).count();
        setWhiteNodes(w);
      }
      if (blackRep) {
        const b = await db.nodes.where('repertoireId').equals(blackRep.id).count();
        setBlackNodes(b);
      }
    }
    loadCounts();
  }, [whiteRep, blackRep]);

  const totalNodes = whiteNodes + blackNodes;

  // Mocked/calculated streak & health metrics
  const streakDays = 5;
  const daysOfWeek = [
    { day: 'Pzt', active: true },
    { day: 'Sal', active: true },
    { day: 'Çar', active: true },
    { day: 'Per', active: true },
    { day: 'Cum', active: true },
    { day: 'Cts', active: false },
    { day: 'Paz', active: false },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto font-sans">
      {/* 1. Hero Welcome & Quick Launch Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zinc-900 via-zinc-900 to-amber-950/40 border border-zinc-800 rounded-3xl p-6 md:p-8 shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apertura v2.0 Kumanda Merkezi</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-zinc-100 tracking-tight">
              Açılışlarını Ustalaştır, Tahtaya Hükmet.
            </h1>
            <p className="text-xs md:text-sm text-zinc-400 max-w-xl leading-relaxed">
              Kişisel ikinci beynin Apertura ile usta varyantlarını inşa et, aktif hatırlama (Spaced Repetition) ile hafızana kazı ve maç sapmalarını analiz et.
            </p>
          </div>

          {/* Big Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigateTab('drill')}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-zinc-950" />
              <span>Günün Drill'ini Başlat</span>
            </button>

            <button
              onClick={() => onNavigateTab('repertoire')}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-semibold text-xs border border-zinc-700 transition cursor-pointer"
            >
              <Play className="w-4 h-4 text-amber-400" />
              <span>Satranç Masası (Arena)</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Top Metric KPI Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* KPI 1: Active Streak */}
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-zinc-500 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider">Günlük Seri</span>
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500/30" />
          </div>
          <div>
            <div className="text-2xl font-mono font-black text-amber-400">{streakDays} Gün</div>
            <div className="text-[10px] text-zinc-500 font-mono mt-0.5">Antrenman Alışkanlığı</div>
          </div>
        </div>

        {/* KPI 2: Repertoire Nodes */}
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-zinc-500 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider">Kayıtlı Hamle</span>
            <BookOpen className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <div className="text-2xl font-mono font-black text-zinc-100">{totalNodes}</div>
            <div className="text-[10px] text-zinc-500 font-mono mt-0.5">Beyaz: {whiteNodes} | Siyah: {blackNodes}</div>
          </div>
        </div>

        {/* KPI 3: Recall Health */}
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-zinc-500 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider">Hatırlama Sağlığı</span>
            <Target className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <div className="text-2xl font-mono font-black text-amber-400">%88</div>
            <div className="text-[10px] text-zinc-500 font-mono mt-0.5">Spaced Repetition</div>
          </div>
        </div>

        {/* KPI 4: Match Mastery */}
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-zinc-500 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider">Repertuvar Uyumu</span>
            <Award className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <div className="text-2xl font-mono font-black text-blue-400">%76</div>
            <div className="text-[10px] text-zinc-500 font-mono mt-0.5">Gerçek Maçlarda Uyum</div>
          </div>
        </div>
      </div>

      {/* 3. Main Split Section: Radar & Streak Tracker */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Opening Mastery Radar Card */}
        <div className="lg:col-span-7">
          <OpeningRadarCard
            repertoires={repertoires}
            onSelectRepertoire={onSelectRepertoire}
            onOpenArena={() => onNavigateTab('repertoire')}
          />
        </div>

        {/* Right: Daily Habit Streak & Quick Repertoire Launcher */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Weekly Streak Card */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-3">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-500 fill-amber-500/20" />
                  <h3 className="text-sm font-bold text-zinc-100">Haftalık Antrenman Serisi</h3>
                </div>
                <span className="text-[10px] text-zinc-500 font-mono">Hedef: 7/7</span>
              </div>

              {/* Day Dots */}
              <div className="grid grid-cols-7 gap-2 my-3">
                {daysOfWeek.map((d, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-mono font-bold transition ${
                        d.active
                          ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20'
                          : 'bg-zinc-950 border border-zinc-800 text-zinc-600'
                      }`}
                    >
                      {d.active ? '✓' : ''}
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono">{d.day}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-zinc-400 mt-2">
              🔥 Harika gidiyorsun! Açılış hafızasını taze tutmak için günde en az 5 dakika drill yap.
            </p>
          </div>

          {/* Quick Repertoire Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                if (whiteRep) onSelectRepertoire(whiteRep.id);
                onNavigateTab('repertoire');
              }}
              className="p-3.5 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-amber-500/40 transition text-left flex flex-col justify-between cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="w-3 h-3 rounded-full bg-zinc-100 border border-zinc-400" />
                <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 transition" />
              </div>
              <div className="font-bold text-xs text-zinc-200">Beyaz Repertuvarı</div>
              <div className="text-[10px] text-zinc-500 font-mono mt-0.5">Tahtayı Aç</div>
            </button>

            <button
              onClick={() => {
                if (blackRep) onSelectRepertoire(blackRep.id);
                onNavigateTab('repertoire');
              }}
              className="p-3.5 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-amber-500/40 transition text-left flex flex-col justify-between cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="w-3 h-3 rounded-full bg-zinc-900 border border-zinc-600" />
                <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 transition" />
              </div>
              <div className="font-bold text-xs text-zinc-200">Siyah Repertuvarı</div>
              <div className="text-[10px] text-zinc-500 font-mono mt-0.5">Tahtayı Aç</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
