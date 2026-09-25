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

const ITEMS_PER_PAGE = 6;

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

  useEffect(() => {
    setCurrentPage(1);
    setSelectedShowFilter('ALL');
    setSearchQuery('');
  }, [station.id]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedShowFilter, searchQuery]);

  const stationEpisodes = useMemo(() => {
    return allEpisodes.filter((ep) => {
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

  const availableShows = useMemo(() => {
    const showCounts: Record<string, number> = {};
    stationEpisodes.forEach((e) => {
      showCounts[e.showTitle] = (showCounts[e.showTitle] || 0) + 1;
    });
    return Object.entries(showCounts).map(([title, count]) => ({ title, count }));
  }, [stationEpisodes]);

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
    <section className="w-full bg-[#0d1017] rounded-xl border border-[#202738] p-4 sm:p-6 shadow-xl">
      {/* Station Title & AI Thematic Connection Header */}
      <div className="border-b border-[#1d2536] pb-4 mb-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#ce1126] text-white shadow-sm">
                {station.frequencyDisplay}
              </span>
              <span className="text-xs font-mono font-bold tracking-wider text-rose-400">
                {station.shortName}
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-xs text-slate-300">{station.kicker}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">{station.name}</h2>
          </div>

          <button
            onClick={() => {
              soundEffects.playMechanicalKey();
              onCasualRandomPick();
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#ce1126] to-[#99001a] rounded-md hover:from-[#e11d48] hover:to-[#ce1126] transition-all cursor-pointer self-start sm:self-auto active:scale-95 shadow-[0_0_12px_rgba(206,17,38,0.4)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>بث حلقة عشوائية من هذه الموجة</span>
          </button>
        </div>

        {/* AI Thematic Nexus Explanation Box */}
        <div className="mt-4 p-3.5 bg-[#121622] rounded-lg border border-[#242d40] flex items-start gap-3">
          <div className="p-2 rounded-md bg-[#ce1126]/10 text-rose-400 shrink-0 mt-0.5 border border-[#ce1126]/20">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-rose-300 uppercase tracking-wide">
              تحليل الذكاء الاصطناعي لترابط البرامج في هذه المحطة
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              {station.thematicExplanation}
            </p>
          </div>
        </div>
      </div>

      {/* Shows Cluster Filter Tabs & Search */}
      <div className="mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
            <Layers className="w-3.5 h-3.5 text-rose-400" />
            <span>البرامج المشتركة في هذه الموجة ({availableShows.length} برامج)</span>
          </div>

          {/* Quick Filter Search */}
          <div className="relative w-full sm:w-60">
            <Search className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-rose-400" />
            <input
              type="text"
              placeholder="بحث في حلقات هذه الموجة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-3 pr-8 py-1 text-xs bg-[#07090e] text-white placeholder:text-slate-500 rounded border border-[#202838] focus:outline-none focus:border-[#ce1126]"
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
                ? 'bg-[#ce1126] text-white font-bold shadow-md'
                : 'bg-[#121622] text-slate-300 hover:text-white border border-[#232b3d]'
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
                    ? 'bg-[#ce1126] text-white font-bold shadow-md'
                    : 'bg-[#121622] text-slate-300 hover:text-white border border-[#232b3d]'
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
      <div className="flex items-center justify-between mb-3 px-1 text-xs text-slate-400">
        <div className="font-mono">
          عرض {paginatedEpisodes.length} من أصل {filteredEpisodes.length} حلقة (الصفحة {safeCurrentPage} من {totalPages})
        </div>
        <div className="font-mono text-[11px] text-rose-400">
          6 حلقات لكل صفحة
        </div>
      </div>

      {/* Episode Grid / List (Max 6 per page) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {paginatedEpisodes.length === 0 ? (
          <div className="col-span-full py-8 text-center text-slate-400">
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
                className={`group relative p-3 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-[#182030] border-[#ce1126] shadow-[0_0_14px_rgba(206,17,38,0.35)] ring-1 ring-[#ce1126]/50'
                    : 'bg-[#121622] border-[#232b3d] hover:border-[#ce1126]/60 hover:bg-[#161d2c]'
                }`}
              >
                <div>
                  {/* Thumbnail with duration badge and play button */}
                  <div className="relative w-full aspect-video rounded overflow-hidden bg-black/60 mb-2.5">
                    <img
                      src={ep.thumbnail}
                      alt={ep.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />

                    {/* Play button overlay */}
                    <div
                      className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity ${
                        isCurrent ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      <div className="w-10 h-10 rounded-full bg-[#ce1126] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Status badge: Now Playing */}
                    {isCurrent && (
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#ce1126] text-white text-[10px] font-mono font-bold flex items-center gap-1 shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span>بث مباشر</span>
                      </div>
                    )}

                    {/* Published Date */}
                    {ep.publishedAt && (
                      <div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-black/80 text-white text-[9.5px] font-mono">
                        {ep.publishedAt.slice(0, 10)}
                      </div>
                    )}
                  </div>

                  {/* Clean unboxed metadata with typographic separator */}
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-1">
                    <span className="font-semibold text-rose-400 truncate max-w-[150px]">
                      {ep.showTitle}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>إذاعة البحرين</span>
                  </div>

                  {/* Episode Title */}
                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-rose-200 transition-colors line-clamp-2 leading-snug">
                    {ep.title}
                  </h4>

                  {/* AI Thematic Connection Reason */}
                  {ep.thematicConnection && (
                    <div className="mt-2 text-[11px] text-rose-200/80 bg-[#090c12]/80 p-1.5 rounded border border-[#1f2838] line-clamp-2">
                      <span className="text-[#ce1126] font-bold">سبب الربط: </span>
                      {ep.thematicConnection}
                    </div>
                  )}
                </div>

                {/* Footer on Card: Action prompt */}
                <div className="mt-3 pt-2 border-t border-[#1d2536] flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-slate-400">
                    {isCurrent ? (isPlaying ? 'قيد التشغيل الآن' : 'جاهز للتشغيل') : 'انقر للاستماع'}
                  </span>
                  <span className="font-bold text-rose-400 flex items-center gap-1 group-hover:translate-x-[-2px] transition-transform">
                    <span>تشغيل</span>
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Pagination Controls Bar */}
      {totalPages > 1 && (
        <div className="mt-6 pt-4 border-t border-[#1d2536] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400 font-mono">
            صفحة {safeCurrentPage} من أصل {totalPages}
          </div>

          <div className="flex items-center gap-1">
            {/* First Page */}
            <button
              onClick={() => handlePageChange(1)}
              disabled={safeCurrentPage === 1}
              className="p-1.5 rounded bg-[#121622] border border-[#232b3d] text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              title="الصفحة الأولى"
            >
              <ChevronsRight className="w-4 h-4" />
            </button>

            {/* Prev Page */}
            <button
              onClick={() => handlePageChange(safeCurrentPage - 1)}
              disabled={safeCurrentPage === 1}
              className="px-2.5 py-1.5 rounded bg-[#121622] border border-[#232b3d] text-slate-300 hover:text-white flex items-center gap-1 text-xs disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
              <span>السابق</span>
            </button>

            {/* Page number buttons */}
            <div className="flex items-center gap-1 mx-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((p) => {
                  return (
                    p === 1 ||
                    p === totalPages ||
                    Math.abs(p - safeCurrentPage) <= 1
                  );
                })
                .map((p, idx, arr) => {
                  const isCurrent = p === safeCurrentPage;
                  const prevVal = arr[idx - 1];
                  const hasGap = prevVal && p - prevVal > 1;

                  return (
                    <React.Fragment key={p}>
                      {hasGap && <span className="px-1 text-slate-500">...</span>}
                      <button
                        onClick={() => handlePageChange(p)}
                        className={`w-8 h-8 rounded text-xs font-mono font-medium transition-colors cursor-pointer ${
                          isCurrent
                            ? 'bg-[#ce1126] text-white font-bold shadow-md'
                            : 'bg-[#121622] text-slate-300 hover:text-white border border-[#232b3d]'
                        }`}
                      >
                        {p}
                      </button>
                    </React.Fragment>
                  );
                })}
            </div>

            {/* Next Page */}
            <button
              onClick={() => handlePageChange(safeCurrentPage + 1)}
              disabled={safeCurrentPage === totalPages}
              className="px-2.5 py-1.5 rounded bg-[#121622] border border-[#232b3d] text-slate-300 hover:text-white flex items-center gap-1 text-xs disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <span>التالي</span>
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Last Page */}
            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={safeCurrentPage === totalPages}
              className="p-1.5 rounded bg-[#121622] border border-[#232b3d] text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
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
