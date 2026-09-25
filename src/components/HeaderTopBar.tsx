import React from 'react';
import { Search, Shuffle, Radio } from 'lucide-react';

interface HeaderTopBarProps {
  onOpenSearch: () => void;
  onOpenCatalog: () => void;
  onOpenThematicGuide: () => void;
  onCasualRandomPick: () => void;
  onScrollToRadio: () => void;
  onScrollToHistory?: () => void;
}

export const HeaderTopBar: React.FC<HeaderTopBarProps> = ({
  onOpenSearch,
  onOpenCatalog,
  onOpenThematicGuide,
  onCasualRandomPick,
  onScrollToRadio,
  onScrollToHistory,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#1f2638] bg-[#07090e]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Zone 1: Official Logo Emblem & Wordmark (Radio Bahrain Brand Lockup) */}
        <button
          onClick={onScrollToRadio}
          className="flex items-center gap-3 text-right group cursor-pointer"
        >
          {/* Radio Bahrain Official Round Badge */}
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-[#7a0016] via-[#ce1126] to-[#e11d48] p-0.5 shadow-[0_0_14px_rgba(206,17,38,0.5)] group-hover:shadow-[0_0_18px_rgba(206,17,38,0.7)] transition-all shrink-0">
            <img
              src="/branding/logo_round.png"
              alt="Radio Bahrain"
              className="w-full h-full rounded-full object-cover"
              onError={(e) => {
                // If path fails, show sleek SVG emblem fallback
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
            {/* Fallback crown & radio transmitter emblem if image loads hidden */}
            <div className="w-full h-full rounded-full flex items-center justify-center bg-[#8b0000] text-white">
              <Radio className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="flex flex-col text-right">
            <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-rose-200 transition-colors leading-tight">
              إذاعة البحرين
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#ce1126] font-bold uppercase">
              RADIO BAHRAIN · 96.5 FM
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (Clean text with hover underlines) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={onScrollToRadio}
            className="hover:text-white transition-colors underline-offset-4 hover:underline hover:decoration-[#ce1126] cursor-pointer"
          >
            الموجات والترددات
          </button>
          <button
            onClick={onOpenThematicGuide}
            className="hover:text-white transition-colors underline-offset-4 hover:underline hover:decoration-[#ce1126] cursor-pointer"
          >
            روابط الذكاء الاصطناعي
          </button>
          <button
            onClick={onOpenCatalog}
            className="hover:text-white transition-colors underline-offset-4 hover:underline hover:decoration-[#ce1126] cursor-pointer"
          >
            دليل البرامج 47
          </button>
          <button
            onClick={onOpenSearch}
            className="hover:text-white transition-colors underline-offset-4 hover:underline hover:decoration-[#ce1126] cursor-pointer"
          >
            أرشيف الحلقات 810
          </button>
          {onScrollToHistory && (
            <button
              onClick={onScrollToHistory}
              className="hover:text-white transition-colors underline-offset-4 hover:underline hover:decoration-[#ce1126] cursor-pointer"
            >
              سجل الاستماع
            </button>
          )}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-[#121622] border border-[#232b3e] rounded-md hover:bg-[#182030] hover:border-[#ce1126]/60 transition-colors whitespace-nowrap cursor-pointer"
            title="بحث في الأرشيف"
          >
            <Search className="w-3.5 h-3.5 text-rose-400" />
            <span className="hidden sm:inline">بحث بالحلقات</span>
          </button>

          <button
            onClick={onCasualRandomPick}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#ce1126] to-[#99001a] hover:from-[#e11d48] hover:to-[#ce1126] rounded-md shadow-[0_0_14px_rgba(206,17,38,0.45)] hover:shadow-[0_0_18px_rgba(206,17,38,0.65)] transition-all whitespace-nowrap cursor-pointer active:scale-95 border border-[#ff477e]/30"
            title="التقاط بث عشوائي"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>بث عشوائي</span>
          </button>
        </div>
      </div>
    </header>
  );
};
