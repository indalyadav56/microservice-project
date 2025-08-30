import {
  $,
  computed,
  createBaseVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  guardReactiveProps,
  mergeProps,
  nextTick,
  normalizeProps,
  onMounted,
  openBlock,
  ref,
  renderSlot,
  unref,
  useBindCx,
  vModelText,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-BCXGVGOY.js";

// node_modules/@scalar/api-client/dist/components/CommandPalette/CommandActionForm.vue.js
var v = { class: "flex gap-2" };
var w = { class: "flex max-h-8 flex-1" };
var h = defineComponent({
  __name: "CommandActionForm",
  props: {
    loading: {},
    disabled: { type: Boolean, default: false }
  },
  emits: ["submit", "cancel", "back"],
  setup(B) {
    const { cx: i } = useBindCx();
    return (e, o) => (openBlock(), createElementBlock("form", {
      class: "flex w-full flex-col gap-3",
      onKeydown: o[0] || (o[0] = withKeys(withModifiers(() => {
      }, ["stop"]), ["enter"])),
      onSubmit: o[1] || (o[1] = withModifiers((C) => e.$emit("submit"), ["prevent", "stop"]))
    }, [
      createBaseVNode("div", normalizeProps(guardReactiveProps(unref(i)("relative flex min-h-20 flex-col rounded"))), [
        renderSlot(e.$slots, "default")
      ], 16),
      createBaseVNode("div", v, [
        createBaseVNode("div", w, [
          renderSlot(e.$slots, "options")
        ]),
        createVNode(unref($), {
          class: "max-h-8 p-0 px-3 text-xs",
          disabled: e.disabled,
          loading: e.loading,
          type: "submit"
        }, {
          default: withCtx(() => [
            renderSlot(e.$slots, "submit", {}, () => [
              o[2] || (o[2] = createTextVNode("Continue"))
            ])
          ]),
          _: 3
        }, 8, ["disabled", "loading"])
      ])
    ], 32));
  }
});

// node_modules/@scalar/api-client/dist/components/CommandPalette/CommandActionInput.vue.js
var D = ["placeholder"];
var V = defineComponent({
  inheritAttrs: false,
  __name: "CommandActionInput",
  props: {
    modelValue: {},
    placeholder: {},
    autofocus: { type: Boolean }
  },
  emits: ["update:modelValue", "onDelete"],
  setup(i, { emit: p }) {
    const n = i, r = p, a = ref(null);
    onMounted(
      () => nextTick(() => {
        var e;
        n.autofocus || (e = a.value) == null || e.focus();
      })
    );
    const l = computed({
      get: () => n.modelValue ?? "",
      set: (e) => r("update:modelValue", e)
    });
    function d(e) {
      var u;
      if (e.shiftKey || !e.target)
        return;
      e.preventDefault();
      const t = e.target, o = new Event("submit", { cancelable: true });
      (u = t.form) == null || u.dispatchEvent(o);
    }
    function m(e) {
      l.value === "" && (e.preventDefault(), e.stopPropagation(), r("onDelete", e));
    }
    return (e, t) => withDirectives((openBlock(), createElementBlock("textarea", mergeProps({
      id: "command-action-input",
      ref_key: "input",
      ref: a,
      "onUpdate:modelValue": t[0] || (t[0] = (o) => l.value = o),
      class: "min-h-8 w-full flex-1 resize-none border border-transparent py-1.5 pl-8.5 text-sm outline-none focus:border-b-1",
      placeholder: n.placeholder ?? "",
      wrap: "hard"
    }, e.$attrs, {
      onKeydown: [
        t[1] || (t[1] = withKeys((o) => m(o), ["delete"])),
        t[2] || (t[2] = withKeys((o) => d(o), ["enter"]))
      ]
    }), null, 16, D)), [
      [vModelText, l.value]
    ]);
  }
});

export {
  h,
  V
};
//# sourceMappingURL=chunk-T5RWW5EX.js.map
