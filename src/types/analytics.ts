export type GamePlatform = 'chesscom' | 'lichess' | 'pgn_file';
export type GameResult = 'win' | 'loss' | 'draw';

export interface RepertoireMatchResult {
  matchedCount: number;
  whoDeviated: 'user' | 'opponent' | 'none';
  deviationStepIndex?: number;
  deviationSan?: string;
  expectedSan?: string;
}

export interface ImportedGame {
  id: string; // unique ID
  platform: GamePlatform;
  userColor: 'white' | 'black';
  opponentUsername: string;
  opponentRating?: number;
  userRating?: number;
  result: GameResult;
  termination: string;
  eco?: string;
  openingName?: string;
  moves: string[]; // List of SAN moves (e.g. ["e4", "e5", "Nf3", "Nc6", ...])
  pgn: string;
  date: number; // timestamp
  url?: string;
  matchResult?: RepertoireMatchResult;
}

export interface OpeningPerformanceStat {
  eco: string;
  name: string;
  color: 'white' | 'black';
  totalGames: number;
  wins: number;
  draws: number;
  losses: number;
  winRate: number; // percentage (0 - 100)
  userDeviations: number;
  opponentDeviations: number;
}

export interface OverallAnalytics {
  totalGames: number;
  wins: number;
  draws: number;
  losses: number;
  winRate: number;
  whiteGames: number;
  whiteWinRate: number;
  blackGames: number;
  blackWinRate: number;
  bestOpening?: OpeningPerformanceStat;
  weakestOpening?: OpeningPerformanceStat;
}