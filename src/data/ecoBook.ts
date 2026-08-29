import type { EcoPosition } from '../types/explorer';

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
    "name": "Şah Piyonu Açılışı (King's Pawn)",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 88400,
        "draws": 75600,
        "black": 64200
      },
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 74200,
        "draws": 68100,
        "black": 51400
      },
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 32100,
        "draws": 28400,
        "black": 23800
      },
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 24800,
        "draws": 27200,
        "black": 18600
      },
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 9800,
        "draws": 7100,
        "black": 6900
      },
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 8900,
        "draws": 6800,
        "black": 6100
      }
    ]
  },
  "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    "eco": "B20",
    "name": "Sicilya Savunması (Sicilian Defense)",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 71838,
        "draws": 62628,
        "black": 49734
      },
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 8512,
        "draws": 7392,
        "black": 6496
      },
      {
        "uci": "c2c3",
        "san": "c3",
        "white": 6882,
        "draws": 6696,
        "black": 5022
      },
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 2856,
        "draws": 1700,
        "black": 2244
      },
      {
        "uci": "f2f4",
        "san": "f4",
        "white": 2160,
        "draws": 1512,
        "black": 1728
      },
      {
        "uci": "g2g3",
        "san": "g3",
        "white": 1558,
        "draws": 1435,
        "black": 1107
      }
    ]
  },
  "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq -": {
    "eco": "B27",
    "name": "Açık Sicilya Hazırlığı (Sicilian: Open)",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 34476,
        "draws": 29172,
        "black": 24752
      },
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 20596,
        "draws": 18428,
        "black": 15176
      },
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 17784,
        "draws": 16380,
        "black": 12636
      },
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 4598,
        "draws": 3872,
        "black": 3630
      },
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 1092,
        "draws": 952,
        "black": 756
      }
    ]
  },
  "rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq -": {
    "eco": "B90",
    "name": "Sicilya Savunması: Najdorf Varyantı",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 9734,
        "draws": 8486,
        "black": 6740
      }
    ]
  },
  "rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "B90",
    "name": "Sicilya Savunması: Najdorf Varyantı",
    "moves": [
      {
        "uci": "c5d4",
        "san": "cxd4",
        "white": 5748,
        "draws": 5446,
        "black": 3933
      }
    ]
  },
  "rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "B90",
    "name": "Sicilya Savunması: Najdorf Varyantı",
    "moves": [
      {
        "uci": "f3d4",
        "san": "Nxd4",
        "white": 3209,
        "draws": 3209,
        "black": 2750
      }
    ]
  },
  "rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "B90",
    "name": "Sicilya Savunması: Najdorf Varyantı",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 2111,
        "draws": 2056,
        "black": 1389
      }
    ]
  },
  "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "B90",
    "name": "Sicilya Savunması: Najdorf Varyantı",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 1178,
        "draws": 1178,
        "black": 1011
      }
    ]
  },
  "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq -": {
    "eco": "B90",
    "name": "Sicilya Savunması: Najdorf Varyantı",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 776,
        "draws": 735,
        "black": 530
      },
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq -": {
    "eco": "B90",
    "name": "Sicilya Savunması: Najdorf Varyantı",
    "moves": [
      {
        "uci": "c1e3",
        "san": "Be3",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq -": {
    "eco": "B90",
    "name": "Sicilya Savunması: Najdorf Varyantı",
    "moves": [
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 270,
        "draws": 248,
        "black": 232
      }
    ]
  },
  "rnbqkb1r/1p3ppp/p2p1n2/4p3/3NP3/2N1B3/PPP2PPP/R2QKB1R w KQkq -": {
    "eco": "B90",
    "name": "Sicilya Savunması: Najdorf Varyantı",
    "moves": [
      {
        "uci": "d4b3",
        "san": "Nb3",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "rnbqkb1r/1p3ppp/p2p1n2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R b KQkq -": {
    "eco": "B90",
    "name": "Sicilya Savunması: Najdorf Varyantı",
    "moves": [
      {
        "uci": "c8e6",
        "san": "Be6",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "rn1qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1B3/PPP2PPP/R2QKB1R w KQkq -": {
    "eco": "B90",
    "name": "Sicilya Savunması: Najdorf Varyantı",
    "moves": [
      {
        "uci": "f2f3",
        "san": "f3",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "rn1qkb1r/1p3ppp/p2pbn2/4p3/4P3/1NN1BP2/PPP3PP/R2QKB1R b KQkq -": {
    "eco": "B90",
    "name": "Sicilya Savunması: Najdorf Varyantı",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "rn1qk2r/1p2bppp/p2pbn2/4p3/4P3/1NN1BP2/PPP3PP/R2QKB1R w KQkq -": {
    "eco": "B90",
    "name": "Sicilya Savunması: Najdorf Varyantı",
    "moves": [
      {
        "uci": "d1d2",
        "san": "Qd2",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "rn1qk2r/1p2bppp/p2pbn2/4p3/4P3/1NN1BP2/PPPQ2PP/R3KB1R b KQkq -": {
    "eco": "B90",
    "name": "Sicilya Savunması: Najdorf Varyantı",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "rn1q1rk1/1p2bppp/p2pbn2/4p3/4P3/1NN1BP2/PPPQ2PP/R3KB1R w KQ -": {
    "eco": "B90",
    "name": "Sicilya Savunması: Najdorf Varyantı",
    "moves": [
      {
        "uci": "e1c1",
        "san": "O-O-O",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "rn1q1rk1/1p2bppp/p2pbn2/4p3/4P3/1NN1BP2/PPPQ2PP/2KR1B1R b - -": {
    "eco": "B90",
    "name": "Sicilya Savunması: Najdorf Varyantı",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nbd7",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "r2q1rk1/1p1nbppp/p2pbn2/4p3/4P3/1NN1BP2/PPPQ2PP/2KR1B1R w - -": {
    "eco": "B90",
    "name": "Sicilya Savunması: Najdorf Varyantı",
    "moves": []
  },
  "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq -": {
    "eco": "B33",
    "name": "Sicilya Savunması: Sveshnikov",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 9734,
        "draws": 8486,
        "black": 6740
      }
    ]
  },
  "r1bqkbnr/pp1ppppp/2n5/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "B33",
    "name": "Sicilya Savunması: Sveshnikov",
    "moves": [
      {
        "uci": "c5d4",
        "san": "cxd4",
        "white": 5748,
        "draws": 5446,
        "black": 3933
      }
    ]
  },
  "r1bqkbnr/pp1ppppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "B33",
    "name": "Sicilya Savunması: Sveshnikov",
    "moves": [
      {
        "uci": "f3d4",
        "san": "Nxd4",
        "white": 3209,
        "draws": 3209,
        "black": 2750
      }
    ]
  },
  "r1bqkbnr/pp1ppppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "B33",
    "name": "Sicilya Savunması: Sveshnikov",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 2111,
        "draws": 2056,
        "black": 1389
      }
    ]
  },
  "r1bqkb1r/pp1ppppp/2n2n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "B33",
    "name": "Sicilya Savunması: Sveshnikov",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 1178,
        "draws": 1178,
        "black": 1011
      }
    ]
  },
  "r1bqkb1r/pp1ppppp/2n2n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq -": {
    "eco": "B33",
    "name": "Sicilya Savunması: Sveshnikov",
    "moves": [
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 735,
        "draws": 674,
        "black": 632
      }
    ]
  },
  "r1bqkb1r/pp1p1ppp/2n2n2/4p3/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq -": {
    "eco": "B33",
    "name": "Sicilya Savunması: Sveshnikov",
    "moves": [
      {
        "uci": "d4b5",
        "san": "Ndb5",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "r1bqkb1r/pp1p1ppp/2n2n2/1N2p3/4P3/2N5/PPP2PPP/R1BQKB1R b KQkq -": {
    "eco": "B33",
    "name": "Sicilya Savunması: Sveshnikov",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "r1bqkb1r/pp3ppp/2np1n2/1N2p3/4P3/2N5/PPP2PPP/R1BQKB1R w KQkq -": {
    "eco": "B33",
    "name": "Sicilya Savunması: Sveshnikov",
    "moves": [
      {
        "uci": "c1g5",
        "san": "Bg5",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "r1bqkb1r/pp3ppp/2np1n2/1N2p1B1/4P3/2N5/PPP2PPP/R2QKB1R b KQkq -": {
    "eco": "B33",
    "name": "Sicilya Savunması: Sveshnikov",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "r1bqkb1r/1p3ppp/p1np1n2/1N2p1B1/4P3/2N5/PPP2PPP/R2QKB1R w KQkq -": {
    "eco": "B33",
    "name": "Sicilya Savunması: Sveshnikov",
    "moves": [
      {
        "uci": "b5a3",
        "san": "Na3",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "r1bqkb1r/1p3ppp/p1np1n2/4p1B1/4P3/N1N5/PPP2PPP/R2QKB1R b KQkq -": {
    "eco": "B33",
    "name": "Sicilya Savunması: Sveshnikov",
    "moves": [
      {
        "uci": "b7b5",
        "san": "b5",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "r1bqkb1r/5ppp/p1np1n2/1p2p1B1/4P3/N1N5/PPP2PPP/R2QKB1R w KQkq -": {
    "eco": "B33",
    "name": "Sicilya Savunması: Sveshnikov",
    "moves": [
      {
        "uci": "c3d5",
        "san": "Nd5",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "r1bqkb1r/5ppp/p1np1n2/1p1Np1B1/4P3/N7/PPP2PPP/R2QKB1R b KQkq -": {
    "eco": "B33",
    "name": "Sicilya Savunması: Sveshnikov",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "r1bqk2r/4bppp/p1np1n2/1p1Np1B1/4P3/N7/PPP2PPP/R2QKB1R w KQkq -": {
    "eco": "B33",
    "name": "Sicilya Savunması: Sveshnikov",
    "moves": [
      {
        "uci": "g5f6",
        "san": "Bxf6",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "r1bqk2r/4bppp/p1np1B2/1p1Np3/4P3/N7/PPP2PPP/R2QKB1R b KQkq -": {
    "eco": "B33",
    "name": "Sicilya Savunması: Sveshnikov",
    "moves": [
      {
        "uci": "e7f6",
        "san": "Bxf6",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "r1bqk2r/5ppp/p1np1b2/1p1Np3/4P3/N7/PPP2PPP/R2QKB1R w KQkq -": {
    "eco": "B33",
    "name": "Sicilya Savunması: Sveshnikov",
    "moves": []
  },
  "rnbqkbnr/pp1ppppp/8/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR b KQkq -": {
    "eco": "B22",
    "name": "Sicilya Savunması: Alapin Varyantı",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 15650,
        "draws": 15238,
        "black": 10295
      }
    ]
  },
  "rnbqkbnr/pp2pppp/8/2pp4/4P3/2P5/PP1P1PPP/RNBQKBNR w KQkq -": {
    "eco": "B22",
    "name": "Sicilya Savunması: Alapin Varyantı",
    "moves": [
      {
        "uci": "e4d5",
        "san": "exd5",
        "white": 8736,
        "draws": 8736,
        "black": 7488
      }
    ]
  },
  "rnbqkbnr/pp2pppp/8/2pP4/8/2P5/PP1P1PPP/RNBQKBNR b KQkq -": {
    "eco": "B22",
    "name": "Sicilya Savunması: Alapin Varyantı",
    "moves": [
      {
        "uci": "d8d5",
        "san": "Qxd5",
        "white": 5748,
        "draws": 5446,
        "black": 3933
      }
    ]
  },
  "rnb1kbnr/pp2pppp/8/2pq4/8/2P5/PP1P1PPP/RNBQKBNR w KQkq -": {
    "eco": "B22",
    "name": "Sicilya Savunması: Alapin Varyantı",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 3576,
        "draws": 3117,
        "black": 2475
      }
    ]
  },
  "rnb1kbnr/pp2pppp/8/2pq4/3P4/2P5/PP3PPP/RNBQKBNR b KQkq -": {
    "eco": "B22",
    "name": "Sicilya Savunması: Alapin Varyantı",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 2111,
        "draws": 2056,
        "black": 1389
      }
    ]
  },
  "rnb1kb1r/pp2pppp/5n2/2pq4/3P4/2P5/PP3PPP/RNBQKBNR w KQkq -": {
    "eco": "B22",
    "name": "Sicilya Savunması: Alapin Varyantı",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1246,
        "draws": 1347,
        "black": 774
      }
    ]
  },
  "rnb1kb1r/pp2pppp/5n2/2pq4/3P4/2P2N2/PP3PPP/RNBQKB1R b KQkq -": {
    "eco": "B22",
    "name": "Sicilya Savunması: Alapin Varyantı",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 776,
        "draws": 755,
        "black": 510
      }
    ]
  },
  "rnb1kb1r/pp3ppp/4pn2/2pq4/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq -": {
    "eco": "B22",
    "name": "Sicilya Savunması: Alapin Varyantı",
    "moves": [
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "rnb1kb1r/pp3ppp/4pn2/2pq4/3P4/2P2N2/PP2BPPP/RNBQK2R b KQkq -": {
    "eco": "B22",
    "name": "Sicilya Savunması: Alapin Varyantı",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "r1b1kb1r/pp3ppp/2n1pn2/2pq4/3P4/2P2N2/PP2BPPP/RNBQK2R w KQkq -": {
    "eco": "B22",
    "name": "Sicilya Savunması: Alapin Varyantı",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "r1b1kb1r/pp3ppp/2n1pn2/2pq4/3P4/2P2N2/PP2BPPP/RNBQ1RK1 b kq -": {
    "eco": "B22",
    "name": "Sicilya Savunması: Alapin Varyantı",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "r1b1k2r/pp2bppp/2n1pn2/2pq4/3P4/2P2N2/PP2BPPP/RNBQ1RK1 w kq -": {
    "eco": "B22",
    "name": "Sicilya Savunması: Alapin Varyantı",
    "moves": [
      {
        "uci": "c1e3",
        "san": "Be3",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "r1b1k2r/pp2bppp/2n1pn2/2pq4/3P4/2P1BN2/PP2BPPP/RN1Q1RK1 b kq -": {
    "eco": "B22",
    "name": "Sicilya Savunması: Alapin Varyantı",
    "moves": [
      {
        "uci": "c5d4",
        "san": "cxd4",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "r1b1k2r/pp2bppp/2n1pn2/3q4/3p4/2P1BN2/PP2BPPP/RN1Q1RK1 w kq -": {
    "eco": "B22",
    "name": "Sicilya Savunması: Alapin Varyantı",
    "moves": [
      {
        "uci": "c3d4",
        "san": "cxd4",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "r1b1k2r/pp2bppp/2n1pn2/3q4/3P4/4BN2/PP2BPPP/RN1Q1RK1 b kq -": {
    "eco": "B22",
    "name": "Sicilya Savunması: Alapin Varyantı",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "r1b2rk1/pp2bppp/2n1pn2/3q4/3P4/4BN2/PP2BPPP/RN1Q1RK1 w - -": {
    "eco": "B22",
    "name": "Sicilya Savunması: Alapin Varyantı",
    "moves": []
  },
  "rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq -": {
    "eco": "B20",
    "name": "Sicilya Savunması: Açık Hat",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 9734,
        "draws": 8486,
        "black": 6740
      }
    ]
  },
  "rnbqkbnr/pp1p1ppp/4p3/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "B20",
    "name": "Sicilya Savunması: Açık Hat",
    "moves": [
      {
        "uci": "c5d4",
        "san": "cxd4",
        "white": 5748,
        "draws": 5446,
        "black": 3933
      }
    ]
  },
  "rnbqkbnr/pp1p1ppp/4p3/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "B20",
    "name": "Sicilya Savunması: Açık Hat",
    "moves": [
      {
        "uci": "f3d4",
        "san": "Nxd4",
        "white": 3209,
        "draws": 3209,
        "black": 2750
      }
    ]
  },
  "rnbqkbnr/pp1p1ppp/4p3/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "B20",
    "name": "Sicilya Savunması: Açık Hat",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 2111,
        "draws": 2000,
        "black": 1445
      }
    ]
  },
  "rnbqkbnr/1p1p1ppp/p3p3/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "B20",
    "name": "Sicilya Savunması: Açık Hat",
    "moves": [
      {
        "uci": "f1d3",
        "san": "Bd3",
        "white": 1178,
        "draws": 1178,
        "black": 1011
      }
    ]
  },
  "rnbqkbnr/1p1p1ppp/p3p3/8/3NP3/3B4/PPP2PPP/RNBQK2R b KQkq -": {
    "eco": "B20",
    "name": "Sicilya Savunması: Açık Hat",
    "moves": [
      {
        "uci": "f8c5",
        "san": "Bc5",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "rnbqk1nr/1p1p1ppp/p3p3/2b5/3NP3/3B4/PPP2PPP/RNBQK2R w KQkq -": {
    "eco": "B20",
    "name": "Sicilya Savunması: Açık Hat",
    "moves": [
      {
        "uci": "d4b3",
        "san": "Nb3",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "rnbqk1nr/1p1p1ppp/p3p3/2b5/4P3/1N1B4/PPP2PPP/RNBQK2R b KQkq -": {
    "eco": "B20",
    "name": "Sicilya Savunması: Açık Hat",
    "moves": [
      {
        "uci": "c5a7",
        "san": "Ba7",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "rnbqk1nr/bp1p1ppp/p3p3/8/4P3/1N1B4/PPP2PPP/RNBQK2R w KQkq -": {
    "eco": "B20",
    "name": "Sicilya Savunması: Açık Hat",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "rnbqk1nr/bp1p1ppp/p3p3/8/4P3/1N1B4/PPP2PPP/RNBQ1RK1 b kq -": {
    "eco": "B20",
    "name": "Sicilya Savunması: Açık Hat",
    "moves": [
      {
        "uci": "g8e7",
        "san": "Ne7",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "rnbqk2r/bp1pnppp/p3p3/8/4P3/1N1B4/PPP2PPP/RNBQ1RK1 w kq -": {
    "eco": "B20",
    "name": "Sicilya Savunması: Açık Hat",
    "moves": [
      {
        "uci": "d1e2",
        "san": "Qe2",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "rnbqk2r/bp1pnppp/p3p3/8/4P3/1N1B4/PPP1QPPP/RNB2RK1 b kq -": {
    "eco": "B20",
    "name": "Sicilya Savunması: Açık Hat",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nbc6",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "r1bqk2r/bp1pnppp/p1n1p3/8/4P3/1N1B4/PPP1QPPP/RNB2RK1 w kq -": {
    "eco": "B20",
    "name": "Sicilya Savunması: Açık Hat",
    "moves": []
  },
  "r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq -": {
    "eco": "B50",
    "name": "Sicilya Savunması: Klasik",
    "moves": [
      {
        "uci": "c1g5",
        "san": "Bg5",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "r1bqkb1r/pp2pppp/2np1n2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R b KQkq -": {
    "eco": "B50",
    "name": "Sicilya Savunması: Klasik",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 285,
        "draws": 278,
        "black": 187
      }
    ]
  },
  "r1bqkb1r/pp3ppp/2nppn2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R w KQkq -": {
    "eco": "B50",
    "name": "Sicilya Savunması: Klasik",
    "moves": [
      {
        "uci": "d1d2",
        "san": "Qd2",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "r1bqkb1r/pp3ppp/2nppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R b KQkq -": {
    "eco": "B50",
    "name": "Sicilya Savunması: Klasik",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "r1bqkb1r/1p3ppp/p1nppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R w KQkq -": {
    "eco": "B50",
    "name": "Sicilya Savunması: Klasik",
    "moves": [
      {
        "uci": "e1c1",
        "san": "O-O-O",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "r1bqkb1r/1p3ppp/p1nppn2/6B1/3NP3/2N5/PPPQ1PPP/2KR1B1R b kq -": {
    "eco": "B50",
    "name": "Sicilya Savunması: Klasik",
    "moves": [
      {
        "uci": "c8d7",
        "san": "Bd7",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "r2qkb1r/1p1b1ppp/p1nppn2/6B1/3NP3/2N5/PPPQ1PPP/2KR1B1R w kq -": {
    "eco": "B50",
    "name": "Sicilya Savunması: Klasik",
    "moves": []
  },
  "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    "eco": "C20",
    "name": "Açık Oyun (Open Game)",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 62396,
        "draws": 57470,
        "black": 44334
      },
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 4992,
        "draws": 4096,
        "black": 3712
      },
      {
        "uci": "f1c4",
        "san": "Bc4",
        "white": 3848,
        "draws": 3432,
        "black": 3120
      },
      {
        "uci": "f2f4",
        "san": "f4",
        "white": 3440,
        "draws": 2322,
        "black": 2838
      },
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 1596,
        "draws": 1176,
        "black": 1428
      },
      {
        "uci": "c2c3",
        "san": "c3",
        "white": 777,
        "draws": 651,
        "black": 672
      }
    ]
  },
  "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq -": {
    "eco": "C40",
    "name": "Şah Atı Açılışı (King's Knight Opening)",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 53998,
        "draws": 51156,
        "black": 36946
      },
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 8712,
        "draws": 11880,
        "black": 5808
      },
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 3738,
        "draws": 2848,
        "black": 2314
      },
      {
        "uci": "f7f5",
        "san": "f5",
        "white": 564,
        "draws": 276,
        "black": 360
      }
    ]
  },
  "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq -": {
    "eco": "C44",
    "name": "Açık Oyun: İki At / Ana Hat",
    "moves": [
      {
        "uci": "f1b5",
        "san": "Bb5",
        "white": 36036,
        "draws": 35112,
        "black": 21252
      },
      {
        "uci": "f1c4",
        "san": "Bc4",
        "white": 14282,
        "draws": 14282,
        "black": 10036
      },
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 8056,
        "draws": 7420,
        "black": 5724
      },
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 3332,
        "draws": 4410,
        "black": 2058
      },
      {
        "uci": "c2c3",
        "san": "c3",
        "white": 1216,
        "draws": 1056,
        "black": 928
      }
    ]
  },
  "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq -": {
    "eco": "C65",
    "name": "İspanyol Açılışı: Berlin Savunması",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 5748,
        "draws": 5597,
        "black": 3782
      },
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 5748,
        "draws": 5446,
        "black": 3933
      }
    ]
  },
  "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq -": {
    "eco": "C65",
    "name": "İspanyol Açılışı: Berlin Savunması",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 3209,
        "draws": 3209,
        "black": 2750
      }
    ]
  },
  "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 b kq -": {
    "eco": "C65",
    "name": "İspanyol Açılışı: Berlin Savunması",
    "moves": [
      {
        "uci": "f6e4",
        "san": "Nxe4",
        "white": 2111,
        "draws": 2000,
        "black": 1445
      }
    ]
  },
  "r1bqkb1r/pppp1ppp/2n5/1B2p3/4n3/5N2/PPPP1PPP/RNBQ1RK1 w kq -": {
    "eco": "C65",
    "name": "İspanyol Açılışı: Berlin Savunması",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 1313,
        "draws": 1145,
        "black": 909
      }
    ]
  },
  "r1bqkb1r/pppp1ppp/2n5/1B2p3/3Pn3/5N2/PPP2PPP/RNBQ1RK1 b kq -": {
    "eco": "C65",
    "name": "İspanyol Açılışı: Berlin Savunması",
    "moves": [
      {
        "uci": "e4d6",
        "san": "Nd6",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "r1bqkb1r/pppp1ppp/2nn4/1B2p3/3P4/5N2/PPP2PPP/RNBQ1RK1 w kq -": {
    "eco": "C65",
    "name": "İspanyol Açılışı: Berlin Savunması",
    "moves": [
      {
        "uci": "b5c6",
        "san": "Bxc6",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "r1bqkb1r/pppp1ppp/2Bn4/4p3/3P4/5N2/PPP2PPP/RNBQ1RK1 b kq -": {
    "eco": "C65",
    "name": "İspanyol Açılışı: Berlin Savunması",
    "moves": [
      {
        "uci": "d7c6",
        "san": "dxc6",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "r1bqkb1r/ppp2ppp/2pn4/4p3/3P4/5N2/PPP2PPP/RNBQ1RK1 w kq -": {
    "eco": "C65",
    "name": "İspanyol Açılışı: Berlin Savunması",
    "moves": [
      {
        "uci": "d4e5",
        "san": "dxe5",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "r1bqkb1r/ppp2ppp/2pn4/4P3/8/5N2/PPP2PPP/RNBQ1RK1 b kq -": {
    "eco": "C65",
    "name": "İspanyol Açılışı: Berlin Savunması",
    "moves": [
      {
        "uci": "d6f5",
        "san": "Nf5",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "r1bqkb1r/ppp2ppp/2p5/4Pn2/8/5N2/PPP2PPP/RNBQ1RK1 w kq -": {
    "eco": "C65",
    "name": "İspanyol Açılışı: Berlin Savunması",
    "moves": [
      {
        "uci": "d1d8",
        "san": "Qxd8+",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "r1bQkb1r/ppp2ppp/2p5/4Pn2/8/5N2/PPP2PPP/RNB2RK1 b kq -": {
    "eco": "C65",
    "name": "İspanyol Açılışı: Berlin Savunması",
    "moves": [
      {
        "uci": "e8d8",
        "san": "Kxd8",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "r1bk1b1r/ppp2ppp/2p5/4Pn2/8/5N2/PPP2PPP/RNB2RK1 w - -": {
    "eco": "C65",
    "name": "İspanyol Açılışı: Berlin Savunması",
    "moves": []
  },
  "r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq -": {
    "eco": "C88",
    "name": "İspanyol Açılışı: Kapalı Varyant",
    "moves": [
      {
        "uci": "b5a4",
        "san": "Ba4",
        "white": 3209,
        "draws": 3209,
        "black": 2750
      }
    ]
  },
  "r1bqkbnr/1ppp1ppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R b KQkq -": {
    "eco": "C88",
    "name": "İspanyol Açılışı: Kapalı Varyant",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 2111,
        "draws": 2056,
        "black": 1389
      }
    ]
  },
  "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq -": {
    "eco": "C88",
    "name": "İspanyol Açılışı: Kapalı Varyant",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1178,
        "draws": 1178,
        "black": 1011
      }
    ]
  },
  "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 b kq -": {
    "eco": "C88",
    "name": "İspanyol Açılışı: Kapalı Varyant",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq -": {
    "eco": "C88",
    "name": "İspanyol Açılışı: Kapalı Varyant",
    "moves": [
      {
        "uci": "f1e1",
        "san": "Re1",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQR1K1 b kq -": {
    "eco": "C88",
    "name": "İspanyol Açılışı: Kapalı Varyant",
    "moves": [
      {
        "uci": "b7b5",
        "san": "b5",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "r1bqk2r/2ppbppp/p1n2n2/1p2p3/B3P3/5N2/PPPP1PPP/RNBQR1K1 w kq -": {
    "eco": "C88",
    "name": "İspanyol Açılışı: Kapalı Varyant",
    "moves": [
      {
        "uci": "a4b3",
        "san": "Bb3",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "r1bqk2r/2ppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 b kq -": {
    "eco": "C88",
    "name": "İspanyol Açılışı: Kapalı Varyant",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "r1bqk2r/2p1bppp/p1np1n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 w kq -": {
    "eco": "C88",
    "name": "İspanyol Açılışı: Kapalı Varyant",
    "moves": [
      {
        "uci": "c2c3",
        "san": "c3",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "r1bqk2r/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 b kq -": {
    "eco": "C88",
    "name": "İspanyol Açılışı: Kapalı Varyant",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - -": {
    "eco": "C88",
    "name": "İspanyol Açılışı: Kapalı Varyant",
    "moves": [
      {
        "uci": "h2h3",
        "san": "h3",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 b - -": {
    "eco": "C88",
    "name": "İspanyol Açılışı: Kapalı Varyant",
    "moves": [
      {
        "uci": "c6b8",
        "san": "Nb8",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "rnbq1rk1/2p1bppp/p2p1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w - -": {
    "eco": "C88",
    "name": "İspanyol Açılışı: Kapalı Varyant",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 33,
        "draws": 29,
        "black": 23
      }
    ]
  },
  "rnbq1rk1/2p1bppp/p2p1n2/1p2p3/3PP3/1BP2N1P/PP3PP1/RNBQR1K1 b - -": {
    "eco": "C88",
    "name": "İspanyol Açılışı: Kapalı Varyant",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nbd7",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "r1bq1rk1/2pnbppp/p2p1n2/1p2p3/3PP3/1BP2N1P/PP3PP1/RNBQR1K1 w - -": {
    "eco": "C88",
    "name": "İspanyol Açılışı: Kapalı Varyant",
    "moves": []
  },
  "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq -": {
    "eco": "C54",
    "name": "İtalyan Açılışı: Giuoco Piano",
    "moves": [
      {
        "uci": "f8c5",
        "san": "Bc5",
        "white": 5748,
        "draws": 5446,
        "black": 3933
      },
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 5748,
        "draws": 5597,
        "black": 3782
      }
    ]
  },
  "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq -": {
    "eco": "C54",
    "name": "İtalyan Açılışı: Giuoco Piano",
    "moves": [
      {
        "uci": "c2c3",
        "san": "c3",
        "white": 3209,
        "draws": 3209,
        "black": 2750
      }
    ]
  },
  "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq -": {
    "eco": "C54",
    "name": "İtalyan Açılışı: Giuoco Piano",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 2111,
        "draws": 2056,
        "black": 1389
      }
    ]
  },
  "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq -": {
    "eco": "C54",
    "name": "İtalyan Açılışı: Giuoco Piano",
    "moves": [
      {
        "uci": "d2d3",
        "san": "d3",
        "white": 1178,
        "draws": 1178,
        "black": 1011
      }
    ]
  },
  "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQK2R b KQkq -": {
    "eco": "C54",
    "name": "İtalyan Açılışı: Giuoco Piano",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQK2R w KQkq -": {
    "eco": "C54",
    "name": "İtalyan Açılışı: Giuoco Piano",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQ1RK1 b kq -": {
    "eco": "C54",
    "name": "İtalyan Açılışı: Giuoco Piano",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "r1bqk2r/1pp2ppp/p1np1n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQ1RK1 w kq -": {
    "eco": "C54",
    "name": "İtalyan Açılışı: Giuoco Piano",
    "moves": [
      {
        "uci": "c4b3",
        "san": "Bb3",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "r1bqk2r/1pp2ppp/p1np1n2/2b1p3/4P3/1BPP1N2/PP3PPP/RNBQ1RK1 b kq -": {
    "eco": "C54",
    "name": "İtalyan Açılışı: Giuoco Piano",
    "moves": [
      {
        "uci": "c5a7",
        "san": "Ba7",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "r1bqk2r/bpp2ppp/p1np1n2/4p3/4P3/1BPP1N2/PP3PPP/RNBQ1RK1 w kq -": {
    "eco": "C54",
    "name": "İtalyan Açılışı: Giuoco Piano",
    "moves": [
      {
        "uci": "b1d2",
        "san": "Nbd2",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "r1bqk2r/bpp2ppp/p1np1n2/4p3/4P3/1BPP1N2/PP1N1PPP/R1BQ1RK1 b kq -": {
    "eco": "C54",
    "name": "İtalyan Açılışı: Giuoco Piano",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "r1bq1rk1/bpp2ppp/p1np1n2/4p3/4P3/1BPP1N2/PP1N1PPP/R1BQ1RK1 w - -": {
    "eco": "C54",
    "name": "İtalyan Açılışı: Giuoco Piano",
    "moves": [
      {
        "uci": "h2h3",
        "san": "h3",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "r1bq1rk1/bpp2ppp/p1np1n2/4p3/4P3/1BPP1N1P/PP1N1PP1/R1BQ1RK1 b - -": {
    "eco": "C54",
    "name": "İtalyan Açılışı: Giuoco Piano",
    "moves": [
      {
        "uci": "h7h6",
        "san": "h6",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "r1bq1rk1/bpp2pp1/p1np1n1p/4p3/4P3/1BPP1N1P/PP1N1PP1/R1BQ1RK1 w - -": {
    "eco": "C54",
    "name": "İtalyan Açılışı: Giuoco Piano",
    "moves": []
  },
  "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq -": {
    "eco": "C50",
    "name": "İtalyan Açılışı: İki At Savunması",
    "moves": [
      {
        "uci": "d2d3",
        "san": "d3",
        "white": 3209,
        "draws": 3209,
        "black": 2750
      }
    ]
  },
  "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R b KQkq -": {
    "eco": "C50",
    "name": "İtalyan Açılışı: İki At Savunması",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 2111,
        "draws": 2000,
        "black": 1445
      }
    ]
  },
  "r1bqk2r/ppppbppp/2n2n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq -": {
    "eco": "C50",
    "name": "İtalyan Açılışı: İki At Savunması",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1178,
        "draws": 1178,
        "black": 1011
      }
    ]
  },
  "r1bqk2r/ppppbppp/2n2n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQ1RK1 b kq -": {
    "eco": "C50",
    "name": "İtalyan Açılışı: İki At Savunması",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "r1bq1rk1/ppppbppp/2n2n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQ1RK1 w - -": {
    "eco": "C50",
    "name": "İtalyan Açılışı: İki At Savunması",
    "moves": [
      {
        "uci": "f1e1",
        "san": "Re1",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "r1bq1rk1/ppppbppp/2n2n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQR1K1 b - -": {
    "eco": "C50",
    "name": "İtalyan Açılışı: İki At Savunması",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "r1bq1rk1/ppp1bppp/2np1n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQR1K1 w - -": {
    "eco": "C50",
    "name": "İtalyan Açılışı: İki At Savunması",
    "moves": [
      {
        "uci": "a2a4",
        "san": "a4",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "r1bq1rk1/ppp1bppp/2np1n2/4p3/P1B1P3/3P1N2/1PP2PPP/RNBQR1K1 b - -": {
    "eco": "C50",
    "name": "İtalyan Açılışı: İki At Savunması",
    "moves": [
      {
        "uci": "c8e6",
        "san": "Be6",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "r2q1rk1/ppp1bppp/2npbn2/4p3/P1B1P3/3P1N2/1PP2PPP/RNBQR1K1 w - -": {
    "eco": "C50",
    "name": "İtalyan Açılışı: İki At Savunması",
    "moves": [
      {
        "uci": "c4e6",
        "san": "Bxe6",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "r2q1rk1/ppp1bppp/2npBn2/4p3/P3P3/3P1N2/1PP2PPP/RNBQR1K1 b - -": {
    "eco": "C50",
    "name": "İtalyan Açılışı: İki At Savunması",
    "moves": [
      {
        "uci": "f7e6",
        "san": "fxe6",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "r2q1rk1/ppp1b1pp/2nppn2/4p3/P3P3/3P1N2/1PP2PPP/RNBQR1K1 w - -": {
    "eco": "C50",
    "name": "İtalyan Açılışı: İki At Savunması",
    "moves": []
  },
  "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "C45",
    "name": "İskoç Açılışı",
    "moves": [
      {
        "uci": "e5d4",
        "san": "exd4",
        "white": 5748,
        "draws": 5446,
        "black": 3933
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
        "white": 3209,
        "draws": 3209,
        "black": 2750
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
        "white": 2111,
        "draws": 2056,
        "black": 1389
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
        "white": 1178,
        "draws": 1178,
        "black": 1011
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
        "white": 776,
        "draws": 735,
        "black": 530
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
        "white": 433,
        "draws": 433,
        "black": 371
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
        "white": 285,
        "draws": 270,
        "black": 195
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
        "white": 159,
        "draws": 159,
        "black": 136
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
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "r1b1kb1r/p1ppqppp/2p5/3nP3/8/8/PPP1QPPP/RNB1KB1R w KQkq -": {
    "eco": "C45",
    "name": "İskoç Açılışı",
    "moves": [
      {
        "uci": "c2c4",
        "san": "c4",
        "white": 62,
        "draws": 67,
        "black": 38
      }
    ]
  },
  "r1b1kb1r/p1ppqppp/2p5/3nP3/2P5/8/PP2QPPP/RNB1KB1R b KQkq -": {
    "eco": "C45",
    "name": "İskoç Açılışı",
    "moves": [
      {
        "uci": "c8a6",
        "san": "Ba6",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "r3kb1r/p1ppqppp/b1p5/3nP3/2P5/8/PP2QPPP/RNB1KB1R w KQkq -": {
    "eco": "C45",
    "name": "İskoç Açılışı",
    "moves": [
      {
        "uci": "b2b3",
        "san": "b3",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "r3kb1r/p1ppqppp/b1p5/3nP3/2P5/1P6/P3QPPP/RNB1KB1R b KQkq -": {
    "eco": "C45",
    "name": "İskoç Açılışı",
    "moves": [
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "r3kb1r/p1ppqp1p/b1p3p1/3nP3/2P5/1P6/P3QPPP/RNB1KB1R w KQkq -": {
    "eco": "C45",
    "name": "İskoç Açılışı",
    "moves": []
  },
  "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq -": {
    "eco": "C42",
    "name": "Petrov (Rus) Savunması",
    "moves": [
      {
        "uci": "f3e5",
        "san": "Nxe5",
        "white": 8736,
        "draws": 8736,
        "black": 7488
      }
    ]
  },
  "rnbqkb1r/pppp1ppp/5n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R b KQkq -": {
    "eco": "C42",
    "name": "Petrov (Rus) Savunması",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 5748,
        "draws": 5446,
        "black": 3933
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/3p1n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R w KQkq -": {
    "eco": "C42",
    "name": "Petrov (Rus) Savunması",
    "moves": [
      {
        "uci": "e5f3",
        "san": "Nf3",
        "white": 3392,
        "draws": 3667,
        "black": 2109
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/3p1n2/8/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq -": {
    "eco": "C42",
    "name": "Petrov (Rus) Savunması",
    "moves": [
      {
        "uci": "f6e4",
        "san": "Nxe4",
        "white": 2111,
        "draws": 2000,
        "black": 1445
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/3p4/8/4n3/5N2/PPPP1PPP/RNBQKB1R w KQkq -": {
    "eco": "C42",
    "name": "Petrov (Rus) Savunması",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 1313,
        "draws": 1145,
        "black": 909
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/3p4/8/3Pn3/5N2/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "C42",
    "name": "Petrov (Rus) Savunması",
    "moves": [
      {
        "uci": "d6d5",
        "san": "d5",
        "white": 776,
        "draws": 755,
        "black": 510
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/8/3p4/3Pn3/5N2/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "C42",
    "name": "Petrov (Rus) Savunması",
    "moves": [
      {
        "uci": "f1d3",
        "san": "Bd3",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/8/3p4/3Pn3/3B1N2/PPP2PPP/RNBQK2R b KQkq -": {
    "eco": "C42",
    "name": "Petrov (Rus) Savunması",
    "moves": [
      {
        "uci": "f8d6",
        "san": "Bd6",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "rnbqk2r/ppp2ppp/3b4/3p4/3Pn3/3B1N2/PPP2PPP/RNBQK2R w KQkq -": {
    "eco": "C42",
    "name": "Petrov (Rus) Savunması",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "rnbqk2r/ppp2ppp/3b4/3p4/3Pn3/3B1N2/PPP2PPP/RNBQ1RK1 b kq -": {
    "eco": "C42",
    "name": "Petrov (Rus) Savunması",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "rnbq1rk1/ppp2ppp/3b4/3p4/3Pn3/3B1N2/PPP2PPP/RNBQ1RK1 w - -": {
    "eco": "C42",
    "name": "Petrov (Rus) Savunması",
    "moves": [
      {
        "uci": "c2c4",
        "san": "c4",
        "white": 62,
        "draws": 67,
        "black": 38
      }
    ]
  },
  "rnbq1rk1/ppp2ppp/3b4/3p4/2PPn3/3B1N2/PP3PPP/RNBQ1RK1 b - -": {
    "eco": "C42",
    "name": "Petrov (Rus) Savunması",
    "moves": [
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "rnbq1rk1/pp3ppp/2pb4/3p4/2PPn3/3B1N2/PP3PPP/RNBQ1RK1 w - -": {
    "eco": "C42",
    "name": "Petrov (Rus) Savunması",
    "moves": [
      {
        "uci": "f1e1",
        "san": "Re1",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "rnbq1rk1/pp3ppp/2pb4/3p4/2PPn3/3B1N2/PP3PPP/RNBQR1K1 b - -": {
    "eco": "C42",
    "name": "Petrov (Rus) Savunması",
    "moves": [
      {
        "uci": "c8f5",
        "san": "Bf5",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "rn1q1rk1/pp3ppp/2pb4/3p1b2/2PPn3/3B1N2/PP3PPP/RNBQR1K1 w - -": {
    "eco": "C42",
    "name": "Petrov (Rus) Savunması",
    "moves": []
  },
  "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    "eco": "C00",
    "name": "Fransız Savunması (French Defense)",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 30576,
        "draws": 26656,
        "black": 21168
      },
      {
        "uci": "d2d3",
        "san": "d3",
        "white": 1976,
        "draws": 1768,
        "black": 1456
      },
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1178,
        "draws": 1054,
        "black": 868
      },
      {
        "uci": "c2c4",
        "san": "c4",
        "white": 702,
        "draws": 612,
        "black": 486
      }
    ]
  },
  "rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq -": {
    "eco": "C02",
    "name": "Fransız Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 15650,
        "draws": 15238,
        "black": 10295
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq -": {
    "eco": "C01",
    "name": "Fransız Savunması: Ana Gövde",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 16419,
        "draws": 14735,
        "black": 10946
      },
      {
        "uci": "b1d2",
        "san": "Nd2",
        "white": 9768,
        "draws": 9768,
        "black": 6864
      },
      {
        "uci": "e4e5",
        "san": "e5",
        "white": 7280,
        "draws": 5824,
        "black": 5096
      },
      {
        "uci": "e4d5",
        "san": "exd5",
        "white": 3168,
        "draws": 4512,
        "black": 1920
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq -": {
    "eco": "C02",
    "name": "Fransız Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 5446,
        "draws": 4992,
        "black": 4689
      }
    ]
  },
  "rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq -": {
    "eco": "C02",
    "name": "Fransız Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "c2c3",
        "san": "c3",
        "white": 3209,
        "draws": 3209,
        "black": 2750
      }
    ]
  },
  "rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/2P5/PP3PPP/RNBQKBNR b KQkq -": {
    "eco": "C02",
    "name": "Fransız Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 2111,
        "draws": 2000,
        "black": 1445
      }
    ]
  },
  "r1bqkbnr/pp3ppp/2n1p3/2ppP3/3P4/2P5/PP3PPP/RNBQKBNR w KQkq -": {
    "eco": "C02",
    "name": "Fransız Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1246,
        "draws": 1347,
        "black": 774
      }
    ]
  },
  "r1bqkbnr/pp3ppp/2n1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R b KQkq -": {
    "eco": "C02",
    "name": "Fransız Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "d8b6",
        "san": "Qb6",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "r1b1kbnr/pp3ppp/1qn1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq -": {
    "eco": "C02",
    "name": "Fransız Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "a2a3",
        "san": "a3",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "r1b1kbnr/pp3ppp/1qn1p3/2ppP3/3P4/P1P2N2/1P3PPP/RNBQKB1R b KQkq -": {
    "eco": "C02",
    "name": "Fransız Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "g8h6",
        "san": "Nh6",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "r1b1kb1r/pp3ppp/1qn1p2n/2ppP3/3P4/P1P2N2/1P3PPP/RNBQKB1R w KQkq -": {
    "eco": "C02",
    "name": "Fransız Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "b2b4",
        "san": "b4",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "r1b1kb1r/pp3ppp/1qn1p2n/2ppP3/1P1P4/P1P2N2/5PPP/RNBQKB1R b KQkq -": {
    "eco": "C02",
    "name": "Fransız Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "c5d4",
        "san": "cxd4",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "r1b1kb1r/pp3ppp/1qn1p2n/3pP3/1P1p4/P1P2N2/5PPP/RNBQKB1R w KQkq -": {
    "eco": "C02",
    "name": "Fransız Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "c3d4",
        "san": "cxd4",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "r1b1kb1r/pp3ppp/1qn1p2n/3pP3/1P1P4/P4N2/5PPP/RNBQKB1R b KQkq -": {
    "eco": "C02",
    "name": "Fransız Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "h6f5",
        "san": "Nf5",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "r1b1kb1r/pp3ppp/1qn1p3/3pPn2/1P1P4/P4N2/5PPP/RNBQKB1R w KQkq -": {
    "eco": "C02",
    "name": "Fransız Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "c1b2",
        "san": "Bb2",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "r1b1kb1r/pp3ppp/1qn1p3/3pPn2/1P1P4/P4N2/1B3PPP/RN1QKB1R b KQkq -": {
    "eco": "C02",
    "name": "Fransız Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "r1b1k2r/pp2bppp/1qn1p3/3pPn2/1P1P4/P4N2/1B3PPP/RN1QKB1R w KQkq -": {
    "eco": "C02",
    "name": "Fransız Savunması: İlerleme Varyantı",
    "moves": []
  },
  "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq -": {
    "eco": "C11",
    "name": "Fransız Savunması: Klasik",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 5748,
        "draws": 5597,
        "black": 3782
      },
      {
        "uci": "f8b4",
        "san": "Bb4",
        "white": 5748,
        "draws": 5446,
        "black": 3933
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq -": {
    "eco": "C11",
    "name": "Fransız Savunması: Klasik",
    "moves": [
      {
        "uci": "e4e5",
        "san": "e5",
        "white": 3209,
        "draws": 3209,
        "black": 2750
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pn2/3pP3/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq -": {
    "eco": "C11",
    "name": "Fransız Savunması: Klasik",
    "moves": [
      {
        "uci": "f6d7",
        "san": "Nfd7",
        "white": 2111,
        "draws": 2000,
        "black": 1445
      }
    ]
  },
  "rnbqkb1r/pppn1ppp/4p3/3pP3/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq -": {
    "eco": "C11",
    "name": "Fransız Savunması: Klasik",
    "moves": [
      {
        "uci": "f2f4",
        "san": "f4",
        "white": 1178,
        "draws": 1178,
        "black": 1011
      }
    ]
  },
  "rnbqkb1r/pppn1ppp/4p3/3pP3/3P1P2/2N5/PPP3PP/R1BQKBNR b KQkq -": {
    "eco": "C11",
    "name": "Fransız Savunması: Klasik",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 735,
        "draws": 674,
        "black": 632
      }
    ]
  },
  "rnbqkb1r/pp1n1ppp/4p3/2ppP3/3P1P2/2N5/PPP3PP/R1BQKBNR w KQkq -": {
    "eco": "C11",
    "name": "Fransız Savunması: Klasik",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 458,
        "draws": 495,
        "black": 284
      }
    ]
  },
  "rnbqkb1r/pp1n1ppp/4p3/2ppP3/3P1P2/2N2N2/PPP3PP/R1BQKB1R b KQkq -": {
    "eco": "C11",
    "name": "Fransız Savunması: Klasik",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "r1bqkb1r/pp1n1ppp/2n1p3/2ppP3/3P1P2/2N2N2/PPP3PP/R1BQKB1R w KQkq -": {
    "eco": "C11",
    "name": "Fransız Savunması: Klasik",
    "moves": [
      {
        "uci": "c1e3",
        "san": "Be3",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "r1bqkb1r/pp1n1ppp/2n1p3/2ppP3/3P1P2/2N1BN2/PPP3PP/R2QKB1R b KQkq -": {
    "eco": "C11",
    "name": "Fransız Savunması: Klasik",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "r1bqkb1r/1p1n1ppp/p1n1p3/2ppP3/3P1P2/2N1BN2/PPP3PP/R2QKB1R w KQkq -": {
    "eco": "C11",
    "name": "Fransız Savunması: Klasik",
    "moves": [
      {
        "uci": "d1d2",
        "san": "Qd2",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "r1bqkb1r/1p1n1ppp/p1n1p3/2ppP3/3P1P2/2N1BN2/PPPQ2PP/R3KB1R b KQkq -": {
    "eco": "C11",
    "name": "Fransız Savunması: Klasik",
    "moves": [
      {
        "uci": "b7b5",
        "san": "b5",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "r1bqkb1r/3n1ppp/p1n1p3/1pppP3/3P1P2/2N1BN2/PPPQ2PP/R3KB1R w KQkq -": {
    "eco": "C11",
    "name": "Fransız Savunması: Klasik",
    "moves": [
      {
        "uci": "a2a3",
        "san": "a3",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "r1bqkb1r/3n1ppp/p1n1p3/1pppP3/3P1P2/P1N1BN2/1PPQ2PP/R3KB1R b KQkq -": {
    "eco": "C11",
    "name": "Fransız Savunması: Klasik",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "r1bqk2r/3nbppp/p1n1p3/1pppP3/3P1P2/P1N1BN2/1PPQ2PP/R3KB1R w KQkq -": {
    "eco": "C11",
    "name": "Fransız Savunması: Klasik",
    "moves": []
  },
  "rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPP2PPP/R1BQKBNR w KQkq -": {
    "eco": "C18",
    "name": "Fransız Savunması: Winawer",
    "moves": [
      {
        "uci": "e4e5",
        "san": "e5",
        "white": 3209,
        "draws": 3209,
        "black": 2750
      }
    ]
  },
  "rnbqk1nr/ppp2ppp/4p3/3pP3/1b1P4/2N5/PPP2PPP/R1BQKBNR b KQkq -": {
    "eco": "C18",
    "name": "Fransız Savunması: Winawer",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 2000,
        "draws": 1833,
        "black": 1723
      }
    ]
  },
  "rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/2N5/PPP2PPP/R1BQKBNR w KQkq -": {
    "eco": "C18",
    "name": "Fransız Savunması: Winawer",
    "moves": [
      {
        "uci": "a2a3",
        "san": "a3",
        "white": 1178,
        "draws": 1178,
        "black": 1011
      }
    ]
  },
  "rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/P1N5/1PP2PPP/R1BQKBNR b KQkq -": {
    "eco": "C18",
    "name": "Fransız Savunması: Winawer",
    "moves": [
      {
        "uci": "b4c3",
        "san": "Bxc3+",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "rnbqk1nr/pp3ppp/4p3/2ppP3/3P4/P1b5/1PP2PPP/R1BQKBNR w KQkq -": {
    "eco": "C18",
    "name": "Fransız Savunması: Winawer",
    "moves": [
      {
        "uci": "b2c3",
        "san": "bxc3",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "rnbqk1nr/pp3ppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR b KQkq -": {
    "eco": "C18",
    "name": "Fransız Savunması: Winawer",
    "moves": [
      {
        "uci": "g8e7",
        "san": "Ne7",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "rnbqk2r/pp2nppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR w KQkq -": {
    "eco": "C18",
    "name": "Fransız Savunması: Winawer",
    "moves": [
      {
        "uci": "d1g4",
        "san": "Qg4",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "rnbqk2r/pp2nppp/4p3/2ppP3/3P2Q1/P1P5/2P2PPP/R1B1KBNR b KQkq -": {
    "eco": "C18",
    "name": "Fransız Savunması: Winawer",
    "moves": [
      {
        "uci": "d8c7",
        "san": "Qc7",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "rnb1k2r/ppq1nppp/4p3/2ppP3/3P2Q1/P1P5/2P2PPP/R1B1KBNR w KQkq -": {
    "eco": "C18",
    "name": "Fransız Savunması: Winawer",
    "moves": [
      {
        "uci": "g4g7",
        "san": "Qxg7",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "rnb1k2r/ppq1npQp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1B1KBNR b KQkq -": {
    "eco": "C18",
    "name": "Fransız Savunması: Winawer",
    "moves": [
      {
        "uci": "h8g8",
        "san": "Rg8",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "rnb1k1r1/ppq1npQp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1B1KBNR w KQq -": {
    "eco": "C18",
    "name": "Fransız Savunması: Winawer",
    "moves": [
      {
        "uci": "g7h7",
        "san": "Qxh7",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "rnb1k1r1/ppq1np1Q/4p3/2ppP3/3P4/P1P5/2P2PPP/R1B1KBNR b KQq -": {
    "eco": "C18",
    "name": "Fransız Savunması: Winawer",
    "moves": [
      {
        "uci": "c5d4",
        "san": "cxd4",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "rnb1k1r1/ppq1np1Q/4p3/3pP3/3p4/P1P5/2P2PPP/R1B1KBNR w KQq -": {
    "eco": "C18",
    "name": "Fransız Savunması: Winawer",
    "moves": []
  },
  "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    "eco": "B10",
    "name": "Caro-Kann Savunması",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 24716,
        "draws": 26720,
        "black": 15364
      },
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 2052,
        "draws": 1944,
        "black": 1404
      },
      {
        "uci": "c2c4",
        "san": "c4",
        "white": 1064,
        "draws": 1008,
        "black": 728
      },
      {
        "uci": "d2d3",
        "san": "d3",
        "white": 592,
        "draws": 560,
        "black": 448
      }
    ]
  },
  "rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 15650,
        "draws": 15238,
        "black": 10295
      }
    ]
  },
  "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann Savunması: Ana Gövde",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 11932,
        "draws": 12560,
        "black": 6908
      },
      {
        "uci": "e4e5",
        "san": "e5",
        "white": 9438,
        "draws": 8712,
        "black": 6050
      },
      {
        "uci": "e4d5",
        "san": "exd5",
        "white": 5328,
        "draws": 5920,
        "black": 3552
      },
      {
        "uci": "b1d2",
        "san": "Nd2",
        "white": 2356,
        "draws": 2480,
        "black": 1364
      }
    ]
  },
  "rnbqkbnr/pp2pppp/2p5/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "c8f5",
        "san": "Bf5",
        "white": 5748,
        "draws": 5446,
        "black": 3933
      }
    ]
  },
  "rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/8/PPP2PPP/RNBQKBNR w KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 3392,
        "draws": 3667,
        "black": 2109
      }
    ]
  },
  "rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/5N2/PPP2PPP/RNBQKB1R b KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 2111,
        "draws": 2056,
        "black": 1389
      }
    ]
  },
  "rn1qkbnr/pp3ppp/2p1p3/3pPb2/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 1178,
        "draws": 1178,
        "black": 1011
      }
    ]
  },
  "rn1qkbnr/pp3ppp/2p1p3/3pPb2/3P4/5N2/PPP1BPPP/RNBQK2R b KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "c6c5",
        "san": "c5",
        "white": 735,
        "draws": 674,
        "black": 632
      }
    ]
  },
  "rn1qkbnr/pp3ppp/4p3/2ppPb2/3P4/5N2/PPP1BPPP/RNBQK2R w KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "c1e3",
        "san": "Be3",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "rn1qkbnr/pp3ppp/4p3/2ppPb2/3P4/4BN2/PPP1BPPP/RN1QK2R b KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "d8b6",
        "san": "Qb6",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "rn2kbnr/pp3ppp/1q2p3/2ppPb2/3P4/4BN2/PPP1BPPP/RN1QK2R w KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "rn2kbnr/pp3ppp/1q2p3/2ppPb2/3P4/2N1BN2/PPP1BPPP/R2QK2R b KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "r3kbnr/pp3ppp/1qn1p3/2ppPb2/3P4/2N1BN2/PPP1BPPP/R2QK2R w KQkq -": {
    "eco": "B12",
    "name": "Caro-Kann Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "r3kbnr/pp3ppp/1qn1p3/2ppPb2/3P4/2N1BN2/PPP1BPPP/R2Q1RK1 b kq -": {
    "eco": "B12",
    "name": "Caro-Kann Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "b6b2",
        "san": "Qxb2",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "r3kbnr/pp3ppp/2n1p3/2ppPb2/3P4/2N1BN2/PqP1BPPP/R2Q1RK1 w kq -": {
    "eco": "B12",
    "name": "Caro-Kann Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "d1e1",
        "san": "Qe1",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "r3kbnr/pp3ppp/2n1p3/2ppPb2/3P4/2N1BN2/PqP1BPPP/R3QRK1 b kq -": {
    "eco": "B12",
    "name": "Caro-Kann Savunması: İlerleme Varyantı",
    "moves": [
      {
        "uci": "c5d4",
        "san": "cxd4",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "r3kbnr/pp3ppp/2n1p3/3pPb2/3p4/2N1BN2/PqP1BPPP/R3QRK1 w kq -": {
    "eco": "B12",
    "name": "Caro-Kann Savunması: İlerleme Varyantı",
    "moves": []
  },
  "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq -": {
    "eco": "B19",
    "name": "Caro-Kann Savunması: Klasik Hat",
    "moves": [
      {
        "uci": "d5e4",
        "san": "dxe4",
        "white": 5748,
        "draws": 5446,
        "black": 3933
      }
    ]
  },
  "rnbqkbnr/pp2pppp/2p5/8/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq -": {
    "eco": "B19",
    "name": "Caro-Kann Savunması: Klasik Hat",
    "moves": [
      {
        "uci": "c3e4",
        "san": "Nxe4",
        "white": 3209,
        "draws": 3209,
        "black": 2750
      }
    ]
  },
  "rnbqkbnr/pp2pppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR b KQkq -": {
    "eco": "B19",
    "name": "Caro-Kann Savunması: Klasik Hat",
    "moves": [
      {
        "uci": "c8f5",
        "san": "Bf5",
        "white": 2111,
        "draws": 2000,
        "black": 1445
      }
    ]
  },
  "rn1qkbnr/pp2pppp/2p5/5b2/3PN3/8/PPP2PPP/R1BQKBNR w KQkq -": {
    "eco": "B19",
    "name": "Caro-Kann Savunması: Klasik Hat",
    "moves": [
      {
        "uci": "e4g3",
        "san": "Ng3",
        "white": 1178,
        "draws": 1178,
        "black": 1011
      }
    ]
  },
  "rn1qkbnr/pp2pppp/2p5/5b2/3P4/6N1/PPP2PPP/R1BQKBNR b KQkq -": {
    "eco": "B19",
    "name": "Caro-Kann Savunması: Klasik Hat",
    "moves": [
      {
        "uci": "f5g6",
        "san": "Bg6",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "rn1qkbnr/pp2pppp/2p3b1/8/3P4/6N1/PPP2PPP/R1BQKBNR w KQkq -": {
    "eco": "B19",
    "name": "Caro-Kann Savunması: Klasik Hat",
    "moves": [
      {
        "uci": "h2h4",
        "san": "h4",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "rn1qkbnr/pp2pppp/2p3b1/8/3P3P/6N1/PPP2PP1/R1BQKBNR b KQkq -": {
    "eco": "B19",
    "name": "Caro-Kann Savunması: Klasik Hat",
    "moves": [
      {
        "uci": "h7h6",
        "san": "h6",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "rn1qkbnr/pp2ppp1/2p3bp/8/3P3P/6N1/PPP2PP1/R1BQKBNR w KQkq -": {
    "eco": "B19",
    "name": "Caro-Kann Savunması: Klasik Hat",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 168,
        "draws": 182,
        "black": 104
      }
    ]
  },
  "rn1qkbnr/pp2ppp1/2p3bp/8/3P3P/5NN1/PPP2PP1/R1BQKB1R b KQkq -": {
    "eco": "B19",
    "name": "Caro-Kann Savunması: Klasik Hat",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nd7",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "r2qkbnr/pp1nppp1/2p3bp/8/3P3P/5NN1/PPP2PP1/R1BQKB1R w KQkq -": {
    "eco": "B19",
    "name": "Caro-Kann Savunması: Klasik Hat",
    "moves": [
      {
        "uci": "h4h5",
        "san": "h5",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "r2qkbnr/pp1nppp1/2p3bp/7P/3P4/5NN1/PPP2PP1/R1BQKB1R b KQkq -": {
    "eco": "B19",
    "name": "Caro-Kann Savunması: Klasik Hat",
    "moves": [
      {
        "uci": "g6h7",
        "san": "Bh7",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "r2qkbnr/pp1npppb/2p4p/7P/3P4/5NN1/PPP2PP1/R1BQKB1R w KQkq -": {
    "eco": "B19",
    "name": "Caro-Kann Savunması: Klasik Hat",
    "moves": [
      {
        "uci": "f1d3",
        "san": "Bd3",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "r2qkbnr/pp1npppb/2p4p/7P/3P4/3B1NN1/PPP2PP1/R1BQK2R b KQkq -": {
    "eco": "B19",
    "name": "Caro-Kann Savunması: Klasik Hat",
    "moves": [
      {
        "uci": "h7d3",
        "san": "Bxd3",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "r2qkbnr/pp1nppp1/2p4p/7P/3P4/3b1NN1/PPP2PP1/R1BQK2R w KQkq -": {
    "eco": "B19",
    "name": "Caro-Kann Savunması: Klasik Hat",
    "moves": [
      {
        "uci": "d1d3",
        "san": "Qxd3",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "r2qkbnr/pp1nppp1/2p4p/7P/3P4/3Q1NN1/PPP2PP1/R1B1K2R b KQkq -": {
    "eco": "B19",
    "name": "Caro-Kann Savunması: Klasik Hat",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "r2qkbnr/pp1n1pp1/2p1p2p/7P/3P4/3Q1NN1/PPP2PP1/R1B1K2R w KQkq -": {
    "eco": "B19",
    "name": "Caro-Kann Savunması: Klasik Hat",
    "moves": []
  },
  "rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    "eco": "B01",
    "name": "İskandinav Savunması",
    "moves": [
      {
        "uci": "e4d5",
        "san": "exd5",
        "white": 23783,
        "draws": 23783,
        "black": 20386
      }
    ]
  },
  "rnbqkbnr/ppp1pppp/8/3P4/8/8/PPPP1PPP/RNBQKBNR b KQkq -": {
    "eco": "B01",
    "name": "İskandinav Savunması",
    "moves": [
      {
        "uci": "d8d5",
        "san": "Qxd5",
        "white": 15650,
        "draws": 14826,
        "black": 10707
      }
    ]
  },
  "rnb1kbnr/ppp1pppp/8/3q4/8/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    "eco": "B01",
    "name": "İskandinav Savunması",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 8736,
        "draws": 8736,
        "black": 7488
      }
    ]
  },
  "rnb1kbnr/ppp1pppp/8/3q4/8/2N5/PPPP1PPP/R1BQKBNR b KQkq -": {
    "eco": "B01",
    "name": "İskandinav Savunması",
    "moves": [
      {
        "uci": "d5a5",
        "san": "Qa5",
        "white": 5748,
        "draws": 5446,
        "black": 3933
      }
    ]
  },
  "rnb1kbnr/ppp1pppp/8/q7/8/2N5/PPPP1PPP/R1BQKBNR w KQkq -": {
    "eco": "B01",
    "name": "İskandinav Savunması",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 3576,
        "draws": 3117,
        "black": 2475
      }
    ]
  },
  "rnb1kbnr/ppp1pppp/8/q7/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq -": {
    "eco": "B01",
    "name": "İskandinav Savunması",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 2111,
        "draws": 2056,
        "black": 1389
      }
    ]
  },
  "rnb1kb1r/ppp1pppp/5n2/q7/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq -": {
    "eco": "B01",
    "name": "İskandinav Savunması",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1246,
        "draws": 1347,
        "black": 774
      }
    ]
  },
  "rnb1kb1r/ppp1pppp/5n2/q7/3P4/2N2N2/PPP2PPP/R1BQKB1R b KQkq -": {
    "eco": "B01",
    "name": "İskandinav Savunması",
    "moves": [
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "rnb1kb1r/pp2pppp/2p2n2/q7/3P4/2N2N2/PPP2PPP/R1BQKB1R w KQkq -": {
    "eco": "B01",
    "name": "İskandinav Savunması",
    "moves": [
      {
        "uci": "f1c4",
        "san": "Bc4",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "rnb1kb1r/pp2pppp/2p2n2/q7/2BP4/2N2N2/PPP2PPP/R1BQK2R b KQkq -": {
    "eco": "B01",
    "name": "İskandinav Savunması",
    "moves": [
      {
        "uci": "c8f5",
        "san": "Bf5",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "rn2kb1r/pp2pppp/2p2n2/q4b2/2BP4/2N2N2/PPP2PPP/R1BQK2R w KQkq -": {
    "eco": "B01",
    "name": "İskandinav Savunması",
    "moves": [
      {
        "uci": "c1d2",
        "san": "Bd2",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "rn2kb1r/pp2pppp/2p2n2/q4b2/2BP4/2N2N2/PPPB1PPP/R2QK2R b KQkq -": {
    "eco": "B01",
    "name": "İskandinav Savunması",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 105,
        "draws": 102,
        "black": 68
      }
    ]
  },
  "rn2kb1r/pp3ppp/2p1pn2/q4b2/2BP4/2N2N2/PPPB1PPP/R2QK2R w KQkq -": {
    "eco": "B01",
    "name": "İskandinav Savunması",
    "moves": [
      {
        "uci": "c3d5",
        "san": "Nd5",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "rn2kb1r/pp3ppp/2p1pn2/q2N1b2/2BP4/5N2/PPPB1PPP/R2QK2R b KQkq -": {
    "eco": "B01",
    "name": "İskandinav Savunması",
    "moves": [
      {
        "uci": "a5d8",
        "san": "Qd8",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "rn1qkb1r/pp3ppp/2p1pn2/3N1b2/2BP4/5N2/PPPB1PPP/R2QK2R w KQkq -": {
    "eco": "B01",
    "name": "İskandinav Savunması",
    "moves": [
      {
        "uci": "d5f6",
        "san": "Nxf6+",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "rn1qkb1r/pp3ppp/2p1pN2/5b2/2BP4/5N2/PPPB1PPP/R2QK2R b KQkq -": {
    "eco": "B01",
    "name": "İskandinav Savunması",
    "moves": [
      {
        "uci": "d8f6",
        "san": "Qxf6",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "rn2kb1r/pp3ppp/2p1pq2/5b2/2BP4/5N2/PPPB1PPP/R2QK2R w KQkq -": {
    "eco": "B01",
    "name": "İskandinav Savunması",
    "moves": []
  },
  "rnbqkbnr/ppp1pppp/3p4/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -": {
    "eco": "B07",
    "name": "Pirc Savunması",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 26501,
        "draws": 23104,
        "black": 18347
      }
    ]
  },
  "rnbqkbnr/ppp1pppp/3p4/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq -": {
    "eco": "B07",
    "name": "Pirc Savunması",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 15650,
        "draws": 15238,
        "black": 10295
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq -": {
    "eco": "B07",
    "name": "Pirc Savunması",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 8736,
        "draws": 8736,
        "black": 7488
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq -": {
    "eco": "B07",
    "name": "Pirc Savunması",
    "moves": [
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 5748,
        "draws": 5446,
        "black": 3933
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq -": {
    "eco": "B07",
    "name": "Pirc Savunması",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 3392,
        "draws": 3667,
        "black": 2109
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R b KQkq -": {
    "eco": "B07",
    "name": "Pirc Savunması",
    "moves": [
      {
        "uci": "f8g7",
        "san": "Bg7",
        "white": 2111,
        "draws": 2000,
        "black": 1445
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/3p1np1/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq -": {
    "eco": "B07",
    "name": "Pirc Savunması",
    "moves": [
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 1178,
        "draws": 1178,
        "black": 1011
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/3p1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQK2R b KQkq -": {
    "eco": "B07",
    "name": "Pirc Savunması",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "rnbq1rk1/ppp1ppbp/3p1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQK2R w KQ -": {
    "eco": "B07",
    "name": "Pirc Savunması",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "rnbq1rk1/ppp1ppbp/3p1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQ1RK1 b - -": {
    "eco": "B07",
    "name": "Pirc Savunması",
    "moves": [
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "rnbq1rk1/pp2ppbp/2pp1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQ1RK1 w - -": {
    "eco": "B07",
    "name": "Pirc Savunması",
    "moves": [
      {
        "uci": "a2a4",
        "san": "a4",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "rnbq1rk1/pp2ppbp/2pp1np1/8/P2PP3/2N2N2/1PP1BPPP/R1BQ1RK1 b - -": {
    "eco": "B07",
    "name": "Pirc Savunması",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nbd7",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "r1bq1rk1/pp1nppbp/2pp1np1/8/P2PP3/2N2N2/1PP1BPPP/R1BQ1RK1 w - -": {
    "eco": "B07",
    "name": "Pirc Savunması",
    "moves": [
      {
        "uci": "h2h3",
        "san": "h3",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "r1bq1rk1/pp1nppbp/2pp1np1/8/P2PP3/2N2N1P/1PP1BPP1/R1BQ1RK1 b - -": {
    "eco": "B07",
    "name": "Pirc Savunması",
    "moves": [
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 36,
        "draws": 33,
        "black": 32
      }
    ]
  },
  "r1bq1rk1/pp1n1pbp/2pp1np1/4p3/P2PP3/2N2N1P/1PP1BPP1/R1BQ1RK1 w - -": {
    "eco": "B07",
    "name": "Pirc Savunması",
    "moves": []
  },
  "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq -": {
    "eco": "A40",
    "name": "Vezir Piyonu Açılışı (Queen's Pawn)",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 94200,
        "draws": 98600,
        "black": 56400
      },
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 72300,
        "draws": 76800,
        "black": 45200
      },
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 13400,
        "draws": 14800,
        "black": 10200
      },
      {
        "uci": "f7f5",
        "san": "f5",
        "white": 10500,
        "draws": 7200,
        "black": 7400
      },
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 7800,
        "draws": 7400,
        "black": 5100
      },
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 4200,
        "draws": 3100,
        "black": 3300
      }
    ]
  },
  "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -": {
    "eco": "D00",
    "name": "Vezir Piyonu Oyunu (Queen's Pawn Game)",
    "moves": [
      {
        "uci": "c2c4",
        "san": "c4",
        "white": 54150,
        "draws": 57000,
        "black": 31350
      },
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 17834,
        "draws": 20244,
        "black": 10122
      },
      {
        "uci": "c1f4",
        "san": "Bf4",
        "white": 14668,
        "draws": 13896,
        "black": 10036
      },
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 3276,
        "draws": 2688,
        "black": 2436
      },
      {
        "uci": "e2e3",
        "san": "e3",
        "white": 2736,
        "draws": 2888,
        "black": 1976
      },
      {
        "uci": "c1g5",
        "san": "Bg5",
        "white": 1681,
        "draws": 1230,
        "black": 1189
      },
      {
        "uci": "g2g3",
        "san": "g3",
        "white": 1444,
        "draws": 1520,
        "black": 836
      }
    ]
  },
  "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq -": {
    "eco": "D06",
    "name": "Vezir Gambiti (Queen's Gambit)",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 26676,
        "draws": 28044,
        "black": 13680
      },
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 19512,
        "draws": 23306,
        "black": 11382
      },
      {
        "uci": "d5c4",
        "san": "dxc4",
        "white": 7371,
        "draws": 7182,
        "black": 4347
      },
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 1232,
        "draws": 784,
        "black": 784
      },
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 1008,
        "draws": 744,
        "black": 648
      },
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 720,
        "draws": 560,
        "black": 320
      },
      {
        "uci": "c1f5",
        "san": "Bf5",
        "white": 539,
        "draws": 341,
        "black": 220
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -": {
    "eco": "D37",
    "name": "Vezir Gambiti Kabul Edilmeyen (QGD)",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 8736,
        "draws": 8736,
        "black": 7488
      }
    ]
  },
  "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq -": {
    "eco": "D37",
    "name": "Vezir Gambiti Kabul Edilmeyen (QGD)",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 5748,
        "draws": 5597,
        "black": 3782
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "D37",
    "name": "Vezir Gambiti Kabul Edilmeyen (QGD)",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 3392,
        "draws": 3667,
        "black": 2109
      },
      {
        "uci": "c4d5",
        "san": "cxd5",
        "white": 3209,
        "draws": 3209,
        "black": 2750
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq -": {
    "eco": "D37",
    "name": "Vezir Gambiti Kabul Edilmeyen (QGD)",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 2111,
        "draws": 2000,
        "black": 1445
      },
      {
        "uci": "f8b4",
        "san": "Bb4",
        "white": 2111,
        "draws": 2000,
        "black": 1445
      }
    ]
  },
  "rnbqk2r/ppp1bppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq -": {
    "eco": "D37",
    "name": "Vezir Gambiti Kabul Edilmeyen (QGD)",
    "moves": [
      {
        "uci": "c1f4",
        "san": "Bf4",
        "white": 1178,
        "draws": 1178,
        "black": 1011
      }
    ]
  },
  "rnbqk2r/ppp1bppp/4pn2/3p4/2PP1B2/2N2N2/PP2PPPP/R2QKB1R b KQkq -": {
    "eco": "D37",
    "name": "Vezir Gambiti Kabul Edilmeyen (QGD)",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "rnbq1rk1/ppp1bppp/4pn2/3p4/2PP1B2/2N2N2/PP2PPPP/R2QKB1R w KQ -": {
    "eco": "D37",
    "name": "Vezir Gambiti Kabul Edilmeyen (QGD)",
    "moves": [
      {
        "uci": "e2e3",
        "san": "e3",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "rnbq1rk1/ppp1bppp/4pn2/3p4/2PP1B2/2N1PN2/PP3PPP/R2QKB1R b KQ -": {
    "eco": "D37",
    "name": "Vezir Gambiti Kabul Edilmeyen (QGD)",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 270,
        "draws": 248,
        "black": 232
      }
    ]
  },
  "rnbq1rk1/pp2bppp/4pn2/2pp4/2PP1B2/2N1PN2/PP3PPP/R2QKB1R w KQ -": {
    "eco": "D37",
    "name": "Vezir Gambiti Kabul Edilmeyen (QGD)",
    "moves": [
      {
        "uci": "d4c5",
        "san": "dxc5",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "rnbq1rk1/pp2bppp/4pn2/2Pp4/2P2B2/2N1PN2/PP3PPP/R2QKB1R b KQ -": {
    "eco": "D37",
    "name": "Vezir Gambiti Kabul Edilmeyen (QGD)",
    "moves": [
      {
        "uci": "e7c5",
        "san": "Bxc5",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "rnbq1rk1/pp3ppp/4pn2/2bp4/2P2B2/2N1PN2/PP3PPP/R2QKB1R w KQ -": {
    "eco": "D37",
    "name": "Vezir Gambiti Kabul Edilmeyen (QGD)",
    "moves": [
      {
        "uci": "d1c2",
        "san": "Qc2",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "rnbq1rk1/pp3ppp/4pn2/2bp4/2P2B2/2N1PN2/PPQ2PPP/R3KB1R b KQ -": {
    "eco": "D37",
    "name": "Vezir Gambiti Kabul Edilmeyen (QGD)",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "r1bq1rk1/pp3ppp/2n1pn2/2bp4/2P2B2/2N1PN2/PPQ2PPP/R3KB1R w KQ -": {
    "eco": "D37",
    "name": "Vezir Gambiti Kabul Edilmeyen (QGD)",
    "moves": [
      {
        "uci": "a2a3",
        "san": "a3",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "r1bq1rk1/pp3ppp/2n1pn2/2bp4/2P2B2/P1N1PN2/1PQ2PPP/R3KB1R b KQ -": {
    "eco": "D37",
    "name": "Vezir Gambiti Kabul Edilmeyen (QGD)",
    "moves": [
      {
        "uci": "d8a5",
        "san": "Qa5",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "r1b2rk1/pp3ppp/2n1pn2/q1bp4/2P2B2/P1N1PN2/1PQ2PPP/R3KB1R w KQ -": {
    "eco": "D37",
    "name": "Vezir Gambiti Kabul Edilmeyen (QGD)",
    "moves": []
  },
  "rnbqkb1r/ppp2ppp/4pn2/3P4/3P4/2N5/PP2PPPP/R1BQKBNR b KQkq -": {
    "eco": "D35",
    "name": "Vezir Gambiti: Değişmeli Hat",
    "moves": [
      {
        "uci": "e6d5",
        "san": "exd5",
        "white": 2111,
        "draws": 2000,
        "black": 1445
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/5n2/3p4/3P4/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "D35",
    "name": "Vezir Gambiti: Değişmeli Hat",
    "moves": [
      {
        "uci": "c1g5",
        "san": "Bg5",
        "white": 1178,
        "draws": 1178,
        "black": 1011
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/5n2/3p2B1/3P4/2N5/PP2PPPP/R2QKBNR b KQkq -": {
    "eco": "D35",
    "name": "Vezir Gambiti: Değişmeli Hat",
    "moves": [
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "rnbqkb1r/pp3ppp/2p2n2/3p2B1/3P4/2N5/PP2PPPP/R2QKBNR w KQkq -": {
    "eco": "D35",
    "name": "Vezir Gambiti: Değişmeli Hat",
    "moves": [
      {
        "uci": "e2e3",
        "san": "e3",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "rnbqkb1r/pp3ppp/2p2n2/3p2B1/3P4/2N1P3/PP3PPP/R2QKBNR b KQkq -": {
    "eco": "D35",
    "name": "Vezir Gambiti: Değişmeli Hat",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "rnbqk2r/pp2bppp/2p2n2/3p2B1/3P4/2N1P3/PP3PPP/R2QKBNR w KQkq -": {
    "eco": "D35",
    "name": "Vezir Gambiti: Değişmeli Hat",
    "moves": [
      {
        "uci": "f1d3",
        "san": "Bd3",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "rnbqk2r/pp2bppp/2p2n2/3p2B1/3P4/2NBP3/PP3PPP/R2QK1NR b KQkq -": {
    "eco": "D35",
    "name": "Vezir Gambiti: Değişmeli Hat",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nbd7",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "r1bqk2r/pp1nbppp/2p2n2/3p2B1/3P4/2NBP3/PP3PPP/R2QK1NR w KQkq -": {
    "eco": "D35",
    "name": "Vezir Gambiti: Değişmeli Hat",
    "moves": [
      {
        "uci": "d1c2",
        "san": "Qc2",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "r1bqk2r/pp1nbppp/2p2n2/3p2B1/3P4/2NBP3/PPQ2PPP/R3K1NR b KQkq -": {
    "eco": "D35",
    "name": "Vezir Gambiti: Değişmeli Hat",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "r1bq1rk1/pp1nbppp/2p2n2/3p2B1/3P4/2NBP3/PPQ2PPP/R3K1NR w KQ -": {
    "eco": "D35",
    "name": "Vezir Gambiti: Değişmeli Hat",
    "moves": [
      {
        "uci": "g1e2",
        "san": "Nge2",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "r1bq1rk1/pp1nbppp/2p2n2/3p2B1/3P4/2NBP3/PPQ1NPPP/R3K2R b KQ -": {
    "eco": "D35",
    "name": "Vezir Gambiti: Değişmeli Hat",
    "moves": [
      {
        "uci": "f8e8",
        "san": "Re8",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "r1bqr1k1/pp1nbppp/2p2n2/3p2B1/3P4/2NBP3/PPQ1NPPP/R3K2R w KQ -": {
    "eco": "D35",
    "name": "Vezir Gambiti: Değişmeli Hat",
    "moves": []
  },
  "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -": {
    "eco": "D10",
    "name": "Slav Savunması",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 9235,
        "draws": 9984,
        "black": 5741
      }
    ]
  },
  "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq -": {
    "eco": "D10",
    "name": "Slav Savunması",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 5748,
        "draws": 5597,
        "black": 3782
      }
    ]
  },
  "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq -": {
    "eco": "D10",
    "name": "Slav Savunması",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 3209,
        "draws": 3209,
        "black": 2750
      }
    ]
  },
  "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq -": {
    "eco": "D10",
    "name": "Slav Savunması",
    "moves": [
      {
        "uci": "d5c4",
        "san": "dxc4",
        "white": 2111,
        "draws": 2000,
        "black": 1445
      },
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 2111,
        "draws": 2056,
        "black": 1389
      }
    ]
  },
  "rnbqkb1r/pp2pppp/2p2n2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq -": {
    "eco": "D10",
    "name": "Slav Savunması",
    "moves": [
      {
        "uci": "a2a4",
        "san": "a4",
        "white": 1178,
        "draws": 1178,
        "black": 1011
      }
    ]
  },
  "rnbqkb1r/pp2pppp/2p2n2/8/P1pP4/2N2N2/1P2PPPP/R1BQKB1R b KQkq -": {
    "eco": "D10",
    "name": "Slav Savunması",
    "moves": [
      {
        "uci": "c8f5",
        "san": "Bf5",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "rn1qkb1r/pp2pppp/2p2n2/5b2/P1pP4/2N2N2/1P2PPPP/R1BQKB1R w KQkq -": {
    "eco": "D10",
    "name": "Slav Savunması",
    "moves": [
      {
        "uci": "e2e3",
        "san": "e3",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "rn1qkb1r/pp2pppp/2p2n2/5b2/P1pP4/2N1PN2/1P3PPP/R1BQKB1R b KQkq -": {
    "eco": "D10",
    "name": "Slav Savunması",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 285,
        "draws": 278,
        "black": 187
      }
    ]
  },
  "rn1qkb1r/pp3ppp/2p1pn2/5b2/P1pP4/2N1PN2/1P3PPP/R1BQKB1R w KQkq -": {
    "eco": "D10",
    "name": "Slav Savunması",
    "moves": [
      {
        "uci": "f1c4",
        "san": "Bxc4",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "rn1qkb1r/pp3ppp/2p1pn2/5b2/P1BP4/2N1PN2/1P3PPP/R1BQK2R b KQkq -": {
    "eco": "D10",
    "name": "Slav Savunması",
    "moves": [
      {
        "uci": "f8b4",
        "san": "Bb4",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "rn1qk2r/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P3PPP/R1BQK2R w KQkq -": {
    "eco": "D10",
    "name": "Slav Savunması",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "rn1qk2r/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P3PPP/R1BQ1RK1 b kq -": {
    "eco": "D10",
    "name": "Slav Savunması",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "rn1q1rk1/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P3PPP/R1BQ1RK1 w - -": {
    "eco": "D10",
    "name": "Slav Savunması",
    "moves": [
      {
        "uci": "d1e2",
        "san": "Qe2",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "rn1q1rk1/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P2QPPP/R1B2RK1 b - -": {
    "eco": "D10",
    "name": "Slav Savunması",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nbd7",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "r2q1rk1/pp1n1ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P2QPPP/R1B2RK1 w - -": {
    "eco": "D10",
    "name": "Slav Savunması",
    "moves": [
      {
        "uci": "e3e4",
        "san": "e4",
        "white": 33,
        "draws": 29,
        "black": 23
      }
    ]
  },
  "r2q1rk1/pp1n1ppp/2p1pn2/5b2/PbBPP3/2N2N2/1P2QPPP/R1B2RK1 b - -": {
    "eco": "D10",
    "name": "Slav Savunması",
    "moves": [
      {
        "uci": "f5g6",
        "san": "Bg6",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "r2q1rk1/pp1n1ppp/2p1pnb1/8/PbBPP3/2N2N2/1P2QPPP/R1B2RK1 w - -": {
    "eco": "D10",
    "name": "Slav Savunması",
    "moves": []
  },
  "rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq -": {
    "eco": "D43",
    "name": "Yarı Slav Savunması (Semi-Slav)",
    "moves": [
      {
        "uci": "c1g5",
        "san": "Bg5",
        "white": 1178,
        "draws": 1178,
        "black": 1011
      }
    ]
  },
  "rnbqkb1r/pp3ppp/2p1pn2/3p2B1/2PP4/2N2N2/PP2PPPP/R2QKB1R b KQkq -": {
    "eco": "D43",
    "name": "Yarı Slav Savunması (Semi-Slav)",
    "moves": [
      {
        "uci": "h7h6",
        "san": "h6",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "rnbqkb1r/pp3pp1/2p1pn1p/3p2B1/2PP4/2N2N2/PP2PPPP/R2QKB1R w KQkq -": {
    "eco": "D43",
    "name": "Yarı Slav Savunması (Semi-Slav)",
    "moves": [
      {
        "uci": "g5f6",
        "san": "Bxf6",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "rnbqkb1r/pp3pp1/2p1pB1p/3p4/2PP4/2N2N2/PP2PPPP/R2QKB1R b KQkq -": {
    "eco": "D43",
    "name": "Yarı Slav Savunması (Semi-Slav)",
    "moves": [
      {
        "uci": "d8f6",
        "san": "Qxf6",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "rnb1kb1r/pp3pp1/2p1pq1p/3p4/2PP4/2N2N2/PP2PPPP/R2QKB1R w KQkq -": {
    "eco": "D43",
    "name": "Yarı Slav Savunması (Semi-Slav)",
    "moves": [
      {
        "uci": "e2e3",
        "san": "e3",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "rnb1kb1r/pp3pp1/2p1pq1p/3p4/2PP4/2N1PN2/PP3PPP/R2QKB1R b KQkq -": {
    "eco": "D43",
    "name": "Yarı Slav Savunması (Semi-Slav)",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nd7",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "r1b1kb1r/pp1n1pp1/2p1pq1p/3p4/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQkq -": {
    "eco": "D43",
    "name": "Yarı Slav Savunması (Semi-Slav)",
    "moves": [
      {
        "uci": "f1d3",
        "san": "Bd3",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "r1b1kb1r/pp1n1pp1/2p1pq1p/3p4/2PP4/2NBPN2/PP3PPP/R2QK2R b KQkq -": {
    "eco": "D43",
    "name": "Yarı Slav Savunması (Semi-Slav)",
    "moves": [
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "r1b1kb1r/pp1n1p2/2p1pqpp/3p4/2PP4/2NBPN2/PP3PPP/R2QK2R w KQkq -": {
    "eco": "D43",
    "name": "Yarı Slav Savunması (Semi-Slav)",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "r1b1kb1r/pp1n1p2/2p1pqpp/3p4/2PP4/2NBPN2/PP3PPP/R2Q1RK1 b kq -": {
    "eco": "D43",
    "name": "Yarı Slav Savunması (Semi-Slav)",
    "moves": [
      {
        "uci": "f8g7",
        "san": "Bg7",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "r1b1k2r/pp1n1pb1/2p1pqpp/3p4/2PP4/2NBPN2/PP3PPP/R2Q1RK1 w kq -": {
    "eco": "D43",
    "name": "Yarı Slav Savunması (Semi-Slav)",
    "moves": []
  },
  "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -": {
    "eco": "A45",
    "name": "Hint Savunması (Indian Defense)",
    "moves": [
      {
        "uci": "c2c4",
        "san": "c4",
        "white": 71136,
        "draws": 74784,
        "black": 36480
      },
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 19277,
        "draws": 21882,
        "black": 10941
      },
      {
        "uci": "c1f4",
        "san": "Bf4",
        "white": 9424,
        "draws": 8928,
        "black": 6448
      },
      {
        "uci": "c1g5",
        "san": "Bg5",
        "white": 7720,
        "draws": 6176,
        "black": 5404
      },
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 1794,
        "draws": 1472,
        "black": 1334
      },
      {
        "uci": "g2g3",
        "san": "g3",
        "white": 1365,
        "draws": 1470,
        "black": 665
      }
    ]
  },
  "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq -": {
    "eco": "E00",
    "name": "Hint Savunması Ana Hat (Indian Defense: Main Line)",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 33540,
        "draws": 36120,
        "black": 16340
      },
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 26520,
        "draws": 23868,
        "black": 15912
      },
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 8526,
        "draws": 7674,
        "black": 5100
      },
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 1976,
        "draws": 1716,
        "black": 1508
      },
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 1428,
        "draws": 952,
        "black": 1020
      },
      {
        "uci": "b7b6",
        "san": "b6",
        "white": 648,
        "draws": 648,
        "black": 504
      }
    ]
  },
  "rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -": {
    "eco": "E60",
    "name": "Şah-Hint Savunması (KID)",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 8736,
        "draws": 8736,
        "black": 7488
      }
    ]
  },
  "rnbqkb1r/pppppp1p/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq -": {
    "eco": "E60",
    "name": "Şah-Hint Savunması (KID)",
    "moves": [
      {
        "uci": "f8g7",
        "san": "Bg7",
        "white": 5748,
        "draws": 5446,
        "black": 3933
      },
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 5748,
        "draws": 5597,
        "black": 3782
      }
    ]
  },
  "rnbqk2r/ppppppbp/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "E60",
    "name": "Şah-Hint Savunması (KID)",
    "moves": [
      {
        "uci": "e2e4",
        "san": "e4",
        "white": 3576,
        "draws": 3117,
        "black": 2475
      }
    ]
  },
  "rnbqk2r/ppppppbp/5np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq -": {
    "eco": "E60",
    "name": "Şah-Hint Savunması (KID)",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 2111,
        "draws": 2000,
        "black": 1445
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR w KQkq -": {
    "eco": "E60",
    "name": "Şah-Hint Savunması (KID)",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 1246,
        "draws": 1347,
        "black": 774
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R b KQkq -": {
    "eco": "E60",
    "name": "Şah-Hint Savunması (KID)",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQ -": {
    "eco": "E60",
    "name": "Şah-Hint Savunması (KID)",
    "moves": [
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP2BPPP/R1BQK2R b KQ -": {
    "eco": "E60",
    "name": "Şah-Hint Savunması (KID)",
    "moves": [
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 270,
        "draws": 248,
        "black": 232
      }
    ]
  },
  "rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQK2R w KQ -": {
    "eco": "E60",
    "name": "Şah-Hint Savunması (KID)",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 b - -": {
    "eco": "E60",
    "name": "Şah-Hint Savunması (KID)",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "r1bq1rk1/ppp2pbp/2np1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w - -": {
    "eco": "E60",
    "name": "Şah-Hint Savunması (KID)",
    "moves": [
      {
        "uci": "d4d5",
        "san": "d5",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "r1bq1rk1/ppp2pbp/2np1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQ1RK1 b - -": {
    "eco": "E60",
    "name": "Şah-Hint Savunması (KID)",
    "moves": [
      {
        "uci": "c6e7",
        "san": "Ne7",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQ1RK1 w - -": {
    "eco": "E60",
    "name": "Şah-Hint Savunması (KID)",
    "moves": [
      {
        "uci": "f3e1",
        "san": "Ne1",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N5/PP2BPPP/R1BQNRK1 b - -": {
    "eco": "E60",
    "name": "Şah-Hint Savunması (KID)",
    "moves": [
      {
        "uci": "f6d7",
        "san": "Nd7",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "r1bq1rk1/pppnnpbp/3p2p1/3Pp3/2P1P3/2N5/PP2BPPP/R1BQNRK1 w - -": {
    "eco": "E60",
    "name": "Şah-Hint Savunması (KID)",
    "moves": [
      {
        "uci": "c1e3",
        "san": "Be3",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "r1bq1rk1/pppnnpbp/3p2p1/3Pp3/2P1P3/2N1B3/PP2BPPP/R2QNRK1 b - -": {
    "eco": "E60",
    "name": "Şah-Hint Savunması (KID)",
    "moves": [
      {
        "uci": "f7f5",
        "san": "f5",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "r1bq1rk1/pppnn1bp/3p2p1/3Ppp2/2P1P3/2N1B3/PP2BPPP/R2QNRK1 w - -": {
    "eco": "E60",
    "name": "Şah-Hint Savunması (KID)",
    "moves": []
  },
  "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -": {
    "eco": "E32",
    "name": "Nimzo-Hint Savunması",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 8736,
        "draws": 8736,
        "black": 7488
      },
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 9235,
        "draws": 9984,
        "black": 5741
      }
    ]
  },
  "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq -": {
    "eco": "E32",
    "name": "Nimzo-Hint Savunması",
    "moves": [
      {
        "uci": "f8b4",
        "san": "Bb4",
        "white": 5748,
        "draws": 5446,
        "black": 3933
      }
    ]
  },
  "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "E32",
    "name": "Nimzo-Hint Savunması",
    "moves": [
      {
        "uci": "d1c2",
        "san": "Qc2",
        "white": 3209,
        "draws": 3209,
        "black": 2750
      },
      {
        "uci": "e2e3",
        "san": "e3",
        "white": 3209,
        "draws": 3209,
        "black": 2750
      }
    ]
  },
  "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PPQ1PPPP/R1B1KBNR b KQkq -": {
    "eco": "E32",
    "name": "Nimzo-Hint Savunması",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 2111,
        "draws": 2000,
        "black": 1445
      }
    ]
  },
  "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N5/PPQ1PPPP/R1B1KBNR w KQ -": {
    "eco": "E32",
    "name": "Nimzo-Hint Savunması",
    "moves": [
      {
        "uci": "a2a3",
        "san": "a3",
        "white": 1178,
        "draws": 1178,
        "black": 1011
      }
    ]
  },
  "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/P1N5/1PQ1PPPP/R1B1KBNR b KQ -": {
    "eco": "E32",
    "name": "Nimzo-Hint Savunması",
    "moves": [
      {
        "uci": "b4c3",
        "san": "Bxc3+",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "rnbq1rk1/pppp1ppp/4pn2/8/2PP4/P1b5/1PQ1PPPP/R1B1KBNR w KQ -": {
    "eco": "E32",
    "name": "Nimzo-Hint Savunması",
    "moves": [
      {
        "uci": "c2c3",
        "san": "Qxc3",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "rnbq1rk1/pppp1ppp/4pn2/8/2PP4/P1Q5/1P2PPPP/R1B1KBNR b KQ -": {
    "eco": "E32",
    "name": "Nimzo-Hint Savunması",
    "moves": [
      {
        "uci": "b7b6",
        "san": "b6",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "rnbq1rk1/p1pp1ppp/1p2pn2/8/2PP4/P1Q5/1P2PPPP/R1B1KBNR w KQ -": {
    "eco": "E32",
    "name": "Nimzo-Hint Savunması",
    "moves": [
      {
        "uci": "c1g5",
        "san": "Bg5",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "rnbq1rk1/p1pp1ppp/1p2pn2/6B1/2PP4/P1Q5/1P2PPPP/R3KBNR b KQ -": {
    "eco": "E32",
    "name": "Nimzo-Hint Savunması",
    "moves": [
      {
        "uci": "c8b7",
        "san": "Bb7",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "rn1q1rk1/pbpp1ppp/1p2pn2/6B1/2PP4/P1Q5/1P2PPPP/R3KBNR w KQ -": {
    "eco": "E32",
    "name": "Nimzo-Hint Savunması",
    "moves": [
      {
        "uci": "e2e3",
        "san": "e3",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "rn1q1rk1/pbpp1ppp/1p2pn2/6B1/2PP4/P1Q1P3/1P3PPP/R3KBNR b KQ -": {
    "eco": "E32",
    "name": "Nimzo-Hint Savunması",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "rn1q1rk1/pbp2ppp/1p1ppn2/6B1/2PP4/P1Q1P3/1P3PPP/R3KBNR w KQ -": {
    "eco": "E32",
    "name": "Nimzo-Hint Savunması",
    "moves": [
      {
        "uci": "f2f3",
        "san": "f3",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "rn1q1rk1/pbp2ppp/1p1ppn2/6B1/2PP4/P1Q1PP2/1P4PP/R3KBNR b KQ -": {
    "eco": "E32",
    "name": "Nimzo-Hint Savunması",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nbd7",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "r2q1rk1/pbpn1ppp/1p1ppn2/6B1/2PP4/P1Q1PP2/1P4PP/R3KBNR w KQ -": {
    "eco": "E32",
    "name": "Nimzo-Hint Savunması",
    "moves": []
  },
  "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR b KQkq -": {
    "eco": "E20",
    "name": "Nimzo-Hint: Rubinstein Hat",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 2111,
        "draws": 2000,
        "black": 1445
      }
    ]
  },
  "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQ -": {
    "eco": "E20",
    "name": "Nimzo-Hint: Rubinstein Hat",
    "moves": [
      {
        "uci": "f1d3",
        "san": "Bd3",
        "white": 1178,
        "draws": 1178,
        "black": 1011
      }
    ]
  },
  "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2NBP3/PP3PPP/R1BQK1NR b KQ -": {
    "eco": "E20",
    "name": "Nimzo-Hint: Rubinstein Hat",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 776,
        "draws": 755,
        "black": 510
      }
    ]
  },
  "rnbq1rk1/ppp2ppp/4pn2/3p4/1bPP4/2NBP3/PP3PPP/R1BQK1NR w KQ -": {
    "eco": "E20",
    "name": "Nimzo-Hint: Rubinstein Hat",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 458,
        "draws": 495,
        "black": 284
      }
    ]
  },
  "rnbq1rk1/ppp2ppp/4pn2/3p4/1bPP4/2NBPN2/PP3PPP/R1BQK2R b KQ -": {
    "eco": "E20",
    "name": "Nimzo-Hint: Rubinstein Hat",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 270,
        "draws": 248,
        "black": 232
      }
    ]
  },
  "rnbq1rk1/pp3ppp/4pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQK2R w KQ -": {
    "eco": "E20",
    "name": "Nimzo-Hint: Rubinstein Hat",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "rnbq1rk1/pp3ppp/4pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1 b - -": {
    "eco": "E20",
    "name": "Nimzo-Hint: Rubinstein Hat",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "r1bq1rk1/pp3ppp/2n1pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1 w - -": {
    "eco": "E20",
    "name": "Nimzo-Hint: Rubinstein Hat",
    "moves": [
      {
        "uci": "a2a3",
        "san": "a3",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "r1bq1rk1/pp3ppp/2n1pn2/2pp4/1bPP4/P1NBPN2/1P3PPP/R1BQ1RK1 b - -": {
    "eco": "E20",
    "name": "Nimzo-Hint: Rubinstein Hat",
    "moves": [
      {
        "uci": "b4c3",
        "san": "Bxc3",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "r1bq1rk1/pp3ppp/2n1pn2/2pp4/2PP4/P1bBPN2/1P3PPP/R1BQ1RK1 w - -": {
    "eco": "E20",
    "name": "Nimzo-Hint: Rubinstein Hat",
    "moves": [
      {
        "uci": "b2c3",
        "san": "bxc3",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "r1bq1rk1/pp3ppp/2n1pn2/2pp4/2PP4/P1PBPN2/5PPP/R1BQ1RK1 b - -": {
    "eco": "E20",
    "name": "Nimzo-Hint: Rubinstein Hat",
    "moves": [
      {
        "uci": "d5c4",
        "san": "dxc4",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "r1bq1rk1/pp3ppp/2n1pn2/2p5/2pP4/P1PBPN2/5PPP/R1BQ1RK1 w - -": {
    "eco": "E20",
    "name": "Nimzo-Hint: Rubinstein Hat",
    "moves": [
      {
        "uci": "d3c4",
        "san": "Bxc4",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "r1bq1rk1/pp3ppp/2n1pn2/2p5/2BP4/P1P1PN2/5PPP/R1BQ1RK1 b - -": {
    "eco": "E20",
    "name": "Nimzo-Hint: Rubinstein Hat",
    "moves": []
  },
  "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq -": {
    "eco": "E15",
    "name": "Vezir-Hint Savunması (QID)",
    "moves": [
      {
        "uci": "b7b6",
        "san": "b6",
        "white": 5748,
        "draws": 5446,
        "black": 3933
      }
    ]
  },
  "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq -": {
    "eco": "E15",
    "name": "Vezir-Hint Savunması (QID)",
    "moves": [
      {
        "uci": "g2g3",
        "san": "g3",
        "white": 3209,
        "draws": 3209,
        "black": 2750
      }
    ]
  },
  "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/5NP1/PP2PP1P/RNBQKB1R b KQkq -": {
    "eco": "E15",
    "name": "Vezir-Hint Savunması (QID)",
    "moves": [
      {
        "uci": "c8a6",
        "san": "Ba6",
        "white": 2111,
        "draws": 2000,
        "black": 1445
      }
    ]
  },
  "rn1qkb1r/p1pp1ppp/bp2pn2/8/2PP4/5NP1/PP2PP1P/RNBQKB1R w KQkq -": {
    "eco": "E15",
    "name": "Vezir-Hint Savunması (QID)",
    "moves": [
      {
        "uci": "b2b3",
        "san": "b3",
        "white": 1178,
        "draws": 1178,
        "black": 1011
      }
    ]
  },
  "rn1qkb1r/p1pp1ppp/bp2pn2/8/2PP4/1P3NP1/P3PP1P/RNBQKB1R b KQkq -": {
    "eco": "E15",
    "name": "Vezir-Hint Savunması (QID)",
    "moves": [
      {
        "uci": "f8b4",
        "san": "Bb4+",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "rn1qk2r/p1pp1ppp/bp2pn2/8/1bPP4/1P3NP1/P3PP1P/RNBQKB1R w KQkq -": {
    "eco": "E15",
    "name": "Vezir-Hint Savunması (QID)",
    "moves": [
      {
        "uci": "c1d2",
        "san": "Bd2",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "rn1qk2r/p1pp1ppp/bp2pn2/8/1bPP4/1P3NP1/P2BPP1P/RN1QKB1R b KQkq -": {
    "eco": "E15",
    "name": "Vezir-Hint Savunması (QID)",
    "moves": [
      {
        "uci": "b4e7",
        "san": "Be7",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "rn1qk2r/p1ppbppp/bp2pn2/8/2PP4/1P3NP1/P2BPP1P/RN1QKB1R w KQkq -": {
    "eco": "E15",
    "name": "Vezir-Hint Savunması (QID)",
    "moves": [
      {
        "uci": "f1g2",
        "san": "Bg2",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "rn1qk2r/p1ppbppp/bp2pn2/8/2PP4/1P3NP1/P2BPPBP/RN1QK2R b KQkq -": {
    "eco": "E15",
    "name": "Vezir-Hint Savunması (QID)",
    "moves": [
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "rn1qk2r/p2pbppp/bpp1pn2/8/2PP4/1P3NP1/P2BPPBP/RN1QK2R w KQkq -": {
    "eco": "E15",
    "name": "Vezir-Hint Savunması (QID)",
    "moves": [
      {
        "uci": "d2c3",
        "san": "Bc3",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "rn1qk2r/p2pbppp/bpp1pn2/8/2PP4/1PB2NP1/P3PPBP/RN1QK2R b KQkq -": {
    "eco": "E15",
    "name": "Vezir-Hint Savunması (QID)",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 38,
        "draws": 37,
        "black": 26
      }
    ]
  },
  "rn1qk2r/p3bppp/bpp1pn2/3p4/2PP4/1PB2NP1/P3PPBP/RN1QK2R w KQkq -": {
    "eco": "E15",
    "name": "Vezir-Hint Savunması (QID)",
    "moves": [
      {
        "uci": "f3e5",
        "san": "Ne5",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "rn1qk2r/p3bppp/bpp1pn2/3pN3/2PP4/1PB3P1/P3PPBP/RN1QK2R b KQkq -": {
    "eco": "E15",
    "name": "Vezir-Hint Savunması (QID)",
    "moves": [
      {
        "uci": "f6d7",
        "san": "Nfd7",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "rn1qk2r/p2nbppp/bpp1p3/3pN3/2PP4/1PB3P1/P3PPBP/RN1QK2R w KQkq -": {
    "eco": "E15",
    "name": "Vezir-Hint Savunması (QID)",
    "moves": []
  },
  "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "D85",
    "name": "Grünfeld Savunması",
    "moves": [
      {
        "uci": "c4d5",
        "san": "cxd5",
        "white": 3209,
        "draws": 3209,
        "black": 2750
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/5np1/3P4/3P4/2N5/PP2PPPP/R1BQKBNR b KQkq -": {
    "eco": "D85",
    "name": "Grünfeld Savunması",
    "moves": [
      {
        "uci": "f6d5",
        "san": "Nxd5",
        "white": 2111,
        "draws": 2000,
        "black": 1445
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/6p1/3n4/3P4/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "D85",
    "name": "Grünfeld Savunması",
    "moves": [
      {
        "uci": "e2e4",
        "san": "e4",
        "white": 1313,
        "draws": 1145,
        "black": 909
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/6p1/3n4/3PP3/2N5/PP3PPP/R1BQKBNR b KQkq -": {
    "eco": "D85",
    "name": "Grünfeld Savunması",
    "moves": [
      {
        "uci": "d5c3",
        "san": "Nxc3",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/6p1/8/3PP3/2n5/PP3PPP/R1BQKBNR w KQkq -": {
    "eco": "D85",
    "name": "Grünfeld Savunması",
    "moves": [
      {
        "uci": "b2c3",
        "san": "bxc3",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "rnbqkb1r/ppp1pp1p/6p1/8/3PP3/2P5/P4PPP/R1BQKBNR b KQkq -": {
    "eco": "D85",
    "name": "Grünfeld Savunması",
    "moves": [
      {
        "uci": "f8g7",
        "san": "Bg7",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/6p1/8/3PP3/2P5/P4PPP/R1BQKBNR w KQkq -": {
    "eco": "D85",
    "name": "Grünfeld Savunması",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 168,
        "draws": 182,
        "black": 104
      }
    ]
  },
  "rnbqk2r/ppp1ppbp/6p1/8/3PP3/2P2N2/P4PPP/R1BQKB1R b KQkq -": {
    "eco": "D85",
    "name": "Grünfeld Savunması",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 99,
        "draws": 91,
        "black": 85
      }
    ]
  },
  "rnbqk2r/pp2ppbp/6p1/2p5/3PP3/2P2N2/P4PPP/R1BQKB1R w KQkq -": {
    "eco": "D85",
    "name": "Grünfeld Savunması",
    "moves": [
      {
        "uci": "a1b1",
        "san": "Rb1",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "rnbqk2r/pp2ppbp/6p1/2p5/3PP3/2P2N2/P4PPP/1RBQKB1R b Kkq -": {
    "eco": "D85",
    "name": "Grünfeld Savunması",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "rnbq1rk1/pp2ppbp/6p1/2p5/3PP3/2P2N2/P4PPP/1RBQKB1R w K -": {
    "eco": "D85",
    "name": "Grünfeld Savunması",
    "moves": [
      {
        "uci": "f1e2",
        "san": "Be2",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "rnbq1rk1/pp2ppbp/6p1/2p5/3PP3/2P2N2/P3BPPP/1RBQK2R b K -": {
    "eco": "D85",
    "name": "Grünfeld Savunması",
    "moves": [
      {
        "uci": "c5d4",
        "san": "cxd4",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "rnbq1rk1/pp2ppbp/6p1/8/3pP3/2P2N2/P3BPPP/1RBQK2R w K -": {
    "eco": "D85",
    "name": "Grünfeld Savunması",
    "moves": [
      {
        "uci": "c3d4",
        "san": "cxd4",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "rnbq1rk1/pp2ppbp/6p1/8/3PP3/5N2/P3BPPP/1RBQK2R b K -": {
    "eco": "D85",
    "name": "Grünfeld Savunması",
    "moves": [
      {
        "uci": "d8a5",
        "san": "Qa5+",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "rnb2rk1/pp2ppbp/6p1/q7/3PP3/5N2/P3BPPP/1RBQK2R w K -": {
    "eco": "D85",
    "name": "Grünfeld Savunması",
    "moves": []
  },
  "rnbqkb1r/pp1ppppp/5n2/2p5/2PP4/8/PP2PPPP/RNBQKBNR w KQkq -": {
    "eco": "A56",
    "name": "Benoni Savunması",
    "moves": [
      {
        "uci": "d4d5",
        "san": "d5",
        "white": 8736,
        "draws": 8736,
        "black": 7488
      }
    ]
  },
  "rnbqkb1r/pp1ppppp/5n2/2pP4/2P5/8/PP2PPPP/RNBQKBNR b KQkq -": {
    "eco": "A56",
    "name": "Benoni Savunması",
    "moves": [
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 5446,
        "draws": 4992,
        "black": 4689
      }
    ]
  },
  "rnbqkb1r/pp1p1ppp/5n2/2pPp3/2P5/8/PP2PPPP/RNBQKBNR w KQkq e6": {
    "eco": "A56",
    "name": "Benoni Savunması",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 3209,
        "draws": 3209,
        "black": 2750
      }
    ]
  },
  "rnbqkb1r/pp1p1ppp/5n2/2pPp3/2P5/2N5/PP2PPPP/R1BQKBNR b KQkq -": {
    "eco": "A56",
    "name": "Benoni Savunması",
    "moves": [
      {
        "uci": "d7d6",
        "san": "d6",
        "white": 2111,
        "draws": 2000,
        "black": 1445
      }
    ]
  },
  "rnbqkb1r/pp3ppp/3p1n2/2pPp3/2P5/2N5/PP2PPPP/R1BQKBNR w KQkq -": {
    "eco": "A56",
    "name": "Benoni Savunması",
    "moves": [
      {
        "uci": "e2e4",
        "san": "e4",
        "white": 1313,
        "draws": 1145,
        "black": 909
      }
    ]
  },
  "rnbqkb1r/pp3ppp/3p1n2/2pPp3/2P1P3/2N5/PP3PPP/R1BQKBNR b KQkq -": {
    "eco": "A56",
    "name": "Benoni Savunması",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "rnbqk2r/pp2bppp/3p1n2/2pPp3/2P1P3/2N5/PP3PPP/R1BQKBNR w KQkq -": {
    "eco": "A56",
    "name": "Benoni Savunması",
    "moves": [
      {
        "uci": "f1d3",
        "san": "Bd3",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "rnbqk2r/pp2bppp/3p1n2/2pPp3/2P1P3/2NB4/PP3PPP/R1BQK1NR b KQkq -": {
    "eco": "A56",
    "name": "Benoni Savunması",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "rnbq1rk1/pp2bppp/3p1n2/2pPp3/2P1P3/2NB4/PP3PPP/R1BQK1NR w KQ -": {
    "eco": "A56",
    "name": "Benoni Savunması",
    "moves": [
      {
        "uci": "g1e2",
        "san": "Nge2",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "rnbq1rk1/pp2bppp/3p1n2/2pPp3/2P1P3/2NB4/PP2NPPP/R1BQK2R b KQ -": {
    "eco": "A56",
    "name": "Benoni Savunması",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nbd7",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "r1bq1rk1/pp1nbppp/3p1n2/2pPp3/2P1P3/2NB4/PP2NPPP/R1BQK2R w KQ -": {
    "eco": "A56",
    "name": "Benoni Savunması",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "r1bq1rk1/pp1nbppp/3p1n2/2pPp3/2P1P3/2NB4/PP2NPPP/R1BQ1RK1 b - -": {
    "eco": "A56",
    "name": "Benoni Savunması",
    "moves": [
      {
        "uci": "a7a6",
        "san": "a6",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "r1bq1rk1/1p1nbppp/p2p1n2/2pPp3/2P1P3/2NB4/PP2NPPP/R1BQ1RK1 w - -": {
    "eco": "A56",
    "name": "Benoni Savunması",
    "moves": []
  },
  "rnbqkbnr/ppppp1pp/8/5p2/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "g2g3",
        "san": "g3",
        "white": 23783,
        "draws": 23783,
        "black": 20386
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
        "white": 15650,
        "draws": 15238,
        "black": 10295
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
        "white": 8736,
        "draws": 8736,
        "black": 7488
      }
    ]
  },
  "rnbqkb1r/ppppp1pp/5n2/5p2/3P4/6P1/PPP1PPBP/RNBQK1NR b KQkq -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 5748,
        "draws": 5597,
        "black": 3782
      }
    ]
  },
  "rnbqkb1r/pppp2pp/4pn2/5p2/3P4/6P1/PPP1PPBP/RNBQK1NR w KQkq -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 3392,
        "draws": 3667,
        "black": 2109
      }
    ]
  },
  "rnbqkb1r/pppp2pp/4pn2/5p2/3P4/5NP1/PPP1PPBP/RNBQK2R b KQkq -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 2111,
        "draws": 2056,
        "black": 1389
      }
    ]
  },
  "rnbqkb1r/ppp3pp/4pn2/3p1p2/3P4/5NP1/PPP1PPBP/RNBQK2R w KQkq -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 1178,
        "draws": 1178,
        "black": 1011
      }
    ]
  },
  "rnbqkb1r/ppp3pp/4pn2/3p1p2/3P4/5NP1/PPP1PPBP/RNBQ1RK1 b kq -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "f8d6",
        "san": "Bd6",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "rnbqk2r/ppp3pp/3bpn2/3p1p2/3P4/5NP1/PPP1PPBP/RNBQ1RK1 w kq -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "c2c4",
        "san": "c4",
        "white": 458,
        "draws": 495,
        "black": 284
      }
    ]
  },
  "rnbqk2r/ppp3pp/3bpn2/3p1p2/2PP4/5NP1/PP2PPBP/RNBQ1RK1 b kq -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "rnbqk2r/pp4pp/2pbpn2/3p1p2/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w kq -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "b2b3",
        "san": "b3",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "rnbqk2r/pp4pp/2pbpn2/3p1p2/2PP4/1P3NP1/P3PPBP/RNBQ1RK1 b kq -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "d8e7",
        "san": "Qe7",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "rnb1k2r/pp2q1pp/2pbpn2/3p1p2/2PP4/1P3NP1/P3PPBP/RNBQ1RK1 w kq -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "a2a4",
        "san": "a4",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "rnb1k2r/pp2q1pp/2pbpn2/3p1p2/P1PP4/1P3NP1/4PPBP/RNBQ1RK1 b kq -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "rnb2rk1/pp2q1pp/2pbpn2/3p1p2/P1PP4/1P3NP1/4PPBP/RNBQ1RK1 w - -": {
    "eco": "A80",
    "name": "Hollanda Savunması",
    "moves": []
  },
  "rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq -": {
    "eco": "A10",
    "name": "İngiliz Açılışı (English)",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 34200,
        "draws": 39800,
        "black": 23100
      },
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 28400,
        "draws": 26800,
        "black": 19400
      },
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 14200,
        "draws": 18900,
        "black": 9800
      },
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 12100,
        "draws": 14200,
        "black": 7600
      },
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 6100,
        "draws": 7200,
        "black": 4300
      }
    ]
  },
  "rnbqkb1r/pppppppp/5n2/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq -": {
    "eco": "A15",
    "name": "İngiliz Açılışı (English)",
    "moves": [
      {
        "uci": "b1c3",
        "san": "Nc3",
        "white": 23783,
        "draws": 23783,
        "black": 20386
      }
    ]
  },
  "rnbqkb1r/pppppppp/5n2/8/2P5/2N5/PP1PPPPP/R1BQKBNR b KQkq -": {
    "eco": "A15",
    "name": "İngiliz Açılışı (English)",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 15650,
        "draws": 15238,
        "black": 10295
      }
    ]
  },
  "rnbqkb1r/pppp1ppp/4pn2/8/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq -": {
    "eco": "A15",
    "name": "İngiliz Açılışı (English)",
    "moves": [
      {
        "uci": "g1f3",
        "san": "Nf3",
        "white": 9235,
        "draws": 9984,
        "black": 5741
      }
    ]
  },
  "rnbqkb1r/pppp1ppp/4pn2/8/2P5/2N2N2/PP1PPPPP/R1BQKB1R b KQkq -": {
    "eco": "A15",
    "name": "İngiliz Açılışı (English)",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 5748,
        "draws": 5597,
        "black": 3782
      }
    ]
  },
  "rnbqkb1r/ppp2ppp/4pn2/3p4/2P5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq -": {
    "eco": "A15",
    "name": "İngiliz Açılışı (English)",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 3576,
        "draws": 3117,
        "black": 2475
      }
    ]
  },
  "rnbqk2r/ppp2ppp/4pn2/3p4/1bPP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq -": {
    "eco": "A15",
    "name": "İngiliz Açılışı (English)",
    "moves": [
      {
        "uci": "c1g5",
        "san": "Bg5",
        "white": 1178,
        "draws": 1178,
        "black": 1011
      }
    ]
  },
  "rnbqk2r/ppp2ppp/4pn2/3p2B1/1bPP4/2N2N2/PP2PPPP/R2QKB1R b KQkq -": {
    "eco": "A15",
    "name": "İngiliz Açılışı (English)",
    "moves": [
      {
        "uci": "d5c4",
        "san": "dxc4",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "rnbqk2r/ppp2ppp/4pn2/6B1/1bpP4/2N2N2/PP2PPPP/R2QKB1R w KQkq -": {
    "eco": "A15",
    "name": "İngiliz Açılışı (English)",
    "moves": [
      {
        "uci": "e2e4",
        "san": "e4",
        "white": 482,
        "draws": 421,
        "black": 334
      }
    ]
  },
  "rnbqk2r/ppp2ppp/4pn2/6B1/1bpPP3/2N2N2/PP3PPP/R2QKB1R b KQkq -": {
    "eco": "A15",
    "name": "İngiliz Açılışı (English)",
    "moves": [
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 270,
        "draws": 248,
        "black": 232
      }
    ]
  },
  "rnbqk2r/pp3ppp/4pn2/2p3B1/1bpPP3/2N2N2/PP3PPP/R2QKB1R w KQkq -": {
    "eco": "A15",
    "name": "İngiliz Açılışı (English)",
    "moves": [
      {
        "uci": "f1c4",
        "san": "Bxc4",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "rnbqk2r/pp3ppp/4pn2/2p3B1/1bBPP3/2N2N2/PP3PPP/R2QK2R b KQkq -": {
    "eco": "A15",
    "name": "İngiliz Açılışı (English)",
    "moves": [
      {
        "uci": "c5d4",
        "san": "cxd4",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "rnbqk2r/pp3ppp/4pn2/6B1/1bBpP3/2N2N2/PP3PPP/R2QK2R w KQkq -": {
    "eco": "A15",
    "name": "İngiliz Açılışı (English)",
    "moves": [
      {
        "uci": "f3d4",
        "san": "Nxd4",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "rnbqk2r/pp3ppp/4pn2/6B1/1bBNP3/2N5/PP3PPP/R2QK2R b KQkq -": {
    "eco": "A15",
    "name": "İngiliz Açılışı (English)",
    "moves": [
      {
        "uci": "b4c3",
        "san": "Bxc3+",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "rnbqk2r/pp3ppp/4pn2/6B1/2BNP3/2b5/PP3PPP/R2QK2R w KQkq -": {
    "eco": "A15",
    "name": "İngiliz Açılışı (English)",
    "moves": [
      {
        "uci": "b2c3",
        "san": "bxc3",
        "white": 30,
        "draws": 30,
        "black": 25
      }
    ]
  },
  "rnbqk2r/pp3ppp/4pn2/6B1/2BNP3/2P5/P4PPP/R2QK2R b KQkq -": {
    "eco": "A15",
    "name": "İngiliz Açılışı (English)",
    "moves": [
      {
        "uci": "d8a5",
        "san": "Qa5",
        "white": 32,
        "draws": 31,
        "black": 22
      }
    ]
  },
  "rnb1k2r/pp3ppp/4pn2/q5B1/2BNP3/2P5/P4PPP/R2QK2R w KQkq -": {
    "eco": "A15",
    "name": "İngiliz Açılışı (English)",
    "moves": []
  },
  "rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq -": {
    "eco": "A04",
    "name": "Réti Açılışı (Zukertort Opening)",
    "moves": [
      {
        "uci": "d7d5",
        "san": "d5",
        "white": 38200,
        "draws": 42100,
        "black": 22900
      },
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 35100,
        "draws": 46200,
        "black": 21800
      },
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 11400,
        "draws": 12600,
        "black": 8200
      },
      {
        "uci": "g7g6",
        "san": "g6",
        "white": 6800,
        "draws": 6900,
        "black": 4700
      },
      {
        "uci": "f7f5",
        "san": "f5",
        "white": 3900,
        "draws": 2800,
        "black": 2800
      }
    ]
  },
  "rnbqkbnr/ppp1pppp/8/3p4/8/5N2/PPPPPPPP/RNBQKB1R w KQkq -": {
    "eco": "A04",
    "name": "Reti Açılışı",
    "moves": [
      {
        "uci": "g2g3",
        "san": "g3",
        "white": 23783,
        "draws": 23783,
        "black": 20386
      }
    ]
  },
  "rnbqkbnr/ppp1pppp/8/3p4/8/5NP1/PPPPPP1P/RNBQKB1R b KQkq -": {
    "eco": "A04",
    "name": "Reti Açılışı",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 15650,
        "draws": 15238,
        "black": 10295
      },
      {
        "uci": "c7c5",
        "san": "c5",
        "white": 14826,
        "draws": 13590,
        "black": 12767
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/5n2/3p4/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq -": {
    "eco": "A04",
    "name": "Reti Açılışı",
    "moves": [
      {
        "uci": "f1g2",
        "san": "Bg2",
        "white": 8736,
        "draws": 8736,
        "black": 7488
      }
    ]
  },
  "rnbqkb1r/ppp1pppp/5n2/3p4/8/5NP1/PPPPPPBP/RNBQK2R b KQkq -": {
    "eco": "A04",
    "name": "Reti Açılışı",
    "moves": [
      {
        "uci": "c7c6",
        "san": "c6",
        "white": 5748,
        "draws": 5446,
        "black": 3933
      }
    ]
  },
  "rnbqkb1r/pp2pppp/2p2n2/3p4/8/5NP1/PPPPPPBP/RNBQK2R w KQkq -": {
    "eco": "A04",
    "name": "Reti Açılışı",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 3209,
        "draws": 3209,
        "black": 2750
      }
    ]
  },
  "rnbqkb1r/pp2pppp/2p2n2/3p4/8/5NP1/PPPPPPBP/RNBQ1RK1 b kq -": {
    "eco": "A04",
    "name": "Reti Açılışı",
    "moves": [
      {
        "uci": "c8g4",
        "san": "Bg4",
        "white": 2111,
        "draws": 2000,
        "black": 1445
      }
    ]
  },
  "rn1qkb1r/pp2pppp/2p2n2/3p4/6b1/5NP1/PPPPPPBP/RNBQ1RK1 w kq -": {
    "eco": "A04",
    "name": "Reti Açılışı",
    "moves": [
      {
        "uci": "d2d4",
        "san": "d4",
        "white": 1313,
        "draws": 1145,
        "black": 909
      }
    ]
  },
  "rn1qkb1r/pp2pppp/2p2n2/3p4/3P2b1/5NP1/PPP1PPBP/RNBQ1RK1 b kq -": {
    "eco": "A04",
    "name": "Reti Açılışı",
    "moves": [
      {
        "uci": "b8d7",
        "san": "Nbd7",
        "white": 776,
        "draws": 735,
        "black": 530
      }
    ]
  },
  "r2qkb1r/pp1npppp/2p2n2/3p4/3P2b1/5NP1/PPP1PPBP/RNBQ1RK1 w kq -": {
    "eco": "A04",
    "name": "Reti Açılışı",
    "moves": [
      {
        "uci": "b1d2",
        "san": "Nbd2",
        "white": 433,
        "draws": 433,
        "black": 371
      }
    ]
  },
  "r2qkb1r/pp1npppp/2p2n2/3p4/3P2b1/5NP1/PPPNPPBP/R1BQ1RK1 b kq -": {
    "eco": "A04",
    "name": "Reti Açılışı",
    "moves": [
      {
        "uci": "e7e6",
        "san": "e6",
        "white": 285,
        "draws": 278,
        "black": 187
      }
    ]
  },
  "r2qkb1r/pp1n1ppp/2p1pn2/3p4/3P2b1/5NP1/PPPNPPBP/R1BQ1RK1 w kq -": {
    "eco": "A04",
    "name": "Reti Açılışı",
    "moves": [
      {
        "uci": "f1e1",
        "san": "Re1",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "r2qkb1r/pp1n1ppp/2p1pn2/3p4/3P2b1/5NP1/PPPNPPBP/R1BQR1K1 b kq -": {
    "eco": "A04",
    "name": "Reti Açılışı",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "r2qk2r/pp1nbppp/2p1pn2/3p4/3P2b1/5NP1/PPPNPPBP/R1BQR1K1 w kq -": {
    "eco": "A04",
    "name": "Reti Açılışı",
    "moves": [
      {
        "uci": "e2e4",
        "san": "e4",
        "white": 65,
        "draws": 57,
        "black": 45
      }
    ]
  },
  "r2qk2r/pp1nbppp/2p1pn2/3p4/3PP1b1/5NP1/PPPN1PBP/R1BQR1K1 b kq -": {
    "eco": "A04",
    "name": "Reti Açılışı",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "r2q1rk1/pp1nbppp/2p1pn2/3p4/3PP1b1/5NP1/PPPN1PBP/R1BQR1K1 w - -": {
    "eco": "A04",
    "name": "Reti Açılışı",
    "moves": []
  },
  "rnbqkbnr/pp2pppp/8/2pp4/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq -": {
    "eco": "A07",
    "name": "Şah-Hint Saldırısı (KIA)",
    "moves": [
      {
        "uci": "f1g2",
        "san": "Bg2",
        "white": 8736,
        "draws": 8736,
        "black": 7488
      }
    ]
  },
  "rnbqkbnr/pp2pppp/8/2pp4/8/5NP1/PPPPPPBP/RNBQK2R b KQkq -": {
    "eco": "A07",
    "name": "Şah-Hint Saldırısı (KIA)",
    "moves": [
      {
        "uci": "b8c6",
        "san": "Nc6",
        "white": 5748,
        "draws": 5446,
        "black": 3933
      }
    ]
  },
  "r1bqkbnr/pp2pppp/2n5/2pp4/8/5NP1/PPPPPPBP/RNBQK2R w KQkq -": {
    "eco": "A07",
    "name": "Şah-Hint Saldırısı (KIA)",
    "moves": [
      {
        "uci": "e1g1",
        "san": "O-O",
        "white": 3209,
        "draws": 3209,
        "black": 2750
      }
    ]
  },
  "r1bqkbnr/pp2pppp/2n5/2pp4/8/5NP1/PPPPPPBP/RNBQ1RK1 b kq -": {
    "eco": "A07",
    "name": "Şah-Hint Saldırısı (KIA)",
    "moves": [
      {
        "uci": "e7e5",
        "san": "e5",
        "white": 2000,
        "draws": 1833,
        "black": 1723
      }
    ]
  },
  "r1bqkbnr/pp3ppp/2n5/2ppp3/8/5NP1/PPPPPPBP/RNBQ1RK1 w kq -": {
    "eco": "A07",
    "name": "Şah-Hint Saldırısı (KIA)",
    "moves": [
      {
        "uci": "d2d3",
        "san": "d3",
        "white": 1178,
        "draws": 1178,
        "black": 1011
      }
    ]
  },
  "r1bqkbnr/pp3ppp/2n5/2ppp3/8/3P1NP1/PPP1PPBP/RNBQ1RK1 b kq -": {
    "eco": "A07",
    "name": "Şah-Hint Saldırısı (KIA)",
    "moves": [
      {
        "uci": "g8f6",
        "san": "Nf6",
        "white": 776,
        "draws": 755,
        "black": 510
      }
    ]
  },
  "r1bqkb1r/pp3ppp/2n2n2/2ppp3/8/3P1NP1/PPP1PPBP/RNBQ1RK1 w kq -": {
    "eco": "A07",
    "name": "Şah-Hint Saldırısı (KIA)",
    "moves": [
      {
        "uci": "e2e4",
        "san": "e4",
        "white": 482,
        "draws": 421,
        "black": 334
      }
    ]
  },
  "r1bqkb1r/pp3ppp/2n2n2/2ppp3/4P3/3P1NP1/PPP2PBP/RNBQ1RK1 b kq -": {
    "eco": "A07",
    "name": "Şah-Hint Saldırısı (KIA)",
    "moves": [
      {
        "uci": "f8e7",
        "san": "Be7",
        "white": 285,
        "draws": 270,
        "black": 195
      }
    ]
  },
  "r1bqk2r/pp2bppp/2n2n2/2ppp3/4P3/3P1NP1/PPP2PBP/RNBQ1RK1 w kq -": {
    "eco": "A07",
    "name": "Şah-Hint Saldırısı (KIA)",
    "moves": [
      {
        "uci": "b1d2",
        "san": "Nbd2",
        "white": 159,
        "draws": 159,
        "black": 136
      }
    ]
  },
  "r1bqk2r/pp2bppp/2n2n2/2ppp3/4P3/3P1NP1/PPPN1PBP/R1BQ1RK1 b kq -": {
    "eco": "A07",
    "name": "Şah-Hint Saldırısı (KIA)",
    "moves": [
      {
        "uci": "e8g8",
        "san": "O-O",
        "white": 105,
        "draws": 99,
        "black": 71
      }
    ]
  },
  "r1bq1rk1/pp2bppp/2n2n2/2ppp3/4P3/3P1NP1/PPPN1PBP/R1BQ1RK1 w - -": {
    "eco": "A07",
    "name": "Şah-Hint Saldırısı (KIA)",
    "moves": [
      {
        "uci": "c2c3",
        "san": "c3",
        "white": 58,
        "draws": 58,
        "black": 51
      }
    ]
  },
  "r1bq1rk1/pp2bppp/2n2n2/2ppp3/4P3/2PP1NP1/PP1N1PBP/R1BQ1RK1 b - -": {
    "eco": "A07",
    "name": "Şah-Hint Saldırısı (KIA)",
    "moves": [
      {
        "uci": "f8e8",
        "san": "Re8",
        "white": 38,
        "draws": 36,
        "black": 27
      }
    ]
  },
  "r1bqr1k1/pp2bppp/2n2n2/2ppp3/4P3/2PP1NP1/PP1N1PBP/R1BQ1RK1 w - -": {
    "eco": "A07",
    "name": "Şah-Hint Saldırısı (KIA)",
    "moves": []
  }
};
