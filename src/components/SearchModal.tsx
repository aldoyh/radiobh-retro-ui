import React, { useState, useMemo } from 'react';
import { EpisodeItem, RadioStation } from '../types/radio';
import { Search, X, Radio, Play, ChevronRight, ChevronLeft } from 'lucide-react';
import { soundEffects } from '../services/soundEffects';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  allEpisodes: EpisodeItem[];
  stations: RadioStation[];
  onSelectEpisodeAndTune: (episode: EpisodeItem, station: RadioStation) => void;
}

const SEARCH_PER_PAGE = 8;

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  allEpisodes,
  stations,
  onSelectEpisodeAndTune,
}) => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  // Quick preset keywords for prompt topics
  const popularTopics = [
    'خليجي 27',
    'المونديال',
    'خارج المستطيل الأخضر',
    'إف إم ليغ',
    'فورمولا 1',
    'الذكاء الاصطناعي',
    'فن الصوت',
    'تطوير الذات',
    'شباب الميلس',
    'هب السعد',
  ];

  const searchResults = useMemo(() => {
    if (!query.trim()) {
      return allEpisodes;
    }
    const q = query.toLowerCase();
    return allEpisodes.filter(
      (e) => e.title.toLowerCase().includes(q) || e.showTitle.toLowerCase().includes(q)
    );
  }, [query, allEpisodes]);

  const totalPages = Math.max(1, Math.ceil(searchResults.length / SEARCH_PER_PAGE));
  const safePage = Math.min(page, totalPages);

  const paginatedResults = useMemo(() => {
    const start = (safePage - 1) * SEARCH_PER_PAGE;
    return searchResults.slice(start, start + SEARCH_PER_PAGE);
  }, [searchResults, safePage]);

  const handleQueryChange = (val: string) => {
    setQuery(val);
    setPage(1);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in select-none">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#16120e] rounded-xl border border-[#483728] shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#35271d] bg-[#1d1612]">
          <div className="flex items-center gap-2">
            <Radio className="w-5 h-5 text-amber-400" />
            <h3 className="text-base sm:text-lg font-bold text-amber-100">
              البحث الذكي في أرشيف إذاعة البحرين (810 حلقات)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#2a1f18] hover:bg-[#3d2d22] text-amber-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#2d2118] bg-[#120d09]">
          <div className="relative">
            <Search className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-amber-400" />
            <input
              type="text"
              autoFocus
              placeholder="ابحث بالعنوان، البرنامج، الضيف، أو الموضوع (مثال: خليجي 27، المستطيل الأخضر، الذكاء، فن الصوت)..."
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              className="w-full pl-4 pr-11 py-2.5 bg-[#1b140f] text-amber-100 placeholder:text-amber-300/40 rounded-lg border border-[#3e3025] focus:outline-none focus:border-amber-400 text-sm"
            />
            {query && (
              <button
                onClick={() => handleQueryChange('')}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-amber-400/60 hover:text-amber-300"
              >
                مسح
              </button>
            )}
          </div>

          {/* Quick topic tags */}
          <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[11px] font-mono text-amber-400/60 shrink-0">مواضيع مقترحة:</span>
            {popularTopics.map((topic) => (
              <button
                key={topic}
                onClick={() => handleQueryChange(topic)}
                className="px-2.5 py-0.5 text-xs rounded bg-[#251b14] text-amber-200/80 hover:text-amber-100 hover:bg-[#34261c] border border-[#382b20] whitespace-nowrap transition-colors cursor-pointer"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-amber-400/70 mb-2">
            <span>
              نتائج البحث ({searchResults.length} حلقة)
            </span>
            <span>
              الصفحة {safePage} من {totalPages}
            </span>
          </div>

          {searchResults.length === 0 ? (
            <div className="py-12 text-center text-amber-300/60">
              لم نعثر على حلقات مطابقة لبحثك. جرب كتابة كلمة أخرى.
            </div>
          ) : (
            paginatedResults.map((ep) => {
              // Find which station matches this episode
              const matchedStation =
                stations.find((st) => st.shows.includes(ep.showTitle)) || stations[0];

              return (
                <div
                  key={ep.id}
                  onClick={() => {
                    soundEffects.playMechanicalKey();
                    soundEffects.pulseTuningStatic(300, 0.2);
                    onSelectEpisodeAndTune(ep, matchedStation);
                    onClose();
                  }}
                  className="group p-2.5 rounded-lg bg-[#1a140f] hover:bg-[#251c15] border border-[#35271d] hover:border-amber-500 transition-all cursor-pointer flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Thumbnail */}
                    <div className="relative w-16 h-12 rounded overflow-hidden bg-black shrink-0">
                      <img
                        src={ep.thumbnail}
                        alt={ep.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-3.5 h-3.5 text-amber-400 fill-current" />
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-semibold text-amber-400 truncate">
                          {ep.showTitle}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-950/80 text-amber-300 border border-amber-800/40">
                          {matchedStation.frequencyDisplay}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-amber-100 truncate mt-0.5 group-hover:text-amber-200">
                        {ep.title}
                      </h4>
                    </div>
                  </div>

                  {/* Tune In Button */}
                  <div className="shrink-0 flex items-center gap-2">
                    <span className="text-xs font-semibold text-zinc-950 bg-amber-400 group-hover:bg-amber-300 px-2.5 py-1 rounded transition-colors whitespace-nowrap">
                      موالفة واستماع
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Pagination Footer */}
        {totalPages > 1 && (
          <div className="p-3 border-t border-[#35271d] bg-[#120d09] flex items-center justify-between">
            <button
              onClick={() => {
                soundEffects.playDialTick();
                setPage((p) => Math.max(1, p - 1));
              }}
              disabled={safePage === 1}
              className="flex items-center gap-1 px-3 py-1 text-xs rounded bg-[#201812] border border-[#3d2f23] text-amber-200 hover:text-amber-100 hover:border-amber-500 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5" />
              <span>السابق</span>
            </button>

            <span className="text-xs font-mono text-amber-300/80">
              {safePage} / {totalPages}
            </span>

            <button
              onClick={() => {
                soundEffects.playDialTick();
                setPage((p) => Math.min(totalPages, p + 1));
              }}
              disabled={safePage === totalPages}
              className="flex items-center gap-1 px-3 py-1 text-xs rounded bg-[#201812] border border-[#3d2f23] text-amber-200 hover:text-amber-100 hover:border-amber-500 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              <span>التالي</span>
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
