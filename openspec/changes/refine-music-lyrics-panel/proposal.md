## Why

上一版把歌词行常驻在进度条上方，并把歌词与进度条做“放大缩小”缩放，导致音乐条过高且交互不符合预期。用户希望音乐条恢复紧凑单行，用 `>` 标记控制歌词区展开/收起，歌词面板默认不占高度。

## What Changes

- 音乐条恢复 44px 紧凑单行布局，移除常驻歌词行与“放大缩小”交互。
- 新增 `>` chevron 按钮：默认收起歌词面板，点击平滑展开，再点收起。
- 歌词面板悬浮在音乐条下方，只显示当前歌词行，面板高度保持克制（约 50px 内）。
- 歌词仍随播放与拖拽更新；无歌词显示“暂无歌词”，音频错误显示“音频待补充”。
- 音乐条整体宽度保持 406px，`prefers-reduced-motion` 下不播放过渡动画。

## Capabilities

### New Capabilities

无。

### Modified Capabilities
- `site-music-player`: 歌词显示改为可收起的悬浮面板，并新增 `>` 展开/收起开关。

## Impact

- 更新 `src/components/MusicPlayer.astro`：恢复紧凑布局，新增 chevron 按钮与歌词面板。
- 更新 `src/styles/global.css`：44px 单行、面板过渡与减少动效降级。
- 保持 `src/data/music.ts` 歌词数据结构不变。
- 不引入新增依赖，不改变构建方式。
