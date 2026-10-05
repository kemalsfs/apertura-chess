import React, { useState, useMemo, useRef } from 'react';
import type { Repertoire, RepertoireNode, RepertoireColor } from '../../types/chess';
import { 
  extractRepertoireLines, 
  getLineMetadata, 
  type LineMetadata 
} from '../../services/srsScheduler';
import { ECO_BOOK } from '../../data/ecoBook';
import { normalizeFen } from '../../utils/chessHelpers';
import { 
  Search, 
  Zap, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  Flame, 
  Trash2, 
  Sparkles, 
  Plus, 
  Star,
  ListTree,
  FileText,
  ExternalLink,
  ChevronDown,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Network
} from 'lucide-react';
import { db } from '../../db/db';
import { CreateTreeModal } from '../Repertoire/CreateTreeModal';
import { ConfirmModal } from '../Common/ConfirmModal';

interface RepertoireAtlasViewProps {
  repertoires: Repertoire[];
  activeRepertoireId: string;
  allNodes: RepertoireNode[];
  onSelectRepertoire: (id: string) => void;
  onOpenNodeOnBoard: (nodeId: string, repertoireId: string) => void;
  onStartDrillLine?: (line: RepertoireNode[]) => void;
  onNavigateTab: (tab: 'hub' | 'repertoire' | 'tree' | 'drill' | 'analytics') => void;
  onCreateRepertoire: (name: string, color: RepertoireColor, description?: string, makeDefault?: boolean) => Promise<string>;
  onSetDefaultRepertoire: (id: string) => Promise<void>;
  onDeleteRepertoire: (id: string) => Promise<boolean>;
  onRefreshRepertoire?: () => void;
}

interface LayoutNode {
  id: string;
  node: RepertoireNode;
  depth: number;
  moveLabel: string;
  ecoName?: string;
  ecoCode?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  children: LayoutNode[];
  parentId: string | null;
  leafCount: number;
}

