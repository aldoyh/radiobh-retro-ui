import React, { useRef, useCallback, useState, useEffect } from 'react';
import { RadioStation } from '../types/radio';
import { soundEffects } from '../services/soundEffects';

interface FrequencyDialProps {
  stations: RadioStation[];
  currentFrequency: number;
  activeStationId: string;
  isPoweredOn: boolean;
  onFrequencyChange: (newFreq: number, triggerSound?: boolean) => void;
  onSelectStation: (station: RadioStation) => void;
}

export const FrequencyDial: React.FC<FrequencyDialProps> = ({
  stations,
  currentFrequency,
  activeStationId,
  isPoweredOn,
  onFrequencyChange,
  onSelectStation,
}) => {
  const dialRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const minFreq = 88.0;
  const maxFreq = 108.0;
  const range = maxFreq - minFreq;

  // Convert frequency to percentage (0% to 100%)
  const freqToPercent = useCallback(
    (freq: number) => {
      const clamped = Math.max(minFreq, Math.min(maxFreq, freq));
      return ((clamped - minFreq) / range) * 100;
    },
    [minFreq, maxFreq, range]
  );

  // Convert click/drag clientX to frequency
  const clientXToFreq = useCallback(
    (clientX: number) => {
      if (!dialRef.current) return currentFrequency;
      const rect = dialRef.current.getBoundingClientRect();
      const clickX = clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      const rawFreq = minFreq + pct * range;
      // Round to 1 decimal place (e.g. 90.4)
      return Math.round(rawFreq * 10) / 10;
    },
    [minFreq, range, currentFrequency]
  );

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPoweredOn) return;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    const newFreq = clientXToFreq(e.clientX);
    soundEffects.pulseTuningStatic(200, 0.15);
    onFrequencyChange(newFreq, true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !isPoweredOn) return;
    const newFreq = clientXToFreq(e.clientX);
    if (Math.abs(newFreq - currentFrequency) >= 0.1) {
      soundEffects.playDialTick();
      onFrequencyChange(newFreq, false);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
      soundEffects.pulseTuningStatic(180, 0.12);
    }
  };

  // Generate frequency tick marks every 0.5 MHz
  const tickMarks: { freq: number; isMajor: boolean }[] = [];
  for (let f = minFreq; f <= maxFreq; f += 0.5) {
    const isMajor = Math.round(f) === f && f % 2 === 0;
    tickMarks.push({ freq: Math.round(f * 10) / 10, isMajor });
  }

  const needlePercent = freqToPercent(currentFrequency);

  return (
    <div className="relative w-full rounded-md border-2 border-[#4a3a2d] bg-[#120d09] p-2 sm:p-3 shadow-2xl select-none">
      {/* Dial Bezel and Amber Backlit Chamber */}
      <div
        ref={dialRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`relative w-full h-36 sm:h-44 rounded border border-amber-950/60 overflow-hidden cursor-ew-resize transition-all duration-700 ${
          isPoweredOn ? 'dial-glass-active' : 'dial-glass'
        }`}
      >
        {/* Vintage Analog Dial Background Grid and Glow */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
            isPoweredOn ? 'opacity-100' : 'opacity-20'
          }`}
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 50% 30%, rgba(245, 158, 11, 0.22) 0%, rgba(180, 83, 9, 0.10) 60%, transparent 100%),
              linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 40%, rgba(0,0,0,0.6) 100%)
            `,
          }}
        />

        {/* Top Header Plate inside Glass: Frequency Band & Title */}
        <div className="relative z-10 flex items-center justify-between px-3 pt-2 text-[10px] sm:text-xs font-mono tracking-widest text-amber-200/80 uppercase">
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_6px_#f59e0b]" />
            <span className="font-bold">موجات إذاعة البحرين الموضوعية</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-bold">FM THEMATIC BAND</span>
            <span className="text-amber-200/50">88.0 – 108.0 MHz</span>
          </div>
        </div>

        {/* Station Markers on Dial (Top Layer) */}
        <div className="relative z-10 w-full px-2 sm:px-4 mt-2 sm:mt-3">
          <div className="relative h-12 w-full">
            {stations.map((st) => {
              const pct = freqToPercent(st.frequency);
              const isActive = st.id === activeStationId;

              return (
                <button
                  key={st.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isPoweredOn) return;
                    soundEffects.playMechanicalKey();
                    soundEffects.pulseTuningStatic(260, 0.22);
                    onSelectStation(st);
                  }}
                  className={`absolute -translate-x-1/2 top-0 flex flex-col items-center group cursor-pointer transition-all ${
                    isActive ? 'scale-105 z-20' : 'opacity-75 hover:opacity-100 z-10'
                  }`}
                  style={{ left: `${pct}%` }}
                >
                  {/* Category Pill / Tag on Dial */}
                  <span
                    className={`px-1.5 py-0.5 rounded text-[8px] sm:text-[9.5px] font-bold font-mono tracking-tight whitespace-nowrap transition-all border ${
                      isActive
                        ? 'bg-amber-400 text-zinc-950 border-amber-300 shadow-[0_0_10px_#f59e0b]'
                        : 'bg-[#221a14]/90 text-amber-200/90 border-amber-900/60 group-hover:border-amber-500'
                    }`}
                  >
                    {st.shortName}
                  </span>

                  {/* Indicator Dot */}
                  <span
                    className={`w-1.5 h-1.5 rounded-full mt-1 transition-all ${
                      isActive
                        ? 'bg-amber-300 shadow-[0_0_8px_#fde047]'
                        : 'bg-amber-700/60'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Graduated Scale (Frequency Ticks & Numbers) */}
        <div className="relative z-10 w-full px-2 sm:px-4 mt-1">
          <div className="relative h-12 w-full border-t border-amber-900/50 pt-1">
            {tickMarks.map((tick, idx) => {
              const pct = freqToPercent(tick.freq);
              return (
                <div
                  key={idx}
                  className="absolute -translate-x-1/2 flex flex-col items-center pointer-events-none"
                  style={{ left: `${pct}%` }}
                >
                  {/* Tick line */}
                  <div
                    className={`${
                      tick.isMajor
                        ? 'h-3.5 w-[1.5px] bg-amber-400/90 shadow-[0_0_4px_rgba(245,158,11,0.5)]'
                        : 'h-2 w-[1px] bg-amber-600/50'
                    }`}
                  />
                  {/* Frequency label for major ticks */}
                  {tick.isMajor && (
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold text-amber-200/80 mt-0.5">
                      {tick.freq}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Glowing Red Needle (Sliding with currentFrequency) */}
        <div
          className="absolute top-0 bottom-0 w-1 pointer-events-none z-30 transition-all duration-75 ease-out"
          style={{
            left: `${needlePercent}%`,
            transform: 'translateX(-50%)',
          }}
        >
          {/* Top Indicator Triangle */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-red-500 shadow-[0_0_8px_#ef4444]" />

          {/* Glowing Red Wire Needle */}
          <div
            className={`w-[2px] h-full mx-auto transition-opacity duration-300 ${
              isPoweredOn ? 'tuning-needle opacity-100' : 'bg-red-950/60 opacity-40'
            }`}
          />

          {/* Bottom Needle Glow dot */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
        </div>

        {/* Vintage Glass Reflections and Optical Glare */}
        <div className="absolute inset-0 pointer-events-none z-30 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none z-30" />
      </div>

      {/* Under-Dial Status Strip */}
      <div className="mt-2 flex items-center justify-between px-1 text-xs text-amber-200/70">
        <div className="flex items-center gap-2">
          <span className="font-mono text-amber-400 font-bold">
            {currentFrequency.toFixed(1)} MHz
          </span>
          <span className="text-amber-600">·</span>
          <span className="truncate max-w-[200px] sm:max-w-xs font-semibold text-amber-200">
            {stations.find((s) => s.id === activeStationId)?.name || 'موجة إذاعية'}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-amber-400/60">
          <span>اسحب المؤشر أو حرّك بكرة التردد</span>
        </div>
      </div>
    </div>
  );
};
