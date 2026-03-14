/* empty css                                   */
import { d as createComponent, j as renderComponent, r as renderTemplate } from "../chunks/astro/server_Bj52SDah.mjs";
import { $ as $$HomePage } from "../chunks/HomePage_CAOpmbGn.mjs";
import { renderers } from "../renderers.mjs";
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "HomePage", $$HomePage, { "lang": "en", "title": "La Matera – The taste of Argentina at home", "description": "We are a reference point in the city, a restaurant with a long history in Guadalajara. Come and enjoy the gastronomic experience of Argentina and discover one of the most recognized wine cellars." })}`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/pages/en/index.astro", void 0);
const $$file = "/Users/alansandoval/Documents/Dev/matera-prototipe/src/pages/en/index.astro";
const $$url = "/en";
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
