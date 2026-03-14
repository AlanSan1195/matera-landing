/* empty css                                   */
import { d as createComponent, j as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../chunks/astro/server_Bj52SDah.mjs";
import { $ as $$VisualDishPage, a as $$ArrowCurved } from "../chunks/ArrowCurved_D_RA3sEx.mjs";
import { renderers } from "../renderers.mjs";
const $$PageMatambrito = createComponent(($$result, $$props, $$slots) => {
  const matambre = {
    visualDescription: "El matambrito es un corte de cerdo que proviene de la parte del pecho del animal.",
    title: "Visual del platillo matambrito de cerdo",
    description: "Visual del platillo matambrito de cerdo"
  };
  return renderTemplate`${renderComponent($$result, "VisualDishPage", $$VisualDishPage, { "title": matambre.title, "description": matambre.description }, { "annotations": ($$result2) => renderTemplate`${maybeRenderHead()}<div> <div class="absolute top-[125px] max-w-[220px] left-[100px]"> <p class="caja-texto font-pages opacity-80 text-sm"> ${matambre.visualDescription} </p> </div> <div class="svg absolute top-[150px] left-[20px] rotate-[-80deg]"> ${renderComponent($$result2, "ArrowCurved", $$ArrowCurved, { "width": 90, "height": 88 })} </div> <div class="absolute top-[535px] max-w-[120px] left-[120px]"> <p class="caja-texto2 font-pages opacity-80 text-sm">
Pure de camote horneado al momento.
</p> </div> <div class="svg2 absolute top-[480px] left-[200px] rotate-[100deg]"> ${renderComponent($$result2, "ArrowCurved", $$ArrowCurved, { "width": 90, "height": 88 })} </div> </div>`, "image": ($$result2) => renderTemplate`<img src="/imagenes/visuales/matambreVisual.webp" alt="imagen en alta calidad del Matambrito de cerdo" class="object-cover h-full w-full">` })}`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/pages/pageMatambrito.astro", void 0);
const $$file = "/Users/alansandoval/Documents/Dev/matera-prototipe/src/pages/pageMatambrito.astro";
const $$url = "/pageMatambrito";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$PageMatambrito,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
