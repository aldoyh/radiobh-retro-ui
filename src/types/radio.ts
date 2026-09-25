import { RadioStation, ShowItem, EpisodeItem } from '../data/radioStations';

export type { RadioStation, ShowItem, EpisodeItem };

export type ScreenMode = 'audio-tape' | 'crt-video';

export interface RadioState {
  isPoweredOn: boolean;
  frequency: number; // e.g. 88.0 to 108.0
  activeStationId: string;
  volume: number; // 0 to 100
  isMuted: boolean;
  isPlaying: boolean;
  currentEpisode: EpisodeItem | null;
  history: EpisodeItem[];
  screenMode: ScreenMode;
  audioWarmthEnabled: boolean;
  playbackSpeed: number;
}