export const RepertoireAtlasView: React.FC<RepertoireAtlasViewProps> = ({
  repertoires,
  activeRepertoireId,
  allNodes,
  onSelectRepertoire,
  onOpenNodeOnBoard,
  onStartDrillLine,
  onNavigateTab,
  onCreateRepertoire,
  onSetDefaultRepertoire,
  onDeleteRepertoire,
  onRefreshRepertoire,
}) => {
  const [viewMode, setViewMode] = useState<'visual' | 'hierarchical' | 'lines'>('visual');
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [collapsedNodeIds, setCollapsedNodeIds] = useState<Set<string>>(new Set());
  const [zoomScale, setZoomScale] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'due' | 'weak' | 'mastered' | 'new'>('all');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Active Repertoire
  const currentRep = repertoires.find(r => r.id === activeRepertoireId) || repertoires[0];
  const currentRepId = currentRep ? currentRep.id : activeRepertoireId;

  // Nodes belonging to the selected repertoire
  const repNodesMap = useMemo(() => {
    const map = new Map<string, RepertoireNode>();
    for (const node of allNodes) {
      if (node.repertoireId === currentRepId) {
        map.set(node.id, node);
      }
    }
    return map;
  }, [allNodes, currentRepId]);

  // Extract all lines for this repertoire
  const allLines = useMemo(() => {
    return extractRepertoireLines(repNodesMap);
  }, [repNodesMap]);

  // Derive metadata for each line
  const linesWithMeta = useMemo(() => {
    return allLines.map(line => ({
      line,
      meta: getLineMetadata(line),
    }));
  }, [allLines]);

  // Overall Statistics
  const totalMoves = repNodesMap.size;
  const totalLinesCount = allLines.length;
  const masteredCount = linesWithMeta.filter(l => l.meta.status === 'mastered').length;
  const masteryRate = totalLinesCount > 0 ? Math.round((masteredCount / totalLinesCount) * 100) : 0;
  const avgDepth = totalLinesCount > 0 
    ? (allLines.reduce((sum, l) => sum + l.length, 0) / totalLinesCount).toFixed(1) 
    : '0';

  // Selected Node Object & Ancestor Path
  const selectedNode = selectedNodeId ? repNodesMap.get(selectedNodeId) || null : null;
  const ancestorNodeIds = useMemo(() => {
    const ids = new Set<string>();
    let curr = selectedNode;
    while (curr) {
      ids.add(curr.id);
      curr = curr.parentId ? repNodesMap.get(curr.parentId) || null : null;
    }
    return ids;
  }, [selectedNode, repNodesMap]);

  // =========================================================================
  // TRUE VISUAL HIERARCHICAL TREE LAYOUT ENGINE (Curved Bezier DAG)
  // =========================================================================
  const { layoutNodes, connections, canvasWidth, canvasHeight } = useMemo(() => {
    const NODE_WIDTH = 190;
    const NODE_HEIGHT = 68;
    const COL_STEP = 270;
    const ROW_HEIGHT = 80;

    const allLayoutNodes: LayoutNode[] = [];
    const connectionList: { 
      id: string; 
      parent: LayoutNode; 
      child: LayoutNode; 
      isActive: boolean 
    }[] = [];

    // Helper to get ECO name for a node
    function getNodeEcoInfo(node: RepertoireNode) {
      const norm = normalizeFen(node.fen);
      const ecoEntry = ECO_BOOK[norm];
      return {
        ecoName: ecoEntry ? ecoEntry.name : undefined,
        ecoCode: ecoEntry ? ecoEntry.eco : undefined,
      };
    }

    // Build hierarchical tree structure
    function buildHierarchy(node: RepertoireNode, depth: number, parentId: string | null): LayoutNode {
      const moveNum = Math.floor((depth + 1) / 2);
      const isWhite = depth % 2 !== 0;
      const moveLabel = isWhite ? `${moveNum}. ${node.san}` : `${moveNum}... ${node.san}`;
      const { ecoName, ecoCode } = getNodeEcoInfo(node);

      const children: LayoutNode[] = [];
      if (node.childrenIds) {
        for (const childId of node.childrenIds) {
          const childNode = repNodesMap.get(childId);
          if (childNode) {
            children.push(buildHierarchy(childNode, depth + 1, node.id));
          }
        }
      }

      const leafCount = children.length === 0 ? 1 : children.reduce((sum, c) => sum + c.leafCount, 0);

      return {
        id: node.id,
        node,
        depth,
        moveLabel,
        ecoName,
        ecoCode,
        x: 0,
        y: 0,
        width: NODE_WIDTH,
        height: NODE_HEIGHT,
        children,
        parentId,
        leafCount,
      };
    }

    const rootNodes = Array.from(repNodesMap.values()).filter(n => n.parentId === null);
    const rootLayouts: LayoutNode[] = rootNodes.map(root => buildHierarchy(root, 1, null));

    // Assign positions
    let currentY = 40;
    let maxCol = 1;

    function positionNodes(item: LayoutNode) {
      if (item.depth > maxCol) maxCol = item.depth;
      item.x = 40 + (item.depth - 1) * COL_STEP;

      if (item.children.length === 0) {
        item.y = currentY;
        currentY += ROW_HEIGHT;
      } else {
        for (const child of item.children) {
          positionNodes(child);
        }
        item.y = (item.children[0].y + item.children[item.children.length - 1].y) / 2;
      }

      allLayoutNodes.push(item);
    }

    for (const root of rootLayouts) {
      positionNodes(root);
      currentY += 20; // Gap between multiple root trees
    }

    // Build connection lines
    for (const item of allLayoutNodes) {
      for (const child of item.children) {
        const isConnectionActive = 
          ancestorNodeIds.has(item.id) && ancestorNodeIds.has(child.id);

        connectionList.push({
          id: `${item.id}->${child.id}`,
          parent: item,
          child,
          isActive: isConnectionActive,
        });
      }
    }

    const computedWidth = Math.max(maxCol * COL_STEP + 120, 800);
    const computedHeight = Math.max(currentY + 60, 400);

    return {
      layoutNodes: allLayoutNodes,
      connections: connectionList,
      canvasWidth: computedWidth,
      canvasHeight: computedHeight,
    };
  }, [repNodesMap, ancestorNodeIds]);

  // Filter lines by search and status (for lines view)
  const filteredLines = useMemo(() => {
    return linesWithMeta.filter(({ meta }) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = meta.name.toLowerCase().includes(q);
        const matchesMoves = meta.movesText.toLowerCase().includes(q);
        const matchesEco = meta.eco?.toLowerCase().includes(q);
        if (!matchesName && !matchesMoves && !matchesEco) return false;
      }

      if (statusFilter === 'due') return meta.isDue || meta.lastReviewed === null;
      if (statusFilter === 'weak') return meta.status === 'learning' || (meta.successRate !== null && meta.successRate < 70);
      if (statusFilter === 'mastered') return meta.status === 'mastered';
      if (statusFilter === 'new') return meta.status === 'new';

      return true;
    });
  }, [linesWithMeta, searchQuery, statusFilter]);

  // Handle Delete Node
  const handleDeleteNode = async (nodeId: string) => {
    if (!window.confirm('Bu hamleyi ve altındaki tüm varyant dallarını silmek istediğinize emin misiniz?')) return;
    
    const toDelete: string[] = [];
    function collect(id: string) {
      toDelete.push(id);
      const n = repNodesMap.get(id);
      if (n && n.childrenIds) {
        for (const cid of n.childrenIds) collect(cid);
      }
    }
    collect(nodeId);

    await db.nodes.bulkDelete(toDelete);
    if (selectedNodeId === nodeId) setSelectedNodeId(null);
    if (onRefreshRepertoire) onRefreshRepertoire();
  };

  const toggleCollapse = (id: string) => {
    setCollapsedNodeIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const getStatusBadge = (status: LineMetadata['status']) => {
    switch (status) {
      case 'mastered':
        return (
          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-1.5 py-0.5 rounded flex items-center gap-1 shrink-0">
            <CheckCircle2 className="w-3 h-3" />
            <span>Usta</span>
          </span>
        );
      case 'review':
        return (
          <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/30 px-1.5 py-0.5 rounded flex items-center gap-1 shrink-0">
            <Clock className="w-3 h-3" />
            <span>Tekrar</span>
          </span>
        );
      case 'learning':
        return (
          <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-1.5 py-0.5 rounded flex items-center gap-1 shrink-0">
            <Flame className="w-3 h-3" />
            <span>Öğreniliyor</span>
          </span>
        );
      case 'new':
      default:
        return (
          <span className="text-[10px] font-bold text-zinc-400 bg-zinc-800 border border-zinc-700 px-1.5 py-0.5 rounded flex items-center gap-1 shrink-0">
            <Sparkles className="w-3 h-3" />
            <span>Yeni</span>
          </span>
        );
    }
  };

  // Render Recursive Hierarchical Outline Row
  const renderHierarchicalNode = (node: RepertoireNode, depth: number) => {
    const isCollapsed = collapsedNodeIds.has(node.id);
    const isSelected = selectedNodeId === node.id;
    const isAncestor = ancestorNodeIds.has(node.id);
    const childNodes = (node.childrenIds || [])
      .map(cid => repNodesMap.get(cid))
      .filter((c): c is RepertoireNode => c !== undefined);

    const moveNum = Math.floor((depth + 1) / 2);
    const isWhite = depth % 2 !== 0;
    const label = isWhite ? `${moveNum}. ${node.san}` : `${moveNum}... ${node.san}`;
    const norm = normalizeFen(node.fen);
    const ecoEntry = ECO_BOOK[norm];

    return (
      <div key={node.id} className="flex flex-col">
        <div
          style={{ paddingLeft: `min(${(depth - 1) * 28 + 12}px, 72px)` }}
          className={`py-2 pr-3 flex items-center justify-between border-b border-zinc-800/60 transition ${
            isSelected
              ? 'bg-amber-500/20 text-zinc-100 border-amber-500/50'
              : isAncestor
              ? 'bg-zinc-800/60 text-zinc-100'
              : 'hover:bg-zinc-800/40 text-zinc-300'
          }`}
        >
          <div className="flex items-center gap-2 min-w-0">
            {/* Collapse / Expand Toggle */}
            {childNodes.length > 0 ? (
              <button
                type="button"
                onClick={() => toggleCollapse(node.id)}
                aria-label={`${label} devam yollarını ${isCollapsed ? 'aç' : 'kapat'}`}
                aria-expanded={!isCollapsed}
                className="min-w-11 min-h-11 rounded flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700/60 focus-visible:outline-2 focus-visible:outline-amber-400 transition shrink-0 cursor-pointer"
              >
                {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            ) : (
              <div className="min-w-11 min-h-11 flex items-center justify-center shrink-0" aria-hidden="true">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              </div>
            )}

            <button
              type="button"
              onClick={() => setSelectedNodeId(node.id)}
              aria-pressed={isSelected}
              className="min-h-11 min-w-0 flex items-center gap-2 rounded px-1 text-left focus-visible:outline-2 focus-visible:outline-amber-400"
            >
              <span aria-hidden="true" className={`w-2 h-2 rounded-full shrink-0 ${isWhite ? 'bg-zinc-100' : 'bg-zinc-900 border border-zinc-500'}`} />
              <span className="font-mono font-bold text-xs text-zinc-100 shrink-0">{label}</span>
              {ecoEntry && (
                <span className="text-[10px] px-1.5 py-0.2 bg-zinc-800 border border-zinc-700 text-amber-400 rounded truncate max-w-[160px]">
                  {ecoEntry.name}
                </span>
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {childNodes.length > 0 && (
              <span className="hidden sm:inline text-[10px] font-mono text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded-lg border border-zinc-800">
                {childNodes.length} Yanıt
              </span>
            )}

            <button
              type="button"
              onClick={() => onOpenNodeOnBoard(node.id, currentRepId)}
              className="flex min-w-11 min-h-11 items-center justify-center bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded-lg text-xs font-bold transition shadow-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
              aria-label={`${label} konumunu tahtada aç`}
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Children if not collapsed */}
        {!isCollapsed && childNodes.length > 0 && (
          <div className="flex flex-col">
            {childNodes.map(child => renderHierarchicalNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto w-full font-sans pb-16 overflow-x-hidden">
      
      {/* Top Header Card: Active Tree Selector & Quick KPIs */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-4 sm:p-6 shadow-xl flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <Network className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-zinc-100 flex items-center gap-2">
                <span>Varyant & Açılış Ağacı Atlası</span>
                <span className="text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-lg">
                  Görsel Bağlantılı Dal Mimarisi
                </span>
              </h1>
              <p className="text-xs text-zinc-400">
                Hangi hamlenin hangi varyanttan dallandığını gösteren net bezier eğrileri ve hiyerarşik yapı.
              </p>
            </div>
          </div>

          {/* Repertoire Trees Selector Bar */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center bg-zinc-950 p-1 rounded-2xl border border-zinc-800 overflow-x-auto max-w-full">
              {repertoires.map(rep => {
                const isSelected = rep.id === currentRepId;
                return (
                  <button
                    key={rep.id}
                    onClick={() => {
                      setSelectedNodeId(null);
                      onSelectRepertoire(rep.id);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 ${
                      isSelected
                        ? rep.color === 'white'
                          ? 'bg-zinc-100 text-zinc-950 shadow-md'
                          : 'bg-zinc-800 text-zinc-100 border border-zinc-600 shadow-md'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        rep.color === 'white' ? 'bg-amber-400 border border-zinc-400' : 'bg-zinc-900 border border-zinc-500'
                      }`}
                    />
                    <span className="truncate max-w-[140px]">{rep.name}</span>
                    {rep.isDefault && <Star className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Create New Tree Button */}
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="flex items-center gap-1 px-3 py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-2xl text-xs font-bold transition cursor-pointer shrink-0"
              title="Yeni Açılış Ağacı Ekle"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Yeni Ağaç</span>
            </button>

            {/* Set Current as Default Action */}
            {currentRep && !currentRep.isDefault && (
              <button
                onClick={() => onSetDefaultRepertoire(currentRep.id)}
                className="flex items-center gap-1 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 rounded-2xl text-xs font-semibold transition cursor-pointer shrink-0"
                title="Bu ağacı varsayılan yap"
              >
                <Star className="w-3.5 h-3.5 text-amber-400" />
                <span>Varsayılan Yap</span>
              </button>
            )}

            {/* Delete Tree Action */}
            {currentRep && repertoires.filter(r => r.color === currentRep.color).length > 1 && (
              <button
                onClick={() => setIsDeleteModalOpen(true)}
                className="p-2 text-zinc-500 hover:text-red-400 hover:bg-zinc-800 rounded-2xl border border-zinc-800 transition cursor-pointer shrink-0"
                title="Bu Açılış Ağacını Sil"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* 4 Summary Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2 border-t border-zinc-800/80">
          <div className="bg-zinc-950/60 border border-zinc-800/80 p-3 rounded-2xl">
            <div className="text-[10px] text-zinc-500 uppercase font-mono">Toplam Hamle Düğümü</div>
            <div className="text-lg font-black font-mono text-zinc-100 mt-0.5">{totalMoves} <span className="text-xs text-zinc-500 font-normal">konum</span></div>
          </div>

          <div className="bg-zinc-950/60 border border-zinc-800/80 p-3 rounded-2xl">
            <div className="text-[10px] text-zinc-500 uppercase font-mono">Kayıtlı Varyant Sayısı</div>
            <div className="text-lg font-black font-mono text-zinc-100 mt-0.5">{totalLinesCount} <span className="text-xs text-zinc-500 font-normal">hat</span></div>
          </div>

          <div className="bg-zinc-950/60 border border-zinc-800/80 p-3 rounded-2xl">
            <div className="text-[10px] text-zinc-500 uppercase font-mono">SRS Ezber Ustalığı</div>
            <div className="text-lg font-black font-mono text-emerald-400 mt-0.5">%{masteryRate}</div>
          </div>

          <div className="bg-zinc-950/60 border border-zinc-800/80 p-3 rounded-2xl">
            <div className="text-[10px] text-zinc-500 uppercase font-mono">Ortalama Derinlik</div>
            <div className="text-lg font-black font-mono text-amber-400 mt-0.5">{avgDepth} <span className="text-xs text-zinc-500 font-normal">hamle</span></div>
          </div>
        </div>
      </div>

      {/* View Mode Switcher Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex items-center bg-zinc-900 p-1 rounded-2xl border border-zinc-800 self-start sm:self-auto flex-wrap gap-1">
          <button
            onClick={() => setViewMode('visual')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              viewMode === 'visual' ? 'bg-zinc-800 text-amber-400 border border-zinc-700 shadow-xs' : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            <span>🌳 Görsel Bağlantılı Dal Grafiği</span>
          </button>

          <button
            onClick={() => setViewMode('hierarchical')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              viewMode === 'hierarchical' ? 'bg-zinc-800 text-amber-400 border border-zinc-700 shadow-xs' : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <ListTree className="w-3.5 h-3.5" />
            <span>🌿 Hiyerarşik Dal Akışı</span>
          </button>

          <button
            onClick={() => setViewMode('lines')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              viewMode === 'lines' ? 'bg-zinc-800 text-amber-400 border border-zinc-700 shadow-xs' : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>📜 Varyant Hatları ({linesWithMeta.length})</span>
          </button>
        </div>

        {/* Visual Zoom Controls */}
        {viewMode === 'visual' && (
          <div className="flex items-center gap-1.5 self-end sm:self-auto">
            <button
              onClick={() => setZoomScale(prev => Math.max(prev - 0.15, 0.5))}
              className="p-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-zinc-400 hover:text-zinc-200 transition cursor-pointer"
              title="Uzaklaştır"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-bold text-zinc-400 px-1">
              {Math.round(zoomScale * 100)}%
            </span>
            <button
              onClick={() => setZoomScale(prev => Math.min(prev + 0.15, 1.6))}
              className="p-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-zinc-400 hover:text-zinc-200 transition cursor-pointer"
              title="Yakınlaştır"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomScale(1)}
              className="p-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-zinc-400 hover:text-zinc-200 transition cursor-pointer"
              title="Sıfırla"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* =========================================================================
          VIEW MODE 1: VISUAL CONNECTED NODE GRAPH CANVAS (Interactive SVG Bezier)
         ========================================================================= */}
      {viewMode === 'visual' && (
        <div className="space-y-4">
          {repNodesMap.size === 0 ? (
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-12 text-center flex flex-col items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-zinc-500">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-zinc-200">Bu Ağaçta Henüz Hamle Yok</h3>
              <p className="text-xs text-zinc-400 max-w-md">
                "{currentRep?.name}" açılış ağacını geliştirmek için Satranç Masası'na gidip hamleler oynayabilir ve kaydedebilirsin.
              </p>
              <button
                onClick={() => {
                  onSelectRepertoire(currentRepId);
                  onNavigateTab('repertoire');
                }}
                className="mt-2 flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-xl text-xs transition cursor-pointer shadow-md"
              >
                <Plus className="w-4 h-4" />
                <span>Satranç Masasında Hamle Ekle</span>
              </button>
            </div>
          ) : (
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-4 sm:p-5 shadow-xl flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>Kavisli bağlantı çizgileri ebeveyn ve çocuk hamleleri doğrudan birbirine bağlar</span>
                </span>
                {selectedNode && (
                  <button
                    onClick={() => setSelectedNodeId(null)}
                    className="text-amber-400 hover:underline cursor-pointer font-semibold"
                  >
                    Seçimi Sıfırla
                  </button>
                )}
              </div>

              {/* 2D Visual Interactive Tree Canvas */}
              <div 
                ref={containerRef}
                className="overflow-auto custom-scrollbar bg-zinc-950/80 rounded-2xl border border-zinc-800/80 relative min-h-[460px] max-h-[620px]"
              >
                <div 
                  style={{ 
                    width: `${canvasWidth * zoomScale}px`, 
                    height: `${canvasHeight * zoomScale}px`,
                    transform: `scale(${zoomScale})`,
                    transformOrigin: 'top left',
                  }}
                  className="relative transition-transform duration-150 ease-out"
                >
                  {/* SVG Connecting Bezier Paths */}
                  <svg 
                    width={canvasWidth} 
                    height={canvasHeight} 
                    className="absolute inset-0 pointer-events-none z-0"
                  >
                    <defs>
                      <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#fbbf24" stopOpacity="1" />
                      </linearGradient>
                      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#f59e0b" floodOpacity="0.6" />
                      </filter>
                    </defs>

                    {connections.map((conn) => {
                      const startX = conn.parent.x + conn.parent.width;
                      const startY = conn.parent.y + conn.parent.height / 2;
                      const endX = conn.child.x;
                      const endY = conn.child.y + conn.child.height / 2;
                      const deltaX = (endX - startX) * 0.5;

                      const pathD = `M ${startX} ${startY} C ${startX + deltaX} ${startY}, ${endX - deltaX} ${endY}, ${endX} ${endY}`;

                      return (
                        <path
                          key={conn.id}
                          d={pathD}
                          fill="none"
                          stroke={conn.isActive ? 'url(#activeGrad)' : '#3f3f46'}
                          strokeWidth={conn.isActive ? 3.5 : 1.5}
                          strokeDasharray={conn.isActive ? 'none' : '4 3'}
                          filter={conn.isActive ? 'url(#glow)' : undefined}
                          className="transition-all duration-300"
                        />
                      );
                    })}
                  </svg>

                  {/* DOM Interactive Node Cards */}
                  {layoutNodes.map((item) => {
                    const isSelected = selectedNodeId === item.id;
                    const isAncestor = ancestorNodeIds.has(item.id);
                    const isWhiteMove = item.depth % 2 !== 0;
                    const childCount = item.children.length;
                    const srsStreak = item.node.srs?.streak || 0;

                    return (
                      <div
                        key={item.id}
                        onClick={() => setSelectedNodeId(item.id)}
                        style={{
                          left: `${item.x}px`,
                          top: `${item.y}px`,
                          width: `${item.width}px`,
                          height: `${item.height}px`,
                        }}
                        className={`absolute rounded-2xl border p-2.5 flex flex-col justify-between transition cursor-pointer z-10 select-none shadow-md ${
                          isSelected
                            ? 'bg-amber-500/20 border-amber-400 ring-2 ring-amber-400 shadow-amber-500/10'
                            : isAncestor
                            ? 'bg-zinc-800 border-amber-500/60 text-zinc-100 shadow-lg'
                            : 'bg-zinc-900/95 hover:bg-zinc-850 border-zinc-700/80 hover:border-zinc-500 text-zinc-300'
                        }`}
                      >
                        {/* Move SAN and Turn Indicator */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span 
                              className={`w-2 h-2 rounded-full shrink-0 ${
                                isWhiteMove ? 'bg-amber-300 border border-zinc-500' : 'bg-zinc-950 border border-zinc-400'
                              }`} 
                            />
                            <span className="font-mono font-extrabold text-xs text-zinc-100">
                              {item.moveLabel}
                            </span>
                          </div>

                          {/* SRS Status Dot */}
                          <span 
                            className={`w-2 h-2 rounded-full ${
                              srsStreak >= 5 ? 'bg-emerald-400' : srsStreak >= 2 ? 'bg-blue-400' : srsStreak >= 1 ? 'bg-amber-400' : 'bg-zinc-500'
                            }`}
                            title={`SRS Tekrar Serisi: ${srsStreak}`}
                          />
                        </div>

                        {/* Opening / Child Info Subline */}
                        <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono">
                          {item.ecoName ? (
                            <span className="truncate max-w-[110px] text-amber-400/90 font-medium">
                              {item.ecoName}
                            </span>
                          ) : (
                            <span className="text-zinc-500">
                              Katman {item.depth}
                            </span>
                          )}

                          <span className={`px-1.5 py-0.2 rounded font-bold ${
                            childCount > 0 ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-950 text-zinc-600'
                          }`}>
                            {childCount > 0 ? `+${childCount}` : 'Son'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Floating Inspector Panel for Selected Node */}
              {selectedNode && (
                <div className="bg-zinc-950 border border-amber-500/40 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xl animate-fade-in">
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-amber-400 font-bold font-mono">
                        Seçili Konum: {selectedNode.san}
                      </span>
                      {selectedNode.comment && (
                        <span className="text-[11px] text-zinc-300 italic truncate">
                          "{selectedNode.comment}"
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      Bu varyantı Satranç Masası'na aktararak Stockfish MultiPV ve Usta Veritabanı ile inceleyin.
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {/* Delete Node */}
                    <button
                      onClick={() => handleDeleteNode(selectedNode.id)}
                      className="p-2 text-zinc-400 hover:text-red-400 hover:bg-zinc-900 rounded-xl transition cursor-pointer"
                      title="Bu düğümü ve alt dallarını sil"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    {/* Open in Chessboard */}
                    <button
                      onClick={() => onOpenNodeOnBoard(selectedNode.id, currentRepId)}
                      className="flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-xl text-xs shadow-md transition cursor-pointer"
                    >
                      <span>🎯 Tahtada Aç ve Geliştir</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          VIEW MODE 2: HIERARCHICAL INDENTED COLLAPSIBLE TREE OUTLINE
         ========================================================================= */}
      {viewMode === 'hierarchical' && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-4 sm:p-5 shadow-xl flex flex-col gap-4">
          <div className="flex items-center justify-between text-xs text-zinc-400 pb-2 border-b border-zinc-800">
            <span>İç içe hiyerarşik ağaç akışı. Dalları genişletip daraltabilirsiniz.</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCollapsedNodeIds(new Set())}
                className="text-amber-400 hover:underline cursor-pointer text-xs"
              >
                Tümünü Genişlet
              </button>
              <span>•</span>
              <button
                onClick={() => {
                  const allIds = new Set(Array.from(repNodesMap.values()).map(n => n.id));
                  setCollapsedNodeIds(allIds);
                }}
                className="text-zinc-400 hover:underline cursor-pointer text-xs"
              >
                Tümünü Kapat
              </button>
            </div>
          </div>

          <div className="bg-zinc-950/80 rounded-2xl border border-zinc-800/80 max-h-[550px] overflow-y-auto custom-scrollbar divide-y divide-zinc-850">
            {Array.from(repNodesMap.values())
              .filter(n => n.parentId === null)
              .map(root => renderHierarchicalNode(root, 1))}
          </div>

          {selectedNode && (
            <div className="bg-zinc-950 border border-amber-500/40 p-3.5 rounded-2xl flex items-center justify-between gap-3">
              <span className="text-xs text-zinc-200 font-mono">
                Seçili: <strong className="text-amber-400">{selectedNode.san}</strong>
              </span>
              <button
                onClick={() => onOpenNodeOnBoard(selectedNode.id, currentRepId)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-xl text-xs shadow-md transition cursor-pointer"
              >
                <span>🎯 Tahtada Aç</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          VIEW MODE 3: LINEAR VARIATION LINES BREADCRUMB LIST
         ========================================================================= */}
      {viewMode === 'lines' && (
        <div className="space-y-4">
          {/* Search & Status Filters for Lines */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Açılış adı veya hamle ara..."
                className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl pl-10 pr-4 py-2 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500/50 transition"
              />
            </div>

            {/* Quick Status Filter Pills */}
            <div className="flex items-center gap-1 overflow-x-auto custom-scrollbar pb-1 sm:pb-0">
              {(['all', 'due', 'weak', 'mastered', 'new'] as const).map((filterKey) => {
                const labels: Record<string, string> = {
                  all: 'Tümü',
                  due: 'Çalışılacak',
                  weak: 'Zayıf',
                  mastered: 'Usta',
                  new: 'Yeni',
                };
                const isActive = statusFilter === filterKey;
                return (
                  <button
                    key={filterKey}
                    onClick={() => setStatusFilter(filterKey)}
                    className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer shrink-0 ${
                      isActive
                        ? 'bg-amber-500 text-zinc-950 font-bold shadow-xs'
                        : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                    }`}
                  >
                    {labels[filterKey]}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-3">
            {filteredLines.length === 0 ? (
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center text-zinc-500 text-xs">
                Bu ağaçta arama kriterine uyan varyant hattı bulunamadı.
              </div>
            ) : (
              filteredLines.map(({ line, meta }, idx) => (
                <div
                  key={meta.id + idx}
                  className="p-3.5 sm:p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition flex flex-col gap-3 shadow-md"
                >
                  {/* Line Header */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-xs sm:text-sm text-zinc-100">
                        {meta.name}
                      </span>
                      {meta.eco && (
                        <span className="text-[10px] px-2 py-0.5 bg-zinc-800 border border-zinc-700 text-amber-400 font-mono font-bold rounded-md">
                          {meta.eco}
                        </span>
                      )}
                      {getStatusBadge(meta.status)}
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                      <span>Ölçülen başarı: <strong className="text-zinc-200">{meta.successRate === null ? 'Henüz ölçülmedi' : `%${meta.successRate} (${meta.measuredAnswersCount} deneme)`}</strong></span>
                      <span>•</span>
                      <span>{meta.length} hamle derinliği</span>
                    </div>
                  </div>

                  {/* Move Breadcrumb Chips */}
                  <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap font-mono text-xs">
                    {line.map((node, nodeIdx) => {
                      const moveNum = Math.floor(nodeIdx / 2) + 1;
                      const isWhiteMove = nodeIdx % 2 === 0;
                      const label = isWhiteMove ? `${moveNum}.${node.san}` : `${node.san}`;

                      return (
                        <button
                          key={node.id}
                          onClick={() => onOpenNodeOnBoard(node.id, currentRepId)}
                          className="px-2 py-1 bg-zinc-950 hover:bg-amber-500/20 text-zinc-300 hover:text-amber-300 border border-zinc-800 hover:border-amber-500/40 rounded-lg transition cursor-pointer flex items-center gap-1"
                          title={`Bu hamleye git: ${label}`}
                        >
                          <span>{label}</span>
                          {nodeIdx < line.length - 1 && (
                            <ChevronRight className="w-2.5 h-2.5 text-zinc-600 ml-0.5" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Action Footer */}
                  <div className="flex items-center justify-between pt-2 border-t border-zinc-800/80 flex-wrap gap-2">
                    <div className="text-[10px] text-zinc-500 font-mono">
                      {meta.lastReviewed ? `Son Çalışma: ${new Date(meta.lastReviewed).toLocaleDateString('tr-TR')}` : 'Henüz çalışılmadı'}
                    </div>

                    <div className="flex items-center gap-2">
                      {onStartDrillLine && (
                        <button
                          onClick={() => onStartDrillLine(line)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-xs font-semibold transition cursor-pointer border border-zinc-700"
                        >
                          <Zap className="w-3 h-3 text-amber-400" />
                          <span>Drill</span>
                        </button>
                      )}

                      <button
                        onClick={() => onOpenNodeOnBoard(meta.id, currentRepId)}
                        className="flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-xl text-xs shadow-md transition cursor-pointer"
                      >
                        <span>🎯 Tahtada Aç ve Geliştir</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Create Tree Modal */}
      <CreateTreeModal
        isOpen={isCreateModalOpen}
        defaultColor={currentRep ? currentRep.color : 'white'}
        onClose={() => setIsCreateModalOpen(false)}
        onCreate={async (name, color, description, makeDefault) => {
          const newId = await onCreateRepertoire(name, color, description, makeDefault);
          setSelectedNodeId(null);
          onSelectRepertoire(newId);
        }}
      />

      {/* Delete Tree Confirmation Modal */}
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        title="Açılış Ağacını Sil"
        message={`"${currentRep?.name}" ağacı ve bu ağaca ait tüm kayıtlı varyantlar kalıcı olarak silinecektir. Devam etmek istiyor musunuz?`}
        confirmText="Ağacı Sil"
        cancelText="Vazgeç"
        confirmVariant="danger"
        onConfirm={async () => {
          if (currentRep) {
            await onDeleteRepertoire(currentRep.id);
            setIsDeleteModalOpen(false);
          }
        }}
        onCancel={() => setIsDeleteModalOpen(false)}
      />

    </div>
  );
};
