# PrimeVue Frontend with TailwindCSS

## Setup

In the project root, the setup script manages both backend and frontend settings, so you don't need to worry about it. However, if you plan to run the frontend separately from the backend, you should set up the frontend yourself, following the steps below. Ensure you are in the frontend folder before executing the commands.

```shell
cd frontend/
```

### Install Dependencies

Install all necessary dependencies listed in the `package.json` file. These dependencies are essential for the project to function correctly.

```shell
npm install
```

### Run the Project

Start the development server. The command below starts the server and allows you to see changes in real-time while developing.

```shell
npm run dev
```

### Update Dependencies

To keep the project's dependencies up to date, you can use the command below. It checks and installs the latest versions of the dependencies listed in the `package.json`.

```shell
npm update
```

## Project Structure

Here is an overview of the project structure to help understand where each part of the code is located.

```text
📁frontend/
├─📁 public/             # Public files, to be published
├─📁 src/                # Project source code
│ ├─📁 assets/           # Static files, such as images and styles
│ ├─📁 components/       # Reusable Vue.js components
| ├─📁 presets/          # TailwindCSS themes compiled files
│ ├─📄 App.vue           # Root Vue.js component
│ └─📄 main.ts           # Main entry file
├─📄 package.json        # npm configuration file
├─📄 ...                 # other config. files
└─📄 README.md           # Project documentation
```

> TailwindCSS is already configured to use the Aura theme. It is present in the presets folder. If you wish to install some other theme, place them there, next to aura folder.
