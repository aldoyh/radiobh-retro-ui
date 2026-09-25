import React, { useRef, useCallback, useState } from 'react';
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

  const freqToPercent = useCallback(
    (freq: number) => {
      const clamped = Math.max(minFreq, Math.min(maxFreq, freq));
      return ((clamped - minFreq) / range) * 100;
    },
    [minFreq, maxFreq, range]
  );

  const clientXToFreq = useCallback(
    (clientX: number) => {
      if (!dialRef.current) return currentFrequency;
      const rect = dialRef.current.getBoundingClientRect();
      const clickX = clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      const rawFreq = minFreq + pct * range;
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

  const tickMarks: { freq: number; isMajor: boolean }[] = [];
  for (let f = minFreq; f <= maxFreq; f += 0.5) {
    const isMajor = Math.round(f) === f && f % 2 === 0;
    tickMarks.push({ freq: Math.round(f * 10) / 10, isMajor });
  }

  const needlePercent = freqToPercent(currentFrequency);

  return (
    <div className="relative w-full rounded-lg border-2 border-[#242d40] bg-[#090c12] p-2 sm:p-3 shadow-2xl select-none">
      {/* Dial Bezel & Radio Bahrain Illuminated Studio Dial Glass */}
      <div
        ref={dialRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`relative w-full h-36 sm:h-44 rounded-md border border-[#1d2536] overflow-hidden cursor-ew-resize transition-all duration-700 ${
          isPoweredOn ? 'dial-glass-active' : 'dial-glass'
        }`}
      >
        {/* Broadcast lighting gradient with subtle Bahrain red aura */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
            isPoweredOn ? 'opacity-100' : 'opacity-20'
          }`}
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 50% 20%, rgba(206, 17, 38, 0.16) 0%, rgba(245, 158, 11, 0.08) 50%, transparent 100%),
              linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 40%, rgba(0,0,0,0.75) 100%)
            `,
          }}
        />

        {/* Top Header Plate inside Glass */}
        <div className="relative z-10 flex items-center justify-between px-3 pt-2 text-[10px] sm:text-xs font-mono tracking-widest text-slate-300 uppercase">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#ce1126] shadow-[0_0_8px_#ce1126]" />
            <span className="font-bold text-white tracking-wider">موجات إذاعة البحرين الموضوعية</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-rose-400 font-bold">FM BROADCAST SPECTRUM</span>
            <span className="text-slate-400">88.0 – 108.0 MHz</span>
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
                    isActive ? 'scale-105 z-20' : 'opacity-80 hover:opacity-100 z-10'
                  }`}
                  style={{ left: `${pct}%` }}
                >
                  {/* Category Pill / Tag on Dial */}
                  <span
                    className={`px-1.5 py-0.5 rounded text-[8px] sm:text-[9.5px] font-bold font-mono tracking-tight whitespace-nowrap transition-all border ${
                      isActive
                        ? 'bg-[#ce1126] text-white border-[#ff477e] shadow-[0_0_12px_rgba(206,17,38,0.7)]'
                        : 'bg-[#121622]/95 text-slate-200 border-[#242d40] group-hover:border-[#ce1126] group-hover:text-white'
                    }`}
                  >
                    {st.shortName}
                  </span>

                  {/* Indicator Dot */}
                  <span
                    className={`w-1.5 h-1.5 rounded-full mt-1 transition-all ${
                      isActive
                        ? 'bg-[#ff2a5f] shadow-[0_0_8px_#ff2a5f]'
                        : 'bg-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Graduated Scale (Frequency Ticks & Numbers) */}
        <div className="relative z-10 w-full px-2 sm:px-4 mt-1">
          <div className="relative h-12 w-full border-t border-[#202738] pt-1">
            {tickMarks.map((tick, idx) => {
              const pct = freqToPercent(tick.freq);
              return (
                <div
                  key={idx}
                  className="absolute -translate-x-1/2 flex flex-col items-center pointer-events-none"
                  style={{ left: `${pct}%` }}
                >
                  <div
                    className={`${
                      tick.isMajor
                        ? 'h-3.5 w-[1.5px] bg-slate-200 shadow-[0_0_4px_rgba(255,255,255,0.7)]'
                        : 'h-2 w-[1px] bg-slate-600'
                    }`}
                  />
                  {tick.isMajor && (
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold text-slate-300 mt-0.5">
                      {tick.freq}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bahrain Royal Crimson Tuning Needle */}
        <div
          className="absolute top-0 bottom-0 w-1 pointer-events-none z-30 transition-all duration-75 ease-out"
          style={{
            left: `${needlePercent}%`,
            transform: 'translateX(-50%)',
          }}
        >
          {/* Top Indicator Triangle */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-[#ff2a5f] shadow-[0_0_8px_#ff2a5f]" />

          {/* Wire Needle */}
          <div
            className={`w-[2px] h-full mx-auto transition-opacity duration-300 ${
              isPoweredOn ? 'tuning-needle opacity-100' : 'bg-red-950/60 opacity-30'
            }`}
          />

          {/* Bottom Needle Glow dot */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#ce1126] shadow-[0_0_8px_#ce1126]" />
        </div>

        {/* Studio Glass Glare */}
        <div className="absolute inset-0 pointer-events-none z-30 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none z-30" />
      </div>

      {/* Under-Dial Status Strip */}
      <div className="mt-2 flex items-center justify-between px-1 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="font-mono text-rose-400 font-bold">
            {currentFrequency.toFixed(1)} MHz
          </span>
          <span className="text-slate-600">·</span>
          <span className="truncate max-w-[200px] sm:max-w-xs font-semibold text-white">
            {stations.find((s) => s.id === activeStationId)?.name || 'موجة إذاعية'}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-slate-400">
          <span>اسحب المؤشر أو حرّك بكرة التردد</span>
        </div>
      </div>
    </div>
  );
};
