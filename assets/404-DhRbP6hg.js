import { _ as _export_sfc, c as createElementBlock, b as createBaseVNode, t as toDisplayString, k as watch, u as useRoute, m as useRouter, o as openBlock } from "./index-B_ONfjOx.js";
import { _ as _imports_0 } from "./404-BzfYrOTr.js";
const _sfc_main = {
  setup() {
    const router = useRouter();
    const route = useRoute();
    watch(
      () => route.name,
      () => {
      }
    );
    return { router, route };
  },
  mounted() {
    this.hideLoad();
  },
  methods: {
    hideLoad() {
      console.log("hide");
      this.emitter.emit("hide_loading", true);
    }
  }
};
const _hoisted_1 = { class: "container-fluid main text-center py-5" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _cache[0] || (_cache[0] = createBaseVNode("div", { class: "img404_outer" }, [
      createBaseVNode("img", {
        class: "img404",
        src: _imports_0,
        alt: ""
      })
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("h2", null, "I'm sorry, but...", -1)),
    createBaseVNode("h3", null, 'The path "' + toDisplayString($setup.route.path) + '" you are trying to access...', 1),
    _cache[2] || (_cache[2] = createBaseVNode("h1", null, "Doesn't exist! QAQ", -1)),
    _cache[3] || (_cache[3] = createBaseVNode("p", null, "Error: 404", -1)),
    _cache[4] || (_cache[4] = createBaseVNode("form", { action: "/" }, [
      createBaseVNode("button", { class: "button" }, "Back to home")
    ], -1))
  ]);
}
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-042544f2"]]);
export {
  _404 as default
};
