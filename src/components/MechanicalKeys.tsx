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
    <div className="w-full bg-[#0d1017] p-3 sm:p-4 rounded-lg border border-[#202738] shadow-inner select-none">
      <div className="flex items-center justify-between mb-2 px-1">
        <span className="text-[10px] font-mono font-bold tracking-widest text-rose-400 uppercase">
          أزرار المحطات الميكانيكية · PRESET KEYS
        </span>
        <span className="text-[9px] font-mono text-slate-400 hidden sm:inline">
          مفاتيح باكيليت سريعة الموالفة
        </span>
      </div>

      {/* Grid of Preset Keys */}
      <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-11 gap-1.5 sm:gap-2">
        {stations.map((st) => {
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
              className={`relative flex flex-col items-center justify-between p-2 rounded-md transition-all duration-100 cursor-pointer ${
                isActive
                  ? 'bakelite-button-pressed border border-[#ce1126] ring-1 ring-[#ce1126]/50'
                  : 'bakelite-button border border-[#232b3d] hover:border-[#ce1126]/60 active:translate-y-1'
              } ${!isPoweredOn ? 'opacity-40 cursor-not-allowed' : ''}`}
            >
              {/* Jewel Indicator Lamp on Key */}
              <div
                className={`w-2 h-2 rounded-full mb-1 transition-all ${
                  isActive && isPoweredOn
                    ? 'bg-[#ce1126] shadow-[0_0_8px_#ce1126]'
                    : 'bg-[#161c28] border border-[#2a3449]'
                }`}
              />

              {/* Station Label */}
              <span className={`text-[11px] font-bold text-center leading-tight truncate w-full ${isActive ? 'text-white' : 'text-slate-300'}`}>
                {st.shortName}
              </span>

              {/* Station Frequency Subtext */}
              <span className="text-[8.5px] font-mono text-rose-400 mt-0.5">
                {st.frequency.toFixed(1)}
              </span>
            </button>
          );
        })}

        {/* 11th Key: Radio Bahrain Red "🎲 عشوائي / Casual Pick" Key */}
        <button
          onClick={() => {
            if (!isPoweredOn) return;
            soundEffects.playMechanicalKey();
            soundEffects.pulseTuningStatic(300, 0.25);
            onCasualRandomPick();
          }}
          disabled={!isPoweredOn}
          className={`relative col-span-2 sm:col-span-1 lg:col-span-1 flex flex-col items-center justify-between p-2 rounded-md transition-all duration-100 cursor-pointer ${
            !isPoweredOn ? 'opacity-40 cursor-not-allowed' : ''
          } bg-gradient-to-b from-[#ce1126] via-[#a61022] to-[#7a0016] border border-[#ff477e]/50 shadow-[0_4px_10px_rgba(206,17,38,0.4)] hover:brightness-110 active:translate-y-1`}
          title="التقاط حلقة عشوائية من برامج المحطة الحالية"
        >
          {/* Jewel Lamp */}
          <div className="w-2 h-2 rounded-full mb-1 bg-white shadow-[0_0_8px_#ffffff]" />

          {/* Label */}
          <div className="flex items-center gap-1">
            <Shuffle className="w-3 h-3 text-white" />
            <span className="text-[10px] font-bold text-white uppercase tracking-tight">
              عشوائي
            </span>
          </div>

          <span className="text-[8px] font-mono text-rose-200 mt-0.5 font-bold">
            CASUAL
          </span>
        </button>
      </div>
    </div>
  );
};
