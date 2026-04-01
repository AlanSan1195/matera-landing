# AGENTS.md — matera-prototipe

Restaurant website for Matera. Astro 5 SSR, Tailwind CSS, Three.js, Clerk auth, Supabase backend.

## Commands

```bash
pnpm dev            # Dev server at http://localhost:4321
pnpm build          # Production build → dist/
pnpm preview        # Serve built output locally
pnpm astro check    # Type-check all .astro and .ts files (run before committing)
```

No `lint`, `test`, or `typecheck` scripts exist. The only verification is:

```bash
pnpm astro check && pnpm build   # Both must pass before committing
```

There are no test files. Do not introduce a test framework unless explicitly asked.

## Tech Stack

| Layer       | Tool                                               |
|-------------|----------------------------------------------------|
| Framework   | Astro 5 (`output: "server"`)                       |
| Adapter     | `@astrojs/netlify` (serverless functions)           |
| Styling     | Tailwind CSS 3 (only styling solution)             |
| Auth        | `@clerk/astro` (middleware-based route protection)  |
| Database    | Supabase (via `@supabase/supabase-js`)             |
| 3D Effects  | Three.js 0.162 (desktop smoke effect)              |
| i18n        | Astro built-in — locales: `es` (default), `en`, `ko`, `zh`, `ja` |
| Pkg manager | **pnpm** (always use pnpm, never npm/yarn)         |
| Language    | TypeScript (base config, not strict)               |

## Project Structure

```
src/
  components/        # .astro UI components
    icons/           # Inline SVG icon components
    menu/            # Menu sub-components (ParrillaSection, MobileMenuCard, DesktopMenuGrid)
  data/              # Typed data arrays (menuData.ts, manualData.ts)
  db/                # Supabase client & CRUD helpers (supabase.ts)
  layouts/           # Layout.astro — root HTML shell, global CSS, fonts
  pages/             # File-based routing
    api/             # API routes (admin/platillos, admin/upload, seed, debug)
    en/ ko/ zh/ ja/  # Locale-specific page overrides
  middleware.ts      # Clerk auth — protects /Dropbox and /api/admin/*
  env.d.ts           # Type refs; extends App.Locals with userRole, clerkId
public/
  imagenes/          # Site images (WebP)
  fuentes/           # Custom font (Magical Night.woff2)
```

## TypeScript

- Extends `astro/tsconfigs/base`. Strict mode is **not** enabled — match existing looseness.
- Path alias `@/*` maps to `./src/*`. Prefer `@/` over relative paths across directories.
- Provide `interface Props` for components with multiple props:

```astro
---
export interface Props { title: string; description: string; }
const { title, description } = Astro.props;
---
```

- Avoid `any`. Prefer inference. Single-prop components may use inline destructuring.
- `App.Locals` is extended in `env.d.ts` — add new server-side locals there.

## Code Style

### Imports

- `@/` alias for cross-directory: `import Layout from "@/layouts/Layout.astro";`
- Relative `../` is fine for close siblings.
- Font packages as bare side-effects: `import "@fontsource-variable/lora";`
- Three.js namespace import: `import * as THREE from "three";`
- Clerk explicit imports: `import { SignedIn, UserButton } from "@clerk/astro/components";`
- Supabase helpers from `@/db/supabase`: `import { getPlatillos } from "@/db/supabase";`

### Naming

- **Components**: PascalCase `.astro` (`LandingHeader.astro`, `CardsComponent.astro`).
- **Pages**: PascalCase (`Dropbox.astro`). Locale pages live under `src/pages/<locale>/`.
- **Variables**: Spanish for UI-facing (`botonEmpanadas`, `campoData`), English for technical (`smokeParticles`, `createHtmlStructure`).
- **CSS classes**: Spanish (`mostrar`, `ocultar`, `mostrarLG`, `ocultarParrilla`).
- **Data arrays/types**: Spanish (`campoData`, `ManualSeccion`, `Platillo`).
- Match the naming language already used in surrounding code.

### Tailwind CSS

- Only styling solution. No CSS-in-JS, no CSS modules.
- Arbitrary values accepted: `text-[65px]`, `top-[135px]`, `border-[3px]`.
- Responsive: `md:hidden` / `hidden md:flex` for mobile/desktop dual implementations.
- Theme tokens in `tailwind.config.cjs`:
  - Colors: `primary` (#0C1018), `secundary` (#efefef), `tercero` (#ff3b3f)
  - Fonts: `font-sans` (Gotham SSm A), `font-pages` (Permanent Marker), `font-boldes` (custom woff2)
- Global CSS in `Layout.astro` `<style is:global>`. Scoped styles in component `<style>`.

### Astro Components

- All TS/imports in the frontmatter `---` block.
- Client-side JS uses plain `<script>` blocks (no reactive framework):

```astro
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("myButton");
    btn?.addEventListener("click", () => { /* ... */ });
  });
</script>
```

- Show/hide via `classList.add("mostrar")` / `classList.remove("ocultar")`.
- Animated nav uses `style.setProperty("--left", ...)` — follow this pattern.

### API Routes

- Located in `src/pages/api/`. Export named handlers (`GET`, `POST`, `PUT`, `DELETE`).
- Always return `new Response(JSON.stringify(...), { status, headers })`.
- Admin routes under `/api/admin/` are protected by middleware (auth + role check).

### Error Handling

- Optional chaining for nullable DOM refs: `element?.addEventListener("click", handler);`
- Guard DOM lookups with early returns: `if (!btn) return;`
- Only use try/catch for async operations or external calls (Supabase, fetch).
- API routes: return proper HTTP status codes (400, 401, 403, 500).

## Architecture Notes

### SSR & Auth

- All pages are server-rendered. No static generation.
- `src/middleware.ts` protects `/Dropbox` (requires auth) and `/api/admin/*` (requires auth + admin role).
- New protected routes: add to `createRouteMatcher` arrays in middleware.
- `.env` is gitignored. Required keys: `CLERK_SECRET_KEY`, `PUBLIC_CLERK_PUBLISHABLE_KEY`, `SUPABASE_URL`, `SUPABASE_KEY`.

### Database (Supabase)

- Client initialized in `src/db/supabase.ts`. All CRUD helpers live there.
- Types (`Usuario`, `Platillo`, `PlatilloInsert`, etc.) are defined alongside the client.
- Access env vars via `import.meta.env.SUPABASE_URL` (Astro convention).

### Menu Data

- Static menu data lives in `src/data/menuData.ts` and `src/data/manualData.ts`.
- Dynamic dish data comes from Supabase via `/api/admin/platillos`.
- Do not duplicate data — import from `@/data/` or `@/db/supabase`.

### i18n

- Default locale is `es` (no prefix). Other locales get prefixed paths (`/en/`, `/ko/`, etc.).
- Locale pages override the default in `src/pages/<locale>/index.astro`.

## Known Issues / Tech Debt

- `Caurosel.astro` is a typo — do not rename without updating all imports.
- `arial-label` misspellings exist in several components (should be `aria-label`) — fix when touching those.
- `pruebaCartaContenedor.astro` is a prototype name — do not rename without updating `Carta.astro` and `index.astro`.

## Before Committing

```bash
pnpm astro check   # Type-check
pnpm build         # Ensure production build succeeds
```

No CI pipeline. Verification is manual.
