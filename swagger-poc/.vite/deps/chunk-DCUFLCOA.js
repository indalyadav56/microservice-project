import {
  $,
  C,
  D2 as D,
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  mergeProps,
  normalizeClass,
  openBlock,
  renderList,
  toDisplayString,
  unref,
  vModelText,
  withCtx,
  withDirectives
} from "./chunk-BCXGVGOY.js";

// node_modules/@scalar/api-client/dist/components/Server/ServerVariablesSelect.vue.js
var N = {
  key: 0,
  class: "sr-only"
};
var z = defineComponent({
  __name: "ServerVariablesSelect",
  props: {
    enum: {},
    value: {},
    controls: {}
  },
  emits: ["change"],
  setup(u, { emit: m }) {
    const a = u, d = m, o = computed(
      () => a.enum.map((e) => ({ id: e, label: e }))
    ), n = computed({
      get: () => o.value.find((e) => e.id === a.value),
      set: (e) => d("change", (e == null ? void 0 : e.id) ?? "")
    });
    return (e, l) => (openBlock(), createBlock(unref(D), {
      modelValue: n.value,
      "onUpdate:modelValue": l[0] || (l[0] = (p) => n.value = p),
      options: o.value
    }, {
      default: withCtx(() => [
        createVNode(unref($), {
          "aria-controls": e.controls,
          class: "group/button h-8 gap-1.5 p-1.5 text-base font-normal",
          variant: "ghost"
        }, {
          default: withCtx(() => [
            createBaseVNode("span", {
              class: normalizeClass({ "text-c-1": e.value })
            }, [
              e.value ? (openBlock(), createElementBlock("span", N, " Selected: ")) : createCommentVNode("", true),
              createTextVNode(" " + toDisplayString(e.value || "Select value"), 1)
            ], 2),
            createVNode(unref(C), {
              weight: "bold",
              class: "mt-0.25 size-3 transition-transform duration-100 group-aria-expanded/button:rotate-180"
            })
          ]),
          _: 1
        }, 8, ["aria-controls"])
      ]),
      _: 1
    }, 8, ["modelValue", "options"]));
  }
});

// node_modules/@scalar/api-client/dist/components/Server/ServerVariablesTextbox.vue.js
var g = defineComponent({
  __name: "ServerVariablesTextbox",
  props: {
    value: {},
    controls: {}
  },
  emits: ["change"],
  setup(l, { emit: r }) {
    const a = l, n = r, t = computed({
      get: () => a.value,
      set: (e) => n("change", e)
    });
    return (e, o) => withDirectives((openBlock(), createElementBlock("input", mergeProps({
      "onUpdate:modelValue": o[0] || (o[0] = (s) => t.value = s)
    }, e.controls ? { ...e.$attrs, "aria-controls": e.controls } : {}, {
      autocomplete: "off",
      class: "text-c-1 w-full border-transparent px-1.5 py-1.25 -outline-offset-1 group-last/label:rounded-br-lg",
      placeholder: "value",
      spellcheck: "false",
      type: "text"
    }), null, 16)), [
      [vModelText, t.value]
    ]);
  }
});

// node_modules/@scalar/api-client/dist/components/Server/ServerVariablesForm.vue.js
var j = { class: "flex items-center py-1.5 pl-3 group-has-[input]/label:mr-0 after:content-[':']" };
var O = defineComponent({
  __name: "ServerVariablesForm",
  props: {
    variables: {},
    values: {},
    controls: {},
    layout: { default: "client" }
  },
  emits: ["update:variable"],
  setup(n, { emit: v }) {
    const d = v;
    function s(e, r) {
      d("update:variable", e, r);
    }
    const i = (e) => {
      var r, l, a;
      return (((r = n.values) == null ? void 0 : r[e]) ?? ((a = (l = n.variables) == null ? void 0 : l[e]) == null ? void 0 : a.default) ?? "").toString();
    };
    return (e, r) => e.variables && Object.keys(e.variables ?? {}).length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(Object.keys(e.variables), (l) => {
      var a, u, c, b, m;
      return openBlock(), createElementBlock("label", {
        key: l,
        class: normalizeClass([
          "group/label flex w-full",
          e.layout === "reference" && "items-center border-x border-b last:rounded-b-lg"
        ])
      }, [
        createBaseVNode("span", j, toDisplayString(l), 1),
        (c = (u = (a = e.variables) == null ? void 0 : a[l]) == null ? void 0 : u.enum) != null && c.length ? (openBlock(), createBlock(z, {
          key: 0,
          controls: e.controls,
          enum: ((m = (b = e.variables[l]) == null ? void 0 : b.enum) == null ? void 0 : m.map((t) => `${t}`)) ?? [],
          label: l,
          value: i(l),
          onChange: (t) => s(l, t)
        }, null, 8, ["controls", "enum", "label", "value", "onChange"])) : (openBlock(), createBlock(g, {
          key: 1,
          controls: e.controls,
          value: i(l),
          onChange: (t) => s(l, t)
        }, null, 8, ["controls", "value", "onChange"]))
      ], 2);
    }), 128)) : createCommentVNode("", true);
  }
});

export {
  O
};
//# sourceMappingURL=chunk-DCUFLCOA.js.map
