import {
  f as f2
} from "./chunk-ZM6PV6NT.js";
import {
  _,
  d,
  f
} from "./chunk-HG4QS5B7.js";
import {
  s as s2
} from "./chunk-BGMGCHHM.js";
import {
  CLIENT_LS_KEYS,
  je,
  pkceOptions,
  s,
  safeLocalStorage
} from "./chunk-V4XIGGIS.js";
import {
  $,
  A,
  B2 as B,
  C,
  E3 as E,
  Fragment,
  N,
  Q,
  S,
  V,
  W,
  capitalize,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  cva,
  defineComponent,
  i,
  isDefined,
  m3 as m,
  m5 as m2,
  mergeProps,
  normalizeClass,
  onMounted,
  openBlock,
  ref,
  renderList,
  renderSlot,
  shouldUseProxy,
  toDisplayString,
  u,
  unref,
  useId,
  watch,
  withCtx,
  withModifiers,
  x
} from "./chunk-BCXGVGOY.js";

// node_modules/@scalar/api-client/dist/components/ViewLayout/ViewLayoutCollapse.vue.js
var D = ["aria-labelledby"];
var N2 = { class: "text-c-1 m-0 flex flex-1 items-center gap-1.5 leading-[20px]" };
var I = ["id"];
var S2 = {
  key: 0,
  class: "sr-only"
};
var z = {
  key: 0,
  class: "bg-b-2 text-c-2 inline-flex h-5 w-5 items-center justify-center rounded-full border text-xs font-semibold"
};
var E2 = { class: "sr-only" };
var P = {
  key: 0,
  class: "ui-not-open:hidden flex items-center gap-2 pr-0.75"
};
var T = defineComponent({
  __name: "ViewLayoutCollapse",
  props: {
    defaultOpen: { type: Boolean, default: true },
    itemCount: { default: 0 },
    layout: { default: "client" }
  },
  emits: ["update:modelValue"],
  setup(y2, { emit: h }) {
    const c = h, p = useId(), a = ref(y2.defaultOpen), g2 = () => {
      a.value = !a.value, c("update:modelValue", a.value);
    };
    return onMounted(() => {
      c("update:modelValue", a.value);
    }), (e, j) => (openBlock(), createBlock(unref(N), {
      as: "div",
      class: normalizeClass(["group/collapse focus-within:text-c-1 text-c-2 last:ui-open:border-b-0 border-b", { "last-of-type:first-of-type:border-b-0": e.layout === "reference" }]),
      defaultOpen: e.defaultOpen,
      static: e.layout === "reference" ? true : void 0,
      onClick: g2
    }, {
      default: withCtx(({ open: o2 }) => [
        createBaseVNode("section", {
          "aria-labelledby": unref(p),
          class: "contents"
        }, [
          createBaseVNode("div", {
            class: normalizeClass(["bg-b-2 flex items-center", e.layout === "reference" && "rounded-t-lg border border-b-0"])
          }, [
            createVNode(unref(Q), {
              class: normalizeClass([
                "hover:text-c-1 group box-content flex max-h-8 flex-1 items-center gap-2.5 overflow-hidden px-1 py-1.5 text-base font-medium outline-none md:px-1.5 xl:pr-0.5 xl:pl-2",
                { "!pl-3": e.layout === "reference" }
              ]),
              disabled: e.layout === "reference"
            }, {
              default: withCtx(() => [
                e.layout !== "reference" ? (openBlock(), createBlock(unref(m), {
                  key: 0,
                  class: normalizeClass([
                    "text-c-3 group-hover:text-c-1 ui-open:rotate-90 ui-not-open:rotate-0 rounded-px outline-offset-2 group-focus-visible:outline"
                  ]),
                  icon: "ChevronRight",
                  size: "md"
                })) : createCommentVNode("", true),
                createBaseVNode("h2", N2, [
                  createBaseVNode("span", {
                    id: unref(p),
                    class: "contents"
                  }, [
                    renderSlot(e.$slots, "title", { open: o2 }),
                    o2 ? createCommentVNode("", true) : (openBlock(), createElementBlock("span", S2, " (Collapsed) "))
                  ], 8, I),
                  !o2 && e.itemCount ? (openBlock(), createElementBlock("span", z, [
                    createTextVNode(toDisplayString(e.itemCount) + " ", 1),
                    createBaseVNode("span", E2, "Item" + toDisplayString(e.itemCount === 1 ? "" : "s"), 1)
                  ])) : createCommentVNode("", true)
                ])
              ]),
              _: 2
            }, 1032, ["class", "disabled"]),
            e.$slots.actions ? (openBlock(), createElementBlock("div", P, [
              renderSlot(e.$slots, "actions", { open: o2 })
            ])) : createCommentVNode("", true)
          ], 2),
          createVNode(unref(V), mergeProps(e.$attrs, { class: "diclosure-panel h-full max-h-fit rounded-b" }), {
            default: withCtx(() => [
              renderSlot(e.$slots, "default", { open: o2 })
            ]),
            _: 2
          }, 1040)
        ], 8, D)
      ]),
      _: 3
    }, 8, ["class", "defaultOpen", "static"]));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuth/DeleteRequestAuthModal.vue.js
var k = { class: "text-c-2 mb-4 text-sm leading-normal" };
var C2 = { class: "flex justify-between gap-2" };
var B2 = defineComponent({
  __name: "DeleteRequestAuthModal",
  props: {
    state: {},
    scheme: {}
  },
  emits: ["close", "delete"],
  setup(p, { emit: f5 }) {
    const l = p, c = f5, { securitySchemeMutators: h } = je(), x2 = () => {
      var e;
      (e = l.scheme) != null && e.id && h.delete(l.scheme.id), c("delete");
    };
    return (e, t2) => (openBlock(), createBlock(unref(m2), {
      size: "xxs",
      state: e.state,
      title: "Delete Security Scheme"
    }, {
      default: withCtx(() => {
        var a;
        return [
          createBaseVNode("p", k, " This cannot be undone. You're about to delete the " + toDisplayString((a = e.scheme) == null ? void 0 : a.label) + " security scheme from the collection. ", 1),
          createBaseVNode("div", C2, [
            createVNode(unref($), {
              class: "flex h-8 cursor-pointer items-center gap-1.5 px-3 shadow-none focus:outline-none",
              type: "button",
              variant: "outlined",
              onClick: t2[0] || (t2[0] = (o2) => c("close"))
            }, {
              default: withCtx(() => t2[1] || (t2[1] = [
                createTextVNode(" Cancel ")
              ])),
              _: 1,
              __: [1]
            }),
            createVNode(unref($), {
              class: "flex h-8 cursor-pointer items-center gap-1.5 px-3 shadow-none focus:outline-none",
              type: "submit",
              onClick: x2
            }, {
              default: withCtx(() => {
                var o2;
                return [
                  createTextVNode(" Delete " + toDisplayString((o2 = e.scheme) == null ? void 0 : o2.label), 1)
                ];
              }),
              _: 1
            })
          ])
        ];
      }),
      _: 1
    }, 8, ["state"]));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSection/helpers/update-scheme.js
var g = (o2, r2, n, { securitySchemeMutators: a, securitySchemes: S3 }, f5 = false) => {
  var c;
  if (a.edit(o2, r2, n), !!f5)
    try {
      const e = JSON.parse(safeLocalStorage().getItem(CLIENT_LS_KEYS.AUTH) ?? "{}"), t2 = S3[o2];
      if (e && (t2 != null && t2.nameKey)) {
        const i3 = e[c = t2.nameKey] || (e[c] = {});
        i3[r2] = n, safeLocalStorage().setItem(CLIENT_LS_KEYS.AUTH, JSON.stringify(e));
      }
    } catch (e) {
      console.error(e);
    }
};

// node_modules/@scalar/api-client/dist/components/DataTable/DataTableCheckbox.vue.js
var f3 = ["checked", "disabled"];
var y = defineComponent({
  __name: "DataTableCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean },
    align: { default: "center" }
  },
  emits: ["update:modelValue"],
  setup(h) {
    const s3 = cva({
      base: "w-8 h-8 flex items-center justify-center text-border peer-checked:text-c-1 pointer-events-none absolute",
      variants: {
        align: {
          left: "left-0",
          center: "centered"
        }
      }
    });
    return (e, o2) => (openBlock(), createBlock(f, { class: "group/cell relative flex min-w-8" }, {
      default: withCtx(() => [
        createBaseVNode("input", {
          checked: e.modelValue,
          class: "peer absolute inset-0 cursor-pointer opacity-0 disabled:cursor-default",
          disabled: !!e.disabled,
          type: "checkbox",
          onChange: o2[0] || (o2[0] = (r2) => e.$emit("update:modelValue", r2.target.checked))
        }, null, 40, f3),
        createBaseVNode("div", {
          class: normalizeClass(unref(s3)({ align: e.align }))
        }, [
          createBaseVNode("div", {
            class: normalizeClass([
              "absolute m-auto size-3/4 rounded border-[1px] opacity-0",
              !e.disabled && "group-has-[:focus-visible]/cell:border-c-accent group-hover/cell:opacity-100 group-has-[:focus-visible]/cell:opacity-100"
            ])
          }, null, 2),
          createVNode(unref(m), {
            icon: "Checkmark",
            size: "xs",
            thickness: "2.5"
          })
        ], 2)
      ]),
      _: 1
    }));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuth/OAuthScopesInput.vue.js
var L = { class: "flex h-fit w-full" };
var M = { class: "flex-1" };
var P2 = { class: "flex items-center gap-1.75" };
var U = {
  class: "grid auto-rows-auto",
  style: { gridTemplateColumns: "1fr auto" }
};
var _2 = { key: 0 };
var q = { class: "font-code text-xs" };
var X = defineComponent({
  __name: "OAuthScopesInput",
  props: {
    flow: {},
    updateScheme: { type: Function }
  },
  setup(l) {
    const D4 = computed(
      () => {
        var e;
        return Object.entries(((e = l.flow) == null ? void 0 : e.scopes) ?? {}).map(([t2, s3]) => ({
          id: t2,
          label: t2,
          description: s3
        }));
      }
    ), d3 = computed(() => {
      var e;
      return ((e = l.flow) == null ? void 0 : e.selectedScopes) || [];
    });
    function V2(e, t2) {
      t2 ? l.updateScheme(`flows.${l.flow.type}.selectedScopes`, [
        ...d3.value,
        e
      ]) : l.updateScheme(
        `flows.${l.flow.type}.selectedScopes`,
        d3.value.filter((s3) => s3 !== e)
      );
    }
    const v2 = computed(
      () => {
        var e, t2, s3;
        return ((t2 = (e = l.flow) == null ? void 0 : e.selectedScopes) == null ? void 0 : t2.length) === Object.keys(((s3 = l.flow) == null ? void 0 : s3.scopes) ?? {}).length;
      }
    ), $2 = () => {
      var e;
      l.updateScheme(
        `flows.${l.flow.type}.selectedScopes`,
        Object.keys(((e = l.flow) == null ? void 0 : e.scopes) ?? {})
      );
    }, A3 = () => {
      l.updateScheme(`flows.${l.flow.type}.selectedScopes`, []);
    };
    return (e, t2) => (openBlock(), createBlock(unref(f), { class: "h-auto !max-h-[initial] min-h-8 items-center" }, {
      default: withCtx(() => [
        createBaseVNode("div", L, [
          t2[2] || (t2[2] = createBaseVNode("div", { class: "text-c-1 h-full items-center" }, null, -1)),
          createVNode(unref(N), {
            as: "div",
            class: "bl flex w-full flex-col"
          }, {
            default: withCtx(() => {
              var s3, g2;
              return [
                createVNode(unref(Q), {
                  class: normalizeClass([
                    "group/scopes-accordion hover:text-c-1 flex h-auto min-h-8 cursor-pointer items-center gap-1.5 pr-2.25 pl-3 text-left",
                    (((g2 = (s3 = e.flow) == null ? void 0 : s3.selectedScopes) == null ? void 0 : g2.length) || 0) > 0 ? "text-c-1" : "text-c-3"
                  ])
                }, {
                  default: withCtx(({ open: n }) => {
                    var f5, u2, h;
                    return [
                      createBaseVNode("div", M, " Scopes Selected " + toDisplayString(((u2 = (f5 = e.flow) == null ? void 0 : f5.selectedScopes) == null ? void 0 : u2.length) || 0) + " / " + toDisplayString(Object.keys(((h = e.flow) == null ? void 0 : h.scopes) ?? {}).length || 0), 1),
                      createBaseVNode("div", P2, [
                        v2.value ? (openBlock(), createBlock(unref($), {
                          key: 0,
                          class: "pr-0.75 pl-1 transition-none",
                          size: "sm",
                          variant: "ghost",
                          onClick: withModifiers(A3, ["stop"])
                        }, {
                          default: withCtx(() => t2[0] || (t2[0] = [
                            createTextVNode(" Deselect All ")
                          ])),
                          _: 1,
                          __: [0]
                        })) : createCommentVNode("", true),
                        v2.value ? createCommentVNode("", true) : (openBlock(), createBlock(unref($), {
                          key: 1,
                          class: "pr-0.75 pl-1 transition-none",
                          size: "sm",
                          variant: "ghost",
                          onClick: withModifiers($2, ["stop"])
                        }, {
                          default: withCtx(() => t2[1] || (t2[1] = [
                            createTextVNode(" Select All ")
                          ])),
                          _: 1,
                          __: [1]
                        })),
                        createVNode(unref(m), {
                          class: "text-c-3 group-hover/scopes-accordion:text-c-2",
                          icon: n ? "ChevronDown" : "ChevronRight",
                          size: "md"
                        }, null, 8, ["icon"])
                      ])
                    ];
                  }),
                  _: 1
                }, 8, ["class"]),
                createVNode(unref(V), { as: "template" }, {
                  default: withCtx(() => [
                    createBaseVNode("table", U, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(D4.value, ({ id: n, label: f5, description: u2 }) => (openBlock(), createBlock(unref(d), {
                        key: n,
                        class: "text-c-2",
                        onClick: (h) => V2(n, !d3.value.includes(n))
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(f), { class: "hover:text-c-1 box-border !max-h-[initial] w-full cursor-pointer px-3 py-1.5" }, {
                            default: withCtx(() => [
                              u2 ? (openBlock(), createElementBlock("div", _2, [
                                createBaseVNode("span", q, toDisplayString(f5), 1),
                                createTextVNode(" – " + toDisplayString(u2), 1)
                              ])) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(y), {
                            modelValue: d3.value.includes(n),
                            "onUpdate:modelValue": () => {
                            }
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 2
                      }, 1032, ["onClick"]))), 128))
                    ])
                  ]),
                  _: 1
                })
              ];
            }),
            _: 1
          })
        ])
      ]),
      _: 1
    }));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuth/RequestAuthDataTableInput.vue.js
var v = ["for"];
var k2 = defineComponent({
  __name: "RequestAuthDataTableInput",
  props: {
    type: {},
    containerClass: {},
    required: { type: Boolean, default: false },
    modelValue: {},
    readOnly: { type: Boolean, default: false },
    environment: {},
    envVariables: {},
    workspace: {}
  },
  emits: ["update:modelValue", "inputFocus", "inputBlur", "selectVariable"],
  setup(i3, { emit: d3 }) {
    const e = i3, a = d3, l = useId();
    return (o2, n) => (openBlock(), createBlock(f2, mergeProps({
      id: unref(l),
      canAddCustomEnumValue: !e.readOnly,
      containerClass: e.containerClass
    }, o2.$attrs, {
      envVariables: e.envVariables,
      environment: e.environment,
      lineWrapping: "",
      modelValue: e.modelValue,
      readOnly: e.readOnly,
      required: e.required,
      type: e.type,
      workspace: e.workspace,
      onInputBlur: n[0] || (n[0] = (t2) => a("inputBlur")),
      onInputFocus: n[1] || (n[1] = (t2) => a("inputFocus")),
      onSelectVariable: n[2] || (n[2] = (t2) => a("selectVariable", t2)),
      "onUpdate:modelValue": n[3] || (n[3] = (t2) => a("update:modelValue", t2))
    }), {
      default: withCtx(() => [
        createBaseVNode("label", { for: unref(l) }, [
          renderSlot(o2.$slots, "default")
        ], 8, v)
      ]),
      icon: withCtx(() => [
        renderSlot(o2.$slots, "icon")
      ]),
      _: 3
    }, 16, ["id", "canAddCustomEnumValue", "containerClass", "envVariables", "environment", "modelValue", "readOnly", "required", "type", "workspace"]));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/libs/oauth2.js
var k3 = () => {
  const e = new Uint8Array(32);
  return crypto.getRandomValues(e), btoa(String.fromCharCode(...e)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
};
var C3 = async (e, l) => {
  if (l === "plain")
    return e;
  const n = new TextEncoder().encode(e), i3 = await crypto.subtle.digest("SHA-256", n);
  return btoa(String.fromCharCode(...new Uint8Array(i3))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};
var b = async (e, l, u2) => {
  try {
    if (!e)
      return [new Error("Flow not found"), null];
    const n = e.selectedScopes.join(" ");
    if (e.type === "clientCredentials" || e.type === "password")
      return P3(e, n, {
        proxyUrl: u2
      });
    const i3 = (Math.random() + 1).toString(36).substring(2, 10), t2 = new URL(e.authorizationUrl);
    let m3 = null;
    if (e.type === "implicit")
      t2.searchParams.set("response_type", "token");
    else if (e.type === "authorizationCode" && (t2.searchParams.set("response_type", "code"), e["x-usePkce"] !== "no")) {
      const r2 = k3(), s3 = await C3(r2, e["x-usePkce"]);
      m3 = {
        codeVerifier: r2,
        codeChallenge: s3,
        codeChallengeMethod: e["x-usePkce"] === "SHA-256" ? "S256" : "plain"
      }, t2.searchParams.set("code_challenge", s3), t2.searchParams.set("code_challenge_method", m3.codeChallengeMethod);
    }
    if (e["x-scalar-redirect-uri"].startsWith("/")) {
      const r2 = l.url || window.location.origin + window.location.pathname, s3 = new URL(e["x-scalar-redirect-uri"], r2).toString();
      t2.searchParams.set("redirect_uri", s3);
    } else
      t2.searchParams.set("redirect_uri", e["x-scalar-redirect-uri"]);
    e["x-scalar-security-query"] && Object.keys(e["x-scalar-security-query"]).forEach((r2) => {
      var c;
      const s3 = (c = e["x-scalar-security-query"]) == null ? void 0 : c[r2];
      s3 && t2.searchParams.set(r2, s3);
    }), t2.searchParams.set("client_id", e["x-scalar-client-id"]), t2.searchParams.set("state", i3), n && t2.searchParams.set("scope", n);
    const a = window.open(t2, "openAuth2Window", "left=100,top=100,width=800,height=600");
    return a ? new Promise((r2) => {
      const s3 = setInterval(() => {
        var _3;
        let c = null, d3 = null, h = null, g2 = null;
        try {
          const o2 = new URL(a.location.href).searchParams, x2 = e["x-tokenName"] || "access_token";
          c = o2.get(x2), d3 = o2.get("code"), h = o2.get("error"), g2 = o2.get("error_description");
          const y2 = new URLSearchParams(a.location.href.split("#")[1]);
          c || (c = y2.get(x2)), d3 || (d3 = y2.get("code")), h || (h = y2.get("error")), g2 || (g2 = y2.get("error_description"));
        } catch {
        }
        if (a.closed || c || d3 || h)
          if (clearInterval(s3), a.close(), h)
            r2([new Error(`OAuth error: ${h}${g2 ? ` (${g2})` : ""}`), null]);
          else if (c) {
            const o2 = (_3 = a.location.href.match(/state=([^&]*)/)) == null ? void 0 : _3[1];
            r2(o2 === i3 ? [null, c] : [new Error("State mismatch"), null]);
          } else d3 ? new URL(a.location.href).searchParams.get("state") === i3 ? P3(e, n, {
            code: d3,
            pkce: m3,
            proxyUrl: u2
          }).then(r2) : r2([new Error("State mismatch"), null]) : (clearInterval(s3), r2([new Error("Window was closed without granting authorization"), null]));
      }, 200);
    }) : [new Error("Failed to open auth window"), null];
  } catch {
    return [new Error("Failed to authorize oauth2 flow"), null];
  }
};
var P3 = async (e, l, {
  code: u2,
  pkce: n,
  proxyUrl: i3
} = {}) => {
  if (!e)
    return [new Error("OAuth2 flow was not defined"), null];
  const t2 = new URLSearchParams();
  t2.set("client_id", e["x-scalar-client-id"]), l && (e.type === "clientCredentials" || e.type === "password") && t2.set("scope", l), e.clientSecret && (!e["x-scalar-credentials-location"] || e["x-scalar-credentials-location"] === "body") && t2.set("client_secret", e.clientSecret), "x-scalar-redirect-uri" in e && e["x-scalar-redirect-uri"] && t2.set("redirect_uri", e["x-scalar-redirect-uri"]), u2 ? (t2.set("code", u2), t2.set("grant_type", "authorization_code"), n && t2.set("code_verifier", n.codeVerifier)) : e.type === "password" ? (t2.set("grant_type", "password"), t2.set("username", e.username), t2.set("password", e.password)) : t2.set("grant_type", "client_credentials"), e["x-scalar-security-body"] && Object.entries(e["x-scalar-security-body"]).forEach(([p, a]) => {
    a && t2.set(p, a);
  });
  try {
    const p = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    e.clientSecret && (!e["x-scalar-credentials-location"] || e["x-scalar-credentials-location"] === "header") && (p.Authorization = `Basic ${btoa(`${e["x-scalar-client-id"]}:${e.clientSecret}`)}`);
    const r2 = shouldUseProxy(i3, e.tokenUrl) ? `${i3}?${new URLSearchParams([["scalar_url", e.tokenUrl]]).toString()}` : e.tokenUrl, c = await (await fetch(r2, {
      method: "POST",
      headers: p,
      body: t2
    })).json(), d3 = e["x-tokenName"] || "access_token";
    return [null, c[d3]];
  } catch {
    return [new Error("Failed to get an access token. Please check your credentials."), null];
  }
};

// node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuth/OAuth2.vue.js
var I2 = { class: "flex h-8 items-center justify-end gap-2 border-t" };
var N3 = { class: "flex h-8 w-full items-center justify-end border-t" };
var Y = defineComponent({
  __name: "OAuth2",
  props: {
    collection: {},
    environment: {},
    envVariables: {},
    flow: {},
    persistAuth: { type: Boolean, default: false },
    scheme: {},
    server: {},
    workspace: {}
  },
  setup(s3) {
    const y2 = x(), { toast: g2 } = i(), C4 = je(), n = (l, e) => g(s3.scheme.uid, l, e, C4, s3.persistAuth), S3 = async () => {
      var t2, v2;
      if (y2.isLoading || !((t2 = s3.collection) != null && t2.uid))
        return;
      if (!s3.server) {
        g2("No server selected", "error");
        return;
      }
      y2.startLoading();
      const [l, e] = await b(
        s3.flow,
        s3.server,
        (v2 = s3.workspace) == null ? void 0 : v2.proxyUrl
      ).finally(() => y2.stopLoading());
      e ? n(`flows.${s3.flow.type}.token`, e) : (console.error(l), g2((l == null ? void 0 : l.message) ?? "Failed to authorize", "error"));
    }, i3 = {
      environment: s3.environment,
      envVariables: s3.envVariables,
      workspace: s3.workspace
    };
    return (l, e) => (openBlock(), createElementBlock(Fragment, null, [
      l.flow.token ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createVNode(unref(d), null, {
          default: withCtx(() => [
            createVNode(k2, mergeProps(i3, {
              class: "border-r-transparent",
              modelValue: l.flow.token,
              placeholder: "QUxMIFlPVVIgQkFTRSBBUkUgQkVMT05HIFRPIFVT",
              type: "password",
              "onUpdate:modelValue": e[0] || (e[0] = (t2) => n(`flows.${l.flow.type}.token`, t2))
            }), {
              default: withCtx(() => e[10] || (e[10] = [
                createTextVNode(" Access Token ")
              ])),
              _: 1,
              __: [10]
            }, 16, ["modelValue"])
          ]),
          _: 1
        }),
        createVNode(unref(d), { class: "min-w-full" }, {
          default: withCtx(() => [
            createBaseVNode("div", I2, [
              createVNode(unref($), {
                class: "mr-1 p-0 px-2 py-0.5",
                loading: unref(y2),
                size: "sm",
                variant: "outlined",
                onClick: e[1] || (e[1] = (t2) => n(`flows.${l.flow.type}.token`, ""))
              }, {
                default: withCtx(() => e[11] || (e[11] = [
                  createTextVNode(" Clear ")
                ])),
                _: 1,
                __: [11]
              }, 8, ["loading"])
            ])
          ]),
          _: 1
        })
      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createVNode(unref(d), null, {
          default: withCtx(() => [
            "authorizationUrl" in l.flow ? (openBlock(), createBlock(k2, mergeProps({ key: 0 }, i3, {
              containerClass: "border-r-0",
              modelValue: l.flow.authorizationUrl,
              placeholder: "https://galaxy.scalar.com/authorize",
              "onUpdate:modelValue": e[2] || (e[2] = (t2) => n(`flows.${l.flow.type}.authorizationUrl`, t2))
            }), {
              default: withCtx(() => e[12] || (e[12] = [
                createTextVNode(" Auth URL ")
              ])),
              _: 1,
              __: [12]
            }, 16, ["modelValue"])) : createCommentVNode("", true),
            "tokenUrl" in l.flow ? (openBlock(), createBlock(k2, mergeProps({ key: 1 }, i3, {
              modelValue: l.flow.tokenUrl,
              placeholder: "https://galaxy.scalar.com/token",
              "onUpdate:modelValue": e[3] || (e[3] = (t2) => n(`flows.${l.flow.type}.tokenUrl`, t2))
            }), {
              default: withCtx(() => e[13] || (e[13] = [
                createTextVNode(" Token URL ")
              ])),
              _: 1,
              __: [13]
            }, 16, ["modelValue"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        "x-scalar-redirect-uri" in l.flow ? (openBlock(), createBlock(unref(d), { key: 0 }, {
          default: withCtx(() => [
            createVNode(k2, mergeProps(i3, {
              modelValue: l.flow["x-scalar-redirect-uri"],
              placeholder: "https://galaxy.scalar.com/callback",
              "onUpdate:modelValue": e[4] || (e[4] = (t2) => n(`flows.${l.flow.type}.x-scalar-redirect-uri`, t2))
            }), {
              default: withCtx(() => e[14] || (e[14] = [
                createTextVNode(" Redirect URL ")
              ])),
              _: 1,
              __: [14]
            }, 16, ["modelValue"])
          ]),
          _: 1
        })) : createCommentVNode("", true),
        l.flow.type === "password" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(unref(d), null, {
            default: withCtx(() => [
              createVNode(k2, mergeProps(i3, {
                class: "text-c-2",
                modelValue: l.flow.username,
                placeholder: "janedoe",
                "onUpdate:modelValue": e[5] || (e[5] = (t2) => n(`flows.${l.flow.type}.username`, t2))
              }), {
                default: withCtx(() => e[15] || (e[15] = [
                  createTextVNode(" Username ")
                ])),
                _: 1,
                __: [15]
              }, 16, ["modelValue"])
            ]),
            _: 1
          }),
          createVNode(unref(d), null, {
            default: withCtx(() => [
              createVNode(k2, mergeProps(i3, {
                modelValue: l.flow.password,
                placeholder: "********",
                type: "password",
                "onUpdate:modelValue": e[6] || (e[6] = (t2) => n(`flows.${l.flow.type}.password`, t2))
              }), {
                default: withCtx(() => e[16] || (e[16] = [
                  createTextVNode(" Password ")
                ])),
                _: 1,
                __: [16]
              }, 16, ["modelValue"])
            ]),
            _: 1
          })
        ], 64)) : createCommentVNode("", true),
        createVNode(unref(d), null, {
          default: withCtx(() => [
            createVNode(k2, mergeProps(i3, {
              modelValue: l.flow["x-scalar-client-id"],
              placeholder: "12345",
              "onUpdate:modelValue": e[7] || (e[7] = (t2) => n(`flows.${l.flow.type}.x-scalar-client-id`, t2))
            }), {
              default: withCtx(() => e[17] || (e[17] = [
                createTextVNode(" Client ID ")
              ])),
              _: 1,
              __: [17]
            }, 16, ["modelValue"])
          ]),
          _: 1
        }),
        "clientSecret" in l.flow ? (openBlock(), createBlock(unref(d), { key: 2 }, {
          default: withCtx(() => [
            createVNode(k2, mergeProps(i3, {
              modelValue: l.flow.clientSecret,
              placeholder: "XYZ123",
              type: "password",
              "onUpdate:modelValue": e[8] || (e[8] = (t2) => n(`flows.${l.flow.type}.clientSecret`, t2))
            }), {
              default: withCtx(() => e[18] || (e[18] = [
                createTextVNode(" Client Secret ")
              ])),
              _: 1,
              __: [18]
            }, 16, ["modelValue"])
          ]),
          _: 1
        })) : createCommentVNode("", true),
        "x-usePkce" in l.flow ? (openBlock(), createBlock(unref(d), { key: 3 }, {
          default: withCtx(() => [
            createVNode(k2, mergeProps(i3, {
              enum: unref(pkceOptions),
              modelValue: l.flow["x-usePkce"],
              readOnly: "",
              "onUpdate:modelValue": e[9] || (e[9] = (t2) => n(
                `flows.${l.flow.type}.x-usePkce`,
                t2
              ))
            }), {
              default: withCtx(() => e[19] || (e[19] = [
                createTextVNode(" Use PKCE ")
              ])),
              _: 1,
              __: [19]
            }, 16, ["enum", "modelValue"])
          ]),
          _: 1
        })) : createCommentVNode("", true),
        Object.keys(l.flow.scopes ?? {}).length ? (openBlock(), createBlock(unref(d), { key: 4 }, {
          default: withCtx(() => [
            createVNode(X, {
              flow: l.flow,
              updateScheme: n
            }, null, 8, ["flow"])
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ], 64)),
      l.flow.token ? createCommentVNode("", true) : (openBlock(), createBlock(unref(d), {
        key: 2,
        class: "min-w-full"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", N3, [
            createVNode(unref($), {
              class: "mr-0.75 p-0 px-2 py-0.5",
              loading: unref(y2),
              size: "sm",
              variant: "outlined",
              onClick: S3
            }, {
              default: withCtx(() => e[20] || (e[20] = [
                createTextVNode(" Authorize ")
              ])),
              _: 1,
              __: [20]
            }, 8, ["loading"])
          ])
        ]),
        _: 1
      }))
    ], 64));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuth/RequestAuthTab.vue.js
var J = { class: "bg-b-1 text-c-2 outline-b-3 top-0 z-1 h-full w-full overflow-hidden px-3 py-1.25 text-ellipsis group-hover/auth:absolute group-hover/auth:h-auto group-hover/auth:border-b *:first:line-clamp-1 *:first:text-ellipsis group-hover/auth:*:first:line-clamp-none" };
var Y2 = {
  key: 0,
  class: "flex min-h-8 border-t text-base"
};
var W2 = { class: "flex h-8 max-w-full gap-2.5 overflow-x-auto px-3" };
var G = ["onClick"];
var X2 = { class: "relative z-10" };
var ie = defineComponent({
  __name: "RequestAuthTab",
  props: {
    collection: {},
    environment: {},
    envVariables: {},
    layout: {},
    persistAuth: { type: Boolean, default: false },
    securitySchemeUids: {},
    server: {},
    workspace: {}
  },
  setup(b3) {
    const C4 = je(), { collectionMutators: M3, securitySchemes: g2, securitySchemeMutators: O } = C4, S3 = computed(
      () => b3.securitySchemeUids.map((t2) => ({
        scheme: g2[t2]
      }))
    ), p = ref(""), T2 = (t2) => {
      const r2 = t2.description ? `: ${t2.description}` : "", e = `${capitalize(t2.nameKey)}${r2 || `: ${t2.type}`}`;
      if (t2.type === "apiKey")
        return `${capitalize(t2.nameKey)}${r2 || `: ${t2.in}`}`;
      if (t2.type === "oauth2") {
        const o2 = Object.values(t2.flows ?? {})[0];
        return `${capitalize(t2.nameKey)}: ${p.value ? p.value : (o2 == null ? void 0 : o2.type) ?? ""}${r2}`;
      }
      return t2.type === "http" ? `${capitalize(t2.nameKey)}: ${t2.scheme}${r2}` : `${e}${r2}`;
    }, k4 = (t2, r2, e) => {
      g(t2, r2, e, C4, b3.persistAuth);
    };
    onMounted(() => {
      if (!b3.persistAuth)
        return;
      const t2 = JSON.parse(
        safeLocalStorage().getItem(CLIENT_LS_KEYS.AUTH) ?? "{}"
      ), r2 = Object.keys(g2).reduce(
        (e, o2) => {
          const a = g2[o2];
          return a && (e[a.nameKey] = a.uid), e;
        },
        {}
      );
      Object.entries(t2).forEach(([e, o2]) => {
        const a = r2[e];
        a && Object.entries(o2).forEach(([E3, K]) => {
          O.edit(a, E3, K);
        });
      });
      try {
        const o2 = JSON.parse(
          safeLocalStorage().getItem(CLIENT_LS_KEYS.SELECTED_SECURITY_SCHEMES) ?? ""
        ).map((a) => Array.isArray(a) ? a.map((y2) => r2[y2]).filter(isDefined) : r2[a]).filter(isDefined);
        M3.edit(b3.collection.uid, "selectedSecuritySchemeUids", o2);
      } catch {
      }
    });
    const c = {
      environment: b3.environment,
      envVariables: b3.envVariables,
      workspace: b3.workspace
    };
    return (t2, r2) => (openBlock(true), createElementBlock(Fragment, null, renderList(S3.value, ({ scheme: e }) => (openBlock(), createElementBlock(Fragment, {
      key: e == null ? void 0 : e.uid
    }, [
      S3.value.length > 1 && e ? (openBlock(), createBlock(unref(d), { key: 0 }, {
        default: withCtx(() => [
          createVNode(unref(f), {
            "aria-label": T2(e),
            class: "text-c-2 group/auth flex items-center leading-[22px] whitespace-nowrap outline-none hover:whitespace-normal"
          }, {
            default: withCtx(() => [
              createBaseVNode("p", J, toDisplayString(T2(e)), 1)
            ]),
            _: 2
          }, 1032, ["aria-label"])
        ]),
        _: 2
      }, 1024)) : createCommentVNode("", true),
      e != null && e.description && S3.value.length <= 1 ? (openBlock(), createBlock(unref(d), { key: 1 }, {
        default: withCtx(() => [
          createVNode(unref(f), {
            class: "max-h-[auto]",
            "aria-label": e.description
          }, {
            default: withCtx(() => [
              createVNode(unref(E), {
                class: "auth-description bg-b-1 text-c-2 min-w-0 flex-1 px-3 py-1.25",
                value: e.description
              }, null, 8, ["value"])
            ]),
            _: 2
          }, 1032, ["aria-label"])
        ]),
        _: 2
      }, 1024)) : createCommentVNode("", true),
      (e == null ? void 0 : e.type) === "http" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
        e.scheme === "bearer" ? (openBlock(), createBlock(unref(d), { key: 0 }, {
          default: withCtx(() => [
            createVNode(k2, mergeProps({ ref_for: true }, c, {
              containerClass: t2.layout === "reference" && "border-t",
              modelValue: e.token,
              placeholder: "Token",
              type: "password",
              "onUpdate:modelValue": (o2) => k4(e.uid, "token", o2)
            }), {
              default: withCtx(() => r2[0] || (r2[0] = [
                createTextVNode(" Bearer Token ")
              ])),
              _: 2,
              __: [0]
            }, 1040, ["containerClass", "modelValue", "onUpdate:modelValue"])
          ]),
          _: 2
        }, 1024)) : (e == null ? void 0 : e.scheme) === "basic" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(unref(d), null, {
            default: withCtx(() => [
              createVNode(k2, mergeProps({ ref_for: true }, c, {
                class: "text-c-2",
                modelValue: e.username,
                placeholder: "janedoe",
                required: "",
                "onUpdate:modelValue": (o2) => k4(e.uid, "username", o2)
              }), {
                default: withCtx(() => r2[1] || (r2[1] = [
                  createTextVNode(" Username ")
                ])),
                _: 2,
                __: [1]
              }, 1040, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 2
          }, 1024),
          createVNode(unref(d), null, {
            default: withCtx(() => [
              createVNode(k2, mergeProps({ ref_for: true }, c, {
                modelValue: e.password,
                placeholder: "********",
                type: "password",
                "onUpdate:modelValue": (o2) => k4(e.uid, "password", o2)
              }), {
                default: withCtx(() => r2[2] || (r2[2] = [
                  createTextVNode(" Password ")
                ])),
                _: 2,
                __: [2]
              }, 1040, ["modelValue", "onUpdate:modelValue"])
            ]),
            _: 2
          }, 1024)
        ], 64)) : createCommentVNode("", true)
      ], 64)) : (e == null ? void 0 : e.type) === "apiKey" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
        createVNode(unref(d), null, {
          default: withCtx(() => [
            createVNode(k2, mergeProps({ ref_for: true }, c, {
              containerClass: t2.layout === "reference" && "border-t",
              modelValue: e.name,
              placeholder: "api-key",
              "onUpdate:modelValue": (o2) => k4(e.uid, "name", o2)
            }), {
              default: withCtx(() => r2[3] || (r2[3] = [
                createTextVNode(" Name ")
              ])),
              _: 2,
              __: [3]
            }, 1040, ["containerClass", "modelValue", "onUpdate:modelValue"])
          ]),
          _: 2
        }, 1024),
        createVNode(unref(d), null, {
          default: withCtx(() => [
            createVNode(k2, mergeProps({ ref_for: true }, c, {
              modelValue: e.value,
              placeholder: "QUxMIFlPVVIgQkFTRSBBUkUgQkVMT05HIFRPIFVT",
              type: "password",
              "onUpdate:modelValue": (o2) => k4(e.uid, "value", o2)
            }), {
              default: withCtx(() => r2[4] || (r2[4] = [
                createTextVNode(" Value ")
              ])),
              _: 2,
              __: [4]
            }, 1040, ["modelValue", "onUpdate:modelValue"])
          ]),
          _: 2
        }, 1024)
      ], 64)) : (e == null ? void 0 : e.type) === "oauth2" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
        createVNode(unref(d), null, {
          default: withCtx(() => [
            Object.keys(e.flows).length > 1 ? (openBlock(), createElementBlock("div", Y2, [
              createBaseVNode("div", W2, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(e == null ? void 0 : e.flows, (o2, a, y2) => (openBlock(), createElementBlock("button", {
                  key: a,
                  class: normalizeClass(["floating-bg text-c-3 relative cursor-pointer border-b-[1px] border-transparent py-1 text-base font-medium", {
                    "!text-c-1 !rounded-none border-b-[1px] !border-current": t2.layout !== "reference" && (p.value === a || y2 === 0 && !p.value),
                    "!text-c-1 !rounded-none border-b-[1px] !border-current opacity-100": t2.layout === "reference" && (p.value === a || y2 === 0 && !p.value)
                  }]),
                  type: "button",
                  onClick: (E3) => p.value = a
                }, [
                  createBaseVNode("span", X2, toDisplayString(a), 1)
                ], 10, G))), 128))
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 2
        }, 1024),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e == null ? void 0 : e.flows, (o2, a, y2) => (openBlock(), createElementBlock(Fragment, { key: a }, [
          p.value === a || y2 === 0 && !p.value ? (openBlock(), createBlock(Y, mergeProps({
            key: 0,
            ref_for: true
          }, c, {
            collection: t2.collection,
            flow: o2,
            persistAuth: t2.persistAuth,
            scheme: e,
            server: t2.server,
            workspace: t2.workspace
          }), null, 16, ["collection", "flow", "persistAuth", "scheme", "server", "workspace"])) : createCommentVNode("", true)
        ], 64))), 128))
      ], 64)) : (e == null ? void 0 : e.type) === "openIdConnect" ? (openBlock(), createElementBlock("div", {
        key: 5,
        class: normalizeClass(["text-c-3 bg-b-1 flex min-h-[calc(4rem+1px)] items-center justify-center border-t border-b-0 px-4 text-base", { "rounded-b-lg": t2.layout === "reference" }])
      }, " Coming soon ", 2)) : createCommentVNode("", true)
    ], 64))), 128));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuth/RequestAuthDataTable.vue2.js
var M2 = ["onClick"];
var N4 = { class: "relative z-10 font-medium whitespace-nowrap" };
var D2 = {
  key: 0,
  class: "absolute inset-x-1 bottom-[var(--scalar-border-width)] left-1/2 z-1 h-px w-full -translate-x-1/2 bg-current"
};
var L2 = defineComponent({
  __name: "RequestAuthDataTable",
  props: {
    collection: {},
    environment: {},
    envVariables: {},
    layout: { default: "client" },
    persistAuth: { type: Boolean, default: false },
    selectedSchemeOptions: { default: () => [] },
    server: {},
    workspace: {}
  },
  setup(n) {
    const u2 = W(), b3 = ref(
      null
    ), t2 = ref(0), m3 = computed(() => {
      if (!n.selectedSchemeOptions || n.selectedSchemeOptions.length === 0)
        return [];
      const e = n.selectedSchemeOptions[t2.value];
      if (!e)
        return [];
      const r2 = e.id.split(",").filter(Boolean);
      return r2.length > 1 ? r2 : [e.id];
    }), y2 = computed(() => m3.value.length > 0);
    return watch(
      () => n.selectedSchemeOptions,
      (e) => {
        (!e || !e[t2.value]) && (t2.value = Math.max(0, t2.value - 1));
      }
    ), (e, r2) => (openBlock(), createElementBlock("form", {
      onSubmit: r2[1] || (r2[1] = withModifiers(() => {
      }, ["prevent"]))
    }, [
      e.selectedSchemeOptions.length > 1 ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["box-content flex flex-wrap gap-x-2.5 overflow-hidden border border-b-0 px-3", e.layout === "client" && "border-x-0"])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.selectedSchemeOptions, (a, i3) => (openBlock(), createElementBlock("div", {
          key: a.id,
          class: normalizeClass(["relative z-1 -mb-[var(--scalar-border-width)] flex h-8 cursor-pointer", [t2.value === i3 ? "text-c-1" : "text-c-3"]])
        }, [
          createBaseVNode("button", {
            class: "floating-bg relative cursor-pointer border-b-[1px] border-transparent py-1 text-sm font-medium",
            type: "button",
            onClick: (E3) => t2.value = i3
          }, [
            createBaseVNode("span", N4, toDisplayString(a.label), 1)
          ], 8, M2),
          t2.value === i3 ? (openBlock(), createElementBlock("div", D2)) : createCommentVNode("", true)
        ], 2))), 128))
      ], 2)) : createCommentVNode("", true),
      y2.value ? (openBlock(), createBlock(unref(_), {
        key: 1,
        class: normalizeClass(["flex-1", e.layout === "reference" && "bg-b-1 rounded-b-lg border border-t-0"]),
        columns: [""],
        presentational: ""
      }, {
        default: withCtx(() => [
          createVNode(ie, {
            collection: e.collection,
            envVariables: e.envVariables,
            environment: e.environment,
            layout: e.layout,
            persistAuth: e.persistAuth,
            securitySchemeUids: m3.value,
            server: e.server,
            workspace: e.workspace
          }, null, 8, ["collection", "envVariables", "environment", "layout", "persistAuth", "securitySchemeUids", "server", "workspace"])
        ]),
        _: 1
      }, 8, ["class"])) : (openBlock(), createElementBlock("div", {
        key: 2,
        class: normalizeClass([
          "text-c-3 bg-b-1 flex min-h-16 items-center justify-center border-t px-4 text-sm",
          e.layout === "reference" && "min-h-[calc(4rem+0.5px)] rounded-b-lg border"
        ])
      }, " No authentication selected ", 2)),
      createVNode(B2, {
        scheme: b3.value,
        state: unref(u2),
        onClose: r2[0] || (r2[0] = (a) => unref(u2).hide())
      }, null, 8, ["scheme", "state"])
    ], 32));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuth/RequestAuthDataTable.vue.js
var r = s(L2, [["__scopeId", "data-v-7bf13bf7"]]);

// node_modules/@scalar/api-client/dist/views/Request/consts/new-auth-options.js
var t = {
  apiKeyCookie: {
    label: "API Key in Cookies",
    payload: {
      type: "apiKey",
      in: "cookie",
      nameKey: "apiKeyCookie"
    }
  },
  apiKeyHeader: {
    label: "API Key in Headers",
    payload: {
      type: "apiKey",
      in: "header",
      nameKey: "apiKeyHeader"
    }
  },
  apiKeyQuery: {
    label: "API Key in Query Params",
    payload: {
      type: "apiKey",
      in: "query",
      nameKey: "apiKeyQuery"
    }
  },
  httpBasic: {
    label: "HTTP Basic",
    payload: {
      type: "http",
      scheme: "basic",
      nameKey: "httpBasic"
    }
  },
  httpBearer: {
    label: "HTTP Bearer",
    payload: {
      type: "http",
      scheme: "bearer",
      nameKey: "httpBearer"
    }
  },
  oauth2Implicit: {
    label: "Oauth2 Implicit Flow",
    payload: {
      type: "oauth2",
      nameKey: "oauth2Implicit",
      flows: {
        implicit: {
          type: "implicit"
        }
      }
    }
  },
  oauth2Password: {
    label: "Oauth2 Password Flow",
    payload: {
      type: "oauth2",
      nameKey: "oauth2Password",
      flows: {
        password: {
          type: "password"
        }
      }
    }
  },
  oauth2ClientCredentials: {
    label: "Oauth2 Client Credentials",
    payload: {
      type: "oauth2",
      nameKey: "oauth2ClientCredentials",
      flows: {
        clientCredentials: {
          type: "clientCredentials"
        }
      }
    }
  },
  oauth2AuthorizationFlow: {
    label: "Oauth2 Authorization Code",
    payload: {
      type: "oauth2",
      nameKey: "oauth2AuthorizationFlow",
      flows: {
        authorizationCode: {
          type: "authorizationCode"
        }
      }
    }
  }
};
var o = Object.entries(t);
var i2 = o.map(
  ([e, a]) => ({
    id: e,
    isDeletable: false,
    ...a
  })
);

// node_modules/@scalar/api-client/dist/views/Request/libs/auth.js
var d2 = (t2) => ({
  id: t2.uid,
  label: t2.type === "openIdConnect" ? `${t2.nameKey} (coming soon)` : t2.nameKey
});
var b2 = (t2, e) => d2(
  t2.reduce(
    (r2, a, i3) => {
      const m3 = e[a];
      return m3 && (r2.nameKey += `${i3 > 0 ? " & " : ""}${m3.nameKey}`, r2.uid = `${r2.uid}${i3 > 0 ? "," : ""}${m3.uid}`), r2;
    },
    { type: "complex", nameKey: "", uid: "" }
  )
);
var A2 = (t2, e) => {
  var r2;
  return JSON.stringify(t2 == null ? void 0 : t2.security) === "[{}]" && ((r2 = e == null ? void 0 : e.security) != null && r2.length) ? !!(e != null && e.security.find((i3) => JSON.stringify(i3) === "{}")) ? e.security : [...e.security, {}] : (t2 == null ? void 0 : t2.security) ?? (e == null ? void 0 : e.security) ?? [];
};
var D3 = (t2, e, r2, a = false) => {
  {
    const i3 = e.reduce(
      (n, s3) => {
        const u2 = r2[s3];
        return u2 && (n[u2.nameKey] = u2), n;
      },
      {}
    ), m3 = t2.flatMap((n) => {
      const s3 = Object.keys(n);
      if (s3.length > 1) {
        const u2 = s3.map((g2) => {
          var h;
          return (h = i3[g2]) == null ? void 0 : h.uid;
        }).filter(isDefined);
        return b2(u2, r2);
      }
      if (s3[0]) {
        const u2 = i3[s3[0]];
        if (u2)
          return d2(u2);
      }
      return [];
    }), y2 = e.filter((n) => !m3.some((s3) => s3.id === n)).map((n) => {
      const s3 = r2[n];
      return s3 ? d2(s3) : null;
    }).filter(isDefined), f5 = [
      { label: "Required authentication", options: m3 },
      { label: "Available authentication", options: y2 }
    ];
    return a ? m3.length ? f5 : y2 : (f5.push({
      label: "Add new authentication",
      options: i2
    }), f5);
  }
};

// node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuth/RequestAuth.vue2.js
var ce = ["id"];
var ue = { class: "flex flex-1" };
var me = { class: "min-w-0 flex-1 truncate" };
var Ce = defineComponent({
  __name: "RequestAuth",
  props: {
    collection: {},
    environment: {},
    envVariables: {},
    layout: {},
    operation: {},
    persistAuth: { type: Boolean, default: false },
    selectedSecuritySchemeUids: {},
    server: {},
    title: {},
    workspace: {}
  },
  setup(r2) {
    const { layout: q2 } = s2(), {
      securitySchemes: f5,
      securitySchemeMutators: L3,
      requestMutators: M3,
      collectionMutators: T2
    } = je(), R = useId(), b3 = ref(null), p = W(), g2 = ref(
      null
    ), V2 = ref(false), w = computed(() => {
      const t2 = A2(r2.operation, r2.collection);
      return { filteredRequirements: t2.filter((o2) => Object.keys(o2).length), requirements: t2 };
    }), x2 = computed(() => {
      const { filteredRequirements: t2, requirements: e } = w.value;
      if (!e.length)
        return null;
      const l = !e.some(
        (y2) => Object.keys(y2).length > 1
      ) && t2.length < e.length;
      return { icon: l ? "Unlock" : "Lock", text: l ? "Optional" : "Required" };
    }), c = computed(
      () => r2.selectedSecuritySchemeUids.map((t2) => {
        if (Array.isArray(t2))
          return b2(t2, f5);
        const e = f5[t2 ?? ""];
        if (e)
          return d2(e);
      }).filter(isDefined)
    );
    function U2(t2) {
      var l;
      const e = t2.find((n) => n.payload), o2 = t2.filter((n) => !n.payload).map(({ id: n }) => {
        const i3 = n.split(",");
        return i3.length > 1 ? i3 : n;
      });
      if (e != null && e.payload) {
        const n = L3.add(
          e.payload,
          (l = r2.collection) == null ? void 0 : l.uid
        );
        n && o2.push(n.uid);
      }
      D4(o2);
    }
    const D4 = (t2) => {
      var e;
      if (r2.collection.useCollectionSecurity) {
        if (T2.edit(r2.collection.uid, "selectedSecuritySchemeUids", t2), !r2.persistAuth)
          return;
        const o2 = t2.map((l) => {
          var n;
          return Array.isArray(l) ? l.map((i3) => {
            var y2;
            return (y2 = f5[i3]) == null ? void 0 : y2.nameKey;
          }) : (n = f5[l]) == null ? void 0 : n.nameKey;
        });
        safeLocalStorage().setItem(
          CLIENT_LS_KEYS.SELECTED_SECURITY_SCHEMES,
          JSON.stringify(o2)
        );
      } else (e = r2.operation) != null && e.uid && M3.edit(r2.operation.uid, "selectedSecuritySchemeUids", t2);
    };
    function E3({ id: t2, label: e }) {
      g2.value = { id: t2, label: e }, p.show();
    }
    const B3 = (t2) => {
      var o2;
      if (!t2)
        return;
      const e = r2.selectedSecuritySchemeUids.filter((l) => {
        const n = t2.split(",");
        return n.length > 1 && Array.isArray(l) && n.length === l.length ? l.every((i3) => !n.includes(i3)) : l !== t2;
      });
      D4(e), (o2 = b3.value) == null || o2.$el.focus(), p.hide();
    }, $2 = computed(
      () => {
        var t2;
        return D3(
          w.value.filteredRequirements,
          ((t2 = r2.collection) == null ? void 0 : t2.securitySchemes) ?? [],
          f5,
          q2 === "modal" || r2.layout === "reference"
        );
      }
    ), N5 = (t2) => {
      var e;
      V2.value && t2.stopPropagation(), (e = b3.value) == null || e.$el.click();
    };
    return (t2, e) => (openBlock(), createBlock(T, {
      class: "group/params relative",
      itemCount: c.value.length,
      layout: t2.layout,
      "onUpdate:modelValue": e[2] || (e[2] = (o2) => V2.value = o2)
    }, {
      title: withCtx(() => [
        createBaseVNode("div", {
          id: unref(R),
          class: "inline-flex items-center gap-0.5 leading-[20px]"
        }, [
          createBaseVNode("span", null, toDisplayString(t2.title), 1),
          x2.value ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["text-c-3 hover:bg-b-3 hover:text-c-1 -mr-1 cursor-pointer rounded px-1 py-0.5 text-xs leading-[normal]", { "text-c-1": x2.value.text === "Required" }]),
            onClick: N5
          }, toDisplayString(x2.value.text), 3)) : createCommentVNode("", true)
        ], 8, ce)
      ]),
      actions: withCtx(() => [
        createBaseVNode("div", ue, [
          createVNode(unref(B), {
            class: "w-72 text-xs",
            modelValue: c.value,
            teleport: "",
            multiple: "",
            placement: "bottom-end",
            options: $2.value,
            onDelete: E3,
            "onUpdate:modelValue": U2
          }, {
            option: withCtx(({ option: o2, selected: l }) => [
              createVNode(unref(u), {
                selected: l,
                multiselect: ""
              }, null, 8, ["selected"]),
              createBaseVNode("div", me, toDisplayString(o2.label), 1),
              o2.isDeletable ?? (unref(q2) !== "modal" && t2.layout !== "reference") ? (openBlock(), createBlock(unref(S), {
                key: 0,
                size: "xs",
                label: `Delete ${o2.label}`,
                icon: unref(A),
                onClick: withModifiers((n) => E3(o2), ["stop"]),
                class: "-m-0.5 shrink-0 p-0.5 opacity-0 group-hover/item:opacity-100"
              }, null, 8, ["label", "icon", "onClick"])) : createCommentVNode("", true)
            ]),
            default: withCtx(() => [
              createVNode(unref($), {
                ref_key: "comboboxButtonRef",
                ref: b3,
                "aria-describedby": unref(R),
                class: "group/combobox-button hover:text-c-1 text-c-2 flex h-fit items-center gap-1 px-0.75 py-0.25 text-base font-normal transition-transform",
                fullWidth: "",
                variant: "ghost"
              }, {
                default: withCtx(() => {
                  var o2;
                  return [
                    c.value.length === 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      e[3] || (e[3] = createBaseVNode("span", { class: "sr-only" }, "Selected Auth Type:", -1)),
                      createTextVNode(" " + toDisplayString((o2 = c.value[0]) == null ? void 0 : o2.label), 1)
                    ], 64)) : c.value.length > 1 ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      e[4] || (e[4] = createTextVNode(" Multiple ")),
                      e[5] || (e[5] = createBaseVNode("span", { class: "sr-only" }, "Auth Types Selected", -1))
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                      e[6] || (e[6] = createBaseVNode("span", { class: "sr-only" }, "Select", -1)),
                      e[7] || (e[7] = createTextVNode(" Auth Type "))
                    ], 64)),
                    createVNode(unref(C), {
                      weight: "bold",
                      class: "size-3 shrink-0 transition-transform duration-100 group-aria-expanded/combobox-button:rotate-180"
                    })
                  ];
                }),
                _: 1
              }, 8, ["aria-describedby"])
            ]),
            _: 1
          }, 8, ["modelValue", "options"])
        ])
      ]),
      default: withCtx(() => [
        createVNode(r, {
          collection: t2.collection,
          envVariables: t2.envVariables,
          environment: t2.environment,
          layout: t2.layout,
          persistAuth: t2.persistAuth,
          selectedSchemeOptions: c.value,
          server: t2.server,
          workspace: t2.workspace
        }, null, 8, ["collection", "envVariables", "environment", "layout", "persistAuth", "selectedSchemeOptions", "server", "workspace"]),
        createVNode(B2, {
          scheme: g2.value,
          state: unref(p),
          onClose: e[0] || (e[0] = (o2) => unref(p).hide()),
          onDelete: e[1] || (e[1] = (o2) => {
            var l;
            return B3((l = g2.value) == null ? void 0 : l.id);
          })
        }, null, 8, ["scheme", "state"])
      ]),
      _: 1
    }, 8, ["itemCount", "layout"]));
  }
});

// node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuth/RequestAuth.vue.js
var f4 = s(Ce, [["__scopeId", "data-v-2df672a9"]]);

export {
  T,
  y,
  f4 as f
};
//# sourceMappingURL=chunk-4VTJNOIA.js.map
