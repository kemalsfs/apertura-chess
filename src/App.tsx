import { useState, useCallback, useEffect } from 'react';
import { useRepertoire } from './hooks/useRepertoire';
import { useEvaluation } from './hooks/useEvaluation';
import { useTheme } from './hooks/useTheme';
import { ChessgroundBoard } from './components/Chessboard/ChessgroundBoard';
import { BoardControls } from './components/Chessboard/BoardControls';
import { EvalBar } from './components/Chessboard/EvalBar';
import { PromotionModal } from './components/Chessboard/PromotionModal';
import { RepertoireHeader } from './components/Repertoire/RepertoireHeader';
import { TreeRoutingModal } from './components/Repertoire/TreeRoutingModal';
import { CreateTreeModal } from './components/Repertoire/CreateTreeModal';
import { MoveTree } from './components/Repertoire/MoveTree';
import { MoveAnnotation } from './components/Repertoire/MoveAnnotation';
import { DrillView } from './components/Drill/DrillView';
import { AnalyticsView } from './components/Analytics/AnalyticsView';
import { HubView } from './components/Hub/HubView';
import { RepertoireAtlasView } from './components/Atlas/RepertoireAtlasView';
import { Header, type ActiveTab } from './components/Layout/Header';
import { MobileNav } from './components/Layout/MobileNav';
import { ArenaBottomPanel } from './components/Explorer/ArenaBottomPanel';
import { OnboardingModal } from './components/Common/OnboardingModal';
import { FirstTimeTourModal, FIRST_TIME_TOUR_KEY } from './components/Common/FirstTimeTourModal';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from './db/db';
import type { Repertoire } from './types/chess';
import { Info } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('hub');
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [routingPrompt, setRoutingPrompt] = useState<{ firstMoveSan: string; existingRepertoire: Repertoire } | null>(null);
  const [isCreateTreeModalOpen, setIsCreateTreeModalOpen] = useState(false);
  const { themeId, theme, setThemeId } = useTheme();

  // Auto-launch Tour on very first visit
  useEffect(() => {
    try {
      const hasSeen = localStorage.getItem(FIRST_TIME_TOUR_KEY);
      if (!hasSeen) {
        setIsTourOpen(true);
      }
    } catch (e) {
      // Ignore
    }
  }, []);

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

  // Handle Save with Smart Auto-Routing
  const handleSaveCurrentToRepertoire = useCallback(async () => {
    const res = await saveCurrentToRepertoire();
    if (res?.status === 'prompt_existing' && res.existingRepertoire && res.firstMoveSan) {
      setRoutingPrompt({
        firstMoveSan: res.firstMoveSan,
        existingRepertoire: res.existingRepertoire,
      });
    }
  }, [saveCurrentToRepertoire]);

  // Handle instant jump to Arena with active engine & DB
  const handleOpenNodeInArena = useCallback(
    async (nodeId: string, repertoireId?: string) => {
      await loadAndGoToNode(nodeId, repertoireId);
      setActiveTab('repertoire');
    },
    [loadAndGoToNode]
  );

  // Live Stockfish Evaluation for Repertoire mode
  const evaluation = useEvaluation(currentFen, chess.turn());

  const handleMove = useCallback(
    (orig: string, dest: string) => {
      playMove(orig, dest);
    },
    [playMove]
  );

  const lastMove: [string, string] | undefined = currentStep
    ? [currentStep.from, currentStep.to]
    : undefined;

  return (
    <div
      style={{ backgroundColor: theme.bgBase }}
      className="min-h-screen text-zinc-100 flex flex-col pb-16 md:pb-6 transition-colors duration-300"
    >
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        currentThemeId={themeId}
        onSelectTheme={setThemeId}
        onOpenOnboarding={() => setIsOnboardingOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6">
        {/* Tab 0: Command Center Hub */}
        {activeTab === 'hub' && (
          <HubView
            repertoires={repertoires}
            activeRepertoireId={activeRepertoireId}
            onSelectRepertoire={setActiveRepertoireId}
            onNavigateTab={setActiveTab}
          />
        )}

        {/* Tab 1: Repertoire Builder / Chess Arena */}
        {activeTab === 'repertoire' && (
          <div>
            {/* Repertoire Selector */}
            <RepertoireHeader
              repertoires={repertoires}
              activeId={activeRepertoireId}
              onSelect={setActiveRepertoireId}
              onClearRepertoire={clearRepertoire}
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
                        shapes={currentNode?.arrows || []}
                      />
                    </div>
                  </div>

                  {/* Board Controls with Repertoire Save Button */}
                  <BoardControls
                    onGoToStart={goToStart}
                    onGoBack={goBack}
                    onGoForward={goForward}
                    onFlipBoard={flipBoard}
                    onSaveToRepertoire={handleSaveCurrentToRepertoire}
                    onDeleteCurrentNode={currentNodeId ? () => deleteNode(currentNodeId) : undefined}
                    isSaved={isCurrentSaved}
                    canSave={history.length > 0}
                    canGoBack={history.length > 0}
                    canGoForward={currentChildren.length > 0}
                    canDelete={currentNodeId !== null}
                    fen={currentFen}
                  />

                  {/* Arena Bottom Panel: Duality & Opening Theory Explorer */}
                  <ArenaBottomPanel
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
                    onSelectNode={goToNode}
                  />

                  {/* Move Annotation & Notes */}
                  <MoveAnnotation
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

        {/* Tab 2: Variation & Repertoire Tree Atlas */}
        {activeTab === 'tree' && (
          <RepertoireAtlasView
            repertoires={repertoires}
            activeRepertoireId={activeRepertoireId}
            allNodes={allDbNodes || []}
            onSelectRepertoire={setActiveRepertoireId}
            onOpenNodeOnBoard={handleOpenNodeInArena}
            onStartDrillLine={() => {
              setActiveTab('drill');
            }}
            onNavigateTab={setActiveTab}
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
            onExit={() => setActiveTab('repertoire')}
            onOpenVariantOnBoard={(nodeId) => handleOpenNodeInArena(nodeId, activeRepertoireId)}
          />
        )}

        {/* Tab 4: Game Analytics Mode */}
        {activeTab === 'analytics' && <AnalyticsView />}
      </main>

      {/* Tree Routing Confirmation Modal */}
      {routingPrompt && (
        <TreeRoutingModal
          isOpen={true}
          firstMoveSan={routingPrompt.firstMoveSan}
          existingRepertoire={routingPrompt.existingRepertoire}
          onConfirmExisting={async () => {
            await saveCurrentToRepertoire(routingPrompt.existingRepertoire.id);
            setActiveRepertoireId(routingPrompt.existingRepertoire.id);
            setRoutingPrompt(null);
          }}
          onCreateNew={() => {
            setRoutingPrompt(null);
            setIsCreateTreeModalOpen(true);
          }}
          onCancel={() => setRoutingPrompt(null)}
        />
      )}

      {/* Create Tree Modal */}
      <CreateTreeModal
        isOpen={isCreateTreeModalOpen}
        defaultColor={orientation}
        onClose={() => setIsCreateTreeModalOpen(false)}
        onCreate={async (name, color, desc, makeDefault) => {
          const newId = await createRepertoire(name, color, desc, makeDefault);
          setActiveRepertoireId(newId);
          setOrientation(color);
        }}
      />

      {/* Onboarding & Quick Hub Modal */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
        onNavigateTab={setActiveTab}
        onOpenTokenModal={() => {
          setIsOnboardingOpen(false);
          setActiveTab('repertoire');
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
        <FirstTimeTourModal onComplete={() => setIsTourOpen(false)} />
      )}

      {/* Promotion Modal */}
      <PromotionModal
        isOpen={pendingPromotion !== null}
        color={orientation}
        onSelect={completePromotion}
        onCancel={() => {}}
      />

      {/* Mobile Bottom Navigation */}
      <MobileNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;