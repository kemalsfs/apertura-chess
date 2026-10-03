import type { RepertoireNode, SRSData } from '../types/chess';
import { ECO_BOOK } from '../data/ecoBook';

export type DrillFilterType = 'due' | 'weak' | 'stale' | 'all';

/** Lines with no player move cannot be tested in a drill. */
export function firstPlayerStepIndex(orientation: 'white' | 'black'): number {
  return orientation === 'white' ? 2 : 1;
}

export function isTrainableLine(line: RepertoireNode[], orientation: 'white' | 'black'): boolean {
  return firstPlayerStepIndex(orientation) < line.length;
}

export interface LineMetadata {
  id: string;
  name: string;
  eco?: string;
  rootOpening: string;
  movesText: string;
  lastReviewed: number | null;
  reviewsCount: number;
  successRate: number | null; // Measured answers only; null when no answer was recorded
  measuredAnswersCount: number;
  isDue: boolean;
  status: 'new' | 'learning' | 'review' | 'mastered';
  length: number;
}

export function recordActivityDate(timestamp: number = Date.now()): void {
  try {
    const d = new Date(timestamp);
    const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const raw = localStorage.getItem('apertura_activity_dates');
    const set = new Set<string>(raw ? JSON.parse(raw) : []);
    set.add(dateStr);
    localStorage.setItem('apertura_activity_dates', JSON.stringify(Array.from(set)));
  } catch (e) {
    console.warn('Could not record activity date:', e);
  }
}

export function calculateNextSRS(currentSrs: SRSData | undefined, isCorrect: boolean): SRSData {
  const defaultEase = 2.5;
  const now = Date.now();
  recordActivityDate(now);

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
    const dueDate = now + interval * 24 * 60 * 60 * 1000;

    return {
      streak,
      interval,
      easeFactor,
      dueDate,
      lastReviewed: now,
      reviewsCount: (currentSrs?.reviewsCount || 0) + 1,
      correctAnswers: (currentSrs?.correctAnswers || 0) + 1,
      wrongAnswers: currentSrs?.wrongAnswers || 0,
    };
  } else {
    // Failed recall
    const easeFactor = Math.max(1.3, (currentSrs?.easeFactor || defaultEase) - 0.2);

    return {
      streak: 0,
      interval: 1,
      easeFactor,
      dueDate: now, // Re-queue immediately
      lastReviewed: now,
      reviewsCount: (currentSrs?.reviewsCount || 0) + 1,
      correctAnswers: currentSrs?.correctAnswers || 0,
      wrongAnswers: (currentSrs?.wrongAnswers || 0) + 1,
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
    if (currentPath.some(node => node.id === currentNode.id)) return;
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

/**
 * Derives comprehensive metadata for a specific training line.
 */
export function getLineMetadata(line: RepertoireNode[]): LineMetadata {
  if (!line || line.length === 0) {
    return {
      id: 'empty',
      name: 'Boş Varyant',
      rootOpening: 'Boş',
      movesText: '',
      lastReviewed: null,
      reviewsCount: 0,
      successRate: null,
      measuredAnswersCount: 0,
      isDue: true,
      status: 'new',
      length: 0,
    };
  }

  const lastNode = line[line.length - 1];
  const firstNode = line[0];
  const rootOpening = firstNode?.san ? `1. ${firstNode.san}` : '1. e4';

  const movesText = line.map((n, idx) => {
    const moveNum = Math.floor(idx / 2) + 1;
    if (idx % 2 === 0) {
      return `${moveNum}. ${n.san}`;
    }
    return n.san;
  }).join(' ');

  // Look for deepest known ECO opening name in the line
  let openingName = firstNode?.san ? `${firstNode.san} Açılışı` : 'Açılış Varyantı';
  let ecoCode: string | undefined = undefined;

  for (let i = line.length - 1; i >= 0; i--) {
    const node = line[i];
    const ecoEntry = ECO_BOOK[node.normalizedFen];
    if (ecoEntry && ecoEntry.name && ecoEntry.name !== 'Başlangıç Konumu') {
      openingName = ecoEntry.name;
      ecoCode = ecoEntry.eco;
      break;
    }
  }

  // Calculate average / most recent SRS across nodes
  const nodesWithSrs = line.filter(n => n.srs && n.srs.reviewsCount > 0);
  const totalReviews = nodesWithSrs.reduce((acc, n) => acc + (n.srs?.reviewsCount || 0), 0);
  const lastReviewedTimestamps = nodesWithSrs
    .map(n => n.srs?.lastReviewed || 0)
    .filter(t => t > 0);

  const lastReviewed = lastReviewedTimestamps.length > 0
    ? Math.max(...lastReviewedTimestamps)
    : null;

  const now = Date.now();
  const isDue = line.some(n => !n.srs || !n.srs.dueDate || n.srs.dueDate <= now);

  const maxStreak = Math.max(0, ...line.map(n => n.srs?.streak || 0));

  let status: 'new' | 'learning' | 'review' | 'mastered' = 'new';
  if (totalReviews === 0) status = 'new';
  else if (maxStreak >= 5) status = 'mastered';
  else if (maxStreak >= 2) status = 'review';
  else status = 'learning';

  // Legacy reviewsCount has no correct/wrong split. Never turn it into an invented percentage.
  const measuredCorrect = line.reduce((sum, node) => sum + (node.srs?.correctAnswers || 0), 0);
  const measuredWrong = line.reduce((sum, node) => sum + (node.srs?.wrongAnswers || 0), 0);
  const measuredTotal = measuredCorrect + measuredWrong;
  const successRate = measuredTotal > 0
    ? Math.round((measuredCorrect / measuredTotal) * 100)
    : null;

  return {
    id: lastNode.id,
    name: openingName,
    eco: ecoCode,
    rootOpening,
    movesText,
    lastReviewed,
    reviewsCount: totalReviews,
    successRate,
    measuredAnswersCount: measuredTotal,
    isDue,
    status,
    length: line.length,
  };
}

/**
 * Filters repertoire lines based on Spaced Repetition / user criteria.
 */
export function filterRepertoireLines(
  lines: RepertoireNode[][],
  filter: DrillFilterType
): RepertoireNode[][] {
  const now = Date.now();
  const threeDaysAgo = now - 3 * 24 * 60 * 60 * 1000;

  switch (filter) {
    case 'due':
      // Due today or not yet studied
      return lines.filter(line => {
        const meta = getLineMetadata(line);
        return meta.isDue || meta.lastReviewed === null;
      });

    case 'weak':
      // Success rate < 70% or in learning status
      return lines.filter(line => {
        const meta = getLineMetadata(line);
        return meta.status === 'learning' || (meta.successRate !== null && meta.successRate < 70);
      });

    case 'stale':
      // Not reviewed in last 3 days
      return lines.filter(line => {
        const meta = getLineMetadata(line);
        return meta.lastReviewed === null || meta.lastReviewed <= threeDaysAgo;
      });

    case 'all':
    default:
      return lines;
  }
}
