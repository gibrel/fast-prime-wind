# 使用 FastAPI 的 Python 后端

## 设置

在项目根目录中，设置脚本管理后端和前端的设置，因此您无需担心。但是，如果您计划单独运行后端，则应构建虚拟环境，激活它，安装依赖项并独立运行。以下是每个步骤的说明。如果您向项目添加了其他库，请记得更新 requirements 文件。确保在 backend 文件夹中运行这些命令。

```shell
cd backend/
```

### 构建和激活虚拟环境

在当前目录中创建一个名为 _venv_ 的虚拟环境。虚拟环境是一种工具，有助于将项目的依赖项与系统的依赖项隔离开来。

```shell
python3 -m venv venv
```

下一个命令激活虚拟环境，使您可以在此隔离环境中安装和使用 Python 包。

```shell
source venv/bin/activate
```

### 安装依赖项

激活 _venv_ 后，您应该能够在隔离环境中运行 pip 和 python。现在我们可以安装 requirements.txt 文件中列出的所有依赖项。这些依赖项是项目正常运行所必需的。

```shell
pip install -r requirements.txt
```

## 运行

下一个命令使用 Uvicorn 启动 FastAPI 服务器。--reload 选项使服务器在您对代码进行更改时自动重新启动，从而方便开发。

```shell
uvicorn main:app --reload
```

### 更新 Requirements 文件

首先，您需要安装一些工具来帮助管理和更新项目的依赖项。这些工具是 pipreqs 和 pip-tools。

```shell
pip install pipreqs pip-tools
```

接下来，您将使用 pipreqs 根据代码的导入生成一个 requirements.in 文件。然后使用 pip-compile
