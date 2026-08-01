## ADDED Requirements

### Requirement: 渲染文章正文与元信息
文章页 SHALL 根据 slug 渲染对应 Markdown 文章，并展示标题、发布日期、阅读时长、标签等元信息。

#### Scenario: 访问已发布文章
- **WHEN** 用户访问 `/posts/<slug>`
- **THEN** 页面展示文章标题、日期、阅读时长、标签和渲染后的正文

#### Scenario: 访问不存在的文章
- **WHEN** 用户访问不存在的 slug
- **THEN** 页面展示 404 提示并提供返回首页的链接

### Requirement: 文章内目录
当正文包含至少两个标题时，文章页 SHALL 在宽屏显示目录，点击目录项 SHALL 滚动到对应标题。

#### Scenario: 宽屏查看文章目录
- **WHEN** 文章包含两个以上标题且视口宽度大于 768px
- **THEN** 页面在正文一侧展示目录，点击目录项滚动到对应位置

#### Scenario: 窄屏隐藏目录
- **WHEN** 视口宽度小于等于 768px
- **THEN** 目录不显示，正文保持完整可读

### Requirement: 上一篇与下一篇导航
文章页 SHALL 按发布时间顺序提供上一篇和下一篇链接。

#### Scenario: 查看文章前后篇
- **WHEN** 当前文章存在相邻文章
- **THEN** 页面底部展示上一篇和下一篇链接

#### Scenario: 没有相邻文章
- **WHEN** 当前文章是唯一文章
- **THEN** 页面不显示空的相邻链接
