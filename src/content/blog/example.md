---
title: 示例：怎么加一篇笔记
description: 占位文章，不是正式内容。用来说明笔记放在哪里、之后怎么加。
date: 2026-11-03
example: true
---

这是一篇示例，不是正式笔记。栏目里留着它，是为了有一篇可以点开的文章。不需要的时候，删掉这个文件再重新构建即可，其他页面不受影响。

笔记用 Astro 的内容集合管理。加一篇新的，在 `src/content/blog/` 下新建 Markdown 文件，文件名就是地址。比如 `hello.md` 对应 `/blog/hello`。

前言至少写这三项：

```yaml
title: 标题
description: 一两句摘要，会出现在列表和页面描述里
date: 2026-11-03
```

正文接在前言后面，用 Markdown。本地执行 `npm run dev` 可以预览，`npm run build` 会收进 `dist/`。

想在列表上标成示例，可以在前言里加 `example: true`。正式文章不要加。
