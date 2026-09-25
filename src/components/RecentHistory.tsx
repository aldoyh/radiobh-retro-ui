import React from 'react';
import { EpisodeItem, RadioStation } from '../types/radio';
import { History, Play, Trash2, Radio } from 'lucide-react';
import { soundEffects } from '../services/soundEffects';

interface RecentHistoryProps {
  history: EpisodeItem[];
  currentEpisodeId: string | null;
  isPlaying: boolean;
  stations: RadioStation[];
  onPlayEpisode: (episode: EpisodeItem) => void;
  onClearHistory: () => void;
}

export const RecentHistory: React.FC<RecentHistoryProps> = ({
  history,
  currentEpisodeId,
  isPlaying,
  stations,
  onPlayEpisode,
  onClearHistory,
}) => {
  if (!history || history.length === 0) return null;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 border-b border-[#1f2638]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-md bg-[#ce1126]/10 text-rose-400 border border-[#ce1126]/20">
            <History className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <span>سجل الاستماع الأخير · RECENT HISTORY</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#ce1126]/15 text-rose-300 border border-[#ce1126]/30">
                {history.length} / 5 حلقات
              </span>
            </h4>
            <p className="text-[11px] text-slate-400 mt-0.5">
              الحلقات الـ 5 الأخيرة التي استمعت إليها للعودة السريعة لمتابعتها
            </p>
          </div>
        </div>

        {history.length > 0 && (
          <button
            onClick={() => {
              soundEffects.playMechanicalKey();
              onClearHistory();
            }}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-rose-400 transition-colors self-start sm:self-auto cursor-pointer"
            title="مسح سجل الاستماع"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>مسح السجل</span>
          </button>
        )}
      </div>

      {/* Cards Row: Up to 5 episodes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {history.map((ep, idx) => {
          const isCurrent = ep.id === currentEpisodeId;
          const matchedStation =
            stations.find((st) => st.shows.includes(ep.showTitle)) || stations[0];

          return (
            <div
              key={`${ep.id}-${idx}`}
              onClick={() => {
                soundEffects.playMechanicalKey();
                soundEffects.pulseTuningStatic(220, 0.16);
                onPlayEpisode(ep);
              }}
              className={`group relative p-2.5 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                isCurrent
                  ? 'bg-[#182030] border-[#ce1126] shadow-[0_0_12px_rgba(206,17,38,0.3)] ring-1 ring-[#ce1126]/50'
                  : 'bg-[#121622] border-[#232b3d] hover:border-[#ce1126]/60 hover:bg-[#161d2c]'
              }`}
            >
              <div>
                {/* Thumbnail & Badges */}
                <div className="relative w-full aspect-video rounded overflow-hidden bg-black/60 mb-2">
                  <img
                    src={ep.thumbnail}
                    alt={ep.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />

                  {/* Play overlay button */}
                  <div
                    className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity ${
                      isCurrent ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#ce1126] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Frequency badge */}
                  <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/80 text-[9px] font-mono font-bold text-rose-300 border border-[#ce1126]/30">
                    {matchedStation.frequencyDisplay}
                  </div>

                  {/* Now Playing indicator */}
                  {isCurrent && (
                    <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-[#ce1126] text-white text-[8.5px] font-mono font-bold flex items-center gap-1 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span>قيد البث</span>
                    </div>
                  )}
                </div>

                {/* Show Title */}
                <div className="text-[10.5px] font-bold text-rose-400 truncate mb-0.5">
                  {ep.showTitle}
                </div>

                {/* Episode Title */}
                <h5 className="text-xs font-semibold text-white group-hover:text-rose-200 transition-colors line-clamp-2 leading-tight">
                  {ep.title}
                </h5>
              </div>

              {/* Station footer */}
              <div className="mt-2.5 pt-2 border-t border-[#1d2536] flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span className="truncate max-w-[120px]">{matchedStation.name}</span>
                <span className="text-rose-400 font-bold group-hover:underline">موالفة</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
