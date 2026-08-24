import { useState, useCallback } from 'react';
import { useRepertoire } from './hooks/useRepertoire';
import { useEvaluation } from './hooks/useEvaluation';
import { ChessgroundBoard } from './components/Chessboard/ChessgroundBoard';
import { BoardControls } from './components/Chessboard/BoardControls';
import { EvalBar } from './components/Chessboard/EvalBar';
import { PromotionModal } from './components/Chessboard/PromotionModal';
import { RepertoireHeader } from './components/Repertoire/RepertoireHeader';
import { MoveTree } from './components/Repertoire/MoveTree';
import { MoveAnnotation } from './components/Repertoire/MoveAnnotation';
import { OpeningExplorer } from './components/Explorer/OpeningExplorer';
import { Header, type ActiveTab } from './components/Layout/Header';
import { MobileNav } from './components/Layout/MobileNav';
import { Sparkles, Info } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('repertoire');

  const {
    repertoires,
    activeRepertoireId,
    setActiveRepertoireId,
    orientation,
    flipBoard,
    currentNode,
    currentNodeId,
    currentFen,
    chess,
    history,
    currentChildren,
    playMove,
    pendingPromotion,
    completePromotion,
    goToNode,
    goToStart,
    goBack,
    goForward,
    saveComment,
    deleteNode,
    isLoading,
  } = useRepertoire();

  // Live Stockfish Evaluation
  const evaluation = useEvaluation(currentFen, chess.turn());

  const handleMove = useCallback(
    (orig: string, dest: string) => {
      playMove(orig, dest);
    },
    [playMove]
  );

  const lastMove: [string, string] | undefined = currentNode
    ? [currentNode.from, currentNode.to]
    : undefined;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col pb-16 md:pb-6">
      {/* Top Header */}
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6">
        {activeTab === 'repertoire' && (
          <div>
            {/* Repertoire Selector */}
            <RepertoireHeader
              repertoires={repertoires}
              activeId={activeRepertoireId}
              onSelect={setActiveRepertoireId}
            />

            {isLoading ? (
              <div className="flex items-center justify-center py-20 text-zinc-500 text-sm">
                Repertoar yükleniyor...
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Column: Board + Eval Bar + Board Controls + Opening Explorer */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                  {/* Stable Board and Eval Bar Container (Zero Layout Shift) */}
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

                  {/* Board Controls */}
                  <BoardControls
                    onGoToStart={goToStart}
                    onGoBack={goBack}
                    onGoForward={goForward}
                    onFlipBoard={flipBoard}
                    onDeleteCurrentNode={currentNodeId ? () => deleteNode(currentNodeId) : undefined}
                    canGoBack={currentNodeId !== null}
                    canGoForward={currentChildren.length > 0}
                    canDelete={currentNodeId !== null}
                    fen={currentFen}
                  />

                  {/* Opening Explorer Database */}
                  <OpeningExplorer
                    fen={currentFen}
                    currentChildren={currentChildren}
                    onPlayMove={playMove}
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
                  <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-zinc-400">
                    <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-zinc-200 font-medium">İpucu:</span> Açılış Veritabanındaki herhangi bir hamleye tıkladığınızda hamle otomatik olarak tahtada oynanır ve açılış ağacınıza eklenir.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'drill' && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center max-w-xl mx-auto my-12 shadow-2xl">
            <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 text-emerald-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-zinc-100 mb-2">Spaced Repetition Drill Modu</h2>
            <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
              Faz 3 kapsamında inşa edilecek. Bilgisayar açılış ağacınızdaki rakip varyantları otomatik oynayacak ve sizden doğru hamleleri hatırlamanızı isteyecek.
            </p>
            <button
              onClick={() => setActiveTab('repertoire')}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-zinc-950 font-bold rounded-xl text-xs transition cursor-pointer"
            >
              Açılış Ağacına Dön
            </button>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center max-w-xl mx-auto my-12 shadow-2xl">
            <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 text-emerald-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-zinc-100 mb-2">Lichess & Chess.com Maç Analitiği</h2>
            <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
              Faz 4 kapsamında inşa edilecek. Çevrimiçi maçlarınızı indirip hangi varyantta % kaç kazandığınızı gösterecek.
            </p>
            <button
              onClick={() => setActiveTab('repertoire')}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-zinc-950 font-bold rounded-xl text-xs transition cursor-pointer"
            >
              Açılış Ağacına Dön
            </button>
          </div>
        )}
      </main>

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