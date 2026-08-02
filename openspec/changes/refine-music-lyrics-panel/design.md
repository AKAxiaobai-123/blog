## Context

上一版实现把歌词行常驻在进度条上方并把歌词/进度条缩放，结果音乐条上下过高、交互方式与用户预期不符。用户明确要求：保持紧凑单行音乐条，用 `>` 标记控制歌词区展开/收起，而不是放大缩小。

实现约束：Astro 静态站点、无新增依赖、音乐条宽度保持 406px、顶栏导航与移动端无溢出。

## Goals / Non-Goals

**Goals:**

- 音乐条恢复 44px 紧凑单行布局，歌词行不常驻占高。
- `>` chevron 按钮控制歌词面板平滑展开/收起，默认收起。
- 歌词面板显示当前歌词行，随播放/拖拽更新，过长省略号截断。
- 无歌词、音频未就绪时显示清晰占位文案。
- `prefers-reduced-motion` 下直接切换。

**Non-Goals:**

- 不做歌词滚动、LRC 解析或完整歌词列表。
- 不做任何 scale 放大缩小交互。
- 不改变音乐条整体宽度与顶栏布局。

## Decisions

### 恢复紧凑单行

`.music-player` 固定 `height: 44px`，去掉常驻歌词行；封面、标题、控制键、进度条与 chevron 按钮在同一行，回到歌词功能之前的紧凑形态。

### chevron 展开/收起歌词面板

右侧新增 `>` chevron 按钮，点击切换根容器 `is-expanded`。歌词面板 `position: absolute` 悬浮在音乐条下方，用 `max-height: 0 → 5rem`、`opacity`、`translateY` 做平滑过渡；默认收起时对页面高度零影响。

### 歌词面板内容

面板内只显示当前歌词单行，`white-space: nowrap` + `text-overflow: ellipsis`；无歌词时脚本显示“暂无歌词”，音频错误时显示“音频待补充”。

### 无障碍与减少动效

chevron 带 `aria-expanded`、`aria-controls` 与可聚焦按钮；`prefers-reduced-motion` 下关闭面板与 chevron 的过渡。

## Risks / Trade-offs

- 悬浮面板可能覆盖下方内容 → 面板使用阴影与高 z-index，且默认收起。
- 面板高度过大 → 只显示单行歌词，展开态高度控制在约 50px。
- 用户仍可能希望整页歌词 → 本期不做，保持单行折叠面板。

## Migration Plan

按顺序更新 `MusicPlayer.astro`（紧凑结构 + chevron + 面板）、`global.css`（布局与过渡）、`tasks.md`，执行 `npm run build` 并验证桌面、移动端、暗色、无脚本与减少动效，随后提交并推送 `dev`。回滚方式：还原音乐条组件与样式提交。

## Open Questions

- 后续是否需要把面板扩展为多行歌词或歌词列表（本期只做单行）。
