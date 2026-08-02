## MODIFIED Requirements

### Requirement: 歌词显示
音乐条 SHALL 在进度条上方显示当前曲目的歌词行，并随播放进度更新；歌词行 SHALL 与进度条共享同一宽度与对齐网格，文本过长时 SHALL 以省略号截断而不改变音乐条宽度；曲目没有歌词数据或音频未就绪时 SHALL 显示对应提示文案。

#### Scenario: 播放时更新歌词
- **WHEN** 歌曲播放到某句歌词对应的时间点
- **THEN** 进度条上方显示该句歌词

#### Scenario: 歌词行布局
- **WHEN** 用户在任意宽度浏览音乐条
- **THEN** 歌词行占据进度条上方的完整右侧宽度
- **AND** 进度条延伸到时间文字左侧，无无效留白

#### Scenario: 歌词过长
- **WHEN** 当前歌词文本超过歌词行宽度
- **THEN** 歌词行以省略号截断显示
- **AND** 音乐条宽度与相邻控件不发生变化

#### Scenario: 无歌词曲目
- **WHEN** 当前曲目没有歌词数据
- **THEN** 歌词区域显示“暂无歌词”

#### Scenario: 音频未就绪
- **WHEN** 当前曲目音频文件不存在或加载失败
- **THEN** 歌词区域显示“音频待补充”，播放状态复位

## ADDED Requirements

### Requirement: 歌词与进度条缩放切换
音乐条 SHALL 提供展开按钮，点击后歌词行与进度条平滑缩放为展开形态，再次点击恢复紧凑形态；按钮 SHALL 支持键盘操作并同步 `aria-expanded` 状态。

#### Scenario: 展开歌词与进度
- **WHEN** 用户点击展开按钮
- **THEN** 歌词行与进度条平滑缩放为展开形态
- **AND** 按钮 `aria-expanded` 更新为 `true`

#### Scenario: 收起歌词与进度
- **WHEN** 用户再次点击展开按钮
- **THEN** 歌词行与进度条恢复紧凑形态
- **AND** 按钮 `aria-expanded` 更新为 `false`

#### Scenario: 键盘操作
- **WHEN** 用户使用 Tab 聚焦展开按钮
- **THEN** 可通过 Enter 或 Space 切换展开状态

#### Scenario: 减少动效
- **WHEN** 用户系统开启减少动效
- **THEN** 展开与收起直接切换，不播放缩放动画

#### Scenario: 宽度保持
- **WHEN** 音乐条处于展开或收起形态
- **THEN** 音乐条整体宽度不变，顶栏导航与页面无横向溢出
