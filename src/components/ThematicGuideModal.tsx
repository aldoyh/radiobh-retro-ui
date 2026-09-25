import React from 'react';
import { RadioStation } from '../types/radio';
import { Sparkles, X, Radio, CheckCircle2 } from 'lucide-react';
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
      <div className="relative w-full max-w-4xl max-h-[88vh] bg-[#0d1017] rounded-xl border border-[#232b3d] shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#1f2638] bg-[#121622]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#ce1126]/10 text-rose-400 border border-[#ce1126]/20">
              <Sparkles className="w-5 h-5 text-[#ce1126]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                منظومة الذكاء الاصطناعي لربط وتصنيف برامج إذاعة البحرين
              </h3>
              <p className="text-xs text-slate-400">
                كيف قمنا بتحويل 47 برنامجاً و810 حلقات إلى محطات إذاعية موضوعية مترابطة
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

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {/* Key Principle Card */}
          <div className="p-4 rounded-lg bg-[#121622] border border-[#242d40] text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div className="flex items-center gap-2 font-bold text-rose-300 mb-1.5 text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#ce1126]" />
              <span>فلسفة الموالفة الموضوعية (Thematic Frequencies)</span>
            </div>
            بدلاً من أن تمثل الترددات (88.0 إلى 108.0 MHz) مجرد أرقام موجات عشوائية، قمنا ببرمجة كل تردد كبؤرة معرفية مستقلة تجمع الحلقات المترابطة من برامج متعددة تحت مظلة إذاعة البحرين. فعند ضبط التردد على <strong className="text-rose-300">88.0 FM</strong>، يرتبط برنامج <em className="text-white">(خارج المستطيل الأخضر مع فايز السادة)</em> مباشرة ببرنامج <em className="text-white">(إف إم مونديال 2026)</em> وتغطيات <em className="text-white">(استوديو 27)</em>، مع إمكانية التقاط حلقة عشوائية أو الاستماع المتواصل.
          </div>

          {/* List of Stations and their cross-show links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
              المحطات والموجات الموضوعية المبرمجة بالذكاء الاصطناعي:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {stations.map((st) => (
                <div
                  key={st.id}
                  onClick={() => {
                    soundEffects.playMechanicalKey();
                    soundEffects.pulseTuningStatic(260, 0.2);
                    onSelectStationAndTune(st);
                    onClose();
                  }}
                  className="p-3.5 rounded-lg bg-[#121622] border border-[#202738] hover:border-[#ce1126]/60 hover:bg-[#161d2c] transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#ce1126] text-white">
                      {st.frequencyDisplay}
                    </span>
                    <span className="text-xs font-mono font-bold text-rose-400">{st.shortName}</span>
                  </div>

                  <h5 className="text-sm font-bold text-white group-hover:text-rose-200 transition-colors mb-1">
                    {st.name}
                  </h5>

                  <p className="text-xs text-slate-300 leading-relaxed mb-2">
                    {st.thematicExplanation}
                  </p>

                  <div className="pt-2 border-t border-[#1d2536] flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono text-[11px]">
                      {st.showCount} برامج · {st.episodeCount} حلقة
                    </span>
                    <span className="font-bold text-rose-400 group-hover:translate-x-[-2px] transition-transform">
                      موالفة المحطة ←
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
