## ADDED Requirements

### Requirement: 按年份分组展示文章
归档页 SHALL 将所有已发布文章按年份倒序分组，并展示每年的文章列表和数量。

#### Scenario: 访问归档页
- **WHEN** 用户访问 `/archive`
- **THEN** 文章按年份倒序分组展示
- **AND** 每个年份展示该年文章数量和文章标题链接

#### Scenario: 暂无文章
- **WHEN** 没有已发布文章
- **THEN** 归档页展示空状态提示
