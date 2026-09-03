# ♟️ Apertura — Modern Chess Repertoire & Spaced Repetition Trainer

[![React 19](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.3-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Capacitor](https://img.shields.io/badge/Capacitor-8.5-119eff?style=for-the-badge&logo=capacitor&logoColor=white)](https://capacitorjs.com/)
[![Stockfish](https://img.shields.io/badge/Stockfish-WASM_18-22c55e?style=for-the-badge&logo=chess.com&logoColor=white)](https://stockfishchess.org/)
[![License](https://img.shields.io/badge/License-MIT-amber?style=for-the-badge)](LICENSE)

> A minimalist, **local-first** chess opening repertoire trainer designed for serious players. Build dynamic branching repertoires, analyze deviations against 2400+ FIDE Grandmaster theory, and internalize opening lines through **SM-2 spaced repetition** with progressive hints.

---

## ⚡ Key Architectural Features

### 🌳 1. Visual DAG Repertoire Atlas (Bezier Curved Connectors)
- **1 Move = 1 Exact Layer Column:** Discrete hierarchical matrix with curved SVG Bezier curves connecting parent nodes to child variations.
- **Root Move Independence:** Manage multiple first moves (e.g. `1. e4`, `1. d4`, `1. c4`) inside a single repertoire or split into custom trees.
- **Active Line Teleport:** Jump instantly from any tree node directly into the live chessboard arena.

### 🧠 2. SM-2 Spaced Repetition & 3-Stage Progressive Hints
- **Anki-style Active Recall:** Automatically schedules variant reviews based on mastery factor, repetition intervals, and forgetting curves.
- **Pedagogical Hint Engine:**
  - *1st Mistake:* Move is undone, 2 attempts remaining.
  - *2nd Mistake:* Target piece square pulses with an amber glow.
  - *3rd Mistake:* Correct move is drawn with a green vector arrow, auto-played, and queued for subsequent practice rounds.
- **Multi-Round Elimination Loop:** Continue drilling until all target lines are executed with 100% accuracy.

### ⚡ 3. Duality Engine (Human Masters vs. Deep Stockfish)
- **Zero Fake Data Principle:** Positions without recorded master games are transparently labeled as *Out of Theory*.
- **Tactical Divergence Detection:** Highlights positions where 2400+ FIDE master move popularity deviates from Stockfish 18 MultiPV=3 evaluation (tactical traps).
- **Lichess API Integration:** Supports both bundled offline ECO Master DAG (7,800+ positions) and live 5.5B+ Lichess cloud explorer queries via 0-scope Personal API tokens.

### 🚀 4. High-Performance 60 FPS Engine Pipeline
- **Throttled Web Worker Dispatch:** Stockfish UCI search stream is decoupled from React renders via a 120ms batched queue (`scheduleEmit`), eliminating UI layout thrashing.
- **Animation-Aware Debounce:** Engine execution begins 200ms after move completion, allowing smooth 60 FPS CSS transforms on piece movement.
- **DOM Isolation:** `ChessgroundBoard` is memoized with custom referential comparators to prevent board repaints during live eval scoring.

### 📱 5. Local-First & Cross-Platform (Web, PWA & Android)
- **IndexedDB via Dexie.js:** Complete offline functionality. Repertoires, personal review history, and game analytics never leave the user's device.
- **PWA & iOS Standalone:** Configured with web app manifests and iOS standalone metadata for seamless *Add to Home Screen* installation.
- **Capacitor Android:** Native APK/AAB builds with hardware-accelerated WebViews.

---

## 🛠️ Tech Stack & Dependencies

| Area | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 19, TypeScript 6.0, Vite 8.2 |
| **Styling & Themes** | Tailwind CSS v4, Lucide Icons, Custom ColorHunt Themes |
| **Chessboard & Logic** | Chessground 9.2, Chess.js 1.4 |
| **Chess Engine** | Stockfish 18 / 16 (UCI WebAssembly Worker), Lichess Cloud Eval |
| **Database / Storage** | Dexie.js 4.4 (IndexedDB Local-First) |
| **Mobile Runtime** | Capacitor 8.5 (Android APK/AAB) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v20+ recommended)
- npm / yarn / pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kemalsfs/apertura-chess.git
   cd apertura-chess
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📜 License & Attributions

- **Stockfish:** GNU General Public License v3 (GPLv3).
- **Chessground:** Licensed under GPLv3.
- **Chess.js:** Licensed under BSD-2-Clause.
- **Apertura Codebase:** Licensed under the [MIT License](LICENSE).

Developed with passion by **Kemal** ([@kemalsfs](https://github.com/kemalsfs)).
