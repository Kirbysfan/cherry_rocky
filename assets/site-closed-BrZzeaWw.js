import { _ as _export_sfc, c as createElementBlock, f as createStaticVNode, o as openBlock } from "./index-Cm2emc_N.js";
const _imports_0 = "" + new URL("../favicon.png", import.meta.url).href;
const _sfc_main = {
  setup() {
    let isResume = sessionStorage.getItem("resume");
    if (isResume === "1") {
      window.location.href = "/";
    }
    document.title = "The site is temporary closed";
    console.log("site closed");
  },
  data() {
  }
};
const _hoisted_1 = { class: "vw-100 vh-100 bg-dark" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, _cache[0] || (_cache[0] = [
    createStaticVNode('<div class="modal d-block modal-xl"><div class="modal-dialog"><div class="modal-content"><div class="modal-header bg-danger"><h5 class="modal-title text-white"><img style="height:32px;" class="me-3" src="' + _imports_0 + '" alt="">Site temporarily closed</h5></div><div class="modal-body"><p>Due to unexpected situation, this site is temporarily closed..</p><p>The site will NOT be open to public until <strong class="text-danger">21st May 2026</strong>.</p><p>Thank you for understanding.</p></div></div></div></div>', 1)
  ]));
}
const siteClosed = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  siteClosed as default
};
