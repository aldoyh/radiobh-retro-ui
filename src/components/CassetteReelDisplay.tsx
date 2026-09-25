import React from 'react';
import { EpisodeItem, RadioStation } from '../types/radio';
import { Play, Pause, SkipForward, SkipBack, Shuffle, Disc3, Radio } from 'lucide-react';

interface CassetteReelDisplayProps {
  episode: EpisodeItem | null;
  station: RadioStation | null;
  isPlaying: boolean;
  isPoweredOn: boolean;
  playbackSpeed: number;
  onTogglePlay: () => void;
  onNextEpisode: () => void;
  onPrevEpisode: () => void;
  onCasualRandomPick: () => void;
  onChangeSpeed: (speed: number) => void;
}

export const CassetteReelDisplay: React.FC<CassetteReelDisplayProps> = ({
  episode,
  station,
  isPlaying,
  isPoweredOn,
  playbackSpeed,
  onTogglePlay,
  onNextEpisode,
  onPrevEpisode,
  onCasualRandomPick,
  onChangeSpeed,
}) => {
  const speeds = [0.75, 1.0, 1.25, 1.5, 2.0];

  return (
    <div className="relative w-full bg-[#17120e] rounded-md border border-[#3e3125] p-3 sm:p-4 shadow-inner overflow-hidden select-none">
      {/* Reel-to-Reel Tape Deck Animation & Episode Info */}
      <div className="flex flex-col lg:flex-row items-center gap-4">
        {/* Left: Dual Spinning Spools / Cassette Reel Visualizer */}
        <div className="relative w-48 sm:w-56 h-28 bg-[#100c09] rounded-lg border border-[#35281e] p-2 flex items-center justify-between shadow-inner shrink-0 overflow-hidden">
          {/* Tape bridge track */}
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-[#2b1f17] -translate-y-1/2 z-0" />

          {/* Left Spool */}
          <div className="relative z-10 flex flex-col items-center">
            <div
              className={`w-18 h-18 sm:w-20 sm:h-20 rounded-full border-4 border-[#3a2c20] bg-gradient-to-tr from-[#1f1712] via-[#2d221a] to-[#120d09] flex items-center justify-center shadow-lg transition-transform ${
                isPlaying && isPoweredOn ? 'animate-spin' : ''
              }`}
              style={{ animationDuration: '3.5s' }}
            >
              {/* Spool spokes */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-full h-1 bg-[#473628]" />
                <div className="absolute h-full w-1 bg-[#473628]" />
                <div className="w-8 h-8 rounded-full bg-[#18110c] border border-amber-900/60 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_6px_#f59e0b]" />
                </div>
              </div>
            </div>
            <span className="text-[7.5px] font-mono text-amber-500/50 mt-1 uppercase">REEL A</span>
          </div>

          {/* Center Cassette window with tape level indicator */}
          <div className="relative z-10 flex flex-col items-center px-1">
            <Disc3 className={`w-5 h-5 text-amber-500/60 ${isPlaying && isPoweredOn ? 'animate-spin' : ''}`} />
            <div className="w-8 h-1.5 bg-[#201711] rounded mt-1.5 border border-[#3a2c20] overflow-hidden">
              <div
                className={`h-full bg-amber-500 transition-all ${
                  isPlaying && isPoweredOn ? 'w-3/4 animate-pulse' : 'w-1/3'
                }`}
              />
            </div>
          </div>

          {/* Right Spool */}
          <div className="relative z-10 flex flex-col items-center">
            <div
              className={`w-18 h-18 sm:w-20 sm:h-20 rounded-full border-4 border-[#3a2c20] bg-gradient-to-tr from-[#1f1712] via-[#2d221a] to-[#120d09] flex items-center justify-center shadow-lg transition-transform ${
                isPlaying && isPoweredOn ? 'animate-spin' : ''
              }`}
              style={{ animationDuration: '3.5s' }}
            >
              {/* Spool spokes */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-full h-1 bg-[#473628]" />
                <div className="absolute h-full w-1 bg-[#473628]" />
                <div className="w-8 h-8 rounded-full bg-[#18110c] border border-amber-900/60 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_6px_#f59e0b]" />
                </div>
              </div>
            </div>
            <span className="text-[7.5px] font-mono text-amber-500/50 mt-1 uppercase">REEL B</span>
          </div>
        </div>

        {/* Right: Broadcast & Episode Metadata */}
        <div className="flex-1 w-full min-w-0 flex flex-col justify-between">
          <div>
            {/* Show badge & On-Air indicator */}
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-amber-950/80 text-amber-300 border border-amber-800/60">
                  <Radio className="w-3 h-3" />
                  {episode ? episode.showTitle : 'إذاعة مملكة البحرين'}
                </span>

                {station && (
                  <span className="text-[10px] font-mono text-amber-400/80">
                    {station.frequencyDisplay}
                  </span>
                )}
              </div>

              {/* Broadcast status */}
              <div className="flex items-center gap-1.5 font-mono text-[9.5px]">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isPoweredOn && isPlaying
                      ? 'bg-red-500 shadow-[0_0_8px_#ef4444] animate-pulse'
                      : 'bg-zinc-700'
                  }`}
                />
                <span className="text-amber-200/80 font-bold uppercase tracking-wider">
                  {isPoweredOn ? (isPlaying ? 'بث مباشر · ON AIR' : 'متوقف · PAUSED') : 'OFF'}
                </span>
              </div>
            </div>

            {/* Episode Title */}
            <h3 className="text-sm sm:text-base font-bold text-amber-100 leading-snug line-clamp-2">
              {episode ? episode.title : 'اختر محطة أو اضغط "بث عشوائي" للاستماع إلى حلقات إذاعة البحرين'}
            </h3>

            {/* Thematic AI Connection Kicker */}
            {station && episode && (
              <p className="mt-1 text-xs text-amber-300/80 line-clamp-2 leading-relaxed">
                <span className="text-amber-400 font-semibold">رابط الموضوع: </span>
                {station.thematicExplanation}
              </p>
            )}
          </div>

          {/* Player Mini-Controls */}
          <div className="mt-3 pt-2.5 border-t border-[#36271c] flex flex-wrap items-center justify-between gap-2">
            {/* Play / Next / Prev controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={onPrevEpisode}
                disabled={!isPoweredOn}
                className="w-8 h-8 rounded bg-[#251b14] border border-[#423123] hover:border-amber-500 text-amber-200 flex items-center justify-center transition-all active:scale-95 disabled:opacity-40 cursor-pointer"
                title="الحلقة السابقة في هذه المحطة"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                onClick={onTogglePlay}
                disabled={!isPoweredOn}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all active:scale-95 disabled:opacity-40 cursor-pointer shadow-md ${
                  isPlaying
                    ? 'bg-amber-500 text-zinc-950 hover:bg-amber-400'
                    : 'bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 hover:from-amber-400 hover:to-amber-500'
                }`}
                title={isPlaying ? 'إيقاف مؤقت' : 'تشغيل'}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>

              <button
                onClick={onNextEpisode}
                disabled={!isPoweredOn}
                className="w-8 h-8 rounded bg-[#251b14] border border-[#423123] hover:border-amber-500 text-amber-200 flex items-center justify-center transition-all active:scale-95 disabled:opacity-40 cursor-pointer"
                title="الحلقة التالية في هذه المحطة"
              >
                <SkipForward className="w-4 h-4" />
              </button>

              <button
                onClick={onCasualRandomPick}
                disabled={!isPoweredOn}
                className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-amber-200 bg-[#251b14] border border-[#423123] hover:border-amber-400 rounded transition-all active:scale-95 disabled:opacity-40 cursor-pointer"
                title="التقاط حلقة عشوائية من هذه المحطة"
              >
                <Shuffle className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">حلقة عفوية</span>
              </button>
            </div>

            {/* Playback speed toggle */}
            <div className="flex items-center gap-1 bg-[#100c09] p-0.5 rounded border border-[#2e2118]">
              {speeds.map((s) => (
                <button
                  key={s}
                  onClick={() => onChangeSpeed(s)}
                  className={`px-1.5 py-0.5 text-[10px] font-mono rounded transition-colors cursor-pointer ${
                    playbackSpeed === s
                      ? 'bg-amber-500 text-zinc-950 font-bold'
                      : 'text-amber-300/60 hover:text-amber-200'
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
