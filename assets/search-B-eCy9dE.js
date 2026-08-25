import { _ as _export_sfc, k as watch, l as createBlock, w as withCtx, u as useRoute, m as useRouter, r as resolveComponent, p as resolveDirective, o as openBlock, b as createBaseVNode, n as normalizeClass, t as toDisplayString, j as withDirectives, c as createElementBlock, a as createVNode, F as Fragment, h as renderList, d as createTextVNode, i as createCommentVNode, q as vModelText, e as _imports_2 } from "./index-B_ONfjOx.js";
import { _ as _imports_0 } from "./404-BzfYrOTr.js";
const _sfc_main$1 = {
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
  watch: {
    // 'route.path': {
    //   handler(newId, oldId) {
    //     console.log(newId)
    //     if (newId == '/gallery-detail') {
    //       this.startQuery()
    //     }
    //   },
    //   immediate: true
    // }
  },
  data() {
    return {
      info: {
        link: {}
      },
      id: 1,
      lang: "en",
      loading: true,
      show_modal: false,
      lockScroll: false
    };
  },
  methods: {
    detectMobile() {
      if (navigator.userAgentData) {
        return navigator.userAgentData.mobile;
      }
      const uaCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (uaCheck) return true;
      const hasTouch = navigator.maxTouchPoints > 0 || "ontouchstart" in window;
      const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
      return hasTouch && isSmallScreen;
    },
    startQuery() {
      let params = new URLSearchParams(window.location.search);
      this.id = params.get("id") || 1;
      if (!this.id) {
        this.router.push("/gallery-list");
      } else {
        this.getPhoto();
      }
    },
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
          this.show_modal = true;
        }).bind(this)
      });
    },
    closeModal() {
      this.show_modal = false;
    },
    copyToCipboard() {
      let info = "http://cherryrocky.fun/gallery-detail?id=" + this.id;
      navigator.clipboard.writeText(info);
      this.$message.success("Copied to clipboard!");
    }
  },
  created() {
    this.lockScroll = this.detectMobile();
    this.emitter.on("acceptSearchResult", (data) => {
      this.id = data;
      this.getPhoto();
    });
  }
};
const _hoisted_1$1 = { class: "gallery-detail" };
const _hoisted_2$1 = { class: "d-flex align-items-center gallery_title" };
const _hoisted_3$1 = { class: "flex-grow-1 text-center title_bar" };
const _hoisted_4$1 = { class: "d-flex align-items-center gallery_title" };
const _hoisted_5$1 = { class: "flex-grow-1 text-center title_bar" };
const _hoisted_6$1 = { class: "d-flex flex-column flex-lg-row mt-2 overflow-x-auto" };
const _hoisted_7$1 = { class: "flex-grow-1 ms-0 ms-md-3 d-flex flex-column overflow-hidden" };
const _hoisted_8$1 = ["innerHTML"];
const _hoisted_9$1 = { class: "input-group mb-3 input-group-sm" };
const _hoisted_10$1 = ["value"];
const _hoisted_11$1 = { class: "info d-flex justify-content-between w-100; overflow-y-auto" };
const _hoisted_12$1 = { class: "links" };
const _hoisted_13$1 = { key: 0 };
const _hoisted_14$1 = ["href"];
const _hoisted_15$1 = ["href"];
const _hoisted_16$1 = ["href"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_image = resolveComponent("el-image");
  const _component_el_carousel_item = resolveComponent("el-carousel-item");
  const _component_el_carousel = resolveComponent("el-carousel");
  const _component_el_dialog = resolveComponent("el-dialog");
  const _directive_loading = resolveDirective("loading");
  return openBlock(), createBlock(_component_el_dialog, {
    "destroy-on-close": true,
    "align-center": true,
    "before-close": $options.closeModal,
    "lock-scroll": $data.lockScroll,
    "model-value": $data.show_modal,
    "show-close": false,
    class: "gallery_modal",
    "footer-class": "gallery_popup_footer",
    "header-class": "gallery_popup_header",
    style: { "padding": "0" }
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1$1, [
        createBaseVNode("div", {
          class: normalizeClass([$data.info.vanilla == 1 ? "vanilla-item" : "", "mobile_gallery_title"])
        }, [
          createBaseVNode("div", _hoisted_2$1, [
            createBaseVNode("div", _hoisted_3$1, toDisplayString($data.info.title), 1),
            _cache[4] || (_cache[4] = createBaseVNode("div", { class: "flex-grow-1 position-relative" }, null, -1)),
            createBaseVNode("div", {
              class: "close_btn",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.closeModal && $options.closeModal(...args))
            }, _cache[3] || (_cache[3] = [
              createBaseVNode("span", { class: "material-symbols-outlined user-select-none" }, " close ", -1)
            ]))
          ])
        ], 2),
        withDirectives((openBlock(), createElementBlock("div", {
          class: normalizeClass([$data.info.vanilla == 1 ? "vanilla-item" : "", "gallery-detail-main text-white"])
        }, [
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("div", _hoisted_5$1, toDisplayString($data.info.title), 1),
            _cache[6] || (_cache[6] = createBaseVNode("div", { class: "flex-grow-1 position-relative" }, null, -1)),
            createBaseVNode("div", {
              class: "close_btn",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.closeModal())
            }, _cache[5] || (_cache[5] = [
              createBaseVNode("span", { class: "material-symbols-outlined user-select-none" }, " close ", -1)
            ]))
          ]),
          createBaseVNode("div", _hoisted_6$1, [
            createVNode(_component_el_carousel, {
              autoplay: false,
              class: "gallery-carousel flex-shrink-0",
              height: "100%"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($data.info.src, (i, index) => {
                  return openBlock(), createBlock(_component_el_carousel_item, { key: index }, {
                    default: withCtx(() => [
                      createVNode(_component_el_image, {
                        "hide-on-click-modal": true,
                        "preview-src-list": $data.info.src.map((v) => v = `/gallery/${v}`),
                        "preview-teleported": true,
                        src: `/gallery/${i}`,
                        zIndex: 9601,
                        alt: "",
                        class: "img h-100 w-100 text-center",
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
            createBaseVNode("div", _hoisted_7$1, [
              createBaseVNode("div", {
                class: "flex-grow-1 content_box",
                innerHTML: $data.info.content
              }, null, 8, _hoisted_8$1),
              createBaseVNode("div", _hoisted_9$1, [
                createBaseVNode("span", {
                  class: "input-group-text material-symbols-outlined d-flex align-items-center justify-content-center",
                  id: "basic-addon1",
                  onClick: _cache[2] || (_cache[2] = ($event) => $options.copyToCipboard()),
                  style: { "cursor": "pointer" },
                  title: "Click to copy"
                }, "share"),
                createBaseVNode("input", {
                  type: "text",
                  class: "form-control",
                  placeholder: "Username",
                  disabled: "disabled",
                  value: "http://cherryrocky.fun/gallery-detail?id=" + $data.id,
                  "aria-label": "Username",
                  "aria-describedby": "basic-addon1"
                }, null, 8, _hoisted_10$1)
              ]),
              createBaseVNode("div", _hoisted_11$1, [
                createBaseVNode("div", null, toDisplayString($data.info.date), 1),
                createBaseVNode("div", null, "Artist: " + toDisplayString($data.info.artist), 1)
              ]),
              createBaseVNode("div", _hoisted_12$1, [
                $data.info.link.rednote ? (openBlock(), createElementBlock("div", _hoisted_13$1, [
                  createBaseVNode("a", {
                    href: $data.info.link.rednote,
                    class: "text-white"
                  }, _cache[7] || (_cache[7] = [
                    createBaseVNode("i", { class: "fa-solid fa-book" }, null, -1),
                    createTextVNode(" View in Rednote")
                  ]), 8, _hoisted_14$1)
                ])) : createCommentVNode("", true),
                createBaseVNode("div", null, [
                  $data.info.link.facebook ? (openBlock(), createElementBlock("a", {
                    key: 0,
                    href: $data.info.link.facebook,
                    class: "text-white"
                  }, _cache[8] || (_cache[8] = [
                    createBaseVNode("i", { class: "fa-brands fa-facebook" }, null, -1),
                    createTextVNode(" Artist Facebook")
                  ]), 8, _hoisted_15$1)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", null, [
                  $data.info.link.forum ? (openBlock(), createElementBlock("a", {
                    key: 0,
                    href: $data.info.link.forum,
                    class: "text-white"
                  }, _cache[9] || (_cache[9] = [
                    createBaseVNode("i", { class: "fa-solid fa-paw" }, null, -1),
                    createTextVNode(" View in Forum")
                  ]), 8, _hoisted_16$1)) : createCommentVNode("", true)
                ])
              ])
            ])
          ]),
          _cache[10] || (_cache[10] = createBaseVNode("div", { class: "text-center w-100 mt-2" }, [
            createBaseVNode("strong", null, "The DNAxCAT character design is copyrighted to DNAxCAT")
          ], -1))
        ], 2)), [
          [_directive_loading, $data.loading]
        ])
      ])
    ]),
    _: 1
  }, 8, ["before-close", "lock-scroll", "model-value"]);
}
const gallery_dialog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-3b9ae52b"]]);
const _sfc_main = {
  components: { gallery_dialog },
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
      pagination: {
        page: 1,
        pageNum: 12
      },
      count: 0,
      keyword: "",
      d_keyword: "",
      gallery: [],
      lang: "en",
      resumeMode: false
    };
  },
  computed: {
    pagedList() {
      let list = [];
      for (let i = 0; i < this.gallery.length; i += this.pagination.pageNum) {
        list.push(this.gallery.slice(i, i + this.pagination.pageNum));
      }
      console.log(list);
      return list[this.pagination.page - 1];
    }
  },
  mounted() {
    this.resumeMode = sessionStorage.getItem("resume") == "1";
    let params = new URLSearchParams(window.location.search);
    this.keyword = params.get("keyword") || "";
    this.d_keyword = params.get("keyword") || "";
    if (this.keyword === "") {
      window.location.href = "/";
    }
    this.getGallery();
  },
  methods: {
    initQuery() {
      this.pagination.page = 1;
    },
    switchPage(e) {
      console.log(e);
      this.pagination.page = e;
      console.log(this.pagination.page);
    },
    hideLoad() {
      console.log("hide");
      this.emitter.emit("hide_loading", true);
    },
    filterSearch(data, keyword) {
      data = data.filter(
        (v) => v.title.indexOf(keyword) >= 0 || v.sub.indexOf(keyword) >= 0 || v.artist.indexOf(keyword) >= 0 || $(v.content).text().indexOf(keyword) >= 0
      );
      return data;
    },
    toGallery(item) {
      this.emitter.emit("acceptSearchResult", item.id);
    },
    getGallery() {
      $.ajax({
        url: `/${this.lang}/gallery.json`,
        success: (function(res) {
          console.log(res);
          let data = res;
          data = this.filterSearch(data, this.keyword);
          data = data.map((v) => ({
            id: v.id,
            title: v.title,
            sub: v.sub,
            date: v.date,
            artist: v.artist,
            timeline: v.timeline,
            hide: v.hide,
            src: v.src,
            vanilla: v.vanilla
          }));
          data = data.sort((a, b) => {
            return b.id - a.id;
          });
          console.log(data);
          this.gallery = data;
          this.gallery = this.gallery.filter((v) => v.hide === false);
          console.log(this.gallery);
          this.count = this.gallery.length;
          this.hideLoad();
        }).bind(this)
      });
    }
  }
};
const _hoisted_1 = { class: "main container-fluid text-white p-4" };
const _hoisted_2 = { class: "row justify-content-center" };
const _hoisted_3 = { class: "col-12 col-md-10 col-lg-8" };
const _hoisted_4 = { class: "search-sect" };
const _hoisted_5 = {
  action: "/search",
  class: "search_inner"
};
const _hoisted_6 = {
  key: 0,
  class: "gallery row row-cols-xxl-4 row-cols-lg-3 row-cols-sm-2"
};
const _hoisted_7 = ["onClick"];
const _hoisted_8 = ["title"];
const _hoisted_9 = { class: "col-12 mb-2 p-0 thumb-outer" };
const _hoisted_10 = ["src"];
const _hoisted_11 = { class: "col-10" };
const _hoisted_12 = ["innerHTML"];
const _hoisted_13 = ["innerHTML"];
const _hoisted_14 = { class: "d-md-flex justify-content-between small flex-nowrap overflow-hidden" };
const _hoisted_15 = { class: "text-truncate text-nowrap overflow-hidden" };
const _hoisted_16 = { class: "flex-shrink-0 overflow-hidden" };
const _hoisted_17 = {
  key: 0,
  class: "d-flex justify-content-center pagination mt-4"
};
const _hoisted_18 = {
  key: 1,
  class: "empty"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_pagination = resolveComponent("el-pagination");
  const _component_gallery_dialog = resolveComponent("gallery_dialog");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("form", _hoisted_5, [
            withDirectives(createBaseVNode("input", {
              id: "keyword",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.keyword = $event),
              name: "keyword",
              type: "text",
              placeholder: "What are you looking for?",
              "placehplder-class": "ph"
            }, null, 512), [
              [vModelText, $data.keyword]
            ]),
            _cache[1] || (_cache[1] = createBaseVNode("button", { type: "submit" }, [
              createBaseVNode("span", { class: "material-symbols-outlined" }, " search ")
            ], -1))
          ])
        ]),
        createBaseVNode("h2", null, 'Search result of "' + toDisplayString($data.d_keyword) + '": ' + toDisplayString($data.count) + " entries", 1),
        $data.count > 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.pagedList, (item, index) => {
            return openBlock(), createElementBlock("div", {
              class: "p-1",
              key: index,
              onClick: ($event) => $options.toGallery(item)
            }, [
              createBaseVNode("div", {
                class: normalizeClass(["row align-items-center gallery-item pb-2 mx-1 my-1", item.vanilla == 1 ? "vanilla-item" : ""]),
                title: `${item.title}
${item.sub}`
              }, [
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("img", {
                    class: "thumb",
                    loading: "lazy",
                    src: `/gallery/thumbs/${item.src[0]}`,
                    alt: ""
                  }, null, 8, _hoisted_10)
                ]),
                _cache[3] || (_cache[3] = createBaseVNode("div", { class: "col-2 col-lg-2 flex-shrink-0 d-flex justify-content-center" }, [
                  createBaseVNode("img", {
                    src: _imports_2,
                    alt: "",
                    draggable: "false",
                    class: "option_hoshi",
                    loading: "lazy"
                  })
                ], -1)),
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("h4", {
                    class: "m-0 text-nowrap text-truncate",
                    innerHTML: item.title
                  }, null, 8, _hoisted_12),
                  createBaseVNode("p", {
                    class: "m-0 text-nowrap text-truncate",
                    innerHTML: item.sub
                  }, null, 8, _hoisted_13),
                  createBaseVNode("div", _hoisted_14, [
                    createBaseVNode("div", _hoisted_15, [
                      _cache[2] || (_cache[2] = createBaseVNode("i", { class: "fa-solid fa-palette" }, null, -1)),
                      createTextVNode(" " + toDisplayString(item.artist), 1)
                    ]),
                    createBaseVNode("div", _hoisted_16, toDisplayString(item.date), 1)
                  ])
                ])
              ], 10, _hoisted_8)
            ], 8, _hoisted_7);
          }), 128))
        ])) : createCommentVNode("", true)
      ])
    ]),
    $data.count > 0 ? (openBlock(), createElementBlock("div", _hoisted_17, [
      createVNode(_component_el_pagination, {
        total: $data.count,
        class: "flex-wrap",
        "current-page": $data.pagination.page,
        "page-size": $data.pagination.pageNum,
        background: true,
        "onUpdate:currentPage": $options.switchPage
      }, null, 8, ["total", "current-page", "page-size", "onUpdate:currentPage"])
    ])) : createCommentVNode("", true),
    createVNode(_component_gallery_dialog),
    $data.count === 0 ? (openBlock(), createElementBlock("div", _hoisted_18, _cache[4] || (_cache[4] = [
      createBaseVNode("div", { class: "img404_outer" }, [
        createBaseVNode("img", {
          class: "img404",
          src: _imports_0,
          alt: ""
        })
      ], -1),
      createBaseVNode("h2", null, "Nothing was found!", -1)
    ]))) : createCommentVNode("", true)
  ]);
}
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cbbae287"]]);
export {
  search as default
};
