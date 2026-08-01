export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  src: string;
  coverTone: string;
}

export const musicTracks: MusicTrack[] = [
  {
    id: 'morning-dew',
    title: '晨露',
    artist: '本地演示',
    src: '/music/morning-dew.wav',
    coverTone: 'mint',
  },
  {
    id: 'window-rain',
    title: '窗外的雨',
    artist: '本地演示',
    src: '/music/window-rain.wav',
    coverTone: 'sky',
  },
  {
    id: 'lazy-afternoon',
    title: '午后',
    artist: '本地演示',
    src: '/music/lazy-afternoon.wav',
    coverTone: 'amber',
  },
  {
    id: 'night-walk',
    title: '夜行',
    artist: '本地演示',
    src: '/music/night-walk.wav',
    coverTone: 'dusk',
  },
];
