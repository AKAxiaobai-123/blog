## ADDED Requirements

### Requirement: 设计令牌
设计系统 SHALL 使用 CSS 自定义属性定义颜色、字体、间距、圆角、阴影和毛玻璃参数，并支持浅色与深色两套主题。

#### Scenario: 应用主题令牌
- **WHEN** 页面在浅色或深色模式下渲染
- **THEN** 所有组件使用对应主题令牌取值，页面配色一致

#### Scenario: 修改令牌
- **WHEN** 开发者修改 `tokens.css` 中的令牌
- **THEN** 使用该令牌的组件随之更新

### Requirement: Firefly 参考视觉
站点 SHALL 参考 Firefly 主题的清新视觉：以绿松石色为单一强调色、浅色与深色两套主题、全宽首页 banner、16px 卡片圆角、毛玻璃顶栏，以及克制的边框与阴影。

#### Scenario: 页面整体风格
- **WHEN** 用户浏览任意页面
- **THEN** 页面呈现以留白、绿松石强调色和卡片化布局为主的 Firefly 清新风格

#### Scenario: 首页 banner
- **WHEN** 用户访问首页
- **THEN** 首页顶部展示全宽 banner，包含主题文案和背景视觉，移动端高度收缩且文字可读

#### Scenario: 浏览器不支持毛玻璃
- **WHEN** 浏览器不支持 `backdrop-filter`
- **THEN** 顶栏回退为不透明背景，导航仍清晰可读

### Requirement: 暗色模式
站点 SHALL 默认跟随系统颜色偏好，并允许用户手动切换浅色/深色主题；手动选择 SHALL 在本地持久化。

#### Scenario: 跟随系统主题
- **WHEN** 系统处于深色模式且用户未手动选择
- **THEN** 站点以深色主题渲染

#### Scenario: 手动切换主题
- **WHEN** 用户点击主题切换按钮
- **THEN** 站点立即切换主题
- **AND** 刷新页面后仍保持用户选择

### Requirement: 可读性与对比度
正文文本 SHALL 在浅色和深色主题下达到至少 4.5:1 的对比度，正文行宽 SHALL 控制在易读范围（约 70-80 字符），字体大小 SHALL 不随视口宽度缩放。

#### Scenario: 检查正文对比度
- **WHEN** 正文在浅色或深色主题下渲染
- **THEN** 正文与背景对比度不低于 4.5:1

#### Scenario: 检查正文宽度
- **WHEN** 文章页在宽屏渲染
- **THEN** 正文内容宽度保持在易读范围，文本不与相邻 UI 重叠
