import React from 'react';
import { EpisodeItem, RadioStation } from '../types/radio';
import { History, Play, Radio, RotateCcw, Clock, Trash2 } from 'lucide-react';
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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 border-b border-[#2d221a]/80">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <History className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-amber-100 flex items-center gap-2">
              <span>سجل الاستماع الأخير · RECENT HISTORY</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800/40">
                {history.length} / 5 حلقات
              </span>
            </h4>
            <p className="text-[11px] text-amber-300/60 mt-0.5">
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
            className="flex items-center gap-1.5 text-xs text-amber-400/60 hover:text-red-400 transition-colors self-start sm:self-auto cursor-pointer"
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
                  ? 'bg-[#2a1e16] border-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.25)] ring-1 ring-amber-500/50'
                  : 'bg-[#18120e] border-[#36271c] hover:border-amber-700/80 hover:bg-[#201812]'
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
                    <div className="w-8 h-8 rounded-full bg-amber-500 text-zinc-950 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Playing pill */}
                  {isCurrent ? (
                    <span className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded text-[8.5px] font-bold bg-amber-400 text-zinc-950 font-mono flex items-center gap-1 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                      {isPlaying ? 'يُبث الآن' : 'محدد'}
                    </span>
                  ) : (
                    <span className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded text-[8.5px] font-bold bg-black/75 text-amber-200/90 font-mono border border-white/10">
                      #{idx + 1}
                    </span>
                  )}

                  {/* Frequency badge */}
                  <span className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-amber-950/90 text-amber-300 border border-amber-800/60">
                    {matchedStation.frequencyDisplay}
                  </span>
                </div>

                {/* Show Title */}
                <div className="text-[10px] font-semibold text-amber-400/90 truncate">
                  {ep.showTitle}
                </div>

                {/* Episode Title */}
                <h5 className="text-xs font-bold text-amber-100 group-hover:text-amber-200 line-clamp-2 leading-snug mt-0.5">
                  {ep.title}
                </h5>
              </div>

              {/* Card Footer */}
              <div className="mt-2.5 pt-2 border-t border-[#2e2118] flex items-center justify-between text-[10px] text-amber-300/60 font-mono">
                <span className="flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5" />
                  <span>
                    {ep.duration ? ep.duration.replace('PT', '').replace('M', 'د ').replace('S', 'ث') : 'إذاعي'}
                  </span>
                </span>

                <span className="text-amber-400 group-hover:underline flex items-center gap-1">
                  <span>تشغيل</span>
                  <RotateCcw className="w-2.5 h-2.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
