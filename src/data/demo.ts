export interface DemoCard {
  id: string;
  title: string;
  description: string;
  detail: string;
  accent: string;
}

export const demoCards: DemoCard[] = [
  {
    id: 'spark',
    title: '灵感速记',
    description: '把一闪而过的想法收进卡片。',
    detail: '这是年轻风格演示卡片：以后可以放专题入口、作品集，或者任何想让人一眼看到的内容。',
    accent: 'coral',
  },
  {
    id: 'playlist',
    title: '最近在听',
    description: '记录循环播放的那几首歌。',
    detail: '演示内容：这里可以放歌单、播客或书影音清单，点开卡片就能看到详细列表。',
    accent: 'amber',
  },
  {
    id: 'build',
    title: '正在构建',
    description: '把进行中的小项目摆出来。',
    detail: '演示内容：适合展示 side project 的进展、截图和链接，后续可以替换成真实项目。',
    accent: 'green',
  },
  {
    id: 'notes',
    title: '随手笔记',
    description: '不整理就很舒服的碎片记录。',
    detail: '演示内容：这里可以放短篇随笔、摘抄或灵感碎片，之后再决定它的最终形态。',
    accent: 'blue',
  },
  {
    id: 'travel',
    title: '想去的地方',
    description: '给下一次出发留个位置。',
    detail: '演示内容：可以放旅行计划、城市清单或照片集，用来验证卡片展开后的阅读体验。',
    accent: 'violet',
  },
];
