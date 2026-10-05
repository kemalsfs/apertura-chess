import { lazy, Suspense, useState, useCallback, useMemo, useRef } from 'react';
import { useRepertoire } from './hooks/useRepertoire';
import { useEvaluation } from './hooks/useEvaluation';
import { useTheme } from './hooks/useTheme';
import { ChessgroundBoard } from './components/Chessboard/ChessgroundBoard';
import { BoardControls } from './components/Chessboard/BoardControls';
import { EvalBar } from './components/Chessboard/EvalBar';
import { PromotionModal } from './components/Chessboard/PromotionModal';
import { RepertoireHeader } from './components/Repertoire/RepertoireHeader';
import { CreateTreeModal } from './components/Repertoire/CreateTreeModal';
import { MoveTree } from './components/Repertoire/MoveTree';
import { MoveAnnotation } from './components/Repertoire/MoveAnnotation';
import { HubView } from './components/Hub/HubView';
import { Header, type ActiveTab } from './components/Layout/Header';
import { MobileNav } from './components/Layout/MobileNav';
import { ArenaBottomPanel } from './components/Explorer/ArenaBottomPanel';
import { OnboardingModal } from './components/Common/OnboardingModal';
import { FirstTimeTourModal, FIRST_TIME_TOUR_KEY } from './components/Common/FirstTimeTourModal';
import { PwaInstallPrompt } from './components/Common/PwaInstallPrompt';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from './db/db';
import { Info } from 'lucide-react';
import type { DrawShape } from './types/chess';

const EMPTY_ARROWS: DrawShape[] = [];
const DrillView = lazy(() => import('./components/Drill/DrillView').then(module => ({ default: module.DrillView })));
const AnalyticsView = lazy(() => import('./components/Analytics/AnalyticsView').then(module => ({ default: module.AnalyticsView })));
const RepertoireAtlasView = lazy(() => import('./components/Atlas/RepertoireAtlasView').then(module => ({ default: module.RepertoireAtlasView })));

