import {
  s
} from "./chunk-BGMGCHHM.js";
import {
  $,
  E2 as E,
  createBlock,
  createCommentVNode,
  defineComponent,
  openBlock,
  renderSlot,
  unref,
  withCtx
} from "./chunk-BCXGVGOY.js";

// node_modules/@scalar/api-client/dist/components/Sidebar/SidebarButton.vue.js
var g = defineComponent({
  __name: "SidebarButton",
  props: {
    click: { type: Function },
    hotkey: {}
  },
  setup(a) {
    const l = a, { layout: n } = s(), c = () => {
      l.click();
    };
    return (t, h) => (openBlock(), createBlock(unref($), {
      class: "bg-b-1 text-c-1 hover:bg-b-2 group relative h-auto w-auto border px-2 py-1 md:w-full md:p-1.5",
      icon: "Plus",
      variant: "outlined",
      onClick: c
    }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "title"),
        t.hotkey && unref(n) === "desktop" ? (openBlock(), createBlock(unref(E), {
          key: 0,
          class: "text-c-2 add-item-hotkey absolute right-2 hidden group-hover:opacity-80 md:block",
          hotkey: t.hotkey
        }, null, 8, ["hotkey"])) : createCommentVNode("", true)
      ]),
      _: 3
    }));
  }
});

export {
  g
};
//# sourceMappingURL=chunk-4EBJ24QN.js.map
