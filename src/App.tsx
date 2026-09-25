/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { RADIO_STATIONS, ALL_SHOWS, ALL_EPISODES, EpisodeItem, RadioStation, ShowItem } from './data/radioStations';
import { ScreenMode } from './types/radio';
import { HeaderTopBar } from './components/HeaderTopBar';
import { RadioCabinet } from './components/RadioCabinet';
import { ThematicConnectionDrawer } from './components/ThematicConnectionDrawer';
import { SearchModal } from './components/SearchModal';
import { AllShowsCatalogModal } from './components/AllShowsCatalogModal';
import { ThematicGuideModal } from './components/ThematicGuideModal';
import { RecentHistory } from './components/RecentHistory';
import { soundEffects } from './services/soundEffects';
import { Sparkles, Radio as RadioIcon, Shuffle, ChevronLeft, Disc3, ShieldCheck } from 'lucide-react';

export default function App() {
  const radioRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  // Radio master state
  const [isPoweredOn, setIsPoweredOn] = useState<boolean>(true);
  const [currentFrequency, setCurrentFrequency] = useState<number>(88.0);
  const [activeStationId, setActiveStationId] = useState<string>('gulf-27-mondial');
  const [volume, setVolume] = useState<number>(80);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [screenMode, setScreenMode] = useState<ScreenMode>('audio-tape');
  const [audioWarmthEnabled, setAudioWarmthEnabled] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isThematicGuideOpen, setIsThematicGuideOpen] = useState(false);

  // Active Station Object
  const activeStation = useMemo(() => {
    return RADIO_STATIONS.find((s) => s.id === activeStationId) || RADIO_STATIONS[0];
  }, [activeStationId]);

  // Episodes for active station
  const activeStationEpisodes = useMemo(() => {
    return ALL_EPISODES.filter((ep) => {
      if (activeStation.shows.includes(ep.showTitle)) return true;
      const text = (ep.title + ' ' + ep.showTitle).toLowerCase();
      if (activeStation.id === 'gulf-27-mondial') {
        return /27|خليج|مونديال|كأس|مستطيل/i.test(text);
      }
      return false;
    });
  }, [activeStation]);

  // Current episode state
  const [currentEpisode, setCurrentEpisode] = useState<EpisodeItem | null>(() => {
    // Pick an episode from Gulf 27 (e.g. Outside the Green Rectangle or Mondial 27)
    const gulfEps = ALL_EPISODES.filter((e) =>
      e.showTitle.includes('المستطيل الأخضر') || e.showTitle.includes('مونديال 2026')
    );
    return gulfEps.length > 0 ? gulfEps[0] : ALL_EPISODES[0];
  });

  // Recent History tracking (last 5 episodes played)
  const [recentHistory, setRecentHistory] = useState<EpisodeItem[]>(() => {
    try {
      const saved = localStorage.getItem('radio_bahrain_recent_history');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed.slice(0, 5);
      }
    } catch {}
    // Initial fallback: seed with current episode if exists
    const initialSeed = ALL_EPISODES.filter((e) =>
      e.showTitle.includes('المستطيل الأخضر') || e.showTitle.includes('مونديال 2026')
    ).slice(0, 3);
    return initialSeed;
  });

  // Record episode into recent history whenever currentEpisode changes and radio is powered
  useEffect(() => {
    if (!currentEpisode) return;
    setRecentHistory((prev) => {
      // Remove any existing instance of this episode
      const filtered = prev.filter((item) => item.id !== currentEpisode.id && item.videoId !== currentEpisode.videoId);
      // Insert new episode at the very beginning, max 5 items
      const updated = [currentEpisode, ...filtered].slice(0, 5);
      try {
        localStorage.setItem('radio_bahrain_recent_history', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  }, [currentEpisode]);

  const handleClearHistory = useCallback(() => {
    setRecentHistory([]);
    try {
      localStorage.removeItem('radio_bahrain_recent_history');
    } catch {}
  }, []);

  // Return to previous content from history
  const handlePlayFromHistory = useCallback((episode: EpisodeItem) => {
    // Locate the station hosting this episode
    const matchedStation =
      RADIO_STATIONS.find((st) => st.shows.includes(episode.showTitle)) || RADIO_STATIONS[0];
    setActiveStationId(matchedStation.id);
    setCurrentFrequency(matchedStation.frequency);
    setCurrentEpisode(episode);
    setIsPoweredOn(true);
    setIsPlaying(true);
    radioRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Track episode index inside current station
  const currentEpisodeIndex = useMemo(() => {
    if (!currentEpisode) return 0;
    const idx = activeStationEpisodes.findIndex((e) => e.id === currentEpisode.id);
    return idx >= 0 ? idx : 0;
  }, [currentEpisode, activeStationEpisodes]);

  // Handler: Select a Station directly
  const handleSelectStation = useCallback(
    (station: RadioStation) => {
      setActiveStationId(station.id);
      setCurrentFrequency(station.frequency);

      // Find episodes for this station and pick one
      const stationEps = ALL_EPISODES.filter((ep) => {
        if (station.shows.includes(ep.showTitle)) return true;
        const text = (ep.title + ' ' + ep.showTitle).toLowerCase();
        if (station.id === 'gulf-27-mondial') return /27|خليج|مونديال|كأس|مستطيل/i.test(text);
        return false;
      });

      if (stationEps.length > 0) {
        // Pick random casual episode from this station
        const randEp = stationEps[Math.floor(Math.random() * stationEps.length)];
        setCurrentEpisode(randEp);
        setIsPlaying(true);
      }
    },
    []
  );

  // Handler: Frequency changes (via dial drag, knob rotation, step keys)
  const handleFrequencyChange = useCallback(
    (newFreq: number, triggerSound: boolean = false) => {
      setCurrentFrequency(newFreq);

      // Find closest station
      let closestStation: RadioStation = RADIO_STATIONS[0];
      let minDiff = 999;
      RADIO_STATIONS.forEach((st) => {
        const diff = Math.abs(st.frequency - newFreq);
        if (diff < minDiff) {
          minDiff = diff;
          closestStation = st;
        }
      });

      // If tuned within snap range (0.35 MHz) of a station, lock onto it
      if (minDiff <= 0.35 && closestStation.id !== activeStationId) {
        setActiveStationId(closestStation.id);
        if (triggerSound) {
          soundEffects.pulseTuningStatic(180, 0.15);
        }

        // Pick a casual episode from that station if none or switching
        const eps = ALL_EPISODES.filter((ep) => closestStation.shows.includes(ep.showTitle));
        if (eps.length > 0) {
          const randEp = eps[Math.floor(Math.random() * eps.length)];
          setCurrentEpisode(randEp);
        }
      }
    },
    [activeStationId]
  );

  // Handler: Casual / Random Pick
  const handleCasualRandomPick = useCallback(() => {
    // Pick randomly among active station's episodes
    if (activeStationEpisodes.length > 0) {
      let nextIndex = Math.floor(Math.random() * activeStationEpisodes.length);
      // Try to avoid repeating same episode if more than 1 available
      if (activeStationEpisodes.length > 1 && currentEpisode) {
        let attempts = 0;
        while (activeStationEpisodes[nextIndex].id === currentEpisode.id && attempts < 5) {
          nextIndex = Math.floor(Math.random() * activeStationEpisodes.length);
          attempts++;
        }
      }
      setCurrentEpisode(activeStationEpisodes[nextIndex]);
      setIsPlaying(true);
    }
  }, [activeStationEpisodes, currentEpisode]);

  // Handler: Next episode in station
  const handleNextEpisode = useCallback(() => {
    if (activeStationEpisodes.length === 0) return;
    const nextIdx = (currentEpisodeIndex + 1) % activeStationEpisodes.length;
    setCurrentEpisode(activeStationEpisodes[nextIdx]);
    setIsPlaying(true);
  }, [activeStationEpisodes, currentEpisodeIndex]);

  // Handler: Prev episode in station
  const handlePrevEpisode = useCallback(() => {
    if (activeStationEpisodes.length === 0) return;
    const prevIdx =
      (currentEpisodeIndex - 1 + activeStationEpisodes.length) % activeStationEpisodes.length;
    setCurrentEpisode(activeStationEpisodes[prevIdx]);
    setIsPlaying(true);
  }, [activeStationEpisodes, currentEpisodeIndex]);

  // Handler: Power Toggle
  const handleTogglePower = () => {
    setIsPoweredOn((prev) => {
      const next = !prev;
      if (!next) {
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
      }
      return next;
    });
  };

  // Handler: Tune directly from search result
  const handleSelectEpisodeAndTune = (episode: EpisodeItem, station: RadioStation) => {
    setActiveStationId(station.id);
    setCurrentFrequency(station.frequency);
    setCurrentEpisode(episode);
    setIsPoweredOn(true);
    setIsPlaying(true);
    radioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handler: Tune directly from show catalog
  const handleSelectShowAndTune = (show: ShowItem, station: RadioStation) => {
    setActiveStationId(station.id);
    setCurrentFrequency(station.frequency);
    // Find first episode of this show
    const showEp = ALL_EPISODES.find((e) => e.showTitle === show.title);
    if (showEp) {
      setCurrentEpisode(showEp);
    }
    setIsPoweredOn(true);
    setIsPlaying(true);
    radioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToRadio = () => {
    radioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHistory = () => {
    historyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-[#f8fafc] flex flex-col font-cairo">
      {/* 1. Header Top Bar (Strict Top Bar Contract) */}
      <HeaderTopBar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCatalog={() => setIsCatalogOpen(true)}
        onOpenThematicGuide={() => setIsThematicGuideOpen(true)}
        onCasualRandomPick={handleCasualRandomPick}
        onScrollToRadio={scrollToRadio}
        onScrollToHistory={scrollToHistory}
      />

      {/* 2. Hero Headline & Editorial Context */}
      <section className="relative px-4 sm:px-6 pt-6 sm:pt-10 pb-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ce1126]/10 border border-[#ce1126]/30 text-rose-300 text-xs font-mono font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#ce1126]" />
          <span>منظومة الموالفة الموضوعية الذكية · THEMATIC VINTAGE RADIO</span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          جهاز راديو إذاعة البحرين الكلاسيكي
        </h1>

        <p className="mt-2.5 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          حيث لا تمثل الترددات أرقاماً عادية، بل بؤراً معرفية وموضوعية تربط 47 برنامجاً و810 حلقات
          مسجلة من بودكاست وبرامج إذاعة البحرين وفق خوارزميات الذكاء الاصطناعي.
        </p>
      </section>

      {/* 3. The Physical Vintage Radio Chassis ("The Belt" + Cabinet + Knobs + Gauges) */}
      <main ref={radioRef} className="flex-1 w-full max-w-7xl mx-auto px-2 sm:px-4">
        <RadioCabinet
          stations={RADIO_STATIONS}
          activeStation={activeStation}
          currentFrequency={currentFrequency}
          currentEpisode={currentEpisode}
          isPoweredOn={isPoweredOn}
          isPlaying={isPlaying}
          volume={volume}
          isMuted={isMuted}
          screenMode={screenMode}
          audioWarmthEnabled={audioWarmthEnabled}
          playbackSpeed={playbackSpeed}
          onTogglePower={handleTogglePower}
          onFrequencyChange={handleFrequencyChange}
          onSelectStation={handleSelectStation}
          onCasualRandomPick={handleCasualRandomPick}
          onTogglePlay={() => setIsPlaying((p) => !p)}
          onNextEpisode={handleNextEpisode}
          onPrevEpisode={handlePrevEpisode}
          onVolumeChange={setVolume}
          onToggleMute={() => setIsMuted((m) => !m)}
          onToggleScreenMode={() =>
            setScreenMode((m) => (m === 'audio-tape' ? 'crt-video' : 'audio-tape'))
          }
          onToggleAudioWarmth={() => setAudioWarmthEnabled((w) => !w)}
          onChangeSpeed={setPlaybackSpeed}
          onSelectEpisode={setCurrentEpisode}
        />

        {/* 4. AI Thematic Connection Drawer & Episode Grid */}
        <div className="max-w-5xl mx-auto px-2 sm:px-4 mt-6">
          <ThematicConnectionDrawer
            station={activeStation}
            allEpisodes={ALL_EPISODES}
            currentEpisodeId={currentEpisode?.id || null}
            isPlaying={isPlaying}
            onSelectEpisode={(ep) => {
              setCurrentEpisode(ep);
              setIsPlaying(true);
            }}
            onCasualRandomPick={handleCasualRandomPick}
          />
        </div>

        {/* 5. Station Frequencies Catalog Grid */}
        <section className="max-w-5xl mx-auto px-2 sm:px-4 mt-12 mb-16">
          <div className="flex items-center justify-between mb-4 border-b border-[#1f2638] pb-3">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <RadioIcon className="w-5 h-5 text-[#ce1126]" />
                <span>الموجات والترددات الموضوعية المتاحة (10 محطات)</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                انقر على أي محطة لموالفة تردد الراديو إليها والبدء بالبث
              </p>
            </div>

            <button
              onClick={() => setIsThematicGuideOpen(true)}
              className="text-xs font-semibold text-rose-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>دليل الذكاء الاصطناعي</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {RADIO_STATIONS.map((st) => {
              const isCurrent = st.id === activeStationId;

              return (
                <div
                  key={st.id}
                  onClick={() => {
                    soundEffects.playMechanicalKey();
                    soundEffects.pulseTuningStatic(240, 0.2);
                    handleSelectStation(st);
                    scrollToRadio();
                  }}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-[#182030] border-[#ce1126] shadow-md ring-1 ring-[#ce1126]/50'
                      : 'bg-[#0f141f] border-[#1f2638] hover:border-[#ce1126]/60 hover:bg-[#141a27]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#ce1126] text-white">
                        {st.frequencyDisplay}
                      </span>
                      <span className="text-xs font-mono font-bold text-rose-400">{st.shortName}</span>
                    </div>

                    <h4 className="text-sm font-bold text-white mb-1">{st.name}</h4>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {st.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#1b2232] flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono">
                      {st.episodeCount} حلقة · {st.showCount} برامج
                    </span>
                    <span className="font-semibold text-rose-400 flex items-center gap-1 group-hover:underline">
                      <span>موالفة</span>
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* 6. Footer with Recent History (Tracks last 5 episodes played) */}
      <footer ref={historyRef} className="w-full border-t border-[#1f2638] bg-[#07090e] text-xs text-slate-400">
        {/* Recent History Section */}
        <RecentHistory
          history={recentHistory}
          currentEpisodeId={currentEpisode?.id || null}
          isPlaying={isPlaying}
          stations={RADIO_STATIONS}
          onPlayEpisode={handlePlayFromHistory}
          onClearHistory={handleClearHistory}
        />

        {/* Footer Base Credits & Navigation */}
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <div className="flex items-center gap-2">
            <RadioIcon className="w-4 h-4 text-[#ce1126]" />
            <span className="font-bold text-white">إذاعة البحرين الكلاسيكية</span>
            <span>·</span>
            <span>بث ذكي لبودكاست وبرامج إذاعة مملكة البحرين</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono">
            <button
              onClick={() => setIsCatalogOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              47 برنامجاً
            </button>
            <span>·</span>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              810 حلقات
            </button>
            <span>·</span>
            <span>تحديث 2026</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        allEpisodes={ALL_EPISODES}
        stations={RADIO_STATIONS}
        onSelectEpisodeAndTune={handleSelectEpisodeAndTune}
      />

      <AllShowsCatalogModal
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
        shows={ALL_SHOWS}
        stations={RADIO_STATIONS}
        onSelectShowAndTune={handleSelectShowAndTune}
      />

      <ThematicGuideModal
        isOpen={isThematicGuideOpen}
        onClose={() => setIsThematicGuideOpen(false)}
        stations={RADIO_STATIONS}
        onSelectStationAndTune={(st) => {
          handleSelectStation(st);
          scrollToRadio();
        }}
      />
    </div>
  );
}
