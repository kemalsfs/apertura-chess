import { useState, useEffect, useCallback, useMemo } from 'react';
import { Chess } from 'chess.js';
import { db, initializeDatabase } from '../db/db';
import type { Repertoire, RepertoireNode, MoveHistoryItem, RepertoireColor } from '../types/chess';
import { STARTING_FEN, normalizeFen, isPromotionMove } from '../utils/chessHelpers';

export function useRepertoire() {
  const [repertoires, setRepertoires] = useState<Repertoire[]>([]);
  const [activeRepertoireId, setActiveRepertoireId] = useState<string>('default-white');
  const [nodes, setNodes] = useState<Map<string, RepertoireNode>>(new Map());
  const [currentNodeId, setCurrentNodeId] = useState<string | null>(null);
  const [orientation, setOrientation] = useState<RepertoireColor>('white');
  const [pendingPromotion, setPendingPromotion] = useState<{ from: string; to: string } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
      setCurrentNodeId(null); // Reset to start
      setIsLoading(false);

      // Auto-set orientation based on repertoire color
      const rep = repertoires.find(r => r.id === activeRepertoireId);
      if (rep) {
        setOrientation(rep.color);
      }
    }

    loadNodes();
  }, [activeRepertoireId, repertoires]);

  // Current node object
  const currentNode = useMemo(() => {
    return currentNodeId ? nodes.get(currentNodeId) || null : null;
  }, [currentNodeId, nodes]);

  // Current FEN
  const currentFen = useMemo(() => {
    return currentNode ? currentNode.fen : STARTING_FEN;
  }, [currentNode]);

  // Chess.js instance for current position
  const chess = useMemo(() => {
    return new Chess(currentFen);
  }, [currentFen]);

  // Lineage from root to current node (Breadcrumbs / History)
  const history = useMemo(() => {
    const path: MoveHistoryItem[] = [];
    let curr = currentNode;
    while (curr) {
      path.unshift({
        nodeId: curr.id,
        san: curr.san,
        fen: curr.fen,
        turn: curr.turn,
        moveNumber: curr.moveNumber,
      });
      curr = curr.parentId ? nodes.get(curr.parentId) || null : null;
    }
    return path;
  }, [currentNode, nodes]);

  // Child nodes from current position
  const currentChildren = useMemo(() => {
    if (!currentNodeId) {
      // Root level moves (no parent)
      return Array.from(nodes.values()).filter(n => n.parentId === null);
    }
    const node = nodes.get(currentNodeId);
    if (!node || !node.childrenIds) return [];
    return node.childrenIds
      .map(id => nodes.get(id))
      .filter((n): n is RepertoireNode => n !== undefined);
  }, [currentNodeId, nodes]);

  // Navigate to a specific node
  const goToNode = useCallback((nodeId: string | null) => {
    setCurrentNodeId(nodeId);
    setPendingPromotion(null);
  }, []);

  // Go to root starting position
  const goToStart = useCallback(() => {
    goToNode(null);
  }, [goToNode]);

  // Go back 1 move
  const goBack = useCallback(() => {
    if (currentNode?.parentId !== undefined) {
      goToNode(currentNode.parentId);
    }
  }, [currentNode, goToNode]);

  // Go forward to primary child
  const goForward = useCallback(() => {
    if (currentChildren.length > 0) {
      goToNode(currentChildren[0].id);
    }
  }, [currentChildren, goToNode]);

  // Play a move on the board
  const playMove = useCallback(
    async (from: string, to: string, promotion: string = 'q'): Promise<boolean> => {
      // Check if it's a pawn promotion and we haven't selected a piece yet
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
        const normFen = normalizeFen(newFen);
        const san = moveAttempt.san;
        const uci = `${from}${to}${promotion && promotion !== 'q' ? promotion : ''}`;

        // Check if this move already exists from current position
        const existingChild = currentChildren.find(c => c.san === san);
        if (existingChild) {
          setCurrentNodeId(existingChild.id);
          setPendingPromotion(null);
          return true;
        }

        // Create new RepertoireNode
        const moveNumber = Math.floor(chess.moveNumber());
        const newNodeId = `${activeRepertoireId}_${Date.now()}_${san}`;

        const newNode: RepertoireNode = {
          id: newNodeId,
          repertoireId: activeRepertoireId,
          fen: newFen,
          normalizedFen: normFen,
          san,
          uci,
          from,
          to,
          promotion: moveAttempt.promotion,
          turn: chess.turn(),
          moveNumber,
          parentId: currentNodeId,
          childrenIds: [],
          createdAt: Date.now(),
        };

        // Save to DB
        await db.nodes.add(newNode);

        // If has parent, update parent's childrenIds
        if (currentNodeId) {
          const parent = nodes.get(currentNodeId);
          if (parent) {
            const updatedChildren = [...parent.childrenIds, newNodeId];
            await db.nodes.update(currentNodeId, { childrenIds: updatedChildren });
            parent.childrenIds = updatedChildren;
          }
        }

        // Update local memory map
        setNodes(prev => {
          const next = new Map(prev);
          next.set(newNodeId, newNode);
          return next;
        });

        setCurrentNodeId(newNodeId);
        setPendingPromotion(null);
        return true;
      } catch (err) {
        console.error('Invalid move attempt:', err);
        setPendingPromotion(null);
        return false;
      }
    },
    [chess, activeRepertoireId, currentNodeId, currentChildren, nodes, pendingPromotion]
  );

  // Complete promotion after user picks piece
  const completePromotion = useCallback(
    (pieceType: string) => {
      if (pendingPromotion) {
        playMove(pendingPromotion.from, pendingPromotion.to, pieceType);
      }
    },
    [pendingPromotion, playMove]
  );

  // Save comment for current node
  const saveComment = useCallback(
    async (comment: string) => {
      if (!currentNodeId) return;
      await db.nodes.update(currentNodeId, { comment });
      setNodes(prev => {
        const next = new Map(prev);
        const node = next.get(currentNodeId);
        if (node) {
          next.set(currentNodeId, { ...node, comment });
        }
        return next;
      });
    },
    [currentNodeId]
  );

  // Delete a node and its descendants
  const deleteNode = useCallback(
    async (nodeId: string) => {
      const nodeToDelete = nodes.get(nodeId);
      if (!nodeToDelete) return;

      // Collect all descendant IDs
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

      // Remove from DB
      await db.nodes.bulkDelete(toDelete);

      // Remove from parent's childrenIds
      if (nodeToDelete.parentId) {
        const parent = nodes.get(nodeToDelete.parentId);
        if (parent) {
          const updatedChildren = parent.childrenIds.filter(id => id !== nodeId);
          await db.nodes.update(nodeToDelete.parentId, { childrenIds: updatedChildren });
        }
      }

      // Update state
      setNodes(prev => {
        const next = new Map(prev);
        for (const id of toDelete) {
          next.delete(id);
        }
        return next;
      });

      // Reset to parent
      setCurrentNodeId(nodeToDelete.parentId);
    },
    [nodes]
  );

  // Toggle Board Orientation
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
  };
}