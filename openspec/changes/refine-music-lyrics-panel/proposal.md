## Why

音乐条始终占用顶栏空间，且多次改版仍未满足预期。用户希望顶栏右上角只保留一个音乐图标，点击后弹出歌曲卡片（带动效），再点击收回，让音乐功能在不使用时完全隐藏。

## What Changes

- 顶栏右侧改为 44px 音符图标按钮，不再常驻音乐条。
- 点击图标弹出歌曲卡片：圆形封面、歌名/歌手、歌词行、进度条与时间、上一首/播放/下一首（三个按钮同尺寸）。
- 弹出带平滑动效（opacity + scale + translateY），点击图标、点击外部或按 Esc 收回。
- 播放/暂停、上下首、进度拖拽、歌词更新与状态恢复沿用现有实现。
- 无脚本降级：图标禁用，展示静态歌单信息。

## Capabilities

### New Capabilities

无。

### Modified Capabilities
- `site-music-player`: 音乐条改为右上角音乐图标弹窗卡片。

## Impact

- 更新 `src/components/MusicPlayer.astro`：图标触发按钮 + 弹出歌曲卡片。
- 更新 `src/components/SiteHeader.astro`：音乐图标置于顶栏右上角。
- 更新 `src/styles/global.css`：图标、弹窗布局、动效与减少动效降级。
- 保持 `src/data/music.ts` 数据与音频资源不变。
