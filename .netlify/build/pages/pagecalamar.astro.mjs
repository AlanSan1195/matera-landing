/* empty css                                   */
import { d as createComponent, m as maybeRenderHead, f as addAttribute, r as renderTemplate, g as createAstro, j as renderComponent } from "../chunks/astro/server_Bj52SDah.mjs";
import { $ as $$VisualDishPage, a as $$ArrowCurved } from "../chunks/ArrowCurved_D_RA3sEx.mjs";
import { renderers } from "../renderers.mjs";
const $$Astro = createAstro();
const $$ArrowVertical = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArrowVertical;
  const { width = 48, height = 110, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(className, "class")}${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 48 218" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M43.6953 0.553886C43.2025 1.04659 43.1086 1.32814 43.1086 2.64201C43.1086 3.6978 43.2729 4.54243 43.6484 5.41053C44.1412 6.63055 44.1647 6.84171 44.1412 14.8657C44.1178 23.4294 43.9535 28.0514 42.9913 45.601C41.7006 68.8753 40.668 81.0521 38.7671 95.3404C36.8193 110.075 32.6656 130.745 29.1219 143.555C26.6344 152.447 19.9696 172.765 16.9422 180.601C14.1496 187.828 9.92543 196.72 8.35309 198.691L7.88374 199.277L8.02454 196.227C8.30615 190.197 8.23576 173.727 7.93068 173.187C7.60213 172.53 6.49915 171.944 5.65432 171.944C4.66868 171.944 3.54224 173.234 3.23716 174.759C3.09635 175.463 2.86167 179.264 2.74433 183.206C2.36885 195.101 1.89949 200.849 0.749579 207.723C-0.165658 213.19 -0.21259 214.316 0.444503 215.56C1.2424 217.085 1.99337 217.554 3.87078 217.648C5.11457 217.718 5.84206 217.624 7.27359 217.132C9.69075 216.311 15.5811 213.472 22.6683 209.694C32.3839 204.509 31.9381 204.791 31.3983 204.251C30.8116 203.665 19.2655 206.527 11.1692 209.272C8.89285 210.023 6.96851 210.656 6.87464 210.656C6.80423 210.656 6.73382 210.304 6.73382 209.882C6.73382 209.295 7.08585 208.709 8.28269 207.254C14.9475 199.136 19.5706 189.165 26.6344 167.721C33.4165 147.121 35.599 138.98 39.0018 121.266C44.1412 94.6131 46.136 73.0281 47.1451 33.0957C47.3563 24.4148 47.3563 20.3793 47.1216 15.0065C46.6757 4.16704 46.2768 1.11697 45.1738 0.319265C44.4698 -0.149975 44.3524 -0.126513 43.6953 0.553886Z" fill="currentColor"></path> </svg>`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/components/icons/ArrowVertical.astro", void 0);
const $$PageCalamar = createComponent(($$result, $$props, $$slots) => {
  const calamar = {
    visualDescription: "Un calamar que obtenemos de la Patagonia Argentina. Siempre intentamos reflejar el respeto por el producto.",
    title: "Visual del platillo del calamar",
    description: "Visual del platillo del calamar",
    preparacion: "Previamente marinado con un Provenzal (ajo y perejil)",
    acompañamiento: "Tomates rostizados, una de las guarniciones más atesoradas de La Matera"
  };
  return renderTemplate`${renderComponent($$result, "VisualDishPage", $$VisualDishPage, { "title": calamar.title, "description": calamar.description }, { "annotations": ($$result2) => renderTemplate`${maybeRenderHead()}<div> <div class="absolute top-[135px] max-w-[180px] left-[195px]"> <p class="caja-texto font-pages opacity-80 text-sm"> ${calamar.visualDescription} </p> </div> <div class="svg absolute top-[220px] left-[110px] rotate-[-60deg]"> ${renderComponent($$result2, "ArrowCurved", $$ArrowCurved, { "class": "svg", "width": 70, "height": 68 })} </div> <div class="absolute top-[515px] max-w-[115px] left-[10px]"> <p class="caja-texto2 font-pages opacity-80 text-sm"> ${calamar.acompañamiento} </p> </div> <div class="svg2 absolute top-[470px] left-[100px] rotate-[10deg]"> ${renderComponent($$result2, "ArrowVertical", $$ArrowVertical, { "width": 48, "height": 110 })} </div> <div class="absolute top-[605px] max-w-[120px] left-[190px]"> <p class="caja-texto3 font-pages opacity-80 text-sm"> ${calamar.preparacion} </p> </div> <div class="svg3 absolute top-[430px] left-[220px] -rotate-[180deg]"> ${renderComponent($$result2, "ArrowVertical", $$ArrowVertical, { "width": 48, "height": 160 })} </div> </div>`, "image": ($$result2) => renderTemplate`<img src="/imagenes/visuales/calamarVisual.webp" alt="imagen en alta calidad del calamar" class="object-cover h-full w-full">` })}`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/pages/pageCalamar.astro", void 0);
const $$file = "/Users/alansandoval/Documents/Dev/matera-prototipe/src/pages/pageCalamar.astro";
const $$url = "/pageCalamar";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$PageCalamar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
