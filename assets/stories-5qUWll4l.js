import { _ as _imports_0, a as _imports_1 } from "./stub_p-CLMac4Sb.js";
import { _ as _export_sfc, c as createElementBlock, f as createStaticVNode, b as createBaseVNode, n as normalizeClass, F as Fragment, h as renderList, i as createCommentVNode, t as toDisplayString, o as openBlock, e as _imports_2 } from "./index-Cm2emc_N.js";
const _imports_3 = "" + new URL("story_chapter_1_pic-BfeiZK1F.webp", import.meta.url).href;
const _sfc_main = {
  name: "Stories",
  props: {},
  data() {
    return {
      list: [],
      count: 0,
      lang: "en",
      timeline: 0
    };
  },
  computed: {
    chapter1() {
      let list = this.list;
      if (this.timeline == 1) {
        list = this.list.filter((v) => v.story_chapter == 1);
      }
      return list;
    }
  },
  mounted() {
    this.hideLoad();
  },
  methods: {
    toLocation(route) {
      window.location.href = route;
    },
    hideLoad() {
      console.log("hide");
      this.emitter.emit("hide_loading", true);
    },
    getStories() {
      let url = `/${this.lang}/stories${this.timeline == 0 ? "_new" : ""}.json`;
      $.ajax({
        url,
        success: (function(result) {
          console.log(result);
          this.list = result;
          this.count = Object.keys(result).length;
          console.log(this.count);
        }).bind(this)
      });
    },
    initQuery() {
      this.list = [];
      this.count = 0;
    },
    changeTimeline(info) {
      this.timeline = info;
      this.initQuery();
      this.getStories();
    }
  },
  created() {
    this.getStories();
  }
};
const _hoisted_1 = { class: "stories" };
const _hoisted_2 = { class: "main container-fluid text-white p-4" };
const _hoisted_3 = { class: "gallery-switch" };
const _hoisted_4 = { class: "row justify-content-center" };
const _hoisted_5 = { class: "col-12 col-md-10 col-lg-8" };
const _hoisted_6 = {
  key: 0,
  class: "new_story_list"
};
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "story_title" };
const _hoisted_9 = { class: "story_sub" };
const _hoisted_10 = {
  key: 0,
  class: "col-12 col-md-10 col-lg-8"
};
const _hoisted_11 = { class: "Stories" };
const _hoisted_12 = {
  id: "Chapter1",
  class: "story_chapter row row-cols-lg-2 mx-2 mx-lg-0"
};
const _hoisted_13 = ["href"];
const _hoisted_14 = { class: "row align-items-center my-2" };
const _hoisted_15 = { class: "col-10" };
const _hoisted_16 = { class: "m-0 text-nowrap text-truncate" };
const _hoisted_17 = { class: "m-0 text-nowrap text-truncate" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _cache[5] || (_cache[5] = createStaticVNode('<div class="banner" data-v-f37da77e><img class="d-none d-md-block position-relative banner_stub" src="' + _imports_0 + '" alt="" data-v-f37da77e><img class="d-block d-md-none position-relative banner_stub_mobile" src="' + _imports_1 + '" alt="" data-v-f37da77e><div class="banner_text" data-v-f37da77e><div data-v-f37da77e><div class="banner_h1" data-v-f37da77e><img class="banner_hoshi" src="' + _imports_2 + '" alt="" draggable="false" data-v-f37da77e><h1 class="mx-2" data-v-f37da77e>Stories</h1><img class="banner_hoshi" src="' + _imports_2 + '" alt="" draggable="false" data-v-f37da77e></div><p data-v-f37da77e>My story in Yah-Den Mainland!</p></div></div></div>', 1)),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", {
          class: normalizeClass(["switch-item", $data.timeline == 0 ? "active" : ""]),
          onClick: _cache[0] || (_cache[0] = ($event) => $options.changeTimeline(0))
        }, " New timeline ", 2),
        createBaseVNode("div", {
          class: normalizeClass(["switch-item", $data.timeline == 1 ? "active" : ""]),
          onClick: _cache[1] || (_cache[1] = ($event) => $options.changeTimeline(1))
        }, " The forgotten timeline ", 2)
      ]),
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode("div", _hoisted_5, [
          $data.timeline == 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.list, (item, index) => {
              return openBlock(), createElementBlock("div", {
                class: "story",
                onClick: ($event) => $options.toLocation(`/story?id=${item.story_id}&new=1`),
                key: index
              }, [
                _cache[2] || (_cache[2] = createBaseVNode("div", { class: "opt_hoshi_outer" }, [
                  createBaseVNode("img", {
                    src: _imports_2,
                    alt: "",
                    draggable: "false",
                    class: "option_hoshi",
                    loading: "lazy"
                  })
                ], -1)),
                createBaseVNode("div", null, [
                  createBaseVNode("div", _hoisted_8, toDisplayString(item.story_title), 1),
                  createBaseVNode("div", _hoisted_9, toDisplayString(item.story_sub), 1)
                ])
              ], 8, _hoisted_7);
            }), 128))
          ])) : createCommentVNode("", true)
        ]),
        $data.timeline == 1 ? (openBlock(), createElementBlock("div", _hoisted_10, [
          createBaseVNode("h2", null, [
            createBaseVNode("span", null, "There's a total of " + toDisplayString($data.count) + " story(ies) so far.", 1)
          ]),
          createBaseVNode("div", _hoisted_11, [
            _cache[4] || (_cache[4] = createStaticVNode('<div class="row justify-content-center" data-v-f37da77e><div class="col-lg-8" data-v-f37da77e><div class="row" data-v-f37da77e><div class="col-12 col-lg-4 d-flex justify-content-center" data-v-f37da77e><div class="col-4 col-lg-12" data-v-f37da77e><img src="' + _imports_3 + '" alt="" class="w-100" draggable="false" loading="lazy" data-v-f37da77e></div></div><div class="col-12 col-lg-8 d-flex justify-content-center" data-v-f37da77e><div class="col-8 col-lg-12" data-v-f37da77e><h3 data-v-f37da77e>Chapter 1:</h3><p data-v-f37da77e>Rocky&#39;s story when first coming to the Yah-Den Mainland.</p></div></div></div></div></div>', 1)),
            createBaseVNode("div", _hoisted_12, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($options.chapter1, (item, index) => {
                return openBlock(), createElementBlock("a", {
                  key: index,
                  href: `/story?id=${item.story_id}`
                }, [
                  createBaseVNode("div", _hoisted_14, [
                    _cache[3] || (_cache[3] = createBaseVNode("div", {
                      class: "col-1 col-lg-2 flex-shrink-0 d-flex justify-content-center",
                      style: { "min-width": "48px" }
                    }, [
                      createBaseVNode("img", {
                        src: _imports_2,
                        alt: "",
                        draggable: "false",
                        class: "option_hoshi",
                        loading: "lazy"
                      })
                    ], -1)),
                    createBaseVNode("div", _hoisted_15, [
                      createBaseVNode("h4", _hoisted_16, toDisplayString(item.story_title), 1),
                      createBaseVNode("p", _hoisted_17, toDisplayString(item.story_sub), 1)
                    ])
                  ])
                ], 8, _hoisted_13);
              }), 128))
            ])
          ])
        ])) : createCommentVNode("", true)
      ])
    ])
  ]);
}
const stories = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f37da77e"]]);
export {
  stories as default
};
