(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  476186,
  (e) => {
    "use strict";
    e.i(785269);
    var r = e.i(322831);
    e.s([
      "useLocale",
      0,
      (e = "common") => {
        let { i18n: t, t: o } = (0, r.useTranslation)(e),
          n = Object.keys(t).length > 0;
        return { i18n: t, t: o, isLocaleReady: n };
      },
    ]);
  },
  549200,
  (e) => {
    "use strict";
    let r = (0, e.i(475254).default)("chevrons-up-down", [
      ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
      ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }],
    ]);
    e.s(["ChevronsUpDownIcon", 0, r], 549200);
  },
  995926,
  (e) => {
    "use strict";
    let r = (0, e.i(475254).default)("x", [
      ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
      ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]);
    e.s(["XIcon", 0, r], 995926);
  },
  818581,
  (e, r, t) => {
    "use strict";
    (Object.defineProperty(t, "__esModule", { value: !0 }),
      Object.defineProperty(t, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let o = e.r(271645);
    function n(e, r) {
      let t = (0, o.useRef)(null),
        n = (0, o.useRef)(null);
      return (0, o.useCallback)(
        (o) => {
          if (null === o) {
            let e = t.current;
            e && ((t.current = null), e());
            let r = n.current;
            r && ((n.current = null), r());
          } else (e && (t.current = i(e, o)), r && (n.current = i(r, o)));
        },
        [e, r]
      );
    }
    function i(e, r) {
      if ("function" != typeof e)
        return (
          (e.current = r),
          () => {
            e.current = null;
          }
        );
      {
        let t = e(r);
        return "function" == typeof t ? t : () => e(null);
      }
    }
    ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
      void 0 === t.default.__esModule &&
      (Object.defineProperty(t.default, "__esModule", { value: !0 }),
      Object.assign(t.default, t),
      (r.exports = t.default));
  },
  284508,
  (e, r, t) => {
    "use strict";
    (Object.defineProperty(t, "__esModule", { value: !0 }),
      Object.defineProperty(t, "errorOnce", {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let o = (e) => {};
  },
  522016,
  (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = {
      default: function () {
        return h;
      },
      useLinkStatus: function () {
        return y;
      },
    };
    for (var n in o) Object.defineProperty(t, n, { enumerable: !0, get: o[n] });
    let i = e.r(190809),
      l = e.r(843476),
      a = i._(e.r(271645)),
      s = e.r(195057),
      c = e.r(8372),
      d = e.r(818581),
      u = e.r(718967),
      p = e.r(405550);
    e.r(233525);
    let f = e.r(388540),
      b = e.r(769688),
      m = e.r(914135),
      g = e.r(509396);
    function h(r) {
      var t, o;
      let n,
        i,
        h,
        [y, x] = (0, a.useOptimistic)(b.IDLE_LINK_STATUS),
        w = (0, a.useRef)(null),
        {
          href: k,
          as: C,
          children: j,
          prefetch: z = null,
          passHref: P,
          replace: M,
          shallow: S,
          scroll: T,
          onClick: I,
          onMouseEnter: _,
          onTouchStart: O,
          legacyBehavior: E = !1,
          onNavigate: R,
          transitionTypes: G,
          ref: N,
          unstable_dynamicOnHover: L,
          ...A
        } = r;
      ((n = j),
        E &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, l.jsx)("a", { children: n })));
      let U = a.default.useContext(c.AppRouterContext),
        B = !1 !== z,
        D =
          !1 !== z
            ? null === (o = z) || "auto" === o
              ? g.FetchStrategy.PPR
              : g.FetchStrategy.Full
            : g.FetchStrategy.PPR,
        K = "string" == typeof (t = C || k) ? t : (0, s.formatUrl)(t);
      if (E) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 }
          );
        i = a.default.Children.only(n);
      }
      let $ = E ? i && "object" == typeof i && i.ref : N,
        F = a.default.useCallback(
          (e) => (
            null !== U && (w.current = (0, b.mountLinkInstance)(e, K, U, D, B, x)),
            () => {
              (w.current && ((0, b.unmountLinkForCurrentNavigation)(w.current), (w.current = null)),
                (0, b.unmountPrefetchableInstance)(e));
            }
          ),
          [B, K, U, D, x]
        ),
        W = {
          ref: (0, d.useMergedRef)(F, $),
          onClick(r) {
            (E || "function" != typeof I || I(r),
              E && i.props && "function" == typeof i.props.onClick && i.props.onClick(r),
              !U ||
                r.defaultPrevented ||
                (function (r, t, o, n, i, l, s) {
                  if ("u" > typeof window) {
                    let c,
                      { nodeName: d } = r.currentTarget;
                    if (
                      ("A" === d.toUpperCase() &&
                        (((c = r.currentTarget.getAttribute("target")) && "_self" !== c) ||
                          r.metaKey ||
                          r.ctrlKey ||
                          r.shiftKey ||
                          r.altKey ||
                          (r.nativeEvent && 2 === r.nativeEvent.which))) ||
                      r.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, m.isLocalURL)(t)) {
                      n && (r.preventDefault(), location.replace(t));
                      return;
                    }
                    if ((r.preventDefault(), l)) {
                      let e = !1;
                      if (
                        (l({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: u } = e.r(699781);
                    a.default.startTransition(() => {
                      u(
                        t,
                        n ? "replace" : "push",
                        !1 === i ? f.ScrollBehavior.NoScroll : f.ScrollBehavior.Default,
                        o.current,
                        s
                      );
                    });
                  }
                })(r, K, w, M, T, R, G));
          },
          onMouseEnter(e) {
            (E || "function" != typeof _ || _(e),
              E && i.props && "function" == typeof i.props.onMouseEnter && i.props.onMouseEnter(e),
              U && B && (0, b.onNavigationIntent)(e.currentTarget, !0 === L));
          },
          onTouchStart: function (e) {
            (E || "function" != typeof O || O(e),
              E && i.props && "function" == typeof i.props.onTouchStart && i.props.onTouchStart(e),
              U && B && (0, b.onNavigationIntent)(e.currentTarget, !0 === L));
          },
        };
      return (
        (0, u.isAbsoluteUrl)(K)
          ? (W.href = K)
          : (E && !P && ("a" !== i.type || "href" in i.props)) || (W.href = (0, p.addBasePath)(K)),
        (h = E ? a.default.cloneElement(i, W) : (0, l.jsx)("a", { ...A, ...W, children: n })),
        (0, l.jsx)(v.Provider, { value: y, children: h })
      );
    }
    e.r(284508);
    let v = (0, a.createContext)(b.IDLE_LINK_STATUS),
      y = () => (0, a.useContext)(v);
    ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
      void 0 === t.default.__esModule &&
      (Object.defineProperty(t.default, "__esModule", { value: !0 }),
      Object.assign(t.default, t),
      (r.exports = t.default));
  },
  384706,
  (e) => {
    "use strict";
    var r = /^\[(.+)\]$/;
    function t(e, r) {
      var t = e;
      return (
        r.split("-").forEach(function (e) {
          (t.nextPart.has(e) || t.nextPart.set(e, { nextPart: new Map(), validators: [] }),
            (t = t.nextPart.get(e)));
        }),
        t
      );
    }
    var o = /\s+/;
    function n() {
      for (var e, r, t = 0, o = ""; t < arguments.length; )
        (e = arguments[t++]) &&
          (r = (function e(r) {
            if ("string" == typeof r) return r;
            for (var t, o = "", n = 0; n < r.length; n++)
              r[n] && (t = e(r[n])) && (o && (o += " "), (o += t));
            return o;
          })(e)) &&
          (o && (o += " "), (o += r));
      return o;
    }
    function i(e) {
      var r = function (r) {
        return r[e] || [];
      };
      return ((r.isThemeGetter = !0), r);
    }
    var l = /^\[(?:([a-z-]+):)?(.+)\]$/i,
      a = /^\d+\/\d+$/,
      s = new Set(["px", "full", "screen"]),
      c = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
      d =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|^0$/,
      u = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
    function p(e) {
      return v(e) || s.has(e) || a.test(e) || f(e);
    }
    function f(e) {
      return z(e, "length", P);
    }
    function b(e) {
      return z(e, "size", M);
    }
    function m(e) {
      return z(e, "position", M);
    }
    function g(e) {
      return z(e, "url", S);
    }
    function h(e) {
      return z(e, "number", v);
    }
    function v(e) {
      return !Number.isNaN(Number(e));
    }
    function y(e) {
      return e.endsWith("%") && v(e.slice(0, -1));
    }
    function x(e) {
      return T(e) || z(e, "number", T);
    }
    function w(e) {
      return l.test(e);
    }
    function k() {
      return !0;
    }
    function C(e) {
      return c.test(e);
    }
    function j(e) {
      return z(e, "", I);
    }
    function z(e, r, t) {
      var o = l.exec(e);
      return !!o && (o[1] ? o[1] === r : t(o[2]));
    }
    function P(e) {
      return d.test(e);
    }
    function M() {
      return !1;
    }
    function S(e) {
      return e.startsWith("url(");
    }
    function T(e) {
      return Number.isInteger(Number(e));
    }
    function I(e) {
      return u.test(e);
    }
    var _ = (function () {
      for (var e, i, l, a = arguments.length, s = Array(a), c = 0; c < a; c++) s[c] = arguments[c];
      var d = function (o) {
        var n = s[0];
        return (
          (i = (e = (function (e) {
            var o, n, i, l, a, s, c, d, u, p, f, b, m, g;
            return {
              cache: (function (e) {
                if (e < 1) return { get: function () {}, set: function () {} };
                var r = 0,
                  t = new Map(),
                  o = new Map();
                function n(n, i) {
                  (t.set(n, i), ++r > e && ((r = 0), (o = t), (t = new Map())));
                }
                return {
                  get: function (e) {
                    var r = t.get(e);
                    return void 0 !== r ? r : void 0 !== (r = o.get(e)) ? (n(e, r), r) : void 0;
                  },
                  set: function (e, r) {
                    t.has(e) ? t.set(e, r) : n(e, r);
                  },
                };
              })(e.cacheSize),
              splitModifiers:
                ((n = 1 === (o = e.separator || ":").length),
                (i = o[0]),
                (l = o.length),
                function (e) {
                  for (var r, t = [], a = 0, s = 0, c = 0; c < e.length; c++) {
                    var d = e[c];
                    if (0 === a) {
                      if (d === i && (n || e.slice(c, c + l) === o)) {
                        (t.push(e.slice(s, c)), (s = c + l));
                        continue;
                      }
                      if ("/" === d) {
                        r = c;
                        continue;
                      }
                    }
                    "[" === d ? a++ : "]" === d && a--;
                  }
                  var u = 0 === t.length ? e : e.substring(s),
                    p = u.startsWith("!"),
                    f = p ? u.substring(1) : u;
                  return {
                    modifiers: t,
                    hasImportantModifier: p,
                    baseClassName: f,
                    maybePostfixModifierPosition: r && r > s ? r - s : void 0,
                  };
                }),
              ...((p = (u = e).theme),
              (f = u.prefix),
              (b = { nextPart: new Map(), validators: [] }),
              ((m = Object.entries(u.classGroups)),
              (g = f)
                ? m.map(function (e) {
                    return [
                      e[0],
                      e[1].map(function (e) {
                        return "string" == typeof e
                          ? g + e
                          : "object" == typeof e
                            ? Object.fromEntries(
                                Object.entries(e).map(function (e) {
                                  return [g + e[0], e[1]];
                                })
                              )
                            : e;
                      }),
                    ];
                  })
                : m).forEach(function (e) {
                var r = e[0];
                !(function e(r, o, n, i) {
                  r.forEach(function (r) {
                    if ("string" == typeof r) {
                      ("" === r ? o : t(o, r)).classGroupId = n;
                      return;
                    }
                    if ("function" == typeof r)
                      return r.isThemeGetter
                        ? void e(r(i), o, n, i)
                        : void o.validators.push({ validator: r, classGroupId: n });
                    Object.entries(r).forEach(function (r) {
                      var l = r[0];
                      e(r[1], t(o, l), n, i);
                    });
                  });
                })(e[1], b, r, p);
              }),
              (a = b),
              (s = e.conflictingClassGroups),
              (d = void 0 === (c = e.conflictingClassGroupModifiers) ? {} : c),
              {
                getClassGroupId: function (e) {
                  var t = e.split("-");
                  return (
                    "" === t[0] && 1 !== t.length && t.shift(),
                    (function e(r, t) {
                      if (0 === r.length) return t.classGroupId;
                      var o = r[0],
                        n = t.nextPart.get(o),
                        i = n ? e(r.slice(1), n) : void 0;
                      if (i) return i;
                      if (0 !== t.validators.length) {
                        var l = r.join("-");
                        return t.validators.find(function (e) {
                          return (0, e.validator)(l);
                        })?.classGroupId;
                      }
                    })(t, a) ||
                      (function (e) {
                        if (r.test(e)) {
                          var t = r.exec(e)[1],
                            o = t?.substring(0, t.indexOf(":"));
                          if (o) return "arbitrary.." + o;
                        }
                      })(e)
                  );
                },
                getConflictingClassGroupIds: function (e, r) {
                  var t = s[e] || [];
                  return r && d[e] ? [].concat(t, d[e]) : t;
                },
              }),
            };
          })(
            s.slice(1).reduce(function (e, r) {
              return r(e);
            }, n())
          )).cache.get),
          (l = e.cache.set),
          (d = u),
          u(o)
        );
      };
      function u(r) {
        var t,
          n,
          a,
          s,
          c,
          d = i(r);
        if (d) return d;
        var u =
          ((n = (t = e).splitModifiers),
          (a = t.getClassGroupId),
          (s = t.getConflictingClassGroupIds),
          (c = new Set()),
          r
            .trim()
            .split(o)
            .map(function (e) {
              var r = n(e),
                t = r.modifiers,
                o = r.hasImportantModifier,
                i = r.baseClassName,
                l = r.maybePostfixModifierPosition,
                s = a(l ? i.substring(0, l) : i),
                c = !!l;
              if (!s) {
                if (!l || !(s = a(i))) return { isTailwindClass: !1, originalClassName: e };
                c = !1;
              }
              var d = (function (e) {
                if (e.length <= 1) return e;
                var r = [],
                  t = [];
                return (
                  e.forEach(function (e) {
                    "[" === e[0] ? (r.push.apply(r, t.sort().concat([e])), (t = [])) : t.push(e);
                  }),
                  r.push.apply(r, t.sort()),
                  r
                );
              })(t).join(":");
              return {
                isTailwindClass: !0,
                modifierId: o ? d + "!" : d,
                classGroupId: s,
                originalClassName: e,
                hasPostfixModifier: c,
              };
            })
            .reverse()
            .filter(function (e) {
              if (!e.isTailwindClass) return !0;
              var r = e.modifierId,
                t = e.classGroupId,
                o = e.hasPostfixModifier,
                n = r + t;
              return (
                !c.has(n) &&
                (c.add(n),
                s(t, o).forEach(function (e) {
                  return c.add(r + e);
                }),
                !0)
              );
            })
            .reverse()
            .map(function (e) {
              return e.originalClassName;
            })
            .join(" "));
        return (l(r, u), u);
      }
      return function () {
        return d(n.apply(null, arguments));
      };
    })(function () {
      var e = i("colors"),
        r = i("spacing"),
        t = i("blur"),
        o = i("brightness"),
        n = i("borderColor"),
        l = i("borderRadius"),
        a = i("borderSpacing"),
        s = i("borderWidth"),
        c = i("contrast"),
        d = i("grayscale"),
        u = i("hueRotate"),
        z = i("invert"),
        P = i("gap"),
        M = i("gradientColorStops"),
        S = i("gradientColorStopPositions"),
        T = i("inset"),
        I = i("margin"),
        _ = i("opacity"),
        O = i("padding"),
        E = i("saturate"),
        R = i("scale"),
        G = i("sepia"),
        N = i("skew"),
        L = i("space"),
        A = i("translate"),
        U = function () {
          return ["auto", "contain", "none"];
        },
        B = function () {
          return ["auto", "hidden", "clip", "visible", "scroll"];
        },
        D = function () {
          return ["auto", r];
        },
        K = function () {
          return ["", p];
        },
        $ = function () {
          return ["auto", v, w];
        },
        F = function () {
          return [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ];
        },
        W = function () {
          return ["solid", "dashed", "dotted", "double", "none"];
        },
        X = function () {
          return [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
            "plus-lighter",
          ];
        },
        q = function () {
          return ["start", "end", "center", "between", "around", "evenly", "stretch"];
        },
        J = function () {
          return ["", "0", w];
        },
        H = function () {
          return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
        },
        Q = function () {
          return [v, h];
        },
        V = function () {
          return [v, w];
        };
      return {
        cacheSize: 500,
        theme: {
          colors: [k],
          spacing: [p],
          blur: ["none", "", C, f],
          brightness: Q(),
          borderColor: [e],
          borderRadius: ["none", "", "full", C, f],
          borderSpacing: [r],
          borderWidth: K(),
          contrast: Q(),
          grayscale: J(),
          hueRotate: V(),
          invert: J(),
          gap: [r],
          gradientColorStops: [e],
          gradientColorStopPositions: [y, f],
          inset: D(),
          margin: D(),
          opacity: Q(),
          padding: [r],
          saturate: Q(),
          scale: Q(),
          sepia: J(),
          skew: V(),
          space: [r],
          translate: [r],
        },
        classGroups: {
          aspect: [{ aspect: ["auto", "square", "video", w] }],
          container: ["container"],
          columns: [{ columns: [C] }],
          "break-after": [{ "break-after": H() }],
          "break-before": [{ "break-before": H() }],
          "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
          "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
          box: [{ box: ["border", "content"] }],
          display: [
            "block",
            "inline-block",
            "inline",
            "flex",
            "inline-flex",
            "table",
            "inline-table",
            "table-caption",
            "table-cell",
            "table-column",
            "table-column-group",
            "table-footer-group",
            "table-header-group",
            "table-row-group",
            "table-row",
            "flow-root",
            "grid",
            "inline-grid",
            "contents",
            "list-item",
            "hidden",
          ],
          float: [{ float: ["right", "left", "none"] }],
          clear: [{ clear: ["left", "right", "both", "none"] }],
          isolation: ["isolate", "isolation-auto"],
          "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
          "object-position": [{ object: [].concat(F(), [w]) }],
          overflow: [{ overflow: B() }],
          "overflow-x": [{ "overflow-x": B() }],
          "overflow-y": [{ "overflow-y": B() }],
          overscroll: [{ overscroll: U() }],
          "overscroll-x": [{ "overscroll-x": U() }],
          "overscroll-y": [{ "overscroll-y": U() }],
          position: ["static", "fixed", "absolute", "relative", "sticky"],
          inset: [{ inset: [T] }],
          "inset-x": [{ "inset-x": [T] }],
          "inset-y": [{ "inset-y": [T] }],
          start: [{ start: [T] }],
          end: [{ end: [T] }],
          top: [{ top: [T] }],
          right: [{ right: [T] }],
          bottom: [{ bottom: [T] }],
          left: [{ left: [T] }],
          visibility: ["visible", "invisible", "collapse"],
          z: [{ z: ["auto", x] }],
          basis: [{ basis: D() }],
          "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
          "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
          flex: [{ flex: ["1", "auto", "initial", "none", w] }],
          grow: [{ grow: J() }],
          shrink: [{ shrink: J() }],
          order: [{ order: ["first", "last", "none", x] }],
          "grid-cols": [{ "grid-cols": [k] }],
          "col-start-end": [{ col: ["auto", { span: [x] }, w] }],
          "col-start": [{ "col-start": $() }],
          "col-end": [{ "col-end": $() }],
          "grid-rows": [{ "grid-rows": [k] }],
          "row-start-end": [{ row: ["auto", { span: [x] }, w] }],
          "row-start": [{ "row-start": $() }],
          "row-end": [{ "row-end": $() }],
          "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
          "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", w] }],
          "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", w] }],
          gap: [{ gap: [P] }],
          "gap-x": [{ "gap-x": [P] }],
          "gap-y": [{ "gap-y": [P] }],
          "justify-content": [{ justify: ["normal"].concat(q()) }],
          "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }],
          "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }],
          "align-content": [{ content: ["normal"].concat(q(), ["baseline"]) }],
          "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }],
          "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }],
          "place-content": [{ "place-content": [].concat(q(), ["baseline"]) }],
          "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }],
          "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }],
          p: [{ p: [O] }],
          px: [{ px: [O] }],
          py: [{ py: [O] }],
          ps: [{ ps: [O] }],
          pe: [{ pe: [O] }],
          pt: [{ pt: [O] }],
          pr: [{ pr: [O] }],
          pb: [{ pb: [O] }],
          pl: [{ pl: [O] }],
          m: [{ m: [I] }],
          mx: [{ mx: [I] }],
          my: [{ my: [I] }],
          ms: [{ ms: [I] }],
          me: [{ me: [I] }],
          mt: [{ mt: [I] }],
          mr: [{ mr: [I] }],
          mb: [{ mb: [I] }],
          ml: [{ ml: [I] }],
          "space-x": [{ "space-x": [L] }],
          "space-x-reverse": ["space-x-reverse"],
          "space-y": [{ "space-y": [L] }],
          "space-y-reverse": ["space-y-reverse"],
          w: [{ w: ["auto", "min", "max", "fit", r] }],
          "min-w": [{ "min-w": ["min", "max", "fit", p] }],
          "max-w": [
            { "max-w": ["0", "none", "full", "min", "max", "fit", "prose", { screen: [C] }, C, f] },
          ],
          h: [{ h: [r, "auto", "min", "max", "fit"] }],
          "min-h": [{ "min-h": ["min", "max", "fit", p] }],
          "max-h": [{ "max-h": [r, "min", "max", "fit"] }],
          "font-size": [{ text: ["base", C, f] }],
          "font-smoothing": ["antialiased", "subpixel-antialiased"],
          "font-style": ["italic", "not-italic"],
          "font-weight": [
            {
              font: [
                "thin",
                "extralight",
                "light",
                "normal",
                "medium",
                "semibold",
                "bold",
                "extrabold",
                "black",
                h,
              ],
            },
          ],
          "font-family": [{ font: [k] }],
          "fvn-normal": ["normal-nums"],
          "fvn-ordinal": ["ordinal"],
          "fvn-slashed-zero": ["slashed-zero"],
          "fvn-figure": ["lining-nums", "oldstyle-nums"],
          "fvn-spacing": ["proportional-nums", "tabular-nums"],
          "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
          tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", f] }],
          "line-clamp": [{ "line-clamp": ["none", v, h] }],
          leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", p] }],
          "list-image": [{ "list-image": ["none", w] }],
          "list-style-type": [{ list: ["none", "disc", "decimal", w] }],
          "list-style-position": [{ list: ["inside", "outside"] }],
          "placeholder-color": [{ placeholder: [e] }],
          "placeholder-opacity": [{ "placeholder-opacity": [_] }],
          "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
          "text-color": [{ text: [e] }],
          "text-opacity": [{ "text-opacity": [_] }],
          "text-decoration": ["underline", "overline", "line-through", "no-underline"],
          "text-decoration-style": [{ decoration: [].concat(W(), ["wavy"]) }],
          "text-decoration-thickness": [{ decoration: ["auto", "from-font", p] }],
          "underline-offset": [{ "underline-offset": ["auto", p] }],
          "text-decoration-color": [{ decoration: [e] }],
          "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
          "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
          indent: [{ indent: [r] }],
          "vertical-align": [
            {
              align: [
                "baseline",
                "top",
                "middle",
                "bottom",
                "text-top",
                "text-bottom",
                "sub",
                "super",
                f,
              ],
            },
          ],
          whitespace: [
            { whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] },
          ],
          break: [{ break: ["normal", "words", "all", "keep"] }],
          hyphens: [{ hyphens: ["none", "manual", "auto"] }],
          content: [{ content: ["none", w] }],
          "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
          "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
          "bg-opacity": [{ "bg-opacity": [_] }],
          "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
          "bg-position": [{ bg: [].concat(F(), [m]) }],
          "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
          "bg-size": [{ bg: ["auto", "cover", "contain", b] }],
          "bg-image": [
            { bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, g] },
          ],
          "bg-color": [{ bg: [e] }],
          "gradient-from-pos": [{ from: [S] }],
          "gradient-via-pos": [{ via: [S] }],
          "gradient-to-pos": [{ to: [S] }],
          "gradient-from": [{ from: [M] }],
          "gradient-via": [{ via: [M] }],
          "gradient-to": [{ to: [M] }],
          rounded: [{ rounded: [l] }],
          "rounded-s": [{ "rounded-s": [l] }],
          "rounded-e": [{ "rounded-e": [l] }],
          "rounded-t": [{ "rounded-t": [l] }],
          "rounded-r": [{ "rounded-r": [l] }],
          "rounded-b": [{ "rounded-b": [l] }],
          "rounded-l": [{ "rounded-l": [l] }],
          "rounded-ss": [{ "rounded-ss": [l] }],
          "rounded-se": [{ "rounded-se": [l] }],
          "rounded-ee": [{ "rounded-ee": [l] }],
          "rounded-es": [{ "rounded-es": [l] }],
          "rounded-tl": [{ "rounded-tl": [l] }],
          "rounded-tr": [{ "rounded-tr": [l] }],
          "rounded-br": [{ "rounded-br": [l] }],
          "rounded-bl": [{ "rounded-bl": [l] }],
          "border-w": [{ border: [s] }],
          "border-w-x": [{ "border-x": [s] }],
          "border-w-y": [{ "border-y": [s] }],
          "border-w-s": [{ "border-s": [s] }],
          "border-w-e": [{ "border-e": [s] }],
          "border-w-t": [{ "border-t": [s] }],
          "border-w-r": [{ "border-r": [s] }],
          "border-w-b": [{ "border-b": [s] }],
          "border-w-l": [{ "border-l": [s] }],
          "border-opacity": [{ "border-opacity": [_] }],
          "border-style": [{ border: [].concat(W(), ["hidden"]) }],
          "divide-x": [{ "divide-x": [s] }],
          "divide-x-reverse": ["divide-x-reverse"],
          "divide-y": [{ "divide-y": [s] }],
          "divide-y-reverse": ["divide-y-reverse"],
          "divide-opacity": [{ "divide-opacity": [_] }],
          "divide-style": [{ divide: W() }],
          "border-color": [{ border: [n] }],
          "border-color-x": [{ "border-x": [n] }],
          "border-color-y": [{ "border-y": [n] }],
          "border-color-t": [{ "border-t": [n] }],
          "border-color-r": [{ "border-r": [n] }],
          "border-color-b": [{ "border-b": [n] }],
          "border-color-l": [{ "border-l": [n] }],
          "divide-color": [{ divide: [n] }],
          "outline-style": [{ outline: [""].concat(W()) }],
          "outline-offset": [{ "outline-offset": [p] }],
          "outline-w": [{ outline: [p] }],
          "outline-color": [{ outline: [e] }],
          "ring-w": [{ ring: K() }],
          "ring-w-inset": ["ring-inset"],
          "ring-color": [{ ring: [e] }],
          "ring-opacity": [{ "ring-opacity": [_] }],
          "ring-offset-w": [{ "ring-offset": [p] }],
          "ring-offset-color": [{ "ring-offset": [e] }],
          shadow: [{ shadow: ["", "inner", "none", C, j] }],
          "shadow-color": [{ shadow: [k] }],
          opacity: [{ opacity: [_] }],
          "mix-blend": [{ "mix-blend": X() }],
          "bg-blend": [{ "bg-blend": X() }],
          filter: [{ filter: ["", "none"] }],
          blur: [{ blur: [t] }],
          brightness: [{ brightness: [o] }],
          contrast: [{ contrast: [c] }],
          "drop-shadow": [{ "drop-shadow": ["", "none", C, w] }],
          grayscale: [{ grayscale: [d] }],
          "hue-rotate": [{ "hue-rotate": [u] }],
          invert: [{ invert: [z] }],
          saturate: [{ saturate: [E] }],
          sepia: [{ sepia: [G] }],
          "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
          "backdrop-blur": [{ "backdrop-blur": [t] }],
          "backdrop-brightness": [{ "backdrop-brightness": [o] }],
          "backdrop-contrast": [{ "backdrop-contrast": [c] }],
          "backdrop-grayscale": [{ "backdrop-grayscale": [d] }],
          "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
          "backdrop-invert": [{ "backdrop-invert": [z] }],
          "backdrop-opacity": [{ "backdrop-opacity": [_] }],
          "backdrop-saturate": [{ "backdrop-saturate": [E] }],
          "backdrop-sepia": [{ "backdrop-sepia": [G] }],
          "border-collapse": [{ border: ["collapse", "separate"] }],
          "border-spacing": [{ "border-spacing": [a] }],
          "border-spacing-x": [{ "border-spacing-x": [a] }],
          "border-spacing-y": [{ "border-spacing-y": [a] }],
          "table-layout": [{ table: ["auto", "fixed"] }],
          caption: [{ caption: ["top", "bottom"] }],
          transition: [
            { transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", w] },
          ],
          duration: [{ duration: V() }],
          ease: [{ ease: ["linear", "in", "out", "in-out", w] }],
          delay: [{ delay: V() }],
          animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", w] }],
          transform: [{ transform: ["", "gpu", "none"] }],
          scale: [{ scale: [R] }],
          "scale-x": [{ "scale-x": [R] }],
          "scale-y": [{ "scale-y": [R] }],
          rotate: [{ rotate: [x, w] }],
          "translate-x": [{ "translate-x": [A] }],
          "translate-y": [{ "translate-y": [A] }],
          "skew-x": [{ "skew-x": [N] }],
          "skew-y": [{ "skew-y": [N] }],
          "transform-origin": [
            {
              origin: [
                "center",
                "top",
                "top-right",
                "right",
                "bottom-right",
                "bottom",
                "bottom-left",
                "left",
                "top-left",
                w,
              ],
            },
          ],
          accent: [{ accent: ["auto", e] }],
          appearance: ["appearance-none"],
          cursor: [
            {
              cursor: [
                "auto",
                "default",
                "pointer",
                "wait",
                "text",
                "move",
                "help",
                "not-allowed",
                "none",
                "context-menu",
                "progress",
                "cell",
                "crosshair",
                "vertical-text",
                "alias",
                "copy",
                "no-drop",
                "grab",
                "grabbing",
                "all-scroll",
                "col-resize",
                "row-resize",
                "n-resize",
                "e-resize",
                "s-resize",
                "w-resize",
                "ne-resize",
                "nw-resize",
                "se-resize",
                "sw-resize",
                "ew-resize",
                "ns-resize",
                "nesw-resize",
                "nwse-resize",
                "zoom-in",
                "zoom-out",
                w,
              ],
            },
          ],
          "caret-color": [{ caret: [e] }],
          "pointer-events": [{ "pointer-events": ["none", "auto"] }],
          resize: [{ resize: ["none", "y", "x", ""] }],
          "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
          "scroll-m": [{ "scroll-m": [r] }],
          "scroll-mx": [{ "scroll-mx": [r] }],
          "scroll-my": [{ "scroll-my": [r] }],
          "scroll-ms": [{ "scroll-ms": [r] }],
          "scroll-me": [{ "scroll-me": [r] }],
          "scroll-mt": [{ "scroll-mt": [r] }],
          "scroll-mr": [{ "scroll-mr": [r] }],
          "scroll-mb": [{ "scroll-mb": [r] }],
          "scroll-ml": [{ "scroll-ml": [r] }],
          "scroll-p": [{ "scroll-p": [r] }],
          "scroll-px": [{ "scroll-px": [r] }],
          "scroll-py": [{ "scroll-py": [r] }],
          "scroll-ps": [{ "scroll-ps": [r] }],
          "scroll-pe": [{ "scroll-pe": [r] }],
          "scroll-pt": [{ "scroll-pt": [r] }],
          "scroll-pr": [{ "scroll-pr": [r] }],
          "scroll-pb": [{ "scroll-pb": [r] }],
          "scroll-pl": [{ "scroll-pl": [r] }],
          "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
          "snap-stop": [{ snap: ["normal", "always"] }],
          "snap-type": [{ snap: ["none", "x", "y", "both"] }],
          "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
          touch: [
            {
              touch: [
                "auto",
                "none",
                "pinch-zoom",
                "manipulation",
                { pan: ["x", "left", "right", "y", "up", "down"] },
              ],
            },
          ],
          select: [{ select: ["none", "text", "all", "auto"] }],
          "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", w] }],
          fill: [{ fill: [e, "none"] }],
          "stroke-w": [{ stroke: [p, h] }],
          stroke: [{ stroke: [e, "none"] }],
          sr: ["sr-only", "not-sr-only"],
        },
        conflictingClassGroups: {
          overflow: ["overflow-x", "overflow-y"],
          overscroll: ["overscroll-x", "overscroll-y"],
          inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
          "inset-x": ["right", "left"],
          "inset-y": ["top", "bottom"],
          flex: ["basis", "grow", "shrink"],
          gap: ["gap-x", "gap-y"],
          p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
          px: ["pr", "pl"],
          py: ["pt", "pb"],
          m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
          mx: ["mr", "ml"],
          my: ["mt", "mb"],
          "font-size": ["leading"],
          "fvn-normal": [
            "fvn-ordinal",
            "fvn-slashed-zero",
            "fvn-figure",
            "fvn-spacing",
            "fvn-fraction",
          ],
          "fvn-ordinal": ["fvn-normal"],
          "fvn-slashed-zero": ["fvn-normal"],
          "fvn-figure": ["fvn-normal"],
          "fvn-spacing": ["fvn-normal"],
          "fvn-fraction": ["fvn-normal"],
          rounded: [
            "rounded-s",
            "rounded-e",
            "rounded-t",
            "rounded-r",
            "rounded-b",
            "rounded-l",
            "rounded-ss",
            "rounded-se",
            "rounded-ee",
            "rounded-es",
            "rounded-tl",
            "rounded-tr",
            "rounded-br",
            "rounded-bl",
          ],
          "rounded-s": ["rounded-ss", "rounded-es"],
          "rounded-e": ["rounded-se", "rounded-ee"],
          "rounded-t": ["rounded-tl", "rounded-tr"],
          "rounded-r": ["rounded-tr", "rounded-br"],
          "rounded-b": ["rounded-br", "rounded-bl"],
          "rounded-l": ["rounded-tl", "rounded-bl"],
          "border-spacing": ["border-spacing-x", "border-spacing-y"],
          "border-w": [
            "border-w-s",
            "border-w-e",
            "border-w-t",
            "border-w-r",
            "border-w-b",
            "border-w-l",
          ],
          "border-w-x": ["border-w-r", "border-w-l"],
          "border-w-y": ["border-w-t", "border-w-b"],
          "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
          "border-color-x": ["border-color-r", "border-color-l"],
          "border-color-y": ["border-color-t", "border-color-b"],
          "scroll-m": [
            "scroll-mx",
            "scroll-my",
            "scroll-ms",
            "scroll-me",
            "scroll-mt",
            "scroll-mr",
            "scroll-mb",
            "scroll-ml",
          ],
          "scroll-mx": ["scroll-mr", "scroll-ml"],
          "scroll-my": ["scroll-mt", "scroll-mb"],
          "scroll-p": [
            "scroll-px",
            "scroll-py",
            "scroll-ps",
            "scroll-pe",
            "scroll-pt",
            "scroll-pr",
            "scroll-pb",
            "scroll-pl",
          ],
          "scroll-px": ["scroll-pr", "scroll-pl"],
          "scroll-py": ["scroll-pt", "scroll-pb"],
        },
        conflictingClassGroupModifiers: { "font-size": ["leading"] },
      };
    });
    e.s(["twMerge", 0, _], 384706);
  },
  255889,
  (e) => {
    "use strict";
    var r = e.i(384706);
    e.s([
      "default",
      0,
      function (...e) {
        return (0, r.twMerge)(e.filter(Boolean).join(" "));
      },
    ]);
  },
]);
