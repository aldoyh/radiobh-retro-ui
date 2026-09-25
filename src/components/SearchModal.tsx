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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-fade-in select-none">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#0d1017] rounded-xl border border-[#232b3d] shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#1f2638] bg-[#121622]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-[#ce1126]/10 text-rose-400 border border-[#ce1126]/25">
              <Radio className="w-5 h-5 text-[#ce1126]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                البحث الذكي في أرشيف إذاعة البحرين (810 حلقات)
              </h3>
              <p className="text-xs text-slate-400">
                ابحث عن أي حلقة وسيتم ضبط مؤشر الراديو وموالفته للموجة التابعة لها
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

        {/* Search Input and Popular Keywords */}
        <div className="p-4 border-b border-[#1d2536] bg-[#090c12]">
          <div className="relative">
            <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-rose-400" />
            <input
              type="text"
              placeholder="اكتب اسم الحلقة، الموضوع، الضيف، أو البرنامج..."
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              autoFocus
              className="w-full pl-4 pr-10 py-2.5 text-sm bg-[#121622] text-white placeholder:text-slate-500 rounded-lg border border-[#242d40] focus:outline-none focus:border-[#ce1126] transition-colors"
            />
            {query && (
              <button
                onClick={() => handleQueryChange('')}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs cursor-pointer"
              >
                مسح
              </button>
            )}
          </div>

          {/* Quick topic tags */}
          <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-slate-400 shrink-0 font-mono text-[11px]">مواضيع سريعة:</span>
            {popularTopics.map((topic) => (
              <button
                key={topic}
                onClick={() => handleQueryChange(topic)}
                className="px-2 py-0.5 rounded text-[11px] bg-[#141a27] text-slate-300 hover:text-white border border-[#222c3f] hover:border-[#ce1126]/60 transition-colors whitespace-nowrap cursor-pointer"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {paginatedResults.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              لا توجد حلقات مطابقة للبحث "{query}"
            </div>
          ) : (
            paginatedResults.map((ep) => {
              const matchedStation =
                stations.find((st) => st.shows.includes(ep.showTitle)) || stations[0];

              return (
                <div
                  key={ep.id}
                  onClick={() => {
                    soundEffects.playMechanicalKey();
                    soundEffects.pulseTuningStatic(260, 0.2);
                    onSelectEpisodeAndTune(ep, matchedStation);
                    onClose();
                  }}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#121622] border border-[#202738] hover:border-[#ce1126]/60 hover:bg-[#161d2c] transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative w-14 sm:w-16 aspect-video rounded overflow-hidden bg-black shrink-0">
                      <img
                        src={ep.thumbnail}
                        alt={ep.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-3.5 h-3.5 text-[#ce1126] fill-current" />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-0.5">
                        <span className="font-bold text-rose-400 truncate max-w-[140px]">
                          {ep.showTitle}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono text-slate-400">{matchedStation.shortName}</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-rose-200 transition-colors truncate">
                        {ep.title}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 mr-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#ce1126]/15 text-rose-300 border border-[#ce1126]/30">
                      {matchedStation.frequencyDisplay}
                    </span>
                    <span className="text-xs font-bold text-rose-400 group-hover:translate-x-[-2px] transition-transform hidden sm:inline">
                      موالفة واستماع ←
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Pagination */}
        <div className="p-3 border-t border-[#1d2536] bg-[#090c12] flex items-center justify-between text-xs text-slate-400 font-mono">
          <div>
            النتائج: {searchResults.length} حلقة (صفحة {safePage} من {totalPages})
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={safePage <= 1}
              className="px-2.5 py-1 rounded bg-[#121622] border border-[#232b3d] text-slate-300 hover:text-white disabled:opacity-30 cursor-pointer flex items-center gap-1"
            >
              <ChevronRight className="w-3.5 h-3.5" />
              <span>السابق</span>
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={safePage >= totalPages}
              className="px-2.5 py-1 rounded bg-[#121622] border border-[#232b3d] text-slate-300 hover:text-white disabled:opacity-30 cursor-pointer flex items-center gap-1"
            >
              <span>التالي</span>
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
