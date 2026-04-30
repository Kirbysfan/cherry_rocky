import { _ as _export_sfc, c as createElementBlock, b as createBaseVNode, t as toDisplayString, l as withDirectives, n as normalizeClass, a as createVNode, w as withCtx, d as createTextVNode, i as createCommentVNode, j as watch, m as resolveDirective, r as resolveComponent, u as useRoute, k as useRouter, o as openBlock, F as Fragment, h as renderList, p as createBlock } from "./index-DeYcqt7P.js";
const _sfc_main = {
  name: "Gallery-detail",
  props: {},
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
  data() {
    return {
      info: {
        link: {}
      },
      id: "",
      lang: "en",
      loading: true
    };
  },
  methods: {
    getPhoto() {
      $.ajax({
        url: `/${this.lang}/gallery.json`,
        success: (function(res) {
          let result = res.filter((v) => v.id == this.id);
          if (result.length === 0 || result[0].hide === true) {
            this.$message.error(`Corresponding photo doesn't exist or not available.`);
            this.router.push("/gallery-list");
          } else {
            this.info = result[0];
            this.loading = false;
          }
        }).bind(this)
      });
    }
  },
  created() {
    let params = new URLSearchParams(window.location.search);
    this.id = params.get("id");
    if (!this.id) {
      this.router.push("/gallery-list");
    } else {
      this.getPhoto();
    }
  }
};
const _hoisted_1 = { class: "gallery-detail" };
const _hoisted_2 = { class: "mobile_gallery_title" };
const _hoisted_3 = { class: "d-flex align-items-center gallery_title" };
const _hoisted_4 = { class: "flex-grow-1 text-center title_bar" };
const _hoisted_5 = { class: "d-flex align-items-center gallery_title" };
const _hoisted_6 = { class: "flex-grow-1 text-center title_bar" };
const _hoisted_7 = { class: "d-flex flex-column flex-lg-row mt-2 overflow-x-auto" };
const _hoisted_8 = { class: "flex-grow-1 ms-3 d-flex flex-column overflow-hidden" };
const _hoisted_9 = ["innerHTML"];
const _hoisted_10 = { class: "info d-flex justify-content-between w-100; overflow-y-auto" };
const _hoisted_11 = { class: "links" };
const _hoisted_12 = { key: 0 };
const _hoisted_13 = ["href"];
const _hoisted_14 = ["href"];
const _hoisted_15 = ["href"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_image = resolveComponent("el-image");
  const _component_el_carousel_item = resolveComponent("el-carousel-item");
  const _component_el_carousel = resolveComponent("el-carousel");
  const _directive_loading = resolveDirective("loading");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, toDisplayString($data.info.title), 1),
        _cache[4] || (_cache[4] = createBaseVNode("div", { class: "flex-grow-1 position-relative" }, null, -1)),
        createBaseVNode("div", {
          class: "close_btn",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.router.push("/gallery-list"))
        }, _cache[3] || (_cache[3] = [
          createBaseVNode("span", { class: "material-symbols-outlined user-select-none" }, " close ", -1)
        ]))
      ])
    ]),
    withDirectives((openBlock(), createElementBlock("div", {
      class: normalizeClass(["gallery-detail-main text-white", $data.info.vanilla == 1 ? "vanilla-item" : ""])
    }, [
      createBaseVNode("div", _hoisted_5, [
        createBaseVNode("div", _hoisted_6, toDisplayString($data.info.title), 1),
        _cache[6] || (_cache[6] = createBaseVNode("div", { class: "flex-grow-1 position-relative" }, null, -1)),
        createBaseVNode("div", {
          class: "close_btn",
          onClick: _cache[1] || (_cache[1] = ($event) => $setup.router.push("/gallery-list"))
        }, _cache[5] || (_cache[5] = [
          createBaseVNode("span", { class: "material-symbols-outlined user-select-none" }, " close ", -1)
        ]))
      ]),
      createBaseVNode("div", _hoisted_7, [
        createVNode(_component_el_carousel, {
          class: "gallery-carousel flex-shrink-0",
          height: "100%",
          autoplay: false
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.info.src, (i, index) => {
              return openBlock(), createBlock(_component_el_carousel_item, { key: index }, {
                default: withCtx(() => [
                  createVNode(_component_el_image, {
                    "preview-teleported": true,
                    "z-index": "9601",
                    "hide-on-click-modal": true,
                    "preview-src-list": $data.info.src.map((v) => v = `/gallery/${v}`),
                    class: "img h-100 w-100 text-center",
                    src: `/gallery/${i}`,
                    alt: "",
                    draggable: "false",
                    fit: "contain"
                  }, null, 8, ["preview-src-list", "src"])
                ]),
                _: 2
              }, 1024);
            }), 128))
          ]),
          _: 1
        }),
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("div", {
            class: "flex-grow-1 content_box",
            innerHTML: $data.info.content
          }, null, 8, _hoisted_9),
          createBaseVNode("div", _hoisted_10, [
            createBaseVNode("div", null, toDisplayString($data.info.date), 1),
            createBaseVNode("div", null, "Artist: " + toDisplayString($data.info.artist), 1)
          ]),
          createBaseVNode("div", _hoisted_11, [
            $data.info.link.rednote ? (openBlock(), createElementBlock("div", _hoisted_12, [
              createBaseVNode("a", {
                class: "text-white",
                href: $data.info.link.rednote
              }, _cache[7] || (_cache[7] = [
                createBaseVNode("i", { class: "fa-solid fa-book" }, null, -1),
                createTextVNode(" View in Rednote")
              ]), 8, _hoisted_13)
            ])) : createCommentVNode("", true),
            createBaseVNode("div", null, [
              $data.info.link.facebook ? (openBlock(), createElementBlock("a", {
                key: 0,
                class: "text-white",
                href: $data.info.link.facebook
              }, _cache[8] || (_cache[8] = [
                createBaseVNode("i", { class: "fa-brands fa-facebook" }, null, -1),
                createTextVNode(" Artist Facebook")
              ]), 8, _hoisted_14)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", null, [
              $data.info.link.forum ? (openBlock(), createElementBlock("a", {
                key: 0,
                class: "text-white",
                href: $data.info.link.forum
              }, _cache[9] || (_cache[9] = [
                createBaseVNode("i", { class: "fa-solid fa-paw" }, null, -1),
                createTextVNode(" View in Forum")
              ]), 8, _hoisted_15)) : createCommentVNode("", true)
            ])
          ])
        ])
      ]),
      _cache[10] || (_cache[10] = createBaseVNode("div", { class: "text-center w-100 mt-2" }, [
        createBaseVNode("strong", null, "The DNAxCAT character design is copyrighted to DNAxCAT")
      ], -1))
    ], 2)), [
      [_directive_loading, $data.loading]
    ]),
    createBaseVNode("div", {
      class: "gallery-detail-back",
      onClick: _cache[2] || (_cache[2] = ($event) => $setup.router.push("/gallery-list"))
    })
  ]);
}
const galleryDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aae98fc9"]]);
export {
  galleryDetail as default
};
