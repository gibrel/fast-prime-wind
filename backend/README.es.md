# Backend Python con FastAPI

## Configuración

En la raíz del proyecto, el script de configuración gestiona tanto la configuración del backend como del frontend, por lo que no necesitas preocuparte por ello. Sin embargo, si planeas ejecutar el backend por separado del frontend, debes crear el entorno virtual, activarlo, instalar las dependencias y ejecutarlo de forma independiente. A continuación se presentan las instrucciones para cada uno de estos pasos. Si agregas bibliotecas adicionales al proyecto, recuerda actualizar el archivo de requisitos. Asegúrate de ejecutar estos comandos dentro de la carpeta backend.

```shell
cd backend/
```

### Crear y Activar el Entorno Virtual

Crea un entorno virtual llamado _venv_ en el directorio actual. Un entorno virtual es una herramienta que ayuda a mantener las dependencias del proyecto aisladas de las dependencias del sistema.

```shell
python3 -m venv venv
```

El siguiente comando activa el entorno virtual, permitiéndote instalar y usar paquetes de Python dentro de este entorno aislado.

```shell
source venv/bin/activate
```

### Instalar Dependencias

Después de activar el _venv_, deberías poder ejecutar pip y python dentro del entorno aislado. Ahora podemos instalar todas las dependencias listadas en el archivo requirements.txt. Estas dependencias son necesarias para que el proyecto funcione correctamente.

```shell
pip install -r requirements.txt
```

## Ejecutar

El siguiente comando inicia el servidor FastAPI usando Uvicorn. La opción --reload hace que el servidor se reinicie automáticamente cada vez que realices cambios en el código, facilitando el desarrollo.

```shell
uvicorn main:app --reload
```

### Actualizar el Archivo de Requisitos

Primero, necesitas instalar herramientas que ayuden a gestionar y actualizar las dependencias del proyecto. Estas herramientas son pipreqs y pip-tools.

```shell
pip install pipreqs pip-tools
```

A continuación, generarás un archivo requirements.in basado en las importaciones de tu código usando pipreqs. Luego, convertirás requirements.in en requirements.txt usando pip-compile, asegurando que todas las dependencias estén listadas con sus versiones específicas.

```shell
pipreqs --savepath=requirements.in && pip-compile -q --no-annotate
```

- Si falta el paquete _uvicorn_, agrégalo manualmente al archivo requirements.txt para evitar errores.