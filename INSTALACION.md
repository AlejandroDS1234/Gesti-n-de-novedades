# Instructivo de instalación

## Requisitos

- Docker Desktop instalado y en ejecución, con Docker Compose.
- Una copia de este repositorio.

## Configuración

Coloca el archivo `.env` en la raíz

## Iniciar la aplicación

Desde la carpeta raíz del proyecto, ejecuta:

```powershell
docker compose up --build
```

La primera ejecución puede tardar unos minutos mientras se construyen las
imágenes. Luego, abre la aplicación en <http://localhost:3200>.

- API: <http://localhost:8200>
- PostgreSQL: `localhost:5000`

PostgreSQL ejecuta los scripts de `database/db-init` al inicializar una base de datos nueva. Los datos se conservan en un volumen de Docker.

## Detener los servicios

Desde la raíz, ejecuta:

```powershell
docker compose down
```

Este comando detiene los contenedores y conserva los datos de la base de datos.
