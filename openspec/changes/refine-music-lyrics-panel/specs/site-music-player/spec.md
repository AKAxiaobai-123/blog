## MODIFIED Requirements

### Requirement: 歌词显示
音乐条 SHALL 保持 44px 紧凑单行布局，歌词 SHALL 显示在音乐条下方的可收起面板中，默认收起；展开时 SHALL 展示当前曲目的歌词行并随播放进度更新，文本过长时 SHALL 以省略号截断；曲目没有歌词数据或音频未就绪时 SHALL 显示对应提示文案。

#### Scenario: 播放时更新歌词
- **WHEN** 歌曲播放到某句歌词对应的时间点且歌词面板已展开
- **THEN** 面板显示该句歌词

#### Scenario: 默认收起
- **WHEN** 用户首次打开页面
- **THEN** 音乐条保持 44px 单行，歌词面板不占页面高度

#### Scenario: 歌词过长
- **WHEN** 当前歌词文本超过面板宽度
- **THEN** 歌词以省略号截断显示
- **AND** 音乐条宽度与相邻控件不发生变化

#### Scenario: 无歌词曲目
- **WHEN** 当前曲目没有歌词数据
- **THEN** 歌词面板显示“暂无歌词”

#### Scenario: 音频未就绪
- **WHEN** 当前曲目音频文件不存在或加载失败
- **THEN** 歌词面板显示“音频待补充”，播放状态复位

## ADDED Requirements

### Requirement: 歌词区展开与收起
音乐条 SHALL 提供 `>` chevron 按钮，点击后歌词面板平滑展开，再次点击平滑收起；按钮 SHALL 支持键盘操作并同步 `aria-expanded` 状态，默认状态为收起。

#### Scenario: 展开歌词面板
- **WHEN** 用户点击 `>` chevron 按钮
- **THEN** 歌词面板平滑展开
- **AND** 按钮 `aria-expanded` 更新为 `true`

#### Scenario: 收起歌词面板
- **WHEN** 用户再次点击 chevron 按钮
- **THEN** 歌词面板平滑收起
- **AND** 按钮 `aria-expanded` 更新为 `false`

#### Scenario: 键盘操作
- **WHEN** 用户使用 Tab 聚焦 chevron 按钮
- **THEN** 可通过 Enter 或 Space 切换歌词面板

#### Scenario: 减少动效
- **WHEN** 用户系统开启减少动效
- **THEN** 展开与收起直接切换，不播放过渡动画

#### Scenario: 宽度保持
- **WHEN** 歌词面板展开或收起
- **THEN** 音乐条整体宽度不变，顶栏导航与页面无横向溢出
