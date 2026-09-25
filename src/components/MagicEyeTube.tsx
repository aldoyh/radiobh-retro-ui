import React from 'react';

interface MagicEyeTubeProps {
  isPoweredOn: boolean;
  tuningOffset: number; // 0 is perfect lock, >0 is detuned
  isLocked: boolean;
}

export const MagicEyeTube: React.FC<MagicEyeTubeProps> = ({
  isPoweredOn,
  tuningOffset,
  isLocked,
}) => {
  // Gap width in center: 0% when locked, up to 70% when completely detuned
  const normalizedGap = isPoweredOn
    ? Math.min(70, Math.max(0, tuningOffset * 60))
    : 100;

  return (
    <div className="relative flex flex-col items-center select-none">
      <div className="text-[7.5px] font-bold text-amber-300/60 uppercase font-mono tracking-wider mb-1">
        صمام الضبط (EM84)
      </div>

      {/* Tube Glass Bezel */}
      <div className="relative w-24 h-5 rounded-full bg-[#0a0f0a] border border-[#2d3a2d] p-0.5 shadow-inner overflow-hidden flex items-center justify-center">
        {/* Phosphor glow backdrop */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
            isPoweredOn ? 'opacity-100 bg-[#052b0f]/80' : 'opacity-0'
          }`}
        />

        {/* Green Phosphor Bars */}
        <div className="relative w-full h-full flex items-center justify-between px-1 z-10">
          {/* Left phosphor wing */}
          <div
            className="h-2.5 rounded-l-sm bg-gradient-to-r from-emerald-500 to-green-400 shadow-[0_0_8px_#22c55e] transition-all duration-150"
            style={{
              width: isPoweredOn ? `${(100 - normalizedGap) / 2}%` : '0%',
              opacity: isPoweredOn ? 0.95 : 0.1,
            }}
          />

          {/* Center gap shadow */}
          <div
            className="h-3 bg-black/80 transition-all duration-150"
            style={{
              width: `${normalizedGap}%`,
            }}
          />

          {/* Right phosphor wing */}
          <div
            className="h-2.5 rounded-r-sm bg-gradient-to-l from-emerald-500 to-green-400 shadow-[0_0_8px_#22c55e] transition-all duration-150"
            style={{
              width: isPoweredOn ? `${(100 - normalizedGap) / 2}%` : '0%',
              opacity: isPoweredOn ? 0.95 : 0.1,
            }}
          />
        </div>

        {/* Tube Glass Reflection */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 rounded-t-full pointer-events-none z-20" />
      </div>

      <div className="mt-0.5 text-[8px] font-mono font-bold tracking-widest text-emerald-400/80">
        {isPoweredOn ? (isLocked ? '● TUNED' : '○ SEEKING') : 'OFF'}
      </div>
    </div>
  );
};
