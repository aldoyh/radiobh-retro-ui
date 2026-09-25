import React from 'react';
import { RadioStation, EpisodeItem, ScreenMode } from '../types/radio';
import { FrequencyDial } from './FrequencyDial';
import { MechanicalKeys } from './MechanicalKeys';
import { TuningKnob } from './TuningKnob';
import { VolumeKnob } from './VolumeKnob';
import { VuMeter } from './VuMeter';
import { MagicEyeTube } from './MagicEyeTube';
import { CassetteReelDisplay } from './CassetteReelDisplay';
import { EpisodePlayer } from './EpisodePlayer';
import { soundEffects } from '../services/soundEffects';
import { Power, Radio as RadioIcon, Sparkles, Volume2, VolumeX, Tv } from 'lucide-react';

interface RadioCabinetProps {
  stations: RadioStation[];
  activeStation: RadioStation;
  currentFrequency: number;
  currentEpisode: EpisodeItem | null;
  isPoweredOn: boolean;
  isPlaying: boolean;
  volume: number;
  isMuted: boolean;
  screenMode: ScreenMode;
  audioWarmthEnabled: boolean;
  playbackSpeed: number;
  onTogglePower: () => void;
  onFrequencyChange: (freq: number, triggerSound?: boolean) => void;
  onSelectStation: (station: RadioStation) => void;
  onCasualRandomPick: () => void;
  onTogglePlay: () => void;
  onNextEpisode: () => void;
  onPrevEpisode: () => void;
  onVolumeChange: (vol: number) => void;
  onToggleMute: () => void;
  onToggleScreenMode: () => void;
  onToggleAudioWarmth: () => void;
  onChangeSpeed: (speed: number) => void;
  onSelectEpisode: (ep: EpisodeItem) => void;
}

