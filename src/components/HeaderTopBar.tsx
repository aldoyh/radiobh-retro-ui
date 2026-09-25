import React from 'react';
import { Search, Shuffle } from 'lucide-react';

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
    <header className="sticky top-0 z-40 w-full border-b border-amber-950/40 bg-[#14100d]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={onScrollToRadio}
          className="text-lg sm:text-xl font-bold tracking-tight text-amber-200 hover:text-amber-100 transition-colors cursor-pointer"
        >
          إذاعة البحرين الكلاسيكية
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-amber-200/70">
          <button
            onClick={onScrollToRadio}
            className="hover:text-amber-200 transition-colors underline-offset-4 hover:underline cursor-pointer"
          >
            الموجات والترددات
          </button>
          <button
            onClick={onOpenThematicGuide}
            className="hover:text-amber-200 transition-colors underline-offset-4 hover:underline cursor-pointer"
          >
            روابط الذكاء الاصطناعي
          </button>
          <button
            onClick={onOpenCatalog}
            className="hover:text-amber-200 transition-colors underline-offset-4 hover:underline cursor-pointer"
          >
            دليل البرامج 47
          </button>
          <button
            onClick={onOpenSearch}
            className="hover:text-amber-200 transition-colors underline-offset-4 hover:underline cursor-pointer"
          >
            أرشيف الحلقات 810
          </button>
          {onScrollToHistory && (
            <button
              onClick={onScrollToHistory}
              className="hover:text-amber-200 transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              سجل الاستماع
            </button>
          )}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-100 bg-[#28201a] border border-amber-900/60 rounded-md hover:bg-[#342a22] transition-colors whitespace-nowrap cursor-pointer"
            title="بحث في الأرشيف"
          >
            <Search className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">بحث بالحلقات</span>
          </button>

          <button
            onClick={onCasualRandomPick}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-zinc-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-md hover:from-amber-300 hover:to-amber-400 shadow-sm transition-all whitespace-nowrap cursor-pointer active:scale-95"
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
