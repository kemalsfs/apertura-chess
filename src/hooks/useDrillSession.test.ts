import { Chess } from 'chess.js';
import { describe, expect, it } from 'vitest';
import { getDrillMoveAttempt } from './useDrillSession';

describe('drill move retries', () => {
  it('checks a second answer from the same visible position after a legal wrong answer', () => {
    const position = new Chess();
    position.move('e4');
    const fen = position.fen();

    expect(getDrillMoveAttempt(fen, 'c7', 'c5')?.san).toBe('c5');
    expect(getDrillMoveAttempt(fen, 'e7', 'e5')?.san).toBe('e5');
    expect(getDrillMoveAttempt(fen, 'e2', 'e4')).toBeNull();
    expect(position.fen()).toBe(fen);
  });
});
