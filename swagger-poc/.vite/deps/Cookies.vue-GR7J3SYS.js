import {
  _,
  p
} from "./chunk-UYNWY7EN.js";
import {
  q
} from "./chunk-SJ65AIXO.js";
import {
  V,
  h
} from "./chunk-T5RWW5EX.js";
import {
  g
} from "./chunk-4EBJ24QN.js";
import "./chunk-23JXSGPC.js";
import "./chunk-A2KY2U2H.js";
import {
  m as m2
} from "./chunk-XTT2Q3MF.js";
import {
  r
} from "./chunk-OIAL5TOR.js";
import {
  x
} from "./chunk-XGRC5QJ7.js";
import {
  u
} from "./chunk-EOW7YRU3.js";
import "./chunk-ZM6PV6NT.js";
import "./chunk-HG4QS5B7.js";
import "./chunk-BFDVTPMT.js";
import {
  b
} from "./chunk-W57CGMC5.js";
import "./chunk-TBN3PBMZ.js";
import {
  cookieSchema
} from "./chunk-AE36LDHR.js";
import "./chunk-YMJHZV34.js";
import "./chunk-BGMGCHHM.js";
import {
  useRoute,
  useRouter
} from "./chunk-UKABXAIE.js";
import {
  a,
  je,
  s,
  z
} from "./chunk-V4XIGGIS.js";
import {
  Fragment,
  W,
  computed,
  createBaseVNode,
  createBlock,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  i,
  m5 as m,
  onBeforeUnmount,
  onMounted,
  openBlock,
  ref,
  renderList,
  unref,
  watch,
  withCtx,
  withModifiers
} from "./chunk-BCXGVGOY.js";
import "./chunk-G3PMV62Z.js";

// node_modules/@scalar/api-client/dist/views/Cookies/CookieForm.vue.js
var x2 = defineComponent({
  __name: "CookieForm",
  setup(f) {
    const { activeCookieId: e } = z(), { cookies: t, cookieMutators: i2 } = je(), c = [
      { label: "Name", key: "name", placeholder: "session_id" },
      { label: "Value", key: "value", placeholder: "my-cookie-session-id" },
      { label: "Domain", key: "domain", placeholder: "example.com" }
      // TODO: We don't check the path (yet), so we don't need to show it.
      // { label: 'Path', key: 'path', placeholder: '/' },
    ], m3 = computed(
      () => t[e.value] || cookieSchema.parse({
        name: "",
        value: "",
        domain: "",
        path: ""
      })
    ), n = (o, a2) => {
      i2.edit(e.value, o, a2);
    };
    return (o, a2) => (openBlock(), createBlock(q, {
      data: m3.value,
      onUpdate: n,
      options: c
    }, null, 8, ["data"]));
  }
});

