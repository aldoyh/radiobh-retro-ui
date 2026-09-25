import React, { useState } from 'react';
import { ShowItem, RadioStation } from '../types/radio';
import { Radio, X, Layers, ExternalLink } from 'lucide-react';
import { soundEffects } from '../services/soundEffects';

interface AllShowsCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  shows: ShowItem[];
  stations: RadioStation[];
  onSelectShowAndTune: (show: ShowItem, station: RadioStation) => void;
}

export const AllShowsCatalogModal: React.FC<AllShowsCatalogModalProps> = ({
  isOpen,
  onClose,
  shows,
  stations,
  onSelectShowAndTune,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('ALL');

  if (!isOpen) return null;

  const categories = ['ALL', 'متنوع', 'برامج', 'بودكاست', 'مباشر', 'فن وموسيقى', 'دراما', 'مسابقات'];

  const filteredShows = shows.filter((s) => {
    if (filterCategory === 'ALL') return true;
    return s.category === filterCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in select-none">
      <div className="relative w-full max-w-4xl max-h-[88vh] bg-[#16120e] rounded-xl border border-[#483728] shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#35271d] bg-[#1d1612]">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-400" />
            <h3 className="text-base sm:text-lg font-bold text-amber-100">
              دليل برامج وبودكاست إذاعة البحرين (47 برنامجاً)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#2a1f18] hover:bg-[#3d2d22] text-amber-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="p-3 border-b border-[#2d2118] bg-[#120d09] flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <span className="text-xs font-mono text-amber-400/70 mr-1 shrink-0">التصنيف:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1 text-xs rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                filterCategory === cat
                  ? 'bg-amber-500 text-zinc-950 font-bold'
                  : 'bg-[#221a14] text-amber-200/80 hover:text-amber-100 border border-[#382b20]'
              }`}
            >
              {cat === 'ALL' ? 'جميع التصنيفات' : cat}
            </button>
          ))}
        </div>

        {/* Grid of Shows */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredShows.map((show) => {
            // Find which station hosts this show
            const matchedStation =
              stations.find((st) => st.shows.includes(show.title)) || stations[0];

            return (
              <div
                key={show.id}
                onClick={() => {
                  soundEffects.playMechanicalKey();
                  soundEffects.pulseTuningStatic(300, 0.22);
                  onSelectShowAndTune(show, matchedStation);
                  onClose();
                }}
                className="group p-3 rounded-lg bg-[#1a140f] hover:bg-[#251c15] border border-[#35271d] hover:border-amber-500 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className="px-2 py-0.5 rounded text-[10px] font-bold"
                      style={{
                        backgroundColor: `${show.color}25`,
                        color: show.color,
                        borderColor: `${show.color}50`,
                      }}
                    >
                      {show.category}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-900/60">
                      {matchedStation.frequencyDisplay}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-amber-100 group-hover:text-amber-200 line-clamp-2">
                    {show.title}
                  </h4>
                </div>

                <div className="mt-3 pt-2 border-t border-[#2e2118] flex items-center justify-between text-xs text-amber-300/70">
                  <span className="font-mono">{show.count} حلقة مسجلة</span>
                  <span className="font-semibold text-amber-400 group-hover:underline flex items-center gap-1">
                    <span>موالفة الموجة</span>
                    <Radio className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
