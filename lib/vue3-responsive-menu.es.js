import { defineComponent as T, ref as b, computed as R, openBlock as a, createElementBlock as c, normalizeClass as E, createElementVNode as _, Fragment as I, renderList as x, createTextVNode as A, toDisplayString as w, createCommentVNode as X, nextTick as j } from "vue";
var d = 256, F = [], D = 256, S;
for (; d--; )
  F[d] = (d + 256).toString(16).substring(1);
function U(l) {
  var M = 0, v = l || 11;
  if (!S || d + v > D * 2)
    for (S = "", d = 0; M < D; M++)
      S += F[Math.random() * 256 | 0];
  return S.substring(d, d++ + v);
}
const Z = { class: "responsive-menu__items" }, $ = ["data-rmenu-id"], q = /* @__PURE__ */ _("span", null, null, -1), G = {
  key: 0,
  class: "responsive-menu__submenu-items"
}, J = /* @__PURE__ */ _("span", null, null, -1), K = { class: "responsive-menu__submenu-items" }, P = /* @__PURE__ */ T({
  __name: "ResponsiveMenu",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    config: {
      type: Object,
      default: () => ({
        labelMore: "More",
        mode: ""
      })
    }
  },
  setup(l) {
    const M = l, v = b([]), H = b(null), y = b(null), f = b([]), p = b([]), L = R(
      () => p.value.map((e) => ({ [e.id]: e })).reduce((e, t) => ({ ...e, ...t }))
    ), N = R(
      () => p.value.length ? p.value.filter((e) => !e.parent && !e.showMore) : f.value
    ), W = R(
      () => p.value.filter((e) => {
        var t;
        return e.wrapSubmenu ? e.parent && ((t = L.value[e.parent]) == null ? void 0 : t.showMore) : e.showMore;
      })
    ), O = (e) => p.value.filter((t) => t.parent === e);
    function g(e, t = null, s = !1, n = !1) {
      const u = [];
      return e.forEach((r, o) => {
        const i = U(6), k = o < e.length - 1 ? g([e[o + 1]], null, !0)[0].id : null, h = {
          ...r,
          id: i,
          ...n && { wrapSubmenu: n },
          ...k && { nextEL: k },
          ...t && { parent: t },
          ...r.submenu && {
            childs: r.submenu.map((m) => {
              const C = g([m], i, !1, r.wrapSubmenu)[0];
              return u.push(C), C.id;
            })
          }
        };
        if (h.childs && r.submenu && delete h.submenu, u.push(h), r.submenu && s) {
          const m = g(r.submenu, i);
          u.push(...m);
        }
      }), u;
    }
    const z = (e) => v.value.find((t) => t.dataset.rmenuId === e), V = () => {
      let e = f.value.filter((n) => n.childs && n.id && !n.wrap && !n.wrapSubmenu).map((n) => n.id), t = 0;
      function s(n) {
        const u = e.indexOf(n);
        return u !== -1 && e.splice(u, 1), e;
      }
      return f.value.map((n) => {
        var u;
        if (n.parent)
          return n;
        {
          const r = (u = z(n.id)) == null ? void 0 : u.offsetWidth, o = e.reduce(
            (k, h) => {
              var m;
              return k + ((m = z(h)) == null ? void 0 : m.offsetWidth);
            },
            0
          );
          t = t + r;
          const i = t + o;
          return n.childs && (e = s(n.id)), { ...n, offset: r, breakpointHide: i };
        }
      });
    }, B = () => {
      var t;
      const e = (t = H.value) == null ? void 0 : t.offsetWidth;
      p.value = f.value.map((s) => {
        var u, r, o, i;
        let n = !1;
        return (u = s.childs) != null && u.length || (n = e < s.breakpointHide + ((r = y.value) == null ? void 0 : r.offsetWidth)), (o = s.childs) != null && o.length && (s.wrap || s.wrapSubmenu) && (n = e < s.breakpointHide + ((i = y.value) == null ? void 0 : i.offsetWidth)), { ...s, showMore: !s.parent && n };
      });
    };
    return (() => {
      f.value = g(M.items), j(() => {
        f.value = V(), B(), window.addEventListener("resize", B);
      });
    })(), (e, t) => (a(), c("nav", {
      ref_key: "itemsRefs",
      ref: H,
      class: E([{ [`responsive-menu-${l.config.mode}`]: l.config.mode }, "responsive-menu"])
    }, [
      _("ul", Z, [
        (a(!0), c(I, null, x(N.value, (s, n) => {
          var u;
          return a(), c("li", {
            class: E(["responsive-menu__item", { "responsive-menu__item-submenu": (u = s.childs) == null ? void 0 : u.length }]),
            "data-rmenu-id": s.id,
            key: n,
            ref_for: !0,
            ref_key: "itemRefs",
            ref: v
          }, [
            A(w(s.label) + " ", 1),
            q,
            s.childs ? (a(), c("ul", G, [
              (a(!0), c(I, null, x(O(s.id), (r, o) => (a(), c("li", {
                class: "responsive-menu__submenu-item",
                key: o
              }, w(r.label), 1))), 128))
            ])) : X("", !0)
          ], 10, $);
        }), 128)),
        _("li", {
          class: E([
            "responsive-menu__more",
            { "responsive-menu__more-disabled": !W.value.length }
          ]),
          ref_key: "itemMoreRef",
          ref: y
        }, [
          A(w(l.config.labelMore) + " ", 1),
          J,
          _("ul", K, [
            (a(!0), c(I, null, x(W.value, (s, n) => (a(), c("li", {
              class: "responsive-menu__submenu-item",
              key: n
            }, w(s.label), 1))), 128))
          ])
        ], 2)
      ])
    ], 2));
  }
}), ee = {
  install(l) {
    l.component("ResponsiveMenu", P);
  }
};
export {
  ee as default
};
//# sourceMappingURL=vue3-responsive-menu.es.js.map
