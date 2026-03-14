/* empty css                                   */
import { d as createComponent, j as renderComponent, r as renderTemplate } from "../chunks/astro/server_Bj52SDah.mjs";
import { $ as $$HomePage } from "../chunks/HomePage_CAOpmbGn.mjs";
import { renderers } from "../renderers.mjs";
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "HomePage", $$HomePage, { "lang": "zh", "title": "拉马特拉 – 阿根廷的味道", "description": "我们是瓜达拉哈拉市的标志性餐厅，拥有悠久的历史。来体验阿根廷的美食文化，参观最受认可的酒窖之一。" })}`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/pages/zh/index.astro", void 0);
const $$file = "/Users/alansandoval/Documents/Dev/matera-prototipe/src/pages/zh/index.astro";
const $$url = "/zh";
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
