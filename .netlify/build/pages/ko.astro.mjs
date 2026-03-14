/* empty css                                   */
import { d as createComponent, j as renderComponent, r as renderTemplate } from "../chunks/astro/server_Bj52SDah.mjs";
import { $ as $$HomePage } from "../chunks/HomePage_CAOpmbGn.mjs";
import { renderers } from "../renderers.mjs";
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "HomePage", $$HomePage, { "lang": "ko", "title": "라 마테라 – 아르헨티나의 맛", "description": "저희는 과달라하라에서 오랜 역사를 가진 레스토랑으로, 도시의 명소입니다. 아르헨티나의 미식 경험을 즐기고 가장 유명한 와인 셀러 중 하나를 만나보세요." })}`;
}, "/Users/alansandoval/Documents/Dev/matera-prototipe/src/pages/ko/index.astro", void 0);
const $$file = "/Users/alansandoval/Documents/Dev/matera-prototipe/src/pages/ko/index.astro";
const $$url = "/ko";
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
