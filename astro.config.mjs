import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
// tenemos que instalar el adapatdor de servidor con pnpm add @astrojs/node
import node from "@astrojs/node";
// autentificacion con clerk
import clerk from "@clerk/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), clerk()],
  adapter: node({ mode: "standalone" }),
  output: "server",
});