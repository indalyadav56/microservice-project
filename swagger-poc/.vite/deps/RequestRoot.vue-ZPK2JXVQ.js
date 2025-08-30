import {
  g
} from "./chunk-4EBJ24QN.js";
import {
  $ as $3
} from "./chunk-E54453MF.js";
import {
  d
} from "./chunk-LFPELCPJ.js";
import {
  C
} from "./chunk-JPJUDDFZ.js";
import {
  m as m7
} from "./chunk-23JXSGPC.js";
import {
  a,
  w
} from "./chunk-A2KY2U2H.js";
import {
  G,
  I,
  J,
  L,
  P,
  W as W2,
  diff,
  m as m5,
  u as u3
} from "./chunk-7RQVLVWK.js";
import {
  m as m8
} from "./chunk-XTT2Q3MF.js";
import {
  o
} from "./chunk-FVROINNU.js";
import {
  i as i2
} from "./chunk-TBN3PBMZ.js";
import {
  $ as $4,
  C as C2,
  D as D3,
  i as i3,
  m as m6,
  require_mime_type
} from "./chunk-KEMKBPRU.js";
import "./chunk-AE36LDHR.js";
import {
  m as m4
} from "./chunk-YMJHZV34.js";
import {
  Fuse,
  s as s2
} from "./chunk-BGMGCHHM.js";
import {
  RouterLink,
  RouterView,
  useRouter
} from "./chunk-UKABXAIE.js";
import {
  F,
  a as a2,
  je,
  k as k2,
  p as p2,
  parseSchema,
  r,
  s,
  t,
  z
} from "./chunk-V4XIGGIS.js";
import {
  $,
  $2,
  B3 as B,
  B4 as B2,
  D,
  D3 as D2,
  Fragment,
  N2 as N,
  W,
  canMethodHaveBody,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createHash,
  createSlots,
  createTextVNode,
  createVNode,
  defineComponent,
  fetchDocument,
  httpStatusCodes,
  i,
  isDefined,
  isRef,
  k,
  m3 as m,
  m4 as m2,
  m5 as m3,
  mergeUrls,
  nextTick,
  normalizeClass,
  onBeforeUnmount,
  onMounted,
  openBlock,
  p,
  reactive,
  redirectToProxy,
  ref,
  renderList,
  renderSlot,
  resolveComponent,
  shouldIgnoreEntity,
  shouldUseProxy,
  toDisplayString,
  u,
  u2,
  unref,
  useCssVars,
  useId,
  useTimeoutPoll,
  v3 as v,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers,
  x2 as x
} from "./chunk-BCXGVGOY.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/@scalar/object-utils/dist/parse/json.js
var safeJSON = {
  parse(v3) {
    try {
      return {
        error: false,
        data: JSON.parse(v3)
      };
    } catch (e) {
      return {
        error: true,
        message: e.message ? String(e.message) : "Unknown Error"
      };
    }
  }
};

