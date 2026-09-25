import React, { useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface VolumeKnobProps {
  volume: number;
  isMuted: boolean;
  isPoweredOn: boolean;
  onVolumeChange: (vol: number) => void;
  onToggleMute: () => void;
}

export const VolumeKnob: React.FC<VolumeKnobProps> = ({
  volume,
  isMuted,
  isPoweredOn,
  onVolumeChange,
  onToggleMute,
}) => {
  const knobRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startVol, setStartVol] = useState(volume);

  const effectiveVol = isMuted ? 0 : volume;
  const rotationAngle = -135 + (effectiveVol / 100) * 270;

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPoweredOn) return;
    setIsDragging(true);
    setStartY(e.clientY);
    setStartVol(volume);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !isPoweredOn) return;
    const deltaY = startY - e.clientY;
    const volDelta = (deltaY / 120) * 100;
    const nextVol = Math.round(Math.max(0, Math.min(100, startVol + volDelta)));
    onVolumeChange(nextVol);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!isPoweredOn) return;
    e.preventDefault();
    const delta = e.deltaY < 0 ? 5 : -5;
    const nextVol = Math.max(0, Math.min(100, volume + delta));
    onVolumeChange(nextVol);
  };

  return (
    <div className="flex flex-col items-center select-none">
      <div className="text-[10px] font-mono font-bold tracking-widest text-rose-400 uppercase mb-1">
        مستوى الصوت · VOLUME
      </div>

      <div className="flex items-center gap-1.5 sm:gap-2">
        <button
          onClick={onToggleMute}
          disabled={!isPoweredOn}
          className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
            isMuted
              ? 'bg-rose-950/80 border-[#ce1126] text-[#ff2a5f]'
              : 'bg-[#121622] border-[#242d40] hover:border-[#ce1126] text-slate-300 hover:text-white'
          } disabled:opacity-30`}
          title={isMuted ? 'إلغاء كتم الصوت' : 'كتم الصوت'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>

        <div
          ref={knobRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onWheel={handleWheel}
          className={`relative w-18 h-18 sm:w-20 sm:h-20 rounded-full knurled-knob border-2 border-[#475569] p-1.5 cursor-grab active:cursor-grabbing transition-transform ${
            !isPoweredOn ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <div className="w-full h-full rounded-full knurled-edge flex items-center justify-center p-1.5 shadow-inner">
            <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#0b101b] border border-[#334155] flex items-center justify-center shadow-lg">
              <div
                className="absolute inset-0 flex items-start justify-center pt-1 transition-transform duration-75 ease-out pointer-events-none"
                style={{
                  transform: `rotate(${rotationAngle}deg)`,
                }}
              >
                <div className="w-1.5 h-3 rounded-full bg-[#ce1126] shadow-[0_0_8px_#ce1126]" />
              </div>

              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#64748b] via-[#f1f5f9] to-[#94a3b8] border border-white/60 shadow-md flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0f172a]" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-7 h-7 flex items-center justify-center font-mono text-[9px] text-slate-400">
          MAX
        </div>
      </div>

      <div className="mt-1 text-[11px] font-mono font-bold text-rose-400 tracking-wider">
        {isMuted ? 'MUTED' : `${volume}%`}
      </div>
    </div>
  );
};
