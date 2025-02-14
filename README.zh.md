# FastPrimeWind 项目模板

一个模板，让您可以快速启动您的 FastAPI + PrimeVue + TailwindCSS 项目。

## 设置

要设置项目，请按照以下步骤操作。这将安装前端和后端的所有必要依赖项。

### 安装依赖

运行以下命令以安装所有依赖项：

```shell
npm run setup
```

该命令调用 `package.json` 中的 `setup` 脚本：

```json
"scripts": {
  "setup": "npm install && cd frontend && npm install && cd ../backend && python3 -m venv venv && source venv/bin/activate && pip install -r requirements.txt"
}
```

此脚本将：

1. 安装根依赖项。
2. 导航到前端目录并安装其依赖项。
3. 导航到后端目录，创建并激活虚拟环境，并安装其依赖项。

### 运行项目

要启动项目，请使用以下命令：

```shell
npm run start
```

该命令调用 `package.json` 中的 `start` 脚本：

```json
"scripts": {
  "start": "concurrently \"cd backend && source venv/bin/activate && uvicorn main:app --reload\" \"cd frontend && npm run dev\""
}
```

此脚本调用 concurrently 以同时运行后端和前端开发服务器。它将同时：

- 导航到后端目录，激活虚拟环境，并启动 FastAPI 服务器与 Uvicorn。
- 导航到前端目录并启动开发服务器。

## 项目结构

以下是项目结构的概述，以帮助理解代码的每个部分的位置。

```text
📁project-root/
├─📁 backend/           # 使用 FastAPI 的后端代码
│ ├─📄 main.py          # FastAPI 服务器的入口点
│ ├─📄 requirements.txt # 后端依赖项
│ └─📄 ...              # 其他后端文件
├─📁 frontend/          # 使用 PrimeVue 和 TailwindCSS 的前端代码
│ ├─📁 public/          # 公共文件，将被发布
│ ├─📁 src/             # 项目源代码
│ │ ├─📁 assets/        # 静态文件，如图像和样式
│ │ ├─📁 components/    # 可重用的 Vue.js 组件
│ ├─📁 presets/         # TailwindCSS 主题编译文件
│ │ ├─📄 App.vue        # Vue.js 根组件
│ │ └─📄 main.js        # 主要入口文件
│ ├─📄 package.json     # 前端依赖项
│ └─📄 ...              # 其他前端文件
├─📄 package.json       # 根依赖项和脚本
└─📄 README.md          # 项目文档
```