export function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('hub');
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(() => {
    try {
      return !localStorage.getItem(FIRST_TIME_TOUR_KEY);
    } catch {
      return false;
    }
  });
  const [isCreateTreeModalOpen, setIsCreateTreeModalOpen] = useState(false);
  const [tokenModalRequest, setTokenModalRequest] = useState(0);
  const [selectedDrillLineId, setSelectedDrillLineId] = useState<string | null>(null);
  const [saveFeedback, setSaveFeedback] = useState<{
    positionKey: string;
    status: 'pending' | 'success' | 'error';
    repertoireName: string;
  } | null>(null);
  const saveInFlightRef = useRef(false);
  const { themeId, theme, setThemeId } = useTheme();

  const {
    repertoires,
    activeRepertoireId,
    setActiveRepertoireId,
    orientation,
    setOrientation,
    flipBoard,
    currentNode,
    currentNodeId,
    currentStep,
    isCurrentSaved,
    currentFen,
    chess,
    history,
    currentChildren,
    playMove,
    saveCurrentToRepertoire,
    createRepertoire,
    setDefaultRepertoire,
    deleteRepertoire,
    clearRepertoire,
    pendingPromotion,
    completePromotion,
    cancelPromotion,
    goToNode,
    loadAndGoToNode,
    goToStart,
    goBack,
    goForward,
    saveComment,
    deleteNode,
    refreshRepertoire,
    isLoading,
  } = useRepertoire();

  // Fetch all nodes live for White and Black
  const allDbNodes = useLiveQuery(() => db.nodes.toArray(), []);

  const positionKey = `${activeRepertoireId}|${currentFen}`;
  const currentSaveFeedback = saveFeedback?.positionKey === positionKey &&
    (saveFeedback.status !== 'success' || isCurrentSaved) ? saveFeedback : null;
  const saveBusyElsewhere = saveFeedback?.status === 'pending' && saveFeedback.positionKey !== positionKey;
  const clearSettledSaveFeedback = useCallback(() => {
    setSaveFeedback(previous => previous?.status === 'pending' ? previous : null);
  }, []);

  // Handle Save directly into active repertoire
  const handleSaveCurrentToRepertoire = useCallback(async () => {
    if (saveInFlightRef.current) return;
    saveInFlightRef.current = true;
    const requestedPositionKey = positionKey;
    const repertoireName = repertoires.find(rep => rep.id === activeRepertoireId)?.name ?? 'Seçili repertuvar';
    setSaveFeedback({ positionKey: requestedPositionKey, status: 'pending', repertoireName });
    try {
      const result = await saveCurrentToRepertoire();
      if (!result) throw new Error('Kaydedilecek hamle bulunamadı.');
      setSaveFeedback({ positionKey: requestedPositionKey, status: 'success', repertoireName: result.repertoireName });
    } catch (error) {
      console.error('Repertuvar kaydı başarısız:', error);
      setSaveFeedback({ positionKey: requestedPositionKey, status: 'error', repertoireName });
    } finally {
      saveInFlightRef.current = false;
    }
  }, [saveCurrentToRepertoire, positionKey, repertoires, activeRepertoireId]);

  // Handle instant jump to Arena with active engine & DB
  const handleOpenNodeInArena = useCallback(
    async (nodeId: string, repertoireId?: string) => {
      clearSettledSaveFeedback();
      await loadAndGoToNode(nodeId, repertoireId);
      setActiveTab('repertoire');
    },
    [loadAndGoToNode, clearSettledSaveFeedback]
  );

  // Live Stockfish Evaluation for Repertoire mode (only active when on Repertoire tab)
  const evaluation = useEvaluation(currentFen, chess.turn(), activeTab === 'repertoire');

  const handleMove = useCallback(
    (orig: string, dest: string) => {
      if (playMove(orig, dest)) clearSettledSaveFeedback();
    },
    [playMove, clearSettledSaveFeedback]
  );

  const handleTabChange = useCallback((tab: ActiveTab) => {
    clearSettledSaveFeedback();
    setSelectedDrillLineId(null);
    setActiveTab(tab);
  }, [clearSettledSaveFeedback]);

  const lastMove: [string, string] | undefined = useMemo(() => {
    return currentStep ? [currentStep.from, currentStep.to] : undefined;
  }, [currentStep]);

  return (
    <div
      style={{ backgroundColor: theme.bgBase }}
      className="app-shell min-h-screen text-zinc-100 flex flex-col transition-colors duration-300"
    >
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        onTabChange={handleTabChange}
        currentThemeId={themeId}
        onSelectTheme={setThemeId}
        onOpenOnboarding={() => {
          setIsTourOpen(false);
          setIsOnboardingOpen(true);
        }}
      />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6">
        {/* Tab 0: Command Center Hub */}
        {activeTab === 'hub' && (
          <HubView
            repertoires={repertoires}
            activeRepertoireId={activeRepertoireId}
            onSelectRepertoire={(id) => {
              clearSettledSaveFeedback();
              setActiveRepertoireId(id);
            }}
            onNavigateTab={handleTabChange}
          />
        )}

        {/* Tab 1: Repertoire Builder / Chess Arena */}
        {activeTab === 'repertoire' && (
          <div>
            {/* Repertoire Selector */}
            <RepertoireHeader
              repertoires={repertoires}
              activeId={activeRepertoireId}
              onSelect={(id) => {
                clearSettledSaveFeedback();
                setActiveRepertoireId(id);
              }}
              onClearRepertoire={() => {
                clearSettledSaveFeedback();
                return clearRepertoire();
              }}
              onCreateTree={() => setIsCreateTreeModalOpen(true)}
              onSetDefault={setDefaultRepertoire}
              onDeleteTree={deleteRepertoire}
            />

            {isLoading ? (
              <div className="flex items-center justify-center py-20 text-zinc-500 text-sm">
                Repertuvar yükleniyor...
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Column: Board + Eval Bar + Board Controls + Opening Explorer */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                  {/* Stable Board and Eval Bar Container */}
                  <div className="flex items-center justify-center gap-3.5 w-full max-w-[560px] mx-auto">
                    {/* Live Stockfish Eval Bar */}
                    <EvalBar evaluation={evaluation} orientation={orientation} />

                    {/* Chessground Board */}
                    <div className="flex-1 aspect-square max-w-[500px]">
                      <ChessgroundBoard
                        fen={currentFen}
                        orientation={orientation}
                        chess={chess}
                        onMove={handleMove}
                        lastMove={lastMove}
                        shapes={currentNode?.arrows || EMPTY_ARROWS}
                      />
                    </div>
                  </div>

                  {/* Board Controls with Repertoire Save Button */}
                  <BoardControls
                    onGoToStart={() => { clearSettledSaveFeedback(); goToStart(); }}
                    onGoBack={() => { clearSettledSaveFeedback(); goBack(); }}
                    onGoForward={() => { clearSettledSaveFeedback(); goForward(); }}
                    onFlipBoard={flipBoard}
                    onSaveToRepertoire={handleSaveCurrentToRepertoire}
                    saveFeedback={currentSaveFeedback}
                    saveBusyElsewhere={saveBusyElsewhere}
                    onDeleteCurrentNode={currentNodeId ? () => {
                      clearSettledSaveFeedback();
                      return deleteNode(currentNodeId);
                    } : undefined}
                    isSaved={isCurrentSaved}
                    canSave={history.length > 0}
                    canGoBack={history.length > 0}
                    canGoForward={currentChildren.length > 0}
                    canDelete={currentNodeId !== null}
                    fen={currentFen}
                  />

                  {/* Arena Bottom Panel: Duality & Opening Theory Explorer */}
                  <ArenaBottomPanel
                    tokenModalRequest={tokenModalRequest}
                    fen={currentFen}
                    currentChildren={currentChildren}
                    evaluation={evaluation}
                    onPlayMove={handleMove}
                  />
                </div>

                {/* Right Column: Move Tree & Annotations */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  {/* Move Tree Explorer */}
                  <MoveTree
                    history={history}
                    currentChildren={currentChildren}
                    currentNodeId={currentNodeId}
                    onSelectNode={(id) => { clearSettledSaveFeedback(); goToNode(id); }}
                  />

                  {/* Move Annotation & Notes */}
                  <MoveAnnotation
                    key={currentNode?.id ?? 'none'}
                    currentNode={currentNode}
                    onSaveComment={saveComment}
                  />

                  {/* Quick Tip Box */}
                  <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-zinc-400 shadow-xs">
                    <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-zinc-200 font-medium">İpucu:</span> Tahtada serbestçe hamleler yapıp inceleyebilirsiniz. Beğendiğiniz varyantı kalıcı olarak eklemek için <strong className="text-amber-400">"Repertuvara Kaydet"</strong> butonuna basın.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <Suspense fallback={<div className="flex items-center justify-center py-20 text-zinc-500 text-sm" role="status">Bölüm yükleniyor...</div>}>
          {/* Tab 2: Variation & Repertoire Tree Atlas */}
          {activeTab === 'tree' && (
          <RepertoireAtlasView
            repertoires={repertoires}
            activeRepertoireId={activeRepertoireId}
            allNodes={allDbNodes || []}
            onSelectRepertoire={(id) => { clearSettledSaveFeedback(); setActiveRepertoireId(id); }}
            onOpenNodeOnBoard={handleOpenNodeInArena}
            onStartDrillLine={(line) => {
              if (line.length === 0) return;
              clearSettledSaveFeedback();
              setActiveRepertoireId(line[0].repertoireId);
              const selectedRepertoire = repertoires.find(rep => rep.id === line[0].repertoireId);
              if (selectedRepertoire) setOrientation(selectedRepertoire.color);
              setSelectedDrillLineId(line[line.length - 1].id);
              setActiveTab('drill');
            }}
            onNavigateTab={handleTabChange}
            onCreateRepertoire={createRepertoire}
            onSetDefaultRepertoire={setDefaultRepertoire}
            onDeleteRepertoire={deleteRepertoire}
            onRefreshRepertoire={refreshRepertoire}
          />
          )}

          {/* Tab 3: Drill & Spaced Repetition Mode */}
          {activeTab === 'drill' && (
          <DrillView
            repertoires={repertoires}
            activeRepertoireId={activeRepertoireId}
            orientation={orientation}
            selectedLineId={selectedDrillLineId}
            onExit={() => handleTabChange('tree')}
            onOpenVariantOnBoard={(nodeId) => handleOpenNodeInArena(nodeId, activeRepertoireId)}
          />
          )}

          {/* Tab 4: Game Analytics Mode */}
          {activeTab === 'analytics' && <AnalyticsView />}
        </Suspense>
      </main>

      {/* Create Tree Modal */}
      <CreateTreeModal
        isOpen={isCreateTreeModalOpen}
        defaultColor={orientation}
        onClose={() => setIsCreateTreeModalOpen(false)}
        onCreate={async (name, color, desc, makeDefault) => {
          const newId = await createRepertoire(name, color, desc, makeDefault);
          clearSettledSaveFeedback();
          setActiveRepertoireId(newId);
          setOrientation(color);
        }}
      />

      {/* Onboarding & Quick Hub Modal */}
      <OnboardingModal
        isOpen={isOnboardingOpen && !isTourOpen}
        onClose={() => setIsOnboardingOpen(false)}
        onNavigateTab={handleTabChange}
        onOpenTokenModal={() => {
          clearSettledSaveFeedback();
          setIsOnboardingOpen(false);
          setActiveTab('repertoire');
          setTokenModalRequest(request => request + 1);
        }}
        onRestartTour={() => {
          setIsOnboardingOpen(false);
          setIsTourOpen(true);
        }}
        currentThemeId={themeId}
        onSelectTheme={setThemeId}
      />

      {/* First-Time Interactive Tour Walkthrough */}
      {isTourOpen && (
        <FirstTimeTourModal
          onComplete={() => {
            setIsTourOpen(false);
            handleTabChange('repertoire');
          }}
          onSkip={() => setIsTourOpen(false)}
        />
      )}

      {/* Promotion Modal */}
      <PromotionModal
        isOpen={pendingPromotion !== null}
        color={orientation}
        onSelect={(piece) => { clearSettledSaveFeedback(); completePromotion(piece); }}
        onCancel={cancelPromotion}
      />

      {/* PWA Add to Home Screen / Mobile Install Banner */}
      <PwaInstallPrompt isBlocked={isOnboardingOpen || isTourOpen || isCreateTreeModalOpen || pendingPromotion !== null} />

      {/* Mobile Bottom Navigation */}
      <MobileNav activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}

export default App;
