# Python Backend with FastAPI

## Setup

In the project root, the setup script manages both backend and frontend settings, so you don't need to worry about it. However, if you plan to run the backend separately from the frontend, you should build the virtual environment, activate it, install dependencies, and run it independently. Below are the instructions for each of these steps. If you add any additional libraries to the project, remember to update the requirements file. Ensure you run these commands within the backend folder.

```shell
cd backend/
```

### Build and Activate Virtual Environment

Create a virtual environment named _venv_ in the current directory. A virtual environment is a tool that helps keep the project's dependencies isolated from the system's dependencies.

```shell
python3 -m venv venv
```

The next command activates the virtual environment, allowing you to install and use Python packages within this isolated environment.

```shell
source venv/bin/activate
```

### Install Dependencies

After activating the _venv_ you should be able to run pip and python within the isolated  environment. Now we can installs all the dependencies listed in the requirements.txt file. These dependencies are necessary for the project to function correctly.

```shell
pip install -r requirements.txt
```

## Run

The next command starts the FastAPI server using Uvicorn. The --reload option makes the server restart automatically whenever you make changes to the code, facilitating development.

```shell
uvicorn min:app --reload
```

### Update Requirements File

First, you need to install tools that help manage and update the project's dependencies. These tools are pipreqs and pip-tools.

```shell
pip install pipreqs pip-tools
```

Next, you will generate a requirements.in file based on your code's imports using pipreqs. And then convert requirements.in into requirements.txt using pip-compile, ensuring all dependencies are listed with their specific versions.

```shell
pipreqs --savepath=requirements.in && pip-compile -q --no-annotate
```

- If the _uvicorn_ package is missing, manually add it back to the requirements.txt file to avoid errors.
