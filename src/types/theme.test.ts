import { describe, expect, it } from 'vitest';
import { THEMES } from './theme';

function luminance(hex: string): number {
  const channels = [1, 3, 5].map(index => {
    const value = Number.parseInt(hex.slice(index, index + 2), 16) / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrast(a: string, b: string): number {
  const [lighter, darker] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (lighter + 0.05) / (darker + 0.05);
}

describe('theme palette readability', () => {
  it.each(Object.values(THEMES))('$name keeps text and actions readable on its card', theme => {
    expect(contrast(theme.textPrimary, theme.bgCard)).toBeGreaterThanOrEqual(7);
    expect(contrast(theme.textSecondary, theme.bgCard)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(theme.accent, theme.bgCard)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(theme.accentText, theme.accent)).toBeGreaterThanOrEqual(4.5);
  });
});