export const RadioCabinet: React.FC<RadioCabinetProps> = ({
  stations,
  activeStation,
  currentFrequency,
  currentEpisode,
  isPoweredOn,
  isPlaying,
  volume,
  isMuted,
  screenMode,
  audioWarmthEnabled,
  playbackSpeed,
  onTogglePower,
  onFrequencyChange,
  onSelectStation,
  onCasualRandomPick,
  onTogglePlay,
  onNextEpisode,
  onPrevEpisode,
  onVolumeChange,
  onToggleMute,
  onToggleScreenMode,
  onToggleAudioWarmth,
  onChangeSpeed,
}) => {
  // Compute tuning offset from the station's exact frequency
  const tuningOffset = Math.abs(currentFrequency - activeStation.frequency);
  const isTunedIn = tuningOffset <= 0.2;

  // Signal VU value: 90% when perfectly tuned, drops off when detuned
  const signalValue = isPoweredOn
    ? Math.max(10, Math.round(95 - tuningOffset * 50))
    : 0;

  // Audio modulation VU value: oscillates realistically when playing
  const audioModValue = isPoweredOn && isPlaying
    ? Math.min(95, Math.max(25, 45 + Math.sin(Date.now() / 250) * 35))
    : 0;

  return (
    <div className="relative w-full max-w-5xl mx-auto pt-6 sm:pt-8 pb-10 px-2 sm:px-4 select-none">
      {/* 1. THE BELT: Classic Stitched Leather Carrying Handle on Top */}
      <div className="relative w-72 sm:w-96 mx-auto h-7 sm:h-9 z-20 flex items-center justify-center">
        {/* Left belt brass bracket and rivet */}
        <div className="absolute left-0 bottom-0 w-6 h-6 rounded-t-sm bg-gradient-to-t from-[#8c631e] via-[#e4be72] to-[#b88a38] border border-amber-300/40 shadow-md flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#302213] shadow-inner" />
        </div>

        {/* Center Leather Belt Arch */}
        <div className="relative w-full h-5 sm:h-6 mx-4 leather-belt rounded-md belt-stitch shadow-xl flex items-center justify-center">
          {/* Subtle gold brand embossing on leather */}
          <span className="text-[9px] sm:text-[10px] font-serif font-bold text-amber-300/70 tracking-widest uppercase">
            RADIO BAHRAIN · MODEL 1974
          </span>
        </div>

        {/* Right belt brass bracket and rivet */}
        <div className="absolute right-0 bottom-0 w-6 h-6 rounded-t-sm bg-gradient-to-t from-[#8c631e] via-[#e4be72] to-[#b88a38] border border-amber-300/40 shadow-md flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#302213] shadow-inner" />
        </div>
      </div>

      {/* 2. THE WALNUT WOODEN CHASSIS / CABINET */}
      <div className="relative w-full wood-grain-chassis rounded-2xl p-3 sm:p-6 lg:p-7 shadow-2xl border-4 border-[#3a1d0d]">
        {/* Brass corner brackets on the wooden cabinet */}
        <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-amber-400/60 rounded-tl-sm pointer-events-none" />
        <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-amber-400/60 rounded-tr-sm pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-amber-400/60 rounded-bl-sm pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-amber-400/60 rounded-br-sm pointer-events-none" />

        {/* 3. INNER METALLIC BEZEL & FACEPLATE */}
        <div className="relative w-full metal-faceplate rounded-xl p-3 sm:p-5 border-2 border-[#4a392a] shadow-inner flex flex-col gap-4 sm:gap-5">
          {/* Top Brass Header Bar & Toggle Switches */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#3d2e20]">
            {/* Left: Master Power Switch & Pilot Lamp */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  soundEffects.playPowerToggle(!isPoweredOn);
                  onTogglePower();
                }}
                className={`relative px-3.5 py-1.5 rounded flex items-center gap-2 font-bold text-xs tracking-wider transition-all cursor-pointer shadow-md ${
                  isPoweredOn
                    ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-[0_0_12px_rgba(239,68,68,0.5)]'
                    : 'bg-[#281e18] text-amber-200/60 border border-[#48372a] hover:text-amber-100'
                }`}
                title="مفتاح التشغيل الرئيسي للراديو"
              >
                <Power className="w-3.5 h-3.5" />
                <span>{isPoweredOn ? 'مفتوح · ON' : 'مغلق · OFF'}</span>
              </button>

              {/* Glowing Pilot Jewel Lamp */}
              <div className="flex items-center gap-1.5">
                <div
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                    isPoweredOn
                      ? 'bg-red-500 shadow-[0_0_10px_#ef4444] animate-pulse'
                      : 'bg-red-950 border border-red-900/60'
                  }`}
                />
                <span className="text-[9px] font-mono font-bold text-amber-300/60 uppercase">
                  POWER
                </span>
              </div>
            </div>

            {/* Center: Radio Bahrain Official Brass Emblem Badge */}
            <div className="hidden sm:flex items-center justify-center">
              <div className="brass-plate px-4 py-1 rounded shadow-md border border-amber-200/50 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-800" />
                <span className="text-xs font-bold text-zinc-950 tracking-wider font-vintage">
                  إذاعة مملكة البحرين · 1940
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-red-800" />
              </div>
            </div>

            {/* Right: Sound Warmth Filter & Screen Mode Switch */}
            <div className="flex items-center gap-2">
              {/* Vintage AM Warmth acoustic filter */}
              <button
                onClick={onToggleAudioWarmth}
                className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors border cursor-pointer ${
                  audioWarmthEnabled
                    ? 'bg-amber-600 text-zinc-950 border-amber-400 font-bold'
                    : 'bg-[#221a14] text-amber-200/70 border-[#382b20] hover:text-amber-100'
                }`}
                title="تفعيل فلتر دفء الصوت التناظري الكلاسيكي"
              >
                {audioWarmthEnabled ? '📻 صوت دافئ (WARM)' : '🎧 استوديو عالي النقاوة'}
              </button>

              {/* CRT Video Screen vs Tape Mode */}
              <button
                onClick={onToggleScreenMode}
                className="px-2.5 py-1 rounded text-[11px] font-mono bg-[#221a14] text-amber-200/80 border border-[#382b20] hover:border-amber-500 transition-colors flex items-center gap-1 cursor-pointer"
                title="التبديل بين شاشة الفيديو ونمط شريط الراديو"
              >
                <Tv className="w-3 h-3 text-amber-400" />
                <span>{screenMode === 'crt-video' ? 'شاشة التلفاز' : 'بكرة الراديو'}</span>
              </button>
            </div>
          </div>

          {/* 4. THE ANALOG FREQUENCY DIAL */}
          <FrequencyDial
            stations={stations}
            currentFrequency={currentFrequency}
            activeStationId={activeStation.id}
            isPoweredOn={isPoweredOn}
            onFrequencyChange={onFrequencyChange}
            onSelectStation={onSelectStation}
          />

          {/* 5. GAUGES & METERS ROW */}
          <div className="grid grid-cols-2 sm:grid-cols-3 items-center justify-between gap-3 p-2 bg-[#17110d] rounded-lg border border-[#382a1e]">
            {/* Left VU: Signal reception */}
            <div className="flex justify-center">
              <VuMeter
                label="TUNING"
                subLabel="RECEPTION"
                value={signalValue}
                isPoweredOn={isPoweredOn}
              />
            </div>

            {/* Center: EM84 Magic Eye Tube */}
            <div className="hidden sm:flex justify-center">
              <MagicEyeTube
                isPoweredOn={isPoweredOn}
                tuningOffset={tuningOffset}
                isLocked={isTunedIn}
              />
            </div>

            {/* Right VU: Audio modulation */}
            <div className="flex justify-center">
              <VuMeter
                label="AUDIO"
                subLabel="MODULATION"
                value={audioModValue}
                isPoweredOn={isPoweredOn}
              />
            </div>
          </div>

          {/* 6. MECHANICAL PRESET KEYS & CASUAL RANDOM BUTTON */}
          <MechanicalKeys
            stations={stations}
            activeStationId={activeStation.id}
            isPoweredOn={isPoweredOn}
            onSelectStation={onSelectStation}
            onCasualRandomPick={onCasualRandomPick}
          />

          {/* 7. CONTROLS & SPEAKER SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Left: Volume Rotary Knob */}
            <div className="md:col-span-3 flex justify-center py-2">
              <VolumeKnob
                volume={volume}
                isMuted={isMuted}
                isPoweredOn={isPoweredOn}
                onVolumeChange={onVolumeChange}
                onToggleMute={onToggleMute}
              />
            </div>

            {/* Center: Woven Acoustic Speaker Grille with Badge */}
            <div className="md:col-span-6 h-28 sm:h-32 rounded-lg speaker-grille-cloth border-2 border-[#38291c] flex flex-col items-center justify-center p-3 relative overflow-hidden shadow-inner">
              {/* Speaker brass plate */}
              <div className="relative z-10 px-4 py-1.5 rounded brass-plate border border-amber-200/40 shadow-lg text-center">
                <div className="text-[11px] font-bold text-zinc-950 tracking-wider">
                  مكبر صوت ستيريو كلاسيكي عالي الدقة
                </div>
                <div className="text-[8.5px] font-mono font-bold text-zinc-800 tracking-widest uppercase">
                  ACOUSTIC SUSPENSION CHAMBER · 10 WATT RMS
                </div>
              </div>

              {/* Subdued speaker cone rings */}
              <div className="absolute w-36 h-36 rounded-full border border-white/[0.03] pointer-events-none" />
              <div className="absolute w-24 h-24 rounded-full border border-white/[0.04] pointer-events-none" />
            </div>

            {/* Right: Tuning Rotary Knob */}
            <div className="md:col-span-3 flex justify-center py-2">
              <TuningKnob
                currentFrequency={currentFrequency}
                isPoweredOn={isPoweredOn}
                onFrequencyChange={onFrequencyChange}
              />
            </div>
          </div>

          {/* 8. BROADCAST DECK / MONITOR: Tape reel or CRT video */}
          <div className="w-full">
            {screenMode === 'crt-video' ? (
              <EpisodePlayer
                episode={currentEpisode}
                isPlaying={isPlaying}
                isPoweredOn={isPoweredOn}
                volume={volume}
                isMuted={isMuted}
                screenMode={screenMode}
                onToggleScreenMode={onToggleScreenMode}
                onEnded={onNextEpisode}
              />
            ) : (
              <CassetteReelDisplay
                episode={currentEpisode}
                station={activeStation}
                isPlaying={isPlaying}
                isPoweredOn={isPoweredOn}
                playbackSpeed={playbackSpeed}
                onTogglePlay={onTogglePlay}
                onNextEpisode={onNextEpisode}
                onPrevEpisode={onPrevEpisode}
                onCasualRandomPick={onCasualRandomPick}
                onChangeSpeed={onChangeSpeed}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
