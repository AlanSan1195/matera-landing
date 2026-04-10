# La Matera — Rediseño Web

Rediseño completo del sitio web de [La Matera](https://lamatera.mx), restaurante argentino en Guadalajara, sede mundialista FIFA 2026.

El sitio original cumplía su función pero se quedaba corto en experiencia visual y no reflejaba la calidad real del restaurante. Este proyecto reconstruye la interfaz desde cero con un diseño moderno, una carta digital interactiva, soporte multilingue pensado para el turismo asiático del Mundial, y un panel interno para capacitación del equipo.

## Qué resuelve

- **Interfaz moderna**: Reemplazar el diseño de [lamatera.mx](https://lamatera.mx) con una experiencia visual a la altura del restaurante — video hero, efectos 3D con Three.js, carta digital con navegación por categorías.
- **Menú visual e interactivo**: Presentar los platillos organizados por categoría (empanadas, carnes, mariscos, pizzas, etc.) con un diseño que invite a explorar.
- **Idiomas asiáticos para el Mundial 2026**: Soporte nativo para coreano, chino mandarín y japonés, además de inglés — Guadalajara es sede mundialista y el restaurante recibe una cantidad importante de clientes asiáticos.
- **Panel interno (Dropbox)**: Sección privada para el equipo del restaurante con el manual de capacitación completo y gestión de platillos, protegida con autenticación.

## Stack

| Capa | Herramienta |
|------|-------------|
| Framework | Astro 5 (SSR) |
| Adaptador | `@astrojs/netlify` |
| Estilos | Tailwind CSS 3 |
| Auth | Clerk |
| Base de datos | Supabase (PostgreSQL + Storage) |
| 3D | Three.js (efecto de humo) |
| i18n | `es` (default), `en`, `ko`, `zh`, `ja` |

## Idiomas

El sitio se sirve en español por defecto (`/`). Los demás idiomas tienen prefijo:

| Idioma | Ruta | Por qué |
|--------|------|---------|
| Español | `/` | Idioma base |
| Inglés | `/en/` | Turismo general |
| Coreano | `/ko/` | Clientela asiática + Mundial 2026 |
| Chino | `/zh/` | Clientela asiática + Mundial 2026 |
| Japonés | `/ja/` | Clientela asiática + Mundial 2026 |

## Panel interno (Dropbox)

Sección privada en `/Dropbox`, accesible solo con autenticación vía Clerk.

**Manual de capacitacion** — Contiene el manual oficial de alimentos del restaurante organizado por categorías (empanadas, entradas, ensaladas, pizzas, cocina, mar, campo, postres, terminos de coccion). Cada platillo incluye descripcion, gramaje, notas de servicio y alergias. Los platillos nuevos agregados desde Supabase se inyectan en su categoría correspondiente.

**Gestion de platillos (admin)** — CRUD completo para administradores: crear, editar y eliminar platillos con imagen, descripcion, gramaje y categoría. Las imagenes se suben a Supabase Storage.

**Roles** — El middleware sincroniza usuarios de Clerk con Supabase. Usuarios nuevos entran con rol `user`; los admins tienen acceso al CRUD. Las rutas `/api/admin/*` devuelven `401` sin auth y `403` sin rol admin.

## Estructura

```
src/
  components/        # Componentes .astro
  data/              # Datos estáticos (menuData.ts, manualData.ts)
  db/                # Cliente Supabase y helpers CRUD
  layouts/           # Layout principal
  pages/
    api/admin/       # Endpoints protegidos (platillos, upload)
    en/ ko/ zh/ ja/  # Páginas por idioma
    Dropbox.astro    # Panel interno
    index.astro      # Página principal
  middleware.ts      # Auth Clerk + protección de rutas
```

## Setup

```bash
pnpm install
pnpm dev            # http://localhost:4321
pnpm build          # Build de producción
pnpm preview        # Servir build local
```

### Variables de entorno

```bash
PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_KEY=eyJhbGci...
```

## Screenshots

![Home con video hero](https://github.com/AlanSan1195/matera-prototipe/assets/130740412/5415a0f9-748a-412b-80d5-1da5aefb1e02)

![Menu digital](https://github.com/AlanSan1195/matera-prototipe/assets/130740412/86f27b04-05a3-4096-81ce-66290102f784)

---

Desarrollado por [Alan Sandoval](https://github.com/AlanSan1195)