// node_modules/@scalar/api-client/dist/components/Sidebar/SidebarToggle.vue.js
var u4 = ["aria-pressed"];
var m9 = { class: "sr-only" };
var g2 = {
  class: "size-4",
  fill: "none",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
var h = { "clip-path": "url(#mask)" };
var k3 = defineComponent({
  __name: "SidebarToggle",
  setup(b) {
    const { isSidebarOpen: s3, toggleSidebarOpen: r2 } = m4();
    return (f4, t2) => (openBlock(), createElementBlock("button", {
      "aria-pressed": unref(s3),
      class: "scalar-sidebar-toggle text-c-3 hover:bg-b-2 active:text-c-1 rounded-lg p-2",
      type: "button",
      onClick: t2[0] || (t2[0] = //@ts-ignore
      (...i5) => unref(r2) && unref(r2)(...i5))
    }, [
      createBaseVNode("span", m9, toDisplayString(unref(s3) ? "Hide" : "Show") + " sidebar", 1),
      (openBlock(), createElementBlock("svg", g2, [
        t2[1] || (t2[1] = createBaseVNode("defs", null, [
          createBaseVNode("clipPath", { id: "mask" }, [
            createBaseVNode("path", {
              "clip-rule": "evenodd",
              d: "M9 3.2H4c-1.7 0-3 1.3-3 3v11.5c0 1.7 1.3 3 3 3h5V3.2z"
            })
          ])
        ], -1)),
        createBaseVNode("g", h, [
          createBaseVNode("path", {
            class: normalizeClass(["transition-transform duration-300", unref(s3) ? "translate-x-0" : "-translate-x-1/2"]),
            d: "M1 3.2h8v17.5H1z",
            fill: "currentColor"
          }, null, 2)
        ]),
        t2[2] || (t2[2] = createBaseVNode("path", {
          d: "M20 20.8H4c-1.7 0-3-1.3-3-3V6.2c0-1.7 1.3-3 3-3h16c1.7 0 3 1.3 3 3v11.5c0 1.7-1.3 3-3 3zM9 3.2v17.5",
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2"
        }, null, -1))
      ]))
    ], 8, u4));
  }
});

// node_modules/@scalar/api-client/dist/libs/validate-parameters.js
var i4 = (a4) => {
  const e = /* @__PURE__ */ new Set();
  return a4 && ["path", "query", "headers", "cookies"].some((n2) => {
    var s3, t2;
    return (t2 = (s3 = a4.parameters) == null ? void 0 : s3[n2]) == null ? void 0 : t2.some((r2) => {
      r2.required && r2.value === "" && e.add(r2.key);
    });
  }), e;
};

// node_modules/@scalar/api-client/dist/views/Request/hooks/useOpenApiWatcher.js
var k4 = 5 * 1e3;
var q = 60 * 1e3;
var J2 = () => {
  const { toast: h2 } = i(), c2 = z(), o3 = je(), { activeCollection: s3, activeWorkspace: W3 } = c2, { collectionMutators: n2 } = o3, a4 = (e) => h2(`[useOpenApiWatcher] Changes to the ${e} were not applied`, "error"), w2 = (e) => {
    e.path[0] === "info" || e.path[0] === "security" ? L(e, c2, o3) || a4("collection") : e.path[0] === "components" && e.path[1] === "securitySchemes" ? J(e, c2, o3) || a4("securitySchemes") : e.path[0] === "servers" ? W2(e, c2, o3) || a4("servers") : e.path[0] === "tags" ? I(e, c2, o3) || a4("tags") : e.path[0] === "paths" && (P(e, c2, o3) || a4("requests"));
  }, { pause: p3, resume: m11 } = useTimeoutPoll(async () => {
    var l2, v3;
    const e = (l2 = s3.value) == null ? void 0 : l2.documentUrl;
    if (!e)
      return;
    const t2 = F[e];
    try {
      const i5 = await fetchDocument(e, (v3 = W3.value) == null ? void 0 : v3.proxyUrl, false), u5 = createHash(i5);
      if (n2.edit(s3.value.uid, "watchModeStatus", "WATCHING"), t2 != null && t2.hash)
        if (t2.hash && t2.hash !== u5) {
          const { schema: r2 } = await parseSchema(i5), A = diff(t2.schema, r2), y = G(A);
          try {
            y.forEach(w2), F[e] = {
              hash: u5,
              schema: r2
            };
          } catch (E) {
            console.error("[useOpenApiWatcher] Error:", E);
          }
        } else
          console.log("[useOpenApiWatcher] No changes detected yet…");
      else {
        const { schema: r2 } = await parseSchema(i5);
        r2 && (F[e] = {
          hash: u5,
          schema: r2
        });
      }
    } catch (i5) {
      console.error("[useOpenApiWatcher] Error:", i5), console.info("[useOpenApiWatcher] Pausing watcher for 60 seconds"), p3(), n2.edit(s3.value.uid, "watchModeStatus", "ERROR"), h2("[useOpenApiWatcher] Unable to fetch the spec file, paused the watcher for 60 seconds", "error"), setTimeout(() => {
        console.info("[useOpenApiWatcher] Resuming watcher"), m11();
      }, q);
    }
  }, k4);
  watch(
    [() => {
      var e;
      return (e = s3.value) == null ? void 0 : e.documentUrl;
    }, () => {
      var e;
      return (e = s3.value) == null ? void 0 : e.watchMode;
    }],
    ([e, t2]) => {
      e && t2 ? (console.info(`[useOpenApiWatcher] Watching ${e} …`), m11()) : s3.value && (p3(), n2.edit(s3.value.uid, "watchModeStatus", "IDLE"));
    },
    { immediate: true }
  );
};

// node_modules/@scalar/api-client/dist/assets/rabbit.ascii.js
var _ = `         ,\\
         \\\\\\,_
          \\\` ,\\
     __,.-" =__)
   ."        )
,_/   ,    \\/\\_
\\_| )_-\\ \\_-\`
   \`-----\` \`--\``;

// node_modules/@scalar/api-client/dist/assets/rabbitjump.ascii.js
var _2 = `         __
        // \\,_
          \\\` ,\\
     __,.-" =__)
   ."        )
,_/   ,    \\/\\ 
\\_| // /  /  /
   /  /    `;

// node_modules/@scalar/api-client/dist/components/EnvironmentSelector/EnvironmentSelector.vue.js
var G2 = { class: "m-0 flex items-center gap-1.5 font-medium whitespace-nowrap" };
var H = { class: "flex h-4 w-4 items-center justify-center" };
var te = defineComponent({
  __name: "EnvironmentSelector",
  setup(J3) {
    const { activeCollection: a4, activeWorkspace: r2, activeEnvironment: u5 } = z(), { collectionMutators: C4 } = je(), { layout: y } = s2(), I2 = useRouter(), m11 = (e) => {
      a4.value && r2.value && (C4.edit(
        a4.value.uid,
        "x-scalar-active-environment",
        e
      ), r2.value.activeEnvironmentId = e);
    }, N2 = () => {
      var e;
      return I2.push({
        name: "environment.default",
        params: {
          [a2.Workspace]: (e = r2.value) == null ? void 0 : e.uid
        }
      });
    }, b = computed(() => {
      const { value: e } = u5, { value: t2 } = a4;
      return (e == null ? void 0 : e.name) || (t2 == null ? void 0 : t2["x-scalar-active-environment"]) || "No Environment";
    }), v3 = computed(() => {
      const { value: e } = a4, t2 = e == null ? void 0 : e["x-scalar-environments"];
      return t2 ? Object.entries(t2).map(([o3, i5]) => ({
        ...i5,
        uid: o3,
        name: o3
      })) : [];
    }), B3 = () => {
      const e = v3.value;
      if (e.length > 0) {
        const t2 = e[e.length - 1];
        t2 != null && t2.uid && m11(t2.uid);
      }
    };
    watch(v3, (e, t2) => {
      e.length > t2.length && B3();
    });
    const x2 = (e) => {
      const t2 = e["x-scalar-active-environment"];
      t2 && a4.value && r2.value ? (a4.value["x-scalar-active-environment"] = t2, r2.value.activeEnvironmentId = t2) : r2.value && (r2.value.activeEnvironmentId = "");
    };
    return watch(
      a4,
      (e) => e && x2(e)
    ), onMounted(() => {
      a4.value && x2(a4.value);
    }), (e, t2) => (openBlock(), createBlock(unref(k), { teleport: "" }, {
      items: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(v3.value, (o3) => (openBlock(), createBlock(unref(m2), {
          key: o3.uid,
          class: "group/item flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap",
          onClick: withModifiers((i5) => m11(o3.uid), ["stop"])
        }, {
          default: withCtx(() => {
            var i5;
            return [
              createVNode(unref(u), {
                selected: ((i5 = unref(a4)) == null ? void 0 : i5["x-scalar-active-environment"]) === o3.uid
              }, null, 8, ["selected"]),
              createTextVNode(" " + toDisplayString(o3.name), 1)
            ];
          }),
          _: 2
        }, 1032, ["onClick"]))), 128)),
        createVNode(unref(m2), {
          class: "group/item flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap",
          onClick: t2[0] || (t2[0] = withModifiers((o3) => m11(""), ["stop"]))
        }, {
          default: withCtx(() => {
            var o3, i5, h2;
            return [
              createVNode(unref(u), {
                selected: ((o3 = unref(u5)) == null ? void 0 : o3.uid) === "" && ((i5 = unref(a4)) == null ? void 0 : i5["x-scalar-active-environment"]) === "" || ((h2 = unref(u5)) == null ? void 0 : h2.name) === "No Environment"
              }, null, 8, ["selected"]),
              t2[1] || (t2[1] = createTextVNode(" No Environment "))
            ];
          }),
          _: 1,
          __: [1]
        }),
        createVNode(unref(u2)),
        unref(y) !== "modal" ? (openBlock(), createBlock(unref(m2), {
          key: 0,
          class: "flex items-center gap-1.5",
          onClick: N2
        }, {
          default: withCtx(() => [
            createBaseVNode("div", H, [
              createVNode(unref(m), {
                icon: "Brackets",
                size: "sm"
              })
            ]),
            t2[2] || (t2[2] = createBaseVNode("span", { class: "leading-none" }, "Manage Environments", -1))
          ]),
          _: 1,
          __: [2]
        })) : createCommentVNode("", true)
      ]),
      default: withCtx(() => [
        createVNode(unref($), {
          class: "text-c-1 hover:bg-b-2 line-clamp-1 h-auto w-fit justify-start px-1.5 py-1.5 font-normal",
          fullWidth: "",
          variant: "ghost"
        }, {
          default: withCtx(() => [
            createBaseVNode("h2", G2, toDisplayString(b.value), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});

// node_modules/@scalar/api-client/dist/components/Search/useSearch.js
function Q() {
  const u5 = useRouter(), { activeWorkspace: E, activeWorkspaceRequests: f4, activeWorkspaceCollections: w2 } = z(), { requests: x2, tags: A } = je(), c2 = ref([]), i5 = ref([]), a4 = ref(0), r2 = ref(""), v3 = ref(null), m11 = ref([]), p3 = new Fuse(c2.value, {
    keys: ["title", "description", "body"]
  }), C4 = () => {
    r2.value = "", a4.value = 0, i5.value = [], v3.value instanceof HTMLInputElement && v3.value.blur();
  }, d4 = (e) => {
    c2.value = e.filter((t2) => !shouldIgnoreEntity(t2)).filter((t2) => {
      var k5;
      const s3 = (k5 = w2.value) == null ? void 0 : k5.find(
        (l2) => l2.requests.includes(t2.uid)
      );
      return !!!(s3 != null && s3.tags.map((l2) => A[l2]).filter(isDefined).filter((l2) => {
        var I2;
        return (I2 = t2.tags) == null ? void 0 : I2.includes(l2.name);
      }).filter((l2) => shouldIgnoreEntity(l2)).length);
    }).map((t2) => {
      var s3, o3;
      return {
        id: t2.uid,
        title: t2.summary ?? t2.method,
        description: t2.description ?? "",
        httpVerb: t2.method,
        path: t2.path,
        link: (o3 = u5 == null ? void 0 : u5.resolve({
          name: "request",
          params: {
            [a2.Request]: t2.uid,
            [a2.Workspace]: (s3 = E.value) == null ? void 0 : s3.uid
          }
        })) == null ? void 0 : o3.href
      };
    }), p3.setCollection(c2.value);
  }, R = () => {
    a4.value = 0, i5.value = p3.search(r2.value);
  };
  watch(r2, (e) => {
    e.length ? R() : i5.value = [];
  });
  const D4 = (e) => {
    const t2 = e === "up" ? -1 : 1, s3 = h2.value.length;
    a4.value = (a4.value + t2 + s3) % s3, nextTick(() => {
      const o3 = m11.value[a4.value];
      o3 instanceof HTMLElement && o3.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });
  }, F3 = () => {
    if (a4.value >= 0) {
      const e = h2.value[a4.value];
      e && g4(e);
    }
  }, H2 = computed(() => f4.value.map((e) => x2[e]).filter(isDefined));
  watch(
    f4,
    () => {
      d4(H2.value);
    },
    { immediate: true }
  );
  const g4 = (e) => {
    u5.push(e.item.id), C4();
  }, h2 = computed(() => r2.value.length === 0 ? c2.value.map((e) => ({
    item: e
  })) : i5.value);
  return {
    searchText: r2,
    searchResultsWithPlaceholderResults: h2,
    selectedSearchResult: a4,
    onSearchResultClick: g4,
    fuseSearch: R,
    searchInputRef: v3,
    searchResultRefs: m11,
    navigateSearchResults: D4,
    selectSearchResult: F3,
    populateFuseDataArray: d4
  };
}

// node_modules/@scalar/api-client/dist/views/Request/handle-drag.js
function F2(f4, { collections: l2, collectionMutators: a4, tags: o3, tagMutators: p3, workspaceMutators: x2 }) {
  const { layout: b } = s2(), y = (i5, r2) => {
    i5.type === "collection" ? a4.edit(i5.uid, "children", r2) : i5.type === "tag" && p3.edit(i5.uid, "children", r2);
  };
  return {
    handleDragEnd: (i5, r2) => {
      var D4, U, v3, C4;
      if (!i5 || !r2)
        return;
      const { id: n2, parentId: d4 } = i5, { id: u5, parentId: s3, offset: c2 } = r2;
      if (d4 ? l2[d4] ? a4.edit(
        d4,
        "children",
        l2[d4].children.filter((e) => e !== n2)
      ) : o3[d4] && p3.edit(
        d4,
        "children",
        o3[d4].children.filter((e) => e !== n2)
      ) : x2.edit(
        (D4 = f4.value) == null ? void 0 : D4.uid,
        "collections",
        ((U = f4.value) == null ? void 0 : U.collections.filter((e) => e !== n2)) ?? []
      ), c2 === 2) {
        const e = l2[u5] || o3[u5];
        e && y(e, [...e.children ?? [], n2]);
      } else if (s3) {
        const e = l2[s3] || o3[s3];
        if (!e)
          return;
        const t2 = [...e.children ?? []], h2 = t2.findIndex((E) => u5 === E) ?? 0;
        t2.splice(h2 + c2, 0, n2), y(e, t2);
      } else {
        const e = [...((v3 = f4.value) == null ? void 0 : v3.collections) ?? []], t2 = e.findIndex((h2) => u5 === h2) ?? 0;
        e.splice(t2 + c2, 0, n2), x2.edit((C4 = f4.value) == null ? void 0 : C4.uid, "collections", e);
      }
    },
    isDroppable: (i5, r2) => {
      var n2, d4;
      return !(b === "modal" || !l2[i5.id] && r2.offset !== 2 || l2[i5.id] && ((d4 = (n2 = l2[r2.id]) == null ? void 0 : n2.info) == null ? void 0 : d4.title) === "Drafts");
    }
  };
}

// node_modules/@scalar/api-client/dist/components/Sidebar/Actions/EditSidebarListCollection.vue.js
var C3 = { class: "grid grid-cols-[auto_1fr] gap-2" };
var g3 = { class: "flex aspect-square" };
var $5 = defineComponent({
  __name: "EditSidebarListCollection",
  props: {
    name: {},
    icon: {}
  },
  emits: ["close", "edit"],
  setup(d4, { emit: c2 }) {
    const r2 = d4, i5 = c2, a4 = ref(r2.name), o3 = ref(r2.icon);
    return (w2, e) => (openBlock(), createBlock(a, {
      onCancel: e[2] || (e[2] = (t2) => i5("close")),
      onSubmit: e[3] || (e[3] = (t2) => i5("edit", a4.value, o3.value))
    }, {
      default: withCtx(() => [
        createBaseVNode("div", C3, [
          createBaseVNode("div", g3, [
            createVNode($3, {
              modelValue: o3.value,
              "onUpdate:modelValue": e[0] || (e[0] = (t2) => o3.value = t2),
              placement: "bottom-start"
            }, {
              default: withCtx(() => [
                createVNode(unref($), {
                  class: "aspect-square h-auto px-0",
                  variant: "outlined"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(d), {
                      class: "text-c-2 size-4",
                      src: o3.value
                    }, null, 8, ["src"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          createVNode(unref(N), {
            modelValue: a4.value,
            "onUpdate:modelValue": e[1] || (e[1] = (t2) => a4.value = t2),
            autofocus: "",
            class: "flex-1"
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    }));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSidebarItemMenu.vue2.js
var ge = defineComponent({
  __name: "RequestSidebarItemMenu",
  props: {
    menuItem: {}
  },
  emits: ["closeMenu", "toggleWatchMode", "clearDrafts"],
  setup(A, { emit: B3 }) {
    const u5 = A, $6 = B3, { replace: D4 } = useRouter(), {
      activeRouterParams: x2,
      activeWorkspaceCollections: q3,
      activeWorkspaceRequests: U
    } = z(), { events: V, requestMutators: L2 } = je(), I2 = W(), w2 = W(), C4 = W(), P2 = () => {
      var e;
      return V.commandPalette.emit({
        commandName: "Add Example",
        metaData: {
          itemUid: (e = u5.menuItem.item) == null ? void 0 : e.entity.uid
        }
      });
    }, z2 = (e, t2) => {
      var i5;
      (i5 = u5.menuItem.item) == null || i5.edit(e, t2), I2.hide();
    }, F3 = () => {
      var e, t2, i5;
      if ((e = u5.menuItem.item) == null || e.delete(), !U.value.length) {
        const { request: f4 } = k2(), a4 = q3.value.find(
          (o3) => {
            var l2;
            return ((l2 = o3.info) == null ? void 0 : l2.title) === "Drafts";
          }
        );
        a4 && (L2.add(f4, a4.uid), D4({
          name: "request",
          params: {
            [a2.Request]: f4.uid
          }
        }));
      }
      if (x2.value[a2.Request] === ((t2 = u5.menuItem.item) == null ? void 0 : t2.entity.uid) && D4({
        name: "request",
        params: {
          [a2.Request]: "default"
        }
      }), x2.value[a2.Examples] === ((i5 = u5.menuItem.item) == null ? void 0 : i5.entity.uid) && D4({
        name: "request",
        params: {
          [a2.Request]: "default"
        }
      }), q3.value[0]) {
        const f4 = q3.value[0].requests[0];
        D4({
          name: "request",
          params: {
            [a2.Request]: f4
          }
        });
      }
      w2.hide();
    }, k5 = ref(null);
    watch([() => u5.menuItem.open, k5], async ([e]) => {
      var t2, i5;
      e && ((i5 = (t2 = k5.value) == null ? void 0 : t2.$parent) != null && i5.$el) && k5.value.$parent.$el.focus();
    });
    const N2 = () => u5.menuItem.open && $6("closeMenu");
    onMounted(() => window.addEventListener("click", N2)), onBeforeUnmount(() => window.removeEventListener("click", N2));
    const K2 = () => {
      $6("toggleWatchMode", u5.menuItem.item);
    }, j = () => {
      $6("clearDrafts"), C4.hide();
    }, E = computed(() => {
      var e;
      return ((e = u5.menuItem.item) == null ? void 0 : e.title) === "Drafts";
    });
    return (e, t2) => {
      var i5, f4;
      return openBlock(), createElementBlock(Fragment, null, [
        e.menuItem.targetRef && e.menuItem.open ? (openBlock(), createBlock(unref(D), {
          key: 0,
          placement: "right-start",
          target: e.menuItem.targetRef,
          teleport: ""
        }, {
          floating: withCtx(() => [
            createVNode(unref(B), {
              onKeydown: t2[3] || (t2[3] = withKeys((a4) => e.$emit("closeMenu"), ["escape"]))
            }, {
              default: withCtx(() => {
                var a4, o3;
                return [
                  ((a4 = e.menuItem.item) == null ? void 0 : a4.entity.type) === "request" ? (openBlock(), createBlock(unref(p), {
                    key: 0,
                    class: "flex gap-2",
                    onClick: P2
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(m), {
                        class: "inline-flex",
                        icon: "Example",
                        size: "md",
                        thickness: "1.5"
                      }),
                      t2[8] || (t2[8] = createBaseVNode("span", null, "Add Example", -1))
                    ]),
                    _: 1,
                    __: [8]
                  })) : createCommentVNode("", true),
                  E.value ? createCommentVNode("", true) : (openBlock(), createBlock(unref(p), {
                    key: 1,
                    ref_key: "menuRef",
                    ref: k5,
                    class: "flex gap-2",
                    onClick: t2[0] || (t2[0] = (l2) => unref(I2).show())
                  }, {
                    default: withCtx(() => {
                      var l2;
                      return [
                        createVNode(unref(m), {
                          class: "inline-flex",
                          icon: "Edit",
                          size: "md",
                          thickness: "1.5"
                        }),
                        createBaseVNode("span", null, [
                          ((l2 = e.menuItem.item) == null ? void 0 : l2.entity.type) === "collection" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                            createTextVNode(" Edit ")
                          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                            createTextVNode(" Rename ")
                          ], 64))
                        ])
                      ];
                    }),
                    _: 1
                  }, 512)),
                  (o3 = e.menuItem.item) != null && o3.documentUrl ? (openBlock(), createBlock(unref(p), {
                    key: 2,
                    ref_key: "menuRef",
                    ref: k5,
                    class: "flex gap-2",
                    onClick: K2
                  }, {
                    default: withCtx(() => {
                      var l2, v3;
                      return [
                        createVNode(unref(m), {
                          class: "inline-flex",
                          icon: (l2 = e.menuItem.item) != null && l2.watchMode ? "Unwatch" : "Watch",
                          size: "md",
                          thickness: "1.5"
                        }, null, 8, ["icon"]),
                        createBaseVNode("span", null, toDisplayString((v3 = e.menuItem.item) != null && v3.watchMode ? "Disable Watch Mode" : "Enable Watch Mode"), 1)
                      ];
                    }),
                    _: 1
                  }, 512)) : createCommentVNode("", true),
                  E.value ? createCommentVNode("", true) : (openBlock(), createBlock(unref(p), {
                    key: 3,
                    class: "flex gap-2",
                    onClick: t2[1] || (t2[1] = (l2) => unref(w2).show())
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(m), {
                        class: "inline-flex",
                        icon: "Delete",
                        size: "md",
                        thickness: "1.5"
                      }),
                      t2[9] || (t2[9] = createBaseVNode("span", null, "Delete", -1))
                    ]),
                    _: 1,
                    __: [9]
                  })),
                  E.value ? (openBlock(), createBlock(unref(p), {
                    key: 4,
                    class: "flex gap-2",
                    onClick: t2[2] || (t2[2] = (l2) => unref(C4).show())
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(m), {
                        class: "inline-flex",
                        icon: "Delete",
                        size: "md",
                        thickness: "1.5"
                      }),
                      t2[10] || (t2[10] = createBaseVNode("span", null, "Clear Drafts", -1))
                    ]),
                    _: 1,
                    __: [10]
                  })) : createCommentVNode("", true)
                ];
              }),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["target"])) : createCommentVNode("", true),
        createVNode(unref(m3), {
          size: "xxs",
          state: unref(w2),
          title: `Delete ${(i5 = e.menuItem.item) == null ? void 0 : i5.resourceTitle}`
        }, {
          default: withCtx(() => {
            var a4, o3;
            return [
              createVNode(w, {
                variableName: ((a4 = e.menuItem.item) == null ? void 0 : a4.title) ?? "",
                warningMessage: (o3 = e.menuItem.item) == null ? void 0 : o3.warning,
                onClose: t2[4] || (t2[4] = (l2) => unref(w2).hide()),
                onDelete: F3
              }, null, 8, ["variableName", "warningMessage"])
            ];
          }),
          _: 1
        }, 8, ["state", "title"]),
        createVNode(unref(m3), {
          size: "xxs",
          state: unref(I2),
          title: `Edit ${(f4 = e.menuItem.item) == null ? void 0 : f4.resourceTitle}`
        }, {
          default: withCtx(() => {
            var a4, o3, l2, v3;
            return [
              ((a4 = e.menuItem.item) == null ? void 0 : a4.resourceTitle) === "Collection" ? (openBlock(), createBlock($5, {
                key: 0,
                icon: ((o3 = e.menuItem.item) == null ? void 0 : o3.icon) || "interface-content-folder",
                name: (l2 = e.menuItem.item) == null ? void 0 : l2.title,
                onClose: t2[5] || (t2[5] = (G3) => unref(I2).hide()),
                onEdit: z2
              }, null, 8, ["icon", "name"])) : (openBlock(), createBlock(C, {
                key: 1,
                name: ((v3 = e.menuItem.item) == null ? void 0 : v3.title) ?? "",
                onClose: t2[6] || (t2[6] = (G3) => unref(I2).hide()),
                onEdit: z2
              }, null, 8, ["name"]))
            ];
          }),
          _: 1
        }, 8, ["state", "title"]),
        createVNode(unref(m3), {
          size: "xxs",
          state: unref(C4),
          title: "Clear Drafts"
        }, {
          default: withCtx(() => [
            createVNode(w, {
              variableName: "All Drafts",
              warningMessage: "This action will clear all drafts. This cannot be undone.",
              onClose: t2[7] || (t2[7] = (a4) => unref(C4).hide()),
              onDelete: j
            })
          ]),
          _: 1
        }, 8, ["state"])
      ], 64);
    };
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSidebarItemMenu.vue.js
var a3 = s(ge, [["__scopeId", "data-v-709241c2"]]);

// node_modules/@scalar/api-client/dist/views/Request/RequestSection/helpers/getting-started.js
var q2 = (u5, t2, i5) => {
  var n2;
  const s3 = u5.find((m11) => {
    var r2;
    return ((r2 = m11.info) == null ? void 0 : r2.title) === "Drafts";
  }), f4 = t2.length === 1;
  if (!t2[0])
    return false;
  const e = s3 == null ? void 0 : s3.requests.includes(t2[0]);
  if (!e)
    return false;
  const g4 = ((n2 = i5[(s3 == null ? void 0 : s3.requests[0]) ?? ""]) == null ? void 0 : n2.summary) !== "My First Request";
  return f4 && e && !g4;
};

// node_modules/@scalar/api-client/dist/views/Request/RequestSidebarItem.vue2.js
var Te = { class: "line-clamp-1 w-full pl-2 break-all" };
var Me = { class: "flex flex-row items-center gap-1" };
var $e = { class: "relative" };
var ze = { class: "flex items-start" };
var Ee = { class: "flex flex-1 flex-row justify-between font-medium" };
var Se = { class: "line-clamp-1 w-full text-left break-all" };
var je2 = { class: "relative flex h-fit justify-end" };
var Be = {
  class: "flex items-center justify-center",
  type: "button"
};
var We = ["aria-expanded"];
var Ae = { class: "flex h-5 max-w-[14px] items-center justify-center" };
var Ne = { class: "flex flex-1 flex-row justify-between" };
var Oe = { class: "line-clamp-1 w-full text-left font-medium break-all" };
var Pe = { class: "relative flex h-fit justify-end" };
var Ve = {
  class: "flex items-center justify-center",
  type: "button"
};
var Fe = { key: 3 };
var O = "hover:bg-sidebar-b-active indent-padding-left";
var it = defineComponent({
  __name: "RequestSidebarItem",
  props: {
    isDraggable: { type: Boolean, default: false },
    isDroppable: { type: [Boolean, Function], default: false },
    parentUids: {},
    uid: {},
    menuItem: {}
  },
  emits: ["onDragEnd", "newTab", "openMenu"],
  setup(l2, { emit: ne }) {
    useCssVars((e) => ({
      eae2c57a: ae.value,
      "7c91ad9b": re.value
    }));
    const oe = ne, { activeCollection: le, activeRequest: P2, activeRouterParams: se, activeWorkspace: U } = z(), {
      collections: C4,
      tags: R,
      requests: z2,
      requestExamples: E,
      collectionMutators: S,
      tagMutators: V,
      requestMutators: j,
      requestExampleMutators: F3,
      events: Y
    } = je(), x2 = useRouter(), { collapsedSidebarFolders: D4, toggleSidebarFolder: H2 } = m4(), { layout: p3 } = s2(), i5 = computed(() => {
      var o3, u5, g4, T, J3, Q3;
      const e = C4[l2.uid], t2 = R[l2.uid], r2 = z2[l2.uid], a4 = E[l2.uid];
      return e ? {
        title: ((o3 = e.info) == null ? void 0 : o3.title) || "Untitled Collection",
        entity: e,
        resourceTitle: "Collection",
        children: e.children,
        icon: e["x-scalar-icon"],
        documentUrl: e.documentUrl,
        watchMode: e.watchMode,
        to: e.uid && ((u5 = e == null ? void 0 : e.info) == null ? void 0 : u5.title) !== "Drafts" ? {
          name: "collection",
          params: {
            [a2.Workspace]: (g4 = U.value) == null ? void 0 : g4.uid,
            [a2.Collection]: e.uid
          }
        } : void 0,
        warning: "This cannot be undone. You're about to delete the collection and all folders and requests inside it.",
        edit: (k5, X2) => {
          S.edit(e.uid, "info.title", k5), X2 && S.edit(e.uid, "x-scalar-icon", X2);
        },
        delete: () => {
          U.value && S.delete(e, U.value);
        }
      } : t2 ? {
        title: t2.name,
        entity: t2,
        resourceTitle: "Tag",
        children: t2.children,
        warning: "This cannot be undone. You're about to delete the tag and all requests inside it",
        edit: (k5) => V.edit(t2.uid, "name", k5),
        delete: () => l2.parentUids[0] && V.delete(t2, l2.parentUids[0])
      } : r2 ? {
        title: r2.summary ?? r2.path,
        to: {
          name: "request",
          params: {
            workspace: (T = U.value) == null ? void 0 : T.uid,
            request: r2.uid
          }
        },
        method: r2.method,
        entity: r2,
        resourceTitle: "Request",
        warning: "This cannot be undone. You're about to delete the request.",
        children: r2.examples.slice(1),
        edit: (k5) => j.edit(r2.uid, "summary", k5),
        delete: () => l2.parentUids[0] && j.delete(r2, l2.parentUids[0])
      } : a4 != null && a4.requestUid ? {
        title: a4.name,
        to: {
          name: "request.examples",
          params: {
            workspace: (J3 = U.value) == null ? void 0 : J3.uid,
            request: a4.requestUid,
            examples: a4.uid
          }
        },
        method: (Q3 = z2[a4.requestUid]) == null ? void 0 : Q3.method,
        entity: a4,
        resourceTitle: "Example",
        warning: "This cannot be undone. You're about to delete the example from the request.",
        children: [],
        edit: (k5) => F3.edit(a4.uid, "name", k5),
        delete: () => F3.delete(a4)
      } : {
        title: "Unknown",
        entity: {
          uid: "",
          type: "unknown"
        },
        resourceTitle: "Unknown",
        children: [],
        edit: () => null,
        delete: () => null
      };
    }), I2 = computed(
      () => i5.value.entity.type === "collection" && i5.value.title === "Drafts"
    ), ae = computed(() => l2.parentUids.length ? p3 === "modal" ? `${(l2.parentUids.length - 1) * 12}px` : `${l2.parentUids.length * 12}px` : "12px"), re = computed(() => l2.parentUids.length ? p3 === "modal" ? `${(l2.parentUids.length - 1) * 12}px` : `${l2.parentUids.length * 12}px` : "0px"), ue = computed(
      () => {
        var e;
        return D4[l2.uid] || ((e = P2.value) == null ? void 0 : e.uid) === l2.uid && i5.value.entity.examples.length > 1;
      }
    ), de = computed(
      () => {
        var e;
        return typeof x2.currentRoute.value.name == "string" && x2.currentRoute.value.name.startsWith("request") && se.value[a2.Request] === "default" && ((e = P2.value) == null ? void 0 : e.uid) === l2.uid;
      }
    ), B3 = ref(null), L2 = computed(() => {
      let e = 0.5, t2 = 0.5;
      if (!B3.value)
        return { ceiling: e, floor: t2 };
      const { draggingItem: r2 } = B3.value;
      return !C4[r2 == null ? void 0 : r2.id] && i5.value.entity.type === "collection" ? (e = 1, t2 = 0) : i5.value.entity.type === "tag" && (e = 0.8, t2 = 0.2), { ceiling: e, floor: t2 };
    }), pe = (e, t2) => !(p3 === "modal" || E[t2.id] || C4[e.id]), fe = (e, t2) => {
      e && (u3(["default"]).some((o3) => e[o3]) ? oe("newTab", t2.title || "", t2.entity.uid) : t2.to && x2.push(t2.to), nextTick(() => Y.focusAddressBar.emit()));
    };
    function W3(e) {
      var o3, u5, g4;
      const t2 = l2.parentUids[0] ? ((o3 = C4[l2.parentUids[0]]) == null ? void 0 : o3.uid) || "" : e, r2 = l2.parentUids[0] && ((u5 = R[e]) != null && u5.name) ? { tags: [R[e].name] } : {}, a4 = j.add(
        r2,
        t2
      );
      a4 && (x2.push({
        name: "request",
        params: {
          workspace: (g4 = U.value) == null ? void 0 : g4.uid,
          request: a4.uid
        }
      }), Y.hotKeys.emit({
        focusAddressBar: new KeyboardEvent("keydown", { key: "l" })
      }));
    }
    const G3 = computed(() => {
      const { uid: e, watchModeStatus: t2 } = le.value || {};
      return e !== i5.value.entity.uid ? "text-c-3" : t2 === "WATCHING" ? "text-c-1" : t2 === "ERROR" ? "text-red" : "text-c-3";
    }), K2 = computed(() => i5.value.title === "Drafts" && p3 !== "modal" && i5.value.children.length > 0), ce2 = computed(() => {
      const e = z2[l2.uid];
      if (e)
        return !shouldIgnoreEntity(e);
      const t2 = R[l2.uid];
      return t2 ? !shouldIgnoreEntity(t2) : true;
    });
    return (e, t2) => {
      const r2 = resolveComponent("RequestSidebarItem", true);
      return ce2.value ? (openBlock(), createElementBlock("li", {
        key: 0,
        class: normalizeClass(["relative flex flex-row", [
          unref(p3) === "modal" && e.parentUids.length > 1 || unref(p3) !== "modal" && e.parentUids.length ? "before:bg-border indent-border-line-offset mb-[.5px] before:pointer-events-none before:absolute before:top-0 before:left-[calc(.75rem_+_.5px)] before:z-1 before:h-[calc(100%_+_.5px)] before:w-[.5px] last:mb-0 last:before:h-full" : ""
        ]])
      }, [
        createVNode(unref(m7), {
          id: i5.value.entity.uid,
          ref_key: "draggableRef",
          ref: B3,
          ceiling: L2.value.ceiling,
          class: "gap-1/2 flex flex-1 flex-col text-base",
          floor: L2.value.floor,
          isDraggable: e.isDraggable,
          isDroppable: e.isDroppable,
          parentIds: e.parentUids,
          onOnDragEnd: t2[12] || (t2[12] = (...a4) => e.$emit("onDragEnd", ...a4))
        }, {
          default: withCtx(() => {
            var a4;
            return [
              (i5.value.entity.type === "request" || i5.value.entity.type === "requestExample") && i5.value.to ? (openBlock(), createBlock(unref(RouterLink), {
                key: 0,
                class: "group no-underline",
                to: i5.value.to,
                onClick: t2[1] || (t2[1] = withModifiers(
                  (o3) => fe(o3, i5.value),
                  ["prevent"]
                ))
              }, {
                default: withCtx(({ isExactActive: o3 }) => {
                  var u5, g4;
                  return [
                    createBaseVNode("div", {
                      class: normalizeClass(["relative flex min-h-8 w-full cursor-pointer flex-row items-start justify-between gap-0.5 rounded py-1.5 pr-2", [
                        O,
                        o3 || de.value ? "bg-sidebar-b-active text-sidebar-c-active font-medium transition-none" : "text-sidebar-c-2"
                      ]])
                    }, [
                      createBaseVNode("span", Te, toDisplayString(i5.value.title || "Untitled"), 1),
                      createBaseVNode("div", Me, [
                        createBaseVNode("div", $e, [
                          unref(p3) !== "modal" ? (openBlock(), createBlock(unref($), {
                            key: 0,
                            class: normalizeClass(["hover:bg-b-3 hidden aspect-square h-fit px-0.5 py-0 opacity-0 group-hover:flex group-hover:opacity-100 group-focus-visible:opacity-100 group-has-[:focus-visible]:opacity-100", {
                              flex: ((g4 = (u5 = e.menuItem) == null ? void 0 : u5.item) == null ? void 0 : g4.entity.uid) === i5.value.entity.uid && e.menuItem.open
                            }]),
                            size: "sm",
                            type: "button",
                            variant: "ghost",
                            onClick: t2[0] || (t2[0] = withModifiers(
                              (T) => e.$emit("openMenu", {
                                item: i5.value,
                                parentUids: e.parentUids,
                                targetRef: T.currentTarget,
                                open: !e.menuItem.open
                              }),
                              ["stop", "prevent"]
                            ))
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(m), {
                                icon: "Ellipses",
                                size: "md"
                              })
                            ]),
                            _: 1
                          }, 8, ["class"])) : createCommentVNode("", true)
                        ]),
                        createBaseVNode("span", ze, [
                          t2[13] || (t2[13] = createTextVNode("   ")),
                          t2[14] || (t2[14] = createBaseVNode("span", { class: "sr-only" }, "HTTP Method:", -1)),
                          i5.value.method ? (openBlock(), createBlock(unref(m6), {
                            key: 0,
                            class: "font-bold",
                            method: i5.value.method
                          }, null, 8, ["method"])) : createCommentVNode("", true)
                        ])
                      ])
                    ], 2)
                  ];
                }),
                _: 1
              }, 8, ["to"])) : (unref(p3) !== "modal" || e.parentUids.length) && i5.value.entity.type === "collection" && i5.value.to ? (openBlock(), createBlock(unref(RouterLink), {
                key: 1,
                "aria-expanded": !!unref(D4)[i5.value.entity.uid],
                class: normalizeClass(["hover:bg-b-2 group relative flex w-full flex-row justify-start gap-1.5 rounded p-1.5 no-underline focus-visible:z-10", [
                  O,
                  {
                    "bg-sidebar-b-active text-sidebar-c-active transition-none": typeof unref(x2).currentRoute.value.name == "string" && unref(x2).currentRoute.value.name.startsWith("collection") && unref(x2).currentRoute.value.params[unref(a2).Collection] === i5.value.entity.uid,
                    "text-c-2": i5.value.title === "Untitled Collection"
                  }
                ]]),
                to: i5.value.to
              }, {
                default: withCtx(() => {
                  var o3;
                  return [
                    createBaseVNode("span", {
                      class: "flex h-5 max-w-[14px] cursor-pointer items-center justify-center",
                      onClick: t2[2] || (t2[2] = withModifiers((u5) => unref(H2)(i5.value.entity.uid), ["stop", "prevent"]))
                    }, [
                      renderSlot(e.$slots, "leftIcon", {}, () => [
                        createVNode(unref($2), {
                          class: "text-c-3 shrink-0",
                          open: !!unref(D4)[i5.value.entity.uid]
                        }, null, 8, ["open"])
                      ], true),
                      t2[15] || (t2[15] = createTextVNode("   "))
                    ]),
                    createBaseVNode("div", Ee, [
                      createBaseVNode("span", Se, toDisplayString(i5.value.title), 1),
                      createBaseVNode("div", je2, [
                        createBaseVNode("div", {
                          class: normalizeClass(["items-center gap-px opacity-0 group-hover:flex group-hover:opacity-100 group-focus-visible:opacity-100 group-has-[:focus-visible]:opacity-100", {
                            flex: e.menuItem.open,
                            hidden: !e.menuItem.open || ((o3 = e.menuItem.item) == null ? void 0 : o3.entity.uid) !== i5.value.entity.uid
                          }])
                        }, [
                          unref(p3) !== "modal" && !I2.value || I2.value && K2.value ? (openBlock(), createBlock(unref($), {
                            key: 0,
                            class: "hover:bg-b-3 hover:text-c-1 aspect-square h-fit px-0.5 py-0 group-focus-visible:opacity-100 group-has-[:focus-visible]:opacity-100",
                            size: "sm",
                            variant: "ghost",
                            onClick: t2[3] || (t2[3] = withModifiers(
                              (u5) => e.$emit("openMenu", {
                                item: i5.value,
                                parentUids: e.parentUids,
                                targetRef: u5.currentTarget.parentNode,
                                open: true
                              }),
                              ["stop", "prevent"]
                            ))
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(m), {
                                icon: "Ellipses",
                                size: "md"
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          unref(p3) !== "modal" ? (openBlock(), createBlock(unref($), {
                            key: 1,
                            class: "hover:bg-b-3 hover:text-c-1 aspect-square h-fit px-0.5 py-0 group-focus-visible:opacity-100 group-has-[:focus-visible]:opacity-100",
                            size: "sm",
                            variant: "ghost",
                            onClick: t2[4] || (t2[4] = withModifiers((u5) => W3(i5.value.entity.uid), ["stop", "prevent"]))
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(m), {
                                icon: "Add",
                                size: "md",
                                thickness: "2"
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ], 2),
                        i5.value.watchMode ? (openBlock(), createBlock(unref(v), {
                          key: 0,
                          placement: "right",
                          offset: 12,
                          content: `Watching: ${i5.value.documentUrl}`
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("button", Be, [
                              createVNode(unref(m), {
                                class: normalizeClass(["ml-0.5 text-sm", G3.value]),
                                icon: "Watch",
                                size: "md",
                                thickness: "2"
                              }, null, 8, ["class"])
                            ])
                          ]),
                          _: 1
                        }, 8, ["content"])) : createCommentVNode("", true),
                        t2[16] || (t2[16] = createBaseVNode("span", null, " ", -1))
                      ])
                    ])
                  ];
                }),
                _: 3
              }, 8, ["aria-expanded", "class", "to"])) : unref(p3) !== "modal" || e.parentUids.length ? (openBlock(), createElementBlock("button", {
                key: 2,
                "aria-expanded": !!unref(D4)[i5.value.entity.uid],
                class: normalizeClass(["hover:bg-b-2 group relative flex w-full flex-row justify-start gap-1.5 rounded p-1.5 focus-visible:z-10", [O]]),
                type: "button",
                onClick: t2[7] || (t2[7] = (o3) => unref(H2)(i5.value.entity.uid))
              }, [
                createBaseVNode("span", Ae, [
                  renderSlot(e.$slots, "leftIcon", {}, () => [
                    createVNode(unref($2), {
                      class: "text-c-3 hover:text-c-1 shrink-0",
                      open: !!unref(D4)[i5.value.entity.uid]
                    }, null, 8, ["open"])
                  ], true),
                  t2[17] || (t2[17] = createTextVNode("   "))
                ]),
                createBaseVNode("div", Ne, [
                  createBaseVNode("span", Oe, toDisplayString(i5.value.title), 1),
                  createBaseVNode("div", Pe, [
                    createBaseVNode("div", {
                      class: normalizeClass(["items-center gap-px opacity-0 group-hover:flex group-hover:opacity-100 group-focus-visible:opacity-100 group-has-[:focus-visible]:opacity-100", {
                        flex: e.menuItem.open,
                        hidden: !e.menuItem.open || ((a4 = e.menuItem.item) == null ? void 0 : a4.entity.uid) !== i5.value.entity.uid
                      }])
                    }, [
                      unref(p3) !== "modal" && !I2.value || I2.value && K2.value ? (openBlock(), createBlock(unref($), {
                        key: 0,
                        class: "hover:bg-b-3 hover:text-c-1 aspect-square h-fit px-0.5 py-0 group-focus-visible:opacity-100 group-has-[:focus-visible]:opacity-100",
                        size: "sm",
                        variant: "ghost",
                        onClick: t2[5] || (t2[5] = withModifiers(
                          (o3) => e.$emit("openMenu", {
                            item: i5.value,
                            parentUids: e.parentUids,
                            targetRef: o3.currentTarget.parentNode,
                            open: true
                          }),
                          ["stop", "prevent"]
                        ))
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(m), {
                            icon: "Ellipses",
                            size: "md"
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      unref(p3) !== "modal" ? (openBlock(), createBlock(unref($), {
                        key: 1,
                        class: "hover:bg-b-3 hover:text-c-1 aspect-square h-fit px-0.5 py-0 group-focus-visible:opacity-100 group-has-[:focus-visible]:opacity-100",
                        size: "sm",
                        variant: "ghost",
                        onClick: t2[6] || (t2[6] = withModifiers((o3) => W3(i5.value.entity.uid), ["stop", "prevent"]))
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(m), {
                            icon: "Add",
                            size: "md",
                            thickness: "2"
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ], 2),
                    i5.value.watchMode ? (openBlock(), createBlock(unref(v), {
                      key: 0,
                      content: "Watching: {{ item.documentUrl }}",
                      placement: "right",
                      offset: 12
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("button", Ve, [
                          createVNode(unref(m), {
                            class: normalizeClass(["ml-0.5 text-sm", G3.value]),
                            icon: "Watch",
                            size: "md",
                            thickness: "2"
                          }, null, 8, ["class"])
                        ])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    t2[18] || (t2[18] = createBaseVNode("span", null, " ", -1))
                  ])
                ])
              ], 10, We)) : createCommentVNode("", true),
              ue.value ? (openBlock(), createElementBlock("ul", Fe, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(i5.value.children, (o3) => (openBlock(), createBlock(r2, {
                  key: o3,
                  isDraggable: !unref(E)[o3],
                  isDroppable: pe,
                  menuItem: e.menuItem,
                  parentUids: [...e.parentUids, e.uid],
                  uid: o3,
                  onNewTab: t2[8] || (t2[8] = (u5, g4) => e.$emit("newTab", u5, g4)),
                  onOnDragEnd: t2[9] || (t2[9] = (...u5) => e.$emit("onDragEnd", ...u5)),
                  onOpenMenu: t2[10] || (t2[10] = (u5) => e.$emit("openMenu", u5))
                }, null, 8, ["isDraggable", "menuItem", "parentUids", "uid"]))), 128)),
                i5.value.children.length === 0 ? (openBlock(), createBlock(unref($), {
                  key: 0,
                  class: normalizeClass(["text-c-1 hover:bg-b-2 flex h-8 w-full justify-start gap-1.5 py-0 text-xs", e.parentUids.length ? "pl-9" : ""]),
                  variant: "ghost",
                  onClick: t2[11] || (t2[11] = (o3) => W3(i5.value.entity.uid))
                }, {
                  default: withCtx(() => [
                    createVNode(unref(m), {
                      icon: "Add",
                      size: "sm"
                    }),
                    t2[19] || (t2[19] = createBaseVNode("span", null, "Add Request", -1))
                  ]),
                  _: 1,
                  __: [19]
                }, 8, ["class"])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ];
          }),
          _: 3
        }, 8, ["id", "ceiling", "floor", "isDraggable", "isDroppable", "parentIds"])
      ], 2)) : createCommentVNode("", true);
    };
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSidebarItem.vue.js
var d2 = s(it, [["__scopeId", "data-v-4dedda07"]]);

// node_modules/@scalar/api-client/dist/views/Request/components/WorkspaceDropdown.vue.js
var K = { class: "flex w-[inherit] items-center text-base" };
var Q2 = { class: "m-0 flex items-center gap-1.5 font-bold" };
var X = { class: "line-clamp-1 text-left" };
var Z = { class: "overflow-hidden text-ellipsis" };
var ee = { class: "flex h-4 w-4 items-center justify-center" };
var ce = defineComponent({
  __name: "WorkspaceDropdown",
  setup(te2) {
    const { activeWorkspace: c2 } = z(), { workspaces: r2, workspaceMutators: x2, events: T } = je(), { push: g4 } = useRouter(), j = (o3) => {
      var t2;
      o3 !== ((t2 = c2.value) == null ? void 0 : t2.uid) && g4({
        name: "workspace",
        params: {
          workspace: o3
        }
      });
    }, b = computed(() => Object.keys(r2).length === 1), B3 = () => T.commandPalette.emit({ commandName: "Create Workspace" }), d4 = ref(""), i5 = ref(""), u5 = W(), p3 = W(), W3 = (o3) => {
      const t2 = r2[o3];
      t2 && (d4.value = t2.name, i5.value = o3, u5.show());
    }, R = (o3) => {
      o3.trim() && (x2.edit(i5.value, "name", o3.trim()), u5.hide());
    }, M = (o3) => {
      const t2 = r2[o3];
      t2 && (d4.value = t2.name, i5.value = o3, p3.show());
    }, A = async () => {
      var o3;
      if (!b.value) {
        const t2 = ((o3 = c2.value) == null ? void 0 : o3.uid) === i5.value, n2 = { ...r2 };
        if (delete n2[i5.value], x2.delete(i5.value), t2) {
          const m11 = Object.keys(n2)[0];
          await g4({
            name: "workspace",
            params: {
              workspace: m11
            }
          });
        }
      }
      p3.hide();
    };
    return (o3, t2) => (openBlock(), createElementBlock("div", null, [
      createBaseVNode("div", K, [
        createVNode(unref(k), null, {
          items: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(r2), (n2, m11) => (openBlock(), createBlock(unref(m2), {
              key: m11,
              class: "group/item flex w-full items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap",
              onClick: withModifiers((w2) => j(n2.uid), ["stop"])
            }, {
              default: withCtx(() => {
                var w2;
                return [
                  createVNode(unref(u), {
                    selected: ((w2 = unref(c2)) == null ? void 0 : w2.uid) === m11
                  }, null, 8, ["selected"]),
                  createBaseVNode("span", Z, toDisplayString(n2.name), 1),
                  createVNode(unref(k), {
                    placement: "right-start",
                    teleport: ""
                  }, {
                    items: withCtx(() => [
                      createVNode(unref(m2), {
                        class: "flex gap-2",
                        onMousedown: (_3) => W3(n2.uid),
                        onTouchend: withModifiers((_3) => W3(n2.uid), ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(m), {
                            class: "inline-flex",
                            icon: "Edit",
                            size: "md",
                            thickness: "1.5"
                          }),
                          t2[2] || (t2[2] = createBaseVNode("span", null, "Rename", -1))
                        ]),
                        _: 2,
                        __: [2]
                      }, 1032, ["onMousedown", "onTouchend"]),
                      b.value ? createCommentVNode("", true) : (openBlock(), createBlock(unref(m2), {
                        key: 0,
                        class: "flex gap-2",
                        onMousedown: withModifiers((_3) => M(n2.uid), ["prevent"]),
                        onTouchend: withModifiers((_3) => M(n2.uid), ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(m), {
                            class: "inline-flex",
                            icon: "Delete",
                            size: "md",
                            thickness: "1.5"
                          }),
                          t2[3] || (t2[3] = createBaseVNode("span", null, "Delete", -1))
                        ]),
                        _: 2,
                        __: [3]
                      }, 1032, ["onMousedown", "onTouchend"]))
                    ]),
                    default: withCtx(() => [
                      createVNode(unref($), {
                        class: "hover:bg-b-3 -mr-1 ml-auto aspect-square h-fit px-0.5 py-0 group-hover/item:flex",
                        size: "sm",
                        type: "button",
                        variant: "ghost"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(m), {
                            icon: "Ellipses",
                            size: "sm"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1024)
                ];
              }),
              _: 2
            }, 1032, ["onClick"]))), 128)),
            createVNode(unref(u2)),
            createVNode(unref(m2), {
              class: "flex items-center gap-1.5",
              onClick: B3
            }, {
              default: withCtx(() => [
                createBaseVNode("div", ee, [
                  createVNode(unref(m), {
                    icon: "Add",
                    size: "sm"
                  })
                ]),
                t2[4] || (t2[4] = createBaseVNode("span", null, "Create Workspace", -1))
              ]),
              _: 1,
              __: [4]
            })
          ]),
          default: withCtx(() => [
            createVNode(unref($), {
              class: "text-c-1 hover:bg-b-2 line-clamp-1 h-full w-fit justify-start px-1.5 py-1.5 font-normal",
              fullWidth: "",
              variant: "ghost"
            }, {
              default: withCtx(() => {
                var n2;
                return [
                  createBaseVNode("div", Q2, [
                    createBaseVNode("h2", X, toDisplayString((n2 = unref(c2)) == null ? void 0 : n2.name), 1)
                  ])
                ];
              }),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      createVNode(unref(m3), {
        size: "xxs",
        state: unref(p3),
        title: "Delete workspace"
      }, {
        default: withCtx(() => [
          createVNode(w, {
            variableName: d4.value,
            warningMessage: "This cannot be undone. You're about to delete the workspace and everything inside it.",
            onClose: t2[0] || (t2[0] = (n2) => unref(p3).hide()),
            onDelete: A
          }, null, 8, ["variableName"])
        ]),
        _: 1
      }, 8, ["state"]),
      createVNode(unref(m3), {
        size: "xxs",
        state: unref(u5),
        title: "Rename Workspace"
      }, {
        default: withCtx(() => [
          createVNode(C, {
            name: d4.value,
            onClose: t2[1] || (t2[1] = (n2) => unref(u5).hide()),
            onEdit: R
          }, null, 8, ["name"])
        ]),
        _: 1
      }, 8, ["state"])
    ]));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSidebar.vue2.js
var Xe = { class: "bg-b-1 sticky top-0 z-20 flex h-12 items-center px-3" };
var Ye = {
  key: 1,
  class: "text-c-3"
};
var Ze = ["aria-pressed"];
var et = { class: "sr-only" };
var tt = {
  key: 0,
  class: "search-button-fade sticky top-12 z-10 px-3 py-2.5 pt-0 focus-within:z-20",
  role: "search"
};
var ot = {
  key: 1,
  class: "contents"
};
var st = {
  key: 0,
  class: "empty-sidebar-item-content px-2.5 py-2.5"
};
var at = { class: "rabbit-ascii relative m-auto mt-2 h-[68px] w-[60px]" };
var Mt = defineComponent({
  __name: "RequestSidebar",
  emits: ["newTab", "clearDrafts"],
  setup(rt, { emit: Q3 }) {
    const X2 = Q3, {
      collapsedSidebarFolders: Y,
      isSidebarOpen: P2,
      setCollapsedSidebarFolder: Z2,
      toggleSidebarOpen: ee2
    } = m4(), { layout: n2 } = s2(), _3 = je(), {
      activeCollection: V,
      activeWorkspaceCollections: c2,
      activeRequest: te2,
      activeWorkspaceRequests: E,
      activeWorkspace: oe
    } = z(), { findRequestParents: se, events: R, requestMutators: L2, requests: x2 } = _3, { handleDragEnd: ae, isDroppable: re } = F2(
      oe,
      _3
    ), { replace: N2 } = useRouter(), le = () => {
      R.commandPalette.emit({
        commandName: "Import from OpenAPI/Swagger/Postman/cURL"
      });
    }, O2 = useId(), { toast: ne } = i(), k5 = reactive({ open: false }), f4 = ref(false);
    watch(
      te2,
      (s3) => {
        s3 && se(s3).forEach(
          (e) => Z2(e, true)
        );
      },
      { immediate: true }
    );
    const {
      searchText: p3,
      searchResultsWithPlaceholderResults: w2,
      selectedSearchResult: I2,
      onSearchResultClick: ie,
      fuseSearch: ue,
      searchInputRef: z2,
      searchResultRefs: ce2,
      navigateSearchResults: B3,
      selectSearchResult: de
    } = Q(), F3 = ref(), W3 = (s3) => {
      var e;
      s3 && (s3.toggleSidebar && ee2(), s3.focusRequestSearch && ((e = z2.value) == null || e.focus()));
    };
    onMounted(() => R.hotKeys.on(W3)), onBeforeUnmount(() => {
      R.hotKeys.off(W3);
    });
    const me = (s3) => {
      if (s3 != null && s3.documentUrl) {
        s3.watchMode = !s3.watchMode;
        const e = c2.value.find(
          (o3) => o3.uid === s3.entity.uid
        );
        e && (e.watchMode = s3.watchMode);
      }
    };
    watch(
      () => c2.value.map(
        (s3) => s3.watchMode
      ),
      (s3, e) => {
        s3.forEach((o3, a4) => {
          var l2, v3, A;
          if (n2 !== "modal" && o3 !== e[a4] && ((v3 = (l2 = c2.value[a4]) == null ? void 0 : l2.info) == null ? void 0 : v3.title) !== "Drafts" && c2.value[a4]) {
            const H2 = c2.value[a4];
            if (!H2)
              return;
            const be = `${(A = H2.info) == null ? void 0 : A.title}: Watch Mode ${o3 ? "enabled" : "disabled"}`;
            ne(be, "info");
          }
        });
      }
    );
    const fe = computed(() => {
      var v3;
      const s3 = w2.value;
      if (!s3.length)
        return "No results found";
      const e = (v3 = s3[I2.value]) == null ? void 0 : v3.item;
      if (!e)
        return "No result selected";
      const o3 = p3.value.length ? `${s3.length} result${s3.length === 1 ? "" : "s"} found, ` : "", a4 = `, HTTP Method ${e.httpVerb}, Path ${e.path}`, l2 = `${e.title} ${a4}`;
      return `${o3}Selected: ${l2}`;
    }), pe = () => {
      const s3 = c2.value.find(
        (o3) => {
          var a4;
          return ((a4 = o3.info) == null ? void 0 : a4.title) === "Drafts";
        }
      );
      if (s3 && s3.requests.forEach((o3) => {
        x2[o3] && L2.delete(x2[o3], s3.uid);
      }), E.value.length) {
        const o3 = c2.value[0], a4 = o3 == null ? void 0 : o3.requests[0];
        a4 && N2({
          name: "request",
          params: {
            [a2.Request]: a4
          }
        });
      } else {
        const { request: o3 } = k2();
        s3 && (L2.add(o3, s3.uid), N2({
          name: "request",
          params: {
            [a2.Request]: o3.uid
          }
        }));
      }
    };
    watch(f4, (s3) => {
      s3 || (p3.value = "");
    });
    const y = computed(
      () => q2(
        c2.value,
        E.value,
        x2
      )
    ), ve = computed(() => n2 === "modal" && V.value ? [V.value] : c2.value);
    function he(s3) {
      !p3.value && s3.relatedTarget !== F3.value && (f4.value = false);
    }
    return (s3, e) => (openBlock(), createElementBlock(Fragment, null, [
      withDirectives(createVNode(unref(m8), {
        class: normalizeClass([unref(P2) ? "sidebar-active-width" : ""])
      }, createSlots({
        content: withCtx(() => [
          createBaseVNode("div", Xe, [
            createBaseVNode("div", {
              class: normalizeClass(["size-8", { "xl:hidden": unref(n2) !== "modal" }])
            }, null, 2),
            unref(n2) !== "modal" ? (openBlock(), createBlock(unref(ce), { key: 0 })) : createCommentVNode("", true),
            unref(n2) !== "modal" ? (openBlock(), createElementBlock("span", Ye, " / ")) : createCommentVNode("", true),
            unref(n2) !== "modal" ? (openBlock(), createBlock(te, { key: 2 })) : createCommentVNode("", true),
            createBaseVNode("button", {
              ref_key: "searchToggleRef",
              ref: F3,
              "aria-pressed": f4.value,
              class: "ml-auto",
              type: "button",
              onClick: e[0] || (e[0] = (o3) => f4.value = !f4.value)
            }, [
              createBaseVNode("span", et, toDisplayString(f4.value ? "Hide" : "Show") + " search ", 1),
              createVNode(unref(m), {
                class: "text-c-3 hover:bg-b-2 max-h-8 max-w-8 rounded-lg p-1.75 text-sm",
                icon: "Search"
              })
            ], 8, Ze)
          ]),
          f4.value ? (openBlock(), createElementBlock("div", tt, [
            createVNode(unref(D2), {
              ref_key: "searchInputRef",
              ref: z2,
              modelValue: unref(p3),
              "onUpdate:modelValue": e[1] || (e[1] = (o3) => isRef(p3) ? p3.value = o3 : null),
              autofocus: "",
              "aria-controls": unref(O2),
              label: fe.value,
              onInput: unref(ue),
              onKeydown: [
                e[2] || (e[2] = withKeys(withModifiers((o3) => unref(B3)("down"), ["stop"]), ["down"])),
                e[3] || (e[3] = withKeys(withModifiers((o3) => unref(de)(), ["stop"]), ["enter"])),
                e[4] || (e[4] = withKeys(withModifiers((o3) => unref(B3)("up"), ["stop"]), ["up"]))
              ],
              onBlur: he
            }, null, 8, ["modelValue", "aria-controls", "label", "onInput"])
          ])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass(["gap-1/2 flex flex-1 flex-col overflow-visible overflow-y-auto px-3 pt-0 pb-3", [
              {
                "pb-14": unref(n2) !== "modal"
              },
              {
                "h-[calc(100%-273.5px)]": y.value
              }
            ]]),
            onDragenter: e[7] || (e[7] = withModifiers(() => {
            }, ["prevent"])),
            onDragover: e[8] || (e[8] = withModifiers(() => {
            }, ["prevent"]))
          }, [
            unref(p3) ? (openBlock(), createBlock(unref(x), {
              key: 0,
              id: unref(O2),
              "aria-label": "Search Results",
              class: "gap-px",
              noResults: !unref(w2).length
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(w2), (o3, a4) => (openBlock(), createBlock(unref(B2), {
                  id: `#search-input-${o3.item.id}`,
                  key: o3.refIndex,
                  ref_for: true,
                  ref: (l2) => unref(ce2)[a4] = l2,
                  selected: unref(I2) === a4,
                  class: "px-2",
                  href: o3.item.link,
                  onClick: withModifiers((l2) => unref(ie)(o3), ["prevent"]),
                  onFocus: (l2) => I2.value = a4
                }, {
                  addon: withCtx(() => [
                    e[10] || (e[10] = createBaseVNode("span", { class: "sr-only" }, "HTTP Method:", -1)),
                    createVNode(m6, {
                      class: "font-bold",
                      method: o3.item.httpVerb ?? "get"
                    }, null, 8, ["method"])
                  ]),
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(o3.item.title) + " ", 1)
                  ]),
                  _: 2
                }, 1032, ["id", "selected", "href", "onClick", "onFocus"]))), 128))
              ]),
              _: 1
            }, 8, ["id", "noResults"])) : (openBlock(), createElementBlock("nav", ot, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(ve.value, (o3) => {
                var a4;
                return openBlock(), createBlock(d2, {
                  key: o3.uid,
                  isDraggable: unref(n2) !== "modal" && ((a4 = o3.info) == null ? void 0 : a4.title) !== "Drafts",
                  isDroppable: unref(re),
                  menuItem: k5,
                  parentUids: [],
                  uid: o3.uid,
                  onNewTab: e[5] || (e[5] = (l2, v3) => X2("newTab", { name: l2, uid: v3 })),
                  onOnDragEnd: unref(ae),
                  onOpenMenu: e[6] || (e[6] = (l2) => Object.assign(k5, l2))
                }, {
                  leftIcon: withCtx(() => {
                    var l2;
                    return [
                      ((l2 = o3.info) == null ? void 0 : l2.title) === "Drafts" ? (openBlock(), createBlock(unref(m), {
                        key: 0,
                        class: "text-sidebar-c-2 group-hover:hidden",
                        icon: "Scribble",
                        thickness: "2.25"
                      })) : (openBlock(), createBlock(unref(d), {
                        key: 1,
                        class: "text-sidebar-c-2 size-3.5 min-w-3.5 stroke-2 group-hover:hidden",
                        src: o3["x-scalar-icon"] || "interface-content-folder"
                      }, null, 8, ["src"])),
                      createBaseVNode("div", {
                        class: normalizeClass({
                          "rotate-90": unref(Y)[o3.uid]
                        })
                      }, [
                        createVNode(unref(m), {
                          class: "text-c-3 hover:text-c-1 hidden text-sm group-hover:block",
                          icon: "ChevronRight",
                          size: "md"
                        })
                      ], 2)
                    ];
                  }),
                  _: 2
                }, 1032, ["isDraggable", "isDroppable", "menuItem", "uid", "onOnDragEnd"]);
              }), 128))
            ]))
          ], 34)
        ]),
        button: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass({
              "empty-sidebar-item": y.value
            })
          }, [
            y.value ? (openBlock(), createElementBlock("div", st, [
              createBaseVNode("div", at, [
                createVNode(i2, {
                  art: unref(_),
                  class: "rabbitsit font-bold"
                }, null, 8, ["art"]),
                createVNode(i2, {
                  art: unref(_2),
                  class: "rabbitjump absolute top-0 left-0 font-bold"
                }, null, 8, ["art"])
              ]),
              e[11] || (e[11] = createBaseVNode("div", { class: "mt-2 mb-2 text-center text-sm text-balance" }, [
                createBaseVNode("b", { class: "font-medium" }, "Let's Get Started"),
                createBaseVNode("p", { class: "mt-2" }, " Create request, folder, collection or import from OpenAPI/Postman ")
              ], -1))
            ])) : createCommentVNode("", true),
            unref(n2) !== "modal" ? (openBlock(), createBlock(unref($), {
              key: 1,
              class: normalizeClass(["mb-1.5 hidden h-fit w-full p-1.5 opacity-0", {
                "flex opacity-100": y.value
              }]),
              onClick: le
            }, {
              default: withCtx(() => e[12] || (e[12] = [
                createTextVNode(" Import Collection ")
              ])),
              _: 1,
              __: [12]
            }, 8, ["class"])) : createCommentVNode("", true),
            unref(n2) !== "modal" ? (openBlock(), createBlock(g, {
              key: 2,
              click: unref(R).commandPalette.emit,
              hotkey: "K"
            }, {
              title: withCtx(() => e[13] || (e[13] = [
                createTextVNode(" Add Item ")
              ])),
              _: 1
            }, 8, ["click"])) : createCommentVNode("", true)
          ], 2)
        ]),
        _: 2
      }, [
        unref(n2) !== "modal" ? {
          name: "header",
          fn: withCtx(() => []),
          key: "0"
        } : void 0
      ]), 1032, ["class"]), [
        [vShow, unref(P2)]
      ]),
      unref(n2) !== "modal" && k5 ? (openBlock(), createBlock(a3, {
        key: 0,
        menuItem: k5,
        onClearDrafts: pe,
        onCloseMenu: e[9] || (e[9] = (o3) => k5.open = false),
        onToggleWatchMode: me
      }, null, 8, ["menuItem"])) : createCommentVNode("", true)
    ], 64));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSidebar.vue.js
var c = s(Mt, [["__scopeId", "data-v-bca9c474"]]);

// node_modules/@scalar/api-client/dist/libs/normalize-headers.js
var f = (a4, t2 = false) => {
  var c2, l2;
  const o3 = Object.fromEntries(a4);
  t2 && [
    "Access-Control-Allow-Credentials",
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Methods",
    "Access-Control-Allow-Origin",
    "Access-Control-Expose-Headers"
  ].map((s3) => s3.toLowerCase()).forEach((s3) => delete o3[s3]);
  const r2 = Object.keys(o3).find((e) => e.toLowerCase() === "x-scalar-modified-headers"), i5 = r2 ? ((l2 = (c2 = o3[r2]) == null ? void 0 : c2.toString().split(", ")) == null ? void 0 : l2.map((e) => e.toLowerCase())) ?? [] : [];
  return Object.keys(o3).forEach((e) => {
    i5.includes(e.toLowerCase()) && delete o3[e];
  }), r2 && delete o3[r2], Object.keys(o3).forEach((e) => {
    const s3 = /^x-scalar-original-/i;
    if (s3.test(e)) {
      const n2 = e.replace(s3, "");
      o3[e] && (o3[n2] = o3[e], delete o3[e]);
    }
  }), Object.keys(o3).forEach((e) => {
    const s3 = d3(e);
    e !== s3 && o3[e] && (o3[s3] = o3[e], delete o3[e]);
  }), Object.fromEntries(Object.entries(o3).sort(([e], [s3]) => e.localeCompare(s3)));
};
var d3 = (a4) => a4.split("-").map((t2) => t2.charAt(0).toUpperCase() + t2.toLowerCase().slice(1)).join("-");

// node_modules/@scalar/api-client/dist/libs/send-request/create-fetch-body.js
function v2(f4, o3, t2) {
  var r2, i5, n2;
  if (!canMethodHaveBody(f4))
    return { body: void 0, contentType: void 0 };
  if (o3.body.activeBody === "formData" && o3.body.formData) {
    const y = o3.body.formData.encoding === "form-data" ? "multipart/form-data" : "application/x-www-form-urlencoded", d4 = o3.body.formData.encoding === "form-data" ? new FormData() : new URLSearchParams();
    return o3.body.formData.value.forEach((a4) => {
      !a4.enabled || !a4.key || (a4.file && d4 instanceof FormData ? d4.append(a4.key, a4.file, a4.file.name) : a4.value !== void 0 && d4.append(a4.key, p2(a4.value, t2)));
    }), { body: d4, contentType: y };
  }
  return o3.body.activeBody === "raw" ? {
    body: p2(((r2 = o3.body.raw) == null ? void 0 : r2.value) ?? "", t2),
    contentType: (i5 = o3.body.raw) == null ? void 0 : i5.encoding
  } : o3.body.activeBody === "binary" ? {
    body: o3.body.binary,
    contentType: (n2 = o3.body.binary) == null ? void 0 : n2.type
  } : {
    body: void 0,
    contentType: void 0
  };
}

// node_modules/@scalar/api-client/dist/libs/send-request/create-fetch-headers.js
function l(t2, o3) {
  const a4 = {};
  return t2.parameters.headers.forEach((e) => {
    const r2 = e.key.trim().toLowerCase();
    e.enabled && (r2 !== "content-type" || e.value !== "multipart/form-data") && (a4[r2] = p2(e.value, o3));
  }), a4;
}

// node_modules/@scalar/api-client/dist/libs/send-request/create-fetch-query-params.js
function f2(l2, o3, n2) {
  const r2 = new URLSearchParams(), i5 = ((n2 == null ? void 0 : n2.parameters) ?? []).reduce(
    (e, a4) => (a4.in === "query" && (e[a4.name] = a4), e),
    {}
  );
  return l2.parameters.query.forEach((e) => {
    if (!e.enabled) return;
    const a4 = i5[e.key];
    switch (e.type) {
      case "array": {
        const t2 = p2(e.value ?? "", o3).split(/,\ ?/);
        if ((a4 == null ? void 0 : a4.explode) === false) {
          const c2 = t2.join(",");
          r2.append(e.key, c2);
        } else
          t2.forEach((c2) => {
            r2.append(e.key, c2.trim());
          });
        break;
      }
      default: {
        const t2 = p2(e.value ?? "", o3);
        r2.append(e.key, t2.trim());
        break;
      }
    }
  }), r2;
}

// node_modules/@scalar/api-client/dist/libs/send-request/decode-buffer.js
var import_whatwg_mimetype = __toESM(require_mime_type(), 1);
function m10(r2, t2) {
  const e = new import_whatwg_mimetype.default(t2);
  return o(e.essence) ? new TextDecoder(e.parameters.get("charset")).decode(r2) : new Blob([r2], { type: e.essence });
}

// node_modules/@scalar/api-client/dist/libs/electron.js
var n = () => typeof window < "u" && "electron" in window;

// node_modules/@scalar/api-client/dist/libs/send-request/create-request-operation.js
var Ce = ({
  environment: E,
  example: a4,
  globalCookies: L2,
  proxyUrl: u5,
  request: i5,
  securitySchemes: z2,
  selectedSecuritySchemeUids: B3 = [],
  server: d4,
  status: o3,
  pluginManager: f4
}) => {
  try {
    const t2 = E ?? {}, w2 = new AbortController(), R = a4.parameters.path.reduce((e, s3) => (s3.enabled && (e[s3.key] = p2(s3.value, t2)), e), {}), F3 = p2((d4 == null ? void 0 : d4.url) ?? "", t2), p3 = p2(p2(i5.path, t2), R);
    let n2 = F3 || p3;
    if (!n2)
      throw r.URL_EMPTY;
    Object.entries((d4 == null ? void 0 : d4.variables) ?? {}).forEach(([e, s3]) => {
      n2 = p2(n2, {
        [e]: R[e] || s3.default
      });
    });
    const _3 = f2(a4, t2, i5), O2 = l(a4, t2), { body: W3 } = v2(i5.method, a4, t2), { cookieParams: x2 } = C2({
      example: a4,
      env: t2,
      globalCookies: L2,
      serverUrl: n2,
      proxyUrl: u5
    }), A = B3.flat().map((e) => z2[e]).filter(isDefined), S = $4(A, t2), c2 = { ...Object.entries(S.headers).reduce(
      (e, [s3, y]) => (e[s3.toLowerCase()] = y, e),
      {}
    ), ...O2 }, X2 = [...x2, ...S.cookies], j = new URLSearchParams([..._3, ...S.urlParams]);
    n() && c2["user-agent"] && (c2["X-Scalar-User-Agent"] = c2["user-agent"]), n2 = mergeUrls(n2, p3, j);
    const k5 = p2(D3(X2, c2.Cookie), t2);
    k5 && (n() || shouldUseProxy(u5, n2) ? (console.warn(
      "We're using a `X-Scalar-Cookie` custom header to the request. The proxy will forward this as a `Cookie` header. We do this to avoid the browser omitting the `Cookie` header for cross-origin requests for security reasons."
    ), c2["X-Scalar-Cookie"] = k5) : (console.warn(
      `We're trying to add a Cookie header, but browsers often omit them for cross-origin requests for various security reasons. If it's not working, that's probably why. Here are the requirements for it to work:

          - The browser URL must be on the same domain as the server URL.
          - The connection must be made over HTTPS.
          `
    ), c2.Cookie = k5));
    const I2 = redirectToProxy(u5, n2), b = new Request(I2, {
      method: i5.method.toUpperCase(),
      body: W3 ?? null,
      headers: c2
    });
    return [
      null,
      {
        request: b,
        sendRequest: async () => {
          var s3, y, C4;
          o3 == null || o3.emit("start"), f4 && f4.executeHook("onBeforeRequest", { request: b });
          const e = Date.now();
          try {
            const r2 = await fetch(b, {
              signal: w2.signal
            }), Q3 = (s3 = r2.headers.get("content-type")) == null ? void 0 : s3.startsWith("text/event-stream");
            o3 == null || o3.emit("stop");
            const V = Date.now() - e, v3 = r2.clone(), g4 = f(r2.headers, shouldUseProxy(u5, n2)), K2 = r2.headers.get("content-type") ?? "text/plain;charset=UTF-8", T = await v3.arrayBuffer(), Y = m10(T, K2), m11 = r2.clone(), G3 = m11.statusText || ((y = httpStatusCodes[m11.status]) == null ? void 0 : y.name) || "", J3 = [204, 205, 304].includes(m11.status), l2 = new Response(J3 ? null : m11.body, {
              status: m11.status,
              statusText: G3,
              headers: m11.headers
            });
            f4 && f4.executeHook("onResponseReceived", { response: l2, operation: i5 });
            const H2 = "getSetCookie" in l2.headers && typeof l2.headers.getSetCookie == "function" ? l2.headers.getSetCookie() : [];
            return Q3 && r2.body ? [
              null,
              {
                timestamp: Date.now(),
                request: a4,
                response: {
                  ...l2,
                  headers: g4,
                  cookieHeaderKeys: H2,
                  reader: (C4 = r2.body) == null ? void 0 : C4.getReader(),
                  duration: V,
                  method: i5.method,
                  path: p3
                }
              }
            ] : [
              null,
              {
                timestamp: Date.now(),
                request: a4,
                response: {
                  ...r2,
                  headers: g4,
                  cookieHeaderKeys: H2,
                  data: Y,
                  size: T.byteLength,
                  duration: Date.now() - e,
                  method: i5.method,
                  status: r2.status,
                  path: p3
                }
              }
            ];
          } catch (r2) {
            return o3 == null || o3.emit("abort"), [t(r2, r.REQUEST_FAILED), null];
          }
        },
        controller: w2
      }
    ];
  } catch (t2) {
    return console.error(t2), o3 == null || o3.emit("abort"), [t(t2), null];
  }
};

// node_modules/@scalar/api-client/dist/views/Request/RequestRoot.vue2.js
var ye = { class: "flex h-full" };
var qe = { class: "flex h-full flex-1 flex-col" };
var Me2 = defineComponent({
  __name: "RequestRoot",
  emits: ["newTab"],
  setup(xe) {
    const P2 = je(), { toast: p3 } = i(), { layout: v3 } = s2(), D4 = m5(), { isSidebarOpen: s3 } = m4(), {
      activeCollection: l2,
      activeExample: n2,
      activeEnvironment: S,
      activeRequest: u5,
      activeWorkspace: R,
      activeServer: M
    } = z(), { cookies: z2, requestHistory: I2, showSidebar: y, securitySchemes: J3, events: i5 } = P2, W3 = i3(), j = ref(), q3 = ref(), f4 = ref(/* @__PURE__ */ new Set()), x2 = ref(null), b = computed(
      () => {
        var e, t2, o3;
        return ((e = l2.value) != null && e.useCollectionSecurity ? (t2 = l2.value) == null ? void 0 : t2.selectedSecuritySchemeUids : (o3 = u5.value) == null ? void 0 : o3.selectedSecuritySchemeUids) ?? [];
      }
    ), h2 = async () => {
      var N2, U, _3, w2, c2, O2;
      if (!u5.value || !n2.value || !l2.value)
        return;
      f4.value = i4(n2.value);
      const e = typeof S.value == "object" ? S.value.value : "{}", t2 = safeJSON.parse(e);
      t2.error && console.error("INVALID ENVIRONMENT!");
      const o3 = t2.error || typeof t2.data != "object" ? {} : t2.data ?? {}, a4 = ((N2 = R.value) == null ? void 0 : N2.cookies.map((Q3) => z2[Q3]).filter(isDefined)) ?? [], H2 = ((_3 = (U = l2.value) == null ? void 0 : U.info) == null ? void 0 : _3.title) === "Drafts" ? void 0 : M.value, [k5, E] = Ce({
        request: u5.value,
        example: n2.value,
        selectedSecuritySchemeUids: b.value,
        proxyUrl: ((w2 = R.value) == null ? void 0 : w2.proxyUrl) ?? "",
        environment: o3,
        globalCookies: a4,
        status: i5.requestStatus,
        securitySchemes: J3,
        server: H2,
        pluginManager: W3
      });
      if ((O2 = (c2 = D4.value) == null ? void 0 : c2.onRequestSent) == null || O2.call(c2, u5.value.path ?? ""), k5) {
        p3(k5.message, "error");
        return;
      }
      q3.value = E.controller;
      const [g4, C4] = await E.sendRequest();
      x2.value = C4, g4 ? p3(g4.message, "error") : I2.push($6(C4));
    }, L2 = async () => {
      var e;
      return (e = q3.value) == null ? void 0 : e.abort(r.REQUEST_ABORTED);
    };
    onMounted(() => {
      i5.executeRequest.on(h2), i5.cancelRequest.on(L2);
    }), J2(), onBeforeUnmount(() => i5.executeRequest.off(h2)), watch(
      () => {
        var e;
        return (e = n2.value) == null ? void 0 : e.parameters;
      },
      () => {
        f4.value.clear();
      },
      { deep: true }
    );
    const $6 = (e) => {
      var t2;
      try {
        return structuredClone(e);
      } catch {
        const a4 = { ...e };
        return (t2 = e.response) != null && t2.data && (e.response.data instanceof Blob || e.response.data instanceof ArrayBuffer ? a4.response.data = e.response.data : a4.response.data = JSON.parse(JSON.stringify(e.response.data))), a4;
      }
    };
    return (e, t2) => (openBlock(), createElementBlock("div", {
      ref_key: "element",
      ref: j,
      class: normalizeClass(["bg-b-1 relative z-0 flex h-full flex-1 flex-col overflow-hidden pt-0", {
        "!mr-0 !mb-0 !border-0": unref(v3) === "modal"
      }])
    }, [
      unref(y) ? (openBlock(), createBlock(k3, {
        key: 0,
        modelValue: unref(s3),
        "onUpdate:modelValue": t2[0] || (t2[0] = (o3) => isRef(s3) ? s3.value = o3 : null),
        class: normalizeClass(["absolute top-2 left-3 z-50", [
          { hidden: unref(s3) },
          { "xl:!flex": !unref(s3) },
          { "!flex": unref(v3) === "modal" }
        ]])
      }, null, 8, ["modelValue", "class"])) : createCommentVNode("", true),
      createBaseVNode("div", ye, [
        unref(y) ? (openBlock(), createBlock(c, {
          key: 0,
          onNewTab: t2[1] || (t2[1] = (o3) => e.$emit("newTab", o3))
        })) : createCommentVNode("", true),
        createBaseVNode("div", qe, [
          createVNode(unref(RouterView), {
            invalidParams: f4.value,
            selectedSecuritySchemeUids: b.value,
            requestResult: x2.value
          }, null, 8, ["invalidParams", "selectedSecuritySchemeUids", "requestResult"])
        ])
      ])
    ], 2));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestRoot.vue.js
var f3 = s(Me2, [["__scopeId", "data-v-8a88f90a"]]);
export {
  f3 as default
};
//# sourceMappingURL=RequestRoot.vue-ZPK2JXVQ.js.map
