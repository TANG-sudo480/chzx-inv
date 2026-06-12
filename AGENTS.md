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

## 产业数据分类

### 零部件拆解 tab 分类
- **电池材料**: battery, cathode, anode, electrolyte, separator
- **电驱系统**: motor, inverter
- **底盘热管理**: thermal, chassis, connector
- **智能科技**: smartdrive, smartcabin
- **精密传动**: reducer, servo, cnc
- **制造装备**: casting, tooling, equipment
- **整车企业**: ev
- **机器人/eVTOL**: robot, evtol
- **核心材料**: cathode, anode, electrolyte, separator

### 新增产业
- **casting**: 精密铸造/压铸（振兴铸造、广义铸造等本地企业 + 广东鸿图、文灿股份等全国头部）
- **tooling**: 精密模具/工装（利羿精密、正轩精密等本地企业）
- **equipment**: 智能装备/产线（淳迪自动化、铭迪智能等本地企业 + 先导智能等全国龙头）
- **evtol**: eVTOL/低空经济（云途飞行器本地企业 + 亿航智能、峰飞航空等全国企业）

## 产业数据规范化要求

### 企业卡片数据字段规范
每个企业供应商条目应包含以下字段：
- `rank`: 排名序号（1-15）
- `name`: 企业名称
- `listed`: 上市状态（上交所/深交所/创业板/科创板/港股/美股/非上市）
- `marketCap`: 市值或规模描述
- `loc`: 地理位置
- `lat/lng`: 经纬度坐标
- `type`: 类型标识（local/200km/nation）
- `note`: 核心简介（主供客户、技术优势、关键信息）
- `price`: 参考价格区间

### 距离分类
- **local（本地）**: 某某区本地企业
- **200km（周边200km）**: 某某区周边200km范围内的上市企业
- **nation（全国）**: 全国头部上市公司

### 分类数量要求
每个产业分类应包含 15 家企业：
- 约 5 家 local + 200km 企业
- 约 10 家全国头部上市公司
