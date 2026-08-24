import { useState, useEffect, useCallback, useMemo } from 'react';
import { Chess } from 'chess.js';
import { db, initializeDatabase } from '../db/db';
import type { Repertoire, RepertoireNode, MoveHistoryItem, RepertoireColor } from '../types/chess';
import { STARTING_FEN, normalizeFen, isPromotionMove } from '../utils/chessHelpers';

export interface BoardStep {
  san: string;
  uci: string;
  from: string;
  to: string;
  fen: string;
  turn: 'w' | 'b';
  promotion?: string;
  savedNodeId?: string;
  comment?: string;
}

export function useRepertoire() {
  const [repertoires, setRepertoires] = useState<Repertoire[]>([]);
  const [activeRepertoireId, setActiveRepertoireId] = useState<string>('default-white');
  const [nodes, setNodes] = useState<Map<string, RepertoireNode>>(new Map());
  const [orientation, setOrientation] = useState<RepertoireColor>('white');
  const [pendingPromotion, setPendingPromotion] = useState<{ from: string; to: string } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Active Line on Board (can contain both saved nodes and temporary unsaved exploration moves)
  const [boardHistory, setBoardHistory] = useState<BoardStep[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1); // -1 means starting position

  // Initialize DB and load repertoires
  useEffect(() => {
    async function loadData() {
      await initializeDatabase();
      const allReps = await db.repertoires.toArray();
      setRepertoires(allReps);
      if (allReps.length > 0 && !activeRepertoireId) {
        setActiveRepertoireId(allReps[0].id);
        setOrientation(allReps[0].color);
      }
    }
    loadData();
  }, []);

  // Load nodes for active repertoire
  useEffect(() => {
    if (!activeRepertoireId) return;

    async function loadNodes() {
      setIsLoading(true);
      const repNodes = await db.nodes.where('repertoireId').equals(activeRepertoireId).toArray();
      const nodeMap = new Map<string, RepertoireNode>();
      for (const node of repNodes) {
        nodeMap.set(node.id, node);
      }
      setNodes(nodeMap);
      setBoardHistory([]);
      setHistoryIndex(-1);
      setIsLoading(false);

      const rep = repertoires.find(r => r.id === activeRepertoireId);
      if (rep) {
        setOrientation(rep.color);
      }
    }

    loadNodes();
  }, [activeRepertoireId, repertoires]);

  // Current Step in the active board line
  const currentStep = useMemo(() => {
    if (historyIndex >= 0 && historyIndex < boardHistory.length) {
      return boardHistory[historyIndex];
    }
    return null;
  }, [boardHistory, historyIndex]);

  // Current Node if current step is saved in repertoire DB
  const currentNode = useMemo(() => {
    if (currentStep?.savedNodeId) {
      return nodes.get(currentStep.savedNodeId) || null;
    }
    return null;
  }, [currentStep, nodes]);

  // Current FEN on board
  const currentFen = useMemo(() => {
    return currentStep ? currentStep.fen : STARTING_FEN;
  }, [currentStep]);

  // Chess instance
  const chess = useMemo(() => {
    return new Chess(currentFen);
  }, [currentFen]);

  // Check if current position is already saved in Repertoire DAG
  const isCurrentSaved = useMemo(() => {
    if (historyIndex === -1) return true; // Starting position is always "saved"
    return !!currentStep?.savedNodeId;
  }, [historyIndex, currentStep]);

  // Lineage history up to current index for MoveTree display
  const history: MoveHistoryItem[] = useMemo(() => {
    const path: MoveHistoryItem[] = [];
    for (let i = 0; i <= historyIndex && i < boardHistory.length; i++) {
      const step = boardHistory[i];
      const moveNum = Math.floor(i / 2) + 1;
      path.push({
        nodeId: step.savedNodeId || `temp_${i}`,
        san: step.san,
        fen: step.fen,
        turn: step.turn,
        moveNumber: moveNum,
      });
    }
    return path;
  }, [boardHistory, historyIndex]);

  // Child candidate nodes from current position that exist in Repertoire DB
  const currentChildren = useMemo(() => {
    if (historyIndex === -1) {
      // Root level moves
      return Array.from(nodes.values()).filter(n => n.parentId === null);
    }
    if (!currentStep?.savedNodeId) return [];

    const node = nodes.get(currentStep.savedNodeId);
    if (!node || !node.childrenIds) return [];
    return node.childrenIds
      .map(id => nodes.get(id))
      .filter((n): n is RepertoireNode => n !== undefined);
  }, [historyIndex, currentStep, nodes]);

  // Navigate to a specific step index or root
  const goToStep = useCallback((index: number) => {
    setHistoryIndex(index);
    setPendingPromotion(null);
  }, []);

  const goToStart = useCallback(() => {
    goToStep(-1);
  }, [goToStep]);

  const goBack = useCallback(() => {
    if (historyIndex >= 0) {
      goToStep(historyIndex - 1);
    }
  }, [historyIndex, goToStep]);

  const goForward = useCallback(() => {
    if (historyIndex + 1 < boardHistory.length) {
      goToStep(historyIndex + 1);
    } else if (currentChildren.length > 0) {
      // Go to first saved child
      const child = currentChildren[0];
      const newStep: BoardStep = {
        san: child.san,
        uci: child.uci,
        from: child.from,
        to: child.to,
        fen: child.fen,
        turn: child.turn,
        promotion: child.promotion,
        savedNodeId: child.id,
        comment: child.comment,
      };
      setBoardHistory(prev => [...prev.slice(0, historyIndex + 1), newStep]);
      setHistoryIndex(prev => prev + 1);
    }
  }, [historyIndex, boardHistory.length, currentChildren, goToStep]);

  // Select a saved node directly from MoveTree / Explorer
  const goToNode = useCallback(
    (nodeId: string | null) => {
      if (!nodeId) {
        goToStart();
        return;
      }

      // If clicking a child node from current position
      const childNode = nodes.get(nodeId);
      if (childNode) {
        // Build full path to this node
        const path: BoardStep[] = [];
        let curr: RepertoireNode | null = childNode;
        while (curr) {
          path.unshift({
            san: curr.san,
            uci: curr.uci,
            from: curr.from,
            to: curr.to,
            fen: curr.fen,
            turn: curr.turn,
            promotion: curr.promotion,
            savedNodeId: curr.id,
            comment: curr.comment,
          });
          curr = curr.parentId ? nodes.get(curr.parentId) || null : null;
        }

        setBoardHistory(path);
        setHistoryIndex(path.length - 1);
        setPendingPromotion(null);
      }
    },
    [nodes, goToStart]
  );

  // Play a move on the board (allows free exploration!)
  const playMove = useCallback(
    (from: string, to: string, promotion: string = 'q'): boolean => {
      if (isPromotionMove(chess, from, to) && !pendingPromotion) {
        setPendingPromotion({ from, to });
        return true;
      }

      try {
        const moveAttempt = chess.move({
          from,
          to,
          promotion: promotion || undefined,
        });

        if (!moveAttempt) return false;

        const newFen = chess.fen();
        const san = moveAttempt.san;
        const uci = `${from}${to}${promotion && promotion !== 'q' ? promotion : ''}`;

        // Check if this move already exists in saved children from current position
        const existingSavedChild = currentChildren.find(c => c.san === san);

        const newStep: BoardStep = {
          san,
          uci,
          from,
          to,
          fen: newFen,
          turn: chess.turn(),
          promotion: moveAttempt.promotion,
          savedNodeId: existingSavedChild?.id,
          comment: existingSavedChild?.comment,
        };

        const updatedHistory = [...boardHistory.slice(0, historyIndex + 1), newStep];
        setBoardHistory(updatedHistory);
        setHistoryIndex(updatedHistory.length - 1);
        setPendingPromotion(null);
        return true;
      } catch (err) {
        console.error('Invalid move attempt:', err);
        setPendingPromotion(null);
        return false;
      }
    },
    [chess, currentChildren, boardHistory, historyIndex, pendingPromotion]
  );

  // Explicitly Save Current Unsaved Line to Permanent Repertoire DAG
  const saveCurrentToRepertoire = useCallback(async () => {
    if (historyIndex < 0) return;

    let parentId: string | null = null;
    const updatedNodes = new Map(nodes);
    const updatedHistory = [...boardHistory];

    for (let i = 0; i <= historyIndex; i++) {
      const step = updatedHistory[i];

      if (step.savedNodeId && updatedNodes.has(step.savedNodeId)) {
        parentId = step.savedNodeId;
      } else {
        // Create new RepertoireNode in DB
        const normFen = normalizeFen(step.fen);
        const newNodeId = `${activeRepertoireId}_${Date.now()}_${step.san}_${i}`;

        const newNode: RepertoireNode = {
          id: newNodeId,
          repertoireId: activeRepertoireId,
          fen: step.fen,
          normalizedFen: normFen,
          san: step.san,
          uci: step.uci,
          from: step.from,
          to: step.to,
          promotion: step.promotion,
          turn: step.turn,
          moveNumber: Math.floor(i / 2) + 1,
          parentId,
          childrenIds: [],
          createdAt: Date.now(),
        };

        await db.nodes.add(newNode);

        // Update parent's childrenIds
        if (parentId) {
          const parent = updatedNodes.get(parentId);
          if (parent && !parent.childrenIds.includes(newNodeId)) {
            const newChildren = [...parent.childrenIds, newNodeId];
            await db.nodes.update(parentId, { childrenIds: newChildren });
            parent.childrenIds = newChildren;
          }
        }

        updatedNodes.set(newNodeId, newNode);
        step.savedNodeId = newNodeId;
        parentId = newNodeId;
      }
    }

    setNodes(updatedNodes);
    setBoardHistory(updatedHistory);
  }, [historyIndex, boardHistory, nodes, activeRepertoireId]);

  // Complete promotion after piece pick
  const completePromotion = useCallback(
    (pieceType: string) => {
      if (pendingPromotion) {
        playMove(pendingPromotion.from, pendingPromotion.to, pieceType);
      }
    },
    [pendingPromotion, playMove]
  );

  // Save comment for current step
  const saveComment = useCallback(
    async (comment: string) => {
      if (currentStep?.savedNodeId) {
        await db.nodes.update(currentStep.savedNodeId, { comment });
        setNodes(prev => {
          const next = new Map(prev);
          const n = next.get(currentStep.savedNodeId!);
          if (n) next.set(currentStep.savedNodeId!, { ...n, comment });
          return next;
        });
      }

      // Update local step
      if (currentStep) {
        currentStep.comment = comment;
        setBoardHistory([...boardHistory]);
      }
    },
    [currentStep, boardHistory]
  );

  // Delete node from repertoire
  const deleteNode = useCallback(
    async (nodeId: string) => {
      const nodeToDelete = nodes.get(nodeId);
      if (!nodeToDelete) return;

      const toDelete: string[] = [];
      function collectDescendants(id: string) {
        toDelete.push(id);
        const n = nodes.get(id);
        if (n) {
          for (const childId of n.childrenIds) {
            collectDescendants(childId);
          }
        }
      }
      collectDescendants(nodeId);

      await db.nodes.bulkDelete(toDelete);

      if (nodeToDelete.parentId) {
        const parent = nodes.get(nodeToDelete.parentId);
        if (parent) {
          const updatedChildren = parent.childrenIds.filter(id => id !== nodeId);
          await db.nodes.update(nodeToDelete.parentId, { childrenIds: updatedChildren });
        }
      }

      setNodes(prev => {
        const next = new Map(prev);
        for (const id of toDelete) next.delete(id);
        return next;
      });

      goToStart();
    },
    [nodes, goToStart]
  );

  // Clear all moves in active repertoire
  const clearRepertoire = useCallback(async () => {
    await db.nodes.where('repertoireId').equals(activeRepertoireId).delete();
    setNodes(new Map());
    setBoardHistory([]);
    setHistoryIndex(-1);
  }, [activeRepertoireId]);

  const flipBoard = useCallback(() => {
    setOrientation(prev => (prev === 'white' ? 'black' : 'white'));
  }, []);

  return {
    repertoires,
    activeRepertoireId,
    setActiveRepertoireId,
    orientation,
    setOrientation,
    flipBoard,
    currentNode,
    currentNodeId: currentStep?.savedNodeId || null,
    currentStep,
    isCurrentSaved,
    currentFen,
    chess,
    history,
    currentChildren,
    playMove,
    saveCurrentToRepertoire,
    clearRepertoire,
    pendingPromotion,
    completePromotion,
    goToStep,
    goToNode,
    goToStart,
    goBack,
    goForward,
    saveComment,
    deleteNode,
    isLoading,
  };
}