import {
  i
} from "./chunk-TBN3PBMZ.js";
import {
  s
} from "./chunk-V4XIGGIS.js";
import {
  E2 as E,
  createBaseVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  openBlock,
  unref
} from "./chunk-BCXGVGOY.js";

// node_modules/@scalar/api-client/dist/assets/keycap.ascii.js
var n = `          .:=+++++=================-
         .--#*                       :.
        .-:-**                        -.
      .:-::-+*                        =:
     .:-:::-=#                         ::
    .-:::----**                        ..
   .-:::::---=#                         ..
  :-::::::----**                         ..
.:-::::::::----*=                        ..
.-::::::::------+-                        ..
..::::::::-------=                         ..
 .:::::----------++                        ..
   .:::----------+**+*++*+*++*+++*++++++++++:.
   ------------+*+=-=======================.
   .----------+*+=========================:.
    :--------+*+=-========================.
    .=------+*+=-========================:.
     .=----+*+=-------=================+-.
     .----+*+=----------================.
     .:=-+*+=----------=-==============-
      .-+*+=----------------===========.
       .-+=------------------====-====:.`;

// node_modules/@scalar/api-client/dist/components/EmptyState.vue2.js
var p = { class: "flex-center flex w-full scale-75" };
var m = { class: "relative" };
var d = { class: "relative -ml-12" };
var h = defineComponent({
  __name: "EmptyState",
  setup(_) {
    return (f, a) => (openBlock(), createElementBlock("div", p, [
      createBaseVNode("div", m, [
        createVNode(unref(E), {
          class: "keycap-hotkey right-14 border-transparent py-0 text-xl",
          hotkey: ""
        }),
        createVNode(i, {
          art: unref(n),
          class: "text-c-3 !leading-[6px]"
        }, null, 8, ["art"])
      ]),
      createBaseVNode("div", d, [
        a[0] || (a[0] = createBaseVNode("div", { class: "keycap-hotkey right-16 text-xl" }, "K", -1)),
        createVNode(i, {
          art: unref(n),
          class: "keycap-n !leading-[6px]"
        }, null, 8, ["art"])
      ])
    ]));
  }
});

// node_modules/@scalar/api-client/dist/components/EmptyState.vue.js
var r = s(h, [["__scopeId", "data-v-45a9fc44"]]);

export {
  r
};
//# sourceMappingURL=chunk-OIAL5TOR.js.map
