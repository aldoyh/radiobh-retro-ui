import React, { useRef, useEffect } from 'react';
import { EpisodeItem } from '../types/radio';
import { ExternalLink, Tv, Radio as RadioIcon } from 'lucide-react';

interface EpisodePlayerProps {
  episode: EpisodeItem | null;
  isPlaying: boolean;
  isPoweredOn: boolean;
  volume: number;
  isMuted: boolean;
  screenMode: 'audio-tape' | 'crt-video';
  onToggleScreenMode: () => void;
  onEnded?: () => void;
}

export const EpisodePlayer: React.FC<EpisodePlayerProps> = ({
  episode,
  isPlaying,
  isPoweredOn,
  volume,
  isMuted,
  screenMode,
  onToggleScreenMode,
  onEnded,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // If power is OFF, do not load or play video
  const videoId = isPoweredOn && episode ? episode.videoId : '';

  const embedUrl = videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=${isPlaying ? 1 : 0}&enablejsapi=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`
    : '';

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        if (typeof event.data === 'string') {
          const data = JSON.parse(event.data);
          if (data.event === 'onStateChange' && data.info === 0) {
            onEnded?.();
          }
        }
      } catch {}
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onEnded]);

  return (
    <div className="w-full">
      {/* Screen Mode Switcher / Tab Header */}
      <div className="flex items-center justify-between px-1 mb-2">
        <span className="text-[10px] font-mono font-bold tracking-widest text-rose-400 uppercase">
          شاشة العرض الإذاعية · MONITOR
        </span>

        <div className="flex items-center gap-2">
          {/* Toggle Screen Mode */}
          <button
            onClick={onToggleScreenMode}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-200 bg-[#121622] border border-[#232b3e] hover:border-[#ce1126] rounded transition-colors cursor-pointer"
            title="التبديل بين شاشة التلفاز القديم ومشغل الشريط"
          >
            {screenMode === 'crt-video' ? (
              <>
                <RadioIcon className="w-3.5 h-3.5 text-rose-400" />
                <span>نمط بكرة الراديو</span>
              </>
            ) : (
              <>
                <Tv className="w-3.5 h-3.5 text-rose-400" />
                <span>شاشة البث المرئي</span>
              </>
            )}
          </button>

          {/* External link to official episode */}
          {episode && (
            <a
              href={`https://www.youtube.com/watch?v=${episode.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] text-rose-400 hover:text-white transition-colors"
              title="مشاهدة على منصة يوتيوب الرسمية"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">يوتيوب</span>
            </a>
          )}
        </div>
      </div>

      {/* CRT Screen Display */}
      {screenMode === 'crt-video' ? (
        <div className="relative w-full aspect-video max-h-[360px] bg-black rounded-lg border-4 border-[#1f2638] crt-screen shadow-2xl overflow-hidden">
          {isPoweredOn && videoId ? (
            <iframe
              ref={iframeRef}
              key={videoId}
              src={embedUrl}
              title={episode?.title || 'إذاعة البحرين'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0 relative z-20"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-400">
              <Tv className="w-12 h-12 mb-2 text-[#ce1126]/60 animate-pulse" />
              <p className="text-sm font-semibold text-white">
                {!isPoweredOn ? 'جهاز الراديو مغلق (OFF)' : 'لا توجد حلقة محددة حالياً'}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {!isPoweredOn ? 'شغّل مفتاح الطاقة للاستماع للبث' : 'حرّك بكرة التردد أو اختر محطة'}
              </p>
            </div>
          )}

          {/* CRT scanlines and curved glass reflection */}
          <div className="absolute inset-0 pointer-events-none z-30 bg-radial from-transparent via-black/20 to-black/60" />
        </div>
      ) : (
        /* Hidden iframe keeping audio alive when in Tape Mode */
        isPoweredOn && videoId && (
          <div className="sr-only">
            <iframe
              ref={iframeRef}
              key={videoId}
              src={embedUrl}
              title="Audio Stream"
              allow="autoplay"
              tabIndex={-1}
            />
          </div>
        )
      )}
    </div>
  );
};