// node_modules/@scalar/api-client/dist/views/Cookies/CookieModal.vue2.js
var U = { class: "flex h-8 items-start gap-2 text-sm" };
var $ = { class: "flex h-8 items-start gap-2 text-sm" };
var w = { class: "flex h-8 items-start gap-2 text-sm" };
var _2 = defineComponent({
  __name: "CookieModal",
  props: {
    state: {}
  },
  emits: ["cancel", "submit"],
  setup(r2, { emit: p3 }) {
    const u2 = r2, d = p3, a2 = ref({
      name: "",
      value: "",
      domain: ""
    }), { toast: f } = i(), v = () => {
      if (!a2.value.name || !a2.value.value) {
        f("Please fill in all fields before adding a cookie.", "error");
        return;
      }
      d("submit", a2.value), u2.state.hide();
    };
    return watch(
      () => u2.state.open,
      (s2) => {
        s2 && (a2.value = {
          name: "",
          value: "",
          domain: ""
        });
      }
    ), (s2, e) => (openBlock(), createBlock(unref(m), {
      size: "xs",
      state: s2.state,
      title: "Add Cookie"
    }, {
      default: withCtx(() => [
        createVNode(h, {
          disabled: !a2.value.name || !a2.value.value,
          onCancel: e[3] || (e[3] = (o) => d("cancel")),
          onSubmit: v
        }, {
          submit: withCtx(() => e[7] || (e[7] = [
            createTextVNode("Add Cookie")
          ])),
          default: withCtx(() => [
            createBaseVNode("div", U, [
              e[4] || (e[4] = createTextVNode(" Name: ")),
              createVNode(V, {
                modelValue: a2.value.name,
                "onUpdate:modelValue": e[0] || (e[0] = (o) => a2.value.name = o),
                autofocus: "",
                class: "!p-0",
                placeholder: "session_id"
              }, null, 8, ["modelValue"])
            ]),
            createBaseVNode("div", $, [
              e[5] || (e[5] = createTextVNode(" Value: ")),
              createVNode(V, {
                modelValue: a2.value.value,
                "onUpdate:modelValue": e[1] || (e[1] = (o) => a2.value.value = o),
                autofocus: "",
                class: "!p-0",
                placeholder: "my-cookie-session-id"
              }, null, 8, ["modelValue"])
            ]),
            createBaseVNode("div", w, [
              e[6] || (e[6] = createTextVNode(" Domain: ")),
              createVNode(V, {
                modelValue: a2.value.domain,
                "onUpdate:modelValue": e[2] || (e[2] = (o) => a2.value.domain = o),
                autofocus: "",
                class: "!p-0",
                placeholder: "example.com"
              }, null, 8, ["modelValue"])
            ])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }, 8, ["state"]));
  }
});

// node_modules/@scalar/api-client/dist/views/Cookies/CookieModal.vue.js
var p2 = s(_2, [["__scopeId", "data-v-694018d6"]]);

// node_modules/@scalar/api-client/dist/views/Cookies/Cookies.vue2.js
var ee = { class: "flex-1" };
var oe = { class: "relative mb-[.5px] last:mb-0" };
var be = defineComponent({
  __name: "Cookies",
  setup(te) {
    const { cookies: c, cookieMutators: k, events: v, workspaceMutators: C } = je(), { activeWorkspace: l, activeCookieId: g2 } = z(), m3 = useRouter(), h2 = useRoute(), f = W(), E = (o) => {
      var e, i2;
      const t = cookieSchema.parse({
        name: o.name,
        value: o.value,
        domain: o.domain,
        path: "/"
      });
      k.add(t), C.edit((e = l.value) == null ? void 0 : e.uid, "cookies", [
        ...((i2 = l.value) == null ? void 0 : i2.cookies) ?? [],
        t.uid
      ]), m3.push({
        name: "cookies",
        params: {
          cookies: t.uid
        }
      });
    }, N = (o) => {
      var e, i2;
      k.delete(o), C.edit((e = l.value) == null ? void 0 : e.uid, "cookies", [
        ...(((i2 = l.value) == null ? void 0 : i2.cookies) ?? []).filter((s2) => s2 !== o)
      ]);
      const t = Object.values(c).filter(
        (s2) => s2.uid !== o
      );
      if (t.length > 0) {
        const s2 = t[t.length - 1];
        s2 && m3.push(s2.uid);
      } else
        m3.push({
          name: "cookies",
          params: {
            [a.Cookies]: "default"
          }
        });
    }, p3 = () => {
      f.show();
    }, _3 = (o) => {
      o != null && o.createNew && h2.name === "cookies" && p3();
    }, S = (o, t) => {
      var i2;
      const e = {
        name: "cookies",
        params: {
          workspace: ((i2 = l.value) == null ? void 0 : i2.uid) ?? "default",
          cookies: t
        }
      };
      if (o.metaKey) {
        const s2 = m3.resolve(e).href;
        window.open(s2, "_blank");
        return;
      }
      m3.push(e);
    };
    onMounted(() => v.hotKeys.on(_3)), onBeforeUnmount(() => v.hotKeys.off(_3));
    const $2 = computed(
      () => c[g2.value]
    ), B = computed(
      () => Object.keys(c).length > 0 && $2.value
    );
    return watch(
      () => h2.query.openCookieModal,
      (o) => {
        o === "true" && p3();
      },
      { immediate: true }
    ), (o, t) => (openBlock(), createBlock(u, null, {
      default: withCtx(() => [
        createVNode(unref(m2), { title: "Cookies" }, {
          content: withCtx(() => [
            createBaseVNode("div", ee, [
              createVNode(_, null, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(Object.values(unref(c)), (e) => (openBlock(), createElementBlock("li", {
                    key: e.uid,
                    class: "gap-1/2 flex flex-col"
                  }, [
                    createBaseVNode("div", oe, [
                      (openBlock(), createBlock(p, {
                        key: e.uid,
                        class: "text-xs",
                        isDeletable: "",
                        to: {
                          name: "cookies",
                          params: {
                            [unref(a).Cookies]: e.uid
                          }
                        },
                        type: "cookies",
                        variable: { name: e.name, uid: e.uid },
                        warningMessage: "Are you sure you want to delete this cookie?",
                        onClick: withModifiers((i2) => S(i2, e.uid), ["prevent"]),
                        onDelete: (i2) => N(e.uid)
                      }, null, 8, ["to", "variable", "onClick", "onDelete"]))
                    ])
                  ]))), 128))
                ]),
                _: 1
              })
            ])
          ]),
          button: withCtx(() => [
            createVNode(g, {
              click: p3,
              hotkey: "N"
            }, {
              title: withCtx(() => t[1] || (t[1] = [
                createTextVNode(" Add Cookie ")
              ])),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(x, { class: "flex-1" }, {
          default: withCtx(() => [
            B.value ? (openBlock(), createBlock(b, {
              key: 0,
              class: "*:border-b-0"
            }, {
              title: withCtx(() => t[2] || (t[2] = [
                createTextVNode("Edit Cookie")
              ])),
              default: withCtx(() => [
                createVNode(x2)
              ]),
              _: 1
            })) : (openBlock(), createBlock(r, { key: 1 }))
          ]),
          _: 1
        }),
        createVNode(p2, {
          state: unref(f),
          onCancel: t[0] || (t[0] = (e) => unref(f).hide()),
          onSubmit: E
        }, null, 8, ["state"])
      ]),
      _: 1
    }));
  }
});
export {
  be as default
};
//# sourceMappingURL=Cookies.vue-GR7J3SYS.js.map
