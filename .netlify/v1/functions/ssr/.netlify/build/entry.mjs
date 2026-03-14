import { renderers } from "./renderers.mjs";
import { s as serverEntrypointModule } from "./chunks/_@astrojs-ssr-adapter_DYQ_v7bF.mjs";
import { manifest } from "./manifest_DzQ3Jb48.mjs";
import { createExports } from "@astrojs/netlify/ssr-function.js";
const serverIslandMap = /* @__PURE__ */ new Map();
;
const _page0 = () => import("./pages/_image.astro.mjs");
const _page1 = () => import("./pages/dropbox.astro.mjs");
const _page2 = () => import("./pages/en.astro.mjs");
const _page3 = () => import("./pages/ja.astro.mjs");
const _page4 = () => import("./pages/ko.astro.mjs");
const _page5 = () => import("./pages/pagecalamar.astro.mjs");
const _page6 = () => import("./pages/pagematambrito.astro.mjs");
const _page7 = () => import("./pages/zh.astro.mjs");
const _page8 = () => import("./pages/index.astro.mjs");
const pageMap = /* @__PURE__ */ new Map([
  ["node_modules/.pnpm/astro@5.18.1_typescript@5.9.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
  ["src/pages/Dropbox.astro", _page1],
  ["src/pages/en/index.astro", _page2],
  ["src/pages/ja/index.astro", _page3],
  ["src/pages/ko/index.astro", _page4],
  ["src/pages/pageCalamar.astro", _page5],
  ["src/pages/pageMatambrito.astro", _page6],
  ["src/pages/zh/index.astro", _page7],
  ["src/pages/index.astro", _page8]
]);
const _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions: () => import("./noop-entrypoint.mjs"),
  middleware: () => import("./_astro-internal_middleware.mjs")
});
const _args = {
  "middlewareSecret": "1eabde01-2572-4a00-ae9c-819b8bc27a36"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = "start";
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
  serverEntrypointModule[_start](_manifest, _args);
}
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
