export type ExplorerSource = 'masters' | 'lichess';

export interface ExplorerMove {
  uci: string;
  san: string;
  white: number;
  draws: number;
  black: number;
  averageRating?: number;
  whitePercent: number;
  drawsPercent: number;
  blackPercent: number;
  totalGames: number;
}

export interface OpeningInfo {
  eco: string;
  name: string;
}

export interface ExplorerResult {
  moves: ExplorerMove[];
  opening?: OpeningInfo;
  white: number;
  draws: number;
  black: number;
  totalGames: number;
}

export interface EngineMoveOption {
  uci: string;
  san?: string;
  from: string;
  to: string;
  type: 'cp' | 'mate';
  value: number; // Centipawns or turns to mate (from White perspective)
  depth: number;
  rank: number; // 1, 2, 3
}

export interface EvaluationResult {
  type: 'cp' | 'mate';
  value: number; // centipawns or turns to mate (from White perspective)
  depth: number;
  bestMove?: string;
  topMoves?: EngineMoveOption[]; // Top 3 engine moves
  source: 'cloud' | 'local' | 'none';
  isLoading: boolean;
}

export interface CachedExplorerItem {
  id: string; // `${source}:${normalizedFen}`
  fen: string;
  source: ExplorerSource;
  data: ExplorerResult;
  timestamp: number;
}