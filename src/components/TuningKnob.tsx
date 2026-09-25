import React, { useRef, useState, useEffect } from 'react';
import { soundEffects } from '../services/soundEffects';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface TuningKnobProps {
  currentFrequency: number;
  minFreq?: number;
  maxFreq?: number;
  isPoweredOn: boolean;
  onFrequencyChange: (newFreq: number, triggerSound?: boolean) => void;
}

export const TuningKnob: React.FC<TuningKnobProps> = ({
  currentFrequency,
  minFreq = 88.0,
  maxFreq = 108.0,
  isPoweredOn,
  onFrequencyChange,
}) => {
  const knobRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startFreq, setStartFreq] = useState(currentFrequency);

  // Map frequency (88 to 108) to rotation angle in degrees (e.g. -135deg to +135deg)
  const range = maxFreq - minFreq;
  const rotationAngle = -135 + ((currentFrequency - minFreq) / range) * 270;

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPoweredOn) return;
    setIsDragging(true);
    setStartY(e.clientY);
    setStartFreq(currentFrequency);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !isPoweredOn) return;
    const deltaY = startY - e.clientY; // dragging up increases frequency
    const freqDelta = (deltaY / 150) * range * 0.4;
    let nextFreq = startFreq + freqDelta;
    nextFreq = Math.max(minFreq, Math.min(maxFreq, nextFreq));
    nextFreq = Math.round(nextFreq * 10) / 10;

    if (Math.abs(nextFreq - currentFrequency) >= 0.1) {
      soundEffects.playDialTick();
      onFrequencyChange(nextFreq, false);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
      soundEffects.pulseTuningStatic(180, 0.14);
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!isPoweredOn) return;
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.1 : -0.1;
    let nextFreq = Math.max(minFreq, Math.min(maxFreq, currentFrequency + delta));
    nextFreq = Math.round(nextFreq * 10) / 10;
    soundEffects.playDialTick();
    onFrequencyChange(nextFreq, false);
  };

  const stepFreq = (delta: number) => {
    if (!isPoweredOn) return;
    let nextFreq = Math.max(minFreq, Math.min(maxFreq, currentFrequency + delta));
    nextFreq = Math.round(nextFreq * 10) / 10;
    soundEffects.playDialTick();
    soundEffects.pulseTuningStatic(150, 0.12);
    onFrequencyChange(nextFreq, true);
  };

  return (
    <div className="flex flex-col items-center select-none">
      <div className="text-[10px] font-mono font-bold tracking-widest text-amber-300/80 uppercase mb-1">
        بكرة التردد · TUNING
      </div>

      {/* Knob Container with step buttons */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Step Down (Decrease MHz) */}
        <button
          onClick={() => stepFreq(-0.2)}
          disabled={!isPoweredOn}
          className="w-7 h-7 rounded-full bg-[#201914] border border-[#3e3025] hover:border-amber-500/70 text-amber-300 flex items-center justify-center active:scale-95 transition-all disabled:opacity-40 cursor-pointer"
          title="تردد أقل (-0.2 MHz)"
        >
          <ChevronRight className="w-4 h-4" />
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
            {/* Center faceplate */}
            <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-[#1f1915] via-[#2f251f] to-[#15110e] border border-[#483a2d] flex items-center justify-center shadow-lg">
              {/* Rotating pointer/notch */}
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

        {/* Step Up (Increase MHz) */}
        <button
          onClick={() => stepFreq(+0.2)}
          disabled={!isPoweredOn}
          className="w-7 h-7 rounded-full bg-[#201914] border border-[#3e3025] hover:border-amber-500/70 text-amber-300 flex items-center justify-center active:scale-95 transition-all disabled:opacity-40 cursor-pointer"
          title="تردد أعلى (+0.2 MHz)"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      {/* Numeric MHz Readout below Knob */}
      <div className="mt-1 text-[11px] font-mono font-bold text-amber-400/90 tracking-wider">
        {currentFrequency.toFixed(1)} MHz
      </div>
    </div>
  );
};
