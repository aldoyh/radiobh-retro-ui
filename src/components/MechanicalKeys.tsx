import React from 'react';
import { RadioStation } from '../types/radio';
import { soundEffects } from '../services/soundEffects';
import { Shuffle } from 'lucide-react';

interface MechanicalKeysProps {
  stations: RadioStation[];
  activeStationId: string;
  isPoweredOn: boolean;
  onSelectStation: (station: RadioStation) => void;
  onCasualRandomPick: () => void;
}

export const MechanicalKeys: React.FC<MechanicalKeysProps> = ({
  stations,
  activeStationId,
  isPoweredOn,
  onSelectStation,
  onCasualRandomPick,
}) => {
  return (
    <div className="w-full bg-[#1b1511] p-3 sm:p-4 rounded-md border border-[#3e3025] shadow-inner select-none">
      <div className="flex items-center justify-between mb-2 px-1">
        <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400/70 uppercase">
          أزرار المحطات الميكانيكية · PRESET KEYS
        </span>
        <span className="text-[9px] font-mono text-amber-500/50 hidden sm:inline">
          مفاتيح باكيليت كلاسيكية سريعة
        </span>
      </div>

      {/* Grid / Row of Mechanical Preset Keys */}
      <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-11 gap-1.5 sm:gap-2">
        {stations.map((st, idx) => {
          const isActive = st.id === activeStationId;

          return (
            <button
              key={st.id}
              onClick={() => {
                if (!isPoweredOn) return;
                soundEffects.playMechanicalKey();
                soundEffects.pulseTuningStatic(240, 0.2);
                onSelectStation(st);
              }}
              disabled={!isPoweredOn}
              className={`relative flex flex-col items-center justify-between p-2 rounded transition-all duration-100 cursor-pointer ${
                isActive
                  ? 'bakelite-button-pressed border border-amber-500/70'
                  : 'bakelite-button border border-[#3d3126] hover:border-amber-800/80 active:translate-y-1'
              } ${!isPoweredOn ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {/* Jewel Indicator Lamp on Key */}
              <div
                className={`w-2 h-2 rounded-full mb-1 transition-all ${
                  isActive && isPoweredOn
                    ? 'bg-amber-400 shadow-[0_0_8px_#f59e0b]'
                    : 'bg-[#2f241a] border border-[#483726]'
                }`}
              />

              {/* Station Label */}
              <span className="text-[11px] font-bold text-amber-100 text-center leading-tight truncate w-full">
                {st.shortName}
              </span>

              {/* Station Frequency Subtext */}
              <span className="text-[8.5px] font-mono text-amber-400/60 mt-0.5">
                {st.frequency.toFixed(1)}
              </span>
            </button>
          );
        })}

        {/* 11th Key: Prominent "🎲 بث عشوائي / Casual Pick" Key */}
        <button
          onClick={() => {
            if (!isPoweredOn) return;
            soundEffects.playMechanicalKey();
            soundEffects.pulseTuningStatic(300, 0.25);
            onCasualRandomPick();
          }}
          disabled={!isPoweredOn}
          className={`relative col-span-2 sm:col-span-1 lg:col-span-1 flex flex-col items-center justify-between p-2 rounded transition-all duration-100 cursor-pointer ${
            !isPoweredOn ? 'opacity-50 cursor-not-allowed' : ''
          } bg-gradient-to-b from-[#b8860b] via-[#855e05] to-[#593e03] border border-amber-400/80 shadow-[0_4px_6px_rgba(0,0,0,0.6)] hover:brightness-110 active:translate-y-1`}
          title="التقاط حلقة عشوائية من برامج المحطة الحالية"
        >
          {/* Jewel Lamp */}
          <div className="w-2 h-2 rounded-full mb-1 bg-amber-300 shadow-[0_0_8px_#fde047]" />

          {/* Label */}
          <div className="flex items-center gap-1">
            <Shuffle className="w-3 h-3 text-amber-100" />
            <span className="text-[10px] font-bold text-amber-50 uppercase tracking-tight">
              عشوائي
            </span>
          </div>

          <span className="text-[8px] font-mono text-amber-200/80 mt-0.5">
            CASUAL
          </span>
        </button>
      </div>
    </div>
  );
};
