import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
// adaptador para despliegue en Netlify (funciones serverless)
import netlify from "@astrojs/netlify";
// autentificacion con clerk
import clerk from "@clerk/astro";
import { neobrutalism } from "@clerk/themes";
import { esES } from "@clerk/localizations";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), clerk({
    localizations: esES,
    appearance: {
      baseTheme: neobrutalism
    }
  })],
  adapter: netlify(),
  output: "server",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "ko", "zh", "ja"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});