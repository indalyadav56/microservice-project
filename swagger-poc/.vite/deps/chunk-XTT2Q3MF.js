import {
  m
} from "./chunk-YMJHZV34.js";
import {
  s as s2
} from "./chunk-BGMGCHHM.js";
import {
  je,
  s
} from "./chunk-V4XIGGIS.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  normalizeClass,
  normalizeStyle,
  onMounted,
  onScopeDispose,
  openBlock,
  ref,
  renderSlot,
  toDisplayString,
  unref,
  vShow,
  watchEffect,
  withDirectives
} from "./chunk-BCXGVGOY.js";

// node_modules/@scalar/use-hooks/dist/useBreakpoints/constants.js
var screens = {
  /** Mobile */
  xs: "(min-width: 400px)",
  /** Large Mobile */
  sm: "(min-width: 600px)",
  /** Tablet */
  md: "(min-width: 800px)",
  /** Desktop */
  lg: "(min-width: 1000px)",
  /** Ultrawide and larger */
  xl: "(min-width: 1200px)",
  /** Custom breakpoint for zoomed in screens (should trigger at about 200% zoom) */
  zoomed: "(max-width: 720px) and (max-height: 480px)"
};

// node_modules/@scalar/use-hooks/node_modules/@vueuse/shared/index.mjs
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
var isClient = typeof window !== "undefined" && typeof document !== "undefined";
var isWorker = typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var isIOS = getIsIOS();
function getIsIOS() {
  var _a, _b;
  return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function cacheStringFunction(fn) {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
function identity(arg) {
  return arg;
}

// node_modules/@scalar/use-hooks/node_modules/@vueuse/core/node_modules/vue-demi/lib/index.mjs
var isVue22 = false;

// node_modules/@scalar/use-hooks/node_modules/@vueuse/core/index.mjs
var defaultWindow = isClient ? window : void 0;
var defaultDocument = isClient ? window.document : void 0;
var defaultNavigator = isClient ? window.navigator : void 0;
var defaultLocation = isClient ? window.location : void 0;
function useMounted() {
  const isMounted = ref(false);
  const instance = getCurrentInstance();
  if (instance) {
    onMounted(() => {
      isMounted.value = true;
    }, isVue22 ? void 0 : instance);
  }
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  };
  const stopWatch = watchEffect(() => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(toValue(query));
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", handler);
    else
      mediaQuery.addListener(handler);
    matches.value = mediaQuery.matches;
  });
  tryOnScopeDispose(() => {
    stopWatch();
    cleanup();
    mediaQuery = void 0;
  });
  return matches;
}
var _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey = "__vueuse_ssr_handlers__";
var handlers = getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
var defaultState = {
  x: 0,
  y: 0,
  pointerId: 0,
  pressure: 0,
  tiltX: 0,
  tiltY: 0,
  width: 0,
  height: 0,
  twist: 0,
  pointerType: null
};
var keys = Object.keys(defaultState);
var DEFAULT_UNITS = [
  { max: 6e4, value: 1e3, name: "second" },
  { max: 276e4, value: 6e4, name: "minute" },
  { max: 72e6, value: 36e5, name: "hour" },
  { max: 5184e5, value: 864e5, name: "day" },
  { max: 24192e5, value: 6048e5, name: "week" },
  { max: 28512e6, value: 2592e6, name: "month" },
  { max: Number.POSITIVE_INFINITY, value: 31536e6, name: "year" }
];
var _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
var TransitionPresets = Object.assign({}, { linear: identity }, _TransitionPresets);

// node_modules/@scalar/use-hooks/dist/useBreakpoints/useBreakpoints.js
function useBreakpoints() {
  const mediaQueries = Object.fromEntries(
    Object.entries(screens).map(([breakpoint, value]) => [breakpoint, useMediaQuery(value)])
  );
  const breakpoints = computed(
    () => Object.fromEntries(
      Object.entries(mediaQueries).map(([breakpoint, queryRef]) => [breakpoint, unref(queryRef)])
    )
  );
  return {
    /** The screen sizes defined in the preset */
    screens,
    /** Reactive media queries for each of the screen sizes */
    mediaQueries,
    /** The breakpoints as reactive media queries */
    breakpoints
  };
}

