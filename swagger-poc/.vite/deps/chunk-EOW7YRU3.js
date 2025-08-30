import {
  createElementBlock,
  defineComponent,
  guardReactiveProps,
  normalizeProps,
  openBlock,
  renderSlot,
  unref,
  useBindCx
} from "./chunk-BCXGVGOY.js";

// node_modules/@scalar/api-client/dist/components/ViewLayout/ViewLayout.vue.js
var u = defineComponent({
  __name: "ViewLayout",
  setup(m) {
    const { cx: e } = useBindCx();
    return (r, s) => (openBlock(), createElementBlock("div", normalizeProps(guardReactiveProps(
      unref(e)(
        "flex flex-col min-h-0 flex-1 *:border-t first:*:border-t-0 md:*:border-t-0 xl:overflow-hidden md:flex-row leading-3"
      )
    )), [
      renderSlot(r.$slots, "default")
    ], 16));
  }
});

export {
  u
};
//# sourceMappingURL=chunk-EOW7YRU3.js.map
