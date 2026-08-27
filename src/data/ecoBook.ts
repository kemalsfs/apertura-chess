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

// Automated Grandmaster Opening Graph with Exact Position Normalization
export const ECO_BOOK: Record<string, EcoPosition> = {
  "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -": {
    "eco": "A00",
    "name": "Başlangıç Konumu",
    "moves": [
      {
        "uci": "e2e4",
        "san": "e4",
        "white": 198420,
        "draws": 172150,
        "black": 124330
      },
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 154200,
        "draws": 158900,
        "black": 98100
      },
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 38200,
        "draws": 45100,
        "black": 24700
      },
      {
        "uci": "c2c4",
        "san": "c4",
        "white": 34100,
        "draws": 39800,
        "black": 23600
      },
      {
        "uci": "g2g3",
        "san": "g3",
        "white": 2400,
        "draws": 3100,
        "black": 1900
      },
      {
        "uci": "b2b3",
        "san": "b3",
        "white": 1800,
        "draws": 2200,
        "black": 1500
      }
    ]
  },
  "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq -": {
    "eco": "B00",
    "name": "Şah Piyonu Açılışı (1. e4)",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 84200,
        "draws": 76500,
        "black": 58300
      },
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 58400,
        "draws": 52100,
        "black": 34500
      },
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 27100,
        "draws": 22800,
        "black": 16100
      },
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 19200,
        "draws": 18400,
        "black": 12400
      },
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 5100,
        "draws": 3900,
        "black": 2800
      },
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 3800,
        "draws": 2900,
        "black": 2100
      },
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 3200,
        "draws": 2400,
        "black": 1900
      },
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 2400,
        "draws": 1800,
        "black": 1500
      }
    ]
  },
  "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    "eco": "B20",
    "name": "Sicilya Savunması (1... c5)",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 65400,
        "draws": 59800,
        "black": 44200
      },
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 9800,
        "draws": 8600,
        "black": 6900
      },
      {
        "uci": "c2c3",
        "san": "c3",
        "white": 5400,
        "draws": 4900,
        "black": 3600
      },
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 2100,
        "draws": 1700,
        "black": 1500
      }
    ]
  },
  "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq -": {
    "eco": "B27",
    "name": "Sicilya Savunması: 2. Af3",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 29800,
        "draws": 26500,
        "black": 19800
      },
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 18400,
        "draws": 17200,
        "black": 12600
      },
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 14200,
        "draws": 13100,
        "black": 9800
      },
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 2100,
        "draws": 1900,
        "black": 1500
      }
    ]
  },
  "rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq -": {
    "eco": "B50",
    "name": "Sicilya: 2... d6",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 24800,
        "draws": 21900,
        "black": 16500
      },
      {
        "uci": "f1b5",
        "san": "Bb5+",
        "white": 4100,
        "draws": 3900,
        "black": 2800
      },
      {
        "uci": "c2c3",
        "san": "c3",
        "white": 650,
        "draws": 550,
        "black": 400
      }
    ]
  },
  "rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "B50",
    "name": "Açık Sicilya: 3. d4",
    "moves": [
      {
        "uci": "c5d4",
        "san": "cxd4",
        "white": 24400,
        "draws": 21600,
        "black": 16200
      }
    ]
  },
  "rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "B53",
    "name": "Açık Sicilya: 3... cxd4",
    "moves": [
      {
        "uci": "f3d4",
        "san": "Nxd4",
        "white": 24100,
        "draws": 21400,
        "black": 16000
      },
      {
        "uci": "d1d4",
        "san": "Qxd4",
        "white": 300,
        "draws": 200,
        "black": 200
      }
    ]
  },
  "rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "B53",
    "name": "Açık Sicilya: 4. Axd4",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 21800,
        "draws": 19400,
        "black": 14500
      },
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 1200,
        "draws": 1100,
        "black": 850
      },
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 850,
        "draws": 750,
        "black": 600
      }
    ]
  },
  "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "B54",
    "name": "Açık Sicilya: 4... Af6",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 21400,
        "draws": 19100,
        "black": 14200
      },
      {
        "uci": "f2f3",
        "san": "f3",
        "white": 250,
        "draws": 180,
        "black": 150
      }
    ]
  },
  "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq -": {
    "eco": "B54",
    "name": "Açık Sicilya Ana Konumu (5. Ac3)",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 12400,
        "draws": 11100,
        "black": 8900
      },
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 6200,
        "draws": 4800,
        "black": 4100
      },
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 5400,
        "draws": 4900,
        "black": 3800
      },
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 4100,
        "draws": 3600,
        "black": 2700
      }
    ]
  },
  "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq -": {
    "eco": "B90",
    "name": "Sicilya Savunması: Najdorf (5... a6)",
    "moves": [
      {
        "uci": "c1g5",
        "san": "Bg5",
        "white": 4200,
        "draws": 3800,
        "black": 3100
      },
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 3400,
        "draws": 3200,
        "black": 2400
      },
      {
        "uci": "c1e3",
        "san": "Be3",
        "white": 3100,
        "draws": 2600,
        "black": 2200
      },
      {
        "uci": "h2h3",
        "san": "h3",
        "white": 850,
        "draws": 750,
        "black": 600
      },
      {
        "uci": "f2f4",
        "san": "f4",
        "white": 650,
        "draws": 550,
        "black": 450
      }
    ]
  },
  "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq -": {
    "eco": "B90",
    "name": "Najdorf: İngiliz Atağı (6. Fe3)",
    "moves": [
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 1600,
        "draws": 1400,
        "black": 1200
      },
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 950,
        "draws": 800,
        "black": 650
      },
      {
        "uci": "f6g4",
        "san": "Ng4",
        "white": 450,
        "draws": 350,
        "black": 300
      }
    ]
  },
  "rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq -": {
    "eco": "B70",
    "name": "Sicilya Savunması: Dragon (5... g6)",
    "moves": [
      {
        "uci": "c1e3",
        "san": "Be3",
        "white": 3800,
        "draws": 2900,
        "black": 2400
      },
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 1400,
        "draws": 1200,
        "black": 950
      },
      {
        "uci": "f2f4",
        "san": "f4",
        "white": 450,
        "draws": 350,
        "black": 300
      }
    ]
  },
  "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq -": {
    "eco": "B30",
    "name": "Sicilya Savunması: 2... Ac6",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 13400,
        "draws": 12800,
        "black": 9100
      },
      {
        "uci": "f1b5",
        "san": "Bb5",
        "white": 3800,
        "draws": 3600,
        "black": 2400
      },
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 1200,
        "draws": 1100,
        "black": 800
      }
    ]
  },
  "r1bqkbnr/pp1ppppp/2n5/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "B30",
    "name": "Sicilya: 2... Ac6 3. d4",
    "moves": [
      {
        "uci": "c5d4",
        "san": "cxd4",
        "white": 13200,
        "draws": 12600,
        "black": 8900
      }
    ]
  },
  "r1bqkbnr/pp1ppppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "B32",
    "name": "Sicilya: 3... cxd4 (Ac6)",
    "moves": [
      {
        "uci": "f3d4",
        "san": "Nxd4",
        "white": 13100,
        "draws": 12500,
        "black": 8800
      }
    ]
  },
  "r1bqkbnr/pp1ppppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "B32",
    "name": "Sicilya: 4. Axd4 (Ac6)",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 5800,
        "draws": 5600,
        "black": 3800
      },
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 3200,
        "draws": 3100,
        "black": 2400
      },
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 2400,
        "draws": 2200,
        "black": 1600
      },
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 1700,
        "draws": 1600,
        "black": 1100
      }
    ]
  },
  "r1bqkb1r/pp1ppppp/2n2n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "B33",
    "name": "Sicilya: 4... Af6 (Ac6)",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 5600,
        "draws": 5400,
        "black": 3600
      }
    ]
  },
  "r1bqkb1r/pp1ppppp/2n2n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq -": {
    "eco": "B33",
    "name": "Sicilya: Dört At / Sveshnikov",
    "moves": [
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 2800,
        "draws": 2700,
        "black": 2100
      },
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 1600,
        "draws": 1500,
        "black": 1050
      },
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 850,
        "draws": 800,
        "black": 550
      }
    ]
  },
  "r1bqkb1r/pp1p1ppp/2n2n2/4p3/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq -": {
    "eco": "B33",
    "name": "Sicilya: Sveshnikov Varyantı (5... e5)",
    "moves": [
      {
        "uci": "d4b5",
        "san": "Ndb5",
        "white": 2400,
        "draws": 2300,
        "black": 1800
      },
      {
        "uci": "d4f3",
        "san": "Nf3",
        "white": 250,
        "draws": 220,
        "black": 180
      }
    ]
  },
  "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    "eco": "C20",
    "name": "Açık Oyun (1. e4 e5)",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 49200,
        "draws": 44600,
        "black": 28900
      },
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 4600,
        "draws": 3900,
        "black": 2900
      },
      {
        "uci": "f1c4",
        "san": "Bc4",
        "white": 2800,
        "draws": 2200,
        "black": 1800
      },
      {
        "uci": "f2f4",
        "san": "f4",
        "white": 1400,
        "draws": 900,
        "black": 1100
      }
    ]
  },
  "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq -": {
    "eco": "C40",
    "name": "Açık Oyun: 2. Af3",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 38400,
        "draws": 35600,
        "black": 22800
      },
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 8900,
        "draws": 9800,
        "black": 5400
      },
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 1800,
        "draws": 1400,
        "black": 1100
      }
    ]
  },
  "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq -": {
    "eco": "C44",
    "name": "Açık Oyun: 2... Ac6",
    "moves": [
      {
        "uci": "f1b5",
        "san": "Bb5",
        "white": 28400,
        "draws": 26900,
        "black": 16100
      },
      {
        "uci": "f1c4",
        "san": "Bc4",
        "white": 12800,
        "draws": 11200,
        "black": 7900
      },
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 5600,
        "draws": 4800,
        "black": 3400
      },
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 3400,
        "draws": 3100,
        "black": 2100
      }
    ]
  },
  "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq -": {
    "eco": "C60",
    "name": "İspanyol Açılışı (Ruy Lopez)",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 19800,
        "draws": 19200,
        "black": 11200
      },
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 5800,
        "draws": 6400,
        "black": 3400
      },
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 1400,
        "draws": 1100,
        "black": 800
      },
      {
        "uci": "f7f5",
        "san": "f5",
        "white": 900,
        "draws": 600,
        "black": 550
      }
    ]
  },
  "r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq -": {
    "eco": "C70",
    "name": "İspanyol: Morphy Savunması (3... a6)",
    "moves": [
      {
        "uci": "b5a4",
        "san": "Ba4",
        "white": 18400,
        "draws": 18100,
        "black": 10400
      },
      {
        "uci": "b5c6",
        "san": "Bxc6",
        "white": 1400,
        "draws": 1100,
        "black": 800
      }
    ]
  },
  "r1bqkbnr/1ppp1ppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R b KQkq -": {
    "eco": "C70",
    "name": "İspanyol: 4. Fa4",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 16800,
        "draws": 16900,
        "black": 9800
      },
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 1400,
        "draws": 1200,
        "black": 850
      },
      {
        "uci": "b7b5",
        "san": "b5",
        "white": 850,
        "draws": 750,
        "black": 500
      }
    ]
  },
  "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq -": {
    "eco": "C80",
    "name": "İspanyol: 4... Af6",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 14800,
        "draws": 15100,
        "black": 8600
      },
      {
        "uci": "d2d3",
        "san": "d3",
        "white": 1600,
        "draws": 1500,
        "black": 950
      }
    ]
  },
  "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 b kq -": {
    "eco": "C80",
    "name": "İspanyol: 5. O-O",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 11200,
        "draws": 12400,
        "black": 6800
      },
      {
        "uci": "f6e4",
        "san": "Nxe4",
        "white": 2800,
        "draws": 3100,
        "black": 1800
      },
      {
        "uci": "b7b5",
        "san": "b5",
        "white": 1900,
        "draws": 1800,
        "black": 1100
      }
    ]
  },
  "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq -": {
    "eco": "C84",
    "name": "Kapalı İspanyol (5... Fe7)",
    "moves": [
      {
        "uci": "f1e1",
        "san": "Re1",
        "white": 9800,
        "draws": 11100,
        "black": 5900
      },
      {
        "uci": "d2d3",
        "san": "d3",
        "white": 850,
        "draws": 800,
        "black": 550
      }
    ]
  },
  "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQR1K1 b kq -": {
    "eco": "C84",
    "name": "Kapalı İspanyol: 6. Ke1",
    "moves": [
      {
        "uci": "b7b5",
        "san": "b5",
        "white": 8900,
        "draws": 10400,
        "black": 5400
      },
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 650,
        "draws": 550,
        "black": 380
      }
    ]
  },
  "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq -": {
    "eco": "C50",
    "name": "İtalyan Açılışı: 3. Fc4",
    "moves": [
      {
        "uci": "f8c5",
        "san": "Bc5",
        "white": 6800,
        "draws": 6100,
        "black": 4200
      },
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 5100,
        "draws": 4400,
        "black": 3200
      },
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 600,
        "draws": 520,
        "black": 380
      }
    ]
  },
  "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq -": {
    "eco": "C53",
    "name": "İtalyan: Giuoco Piano (3... Fc5)",
    "moves": [
      {
        "uci": "c2c3",
        "san": "c3",
        "white": 3800,
        "draws": 3400,
        "black": 2300
      },
      {
        "uci": "d2d3",
        "san": "d3",
        "white": 2400,
        "draws": 2200,
        "black": 1500
      },
      {
        "uci": "b2b4",
        "san": "b4",
        "white": 650,
        "draws": 450,
        "black": 400
      }
    ]
  },
  "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq -": {
    "eco": "C53",
    "name": "İtalyan: 4. c3",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 3200,
        "draws": 2900,
        "black": 1900
      },
      {
        "uci": "d8e7",
        "san": "Qe7",
        "white": 450,
        "draws": 380,
        "black": 270
      }
    ]
  },
  "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq -": {
    "eco": "C54",
    "name": "İtalyan: Giuoco Piano Ana Hat (4... Af6)",
    "moves": [
      {
        "uci": "d2d3",
        "san": "d3",
        "white": 1800,
        "draws": 1700,
        "black": 1100
      },
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 1300,
        "draws": 1100,
        "black": 750
      }
    ]
  },
  "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    "eco": "C00",
    "name": "Fransız Savunması (1... e6)",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 24800,
        "draws": 20900,
        "black": 14700
      },
      {
        "uci": "d2d3",
        "san": "d3",
        "white": 1400,
        "draws": 1100,
        "black": 800
      }
    ]
  },
  "rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq -": {
    "eco": "C00",
    "name": "Fransız Savunması: 2. d4",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 24200,
        "draws": 20500,
        "black": 14400
      },
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 450,
        "draws": 320,
        "black": 230
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq -": {
    "eco": "C01",
    "name": "Fransız Savunması: 2... d5",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 11200,
        "draws": 9400,
        "black": 6800
      },
      {
        "uci": "b1d2",
        "san": "Nd2",
        "white": 8400,
        "draws": 7600,
        "black": 4900
      },
      {
        "uci": "e4e5",
        "san": "e5",
        "white": 3800,
        "draws": 2900,
        "black": 2400
      },
      {
        "uci": "e4d5",
        "san": "exd5",
        "white": 1800,
        "draws": 1800,
        "black": 1100
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq -": {
    "eco": "C10",
    "name": "Fransız: 3. Ac3",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 5400,
        "draws": 4600,
        "black": 3300
      },
      {
        "uci": "f8b4",
        "san": "Bb4",
        "white": 4200,
        "draws": 3400,
        "black": 2600
      },
      {
        "uci": "d5e4",
        "san": "dxe4",
        "white": 1400,
        "draws": 1200,
        "black": 800
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR b KQkq -": {
    "eco": "C03",
    "name": "Fransız: Tarrasch (3. Ad2)",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 4100,
        "draws": 3800,
        "black": 2400
      },
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 3200,
        "draws": 3100,
        "black": 1900
      },
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 650,
        "draws": 600,
        "black": 400
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq -": {
    "eco": "C02",
    "name": "Fransız: İlerleme Varyantı (3. e5)",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 3600,
        "draws": 2800,
        "black": 2300
      }
    ]
  },
  "rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq -": {
    "eco": "C02",
    "name": "Fransız: İlerleme (3... c5)",
    "moves": [
      {
        "uci": "c2c3",
        "san": "c3",
        "white": 3300,
        "draws": 2600,
        "black": 2100
      },
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 250,
        "draws": 180,
        "black": 150
      }
    ]
  },
  "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    "eco": "B10",
    "name": "Caro-Kann Savunması (1... c6)",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 16800,
        "draws": 16100,
        "black": 10800
      },
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 1400,
        "draws": 1300,
        "black": 900
      }
    ]
  },
  "rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq -": {
    "eco": "B10",
    "name": "Caro-Kann: 2. d4",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 16400,
        "draws": 15800,
        "black": 10500
      }
    ]
  },
  "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann: 2... d5",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 6900,
        "draws": 6800,
        "black": 4400
      },
      {
        "uci": "e4e5",
        "san": "e5",
        "white": 5400,
        "draws": 4900,
        "black": 3600
      },
      {
        "uci": "e4d5",
        "san": "exd5",
        "white": 3100,
        "draws": 3100,
        "black": 2100
      }
    ]
  },
  "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq -": {
    "eco": "B15",
    "name": "Caro-Kann: 3. Ac3",
    "moves": [
      {
        "uci": "d5e4",
        "san": "dxe4",
        "white": 6700,
        "draws": 6600,
        "black": 4300
      }
    ]
  },
  "rnbqkbnr/pp2pppp/2p5/8/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq -": {
    "eco": "B15",
    "name": "Caro-Kann: 3... dxe4",
    "moves": [
      {
        "uci": "c3e4",
        "san": "Nxe4",
        "white": 6600,
        "draws": 6500,
        "black": 4200
      }
    ]
  },
  "rnbqkbnr/pp2pppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR b KQkq -": {
    "eco": "B15",
    "name": "Caro-Kann: 4. Axe4",
    "moves": [
      {
        "uci": "c8f5",
        "san": "Bf5",
        "white": 3400,
        "draws": 3500,
        "black": 2100
      },
      {
        "uci": "b8d7",
        "san": "Nd7",
        "white": 1800,
        "draws": 1700,
        "black": 1100
      },
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 1200,
        "draws": 1100,
        "black": 800
      }
    ]
  },
  "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq -": {
    "eco": "A40",
    "name": "Vezir Piyonu Açılışı (1. d4)",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 78500,
        "draws": 84200,
        "black": 50300
      },
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 54100,
        "draws": 56800,
        "black": 34100
      },
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 10800,
        "draws": 10200,
        "black": 6400
      },
      {
        "uci": "f7f5",
        "san": "f5",
        "white": 4800,
        "draws": 3600,
        "black": 2800
      },
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 3200,
        "draws": 2800,
        "black": 1900
      }
    ]
  },
  "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -": {
    "eco": "D00",
    "name": "Kapalı Oyun (1... d5)",
    "moves": [
      {
        "uci": "c2c4",
        "san": "c4",
        "white": 41200,
        "draws": 43600,
        "black": 25800
      },
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 8400,
        "draws": 9200,
        "black": 5600
      },
      {
        "uci": "c1f4",
        "san": "Bf4",
        "white": 4200,
        "draws": 3900,
        "black": 2400
      }
    ]
  },
  "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq -": {
    "eco": "D06",
    "name": "Vezir Gambiti (2. c4)",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 21200,
        "draws": 23800,
        "black": 13400
      },
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 13400,
        "draws": 14800,
        "black": 8600
      },
      {
        "uci": "d5c4",
        "san": "dxc4",
        "white": 4200,
        "draws": 3800,
        "black": 2700
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -": {
    "eco": "D30",
    "name": "Kabul Edilmeyen Vezir Gambiti (2... e6)",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 12400,
        "draws": 14600,
        "black": 7800
      },
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 7800,
        "draws": 8600,
        "black": 4900
      },
      {
        "uci": "c4d5",
        "san": "cxd5",
        "white": 1200,
        "draws": 1300,
        "black": 700
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq -": {
    "eco": "D30",
    "name": "Vezir Gambiti: 3. Ac3",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 9800,
        "draws": 11400,
        "black": 6100
      },
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 2100,
        "draws": 2400,
        "black": 1400
      },
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 850,
        "draws": 950,
        "black": 550
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "D35",
    "name": "Vezir Gambiti: 3... Af6",
    "moves": [
      {
        "uci": "c1g5",
        "san": "Bg5",
        "white": 4800,
        "draws": 5600,
        "black": 3100
      },
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 3400,
        "draws": 4200,
        "black": 2100
      },
      {
        "uci": "c4d5",
        "san": "cxd5",
        "white": 1400,
        "draws": 1500,
        "black": 850
      }
    ]
  },
  "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -": {
    "eco": "D10",
    "name": "Slav Savunması (2... c6)",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 7800,
        "draws": 8600,
        "black": 5100
      },
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 3600,
        "draws": 4100,
        "black": 2400
      },
      {
        "uci": "c4d5",
        "san": "cxd5",
        "white": 1800,
        "draws": 2100,
        "black": 1100
      }
    ]
  },
  "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq -": {
    "eco": "D11",
    "name": "Slav: 3. Af3",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 6900,
        "draws": 7800,
        "black": 4600
      }
    ]
  },
  "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq -": {
    "eco": "D11",
    "name": "Slav: 3... Af6",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 5400,
        "draws": 6200,
        "black": 3600
      },
      {
        "uci": "e2e3",
        "san": "e3",
        "white": 1400,
        "draws": 1500,
        "black": 950
      }
    ]
  },
  "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq -": {
    "eco": "D15",
    "name": "Slav: 4. Ac3 (Ana Hat)",
    "moves": [
      {
        "uci": "d5c4",
        "san": "dxc4",
        "white": 2400,
        "draws": 2800,
        "black": 1600
      },
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 2200,
        "draws": 2600,
        "black": 1500
      },
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 650,
        "draws": 750,
        "black": 450
      }
    ]
  },
  "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -": {
    "eco": "A45",
    "name": "Hint Savunması (1... Af6)",
    "moves": [
      {
        "uci": "c2c4",
        "san": "c4",
        "white": 56400,
        "draws": 61800,
        "black": 36800
      },
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 14200,
        "draws": 15900,
        "black": 9100
      },
      {
        "uci": "c1g5",
        "san": "Bg5",
        "white": 4800,
        "draws": 4100,
        "black": 2900
      },
      {
        "uci": "c1f4",
        "san": "Bf4",
        "white": 2400,
        "draws": 2200,
        "black": 1400
      }
    ]
  },
  "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq -": {
    "eco": "E00",
    "name": "Hint Savunmaları (2. c4)",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 26800,
        "draws": 31200,
        "black": 18400
      },
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 22400,
        "draws": 23100,
        "black": 14900
      },
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 3800,
        "draws": 3600,
        "black": 2400
      }
    ]
  },
  "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -": {
    "eco": "E00",
    "name": "Doğu Hint Savunmaları (2... e6)",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 18400,
        "draws": 22100,
        "black": 12200
      },
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 16800,
        "draws": 17900,
        "black": 10900
      },
      {
        "uci": "g2g3",
        "san": "g3",
        "white": 6200,
        "draws": 7800,
        "black": 4100
      }
    ]
  },
  "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq -": {
    "eco": "E20",
    "name": "Nimzo-Hint Hazırlığı (3. Ac3)",
    "moves": [
      {
        "uci": "f8b4",
        "san": "Bb4",
        "white": 11200,
        "draws": 12400,
        "black": 7600
      },
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 4200,
        "draws": 4400,
        "black": 2600
      }
    ]
  },
  "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "E20",
    "name": "Nimzo-Hint Savunması (3... Fb4)",
    "moves": [
      {
        "uci": "e2e3",
        "san": "e3",
        "white": 4800,
        "draws": 5600,
        "black": 3400
      },
      {
        "uci": "d1c2",
        "san": "Qc2",
        "white": 3800,
        "draws": 4200,
        "black": 2600
      },
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1800,
        "draws": 1900,
        "black": 1200
      }
    ]
  },
  "rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -": {
    "eco": "E60",
    "name": "Şah-Hint / Grünfeld (2... g6)",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 17400,
        "draws": 17800,
        "black": 11600
      },
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 6200,
        "draws": 7400,
        "black": 4200
      },
      {
        "uci": "g2g3",
        "san": "g3",
        "white": 2800,
        "draws": 3400,
        "black": 1800
      }
    ]
  },
  "rnbqkb1r/pppppp1p/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq -": {
    "eco": "E60",
    "name": "Şah-Hint / Grünfeld: 3. Ac3",
    "moves": [
      {
        "uci": "f8g7",
        "san": "Bg7",
        "white": 10800,
        "draws": 11200,
        "black": 7400
      },
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 6600,
        "draws": 6600,
        "black": 4200
      }
    ]
  },
  "rnbqk2r/ppppppbp/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "E70",
    "name": "Şah-Hint Savunması (3... Fg7)",
    "moves": [
      {
        "uci": "e2e4",
        "san": "e4",
        "white": 9800,
        "draws": 10200,
        "black": 6800
      },
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 850,
        "draws": 900,
        "black": 550
      }
    ]
  },
  "rnbqk2r/ppppppbp/5np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq -": {
    "eco": "E70",
    "name": "Şah-Hint: 4. e4",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 9400,
        "draws": 9800,
        "black": 6500
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR w KQkq -": {
    "eco": "E70",
    "name": "Şah-Hint: 4... d6 (Ana Hat)",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 6200,
        "draws": 6600,
        "black": 4400
      },
      {
        "uci": "f2f3",
        "san": "f3",
        "white": 2100,
        "draws": 2100,
        "black": 1400
      },
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 1100,
        "draws": 1100,
        "black": 700
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "D80",
    "name": "Grünfeld Savunması (3... d5)",
    "moves": [
      {
        "uci": "c4d5",
        "san": "cxd5",
        "white": 4600,
        "draws": 4800,
        "black": 3100
      },
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1400,
        "draws": 1500,
        "black": 950
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/5np1/3P4/3P4/2N5/PP2PPPP/R1BQKBNR b KQkq -": {
    "eco": "D85",
    "name": "Grünfeld: 4. cxd5",
    "moves": [
      {
        "uci": "f6d5",
        "san": "Nxd5",
        "white": 4500,
        "draws": 4700,
        "black": 3000
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/6p1/3n4/3P4/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "D85",
    "name": "Grünfeld: Değişme Varyantı (4... Axd5)",
    "moves": [
      {
        "uci": "e2e4",
        "san": "e4",
        "white": 3800,
        "draws": 3900,
        "black": 2600
      },
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 650,
        "draws": 750,
        "black": 400
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/6p1/3n4/3PP3/2N5/PP3PPP/R1BQKBNR b KQkq -": {
    "eco": "D85",
    "name": "Grünfeld: 5. e4",
    "moves": [
      {
        "uci": "d5c3",
        "san": "Nxc3",
        "white": 3700,
        "draws": 3800,
        "black": 2500
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/6p1/8/3PP3/2n5/PP3PPP/R1BQKBNR w KQkq -": {
    "eco": "D85",
    "name": "Grünfeld: 5... Axc3",
    "moves": [
      {
        "uci": "b2c3",
        "san": "bxc3",
        "white": 3700,
        "draws": 3800,
        "black": 2500
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/6p1/8/3PP3/2P5/P4PPP/R1BQKBNR b KQkq -": {
    "eco": "D85",
    "name": "Grünfeld: 6. bxc3",
    "moves": [
      {
        "uci": "f8g7",
        "san": "Bg7",
        "white": 3600,
        "draws": 3700,
        "black": 2400
      }
    ]
  }
};
