(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  44602,
  (e, t, a) => {
    t.exports = (function (e) {
      var t = {};
      function a(r) {
        if (t[r]) return t[r].exports;
        var n = (t[r] = { i: r, l: !1, exports: {} });
        return (e[r].call(n.exports, n, n.exports, a), (n.l = !0), n.exports);
      }
      return (
        (a.m = e),
        (a.c = t),
        (a.d = function (e, t, r) {
          a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (a.r = function (e) {
          ("u" > typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 }));
        }),
        (a.t = function (e, t) {
          if ((1 & t && (e = a(e)), 8 & t || (4 & t && "object" == typeof e && e && e.__esModule)))
            return e;
          var r = Object.create(null);
          if (
            (a.r(r),
            Object.defineProperty(r, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
          )
            for (var n in e)
              a.d(
                r,
                n,
                function (t) {
                  return e[t];
                }.bind(null, n)
              );
          return r;
        }),
        (a.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return (a.d(t, "a", t), t);
        }),
        (a.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (a.p = ""),
        a((a.s = 9))
      );
    })([
      function (t, a) {
        t.exports = e.r(271645);
      },
      function (e, t, a) {
        var r;
        !(function () {
          "use strict";
          var a = {}.hasOwnProperty;
          function n() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var r = arguments[t];
              if (r) {
                var i = typeof r;
                if ("string" === i || "number" === i) e.push(r);
                else if (Array.isArray(r) && r.length) {
                  var o = n.apply(null, r);
                  o && e.push(o);
                } else if ("object" === i) for (var s in r) a.call(r, s) && r[s] && e.push(s);
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((n.default = n), (e.exports = n))
            : void 0 ===
                (r = function () {
                  return n;
                }.apply(t, [])) || (e.exports = r);
        })();
      },
      function (e, t, a) {
        (function (t) {
          var a = /^\s+|\s+$/g,
            r = /^[-+]0x[0-9a-f]+$/i,
            n = /^0b[01]+$/i,
            i = /^0o[0-7]+$/i,
            o = parseInt,
            s = "object" == typeof t && t && t.Object === Object && t,
            l = "object" == typeof self && self && self.Object === Object && self,
            c = s || l || Function("return this")(),
            u = Object.prototype.toString,
            d = c.Symbol,
            m = d ? d.prototype : void 0,
            p = m ? m.toString : void 0;
          function h(e) {
            if ("string" == typeof e) return e;
            if (g(e)) return p ? p.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
          }
          function f(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t);
          }
          function g(e) {
            return (
              "symbol" == typeof e ||
              (!!e && "object" == typeof e && "[object Symbol]" == u.call(e))
            );
          }
          e.exports = function (e, t, s) {
            var l, c, u, d, m, p;
            return (
              (e = null == (l = e) ? "" : h(l)),
              (p =
                (m = (d = s)
                  ? (d = (function (e) {
                      if ("number" == typeof e) return e;
                      if (g(e)) return NaN;
                      if (f(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = f(t) ? t + "" : t;
                      }
                      if ("string" != typeof e) return 0 === e ? e : +e;
                      e = e.replace(a, "");
                      var s = n.test(e);
                      return s || i.test(e) ? o(e.slice(2), s ? 2 : 8) : r.test(e) ? NaN : +e;
                    })(d)) ===
                      1 / 0 || d === -1 / 0
                    ? 17976931348623157e292 * (d < 0 ? -1 : 1)
                    : d == d
                      ? d
                      : 0
                  : 0 === d
                    ? d
                    : 0) % 1),
              (c = m == m ? (p ? m - p : m) : 0),
              (u = e.length),
              c == c && (void 0 !== u && (c = c <= u ? c : u), (c = c >= 0 ? c : 0)),
              (s = c),
              (t = h(t)),
              e.slice(s, s + t.length) == t
            );
          };
        }).call(this, a(3));
      },
      function (e, t) {
        var a;
        a = (function () {
          return this;
        })();
        try {
          a = a || Function("return this")();
        } catch (e) {
          "object" == typeof window && (a = window);
        }
        e.exports = a;
      },
      function (e, t, a) {
        (function (t) {
          var a,
            r = /^\[object .+?Constructor\]$/,
            n = "object" == typeof t && t && t.Object === Object && t,
            i = "object" == typeof self && self && self.Object === Object && self,
            o = n || i || Function("return this")(),
            s = Array.prototype,
            l = Function.prototype,
            c = Object.prototype,
            u = o["__core-js_shared__"],
            d = (a = /[^.]+$/.exec((u && u.keys && u.keys.IE_PROTO) || ""))
              ? "Symbol(src)_1." + a
              : "",
            m = l.toString,
            p = c.hasOwnProperty,
            h = c.toString,
            f = RegExp(
              "^" +
                m
                  .call(p)
                  .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                "$"
            ),
            g = s.splice,
            b = C(o, "Map"),
            y = C(Object, "create");
          function v(e) {
            var t = -1,
              a = e ? e.length : 0;
            for (this.clear(); ++t < a; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function x(e) {
            var t = -1,
              a = e ? e.length : 0;
            for (this.clear(); ++t < a; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function k(e) {
            var t = -1,
              a = e ? e.length : 0;
            for (this.clear(); ++t < a; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function w(e, t) {
            for (var a, r = e.length; r--; )
              if ((a = e[r][0]) === t || (a != a && t != t)) return r;
            return -1;
          }
          function _(e, t) {
            var a,
              r = e.__data__;
            return (
              "string" == (a = typeof t) || "number" == a || "symbol" == a || "boolean" == a
                ? "__proto__" !== t
                : null === t
            )
              ? r["string" == typeof t ? "string" : "hash"]
              : r.map;
          }
          function C(e, t) {
            var a = null == e ? void 0 : e[t];
            return !(function (e) {
              var t;
              return (
                !(!T(e) || (d && d in e)) &&
                ("[object Function]" == (t = T(e) ? h.call(e) : "") ||
                "[object GeneratorFunction]" == t ||
                (function (e) {
                  var t = !1;
                  if (null != e && "function" != typeof e.toString)
                    try {
                      t = !!(e + "");
                    } catch (e) {}
                  return t;
                })(e)
                  ? f
                  : r
                ).test(
                  (function (e) {
                    if (null != e) {
                      try {
                        return m.call(e);
                      } catch (e) {}
                      try {
                        return e + "";
                      } catch (e) {}
                    }
                    return "";
                  })(e)
                )
              );
            })(a)
              ? void 0
              : a;
          }
          function S(e, t) {
            if ("function" != typeof e || (t && "function" != typeof t))
              throw TypeError("Expected a function");
            var a = function () {
              var r = arguments,
                n = t ? t.apply(this, r) : r[0],
                i = a.cache;
              if (i.has(n)) return i.get(n);
              var o = e.apply(this, r);
              return ((a.cache = i.set(n, o)), o);
            };
            return ((a.cache = new (S.Cache || k)()), a);
          }
          function T(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t);
          }
          ((v.prototype.clear = function () {
            this.__data__ = y ? y(null) : {};
          }),
            (v.prototype.delete = function (e) {
              return this.has(e) && delete this.__data__[e];
            }),
            (v.prototype.get = function (e) {
              var t = this.__data__;
              if (y) {
                var a = t[e];
                return "__lodash_hash_undefined__" === a ? void 0 : a;
              }
              return p.call(t, e) ? t[e] : void 0;
            }),
            (v.prototype.has = function (e) {
              var t = this.__data__;
              return y ? void 0 !== t[e] : p.call(t, e);
            }),
            (v.prototype.set = function (e, t) {
              return (
                (this.__data__[e] = y && void 0 === t ? "__lodash_hash_undefined__" : t),
                this
              );
            }),
            (x.prototype.clear = function () {
              this.__data__ = [];
            }),
            (x.prototype.delete = function (e) {
              var t = this.__data__,
                a = w(t, e);
              return !(a < 0) && (a == t.length - 1 ? t.pop() : g.call(t, a, 1), !0);
            }),
            (x.prototype.get = function (e) {
              var t = this.__data__,
                a = w(t, e);
              return a < 0 ? void 0 : t[a][1];
            }),
            (x.prototype.has = function (e) {
              return w(this.__data__, e) > -1;
            }),
            (x.prototype.set = function (e, t) {
              var a = this.__data__,
                r = w(a, e);
              return (r < 0 ? a.push([e, t]) : (a[r][1] = t), this);
            }),
            (k.prototype.clear = function () {
              this.__data__ = { hash: new v(), map: new (b || x)(), string: new v() };
            }),
            (k.prototype.delete = function (e) {
              return _(this, e).delete(e);
            }),
            (k.prototype.get = function (e) {
              return _(this, e).get(e);
            }),
            (k.prototype.has = function (e) {
              return _(this, e).has(e);
            }),
            (k.prototype.set = function (e, t) {
              return (_(this, e).set(e, t), this);
            }),
            (S.Cache = k),
            (e.exports = S));
        }).call(this, a(3));
      },
      function (e, t, a) {
        (function (t) {
          var a = /^\s+|\s+$/g,
            r = /^[-+]0x[0-9a-f]+$/i,
            n = /^0b[01]+$/i,
            i = /^0o[0-7]+$/i,
            o = parseInt,
            s = "object" == typeof t && t && t.Object === Object && t,
            l = "object" == typeof self && self && self.Object === Object && self,
            c = s || l || Function("return this")(),
            u = Object.prototype.toString,
            d = Math.max,
            m = Math.min,
            p = function () {
              return c.Date.now();
            };
          function h(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t);
          }
          function f(e) {
            if ("number" == typeof e) return e;
            if (
              "symbol" == typeof (t = e) ||
              (t && "object" == typeof t && "[object Symbol]" == u.call(t))
            )
              return NaN;
            if (h(e)) {
              var t,
                s = "function" == typeof e.valueOf ? e.valueOf() : e;
              e = h(s) ? s + "" : s;
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(a, "");
            var l = n.test(e);
            return l || i.test(e) ? o(e.slice(2), l ? 2 : 8) : r.test(e) ? NaN : +e;
          }
          e.exports = function (e, t, a) {
            var r,
              n,
              i,
              o,
              s,
              l,
              c = 0,
              u = !1,
              g = !1,
              b = !0;
            if ("function" != typeof e) throw TypeError("Expected a function");
            function y(t) {
              var a = r,
                i = n;
              return ((r = n = void 0), (c = t), (o = e.apply(i, a)));
            }
            function v(e) {
              var a = e - l;
              return void 0 === l || a >= t || a < 0 || (g && e - c >= i);
            }
            function x() {
              var e,
                a = p();
              if (v(a)) return k(a);
              s = setTimeout(x, ((e = t - (a - l)), g ? m(e, i - (a - c)) : e));
            }
            function k(e) {
              return ((s = void 0), b && r ? y(e) : ((r = n = void 0), o));
            }
            function w() {
              var e,
                a = p(),
                i = v(a);
              if (((r = arguments), (n = this), (l = a), i)) {
                if (void 0 === s) return ((c = e = l), (s = setTimeout(x, t)), u ? y(e) : o);
                if (g) return ((s = setTimeout(x, t)), y(l));
              }
              return (void 0 === s && (s = setTimeout(x, t)), o);
            }
            return (
              (t = f(t) || 0),
              h(a) &&
                ((u = !!a.leading),
                (i = (g = "maxWait" in a) ? d(f(a.maxWait) || 0, t) : i),
                (b = "trailing" in a ? !!a.trailing : b)),
              (w.cancel = function () {
                (void 0 !== s && clearTimeout(s), (c = 0), (r = l = n = s = void 0));
              }),
              (w.flush = function () {
                return void 0 === s ? o : k(p());
              }),
              w
            );
          };
        }).call(this, a(3));
      },
      function (e, t, a) {
        (function (e, a) {
          var r = "[object Arguments]",
            n = "[object Map]",
            i = "[object Object]",
            o = "[object Set]",
            s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            l = /^\w*$/,
            c = /^\./,
            u =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            d = /\\(\\)?/g,
            m = /^\[object .+?Constructor\]$/,
            p = /^(?:0|[1-9]\d*)$/,
            h = {};
          ((h["[object Float32Array]"] =
            h["[object Float64Array]"] =
            h["[object Int8Array]"] =
            h["[object Int16Array]"] =
            h["[object Int32Array]"] =
            h["[object Uint8Array]"] =
            h["[object Uint8ClampedArray]"] =
            h["[object Uint16Array]"] =
            h["[object Uint32Array]"] =
              !0),
            (h[r] =
              h["[object Array]"] =
              h["[object ArrayBuffer]"] =
              h["[object Boolean]"] =
              h["[object DataView]"] =
              h["[object Date]"] =
              h["[object Error]"] =
              h["[object Function]"] =
              h[n] =
              h["[object Number]"] =
              h[i] =
              h["[object RegExp]"] =
              h[o] =
              h["[object String]"] =
              h["[object WeakMap]"] =
                !1));
          var f = "object" == typeof e && e && e.Object === Object && e,
            g = "object" == typeof self && self && self.Object === Object && self,
            b = f || g || Function("return this")(),
            y = t && !t.nodeType && t,
            v = y && "object" == typeof a && a && !a.nodeType && a,
            x = v && v.exports === y && f.process,
            k = (function () {
              try {
                return x && x.binding("util");
              } catch (e) {}
            })(),
            w = k && k.isTypedArray;
          function _(e, t, a, r) {
            var n = -1,
              i = e ? e.length : 0;
            for (r && i && (a = e[++n]); ++n < i; ) a = t(a, e[n], n, e);
            return a;
          }
          function C(e, t, a, r, n) {
            return (
              n(e, function (e, n, i) {
                a = r ? ((r = !1), e) : t(a, e, n, i);
              }),
              a
            );
          }
          function S(e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString)
              try {
                t = !!(e + "");
              } catch (e) {}
            return t;
          }
          function T(e) {
            var t = -1,
              a = Array(e.size);
            return (
              e.forEach(function (e, r) {
                a[++t] = [r, e];
              }),
              a
            );
          }
          function j(e) {
            var t = -1,
              a = Array(e.size);
            return (
              e.forEach(function (e) {
                a[++t] = e;
              }),
              a
            );
          }
          var N,
            E,
            I,
            A = Array.prototype,
            O = Function.prototype,
            D = Object.prototype,
            L = b["__core-js_shared__"],
            R = (N = /[^.]+$/.exec((L && L.keys && L.keys.IE_PROTO) || ""))
              ? "Symbol(src)_1." + N
              : "",
            B = O.toString,
            P = D.hasOwnProperty,
            M = D.toString,
            z = RegExp(
              "^" +
                B.call(P)
                  .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                "$"
            ),
            U = b.Symbol,
            F = b.Uint8Array,
            V = D.propertyIsEnumerable,
            $ = A.splice,
            q =
              ((E = Object.keys),
              (I = Object),
              function (e) {
                return E(I(e));
              }),
            W = ex(b, "DataView"),
            H = ex(b, "Map"),
            Z = ex(b, "Promise"),
            Y = ex(b, "Set"),
            G = ex(b, "WeakMap"),
            K = ex(Object, "create"),
            Q = ej(W),
            J = ej(H),
            X = ej(Z),
            ee = ej(Y),
            et = ej(G),
            ea = U ? U.prototype : void 0,
            er = ea ? ea.valueOf : void 0,
            en = ea ? ea.toString : void 0;
          function ei(e) {
            var t = -1,
              a = e ? e.length : 0;
            for (this.clear(); ++t < a; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function eo(e) {
            var t = -1,
              a = e ? e.length : 0;
            for (this.clear(); ++t < a; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function es(e) {
            var t = -1,
              a = e ? e.length : 0;
            for (this.clear(); ++t < a; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function el(e) {
            var t = -1,
              a = e ? e.length : 0;
            for (this.__data__ = new es(); ++t < a; ) this.add(e[t]);
          }
          function ec(e) {
            this.__data__ = new eo(e);
          }
          function eu(e, t) {
            for (var a = e.length; a--; ) if (eE(e[a][0], t)) return a;
            return -1;
          }
          ((ei.prototype.clear = function () {
            this.__data__ = K ? K(null) : {};
          }),
            (ei.prototype.delete = function (e) {
              return this.has(e) && delete this.__data__[e];
            }),
            (ei.prototype.get = function (e) {
              var t = this.__data__;
              if (K) {
                var a = t[e];
                return "__lodash_hash_undefined__" === a ? void 0 : a;
              }
              return P.call(t, e) ? t[e] : void 0;
            }),
            (ei.prototype.has = function (e) {
              var t = this.__data__;
              return K ? void 0 !== t[e] : P.call(t, e);
            }),
            (ei.prototype.set = function (e, t) {
              return (
                (this.__data__[e] = K && void 0 === t ? "__lodash_hash_undefined__" : t),
                this
              );
            }),
            (eo.prototype.clear = function () {
              this.__data__ = [];
            }),
            (eo.prototype.delete = function (e) {
              var t = this.__data__,
                a = eu(t, e);
              return !(a < 0) && (a == t.length - 1 ? t.pop() : $.call(t, a, 1), !0);
            }),
            (eo.prototype.get = function (e) {
              var t = this.__data__,
                a = eu(t, e);
              return a < 0 ? void 0 : t[a][1];
            }),
            (eo.prototype.has = function (e) {
              return eu(this.__data__, e) > -1;
            }),
            (eo.prototype.set = function (e, t) {
              var a = this.__data__,
                r = eu(a, e);
              return (r < 0 ? a.push([e, t]) : (a[r][1] = t), this);
            }),
            (es.prototype.clear = function () {
              this.__data__ = { hash: new ei(), map: new (H || eo)(), string: new ei() };
            }),
            (es.prototype.delete = function (e) {
              return ev(this, e).delete(e);
            }),
            (es.prototype.get = function (e) {
              return ev(this, e).get(e);
            }),
            (es.prototype.has = function (e) {
              return ev(this, e).has(e);
            }),
            (es.prototype.set = function (e, t) {
              return (ev(this, e).set(e, t), this);
            }),
            (el.prototype.add = el.prototype.push =
              function (e) {
                return (this.__data__.set(e, "__lodash_hash_undefined__"), this);
              }),
            (el.prototype.has = function (e) {
              return this.__data__.has(e);
            }),
            (ec.prototype.clear = function () {
              this.__data__ = new eo();
            }),
            (ec.prototype.delete = function (e) {
              return this.__data__.delete(e);
            }),
            (ec.prototype.get = function (e) {
              return this.__data__.get(e);
            }),
            (ec.prototype.has = function (e) {
              return this.__data__.has(e);
            }),
            (ec.prototype.set = function (e, t) {
              var a = this.__data__;
              if (a instanceof eo) {
                var r = a.__data__;
                if (!H || r.length < 199) return (r.push([e, t]), this);
                a = this.__data__ = new es(r);
              }
              return (a.set(e, t), this);
            }));
          var ed,
            em,
            ep =
              ((ed = function (e, t) {
                return e && eh(e, t, ez);
              }),
              function (e, t) {
                if (null == e) return e;
                if (!eO(e)) return ed(e, t);
                for (
                  var a = e.length, r = em ? a : -1, n = Object(e);
                  (em ? r-- : ++r < a) && !1 !== t(n[r], r, n);
                );
                return e;
              }),
            eh = function (e, t, a) {
              for (var r = -1, n = Object(e), i = a(e), o = i.length; o--; ) {
                var s = i[++r];
                if (!1 === t(n[s], s, n)) break;
              }
              return e;
            };
          function ef(e, t) {
            for (
              var a, r = 0, n = (t = e_(t, e) ? [t] : eA((a = t)) ? a : eS(a)).length;
              null != e && r < n;
            )
              e = e[eT(t[r++])];
            return r && r == n ? e : void 0;
          }
          function eg(e, t) {
            return null != e && t in Object(e);
          }
          function eb(e, t, a, s, l) {
            return (
              e === t ||
              (null != e && null != t && (eR(e) || eB(t))
                ? (function (e, t, a, s, l, c) {
                    var u = eA(e),
                      d = eA(t),
                      m = "[object Array]",
                      p = "[object Array]";
                    (u || (m = (m = ek(e)) == r ? i : m), d || (p = (p = ek(t)) == r ? i : p));
                    var h = m == i && !S(e),
                      f = p == i && !S(t),
                      g = m == p;
                    if (g && !h)
                      return (
                        c || (c = new ec()),
                        u || eM(e)
                          ? ey(e, t, a, s, l, c)
                          : (function (e, t, a, r, i, s, l) {
                              switch (a) {
                                case "[object DataView]":
                                  if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                                    break;
                                  ((e = e.buffer), (t = t.buffer));
                                case "[object ArrayBuffer]":
                                  return !(e.byteLength != t.byteLength || !r(new F(e), new F(t)));
                                case "[object Boolean]":
                                case "[object Date]":
                                case "[object Number]":
                                  return eE(+e, +t);
                                case "[object Error]":
                                  return e.name == t.name && e.message == t.message;
                                case "[object RegExp]":
                                case "[object String]":
                                  return e == t + "";
                                case n:
                                  var c = T;
                                case o:
                                  var u = 2 & s;
                                  if ((c || (c = j), e.size != t.size && !u)) break;
                                  var d = l.get(e);
                                  if (d) return d == t;
                                  ((s |= 1), l.set(e, t));
                                  var m = ey(c(e), c(t), r, i, s, l);
                                  return (l.delete(e), m);
                                case "[object Symbol]":
                                  if (er) return er.call(e) == er.call(t);
                              }
                              return !1;
                            })(e, t, m, a, s, l, c)
                      );
                    if (!(2 & l)) {
                      var b = h && P.call(e, "__wrapped__"),
                        y = f && P.call(t, "__wrapped__");
                      if (b || y) {
                        var v = b ? e.value() : e,
                          x = y ? t.value() : t;
                        return (c || (c = new ec()), a(v, x, s, l, c));
                      }
                    }
                    return (
                      !!g &&
                      (c || (c = new ec()),
                      (function (e, t, a, r, n, i) {
                        var o = 2 & n,
                          s = ez(e),
                          l = s.length;
                        if (l != ez(t).length && !o) return !1;
                        for (var c = l; c--; ) {
                          var u = s[c];
                          if (!(o ? u in t : P.call(t, u))) return !1;
                        }
                        var d = i.get(e);
                        if (d && i.get(t)) return d == t;
                        var m = !0;
                        (i.set(e, t), i.set(t, e));
                        for (var p = o; ++c < l; ) {
                          var h = e[(u = s[c])],
                            f = t[u];
                          if (r) var g = o ? r(f, h, u, t, e, i) : r(h, f, u, e, t, i);
                          if (!(void 0 === g ? h === f || a(h, f, r, n, i) : g)) {
                            m = !1;
                            break;
                          }
                          p || (p = "constructor" == u);
                        }
                        if (m && !p) {
                          var b = e.constructor,
                            y = t.constructor;
                          b == y ||
                            !("constructor" in e) ||
                            !("constructor" in t) ||
                            ("function" == typeof b &&
                              b instanceof b &&
                              "function" == typeof y &&
                              y instanceof y) ||
                            (m = !1);
                        }
                        return (i.delete(e), i.delete(t), m);
                      })(e, t, a, s, l, c))
                    );
                  })(e, t, eb, a, s, l)
                : e != e && t != t)
            );
          }
          function ey(e, t, a, r, n, i) {
            var o = 2 & n,
              s = e.length,
              l = t.length;
            if (s != l && !(o && l > s)) return !1;
            var c = i.get(e);
            if (c && i.get(t)) return c == t;
            var u = -1,
              d = !0,
              m = 1 & n ? new el() : void 0;
            for (i.set(e, t), i.set(t, e); ++u < s; ) {
              var p = e[u],
                h = t[u];
              if (r) var f = o ? r(h, p, u, t, e, i) : r(p, h, u, e, t, i);
              if (void 0 !== f) {
                if (f) continue;
                d = !1;
                break;
              }
              if (m) {
                if (
                  !(function (e, t) {
                    for (var a = -1, r = e ? e.length : 0; ++a < r; ) if (t(e[a], a, e)) return !0;
                    return !1;
                  })(t, function (e, t) {
                    if (!m.has(t) && (p === e || a(p, e, r, n, i))) return m.add(t);
                  })
                ) {
                  d = !1;
                  break;
                }
              } else if (p !== h && !a(p, h, r, n, i)) {
                d = !1;
                break;
              }
            }
            return (i.delete(e), i.delete(t), d);
          }
          function ev(e, t) {
            var a,
              r = e.__data__;
            return (
              "string" == (a = typeof t) || "number" == a || "symbol" == a || "boolean" == a
                ? "__proto__" !== t
                : null === t
            )
              ? r["string" == typeof t ? "string" : "hash"]
              : r.map;
          }
          function ex(e, t) {
            var a = null == e ? void 0 : e[t];
            return !(!eR(a) || (R && R in a)) && (eD(a) || S(a) ? z : m).test(ej(a)) ? a : void 0;
          }
          var ek = function (e) {
            return M.call(e);
          };
          function ew(e, t) {
            return (
              !!(t = null == t ? 0x1fffffffffffff : t) &&
              ("number" == typeof e || p.test(e)) &&
              e > -1 &&
              e % 1 == 0 &&
              e < t
            );
          }
          function e_(e, t) {
            if (eA(e)) return !1;
            var a = typeof e;
            return (
              !("number" != a && "symbol" != a && "boolean" != a && null != e && !eP(e)) ||
              l.test(e) ||
              !s.test(e) ||
              (null != t && e in Object(t))
            );
          }
          function eC(e, t) {
            return function (a) {
              return null != a && a[e] === t && (void 0 !== t || e in Object(a));
            };
          }
          ((W && "[object DataView]" != ek(new W(new ArrayBuffer(1)))) ||
            (H && ek(new H()) != n) ||
            (Z && "[object Promise]" != ek(Z.resolve())) ||
            (Y && ek(new Y()) != o) ||
            (G && "[object WeakMap]" != ek(new G()))) &&
            (ek = function (e) {
              var t = M.call(e),
                a = t == i ? e.constructor : void 0,
                r = a ? ej(a) : void 0;
              if (r)
                switch (r) {
                  case Q:
                    return "[object DataView]";
                  case J:
                    return n;
                  case X:
                    return "[object Promise]";
                  case ee:
                    return o;
                  case et:
                    return "[object WeakMap]";
                }
              return t;
            });
          var eS = eN(function (e) {
            e =
              null == (t = e)
                ? ""
                : (function (e) {
                    if ("string" == typeof e) return e;
                    if (eP(e)) return en ? en.call(e) : "";
                    var t = e + "";
                    return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                  })(t);
            var t,
              a = [];
            return (
              c.test(e) && a.push(""),
              e.replace(u, function (e, t, r, n) {
                a.push(r ? n.replace(d, "$1") : t || e);
              }),
              a
            );
          });
          function eT(e) {
            if ("string" == typeof e || eP(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
          }
          function ej(e) {
            if (null != e) {
              try {
                return B.call(e);
              } catch (e) {}
              try {
                return e + "";
              } catch (e) {}
            }
            return "";
          }
          function eN(e, t) {
            if ("function" != typeof e || (t && "function" != typeof t))
              throw TypeError("Expected a function");
            var a = function () {
              var r = arguments,
                n = t ? t.apply(this, r) : r[0],
                i = a.cache;
              if (i.has(n)) return i.get(n);
              var o = e.apply(this, r);
              return ((a.cache = i.set(n, o)), o);
            };
            return ((a.cache = new (eN.Cache || es)()), a);
          }
          function eE(e, t) {
            return e === t || (e != e && t != t);
          }
          function eI(e) {
            return (
              eB(e) && eO(e) && P.call(e, "callee") && (!V.call(e, "callee") || M.call(e) == r)
            );
          }
          eN.Cache = es;
          var eA = Array.isArray;
          function eO(e) {
            return null != e && eL(e.length) && !eD(e);
          }
          function eD(e) {
            var t = eR(e) ? M.call(e) : "";
            return "[object Function]" == t || "[object GeneratorFunction]" == t;
          }
          function eL(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 0x1fffffffffffff;
          }
          function eR(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t);
          }
          function eB(e) {
            return !!e && "object" == typeof e;
          }
          function eP(e) {
            return "symbol" == typeof e || (eB(e) && "[object Symbol]" == M.call(e));
          }
          var eM = w
            ? function (e) {
                return w(e);
              }
            : function (e) {
                return eB(e) && eL(e.length) && !!h[M.call(e)];
              };
          function ez(e) {
            return eO(e)
              ? (function (e) {
                  var t =
                      eA(e) || eI(e)
                        ? (function (e, t) {
                            for (var a = -1, r = Array(e); ++a < e; ) r[a] = t(a);
                            return r;
                          })(e.length, String)
                        : [],
                    a = t.length,
                    r = !!a;
                  for (var n in e) !P.call(e, n) || (r && ("length" == n || ew(n, a))) || t.push(n);
                  return t;
                })(e)
              : (function (e) {
                  if (
                    ((a = ("function" == typeof (t = e && e.constructor) && t.prototype) || D),
                    e !== a)
                  )
                    return q(e);
                  var t,
                    a,
                    r = [];
                  for (var n in Object(e)) P.call(e, n) && "constructor" != n && r.push(n);
                  return r;
                })(e);
          }
          function eU(e) {
            return e;
          }
          a.exports = function (e, t, a) {
            var r,
              n,
              i,
              o,
              s,
              l = eA(e) ? _ : C,
              c = arguments.length < 3;
            return l(
              e,
              "function" == typeof t
                ? t
                : null == t
                  ? eU
                  : "object" == typeof t
                    ? eA(t)
                      ? ((i = t[0]),
                        (o = t[1]),
                        e_(i) && (r = o) == r && !eR(r)
                          ? eC(eT(i), o)
                          : function (e) {
                              var t,
                                a = void 0 === (t = null == e ? void 0 : ef(e, i)) ? void 0 : t;
                              return void 0 === a && a === o
                                ? null != e &&
                                    (function (e, t, a) {
                                      var r;
                                      t = e_(t, e) ? [t] : eA((r = t)) ? r : eS(r);
                                      for (var n, i = -1, o = t.length; ++i < o; ) {
                                        var s = eT(t[i]);
                                        if (!(n = null != e && a(e, s))) break;
                                        e = e[s];
                                      }
                                      return (
                                        n ||
                                        (!!(o = e ? e.length : 0) &&
                                          eL(o) &&
                                          ew(s, o) &&
                                          (eA(e) || eI(e)))
                                      );
                                    })(e, i, eg)
                                : eb(o, a, void 0, 3);
                            })
                      : 1 ==
                            (s = (function (e) {
                              for (var t = ez(e), a = t.length; a--; ) {
                                var r,
                                  n = t[a],
                                  i = e[n];
                                t[a] = [n, i, (r = i) == r && !eR(r)];
                              }
                              return t;
                            })(t)).length && s[0][2]
                        ? eC(s[0][0], s[0][1])
                        : function (e) {
                            return (
                              e === t ||
                              (function (e, t) {
                                var a = t.length,
                                  r = a;
                                if (null == e) return !r;
                                for (e = Object(e); a--; ) {
                                  var n = t[a];
                                  if ((0, n[2]) ? n[1] !== e[n[0]] : !(n[0] in e)) return !1;
                                }
                                for (; ++a < r; ) {
                                  var i = (n = t[a])[0],
                                    o = e[i],
                                    s = n[1];
                                  if ((0, n[2])) {
                                    if (void 0 === o && !(i in e)) return !1;
                                  } else {
                                    var l,
                                      c = new ec();
                                    if (!(void 0 === l ? eb(s, o, void 0, 3, c) : l)) return !1;
                                  }
                                }
                                return !0;
                              })(e, s)
                            );
                          }
                    : e_(t)
                      ? ((n = eT(t)),
                        function (e) {
                          return null == e ? void 0 : e[n];
                        })
                      : function (e) {
                          return ef(e, t);
                        },
              a,
              c,
              ep
            );
          };
        }).call(this, a(3), a(7)(e));
      },
      function (e, t) {
        e.exports = function (e) {
          return (
            e.webpackPolyfill ||
              ((e.deprecate = function () {}),
              (e.paths = []),
              e.children || (e.children = []),
              Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function () {
                  return e.l;
                },
              }),
              Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function () {
                  return e.i;
                },
              }),
              (e.webpackPolyfill = 1)),
            e
          );
        };
      },
      function (e, t) {
        String.prototype.padEnd ||
          (String.prototype.padEnd = function (e, t) {
            return (
              (e >>= 0),
              (t = String(void 0 !== t ? t : " ")),
              this.length > e
                ? String(this)
                : ((e -= this.length) > t.length && (t += t.repeat(e / t.length)),
                  String(this) + t.slice(0, e))
            );
          });
      },
      function (e, t, a) {
        "use strict";
        function r(e, t, a) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = a),
            e
          );
        }
        function n(e) {
          if (
            Symbol.iterator in Object(e) ||
            "[object Arguments]" === Object.prototype.toString.call(e)
          )
            return Array.from(e);
        }
        function i(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) {
                for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
                return a;
              }
            })(e) ||
            n(e) ||
            (function () {
              throw TypeError("Invalid attempt to spread non-iterable instance");
            })()
          );
        }
        function o(e) {
          if (Array.isArray(e)) return e;
        }
        function s() {
          throw TypeError("Invalid attempt to destructure non-iterable instance");
        }
        function l(e, t) {
          if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
        }
        function c(e, t) {
          for (var a = 0; a < t.length; a++) {
            var r = t[a];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r));
          }
        }
        function u(e) {
          return (u =
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
        function d(e) {
          return (d =
            "function" == typeof Symbol && "symbol" === u(Symbol.iterator)
              ? function (e) {
                  return u(e);
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : u(e);
                })(e);
        }
        function m(e) {
          if (void 0 === e)
            throw ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }
        function p(e) {
          return (p = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function h(e, t) {
          return (h =
            Object.setPrototypeOf ||
            function (e, t) {
              return ((e.__proto__ = t), e);
            })(e, t);
        }
        a.r(t);
        var f = a(0),
          g = a.n(f),
          b = a(5),
          y = a.n(b),
          v = a(4),
          x = a.n(v),
          k = a(6),
          w = a.n(k),
          _ = a(2),
          C = a.n(_),
          S = a(1),
          T = a.n(S);
        function j(e, t) {
          return (
            o(e) ||
            (function (e, t) {
              var a = [],
                r = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var o, s = e[Symbol.iterator]();
                  !(r = (o = s.next()).done) && (a.push(o.value), !t || a.length !== t);
                  r = !0
                );
              } catch (e) {
                ((n = !0), (i = e));
              } finally {
                try {
                  r || null == s.return || s.return();
                } finally {
                  if (n) throw i;
                }
              }
              return a;
            })(e, t) ||
            s()
          );
        }
        a(8);
        var N = [
            ["Afghanistan", ["asia"], "af", "93"],
            ["Albania", ["europe"], "al", "355"],
            ["Algeria", ["africa", "north-africa"], "dz", "213"],
            ["Andorra", ["europe"], "ad", "376"],
            ["Angola", ["africa"], "ao", "244"],
            ["Antigua and Barbuda", ["america", "carribean"], "ag", "1268"],
            [
              "Argentina",
              ["america", "south-america"],
              "ar",
              "54",
              "(..) ........",
              0,
              [
                "11",
                "221",
                "223",
                "261",
                "264",
                "2652",
                "280",
                "2905",
                "291",
                "2920",
                "2966",
                "299",
                "341",
                "342",
                "343",
                "351",
                "376",
                "379",
                "381",
                "3833",
                "385",
                "387",
                "388",
              ],
            ],
            ["Armenia", ["asia", "ex-ussr"], "am", "374", ".. ......"],
            ["Aruba", ["america", "carribean"], "aw", "297"],
            [
              "Australia",
              ["oceania"],
              "au",
              "61",
              "(..) .... ....",
              0,
              ["2", "3", "4", "7", "8", "02", "03", "04", "07", "08"],
            ],
            ["Austria", ["europe", "eu-union"], "at", "43"],
            ["Azerbaijan", ["asia", "ex-ussr"], "az", "994", "(..) ... .. .."],
            ["Bahamas", ["america", "carribean"], "bs", "1242"],
            ["Bahrain", ["middle-east"], "bh", "973"],
            ["Bangladesh", ["asia"], "bd", "880"],
            ["Barbados", ["america", "carribean"], "bb", "1246"],
            ["Belarus", ["europe", "ex-ussr"], "by", "375", "(..) ... .. .."],
            ["Belgium", ["europe", "eu-union"], "be", "32", "... .. .. .."],
            ["Belize", ["america", "central-america"], "bz", "501"],
            ["Benin", ["africa"], "bj", "229"],
            ["Bhutan", ["asia"], "bt", "975"],
            ["Bolivia", ["america", "south-america"], "bo", "591"],
            ["Bosnia and Herzegovina", ["europe", "ex-yugos"], "ba", "387"],
            ["Botswana", ["africa"], "bw", "267"],
            ["Brazil", ["america", "south-america"], "br", "55", "(..) ........."],
            ["British Indian Ocean Territory", ["asia"], "io", "246"],
            ["Brunei", ["asia"], "bn", "673"],
            ["Bulgaria", ["europe", "eu-union"], "bg", "359"],
            ["Burkina Faso", ["africa"], "bf", "226"],
            ["Burundi", ["africa"], "bi", "257"],
            ["Cambodia", ["asia"], "kh", "855"],
            ["Cameroon", ["africa"], "cm", "237"],
            [
              "Canada",
              ["america", "north-america"],
              "ca",
              "1",
              "(...) ...-....",
              1,
              [
                "204",
                "226",
                "236",
                "249",
                "250",
                "289",
                "306",
                "343",
                "365",
                "387",
                "403",
                "416",
                "418",
                "431",
                "437",
                "438",
                "450",
                "506",
                "514",
                "519",
                "548",
                "579",
                "581",
                "587",
                "604",
                "613",
                "639",
                "647",
                "672",
                "705",
                "709",
                "742",
                "778",
                "780",
                "782",
                "807",
                "819",
                "825",
                "867",
                "873",
                "902",
                "905",
              ],
            ],
            ["Cape Verde", ["africa"], "cv", "238"],
            ["Caribbean Netherlands", ["america", "carribean"], "bq", "599", "", 1],
            ["Central African Republic", ["africa"], "cf", "236"],
            ["Chad", ["africa"], "td", "235"],
            ["Chile", ["america", "south-america"], "cl", "56"],
            ["China", ["asia"], "cn", "86", "..-........."],
            ["Colombia", ["america", "south-america"], "co", "57", "... ... ...."],
            ["Comoros", ["africa"], "km", "269"],
            ["Congo", ["africa"], "cd", "243"],
            ["Congo", ["africa"], "cg", "242"],
            ["Costa Rica", ["america", "central-america"], "cr", "506", "....-...."],
            ["Côte d’Ivoire", ["africa"], "ci", "225", ".. .. .. .."],
            ["Croatia", ["europe", "eu-union", "ex-yugos"], "hr", "385"],
            ["Cuba", ["america", "carribean"], "cu", "53"],
            ["Curaçao", ["america", "carribean"], "cw", "599", "", 0],
            ["Cyprus", ["europe", "eu-union"], "cy", "357", ".. ......"],
            ["Czech Republic", ["europe", "eu-union"], "cz", "420", "... ... ..."],
            ["Denmark", ["europe", "eu-union", "baltic"], "dk", "45", ".. .. .. .."],
            ["Djibouti", ["africa"], "dj", "253"],
            ["Dominica", ["america", "carribean"], "dm", "1767"],
            [
              "Dominican Republic",
              ["america", "carribean"],
              "do",
              "1",
              "",
              2,
              ["809", "829", "849"],
            ],
            ["Ecuador", ["america", "south-america"], "ec", "593"],
            ["Egypt", ["africa", "north-africa"], "eg", "20"],
            ["El Salvador", ["america", "central-america"], "sv", "503", "....-...."],
            ["Equatorial Guinea", ["africa"], "gq", "240"],
            ["Eritrea", ["africa"], "er", "291"],
            ["Estonia", ["europe", "eu-union", "ex-ussr", "baltic"], "ee", "372", ".... ......"],
            ["Ethiopia", ["africa"], "et", "251"],
            ["Fiji", ["oceania"], "fj", "679"],
            ["Finland", ["europe", "eu-union", "baltic"], "fi", "358", ".. ... .. .."],
            ["France", ["europe", "eu-union"], "fr", "33", ". .. .. .. .."],
            ["French Guiana", ["america", "south-america"], "gf", "594"],
            ["French Polynesia", ["oceania"], "pf", "689"],
            ["Gabon", ["africa"], "ga", "241"],
            ["Gambia", ["africa"], "gm", "220"],
            ["Georgia", ["asia", "ex-ussr"], "ge", "995"],
            ["Germany", ["europe", "eu-union", "baltic"], "de", "49", ".... ........"],
            ["Ghana", ["africa"], "gh", "233"],
            ["Greece", ["europe", "eu-union"], "gr", "30"],
            ["Grenada", ["america", "carribean"], "gd", "1473"],
            ["Guadeloupe", ["america", "carribean"], "gp", "590", "", 0],
            ["Guam", ["oceania"], "gu", "1671"],
            ["Guatemala", ["america", "central-america"], "gt", "502", "....-...."],
            ["Guinea", ["africa"], "gn", "224"],
            ["Guinea-Bissau", ["africa"], "gw", "245"],
            ["Guyana", ["america", "south-america"], "gy", "592"],
            ["Haiti", ["america", "carribean"], "ht", "509", "....-...."],
            ["Honduras", ["america", "central-america"], "hn", "504"],
            ["Hong Kong", ["asia"], "hk", "852", ".... ...."],
            ["Hungary", ["europe", "eu-union"], "hu", "36"],
            ["Iceland", ["europe"], "is", "354", "... ...."],
            ["India", ["asia"], "in", "91", ".....-....."],
            ["Indonesia", ["asia"], "id", "62"],
            ["Iran", ["middle-east"], "ir", "98", "... ... ...."],
            ["Iraq", ["middle-east"], "iq", "964"],
            ["Ireland", ["europe", "eu-union"], "ie", "353", ".. ......."],
            ["Israel", ["middle-east"], "il", "972", "... ... ...."],
            ["Italy", ["europe", "eu-union"], "it", "39", "... .......", 0],
            ["Jamaica", ["america", "carribean"], "jm", "1876"],
            ["Japan", ["asia"], "jp", "81", ".. .... ...."],
            ["Jordan", ["middle-east"], "jo", "962"],
            [
              "Kazakhstan",
              ["asia", "ex-ussr"],
              "kz",
              "7",
              "... ...-..-..",
              1,
              [
                "310",
                "311",
                "312",
                "313",
                "315",
                "318",
                "321",
                "324",
                "325",
                "326",
                "327",
                "336",
                "7172",
                "73622",
              ],
            ],
            ["Kenya", ["africa"], "ke", "254"],
            ["Kiribati", ["oceania"], "ki", "686"],
            ["Kosovo", ["europe", "ex-yugos"], "xk", "383"],
            ["Kuwait", ["middle-east"], "kw", "965"],
            ["Kyrgyzstan", ["asia", "ex-ussr"], "kg", "996", "... ... ..."],
            ["Laos", ["asia"], "la", "856"],
            ["Latvia", ["europe", "eu-union", "ex-ussr", "baltic"], "lv", "371", ".. ... ..."],
            ["Lebanon", ["middle-east"], "lb", "961"],
            ["Lesotho", ["africa"], "ls", "266"],
            ["Liberia", ["africa"], "lr", "231"],
            ["Libya", ["africa", "north-africa"], "ly", "218"],
            ["Liechtenstein", ["europe"], "li", "423"],
            ["Lithuania", ["europe", "eu-union", "ex-ussr", "baltic"], "lt", "370"],
            ["Luxembourg", ["europe", "eu-union"], "lu", "352"],
            ["Macau", ["asia"], "mo", "853"],
            ["Macedonia", ["europe", "ex-yugos"], "mk", "389"],
            ["Madagascar", ["africa"], "mg", "261"],
            ["Malawi", ["africa"], "mw", "265"],
            ["Malaysia", ["asia"], "my", "60", "..-....-...."],
            ["Maldives", ["asia"], "mv", "960"],
            ["Mali", ["africa"], "ml", "223"],
            ["Malta", ["europe", "eu-union"], "mt", "356"],
            ["Marshall Islands", ["oceania"], "mh", "692"],
            ["Martinique", ["america", "carribean"], "mq", "596"],
            ["Mauritania", ["africa"], "mr", "222"],
            ["Mauritius", ["africa"], "mu", "230"],
            [
              "Mexico",
              ["america", "central-america"],
              "mx",
              "52",
              "... ... ....",
              0,
              ["55", "81", "33", "656", "664", "998", "774", "229"],
            ],
            ["Micronesia", ["oceania"], "fm", "691"],
            ["Moldova", ["europe"], "md", "373", "(..) ..-..-.."],
            ["Monaco", ["europe"], "mc", "377"],
            ["Mongolia", ["asia"], "mn", "976"],
            ["Montenegro", ["europe", "ex-yugos"], "me", "382"],
            ["Morocco", ["africa", "north-africa"], "ma", "212"],
            ["Mozambique", ["africa"], "mz", "258"],
            ["Myanmar", ["asia"], "mm", "95"],
            ["Namibia", ["africa"], "na", "264"],
            ["Nauru", ["africa"], "nr", "674"],
            ["Nepal", ["asia"], "np", "977"],
            ["Netherlands", ["europe", "eu-union"], "nl", "31", ".. ........"],
            ["New Caledonia", ["oceania"], "nc", "687"],
            ["New Zealand", ["oceania"], "nz", "64", "...-...-...."],
            ["Nicaragua", ["america", "central-america"], "ni", "505"],
            ["Niger", ["africa"], "ne", "227"],
            ["Nigeria", ["africa"], "ng", "234"],
            ["North Korea", ["asia"], "kp", "850"],
            ["Norway", ["europe", "baltic"], "no", "47", "... .. ..."],
            ["Oman", ["middle-east"], "om", "968"],
            ["Pakistan", ["asia"], "pk", "92", "...-......."],
            ["Palau", ["oceania"], "pw", "680"],
            ["Palestine", ["middle-east"], "ps", "970"],
            ["Panama", ["america", "central-america"], "pa", "507"],
            ["Papua New Guinea", ["oceania"], "pg", "675"],
            ["Paraguay", ["america", "south-america"], "py", "595"],
            ["Peru", ["america", "south-america"], "pe", "51"],
            ["Philippines", ["asia"], "ph", "63", ".... ......."],
            ["Poland", ["europe", "eu-union", "baltic"], "pl", "48", "...-...-..."],
            ["Portugal", ["europe", "eu-union"], "pt", "351"],
            ["Puerto Rico", ["america", "carribean"], "pr", "1", "", 3, ["787", "939"]],
            ["Qatar", ["middle-east"], "qa", "974"],
            ["Réunion", ["africa"], "re", "262"],
            ["Romania", ["europe", "eu-union"], "ro", "40"],
            ["Russia", ["europe", "asia", "ex-ussr", "baltic"], "ru", "7", "(...) ...-..-..", 0],
            ["Rwanda", ["africa"], "rw", "250"],
            ["Saint Kitts and Nevis", ["america", "carribean"], "kn", "1869"],
            ["Saint Lucia", ["america", "carribean"], "lc", "1758"],
            ["Saint Vincent and the Grenadines", ["america", "carribean"], "vc", "1784"],
            ["Samoa", ["oceania"], "ws", "685"],
            ["San Marino", ["europe"], "sm", "378"],
            ["São Tomé and Príncipe", ["africa"], "st", "239"],
            ["Saudi Arabia", ["middle-east"], "sa", "966"],
            ["Senegal", ["africa"], "sn", "221"],
            ["Serbia", ["europe", "ex-yugos"], "rs", "381"],
            ["Seychelles", ["africa"], "sc", "248"],
            ["Sierra Leone", ["africa"], "sl", "232"],
            ["Singapore", ["asia"], "sg", "65", "....-...."],
            ["Slovakia", ["europe", "eu-union"], "sk", "421"],
            ["Slovenia", ["europe", "eu-union", "ex-yugos"], "si", "386"],
            ["Solomon Islands", ["oceania"], "sb", "677"],
            ["Somalia", ["africa"], "so", "252"],
            ["South Africa", ["africa"], "za", "27"],
            ["South Korea", ["asia"], "kr", "82", "... .... ...."],
            ["South Sudan", ["africa", "north-africa"], "ss", "211"],
            ["Spain", ["europe", "eu-union"], "es", "34", "... ... ..."],
            ["Sri Lanka", ["asia"], "lk", "94"],
            ["Sudan", ["africa"], "sd", "249"],
            ["Suriname", ["america", "south-america"], "sr", "597"],
            ["Swaziland", ["africa"], "sz", "268"],
            ["Sweden", ["europe", "eu-union", "baltic"], "se", "46", "(...) ...-..."],
            ["Switzerland", ["europe"], "ch", "41", ".. ... .. .."],
            ["Syria", ["middle-east"], "sy", "963"],
            ["Taiwan", ["asia"], "tw", "886"],
            ["Tajikistan", ["asia", "ex-ussr"], "tj", "992"],
            ["Tanzania", ["africa"], "tz", "255"],
            ["Thailand", ["asia"], "th", "66"],
            ["Timor-Leste", ["asia"], "tl", "670"],
            ["Togo", ["africa"], "tg", "228"],
            ["Tonga", ["oceania"], "to", "676"],
            ["Trinidad and Tobago", ["america", "carribean"], "tt", "1868"],
            ["Tunisia", ["africa", "north-africa"], "tn", "216"],
            ["Turkey", ["europe"], "tr", "90", "... ... .. .."],
            ["Turkmenistan", ["asia", "ex-ussr"], "tm", "993"],
            ["Tuvalu", ["asia"], "tv", "688"],
            ["Uganda", ["africa"], "ug", "256"],
            ["Ukraine", ["europe", "ex-ussr"], "ua", "380", "(..) ... .. .."],
            ["United Arab Emirates", ["middle-east"], "ae", "971"],
            ["United Kingdom", ["europe", "eu-union"], "gb", "44", ".... ......"],
            [
              "United States",
              ["america", "north-america"],
              "us",
              "1",
              "(...) ...-....",
              0,
              [
                "907",
                "205",
                "251",
                "256",
                "334",
                "479",
                "501",
                "870",
                "480",
                "520",
                "602",
                "623",
                "928",
                "209",
                "213",
                "310",
                "323",
                "408",
                "415",
                "510",
                "530",
                "559",
                "562",
                "619",
                "626",
                "650",
                "661",
                "707",
                "714",
                "760",
                "805",
                "818",
                "831",
                "858",
                "909",
                "916",
                "925",
                "949",
                "951",
                "303",
                "719",
                "970",
                "203",
                "860",
                "202",
                "302",
                "239",
                "305",
                "321",
                "352",
                "386",
                "407",
                "561",
                "727",
                "772",
                "813",
                "850",
                "863",
                "904",
                "941",
                "954",
                "229",
                "404",
                "478",
                "706",
                "770",
                "912",
                "808",
                "319",
                "515",
                "563",
                "641",
                "712",
                "208",
                "217",
                "309",
                "312",
                "618",
                "630",
                "708",
                "773",
                "815",
                "847",
                "219",
                "260",
                "317",
                "574",
                "765",
                "812",
                "316",
                "620",
                "785",
                "913",
                "270",
                "502",
                "606",
                "859",
                "225",
                "318",
                "337",
                "504",
                "985",
                "413",
                "508",
                "617",
                "781",
                "978",
                "301",
                "410",
                "207",
                "231",
                "248",
                "269",
                "313",
                "517",
                "586",
                "616",
                "734",
                "810",
                "906",
                "989",
                "218",
                "320",
                "507",
                "612",
                "651",
                "763",
                "952",
                "314",
                "417",
                "573",
                "636",
                "660",
                "816",
                "228",
                "601",
                "662",
                "406",
                "252",
                "336",
                "704",
                "828",
                "910",
                "919",
                "701",
                "308",
                "402",
                "603",
                "201",
                "609",
                "732",
                "856",
                "908",
                "973",
                "505",
                "575",
                "702",
                "775",
                "212",
                "315",
                "516",
                "518",
                "585",
                "607",
                "631",
                "716",
                "718",
                "845",
                "914",
                "216",
                "330",
                "419",
                "440",
                "513",
                "614",
                "740",
                "937",
                "405",
                "580",
                "918",
                "503",
                "541",
                "215",
                "412",
                "570",
                "610",
                "717",
                "724",
                "814",
                "401",
                "803",
                "843",
                "864",
                "605",
                "423",
                "615",
                "731",
                "865",
                "901",
                "931",
                "210",
                "214",
                "254",
                "281",
                "325",
                "361",
                "409",
                "432",
                "512",
                "713",
                "806",
                "817",
                "830",
                "903",
                "915",
                "936",
                "940",
                "956",
                "972",
                "979",
                "435",
                "801",
                "276",
                "434",
                "540",
                "703",
                "757",
                "804",
                "802",
                "206",
                "253",
                "360",
                "425",
                "509",
                "262",
                "414",
                "608",
                "715",
                "920",
                "304",
                "307",
              ],
            ],
            ["Uruguay", ["america", "south-america"], "uy", "598"],
            ["Uzbekistan", ["asia", "ex-ussr"], "uz", "998", ".. ... .. .."],
            ["Vanuatu", ["oceania"], "vu", "678"],
            ["Vatican City", ["europe"], "va", "39", ".. .... ....", 1],
            ["Venezuela", ["america", "south-america"], "ve", "58"],
            ["Vietnam", ["asia"], "vn", "84"],
            ["Yemen", ["middle-east"], "ye", "967"],
            ["Zambia", ["africa"], "zm", "260"],
            ["Zimbabwe", ["africa"], "zw", "263"],
          ],
          E = [
            ["American Samoa", ["oceania"], "as", "1684"],
            ["Anguilla", ["america", "carribean"], "ai", "1264"],
            ["Bermuda", ["america", "north-america"], "bm", "1441"],
            ["British Virgin Islands", ["america", "carribean"], "vg", "1284"],
            ["Cayman Islands", ["america", "carribean"], "ky", "1345"],
            ["Cook Islands", ["oceania"], "ck", "682"],
            ["Falkland Islands", ["america", "south-america"], "fk", "500"],
            ["Faroe Islands", ["europe"], "fo", "298"],
            ["Gibraltar", ["europe"], "gi", "350"],
            ["Greenland", ["america"], "gl", "299"],
            ["Jersey", ["europe", "eu-union"], "je", "44", ".... ......"],
            ["Montserrat", ["america", "carribean"], "ms", "1664"],
            ["Niue", ["asia"], "nu", "683"],
            ["Norfolk Island", ["oceania"], "nf", "672"],
            ["Northern Mariana Islands", ["oceania"], "mp", "1670"],
            ["Saint Barthélemy", ["america", "carribean"], "bl", "590", "", 1],
            ["Saint Helena", ["africa"], "sh", "290"],
            ["Saint Martin", ["america", "carribean"], "mf", "590", "", 2],
            ["Saint Pierre and Miquelon", ["america", "north-america"], "pm", "508"],
            ["Sint Maarten", ["america", "carribean"], "sx", "1721"],
            ["Tokelau", ["oceania"], "tk", "690"],
            ["Turks and Caicos Islands", ["america", "carribean"], "tc", "1649"],
            ["U.S. Virgin Islands", ["america", "carribean"], "vi", "1340"],
            ["Wallis and Futuna", ["oceania"], "wf", "681"],
          ];
        function I(e, t, a, n, o) {
          var s,
            l,
            c = [];
          return (
            (l = !0 === t),
            [
              (s = []).concat.apply(
                s,
                i(
                  e.map(function (e) {
                    var i,
                      s,
                      u = {
                        name: e[0],
                        regions: e[1],
                        iso2: e[2],
                        countryCode: e[3],
                        dialCode: e[3],
                        format:
                          ((i = e[3]),
                          (s = e[4]),
                          !s || o
                            ? a + "".padEnd(i.length, ".") + " " + n
                            : a + "".padEnd(i.length, ".") + " " + s),
                        priority: e[5] || 0,
                      },
                      d = [];
                    return (
                      e[6] &&
                        e[6].map(function (t) {
                          var a = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var a = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(a);
                              ("function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                  Object.getOwnPropertySymbols(a).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                  })
                                )),
                                n.forEach(function (t) {
                                  r(e, t, a[t]);
                                }));
                            }
                            return e;
                          })({}, u);
                          ((a.dialCode = e[3] + t),
                            (a.isAreaCode = !0),
                            (a.areaCodeLength = t.length),
                            d.push(a));
                        }),
                      d.length > 0
                        ? ((u.mainCode = !0),
                          l || ("Array" === t.constructor.name && t.includes(e[2]))
                            ? ((u.hasAreaCodes = !0), [u].concat(d))
                            : ((c = c.concat(d)), [u]))
                        : [u]
                    );
                  })
                )
              ),
              c,
            ]
          );
        }
        function A(e, t, a, r) {
          if (null !== a) {
            var n = Object.keys(a),
              i = Object.values(a);
            n.forEach(function (a, n) {
              if (r) return e.push([a, i[n]]);
              var o = e.findIndex(function (e) {
                return e[0] === a;
              });
              if (-1 === o) {
                var s = [a];
                ((s[t] = i[n]), e.push(s));
              } else e[o][t] = i[n];
            });
          }
        }
        function O(e, t) {
          return 0 === t.length
            ? e
            : e.map(function (e) {
                var a = t.findIndex(function (t) {
                  return t[0] === e[2];
                });
                if (-1 === a) return e;
                var r = t[a];
                return (r[1] && (e[4] = r[1]), r[3] && (e[5] = r[3]), r[2] && (e[6] = r[2]), e);
              });
        }
        var D = function e(t, a, r, n, o, s, c, u, d, m, p, h, f, g) {
            (l(this, e),
              (this.filterRegions = function (e, t) {
                return "string" == typeof e
                  ? t.filter(function (t) {
                      return t.regions.some(function (t) {
                        return t === e;
                      });
                    })
                  : t.filter(function (t) {
                      return e
                        .map(function (e) {
                          return t.regions.some(function (t) {
                            return t === e;
                          });
                        })
                        .some(function (e) {
                          return e;
                        });
                    });
              }),
              (this.sortTerritories = function (e, t) {
                var a = [].concat(i(e), i(t));
                return (
                  a.sort(function (e, t) {
                    return e.name < t.name ? -1 : +(e.name > t.name);
                  }),
                  a
                );
              }),
              (this.getFilteredCountryList = function (e, t, a) {
                return 0 === e.length
                  ? t
                  : a
                    ? e
                        .map(function (e) {
                          var a = t.find(function (t) {
                            return t.iso2 === e;
                          });
                          if (a) return a;
                        })
                        .filter(function (e) {
                          return e;
                        })
                    : t.filter(function (t) {
                        return e.some(function (e) {
                          return e === t.iso2;
                        });
                      });
              }),
              (this.localizeCountries = function (e, t, a) {
                for (var r = 0; r < e.length; r++)
                  void 0 !== t[e[r].iso2]
                    ? (e[r].localName = t[e[r].iso2])
                    : void 0 !== t[e[r].name] && (e[r].localName = t[e[r].name]);
                return (
                  a ||
                    e.sort(function (e, t) {
                      return e.localName < t.localName ? -1 : +(e.localName > t.localName);
                    }),
                  e
                );
              }),
              (this.getCustomAreas = function (e, t) {
                for (var a = [], r = 0; r < t.length; r++) {
                  var n = JSON.parse(JSON.stringify(e));
                  ((n.dialCode += t[r]), a.push(n));
                }
                return a;
              }),
              (this.excludeCountries = function (e, t) {
                return 0 === t.length
                  ? e
                  : e.filter(function (e) {
                      return !t.includes(e.iso2);
                    });
              }));
            var b,
              y = (A((b = []), 1, u, !0), A(b, 3, d), A(b, 2, m), b),
              v = O(JSON.parse(JSON.stringify(N)), y),
              x = O(JSON.parse(JSON.stringify(E)), y),
              k = j(I(v, t, h, f, g), 2),
              w = k[0],
              _ = k[1];
            if (a) {
              var C = j(I(x, t, h, f, g), 2),
                S = C[0];
              (C[1], (w = this.sortTerritories(S, w)));
            }
            (r && (w = this.filterRegions(r, w)),
              (this.onlyCountries = this.localizeCountries(
                this.excludeCountries(
                  this.getFilteredCountryList(n, w, c.includes("onlyCountries")),
                  s
                ),
                p,
                c.includes("onlyCountries")
              )),
              (this.preferredCountries =
                0 === o.length
                  ? []
                  : this.localizeCountries(
                      this.getFilteredCountryList(o, w, c.includes("preferredCountries")),
                      p,
                      c.includes("preferredCountries")
                    )),
              (this.hiddenAreaCodes = this.excludeCountries(this.getFilteredCountryList(n, _), s)));
          },
          L = (function (e) {
            var t, a;
            function u(e) {
              (l(this, u),
                ((a =
                  (t = p(u).call(this, e)) && ("object" === d(t) || "function" == typeof t)
                    ? t
                    : m(this)).getProbableCandidate = x()(function (e) {
                  return e && 0 !== e.length
                    ? a.state.onlyCountries.filter(
                        function (t) {
                          return C()(t.name.toLowerCase(), e.toLowerCase());
                        },
                        m(m(a))
                      )[0]
                    : null;
                })),
                (a.guessSelectedCountry = x()(function (e, t, r, n) {
                  if (
                    !1 === a.props.enableAreaCodes &&
                    (n.some(function (t) {
                      if (C()(e, t.dialCode))
                        return (
                          r.some(function (e) {
                            if (t.iso2 === e.iso2 && e.mainCode) return ((i = e), !0);
                          }),
                          !0
                        );
                    }),
                    i)
                  )
                    return i;
                  var i,
                    o = r.find(function (e) {
                      return e.iso2 == t;
                    });
                  if ("" === e.trim()) return o;
                  var s = r.reduce(
                    function (t, a) {
                      return C()(e, a.dialCode) &&
                        (a.dialCode.length > t.dialCode.length ||
                          (a.dialCode.length === t.dialCode.length && a.priority < t.priority))
                        ? a
                        : t;
                    },
                    { dialCode: "", priority: 10001 },
                    m(m(a))
                  );
                  return s.name ? s : o;
                })),
                (a.updateCountry = function (e) {
                  var t,
                    r = a.state.onlyCountries;
                  (t =
                    e.indexOf(0) >= "0" && "9" >= e.indexOf(0)
                      ? r.find(function (t) {
                          return t.dialCode == +e;
                        })
                      : r.find(function (t) {
                          return t.iso2 == e;
                        })) &&
                    t.dialCode &&
                    a.setState({
                      selectedCountry: t,
                      formattedNumber: a.props.disableCountryCode
                        ? ""
                        : a.formatNumber(t.dialCode, t),
                    });
                }),
                (a.scrollTo = function (e, t) {
                  if (e) {
                    var r = a.dropdownRef;
                    if (r && document.body) {
                      var n = r.offsetHeight,
                        i = r.getBoundingClientRect().top + document.body.scrollTop,
                        o = e.getBoundingClientRect(),
                        s = e.offsetHeight,
                        l = o.top + document.body.scrollTop,
                        c = l - i + r.scrollTop,
                        u = n / 2 - s / 2;
                      (a.props.enableSearch ? l < i + 32 : l < i)
                        ? (t && (c -= u), (r.scrollTop = c))
                        : l + s > i + n && (t && (c += u), (r.scrollTop = c - (n - s)));
                    }
                  }
                }),
                (a.scrollToTop = function () {
                  var e = a.dropdownRef;
                  e && document.body && (e.scrollTop = 0);
                }),
                (a.formatNumber = function (e, t) {
                  if (!t) return e;
                  var r,
                    i = t.format,
                    l = a.props,
                    c = l.disableCountryCode,
                    u = l.enableAreaCodeStretch,
                    d = l.enableLongNumbers,
                    m = l.autoFormat;
                  if (
                    (c
                      ? ((r = i.split(" ")).shift(), (r = r.join(" ")))
                      : u && t.isAreaCode
                        ? (((r = i.split(" "))[1] = r[1].replace(
                            /\.+/,
                            "".padEnd(t.areaCodeLength, ".")
                          )),
                          (r = r.join(" ")))
                        : (r = i),
                    !e || 0 === e.length)
                  )
                    return c ? "" : a.props.prefix;
                  if ((e && e.length < 2) || !r || !m) return c ? e : a.props.prefix + e;
                  var p,
                    h = w()(
                      r,
                      function (e, t) {
                        if (0 === e.remainingText.length) return e;
                        if ("." !== t)
                          return {
                            formattedText: e.formattedText + t,
                            remainingText: e.remainingText,
                          };
                        var a,
                          r = o((a = e.remainingText)) || n(a) || s(),
                          i = r[0],
                          l = r.slice(1);
                        return { formattedText: e.formattedText + i, remainingText: l };
                      },
                      { formattedText: "", remainingText: e.split("") }
                    );
                  return (
                    (p = d ? h.formattedText + h.remainingText.join("") : h.formattedText).includes(
                      "("
                    ) &&
                      !p.includes(")") &&
                      (p += ")"),
                    p
                  );
                }),
                (a.cursorToEnd = function () {
                  var e = a.numberInputRef;
                  if (document.activeElement === e) {
                    e.focus();
                    var t = e.value.length;
                    (")" === e.value.charAt(t - 1) && (t -= 1), e.setSelectionRange(t, t));
                  }
                }),
                (a.getElement = function (e) {
                  return a["flag_no_".concat(e)];
                }),
                (a.getCountryData = function () {
                  return a.state.selectedCountry
                    ? {
                        name: a.state.selectedCountry.name || "",
                        dialCode: a.state.selectedCountry.dialCode || "",
                        countryCode: a.state.selectedCountry.iso2 || "",
                        format: a.state.selectedCountry.format || "",
                      }
                    : {};
                }),
                (a.handleFlagDropdownClick = function (e) {
                  if ((e.preventDefault(), a.state.showDropdown || !a.props.disabled)) {
                    var t = a.state,
                      r = t.preferredCountries,
                      n = t.onlyCountries,
                      i = t.selectedCountry,
                      o = a.concatPreferredCountries(r, n).findIndex(function (e) {
                        return e.dialCode === i.dialCode && e.iso2 === i.iso2;
                      });
                    a.setState(
                      { showDropdown: !a.state.showDropdown, highlightCountryIndex: o },
                      function () {
                        a.state.showDropdown &&
                          a.scrollTo(a.getElement(a.state.highlightCountryIndex));
                      }
                    );
                  }
                }),
                (a.handleInput = function (e) {
                  var t = e.target.value,
                    r = a.props,
                    n = r.prefix,
                    i = r.onChange,
                    o = a.props.disableCountryCode ? "" : n,
                    s = a.state.selectedCountry,
                    l = a.state.freezeSelection;
                  if (!a.props.countryCodeEditable) {
                    var c =
                      n +
                      (s.hasAreaCodes
                        ? a.state.onlyCountries.find(function (e) {
                            return e.iso2 === s.iso2 && e.mainCode;
                          }).dialCode
                        : s.dialCode);
                    if (t.slice(0, c.length) !== c) return;
                  }
                  if (t === n)
                    return (
                      i && i("", a.getCountryData(), e, ""),
                      a.setState({ formattedNumber: "" })
                    );
                  if (
                    (!(t.replace(/\D/g, "").length > 15) ||
                      (!1 !== a.props.enableLongNumbers &&
                        ("number" != typeof a.props.enableLongNumbers ||
                          !(t.replace(/\D/g, "").length > a.props.enableLongNumbers)))) &&
                    t !== a.state.formattedNumber
                  ) {
                    e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
                    var u = a.props.country,
                      d = a.state,
                      m = d.onlyCountries,
                      p = d.selectedCountry,
                      h = d.hiddenAreaCodes;
                    if ((i && e.persist(), t.length > 0)) {
                      var f = t.replace(/\D/g, "");
                      ((!a.state.freezeSelection || (p && p.dialCode.length > f.length)) &&
                        ((s = a.props.disableCountryGuess
                          ? p
                          : a.guessSelectedCountry(f.substring(0, 6), u, m, h) || p),
                        (l = !1)),
                        (o = a.formatNumber(f, s)),
                        (s = s.dialCode ? s : p));
                    }
                    var g = e.target.selectionStart,
                      b = e.target.selectionStart,
                      y = a.state.formattedNumber,
                      v = o.length - y.length;
                    a.setState(
                      { formattedNumber: o, freezeSelection: l, selectedCountry: s },
                      function () {
                        (v > 0 && (b -= v),
                          ")" == o.charAt(o.length - 1)
                            ? a.numberInputRef.setSelectionRange(o.length - 1, o.length - 1)
                            : b > 0 && y.length >= o.length
                              ? a.numberInputRef.setSelectionRange(b, b)
                              : g < y.length && a.numberInputRef.setSelectionRange(g, g),
                          i && i(o.replace(/[^0-9]+/g, ""), a.getCountryData(), e, o));
                      }
                    );
                  }
                }),
                (a.handleInputClick = function (e) {
                  (a.setState({ showDropdown: !1 }),
                    a.props.onClick && a.props.onClick(e, a.getCountryData()));
                }),
                (a.handleDoubleClick = function (e) {
                  var t = e.target.value.length;
                  e.target.setSelectionRange(0, t);
                }),
                (a.handleFlagItemClick = function (e, t) {
                  var r = a.state.selectedCountry,
                    n = a.state.onlyCountries.find(function (t) {
                      return t == e;
                    });
                  if (n) {
                    var i = a.state.formattedNumber
                        .replace(" ", "")
                        .replace("(", "")
                        .replace(")", "")
                        .replace("-", ""),
                      o = i.length > 1 ? i.replace(r.dialCode, n.dialCode) : n.dialCode,
                      s = a.formatNumber(o.replace(/\D/g, ""), n);
                    a.setState(
                      {
                        showDropdown: !1,
                        selectedCountry: n,
                        freezeSelection: !0,
                        formattedNumber: s,
                        searchValue: "",
                      },
                      function () {
                        (a.cursorToEnd(),
                          a.props.onChange &&
                            a.props.onChange(s.replace(/[^0-9]+/g, ""), a.getCountryData(), t, s));
                      }
                    );
                  }
                }),
                (a.handleInputFocus = function (e) {
                  (a.numberInputRef &&
                    a.numberInputRef.value === a.props.prefix &&
                    a.state.selectedCountry &&
                    !a.props.disableCountryCode &&
                    a.setState(
                      { formattedNumber: a.props.prefix + a.state.selectedCountry.dialCode },
                      function () {
                        a.props.jumpCursorToEnd && setTimeout(a.cursorToEnd, 0);
                      }
                    ),
                    a.setState({ placeholder: "" }),
                    a.props.onFocus && a.props.onFocus(e, a.getCountryData()),
                    a.props.jumpCursorToEnd && setTimeout(a.cursorToEnd, 0));
                }),
                (a.handleInputBlur = function (e) {
                  (e.target.value || a.setState({ placeholder: a.props.placeholder }),
                    a.props.onBlur && a.props.onBlur(e, a.getCountryData()));
                }),
                (a.handleInputCopy = function (e) {
                  if (a.props.copyNumbersOnly) {
                    var t = window
                      .getSelection()
                      .toString()
                      .replace(/[^0-9]+/g, "");
                    (e.clipboardData.setData("text/plain", t), e.preventDefault());
                  }
                }),
                (a.getHighlightCountryIndex = function (e) {
                  var t = a.state.highlightCountryIndex + e;
                  return t < 0 ||
                    t >= a.state.onlyCountries.length + a.state.preferredCountries.length
                    ? t - e
                    : a.props.enableSearch && t > a.getSearchFilteredCountries().length
                      ? 0
                      : t;
                }),
                (a.searchCountry = function () {
                  var e = a.getProbableCandidate(a.state.queryString) || a.state.onlyCountries[0],
                    t =
                      a.state.onlyCountries.findIndex(function (t) {
                        return t == e;
                      }) + a.state.preferredCountries.length;
                  (a.scrollTo(a.getElement(t), !0),
                    a.setState({ queryString: "", highlightCountryIndex: t }));
                }),
                (a.handleKeydown = function (e) {
                  var t = a.props.keys,
                    r = e.target.className;
                  if (r.includes("selected-flag") && e.which === t.ENTER && !a.state.showDropdown)
                    return a.handleFlagDropdownClick(e);
                  if (r.includes("form-control") && (e.which === t.ENTER || e.which === t.ESC))
                    return e.target.blur();
                  if (
                    a.state.showDropdown &&
                    !a.props.disabled &&
                    (!r.includes("search-box") ||
                      e.which === t.UP ||
                      e.which === t.DOWN ||
                      e.which === t.ENTER ||
                      (e.which === t.ESC && "" === e.target.value))
                  ) {
                    e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
                    var n = function (e) {
                      a.setState(
                        { highlightCountryIndex: a.getHighlightCountryIndex(e) },
                        function () {
                          a.scrollTo(a.getElement(a.state.highlightCountryIndex), !0);
                        }
                      );
                    };
                    switch (e.which) {
                      case t.DOWN:
                        n(1);
                        break;
                      case t.UP:
                        n(-1);
                        break;
                      case t.ENTER:
                        a.props.enableSearch
                          ? a.handleFlagItemClick(
                              a.getSearchFilteredCountries()[a.state.highlightCountryIndex] ||
                                a.getSearchFilteredCountries()[0],
                              e
                            )
                          : a.handleFlagItemClick(
                              [].concat(i(a.state.preferredCountries), i(a.state.onlyCountries))[
                                a.state.highlightCountryIndex
                              ],
                              e
                            );
                        break;
                      case t.ESC:
                      case t.TAB:
                        a.setState({ showDropdown: !1 }, a.cursorToEnd);
                        break;
                      default:
                        ((e.which >= t.A && e.which <= t.Z) || e.which === t.SPACE) &&
                          a.setState(
                            { queryString: a.state.queryString + String.fromCharCode(e.which) },
                            a.state.debouncedQueryStingSearcher
                          );
                    }
                  }
                }),
                (a.handleInputKeyDown = function (e) {
                  var t = a.props,
                    r = t.keys,
                    n = t.onEnterKeyPress,
                    i = t.onKeyDown;
                  (e.which === r.ENTER && n && n(e), i && i(e));
                }),
                (a.handleClickOutside = function (e) {
                  a.dropdownRef &&
                    !a.dropdownContainerRef.contains(e.target) &&
                    a.state.showDropdown &&
                    a.setState({ showDropdown: !1 });
                }),
                (a.handleSearchChange = function (e) {
                  var t = e.currentTarget.value,
                    r = a.state,
                    n = r.preferredCountries,
                    i = r.selectedCountry,
                    o = 0;
                  if ("" === t && i) {
                    var s = a.state.onlyCountries;
                    ((o = a.concatPreferredCountries(n, s).findIndex(function (e) {
                      return e == i;
                    })),
                      setTimeout(function () {
                        return a.scrollTo(a.getElement(o));
                      }, 100));
                  }
                  a.setState({ searchValue: t, highlightCountryIndex: o });
                }),
                (a.concatPreferredCountries = function (e, t) {
                  return e.length > 0 ? i(new Set(e.concat(t))) : t;
                }),
                (a.getDropdownCountryName = function (e) {
                  return e.localName || e.name;
                }),
                (a.getSearchFilteredCountries = function () {
                  var e = a.state,
                    t = e.preferredCountries,
                    r = e.onlyCountries,
                    n = e.searchValue,
                    o = a.props.enableSearch,
                    s = a.concatPreferredCountries(t, r),
                    l = n.trim().toLowerCase().replace("+", "");
                  if (o && l) {
                    if (/^\d+$/.test(l))
                      return s.filter(function (e) {
                        var t = e.dialCode;
                        return ["".concat(t)].some(function (e) {
                          return e.toLowerCase().includes(l);
                        });
                      });
                    var c = s.filter(function (e) {
                        var t = e.iso2;
                        return ["".concat(t)].some(function (e) {
                          return e.toLowerCase().includes(l);
                        });
                      }),
                      u = s.filter(function (e) {
                        var t = e.name,
                          a = e.localName;
                        return (
                          e.iso2,
                          ["".concat(t), "".concat(a || "")].some(function (e) {
                            return e.toLowerCase().includes(l);
                          })
                        );
                      });
                    return (a.scrollToTop(), i(new Set([].concat(c, u))));
                  }
                  return s;
                }),
                (a.getCountryDropdownList = function () {
                  var e = a.state,
                    t = e.preferredCountries,
                    n = e.highlightCountryIndex,
                    i = e.showDropdown,
                    o = e.searchValue,
                    s = a.props,
                    l = s.disableDropdown,
                    c = s.prefix,
                    u = a.props,
                    d = u.enableSearch,
                    m = u.searchNotFound,
                    p = u.disableSearchIcon,
                    h = u.searchClass,
                    f = u.searchStyle,
                    b = u.searchPlaceholder,
                    y = u.autocompleteSearch,
                    v = a.getSearchFilteredCountries().map(function (e, t) {
                      var r = n === t,
                        i = T()({
                          country: !0,
                          preferred: "us" === e.iso2 || "gb" === e.iso2,
                          active: "us" === e.iso2,
                          highlight: r,
                        }),
                        o = "flag ".concat(e.iso2);
                      return g.a.createElement(
                        "li",
                        Object.assign(
                          {
                            ref: function (e) {
                              return (a["flag_no_".concat(t)] = e);
                            },
                            key: "flag_no_".concat(t),
                            "data-flag-key": "flag_no_".concat(t),
                            className: i,
                            "data-dial-code": "1",
                            tabIndex: l ? "-1" : "0",
                            "data-country-code": e.iso2,
                            onClick: function (t) {
                              return a.handleFlagItemClick(e, t);
                            },
                            role: "option",
                          },
                          r ? { "aria-selected": !0 } : {}
                        ),
                        g.a.createElement("div", { className: o }),
                        g.a.createElement(
                          "span",
                          { className: "country-name" },
                          a.getDropdownCountryName(e)
                        ),
                        g.a.createElement(
                          "span",
                          { className: "dial-code" },
                          e.format ? a.formatNumber(e.dialCode, e) : c + e.dialCode
                        )
                      );
                    }),
                    x = g.a.createElement("li", { key: "dashes", className: "divider" });
                  t.length > 0 && (!d || (d && !o.trim())) && v.splice(t.length, 0, x);
                  var k = T()(r({ "country-list": !0, hide: !i }, a.props.dropdownClass, !0));
                  return g.a.createElement(
                    "ul",
                    {
                      ref: function (e) {
                        return (!d && e && e.focus(), (a.dropdownRef = e));
                      },
                      className: k,
                      style: a.props.dropdownStyle,
                      role: "listbox",
                      tabIndex: "0",
                    },
                    d &&
                      g.a.createElement(
                        "li",
                        { className: T()(r({ search: !0 }, h, h)) },
                        !p &&
                          g.a.createElement(
                            "span",
                            {
                              className: T()(r({ "search-emoji": !0 }, "".concat(h, "-emoji"), h)),
                              role: "img",
                              "aria-label": "Magnifying glass",
                            },
                            "🔎"
                          ),
                        g.a.createElement("input", {
                          className: T()(r({ "search-box": !0 }, "".concat(h, "-box"), h)),
                          style: f,
                          type: "search",
                          placeholder: b,
                          autoFocus: !0,
                          autoComplete: y ? "on" : "off",
                          value: o,
                          onChange: a.handleSearchChange,
                        })
                      ),
                    v.length > 0
                      ? v
                      : g.a.createElement(
                          "li",
                          { className: "no-entries-message" },
                          g.a.createElement("span", null, m)
                        )
                  );
                }));
              var t,
                a,
                c,
                h = new D(
                  e.enableAreaCodes,
                  e.enableTerritories,
                  e.regions,
                  e.onlyCountries,
                  e.preferredCountries,
                  e.excludeCountries,
                  e.preserveOrder,
                  e.masks,
                  e.priority,
                  e.areaCodes,
                  e.localization,
                  e.prefix,
                  e.defaultMask,
                  e.alwaysDefaultMask
                ),
                f = h.onlyCountries,
                b = h.preferredCountries,
                v = h.hiddenAreaCodes,
                k = e.value ? e.value.replace(/\D/g, "") : "";
              c = e.disableInitialCountryGuess
                ? 0
                : k.length > 1
                  ? a.guessSelectedCountry(k.substring(0, 6), e.country, f, v) || 0
                  : (e.country &&
                      f.find(function (t) {
                        return t.iso2 == e.country;
                      })) ||
                    0;
              var _,
                S = k.length < 2 && c && !C()(k, c.dialCode) ? c.dialCode : "";
              _ =
                "" === k && 0 === c
                  ? ""
                  : a.formatNumber((e.disableCountryCode ? "" : S) + k, c.name ? c : void 0);
              var j = f.findIndex(function (e) {
                return e == c;
              });
              return (
                (a.state = {
                  showDropdown: e.showDropdown,
                  formattedNumber: _,
                  onlyCountries: f,
                  preferredCountries: b,
                  hiddenAreaCodes: v,
                  selectedCountry: c,
                  highlightCountryIndex: j,
                  queryString: "",
                  freezeSelection: !1,
                  debouncedQueryStingSearcher: y()(a.searchCountry, 250),
                  searchValue: "",
                }),
                a
              );
            }
            return (
              (function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw TypeError("Super expression must either be null or a function");
                ((e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && h(e, t));
              })(u, e),
              (t = [
                {
                  key: "componentDidMount",
                  value: function () {
                    (document.addEventListener &&
                      this.props.enableClickOutside &&
                      document.addEventListener("mousedown", this.handleClickOutside),
                      this.props.onMount &&
                        this.props.onMount(
                          this.state.formattedNumber.replace(/[^0-9]+/g, ""),
                          this.getCountryData(),
                          this.state.formattedNumber
                        ));
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    document.removeEventListener &&
                      this.props.enableClickOutside &&
                      document.removeEventListener("mousedown", this.handleClickOutside);
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e, t, a) {
                    e.country !== this.props.country
                      ? this.updateCountry(this.props.country)
                      : e.value !== this.props.value &&
                        this.updateFormattedNumber(this.props.value);
                  },
                },
                {
                  key: "updateFormattedNumber",
                  value: function (e) {
                    if (null === e)
                      return this.setState({ selectedCountry: 0, formattedNumber: "" });
                    var t = this.state,
                      a = t.onlyCountries,
                      r = t.selectedCountry,
                      n = t.hiddenAreaCodes,
                      i = this.props,
                      o = i.country,
                      s = i.prefix;
                    if ("" === e) return this.setState({ selectedCountry: r, formattedNumber: "" });
                    var l,
                      c,
                      u = e.replace(/\D/g, "");
                    if (r && C()(e, s + r.dialCode))
                      ((c = this.formatNumber(u, r)), this.setState({ formattedNumber: c }));
                    else {
                      var d =
                        (l = this.props.disableCountryGuess
                          ? r
                          : this.guessSelectedCountry(u.substring(0, 6), o, a, n) || r) &&
                        C()(u, s + l.dialCode)
                          ? l.dialCode
                          : "";
                      ((c = this.formatNumber(
                        (this.props.disableCountryCode ? "" : d) + u,
                        l || void 0
                      )),
                        this.setState({ selectedCountry: l, formattedNumber: c }));
                    }
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e,
                      t,
                      a,
                      n = this,
                      i = this.state,
                      o = i.onlyCountries,
                      s = i.selectedCountry,
                      l = i.showDropdown,
                      c = i.formattedNumber,
                      u = i.hiddenAreaCodes,
                      d = this.props,
                      m = d.disableDropdown,
                      p = d.renderStringAsFlag,
                      h = d.isValid,
                      f = d.defaultErrorMessage,
                      b = d.specialLabel;
                    if ("boolean" == typeof h) t = h;
                    else {
                      var y = h(c.replace(/\D/g, ""), s, o, u);
                      "boolean" == typeof y ? !1 === (t = y) && (a = f) : ((t = !1), (a = y));
                    }
                    var v = T()(
                        (r((e = {}), this.props.containerClass, !0), r(e, "react-tel-input", !0), e)
                      ),
                      x = T()({ arrow: !0, up: l }),
                      k = T()(
                        r(
                          { "form-control": !0, "invalid-number": !t, open: l },
                          this.props.inputClass,
                          !0
                        )
                      ),
                      w = T()({ "selected-flag": !0, open: l }),
                      _ = T()(
                        r(
                          { "flag-dropdown": !0, "invalid-number": !t, open: l },
                          this.props.buttonClass,
                          !0
                        )
                      ),
                      C = "flag ".concat(s && s.iso2);
                    return g.a.createElement(
                      "div",
                      {
                        className: "".concat(v, " ").concat(this.props.className),
                        style: this.props.style || this.props.containerStyle,
                        onKeyDown: this.handleKeydown,
                      },
                      b && g.a.createElement("div", { className: "special-label" }, b),
                      a && g.a.createElement("div", { className: "invalid-number-message" }, a),
                      g.a.createElement(
                        "input",
                        Object.assign(
                          {
                            className: k,
                            style: this.props.inputStyle,
                            onChange: this.handleInput,
                            onClick: this.handleInputClick,
                            onDoubleClick: this.handleDoubleClick,
                            onFocus: this.handleInputFocus,
                            onBlur: this.handleInputBlur,
                            onCopy: this.handleInputCopy,
                            value: c,
                            onKeyDown: this.handleInputKeyDown,
                            placeholder: this.props.placeholder,
                            disabled: this.props.disabled,
                            type: "tel",
                          },
                          this.props.inputProps,
                          {
                            ref: function (e) {
                              ((n.numberInputRef = e),
                                "function" == typeof n.props.inputProps.ref
                                  ? n.props.inputProps.ref(e)
                                  : "object" == typeof n.props.inputProps.ref &&
                                    (n.props.inputProps.ref.current = e));
                            },
                          }
                        )
                      ),
                      g.a.createElement(
                        "div",
                        {
                          className: _,
                          style: this.props.buttonStyle,
                          ref: function (e) {
                            return (n.dropdownContainerRef = e);
                          },
                        },
                        p
                          ? g.a.createElement("div", { className: w }, p)
                          : g.a.createElement(
                              "div",
                              {
                                onClick: m ? void 0 : this.handleFlagDropdownClick,
                                className: w,
                                title: s
                                  ? "".concat(s.localName || s.name, ": + ").concat(s.dialCode)
                                  : "",
                                tabIndex: m ? "-1" : "0",
                                role: "button",
                                "aria-haspopup": "listbox",
                                "aria-expanded": !!l || void 0,
                              },
                              g.a.createElement(
                                "div",
                                { className: C },
                                !m && g.a.createElement("div", { className: x })
                              )
                            ),
                        l && this.getCountryDropdownList()
                      )
                    );
                  },
                },
              ]),
              c(u.prototype, t),
              a && c(u, a),
              u
            );
          })(g.a.Component);
        ((L.defaultProps = {
          country: "",
          value: "",
          onlyCountries: [],
          preferredCountries: [],
          excludeCountries: [],
          placeholder: "1 (702) 123-4567",
          searchPlaceholder: "search",
          searchNotFound: "No entries to show",
          flagsImagePath: "./flags.png",
          disabled: !1,
          containerStyle: {},
          inputStyle: {},
          buttonStyle: {},
          dropdownStyle: {},
          searchStyle: {},
          containerClass: "",
          inputClass: "",
          buttonClass: "",
          dropdownClass: "",
          searchClass: "",
          className: "",
          autoFormat: !0,
          enableAreaCodes: !1,
          enableTerritories: !1,
          disableCountryCode: !1,
          disableDropdown: !1,
          enableLongNumbers: !1,
          countryCodeEditable: !0,
          enableSearch: !1,
          disableSearchIcon: !1,
          disableInitialCountryGuess: !1,
          disableCountryGuess: !1,
          regions: "",
          inputProps: {},
          localization: {},
          masks: null,
          priority: null,
          areaCodes: null,
          preserveOrder: [],
          defaultMask: "... ... ... ... ..",
          alwaysDefaultMask: !1,
          prefix: "+",
          copyNumbersOnly: !0,
          renderStringAsFlag: "",
          autocompleteSearch: !1,
          jumpCursorToEnd: !0,
          enableAreaCodeStretch: !1,
          enableClickOutside: !0,
          showDropdown: !1,
          isValid: !0,
          defaultErrorMessage: "",
          specialLabel: "Phone",
          onEnterKeyPress: null,
          keys: {
            UP: 38,
            DOWN: 40,
            RIGHT: 39,
            LEFT: 37,
            ENTER: 13,
            ESC: 27,
            PLUS: 43,
            A: 65,
            Z: 90,
            SPACE: 32,
            TAB: 9,
          },
        }),
          (t.default = L));
      },
    ]);
  },
  692969,
  (e) => {
    "use strict";
    var t,
      a,
      r,
      n,
      i = e.i(843476),
      o = e.i(321768);
    e.i(262202);
    var s = e.i(111914),
      l = e.i(436864),
      c = e.i(867426),
      u = e.i(870934),
      d = e.i(464557),
      m = e.i(271645),
      p = e.i(450608),
      h = e.i(993012);
    let f = () => void 0,
      g = (e) => {
        let t = (0, m.useCallback)(
            (t) => {
              let a = window.matchMedia(e);
              return (a.addEventListener("change", t), () => a.removeEventListener("change", t));
            },
            [e]
          ),
          a = (0, m.useCallback)(() => window.matchMedia(e).matches, [e]);
        return (0, m.useSyncExternalStore)(t, a, f) ?? !1;
      };
    var b = e.i(196268),
      y = e.i(558639),
      v = e.i(947414),
      x = e.i(485900),
      k = e.i(783164);
    function w(e, t, a) {
      if ("string" == typeof e) {
        let r = document;
        (t &&
          ((0, k.invariant)(!!t.current, "Scope provided, but no element detected."),
          (r = t.current)),
          a
            ? (null != a[e] || (a[e] = r.querySelectorAll(e)), (e = a[e]))
            : (e = r.querySelectorAll(e)));
      } else e instanceof Element && (e = [e]);
      return Array.from(e || []);
    }
    var _ = e.i(692968);
    class C {
      constructor(e) {
        this.animations = e.filter(Boolean);
      }
      then(e, t) {
        return Promise.all(this.animations).then(e).catch(t);
      }
      getAll(e) {
        return this.animations[0][e];
      }
      setAll(e, t) {
        for (let a = 0; a < this.animations.length; a++) this.animations[a][e] = t;
      }
      get time() {
        return this.getAll("time");
      }
      set time(e) {
        this.setAll("time", e);
      }
      get speed() {
        return this.getAll("speed");
      }
      set speed(e) {
        this.setAll("speed", e);
      }
      get duration() {
        let e = 0;
        for (let t = 0; t < this.animations.length; t++)
          e = Math.max(e, this.animations[t].duration);
        return e;
      }
      runAll(e) {
        this.animations.forEach((t) => t[e]());
      }
      play() {
        this.runAll("play");
      }
      pause() {
        this.runAll("pause");
      }
      stop() {
        this.runAll("stop");
      }
      cancel() {
        this.runAll("cancel");
      }
      complete() {
        this.runAll("complete");
      }
    }
    var S = e.i(306327),
      T = e.i(92180),
      j = e.i(678310),
      N = e.i(457044),
      E = e.i(959652),
      I = e.i(166481),
      A = e.i(519871),
      O = e.i(285),
      D = e.i(630040),
      L = e.i(895119),
      R = e.i(738700),
      B = e.i(298549);
    function P(e, t, a, r) {
      var n;
      return "number" == typeof t
        ? t
        : t.startsWith("-") || t.startsWith("+")
          ? Math.max(0, e + parseFloat(t))
          : "<" === t
            ? a
            : null != (n = r.get(t))
              ? n
              : e;
    }
    var M = e.i(241790),
      z = e.i(803668),
      U = e.i(362756);
    function F(e, t) {
      return e.at !== t.at ? e.at - t.at : null === e.value ? 1 : null === t.value ? -1 : 0;
    }
    function V(e, t) {
      return (t.has(e) || t.set(e, {}), t.get(e));
    }
    function $(e, t) {
      return (t[e] || (t[e] = []), t[e]);
    }
    let q = (e) => "number" == typeof e,
      W = (e) => e.every(q);
    function H(e, t, a, r) {
      let n = w(e, r),
        i = n.length;
      (0, k.invariant)(!!i, "No valid element provided.");
      let o = [];
      for (let e = 0; e < i; e++) {
        let r = n[e];
        _.visualElementStore.has(r) ||
          (function (e) {
            let t = {
                presenceContext: null,
                props: {},
                visualState: {
                  renderState: {
                    transform: {},
                    transformOrigin: {},
                    style: {},
                    vars: {},
                    attrs: {},
                  },
                  latestValues: {},
                },
              },
              a = (0, T.isSVGElement)(e)
                ? new j.SVGVisualElement(t, { enableHardwareAcceleration: !1 })
                : new N.HTMLVisualElement(t, { enableHardwareAcceleration: !0 });
            (a.mount(e), _.visualElementStore.set(e, a));
          })(r);
        let s = _.visualElementStore.get(r),
          l = { ...a };
        ("function" == typeof l.delay && (l.delay = l.delay(e, i)),
          o.push(...(0, S.animateTarget)(s, { ...t, transition: l }, {})));
      }
      return new C(o);
    }
    let Z = (e) =>
      function (t, a, r) {
        let n;
        if (Array.isArray(t) && Array.isArray(t[0])) {
          let r;
          ((r = []),
            (function (e, { defaultTransition: t = {}, ...a } = {}, r) {
              let n = t.duration || 0.3,
                i = new Map(),
                o = new Map(),
                s = {},
                l = new Map(),
                c = 0,
                u = 0,
                d = 0;
              for (let a = 0; a < e.length; a++) {
                let i = e[a];
                if ("string" == typeof i) {
                  l.set(i, u);
                  continue;
                }
                if (!Array.isArray(i)) {
                  l.set(i.name, P(u, i.at, c, l));
                  continue;
                }
                let [h, f, g = {}] = i;
                void 0 !== g.at && (u = P(u, g.at, c, l));
                let b = 0,
                  y = (e, a, r, i = 0, o = 0) => {
                    var s;
                    let l = Array.isArray((s = e)) ? s : [s],
                      {
                        delay: c = 0,
                        times: m = (0, D.defaultOffset)(l),
                        type: p = "keyframes",
                        ...h
                      } = a,
                      { ease: f = t.ease || "easeOut", duration: g } = a,
                      y = "function" == typeof c ? c(i, o) : c,
                      v = l.length;
                    if (v <= 2 && "spring" === p) {
                      let e = 100;
                      2 === v && W(l) && (e = Math.abs(l[1] - l[0]));
                      let t = { ...h };
                      void 0 !== g && (t.duration = (0, O.secondsToMilliseconds)(g));
                      let a = (function (e, t = 100) {
                        let a = (0, I.spring)({ keyframes: [0, t], ...e }),
                          r = Math.min((0, A.calcGeneratorDuration)(a), A.maxGeneratorDuration);
                        return {
                          type: "keyframes",
                          ease: (e) => a.next(r * e).value / t,
                          duration: (0, O.millisecondsToSeconds)(r),
                        };
                      })(t, e);
                      ((f = a.ease), (g = a.duration));
                    }
                    null != g || (g = n);
                    let x = u + y,
                      k = x + g;
                    1 === m.length && 0 === m[0] && (m[1] = 1);
                    let w = m.length - l.length;
                    (w > 0 && (0, L.fillOffset)(m, w),
                      1 === l.length && l.unshift(null),
                      (function (e, t, a, r, n, i) {
                        for (let t = 0; t < e.length; t++) {
                          let a = e[t];
                          a.at > n && a.at < i && ((0, z.removeItem)(e, a), t--);
                        }
                        for (let o = 0; o < t.length; o++)
                          e.push({
                            value: t[o],
                            at: (0, U.mix)(n, i, r[o]),
                            easing: (function (e, t) {
                              var a;
                              let r;
                              return (0, M.isEasingArray)(e)
                                ? e[((a = e.length), ((((t - 0) % (r = a - 0)) + r) % r) + 0)]
                                : e;
                            })(a, o),
                          });
                      })(r, l, f, m, x, k),
                      (b = Math.max(y + g, b)),
                      (d = Math.max(k, d)));
                  };
                if ((0, B.isMotionValue)(h)) y(f, g, $("default", V(h, o)));
                else {
                  let e = w(h, r, s),
                    t = e.length;
                  for (let a = 0; a < t; a++) {
                    let r = V(e[a], o);
                    for (let e in f) {
                      var m, p;
                      y(f[e], (m = g)[(p = e)] ? { ...m, ...m[p] } : { ...m }, $(e, r), a, t);
                    }
                  }
                  ((c = u), (u += b));
                }
              }
              return (
                o.forEach((e, r) => {
                  for (let n in e) {
                    let o = e[n];
                    o.sort(F);
                    let s = [],
                      l = [],
                      c = [];
                    for (let e = 0; e < o.length; e++) {
                      let { at: t, value: a, easing: r } = o[e];
                      (s.push(a), l.push((0, R.progress)(0, d, t)), c.push(r || "easeOut"));
                    }
                    (0 !== l[0] && (l.unshift(0), s.unshift(s[0]), c.unshift("easeInOut")),
                      1 !== l[l.length - 1] && (l.push(1), s.push(null)),
                      i.has(r) || i.set(r, { keyframes: {}, transition: {} }));
                    let u = i.get(r);
                    ((u.keyframes[n] = s),
                      (u.transition[n] = { ...t, duration: d, ease: c, times: l, ...a }));
                  }
                }),
                i
              );
            })(t, a, e).forEach(({ keyframes: e, transition: t }, a) => {
              let n;
              ((n = (0, B.isMotionValue)(a)
                ? (0, E.animateSingleValue)(a, e.default, t.default)
                : H(a, e, t)),
                r.push(n));
            }),
            (n = new C(r)));
        } else
          n =
            "object" != typeof a || Array.isArray(a)
              ? (0, E.animateSingleValue)(t, a, r)
              : H(t, a, r, e);
        return (e && e.animations.push(n), n);
      };
    Z();
    var Y = e.i(247167),
      G = e.i(422875),
      K = e.i(796097);
    let Q = {
        mobile: { desktop: 0, tablet: 0 },
        [h.BookerLayouts.MONTH_VIEW]: { desktop: 0, tablet: 0 },
        [h.BookerLayouts.WEEK_VIEW]: { desktop: 7, tablet: 4 },
        [h.BookerLayouts.COLUMN_VIEW]: { desktop: 6, tablet: 2 },
      },
      J = (e) => h.bookerLayoutOptions.find((t) => t === e);
    var X = e.i(94509),
      ee = e.i(972165),
      et = e.i(50270),
      ea = e.i(653145),
      er = e.i(902782),
      en = e.i(713811),
      ei = e.i(162234),
      eo = e.i(19109),
      es = e.i(69692);
    let el = () => et.z.string().refine((e) => e.trim().length > 0);
    function ec(e) {
      return "string" != typeof e ? String(e) : e;
    }
    (et.z
      .object({
        label: et.z.string(),
        value: en.fieldTypeEnum,
        isTextType: et.z.boolean().default(!1).optional(),
        systemOnly: et.z.boolean().default(!1).optional(),
        needsOptions: et.z.boolean().default(!1).optional(),
        supportsLengthCheck: et.z.object({ maxLength: et.z.number() }).optional(),
        supportsPricing: et.z.boolean().default(!1).optional(),
        optionsSupportPricing: et.z.boolean().default(!1).optional(),
        propsType: et.z.enum([
          "text",
          "textList",
          "select",
          "multiselect",
          "boolean",
          "objectiveWithInput",
          "variants",
        ]),
        variantsConfig: et.z
          .object({
            defaultVariant: et.z.string(),
            toggleLabel: et.z.string().optional(),
            variants: et.z.record(
              et.z.object({
                label: et.z.string(),
                fieldsMap: et.z.record(
                  et.z.object({
                    defaultLabel: et.z.string().optional(),
                    defaultPlaceholder: et.z.string().optional(),
                    canChangeRequirability: et.z.boolean().default(!0).optional(),
                  })
                ),
              })
            ),
            defaultValue: en.variantsConfigSchema.optional(),
          })
          .optional(),
      })
      .refine((e) => {
        if (!e.variantsConfig) return;
        let t = e.variantsConfig;
        if (!t.variants[t.defaultVariant])
          throw Error(`defaultVariant: ${t.defaultVariant} is not in variants`);
        return !0;
      }),
      et.z.array(en.fieldSchema));
    let eu = {
      name: {
        preprocess: ({ response: e, field: t }) => {
          let a,
            r = ei.fieldTypesConfigMap[t.type],
            n = t.variant || r?.variantsConfig?.defaultVariant;
          if (!n) throw Error("`variant` must be there for the field with `variantsConfig`");
          if (((a = "firstAndLastName" !== n && "fullName" !== n ? "fullName" : n), null == e))
            return "";
          if ("string" == typeof e) {
            let t = et.z.object({
              firstName: et.z.string(),
              lastName: et.z.string().optional().default(""),
            });
            try {
              let r = t.safeParse(JSON.parse(e));
              if (r.success) return (0, eo.preprocessNameFieldDataWithVariant)(a, r.data);
            } catch {}
            return (0, eo.preprocessNameFieldDataWithVariant)(a, e);
          }
          if ("object" == typeof e && "firstName" in e && "string" == typeof e.firstName) {
            let t = { firstName: e.firstName, lastName: "" };
            return (
              "lastName" in e && "string" == typeof e.lastName && (t.lastName = e.lastName),
              (0, eo.preprocessNameFieldDataWithVariant)(a, t)
            );
          }
          return "";
        },
        superRefine: ({ field: e, response: t, isPartialSchema: a, ctx: r, m: n }) => {
          let i = et.z.string(),
            o = ei.fieldTypesConfigMap[e.type],
            s = e.variant || o?.variantsConfig?.defaultVariant;
          if (!s) throw Error("`variant` must be there for the field with `variantsConfig`");
          let l = (0, es.getConfig)(e);
          if (!l) throw Error("variantsConfig must be there for `name` field");
          let c = l.variants[s].fields,
            u = ["text"];
          if (1 === c.length) {
            let e = c[0];
            if (u.includes(e.type)) {
              (e.required && !a ? el() : i).safeParse(t).success ||
                r.addIssue({ code: et.z.ZodIssueCode.custom, message: n("Invalid string") });
              return;
            }
            throw Error(`Unsupported field.type with variants: ${e.type}`);
          }
          c.forEach((e) => {
            let o = e.required && !a ? el() : i;
            if (!u.includes(e.type)) throw Error(`Unsupported field.type with variants: ${e.type}`);
            if (
              e.required &&
              (a ||
                t[e.name] ||
                r.addIssue({ code: et.z.ZodIssueCode.custom, message: n("error_required_field") }),
              !o.safeParse(t[e.name]).success)
            )
              return void r.addIssue({
                code: et.z.ZodIssueCode.custom,
                message: n("Invalid string"),
              });
          });
        },
      },
      textarea: {
        preprocess: ({ response: e }) => ec(e).trim(),
        superRefine: ({ field: e, response: t, ctx: a, m: r }) => {
          let n = ei.fieldTypesConfigMap[e.type],
            i = t ?? "",
            o = e.maxLength ?? n.supportsLengthCheck?.maxLength,
            s = e.minLength ?? 0;
          if (!o) throw Error("maxLength must be there for textarea field");
          let l = i.length > o,
            c = i.length < s;
          if (l) {
            let e = r("max_characters_allowed", { count: o });
            a.addIssue({ code: et.z.ZodIssueCode.custom, message: e });
            return;
          }
          if (c) {
            let e = r("min_characters_required", { count: s });
            a.addIssue({ code: et.z.ZodIssueCode.custom, message: e });
            return;
          }
        },
      },
      url: {
        preprocess: ({ response: e }) => ec(e).trim(),
        superRefine: ({ response: e, ctx: t, m: a }) => {
          let r = e ?? "",
            n = et.z.string().url();
          if (r.match(/^https?:\/[^/]/))
            return void t.addIssue({
              code: et.z.ZodIssueCode.custom,
              message: a("url_validation_error"),
            });
          if (!n.safeParse(r).success) {
            if (/^[a-z0-9.-]+\.[a-z]{2,}(\/.*)?$/i.test(r)) {
              let e = `https://${r}`;
              if (n.safeParse(e).success) return;
            }
            t.addIssue({ code: et.z.ZodIssueCode.custom, message: a("url_validation_error") });
          }
        },
      },
    };
    var ed = e.i(742982);
    let em = et.z.union([
      et.z.string(),
      et.z.boolean(),
      et.z.string().array(),
      et.z.object({ optionValue: et.z.string(), value: et.z.string() }),
      et.z.record(et.z.string()),
    ]);
    var ep = e.i(684219),
      eh = e.i(34078),
      ef = e.i(292878),
      eg = e.i(779770),
      eb = e.i(894706);
    let ey = eb.default.record(em),
      ev = (e) => {
        if (!e) return "";
        let t = e.replace(/^ +/, "+");
        return /^\+\d{1,4}$/.test(t)
          ? ""
          : ((function (e) {
              let t = e.trim();
              if (!t || !t.startsWith("+")) return null;
              let a = (function () {
                return (0, eh.default)(ef.default, arguments);
              })(t, void 0);
              return a?.isValid() ? a.number : null;
            })(t) ?? t);
      };
    function ex(e) {
      let t = e.options;
      return t?.length ? new Set(t.map((e) => e.value)) : null;
    }
    async function ek({
      field: e,
      value: t,
      view: a,
      isPartialSchema: r,
      isRequired: n,
      checkOptional: i,
      zodCtx: o,
      translateFn: s,
      responses: l,
    }) {
      let c = eb.default.string(),
        u = r ? eb.default.string() : eb.default.string().refine(en.emailSchemaRefinement),
        d = r
          ? eb.default.string()
          : eb.default.string().refine(async (e) => (0, eg.isValidPhoneNumber)(e)),
        m = (t, a) => {
          let r = s ? s(t, a) : t;
          return `{${e.name}}${r}`;
        };
      if (n && !r && !t)
        return void o.addIssue({
          code: eb.default.ZodIssueCode.custom,
          message: m("error_required_field"),
        });
      if ("email" === e.type) {
        if (
          !e.hidden &&
          (n || (t && "" !== String(t).trim())) &&
          (u.safeParse(t).success ||
            o.addIssue({
              code: eb.default.ZodIssueCode.custom,
              message: m("email_validation_error"),
            }),
          t)
        ) {
          let a = String(t);
          (e.excludeEmails?.split(",").map((e) => e.trim()) || []).find((e) => ew(a, e)) &&
            o.addIssue({
              code: eb.default.ZodIssueCode.custom,
              message: m("exclude_emails_match_found_error_message"),
            });
          let r =
              e.requireEmails
                ?.split(",")
                .map((e) => e.trim())
                .filter(Boolean) || [],
            n = r.find((e) => ew(a, e));
          r.length > 0 &&
            !n &&
            o.addIssue({
              code: eb.default.ZodIssueCode.custom,
              message: m("require_emails_no_match_found_error_message"),
            });
        }
        return;
      }
      let p = eu[e.type];
      if (p) return void p.superRefine({ response: t, ctx: o, m, field: e, isPartialSchema: r });
      if ("multiemail" === e.type) {
        let r = u.array().safeParse(t);
        if (n && (!t || 0 === t.length))
          return void o.addIssue({
            code: eb.default.ZodIssueCode.custom,
            message: m("error_required_field"),
          });
        if (!r.success) {
          if ("guests" === e.name && t.every((e) => "" === e)) {
            l[e.name] = [];
            return;
          }
          o.addIssue({
            code: eb.default.ZodIssueCode.custom,
            message: m("email_validation_error"),
          });
          return;
        }
        let i = r.data;
        return "guests" === e.name && "reschedule" !== a && i.length > ed.MAX_GUESTS_PER_BOOKING
          ? void o.addIssue({
              code: eb.default.ZodIssueCode.custom,
              message: m("too_many_guests", { maxGuests: ed.MAX_GUESTS_PER_BOOKING }),
            })
          : void i.sort().some((e, t) => {
              if (e === i[t + 1])
                return (
                  o.addIssue({
                    code: eb.default.ZodIssueCode.custom,
                    message: m("duplicate_email"),
                  }),
                  !0
                );
            });
      }
      if ("multiselect" === e.type) {
        if (n && (!t || 0 === t.length))
          return void o.addIssue({
            code: eb.default.ZodIssueCode.custom,
            message: m("error_required_field"),
          });
        if (!c.array().safeParse(t).success)
          return void o.addIssue({
            code: eb.default.ZodIssueCode.custom,
            message: m("Invalid array of strings"),
          });
        let a = ex(e);
        if (a && Array.isArray(t)) {
          for (let e of t)
            if (!a.has(e))
              return void o.addIssue({
                code: eb.default.ZodIssueCode.custom,
                message: m("invalid_option_value"),
              });
        }
        return;
      }
      if ("checkbox" === e.type) {
        if (!c.array().safeParse(t).success)
          return void o.addIssue({
            code: eb.default.ZodIssueCode.custom,
            message: m("Invalid array of strings"),
          });
        let a = ex(e);
        if (a && Array.isArray(t)) {
          for (let e of t)
            if (!a.has(e))
              return void o.addIssue({
                code: eb.default.ZodIssueCode.custom,
                message: m("invalid_option_value"),
              });
        }
        return;
      }
      if ("phone" === e.type) {
        let a = n || (t && "" !== t.trim());
        e.hidden ||
          !a ||
          (await d.safeParseAsync(t)).success ||
          o.addIssue({ code: eb.default.ZodIssueCode.custom, message: m("invalid_number") });
        return;
      }
      if ("boolean" === e.type) {
        eb.default.boolean().safeParse(t).success ||
          o.addIssue({ code: eb.default.ZodIssueCode.custom, message: m("Invalid Boolean") });
        return;
      }
      if ("radioInput" === e.type) {
        if (e.optionsInputs) {
          let a = t?.optionValue,
            r = e.optionsInputs[t?.value ?? ""],
            s = r?.type;
          if (((n || t?.value) && i) || (r?.required && !a))
            return void o.addIssue({
              code: eb.default.ZodIssueCode.custom,
              message: m("error_required_field"),
            });
          a &&
            "phone" === s &&
            !(await d.safeParseAsync(a)).success &&
            o.addIssue({ code: eb.default.ZodIssueCode.custom, message: m("invalid_number") });
        }
        return;
      }
      if (["address", "text", "select", "number", "radio", "textarea"].includes(e.type)) {
        if (!c.safeParse(t).success)
          return void o.addIssue({
            code: eb.default.ZodIssueCode.custom,
            message: m("Invalid string"),
          });
        if ("select" === e.type) {
          let a = ex(e);
          a &&
            "string" == typeof t &&
            !a.has(t) &&
            o.addIssue({
              code: eb.default.ZodIssueCode.custom,
              message: m("invalid_option_value"),
            });
        }
        return;
      }
      o.addIssue({
        code: eb.default.ZodIssueCode.custom,
        message: `Can't parse unknown booking field type: ${e.type}`,
      });
    }
    let ew = (e, t) => {
        let a = e.toLowerCase();
        if (t.startsWith("@")) {
          let e = t.slice(1).toLowerCase();
          return a.endsWith("@" + e);
        }
        return t.includes("@") ? a === t.toLowerCase() : a.endsWith("@" + t.toLowerCase());
      },
      e_ = ({ zodCtx: e, isPartialSchema: t }) => {
        if (t) {
          let e = { issues: [] };
          return {
            fieldZodCtx: {
              addIssue: (t) => {
                e.issues.push(t);
              },
            },
            state: e,
          };
        }
        return { fieldZodCtx: e, state: null };
      };
    function eC({
      schema: e,
      bookingFields: t,
      isPartialSchema: a,
      view: r,
      checkOptional: n = !1,
      translateFn: i,
    }) {
      let o = ep.default.getSubLogger({ prefix: ["getBookingResponsesSchema"] }),
        s = eb.default.preprocess(
          (e) => {
            let n = eb.default.record(eb.default.any()).nullable().parse(e) || {},
              i = {};
            if (!t) return n;
            let s = (function (e) {
              let t = new Map();
              for (let a of e) {
                let e = a.toLowerCase(),
                  r = t.get(e);
                r ? (r.hasConflict = !0) : t.set(e, { key: a, hasConflict: !1 });
              }
              return t;
            })(Object.keys(n));
            return (
              t.forEach((e) => {
                let t = (function ({ fieldName: e, parsedResponses: t, caseInsensitiveKeyMap: a }) {
                  let r = t[e];
                  if (void 0 !== r) return r;
                  let n = e.toLowerCase(),
                    i = a.get(n);
                  if (i && !i.hasConflict) return t[i.key];
                })({ fieldName: e.name, parsedResponses: n, caseInsensitiveKeyMap: s });
                if (void 0 === t) return;
                let l = e.views;
                if ("ALL_VIEWS" === r || !l || l.find((e) => e.id === r))
                  try {
                    i[e.name] = (function ({ field: e, value: t, isPartialSchema: a, log: r }) {
                      let n = eu[e.type];
                      if (n) return n.preprocess({ response: t, isPartialSchema: a, field: e });
                      if ("boolean" === e.type) return "true" === t || !0 === t;
                      if (
                        "multiemail" === e.type ||
                        "checkbox" === e.type ||
                        "multiselect" === e.type
                      )
                        return t instanceof Array ? t : [t];
                      if ("radioInput" === e.type && "string" == typeof t) {
                        let a = { optionValue: "", value: "" };
                        try {
                          a = JSON.parse(t);
                        } catch (t) {
                          r.error(`Failed to parse JSON for field ${e.name}`, t);
                        }
                        let n = e.optionsInputs,
                          i = n?.[a.value];
                        return (i && "phone" === i.type && (a.optionValue = ev(a.optionValue)), a);
                      }
                      if ("phone" === e.type) return ev("string" == typeof t ? t : String(t));
                      return t;
                    })({ field: e, value: t, isPartialSchema: a, log: o });
                  } catch (i) {
                    if (!a) throw i;
                    let t = i instanceof Error ? i.message : "preprocessing failed",
                      r = e.name;
                    (delete n[r],
                      console.warn(`Skipped invalid field during preprocessing: ${r} (${t})`));
                  }
              }),
              { ...n, ...i }
            );
          },
          e.superRefine(async (e, o) => {
            if (!t) return;
            let s = t.find((e) => "attendeePhoneNumber" === e.name),
              l = s?.hidden,
              c = t.find((e) => "email" === e.name);
            for (let s of (c?.hidden && !l && (e.email = ""), t)) {
              let t = e[s.name],
                l = s.views,
                c = "ALL_VIEWS" === r || !l || l.find((e) => e.id === r),
                u = s.hidden,
                d = s.options?.length ?? 0;
              s.hideWhenJustOneOption && (u = u || d <= 1);
              let m = !1;
              if ((!u && c && (m = n || !!s.required), (a || !m) && void 0 === t)) continue;
              let { fieldZodCtx: p, state: h } = e_({ zodCtx: o, isPartialSchema: a }),
                f = !1;
              try {
                await ek({
                  field: s,
                  value: t,
                  view: r,
                  isPartialSchema: a,
                  isRequired: m,
                  checkOptional: n,
                  zodCtx: p,
                  translateFn: i,
                  responses: e,
                });
              } catch (e) {
                if (!a) throw e;
                f = !0;
              }
              let g = h?.issues ?? [];
              a &&
                (f || g.length > 0) &&
                (delete e[s.name],
                console.warn(
                  `Partial prefill: skipped field '${s.name}' due to ${g.length} validation error(s)`
                ));
            }
          })
        );
      return a
        ? s.catch(
            (e) => (
              console.error(
                "Failed to validate query params, prefilling will be skipped entirely",
                e?.error
              ),
              {}
            )
          )
        : s;
    }
    var eS = e.i(476186),
      eT = e.i(155044);
    let ej = eT.ATTENDEE_PHONE_NUMBER_FIELD,
      eN = [eT.SMS_REMINDER_NUMBER_FIELD, eT.CAL_AI_AGENT_PHONE_NUMBER_FIELD];
    function eE(e, t) {
      return ("string" == typeof e[t] ? e[t] : void 0) || void 0;
    }
    function eI({ responses: e, bookingFields: t, isUnifiedPhoneFieldsEnabled: a }) {
      let r = eE(e, eT.SMS_REMINDER_NUMBER_FIELD),
        n = eE(e, ej),
        i = eE(e, eT.CAL_AI_AGENT_PHONE_NUMBER_FIELD);
      if (!a) {
        let a = ({ value: a, fieldName: r }) => {
          let i = a ?? (t?.some((e) => e.name === r) ? n : void 0);
          return (i && !a && (e[r] = i), i);
        };
        return {
          smsReminderNumber: a({ value: r, fieldName: eT.SMS_REMINDER_NUMBER_FIELD }),
          attendeePhoneNumber: n,
          calAiPhoneNumber: a({ value: i, fieldName: eT.CAL_AI_AGENT_PHONE_NUMBER_FIELD }),
        };
      }
      let o = { smsReminderNumber: n ?? r ?? i ?? void 0, calAiPhoneNumber: i };
      if ((t && !t.some((e) => e.name === ej)) || n) return { ...o, attendeePhoneNumber: n };
      let s = eN.reduce((t, a) => t || eE(e, a), void 0);
      return (s && (e[ej] = s), { ...o, attendeePhoneNumber: s });
    }
    let eA = ({ values: e, hasSession: t, stableHashExtraOptions: a }) =>
      `${Object.keys(e).length}_${+!!t}_${e.bookingId ?? 0}_${a}`;
    var eO = e.i(923842),
      eD = e.i(272177),
      eL = e.i(327255),
      eR = e.i(821410),
      eB = e.i(401534),
      eP = e.i(207597),
      eM = e.i(859653),
      ez = e.i(234452),
      eU = e.i(770703),
      eF = e.i(618566),
      eV = e.i(217255),
      e$ = e.i(693436),
      eq = e.i(672381),
      eW = e.i(516570),
      eH = e.i(955858),
      eZ = e.i(422233),
      eY = e.i(577192);
    e.i(138180);
    var eG = e.i(656860),
      eK = e.i(790405);
    let eQ = /^(.*)([+-])(\d{2}):(\d{2})|(Z)$/,
      eJ = (
        {
          startDate: e,
          timeZone: t,
          recurringEvent: a,
          recurringCount: r,
          selectedTimeFormat: n,
          withDefaultTimeFormat: i,
        },
        o
      ) => {
        let { count: s, ...l } = a || {},
          c = new eG.RRule({ ...l, count: r, dtstart: new Date((0, eY.default)(e).valueOf()) }),
          u = (0, eY.default)(e).utcOffset(),
          d = c
            .all()
            .map((e) => eY.default.utc(e).add(u - (0, eY.default)(e).utcOffset(), "minute"));
        return [
          d.map((e) =>
            ((e, t, a, r) => {
              let n = (function (e) {
                if ("string" != typeof e) return (0, eY.default)(e, void 0, void 0, void 0);
                let t = e.match(eQ);
                if (null === t) return;
                if ("Z" === t[0]) return (0, eY.default)(e, { utc: !0, ...void 0 }, void 0, void 0);
                let [, a, r, n, i] = t,
                  o = 60 * parseInt(n) + parseInt(i, 10);
                return (0, eY.default)(
                  a,
                  { $offset: "+" === r ? o : -o, ...void 0 },
                  void 0,
                  void 0
                );
              })(e);
              if (!n?.isValid()) return "Invalid date";
              let i = n?.format(
                r?.withDefaultTimeFormat
                  ? eK.TimeFormat.TWELVE_HOUR
                  : r?.selectedTimeFormat || eK.detectBrowserTimeFormat
              );
              return `${i}, ${(0, eY.default)(e).toDate().toLocaleString(t, { dateStyle: "full", timeZone: a })}`;
            })(e.tz(t), o, t, { selectedTimeFormat: n, withDefaultTimeFormat: i })
          ),
          d.map((e) => e.toDate()),
        ];
      },
      eX = (e, t) => {
        let a = e.get(t);
        return "string" == typeof a
          ? a
              .split(",")
              .filter(Boolean)
              .map((e) => parseInt(e, 10))
          : null;
      },
      e0 = (e) => {
        let t = e.event ?? {},
          a = ((e) => {
            if (e) {
              let t = new URLSearchParams();
              return (
                Object.entries(e).forEach(([e, a]) => {
                  Array.isArray(a) ? a.forEach((a) => t.append(e, a)) : void 0 !== a && t.set(e, a);
                }),
                t
              );
            }
            return new URLSearchParams(window.location.search);
          })(e.routingFormSearchParams),
          r = eX(a, "cal.routedTeamMemberIds"),
          n = eX(a, "cal.crmRecordOwnerFallbackTeamMemberIds"),
          i = a.get("cal.routingFormResponseId"),
          o = i ? Number(i) : void 0,
          s = "true" === a.get("cal.skipContactOwner"),
          l = a.get("cal.reroutingFormResponses"),
          c = void 0 !== e.isDryRunProp ? e.isDryRunProp : "true" === a.get("cal.isBookingDryRun"),
          u = a.get("dub_id") ?? void 0,
          d = e.duration || t.length || 0;
        return {
          ...e.values,
          user: e.username,
          start: (0, eY.default)(e.date).format(),
          end: (0, eY.default)(e.date).add(d, "minute").format(),
          eventTypeId: t.id,
          eventTypeSlug: t.slug,
          timeZone: e.timeZone,
          language: e.language || "en",
          rescheduleUid: e.rescheduleUid,
          rescheduledBy: e.rescheduledBy,
          metadata: e.metadata || {},
          hasHashedBookingLink: !!e.hashedLink,
          bookingUid: e.bookingUid,
          seatReferenceUid: e.seatReferenceUid,
          hashedLink: e.hashedLink,
          teamMemberEmail: e.teamMemberEmail,
          crmOwnerRecordType: e.crmOwnerRecordType,
          crmAppSlug: e.crmAppSlug,
          crmRecordId: e.crmRecordId,
          crmOwnerRRFallbackActive: e.crmOwnerRRFallbackActive,
          pendingCrmTraceId: e.pendingCrmTraceId,
          orgSlug: e.orgSlug,
          routedTeamMemberIds: r,
          crmRecordOwnerFallbackTeamMemberIds: n,
          rrHostSubsetIds: e.rrHostSubsetIds,
          routingFormResponseId: o,
          skipContactOwner: s,
          reroutingFormResponses: l ? JSON.parse(l) : void 0,
          _isDryRun: c,
          dub_id: u,
          verificationCode: e.verificationCode,
        };
      };
    var e1 = e.i(127011),
      e2 = e.i(623101),
      e3 = e.i(141546),
      e4 = e.i(788442),
      e6 = e.i(264310),
      e5 = e.i(935746),
      e9 = e.i(357e3);
    let e8 = async (e, t) => {
        let a = (0, e9.appendBookerCorrelationIdToUrl)(
          "/api/book/reschedule-with-bypass-host-availability",
          t?.bookerCorrelationId
        );
        return await (0, e5.post)(a, e);
      },
      e7 = async (e, t) => {
        let a = (0, e9.appendBookerCorrelationIdToUrl)(
          "/api/book/instant-event",
          t?.bookerCorrelationId
        );
        return await (0, e5.post)(a, e);
      },
      te = async (e, t) => {
        let a = (0, e9.appendBookerCorrelationIdToUrl)(
          "/api/book/recurring-event",
          t?.bookerCorrelationId
        );
        return await (0, e5.post)(a, e);
      };
    var tt = e.i(23480),
      ta = e.i(331597),
      tr = e.i(273446),
      tn = e.i(62420),
      ti = e.i(954616);
    let to = (e) => ({
        title: e.title,
        startTime: e.startTime,
        endTime: e.endTime,
        eventTypeId: e.eventTypeId,
        status: e.status,
        paymentRequired: e.paymentRequired,
        isRecurring: e.isRecurring,
        videoCallUrl: e.videoCallUrl,
      }),
      ts = (e) => ({ uid: e.uid, ...to(e) }),
      tl = "instantBookingData",
      tc = "instantBookingCooldownByEvent",
      tu = () => {
        try {
          let e = eP.localStorage.getItem(tc);
          return e ? JSON.parse(e) : {};
        } catch {
          return {};
        }
      },
      td = (e) => {
        if (!e) return 0;
        let t = tu()[String(e)];
        if (!t) return 0;
        let a = t + 6e5 - Date.now();
        return a > 0 ? a : 0;
      };
    var tm = e.i(227739);
    let tp = ({ selectedDate: e, timezone: t, daysToLoad: a }) => {
        if (!e) return { dateFrom: null, dateTo: null };
        let r = 1;
        Number.isFinite(a) && (r = Math.max(a, 1));
        let n = eY.default.tz(e, t || eY.default.tz.guess()).startOf("day");
        return {
          dateFrom: n.toISOString(),
          dateTo: n
            .add(r - 1, "day")
            .endOf("day")
            .toISOString(),
        };
      },
      th = null;
    var tf = e.i(926975),
      tg = e.i(347637);
    let tb = () =>
      (({ percentage: e = 0, cookieName: t = "uid" } = {}) =>
        (0, m.useMemo)(
          () =>
            ((e, t) => {
              if (e >= 100) return !0;
              if (e <= 0) return !1;
              let a = ((e) => {
                if ("u" > typeof document)
                  return document.cookie
                    .split(";")
                    .find((t) => t.trim().startsWith(`${e}=`))
                    ?.split("=")[1];
              })(t);
              return !!a && parseInt(a.slice(-4), 16) % 100 < e;
            })(e, t),
          [e, t]
        ))({
        percentage:
          void 0 !== Y.default && Y.default.env?.NEXT_PUBLIC_IS_E2E
            ? 100
            : eR.PUBLIC_QUICK_AVAILABILITY_ROLLOUT,
      });
    var ty = e.i(290921);
    let tv = ["isInstantMeeting"],
      tx = ["bookingId", "bookingUid", "slot", "date", "month"],
      tk = {
        variants: { visible: { opacity: 1, x: 0 }, hidden: { opacity: 0, x: 20 } },
        initial: "hidden",
        exit: "hidden",
        animate: "visible",
        transition: { ease: "easeInOut", delay: 0.1 },
      },
      tw = {
        variants: { visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } },
        initial: "hidden",
        exit: "hidden",
        animate: "visible",
        transition: { ease: "easeInOut", delay: 0.1 },
      },
      t_ = {
        mobile: {
          default: {
            width: "100%",
            minHeight: "0px",
            gridTemplateAreas: `
          "meta"
          "header"
          "main"
          "timeslots"
        `,
            gridTemplateColumns: "100%",
            gridTemplateRows: "minmax(min-content,max-content) 1fr",
          },
        },
        month_view: {
          default: {
            width: "calc(var(--booker-meta-width) + var(--booker-main-width))",
            minHeight: "450px",
            height: "auto",
            gridTemplateAreas: `
      "meta main main"
      "meta main main"
      `,
            gridTemplateColumns: "var(--booker-meta-width) var(--booker-main-width)",
            gridTemplateRows: "1fr 0fr",
          },
          selecting_time: {
            width:
              "calc(var(--booker-meta-width) + var(--booker-main-width) + var(--booker-timeslots-width))",
            minHeight: "450px",
            height: "auto",
            gridTemplateAreas: `
      "meta main timeslots"
      "meta main timeslots"
      `,
            gridTemplateColumns: "var(--booker-meta-width) 1fr var(--booker-timeslots-width)",
            gridTemplateRows: "1fr 0fr",
          },
        },
        week_view: {
          default: {
            width: "100vw",
            minHeight: "100vh",
            height: "auto",
            gridTemplateAreas: `
      "meta header header"
      "meta main main"
      `,
            gridTemplateColumns: "var(--booker-meta-width) 1fr",
            gridTemplateRows: "70px auto",
          },
        },
        column_view: {
          default: {
            width: "100vw",
            minHeight: "100vh",
            height: "auto",
            gridTemplateAreas: `
      "meta header header"
      "meta main main"
      `,
            gridTemplateColumns: "var(--booker-meta-width) 1fr",
            gridTemplateRows: "70px auto",
          },
        },
      };
    (en.BookerLayouts.MONTH_VIEW, en.BookerLayouts.WEEK_VIEW, en.BookerLayouts.COLUMN_VIEW);
    let tC = e.i(962607).domAnimation;
    var tS = e.i(377119);
    let tT = ["phone", "attendeeInPerson", "somewhereElse"],
      tj = (e) =>
        !(e.length < 16) && "-" === e[4] && "-" === e[7] && "T" === e[10] && ":" === e[13];
    function tN(e, t) {
      return (
        !!e &&
        e.some((e) =>
          (({ slotTimeInIso: e, slotToCheckInIso: t }) =>
            !(e !== t && tj(e) && tj(t)) || e.slice(0, 16) === t.slice(0, 16))({
            slotTimeInIso: e.time,
            slotToCheckInIso: t,
          })
        )
      );
    }
    var tE = e.i(538173),
      tI = e.i(125635),
      tA = e.i(41995),
      tO = e.i(247379),
      tD = e.i(552759),
      tL = e.i(908746),
      tR = e.i(383116);
    function tB({
      extraDays: e,
      isMobile: t,
      enabledLayouts: a,
      nextSlots: r,
      eventSlug: n,
      isMyLink: o,
      renderOverlay: s,
      isCalendarView: l,
      isPlatform: c = !1,
      webappUrl: d,
    }) {
      let { t: f, i18n: g } = (0, e1.useAtomsLocale)(),
        b = (0, X.useIsEmbed)(),
        [y, v] = (0, u.useBookerStoreContext)((e) => [e.layout, e.setLayout], p.shallow),
        x = (0, u.useBookerStoreContext)((e) => e.selectedDate),
        k = (0, u.useBookerStoreContext)((e) => e.setSelectedDate),
        w = (0, u.useBookerStoreContext)((e) => e.addToSelectedDate),
        _ = void 0 !== l ? !l : y === h.BookerLayouts.MONTH_VIEW,
        { timezone: C } = (0, eW.useBookerTime)(),
        S = C ? (0, eY.default)().tz(C) : (0, eY.default)(),
        T = x ? (0, eY.default)(x) : S,
        j = (0, m.useMemo)(() => {
          let e = S.diff(T, "days");
          return e > 3 || e < -3;
        }, [S, T]);
      ((e, t) => {
        let a = (0, X.useSlotsViewOnSmallScreen)(),
          { timezone: r } = (0, eW.useBookerTime)(),
          n = (r ? (0, eY.default)().tz(r) : (0, eY.default)())
            .startOf("week")
            .format("YYYY-MM-DD"),
          i = (0, u.useBookerStoreContext)((e) => e.setSelectedDate);
        (0, m.useEffect)(() => {
          !a && e && t && i({ date: n, omitUpdatingParams: !0 });
        }, []);
      })(c, l ?? !1);
      let N = (0, m.useCallback)(
        (e) => {
          y !== e && e && v(e);
        },
        [v, y]
      );
      if (t || !a) return null;
      if (_)
        return (0, i.jsxs)("div", {
          className: "flex gap-2",
          children: [
            o && !b && d
              ? (0, i.jsx)(tD.Tooltip, {
                  content: f("troubleshooter_tooltip"),
                  side: "bottom",
                  children: (0, i.jsx)(tE.Button, {
                    color: "primary",
                    target: "_blank",
                    href: `${d}/availability/troubleshoot?eventType=${n}`,
                    children: f("need_help"),
                  }),
                })
              : s?.(),
            (0, i.jsx)(tM, { layout: y, enabledLayouts: a, onLayoutToggle: N, isPlatform: c }),
          ],
        });
      let E = T.add(y === h.BookerLayouts.COLUMN_VIEW ? e : e - 1, "days"),
        I = () => T.format("YYYY") === E.format("YYYY"),
        A = (e) => (0, tL.formatDateTime)(e, { locale: g.language ?? "en", month: "short" });
      return (0, i.jsxs)("div", {
        className: "border-default relative z-10 flex h-full border-b px-5 py-4",
        children: [
          (0, i.jsxs)("div", {
            className: "flex items-center gap-5 rtl:grow",
            children: [
              (0, i.jsx)(
                () =>
                  (0, i.jsxs)("h3", {
                    className: "min-w-[150px] text-base font-semibold leading-4",
                    children: [
                      A(T.toDate()),
                      " ",
                      T.format("D"),
                      !I() &&
                        (0, i.jsxs)("span", {
                          className: "text-subtle",
                          children: [", ", T.format("YYYY"), " "],
                        }),
                      "-",
                      " ",
                      T.format("MMM") !== E.format("MMM") && A(E.toDate()),
                      " ",
                      E.format("D"),
                      ",",
                      " ",
                      (0, i.jsx)("span", {
                        className: "text-subtle",
                        children: I() ? T.format("YYYY") : E.format("YYYY"),
                      }),
                    ],
                  }),
                {}
              ),
              (0, i.jsxs)(tI.ButtonGroup, {
                children: [
                  (0, i.jsx)(tE.Button, {
                    className: "group rtl:ml-1 rtl:rotate-180",
                    variant: "icon",
                    color: "minimal",
                    StartIcon: "chevron-left",
                    "aria-label": "Previous Day",
                    onClick: () => w(y === h.BookerLayouts.COLUMN_VIEW ? -r : -e),
                  }),
                  (0, i.jsx)(tE.Button, {
                    className: "group rtl:mr-1 rtl:rotate-180",
                    variant: "icon",
                    color: "minimal",
                    StartIcon: "chevron-right",
                    "aria-label": "Next Day",
                    onClick: () => w(y === h.BookerLayouts.COLUMN_VIEW ? r : e),
                  }),
                  j &&
                    (0, i.jsx)(tE.Button, {
                      className: "capitalize ltr:ml-2 rtl:mr-2",
                      color: "secondary",
                      onClick: () => {
                        k({ date: (l ? S.startOf("week") : S).format("YYYY-MM-DD") });
                      },
                      children: f("today"),
                    }),
                ],
              }),
            ],
          }),
          (0, i.jsxs)("div", {
            className: "ml-auto flex gap-2",
            children: [
              s?.(),
              (0, i.jsx)(tR.TimeFormatToggle, {}),
              (0, i.jsx)("div", {
                className: "fixed top-4 ltr:right-4 rtl:left-4",
                children: (0, i.jsx)(tM, {
                  layout: y,
                  enabledLayouts: a,
                  onLayoutToggle: N,
                  isPlatform: c,
                }),
              }),
              (0, i.jsx)("div", {
                className: "pointer-events-none opacity-0",
                "aria-hidden": !0,
                children: (0, i.jsx)(tM, {
                  layout: y,
                  enabledLayouts: a,
                  onLayoutToggle: N,
                  isPlatform: c,
                }),
              }),
            ],
          }),
        ],
      });
    }
    let tP = ({ onLayoutToggle: e, layout: t, enabledLayouts: a, isPlatform: r = !1 }) => {
        let n = (0, X.useIsEmbed)(),
          { t: o } = (0, e1.useAtomsLocale)(),
          s = (0, m.useMemo)(
            () =>
              [
                {
                  value: h.BookerLayouts.MONTH_VIEW,
                  label: (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(tA.CalendarIcon, { className: "h-4 w-4" }),
                      (0, i.jsxs)("span", {
                        className: "sr-only",
                        children: ["$", o("switch_monthly")],
                      }),
                    ],
                  }),
                  tooltip: o("switch_monthly"),
                },
                {
                  value: h.BookerLayouts.WEEK_VIEW,
                  label: (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(tA.Grid3x3Icon, { className: "h-4 w-4" }),
                      (0, i.jsxs)("span", {
                        className: "sr-only",
                        children: ["$", o("switch_weekly")],
                      }),
                    ],
                  }),
                  tooltip: o("switch_weekly"),
                },
                {
                  value: h.BookerLayouts.COLUMN_VIEW,
                  label: (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(tA.Columns3Icon, { className: "h-4 w-4" }),
                      (0, i.jsxs)("span", {
                        className: "sr-only",
                        children: ["$", o("switch_columnview")],
                      }),
                    ],
                  }),
                  tooltip: o("switch_columnview"),
                },
              ].filter((e) => a?.includes(e.value)),
            [o, a]
          );
        return n || r
          ? null
          : (0, i.jsx)(tO.ToggleGroup, {
              onValueChange: e,
              defaultValue: t,
              "aria-label": o("layout"),
              options: s,
            });
      },
      tM = ({ enabledLayouts: e, onLayoutToggle: t, layout: a, isPlatform: r = !1 }) =>
        e.length <= 1
          ? null
          : (0, i.jsx)(tP, { onLayoutToggle: t, layout: a, enabledLayouts: e, isPlatform: r });
    function tz(e) {
      return (0, i.jsx)(tB, { ...e, webappUrl: eR.WEBAPP_URL });
    }
    var tU = e.i(622030);
    let tF = (e, t) => {
      requestAnimationFrame(() => {
        1 === e ? t() : requestAnimationFrame(() => tF(e - 1, t));
      });
    };
    var tV = e.i(255889),
      t$ = e.i(676468),
      tq = e.i(695178),
      tW = e.i(522016);
    let tH = ({ logoOnly: e, hasValidLicense: t }) => {
      let { t: a } = (0, eS.useLocale)(),
        r = (0, l.useIsEmbed)();
      return (0, i.jsx)("div", {
        className: `p-2 text-center text-xs sm:text-right${r ? " max-w-3xl" : ""}`,
        children: (0, i.jsxs)(tW.default, {
          href: eR.POWERED_BY_URL,
          target: "_blank",
          className: "text-subtle",
          children: [
            !e && (0, i.jsxs)(i.Fragment, { children: [a("powered_by"), " "] }),
            "Cal.com" !== eR.APP_NAME && t
              ? (0, i.jsx)("span", {
                  className: "text-emphasis font-semibold opacity-50 hover:opacity-100",
                  children: eR.APP_NAME,
                })
              : (0, i.jsx)(i.Fragment, {
                  children: (0, i.jsx)("img", {
                    className: "-mt-px inline h-[10px] w-auto dark:invert",
                    src: "../../assets/misc/logo-c19c3e",
                    alt: "Cal.com Logo",
                  }),
                }),
          ],
        }),
      });
    };
    var tZ = e.i(88653),
      tY = e.i(444113),
      tG = e.i(309453),
      tK = (e) => !e.firstChild || e.firstChild.offsetParent === e,
      tQ = null;
    "u" > typeof CSS &&
      CSS.supports &&
      (CSS.supports("position", "sticky")
        ? (tQ = "sticky")
        : CSS.supports("position", "-webkit-sticky") && (tQ = "-webkit-sticky"));
    var tJ = !1;
    try {
      let e = Object.defineProperty({}, "passive", {
          get() {
            tJ = { passive: !0 };
          },
        }),
        t = () => {};
      (window.addEventListener("testPassive", t, e),
        window.removeEventListener("testPassive", t, e));
    } catch (e) {}
    var tX = (e) => {
        let { el: t, onChange: a, unsubs: r, measure: n } = e;
        if (t === window) {
          let e = () => ({ top: 0, left: 0, height: window.innerHeight, width: window.innerWidth }),
            t = n(e()),
            i = () => {
              (Object.assign(t, n(e())), a());
            };
          return (
            window.addEventListener("resize", i, tJ),
            r.push(() => window.removeEventListener("resize", i)),
            t
          );
        }
        {
          let e = n(t.getBoundingClientRect()),
            i = new ResizeObserver(() => {
              (Object.assign(e, n(t.getBoundingClientRect())), a());
            });
          return (i.observe(t), r.push(() => i.disconnect()), e);
        }
      },
      t0 = (e) => {
        let { offsetTop: t, offsetBottom: a, bottom: r, children: n, className: o, style: s } = e,
          l = (({ offsetTop: e = 0, offsetBottom: t = 0, bottom: a = !1 } = {}) => {
            let [r, n] = (0, m.useState)(null);
            return (
              (0, m.useEffect)(() => {
                if (!r || !tQ) return;
                let n = [];
                return (
                  ((e, t, a) => {
                    let r,
                      { bottom: n, offsetBottom: i, offsetTop: o } = a,
                      s = ((e) => {
                        let t = e;
                        for (; (t = t.parentElement); ) {
                          let e = getComputedStyle(t, null).getPropertyValue("overflow-y");
                          if (t === document.body) break;
                          if ("auto" === e || "scroll" === e || "overlay" === e) return t;
                        }
                        return window;
                      })(e),
                      l = !1,
                      c = () => {
                        (l ||
                          requestAnimationFrame(() => {
                            let e = m();
                            (e !== x && k(e), (l = !1));
                          }),
                          (l = !0));
                      },
                      u = s === window ? window.scrollY : s.scrollTop,
                      d = (e) => {
                        let { offsetTop: t, height: a } = h,
                          { naturalTop: r } = b,
                          { height: n } = y;
                        return e + t + a >= r + n + v + i;
                      },
                      m = () => {
                        let { height: e } = h,
                          { height: t } = y;
                        return t + o + i <= e ? 3 : d(u) ? 1 : 2;
                      },
                      p = s !== window && tK(s),
                      h = tX({
                        el: s,
                        onChange: c,
                        unsubs: t,
                        measure: ({ height: e, top: t }) => ({ height: e, offsetTop: p ? t : 0 }),
                      }),
                      f = ((e) => {
                        let t = e.parentElement;
                        for (
                          ;
                          t && "contents" === getComputedStyle(t, null).getPropertyValue("display");
                        )
                          t = t.parentElement;
                        return t || window;
                      })(e),
                      g =
                        f === window
                          ? { top: 0, bottom: 0 }
                          : {
                              top: parseInt(
                                (r = getComputedStyle(f, null)).getPropertyValue("padding-top"),
                                10
                              ),
                              bottom: parseInt(r.getPropertyValue("padding-bottom"), 10),
                            },
                      b = tX({
                        el: f,
                        onChange: c,
                        unsubs: t,
                        measure: ({ height: e }) => ({
                          height: e - g.top - g.bottom,
                          naturalTop:
                            f === window
                              ? 0
                              : ((e, t) => {
                                  let a = e,
                                    r = 0;
                                  tK(t) ||
                                    ((r += e.offsetTop - t.offsetTop),
                                    (t = e.offsetParent),
                                    (r += -e.offsetTop));
                                  do ((r += a.offsetTop), (a = a.offsetParent));
                                  while (a && a !== t);
                                  return r;
                                })(f, s) +
                                g.top +
                                h.offsetTop,
                        }),
                      }),
                      y = tX({
                        el: e,
                        onChange: c,
                        unsubs: t,
                        measure: ({ height: e }) => ({ height: e }),
                      }),
                      v = 0,
                      x = m(),
                      k = (t) => {
                        let a = x;
                        if (((x = t), 2 === a && (v = -1), 3 === t)) {
                          ((e.style.position = tQ),
                            n ? (e.style.bottom = `${i}px`) : (e.style.top = `${o}px`));
                          return;
                        }
                        let { height: r, offsetTop: s } = h,
                          { height: l, naturalTop: c } = b,
                          { height: d } = y;
                        if (2 === t)
                          if (
                            ((e.style.position = "relative"),
                            (v =
                              0 === a
                                ? Math.max(0, s + u - c + o)
                                : Math.max(0, s + u + r - (c + d + i))),
                            n)
                          ) {
                            let t = Math.max(0, l - d - v);
                            e.style.bottom = `${t}px`;
                          } else e.style.top = `${v}px`;
                        else
                          ((e.style.position = tQ),
                            1 === t
                              ? n
                                ? (e.style.bottom = `${i}px`)
                                : (e.style.top = `${r - d - i}px`)
                              : n
                                ? (e.style.bottom = `${r - d - i}px`)
                                : (e.style.top = `${o}px`));
                      };
                    k(x);
                    let w = (e) => {
                        if (e === u) return;
                        let t = e - u;
                        if (((u = e), 3 === x)) return;
                        let { offsetTop: a, height: r } = h,
                          { naturalTop: n, height: s } = b,
                          { height: l } = y;
                        if (t > 0)
                          if (0 === x) {
                            if (e + a + o > n) {
                              let t = Math.max(0, a + u - n + o);
                              e + a + r <= n + l + t + i ? k(2) : k(1);
                            }
                          } else 2 === x && d(e) && k(1);
                        else if (1 === x) {
                          if (a + e + r < n + s + i) {
                            let t = Math.max(0, a + u + r - (n + l + i));
                            a + e + o >= n + t ? k(2) : k(0);
                          }
                        } else 2 === x && a + e + o < n + v && k(0);
                      },
                      _ = s === window ? () => w(window.scrollY) : () => w(s.scrollTop);
                    (s.addEventListener("scroll", _, tJ),
                      s.addEventListener("mousewheel", _, tJ),
                      t.push(
                        () => s.removeEventListener("scroll", _),
                        () => s.removeEventListener("mousewheel", _)
                      ));
                  })(r, n, { offsetBottom: t, offsetTop: e, bottom: a }),
                  () => {
                    n.forEach((e) => e());
                  }
                );
              }, [r, t, e, a]),
              n
            );
          })({ offsetTop: t, offsetBottom: a, bottom: r });
        return (0, i.jsx)("div", { className: o, style: s, ref: l, children: n });
      };
    let t1 = () => {
        let { t: e } = (0, e1.useAtomsLocale)(),
          [t, a, r] = (0, u.useBookerStoreContext)(
            (e) => [e.showCrmOwnerBanner, e.teamMemberEmail, e.crmOwnerRRFallbackActive],
            p.shallow
          );
        return t && a && !r
          ? (0, i.jsxs)("div", {
              "data-testid": "crm-owner-banner",
              className:
                "bg-default border-subtle mb-2 flex items-center gap-2 rounded-lg border px-3 py-2 text-sm shadow-sm",
              children: [
                (0, i.jsx)(tA.InfoIcon, { className: "h-4 w-4 shrink-0 text-orange-500" }),
                (0, i.jsx)("span", {
                  className: "text-emphasis font-medium",
                  "data-testid": "crm-owner-msg",
                  children: e("crm_owner_banner_message", { owner: a }),
                }),
              ],
            })
          : null;
      },
      t2 = ({ isEmbed: e }) => {
        let { t } = (0, e1.useAtomsLocale)(),
          [a, r] = (0, m.useState)(!0);
        return a
          ? (0, i.jsx)("div", {
              "data-testid": "dry-run-banner",
              onClick: () => r(!1),
              className: `bg-default border-subtle fixed left-1/2 ${!e ? "top-4" : "top-0"} z-50 -translate-x-1/2 transform cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm shadow-md`,
              children: (0, i.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [
                  (0, i.jsx)("div", {
                    className: "relative",
                    children: (0, i.jsx)(tA.InfoIcon, { className: "h-5 w-5 text-orange-500" }),
                  }),
                  (0, i.jsx)("div", {
                    className: "text-emphasis font-medium",
                    "data-testid": "dry-run-msg",
                    children: t("dry_run_mode_active"),
                  }),
                ],
              }),
            })
          : null;
      };
    var t3 = e.i(579264),
      t4 = e.i(158554);
    let t6 = (e) => ((e.returnValue = "/o"), "/o"),
      t5 = ({
        bookingUid: e,
        onGoBack: t,
        expiryTime: a,
        instantVideoMeetingUrl: r,
        orgName: n,
      }) => {
        let o,
          s,
          l,
          { t: c } = (0, e1.useAtomsLocale)(),
          [u, d] = (0, m.useState)(g()),
          [p, h] = (0, m.useState)(!1),
          f = (0, eF.useRouter)();
        function g() {
          let e = (0, eY.default)();
          return Math.max((0, eY.default)(a).diff(e), 0);
        }
        return (
          (0, m.useEffect)(() => {
            if (!a) return;
            let e = setInterval(() => {
              (d(g()), h(a && new Date(a) < new Date()));
            }, 1e3);
            return () => {
              clearInterval(e);
            };
          }, [a]),
          (0, m.useEffect)(
            () =>
              !a || p || r
                ? void window.removeEventListener("beforeunload", t6)
                : (window.addEventListener("beforeunload", t6),
                  () => {
                    window.removeEventListener("beforeunload", t6);
                  }),
            [a, p, r]
          ),
          (0, m.useEffect)(() => {
            r && (window.removeEventListener("beforeunload", t6), f.push(r));
          }, [r]),
          (0, i.jsx)(t4.Dialog, {
            open: !!e && !!a,
            children: (0, i.jsx)(t4.DialogContent, {
              enableOverflow: !0,
              className: "py-8",
              "data-testid": "instant-meeting-modal",
              children: (0, i.jsx)("div", {
                children: p
                  ? (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)("p", {
                          className: "font-medium",
                          children: c("please_book_a_time_sometime_later"),
                        }),
                        (0, i.jsx)(tE.Button, {
                          className: "mt-4",
                          onClick: () => {
                            t();
                          },
                          color: "primary",
                          children: c("schedule_instead"),
                        }),
                      ],
                    })
                  : (0, i.jsxs)("div", {
                      className: "text-center",
                      children: [
                        (0, i.jsx)("p", {
                          className: "font-medium",
                          children: c("connecting_you_to_someone", { orgName: n }),
                        }),
                        (0, i.jsx)("p", {
                          className: "font-bold",
                          children: c("please_do_not_close_this_tab"),
                        }),
                        (0, i.jsx)("p", {
                          className: "mt-2 font-medium",
                          children: c("please_schedule_future_call", {
                            seconds:
                              ((s = (o = eY.default.duration(u)).seconds()),
                              (l = o.minutes()),
                              `${l}m ${s}s`),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "mt-4 h-[414px]",
                          children: (0, i.jsx)("iframe", {
                            title: "instant-meeting",
                            className: "mx-auto h-full w-[276px] rounded-lg",
                            src: "https://cal.games/",
                          }),
                        }),
                      ],
                    }),
              }),
            }),
          })
        );
      };
    var t9 = e.i(261254);
    let t8 = {
        calendar: "[grid-area:calendar]",
        main: "[grid-area:main]",
        meta: "[grid-area:meta]",
        timeslots: "[grid-area:timeslots]",
        header: "[grid-area:header]",
      },
      t7 = (0, m.forwardRef)(function (
        { children: e, area: t, visible: a, className: r, ...n },
        o
      ) {
        let s,
          l = (0, u.useBookerStoreContext)((e) => e.layout);
        return ((s = "string" == typeof t ? t8[t] : t8[t[l] || t.default]), a || void 0 === a)
          ? (0, i.jsx)(tG.m.div, {
              ref: o,
              className: (0, t9.cn)(s, r),
              layout: !0,
              ...n,
              children: e,
            })
          : null;
      }),
      ae = ({ children: e, title: t }) =>
        (0, i.jsx)("div", {
          className: "mx-auto w-full max-w-2xl",
          children: (0, i.jsxs)("div", {
            className:
              "border-subtle bg-default dark:bg-cal-muted overflow-hidden rounded-lg border p-10",
            children: [
              (0, i.jsx)("h2", { className: "font-heading mb-4 text-3xl", children: t }),
              e,
            ],
          }),
        }),
      at = () => {
        let { t: e } = (0, e1.useAtomsLocale)();
        return (0, i.jsx)(ae, {
          title: e("404_page_not_found"),
          children: (0, i.jsx)("p", {
            className: "max-w-[50ch]",
            children: e("booker_event_not_found"),
          }),
        });
      };
    var aa = e.i(419832),
      ar = e.i(833414),
      an = e.i(800978),
      ai = e.i(523349);
    let ao = Array.from({ length: 6 }, (e, t) => `verification-code-slot-${t}`),
      as = ({
        isOpenDialog: e,
        setIsOpenDialog: t,
        email: a,
        isUserSessionRequiredToVerify: r = !0,
        verifyCodeWithSessionNotRequired: n,
        verifyCodeWithSessionRequired: o,
        resetErrors: s,
        setIsPending: l,
        isPending: c,
        error: d,
        isPlatform: p = !1,
      }) => {
        let { t: h } = (0, e1.useAtomsLocale)(),
          [f, g] = (0, m.useState)(""),
          b = (0, m.useRef)(!1),
          y = (0, m.useRef)(!1),
          v = (0, u.useBookerStoreContext)((e) => e.setVerificationCode),
          x = (0, m.useCallback)(
            (e) => {
              (d && (y.current = !0), s(), (b.current = !1), g(e));
            },
            [d, s]
          ),
          k = (0, m.useCallback)(
            (e = f) => {
              (s(), l(!0), r ? o(e, a) : n(e, a), v(e), (b.current = !0));
            },
            [s, l, r, o, f, a, n, v]
          ),
          w = (0, m.useCallback)(
            (e) => {
              b.current || c || (d && !y.current) || ((y.current = !1), k(e));
            },
            [d, c, k]
          );
        ((0, m.useEffect)(() => {
          (g(""), (b.current = !1), (y.current = !1));
        }, [e]),
          (0, m.useEffect)(() => {
            d && (y.current = !1);
          }, [d]));
        let _ = (0, t9.cn)((0, ai.inputStyles)({ size: "md" }), "h-12 w-12 text-center text-xl!");
        return (0, i.jsx)(t4.Dialog, {
          open: e,
          onOpenChange: () => {
            s();
          },
          children: (0, i.jsx)(t4.DialogContent, {
            className: "pb-8 sm:max-w-md",
            children: (0, i.jsx)("div", {
              className: "flex flex-row",
              children: (0, i.jsxs)("div", {
                className: "w-full space-y-4",
                children: [
                  (0, i.jsx)(t4.DialogHeader, {
                    title: h("verify_your_email"),
                    subtitle: h("enter_digit_code", { email: a }),
                  }),
                  (0, i.jsx)(an.Label, { htmlFor: "code", children: h("code") }),
                  (0, i.jsx)(aa.OTPField.Root, {
                    "aria-label": h("code"),
                    autoComplete: "one-time-code",
                    className: "flex flex-row justify-between",
                    inputMode: "numeric",
                    length: 6,
                    validationType: "numeric",
                    value: f,
                    onValueChange: x,
                    onValueComplete: w,
                    children: ao.map((e, t) =>
                      (0, i.jsx)(
                        aa.OTPField.Input,
                        {
                          "aria-invalid": !!d || void 0,
                          "aria-label":
                            0 === t
                              ? h("code")
                              : h("otp_character_position", { position: t + 1, length: 6 }),
                          autoFocus: 0 === t,
                          className: _,
                          "data-slot": "otp-field-input",
                          id: ((e) => {
                            if (0 === e) return "code";
                          })(t),
                        },
                        e
                      )
                    ),
                  }),
                  d &&
                    (0, i.jsxs)("div", {
                      className: "mt-2 flex items-center gap-x-2 text-sm text-red-700",
                      children: [
                        (0, i.jsx)("div", {
                          children: (0, i.jsx)(ar.Icon, { name: "info", className: "h-3 w-3" }),
                        }),
                        (0, i.jsx)("p", { children: d }),
                      ],
                    }),
                  (0, i.jsxs)(t4.DialogFooter, {
                    noSticky: !0,
                    children: [
                      (0, i.jsx)(t4.DialogClose, { onClick: () => t(!1) }),
                      (0, i.jsx)(tE.Button, {
                        type: "submit",
                        onClick: () => k(),
                        loading: c,
                        children: h("submit"),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      };
    var al = e.i(63775),
      ac = e.i(912224),
      au = e.i(785313);
    let ad = ({
      extraDays: e,
      limitHeight: t,
      showAvailableSeatsCount: a,
      schedule: r,
      isLoading: n,
      customClassNames: o,
      skipConfirmStep: s,
      seatsPerTimeSlot: l,
      onSubmit: c,
      unavailableTimeSlots: p,
      confirmButtonDisabled: f,
      confirmStepClassNames: g,
      onAvailableTimeSlotSelect: b,
      hideAvailableTimesHeader: y = !1,
      isPlatform: v = !1,
      invalidateAvailableSlotsOnBookingForm: x = !1,
      hostRescheduleBypassToggle: k,
      ...w
    }) => {
      let _ = (0, u.useBookerStoreContext)((e) => e.selectedDate),
        C = (0, u.useBookerStoreContext)((e) => e.setSeatedEventData),
        { timezone: S } = (0, eW.useBookerTime)(),
        T =
          _ ||
          (S
            ? (0, eY.default)().tz(S).format("YYYY-MM-DD")
            : (0, eY.default)().format("YYYY-MM-DD")),
        [j] = (0, u.useBookerStoreContext)((e) => [e.layout]),
        N = j === h.BookerLayouts.COLUMN_VIEW,
        E = (0, m.useRef)(null),
        { setTentativeSelectedTimeslots: I, tentativeSelectedTimeslots: A } = (0,
        u.useBookerStoreContext)((e) => ({
          setTentativeSelectedTimeslots: e.setTentativeSelectedTimeslots,
          tentativeSelectedTimeslots: e.tentativeSelectedTimeslots,
        })),
        O = ({ time: e }) => {
          I([e]);
        },
        D = r?.data,
        L = (0, tS.useNonEmptyScheduleDays)(D?.slots).filter(
          (e) => 0 >= (0, eY.default)(_).diff(e, "day")
        ),
        R = (0, m.useMemo)(() => (e ? (L.length > 0 ? L.slice(0, e) : []) : [T]), [T, e, L]),
        { slotsPerDay: B, toggleConfirmButton: P } = (0, al.useSlotsForAvailableDates)(R, D?.slots),
        M = (0, d.useOverlayCalendarStore)((e) => e.isOverlayCalendarEnabled),
        z = (0, m.useCallback)(
          (e, t, n, i) => {
            (x && r?.invalidate?.(),
              I([]),
              n &&
                C({ seatsPerTimeSlot: n, attendees: t, bookingUid: i, showAvailableSeatsCount: a }),
              b(e));
            let o = !p.includes(e);
            s && o && c(e);
          },
          [c, C, s, a, p, r, I, b]
        ),
        U = (0, m.useCallback)(
          (e, t) => {
            (M && t) || s ? P(e) : z(e.time, e?.attendees || 0, l, e.bookingUid);
          },
          [M, z, l, s, P]
        );
      return (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)("div", {
            className: (0, t9.cn)("flex", y && "hidden", `${o?.availableTimeSlotsContainer}`),
            children: n
              ? (0, i.jsx)("div", { className: "mb-3 h-8" })
              : B.length > 0 &&
                B.map((e) => {
                  let t = e.slots.length > 0 && e.slots[0]?.away;
                  return (0, i.jsx)(
                    au.AvailableTimesHeader,
                    {
                      customClassNames: {
                        availableTimeSlotsHeaderContainer: o?.availableTimeSlotsHeaderContainer,
                        availableTimeSlotsTitle: o?.availableTimeSlotsTitle,
                        availableTimeSlotsTimeFormatToggle: o?.availableTimeSlotsTimeFormatToggle,
                      },
                      date: (0, eY.default)(e.date),
                      showTimeFormatToggle: !N && !t,
                      availableMonth:
                        (0, eY.default)(_).format("MM") !== (0, eY.default)(e.date).format("MM")
                          ? (0, eY.default)(e.date).format("MMM")
                          : void 0,
                    },
                    e.date
                  );
                }),
          }),
          k,
          (0, i.jsxs)("div", {
            ref: E,
            "data-skip-confirm-step": s ? "true" : void 0,
            className: (0, t9.cn)(
              t && "no-scrollbar grow overflow-auto md:h-[400px]",
              !t && "flex h-full w-full flex-row gap-4",
              `${o?.availableTimeSlotsContainer}`
            ),
            children: [
              n &&
                Array.from({ length: 1 + (e ?? 0) }).map((e, t) =>
                  (0, i.jsx)(ac.AvailableTimesSkeleton, {}, t)
                ),
              !n &&
                B.length > 0 &&
                B.map((e) =>
                  (0, i.jsx)(
                    "div",
                    {
                      className: "no-scrollbar overflow-x-hidden! h-full w-full overflow-y-auto",
                      children: (0, i.jsx)(ac.AvailableTimes, {
                        className: o?.availableTimeSlotsContainer,
                        customClassNames: o?.availableTimes,
                        showTimeFormatToggle: !N,
                        onTimeSelect: z,
                        isPlatform: v,
                        onTentativeTimeSelect: O,
                        unavailableTimeSlots: p,
                        slots: e.slots,
                        showAvailableSeatsCount: a,
                        skipConfirmStep: s,
                        seatsPerTimeSlot: l,
                        handleSlotClick: U,
                        confirmButtonDisabled: f,
                        confirmStepClassNames: g,
                        ...w,
                      }),
                    },
                    e.date
                  )
                ),
            ],
          }),
        ],
      });
    };
    var am = e.i(885283);
    let {
        Axios: ap,
        AxiosError: ah,
        CanceledError: af,
        isCancel: ag,
        CancelToken: ab,
        VERSION: ay,
        all: av,
        Cancel: ax,
        isAxiosError: ak,
        spread: aw,
        toFormData: a_,
        AxiosHeaders: aC,
        HttpStatusCode: aS,
        formToJSON: aT,
        getAdapter: aj,
        mergeConfig: aN,
        create: aE,
      } = e.i(581949).default,
      aI = "booking_request_failed_try_again";
    var aA = e.i(516771);
    function aO({
      Icon: e,
      customIcon: t,
      avatar: a,
      headline: r,
      description: n,
      buttonText: o,
      buttonOnClick: s,
      buttonRaw: l,
      border: c = !0,
      dashedBorder: u = !0,
      className: d,
      iconClassName: m,
      iconWrapperClassName: p,
      limitWidth: h = !0,
    }) {
      return (0, i.jsxs)("div", {
        "data-testid": "empty-screen",
        className: (0, t9.cn)(
          "flex w-full select-none flex-col items-center justify-center rounded-lg p-7 lg:p-20",
          c && "border-subtle border",
          u && "border-dashed",
          d
        ),
        children: [
          a
            ? (0, i.jsx)("div", {
                className: "flex h-[72px] w-[72px] items-center justify-center rounded-full",
                children: a,
              })
            : null,
          e
            ? (0, i.jsx)("div", {
                className: (0, t9.cn)(
                  "bg-emphasis flex h-[72px] w-[72px] items-center justify-center rounded-full ",
                  p
                ),
                children: (0, i.jsx)(ar.Icon, {
                  name: e,
                  className: (0, t9.cn)("text-default inline-block h-10 w-10 stroke-[1.3px]", m),
                }),
              })
            : null,
          t ? (0, i.jsx)(i.Fragment, { children: t }) : null,
          (0, i.jsxs)("div", {
            className: `flex ${h ? "max-w-[420px]" : ""}  flex-col items-center`,
            children: [
              (0, i.jsx)("h2", {
                className: (0, t9.cn)(
                  "font-heading text-emphasis text-center text-xl normal-nums",
                  e && "mt-6",
                  !n && "mb-8"
                ),
                children: r,
              }),
              n &&
                (0, i.jsx)("div", {
                  className: "text-default mb-8 mt-3 text-center text-sm font-normal leading-6",
                  children: n,
                }),
              s && o && (0, i.jsx)(tE.Button, { onClick: (e) => s(e), children: o }),
              l,
            ],
          }),
        ],
      });
    }
    var aD = e.i(99958),
      aL =
        (((t = {}).Unauthorized = "unauthorized_error"),
        (t.Forbidden = "forbidden_error"),
        (t.NotFound = "not_found_error"),
        (t.BadRequest = "bad_request_error"),
        (t.InternalServerError = "internal_server_error"),
        (t.PaymentCreationFailure = "payment_not_created_error"),
        (t.NoAvailableUsersFound = "no_available_users_found_error"),
        (t.ChargeCardFailure = "couldnt_charge_card_error"),
        (t.CollectCardFailure = "couldnt_collect_card_error"),
        (t.RequestBodyWithouEnd = "request_body_end_time_internal_error"),
        (t.AlreadySignedUpForBooking = "already_signed_up_for_this_booking_error"),
        (t.FixedHostsUnavailableForBooking = "fixed_hosts_unavailable_for_booking"),
        (t.RoundRobinHostsUnavailableForBooking = "round_robin_host_unavailable_for_booking"),
        (t.EventTypeNotFound = "event_type_not_found_error"),
        (t.BookingNotFound = "booking_not_found_error"),
        (t.BookingSeatsFull = "booking_seats_full_error"),
        (t.MissingPaymentCredential = "missing_payment_credential_error"),
        (t.MissingPaymentAppId = "missing_payment_app_id_error"),
        (t.NotEnoughAvailableSeats = "not_enough_available_seats_error"),
        (t.AvailabilityNotFoundInSchedule = "availability_not_found_in_schedule_error"),
        (t.CancelledBookingsCannotBeRescheduled = "cancelled_bookings_cannot_be_rescheduled"),
        (t.UnableToSubscribeToThePlatform = "unable_to_subscribe_to_the_platform"),
        (t.UpdatingOauthClientError = "updating_oauth_client_error"),
        (t.CreatingOauthClientError = "creating_oauth_client_error"),
        (t.BookingTimeOutOfBounds = "booking_time_out_of_bounds_error"),
        (t.BookingConflict = "booking_conflict_error"),
        (t.BookerLimitExceeded = "booker_limit_exceeded_error"),
        (t.BookerLimitExceededReschedule = "booker_limit_exceeded_error_reschedule"),
        (t.BookingNotAllowedByRestrictionSchedule =
          "booking_not_allowed_by_restriction_schedule_error"),
        (t.RestrictionScheduleNotFound = "restriction_schedule_not_found_error"),
        (t.EventTypeNoHosts = "event_type_no_hosts"),
        (t.RequestBodyInvalid = "request_body_invalid_error"),
        (t.PrivateLinkExpired = "private_link_expired"),
        (t.BookerEmailBlocked = "booker_email_blocked"),
        (t.BookerEmailRequiresLogin = "booker_email_requires_login"),
        (t.InvalidVerificationCode = "invalid_verification_code"),
        (t.UnableToValidateVerificationCode = "unable_to_validate_verification_code"),
        t);
    let aR = (e) => e?.replace(/\{([^}]+)\}.*/, "$1");
    function aB(e) {
      return Array.isArray(e) ? e : [e];
    }
    var aP = e.i(711592),
      aM = e.i(961555);
    let az = ({ date: e, timeFormat: t, timeZone: a, language: r }) => {
        let n = new Date(e),
          i = (0, tL.formatDateTime)(n, { locale: r, timeZone: a, dateStyle: "full" }),
          o = (0, tL.formatDateTime)(n, {
            locale: r,
            timeZone: a,
            timeStyle: "short",
            hour12: t === eK.TimeFormat.TWELVE_HOUR,
          });
        return { date: i, time: t === eK.TimeFormat.TWELVE_HOUR ? o.toLowerCase() : o };
      },
      aU = (e) => {
        let t = (({ date: e, duration: t, timeFormat: a, timeZone: r, language: n }) => {
          let i = new Date(e),
            o = t ? new Date(new Date(e).setMinutes(i.getMinutes() + t)) : i,
            s = (0, tL.formatDateTimeRange)(i, o, { locale: n, timeZone: r, dateStyle: "full" }),
            l = (0, tL.formatDateTimeRange)(i, o, {
              locale: n,
              timeZone: r,
              timeStyle: "short",
              hour12: a === eK.TimeFormat.TWELVE_HOUR,
            });
          return { date: s, time: a === eK.TimeFormat.TWELVE_HOUR ? l.toLowerCase() : l };
        })(e);
        return (0, i.jsxs)(i.Fragment, { children: [t.date, (0, i.jsx)("br", {}), t.time] });
      },
      aF = (e) => {
        let t = az(e);
        return (0, i.jsxs)(i.Fragment, { children: [t.date, ", ", t.time] });
      };
    var aV = e.i(424154);
    function a$() {
      return {
        async: !1,
        breaks: !1,
        extensions: null,
        gfm: !0,
        hooks: null,
        pedantic: !1,
        renderer: null,
        silent: !1,
        tokenizer: null,
        walkTokens: null,
      };
    }
    let aq = a$(),
      aW = { exec: () => null };
    function aH(e, t = "") {
      let a = "string" == typeof e ? e : e.source,
        r = {
          replace: (e, t) => {
            let n = "string" == typeof t ? t : t.source;
            return ((n = n.replace(aZ.caret, "$1")), (a = a.replace(e, n)), r);
          },
          getRegex: () => new RegExp(a, t),
        };
      return r;
    }
    let aZ = {
        codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
        outputLinkReplace: /\\([\[\]])/g,
        indentCodeCompensation: /^(\s+)(?:```)/,
        beginningSpace: /^\s+/,
        endingHash: /#$/,
        startingSpaceChar: /^ /,
        endingSpaceChar: / $/,
        nonSpaceChar: /[^ ]/,
        newLineCharGlobal: /\n/g,
        tabCharGlobal: /\t/g,
        multipleSpaceGlobal: /\s+/g,
        blankLine: /^[ \t]*$/,
        doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
        blockquoteStart: /^ {0,3}>/,
        blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
        blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
        listReplaceTabs: /^\t+/,
        listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
        listIsTask: /^\[[ xX]\] /,
        listReplaceTask: /^\[[ xX]\] +/,
        anyLine: /\n.*\n/,
        hrefBrackets: /^<(.*)>$/,
        tableDelimiter: /[:|]/,
        tableAlignChars: /^\||\| *$/g,
        tableRowBlankLine: /\n[ \t]*$/,
        tableAlignRight: /^ *-+: *$/,
        tableAlignCenter: /^ *:-+: *$/,
        tableAlignLeft: /^ *:-+ *$/,
        startATag: /^<a /i,
        endATag: /^<\/a>/i,
        startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
        endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
        startAngleBracket: /^</,
        endAngleBracket: />$/,
        pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
        unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
        escapeTest: /[&<>"']/,
        escapeReplace: /[&<>"']/g,
        escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
        escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
        unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
        caret: /(^|[^\[])\^/g,
        percentDecode: /%25/g,
        findPipe: /\|/g,
        splitPipe: / \|/,
        slashPipe: /\\\|/g,
        carriageReturn: /\r\n|\r/g,
        spaceLine: /^ +$/gm,
        notSpaceStart: /^\S*/,
        endingNewline: /\n$/,
        listItemRegex: (e) => RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
        nextBulletRegex: (e) =>
          RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
        hrRegex: (e) =>
          RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
        fencesBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
        headingBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
        htmlBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i"),
      },
      aY = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
      aG = /(?:[*+-]|\d{1,9}[.)])/,
      aK = aH(
        /^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/
      )
        .replace(/bull/g, aG)
        .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
        .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
        .replace(/blockquote/g, / {0,3}>/)
        .replace(/heading/g, / {0,3}#{1,6}/)
        .replace(/html/g, / {0,3}<[^\n>]+>\n/)
        .getRegex(),
      aQ = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
      aJ = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
      aX = aH(
        /^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/
      )
        .replace("label", aJ)
        .replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/)
        .getRegex(),
      a0 = aH(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
        .replace(/bull/g, aG)
        .getRegex(),
      a1 =
        "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
      a2 = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
      a3 = aH(
        "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
        "i"
      )
        .replace("comment", a2)
        .replace("tag", a1)
        .replace(
          "attribute",
          / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
        )
        .getRegex(),
      a4 = aH(aQ)
        .replace("hr", aY)
        .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
        .replace("|lheading", "")
        .replace("|table", "")
        .replace("blockquote", " {0,3}>")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
        .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
        .replace("tag", a1)
        .getRegex(),
      a6 = {
        blockquote: aH(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
          .replace("paragraph", a4)
          .getRegex(),
        code: /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
        def: aX,
        fences:
          /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
        heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
        hr: aY,
        html: a3,
        lheading: aK,
        list: a0,
        newline: /^(?:[ \t]*(?:\n|$))+/,
        paragraph: a4,
        table: aW,
        text: /^[^\n]+/,
      },
      a5 = aH(
        "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
      )
        .replace("hr", aY)
        .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
        .replace("blockquote", " {0,3}>")
        .replace("code", "(?: {4}| {0,3}	)[^\\n]")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
        .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
        .replace("tag", a1)
        .getRegex(),
      a9 = {
        ...a6,
        table: a5,
        paragraph: aH(aQ)
          .replace("hr", aY)
          .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
          .replace("|lheading", "")
          .replace("table", a5)
          .replace("blockquote", " {0,3}>")
          .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
          .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
          .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
          .replace("tag", a1)
          .getRegex(),
      },
      a8 = {
        ...a6,
        html: aH(
          "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
        )
          .replace("comment", a2)
          .replace(
            /tag/g,
            "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
          )
          .getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: aW,
        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        paragraph: aH(aQ)
          .replace("hr", aY)
          .replace("heading", " *#{1,6} *[^\n]")
          .replace("lheading", aK)
          .replace("|table", "")
          .replace("blockquote", " {0,3}>")
          .replace("|fences", "")
          .replace("|list", "")
          .replace("|html", "")
          .replace("|tag", "")
          .getRegex(),
      },
      a7 = /^( {2,}|\\)\n(?!\s*$)/,
      re = /[\p{P}\p{S}]/u,
      rt = /[\s\p{P}\p{S}]/u,
      ra = /[^\s\p{P}\p{S}]/u,
      rr = aH(/^((?![*_])punctSpace)/, "u")
        .replace(/punctSpace/g, rt)
        .getRegex(),
      rn = /(?!~)[\p{P}\p{S}]/u,
      ri = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,
      ro = aH(ri, "u").replace(/punct/g, re).getRegex(),
      rs = aH(ri, "u").replace(/punct/g, rn).getRegex(),
      rl =
        "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",
      rc = aH(rl, "gu")
        .replace(/notPunctSpace/g, ra)
        .replace(/punctSpace/g, rt)
        .replace(/punct/g, re)
        .getRegex(),
      ru = aH(rl, "gu")
        .replace(/notPunctSpace/g, /(?:[^\s\p{P}\p{S}]|~)/u)
        .replace(/punctSpace/g, /(?!~)[\s\p{P}\p{S}]/u)
        .replace(/punct/g, rn)
        .getRegex(),
      rd = aH(
        "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
        "gu"
      )
        .replace(/notPunctSpace/g, ra)
        .replace(/punctSpace/g, rt)
        .replace(/punct/g, re)
        .getRegex(),
      rm = aH(/\\(punct)/, "gu")
        .replace(/punct/g, re)
        .getRegex(),
      rp = aH(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
        .replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
        .replace(
          "email",
          /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/
        )
        .getRegex(),
      rh = aH(a2).replace("(?:-->|$)", "-->").getRegex(),
      rf = aH(
        "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
      )
        .replace("comment", rh)
        .replace(
          "attribute",
          /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/
        )
        .getRegex(),
      rg = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
      rb = aH(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/)
        .replace("label", rg)
        .replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/)
        .replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/)
        .getRegex(),
      ry = aH(/^!?\[(label)\]\[(ref)\]/)
        .replace("label", rg)
        .replace("ref", aJ)
        .getRegex(),
      rv = aH(/^!?\[(ref)\](?:\[\])?/)
        .replace("ref", aJ)
        .getRegex(),
      rx = aH("reflink|nolink(?!\\()", "g").replace("reflink", ry).replace("nolink", rv).getRegex(),
      rk = {
        _backpedal: aW,
        anyPunctuation: rm,
        autolink: rp,
        blockSkip: /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,
        br: a7,
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        del: aW,
        emStrongLDelim: ro,
        emStrongRDelimAst: rc,
        emStrongRDelimUnd: rd,
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        link: rb,
        nolink: rv,
        punctuation: rr,
        reflink: ry,
        reflinkSearch: rx,
        tag: rf,
        text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
        url: aW,
      },
      rw = {
        ...rk,
        link: aH(/^!?\[(label)\]\((.*?)\)/)
          .replace("label", rg)
          .getRegex(),
        reflink: aH(/^!?\[(label)\]\s*\[([^\]]*)\]/)
          .replace("label", rg)
          .getRegex(),
      },
      r_ = {
        ...rk,
        emStrongRDelimAst: ru,
        emStrongLDelim: rs,
        url: aH(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i")
          .replace(
            "email",
            /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/
          )
          .getRegex(),
        _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
      },
      rC = {
        ...r_,
        br: aH(a7).replace("{2,}", "*").getRegex(),
        text: aH(r_.text)
          .replace("\\b_", "\\b_| {2,}\\n")
          .replace(/\{2,\}/g, "*")
          .getRegex(),
      },
      rS = { normal: a6, gfm: a9, pedantic: a8 },
      rT = { normal: rk, gfm: r_, breaks: rC, pedantic: rw },
      rj = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
      rN = (e) => rj[e];
    function rE(e, t) {
      if (t) {
        if (aZ.escapeTest.test(e)) return e.replace(aZ.escapeReplace, rN);
      } else if (aZ.escapeTestNoEncode.test(e)) return e.replace(aZ.escapeReplaceNoEncode, rN);
      return e;
    }
    function rI(e) {
      try {
        e = encodeURI(e).replace(aZ.percentDecode, "%");
      } catch {
        return null;
      }
      return e;
    }
    function rA(e, t) {
      let a = e
          .replace(aZ.findPipe, (e, t, a) => {
            let r = !1,
              n = t;
            for (; --n >= 0 && "\\" === a[n]; ) r = !r;
            return r ? "|" : " |";
          })
          .split(aZ.splitPipe),
        r = 0;
      if ((a[0].trim() || a.shift(), a.length > 0 && !a.at(-1)?.trim() && a.pop(), t))
        if (a.length > t) a.splice(t);
        else for (; a.length < t; ) a.push("");
      for (; r < a.length; r++) a[r] = a[r].trim().replace(aZ.slashPipe, "|");
      return a;
    }
    function rO(e, t, a) {
      let r = e.length;
      if (0 === r) return "";
      let n = 0;
      for (; n < r; )
        if (e.charAt(r - n - 1) === t) n++;
        else break;
      return e.slice(0, r - n);
    }
    function rD(e, t, a, r, n) {
      let i = t.href,
        o = t.title || null,
        s = e[1].replace(n.other.outputLinkReplace, "$1");
      if ("!" !== e[0].charAt(0)) {
        r.state.inLink = !0;
        let e = { type: "link", raw: a, href: i, title: o, text: s, tokens: r.inlineTokens(s) };
        return ((r.state.inLink = !1), e);
      }
      return { type: "image", raw: a, href: i, title: o, text: s };
    }
    class rL {
      options;
      rules;
      lexer;
      constructor(e) {
        this.options = e || aq;
      }
      space(e) {
        let t = this.rules.block.newline.exec(e);
        if (t && t[0].length > 0) return { type: "space", raw: t[0] };
      }
      code(e) {
        let t = this.rules.block.code.exec(e);
        if (t) {
          let e = t[0].replace(this.rules.other.codeRemoveIndent, "");
          return {
            type: "code",
            raw: t[0],
            codeBlockStyle: "indented",
            text: this.options.pedantic ? e : rO(e, "\n"),
          };
        }
      }
      fences(e) {
        let t = this.rules.block.fences.exec(e);
        if (t) {
          let e = t[0],
            a = (function (e, t, a) {
              let r = e.match(a.other.indentCodeCompensation);
              if (null === r) return t;
              let n = r[1];
              return t
                .split("\n")
                .map((e) => {
                  let t = e.match(a.other.beginningSpace);
                  if (null === t) return e;
                  let [r] = t;
                  return r.length >= n.length ? e.slice(n.length) : e;
                })
                .join("\n");
            })(e, t[3] || "", this.rules);
          return {
            type: "code",
            raw: e,
            lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
            text: a,
          };
        }
      }
      heading(e) {
        let t = this.rules.block.heading.exec(e);
        if (t) {
          let e = t[2].trim();
          if (this.rules.other.endingHash.test(e)) {
            let t = rO(e, "#");
            this.options.pedantic
              ? (e = t.trim())
              : (!t || this.rules.other.endingSpaceChar.test(t)) && (e = t.trim());
          }
          return {
            type: "heading",
            raw: t[0],
            depth: t[1].length,
            text: e,
            tokens: this.lexer.inline(e),
          };
        }
      }
      hr(e) {
        let t = this.rules.block.hr.exec(e);
        if (t) return { type: "hr", raw: rO(t[0], "\n") };
      }
      blockquote(e) {
        let t = this.rules.block.blockquote.exec(e);
        if (t) {
          let e = rO(t[0], "\n").split("\n"),
            a = "",
            r = "",
            n = [];
          for (; e.length > 0; ) {
            let t,
              i = !1,
              o = [];
            for (t = 0; t < e.length; t++)
              if (this.rules.other.blockquoteStart.test(e[t])) (o.push(e[t]), (i = !0));
              else if (i) break;
              else o.push(e[t]);
            e = e.slice(t);
            let s = o.join("\n"),
              l = s
                .replace(this.rules.other.blockquoteSetextReplace, "\n    $1")
                .replace(this.rules.other.blockquoteSetextReplace2, "");
            ((a = a
              ? `${a}
${s}`
              : s),
              (r = r
                ? `${r}
${l}`
                : l));
            let c = this.lexer.state.top;
            if (
              ((this.lexer.state.top = !0),
              this.lexer.blockTokens(l, n, !0),
              (this.lexer.state.top = c),
              0 === e.length)
            )
              break;
            let u = n.at(-1);
            if (u?.type === "code") break;
            if (u?.type === "blockquote") {
              let t = u.raw + "\n" + e.join("\n"),
                i = this.blockquote(t);
              ((n[n.length - 1] = i),
                (a = a.substring(0, a.length - u.raw.length) + i.raw),
                (r = r.substring(0, r.length - u.text.length) + i.text));
              break;
            }
            if (u?.type === "list") {
              let t = u.raw + "\n" + e.join("\n"),
                i = this.list(t);
              ((n[n.length - 1] = i),
                (a = a.substring(0, a.length - u.raw.length) + i.raw),
                (r = r.substring(0, r.length - u.raw.length) + i.raw),
                (e = t.substring(n.at(-1).raw.length).split("\n")));
              continue;
            }
          }
          return { type: "blockquote", raw: a, tokens: n, text: r };
        }
      }
      list(e) {
        let t = this.rules.block.list.exec(e);
        if (t) {
          let a = t[1].trim(),
            r = a.length > 1,
            n = {
              type: "list",
              raw: "",
              ordered: r,
              start: r ? +a.slice(0, -1) : "",
              loose: !1,
              items: [],
            };
          ((a = r ? `\\d{1,9}\\${a.slice(-1)}` : `\\${a}`),
            this.options.pedantic && (a = r ? a : "[*+-]"));
          let i = this.rules.other.listItemRegex(a),
            o = !1;
          for (; e; ) {
            let a,
              r = !1,
              s = "",
              l = "";
            if (!(t = i.exec(e)) || this.rules.block.hr.test(e)) break;
            ((s = t[0]), (e = e.substring(s.length)));
            let c = t[2]
                .split("\n", 1)[0]
                .replace(this.rules.other.listReplaceTabs, (e) => " ".repeat(3 * e.length)),
              u = e.split("\n", 1)[0],
              d = !c.trim(),
              m = 0;
            if (
              (this.options.pedantic
                ? ((m = 2), (l = c.trimStart()))
                : d
                  ? (m = t[1].length + 1)
                  : ((m = (m = t[2].search(this.rules.other.nonSpaceChar)) > 4 ? 1 : m),
                    (l = c.slice(m)),
                    (m += t[1].length)),
              d &&
                this.rules.other.blankLine.test(u) &&
                ((s += u + "\n"), (e = e.substring(u.length + 1)), (r = !0)),
              !r)
            ) {
              let t = this.rules.other.nextBulletRegex(m),
                a = this.rules.other.hrRegex(m),
                r = this.rules.other.fencesBeginRegex(m),
                n = this.rules.other.headingBeginRegex(m),
                i = this.rules.other.htmlBeginRegex(m);
              for (; e; ) {
                let o,
                  p = e.split("\n", 1)[0];
                if (
                  ((u = p),
                  (o = this.options.pedantic
                    ? (u = u.replace(this.rules.other.listReplaceNesting, "  "))
                    : u.replace(this.rules.other.tabCharGlobal, "    ")),
                  r.test(u) || n.test(u) || i.test(u) || t.test(u) || a.test(u))
                )
                  break;
                if (o.search(this.rules.other.nonSpaceChar) >= m || !u.trim())
                  l += "\n" + o.slice(m);
                else {
                  if (
                    d ||
                    c
                      .replace(this.rules.other.tabCharGlobal, "    ")
                      .search(this.rules.other.nonSpaceChar) >= 4 ||
                    r.test(c) ||
                    n.test(c) ||
                    a.test(c)
                  )
                    break;
                  l += "\n" + u;
                }
                (d || u.trim() || (d = !0),
                  (s += p + "\n"),
                  (e = e.substring(p.length + 1)),
                  (c = o.slice(m)));
              }
            }
            !n.loose && (o ? (n.loose = !0) : this.rules.other.doubleBlankLine.test(s) && (o = !0));
            let p = null;
            (this.options.gfm &&
              (p = this.rules.other.listIsTask.exec(l)) &&
              ((a = "[ ] " !== p[0]), (l = l.replace(this.rules.other.listReplaceTask, ""))),
              n.items.push({
                type: "list_item",
                raw: s,
                task: !!p,
                checked: a,
                loose: !1,
                text: l,
                tokens: [],
              }),
              (n.raw += s));
          }
          let s = n.items.at(-1);
          if (!s) return;
          ((s.raw = s.raw.trimEnd()), (s.text = s.text.trimEnd()), (n.raw = n.raw.trimEnd()));
          for (let e = 0; e < n.items.length; e++)
            if (
              ((this.lexer.state.top = !1),
              (n.items[e].tokens = this.lexer.blockTokens(n.items[e].text, [])),
              !n.loose)
            ) {
              let t = n.items[e].tokens.filter((e) => "space" === e.type);
              n.loose = t.length > 0 && t.some((e) => this.rules.other.anyLine.test(e.raw));
            }
          if (n.loose) for (let e = 0; e < n.items.length; e++) n.items[e].loose = !0;
          return n;
        }
      }
      html(e) {
        let t = this.rules.block.html.exec(e);
        if (t)
          return {
            type: "html",
            block: !0,
            raw: t[0],
            pre: "pre" === t[1] || "script" === t[1] || "style" === t[1],
            text: t[0],
          };
      }
      def(e) {
        let t = this.rules.block.def.exec(e);
        if (t) {
          let e = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "),
            a = t[2]
              ? t[2]
                  .replace(this.rules.other.hrefBrackets, "$1")
                  .replace(this.rules.inline.anyPunctuation, "$1")
              : "",
            r = t[3]
              ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1")
              : t[3];
          return { type: "def", tag: e, raw: t[0], href: a, title: r };
        }
      }
      table(e) {
        let t = this.rules.block.table.exec(e);
        if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
        let a = rA(t[1]),
          r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"),
          n = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [],
          i = { type: "table", raw: t[0], header: [], align: [], rows: [] };
        if (a.length === r.length) {
          for (let e of r)
            this.rules.other.tableAlignRight.test(e)
              ? i.align.push("right")
              : this.rules.other.tableAlignCenter.test(e)
                ? i.align.push("center")
                : this.rules.other.tableAlignLeft.test(e)
                  ? i.align.push("left")
                  : i.align.push(null);
          for (let e = 0; e < a.length; e++)
            i.header.push({
              text: a[e],
              tokens: this.lexer.inline(a[e]),
              header: !0,
              align: i.align[e],
            });
          for (let e of n)
            i.rows.push(
              rA(e, i.header.length).map((e, t) => ({
                text: e,
                tokens: this.lexer.inline(e),
                header: !1,
                align: i.align[t],
              }))
            );
          return i;
        }
      }
      lheading(e) {
        let t = this.rules.block.lheading.exec(e);
        if (t)
          return {
            type: "heading",
            raw: t[0],
            depth: "=" === t[2].charAt(0) ? 1 : 2,
            text: t[1],
            tokens: this.lexer.inline(t[1]),
          };
      }
      paragraph(e) {
        let t = this.rules.block.paragraph.exec(e);
        if (t) {
          let e = "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
          return { type: "paragraph", raw: t[0], text: e, tokens: this.lexer.inline(e) };
        }
      }
      text(e) {
        let t = this.rules.block.text.exec(e);
        if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
      }
      escape(e) {
        let t = this.rules.inline.escape.exec(e);
        if (t) return { type: "escape", raw: t[0], text: t[1] };
      }
      tag(e) {
        let t = this.rules.inline.tag.exec(e);
        if (t)
          return (
            !this.lexer.state.inLink && this.rules.other.startATag.test(t[0])
              ? (this.lexer.state.inLink = !0)
              : this.lexer.state.inLink &&
                this.rules.other.endATag.test(t[0]) &&
                (this.lexer.state.inLink = !1),
            !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0])
              ? (this.lexer.state.inRawBlock = !0)
              : this.lexer.state.inRawBlock &&
                this.rules.other.endPreScriptTag.test(t[0]) &&
                (this.lexer.state.inRawBlock = !1),
            {
              type: "html",
              raw: t[0],
              inLink: this.lexer.state.inLink,
              inRawBlock: this.lexer.state.inRawBlock,
              block: !1,
              text: t[0],
            }
          );
      }
      link(e) {
        let t = this.rules.inline.link.exec(e);
        if (t) {
          let e = t[2].trim();
          if (!this.options.pedantic && this.rules.other.startAngleBracket.test(e)) {
            if (!this.rules.other.endAngleBracket.test(e)) return;
            let t = rO(e.slice(0, -1), "\\");
            if ((e.length - t.length) % 2 == 0) return;
          } else {
            let e = (function (e) {
              if (-1 === e.indexOf(")")) return -1;
              let t = 0;
              for (let a = 0; a < e.length; a++)
                if ("\\" === e[a]) a++;
                else if ("(" === e[a]) t++;
                else if (")" === e[a] && --t < 0) return a;
              return -1;
            })(t[2]);
            if (e > -1) {
              let a = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e;
              ((t[2] = t[2].substring(0, e)), (t[0] = t[0].substring(0, a).trim()), (t[3] = ""));
            }
          }
          let a = t[2],
            r = "";
          if (this.options.pedantic) {
            let e = this.rules.other.pedanticHrefTitle.exec(a);
            e && ((a = e[1]), (r = e[3]));
          } else r = t[3] ? t[3].slice(1, -1) : "";
          return (
            (a = a.trim()),
            this.rules.other.startAngleBracket.test(a) &&
              (a =
                this.options.pedantic && !this.rules.other.endAngleBracket.test(e)
                  ? a.slice(1)
                  : a.slice(1, -1)),
            rD(
              t,
              {
                href: a ? a.replace(this.rules.inline.anyPunctuation, "$1") : a,
                title: r ? r.replace(this.rules.inline.anyPunctuation, "$1") : r,
              },
              t[0],
              this.lexer,
              this.rules
            )
          );
        }
      }
      reflink(e, t) {
        let a;
        if ((a = this.rules.inline.reflink.exec(e)) || (a = this.rules.inline.nolink.exec(e))) {
          let e =
            t[(a[2] || a[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
          if (!e) {
            let e = a[0].charAt(0);
            return { type: "text", raw: e, text: e };
          }
          return rD(a, e, a[0], this.lexer, this.rules);
        }
      }
      emStrong(e, t, a = "") {
        let r = this.rules.inline.emStrongLDelim.exec(e);
        if (
          !(!r || (r[3] && a.match(this.rules.other.unicodeAlphaNumeric))) &&
          (!(r[1] || r[2]) || !a || this.rules.inline.punctuation.exec(a))
        ) {
          let a = [...r[0]].length - 1,
            n,
            i,
            o = a,
            s = 0,
            l =
              "*" === r[0][0]
                ? this.rules.inline.emStrongRDelimAst
                : this.rules.inline.emStrongRDelimUnd;
          for (l.lastIndex = 0, t = t.slice(-1 * e.length + a); null != (r = l.exec(t)); ) {
            if (!(n = r[1] || r[2] || r[3] || r[4] || r[5] || r[6])) continue;
            if (((i = [...n].length), r[3] || r[4])) {
              o += i;
              continue;
            }
            if ((r[5] || r[6]) && a % 3 && !((a + i) % 3)) {
              s += i;
              continue;
            }
            if ((o -= i) > 0) continue;
            i = Math.min(i, i + o + s);
            let t = [...r[0]][0].length,
              l = e.slice(0, a + r.index + t + i);
            if (Math.min(a, i) % 2) {
              let e = l.slice(1, -1);
              return { type: "em", raw: l, text: e, tokens: this.lexer.inlineTokens(e) };
            }
            let c = l.slice(2, -2);
            return { type: "strong", raw: l, text: c, tokens: this.lexer.inlineTokens(c) };
          }
        }
      }
      codespan(e) {
        let t = this.rules.inline.code.exec(e);
        if (t) {
          let e = t[2].replace(this.rules.other.newLineCharGlobal, " "),
            a = this.rules.other.nonSpaceChar.test(e),
            r =
              this.rules.other.startingSpaceChar.test(e) &&
              this.rules.other.endingSpaceChar.test(e);
          return (
            a && r && (e = e.substring(1, e.length - 1)),
            { type: "codespan", raw: t[0], text: e }
          );
        }
      }
      br(e) {
        let t = this.rules.inline.br.exec(e);
        if (t) return { type: "br", raw: t[0] };
      }
      del(e) {
        let t = this.rules.inline.del.exec(e);
        if (t) return { type: "del", raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2]) };
      }
      autolink(e) {
        let t = this.rules.inline.autolink.exec(e);
        if (t) {
          let e, a;
          return (
            (a = "@" === t[2] ? "mailto:" + (e = t[1]) : (e = t[1])),
            {
              type: "link",
              raw: t[0],
              text: e,
              href: a,
              tokens: [{ type: "text", raw: e, text: e }],
            }
          );
        }
      }
      url(e) {
        let t;
        if ((t = this.rules.inline.url.exec(e))) {
          let e, a;
          if ("@" === t[2]) a = "mailto:" + (e = t[0]);
          else {
            let r;
            do ((r = t[0]), (t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? ""));
            while (r !== t[0]);
            ((e = t[0]), (a = "www." === t[1] ? "http://" + t[0] : t[0]));
          }
          return {
            type: "link",
            raw: t[0],
            text: e,
            href: a,
            tokens: [{ type: "text", raw: e, text: e }],
          };
        }
      }
      inlineText(e) {
        let t = this.rules.inline.text.exec(e);
        if (t) {
          let e = this.lexer.state.inRawBlock;
          return { type: "text", raw: t[0], text: t[0], escaped: e };
        }
      }
    }
    class rR {
      tokens;
      options;
      state;
      tokenizer;
      inlineQueue;
      constructor(e) {
        ((this.tokens = []),
          (this.tokens.links = Object.create(null)),
          (this.options = e || aq),
          (this.options.tokenizer = this.options.tokenizer || new rL()),
          (this.tokenizer = this.options.tokenizer),
          (this.tokenizer.options = this.options),
          (this.tokenizer.lexer = this),
          (this.inlineQueue = []),
          (this.state = { inLink: !1, inRawBlock: !1, top: !0 }));
        const t = { other: aZ, block: rS.normal, inline: rT.normal };
        (this.options.pedantic
          ? ((t.block = rS.pedantic), (t.inline = rT.pedantic))
          : this.options.gfm &&
            ((t.block = rS.gfm),
            this.options.breaks ? (t.inline = rT.breaks) : (t.inline = rT.gfm)),
          (this.tokenizer.rules = t));
      }
      static get rules() {
        return { block: rS, inline: rT };
      }
      static lex(e, t) {
        return new rR(t).lex(e);
      }
      static lexInline(e, t) {
        return new rR(t).inlineTokens(e);
      }
      lex(e) {
        ((e = e.replace(aZ.carriageReturn, "\n")), this.blockTokens(e, this.tokens));
        for (let e = 0; e < this.inlineQueue.length; e++) {
          let t = this.inlineQueue[e];
          this.inlineTokens(t.src, t.tokens);
        }
        return ((this.inlineQueue = []), this.tokens);
      }
      blockTokens(e, t = [], a = !1) {
        for (
          this.options.pedantic &&
          (e = e.replace(aZ.tabCharGlobal, "    ").replace(aZ.spaceLine, ""));
          e;
        ) {
          let r;
          if (
            this.options.extensions?.block?.some(
              (a) =>
                !!(r = a.call({ lexer: this }, e, t)) &&
                ((e = e.substring(r.raw.length)), t.push(r), !0)
            )
          )
            continue;
          if ((r = this.tokenizer.space(e))) {
            e = e.substring(r.raw.length);
            let a = t.at(-1);
            1 === r.raw.length && void 0 !== a ? (a.raw += "\n") : t.push(r);
            continue;
          }
          if ((r = this.tokenizer.code(e))) {
            e = e.substring(r.raw.length);
            let a = t.at(-1);
            a?.type === "paragraph" || a?.type === "text"
              ? ((a.raw += "\n" + r.raw),
                (a.text += "\n" + r.text),
                (this.inlineQueue.at(-1).src = a.text))
              : t.push(r);
            continue;
          }
          if (
            (r = this.tokenizer.fences(e)) ||
            (r = this.tokenizer.heading(e)) ||
            (r = this.tokenizer.hr(e)) ||
            (r = this.tokenizer.blockquote(e)) ||
            (r = this.tokenizer.list(e)) ||
            (r = this.tokenizer.html(e))
          ) {
            ((e = e.substring(r.raw.length)), t.push(r));
            continue;
          }
          if ((r = this.tokenizer.def(e))) {
            e = e.substring(r.raw.length);
            let a = t.at(-1);
            a?.type === "paragraph" || a?.type === "text"
              ? ((a.raw += "\n" + r.raw),
                (a.text += "\n" + r.raw),
                (this.inlineQueue.at(-1).src = a.text))
              : this.tokens.links[r.tag] ||
                (this.tokens.links[r.tag] = { href: r.href, title: r.title });
            continue;
          }
          if ((r = this.tokenizer.table(e)) || (r = this.tokenizer.lheading(e))) {
            ((e = e.substring(r.raw.length)), t.push(r));
            continue;
          }
          let n = e;
          if (this.options.extensions?.startBlock) {
            let t,
              a = 1 / 0,
              r = e.slice(1);
            (this.options.extensions.startBlock.forEach((e) => {
              "number" == typeof (t = e.call({ lexer: this }, r)) && t >= 0 && (a = Math.min(a, t));
            }),
              a < 1 / 0 && a >= 0 && (n = e.substring(0, a + 1)));
          }
          if (this.state.top && (r = this.tokenizer.paragraph(n))) {
            let i = t.at(-1);
            (a && i?.type === "paragraph"
              ? ((i.raw += "\n" + r.raw),
                (i.text += "\n" + r.text),
                this.inlineQueue.pop(),
                (this.inlineQueue.at(-1).src = i.text))
              : t.push(r),
              (a = n.length !== e.length),
              (e = e.substring(r.raw.length)));
            continue;
          }
          if ((r = this.tokenizer.text(e))) {
            e = e.substring(r.raw.length);
            let a = t.at(-1);
            a?.type === "text"
              ? ((a.raw += "\n" + r.raw),
                (a.text += "\n" + r.text),
                this.inlineQueue.pop(),
                (this.inlineQueue.at(-1).src = a.text))
              : t.push(r);
            continue;
          }
          if (e) {
            let t = "Infinite loop on byte: " + e.charCodeAt(0);
            if (this.options.silent) {
              console.error(t);
              break;
            }
            throw Error(t);
          }
        }
        return ((this.state.top = !0), t);
      }
      inline(e, t = []) {
        return (this.inlineQueue.push({ src: e, tokens: t }), t);
      }
      inlineTokens(e, t = []) {
        let a = e,
          r = null;
        if (this.tokens.links) {
          let e = Object.keys(this.tokens.links);
          if (e.length > 0)
            for (; null != (r = this.tokenizer.rules.inline.reflinkSearch.exec(a)); )
              e.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) &&
                (a =
                  a.slice(0, r.index) +
                  "[" +
                  "a".repeat(r[0].length - 2) +
                  "]" +
                  a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
        }
        for (; null != (r = this.tokenizer.rules.inline.blockSkip.exec(a)); )
          a =
            a.slice(0, r.index) +
            "[" +
            "a".repeat(r[0].length - 2) +
            "]" +
            a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        for (; null != (r = this.tokenizer.rules.inline.anyPunctuation.exec(a)); )
          a =
            a.slice(0, r.index) +
            "++" +
            a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
        let n = !1,
          i = "";
        for (; e; ) {
          let r;
          if (
            (n || (i = ""),
            (n = !1),
            this.options.extensions?.inline?.some(
              (a) =>
                !!(r = a.call({ lexer: this }, e, t)) &&
                ((e = e.substring(r.raw.length)), t.push(r), !0)
            ))
          )
            continue;
          if (
            (r = this.tokenizer.escape(e)) ||
            (r = this.tokenizer.tag(e)) ||
            (r = this.tokenizer.link(e))
          ) {
            ((e = e.substring(r.raw.length)), t.push(r));
            continue;
          }
          if ((r = this.tokenizer.reflink(e, this.tokens.links))) {
            e = e.substring(r.raw.length);
            let a = t.at(-1);
            "text" === r.type && a?.type === "text"
              ? ((a.raw += r.raw), (a.text += r.text))
              : t.push(r);
            continue;
          }
          if (
            (r = this.tokenizer.emStrong(e, a, i)) ||
            (r = this.tokenizer.codespan(e)) ||
            (r = this.tokenizer.br(e)) ||
            (r = this.tokenizer.del(e)) ||
            (r = this.tokenizer.autolink(e)) ||
            (!this.state.inLink && (r = this.tokenizer.url(e)))
          ) {
            ((e = e.substring(r.raw.length)), t.push(r));
            continue;
          }
          let o = e;
          if (this.options.extensions?.startInline) {
            let t,
              a = 1 / 0,
              r = e.slice(1);
            (this.options.extensions.startInline.forEach((e) => {
              "number" == typeof (t = e.call({ lexer: this }, r)) && t >= 0 && (a = Math.min(a, t));
            }),
              a < 1 / 0 && a >= 0 && (o = e.substring(0, a + 1)));
          }
          if ((r = this.tokenizer.inlineText(o))) {
            ((e = e.substring(r.raw.length)),
              "_" !== r.raw.slice(-1) && (i = r.raw.slice(-1)),
              (n = !0));
            let a = t.at(-1);
            a?.type === "text" ? ((a.raw += r.raw), (a.text += r.text)) : t.push(r);
            continue;
          }
          if (e) {
            let t = "Infinite loop on byte: " + e.charCodeAt(0);
            if (this.options.silent) {
              console.error(t);
              break;
            }
            throw Error(t);
          }
        }
        return t;
      }
    }
    class rB {
      options;
      parser;
      constructor(e) {
        this.options = e || aq;
      }
      space(e) {
        return "";
      }
      code({ text: e, lang: t, escaped: a }) {
        let r = (t || "").match(aZ.notSpaceStart)?.[0],
          n = e.replace(aZ.endingNewline, "") + "\n";
        return r
          ? '<pre><code class="language-' + rE(r) + '">' + (a ? n : rE(n, !0)) + "</code></pre>\n"
          : "<pre><code>" + (a ? n : rE(n, !0)) + "</code></pre>\n";
      }
      blockquote({ tokens: e }) {
        let t = this.parser.parse(e);
        return `<blockquote>
${t}</blockquote>
`;
      }
      html({ text: e }) {
        return e;
      }
      heading({ tokens: e, depth: t }) {
        return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
      }
      hr(e) {
        return "<hr>\n";
      }
      list(e) {
        let t = e.ordered,
          a = e.start,
          r = "";
        for (let t = 0; t < e.items.length; t++) {
          let a = e.items[t];
          r += this.listitem(a);
        }
        let n = t ? "ol" : "ul";
        return "<" + n + (t && 1 !== a ? ' start="' + a + '"' : "") + ">\n" + r + "</" + n + ">\n";
      }
      listitem(e) {
        let t = "";
        if (e.task) {
          let a = this.checkbox({ checked: !!e.checked });
          e.loose
            ? e.tokens[0]?.type === "paragraph"
              ? ((e.tokens[0].text = a + " " + e.tokens[0].text),
                e.tokens[0].tokens &&
                  e.tokens[0].tokens.length > 0 &&
                  "text" === e.tokens[0].tokens[0].type &&
                  ((e.tokens[0].tokens[0].text = a + " " + rE(e.tokens[0].tokens[0].text)),
                  (e.tokens[0].tokens[0].escaped = !0)))
              : e.tokens.unshift({ type: "text", raw: a + " ", text: a + " ", escaped: !0 })
            : (t += a + " ");
        }
        return (
          (t += this.parser.parse(e.tokens, !!e.loose)),
          `<li>${t}</li>
`
        );
      }
      checkbox({ checked: e }) {
        return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
      }
      paragraph({ tokens: e }) {
        return `<p>${this.parser.parseInline(e)}</p>
`;
      }
      table(e) {
        let t = "",
          a = "";
        for (let t = 0; t < e.header.length; t++) a += this.tablecell(e.header[t]);
        t += this.tablerow({ text: a });
        let r = "";
        for (let t = 0; t < e.rows.length; t++) {
          let n = e.rows[t];
          a = "";
          for (let e = 0; e < n.length; e++) a += this.tablecell(n[e]);
          r += this.tablerow({ text: a });
        }
        return (
          r && (r = `<tbody>${r}</tbody>`),
          "<table>\n<thead>\n" + t + "</thead>\n" + r + "</table>\n"
        );
      }
      tablerow({ text: e }) {
        return `<tr>
${e}</tr>
`;
      }
      tablecell(e) {
        let t = this.parser.parseInline(e.tokens),
          a = e.header ? "th" : "td";
        return (
          (e.align ? `<${a} align="${e.align}">` : `<${a}>`) +
          t +
          `</${a}>
`
        );
      }
      strong({ tokens: e }) {
        return `<strong>${this.parser.parseInline(e)}</strong>`;
      }
      em({ tokens: e }) {
        return `<em>${this.parser.parseInline(e)}</em>`;
      }
      codespan({ text: e }) {
        return `<code>${rE(e, !0)}</code>`;
      }
      br(e) {
        return "<br>";
      }
      del({ tokens: e }) {
        return `<del>${this.parser.parseInline(e)}</del>`;
      }
      link({ href: e, title: t, tokens: a }) {
        let r = this.parser.parseInline(a),
          n = rI(e);
        if (null === n) return r;
        let i = '<a href="' + (e = n) + '"';
        return (t && (i += ' title="' + rE(t) + '"'), (i += ">" + r + "</a>"));
      }
      image({ href: e, title: t, text: a }) {
        let r = rI(e);
        if (null === r) return rE(a);
        e = r;
        let n = `<img src="${e}" alt="${a}"`;
        return (t && (n += ` title="${rE(t)}"`), (n += ">"));
      }
      text(e) {
        return "tokens" in e && e.tokens
          ? this.parser.parseInline(e.tokens)
          : "escaped" in e && e.escaped
            ? e.text
            : rE(e.text);
      }
    }
    class rP {
      strong({ text: e }) {
        return e;
      }
      em({ text: e }) {
        return e;
      }
      codespan({ text: e }) {
        return e;
      }
      del({ text: e }) {
        return e;
      }
      html({ text: e }) {
        return e;
      }
      text({ text: e }) {
        return e;
      }
      link({ text: e }) {
        return "" + e;
      }
      image({ text: e }) {
        return "" + e;
      }
      br() {
        return "";
      }
    }
    class rM {
      options;
      renderer;
      textRenderer;
      constructor(e) {
        ((this.options = e || aq),
          (this.options.renderer = this.options.renderer || new rB()),
          (this.renderer = this.options.renderer),
          (this.renderer.options = this.options),
          (this.renderer.parser = this),
          (this.textRenderer = new rP()));
      }
      static parse(e, t) {
        return new rM(t).parse(e);
      }
      static parseInline(e, t) {
        return new rM(t).parseInline(e);
      }
      parse(e, t = !0) {
        let a = "";
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          if (this.options.extensions?.renderers?.[n.type]) {
            let e = this.options.extensions.renderers[n.type].call({ parser: this }, n);
            if (
              !1 !== e ||
              ![
                "space",
                "hr",
                "heading",
                "code",
                "table",
                "blockquote",
                "list",
                "html",
                "paragraph",
                "text",
              ].includes(n.type)
            ) {
              a += e || "";
              continue;
            }
          }
          switch (n.type) {
            case "space":
              a += this.renderer.space(n);
              continue;
            case "hr":
              a += this.renderer.hr(n);
              continue;
            case "heading":
              a += this.renderer.heading(n);
              continue;
            case "code":
              a += this.renderer.code(n);
              continue;
            case "table":
              a += this.renderer.table(n);
              continue;
            case "blockquote":
              a += this.renderer.blockquote(n);
              continue;
            case "list":
              a += this.renderer.list(n);
              continue;
            case "html":
              a += this.renderer.html(n);
              continue;
            case "paragraph":
              a += this.renderer.paragraph(n);
              continue;
            case "text": {
              let i = n,
                o = this.renderer.text(i);
              for (; r + 1 < e.length && "text" === e[r + 1].type; )
                ((i = e[++r]), (o += "\n" + this.renderer.text(i)));
              t
                ? (a += this.renderer.paragraph({
                    type: "paragraph",
                    raw: o,
                    text: o,
                    tokens: [{ type: "text", raw: o, text: o, escaped: !0 }],
                  }))
                : (a += o);
              continue;
            }
            default: {
              let e = 'Token with "' + n.type + '" type was not found.';
              if (this.options.silent) return (console.error(e), "");
              throw Error(e);
            }
          }
        }
        return a;
      }
      parseInline(e, t = this.renderer) {
        let a = "";
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          if (this.options.extensions?.renderers?.[n.type]) {
            let e = this.options.extensions.renderers[n.type].call({ parser: this }, n);
            if (
              !1 !== e ||
              ![
                "escape",
                "html",
                "link",
                "image",
                "strong",
                "em",
                "codespan",
                "br",
                "del",
                "text",
              ].includes(n.type)
            ) {
              a += e || "";
              continue;
            }
          }
          switch (n.type) {
            case "escape":
            case "text":
              a += t.text(n);
              break;
            case "html":
              a += t.html(n);
              break;
            case "link":
              a += t.link(n);
              break;
            case "image":
              a += t.image(n);
              break;
            case "strong":
              a += t.strong(n);
              break;
            case "em":
              a += t.em(n);
              break;
            case "codespan":
              a += t.codespan(n);
              break;
            case "br":
              a += t.br(n);
              break;
            case "del":
              a += t.del(n);
              break;
            default: {
              let e = 'Token with "' + n.type + '" type was not found.';
              if (this.options.silent) return (console.error(e), "");
              throw Error(e);
            }
          }
        }
        return a;
      }
    }
    class rz {
      options;
      block;
      constructor(e) {
        this.options = e || aq;
      }
      static passThroughHooks = new Set(["preprocess", "postprocess", "processAllTokens"]);
      preprocess(e) {
        return e;
      }
      postprocess(e) {
        return e;
      }
      processAllTokens(e) {
        return e;
      }
      provideLexer() {
        return this.block ? rR.lex : rR.lexInline;
      }
      provideParser() {
        return this.block ? rM.parse : rM.parseInline;
      }
    }
    class rU {
      defaults = a$();
      options = this.setOptions;
      parse = this.parseMarkdown(!0);
      parseInline = this.parseMarkdown(!1);
      Parser = rM;
      Renderer = rB;
      TextRenderer = rP;
      Lexer = rR;
      Tokenizer = rL;
      Hooks = rz;
      constructor(...e) {
        this.use(...e);
      }
      walkTokens(e, t) {
        let a = [];
        for (let r of e)
          switch (((a = a.concat(t.call(this, r))), r.type)) {
            case "table":
              for (let e of r.header) a = a.concat(this.walkTokens(e.tokens, t));
              for (let e of r.rows) for (let r of e) a = a.concat(this.walkTokens(r.tokens, t));
              break;
            case "list":
              a = a.concat(this.walkTokens(r.items, t));
              break;
            default: {
              let e = r;
              this.defaults.extensions?.childTokens?.[e.type]
                ? this.defaults.extensions.childTokens[e.type].forEach((r) => {
                    let n = e[r].flat(1 / 0);
                    a = a.concat(this.walkTokens(n, t));
                  })
                : e.tokens && (a = a.concat(this.walkTokens(e.tokens, t)));
            }
          }
        return a;
      }
      use(...e) {
        let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
        return (
          e.forEach((e) => {
            let a = { ...e };
            if (
              ((a.async = this.defaults.async || a.async || !1),
              e.extensions &&
                (e.extensions.forEach((e) => {
                  if (!e.name) throw Error("extension name required");
                  if ("renderer" in e) {
                    let a = t.renderers[e.name];
                    a
                      ? (t.renderers[e.name] = function (...t) {
                          let r = e.renderer.apply(this, t);
                          return (!1 === r && (r = a.apply(this, t)), r);
                        })
                      : (t.renderers[e.name] = e.renderer);
                  }
                  if ("tokenizer" in e) {
                    if (!e.level || ("block" !== e.level && "inline" !== e.level))
                      throw Error("extension level must be 'block' or 'inline'");
                    let a = t[e.level];
                    (a ? a.unshift(e.tokenizer) : (t[e.level] = [e.tokenizer]),
                      e.start &&
                        ("block" === e.level
                          ? t.startBlock
                            ? t.startBlock.push(e.start)
                            : (t.startBlock = [e.start])
                          : "inline" === e.level &&
                            (t.startInline
                              ? t.startInline.push(e.start)
                              : (t.startInline = [e.start]))));
                  }
                  "childTokens" in e && e.childTokens && (t.childTokens[e.name] = e.childTokens);
                }),
                (a.extensions = t)),
              e.renderer)
            ) {
              let t = this.defaults.renderer || new rB(this.defaults);
              for (let a in e.renderer) {
                if (!(a in t)) throw Error(`renderer '${a}' does not exist`);
                if (["options", "parser"].includes(a)) continue;
                let r = e.renderer[a],
                  n = t[a];
                t[a] = (...e) => {
                  let a = r.apply(t, e);
                  return (!1 === a && (a = n.apply(t, e)), a || "");
                };
              }
              a.renderer = t;
            }
            if (e.tokenizer) {
              let t = this.defaults.tokenizer || new rL(this.defaults);
              for (let a in e.tokenizer) {
                if (!(a in t)) throw Error(`tokenizer '${a}' does not exist`);
                if (["options", "rules", "lexer"].includes(a)) continue;
                let r = e.tokenizer[a],
                  n = t[a];
                t[a] = (...e) => {
                  let a = r.apply(t, e);
                  return (!1 === a && (a = n.apply(t, e)), a);
                };
              }
              a.tokenizer = t;
            }
            if (e.hooks) {
              let t = this.defaults.hooks || new rz();
              for (let a in e.hooks) {
                if (!(a in t)) throw Error(`hook '${a}' does not exist`);
                if (["options", "block"].includes(a)) continue;
                let r = e.hooks[a],
                  n = t[a];
                rz.passThroughHooks.has(a)
                  ? (t[a] = (e) => {
                      if (this.defaults.async)
                        return Promise.resolve(r.call(t, e)).then((e) => n.call(t, e));
                      let a = r.call(t, e);
                      return n.call(t, a);
                    })
                  : (t[a] = (...e) => {
                      let a = r.apply(t, e);
                      return (!1 === a && (a = n.apply(t, e)), a);
                    });
              }
              a.hooks = t;
            }
            if (e.walkTokens) {
              let t = this.defaults.walkTokens,
                r = e.walkTokens;
              a.walkTokens = function (e) {
                let a = [];
                return (a.push(r.call(this, e)), t && (a = a.concat(t.call(this, e))), a);
              };
            }
            this.defaults = { ...this.defaults, ...a };
          }),
          this
        );
      }
      setOptions(e) {
        return ((this.defaults = { ...this.defaults, ...e }), this);
      }
      lexer(e, t) {
        return rR.lex(e, t ?? this.defaults);
      }
      parser(e, t) {
        return rM.parse(e, t ?? this.defaults);
      }
      parseMarkdown(e) {
        return (t, a) => {
          let r = { ...a },
            n = { ...this.defaults, ...r },
            i = this.onError(!!n.silent, !!n.async);
          if (!0 === this.defaults.async && !1 === r.async)
            return i(
              Error(
                "marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."
              )
            );
          if (null == t) return i(Error("marked(): input parameter is undefined or null"));
          if ("string" != typeof t)
            return i(
              Error(
                "marked(): input parameter is of type " +
                  Object.prototype.toString.call(t) +
                  ", string expected"
              )
            );
          n.hooks && ((n.hooks.options = n), (n.hooks.block = e));
          let o = n.hooks ? n.hooks.provideLexer() : e ? rR.lex : rR.lexInline,
            s = n.hooks ? n.hooks.provideParser() : e ? rM.parse : rM.parseInline;
          if (n.async)
            return Promise.resolve(n.hooks ? n.hooks.preprocess(t) : t)
              .then((e) => o(e, n))
              .then((e) => (n.hooks ? n.hooks.processAllTokens(e) : e))
              .then((e) =>
                n.walkTokens ? Promise.all(this.walkTokens(e, n.walkTokens)).then(() => e) : e
              )
              .then((e) => s(e, n))
              .then((e) => (n.hooks ? n.hooks.postprocess(e) : e))
              .catch(i);
          try {
            n.hooks && (t = n.hooks.preprocess(t));
            let e = o(t, n);
            (n.hooks && (e = n.hooks.processAllTokens(e)),
              n.walkTokens && this.walkTokens(e, n.walkTokens));
            let a = s(e, n);
            return (n.hooks && (a = n.hooks.postprocess(a)), a);
          } catch (e) {
            return i(e);
          }
        };
      }
      onError(e, t) {
        return (a) => {
          if (((a.message += "\nPlease report this to https://github.com/markedjs/marked."), e)) {
            let e = "<p>An error occurred:</p><pre>" + rE(a.message + "", !0) + "</pre>";
            return t ? Promise.resolve(e) : e;
          }
          if (t) return Promise.reject(a);
          throw a;
        };
      }
    }
    let rF = new rU();
    function rV(e, t) {
      return rF.parse(e, t);
    }
    function r$(e) {
      if (!e) return "";
      rV.use({ async: !1 });
      let t = rV.parse(e);
      return aV.default.sanitize(t);
    }
    ((rV.options = rV.setOptions =
      function (e) {
        return (rF.setOptions(e), (rV.defaults = rF.defaults), (aq = rV.defaults), rV);
      }),
      (rV.getDefaults = a$),
      (rV.defaults = aq),
      (rV.use = function (...e) {
        return (rF.use(...e), (rV.defaults = rF.defaults), (aq = rV.defaults), rV);
      }),
      (rV.walkTokens = function (e, t) {
        return rF.walkTokens(e, t);
      }),
      (rV.parseInline = rF.parseInline),
      (rV.Parser = rM),
      (rV.parser = rM.parse),
      (rV.Renderer = rB),
      (rV.TextRenderer = rP),
      (rV.Lexer = rR),
      (rV.lexer = rR.lex),
      (rV.Tokenizer = rL),
      (rV.Hooks = rz),
      (rV.parse = rV),
      rV.options,
      rV.setOptions,
      rV.use,
      rV.walkTokens,
      rV.parseInline,
      rM.parse,
      rR.lex);
    let rq = ["boolean", "radio"];
    var rW = e.i(615251);
    let rH = {
      name: {
        label: "Name",
        value: "name",
        isTextType: !0,
        systemOnly: !0,
        variantsConfig: {
          toggleLabel: 'Split "Full name" into "First name" and "Last name"',
          defaultVariant: "fullName",
          variants: {
            firstAndLastName: {
              label: "first_last_name",
              fieldsMap: {
                firstName: { defaultLabel: "first_name", canChangeRequirability: !1 },
                lastName: { defaultLabel: "last_name", canChangeRequirability: !0 },
              },
            },
            fullName: {
              label: "your_name",
              fieldsMap: {
                fullName: {
                  defaultLabel: "your_name",
                  defaultPlaceholder: "example_name",
                  canChangeRequirability: !1,
                },
              },
            },
          },
          defaultValue: {
            variants: {
              firstAndLastName: {
                fields: [
                  { name: "firstName", type: "text", required: !0 },
                  { name: "lastName", type: "text", required: !1 },
                ],
              },
              fullName: { fields: [{ name: "fullName", type: "text", label: "", required: !0 }] },
            },
          },
        },
      },
      email: { label: "Email", value: "email", isTextType: !0 },
      phone: { label: "Phone", value: "phone", isTextType: !0 },
      address: { label: "Address", value: "address", isTextType: !0 },
      text: { label: "Short Text", value: "text", isTextType: !0 },
      number: { label: "Number", value: "number", isTextType: !0, supportsPricing: !0 },
      textarea: {
        label: "Long Text",
        value: "textarea",
        isTextType: !0,
        supportsLengthCheck: { maxLength: 1e3 },
      },
      select: {
        label: "Select",
        value: "select",
        needsOptions: !0,
        isTextType: !0,
        optionsSupportPricing: !0,
      },
      multiselect: {
        label: "MultiSelect",
        value: "multiselect",
        needsOptions: !0,
        isTextType: !1,
        optionsSupportPricing: !0,
      },
      multiemail: { label: "Multiple Emails", value: "multiemail", isTextType: !0 },
      radioInput: { label: "Radio Input", value: "radioInput", isTextType: !1, systemOnly: !0 },
      checkbox: {
        label: "Checkbox Group",
        value: "checkbox",
        needsOptions: !0,
        isTextType: !1,
        optionsSupportPricing: !0,
      },
      radio: {
        label: "Radio Group",
        value: "radio",
        needsOptions: !0,
        isTextType: !1,
        optionsSupportPricing: !0,
      },
      boolean: { label: "Checkbox", value: "boolean", isTextType: !1, supportsPricing: !0 },
      url: { label: "URL", value: "url", isTextType: !0 },
    };
    Object.entries(rH).forEach(([e, t]) => {
      t.propsType = rW.propsTypes[e];
    });
    let rZ = et.z.enum([
        "name",
        "email",
        "location",
        "title",
        "notes",
        "guests",
        "rescheduleReason",
        "smsReminderNumber",
        "attendeePhoneNumber",
        "aiAgentCallPhoneNumber",
      ]),
      rY = {
        campfire: {
          name: "Campfire",
          description:
            "Feel connected with your remote team. Team events, new hire onboardings, coffee chats, all on Campfire. No more awkward Zoom calls.\r\r",
          type: "campfire_video",
          variant: "conferencing",
          slug: "campfire",
          categories: ["conferencing"],
          logo: "/app-store/campfire/icon.svg",
          publisher: "Cal.com, Inc.",
          url: "https://cal.com/",
          email: "help@cal.com",
          appData: {
            location: {
              type: "integrations:campfire_video",
              label: "Campfire",
              linkType: "static",
              urlRegExp: "^http(s)?:\\/\\/(www\\.)?party.campfire.to\\/[a-zA-Z0-9]*",
              organizerInputPlaceholder: "https://party.campfire.to/your-team",
            },
          },
          isOAuth: !1,
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "campfire",
          __template: "",
        },
        dailyvideo: {
          name: "Cal Video",
          description:
            "Cal Video is the in-house web-based video conferencing platform powered by Daily.co, which is minimalistic and lightweight, but has most of the features you need.",
          type: "daily_video",
          variant: "conferencing",
          url: "https://daily.co",
          categories: ["conferencing"],
          logo: "/app-store/dailyvideo/icon.svg",
          publisher: "Cal.com",
          category: "conferencing",
          slug: "daily-video",
          title: "Cal Video",
          isGlobal: !0,
          email: "help@cal.com",
          appData: {
            location: { linkType: "dynamic", type: "integrations:daily", label: "Cal Video" },
          },
          dirName: "dailyvideo",
          isOAuth: !1,
          __template: "",
        },
        databuddy: {
          name: "Databuddy",
          description:
            "Privacy-first web analytics for devs (Google Analytics alternative) — 3 KB, GDPR-compliant",
          type: "databuddy_analytics",
          variant: "analytics",
          slug: "databuddy",
          categories: ["analytics"],
          logo: "/app-store/databuddy/icon.svg",
          publisher: "Valentin Chmara",
          url: "https://github.com/vachmara",
          email: "valentinchmara@gmail.com",
          extendsFeature: "EventType",
          appData: {
            tag: {
              scripts: [
                {
                  src: "{DATABUDDY_SCRIPT_URL}",
                  attrs: { "data-client-id": "{CLIENT_ID}", "data-api-url": "{DATABUDDY_API_URL}" },
                },
              ],
            },
          },
          isOAuth: !1,
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "databuddy",
          __template: "",
        },
        demodesk: {
          name: "Demodesk",
          description:
            "Run Professional Video Meetings, Coach Sales Teams in Real-Time with AI, And Schedule Meetings on Auto-Pilot. 100% GDPR Compliant, Enterprise Ready.",
          type: "demodesk_conferencing",
          variant: "conferencing",
          slug: "demodesk",
          categories: ["conferencing"],
          logo: "/app-store/demodesk/icon.svg",
          publisher: "Cal.com, Inc.",
          url: "https://demodesk.com",
          email: "support@cal.com",
          appData: {
            location: {
              type: "integrations:demodesk_video",
              label: "Demodesk",
              linkType: "static",
              urlRegExp: "^http(s)?:\\/\\/(www\\.)?demodesk.com\\/[a-zA-Z0-9]*",
              organizerInputPlaceholder: "https://demodesk.com/meet/mylink",
            },
          },
          isTemplate: !1,
          __template: "event-type-location-video-static",
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "demodesk",
        },
        dialpad: {
          name: "dialpad",
          description: "A new way to meet, with built-in Ai",
          type: "dialpad_conferencing",
          variant: "conferencing",
          slug: "dialpad",
          categories: ["conferencing"],
          logo: "/app-store/dialpad/icon.svg",
          publisher: "Cal.com",
          url: "https://meetings.dialpad.com/",
          email: "help@cal.com",
          appData: {
            location: {
              type: "integrations:dialpad_video",
              label: "dialpad",
              linkType: "static",
              urlRegExp: "^https:\\/\\/meetings\\.dialpad\\.com\\/[a-zA-Z0-9]+$",
              organizerInputPlaceholder: "https://meetings.dialpad.com/adb2002",
            },
          },
          isTemplate: !1,
          __template: "event-type-location-video-static",
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "dialpad",
        },
        discord: {
          name: "Discord",
          description:
            "Copy your server invite link and start scheduling calls in Discord! Discord is a VoIP and instant messaging social platform. Users have the ability to communicate with voice calls, video calls, text messaging, media and files in private chats or as part of communities.",
          type: "discord_video",
          variant: "conferencing",
          slug: "discord",
          categories: ["conferencing"],
          logo: "/app-store/discord/icon.svg",
          publisher: "Cal.com, Inc.",
          url: "https://discord.com/",
          email: "support@cal.com",
          appData: {
            location: {
              type: "integrations:discord_video",
              label: "Discord",
              linkType: "static",
              urlRegExp: "^http(s)?:\\/\\/(www\\.)?discord\\.(gg|com)\\/[a-zA-Z0-9]+",
              organizerInputPlaceholder: "https://discord.gg/420gg69",
            },
          },
          isTemplate: !1,
          __template: "event-type-location-video-static",
          isOAuth: !1,
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "discord",
        },
        eightxeight: {
          name: "8x8",
          description:
            "The best video conferencing solution for businesses of any size. Fully secure, reliable, packed with features and ridiculously simple to use.\r\r",
          type: "eightxeight_video",
          variant: "conferencing",
          slug: "eightxeight",
          categories: ["conferencing"],
          logo: "/app-store/eightxeight/icon.svg",
          publisher: "Shivam Kalra",
          url: "https://github.com/shivamklr",
          email: "shivamkalra98@gmail.com",
          appData: {
            location: {
              type: "integrations:eightxeight_video",
              label: "8x8",
              linkType: "static",
              urlRegExp: "^(http|https)://(www\\.)?8x8.vc/[a-zA-Z0-9]*",
              organizerInputPlaceholder: "https://8x8.vc/company",
            },
          },
          dirName: "eightxeight",
          isTemplate: !1,
          __template: "event-type-location-video-static",
          isOAuth: !1,
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
        },
        "element-call": {
          name: "Element Call",
          description:
            'Element is an open-source communication platform that provides messaging, voice calling, and video conferencing capabilities. It is based on the Matrix protocol, which is a decentralized and federated messaging protocol designed to enable secure and interoperable communication across different platforms and services."',
          type: "element-call_conferencing",
          variant: "conferencing",
          slug: "element-call",
          categories: ["conferencing"],
          logo: "/app-store/element-call/icon.svg",
          publisher: "Suyash Srivastava",
          url: "https://github.com/suyash5053/",
          email: "suyashsrivastava5053@gmail.com",
          appData: {
            location: {
              type: "integrations:element-call_video",
              label: "Element Call",
              linkType: "static",
              urlRegExp: "^http(s)?:\\/\\/(www\\.)?call.element.io/[a-zA-Z0-9]*",
              organizerInputPlaceholder: "https://call.element.io/",
            },
          },
          dirName: "element-call",
          isTemplate: !1,
          __template: "event-type-location-video-static",
          isOAuth: !1,
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
        },
        facetime: {
          name: "Facetime",
          description:
            "Facetime makes it super simple for collaborating teams to jump on a video call.",
          type: "facetime_video",
          variant: "conferencing",
          slug: "facetime",
          categories: ["conferencing"],
          logo: "/app-store/facetime/icon.svg",
          publisher: "Lucas Smith",
          url: "https://github.com/Mythie",
          email: "help@cal.com",
          title: "Facetime",
          appData: {
            location: {
              type: "integrations:facetime_video",
              label: "Facetime",
              linkType: "static",
              urlRegExp: "^https?:\\/\\/facetime\\.apple\\.com\\/join.+$",
              organizerInputPlaceholder:
                "https://facetime.apple.com/join... link copied from the FaceTime app",
            },
          },
          isTemplate: !1,
          isOAuth: !1,
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "facetime",
          __template: "",
        },
        fathom: {
          name: "Fathom",
          description:
            "Fathom Analytics provides simple, privacy-focused website analytics. We're a GDPR-compliant, Google Analytics alternative.",
          type: "fathom_analytics",
          variant: "analytics",
          slug: "fathom",
          categories: ["analytics"],
          logo: "/app-store/fathom/icon.svg",
          publisher: "Cal.com, Inc.",
          url: "https://cal.com",
          email: "help@cal.com",
          extendsFeature: "EventType",
          appData: {
            tag: {
              scripts: [
                {
                  src: "https://cdn.usefathom.com/script.js",
                  attrs: { "data-site": "{TRACKING_ID}" },
                },
              ],
            },
          },
          isOAuth: !1,
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "fathom",
          __template: "",
        },
        ga4: {
          name: "Google Analytics",
          description:
            "Google Analytics is a web analytics service offered by Google that tracks and reports website traffic, currently as a platform inside the Google Marketing Platform brand.",
          type: "ga4_analytics",
          variant: "analytics",
          slug: "ga4",
          categories: ["analytics"],
          logo: "/app-store/ga4/icon.svg",
          publisher: "Cal.com, Inc.",
          url: "https://marketingplatform.google.com",
          email: "support@cal.com",
          extendsFeature: "EventType",
          appData: {
            tag: {
              scripts: [
                { src: "https://www.googletagmanager.com/gtag/js?id={TRACKING_ID}", attrs: {} },
                {
                  content:
                    "window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag('js', new Date());\n      gtag('config', '{TRACKING_ID}', {'cookie_flags': 'SameSite=None;Secure'});",
                },
              ],
            },
          },
          isOAuth: !1,
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "ga4",
          __template: "",
        },
        googlevideo: {
          name: "Google Meet",
          description:
            "Google Meet is Google's web-based video conferencing platform, designed to compete with major conferencing platforms.",
          slug: "google-meet",
          category: "conferencing",
          categories: ["conferencing"],
          type: "google_video",
          title: "Google Meet",
          variant: "conferencing",
          logo: "/app-store/googlevideo/logo.webp",
          publisher: "Cal.com",
          url: "https://cal.com/",
          isGlobal: !1,
          email: "help@cal.com",
          appData: {
            location: {
              linkType: "dynamic",
              type: "integrations:google:meet",
              label: "Google Meet",
            },
          },
          dirName: "googlevideo",
          dependencies: ["google-calendar"],
          isOAuth: !1,
          __template: "",
        },
        gtm: {
          name: "Google Tag Manager",
          description: "App to install Google Tag Manager",
          type: "gtm_analytics",
          variant: "analytics",
          slug: "gtm",
          categories: ["analytics"],
          logo: "/app-store/gtm/icon.svg",
          publisher: "Black Lemon",
          url: "https://tagmanager.google.com",
          email: "support@blacklemon.dk",
          extendsFeature: "EventType",
          appData: {
            tag: {
              scripts: [
                {
                  content:
                    "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','{TRACKING_ID}');",
                },
              ],
              pushEventScript: {
                content:
                  "function $pushEvent(event) {window.dataLayer.push({ event: event.name, ...event.data })}",
              },
            },
          },
          isTemplate: !1,
          __template: "booking-pages-tag",
          isOAuth: !1,
          __createdUsingCli: !0,
          dirName: "gtm",
        },
        "horizon-workrooms": {
          name: "Horizon Workrooms",
          description:
            "Workrooms is an immersive virtual space, where you and your team can work better together, from anywhere",
          type: "horizon-workrooms_conferencing",
          variant: "conferencing",
          slug: "horizon-workrooms",
          categories: ["conferencing"],
          logo: "/app-store/horizon-workrooms/icon.svg",
          publisher: "Cal.com, Inc",
          url: "https://forwork.meta.com/de/en/horizon-workrooms/",
          email: "support@cal.com",
          appData: {
            location: {
              type: "integrations:horizon-workrooms_video",
              label: "Horizon Workrooms",
              linkType: "static",
              urlRegExp: "^http(s)?:\\/\\/(www\\.)?workrooms.workplace.com\\/[a-zA-Z0-9]*",
              organizerInputPlaceholder:
                "https://workrooms.workplace.com/groupcall/LINK:uALeBBTZbdBowT",
            },
          },
          isTemplate: !1,
          __template: "event-type-location-video-static",
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "horizon-workrooms",
        },
        huddle01video: {
          name: "Huddle01",
          description:
            "Huddle01 is a new video conferencing software native to Web3 and is comparable to a decentralized version of Zoom. It supports conversations for NFT communities, DAOs, Builders and also has features such as token gating, NFTs as avatars, Web3 Login + ENS and recording over IPFS.",
          type: "huddle01_video",
          variant: "conferencing",
          categories: ["video", "conferencing"],
          logo: "/app-store/huddle01video/icon.svg",
          publisher: "huddle01.com",
          url: "https://huddle01.com",
          category: "conferencing",
          slug: "huddle01",
          title: "Huddle01",
          isGlobal: !1,
          email: "support@huddle01.com",
          appData: {
            location: {
              linkType: "dynamic",
              type: "integrations:huddle01_video",
              label: "Huddle01 Video",
            },
          },
          dirName: "huddle01video",
          concurrentMeetings: !0,
          isOAuth: !1,
          __template: "",
        },
        insihts: {
          name: "Insihts",
          description:
            "Insihts is an all-in-one platform for businesses looking to track user behavior, optimize workflows, and make data-driven decisions. Whether you are a marketer, product manager, or part of a customer success team, Insihts provides the tools you need to succeed.",
          type: "insihts_analytics",
          variant: "analytics",
          slug: "insihts",
          categories: ["analytics"],
          logo: "/app-store/insihts/icon.svg",
          publisher: "Cal.com, Inc.",
          url: "https://cal.com/",
          email: "help@cal.com",
          extendsFeature: "EventType",
          appData: {
            tag: {
              scripts: [
                {
                  src: "https://collector.insihts.com/script.js",
                  attrs: { "data-website-id": "{SITE_ID}" },
                },
              ],
            },
          },
          isTemplate: !1,
          __template: "booking-pages-tag",
          __createdUsingCli: !0,
          dirName: "insihts",
        },
        jelly: {
          name: "Jelly",
          description:
            "JellyPhone is a video calling tool with a stacked rolodex. You can cut short podcasts for Tik Tok and Instagram and publish in seconds. Connect with amazing people.",
          type: "jelly_conferencing",
          variant: "conferencing",
          slug: "jelly",
          categories: ["conferencing"],
          logo: "/app-store/jelly/icon.svg",
          publisher: "Jelly",
          url: "https://jellyjelly.com",
          email: "support@jellyjelly.com",
          appData: {
            location: {
              type: "integrations:jelly_conferencing",
              label: "Jelly",
              linkType: "dynamic",
            },
          },
          isTemplate: !1,
          __template: "event-type-location-video-static",
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "jelly",
        },
        jitsivideo: {
          name: "Jitsi Video",
          description:
            "Jitsi is a free open-source video conferencing software for web and mobile. Make a call, launch on your own servers, integrate into your app, and more.",
          type: "jitsi_video",
          variant: "conferencing",
          categories: ["conferencing"],
          logo: "/app-store/jitsivideo/icon.svg",
          publisher: "Cal.com",
          url: "https://jitsi.org/",
          slug: "jitsi",
          title: "Jitsi Meet",
          isGlobal: !1,
          email: "help@cal.com",
          appData: {
            location: { linkType: "dynamic", type: "integrations:jitsi", label: "Jitsi Video" },
          },
          dirName: "jitsivideo",
          concurrentMeetings: !0,
          isOAuth: !1,
          __template: "",
        },
        lyra: {
          name: "Lyra",
          description: "The meeting platform built for pros.",
          type: "lyra_video",
          variant: "conferencing",
          slug: "lyra",
          categories: ["conferencing"],
          logo: "/app-store/lyra/icon.svg",
          publisher: "Lyra",
          url: "https://lyra.so/",
          email: "support@lyra.so",
          title: "Lyra",
          appData: {
            location: { type: "integrations:lyra", label: "Lyra Meeting", linkType: "dynamic" },
          },
          isOAuth: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "lyra",
          __template: "",
        },
        matomo: {
          name: "Matomo",
          description:
            "Google Analytics alternative that protects your data and your customers' privacy",
          type: "matomo_analytics",
          variant: "analytics",
          slug: "matomo",
          categories: ["analytics"],
          logo: "/app-store/matomo/icon.svg",
          publisher: "Cal.com, Inc.",
          url: "https://cal.com/",
          email: "help@cal.com",
          extendsFeature: "EventType",
          appData: {
            tag: {
              scripts: [
                { src: "{MATOMO_URL}/matomo.js", attrs: {} },
                {
                  content:
                    "var _paq = window._paq || [];\n      _paq.push(['trackPageView']);\n      _paq.push(['enableLinkTracking']);\n      (function() {\n        var u='{MATOMO_URL}/';  \n        _paq.push(['setTrackerUrl', u+'matomo.php']);\n        _paq.push(['setSiteId', '{SITE_ID}']);  \n        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];\n        g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);\n      })();",
                },
              ],
            },
          },
          isTemplate: !1,
          __template: "booking-pages-tag",
          __createdUsingCli: !0,
          dirName: "matomo",
        },
        metapixel: {
          name: "Meta Pixel",
          description:
            "Add Meta Pixel to your bookings page to measure, optimize and build audiences for your ad campaigns.",
          type: "metapixel_analytics",
          variant: "analytics",
          slug: "metapixel",
          categories: ["analytics"],
          logo: "/app-store/metapixel/icon.svg",
          publisher: "Regina Liu",
          url: "https://github.com/regexyl",
          email: "info@regexyl.com",
          extendsFeature: "EventType",
          appData: {
            tag: {
              scripts: [
                {
                  content:
                    "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=new Array();t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e).item(0);s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','{TRACKING_ID}');(function(){window.calMetaCheck=function(u){var url=(typeof u==='string')?u:window.location.href;if(url.indexOf('/booking/')>-1&&url.indexOf('cancel=true')===-1){if(!window.meta_fired){fbq('track','{TRACKING_EVENT}');window.meta_fired=true;}}else{window.meta_fired=false;fbq('track','PageView');fbq('trackCustom','CalcomView');}};if(!history.__cal_meta_pixel_original_push){history.__cal_meta_pixel_original_push=history.pushState;history.pushState=function(s,t,u){history.__cal_meta_pixel_original_push.apply(history,arguments);window.calMetaCheck(u);};}if(!history.__cal_meta_pixel_original_replace){history.__cal_meta_pixel_original_replace=history.replaceState;history.replaceState=function(s,t,u){history.__cal_meta_pixel_original_replace.apply(history,arguments);window.calMetaCheck(u);};}if(!window.__cal_meta_pixel_popstate_added){window.__cal_meta_pixel_popstate_added=true;window.addEventListener('popstate',function(){window.calMetaCheck();});}window.calMetaCheck();})();",
                },
              ],
            },
          },
          isTemplate: !1,
          __template: "event-type-app-card",
          isOAuth: !1,
          __createdUsingCli: !0,
          dirName: "metapixel",
        },
        mirotalk: {
          name: "Mirotalk",
          description:
            "Peer to peer real-time video conferences, optimized for small groups. Unlimited time, unlimited rooms each having 5-8 participants.",
          type: "mirotalk_video",
          variant: "conferencing",
          slug: "mirotalk",
          categories: ["conferencing"],
          logo: "/app-store/mirotalk/icon.svg",
          publisher: "Cal.com, Inc.",
          url: "https://cal.com/",
          email: "support@cal.com",
          appData: {
            location: {
              type: "integrations:mirotalk_video",
              label: "Mirotalk",
              linkType: "static",
              urlRegExp: "^(http|https):\\/\\/(p2p|sfu)\\.mirotalk\\.com\\/join\\/[a-zA-Z0-9._-]+$",
              organizerInputPlaceholder: "https://p2p.mirotalk.com/join/80085ShinyPhone",
            },
          },
          dirName: "mirotalk",
          isTemplate: !1,
          __template: "event-type-location-video-static",
          isOAuth: !1,
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
        },
        nextcloudtalk: {
          name: "Nextcloud Talk",
          description:
            "Nextcloud Talk is a fully self hosted, on-premises audio/video and chat communication service. It features web and mobile apps and is designed to offer the highest degree of security while being easy to use.",
          type: "nextcloudtalk_video",
          variant: "conferencing",
          slug: "nextcloudtalk",
          categories: ["conferencing"],
          logo: "/app-store/nextcloudtalk/icon.svg",
          publisher: "Cal.com",
          url: "https://nextcloud.com/talk",
          email: "help@cal.com",
          appData: {
            location: {
              type: "integrations:nextcloudtalk_conferencing",
              label: "Nextcloud Talk",
              linkType: "dynamic",
            },
          },
          isTemplate: !1,
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "nextcloudtalk",
          __template: "",
        },
        office365video: {
          name: "Microsoft 365/Teams (Requires work/school account)",
          description:
            "Microsoft Teams is a business communication platform and collaborative workspace included in Microsoft 365. It offers workspace chat and video conferencing, file storage, and application integration. Both web versions and desktop/mobile applications are available. NOTE: MUST HAVE A WORK / SCHOOL ACCOUNT",
          type: "office365_video",
          variant: "conferencing",
          slug: "msteams",
          categories: ["conferencing"],
          logo: "/app-store/office365video/icon.svg",
          publisher: "Cal.com",
          url: "https://www.microsoft.com/en-ca/microsoft-teams/group-chat-software",
          email: "help@cal.com",
          title: "MS Teams (Requires work/school account)",
          verified: !0,
          trending: !0,
          rating: 4.3,
          reviews: 69,
          appData: {
            location: {
              type: "integrations:office365_video",
              label: "MS Teams",
              linkType: "dynamic",
            },
          },
          dirName: "office365video",
          concurrentMeetings: !0,
          isOAuth: !0,
          __template: "",
        },
        ping: {
          name: "Ping.gg",
          description:
            "Ping.gg makes high quality video collaborations easier than ever. Think 'Zoom for streamers and creators'. Join a call in 3 clicks, manage audio and video like a pro, and copy-paste your guests straight into OBS",
          type: "ping_video",
          variant: "conferencing",
          slug: "ping",
          categories: ["conferencing"],
          logo: "/app-store/ping/icon.svg",
          publisher: "Ping.gg",
          url: "https://ping.gg",
          email: "support@ping.gg",
          title: "Ping.gg",
          appData: {
            location: {
              type: "integrations:ping_video",
              label: "Ping.gg",
              linkType: "static",
              urlRegExp: "^http(s)?:\\/\\/(www\\.)?ping.gg\\/call\\/[a-zA-Z0-9]*",
              organizerInputPlaceholder: "https://www.ping.gg/call/theo",
            },
          },
          isOAuth: !1,
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "ping",
          __template: "",
        },
        plausible: {
          name: "Plausible",
          description: "Simple, privacy-friendly Google Analytics alternative.",
          type: "plausible_analytics",
          variant: "analytics",
          slug: "plausible",
          categories: ["analytics"],
          logo: "/app-store/plausible/icon.svg",
          publisher: "Cal.com, Inc.",
          url: "https://cal.com/",
          email: "help@cal.com",
          extendsFeature: "EventType",
          appData: {
            tag: {
              scripts: [{ src: "{PLAUSIBLE_URL}", attrs: { "data-domain": "{TRACKING_ID}" } }],
            },
          },
          isOAuth: !1,
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "plausible",
          __template: "",
        },
        posthog: {
          name: "Posthog",
          description:
            "PostHog is the all-in-one platform for building better products - with product analytics, feature flags, session recordings, a/b testing, heatmaps, and more.",
          type: "posthog_analytics",
          variant: "analytics",
          slug: "posthog",
          categories: ["analytics"],
          logo: "/app-store/posthog/icon.svg",
          publisher: "Cal.com, Inc.",
          url: "https://posthog.com",
          email: "help@cal.com",
          extendsFeature: "EventType",
          appData: {
            tag: {
              scripts: [
                {
                  content:
                    "!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split('.');2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement('script')).type='text/javascript',p.async=!0,p.src=s.api_host.replace('.i.posthog.com','-assets.i.posthog.com')+'/static/array.js',(r=t.getElementsByTagName('script')[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a='posthog',u.people=u.people||[],u.toString=function(t){var e='posthog';return'posthog'!==a&&(e+='.'+a),t||(e+=' (stub)'),e},u.people.toString=function(){return u.toString(1)+'.people (stub)'},o='capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId'.split(' '),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);posthog.init('{TRACKING_ID}',{api_host:'{API_HOST}'})",
                },
              ],
            },
          },
          isTemplate: !1,
          __template: "booking-pages-tag",
          __createdUsingCli: !0,
          dirName: "posthog",
        },
        riverside: {
          name: "Riverside",
          description:
            "Your online recording studio. The easiest way to record podcasts and videos in studio quality from anywhere. All from the browser.",
          type: "riverside_video",
          variant: "conferencing",
          slug: "riverside",
          categories: ["conferencing"],
          logo: "/app-store/riverside/icon-dark.svg",
          publisher: "Cal.com, Inc.",
          url: "https://cal.com/",
          email: "help@cal.com",
          appData: {
            location: {
              type: "integrations:riverside_video",
              label: "Riverside Video",
              linkType: "static",
              urlRegExp: "^https?:\\/\\/(www\\.)?riverside\\.(fm|com)\\/studio\\/.+",
            },
          },
          isOAuth: !1,
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "riverside",
          __template: "",
        },
        roam: {
          name: "Roam",
          description: "Roam is Your Whole Company in one HQ\r",
          type: "roam_conferencing",
          variant: "conferencing",
          slug: "roam",
          categories: ["conferencing"],
          logo: "/app-store/roam/icon.png",
          publisher: "Roam HQ, Inc.",
          url: "https://ro.am",
          email: "support@ro.am",
          appData: {
            location: {
              type: "integrations:roam_video",
              label: "Roam",
              linkType: "static",
              urlRegExp: "^http(s)?:\\/\\/(www\\.)?ro.am\\/[a-zA-Z0-9]*",
              organizerInputPlaceholder:
                "https://ro.am/r/#/p/yHwFBQrRTMuptqKYo_wu8A/huzRiHnR-np4RGYKV-c0pQ",
            },
          },
          isTemplate: !1,
          __template: "event-type-location-video-static",
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "roam",
        },
        salesroom: {
          name: "Salesroom",
          description: "Unlock real-time AI and take your sales game to the next level",
          type: "salesroom_conferencing",
          variant: "conferencing",
          slug: "salesroom",
          categories: ["conferencing"],
          logo: "/app-store/salesroom/icon.svg",
          publisher: "Cal.com, Inc.",
          url: "https://salesroom.com/",
          email: "support@cal.com",
          appData: {
            location: {
              type: "integrations:salesroom_video",
              label: "Salesroom",
              linkType: "static",
              urlRegExp: "^https:\\/\\/.+\\.sr\\.chat",
              organizerInputPlaceholder: "https://user.sr.chat",
            },
          },
          isTemplate: !1,
          __template: "event-type-location-video-static",
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "salesroom",
        },
        shimmervideo: {
          name: "Shimmer Video",
          description:
            "The #1 Expert ADHD Coach. Weekly calls and in-app support so that you can reach your full potential",
          type: "shimmer_video",
          variant: "conferencing",
          slug: "shimmervideo",
          categories: ["conferencing"],
          logo: "/app-store/shimmervideo/icon.png",
          publisher: "Shimmer.care",
          url: "https://shimmer.care",
          email: "support@shimmer.care",
          appData: {
            location: {
              type: "integrations:shimmer_video",
              label: "Shimmer Video",
              linkType: "dynamic",
            },
          },
          isTemplate: !1,
          __template: "basic",
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "shimmervideo",
        },
        signal: {
          name: "Signal",
          description: "Schedule a chat with your guests or have a Signal Video call.",
          type: "signal_video",
          variant: "messaging",
          slug: "signal",
          categories: ["messaging"],
          logo: "/app-store/signal/icon.svg",
          publisher: "Cal.com, Inc.",
          url: "https://cal.com/",
          email: "support@cal.com",
          appData: {
            location: {
              type: "integrations:signal_video",
              label: "Signal",
              linkType: "static",
              urlRegExp: "^http(s)?:\\/\\/(www\\.)?signal.me\\/[a-zA-Z0-9]*",
              organizerInputPlaceholder: "https://signal.me/#p/+11234567890",
            },
          },
          isOAuth: !1,
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "signal",
          __template: "",
        },
        sirius_video: {
          name: "Sirius Video",
          description:
            "Video meetings made for music.\rCreate your own virtual music classroom, easily.",
          type: "sirius_video_video",
          variant: "conferencing",
          slug: "sirius_video",
          categories: ["conferencing"],
          logo: "/app-store/sirius_video/icon-dark.svg",
          publisher: "Cal.com, Inc.",
          url: "https://cal.com/",
          email: "support@cal.com",
          appData: {
            location: {
              type: "integrations:sirius_video_video",
              label: "Sirius Video",
              linkType: "static",
              urlRegExp: "^http(s)?:\\/\\/(www\\.)?sirius.video\\/[a-zA-Z0-9]*",
              organizerInputPlaceholder: "https://sirius.video/sebastian",
            },
          },
          isOAuth: !1,
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "sirius_video",
          __template: "",
        },
        skype: {
          name: "Skype",
          description:
            "Skype is for connecting with the people that matter most in your life and work. It's built for both one-on-one and group conversations and works wherever you are – via mobile, PC and Alexa. Skype messaging and HD voice and video calling will help you share experiences and get things done with others.",
          type: "skype_conferencing",
          variant: "conferencing",
          slug: "skype",
          categories: ["conferencing"],
          logo: "/app-store/skype/icon.svg",
          publisher: "Anik Dhabal Babu",
          url: "https://github.com/anikdhabal/",
          email: "adhabl2002@gmail.com",
          appData: {
            location: {
              type: "integrations:skype_video",
              label: "Skype",
              linkType: "static",
              urlRegExp: "https://join\\.skype\\.com/[a-zA-Z0-9]*",
              organizerInputPlaceholder: "https://join.skype.com/",
            },
          },
          isTemplate: !1,
          __template: "event-type-location-video-static",
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "skype",
        },
        sylapsvideo: {
          name: "Sylaps",
          description:
            "Free Audio and Video Conferencing, Online Collaboration, Screen Sharing on web browser, mobile and desktop.",
          type: "sylaps_video",
          variant: "conferencing",
          slug: "sylapsvideo",
          categories: ["conferencing"],
          logo: "/app-store/sylapsvideo/icon.svg",
          publisher: "Sylaps Inc",
          url: "https://sylaps.com",
          email: "support@sylaps.com",
          title: "Sylaps",
          appData: {
            location: { type: "integrations:sylaps_video", label: "Sylaps", linkType: "dynamic" },
          },
          isOAuth: !1,
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "sylapsvideo",
          __template: "",
        },
        tandemvideo: {
          name: "Tandem Video",
          description:
            "Tandem is a new virtual office space that allows teams to effortlessly connect as though they are in a physical office, online. Through co-working rooms, available statuses, live real-time video call, and chat options, you can see who's around, talk and collaborate in one click. It works cross-platform with both desktop and mobile versions.",
          type: "tandem_video",
          title: "Tandem Video",
          variant: "conferencing",
          categories: ["conferencing"],
          slug: "tandem",
          category: "conferencing",
          logo: "/app-store/tandemvideo/icon.svg",
          publisher: "",
          url: "",
          isGlobal: !1,
          email: "help@cal.com",
          appData: {
            location: { linkType: "dynamic", type: "integrations:tandem", label: "Tandem Video" },
          },
          dirName: "tandemvideo",
          isOAuth: !0,
          __template: "",
        },
        telegram: {
          name: "Telegram",
          description: "Schedule a chat with your guests or have a Telegram Video call.",
          type: "telegram_video",
          variant: "messaging",
          slug: "telegram",
          categories: ["messaging"],
          logo: "/app-store/telegram/icon.svg",
          publisher: "Cal.com, Inc.",
          url: "https://cal.com/",
          email: "support@cal.com",
          appData: {
            location: {
              type: "integrations:telegram_video",
              label: "Telegram",
              linkType: "static",
              urlRegExp: "^http(s)?:\\/\\/(www\\.)?t.me\\/[a-zA-Z0-9]*",
              organizerInputPlaceholder: "https://t.me/MyUsername",
            },
          },
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "telegram",
          __template: "",
        },
        twipla: {
          name: "Twipla",
          description:
            "Twipla.com, formerly known as Visitor Analytics, is a website intelligence platform that helps you understand how visitors interact with your website.",
          type: "twipla_analytics",
          variant: "analytics",
          slug: "twipla",
          categories: ["analytics"],
          logo: "/app-store/twipla/icon.svg",
          publisher: "Cal.com, Inc.",
          url: "https://cal.com/",
          email: "help@cal.com",
          extendsFeature: "EventType",
          appData: {
            tag: {
              scripts: [
                {
                  content:
                    "(function(v, i, s, a, t) {\n  v[t] = v[t] || function() {\n    (v[t].v = v[t].v || []).push(arguments);\n  };\n  if (!v._visaSettings) {\n    v._visaSettings = {};\n  }\n  v._visaSettings[a] = {\n    v: '1.0',\n    s: a,\n    a: '1',\n    t: t\n  };\n  var b = i.getElementsByTagName('body')[0];\n  var p = i.createElement('script');\n  p.defer = 1;\n  p.async = 1;\n  p.src = s + '?s=' + a;\n  b.appendChild(p);\n})(window, document, '//app-worker.visitor-analytics.io/main.js', '{SITE_ID}', 'va');",
                },
              ],
            },
          },
          isTemplate: !1,
          __template: "booking-pages-tag",
          __createdUsingCli: !0,
          dirName: "twipla",
        },
        umami: {
          name: "Umami",
          description:
            "Umami makes it easy to collect, analyze, and understand your web data — while maintaining visitor privacy and data ownership.",
          type: "umami_analytics",
          variant: "analytics",
          slug: "umami",
          categories: ["analytics"],
          logo: "/app-store/umami/icon.svg",
          publisher: "Cal.com, Inc.",
          url: "https://cal.com/",
          email: "help@cal.com",
          extendsFeature: "EventType",
          appData: {
            tag: { scripts: [{ src: "{SCRIPT_URL}", attrs: { "data-website-id": "{SITE_ID}" } }] },
          },
          isTemplate: !1,
          __template: "booking-pages-tag",
          __createdUsingCli: !0,
          dirName: "umami",
        },
        webex: {
          name: "Webex",
          description: "Create meetings with Cisco Webex",
          type: "webex_video",
          variant: "conferencing",
          slug: "webex",
          categories: ["conferencing"],
          logo: "/app-store/webex//icon.ico",
          publisher: "aar2dee2",
          url: "https://github.com/aar2dee2",
          email: "support@cal.com",
          title: "Webex",
          appData: {
            location: { type: "integrations:webex_video", label: "Webex", linkType: "dynamic" },
          },
          isTemplate: !1,
          __template: "basic",
          concurrentMeetings: !0,
          isAuth: !0,
          __createdUsingCli: !0,
          imageSrc: "/icon.ico",
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "webex",
        },
        whatsapp: {
          name: "WhatsApp",
          description: "Schedule a chat with your guests or have a WhatsApp Video call.",
          type: "whatsapp_video",
          variant: "messaging",
          slug: "whatsapp",
          categories: ["messaging"],
          logo: "/app-store/whatsapp/icon.svg",
          publisher: "Cal.com, Inc.",
          url: "https://cal.com/",
          email: "support@cal.com",
          appData: {
            location: {
              type: "integrations:whatsapp_video",
              label: "WhatsApp",
              linkType: "static",
              urlRegExp: "^http(s)?:\\/\\/(www\\.)?wa.me\\/[a-zA-Z0-9]*",
              organizerInputPlaceholder: "https://wa.me/send?phone=1234567890",
            },
          },
          isAuth: !1,
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "whatsapp",
          __template: "",
        },
        whereby: {
          name: "Whereby",
          description:
            "Whereby makes it super simple for collaborating teams to jump on a video call.",
          type: "whereby_video",
          variant: "conferencing",
          slug: "whereby",
          categories: ["conferencing"],
          logo: "/app-store/whereby/icon-dark.svg",
          publisher: "Cal.com, Inc.",
          url: "https://cal.com/",
          email: "help@cal.com",
          title: "Whereby",
          appData: {
            location: {
              type: "integrations:whereby_video",
              label: "Whereby Video",
              linkType: "static",
              urlRegExp:
                "^(?:https?://)?(?:(?!.*-\\.)(?:\\w+(-\\w+)*\\.))*whereby\\.com(/[\\w\\-._~:?#\\[\\]@!$&'()*+,;%=]+)*$",
              organizerInputPlaceholder: "https://www.whereby.com/cal",
            },
          },
          isAuth: !1,
          __createdUsingCli: !0,
          "/*": "Don't modify slug - If required, do it using cli edit command",
          dirName: "whereby",
          __template: "",
        },
        zoomvideo: {
          linkType: "dynamic",
          name: "Zoom Video",
          description:
            "Zoom is a secure and reliable video platform that supports all of your online communication needs. It can provide everything from one on one meetings, chat, phone, webinars, and large-scale online events. Available with both desktop, web, and mobile versions.",
          type: "zoom_video",
          categories: ["conferencing"],
          variant: "conferencing",
          logo: "/app-store/zoomvideo/icon.svg",
          publisher: "Cal.com",
          url: "https://zoom.us/",
          category: "conferencing",
          slug: "zoom",
          title: "Zoom Video",
          email: "help@cal.com",
          appData: {
            location: {
              default: !1,
              linkType: "dynamic",
              type: "integrations:zoom",
              label: "Zoom Video",
            },
          },
          dirName: "zoomvideo",
          isOAuth: !0,
          __template: "",
        },
      };
    var rG =
      (((a = {}).AttendeeInPerson = "attendeeInPerson"),
      (a.InPerson = "inPerson"),
      (a.Phone = "phone"),
      (a.UserPhone = "userPhone"),
      (a.Link = "link"),
      (a.Conferencing = "conferencing"),
      (a.SomewhereElse = "somewhereElse"),
      (a.AttendeeDefined = "attendeeDefined"),
      a);
    let rK = [];
    for (let [, e] of Object.entries(rY)) {
      let t = e.appData?.location;
      t &&
        rK.push({
          type: t.type,
          label: t.label,
          iconUrl: e.logo,
          linkType: t.linkType,
          category: t.category || "conferencing",
          variable: t.variable || "locationLink",
          defaultValueVariable: t.defaultValueVariable || "link",
          messageForOrganizer: t.messageForOrganizer || `Set ${t.label} link`,
        });
    }
    let rQ = [
        "in_person_attendee_address",
        "in_person",
        "attendee_phone_number",
        "link_meeting",
        "phone_call",
        "organizer_default_conferencing_app",
        "somewhere_else",
        "custom_attendee_location",
      ],
      rJ = [
        {
          default: !0,
          type: "attendeeInPerson",
          label: "in_person_attendee_address",
          iconUrl: "/map-pin-dark.svg",
          linkType: "static",
          category: "in_person_category",
          variable: "address",
          defaultValueVariable: "attendeeAddress",
        },
        {
          default: !0,
          type: "inPerson",
          label: "in_person",
          iconUrl: "/map-pin-dark.svg",
          linkType: "static",
          category: "in_person_category",
          variable: "locationAddress",
          defaultValueVariable: "address",
        },
        {
          default: !0,
          type: "phone",
          label: "attendee_phone_number",
          iconUrl: "/phone.svg",
          linkType: "static",
          category: "phone",
          variable: "locationPhoneNumber",
          defaultValueVariable: "phone",
        },
        {
          default: !0,
          type: "userPhone",
          label: "phone_call",
          iconUrl: "/phone.svg",
          linkType: "static",
          category: "phone",
          variable: "hostPhoneNumber",
          defaultValueVariable: "hostPhoneNumber",
        },
        {
          default: !0,
          type: "link",
          label: "link_meeting",
          iconUrl: "/link.svg",
          linkType: "static",
          category: "other",
          variable: "locationLink",
          defaultValueVariable: "link",
        },
        {
          default: !0,
          type: "conferencing",
          label: "organizer_default_conferencing_app",
          iconUrl: "/link.svg",
          linkType: "static",
          category: "conferencing",
          variable: "hostDefault",
          defaultValueVariable: "hostDefault",
        },
        {
          default: !0,
          type: "somewhereElse",
          label: "somewhere_else",
          iconUrl: "/map-pin-dark.svg",
          linkType: "static",
          category: "other",
          variable: "somewhereElse",
          defaultValueVariable: "somewhereElse",
        },
        {
          default: !0,
          type: "attendeeDefined",
          label: "custom_attendee_location",
          iconUrl: "/map-pin-dark.svg",
          linkType: "static",
          category: "other",
          variable: "attendeeAddress",
          defaultValueVariable: "attendeeAddress",
        },
        ...rK,
      ],
      rX = (e) => rJ.find((t) => t.type === e),
      r0 = (e) => {
        let t = rX(e.type);
        if (!t) return "";
        let a = t.defaultValueVariable;
        return a ? e[a] || t.label : "";
      },
      r1 = (e, t, a) => {
        if (!t) return null;
        let r = r0(e);
        return e.type.startsWith("integrations:") ? t.label : rQ.includes(r) ? a(r) : r;
      };
    var r2 = e.i(767842);
    function r3({ content: e }) {
      return (0, i.jsx)("span", {
        className: "hidden sm:inline-flex",
        children: (0, i.jsx)(tD.Tooltip, {
          side: "top",
          content: e,
          children: (0, i.jsx)("span", {
            "aria-label": e,
            children: (0, i.jsx)(ar.Icon, {
              name: "info",
              className: "text-subtle relative left-1 right-1 top-px mt-px h-4 w-4",
            }),
          }),
        }),
      });
    }
    var r4 = e.i(448389),
      r6 = e.i(44602);
    let r5 = {
        ci: ".. .. .. .. ..",
        bj: ".. .. .. .. ..",
        at: "... ..........",
        ar: "(..) .........",
        fi: ".. ... .. ...",
        nz: "...-....-....",
      },
      r9 = function ({
        name: e,
        className: t = "",
        onChange: a,
        value: r,
        defaultCountry: n = "us",
        inputStyle: o,
        flagButtonStyle: s,
        ...l
      }) {
        let c = (function (e) {
            let t = (0, er.useBookerStore)((e) => e.defaultPhoneCountry),
              [a, r] = (0, m.useState)(t || e);
            return (
              (0, m.useEffect)(() => {
                if (t) return void r(t);
                let a = navigator.language.split("-")[1]?.toUpperCase();
                a && (0, r4.isSupportedCountry)(a) ? r(a.toLowerCase()) : r(e);
              }, [t, e]),
              a
            );
          })(n),
          [u, d] = (0, m.useState)(c);
        return (
          (0, m.useEffect)(() => {
            r || d(c);
          }, [c, r]),
          (0, m.useEffect)(() => {
            if (!r) return;
            let e = r
              .trim()
              .replace(/[^\d+]/g, "")
              .replace(/^\+?/, "+");
            "+" !== e && "" !== e && r !== e && a(e);
          }, []),
          (0, i.jsx)(r6.default, {
            ...l,
            value: r ? r.trim().replace(/^\+?/, "+") : void 0,
            country: u,
            enableSearch: !0,
            disableSearchIcon: !0,
            masks: r5,
            inputProps: {
              name: e,
              required: l.required,
              placeholder: l.placeholder,
              autoComplete: "tel",
            },
            onChange: (e, t) => {
              e === t.dialCode ? a("") : a(e.startsWith("+") ? e : `+${e}`);
            },
            containerClass: (0, t9.cn)(
              "hover:border-emphasis focus-within:border-emphasis border-default !bg-default rounded-md border focus-within:outline-none focus-within:ring-0 focus-within:ring-brand-default disabled:cursor-not-allowed",
              t
            ),
            inputClass: "text-sm focus:ring-0 !bg-default text-default placeholder:text-muted",
            buttonClass: "text-emphasis !bg-default",
            buttonStyle: { ...s },
            searchClass: "!text-default !bg-default",
            dropdownClass: "!text-default !bg-default",
            inputStyle: { width: "inherit", border: 0, ...o },
            searchStyle: {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "6px 12px",
              gap: "8px",
              width: "296px",
              height: "28px",
              marginLeft: "-4px",
            },
            dropdownStyle: { width: "max-content" },
          })
        );
      },
      r8 = null;
    function r7() {
      return (0, i.jsxs)("svg", {
        "aria-label": "Google",
        className: "h-3.5 w-3.5",
        role: "img",
        viewBox: "0 0 48 48",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          (0, i.jsx)("path", {
            fill: "#FFC107",
            d: "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z",
          }),
          (0, i.jsx)("path", {
            fill: "#FF3D00",
            d: "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z",
          }),
          (0, i.jsx)("path", {
            fill: "#4CAF50",
            d: "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z",
          }),
          (0, i.jsx)("path", {
            fill: "#1976D2",
            d: "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z",
          }),
        ],
      });
    }
    function ne({ value: e = "", onChange: t, disabled: a, className: r, ...n }) {
      let { t: o } = (0, e1.useAtomsLocale)(),
        [s, l] = (0, m.useState)([]),
        [c, u] = (0, m.useState)(-1),
        [d, p] = (0, m.useState)(() => !1 !== r8),
        h = (0, m.useRef)(!1),
        f = (0, m.useRef)(!1),
        g = (0, m.useRef)(new Map());
      (0, m.useEffect)(() => {
        let t = e.trim();
        if (!d || t.length < 3 || !h.current || a) {
          (l([]), u(-1));
          return;
        }
        let r = g.current.get(t);
        if (r) {
          (l(r), u(-1));
          return;
        }
        let n = !1,
          i = new AbortController(),
          o = setTimeout(async () => {
            try {
              let e = await fetch("/api/google-places/autocomplete", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ input: t }),
                signal: i.signal,
              });
              if (n) return;
              if (!e.ok) return void l([]);
              let a = await e.json();
              if (n) return;
              if (!1 === a.configured) {
                ((r8 = !1), p(!1), l([]));
                return;
              }
              let r = (a.predictions ?? []).slice(0, 4);
              if ((g.current.set(t, r), !f.current)) return;
              (l(r), u(-1));
            } catch {
              n || i.signal.aborted || l([]);
            }
          }, 300);
        return () => {
          ((n = !0), i.abort(), clearTimeout(o));
        };
      }, [e, d, a]);
      let b = () => {
          (l([]), u(-1));
        },
        y = (e) => {
          ((h.current = !1), b(), t(e));
        },
        v = n.id ? `${n.id}-suggestions` : void 0;
      return (0, i.jsxs)("div", {
        className: "relative",
        children: [
          (0, i.jsxs)("div", {
            className: "relative flex items-center",
            children: [
              (0, i.jsx)(ar.Icon, {
                name: "map-pin",
                className: "text-muted absolute left-0.5 ml-3 h-4 w-4 -translate-y-1/2",
                style: { top: "44%" },
              }),
              (0, i.jsx)(ai.Input, {
                ...n,
                disabled: a,
                autoComplete: "off",
                value: e,
                role: "combobox",
                "aria-expanded": s.length > 0,
                "aria-controls": v,
                "aria-autocomplete": "list",
                onKeyDown: (e) => {
                  if (0 !== s.length) {
                    if ("ArrowDown" === e.key) {
                      (e.preventDefault(), u((e) => (e < s.length - 1 ? e + 1 : 0)));
                      return;
                    }
                    if ("ArrowUp" === e.key) {
                      (e.preventDefault(), u((e) => (e > 0 ? e - 1 : s.length - 1)));
                      return;
                    }
                    if ("Enter" === e.key && c >= 0) {
                      (e.preventDefault(), y(s[c].text));
                      return;
                    }
                    "Escape" === e.key && (e.stopPropagation(), b());
                  }
                },
                onFocus: () => {
                  f.current = !0;
                },
                onBlur: () => {
                  ((f.current = !1), b());
                },
                onChange: (e) => {
                  ((h.current = !0), t(e.target.value));
                },
                className: (0, t9.cn)("pl-10", r),
              }),
            ],
          }),
          s.length > 0
            ? (0, i.jsxs)("div", {
                className:
                  "border-default bg-default absolute z-50 mt-1 w-full overflow-hidden rounded-lg border shadow-md",
                children: [
                  (0, i.jsx)("ul", {
                    id: v,
                    role: "listbox",
                    className: "max-h-60 overflow-auto",
                    children: s.map((e, t) =>
                      (0, i.jsxs)(
                        "li",
                        {
                          role: "option",
                          "aria-selected": t === c,
                          className: (0, t9.cn)("cursor-pointer px-3 py-2", t === c && "bg-subtle"),
                          onMouseDown: (t) => {
                            (t.preventDefault(), y(e.text));
                          },
                          children: [
                            (0, i.jsx)("div", {
                              className: "truncate text-sm font-medium",
                              children: e.mainText,
                            }),
                            e.secondaryText
                              ? (0, i.jsx)("div", {
                                  className: "text-muted truncate text-xs",
                                  children: e.secondaryText,
                                })
                              : null,
                          ],
                        },
                        e.placeId
                      )
                    ),
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "border-default text-muted flex items-center justify-end gap-1.5 border-t px-3 py-2 text-xs",
                    children: [o("powered_by"), (0, i.jsx)(r7, {})],
                  }),
                ],
              })
            : null,
        ],
      });
    }
    var nt = e.i(388474),
      na = e.i(610772);
    let nr = m.default.forwardRef(({ className: e, ...t }, a) =>
      (0, i.jsx)(nt.Root, {
        ref: a,
        className: (0, t9.cn)(
          "border-default data-[state=checked]:bg-brand-default data-[state=checked]:text-brand peer h-4 w-4 shrink-0 rounded-[4px] border ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed",
          e
        ),
        ...t,
        children: (0, i.jsx)(nt.Indicator, {
          className: (0, t9.cn)("flex items-center justify-center text-current"),
          children: (0, i.jsx)(tA.CheckIcon, { className: "h-4 w-4" }),
        }),
      })
    );
    nr.displayName = nt.Root.displayName;
    let nn = (0, m.forwardRef)(
      ({ label: e, description: t, error: a, disabled: r, descriptionAsSafeHtml: n, ...o }, s) => {
        let l = !e || o.descriptionAsLabel,
          c = (0, na.useId)();
        return (0, i.jsxs)("div", {
          className: "block items-center sm:flex",
          children: [
            e &&
              (0, i.jsx)("div", {
                className: "min-w-48 mb-4 sm:mb-0",
                children: m.default.createElement(
                  l ? "div" : "label",
                  {
                    className: (0, t9.cn)("flex text-sm font-medium text-emphasis"),
                    ...(!l ? { htmlFor: o.id ? o.id : c } : {}),
                  },
                  e
                ),
              }),
            (0, i.jsx)("div", {
              className: "w-full",
              children: (0, i.jsx)("div", {
                className: "hover:bg-subtle relative flex w-fit items-center rounded-md p-1",
                children: m.default.createElement(
                  l ? "label" : "div",
                  {
                    className: (0, t9.cn)(
                      "relative flex items-start",
                      "text-emphasis",
                      a && "text-error"
                    ),
                  },
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)("div", {
                        className: "flex h-5 items-center",
                        children: (0, i.jsx)("input", {
                          ...o,
                          ref: s,
                          type: "checkbox",
                          disabled: r,
                          id: o.id ? o.id : c,
                          className: (0, t9.cn)(
                            "text-emphasis focus:ring-emphasis dark:text-muted border-default bg-default focus:bg-default active:bg-default checked:border-transparent! checked:bg-gray-800! h-4 w-4 rounded-[4px] transition focus:outline-none focus:ring-0 ltr:mr-2 rtl:ml-2",
                            !a && r
                              ? "cursor-not-allowed bg-gray-300 checked:bg-gray-300 hover:bg-gray-300 hover:checked:bg-gray-300"
                              : "hover:bg-subtle hover:border-emphasis",
                            a &&
                              "border-error hover:bg-error hover:border-error checked:bg-darkerror checked:hover:border-error checked:hover:bg-darkerror",
                            o.className
                          ),
                        }),
                      }),
                      n
                        ? (0, i.jsx)("span", {
                            className: (0, t9.cn)(
                              "text-default ml-2 text-sm [&_a]:text-blue-500",
                              !e && "font-medium",
                              o.descriptionClassName
                            ),
                            dangerouslySetInnerHTML: { __html: n },
                          })
                        : (0, i.jsx)("span", {
                            className: (0, t9.cn)(
                              "text-default ml-2 text-sm",
                              !e && "font-medium",
                              o.descriptionClassName
                            ),
                            children: t,
                          }),
                    ],
                  })
                ),
              }),
            }),
          ],
        });
      }
    );
    nn.displayName = "CheckboxField";
    var ni = e.i(672310);
    ni.Root;
    let no = (e) => (0, i.jsx)(ni.Root, { ...e, children: e.children }),
      ns = (e) =>
        (0, i.jsx)(ni.Item, {
          ...e,
          className: (0, t9.cn)(
            "hover:bg-subtle border-default dark:checked:bg-brand-default dark:hover:bg-subtle dark:checked:hover:bg-brand-default focus:ring-brand-default hover:border-emphasis me-1.5 mt-0.5 h-4 w-4 shrink-0 rounded-full border text-(--cal-brand) transition focus:border-0 focus:ring-1 data-[state=checked]:border-brand-default",
            e.disabled && "opacity-60"
          ),
          children: e.children,
        }),
      nl = ({ disabled: e }) =>
        (0, i.jsx)(ni.Indicator, {
          className: (0, t9.cn)(
            "after:bg-default dark:after:bg-brand-accent relative flex h-full w-full items-center justify-center rounded-full bg-black after:h-[6px] after:w-[6px] after:rounded-full after:content-['']",
            e ? "after:bg-cal-muted" : "bg-brand-default"
          ),
        }),
      nc = (e) =>
        (0, i.jsx)("label", {
          ...e,
          className: (0, t9.cn)(
            "text-emphasis ms-2 w-full text-sm font-medium leading-5",
            e.disabled && "text-subtle"
          ),
        }),
      nu = ({ label: e, disabled: t, id: a, value: r, className: n, withPadding: o }) =>
        (0, i.jsxs)("div", {
          className: (0, t9.cn)(
            "flex items-start",
            o && "hover:bg-subtle cursor-pointer rounded-lg p-1.5",
            n
          ),
          children: [
            (0, i.jsx)(ns, {
              value: r,
              disabled: t,
              id: a,
              children: (0, i.jsx)(nl, { disabled: t }),
            }),
            (0, i.jsx)(nc, { htmlFor: a, disabled: t, children: e }),
          ],
        });
    var nd = e.i(885272);
    let nm = (e) => {
        let {
          value: t,
          noLabel: a,
          setValue: r,
          readOnly: n,
          placeholder: o,
          customProps: s,
          type: l = "text",
          ...c
        } = e;
        return (0, i.jsx)(ai.TextField, {
          size: "sm",
          containerClassName: "w-full mb-2",
          type: l,
          value: t || "",
          noLabel: a,
          placeholder: o,
          disabled: n,
          onChange: (e) => {
            r(e.target.value);
          },
          ...c,
          ...s,
        });
      },
      np = (e) => {
        let {
          value: t,
          setValue: a,
          readOnly: r,
          placeholder: n,
          maxLength: o,
          customProps: s,
          ...l
        } = e;
        return (0, i.jsx)(ai.TextArea, {
          value: t || "",
          placeholder: n,
          className: "mb-2",
          disabled: r,
          onChange: (e) => {
            a(e.target.value);
          },
          maxLength: o,
          ...s,
          ...l,
        });
      },
      nh = function ({ listValues: e, setValue: t, value: a, ...r }) {
        if (!e) return null;
        let n = e.map((e) => ({ label: e.title, value: e.value })),
          o = n.find((e) => e.value === a);
        return (
          !o && a && t(""),
          (0, i.jsx)(nd.Select, {
            size: "sm",
            "aria-label": "select-dropdown",
            className: "data-testid-select mb-2",
            onChange: (e) => {
              e && t(e.value);
            },
            isDisabled: r.readOnly,
            value: o,
            options: n,
            ...r,
          })
        );
      },
      nf = function ({ value: e, setValue: t, ...a }) {
        return (0, i.jsx)(ai.TextField, {
          size: "sm",
          type: "number",
          labelSrOnly: a.noLabel,
          containerClassName: "w-full",
          className: "mb-2",
          value: e,
          onChange: (e) => {
            t(e.target.value);
          },
          ...a,
        });
      },
      ng = ({ listValues: e, setValue: t, value: a, ...r }) => {
        if (!e) return null;
        let n = e.map((e) => ({ label: e.title, value: e.value })),
          o = n.filter((e) => a?.includes(e.value));
        return (
          0 === o.length && a?.length && t([]),
          (0, i.jsx)(nd.Select, {
            size: "sm",
            "aria-label": "multi-select-dropdown",
            className: "mb-2",
            onChange: (e) => {
              t(e?.map((e) => e.value) ?? []);
            },
            value: o,
            isMulti: !0,
            isDisabled: r.readOnly,
            options: n,
            ...r,
          })
        );
      },
      nb = {
        boolean: (e) => "boolean" == typeof e,
        multiselect: (e) => e instanceof Array && e.every((e) => "string" == typeof e),
        objectiveWithInput: (e) => "object" == typeof e && null !== e && "value" in e,
        select: (e) => "string" == typeof e,
        text: (e) => "string" == typeof e,
        textList: (e) => e instanceof Array && e.every((e) => "string" == typeof e),
        variants: (e) => ("object" == typeof e && null !== e) || "string" == typeof e,
      },
      ny = {
        text: {
          propsType: rW.propsTypes.text,
          factory: (e) => (0, i.jsx)(nm, { id: e.name, noLabel: !0, ...e }),
        },
        textarea: {
          propsType: rW.propsTypes.textarea,
          factory: (e) => (0, i.jsx)(np, { id: e.name, rows: 3, ...e }),
        },
        number: {
          propsType: rW.propsTypes.number,
          factory: (e) => (0, i.jsx)(nf, { id: e.name, noLabel: !0, ...e }),
        },
        name: {
          propsType: rW.propsTypes.name,
          factory: (e) => {
            var t;
            let { variant: a = "fullName" } = e;
            if (!e.variants) throw Error("'variants' is required for 'name' type of field");
            if ("firstAndLastName" !== a && "fullName" !== a)
              throw Error(`Invalid variant name '${a}' for 'name' type of field`);
            let r =
              ((t = e.value),
              "firstAndLastName" === a
                ? (function (e) {
                    let t;
                    if ("string" == typeof (e = e || ""))
                      try {
                        t = JSON.parse(e);
                      } catch (r) {
                        let a = e.split(" ").map((e) => e.trim());
                        t = { firstName: a[0], lastName: a.slice(1).join(" ") };
                      }
                    else t = e;
                    return t;
                  })(t)
                : ((e) => {
                    if (!e) return "";
                    let t = "";
                    return (
                      "string" == typeof e
                        ? (t = e)
                        : ((t = e.firstName), e.lastName && (t = `${t} ${e.lastName}`)),
                      t
                    );
                  })(t));
            if ("fullName" === a) {
              if ("string" != typeof r) throw Error("Invalid value for 'fullName' variant");
              let t = e.variants[a].fields[0];
              return (0, i.jsx)(ai.InputField, {
                name: "name",
                showAsteriskIndicator: !0,
                placeholder: t.placeholder,
                label: t.label,
                containerClassName: "w-full",
                readOnly: e.readOnly,
                value: r,
                required: t.required,
                type: "text",
                autoComplete: "name",
                onChange: (t) => {
                  e.setValue(t.target.value);
                },
              });
            }
            let n = e.variants[a];
            if ("object" != typeof r) throw Error("Invalid value for 'fullName' variant");
            return (0, i.jsx)("div", {
              className: "flex space-x-4",
              children: n.fields.map((t) =>
                (0, i.jsx)(
                  ai.InputField,
                  {
                    className: "mb-0!",
                    showAsteriskIndicator: !0,
                    name: t.name,
                    readOnly: e.readOnly,
                    placeholder: t.placeholder,
                    label: t.label,
                    containerClassName: `w-full testid-${t.name}`,
                    value: r[t.name],
                    required: t.required,
                    type: "text",
                    autoComplete:
                      "firstName" === t.name
                        ? "given-name"
                        : "lastName" === t.name
                          ? "family-name"
                          : void 0,
                    onChange: (a) => {
                      var r, n;
                      let i;
                      return (
                        (r = t.name),
                        (n = a.target.value),
                        void ("object" != typeof (i = e.value) && (i = {}),
                        e.setValue({ ...i, [r]: n }))
                      );
                    },
                  },
                  t.name
                )
              ),
            });
          },
        },
        phone: {
          propsType: rW.propsTypes.phone,
          factory: ({ setValue: e, readOnly: t, ...a }) =>
            a
              ? (0, i.jsx)(r9, {
                  disabled: t,
                  onChange: (t) => {
                    e(t);
                  },
                  ...a,
                })
              : (0, i.jsx)("div", {}),
        },
        email: {
          propsType: rW.propsTypes.email,
          factory: (e) =>
            e
              ? (0, i.jsx)(ai.InputField, {
                  type: "email",
                  id: e.name,
                  noLabel: !0,
                  autoComplete: "email",
                  ...e,
                  onChange: (t) => e.setValue(t.target.value),
                })
              : (0, i.jsx)("div", {}),
        },
        address: {
          propsType: rW.propsTypes.address,
          factory: (e) =>
            (0, i.jsx)(ne, {
              id: e.name,
              onChange: (t) => {
                e.setValue(t);
              },
              ...e,
              disabled: e.readOnly,
            }),
        },
        multiemail: {
          propsType: rW.propsTypes.multiemail,
          factory: function ({ value: e, readOnly: t, label: a, setValue: r, ...n }) {
            let o = n.placeholder,
              { t: s } = (0, e1.useAtomsLocale)();
            return (
              (e = e || []),
              (0, i.jsxs)(i.Fragment, {
                children: [
                  e.length
                    ? (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)("label", {
                            htmlFor: "guests",
                            className: "text-default  mb-1 block text-sm font-medium",
                            children: a,
                          }),
                          (0, i.jsx)("ul", {
                            children: e.map((a, s) =>
                              (0, i.jsx)(
                                "li",
                                {
                                  children: (0, i.jsx)(ai.EmailField, {
                                    id: `${n.name}.${s}`,
                                    disabled: t,
                                    value: e[s],
                                    onChange: (t) => {
                                      ((e[s] = t.target.value.toLowerCase()), r(e));
                                    },
                                    placeholder: o,
                                    label: (0, i.jsx)(i.Fragment, {}),
                                    required: !0,
                                    onClickAddon: () => {
                                      (e.splice(s, 1), r(e));
                                    },
                                    addOnSuffix: t
                                      ? null
                                      : (0, i.jsx)(tD.Tooltip, {
                                          content: "Remove email",
                                          children: (0, i.jsx)("button", {
                                            className: "m-1",
                                            type: "button",
                                            children: (0, i.jsx)(ar.Icon, {
                                              name: "x",
                                              size: 12,
                                              className: "text-default",
                                            }),
                                          }),
                                        }),
                                  }),
                                },
                                s
                              )
                            ),
                          }),
                          !t &&
                            (0, i.jsx)(tE.Button, {
                              "data-testid": "add-another-guest",
                              type: "button",
                              color: "minimal",
                              StartIcon: "user-plus",
                              className: "my-2.5",
                              onClick: () => {
                                (e.push(""), r(e));
                              },
                              children: s("add_another"),
                            }),
                        ],
                      })
                    : (0, i.jsx)(i.Fragment, {}),
                  !e.length &&
                    !t &&
                    (0, i.jsx)(tE.Button, {
                      "data-testid": "add-guests",
                      color: "minimal",
                      variant: "button",
                      StartIcon: "user-plus",
                      onClick: () => {
                        (e.push(""), r(e));
                      },
                      className: "mr-auto h-fit whitespace-normal text-left",
                      children: (0, i.jsx)("span", { className: "flex-1", children: a }),
                    }),
                ],
              })
            );
          },
        },
        multiselect: {
          propsType: rW.propsTypes.multiselect,
          factory: (e) => {
            let t = {
              ...e,
              listValues: e.options.map((e) => ({ title: e.label, value: e.value })),
            };
            return (0, i.jsx)(ng, { id: e.name, ...t });
          },
        },
        select: {
          propsType: rW.propsTypes.select,
          factory: (e) => {
            let t = {
              ...e,
              listValues: e.options.map((e) => ({ title: e.label, value: e.value })),
            };
            return (0, i.jsx)(nh, { id: e.name, ...t });
          },
        },
        checkbox: {
          propsType: rW.propsTypes.checkbox,
          factory: ({ options: e, readOnly: t, setValue: a, value: r }) => (
            (r = r || []),
            (0, i.jsx)("div", {
              children: e.map((e, n) =>
                (0, i.jsxs)(
                  "label",
                  {
                    className: "block",
                    children: [
                      (0, i.jsx)(nr, {
                        disabled: t,
                        onCheckedChange: (t) => {
                          let n = r.filter((t) => t !== e.value);
                          (t && n.push(e.value), a(n));
                        },
                        value: e.value,
                        checked: r.includes(e.value),
                      }),
                      (0, i.jsx)("span", {
                        className: "text-emphasis me-2 ms-2 text-sm",
                        children: e.label ?? "",
                      }),
                    ],
                  },
                  n
                )
              ),
            })
          ),
        },
        radio: {
          propsType: rW.propsTypes.radio,
          factory: ({ setValue: e, name: t, value: a, options: r, readOnly: n }) =>
            (0, i.jsx)(no, {
              disabled: n,
              value: a,
              onValueChange: (t) => {
                e(t);
              },
              children: (0, i.jsx)(i.Fragment, {
                children: r.map((e, a) =>
                  (0, i.jsx)(
                    nu,
                    { label: e.label, value: e.label, id: `${t}.option.${a}.radio` },
                    `option.${a}.radio`
                  )
                ),
              }),
            }),
        },
        radioInput: {
          propsType: rW.propsTypes.radioInput,
          factory: function ({
            name: e,
            label: t,
            options: a,
            optionsInputs: r,
            value: n,
            setValue: o,
            readOnly: s,
            translatedDefaultLabel: l,
          }) {
            let c;
            (0, m.useEffect)(() => {
              n || o({ value: a[0]?.value, optionValue: "" });
            }, [a, o, n]);
            let { t: u } = (0, e1.useAtomsLocale)(),
              d = (e) =>
                e
                  ? -1 !== e.search(/^https?:\/\//)
                    ? (0, i.jsx)("a", {
                        href: e,
                        target: "_blank",
                        children: (0, i.jsx)("span", { className: "underline", children: e }),
                      })
                    : e
                  : "";
            return (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)("div", {
                  children: (0, i.jsx)("div", {
                    className: "mb-2",
                    children:
                      a.length > 1
                        ? a.map((t, a) =>
                            (0, i.jsxs)(
                              "label",
                              {
                                className: "mb-1 flex items-center",
                                children: [
                                  (0, i.jsx)("input", {
                                    type: "radio",
                                    disabled: s,
                                    name: e,
                                    className:
                                      "bg-default after:bg-default border-emphasis hover:bg-subtle hover:after:bg-subtle checked:bg-brand-default checked:hover:bg-brand-default checked:after:bg-default dark:checked:bg-brand-default dark:checked:after:bg-brand-accent dark:hover:bg-subtle dark:checked:hover:bg-brand-default text-(--cal-brand) flex h-4 w-4 cursor-pointer items-center justify-center transition after:h-[6px] after:w-[6px] after:rounded-full after:content-[''] after:hover:block focus:ring-0 focus:ring-offset-0 focus:outline-none ltr:mr-2 rtl:ml-2",
                                    value: t.value,
                                    onChange: (e) => {
                                      o({ value: e.target.value, optionValue: "" });
                                    },
                                    checked: n?.value === t.value,
                                  }),
                                  (0, i.jsx)("span", {
                                    className: "text-emphasis me-2 ms-2 text-sm",
                                    children: d(t.label) ?? "",
                                  }),
                                  (0, i.jsx)("span", {
                                    children:
                                      "phone" === t.value &&
                                      (0, i.jsx)(r3, {
                                        content: u("number_in_international_format"),
                                      }),
                                  }),
                                ],
                              },
                              a
                            )
                          )
                        : (0, i.jsx)(i.Fragment, {
                            children: (0, i.jsxs)(an.Label, {
                              className: "flex items-center",
                              children: [
                                d(t && l && l !== t ? t : a[0].label),
                                !s && r[a[0].value]?.required
                                  ? (0, i.jsx)("span", {
                                      className: "text-default -mb-2 ml-1 text-sm font-medium",
                                      children: "*",
                                    })
                                  : null,
                                "phone" === a[0].value &&
                                  (0, i.jsx)(r3, { content: u("number_in_international_format") }),
                              ],
                            }),
                          }),
                  }),
                }),
                (c = r[n?.value])
                  ? (0, i.jsx)("div", {
                      children: (0, i.jsx)(nk, {
                        readOnly: !!s,
                        field: { ...c, name: "optionField" },
                        value: n?.optionValue,
                        setValue: (e) => {
                          o({ value: n?.value, optionValue: e || "" });
                        },
                      }),
                    })
                  : null,
              ],
            });
          },
        },
        boolean: {
          propsType: rW.propsTypes.boolean,
          factory: ({ readOnly: e, name: t, label: a, value: r, setValue: n }) =>
            (0, i.jsx)("div", {
              className: "flex",
              children: (0, i.jsx)(nn, {
                name: t,
                onChange: (e) => {
                  e.target.checked ? n(!0) : n(!1);
                },
                placeholder: "",
                checked: r,
                disabled: e,
                description: "",
                descriptionAsSafeHtml: a ?? "",
              }),
            }),
        },
        url: {
          propsType: rW.propsTypes.url,
          factory: (e) => (0, i.jsx)(nm, { type: "url", autoComplete: "url", noLabel: !0, ...e }),
        },
      },
      nv = ({ field: e, readOnly: t, className: a, onValueChange: r }) => {
        let { t: n } = (0, e1.useAtomsLocale)(),
          { control: o, formState: s } = (0, ea.useFormContext)(),
          {
            hidden: l,
            placeholder: c,
            label: u,
            noLabel: d,
            translatedDefaultLabel: m,
          } = (function (e, t) {
            let a = !1,
              r = !!e.hidden;
            if ("radioInput" === e.type) {
              let t = e.options;
              if (t?.length === 1) {
                if (!e.optionsInputs) throw Error("radioInput must have optionsInputs");
                e.optionsInputs[t[0].value] ? (a = !0) : (r = !0);
              }
            }
            if (rq.includes(e.type) && void 0 === e.labelAsSafeHtml)
              throw Error(`${e.name}:${e.type} type must have labelAsSafeHtml set`);
            let n = t(e.defaultLabel || ""),
              i = e.labelAsSafeHtml || e.label || n,
              o = e.placeholder || t(e.defaultPlaceholder || "");
            return (
              e.variantsConfig?.variants &&
                Object.entries(e.variantsConfig.variants).forEach(([a, r]) => {
                  r.fields.forEach((r) => {
                    let n = rH[e.type]?.variantsConfig,
                      i = n?.variants?.[a]?.fieldsMap[r.name]?.defaultLabel;
                    r.label = r.label || t(i || "");
                  });
                }),
              { hidden: r, placeholder: o, label: i, noLabel: a, translatedDefaultLabel: n }
            );
          })(e, n),
          p = ((e) => {
            let t,
              { getValues: a, formState: r } = (0, ea.useFormContext)(),
              n =
                ((t = (0, eF.useSearchParams)()),
                (function (e) {
                  let t = {};
                  if (null === e) return t;
                  let a = e[Symbol.iterator](),
                    r = a.next();
                  for (; !r.done; ) {
                    let [e, n] = r.value;
                    if (Object.prototype.hasOwnProperty.call(t, e)) {
                      let a = t[e];
                      (Array.isArray(a) || (a = [a]), a.push(n), (t[e] = a));
                    } else t[e] = n;
                    r = a.next();
                  }
                  return t;
                })(t?.entries() ?? null));
            if (!e.disableOnPrefill || r.dirtyFields?.responses?.[e.name]) return !1;
            let i = a()?.responses || {},
              o = "radioInput" !== e.type && !e.variantsConfig;
            if (aR(r?.errors?.responses?.message || "") === e.name) return !1;
            let s = n[e.name],
              l = i[e.name];
            if (!o && d(s) && d(l))
              return (
                "radioInput" !== e.type ||
                (function ({ value: e, optionsInputs: t }) {
                  return t?.[e.value] ? !!e.value && !!e.optionValue : !!e.value;
                })({ value: l, optionsInputs: e.optionsInputs })
              );
            if (!d(l) || !n) return !1;
            if (s == l?.toString()) return !0;
            if ("string" == typeof l) return s?.toString() == l?.toString();
            let c = aB(l),
              u = aB(s);
            return !!c.find((e) => u.find((t) => t?.toString() == e?.toString()));
            function d(e) {
              return null != e && "" !== e;
            }
          })(e);
        return (0, i.jsx)("div", {
          "data-fob-field-name": e.name,
          className: (0, t9.cn)(a, l ? "hidden" : ""),
          children: (0, i.jsx)(ea.Controller, {
            control: o,
            name: `responses.${e.name}`,
            render: ({ field: { value: a, onChange: o }, fieldState: { error: h } }) =>
              (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)(nk, {
                    field: { ...e, label: u, placeholder: c, hidden: l },
                    value: a,
                    readOnly: t || p,
                    setValue: (t) => {
                      (o(t), r?.({ name: e.name, value: t, prevValue: a }));
                    },
                    noLabel: d,
                    translatedDefaultLabel: m,
                  }),
                  (0, i.jsx)(r2.ErrorMessage, {
                    name: "responses",
                    errors: s.errors,
                    render: ({ message: t }) =>
                      aR((t = t || "")) === e.name || h
                        ? ((t = t.replace(/\{[^}]+\}(.*)/, "$1").trim()),
                          l && console.error(`Error message for hidden field:${e.name} => ${t}`),
                          (0, i.jsxs)("div", {
                            "data-testid": `error-message-${e.name}`,
                            className: "mt-2 flex items-center text-sm text-red-700 ",
                            children: [
                              (0, i.jsx)(ar.Icon, {
                                name: "info",
                                size: 12,
                                className: "ltr:mr-2 rtl:ml-2",
                              }),
                              (0, i.jsx)("p", { children: n(t || "invalid_input") }),
                            ],
                          }))
                        : null,
                  }),
                ],
              }),
          }),
        });
      },
      nx = ({ field: e, children: t, readOnly: a, htmlFor: r, noLabel: n = !1 }) => {
        let { t: o } = (0, e1.useAtomsLocale)();
        return (0, i.jsxs)("div", {
          children: [
            n
              ? null
              : "boolean" !== e.type &&
                "multiemail" !== e.type &&
                e.label &&
                (0, i.jsx)("div", {
                  className: "mb-2 flex items-center",
                  children: (0, i.jsxs)(an.Label, {
                    className: "mb-0! flex items-center",
                    htmlFor: r,
                    children: [
                      e.labelAsSafeHtml
                        ? (0, i.jsx)("span", {
                            dangerouslySetInnerHTML: { __html: r$(e.labelAsSafeHtml) },
                          })
                        : (0, i.jsx)("span", { children: e.label }),
                      (0, i.jsx)("span", {
                        className:
                          "text-emphasis -mb-1 ltr:ml-1 rtl:mr-1 text-sm font-medium leading-none",
                        children: !a && e.required ? "*" : "",
                      }),
                      "phone" === e.type &&
                        (0, i.jsx)(r3, { content: o("number_in_international_format") }),
                    ],
                  }),
                }),
            t,
            "smsReminderNumber" === e.name &&
              (0, i.jsx)("div", {
                className: "text-sm text-gray-500",
                children: o("sms_workflow_consent"),
              }),
          ],
        });
      },
      nk = ({
        field: e,
        value: t,
        setValue: a,
        readOnly: r,
        noLabel: n,
        translatedDefaultLabel: o,
      }) => {
        let s = ny[e.type || "text"],
          { t: l } = (0, e1.useAtomsLocale)();
        if (void 0 !== t && !nb[s.propsType](t))
          throw Error(`Value ${t} is not valid for type ${s.propsType} for field ${e.name}`);
        if ("text" === s.propsType)
          return (0, i.jsx)(nx, {
            field: e,
            htmlFor: e.name,
            readOnly: r,
            noLabel: n,
            children: (0, i.jsx)(s.factory, {
              placeholder: e.placeholder,
              minLength: e.minLength,
              maxLength: e.maxLength,
              name: e.name,
              label: e.label,
              readOnly: r,
              value: t,
              setValue: a,
            }),
          });
        if ("boolean" === s.propsType)
          return (0, i.jsx)(nx, {
            field: e,
            htmlFor: e.name,
            readOnly: r,
            noLabel: n,
            children: (0, i.jsx)(s.factory, {
              name: e.name,
              label: e.label,
              readOnly: r,
              value: t,
              setValue: a,
              placeholder: e.placeholder,
            }),
          });
        if ("textList" === s.propsType)
          return (0, i.jsx)(nx, {
            field: e,
            htmlFor: e.name,
            readOnly: r,
            noLabel: n,
            children: (0, i.jsx)(s.factory, {
              placeholder: e.placeholder,
              name: e.name,
              label: e.label,
              readOnly: r,
              value: t,
              setValue: a,
            }),
          });
        if ("select" === s.propsType) {
          if (!e.options) throw Error("Field options is not defined");
          return (0, i.jsx)(nx, {
            field: e,
            htmlFor: e.name,
            readOnly: r,
            noLabel: n,
            children: (0, i.jsx)(s.factory, {
              readOnly: r,
              value: t,
              name: e.name,
              placeholder: e.placeholder,
              setValue: a,
              options: e.options.map((e) => ({ ...e, title: e.label })),
            }),
          });
        }
        if ("multiselect" === s.propsType) {
          if (!e.options) throw Error("Field options is not defined");
          return (0, i.jsx)(nx, {
            field: e,
            htmlFor: e.name,
            readOnly: r,
            noLabel: n,
            children: (0, i.jsx)(s.factory, {
              placeholder: e.placeholder,
              name: e.name,
              readOnly: r,
              value: t,
              setValue: a,
              options: e.options.map((e) => ({ ...e, title: e.label })),
            }),
          });
        }
        if ("objectiveWithInput" === s.propsType) {
          if (!e.options) throw Error("Field options is not defined");
          if (!e.optionsInputs) throw Error("Field optionsInputs is not defined");
          let l = e.options;
          return e.options.length
            ? (0, i.jsx)(nx, {
                field: e,
                htmlFor: e.name,
                readOnly: r,
                noLabel: n,
                children: (0, i.jsx)(s.factory, {
                  placeholder: e.placeholder,
                  readOnly: r,
                  name: e.name,
                  label: e.label,
                  value: t,
                  setValue: a,
                  optionsInputs: e.optionsInputs,
                  options: l,
                  required: e.required,
                  translatedDefaultLabel: o,
                }),
              })
            : null;
        }
        if ("variants" === s.propsType) {
          let n = ((e, t) => {
            var a, r;
            let n,
              i = ((e) => {
                let t = e.variantsConfig,
                  a = rH[e.type];
                if (!a) throw Error(`Invalid field.type ${e.type}}`);
                let r = a?.variantsConfig?.defaultValue,
                  n = t || r;
                if ("variants" === a.propsType && !n)
                  throw Error("propsType variants must have variantsConfig");
                return n;
              })(e);
            if (!i) return i;
            let o =
              ((a = i.variants),
              (r = e.type),
              (n = rH[r]?.variantsConfig?.variants),
              Object.entries(a).reduce((e, [a, r]) => {
                let i = n?.[a]?.fieldsMap,
                  o = r.fields.map((e) => {
                    let a = i?.[e.name]?.defaultLabel ?? "",
                      r = (e.label?.trim() ? e.label : a) ?? "",
                      n = e.placeholder ?? "";
                    return { ...e, label: t(r), placeholder: t(n) };
                  });
                return ((e[a] = { ...r, fields: o }), e);
              }, {}));
            return { ...i, variants: o };
          })(e, l);
          return n
            ? (0, i.jsx)(s.factory, {
                placeholder: e.placeholder,
                readOnly: r,
                name: e.name,
                variant: e.variant,
                value: t,
                setValue: a,
                variants: n.variants,
              })
            : null;
        }
        throw Error(`Don't know how to handle ${JSON.stringify(s)}`);
      },
      nw = et.z.object({ value: et.z.literal(rG.Phone), optionValue: et.z.string().optional() }),
      n_ = ({
        fields: e,
        locations: t,
        rescheduleUid: a,
        isDynamicGroupBooking: r,
        bookingData: n,
        isPaidEvent: o,
        paymentCurrency: s = "USD",
      }) => {
        let { t: l, i18n: c } = (0, e1.useAtomsLocale)(),
          { watch: u, setValue: d, formState: p } = (0, ea.useFormContext)(),
          h = u("responses.location"),
          f = a ? "reschedule" : "",
          g = (0, er.useBookerStore)((e) => e.isInstantMeeting),
          b = (0, m.useMemo)(
            () =>
              e.filter((e) => "phone" === e.type && e.name !== rZ.Enum.location).map((e) => e.name),
            [e]
          ),
          y = (0, m.useRef)(null),
          v = (e, t) =>
            `${e} (${Intl.NumberFormat(c.language, { style: "currency", currency: s }).format(t)})`;
        return (0, i.jsx)("div", {
          children: e.map((e) => {
            var s;
            if (g && "location" === e.name) return null;
            let c =
                ("system" === e.editable || "system-but-optional" === e.editable) &&
                !!a &&
                null !== n,
              u = "user-readonly" === e.editable || c,
              m = !!e.hidden,
              x = e.views;
            if (x && !x.find((e) => e.id === f)) return null;
            if (e.name === rZ.Enum.rescheduleReason) {
              if (null === n) return null;
              u = !1;
            }
            if (e.name === rZ.Enum.smsReminderNumber) {
              if (h?.value === "phone")
                return (d(`responses.${rZ.Enum.smsReminderNumber}`, h?.optionValue), null);
              u = !1;
            }
            if (
              (e.name === rZ.Enum.guests && ((u = !1), (m = !!r || !!e.hidden)),
              e.name === rZ.Enum.notes && null !== n)
            )
              return null;
            if (
              (e.name === rZ.Enum.location && (u = !1),
              e.name === rZ.Enum.location && "radioInput" === e.type)
            ) {
              if (!e.optionsInputs) throw Error("radioInput must have optionsInputs");
              let a = e.optionsInputs,
                r = t
                  .map((e) => {
                    let t,
                      a = rX(e.type),
                      r = r0(e);
                    if ("string" != typeof r || !a) return null;
                    let n = a.type;
                    return (
                      "somewhereElse" === n && (t = l("somewhere_else")),
                      {
                        label: e.customLabel || t || r1(e, a, l) || r,
                        value: n,
                        inputPlaceholder: "",
                      }
                    );
                  })
                  .filter((e) => !!e);
              (r.forEach((e) => {
                let t = a[e.value];
                t && (t.placeholder = e.inputPlaceholder);
              }),
                (e.options = r.filter((e) => !!e)));
            }
            if (e?.options) {
              let t = ["inPerson", "userPhone", "link"],
                a = {};
              (e.options.forEach((e) => {
                e.value in a ? a[e.value]++ : (a[e.value] = 1);
              }),
                (e.options = e.options.map((e) => ({
                  ...e,
                  value: t.includes(e.value) && a[e.value] > 1 ? e.label : e.value,
                }))));
            }
            let k = e;
            return (
              o &&
                (rH[e.type]?.supportsPricing &&
                  (k = ((e) => {
                    if (!rH[e.type]?.supportsPricing || !e.label || !e.price) return e;
                    let t = "string" == typeof e.price ? parseFloat(e.price) : e.price,
                      a = v(e.label, t);
                    return {
                      ...e,
                      label: a,
                      ...(rq.includes(e.type) && e.labelAsSafeHtml
                        ? { labelAsSafeHtml: r$(a) }
                        : { labelAsSafeHtml: void 0 }),
                    };
                  })(e)),
                rH[e.type]?.optionsSupportPricing &&
                  ((s = k),
                  (k =
                    rH[s.type]?.optionsSupportPricing && s.options
                      ? {
                          ...s,
                          options: s.options.map((e) => {
                            let t = e.price;
                            return t ? { ...e, label: v(e.label, t) } : e;
                          }),
                        }
                      : s))),
              (0, i.jsx)(
                nv,
                {
                  className: "mb-4",
                  field: { ...k, hidden: m },
                  readOnly: u,
                  ...(e.name === rZ.Enum.location && {
                    onValueChange: ({ value: e }) => {
                      ((e) => {
                        let t = nw.safeParse(e);
                        if (!t.success) return;
                        let { optionValue: a } = t.data,
                          r = (a ?? "").trim();
                        r &&
                          r !== y.current &&
                          (b.forEach((e) => {
                            p.touchedFields?.responses?.[e] ||
                              d(`responses.${e}`, r, { shouldDirty: !1, shouldValidate: !1 });
                          }),
                          (y.current = r));
                      })(e);
                    },
                  }),
                },
                e.name
              )
            );
          }),
        });
      };
    var nC = e.i(762164);
    let nS = () =>
        (0, i.jsxs)("div", {
          className: "flex flex-col",
          children: [
            (0, i.jsx)(nC.SkeletonText, { className: "h-7 w-32" }),
            (0, i.jsx)(nC.SkeletonText, { className: "mt-2 h-7 w-full" }),
            (0, i.jsx)(nC.SkeletonText, { className: "mt-4 h-7 w-28" }),
            (0, i.jsx)(nC.SkeletonText, { className: "mt-2 h-7 w-full" }),
            (0, i.jsxs)("div", {
              className: "mt-12 flex h-7 w-full flex-row items-center gap-4",
              children: [
                (0, i.jsx)(nC.SkeletonText, { className: "inline h-4 w-4 rounded-full" }),
                (0, i.jsx)(nC.SkeletonText, { className: "inline h-7 w-32" }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: "mt-2 flex h-7 w-full flex-row items-center gap-4",
              children: [
                (0, i.jsx)(nC.SkeletonText, { className: "inline h-4 w-4 rounded-full" }),
                (0, i.jsx)(nC.SkeletonText, { className: "inline h-7 w-28" }),
              ],
            }),
            (0, i.jsx)(nC.SkeletonText, { className: "mt-8 h-7 w-32" }),
            (0, i.jsx)(nC.SkeletonText, { className: "mt-2 h-7 w-full" }),
            (0, i.jsx)(nC.SkeletonText, { className: "mt-4 h-7 w-28" }),
            (0, i.jsx)(nC.SkeletonText, { className: "mt-2 h-7 w-full" }),
            (0, i.jsxs)("div", {
              className: "mt-6 flex flex-row gap-3",
              children: [
                (0, i.jsx)(nC.SkeletonText, { className: "ml-auto h-8 w-20" }),
                (0, i.jsx)(nC.SkeletonText, { className: "h-8 w-20" }),
              ],
            }),
          ],
        }),
      nT = ({
        onCancel: e,
        eventQuery: t,
        onSubmit: a,
        errorRef: r,
        errors: n,
        loadingStates: o,
        renderConfirmNotVerifyEmailButtonCond: s,
        bookingForm: l,
        children: c,
        extraOptions: d,
        isVerificationCodeSending: p,
        isPlatform: h = !1,
        isPlatformBookerEmbed: f = !1,
        isSettingsPreview: g = !1,
        isTimeslotUnavailable: b,
        shouldRenderCaptcha: y,
        confirmButtonDisabled: v,
        classNames: x,
        timeslot: k,
      }) => {
        let w = t.data,
          _ = (0, u.useBookerStoreContext)((e) => e.setFormValues),
          C = (0, u.useBookerStoreContext)((e) => e.bookingData),
          S = (0, u.useBookerStoreContext)((e) => e.rescheduleUid),
          T = (0, u.useBookerStoreContext)((e) => e.username),
          j = (0, u.useBookerStoreContext)((e) => e.isInstantMeeting),
          { timeFormat: N, timezone: E } = (0, eW.useBookerTime)(),
          I = (0, X.useIsEmbed)(),
          { t: A, i18n: O } = (0, e1.useAtomsLocale)(),
          D = (0, m.useMemo)(() => {
            if (!w?.price) return !1;
            let e = (0, aP.getPaymentAppData)(w);
            return w?.price > 0 && !Number.isNaN(e.price) && e.price > 0;
          }, [w]),
          L = (0, m.useMemo)(() => (w && (0, aP.getPaymentAppData)(w)?.currency) || "USD", [w]);
        if (t.isError)
          return (0, i.jsx)(aA.Alert, { severity: "warning", message: A("error_booking_event") });
        if (t.isPending || !t.data) return (0, i.jsx)(nS, {});
        if (!k)
          return (0, i.jsx)(aO, {
            headline: A("timeslot_missing_title"),
            description: A("timeslot_missing_description"),
            Icon: "calendar",
            buttonText: A("timeslot_missing_cta"),
            buttonOnClick: e,
          });
        if (!w)
          return (
            console.warn("No event type found for event", d),
            (0, i.jsx)(aA.Alert, { severity: "warning", message: A("error_booking_event") })
          );
        let R = l.watch("cfToken");
        return (0, i.jsxs)("div", {
          className: "flex flex-col h-full",
          children: [
            (0, i.jsxs)(aD.Form, {
              className: "flex flex-col h-full",
              onChange: () => {
                _(l.getValues());
              },
              form: l,
              handleSubmit: a,
              onInvalid: (e) => {
                let t = e.responses?.message ?? "",
                  a = aR(t);
                if (!a || a === t) return;
                let r = document.querySelector(`[data-fob-field-name="${CSS.escape(a)}"]`);
                r &&
                  (function (e, t = !1) {
                    t || e.scrollIntoView({ behavior: "smooth", block: "start" });
                  })(r, I);
              },
              noValidate: !0,
              children: [
                (0, i.jsx)(n_, {
                  isDynamicGroupBooking: !!(T && T.indexOf("+") > -1),
                  fields: w.bookingFields,
                  locations: w.locations,
                  rescheduleUid: S || void 0,
                  bookingData: C,
                  isPaidEvent: D,
                  paymentCurrency: L,
                }),
                n.hasFormErrors || n.hasDataErrors
                  ? (0, i.jsx)("div", {
                      "data-testid": "booking-fail",
                      children: (0, i.jsx)(aA.Alert, {
                        ref: r,
                        className: "my-2",
                        severity: "info",
                        title: A(S ? "reschedule_fail" : "booking_fail"),
                        message: nI({
                          globalError: n.formErrors,
                          dataError: n.dataErrors,
                          t: A,
                          timeFormat: N,
                          timezone: E,
                          language: O.language,
                        }),
                      }),
                    })
                  : b
                    ? (0, i.jsx)("div", {
                        "data-testid": "slot-not-allowed-to-book",
                        children: (0, i.jsx)(aA.Alert, {
                          severity: "info",
                          title: A("unavailable_timeslot_title"),
                          message: (0, i.jsx)(aM.default, {
                            t: A,
                            i18nKey: "timeslot_unavailable_book_a_new_time",
                            components: [
                              (0, i.jsx)(
                                "button",
                                {
                                  type: "button",
                                  className: "underline",
                                  onClick: e,
                                  children: "Please select a new time",
                                },
                                "please-select-a-new-time-button"
                              ),
                            ],
                          }),
                        }),
                      })
                    : null,
                !h &&
                  (0, i.jsx)("div", {
                    className: "my-3 w-full text-xs text-subtle",
                    children: (0, i.jsx)(aM.default, {
                      t: A,
                      i18nKey: "signing_up_terms",
                      values: { appName: am.APP_NAME },
                      components: [
                        (0, i.jsx)(
                          "a",
                          {
                            className: "text-emphasis hover:underline",
                            href: `${am.WEBSITE_TERMS_URL}`,
                            target: "_blank",
                            rel: "noreferrer",
                            children: "Terms",
                          },
                          "terms"
                        ),
                        (0, i.jsx)(
                          "a",
                          {
                            className: "text-emphasis hover:underline",
                            href: `${am.WEBSITE_PRIVACY_POLICY_URL}`,
                            target: "_blank",
                            rel: "noreferrer",
                            children: "Privacy Policy.",
                          },
                          "privacy"
                        ),
                      ],
                    }),
                  }),
                f &&
                  (0, i.jsxs)("div", {
                    className: "my-3 w-full text-xs text-subtle",
                    children: [
                      A("proceeding_agreement"),
                      " ",
                      (0, i.jsx)(
                        "a",
                        {
                          className: "text-emphasis hover:underline",
                          href: `${am.WEBSITE_TERMS_URL}`,
                          target: "_blank",
                          rel: "noreferrer",
                          children: A("terms"),
                        },
                        "terms"
                      ),
                      " ",
                      A("and"),
                      " ",
                      (0, i.jsx)(
                        "a",
                        {
                          className: "text-emphasis hover:underline",
                          href: `${am.WEBSITE_PRIVACY_POLICY_URL}`,
                          target: "_blank",
                          rel: "noreferrer",
                          children: A("privacy_policy"),
                        },
                        "privacy"
                      ),
                      ".",
                    ],
                  }),
                (0, i.jsx)("div", {
                  className: "flex justify-end mt-auto space-x-2 modalsticky rtl:space-x-reverse",
                  children: j
                    ? (0, i.jsx)(tE.Button, {
                        type: "submit",
                        color: "primary",
                        loading: o.creatingInstantBooking,
                        children: A(D ? "pay_and_book" : "confirm"),
                      })
                    : (0, i.jsxs)(i.Fragment, {
                        children: [
                          !!e &&
                            (0, i.jsx)(tE.Button, {
                              color: "minimal",
                              type: "button",
                              onClick: e,
                              "data-testid": "back",
                              className: x?.backButton,
                              children: A("back"),
                            }),
                          (0, i.jsx)(tE.Button, {
                            type: g ? "button" : "submit",
                            onClick: g ? a : void 0,
                            color: "primary",
                            disabled: !g && ((!!y && !R) || b || v),
                            loading: !g && (o.creatingBooking || o.creatingRecurringBooking || p),
                            className: x?.confirmButton,
                            "data-testid":
                              S && C ? "confirm-reschedule-button" : "confirm-book-button",
                            children: A(
                              S && C
                                ? "reschedule"
                                : s
                                  ? D
                                    ? "pay_and_book"
                                    : "confirm"
                                  : "verify_email_button"
                            ),
                          }),
                        ],
                      }),
                }),
              ],
            }),
            c,
          ],
        });
      };
    function nj(e) {
      return !!e && "object" == typeof e && !Array.isArray(e);
    }
    function nN(e) {
      return "string" == typeof e && e.length > 0 ? e : void 0;
    }
    function nE(e) {
      if (!nj(e)) return;
      let t = e.statusCode ?? e.status;
      if ("number" == typeof t) return t;
      let a = e.data;
      if (nj(a) && "number" == typeof a.statusCode) return a.statusCode;
      let r = e.error;
      if (!nj(r)) return;
      let n = r.details;
      if (nj(n)) return "number" == typeof n.statusCode ? n.statusCode : void 0;
    }
    let nI = ({ globalError: e, dataError: t, t: a, timeFormat: r, timezone: n, language: o }) => {
      if (e) return e?.message;
      let s = "",
        l = 0;
      if (t?.message === aL.BookerLimitExceededReschedule) {
        let e = az({ date: t.data.startTime, timeFormat: r, timeZone: n, language: o });
        s = `${e.date} ${e.time}`;
      }
      t?.message === aL.BookerLimitExceeded && t.data?.count && (l = t.data.count);
      let c = !(function (e) {
          if (!nj(e)) return !0;
          let t = nE(e);
          if (t && t >= 500) return !0;
          if (
            !(function (e, t) {
              if (e instanceof SyntaxError || e instanceof TypeError) return !0;
              if (!nj(e)) return !1;
              let a = e.cause;
              return !!(a instanceof SyntaxError || a instanceof TypeError) || void 0 === t;
            })(e, t)
          )
            return !1;
          let a = nN(e.message);
          return (
            (function (e) {
              if (!e) return !1;
              let t = e.toLowerCase();
              return [
                "the string did not match the expected pattern",
                "unexpected token",
                "json parse error",
                "json.parse",
                "invalid json response",
              ].some((e) => t.includes(e));
            })(a) ||
            (function (e) {
              if (!e) return !1;
              let t = e.toLowerCase();
              return [
                "failed to fetch",
                "load failed",
                "network error",
                "networkerror",
                "network request failed",
              ].some((e) => t.includes(e));
            })(a)
          );
        })(t)
          ? t?.message === aL.BookerLimitExceeded
            ? "booker_upcoming_limit_reached"
            : t?.message
          : aI,
        u = (function (e) {
          if (!nj(e)) return;
          let t = e.data;
          if (nj(t)) {
            let e = nN(t.traceId);
            if (e) return e;
          }
          let a = e.error;
          if (!nj(a)) return;
          let r = a.details;
          if (nj(r)) return nN(r.traceId);
        })(t),
        d = nE(t);
      return c
        ? (0, i.jsxs)(i.Fragment, {
            children: [
              a(c, { date: s, count: l }),
              (d || u) &&
                (0, i.jsxs)("div", {
                  className: "mt-2 space-y-1 text-xs text-subtle",
                  children: [
                    d &&
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsxs)("span", {
                            className: "font-medium",
                            children: [a("error_status_code"), ":"],
                          }),
                          " ",
                          (0, i.jsx)("code", { className: "font-mono", children: d }),
                        ],
                      }),
                    u &&
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsxs)("span", {
                            className: "font-medium",
                            children: [a("trace_reference_id"), ":"],
                          }),
                          " ",
                          (0, i.jsx)("code", {
                            className: "font-mono break-all select-all",
                            children: u,
                          }),
                        ],
                      }),
                  ],
                }),
            ],
          })
        : (0, i.jsx)(i.Fragment, { children: a(aI) });
    };
    var nA = e.i(660391);
    let nO = (e, t) => {
        if (!e) return null;
        let a = Math.floor(e / 60),
          r = "";
        (e %= 60) > 0 &&
          (r =
            1 === e
              ? t("minute_one_short", { count: 1 })
              : t("multiple_duration_timeUnit_short", { count: e, unit: "minute" }));
        let n = "";
        return (a > 0 &&
          (n =
            1 === a
              ? t("hour_one_short", { count: 1 })
              : t("multiple_duration_timeUnit_short", { count: a, unit: "hour" })),
        n && r)
          ? `${n} ${r}`
          : n || r;
      },
      nD = ({ event: e, isPlatform: t = !1 }) => {
        let { t: a } = (0, e1.useAtomsLocale)(),
          r = (0, m.useRef)([]),
          [n, o, s, l] = (0, u.useBookerStoreContext)((e) => [
            e.selectedDuration,
            e.setSelectedDuration,
            e.state,
            e.isSettingsPreview,
          ]),
          {
            ref: c,
            calculateScroll: d,
            leftVisible: p,
            rightVisible: h,
          } = (function () {
            let e = (0, m.useRef)(null),
              [t, a] = (0, m.useState)({ left: !1, right: !1 });
            return (
              (0, m.useEffect)(() => {
                let t = e.current;
                t &&
                  a({
                    left: !(t.scrollLeft <= 0),
                    right: !(t.scrollWidth <= t.clientWidth + t.scrollLeft),
                  });
              }, [e.current?.scrollWidth, e.current?.clientWidth]),
              {
                ref: e,
                calculateScroll: (e) => {
                  let t = e.currentTarget,
                    r = t.scrollWidth <= t.clientWidth + t.scrollLeft + 1;
                  a({ left: t.scrollLeft > 0, right: !r });
                },
                leftVisible: t.left,
                rightVisible: t.right,
              }
            );
          })(),
          f = "isDynamic" in e && e.isDynamic,
          g = (0, X.useIsEmbed)();
        if (
          ((0, m.useEffect)(() => {
            let t = !!new URLSearchParams(window.location.search).get("rescheduleUid");
            !n && !t && (e.metadata?.multipleDuration || f) && o(e.length, { shouldUpdateUrl: !1 });
          }, [n, o, e.metadata?.multipleDuration, e.length, f]),
          (0, m.useEffect)(() => {
            let e = setTimeout(() => {
              !g &&
                !l &&
                n &&
                r.current[n] &&
                r.current[n]?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "center",
                });
            }, 100);
            return () => clearTimeout(e);
          }, [n, g, l]),
          !e?.metadata?.multipleDuration && !f)
        )
          return (0, i.jsx)(i.Fragment, { children: nO(e.length, a) });
        let b = e?.metadata?.multipleDuration || [15, 30, 60, 90];
        if (e?.metadata?.hideDurationSelectorInBookingPage || "booking" === s)
          return (0, i.jsx)(i.Fragment, { children: nO(n || e.length, a) });
        let y = n || e.length;
        return y
          ? (0, i.jsxs)("div", {
              className:
                "border-default relative mr-5 flex flex-row items-center justify-between rounded-md border",
              children: [
                p &&
                  (0, i.jsxs)("button", {
                    onClick: () => {
                      c.current && (c.current.scrollLeft -= 100);
                    },
                    className: "absolute bottom-0 left-0 flex",
                    children: [
                      (0, i.jsx)("div", {
                        className: "bg-default flex h-9 w-5 items-center justify-end rounded-md",
                        children: (0, i.jsx)(ar.Icon, {
                          name: "chevron-left",
                          className: "text-subtle h-4 w-4",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "to-default flex h-9 w-5 bg-linear-to-l from-transparent",
                      }),
                    ],
                  }),
                (0, i.jsx)("ul", {
                  className:
                    "bg-default no-scrollbar flex max-w-full items-center gap-0.5 overflow-x-auto rounded-md p-1",
                  onScroll: (e) => d(e),
                  ref: c,
                  children: b.map((e, t) =>
                    (0, i.jsx)(
                      "li",
                      {
                        "data-testid": `multiple-choice-${e}mins`,
                        "data-active": y === e ? "true" : "false",
                        onClick: () => o(e),
                        ref: (t) => {
                          r.current[e] = t;
                        },
                        className: (0, t9.cn)(
                          y === e ? "bg-emphasis" : "hover:text-emphasis",
                          "text-default cursor-pointer rounded-[4px] px-3 py-1.5 text-sm leading-tight transition"
                        ),
                        children: (0, i.jsx)("div", { className: "w-max", children: nO(e, a) }),
                      },
                      t
                    )
                  ),
                }),
                h &&
                  (0, i.jsxs)("button", {
                    onClick: () => {
                      c.current && (c.current.scrollLeft += 100);
                    },
                    className: "absolute bottom-0 right-0 flex",
                    children: [
                      (0, i.jsx)("div", {
                        className: "to-default flex h-9 w-5 bg-linear-to-r from-transparent",
                      }),
                      (0, i.jsx)("div", {
                        className: "bg-default flex h-9 w-5 items-center justify-end rounded-md",
                        children: (0, i.jsx)(ar.Icon, {
                          name: "chevron-right",
                          className: "text-subtle h-4 w-4",
                        }),
                      }),
                    ],
                  }),
              ],
            })
          : null;
      },
      nL = ({ child: e, eventLength: t }) => {
        let { i18n: a, t: r } = (0, e1.useAtomsLocale)(),
          n = (0, u.useBookerStoreContext)((e) => e.selectedTimeslot),
          o = (0, u.useBookerStoreContext)((e) => e.selectedDuration),
          s = (0, u.useBookerStoreContext)((e) => e.recurringEventCount),
          { timeFormat: l, timezone: c } = (0, eW.useBookerTime)();
        return n
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsxs)("h1", {
                  className: "font-heading text-emphasis text-xl leading-5",
                  children: [r("confirm_your_details"), " "],
                }),
                (0, i.jsxs)("div", {
                  className: "my-4 flex flex-wrap gap-2 rounded-md leading-none",
                  children: [
                    (0, i.jsx)(nA.Badge, {
                      variant: "grayWithoutHover",
                      startIcon: "calendar",
                      size: "lg",
                      children: (0, i.jsx)(aF, {
                        date: n,
                        timeFormat: l,
                        timeZone: c,
                        language: a.language,
                      }),
                    }),
                    (o || t) &&
                      (0, i.jsx)(nA.Badge, {
                        variant: "grayWithoutHover",
                        startIcon: "clock",
                        size: "lg",
                        children: (0, i.jsx)("span", { children: nO(o || t, r) }),
                      }),
                    s &&
                      s > 1 &&
                      (0, i.jsx)(nA.Badge, {
                        variant: "grayWithoutHover",
                        startIcon: "refresh-ccw",
                        size: "lg",
                        children: (0, i.jsx)("span", {
                          children: r("repeats_num_times", { count: s }),
                        }),
                      }),
                  ],
                }),
                e,
              ],
            })
          : null;
      },
      nR = ({ visible: e, onCancel: t, children: a, isPlatform: r = !1, eventLength: n }) =>
        (0, i.jsx)(t4.Dialog, {
          open: e,
          onOpenChange: t,
          children: (0, i.jsx)(t4.DialogContent, {
            enableOverflow: !0,
            className:
              "[&_.modalsticky]:border-t-subtle [&_.modalsticky]:bg-default max-h-[80vh] pb-0 [&_.modalsticky]:sticky [&_.modalsticky]:bottom-0 [&_.modalsticky]:left-0 [&_.modalsticky]:right-0 [&_.modalsticky]:-mx-8 [&_.modalsticky]:border-t [&_.modalsticky]:px-8 [&_.modalsticky]:py-4",
            children: (0, i.jsx)(nL, { child: a, eventLength: n, onCancel: t }),
          }),
        });
    var nB = e.i(604888),
      nP = e.i(574153);
    let nM = ({
      event: e,
      slots: t = {},
      isLoading: a,
      classNames: r,
      scrollToTimeSlots: n,
      showNoAvailabilityDialog: o,
      onDateChange: s,
    }) => {
      let { i18n: l } = (0, eS.useLocale)(),
        [d, m, h] = (0, u.useBookerStoreContext)(
          (e) => [e.month, e.selectedDate, e.layout],
          p.shallow
        ),
        [f, g, b] = (0, u.useBookerStoreContext)(
          (e) => [e.setSelectedDate, e.setMonth, e.setDayCount],
          p.shallow
        ),
        y = (0, c.useSlotsViewOnSmallScreen)(),
        v = (e) => {
          (g(e.format("YYYY-MM")), y || f({ date: e.format("YYYY-MM-DD") }), b(null));
        },
        x = (0, tS.useNonEmptyScheduleDays)(t),
        { moveToNextMonthOnNoAvailability: k } = (({
          browsingDate: e,
          nonEmptyScheduleDays: t,
          onMonthChange: a,
          isLoading: r,
        }) => {
          if (r) return { moveToNextMonthOnNoAvailability: () => {} };
          let n = t.filter((t) => (0, e2.default)(t).isSame(e, "month"));
          return {
            moveToNextMonthOnNoAvailability: () => {
              (0, e2.default)().startOf("month").format("YYYY-MM") != e.format("YYYY-MM") ||
                n.length ||
                a(e.add(1, "month"));
            },
          };
        })({
          browsingDate: d ? (0, e2.default)(d) : (0, e2.default)().startOf("month"),
          nonEmptyScheduleDays: x,
          onMonthChange: v,
          isLoading: a ?? !0,
        });
      k();
      let w = "month_view" !== h && "mobile" !== h,
        _ = {
          periodType: "UNLIMITED",
          periodStartDate: null,
          periodEndDate: null,
          periodDays: null,
          periodCountCalendarDays: !1,
          ...(e?.data && {
            periodType: e.data.periodType,
            periodStartDate: e.data.periodStartDate,
            periodEndDate: e.data.periodEndDate,
            periodDays: e.data.periodDays,
            periodCountCalendarDays: e.data.periodCountCalendarDays,
          }),
        };
      return (0, i.jsx)(nB.DatePicker, {
        ...{
          customClassNames: {
            datePickerTitle: r?.datePickerTitle,
            datePickerDays: r?.datePickerDays,
            datePickersDates: r?.datePickerDate,
            datePickerDatesActive: r?.datePickerDatesActive,
            datePickerToggle: r?.datePickerToggle,
          },
        },
        className: r?.datePickerContainer,
        isLoading: a,
        onChange: (e, t) => {
          let a = (null === e ? null : e.format("YYYY-MM-DD")) !== m;
          (f({
            date: null === e ? null : e.format("YYYY-MM-DD"),
            omitUpdatingParams: t,
            preventMonthSwitching: !w,
          }),
            a && s?.());
        },
        onMonthChange: v,
        includedDates: x,
        locale: l.language,
        browsingDate: d ? (0, e2.default)(d) : void 0,
        selected: (0, e2.default)(m),
        weekStart: (0, nP.weekdayToWeekIndex)(e?.data?.subsetOfUsers?.[0]?.weekStart),
        slots: t,
        scrollToTimeSlots: n,
        periodData: _,
        isCompact: w,
        showNoAvailabilityDialog: o,
        slotsViewOnSmallScreen: y,
      });
    };
    var nz = e.i(528187);
    let nU = (e) => !!e;
    function nF({ eventLocationType: e, isTooltip: t, isPlatform: a = !1 }) {
      var r;
      return (0, i.jsx)("img", {
        src: `${a && void 0 !== Y.default ? "https://app.cal.com" : ""}${e.iconUrl}`,
        className: (0, t9.cn)(
          ((r = e?.iconUrl),
          r?.includes("-dark") || !r?.startsWith("/app-store")
            ? t
              ? "invert dark:invert-0"
              : "dark:invert"
            : ""),
          "me-[10px] h-4 w-4"
        ),
        alt: `${e.label} icon`,
      });
    }
    function nV({ locations: e, isPlatform: t = !1 }) {
      let { t: a } = (0, e1.useAtomsLocale)();
      return (0, i.jsxs)("div", {
        className: "my-2 me-2 flex w-full flex-col stack-y-3 wrap-break-word",
        children: [
          (0, i.jsx)("p", { children: a("select_on_next_step") }),
          e.map((e, r) => {
            let n = rX(e.type);
            if (!n) return null;
            let o = e.customLabel || r1(e, n, a);
            return (0, i.jsxs)(
              "div",
              {
                className: "font-sm flex flex-row items-center",
                children: [
                  (0, i.jsx)(nF, { eventLocationType: n, isTooltip: !0, isPlatform: t }),
                  (0, i.jsx)("p", { className: "line-clamp-1", children: o }),
                ],
              },
              `${e.type}-${r}`
            );
          }),
        ],
      });
    }
    function n$({ locations: e, isPlatform: t = !1 }) {
      let { t: a } = (0, e1.useAtomsLocale)(),
        r = e
          .map((e, r) => {
            let n = rX(e.type);
            if (!n) return null;
            let o = e?.customLabel || r1(e, n, a);
            return (0, i.jsxs)(
              "div",
              {
                className: "flex flex-row items-center text-sm font-medium",
                children: [
                  "/link.svg" === n.iconUrl
                    ? (0, i.jsx)(ar.Icon, {
                        name: "external-link",
                        className: "text-default h-4 w-4 ltr:mr-[10px] rtl:ml-[10px]",
                      })
                    : (0, i.jsx)(nF, { eventLocationType: n, isTooltip: !1, isPlatform: t }),
                  (0, i.jsx)(tD.Tooltip, {
                    content: o,
                    children: (0, i.jsx)("p", { className: "line-clamp-1", children: o }),
                  }),
                ],
              },
              `${e.type}-${r}`
            );
          })
          .filter(nU);
      return r.length > 1
        ? (0, i.jsxs)("div", {
            className: "flex flex-row items-center text-sm font-medium",
            children: [
              t
                ? (0, i.jsx)(ar.Icon, {
                    name: "map-pin",
                    className: (0, t9.cn)("me-[10px] h-4 w-4 opacity-70 dark:invert"),
                  })
                : (0, i.jsx)("img", {
                    src: "/map-pin-dark.svg",
                    className: (0, t9.cn)("me-[10px] h-4 w-4 opacity-70 dark:invert"),
                    alt: "map-pin",
                  }),
              (0, i.jsx)(tD.Tooltip, {
                content: (0, i.jsx)(nV, { locations: e, isPlatform: t }),
                children: (0, i.jsx)("p", {
                  className: "line-clamp-1",
                  children: a("location_options", { locationCount: r.length }),
                }),
              }),
            ],
          })
        : 1 === r.length
          ? (0, i.jsx)("div", {
              className:
                "text-default mr-6 flex w-full flex-col stack-y-4 wrap-break-word text-sm rtl:mr-2",
              children: r,
            })
          : null;
    }
    var nq =
      (((r = {})[(r.YEARLY = 0)] = "YEARLY"),
      (r[(r.MONTHLY = 1)] = "MONTHLY"),
      (r[(r.WEEKLY = 2)] = "WEEKLY"),
      (r[(r.DAILY = 3)] = "DAILY"),
      (r[(r.HOURLY = 4)] = "HOURLY"),
      (r[(r.MINUTELY = 5)] = "MINUTELY"),
      (r[(r.SECONDLY = 6)] = "SECONDLY"),
      r);
    let nW = ({ event: e }) => {
      let t = e.recurringEvent?.count || null,
        { t: a, i18n: r } = (0, e1.useAtomsLocale)(),
        [n, o, s, l] = (0, u.useBookerStoreContext)((e) => [
          e.setRecurringEventCount,
          e.recurringEventCount,
          e.setRecurringEventCountQueryParam,
          e.recurringEventCountQueryParam,
        ]),
        c = (0, u.useBookerStoreContext)((e) => e.selectedTimeslot),
        d = (0, u.useBookerStoreContext)((e) => e.state),
        { timezone: p, timeFormat: h } = (0, eW.useBookerTime)(),
        [f, g] = (0, m.useState)(!1),
        b = (e) => {
          let a = parseInt(e);
          !isNaN(a) && a >= 1 && null !== t && a <= t ? (n(a), g(!1)) : (n(t), g(!0));
        };
      if (
        ((0, m.useEffect)(() => {
          e.recurringEvent?.count && (l ? b(l) : (n(t), s(t)));
        }, [n, e.recurringEvent, o, l]),
        !e.recurringEvent)
      )
        return null;
      if ("booking" === d && o && c) {
        let t,
          [n, s] = eJ(
            {
              startDate: c,
              timeZone: p,
              recurringEvent: e.recurringEvent,
              recurringCount: o,
              selectedTimeFormat: h,
            },
            r.language
          ),
          l = ((e) => {
            let { dates: t, timezone: a } = e;
            if (!t.length) return [];
            let r = (0, eY.default)(t[0]).tz(a),
              n = r.hour(),
              i = r.minute();
            return t.map((e, t) => {
              if (0 === t) return !1;
              let r = (0, eY.default)(e).tz(a);
              return r.hour() !== n || r.minute() !== i;
            });
          })({ dates: s, timezone: p }),
          u = ((t = !1), l.map((e) => !!e && !t && ((t = !0), !0)));
        return (0, i.jsxs)("div", {
          "data-testid": "recurring-dates",
          children: [
            n
              .slice(0, 5)
              .map((e, t) =>
                (0, i.jsxs)(
                  "p",
                  {
                    children: [
                      e,
                      u[t] &&
                        (0, i.jsxs)(i.Fragment, {
                          children: [
                            " ",
                            (0, i.jsx)(nA.Badge, {
                              variant: "orange",
                              size: "sm",
                              children: a("time_shift"),
                            }),
                          ],
                        }),
                    ],
                  },
                  t
                )
              ),
            n.length > 5 &&
              (0, i.jsx)(tD.Tooltip, {
                content: n
                  .slice(5)
                  .map((e, t) =>
                    (0, i.jsxs)(
                      "p",
                      {
                        children: [
                          e,
                          u[t + 5] &&
                            (0, i.jsxs)(i.Fragment, {
                              children: [
                                " ",
                                (0, i.jsx)(nA.Badge, {
                                  variant: "orange",
                                  size: "sm",
                                  children: a("time_shift"),
                                }),
                              ],
                            }),
                        ],
                      },
                      t
                    )
                  ),
                children: (0, i.jsxs)("p", {
                  className: " text-sm",
                  children: ["+ ", a("plus_more", { count: n.length - 5 })],
                }),
              }),
          ],
        });
      }
      return (0, i.jsxs)(i.Fragment, {
        children: [
          (({ t: e, recurringEvent: t }) =>
            t.interval && t.freq >= 0
              ? e("every_for_freq", {
                  freq: `${t.interval > 1 ? t.interval : ""} ${e(nq[t.freq].toString().toLowerCase(), { count: t.interval })}`,
                })
              : "")({ t: a, recurringEvent: e.recurringEvent }),
          (0, i.jsx)("br", {}),
          (0, i.jsx)(ai.Input, {
            className: "my-1 mr-3 inline-flex h-[26px] w-[46px] px-1 py-0",
            type: "number",
            min: "1",
            max: e.recurringEvent.count,
            defaultValue: l || e.recurringEvent.count,
            "data-testid": "occurrence-input",
            onChange: (e) => {
              (s(parseInt(e.target.value)), b(e.target.value));
            },
          }),
          a("occurrence", { count: o || e.recurringEvent.count }),
          f &&
            (0, i.jsx)("div", {
              className: "-ml-4 mr-4 mt-2 flex",
              children: (0, i.jsx)(aA.Alert, {
                severity: "warning",
                title: a("enter_number_between_range", { maxOccurences: t }),
              }),
            }),
        ],
      });
    };
    var nH = e.i(182769);
    let nZ = [
        "BIF",
        "CLP",
        "DJF",
        "GNF",
        "JPY",
        "KMF",
        "KRW",
        "MGA",
        "PYG",
        "RWF",
        "UGX",
        "VND",
        "VUV",
        "XAF",
        "XOF",
        "XPF",
      ],
      nY = (0, m.forwardRef)(function (e, t) {
        return (0, i.jsxs)("svg", {
          ref: t,
          className: e.className,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 360 360",
          children: [
            (0, i.jsx)("rect", {
              fill: "currentColor",
              x: "201.48",
              y: "37.16",
              width: "23.49",
              height: "40.14",
              transform: "translate(21.82 -52.79) rotate(14.87)",
            }),
            (0, i.jsx)("rect", {
              fill: "currentColor",
              x: "135.03",
              y: "287.5",
              width: "23.49",
              height: "40.14",
              transform: "translate(83.82 -27.36) rotate(14.87)",
            }),
            (0, i.jsx)("rect", {
              fill: "currentColor",
              x: "184.27",
              y: "38.29",
              width: "23.49",
              height: "167.49",
              transform: "translate(364.26 -36.11) rotate(104.87)",
            }),
            (0, i.jsx)("rect", {
              fill: "currentColor",
              x: "168.36",
              y: "98.26",
              width: "23.49",
              height: "167.49",
              transform: "translate(402.22 54.61) rotate(104.87)",
            }),
            (0, i.jsx)("rect", {
              fill: "currentColor",
              x: "152.89",
              y: "156.52",
              width: "23.49",
              height: "167.49",
              transform: "translate(439.1 142.78) rotate(104.87)",
            }),
          ],
        });
      });
    function nG({ displaySymbol: e, price: t, formattedPrice: a }) {
      let [r, n] = (0, m.useState)("loading...");
      return (
        (0, m.useEffect)(() => {
          (async () => {
            let e = await nH.fiat.getFiatValue({ satoshi: t, currency: "USD" });
            n(`$${e.toFixed(2)}`);
          })();
        }, [t]),
        (0, i.jsx)(tD.Tooltip, {
          content: r,
          children: (0, i.jsxs)("div", {
            className: "inline-flex items-center justify-center",
            children: [e && (0, i.jsx)(nY, { className: "h-4 w-4" }), a],
          }),
        })
      );
    }
    let nK = ({ price: e, currency: t, displayAlternateSymbol: a = !0 }) => {
      if (0 === e) return null;
      let r = ((e, t, a = "en") => {
        if ("BTC" === t) return `${e} sats`;
        {
          let r = t?.toUpperCase() || "USD";
          return `${Intl.NumberFormat(a, { style: "currency", currency: r }).format(nZ.includes(r.toUpperCase()) ? e : e / 100)}`;
        }
      })(e, t);
      return "BTC" !== t
        ? (0, i.jsx)(i.Fragment, { children: r })
        : (0, i.jsx)(nG, { displaySymbol: a, price: e, formattedPrice: r });
    };
    var nQ = e.i(987365),
      nJ =
        (((n = {}).DURATION = "DURATION"),
        (n.LOCATION = "LOCATION"),
        (n.REQUIRES_CONFIRMATION = "REQUIRES_CONFIRMATION"),
        (n.OCCURENCES = "OCCURENCES"),
        (n.PRICE = "PRICE"),
        n);
    let nX = ["REQUIRES_CONFIRMATION", "DURATION", "OCCURENCES", "LOCATION", "PRICE"],
      n0 = ({
        customIcon: e,
        icon: t,
        iconUrl: a,
        children: r,
        highlight: n,
        contentClassName: o,
        className: s,
        isDark: l,
        ...c
      }) =>
        m.default.Children.count(r)
          ? (0, i.jsxs)("div", {
              className: (0, t9.cn)(
                "flex items-start justify-start text-sm",
                n ? "text-emphasis" : "text-default",
                s
              ),
              ...c,
              children: [
                a
                  ? (0, i.jsx)("img", {
                      src: a,
                      alt: "",
                      className: (0, t9.cn)(
                        "mr-2 mt-[2px] h-4 w-4 shrink-0",
                        void 0 === l && "filter-[invert(0.5)_brightness(0.5)]",
                        (void 0 === l || l) && "dark:filter-[invert(0.65)_brightness(0.9)]"
                      ),
                    })
                  : (0, i.jsx)(i.Fragment, {
                      children:
                        e ||
                        (!!t &&
                          (0, i.jsx)(ar.Icon, {
                            name: t,
                            className: "relative z-20 mr-2 mt-[2px] h-4 w-4 shrink-0 rtl:ml-2",
                          })),
                    }),
                (0, i.jsx)("div", {
                  className: (0, t9.cn)("relative z-10 max-w-full wrap-break-word", o),
                  children: r,
                }),
              ],
            })
          : null,
      n1 = ({ event: e, blocks: t = nX }) => {
        let { t: a } = (0, e1.useAtomsLocale)(),
          r = (0, er.useBookerStore)((e) => e.rescheduleUid),
          n = (0, er.useBookerStore)((e) => e.isInstantMeeting);
        return (0, i.jsx)(i.Fragment, {
          children: t.map((t) => {
            if ("function" == typeof t) return (0, i.jsx)(m.Fragment, { children: t(e) }, t.name);
            switch (t) {
              case "DURATION":
                return (0, i.jsx)(
                  n0,
                  {
                    icon: "clock",
                    className: "items-center",
                    children: (0, i.jsx)(nD, { event: e }),
                  },
                  t
                );
              case "LOCATION":
                if (!e?.locations?.length || n || e.enablePerHostLocations) return null;
                return (0, i.jsx)(n0, { children: (0, i.jsx)(n$, { locations: e.locations }) }, t);
              case "REQUIRES_CONFIRMATION":
                if (!e.requiresConfirmation) return null;
                return (0, i.jsx)(
                  n0,
                  { icon: "square-check", children: a("requires_confirmation") },
                  t
                );
              case "OCCURENCES":
                if (!e.recurringEvent || r) return null;
                return (0, i.jsx)(
                  n0,
                  { icon: "refresh-ccw", children: (0, i.jsx)(nW, { event: e }) },
                  t
                );
              case "PRICE": {
                let a = (0, aP.getPaymentAppData)(e);
                if ((null != e.price && e.price <= 0) || a.price <= 0) return null;
                let r = e.currency ?? a.currency;
                return (0, i.jsx)(
                  n0,
                  {
                    customIcon: (0, i.jsx)(nQ.PriceIcon, {
                      className: "relative z-20 mr-2 mt-[2px] h-4 w-4 shrink-0 rtl:ml-2",
                      currency: r,
                    }),
                    children: (0, i.jsx)(nK, {
                      price: a.price,
                      currency: r,
                      displayAlternateSymbol: !1,
                    }),
                  },
                  t
                );
              }
              default:
                return null;
            }
          }),
        });
      },
      n2 = ({ showExact: e = !0, bookedSeats: t, totalSeats: a, variant: r = "whole" }) => {
        let { t: n } = (0, eS.useLocale)(),
          o = a - t;
        return (0, i.jsx)("span", {
          className: "truncate",
          children: e
            ? `${o}${"fraction" === r ? ` / ${a}` : ""} ${n("seats_available", { count: o })}`
            : t / a >= 0.83
              ? n("seats_nearly_full")
              : t / a >= 0.5
                ? n("seats_half_full")
                : n("seats_available", { count: o }),
        });
      };
    var n3 = e.i(865793),
      n4 = e.i(619212),
      n6 = e.i(507921);
    let n5 = function (e) {
        let t = e.items.length,
          a = e.truncateAfter || 4,
          r = e.items.filter((e) => e.image).slice(0, a),
          n = t - r.length;
        return r.length
          ? (0, i.jsxs)("ul", {
              className: (0, t9.cn)("flex items-center", e.className),
              children: [
                r.map((t, a) =>
                  (0, i.jsx)(
                    "li",
                    {
                      className: "-mr-1 inline-block",
                      children: (0, i.jsx)(n6.Avatar, {
                        "data-testid": "avatar",
                        className: "border-subtle",
                        imageSrc: t.image,
                        title: t.title,
                        alt: t.alt || "",
                        size: e.size,
                        href: t.href,
                      }),
                    },
                    a
                  )
                ),
                n > 0 &&
                  (0, i.jsx)("li", {
                    className: (0, t9.cn)(
                      "bg-inverted relative -mr-1 inline-flex justify-center overflow-hidden rounded-full",
                      "sm" === e.size ? "min-w-6 h-6" : "min-w-16 h-16"
                    ),
                    children: (0, i.jsxs)("span", {
                      className: (0, t9.cn)(
                        " text-inverted m-auto flex h-full w-full items-center justify-center text-center",
                        "sm" === e.size ? "text-[12px]" : "text-2xl"
                      ),
                      children: ["+", e.hideTruncatedAvatarsCount ? null : n],
                    }),
                  }),
              ],
            })
          : (0, i.jsx)(i.Fragment, {});
      },
      n9 = (e) => {
        if (e?.avatarUrl) {
          var t;
          return ((t = e.avatarUrl), et.z.string().url().safeParse(t).success ? t : am.CAL_URL + t);
        }
        return am.CAL_URL + am.AVATAR_FALLBACK;
      };
    var n8 = e.i(659194);
    let n7 = ({
        schedulingType: e,
        users: t = [],
        profile: a,
        entity: r,
        isPrivateLink: n,
        roundRobinHideOrgAndTeam: o,
        hideOrgTeamAvatar: s,
        isPlatform: l = !1,
      }) => {
        let c = (0, er.useBookerStore)((e) => e.username),
          u = !!(c && c.indexOf("+") > -1),
          d = (0, X.useIsEmbed)(),
          m = e !== n4.SchedulingType.ROUND_ROBIN ? t : [],
          p =
            (a.name && e === n4.SchedulingType.ROUND_ROBIN) ||
            !t.length ||
            (a.name !== t[0].name && e === n4.SchedulingType.COLLECTIVE);
        if (e === n4.SchedulingType.ROUND_ROBIN && o)
          return (0, i.jsx)("div", { className: "h-6" });
        if (e === n4.SchedulingType.ROUND_ROBIN && s)
          return (0, i.jsx)("p", {
            className: "text-subtle pt-6 text-sm font-semibold",
            children: a.name,
          });
        let h =
          r && !s && !u && (a.image || r.logoUrl) && r.teamSlug
            ? [
                {
                  href:
                    d || l || n || r.hideProfileLink
                      ? null
                      : r.teamSlug
                        ? (0, n8.getTeamUrlSync)({
                            orgSlug: r.orgSlug ?? null,
                            teamSlug: r.teamSlug,
                          })
                        : (0, n8.getBookerBaseUrlSync)(r.orgSlug ?? null),
                  image: r.logoUrl ?? a.image ?? "",
                  alt: r.name ?? a.name ?? "",
                  title: r.name ?? a.name ?? "",
                },
              ]
            : [];
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n5, {
              size: "sm",
              className: "border-muted",
              items: [
                ...h,
                ...m.map((e) => ({
                  href:
                    l || n || r?.hideProfileLink
                      ? null
                      : `${(0, n8.getBookerBaseUrlSync)(e.profile?.organization?.slug ?? null)}/${e.profile?.username}?redirect=false`,
                  alt: e.name || "",
                  title: e.name || "",
                  image: n9(e),
                })),
              ],
            }),
            (0, i.jsx)("p", {
              className: "text-subtle mt-2 text-sm font-semibold",
              children: p
                ? a.name
                : m
                    .map((e) => e.name)
                    .filter((e) => e)
                    .join(", "),
            }),
          ],
        });
      },
      ie = () =>
        (0, i.jsxs)("div", {
          className: "flex flex-col",
          children: [
            (0, i.jsx)(nC.SkeletonText, { className: "h-6 w-6 rounded-full" }),
            (0, i.jsx)(nC.SkeletonText, { className: "mt-2 h-5 w-32" }),
            (0, i.jsx)(nC.SkeletonText, { className: "mt-2 h-8 w-48" }),
            (0, i.jsx)("div", {
              className: "mt-8",
              children: Array.from({ length: 4 }).map((e, t) =>
                (0, i.jsxs)(
                  "div",
                  {
                    className: "mb-2 flex flex-row items-center",
                    children: [
                      (0, i.jsx)(nC.SkeletonText, { className: "mr-3 h-5 w-5 rounded-full" }),
                      (0, i.jsx)(nC.SkeletonText, {
                        className: (0, t9.cn)("h-6", t > 1 ? "w-24" : "w-32"),
                      }),
                    ],
                  },
                  t
                )
              ),
            }),
          ],
        }),
      it = ({ children: e, as: t, className: a }) =>
        (0, i.jsx)(t || "h1", {
          "data-testid": "event-title",
          className: (0, t9.cn)("text-default break-words text-xl font-semibold", a),
          children: e,
        });
    var ia = e.i(37171);
    let ir = (0, eU.default)(() => e.A(933503).then((e) => e.TimezoneSelect), {
      loadableGenerated: { modules: [993225] },
      ssr: !1,
    });
    function ii({ event: e, timeZones: t, TimezoneSelect: a, classNames: r }) {
      let { timezone: n } = (0, eW.useBookerTime)(),
        o = (0, tm.useTimePreferences)((e) => e.setTimezone),
        s = (0, u.useBookerStoreContext)((e) => e.setTimezone),
        l = (0, u.useBookerStoreContext)((e) => e.state);
      return (0, i.jsx)("div", {
        className: "min-w-0 flex-1",
        children: (0, i.jsx)(n0, {
          className:
            "cursor-pointer [&_.current-timezone:before]:focus-within:opacity-100 [&_.current-timezone:before]:hover:opacity-100",
          contentClassName: "relative min-w-0 max-w-full",
          icon: "globe",
          children:
            "booking" === l
              ? n
              : (0, i.jsx)("span", {
                  className: (0, tV.default)(
                    "current-timezone flex min-w-32 max-w-full items-center justify-start before:absolute before:inset-0 before:top-[-3px] before:bottom-[-3px] before:left-[-30px] before:w-[calc(100%+35px)] before:rounded-md before:bg-subtle before:py-3 before:opacity-0 before:transition-opacity",
                    "-mt-[2px] h-6",
                    e.lockTimeZoneToggleOnBookingPage ? "cursor-not-allowed" : ""
                  ),
                  "data-testid": "event-meta-current-timezone",
                  children: (0, i.jsx)(a ?? ir, {
                    timeZones: t,
                    menuPosition: "absolute",
                    timezoneSelectCustomClassname: r?.eventMetaTimezoneSelect,
                    classNames: {
                      control: () =>
                        "min-h-0! p-0 w-full border-0 bg-transparent focus-within:ring-0 shadow-none!",
                      menu: () => "w-64! max-w-[90vw] mb-1 ",
                      singleValue: () => "text-default py-1",
                      indicatorsContainer: () => "ml-auto",
                      container: () => "max-w-full",
                    },
                    value: e.lockTimeZoneToggleOnBookingPage
                      ? e.lockedTimeZone || e.schedule?.timeZone || ia.CURRENT_TIMEZONE
                      : n,
                    onChange: ({ value: e }) => {
                      (o(e), s(e));
                    },
                    isDisabled: e.lockTimeZoneToggleOnBookingPage,
                  }),
                }),
        }),
      });
    }
    function io({ children: e, className: t, ariaLabel: a }) {
      let [r, n] = (0, m.useState)({ top: !1, bottom: !1 }),
        o = (0, m.useRef)(null),
        s = (0, m.useCallback)(() => {
          let e = o.current;
          if (!e) return;
          let { scrollTop: t, scrollHeight: a, clientHeight: r } = e,
            i = t > 5,
            s = t + r < a - 5;
          n((e) => (e.top === i && e.bottom === s ? e : { top: i, bottom: s }));
        }, []),
        l = (0, m.useCallback)(
          (e) => {
            ((o.current = e), s());
          },
          [s]
        );
      return (
        (0, m.useEffect)(() => {
          let e = o.current;
          if (!e) return;
          let t = new ResizeObserver(s);
          return (t.observe(e), () => t.disconnect());
        }, [s]),
        (0, i.jsxs)("div", {
          className: "relative",
          children: [
            (0, i.jsx)("div", {
              ref: l,
              onScroll: s,
              className: t,
              tabIndex: 0,
              role: "region",
              "aria-label": a,
              children: e,
            }),
            r.top &&
              (0, i.jsx)("div", {
                className:
                  "from-default pointer-events-none absolute left-0 right-0 top-0 h-8 bg-gradient-to-b to-transparent dark:from-[var(--cal-bg-muted)]",
                "aria-hidden": "true",
              }),
            r.bottom &&
              (0, i.jsx)("div", {
                className:
                  "from-default pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t to-transparent dark:from-[var(--cal-bg-muted)]",
                "aria-hidden": "true",
              }),
          ],
        })
      );
    }
    let is = (0, eU.default)(() => e.A(933503).then((e) => e.TimezoneSelect), {
        loadableGenerated: { modules: [993225] },
        ssr: !1,
      }),
      il = ({ children: e }) => (0, i.jsx)("div", { children: e }),
      ic = ({ children: e }) =>
        (0, i.jsx)(tG.m.div, { ...tw, initial: "visible", layout: !0, children: e }),
      iu = ({ children: e }) =>
        (0, i.jsx)(tG.m.div, {
          ...tw,
          layout: !0,
          transition: { ...tw.transition, delay: 0.3 },
          children: e,
        }),
      id = (e, t, a) => {
        let r = n3.default.locale.targets.concat([n3.default.locale.source]);
        return e?.find(
          (e) =>
            e.field === t &&
            r.includes(e.targetLocale) &&
            (a === e.targetLocale || a.split("-")[0] === e.targetLocale)
        )?.translatedText;
      },
      im = (0, m.memo)(
        ({
          event: e,
          isPending: t,
          isPlatform: a = !0,
          TimezoneSelect: r,
          isPrivateLink: n,
          classNames: o,
          locale: s,
          timeZones: l,
          children: c,
          selectedTimeslot: d,
          roundRobinHideOrgAndTeam: m,
          hideOrgTeamAvatar: h,
          hideEventTypeDetails: f = !1,
          isSettingsPreview: g = !1,
        }) => {
          let { timeFormat: b, timezone: y } = (0, eW.useBookerTime)(),
            v = (0, u.useBookerStoreContext)((e) => e.selectedDuration),
            x = (0, u.useBookerStoreContext)((e) => e.state),
            k = (0, u.useBookerStoreContext)((e) => e.bookingData),
            w = (0, u.useBookerStoreContext)((e) => e.rescheduleUid),
            [_, C] = (0, u.useBookerStoreContext)(
              (e) => [e.seatedEventData, e.setSeatedEventData],
              p.shallow
            ),
            { i18n: S, t: T } = (0, eS.useLocale)();
          if (f) return null;
          let j = _?.attendees || k?.attendees.length,
            N = _?.seatsPerTimeSlot || e?.seatsPerTimeSlot,
            E = j && N && j / N >= 0.5,
            I = j && N && j / N >= 0.83,
            A = s ?? navigator.language,
            O = id(e?.fieldTranslations ?? [], ta.EventTypeAutoTranslatedField.DESCRIPTION, A),
            D = id(e?.fieldTranslations ?? [], ta.EventTypeAutoTranslatedField.TITLE, A),
            L = g ? il : ic,
            R = g ? il : iu;
          return (0, i.jsxs)("div", {
            className: `${o?.eventMetaContainer || ""} relative z-10 p-6`,
            "data-testid": "event-meta",
            children: [
              t && (0, i.jsx)(L, { children: (0, i.jsx)(ie, {}) }),
              !t &&
                !!e &&
                (0, i.jsxs)(R, {
                  children: [
                    (0, i.jsx)(n7, {
                      schedulingType: e.schedulingType,
                      users: e.subsetOfUsers,
                      profile: e.profile,
                      entity: e.entity,
                      isPrivateLink: n,
                      roundRobinHideOrgAndTeam: m,
                      hideOrgTeamAvatar: h,
                    }),
                    (0, i.jsx)(it, {
                      className: `${o?.eventMetaTitle} my-2`,
                      children: D ?? e?.title,
                    }),
                    (e.description || O) &&
                      (0, i.jsx)(n0, {
                        "data-testid": "event-meta-description",
                        contentClassName: "mb-8",
                        children: (0, i.jsx)(io, {
                          className:
                            "wrap-break-word scroll-bar max-h-[180px] max-w-full overflow-y-auto pr-4",
                          ariaLabel: T("description"),
                          children: (0, i.jsx)("div", {
                            dangerouslySetInnerHTML: {
                              __html: (0, nz.markdownToSafeHTMLClient)(O ?? e.description),
                            },
                          }),
                        }),
                      }),
                    (0, i.jsxs)("div", {
                      className: "stack-y-4 font-medium rtl:-mr-2",
                      children: [
                        w &&
                          k &&
                          (0, i.jsxs)(n0, {
                            icon: "calendar",
                            children: [
                              T("former_time"),
                              (0, i.jsx)("br", {}),
                              (0, i.jsx)("span", {
                                className: "line-through",
                                "data-testid": "former_time_p",
                                children: (0, i.jsx)(aU, {
                                  date: k.startTime.toString(),
                                  duration: null,
                                  timeFormat: b,
                                  timeZone: y,
                                  language: S.language,
                                }),
                              }),
                            ],
                          }),
                        d &&
                          (0, i.jsx)(n0, {
                            icon: "calendar",
                            children: (0, i.jsx)(aU, {
                              date: d,
                              duration: v || e.length,
                              timeFormat: b,
                              timeZone: y,
                              language: S.language,
                            }),
                          }),
                        (0, i.jsx)(n1, { event: e }),
                        (0, i.jsx)(ii, {
                          event: e,
                          timeZones: l,
                          TimezoneSelect: r ?? is,
                          classNames: o,
                        }),
                        "booking" === x && N && j
                          ? (0, i.jsx)(n0, {
                              icon: "user",
                              className: `${I ? "text-rose-600" : E ? "text-yellow-500" : "text-bookinghighlight"}`,
                              children: (0, i.jsx)("div", {
                                className: "text-bookinghighlight flex items-start text-sm",
                                children: (0, i.jsx)("p", {
                                  children: (0, i.jsx)(n2, {
                                    showExact: !!_.showAvailableSeatsCount,
                                    totalSeats: N,
                                    bookedSeats: j || 0,
                                    variant: "fraction",
                                  }),
                                }),
                              }),
                            })
                          : null,
                      ],
                    }),
                    c && (0, i.jsx)("div", { className: o?.eventMetaChildren, children: c }),
                  ],
                }),
            ],
          });
        }
      );
    function ip(e) {
      let { t } = (0, e1.useAtomsLocale)(),
        [a, r] = (0, m.useState)(!1);
      return e.visible &&
        ("0" != Y.default.env.NEXT_PUBLIC_BOOKER_NUMBER_OF_DAYS_TO_LOAD ||
          0 != am.BOOKER_NUMBER_OF_DAYS_TO_LOAD) &&
        Y.default.env.NEXT_PUBLIC_BOOKER_NUMBER_OF_DAYS_TO_LOAD &&
        (!a || e.isScheduleLoading) &&
        !e.isScheduleLoading &&
        e.dayCount
        ? (0, i.jsxs)("div", {
            className:
              "bg-default border-subtle mt-6 flex w-1/2 min-w-0 items-center justify-between rounded-[32px] border p-3 text-sm leading-none shadow-sm lg:w-1/3",
            children: [
              (0, i.jsxs)("div", {
                className: "flex items-center gap-2 overflow-x-hidden",
                children: [
                  (0, i.jsx)(tA.InfoIcon, { className: "text-default h-4 w-4" }),
                  (0, i.jsx)("p", {
                    className: "w-full leading-none",
                    children: t("having_trouble_finding_time"),
                  }),
                ],
              }),
              (0, i.jsxs)("button", {
                className: "inline-flex items-center gap-2 font-medium",
                onClick: (t) => {
                  (t.preventDefault(), e.onButtonClick(), r(!0));
                },
                children: [
                  t("show_more"),
                  " ",
                  (0, i.jsx)(ar.Icon, { name: "arrow-right", className: "h-4 w-4" }),
                ],
              }),
            ],
          })
        : null;
    }
    im.displayName = "EventMeta";
    var ih = e.i(886789);
    let ig = () => {
      let { t: e } = (0, eS.useLocale)(),
        { data: t } = (0, eV.useSession)(),
        a = (0, u.useBookerStoreContext)((e) => e.rescheduleUid),
        [r, n] = (0, u.useBookerStoreContext)(
          (e) => [e.bypassHostAvailability, e.setBypassHostAvailability],
          p.shallow
        );
      return tr.trpc.viewer.bookings.isHostOfBooking.useQuery(
        { bookingUid: a ?? "" },
        { enabled: !!a && !!t?.user?.id }
      ).data
        ? (0, i.jsxs)("div", {
            className: "mb-3 flex items-center gap-2",
            "data-testid": "host-reschedule-bypass-availability",
            children: [
              (0, i.jsx)(ih.Switch, {
                checked: r,
                "aria-labelledby": "host-reschedule-bypass-availability-label",
                "data-testid": "host-reschedule-bypass-availability-switch",
                onCheckedChange: n,
              }),
              (0, i.jsx)("span", {
                id: "host-reschedule-bypass-availability-label",
                className: "text-default text-sm font-medium",
                children: e("show_unavailable_times"),
              }),
            ],
          })
        : null;
    };
    function ib(e) {
      var t, a;
      let { users: r, organization: n, disableHref: o = !1, ...s } = e,
        l = [
          {
            href: (0, X.useIsEmbed)() || o ? null : (0, n8.getBookerBaseUrlSync)(n.slug),
            image:
              ((t = n.logoUrl),
              (a = n.name),
              t ||
                `https://eu.ui-avatars.com/api/?background=fff&color=f9f9f9&bold=true&background=000000&name=${encodeURIComponent(a || "")}`),
            alt: n.name || void 0,
            title: n.name || void 0,
          },
        ].concat(
          r.map((e) => ({
            href: o ? null : `${e.bookerUrl}/${e.username}?redirect=false`,
            image: n9(e),
            alt: e.name || void 0,
            title: e.name || e.username || "",
          }))
        );
      return (0, i.jsx)(n5, { ...s, items: l });
    }
    let iy = ({ onConnectNow: e, event: t, cooldownMs: a = 0 }) => {
      let { t: r } = (0, e1.useAtomsLocale)(),
        n = a > 0;
      return (0, i.jsxs)("div", {
        className:
          " bg-default border-subtle mx-2 block items-center gap-3 rounded-xl border p-[6px] text-sm shadow-sm delay-1000 sm:flex",
        children: [
          (0, i.jsxs)("div", {
            className: "flex items-center gap-3 ps-1",
            children: [
              (0, i.jsxs)("div", {
                className: "relative",
                children: [
                  (0, i.jsx)(ib, {
                    size: "sm",
                    className: "border-muted",
                    organization: {
                      slug: t.entity.orgSlug,
                      name: t.entity.name || "",
                      logoUrl: t.entity.logoUrl ?? null,
                    },
                    users: t.subsetOfUsers.slice(0, 2),
                    disableHref: !0,
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "border-muted absolute -bottom-0.5 -right-1 h-2 w-2 rounded-full border bg-green-500",
                  }),
                ],
              }),
              (0, i.jsx)("div", { children: r("dont_want_to_wait") }),
            ],
          }),
          (0, i.jsx)("div", {
            className: "mt-2 flex items-center gap-3 sm:mt-0",
            children: n
              ? (0, i.jsx)(tD.Tooltip, {
                  content: r("just_connected_description"),
                  children: (0, i.jsx)("span", {
                    className: "inline-flex",
                    children: (0, i.jsx)(tE.Button, {
                      disabled: n,
                      color: "primary",
                      onClick: () => e(),
                      size: "sm",
                      className: "w-full justify-center rounded-lg sm:w-auto",
                      children: r("connect_now"),
                    }),
                  }),
                })
              : (0, i.jsx)(tE.Button, {
                  color: "primary",
                  onClick: () => e(),
                  size: "sm",
                  className: "w-full justify-center rounded-lg sm:w-auto",
                  children: r("connect_now"),
                }),
          }),
        ],
      });
    };
    var iv = e.i(266027),
      ix = e.i(825620),
      ik = e.i(288130),
      iw = e.i(788597),
      i_ = e.i(666995);
    let iC = ({
      extraDays: e,
      availableTimeslots: t,
      schedule: a,
      isLoading: r,
      event: n,
      events: o,
      onEmptyCellClick: s,
      renderOutOfOffice: l,
    }) => {
      let c = (0, u.useBookerStoreContext)((e) => e.selectedDate),
        d = (0, u.useBookerStoreContext)((e) => e.selectedDuration),
        p =
          "true" === (0, b.getQueryParam)("overlayCalendar") ||
          eP.localStorage?.getItem("overlayCalendarSwitchDefault"),
        { timezone: h } = (0, eW.useBookerTime)(),
        f = d || n?.data?.length || 30,
        g = a?.slots,
        y = (0, m.useMemo)(() => {
          if (!g) return;
          let e = {};
          for (let t in g)
            e[t] = g[t].map((e) => {
              let { time: t, ...a } = e;
              return {
                start: (0, eY.default)(t).toDate(),
                end: (0, eY.default)(t).add(f, "minutes").toDate(),
                ...a,
              };
            });
          return e;
        }, [g, f]),
        v = c
          ? (0, eY.default)(c).toDate()
          : h
            ? (0, eY.default)().tz(h).toDate()
            : (0, eY.default)().toDate(),
        x = (0, eY.default)(v)
          .add(e - 1, "day")
          .toDate(),
        k = (0, m.useMemo)(
          () =>
            tp({
              selectedDate: c ?? (0, eY.default)().format("YYYY-MM-DD"),
              timezone: h,
              daysToLoad: e,
            }),
          [e, c, h]
        ),
        w = !!o,
        { data: _, isPending: C } = ((e) => {
          var t;
          let a = `/${ix.V2_ENDPOINTS.bookings}`,
            r = { [ix.CAL_API_VERSION_HEADER]: ix.VERSION_2024_08_13 },
            { enabled: n = !0, ...i } = e;
          return (0, iv.useQuery)({
            queryKey: [
              "use-bookings",
              (t = i).status,
              t.attendeeEmail,
              t.attendeeName,
              t.eventTypeIds,
              t.eventTypeId,
              t.teamsIds,
              t.teamId,
              t.afterStart,
              t.beforeEnd,
              t.afterCreatedAt,
              t.beforeCreatedAt,
              t.afterUpdatedAt,
              t.beforeUpdatedAt,
              t.sortStart,
              t.sortEnd,
              t.sortCreated,
              t.sortUpdatedAt,
              t.take,
              t.skip,
            ],
            enabled: n,
            queryFn: async () =>
              ik.default.get(a, { params: i, headers: r }).then((e) => {
                if (e.data.status === ix.SUCCESS_STATUS) return e.data.data;
                throw Error(e.data?.error?.message);
              }),
          });
        })({
          take: 150,
          skip: 0,
          eventTypeId: n?.data?.id,
          afterStart: v.toISOString(),
          beforeEnd: x.toISOString(),
          status: ["upcoming", "past", "recurring"],
          enabled: !w,
        }),
        { data: S, isPending: T } = ((e) => {
          let { isInit: t } = (0, iw.useAtomsContext)();
          return (0, iv.useQuery)({
            queryKey: ["get-connected-calendars"],
            queryFn: () =>
              ik.default.get("/calendars").then((e) => {
                if (e.data.status === ix.SUCCESS_STATUS) return e.data?.data;
                throw Error(e.data.error.message);
              }),
            enabled: e?.enabled !== void 0 ? e.enabled && (t ?? !1) : (t ?? !1),
            staleTime: 5e3,
          });
        })({ enabled: !w }),
        j = S?.connectedCalendars.flatMap(
          (e) =>
            e.calendars
              ?.filter((e) => !0 === e.isSelected)
              .map((e) => ({ credentialId: e.credentialId, externalId: e.externalId })) ?? []
        ),
        { data: N } = (({ onError: e, enabled: t, ...a }) => {
          let r =
            a.calendarsToLoad
              ?.map((e) => `${e.credentialId}:${e.externalId}`)
              .sort()
              .join("|") ?? "";
          return (0, iv.useQuery)({
            queryKey: [
              "get-calendars-busy-times",
              r,
              a.dateFrom ?? "",
              a.dateTo ?? "",
              a.loggedInUsersTz,
            ],
            queryFn: () =>
              ik.default
                .get("/calendars/busy-times", {
                  params: a,
                  paramsSerializer: (e) => {
                    let t = new URLSearchParams();
                    return (
                      e.dateFrom && t.append("dateFrom", e.dateFrom),
                      e.dateTo && t.append("dateTo", e.dateTo),
                      e.loggedInUsersTz && t.append("loggedInUsersTz", e.loggedInUsersTz),
                      e.calendarsToLoad &&
                        Array.isArray(e.calendarsToLoad) &&
                        e.calendarsToLoad.forEach((e, a) => {
                          (t.append(`calendarsToLoad[${a}][credentialId]`, String(e.credentialId)),
                            t.append(`calendarsToLoad[${a}][externalId]`, e.externalId));
                        }),
                      t.toString()
                    );
                  },
                })
                .then((t) => {
                  if (t.data.status === ix.SUCCESS_STATUS) return t.data;
                  throw (e?.(), Error(t.data.error.message));
                }),
            enabled: t && !!a.dateFrom && !!a.dateTo,
            staleTime: 0,
          });
        })({
          loggedInUsersTz: h,
          dateFrom: k.dateFrom,
          dateTo: k.dateTo,
          calendarsToLoad: j ?? [],
          enabled: !!(!w && !T && j?.length && k.dateFrom && k.dateTo),
        });
      (0, m.useEffect)(() => {}, [p]);
      let E = (0, m.useMemo)(
          () =>
            (_ ?? [])
              .map((e) => ({
                booking: e,
                startTime: (0, eY.default)(e.start).valueOf(),
                endTime: (0, eY.default)(e.end).valueOf(),
              }))
              .sort((e, t) => e.startTime - t.startTime),
          [_]
        ),
        I = (0, m.useMemo)(() => {
          let e = N?.data ?? [];
          return E.length
            ? e.filter((e) => {
                let t = (0, eY.default)(e.start).valueOf(),
                  a = (0, eY.default)(e.end).valueOf();
                for (let { startTime: e, endTime: r } of E) {
                  if (e >= a) break;
                  if (!(r <= t)) return !1;
                }
                return !0;
              })
            : e;
        }, [N?.data, E]),
        A = (0, m.useMemo)(() => {
          let e = _ ?? [],
            t = I.map((e, t) => ({
              id: t,
              title: "Busy",
              start: new Date(e.start),
              end: new Date(e.end),
              options: {
                status: "ACCEPTED",
                "data-test-id": "troubleshooter-busy-event",
                className: "border-[1.5px]",
              },
            }));
          return [
            ...e.map((e) => ({
              id: e.id,
              title: e.title ?? "Busy",
              start: new Date(e.start),
              end: new Date(e.end),
              options: {
                status: e.status.toUpperCase(),
                "data-test-id": "troubleshooter-busy-event",
                className: "border-[1.5px]",
              },
            })),
            ...t,
          ];
        }, [_, I]);
      return (0, i.jsx)("div", {
        className: "h-full [--calendar-dates-sticky-offset:66px]",
        children: (0, i.jsx)(i_.Calendar, {
          isPending: r,
          availableTimeslots: void 0 !== t ? t : y,
          startHour: 0,
          endHour: 23,
          events: o ?? A,
          startDate: v,
          endDate: x,
          gridCellsPerHour: 60 / f,
          hoverEventDuration: f,
          hideHeader: !0,
          timezone: h,
          onEmptyCellClick: s,
          renderOutOfOffice: l,
        }),
      });
    };
    var iS = e.i(813714),
      iT = e.i(142992);
    let ij = ({ extraDays: e, schedule: t, isLoading: a, event: r }) => {
      (0, u.useBookerStoreContext)((e) => e.selectedDate);
      let n = (0, u.useBookerStoreContext)((e) => e.setSelectedTimeslot),
        o = (0, u.useBookerStoreContext)((e) => e.selectedDuration),
        s = (0, d.useOverlayCalendarStore)((e) => e.overlayBusyDates),
        l = (0, d.useOverlayCalendarStore)((e) => e.isOverlayCalendarEnabled),
        c = o || r?.data?.length || 30,
        p = (0, iS.useAvailableTimeSlots)({ schedule: t, eventDuration: c }),
        h = (0, m.useMemo)(
          () =>
            l && s?.length
              ? s.map((e, t) => ({
                  id: t,
                  title: "Busy",
                  start: new Date(e.start),
                  end: new Date(e.end),
                  options: { status: "ACCEPTED", borderOnly: !0 },
                }))
              : [],
          [s, l]
        );
      return (0, i.jsx)(iC, {
        extraDays: e,
        availableTimeslots: p,
        isLoading: a,
        event: r,
        events: h,
        onEmptyCellClick: (e) => n(e.toISOString()),
        renderOutOfOffice: (e) => (0, i.jsx)(iT.OutOfOfficeInSlots, { ...e }),
      });
    };
    var iN = e.i(808342);
    let iE = (e, t) => {
      let a = new Set(e),
        r = !1;
      return (
        a.forEach((e) => {
          e.externalId === t.externalId && ((r = !0), a.delete(e));
        }),
        r || a.add(t),
        a
      );
    };
    var iI = e.i(775161);
    function iA(e) {
      let { t } = (0, e1.useAtomsLocale)();
      return (0, i.jsx)(iI.Dialog, {
        open: e.open,
        onOpenChange: e.onClose,
        children: (0, i.jsxs)(t4.DialogContent, {
          children: [
            (0, i.jsxs)(t4.DialogHeader, {
              children: [
                (0, i.jsx)(t4.DialogTitle, {
                  className: "mb-1",
                  children: t("overlay_my_calendar"),
                }),
                (0, i.jsx)(t4.DialogDescription, { children: t("overlay_my_calendar_toc") }),
              ],
            }),
            (0, i.jsx)("div", {
              className: "my-5 flex sm:my-8",
              children: (0, i.jsx)(tE.Button, {
                "data-testid": "overlay-calendar-continue-button",
                onClick: () => e.onContinue(),
                className: "w-full items-center justify-center gap-2 font-semibold",
                StartIcon: "calendar-search",
                children: t("continue_with", { appName: am.APP_NAME }),
              }),
            }),
          ],
        }),
      });
    }
    var iO = e.i(657688),
      iD = e.i(997313);
    let iL = () =>
      (0, i.jsx)(nC.SkeletonContainer, {
        children: (0, i.jsxs)("div", {
          className: "stack-y-4 mt-3 rounded-xl border border-subtle px-4 py-4",
          children: [
            (0, i.jsx)(nC.SkeletonText, { className: "h-4 w-full" }),
            (0, i.jsx)(nC.SkeletonText, { className: "h-4 w-full" }),
            (0, i.jsx)(nC.SkeletonText, { className: "h-4 w-full" }),
            (0, i.jsx)(nC.SkeletonText, { className: "h-4 w-full" }),
          ],
        }),
      });
    function iR({
      open: e,
      onClose: t,
      onClickNoCalendar: a,
      onToggleConnectedCalendar: r,
      checkIsCalendarToggled: n,
      isPlatform: o = !1,
      connectedCalendars: s,
      loadingCalendarKey: l,
    }) {
      let c,
        { t: u } = (0, e1.useAtomsLocale)();
      return (
        (c = s.isLoading
          ? (0, i.jsx)(iL, {})
          : s.error
            ? (0, i.jsx)(aA.Alert, {
                severity: "error",
                title: u("something_went_wrong"),
                message: u("connected_calendars_fetch_error"),
              })
            : 0 === s.data.length
              ? (0, i.jsx)(aO, {
                  Icon: "calendar",
                  headline: u("no_calendar_installed"),
                  description: u("no_calendar_installed_description"),
                  buttonText: u("add_a_calendar"),
                  buttonOnClick: a,
                })
              : s.data.map((e) =>
                  (0, i.jsxs)(
                    m.Fragment,
                    {
                      children: [
                        e.error &&
                          !e.calendars &&
                          (0, i.jsx)(aA.Alert, { severity: "error", title: e.error.message }),
                        e?.error === void 0 &&
                          e.calendars &&
                          (0, i.jsxs)("div", {
                            className: "flex-col rounded-md border-subtle border p-4 mt-3",
                            children: [
                              (0, i.jsxs)("div", {
                                className:
                                  "flex w-full flex-1 items-center space-x-3 pb-4 rtl:space-x-reverse",
                                children: [
                                  e.integration.logo &&
                                    (0, i.jsx)(iO.default, {
                                      className: (0, t9.cn)(
                                        "h-10 w-10",
                                        e.integration.logo.includes("-dark") && "dark:invert"
                                      ),
                                      width: 40,
                                      height: 40,
                                      src: o
                                        ? `https://app.cal.com${e.integration.logo}`
                                        : e.integration.logo,
                                      alt: `${e.integration.title} logo`,
                                    }),
                                  (0, i.jsxs)("div", {
                                    className: "grow truncate pl-2",
                                    children: [
                                      (0, i.jsx)("h3", {
                                        className:
                                          "space-x-2 rtl:space-x-reverse text-emphasis text-base font-semibold",
                                        children: (0, i.jsx)(tW.default, {
                                          href: `/apps/${e.integration.slug}`,
                                          children: e.integration.name || e.integration.title,
                                        }),
                                      }),
                                      (0, i.jsx)("p", {
                                        className: "text-subtle text-sm",
                                        children: e.primary?.email,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, i.jsx)("div", {
                                className: "border-subtle w-full border-t pt-4",
                                children: (0, i.jsx)("ul", {
                                  className: "stack-y-4",
                                  children: e.calendars.map((t, a) => {
                                    let o = `calendar-switch-${e.credentialId}-${a}`,
                                      s = t.name || t.integrationTitle || t.externalId,
                                      c = l === `${e.credentialId}:${t.externalId}`;
                                    return (0, i.jsxs)(
                                      "li",
                                      {
                                        className: "flex items-center gap-3",
                                        children: [
                                          (0, i.jsx)(iD.Switch, {
                                            id: o,
                                            label: s,
                                            checked: n(t.externalId, e.credentialId),
                                            onCheckedChange: () => r(t.externalId, e.credentialId),
                                          }),
                                          (0, i.jsx)("span", {
                                            className:
                                              "inline-flex size-4 items-center justify-center",
                                            children:
                                              c &&
                                              (0, i.jsx)(ar.Spinner, {
                                                className: "size-4 opacity-80",
                                              }),
                                          }),
                                        ],
                                      },
                                      o
                                    );
                                  }),
                                }),
                              }),
                            ],
                          }),
                      ],
                    },
                    e.credentialId
                  )
                )),
        (0, i.jsx)(iI.Dialog, {
          isPlatform: o,
          open: e,
          onOpenChange: t,
          children: (0, i.jsxs)(t4.DialogContent, {
            className: "pb-4",
            children: [
              (0, i.jsxs)(t4.DialogHeader, {
                children: [
                  (0, i.jsx)(t4.DialogTitle, { children: u("calendar_settings") }),
                  (0, i.jsx)(t4.DialogDescription, { children: u("view_overlay_calendar_events") }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "no-scrollbar mt-4 max-h-full overflow-y-scroll",
                children: c,
              }),
              (0, i.jsx)("div", {
                className: "mt-4 flex justify-end gap-2",
                children: (0, i.jsx)(t4.DialogClose, { children: u("done") }),
              }),
            ],
          }),
        })
      );
    }
    function iB({ enabled: e, hasSession: t, onStateChange: a }) {
      let { t: r } = (0, e1.useAtomsLocale)(),
        n = (0, d.useOverlayCalendarStore)((e) => e.setContinueWithProviderModal),
        o = (0, d.useOverlayCalendarStore)((e) => e.setCalendarSettingsOverlayModal),
        s = (0, u.useBookerStoreContext)((e) => e.layout);
      return (
        (0, m.useEffect)(() => {
          !t && e && (a(!1), n(!0));
        }, [t, e, n, a]),
        (0, i.jsxs)("div", {
          className: (0, t9.cn)(
            "hidden gap-2",
            "week_view" === s || "column_view" === s ? "xl:flex" : "md:flex"
          ),
          children: [
            (0, i.jsxs)("div", {
              className: "flex items-center gap-2 pr-2",
              children: [
                (0, i.jsx)(iD.Switch, {
                  "data-testid": "overlay-calendar-switch",
                  checked: e,
                  id: "overlayCalendar",
                  onCheckedChange: (e) => {
                    t ? a(e) : n(e);
                  },
                }),
                (0, i.jsx)("label", {
                  htmlFor: "overlayCalendar",
                  className: "text-emphasis text-sm font-medium leading-none hover:cursor-pointer",
                  children: r("overlay_my_calendar"),
                }),
              ],
            }),
            t &&
              (0, i.jsx)(tE.Button, {
                size: "base",
                "data-testid": "overlay-calendar-settings-button",
                variant: "icon",
                color: "secondary",
                StartIcon: "settings",
                onClick: () => o(!0),
              }),
          ],
        })
      );
    }
    let iP = ({
      connectedCalendars: e,
      overlayBusyDates: t,
      isFetchingOverlayBusyDates: a = !1,
      onToggleCalendar: r,
      isOverlayCalendarEnabled: n,
      handleClickNoCalendar: o,
      handleSwitchStateChange: s,
      handleClickContinue: l,
      hasSession: c,
      isPlatform: u = !1,
    }) => {
      let [h, f] = (0, m.useState)(null),
        {
          handleCloseContinueModal: g,
          handleCloseSettingsModal: b,
          isOpenOverlayContinueModal: y,
          isOpenOverlaySettingsModal: v,
          handleToggleConnectedCalendar: x,
          checkIsCalendarToggled: k,
        } = (({ connectedCalendars: e, overlayBusyDates: t, onToggleCalendar: a }) => {
          let {
              set: r,
              setValue: n,
              hasItem: i,
            } = (function (e, t) {
              let [a, r] = (0, m.useState)(() => {
                let a = eP.localStorage.getItem(e);
                return new Set(a ? JSON.parse(a) : t);
              });
              return (
                (0, m.useEffect)(() => {
                  eP.localStorage.setItem(e, JSON.stringify(Array.from(a)));
                }, [e, a]),
                {
                  set: a,
                  setValue: (0, m.useCallback)((e) => {
                    r(e);
                  }, []),
                  addValue: (e) => {
                    r((t) => new Set(t).add(e));
                  },
                  removeById: (e) => {
                    r((t) => {
                      let a = new Set(t);
                      return (
                        a.forEach((t) => {
                          t.externalId === e && a.delete(t);
                        }),
                        a
                      );
                    });
                  },
                  toggleValue: (e) => {
                    let t = iE(a, e);
                    return (r(t), t);
                  },
                  hasItem: (e) => Array.from(a).some((t) => t.externalId === e.externalId),
                  clearSet: () => {
                    (r(() => new Set()), eP.localStorage.removeItem(e));
                  },
                }
              );
            })("toggledConnectedCalendars", []),
            [o, s] = (0, m.useState)(!1),
            [l, c] = (0, d.useOverlayCalendarStore)(
              (e) => [e.continueWithProviderModal, e.setContinueWithProviderModal],
              p.shallow
            ),
            [u, h] = (0, d.useOverlayCalendarStore)(
              (e) => [e.calendarSettingsOverlayModal, e.setCalendarSettingsOverlayModal],
              p.shallow
            ),
            f = (0, d.useOverlayCalendarStore)((e) => e.setOverlayBusyDates),
            { timezone: g } = (0, iN.useTimePreferences)();
          return (
            (0, m.useEffect)(() => {
              if (t) {
                let e = (0, eY.default)(),
                  a = (e.tz(g).utcOffset() - e.utcOffset()) / 60;
                f(
                  t.map((e) => ({
                    ...e,
                    start: (0, eY.default)(e.start).add(a, "hours").toDate(),
                    end: (0, eY.default)(e.end).add(a, "hours").toDate(),
                  }))
                );
              }
            }, [t]),
            (0, m.useEffect)(() => {
              if (o || 0 === e.length) return;
              if (r.size > 0) return void s(!0);
              let t = new Set();
              (e.forEach((e) => {
                e.calendars?.forEach((a) => {
                  let r = { credentialId: e.credentialId, externalId: a.externalId };
                  (a.primary || a.isSelected) && t.add(r);
                });
              }),
                t.size > 0 && (n(t), a(t)),
                s(!0));
            }, [e, o, a, r.size, n]),
            {
              isOpenOverlayContinueModal: l,
              isOpenOverlaySettingsModal: u,
              handleCloseContinueModal: (e) => c(e),
              handleCloseSettingsModal: (e) => h(e),
              handleToggleConnectedCalendar: (e, t) => {
                let i = iE(r, { credentialId: t, externalId: e });
                (n(i), f([]), a(i));
              },
              checkIsCalendarToggled: (e, t) => i({ credentialId: t, externalId: e }),
            }
          );
        })({ connectedCalendars: e.data, overlayBusyDates: t, onToggleCalendar: r });
      return ((0, m.useEffect)(() => {
        n && g(!1);
      }, [n, g]),
      !u || e.isLoading || e.error || 0 !== e.data.length)
        ? (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(iB, { enabled: n, hasSession: c, onStateChange: s }),
              !u && (0, i.jsx)(iA, { open: y && !n, onClose: g, onContinue: l }),
              (0, i.jsx)(iR, {
                open: v,
                onClose: b,
                onToggleConnectedCalendar: (e, t) => {
                  (f(`${t}:${e}`), x(e, t));
                },
                onClickNoCalendar: () => o(),
                checkIsCalendarToggled: k,
                isPlatform: u,
                connectedCalendars: e,
                loadingCalendarKey: a ? h : null,
              }),
            ],
          })
        : null;
    };
    var iM = e.i(857739),
      iz = e.i(320937);
    let iU = () => {
        let { t: e } = (0, eS.useLocale)();
        return (0, i.jsx)("span", { className: "text-default text-sm", children: e("loading") });
      },
      iF = (0, eU.default)(() => e.A(933503).then((e) => e.TimezoneSelect), {
        loadableGenerated: { modules: [993225] },
        ssr: !1,
        loading: () => (0, i.jsx)(iU, {}),
      }),
      iV = ({ onClick: e, event: t, TimezoneSelect: a, timeZones: r, selectedDate: n }) => {
        let { i18n: o } = (0, eS.useLocale)(),
          [s] = (0, tm.useTimePreferences)((e) => [e.setTimezone]),
          { timezone: l } = (0, eW.useBookerTime)(),
          c = (0, u.useBookerStoreContext)((e) => e.setTimezone, p.shallow),
          d = a ?? iF,
          h = (0, m.useMemo)(() => {
            if (!n) return { dayOfWeek: "", fullDate: "" };
            let e = (0, e2.default)(n);
            return {
              dayOfWeek: e.locale(o.language).format("dddd"),
              fullDate: e.locale(o.language).format("MMMM D, YYYY"),
            };
          }, [n, o.language]);
        return (0, i.jsx)("div", {
          className:
            "two-step-slot-selection-modal-header sticky top-0 z-10 -mx-4 mt-0 mb-4 flex flex-col border-subtle border-b bg-default px-8 pb-4",
          children: (0, i.jsxs)("div", {
            className: "flex flex-col gap-2 pt-8",
            children: [
              (0, i.jsxs)("div", {
                className: "flex flex-col",
                children: [
                  (0, i.jsxs)("span", {
                    className: "font-semibold text-emphasis text-lg",
                    children: [
                      (0, i.jsx)(iM.Button, {
                        color: "minimal",
                        StartIcon: iz.ArrowLeftIcon,
                        className: "mb-2 ml-[-42px] w-[40px]",
                        onClick: e,
                      }),
                      " ",
                      h.dayOfWeek,
                    ],
                  }),
                  (0, i.jsx)("span", { className: "text-default text-sm", children: h.fullDate }),
                ],
              }),
              t && (0, i.jsx)(n1, { event: t, blocks: [nJ.DURATION] }),
              (0, i.jsxs)("div", {
                className: "mb-0 flex items-center gap-2 text-default text-sm",
                children: [
                  (0, i.jsx)(iz.GlobeIcon, { className: "shrink-0 text-subtle" }),
                  d &&
                    (0, i.jsx)("span", {
                      className:
                        "-mt-[2px] flex h-6 min-w-32 max-w-full items-center justify-start",
                      children: (0, i.jsx)(d, {
                        timeZones: r,
                        menuPosition: "fixed",
                        classNames: {
                          control: () =>
                            "min-h-0! p-0 w-full border-0 bg-transparent focus-within:ring-0 shadow-none!",
                          menu: () => "w-64! max-w-[90vw] mb-1",
                          singleValue: () => "text-default py-1",
                          indicatorsContainer: () => "ml-auto",
                          container: () => "max-w-full",
                        },
                        value: t?.lockTimeZoneToggleOnBookingPage
                          ? t.lockedTimeZone || ia.CURRENT_TIMEZONE
                          : l || ia.CURRENT_TIMEZONE,
                        onChange: ({ value: e }) => {
                          (s(e), c(e));
                        },
                        isDisabled: t?.lockTimeZoneToggleOnBookingPage,
                      }),
                    }),
                ],
              }),
            ],
          }),
        });
      },
      i$ = ({
        username: e,
        eventSlug: t,
        hideBranding: a = !1,
        entity: r,
        isInstantMeeting: n = !1,
        onGoBackInstantMeeting: o,
        onConnectNowInstantMeeting: c,
        onOverlayClickNoCalendar: d,
        onClickOverlayContinue: h,
        onOverlaySwitchStateChange: f,
        sessionUsername: g,
        rescheduleUid: k,
        hasSession: w,
        extraOptions: _,
        bookings: C,
        verifyEmail: S,
        slots: T,
        calendars: j,
        bookerForm: N,
        event: E,
        bookerLayout: I,
        schedule: A,
        verifyCode: O,
        isSettingsPreview: D = !1,
        onPreviewConfirm: L,
        orgBannerUrl: R,
        customClassNames: B,
        areInstantMeetingParametersSet: P = !1,
        userLocale: M,
        hasValidLicense: z,
        isBookingDryRun: U,
        hashedLink: F,
        confirmButtonDisabled: V,
        timeZones: $,
        eventMetaChildren: q,
        roundRobinHideOrgAndTeam: W,
        hideOrgTeamAvatar: H,
        showNoAvailabilityDialog: Q,
        TimezoneSelect: J,
        isPlatformBookerEmbed: X = !1,
        renderCaptchaElement: ee,
        renderTagManager: et,
      }) => {
        var ea, ei, eo, es;
        let el,
          ec,
          eu,
          ed,
          { t: em } = (0, eS.useLocale)(),
          ep = (0, tg.useCompatSearchParams)(),
          eh = (0, m.useContext)(u.BookerStoreContext),
          [ef, eg] = (0, u.useBookerStoreContext)((e) => [e.state, e.setState], p.shallow),
          ey = (0, u.useBookerStoreContext)((e) => e.selectedDate),
          [ev, ex] = (0, u.useBookerStoreContext)(
            (e) => [e.isSlotSelectionModalVisible, e.setIsSlotSelectionModalVisible],
            p.shallow
          ),
          {
            shouldShowFormInDialog: ek,
            hasDarkBackground: ew,
            extraDays: e_,
            columnViewExtraDays: eT,
            isMobile: ej,
            layout: eN,
            hideEventTypeDetails: eE,
            showTimezoneWhenEventDetailsHidden: eI,
            isEmbed: eA,
            bookerLayouts: eO,
            slotsViewOnSmallScreen: eD,
          } = I,
          [eL, eB] = (0, u.useBookerStoreContext)(
            (e) => [e.seatedEventData, e.setSeatedEventData],
            p.shallow
          ),
          { selectedTimeslot: eP, setSelectedTimeslot: eM, allSelectedTimeslots: ez } = T,
          [eU, eF] = (0, u.useBookerStoreContext)((e) => [e.dayCount, e.setDayCount], p.shallow),
          eV = (0, tS.useNonEmptyScheduleDays)(A?.data?.slots).filter(
            (e) => 0 >= (0, e2.default)(ey).diff(e, "day")
          ),
          e$ = eV.length < e_ ? (e_ - eV.length + 1) * 7 : 0,
          eq = eV.slice(0, e_ + 1);
        if (0 !== eV.length) {
          let e = eq.length === e_ + 1 ? eq.length - 2 : eq.length - 1;
          eT.current = Math.abs((0, e2.default)(ey).diff(eq[e], "day")) + e$;
        }
        let eW = Math.abs((0, e2.default)(ey).diff(eq[eq.length - 1], "day")) + e$,
          eH = ((e, t) => {
            let a,
              r,
              n = (function () {
                K.hasReducedMotionListener.current || (0, G.initPrefersReducedMotion)();
                let [e] = (0, m.useState)(K.prefersReducedMotion.current);
                return e;
              })(),
              [i, o] =
                ((a = (0, v.useConstant)(() => ({ current: null, animations: [] }))),
                (r = (0, v.useConstant)(() => Z(a))),
                (0, x.useUnmountEffect)(() => {
                  a.animations.forEach((e) => e.stop());
                }),
                [a, r]),
              s = window?.isEmbed?.();
            return (
              (0, m.useEffect)(() => {
                let a = t_[e][t] || t_[e].default;
                if (!i.current) return;
                let r = { height: a?.height || "auto" },
                  l = {
                    gridTemplateAreas: a?.gridTemplateAreas,
                    width: a?.width || "auto",
                    gridTemplateColumns: a?.gridTemplateColumns,
                    gridTemplateRows: a?.gridTemplateRows,
                    minHeight: a?.minHeight,
                  };
                if (n || "mobile" === e || s) {
                  let e = { ...l, ...r };
                  Object.keys(e).forEach((t) => {
                    "height" === t
                      ? (i.current.style.height = "100vh" === r.height && s ? "100%" : r.height)
                      : (i.current.style[t] = e[t]);
                  });
                } else
                  (Object.keys(l).forEach((e) => {
                    i.current.style[e] = l[e];
                  }),
                    o(i.current, r, { duration: 0.5, ease: (0, y.cubicBezier)(0.4, 0, 0.2, 1) }));
              }, [o, s, i, e, n, t]),
              i
            );
          })(eN, ef),
          eZ = (0, m.useRef)(null),
          eG = tb(),
          eK = (0, u.useBookerStoreContext)((e) => e.bypassHostAvailability),
          eQ = ej ? "div" : t0,
          eJ = (0, m.useMemo)(
            () => ({
              eventMetaContainer: B?.eventMetaCustomClassNames?.eventMetaContainer,
              eventMetaTitle: B?.eventMetaCustomClassNames?.eventMetaTitle,
              eventMetaTimezoneSelect: B?.eventMetaCustomClassNames?.eventMetaTimezoneSelect,
            }),
            [
              B?.eventMetaCustomClassNames?.eventMetaContainer,
              B?.eventMetaCustomClassNames?.eventMetaTitle,
              B?.eventMetaCustomClassNames?.eventMetaTimezoneSelect,
            ]
          ),
          { bookerFormErrorRef: eX, key: e0, formEmail: e1, bookingForm: e3, errors: e4 } = N,
          {
            handleBookEvent: e6,
            errors: e5,
            loadingStates: e9,
            expiryTime: e8,
            instantVideoMeetingUrl: e7,
            instantConnectCooldownMs: te,
            bookingUid: tt,
            pendingRedirect: ta,
            confirmRedirect: tr,
            goBackToSuccessPage: tn,
          } = C,
          ti = e3.watch("cfToken"),
          {
            isEmailVerificationModalVisible: to,
            setEmailVerificationModalVisible: ts,
            handleVerifyEmail: tl,
            renderConfirmNotVerifyEmailButtonCond: tc,
            isVerificationCodeSending: tu,
          } = S,
          {
            overlayBusyDates: td,
            isFetchingOverlayBusyDates: tp,
            isOverlayCalendarEnabled: th,
            connectedCalendars: ty,
            onToggleCalendar: tv,
          } = j,
          tx = (0, m.useRef)(!1),
          tw = (0, l.useEmbedUiConfig)(),
          tC = () => {
            eD ||
              (ej &&
                !tx.current &&
                eZ.current &&
                !tw.disableAutoScroll &&
                (((e, t = !1) => {
                  let a,
                    { isEmbed: r = !1, onParentScrollRequest: n } =
                      "boolean" == typeof t ? { isEmbed: t } : t,
                    i = e.getBoundingClientRect().top;
                  if ((e.scrollIntoView({ behavior: "smooth" }), !r)) return;
                  let o =
                    (a = navigator.userAgent.toLowerCase()).includes("safari") &&
                    !a.includes("chrome");
                  tF(2, () => {
                    let t = e.getBoundingClientRect().top;
                    o && i === t && n && n(e.getBoundingClientRect().top);
                  });
                })(eZ.current, {
                  isEmbed: eA,
                  onParentScrollRequest: (e) =>
                    s.sdkActionManager?.fire("__scrollByDistance", { distance: e }),
                }),
                (tx.current = !0)));
          },
          tE =
            ((ea = eN == en.BookerLayouts.WEEK_VIEW),
            (ei = E?.data?.bookingFields),
            (eo = E?.data?.locations),
            (el = (0, er.useBookerStore)((e) => e.rescheduleUid)),
            (ec = ei
              ? async (e) => {
                  let t = (function ({ bookingFields: e, view: t, translateFn: a }) {
                    return eC({
                      schema: en.bookingResponses.and(eb.default.record(eb.default.any())),
                      bookingFields: e,
                      isPartialSchema: !1,
                      view: t,
                      checkOptional: !0,
                      translateFn: a,
                    });
                  })({ bookingFields: ei, view: el ? "reschedule" : "booking" });
                  return (await t.safeParseAsync(e)).success;
                }
              : void 0),
            ((e, t, a, r, n, i, o = {}) => {
              let [s, l] = (0, m.useState)(!1),
                c = (0, er.useBookerStore)((e) => e.rescheduleUid),
                { shouldSkipForResponses: u } = o,
                d = e?.getValues?.() ?? {};
              return (
                (0, m.useEffect)(() => {
                  let e = !1,
                    o = async () => {
                      if (!n || (i && i.length > 1) || i?.some((e) => tT.includes(e.type)) || !u) {
                        e || l(!1);
                        return;
                      }
                      try {
                        let t = await u(d.responses);
                        e || l(t);
                      } catch {
                        e || l(!1);
                      }
                    },
                    s = !a && !r;
                  return (
                    "selecting_time" === t && s && o(),
                    () => {
                      e = !0;
                    }
                  );
                }, [d, n, c, t, r, a, i, u]),
                s
              );
            })(e3, ef, n, ea, ei, eo, { shouldSkipForResponses: ec })),
          tI = !!(
            !(void 0 !== Y.default && Y.default.env?.NEXT_PUBLIC_IS_E2E) &&
            ee &&
            eR.CLOUDFLARE_SITE_ID &&
            "1" === eR.CLOUDFLARE_USE_TURNSTILE_IN_BOOKER &&
            ("booking" === ef || ("selecting_time" === ef && tE))
          ),
          tA = (e) => {
            D ? eh?.setState({ selectedTimeslot: e }) : (eM(e), tE || ex(!1));
          };
        ((0, l.updateEmbedBookerState)({ bookerState: ef, slotsQuery: A }),
          (0, m.useEffect)(() => {
            if (E.isPending) return eg("loading");
            if (!ey) return eg("selecting_date");
            if (!eP) return eg("selecting_time");
            let e = !n && eN !== en.BookerLayouts.WEEK_VIEW;
            return eP && tE && e ? eg("selecting_time") : eg("booking");
          }, [E.isPending, ey, eP, eg, tE, eN, n]));
        let tO =
            eG && !eK
              ? ez.filter(
                  (e) =>
                    !(({ scheduleData: e, slotToCheckInIso: t, quickAvailabilityChecks: a }) => {
                      if (a && a.some((e) => e.utcStartIso === t && "available" !== e.status))
                        return !1;
                      if (!e) return !0;
                      let r = tj(t) ? t.split("T")[0] : null;
                      return (
                        !r ||
                        (function ({ scheduleData: e, dateInGMT: t, slotToCheckInIso: a }) {
                          let r = (0, eY.default)(t).subtract(1, "day").format("YYYY-MM-DD"),
                            n = (0, eY.default)(t).add(1, "day").format("YYYY-MM-DD"),
                            i = e.slots[t],
                            o = e.slots[r],
                            s = e.slots[n];
                          return !!(tN(i, a) || tN(o, a) || tN(s, a));
                        })({ scheduleData: e, dateInGMT: r, slotToCheckInIso: t })
                      );
                    })({
                      scheduleData: A?.data ?? null,
                      slotToCheckInIso: e,
                      quickAvailabilityChecks: T.quickAvailabilityChecks,
                    })
                )
              : [],
          tD = (0, b.getQueryParam)("slot");
        (0, m.useEffect)(() => {
          if (D) return;
          let e = tD || null;
          e !== eP && eM(e);
        }, [tD, eM, eP, D]);
        let tL = !D && Q,
          tR = (e) => (tc ? e6(e) : tl()),
          tB = (0, m.useMemo)(
            () =>
              "booking" !== ef
                ? null
                : (0, i.jsx)(
                    nT,
                    {
                      timeslot: eP,
                      shouldRenderCaptcha: tI,
                      onCancel: () => {
                        D
                          ? eh?.setState({ selectedTimeslot: null })
                          : (eM(null),
                            eR.PUBLIC_INVALIDATE_AVAILABLE_SLOTS_ON_BOOKING_FORM && A?.invalidate(),
                            eL.bookingUid && eB({ ...eL, bookingUid: void 0, attendees: void 0 }));
                      },
                      onSubmit: () => (D ? L?.() : tc ? e6() : tl()),
                      errorRef: eX,
                      errors: { ...e4, ...e5 },
                      isTimeslotUnavailable: !n && tO.includes(eP || ""),
                      loadingStates: e9,
                      renderConfirmNotVerifyEmailButtonCond: tc,
                      bookingForm: e3,
                      eventQuery: E,
                      extraOptions: _,
                      isVerificationCodeSending: tu,
                      confirmButtonDisabled: V,
                      classNames: {
                        confirmButton: B?.confirmStep?.confirmButton,
                        backButton: B?.confirmStep?.backButton,
                      },
                      isPlatform: D,
                      isPlatformBookerEmbed: X,
                      isSettingsPreview: D,
                      children:
                        !D &&
                        (0, i.jsx)(t5, {
                          expiryTime: e8,
                          bookingUid: tt,
                          instantVideoMeetingUrl: e7,
                          onGoBack: () => {
                            o();
                          },
                          orgName: E.data?.entity?.name,
                        }),
                    },
                    e0
                  ),
            [
              eX,
              e7,
              ef,
              e3,
              e5,
              E,
              e8,
              _,
              e4,
              e6,
              tl,
              e0,
              e9,
              o,
              tc,
              eL,
              eB,
              eM,
              D,
              L,
              eh,
              tI,
              tu,
              tO,
            ]
          );
        if (
          ((es = E.data),
          (eu = (0, tm.useTimePreferences)((e) => e.setTimezone)),
          (ed = (0, u.useBookerStoreContext)((e) => e.setTimezone)),
          (0, m.useEffect)(() => {
            if (!es?.lockTimeZoneToggleOnBookingPage) return;
            let e = es.lockedTimeZone || es.schedule?.timeZone;
            e && (eu(e), ed(e));
          }, [es, eu, ed]),
          r.considerUnpublished && !k)
        )
          return (0, i.jsx)(tq.UnpublishedEntity, { ...r });
        if (E.isSuccess && !E.data) return (0, i.jsx)(at, {});
        if ("loading" === ef) return null;
        let tP = !!(eE && eI && E.data),
          tM = () =>
            tP && E.data
              ? (0, i.jsxs)("div", {
                  className:
                    "mb-3 flex w-full max-w-full flex-row flex-wrap items-center gap-x-2 gap-y-1 border-subtle border-b pb-3 text-sm text-subtle leading-snug",
                  dir: "auto",
                  children: [
                    (0, i.jsx)("span", {
                      className: "shrink-0 whitespace-nowrap",
                      children: em("booking_times_shown_in_label"),
                    }),
                    (0, i.jsx)(ii, {
                      event: E.data,
                      timeZones: $,
                      classNames: eJ,
                      TimezoneSelect: J,
                    }),
                  ],
                })
              : null;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            E.data && et ? et(E.data) : (0, i.jsx)(i.Fragment, {}),
            (U || (0, tf.isBookingDryRun)(ep)) && (0, i.jsx)(t2, { isEmbed: eA }),
            (0, i.jsxs)("div", {
              className: (0, tV.default)(
                "main",
                "text-default flex min-h-full w-full flex-col items-center",
                eN === en.BookerLayouts.MONTH_VIEW && !eA && "my-20 ",
                eN === en.BookerLayouts.MONTH_VIEW ? "overflow-visible" : "overflow-clip",
                `${B?.bookerWrapper}`
              ),
              children: [
                (0, i.jsx)(t1, {}),
                (0, i.jsx)("div", {
                  ref: eH,
                  "data-testid": "booker-container",
                  className: (0, tV.default)(
                    ...((e, t, a = !1) => {
                      let r = (e) => (a ? "" : e);
                      return [
                        "[--booker-timeslots-width:240px] lg:[--booker-timeslots-width:280px]",
                        e === en.BookerLayouts.MONTH_VIEW &&
                          (a ? "[--booker-meta-width:0px]" : "[--booker-meta-width:240px]"),
                        e === en.BookerLayouts.MONTH_VIEW &&
                          "booking" === t &&
                          `[--booker-main-width:420px] ${r("lg:[--booker-meta-width:340px]")}`,
                        e === en.BookerLayouts.MONTH_VIEW &&
                          "booking" !== t &&
                          `[--booker-main-width:480px] ${r("lg:[--booker-meta-width:280px]")}`,
                        e !== en.BookerLayouts.MONTH_VIEW &&
                          `[--booker-main-width:480px] [--booker-meta-width:340px] ${r("lg:[--booker-meta-width:424px]")}`,
                      ];
                    })(eN, ef, eE),
                    "bg-default dark:bg-cal-muted grid max-w-full items-start dark:scheme-dark sm:transition-[width] sm:duration-300 sm:motion-reduce:transition-none md:flex-row",
                    (eN === en.BookerLayouts.MONTH_VIEW || eA) && "border-subtle rounded-md",
                    !eA && "sm:transition-[width] sm:duration-300",
                    eA &&
                      eN === en.BookerLayouts.MONTH_VIEW &&
                      "border-booker sm:border-booker-width",
                    !eA && eN === en.BookerLayouts.MONTH_VIEW && "border-subtle border",
                    `${B?.bookerContainer}`
                  ),
                  children: (0, i.jsxs)(tZ.AnimatePresence, {
                    children: [
                      !n &&
                        (0, i.jsx)(t7, {
                          area: "header",
                          className: (0, tV.default)(
                            eN === en.BookerLayouts.MONTH_VIEW &&
                              "fixed top-4 z-10 ltr:right-4 rtl:left-4",
                            (eN === en.BookerLayouts.COLUMN_VIEW ||
                              eN === en.BookerLayouts.WEEK_VIEW) &&
                              "bg-default dark:bg-cal-muted sticky top-0 z-10 h-full -ml-px ltr:border-l rtl:border-r",
                            eN === en.BookerLayouts.COLUMN_VIEW && "border-default",
                            eN === en.BookerLayouts.WEEK_VIEW && "border-subtle"
                          ),
                          children:
                            D && eN === en.BookerLayouts.MONTH_VIEW
                              ? (0, i.jsx)(i.Fragment, {})
                              : (0, i.jsx)(tz, {
                                  isMyLink: e === g,
                                  eventSlug: t,
                                  enabledLayouts: eO.enabledLayouts,
                                  extraDays: eN === en.BookerLayouts.COLUMN_VIEW ? eT.current : e_,
                                  isMobile: ej,
                                  nextSlots: eW,
                                  renderOverlay: () =>
                                    eA
                                      ? null
                                      : (0, i.jsx)(iP, {
                                          isOverlayCalendarEnabled: th,
                                          isFetchingOverlayBusyDates: tp,
                                          connectedCalendars: ty,
                                          overlayBusyDates: td,
                                          onToggleCalendar: tv,
                                          hasSession: w,
                                          handleClickContinue: h,
                                          handleSwitchStateChange: f,
                                          handleClickNoCalendar: () => {
                                            d();
                                          },
                                          isPlatform: D,
                                        }),
                                }),
                        }),
                      (0, i.jsx)(
                        eQ,
                        {
                          className: (0, tV.default)("relative z-10 flex [grid-area:meta]"),
                          children: (0, i.jsxs)(t7, {
                            area: "meta",
                            className:
                              "max-w-screen flex w-full flex-col md:w-(--booker-meta-width)",
                            children: [
                              tP &&
                                (eN === en.BookerLayouts.WEEK_VIEW ||
                                  eN === en.BookerLayouts.COLUMN_VIEW) &&
                                (0, i.jsx)("div", {
                                  className: "w-full px-5 pt-3",
                                  children: tM(),
                                }),
                              !eE &&
                                R &&
                                (0, i.jsx)("img", {
                                  loading: "eager",
                                  className:
                                    "-mb-9 h-auto w-full object-contain object-top ltr:rounded-tl-md rtl:rounded-tr-md sm:h-[70px] sm:object-cover",
                                  alt: "org banner",
                                  src: R,
                                }),
                              !eE &&
                                (0, i.jsx)(im, {
                                  selectedTimeslot: eP,
                                  classNames: eJ,
                                  event: E.data,
                                  isPending: E.isPending,
                                  isPlatform: D,
                                  TimezoneSelect: J,
                                  isPrivateLink: !!F,
                                  locale: M,
                                  timeZones: $,
                                  roundRobinHideOrgAndTeam: W,
                                  hideOrgTeamAvatar: H,
                                  hideEventTypeDetails: eE,
                                  isSettingsPreview: D,
                                  children: q,
                                }),
                              eN !== en.BookerLayouts.MONTH_VIEW &&
                                ("mobile" !== eN || "booking" !== ef) &&
                                (0, i.jsxs)("div", {
                                  className: "mt-auto px-5 py-3",
                                  children: [
                                    eN !== en.BookerLayouts.WEEK_VIEW &&
                                      eN !== en.BookerLayouts.COLUMN_VIEW &&
                                      tM(),
                                    (0, i.jsx)(nM, {
                                      classNames: B?.datePickerCustomClassNames,
                                      event: E,
                                      slots: A?.data?.slots,
                                      isLoading: A.isPending,
                                      scrollToTimeSlots: tC,
                                      showNoAvailabilityDialog: tL,
                                      onDateChange: () => {
                                        eD && ex(!0);
                                      },
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        },
                        "meta"
                      ),
                      (0, i.jsx)(
                        t7,
                        {
                          area: "main",
                          className: (0, tV.default)(
                            "sticky top-0 -ml-px h-full p-6 md:w-(--booker-main-width) md:border-l",
                            D && "no-scrollbar max-h-[60svh] overflow-y-auto"
                          ),
                          ...tk,
                          visible: "booking" === ef && !ek,
                          children: tB,
                        },
                        "book-event-form"
                      ),
                      (0, i.jsxs)(
                        t7,
                        {
                          area: "main",
                          visible: "booking" !== ef && eN === en.BookerLayouts.MONTH_VIEW,
                          ...tk,
                          initial: "visible",
                          className: (0, tV.default)(
                            "md:border-subtle -ml-px h-full shrink px-5 py-3  lg:w-(--booker-main-width)",
                            eE ? "" : "md:border-l"
                          ),
                          children: [
                            tM(),
                            (0, i.jsx)(nM, {
                              classNames: B?.datePickerCustomClassNames,
                              event: E,
                              slots: A?.data?.slots,
                              isLoading: A.isPending,
                              scrollToTimeSlots: tC,
                              showNoAvailabilityDialog: tL,
                            }),
                          ],
                        },
                        "datepicker"
                      ),
                      (0, i.jsx)(
                        t7,
                        {
                          area: "main",
                          visible: eN === en.BookerLayouts.WEEK_VIEW,
                          className: "border-subtle sticky top-0 -ml-px h-full md:border-l",
                          ...tk,
                          children: (0, i.jsx)(ij, {
                            extraDays: e_,
                            schedule: A.data,
                            isLoading: A.isPending,
                            event: E,
                          }),
                        },
                        "enable-calendar"
                      ),
                      (0, i.jsx)(
                        t7,
                        {
                          area: { default: "main", month_view: "timeslots" },
                          visible:
                            !(eD && ej) &&
                            ((eN !== en.BookerLayouts.WEEK_VIEW && "selecting_time" === ef) ||
                              eN === en.BookerLayouts.COLUMN_VIEW),
                          className: (0, tV.default)(
                            "flex h-full w-full flex-col overflow-x-auto py-3 pb-0 rtl:border-r ltr:md:border-l",
                            eN === en.BookerLayouts.MONTH_VIEW ? "px-5" : "px-6",
                            eN === en.BookerLayouts.COLUMN_VIEW
                              ? "border-default"
                              : "border-subtle rtl:border-default",
                            eN === en.BookerLayouts.MONTH_VIEW &&
                              "h-full overflow-hidden md:w-(--booker-timeslots-width)",
                            eN !== en.BookerLayouts.MONTH_VIEW && "sticky top-0"
                          ),
                          ref: eZ,
                          ...tk,
                          children: (0, i.jsx)(ad, {
                            onAvailableTimeSlotSelect: tA,
                            customClassNames: B?.availableTimeSlotsCustomClassNames,
                            extraDays: e_,
                            limitHeight: eN === en.BookerLayouts.MONTH_VIEW,
                            schedule: A,
                            isLoading: A.isPending,
                            seatsPerTimeSlot: E.data?.seatsPerTimeSlot,
                            unavailableTimeSlots: tO,
                            showAvailableSeatsCount: E.data?.seatsShowAvailabilityCount,
                            event: E,
                            loadingStates: e9,
                            renderConfirmNotVerifyEmailButtonCond: tc,
                            isVerificationCodeSending: tu,
                            onSubmit: tR,
                            skipConfirmStep: tE,
                            shouldRenderCaptcha: tI,
                            watchedCfToken: ti,
                            confirmButtonDisabled: V,
                            confirmStepClassNames: B?.confirmStep,
                            isPlatform: D,
                            invalidateAvailableSlotsOnBookingForm:
                              eR.PUBLIC_INVALIDATE_AVAILABLE_SLOTS_ON_BOOKING_FORM,
                            hostRescheduleBypassToggle: (0, i.jsx)(ig, {}),
                          }),
                        },
                        "timeslots"
                      ),
                    ],
                  }),
                }),
                (0, i.jsx)(ip, {
                  visible: "booking" !== ef && eN === en.BookerLayouts.MONTH_VIEW && !ej,
                  dayCount: eU,
                  isScheduleLoading: A.isLoading,
                  onButtonClick: () => {
                    eF(null);
                  },
                }),
                "booking" !== ef &&
                  E.data?.showInstantEventConnectNowModal &&
                  P &&
                  (0, i.jsx)("div", {
                    className: (0, tV.default)(
                      "animate-fade-in-up  z-40 my-2 opacity-0",
                      eN === en.BookerLayouts.MONTH_VIEW && eA ? "" : "fixed bottom-2"
                    ),
                    style: { animationDelay: "1s" },
                    children: (0, i.jsx)(iy, {
                      event: E.data,
                      cooldownMs: te,
                      onConnectNow: () => {
                        c();
                      },
                    }),
                  }),
                tI &&
                  ee &&
                  (0, i.jsx)("div", {
                    className: "mb-6 mt-auto pt-6",
                    children: ee((e) => {
                      e3.setValue("cfToken", e);
                    }),
                  }),
                !a &&
                  (!D || X) &&
                  !tI &&
                  (0, i.jsx)(
                    tG.m.span,
                    {
                      className: (0, tV.default)(
                        "mb-6 mt-auto pt-6 [&_img]:h-[15px]",
                        ew ? "dark" : "",
                        eN === en.BookerLayouts.MONTH_VIEW ? "block" : "hidden"
                      ),
                      children: (0, i.jsx)(tH, { logoOnly: !0, hasValidLicense: z }),
                    },
                    "logo"
                  ),
              ],
            }),
            (0, i.jsx)(i.Fragment, {
              children:
                O && e1
                  ? (0, i.jsx)(as, {
                      isOpenDialog: to,
                      setIsOpenDialog: ts,
                      email: e1,
                      isUserSessionRequiredToVerify: !1,
                      verifyCodeWithSessionNotRequired: O.verifyCodeWithSessionNotRequired,
                      verifyCodeWithSessionRequired: O.verifyCodeWithSessionRequired,
                      error: O.error,
                      resetErrors: O.resetErrors,
                      isPending: O.isPending,
                      setIsPending: O.setIsPending,
                      isPlatform: D,
                    })
                  : (0, i.jsx)(i.Fragment, {}),
            }),
            (0, i.jsx)(nR, {
              onCancel: () => eM(null),
              visible: "booking" === ef && ek,
              isPlatform: D,
              eventLength: E.data?.length,
              children: tB,
            }),
            (0, i.jsx)(tU.Dialog, {
              isPlatform: D,
              open: ej && ev,
              children: (0, i.jsxs)(t$.DialogContent, {
                type: void 0,
                enableOverflow: !0,
                className:
                  "fixed! inset-0! top-0! left-0! h-screen! max-h-screen! w-screen! max-w-none! translate-x-0! translate-y-0! rounded-none! m-0! px-8 pt-0 pb-8",
                children: [
                  (0, i.jsx)(iV, {
                    onClick: () => ex(!1),
                    event: E.data,
                    isPlatform: D,
                    TimezoneSelect: J,
                    timeZones: $,
                    selectedDate: ey,
                  }),
                  (0, i.jsx)(ad, {
                    onAvailableTimeSlotSelect: tA,
                    customClassNames: B?.availableTimeSlotsCustomClassNames,
                    extraDays: e_,
                    limitHeight: eN === en.BookerLayouts.MONTH_VIEW,
                    schedule: A,
                    isLoading: A.isPending,
                    seatsPerTimeSlot: E.data?.seatsPerTimeSlot,
                    unavailableTimeSlots: tO,
                    showAvailableSeatsCount: E.data?.seatsShowAvailabilityCount,
                    event: E,
                    loadingStates: e9,
                    renderConfirmNotVerifyEmailButtonCond: tc,
                    isVerificationCodeSending: tu,
                    onSubmit: tR,
                    skipConfirmStep: tE,
                    shouldRenderCaptcha: tI,
                    watchedCfToken: ti,
                    confirmButtonDisabled: V,
                    confirmStepClassNames: B?.confirmStep,
                    hideAvailableTimesHeader: !0,
                    isPlatform: D,
                    invalidateAvailableSlotsOnBookingForm:
                      eR.PUBLIC_INVALIDATE_AVAILABLE_SLOTS_ON_BOOKING_FORM,
                    hostRescheduleBypassToggle: (0, i.jsx)(ig, {}),
                  }),
                ],
              }),
            }),
            (0, i.jsx)(t3.ExternalRedirectInterstitial, {
              isOpen: !!ta,
              redirectUrl: ta?.url ?? "",
              onContinue: tr,
              onGoBack: tn,
            }),
          ],
        });
      },
      iq = (e) =>
        (0, i.jsx)(tY.LazyMotion, { strict: !0, features: tC, children: (0, i.jsx)(i$, { ...e }) }),
      iW = (0, eU.default)(() => e.A(933503).then((e) => e.TimezoneSelect), {
        loadableGenerated: { modules: [993225] },
        ssr: !1,
      }),
      iH = {
        defaultLayout: en.BookerLayouts.MONTH_VIEW,
        enabledLayouts: [en.BookerLayouts.MONTH_VIEW],
      },
      iZ = (e) => {
        var t;
        let a,
          r,
          n,
          f,
          y = (0, eF.useRouter)(),
          v = (0, eF.usePathname)(),
          x = (0, eF.useSearchParams)(),
          k = (0, ez.useEvent)({
            disabled: !!e.eventData,
            fromRedirectOfNonOrgLink: e.entity.fromRedirectOfNonOrgLink,
          }),
          w = e.eventData ? { data: e.eventData, isSuccess: !0, isError: !1, isPending: !1 } : k,
          _ =
            ((t = e.isSettingsPreview ? iH : w.data?.profile?.bookerLayouts),
            (a = (0, l.useIsEmbed)()),
            (r = (0, l.useEmbedType)()),
            ((e, t = {}) => {
              let [a, r] = (0, u.useBookerStoreContext)((e) => [e.layout, e.setLayout], p.shallow),
                n = (0, X.useIsEmbed)(),
                i = (0, X.useEmbedType)(),
                o = (0, X.useEmbedUiConfig)(),
                s = (0, X.useSlotsViewOnSmallScreen)(),
                l = t.embedState ? t.embedState.isEmbed : n,
                c = t.embedState ? t.embedState.embedType : i,
                d = t.embedState ? t.embedState.embedUiConfig : o,
                f = t.embedState ? t.embedState.slotsViewOnSmallScreen : s,
                y = g("(max-width: 768px)"),
                v = g("(max-width: 1024px)"),
                x = l ? (y ? "mobile" : J(d.layout) || a) : a,
                k = v ? Q[x].tablet : Q[x].desktop,
                w = l && "inline" !== c,
                _ = (0, m.useRef)(v ? Q[x].tablet : Q[x].desktop),
                C = e || h.defaultBookerLayoutSettings,
                S = (l && J(d.layout)) || C.defaultLayout;
              ((0, m.useEffect)(() => {
                y && "mobile" !== x ? r("mobile") : y || "mobile" !== x || r(S);
              }, [y, r, x, S]),
                (0, m.useEffect)(() => {
                  let e = (0, b.getQueryParam)("layout");
                  if (!y && !l && J(e) && C?.enabledLayouts?.length && e !== a) {
                    let t = C.enabledLayouts.find((t) => t === e);
                    t && r(t);
                  }
                }, [C, r, a, l, y]));
              let T = { mobile: !l, month_view: !1, week_view: !0, column_view: !0 }[x],
                j = (0, b.getQueryParam)("hideEventTypeDetails"),
                N = l ? d.hideEventTypeDetails : "string" == typeof j && "true" === j,
                E = (0, b.getQueryParam)("showTimezoneWhenEventDetailsHidden");
              return {
                shouldShowFormInDialog: T,
                hasDarkBackground: w,
                extraDays: k,
                columnViewExtraDays: _,
                isMobile: y,
                isEmbed: l,
                isTablet: v,
                layout: x,
                defaultLayout: S,
                hideEventTypeDetails: N,
                showTimezoneWhenEventDetailsHidden:
                  !0 === d.showTimezoneWhenEventDetailsHidden || "true" === E,
                slotsViewOnSmallScreen: f,
                bookerLayouts: C,
              };
            })(t, {
              embedState: {
                isEmbed: a,
                embedType: r,
                embedUiConfig: (0, l.useEmbedUiConfig)(),
                slotsViewOnSmallScreen: (0, c.useSlotsViewOnSmallScreen)(),
              },
            })),
          C = (0, u.useBookerStoreContext)((e) => e.selectedDate),
          S = x?.get("redirected") === "true",
          T = x?.get("username") || "",
          j = new URLSearchParams(window.location.search).get("rescheduleUid"),
          N = new URLSearchParams(window.location.search).get("rescheduledBy"),
          E = new URLSearchParams(window.location.search).get("bookingUid"),
          I = x?.get("cal.tz") || null;
        ((0, m.useEffect)(() => {
          s.sdkActionManager?.fire("navigatedToBooker", {});
        }, []),
          (0, er.useInitializeBookerStore)({
            ...e,
            eventId: e.entity.eventTypeId ?? w?.data?.id,
            rescheduleUid: j,
            rescheduledBy: N,
            bookingUid: E,
            layout: _.isMobile ? "mobile" : _.defaultLayout,
            org: e.entity.orgSlug,
            timezone: I,
          }),
          (0, u.useInitializeBookerStoreContext)({
            ...e,
            eventId: e.entity.eventTypeId ?? w?.data?.id,
            rescheduleUid: j,
            rescheduledBy: N,
            bookingUid: E,
            layout: _.isMobile ? "mobile" : _.defaultLayout,
            org: e.entity.orgSlug,
            timezone: I,
          }));
        let [A] = (0, u.useBookerStoreContext)((e) => [e.dayCount, e.setDayCount], p.shallow),
          { data: O } = (0, eV.useSession)(),
          D = (0, eB.useRouterQuery)(),
          L = !!O,
          R = x?.get("firstName"),
          B = x?.get("lastName"),
          P = Object.keys(D)
            .filter((e) => e.startsWith("metadata"))
            .reduce((e, t) => ({ ...e, [t.substring(9, t.length - 1)]: x?.get(t) }), {}),
          M = (0, m.useMemo)(
            () => ({
              name: x?.get("name") || (R ? `${R} ${B}` : null),
              guests: (x?.getAll("guests") || x?.getAll("guest")) ?? [],
            }),
            [x, R, B]
          ),
          z = (({
            event: e,
            sessionEmail: t,
            sessionName: a,
            sessionUsername: r,
            hasSession: n,
            extraOptions: i,
            prefillFormParams: o,
            clientId: s,
          }) => {
            let l = (0, er.useBookerStore)((e) => e.rescheduleUid),
              c = (0, er.useBookerStore)((e) => e.bookingData),
              { t: u } = (0, eS.useLocale)(),
              d = !!l && !!c,
              { values: p, key: h } = (function ({
                eventType: e,
                rescheduleUid: t,
                isRescheduling: a,
                email: r,
                name: n,
                username: i,
                hasSession: o,
                extraOptions: s,
                prefillFormParams: l,
                clientId: c,
              }) {
                let u = Object.entries(s)
                    .sort(([e], [t]) => e.localeCompare(t))
                    .map(([e, t]) =>
                      Array.isArray(t) ? `${e}:${t.sort().join(",")}` : `${e}:${t}`
                    )
                    .join("|"),
                  [d, p] = (0, m.useState)({ values: {}, key: "" }),
                  h = (0, er.useBookerStore)((e) => e.bookingData),
                  f = (0, er.useBookerStore)((e) => e.formValues),
                  g =
                    e?.team?.parent?.organizationSettings?.disableAutofillOnBookingPage ??
                    e?.owner?.profile?.organization?.organizationSettings
                      ?.disableAutofillOnBookingPage ??
                    !1;
                return (
                  (0, m.useEffect)(() => {
                    (async () => {
                      let d, m;
                      if (Object.keys(f).length)
                        return p({
                          values: f,
                          key: eA({ values: f, hasSession: o, stableHashExtraOptions: u }),
                        });
                      if (!e?.bookingFields) return;
                      let b = (({ bookingFields: e, view: t, translateFn: a }) =>
                          eC({
                            schema: en.bookingResponses.unwrap().partial().and(ey),
                            bookingFields: e,
                            isPartialSchema: !0,
                            view: t,
                            translateFn: a,
                          }))({
                          bookingFields: e.bookingFields,
                          view: t ? "reschedule" : "booking",
                        }),
                        y = g ? {} : { ...s, name: l.name, guests: l.guests };
                      g ||
                        null == e.shouldMergePhoneSystemFields ||
                        eI({
                          responses: y,
                          bookingFields: e.bookingFields,
                          isUnifiedPhoneFieldsEnabled: !0 === e.shouldMergePhoneSystemFields,
                        });
                      let v = await b.parseAsync(y),
                        x =
                          ((d =
                            t && h && h.attendees.length > 0 ? (h.attendees[0].email ?? "") : ""),
                          (m = t && h && h.attendees.length > 0 ? (h.attendees[0].name ?? "") : ""),
                          g
                            ? { email: d, name: m }
                            : {
                                email: d || (v.email ? v.email : (r ?? "")),
                                name: m || (v.name ? v.name : (n ?? i ?? "")),
                              });
                      if ((c && (x.email = x.email.replace(`+${c}`, "")), !a)) {
                        let t = { responses: {} };
                        ((t.responses = {
                          ...e.bookingFields.reduce(
                            (e, t) => ({ ...e, [t.name]: v[t.name] || void 0 }),
                            {}
                          ),
                          name: x.name,
                          email: x.email ?? "",
                        }),
                          p({
                            values: t,
                            key: eA({ values: t, hasSession: o, stableHashExtraOptions: u }),
                          }));
                      }
                      if (!t && !h) return;
                      let k = { responses: {}, bookingId: h?.id },
                        w = {
                          ...(h?.responses &&
                          "object" == typeof h.responses &&
                          !Array.isArray(h.responses)
                            ? h.responses
                            : {}),
                        };
                      (null != e.shouldMergePhoneSystemFields &&
                        eI({
                          responses: w,
                          bookingFields: e.bookingFields,
                          isUnifiedPhoneFieldsEnabled: !0 === e.shouldMergePhoneSystemFields,
                        }),
                        (k.responses = {
                          ...e.bookingFields.reduce((e, t) => ({ ...e, [t.name]: w[t.name] }), {}),
                          name: x.name,
                          email: x.email ?? "",
                        }),
                        p({
                          values: k,
                          key: eA({ values: k, hasSession: o, stableHashExtraOptions: u }),
                        }));
                    })();
                  }, [
                    e?.bookingFields,
                    e?.shouldMergePhoneSystemFields,
                    f,
                    a,
                    h,
                    h?.id,
                    t,
                    r,
                    n,
                    i,
                    l,
                    u,
                    g,
                  ]),
                  d
                );
              })({
                eventType: e,
                rescheduleUid: l,
                isRescheduling: d,
                email: t,
                name: a,
                username: r,
                hasSession: n,
                extraOptions: i,
                prefillFormParams: o,
                clientId: s,
              }),
              f = (({ schemaResolver: e, initialValues: t, key: a = "atoms-default" } = {}) => {
                let r = (0, m.useRef)(null),
                  n = (0, ea.useForm)({
                    defaultValues: t ?? { responses: null, globalError: void 0 },
                    resolver: e,
                  });
                (0, m.useEffect)(() => {
                  t && n.reset(t);
                }, [a]);
                let i = n.watch("responses.email"),
                  o = n.watch("responses.name"),
                  s =
                    "string" == typeof o
                      ? o
                      : o && "object" == typeof o
                        ? `${o.firstName ?? ""} ${o.lastName ?? ""}`.trim()
                        : "",
                  l = {
                    hasFormErrors: !!n.formState.errors.globalError,
                    formErrors: n.formState.errors.globalError,
                  };
                return {
                  bookingForm: n,
                  bookerFormErrorRef: r,
                  key: a,
                  formEmail: "string" == typeof i ? i : "",
                  formName: s,
                  beforeVerifyEmail: () => {
                    n.clearErrors();
                  },
                  formErrors: l,
                  errors: l,
                };
              })({
                schemaResolver: (0, m.useMemo)(() => {
                  let t = et.z
                    .object({
                      responses: e
                        ? (function ({ bookingFields: e, view: t, translateFn: a }) {
                            return eC({
                              schema: en.bookingResponses.and(eb.default.record(eb.default.any())),
                              bookingFields: e,
                              isPartialSchema: !1,
                              view: t,
                              translateFn: a,
                            });
                          })({
                            bookingFields: e.bookingFields,
                            view: l ? "reschedule" : "booking",
                            translateFn: (e, t) => u(e, t ?? {}),
                          })
                        : et.z.object({}),
                    })
                    .passthrough();
                  return (0, ee.zodResolver)(t, {}, { mode: "async" });
                }, [e, l, u]),
                initialValues: p,
                key: h,
              });
            return {
              ...f,
              beforeVerifyEmail: () => {
                (f.bookingForm.clearErrors(),
                  e ||
                    f.bookingForm.setError("globalError", { message: u("error_booking_event") }));
              },
            };
          })({
            event: w.data,
            sessionEmail: O?.user.email,
            sessionUsername: O?.user.username,
            sessionName: O?.user.name,
            hasSession: L,
            extraOptions: D,
            prefillFormParams: M,
          }),
          U = _.extraDays;
        "column_view" === _.layout && (U = _.columnViewExtraDays.current);
        let F = (({
            hasSession: e,
            selectedDate: t,
            overlayCalendarDays: a,
            isSettingsPreview: r,
          }) => {
            let { timezone: n } = (0, tm.useTimePreferences)(),
              i = n || "Europe/London",
              o = (0, d.useOverlayCalendarStore)((e) => e.isOverlayCalendarEnabled),
              s = (0, m.useMemo)(
                () => tp({ selectedDate: t, timezone: i, daysToLoad: a }),
                [i, a, t]
              ),
              [l, c] = (0, m.useState)(() => {
                let e = eP.localStorage.getItem("toggledConnectedCalendars");
                return new Set(e ? JSON.parse(e) : []);
              }),
              [u] = (0, d.useOverlayCalendarStore)(
                (e) => [e.calendarSettingsOverlayModal, e.setCalendarSettingsOverlayModal],
                p.shallow
              ),
              {
                data: h,
                isError: f,
                isFetching: g,
              } = tr.trpc.viewer.availability.calendarOverlay.useQuery(
                {
                  loggedInUsersTz: i,
                  dateFrom: s.dateFrom,
                  dateTo: s.dateTo,
                  calendarsToLoad: Array.from(l).map((e) => ({
                    credentialId: e.credentialId,
                    externalId: e.externalId,
                  })),
                },
                { enabled: !r && e && l.size > 0 && o && !!s.dateFrom && !!s.dateTo, staleTime: 0 }
              );
            (0, m.useEffect)(
              function () {
                f && c(new Set([]));
              },
              [f]
            );
            let b = !!u,
              y = !!(!r && e && (b || (o && 0 === l.size))),
              {
                data: v,
                error: x,
                isFetching: k,
                isPending: w,
              } = tr.trpc.viewer.calendars.connectedCalendars.useQuery(
                { skipSync: !b },
                { enabled: y }
              );
            return {
              overlayBusyDates: h,
              isFetchingOverlayBusyDates: (y && k) || g,
              isOverlayCalendarEnabled: o,
              connectedCalendars: {
                data: v?.connectedCalendars || [],
                error: y ? x : null,
                isLoading: y && w,
              },
              onToggleCalendar: c,
            };
          })({
            hasSession: L,
            selectedDate: C,
            overlayCalendarDays: U,
            isSettingsPreview: e.isSettingsPreview,
          }),
          V = (({
            email: e,
            name: t,
            requiresBookerEmailVerification: a,
            onVerifyEmail: r,
            eventTypeId: n,
          }) => {
            let [i, o] = (0, m.useState)(!1),
              s = (0, er.useBookerStore)((e) => e.verifiedEmail),
              l = (0, er.useBookerStore)((e) => e.setVerifiedEmail),
              c = (0, er.useBookerStore)((e) => !!(e.rescheduleUid && e.bookingData)),
              u = (0, ty.useDebounce)(e, 600),
              { data: d } = (0, eV.useSession)(),
              { t: p, i18n: h } = (0, eS.useLocale)(),
              f = tr.trpc.viewer.auth.sendVerifyEmailCode.useMutation({
                onSuccess: () => {
                  (o(!0), tn.toastManager.add({ title: p("email_sent"), type: "success" }));
                },
                onError: () => {
                  tn.toastManager.add({ title: p("email_not_sent"), type: "error" });
                },
              }),
              { data: g } = tr.trpc.viewer.public.checkIfUserEmailVerificationRequired.useQuery(
                { userSessionEmail: d?.user.email || "", email: u },
                { enabled: !!u && !c }
              );
            return {
              handleVerifyEmail: () => {
                (r?.(),
                  f.mutate({
                    email: e,
                    username: "string" == typeof t ? t : t?.firstName,
                    language: h.language || "en",
                    eventTypeId: n,
                  }));
              },
              isEmailVerificationModalVisible: i,
              setEmailVerificationModalVisible: o,
              setVerifiedEmail: l,
              renderConfirmNotVerifyEmailButtonCond: !!(c || (!a && !g) || (e && s && s === e)),
              isVerificationCodeSending: f.isPending,
            };
          })({
            email: z.formEmail,
            name: z.formName,
            requiresBookerEmailVerification: w?.data?.requiresBookerEmailVerification,
            onVerifyEmail: z.beforeVerifyEmail,
            eventTypeId: w?.data?.id,
          }),
          $ = ((e) => {
            let [t, a] = (0, u.useBookerStoreContext)(
                (e) => [e.selectedDuration, e.isTeamEvent],
                p.shallow
              ),
              [r, n, i, o] = (0, u.useBookerStoreContext)(
                (e) => [
                  e.selectedTimeslot,
                  e.setSelectedTimeslot,
                  e.tentativeSelectedTimeslots,
                  e.setTentativeSelectedTimeslots,
                ],
                p.shallow
              ),
              s = (0, tg.useCompatSearchParams)(),
              [l, c] = [
                th,
                function (e) {
                  th = e;
                },
              ],
              d = tr.trpc.viewer.slots.reserveSlot.useMutation({
                trpc: { context: { skipBatch: !0 } },
                onSuccess: (e) => {
                  c(e.uid);
                },
              }),
              h = tr.trpc.viewer.slots.removeSelectedSlotMark.useMutation({
                trpc: { context: { skipBatch: !0 } },
              }),
              f = e?.id,
              g = t || e?.length || 0,
              b = [...i, r].filter((e) => null !== e),
              y = (({
                eventTypeId: e,
                eventDuration: t,
                isTeamEvent: a,
                timeslotsAsISOString: r,
                slotReservationId: n,
              }) => {
                let i = (0, m.useRef)([]);
                if (!tb()) return i.current;
                let o = r.map((e) => {
                    let a = (0, e2.default)(e);
                    return {
                      utcStartIso: a.utc().toISOString(),
                      utcEndIso: a.add(t, "minutes").utc().toISOString(),
                    };
                  }),
                  s = tr.trpc.viewer.slots.isAvailable.useQuery(
                    { slots: o, eventTypeId: e },
                    {
                      refetchInterval: 1e3 * eR.PUBLIC_QUERY_RESERVATION_INTERVAL_SECONDS,
                      refetchOnWindowFocus: !0,
                      enabled: !!(e && r.length > 0 && n && !a),
                      staleTime: 1e3 * eR.PUBLIC_QUERY_RESERVATION_STALE_TIME_SECONDS,
                    }
                  );
                if (a) return [];
                let l = s.data?.slots;
                return (l && l.length > 0 && (i.current = l), l || i.current);
              })({
                eventTypeId: f,
                eventDuration: g,
                isTeamEvent: a,
                timeslotsAsISOString: Array.from(new Set(b)),
                slotReservationId: l,
              }),
              v = r ?? b.at(-1),
              x = () => {
                f &&
                  v &&
                  g &&
                  d.mutate({
                    slotUtcStartDate: (0, e2.default)(v).utc().toISOString(),
                    eventTypeId: f,
                    slotUtcEndDate: (0, e2.default)(v).utc().add(g, "minutes").toISOString(),
                    _isDryRun: (0, tf.isBookingDryRun)(s),
                  });
              };
            return (
              (0, m.useEffect)(() => {
                x();
                let t = setInterval(
                  () => {
                    x();
                  },
                  60 * parseInt(eR.MINUTES_TO_BOOK) * 1e3 - 2e3
                );
                return () => {
                  (e?.id && l && h.mutate({ uid: l }), clearInterval(t));
                };
              }, [e?.id, v]),
              {
                setSelectedTimeslot: n,
                setTentativeSelectedTimeslots: o,
                selectedTimeslot: r,
                tentativeSelectedTimeslots: i,
                slotReservationId: l,
                allSelectedTimeslots: b,
                quickAvailabilityChecks: y,
              }
            );
          })(w?.data ? { id: w.data.id, length: w.data.length } : null),
          q = (0, l.useIsEmbed)(),
          W = (0, ez.useScheduleForEvent)({
            eventId: e.entity.eventTypeId ?? w.data?.id,
            username: e.username,
            dayCount: A,
            eventSlug: e.eventSlug,
            month: e.month,
            duration: e.duration,
            selectedDate: C,
            teamMemberEmail: e.teamMemberEmail,
            fromRedirectOfNonOrgLink: e.entity.fromRedirectOfNonOrgLink,
            isTeamEvent: e.isTeamEvent ?? !!w.data?.team,
            useApiV2: e.useApiV2,
            bookerLayout: _,
            ...(e.entity.orgSlug ? { orgSlug: e.entity.orgSlug } : {}),
            restrictionSchedule:
              ((n =
                e.isSettingsPreview && e.previewSchedule?.restrictionScheduleId !== void 0
                  ? e.previewSchedule.restrictionScheduleId
                  : w.data?.restrictionScheduleId),
              (f =
                e.isSettingsPreview && e.previewSchedule?.useBookerTimezone !== void 0
                  ? e.previewSchedule.useBookerTimezone
                  : (w.data?.useBookerTimezone ?? !1)),
              n ? { id: n, useBookerTimezone: f } : void 0),
            _isSettingsPreview: e.isSettingsPreview,
            _previewOverrides: e.previewOverrides,
            _previewSchedule: e.previewSchedule
              ? {
                  commonScheduleId: e.previewSchedule.commonSchedule,
                  hostScheduleOverrides: e.previewSchedule.hostsSchedule,
                  restrictionScheduleId: e.previewSchedule.restrictionScheduleId,
                  useBookerTimezone: e.previewSchedule.useBookerTimezone,
                }
              : void 0,
          }),
          H = (({ event: e, hashedLink: t, bookingForm: a, metadata: r, isBookingDryRun: n }) => {
            let i = (0, eF.useRouter)(),
              o = (0, u.useBookerStoreContext)((e) => e.eventSlug),
              l = (0, u.useBookerStoreContext)((e) => e.eventId),
              c = (0, u.useBookerStoreContext)((e) => e.isInstantMeeting),
              [d, h] = (0, u.useBookerStoreContext)(
                (e) => [e.rescheduleUid, e.setRescheduleUid],
                p.shallow
              ),
              f = (0, u.useBookerStoreContext)((e) => e.rescheduledBy),
              [g, y] = (0, u.useBookerStoreContext)(
                (e) => [e.bookingData, e.setBookingData],
                p.shallow
              ),
              v = (0, u.useBookerStoreContext)((e) => e.selectedTimeslot),
              { t: x } = (0, eS.useLocale)(),
              {
                bookingSuccessRedirect: k,
                pendingRedirect: w,
                confirmRedirect: _,
                goBackToSuccessPage: C,
              } = (0, e3.useBookingSuccessRedirect)(),
              S = (0, m.useRef)(null),
              [T, j] = (0, m.useState)(),
              [N, E] = (0, m.useState)(),
              I = (0, u.useBookerStoreContext)((e) => e.selectedDuration),
              A = (0, u.useBookerStoreContext)((e) => e.bookerCorrelationId),
              O = (0, u.useBookerStoreContext)((e) => e.bypassHostAvailability),
              D = !!d && !!g,
              L = (0, b.getQueryParam)("bookingUid") ?? "";
            (0, m.useEffect)(() => {
              if (!c) return;
              let e = eP.localStorage.getItem(tl);
              if (e) {
                let t = JSON.parse(e),
                  a = t.eventTypeId === l && c && new Date(t.expiryTime) > new Date() ? t : null;
                a && (j(a.expiryTime), (0, b.updateQueryParam)("bookingUid", a.bookingUid));
              }
            }, [l, c]);
            let R = td(l),
              B = tr.trpc.viewer.bookings.getInstantBookingLocation.useQuery(
                { bookingUid: L },
                { enabled: !!L && c, refetchInterval: 2e3, refetchIntervalInBackground: !0 }
              );
            (0, m.useEffect)(
              function () {
                let e = B.data;
                if (e && e.booking && c)
                  try {
                    let t = en.bookingMetadataSchema.parse(e.booking?.metadata || {})?.videoCallUrl;
                    t
                      ? E(t)
                      : tn.toastManager.add({
                          title: x("something_went_wrong_on_our_end"),
                          type: "error",
                        });
                  } catch {
                    tn.toastManager.add({
                      title: x("something_went_wrong_on_our_end"),
                      type: "error",
                    });
                  }
              },
              [B.data, c]
            );
            let P = O && D ? e8 : e6.createBooking,
              M = (0, ti.useMutation)({
                mutationFn: (e) => P(e, { bookerCorrelationId: A }),
                onSuccess: (t) => {
                  if (t.isDryRun) {
                    (D
                      ? s.sdkActionManager?.fire(
                          "dryRunRescheduleBookingSuccessfulV2",
                          to({ ...t, isRecurring: !1 })
                        )
                      : s.sdkActionManager?.fire(
                          "dryRunBookingSuccessfulV2",
                          to({ ...t, isRecurring: !1 })
                        ),
                      i.push("/booking/dry-run-successful"));
                    return;
                  }
                  if ("isShortCircuitedBooking" in t && t.isShortCircuitedBooking) {
                    if (!t.uid) return void console.error("Decoy booking missing uid");
                    let e = {
                      uid: t.uid,
                      title: t.title ?? null,
                      startTime: t.startTime,
                      endTime: t.endTime,
                      booker: t.attendees?.[0] ?? null,
                      host: t.user ?? null,
                      location: t.location ?? null,
                    };
                    return (
                      (0, e4.storeDecoyBooking)(e),
                      void i.push(`/booking-successful/${t.uid}`)
                    );
                  }
                  let { uid: r, paymentUid: n } = t,
                    l = (0, eo.getFullName)(a.getValues("responses.name")),
                    c = e.data?.subsetOfHosts?.length
                      ? e.data?.subsetOfHosts.map((e) => e.user)
                      : e.data?.subsetOfUsers,
                    u = e.data?.isDynamic
                      ? I || e.data?.length
                      : I && e.data?.metadata?.multipleDuration?.includes(I)
                        ? I
                        : e.data?.length;
                  if (
                    (D
                      ? (s.sdkActionManager?.fire("rescheduleBookingSuccessful", {
                          booking: t,
                          eventType: e.data,
                          date: t?.startTime?.toString() || "",
                          duration: u,
                          organizer: {
                            name: c?.[0]?.name || "Nameless",
                            email: t?.userPrimaryEmail || t.user?.email || "Email-less",
                            timeZone: t.user?.timeZone || "Europe/London",
                          },
                          confirmed: !(
                            t.status === ta.BookingStatus.PENDING && e.data?.requiresConfirmation
                          ),
                        }),
                        s.sdkActionManager?.fire(
                          "rescheduleBookingSuccessfulV2",
                          ts({ ...t, isRecurring: !1 })
                        ))
                      : (s.sdkActionManager?.fire("bookingSuccessful", {
                          booking: t,
                          eventType: e.data,
                          date: t?.startTime?.toString() || "",
                          duration: u,
                          organizer: {
                            name: c?.[0]?.name || "Nameless",
                            email: t?.userPrimaryEmail || t.user?.email || "Email-less",
                            timeZone: t.user?.timeZone || "Europe/London",
                          },
                          confirmed: !(
                            t.status === ta.BookingStatus.PENDING && e.data?.requiresConfirmation
                          ),
                        }),
                        s.sdkActionManager?.fire(
                          "bookingSuccessfulV2",
                          ts({ ...t, isRecurring: !1 })
                        )),
                    n)
                  )
                    return void i.push(
                      (function (e) {
                        let { paymentUid: t, name: a, email: r, date: n, absolute: i = !0 } = e,
                          o = "";
                        i && (o = eR.WEBSITE_URL);
                        let s = (0, e$.stringify)({ date: n, name: a, email: r });
                        return `${o}/payment/${t}?${s}`;
                      })({
                        paymentUid: n,
                        date: v,
                        name: l,
                        email: a.getValues("responses.email"),
                        absolute: !1,
                      })
                    );
                  if (!r) return void console.error("No uid returned from createBookingMutation");
                  let d = {
                    isSuccessBookingPage: !0,
                    email: a.getValues("responses.email"),
                    eventTypeSlug: o,
                    seatReferenceUid: "seatReferenceUid" in t ? t.seatReferenceUid : null,
                    formerTime:
                      D && g?.startTime ? (0, e2.default)(g.startTime).toString() : void 0,
                    rescheduledBy: f,
                  };
                  k({
                    successRedirectUrl: e?.data?.successRedirectUrl || "",
                    query: d,
                    booking: t,
                    forwardParamsSuccessRedirect:
                      e?.data?.forwardParamsSuccessRedirect === void 0 ||
                      e?.data?.forwardParamsSuccessRedirect,
                    skipRedirectWarning: e?.data?.skipRedirectWarning,
                  });
                },
                onError: (e) => {
                  (S?.current && S.current.scrollIntoView({ behavior: "smooth" }),
                    e.message === tt.ErrorCode.BookerLimitExceededReschedule &&
                      e.data?.rescheduleUid &&
                      (h(e.data?.seatUid ?? e.data?.rescheduleUid),
                      y({
                        uid: e.data?.rescheduleUid,
                        startTime: e.data?.startTime,
                        attendees: e.data?.attendees,
                      })));
                },
              }),
              z = (0, ti.useMutation)({
                mutationFn: (e) => e7(e, { bookerCorrelationId: A }),
                onSuccess: (e) => {
                  (l &&
                    ((({ eventTypeId: e, expiryTime: t, bookingUid: a }) => {
                      let r = JSON.stringify({ eventTypeId: e, expiryTime: t, bookingUid: a });
                      eP.localStorage.setItem(tl, r);
                    })({ eventTypeId: l, expiryTime: e.expires, bookingUid: e.bookingUid }),
                    ((e) => {
                      if (!e) return;
                      let t = tu();
                      t[String(e)] = Date.now();
                      try {
                        eP.localStorage.setItem(tc, JSON.stringify(t));
                      } catch {}
                    })(l)),
                    (0, b.updateQueryParam)("bookingUid", e.bookingUid),
                    j(e.expires));
                },
                onError: (e) => {
                  (console.error("Error creating instant booking", e),
                    S?.current && S.current.scrollIntoView({ behavior: "smooth" }));
                },
              }),
              U = (0, ti.useMutation)({
                mutationFn: (e) => te(e, { bookerCorrelationId: A }),
                onSuccess: async (t) => {
                  let r = t[0] || {};
                  if (r.isDryRun) {
                    (D
                      ? s.sdkActionManager?.fire("dryRunRescheduleBookingSuccessfulV2", {
                          ...to({ ...r, isRecurring: !0 }),
                          allBookings: t.map((e) => ({
                            startTime: e.startTime,
                            endTime: e.endTime,
                          })),
                        })
                      : s.sdkActionManager?.fire("dryRunBookingSuccessfulV2", {
                          ...to({ ...r, isRecurring: !0 }),
                          allBookings: t.map((e) => ({
                            startTime: e.startTime,
                            endTime: e.endTime,
                          })),
                        }),
                      i.push("/booking/dry-run-successful"));
                    return;
                  }
                  let { uid: n } = r;
                  if (!n)
                    return void console.error(
                      "No uid returned from createRecurringBookingMutation"
                    );
                  let l = {
                    isSuccessBookingPage: !0,
                    allRemainingBookings: !0,
                    email: a.getValues("responses.email"),
                    eventTypeSlug: o,
                    formerTime:
                      D && g?.startTime ? (0, e2.default)(g.startTime).toString() : void 0,
                  };
                  (D
                    ? s.sdkActionManager?.fire("rescheduleBookingSuccessfulV2", {
                        ...ts({ ...r, isRecurring: !0 }),
                        allBookings: t.map((e) => ({ startTime: e.startTime, endTime: e.endTime })),
                      })
                    : s.sdkActionManager?.fire("bookingSuccessfulV2", {
                        ...ts({ ...r, isRecurring: !0 }),
                        allBookings: t.map((e) => ({ startTime: e.startTime, endTime: e.endTime })),
                      }),
                    k({
                      successRedirectUrl: e?.data?.successRedirectUrl || "",
                      query: l,
                      booking: r,
                      forwardParamsSuccessRedirect:
                        e?.data?.forwardParamsSuccessRedirect === void 0 ||
                        e?.data?.forwardParamsSuccessRedirect,
                      skipRedirectWarning: e?.data?.skipRedirectWarning,
                    }));
                },
                onError: (e, t, a) => {
                  (console.error("Error creating recurring booking", e),
                    S && S.current?.scrollIntoView({ behavior: "smooth" }));
                },
              }),
              F = (({
                bookingForm: e,
                event: t,
                metadata: a,
                hashedLink: r,
                handleBooking: n,
                handleInstantBooking: i,
                handleRecBooking: o,
                locationUrl: s,
                routingFormSearchParams: l,
                isBookingDryRun: c,
                rrHostSubsetIds: d,
              }) => {
                let m = (0, eq.useIsPlatform)(),
                  p = (0, u.useBookerStoreContext)((e) => e.setFormValues),
                  h = (0, u.useBookerStoreContext)((e) => e.selectedTimeslot),
                  f = (0, u.useBookerStoreContext)((e) => e.selectedDuration),
                  { timezone: g } = (0, eW.useBookerTime)(),
                  b = (0, u.useBookerStoreContext)((e) => e.rescheduleUid),
                  y = (0, u.useBookerStoreContext)((e) => e.rescheduledBy),
                  { t: v, i18n: x } = (0, e1.useAtomsLocale)(),
                  k = (0, u.useBookerStoreContext)((e) => e.username),
                  w = (0, u.useBookerStoreContext)((e) => e.recurringEventCount),
                  _ = (0, u.useBookerStoreContext)((e) => e.bookingData),
                  C = (0, u.useBookerStoreContext)((e) => e.seatedEventData),
                  S = (0, u.useBookerStoreContext)((e) => e.isInstantMeeting),
                  T = (0, u.useBookerStoreContext)((e) => e.org),
                  j = (0, u.useBookerStoreContext)((e) => e.teamMemberEmail),
                  N = (0, u.useBookerStoreContext)((e) => e.crmOwnerRecordType),
                  E = (0, u.useBookerStoreContext)((e) => e.crmAppSlug),
                  I = (0, u.useBookerStoreContext)((e) => e.crmRecordId),
                  A = (0, u.useBookerStoreContext)((e) => e.pendingCrmTraceId),
                  O = (0, u.useBookerStoreContext)((e) => e.crmOwnerRRFallbackActive),
                  D = (0, u.useBookerStoreContext)((e) => e.verificationCode),
                  L = (e) => {
                    let t = v("can_you_try_again");
                    (e instanceof Error && (t = v(e.message)), (0, eH.showToast)(t, "error"));
                  },
                  R = (0, eF.useSearchParams)();
                return (u) => {
                  let B,
                    P = e.getValues(),
                    M = u ?? h;
                  if ((u && !m && (B = { onError: L }), M)) {
                    if ((p({}), e.clearErrors(), !t?.data))
                      return void e.setError("globalError", { message: v("error_booking_event") });
                    let u = t.data.length;
                    t.data.isDynamic
                      ? (u = f || t.data.length)
                      : f && t.data.metadata?.multipleDuration?.includes(f) && (u = f);
                    let m = {
                        values: P,
                        duration: u,
                        event: t.data,
                        date: M,
                        timeZone: g,
                        language: x.language,
                        rescheduleUid: b || void 0,
                        rescheduledBy: y || void 0,
                        bookingUid: _?.uid || C?.bookingUid || void 0,
                        username: k || "",
                        metadata: a,
                        hashedLink: r,
                        teamMemberEmail: j,
                        crmOwnerRecordType: N,
                        crmAppSlug: E,
                        crmRecordId: I,
                        crmOwnerRRFallbackActive: O,
                        pendingCrmTraceId: A,
                        orgSlug: T || void 0,
                        routingFormSearchParams: l,
                        isDryRunProp: c,
                        verificationCode: D || void 0,
                        rrHostSubsetIds: d,
                      },
                      h = (function (e) {
                        if (!e) return;
                        let t = Object.fromEntries(
                          [
                            "utm_source",
                            "utm_medium",
                            "utm_campaign",
                            "utm_term",
                            "utm_content",
                          ].map((t) => [t, e.get(t) ?? void 0])
                        );
                        return Object.values(t).every((e) => void 0 === e) ? void 0 : t;
                      })(R);
                    (S
                      ? i(e0(m), B)
                      : t.data?.recurringEvent?.freq != null && w && !b
                        ? o(
                            ((e, t, a) => {
                              let r = e.event ?? {},
                                [, n] = eJ(
                                  {
                                    startDate: e.date,
                                    timeZone: e.timeZone,
                                    recurringEvent: r.recurringEvent ?? null,
                                    recurringCount: t,
                                    withDefaultTimeFormat: !0,
                                  },
                                  e.language || "en"
                                ),
                                i = e0({ ...e, bookingUid: void 0 }),
                                o = (0, eZ.v4)(),
                                s = e.duration || r.length || 0;
                              return n.map((e) => ({
                                ...i,
                                start: (0, eY.default)(e).format(),
                                end: (0, eY.default)(e).add(s, "minute").format(),
                                recurringEventId: o,
                                schedulingType: r.schedulingType || void 0,
                                recurringCount: n.length,
                                tracking: a,
                              }));
                            })(m, w, h),
                            B
                          )
                        : n({ ...e0(m), locationUrl: s, tracking: h }, B),
                      p({}),
                      e.clearErrors());
                  }
                };
              })({
                event: e,
                bookingForm: a,
                hashedLink: t,
                metadata: r,
                handleInstantBooking: (e) => {
                  let t = td(l);
                  t > 0
                    ? tn.toastManager.add({
                        title: x("please_try_again_later_or_book_another_slot", {
                          remaining: Math.ceil(t / 6e4),
                        }),
                        type: "error",
                      })
                    : z.mutate(e);
                },
                handleRecBooking: U.mutate,
                handleBooking: M.mutate,
                isBookingDryRun: n,
              });
            return {
              handleBookEvent: F,
              expiryTime: T,
              bookingForm: a,
              bookerFormErrorRef: S,
              errors: {
                hasDataErrors: !!(M.isError || U.isError || z.isError),
                dataErrors: M.error || U.error || z.error,
              },
              loadingStates: {
                creatingBooking: M.isPending || M.isSuccess,
                creatingRecurringBooking: U.isPending || U.isSuccess,
                creatingInstantBooking: z.isPending,
              },
              instantVideoMeetingUrl: N,
              instantConnectCooldownMs: R,
              bookingUid: L,
              pendingRedirect: w,
              confirmRedirect: _,
              goBackToSuccessPage: C,
            };
          })({
            event: w,
            hashedLink: e.hashedLink,
            bookingForm: z.bookingForm,
            metadata: P ?? {},
            teamMemberEmail: e.teamMemberEmail,
          });
        (0, c.useBookerEmbedEvents)({ eventId: w.data?.id, eventSlug: w.data?.slug, schedule: W });
        let Z = (({ onSuccess: e }) => {
            let { t } = (0, eS.useLocale)(),
              [a, r] = (0, m.useState)(!1),
              [n, i] = (0, m.useState)(""),
              [o, s] = (0, m.useState)(""),
              [l, c] = (0, m.useState)(!1),
              u = tr.trpc.viewer.organizations.verifyCode.useMutation({
                onSuccess: (t) => {
                  (r(!1), e(t));
                },
                onError: (e) => {
                  (r(!1), c(!1), "invalid_code" === e.message && i(t("code_provided_invalid")));
                },
              }),
              d = tr.trpc.viewer.auth.verifyCodeUnAuthenticated.useMutation({
                onSuccess: (t) => {
                  (r(!1), e(t));
                },
                onError: (e) => {
                  (r(!1), c(!1), "invalid_code" === e.message && i(t("code_provided_invalid")));
                },
              });
            return {
              verifyCodeWithSessionRequired: (e, t) => {
                u.mutate({ code: e, email: t });
              },
              verifyCodeWithSessionNotRequired: (e, t) => {
                d.mutate({ code: e, email: t });
              },
              isPending: a,
              setIsPending: r,
              error: n,
              value: o,
              hasVerified: l,
              setValue: s,
              setHasVerified: c,
              resetErrors: () => i(""),
            };
          })({
            onSuccess: () => {
              z.formEmail &&
                (V.setVerifiedEmail(z.formEmail),
                V.setEmailVerificationModalVisible(!1),
                H.handleBookEvent());
            },
          }),
          Y = (0, d.useOverlayCalendarStore)((e) => e.setIsOverlayCalendarEnabled),
          G = (0, m.useCallback)(
            (e) => {
              (e
                ? ((0, b.updateQueryParam)("overlayCalendar", "true"),
                  eP.localStorage.setItem("overlayCalendarSwitchDefault", "true"))
                : ((0, b.removeQueryParam)("overlayCalendar"),
                  eP.localStorage.removeItem("overlayCalendarSwitchDefault")),
                Y(e));
            },
            [Y]
          );
        (({ brandColor: e, darkBrandColor: t, theme: a }) => {
          let r = (0, eO.default)({ lightVal: e, darkVal: t });
          ((0, eL.useCalcomTheme)(r), (0, eD.default)(a, void 0 === a));
        })({
          brandColor:
            w.data?.profile.brandColor ?? e.initialBrandColor ?? eR.DEFAULT_LIGHT_BRAND_COLOR,
          darkBrandColor:
            w.data?.profile.darkBrandColor ??
            e.initialDarkBrandColor ??
            eR.DEFAULT_DARK_BRAND_COLOR,
          theme: e.isSettingsPreview ? void 0 : (w.data?.profile.theme ?? e.initialTheme),
        });
        let K = !!(
          w.data?.instantMeetingParameters &&
          x &&
          w.data.instantMeetingParameters?.every?.((e) => Array.from(x.values()).includes(e))
        );
        return (
          (0, m.useEffect)(() => {
            Y(
              "true" === (0, b.getQueryParam)("overlayCalendar") ||
                eP.localStorage?.getItem("overlayCalendarSwitchDefault") === "true"
            );
          }, [Y]),
          (0, m.useEffect)(() => {
            L && !e.isSettingsPreview && G(!0);
          }, [L, e.isSettingsPreview]),
          (0, i.jsx)(iq, {
            TimezoneSelect: iW,
            ...e,
            onGoBackInstantMeeting: () => {
              v &&
                (window.location.href = (function (e, t) {
                  let a = new URLSearchParams(t);
                  for (let e of [...tv, ...tx]) a.delete(e);
                  let r = a.toString();
                  return r ? `${e}?${r}` : e;
                })(v, window.location.search));
            },
            onConnectNowInstantMeeting: () => {
              let e;
              if (!v) return;
              let t =
                ((e = new URLSearchParams(window.location.search)).set("isInstantMeeting", "true"),
                `${v}?${e.toString()}`);
              if (q) {
                let e = `${new URL(document.URL).origin}/${t}`;
                window.open(e, "_blank", "noopener,noreferrer");
              } else y.push(t);
            },
            onOverlayClickNoCalendar: () => {
              y.push("/apps/categories/calendar");
            },
            onClickOverlayContinue: () => {
              let e = new URL(`${eR.WEBAPP_URL}/login`);
              (e.searchParams.set("callbackUrl", window.location.pathname),
                e.searchParams.set("overlayCalendar", "true"),
                y.push(e.toString()));
            },
            onOverlaySwitchStateChange: G,
            sessionUsername: O?.user.orgAwareUsername ?? O?.user.username,
            isRedirect: S,
            fromUserNameRedirected: T,
            rescheduleUid: j,
            rescheduledBy: N,
            bookingUid: E,
            hasSession: L,
            hasValidLicense: O?.hasValidLicense ?? !1,
            extraOptions: D,
            bookings: H,
            calendars: F,
            slots: $,
            verifyEmail: V,
            bookerForm: z,
            event: w,
            bookerLayout: _,
            schedule: W,
            verifyCode: Z,
            isPlatform: !1,
            isSettingsPreview: e.isSettingsPreview,
            areInstantMeetingParametersSet: K,
            userLocale: O?.user.locale,
            renderCaptchaElement: (e) =>
              (0, i.jsx)(eM.default, { appearance: "interaction-only", onVerify: e }),
            renderTagManager: (e) => (0, i.jsx)(o.default, { eventType: e }),
          })
        );
      };
    e.s(
      [
        "BookerWebWrapper",
        0,
        (e) => (0, i.jsx)(u.BookerStoreProvider, { children: (0, i.jsx)(iZ, { ...e }) }),
        "BookerWebWrapperComponent",
        0,
        iZ,
      ],
      692969
    );
  },
]);
