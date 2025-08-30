import {
  inject,
  reactive,
  readonly,
  ref
} from "./chunk-BCXGVGOY.js";

// node_modules/@scalar/api-client/dist/hooks/useSidebar.js
var O = ({ layout: t }) => {
  const e = reactive({}), r = ref(t !== "modal");
  return {
    collapsedSidebarFolders: e,
    isSidebarOpen: r
  };
};
var p = Symbol();
var m = () => {
  const t = inject(p);
  if (!t)
    throw new Error("useSidebar must have injected SIDEBAR_SYMBOL");
  const { collapsedSidebarFolders: e, isSidebarOpen: r } = t, s = (o, l) => e[o] = l, d = (o) => e[o] = !e[o], i = (o) => r.value = o, n = () => r.value = !r.value;
  return {
    /** State */
    collapsedSidebarFolders: readonly(e),
    isSidebarOpen: readonly(r),
    /** Actions */
    setCollapsedSidebarFolder: s,
    toggleSidebarFolder: d,
    setSidebarOpen: i,
    toggleSidebarOpen: n
  };
};

export {
  O,
  p,
  m
};
//# sourceMappingURL=chunk-YMJHZV34.js.map
