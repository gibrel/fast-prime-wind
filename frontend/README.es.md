# PrimeVue Frontend con TailwindCSS

## Configuración

En el directorio raíz del proyecto, el script de configuración gestiona las configuraciones del backend y del frontend, por lo que no necesitas preocuparte por ello. Sin embargo, si planeas ejecutar el frontend por separado del backend, debes configurar el frontend tú mismo, siguiendo los pasos a continuación. Asegúrate de estar en la carpeta del frontend antes de ejecutar los comandos.

```shell
cd frontend/
```

### Instalar Dependencias

Instala todas las dependencias necesarias listadas en el archivo `package.json`. Estas dependencias son esenciales para el correcto funcionamiento del proyecto.

```shell
npm install
```

### Ejecutar el Proyecto

Inicia el servidor de desarrollo. El comando a continuación inicia el servidor y te permite ver los cambios en tiempo real mientras desarrollas.

```shell
npm run dev
```

### Actualizar Dependencias

Para mantener las dependencias del proyecto actualizadas, puedes usar el comando a continuación. Verifica e instala las versiones más recientes de las dependencias listadas en el `package.json`.

```shell
npm update
```

## Estructura del Proyecto

Aquí tienes una visión general de la estructura del proyecto para ayudar a entender dónde se encuentra cada parte del código.

```text
📁frontend/
├─📁 public/ # Archivos públicos, para ser publicados
├─📁 src/ # Código fuente del proyecto
│ ├─📁 assets/ # Archivos estáticos, como imágenes y estilos
│ ├─📁 components/ # Componentes reutilizables de Vue.js
│ ├─📁 presets/ # Archivos compilados de temas de TailwindCSS
│ ├─📄 App.vue # Componente raíz de Vue.js
│ └─📄 main.ts # Archivo de entrada principal
├─📄 package.json # Archivo de configuración de npm
├─📄 ... # otros archivos de configuración
└─📄 README.md # Documentación del proyecto
```

> TailwindCSS ya está configurado para usar el tema Aura. Está presente en la carpeta presets. Si deseas instalar otro tema, colócalo allí, junto a la carpeta aura.
