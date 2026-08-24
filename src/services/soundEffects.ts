// Native Web Audio API Synthesizer (No external assets required)

class SoundService {
  private ctx: AudioContext | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Soft wooden piece click
  public playMove() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // Audio playback silently fails if blocked by browser policy
    }
  }

  // Pleasant ascending chime for correct recall
  public playCorrect() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      [523.25, 659.25].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);

        gain.gain.setValueAtTime(0, now + i * 0.08);
        gain.gain.linearRampToValueAtTime(0.2, now + i * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.25);
      });
    } catch {
      // Ignore
    }
  }

  // Soft low buzz for mistake
  public playMistake() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(90, ctx.currentTime + 0.2);

      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch {
      // Ignore
    }
  }

  // Celebratory major chord for line completion
  public playComplete() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.06);

        gain.gain.setValueAtTime(0, now + i * 0.06);
        gain.gain.linearRampToValueAtTime(0.18, now + i * 0.06 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.35);
      });
    } catch {
      // Ignore
    }
  }
}

export const soundEffects = new SoundService();