import { _ as _export_sfc, c as createElementBlock, b as createBaseVNode, n as normalizeClass, t as toDisplayString, d as createTextVNode, a as createVNode, i as createCommentVNode, F as Fragment, h as renderList, r as resolveComponent, o as openBlock } from "./index-Cm2emc_N.js";
const _sfc_main = {
  name: "Story",
  props: {},
  data() {
    return {
      lang: "en",
      story: [],
      title: "",
      sub: "",
      thumb: "",
      index: 0,
      id: 0,
      prev: 0,
      next: 0,
      length: 0,
      is_new: ""
    };
  },
  mounted() {
    this.hideLoad();
  },
  methods: {
    hideLoad() {
      console.log("hide");
      this.emitter.emit("hide_loading", true);
    },
    changeStory(mode) {
      if (mode == 0) {
        if (this.index < 1) {
          return;
        } else {
          window.location.replace(`/story?id=${this.prev}`);
        }
      }
      if (mode == 1) {
        if (this.index === this.length - 1) {
          return;
        } else {
          window.location.replace(`/story?id=${this.next}`);
        }
      }
    },
    toBack() {
      window.location.replace(`/stories`);
    },
    getStory() {
      let params = new URLSearchParams(window.location.search);
      this.is_new = params.get("new") || "";
      let s_id = 0;
      let storyStack = 0;
      if (params.has("id") === false) {
        window.location = "stories.html";
      } else {
        s_id = params.get("id");
      }
      $.ajax({
        url: `/${this.lang}/stories${this.is_new == "1" ? "_new" : ""}.json`,
        success: (function(result) {
          let target_story = 0;
          const stories = result;
          $(".total_story").html(Object.keys(stories).length);
          for (let i = 0; i < Object.keys(stories).length; i++) {
            if (stories[i].story_id == s_id) {
              storyStack++;
              target_story = i;
              $(".current_story").html(i + 1);
            }
          }
          console.log(storyStack);
          if (storyStack === 0) {
            window.location = "/stories";
          } else if (storyStack === 1) {
            let target = stories[target_story];
            this.title = target.story_title;
            this.sub = target.story_sub;
            this.thumb = target.banner;
            if (target_story - 1 >= 0) {
              this.prev = stories[target_story - 1].story_id || 0;
            }
            if (target_story !== stories.length - 1) {
              this.next = stories[target_story + 1].story_id || 0;
            }
            this.length = stories.length;
            this.index = target_story;
            console.log(target);
            for (let i = 0; i < target.story_content.length; i++) {
              if (typeof target.story_content[i] == "object") {
                let p_object = target.story_content[i];
                console.log(p_object);
                let para = p_object.object;
                console.log(para);
                target.story_content[i] = para;
              }
              this.story = target.story_content;
            }
          } else ;
        }).bind(this)
      });
    }
  },
  created() {
    this.getStory();
  }
};
const _hoisted_1 = { class: "story" };
const _hoisted_2 = { class: "story_control_main" };
const _hoisted_3 = { class: "story_control story_leave" };
const _hoisted_4 = { class: "story_control d-flex align-items-stretch" };
const _hoisted_5 = { class: "p-2" };
const _hoisted_6 = { class: "current_story" };
const _hoisted_7 = { class: "total_story" };
const _hoisted_8 = { class: "story_main p-4" };
const _hoisted_9 = { class: "story_title" };
const _hoisted_10 = { class: "story_sub" };
const _hoisted_11 = { class: "story_content" };
const _hoisted_12 = {
  key: 0,
  class: "story_thumb_outer"
};
const _hoisted_13 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_image = resolveComponent("el-image");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", {
          class: "story_controller",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.toBack())
        }, _cache[3] || (_cache[3] = [
          createBaseVNode("span", { class: "material-symbols-outlined" }, " exit_to_app ", -1)
        ]))
      ]),
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode("div", {
          class: normalizeClass(["story_back story_controller", $data.index < 1 ? "story_controller_disabled" : ""]),
          onClick: _cache[1] || (_cache[1] = ($event) => $options.changeStory(0))
        }, _cache[4] || (_cache[4] = [
          createBaseVNode("span", { class: "material-symbols-outlined" }, " arrow_back ", -1)
        ]), 2),
        createBaseVNode("div", _hoisted_5, [
          _cache[5] || (_cache[5] = createBaseVNode("span", { class: "d-none d-md-inline" }, "Story ", -1)),
          createBaseVNode("span", _hoisted_6, toDisplayString($data.index + 1), 1),
          _cache[6] || (_cache[6] = createTextVNode(" / ")),
          createBaseVNode("span", _hoisted_7, toDisplayString($data.length), 1)
        ]),
        createBaseVNode("div", {
          class: normalizeClass(["story_next story_controller", $data.index === $data.length - 1 ? "story_controller_disabled" : ""]),
          onClick: _cache[2] || (_cache[2] = ($event) => $options.changeStory(1))
        }, _cache[7] || (_cache[7] = [
          createBaseVNode("span", { class: "material-symbols-outlined" }, " arrow_forward ", -1)
        ]), 2)
      ])
    ]),
    createBaseVNode("div", _hoisted_8, [
      _cache[8] || (_cache[8] = createBaseVNode("span", { class: "s_id" }, null, -1)),
      createBaseVNode("h1", _hoisted_9, toDisplayString($data.title), 1),
      createBaseVNode("h5", _hoisted_10, toDisplayString($data.sub), 1),
      _cache[9] || (_cache[9] = createBaseVNode("hr", null, null, -1)),
      createBaseVNode("div", _hoisted_11, [
        $data.thumb ? (openBlock(), createElementBlock("div", _hoisted_12, [
          createVNode(_component_el_image, {
            "preview-teleported": true,
            "preview-src-list": [`/gallery/${$data.thumb}`],
            src: `/gallery/${$data.thumb}`,
            class: "story_thumb",
            alt: ""
          }, null, 8, ["preview-src-list", "src"])
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.story, (item, index) => {
          return openBlock(), createElementBlock("p", {
            class: "sector",
            key: index,
            innerHTML: item
          }, null, 8, _hoisted_13);
        }), 128))
      ])
    ])
  ]);
}
const story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d3343bb3"]]);
export {
  story as default
};
