## Why

站点目前是安静的阅读型博客，顶栏右侧只有主题切换，缺少一点“在场感”。用户希望参考 Firefly / HOYO-MiX 风格，在页面右上角加入一条轻量音乐条，边看文章边播放背景音乐。

## What Changes

- 新增顶栏音乐条，常驻页面右上角（主题切换按钮旁），所有页面统一可见。
- 音乐条包含：封面缩略图、歌曲标题、上一首/下一首、播放/暂停、可拖拽进度条与当前/总时长。
- 内置一组静态演示歌单，音频文件放在 `public/music/`，歌单数据集中在 `src/data/music.ts`，后续可直接替换为真实资源。
- 播放到末尾自动切到下一首；切换歌曲、进度跳转、播放状态在页面内通过原生 `<audio>` 实现，不引入新增运行时依赖。
- 视觉沿用现有设计令牌：绿松石强调色、毛玻璃、浅深双主题、紧凑圆角；移动端压缩为窄条，不遮挡导航且无横向溢出。
- 无脚本或降级场景：音乐条显示为静态列表信息，不破坏导航与正文可读性。

## Capabilities

### New Capabilities
- `site-music-player`: 页面右上角音乐条，支持歌单、播放/暂停、上下首切换与进度拖拽。

### Modified Capabilities

无。

## Impact

- 新增组件 `src/components/MusicPlayer.astro`，并在 `src/layouts/BaseLayout.astro` / `SiteHeader.astro` 接入。
- 新增歌单数据 `src/data/music.ts` 与音频资源目录 `public/music/`。
- 更新 `src/styles/global.css` 的音乐条样式与响应式布局。
- 不改动内容模型、构建方式或依赖；保持纯静态站点。
