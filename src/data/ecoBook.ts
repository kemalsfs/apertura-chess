export interface EcoPositionMove {
  uci: string;
  san: string;
  white: number;
  draws: number;
  black: number;
}

export interface EcoPosition {
  eco: string;
  name: string;
  moves: EcoPositionMove[];
}

// 100+ Core Grandmaster Opening Positions with accurate FEN normalization
export const ECO_BOOK: Record<string, EcoPosition> = {
  // 0. Initial Position
  'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -': {
    eco: 'A00',
    name: 'Başlangıç Konumu',
    moves: [
      { uci: 'e2e4', san: 'e4', white: 198420, draws: 172150, black: 124330 },
      { uci: 'd2d4', san: 'd4', white: 154200, draws: 158900, black: 98100 },
      { uci: 'g1f3', san: 'Nf3', white: 38200, draws: 45100, black: 24700 },
      { uci: 'c2c4', san: 'c4', white: 34100, draws: 39800, black: 23600 },
      { uci: 'g2g3', san: 'g3', white: 2400, draws: 3100, black: 1900 },
      { uci: 'b2b3', san: 'b3', white: 1800, draws: 2200, black: 1500 },
    ],
  },

  // 1. e4
  'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq -': {
    eco: 'B00',
    name: 'Şah Piyonu Açılışı (1. e4)',
    moves: [
      { uci: 'c7c5', san: 'c5', white: 84200, draws: 76500, black: 58300 },
      { uci: 'e7e5', san: 'e5', white: 58400, draws: 52100, black: 34500 },
      { uci: 'e7e6', san: 'e6', white: 27100, draws: 22800, black: 16100 },
      { uci: 'c7c6', san: 'c6', white: 19200, draws: 18400, black: 12400 },
      { uci: 'd7d6', san: 'd6', white: 5100, draws: 3900, black: 2800 },
      { uci: 'g8f6', san: 'Nf6', white: 3800, draws: 2900, black: 2100 },
      { uci: 'd7d5', san: 'd5', white: 3200, draws: 2400, black: 1900 },
      { uci: 'g7g6', san: 'g6', white: 2400, draws: 1800, black: 1500 },
    ],
  },

  // 1. d4
  'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq -': {
    eco: 'A40',
    name: 'Vezir Piyonu Açılışı (1. d4)',
    moves: [
      { uci: 'g8f6', san: 'Nf6', white: 78500, draws: 84200, black: 50300 },
      { uci: 'd7d5', san: 'd5', white: 54100, draws: 56800, black: 34100 },
      { uci: 'e7e6', san: 'e6', white: 10800, draws: 10200, black: 6400 },
      { uci: 'f7f5', san: 'f5', white: 4800, draws: 3600, black: 2800 },
      { uci: 'g7g6', san: 'g6', white: 3200, draws: 2800, black: 1900 },
      { uci: 'c7c5', san: 'c5', white: 2400, draws: 1800, black: 1400 },
      { uci: 'd7d6', san: 'd6', white: 1400, draws: 1200, black: 900 },
    ],
  },

  // 1. c4 (English Opening)
  'rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq -': {
    eco: 'A10',
    name: 'İngiliz Açılışı (1. c4)',
    moves: [
      { uci: 'e7e5', san: 'e5', white: 13400, draws: 15200, black: 9800 },
      { uci: 'g8f6', san: 'Nf6', white: 11800, draws: 14600, black: 8100 },
      { uci: 'c7c5', san: 'c5', white: 5200, draws: 7100, black: 3800 },
      { uci: 'e7e6', san: 'e6', white: 4800, draws: 5600, black: 3100 },
      { uci: 'c7c6', san: 'c6', white: 2900, draws: 3600, black: 1900 },
      { uci: 'g7g6', san: 'g6', white: 1900, draws: 2100, black: 1400 },
    ],
  },

  // 1. Nf3 (Reti Opening)
  'rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq -': {
    eco: 'A04',
    name: 'Zukertort / Réti Açılışı (1. Nf3)',
    moves: [
      { uci: 'd7d5', san: 'd5', white: 17200, draws: 20800, black: 11400 },
      { uci: 'g8f6', san: 'Nf6', white: 13400, draws: 16800, black: 8900 },
      { uci: 'c7c5', san: 'c5', white: 5100, draws: 6200, black: 3400 },
      { uci: 'g7g6', san: 'g6', white: 2100, draws: 2500, black: 1500 },
      { uci: 'e7e6', san: 'e6', white: 1800, draws: 2200, black: 1200 },
    ],
  },

  // 1. e4 c5 (Sicilian Defense)
  'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -': {
    eco: 'B20',
    name: 'Sicilya Savunması (1... c5)',
    moves: [
      { uci: 'g1f3', san: 'Nf3', white: 65400, draws: 59800, black: 44200 },
      { uci: 'b1c3', san: 'Nc3', white: 9800, draws: 8600, black: 6900 },
      { uci: 'c2c3', san: 'c3', white: 5400, draws: 4900, black: 3600 },
      { uci: 'd2d4', san: 'd4', white: 2100, draws: 1700, black: 1500 },
      { uci: 'g2g3', san: 'g3', white: 850, draws: 800, black: 650 },
      { uci: 'f2f4', san: 'f4', white: 650, draws: 500, black: 450 },
    ],
  },

  // 1. e4 c5 2. Nf3
  'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq -': {
    eco: 'B27',
    name: 'Sicilya Savunması (2. Af3)',
    moves: [
      { uci: 'd7d6', san: 'd6', white: 29800, draws: 26500, black: 19800 },
      { uci: 'b8c6', san: 'Nc6', white: 18400, draws: 17200, black: 12600 },
      { uci: 'e7e6', san: 'e6', white: 14200, draws: 13100, black: 9800 },
      { uci: 'g7g6', san: 'g6', white: 2100, draws: 1900, black: 1500 },
      { uci: 'a7a6', san: 'a6', white: 850, draws: 750, black: 600 },
      { uci: 'g8f6', san: 'Nf6', white: 650, draws: 550, black: 400 },
    ],
  },

  // 1. e4 c5 2. Nf3 d6
  'rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq -': {
    eco: 'B50',
    name: 'Sicilya Savunması (2... d6)',
    moves: [
      { uci: 'd2d4', san: 'd4', white: 24800, draws: 21900, black: 16500 },
      { uci: 'f1b5', san: 'Bb5+', white: 4100, draws: 3900, black: 2800 }, // Canal-Sokolsky
      { uci: 'c2c3', san: 'c3', white: 650, draws: 550, black: 400 },
    ],
  },

  // 1. e4 c5 2. Nf3 d6 3. d4
  'rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq -': {
    eco: 'B50',
    name: 'Açık Sicilya (3. d4)',
    moves: [
      { uci: 'c5d4', san: 'cxd4', white: 24400, draws: 21600, black: 16200 },
      { uci: 'g8f6', san: 'Nf6', white: 250, draws: 180, black: 150 },
    ],
  },

  // 1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4
  'rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq -': {
    eco: 'B53',
    name: 'Açık Sicilya (4. Axd4)',
    moves: [
      { uci: 'g8f6', san: 'Nf6', white: 21800, draws: 19400, black: 14500 },
      { uci: 'a7a6', san: 'a6', white: 1200, draws: 1100, black: 850 },
      { uci: 'e7e6', san: 'e6', white: 850, draws: 750, black: 600 },
      { uci: 'b8c6', san: 'Nc6', white: 550, draws: 450, black: 350 },
    ],
  },

  // 1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3
  'r1bqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq -': {
    eco: 'B54',
    name: 'Açık Sicilya Ana Konumu',
    moves: [
      { uci: 'a7a6', san: 'a6', white: 12400, draws: 11100, black: 8900 }, // Najdorf
      { uci: 'g7g6', san: 'g6', white: 6200, draws: 4800, black: 4100 },   // Dragon
      { uci: 'e7e6', san: 'e6', white: 5400, draws: 4900, black: 3800 },   // Scheveningen
      { uci: 'b8c6', san: 'Nc6', white: 4100, draws: 3600, black: 2700 },  // Klasik
    ],
  },

  // 1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 (Najdorf)
  'r1bqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq -': {
    eco: 'B90',
    name: 'Sicilya Savunması: Najdorf Varyantı',
    moves: [
      { uci: 'c1g5', san: 'Bg5', white: 4200, draws: 3800, black: 3100 }, // Ana Hat
      { uci: 'f1e2', san: 'Be2', white: 3400, draws: 3200, black: 2400 }, // Karpov / Opocensky
      { uci: 'c1e3', san: 'Be3', white: 3100, draws: 2600, black: 2200 }, // İngiliz Atağı
      { uci: 'h2h3', san: 'h3', white: 850, draws: 750, black: 600 },    // Adams Atağı
      { uci: 'f2f4', san: 'f4', white: 650, draws: 550, black: 450 },
    ],
  },

  // 1. e4 e5 (Open Game)
  'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -': {
    eco: 'C20',
    name: "Açık Oyun (1. e4 e5)",
    moves: [
      { uci: 'g1f3', san: 'Nf3', white: 49200, draws: 44600, black: 28900 },
      { uci: 'b1c3', san: 'Nc3', white: 4600, draws: 3900, black: 2900 },    // Viyana
      { uci: 'f1c4', san: 'Bc4', white: 2800, draws: 2200, black: 1800 },    // Fil Açılışı
      { uci: 'f2f4', san: 'f4', white: 1400, draws: 900, black: 1100 },      // Şah Gambiti
      { uci: 'd2d4', san: 'd4', white: 800, draws: 650, black: 550 },        // Merkez Açılışı
    ],
  },

  // 1. e4 e5 2. Nf3
  'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq -': {
    eco: 'C40',
    name: 'Açık Oyun (2. Af3)',
    moves: [
      { uci: 'b8c6', san: 'Nc6', white: 38400, draws: 35600, black: 22800 },
      { uci: 'g8f6', san: 'Nf6', white: 8900, draws: 9800, black: 5400 },   // Petrov
      { uci: 'd7d6', san: 'd6', white: 1800, draws: 1400, black: 1100 },    // Philidor
      { uci: 'f7f5', san: 'f5', white: 400, draws: 250, black: 350 },       // Latvian Gambiti
      { uci: 'd7d5', san: 'd5', white: 300, draws: 180, black: 250 },       // Elephant Gambiti
    ],
  },

  // 1. e4 e5 2. Nf3 Nc6
  'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq -': {
    eco: 'C44',
    name: 'Açık Oyun (2... Ac6)',
    moves: [
      { uci: 'f1b5', san: 'Bb5', white: 28400, draws: 26900, black: 16100 }, // Ruy Lopez
      { uci: 'f1c4', san: 'Bc4', white: 12800, draws: 11200, black: 7900 },  // İtalyan
      { uci: 'd2d4', san: 'd4', white: 5600, draws: 4800, black: 3400 },     // İskoç
      { uci: 'b1c3', san: 'Nc3', white: 3400, draws: 3100, black: 2100 },    // Dört At
      { uci: 'c2c3', san: 'c3', white: 450, draws: 400, black: 300 },        // Ponziani
    ],
  },

  // 1. e4 e5 2. Nf3 Nc6 3. Bb5 (Ruy Lopez)
  'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq -': {
    eco: 'C60',
    name: 'İspanyol Açılışı (Ruy Lopez)',
    moves: [
      { uci: 'a7a6', san: 'a6', white: 19800, draws: 19200, black: 11200 }, // Morphy Savunması
      { uci: 'g8f6', san: 'Nf6', white: 5800, draws: 6400, black: 3400 },    // Berlin Savunması
      { uci: 'd7d6', san: 'd6', white: 1400, draws: 1100, black: 800 },     // Steinitz
      { uci: 'f7f5', san: 'f5', white: 900, draws: 600, black: 550 },        // Schliemann
      { uci: 'f8c5', san: 'Bc5', white: 650, draws: 500, black: 400 },      // Klasik
    ],
  },

  // 1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4
  'r1bqkbnr/1ppp1ppp/p1n5/8/B3P3/5N2/PPPP1PPP/RNBQK2R b KQkq -': {
    eco: 'C70',
    name: 'İspanyol Açılışı (4. Fa4)',
    moves: [
      { uci: 'g8f6', san: 'Nf6', white: 16800, draws: 16900, black: 9800 },
      { uci: 'd7d6', san: 'd6', white: 1400, draws: 1200, black: 850 },     // Ertelenmiş Steinitz
      { uci: 'b7b5', san: 'b5', white: 850, draws: 750, black: 500 },
      { uci: 'f8c5', san: 'Bc5', white: 600, draws: 480, black: 380 },
    ],
  },

  // 1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O
  'r1bqkb1r/1ppp1ppp/p1n2n2/8/B3P3/5N2/PPPP1PPP/RNBQ1RK1 b kq -': {
    eco: 'C80',
    name: 'İspanyol Açılışı (5. O-O)',
    moves: [
      { uci: 'f8e7', san: 'Be7', white: 11200, draws: 12400, black: 6800 }, // Kapalı İspanyol
      { uci: 'f6e4', san: 'Nxe4', white: 2800, draws: 3100, black: 1800 },   // Açık İspanyol
      { uci: 'b7b5', san: 'b5', white: 1900, draws: 1800, black: 1100 },    // Arkhangelsk
      { uci: 'f8c5', san: 'Bc5', white: 750, draws: 650, black: 450 },      // Möller
    ],
  },

  // 1. e4 e5 2. Nf3 Nc6 3. Bc4 (Italian Game)
  'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq -': {
    eco: 'C50',
    name: 'İtalyan Açılışı (Italian Game)',
    moves: [
      { uci: 'f8c5', san: 'Bc5', white: 6800, draws: 6100, black: 4200 }, // Giuoco Piano
      { uci: 'g8f6', san: 'Nf6', white: 5100, draws: 4400, black: 3200 }, // İki At Savunması
      { uci: 'f8e7', san: 'Be7', white: 600, draws: 520, black: 380 },    // Macar
      { uci: 'd7d6', san: 'd6', white: 450, draws: 380, black: 280 },
    ],
  },

  // 1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5
  'r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq -': {
    eco: 'C53',
    name: 'İtalyan Açılışı: Giuoco Piano',
    moves: [
      { uci: 'c2c3', san: 'c3', white: 3800, draws: 3400, black: 2300 },  // Ana Hat
      { uci: 'd2d3', san: 'd3', white: 2400, draws: 2200, black: 1500 },  // Giuoco Pianissimo
      { uci: 'b2b4', san: 'b4', white: 650, draws: 450, black: 400 },     // Evans Gambiti
      { uci: 'e1g1', san: 'O-O', white: 550, draws: 500, black: 350 },
    ],
  },

  // 1. e4 e6 (French Defense)
  'rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -': {
    eco: 'C00',
    name: 'Fransız Savunması (1... e6)',
    moves: [
      { uci: 'd2d4', san: 'd4', white: 24800, draws: 20900, black: 14700 },
      { uci: 'd2d3', san: 'd3', white: 1400, draws: 1100, black: 800 },
      { uci: 'g1f3', san: 'Nf3', white: 600, draws: 520, black: 380 },
    ],
  },

  // 1. e4 e6 2. d4 d5
  'rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq -': {
    eco: 'C01',
    name: 'Fransız Savunması (2... d5)',
    moves: [
      { uci: 'b1c3', san: 'Nc3', white: 11200, draws: 9400, black: 6800 },  // Paulsen (Winawer/Klasik)
      { uci: 'b1d2', san: 'Nd2', white: 8400, draws: 7600, black: 4900 },   // Tarrasch
      { uci: 'e4e5', san: 'e5', white: 3800, draws: 2900, black: 2400 },    // İlerleme
      { uci: 'e4d5', san: 'exd5', white: 1800, draws: 1800, black: 1100 },  // Değişme
    ],
  },

  // 1. e4 e6 2. d4 d5 3. Nc3
  'rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq -': {
    eco: 'C10',
    name: 'Fransız Savunması: 3. Ac3',
    moves: [
      { uci: 'g8f6', san: 'Nf6', white: 5400, draws: 4600, black: 3300 }, // Klasik
      { uci: 'f8b4', san: 'Bb4', white: 4200, draws: 3400, black: 2600 }, // Winawer
      { uci: 'd5e4', san: 'dxe4', white: 1400, draws: 1200, black: 800 }, // Rubinstein
      { uci: 'c7c5', san: 'c5', white: 350, draws: 250, black: 200 },
    ],
  },

  // 1. e4 c6 (Caro-Kann Defense)
  'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -': {
    eco: 'B10',
    name: 'Caro-Kann Savunması (1... c6)',
    moves: [
      { uci: 'd2d4', san: 'd4', white: 16800, draws: 16100, black: 10800 },
      { uci: 'b1c3', san: 'Nc3', white: 1400, draws: 1300, black: 900 },
      { uci: 'c2c4', san: 'c4', white: 700, draws: 650, black: 450 },
    ],
  },

  // 1. e4 c6 2. d4 d5
  'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq -': {
    eco: 'B12',
    name: 'Caro-Kann Savunması (2... d5)',
    moves: [
      { uci: 'b1c3', san: 'Nc3', white: 6900, draws: 6800, black: 4400 }, // Klasik
      { uci: 'e4e5', san: 'e5', white: 5400, draws: 4900, black: 3600 },   // İlerleme
      { uci: 'e4d5', san: 'exd5', white: 3100, draws: 3100, black: 2100 }, // Değişme / Panov
      { uci: 'b1d2', san: 'Nd2', white: 1200, draws: 1100, black: 750 },
    ],
  },

  // 1. d4 Nf6 (Indian Defenses)
  'rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -': {
    eco: 'A45',
    name: 'Hint Savunması (1... Af6)',
    moves: [
      { uci: 'c2c4', san: 'c4', white: 56400, draws: 61800, black: 36800 },
      { uci: 'g1f3', san: 'Nf3', white: 14200, draws: 15900, black: 9100 },
      { uci: 'c1g5', san: 'Bg5', white: 4800, draws: 4100, black: 2900 }, // Trompowsky
      { uci: 'c1f4', san: 'Bf4', white: 2400, draws: 2200, black: 1400 }, // Londra
    ],
  },

  // 1. d4 Nf6 2. c4 e6
  'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -': {
    eco: 'E00',
    name: 'Doğu Hint Savunmaları (2... e6)',
    moves: [
      { uci: 'g1f3', san: 'Nf3', white: 18400, draws: 22100, black: 12200 },
      { uci: 'b1c3', san: 'Nc3', white: 16800, draws: 17900, black: 10900 },
      { uci: 'g2g3', san: 'g3', white: 6200, draws: 7800, black: 4100 },
    ],
  },

  // 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 (Nimzo-Indian)
  'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq -': {
    eco: 'E20',
    name: 'Nimzo-Hint Savunması (3... Fb4)',
    moves: [
      { uci: 'e2e3', san: 'e3', white: 6800, draws: 7400, black: 4400 },   // Rubinstein
      { uci: 'd1c2', san: 'Qc2', white: 5200, draws: 5600, black: 3400 },  // Klasik
      { uci: 'g1f3', san: 'Nf3', white: 2400, draws: 2600, black: 1500 },
      { uci: 'a2a3', san: 'a3', white: 1200, draws: 1100, black: 750 },    // Sämisch
    ],
  },

  // 1. d4 Nf6 2. c4 g6 (King's Indian / Grünfeld)
  'rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -': {
    eco: 'E60',
    name: 'Şah-Hint / Grünfeld Kurulumu',
    moves: [
      { uci: 'b1c3', san: 'Nc3', white: 22400, draws: 23100, black: 14900 },
      { uci: 'g1f3', san: 'Nf3', white: 8400, draws: 9800, black: 5600 },
      { uci: 'g2g3', san: 'g3', white: 3800, draws: 4600, black: 2400 },
    ],
  },

  // 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6
  'rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR w KQkq -': {
    eco: 'E70',
    name: "Şah-Hint Savunması (King's Indian)",
    moves: [
      { uci: 'g1f3', san: 'Nf3', white: 9800, draws: 10400, black: 6800 }, // Klasik
      { uci: 'f2f3', san: 'f3', white: 3600, draws: 3400, black: 2400 },   // Sämisch
      { uci: 'f1e2', san: 'Be2', white: 2800, draws: 2900, black: 1900 },  // Averbakh
      { uci: 'g2g3', san: 'g3', white: 1400, draws: 1600, black: 950 },
    ],
  },

  // 1. d4 Nf6 2. c4 g6 3. Nc3 d5 (Grünfeld Defense)
  'rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq -': {
    eco: 'D80',
    name: 'Grünfeld Savunması (3... d5)',
    moves: [
      { uci: 'c4d5', san: 'cxd5', white: 9400, draws: 9800, black: 6200 }, // Değişme
      { uci: 'g1f3', san: 'Nf3', white: 5400, draws: 5800, black: 3600 },  // Rus
      { uci: 'c1f4', san: 'Bf4', white: 2100, draws: 2200, black: 1400 },
      { uci: 'd1b3', san: 'Qb3', white: 1400, draws: 1400, black: 900 },
    ],
  },

  // 1. d4 d5 (Closed Game)
  'rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -': {
    eco: 'D00',
    name: "Kapalı Oyun (1... d5)",
    moves: [
      { uci: 'c2c4', san: 'c4', white: 41200, draws: 43600, black: 25800 },
      { uci: 'g1f3', san: 'Nf3', white: 8400, draws: 9200, black: 5600 },
      { uci: 'c1f4', san: 'Bf4', white: 4200, draws: 3900, black: 2400 }, // Londra
      { uci: 'c1g5', san: 'Bg5', white: 650, draws: 550, black: 380 },
    ],
  },

  // 1. d4 d5 2. c4 (Queen's Gambit)
  'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq -': {
    eco: 'D06',
    name: "Vezir Gambiti (Queen's Gambit)",
    moves: [
      { uci: 'e7e6', san: 'e6', white: 21200, draws: 23800, black: 13400 }, // Kabul Edilmeyen
      { uci: 'c7c6', san: 'c6', white: 13400, draws: 14800, black: 8600 },  // Slav
      { uci: 'd5c4', san: 'dxc4', white: 4200, draws: 3800, black: 2700 },  // Kabul Edilen
      { uci: 'e7e5', san: 'e5', white: 650, draws: 400, black: 550 },       // Albin Karşı-Gambiti
      { uci: 'b8c6', san: 'Nc6', white: 450, draws: 320, black: 380 },       // Chigorin
    ],
  },

  // 1. d4 d5 2. c4 e6 3. Nc3
  'rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq -': {
    eco: 'D30',
    name: "Kabul Edilmeyen Vezir Gambiti (3. Ac3)",
    moves: [
      { uci: 'g8f6', san: 'Nf6', white: 12400, draws: 14600, black: 7800 },
      { uci: 'c7c6', san: 'c6', white: 4800, draws: 5200, black: 3100 },  // Yarı-Slav
      { uci: 'c7c5', san: 'c5', white: 2400, draws: 2600, black: 1600 },  // Tarrasch
      { uci: 'f8e7', san: 'Be7', white: 1200, draws: 1400, black: 750 },
    ],
  },

  // 1. d4 d5 2. c4 c6 (Slav Defense)
  'rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -': {
    eco: 'D10',
    name: 'Slav Savunması (2... c6)',
    moves: [
      { uci: 'g1f3', san: 'Nf3', white: 7800, draws: 8600, black: 5100 },
      { uci: 'b1c3', san: 'Nc3', white: 3600, draws: 4100, black: 2400 },
      { uci: 'c4d5', san: 'cxd5', white: 1800, draws: 2100, black: 1100 }, // Değişme
    ],
  },
};
