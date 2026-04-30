import { _ as _imports_0, a as _imports_1 } from "./stub_p-CLMac4Sb.js";
import { _ as _export_sfc, c as createElementBlock, f as createStaticVNode, b as createBaseVNode, F as Fragment, h as renderList, o as openBlock, e as _imports_2, t as toDisplayString } from "./index-f5MQle3O.js";
const _sfc_main = {
  name: "Stories",
  props: {},
  data() {
    return {
      list: [],
      count: 0,
      lang: "en",
      downloadables: [],
      d_count: 0
    };
  },
  computed: {},
  mounted() {
    this.hideLoad();
  },
  methods: {
    copyToCipboard(info) {
      console.log(info);
      navigator.clipboard.writeText(info);
      this.$message.success("Copied to clipboard!");
    },
    hideLoad() {
      console.log("hide");
      this.emitter.emit("hide_loading", true);
    },
    getStories() {
      $.ajax({
        url: `/${this.lang}/funstuff_online.json`,
        success: (function(result) {
          console.log(result);
          this.list = result;
          this.count = Object.keys(result).length;
          console.log(this.count);
        }).bind(this)
      });
    },
    getDownloadable() {
      $.ajax({
        url: `/${this.lang}/funstuff_download.json`,
        success: (function(result) {
          console.log(result);
          this.downloadables = result;
          this.d_count = Object.keys(result).length;
          console.log(this.count);
        }).bind(this)
      });
    }
  },
  created() {
    this.getStories();
    this.getDownloadable();
  }
};
const _hoisted_1 = { class: "stories" };
const _hoisted_2 = { class: "main container-fluid text-white p-4" };
const _hoisted_3 = { class: "row justify-content-center" };
const _hoisted_4 = { class: "col-12 col-md-10 col-lg-8" };
const _hoisted_5 = { class: "Stories" };
const _hoisted_6 = {
  id: "Chapter1",
  class: "story_chapter row row-cols-lg-2 mx-2 mx-lg-0"
};
const _hoisted_7 = ["href"];
const _hoisted_8 = { class: "row align-items-center my-2" };
const _hoisted_9 = { class: "col-10" };
const _hoisted_10 = { class: "m-0 text-nowrap text-truncate" };
const _hoisted_11 = ["innerHTML"];
const _hoisted_12 = { class: "Stories d-flex flex-column align-items-center" };
const _hoisted_13 = {
  id: "Chapter1",
  class: "story_chapter row row-cols-1 mx-2 mx-lg-0"
};
const _hoisted_14 = { class: "col-10" };
const _hoisted_15 = { class: "m-0 text-nowrap text-truncate" };
const _hoisted_16 = ["href"];
const _hoisted_17 = { class: "input-group mb-1 input-group-sm" };
const _hoisted_18 = ["onClick"];
const _hoisted_19 = ["value"];
const _hoisted_20 = { class: "input-group mb-3 input-group-sm" };
const _hoisted_21 = ["onClick"];
const _hoisted_22 = ["value"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _cache[5] || (_cache[5] = createStaticVNode('<div class="banner" data-v-4bbd3b71><img class="d-none d-md-block position-relative banner_stub" src="' + _imports_0 + '" alt="" data-v-4bbd3b71><img class="d-block d-md-none position-relative banner_stub_mobile" src="' + _imports_1 + '" alt="" data-v-4bbd3b71><div class="banner_text" data-v-4bbd3b71><div data-v-4bbd3b71><div class="banner_h1" data-v-4bbd3b71><img class="banner_hoshi" src="' + _imports_2 + '" alt="" draggable="false" data-v-4bbd3b71><h1 class="mx-2" data-v-4bbd3b71>Fun stuffs</h1><img class="banner_hoshi" src="' + _imports_2 + '" alt="" draggable="false" data-v-4bbd3b71></div><p data-v-4bbd3b71>Interesting things I&#39;ve made!</p></div></div></div>', 1)),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          _cache[2] || (_cache[2] = createBaseVNode("h2", null, [
            createBaseVNode("span", null, "For having fun online:")
          ], -1)),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.list, (item, index) => {
                return openBlock(), createElementBlock("a", {
                  key: index,
                  href: item.route
                }, [
                  createBaseVNode("div", _hoisted_8, [
                    _cache[0] || (_cache[0] = createBaseVNode("div", {
                      class: "col-1 col-lg-2 flex-shrink-0 d-flex justify-content-center",
                      style: { "min-width": "48px" }
                    }, [
                      createBaseVNode("img", {
                        src: _imports_2,
                        alt: "",
                        draggable: "false",
                        class: "option_hoshi"
                      })
                    ], -1)),
                    createBaseVNode("div", _hoisted_9, [
                      createBaseVNode("h4", _hoisted_10, toDisplayString(item.title), 1),
                      createBaseVNode("p", {
                        class: "m-0 text-nowrap text-truncate",
                        innerHTML: item.sub
                      }, null, 8, _hoisted_11)
                    ])
                  ])
                ], 8, _hoisted_7);
              }), 128))
            ])
          ]),
          _cache[3] || (_cache[3] = createBaseVNode("h3", { class: "text-center" }, "More stuffs coming soon...", -1)),
          _cache[4] || (_cache[4] = createBaseVNode("h2", null, [
            createBaseVNode("span", null, "Downloadables:")
          ], -1)),
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("div", _hoisted_13, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.downloadables, (item, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: "row align-items-center my-2 justify-content-center downloadable_item"
                }, [
                  _cache[1] || (_cache[1] = createBaseVNode("div", { class: "col-1 col-lg-2 flex-shrink-0 d-flex justify-content-center" }, [
                    createBaseVNode("img", {
                      src: _imports_2,
                      alt: "",
                      draggable: "false",
                      class: "option_hoshi"
                    })
                  ], -1)),
                  createBaseVNode("div", _hoisted_14, [
                    createBaseVNode("h4", _hoisted_15, [
                      createBaseVNode("a", {
                        class: "text-decoration-none text-white",
                        href: item.route,
                        target: "_blank"
                      }, toDisplayString(item.title), 9, _hoisted_16)
                    ]),
                    createBaseVNode("div", _hoisted_17, [
                      createBaseVNode("span", {
                        class: "input-group-text",
                        id: "basic-addon1",
                        onClick: ($event) => $options.copyToCipboard(item.md5),
                        style: { "cursor": "pointer" },
                        title: "Click to copy"
                      }, "MD5", 8, _hoisted_18),
                      createBaseVNode("input", {
                        type: "text",
                        class: "form-control",
                        placeholder: "Username",
                        disabled: "disabled",
                        value: item.md5,
                        "aria-label": "Username",
                        "aria-describedby": "basic-addon1"
                      }, null, 8, _hoisted_19)
                    ]),
                    createBaseVNode("div", _hoisted_20, [
                      createBaseVNode("span", {
                        class: "input-group-text",
                        id: "basic-addon1",
                        onClick: ($event) => $options.copyToCipboard(item.sha256),
                        style: { "cursor": "pointer" },
                        title: "Click to copy"
                      }, "SHA256", 8, _hoisted_21),
                      createBaseVNode("input", {
                        type: "text",
                        class: "form-control",
                        placeholder: "Username",
                        disabled: "disabled",
                        value: item.sha256,
                        "aria-label": "Username",
                        "aria-describedby": "basic-addon1"
                      }, null, 8, _hoisted_22)
                    ])
                  ])
                ]);
              }), 128))
            ])
          ])
        ])
      ])
    ])
  ]);
}
const funStuffs = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4bbd3b71"]]);
export {
  funStuffs as default
};
