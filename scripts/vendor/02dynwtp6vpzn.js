(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  654291,
  39732,
  94802,
  707749,
  541730,
  24235,
  93082,
  705010,
  911712,
  632082,
  944362,
  156346,
  357892,
  372775,
  660678,
  431300,
  385283,
  189627,
  70773,
  606209,
  (e) => {
    "use strict";
    e.i(247167);
    var t,
      r,
      n,
      i = (function () {
        function e() {
          ((this.keyToValue = new Map()), (this.valueToKey = new Map()));
        }
        return (
          (e.prototype.set = function (e, t) {
            (this.keyToValue.set(e, t), this.valueToKey.set(t, e));
          }),
          (e.prototype.getByKey = function (e) {
            return this.keyToValue.get(e);
          }),
          (e.prototype.getByValue = function (e) {
            return this.valueToKey.get(e);
          }),
          (e.prototype.clear = function () {
            (this.keyToValue.clear(), this.valueToKey.clear());
          }),
          e
        );
      })(),
      s = (function () {
        function e(e) {
          ((this.generateIdentifier = e), (this.kv = new i()));
        }
        return (
          (e.prototype.register = function (e, t) {
            this.kv.getByValue(e) || (t || (t = this.generateIdentifier(e)), this.kv.set(t, e));
          }),
          (e.prototype.clear = function () {
            this.kv.clear();
          }),
          (e.prototype.getIdentifier = function (e) {
            return this.kv.getByValue(e);
          }),
          (e.prototype.getValue = function (e) {
            return this.kv.getByKey(e);
          }),
          e
        );
      })(),
      a =
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            })(e, t);
        }),
        function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
          function r() {
            this.constructor = e;
          }
          (n(e, t),
            (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r())));
        }),
      o = new ((function (e) {
        function t() {
          var t =
            e.call(this, function (e) {
              return e.name;
            }) || this;
          return ((t.classToAllowedProps = new Map()), t);
        }
        return (
          a(t, e),
          (t.prototype.register = function (t, r) {
            "object" == typeof r
              ? (r.allowProps && this.classToAllowedProps.set(t, r.allowProps),
                e.prototype.register.call(this, t, r.identifier))
              : e.prototype.register.call(this, t, r);
          }),
          (t.prototype.getAllowedProps = function (e) {
            return this.classToAllowedProps.get(e);
          }),
          t
        );
      })(s))(),
      u = new s(function (e) {
        var t;
        return null != (t = e.description) ? t : "";
      }),
      l = function (e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          i,
          s = r.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = s.next()).done; ) a.push(n.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            n && !n.done && (r = s.return) && r.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      };
    function c(e, t) {
      Object.entries(e).forEach(function (e) {
        var r = l(e, 2),
          n = r[0];
        return t(r[1], n);
      });
    }
    function h(e, t) {
      return -1 !== e.indexOf(t);
    }
    function f(e, t) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        if (t(n)) return n;
      }
    }
    var p = {},
      d = function (e) {
        p[e.name] = e;
      },
      y = function (e) {
        return (function (e, t) {
          var r = (function (e) {
            if ("values" in Object) return Object.values(e);
            var t = [];
            for (var r in e) e.hasOwnProperty(r) && t.push(e[r]);
            return t;
          })(e);
          if ("find" in r) return r.find(t);
          for (var n = 0; n < r.length; n++) {
            var i = r[n];
            if (t(i)) return i;
          }
        })(p, function (t) {
          return t.isApplicable(e);
        });
      },
      m = function (e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          i,
          s = r.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = s.next()).done; ) a.push(n.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            n && !n.done && (r = s.return) && r.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      },
      g = function (e, t) {
        for (var r = 0, n = t.length, i = e.length; r < n; r++, i++) e[i] = t[r];
        return e;
      },
      b = [],
      v = function (e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      w = function (e) {
        return void 0 === e;
      },
      O = function (e) {
        return (
          "Object" === v(e) &&
          (null === Object.getPrototypeOf(e) ||
            (e !== Object.prototype &&
              e.constructor === Object &&
              Object.getPrototypeOf(e) === Object.prototype))
        );
      },
      R = function (e) {
        return O(e) && 0 === Object.keys(e).length;
      },
      E = function (e) {
        return Array.isArray(e);
      },
      C = function (e) {
        return e instanceof Map;
      },
      Q = function (e) {
        return e instanceof Set;
      },
      S = function (e) {
        return "Symbol" === v(e);
      },
      q = function (e) {
        return "number" == typeof e && isNaN(e);
      },
      P = function (e) {
        return (
          "boolean" == typeof e ||
          null === e ||
          w(e) ||
          ("number" == typeof e && !isNaN(e)) ||
          "string" == typeof e ||
          S(e)
        );
      },
      T = function (e) {
        return e.replace(/\./g, "\\.");
      },
      D = function (e) {
        return e.map(String).map(T).join(".");
      },
      x = function (e) {
        for (var t = [], r = "", n = 0; n < e.length; n++) {
          var i = e.charAt(n);
          if ("\\" === i && "." === e.charAt(n + 1)) {
            ((r += "."), n++);
            continue;
          }
          if ("." === i) {
            (t.push(r), (r = ""));
            continue;
          }
          r += i;
        }
        var s = r;
        return (t.push(s), t);
      },
      I = function () {
        return (I =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      },
      A = function (e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          i,
          s = r.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = s.next()).done; ) a.push(n.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            n && !n.done && (r = s.return) && r.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      },
      M = function (e, t) {
        for (var r = 0, n = t.length, i = e.length; r < n; r++, i++) e[i] = t[r];
        return e;
      };
    function k(e, t, r, n) {
      return { isApplicable: e, annotation: t, transform: r, untransform: n };
    }
    var _ = [
      k(
        w,
        "undefined",
        function () {
          return null;
        },
        function () {}
      ),
      k(
        function (e) {
          return "bigint" == typeof e;
        },
        "bigint",
        function (e) {
          return e.toString();
        },
        function (e) {
          return "u" > typeof BigInt
            ? BigInt(e)
            : (console.error("Please add a BigInt polyfill."), e);
        }
      ),
      k(
        function (e) {
          return e instanceof Date && !isNaN(e.valueOf());
        },
        "Date",
        function (e) {
          return e.toISOString();
        },
        function (e) {
          return new Date(e);
        }
      ),
      k(
        function (e) {
          return e instanceof Error;
        },
        "Error",
        function (e) {
          var t = { name: e.name, message: e.message };
          return (
            b.forEach(function (r) {
              t[r] = e[r];
            }),
            t
          );
        },
        function (e) {
          var t = Error(e.message);
          return (
            (t.name = e.name),
            (t.stack = e.stack),
            b.forEach(function (r) {
              t[r] = e[r];
            }),
            t
          );
        }
      ),
      k(
        function (e) {
          return e instanceof RegExp;
        },
        "regexp",
        function (e) {
          return "" + e;
        },
        function (e) {
          return new RegExp(e.slice(1, e.lastIndexOf("/")), e.slice(e.lastIndexOf("/") + 1));
        }
      ),
      k(
        Q,
        "set",
        function (e) {
          return M([], A(e.values()));
        },
        function (e) {
          return new Set(e);
        }
      ),
      k(
        C,
        "map",
        function (e) {
          return M([], A(e.entries()));
        },
        function (e) {
          return new Map(e);
        }
      ),
      k(
        function (e) {
          var t;
          return q(e) || (t = e) === 1 / 0 || t === -1 / 0;
        },
        "number",
        function (e) {
          return q(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity";
        },
        Number
      ),
      k(
        function (e) {
          return 0 === e && 1 / e == -1 / 0;
        },
        "number",
        function () {
          return "-0";
        },
        Number
      ),
    ];
    function U(e, t, r, n) {
      return { isApplicable: e, annotation: t, transform: r, untransform: n };
    }
    var j = U(
        function (e) {
          return !!S(e) && !!u.getIdentifier(e);
        },
        function (e) {
          return ["symbol", u.getIdentifier(e)];
        },
        function (e) {
          return e.description;
        },
        function (e, t) {
          var r = u.getValue(t[1]);
          if (!r) throw Error("Trying to deserialize unknown symbol");
          return r;
        }
      ),
      F = [
        Int8Array,
        Uint8Array,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array,
        Uint8ClampedArray,
      ].reduce(function (e, t) {
        return ((e[t.name] = t), e);
      }, {}),
      N = U(
        function (e) {
          return ArrayBuffer.isView(e) && !(e instanceof DataView);
        },
        function (e) {
          return ["typed-array", e.constructor.name];
        },
        function (e) {
          return M([], A(e));
        },
        function (e, t) {
          var r = F[t[1]];
          if (!r) throw Error("Trying to deserialize unknown typed array");
          return new r(e);
        }
      );
    function K(e) {
      return null != e && !!e.constructor && !!o.getIdentifier(e.constructor);
    }
    var H = U(
        K,
        function (e) {
          return ["class", o.getIdentifier(e.constructor)];
        },
        function (e) {
          var t = o.getAllowedProps(e.constructor);
          if (!t) return I({}, e);
          var r = {};
          return (
            t.forEach(function (t) {
              r[t] = e[t];
            }),
            r
          );
        },
        function (e, t) {
          var r = o.getValue(t[1]);
          if (!r)
            throw Error(
              "Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564"
            );
          return Object.assign(Object.create(r.prototype), e);
        }
      ),
      B = U(
        function (e) {
          return !!y(e);
        },
        function (e) {
          return ["custom", y(e).name];
        },
        function (e) {
          return y(e).serialize(e);
        },
        function (e, t) {
          var r = p[t[1]];
          if (!r) throw Error("Trying to deserialize unknown custom value");
          return r.deserialize(e);
        }
      ),
      z = [H, j, B, N],
      L = function (e) {
        var t = f(z, function (t) {
          return t.isApplicable(e);
        });
        if (t) return { value: t.transform(e), type: t.annotation(e) };
        var r = f(_, function (t) {
          return t.isApplicable(e);
        });
        if (r) return { value: r.transform(e), type: r.annotation };
      },
      V = {};
    _.forEach(function (e) {
      V[e.annotation] = e;
    });
    var $ = function (e, t) {
        if (E(t))
          switch (t[0]) {
            case "symbol":
              return j.untransform(e, t);
            case "class":
              return H.untransform(e, t);
            case "custom":
              return B.untransform(e, t);
            case "typed-array":
              return N.untransform(e, t);
            default:
              throw Error("Unknown transformation: " + t);
          }
        var r = V[t];
        if (!r) throw Error("Unknown transformation: " + t);
        return r.untransform(e);
      },
      W = function (e, t) {
        for (var r = e.keys(); t > 0; ) (r.next(), t--);
        return r.next().value;
      };
    function G(e) {
      if (h(e, "__proto__")) throw Error("__proto__ is not allowed as a property");
      if (h(e, "prototype")) throw Error("prototype is not allowed as a property");
      if (h(e, "constructor")) throw Error("constructor is not allowed as a property");
    }
    var J = function (e, t, r) {
        if ((G(t), 0 === t.length)) return r(e);
        for (var n = e, i = 0; i < t.length - 1; i++) {
          var s = t[i];
          if (E(n)) n = n[+s];
          else if (O(n)) n = n[s];
          else if (Q(n)) {
            var a = +s;
            n = W(n, a);
          } else if (C(n)) {
            if (i === t.length - 2) break;
            var a = +s,
              o = 0 == +t[++i] ? "key" : "value",
              u = W(n, a);
            switch (o) {
              case "key":
                n = u;
                break;
              case "value":
                n = n.get(u);
            }
          }
        }
        var l = t[t.length - 1];
        if (((E(n) || O(n)) && (n[l] = r(n[l])), Q(n))) {
          var c = W(n, +l),
            h = r(c);
          c !== h && (n.delete(c), n.add(h));
        }
        if (C(n)) {
          var a = +t[t.length - 2],
            f = W(n, a),
            o = 0 == +l ? "key" : "value";
          switch (o) {
            case "key":
              var p = r(f);
              (n.set(p, n.get(f)), p !== f && n.delete(f));
              break;
            case "value":
              n.set(f, r(n.get(f)));
          }
        }
        return e;
      },
      Y = function (e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          i,
          s = r.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = s.next()).done; ) a.push(n.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            n && !n.done && (r = s.return) && r.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      },
      Z = function (e, t) {
        for (var r = 0, n = t.length, i = e.length; r < n; r++, i++) e[i] = t[r];
        return e;
      },
      X = function (e, t, r, n) {
        if (
          (void 0 === r && (r = []),
          void 0 === n && (n = []),
          P(e) || ((i = r), (s = t.get(e)) ? s.push(i) : t.set(e, [i])),
          !(O(e) || E(e) || C(e) || Q(e) || K(e)))
        ) {
          var i,
            s,
            a,
            o = L(e);
          return o ? { transformedValue: o.value, annotations: [o.type] } : { transformedValue: e };
        }
        if (h(n, e)) return { transformedValue: null };
        var u = L(e),
          l = null != (a = null == u ? void 0 : u.value) ? a : e;
        P(e) || (n = Z(Z([], Y(n)), [e]));
        var f = E(l) ? [] : {},
          p = {};
        return (c(l, function (e, i) {
          var s = X(e, t, Z(Z([], Y(r)), [i]), n);
          ((f[i] = s.transformedValue),
            E(s.annotations)
              ? (p[i] = s.annotations)
              : O(s.annotations) &&
                c(s.annotations, function (e, t) {
                  p[T(i) + "." + t] = e;
                }));
        }),
        R(p))
          ? { transformedValue: f, annotations: u ? [u.type] : void 0 }
          : { transformedValue: f, annotations: u ? [u.type, p] : p };
      };
    function ee(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    }
    function et(e) {
      return "Array" === ee(e);
    }
    ((t = function (e) {
      return "Null" === ee(e);
    }),
      (r = function (e) {
        return "Undefined" === ee(e);
      }));
    var er = function () {
        return (er =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      },
      en = function (e) {
        var t,
          r,
          n = new Map(),
          i = X(e, n),
          s = { json: i.transformedValue };
        i.annotations && (s.meta = er(er({}, s.meta), { values: i.annotations }));
        var a =
          ((t = {}),
          (r = void 0),
          (n.forEach(function (e) {
            if (!(e.length <= 1)) {
              var n = Y(
                  e
                    .map(function (e) {
                      return e.map(String);
                    })
                    .sort(function (e, t) {
                      return e.length - t.length;
                    })
                ),
                i = n[0],
                s = n.slice(1);
              0 === i.length ? (r = s.map(D)) : (t[D(i)] = s.map(D));
            }
          }),
          r)
            ? R(t)
              ? [r]
              : [r, t]
            : R(t)
              ? void 0
              : t);
        return (a && (s.meta = er(er({}, s.meta), { referentialEqualities: a })), s);
      },
      ei = function (e) {
        var t,
          r = e.json,
          n = e.meta,
          i = (function e(t, r = {}) {
            return et(t)
              ? t.map((t) => e(t, r))
              : "Object" !== ee(t) ||
                  t.constructor !== Object ||
                  Object.getPrototypeOf(t) !== Object.prototype
                ? t
                : [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)].reduce(
                    (n, i) => {
                      var s;
                      let a;
                      if (et(r.props) && !r.props.includes(i)) return n;
                      let o = e(t[i], r);
                      return (
                        (s = r.nonenumerable),
                        "enumerable" ==
                          (a = {}.propertyIsEnumerable.call(t, i)
                            ? "enumerable"
                            : "nonenumerable") && (n[i] = o),
                        s &&
                          "nonenumerable" === a &&
                          Object.defineProperty(n, i, {
                            value: o,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                          }),
                        n
                      );
                    },
                    {}
                  );
          })(r);
        return (
          (null == n ? void 0 : n.values) &&
            ((t = i),
            (function e(t, r, n) {
              if ((void 0 === n && (n = []), t)) {
                if (!E(t))
                  return void c(t, function (t, i) {
                    return e(t, r, Z(Z([], Y(n)), Y(x(i))));
                  });
                var i = Y(t, 2),
                  s = i[0],
                  a = i[1];
                (a &&
                  c(a, function (t, i) {
                    e(t, r, Z(Z([], Y(n)), Y(x(i))));
                  }),
                  r(s, n));
              }
            })(n.values, function (e, r) {
              t = J(t, r, function (t) {
                return $(t, e);
              });
            }),
            (i = t)),
          (null == n ? void 0 : n.referentialEqualities) &&
            (i = (function (e, t) {
              function r(t, r) {
                var n,
                  i,
                  s =
                    ((n = e),
                    G((i = x(r))),
                    i.forEach(function (e) {
                      n = n[e];
                    }),
                    n);
                t.map(x).forEach(function (t) {
                  e = J(e, t, function () {
                    return s;
                  });
                });
              }
              if (E(t)) {
                var n = Y(t, 2),
                  i = n[0],
                  s = n[1];
                (i.forEach(function (t) {
                  e = J(e, x(t), function () {
                    return e;
                  });
                }),
                  s && c(s, r));
              } else c(t, r);
              return e;
            })(i, n.referentialEqualities)),
          i
        );
      };
    function es(e) {
      return e;
    }
    function ea(e) {
      let t = {
        subscribe(t) {
          let r = null,
            n = !1,
            i = !1,
            s = !1;
          function a() {
            if (null === r) {
              s = !0;
              return;
            }
            !i && ((i = !0), "function" == typeof r ? r() : r && r.unsubscribe());
          }
          return (
            (r = e({
              next(e) {
                n || t.next?.(e);
              },
              error(e) {
                n || ((n = !0), t.error?.(e), a());
              },
              complete() {
                n || ((n = !0), t.complete?.(), a());
              },
            })),
            s && a(),
            { unsubscribe: a }
          );
        },
        pipe: (...e) => {
          var r;
          return (
            0 === (r = e).length
              ? es
              : 1 === r.length
                ? r[0]
                : function (e) {
                    return r.reduce((e, t) => t(e), e);
                  }
          )(t);
        },
      };
      return t;
    }
    e.s(
      [
        "default",
        0,
        {
          stringify: function (e) {
            return JSON.stringify(en(e));
          },
          parse: function (e) {
            return ei(JSON.parse(e));
          },
          serialize: en,
          deserialize: ei,
          registerClass: function (e, t) {
            return o.register(e, t);
          },
          registerSymbol: function (e, t) {
            return u.register(e, t);
          },
          registerCustom: function (e, t) {
            return d(er({ name: t }, e));
          },
          allowErrorProps: function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            b.push.apply(b, g([], m(e)));
          },
        },
      ],
      654291
    );
    class eo extends Error {
      constructor(e) {
        (super(e), (this.name = "ObservableAbortError"), Object.setPrototypeOf(this, eo.prototype));
      }
    }
    function eu(e) {
      let t;
      return {
        promise: new Promise((r, n) => {
          let i = !1;
          function s() {
            i || ((i = !0), n(new eo("This operation was aborted.")), a.unsubscribe());
          }
          let a = e.subscribe({
            next(e) {
              ((i = !0), r(e), s());
            },
            error(e) {
              ((i = !0), n(e), s());
            },
            complete() {
              ((i = !0), s());
            },
          });
          t = s;
        }),
        abort: t,
      };
    }
    function el(e, ...t) {
      let r = Object.assign(Object.create(null), e);
      for (let e of t)
        for (let t in e) {
          if (t in r && r[t] !== e[t]) throw Error(`Duplicate key ${t}`);
          r[t] = e[t];
        }
      return r;
    }
    function ec(e) {
      return !!e && !Array.isArray(e) && "object" == typeof e;
    }
    e.s(["observable", 0, ea, "observableToPromise", 0, eu], 39732);
    var eh = {
      PARSE_ERROR: -32700,
      BAD_REQUEST: -32600,
      INTERNAL_SERVER_ERROR: -32603,
      NOT_IMPLEMENTED: -32603,
      UNAUTHORIZED: -32001,
      FORBIDDEN: -32003,
      NOT_FOUND: -32004,
      METHOD_NOT_SUPPORTED: -32005,
      TIMEOUT: -32008,
      CONFLICT: -32009,
      PRECONDITION_FAILED: -32012,
      PAYLOAD_TOO_LARGE: -32013,
      UNPROCESSABLE_CONTENT: -32022,
      TOO_MANY_REQUESTS: -32029,
      CLIENT_CLOSED_REQUEST: -32099,
    };
    let ef = Object.create(null);
    for (let e in eh) ef[eh[e]] = e;
    let ep = () => {},
      ed = (e) =>
        (function e(t, r) {
          return new Proxy(ep, {
            get(n, i) {
              if ("string" == typeof i && "then" !== i) return e(t, [...r, i]);
            },
            apply(e, n, i) {
              let s = "apply" === r[r.length - 1];
              return t({ args: s ? (i.length >= 2 ? i[1] : []) : i, path: s ? r.slice(0, -1) : r });
            },
          });
        })(e, []),
      ey = (e) =>
        new Proxy(ep, {
          get(t, r) {
            if ("string" == typeof r && "then" !== r) return e(r);
          },
        });
    e.s(["createFlatProxy", 0, ey, "createRecursiveProxy", 0, ed], 94802);
    let em = ({ shape: e }) => e;
    class eg extends Error {}
    function eb(e) {
      if (e instanceof Error) return e;
      let t = typeof e;
      if ("undefined" !== t && "function" !== t && null !== e) {
        if ("object" !== t) return Error(String(e));
        if (ec(e)) {
          let t = new eg();
          for (let r in e) t[r] = e[r];
          return t;
        }
      }
    }
    class ev extends Error {
      constructor(e) {
        const t = eb(e.cause);
        (super(e.message ?? t?.message ?? e.code, { cause: t }),
          (this.code = e.code),
          (this.name = "TRPCError"),
          this.cause || (this.cause = t));
      }
    }
    let ew = "middlewareMarker";
    function eO(e) {
      if ("function" == typeof e) return e;
      if ("function" == typeof e.parseAsync) return e.parseAsync.bind(e);
      if ("function" == typeof e.parse) return e.parse.bind(e);
      if ("function" == typeof e.validateSync) return e.validateSync.bind(e);
      if ("function" == typeof e.create) return e.create.bind(e);
      if ("function" == typeof e.assert) return (t) => (e.assert(t), t);
      throw Error("Could not find a validator fn");
    }
    function eR(e, t) {
      let { middlewares: r = [], inputs: n, meta: i, ...s } = t;
      return eE({
        ...el(e, s),
        inputs: [...e.inputs, ...(n ?? [])],
        middlewares: [...e.middlewares, ...r],
        meta: e.meta && i ? { ...e.meta, ...i } : (i ?? e.meta),
      });
    }
    function eE(e = {}) {
      let t = { procedure: !0, inputs: [], middlewares: [], ...e };
      return {
        _def: t,
        input(e) {
          let r,
            n = eO(e);
          return eR(t, {
            inputs: [e],
            middlewares: [
              (((r = async function (e) {
                let t,
                  r = await e.getRawInput();
                try {
                  t = await n(r);
                } catch (e) {
                  throw new ev({ code: "BAD_REQUEST", cause: e });
                }
                let i = ec(e.input) && ec(t) ? { ...e.input, ...t } : t;
                return e.next({ input: i });
              })._type = "input"),
              r),
            ],
          });
        },
        output(e) {
          let r,
            n = eO(e);
          return eR(t, {
            output: e,
            middlewares: [
              (((r = async function ({ next: e }) {
                let t = await e();
                if (!t.ok) return t;
                try {
                  let e = await n(t.data);
                  return { ...t, data: e };
                } catch (e) {
                  throw new ev({
                    message: "Output validation failed",
                    code: "INTERNAL_SERVER_ERROR",
                    cause: e,
                  });
                }
              })._type = "output"),
              r),
            ],
          });
        },
        meta: (e) => eR(t, { meta: e }),
        use: (e) => eR(t, { middlewares: "_middlewares" in e ? e._middlewares : [e] }),
        query: (e) => eC({ ...t, type: "query" }, e),
        mutation: (e) => eC({ ...t, type: "mutation" }, e),
        subscription: (e) => eC({ ...t, type: "subscription" }, e),
      };
    }
    function eC(e, t) {
      var r = eR(e, {
        resolver: t,
        middlewares: [
          async function (e) {
            return { marker: ew, ok: !0, data: await t(e), ctx: e.ctx };
          },
        ],
      })._def;
      async function n(e) {
        if (!e || !("getRawInput" in e)) throw Error(eQ);
        async function t(n = { index: 0, ctx: e.ctx }) {
          try {
            let i = r.middlewares[n.index];
            return await i({
              ctx: n.ctx,
              type: e.type,
              path: e.path,
              getRawInput: n.getRawInput ?? e.getRawInput,
              meta: r.meta,
              input: n.input,
              next: (e) =>
                t({
                  index: n.index + 1,
                  ctx: e && "ctx" in e ? { ...n.ctx, ...e.ctx } : n.ctx,
                  input: e && "input" in e ? e.input : n.input,
                  getRawInput: e && "getRawInput" in e ? e.getRawInput : n.getRawInput,
                }),
            });
          } catch (e) {
            return {
              ok: !1,
              error: (function (e) {
                if (e instanceof ev || (e instanceof Error && "TRPCError" === e.name)) return e;
                let t = new ev({ code: "INTERNAL_SERVER_ERROR", cause: e });
                return (e instanceof Error && e.stack && (t.stack = e.stack), t);
              })(e),
              marker: ew,
            };
          }
        }
        let n = await t();
        if (!n)
          throw new ev({
            code: "INTERNAL_SERVER_ERROR",
            message: "No result from middlewares - did you forget to `return next()`?",
          });
        if (!n.ok) throw n.error;
        return n.data;
      }
      return ((n._def = r), n);
    }
    Symbol("unsetMarker");
    let eQ = `
This is a client-only function.
If you want to call this function on the server, see https://trpc.io/docs/v11/server/server-side-calls
`.trim(),
      eS =
        "u" < typeof window ||
        "Deno" in window ||
        globalThis.process?.env?.NODE_ENV === "test" ||
        !!globalThis.process?.env?.JEST_WORKER_ID ||
        !!globalThis.process?.env?.VITEST_WORKER_ID,
      eq = {
        _default: !0,
        input: { serialize: (e) => e, deserialize: (e) => e },
        output: { serialize: (e) => e, deserialize: (e) => e },
      };
    class eP extends Error {
      constructor() {
        super("Unable to transform response from server");
      }
    }
    function eT(e, t) {
      let r;
      try {
        r = (function (e, t) {
          if ("error" in e) {
            let r = t.deserialize(e.error);
            return { ok: !1, error: { ...e, error: r } };
          }
          return {
            ok: !0,
            result: {
              ...e.result,
              ...((!e.result.type || "data" === e.result.type) && {
                type: "data",
                data: t.deserialize(e.result.data),
              }),
            },
          };
        })(e, t);
      } catch (e) {
        throw new eP();
      }
      if (
        (!r.ok && (!ec(r.error.error) || "number" != typeof r.error.error.code)) ||
        (r.ok && !ec(r.result))
      )
        throw new eP();
      return r;
    }
    let eD = {
        _ctx: null,
        _errorShape: null,
        _meta: null,
        queries: {},
        mutations: {},
        subscriptions: {},
        errorFormatter: em,
        transformer: eq,
      },
      ex = ["then"];
    function eI(e) {
      return function (t) {
        var r;
        let n = new Set(Object.keys(t).filter((e) => ex.includes(e)));
        if (n.size > 0)
          throw Error("Reserved words used in `router({})` call: " + Array.from(n).join(", "));
        let i = ((r = {}), Object.assign(Object.create(null), r));
        !(function e(t, r = "") {
          for (let [n, s] of Object.entries(t ?? {})) {
            let t = `${r}${n}`;
            if ("router" in s._def) {
              e(s._def.procedures, `${t}.`);
              continue;
            }
            if (i[t]) throw Error(`Duplicate key: ${t}`);
            i[t] = s;
          }
        })(t);
        let s = { _config: e, router: !0, procedures: i, ...eD, record: t };
        return {
          ...t,
          _def: s,
          createCaller: (e) =>
            ed(({ path: t, args: r }) => {
              let n = t.join("."),
                i = s.procedures[n];
              return i({ path: n, getRawInput: async () => r[0], ctx: e, type: i._def.type });
            }),
        };
      };
    }
    function eA(...e) {
      let t = el({}, ...e.map((e) => e._def.record));
      return eI({
        errorFormatter: e.reduce((e, t) => {
          if (t._def._config.errorFormatter && t._def._config.errorFormatter !== em) {
            if (e !== em && e !== t._def._config.errorFormatter)
              throw Error("You seem to have several error formatters");
            return t._def._config.errorFormatter;
          }
          return e;
        }, em),
        transformer: e.reduce((e, t) => {
          if (t._def._config.transformer && t._def._config.transformer !== eq) {
            if (e !== eq && e !== t._def._config.transformer)
              throw Error("You seem to have several transformers");
            return t._def._config.transformer;
          }
          return e;
        }, eq),
        isDev: e.some((e) => e._def._config.isDev),
        allowOutsideOfServer: e.some((e) => e._def._config.allowOutsideOfServer),
        isServer: e.some((e) => e._def._config.isServer),
        $types: e[0]?._def._config.$types,
      })(t);
    }
    class eM {
      context() {
        return new eM();
      }
      meta() {
        return new eM();
      }
      create(e) {
        var t,
          r = e;
        let n = r?.errorFormatter ?? em,
          i = {
            transformer: "input" in (t = r?.transformer ?? eq) ? t : { input: t, output: t },
            isDev: r?.isDev ?? globalThis.process?.env?.NODE_ENV !== "production",
            allowOutsideOfServer: r?.allowOutsideOfServer ?? !1,
            errorFormatter: n,
            isServer: r?.isServer ?? eS,
            $types: ey((e) => {
              throw Error(`Tried to access "$types.${e}" which is not available at runtime`);
            }),
          };
        if (!(r?.isServer ?? eS) && r?.allowOutsideOfServer !== !0)
          throw Error(
            "You're trying to use @trpc/server in a non-server environment. This is not supported by default."
          );
        return {
          _config: i,
          procedure: eE({ meta: r?.defaultMeta }),
          middleware: function (e) {
            return (function e(t) {
              return {
                _middlewares: t,
                unstable_pipe: (r) => e([...t, ...("_middlewares" in r ? r._middlewares : [r])]),
              };
            })([e]);
          },
          router: eI(i),
          mergeRouters: eA,
          createCallerFactory: function (e) {
            let t = e._def;
            return function (e) {
              return ed(({ path: r, args: n }) => {
                let i = r.join("."),
                  s = t.procedures[i],
                  a = (e) =>
                    s({ path: i, getRawInput: async () => n[0], ctx: e, type: s._def.type });
                if ("function" == typeof e) {
                  let t = e();
                  return t instanceof Promise ? t.then(a) : a(t);
                }
                return a(e);
              });
            };
          },
        };
      }
    }
    function ek(e) {
      return ea((t) =>
        (function t(r = 0, n = e.op) {
          let i = e.links[r];
          if (!i) throw Error("No more links to execute - did you forget to add an ending link?");
          return i({ op: n, next: (e) => t(r + 1, e) });
        })().subscribe(t)
      );
    }
    (new eM(), e.s([], 707749));
    class e_ extends Error {
      static from(e, t = {}) {
        return e instanceof e_ || (e instanceof Error && "TRPCClientError" === e.name)
          ? (t.meta && (e.meta = { ...e.meta, ...t.meta }), e)
          : ec(e) &&
              ec(e.error) &&
              "number" == typeof e.error.code &&
              "string" == typeof e.error.message
            ? new e_(e.error.message, { ...t, result: e })
            : e instanceof Error
              ? new e_(e.message, { ...t, cause: eb(e) })
              : new e_("Unknown error", { ...t, cause: e });
      }
      constructor(e, t) {
        const r = t?.cause;
        (super(e, { cause: r }),
          (this.meta = t?.meta),
          (this.cause = r),
          (this.shape = t?.result?.error),
          (this.data = t?.result?.error.data),
          (this.name = "TRPCClientError"),
          Object.setPrototypeOf(this, e_.prototype));
      }
    }
    e.s(["TRPCClientError", 0, e_], 541730);
    class eU {
      $request({ type: e, input: t, path: r, context: n = {} }) {
        return ek({
          links: this.links,
          op: { id: ++this.requestId, type: e, path: r, input: t, context: n },
        }).pipe((e) => {
          let t = 0,
            r = null,
            n = [];
          return {
            subscribe: (i) => (
              t++,
              n.push(i),
              r ||
                (r = e.subscribe({
                  next(e) {
                    for (let t of n) t.next?.(e);
                  },
                  error(e) {
                    for (let t of n) t.error?.(e);
                  },
                  complete() {
                    for (let e of n) e.complete?.();
                  },
                })),
              {
                unsubscribe() {
                  if (0 == --t && r) {
                    let e = r;
                    ((r = null), e.unsubscribe());
                  }
                  let e = n.findIndex((e) => e === i);
                  e > -1 && n.splice(e, 1);
                },
              }
            ),
          };
        });
      }
      requestAsPromise(e) {
        let { promise: t, abort: r } = eu(this.$request(e));
        return new Promise((n, i) => {
          (e.signal?.addEventListener("abort", r),
            t
              .then((e) => {
                n(e.result.data);
              })
              .catch((e) => {
                i(e_.from(e));
              }));
        });
      }
      query(e, t, r) {
        return this.requestAsPromise({
          type: "query",
          path: e,
          input: t,
          context: r?.context,
          signal: r?.signal,
        });
      }
      mutation(e, t, r) {
        return this.requestAsPromise({
          type: "mutation",
          path: e,
          input: t,
          context: r?.context,
          signal: r?.signal,
        });
      }
      subscription(e, t, r) {
        return this.$request({
          type: "subscription",
          path: e,
          input: t,
          context: r?.context,
        }).subscribe({
          next(e) {
            "started" === e.result.type
              ? r.onStarted?.()
              : "stopped" === e.result.type
                ? r.onStopped?.()
                : r.onData?.(e.result.data);
          },
          error(e) {
            r.onError?.(e);
          },
          complete() {
            r.onComplete?.();
          },
        });
      }
      constructor(e) {
        this.requestId = 0;
        const t = (() => {
          let t = e.transformer;
          return t
            ? "input" in t
              ? e.transformer
              : { input: t, output: t }
            : {
                input: { serialize: (e) => e, deserialize: (e) => e },
                output: { serialize: (e) => e, deserialize: (e) => e },
              };
        })();
        ((this.runtime = {
          transformer: {
            serialize: (e) => t.input.serialize(e),
            deserialize: (e) => t.output.deserialize(e),
          },
          combinedTransformer: t,
        }),
          (this.links = e.links.map((e) => e(this.runtime))));
      }
    }
    (e.s(["TRPCUntypedClient", 0, eU], 24235),
      e.s(
        [
          "createTRPCUntypedClient",
          0,
          function (e) {
            return new eU(e);
          },
        ],
        93082
      ));
    let ej = { query: "query", mutate: "mutation", subscribe: "subscription" };
    function eF(e) {
      return ey((t) =>
        e.hasOwnProperty(t)
          ? e[t]
          : "__untypedClient" === t
            ? e
            : ed(({ path: r, args: n }) => {
                let i = [t, ...r],
                  s = ej[i.pop()],
                  a = i.join(".");
                return e[s](a, ...n);
              })
      );
    }
    e.s(
      [
        "createTRPCClientProxy",
        0,
        eF,
        "getUntypedClient",
        0,
        function (e) {
          return e.__untypedClient;
        },
      ],
      705010
    );
    let eN = () => {
      throw Error(
        "Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new"
      );
    };
    function eK(e) {
      let t = null,
        r = null;
      function n() {
        let n = (function (t) {
          let r = [[]],
            n = 0;
          for (;;) {
            let i = t[n];
            if (!i) break;
            let s = r[r.length - 1];
            if (i.aborted) {
              (i.reject?.(Error("Aborted")), n++);
              continue;
            }
            if (e.validate(s.concat(i).map((e) => e.key))) {
              (s.push(i), n++);
              continue;
            }
            if (0 === s.length) {
              (i.reject?.(Error("Input is too big for a single dispatch")), n++);
              continue;
            }
            r.push([]);
          }
          return r;
        })(t);
        for (let i of (clearTimeout(r), (r = null), (t = null), n)) {
          if (!i.length) continue;
          let t = { items: i, cancel: eN };
          for (let e of i) e.batch = t;
          let r = (e, r) => {
              let n = t.items[e];
              (n.resolve?.(r), (n.batch = null), (n.reject = null), (n.resolve = null));
            },
            { promise: n, cancel: s } = e.fetch(
              t.items.map((e) => e.key),
              r
            );
          ((t.cancel = s),
            n
              .then((e) => {
                for (let t = 0; t < e.length; t++) {
                  let n = e[t];
                  r(t, n);
                }
                for (let e of t.items) (e.reject?.(Error("Missing result")), (e.batch = null));
              })
              .catch((e) => {
                for (let r of t.items) (r.reject?.(e), (r.batch = null));
              }));
        }
      }
      return {
        load: function (e) {
          let i = { aborted: !1, key: e, batch: null, resolve: eN, reject: eN },
            s = new Promise((e, r) => {
              ((i.reject = r), (i.resolve = e), t || (t = []), t.push(i));
            });
          return (
            r || (r = setTimeout(n)),
            {
              promise: s,
              cancel: () => {
                ((i.aborted = !0),
                  i.batch?.items.every((e) => e.aborted) && (i.batch.cancel(), (i.batch = null)));
              },
            }
          );
        },
      };
    }
    function eH(e) {
      var t;
      return {
        url: e.url.toString().replace(/\/$/, ""),
        fetch: e.fetch,
        AbortController: (t = e.AbortController)
          ? t
          : "u" > typeof window && window.AbortController
            ? window.AbortController
            : "u" > typeof globalThis && globalThis.AbortController
              ? globalThis.AbortController
              : null,
      };
    }
    let eB = { query: "GET", mutation: "POST" };
    function ez(e) {
      return "input" in e
        ? e.runtime.transformer.serialize(e.input)
        : (function (e) {
            let t = {};
            for (let r = 0; r < e.length; r++) {
              let n = e[r];
              t[r] = n;
            }
            return t;
          })(e.inputs.map((t) => e.runtime.transformer.serialize(t)));
    }
    let eL = (e) => {
        let t = e.url + "/" + e.path,
          r = [];
        if (("inputs" in e && r.push("batch=1"), "query" === e.type)) {
          let t = ez(e);
          void 0 !== t && r.push(`input=${encodeURIComponent(JSON.stringify(t))}`);
        }
        return (r.length && (t += "?" + r.join("&")), t);
      },
      eV = (e) => {
        if ("query" === e.type) return;
        let t = ez(e);
        return void 0 !== t ? JSON.stringify(t) : void 0;
      },
      e$ = (e) => eG({ ...e, contentTypeHeader: "application/json", getUrl: eL, getBody: eV });
    async function eW(e, t) {
      let r = e.getUrl(e),
        n = e.getBody(e),
        { type: i } = e,
        s = await (async () => {
          let t = await e.headers();
          return Symbol.iterator in t ? Object.fromEntries(t) : t;
        })();
      if ("subscription" === i) throw Error("Subscriptions should use wsLink");
      let a = {
        ...(e.contentTypeHeader ? { "content-type": e.contentTypeHeader } : {}),
        ...(e.batchModeHeader ? { "trpc-batch-mode": e.batchModeHeader } : {}),
        ...s,
      };
      return (function (e) {
        if (e) return e;
        if ("u" > typeof window && "function" == typeof window.fetch) return window.fetch;
        if ("u" > typeof globalThis && "function" == typeof globalThis.fetch)
          return globalThis.fetch;
        throw Error("No fetch implementation found");
      })(e.fetch)(r, { method: eB[i], signal: t?.signal, body: n, headers: a });
    }
    function eG(e) {
      let t = e.AbortController ? new e.AbortController() : null,
        r = {},
        n = !1;
      return {
        promise: new Promise((i, s) => {
          eW(e, t)
            .then((e) => ((r.response = e), (n = !0), e.json()))
            .then((e) => {
              ((r.responseJSON = e), i({ json: e, meta: r }));
            })
            .catch((e) => {
              ((n = !0), s(e_.from(e, { meta: r })));
            });
        }),
        cancel: () => {
          n || t?.abort();
        },
      };
    }
    function eJ(e) {
      return function (t) {
        let r = eH(t),
          n = t.maxURLLength ?? 1 / 0;
        return (i) => {
          let s = (s) => ({
              validate: (e) => {
                if (n === 1 / 0) return !0;
                let t = e.map((e) => e.path).join(","),
                  a = e.map((e) => e.input);
                return eL({ ...r, runtime: i, type: s, path: t, inputs: a }).length <= n;
              },
              fetch: e({ ...r, runtime: i, type: s, opts: t }),
            }),
            a = eK(s("query")),
            o = eK(s("mutation")),
            u = { query: a, subscription: eK(s("subscription")), mutation: o };
          return ({ op: e }) =>
            ea((t) => {
              let r,
                { promise: n, cancel: s } = u[e.type].load(e);
              return (
                n
                  .then((e) => {
                    r = e;
                    let n = eT(e.json, i.transformer);
                    n.ok
                      ? (t.next({ context: e.meta, result: n.result }), t.complete())
                      : t.error(e_.from(n.error, { meta: e.meta }));
                  })
                  .catch((e) => {
                    t.error(e_.from(e, { meta: r?.meta }));
                  }),
                () => {
                  s();
                }
              );
            });
        };
      };
    }
    let eY = eJ((e) => (t) => {
      let r = t.map((e) => e.path).join(","),
        n = t.map((e) => e.input),
        { promise: i, cancel: s } = e$({
          ...e,
          path: r,
          inputs: n,
          headers: () =>
            e.opts.headers
              ? "function" == typeof e.opts.headers
                ? e.opts.headers({ opList: t })
                : e.opts.headers
              : {},
        });
      return {
        promise: i.then((e) =>
          (Array.isArray(e.json) ? e.json : t.map(() => e.json)).map((t) => ({
            meta: e.meta,
            json: t,
          }))
        ),
        cancel: s,
      };
    });
    async function eZ(e) {
      let t = e.parse ?? JSON.parse;
      await eX(
        e.readableStream,
        (r) => {
          if (e.signal?.aborted || !r || "}" === r) return;
          let n = r.indexOf(":"),
            i = r.substring(2, n - 1),
            s = r.substring(n + 1);
          e.onSingle(Number(i), t(s));
        },
        e.textDecoder
      );
    }
    async function eX(e, t, r) {
      var n, i;
      let s = "",
        a = (e) => {
          let n = r.decode(e).split("\n");
          if (1 === n.length) s += n[0];
          else if (n.length > 1) {
            t(s + n[0]);
            for (let e = 1; e < n.length - 1; e++) t(n[e]);
            s = n[n.length - 1];
          }
        };
      ("getReader" in e
        ? await e0(e, a)
        : await ((n = e),
          (i = a),
          new Promise((e) => {
            (n.on("data", i), n.on("end", e));
          })),
        t(s));
    }
    async function e0(e, t) {
      let r = e.getReader(),
        n = await r.read();
      for (; !n.done; ) (t(n.value), (n = await r.read()));
    }
    function e1(e) {
      return (t) => {
        let r = eH(t);
        return (n) =>
          ({ op: i }) =>
            ea((s) => {
              let a,
                { path: o, input: u, type: l } = i,
                { promise: c, cancel: h } = e.requester({
                  ...r,
                  runtime: n,
                  type: l,
                  path: o,
                  input: u,
                  headers: () =>
                    t.headers
                      ? "function" == typeof t.headers
                        ? t.headers({ op: i })
                        : t.headers
                      : {},
                });
              return (
                c
                  .then((e) => {
                    a = e.meta;
                    let t = eT(e.json, n.transformer);
                    t.ok
                      ? (s.next({ context: e.meta, result: t.result }), s.complete())
                      : s.error(e_.from(t.error, { meta: a }));
                  })
                  .catch((e) => {
                    s.error(e_.from(e, { meta: a }));
                  }),
                () => {
                  h();
                }
              );
            });
      };
    }
    (e.s(["httpBatchLink", 0, eY], 911712),
      eJ((e) => {
        let t = (function (e) {
          if (e) return e;
          if ("u" > typeof window && window.TextDecoder) return new window.TextDecoder();
          if ("u" > typeof globalThis && globalThis.TextDecoder)
            return new globalThis.TextDecoder();
          throw Error("No TextDecoder implementation found");
        })(e.opts.textDecoder);
        return (r, n) => {
          var i, s;
          let a,
            o = r.map((e) => e.path).join(","),
            u = r.map((e) => e.input),
            { cancel: l, promise: c } =
              ((i = {
                ...e,
                textDecoder: t,
                path: o,
                inputs: u,
                headers: () =>
                  e.opts.headers
                    ? "function" == typeof e.opts.headers
                      ? e.opts.headers({ opList: r })
                      : e.opts.headers
                    : {},
              }),
              (s = (e, t) => {
                n(e, t);
              }),
              (a = i.AbortController ? new i.AbortController() : null),
              {
                cancel: () => a?.abort(),
                promise: eW(
                  {
                    ...i,
                    contentTypeHeader: "application/json",
                    batchModeHeader: "stream",
                    getUrl: eL,
                    getBody: eV,
                  },
                  a
                ).then(async (e) => {
                  if (!e.body) throw Error("Received response without body");
                  let t = { response: e };
                  return eZ({
                    readableStream: e.body,
                    onSingle: s,
                    parse: (e) => ({ json: JSON.parse(e), meta: t }),
                    signal: a?.signal,
                    textDecoder: i.textDecoder,
                  });
                }),
              });
          return { promise: c.then(() => []), cancel: l };
        };
      }));
    let e2 = e1({ requester: e$ });
    (e.s(["httpLink", 0, e2, "httpLinkFactory", 0, e1], 632082),
      e1({
        requester: (e) => {
          if ("mutation" !== e.type) throw Error("We only handle mutations with formdata");
          return eG({
            ...e,
            getUrl: () => `${e.url}/${e.path}`,
            getBody(e) {
              if ("input" in e) {
                if (!(e.input instanceof FormData)) throw Error("Input is not FormData");
                return e.input;
              }
            },
          });
        },
      }),
      e.s([], 944362));
    let e3 = {
        query: ["72e3ff", "3fb0d8"],
        mutation: ["c5a3fc", "904dfc"],
        subscription: ["ff49e1", "d83fbe"],
      },
      e7 = {
        query: ["\x1b[30;46m", "\x1b[97;46m"],
        mutation: ["\x1b[30;45m", "\x1b[97;45m"],
        subscription: ["\x1b[30;42m", "\x1b[97;42m"],
      },
      e4 = {
        query: ["\x1b[1;30;46m", "\x1b[1;97;46m"],
        mutation: ["\x1b[1;30;45m", "\x1b[1;97;45m"],
        subscription: ["\x1b[1;30;42m", "\x1b[1;97;42m"],
      };
    function e6(e) {
      return Array.isArray(e) ? e : [e];
    }
    (e.s(
      [
        "loggerLink",
        0,
        function (e = {}) {
          let { enabled: t = () => !0 } = e,
            r = e.colorMode ?? ("u" < typeof window ? "ansi" : "css"),
            {
              logger: n = (
                ({ c: e = console, colorMode: t = "css" }) =>
                (r) => {
                  let n = r.input,
                    i =
                      !("u" < typeof FormData) && n instanceof FormData ? Object.fromEntries(n) : n,
                    { parts: s, args: a } = (function (e) {
                      let { direction: t, type: r, path: n, id: i, input: s } = e,
                        a = [],
                        o = [];
                      if ("ansi" === e.colorMode) {
                        let [s, u] = e7[r],
                          [l, c] = e4[r];
                        return (
                          a.push(
                            "up" === t ? s : u,
                            "up" === t ? ">>" : "<<",
                            r,
                            "up" === t ? l : c,
                            `#${i}`,
                            n,
                            "\x1b[0m"
                          ),
                          "up" === t
                            ? o.push({ input: e.input })
                            : o.push({
                                input: e.input,
                                result: "result" in e.result ? e.result.result : e.result,
                                elapsedMs: e.elapsedMs,
                              }),
                          { parts: a, args: o }
                        );
                      }
                      let [u, l] = e3[r],
                        c = `
    background-color: #${"up" === t ? u : l};
    color: ${"up" === t ? "black" : "white"};
    padding: 2px;
  `;
                      return (
                        a.push("%c", "up" === t ? ">>" : "<<", r, `#${i}`, `%c${n}%c`, "%O"),
                        o.push(c, `${c}; font-weight: bold;`, `${c}; font-weight: normal;`),
                        "up" === t
                          ? o.push({ input: s, context: e.context })
                          : o.push({
                              input: s,
                              result: e.result,
                              elapsedMs: e.elapsedMs,
                              context: e.context,
                            }),
                        { parts: a, args: o }
                      );
                    })({ ...r, colorMode: t, input: i });
                  e[
                    "down" === r.direction &&
                    r.result &&
                    (r.result instanceof Error || "error" in r.result.result)
                      ? "error"
                      : "log"
                  ].apply(null, [s.join(" ")].concat(a));
                }
              )({ c: e.console, colorMode: r }),
            } = e;
          return () =>
            ({ op: e, next: r }) =>
              ea((i) => {
                var s;
                t({ ...e, direction: "up" }) && n({ ...e, direction: "up" });
                let a = Date.now();
                function o(r) {
                  let i = Date.now() - a;
                  t({ ...e, direction: "down", result: r }) &&
                    n({ ...e, direction: "down", elapsedMs: i, result: r });
                }
                return r(e)
                  .pipe(
                    ((s = {
                      next(e) {
                        o(e);
                      },
                      error(e) {
                        o(e);
                      },
                    }),
                    (e) => ({
                      subscribe: (t) =>
                        e.subscribe({
                          next(e) {
                            (s.next?.(e), t.next?.(e));
                          },
                          error(e) {
                            (s.error?.(e), t.error?.(e));
                          },
                          complete() {
                            (s.complete?.(), t.complete?.());
                          },
                        }),
                    }))
                  )
                  .subscribe(i);
              });
        },
      ],
      156346
    ),
      e.s(
        [
          "splitLink",
          0,
          function (e) {
            return (t) => {
              let r = e6(e.true).map((e) => e(t)),
                n = e6(e.false).map((e) => e(t));
              return (t) =>
                ea((i) => {
                  let s = e.condition(t.op) ? r : n;
                  return ek({ op: t.op, links: s }).subscribe(i);
                });
            };
          },
        ],
        357892
      ));
    var e9 = e.i(793803);
    function e5(e) {
      return e;
    }
    function e8(e) {
      return e.state.isPaused;
    }
    function te(e) {
      return "success" === e.state.status;
    }
    function tt(e) {
      return !0;
    }
    function tr(e, t, r) {
      if ("object" != typeof t || null === t) return;
      let n = e.getMutationCache(),
        i = e.getQueryCache(),
        s =
          r?.defaultOptions?.deserializeData ??
          e.getDefaultOptions().hydrate?.deserializeData ??
          e5,
        a = t.mutations || [],
        o = t.queries || [];
      (a.forEach(({ state: t, ...i }) => {
        n.build(
          e,
          { ...e.getDefaultOptions().hydrate?.mutations, ...r?.defaultOptions?.mutations, ...i },
          t
        );
      }),
        o.forEach(
          ({ queryKey: t, state: n, queryHash: a, meta: o, promise: u, dehydratedAt: l }) => {
            let c = u ? (0, e9.tryResolveSync)(u) : void 0,
              h = void 0 === n.data ? c?.data : n.data,
              f = void 0 === h ? h : s(h),
              p = i.get(a),
              d = p?.state.status === "pending",
              y = p?.state.fetchStatus === "fetching";
            if (p) {
              let e = c && void 0 !== l && l > p.state.dataUpdatedAt;
              if (n.dataUpdatedAt > p.state.dataUpdatedAt || e) {
                let { fetchStatus: e, ...t } = n;
                p.setState({ ...t, data: f });
              }
            } else
              p = i.build(
                e,
                {
                  ...e.getDefaultOptions().hydrate?.queries,
                  ...r?.defaultOptions?.queries,
                  queryKey: t,
                  queryHash: a,
                  meta: o,
                },
                { ...n, data: f, fetchStatus: "idle", status: void 0 !== f ? "success" : n.status }
              );
            u &&
              !d &&
              !y &&
              (void 0 === l || l > p.state.dataUpdatedAt) &&
              p.fetch(void 0, { initialPromise: Promise.resolve(u).then(s) });
          }
        ));
    }
    e.s(
      [
        "dehydrate",
        0,
        function (e, t = {}) {
          let r =
              t.shouldDehydrateMutation ??
              e.getDefaultOptions().dehydrate?.shouldDehydrateMutation ??
              e8,
            n = e
              .getMutationCache()
              .getAll()
              .flatMap((e) =>
                r(e)
                  ? [
                      {
                        mutationKey: e.options.mutationKey,
                        state: e.state,
                        ...(e.options.scope && { scope: e.options.scope }),
                        ...(e.meta && { meta: e.meta }),
                      },
                    ]
                  : []
              ),
            i =
              t.shouldDehydrateQuery ?? e.getDefaultOptions().dehydrate?.shouldDehydrateQuery ?? te,
            s = t.shouldRedactErrors ?? e.getDefaultOptions().dehydrate?.shouldRedactErrors ?? tt,
            a = t.serializeData ?? e.getDefaultOptions().dehydrate?.serializeData ?? e5;
          return {
            mutations: n,
            queries: e
              .getQueryCache()
              .getAll()
              .flatMap((e) =>
                i(e)
                  ? [
                      {
                        dehydratedAt: Date.now(),
                        state: {
                          ...e.state,
                          ...(void 0 !== e.state.data && { data: a(e.state.data) }),
                        },
                        queryKey: e.queryKey,
                        queryHash: e.queryHash,
                        ...("pending" === e.state.status && {
                          promise: e.promise
                            ?.then(a)
                            .catch((e) =>
                              s(e) ? Promise.reject(Error("redacted")) : Promise.reject(e)
                            ),
                        }),
                        ...(e.meta && { meta: e.meta }),
                      },
                    ]
                  : []
              ),
          };
        },
        "hydrate",
        0,
        tr,
      ],
      372775
    );
    var tn = e.i(271645),
      ti = e.i(912598);
    (e.s(
      [
        "HydrationBoundary",
        0,
        ({ children: e, options: t = {}, state: r, queryClient: n }) => {
          let i = (0, ti.useQueryClient)(n),
            [s, a] = tn.useState(),
            o = tn.useRef(t);
          return (
            (o.current = t),
            tn.useMemo(() => {
              if (r) {
                if ("object" != typeof r) return;
                let e = i.getQueryCache(),
                  t = r.queries || [],
                  n = [],
                  u = [];
                for (let r of t) {
                  let t = e.get(r.queryHash);
                  if (t) {
                    let e =
                        r.state.dataUpdatedAt > t.state.dataUpdatedAt ||
                        (r.promise &&
                          "pending" !== t.state.status &&
                          "fetching" !== t.state.fetchStatus &&
                          void 0 !== r.dehydratedAt &&
                          r.dehydratedAt > t.state.dataUpdatedAt),
                      n = s?.find((e) => e.queryHash === r.queryHash);
                    e && (!n || r.state.dataUpdatedAt > n.state.dataUpdatedAt) && u.push(r);
                  } else n.push(r);
                }
                (n.length > 0 && tr(i, { queries: n }, o.current),
                  u.length > 0 && a((e) => (e ? [...e, ...u] : u)));
              }
            }, [i, s, r]),
            tn.useEffect(() => {
              s && (tr(i, { queries: s }, o.current), a(void 0));
            }, [i, s]),
            e
          );
        },
      ],
      660678
    ),
      e.s(
        [
          "createReactDecoration",
          0,
          function (e, t) {
            return ed(({ path: r, args: n }) => {
              let i = [e, ...r],
                s = i.pop();
              if ("useMutation" === s) return t[s](i, ...n);
              if ("_def" === s) return { path: i };
              let [a, ...o] = n,
                u = o[0] || {};
              return t[s](i, a, u);
            });
          },
        ],
        431300
      ));
    let ts = ["client", "ssrContext", "ssrState", "abortOnUnmount"],
      ta = tn.createContext?.(null);
    function to(e, t, r) {
      let n = e.flatMap((e) => e.split("."));
      if (!t && (!r || "any" === r)) return n.length ? [n] : [];
      if ("infinite" === r && t && "object" == typeof t && "cursor" in t) {
        let { cursor: e, ...r } = t;
        return [n, { input: r, type: "infinite" }];
      }
      return [n, { ...(void 0 !== t && { input: t }), ...(r && "any" !== r && { type: r }) }];
    }
    function tu(e, t) {
      return ed((r) => {
        let n = [t, ...r.path],
          i = n.pop(),
          s = [...r.args],
          a = to(
            n,
            s.shift(),
            ((e) => {
              switch (e) {
                case "fetch":
                case "ensureData":
                case "prefetch":
                case "getData":
                case "setData":
                  return "query";
                case "fetchInfinite":
                case "prefetchInfinite":
                case "getInfiniteData":
                case "setInfiniteData":
                  return "infinite";
                case "cancel":
                case "invalidate":
                case "refetch":
                case "reset":
                  return "any";
              }
            })(i)
          );
        return {
          fetch: () => e.fetchQuery(a, ...s),
          fetchInfinite: () => e.fetchInfiniteQuery(a, s[0]),
          prefetch: () => e.prefetchQuery(a, ...s),
          prefetchInfinite: () => e.prefetchInfiniteQuery(a, s[0]),
          ensureData: () => e.ensureQueryData(a, ...s),
          invalidate: () => e.invalidateQueries(a, ...s),
          reset: () => e.resetQueries(a, ...s),
          refetch: () => e.refetchQueries(a, ...s),
          cancel: () => e.cancelQuery(a, ...s),
          setData: () => {
            e.setQueryData(a, s[0], s[1]);
          },
          setInfiniteData: () => {
            e.setInfiniteQueryData(a, s[0], s[1]);
          },
          getData: () => e.getQueryData(a),
          getInfiniteData: () => e.getInfiniteQueryData(a),
        }[i]();
      });
    }
    (e.s(["TRPCContext", 0, ta, "contextProps", 0, ts], 385283),
      e.s(["getQueryKeyInternal", 0, to], 189627),
      e.s(
        [
          "createQueryUtilsProxy",
          0,
          function (e) {
            return ey((t) => tu(e, t));
          },
          "createReactQueryUtils",
          0,
          function (e) {
            return ey((t) => ("client" === t ? eF(e.client) : ts.includes(t) ? e[t] : tu(e, t)));
          },
        ],
        70773
      ),
      e.s(
        [
          "createUseQueries",
          0,
          function (e) {
            return ed((t) => {
              let r = t.path,
                n = r.join("."),
                [i, s] = t.args;
              return { queryKey: to(r, i, "query"), queryFn: () => e.query(n, i, s?.trpc), ...s };
            });
          },
        ],
        606209
      ));
  },
  266027,
  286491,
  869230,
  673664,
  427001,
  381384,
  254440,
  469637,
  (e) => {
    "use strict";
    let t;
    var r = e.i(175555),
      n = e.i(540143);
    e.i(247167);
    var i = e.i(619273),
      s = e.i(936553),
      a = e.i(88587),
      o = class extends a.Removable {
        #e;
        #t;
        #r;
        #n;
        #i;
        #s;
        #a;
        constructor(e) {
          (super(),
            (this.#a = !1),
            (this.#s = e.defaultOptions),
            this.setOptions(e.options),
            (this.observers = []),
            (this.#n = e.client),
            (this.#r = this.#n.getQueryCache()),
            (this.queryKey = e.queryKey),
            (this.queryHash = e.queryHash),
            (this.#e = (function (e) {
              let t = "function" == typeof e.initialData ? e.initialData() : e.initialData,
                r = void 0 !== t,
                n = r
                  ? "function" == typeof e.initialDataUpdatedAt
                    ? e.initialDataUpdatedAt()
                    : e.initialDataUpdatedAt
                  : 0;
              return {
                data: t,
                dataUpdateCount: 0,
                dataUpdatedAt: r ? (n ?? Date.now()) : 0,
                error: null,
                errorUpdateCount: 0,
                errorUpdatedAt: 0,
                fetchFailureCount: 0,
                fetchFailureReason: null,
                fetchMeta: null,
                isInvalidated: !1,
                status: r ? "success" : "pending",
                fetchStatus: "idle",
              };
            })(this.options)),
            (this.state = e.state ?? this.#e),
            this.scheduleGc());
        }
        get meta() {
          return this.options.meta;
        }
        get promise() {
          return this.#i?.promise;
        }
        setOptions(e) {
          ((this.options = { ...this.#s, ...e }), this.updateGcTime(this.options.gcTime));
        }
        optionalRemove() {
          this.observers.length || "idle" !== this.state.fetchStatus || this.#r.remove(this);
        }
        setData(e, t) {
          let r = (0, i.replaceData)(this.state.data, e, this.options);
          return (
            this.#o({ data: r, type: "success", dataUpdatedAt: t?.updatedAt, manual: t?.manual }),
            r
          );
        }
        setState(e, t) {
          this.#o({ type: "setState", state: e, setStateOptions: t });
        }
        cancel(e) {
          let t = this.#i?.promise;
          return (this.#i?.cancel(e), t ? t.then(i.noop).catch(i.noop) : Promise.resolve());
        }
        destroy() {
          (super.destroy(), this.cancel({ silent: !0 }));
        }
        reset() {
          (this.destroy(), this.setState(this.#e));
        }
        isActive() {
          return this.observers.some((e) => !1 !== (0, i.resolveEnabled)(e.options.enabled, this));
        }
        isDisabled() {
          return this.getObserversCount() > 0
            ? !this.isActive()
            : this.options.queryFn === i.skipToken ||
                this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
        }
        isStatic() {
          return (
            this.getObserversCount() > 0 &&
            this.observers.some(
              (e) => "static" === (0, i.resolveStaleTime)(e.options.staleTime, this)
            )
          );
        }
        isStale() {
          return this.getObserversCount() > 0
            ? this.observers.some((e) => e.getCurrentResult().isStale)
            : void 0 === this.state.data || this.state.isInvalidated;
        }
        isStaleByTime(e = 0) {
          return (
            void 0 === this.state.data ||
            ("static" !== e &&
              (!!this.state.isInvalidated || !(0, i.timeUntilStale)(this.state.dataUpdatedAt, e)))
          );
        }
        onFocus() {
          let e = this.observers.find((e) => e.shouldFetchOnWindowFocus());
          (e?.refetch({ cancelRefetch: !1 }), this.#i?.continue());
        }
        onOnline() {
          let e = this.observers.find((e) => e.shouldFetchOnReconnect());
          (e?.refetch({ cancelRefetch: !1 }), this.#i?.continue());
        }
        addObserver(e) {
          this.observers.includes(e) ||
            (this.observers.push(e),
            this.clearGcTimeout(),
            this.#r.notify({ type: "observerAdded", query: this, observer: e }));
        }
        removeObserver(e) {
          this.observers.includes(e) &&
            ((this.observers = this.observers.filter((t) => t !== e)),
            this.observers.length ||
              (this.#i && (this.#a ? this.#i.cancel({ revert: !0 }) : this.#i.cancelRetry()),
              this.scheduleGc()),
            this.#r.notify({ type: "observerRemoved", query: this, observer: e }));
        }
        getObserversCount() {
          return this.observers.length;
        }
        invalidate() {
          this.state.isInvalidated || this.#o({ type: "invalidate" });
        }
        fetch(e, t) {
          if ("idle" !== this.state.fetchStatus) {
            if (void 0 !== this.state.data && t?.cancelRefetch) this.cancel({ silent: !0 });
            else if (this.#i) return (this.#i.continueRetry(), this.#i.promise);
          }
          if ((e && this.setOptions(e), !this.options.queryFn)) {
            let e = this.observers.find((e) => e.options.queryFn);
            e && this.setOptions(e.options);
          }
          let r = new AbortController(),
            n = (e) => {
              Object.defineProperty(e, "signal", {
                enumerable: !0,
                get: () => ((this.#a = !0), r.signal),
              });
            },
            a = () => {
              let e = (0, i.ensureQueryFn)(this.options, t),
                r = { client: this.#n, queryKey: this.queryKey, meta: this.meta };
              return (n(r), (this.#a = !1), this.options.persister)
                ? this.options.persister(e, r, this)
                : e(r);
            },
            o = {
              fetchOptions: t,
              options: this.options,
              queryKey: this.queryKey,
              client: this.#n,
              state: this.state,
              fetchFn: a,
            };
          (n(o),
            this.options.behavior?.onFetch(o, this),
            (this.#t = this.state),
            ("idle" === this.state.fetchStatus || this.state.fetchMeta !== o.fetchOptions?.meta) &&
              this.#o({ type: "fetch", meta: o.fetchOptions?.meta }));
          let u = (e) => {
            (((0, s.isCancelledError)(e) && e.silent) || this.#o({ type: "error", error: e }),
              (0, s.isCancelledError)(e) ||
                (this.#r.config.onError?.(e, this),
                this.#r.config.onSettled?.(this.state.data, e, this)),
              this.scheduleGc());
          };
          return (
            (this.#i = (0, s.createRetryer)({
              initialPromise: t?.initialPromise,
              fn: o.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (e) => {
                if (void 0 === e) return void u(Error(`${this.queryHash} data is undefined`));
                try {
                  this.setData(e);
                } catch (e) {
                  u(e);
                  return;
                }
                (this.#r.config.onSuccess?.(e, this),
                  this.#r.config.onSettled?.(e, this.state.error, this),
                  this.scheduleGc());
              },
              onError: u,
              onFail: (e, t) => {
                this.#o({ type: "failed", failureCount: e, error: t });
              },
              onPause: () => {
                this.#o({ type: "pause" });
              },
              onContinue: () => {
                this.#o({ type: "continue" });
              },
              retry: o.options.retry,
              retryDelay: o.options.retryDelay,
              networkMode: o.options.networkMode,
              canRun: () => !0,
            })),
            this.#i.start()
          );
        }
        #o(e) {
          let t = (t) => {
            switch (e.type) {
              case "failed":
                return { ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error };
              case "pause":
                return { ...t, fetchStatus: "paused" };
              case "continue":
                return { ...t, fetchStatus: "fetching" };
              case "fetch":
                return { ...t, ...u(t.data, this.options), fetchMeta: e.meta ?? null };
              case "success":
                return {
                  ...t,
                  data: e.data,
                  dataUpdateCount: t.dataUpdateCount + 1,
                  dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                  error: null,
                  isInvalidated: !1,
                  status: "success",
                  ...(!e.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                  }),
                };
              case "error":
                let r = e.error;
                if ((0, s.isCancelledError)(r) && r.revert && this.#t)
                  return { ...this.#t, fetchStatus: "idle" };
                return {
                  ...t,
                  error: r,
                  errorUpdateCount: t.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: t.fetchFailureCount + 1,
                  fetchFailureReason: r,
                  fetchStatus: "idle",
                  status: "error",
                };
              case "invalidate":
                return { ...t, isInvalidated: !0 };
              case "setState":
                return { ...t, ...e.state };
            }
          };
          ((this.state = t(this.state)),
            n.notifyManager.batch(() => {
              (this.observers.forEach((e) => {
                e.onQueryUpdate();
              }),
                this.#r.notify({ query: this, type: "updated", action: e }));
            }));
        }
      };
    function u(e, t) {
      return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: (0, s.canFetch)(t.networkMode) ? "fetching" : "paused",
        ...(void 0 === e && { error: null, status: "pending" }),
      };
    }
    e.s(["Query", 0, o, "fetchState", 0, u], 286491);
    var l = e.i(915823),
      c = e.i(793803),
      h = class extends l.Subscribable {
        constructor(e, t) {
          (super(),
            (this.options = t),
            (this.#n = e),
            (this.#u = null),
            (this.#l = (0, c.pendingThenable)()),
            this.options.experimental_prefetchInRender ||
              this.#l.reject(Error("experimental_prefetchInRender feature flag is not enabled")),
            this.bindMethods(),
            this.setOptions(t));
        }
        #n;
        #c = void 0;
        #h = void 0;
        #f = void 0;
        #p;
        #d;
        #l;
        #u;
        #y;
        #m;
        #g;
        #b;
        #v;
        #w;
        #O = new Set();
        bindMethods() {
          this.refetch = this.refetch.bind(this);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            (this.#c.addObserver(this),
            f(this.#c, this.options) ? this.#R() : this.updateResult(),
            this.#E());
        }
        onUnsubscribe() {
          this.hasListeners() || this.destroy();
        }
        shouldFetchOnReconnect() {
          return p(this.#c, this.options, this.options.refetchOnReconnect);
        }
        shouldFetchOnWindowFocus() {
          return p(this.#c, this.options, this.options.refetchOnWindowFocus);
        }
        destroy() {
          ((this.listeners = new Set()), this.#C(), this.#Q(), this.#c.removeObserver(this));
        }
        setOptions(e) {
          let t = this.options,
            r = this.#c;
          if (
            ((this.options = this.#n.defaultQueryOptions(e)),
            void 0 !== this.options.enabled &&
              "boolean" != typeof this.options.enabled &&
              "function" != typeof this.options.enabled &&
              "boolean" != typeof (0, i.resolveEnabled)(this.options.enabled, this.#c))
          )
            throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
          (this.#S(),
            this.#c.setOptions(this.options),
            t._defaulted &&
              !(0, i.shallowEqualObjects)(this.options, t) &&
              this.#n
                .getQueryCache()
                .notify({ type: "observerOptionsUpdated", query: this.#c, observer: this }));
          let n = this.hasListeners();
          (n && d(this.#c, r, this.options, t) && this.#R(),
            this.updateResult(),
            n &&
              (this.#c !== r ||
                (0, i.resolveEnabled)(this.options.enabled, this.#c) !==
                  (0, i.resolveEnabled)(t.enabled, this.#c) ||
                (0, i.resolveStaleTime)(this.options.staleTime, this.#c) !==
                  (0, i.resolveStaleTime)(t.staleTime, this.#c)) &&
              this.#q());
          let s = this.#P();
          n &&
            (this.#c !== r ||
              (0, i.resolveEnabled)(this.options.enabled, this.#c) !==
                (0, i.resolveEnabled)(t.enabled, this.#c) ||
              s !== this.#w) &&
            this.#T(s);
        }
        getOptimisticResult(e) {
          var t, r;
          let n = this.#n.getQueryCache().build(this.#n, e),
            s = this.createResult(n, e);
          return (
            (t = this),
            (r = s),
            (0, i.shallowEqualObjects)(t.getCurrentResult(), r) ||
              ((this.#f = s), (this.#d = this.options), (this.#p = this.#c.state)),
            s
          );
        }
        getCurrentResult() {
          return this.#f;
        }
        trackResult(e, t) {
          return new Proxy(e, { get: (e, r) => (this.trackProp(r), t?.(r), Reflect.get(e, r)) });
        }
        trackProp(e) {
          this.#O.add(e);
        }
        getCurrentQuery() {
          return this.#c;
        }
        refetch({ ...e } = {}) {
          return this.fetch({ ...e });
        }
        fetchOptimistic(e) {
          let t = this.#n.defaultQueryOptions(e),
            r = this.#n.getQueryCache().build(this.#n, t);
          return r.fetch().then(() => this.createResult(r, t));
        }
        fetch(e) {
          return this.#R({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
            () => (this.updateResult(), this.#f)
          );
        }
        #R(e) {
          this.#S();
          let t = this.#c.fetch(this.options, e);
          return (e?.throwOnError || (t = t.catch(i.noop)), t);
        }
        #q() {
          this.#C();
          let e = (0, i.resolveStaleTime)(this.options.staleTime, this.#c);
          if (i.isServer || this.#f.isStale || !(0, i.isValidTimeout)(e)) return;
          let t = (0, i.timeUntilStale)(this.#f.dataUpdatedAt, e);
          this.#b = setTimeout(() => {
            this.#f.isStale || this.updateResult();
          }, t + 1);
        }
        #P() {
          return (
            ("function" == typeof this.options.refetchInterval
              ? this.options.refetchInterval(this.#c)
              : this.options.refetchInterval) ?? !1
          );
        }
        #T(e) {
          (this.#Q(),
            (this.#w = e),
            !i.isServer &&
              !1 !== (0, i.resolveEnabled)(this.options.enabled, this.#c) &&
              (0, i.isValidTimeout)(this.#w) &&
              0 !== this.#w &&
              (this.#v = setInterval(() => {
                (this.options.refetchIntervalInBackground || r.focusManager.isFocused()) &&
                  this.#R();
              }, this.#w)));
        }
        #E() {
          (this.#q(), this.#T(this.#P()));
        }
        #C() {
          this.#b && (clearTimeout(this.#b), (this.#b = void 0));
        }
        #Q() {
          this.#v && (clearInterval(this.#v), (this.#v = void 0));
        }
        createResult(e, t) {
          let r,
            n = this.#c,
            s = this.options,
            a = this.#f,
            o = this.#p,
            l = this.#d,
            h = e !== n ? e.state : this.#h,
            { state: p } = e,
            m = { ...p },
            g = !1;
          if (t._optimisticResults) {
            let r = this.hasListeners(),
              i = !r && f(e, t),
              a = r && d(e, n, t, s);
            ((i || a) && (m = { ...m, ...u(p.data, e.options) }),
              "isRestoring" === t._optimisticResults && (m.fetchStatus = "idle"));
          }
          let { error: b, errorUpdatedAt: v, status: w } = m;
          r = m.data;
          let O = !1;
          if (void 0 !== t.placeholderData && void 0 === r && "pending" === w) {
            let e;
            (a?.isPlaceholderData && t.placeholderData === l?.placeholderData
              ? ((e = a.data), (O = !0))
              : (e =
                  "function" == typeof t.placeholderData
                    ? t.placeholderData(this.#g?.state.data, this.#g)
                    : t.placeholderData),
              void 0 !== e && ((w = "success"), (r = (0, i.replaceData)(a?.data, e, t)), (g = !0)));
          }
          if (t.select && void 0 !== r && !O)
            if (a && r === o?.data && t.select === this.#y) r = this.#m;
            else
              try {
                ((this.#y = t.select),
                  (r = t.select(r)),
                  (r = (0, i.replaceData)(a?.data, r, t)),
                  (this.#m = r),
                  (this.#u = null));
              } catch (e) {
                this.#u = e;
              }
          this.#u && ((b = this.#u), (r = this.#m), (v = Date.now()), (w = "error"));
          let R = "fetching" === m.fetchStatus,
            E = "pending" === w,
            C = "error" === w,
            Q = E && R,
            S = void 0 !== r,
            q = {
              status: w,
              fetchStatus: m.fetchStatus,
              isPending: E,
              isSuccess: "success" === w,
              isError: C,
              isInitialLoading: Q,
              isLoading: Q,
              data: r,
              dataUpdatedAt: m.dataUpdatedAt,
              error: b,
              errorUpdatedAt: v,
              failureCount: m.fetchFailureCount,
              failureReason: m.fetchFailureReason,
              errorUpdateCount: m.errorUpdateCount,
              isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
              isFetchedAfterMount:
                m.dataUpdateCount > h.dataUpdateCount || m.errorUpdateCount > h.errorUpdateCount,
              isFetching: R,
              isRefetching: R && !E,
              isLoadingError: C && !S,
              isPaused: "paused" === m.fetchStatus,
              isPlaceholderData: g,
              isRefetchError: C && S,
              isStale: y(e, t),
              refetch: this.refetch,
              promise: this.#l,
            };
          if (this.options.experimental_prefetchInRender) {
            let t = (e) => {
                "error" === q.status ? e.reject(q.error) : void 0 !== q.data && e.resolve(q.data);
              },
              r = () => {
                t((this.#l = q.promise = (0, c.pendingThenable)()));
              },
              i = this.#l;
            switch (i.status) {
              case "pending":
                e.queryHash === n.queryHash && t(i);
                break;
              case "fulfilled":
                ("error" === q.status || q.data !== i.value) && r();
                break;
              case "rejected":
                ("error" !== q.status || q.error !== i.reason) && r();
            }
          }
          return q;
        }
        updateResult() {
          let e = this.#f,
            t = this.createResult(this.#c, this.options);
          if (
            ((this.#p = this.#c.state),
            (this.#d = this.options),
            void 0 !== this.#p.data && (this.#g = this.#c),
            (0, i.shallowEqualObjects)(t, e))
          )
            return;
          this.#f = t;
          let r = () => {
            if (!e) return !0;
            let { notifyOnChangeProps: t } = this.options,
              r = "function" == typeof t ? t() : t;
            if ("all" === r || (!r && !this.#O.size)) return !0;
            let n = new Set(r ?? this.#O);
            return (
              this.options.throwOnError && n.add("error"),
              Object.keys(this.#f).some((t) => this.#f[t] !== e[t] && n.has(t))
            );
          };
          this.#D({ listeners: r() });
        }
        #S() {
          let e = this.#n.getQueryCache().build(this.#n, this.options);
          if (e === this.#c) return;
          let t = this.#c;
          ((this.#c = e),
            (this.#h = e.state),
            this.hasListeners() && (t?.removeObserver(this), e.addObserver(this)));
        }
        onQueryUpdate() {
          (this.updateResult(), this.hasListeners() && this.#E());
        }
        #D(e) {
          n.notifyManager.batch(() => {
            (e.listeners &&
              this.listeners.forEach((e) => {
                e(this.#f);
              }),
              this.#n.getQueryCache().notify({ query: this.#c, type: "observerResultsUpdated" }));
          });
        }
      };
    function f(e, t) {
      return (
        (!1 !== (0, i.resolveEnabled)(t.enabled, e) &&
          void 0 === e.state.data &&
          ("error" !== e.state.status || !1 !== t.retryOnMount)) ||
        (void 0 !== e.state.data && p(e, t, t.refetchOnMount))
      );
    }
    function p(e, t, r) {
      if (
        !1 !== (0, i.resolveEnabled)(t.enabled, e) &&
        "static" !== (0, i.resolveStaleTime)(t.staleTime, e)
      ) {
        let n = "function" == typeof r ? r(e) : r;
        return "always" === n || (!1 !== n && y(e, t));
      }
      return !1;
    }
    function d(e, t, r, n) {
      return (
        (e !== t || !1 === (0, i.resolveEnabled)(n.enabled, e)) &&
        (!r.suspense || "error" !== e.state.status) &&
        y(e, r)
      );
    }
    function y(e, t) {
      return (
        !1 !== (0, i.resolveEnabled)(t.enabled, e) &&
        e.isStaleByTime((0, i.resolveStaleTime)(t.staleTime, e))
      );
    }
    e.s(["QueryObserver", 0, h], 869230);
    var m = e.i(271645),
      g = e.i(912598);
    e.i(843476);
    var b = m.createContext(
        ((t = !1),
        {
          clearReset: () => {
            t = !1;
          },
          reset: () => {
            t = !0;
          },
          isReset: () => t,
        })
      ),
      v = () => m.useContext(b);
    e.s(["useQueryErrorResetBoundary", 0, v], 673664);
    var w = (e, t) => {
        (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
          !t.isReset() &&
          (e.retryOnMount = !1);
      },
      O = (e) => {
        m.useEffect(() => {
          e.clearReset();
        }, [e]);
      },
      R = ({ result: e, errorResetBoundary: t, throwOnError: r, query: n, suspense: s }) =>
        e.isError &&
        !t.isReset() &&
        !e.isFetching &&
        n &&
        ((s && void 0 === e.data) || (0, i.shouldThrowError)(r, [e.error, n]));
    e.s(
      [
        "ensurePreventErrorBoundaryRetry",
        0,
        w,
        "getHasError",
        0,
        R,
        "useClearResetErrorBoundary",
        0,
        O,
      ],
      427001
    );
    var E = m.createContext(!1),
      C = () => m.useContext(E);
    (E.Provider, e.s(["useIsRestoring", 0, C], 381384));
    var Q = (e) => {
        if (e.suspense) {
          let t = (e) => ("static" === e ? e : Math.max(e ?? 1e3, 1e3)),
            r = e.staleTime;
          ((e.staleTime = "function" == typeof r ? (...e) => t(r(...e)) : t(r)),
            "number" == typeof e.gcTime && (e.gcTime = Math.max(e.gcTime, 1e3)));
        }
      },
      S = (e, t) => e.isLoading && e.isFetching && !t,
      q = (e, t) => e?.suspense && t.isPending,
      P = (e, t, r) =>
        t.fetchOptimistic(e).catch(() => {
          r.clearReset();
        });
    function T(e, t, r) {
      let s = (0, g.useQueryClient)(r),
        a = C(),
        o = v(),
        u = s.defaultQueryOptions(e);
      (s.getDefaultOptions().queries?._experimental_beforeQuery?.(u),
        (u._optimisticResults = a ? "isRestoring" : "optimistic"),
        Q(u),
        w(u, o),
        O(o));
      let l = !s.getQueryCache().get(u.queryHash),
        [c] = m.useState(() => new t(s, u)),
        h = c.getOptimisticResult(u),
        f = !a && !1 !== e.subscribed;
      if (
        (m.useSyncExternalStore(
          m.useCallback(
            (e) => {
              let t = f ? c.subscribe(n.notifyManager.batchCalls(e)) : i.noop;
              return (c.updateResult(), t);
            },
            [c, f]
          ),
          () => c.getCurrentResult(),
          () => c.getCurrentResult()
        ),
        m.useEffect(() => {
          c.setOptions(u);
        }, [u, c]),
        q(u, h))
      )
        throw P(u, c, o);
      if (
        R({
          result: h,
          errorResetBoundary: o,
          throwOnError: u.throwOnError,
          query: s.getQueryCache().get(u.queryHash),
          suspense: u.suspense,
        })
      )
        throw h.error;
      if (
        (s.getDefaultOptions().queries?._experimental_afterQuery?.(u, h),
        u.experimental_prefetchInRender && !i.isServer && S(h, a))
      ) {
        let e = l ? P(u, c, o) : s.getQueryCache().get(u.queryHash)?.promise;
        e?.catch(i.noop).finally(() => {
          c.updateResult();
        });
      }
      return u.notifyOnChangeProps ? h : c.trackResult(h);
    }
    (e.s(
      [
        "defaultThrowOnError",
        0,
        (e, t) => void 0 === t.state.data,
        "ensureSuspenseTimers",
        0,
        Q,
        "fetchOptimistic",
        0,
        P,
        "shouldSuspend",
        0,
        q,
        "willFetch",
        0,
        S,
      ],
      254440
    ),
      e.s(["useBaseQuery", 0, T], 469637),
      e.s(
        [
          "useQuery",
          0,
          function (e, t) {
            return T(e, h, t);
          },
        ],
        266027
      ));
  },
  273446,
  607309,
  455111,
  317751,
  287402,
  (e) => {
    "use strict";
    let t, r;
    e.i(247167);
    var n,
      i = e.i(654291);
    e.i(944362);
    var s = e.i(911712),
      a = e.i(632082),
      o = e.i(156346),
      u = e.i(357892),
      l = e.i(372775),
      c = e.i(912598),
      h = e.i(660678),
      f = e.i(93082),
      p = e.i(431300),
      d = e.i(70773),
      y = e.i(606209),
      m = e.i(266027),
      g = e.i(869230),
      b = e.i(469637),
      v = e.i(254440),
      w = e.i(954616),
      O = e.i(619273),
      R = g;
    function E(e) {
      return {
        onFetch: (t, r) => {
          let n = t.options,
            i = t.fetchOptions?.meta?.fetchMore?.direction,
            s = t.state.data?.pages || [],
            a = t.state.data?.pageParams || [],
            o = { pages: [], pageParams: [] },
            u = 0,
            l = async () => {
              let r = !1,
                l = (0, O.ensureQueryFn)(t.options, t.fetchOptions),
                c = async (e, n, i) => {
                  if (r) return Promise.reject();
                  if (null == n && e.pages.length) return Promise.resolve(e);
                  let s = {
                    client: t.client,
                    queryKey: t.queryKey,
                    pageParam: n,
                    direction: i ? "backward" : "forward",
                    meta: t.options.meta,
                  };
                  Object.defineProperty(s, "signal", {
                    enumerable: !0,
                    get: () => (
                      t.signal.aborted
                        ? (r = !0)
                        : t.signal.addEventListener("abort", () => {
                            r = !0;
                          }),
                      t.signal
                    ),
                  });
                  let a = await l(s),
                    { maxPages: o } = t.options,
                    u = i ? O.addToStart : O.addToEnd;
                  return { pages: u(e.pages, a, o), pageParams: u(e.pageParams, n, o) };
                };
              if (i && s.length) {
                let e = "backward" === i,
                  t = { pages: s, pageParams: a },
                  r = (e ? Q : C)(n, t);
                o = await c(t, r, e);
              } else {
                let t = e ?? s.length;
                do {
                  let e = 0 === u ? (a[0] ?? n.initialPageParam) : C(n, o);
                  if (u > 0 && null == e) break;
                  ((o = await c(o, e)), u++);
                } while (u < t);
              }
              return o;
            };
          t.options.persister
            ? (t.fetchFn = () =>
                t.options.persister?.(
                  l,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  r
                ))
            : (t.fetchFn = l);
        },
      };
    }
    function C(e, { pages: t, pageParams: r }) {
      let n = t.length - 1;
      return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0;
    }
    function Q(e, { pages: t, pageParams: r }) {
      return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, r[0], r) : void 0;
    }
    var S = class extends R.QueryObserver {
        constructor(e, t) {
          super(e, t);
        }
        bindMethods() {
          (super.bindMethods(),
            (this.fetchNextPage = this.fetchNextPage.bind(this)),
            (this.fetchPreviousPage = this.fetchPreviousPage.bind(this)));
        }
        setOptions(e) {
          super.setOptions({ ...e, behavior: E() });
        }
        getOptimisticResult(e) {
          return ((e.behavior = E()), super.getOptimisticResult(e));
        }
        fetchNextPage(e) {
          return this.fetch({ ...e, meta: { fetchMore: { direction: "forward" } } });
        }
        fetchPreviousPage(e) {
          return this.fetch({ ...e, meta: { fetchMore: { direction: "backward" } } });
        }
        createResult(e, t) {
          var r, n;
          let { state: i } = e,
            s = super.createResult(e, t),
            { isFetching: a, isRefetching: o, isError: u, isRefetchError: l } = s,
            c = i.fetchMeta?.fetchMore?.direction,
            h = u && "forward" === c,
            f = a && "forward" === c,
            p = u && "backward" === c,
            d = a && "backward" === c;
          return {
            ...s,
            fetchNextPage: this.fetchNextPage,
            fetchPreviousPage: this.fetchPreviousPage,
            hasNextPage: !!(r = i.data) && null != C(t, r),
            hasPreviousPage: !!(n = i.data) && !!t.getPreviousPageParam && null != Q(t, n),
            isFetchNextPageError: h,
            isFetchingNextPage: f,
            isFetchPreviousPageError: p,
            isFetchingPreviousPage: d,
            isRefetchError: l && !h && !p,
            isRefetching: o && !f && !d,
          };
        }
      },
      q = e.i(271645),
      P = e.i(540143),
      T = e.i(915823);
    function D(e, t) {
      return e.filter((e) => !t.includes(e));
    }
    var x = class extends T.Subscribable {
        #n;
        #x;
        #I;
        #A;
        #M;
        #k;
        #_;
        #U;
        #j = [];
        constructor(e, t, r) {
          (super(),
            (this.#n = e),
            (this.#A = r),
            (this.#I = []),
            (this.#M = []),
            (this.#x = []),
            this.setQueries(t));
        }
        onSubscribe() {
          1 === this.listeners.size &&
            this.#M.forEach((e) => {
              e.subscribe((t) => {
                this.#F(e, t);
              });
            });
        }
        onUnsubscribe() {
          this.listeners.size || this.destroy();
        }
        destroy() {
          ((this.listeners = new Set()),
            this.#M.forEach((e) => {
              e.destroy();
            }));
        }
        setQueries(e, t) {
          ((this.#I = e),
            (this.#A = t),
            P.notifyManager.batch(() => {
              let e = this.#M,
                t = this.#N(this.#I);
              ((this.#j = t), t.forEach((e) => e.observer.setOptions(e.defaultedQueryOptions)));
              let r = t.map((e) => e.observer),
                n = r.map((e) => e.getCurrentResult()),
                i = r.some((t, r) => t !== e[r]);
              (e.length === r.length && !i) ||
                ((this.#M = r),
                (this.#x = n),
                this.hasListeners() &&
                  (D(e, r).forEach((e) => {
                    e.destroy();
                  }),
                  D(r, e).forEach((e) => {
                    e.subscribe((t) => {
                      this.#F(e, t);
                    });
                  }),
                  this.#D()));
            }));
        }
        getCurrentResult() {
          return this.#x;
        }
        getQueries() {
          return this.#M.map((e) => e.getCurrentQuery());
        }
        getObservers() {
          return this.#M;
        }
        getOptimisticResult(e, t) {
          let r = this.#N(e),
            n = r.map((e) => e.observer.getOptimisticResult(e.defaultedQueryOptions));
          return [n, (e) => this.#K(e ?? n, t), () => this.#H(n, r)];
        }
        #H(e, t) {
          return t.map((r, n) => {
            let i = e[n];
            return r.defaultedQueryOptions.notifyOnChangeProps
              ? i
              : r.observer.trackResult(i, (e) => {
                  t.forEach((t) => {
                    t.observer.trackProp(e);
                  });
                });
          });
        }
        #K(e, t) {
          return t
            ? ((this.#k && this.#x === this.#U && t === this.#_) ||
                ((this.#_ = t),
                (this.#U = this.#x),
                (this.#k = (0, O.replaceEqualDeep)(this.#k, t(e)))),
              this.#k)
            : e;
        }
        #N(e) {
          let t = new Map(this.#M.map((e) => [e.options.queryHash, e])),
            r = [];
          return (
            e.forEach((e) => {
              let n = this.#n.defaultQueryOptions(e),
                i = t.get(n.queryHash);
              i
                ? r.push({ defaultedQueryOptions: n, observer: i })
                : r.push({ defaultedQueryOptions: n, observer: new g.QueryObserver(this.#n, n) });
            }),
            r
          );
        }
        #F(e, t) {
          let r = this.#M.indexOf(e);
          if (-1 !== r) {
            var n;
            let e;
            ((this.#x = ((n = this.#x), ((e = n.slice(0))[r] = t), e)), this.#D());
          }
        }
        #D() {
          if (this.hasListeners()) {
            let e = this.#k,
              t = this.#H(this.#x, this.#j);
            e !== this.#K(t, this.#A?.combine) &&
              P.notifyManager.batch(() => {
                this.listeners.forEach((e) => {
                  e(this.#x);
                });
              });
          }
        }
      },
      I = e.i(381384),
      A = e.i(673664),
      M = e.i(427001);
    function k({ queries: e, ...t }, r) {
      let n = (0, c.useQueryClient)(r),
        i = (0, I.useIsRestoring)(),
        s = (0, A.useQueryErrorResetBoundary)(),
        a = q.useMemo(
          () =>
            e.map((e) => {
              let t = n.defaultQueryOptions(e);
              return ((t._optimisticResults = i ? "isRestoring" : "optimistic"), t);
            }),
          [e, n, i]
        );
      (a.forEach((e) => {
        ((0, v.ensureSuspenseTimers)(e), (0, M.ensurePreventErrorBoundaryRetry)(e, s));
      }),
        (0, M.useClearResetErrorBoundary)(s));
      let [o] = q.useState(() => new x(n, a, t)),
        [u, l, h] = o.getOptimisticResult(a, t.combine),
        f = !i && !1 !== t.subscribed;
      (q.useSyncExternalStore(
        q.useCallback((e) => (f ? o.subscribe(P.notifyManager.batchCalls(e)) : O.noop), [o, f]),
        () => o.getCurrentResult(),
        () => o.getCurrentResult()
      ),
        q.useEffect(() => {
          o.setQueries(a, t);
        }, [a, t, o]));
      let p = u.some((e, t) => (0, v.shouldSuspend)(a[t], e))
        ? u.flatMap((e, t) => {
            let r = a[t];
            if (r) {
              let t = new g.QueryObserver(n, r);
              if ((0, v.shouldSuspend)(r, e)) return (0, v.fetchOptimistic)(r, t, s);
              (0, v.willFetch)(e, i) && (0, v.fetchOptimistic)(r, t, s);
            }
            return [];
          })
        : [];
      if (p.length > 0) throw Promise.all(p);
      let d = u.find((e, t) => {
        let r = a[t];
        return (
          r &&
          (0, M.getHasError)({
            result: e,
            errorResetBoundary: s,
            throwOnError: r.throwOnError,
            query: n.getQueryCache().get(r.queryHash),
            suspense: r.suspense,
          })
        );
      });
      if (d?.error) throw d.error;
      return l(h());
    }
    var _ = e.i(385283);
    function U(e, t, r) {
      let n = e[0],
        i = e[1]?.input;
      return (r && (i.cursor = r), [n.join("."), i, t?.trpc]);
    }
    var j = e.i(189627);
    function F(e) {
      let t = q.useRef(e);
      return ((t.current.path = e.path), t.current);
    }
    var N = e.i(24235),
      K = e.i(705010);
    function H(e) {
      let { client: t, queryClient: r } = e,
        n = t instanceof N.TRPCUntypedClient ? t : (0, K.getUntypedClient)(t);
      return {
        fetchQuery: (e, t) =>
          r.fetchQuery({ ...t, queryKey: e, queryFn: () => n.query(...U(e, t)) }),
        fetchInfiniteQuery: (e, t) =>
          r.fetchInfiniteQuery({
            ...t,
            queryKey: e,
            queryFn: ({ pageParam: r }) => n.query(...U(e, t, r)),
            initialPageParam: t?.initialCursor ?? null,
          }),
        prefetchQuery: (e, t) =>
          r.prefetchQuery({ ...t, queryKey: e, queryFn: () => n.query(...U(e, t)) }),
        prefetchInfiniteQuery: (e, t) =>
          r.prefetchInfiniteQuery({
            ...t,
            queryKey: e,
            queryFn: ({ pageParam: r }) => n.query(...U(e, t, r)),
            initialPageParam: t?.initialCursor ?? null,
          }),
        ensureQueryData: (e, t) =>
          r.ensureQueryData({ ...t, queryKey: e, queryFn: () => n.query(...U(e, t)) }),
        invalidateQueries: (e, t, n) => r.invalidateQueries({ ...t, queryKey: e }, n),
        resetQueries: (e, t, n) => r.resetQueries({ ...t, queryKey: e }, n),
        refetchQueries: (e, t, n) => r.refetchQueries({ ...t, queryKey: e }, n),
        cancelQuery: (e, t) => r.cancelQueries({ queryKey: e }, t),
        setQueryData: (e, t, n) => r.setQueryData(e, t, n),
        getQueryData: (e) => r.getQueryData(e),
        setInfiniteQueryData: (e, t, n) => r.setQueryData(e, t, n),
        getInfiniteQueryData: (e) => r.getQueryData(e),
      };
    }
    function B(e) {
      let t = e?.overrides?.useMutation?.onSuccess ?? ((e) => e.originalFn()),
        r = e?.context ?? _.TRPCContext;
      function n() {
        let e = q.useContext(r);
        if (!e)
          throw Error(
            "Unable to find tRPC Context. Did you forget to wrap your App inside `withTRPC` HoC?"
          );
        return e;
      }
      function i(e, t) {
        let { queryClient: r, ssrState: i } = n();
        return i &&
          "mounted" !== i &&
          r.getQueryCache().find({ queryKey: e })?.state.status === "error"
          ? { retryOnMount: !1, ...t }
          : t;
      }
      return {
        Provider: (e) => {
          let { abortOnUnmount: t = !1, client: n, queryClient: i, ssrContext: s } = e,
            [a, o] = q.useState(e.ssrState ?? !1),
            u = q.useMemo(() => H({ client: n, queryClient: i }), [n, i]),
            l = q.useMemo(
              () => ({
                abortOnUnmount: t,
                queryClient: i,
                client: n,
                ssrContext: s ?? null,
                ssrState: a,
                ...u,
              }),
              [t, n, u, i, s, a]
            );
          return (
            q.useEffect(() => {
              o((e) => !!e && "mounted");
            }, []),
            q.createElement(r.Provider, { value: l }, e.children)
          );
        },
        createClient: (e) => (0, f.createTRPCUntypedClient)(e),
        useContext: n,
        useUtils: n,
        useQuery: function (t, r, s) {
          let { abortOnUnmount: a, client: o, ssrState: u, queryClient: l, prefetchQuery: c } = n(),
            h = (0, j.getQueryKeyInternal)(t, r, "query"),
            f = l.getQueryDefaults(h);
          "u" < typeof window &&
            "prepass" === u &&
            s?.trpc?.ssr !== !1 &&
            (s?.enabled ?? f?.enabled) !== !1 &&
            !l.getQueryCache().find({ queryKey: h }) &&
            c(h, s);
          let p = i(h, { ...f, ...s }),
            d = s?.trpc?.abortOnUnmount ?? e?.abortOnUnmount ?? a,
            y = (0, m.useQuery)(
              {
                ...p,
                queryKey: h,
                queryFn: (e) => {
                  let t = { ...p, trpc: { ...p?.trpc, ...(d ? { signal: e.signal } : {}) } };
                  return o.query(...U(h, t));
                },
              },
              l
            );
          return ((y.trpc = F({ path: t.join(".") })), y);
        },
        useSuspenseQuery: function (t, r, i) {
          var s, a;
          let o = n(),
            u = (0, j.getQueryKeyInternal)(t, r, "query"),
            l = i?.trpc?.abortOnUnmount ?? e?.abortOnUnmount ?? o.abortOnUnmount,
            c =
              ((s = {
                ...i,
                queryKey: u,
                queryFn: (e) => {
                  let t = { trpc: { ...(l ? { signal: e.signal } : {}) } };
                  return o.client.query(...U(u, t));
                },
              }),
              (a = o.queryClient),
              (0, b.useBaseQuery)(
                {
                  ...s,
                  enabled: !0,
                  suspense: !0,
                  throwOnError: v.defaultThrowOnError,
                  placeholderData: void 0,
                },
                g.QueryObserver,
                a
              ));
          return ((c.trpc = F({ path: t.join(".") })), [c.data, c]);
        },
        useQueries: (e) => {
          let { ssrState: t, queryClient: r, prefetchQuery: i, client: s } = n(),
            a = e((0, y.createUseQueries)(s));
          if ("u" < typeof window && "prepass" === t)
            for (let e of a)
              e.trpc?.ssr === !1 ||
                r.getQueryCache().find({ queryKey: e.queryKey }) ||
                i(e.queryKey, e);
          return k({ queries: a.map((e) => ({ ...e, queryKey: e.queryKey })) }, r);
        },
        useSuspenseQueries: (e) => {
          var t;
          let { queryClient: r, client: i } = n(),
            s =
              ((t = {
                queries: e((0, y.createUseQueries)(i)).map((e) => ({ ...e, queryKey: e.queryKey })),
              }),
              k(
                {
                  ...t,
                  queries: t.queries.map((e) => ({
                    ...e,
                    suspense: !0,
                    throwOnError: v.defaultThrowOnError,
                    enabled: !0,
                    placeholderData: void 0,
                  })),
                },
                r
              ));
          return [s.map((e) => e.data), s];
        },
        useMutation: function (e, r) {
          let { client: i } = n(),
            s = (0, c.useQueryClient)(),
            a = [e],
            o = s.getMutationDefaults(a),
            u = (0, w.useMutation)(
              {
                ...r,
                mutationKey: a,
                mutationFn: (t) => i.mutation(...U([e, { input: t }], r)),
                onSuccess: (...e) =>
                  t({
                    originalFn: () => r?.onSuccess?.(...e) ?? o?.onSuccess?.(...e),
                    queryClient: s,
                    meta: r?.meta ?? o?.meta ?? {},
                  }),
              },
              s
            );
          return ((u.trpc = F({ path: e.join(".") })), u);
        },
        useSubscription: function (e, t, r) {
          let i = r?.enabled ?? !0,
            s = (0, O.hashKey)((0, j.getQueryKeyInternal)(e, t, "any")),
            { client: a } = n(),
            o = q.useRef(r);
          ((o.current = r),
            q.useEffect(() => {
              if (!i) return;
              let n = !1,
                s = a.subscription(e.join("."), t ?? void 0, {
                  onStarted: () => {
                    n || o.current.onStarted?.();
                  },
                  onData: (e) => {
                    n || r.onData(e);
                  },
                  onError: (e) => {
                    n || o.current.onError?.(e);
                  },
                });
              return () => {
                ((n = !0), s.unsubscribe());
              };
            }, [s, i]));
        },
        useDehydratedState: (e, t) =>
          q.useMemo(() => (t ? e.runtime.transformer.deserialize(t) : t), [t, e]),
        useInfiniteQuery: function (e, t, r) {
          var s;
          let {
              client: a,
              ssrState: o,
              prefetchInfiniteQuery: u,
              queryClient: l,
              abortOnUnmount: c,
            } = n(),
            h = (0, j.getQueryKeyInternal)(e, t, "infinite"),
            f = l.getQueryDefaults(h);
          "u" < typeof window &&
            "prepass" === o &&
            r?.trpc?.ssr !== !1 &&
            (r?.enabled ?? f?.enabled) !== !1 &&
            !l.getQueryCache().find({ queryKey: h }) &&
            u(h, { ...f, ...r });
          let p = i(h, { ...f, ...r }),
            d = r?.trpc?.abortOnUnmount ?? c,
            y =
              ((s = {
                ...p,
                initialPageParam: r.initialCursor ?? null,
                persister: r.persister,
                queryKey: h,
                queryFn: (e) => {
                  let t = { ...p, trpc: { ...p?.trpc, ...(d ? { signal: e.signal } : {}) } };
                  return a.query(...U(h, t, e.pageParam ?? r.initialCursor));
                },
              }),
              (0, b.useBaseQuery)(s, S, l));
          return ((y.trpc = F({ path: e.join(".") })), y);
        },
        useSuspenseInfiniteQuery: function (e, t, r) {
          var s, a;
          let o = n(),
            u = (0, j.getQueryKeyInternal)(e, t, "infinite"),
            l = o.queryClient.getQueryDefaults(u),
            c = i(u, { ...l, ...r }),
            h = r?.trpc?.abortOnUnmount ?? o.abortOnUnmount,
            f =
              ((s = {
                ...r,
                initialPageParam: r.initialCursor ?? null,
                queryKey: u,
                queryFn: (e) => {
                  let t = { ...c, trpc: { ...c?.trpc, ...(h ? { signal: e.signal } : {}) } };
                  return o.client.query(...U(u, t, e.pageParam ?? r.initialCursor));
                },
              }),
              (a = o.queryClient),
              (0, b.useBaseQuery)(
                { ...s, enabled: !0, suspense: !0, throwOnError: v.defaultThrowOnError },
                S,
                a
              ));
          return ((f.trpc = F({ path: e.join(".") })), [f.data, f]);
        },
      };
    }
    (e.s(["createUtilityFunctions", 0, H], 607309), e.s(["createRootHooks", 0, B], 455111));
    var z = e.i(286491),
      L = T,
      V = class extends L.Subscribable {
        constructor(e = {}) {
          (super(), (this.config = e), (this.#I = new Map()));
        }
        #I;
        build(e, t, r) {
          let n = t.queryKey,
            i = t.queryHash ?? (0, O.hashQueryKeyByOptions)(n, t),
            s = this.get(i);
          return (
            s ||
              ((s = new z.Query({
                client: e,
                queryKey: n,
                queryHash: i,
                options: e.defaultQueryOptions(t),
                state: r,
                defaultOptions: e.getQueryDefaults(n),
              })),
              this.add(s)),
            s
          );
        }
        add(e) {
          this.#I.has(e.queryHash) ||
            (this.#I.set(e.queryHash, e), this.notify({ type: "added", query: e }));
        }
        remove(e) {
          let t = this.#I.get(e.queryHash);
          t &&
            (e.destroy(),
            t === e && this.#I.delete(e.queryHash),
            this.notify({ type: "removed", query: e }));
        }
        clear() {
          P.notifyManager.batch(() => {
            this.getAll().forEach((e) => {
              this.remove(e);
            });
          });
        }
        get(e) {
          return this.#I.get(e);
        }
        getAll() {
          return [...this.#I.values()];
        }
        find(e) {
          let t = { exact: !0, ...e };
          return this.getAll().find((e) => (0, O.matchQuery)(t, e));
        }
        findAll(e = {}) {
          let t = this.getAll();
          return Object.keys(e).length > 0 ? t.filter((t) => (0, O.matchQuery)(e, t)) : t;
        }
        notify(e) {
          P.notifyManager.batch(() => {
            this.listeners.forEach((t) => {
              t(e);
            });
          });
        }
        onFocus() {
          P.notifyManager.batch(() => {
            this.getAll().forEach((e) => {
              e.onFocus();
            });
          });
        }
        onOnline() {
          P.notifyManager.batch(() => {
            this.getAll().forEach((e) => {
              e.onOnline();
            });
          });
        }
      },
      $ = e.i(114272),
      W = T,
      G = class extends W.Subscribable {
        constructor(e = {}) {
          (super(), (this.config = e), (this.#B = new Set()), (this.#z = new Map()), (this.#L = 0));
        }
        #B;
        #z;
        #L;
        build(e, t, r) {
          let n = new $.Mutation({
            mutationCache: this,
            mutationId: ++this.#L,
            options: e.defaultMutationOptions(t),
            state: r,
          });
          return (this.add(n), n);
        }
        add(e) {
          this.#B.add(e);
          let t = J(e);
          if ("string" == typeof t) {
            let r = this.#z.get(t);
            r ? r.push(e) : this.#z.set(t, [e]);
          }
          this.notify({ type: "added", mutation: e });
        }
        remove(e) {
          if (this.#B.delete(e)) {
            let t = J(e);
            if ("string" == typeof t) {
              let r = this.#z.get(t);
              if (r)
                if (r.length > 1) {
                  let t = r.indexOf(e);
                  -1 !== t && r.splice(t, 1);
                } else r[0] === e && this.#z.delete(t);
            }
          }
          this.notify({ type: "removed", mutation: e });
        }
        canRun(e) {
          let t = J(e);
          if ("string" != typeof t) return !0;
          {
            let r = this.#z.get(t),
              n = r?.find((e) => "pending" === e.state.status);
            return !n || n === e;
          }
        }
        runNext(e) {
          let t = J(e);
          if ("string" != typeof t) return Promise.resolve();
          {
            let r = this.#z.get(t)?.find((t) => t !== e && t.state.isPaused);
            return r?.continue() ?? Promise.resolve();
          }
        }
        clear() {
          P.notifyManager.batch(() => {
            (this.#B.forEach((e) => {
              this.notify({ type: "removed", mutation: e });
            }),
              this.#B.clear(),
              this.#z.clear());
          });
        }
        getAll() {
          return Array.from(this.#B);
        }
        find(e) {
          let t = { exact: !0, ...e };
          return this.getAll().find((e) => (0, O.matchMutation)(t, e));
        }
        findAll(e = {}) {
          return this.getAll().filter((t) => (0, O.matchMutation)(e, t));
        }
        notify(e) {
          P.notifyManager.batch(() => {
            this.listeners.forEach((t) => {
              t(e);
            });
          });
        }
        resumePausedMutations() {
          let e = this.getAll().filter((e) => e.state.isPaused);
          return P.notifyManager.batch(() => Promise.all(e.map((e) => e.continue().catch(O.noop))));
        }
      };
    function J(e) {
      return e.options.scope?.id;
    }
    var Y = e.i(175555),
      Z = e.i(814448),
      X = class {
        #V;
        #$;
        #s;
        #W;
        #G;
        #J;
        #Y;
        #Z;
        constructor(e = {}) {
          ((this.#V = e.queryCache || new V()),
            (this.#$ = e.mutationCache || new G()),
            (this.#s = e.defaultOptions || {}),
            (this.#W = new Map()),
            (this.#G = new Map()),
            (this.#J = 0));
        }
        mount() {
          (this.#J++,
            1 === this.#J &&
              ((this.#Y = Y.focusManager.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#V.onFocus());
              })),
              (this.#Z = Z.onlineManager.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#V.onOnline());
              }))));
        }
        unmount() {
          (this.#J--,
            0 === this.#J && (this.#Y?.(), (this.#Y = void 0), this.#Z?.(), (this.#Z = void 0)));
        }
        isFetching(e) {
          return this.#V.findAll({ ...e, fetchStatus: "fetching" }).length;
        }
        isMutating(e) {
          return this.#$.findAll({ ...e, status: "pending" }).length;
        }
        getQueryData(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#V.get(t.queryHash)?.state.data;
        }
        ensureQueryData(e) {
          let t = this.defaultQueryOptions(e),
            r = this.#V.build(this, t),
            n = r.state.data;
          return void 0 === n
            ? this.fetchQuery(e)
            : (e.revalidateIfStale &&
                r.isStaleByTime((0, O.resolveStaleTime)(t.staleTime, r)) &&
                this.prefetchQuery(t),
              Promise.resolve(n));
        }
        getQueriesData(e) {
          return this.#V.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
        }
        setQueryData(e, t, r) {
          let n = this.defaultQueryOptions({ queryKey: e }),
            i = this.#V.get(n.queryHash),
            s = i?.state.data,
            a = (0, O.functionalUpdate)(t, s);
          if (void 0 !== a) return this.#V.build(this, n).setData(a, { ...r, manual: !0 });
        }
        setQueriesData(e, t, r) {
          return P.notifyManager.batch(() =>
            this.#V.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)])
          );
        }
        getQueryState(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#V.get(t.queryHash)?.state;
        }
        removeQueries(e) {
          let t = this.#V;
          P.notifyManager.batch(() => {
            t.findAll(e).forEach((e) => {
              t.remove(e);
            });
          });
        }
        resetQueries(e, t) {
          let r = this.#V;
          return P.notifyManager.batch(
            () => (
              r.findAll(e).forEach((e) => {
                e.reset();
              }),
              this.refetchQueries({ type: "active", ...e }, t)
            )
          );
        }
        cancelQueries(e, t = {}) {
          let r = { revert: !0, ...t };
          return Promise.all(
            P.notifyManager.batch(() => this.#V.findAll(e).map((e) => e.cancel(r)))
          )
            .then(O.noop)
            .catch(O.noop);
        }
        invalidateQueries(e, t = {}) {
          return P.notifyManager.batch(() =>
            (this.#V.findAll(e).forEach((e) => {
              e.invalidate();
            }),
            e?.refetchType === "none")
              ? Promise.resolve()
              : this.refetchQueries({ ...e, type: e?.refetchType ?? e?.type ?? "active" }, t)
          );
        }
        refetchQueries(e, t = {}) {
          let r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
          return Promise.all(
            P.notifyManager.batch(() =>
              this.#V
                .findAll(e)
                .filter((e) => !e.isDisabled() && !e.isStatic())
                .map((e) => {
                  let t = e.fetch(void 0, r);
                  return (
                    r.throwOnError || (t = t.catch(O.noop)),
                    "paused" === e.state.fetchStatus ? Promise.resolve() : t
                  );
                })
            )
          ).then(O.noop);
        }
        fetchQuery(e) {
          let t = this.defaultQueryOptions(e);
          void 0 === t.retry && (t.retry = !1);
          let r = this.#V.build(this, t);
          return r.isStaleByTime((0, O.resolveStaleTime)(t.staleTime, r))
            ? r.fetch(t)
            : Promise.resolve(r.state.data);
        }
        prefetchQuery(e) {
          return this.fetchQuery(e).then(O.noop).catch(O.noop);
        }
        fetchInfiniteQuery(e) {
          return ((e.behavior = E(e.pages)), this.fetchQuery(e));
        }
        prefetchInfiniteQuery(e) {
          return this.fetchInfiniteQuery(e).then(O.noop).catch(O.noop);
        }
        ensureInfiniteQueryData(e) {
          return ((e.behavior = E(e.pages)), this.ensureQueryData(e));
        }
        resumePausedMutations() {
          return Z.onlineManager.isOnline() ? this.#$.resumePausedMutations() : Promise.resolve();
        }
        getQueryCache() {
          return this.#V;
        }
        getMutationCache() {
          return this.#$;
        }
        getDefaultOptions() {
          return this.#s;
        }
        setDefaultOptions(e) {
          this.#s = e;
        }
        setQueryDefaults(e, t) {
          this.#W.set((0, O.hashKey)(e), { queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          let t = [...this.#W.values()],
            r = {};
          return (
            t.forEach((t) => {
              (0, O.partialMatchKey)(e, t.queryKey) && Object.assign(r, t.defaultOptions);
            }),
            r
          );
        }
        setMutationDefaults(e, t) {
          this.#G.set((0, O.hashKey)(e), { mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          let t = [...this.#G.values()],
            r = {};
          return (
            t.forEach((t) => {
              (0, O.partialMatchKey)(e, t.mutationKey) && Object.assign(r, t.defaultOptions);
            }),
            r
          );
        }
        defaultQueryOptions(e) {
          if (e._defaulted) return e;
          let t = {
            ...this.#s.queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0,
          };
          return (
            t.queryHash || (t.queryHash = (0, O.hashQueryKeyByOptions)(t.queryKey, t)),
            void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode),
            void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
            !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
            t.queryFn === O.skipToken && (t.enabled = !1),
            t
          );
        }
        defaultMutationOptions(e) {
          return e?._defaulted
            ? e
            : {
                ...this.#s.mutations,
                ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
                ...e,
                _defaulted: !0,
              };
        }
        clear() {
          (this.#V.clear(), this.#$.clear());
        }
      };
    e.s(["QueryClient", 0, X], 317751);
    let ee = (e) => e.queryClient ?? new X(e.queryClientConfig);
    function et(e) {
      let t = e.state.error;
      if (t instanceof Error && "TRPCClientError" === t.name) {
        let r = { message: t.message, data: t.data, shape: t.shape };
        return { ...e, state: { ...e.state, error: r } };
      }
      return e;
    }
    e.i(707749);
    var er = e.i(94802);
    let en = [
      "loggedInViewerRouter",
      "admin",
      "apiKeys",
      "apps",
      "auth",
      "availability",
      "appBasecamp3",
      "bookings",
      "calendars",
      "calVideo",
      "credentials",
      "deploymentSetup",
      "dsync",
      "eventTypes",
      "eventTypesHeavy",
      "features",
      "holidays",
      "featureOptIn",
      "i18n",
      "insights",
      "me",
      "ooo",
      "payments",
      "public",
      "timezones",
      "saml",
      "slots",
      "teams",
      "organizations",
      "travelSchedules",
      "users",
      "viewer",
      "webhook",
      "workflows",
      "googleWorkspace",
      "oAuth",
      "attributes",
      "delegationCredential",
      "routing",
      "credits",
      "filterSegments",
      "aiVoiceAgent",
      "phoneNumber",
      "pbac",
      "attributeSync",
      "integrationSyncAudit",
    ];
    e.s(["ENDPOINTS", 0, en], 287402);
    let ei = (e) => (t) => {
        let r,
          n = t.op.path.split("."),
          i = "";
        return (
          2 == n.length
            ? ((r = n[0]), (i = n[1]))
            : ((r = n[1]), (i = n.splice(2, n.length - 2).join("."))),
          e[r]({ ...t, op: { ...t.op, path: i } })
        );
      },
      es =
        ((t = B(
          (n = {
            config() {
              let e = "/api/trpc";
              return {
                links: [
                  (0, o.loggerLink)({
                    enabled: (e) => "down" === e.direction && e.result instanceof Error,
                  }),
                  (0, u.splitLink)({
                    condition: (e) => !!e.context.skipBatch,
                    true: (t) =>
                      ei(
                        Object.fromEntries(
                          en.map((r) => [r, (0, a.httpLink)({ url: `${e}/${r}` })(t)])
                        )
                      ),
                    false: (t) =>
                      ei(
                        Object.fromEntries(
                          en.map((r) => [r, (0, s.httpBatchLink)({ url: `${e}/${r}` })(t)])
                        )
                      ),
                  }),
                ],
                queryClientConfig: {
                  defaultOptions: {
                    queries: {
                      staleTime: 1e3,
                      retry(e, t) {
                        let r = t?.data?.code;
                        return (
                          "BAD_REQUEST" !== r && "FORBIDDEN" !== r && "UNAUTHORIZED" !== r && e < 3
                        );
                      },
                    },
                  },
                },
                transformer: i.default,
              };
            },
            ssr: !1,
          })
        )),
        (r = (function (t) {
          let { config: r } = t;
          return (n) => {
            let i = B(t),
              s = (e) => {
                let [s] = (0, q.useState)(() => {
                    if (e.trpc) return e.trpc;
                    let n = r({}),
                      s = ee(n),
                      a = i.createClient(n);
                    return {
                      abortOnUnmount: n.abortOnUnmount,
                      queryClient: s,
                      trpcClient: a,
                      ssrState: !!t.ssr && "mounting",
                      ssrContext: null,
                    };
                  }),
                  { queryClient: a, trpcClient: o, ssrState: u, ssrContext: l } = s,
                  f = i.useDehydratedState(o, e.pageProps?.trpcState);
                return q.default.createElement(
                  i.Provider,
                  {
                    abortOnUnmount: s.abortOnUnmount ?? !1,
                    client: o,
                    queryClient: a,
                    ssrState: u,
                    ssrContext: l,
                  },
                  q.default.createElement(
                    c.QueryClientProvider,
                    { client: a },
                    q.default.createElement(
                      h.HydrationBoundary,
                      { state: f },
                      q.default.createElement(n, Object.assign({}, e))
                    )
                  )
                );
              };
            (n.getInitialProps ?? t.ssr) &&
              (s.getInitialProps = async (i) => {
                let s = async () => {
                    if ("function" == typeof t.ssr) {
                      if ("u" > typeof window) return !1;
                      try {
                        return await t.ssr({ ctx: i.ctx });
                      } catch (e) {
                        return !1;
                      }
                    }
                    return t.ssr;
                  },
                  a = await s(),
                  o = i.AppTree,
                  u = !!i.Component,
                  c = u ? i.ctx : i,
                  h = {};
                if (n.getInitialProps) {
                  let e = await n.getInitialProps(i);
                  h = { ...(u ? (e.pageProps ?? {}) : e), ...h };
                }
                let p = (e) => (u ? { pageProps: e } : e);
                if ("u" > typeof window || !a) return p(h);
                let d = r({ ctx: c }),
                  y = (0, f.createTRPCUntypedClient)(d),
                  m = ee(d),
                  g = {
                    pageProps: h,
                    trpc: {
                      config: d,
                      trpcClient: y,
                      queryClient: m,
                      ssrState: "prepass",
                      ssrContext: c,
                    },
                  },
                  b = await e.A(852441);
                for (; b.renderToString((0, q.createElement)(o, g)), m.isFetching(); )
                  await new Promise((e) => {
                    let t = m.getQueryCache().subscribe((r) => {
                      r?.query.getObserversCount() === 0 && (e(), t());
                    });
                  });
                let v = (0, l.dehydrate)(m, {
                    shouldDehydrateQuery: (e) =>
                      "idle" !== e.state.fetchStatus || "pending" !== e.state.status,
                  }),
                  w = { ...v, queries: v.queries.map(et), mutations: v.mutations.map(et) };
                h.trpcState = y.runtime.combinedTransformer.output.serialize(w);
                let O = p(h);
                if ("responseMeta" in t) {
                  let e =
                    t.responseMeta?.({
                      ctx: c,
                      clientErrors: [...v.queries, ...v.mutations]
                        .map((e) => e.state.error)
                        .flatMap((e) =>
                          e instanceof Error && "TRPCClientError" === e.name ? [e] : []
                        ),
                    }) ?? {};
                  for (let [t, r] of Object.entries(e.headers ?? {}))
                    "string" == typeof r && c.res?.setHeader(t, r);
                  e.status && c.res && (c.res.statusCode = e.status);
                }
                return O;
              });
            let a = n.displayName ?? n.name ?? "Component";
            return ((s.displayName = `withTRPC(${a})`), s);
          };
        })(n)),
        (0, er.createFlatProxy)((e) =>
          "useContext" === e || "useUtils" === e
            ? () => {
                let e = t.useUtils();
                return (0, q.useMemo)(() => (0, d.createReactQueryUtils)(e), [e]);
              }
            : "useQueries" === e
              ? t.useQueries
              : "useSuspenseQueries" === e
                ? t.useSuspenseQueries
                : "withTRPC" === e
                  ? r
                  : (0, p.createReactDecoration)(e, t)
        ));
    (i.default, e.s(["trpc", 0, es], 273446));
  },
]);
