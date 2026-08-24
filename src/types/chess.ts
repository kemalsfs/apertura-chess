export type RepertoireColor = 'white' | 'black';

export type BrushColor = 'green' | 'red' | 'blue' | 'yellow';

export interface DrawShape {
  orig: string; // e.g. "e2"
  dest?: string; // e.g. "e4" (if arrow)
  brush: BrushColor;
}

export interface SRSData {
  interval: number; // in days
  easeFactor: number; // default 2.5
  streak: number;
  dueDate: number; // timestamp
  lastReviewed: number; // timestamp
  reviewsCount: number;
}

export interface RepertoireNode {
  id: string; // Unique node ID
  repertoireId: string;
  fen: string; // Full FEN
  normalizedFen: string; // FEN without move counters for transposition matching
  san: string; // Standard Algebraic Notation (e.g. "e4", "Nf6", "O-O")
  uci: string; // UCI format (e.g. "e2e4", "g8f6")
  from: string; // "e2"
  to: string; // "e4"
  promotion?: string; // "q", "r", "b", "n"
  turn: 'w' | 'b'; // Side to move AFTER this move is played
  moveNumber: number; // 1, 2, 3...
  parentId: string | null; // Root nodes have null parent
  childrenIds: string[]; // Child node IDs
  comment?: string; // Personal notes, explanations
  arrows?: DrawShape[]; // Visual arrows/circles
  srs?: SRSData; // Spaced repetition metadata
  createdAt: number;
}

export interface Repertoire {
  id: string;
  name: string;
  color: RepertoireColor;
  description?: string;
  createdAt: number;
  updatedAt: number;
  isDefault?: boolean;
}

export interface MoveHistoryItem {
  nodeId: string;
  san: string;
  fen: string;
  turn: 'w' | 'b';
  moveNumber: number;
}