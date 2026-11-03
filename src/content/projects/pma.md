---
title: 雨宫莲的面具
label: PMA
summary: 面向《女神异闻录5 皇家版》资料的本地问答桌面应用。
order: 1
kind: personal
stack:
  - Go
  - mygo
  - Ollama
  - JSON
github: https://github.com/XiaoGuoHong/PMA
repoPrivate: true
image: /images/pma-native-window.png
imageAlt: PMA 桌面窗口，显示一次带来源引用的问答和角色图片。
imageWidth: 1200
imageHeight: 840
imageCaption: 桌面端窗口。左侧是查询、资料库、设置和关于；右侧是带来源的回答。
---

雨宫莲的面具（PMA）是一个本地问答桌面应用，用来查《女神异闻录5 皇家版》的资料，也可以当作 Atlus Persona 系列的本地参考。

程序用纯 Go 写成，界面是 mygo 的原生 UI。中文分块、带引用的检索和图片加载都在进程内完成。索引是 JSON，资料来自 BWIKI 页面。

默认离线：嵌入用本地哈希，回答用抽取式方法生成。本机如果跑着 Ollama，嵌入和生成也可以交给它。Windows 便携版 EXE 通过 GitHub Actions 构建。
