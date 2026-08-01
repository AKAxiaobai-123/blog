export interface LyricLine {
  time: number;
  text: string;
}

export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  src: string;
  coverTone: string;
  lyrics?: LyricLine[];
}

export const musicTracks: MusicTrack[] = [
  {
    id: 'morning-dew',
    title: '晨露',
    artist: '本地演示',
    src: '/music/morning-dew.wav',
    coverTone: 'mint',
    lyrics: [
      { time: 0, text: '晨光落在纸页上' },
      { time: 4, text: '把露水折进第一行' },
      { time: 8, text: '安静铺开的今天' },
      { time: 12, text: '等一个字慢慢变亮' },
    ],
  },
  {
    id: 'window-rain',
    title: '窗外的雨',
    artist: '本地演示',
    src: '/music/window-rain.wav',
    coverTone: 'sky',
    lyrics: [
      { time: 0, text: '雨点沿着窗玻璃' },
      { time: 5, text: '写下没人认领的句点' },
      { time: 10, text: '屋里的灯还亮着' },
      { time: 15, text: '等一个迟到的名字' },
    ],
  },
  {
    id: 'lazy-afternoon',
    title: '午后',
    artist: '本地演示',
    src: '/music/lazy-afternoon.wav',
    coverTone: 'amber',
    lyrics: [
      { time: 0, text: '午后风很慢' },
      { time: 4.5, text: '树影在桌上换班' },
      { time: 9, text: '杯子里的冰慢慢化' },
      { time: 13.5, text: '时间暂时不用追赶' },
    ],
  },
  {
    id: 'night-walk',
    title: '夜行',
    artist: '本地演示',
    src: '/music/night-walk.wav',
    coverTone: 'dusk',
    lyrics: [
      { time: 0, text: '路灯把影子拉长' },
      { time: 5.5, text: '脚步踩着旧节拍' },
      { time: 11, text: '夜风翻过街角' },
      { time: 16.5, text: '月亮替我说晚安' },
    ],
  },
  // 音频已由站点所有者提供；歌词请在取得授权后填入 lyrics。
  {
    id: 'zhang-jia-ming-he-wan-jun',
    title: '张家明和婉君',
    artist: '李荣浩',
    src: '/music/zhang-jia-ming-he-wan-jun.mp3',
    coverTone: 'rose',
    lyrics: [],
  },
];
