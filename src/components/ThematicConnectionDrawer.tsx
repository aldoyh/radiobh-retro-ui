import React, { useState, useMemo, useEffect } from 'react';
import { EpisodeItem, RadioStation } from '../types/radio';
import { Sparkles, Radio, Play, Search, Layers, Clock, ChevronRight, ChevronLeft, ChevronsRight, ChevronsLeft } from 'lucide-react';
import { soundEffects } from '../services/soundEffects';

interface ThematicConnectionDrawerProps {
  station: RadioStation;
  allEpisodes: EpisodeItem[];
  currentEpisodeId: string | null;
  isPlaying: boolean;
  onSelectEpisode: (ep: EpisodeItem) => void;
  onCasualRandomPick: () => void;
}

const ITEMS_PER_PAGE = 6; // Compact, lightweight page limit (2 rows of 3)

export const ThematicConnectionDrawer: React.FC<ThematicConnectionDrawerProps> = ({
  station,
  allEpisodes,
  currentEpisodeId,
  isPlaying,
  onSelectEpisode,
  onCasualRandomPick,
}) => {
  const [selectedShowFilter, setSelectedShowFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Reset page to 1 whenever station, filter, or search changes
  useEffect(() => {
    setCurrentPage(1);
    setSelectedShowFilter('ALL');
    setSearchQuery('');
  }, [station.id]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedShowFilter, searchQuery]);

  // Filter episodes belonging to this station
  const stationEpisodes = useMemo(() => {
    return allEpisodes.filter((ep) => {
      // Check if episode belongs to station shows or matches station topics
      const matchesShow = station.shows.includes(ep.showTitle);
      if (matchesShow) return true;

      const text = (ep.title + ' ' + ep.showTitle).toLowerCase();
      if (station.id === 'gulf-27-mondial') {
        return /27|خليج|مونديال|كأس|مستطيل/i.test(text);
      } else if (station.id === 'football-league') {
        return /ليغ|الدوري|شغف|كورة|قدم/i.test(text);
      } else if (station.id === 'motorsports-drs') {
        return /فورملا|f1|drs|حلبة|سباق/i.test(text);
      } else if (station.id === 'tech-future') {
        return /ذكاء|ابداع|فضاء|تقنية/i.test(text);
      } else if (station.id === 'bahrain-heritage') {
        return /صوت|عوض|شعبية|اسطوانة|تراث/i.test(text);
      } else if (station.id === 'culture-literature') {
        return /قلم|جليس|الصورة الأخرى|حكاية نجم|أدب/i.test(text);
      } else if (station.id === 'self-coaching') {
        return /خاطر|دانش|لنبدأ|إكسير|أفهم/i.test(text);
      } else if (station.id === 'society-youth') {
        return /ميلس|مايك|ريفرش|نجمين|مباشر/i.test(text);
      } else if (station.id === 'drama-comedy') {
        return /هب السعد|الأصلي|اللاتري|مسابقة/i.test(text);
      } else if (station.id === 'spiritual-values') {
        return /صائم|عبادات|دلالات|فيل|نعم من حولنا/i.test(text);
      }
      return false;
    });
  }, [station, allEpisodes]);

  // Shows participating in this frequency
  const availableShows = useMemo(() => {
    const showCounts: Record<string, number> = {};
    stationEpisodes.forEach((e) => {
      showCounts[e.showTitle] = (showCounts[e.showTitle] || 0) + 1;
    });
    return Object.entries(showCounts).map(([title, count]) => ({ title, count }));
  }, [stationEpisodes]);

  // Filtered episodes based on active show tab and search query
  const filteredEpisodes = useMemo(() => {
    return stationEpisodes.filter((e) => {
      const matchesShow = selectedShowFilter === 'ALL' || e.showTitle === selectedShowFilter;
      const matchesSearch =
        !searchQuery ||
        e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.showTitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesShow && matchesSearch;
    });
  }, [stationEpisodes, selectedShowFilter, searchQuery]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredEpisodes.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedEpisodes = useMemo(() => {
    const startIdx = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
    return filteredEpisodes.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  }, [filteredEpisodes, safeCurrentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    soundEffects.playDialTick();
    setCurrentPage(newPage);
  };

  return (
    <section className="w-full bg-[#16120e] rounded-xl border border-[#3e3025] p-4 sm:p-6 shadow-xl">
      {/* Station Title & AI Thematic Connection Header */}
      <div className="border-b border-[#35271d] pb-4 mb-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500 text-zinc-950">
                {station.frequencyDisplay}
              </span>
              <span className="text-xs font-mono font-bold tracking-wider text-amber-400">
                {station.shortName}
              </span>
              <span className="text-zinc-500">·</span>
              <span className="text-xs text-amber-200/70">{station.kicker}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-amber-100">{station.name}</h2>
          </div>

          <button
            onClick={() => {
              soundEffects.playMechanicalKey();
              onCasualRandomPick();
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-zinc-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-md hover:from-amber-300 hover:to-amber-400 transition-all cursor-pointer self-start sm:self-auto active:scale-95 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>بث حلقة عشوائية من هذه الموجة</span>
          </button>
        </div>

        {/* AI Thematic Nexus Explanation Box */}
        <div className="mt-4 p-3.5 bg-[#1f1712] rounded-lg border border-amber-900/40 flex items-start gap-3">
          <div className="p-2 rounded-md bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-amber-300 uppercase tracking-wide">
              تحليل الذكاء الاصطناعي لترابط البرامج في هذه المحطة
            </h3>
            <p className="text-xs sm:text-sm text-amber-200/80 mt-1 leading-relaxed">
              {station.thematicExplanation}
            </p>
          </div>
        </div>
      </div>

      {/* Shows Cluster Filter Tabs & Search */}
      <div className="mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300/80">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>البرامج المشتركة في هذه الموجة ({availableShows.length} برامج)</span>
          </div>

          {/* Quick Filter Search */}
          <div className="relative w-full sm:w-60">
            <Search className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-amber-400/60" />
            <input
              type="text"
              placeholder="بحث في حلقات هذه الموجة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-3 pr-8 py-1 text-xs bg-[#100c09] text-amber-100 placeholder:text-amber-300/40 rounded border border-[#3e3025] focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Show tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => {
              soundEffects.playDialTick();
              setSelectedShowFilter('ALL');
            }}
            className={`px-3 py-1 text-xs rounded-md font-medium whitespace-nowrap transition-colors cursor-pointer ${
              selectedShowFilter === 'ALL'
                ? 'bg-amber-500 text-zinc-950 font-bold'
                : 'bg-[#221a14] text-amber-200/70 hover:text-amber-200 border border-[#382b20]'
            }`}
          >
            جميع البرامج ({stationEpisodes.length})
          </button>

          {availableShows.map((show) => {
            const isSelected = selectedShowFilter === show.title;
            return (
              <button
                key={show.title}
                onClick={() => {
                  soundEffects.playDialTick();
                  setSelectedShowFilter(show.title);
                }}
                className={`px-2.5 py-1 text-xs rounded-md font-medium whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-amber-500 text-zinc-950 font-bold'
                    : 'bg-[#221a14] text-amber-200/70 hover:text-amber-200 border border-[#382b20]'
                }`}
              >
                <span>{show.title}</span>
                <span className="text-[10px] opacity-75 font-mono">({show.count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pagination Status Bar */}
      <div className="flex items-center justify-between mb-3 px-1 text-xs text-amber-300/70">
        <div className="font-mono">
          عرض {paginatedEpisodes.length} من أصل {filteredEpisodes.length} حلقة (الصفحة {safeCurrentPage} من {totalPages})
        </div>
        <div className="font-mono text-[11px] text-amber-400/80">
          6 حلقات لكل صفحة
        </div>
      </div>

      {/* Episode Grid / List (Max 6 per page) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {paginatedEpisodes.length === 0 ? (
          <div className="col-span-full py-8 text-center text-amber-300/60">
            لا توجد حلقات مطابقة لمعايير البحث الحالية
          </div>
        ) : (
          paginatedEpisodes.map((ep) => {
            const isCurrent = ep.id === currentEpisodeId;

            return (
              <div
                key={ep.id}
                onClick={() => {
                  soundEffects.playMechanicalKey();
                  onSelectEpisode(ep);
                }}
                className={`group relative p-2.5 rounded-lg border transition-all cursor-pointer flex gap-3 ${
                  isCurrent
                    ? 'bg-[#281e17] border-amber-500 shadow-md ring-1 ring-amber-500/50'
                    : 'bg-[#1b1511] border-[#382b20] hover:border-amber-700/80 hover:bg-[#221a14]'
                }`}
              >
                {/* Thumbnail */}
                <div className="relative w-20 h-14 sm:w-24 sm:h-16 rounded overflow-hidden bg-black/60 shrink-0">
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
                    <div className="w-7 h-7 rounded-full bg-amber-500 text-zinc-950 flex items-center justify-center shadow-lg">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Active playing indicator badge */}
                  {isCurrent && (
                    <span className="absolute top-1 right-1 px-1 py-0.5 rounded text-[8px] font-bold bg-amber-400 text-zinc-950 font-mono">
                      NOW
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    {/* Show Title */}
                    <div className="text-[10.5px] font-semibold text-amber-400/90 truncate">
                      {ep.showTitle}
                    </div>

                    {/* Episode Title */}
                    <h4 className="text-xs font-bold text-amber-100 line-clamp-2 leading-tight mt-0.5 group-hover:text-amber-200">
                      {ep.title}
                    </h4>
                  </div>

                  {/* Episode Meta footer */}
                  <div className="mt-1 flex items-center gap-2 text-[10px] text-amber-300/50 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" />
                      <span>{ep.duration ? ep.duration.replace('PT', '').replace('M', 'د ').replace('S', 'ث') : 'إذاعي'}</span>
                    </span>
                    <span>·</span>
                    <span className="text-amber-400/70 group-hover:text-amber-400">بث فوري</span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Numeric Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-5 pt-3 border-t border-[#35271d] flex flex-wrap items-center justify-between gap-3">
          {/* Previous / First page */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => handlePageChange(1)}
              disabled={safeCurrentPage === 1}
              className="p-1.5 rounded bg-[#201812] border border-[#3d2f23] text-amber-300 hover:text-amber-100 hover:border-amber-500 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
              title="الصفحة الأولى"
            >
              <ChevronsRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handlePageChange(safeCurrentPage - 1)}
              disabled={safeCurrentPage === 1}
              className="flex items-center gap-1 px-2.5 py-1 text-xs rounded bg-[#201812] border border-[#3d2f23] text-amber-200 hover:text-amber-100 hover:border-amber-500 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5" />
              <span>السابق</span>
            </button>
          </div>

          {/* Page Number Buttons */}
          <div className="flex items-center gap-1 overflow-x-auto">
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((p) => {
                // Show first, last, and window around current page
                return (
                  p === 1 ||
                  p === totalPages ||
                  (p >= safeCurrentPage - 2 && p <= safeCurrentPage + 2)
                );
              })
              .map((p, idx, arr) => {
                const prev = arr[idx - 1];
                const showEllipsis = prev && p - prev > 1;

                return (
                  <React.Fragment key={p}>
                    {showEllipsis && (
                      <span className="px-1 text-xs text-amber-600 font-mono">...</span>
                    )}
                    <button
                      onClick={() => handlePageChange(p)}
                      className={`min-w-7 h-7 px-2 text-xs font-mono rounded font-medium transition-colors cursor-pointer ${
                        p === safeCurrentPage
                          ? 'bg-amber-500 text-zinc-950 font-bold shadow-sm'
                          : 'bg-[#1e1611] text-amber-200/80 hover:text-amber-100 hover:bg-[#2a1f18] border border-[#3a2d21]'
                      }`}
                    >
                      {p}
                    </button>
                  </React.Fragment>
                );
              })}
          </div>

          {/* Next / Last page */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => handlePageChange(safeCurrentPage + 1)}
              disabled={safeCurrentPage === totalPages}
              className="flex items-center gap-1 px-2.5 py-1 text-xs rounded bg-[#201812] border border-[#3d2f23] text-amber-200 hover:text-amber-100 hover:border-amber-500 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <span>التالي</span>
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={safeCurrentPage === totalPages}
              className="p-1.5 rounded bg-[#201812] border border-[#3d2f23] text-amber-300 hover:text-amber-100 hover:border-amber-500 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
              title="الصفحة الأخيرة"
            >
              <ChevronsLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
