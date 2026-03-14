import { d as createComponent, m as maybeRenderHead, r as renderTemplate, f as addAttribute, p as renderHead, j as renderComponent, k as renderSlot, g as createAstro } from "./astro/server_Bj52SDah.mjs";
/* empty css                         */
const $$LightsBackground = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="-z-50  blur-md  md:hidden  fixed bg-no-repeat h-screen w-screen" data-astro-cid-kx3qousz></div> `;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/LightsBackground.astro", void 0);
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, lang = "es" } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="UTF-8"><title>${title}</title><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/imagenes/logo-cabecera.webp"><link rel="apple-touch-icon" sizes="180x180" href="/imagenes/logo-cabecera.webp"><link rel="canonical" href="https://lamatera.online"><meta name="description"${addAttribute(description, "content")}><meta name="google-site-verification" content="zuRgqcQ25AX8z3a-qvX5CG-Gfy_eYJSoUt_T7LDRQG4"><meta name="keywords" content="comida,vino,restaurante,argenita,cava,servicio,chef,eventos,argentino,cortes,bife,lomo,vacio,entraña,asado,chorizo,lomito, rib eye, parrilla, facturación."><meta property="og:locale" content="es_ES"><meta property="og:type" content="website"><meta property="og:title" content="La Matera, Restaurante Argentino una referencia gastronomica en Guadalajara"><meta property="og:description" content="Somos un punto de referencia en la ciudad, un restaurante con gran trayectoria en Guadalajara."><meta property="og:url" content="https://www.matera.online/"><meta property="og:site_name" content="La Matera, Restaurante Argentino una referencia gastronomica en Guadalajara"><meta property="og:image" content="https://www.lamatera.online/imagenes/preview.webp"><meta content="summary_large_image" name="twitter:card"><meta name="twitter:site" content="@lamateragdl"><meta name="twitter:creator" content="@AlanSan86780460"><meta name="twitter:title" content="La Matera"><meta name="twitter:description" content="Somos un punto de referencia en la ciudad, un restaurante con gran trayectoria en Guadalajara. Ven y disfruta de la experiencia gastronómica de Argentina y conoce una de las cavas más reconocidas."><meta name="twitter:image" content="https://wwww.lamatera.online/imagenes/preview.webp">${renderHead()}</head> <body> ${renderComponent($$result, "LightsBackground", $$LightsBackground, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/layouts/Layout.astro", void 0);
export {
  $$Layout as $
};
