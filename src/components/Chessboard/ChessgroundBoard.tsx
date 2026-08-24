import React, { useEffect, useRef, useMemo } from 'react';
import { Chessground } from 'chessground';
import type { Api } from 'chessground/api';
import type { Config } from 'chessground/config';
import type { Key } from 'chessground/types';
import { Chess } from 'chess.js';
import { getLegalDests } from '../../utils/chessHelpers';
import type { RepertoireColor, DrawShape } from '../../types/chess';

interface ChessgroundBoardProps {
  fen: string;
  orientation: RepertoireColor;
  chess: Chess;
  onMove: (from: string, to: string) => void;
  lastMove?: [string, string];
  shapes?: DrawShape[];
}

export const ChessgroundBoard: React.FC<ChessgroundBoardProps> = ({
  fen,
  orientation,
  chess,
  onMove,
  lastMove,
  shapes = [],
}) => {
  const boardRef = useRef<HTMLDivElement>(null);
  const groundRef = useRef<Api | null>(null);

  const turnColor = chess.turn() === 'w' ? 'white' : 'black';
  const dests = useMemo(() => getLegalDests(chess), [chess]);
  const isCheck = chess.inCheck();

  // Convert our DrawShape to Chessground shape format
  const autoShapes = useMemo(() => {
    return shapes.map(s => ({
      orig: s.orig as Key,
      dest: s.dest as Key | undefined,
      brush: s.brush,
    }));
  }, [shapes]);

  useEffect(() => {
    if (!boardRef.current) return;

    const config: Config = {
      fen,
      orientation,
      turnColor,
      check: isCheck,
      lastMove: lastMove ? [lastMove[0] as Key, lastMove[1] as Key] : undefined,
      movable: {
        free: false,
        color: turnColor,
        dests,
        showDests: true,
        events: {
          after: (orig, dest) => {
            onMove(orig, dest);
          },
        },
      },
      draggable: {
        enabled: true,
        showGhost: true,
      },
      selectable: {
        enabled: true,
      },
      highlight: {
        lastMove: true,
        check: true,
      },
      animation: {
        enabled: true,
        duration: 200,
      },
      drawable: {
        enabled: true,
        visible: true,
        defaultSnapToValidMove: true,
        autoShapes,
      },
    };

    if (!groundRef.current) {
      groundRef.current = Chessground(boardRef.current, config);
    } else {
      groundRef.current.set(config);
    }
  }, [fen, orientation, turnColor, isCheck, dests, lastMove, autoShapes, onMove]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (groundRef.current) {
        groundRef.current.destroy();
        groundRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto select-none rounded-xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-900">
      <div
        ref={boardRef}
        className="w-full h-full cg-wrap is2d"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};