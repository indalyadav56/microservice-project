import {
  f
} from "./chunk-HG4QS5B7.js";
import {
  Z,
  a
} from "./chunk-BFDVTPMT.js";
import {
  s
} from "./chunk-V4XIGGIS.js";
import {
  Fragment,
  S,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  defineComponent,
  mergeProps,
  normalizeClass,
  openBlock,
  ref,
  renderSlot,
  unref,
  withCtx
} from "./chunk-BCXGVGOY.js";

// node_modules/@scalar/api-client/dist/components/DataTable/DataTableInput.vue2.js
var F = ["for"];
var S2 = { class: "relative flex min-w-0 flex-1" };
var T = ["readOnly", "type", "value"];
var N = {
  key: 1,
  class: "centered-y text-orange absolute right-7 text-xs"
};
var L = defineComponent({
  inheritAttrs: false,
  __name: "DataTableInput",
  props: {
    id: {},
    type: {},
    containerClass: {},
    required: { type: Boolean, default: false },
    modelValue: {},
    canAddCustomEnumValue: { type: Boolean, default: true },
    readOnly: { type: Boolean, default: false },
    enum: {},
    min: {},
    max: {},
    environment: {},
    envVariables: {},
    workspace: {},
    description: {},
    lineWrapping: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "inputFocus", "inputBlur", "selectVariable"],
  setup(v, { emit: c }) {
    const a2 = v, t = c, s2 = ref(true), w = ref(false), m = ref(null), V = () => {
      w.value || t("inputBlur");
    }, f3 = computed(
      () => a2.type === "password" ? "text" : a2.type ?? "text"
    ), k = () => {
      var e, l;
      !((e = a2.enum) != null && e.length) && !a2.readOnly && ((l = m.value) == null || l.focus());
    };
    return (e, l) => (openBlock(), createBlock(f, {
      class: normalizeClass(["relative flex", e.containerClass])
    }, {
      default: withCtx(() => [
        e.$slots.default ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "text-c-1 flex items-center pr-0 pl-3",
          for: e.id ?? "",
          onClick: k
        }, [
          renderSlot(e.$slots, "default", {}, void 0, true),
          l[5] || (l[5] = createTextVNode(": "))
        ], 8, F)) : createCommentVNode("", true),
        createBaseVNode("div", S2, [
          a2.enum && a2.enum.length ? (openBlock(), createBlock(Z, {
            key: 0,
            canAddCustomValue: a2.canAddCustomEnumValue,
            modelValue: a2.modelValue,
            value: a2.enum,
            "onUpdate:modelValue": l[0] || (l[0] = (o) => t("update:modelValue", o))
          }, null, 8, ["canAddCustomValue", "modelValue", "value"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            s2.value && e.type === "password" ? (openBlock(), createElementBlock("input", mergeProps({ key: 0 }, e.id ? { ...e.$attrs, id: e.id } : e.$attrs, {
              autocomplete: "off",
              class: ["text-c-1 disabled:text-c-2 peer w-full min-w-0 border-none px-2 py-1.25 -outline-offset-1", { "scalar-password-input": e.type === "password" }],
              "data-1p-ignore": "",
              readOnly: e.readOnly,
              spellcheck: "false",
              type: f3.value,
              value: e.modelValue,
              onInput: l[1] || (l[1] = (o) => t(
                "update:modelValue",
                o.target.value ?? ""
              ))
            }), null, 16, T)) : (openBlock(), createBlock(a, mergeProps({ key: 1 }, e.$attrs, {
              id: e.id,
              ref_key: "codeInput",
              ref: m,
              class: ["text-c-1 disabled:text-c-2 peer w-full min-w-0 border-none -outline-offset-1", [
                e.type === "password" && e.description && "pr-12",
                e.description && "pr-8",
                e.type === "password" && "scalar-password-input"
              ]],
              description: e.description,
              disableCloseBrackets: "",
              disableTabIndent: "",
              envVariables: e.envVariables,
              environment: e.environment,
              lineWrapping: !!e.lineWrapping,
              max: e.max,
              min: e.min,
              modelValue: e.modelValue ?? "",
              readOnly: e.readOnly,
              required: !!e.required,
              spellcheck: "false",
              type: f3.value,
              workspace: e.workspace,
              onBlur: V,
              onFocus: l[2] || (l[2] = (o) => t("inputFocus")),
              "onUpdate:modelValue": l[3] || (l[3] = (o) => t("update:modelValue", o))
            }), null, 16, ["id", "class", "description", "envVariables", "environment", "lineWrapping", "max", "min", "modelValue", "readOnly", "required", "type", "workspace"]))
          ], 64))
        ]),
        e.$slots.warning ? (openBlock(), createElementBlock("div", N, [
          renderSlot(e.$slots, "warning", {}, void 0, true)
        ])) : createCommentVNode("", true),
        renderSlot(e.$slots, "icon", {}, void 0, true),
        e.type === "password" ? (openBlock(), createBlock(unref(S), {
          key: 2,
          class: "-ml-.5 mr-1.25 h-6 w-6 self-center p-1.25",
          icon: s2.value ? "Show" : "Hide",
          label: s2.value ? "Show Password" : "Hide Password",
          onClick: l[4] || (l[4] = (o) => s2.value = !s2.value)
        }, null, 8, ["icon", "label"])) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["class"]));
  }
});

// node_modules/@scalar/api-client/dist/components/DataTable/DataTableInput.vue.js
var f2 = s(L, [["__scopeId", "data-v-6764f087"]]);

export {
  f2 as f
};
//# sourceMappingURL=chunk-ZM6PV6NT.js.map
