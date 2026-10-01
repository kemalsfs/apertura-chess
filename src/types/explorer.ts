export type ExplorerSource = 'masters' | 'lichess';

export interface ExplorerProvenance {
  kind: 'lichess-api' | 'unavailable';
  source: ExplorerSource;
  sourceUrl: string;
  retrievedAt: string | null;
  filters: {
    ratings?: string;
    speeds?: string;
    topGames: number;
  };
  schemaVersion: 1;
}

export interface BundledBookMetadata {
  source: string | null;
  retrievedAt: string | null;
  filters: string | null;
  schemaVersion: number | null;
  statisticsVerified: boolean;
}

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

export interface EcoMove {
  uci: string;
  san: string;
  white: number;
  draws: number;
  black: number;
}

export interface EcoPosition {
  eco: string;
  name: string;
  moves: EcoMove[];
}

export interface OpeningInfo {
  eco: string;
  name: string;
}

export interface ExplorerResult {
  provenance: ExplorerProvenance;
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
