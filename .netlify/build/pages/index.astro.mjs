/* empty css                                   */
import { d as createComponent, j as renderComponent, r as renderTemplate } from "../chunks/astro/server_Bj52SDah.mjs";
import { $ as $$HomePage } from "../chunks/HomePage_CAOpmbGn.mjs";
import { renderers } from "../renderers.mjs";
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "HomePage", $$HomePage, { "lang": "es", "title": "La Matera - El sabor de Argentina en casa", "description": "Somos un punto de referencia en la ciudad, un restaurante con gran trayectoria en Guadalajara. Ven y disfruta de la experiencia gastronómica de Argentina y conoce una de las cavas más reconocidas." })}`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/pages/index.astro", void 0);
const $$file = "/Users/alansandoval/Documents/Dev/matera-prototipe/src/pages/index.astro";
const $$url = "";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
