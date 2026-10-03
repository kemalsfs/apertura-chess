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

export interface SaveRepertoireResult {
  status: 'saved' | 'prompt_existing' | 'created_new';
  repertoireId: string;
  repertoireName: string;
  firstMoveSan?: string;
  existingRepertoire?: Repertoire;
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

  // Load repertoires from DB
  const loadRepertoires = useCallback(async () => {
    await initializeDatabase();
    const allReps = await db.repertoires.toArray();
    setRepertoires(allReps);
    return allReps;
  }, []);

  // Initialize DB and load repertoires on mount
  useEffect(() => {
    const timer = setTimeout(() => { void loadRepertoires(); }, 0);
    return () => clearTimeout(timer);
  }, [loadRepertoires]);

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

  // Current children nodes from current position
  const currentChildren = useMemo(() => {
    if (historyIndex === -1) {
      // Return root nodes of active repertoire
      return Array.from(nodes.values()).filter(n => n.parentId === null);
    }

    if (currentStep?.savedNodeId) {
      const curr = nodes.get(currentStep.savedNodeId);
      if (!curr || !curr.childrenIds) return [];
      return curr.childrenIds
        .map(id => nodes.get(id))
        .filter((n): n is RepertoireNode => n !== undefined);
    }

    return [];
  }, [historyIndex, currentStep, nodes]);

  // History list for UI
  const history: MoveHistoryItem[] = useMemo(() => {
    return boardHistory.map((step, idx) => ({
      nodeId: step.savedNodeId || `unsaved_${idx}`,
      san: step.san,
      fen: step.fen,
      turn: step.turn,
      moveNumber: Math.floor(idx / 2) + 1,
    }));
  }, [boardHistory]);

  // Create a new custom Repertoire Tree
  const createRepertoire = useCallback(
    async (name: string, color: RepertoireColor, description?: string, makeDefault: boolean = false): Promise<string> => {
      const now = Date.now();
      const newId = `rep_${color}_${Date.now()}`;

      const newRep: Repertoire = {
        id: newId,
        name,
        color,
        description: description || `${color === 'white' ? 'Beyaz' : 'Siyah'} açılış ağacı`,
        isDefault: makeDefault,
        createdAt: now,
        updatedAt: now,
      };

      await db.transaction('rw', db.repertoires, async () => {
        if (makeDefault) {
          await db.repertoires.where('color').equals(color).modify({ isDefault: false, updatedAt: now });
        }
        await db.repertoires.add(newRep);
      });
      await loadRepertoires();
      return newId;
    },
    [loadRepertoires]
  );

  // Set a repertoire as the default destination for its color
  const setDefaultRepertoire = useCallback(
    async (id: string): Promise<void> => {
      const target = repertoires.find(r => r.id === id);
      if (!target) return;

      const now = Date.now();
      await db.transaction('rw', db.repertoires, async () => {
        const sameColorReps = await db.repertoires.where('color').equals(target.color).toArray();
        for (const rep of sameColorReps) {
          await db.repertoires.update(rep.id, { isDefault: rep.id === id, updatedAt: now });
        }
      });

      await loadRepertoires();
    },
    [repertoires, loadRepertoires]
  );

  // Delete a repertoire and its nodes
  const deleteRepertoire = useCallback(
    async (id: string): Promise<boolean> => {
      const target = repertoires.find(r => r.id === id);
      if (!target) return false;

      const sameColorCount = repertoires.filter(r => r.color === target.color).length;
      if (sameColorCount <= 1) {
        alert('Her renk için en az 1 açılış ağacı bulunmalıdır.');
        return false;
      }

      await db.transaction('rw', db.nodes, db.repertoires, async () => {
        await db.nodes.where('repertoireId').equals(id).delete();
        await db.repertoires.delete(id);
        if (target.isDefault) {
          const remainingColor = await db.repertoires.where('color').equals(target.color).toArray();
          const next = remainingColor.find(rep => rep.isDefault) || remainingColor[0];
          if (next && !next.isDefault) {
            await db.repertoires.update(next.id, { isDefault: true, updatedAt: Date.now() });
          }
        }
      });

      const remaining = await loadRepertoires();
      const nextDefault = remaining.find(r => r.color === target.color && r.isDefault) 
        || remaining.find(r => r.color === target.color);

      if (nextDefault) {
        setActiveRepertoireId(nextDefault.id);
        setOrientation(nextDefault.color);
      }

      return true;
    },
    [repertoires, loadRepertoires]
  );

