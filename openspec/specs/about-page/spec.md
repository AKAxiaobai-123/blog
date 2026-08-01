## Purpose

定义关于页的展示内容与导航可达性，作为当前博客主规格基线。

## Requirements

### Requirement: 展示个人简介与联系方式
关于页 SHALL 展示站点作者的个人简介、联系方式或外部链接，并支持 Markdown 排版。

#### Scenario: 访问关于页
- **WHEN** 用户访问 `/about`
- **THEN** 页面展示作者简介、联系方式链接和站点说明

#### Scenario: 导航进入关于页
- **WHEN** 用户在全局导航点击“关于”
- **THEN** 页面跳转到 `/about` 并正常渲染