// node_modules/@scalar/api-client/dist/components/Sidebar/Sidebar.vue2.js
var B = {
  key: 0,
  class: "xl:min-h-header flex min-h-12 items-center justify-between px-3 py-1.5 text-sm md:px-[18px] md:py-2.5"
};
var I = { class: "m-0 text-sm font-medium whitespace-nowrap" };
var X = { class: "bg-b-1 relative sticky bottom-0 z-10 w-[inherit] pt-0 has-[.empty-sidebar-item]:border-t md:px-2.5 md:pb-2.5" };
var q = defineComponent({
  __name: "Sidebar",
  props: {
    title: {}
  },
  setup(R) {
    const { isSidebarOpen: y } = m(), { sidebarWidth: o, setSidebarWidth: i } = je(), { layout: c } = s2(), a = ref(false), p = ref(null), { breakpoints: d } = useBreakpoints(), w = (e) => {
      e.preventDefault();
      const f = e.clientX, x = Number.parseInt(
        getComputedStyle(p.value).width || o.value,
        10
      ), b = (k) => {
        a.value = true, document.body.classList.add("dragging");
        let s3 = x + k.clientX - f;
        s3 > 420 && (s3 = 420 + (s3 - 420) * 0.2), s3 < 240 && (s3 = 240), i(`${s3}px`);
      }, v = () => {
        a.value = false, document.body.classList.remove("dragging"), document.documentElement.removeEventListener("mousemove", b, false), document.documentElement.removeEventListener("mouseup", v, false), Number.parseInt(o.value, 10) > 420 ? i("360px") : Number.parseInt(o.value, 10) < 240 && i("240px");
      };
      document.documentElement.addEventListener("mousemove", b, false), document.documentElement.addEventListener("mouseup", v, false);
    };
    return (e, f) => withDirectives((openBlock(), createElementBlock("aside", {
      ref_key: "sidebarRef",
      ref: p,
      class: normalizeClass(["sidebar bg-b-1 relative flex min-w-full flex-1 flex-col overflow-hidden leading-3 md:min-w-fit md:flex-none md:border-r md:border-b-0", { dragging: a.value }]),
      style: normalizeStyle({ width: unref(d).lg ? unref(o) : "100%" })
    }, [
      renderSlot(e.$slots, "header", {}, void 0, true),
      unref(c) !== "modal" && e.title ? (openBlock(), createElementBlock("div", B, [
        createBaseVNode("h2", I, toDisplayString(e.title), 1),
        unref(d).lg ? createCommentVNode("", true) : renderSlot(e.$slots, "button", { key: 0 }, void 0, true)
      ])) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass(["custom-scroll sidebar-height w-[inherit] pb-0 md:pb-[37px]", {
          "sidebar-mask": unref(c) !== "modal"
        }])
      }, [
        renderSlot(e.$slots, "content", {}, void 0, true)
      ], 2),
      unref(d).lg ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createBaseVNode("div", X, [
          renderSlot(e.$slots, "button", {}, void 0, true)
        ]),
        createBaseVNode("div", {
          class: "resizer",
          onMousedown: w
        }, null, 32)
      ], 64)) : createCommentVNode("", true)
    ], 6)), [
      [vShow, unref(y)]
    ]);
  }
});

// node_modules/@scalar/api-client/dist/components/Sidebar/Sidebar.vue.js
var m2 = s(q, [["__scopeId", "data-v-72824faa"]]);

export {
  useBreakpoints,
  m2 as m
};
//# sourceMappingURL=chunk-XTT2Q3MF.js.map
