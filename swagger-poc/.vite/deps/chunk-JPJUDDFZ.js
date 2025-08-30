import {
  a
} from "./chunk-A2KY2U2H.js";
import {
  N2 as N,
  createBlock,
  createVNode,
  defineComponent,
  openBlock,
  ref,
  unref,
  withCtx
} from "./chunk-BCXGVGOY.js";

// node_modules/@scalar/api-client/dist/components/Sidebar/Actions/EditSidebarListElement.vue.js
var C = defineComponent({
  __name: "EditSidebarListElement",
  props: {
    name: {}
  },
  emits: ["close", "edit"],
  setup(m, { emit: l }) {
    const r = m, n = l, t = ref(r.name);
    return (x, e) => (openBlock(), createBlock(a, {
      onCancel: e[1] || (e[1] = (o) => n("close")),
      onSubmit: e[2] || (e[2] = (o) => n("edit", t.value))
    }, {
      default: withCtx(() => [
        createVNode(unref(N), {
          modelValue: t.value,
          "onUpdate:modelValue": e[0] || (e[0] = (o) => t.value = o),
          autofocus: ""
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    }));
  }
});

export {
  C
};
//# sourceMappingURL=chunk-JPJUDDFZ.js.map
