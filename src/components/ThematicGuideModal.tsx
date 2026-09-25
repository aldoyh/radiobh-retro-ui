import React from 'react';
import { RadioStation } from '../types/radio';
import { Sparkles, X, Radio, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { soundEffects } from '../services/soundEffects';

interface ThematicGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  stations: RadioStation[];
  onSelectStationAndTune: (station: RadioStation) => void;
}

export const ThematicGuideModal: React.FC<ThematicGuideModalProps> = ({
  isOpen,
  onClose,
  stations,
  onSelectStationAndTune,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-fade-in select-none">
      <div className="relative w-full max-w-4xl max-h-[88vh] bg-[#16120e] rounded-xl border border-[#483728] shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#35271d] bg-[#1d1612]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-amber-100">
                منظومة الذكاء الاصطناعي لربط وتصنيف برامج إذاعة البحرين
              </h3>
              <p className="text-xs text-amber-300/70">
                كيف قمنا بتحويل 47 برنامجاً و810 حلقات إلى محطات إذاعية موضوعية مترابطة
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#2a1f18] hover:bg-[#3d2d22] text-amber-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {/* Key Principle Card */}
          <div className="p-4 rounded-lg bg-[#201812] border border-amber-900/40 text-xs sm:text-sm text-amber-200/90 leading-relaxed">
            <div className="flex items-center gap-2 font-bold text-amber-300 mb-1.5 text-sm">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>فلسفة الموالفة الموضوعية (Thematic Frequencies)</span>
            </div>
            بدلاً من أن تمثل الترددات (88.0 إلى 108.0 MHz) مجرد أرقام موجات عشوائية، قمنا ببرمجة كل تردد كبؤرة معرفية مستقلة تجمع الحلقات المترابطة من برامج متعددة تحت مظلة إذاعة البحرين. فعند ضبط التردد على <strong>88.0 FM</strong>، يرتبط برنامج <em>(خارج المستطيل الأخضر مع فايز السادة)</em> مباشرة ببرنامج <em>(إف إم مونديال 2026)</em> وتغطيات <em>(استوديو 27)</em>، مع إمكانية التقاط حلقة عشوائية أو الاستماع المتواصل.
          </div>

          {/* List of Stations and their cross-show links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-amber-400/80 uppercase tracking-wider">
              خارطة الموجات والبرامج المترابطة (10 محطات موضوعية):
            </h4>

            {stations.map((st) => (
              <div
                key={st.id}
                className="p-3.5 sm:p-4 rounded-lg bg-[#1a140f] border border-[#35271d] hover:border-amber-500/60 transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-3"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500 text-zinc-950">
                      {st.frequencyDisplay}
                    </span>
                    <span className="text-xs font-mono font-bold text-amber-400">
                      {st.shortName}
                    </span>
                    <span className="text-zinc-500">·</span>
                    <h5 className="text-sm font-bold text-amber-100">{st.name}</h5>
                  </div>

                  <p className="text-xs text-amber-200/80 leading-relaxed mb-2">
                    {st.thematicExplanation}
                  </p>

                  {/* Connected Shows Tags */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10.5px] font-mono text-amber-400/60">البرامج المرتبطة:</span>
                    {st.shows.map((showName) => (
                      <span
                        key={showName}
                        className="px-2 py-0.5 rounded text-[10px] bg-[#251b14] text-amber-200/90 border border-[#3d2f22]"
                      >
                        {showName}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tune In Button */}
                <button
                  onClick={() => {
                    soundEffects.playMechanicalKey();
                    soundEffects.pulseTuningStatic(260, 0.2);
                    onSelectStationAndTune(st);
                    onClose();
                  }}
                  className="sm:self-center shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors cursor-pointer whitespace-nowrap active:scale-95"
                >
                  <Radio className="w-3.5 h-3.5" />
                  <span>موالفة هذه المحطة</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
