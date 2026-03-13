# AGENTS.md — matera-prototipe

Restaurant website for Matera. Built with Astro (SSR), Tailwind CSS, Three.js, and Clerk authentication. No test framework is configured.

---

## Commands

```bash
pnpm dev          # Start local dev server (http://localhost:4321)
pnpm build        # Production build → dist/
pnpm preview      # Serve the built output locally
node dist/server/entry.mjs  # Run the standalone SSR server in production
```

**No `lint`, `test`, or `typecheck` scripts exist.** If you add them, use:

```bash
pnpm astro check  # Astro's built-in type checker (runs tsc under the hood)
```

There are no test files in this project. Do not introduce a test framework unless explicitly asked.

---

## Tech Stack

| Layer            | Tool / Library                      |
|------------------|-------------------------------------|
| Framework        | Astro 5 (SSR, `output: "server"`)   |
| Adapter          | `@astrojs/node` (standalone mode)   |
| Styling          | Tailwind CSS 3                      |
| Auth             | `@clerk/astro` (route protection)   |
| 3D Effects       | Three.js 0.162                      |
| Package manager  | **pnpm** (always use pnpm)          |
| Language         | TypeScript (Astro base, not strict) |

---

## Project Structure

```
src/
  components/     # All .astro UI components
    icons/        # Inline SVG icon components
  layouts/        # Layout.astro (root HTML shell, global CSS, fonts)
  pages/          # File-based routing (index, Dropbox, visual pages)
  middleware.ts   # Clerk auth — protects /Dropbox
  env.d.ts        # Astro + env type references
public/
  imagenes/       # All site images (WebP)
  fuentes/        # Custom font (Magical Night.woff2)
```

---

## TypeScript

- Config extends `astro/tsconfigs/base`. Strict mode is **not enabled** — match existing looseness.
- Path alias `@/*` → `./src/*`. Prefer `@/` over relative paths for imports across directories.
- Provide `interface Props` in Astro components when there are multiple props (see `Layout.astro`):

```astro
---
export interface Props {
  title: string;
  description: string;
}
const { title, description } = Astro.props;
---
```

- Avoid `any`. Prefer type inference. For simple single-prop components, inline destructuring without an interface is acceptable.
- Do not break existing type-correctness. Run `pnpm astro check` before committing.

---

## Code Style

### Imports

- Use the `@/` path alias for imports that cross directories:

```ts
import Layout from "@/layouts/Layout.astro";
import SmokeEffect from "@/components/SmokeEffect.astro";
```

- Relative imports (`../`) are acceptable for closely related siblings.
- Font packages are imported as bare side-effects in `Layout.astro`:

```ts
import "@fontsource-variable/lora";
```

- Three.js uses a namespace import: `import * as THREE from "three"`.
- Clerk components are imported explicitly (no barrel re-exports):

```ts
import { SignedIn, UserButton } from "@clerk/astro/components";
```

### Naming

- **Components**: PascalCase `.astro` files (`LandingHeader.astro`, `CardsComponent.astro`).
- **Pages**: PascalCase is the existing convention (`Dropbox.astro`); match existing style for new pages.
- **Variables**: Mixed Spanish/English exists throughout — use Spanish for UI-facing identifiers (e.g., `botonEmpanadas`, `campoData`) and English for utility/technical ones (e.g., `smokeParticles`, `createHtmlStructure`).
- **CSS custom classes**: Spanish by convention (`mostrar`, `ocultar`, `mostrarLG`, `ocultarParrilla`).
- **Data arrays**: Spanish (`campoData`, `marData`, `granjaData`).
- Do not introduce new inconsistencies — match the naming language already used in the surrounding code.

### Tailwind CSS

- Tailwind is the **only** styling solution. Do not add CSS-in-JS or CSS modules.
- Arbitrary values are used and accepted: `text-[65px]`, `top-[135px]`, `border-[3px]`.
- Use `md:hidden` / `hidden md:flex` for responsive dual-implementation sections.
- Custom theme tokens defined in `tailwind.config.cjs`:
  - `text-primary` → `#0C1018` (near-black bg)
  - `text-secundary` → `#efefef` (light gray)
  - `text-tercero` → `#ff3b3f` (red accent)
  - `font-sans` → Gotham SSm A
  - `font-pages` → Permanent Marker
  - `font-boldes` → Magical Night (custom woff2)
- Global CSS lives in `Layout.astro` inside `<style is:global>`. Add new global rules there.
- Per-component scoped styles go in a `<style>` block inside the component.

### Astro Components

- Use the frontmatter `---` block for all TypeScript/imports.
- Client-side interactivity uses plain browser JS in `<script>` blocks (no reactive framework):

```astro
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("myButton");
    btn?.addEventListener("click", () => { /* ... */ });
  });
</script>
```

- Show/hide is toggled via class manipulation (`classList.add("mostrar")`, `classList.remove("ocultar")`), not JS visibility or display styles.
- The animated navigation highlight pattern uses CSS custom properties set via `style.setProperty("--left", ...)` — follow this pattern for position-animated UI elements.
- Slots are used in wrapper components (`Portada.astro`): name them clearly.

### Error Handling

- No error boundary pattern is established. Use optional chaining for nullable DOM refs:

```ts
element?.addEventListener("click", handler);
$container?.appendChild(child);
```

- Guard DOM lookups with early returns: `if (!btn) return;`
- No try/catch is used anywhere in this project. Only add it when dealing with async operations or external calls.

---

## Architecture Notes

### SSR and Auth

- All pages are server-rendered (`output: "server"`). There is no static generation.
- `src/middleware.ts` uses `clerkMiddleware` to protect `/Dropbox`. Any new protected routes must be added to the `createRouteMatcher` array there.
- `.env` is gitignored and required for Clerk keys (`CLERK_SECRET_KEY`, `PUBLIC_CLERK_PUBLISHABLE_KEY`).

### Menu Data

- All menu data (empanadas, pizzas, entradas, etc.) is hardcoded as arrays inside `pruebaCartaContenedor.astro`. Do not duplicate this data in new components — extract to a shared `src/data/` file if new consumers need it.

### Responsive Strategy

- Mobile (< `md`) and desktop (`md+`) often render separate implementations within the same component, hidden via Tailwind breakpoint classes.
- The main menu component (`pruebaCartaContenedor.astro`) is ~1600 lines as a result — avoid making it longer; prefer extracting sub-components.

### Three.js Smoke

- `SmokeEffect.astro` is desktop-only (hidden below 768px via JS check). Any changes to the scene must use the existing `requestAnimationFrame` loop.
- The mobile equivalent is `LightsBackground.astro` (CSS-only blur effect).

---

## Known Issues / Tech Debt

- `Caurosel.astro` is a typo — do not rename without updating all imports.
- `arial-label` misspellings exist in several components (should be `aria-label`) — fix when touching those components.
- Several components exist that may be unused (`AsadosDeTira.astro`, `Contacto.astro`, `MenuArray.astro`). Do not delete without verifying.
- `pruebaCartaContenedor.astro` name is a leftover prototype name — do not rename without updating `Carta.astro` and `index.astro`.

---

## Before Committing

```bash
pnpm astro check   # Type-check all .astro files
pnpm build         # Ensure production build succeeds
```

There is no CI pipeline. Verification is manual.
