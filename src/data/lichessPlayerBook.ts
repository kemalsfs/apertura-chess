import type { EcoPosition } from '../types/explorer';

export const LICHESS_PLAYER_BOOK: Record<string, EcoPosition> = {
  // Starting position
  "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -": {
    eco: "A00",
    name: "Başlangıç Konumu (Lichess İnsan Maçları)",
    moves: [
      { uci: "e2e4", san: "e4", white: 168400000, draws: 17200000, black: 154400000 },
      { uci: "d2d4", san: "d4", white: 78200000, draws: 9400000, black: 68400000 },
      { uci: "g1f3", san: "Nf3", white: 12400000, draws: 1600000, black: 10800000 },
      { uci: "c2c4", san: "c4", white: 11200000, draws: 1400000, black: 9800000 },
      { uci: "b2b3", san: "b3", white: 2800000, draws: 260000, black: 2540000 },
      { uci: "g2g3", san: "g3", white: 1800000, draws: 180000, black: 1620000 },
      { uci: "f2f4", san: "f4", white: 1600000, draws: 140000, black: 1560000 }
    ]
  },

  // 1. e4
  "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq -": {
    eco: "B00",
    name: "Şah Piyonu Açılışı (Lichess İnsan Maçları)",
    moves: [
      { uci: "e7e5", san: "e5", white: 72400000, draws: 7800000, black: 69800000 },
      { uci: "c7c5", san: "c5", white: 48600000, draws: 5400000, black: 46000000 },
      { uci: "e7e6", san: "e6", white: 16800000, draws: 1900000, black: 15300000 },
      { uci: "c7c6", san: "c6", white: 14200000, draws: 1700000, black: 13100000 },
      { uci: "d7d5", san: "d5", white: 9800000, draws: 800000, black: 8400000 },
      { uci: "d7d6", san: "d6", white: 6200000, draws: 600000, black: 5600000 },
      { uci: "g8f6", san: "Nf6", white: 3100000, draws: 280000, black: 2620000 },
      { uci: "g7g6", san: "g6", white: 2800000, draws: 240000, black: 2460000 }
    ]
  },

  // 1. d4
  "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq -": {
    eco: "A40",
    name: "Vezir Piyonu Açılışı (Lichess İnsan Maçları)",
    moves: [
      { uci: "d7d5", san: "d5", white: 44200000, draws: 5600000, black: 38200000 },
      { uci: "g8f6", san: "Nf6", white: 23400000, draws: 3100000, black: 20500000 },
      { uci: "e7e6", san: "e6", white: 5800000, draws: 720000, black: 5080000 },
      { uci: "f7f5", san: "f5", white: 4100000, draws: 380000, black: 3720000 },
      { uci: "c7c5", san: "c5", white: 3400000, draws: 320000, black: 3080000 },
      { uci: "g7g6", san: "g6", white: 2600000, draws: 280000, black: 2320000 }
    ]
  },

  // 1. e4 e5
  "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    eco: "C20",
    name: "Açık Oyun (Lichess İnsan Maçları)",
    moves: [
      { uci: "g1f3", san: "Nf3", white: 44800000, draws: 4900000, black: 41300000 },
      { uci: "f1c4", san: "Bc4", white: 11400000, draws: 980000, black: 9620000 },
      { uci: "b1c3", san: "Nc3", white: 5800000, draws: 520000, black: 4880000 },
      { uci: "d1h5", san: "Qh5", white: 3200000, draws: 180000, black: 2820000 },
      { uci: "f2f4", san: "f4", white: 2800000, draws: 220000, black: 2580000 },
      { uci: "d2d4", san: "d4", white: 2100000, draws: 160000, black: 1840000 }
    ]
  },

  // 1. e4 e5 2. Bc4
  "rnbqkbnr/pppp1ppp/8/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR b KQkq -": {
    eco: "C23",
    name: "Fil Açılışı (Lichess İnsan Maçları)",
    moves: [
      { uci: "g8f6", san: "Nf6", white: 4100000, draws: 360000, black: 3740000 },
      { uci: "f8c5", san: "Bc5", white: 3600000, draws: 290000, black: 3310000 },
      { uci: "b8c6", san: "Nc6", white: 2400000, draws: 190000, black: 2210000 },
      { uci: "d7d6", san: "d6", white: 620000, draws: 48000, black: 552000 },
      { uci: "c7c6", san: "c6", white: 380000, draws: 32000, black: 348000 }
    ]
  },

  // 1. e4 e5 2. Nf3 Nc6
  "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq -": {
    eco: "C44",
    name: "Şah Atı Açılışı (Lichess İnsan Maçları)",
    moves: [
      { uci: "f1c4", san: "Bc4", white: 24200000, draws: 2100000, black: 21700000 }, // İtalyan: Human #1 (48M games)
      { uci: "f1b5", san: "Bb5", white: 11400000, draws: 1400000, black: 10200000 }, // İspanyol (23M games)
      { uci: "d2d4", san: "d4", white: 6800000, draws: 560000, black: 6040000 },      // İskoç (13.4M games)
      { uci: "b1c3", san: "Nc3", white: 3600000, draws: 320000, black: 3280000 },     // Dört At (7.2M games)
      { uci: "c2c3", san: "c3", white: 840000, draws: 68000, black: 792000 }         // Ponziani
    ]
  },

  // 1. e4 e5 2. Nf3 Nc6 3. Bc4 (İtalyan - Human Online)
  "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq -": {
    eco: "C50",
    name: "İtalyan Açılışı (Lichess İnsan Maçları)",
    moves: [
      { uci: "f8c5", san: "Bc5", white: 11200000, draws: 980000, black: 10020000 }, // Giuoco Piano (22.2M games)
      { uci: "g8f6", san: "Nf6", white: 9400000, draws: 820000, black: 8380000 },   // İki At Savunması (18.6M games)
      { uci: "d7d6", san: "d6", white: 1800000, draws: 140000, black: 1560000 },   // Yarı-İtalyan
      { uci: "f8e7", san: "Be7", white: 980000, draws: 86000, black: 834000 }      // Macar Savunması
    ]
  },

  // 1. d4 d5
  "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -": {
    eco: "D00",
    name: "Vezir Piyonu Oyunu (Lichess İnsan Maçları)",
    moves: [
      { uci: "c1f4", san: "Bf4", white: 18400000, draws: 2400000, black: 15200000 }, // London #1
      { uci: "g1f3", san: "Nf3", white: 14200000, draws: 1900000, black: 11900000 },
      { uci: "c2c4", san: "c4", white: 13800000, draws: 1800000, black: 11400000 },
      { uci: "b1c3", san: "Nc3", white: 2800000, draws: 280000, black: 2320000 },
      { uci: "e2e3", san: "e3", white: 2100000, draws: 260000, black: 1740000 },
      { uci: "c1g5", san: "Bg5", white: 840000, draws: 90000, black: 670000 }
    ]
  },

  // 1. d4 d5 2. c4 (Vezir Gambiti - Human Online)
  "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq -": {
    eco: "D06",
    name: "Vezir Gambiti (Lichess İnsan Maçları)",
    moves: [
      { uci: "e7e6", san: "e6", white: 5800000, draws: 820000, black: 4780000 },  // QGD (11.4M games)
      { uci: "c7c6", san: "c6", white: 4100000, draws: 560000, black: 3340000 },  // Slav (8.0M games)
      { uci: "d5c4", san: "dxc4", white: 2400000, draws: 280000, black: 2120000 }, // QGA (4.8M games)
      { uci: "b8c6", san: "Nc6", white: 620000, draws: 68000, black: 512000 },    // Chigorin
      { uci: "e7e5", san: "e5", white: 420000, draws: 36000, black: 384000 }      // Albin
    ]
  },

  // 1. e4 c5
  "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    eco: "B20",
    name: "Sicilya Savunması (Lichess İnsan Maçları)",
    moves: [
      { uci: "g1f3", san: "Nf3", white: 28400000, draws: 2800000, black: 24800000 },
      { uci: "b1c3", san: "Nc3", white: 8400000, draws: 760000, black: 7040000 },
      { uci: "c2c3", san: "c3", white: 6200000, draws: 620000, black: 5180000 },
      { uci: "f1c4", san: "Bc4", white: 3800000, draws: 260000, black: 3140000 },
      { uci: "d2d4", san: "d4", white: 2600000, draws: 180000, black: 2120000 }
    ]
  },

  // 1. e4 c5 2. Nf3
  "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq -": {
    eco: "B27",
    name: "Sicilya Savunması: 2. Af3 (Lichess İnsan Maçları)",
    moves: [
      { uci: "d7d6", san: "d6", white: 14200000, draws: 1300000, black: 12500000 }, // 28M games
      { uci: "b8c6", san: "Nc6", white: 9100000, draws: 860000, black: 8040000 },    // 18M games
      { uci: "e7e6", san: "e6", white: 6200000, draws: 580000, black: 5420000 }     // 12.2M games
    ]
  }
};
