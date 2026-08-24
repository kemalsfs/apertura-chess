import type { RepertoireNode, SRSData } from '../types/chess';

export function calculateNextSRS(currentSrs: SRSData | undefined, isCorrect: boolean): SRSData {
  const defaultEase = 2.5;

  if (isCorrect) {
    const streak = (currentSrs?.streak || 0) + 1;
    let interval = 1;

    if (streak === 1) {
      interval = 1;
    } else if (streak === 2) {
      interval = 3;
    } else {
      interval = Math.round((currentSrs?.interval || 3) * (currentSrs?.easeFactor || defaultEase));
    }

    const easeFactor = Math.min(3.0, (currentSrs?.easeFactor || defaultEase) + 0.1);
    const dueDate = Date.now() + interval * 24 * 60 * 60 * 1000;

    return {
      streak,
      interval,
      easeFactor,
      dueDate,
      lastReviewed: Date.now(),
      reviewsCount: (currentSrs?.reviewsCount || 0) + 1,
    };
  } else {
    // Failed recall
    const easeFactor = Math.max(1.3, (currentSrs?.easeFactor || defaultEase) - 0.2);

    return {
      streak: 0,
      interval: 1,
      easeFactor,
      dueDate: Date.now(), // Re-queue immediately
      lastReviewed: Date.now(),
      reviewsCount: (currentSrs?.reviewsCount || 0) + 1,
    };
  }
}

/**
 * Extracts all unique linear lines from root nodes to leaf nodes in the Repertoire DAG.
 */
export function extractRepertoireLines(nodes: Map<string, RepertoireNode>): RepertoireNode[][] {
  const rootNodes = Array.from(nodes.values()).filter(n => n.parentId === null);
  const lines: RepertoireNode[][] = [];

  function traverse(currentNode: RepertoireNode, currentPath: RepertoireNode[]) {
    const path = [...currentPath, currentNode];

    if (!currentNode.childrenIds || currentNode.childrenIds.length === 0) {
      lines.push(path);
      return;
    }

    for (const childId of currentNode.childrenIds) {
      const childNode = nodes.get(childId);
      if (childNode) {
        traverse(childNode, path);
      }
    }
  }

  for (const root of rootNodes) {
    traverse(root, []);
  }

  return lines;
}