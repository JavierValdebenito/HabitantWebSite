# HabitantWebSite

Monorepo con aplicaciones independientes para backend y frontend.

## Estructura

```text
HabitantWebSite/
├── backend/
├── frontend/
└── README.md
```

Cada aplicación mantiene sus propias dependencias, configuración y `package.json`.

## Tecnologías

### Backend

- NestJS
- TypeScript
- Swagger / OpenAPI
- class-validator
- class-transformer

### Frontend

- Angular
- TypeScript
- Tailwind CSS
- daisyUI

## Requisitos

- Node.js
- npm

## Backend

Entrar al directorio:

```bash
cd backend
```

Instalar dependencias:

```bash
npm install
```

Crear el archivo `.env` tomando como referencia:

```text
.env.example
```

Ejecutar en desarrollo:

```bash
npm run start:dev
```

La API estará disponible en:

```text
http://localhost:3000/api
```

Swagger estará disponible en:

```text
http://localhost:3000/api/docs
```

### Scripts disponibles

```bash
npm run start:dev
npm run build
npm run lint
npm run lint:check
npm test
```

## Frontend

Entrar al directorio:

```bash
cd frontend
```

Instalar dependencias:

```bash
npm install
```

Ejecutar en desarrollo:

```bash
npm start
```

La aplicación estará disponible en:

```text
http://localhost:4200
```

### Scripts disponibles

```bash
npm start
npm run build
npm run format
npm run format:check
npm test
```

## Arquitectura

### Backend

El backend utiliza una arquitectura organizada por módulos o features.

```text
backend/src/
├── common/
├── config/
├── modules/
├── app.module.ts
└── main.ts
```

- `common`: elementos transversales como filtros, interceptores, guards, pipes y utilidades.
- `config`: configuración de la aplicación y validación de variables de entorno.
- `modules`: módulos funcionales del sistema.

### Frontend

El frontend utiliza una arquitectura organizada por responsabilidades y features.

```text
frontend/src/app/
├── core/
├── features/
├── layouts/
├── shared/
├── app.config.ts
├── app.routes.ts
├── app.html
└── app.ts
```

- `core`: infraestructura global como servicios, interceptores, guards y configuración.
- `features`: funcionalidades específicas de negocio.
- `layouts`: estructuras visuales públicas y privadas.
- `shared`: componentes, pipes, directivas y utilidades reutilizables.

## Variables de entorno

El backend utiliza un archivo `.env` local.

El archivo `.env` no debe subirse al repositorio.

Usar:

```text
backend/.env.example
```

como referencia para configurar el entorno local.

El frontend utiliza archivos de environment para definir la URL de la API dependiendo del entorno.

```text
frontend/src/environments/
├── environment.ts
└── environment.development.ts
```

## Convenciones

- Backend y frontend son aplicaciones independientes.
- Cada aplicación mantiene su propio `package.json`.
- Cada aplicación mantiene su propio `package-lock.json`.
- No se comparten DTOs entre frontend y backend.
- La comunicación entre aplicaciones se realiza mediante HTTP/API.
- Las funcionalidades de negocio deben mantenerse dentro de sus respectivos módulos o features.
- El backend utiliza el prefijo global `/api`.
- Las respuestas exitosas siguen un contrato común.
- Los errores HTTP siguen un contrato común.
- El frontend separa infraestructura global, features, layouts y elementos compartidos.

## Documentación de API

La documentación Swagger está disponible durante el desarrollo en:

```text
http://localhost:3000/api/docs
```

## Desarrollo

Para trabajar en el proyecto se recomienda ejecutar backend y frontend en terminales separadas.

### Terminal 1

```bash
cd backend
npm install
npm run start:dev
```

### Terminal 2

```bash
cd frontend
npm install
npm start
```

## Verificación antes de subir cambios

### Backend

```bash
cd backend
npm run build
npm run lint:check
npm test
```

### Frontend

```bash
cd frontend
npm run build
npm run format:check
```

## Estado del proyecto

Actualmente el repositorio contiene la configuración base necesaria para comenzar el desarrollo.

Las funcionalidades de negocio serán agregadas progresivamente.
