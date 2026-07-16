(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  211577,
  410160,
  394257,
  (e) => {
    "use strict";
    function t(e) {
      return (t =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function n(e) {
      var n = (function (e, n) {
        if ("object" != t(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var a = r.call(e, n || "default");
          if ("object" != t(a)) return a;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === n ? String : Number)(e);
      })(e, "string");
      return "symbol" == t(n) ? n : n + "";
    }
    (e.s(["default", () => t], 410160),
      e.s(["default", 0, n], 394257),
      e.s(
        [
          "default",
          0,
          function (e, t, r) {
            return (
              (t = n(t)) in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          },
        ],
        211577
      ));
  },
  915874,
  (e) => {
    "use strict";
    e.s([
      "default",
      0,
      function (e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r];
          }
        return n;
      },
    ]);
  },
  703923,
  (e) => {
    "use strict";
    var t = e.i(915874);
    e.s([
      "default",
      0,
      function (e, n) {
        if (null == e) return {};
        var r,
          a,
          o = (0, t.default)(e, n);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            ((r = i[a]),
              -1 === n.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
        }
        return o;
      },
    ]);
  },
  392221,
  949616,
  713882,
  (e) => {
    "use strict";
    function t(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function n(e, n) {
      if (e) {
        if ("string" == typeof e) return t(e, n);
        var r = {}.toString.call(e).slice(8, -1);
        return (
          "Object" === r && e.constructor && (r = e.constructor.name),
          "Map" === r || "Set" === r
            ? Array.from(e)
            : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? t(e, n)
              : void 0
        );
      }
    }
    (e.s(["default", 0, t], 949616),
      e.s(["default", 0, n], 713882),
      e.s(
        [
          "default",
          0,
          function (e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                var n =
                  null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (null != n) {
                  var r,
                    a,
                    o,
                    i,
                    s = [],
                    c = !0,
                    l = !1;
                  try {
                    if (((o = (n = n.call(e)).next), 0 === t)) {
                      if (Object(n) !== n) return;
                      c = !1;
                    } else
                      for (
                        ;
                        !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== t);
                        c = !0
                      );
                  } catch (e) {
                    ((l = !0), (a = e));
                  } finally {
                    try {
                      if (!c && null != n.return && ((i = n.return()), Object(i) !== i)) return;
                    } finally {
                      if (l) throw a;
                    }
                  }
                  return s;
                }
              })(e, t) ||
              n(e, t) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          },
        ],
        392221
      ));
  },
  2008,
  (e, t, n) => {
    t.exports = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    };
  },
  785269,
  278409,
  233848,
  402607,
  345771,
  322831,
  200071,
  (e) => {
    "use strict";
    var t,
      n = e.i(211577),
      r = e.i(703923),
      a = e.i(271645),
      o = e.i(410160),
      i = e.i(2008),
      s = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
    function c(e) {
      var t = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] },
        n = e.match(/<\/?([^\s]+?)[/\s>]/);
      if (
        n &&
        ((t.name = n[1]),
        (i.default[n[1]] || "/" === e.charAt(e.length - 2)) && (t.voidElement = !0),
        t.name.startsWith("!--"))
      ) {
        var r = e.indexOf("-->");
        return { type: "comment", comment: -1 !== r ? e.slice(4, r) : "" };
      }
      for (var a = new RegExp(s), o = null; null !== (o = a.exec(e)); )
        if (o[0].trim())
          if (o[1]) {
            var c = o[1].trim(),
              l = [c, ""];
            (c.indexOf("=") > -1 && (l = c.split("=")), (t.attrs[l[0]] = l[1]), a.lastIndex--);
          } else o[2] && (t.attrs[o[2]] = o[3].trim().substring(1, o[3].length - 1));
      return t;
    }
    var l = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
      u = /^\s*$/,
      d = Object.create(null);
    let f = function (e, t) {
      (t || (t = {}), t.components || (t.components = d));
      var n,
        r = [],
        a = [],
        o = -1,
        i = !1;
      if (0 !== e.indexOf("<")) {
        var s = e.indexOf("<");
        r.push({ type: "text", content: -1 === s ? e : e.substring(0, s) });
      }
      return (
        e.replace(l, function (s, l) {
          if (i) {
            if (s !== "</" + n.name + ">") return;
            i = !1;
          }
          var d,
            f = "/" !== s.charAt(1),
            p = s.startsWith("<!--"),
            g = l + s.length,
            v = e.charAt(g);
          if (p) {
            var b = c(s);
            return (o < 0 ? r.push(b) : (d = a[o]).children.push(b), r);
          }
          if (
            (f &&
              (o++,
              "tag" === (n = c(s)).type &&
                t.components[n.name] &&
                ((n.type = "component"), (i = !0)),
              n.voidElement ||
                i ||
                !v ||
                "<" === v ||
                n.children.push({ type: "text", content: e.slice(g, e.indexOf("<", g)) }),
              0 === o && r.push(n),
              (d = a[o - 1]) && d.children.push(n),
              (a[o] = n)),
            (!f || n.voidElement) &&
              (o > -1 && (n.voidElement || n.name === s.slice(2, -1)) && (n = -1 == --o ? r : a[o]),
              !i && "<" !== v && v))
          ) {
            d = -1 === o ? r : a[o].children;
            var m = e.indexOf("<", g),
              h = e.slice(g, -1 === m ? void 0 : m);
            (u.test(h) && (h = " "),
              ((m > -1 && o + d.length >= 0) || " " !== h) && d.push({ type: "text", content: h }));
          }
        }),
        r
      );
    };
    function p() {
      if (console && console.warn) {
        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        ("string" == typeof n[0] && (n[0] = "react-i18next:: ".concat(n[0])),
          (e = console).warn.apply(e, n));
      }
    }
    var g = {};
    function v() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      ("string" == typeof t[0] && g[t[0]]) ||
        ("string" == typeof t[0] && (g[t[0]] = new Date()), p.apply(void 0, t));
    }
    var b = function (e, t) {
      return function () {
        e.isInitialized
          ? t()
          : e.on("initialized", function n() {
              (setTimeout(function () {
                e.off("initialized", n);
              }, 0),
                t());
            });
      };
    };
    function m(e, t, n) {
      e.loadNamespaces(t, b(e, n));
    }
    function h(e, t, n, r) {
      ("string" == typeof n && (n = [n]),
        n.forEach(function (t) {
          0 > e.options.ns.indexOf(t) && e.options.ns.push(t);
        }),
        e.loadLanguages(t, b(e, r)));
    }
    var y =
        /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
      O = {
        "&amp;": "&",
        "&#38;": "&",
        "&lt;": "<",
        "&#60;": "<",
        "&gt;": ">",
        "&#62;": ">",
        "&apos;": "'",
        "&#39;": "'",
        "&quot;": '"',
        "&#34;": '"',
        "&nbsp;": " ",
        "&#160;": " ",
        "&copy;": "©",
        "&#169;": "©",
        "&reg;": "®",
        "&#174;": "®",
        "&hellip;": "…",
        "&#8230;": "…",
        "&#x2F;": "/",
        "&#47;": "/",
      },
      x = function (e) {
        return O[e];
      };
    function w(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r));
      }
      return n;
    }
    function j(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? w(Object(r), !0).forEach(function (t) {
              (0, n.default)(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : w(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    var k = {
        bindI18n: "languageChanged",
        bindI18nStore: "",
        transEmptyNodeValue: "",
        transSupportBasicHtmlNodes: !0,
        transWrapTextNodes: "",
        transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
        useSuspense: !0,
        unescape: function (e) {
          return e.replace(y, x);
        },
      },
      E = ["format"],
      P = [
        "children",
        "count",
        "parent",
        "i18nKey",
        "context",
        "tOptions",
        "values",
        "defaults",
        "components",
        "ns",
        "i18n",
        "t",
        "shouldUnescape",
      ];
    function N(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r));
      }
      return n;
    }
    function S(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? N(Object(r), !0).forEach(function (t) {
              (0, n.default)(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : N(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    function z(e, t) {
      if (!e) return !1;
      var n = e.props ? e.props.children : e.children;
      return t ? n.length > 0 : !!n;
    }
    function A(e) {
      return e ? (e.props ? e.props.children : e.children) : [];
    }
    function C(e) {
      return Array.isArray(e) ? e : [e];
    }
    function _(e, t) {
      if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
    }
    e.s(["default", 0, _], 278409);
    var R = e.i(394257);
    function T(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        ((r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, (0, R.default)(r.key), r));
      }
    }
    function I(e, t, n) {
      return (
        t && T(e.prototype, t),
        n && T(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    (e.s(["default", 0, I], 233848),
      e.s(
        [
          "initReactI18next",
          0,
          {
            type: "3rdParty",
            init: function (e) {
              (!(function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                k = j(j({}, k), e);
              })(e.options.react),
                (t = e));
            },
          },
        ],
        402607
      ));
    var B = (0, a.createContext)(),
      M = (function () {
        function e() {
          (_(this, e), (this.usedNamespaces = {}));
        }
        return (
          I(e, [
            {
              key: "addUsedNamespaces",
              value: function (e) {
                var t = this;
                e.forEach(function (e) {
                  t.usedNamespaces[e] || (t.usedNamespaces[e] = !0);
                });
              },
            },
            {
              key: "getUsedNamespaces",
              value: function () {
                return Object.keys(this.usedNamespaces);
              },
            },
          ]),
          e
        );
      })(),
      L = [
        "children",
        "count",
        "parent",
        "i18nKey",
        "context",
        "tOptions",
        "values",
        "defaults",
        "components",
        "ns",
        "i18n",
        "t",
        "shouldUnescape",
      ];
    function U(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r));
      }
      return n;
    }
    e.s(
      [
        "Trans",
        0,
        function (e) {
          var i = e.children,
            s = e.count,
            c = e.parent,
            l = e.i18nKey,
            u = e.context,
            d = e.tOptions,
            g = e.values,
            b = e.defaults,
            m = e.components,
            h = e.ns,
            y = e.i18n,
            O = e.t,
            x = e.shouldUnescape,
            w = (0, r.default)(e, L),
            j = (0, a.useContext)(B) || {},
            N = j.i18n,
            _ = j.defaultNS,
            R = y || N || t,
            T = O || (R && R.t.bind(R));
          return (function (e) {
            var n = e.children,
              i = e.count,
              s = e.parent,
              c = e.i18nKey,
              l = e.context,
              u = e.tOptions,
              d = void 0 === u ? {} : u,
              g = e.values,
              b = e.defaults,
              m = e.components,
              h = e.ns,
              y = e.i18n,
              O = e.t,
              x = e.shouldUnescape,
              w = (0, r.default)(e, P),
              j = y || t;
            if (!j)
              return (
                v("You will need to pass in an i18next instance by using i18nextReactModule"),
                n
              );
            var N =
              O ||
              j.t.bind(j) ||
              function (e) {
                return e;
              };
            l && (d.context = l);
            var _ = S(S({}, k), j.options && j.options.react),
              R = h || N.ns || (j.options && j.options.defaultNS);
            R = "string" == typeof R ? [R] : R || ["translation"];
            var T =
                b ||
                (function e(t, n) {
                  if (!t) return "";
                  var i = "",
                    s = C(t),
                    c =
                      n.transSupportBasicHtmlNodes && n.transKeepBasicHtmlNodesFor
                        ? n.transKeepBasicHtmlNodesFor
                        : [];
                  return (
                    s.forEach(function (t, s) {
                      if ("string" == typeof t) i += "".concat(t);
                      else if ((0, a.isValidElement)(t)) {
                        var l = Object.keys(t.props).length,
                          u = c.indexOf(t.type) > -1,
                          d = t.props.children;
                        if (!d && u && 0 === l) i += "<".concat(t.type, "/>");
                        else if (d || (u && 0 === l))
                          if (t.props.i18nIsDynamicList) i += "<".concat(s, "></").concat(s, ">");
                          else if (u && 1 === l && "string" == typeof d)
                            i += "<".concat(t.type, ">").concat(d, "</").concat(t.type, ">");
                          else {
                            var f = e(d, n);
                            i += "<".concat(s, ">").concat(f, "</").concat(s, ">");
                          }
                        else i += "<".concat(s, "></").concat(s, ">");
                      } else if (null === t)
                        p(
                          "Trans: the passed in value is invalid - seems you passed in a null child."
                        );
                      else if ("object" === (0, o.default)(t)) {
                        var g = t.format,
                          v = Object.keys((0, r.default)(t, E));
                        if (1 === v.length) {
                          var b = g ? "".concat(v[0], ", ").concat(g) : v[0];
                          i += "{{".concat(b, "}}");
                        } else
                          p(
                            "react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",
                            t
                          );
                      } else
                        p(
                          "Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",
                          t
                        );
                    }),
                    i
                  );
                })(n, _) ||
                _.transEmptyNodeValue ||
                c,
              I = _.hashTransKey,
              B = c || (I ? I(T) : T),
              M = g
                ? d.interpolation
                : {
                    interpolation: S(S({}, d.interpolation), {}, { prefix: "#$?", suffix: "?$#" }),
                  },
              L = S(S(S(S({}, d), {}, { count: i }, g), M), {}, { defaultValue: T, ns: R }),
              U = (function (e, t, n, r, i, s) {
                if ("" === t) return [];
                var c = r.transKeepBasicHtmlNodesFor || [],
                  l = t && new RegExp(c.join("|")).test(t);
                if (!e && !l) return [t];
                var u = {};
                !(function e(t) {
                  C(t).forEach(function (t) {
                    "string" != typeof t &&
                      (z(t)
                        ? e(A(t))
                        : "object" !== (0, o.default)(t) ||
                          (0, a.isValidElement)(t) ||
                          Object.assign(u, t));
                  });
                })(e);
                var d = f("<0>".concat(t, "</0>")),
                  p = S(S({}, u), i);
                function g(e, t, n) {
                  var r = A(e),
                    o = b(r, t.children, n);
                  return "[object Array]" === Object.prototype.toString.call(r) &&
                    r.every(function (e) {
                      return (0, a.isValidElement)(e);
                    }) &&
                    0 === o.length
                    ? r
                    : o;
                }
                function v(e, t, n, r, o) {
                  (e.dummy && (e.children = t),
                    n.push(
                      (0, a.cloneElement)(e, S(S({}, e.props), {}, { key: r }), o ? void 0 : t)
                    ));
                }
                function b(t, i, u) {
                  var d = C(t);
                  return C(i).reduce(function (t, i, f) {
                    var m =
                      i.children &&
                      i.children[0] &&
                      i.children[0].content &&
                      n.services.interpolator.interpolate(i.children[0].content, p, n.language);
                    if ("tag" === i.type) {
                      var h,
                        y,
                        O,
                        x = d[parseInt(i.name, 10)];
                      (!x && 1 === u.length && u[0][i.name] && (x = u[0][i.name]), x || (x = {}));
                      var w =
                          0 !== Object.keys(i.attrs).length
                            ? ((h = { props: i.attrs }),
                              ((O = S({}, (y = x))).props = Object.assign(h.props, y.props)),
                              O)
                            : x,
                        j = (0, a.isValidElement)(w),
                        k = j && z(i, !0) && !i.voidElement,
                        E = l && "object" === (0, o.default)(w) && w.dummy && !j,
                        P =
                          "object" === (0, o.default)(e) &&
                          null !== e &&
                          Object.hasOwnProperty.call(e, i.name);
                      if ("string" == typeof w) {
                        var N = n.services.interpolator.interpolate(w, p, n.language);
                        t.push(N);
                      } else if (z(w) || k) {
                        var A = g(w, i, u);
                        v(w, A, t, f);
                      } else if (E) {
                        var C = b(d, i.children, u);
                        t.push((0, a.cloneElement)(w, S(S({}, w.props), {}, { key: f }), C));
                      } else if (Number.isNaN(parseFloat(i.name)))
                        if (P) {
                          var _ = g(w, i, u);
                          v(w, _, t, f, i.voidElement);
                        } else if (r.transSupportBasicHtmlNodes && c.indexOf(i.name) > -1)
                          if (i.voidElement)
                            t.push(
                              (0, a.createElement)(i.name, {
                                key: "".concat(i.name, "-").concat(f),
                              })
                            );
                          else {
                            var R = b(d, i.children, u);
                            t.push(
                              (0, a.createElement)(
                                i.name,
                                { key: "".concat(i.name, "-").concat(f) },
                                R
                              )
                            );
                          }
                        else if (i.voidElement) t.push("<".concat(i.name, " />"));
                        else {
                          var T = b(d, i.children, u);
                          t.push("<".concat(i.name, ">").concat(T, "</").concat(i.name, ">"));
                        }
                      else if ("object" !== (0, o.default)(w) || j)
                        1 === i.children.length && m
                          ? t.push((0, a.cloneElement)(w, S(S({}, w.props), {}, { key: f }), m))
                          : t.push((0, a.cloneElement)(w, S(S({}, w.props), {}, { key: f })));
                      else {
                        var I = i.children[0] ? m : null;
                        I && t.push(I);
                      }
                    } else if ("text" === i.type) {
                      var B = r.transWrapTextNodes,
                        M = s
                          ? r.unescape(
                              n.services.interpolator.interpolate(i.content, p, n.language)
                            )
                          : n.services.interpolator.interpolate(i.content, p, n.language);
                      B
                        ? t.push(
                            (0, a.createElement)(B, { key: "".concat(i.name, "-").concat(f) }, M)
                          )
                        : t.push(M);
                    }
                    return t;
                  }, []);
                }
                return A(b([{ dummy: !0, children: e || [] }], d, C(e || []))[0]);
              })(m || n, B ? N(B, L) : T, j, _, L, x),
              D = void 0 !== s ? s : _.defaultTransParent;
            return D ? (0, a.createElement)(D, w, U) : U;
          })(
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? U(Object(r), !0).forEach(function (t) {
                      (0, n.default)(e, t, r[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                    : U(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                      });
              }
              return e;
            })(
              {
                children: i,
                count: s,
                parent: c,
                i18nKey: l,
                context: u,
                tOptions: void 0 === d ? {} : d,
                values: g,
                defaults: b,
                components: m,
                ns: h || (T && T.ns) || _ || (R && R.options && R.options.defaultNS),
                i18n: R,
                t: O,
                shouldUnescape: x,
              },
              w
            )
          );
        },
      ],
      345771
    );
    var D = e.i(392221);
    function V(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r));
      }
      return n;
    }
    function $(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? V(Object(r), !0).forEach(function (t) {
              (0, n.default)(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : V(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
      }
      return e;
    }
    var K = function (e, t) {
      var n = (0, a.useRef)();
      return (
        (0, a.useEffect)(
          function () {
            n.current = t ? n.current : e;
          },
          [e, t]
        ),
        n.current
      );
    };
    (e.s(
      [
        "useTranslation",
        0,
        function (e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = n.i18n,
            i = (0, a.useContext)(B) || {},
            s = i.i18n,
            c = i.defaultNS,
            l = r || s || t;
          if ((l && !l.reportNamespaces && (l.reportNamespaces = new M()), !l)) {
            v("You will need to pass in an i18next instance by using initReactI18next");
            var u = function (e, t) {
                return "string" == typeof t
                  ? t
                  : t && "object" === (0, o.default)(t) && "string" == typeof t.defaultValue
                    ? t.defaultValue
                    : Array.isArray(e)
                      ? e[e.length - 1]
                      : e;
              },
              d = [u, {}, !1];
            return ((d.t = u), (d.i18n = {}), (d.ready = !1), d);
          }
          l.options.react &&
            void 0 !== l.options.react.wait &&
            v(
              "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
            );
          var f = $($($({}, k), l.options.react), n),
            p = f.useSuspense,
            g = f.keyPrefix,
            b = e || c || (l.options && l.options.defaultNS);
          ((b = "string" == typeof b ? [b] : b || ["translation"]),
            l.reportNamespaces.addUsedNamespaces && l.reportNamespaces.addUsedNamespaces(b));
          var y =
            (l.isInitialized || l.initializedStoreOnce) &&
            b.every(function (e) {
              return (function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return t.languages && t.languages.length
                  ? void 0 === t.options.ignoreJSONStructure
                    ? (function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                          r = t.languages[0],
                          a = !!t.options && t.options.fallbackLng,
                          o = t.languages[t.languages.length - 1];
                        if ("cimode" === r.toLowerCase()) return !0;
                        var i = function (e, n) {
                          var r = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                          return -1 === r || 2 === r;
                        };
                        return (
                          (!(n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1) ||
                            !t.services.backendConnector.backend ||
                            !t.isLanguageChangingTo ||
                            !!i(t.isLanguageChangingTo, e)) &&
                          !!(
                            t.hasResourceBundle(r, e) ||
                            !t.services.backendConnector.backend ||
                            (t.options.resources && !t.options.partialBundledLanguages) ||
                            (i(r, e) && (!a || i(o, e)))
                          )
                        );
                      })(e, t, n)
                    : t.hasLoadedNamespace(e, {
                        lng: n.lng,
                        precheck: function (t, r) {
                          if (
                            n.bindI18n &&
                            n.bindI18n.indexOf("languageChanging") > -1 &&
                            t.services.backendConnector.backend &&
                            t.isLanguageChangingTo &&
                            !r(t.isLanguageChangingTo, e)
                          )
                            return !1;
                        },
                      })
                  : (v("i18n.languages were undefined or empty", t.languages), !0);
              })(e, l, f);
            });
          function O() {
            return l.getFixedT(n.lng || null, "fallback" === f.nsMode ? b : b[0], g);
          }
          var x = (0, a.useState)(O),
            w = (0, D.default)(x, 2),
            j = w[0],
            E = w[1],
            P = b.join();
          n.lng && (P = "".concat(n.lng).concat(P));
          var N = K(P),
            S = (0, a.useRef)(!0);
          (0, a.useEffect)(
            function () {
              var e = f.bindI18n,
                t = f.bindI18nStore;
              function r() {
                S.current && E(O);
              }
              return (
                (S.current = !0),
                y ||
                  p ||
                  (n.lng
                    ? h(l, n.lng, b, function () {
                        S.current && E(O);
                      })
                    : m(l, b, function () {
                        S.current && E(O);
                      })),
                y && N && N !== P && S.current && E(O),
                e && l && l.on(e, r),
                t && l && l.store.on(t, r),
                function () {
                  ((S.current = !1),
                    e &&
                      l &&
                      e.split(" ").forEach(function (e) {
                        return l.off(e, r);
                      }),
                    t &&
                      l &&
                      t.split(" ").forEach(function (e) {
                        return l.store.off(e, r);
                      }));
                }
              );
            },
            [l, P]
          );
          var z = (0, a.useRef)(!0);
          (0, a.useEffect)(
            function () {
              (S.current && !z.current && E(O), (z.current = !1));
            },
            [l, g]
          );
          var A = [j, l, y];
          if (((A.t = j), (A.i18n = l), (A.ready = y), y || (!y && !p))) return A;
          throw new Promise(function (e) {
            n.lng
              ? h(l, n.lng, b, function () {
                  return e();
                })
              : m(l, b, function () {
                  return e();
                });
          });
        },
      ],
      322831
    ),
      e.s(
        [
          "I18nextProvider",
          0,
          function (e) {
            var t = e.i18n,
              n = e.defaultNS,
              r = e.children,
              o = (0, a.useMemo)(
                function () {
                  return { i18n: t, defaultNS: n };
                },
                [t, n]
              );
            return (0, a.createElement)(B.Provider, { value: o }, r);
          },
        ],
        200071
      ),
      e.s([], 785269));
  },
  475254,
  (e) => {
    "use strict";
    var t = e.i(271645);
    let n = (e) => {
        let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
          n ? n.toUpperCase() : t.toLowerCase()
        );
        return t.charAt(0).toUpperCase() + t.slice(1);
      },
      r = (...e) =>
        e
          .filter((e, t, n) => !!e && "" !== e.trim() && n.indexOf(e) === t)
          .join(" ")
          .trim();
    var a = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    let o = (0, t.forwardRef)(
      (
        {
          color: e = "currentColor",
          size: n = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: i,
          className: s = "",
          children: c,
          iconNode: l,
          ...u
        },
        d
      ) =>
        (0, t.createElement)(
          "svg",
          {
            ref: d,
            ...a,
            width: n,
            height: n,
            stroke: e,
            strokeWidth: i ? (24 * Number(o)) / Number(n) : o,
            className: r("lucide", s),
            ...(!c &&
              !((e) => {
                for (let t in e)
                  if (t.startsWith("aria-") || "role" === t || "title" === t) return !0;
              })(u) && { "aria-hidden": "true" }),
            ...u,
          },
          [...l.map(([e, n]) => (0, t.createElement)(e, n)), ...(Array.isArray(c) ? c : [c])]
        )
    );
    e.s(
      [
        "default",
        0,
        (e, a) => {
          let i = (0, t.forwardRef)(({ className: i, ...s }, c) =>
            (0, t.createElement)(o, {
              ref: c,
              iconNode: a,
              className: r(
                `lucide-${n(e)
                  .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                  .toLowerCase()}`,
                `lucide-${e}`,
                i
              ),
              ...s,
            })
          );
          return ((i.displayName = n(e)), i);
        },
      ],
      475254
    );
  },
  770509,
  260002,
  168118,
  673512,
  (e) => {
    "use strict";
    var t = e.i(475254);
    let n = (0, t.default)("circle-alert", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
      ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
    ]);
    e.s(["CircleAlertIcon", 0, n], 770509);
    let r = (0, t.default)("circle-check", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
    ]);
    e.s(["CircleCheckIcon", 0, r], 260002);
    let a = (0, t.default)("info", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 16v-4", key: "1dtifu" }],
      ["path", { d: "M12 8h.01", key: "e9boi3" }],
    ]);
    e.s(["InfoIcon", 0, a], 168118);
    let o = (0, t.default)("triangle-alert", [
      [
        "path",
        {
          d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
          key: "wmoenq",
        },
      ],
      ["path", { d: "M12 9v4", key: "juzpu7" }],
      ["path", { d: "M12 17h.01", key: "p32p05" }],
    ]);
    e.s(["TriangleAlertIcon", 0, o], 673512);
  },
  207670,
  (e) => {
    "use strict";
    e.s([
      "clsx",
      0,
      function () {
        for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)
          (e = arguments[n]) &&
            (t = (function e(t) {
              var n,
                r,
                a = "";
              if ("string" == typeof t || "number" == typeof t) a += t;
              else if ("object" == typeof t)
                if (Array.isArray(t)) {
                  var o = t.length;
                  for (n = 0; n < o; n++) t[n] && (r = e(t[n])) && (a && (a += " "), (a += r));
                } else for (r in t) t[r] && (a && (a += " "), (a += r));
              return a;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      },
    ]);
  },
  388940,
  (e) => {
    "use strict";
    var t = e.i(271645);
    let n = {};
    e.s([
      "useRefWithInit",
      0,
      function (e, r) {
        let a = t.useRef(n);
        return (a.current === n && (a.current = e(r)), a);
      },
    ]);
  },
  733332,
  (e) => {
    "use strict";
    let t = function (e, ...t) {
      let n = new URL("https://base-ui.com/production-error");
      return (
        n.searchParams.set("code", e.toString()),
        t.forEach((e) => n.searchParams.append("args[]", e)),
        `Base UI error #${e}; visit ${n} for the full message.`
      );
    };
    e.s(["default", 0, t]);
  },
  958321,
  (e) => {
    "use strict";
    let t = parseInt(e.i(271645).version, 10);
    e.s([
      "isReactVersionAtLeast",
      0,
      function (e) {
        return t >= e;
      },
    ]);
  },
  956789,
  (e) => {
    "use strict";
    let t = Object.freeze([]),
      n = Object.freeze({});
    e.s(["EMPTY_ARRAY", 0, t, "EMPTY_OBJECT", 0, n, "NOOP", 0, function () {}]);
  },
  828918,
  (e) => {
    "use strict";
    var t = e.i(388940);
    function n() {
      return { callback: null, cleanup: null, refs: [] };
    }
    function r(e, t) {
      if (((e.refs = t), t.every((e) => null == e))) {
        e.callback = null;
        return;
      }
      e.callback = (n) => {
        if ((e.cleanup && (e.cleanup(), (e.cleanup = null)), null != n)) {
          let r = Array(t.length).fill(null);
          for (let e = 0; e < t.length; e += 1) {
            let a = t[e];
            if (null != a)
              switch (typeof a) {
                case "function": {
                  let t = a(n);
                  "function" == typeof t && (r[e] = t);
                  break;
                }
                case "object":
                  a.current = n;
              }
          }
          e.cleanup = () => {
            for (let e = 0; e < t.length; e += 1) {
              let n = t[e];
              if (null != n)
                switch (typeof n) {
                  case "function": {
                    let t = r[e];
                    "function" == typeof t ? t() : n(null);
                    break;
                  }
                  case "object":
                    n.current = null;
                }
            }
          };
        }
      };
    }
    e.s([
      "useMergedRefs",
      0,
      function (e, a, o, i) {
        var s, c, l, u, d;
        let f = (0, t.useRefWithInit)(n).current;
        return (
          (s = f),
          (c = e),
          (l = a),
          (u = o),
          (d = i),
          (s.refs[0] !== c || s.refs[1] !== l || s.refs[2] !== u || s.refs[3] !== d) &&
            r(f, [e, a, o, i]),
          f.callback
        );
      },
      "useMergedRefsN",
      0,
      function (e) {
        var a, o;
        let i = (0, t.useRefWithInit)(n).current;
        return (
          (a = i),
          (o = e),
          (a.refs.length !== o.length || a.refs.some((e, t) => e !== o[t])) && r(i, e),
          i.callback
        );
      },
    ]);
  },
  978554,
  (e) => {
    "use strict";
    var t = e.i(271645),
      n = e.i(958321);
    e.s([
      "getReactElementRef",
      0,
      function (e) {
        if (!t.isValidElement(e)) return null;
        let r = e.props;
        return ((0, n.isReactVersionAtLeast)(19) ? r?.ref : e.ref) ?? null;
      },
    ]);
  },
  435241,
  (e) => {
    "use strict";
    e.s([
      "mergeObjects",
      0,
      function (e, t) {
        return e && !t ? e : !e && t ? t : e || t ? { ...e, ...t } : void 0;
      },
    ]);
  },
  399627,
  (e) => {
    "use strict";
    e.s(["warn", 0, function () {}]);
  },
  416919,
  809835,
  377570,
  (e) => {
    "use strict";
    (e.s(
      [
        "getStateAttributesProps",
        0,
        function (e, t) {
          let n = {};
          for (let r in e) {
            let a = e[r];
            if (t?.hasOwnProperty(r)) {
              let e = t[r](a);
              null != e && Object.assign(n, e);
              continue;
            }
            !0 === a
              ? (n[`data-${r.toLowerCase()}`] = "")
              : a && (n[`data-${r.toLowerCase()}`] = a.toString());
          }
          return n;
        },
      ],
      416919
    ),
      e.s(
        [
          "resolveClassName",
          0,
          function (e, t) {
            return "function" == typeof e ? e(t) : e;
          },
        ],
        809835
      ),
      e.s(
        [
          "resolveStyle",
          0,
          function (e, t) {
            return "function" == typeof e ? e(t) : e;
          },
        ],
        377570
      ));
  },
  176782,
  (e) => {
    "use strict";
    var t = e.i(435241);
    let n = {};
    function r(e) {
      return i(e)
        ? { ...s(e, n) }
        : (function (e) {
            let t = { ...e };
            for (let e in t) {
              let n = t[e];
              o(e, n) && (t[e] = c(n));
            }
            return t;
          })(e);
    }
    function a(e, n) {
      return i(n)
        ? s(n, e)
        : (function (e, n) {
            if (!n) return e;
            for (let r in n) {
              let a = n[r];
              switch (r) {
                case "style":
                  e[r] = (0, t.mergeObjects)(e.style, a);
                  break;
                case "className":
                  e[r] = u(e.className, a);
                  break;
                default:
                  o(r, a)
                    ? (e[r] = (function (e, t) {
                        return t
                          ? e
                            ? (...n) => {
                                let r = n[0];
                                if (d(r)) {
                                  l(r);
                                  let a = t(...n);
                                  return (r.baseUIHandlerPrevented || e?.(...n), a);
                                }
                                let a = t(...n);
                                return (e?.(...n), a);
                              }
                            : c(t)
                          : e;
                      })(e[r], a))
                    : (e[r] = a);
              }
            }
            return e;
          })(e, n);
    }
    function o(e, t) {
      let n = e.charCodeAt(0),
        r = e.charCodeAt(1),
        a = e.charCodeAt(2);
      return (
        111 === n && 110 === r && a >= 65 && a <= 90 && ("function" == typeof t || void 0 === t)
      );
    }
    function i(e) {
      return "function" == typeof e;
    }
    function s(e, t) {
      return i(e) ? e(t) : (e ?? n);
    }
    function c(e) {
      return e
        ? (...t) => {
            let n = t[0];
            return (d(n) && l(n), e(...t));
          }
        : e;
    }
    function l(e) {
      return (
        (e.preventBaseUIHandler = () => {
          e.baseUIHandlerPrevented = !0;
        }),
        e
      );
    }
    function u(e, t) {
      return t ? (e ? t + " " + e : t) : e;
    }
    function d(e) {
      return null != e && "object" == typeof e && "nativeEvent" in e;
    }
    e.s([
      "makeEventPreventable",
      0,
      l,
      "mergeClassNames",
      0,
      u,
      "mergeProps",
      0,
      function (e, t, n, o, i) {
        if (!n && !o && !i && !e) return r(t);
        let s = r(e);
        return (t && (s = a(s, t)), n && (s = a(s, n)), o && (s = a(s, o)), i && (s = a(s, i)), s);
      },
      "mergePropsN",
      0,
      function (e) {
        if (0 === e.length) return n;
        if (1 === e.length) return r(e[0]);
        let t = r(e[0]);
        for (let n = 1; n < e.length; n += 1) t = a(t, e[n]);
        return t;
      },
    ]);
  },
  552245,
  (e) => {
    "use strict";
    var t = e.i(733332),
      n = e.i(271645),
      r = e.i(828918),
      a = e.i(978554),
      o = e.i(435241);
    e.i(399627);
    var i = e.i(956789),
      s = e.i(416919),
      c = e.i(809835),
      l = e.i(377570),
      u = e.i(176782);
    let d = Symbol.for("react.lazy");
    e.s([
      "useRenderElement",
      0,
      function (e, f, p = {}) {
        let g = f.render,
          v = (function (e, t = {}) {
            var n;
            let { className: d, style: f, render: p } = e,
              {
                state: g = i.EMPTY_OBJECT,
                ref: v,
                props: b,
                stateAttributesMapping: m,
                enabled: h = !0,
              } = t,
              y = h ? (0, c.resolveClassName)(d, g) : void 0,
              O = h ? (0, l.resolveStyle)(f, g) : void 0,
              x = h ? (0, s.getStateAttributesProps)(g, m) : i.EMPTY_OBJECT,
              w =
                h && b
                  ? Array.isArray((n = b))
                    ? (0, u.mergePropsN)(n)
                    : (0, u.mergeProps)(void 0, n)
                  : void 0,
              j = h ? ((0, o.mergeObjects)(x, w) ?? {}) : i.EMPTY_OBJECT;
            return ("u" > typeof document &&
              (h
                ? Array.isArray(v)
                  ? (j.ref = (0, r.useMergedRefsN)([j.ref, (0, a.getReactElementRef)(p), ...v]))
                  : (j.ref = (0, r.useMergedRefs)(j.ref, (0, a.getReactElementRef)(p), v))
                : (0, r.useMergedRefs)(null, null)),
            h)
              ? (void 0 !== y && (j.className = (0, u.mergeClassNames)(j.className, y)),
                void 0 !== O && (j.style = (0, o.mergeObjects)(j.style, O)),
                j)
              : i.EMPTY_OBJECT;
          })(f, p);
        return !1 === p.enabled
          ? null
          : (function (e, r, a, o) {
              if (r) {
                if ("function" == typeof r) return r(a, o);
                let e = (0, u.mergeProps)(a, r.props);
                e.ref = a.ref;
                let t = r;
                return (t?.$$typeof === d && (t = n.Children.toArray(r)[0]), n.cloneElement(t, e));
              }
              if (e && "string" == typeof e) {
                var i, s;
                return (
                  (i = e),
                  (s = a),
                  "button" === i
                    ? (0, n.createElement)("button", { type: "button", ...s, key: s.key })
                    : "img" === i
                      ? (0, n.createElement)("img", { alt: "", ...s, key: s.key })
                      : n.createElement(i, s)
                );
              }
              throw Error((0, t.default)(8));
            })(e, g, v, p.state ?? i.EMPTY_OBJECT);
      },
    ]);
  },
  911825,
  (e) => {
    "use strict";
    var t = e.i(552245);
    e.s([
      "useRender",
      0,
      function (e) {
        return (0, t.useRenderElement)(e.defaultTagName ?? "div", e, e);
      },
    ]);
  },
  225913,
  (e) => {
    "use strict";
    var t = e.i(207670);
    let n = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
      r = t.clsx;
    e.s([
      "cva",
      0,
      (e, t) => (a) => {
        var o;
        if ((null == t ? void 0 : t.variants) == null)
          return r(e, null == a ? void 0 : a.class, null == a ? void 0 : a.className);
        let { variants: i, defaultVariants: s } = t,
          c = Object.keys(i).map((e) => {
            let t = null == a ? void 0 : a[e],
              r = null == s ? void 0 : s[e];
            if (null === t) return null;
            let o = n(t) || n(r);
            return i[e][o];
          }),
          l =
            a &&
            Object.entries(a).reduce((e, t) => {
              let [n, r] = t;
              return (void 0 === r || (e[n] = r), e);
            }, {});
        return r(
          e,
          c,
          null == t || null == (o = t.compoundVariants)
            ? void 0
            : o.reduce((e, t) => {
                let { class: n, className: r, ...a } = t;
                return Object.entries(a).every((e) => {
                  let [t, n] = e;
                  return Array.isArray(n) ? n.includes({ ...s, ...l }[t]) : { ...s, ...l }[t] === n;
                })
                  ? [...e, n, r]
                  : e;
              }, []),
          null == a ? void 0 : a.class,
          null == a ? void 0 : a.className
        );
      },
    ]);
  },
  438027,
  717521,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(830632);
    let r = (0, e.i(475254).default)("loader-circle", [
      ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
    ]);
    (e.s(["default", 0, r], 717521),
      e.s(
        [
          "Spinner",
          0,
          function ({ className: e, ...a }) {
            return (0, t.jsx)(r, {
              "aria-label": "Loading",
              className: (0, n.cn)("animate-spin", e),
              role: "status",
              ...a,
            });
          },
        ],
        438027
      ));
  },
  41662,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(176782),
      r = e.i(911825),
      a = e.i(438027),
      o = e.i(830632);
    let i = (0, e.i(225913).cva)(
      "relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border font-medium text-base outline-none transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 data-loading:select-none data-loading:text-transparent sm:text-sm [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:-mx-0.5 [&_svg]:shrink-0",
      {
        defaultVariants: { size: "default", variant: "default" },
        variants: {
          size: {
            default: "h-9 px-[calc(--spacing(3)-1px)] sm:h-8",
            icon: "size-9 sm:size-8",
            "icon-lg": "size-10 sm:size-9",
            "icon-sm": "size-8 sm:size-7",
            "icon-xl":
              "size-11 sm:size-10 [&_svg:not([class*='size-'])]:size-5 sm:[&_svg:not([class*='size-'])]:size-4.5",
            "icon-xs":
              "size-7 rounded-md before:rounded-[calc(var(--radius-md)-1px)] sm:size-6 not-in-data-[slot=input-group]:[&_svg:not([class*='size-'])]:size-4 sm:not-in-data-[slot=input-group]:[&_svg:not([class*='size-'])]:size-3.5",
            lg: "h-10 px-[calc(--spacing(3.5)-1px)] sm:h-9",
            sm: "h-8 gap-1.5 px-[calc(--spacing(2.5)-1px)] sm:h-7",
            xl: "h-11 px-[calc(--spacing(4)-1px)] text-lg sm:h-10 sm:text-base [&_svg:not([class*='size-'])]:size-5 sm:[&_svg:not([class*='size-'])]:size-4.5",
            xs: "h-7 gap-1 rounded-md px-[calc(--spacing(2)-1px)] text-sm before:rounded-[calc(var(--radius-md)-1px)] sm:h-6 sm:text-xs [&_svg:not([class*='size-'])]:size-4 sm:[&_svg:not([class*='size-'])]:size-3.5",
          },
          variant: {
            default:
              "not-disabled:inset-shadow-[0_1px_--theme(--color-white/16%)] border-primary bg-primary text-primary-foreground shadow-primary/24 shadow-xs hover:bg-primary/90 data-pressed:bg-primary/90 *:data-[slot=button-loading-indicator]:text-primary-foreground [:active,[data-pressed]]:inset-shadow-[0_1px_--theme(--color-black/8%)] [:disabled,:active,[data-pressed]]:shadow-none",
            destructive:
              "not-disabled:inset-shadow-[0_1px_--theme(--color-white/16%)] border-destructive bg-destructive text-white shadow-destructive/24 shadow-xs hover:bg-destructive/90 data-pressed:bg-destructive/90 *:data-[slot=button-loading-indicator]:text-white [:active,[data-pressed]]:inset-shadow-[0_1px_--theme(--color-black/8%)] [:disabled,:active,[data-pressed]]:shadow-none",
            "destructive-outline":
              "border-input bg-popover not-dark:bg-clip-padding text-destructive-foreground shadow-xs/5 not-disabled:not-active:not-data-pressed:before:shadow-[0_1px_--theme(--color-black/4%)] hover:border-destructive/32 hover:bg-destructive/4 data-pressed:border-destructive/32 data-pressed:bg-destructive/4 *:data-[slot=button-loading-indicator]:text-foreground dark:bg-input/32 dark:not-disabled:before:shadow-[0_-1px_--theme(--color-white/2%)] dark:not-disabled:not-active:not-data-pressed:before:shadow-[0_-1px_--theme(--color-white/6%)] [:disabled,:active,[data-pressed]]:shadow-none",
            ghost:
              "border-transparent text-foreground hover:bg-accent data-pressed:bg-accent *:data-[slot=button-loading-indicator]:text-foreground",
            link: "border-transparent text-foreground underline-offset-4 hover:underline data-pressed:underline *:data-[slot=button-loading-indicator]:text-foreground",
            outline:
              "border-input bg-popover not-dark:bg-clip-padding text-foreground shadow-xs/5 not-disabled:not-active:not-data-pressed:before:shadow-[0_1px_--theme(--color-black/4%)] hover:bg-accent/50 data-pressed:bg-accent/50 *:data-[slot=button-loading-indicator]:text-foreground dark:bg-input/32 dark:data-pressed:bg-input/64 dark:hover:bg-input/64 dark:not-disabled:before:shadow-[0_-1px_--theme(--color-white/2%)] dark:not-disabled:not-active:not-data-pressed:before:shadow-[0_-1px_--theme(--color-white/6%)] [:disabled,:active,[data-pressed]]:shadow-none",
            secondary:
              "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90 data-pressed:bg-secondary/90 *:data-[slot=button-loading-indicator]:text-secondary-foreground [:active,[data-pressed]]:bg-secondary/80",
          },
        },
      }
    );
    e.s([
      "Button",
      0,
      function ({
        className: e,
        variant: s,
        size: c,
        render: l,
        children: u,
        loading: d = !1,
        disabled: f,
        ...p
      }) {
        let g = !!(d || f),
          v = {
            children: (0, t.jsxs)(t.Fragment, {
              children: [
                u,
                d &&
                  (0, t.jsx)(a.Spinner, {
                    className: "pointer-events-none absolute",
                    "data-slot": "button-loading-indicator",
                  }),
              ],
            }),
            className: (0, o.cn)(i({ className: e, size: c, variant: s })),
            "aria-disabled": d || void 0,
            "data-loading": d ? "" : void 0,
            "data-slot": "button",
            disabled: g,
            type: l ? void 0 : "button",
          };
        return (0, r.useRender)({
          defaultTagName: "button",
          props: (0, n.mergeProps)(v, p),
          render: l,
        });
      },
      "buttonVariants",
      0,
      i,
    ]);
  },
]);
