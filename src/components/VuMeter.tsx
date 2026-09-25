import React from 'react';

interface VuMeterProps {
  label: string;
  subLabel?: string;
  value: number; // 0 to 100
  isPoweredOn: boolean;
}

export const VuMeter: React.FC<VuMeterProps> = ({
  label,
  subLabel = "SIGNAL",
  value,
  isPoweredOn,
}) => {
  const clampedValue = Math.min(100, Math.max(0, isPoweredOn ? value : 0));
  const needleAngle = -42 + (clampedValue / 100) * 84;

  return (
    <div className="relative w-28 sm:w-32 h-18 sm:h-20 bg-[#090c12] rounded-lg border border-[#202738] p-1.5 shadow-inner overflow-hidden select-none">
      {/* Studio dial backlight */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
          isPoweredOn
            ? 'opacity-100 bg-radial from-amber-400/15 via-rose-500/10 to-transparent'
            : 'opacity-0'
        }`}
      />

      {/* Meter Face */}
      <div className="relative w-full h-full bg-[#f8fafc] rounded-[4px] border border-[#cbd5e1] shadow-inner flex flex-col items-center justify-between p-1 overflow-hidden">
        {/* Scale markings */}
        <div className="w-full flex justify-between px-2 pt-0.5 text-[8px] font-mono text-[#0f172a] font-bold tracking-tighter">
          <span>0</span>
          <span>20</span>
          <span>50</span>
          <span>70</span>
          <span className="text-[#ce1126] font-bold">100</span>
        </div>

        {/* Curved scale line arc (SVG) */}
        <svg
          className="absolute top-3 left-0 w-full h-8 pointer-events-none"
          viewBox="0 0 100 40"
        >
          {/* Black safe zone arc */}
          <path
            d="M 12 32 A 40 40 0 0 1 70 14"
            fill="none"
            stroke="#0f172a"
            strokeWidth="1.2"
            strokeDasharray="2, 1.5"
          />
          {/* Red peak zone arc */}
          <path
            d="M 70 14 A 40 40 0 0 1 88 28"
            fill="none"
            stroke="#ce1126"
            strokeWidth="2"
          />
        </svg>

        {/* Pivot and Needle */}
        <div
          className="absolute bottom-[-6px] left-1/2 w-0.5 h-12 origin-bottom transition-transform duration-150 ease-out z-10"
          style={{
            transform: `translateX(-50%) rotate(${needleAngle}deg)`,
          }}
        >
          <div className="w-[1.5px] h-full bg-gradient-to-t from-[#0f172a] via-[#1e293b] to-[#ce1126] shadow-[0_0_2px_rgba(0,0,0,0.8)]" />
        </div>

        {/* Pivot Hub */}
        <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-t from-[#0f172a] to-[#334155] border border-[#64748b] shadow-md z-20" />

        {/* Meter Labels */}
        <div className="w-full flex items-center justify-between z-10 px-1 mt-auto">
          <span className="text-[7.5px] font-bold text-[#0f172a] tracking-wider uppercase font-mono">
            {label}
          </span>
          <span className="text-[6.5px] font-bold text-[#64748b] tracking-widest uppercase font-mono">
            {subLabel}
          </span>
        </div>
      </div>
    </div>
  );
};
