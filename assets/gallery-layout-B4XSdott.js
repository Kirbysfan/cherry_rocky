import { _ as _export_sfc, k as watch, l as createBlock, w as withCtx, u as useRoute, m as useRouter, r as resolveComponent, p as resolveDirective, o as openBlock, b as createBaseVNode, n as normalizeClass, t as toDisplayString, j as withDirectives, c as createElementBlock, a as createVNode, F as Fragment, h as renderList, d as createTextVNode, i as createCommentVNode, f as createStaticVNode, e as _imports_2 } from "./index-B4asqPBB.js";
import { _ as _imports_0, a as _imports_1 } from "./stub_p-CLMac4Sb.js";
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
    "route.path": {
      handler(newId, oldId) {
        console.log(newId);
        if (newId == "/gallery-detail") {
          this.startQuery();
        }
      },
      immediate: true
    }
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
      this.router.push("/gallery-list");
    },
    copyToCipboard() {
      let info = "http://cherryrocky.fun/gallery-detail?id=" + this.id;
      navigator.clipboard.writeText(info);
      this.$message.success("Copied to clipboard!");
    }
  },
  created() {
    this.lockScroll = this.detectMobile();
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
const gallery_dialog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-8c3e80df"]]);
const _imports_3 = "" + new URL("../gallery/thumbs/rocki_formal.jpg", import.meta.url).href;
const _sfc_main = {
  name: "Gallery-layout",
  props: {},
  components: {
    gallery_dialog
  },
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
      lang: "en",
      timeline: 0,
      gallery: [],
      shown: [],
      count: 0,
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
    this.hideLoad();
  },
  methods: {
    hideLoad() {
      console.log("hide");
      this.emitter.emit("hide_loading", true);
    },
    toGallery(item) {
      this.router.push(`/gallery-detail?id=${item.id}`);
    },
    switchPage(e) {
      console.log(e);
      this.pagination.page = e;
      console.log(this.pagination.page);
    },
    changeTimeline(info) {
      this.timeline = info;
      this.initQuery();
      this.getGallery();
    },
    initQuery() {
      this.pagination.page = 1;
    },
    getGallery() {
      $.ajax({
        url: `/${this.lang}/gallery.json`,
        success: (function(res) {
          console.log(res);
          let data = res;
          data = res.map((v) => ({
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
          this.gallery = data.filter((v) => v.timeline === this.timeline);
          this.gallery = this.gallery.filter((v) => v.hide === false);
          console.log(data[0]);
          console.log(data[0].hide);
          this.count = this.gallery.length;
        }).bind(this)
      });
    }
  },
  created() {
    this.resumeMode = sessionStorage.getItem("resume") == "1";
    this.getGallery();
  }
};
const _hoisted_1 = { class: "gallery-layout" };
const _hoisted_2 = { class: "main container-fluid text-white p-4" };
const _hoisted_3 = { class: "row justify-content-center" };
const _hoisted_4 = { class: "col-12 col-md-10 col-lg-8" };
const _hoisted_5 = {
  key: 0,
  hidden: "hidden",
  class: "card p-0",
  "data-bs-theme": "dark"
};
const _hoisted_6 = { class: "formal_sona_sect mt-2" };
const _hoisted_7 = { class: "gallery-switch" };
const _hoisted_8 = { class: "gallery row row-cols-xxl-4 row-cols-lg-3 row-cols-sm-2" };
const _hoisted_9 = ["onClick"];
const _hoisted_10 = ["title"];
const _hoisted_11 = { class: "col-12 mb-2 p-0 thumb-outer" };
const _hoisted_12 = ["src"];
const _hoisted_13 = { class: "col-10" };
const _hoisted_14 = ["innerHTML"];
const _hoisted_15 = ["innerHTML"];
const _hoisted_16 = { class: "d-md-flex justify-content-between small flex-nowrap overflow-hidden" };
const _hoisted_17 = { class: "text-truncate text-nowrap overflow-hidden" };
const _hoisted_18 = { class: "flex-shrink-0 overflow-hidden" };
const _hoisted_19 = { class: "d-flex justify-content-center pagination mt-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  const _component_el_pagination = resolveComponent("el-pagination");
  const _component_gallery_dialog = resolveComponent("gallery_dialog");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_router_view),
    _cache[7] || (_cache[7] = createStaticVNode('<div class="banner" data-v-ab6e17ce><img class="d-none d-md-block position-relative banner_stub" src="' + _imports_0 + '" alt="" data-v-ab6e17ce><img class="d-block d-md-none position-relative banner_stub_mobile" src="' + _imports_1 + '" alt="" data-v-ab6e17ce><div class="banner_text" data-v-ab6e17ce><div data-v-ab6e17ce><div class="banner_h1" data-v-ab6e17ce><img class="banner_hoshi" src="' + _imports_2 + '" alt="" draggable="false" data-v-ab6e17ce><h1 class="mx-2" data-v-ab6e17ce>Gallery</h1><img class="banner_hoshi" src="' + _imports_2 + '" alt="" draggable="false" data-v-ab6e17ce></div><p data-v-ab6e17ce>My memory in Yah-Den Mainland!</p></div></div></div>', 1)),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          !$data.resumeMode ? (openBlock(), createElementBlock("div", _hoisted_5, _cache[3] || (_cache[3] = [
            createStaticVNode('<div class="card-header bg-warning d-flex align-items-center text-dark" data-v-ab6e17ce><span class="material-symbols-outlined" style="font-size:24px !important;" data-v-ab6e17ce> warning </span>   Something is missing? </div><div class="card-body" data-v-ab6e17ce><h4 class="card-title" data-v-ab6e17ce>This is expected, no worries.</h4><p class="card-text" data-v-ab6e17ce> Because of something that shouldn&#39;t happen is happening in the earth, some of the contents that used to be there is no longer suitable to be shown to those angry earthlings.<br data-v-ab6e17ce> They are now removed temporarily for safety reason, you cannot access them by using URL params too. </p></div><div class="card-footer text-muted" data-v-ab6e17ce> Tribun: I wish that mad lady can stop creating chaos as soon as possible, cannot understand why so many earthlings wish things become even worse... </div>', 3)
          ]))) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", {
              onClick: _cache[0] || (_cache[0] = ($event) => $options.toGallery({ id: 41 })),
              class: "formal_sona_sect_inner d-flex align-items-stretch"
            }, _cache[4] || (_cache[4] = [
              createStaticVNode('<div class="overflow-hidden thumb-outer flex-shrink-0" data-v-ab6e17ce><img class="thumb" src="' + _imports_3 + '" alt="" data-v-ab6e17ce></div><div class="p-4" data-v-ab6e17ce><h3 class="m-0" data-v-ab6e17ce>The formal design of DNAxCAT Rocky the cherry meow!🍒</h3><p class="mb-2" data-v-ab6e17ce> From now on DNAxCAT Rocky will be the representative of cherry that is all about SUPER kawaii and childish stuffs! </p><h5 data-v-ab6e17ce>Click HERE to check the formal sona info!</h5></div>', 2)
            ]))
          ]),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", {
              class: normalizeClass(["switch-item", $data.timeline == 0 ? "active" : ""]),
              onClick: _cache[1] || (_cache[1] = ($event) => $options.changeTimeline(0))
            }, " New timeline ", 2),
            createBaseVNode("div", {
              class: normalizeClass(["switch-item", $data.timeline == 1 ? "active" : ""]),
              onClick: _cache[2] || (_cache[2] = ($event) => $options.changeTimeline(1))
            }, " The forgotten timeline ", 2)
          ]),
          createBaseVNode("div", _hoisted_8, [
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
                  createBaseVNode("div", _hoisted_11, [
                    createBaseVNode("img", {
                      class: "thumb",
                      loading: "lazy",
                      src: `/gallery/thumbs/${item.src[0]}`,
                      alt: ""
                    }, null, 8, _hoisted_12)
                  ]),
                  _cache[6] || (_cache[6] = createBaseVNode("div", { class: "col-2 col-lg-2 flex-shrink-0 d-flex justify-content-center" }, [
                    createBaseVNode("img", {
                      src: _imports_2,
                      alt: "",
                      draggable: "false",
                      class: "option_hoshi",
                      loading: "lazy"
                    })
                  ], -1)),
                  createBaseVNode("div", _hoisted_13, [
                    createBaseVNode("h4", {
                      class: "m-0 text-nowrap text-truncate",
                      innerHTML: item.title
                    }, null, 8, _hoisted_14),
                    createBaseVNode("p", {
                      class: "m-0 text-nowrap text-truncate",
                      innerHTML: item.sub
                    }, null, 8, _hoisted_15),
                    createBaseVNode("div", _hoisted_16, [
                      createBaseVNode("div", _hoisted_17, [
                        _cache[5] || (_cache[5] = createBaseVNode("i", { class: "fa-solid fa-palette" }, null, -1)),
                        createTextVNode(" " + toDisplayString(item.artist), 1)
                      ]),
                      createBaseVNode("div", _hoisted_18, toDisplayString(item.date), 1)
                    ])
                  ])
                ], 10, _hoisted_10)
              ], 8, _hoisted_9);
            }), 128))
          ])
        ])
      ]),
      createBaseVNode("div", _hoisted_19, [
        createVNode(_component_el_pagination, {
          total: $data.count,
          class: "flex-wrap",
          "current-page": $data.pagination.page,
          "page-size": $data.pagination.pageNum,
          background: true,
          "onUpdate:currentPage": $options.switchPage
        }, null, 8, ["total", "current-page", "page-size", "onUpdate:currentPage"])
      ]),
      createVNode(_component_gallery_dialog)
    ])
  ]);
}
const galleryLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ab6e17ce"]]);
export {
  galleryLayout as default
};
