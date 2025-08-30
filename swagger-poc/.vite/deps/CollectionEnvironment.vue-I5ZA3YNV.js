import {
  K,
  M
} from "./chunk-WDUM3B57.js";
import "./chunk-T5RWW5EX.js";
import {
  C
} from "./chunk-JPJUDDFZ.js";
import {
  m as m3
} from "./chunk-23JXSGPC.js";
import {
  w
} from "./chunk-A2KY2U2H.js";
import {
  x
} from "./chunk-U6UZPZXA.js";
import {
  _,
  d,
  f
} from "./chunk-HG4QS5B7.js";
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
  A,
  Fragment,
  H3 as H,
  W,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createTextVNode,
  createVNode,
  defineComponent,
  m3 as m,
  m5 as m2,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onMounted,
  openBlock,
  ref,
  renderList,
  toDisplayString,
  unref,
  watch,
  withCtx,
  withModifiers
} from "./chunk-BCXGVGOY.js";
import "./chunk-G3PMV62Z.js";

// node_modules/@scalar/api-client/dist/views/Collection/components/EnvironmentForm.vue2.js
var re = defineComponent({
  __name: "EnvironmentForm",
  props: {
    collection: {},
    environment: {},
    workspace: {},
    envVariables: {}
  },
  setup(o) {
    const { collectionMutators: y } = je(), r = ref([]), k = ref(/* @__PURE__ */ new Set()), w2 = ref(/* @__PURE__ */ new Map()), c2 = ref(false), x2 = computed(() => {
      var e;
      if (!((e = o.environment) != null && e.value))
        return [{ key: "", value: "" }];
      try {
        const n = JSON.parse(o.environment.value), l = Object.entries(n).map(([t, a2]) => ({
          key: t,
          value: String(a2)
        }));
        return l.length === 0 ? [{ key: "", value: "" }] : l;
      } catch {
        return [{ key: "", value: "" }];
      }
    }), N = computed(() => {
      const e = r.value[r.value.length - 1];
      return e ? e.key || e.value ? [...r.value, { key: "", value: "" }] : r.value : [{ key: "", value: "" }];
    }), C2 = computed(() => {
      const e = /* @__PURE__ */ new Map();
      return r.value.forEach((n, l) => {
        if (n.key) {
          const t = e.get(n.key) || [];
          t.push(l), e.set(n.key, t);
        }
      }), w2.value.forEach((n, l) => {
        if (n) {
          const t = e.get(n) || [];
          t.push(l), e.set(n, t);
        }
      }), Array.from(e.values()).filter((n) => n.length > 1).flat();
    });
    watch(
      x2,
      (e) => {
        r.value = [...e], k.value = new Set(e.map((n) => n.key).filter(Boolean));
      },
      { immediate: true }
    );
    const S = async (e, n, l) => {
      var t;
      if (!c2.value) {
        if (n === "key") {
          w2.value.set(e, l);
          const a2 = new Set(k.value), s2 = r.value[e];
          if (s2 && a2.delete(s2.key), a2.has(l))
            return;
        }
        c2.value = true;
        try {
          const a2 = [...r.value], s2 = a2[e];
          if (!s2)
            return;
          a2[e] = {
            key: n === "key" ? l : s2.key,
            value: n === "value" ? l : s2.value
          }, !a2[e].key && !a2[e].value && e !== a2.length - 1 && a2.splice(e, 1);
          const m4 = a2.reduce(
            (i, { key: I, value: R }) => ((I || R) && (i[I] = R), i),
            {}
          );
          if (o.collection) {
            const i = {
              ...o.collection["x-scalar-environments"],
              [o.environment.name]: {
                ...(t = o.collection["x-scalar-environments"]) == null ? void 0 : t[o.environment.name],
                variables: m4
              }
            };
            await y.edit(
              o.collection.uid,
              "x-scalar-environments",
              i
            );
          }
          if (e === r.value.length - 1) {
            const i = a2[a2.length - 1];
            i && (i.key || i.value) && await h();
          }
          await nextTick(), r.value = a2, n === "key" && (k.value = new Set(
            a2.map((i) => i.key).filter(Boolean)
          ), w2.value.delete(e));
        } finally {
          c2.value = false;
        }
      }
    }, h = async () => {
      var e;
      if (!c2.value) {
        c2.value = true;
        try {
          const n = [...r.value, { key: "", value: "" }], l = n.reduce(
            (t, { key: a2, value: s2 }) => ((a2 || s2) && (t[a2] = s2), t),
            {}
          );
          if (o.collection) {
            const t = {
              ...o.collection["x-scalar-environments"],
              [o.environment.name]: {
                ...(e = o.collection["x-scalar-environments"]) == null ? void 0 : e[o.environment.name],
                variables: l
              }
            };
            await y.edit(
              o.collection.uid,
              "x-scalar-environments",
              t
            );
          }
          await nextTick(), r.value = n;
        } finally {
          c2.value = false;
        }
      }
    }, W2 = async (e) => {
      var n;
      if (!c2.value) {
        c2.value = true;
        try {
          const l = [...r.value];
          l.splice(e, 1);
          const t = l.reduce(
            (a2, { key: s2, value: m4 }) => ((s2 || m4) && (a2[s2] = m4), a2),
            {}
          );
          if (o.collection) {
            const a2 = {
              ...o.collection["x-scalar-environments"],
              [o.environment.name]: {
                ...(n = o.collection["x-scalar-environments"]) == null ? void 0 : n[o.environment.name],
                variables: t
              }
            };
            await y.edit(
              o.collection.uid,
              "x-scalar-environments",
              a2
            );
          }
          await nextTick(), r.value = l;
        } finally {
          c2.value = false;
        }
      }
    }, B = async () => {
      if (r.value.length === 0)
        await h();
      else if (r.value.length >= 1) {
        const e = r.value[r.value.length - 1];
        e && (e.key || e.value) && await h();
      }
    };
    return onMounted(() => {
      B();
    }), watch(
      () => r.value,
      () => {
        B();
      }
    ), (e, n) => (openBlock(), createBlock(_, {
      class: "group/table flex-1",
      columns: ["", ""]
    }, {
      default: withCtx(() => [
        createVNode(d, { class: "sr-only !block" }, {
          default: withCtx(() => [
            createVNode(x, null, {
              default: withCtx(() => n[0] || (n[0] = [
                createTextVNode("Key")
              ])),
              _: 1,
              __: [0]
            }),
            createVNode(x, null, {
              default: withCtx(() => n[1] || (n[1] = [
                createTextVNode("Value")
              ])),
              _: 1,
              __: [1]
            })
          ]),
          _: 1
        }),
        (openBlock(true), createElementBlock(Fragment, null, renderList(N.value, (l, t) => (openBlock(), createBlock(d, {
          key: t,
          class: normalizeClass({
            error: C2.value.includes(t)
          })
        }, {
          default: withCtx(() => [
            createVNode(f, null, {
              default: withCtx(() => [
                createVNode(a, {
                  disableCloseBrackets: "",
                  disableEnter: "",
                  disableTabIndent: "",
                  lineWrapping: "",
                  environment: e.environment,
                  envVariables: e.envVariables,
                  modelValue: l.key,
                  placeholder: "Key",
                  workspace: e.workspace,
                  "onUpdate:modelValue": (a2) => S(t, "key", a2)
                }, createSlots({ _: 2 }, [
                  C2.value.includes(t) ? {
                    name: "icon",
                    fn: withCtx(() => [
                      createVNode(unref(H), { class: "text-red mr-0.75 size-3.5 brightness-[.9]" })
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["environment", "envVariables", "modelValue", "workspace", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024),
            createVNode(f, null, {
              default: withCtx(() => [
                createVNode(a, {
                  class: "pr-6 group-hover:pr-10 group-has-[.cm-focused]:pr-10",
                  disableCloseBrackets: "",
                  disableEnter: "",
                  disableTabIndent: "",
                  lineWrapping: "",
                  environment: e.environment,
                  envVariables: e.envVariables,
                  modelValue: l.value,
                  placeholder: "Value",
                  workspace: e.workspace,
                  "onUpdate:modelValue": (a2) => S(t, "value", a2)
                }, {
                  icon: withCtx(() => [
                    l.key || l.value ? (openBlock(), createBlock(unref($), {
                      key: 0,
                      class: "text-c-2 hover:text-c-1 hover:bg-b-2 z-context hidden h-fit rounded p-1 group-hover:flex group-has-[.cm-focused]:flex",
                      size: "sm",
                      variant: "ghost",
                      onClick: withModifiers((a2) => W2(t), ["stop"])
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(A), { class: "size-3.5" })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["environment", "envVariables", "modelValue", "workspace", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1032, ["class"]))), 128))
      ]),
      _: 1
    }));
  }
});

// node_modules/@scalar/api-client/dist/views/Collection/components/EnvironmentForm.vue.js
var c = s(re, [["__scopeId", "data-v-83bfcc8a"]]);

// node_modules/@scalar/api-client/dist/views/Collection/CollectionEnvironment.vue2.js
var ie = { class: "flex h-full w-full flex-col gap-12 px-1.5 pt-8" };
var ce = { class: "flex flex-col gap-4" };
var de = { class: "rounded-lg border" };
var ue = { class: "bg-b-2 flex cursor-grab items-center justify-between rounded-t-lg px-1 py-1 text-sm" };
var ve = { class: "flex items-center" };
var me = ["onClick"];
var fe = { class: "text-c-3 flex h-full items-center justify-center rounded-lg border p-4" };
var Me = defineComponent({
  __name: "CollectionEnvironment",
  setup(pe) {
    const { activeCollection: l, activeWorkspace: $2, activeEnvVariables: D } = z(), { collectionMutators: m4 } = je(), b2 = W(), h = W(), g = W(), _2 = W(), M2 = ref(""), s2 = ref(null), E = ref(void 0), V = computed(() => {
      var n;
      return (n = l.value) != null && n["x-scalar-environments"] ? Object.entries(l.value["x-scalar-environments"]).map(
        ([e, i]) => ({
          uid: e,
          name: e,
          value: JSON.stringify(i.variables || {}),
          color: i.color || "#FFFFFF"
        })
      ) : [];
    }), N = () => {
      var n;
      !((n = l.value) != null && n.uid) || !s2.value || (m4.removeEnvironment(
        s2.value,
        l.value.uid
      ), h.hide());
    }, j = (n) => {
      s2.value = n, h.show();
    }, z2 = (n) => {
      var e;
      (e = l.value) != null && e.uid && (m4.addEnvironment(
        n.name,
        {
          variables: {},
          color: n.color
        },
        l.value.uid
      ), g.hide());
    }, O = (n) => {
      s2.value = n.name, M2.value = n.color || "#FFFFFF", b2.show();
    }, A2 = (n) => {
      var i, o, a2;
      if (!((i = l.value) != null && i.uid) || !s2.value)
        return;
      const e = {
        ...l.value["x-scalar-environments"],
        [s2.value]: {
          variables: ((a2 = (o = l.value["x-scalar-environments"]) == null ? void 0 : o[s2.value]) == null ? void 0 : a2.variables) || {},
          color: n
        }
      };
      m4.edit(
        l.value.uid,
        "x-scalar-environments",
        e
      ), b2.hide();
    }, B = (n) => {
      s2.value = n, E.value = n, _2.show();
    }, W2 = () => {
      s2.value = null, E.value = void 0, _2.hide();
    }, R = (n) => {
      var p;
      if (!((p = l.value) != null && p.uid) || !s2.value)
        return;
      const e = { ...l.value["x-scalar-environments"] };
      if (!e[s2.value])
        return;
      const o = {}, a2 = Object.entries(e), f2 = a2.findIndex(
        ([v]) => v === s2.value
      );
      a2.forEach(([v, x2], d2) => {
        d2 === f2 ? o[n] = x2 : o[v] = x2;
      }), m4.edit(
        l.value.uid,
        "x-scalar-environments",
        o
      ), s2.value = null, E.value = void 0, _2.hide();
    }, T = (n, e) => {
      var x2;
      if (!((x2 = l.value) != null && x2.uid))
        return;
      const i = { ...l.value["x-scalar-environments"] }, o = {}, a2 = Object.entries(i), f2 = a2.findIndex(([d2]) => d2 === n.id), p = a2.findIndex(([d2]) => d2 === e.id);
      if (f2 === -1 || p === -1)
        return;
      const v = a2[f2];
      v && (a2.splice(f2, 1), a2.splice(p, 0, v), a2.forEach(([d2, q]) => {
        o[d2] = q;
      }), m4.edit(
        l.value.uid,
        "x-scalar-environments",
        o
      ));
    };
    return (n, e) => (openBlock(), createBlock(b, null, {
      default: withCtx(() => {
        var i;
        return [
          createBaseVNode("div", ie, [
            createBaseVNode("div", ce, [
              e[5] || (e[5] = createBaseVNode("div", { class: "flex items-start justify-between gap-2" }, [
                createBaseVNode("div", { class: "flex flex-col gap-2" }, [
                  createBaseVNode("div", { class: "flex h-8 items-center" }, [
                    createBaseVNode("h3", { class: "font-bold" }, "Environment Variables")
                  ]),
                  createBaseVNode("p", { class: "text-sm" }, [
                    createTextVNode(" Set environment variables at your collection level. Use "),
                    createBaseVNode("code", { class: "font-code text-c-2" }, "{{ variable }}"),
                    createTextVNode(" to add / search among the selected environment's variables in your request inputs. ")
                  ])
                ])
              ], -1)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(V.value, (o) => (openBlock(), createBlock(unref(m3), {
                key: o.name,
                id: o.name,
                isDraggable: true,
                isDroppable: true,
                parentIds: [],
                onOnDragEnd: T
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", de, [
                    createBaseVNode("div", ue, [
                      createBaseVNode("div", ve, [
                        createVNode(unref($), {
                          class: "hover:bg-b-3 flex h-6 w-6 p-1",
                          onClick: (a2) => O(o),
                          variant: "ghost"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", {
                              style: normalizeStyle({ backgroundColor: o.color || "#FFFFFF" }),
                              class: "h-2.5 w-2.5 rounded-full"
                            }, null, 4)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        createBaseVNode("button", {
                          class: "hover:bg-b-3 rounded px-1 py-0.5 text-sm",
                          onClick: (a2) => B(o.name)
                        }, toDisplayString(o.name), 9, me)
                      ]),
                      createVNode(unref($), {
                        class: "hover:bg-b-3 hover:text-c-1 h-fit p-1.25",
                        variant: "ghost",
                        onClick: (a2) => j(o.name)
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(A), { class: "size-3.5" })
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    unref(l) && unref($2) ? (openBlock(), createBlock(c, {
                      key: 0,
                      collection: unref(l),
                      environment: o,
                      envVariables: unref(D),
                      workspace: unref($2)
                    }, null, 8, ["collection", "environment", "envVariables", "workspace"])) : createCommentVNode("", true)
                  ])
                ]),
                _: 2
              }, 1032, ["id"]))), 128)),
              createBaseVNode("div", fe, [
                createVNode(unref($), {
                  class: "hover:bg-b-2 hover:text-c-1 flex items-center gap-2",
                  size: "sm",
                  variant: "ghost",
                  onClick: e[0] || (e[0] = (o) => unref(g).show())
                }, {
                  default: withCtx(() => [
                    createVNode(unref(m), {
                      class: "inline-flex",
                      icon: "Add",
                      size: "sm",
                      thickness: "1.5"
                    }),
                    e[4] || (e[4] = createBaseVNode("span", null, "Add Environment", -1))
                  ]),
                  _: 1,
                  __: [4]
                })
              ])
            ]),
            createVNode(unref(m2), {
              size: "xxs",
              state: unref(h),
              title: `Delete ${s2.value || "Environment"}`
            }, {
              default: withCtx(() => [
                createVNode(w, {
                  variableName: "Environment",
                  warningMessage: "Are you sure you want to delete this environment? This action cannot be undone.",
                  onClose: e[1] || (e[1] = (o) => unref(h).hide()),
                  onDelete: N
                })
              ]),
              _: 1
            }, 8, ["state", "title"]),
            createVNode(K, {
              activeWorkspaceCollections: unref(l) ? [unref(l)] : [],
              collectionId: (i = unref(l)) == null ? void 0 : i.uid,
              state: unref(g),
              onCancel: e[2] || (e[2] = (o) => unref(g).hide()),
              onSubmit: z2
            }, null, 8, ["activeWorkspaceCollections", "collectionId", "state"]),
            createVNode(M, {
              selectedColor: M2.value,
              state: unref(b2),
              onCancel: e[3] || (e[3] = (o) => unref(b2).hide()),
              onSubmit: A2
            }, null, 8, ["selectedColor", "state"]),
            createVNode(unref(m2), {
              size: "xxs",
              state: unref(_2),
              title: `Edit ${s2.value}`
            }, {
              default: withCtx(() => [
                createVNode(C, {
                  name: E.value ?? "",
                  onClose: W2,
                  onEdit: R
                }, null, 8, ["name"])
              ]),
              _: 1
            }, 8, ["state", "title"])
          ])
        ];
      }),
      _: 1
    }));
  }
});
export {
  Me as default
};
//# sourceMappingURL=CollectionEnvironment.vue-I5ZA3YNV.js.map
