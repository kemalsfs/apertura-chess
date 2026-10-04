import React, { useState, useEffect } from 'react';
import type { Repertoire, RepertoireNode } from '../../types/chess';
import { db } from '../../db/db';
import { matchGameWithRepertoire } from '../../services/repertoireMatcher';
import { 
  Flame, 
  Zap, 
  BookOpen, 
  BarChart2, 
  ArrowRight,
  Sparkles,
  HelpCircle,
  X,
  Layers,
  Brain,
  ShieldCheck
} from 'lucide-react';

interface HubViewProps {
  repertoires: Repertoire[];
  activeRepertoireId: string;
  onSelectRepertoire: (id: string) => void;
  onNavigateTab: (tab: 'repertoire' | 'tree' | 'drill' | 'analytics') => void;
}

export const HubView: React.FC<HubViewProps> = ({
  repertoires,
  onSelectRepertoire,
  onNavigateTab,
}) => {
  const defaultWhiteRep = repertoires.find(r => r.color === 'white' && r.isDefault) 
    || repertoires.find(r => r.color === 'white');
  const defaultBlackRep = repertoires.find(r => r.color === 'black' && r.isDefault) 
    || repertoires.find(r => r.color === 'black');

  // Real Calculated Metrics
  const [whiteNodes, setWhiteNodes] = useState(0);
  const [blackNodes, setBlackNodes] = useState(0);
  const [dailyStreak, setDailyStreak] = useState(0);
  const [weekDays, setWeekDays] = useState<{ label: string; active: boolean; isToday: boolean }[]>([]);
  const [retentionHealth, setRetentionHealth] = useState<number | null>(null);
  const [healthSubtitle, setHealthSubtitle] = useState<string>('Hesaplanıyor...');
  const [repertoireMatchRate, setRepertoireMatchRate] = useState<number | null>(null);
  const [matchSubtitle, setMatchSubtitle] = useState<string>('Maç Bekleniyor');

  // Interactive Explanations Banner (Dismisses on tap, stored in localStorage)
  const [showTipsBanner, setShowTipsBanner] = useState<boolean>(() => {
    try {
      return localStorage.getItem('apertura_has_seen_hub_kpis_help') !== 'true';
    } catch {
      return true;
    }
  });

  const dismissTips = () => {
    setShowTipsBanner(false);
    try {
      localStorage.setItem('apertura_has_seen_hub_kpis_help', 'true');
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    async function loadAllRealMetrics() {
      const allNodes = await db.nodes.toArray();
      const allGames = await db.games.toArray();

      // 1. Position Counts
      const whiteIds = new Set(repertoires.filter(r => r.color === 'white').map(r => r.id));
      const blackIds = new Set(repertoires.filter(r => r.color === 'black').map(r => r.id));

      let wCount = 0;
      let bCount = 0;
      for (const n of allNodes) {
        if (whiteIds.has(n.repertoireId)) wCount++;
        else if (blackIds.has(n.repertoireId)) bCount++;
      }
      setWhiteNodes(wCount);
      setBlackNodes(bCount);

      // 2. Drill activity dates. Imported game dates do not represent app use.
      const activityDates = new Set<string>();
      try {
        const raw = localStorage.getItem('apertura_activity_dates');
        if (raw) {
          const parsed: string[] = JSON.parse(raw);
          for (const d of parsed) activityDates.add(d);
        }
      } catch (e) {
        console.warn(e);
      }

      for (const n of allNodes) {
        if (n.srs?.lastReviewed) {
          const d = new Date(n.srs.lastReviewed);
          const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
          activityDates.add(iso);
        }
      }

      const formatDate = (date: Date) => {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      };

      const now = new Date();
      const todayStr = formatDate(now);

      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = formatDate(yesterday);

      let streak = 0;
      const checkDate = new Date();

      if (activityDates.has(todayStr)) {
        while (activityDates.has(formatDate(checkDate))) {
          streak++;
          checkDate.setDate(checkDate.getDate() - 1);
        }
      } else if (activityDates.has(yesterdayStr)) {
        checkDate.setDate(checkDate.getDate() - 1);
        while (activityDates.has(formatDate(checkDate))) {
          streak++;
          checkDate.setDate(checkDate.getDate() - 1);
        }
      } else {
        streak = 0;
      }
      setDailyStreak(streak);

      // Current calendar week (Monday to Sunday)
      const currentDayOfWeek = (now.getDay() + 6) % 7;
      const monday = new Date(now);
      monday.setDate(now.getDate() - currentDayOfWeek);

      const dayLabels = ['P', 'S', 'Ç', 'P', 'C', 'C', 'P'];
      const weekList: { label: string; active: boolean; isToday: boolean }[] = [];

      for (let i = 0; i < 7; i++) {
        const day = new Date(monday);
        day.setDate(monday.getDate() + i);
        const dayStr = formatDate(day);

        weekList.push({
          label: dayLabels[i],
          active: activityDates.has(dayStr),
          isToday: dayStr === todayStr,
        });
      }
      setWeekDays(weekList);

      // 3. Measured drill answers only; legacy reviews without counters have no rate.
      if (allNodes.length === 0) {
        setRetentionHealth(null);
        setHealthSubtitle('Repertuvar Boş');
      } else {
        const correct = allNodes.reduce((total, node) => total + (node.srs?.correctAnswers || 0), 0);
        const wrong = allNodes.reduce((total, node) => total + (node.srs?.wrongAnswers || 0), 0);
        const answers = correct + wrong;
        setRetentionHealth(answers > 0 ? Math.round(correct / answers * 100) : null);
        setHealthSubtitle(answers > 0 ? `${answers} ölçülmüş yanıt` : 'Henüz ölçülmedi');
      }

      // 4. Real Repertoire Compliance (Maçlarda Repertuvar Uyumu)
      if (allGames.length === 0) {
        setRepertoireMatchRate(null);
        setMatchSubtitle('Maç İçe Aktarılmadı');
      } else {
        const nodeMap = new Map<string, RepertoireNode>();
        for (const n of allNodes) nodeMap.set(n.id, n);

        let totalCompliance = 0;
        let validGames = 0;

        for (const game of allGames) {
          if (!game.moves || game.moves.length === 0) continue;
          const matchRes = matchGameWithRepertoire(game, nodeMap);
          validGames++;

          if (matchRes.whoDeviated === 'none' || matchRes.whoDeviated === 'opponent') {
            totalCompliance += 100;
          } else if (matchRes.whoDeviated === 'user') {
            const userPlyInTheory = Math.floor((matchRes.deviationStepIndex || 0) / 2);
            const gameScore = Math.min(100, Math.round((userPlyInTheory / Math.max(userPlyInTheory + 2, 5)) * 100));
            totalCompliance += gameScore;
          }
        }

        if (validGames === 0) {
          setRepertoireMatchRate(null);
          setMatchSubtitle('Maç İçe Aktarılmadı');
        } else {
          const avgCompliance = Math.round(totalCompliance / validGames);
          setRepertoireMatchRate(avgCompliance);
          setMatchSubtitle(`${validGames} maç analiz edildi`);
        }
      }
    }

    loadAllRealMetrics();
  }, [repertoires]);

  const totalNodes = whiteNodes + blackNodes;

  return (
    <div className="max-w-4xl mx-auto py-4 sm:py-8 px-2 space-y-7 font-sans">
      {/* 1. Minimal Header & Quick Action Row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-5 border-b border-zinc-800/40">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-amber-500 font-mono font-medium mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KemalOS Apertura</span>
          </div>
          <h1 className="text-2xl font-bold text-zinc-100 tracking-tight">
            Açılış Antrenörü
          </h1>
          <p className="text-xs text-zinc-400 mt-0.5">
            Aktif hatırlama, varyant ağacı atlası ve maç analitiği
          </p>
        </div>

        {/* Flat Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => onNavigateTab('tree')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-800 text-amber-400 font-bold text-xs border border-amber-500/30 transition cursor-pointer"
          >
            <span>🌳 Varyant Ağacı</span>
          </button>

          <button
            onClick={() => onNavigateTab('drill')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs transition cursor-pointer shadow-sm"
          >
            <Zap className="w-3.5 h-3.5 fill-zinc-950" />
            <span>Hızlı Drill</span>
          </button>

          <button
            onClick={() => onNavigateTab('repertoire')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 font-semibold text-xs border border-zinc-700/60 transition cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
            <span>Satranç Masası</span>
          </button>
        </div>
      </div>

      {/* Interactive Explanation Card (Click anywhere to dismiss / Reopenable via Help icon) */}
      {showTipsBanner && (
        <div 
          onClick={dismissTips}
          className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 sm:p-5 relative cursor-pointer hover:bg-amber-500/15 transition animate-fade-in group shadow-lg"
          title="Kapatmak için tıkla"
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-amber-500/20">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs sm:text-sm">
              <HelpCircle className="w-4 h-4" />
              <span>Gösterge Kartları Ne Anlama Geliyor? (İlk Bilgilendirme)</span>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                dismissTips();
              }}
              className="text-zinc-400 hover:text-zinc-100 p-1 rounded-lg hover:bg-zinc-800 transition cursor-pointer flex items-center gap-1 text-[11px]"
            >
              <span>Kapat</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
            <div className="flex items-start gap-2">
              <Flame className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-100">Günlük Seri:</strong> Açılış tekrarı (Drill) yaptığın ardışık gün sayısıdır. İçe aktarılan maç tarihleri sayılmaz.
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Layers className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-100">Kayıtlı Hamleler:</strong> Beyaz ve Siyah açılış ağaçlarında hafızaya aldığın toplam farklı satranç konumu sayısıdır.
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Brain className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-100">Drill Doğruluğu:</strong> Kaydedilmiş doğru yanıtların tüm ölçülmüş drill yanıtlarına oranıdır. Eski, yanıt sayacı olmayan tekrarlar yüzdeye katılmaz.
              </div>
            </div>

            <div className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-100">Repertuvar Uyumu:</strong> İçe aktardığın gerçek maçlarında kendi açılış planına ve teorine ne kadar sadık kaldığın (teoriden sapma analizi).
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 text-[10px] text-amber-400/80 font-mono text-center sm:text-right">
            💡 Kapatmak için bu kutucuğun herhangi bir yerine tıklayın.
          </div>
        </div>
      )}

      {/* 2. Genuine Flat Stats Grid */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
            Performans & Hafıza Göstergeleri
          </div>
          {!showTipsBanner && (
            <button
              onClick={() => setShowTipsBanner(true)}
              className="text-[11px] text-amber-400/90 hover:text-amber-300 flex items-center gap-1 hover:underline cursor-pointer transition font-medium"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Kartların Anlamı</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 py-2">
          {/* Card 1: Günlük Seri */}
          <div className="p-3.5 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 flex flex-col justify-between">
            <div>
              <div className="text-[11px] text-zinc-400 font-medium uppercase tracking-wider mb-1 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>Günlük Seri</span>
              </div>
              <div className="text-2xl font-mono font-bold text-zinc-100">
                {dailyStreak} {dailyStreak === 1 ? 'Gün' : 'Gün'}
              </div>
            </div>

            <div className="flex items-center gap-1 mt-3">
              {weekDays.map((d, i) => (
                <span
                  key={i}
                  title={`${d.label} - ${d.active ? 'Aktif Çalışıldı' : d.isToday ? 'Bugün henüz yapılmadı' : 'Çalışılmadı'}`}
                  className={`flex-1 h-5 rounded flex items-center justify-center text-[10px] font-mono transition ${
                    d.active
                      ? 'bg-amber-500 text-zinc-950 font-black shadow-xs'
                      : d.isToday
                      ? 'border border-amber-500/50 text-amber-400 bg-amber-500/10 font-bold animate-pulse'
                      : 'text-zinc-600 bg-zinc-950/60 border border-zinc-800/60'
                  }`}
                >
                  {d.label}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Kayıtlı Hamleler */}
          <div className="p-3.5 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 flex flex-col justify-between">
            <div>
              <div className="text-[11px] text-zinc-400 font-medium uppercase tracking-wider mb-1">
                Kayıtlı Hamleler
              </div>
              <div className="text-2xl font-mono font-bold text-zinc-100">
                {totalNodes} <span className="text-xs text-zinc-500 font-normal">konum</span>
              </div>
            </div>
            <div className="text-[11px] text-zinc-400 font-mono mt-2 pt-2 border-t border-zinc-800/50 truncate">
              Beyaz: {whiteNodes} • Siyah: {blackNodes}
            </div>
          </div>

          {/* Card 3: Drill Doğruluğu */}
          <div className="p-3.5 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 flex flex-col justify-between">
            <div>
              <div className="text-[11px] text-zinc-400 font-medium uppercase tracking-wider mb-1">
                Drill Doğruluğu
              </div>
              <div className="text-2xl font-mono font-bold text-emerald-400">
                {retentionHealth !== null ? `%${retentionHealth}` : '—'}
              </div>
            </div>
            <div className="text-[11px] text-zinc-400 font-mono mt-2 pt-2 border-t border-zinc-800/50 truncate">
              {healthSubtitle}
            </div>
          </div>

          {/* Card 4: Repertuvar Uyumu */}
          <div className="p-3.5 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 flex flex-col justify-between">
            <div>
              <div className="text-[11px] text-zinc-400 font-medium uppercase tracking-wider mb-1">
                Repertuvar Uyumu
              </div>
              <div className="text-2xl font-mono font-bold text-blue-400">
                {repertoireMatchRate !== null ? `%${repertoireMatchRate}` : '—'}
              </div>
            </div>
            <div className="text-[11px] text-zinc-400 font-mono mt-2 pt-2 border-t border-zinc-800/50 truncate">
              {matchSubtitle}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Direct Repertoire Launchers (Clean Minimal List) */}
      <div className="space-y-3 pt-2">
        <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
          Açılış Ağaçları & Repertuvarlar
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* White Repertoire */}
          <button
            onClick={() => {
              if (defaultWhiteRep) onSelectRepertoire(defaultWhiteRep.id);
              onNavigateTab('tree');
            }}
            className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition cursor-pointer text-left group"
          >
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-zinc-100 border border-zinc-400 shrink-0" />
              <div>
                <div className="font-semibold text-sm text-zinc-200 group-hover:text-amber-400 transition flex items-center gap-2">
                  <span>{defaultWhiteRep?.name || 'Beyaz Repertuvarı'}</span>
                  {defaultWhiteRep?.isDefault && (
                    <span className="text-[9px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-1.5 py-0.2 rounded">
                      Varsayılan
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-zinc-400 font-mono">
                  {whiteNodes} kayıtlı konum • Varyant Ağacını Aç
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-0.5 transition" />
          </button>

          {/* Black Repertoire */}
          <button
            onClick={() => {
              if (defaultBlackRep) onSelectRepertoire(defaultBlackRep.id);
              onNavigateTab('tree');
            }}
            className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/50 hover:border-zinc-700 transition cursor-pointer text-left group"
          >
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-zinc-950 border border-zinc-600 shrink-0" />
              <div>
                <div className="font-semibold text-sm text-zinc-200 group-hover:text-amber-400 transition flex items-center gap-2">
                  <span>{defaultBlackRep?.name || 'Siyah Repertuvarı'}</span>
                  {defaultBlackRep?.isDefault && (
                    <span className="text-[9px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-1.5 py-0.2 rounded">
                      Varsayılan
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-zinc-400 font-mono">
                  {blackNodes} kayıtlı konum • Varyant Ağacını Aç
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-0.5 transition" />
          </button>
        </div>

        {/* Analytics Shortcut */}
        <button
          onClick={() => onNavigateTab('analytics')}
          className="w-full flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/20 hover:bg-zinc-900/60 border border-zinc-800/30 hover:border-zinc-700 transition cursor-pointer text-left group mt-2"
        >
          <div className="flex items-center gap-2.5">
            <BarChart2 className="w-4 h-4 text-emerald-400" />
            <div>
              <span className="text-xs font-semibold text-zinc-300 group-hover:text-emerald-300 transition">
                Maç Analitiği & Açılış Karnesi
              </span>
              <span className="text-[11px] text-zinc-400 ml-2 font-mono">
                Chess.com / Lichess maç geçmişini incele
              </span>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition" />
        </button>
      </div>
    </div>
  );
};
