import React, { useState } from 'react';
import { ShowItem, RadioStation } from '../types/radio';
import { Layers, X, Radio } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-fade-in select-none">
      <div className="relative w-full max-w-4xl max-h-[88vh] bg-[#0d1017] rounded-xl border border-[#232b3d] shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#1f2638] bg-[#121622]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-[#ce1126]/10 text-rose-400 border border-[#ce1126]/20">
              <Layers className="w-5 h-5 text-[#ce1126]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                دليل برامج وبودكاست إذاعة البحرين (47 برنامجاً)
              </h3>
              <p className="text-xs text-slate-400">
                شبكة البرامج الإذاعية المندرجة تحت إذاعة البحرين
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#1b2233] hover:bg-[#252f44] text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="p-3 border-b border-[#1d2536] bg-[#090c12] flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <span className="text-xs font-mono text-rose-400 mr-1 shrink-0">التصنيف:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundEffects.playDialTick();
                setFilterCategory(cat);
              }}
              className={`px-3 py-1 rounded text-xs transition-colors whitespace-nowrap cursor-pointer ${
                filterCategory === cat
                  ? 'bg-[#ce1126] text-white font-bold shadow-md'
                  : 'bg-[#121622] text-slate-300 hover:text-white border border-[#232b3d]'
              }`}
            >
              {cat === 'ALL' ? 'الكل (47)' : cat}
            </button>
          ))}
        </div>

        {/* Shows Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredShows.map((show) => {
            const matchedStation =
              stations.find((st) => st.shows.includes(show.title)) || stations[0];

            return (
              <div
                key={show.id}
                onClick={() => {
                  soundEffects.playMechanicalKey();
                  soundEffects.pulseTuningStatic(260, 0.2);
                  onSelectShowAndTune(show, matchedStation);
                  onClose();
                }}
                className="group relative p-3 rounded-lg bg-[#121622] border border-[#202738] hover:border-[#ce1126]/60 hover:bg-[#161d2c] transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full aspect-video rounded overflow-hidden bg-black/60 mb-2.5">
                    <img
                      src={show.thumbnail}
                      alt={show.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-rose-300 border border-[#ce1126]/30">
                      {show.category}
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-white group-hover:text-rose-200 transition-colors line-clamp-1 mb-1">
                    {show.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {show.description || 'برنامج مميز من شبكة إذاعة البحرين'}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#1d2536] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-mono text-slate-400">
                    <Radio className="w-3.5 h-3.5 text-[#ce1126]" />
                    <span>موجة {matchedStation.shortName}</span>
                  </div>

                  <span className="font-bold text-rose-400 group-hover:translate-x-[-2px] transition-transform">
                    استماع ←
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
