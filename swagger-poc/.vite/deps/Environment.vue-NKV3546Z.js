import {
  _,
  p
} from "./chunk-UYNWY7EN.js";
import {
  K,
  M
} from "./chunk-WDUM3B57.js";
import "./chunk-T5RWW5EX.js";
import {
  g
} from "./chunk-4EBJ24QN.js";
import {
  d
} from "./chunk-LFPELCPJ.js";
import {
  C
} from "./chunk-JPJUDDFZ.js";
import "./chunk-23JXSGPC.js";
import "./chunk-A2KY2U2H.js";
import {
  m as m4
} from "./chunk-XTT2Q3MF.js";
import {
  x
} from "./chunk-XGRC5QJ7.js";
import {
  u
} from "./chunk-EOW7YRU3.js";
import {
  a as a2
} from "./chunk-BFDVTPMT.js";
import {
  b
} from "./chunk-W57CGMC5.js";
import {
  m as m3
} from "./chunk-YMJHZV34.js";
import "./chunk-BGMGCHHM.js";
import {
  useRoute,
  useRouter
} from "./chunk-UKABXAIE.js";
import {
  a,
  je,
  z
} from "./chunk-V4XIGGIS.js";
import {
  $,
  Fragment,
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
  i,
  m3 as m,
  m5 as m2,
  normalizeClass,
  onBeforeUnmount,
  onMounted,
  openBlock,
  ref,
  renderList,
  toDisplayString,
  unref,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-BCXGVGOY.js";
import "./chunk-G3PMV62Z.js";

// node_modules/@scalar/api-client/dist/views/Environment/handle-drag.js
function U(l, v) {
  return {
    handleDragEnd: (t, d2) => {
      if (!t || !d2)
        return;
      const { id: s, parentId: i2 } = t, { id: x2, parentId: p2, offset: u2 } = d2;
      if (i2 !== p2)
        return;
      const e = l.value.find((n) => n.uid === i2);
      if (!e || !e["x-scalar-environments"])
        return;
      const o = e["x-scalar-environments"], r = Object.keys(o);
      ({ ...o });
      const f = r.findIndex((n) => n === s);
      r.splice(f, 1);
      const g2 = r.findIndex((n) => n === x2) + (u2 === 1 ? 1 : 0);
      r.splice(g2, 0, s);
      const I = r.reduce(
        (n, a3) => {
          const c = o[a3];
          return c && (n[a3] = c), n;
        },
        {}
      );
      e["x-scalar-environments"] = I, v.edit(e.uid, "x-scalar-environments", e["x-scalar-environments"]);
    },
    isDroppable: (t, d2) => t.parentId === d2.parentId
  };
}

// node_modules/@scalar/api-client/dist/views/Environment/Environment.vue2.js
var Be = { class: "flex-1" };
var Le = ["onClick"];
var Ke = { class: "flex h-5 max-w-[14px] items-center justify-center" };
var vn = defineComponent({
  __name: "Environment",
  setup(Ge) {
    const g2 = useRouter(), x2 = useRoute(), {
      activeWorkspace: p2,
      activeEnvironment: F,
      activeWorkspaceCollections: d2,
      activeEnvVariables: Q
    } = z(), { events: N, workspaceMutators: X, collectionMutators: h } = je(), { collapsedSidebarFolders: y, toggleSidebarFolder: w } = m3(), M2 = W(), D = W(), I = W(), R = ref(null), s = ref("default"), W2 = ref(""), E = ref(void 0), v = ref(void 0), S = ref(void 0), { toast: U2 } = i(), Y = (e) => JSON.parse(e);
    function z2(e, o, n) {
      var t;
      e && (o.uid === n ? U2(
        `Environment name already used in ${(t = o.info) == null ? void 0 : t.title}`,
        "error"
      ) : U2("Environment name already used in another collection", "error"));
    }
    const C2 = computed(() => d2.value.filter(
      (e) => {
        var o;
        return ((o = e.info) == null ? void 0 : o.title) !== "Drafts";
      }
    ));
    function Z(e) {
      C2.value.some(
        (n) => {
          const t = Object.keys(
            n["x-scalar-environments"] || {}
          ).includes(e.name);
          return z2(t, n, e.collectionId), t;
        }
      ) || (e.collectionId && (h.addEnvironment(
        e.name,
        {
          variables: {},
          color: e.color
        },
        e.collectionId
      ), y[e.collectionId] || w(e.collectionId), g2.push({
        name: "environment.collection",
        params: {
          [a.Collection]: e.collectionId,
          [a.Environment]: e.name
        }
      })), D.hide());
    }
    function ee(e) {
      var n, t;
      if (!F)
        return;
      const o = Y(e);
      if (s.value === "default")
        X.edit(
          (n = p2.value) == null ? void 0 : n.uid,
          "environments",
          o
        );
      else {
        const a3 = d2.value.find(
          (r) => {
            var m5;
            return (m5 = r["x-scalar-environments"]) == null ? void 0 : m5[s.value ?? ""];
          }
        );
        if ((t = a3 == null ? void 0 : a3["x-scalar-environments"]) != null && t[s.value ?? ""]) {
          const r = a3["x-scalar-environments"][s.value ?? ""];
          r && (r.variables = o, h.edit(
            a3.uid,
            "x-scalar-environments",
            a3["x-scalar-environments"]
          ));
        }
      }
    }
    const $2 = (e) => {
      E.value = e, D.show();
    }, ne = (e, o) => {
      v.value = e, E.value = o, S.value = e, I.show();
    }, te = (e) => {
      var o, n, t;
      R.value = e, W2.value = ((t = (n = (o = d2.value.find(
        (a3) => {
          var r;
          return (r = a3["x-scalar-environments"]) == null ? void 0 : r[e];
        }
      )) == null ? void 0 : o["x-scalar-environments"]) == null ? void 0 : n[e]) == null ? void 0 : t.color) ?? "", M2.show();
    }, oe = (e) => {
      const o = R.value;
      typeof o == "string" && (d2.value.some(
        (t) => {
          var a3;
          return (a3 = t["x-scalar-environments"]) == null ? void 0 : a3[o];
        }
      ) && d2.value.forEach((t) => {
        var a3;
        (a3 = t["x-scalar-environments"]) != null && a3[o] && (t["x-scalar-environments"][o].color = e, h.edit(
          t.uid,
          "x-scalar-environments",
          t["x-scalar-environments"]
        ));
      }), M2.hide());
    };
    function ae(e) {
      var n;
      C2.value.forEach((t) => {
        h.removeEnvironment(e, t.uid);
      });
      const o = C2.value.flatMap(
        (t) => Object.keys(t["x-scalar-environments"] || {})
      );
      if (o.length > 0) {
        const t = o[o.length - 1];
        if (!t)
          return;
        const a3 = d2.value.find(
          (r) => Object.keys(r["x-scalar-environments"] || {}).includes(
            t
          )
        );
        s.value = t, g2.push({
          name: "environment.collection",
          params: {
            [a.Collection]: a3 == null ? void 0 : a3.uid,
            [a.Environment]: t
          }
        }), a3 && !y[a3.uid] && w(a3.uid);
      } else
        s.value = "default", g2.push({
          name: "environment.default",
          params: {
            [a.Workspace]: (n = p2.value) == null ? void 0 : n.uid
          }
        });
    }
    const re = () => s.value === "default" ? "Global Environment" : s.value, le = () => {
      var e, o, n, t;
      return s.value === "default" ? JSON.stringify((e = p2.value) == null ? void 0 : e.environments, null, 2) : JSON.stringify(
        (t = (n = (o = d2.value.find(
          (a3) => {
            var r;
            return (r = a3["x-scalar-environments"]) == null ? void 0 : r[s.value ?? ""];
          }
        )) == null ? void 0 : o["x-scalar-environments"]) == null ? void 0 : n[s.value ?? ""]) == null ? void 0 : t.variables,
        null,
        2
      );
    }, se = (e) => y[e], A = (e) => {
      e != null && e.createNew && x2.name === "environment" && $2();
    };
    watch(
      () => [x2.params[a.Collection], x2.params[a.Environment]],
      ([e, o]) => {
        e ? s.value = o : s.value = "default";
      }
    ), onMounted(() => {
      s.value = x2.params[a.Environment] || "default", N.hotKeys.on(A);
      const e = x2.params[a.Collection];
      e && !y[e] && w(e);
    }), onBeforeUnmount(() => N.hotKeys.off(A));
    const ie = (e, o, n) => {
      var a3, r;
      const t = n ? {
        name: "environment.collection",
        params: {
          [a.Workspace]: (a3 = p2.value) == null ? void 0 : a3.uid,
          [a.Collection]: n,
          [a.Environment]: o
        }
      } : {
        name: "environment.default",
        params: {
          [a.Workspace]: (r = p2.value) == null ? void 0 : r.uid,
          [a.Environment]: o
        }
      };
      e.metaKey ? window.open(g2.resolve(t).href, "_blank") : g2.push(t);
    };
    function ue() {
      v.value = void 0, E.value = void 0, S.value = void 0, I.hide();
    }
    function me(e) {
      C2.value.some(
        (n) => {
          const t = Object.keys(
            n["x-scalar-environments"] || {}
          ).includes(e);
          return z2(
            t,
            n,
            E.value
          ), t;
        }
      ) || (e && v.value !== "default" && d2.value.forEach((n) => {
        var t;
        if ((t = n["x-scalar-environments"]) != null && t[v.value ?? ""]) {
          const a3 = n["x-scalar-environments"], r = {};
          Object.keys(a3).forEach((m5) => {
            const V = a3[m5];
            V && (m5 === v.value ? r[e] = V : r[m5] = V);
          }), n["x-scalar-environments"] = r, h.edit(
            n.uid,
            "x-scalar-environments",
            n["x-scalar-environments"]
          );
        }
      }), e && s.value === v.value && (s.value = e), v.value = void 0, E.value = void 0, S.value = void 0, I.hide());
    }
    const { handleDragEnd: ce, isDroppable: de } = U(
      d2,
      h
    );
    return watch(
      () => x2.query.openEnvironmentModal,
      (e) => {
        e === "true" && $2();
      },
      { immediate: true }
    ), (e, o) => (openBlock(), createBlock(u, null, {
      default: withCtx(() => [
        createVNode(m4, { title: "Collections" }, {
          content: withCtx(() => [
            createBaseVNode("div", Be, [
              createVNode(_, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(p, {
                    key: "default",
                    class: "text-xs",
                    isCopyable: false,
                    to: {
                      name: "environment",
                      params: {
                        [unref(a).Environment]: "default"
                      }
                    },
                    type: "environment",
                    variable: {
                      name: "Global Environment",
                      uid: "default",
                      icon: "Globe",
                      isDefault: true
                    }
                  }, null, 8, ["to"])),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(C2.value, (n) => {
                    var t;
                    return openBlock(), createElementBlock("li", {
                      key: n.uid,
                      class: "gap-1/2 flex flex-col"
                    }, [
                      createBaseVNode("button", {
                        class: "hover:bg-b-2 group flex w-full items-center gap-1.5 rounded p-1.5 text-left text-sm font-medium break-words",
                        type: "button",
                        onClick: (a3) => unref(w)(n.uid)
                      }, [
                        createBaseVNode("span", Ke, [
                          createVNode(unref(d), {
                            class: "text-sidebar-c-2 size-3.5 min-w-3.5 stroke-2 group-hover:hidden",
                            src: n["x-scalar-icon"] || "interface-content-folder"
                          }, null, 8, ["src"]),
                          createBaseVNode("div", {
                            class: normalizeClass({
                              "rotate-90": unref(y)[n.uid]
                            })
                          }, [
                            createVNode(unref(m), {
                              class: "text-c-3 hover:text-c-1 hidden text-sm group-hover:block",
                              icon: "ChevronRight",
                              size: "md"
                            })
                          ], 2)
                        ]),
                        createTextVNode(" " + toDisplayString(((t = n.info) == null ? void 0 : t.title) ?? ""), 1)
                      ], 8, Le),
                      withDirectives(createBaseVNode("div", {
                        class: normalizeClass({
                          "before:bg-border relative mb-[.5px] before:pointer-events-none before:absolute before:top-0 before:left-3 before:z-1 before:h-[calc(100%_+_.5px)] before:w-[.5px] last:mb-0 last:before:h-full": Object.keys(n["x-scalar-environments"] || {}).length > 0
                        })
                      }, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(n["x-scalar-environments"], (a3, r) => (openBlock(), createBlock(p, {
                          key: r,
                          class: "text-xs",
                          collectionId: n.uid,
                          isCopyable: false,
                          isDeletable: true,
                          isRenameable: true,
                          isDraggable: true,
                          isDroppable: unref(de),
                          to: {
                            name: "environment.collection",
                            params: {
                              [unref(a).Collection]: n.uid,
                              [unref(a).Environment]: r
                            }
                          },
                          type: "environment",
                          variable: {
                            name: r,
                            uid: r,
                            color: a3.color ?? "#FFFFFF",
                            isDefault: false
                          },
                          warningMessage: "Are you sure you want to delete this environment?",
                          onClick: withModifiers((m5) => ie(m5, r, n.uid), ["prevent"]),
                          onColorModal: (m5) => te(r),
                          onDelete: (m5) => ae(r),
                          onRename: (m5) => ne(r, n.uid),
                          onOnDragEnd: unref(ce)
                        }, null, 8, ["collectionId", "isDroppable", "to", "variable", "onClick", "onColorModal", "onDelete", "onRename", "onOnDragEnd"]))), 128)),
                        Object.keys(n["x-scalar-environments"] || {}).length === 0 ? (openBlock(), createBlock(unref($), {
                          key: 0,
                          class: "text-c-1 hover:bg-b-2 flex h-8 w-full justify-start gap-1.5 py-0 pl-6 text-xs",
                          variant: "ghost",
                          onClick: (a3) => $2(n.uid)
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(m), {
                              icon: "Add",
                              size: "sm"
                            }),
                            o[2] || (o[2] = createBaseVNode("span", null, "Add Environment", -1))
                          ]),
                          _: 2,
                          __: [2]
                        }, 1032, ["onClick"])) : createCommentVNode("", true)
                      ], 2), [
                        [vShow, se(n.uid)]
                      ])
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ])
          ]),
          button: withCtx(() => [
            createVNode(g, {
              click: $2,
              hotkey: "N"
            }, {
              title: withCtx(() => o[3] || (o[3] = [
                createTextVNode(" Add Environment ")
              ])),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(x, { class: "flex-1" }, {
          default: withCtx(() => [
            createVNode(b, null, createSlots({
              default: withCtx(() => [
                s.value && unref(p2) ? (openBlock(), createBlock(a2, {
                  key: 0,
                  class: "py-2 pr-2 pl-px md:px-4",
                  envVariables: unref(Q),
                  environment: unref(F),
                  language: "json",
                  lineNumbers: "",
                  lint: "",
                  modelValue: le(),
                  workspace: unref(p2),
                  "onUpdate:modelValue": ee
                }, null, 8, ["envVariables", "environment", "modelValue", "workspace"])) : createCommentVNode("", true)
              ]),
              _: 2
            }, [
              s.value ? {
                name: "title",
                fn: withCtx(() => [
                  createBaseVNode("span", null, toDisplayString(re()), 1)
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ]),
          _: 1
        }),
        createVNode(M, {
          selectedColor: W2.value,
          state: unref(M2),
          onCancel: o[0] || (o[0] = (n) => unref(M2).hide()),
          onSubmit: oe
        }, null, 8, ["selectedColor", "state"]),
        createVNode(K, {
          activeWorkspaceCollections: C2.value,
          collectionId: E.value,
          state: unref(D),
          onCancel: o[1] || (o[1] = (n) => unref(D).hide()),
          onSubmit: Z
        }, null, 8, ["activeWorkspaceCollections", "collectionId", "state"]),
        createVNode(unref(m2), {
          size: "xxs",
          state: unref(I),
          title: `Edit ${v.value}`
        }, {
          default: withCtx(() => [
            createVNode(C, {
              name: S.value ?? "",
              onClose: ue,
              onEdit: me
            }, null, 8, ["name"])
          ]),
          _: 1
        }, 8, ["state", "title"])
      ]),
      _: 1
    }));
  }
});
export {
  vn as default
};
//# sourceMappingURL=Environment.vue-NKV3546Z.js.map
