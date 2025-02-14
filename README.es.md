# FastPrimeWind Project Template

Una plantilla para que puedas comenzar rápidamente tu proyecto FastAPI + PrimeVue + TailwindCSS.

## Configuración

Para configurar el proyecto, sigue los pasos a continuación. Esto instalará todas las dependencias necesarias para el frontend y el backend.

### Instalar Dependencias

Ejecuta el siguiente comando para instalar todas las dependencias:

```shell
npm run setup
```

El comando llama al script `setup` en `package.json`:

```json
"scripts": {
  "setup": "npm install && cd frontend && npm install && cd ../backend && python3 -m venv venv && source venv/bin/activate && pip install -r requirements.txt"
}
```

Este script hará:

1. Instalar las dependencias de la raíz.
2. Navegar al directorio del frontend e instalar sus dependencias.
3. Navegar al directorio del backend, crear y activar un entorno virtual, e instalar sus dependencias.

### Ejecutar el Proyecto

Para iniciar el proyecto, usa el siguiente comando:

```shell
npm run start
```

El comando llama al script `start` en `package.json`:

```json
"scripts": {
  "start": "concurrently \"cd backend && source venv/bin/activate && uvicorn main:app --reload\" \"cd frontend && npm run dev\""
}
```

Este script llama a `concurrently` para ejecutar simultáneamente los servidores de desarrollo del backend y del frontend. Hará:

- Navegar al directorio del backend, activar el entorno virtual e iniciar el servidor FastAPI con Uvicorn.
- Navegar al directorio del frontend e iniciar el servidor de desarrollo.

## Estructura del Proyecto

Aquí tienes una visión general de la estructura del proyecto para ayudar a entender dónde se encuentra cada parte del código.

```text
📁project-root/
├─📁 backend/           # Código del backend con FastAPI
│ ├─📄 main.py          # Punto de entrada para el servidor FastAPI
│ ├─📄 requirements.txt # Dependencias del backend
│ └─📄 ...              # Otros archivos del backend
├─📁 frontend/          # Código del frontend con PrimeVue y TailwindCSS
│ ├─📁 public/          # Archivos públicos, para ser publicados
│ ├─📁 src/             # Código fuente del proyecto
│ │ ├─📁 assets/        # Archivos estáticos, como imágenes y estilos
│ │ ├─📁 components/    # Componentes reutilizables de Vue.js
│ ├─📁 presets/         # Archivos compilados de temas de TailwindCSS
│ │ ├─📄 App.vue        # Componente raíz de Vue.js
│ │ └─📄 main.js        # Archivo de entrada principal
│ ├─📄 package.json     # Dependencias del frontend
│ └─📄 ...              # Otros archivos del frontend
├─📄 package.json       # Dependencias y scripts de la raíz
└─📄 README.md          # Documentación del proyecto
```
