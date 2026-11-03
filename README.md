# Hong

个人站点。静态页面，用 [Astro](https://astro.build) 构建，文案为简体中文。

首页是一段自我介绍和项目卡片；每个项目有自己的详情页。关于页写得稍长一些。笔记栏目用内容集合，目前只有一篇标明「示例」的占位文章。

页面上没有邮箱、电话或其他社交账号。可以出现的外部链接只有 GitHub：<https://github.com/XiaoGuoHong>，以及各个人项目自己的仓库。

## 本地开发

需要 **Node.js 22.23.4 或更高**（Astro 7 的要求）。仓库里的 `.nvmrc` 和 `.node-version` 写的是 `22`。

```bash
npm install
npm run dev
```

浏览器打开 <http://localhost:4321>。

```bash
npm run build      # 输出到 dist/
npm run preview    # 本地预览构建结果
```

`npm run build` 成功后，整个站点都在 `dist/` 里，是纯静态文件。没有服务端适配器，不要把 `output` 改成 `server`，否则就不能按下面的方式零配置部署。

## 部署到 Cloudflare Pages

用 Pages 的 **Astro** 框架预设即可，不需要 `wrangler.toml` 或其他配置文件。

| 项 | 值 |
| --- | --- |
| 框架预设 | Astro |
| 构建命令 | `npm run build` |
| 输出目录 | `dist` |
| Node.js | 22（必须 ≥ 22.23.4） |
| 环境变量 | 无必需项 |

Node 版本请在 Pages 项目里设为 22。如果该环境自带的 Node 22 低于 22.23.4，把环境变量 `NODE_VERSION` 设为 `22.23.4` 或更新的 22.x。`package.json` 的 `engines.node` 也是 `>=22.23.4`。

可选：设置环境变量 `SITE` 为站点的完整地址，例如 `https://example.com`。构建时会把它写进 canonical 和 `og:url`。不设也可以正常打开。

`public/_headers` 会被 Pages 读走，用来加几个基础响应头，并给 `/_astro/*` 较长的缓存。GitHub Pages 会忽略这个文件。

## GitHub Pages

`dist/` 可以直接当作 GitHub Pages 的产物。

- 用户站点或自定义域名，站点在域名根上：保持现在的配置，不要设置 `base`。
- 项目站点（地址形如 `https://<user>.github.io/hong/`）：在 `astro.config.mjs` 里加上 `site` 和 `base: '/hong'`，然后重新构建。站内链接已经走 `import.meta.env.BASE_URL`。

## 加一个项目

在 `src/content/projects/` 新建一个 Markdown 文件。文件名会变成路径：`pma.md` → `/projects/pma`。

| 字段 | 说明 |
| --- | --- |
| `title` | 标题 |
| `summary` | 卡片和详情页顶部的短介绍 |
| `order` | 数字，小的排在前面 |
| `kind` | `personal` 或 `company` |
| `stack` | 技术栈，字符串数组 |
| `label` | 可选，副标题 |
| `github` | 可选，仓库 URL |
| `demo` | 可选，演示 URL |
| `repoPrivate` | 可选。仓库还没公开时写 `true`，链接文字会注明 |
| `image` | 可选。文件放在 `public/`，路径写成 `/images/shot.png` |
| `imageAlt` | 有图片时必填 |
| `imageWidth` / `imageHeight` | 有图片时必填，单位像素 |
| `imageCaption` | 可选，图注 |

正文用 Markdown，显示在详情页截图下面。

`kind: company` 的条目不能填 `github`、`demo`、`image`（内容集合的 schema 会拒绝）。公司项目保持纯文字，不放仓库、截图或内部数据。

## 加一篇笔记

在 `src/content/blog/` 新建 Markdown，例如 `hello.md`，对应 `/blog/hello`。

```yaml
title: 标题
description: 一两句摘要
date: 2026-11-03
```

`example: true` 会在列表和文首标成「示例」。正式文章不要加。现在的 `example.md` 是占位，可以删，也可以改。

## 目录

```
src/content/projects/   项目
src/content/blog/       笔记
src/pages/              页面
src/styles/global.css   样式
public/                 图标、图片，以及 Cloudflare 的 _headers
```

颜色跟随系统的 `prefers-color-scheme`，没有单独的切换开关。中文用系统字体，不额外下载字库。

## 以后可能接上的东西

下面只是备忘，这个仓库里没有实现。

- **Cloudflare Workers + D1 / KV**：需要登录或要存数据的小接口，可以用 Workers。D1 放关系数据，KV 放配置或缓存。静态站继续放在 Pages 上。
- **Go 后端**：独立的 Go 服务可以放到 Render 或 Fly.io，和这个静态站分开部署。
- **模型演示**：AI 或 YOLO 的可交互演示适合放在 Hugging Face Spaces，站点上以后只加链接，不把模型塞进 Pages 构建。
