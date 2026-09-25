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
    <div className="relative w-full bg-[#0d1017] rounded-lg border border-[#202738] p-3 sm:p-4 shadow-inner overflow-hidden select-none">
      <div className="flex flex-col lg:flex-row items-center gap-4">
        {/* Left: Dual Spools Deck Visualizer */}
        <div className="relative w-48 sm:w-56 h-28 bg-[#07090e] rounded-lg border border-[#1b2232] p-2 flex items-center justify-between shadow-inner shrink-0 overflow-hidden">
          {/* Tape bridge track */}
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-[#171e2c] -translate-y-1/2 z-0" />

          {/* Left Spool */}
          <div className="relative z-10 flex flex-col items-center">
            <div
              className={`w-18 h-18 sm:w-20 sm:h-20 rounded-full border-4 border-[#242d40] bg-gradient-to-tr from-[#0b0e14] via-[#161d2a] to-[#07090e] flex items-center justify-center shadow-lg transition-transform ${
                isPlaying && isPoweredOn ? 'animate-spin' : ''
              }`}
              style={{ animationDuration: '3.5s' }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-full h-1 bg-[#283449]" />
                <div className="absolute h-full w-1 bg-[#283449]" />
                <div className="w-8 h-8 rounded-full bg-[#0a0d14] border border-[#cbd5e1]/40 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#ce1126] shadow-[0_0_8px_#ce1126]" />
                </div>
              </div>
            </div>
            <span className="text-[7.5px] font-mono text-slate-400 mt-1 uppercase">REEL A</span>
          </div>

          {/* Center Cassette window */}
          <div className="relative z-10 flex flex-col items-center px-1">
            <Disc3 className={`w-5 h-5 text-[#ce1126] ${isPlaying && isPoweredOn ? 'animate-spin' : ''}`} />
            <div className="w-8 h-1.5 bg-[#121622] rounded mt-1.5 border border-[#20293b] overflow-hidden">
              <div
                className={`h-full bg-[#ce1126] transition-all ${
                  isPlaying && isPoweredOn ? 'w-3/4 animate-pulse' : 'w-1/3'
                }`}
              />
            </div>
          </div>

          {/* Right Spool */}
          <div className="relative z-10 flex flex-col items-center">
            <div
              className={`w-18 h-18 sm:w-20 sm:h-20 rounded-full border-4 border-[#242d40] bg-gradient-to-tr from-[#0b0e14] via-[#161d2a] to-[#07090e] flex items-center justify-center shadow-lg transition-transform ${
                isPlaying && isPoweredOn ? 'animate-spin' : ''
              }`}
              style={{ animationDuration: '3.5s' }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-full h-1 bg-[#283449]" />
                <div className="absolute h-full w-1 bg-[#283449]" />
                <div className="w-8 h-8 rounded-full bg-[#0a0d14] border border-[#cbd5e1]/40 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#ce1126] shadow-[0_0_8px_#ce1126]" />
                </div>
              </div>
            </div>
            <span className="text-[7.5px] font-mono text-slate-400 mt-1 uppercase">REEL B</span>
          </div>
        </div>

        {/* Right: Broadcast & Episode Metadata */}
        <div className="flex-1 w-full min-w-0 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-[#182030] text-rose-200 border border-[#ce1126]/30">
                  <Radio className="w-3 h-3 text-[#ce1126]" />
                  {episode ? episode.showTitle : 'إذاعة مملكة البحرين'}
                </span>

                {station && (
                  <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                    {station.frequencyDisplay} · {station.shortName}
                  </span>
                )}
              </div>

              {/* Broadcast Live Status */}
              <div className="flex items-center gap-1.5">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isPlaying && isPoweredOn
                      ? 'bg-[#ce1126] shadow-[0_0_8px_#ce1126] animate-pulse'
                      : 'bg-red-950'
                  }`}
                />
                <span className="text-[10px] font-mono font-bold text-slate-300">
                  {isPlaying && isPoweredOn ? 'جاري البث · BROADCASTING' : 'متوقف · STANDBY'}
                </span>
              </div>
            </div>

            {/* Episode Title */}
            <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">
              {episode ? episode.title : 'اختر حلقة أو اضغط على بث عشوائي للبدء'}
            </h3>

            {/* AI Thematic Nexus Connection Link Note */}
            {episode && episode.thematicConnection && (
              <p className="text-xs text-rose-200/90 mt-1 line-clamp-1">
                <span className="text-[#ce1126] font-bold">الرابط الموضوعي: </span>
                {episode.thematicConnection}
              </p>
            )}
          </div>

          {/* Transport Controls Bar */}
          <div className="mt-3 pt-3 border-t border-[#1d2536] flex flex-wrap items-center justify-between gap-2">
            {/* Play/Pause, Next/Prev, Casual Pick */}
            <div className="flex items-center gap-2">
              <button
                onClick={onPrevEpisode}
                disabled={!isPoweredOn}
                className="p-1.5 rounded-md bg-[#141a27] border border-[#232d3f] text-slate-300 hover:text-white hover:border-[#ce1126] disabled:opacity-30 cursor-pointer active:scale-95 transition-all"
                title="الحلقة السابقة"
              >
                <SkipForward className="w-4 h-4" />
              </button>

              <button
                onClick={onTogglePlay}
                disabled={!isPoweredOn}
                className={`px-4 py-1.5 rounded-md flex items-center gap-2 font-bold text-xs text-white shadow-md transition-all cursor-pointer active:scale-95 ${
                  isPlaying && isPoweredOn
                    ? 'bg-gradient-to-r from-[#ce1126] to-[#99001a] border border-[#ff477e]/50 shadow-[0_0_12px_rgba(206,17,38,0.5)]'
                    : 'bg-[#182030] border border-[#26334a] hover:border-[#ce1126]'
                } disabled:opacity-30`}
              >
                {isPlaying && isPoweredOn ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>إيقاف مؤقت</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>تشغيل البث</span>
                  </>
                )}
              </button>

              <button
                onClick={onNextEpisode}
                disabled={!isPoweredOn}
                className="p-1.5 rounded-md bg-[#141a27] border border-[#232d3f] text-slate-300 hover:text-white hover:border-[#ce1126] disabled:opacity-30 cursor-pointer active:scale-95 transition-all"
                title="الحلقة التالية"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                onClick={onCasualRandomPick}
                disabled={!isPoweredOn}
                className="p-1.5 rounded-md bg-[#141a27] border border-[#232d3f] text-rose-400 hover:text-white hover:border-[#ce1126] hover:bg-[#ce1126]/20 disabled:opacity-30 cursor-pointer active:scale-95 transition-all flex items-center gap-1 text-xs"
                title="التقاط بث عشوائي"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">عشوائي</span>
              </button>
            </div>

            {/* Playback Speed Selectors */}
            <div className="flex items-center gap-1 bg-[#10141f] p-1 rounded border border-[#202738]">
              {speeds.map((s) => (
                <button
                  key={s}
                  onClick={() => onChangeSpeed(s)}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${
                    playbackSpeed === s
                      ? 'bg-[#ce1126] text-white font-bold'
                      : 'text-slate-400 hover:text-white'
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
