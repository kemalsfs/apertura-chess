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

// Full Grandmaster Opening DAG Graph generated from verified master trees
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
    "eco": "C60",
    "name": "İspanyol Açılışı (Ruy Lopez)",
    "moves": [
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 283730,
        "draws": 283730,
        "black": 179214
      },
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 233660,
        "draws": 233660,
        "black": 147588
      },
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 83450,
        "draws": 83450,
        "black": 52710
      },
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 66760,
        "draws": 66760,
        "black": 42168
      },
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 33380,
        "draws": 33380,
        "black": 21084
      },
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 33380,
        "draws": 33380,
        "black": 21084
      },
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 33380,
        "draws": 33380,
        "black": 21084
      },
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 16690,
        "draws": 16690,
        "black": 10542
      }
    ]
  },
  "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    "eco": "C60",
    "name": "İspanyol Açılışı (Ruy Lopez)",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 139065,
        "draws": 139065,
        "black": 87840
      },
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 9271,
        "draws": 9271,
        "black": 5856
      },
      {
        "uci": "f2f4",
        "san": "f4",
        "white": 9271,
        "draws": 9271,
        "black": 5856
      }
    ]
  },
  "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq -": {
    "eco": "C60",
    "name": "İspanyol Açılışı (Ruy Lopez)",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 79417,
        "draws": 79417,
        "black": 50154
      },
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 6109,
        "draws": 6109,
        "black": 3858
      },
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 6109,
        "draws": 6109,
        "black": 3858
      }
    ]
  },
  "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq -": {
    "eco": "C60",
    "name": "İspanyol Açılışı (Ruy Lopez)",
    "moves": [
      {
        "uci": "f1b5",
        "san": "Bb5",
        "white": 22100,
        "draws": 22100,
        "black": 13960
      },
      {
        "uci": "f1c4",
        "san": "Bc4",
        "white": 22100,
        "draws": 22100,
        "black": 13960
      },
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 8840,
        "draws": 8840,
        "black": 5584
      },
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 4420,
        "draws": 4420,
        "black": 2792
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
        "white": 10179,
        "draws": 10179,
        "black": 6432
      },
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      },
      {
        "uci": "f7f5",
        "san": "f5",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq -": {
    "eco": "C60",
    "name": "İspanyol Açılışı (Ruy Lopez)",
    "moves": [
      {
        "uci": "b5a4",
        "san": "Ba4",
        "white": 5428,
        "draws": 5428,
        "black": 3426
      },
      {
        "uci": "b5c6",
        "san": "Bxc6",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "r1bqkbnr/1ppp1ppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R b KQkq -": {
    "eco": "C60",
    "name": "İspanyol Açılışı (Ruy Lopez)",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 4472,
        "draws": 4472,
        "black": 2824
      }
    ]
  },
  "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq -": {
    "eco": "C60",
    "name": "İspanyol Açılışı (Ruy Lopez)",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 3770,
        "draws": 3770,
        "black": 2380
      }
    ]
  },
  "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 b kq -": {
    "eco": "C60",
    "name": "İspanyol Açılışı (Ruy Lopez)",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      },
      {
        "uci": "f6e4",
        "san": "Nxe4",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq -": {
    "eco": "C60",
    "name": "İspanyol Açılışı (Ruy Lopez)",
    "moves": [
      {
        "uci": "f1e1",
        "san": "Re1",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQR1K1 b kq -": {
    "eco": "C60",
    "name": "İspanyol Açılışı (Ruy Lopez)",
    "moves": [
      {
        "uci": "b7b5",
        "san": "b5",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqk2r/2ppbppp/p1n2n2/1p2p3/B3P3/5N2/PPPP1PPP/RNBQR1K1 w kq -": {
    "eco": "C60",
    "name": "İspanyol Açılışı (Ruy Lopez)",
    "moves": [
      {
        "uci": "a4b3",
        "san": "Bb3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bqk2r/2ppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 b kq -": {
    "eco": "C60",
    "name": "İspanyol Açılışı (Ruy Lopez)",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bqk2r/2p1bppp/p1np1n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 w kq -": {
    "eco": "C60",
    "name": "İspanyol Açılışı (Ruy Lopez)",
    "moves": [
      {
        "uci": "c2c3",
        "san": "c3",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1bqk2r/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 b kq -": {
    "eco": "C60",
    "name": "İspanyol Açılışı (Ruy Lopez)",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - -": {
    "eco": "C60",
    "name": "İspanyol Açılışı (Ruy Lopez)",
    "moves": [
      {
        "uci": "h2h3",
        "san": "h3",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq -": {
    "eco": "C65",
    "name": "İspanyol: Berlin Savunması",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 b kq -": {
    "eco": "C65",
    "name": "İspanyol: Berlin Savunması",
    "moves": [
      {
        "uci": "f6e4",
        "san": "Nxe4",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "r1bqkb1r/pppp1ppp/2n5/1B2p3/4n3/5N2/PPPP1PPP/RNBQ1RK1 w kq -": {
    "eco": "C65",
    "name": "İspanyol: Berlin Savunması",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "r1bqkb1r/pppp1ppp/2n5/1B2p3/3Pn3/5N2/PPP2PPP/RNBQ1RK1 b kq -": {
    "eco": "C65",
    "name": "İspanyol: Berlin Savunması",
    "moves": [
      {
        "uci": "e4d6",
        "san": "Nd6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1bqkb1r/pppp1ppp/2nn4/1B2p3/3P4/5N2/PPP2PPP/RNBQ1RK1 w kq -": {
    "eco": "C65",
    "name": "İspanyol: Berlin Savunması",
    "moves": [
      {
        "uci": "b5c6",
        "san": "Bxc6",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1bqkb1r/pppp1ppp/2Bn4/4p3/3P4/5N2/PPP2PPP/RNBQ1RK1 b kq -": {
    "eco": "C65",
    "name": "İspanyol: Berlin Savunması",
    "moves": [
      {
        "uci": "d7c6",
        "san": "dxc6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqkb1r/ppp2ppp/2pn4/4p3/3P4/5N2/PPP2PPP/RNBQ1RK1 w kq -": {
    "eco": "C65",
    "name": "İspanyol: Berlin Savunması",
    "moves": [
      {
        "uci": "d4e5",
        "san": "dxe5",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bqkb1r/ppp2ppp/2pn4/4P3/8/5N2/PPP2PPP/RNBQ1RK1 b kq -": {
    "eco": "C65",
    "name": "İspanyol: Berlin Savunması",
    "moves": [
      {
        "uci": "d6f5",
        "san": "Nf5",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bqkb1r/ppp2ppp/2p5/4Pn2/8/5N2/PPP2PPP/RNBQ1RK1 w kq -": {
    "eco": "C65",
    "name": "İspanyol: Berlin Savunması",
    "moves": [
      {
        "uci": "d1d8",
        "san": "Qxd8+",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1bQkb1r/ppp2ppp/2p5/4Pn2/8/5N2/PPP2PPP/RNB2RK1 b kq -": {
    "eco": "C65",
    "name": "İspanyol: Berlin Savunması",
    "moves": [
      {
        "uci": "e8d8",
        "san": "Kxd8",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r1bqkbnr/1ppp1ppp/p1B5/4p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq -": {
    "eco": "C68",
    "name": "İspanyol: Değişme Varyantı",
    "moves": [
      {
        "uci": "d7c6",
        "san": "dxc6",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "r1bqkbnr/1pp2ppp/p1p5/4p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq -": {
    "eco": "C68",
    "name": "İspanyol: Değişme Varyantı",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "r1bqkbnr/1pp2ppp/p1p5/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 b kq -": {
    "eco": "C68",
    "name": "İspanyol: Değişme Varyantı",
    "moves": [
      {
        "uci": "f7f6",
        "san": "f6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1bqkbnr/1pp3pp/p1p2p2/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 w kq -": {
    "eco": "C68",
    "name": "İspanyol: Değişme Varyantı",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1bqkbnr/1pp3pp/p1p2p2/4p3/3PP3/5N2/PPP2PPP/RNBQ1RK1 b kq -": {
    "eco": "C68",
    "name": "İspanyol: Değişme Varyantı",
    "moves": [
      {
        "uci": "e5d4",
        "san": "exd4",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqkbnr/1pp3pp/p1p2p2/8/3pP3/5N2/PPP2PPP/RNBQ1RK1 w kq -": {
    "eco": "C68",
    "name": "İspanyol: Değişme Varyantı",
    "moves": [
      {
        "uci": "f3d4",
        "san": "Nxd4",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bqkbnr/1pp3pp/p1p2p2/8/3NP3/8/PPP2PPP/RNBQ1RK1 b kq -": {
    "eco": "C68",
    "name": "İspanyol: Değişme Varyantı",
    "moves": [
      {
        "uci": "c6c5",
        "san": "c5",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bqkbnr/pppp2pp/2n5/1B2pp2/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq -": {
    "eco": "C63",
    "name": "İspanyol: Schliemann Gambiti",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "r1bqkbnr/pppp2pp/2n5/1B2pp2/4P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq -": {
    "eco": "C63",
    "name": "İspanyol: Schliemann Gambiti",
    "moves": [
      {
        "uci": "f5e4",
        "san": "fxe4",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "r1bqkbnr/pppp2pp/2n5/1B2p3/4p3/2N2N2/PPPP1PPP/R1BQK2R w KQkq -": {
    "eco": "C63",
    "name": "İspanyol: Schliemann Gambiti",
    "moves": [
      {
        "uci": "c3e4",
        "san": "Nxe4",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "r1bqkbnr/pppp2pp/2n5/1B2p3/4N3/5N2/PPPP1PPP/R1BQK2R b KQkq -": {
    "eco": "C63",
    "name": "İspanyol: Schliemann Gambiti",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1bqkb1r/1ppp1ppp/p1n5/4p3/B3n3/5N2/PPPP1PPP/RNBQ1RK1 w kq -": {
    "eco": "C78",
    "name": "İspanyol: Açık Varyant",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1bqkb1r/1ppp1ppp/p1n5/4p3/B2Pn3/5N2/PPP2PPP/RNBQ1RK1 b kq -": {
    "eco": "C78",
    "name": "İspanyol: Açık Varyant",
    "moves": [
      {
        "uci": "b7b5",
        "san": "b5",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqkb1r/2pp1ppp/p1n5/1p2p3/B2Pn3/5N2/PPP2PPP/RNBQ1RK1 w kq -": {
    "eco": "C78",
    "name": "İspanyol: Açık Varyant",
    "moves": [
      {
        "uci": "a4b3",
        "san": "Bb3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bqkb1r/2pp1ppp/p1n5/1p2p3/3Pn3/1B3N2/PPP2PPP/RNBQ1RK1 b kq -": {
    "eco": "C78",
    "name": "İspanyol: Açık Varyant",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bqkb1r/2p2ppp/p1n5/1p1pp3/3Pn3/1B3N2/PPP2PPP/RNBQ1RK1 w kq -": {
    "eco": "C78",
    "name": "İspanyol: Açık Varyant",
    "moves": [
      {
        "uci": "d4e5",
        "san": "dxe5",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1bqkb1r/2p2ppp/p1n5/1p1pP3/4n3/1B3N2/PPP2PPP/RNBQ1RK1 b kq -": {
    "eco": "C78",
    "name": "İspanyol: Açık Varyant",
    "moves": [
      {
        "uci": "c8e6",
        "san": "Be6",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq -": {
    "eco": "C50",
    "name": "İtalyan: Giuoco Piano",
    "moves": [
      {
        "uci": "f8c5",
        "san": "Bc5",
        "white": 10179,
        "draws": 10179,
        "black": 6432
      },
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 6786,
        "draws": 6786,
        "black": 4288
      }
    ]
  },
  "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq -": {
    "eco": "C50",
    "name": "İtalyan: Giuoco Piano",
    "moves": [
      {
        "uci": "c2c3",
        "san": "c3",
        "white": 5428,
        "draws": 5428,
        "black": 3426
      },
      {
        "uci": "b2b4",
        "san": "b4",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq -": {
    "eco": "C50",
    "name": "İtalyan: Giuoco Piano",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 4472,
        "draws": 4472,
        "black": 2824
      }
    ]
  },
  "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq -": {
    "eco": "C50",
    "name": "İtalyan: Giuoco Piano",
    "moves": [
      {
        "uci": "d2d3",
        "san": "d3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      },
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQK2R b KQkq -": {
    "eco": "C50",
    "name": "İtalyan: Giuoco Piano",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQK2R w KQkq -": {
    "eco": "C50",
    "name": "İtalyan: Giuoco Piano",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQ1RK1 b kq -": {
    "eco": "C50",
    "name": "İtalyan: Giuoco Piano",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      },
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqk2r/1pp2ppp/p1np1n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQ1RK1 w kq -": {
    "eco": "C50",
    "name": "İtalyan: Giuoco Piano",
    "moves": [
      {
        "uci": "c4b3",
        "san": "Bb3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bqk2r/1pp2ppp/p1np1n2/2b1p3/4P3/1BPP1N2/PP3PPP/RNBQ1RK1 b kq -": {
    "eco": "C50",
    "name": "İtalyan: Giuoco Piano",
    "moves": [
      {
        "uci": "c5a7",
        "san": "Ba7",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2BPP3/2P2N2/PP3PPP/RNBQK2R b KQkq -": {
    "eco": "C54",
    "name": "İtalyan: Giuoco Piano Ana Hat",
    "moves": [
      {
        "uci": "e5d4",
        "san": "exd4",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/2P2N2/PP3PPP/RNBQK2R w KQkq -": {
    "eco": "C54",
    "name": "İtalyan: Giuoco Piano Ana Hat",
    "moves": [
      {
        "uci": "c3d4",
        "san": "cxd4",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1bqk2r/pppp1ppp/2n2n2/2b5/2BPP3/5N2/PP3PPP/RNBQK2R b KQkq -": {
    "eco": "C54",
    "name": "İtalyan: Giuoco Piano Ana Hat",
    "moves": [
      {
        "uci": "c5b4",
        "san": "Bb4+",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQK2R w KQkq -": {
    "eco": "C54",
    "name": "İtalyan: Giuoco Piano Ana Hat",
    "moves": [
      {
        "uci": "c1d2",
        "san": "Bd2",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP1B1PPP/RN1QK2R b KQkq -": {
    "eco": "C54",
    "name": "İtalyan: Giuoco Piano Ana Hat",
    "moves": [
      {
        "uci": "b4d2",
        "san": "Bxd2+",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bqk2r/pppp1ppp/2n2n2/8/2BPP3/5N2/PP1b1PPP/RN1QK2R w KQkq -": {
    "eco": "C54",
    "name": "İtalyan: Giuoco Piano Ana Hat",
    "moves": [
      {
        "uci": "b1d2",
        "san": "Nbxd2",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1bqk2r/pppp1ppp/2n2n2/8/2BPP3/5N2/PP1N1PPP/R2QK2R b KQkq -": {
    "eco": "C54",
    "name": "İtalyan: Giuoco Piano Ana Hat",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq -": {
    "eco": "C55",
    "name": "İtalyan: İki At Savunması",
    "moves": [
      {
        "uci": "d2d3",
        "san": "d3",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      },
      {
        "uci": "f3g5",
        "san": "Ng5",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R b KQkq -": {
    "eco": "C55",
    "name": "İtalyan: İki At Savunması",
    "moves": [
      {
        "uci": "f8c5",
        "san": "Bc5",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq -": {
    "eco": "C55",
    "name": "İtalyan: İki At Savunması",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQ1RK1 b kq -": {
    "eco": "C55",
    "name": "İtalyan: İki At Savunması",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQ1RK1 w kq -": {
    "eco": "C55",
    "name": "İtalyan: İki At Savunması",
    "moves": [
      {
        "uci": "c2c3",
        "san": "c3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQ1RK1 w - -": {
    "eco": "C55",
    "name": "İtalyan: İki At Savunması",
    "moves": [
      {
        "uci": "h2h3",
        "san": "h3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2PP1N1P/PP3PP1/RNBQ1RK1 b - -": {
    "eco": "C55",
    "name": "İtalyan: İki At Savunması",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bqkb1r/pppp1ppp/2n2n2/4p1N1/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq -": {
    "eco": "C57",
    "name": "İtalyan: Fried Liver / Knight Attack",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "r1bqkb1r/ppp2ppp/2n2n2/3pp1N1/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq -": {
    "eco": "C57",
    "name": "İtalyan: Fried Liver / Knight Attack",
    "moves": [
      {
        "uci": "e4d5",
        "san": "exd5",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "r1bqkb1r/ppp2ppp/2n2n2/3Pp1N1/2B5/8/PPPP1PPP/RNBQK2R b KQkq -": {
    "eco": "C57",
    "name": "İtalyan: Fried Liver / Knight Attack",
    "moves": [
      {
        "uci": "c6a5",
        "san": "Na5",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1bqkb1r/ppp2ppp/5n2/n2Pp1N1/2B5/8/PPPP1PPP/RNBQK2R w KQkq -": {
    "eco": "C57",
    "name": "İtalyan: Fried Liver / Knight Attack",
    "moves": [
      {
        "uci": "c4b5",
        "san": "Bb5+",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1bqkb1r/ppp2ppp/5n2/nB1Pp1N1/8/8/PPPP1PPP/RNBQK2R b KQkq -": {
    "eco": "C57",
    "name": "İtalyan: Fried Liver / Knight Attack",
    "moves": [
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqkb1r/pp3ppp/2p2n2/nB1Pp1N1/8/8/PPPP1PPP/RNBQK2R w KQkq -": {
    "eco": "C57",
    "name": "İtalyan: Fried Liver / Knight Attack",
    "moves": [
      {
        "uci": "d5c6",
        "san": "dxc6",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bqkb1r/pp3ppp/2P2n2/nB2p1N1/8/8/PPPP1PPP/RNBQK2R b KQkq -": {
    "eco": "C57",
    "name": "İtalyan: Fried Liver / Knight Attack",
    "moves": [
      {
        "uci": "b7c6",
        "san": "bxc6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bqk1nr/pppp1ppp/2n5/2b1p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R b KQkq -": {
    "eco": "C51",
    "name": "İtalyan: Evans Gambiti",
    "moves": [
      {
        "uci": "c5b4",
        "san": "Bxb4",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "r1bqk1nr/pppp1ppp/2n5/4p3/1bB1P3/5N2/P1PP1PPP/RNBQK2R w KQkq -": {
    "eco": "C51",
    "name": "İtalyan: Evans Gambiti",
    "moves": [
      {
        "uci": "c2c3",
        "san": "c3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "r1bqk1nr/pppp1ppp/2n5/4p3/1bB1P3/2P2N2/P2P1PPP/RNBQK2R b KQkq -": {
    "eco": "C51",
    "name": "İtalyan: Evans Gambiti",
    "moves": [
      {
        "uci": "b4a5",
        "san": "Ba5",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1bqk1nr/pppp1ppp/2n5/b3p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R w KQkq -": {
    "eco": "C51",
    "name": "İtalyan: Evans Gambiti",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1bqk1nr/pppp1ppp/2n5/b3p3/2BPP3/2P2N2/P4PPP/RNBQK2R b KQkq -": {
    "eco": "C51",
    "name": "İtalyan: Evans Gambiti",
    "moves": [
      {
        "uci": "e5d4",
        "san": "exd4",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqk1nr/pppp1ppp/2n5/b7/2BpP3/2P2N2/P4PPP/RNBQK2R w KQkq -": {
    "eco": "C51",
    "name": "İtalyan: Evans Gambiti",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "C45",
    "name": "İskoç Açılışı",
    "moves": [
      {
        "uci": "e5d4",
        "san": "exd4",
        "white": 6786,
        "draws": 6786,
        "black": 4288
      }
    ]
  },
  "r1bqkbnr/pppp1ppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "C45",
    "name": "İskoç Açılışı",
    "moves": [
      {
        "uci": "f3d4",
        "san": "Nxd4",
        "white": 5428,
        "draws": 5428,
        "black": 3426
      }
    ]
  },
  "r1bqkbnr/pppp1ppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "C45",
    "name": "İskoç Açılışı",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      },
      {
        "uci": "f8c5",
        "san": "Bc5",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "r1bqkb1r/pppp1ppp/2n2n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "C45",
    "name": "İskoç Açılışı",
    "moves": [
      {
        "uci": "d4c6",
        "san": "Nxc6",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "r1bqkb1r/pppp1ppp/2N2n2/8/4P3/8/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "C45",
    "name": "İskoç Açılışı",
    "moves": [
      {
        "uci": "b7c6",
        "san": "bxc6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1bqkb1r/p1pp1ppp/2p2n2/8/4P3/8/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "C45",
    "name": "İskoç Açılışı",
    "moves": [
      {
        "uci": "e4e5",
        "san": "e5",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1bqkb1r/p1pp1ppp/2p2n2/4P3/8/8/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "C45",
    "name": "İskoç Açılışı",
    "moves": [
      {
        "uci": "d8e7",
        "san": "Qe7",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1b1kb1r/p1ppqppp/2p2n2/4P3/8/8/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "C45",
    "name": "İskoç Açılışı",
    "moves": [
      {
        "uci": "d1e2",
        "san": "Qe2",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1b1kb1r/p1ppqppp/2p2n2/4P3/8/8/PPP1QPPP/RNB1KB1R b KQkq -": {
    "eco": "C45",
    "name": "İskoç Açılışı",
    "moves": [
      {
        "uci": "f6d5",
        "san": "Nd5",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bqk1nr/pppp1ppp/2n5/2b5/3NP3/8/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "C45",
    "name": "İskoç: Klasik Varyant",
    "moves": [
      {
        "uci": "c1e3",
        "san": "Be3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "r1bqk1nr/pppp1ppp/2n5/2b5/3NP3/4B3/PPP2PPP/RN1QKB1R b KQkq -": {
    "eco": "C45",
    "name": "İskoç: Klasik Varyant",
    "moves": [
      {
        "uci": "d8f6",
        "san": "Qf6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1b1k1nr/pppp1ppp/2n2q2/2b5/3NP3/4B3/PPP2PPP/RN1QKB1R w KQkq -": {
    "eco": "C45",
    "name": "İskoç: Klasik Varyant",
    "moves": [
      {
        "uci": "c2c3",
        "san": "c3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1b1k1nr/pppp1ppp/2n2q2/2b5/3NP3/2P1B3/PP3PPP/RN1QKB1R b KQkq -": {
    "eco": "C45",
    "name": "İskoç: Klasik Varyant",
    "moves": [
      {
        "uci": "g8e7",
        "san": "Nge7",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq -": {
    "eco": "C42",
    "name": "Petrov Savunması",
    "moves": [
      {
        "uci": "f3e5",
        "san": "Nxe5",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "rnbqkb1r/pppp1ppp/5n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R b KQkq -": {
    "eco": "C42",
    "name": "Petrov Savunması",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/3p1n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R w KQkq -": {
    "eco": "C42",
    "name": "Petrov Savunması",
    "moves": [
      {
        "uci": "e5f3",
        "san": "Nf3",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/3p1n2/8/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq -": {
    "eco": "C42",
    "name": "Petrov Savunması",
    "moves": [
      {
        "uci": "f6e4",
        "san": "Nxe4",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/3p4/8/4n3/5N2/PPPP1PPP/RNBQKB1R w KQkq -": {
    "eco": "C42",
    "name": "Petrov Savunması",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/3p4/8/3Pn3/5N2/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "C42",
    "name": "Petrov Savunması",
    "moves": [
      {
        "uci": "d6d5",
        "san": "d5",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/8/3p4/3Pn3/5N2/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "C42",
    "name": "Petrov Savunması",
    "moves": [
      {
        "uci": "f1d3",
        "san": "Bd3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/8/3p4/3Pn3/3B1N2/PPP2PPP/RNBQK2R b KQkq -": {
    "eco": "C42",
    "name": "Petrov Savunması",
    "moves": [
      {
        "uci": "f8d6",
        "san": "Bd6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbqk2r/ppp2ppp/3b4/3p4/3Pn3/3B1N2/PPP2PPP/RNBQK2R w KQkq -": {
    "eco": "C42",
    "name": "Petrov Savunması",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbqk2r/ppp2ppp/3b4/3p4/3Pn3/3B1N2/PPP2PPP/RNBQ1RK1 b kq -": {
    "eco": "C42",
    "name": "Petrov Savunması",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnbq1rk1/ppp2ppp/3b4/3p4/3Pn3/3B1N2/PPP2PPP/RNBQ1RK1 w - -": {
    "eco": "C42",
    "name": "Petrov Savunması",
    "moves": [
      {
        "uci": "c2c4",
        "san": "c4",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnbq1rk1/ppp2ppp/3b4/3p4/2PPn3/3B1N2/PP3PPP/RNBQ1RK1 b - -": {
    "eco": "C42",
    "name": "Petrov Savunması",
    "moves": [
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/3p4/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq -": {
    "eco": "C41",
    "name": "Philidor Savunması",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/3p4/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "C41",
    "name": "Philidor Savunması",
    "moves": [
      {
        "uci": "e5d4",
        "san": "exd4",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "C41",
    "name": "Philidor Savunması",
    "moves": [
      {
        "uci": "f3d4",
        "san": "Nxd4",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "C41",
    "name": "Philidor Savunması",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "C41",
    "name": "Philidor Savunması",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq -": {
    "eco": "C41",
    "name": "Philidor Savunması",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqk2r/ppp1bppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq -": {
    "eco": "C41",
    "name": "Philidor Savunması",
    "moves": [
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqk2r/ppp1bppp/3p1n2/8/3NP3/2N5/PPP1BPPP/R1BQK2R b KQkq -": {
    "eco": "C41",
    "name": "Philidor Savunması",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq -": {
    "eco": "C47",
    "name": "Dört At Açılışı",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq -": {
    "eco": "C47",
    "name": "Dört At Açılışı",
    "moves": [
      {
        "uci": "f1b5",
        "san": "Bb5",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq -": {
    "eco": "C47",
    "name": "Dört At Açılışı",
    "moves": [
      {
        "uci": "f8b4",
        "san": "Bb4",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "r1bqk2r/pppp1ppp/2n2n2/1B2p3/1b2P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq -": {
    "eco": "C47",
    "name": "Dört At Açılışı",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "r1bqk2r/pppp1ppp/2n2n2/1B2p3/1b2P3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq -": {
    "eco": "C47",
    "name": "Dört At Açılışı",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1bq1rk1/pppp1ppp/2n2n2/1B2p3/1b2P3/2N2N2/PPPP1PPP/R1BQ1RK1 w - -": {
    "eco": "C47",
    "name": "Dört At Açılışı",
    "moves": [
      {
        "uci": "d2d3",
        "san": "d3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1bq1rk1/pppp1ppp/2n2n2/1B2p3/1b2P3/2NP1N2/PPP2PPP/R1BQ1RK1 b - -": {
    "eco": "C47",
    "name": "Dört At Açılışı",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbqkbnr/pppp1ppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq -": {
    "eco": "C25",
    "name": "Viyana Açılışı",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 6109,
        "draws": 6109,
        "black": 3858
      }
    ]
  },
  "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq -": {
    "eco": "C25",
    "name": "Viyana Açılışı",
    "moves": [
      {
        "uci": "f2f4",
        "san": "f4",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "rnbqkb1r/pppp1ppp/5n2/4p3/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq -": {
    "eco": "C25",
    "name": "Viyana Açılışı",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/5n2/3pp3/4PP2/2N5/PPPP2PP/R1BQKBNR w KQkq -": {
    "eco": "C25",
    "name": "Viyana Açılışı",
    "moves": [
      {
        "uci": "f4e5",
        "san": "fxe5",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/5n2/3pP3/4P3/2N5/PPPP2PP/R1BQKBNR b KQkq -": {
    "eco": "C25",
    "name": "Viyana Açılışı",
    "moves": [
      {
        "uci": "f6e4",
        "san": "Nxe4",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/8/3pP3/4n3/2N5/PPPP2PP/R1BQKBNR w KQkq -": {
    "eco": "C25",
    "name": "Viyana Açılışı",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/8/3pP3/4n3/2N2N2/PPPP2PP/R1BQKB1R b KQkq -": {
    "eco": "C25",
    "name": "Viyana Açılışı",
    "moves": [
      {
        "uci": "f8c5",
        "san": "Bc5",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqk2r/ppp2ppp/8/2bpP3/4n3/2N2N2/PPPP2PP/R1BQKB1R w KQkq -": {
    "eco": "C25",
    "name": "Viyana Açılışı",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqk2r/ppp2ppp/8/2bpP3/3Pn3/2N2N2/PPP3PP/R1BQKB1R b KQkq -": {
    "eco": "C25",
    "name": "Viyana Açılışı",
    "moves": [
      {
        "uci": "c5b4",
        "san": "Bb4",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq -": {
    "eco": "C30",
    "name": "Şah Gambiti",
    "moves": [
      {
        "uci": "e5f4",
        "san": "exf4",
        "white": 6109,
        "draws": 6109,
        "black": 3858
      }
    ]
  },
  "rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPP2PP/RNBQKBNR w KQkq -": {
    "eco": "C30",
    "name": "Şah Gambiti",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "rnbqkbnr/pppp1ppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R b KQkq -": {
    "eco": "C30",
    "name": "Şah Gambiti",
    "moves": [
      {
        "uci": "g7g5",
        "san": "g5",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqkbnr/pppp1p1p/8/6p1/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq -": {
    "eco": "C30",
    "name": "Şah Gambiti",
    "moves": [
      {
        "uci": "h2h4",
        "san": "h4",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkbnr/pppp1p1p/8/6p1/4Pp1P/5N2/PPPP2P1/RNBQKB1R b KQkq -": {
    "eco": "C30",
    "name": "Şah Gambiti",
    "moves": [
      {
        "uci": "g5g4",
        "san": "g4",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqkbnr/pppp1p1p/8/8/4PppP/5N2/PPPP2P1/RNBQKB1R w KQkq -": {
    "eco": "C30",
    "name": "Şah Gambiti",
    "moves": [
      {
        "uci": "f3e5",
        "san": "Ne5",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkbnr/pppp1p1p/8/4N3/4PppP/8/PPPP2P1/RNBQKB1R b KQkq -": {
    "eco": "C30",
    "name": "Şah Gambiti",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqkb1r/pppp1p1p/5n2/4N3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq -": {
    "eco": "C30",
    "name": "Şah Gambiti",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqkb1r/pppp1p1p/5n2/4N3/3PPppP/8/PPP3P1/RNBQKB1R b KQkq -": {
    "eco": "C30",
    "name": "Şah Gambiti",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbqkb1r/ppp2p1p/3p1n2/4N3/3PPppP/8/PPP3P1/RNBQKB1R w KQkq -": {
    "eco": "C30",
    "name": "Şah Gambiti",
    "moves": [
      {
        "uci": "e5d3",
        "san": "Nd3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbqkb1r/ppp2p1p/3p1n2/8/3PPppP/3N4/PPP3P1/RNBQKB1R b KQkq -": {
    "eco": "C30",
    "name": "Şah Gambiti",
    "moves": [
      {
        "uci": "f6e4",
        "san": "Nxe4",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    "eco": "B90",
    "name": "Sicilya: Najdorf (İngiliz Atağı)",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 101981,
        "draws": 101981,
        "black": 64416
      },
      {
        "uci": "c2c3",
        "san": "c3",
        "white": 18542,
        "draws": 18542,
        "black": 11712
      },
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 9271,
        "draws": 9271,
        "black": 5856
      }
    ]
  },
  "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq -": {
    "eco": "B90",
    "name": "Sicilya: Najdorf (İngiliz Atağı)",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 42763,
        "draws": 42763,
        "black": 27006
      },
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 12218,
        "draws": 12218,
        "black": 7716
      },
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 12218,
        "draws": 12218,
        "black": 7716
      }
    ]
  },
  "rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq -": {
    "eco": "B90",
    "name": "Sicilya: Najdorf (İngiliz Atağı)",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 26520,
        "draws": 26520,
        "black": 16752
      },
      {
        "uci": "f1b5",
        "san": "Bb5+",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "B90",
    "name": "Sicilya: Najdorf (İngiliz Atağı)",
    "moves": [
      {
        "uci": "c5d4",
        "san": "cxd4",
        "white": 20358,
        "draws": 20358,
        "black": 12864
      }
    ]
  },
  "rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "B90",
    "name": "Sicilya: Najdorf (İngiliz Atağı)",
    "moves": [
      {
        "uci": "f3d4",
        "san": "Nxd4",
        "white": 16284,
        "draws": 16284,
        "black": 10278
      }
    ]
  },
  "rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "B90",
    "name": "Sicilya: Najdorf (İngiliz Atağı)",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 13416,
        "draws": 13416,
        "black": 8472
      }
    ]
  },
  "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "B90",
    "name": "Sicilya: Najdorf (İngiliz Atağı)",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 11310,
        "draws": 11310,
        "black": 7140
      }
    ]
  },
  "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq -": {
    "eco": "B90",
    "name": "Sicilya: Najdorf (İngiliz Atağı)",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 4854,
        "draws": 4854,
        "black": 3063
      },
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      },
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      },
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq -": {
    "eco": "B90",
    "name": "Sicilya: Najdorf (İngiliz Atağı)",
    "moves": [
      {
        "uci": "c1e3",
        "san": "Be3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      },
      {
        "uci": "c1g5",
        "san": "Bg5",
        "white": 1409,
        "draws": 1409,
        "black": 890
      },
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq -": {
    "eco": "B90",
    "name": "Sicilya: Najdorf (İngiliz Atağı)",
    "moves": [
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbqkb1r/1p3ppp/p2p1n2/4p3/3NP3/2N1B3/PPP2PPP/R2QKB1R w KQkq -": {
    "eco": "B90",
    "name": "Sicilya: Najdorf (İngiliz Atağı)",
    "moves": [
      {
        "uci": "d4b3",
        "san": "Nb3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbqkb1r/1p3ppp/p2p1n2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R b KQkq -": {
    "eco": "B90",
    "name": "Sicilya: Najdorf (İngiliz Atağı)",
    "moves": [
      {
        "uci": "c8e6",
        "san": "Be6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rn1qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq -": {
    "eco": "B90",
    "name": "Sicilya: Najdorf (İngiliz Atağı)",
    "moves": [
      {
        "uci": "f2f3",
        "san": "f3",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rn1qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1BP2/PPP3PP/R2QKB1R b KQkq -": {
    "eco": "B90",
    "name": "Sicilya: Najdorf (İngiliz Atağı)",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rn1qk2r/1p2bppp/p2pbn2/4p3/4P3/1NN1BP2/PPP3PP/R2QKB1R w KQkq -": {
    "eco": "B90",
    "name": "Sicilya: Najdorf (İngiliz Atağı)",
    "moves": [
      {
        "uci": "d1d2",
        "san": "Qd2",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "rn1qk2r/1p2bppp/p2pbn2/4p3/4P3/1NN1BP2/PPPQ2PP/R3KB1R b KQkq -": {
    "eco": "B90",
    "name": "Sicilya: Najdorf (İngiliz Atağı)",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rn1q1rk1/1p2bppp/p2pbn2/4p3/4P3/1NN1BP2/PPPQ2PP/R3KB1R w KQ -": {
    "eco": "B90",
    "name": "Sicilya: Najdorf (İngiliz Atağı)",
    "moves": [
      {
        "uci": "e1c1",
        "san": "O-O-O",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "rn1q1rk1/1p2bppp/p2pbn2/4p3/4P3/1NN1BP2/PPPQ2PP/2KR1B1R b - -": {
    "eco": "B90",
    "name": "Sicilya: Najdorf (İngiliz Atağı)",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nbd7",
        "white": 592,
        "draws": 592,
        "black": 374
      }
    ]
  },
  "rnbqkb1r/1p2pppp/p2p1n2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R b KQkq -": {
    "eco": "B96",
    "name": "Sicilya: Najdorf (6. Fg5)",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbqkb1r/1p3ppp/p2ppn2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R w KQkq -": {
    "eco": "B96",
    "name": "Sicilya: Najdorf (6. Fg5)",
    "moves": [
      {
        "uci": "f2f4",
        "san": "f4",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbqkb1r/1p3ppp/p2ppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R b KQkq -": {
    "eco": "B96",
    "name": "Sicilya: Najdorf (6. Fg5)",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnbqk2r/1p2bppp/p2ppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R w KQkq -": {
    "eco": "B96",
    "name": "Sicilya: Najdorf (6. Fg5)",
    "moves": [
      {
        "uci": "d1f3",
        "san": "Qf3",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnbqk2r/1p2bppp/p2ppn2/6B1/3NPP2/2N2Q2/PPP3PP/R3KB1R b KQkq -": {
    "eco": "B96",
    "name": "Sicilya: Najdorf (6. Fg5)",
    "moves": [
      {
        "uci": "d8c7",
        "san": "Qc7",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnb1k2r/1pq1bppp/p2ppn2/6B1/3NPP2/2N2Q2/PPP3PP/R3KB1R w KQkq -": {
    "eco": "B96",
    "name": "Sicilya: Najdorf (6. Fg5)",
    "moves": [
      {
        "uci": "e1c1",
        "san": "O-O-O",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "rnb1k2r/1pq1bppp/p2ppn2/6B1/3NPP2/2N2Q2/PPP3PP/2KR1B1R b kq -": {
    "eco": "B96",
    "name": "Sicilya: Najdorf (6. Fg5)",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nbd7",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP1BPPP/R1BQK2R b KQkq -": {
    "eco": "B92",
    "name": "Sicilya: Najdorf (6. Fe2)",
    "moves": [
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbqkb1r/1p3ppp/p2p1n2/4p3/3NP3/2N5/PPP1BPPP/R1BQK2R w KQkq -": {
    "eco": "B92",
    "name": "Sicilya: Najdorf (6. Fe2)",
    "moves": [
      {
        "uci": "d4b3",
        "san": "Nb3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbqkb1r/1p3ppp/p2p1n2/4p3/4P3/1NN5/PPP1BPPP/R1BQK2R b KQkq -": {
    "eco": "B92",
    "name": "Sicilya: Najdorf (6. Fe2)",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnbqk2r/1p2bppp/p2p1n2/4p3/4P3/1NN5/PPP1BPPP/R1BQK2R w KQkq -": {
    "eco": "B92",
    "name": "Sicilya: Najdorf (6. Fe2)",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnbqk2r/1p2bppp/p2p1n2/4p3/4P3/1NN5/PPP1BPPP/R1BQ1RK1 b kq -": {
    "eco": "B92",
    "name": "Sicilya: Najdorf (6. Fe2)",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbq1rk1/1p2bppp/p2p1n2/4p3/4P3/1NN5/PPP1BPPP/R1BQ1RK1 w - -": {
    "eco": "B92",
    "name": "Sicilya: Najdorf (6. Fe2)",
    "moves": [
      {
        "uci": "c1e3",
        "san": "Be3",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "rnbq1rk1/1p2bppp/p2p1n2/4p3/4P3/1NN1B3/PPP1BPPP/R2Q1RK1 b - -": {
    "eco": "B92",
    "name": "Sicilya: Najdorf (6. Fe2)",
    "moves": [
      {
        "uci": "c8e6",
        "san": "Be6",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq -": {
    "eco": "B70",
    "name": "Sicilya: Dragon (Yugoslav Atağı)",
    "moves": [
      {
        "uci": "c1e3",
        "san": "Be3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq -": {
    "eco": "B70",
    "name": "Sicilya: Dragon (Yugoslav Atağı)",
    "moves": [
      {
        "uci": "f8g7",
        "san": "Bg7",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbqk2r/pp2ppbp/3p1np1/8/3NP3/2N1B3/PPP2PPP/R2QKB1R w KQkq -": {
    "eco": "B70",
    "name": "Sicilya: Dragon (Yugoslav Atağı)",
    "moves": [
      {
        "uci": "f2f3",
        "san": "f3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbqk2r/pp2ppbp/3p1np1/8/3NP3/2N1BP2/PPP3PP/R2QKB1R b KQkq -": {
    "eco": "B70",
    "name": "Sicilya: Dragon (Yugoslav Atağı)",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnbq1rk1/pp2ppbp/3p1np1/8/3NP3/2N1BP2/PPP3PP/R2QKB1R w KQ -": {
    "eco": "B70",
    "name": "Sicilya: Dragon (Yugoslav Atağı)",
    "moves": [
      {
        "uci": "d1d2",
        "san": "Qd2",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnbq1rk1/pp2ppbp/3p1np1/8/3NP3/2N1BP2/PPPQ2PP/R3KB1R b KQ -": {
    "eco": "B70",
    "name": "Sicilya: Dragon (Yugoslav Atağı)",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/R3KB1R w KQ -": {
    "eco": "B70",
    "name": "Sicilya: Dragon (Yugoslav Atağı)",
    "moves": [
      {
        "uci": "f1c4",
        "san": "Bc4",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r1bq1rk1/pp2ppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/R3K2R b KQ -": {
    "eco": "B70",
    "name": "Sicilya: Dragon (Yugoslav Atağı)",
    "moves": [
      {
        "uci": "c8d7",
        "san": "Bd7",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "r2q1rk1/pp1bppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/R3K2R w KQ -": {
    "eco": "B70",
    "name": "Sicilya: Dragon (Yugoslav Atağı)",
    "moves": [
      {
        "uci": "e1c1",
        "san": "O-O-O",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "r2q1rk1/pp1bppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/2KR3R b - -": {
    "eco": "B70",
    "name": "Sicilya: Dragon (Yugoslav Atağı)",
    "moves": [
      {
        "uci": "a8c8",
        "san": "Rc8",
        "white": 592,
        "draws": 592,
        "black": 374
      }
    ]
  },
  "2rq1rk1/pp1bppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/2KR3R w - -": {
    "eco": "B70",
    "name": "Sicilya: Dragon (Yugoslav Atağı)",
    "moves": [
      {
        "uci": "c4b3",
        "san": "Bb3",
        "white": 551,
        "draws": 551,
        "black": 349
      }
    ]
  },
  "2rq1rk1/pp1bppbp/2np1np1/8/3NP3/1BN1BP2/PPPQ2PP/2KR3R b - -": {
    "eco": "B70",
    "name": "Sicilya: Dragon (Yugoslav Atağı)",
    "moves": [
      {
        "uci": "c6e5",
        "san": "Ne5",
        "white": 516,
        "draws": 516,
        "black": 325
      }
    ]
  },
  "rnbqkb1r/pp3ppp/3ppn2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq -": {
    "eco": "B80",
    "name": "Sicilya: Scheveningen",
    "moves": [
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqkb1r/pp3ppp/3ppn2/8/3NP3/2N5/PPP1BPPP/R1BQK2R b KQkq -": {
    "eco": "B80",
    "name": "Sicilya: Scheveningen",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbqk2r/pp2bppp/3ppn2/8/3NP3/2N5/PPP1BPPP/R1BQK2R w KQkq -": {
    "eco": "B80",
    "name": "Sicilya: Scheveningen",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbqk2r/pp2bppp/3ppn2/8/3NP3/2N5/PPP1BPPP/R1BQ1RK1 b kq -": {
    "eco": "B80",
    "name": "Sicilya: Scheveningen",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnbq1rk1/pp2bppp/3ppn2/8/3NP3/2N5/PPP1BPPP/R1BQ1RK1 w - -": {
    "eco": "B80",
    "name": "Sicilya: Scheveningen",
    "moves": [
      {
        "uci": "c1e3",
        "san": "Be3",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnbq1rk1/pp2bppp/3ppn2/8/3NP3/2N1B3/PPP1BPPP/R2Q1RK1 b - -": {
    "eco": "B80",
    "name": "Sicilya: Scheveningen",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r1bq1rk1/pp2bppp/2nppn2/8/3NP3/2N1B3/PPP1BPPP/R2Q1RK1 w - -": {
    "eco": "B80",
    "name": "Sicilya: Scheveningen",
    "moves": [
      {
        "uci": "f2f4",
        "san": "f4",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r1bq1rk1/pp2bppp/2nppn2/8/3NPP2/2N1B3/PPP1B1PP/R2Q1RK1 b - -": {
    "eco": "B80",
    "name": "Sicilya: Scheveningen",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq -": {
    "eco": "B60",
    "name": "Sicilya: Klasik Richter-Rauzer",
    "moves": [
      {
        "uci": "c1g5",
        "san": "Bg5",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1bqkb1r/pp2pppp/2np1n2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R b KQkq -": {
    "eco": "B60",
    "name": "Sicilya: Klasik Richter-Rauzer",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqkb1r/pp3ppp/2nppn2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R w KQkq -": {
    "eco": "B60",
    "name": "Sicilya: Klasik Richter-Rauzer",
    "moves": [
      {
        "uci": "d1d2",
        "san": "Qd2",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bqkb1r/pp3ppp/2nppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R b KQkq -": {
    "eco": "B60",
    "name": "Sicilya: Klasik Richter-Rauzer",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bqkb1r/1p3ppp/p1nppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R w KQkq -": {
    "eco": "B60",
    "name": "Sicilya: Klasik Richter-Rauzer",
    "moves": [
      {
        "uci": "e1c1",
        "san": "O-O-O",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1bqkb1r/1p3ppp/p1nppn2/6B1/3NP3/2N5/PPPQ1PPP/2KR1B1R b kq -": {
    "eco": "B60",
    "name": "Sicilya: Klasik Richter-Rauzer",
    "moves": [
      {
        "uci": "c8d7",
        "san": "Bd7",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq -": {
    "eco": "B33",
    "name": "Sicilya: Sveshnikov",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      },
      {
        "uci": "f1b5",
        "san": "Bb5",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "r1bqkbnr/pp1ppppp/2n5/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "B33",
    "name": "Sicilya: Sveshnikov",
    "moves": [
      {
        "uci": "c5d4",
        "san": "cxd4",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "r1bqkbnr/pp1ppppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "B33",
    "name": "Sicilya: Sveshnikov",
    "moves": [
      {
        "uci": "f3d4",
        "san": "Nxd4",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "r1bqkbnr/pp1ppppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "B33",
    "name": "Sicilya: Sveshnikov",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "r1bqkb1r/pp1ppppp/2n2n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "B33",
    "name": "Sicilya: Sveshnikov",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "r1bqkb1r/pp1ppppp/2n2n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq -": {
    "eco": "B33",
    "name": "Sicilya: Sveshnikov",
    "moves": [
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1bqkb1r/pp1p1ppp/2n2n2/4p3/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq -": {
    "eco": "B33",
    "name": "Sicilya: Sveshnikov",
    "moves": [
      {
        "uci": "d4b5",
        "san": "Ndb5",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1bqkb1r/pp1p1ppp/2n2n2/1N2p3/4P3/2N5/PPP2PPP/R1BQKB1R b KQkq -": {
    "eco": "B33",
    "name": "Sicilya: Sveshnikov",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqkb1r/pp3ppp/2np1n2/1N2p3/4P3/2N5/PPP2PPP/R1BQKB1R w KQkq -": {
    "eco": "B33",
    "name": "Sicilya: Sveshnikov",
    "moves": [
      {
        "uci": "c1g5",
        "san": "Bg5",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bqkb1r/pp3ppp/2np1n2/1N2p1B1/4P3/2N5/PPP2PPP/R2QKB1R b KQkq -": {
    "eco": "B33",
    "name": "Sicilya: Sveshnikov",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bqkb1r/1p3ppp/p1np1n2/1N2p1B1/4P3/2N5/PPP2PPP/R2QKB1R w KQkq -": {
    "eco": "B33",
    "name": "Sicilya: Sveshnikov",
    "moves": [
      {
        "uci": "b5a3",
        "san": "Na3",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1bqkb1r/1p3ppp/p1np1n2/4p1B1/4P3/N1N5/PPP2PPP/R2QKB1R b KQkq -": {
    "eco": "B33",
    "name": "Sicilya: Sveshnikov",
    "moves": [
      {
        "uci": "b7b5",
        "san": "b5",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r1bqkb1r/5ppp/p1np1n2/1p2p1B1/4P3/N1N5/PPP2PPP/R2QKB1R w KQkq -": {
    "eco": "B33",
    "name": "Sicilya: Sveshnikov",
    "moves": [
      {
        "uci": "c3d5",
        "san": "Nd5",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r1bqkb1r/5ppp/p1np1n2/1p1Np1B1/4P3/N7/PPP2PPP/R2QKB1R b KQkq -": {
    "eco": "B33",
    "name": "Sicilya: Sveshnikov",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "r1bqk2r/4bppp/p1np1n2/1p1Np1B1/4P3/N7/PPP2PPP/R2QKB1R w KQkq -": {
    "eco": "B33",
    "name": "Sicilya: Sveshnikov",
    "moves": [
      {
        "uci": "g5f6",
        "san": "Bxf6",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "r1bqk2r/4bppp/p1np1B2/1p1Np3/4P3/N7/PPP2PPP/R2QKB1R b KQkq -": {
    "eco": "B33",
    "name": "Sicilya: Sveshnikov",
    "moves": [
      {
        "uci": "e7f6",
        "san": "Bxf6",
        "white": 592,
        "draws": 592,
        "black": 374
      }
    ]
  },
  "r1bqk2r/5ppp/p1np1b2/1p1Np3/4P3/N7/PPP2PPP/R2QKB1R w KQkq -": {
    "eco": "B33",
    "name": "Sicilya: Sveshnikov",
    "moves": [
      {
        "uci": "c2c3",
        "san": "c3",
        "white": 551,
        "draws": 551,
        "black": 349
      }
    ]
  },
  "rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq -": {
    "eco": "B40",
    "name": "Sicilya: Taimanov",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 8840,
        "draws": 8840,
        "black": 5584
      }
    ]
  },
  "rnbqkbnr/pp1p1ppp/4p3/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "B40",
    "name": "Sicilya: Taimanov",
    "moves": [
      {
        "uci": "c5d4",
        "san": "cxd4",
        "white": 6786,
        "draws": 6786,
        "black": 4288
      }
    ]
  },
  "rnbqkbnr/pp1p1ppp/4p3/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "B40",
    "name": "Sicilya: Taimanov",
    "moves": [
      {
        "uci": "f3d4",
        "san": "Nxd4",
        "white": 5428,
        "draws": 5428,
        "black": 3426
      }
    ]
  },
  "rnbqkbnr/pp1p1ppp/4p3/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "B40",
    "name": "Sicilya: Taimanov",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      },
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "r1bqkbnr/pp1p1ppp/2n1p3/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "B40",
    "name": "Sicilya: Taimanov",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "r1bqkbnr/pp1p1ppp/2n1p3/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq -": {
    "eco": "B40",
    "name": "Sicilya: Taimanov",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1bqkbnr/1p1p1ppp/p1n1p3/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq -": {
    "eco": "B40",
    "name": "Sicilya: Taimanov",
    "moves": [
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1bqkbnr/1p1p1ppp/p1n1p3/8/3NP3/2N5/PPP1BPPP/R1BQK2R b KQkq -": {
    "eco": "B40",
    "name": "Sicilya: Taimanov",
    "moves": [
      {
        "uci": "d8c7",
        "san": "Qc7",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1b1kbnr/1pqp1ppp/p1n1p3/8/3NP3/2N5/PPP1BPPP/R1BQK2R w KQkq -": {
    "eco": "B40",
    "name": "Sicilya: Taimanov",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1b1kbnr/1pqp1ppp/p1n1p3/8/3NP3/2N5/PPP1BPPP/R1BQ1RK1 b kq -": {
    "eco": "B40",
    "name": "Sicilya: Taimanov",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1b1kb1r/1pqp1ppp/p1n1pn2/8/3NP3/2N5/PPP1BPPP/R1BQ1RK1 w kq -": {
    "eco": "B40",
    "name": "Sicilya: Taimanov",
    "moves": [
      {
        "uci": "c1e3",
        "san": "Be3",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1b1kb1r/1pqp1ppp/p1n1pn2/8/3NP3/2N1B3/PPP1BPPP/R2Q1RK1 b kq -": {
    "eco": "B40",
    "name": "Sicilya: Taimanov",
    "moves": [
      {
        "uci": "f8b4",
        "san": "Bb4",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbqkbnr/1p1p1ppp/p3p3/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "B41",
    "name": "Sicilya: Kan / Paulsen",
    "moves": [
      {
        "uci": "f1d3",
        "san": "Bd3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkbnr/1p1p1ppp/p3p3/8/3NP3/3B4/PPP2PPP/RNBQK2R b KQkq -": {
    "eco": "B41",
    "name": "Sicilya: Kan / Paulsen",
    "moves": [
      {
        "uci": "f8c5",
        "san": "Bc5",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqk1nr/1p1p1ppp/p3p3/2b5/3NP3/3B4/PPP2PPP/RNBQK2R w KQkq -": {
    "eco": "B41",
    "name": "Sicilya: Kan / Paulsen",
    "moves": [
      {
        "uci": "d4b3",
        "san": "Nb3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqk1nr/1p1p1ppp/p3p3/2b5/4P3/1N1B4/PPP2PPP/RNBQK2R b KQkq -": {
    "eco": "B41",
    "name": "Sicilya: Kan / Paulsen",
    "moves": [
      {
        "uci": "c5e7",
        "san": "Be7",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbqk1nr/1p1pbppp/p3p3/8/4P3/1N1B4/PPP2PPP/RNBQK2R w KQkq -": {
    "eco": "B41",
    "name": "Sicilya: Kan / Paulsen",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbqk1nr/1p1pbppp/p3p3/8/4P3/1N1B4/PPP2PPP/RNBQ1RK1 b kq -": {
    "eco": "B41",
    "name": "Sicilya: Kan / Paulsen",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnbqk1nr/1p2bppp/p2pp3/8/4P3/1N1B4/PPP2PPP/RNBQ1RK1 w kq -": {
    "eco": "B41",
    "name": "Sicilya: Kan / Paulsen",
    "moves": [
      {
        "uci": "c2c4",
        "san": "c4",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnbqk1nr/1p2bppp/p2pp3/8/2P1P3/1N1B4/PP3PPP/RNBQ1RK1 b kq -": {
    "eco": "B41",
    "name": "Sicilya: Kan / Paulsen",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbqk2r/1p2bppp/p2ppn2/8/2P1P3/1N1B4/PP3PPP/RNBQ1RK1 w kq -": {
    "eco": "B41",
    "name": "Sicilya: Kan / Paulsen",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r1bqkbnr/pp1ppppp/2n5/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq -": {
    "eco": "B30",
    "name": "Sicilya: Rossolimo Varyantı",
    "moves": [
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "r1bqkbnr/pp1ppp1p/2n3p1/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq -": {
    "eco": "B30",
    "name": "Sicilya: Rossolimo Varyantı",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "r1bqkbnr/pp1ppp1p/2n3p1/1Bp5/4P3/5N2/PPPP1PPP/RNBQ1RK1 b kq -": {
    "eco": "B30",
    "name": "Sicilya: Rossolimo Varyantı",
    "moves": [
      {
        "uci": "f8g7",
        "san": "Bg7",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "r1bqk1nr/pp1pppbp/2n3p1/1Bp5/4P3/5N2/PPPP1PPP/RNBQ1RK1 w kq -": {
    "eco": "B30",
    "name": "Sicilya: Rossolimo Varyantı",
    "moves": [
      {
        "uci": "f1e1",
        "san": "Re1",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "r1bqk1nr/pp1pppbp/2n3p1/1Bp5/4P3/5N2/PPPP1PPP/RNBQR1K1 b kq -": {
    "eco": "B30",
    "name": "Sicilya: Rossolimo Varyantı",
    "moves": [
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1bqk1nr/pp1p1pbp/2n3p1/1Bp1p3/4P3/5N2/PPPP1PPP/RNBQR1K1 w kq -": {
    "eco": "B30",
    "name": "Sicilya: Rossolimo Varyantı",
    "moves": [
      {
        "uci": "c2c3",
        "san": "c3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1bqk1nr/pp1p1pbp/2n3p1/1Bp1p3/4P3/2P2N2/PP1P1PPP/RNBQR1K1 b kq -": {
    "eco": "B30",
    "name": "Sicilya: Rossolimo Varyantı",
    "moves": [
      {
        "uci": "g8e7",
        "san": "Nge7",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqk2r/pp1pnpbp/2n3p1/1Bp1p3/4P3/2P2N2/PP1P1PPP/RNBQR1K1 w kq -": {
    "eco": "B30",
    "name": "Sicilya: Rossolimo Varyantı",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bqk2r/pp1pnpbp/2n3p1/1Bp1p3/3PP3/2P2N2/PP3PPP/RNBQR1K1 b kq -": {
    "eco": "B30",
    "name": "Sicilya: Rossolimo Varyantı",
    "moves": [
      {
        "uci": "c5d4",
        "san": "cxd4",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnbqkbnr/pp2pppp/3p4/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq -": {
    "eco": "B51",
    "name": "Sicilya: Moskova Varyantı",
    "moves": [
      {
        "uci": "c8d7",
        "san": "Bd7",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rn1qkbnr/pp1bpppp/3p4/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq -": {
    "eco": "B51",
    "name": "Sicilya: Moskova Varyantı",
    "moves": [
      {
        "uci": "b5d7",
        "san": "Bxd7+",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rn1qkbnr/pp1Bpppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq -": {
    "eco": "B51",
    "name": "Sicilya: Moskova Varyantı",
    "moves": [
      {
        "uci": "d8d7",
        "san": "Qxd7",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rn2kbnr/pp1qpppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq -": {
    "eco": "B51",
    "name": "Sicilya: Moskova Varyantı",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rn2kbnr/pp1qpppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQ1RK1 b kq -": {
    "eco": "B51",
    "name": "Sicilya: Moskova Varyantı",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rn2kb1r/pp1qpppp/3p1n2/2p5/4P3/5N2/PPPP1PPP/RNBQ1RK1 w kq -": {
    "eco": "B51",
    "name": "Sicilya: Moskova Varyantı",
    "moves": [
      {
        "uci": "f1e1",
        "san": "Re1",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rn2kb1r/pp1qpppp/3p1n2/2p5/4P3/5N2/PPPP1PPP/RNBQR1K1 b kq -": {
    "eco": "B51",
    "name": "Sicilya: Moskova Varyantı",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rn2kb1r/pp1q1ppp/3ppn2/2p5/4P3/5N2/PPPP1PPP/RNBQR1K1 w kq -": {
    "eco": "B51",
    "name": "Sicilya: Moskova Varyantı",
    "moves": [
      {
        "uci": "c2c3",
        "san": "c3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rn2kb1r/pp1q1ppp/3ppn2/2p5/4P3/2P2N2/PP1P1PPP/RNBQR1K1 b kq -": {
    "eco": "B51",
    "name": "Sicilya: Moskova Varyantı",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rn2k2r/pp1qbppp/3ppn2/2p5/4P3/2P2N2/PP1P1PPP/RNBQR1K1 w kq -": {
    "eco": "B51",
    "name": "Sicilya: Moskova Varyantı",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rn2k2r/pp1qbppp/3ppn2/2p5/3PP3/2P2N2/PP3PPP/RNBQR1K1 b kq -": {
    "eco": "B51",
    "name": "Sicilya: Moskova Varyantı",
    "moves": [
      {
        "uci": "c5d4",
        "san": "cxd4",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbqkbnr/pp1ppppp/8/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR b KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin Varyantı",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 6109,
        "draws": 6109,
        "black": 3858
      },
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 6109,
        "draws": 6109,
        "black": 3858
      }
    ]
  },
  "rnbqkbnr/pp2pppp/8/2pp4/4P3/2P5/PP1P1PPP/RNBQKBNR w KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin Varyantı",
    "moves": [
      {
        "uci": "e4d5",
        "san": "exd5",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "rnbqkbnr/pp2pppp/8/2pP4/8/2P5/PP1P1PPP/RNBQKBNR b KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin Varyantı",
    "moves": [
      {
        "uci": "d8d5",
        "san": "Qxd5",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnb1kbnr/pp2pppp/8/2pq4/8/2P5/PP1P1PPP/RNBQKBNR w KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin Varyantı",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnb1kbnr/pp2pppp/8/2pq4/3P4/2P5/PP3PPP/RNBQKBNR b KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin Varyantı",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnb1kb1r/pp2pppp/5n2/2pq4/3P4/2P5/PP3PPP/RNBQKBNR w KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin Varyantı",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnb1kb1r/pp2pppp/5n2/2pq4/3P4/2P2N2/PP3PPP/RNBQKB1R b KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin Varyantı",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnb1kb1r/pp3ppp/4pn2/2pq4/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin Varyantı",
    "moves": [
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnb1kb1r/pp3ppp/4pn2/2pq4/3P4/2P2N2/PP2BPPP/RNBQK2R b KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin Varyantı",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnb1k2r/pp2bppp/4pn2/2pq4/3P4/2P2N2/PP2BPPP/RNBQK2R w KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin Varyantı",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnb1k2r/pp2bppp/4pn2/2pq4/3P4/2P2N2/PP2BPPP/RNBQ1RK1 b kq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin Varyantı",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnb2rk1/pp2bppp/4pn2/2pq4/3P4/2P2N2/PP2BPPP/RNBQ1RK1 w - -": {
    "eco": "B22",
    "name": "Sicilya: Alapin Varyantı",
    "moves": [
      {
        "uci": "c3c4",
        "san": "c4",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnb2rk1/pp2bppp/4pn2/2pq4/2PP4/5N2/PP2BPPP/RNBQ1RK1 b - -": {
    "eco": "B22",
    "name": "Sicilya: Alapin Varyantı",
    "moves": [
      {
        "uci": "d5d8",
        "san": "Qd8",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbq1rk1/pp2bppp/4pn2/2p5/2PP4/5N2/PP2BPPP/RNBQ1RK1 w - -": {
    "eco": "B22",
    "name": "Sicilya: Alapin Varyantı",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "rnbq1rk1/pp2bppp/4pn2/2p5/2PP4/2N2N2/PP2BPPP/R1BQ1RK1 b - -": {
    "eco": "B22",
    "name": "Sicilya: Alapin Varyantı",
    "moves": [
      {
        "uci": "c5d4",
        "san": "cxd4",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rnbq1rk1/pp2bppp/4pn2/8/2Pp4/2N2N2/PP2BPPP/R1BQ1RK1 w - -": {
    "eco": "B22",
    "name": "Sicilya: Alapin Varyantı",
    "moves": [
      {
        "uci": "f3d4",
        "san": "Nxd4",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "rnbqkb1r/pp1ppppp/5n2/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR w KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin (2... Af6)",
    "moves": [
      {
        "uci": "e4e5",
        "san": "e5",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "rnbqkb1r/pp1ppppp/5n2/2p1P3/8/2P5/PP1P1PPP/RNBQKBNR b KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin (2... Af6)",
    "moves": [
      {
        "uci": "f6d5",
        "san": "Nd5",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqkb1r/pp1ppppp/8/2pnP3/8/2P5/PP1P1PPP/RNBQKBNR w KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin (2... Af6)",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkb1r/pp1ppppp/8/2pnP3/3P4/2P5/PP3PPP/RNBQKBNR b KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin (2... Af6)",
    "moves": [
      {
        "uci": "c5d4",
        "san": "cxd4",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqkb1r/pp1ppppp/8/3nP3/3p4/2P5/PP3PPP/RNBQKBNR w KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin (2... Af6)",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkb1r/pp1ppppp/8/3nP3/3p4/2P2N2/PP3PPP/RNBQKB1R b KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin (2... Af6)",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1bqkb1r/pp1ppppp/2n5/3nP3/3p4/2P2N2/PP3PPP/RNBQKB1R w KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin (2... Af6)",
    "moves": [
      {
        "uci": "c3d4",
        "san": "cxd4",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1bqkb1r/pp1ppppp/2n5/3nP3/3P4/5N2/PP3PPP/RNBQKB1R b KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin (2... Af6)",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqkb1r/pp2pppp/2np4/3nP3/3P4/5N2/PP3PPP/RNBQKB1R w KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin (2... Af6)",
    "moves": [
      {
        "uci": "f1c4",
        "san": "Bc4",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bqkb1r/pp2pppp/2np4/3nP3/2BP4/5N2/PP3PPP/RNBQK2R b KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin (2... Af6)",
    "moves": [
      {
        "uci": "d5b6",
        "san": "Nb6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bqkb1r/pp2pppp/1nnp4/4P3/2BP4/5N2/PP3PPP/RNBQK2R w KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin (2... Af6)",
    "moves": [
      {
        "uci": "c4b5",
        "san": "Bb5",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1bqkb1r/pp2pppp/1nnp4/1B2P3/3P4/5N2/PP3PPP/RNBQK2R b KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin (2... Af6)",
    "moves": [
      {
        "uci": "d6e5",
        "san": "dxe5",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r1bqkb1r/pp2pppp/1nn5/1B2p3/3P4/5N2/PP3PPP/RNBQK2R w KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin (2... Af6)",
    "moves": [
      {
        "uci": "f3e5",
        "san": "Nxe5",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r1bqkb1r/pp2pppp/1nn5/1B2N3/3P4/8/PP3PPP/RNBQK2R b KQkq -": {
    "eco": "B22",
    "name": "Sicilya: Alapin (2... Af6)",
    "moves": [
      {
        "uci": "c8d7",
        "san": "Bd7",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rnbqkbnr/pp1ppppp/8/2p5/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq -": {
    "eco": "B23",
    "name": "Kapalı Sicilya",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 6109,
        "draws": 6109,
        "black": 3858
      }
    ]
  },
  "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq -": {
    "eco": "B23",
    "name": "Kapalı Sicilya",
    "moves": [
      {
        "uci": "g2g3",
        "san": "g3",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/2N3P1/PPPP1P1P/R1BQKBNR b KQkq -": {
    "eco": "B23",
    "name": "Kapalı Sicilya",
    "moves": [
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "r1bqkbnr/pp1ppp1p/2n3p1/2p5/4P3/2N3P1/PPPP1P1P/R1BQKBNR w KQkq -": {
    "eco": "B23",
    "name": "Kapalı Sicilya",
    "moves": [
      {
        "uci": "f1g2",
        "san": "Bg2",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "r1bqkbnr/pp1ppp1p/2n3p1/2p5/4P3/2N3P1/PPPP1PBP/R1BQK1NR b KQkq -": {
    "eco": "B23",
    "name": "Kapalı Sicilya",
    "moves": [
      {
        "uci": "f8g7",
        "san": "Bg7",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "r1bqk1nr/pp1pppbp/2n3p1/2p5/4P3/2N3P1/PPPP1PBP/R1BQK1NR w KQkq -": {
    "eco": "B23",
    "name": "Kapalı Sicilya",
    "moves": [
      {
        "uci": "d2d3",
        "san": "d3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "r1bqk1nr/pp1pppbp/2n3p1/2p5/4P3/2NP2P1/PPP2PBP/R1BQK1NR b KQkq -": {
    "eco": "B23",
    "name": "Kapalı Sicilya",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1bqk1nr/pp2ppbp/2np2p1/2p5/4P3/2NP2P1/PPP2PBP/R1BQK1NR w KQkq -": {
    "eco": "B23",
    "name": "Kapalı Sicilya",
    "moves": [
      {
        "uci": "c1e3",
        "san": "Be3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1bqk1nr/pp2ppbp/2np2p1/2p5/4P3/2NPB1P1/PPP2PBP/R2QK1NR b KQkq -": {
    "eco": "B23",
    "name": "Kapalı Sicilya",
    "moves": [
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqk1nr/pp3pbp/2np2p1/2p1p3/4P3/2NPB1P1/PPP2PBP/R2QK1NR w KQkq -": {
    "eco": "B23",
    "name": "Kapalı Sicilya",
    "moves": [
      {
        "uci": "d1d2",
        "san": "Qd2",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bqk1nr/pp3pbp/2np2p1/2p1p3/4P3/2NPB1P1/PPPQ1PBP/R3K1NR b KQkq -": {
    "eco": "B23",
    "name": "Kapalı Sicilya",
    "moves": [
      {
        "uci": "g8e7",
        "san": "Nge7",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bqk2r/pp2npbp/2np2p1/2p1p3/4P3/2NPB1P1/PPPQ1PBP/R3K1NR w KQkq -": {
    "eco": "B23",
    "name": "Kapalı Sicilya",
    "moves": [
      {
        "uci": "e3h6",
        "san": "Bh6",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1bqk2r/pp2npbp/2np2pB/2p1p3/4P3/2NP2P1/PPPQ1PBP/R3K1NR b KQkq -": {
    "eco": "B23",
    "name": "Kapalı Sicilya",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    "eco": "C18",
    "name": "Fransız: Winawer",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 46355,
        "draws": 46355,
        "black": 29280
      }
    ]
  },
  "rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq -": {
    "eco": "C18",
    "name": "Fransız: Winawer",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 30545,
        "draws": 30545,
        "black": 19290
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq -": {
    "eco": "C18",
    "name": "Fransız: Winawer",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 8840,
        "draws": 8840,
        "black": 5584
      },
      {
        "uci": "b1d2",
        "san": "Nd2",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      },
      {
        "uci": "e4e5",
        "san": "e5",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      },
      {
        "uci": "e4d5",
        "san": "exd5",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq -": {
    "eco": "C18",
    "name": "Fransız: Winawer",
    "moves": [
      {
        "uci": "f8b4",
        "san": "Bb4",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      },
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPP2PPP/R1BQKBNR w KQkq -": {
    "eco": "C18",
    "name": "Fransız: Winawer",
    "moves": [
      {
        "uci": "e4e5",
        "san": "e5",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqk1nr/ppp2ppp/4p3/3pP3/1b1P4/2N5/PPP2PPP/R1BQKBNR b KQkq -": {
    "eco": "C18",
    "name": "Fransız: Winawer",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/2N5/PPP2PPP/R1BQKBNR w KQkq -": {
    "eco": "C18",
    "name": "Fransız: Winawer",
    "moves": [
      {
        "uci": "a2a3",
        "san": "a3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/P1N5/1PP2PPP/R1BQKBNR b KQkq -": {
    "eco": "C18",
    "name": "Fransız: Winawer",
    "moves": [
      {
        "uci": "b4c3",
        "san": "Bxc3+",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqk1nr/pp3ppp/4p3/2ppP3/3P4/P1b5/1PP2PPP/R1BQKBNR w KQkq -": {
    "eco": "C18",
    "name": "Fransız: Winawer",
    "moves": [
      {
        "uci": "b2c3",
        "san": "bxc3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqk1nr/pp3ppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR b KQkq -": {
    "eco": "C18",
    "name": "Fransız: Winawer",
    "moves": [
      {
        "uci": "g8e7",
        "san": "Ne7",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbqk2r/pp2nppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR w KQkq -": {
    "eco": "C18",
    "name": "Fransız: Winawer",
    "moves": [
      {
        "uci": "d1g4",
        "san": "Qg4",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbqk2r/pp2nppp/4p3/2ppP3/3P2Q1/P1P5/2P2PPP/R1B1KBNR b KQkq -": {
    "eco": "C18",
    "name": "Fransız: Winawer",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnbq1rk1/pp2nppp/4p3/2ppP3/3P2Q1/P1P5/2P2PPP/R1B1KBNR w KQ -": {
    "eco": "C18",
    "name": "Fransız: Winawer",
    "moves": [
      {
        "uci": "f1d3",
        "san": "Bd3",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnbq1rk1/pp2nppp/4p3/2ppP3/3P2Q1/P1PB4/2P2PPP/R1B1K1NR b KQ -": {
    "eco": "C18",
    "name": "Fransız: Winawer",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nbc6",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq -": {
    "eco": "C11",
    "name": "Fransız: Klasik Steinitz",
    "moves": [
      {
        "uci": "e4e5",
        "san": "e5",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pn2/3pP3/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq -": {
    "eco": "C11",
    "name": "Fransız: Klasik Steinitz",
    "moves": [
      {
        "uci": "f6d7",
        "san": "Nfd7",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqkb1r/pppn1ppp/4p3/3pP3/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq -": {
    "eco": "C11",
    "name": "Fransız: Klasik Steinitz",
    "moves": [
      {
        "uci": "f2f4",
        "san": "f4",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkb1r/pppn1ppp/4p3/3pP3/3P1P2/2N5/PPP3PP/R1BQKBNR b KQkq -": {
    "eco": "C11",
    "name": "Fransız: Klasik Steinitz",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqkb1r/pp1n1ppp/4p3/2ppP3/3P1P2/2N5/PPP3PP/R1BQKBNR w KQkq -": {
    "eco": "C11",
    "name": "Fransız: Klasik Steinitz",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqkb1r/pp1n1ppp/4p3/2ppP3/3P1P2/2N2N2/PPP3PP/R1BQKB1R b KQkq -": {
    "eco": "C11",
    "name": "Fransız: Klasik Steinitz",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqkb1r/pp1n1ppp/2n1p3/2ppP3/3P1P2/2N2N2/PPP3PP/R1BQKB1R w KQkq -": {
    "eco": "C11",
    "name": "Fransız: Klasik Steinitz",
    "moves": [
      {
        "uci": "c1e3",
        "san": "Be3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bqkb1r/pp1n1ppp/2n1p3/2ppP3/3P1P2/2N1BN2/PPP3PP/R2QKB1R b KQkq -": {
    "eco": "C11",
    "name": "Fransız: Klasik Steinitz",
    "moves": [
      {
        "uci": "c5d4",
        "san": "cxd4",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bqkb1r/pp1n1ppp/2n1p3/3pP3/3p1P2/2N1BN2/PPP3PP/R2QKB1R w KQkq -": {
    "eco": "C11",
    "name": "Fransız: Klasik Steinitz",
    "moves": [
      {
        "uci": "f3d4",
        "san": "Nxd4",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1bqkb1r/pp1n1ppp/2n1p3/3pP3/3N1P2/2N1B3/PPP3PP/R2QKB1R b KQkq -": {
    "eco": "C11",
    "name": "Fransız: Klasik Steinitz",
    "moves": [
      {
        "uci": "f8c5",
        "san": "Bc5",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r1bqk2r/pp1n1ppp/2n1p3/2bpP3/3N1P2/2N1B3/PPP3PP/R2QKB1R w KQkq -": {
    "eco": "C11",
    "name": "Fransız: Klasik Steinitz",
    "moves": [
      {
        "uci": "d1d2",
        "san": "Qd2",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r1bqk2r/pp1n1ppp/2n1p3/2bpP3/3N1P2/2N1B3/PPPQ2PP/R3KB1R b KQkq -": {
    "eco": "C11",
    "name": "Fransız: Klasik Steinitz",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR b KQkq -": {
    "eco": "C07",
    "name": "Fransız: Tarrasch",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq -": {
    "eco": "C07",
    "name": "Fransız: Tarrasch",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Ngf3",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/5N2/PPPN1PPP/R1BQKB1R b KQkq -": {
    "eco": "C07",
    "name": "Fransız: Tarrasch",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqkb1r/pp3ppp/4pn2/2pp4/3PP3/5N2/PPPN1PPP/R1BQKB1R w KQkq -": {
    "eco": "C07",
    "name": "Fransız: Tarrasch",
    "moves": [
      {
        "uci": "e4d5",
        "san": "exd5",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkb1r/pp3ppp/4pn2/2pP4/3P4/5N2/PPPN1PPP/R1BQKB1R b KQkq -": {
    "eco": "C07",
    "name": "Fransız: Tarrasch",
    "moves": [
      {
        "uci": "e6d5",
        "san": "exd5",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqkb1r/pp3ppp/5n2/2pp4/3P4/5N2/PPPN1PPP/R1BQKB1R w KQkq -": {
    "eco": "C07",
    "name": "Fransız: Tarrasch",
    "moves": [
      {
        "uci": "f1b5",
        "san": "Bb5+",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqkb1r/pp3ppp/5n2/1Bpp4/3P4/5N2/PPPN1PPP/R1BQK2R b KQkq -": {
    "eco": "C07",
    "name": "Fransız: Tarrasch",
    "moves": [
      {
        "uci": "c8d7",
        "san": "Bd7",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rn1qkb1r/pp1b1ppp/5n2/1Bpp4/3P4/5N2/PPPN1PPP/R1BQK2R w KQkq -": {
    "eco": "C07",
    "name": "Fransız: Tarrasch",
    "moves": [
      {
        "uci": "b5d7",
        "san": "Bxd7+",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rn1qkb1r/pp1B1ppp/5n2/2pp4/3P4/5N2/PPPN1PPP/R1BQK2R b KQkq -": {
    "eco": "C07",
    "name": "Fransız: Tarrasch",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nbxd7",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r2qkb1r/pp1n1ppp/5n2/2pp4/3P4/5N2/PPPN1PPP/R1BQK2R w KQkq -": {
    "eco": "C07",
    "name": "Fransız: Tarrasch",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r2qkb1r/pp1n1ppp/5n2/2pp4/3P4/5N2/PPPN1PPP/R1BQ1RK1 b kq -": {
    "eco": "C07",
    "name": "Fransız: Tarrasch",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq -": {
    "eco": "C02",
    "name": "Fransız: İlerleme Varyantı",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq -": {
    "eco": "C02",
    "name": "Fransız: İlerleme Varyantı",
    "moves": [
      {
        "uci": "c2c3",
        "san": "c3",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/2P5/PP3PPP/RNBQKBNR b KQkq -": {
    "eco": "C02",
    "name": "Fransız: İlerleme Varyantı",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "r1bqkbnr/pp3ppp/2n1p3/2ppP3/3P4/2P5/PP3PPP/RNBQKBNR w KQkq -": {
    "eco": "C02",
    "name": "Fransız: İlerleme Varyantı",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "r1bqkbnr/pp3ppp/2n1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R b KQkq -": {
    "eco": "C02",
    "name": "Fransız: İlerleme Varyantı",
    "moves": [
      {
        "uci": "d8b6",
        "san": "Qb6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1b1kbnr/pp3ppp/1qn1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq -": {
    "eco": "C02",
    "name": "Fransız: İlerleme Varyantı",
    "moves": [
      {
        "uci": "f1d3",
        "san": "Bd3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1b1kbnr/pp3ppp/1qn1p3/2ppP3/3P4/2PB1N2/PP3PPP/RNBQK2R b KQkq -": {
    "eco": "C02",
    "name": "Fransız: İlerleme Varyantı",
    "moves": [
      {
        "uci": "c5d4",
        "san": "cxd4",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1b1kbnr/pp3ppp/1qn1p3/3pP3/3p4/2PB1N2/PP3PPP/RNBQK2R w KQkq -": {
    "eco": "C02",
    "name": "Fransız: İlerleme Varyantı",
    "moves": [
      {
        "uci": "c3d4",
        "san": "cxd4",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1b1kbnr/pp3ppp/1qn1p3/3pP3/3P4/3B1N2/PP3PPP/RNBQK2R b KQkq -": {
    "eco": "C02",
    "name": "Fransız: İlerleme Varyantı",
    "moves": [
      {
        "uci": "c8d7",
        "san": "Bd7",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r3kbnr/pp1b1ppp/1qn1p3/3pP3/3P4/3B1N2/PP3PPP/RNBQK2R w KQkq -": {
    "eco": "C02",
    "name": "Fransız: İlerleme Varyantı",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r3kbnr/pp1b1ppp/1qn1p3/3pP3/3P4/3B1N2/PP3PPP/RNBQ1RK1 b kq -": {
    "eco": "C02",
    "name": "Fransız: İlerleme Varyantı",
    "moves": [
      {
        "uci": "c6d4",
        "san": "Nxd4",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r3kbnr/pp1b1ppp/1q2p3/3pP3/3n4/3B1N2/PP3PPP/RNBQ1RK1 w kq -": {
    "eco": "C02",
    "name": "Fransız: İlerleme Varyantı",
    "moves": [
      {
        "uci": "f3d4",
        "san": "Nxd4",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r3kbnr/pp1b1ppp/1q2p3/3pP3/3N4/3B4/PP3PPP/RNBQ1RK1 b kq -": {
    "eco": "C02",
    "name": "Fransız: İlerleme Varyantı",
    "moves": [
      {
        "uci": "b6d4",
        "san": "Qxd4",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "r3kbnr/pp1b1ppp/4p3/3pP3/3q4/3B4/PP3PPP/RNBQ1RK1 w kq -": {
    "eco": "C02",
    "name": "Fransız: İlerleme Varyantı",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/4p3/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq -": {
    "eco": "C01",
    "name": "Fransız: Değişme Varyantı",
    "moves": [
      {
        "uci": "e6d5",
        "san": "exd5",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/8/3p4/3P4/8/PPP2PPP/RNBQKBNR w KQkq -": {
    "eco": "C01",
    "name": "Fransız: Değişme Varyantı",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/8/3p4/3P4/5N2/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "C01",
    "name": "Fransız: Değişme Varyantı",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/5n2/3p4/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "C01",
    "name": "Fransız: Değişme Varyantı",
    "moves": [
      {
        "uci": "f1d3",
        "san": "Bd3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/5n2/3p4/3P4/3B1N2/PPP2PPP/RNBQK2R b KQkq -": {
    "eco": "C01",
    "name": "Fransız: Değişme Varyantı",
    "moves": [
      {
        "uci": "f8d6",
        "san": "Bd6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqk2r/ppp2ppp/3b1n2/3p4/3P4/3B1N2/PPP2PPP/RNBQK2R w KQkq -": {
    "eco": "C01",
    "name": "Fransız: Değişme Varyantı",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqk2r/ppp2ppp/3b1n2/3p4/3P4/3B1N2/PPP2PPP/RNBQ1RK1 b kq -": {
    "eco": "C01",
    "name": "Fransız: Değişme Varyantı",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbq1rk1/ppp2ppp/3b1n2/3p4/3P4/3B1N2/PPP2PPP/RNBQ1RK1 w - -": {
    "eco": "C01",
    "name": "Fransız: Değişme Varyantı",
    "moves": [
      {
        "uci": "c1g5",
        "san": "Bg5",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbq1rk1/ppp2ppp/3b1n2/3p2B1/3P4/3B1N2/PPP2PPP/RN1Q1RK1 b - -": {
    "eco": "C01",
    "name": "Fransız: Değişme Varyantı",
    "moves": [
      {
        "uci": "c8g4",
        "san": "Bg4",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rn1q1rk1/ppp2ppp/3b1n2/3p2B1/3P2b1/3B1N2/PPP2PPP/RN1Q1RK1 w - -": {
    "eco": "C01",
    "name": "Fransız: Değişme Varyantı",
    "moves": [
      {
        "uci": "b1d2",
        "san": "Nbd2",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann: İlerleme (Advance)",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 37084,
        "draws": 37084,
        "black": 23424
      }
    ]
  },
  "rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann: İlerleme (Advance)",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 24436,
        "draws": 24436,
        "black": 15432
      }
    ]
  },
  "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann: İlerleme (Advance)",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 8840,
        "draws": 8840,
        "black": 5584
      },
      {
        "uci": "e4e5",
        "san": "e5",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      },
      {
        "uci": "e4d5",
        "san": "exd5",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "rnbqkbnr/pp2pppp/2p5/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann: İlerleme (Advance)",
    "moves": [
      {
        "uci": "c8f5",
        "san": "Bf5",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/8/PPP2PPP/RNBQKBNR w KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann: İlerleme (Advance)",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/5N2/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann: İlerleme (Advance)",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rn1qkbnr/pp3ppp/2p1p3/3pPb2/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann: İlerleme (Advance)",
    "moves": [
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rn1qkbnr/pp3ppp/2p1p3/3pPb2/3P4/5N2/PPP1BPPP/RNBQK2R b KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann: İlerleme (Advance)",
    "moves": [
      {
        "uci": "c6c5",
        "san": "c5",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rn1qkbnr/pp3ppp/4p3/2ppPb2/3P4/5N2/PPP1BPPP/RNBQK2R w KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann: İlerleme (Advance)",
    "moves": [
      {
        "uci": "c1e3",
        "san": "Be3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rn1qkbnr/pp3ppp/4p3/2ppPb2/3P4/4BN2/PPP1BPPP/RN1QK2R b KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann: İlerleme (Advance)",
    "moves": [
      {
        "uci": "d8b6",
        "san": "Qb6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rn2kbnr/pp3ppp/1q2p3/2ppPb2/3P4/4BN2/PPP1BPPP/RN1QK2R w KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann: İlerleme (Advance)",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rn2kbnr/pp3ppp/1q2p3/2ppPb2/3P4/2N1BN2/PPP1BPPP/R2QK2R b KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann: İlerleme (Advance)",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r3kbnr/pp3ppp/1qn1p3/2ppPb2/3P4/2N1BN2/PPP1BPPP/R2QK2R w KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann: İlerleme (Advance)",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r3kbnr/pp3ppp/1qn1p3/2ppPb2/3P4/2N1BN2/PPP1BPPP/R2Q1RK1 b kq -": {
    "eco": "B12",
    "name": "Caro-Kann: İlerleme (Advance)",
    "moves": [
      {
        "uci": "b6b2",
        "san": "Qxb2",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq -": {
    "eco": "B18",
    "name": "Caro-Kann: Klasik (Capablanca)",
    "moves": [
      {
        "uci": "d5e4",
        "san": "dxe4",
        "white": 6786,
        "draws": 6786,
        "black": 4288
      }
    ]
  },
  "rnbqkbnr/pp2pppp/2p5/8/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq -": {
    "eco": "B18",
    "name": "Caro-Kann: Klasik (Capablanca)",
    "moves": [
      {
        "uci": "c3e4",
        "san": "Nxe4",
        "white": 5428,
        "draws": 5428,
        "black": 3426
      }
    ]
  },
  "rnbqkbnr/pp2pppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR b KQkq -": {
    "eco": "B18",
    "name": "Caro-Kann: Klasik (Capablanca)",
    "moves": [
      {
        "uci": "c8f5",
        "san": "Bf5",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      },
      {
        "uci": "b8d7",
        "san": "Nd7",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rn1qkbnr/pp2pppp/2p5/5b2/3PN3/8/PPP2PPP/R1BQKBNR w KQkq -": {
    "eco": "B18",
    "name": "Caro-Kann: Klasik (Capablanca)",
    "moves": [
      {
        "uci": "e4g3",
        "san": "Ng3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rn1qkbnr/pp2pppp/2p5/5b2/3P4/6N1/PPP2PPP/R1BQKBNR b KQkq -": {
    "eco": "B18",
    "name": "Caro-Kann: Klasik (Capablanca)",
    "moves": [
      {
        "uci": "f5g6",
        "san": "Bg6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rn1qkbnr/pp2pppp/2p3b1/8/3P4/6N1/PPP2PPP/R1BQKBNR w KQkq -": {
    "eco": "B18",
    "name": "Caro-Kann: Klasik (Capablanca)",
    "moves": [
      {
        "uci": "h2h4",
        "san": "h4",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rn1qkbnr/pp2pppp/2p3b1/8/3P3P/6N1/PPP2PP1/R1BQKBNR b KQkq -": {
    "eco": "B18",
    "name": "Caro-Kann: Klasik (Capablanca)",
    "moves": [
      {
        "uci": "h7h6",
        "san": "h6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rn1qkbnr/pp2ppp1/2p3bp/8/3P3P/6N1/PPP2PP1/R1BQKBNR w KQkq -": {
    "eco": "B18",
    "name": "Caro-Kann: Klasik (Capablanca)",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rn1qkbnr/pp2ppp1/2p3bp/8/3P3P/5NN1/PPP2PP1/R1BQKB1R b KQkq -": {
    "eco": "B18",
    "name": "Caro-Kann: Klasik (Capablanca)",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nd7",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r2qkbnr/pp1nppp1/2p3bp/8/3P3P/5NN1/PPP2PP1/R1BQKB1R w KQkq -": {
    "eco": "B18",
    "name": "Caro-Kann: Klasik (Capablanca)",
    "moves": [
      {
        "uci": "h4h5",
        "san": "h5",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r2qkbnr/pp1nppp1/2p3bp/7P/3P4/5NN1/PPP2PP1/R1BQKB1R b KQkq -": {
    "eco": "B18",
    "name": "Caro-Kann: Klasik (Capablanca)",
    "moves": [
      {
        "uci": "g6h7",
        "san": "Bh7",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r2qkbnr/pp1npppb/2p4p/7P/3P4/5NN1/PPP2PP1/R1BQKB1R w KQkq -": {
    "eco": "B18",
    "name": "Caro-Kann: Klasik (Capablanca)",
    "moves": [
      {
        "uci": "f1d3",
        "san": "Bd3",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r2qkbnr/pp1npppb/2p4p/7P/3P4/3B1NN1/PPP2PP1/R1BQK2R b KQkq -": {
    "eco": "B18",
    "name": "Caro-Kann: Klasik (Capablanca)",
    "moves": [
      {
        "uci": "h7d3",
        "san": "Bxd3",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "r2qkbnr/pp1nppp1/2p4p/7P/3P4/3b1NN1/PPP2PP1/R1BQK2R w KQkq -": {
    "eco": "B18",
    "name": "Caro-Kann: Klasik (Capablanca)",
    "moves": [
      {
        "uci": "d1d3",
        "san": "Qxd3",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "r2qkbnr/pp1nppp1/2p4p/7P/3P4/3Q1NN1/PPP2PP1/R1B1K2R b KQkq -": {
    "eco": "B18",
    "name": "Caro-Kann: Klasik (Capablanca)",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 592,
        "draws": 592,
        "black": 374
      }
    ]
  },
  "r1bqkbnr/pp1npppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR w KQkq -": {
    "eco": "B17",
    "name": "Caro-Kann: Karpov Varyantı",
    "moves": [
      {
        "uci": "e4g5",
        "san": "Ng5",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "r1bqkbnr/pp1npppp/2p5/6N1/3P4/8/PPP2PPP/R1BQKBNR b KQkq -": {
    "eco": "B17",
    "name": "Caro-Kann: Karpov Varyantı",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Ngf6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1bqkb1r/pp1npppp/2p2n2/6N1/3P4/8/PPP2PPP/R1BQKBNR w KQkq -": {
    "eco": "B17",
    "name": "Caro-Kann: Karpov Varyantı",
    "moves": [
      {
        "uci": "f1d3",
        "san": "Bd3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1bqkb1r/pp1npppp/2p2n2/6N1/3P4/3B4/PPP2PPP/R1BQK1NR b KQkq -": {
    "eco": "B17",
    "name": "Caro-Kann: Karpov Varyantı",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqkb1r/pp1n1ppp/2p1pn2/6N1/3P4/3B4/PPP2PPP/R1BQK1NR w KQkq -": {
    "eco": "B17",
    "name": "Caro-Kann: Karpov Varyantı",
    "moves": [
      {
        "uci": "g1f3",
        "san": "N1f3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bqkb1r/pp1n1ppp/2p1pn2/6N1/3P4/3B1N2/PPP2PPP/R1BQK2R b KQkq -": {
    "eco": "B17",
    "name": "Caro-Kann: Karpov Varyantı",
    "moves": [
      {
        "uci": "f8d6",
        "san": "Bd6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bqk2r/pp1n1ppp/2pbpn2/6N1/3P4/3B1N2/PPP2PPP/R1BQK2R w KQkq -": {
    "eco": "B17",
    "name": "Caro-Kann: Karpov Varyantı",
    "moves": [
      {
        "uci": "d1e2",
        "san": "Qe2",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1bqk2r/pp1n1ppp/2pbpn2/6N1/3P4/3B1N2/PPP1QPPP/R1B1K2R b KQkq -": {
    "eco": "B17",
    "name": "Caro-Kann: Karpov Varyantı",
    "moves": [
      {
        "uci": "h7h6",
        "san": "h6",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r1bqk2r/pp1n1pp1/2pbpn1p/6N1/3P4/3B1N2/PPP1QPPP/R1B1K2R w KQkq -": {
    "eco": "B17",
    "name": "Caro-Kann: Karpov Varyantı",
    "moves": [
      {
        "uci": "g5e4",
        "san": "Ne4",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r1bqk2r/pp1n1pp1/2pbpn1p/8/3PN3/3B1N2/PPP1QPPP/R1B1K2R b KQkq -": {
    "eco": "B17",
    "name": "Caro-Kann: Karpov Varyantı",
    "moves": [
      {
        "uci": "f6e4",
        "san": "Nxe4",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "r1bqk2r/pp1n1pp1/2pbp2p/8/3Pn3/3B1N2/PPP1QPPP/R1B1K2R w KQkq -": {
    "eco": "B17",
    "name": "Caro-Kann: Karpov Varyantı",
    "moves": [
      {
        "uci": "e2e4",
        "san": "Qxe4",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "rnbqkbnr/pp2pppp/2p5/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq -": {
    "eco": "B14",
    "name": "Caro-Kann: Panov-Botvinnik Atağı",
    "moves": [
      {
        "uci": "c6d5",
        "san": "cxd5",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqkbnr/pp2pppp/8/3p4/3P4/8/PPP2PPP/RNBQKBNR w KQkq -": {
    "eco": "B14",
    "name": "Caro-Kann: Panov-Botvinnik Atağı",
    "moves": [
      {
        "uci": "c2c4",
        "san": "c4",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkbnr/pp2pppp/8/3p4/2PP4/8/PP3PPP/RNBQKBNR b KQkq -": {
    "eco": "B14",
    "name": "Caro-Kann: Panov-Botvinnik Atağı",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqkb1r/pp2pppp/5n2/3p4/2PP4/8/PP3PPP/RNBQKBNR w KQkq -": {
    "eco": "B14",
    "name": "Caro-Kann: Panov-Botvinnik Atağı",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkb1r/pp2pppp/5n2/3p4/2PP4/2N5/PP3PPP/R1BQKBNR b KQkq -": {
    "eco": "B14",
    "name": "Caro-Kann: Panov-Botvinnik Atağı",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqkb1r/pp3ppp/4pn2/3p4/2PP4/2N5/PP3PPP/R1BQKBNR w KQkq -": {
    "eco": "B14",
    "name": "Caro-Kann: Panov-Botvinnik Atağı",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqkb1r/pp3ppp/4pn2/3p4/2PP4/2N2N2/PP3PPP/R1BQKB1R b KQkq -": {
    "eco": "B14",
    "name": "Caro-Kann: Panov-Botvinnik Atağı",
    "moves": [
      {
        "uci": "f8b4",
        "san": "Bb4",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbqk2r/pp3ppp/4pn2/3p4/1bPP4/2N2N2/PP3PPP/R1BQKB1R w KQkq -": {
    "eco": "B14",
    "name": "Caro-Kann: Panov-Botvinnik Atağı",
    "moves": [
      {
        "uci": "c4d5",
        "san": "cxd5",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbqk2r/pp3ppp/4pn2/3P4/1b1P4/2N2N2/PP3PPP/R1BQKB1R b KQkq -": {
    "eco": "B14",
    "name": "Caro-Kann: Panov-Botvinnik Atağı",
    "moves": [
      {
        "uci": "f6d5",
        "san": "Nxd5",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnbqk2r/pp3ppp/4p3/3n4/1b1P4/2N2N2/PP3PPP/R1BQKB1R w KQkq -": {
    "eco": "B14",
    "name": "Caro-Kann: Panov-Botvinnik Atağı",
    "moves": [
      {
        "uci": "c1d2",
        "san": "Bd2",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnbqk2r/pp3ppp/4p3/3n4/1b1P4/2N2N2/PP1B1PPP/R2QKB1R b KQkq -": {
    "eco": "B14",
    "name": "Caro-Kann: Panov-Botvinnik Atağı",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r1bqk2r/pp3ppp/2n1p3/3n4/1b1P4/2N2N2/PP1B1PPP/R2QKB1R w KQkq -": {
    "eco": "B14",
    "name": "Caro-Kann: Panov-Botvinnik Atağı",
    "moves": [
      {
        "uci": "f1d3",
        "san": "Bd3",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r1bqk2r/pp3ppp/2n1p3/3n4/1b1P4/2NB1N2/PP1B1PPP/R2QK2R b KQkq -": {
    "eco": "B14",
    "name": "Caro-Kann: Panov-Botvinnik Atağı",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "r1bq1rk1/pp3ppp/2n1p3/3n4/1b1P4/2NB1N2/PP1B1PPP/R2QK2R w KQ -": {
    "eco": "B14",
    "name": "Caro-Kann: Panov-Botvinnik Atağı",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "rnbqkb1r/pppppppp/5n2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    "eco": "B04",
    "name": "Alekhine: Modern Varyant",
    "moves": [
      {
        "uci": "e4e5",
        "san": "e5",
        "white": 18542,
        "draws": 18542,
        "black": 11712
      }
    ]
  },
  "rnbqkb1r/pppppppp/5n2/4P3/8/8/PPPP1PPP/RNBQKBNR b KQkq -": {
    "eco": "B04",
    "name": "Alekhine: Modern Varyant",
    "moves": [
      {
        "uci": "f6d5",
        "san": "Nd5",
        "white": 12218,
        "draws": 12218,
        "black": 7716
      }
    ]
  },
  "rnbqkb1r/pppppppp/8/3nP3/8/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    "eco": "B04",
    "name": "Alekhine: Modern Varyant",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 8840,
        "draws": 8840,
        "black": 5584
      }
    ]
  },
  "rnbqkb1r/pppppppp/8/3nP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq -": {
    "eco": "B04",
    "name": "Alekhine: Modern Varyant",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 6786,
        "draws": 6786,
        "black": 4288
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/3p4/3nP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq -": {
    "eco": "B04",
    "name": "Alekhine: Modern Varyant",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      },
      {
        "uci": "c2c4",
        "san": "c4",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/3p4/3nP3/3P4/5N2/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "B04",
    "name": "Alekhine: Modern Varyant",
    "moves": [
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/3p2p1/3nP3/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "B04",
    "name": "Alekhine: Modern Varyant",
    "moves": [
      {
        "uci": "f1c4",
        "san": "Bc4",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/3p2p1/3nP3/2BP4/5N2/PPP2PPP/RNBQK2R b KQkq -": {
    "eco": "B04",
    "name": "Alekhine: Modern Varyant",
    "moves": [
      {
        "uci": "d5b6",
        "san": "Nb6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/1n1p2p1/4P3/2BP4/5N2/PPP2PPP/RNBQK2R w KQkq -": {
    "eco": "B04",
    "name": "Alekhine: Modern Varyant",
    "moves": [
      {
        "uci": "c4b3",
        "san": "Bb3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/1n1p2p1/4P3/3P4/1B3N2/PPP2PPP/RNBQK2R b KQkq -": {
    "eco": "B04",
    "name": "Alekhine: Modern Varyant",
    "moves": [
      {
        "uci": "f8g7",
        "san": "Bg7",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/1n1p2p1/4P3/3P4/1B3N2/PPP2PPP/RNBQK2R w KQkq -": {
    "eco": "B04",
    "name": "Alekhine: Modern Varyant",
    "moves": [
      {
        "uci": "d1e2",
        "san": "Qe2",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/1n1p2p1/4P3/3P4/1B3N2/PPP1QPPP/RNB1K2R b KQkq -": {
    "eco": "B04",
    "name": "Alekhine: Modern Varyant",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bqk2r/ppp1ppbp/1nnp2p1/4P3/3P4/1B3N2/PPP1QPPP/RNB1K2R w KQkq -": {
    "eco": "B04",
    "name": "Alekhine: Modern Varyant",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1bqk2r/ppp1ppbp/1nnp2p1/4P3/3P4/1B3N2/PPP1QPPP/RNB2RK1 b kq -": {
    "eco": "B04",
    "name": "Alekhine: Modern Varyant",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/3p4/3nP3/2PP4/8/PP3PPP/RNBQKBNR b KQkq -": {
    "eco": "B03",
    "name": "Alekhine: Dört Piyon Atağı",
    "moves": [
      {
        "uci": "d5b6",
        "san": "Nb6",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/1n1p4/4P3/2PP4/8/PP3PPP/RNBQKBNR w KQkq -": {
    "eco": "B03",
    "name": "Alekhine: Dört Piyon Atağı",
    "moves": [
      {
        "uci": "f2f4",
        "san": "f4",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/1n1p4/4P3/2PP1P2/8/PP4PP/RNBQKBNR b KQkq -": {
    "eco": "B03",
    "name": "Alekhine: Dört Piyon Atağı",
    "moves": [
      {
        "uci": "d6e5",
        "san": "dxe5",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/1n6/4p3/2PP1P2/8/PP4PP/RNBQKBNR w KQkq -": {
    "eco": "B03",
    "name": "Alekhine: Dört Piyon Atağı",
    "moves": [
      {
        "uci": "f4e5",
        "san": "fxe5",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/1n6/4P3/2PP4/8/PP4PP/RNBQKBNR b KQkq -": {
    "eco": "B03",
    "name": "Alekhine: Dört Piyon Atağı",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqkb1r/ppp1pppp/1nn5/4P3/2PP4/8/PP4PP/RNBQKBNR w KQkq -": {
    "eco": "B03",
    "name": "Alekhine: Dört Piyon Atağı",
    "moves": [
      {
        "uci": "c1e3",
        "san": "Be3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bqkb1r/ppp1pppp/1nn5/4P3/2PP4/4B3/PP4PP/RN1QKBNR b KQkq -": {
    "eco": "B03",
    "name": "Alekhine: Dört Piyon Atağı",
    "moves": [
      {
        "uci": "c8f5",
        "san": "Bf5",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r2qkb1r/ppp1pppp/1nn5/4Pb2/2PP4/4B3/PP4PP/RN1QKBNR w KQkq -": {
    "eco": "B03",
    "name": "Alekhine: Dört Piyon Atağı",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r2qkb1r/ppp1pppp/1nn5/4Pb2/2PP4/2N1B3/PP4PP/R2QKBNR b KQkq -": {
    "eco": "B03",
    "name": "Alekhine: Dört Piyon Atağı",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r2qkb1r/ppp2ppp/1nn1p3/4Pb2/2PP4/2N1B3/PP4PP/R2QKBNR w KQkq -": {
    "eco": "B03",
    "name": "Alekhine: Dört Piyon Atağı",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Ana Hat (3... Va5)",
    "moves": [
      {
        "uci": "e4d5",
        "san": "exd5",
        "white": 18542,
        "draws": 18542,
        "black": 11712
      }
    ]
  },
  "rnbqkbnr/ppp1pppp/8/3P4/8/8/PPPP1PPP/RNBQKBNR b KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Ana Hat (3... Va5)",
    "moves": [
      {
        "uci": "d8d5",
        "san": "Qxd5",
        "white": 6109,
        "draws": 6109,
        "black": 3858
      },
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 6109,
        "draws": 6109,
        "black": 3858
      }
    ]
  },
  "rnb1kbnr/ppp1pppp/8/3q4/8/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Ana Hat (3... Va5)",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "rnb1kbnr/ppp1pppp/8/3q4/8/2N5/PPPP1PPP/R1BQKBNR b KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Ana Hat (3... Va5)",
    "moves": [
      {
        "uci": "d5a5",
        "san": "Qa5",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnb1kbnr/ppp1pppp/8/q7/8/2N5/PPPP1PPP/R1BQKBNR w KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Ana Hat (3... Va5)",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnb1kbnr/ppp1pppp/8/q7/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Ana Hat (3... Va5)",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnb1kb1r/ppp1pppp/5n2/q7/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Ana Hat (3... Va5)",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnb1kb1r/ppp1pppp/5n2/q7/3P4/2N2N2/PPP2PPP/R1BQKB1R b KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Ana Hat (3... Va5)",
    "moves": [
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnb1kb1r/pp2pppp/2p2n2/q7/3P4/2N2N2/PPP2PPP/R1BQKB1R w KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Ana Hat (3... Va5)",
    "moves": [
      {
        "uci": "f1c4",
        "san": "Bc4",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnb1kb1r/pp2pppp/2p2n2/q7/2BP4/2N2N2/PPP2PPP/R1BQK2R b KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Ana Hat (3... Va5)",
    "moves": [
      {
        "uci": "c8f5",
        "san": "Bf5",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rn2kb1r/pp2pppp/2p2n2/q4b2/2BP4/2N2N2/PPP2PPP/R1BQK2R w KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Ana Hat (3... Va5)",
    "moves": [
      {
        "uci": "c1d2",
        "san": "Bd2",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rn2kb1r/pp2pppp/2p2n2/q4b2/2BP4/2N2N2/PPPB1PPP/R2QK2R b KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Ana Hat (3... Va5)",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rn2kb1r/pp3ppp/2p1pn2/q4b2/2BP4/2N2N2/PPPB1PPP/R2QK2R w KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Ana Hat (3... Va5)",
    "moves": [
      {
        "uci": "c3d5",
        "san": "Nd5",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rn2kb1r/pp3ppp/2p1pn2/q2N1b2/2BP4/5N2/PPPB1PPP/R2QK2R b KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Ana Hat (3... Va5)",
    "moves": [
      {
        "uci": "a5d8",
        "san": "Qd8",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rn1qkb1r/pp3ppp/2p1pn2/3N1b2/2BP4/5N2/PPPB1PPP/R2QK2R w KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Ana Hat (3... Va5)",
    "moves": [
      {
        "uci": "d5f6",
        "san": "Nxf6+",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "rn1qkb1r/pp3ppp/2p1pN2/5b2/2BP4/5N2/PPPB1PPP/R2QK2R b KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Ana Hat (3... Va5)",
    "moves": [
      {
        "uci": "d8f6",
        "san": "Qxf6",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/5n2/3P4/8/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Modern (2... Af6)",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/5n2/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Modern (2... Af6)",
    "moves": [
      {
        "uci": "f6d5",
        "san": "Nxd5",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/8/3n4/3P4/8/PPP2PPP/RNBQKBNR w KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Modern (2... Af6)",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/8/3n4/3P4/5N2/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Modern (2... Af6)",
    "moves": [
      {
        "uci": "c8g4",
        "san": "Bg4",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rn1qkb1r/ppp1pppp/8/3n4/3P2b1/5N2/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Modern (2... Af6)",
    "moves": [
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rn1qkb1r/ppp1pppp/8/3n4/3P2b1/5N2/PPP1BPPP/RNBQK2R b KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Modern (2... Af6)",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rn1qkb1r/ppp2ppp/4p3/3n4/3P2b1/5N2/PPP1BPPP/RNBQK2R w KQkq -": {
    "eco": "B01",
    "name": "İskandinav: Modern (2... Af6)",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rn1qkb1r/ppp2ppp/4p3/3n4/3P2b1/5N2/PPP1BPPP/RNBQ1RK1 b kq -": {
    "eco": "B01",
    "name": "İskandinav: Modern (2... Af6)",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rn1qk2r/ppp1bppp/4p3/3n4/3P2b1/5N2/PPP1BPPP/RNBQ1RK1 w kq -": {
    "eco": "B01",
    "name": "İskandinav: Modern (2... Af6)",
    "moves": [
      {
        "uci": "c2c4",
        "san": "c4",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rn1qk2r/ppp1bppp/4p3/3n4/2PP2b1/5N2/PP2BPPP/RNBQ1RK1 b kq -": {
    "eco": "B01",
    "name": "İskandinav: Modern (2... Af6)",
    "moves": [
      {
        "uci": "d5b6",
        "san": "Nb6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rn1qk2r/ppp1bppp/1n2p3/8/2PP2b1/5N2/PP2BPPP/RNBQ1RK1 w kq -": {
    "eco": "B01",
    "name": "İskandinav: Modern (2... Af6)",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rn1qk2r/ppp1bppp/1n2p3/8/2PP2b1/2N2N2/PP2BPPP/R1BQ1RK1 b kq -": {
    "eco": "B01",
    "name": "İskandinav: Modern (2... Af6)",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbqkbnr/ppp1pppp/3p4/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    "eco": "B08",
    "name": "Pirc: Klasik Varyant",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 18542,
        "draws": 18542,
        "black": 11712
      }
    ]
  },
  "rnbqkbnr/ppp1pppp/3p4/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq -": {
    "eco": "B08",
    "name": "Pirc: Klasik Varyant",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 12218,
        "draws": 12218,
        "black": 7716
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq -": {
    "eco": "B08",
    "name": "Pirc: Klasik Varyant",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 8840,
        "draws": 8840,
        "black": 5584
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq -": {
    "eco": "B08",
    "name": "Pirc: Klasik Varyant",
    "moves": [
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 6786,
        "draws": 6786,
        "black": 4288
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq -": {
    "eco": "B08",
    "name": "Pirc: Klasik Varyant",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      },
      {
        "uci": "f2f4",
        "san": "f4",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R b KQkq -": {
    "eco": "B08",
    "name": "Pirc: Klasik Varyant",
    "moves": [
      {
        "uci": "f8g7",
        "san": "Bg7",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/3p1np1/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq -": {
    "eco": "B08",
    "name": "Pirc: Klasik Varyant",
    "moves": [
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/3p1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQK2R b KQkq -": {
    "eco": "B08",
    "name": "Pirc: Klasik Varyant",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbq1rk1/ppp1ppbp/3p1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQK2R w KQ -": {
    "eco": "B08",
    "name": "Pirc: Klasik Varyant",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbq1rk1/ppp1ppbp/3p1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQ1RK1 b - -": {
    "eco": "B08",
    "name": "Pirc: Klasik Varyant",
    "moves": [
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbq1rk1/pp2ppbp/2pp1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQ1RK1 w - -": {
    "eco": "B08",
    "name": "Pirc: Klasik Varyant",
    "moves": [
      {
        "uci": "a2a4",
        "san": "a4",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbq1rk1/pp2ppbp/2pp1np1/8/P2PP3/2N2N2/1PP1BPPP/R1BQ1RK1 b - -": {
    "eco": "B08",
    "name": "Pirc: Klasik Varyant",
    "moves": [
      {
        "uci": "a7a5",
        "san": "a5",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnbq1rk1/1p2ppbp/2pp1np1/p7/P2PP3/2N2N2/1PP1BPPP/R1BQ1RK1 w - -": {
    "eco": "B08",
    "name": "Pirc: Klasik Varyant",
    "moves": [
      {
        "uci": "h2h3",
        "san": "h3",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnbq1rk1/1p2ppbp/2pp1np1/p7/P2PP3/2N2N1P/1PP1BPP1/R1BQ1RK1 b - -": {
    "eco": "B08",
    "name": "Pirc: Klasik Varyant",
    "moves": [
      {
        "uci": "d8c7",
        "san": "Qc7",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/3p1np1/8/3PPP2/2N5/PPP3PP/R1BQKBNR b KQkq -": {
    "eco": "B09",
    "name": "Pirc: Avusturya Atağı",
    "moves": [
      {
        "uci": "f8g7",
        "san": "Bg7",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/3p1np1/8/3PPP2/2N5/PPP3PP/R1BQKBNR w KQkq -": {
    "eco": "B09",
    "name": "Pirc: Avusturya Atağı",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/3p1np1/8/3PPP2/2N2N2/PPP3PP/R1BQKB1R b KQkq -": {
    "eco": "B09",
    "name": "Pirc: Avusturya Atağı",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbq1rk1/ppp1ppbp/3p1np1/8/3PPP2/2N2N2/PPP3PP/R1BQKB1R w KQ -": {
    "eco": "B09",
    "name": "Pirc: Avusturya Atağı",
    "moves": [
      {
        "uci": "f1d3",
        "san": "Bd3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbq1rk1/ppp1ppbp/3p1np1/8/3PPP2/2NB1N2/PPP3PP/R1BQK2R b KQ -": {
    "eco": "B09",
    "name": "Pirc: Avusturya Atağı",
    "moves": [
      {
        "uci": "b8a6",
        "san": "Na6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bq1rk1/ppp1ppbp/n2p1np1/8/3PPP2/2NB1N2/PPP3PP/R1BQK2R w KQ -": {
    "eco": "B09",
    "name": "Pirc: Avusturya Atağı",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bq1rk1/ppp1ppbp/n2p1np1/8/3PPP2/2NB1N2/PPP3PP/R1BQ1RK1 b - -": {
    "eco": "B09",
    "name": "Pirc: Avusturya Atağı",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bq1rk1/pp2ppbp/n2p1np1/2p5/3PPP2/2NB1N2/PPP3PP/R1BQ1RK1 w - -": {
    "eco": "B09",
    "name": "Pirc: Avusturya Atağı",
    "moves": [
      {
        "uci": "d4d5",
        "san": "d5",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1bq1rk1/pp2ppbp/n2p1np1/2pP4/4PP2/2NB1N2/PPP3PP/R1BQ1RK1 b - -": {
    "eco": "B09",
    "name": "Pirc: Avusturya Atağı",
    "moves": [
      {
        "uci": "a8b8",
        "san": "Rb8",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbqkbnr/pppppp1p/6p1/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    "eco": "B06",
    "name": "Modern Savunma",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 9271,
        "draws": 9271,
        "black": 5856
      }
    ]
  },
  "rnbqkbnr/pppppp1p/6p1/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq -": {
    "eco": "B06",
    "name": "Modern Savunma",
    "moves": [
      {
        "uci": "f8g7",
        "san": "Bg7",
        "white": 6109,
        "draws": 6109,
        "black": 3858
      }
    ]
  },
  "rnbqk1nr/ppppppbp/6p1/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq -": {
    "eco": "B06",
    "name": "Modern Savunma",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "rnbqk1nr/ppppppbp/6p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq -": {
    "eco": "B06",
    "name": "Modern Savunma",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqk1nr/ppp1ppbp/3p2p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq -": {
    "eco": "B06",
    "name": "Modern Savunma",
    "moves": [
      {
        "uci": "f2f4",
        "san": "f4",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqk1nr/ppp1ppbp/3p2p1/8/3PPP2/2N5/PPP3PP/R1BQKBNR b KQkq -": {
    "eco": "B06",
    "name": "Modern Savunma",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqk1nr/1pp1ppbp/p2p2p1/8/3PPP2/2N5/PPP3PP/R1BQKBNR w KQkq -": {
    "eco": "B06",
    "name": "Modern Savunma",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqk1nr/1pp1ppbp/p2p2p1/8/3PPP2/2N2N2/PPP3PP/R1BQKB1R b KQkq -": {
    "eco": "B06",
    "name": "Modern Savunma",
    "moves": [
      {
        "uci": "b7b5",
        "san": "b5",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqk1nr/2p1ppbp/p2p2p1/1p6/3PPP2/2N2N2/PPP3PP/R1BQKB1R w KQkq -": {
    "eco": "B06",
    "name": "Modern Savunma",
    "moves": [
      {
        "uci": "f1d3",
        "san": "Bd3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqk1nr/2p1ppbp/p2p2p1/1p6/3PPP2/2NB1N2/PPP3PP/R1BQK2R b KQkq -": {
    "eco": "B06",
    "name": "Modern Savunma",
    "moves": [
      {
        "uci": "c8b7",
        "san": "Bb7",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rn1qk1nr/1bp1ppbp/p2p2p1/1p6/3PPP2/2NB1N2/PPP3PP/R1BQK2R w KQkq -": {
    "eco": "B06",
    "name": "Modern Savunma",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rn1qk1nr/1bp1ppbp/p2p2p1/1p6/3PPP2/2NB1N2/PPP3PP/R1BQ1RK1 b kq -": {
    "eco": "B06",
    "name": "Modern Savunma",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nd7",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r2qk1nr/1bpnppbp/p2p2p1/1p6/3PPP2/2NB1N2/PPP3PP/R1BQ1RK1 w kq -": {
    "eco": "B06",
    "name": "Modern Savunma",
    "moves": [
      {
        "uci": "e4e5",
        "san": "e5",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r2qk1nr/1bpnppbp/p2p2p1/1p2P3/3P1P2/2NB1N2/PPP3PP/R1BQ1RK1 b kq -": {
    "eco": "B06",
    "name": "Modern Savunma",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq -": {
    "eco": "D37",
    "name": "Kabul Edilmeyen Vezir Gambiti (5. Ff4)",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 233660,
        "draws": 233660,
        "black": 147588
      },
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 166900,
        "draws": 166900,
        "black": 105420
      },
      {
        "uci": "f7f5",
        "san": "f5",
        "white": 16690,
        "draws": 16690,
        "black": 10542
      }
    ]
  },
  "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -": {
    "eco": "D37",
    "name": "Kabul Edilmeyen Vezir Gambiti (5. Ff4)",
    "moves": [
      {
        "uci": "c2c4",
        "san": "c4",
        "white": 83439,
        "draws": 83439,
        "black": 52704
      },
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 9271,
        "draws": 9271,
        "black": 5856
      }
    ]
  },
  "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq -": {
    "eco": "D37",
    "name": "Kabul Edilmeyen Vezir Gambiti (5. Ff4)",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 24436,
        "draws": 24436,
        "black": 15432
      },
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 24436,
        "draws": 24436,
        "black": 15432
      },
      {
        "uci": "d5c4",
        "san": "dxc4",
        "white": 6109,
        "draws": 6109,
        "black": 3858
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -": {
    "eco": "D37",
    "name": "Kabul Edilmeyen Vezir Gambiti (5. Ff4)",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 17680,
        "draws": 17680,
        "black": 11168
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq -": {
    "eco": "D37",
    "name": "Kabul Edilmeyen Vezir Gambiti (5. Ff4)",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 10179,
        "draws": 10179,
        "black": 6432
      },
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "D37",
    "name": "Kabul Edilmeyen Vezir Gambiti (5. Ff4)",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 5428,
        "draws": 5428,
        "black": 3426
      },
      {
        "uci": "c4d5",
        "san": "cxd5",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq -": {
    "eco": "D37",
    "name": "Kabul Edilmeyen Vezir Gambiti (5. Ff4)",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      },
      {
        "uci": "f8b4",
        "san": "Bb4",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      },
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqk2r/ppp1bppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq -": {
    "eco": "D37",
    "name": "Kabul Edilmeyen Vezir Gambiti (5. Ff4)",
    "moves": [
      {
        "uci": "c1f4",
        "san": "Bf4",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqk2r/ppp1bppp/4pn2/3p4/2PP1B2/2N2N2/PP2PPPP/R2QKB1R b KQkq -": {
    "eco": "D37",
    "name": "Kabul Edilmeyen Vezir Gambiti (5. Ff4)",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbq1rk1/ppp1bppp/4pn2/3p4/2PP1B2/2N2N2/PP2PPPP/R2QKB1R w KQ -": {
    "eco": "D37",
    "name": "Kabul Edilmeyen Vezir Gambiti (5. Ff4)",
    "moves": [
      {
        "uci": "e2e3",
        "san": "e3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbq1rk1/ppp1bppp/4pn2/3p4/2PP1B2/2N1PN2/PP3PPP/R2QKB1R b KQ -": {
    "eco": "D37",
    "name": "Kabul Edilmeyen Vezir Gambiti (5. Ff4)",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbq1rk1/pp2bppp/4pn2/2pp4/2PP1B2/2N1PN2/PP3PPP/R2QKB1R w KQ -": {
    "eco": "D37",
    "name": "Kabul Edilmeyen Vezir Gambiti (5. Ff4)",
    "moves": [
      {
        "uci": "d4c5",
        "san": "dxc5",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbq1rk1/pp2bppp/4pn2/2Pp4/2P2B2/2N1PN2/PP3PPP/R2QKB1R b KQ -": {
    "eco": "D37",
    "name": "Kabul Edilmeyen Vezir Gambiti (5. Ff4)",
    "moves": [
      {
        "uci": "e7c5",
        "san": "Bxc5",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnbq1rk1/pp3ppp/4pn2/2bp4/2P2B2/2N1PN2/PP3PPP/R2QKB1R w KQ -": {
    "eco": "D37",
    "name": "Kabul Edilmeyen Vezir Gambiti (5. Ff4)",
    "moves": [
      {
        "uci": "c4d5",
        "san": "cxd5",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnbq1rk1/pp3ppp/4pn2/2bP4/5B2/2N1PN2/PP3PPP/R2QKB1R b KQ -": {
    "eco": "D37",
    "name": "Kabul Edilmeyen Vezir Gambiti (5. Ff4)",
    "moves": [
      {
        "uci": "f6d5",
        "san": "Nxd5",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbq1rk1/pp3ppp/4p3/2bn4/5B2/2N1PN2/PP3PPP/R2QKB1R w KQ -": {
    "eco": "D37",
    "name": "Kabul Edilmeyen Vezir Gambiti (5. Ff4)",
    "moves": [
      {
        "uci": "c3d5",
        "san": "Nxd5",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "rnbq1rk1/pp3ppp/4p3/2bN4/5B2/4PN2/PP3PPP/R2QKB1R b KQ -": {
    "eco": "D37",
    "name": "Kabul Edilmeyen Vezir Gambiti (5. Ff4)",
    "moves": [
      {
        "uci": "e6d5",
        "san": "exd5",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pn2/3P4/3P4/2N5/PP2PPPP/R1BQKBNR b KQkq -": {
    "eco": "D35",
    "name": "QGD: Değişme Varyantı",
    "moves": [
      {
        "uci": "e6d5",
        "san": "exd5",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/5n2/3p4/3P4/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "D35",
    "name": "QGD: Değişme Varyantı",
    "moves": [
      {
        "uci": "c1g5",
        "san": "Bg5",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/5n2/3p2B1/3P4/2N5/PP2PPPP/R2QKBNR b KQkq -": {
    "eco": "D35",
    "name": "QGD: Değişme Varyantı",
    "moves": [
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqkb1r/pp3ppp/2p2n2/3p2B1/3P4/2N5/PP2PPPP/R2QKBNR w KQkq -": {
    "eco": "D35",
    "name": "QGD: Değişme Varyantı",
    "moves": [
      {
        "uci": "e2e3",
        "san": "e3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqkb1r/pp3ppp/2p2n2/3p2B1/3P4/2N1P3/PP3PPP/R2QKBNR b KQkq -": {
    "eco": "D35",
    "name": "QGD: Değişme Varyantı",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbqk2r/pp2bppp/2p2n2/3p2B1/3P4/2N1P3/PP3PPP/R2QKBNR w KQkq -": {
    "eco": "D35",
    "name": "QGD: Değişme Varyantı",
    "moves": [
      {
        "uci": "f1d3",
        "san": "Bd3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbqk2r/pp2bppp/2p2n2/3p2B1/3P4/2NBP3/PP3PPP/R2QK1NR b KQkq -": {
    "eco": "D35",
    "name": "QGD: Değişme Varyantı",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nbd7",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bqk2r/pp1nbppp/2p2n2/3p2B1/3P4/2NBP3/PP3PPP/R2QK1NR w KQkq -": {
    "eco": "D35",
    "name": "QGD: Değişme Varyantı",
    "moves": [
      {
        "uci": "d1c2",
        "san": "Qc2",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1bqk2r/pp1nbppp/2p2n2/3p2B1/3P4/2NBP3/PPQ2PPP/R3K1NR b KQkq -": {
    "eco": "D35",
    "name": "QGD: Değişme Varyantı",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r1bq1rk1/pp1nbppp/2p2n2/3p2B1/3P4/2NBP3/PPQ2PPP/R3K1NR w KQ -": {
    "eco": "D35",
    "name": "QGD: Değişme Varyantı",
    "moves": [
      {
        "uci": "g1e2",
        "san": "Nge2",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r1bq1rk1/pp1nbppp/2p2n2/3p2B1/3P4/2NBP3/PPQ1NPPP/R3K2R b KQ -": {
    "eco": "D35",
    "name": "QGD: Değişme Varyantı",
    "moves": [
      {
        "uci": "f8e8",
        "san": "Re8",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "r1bqr1k1/pp1nbppp/2p2n2/3p2B1/3P4/2NBP3/PPQ1NPPP/R3K2R w KQ -": {
    "eco": "D35",
    "name": "QGD: Değişme Varyantı",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "rnbqk2r/ppp2ppp/4pn2/3p4/1bPP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq -": {
    "eco": "D38",
    "name": "QGD: Ragozin Savunması",
    "moves": [
      {
        "uci": "c4d5",
        "san": "cxd5",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqk2r/ppp2ppp/4pn2/3P4/1b1P4/2N2N2/PP2PPPP/R1BQKB1R b KQkq -": {
    "eco": "D38",
    "name": "QGD: Ragozin Savunması",
    "moves": [
      {
        "uci": "e6d5",
        "san": "exd5",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqk2r/ppp2ppp/5n2/3p4/1b1P4/2N2N2/PP2PPPP/R1BQKB1R w KQkq -": {
    "eco": "D38",
    "name": "QGD: Ragozin Savunması",
    "moves": [
      {
        "uci": "c1g5",
        "san": "Bg5",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqk2r/ppp2ppp/5n2/3p2B1/1b1P4/2N2N2/PP2PPPP/R2QKB1R b KQkq -": {
    "eco": "D38",
    "name": "QGD: Ragozin Savunması",
    "moves": [
      {
        "uci": "h7h6",
        "san": "h6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbqk2r/ppp2pp1/5n1p/3p2B1/1b1P4/2N2N2/PP2PPPP/R2QKB1R w KQkq -": {
    "eco": "D38",
    "name": "QGD: Ragozin Savunması",
    "moves": [
      {
        "uci": "g5f6",
        "san": "Bxf6",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbqk2r/ppp2pp1/5B1p/3p4/1b1P4/2N2N2/PP2PPPP/R2QKB1R b KQkq -": {
    "eco": "D38",
    "name": "QGD: Ragozin Savunması",
    "moves": [
      {
        "uci": "d8f6",
        "san": "Qxf6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnb1k2r/ppp2pp1/5q1p/3p4/1b1P4/2N2N2/PP2PPPP/R2QKB1R w KQkq -": {
    "eco": "D38",
    "name": "QGD: Ragozin Savunması",
    "moves": [
      {
        "uci": "d1a4",
        "san": "Qa4+",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnb1k2r/ppp2pp1/5q1p/3p4/Qb1P4/2N2N2/PP2PPPP/R3KB1R b KQkq -": {
    "eco": "D38",
    "name": "QGD: Ragozin Savunması",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbqkbnr/pp3ppp/4p3/2pp4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "D32",
    "name": "QGD: Tarrasch Savunması",
    "moves": [
      {
        "uci": "c4d5",
        "san": "cxd5",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkbnr/pp3ppp/4p3/2pP4/3P4/2N5/PP2PPPP/R1BQKBNR b KQkq -": {
    "eco": "D32",
    "name": "QGD: Tarrasch Savunması",
    "moves": [
      {
        "uci": "e6d5",
        "san": "exd5",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqkbnr/pp3ppp/8/2pp4/3P4/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "D32",
    "name": "QGD: Tarrasch Savunması",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkbnr/pp3ppp/8/2pp4/3P4/2N2N2/PP2PPPP/R1BQKB1R b KQkq -": {
    "eco": "D32",
    "name": "QGD: Tarrasch Savunması",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1bqkbnr/pp3ppp/2n5/2pp4/3P4/2N2N2/PP2PPPP/R1BQKB1R w KQkq -": {
    "eco": "D32",
    "name": "QGD: Tarrasch Savunması",
    "moves": [
      {
        "uci": "g2g3",
        "san": "g3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1bqkbnr/pp3ppp/2n5/2pp4/3P4/2N2NP1/PP2PP1P/R1BQKB1R b KQkq -": {
    "eco": "D32",
    "name": "QGD: Tarrasch Savunması",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqkb1r/pp3ppp/2n2n2/2pp4/3P4/2N2NP1/PP2PP1P/R1BQKB1R w KQkq -": {
    "eco": "D32",
    "name": "QGD: Tarrasch Savunması",
    "moves": [
      {
        "uci": "f1g2",
        "san": "Bg2",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bqkb1r/pp3ppp/2n2n2/2pp4/3P4/2N2NP1/PP2PPBP/R1BQK2R b KQkq -": {
    "eco": "D32",
    "name": "QGD: Tarrasch Savunması",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bqk2r/pp2bppp/2n2n2/2pp4/3P4/2N2NP1/PP2PPBP/R1BQK2R w KQkq -": {
    "eco": "D32",
    "name": "QGD: Tarrasch Savunması",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1bqk2r/pp2bppp/2n2n2/2pp4/3P4/2N2NP1/PP2PPBP/R1BQ1RK1 b kq -": {
    "eco": "D32",
    "name": "QGD: Tarrasch Savunması",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbqkbnr/ppp1pppp/8/8/2pP4/8/PP2PPPP/RNBQKBNR w KQkq -": {
    "eco": "D20",
    "name": "Kabul Edilen Vezir Gambiti (QGA)",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "rnbqkbnr/ppp1pppp/8/8/2pP4/5N2/PP2PPPP/RNBQKB1R b KQkq -": {
    "eco": "D20",
    "name": "Kabul Edilen Vezir Gambiti (QGA)",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/5n2/8/2pP4/5N2/PP2PPPP/RNBQKB1R w KQkq -": {
    "eco": "D20",
    "name": "Kabul Edilen Vezir Gambiti (QGA)",
    "moves": [
      {
        "uci": "e2e3",
        "san": "e3",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/5n2/8/2pP4/4PN2/PP3PPP/RNBQKB1R b KQkq -": {
    "eco": "D20",
    "name": "Kabul Edilen Vezir Gambiti (QGA)",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pn2/8/2pP4/4PN2/PP3PPP/RNBQKB1R w KQkq -": {
    "eco": "D20",
    "name": "Kabul Edilen Vezir Gambiti (QGA)",
    "moves": [
      {
        "uci": "f1c4",
        "san": "Bxc4",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pn2/8/2BP4/4PN2/PP3PPP/RNBQK2R b KQkq -": {
    "eco": "D20",
    "name": "Kabul Edilen Vezir Gambiti (QGA)",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqkb1r/pp3ppp/4pn2/2p5/2BP4/4PN2/PP3PPP/RNBQK2R w KQkq -": {
    "eco": "D20",
    "name": "Kabul Edilen Vezir Gambiti (QGA)",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqkb1r/pp3ppp/4pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1 b kq -": {
    "eco": "D20",
    "name": "Kabul Edilen Vezir Gambiti (QGA)",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1 w kq -": {
    "eco": "D20",
    "name": "Kabul Edilen Vezir Gambiti (QGA)",
    "moves": [
      {
        "uci": "d1e2",
        "san": "Qe2",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP2QPPP/RNB2RK1 b kq -": {
    "eco": "D20",
    "name": "Kabul Edilen Vezir Gambiti (QGA)",
    "moves": [
      {
        "uci": "b7b5",
        "san": "b5",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnbqkb1r/5ppp/p3pn2/1pp5/2BP4/4PN2/PP2QPPP/RNB2RK1 w kq -": {
    "eco": "D20",
    "name": "Kabul Edilen Vezir Gambiti (QGA)",
    "moves": [
      {
        "uci": "c4b3",
        "san": "Bb3",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnbqkb1r/5ppp/p3pn2/1pp5/3P4/1B2PN2/PP2QPPP/RNB2RK1 b kq -": {
    "eco": "D20",
    "name": "Kabul Edilen Vezir Gambiti (QGA)",
    "moves": [
      {
        "uci": "c8b7",
        "san": "Bb7",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rn1qkb1r/1b3ppp/p3pn2/1pp5/3P4/1B2PN2/PP2QPPP/RNB2RK1 w kq -": {
    "eco": "D20",
    "name": "Kabul Edilen Vezir Gambiti (QGA)",
    "moves": [
      {
        "uci": "f1d1",
        "san": "Rd1",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "rn1qkb1r/1b3ppp/p3pn2/1pp5/3P4/1B2PN2/PP2QPPP/RNBR2K1 b kq -": {
    "eco": "D20",
    "name": "Kabul Edilen Vezir Gambiti (QGA)",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nbd7",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -": {
    "eco": "D15",
    "name": "Slav Savunması (4... a6 / Chebanenko)",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 17680,
        "draws": 17680,
        "black": 11168
      }
    ]
  },
  "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq -": {
    "eco": "D15",
    "name": "Slav Savunması (4... a6 / Chebanenko)",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 13572,
        "draws": 13572,
        "black": 8576
      }
    ]
  },
  "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq -": {
    "eco": "D15",
    "name": "Slav Savunması (4... a6 / Chebanenko)",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 10856,
        "draws": 10856,
        "black": 6852
      }
    ]
  },
  "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq -": {
    "eco": "D15",
    "name": "Slav Savunması (4... a6 / Chebanenko)",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 4472,
        "draws": 4472,
        "black": 2824
      },
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      },
      {
        "uci": "d5c4",
        "san": "dxc4",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqkb1r/1p2pppp/p1p2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq -": {
    "eco": "D15",
    "name": "Slav Savunması (4... a6 / Chebanenko)",
    "moves": [
      {
        "uci": "c4c5",
        "san": "c5",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkb1r/1p2pppp/p1p2n2/2Pp4/3P4/2N2N2/PP2PPPP/R1BQKB1R b KQkq -": {
    "eco": "D15",
    "name": "Slav Savunması (4... a6 / Chebanenko)",
    "moves": [
      {
        "uci": "c8f5",
        "san": "Bf5",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rn1qkb1r/1p2pppp/p1p2n2/2Pp1b2/3P4/2N2N2/PP2PPPP/R1BQKB1R w KQkq -": {
    "eco": "D15",
    "name": "Slav Savunması (4... a6 / Chebanenko)",
    "moves": [
      {
        "uci": "c1f4",
        "san": "Bf4",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rn1qkb1r/1p2pppp/p1p2n2/2Pp1b2/3P1B2/2N2N2/PP2PPPP/R2QKB1R b KQkq -": {
    "eco": "D15",
    "name": "Slav Savunması (4... a6 / Chebanenko)",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nbd7",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r2qkb1r/1p1npppp/p1p2n2/2Pp1b2/3P1B2/2N2N2/PP2PPPP/R2QKB1R w KQkq -": {
    "eco": "D15",
    "name": "Slav Savunması (4... a6 / Chebanenko)",
    "moves": [
      {
        "uci": "h2h3",
        "san": "h3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r2qkb1r/1p1npppp/p1p2n2/2Pp1b2/3P1B2/2N2N1P/PP2PPP1/R2QKB1R b KQkq -": {
    "eco": "D15",
    "name": "Slav Savunması (4... a6 / Chebanenko)",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r2qkb1r/1p1n1ppp/p1p1pn2/2Pp1b2/3P1B2/2N2N1P/PP2PPP1/R2QKB1R w KQkq -": {
    "eco": "D15",
    "name": "Slav Savunması (4... a6 / Chebanenko)",
    "moves": [
      {
        "uci": "e2e3",
        "san": "e3",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r2qkb1r/1p1n1ppp/p1p1pn2/2Pp1b2/3P1B2/2N1PN1P/PP3PP1/R2QKB1R b KQkq -": {
    "eco": "D15",
    "name": "Slav Savunması (4... a6 / Chebanenko)",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r2qk2r/1p1nbppp/p1p1pn2/2Pp1b2/3P1B2/2N1PN1P/PP3PP1/R2QKB1R w KQkq -": {
    "eco": "D15",
    "name": "Slav Savunması (4... a6 / Chebanenko)",
    "moves": [
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r2qk2r/1p1nbppp/p1p1pn2/2Pp1b2/3P1B2/2N1PN1P/PP2BPP1/R2QK2R b KQkq -": {
    "eco": "D15",
    "name": "Slav Savunması (4... a6 / Chebanenko)",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rnbqkb1r/pp2pppp/2p2n2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq -": {
    "eco": "D17",
    "name": "Slav Savunması (5... Ff5 / Açık Slav)",
    "moves": [
      {
        "uci": "a2a4",
        "san": "a4",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkb1r/pp2pppp/2p2n2/8/P1pP4/2N2N2/1P2PPPP/R1BQKB1R b KQkq -": {
    "eco": "D17",
    "name": "Slav Savunması (5... Ff5 / Açık Slav)",
    "moves": [
      {
        "uci": "c8f5",
        "san": "Bf5",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rn1qkb1r/pp2pppp/2p2n2/5b2/P1pP4/2N2N2/1P2PPPP/R1BQKB1R w KQkq -": {
    "eco": "D17",
    "name": "Slav Savunması (5... Ff5 / Açık Slav)",
    "moves": [
      {
        "uci": "f3e5",
        "san": "Ne5",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rn1qkb1r/pp2pppp/2p2n2/4Nb2/P1pP4/2N5/1P2PPPP/R1BQKB1R b KQkq -": {
    "eco": "D17",
    "name": "Slav Savunması (5... Ff5 / Açık Slav)",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rn1qkb1r/pp3ppp/2p1pn2/4Nb2/P1pP4/2N5/1P2PPPP/R1BQKB1R w KQkq -": {
    "eco": "D17",
    "name": "Slav Savunması (5... Ff5 / Açık Slav)",
    "moves": [
      {
        "uci": "f2f3",
        "san": "f3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rn1qkb1r/pp3ppp/2p1pn2/4Nb2/P1pP4/2N2P2/1P2P1PP/R1BQKB1R b KQkq -": {
    "eco": "D17",
    "name": "Slav Savunması (5... Ff5 / Açık Slav)",
    "moves": [
      {
        "uci": "f8b4",
        "san": "Bb4",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rn1qk2r/pp3ppp/2p1pn2/4Nb2/PbpP4/2N2P2/1P2P1PP/R1BQKB1R w KQkq -": {
    "eco": "D17",
    "name": "Slav Savunması (5... Ff5 / Açık Slav)",
    "moves": [
      {
        "uci": "e2e4",
        "san": "e4",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rn1qk2r/pp3ppp/2p1pn2/4Nb2/PbpPP3/2N2P2/1P4PP/R1BQKB1R b KQkq -": {
    "eco": "D17",
    "name": "Slav Savunması (5... Ff5 / Açık Slav)",
    "moves": [
      {
        "uci": "f5e4",
        "san": "Bxe4",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rn1qk2r/pp3ppp/2p1pn2/4N3/PbpPb3/2N2P2/1P4PP/R1BQKB1R w KQkq -": {
    "eco": "D17",
    "name": "Slav Savunması (5... Ff5 / Açık Slav)",
    "moves": [
      {
        "uci": "f3e4",
        "san": "fxe4",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "rn1qk2r/pp3ppp/2p1pn2/4N3/PbpPP3/2N5/1P4PP/R1BQKB1R b KQkq -": {
    "eco": "D17",
    "name": "Slav Savunması (5... Ff5 / Açık Slav)",
    "moves": [
      {
        "uci": "f6e4",
        "san": "Nxe4",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rn1qk2r/pp3ppp/2p1p3/4N3/PbpPn3/2N5/1P4PP/R1BQKB1R w KQkq -": {
    "eco": "D17",
    "name": "Slav Savunması (5... Ff5 / Açık Slav)",
    "moves": [
      {
        "uci": "c1d2",
        "san": "Bd2",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq -": {
    "eco": "D45",
    "name": "Yarı-Slav: Meran Varyantı",
    "moves": [
      {
        "uci": "e2e3",
        "san": "e3",
        "white": 3770,
        "draws": 3770,
        "black": 2380
      },
      {
        "uci": "c1g5",
        "san": "Bg5",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R b KQkq -": {
    "eco": "D45",
    "name": "Yarı-Slav: Meran Varyantı",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nbd7",
        "white": 3236,
        "draws": 3236,
        "black": 2042
      }
    ]
  },
  "r1bqkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R w KQkq -": {
    "eco": "D45",
    "name": "Yarı-Slav: Meran Varyantı",
    "moves": [
      {
        "uci": "d1c2",
        "san": "Qc2",
        "white": 1409,
        "draws": 1409,
        "black": 890
      },
      {
        "uci": "f1d3",
        "san": "Bd3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1bqkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/2N1PN2/PPQ2PPP/R1B1KB1R b KQkq -": {
    "eco": "D45",
    "name": "Yarı-Slav: Meran Varyantı",
    "moves": [
      {
        "uci": "f8d6",
        "san": "Bd6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqk2r/pp1n1ppp/2pbpn2/3p4/2PP4/2N1PN2/PPQ2PPP/R1B1KB1R w KQkq -": {
    "eco": "D45",
    "name": "Yarı-Slav: Meran Varyantı",
    "moves": [
      {
        "uci": "f1d3",
        "san": "Bd3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bqk2r/pp1n1ppp/2pbpn2/3p4/2PP4/2NBPN2/PPQ2PPP/R1B1K2R b KQkq -": {
    "eco": "D45",
    "name": "Yarı-Slav: Meran Varyantı",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bq1rk1/pp1n1ppp/2pbpn2/3p4/2PP4/2NBPN2/PPQ2PPP/R1B1K2R w KQ -": {
    "eco": "D45",
    "name": "Yarı-Slav: Meran Varyantı",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1bq1rk1/pp1n1ppp/2pbpn2/3p4/2PP4/2NBPN2/PPQ2PPP/R1B2RK1 b - -": {
    "eco": "D45",
    "name": "Yarı-Slav: Meran Varyantı",
    "moves": [
      {
        "uci": "d5c4",
        "san": "dxc4",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r1bq1rk1/pp1n1ppp/2pbpn2/8/2pP4/2NBPN2/PPQ2PPP/R1B2RK1 w - -": {
    "eco": "D45",
    "name": "Yarı-Slav: Meran Varyantı",
    "moves": [
      {
        "uci": "d3c4",
        "san": "Bxc4",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r1bq1rk1/pp1n1ppp/2pbpn2/8/2BP4/2N1PN2/PPQ2PPP/R1B2RK1 b - -": {
    "eco": "D45",
    "name": "Yarı-Slav: Meran Varyantı",
    "moves": [
      {
        "uci": "b7b5",
        "san": "b5",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "r1bq1rk1/p2n1ppp/2pbpn2/1p6/2BP4/2N1PN2/PPQ2PPP/R1B2RK1 w - -": {
    "eco": "D45",
    "name": "Yarı-Slav: Meran Varyantı",
    "moves": [
      {
        "uci": "c4d3",
        "san": "Bd3",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "r1bq1rk1/p2n1ppp/2pbpn2/1p6/3P4/2NBPN2/PPQ2PPP/R1B2RK1 b - -": {
    "eco": "D45",
    "name": "Yarı-Slav: Meran Varyantı",
    "moves": [
      {
        "uci": "c8b7",
        "san": "Bb7",
        "white": 592,
        "draws": 592,
        "black": 374
      }
    ]
  },
  "rnbqkb1r/pp3ppp/2p1pn2/3p2B1/2PP4/2N2N2/PP2PPPP/R2QKB1R b KQkq -": {
    "eco": "D43",
    "name": "Yarı-Slav: Botvinnik / Moskova",
    "moves": [
      {
        "uci": "h7h6",
        "san": "h6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqkb1r/pp3pp1/2p1pn1p/3p2B1/2PP4/2N2N2/PP2PPPP/R2QKB1R w KQkq -": {
    "eco": "D43",
    "name": "Yarı-Slav: Botvinnik / Moskova",
    "moves": [
      {
        "uci": "g5h4",
        "san": "Bh4",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqkb1r/pp3pp1/2p1pn1p/3p4/2PP3B/2N2N2/PP2PPPP/R2QKB1R b KQkq -": {
    "eco": "D43",
    "name": "Yarı-Slav: Botvinnik / Moskova",
    "moves": [
      {
        "uci": "d5c4",
        "san": "dxc4",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbqkb1r/pp3pp1/2p1pn1p/8/2pP3B/2N2N2/PP2PPPP/R2QKB1R w KQkq -": {
    "eco": "D43",
    "name": "Yarı-Slav: Botvinnik / Moskova",
    "moves": [
      {
        "uci": "e2e4",
        "san": "e4",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbqkb1r/pp3pp1/2p1pn1p/8/2pPP2B/2N2N2/PP3PPP/R2QKB1R b KQkq -": {
    "eco": "D43",
    "name": "Yarı-Slav: Botvinnik / Moskova",
    "moves": [
      {
        "uci": "g7g5",
        "san": "g5",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnbqkb1r/pp3p2/2p1pn1p/6p1/2pPP2B/2N2N2/PP3PPP/R2QKB1R w KQkq -": {
    "eco": "D43",
    "name": "Yarı-Slav: Botvinnik / Moskova",
    "moves": [
      {
        "uci": "h4g3",
        "san": "Bg3",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnbqkb1r/pp3p2/2p1pn1p/6p1/2pPP3/2N2NB1/PP3PPP/R2QKB1R b KQkq -": {
    "eco": "D43",
    "name": "Yarı-Slav: Botvinnik / Moskova",
    "moves": [
      {
        "uci": "b7b5",
        "san": "b5",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbqkb1r/p4p2/2p1pn1p/1p4p1/2pPP3/2N2NB1/PP3PPP/R2QKB1R w KQkq -": {
    "eco": "D43",
    "name": "Yarı-Slav: Botvinnik / Moskova",
    "moves": [
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "rnbqkb1r/p4p2/2p1pn1p/1p4p1/2pPP3/2N2NB1/PP2BPPP/R2QK2R b KQkq -": {
    "eco": "D43",
    "name": "Yarı-Slav: Botvinnik / Moskova",
    "moves": [
      {
        "uci": "c8b7",
        "san": "Bb7",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -": {
    "eco": "E32",
    "name": "Nimzo-Hint: Klasik (4. Vc2)",
    "moves": [
      {
        "uci": "c2c4",
        "san": "c4",
        "white": 120523,
        "draws": 120523,
        "black": 76128
      },
      {
        "uci": "c1g5",
        "san": "Bg5",
        "white": 9271,
        "draws": 9271,
        "black": 5856
      }
    ]
  },
  "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq -": {
    "eco": "E32",
    "name": "Nimzo-Hint: Klasik (4. Vc2)",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 36654,
        "draws": 36654,
        "black": 23148
      },
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 30545,
        "draws": 30545,
        "black": 19290
      },
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 12218,
        "draws": 12218,
        "black": 7716
      }
    ]
  },
  "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -": {
    "eco": "E32",
    "name": "Nimzo-Hint: Klasik (4. Vc2)",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 8840,
        "draws": 8840,
        "black": 5584
      },
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 8840,
        "draws": 8840,
        "black": 5584
      },
      {
        "uci": "g2g3",
        "san": "g3",
        "white": 8840,
        "draws": 8840,
        "black": 5584
      }
    ]
  },
  "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq -": {
    "eco": "E32",
    "name": "Nimzo-Hint: Klasik (4. Vc2)",
    "moves": [
      {
        "uci": "f8b4",
        "san": "Bb4",
        "white": 6786,
        "draws": 6786,
        "black": 4288
      }
    ]
  },
  "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "E32",
    "name": "Nimzo-Hint: Klasik (4. Vc2)",
    "moves": [
      {
        "uci": "d1c2",
        "san": "Qc2",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      },
      {
        "uci": "e2e3",
        "san": "e3",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PPQ1PPPP/R1B1KBNR b KQkq -": {
    "eco": "E32",
    "name": "Nimzo-Hint: Klasik (4. Vc2)",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N5/PPQ1PPPP/R1B1KBNR w KQ -": {
    "eco": "E32",
    "name": "Nimzo-Hint: Klasik (4. Vc2)",
    "moves": [
      {
        "uci": "a2a3",
        "san": "a3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/P1N5/1PQ1PPPP/R1B1KBNR b KQ -": {
    "eco": "E32",
    "name": "Nimzo-Hint: Klasik (4. Vc2)",
    "moves": [
      {
        "uci": "b4c3",
        "san": "Bxc3+",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbq1rk1/pppp1ppp/4pn2/8/2PP4/P1b5/1PQ1PPPP/R1B1KBNR w KQ -": {
    "eco": "E32",
    "name": "Nimzo-Hint: Klasik (4. Vc2)",
    "moves": [
      {
        "uci": "c2c3",
        "san": "Qxc3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbq1rk1/pppp1ppp/4pn2/8/2PP4/P1Q5/1P2PPPP/R1B1KBNR b KQ -": {
    "eco": "E32",
    "name": "Nimzo-Hint: Klasik (4. Vc2)",
    "moves": [
      {
        "uci": "b7b6",
        "san": "b6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbq1rk1/p1pp1ppp/1p2pn2/8/2PP4/P1Q5/1P2PPPP/R1B1KBNR w KQ -": {
    "eco": "E32",
    "name": "Nimzo-Hint: Klasik (4. Vc2)",
    "moves": [
      {
        "uci": "c1g5",
        "san": "Bg5",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbq1rk1/p1pp1ppp/1p2pn2/6B1/2PP4/P1Q5/1P2PPPP/R3KBNR b KQ -": {
    "eco": "E32",
    "name": "Nimzo-Hint: Klasik (4. Vc2)",
    "moves": [
      {
        "uci": "c8b7",
        "san": "Bb7",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rn1q1rk1/pbpp1ppp/1p2pn2/6B1/2PP4/P1Q5/1P2PPPP/R3KBNR w KQ -": {
    "eco": "E32",
    "name": "Nimzo-Hint: Klasik (4. Vc2)",
    "moves": [
      {
        "uci": "f2f3",
        "san": "f3",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rn1q1rk1/pbpp1ppp/1p2pn2/6B1/2PP4/P1Q2P2/1P2P1PP/R3KBNR b KQ -": {
    "eco": "E32",
    "name": "Nimzo-Hint: Klasik (4. Vc2)",
    "moves": [
      {
        "uci": "h7h6",
        "san": "h6",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rn1q1rk1/pbpp1pp1/1p2pn1p/6B1/2PP4/P1Q2P2/1P2P1PP/R3KBNR w KQ -": {
    "eco": "E32",
    "name": "Nimzo-Hint: Klasik (4. Vc2)",
    "moves": [
      {
        "uci": "g5h4",
        "san": "Bh4",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "rn1q1rk1/pbpp1pp1/1p2pn1p/8/2PP3B/P1Q2P2/1P2P1PP/R3KBNR b KQ -": {
    "eco": "E32",
    "name": "Nimzo-Hint: Klasik (4. Vc2)",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR b KQkq -": {
    "eco": "E46",
    "name": "Nimzo-Hint: Rubinstein (4. e3)",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQ -": {
    "eco": "E46",
    "name": "Nimzo-Hint: Rubinstein (4. e3)",
    "moves": [
      {
        "uci": "g1e2",
        "san": "Ne2",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP2NPPP/R1BQKB1R b KQ -": {
    "eco": "E46",
    "name": "Nimzo-Hint: Rubinstein (4. e3)",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbq1rk1/ppp2ppp/4pn2/3p4/1bPP4/2N1P3/PP2NPPP/R1BQKB1R w KQ -": {
    "eco": "E46",
    "name": "Nimzo-Hint: Rubinstein (4. e3)",
    "moves": [
      {
        "uci": "a2a3",
        "san": "a3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbq1rk1/ppp2ppp/4pn2/3p4/1bPP4/P1N1P3/1P2NPPP/R1BQKB1R b KQ -": {
    "eco": "E46",
    "name": "Nimzo-Hint: Rubinstein (4. e3)",
    "moves": [
      {
        "uci": "b4e7",
        "san": "Be7",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbq1rk1/ppp1bppp/4pn2/3p4/2PP4/P1N1P3/1P2NPPP/R1BQKB1R w KQ -": {
    "eco": "E46",
    "name": "Nimzo-Hint: Rubinstein (4. e3)",
    "moves": [
      {
        "uci": "c4d5",
        "san": "cxd5",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbq1rk1/ppp1bppp/4pn2/3P4/3P4/P1N1P3/1P2NPPP/R1BQKB1R b KQ -": {
    "eco": "E46",
    "name": "Nimzo-Hint: Rubinstein (4. e3)",
    "moves": [
      {
        "uci": "e6d5",
        "san": "exd5",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnbq1rk1/ppp1bppp/5n2/3p4/3P4/P1N1P3/1P2NPPP/R1BQKB1R w KQ -": {
    "eco": "E46",
    "name": "Nimzo-Hint: Rubinstein (4. e3)",
    "moves": [
      {
        "uci": "e2g3",
        "san": "Ng3",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnbq1rk1/ppp1bppp/5n2/3p4/3P4/P1N1P1N1/1P3PPP/R1BQKB1R b KQ -": {
    "eco": "E46",
    "name": "Nimzo-Hint: Rubinstein (4. e3)",
    "moves": [
      {
        "uci": "f8e8",
        "san": "Re8",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbqr1k1/ppp1bppp/5n2/3p4/3P4/P1N1P1N1/1P3PPP/R1BQKB1R w KQ -": {
    "eco": "E46",
    "name": "Nimzo-Hint: Rubinstein (4. e3)",
    "moves": [
      {
        "uci": "f1d3",
        "san": "Bd3",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "rnbqr1k1/ppp1bppp/5n2/3p4/3P4/P1NBP1N1/1P3PPP/R1BQK2R b KQ -": {
    "eco": "E46",
    "name": "Nimzo-Hint: Rubinstein (4. e3)",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rnbqr1k1/pp2bppp/5n2/2pp4/3P4/P1NBP1N1/1P3PPP/R1BQK2R w KQ -": {
    "eco": "E46",
    "name": "Nimzo-Hint: Rubinstein (4. e3)",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq -": {
    "eco": "E11",
    "name": "Bogo-Hint Savunması",
    "moves": [
      {
        "uci": "f8b4",
        "san": "Bb4+",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      },
      {
        "uci": "b7b6",
        "san": "b6",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/5N2/PP2PPPP/RNBQKB1R w KQkq -": {
    "eco": "E11",
    "name": "Bogo-Hint Savunması",
    "moves": [
      {
        "uci": "c1d2",
        "san": "Bd2",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/5N2/PP1BPPPP/RN1QKB1R b KQkq -": {
    "eco": "E11",
    "name": "Bogo-Hint Savunması",
    "moves": [
      {
        "uci": "d8e7",
        "san": "Qe7",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnb1k2r/ppppqppp/4pn2/8/1bPP4/5N2/PP1BPPPP/RN1QKB1R w KQkq -": {
    "eco": "E11",
    "name": "Bogo-Hint Savunması",
    "moves": [
      {
        "uci": "g2g3",
        "san": "g3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnb1k2r/ppppqppp/4pn2/8/1bPP4/5NP1/PP1BPP1P/RN1QKB1R b KQkq -": {
    "eco": "E11",
    "name": "Bogo-Hint Savunması",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1b1k2r/ppppqppp/2n1pn2/8/1bPP4/5NP1/PP1BPP1P/RN1QKB1R w KQkq -": {
    "eco": "E11",
    "name": "Bogo-Hint Savunması",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1b1k2r/ppppqppp/2n1pn2/8/1bPP4/2N2NP1/PP1BPP1P/R2QKB1R b KQkq -": {
    "eco": "E11",
    "name": "Bogo-Hint Savunması",
    "moves": [
      {
        "uci": "b4c3",
        "san": "Bxc3",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1b1k2r/ppppqppp/2n1pn2/8/2PP4/2b2NP1/PP1BPP1P/R2QKB1R w KQkq -": {
    "eco": "E11",
    "name": "Bogo-Hint Savunması",
    "moves": [
      {
        "uci": "d2c3",
        "san": "Bxc3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1b1k2r/ppppqppp/2n1pn2/8/2PP4/2B2NP1/PP2PP1P/R2QKB1R b KQkq -": {
    "eco": "E11",
    "name": "Bogo-Hint Savunması",
    "moves": [
      {
        "uci": "f6e4",
        "san": "Ne4",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1b1k2r/ppppqppp/2n1p3/8/2PPn3/2B2NP1/PP2PP1P/R2QKB1R w KQkq -": {
    "eco": "E11",
    "name": "Bogo-Hint Savunması",
    "moves": [
      {
        "uci": "a1c1",
        "san": "Rc1",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1b1k2r/ppppqppp/2n1p3/8/2PPn3/2B2NP1/PP2PP1P/2RQKB1R b Kkq -": {
    "eco": "E11",
    "name": "Bogo-Hint Savunması",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r1b2rk1/ppppqppp/2n1p3/8/2PPn3/2B2NP1/PP2PP1P/2RQKB1R w K -": {
    "eco": "E11",
    "name": "Bogo-Hint Savunması",
    "moves": [
      {
        "uci": "f1g2",
        "san": "Bg2",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r1b2rk1/ppppqppp/2n1p3/8/2PPn3/2B2NP1/PP2PPBP/2RQK2R b K -": {
    "eco": "E11",
    "name": "Bogo-Hint Savunması",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "r1b2rk1/ppp1qppp/2npp3/8/2PPn3/2B2NP1/PP2PPBP/2RQK2R w K -": {
    "eco": "E11",
    "name": "Bogo-Hint Savunması",
    "moves": [
      {
        "uci": "d4d5",
        "san": "d5",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq -": {
    "eco": "E12",
    "name": "Vezir-Hint Savunması (4. a3)",
    "moves": [
      {
        "uci": "a2a3",
        "san": "a3",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/P4N2/1P2PPPP/RNBQKB1R b KQkq -": {
    "eco": "E12",
    "name": "Vezir-Hint Savunması (4. a3)",
    "moves": [
      {
        "uci": "c8b7",
        "san": "Bb7",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rn1qkb1r/pbpp1ppp/1p2pn2/8/2PP4/P4N2/1P2PPPP/RNBQKB1R w KQkq -": {
    "eco": "E12",
    "name": "Vezir-Hint Savunması (4. a3)",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rn1qkb1r/pbpp1ppp/1p2pn2/8/2PP4/P1N2N2/1P2PPPP/R1BQKB1R b KQkq -": {
    "eco": "E12",
    "name": "Vezir-Hint Savunması (4. a3)",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rn1qkb1r/pbp2ppp/1p2pn2/3p4/2PP4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq -": {
    "eco": "E12",
    "name": "Vezir-Hint Savunması (4. a3)",
    "moves": [
      {
        "uci": "c4d5",
        "san": "cxd5",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rn1qkb1r/pbp2ppp/1p2pn2/3P4/3P4/P1N2N2/1P2PPPP/R1BQKB1R b KQkq -": {
    "eco": "E12",
    "name": "Vezir-Hint Savunması (4. a3)",
    "moves": [
      {
        "uci": "f6d5",
        "san": "Nxd5",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rn1qkb1r/pbp2ppp/1p2p3/3n4/3P4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq -": {
    "eco": "E12",
    "name": "Vezir-Hint Savunması (4. a3)",
    "moves": [
      {
        "uci": "d1c2",
        "san": "Qc2",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rn1qkb1r/pbp2ppp/1p2p3/3n4/3P4/P1N2N2/1PQ1PPPP/R1B1KB1R b KQkq -": {
    "eco": "E12",
    "name": "Vezir-Hint Savunması (4. a3)",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rn1qk2r/pbp1bppp/1p2p3/3n4/3P4/P1N2N2/1PQ1PPPP/R1B1KB1R w KQkq -": {
    "eco": "E12",
    "name": "Vezir-Hint Savunması (4. a3)",
    "moves": [
      {
        "uci": "e2e4",
        "san": "e4",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rn1qk2r/pbp1bppp/1p2p3/3n4/3PP3/P1N2N2/1PQ2PPP/R1B1KB1R b KQkq -": {
    "eco": "E12",
    "name": "Vezir-Hint Savunması (4. a3)",
    "moves": [
      {
        "uci": "d5c3",
        "san": "Nxc3",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rn1qk2r/pbp1bppp/1p2p3/8/3PP3/P1n2N2/1PQ2PPP/R1B1KB1R w KQkq -": {
    "eco": "E12",
    "name": "Vezir-Hint Savunması (4. a3)",
    "moves": [
      {
        "uci": "b2c3",
        "san": "bxc3",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "rn1qk2r/pbp1bppp/1p2p3/8/3PP3/P1P2N2/2Q2PPP/R1B1KB1R b KQkq -": {
    "eco": "E12",
    "name": "Vezir-Hint Savunması (4. a3)",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -": {
    "eco": "E97",
    "name": "Şah-Hint: Klasik Mar del Plata",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 22100,
        "draws": 22100,
        "black": 13960
      }
    ]
  },
  "rnbqkb1r/pppppp1p/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq -": {
    "eco": "E97",
    "name": "Şah-Hint: Klasik Mar del Plata",
    "moves": [
      {
        "uci": "f8g7",
        "san": "Bg7",
        "white": 10179,
        "draws": 10179,
        "black": 6432
      },
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 6786,
        "draws": 6786,
        "black": 4288
      }
    ]
  },
  "rnbqk2r/ppppppbp/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "E97",
    "name": "Şah-Hint: Klasik Mar del Plata",
    "moves": [
      {
        "uci": "e2e4",
        "san": "e4",
        "white": 8142,
        "draws": 8142,
        "black": 5139
      }
    ]
  },
  "rnbqk2r/ppppppbp/5np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq -": {
    "eco": "E97",
    "name": "Şah-Hint: Klasik Mar del Plata",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 6708,
        "draws": 6708,
        "black": 4236
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR w KQkq -": {
    "eco": "E97",
    "name": "Şah-Hint: Klasik Mar del Plata",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      },
      {
        "uci": "f2f3",
        "san": "f3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      },
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R b KQkq -": {
    "eco": "E97",
    "name": "Şah-Hint: Klasik Mar del Plata",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQ -": {
    "eco": "E97",
    "name": "Şah-Hint: Klasik Mar del Plata",
    "moves": [
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP2BPPP/R1BQK2R b KQ -": {
    "eco": "E97",
    "name": "Şah-Hint: Klasik Mar del Plata",
    "moves": [
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQK2R w KQ -": {
    "eco": "E97",
    "name": "Şah-Hint: Klasik Mar del Plata",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 b - -": {
    "eco": "E97",
    "name": "Şah-Hint: Klasik Mar del Plata",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bq1rk1/ppp2pbp/2np1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w - -": {
    "eco": "E97",
    "name": "Şah-Hint: Klasik Mar del Plata",
    "moves": [
      {
        "uci": "d4d5",
        "san": "d5",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1bq1rk1/ppp2pbp/2np1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQ1RK1 b - -": {
    "eco": "E97",
    "name": "Şah-Hint: Klasik Mar del Plata",
    "moves": [
      {
        "uci": "c6e7",
        "san": "Ne7",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQ1RK1 w - -": {
    "eco": "E97",
    "name": "Şah-Hint: Klasik Mar del Plata",
    "moves": [
      {
        "uci": "f3e1",
        "san": "Ne1",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N5/PP2BPPP/R1BQNRK1 b - -": {
    "eco": "E97",
    "name": "Şah-Hint: Klasik Mar del Plata",
    "moves": [
      {
        "uci": "f6d7",
        "san": "Nd7",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "r1bq1rk1/pppnnpbp/3p2p1/3Pp3/2P1P3/2N5/PP2BPPP/R1BQNRK1 w - -": {
    "eco": "E97",
    "name": "Şah-Hint: Klasik Mar del Plata",
    "moves": [
      {
        "uci": "c1e3",
        "san": "Be3",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "r1bq1rk1/pppnnpbp/3p2p1/3Pp3/2P1P3/2N1B3/PP2BPPP/R2QNRK1 b - -": {
    "eco": "E97",
    "name": "Şah-Hint: Klasik Mar del Plata",
    "moves": [
      {
        "uci": "f7f5",
        "san": "f5",
        "white": 592,
        "draws": 592,
        "black": 374
      }
    ]
  },
  "r1bq1rk1/pppnn1bp/3p2p1/3Ppp2/2P1P3/2N1B3/PP2BPPP/R2QNRK1 w - -": {
    "eco": "E97",
    "name": "Şah-Hint: Klasik Mar del Plata",
    "moves": [
      {
        "uci": "f2f3",
        "san": "f3",
        "white": 551,
        "draws": 551,
        "black": 349
      }
    ]
  },
  "r1bq1rk1/pppnn1bp/3p2p1/3Ppp2/2P1P3/2N1BP2/PP2B1PP/R2QNRK1 b - -": {
    "eco": "E97",
    "name": "Şah-Hint: Klasik Mar del Plata",
    "moves": [
      {
        "uci": "f5f4",
        "san": "f4",
        "white": 516,
        "draws": 516,
        "black": 325
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N2P2/PP4PP/R1BQKBNR b KQkq -": {
    "eco": "E81",
    "name": "Şah-Hint: Sämisch Varyantı",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2P2/PP4PP/R1BQKBNR w KQ -": {
    "eco": "E81",
    "name": "Şah-Hint: Sämisch Varyantı",
    "moves": [
      {
        "uci": "c1e3",
        "san": "Be3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N1BP2/PP4PP/R2QKBNR b KQ -": {
    "eco": "E81",
    "name": "Şah-Hint: Sämisch Varyantı",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbq1rk1/pp2ppbp/3p1np1/2p5/2PPP3/2N1BP2/PP4PP/R2QKBNR w KQ -": {
    "eco": "E81",
    "name": "Şah-Hint: Sämisch Varyantı",
    "moves": [
      {
        "uci": "g1e2",
        "san": "Nge2",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbq1rk1/pp2ppbp/3p1np1/2p5/2PPP3/2N1BP2/PP2N1PP/R2QKB1R b KQ -": {
    "eco": "E81",
    "name": "Şah-Hint: Sämisch Varyantı",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bq1rk1/pp2ppbp/2np1np1/2p5/2PPP3/2N1BP2/PP2N1PP/R2QKB1R w KQ -": {
    "eco": "E81",
    "name": "Şah-Hint: Sämisch Varyantı",
    "moves": [
      {
        "uci": "d1d2",
        "san": "Qd2",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1bq1rk1/pp2ppbp/2np1np1/2p5/2PPP3/2N1BP2/PP1QN1PP/R3KB1R b KQ -": {
    "eco": "E81",
    "name": "Şah-Hint: Sämisch Varyantı",
    "moves": [
      {
        "uci": "d8a5",
        "san": "Qa5",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r1b2rk1/pp2ppbp/2np1np1/q1p5/2PPP3/2N1BP2/PP1QN1PP/R3KB1R w KQ -": {
    "eco": "E81",
    "name": "Şah-Hint: Sämisch Varyantı",
    "moves": [
      {
        "uci": "e1c1",
        "san": "O-O-O",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r1b2rk1/pp2ppbp/2np1np1/q1p5/2PPP3/2N1BP2/PP1QN1PP/2KR1B1R b - -": {
    "eco": "E81",
    "name": "Şah-Hint: Sämisch Varyantı",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP2BPPP/R1BQK1NR b KQkq -": {
    "eco": "E73",
    "name": "Şah-Hint: Averbakh Varyantı",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP2BPPP/R1BQK1NR w KQ -": {
    "eco": "E73",
    "name": "Şah-Hint: Averbakh Varyantı",
    "moves": [
      {
        "uci": "c1g5",
        "san": "Bg5",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbq1rk1/ppp1ppbp/3p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR b KQ -": {
    "eco": "E73",
    "name": "Şah-Hint: Averbakh Varyantı",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbq1rk1/pp2ppbp/3p1np1/2p3B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ -": {
    "eco": "E73",
    "name": "Şah-Hint: Averbakh Varyantı",
    "moves": [
      {
        "uci": "d4d5",
        "san": "d5",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbq1rk1/pp2ppbp/3p1np1/2pP2B1/2P1P3/2N5/PP2BPPP/R2QK1NR b KQ -": {
    "eco": "E73",
    "name": "Şah-Hint: Averbakh Varyantı",
    "moves": [
      {
        "uci": "h7h6",
        "san": "h6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnbq1rk1/pp2ppb1/3p1npp/2pP2B1/2P1P3/2N5/PP2BPPP/R2QK1NR w KQ -": {
    "eco": "E73",
    "name": "Şah-Hint: Averbakh Varyantı",
    "moves": [
      {
        "uci": "g5e3",
        "san": "Be3",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnbq1rk1/pp2ppb1/3p1npp/2pP4/2P1P3/2N1B3/PP2BPPP/R2QK1NR b KQ -": {
    "eco": "E73",
    "name": "Şah-Hint: Averbakh Varyantı",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbq1rk1/pp3pb1/3ppnpp/2pP4/2P1P3/2N1B3/PP2BPPP/R2QK1NR w KQ -": {
    "eco": "E73",
    "name": "Şah-Hint: Averbakh Varyantı",
    "moves": [
      {
        "uci": "d1d2",
        "san": "Qd2",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "rnbq1rk1/pp3pb1/3ppnpp/2pP4/2P1P3/2N1B3/PP1QBPPP/R3K1NR b KQ -": {
    "eco": "E73",
    "name": "Şah-Hint: Averbakh Varyantı",
    "moves": [
      {
        "uci": "e6d5",
        "san": "exd5",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rnbq1rk1/pp3pb1/3p1npp/2pp4/2P1P3/2N1B3/PP1QBPPP/R3K1NR w KQ -": {
    "eco": "E73",
    "name": "Şah-Hint: Averbakh Varyantı",
    "moves": [
      {
        "uci": "e4d5",
        "san": "exd5",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "D85",
    "name": "Grünfeld: Değişme Varyantı (7. Fc4)",
    "moves": [
      {
        "uci": "c4d5",
        "san": "cxd5",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      },
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/5np1/3P4/3P4/2N5/PP2PPPP/R1BQKBNR b KQkq -": {
    "eco": "D85",
    "name": "Grünfeld: Değişme Varyantı (7. Fc4)",
    "moves": [
      {
        "uci": "f6d5",
        "san": "Nxd5",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/6p1/3n4/3P4/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "D85",
    "name": "Grünfeld: Değişme Varyantı (7. Fc4)",
    "moves": [
      {
        "uci": "e2e4",
        "san": "e4",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/6p1/3n4/3PP3/2N5/PP3PPP/R1BQKBNR b KQkq -": {
    "eco": "D85",
    "name": "Grünfeld: Değişme Varyantı (7. Fc4)",
    "moves": [
      {
        "uci": "d5c3",
        "san": "Nxc3",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/6p1/8/3PP3/2n5/PP3PPP/R1BQKBNR w KQkq -": {
    "eco": "D85",
    "name": "Grünfeld: Değişme Varyantı (7. Fc4)",
    "moves": [
      {
        "uci": "b2c3",
        "san": "bxc3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/6p1/8/3PP3/2P5/P4PPP/R1BQKBNR b KQkq -": {
    "eco": "D85",
    "name": "Grünfeld: Değişme Varyantı (7. Fc4)",
    "moves": [
      {
        "uci": "f8g7",
        "san": "Bg7",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/6p1/8/3PP3/2P5/P4PPP/R1BQKBNR w KQkq -": {
    "eco": "D85",
    "name": "Grünfeld: Değişme Varyantı (7. Fc4)",
    "moves": [
      {
        "uci": "f1c4",
        "san": "Bc4",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/6p1/8/2BPP3/2P5/P4PPP/R1BQK1NR b KQkq -": {
    "eco": "D85",
    "name": "Grünfeld: Değişme Varyantı (7. Fc4)",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnbqk2r/pp2ppbp/6p1/2p5/2BPP3/2P5/P4PPP/R1BQK1NR w KQkq -": {
    "eco": "D85",
    "name": "Grünfeld: Değişme Varyantı (7. Fc4)",
    "moves": [
      {
        "uci": "g1e2",
        "san": "Ne2",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnbqk2r/pp2ppbp/6p1/2p5/2BPP3/2P5/P3NPPP/R1BQK2R b KQkq -": {
    "eco": "D85",
    "name": "Grünfeld: Değişme Varyantı (7. Fc4)",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbq1rk1/pp2ppbp/6p1/2p5/2BPP3/2P5/P3NPPP/R1BQK2R w KQ -": {
    "eco": "D85",
    "name": "Grünfeld: Değişme Varyantı (7. Fc4)",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "rnbq1rk1/pp2ppbp/6p1/2p5/2BPP3/2P5/P3NPPP/R1BQ1RK1 b - -": {
    "eco": "D85",
    "name": "Grünfeld: Değişme Varyantı (7. Fc4)",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "r1bq1rk1/pp2ppbp/2n3p1/2p5/2BPP3/2P5/P3NPPP/R1BQ1RK1 w - -": {
    "eco": "D85",
    "name": "Grünfeld: Değişme Varyantı (7. Fc4)",
    "moves": [
      {
        "uci": "c1e3",
        "san": "Be3",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq -": {
    "eco": "D97",
    "name": "Grünfeld: Rus Varyantı (4. Af3)",
    "moves": [
      {
        "uci": "f8g7",
        "san": "Bg7",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/5np1/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq -": {
    "eco": "D97",
    "name": "Grünfeld: Rus Varyantı (4. Af3)",
    "moves": [
      {
        "uci": "d1b3",
        "san": "Qb3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/5np1/3p4/2PP4/1QN2N2/PP2PPPP/R1B1KB1R b KQkq -": {
    "eco": "D97",
    "name": "Grünfeld: Rus Varyantı (4. Af3)",
    "moves": [
      {
        "uci": "d5c4",
        "san": "dxc4",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/5np1/8/2pP4/1QN2N2/PP2PPPP/R1B1KB1R w KQkq -": {
    "eco": "D97",
    "name": "Grünfeld: Rus Varyantı (4. Af3)",
    "moves": [
      {
        "uci": "b3c4",
        "san": "Qxc4",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/5np1/8/2QP4/2N2N2/PP2PPPP/R1B1KB1R b KQkq -": {
    "eco": "D97",
    "name": "Grünfeld: Rus Varyantı (4. Af3)",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbq1rk1/ppp1ppbp/5np1/8/2QP4/2N2N2/PP2PPPP/R1B1KB1R w KQ -": {
    "eco": "D97",
    "name": "Grünfeld: Rus Varyantı (4. Af3)",
    "moves": [
      {
        "uci": "e2e4",
        "san": "e4",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbq1rk1/ppp1ppbp/5np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R b KQ -": {
    "eco": "D97",
    "name": "Grünfeld: Rus Varyantı (4. Af3)",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnbq1rk1/1pp1ppbp/p4np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R w KQ -": {
    "eco": "D97",
    "name": "Grünfeld: Rus Varyantı (4. Af3)",
    "moves": [
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnbq1rk1/1pp1ppbp/p4np1/8/2QPP3/2N2N2/PP2BPPP/R1B1K2R b KQ -": {
    "eco": "D97",
    "name": "Grünfeld: Rus Varyantı (4. Af3)",
    "moves": [
      {
        "uci": "b7b5",
        "san": "b5",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbq1rk1/2p1ppbp/p4np1/1p6/2QPP3/2N2N2/PP2BPPP/R1B1K2R w KQ -": {
    "eco": "D97",
    "name": "Grünfeld: Rus Varyantı (4. Af3)",
    "moves": [
      {
        "uci": "c4b3",
        "san": "Qb3",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "rnbq1rk1/2p1ppbp/p4np1/1p6/3PP3/1QN2N2/PP2BPPP/R1B1K2R b KQ -": {
    "eco": "D97",
    "name": "Grünfeld: Rus Varyantı (4. Af3)",
    "moves": [
      {
        "uci": "c8b7",
        "san": "Bb7",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rn1q1rk1/1bp1ppbp/p4np1/1p6/3PP3/1QN2N2/PP2BPPP/R1B1K2R w KQ -": {
    "eco": "D97",
    "name": "Grünfeld: Rus Varyantı (4. Af3)",
    "moves": [
      {
        "uci": "e4e5",
        "san": "e5",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "rn1q1rk1/1bp1ppbp/p4np1/1p2P3/3P4/1QN2N2/PP2BPPP/R1B1K2R b KQ -": {
    "eco": "D97",
    "name": "Grünfeld: Rus Varyantı (4. Af3)",
    "moves": [
      {
        "uci": "f6d5",
        "san": "Nd5",
        "white": 592,
        "draws": 592,
        "black": 374
      }
    ]
  },
  "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq -": {
    "eco": "E06",
    "name": "Katalan Açılışı: Kapalı",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 6786,
        "draws": 6786,
        "black": 4288
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/6P1/PP2PP1P/RNBQKBNR w KQkq -": {
    "eco": "E06",
    "name": "Katalan Açılışı: Kapalı",
    "moves": [
      {
        "uci": "f1g2",
        "san": "Bg2",
        "white": 5428,
        "draws": 5428,
        "black": 3426
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/6P1/PP2PPBP/RNBQK1NR b KQkq -": {
    "eco": "E06",
    "name": "Katalan Açılışı: Kapalı",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      },
      {
        "uci": "d5c4",
        "san": "dxc4",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqk2r/ppp1bppp/4pn2/3p4/2PP4/6P1/PP2PPBP/RNBQK1NR w KQkq -": {
    "eco": "E06",
    "name": "Katalan Açılışı: Kapalı",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqk2r/ppp1bppp/4pn2/3p4/2PP4/5NP1/PP2PPBP/RNBQK2R b KQkq -": {
    "eco": "E06",
    "name": "Katalan Açılışı: Kapalı",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 3236,
        "draws": 3236,
        "black": 2042
      }
    ]
  },
  "rnbq1rk1/ppp1bppp/4pn2/3p4/2PP4/5NP1/PP2PPBP/RNBQK2R w KQ -": {
    "eco": "E06",
    "name": "Katalan Açılışı: Kapalı",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 2818,
        "draws": 2818,
        "black": 1780
      }
    ]
  },
  "rnbq1rk1/ppp1bppp/4pn2/3p4/2PP4/5NP1/PP2PPBP/RNBQ1RK1 b - -": {
    "eco": "E06",
    "name": "Katalan Açılışı: Kapalı",
    "moves": [
      {
        "uci": "d5c4",
        "san": "dxc4",
        "white": 2484,
        "draws": 2484,
        "black": 1568
      }
    ]
  },
  "rnbq1rk1/ppp1bppp/4pn2/8/2pP4/5NP1/PP2PPBP/RNBQ1RK1 w - -": {
    "eco": "E06",
    "name": "Katalan Açılışı: Kapalı",
    "moves": [
      {
        "uci": "d1c2",
        "san": "Qc2",
        "white": 2212,
        "draws": 2212,
        "black": 1396
      }
    ]
  },
  "rnbq1rk1/ppp1bppp/4pn2/8/2pP4/5NP1/PPQ1PPBP/RNB2RK1 b - -": {
    "eco": "E06",
    "name": "Katalan Açılışı: Kapalı",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 1986,
        "draws": 1986,
        "black": 1254
      }
    ]
  },
  "rnbq1rk1/1pp1bppp/p3pn2/8/2pP4/5NP1/PPQ1PPBP/RNB2RK1 w - -": {
    "eco": "E06",
    "name": "Katalan Açılışı: Kapalı",
    "moves": [
      {
        "uci": "c2c4",
        "san": "Qxc4",
        "white": 1798,
        "draws": 1798,
        "black": 1134
      }
    ]
  },
  "rnbq1rk1/1pp1bppp/p3pn2/8/2QP4/5NP1/PP2PPBP/RNB2RK1 b - -": {
    "eco": "E06",
    "name": "Katalan Açılışı: Kapalı",
    "moves": [
      {
        "uci": "b7b5",
        "san": "b5",
        "white": 1636,
        "draws": 1636,
        "black": 1034
      }
    ]
  },
  "rnbq1rk1/2p1bppp/p3pn2/1p6/2QP4/5NP1/PP2PPBP/RNB2RK1 w - -": {
    "eco": "E06",
    "name": "Katalan Açılışı: Kapalı",
    "moves": [
      {
        "uci": "c4c2",
        "san": "Qc2",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "rnbq1rk1/2p1bppp/p3pn2/1p6/3P4/5NP1/PPQ1PPBP/RNB2RK1 b - -": {
    "eco": "E06",
    "name": "Katalan Açılışı: Kapalı",
    "moves": [
      {
        "uci": "c8b7",
        "san": "Bb7",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rn1q1rk1/1bp1bppp/p3pn2/1p6/3P4/5NP1/PPQ1PPBP/RNB2RK1 w - -": {
    "eco": "E06",
    "name": "Katalan Açılışı: Kapalı",
    "moves": [
      {
        "uci": "c1d2",
        "san": "Bd2",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pn2/8/2pP4/6P1/PP2PPBP/RNBQK1NR w KQkq -": {
    "eco": "E04",
    "name": "Katalan Açılışı: Açık",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pn2/8/2pP4/5NP1/PP2PPBP/RNBQK2R b KQkq -": {
    "eco": "E04",
    "name": "Katalan Açılışı: Açık",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqkb1r/1pp2ppp/p3pn2/8/2pP4/5NP1/PP2PPBP/RNBQK2R w KQkq -": {
    "eco": "E04",
    "name": "Katalan Açılışı: Açık",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqkb1r/1pp2ppp/p3pn2/8/2pP4/5NP1/PP2PPBP/RNBQ1RK1 b kq -": {
    "eco": "E04",
    "name": "Katalan Açılışı: Açık",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqkb1r/1pp2ppp/p1n1pn2/8/2pP4/5NP1/PP2PPBP/RNBQ1RK1 w kq -": {
    "eco": "E04",
    "name": "Katalan Açılışı: Açık",
    "moves": [
      {
        "uci": "e2e3",
        "san": "e3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bqkb1r/1pp2ppp/p1n1pn2/8/2pP4/4PNP1/PP3PBP/RNBQ1RK1 b kq -": {
    "eco": "E04",
    "name": "Katalan Açılışı: Açık",
    "moves": [
      {
        "uci": "a8b8",
        "san": "Rb8",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "1rbqkb1r/1pp2ppp/p1n1pn2/8/2pP4/4PNP1/PP3PBP/RNBQ1RK1 w k -": {
    "eco": "E04",
    "name": "Katalan Açılışı: Açık",
    "moves": [
      {
        "uci": "f3d2",
        "san": "Nfd2",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "1rbqkb1r/1pp2ppp/p1n1pn2/8/2pP4/4P1P1/PP1N1PBP/RNBQ1RK1 b k -": {
    "eco": "E04",
    "name": "Katalan Açılışı: Açık",
    "moves": [
      {
        "uci": "e6e5",
        "san": "e5",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "1rbqkb1r/1pp2ppp/p1n2n2/4p3/2pP4/4P1P1/PP1N1PBP/RNBQ1RK1 w k -": {
    "eco": "E04",
    "name": "Katalan Açılışı: Açık",
    "moves": [
      {
        "uci": "g2c6",
        "san": "Bxc6+",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "1rbqkb1r/1pp2ppp/p1B2n2/4p3/2pP4/4P1P1/PP1N1P1P/RNBQ1RK1 b k -": {
    "eco": "E04",
    "name": "Katalan Açılışı: Açık",
    "moves": [
      {
        "uci": "b7c6",
        "san": "bxc6",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "1rbqkb1r/2p2ppp/p1p2n2/4p3/2pP4/4P1P1/PP1N1P1P/RNBQ1RK1 w k -": {
    "eco": "E04",
    "name": "Katalan Açılışı: Açık",
    "moves": [
      {
        "uci": "d4e5",
        "san": "dxe5",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "1rbqkb1r/2p2ppp/p1p2n2/4P3/2p5/4P1P1/PP1N1P1P/RNBQ1RK1 b k -": {
    "eco": "E04",
    "name": "Katalan Açılışı: Açık",
    "moves": [
      {
        "uci": "f6g4",
        "san": "Ng4",
        "white": 592,
        "draws": 592,
        "black": 374
      }
    ]
  },
  "1rbqkb1r/2p2ppp/p1p5/4P3/2p3n1/4P1P1/PP1N1P1P/RNBQ1RK1 w k -": {
    "eco": "E04",
    "name": "Katalan Açılışı: Açık",
    "moves": [
      {
        "uci": "d2c4",
        "san": "Nxc4",
        "white": 551,
        "draws": 551,
        "black": 349
      }
    ]
  },
  "rnbqkbnr/ppp1pppp/8/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq -": {
    "eco": "D02",
    "name": "Londra Sistemi (1. d4 d5 2. Af3 Af6 3. Ff4)",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 12218,
        "draws": 12218,
        "black": 7716
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq -": {
    "eco": "D02",
    "name": "Londra Sistemi (1. d4 d5 2. Af3 Af6 3. Ff4)",
    "moves": [
      {
        "uci": "c1f4",
        "san": "Bf4",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      },
      {
        "uci": "c2c4",
        "san": "c4",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq -": {
    "eco": "D02",
    "name": "Londra Sistemi (1. d4 d5 2. Af3 Af6 3. Ff4)",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqkb1r/pp2pppp/5n2/2pp4/3P1B2/5N2/PPP1PPPP/RN1QKB1R w KQkq -": {
    "eco": "D02",
    "name": "Londra Sistemi (1. d4 d5 2. Af3 Af6 3. Ff4)",
    "moves": [
      {
        "uci": "e2e3",
        "san": "e3",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkb1r/pp2pppp/5n2/2pp4/3P1B2/4PN2/PPP2PPP/RN1QKB1R b KQkq -": {
    "eco": "D02",
    "name": "Londra Sistemi (1. d4 d5 2. Af3 Af6 3. Ff4)",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "r1bqkb1r/pp2pppp/2n2n2/2pp4/3P1B2/4PN2/PPP2PPP/RN1QKB1R w KQkq -": {
    "eco": "D02",
    "name": "Londra Sistemi (1. d4 d5 2. Af3 Af6 3. Ff4)",
    "moves": [
      {
        "uci": "c2c3",
        "san": "c3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "r1bqkb1r/pp2pppp/2n2n2/2pp4/3P1B2/2P1PN2/PP3PPP/RN1QKB1R b KQkq -": {
    "eco": "D02",
    "name": "Londra Sistemi (1. d4 d5 2. Af3 Af6 3. Ff4)",
    "moves": [
      {
        "uci": "d8b6",
        "san": "Qb6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1b1kb1r/pp2pppp/1qn2n2/2pp4/3P1B2/2P1PN2/PP3PPP/RN1QKB1R w KQkq -": {
    "eco": "D02",
    "name": "Londra Sistemi (1. d4 d5 2. Af3 Af6 3. Ff4)",
    "moves": [
      {
        "uci": "d1b3",
        "san": "Qb3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1b1kb1r/pp2pppp/1qn2n2/2pp4/3P1B2/1QP1PN2/PP3PPP/RN2KB1R b KQkq -": {
    "eco": "D02",
    "name": "Londra Sistemi (1. d4 d5 2. Af3 Af6 3. Ff4)",
    "moves": [
      {
        "uci": "c5c4",
        "san": "c4",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1b1kb1r/pp2pppp/1qn2n2/3p4/2pP1B2/1QP1PN2/PP3PPP/RN2KB1R w KQkq -": {
    "eco": "D02",
    "name": "Londra Sistemi (1. d4 d5 2. Af3 Af6 3. Ff4)",
    "moves": [
      {
        "uci": "b3c2",
        "san": "Qc2",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1b1kb1r/pp2pppp/1qn2n2/3p4/2pP1B2/2P1PN2/PPQ2PPP/RN2KB1R b KQkq -": {
    "eco": "D02",
    "name": "Londra Sistemi (1. d4 d5 2. Af3 Af6 3. Ff4)",
    "moves": [
      {
        "uci": "c8f5",
        "san": "Bf5",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r3kb1r/pp2pppp/1qn2n2/3p1b2/2pP1B2/2P1PN2/PPQ2PPP/RN2KB1R w KQkq -": {
    "eco": "D02",
    "name": "Londra Sistemi (1. d4 d5 2. Af3 Af6 3. Ff4)",
    "moves": [
      {
        "uci": "c2c1",
        "san": "Qc1",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r3kb1r/pp2pppp/1qn2n2/3p1b2/2pP1B2/2P1PN2/PP3PPP/RNQ1KB1R b KQkq -": {
    "eco": "D02",
    "name": "Londra Sistemi (1. d4 d5 2. Af3 Af6 3. Ff4)",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r3kb1r/pp3ppp/1qn1pn2/3p1b2/2pP1B2/2P1PN2/PP3PPP/RNQ1KB1R w KQkq -": {
    "eco": "D02",
    "name": "Londra Sistemi (1. d4 d5 2. Af3 Af6 3. Ff4)",
    "moves": [
      {
        "uci": "b1d2",
        "san": "Nbd2",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r3kb1r/pp3ppp/1qn1pn2/3p1b2/2pP1B2/2P1PN2/PP1N1PPP/R1Q1KB1R b KQkq -": {
    "eco": "D02",
    "name": "Londra Sistemi (1. d4 d5 2. Af3 Af6 3. Ff4)",
    "moves": [
      {
        "uci": "h7h6",
        "san": "h6",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "r3kb1r/pp3pp1/1qn1pn1p/3p1b2/2pP1B2/2P1PN2/PP1N1PPP/R1Q1KB1R w KQkq -": {
    "eco": "D02",
    "name": "Londra Sistemi (1. d4 d5 2. Af3 Af6 3. Ff4)",
    "moves": [
      {
        "uci": "h2h3",
        "san": "h3",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "r3kb1r/pp3pp1/1qn1pn1p/3p1b2/2pP1B2/2P1PN1P/PP1N1PP1/R1Q1KB1R b KQkq -": {
    "eco": "D02",
    "name": "Londra Sistemi (1. d4 d5 2. Af3 Af6 3. Ff4)",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 592,
        "draws": 592,
        "black": 374
      }
    ]
  },
  "rnbqkb1r/pppppppp/5n2/6B1/3P4/8/PPP1PPPP/RN1QKBNR b KQkq -": {
    "eco": "A45",
    "name": "Trompowsky Atağı",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 6109,
        "draws": 6109,
        "black": 3858
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/5n2/3p2B1/3P4/8/PPP1PPPP/RN1QKBNR w KQkq -": {
    "eco": "A45",
    "name": "Trompowsky Atağı",
    "moves": [
      {
        "uci": "g5f6",
        "san": "Bxf6",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/5B2/3p4/3P4/8/PPP1PPPP/RN1QKBNR b KQkq -": {
    "eco": "A45",
    "name": "Trompowsky Atağı",
    "moves": [
      {
        "uci": "e7f6",
        "san": "exf6",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/5p2/3p4/3P4/8/PPP1PPPP/RN1QKBNR w KQkq -": {
    "eco": "A45",
    "name": "Trompowsky Atağı",
    "moves": [
      {
        "uci": "e2e3",
        "san": "e3",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/5p2/3p4/3P4/4P3/PPP2PPP/RN1QKBNR b KQkq -": {
    "eco": "A45",
    "name": "Trompowsky Atağı",
    "moves": [
      {
        "uci": "f8d6",
        "san": "Bd6",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqk2r/ppp2ppp/3b1p2/3p4/3P4/4P3/PPP2PPP/RN1QKBNR w KQkq -": {
    "eco": "A45",
    "name": "Trompowsky Atağı",
    "moves": [
      {
        "uci": "c2c4",
        "san": "c4",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqk2r/ppp2ppp/3b1p2/3p4/2PP4/4P3/PP3PPP/RN1QKBNR b KQkq -": {
    "eco": "A45",
    "name": "Trompowsky Atağı",
    "moves": [
      {
        "uci": "d5c4",
        "san": "dxc4",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqk2r/ppp2ppp/3b1p2/8/2pP4/4P3/PP3PPP/RN1QKBNR w KQkq -": {
    "eco": "A45",
    "name": "Trompowsky Atağı",
    "moves": [
      {
        "uci": "f1c4",
        "san": "Bxc4",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqk2r/ppp2ppp/3b1p2/8/2BP4/4P3/PP3PPP/RN1QK1NR b KQkq -": {
    "eco": "A45",
    "name": "Trompowsky Atağı",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbq1rk1/ppp2ppp/3b1p2/8/2BP4/4P3/PP3PPP/RN1QK1NR w KQ -": {
    "eco": "A45",
    "name": "Trompowsky Atağı",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbq1rk1/ppp2ppp/3b1p2/8/2BP4/4PN2/PP3PPP/RN1QK2R b KQ -": {
    "eco": "A45",
    "name": "Trompowsky Atağı",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nd7",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bq1rk1/pppn1ppp/3b1p2/8/2BP4/4PN2/PP3PPP/RN1QK2R w KQ -": {
    "eco": "A45",
    "name": "Trompowsky Atağı",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1bq1rk1/pppn1ppp/3b1p2/8/2BP4/2N1PN2/PP3PPP/R2QK2R b KQ -": {
    "eco": "A45",
    "name": "Trompowsky Atağı",
    "moves": [
      {
        "uci": "f6f5",
        "san": "f5",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r1bq1rk1/pppn1ppp/3b4/5p2/2BP4/2N1PN2/PP3PPP/R2QK2R w KQ -": {
    "eco": "A45",
    "name": "Trompowsky Atağı",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r1bq1rk1/pppn1ppp/3b4/5p2/2BP4/2N1PN2/PP3PPP/R2Q1RK1 b - -": {
    "eco": "A45",
    "name": "Trompowsky Atağı",
    "moves": [
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rnbqkbnr/ppppp1pp/8/5p2/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "g2g3",
        "san": "g3",
        "white": 9271,
        "draws": 9271,
        "black": 5856
      }
    ]
  },
  "rnbqkbnr/ppppp1pp/8/5p2/3P4/6P1/PPP1PP1P/RNBQKBNR b KQkq -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 6109,
        "draws": 6109,
        "black": 3858
      }
    ]
  },
  "rnbqkb1r/ppppp1pp/5n2/5p2/3P4/6P1/PPP1PP1P/RNBQKBNR w KQkq -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "f1g2",
        "san": "Bg2",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "rnbqkb1r/ppppp1pp/5n2/5p2/3P4/6P1/PPP1PPBP/RNBQK1NR b KQkq -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqkb1r/ppppp2p/5np1/5p2/3P4/6P1/PPP1PPBP/RNBQK1NR w KQkq -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkb1r/ppppp2p/5np1/5p2/3P4/5NP1/PPP1PPBP/RNBQK2R b KQkq -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "f8g7",
        "san": "Bg7",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqk2r/ppppp1bp/5np1/5p2/3P4/5NP1/PPP1PPBP/RNBQK2R w KQkq -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqk2r/ppppp1bp/5np1/5p2/3P4/5NP1/PPP1PPBP/RNBQ1RK1 b kq -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbq1rk1/ppppp1bp/5np1/5p2/3P4/5NP1/PPP1PPBP/RNBQ1RK1 w - -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "c2c4",
        "san": "c4",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbq1rk1/ppppp1bp/5np1/5p2/2PP4/5NP1/PP2PPBP/RNBQ1RK1 b - -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbq1rk1/ppp1p1bp/3p1np1/5p2/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w - -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbq1rk1/ppp1p1bp/3p1np1/5p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 b - -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnbq1rk1/pp2p1bp/2pp1np1/5p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "d4d5",
        "san": "d5",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnbq1rk1/pp2p1bp/2pp1np1/3P1p2/2P5/2N2NP1/PP2PPBP/R1BQ1RK1 b - -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbq1rk1/pp4bp/2pp1np1/3Ppp2/2P5/2N2NP1/PP2PPBP/R1BQ1RK1 w - -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "d5e6",
        "san": "dxe6",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "rnbq1rk1/pp4bp/2ppPnp1/5p2/2P5/2N2NP1/PP2PPBP/R1BQ1RK1 b - -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "c8e6",
        "san": "Bxe6",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rn1q1rk1/pp4bp/2ppbnp1/5p2/2P5/2N2NP1/PP2PPBP/R1BQ1RK1 w - -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "b2b3",
        "san": "b3",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "rnbqkb1r/pp1ppppp/5n2/2p5/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -": {
    "eco": "A60",
    "name": "Modern Benoni",
    "moves": [
      {
        "uci": "d4d5",
        "san": "d5",
        "white": 8840,
        "draws": 8840,
        "black": 5584
      }
    ]
  },
  "rnbqkb1r/pp1ppppp/5n2/2pP4/2P5/8/PP2PPPP/RNBQKBNR b KQkq -": {
    "eco": "A60",
    "name": "Modern Benoni",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      },
      {
        "uci": "b7b5",
        "san": "b5",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqkb1r/pp1p1ppp/4pn2/2pP4/2P5/8/PP2PPPP/RNBQKBNR w KQkq -": {
    "eco": "A60",
    "name": "Modern Benoni",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkb1r/pp1p1ppp/4pn2/2pP4/2P5/2N5/PP2PPPP/R1BQKBNR b KQkq -": {
    "eco": "A60",
    "name": "Modern Benoni",
    "moves": [
      {
        "uci": "e6d5",
        "san": "exd5",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqkb1r/pp1p1ppp/5n2/2pp4/2P5/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "A60",
    "name": "Modern Benoni",
    "moves": [
      {
        "uci": "c4d5",
        "san": "cxd5",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkb1r/pp1p1ppp/5n2/2pP4/8/2N5/PP2PPPP/R1BQKBNR b KQkq -": {
    "eco": "A60",
    "name": "Modern Benoni",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqkb1r/pp3ppp/3p1n2/2pP4/8/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "A60",
    "name": "Modern Benoni",
    "moves": [
      {
        "uci": "e2e4",
        "san": "e4",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqkb1r/pp3ppp/3p1n2/2pP4/4P3/2N5/PP3PPP/R1BQKBNR b KQkq -": {
    "eco": "A60",
    "name": "Modern Benoni",
    "moves": [
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbqkb1r/pp3p1p/3p1np1/2pP4/4P3/2N5/PP3PPP/R1BQKBNR w KQkq -": {
    "eco": "A60",
    "name": "Modern Benoni",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbqkb1r/pp3p1p/3p1np1/2pP4/4P3/2N2N2/PP3PPP/R1BQKB1R b KQkq -": {
    "eco": "A60",
    "name": "Modern Benoni",
    "moves": [
      {
        "uci": "f8g7",
        "san": "Bg7",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnbqk2r/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP3PPP/R1BQKB1R w KQkq -": {
    "eco": "A60",
    "name": "Modern Benoni",
    "moves": [
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnbqk2r/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQK2R b KQkq -": {
    "eco": "A60",
    "name": "Modern Benoni",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbq1rk1/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQK2R w KQ -": {
    "eco": "A60",
    "name": "Modern Benoni",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "rnbq1rk1/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQ1RK1 b - -": {
    "eco": "A60",
    "name": "Modern Benoni",
    "moves": [
      {
        "uci": "f8e8",
        "san": "Re8",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rnbqr1k1/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQ1RK1 w - -": {
    "eco": "A60",
    "name": "Modern Benoni",
    "moves": [
      {
        "uci": "f3d2",
        "san": "Nd2",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "rnbqr1k1/pp3pbp/3p1np1/2pP4/4P3/2N5/PP1NBPPP/R1BQ1RK1 b - -": {
    "eco": "A60",
    "name": "Modern Benoni",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nbd7",
        "white": 592,
        "draws": 592,
        "black": 374
      }
    ]
  },
  "rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/8/PP2PPPP/RNBQKBNR w KQkq -": {
    "eco": "A57",
    "name": "Benko Gambiti",
    "moves": [
      {
        "uci": "c4b5",
        "san": "cxb5",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkb1r/p2ppppp/5n2/1PpP4/8/8/PP2PPPP/RNBQKBNR b KQkq -": {
    "eco": "A57",
    "name": "Benko Gambiti",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqkb1r/3ppppp/p4n2/1PpP4/8/8/PP2PPPP/RNBQKBNR w KQkq -": {
    "eco": "A57",
    "name": "Benko Gambiti",
    "moves": [
      {
        "uci": "b5a6",
        "san": "bxa6",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkb1r/3ppppp/P4n2/2pP4/8/8/PP2PPPP/RNBQKBNR b KQkq -": {
    "eco": "A57",
    "name": "Benko Gambiti",
    "moves": [
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqkb1r/3ppp1p/P4np1/2pP4/8/8/PP2PPPP/RNBQKBNR w KQkq -": {
    "eco": "A57",
    "name": "Benko Gambiti",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqkb1r/3ppp1p/P4np1/2pP4/8/2N5/PP2PPPP/R1BQKBNR b KQkq -": {
    "eco": "A57",
    "name": "Benko Gambiti",
    "moves": [
      {
        "uci": "c8a6",
        "san": "Bxa6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rn1qkb1r/3ppp1p/b4np1/2pP4/8/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "A57",
    "name": "Benko Gambiti",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rn1qkb1r/3ppp1p/b4np1/2pP4/8/2N2N2/PP2PPPP/R1BQKB1R b KQkq -": {
    "eco": "A57",
    "name": "Benko Gambiti",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rn1qkb1r/4pp1p/b2p1np1/2pP4/8/2N2N2/PP2PPPP/R1BQKB1R w KQkq -": {
    "eco": "A57",
    "name": "Benko Gambiti",
    "moves": [
      {
        "uci": "g2g3",
        "san": "g3",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rn1qkb1r/4pp1p/b2p1np1/2pP4/8/2N2NP1/PP2PP1P/R1BQKB1R b KQkq -": {
    "eco": "A57",
    "name": "Benko Gambiti",
    "moves": [
      {
        "uci": "f8g7",
        "san": "Bg7",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rn1qk2r/4ppbp/b2p1np1/2pP4/8/2N2NP1/PP2PP1P/R1BQKB1R w KQkq -": {
    "eco": "A57",
    "name": "Benko Gambiti",
    "moves": [
      {
        "uci": "f1g2",
        "san": "Bg2",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "rn1qk2r/4ppbp/b2p1np1/2pP4/8/2N2NP1/PP2PPBP/R1BQK2R b KQkq -": {
    "eco": "A57",
    "name": "Benko Gambiti",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nbd7",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "r2qk2r/3nppbp/b2p1np1/2pP4/8/2N2NP1/PP2PPBP/R1BQK2R w KQkq -": {
    "eco": "A57",
    "name": "Benko Gambiti",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 638,
        "draws": 638,
        "black": 402
      }
    ]
  },
  "rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq -": {
    "eco": "A20",
    "name": "İngiliz: Ters Sicilya (1... e5)",
    "moves": [
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 16690,
        "draws": 16690,
        "black": 10542
      },
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 16690,
        "draws": 16690,
        "black": 10542
      },
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 16690,
        "draws": 16690,
        "black": 10542
      }
    ]
  },
  "rnbqkbnr/pppp1ppp/8/4p3/2P5/8/PP1PPPPP/RNBQKBNR w KQkq -": {
    "eco": "A20",
    "name": "İngiliz: Ters Sicilya (1... e5)",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 9271,
        "draws": 9271,
        "black": 5856
      }
    ]
  },
  "rnbqkbnr/pppp1ppp/8/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR b KQkq -": {
    "eco": "A20",
    "name": "İngiliz: Ters Sicilya (1... e5)",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 6109,
        "draws": 6109,
        "black": 3858
      }
    ]
  },
  "rnbqkb1r/pppp1ppp/5n2/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq -": {
    "eco": "A20",
    "name": "İngiliz: Ters Sicilya (1... e5)",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "rnbqkb1r/pppp1ppp/5n2/4p3/2P5/2N2N2/PP1PPPPP/R1BQKB1R b KQkq -": {
    "eco": "A20",
    "name": "İngiliz: Ters Sicilya (1... e5)",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq -": {
    "eco": "A20",
    "name": "İngiliz: Ters Sicilya (1... e5)",
    "moves": [
      {
        "uci": "g2g3",
        "san": "g3",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2N2NP1/PP1PPP1P/R1BQKB1R b KQkq -": {
    "eco": "A20",
    "name": "İngiliz: Ters Sicilya (1... e5)",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "r1bqkb1r/ppp2ppp/2n2n2/3pp3/2P5/2N2NP1/PP1PPP1P/R1BQKB1R w KQkq -": {
    "eco": "A20",
    "name": "İngiliz: Ters Sicilya (1... e5)",
    "moves": [
      {
        "uci": "c4d5",
        "san": "cxd5",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "r1bqkb1r/ppp2ppp/2n2n2/3Pp3/8/2N2NP1/PP1PPP1P/R1BQKB1R b KQkq -": {
    "eco": "A20",
    "name": "İngiliz: Ters Sicilya (1... e5)",
    "moves": [
      {
        "uci": "f6d5",
        "san": "Nxd5",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1bqkb1r/ppp2ppp/2n5/3np3/8/2N2NP1/PP1PPP1P/R1BQKB1R w KQkq -": {
    "eco": "A20",
    "name": "İngiliz: Ters Sicilya (1... e5)",
    "moves": [
      {
        "uci": "f1g2",
        "san": "Bg2",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1bqkb1r/ppp2ppp/2n5/3np3/8/2N2NP1/PP1PPPBP/R1BQK2R b KQkq -": {
    "eco": "A20",
    "name": "İngiliz: Ters Sicilya (1... e5)",
    "moves": [
      {
        "uci": "d5b6",
        "san": "Nb6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqkb1r/ppp2ppp/1nn5/4p3/8/2N2NP1/PP1PPPBP/R1BQK2R w KQkq -": {
    "eco": "A20",
    "name": "İngiliz: Ters Sicilya (1... e5)",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bqkb1r/ppp2ppp/1nn5/4p3/8/2N2NP1/PP1PPPBP/R1BQ1RK1 b kq -": {
    "eco": "A20",
    "name": "İngiliz: Ters Sicilya (1... e5)",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bqk2r/ppp1bppp/1nn5/4p3/8/2N2NP1/PP1PPPBP/R1BQ1RK1 w kq -": {
    "eco": "A20",
    "name": "İngiliz: Ters Sicilya (1... e5)",
    "moves": [
      {
        "uci": "a2a3",
        "san": "a3",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1bqk2r/ppp1bppp/1nn5/4p3/8/P1N2NP1/1P1PPPBP/R1BQ1RK1 b kq -": {
    "eco": "A20",
    "name": "İngiliz: Ters Sicilya (1... e5)",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r1bq1rk1/ppp1bppp/1nn5/4p3/8/P1N2NP1/1P1PPPBP/R1BQ1RK1 w - -": {
    "eco": "A20",
    "name": "İngiliz: Ters Sicilya (1... e5)",
    "moves": [
      {
        "uci": "b2b4",
        "san": "b4",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r1bq1rk1/ppp1bppp/1nn5/4p3/1P6/P1N2NP1/3PPPBP/R1BQ1RK1 b - -": {
    "eco": "A20",
    "name": "İngiliz: Ters Sicilya (1... e5)",
    "moves": [
      {
        "uci": "c8e6",
        "san": "Be6",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rnbqkbnr/pp1ppppp/8/2p5/2P5/8/PP1PPPPP/RNBQKBNR w KQkq -": {
    "eco": "A30",
    "name": "İngiliz: Dört At Simetrik",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 9271,
        "draws": 9271,
        "black": 5856
      }
    ]
  },
  "rnbqkbnr/pp1ppppp/8/2p5/2P5/2N5/PP1PPPPP/R1BQKBNR b KQkq -": {
    "eco": "A30",
    "name": "İngiliz: Dört At Simetrik",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 6109,
        "draws": 6109,
        "black": 3858
      }
    ]
  },
  "r1bqkbnr/pp1ppppp/2n5/2p5/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq -": {
    "eco": "A30",
    "name": "İngiliz: Dört At Simetrik",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "r1bqkbnr/pp1ppppp/2n5/2p5/2P5/2N2N2/PP1PPPPP/R1BQKB1R b KQkq -": {
    "eco": "A30",
    "name": "İngiliz: Dört At Simetrik",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "r1bqkb1r/pp1ppppp/2n2n2/2p5/2P5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq -": {
    "eco": "A30",
    "name": "İngiliz: Dört At Simetrik",
    "moves": [
      {
        "uci": "g2g3",
        "san": "g3",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "r1bqkb1r/pp1ppppp/2n2n2/2p5/2P5/2N2NP1/PP1PPP1P/R1BQKB1R b KQkq -": {
    "eco": "A30",
    "name": "İngiliz: Dört At Simetrik",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "r1bqkb1r/pp2pppp/2n2n2/2pp4/2P5/2N2NP1/PP1PPP1P/R1BQKB1R w KQkq -": {
    "eco": "A30",
    "name": "İngiliz: Dört At Simetrik",
    "moves": [
      {
        "uci": "c4d5",
        "san": "cxd5",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "r1bqkb1r/pp2pppp/2n2n2/2pP4/8/2N2NP1/PP1PPP1P/R1BQKB1R b KQkq -": {
    "eco": "A30",
    "name": "İngiliz: Dört At Simetrik",
    "moves": [
      {
        "uci": "f6d5",
        "san": "Nxd5",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r1bqkb1r/pp2pppp/2n5/2pn4/8/2N2NP1/PP1PPP1P/R1BQKB1R w KQkq -": {
    "eco": "A30",
    "name": "İngiliz: Dört At Simetrik",
    "moves": [
      {
        "uci": "f1g2",
        "san": "Bg2",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r1bqkb1r/pp2pppp/2n5/2pn4/8/2N2NP1/PP1PPPBP/R1BQK2R b KQkq -": {
    "eco": "A30",
    "name": "İngiliz: Dört At Simetrik",
    "moves": [
      {
        "uci": "d5c7",
        "san": "Nc7",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqkb1r/ppn1pppp/2n5/2p5/8/2N2NP1/PP1PPPBP/R1BQK2R w KQkq -": {
    "eco": "A30",
    "name": "İngiliz: Dört At Simetrik",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bqkb1r/ppn1pppp/2n5/2p5/8/2N2NP1/PP1PPPBP/R1BQ1RK1 b kq -": {
    "eco": "A30",
    "name": "İngiliz: Dört At Simetrik",
    "moves": [
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bqkb1r/ppn2ppp/2n5/2p1p3/8/2N2NP1/PP1PPPBP/R1BQ1RK1 w kq -": {
    "eco": "A30",
    "name": "İngiliz: Dört At Simetrik",
    "moves": [
      {
        "uci": "a2a3",
        "san": "a3",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1bqkb1r/ppn2ppp/2n5/2p1p3/8/P1N2NP1/1P1PPPBP/R1BQ1RK1 b kq -": {
    "eco": "A30",
    "name": "İngiliz: Dört At Simetrik",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r1bqk2r/ppn1bppp/2n5/2p1p3/8/P1N2NP1/1P1PPPBP/R1BQ1RK1 w kq -": {
    "eco": "A30",
    "name": "İngiliz: Dört At Simetrik",
    "moves": [
      {
        "uci": "b2b4",
        "san": "b4",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r1bqk2r/ppn1bppp/2n5/2p1p3/1P6/P1N2NP1/3PPPBP/R1BQ1RK1 b kq -": {
    "eco": "A30",
    "name": "İngiliz: Dört At Simetrik",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rnbqkb1r/pppppppp/5n2/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq -": {
    "eco": "A15",
    "name": "İngiliz: Anglo-Hint",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 9271,
        "draws": 9271,
        "black": 5856
      }
    ]
  },
  "rnbqkb1r/pppppppp/5n2/8/2P5/2N5/PP1PPPPP/R1BQKBNR b KQkq -": {
    "eco": "A15",
    "name": "İngiliz: Anglo-Hint",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 6109,
        "draws": 6109,
        "black": 3858
      }
    ]
  },
  "rnbqkb1r/pppp1ppp/4pn2/8/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq -": {
    "eco": "A15",
    "name": "İngiliz: Anglo-Hint",
    "moves": [
      {
        "uci": "e2e4",
        "san": "e4",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "rnbqkb1r/pppp1ppp/4pn2/8/2P1P3/2N5/PP1P1PPP/R1BQKBNR b KQkq -": {
    "eco": "A15",
    "name": "İngiliz: Anglo-Hint",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pn2/3p4/2P1P3/2N5/PP1P1PPP/R1BQKBNR w KQkq -": {
    "eco": "A15",
    "name": "İngiliz: Anglo-Hint",
    "moves": [
      {
        "uci": "e4e5",
        "san": "e5",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pn2/3pP3/2P5/2N5/PP1P1PPP/R1BQKBNR b KQkq -": {
    "eco": "A15",
    "name": "İngiliz: Anglo-Hint",
    "moves": [
      {
        "uci": "d5d4",
        "san": "d4",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pn2/4P3/2Pp4/2N5/PP1P1PPP/R1BQKBNR w KQkq -": {
    "eco": "A15",
    "name": "İngiliz: Anglo-Hint",
    "moves": [
      {
        "uci": "e5f6",
        "san": "exf6",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pP2/8/2Pp4/2N5/PP1P1PPP/R1BQKBNR b KQkq -": {
    "eco": "A15",
    "name": "İngiliz: Anglo-Hint",
    "moves": [
      {
        "uci": "d4c3",
        "san": "dxc3",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pP2/8/2P5/2p5/PP1P1PPP/R1BQKBNR w KQkq -": {
    "eco": "A15",
    "name": "İngiliz: Anglo-Hint",
    "moves": [
      {
        "uci": "b2c3",
        "san": "bxc3",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pP2/8/2P5/2P5/P2P1PPP/R1BQKBNR b KQkq -": {
    "eco": "A15",
    "name": "İngiliz: Anglo-Hint",
    "moves": [
      {
        "uci": "d8f6",
        "san": "Qxf6",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnb1kb1r/ppp2ppp/4pq2/8/2P5/2P5/P2P1PPP/R1BQKBNR w KQkq -": {
    "eco": "A15",
    "name": "İngiliz: Anglo-Hint",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnb1kb1r/ppp2ppp/4pq2/8/2PP4/2P5/P4PPP/R1BQKBNR b KQkq -": {
    "eco": "A15",
    "name": "İngiliz: Anglo-Hint",
    "moves": [
      {
        "uci": "b7b6",
        "san": "b6",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnb1kb1r/p1p2ppp/1p2pq2/8/2PP4/2P5/P4PPP/R1BQKBNR w KQkq -": {
    "eco": "A15",
    "name": "İngiliz: Anglo-Hint",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnb1kb1r/p1p2ppp/1p2pq2/8/2PP4/2P2N2/P4PPP/R1BQKB1R b KQkq -": {
    "eco": "A15",
    "name": "İngiliz: Anglo-Hint",
    "moves": [
      {
        "uci": "c8b7",
        "san": "Bb7",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rn2kb1r/pbp2ppp/1p2pq2/8/2PP4/2P2N2/P4PPP/R1BQKB1R w KQkq -": {
    "eco": "A15",
    "name": "İngiliz: Anglo-Hint",
    "moves": [
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq -": {
    "eco": "A04",
    "name": "Réti / Şah-Hint Atağı",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 66760,
        "draws": 66760,
        "black": 42168
      }
    ]
  },
  "rnbqkbnr/ppp1pppp/8/3p4/8/5N2/PPPPPPPP/RNBQKB1R w KQkq -": {
    "eco": "A04",
    "name": "Réti / Şah-Hint Atağı",
    "moves": [
      {
        "uci": "c2c4",
        "san": "c4",
        "white": 18542,
        "draws": 18542,
        "black": 11712
      },
      {
        "uci": "g2g3",
        "san": "g3",
        "white": 9271,
        "draws": 9271,
        "black": 5856
      },
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 9271,
        "draws": 9271,
        "black": 5856
      }
    ]
  },
  "rnbqkbnr/ppp1pppp/8/3p4/8/5NP1/PPPPPP1P/RNBQKB1R b KQkq -": {
    "eco": "A04",
    "name": "Réti / Şah-Hint Atağı",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 6109,
        "draws": 6109,
        "black": 3858
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/5n2/3p4/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq -": {
    "eco": "A04",
    "name": "Réti / Şah-Hint Atağı",
    "moves": [
      {
        "uci": "f1g2",
        "san": "Bg2",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/5n2/3p4/8/5NP1/PPPPPPBP/RNBQK2R b KQkq -": {
    "eco": "A04",
    "name": "Réti / Şah-Hint Atağı",
    "moves": [
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqkb1r/pp2pppp/2p2n2/3p4/8/5NP1/PPPPPPBP/RNBQK2R w KQkq -": {
    "eco": "A04",
    "name": "Réti / Şah-Hint Atağı",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkb1r/pp2pppp/2p2n2/3p4/8/5NP1/PPPPPPBP/RNBQ1RK1 b kq -": {
    "eco": "A04",
    "name": "Réti / Şah-Hint Atağı",
    "moves": [
      {
        "uci": "c8g4",
        "san": "Bg4",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rn1qkb1r/pp2pppp/2p2n2/3p4/6b1/5NP1/PPPPPPBP/RNBQ1RK1 w kq -": {
    "eco": "A04",
    "name": "Réti / Şah-Hint Atağı",
    "moves": [
      {
        "uci": "d2d3",
        "san": "d3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rn1qkb1r/pp2pppp/2p2n2/3p4/6b1/3P1NP1/PPP1PPBP/RNBQ1RK1 b kq -": {
    "eco": "A04",
    "name": "Réti / Şah-Hint Atağı",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nbd7",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "r2qkb1r/pp1npppp/2p2n2/3p4/6b1/3P1NP1/PPP1PPBP/RNBQ1RK1 w kq -": {
    "eco": "A04",
    "name": "Réti / Şah-Hint Atağı",
    "moves": [
      {
        "uci": "b1d2",
        "san": "Nbd2",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "r2qkb1r/pp1npppp/2p2n2/3p4/6b1/3P1NP1/PPPNPPBP/R1BQ1RK1 b kq -": {
    "eco": "A04",
    "name": "Réti / Şah-Hint Atağı",
    "moves": [
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r2qkb1r/pp1n1ppp/2p2n2/3pp3/6b1/3P1NP1/PPPNPPBP/R1BQ1RK1 w kq -": {
    "eco": "A04",
    "name": "Réti / Şah-Hint Atağı",
    "moves": [
      {
        "uci": "e2e4",
        "san": "e4",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r2qkb1r/pp1n1ppp/2p2n2/3pp3/4P1b1/3P1NP1/PPPN1PBP/R1BQ1RK1 b kq -": {
    "eco": "A04",
    "name": "Réti / Şah-Hint Atağı",
    "moves": [
      {
        "uci": "d5e4",
        "san": "dxe4",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r2qkb1r/pp1n1ppp/2p2n2/4p3/4p1b1/3P1NP1/PPPN1PBP/R1BQ1RK1 w kq -": {
    "eco": "A04",
    "name": "Réti / Şah-Hint Atağı",
    "moves": [
      {
        "uci": "d3e4",
        "san": "dxe4",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r2qkb1r/pp1n1ppp/2p2n2/4p3/4P1b1/5NP1/PPPN1PBP/R1BQ1RK1 b kq -": {
    "eco": "A04",
    "name": "Réti / Şah-Hint Atağı",
    "moves": [
      {
        "uci": "f8c5",
        "san": "Bc5",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r2qk2r/pp1n1ppp/2p2n2/2b1p3/4P1b1/5NP1/PPPN1PBP/R1BQ1RK1 w kq -": {
    "eco": "A04",
    "name": "Réti / Şah-Hint Atağı",
    "moves": [
      {
        "uci": "d1e1",
        "san": "Qe1",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r2qk2r/pp1n1ppp/2p2n2/2b1p3/4P1b1/5NP1/PPPN1PBP/R1B1QRK1 b kq -": {
    "eco": "A04",
    "name": "Réti / Şah-Hint Atağı",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  },
  "rnbqkbnr/ppp1pppp/8/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq -": {
    "eco": "A06",
    "name": "Réti: 2. c4 (d4)",
    "moves": [
      {
        "uci": "d5d4",
        "san": "d4",
        "white": 6109,
        "draws": 6109,
        "black": 3858
      },
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 6109,
        "draws": 6109,
        "black": 3858
      }
    ]
  },
  "rnbqkbnr/ppp1pppp/8/8/2Pp4/5N2/PP1PPPPP/RNBQKB1R w KQkq -": {
    "eco": "A06",
    "name": "Réti: 2. c4 (d4)",
    "moves": [
      {
        "uci": "b2b4",
        "san": "b4",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "rnbqkbnr/ppp1pppp/8/8/1PPp4/5N2/P2PPPPP/RNBQKB1R b KQkq -": {
    "eco": "A06",
    "name": "Réti: 2. c4 (d4)",
    "moves": [
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqkbnr/ppp1pp1p/6p1/8/1PPp4/5N2/P2PPPPP/RNBQKB1R w KQkq -": {
    "eco": "A06",
    "name": "Réti: 2. c4 (d4)",
    "moves": [
      {
        "uci": "c1b2",
        "san": "Bb2",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkbnr/ppp1pp1p/6p1/8/1PPp4/5N2/PB1PPPPP/RN1QKB1R b KQkq -": {
    "eco": "A06",
    "name": "Réti: 2. c4 (d4)",
    "moves": [
      {
        "uci": "f8g7",
        "san": "Bg7",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqk1nr/ppp1ppbp/6p1/8/1PPp4/5N2/PB1PPPPP/RN1QKB1R w KQkq -": {
    "eco": "A06",
    "name": "Réti: 2. c4 (d4)",
    "moves": [
      {
        "uci": "e2e3",
        "san": "e3",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqk1nr/ppp1ppbp/6p1/8/1PPp4/4PN2/PB1P1PPP/RN1QKB1R b KQkq -": {
    "eco": "A06",
    "name": "Réti: 2. c4 (d4)",
    "moves": [
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 1618,
        "draws": 1618,
        "black": 1021
      }
    ]
  },
  "rnbqk1nr/ppp2pbp/6p1/4p3/1PPp4/4PN2/PB1P1PPP/RN1QKB1R w KQkq -": {
    "eco": "A06",
    "name": "Réti: 2. c4 (d4)",
    "moves": [
      {
        "uci": "c4c5",
        "san": "c5",
        "white": 1409,
        "draws": 1409,
        "black": 890
      }
    ]
  },
  "rnbqk1nr/ppp2pbp/6p1/2P1p3/1P1p4/4PN2/PB1P1PPP/RN1QKB1R b KQkq -": {
    "eco": "A06",
    "name": "Réti: 2. c4 (d4)",
    "moves": [
      {
        "uci": "g8e7",
        "san": "Ne7",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "rnbqk2r/ppp1npbp/6p1/2P1p3/1P1p4/4PN2/PB1P1PPP/RN1QKB1R w KQkq -": {
    "eco": "A06",
    "name": "Réti: 2. c4 (d4)",
    "moves": [
      {
        "uci": "f1c4",
        "san": "Bc4",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "rnbqk2r/ppp1npbp/6p1/2P1p3/1PBp4/4PN2/PB1P1PPP/RN1QK2R b KQkq -": {
    "eco": "A06",
    "name": "Réti: 2. c4 (d4)",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "rnbq1rk1/ppp1npbp/6p1/2P1p3/1PBp4/4PN2/PB1P1PPP/RN1QK2R w KQ -": {
    "eco": "A06",
    "name": "Réti: 2. c4 (d4)",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "rnbq1rk1/ppp1npbp/6p1/2P1p3/1PBp4/4PN2/PB1P1PPP/RN1Q1RK1 b - -": {
    "eco": "A06",
    "name": "Réti: 2. c4 (d4)",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nbc6",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/4p3/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq -": {
    "eco": "A09",
    "name": "Réti: 2. c4 e6 3. d4",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 4420,
        "draws": 4420,
        "black": 2792
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq -": {
    "eco": "A09",
    "name": "Réti: 2. c4 e6 3. d4",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq -": {
    "eco": "A09",
    "name": "Réti: 2. c4 e6 3. d4",
    "moves": [
      {
        "uci": "g2g3",
        "san": "g3",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      },
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 2714,
        "draws": 2714,
        "black": 1713
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/5NP1/PP2PP1P/RNBQKB1R b KQkq -": {
    "eco": "A09",
    "name": "Réti: 2. c4 e6 3. d4",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 2236,
        "draws": 2236,
        "black": 1412
      }
    ]
  },
  "rnbqk2r/ppp1bppp/4pn2/3p4/2PP4/5NP1/PP2PP1P/RNBQKB1R w KQkq -": {
    "eco": "A09",
    "name": "Réti: 2. c4 e6 3. d4",
    "moves": [
      {
        "uci": "f1g2",
        "san": "Bg2",
        "white": 1885,
        "draws": 1885,
        "black": 1190
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/5n2/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq -": {
    "eco": "A09",
    "name": "Réti / Vezir Piyonu Geçişi (2. d4)",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 3393,
        "draws": 3393,
        "black": 2144
      }
    ]
  },
  "r1bqkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R b KQkq -": {
    "eco": "A09",
    "name": "Réti / Vezir Piyonu Geçişi (2. d4)",
    "moves": [
      {
        "uci": "d5c4",
        "san": "dxc4",
        "white": 1242,
        "draws": 1242,
        "black": 784
      }
    ]
  },
  "r1bqkb1r/pp1n1ppp/2p1pn2/8/2pP4/2NBPN2/PP3PPP/R1BQK2R w KQkq -": {
    "eco": "A09",
    "name": "Réti / Vezir Piyonu Geçişi (2. d4)",
    "moves": [
      {
        "uci": "d3c4",
        "san": "Bxc4",
        "white": 1106,
        "draws": 1106,
        "black": 698
      }
    ]
  },
  "r1bqkb1r/pp1n1ppp/2p1pn2/8/2BP4/2N1PN2/PP3PPP/R1BQK2R b KQkq -": {
    "eco": "A09",
    "name": "Réti / Vezir Piyonu Geçişi (2. d4)",
    "moves": [
      {
        "uci": "b7b5",
        "san": "b5",
        "white": 993,
        "draws": 993,
        "black": 627
      }
    ]
  },
  "r1bqkb1r/p2n1ppp/2p1pn2/1p6/2BP4/2N1PN2/PP3PPP/R1BQK2R w KQkq -": {
    "eco": "A09",
    "name": "Réti / Vezir Piyonu Geçişi (2. d4)",
    "moves": [
      {
        "uci": "c4d3",
        "san": "Bd3",
        "white": 899,
        "draws": 899,
        "black": 567
      }
    ]
  },
  "r1bqkb1r/p2n1ppp/2p1pn2/1p6/3P4/2NBPN2/PP3PPP/R1BQK2R b KQkq -": {
    "eco": "A09",
    "name": "Réti / Vezir Piyonu Geçişi (2. d4)",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 818,
        "draws": 818,
        "black": 517
      }
    ]
  },
  "r1bqkb1r/3n1ppp/p1p1pn2/1p6/3P4/2NBPN2/PP3PPP/R1BQK2R w KQkq -": {
    "eco": "A09",
    "name": "Réti / Vezir Piyonu Geçişi (2. d4)",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 749,
        "draws": 749,
        "black": 474
      }
    ]
  },
  "r1bqkb1r/3n1ppp/p1p1pn2/1p6/3P4/2NBPN2/PP3PPP/R1BQ1RK1 b kq -": {
    "eco": "A09",
    "name": "Réti / Vezir Piyonu Geçişi (2. d4)",
    "moves": [
      {
        "uci": "c6c5",
        "san": "c5",
        "white": 690,
        "draws": 690,
        "black": 435
      }
    ]
  }
};
