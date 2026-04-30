import { _ as _export_sfc, c as createElementBlock, a as createVNode, f as createStaticVNode, b as createBaseVNode, i as createCommentVNode, n as normalizeClass, F as Fragment, h as renderList, r as resolveComponent, u as useRouter, o as openBlock, e as _imports_2, d as createTextVNode, t as toDisplayString } from "./index-H_KRqZYt.js";
import { _ as _imports_0, a as _imports_1 } from "./stub_p-CLMac4Sb.js";
const _imports_3 = "" + new URL("../gallery/thumbs/rocki_formal.jpg", import.meta.url).href;
const _sfc_main = {
  name: "Gallery-layout",
  props: {},
  setup() {
    const router = useRouter();
    return { router };
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
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_router_view),
    _cache[7] || (_cache[7] = createStaticVNode('<div class="banner" data-v-3a56fd4b><img class="d-none d-md-block position-relative banner_stub" src="' + _imports_0 + '" alt="" data-v-3a56fd4b><img class="d-block d-md-none position-relative banner_stub_mobile" src="' + _imports_1 + '" alt="" data-v-3a56fd4b><div class="banner_text" data-v-3a56fd4b><div data-v-3a56fd4b><div class="banner_h1" data-v-3a56fd4b><img class="banner_hoshi" src="' + _imports_2 + '" alt="" draggable="false" data-v-3a56fd4b><h1 class="mx-2" data-v-3a56fd4b>Gallery</h1><img class="banner_hoshi" src="' + _imports_2 + '" alt="" draggable="false" data-v-3a56fd4b></div><p data-v-3a56fd4b>My memory in Yah-Den Mainland!</p></div></div></div>', 1)),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          !$data.resumeMode ? (openBlock(), createElementBlock("div", _hoisted_5, _cache[3] || (_cache[3] = [
            createStaticVNode('<div class="card-header bg-warning d-flex align-items-center text-dark" data-v-3a56fd4b><span class="material-symbols-outlined" style="font-size:24px !important;" data-v-3a56fd4b> warning </span>   Something is missing? </div><div class="card-body" data-v-3a56fd4b><h4 class="card-title" data-v-3a56fd4b>This is expected, no worries.</h4><p class="card-text" data-v-3a56fd4b> Because of something that shouldn&#39;t happen is happening in the earth, some of the contents that used to be there is no longer suitable to be shown to those angry earthlings.<br data-v-3a56fd4b> They are now removed temporarily for safety reason, you cannot access them by using URL params too. </p></div><div class="card-footer text-muted" data-v-3a56fd4b> Tribun: I wish that mad lady can stop creating chaos as soon as possible, cannot understand why so many earthlings wish things become even worse... </div>', 3)
          ]))) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", {
              onClick: _cache[0] || (_cache[0] = ($event) => $options.toGallery({ id: 41 })),
              class: "formal_sona_sect_inner d-flex align-items-stretch"
            }, _cache[4] || (_cache[4] = [
              createStaticVNode('<div class="overflow-hidden thumb-outer flex-shrink-0" data-v-3a56fd4b><img class="thumb" src="' + _imports_3 + '" alt="" data-v-3a56fd4b></div><div class="p-4" data-v-3a56fd4b><h3 class="m-0" data-v-3a56fd4b>The formal design of DNAxCAT Rocky the cherry meow!🍒</h3><p class="mb-2" data-v-3a56fd4b> From now on DNAxCAT Rocky will be the representative of cherry that is all about SUPER kawaii and childish stuffs! </p><h5 data-v-3a56fd4b>Click HERE to check the formal sona info!</h5></div>', 2)
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
      ])
    ])
  ]);
}
const galleryLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3a56fd4b"]]);
export {
  galleryLayout as default
};
