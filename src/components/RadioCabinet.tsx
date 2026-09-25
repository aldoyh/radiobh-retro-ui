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
import { Power, Tv, Radio } from 'lucide-react';

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
  const tuningOffset = Math.abs(currentFrequency - activeStation.frequency);
  const isTunedIn = tuningOffset <= 0.2;

  const signalValue = isPoweredOn
    ? Math.max(10, Math.round(95 - tuningOffset * 50))
    : 0;

  const audioModValue = isPoweredOn && isPlaying
    ? Math.min(95, Math.max(25, 45 + Math.sin(Date.now() / 250) * 35))
    : 0;

  return (
    <div className="relative w-full max-w-5xl mx-auto pt-6 sm:pt-8 pb-10 px-2 sm:px-4 select-none">
      {/* 1. THE BELT: Heavy Carrying Handle with Bahrain Royal Red Stitching */}
      <div className="relative w-72 sm:w-96 mx-auto h-7 sm:h-9 z-20 flex items-center justify-center">
        {/* Left Chrome Mount & Bolt */}
        <div className="absolute left-0 bottom-0 w-6 h-6 rounded-t-md chrome-plate shadow-md flex items-center justify-center border border-white/40">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1e293b] shadow-inner" />
        </div>

        {/* Center Belt with Red Edge Stitching & Radio Bahrain Emboss */}
        <div className="relative w-full h-5 sm:h-6 mx-4 leather-belt rounded-md belt-stitch shadow-xl flex items-center justify-center">
          <span className="text-[9px] sm:text-[10px] font-mono font-bold text-slate-200 tracking-widest uppercase">
            RADIO BAHRAIN · BROADCAST EDITION
          </span>
        </div>

        {/* Right Chrome Mount & Bolt */}
        <div className="absolute right-0 bottom-0 w-6 h-6 rounded-t-md chrome-plate shadow-md flex items-center justify-center border border-white/40">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1e293b] shadow-inner" />
        </div>
      </div>

      {/* 2. THE OBSIDIAN / CARBON CHASSIS (Based on Radio Bahrain brand reference) */}
      <div className="relative w-full obsidian-chassis rounded-2xl p-3 sm:p-6 lg:p-7 shadow-2xl border-4 border-[#1a2130]">
        {/* Chrome & Crimson Corner Accents */}
        <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[#ce1126] rounded-tl-sm pointer-events-none" />
        <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[#cbd5e1] rounded-tr-sm pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[#cbd5e1] rounded-bl-sm pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[#ce1126] rounded-br-sm pointer-events-none" />

        {/* 3. INNER METALLIC BEZEL & FACEPLATE */}
        <div className="relative w-full metal-faceplate rounded-xl p-3 sm:p-5 border-2 border-[#242d40] shadow-inner flex flex-col gap-4 sm:gap-5">
          {/* Top Header Bar & Status Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#202738]">
            {/* Left: Master Power Switch & Pilot Lamp */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  soundEffects.playPowerToggle(!isPoweredOn);
                  onTogglePower();
                }}
                className={`relative px-3.5 py-1.5 rounded-md flex items-center gap-2 font-bold text-xs tracking-wider transition-all cursor-pointer shadow-md ${
                  isPoweredOn
                    ? 'bg-gradient-to-r from-[#ce1126] to-[#99001a] text-white shadow-[0_0_14px_rgba(206,17,38,0.6)] border border-[#ff477e]/50'
                    : 'bg-[#121622] text-slate-400 border border-[#232b3d] hover:text-white'
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
                      ? 'bg-[#ce1126] shadow-[0_0_12px_#ce1126] animate-pulse'
                      : 'bg-red-950 border border-red-900/60'
                  }`}
                />
                <span className="text-[9px] font-mono font-bold text-rose-400 uppercase">
                  POWER
                </span>
              </div>
            </div>

            {/* Center: Official Radio Bahrain Badge Plate */}
            <div className="hidden sm:flex items-center justify-center">
              <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-md bg-[#10141f] border border-[#232c3f] shadow-lg">
                <div className="w-5 h-5 rounded-full overflow-hidden shrink-0 border border-white/20 bg-[#8b0000] flex items-center justify-center">
                  <img
                    src="/branding/logo_round.png"
                    alt="Logo"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <Radio className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs font-bold text-white tracking-wide font-cairo leading-none">
                    إذاعة مملكة البحرين
                  </span>
                  <span className="text-[8.5px] font-mono tracking-widest text-[#ce1126] font-bold uppercase mt-0.5">
                    KINGDOM OF BAHRAIN RADIO
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Studio Audio Filters */}
            <div className="flex items-center gap-2">
              <button
                onClick={onToggleAudioWarmth}
                className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors border cursor-pointer ${
                  audioWarmthEnabled
                    ? 'bg-[#ce1126] text-white border-[#ff477e] font-bold shadow-[0_0_10px_rgba(206,17,38,0.4)]'
                    : 'bg-[#121622] text-slate-300 border-[#232c3e] hover:text-white'
                }`}
                title="تفعيل فلتر دفء الصوت التناظري الكلاسيكي"
              >
                {audioWarmthEnabled ? '📻 صوت إذاعي دافئ' : '🎧 استوديو نقي'}
              </button>

              <button
                onClick={onToggleScreenMode}
                className="px-2.5 py-1 rounded text-[11px] font-mono bg-[#121622] text-slate-300 border border-[#232c3e] hover:border-[#ce1126]/60 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                title="التبديل بين شاشة الفيديو ونمط شريط الراديو"
              >
                <Tv className="w-3 h-3 text-rose-400" />
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
          <div className="grid grid-cols-2 sm:grid-cols-3 items-center justify-between gap-3 p-2 bg-[#090c12] rounded-lg border border-[#1d2434]">
            <div className="flex justify-center">
              <VuMeter
                label="TUNING"
                subLabel="RECEPTION"
                value={signalValue}
                isPoweredOn={isPoweredOn}
              />
            </div>

            <div className="hidden sm:flex justify-center">
              <MagicEyeTube
                isPoweredOn={isPoweredOn}
                tuningOffset={tuningOffset}
                isLocked={isTunedIn}
              />
            </div>

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
            {/* Left: Volume Knob */}
            <div className="md:col-span-3 flex justify-center py-2">
              <VolumeKnob
                volume={volume}
                isMuted={isMuted}
                isPoweredOn={isPoweredOn}
                onVolumeChange={onVolumeChange}
                onToggleMute={onToggleMute}
              />
            </div>

            {/* Center: Acoustic Speaker Matrix */}
            <div className="md:col-span-6 h-28 sm:h-32 rounded-lg speaker-grille-cloth border-2 border-[#242d40] flex flex-col items-center justify-center p-3 relative overflow-hidden shadow-inner">
              <div className="relative z-10 px-4 py-1.5 rounded bg-[#0d1017]/92 border border-[#ce1126]/30 shadow-lg text-center">
                <div className="text-[11px] font-bold text-white tracking-wider">
                  مكبر صوت استوديو إذاعة البحرين الرقمي
                </div>
                <div className="text-[8.5px] font-mono font-bold text-[#ce1126] tracking-widest uppercase">
                  ACOUSTIC BROADCAST MATRIX · 96.5 FM
                </div>
              </div>

              {/* Sound waves subtle animated line */}
              {isPoweredOn && isPlaying && (
                <div className="absolute inset-0 flex items-center justify-around opacity-15 pointer-events-none">
                  <div className="w-1 h-12 bg-[#ce1126] animate-pulse" />
                  <div className="w-1 h-20 bg-white animate-pulse delay-75" />
                  <div className="w-1 h-16 bg-[#ce1126] animate-pulse delay-150" />
                  <div className="w-1 h-24 bg-white animate-pulse delay-100" />
                  <div className="w-1 h-14 bg-[#ce1126] animate-pulse delay-200" />
                </div>
              )}
            </div>

            {/* Right: Tuning Knob */}
            <div className="md:col-span-3 flex justify-center py-2">
              <TuningKnob
                currentFrequency={currentFrequency}
                isPoweredOn={isPoweredOn}
                onFrequencyChange={onFrequencyChange}
              />
            </div>
          </div>

          {/* 8. NOW PLAYING DECK / SCREEN (Audio Tape or CRT Monitor) */}
          <div className="border-t border-[#202738] pt-4">
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
              <>
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

                {/* Keep video player embedded in background for continuous audio */}
                <EpisodePlayer
                  episode={currentEpisode}
                  isPlaying={isPlaying}
                  isPoweredOn={isPoweredOn}
                  volume={volume}
                  isMuted={isMuted}
                  screenMode="audio-tape"
                  onToggleScreenMode={onToggleScreenMode}
                  onEnded={onNextEpisode}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
