export interface EcoEntry {
  eco: string;
  name: string;
  moves: { uci: string; san: string; frequency?: number }[];
}

// Offline fallback opening book for popular lines and standard ECO lookup
export const ECO_BOOK: Record<string, EcoEntry> = {
  // Start position
  'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -': {
    eco: 'A00',
    name: 'Başlangıç Konumu',
    moves: [
      { uci: 'e2e4', san: 'e4', frequency: 48 },
      { uci: 'd2d4', san: 'd4', frequency: 36 },
      { uci: 'c2c4', san: 'c4', frequency: 9 },
      { uci: 'g1f3', san: 'Nf3', frequency: 5 },
      { uci: 'g2g3', san: 'g3', frequency: 1 },
      { uci: 'b2b3', san: 'b3', frequency: 1 },
    ],
  },
  // 1. e4
  'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq -': {
    eco: 'B00',
    name: 'Şah Piyonu Açılışı',
    moves: [
      { uci: 'c7c5', san: 'c5', frequency: 45 },
      { uci: 'e7e5', san: 'e5', frequency: 28 },
      { uci: 'e7e6', san: 'e6', frequency: 14 },
      { uci: 'c7c6', san: 'c6', frequency: 9 },
      { uci: 'd7d6', san: 'd6', frequency: 2 },
      { uci: 'g8f6', san: 'Nf6', frequency: 1 },
      { uci: 'g7g6', san: 'g6', frequency: 1 },
    ],
  },
  // 1. d4
  'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq -': {
    eco: 'A40',
    name: 'Vezir Piyonu Açılışı',
    moves: [
      { uci: 'g8f6', san: 'Nf6', frequency: 52 },
      { uci: 'd7d5', san: 'd5', frequency: 34 },
      { uci: 'e7e6', san: 'e6', frequency: 7 },
      { uci: 'f7f5', san: 'f5', frequency: 3 },
      { uci: 'g7g6', san: 'g6', frequency: 2 },
      { uci: 'c7c5', san: 'c5', frequency: 2 },
    ],
  },
  // 1. c4 (English Opening)
  'rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq -': {
    eco: 'A10',
    name: 'İngiliz Açılışı (English Opening)',
    moves: [
      { uci: 'e7e5', san: 'e5', frequency: 38 },
      { uci: 'g8f6', san: 'Nf6', frequency: 32 },
      { uci: 'c7c5', san: 'c5', frequency: 16 },
      { uci: 'e7e6', san: 'e6', frequency: 8 },
    ],
  },
  // 1. Nf3 (Reti Opening)
  'rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq -': {
    eco: 'A04',
    name: 'Zukertort / Réti Açılışı',
    moves: [
      { uci: 'd7d5', san: 'd5', frequency: 45 },
      { uci: 'g8f6', san: 'Nf6', frequency: 35 },
      { uci: 'c7c5', san: 'c5', frequency: 12 },
    ],
  },
  // 1. e4 c5 (Sicilian Defense)
  'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -': {
    eco: 'B20',
    name: 'Sicilya Savunması (Sicilian Defense)',
    moves: [
      { uci: 'g1f3', san: 'Nf3', frequency: 70 },
      { uci: 'b1c3', san: 'Nc3', frequency: 18 },
      { uci: 'c2c3', san: 'c3', frequency: 6 },
      { uci: 'd2d4', san: 'd4', frequency: 4 },
    ],
  },
  // 1. e4 e5 (Open Game)
  'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -': {
    eco: 'C20',
    name: "Açık Oyun (King's Pawn Game)",
    moves: [
      { uci: 'g1f3', san: 'Nf3', frequency: 82 },
      { uci: 'b1c3', san: 'Nc3', frequency: 9 },
      { uci: 'f1c4', san: 'Bc4', frequency: 6 },
      { uci: 'f2f4', san: 'f4', frequency: 3 },
    ],
  },
  // 1. e4 e6 (French Defense)
  'rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -': {
    eco: 'C00',
    name: 'Fransız Savunması (French Defense)',
    moves: [
      { uci: 'd2d4', san: 'd4', frequency: 88 },
      { uci: 'd2d3', san: 'd3', frequency: 6 },
      { uci: 'g1f3', san: 'Nf3', frequency: 4 },
    ],
  },
  // 1. e4 c6 (Caro-Kann Defense)
  'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -': {
    eco: 'B10',
    name: 'Caro-Kann Savunması',
    moves: [
      { uci: 'd2d4', san: 'd4', frequency: 84 },
      { uci: 'b1c3', san: 'Nc3', frequency: 9 },
      { uci: 'g1f3', san: 'Nf3', frequency: 5 },
    ],
  },
  // 1. d4 Nf6 (Indian Defenses)
  'rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -': {
    eco: 'A45',
    name: 'Hint Savunması (Indian Defense)',
    moves: [
      { uci: 'c2c4', san: 'c4', frequency: 62 },
      { uci: 'g1f3', san: 'Nf3', frequency: 24 },
      { uci: 'c1g5', san: 'Bg5', frequency: 8 },
      { uci: 'c1f4', san: 'Bf4', frequency: 4 },
    ],
  },
  // 1. d4 d5 (Closed Game)
  'rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -': {
    eco: 'D00',
    name: "Kapalı Oyun (Queen's Pawn Game)",
    moves: [
      { uci: 'c2c4', san: 'c4', frequency: 68 },
      { uci: 'g1f3', san: 'Nf3', frequency: 18 },
      { uci: 'c1f4', san: 'Bf4', frequency: 10 },
    ],
  },
  // 1. d4 d5 2. c4 (Queen's Gambit)
  'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq -': {
    eco: 'D06',
    name: "Vezir Gambiti (Queen's Gambit)",
    moves: [
      { uci: 'e7e6', san: 'e6', frequency: 48 },
      { uci: 'c7c6', san: 'c6', frequency: 32 },
      { uci: 'd5c4', san: 'dxc4', frequency: 16 },
    ],
  },
  // 1. e4 e5 2. Nf3 Nc6 3. Bb5 (Ruy Lopez)
  'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq -': {
    eco: 'C60',
    name: 'İspanyol Açılışı (Ruy Lopez)',
    moves: [
      { uci: 'a7a6', san: 'a6', frequency: 68 },
      { uci: 'g8f6', san: 'Nf6', frequency: 22 },
      { uci: 'd7d6', san: 'd6', frequency: 5 },
      { uci: 'f7f5', san: 'f5', frequency: 3 },
    ],
  },
  // 1. e4 e5 2. Nf3 Nc6 3. Bc4 (Italian Game)
  'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq -': {
    eco: 'C50',
    name: 'İtalyan Açılışı (Italian Game)',
    moves: [
      { uci: 'f8c5', san: 'Bc5', frequency: 54 },
      { uci: 'g8f6', san: 'Nf6', frequency: 40 },
    ],
  },
};
