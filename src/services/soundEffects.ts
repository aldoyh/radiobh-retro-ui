/**
 * Procedural Web Audio API Sound Effects for Vintage Radio
 * Zero external audio dependencies - generates authentic analog static,
 * mechanical switch clicks, bakelite key thumps, and dial ratchet ticks.
 */

class VintageSoundEngine {
  private ctx: AudioContext | null = null;
  private staticGainNode: GainNode | null = null;
  private staticSource: AudioBufferSourceNode | null = null;
  private isMuted: boolean = false;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (this.staticGainNode && this.ctx) {
      if (muted) {
        this.staticGainNode.gain.setValueAtTime(0, this.ctx.currentTime);
      }
    }
  }

  /**
   * Heavy mechanical toggle switch click (Power switch)
   */
  public playPowerToggle(isOn: boolean) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(isOn ? 120 : 90, t);
    osc.frequency.exponentialRampToValueAtTime(30, t + 0.08);

    gain.gain.setValueAtTime(0.4, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.09);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.09);

    // Add high metallic click
    const clickOsc = this.ctx.createOscillator();
    const clickGain = this.ctx.createGain();
    clickOsc.type = 'square';
    clickOsc.frequency.setValueAtTime(1200, t);
    clickOsc.frequency.exponentialRampToValueAtTime(400, t + 0.03);
    clickGain.gain.setValueAtTime(0.15, t);
    clickGain.gain.exponentialRampToValueAtTime(0.001, t + 0.03);

    clickOsc.connect(clickGain);
    clickGain.connect(this.ctx.destination);
    clickOsc.start(t);
    clickOsc.stop(t + 0.03);
  }

  /**
   * Solid mechanical push-button click for preset keys
   */
  public playMechanicalKey() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(260, t);
    osc.frequency.exponentialRampToValueAtTime(60, t + 0.05);

    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.06);
  }

  /**
   * Rotary dial ratchet click
   */
  public playDialTick() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'highpass' as unknown as OscillatorType;
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800 + Math.random() * 200, t);

    gain.gain.setValueAtTime(0.06, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.015);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.015);
  }

  /**
   * Analog frequency tuning static hiss (modulated by tuning offset)
   */
  public pulseTuningStatic(durationMs: number = 240, strength: number = 0.18) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const bufferSize = Math.floor(this.ctx.sampleRate * (durationMs / 1000));
    if (bufferSize <= 0) return;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    let lastOut = 0.0;
    // Generate pinkish/brown radio noise
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      lastOut = (lastOut + 0.02 * white) / 1.02;
      data[i] = lastOut * 3.5;
    }

    const noiseSource = this.ctx.createBufferSource();
    noiseSource.buffer = buffer;

    // Filter to sound like AM/FM RF tuner noise
    const bandpass = this.ctx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.value = 1800 + Math.random() * 800;
    bandpass.Q.value = 1.2;

    const gain = this.ctx.createGain();
    const t = this.ctx.currentTime;
    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(strength, t + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, t + durationMs / 1000);

    noiseSource.connect(bandpass);
    bandpass.connect(gain);
    gain.connect(this.ctx.destination);

    noiseSource.start(t);
    noiseSource.stop(t + durationMs / 1000);
  }
}

export const soundEffects = new VintageSoundEngine();