  // Rename a repertoire
  const renameRepertoire = useCallback(
    async (id: string, newName: string): Promise<void> => {
      if (!newName.trim()) return;
      await db.repertoires.update(id, { name: newName.trim(), updatedAt: Date.now() });
      await loadRepertoires();
    },
    [loadRepertoires]
  );

  // Core save execution into a specific repertoire DAG
  const executeSaveToDAG = useCallback(
    async (targetRepId: string): Promise<void> => {
      if (historyIndex < 0) return;

      const updatedHistory = boardHistory.map(step => ({ ...step }));
      const updatedNodes = await db.transaction('rw', db.nodes, async () => {
        const targetRepNodes = await db.nodes.where('repertoireId').equals(targetRepId).toArray();
        const nextNodes = new Map<string, RepertoireNode>();
        for (const node of targetRepNodes) {
          nextNodes.set(node.id, { ...node, childrenIds: [...node.childrenIds] });
        }

        let parentId: string | null = null;
        for (let i = 0; i <= historyIndex; i++) {
          const step = updatedHistory[i];

          let existingNodeId: string | undefined;
          for (const existingNode of nextNodes.values()) {
            if (existingNode.parentId === parentId && existingNode.san === step.san) {
              existingNodeId = existingNode.id;
              break;
            }
          }

          if (existingNodeId && nextNodes.has(existingNodeId)) {
            parentId = existingNodeId;
            step.savedNodeId = existingNodeId;
          } else {
            const normFen = normalizeFen(step.fen);
            const newNodeId = `${targetRepId}_${Date.now()}_${step.san}_${i}`;

            const newNode: RepertoireNode = {
              id: newNodeId,
              repertoireId: targetRepId,
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

            if (parentId) {
              const parent = nextNodes.get(parentId);
              if (parent && !parent.childrenIds.includes(newNodeId)) {
                const newChildren = [...parent.childrenIds, newNodeId];
                await db.nodes.update(parentId, { childrenIds: newChildren });
                parent.childrenIds = newChildren;
              }
            }

            nextNodes.set(newNodeId, newNode);
            step.savedNodeId = newNodeId;
            parentId = newNodeId;
          }
        }
        return nextNodes;
      });

      if (targetRepId === activeRepertoireId) {
        setNodes(updatedNodes);
      }
      setBoardHistory(updatedHistory);
    },
    [historyIndex, boardHistory, activeRepertoireId]
  );

  // Save current board sequence directly to target / active repertoire DAG (allows multiple root moves in same tree)
  const saveCurrentToRepertoire = useCallback(
    async (targetRepIdOverride?: string): Promise<SaveRepertoireResult | null> => {
      if (historyIndex < 0 || boardHistory.length === 0) return null;

      const firstStep = boardHistory[0];
      const targetRepId = targetRepIdOverride || activeRepertoireId;
      const activeRep = repertoires.find(r => r.id === targetRepId);

      // Standard save into target repertoire DAG
      await executeSaveToDAG(targetRepId);
      return {
        status: 'saved',
        repertoireId: targetRepId,
        repertoireName: activeRep?.name || 'Repertuvar',
        firstMoveSan: firstStep.san,
      };
    },
    [historyIndex, boardHistory, activeRepertoireId, repertoires, executeSaveToDAG]
  );

  // Navigate to a specific step index or root
  const goToStep = useCallback((index: number) => {
    if (index >= -1 && index < boardHistory.length) {
      setHistoryIndex(index);
      setPendingPromotion(null);
    }
  }, [boardHistory.length]);

  const goToStart = useCallback(() => {
    goToStep(-1);
  }, [goToStep]);

  const goBack = useCallback(() => {
    if (historyIndex > -1) {
      goToStep(historyIndex - 1);
    }
  }, [historyIndex, goToStep]);

  const goForward = useCallback(() => {
    if (historyIndex < boardHistory.length - 1) {
      goToStep(historyIndex + 1);
    } else if (currentChildren.length > 0) {
      const firstChild = currentChildren[0];
      const newStep: BoardStep = {
        san: firstChild.san,
        uci: firstChild.uci,
        from: firstChild.from,
        to: firstChild.to,
        fen: firstChild.fen,
        turn: firstChild.turn,
        promotion: firstChild.promotion,
        savedNodeId: firstChild.id,
        comment: firstChild.comment,
      };
      setBoardHistory([...boardHistory, newStep]);
      setHistoryIndex(boardHistory.length);
      setPendingPromotion(null);
    }
  }, [historyIndex, boardHistory, currentChildren, goToStep]);

  // Select a saved node directly from MoveTree / Explorer
  const goToNode = useCallback(
    (nodeId: string | null) => {
      if (!nodeId) {
        goToStart();
        return;
      }

      const childNode = nodes.get(nodeId);
      if (childNode) {
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

  // Complete promotion after piece pick
  const completePromotion = useCallback(
    (pieceType: string) => {
      if (pendingPromotion) {
        playMove(pendingPromotion.from, pendingPromotion.to, pieceType);
      }
    },
    [pendingPromotion, playMove]
  );

  const cancelPromotion = useCallback(() => {
    setPendingPromotion(null);
  }, []);

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

      await db.transaction('rw', db.nodes, async () => {
        await db.nodes.bulkDelete(toDelete);
        if (nodeToDelete.parentId) {
          const parent = await db.nodes.get(nodeToDelete.parentId);
          if (parent) {
            const updatedChildren = parent.childrenIds.filter(id => id !== nodeId);
            await db.nodes.update(nodeToDelete.parentId, { childrenIds: updatedChildren });
          }
        }
      });

      setNodes(prev => {
        const next = new Map(prev);
        for (const id of toDelete) next.delete(id);
        return next;
      });

      goToStart();
    },
    [nodes, goToStart]
  );

  // Reload active repertoire nodes
  const refreshRepertoire = useCallback(async () => {
    if (!activeRepertoireId) return;
    const repNodes = await db.nodes.where('repertoireId').equals(activeRepertoireId).toArray();
    const nodeMap = new Map<string, RepertoireNode>();
    for (const node of repNodes) {
      nodeMap.set(node.id, node);
    }
    setNodes(nodeMap);
  }, [activeRepertoireId]);

  // Load a node and if needed switch active repertoire
  const loadAndGoToNode = useCallback(
    async (nodeId: string, repertoireId?: string) => {
      let currentMap = nodes;
      if (repertoireId && repertoireId !== activeRepertoireId) {
        setActiveRepertoireId(repertoireId);
        const repNodes = await db.nodes.where('repertoireId').equals(repertoireId).toArray();
        currentMap = new Map<string, RepertoireNode>();
        for (const node of repNodes) {
          currentMap.set(node.id, node);
        }
        setNodes(currentMap);
        const rep = repertoires.find(r => r.id === repertoireId);
        if (rep) {
          setOrientation(rep.color);
        }
      }

      const childNode = currentMap.get(nodeId);
      if (childNode) {
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
          curr = curr.parentId ? currentMap.get(curr.parentId) || null : null;
        }
        setBoardHistory(path);
        setHistoryIndex(path.length - 1);
        setPendingPromotion(null);
      }
    },
    [nodes, activeRepertoireId, repertoires]
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
    nodes,
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
    createRepertoire,
    setDefaultRepertoire,
    deleteRepertoire,
    renameRepertoire,
    clearRepertoire,
    pendingPromotion,
    completePromotion,
    cancelPromotion,
    goToStep,
    goToNode,
    loadAndGoToNode,
    goToStart,
    goBack,
    goForward,
    saveComment,
    deleteNode,
    refreshRepertoire,
    loadRepertoires,
    isLoading,
  };
}
