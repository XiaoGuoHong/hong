---
title: RuleTrace
label: 合规性查询助手
summary: 登录后在网页或接口里提问，转发到使用者自己的 Dify 工作流。
order: 2
kind: personal
stack:
  - Python 3.12
  - Flask
  - SQLite
  - Dify
github: https://github.com/XiaoGuoHong/RuleTrace
repoPrivate: true
image: /images/ruletrace-cover.svg
imageAlt: RuleTrace 的文字封面，不是产品界面截图。
imageWidth: 1200
imageHeight: 840
imageCaption: 文字封面，不是界面截图。
---

合规性查询助手。登录之后可以在网页里提问，也可以调用 `POST /ask`。问题会转到使用者自己的 Dify 工作流，返回体里取 `data.outputs.text`。

后端是 Flask，用 SQLite 按用户保存聊天记录。注册可以按需加上邀请码。管理端是挂在 `/admin` 的单页应用，用来看用户统计、管理用户。打到 Dify 的请求做了限流，也加了并发上限。登录态放在 HttpOnly Cookie 里。运行环境是 Python 3.12。
