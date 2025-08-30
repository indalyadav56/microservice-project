import {
  a
} from "./chunk-BFDVTPMT.js";
import {
  b
} from "./chunk-W57CGMC5.js";
import "./chunk-BGMGCHHM.js";
import "./chunk-UKABXAIE.js";
import {
  je,
  s,
  z
} from "./chunk-V4XIGGIS.js";
import {
  $,
  C4 as C,
  Fragment,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  m3 as m,
  nextTick,
  openBlock,
  ref,
  unref,
  watch,
  withCtx
} from "./chunk-BCXGVGOY.js";
import "./chunk-G3PMV62Z.js";

// node_modules/@scalar/api-client/dist/views/Collection/components/MarkdownInput.vue2.js
var B = { class: "flex h-full w-full flex-col gap-2 pt-8" };
var C2 = { class: "flex min-h-8 items-center justify-between gap-2 pl-1.5" };
var I = { class: "has-[:focus-visible]:bg-b-1 group relative z-1 flex flex-col rounded-lg" };
var E = { class: "flex h-full min-h-[calc(1rem*4)] flex-col" };
var N = {
  key: 1,
  class: "text-c-3 flex h-full items-center justify-center rounded-lg border p-4"
};
var F = defineComponent({
  __name: "MarkdownInput",
  props: {
    modelValue: {},
    environment: {},
    envVariables: {},
    workspace: {}
  },
  emits: ["update:modelValue"],
  setup(S, { emit: k }) {
    const g = k, t = ref("preview"), m3 = ref(null);
    watch(t, (l) => {
      l === "edit" && nextTick(() => {
        var e;
        (e = m3.value) == null || e.focus();
      });
    });
    const V = () => {
      requestAnimationFrame(() => {
        t.value = "preview";
      });
    };
    return (l, e) => (openBlock(), createElementBlock("div", B, [
      createBaseVNode("div", C2, [
        e[5] || (e[5] = createBaseVNode("h3", { class: "font-bold" }, "Description", -1)),
        t.value === "preview" ? (openBlock(), createBlock(unref($), {
          key: 0,
          class: "text-c-2 hover:text-c-1 flex items-center gap-2",
          size: "sm",
          type: "button",
          variant: "outlined",
          onClick: e[0] || (e[0] = (s2) => t.value = "edit")
        }, {
          default: withCtx(() => [
            createVNode(unref(m), {
              icon: "Pencil",
              size: "sm",
              thickness: "1.5"
            }),
            e[4] || (e[4] = createBaseVNode("span", null, "Edit", -1))
          ]),
          _: 1,
          __: [4]
        })) : createCommentVNode("", true)
      ]),
      createBaseVNode("div", I, [
        createBaseVNode("div", E, [
          t.value === "preview" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            l.modelValue && l.modelValue.trim().length ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              l.modelValue ? (openBlock(), createBlock(unref(C), {
                key: 0,
                class: "h-full flex-1 rounded border border-transparent p-1.5 hover:border-(--scalar-background-3)",
                value: l.modelValue,
                withImages: "",
                onDblclick: e[1] || (e[1] = (s2) => t.value = "edit")
              }, null, 8, ["value"])) : createCommentVNode("", true),
              e[6] || (e[6] = createBaseVNode("div", { class: "brightness-lifted bg-b-1 absolute inset-0 -z-1 hidden rounded group-hover:block group-has-[:focus-visible]:hidden" }, null, -1))
            ], 64)) : (openBlock(), createElementBlock("div", N, [
              createVNode(unref($), {
                class: "hover:bg-b-2 hover:text-c-1 text-c-2 flex items-center gap-2",
                size: "sm",
                variant: "ghost",
                onClick: e[2] || (e[2] = (s2) => t.value = "edit")
              }, {
                default: withCtx(() => [
                  createVNode(unref(m), {
                    icon: "Pencil",
                    size: "sm",
                    thickness: "1.5"
                  }),
                  e[7] || (e[7] = createBaseVNode("span", null, "Write a description", -1))
                ]),
                _: 1,
                __: [7]
              })
            ]))
          ], 64)) : createCommentVNode("", true),
          t.value === "edit" ? (openBlock(), createBlock(a, {
            key: 1,
            ref_key: "codeInputRef",
            ref: m3,
            class: "h-full flex-1 border px-0.5 py-0",
            envVariables: l.envVariables,
            environment: l.environment,
            modelValue: l.modelValue,
            workspace: l.workspace,
            onBlur: V,
            "onUpdate:modelValue": e[3] || (e[3] = (s2) => g("update:modelValue", s2))
          }, null, 8, ["envVariables", "environment", "modelValue", "workspace"])) : createCommentVNode("", true)
        ])
      ])
    ]));
  }
});

// node_modules/@scalar/api-client/dist/views/Collection/components/MarkdownInput.vue.js
var m2 = s(F, [["__scopeId", "data-v-5997a667"]]);

// node_modules/@scalar/api-client/dist/views/Collection/CollectionOverview.vue2.js
var M = defineComponent({
  __name: "CollectionOverview",
  setup(C3) {
    const {
      activeCollection: o,
      activeEnvironment: t,
      activeEnvVariables: s2,
      activeWorkspace: n
    } = z(), { collectionMutators: m3 } = je(), p = (i) => {
      o.value && m3.edit(o.value.uid, "info.description", i);
    };
    return (i, w) => (openBlock(), createBlock(b, null, {
      default: withCtx(() => {
        var r, a2;
        return [
          unref(t) && unref(n) ? (openBlock(), createBlock(m2, {
            key: 0,
            envVariables: unref(s2),
            environment: unref(t),
            modelValue: ((a2 = (r = unref(o)) == null ? void 0 : r.info) == null ? void 0 : a2.description) ?? "",
            workspace: unref(n),
            "onUpdate:modelValue": p
          }, null, 8, ["envVariables", "environment", "modelValue", "workspace"])) : createCommentVNode("", true)
        ];
      }),
      _: 1
    }));
  }
});
export {
  M as default
};
//# sourceMappingURL=CollectionOverview.vue-ETZWO2VO.js.map
