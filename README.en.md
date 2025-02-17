# FastPrimeWind Project Template

A template so you can promptly start your FastAPI + PrimeVue + TailwindCSS project.

## Index

- [Setup](#setup)
  - [Install Dependencies](#install-dependencies)
  - [Run the Project](#run-the-project)
- [Project Structure](#project-structure)
- [Running Autonomously](#running-autonomously)

## Setup

To set up the project, follow the steps below. This will install all necessary dependencies for both the frontend and backend.

### Install Dependencies

Run the following command to install all dependencies:

```shell
npm run setup
```

The command calls the `setup` script in `package.json`:

```json
"scripts": {
  "setup": "npm install && cd frontend && npm install && cd ../backend && python3 -m venv venv && source venv/bin/activate && pip install -r requirements.txt"
}
```

This script will:

1. Install the root dependencies.
2. Navigate to the frontend directory and install its dependencies.
3. Navigate to the backend directory, create and activate a virtual environment, and install its dependencies.

### Run the Project

To start the project, use the following command:

```shell
npm run start
```

The command calls the `start` script in `package.json`:

```json
"scripts": {
  "start": "concurrently \"cd backend && source venv/bin/activate && uvicorn main:app --reload\" \"cd frontend && npm run dev\""
}
```

This script calls concurrently to run both the backend and frontend development servers. It will simultaneously:

- Navigate to the backend directory, activate the virtual environment, and start the FastAPI server with Uvicorn.
- Navigate to the frontend directory and start the development server.

## Project Structure

Here is an overview of the project structure to help understand where each part of the code is located.

```text
📁project-root/
├─📁 backend/           # Backend code with FastAPI
│ ├─📄 main.py          # Entry point for the FastAPI server
│ ├─📄 requirements.txt # Backend dependencies
│ └─📄 ...              # Other backend files
├─📁 frontend/          # Frontend code with PrimeVue and TailwindCSS
│ ├─📁 public/          # Public files, to be published
│ ├─📁 src/             # Project source code
│ │ ├─📁 assets/        # Static files, such as images and styles
│ │ ├─📁 components/    # Reusable Vue.js components
│ ├─📁 presets/         # TailwindCSS themes compiled files
│ │ ├─📄 App.vue        # Root Vue.js component
│ │ └─📄 main.js        # Main entry file
│ ├─📄 package.json     # Frontend dependencies
│ └─📄 ...              # Other frontend files
├─📄 package.json       # Root dependencies and scripts
└─📄 README.md          # Project documentation
```

## Running Autonomously

For more information on running the Backend ou Frontend solution autonomously, check the docs bellow:

- [Backend](./backend/README.en.md)
- [Frontend](./frontend/README.en.md)

|  |  |  |  |  |
|-----:|-----:|-----:|-----:|-----:|
| [English](README.en.md) |  [Português](README.pt.md) | [Español](README.es.md) | [Français](README.fr.md) | [简体中文](README.zh.md) |
