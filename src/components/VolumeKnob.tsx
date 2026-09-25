import React, { useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface VolumeKnobProps {
  volume: number; // 0 to 100
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

  // Map volume (0 to 100) to rotation angle in degrees (-135deg to +135deg)
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
      <div className="text-[10px] font-mono font-bold tracking-widest text-amber-300/80 uppercase mb-1">
        مستوى الصوت · VOLUME
      </div>

      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Mute button */}
        <button
          onClick={onToggleMute}
          disabled={!isPoweredOn}
          className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
            isMuted
              ? 'bg-red-950/80 border-red-700 text-red-400'
              : 'bg-[#201914] border-[#3e3025] hover:border-amber-500/70 text-amber-300'
          } disabled:opacity-40`}
          title={isMuted ? 'إلغاء كتم الصوت' : 'كتم الصوت'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>

        {/* Rotary Knurled Knob Body */}
        <div
          ref={knobRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onWheel={handleWheel}
          className={`relative w-18 h-18 sm:w-20 sm:h-20 rounded-full knurled-knob border-2 border-[#544335] p-1.5 cursor-grab active:cursor-grabbing transition-transform ${
            !isPoweredOn ? 'opacity-60 cursor-not-allowed' : ''
          }`}
        >
          {/* Outer knurled ridges */}
          <div className="w-full h-full rounded-full knurled-edge flex items-center justify-center p-1.5 shadow-inner">
            <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-[#1f1915] via-[#2f251f] to-[#15110e] border border-[#483a2d] flex items-center justify-center shadow-lg">
              {/* Pointer */}
              <div
                className="absolute inset-0 flex items-start justify-center pt-1 transition-transform duration-75 ease-out pointer-events-none"
                style={{
                  transform: `rotate(${rotationAngle}deg)`,
                }}
              >
                <div className="w-1 h-3 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]" />
              </div>

              {/* Brass Center Cap */}
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#916b28] via-[#e2be73] to-[#734f19] border border-[#f0d898]/40 shadow-md flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#3d2c12]" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-7 h-7 flex items-center justify-center font-mono text-[9px] text-amber-500/70">
          MAX
        </div>
      </div>

      <div className="mt-1 text-[11px] font-mono font-bold text-amber-400/90 tracking-wider">
        {isMuted ? 'MUTED' : `${volume}%`}
      </div>
    </div>
  );
};
