# 使用 TailwindCSS 的 PrimeVue 前端

## 设置

在项目根目录中，设置脚本管理后端和前端的设置，因此您不需要担心它。然而，如果您计划单独运行前端，则应按照以下步骤自行设置前端。确保在执行命令之前位于前端文件夹中。

```shell
cd frontend/
```

### 安装依赖

安装 `package.json` 文件中列出的所有必要依赖项。这些依赖项对于项目的正常运行至关重要。

```shell
npm install
```

### 运行项目

启动开发服务器。以下命令启动服务器，并允许您在开发过程中实时查看更改。

```shell
npm run dev
```

### 更新依赖

要保持项目依赖项的最新状态，可以使用以下命令。它会检查并安装 `package.json` 中列出的依赖项的最新版本。

```shell
npm update
```

## 项目结构

以下是项目结构的概述，以帮助理解代码的每个部分的位置。

```text
📁frontend/
├─📁 public/ # 公共文件，将被发布
├─📁 src/ # 项目源代码
│ ├─📁 assets/ # 静态文件，如图像和样式
│ ├─📁 components/ # 可重用的 Vue.js 组件
│ ├─📁 presets/ # TailwindCSS 主题编译文件
│ ├─📄 App.vue # Vue.js 根组件
│ └─📄 main.ts # 主要入口文件
├─📄 package.json # npm 配置文件
├─📄 ... # 其他配置文件
└─📄 README.md # 项目文档
```

> TailwindCSS 已经配置为使用 Aura 主题。它位于 presets 文件夹中。如果您希望安装其他主题，请将其放置在 aura 文件夹旁边。
