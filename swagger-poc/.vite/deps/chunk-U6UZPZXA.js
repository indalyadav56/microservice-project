import {
  f
} from "./chunk-HG4QS5B7.js";
import {
  createBlock,
  defineComponent,
  mergeProps,
  openBlock,
  renderSlot,
  unref,
  useBindCx,
  withCtx
} from "./chunk-BCXGVGOY.js";

// node_modules/@scalar/api-client/dist/components/DataTable/DataTableHeader.vue.js
var x = defineComponent({
  __name: "DataTableHeader",
  setup(p) {
    const { cx: e } = useBindCx();
    return (t, u) => (openBlock(), createBlock(f, mergeProps({ is: "th" }, unref(e)("items-center font-medium px-2 min-w-0 -outline-offset-1")), {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});

export {
  x
};
//# sourceMappingURL=chunk-U6UZPZXA.js.map
