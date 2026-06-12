# 新能源汽车产业链按图索骥

## 项目概述

静态 HTML 单页应用，展示某某区（湖州长兴）新能源汽车产业链全景图谱，包含 Leaflet 地图、多标签页交互、过滤器、鱼骨图分析等功能模块。

## 技术栈

- **运行时**: Node.js 24（用于预览和部署服务）
- **包管理器**: pnpm
- **核心依赖**: http-server（静态服务器）
- **前端**: 纯静态 HTML + CSS + JavaScript，Leaflet 地图库

## 目录结构

```
/workspace/projects/
├── index.html              # 主页面
├── package.json            # 项目配置（仅用于静态服务器）
├── .coze                   # Coze 项目配置
└── scripts/
    ├── coze-preview-build.sh
    ├── coze-preview-run.sh
    ├── coze-deploy-build.sh
    └── coze-deploy-run.sh
```

## 关键入口 / 核心模块

- `index.html`: 单页应用入口，包含所有业务逻辑
- `scripts/coze-*.sh`: Coze 预览和部署脚本

## 运行与预览

- **预览命令**: `bash scripts/coze-preview-run.sh`
- **预览端口**: 5000
- **预览验证**: `curl http://localhost:5000` 返回 HTTP 200

## 用户偏好与长期约束

- 纯静态项目，无需构建步骤
- 所有 Coze 脚本统一放在 `scripts/` 目录
- 脚本采用幂等设计，可重复执行
- http-server 使用 `-c-1` 参数禁用缓存

## 常见问题和预防

- 静态服务器必须在 5000 端口启动
- 脚本内部使用 `SCRIPT_DIR` 推导项目根目录，不依赖调用时 pwd
