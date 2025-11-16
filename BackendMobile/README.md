
# BackendMobile

Este directorio contiene el backend para la aplicación Clarita Mobile.

## Estructura

- `prisma/schema.prisma`: definición del modelo de datos.
- `src/app/server.js`: punto de entrada de la app/servidor.
- `src/app/routes/*.js`: rutas específicas para módulos (`mobile`, `auth`, `ventas`, `entregas`, `combustible`, `sync`).
- `src/lib/prisma.js` y `src/lib/auth.js`: helpers compartidos (conexión Prisma, utilidades de autenticación).
- `.env`: variables locales (no subir a GitHub).

A partir de esta base puedes completar la lógica necesaria en cada archivo.
