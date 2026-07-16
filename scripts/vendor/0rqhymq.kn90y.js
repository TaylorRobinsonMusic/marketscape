(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  92180,
  959652,
  (e) => {
    "use strict";
    e.s(
      [
        "isSVGElement",
        0,
        function (e) {
          return e instanceof SVGElement && "svg" !== e.tagName;
        },
      ],
      92180
    );
    var t = e.i(982363),
      r = e.i(271329),
      n = e.i(298549);
    e.s(
      [
        "animateSingleValue",
        0,
        function (e, i, s) {
          let o = (0, n.isMotionValue)(e) ? e : (0, r.motionValue)(e);
          return (o.start((0, t.animateMotionValue)("", o, i, s)), o.animation);
        },
      ],
      959652
    );
  },
  262202,
  (e) => {
    "use strict";
    (e.i(436864), e.i(111914), e.s([]));
  },
  207597,
  (e) => {
    "use strict";
    e.s([
      "localStorage",
      0,
      {
        getItem(e) {
          try {
            return window.localStorage.getItem(e);
          } catch {
            return null;
          }
        },
        setItem(e, t) {
          try {
            window.localStorage.setItem(e, t);
          } catch {
            return;
          }
        },
        removeItem: (e) => {
          try {
            window.localStorage.removeItem(e);
          } catch {
            return;
          }
        },
        get length() {
          try {
            return window.localStorage.length;
          } catch {
            return 0;
          }
        },
        key(e) {
          try {
            return window.localStorage.key(e);
          } catch {
            return null;
          }
        },
      },
      "sessionStorage",
      0,
      {
        getItem(e) {
          try {
            return window.sessionStorage.getItem(e);
          } catch {
            return null;
          }
        },
        setItem(e, t) {
          try {
            window.sessionStorage.setItem(e, t);
          } catch {
            return;
          }
        },
        removeItem: (e) => {
          try {
            window.sessionStorage.removeItem(e);
          } catch {
            return;
          }
        },
        get length() {
          try {
            return window.sessionStorage.length;
          } catch {
            return 0;
          }
        },
        key(e) {
          try {
            return window.sessionStorage.key(e);
          } catch {
            return null;
          }
        },
      },
    ]);
  },
  282802,
  (e) => {
    "use strict";
    var t = e.i(271645),
      r = e.i(347637);
    function n() {
      return window.CalEmbed;
    }
    function i() {
      return n()?.embedStore;
    }
    e.s([
      "useEmbedBrandColorsValue",
      0,
      function () {
        let [, e] = (0, t.useState)({});
        return (
          (0, t.useEffect)(() => {
            let t = i();
            if (!t) return;
            let r = (t.reactNonStylesStateSetters ??= {});
            return (
              (r.branding = e),
              () => {
                r.branding === e && delete r.branding;
              }
            );
          }, []),
          i()?.nonStyles?.branding ?? {}
        );
      },
      "useEmbedThemeValue",
      0,
      function () {
        let e = (0, r.useCompatSearchParams)(),
          s = i(),
          [o, a] = (0, t.useState)(s?.theme ?? e?.get("theme") ?? void 0),
          l = (0, t.useRef)(""),
          u = (0, t.useCallback)(() => {
            n()?.sdkActionManager?.fire("__routeChanged", {});
          }, []);
        return (
          (0, t.useEffect)(() => {
            if ("u" < typeof document) return;
            let e = new URL(document.URL),
              t = `${e.pathname}?${e.searchParams}`;
            (l.current && l.current !== t && u(), (l.current = t));
          }, [e, u]),
          (0, t.useEffect)(() => {
            let e = i();
            if (e)
              return (
                (e.setTheme = a),
                () => {
                  e.setTheme === a && (e.setTheme = void 0);
                }
              );
          }, []),
          o
        );
      },
    ]);
  },
  272177,
  (e) => {
    "use strict";
    var t = e.i(282802),
      r = e.i(207597),
      n = e.i(278587),
      i = e.i(271645);
    let s = i.useEffect;
    function o(e, i = !1) {
      e = void 0 === e ? (r.localStorage.getItem("app-theme") ?? "system") : (e ?? "system");
      let { resolvedTheme: a, setTheme: l, forcedTheme: u, theme: c } = (0, n.useTheme)(),
        d = (0, t.useEmbedThemeValue)();
      if (
        (s(() => {
          if (i || void 0 === e) return;
          let t = d ? ("auto" === d ? "system" : d) : e;
          t && t !== c && l(t);
        }, [e, l, d, i]),
        i)
      )
        return { resolvedTheme: a, forcedTheme: u, activeTheme: c };
    }
    ((s = i.useLayoutEffect),
      e.s([
        "default",
        0,
        o,
        "useGetTheme",
        0,
        function () {
          let e = o(null, !0);
          if (!e) throw Error("useTheme must have a return value here");
          return e;
        },
      ]));
  },
  684219,
  (e) => {
    "use strict";
    e.i(247167);
    let t = {
      reset: [0, 0],
      bold: [1, 22],
      dim: [2, 22],
      italic: [3, 23],
      underline: [4, 24],
      overline: [53, 55],
      inverse: [7, 27],
      hidden: [8, 28],
      strikethrough: [9, 29],
      black: [30, 39],
      red: [31, 39],
      green: [32, 39],
      yellow: [33, 39],
      blue: [34, 39],
      magenta: [35, 39],
      cyan: [36, 39],
      white: [37, 39],
      blackBright: [90, 39],
      redBright: [91, 39],
      greenBright: [92, 39],
      yellowBright: [93, 39],
      blueBright: [94, 39],
      magentaBright: [95, 39],
      cyanBright: [96, 39],
      whiteBright: [97, 39],
      bgBlack: [40, 49],
      bgRed: [41, 49],
      bgGreen: [42, 49],
      bgYellow: [43, 49],
      bgBlue: [44, 49],
      bgMagenta: [45, 49],
      bgCyan: [46, 49],
      bgWhite: [47, 49],
      bgBlackBright: [100, 49],
      bgRedBright: [101, 49],
      bgGreenBright: [102, 49],
      bgYellowBright: [103, 49],
      bgBlueBright: [104, 49],
      bgMagentaBright: [105, 49],
      bgCyanBright: [106, 49],
      bgWhiteBright: [107, 49],
    };
    function r(e, n, i, s = !1) {
      let o = String(n),
        a = (e, t) => `\u001b[${t[0]}m${e}\u001b[${t[1]}m`,
        l = (e, r) =>
          null != r && "string" == typeof r
            ? a(e, t[r])
            : null != r && Array.isArray(r)
              ? r.reduce((e, t) => l(e, t), e)
              : null != r && null != r[e.trim()]
                ? l(e, r[e.trim()])
                : null != r && null != r["*"]
                  ? l(e, r["*"])
                  : e;
      return o.replace(/{{(.+?)}}/g, (r, n) => {
        let o = null != i[n] ? String(i[n]) : s ? "" : r;
        return e.stylePrettyLogs ? l(o, e?.prettyLogStyles?.[n] ?? null) + a("", t.reset) : o;
      });
    }
    function n(e, t = 2, r = 0) {
      return null != e && isNaN(e)
        ? ""
        : ((e = null != e ? e + r : e),
          2 === t
            ? null == e
              ? "--"
              : e < 10
                ? "0" + e
                : e.toString()
            : null == e
              ? "---"
              : e < 10
                ? "00" + e
                : e < 100
                  ? "0" + e
                  : e.toString());
    }
    function i(e) {
      let t = new Set();
      return JSON.stringify(e, (e, r) => {
        if ("object" == typeof r && null !== r) {
          if (t.has(r)) return "[Circular]";
          t.add(r);
        }
        return r;
      });
    }
    function s(e, t) {
      let r = { seen: [], stylize: a };
      return (
        null != t && O(r, t),
        o(r.showHidden) && (r.showHidden = !1),
        o(r.depth) && (r.depth = 2),
        o(r.colors) && (r.colors = !0),
        o(r.customInspect) && (r.customInspect = !0),
        r.colors && (r.stylize = l),
        b(r, e, r.depth)
      );
    }
    function o(e) {
      return void 0 === e;
    }
    function a(e) {
      return e;
    }
    function l(e, t) {
      let r = s.styles[t];
      return null != r && s?.colors?.[r]?.[0] != null && s?.colors?.[r]?.[1] != null
        ? "\x1b[" + s.colors[r][0] + "m" + e + "\x1b[" + s.colors[r][1] + "m"
        : e;
    }
    function u(e) {
      return "function" == typeof e;
    }
    function c(e) {
      return "string" == typeof e;
    }
    ((s.colors = t),
      (s.styles = {
        special: "cyan",
        number: "yellow",
        boolean: "yellow",
        undefined: "grey",
        null: "bold",
        string: "green",
        date: "magenta",
        regexp: "red",
      }));
    function d(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    function g(e) {
      return f(e) && "[object RegExp]" === h(e);
    }
    function f(e) {
      return "object" == typeof e && null !== e;
    }
    function p(e) {
      return f(e) && ("[object Error]" === h(e) || e instanceof Error);
    }
    function m(e) {
      return f(e) && "[object Date]" === h(e);
    }
    function h(e) {
      return Object.prototype.toString.call(e);
    }
    function y(e) {
      return "[" + Error.prototype.toString.call(e) + "]";
    }
    function b(e, t, r = 0) {
      var n, i, o;
      let a, l;
      if (
        e.customInspect &&
        null != t &&
        u(t) &&
        t?.inspect !== s &&
        !(t?.constructor && t?.constructor.prototype === t)
      ) {
        if ("function" != typeof t.inspect && null != t.toString) return t.toString();
        let n = t?.inspect(r, e);
        return (c(n) || (n = b(e, n, r)), n);
      }
      let f = v(e, t);
      if (f) return f;
      let h = Object.keys(t),
        O =
          ((l = {}),
          h.forEach((e) => {
            l[e] = !0;
          }),
          l);
      try {
        e.showHidden && Object.getOwnPropertyNames && (h = Object.getOwnPropertyNames(t));
      } catch (e) {}
      if (p(t) && (h.indexOf("message") >= 0 || h.indexOf("description") >= 0)) return y(t);
      if (0 === h.length)
        if (!u(e.stylize)) return t;
        else {
          if (u(t)) {
            let r = t.name ? ": " + t.name : "";
            return e.stylize("[Function" + r + "]", "special");
          }
          if (g(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
          if (m(t)) return e.stylize(Date.prototype.toISOString.call(t), "date");
          if (p(t)) return y(t);
        }
      let S = "",
        P = !1,
        E = ["{\n", "\n}"];
      if (
        (Array.isArray(t) && ((P = !0), (E = ["[\n", "\n]"])),
        u(t) && (S = " [Function" + (t.name ? ": " + t.name : "") + "]"),
        g(t) && (S = " " + RegExp.prototype.toString.call(t)),
        m(t) && (S = " " + Date.prototype.toUTCString.call(t)),
        p(t) && (S = " " + y(t)),
        0 === h.length && (!P || 0 == t.length))
      )
        return E[0] + S + E[1];
      if (r < 0)
        if (g(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
        else return e.stylize("[Object]", "special");
      return (
        e.seen.push(t),
        (a = P
          ? (function (e, t, r, n, i) {
              let s = [];
              for (let i = 0, o = t.length; i < o; ++i)
                d(t, String(i)) ? s.push(w(e, t, r, n, String(i), !0)) : s.push("");
              return (
                i.forEach((i) => {
                  i.match(/^\d+$/) || s.push(w(e, t, r, n, i, !0));
                }),
                s
              );
            })(e, t, r, O, h)
          : h.map((n) => w(e, t, r, O, n, P))),
        e.seen.pop(),
        (n = a),
        (i = S),
        (o = E)[0] + ("" === i ? "" : i + "\n") + "  " + n.join(",\n  ") + " " + o[1]
      );
    }
    function w(e, t, r, n, i, s) {
      let a,
        l,
        u = { value: void 0 };
      try {
        u.value = t[i];
      } catch (e) {}
      try {
        Object.getOwnPropertyDescriptor && (u = Object.getOwnPropertyDescriptor(t, i) || u);
      } catch (e) {}
      if (
        (u.get
          ? (l = u.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special"))
          : u.set && (l = e.stylize("[Setter]", "special")),
        d(n, i) || (a = "[" + i + "]"),
        !l &&
          (0 > e.seen.indexOf(u.value)
            ? (l = null === r ? b(e, u.value, void 0) : b(e, u.value, r - 1)).indexOf("\n") > -1 &&
              (l = s
                ? l
                    .split("\n")
                    .map((e) => "  " + e)
                    .join("\n")
                    .substr(2)
                : "\n" +
                  l
                    .split("\n")
                    .map((e) => "   " + e)
                    .join("\n"))
            : (l = e.stylize("[Circular]", "special"))),
        o(a))
      ) {
        if (s && i.match(/^\d+$/)) return l;
        (a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
          ? ((a = a.substr(1, a.length - 2)), (a = e.stylize(a, "name")))
          : ((a = a
              .replace(/'/g, "\\'")
              .replace(/\\"/g, "\\'")
              .replace(/(^"|"$)/g, "'")),
            (a = e.stylize(a, "string")));
      }
      return a + ": " + l;
    }
    function v(e, t) {
      if (o(t)) return e.stylize("undefined", "undefined");
      if (c(t)) {
        let r =
          "'" +
          JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\\'") +
          "'";
        return e.stylize(r, "string");
      }
      return "number" == typeof t
        ? e.stylize("" + t, "number")
        : "boolean" == typeof t
          ? e.stylize("" + t, "boolean")
          : null === t
            ? e.stylize("null", "null")
            : void 0;
    }
    function O(e, t) {
      if (!t || !f(t)) return e;
      let r = { ...e },
        n = { ...t },
        i = Object.keys(t),
        s = i.length;
      for (; s--; ) r[i[s]] = n[i[s]];
      return e;
    }
    let S = {
        getCallerStackFrame: j,
        getErrorTrace: _,
        getMeta: function (e, t, r, n, i, s) {
          return Object.assign({}, P, {
            name: i,
            parentNames: s,
            date: new Date(),
            logLevelId: e,
            logLevelName: t,
            path: n ? void 0 : j(r),
          });
        },
        transportJSON: function (e) {
          console.log(i(e));
        },
        transportFormatted: function (e, t, r, n) {
          let o = (r.length > 0 && t.length > 0 ? "\n" : "") + r.join("\n");
          ((n.prettyInspectOptions.colors = n.stylePrettyLogs),
            console.log(
              e +
                (function (e, ...t) {
                  let r = { seen: [], stylize: a };
                  null != e && O(r, e);
                  let n = t[0],
                    o = 0,
                    l = "",
                    u = "";
                  if ("string" == typeof n) {
                    let a;
                    if (1 === t.length) return n;
                    let c = 0;
                    for (let u = 0; u < n.length - 1; u++)
                      if (37 === n.charCodeAt(u)) {
                        let d = n.charCodeAt(++u);
                        if (o + 1 !== t.length) {
                          switch (d) {
                            case 115: {
                              let n = t[++o];
                              a =
                                "number" == typeof n || "bigint" == typeof n
                                  ? v(r, n)
                                  : "object" != typeof n || null === n
                                    ? String(n)
                                    : s(n, { ...e, compact: 3, colors: !1, depth: 0 });
                              break;
                            }
                            case 106:
                              a = i(t[++o]);
                              break;
                            case 100: {
                              let e = t[++o];
                              a =
                                "bigint" == typeof e
                                  ? v(r, e)
                                  : "symbol" == typeof e
                                    ? "NaN"
                                    : v(r, e);
                              break;
                            }
                            case 79:
                              a = s(t[++o], e);
                              break;
                            case 111:
                              a = s(t[++o], { ...e, showHidden: !0, showProxy: !0, depth: 4 });
                              break;
                            case 105: {
                              let e = t[++o];
                              a =
                                "bigint" == typeof e
                                  ? v(r, e)
                                  : "symbol" == typeof e
                                    ? "NaN"
                                    : v(r, parseInt(a));
                              break;
                            }
                            case 102: {
                              let e = t[++o];
                              a = "symbol" == typeof e ? "NaN" : v(r, parseInt(e));
                              break;
                            }
                            case 99:
                              ((o += 1), (a = ""));
                              break;
                            case 37:
                              ((l += n.slice(c, u)), (c = u + 1));
                              continue;
                            default:
                              continue;
                          }
                          (c !== u - 1 && (l += n.slice(c, u - 1)), (l += a), (c = u + 1));
                        } else 37 === d && ((l += n.slice(c, u)), (c = u + 1));
                      }
                    0 !== c && (o++, (u = " "), c < n.length && (l += n.slice(c)));
                  }
                  for (; o < t.length; ) {
                    let r = t[o];
                    ((l += u), (l += "string" != typeof r ? s(r, e) : r), (u = " "), o++);
                  }
                  return l;
                })(n.prettyInspectOptions, ...t) +
                o
            ));
        },
        isBuffer: function (e) {
          return !e && !1;
        },
        isError: L,
        prettyFormatLogObj: function (e, t) {
          return e.reduce((e, r) => (L(r) ? e.errors.push(x(r, t)) : e.args.push(r), e), {
            args: [],
            errors: [],
          });
        },
        prettyFormatErrorObj: x,
      },
      P = {
        runtime: [typeof window, typeof document].includes("undefined") ? "Generic" : "Browser",
        browser: globalThis?.navigator?.userAgent,
      },
      E =
        /(?:(?:file|https?|global code|[^@]+)@)?(?:file:)?((?:\/[^:/]+){2,})(?::(\d+))?(?::(\d+))?/;
    function j(e, t = Error()) {
      return C(t?.stack?.split("\n")?.filter((e) => !e.includes("Error: "))?.[e]);
    }
    function _(e) {
      return e?.stack
        ?.split("\n")
        ?.filter((e) => !e.includes("Error: "))
        ?.reduce((e, t) => (e.push(C(t)), e), []);
    }
    function C(e) {
      let t = globalThis?.location?.origin,
        r = {
          fullFilePath: void 0,
          fileName: void 0,
          fileNameWithLine: void 0,
          fileColumn: void 0,
          fileLine: void 0,
          filePath: void 0,
          filePathWithLine: void 0,
          method: void 0,
        };
      if (null != e) {
        let n = e.match(E);
        if (n) {
          ((r.filePath = n[1].replace(/\?.*$/, "")), (r.fullFilePath = `${t}${r.filePath}`));
          let e = r.filePath.split("/");
          ((r.fileName = e[e.length - 1]),
            (r.fileLine = n[2]),
            (r.fileColumn = n[3]),
            (r.filePathWithLine = `${r.filePath}:${r.fileLine}`),
            (r.fileNameWithLine = `${r.fileName}:${r.fileLine}`));
        }
      }
      return r;
    }
    function L(e) {
      return e instanceof Error;
    }
    function x(e, t) {
      let n = _(e).map((e) => r(t, t.prettyErrorStackTemplate, { ...e }, !0)),
        i = {
          errorName: ` ${e.name} `,
          errorMessage: Object.getOwnPropertyNames(e)
            .reduce((t, r) => ("stack" !== r && t.push(e[r]), t), [])
            .join(", "),
          errorStack: n.join("\n"),
        };
      return r(t, t.prettyErrorTemplate, i);
    }
    class k {
      constructor(e, t, r = 4) {
        ((this.logObj = t),
          (this.stackDepthLevel = r),
          (this.runtime = S),
          (this.settings = {
            type: e?.type ?? "pretty",
            name: e?.name,
            parentNames: e?.parentNames,
            minLevel: e?.minLevel ?? 0,
            argumentsArrayName: e?.argumentsArrayName,
            hideLogPositionForProduction: e?.hideLogPositionForProduction ?? !1,
            prettyLogTemplate:
              e?.prettyLogTemplate ??
              "{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}	{{logLevelName}}	{{filePathWithLine}}{{nameWithDelimiterPrefix}}	",
            prettyErrorTemplate:
              e?.prettyErrorTemplate ??
              "\n{{errorName}} {{errorMessage}}\nerror stack:\n{{errorStack}}",
            prettyErrorStackTemplate:
              e?.prettyErrorStackTemplate ?? "  • {{fileName}}	{{method}}\n	{{filePathWithLine}}",
            prettyErrorParentNamesSeparator: e?.prettyErrorParentNamesSeparator ?? ":",
            prettyErrorLoggerNameDelimiter: e?.prettyErrorLoggerNameDelimiter ?? "	",
            stylePrettyLogs: e?.stylePrettyLogs ?? !0,
            prettyLogTimeZone: e?.prettyLogTimeZone ?? "UTC",
            prettyLogStyles: e?.prettyLogStyles ?? {
              logLevelName: {
                "*": ["bold", "black", "bgWhiteBright", "dim"],
                SILLY: ["bold", "white"],
                TRACE: ["bold", "whiteBright"],
                DEBUG: ["bold", "green"],
                INFO: ["bold", "blue"],
                WARN: ["bold", "yellow"],
                ERROR: ["bold", "red"],
                FATAL: ["bold", "redBright"],
              },
              dateIsoStr: "white",
              filePathWithLine: "white",
              name: ["white", "bold"],
              nameWithDelimiterPrefix: ["white", "bold"],
              nameWithDelimiterSuffix: ["white", "bold"],
              errorName: ["bold", "bgRedBright", "whiteBright"],
              fileName: ["yellow"],
              fileNameWithLine: "white",
            },
            prettyInspectOptions: e?.prettyInspectOptions ?? {
              colors: !0,
              compact: !1,
              depth: 1 / 0,
            },
            metaProperty: e?.metaProperty ?? "_meta",
            maskPlaceholder: e?.maskPlaceholder ?? "[***]",
            maskValuesOfKeys: e?.maskValuesOfKeys ?? ["password"],
            maskValuesOfKeysCaseInsensitive: e?.maskValuesOfKeysCaseInsensitive ?? !1,
            maskValuesRegEx: e?.maskValuesRegEx,
            prefix: [...(e?.prefix ?? [])],
            attachedTransports: [...(e?.attachedTransports ?? [])],
            overwrite: {
              mask: e?.overwrite?.mask,
              toLogObj: e?.overwrite?.toLogObj,
              addMeta: e?.overwrite?.addMeta,
              addPlaceholders: e?.overwrite?.addPlaceholders,
              formatMeta: e?.overwrite?.formatMeta,
              formatLogObj: e?.overwrite?.formatLogObj,
              transportFormatted: e?.overwrite?.transportFormatted,
              transportJSON: e?.overwrite?.transportJSON,
            },
          }));
      }
      log(e, t, ...r) {
        let n, i;
        if (e < this.settings.minLevel) return;
        let s = [...this.settings.prefix, ...r],
          o =
            this.settings.overwrite?.mask != null
              ? this.settings.overwrite?.mask(s)
              : null != this.settings.maskValuesOfKeys && this.settings.maskValuesOfKeys.length > 0
                ? this._mask(s)
                : s,
          a = null != this.logObj ? this._recursiveCloneAndExecuteFunctions(this.logObj) : void 0,
          l =
            this.settings.overwrite?.toLogObj != null
              ? this.settings.overwrite?.toLogObj(o, a)
              : this._toLogObj(o, a),
          u =
            this.settings.overwrite?.addMeta != null
              ? this.settings.overwrite?.addMeta(l, e, t)
              : this._addMetaToLogObj(l, e, t);
        return (
          this.settings.overwrite?.formatMeta != null &&
            (n = this.settings.overwrite?.formatMeta(u?.[this.settings.metaProperty])),
          this.settings.overwrite?.formatLogObj != null &&
            (i = this.settings.overwrite?.formatLogObj(o, this.settings)),
          "pretty" === this.settings.type &&
            ((n = n ?? this._prettyFormatLogObjMeta(u?.[this.settings.metaProperty])),
            (i = i ?? this.runtime.prettyFormatLogObj(o, this.settings))),
          null != n && null != i
            ? this.settings.overwrite?.transportFormatted != null
              ? this.settings.overwrite?.transportFormatted(n, i.args, i.errors, this.settings)
              : this.runtime.transportFormatted(n, i.args, i.errors, this.settings)
            : this.settings.overwrite?.transportJSON != null
              ? this.settings.overwrite?.transportJSON(u)
              : "hidden" !== this.settings.type && this.runtime.transportJSON(u),
          null != this.settings.attachedTransports &&
            this.settings.attachedTransports.length > 0 &&
            this.settings.attachedTransports.forEach((e) => {
              e(u);
            }),
          u
        );
      }
      attachTransport(e) {
        this.settings.attachedTransports.push(e);
      }
      getSubLogger(e, t) {
        let r = {
          ...this.settings,
          ...e,
          parentNames:
            this.settings?.parentNames != null && this.settings?.name != null
              ? [...this.settings.parentNames, this.settings.name]
              : this.settings?.name != null
                ? [this.settings.name]
                : void 0,
          prefix: [...this.settings.prefix, ...(e?.prefix ?? [])],
        };
        return new this.constructor(r, t ?? this.logObj, this.stackDepthLevel);
      }
      _mask(e) {
        let t =
          !0 !== this.settings.maskValuesOfKeysCaseInsensitive
            ? this.settings.maskValuesOfKeys
            : this.settings.maskValuesOfKeys.map((e) => e.toLowerCase());
        return e?.map((e) => this._recursiveCloneAndMaskValuesOfKeys(e, t));
      }
      _recursiveCloneAndMaskValuesOfKeys(e, t, r = []) {
        if (r.includes(e)) return { ...e };
        if (
          ("object" == typeof e && null !== e && r.push(e),
          this.runtime.isError(e) || this.runtime.isBuffer(e))
        )
          return e;
        if (e instanceof Map) return new Map(e);
        if (e instanceof Set) return new Set(e);
        if (Array.isArray(e)) return e.map((e) => this._recursiveCloneAndMaskValuesOfKeys(e, t, r));
        if (e instanceof Date) return new Date(e.getTime());
        else if (e instanceof URL)
          return {
            href: e.href,
            protocol: e.protocol,
            username: e.username,
            password: e.password,
            host: e.host,
            hostname: e.hostname,
            port: e.port,
            pathname: e.pathname,
            search: e.search,
            searchParams: [...e.searchParams].map(([e, t]) => ({ key: e, value: t })),
            hash: e.hash,
            origin: e.origin,
          };
        else if (null !== e && "object" == typeof e) {
          let n = this.runtime.isError(e)
            ? this._cloneError(e)
            : Object.create(Object.getPrototypeOf(e));
          return Object.getOwnPropertyNames(e).reduce(
            (n, i) => (
              (n[i] = t.includes(
                this.settings?.maskValuesOfKeysCaseInsensitive !== !0 ? i : i.toLowerCase()
              )
                ? this.settings.maskPlaceholder
                : this._recursiveCloneAndMaskValuesOfKeys(e[i], t, r)),
              n
            ),
            n
          );
        } else {
          if ("string" == typeof e) {
            let t = e;
            for (let e of this.settings?.maskValuesRegEx || [])
              t = t.replace(e, this.settings?.maskPlaceholder || "");
            return t;
          }
          return e;
        }
      }
      _recursiveCloneAndExecuteFunctions(e, t = []) {
        return this.isObjectOrArray(e) && t.includes(e)
          ? this.shallowCopy(e)
          : (this.isObjectOrArray(e) && t.push(e), Array.isArray(e))
            ? e.map((e) => this._recursiveCloneAndExecuteFunctions(e, t))
            : e instanceof Date
              ? new Date(e.getTime())
              : this.isObject(e)
                ? Object.getOwnPropertyNames(e).reduce(
                    (r, n) => {
                      let i = Object.getOwnPropertyDescriptor(e, n);
                      if (i) {
                        Object.defineProperty(r, n, i);
                        let s = e[n];
                        r[n] =
                          "function" == typeof s
                            ? s()
                            : this._recursiveCloneAndExecuteFunctions(s, t);
                      }
                      return r;
                    },
                    Object.create(Object.getPrototypeOf(e))
                  )
                : e;
      }
      isObjectOrArray(e) {
        return "object" == typeof e && null !== e;
      }
      isObject(e) {
        return "object" == typeof e && !Array.isArray(e) && null !== e;
      }
      shallowCopy(e) {
        return Array.isArray(e) ? [...e] : { ...e };
      }
      _toLogObj(e, t = {}) {
        return (
          (e = e?.map((e) => (this.runtime.isError(e) ? this._toErrorObject(e) : e))),
          (t =
            null == this.settings.argumentsArrayName
              ? 1 !== e.length ||
                Array.isArray(e[0]) ||
                !0 === this.runtime.isBuffer(e[0]) ||
                e[0] instanceof Date
                ? { ...t, ...e }
                : "object" == typeof e[0] && null != e[0]
                  ? { ...e[0], ...t }
                  : { 0: e[0], ...t }
              : { ...t, [this.settings.argumentsArrayName]: e })
        );
      }
      _cloneError(e) {
        let t = new e.constructor();
        return (
          Object.getOwnPropertyNames(e).forEach((r) => {
            t[r] = e[r];
          }),
          t
        );
      }
      _toErrorObject(e) {
        return {
          nativeError: e,
          name: e.name ?? "Error",
          message: e.message,
          stack: this.runtime.getErrorTrace(e),
        };
      }
      _addMetaToLogObj(e, t, r) {
        return {
          ...e,
          [this.settings.metaProperty]: this.runtime.getMeta(
            t,
            r,
            this.stackDepthLevel,
            this.settings.hideLogPositionForProduction,
            this.settings.name,
            this.settings.parentNames
          ),
        };
      }
      _prettyFormatLogObjMeta(e) {
        if (null == e) return "";
        let t = this.settings.prettyLogTemplate,
          i = {};
        t.includes("{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}")
          ? (t = t.replace("{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}", "{{dateIsoStr}}"))
          : "UTC" === this.settings.prettyLogTimeZone
            ? ((i.yyyy = e?.date?.getUTCFullYear() ?? "----"),
              (i.mm = n(e?.date?.getUTCMonth(), 2, 1)),
              (i.dd = n(e?.date?.getUTCDate(), 2)),
              (i.hh = n(e?.date?.getUTCHours(), 2)),
              (i.MM = n(e?.date?.getUTCMinutes(), 2)),
              (i.ss = n(e?.date?.getUTCSeconds(), 2)),
              (i.ms = n(e?.date?.getUTCMilliseconds(), 3)))
            : ((i.yyyy = e?.date?.getFullYear() ?? "----"),
              (i.mm = n(e?.date?.getMonth(), 2, 1)),
              (i.dd = n(e?.date?.getDate(), 2)),
              (i.hh = n(e?.date?.getHours(), 2)),
              (i.MM = n(e?.date?.getMinutes(), 2)),
              (i.ss = n(e?.date?.getSeconds(), 2)),
              (i.ms = n(e?.date?.getMilliseconds(), 3)));
        let s =
          "UTC" === this.settings.prettyLogTimeZone
            ? e?.date
            : new Date(e?.date?.getTime() - e?.date?.getTimezoneOffset() * 6e4);
        ((i.rawIsoStr = s?.toISOString()),
          (i.dateIsoStr = s?.toISOString().replace("T", " ").replace("Z", "")),
          (i.logLevelName = e?.logLevelName),
          (i.fileNameWithLine = e?.path?.fileNameWithLine ?? ""),
          (i.filePathWithLine = e?.path?.filePathWithLine ?? ""),
          (i.fullFilePath = e?.path?.fullFilePath ?? ""));
        let o = this.settings.parentNames?.join(this.settings.prettyErrorParentNamesSeparator);
        return (
          (o =
            null != o && e?.name != null
              ? o + this.settings.prettyErrorParentNamesSeparator
              : void 0),
          (i.name = e?.name != null || null != o ? ((o ?? "") + e?.name ?? "") : ""),
          (i.nameWithDelimiterPrefix =
            i.name.length > 0 ? this.settings.prettyErrorLoggerNameDelimiter + i.name : ""),
          (i.nameWithDelimiterSuffix =
            i.name.length > 0 ? i.name + this.settings.prettyErrorLoggerNameDelimiter : ""),
          this.settings.overwrite?.addPlaceholders != null &&
            this.settings.overwrite?.addPlaceholders(e, i),
          r(this.settings, t, i)
        );
      }
    }
    var T = e.i(821410);
    let N = {
        minLevel: parseInt("3"),
        maskValuesOfKeys: ["password", "passwordConfirmation", "credentials", "credential"],
        prettyLogTimeZone: T.IS_PRODUCTION ? "UTC" : "local",
        prettyErrorStackTemplate: "  • {{fileName}}	{{method}}\n	{{filePathWithLine}}",
        prettyErrorTemplate: "\n{{errorName}} {{errorMessage}}\nerror stack:\n{{errorStack}}",
        prettyLogTemplate: "{{hh}}:{{MM}}:{{ss}}:{{ms}} [{{logLevelName}}] ",
        stylePrettyLogs: !T.IS_PRODUCTION,
        prettyLogStyles: { name: "yellow", dateIsoStr: "blue" },
        type: T.IS_PRODUCTION ? "json" : "pretty",
      },
      I = new (class extends k {
        constructor(e, t) {
          const r = "u" > typeof window && "u" > typeof document,
            n =
              !!r &&
              void 0 !== window.chrome &&
              void 0 !== window.CSS &&
              window.CSS.supports("color", "green"),
            i = !!r && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
          (((e = e || {}).stylePrettyLogs = (!e.stylePrettyLogs || !r || !!n) && e.stylePrettyLogs),
            super(e, t, i ? 4 : 5));
        }
        log(e, t, ...r) {
          return super.log(e, t, ...r);
        }
        silly(...e) {
          return super.log(0, "SILLY", ...e);
        }
        trace(...e) {
          return super.log(1, "TRACE", ...e);
        }
        debug(...e) {
          return super.log(2, "DEBUG", ...e);
        }
        info(...e) {
          return super.log(3, "INFO", ...e);
        }
        warn(...e) {
          return super.log(4, "WARN", ...e);
        }
        error(...e) {
          return super.log(5, "ERROR", ...e);
        }
        fatal(...e) {
          return super.log(6, "FATAL", ...e);
        }
        getSubLogger(e, t) {
          return super.getSubLogger(e, t);
        }
      })(N);
    e.s(["default", 0, I], 684219);
  },
  270308,
  (e) => {
    "use strict";
    e.s([
      "getTldPlus1",
      0,
      function (e) {
        return e.split(".").slice(-2).join(".");
      },
    ]);
  },
  441567,
  (e) => {
    "use strict";
    function t(e, t) {
      return (
        e ||
        `https://eu.ui-avatars.com/api/?background=fff&color=f9f9f9&bold=true&background=000000&name=${encodeURIComponent(t || "")}`
      );
    }
    e.s([
      "getOrgOrTeamAvatar",
      0,
      function (e) {
        return t(e.logoUrl || e.parent?.logoUrl, e.name);
      },
      "getPlaceholderAvatar",
      0,
      t,
    ]);
  },
  788597,
  (e) => {
    "use strict";
    var t = e.i(271645);
    let r = (0, t.createContext)({
      clientId: "",
      accessToken: "",
      organizationId: 0,
      options: { refreshUrl: "", apiUrl: "" },
      error: "",
      getClient: () => {},
      isEmbed: !1,
    });
    e.s(["useAtomsContext", 0, () => (0, t.useContext)(r)]);
  },
  672381,
  (e) => {
    "use strict";
    var t = e.i(788597);
    e.s([
      "useIsPlatform",
      0,
      () => {
        let e = (0, t.useAtomsContext)();
        return !!e?.clientId;
      },
    ]);
  },
  3303,
  (e, t, r) => {
    t.exports = e.r(479520);
  },
  488143,
  (e, t, r) => {
    "use strict";
    function n({
      widthInt: e,
      heightInt: t,
      blurWidth: r,
      blurHeight: i,
      blurDataURL: s,
      objectFit: o,
    }) {
      let a = r ? 40 * r : e,
        l = i ? 40 * i : t,
        u = a && l ? `viewBox='0 0 ${a} ${l}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${s}'/%3E%3C/svg%3E`;
    }
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
  },
  987690,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      VALID_LOADERS: function () {
        return s;
      },
      imageConfigDefault: function () {
        return o;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let s = ["default", "imgix", "cloudinary", "akamai", "custom"],
      o = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumDiskCacheSize: void 0,
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
        customCacheHandler: !1,
      };
  },
  908927,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      e.r(233525));
    let n = e.r(543369),
      i = e.r(488143),
      s = e.r(987690),
      o = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function a(e) {
      return void 0 !== e.default;
    }
    function l(e) {
      return void 0 === e
        ? e
        : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
            ? parseInt(e, 10)
            : NaN;
    }
    function u(
      {
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: c = !1,
        preload: d = !1,
        loading: g,
        className: f,
        quality: p,
        width: m,
        height: h,
        fill: y = !1,
        style: b,
        overrideSrc: w,
        onLoad: v,
        onLoadingComplete: O,
        placeholder: S = "empty",
        blurDataURL: P,
        fetchPriority: E,
        decoding: j = "async",
        layout: _,
        objectFit: C,
        objectPosition: L,
        lazyBoundary: x,
        lazyRoot: k,
        ...T
      },
      N
    ) {
      var I;
      let A,
        M,
        R,
        { imgConf: D, showAltText: z, blurComplete: $, defaultLoader: F } = N,
        B = D || s.imageConfigDefault;
      if ("allSizes" in B) A = B;
      else {
        let e = [...B.deviceSizes, ...B.imageSizes].sort((e, t) => e - t),
          t = B.deviceSizes.sort((e, t) => e - t),
          r = B.qualities?.sort((e, t) => e - t);
        A = { ...B, allSizes: e, deviceSizes: t, qualities: r };
      }
      if (void 0 === F)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 }
        );
      let U = T.loader || F;
      (delete T.loader, delete T.srcSet);
      let W = "__next_img_default" in U;
      if (W) {
        if ("custom" === A.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 }
          );
      } else {
        let e = U;
        U = (t) => {
          let { config: r, ...n } = t;
          return e(n);
        };
      }
      if (_) {
        "fill" === _ && (y = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[_];
        e && (b = { ...b, ...e });
        let r = { responsive: "100vw", fill: "100vw" }[_];
        r && !t && (t = r);
      }
      let V = "",
        G = l(m),
        K = l(h);
      if ((I = e) && "object" == typeof I && (a(I) || void 0 !== I.src)) {
        let t = a(e) ? e.default : e;
        if (!t.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 }
          );
        if (!t.height || !t.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 }
          );
        if (((M = t.blurWidth), (R = t.blurHeight), (P = P || t.blurDataURL), (V = t.src), !y))
          if (G || K) {
            if (G && !K) {
              let e = G / t.width;
              K = Math.round(t.height * e);
            } else if (!G && K) {
              let e = K / t.height;
              G = Math.round(t.width * e);
            }
          } else ((G = t.width), (K = t.height));
      }
      let H = !c && !d && ("lazy" === g || void 0 === g);
      ((!(e = "string" == typeof e ? e : V) || e.startsWith("data:") || e.startsWith("blob:")) &&
        ((r = !0), (H = !1)),
        A.unoptimized && (r = !0),
        W && !A.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0));
      let q = l(p),
        J = Object.assign(
          y
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: C,
                objectPosition: L,
              }
            : {},
          z ? {} : { color: "transparent" },
          b
        ),
        Y =
          $ || "empty" === S
            ? null
            : "blur" === S
              ? `url("data:image/svg+xml;charset=utf-8,${(0, i.getImageBlurSvg)({ widthInt: G, heightInt: K, blurWidth: M, blurHeight: R, blurDataURL: P || "", objectFit: J.objectFit })}")`
              : `url("${S}")`,
        Z = o.includes(J.objectFit)
          ? "fill" === J.objectFit
            ? "100% 100%"
            : "cover"
          : J.objectFit,
        X = Y
          ? {
              backgroundSize: Z,
              backgroundPosition: J.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: Y,
            }
          : {},
        Q = (function ({
          config: e,
          src: t,
          unoptimized: r,
          width: i,
          quality: s,
          sizes: o,
          loader: a,
        }) {
          if (r) {
            if (t.startsWith("/") && !t.startsWith("//")) {
              let e = (0, n.getDeploymentId)();
              if (e) {
                let r = t.indexOf("?");
                if (-1 !== r) {
                  let n = new URLSearchParams(t.slice(r + 1));
                  n.get("dpl") || (n.append("dpl", e), (t = t.slice(0, r) + "?" + n.toString()));
                } else t += `?dpl=${e}`;
              }
            }
            return { src: t, srcSet: void 0, sizes: void 0 };
          }
          let { widths: l, kind: u } = (function ({ deviceSizes: e, allSizes: t }, r, n) {
              if (n) {
                let r = /(^|\s)(1?\d?\d)vw/g,
                  i = [];
                for (let e; (e = r.exec(n)); ) i.push(parseInt(e[2]));
                if (i.length) {
                  let r = 0.01 * Math.min(...i);
                  return { widths: t.filter((t) => t >= e[0] * r), kind: "w" };
                }
                return { widths: t, kind: "w" };
              }
              return "number" != typeof r
                ? { widths: e, kind: "w" }
                : {
                    widths: [
                      ...new Set([r, 2 * r].map((e) => t.find((t) => t >= e) || t[t.length - 1])),
                    ],
                    kind: "x",
                  };
            })(e, i, o),
            c = l.length - 1;
          return {
            sizes: o || "w" !== u ? o : "100vw",
            srcSet: l
              .map(
                (r, n) =>
                  `${a({ config: e, src: t, quality: s, width: r })} ${"w" === u ? r : n + 1}${u}`
              )
              .join(", "),
            src: a({ config: e, src: t, quality: s, width: l[c] }),
          };
        })({ config: A, src: e, unoptimized: r, width: G, quality: q, sizes: t, loader: U }),
        ee = H ? "lazy" : g;
      return {
        props: {
          ...T,
          loading: ee,
          fetchPriority: E,
          width: G,
          height: K,
          decoding: j,
          className: f,
          style: { ...J, ...X },
          sizes: Q.sizes,
          srcSet: Q.srcSet,
          src: w || Q.src,
        },
        meta: { unoptimized: r, preload: d || c, placeholder: S, fill: y },
      };
    }
  },
  898879,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let n = e.r(271645),
      i = "u" < typeof window,
      s = i ? () => {} : n.useLayoutEffect,
      o = i ? () => {} : n.useEffect;
    function a(e) {
      let { headManager: t, reduceComponentsToState: r } = e;
      function a() {
        if (t && t.mountedInstances) {
          let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
          t.updateHead(r(e));
        }
      }
      return (
        i && (t?.mountedInstances?.add(e.children), a()),
        s(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          )
        ),
        s(
          () => (
            t && (t._pendingUpdate = a),
            () => {
              t && (t._pendingUpdate = a);
            }
          )
        ),
        o(
          () => (
            t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          )
        ),
        null
      );
    }
  },
  325633,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return m;
      },
      defaultHead: function () {
        return d;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let s = e.r(555682),
      o = e.r(190809),
      a = e.r(843476),
      l = o._(e.r(271645)),
      u = s._(e.r(898879)),
      c = e.r(742732);
    function d() {
      return [
        (0, a.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, a.jsx)("meta", { name: "viewport", content: "width=device-width" }, "viewport"),
      ];
    }
    function g(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === l.default.Fragment
          ? e.concat(
              l.default.Children.toArray(t.props.children).reduce(
                (e, t) => ("string" == typeof t || "number" == typeof t ? e : e.concat(t)),
                []
              )
            )
          : e.concat(t);
    }
    e.r(233525);
    let f = ["name", "httpEquiv", "charSet", "itemProp"];
    function p(e) {
      let t, r, n, i;
      return e
        .reduce(g, [])
        .reverse()
        .concat(d().reverse())
        .filter(
          ((t = new Set()),
          (r = new Set()),
          (n = new Set()),
          (i = {}),
          (e) => {
            let s = !0,
              o = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              o = !0;
              let r = e.key.slice(e.key.indexOf("$") + 1);
              t.has(r) ? (s = !1) : t.add(r);
            }
            switch (e.type) {
              case "title":
              case "base":
                r.has(e.type) ? (s = !1) : r.add(e.type);
                break;
              case "meta":
                for (let t = 0, r = f.length; t < r; t++) {
                  let r = f[t];
                  if (e.props.hasOwnProperty(r))
                    if ("charSet" === r) n.has(r) ? (s = !1) : n.add(r);
                    else {
                      let t = e.props[r],
                        n = i[r] || new Set();
                      ("name" !== r || !o) && n.has(t) ? (s = !1) : (n.add(t), (i[r] = n));
                    }
                }
            }
            return s;
          })
        )
        .reverse()
        .map((e, t) => {
          let r = e.key || t;
          return l.default.cloneElement(e, { key: r });
        });
    }
    let m = function ({ children: e }) {
      let t = (0, l.useContext)(c.HeadManagerContext);
      return (0, a.jsx)(u.default, { reduceComponentsToState: p, headManager: t, children: e });
    };
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  918556,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    let n = e.r(555682)._(e.r(271645)),
      i = e.r(987690),
      s = n.default.createContext(i.imageConfigDefault);
  },
  670965,
  (e, t, r) => {
    "use strict";
    function n(e, t) {
      let r = e || 75;
      return t?.qualities?.length
        ? t.qualities.reduce((e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e), t.qualities[0])
        : r;
    }
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
  },
  1948,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let n = e.r(670965),
      i = e.r(543369);
    function s({ config: e, src: t, width: r, quality: o }) {
      let a = (0, i.getDeploymentId)();
      if (t.startsWith("/") && !t.startsWith("//")) {
        let e = t.indexOf("?");
        if (-1 !== e) {
          let r = new URLSearchParams(t.slice(e + 1)),
            n = r.get("dpl");
          if (n) {
            ((a = n), r.delete("dpl"));
            let i = r.toString();
            t = t.slice(0, e) + (i ? "?" + i : "");
          }
        }
      }
      if (
        t.startsWith("/") &&
        t.includes("?") &&
        e.localPatterns?.length === 1 &&
        "**" === e.localPatterns[0].pathname &&
        "" === e.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 }
        );
      let l = (0, n.findClosestQuality)(o, e);
      return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${l}${t.startsWith("/") && a ? `&dpl=${a}` : ""}`;
    }
    s.__next_img_default = !0;
    let o = s;
  },
  605500,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function () {
          return v;
        },
      }));
    let n = e.r(555682),
      i = e.r(190809),
      s = e.r(843476),
      o = i._(e.r(271645)),
      a = n._(e.r(174080)),
      l = n._(e.r(325633)),
      u = e.r(908927),
      c = e.r(987690),
      d = e.r(918556);
    e.r(233525);
    let g = e.r(65856),
      f = n._(e.r(1948)),
      p = e.r(818581),
      m = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !0,
      };
    function h(e, t, r, n, i, s, o) {
      let a = e?.src;
      e &&
        e["data-loaded-src"] !== a &&
        ((e["data-loaded-src"] = a),
        ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (("empty" !== t && i(!0), r?.current)) {
                let t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let n = !1,
                  i = !1;
                r.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => n,
                  isPropagationStopped: () => i,
                  persist: () => {},
                  preventDefault: () => {
                    ((n = !0), t.preventDefault());
                  },
                  stopPropagation: () => {
                    ((i = !0), t.stopPropagation());
                  },
                });
              }
              n?.current && n.current(e);
            }
          }));
    }
    function y(e) {
      return o.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let b = (0, o.forwardRef)(
      (
        {
          src: e,
          srcSet: t,
          sizes: r,
          height: n,
          width: i,
          decoding: a,
          className: l,
          style: u,
          fetchPriority: c,
          placeholder: d,
          loading: g,
          unoptimized: f,
          fill: m,
          onLoadRef: b,
          onLoadingCompleteRef: w,
          setBlurComplete: v,
          setShowAltText: O,
          sizesInput: S,
          onLoad: P,
          onError: E,
          ...j
        },
        _
      ) => {
        let C = (0, o.useCallback)(
            (e) => {
              e && (E && (e.src = e.src), e.complete && h(e, d, b, w, v, f, S));
            },
            [e, d, b, w, v, E, f, S]
          ),
          L = (0, p.useMergedRef)(_, C);
        return (0, s.jsx)("img", {
          ...j,
          ...y(c),
          loading: g,
          width: i,
          height: n,
          decoding: a,
          "data-nimg": m ? "fill" : "1",
          className: l,
          style: u,
          sizes: r,
          srcSet: t,
          src: e,
          ref: L,
          onLoad: (e) => {
            h(e.currentTarget, d, b, w, v, f, S);
          },
          onError: (e) => {
            (O(!0), "empty" !== d && v(!0), E && E(e));
          },
        });
      }
    );
    function w({ isAppRouter: e, imgAttributes: t }) {
      let r = {
        as: "image",
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...y(t.fetchPriority),
      };
      return e && a.default.preload
        ? (a.default.preload(t.src, r), null)
        : (0, s.jsx)(l.default, {
            children: (0, s.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...r },
              "__nimg-" + t.src + t.srcSet + t.sizes
            ),
          });
    }
    let v = (0, o.forwardRef)((e, t) => {
      let r = (0, o.useContext)(g.RouterContext),
        n = (0, o.useContext)(d.ImageConfigContext),
        i = (0, o.useMemo)(() => {
          let e = m || n || c.imageConfigDefault,
            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
            r = e.deviceSizes.sort((e, t) => e - t),
            i = e.qualities?.sort((e, t) => e - t);
          return {
            ...e,
            allSizes: t,
            deviceSizes: r,
            qualities: i,
            localPatterns: "u" < typeof window ? n?.localPatterns : e.localPatterns,
          };
        }, [n]),
        { onLoad: a, onLoadingComplete: l } = e,
        p = (0, o.useRef)(a);
      (0, o.useEffect)(() => {
        p.current = a;
      }, [a]);
      let h = (0, o.useRef)(l);
      (0, o.useEffect)(() => {
        h.current = l;
      }, [l]);
      let [y, v] = (0, o.useState)(!1),
        [O, S] = (0, o.useState)(!1),
        { props: P, meta: E } = (0, u.getImgProps)(e, {
          defaultLoader: f.default,
          imgConf: i,
          blurComplete: y,
          showAltText: O,
        });
      return (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)(b, {
            ...P,
            unoptimized: E.unoptimized,
            placeholder: E.placeholder,
            fill: E.fill,
            onLoadRef: p,
            onLoadingCompleteRef: h,
            setBlurComplete: v,
            setShowAltText: S,
            sizesInput: e.sizes,
            ref: t,
          }),
          E.preload ? (0, s.jsx)(w, { isAppRouter: !r, imgAttributes: P }) : null,
        ],
      });
    });
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  794909,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return c;
      },
      getImageProps: function () {
        return u;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let s = e.r(555682),
      o = e.r(908927),
      a = e.r(605500),
      l = s._(e.r(1948));
    function u(e) {
      let { props: t } = (0, o.getImgProps)(e, {
        defaultLoader: l.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        },
      });
      for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
      return { props: t };
    }
    let c = a.Image;
  },
  657688,
  (e, t, r) => {
    t.exports = e.r(794909);
  },
  923842,
  (e) => {
    "use strict";
    var t = e.i(282802),
      r = e.i(821410);
    let n = r.DEFAULT_LIGHT_BRAND_COLOR,
      i = r.DEFAULT_DARK_BRAND_COLOR;
    function s(e) {
      return /^#([0-9A-Fa-f]{3}){1,2}$/.test(e);
    }
    let o = (e, t) =>
      /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(e.replace("##", "#")) ? e : t;
    function a(e) {
      let t = e.replace("##", "#"),
        r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
      if (!r) throw Error("Invalid Hex colour");
      let [, n, i, s] = r;
      return { r: parseInt(n, 16), g: parseInt(i, 16), b: parseInt(s, 16) };
    }
    function l(e, t, r) {
      let n = (e) => `0${e.toString(16)}`.slice(-2);
      return `#${n(e)}${n(t)}${n(r)}`;
    }
    function u(e, t) {
      return e
        ? (3 === (e = e.replace("#", "")).length &&
            (e = e
              .split("")
              .map(function (e) {
                return e + e;
              })
              .join("")),
          e)
        : t
          ? i
          : n;
    }
    let c = (e) => {
      let t = { 500: `#${e}`.replace("##", "#") },
        r = {
          50: 0.95,
          100: 0.9,
          200: 0.75,
          300: 0.6,
          400: 0.3,
          600: 0.9,
          700: 0.75,
          800: 0.6,
          900: 0.49,
        };
      return (
        [50, 100, 200, 300, 400].forEach((n) => {
          var i;
          let s, o;
          t[n] =
            ((i = r[n]),
            (o = Math.round((s = a(`#${e}`)).r + (255 - s.r) * i)),
            l(o, Math.round(s.g + (255 - s.g) * i), Math.round(s.b + (255 - s.b) * i)));
        }),
        [600, 700, 800, 900].forEach((n) => {
          var i;
          let s, o;
          t[n] =
            ((i = r[n]),
            (o = Math.round((s = a(e)).r * i)),
            l(o, Math.round(s.g * i), Math.round(s.b * i)));
        }),
        t
      );
    };
    function d(e) {
      let { r: t, g: r, b: n } = a(e);
      return (0.2126 * t + 0.7152 * r + 0.0722 * n) / 255 < 0.5 ? "#FFFFFF" : "#000000";
    }
    e.s([
      "checkWCAGContrastColor",
      0,
      function (e, t) {
        let r = a(e),
          n = a(t),
          i = (0.2126 * r.r + 0.7152 * r.g + 0.0722 * r.b) / 255,
          s = (0.2126 * n.r + 0.7152 * n.g + 0.0722 * n.b) / 255;
        return (Math.max(i, s) + 0.05) / (Math.min(s, i) + 0.05) >= 4.5;
      },
      "default",
      0,
      ({ lightVal: e = n, darkVal: r = i }) => {
        ((e = u((e = (0, t.useEmbedBrandColorsValue)().brandColor || e), !1)), (r = u(r, !0)));
        let s = c(o(e, n)),
          a = c(o(r, i));
        return {
          light: {
            "cal-brand": s["500"],
            "cal-brand-emphasis": s["400"],
            "cal-brand-subtle": s["200"],
            "cal-brand-text": d(s["500"]),
            "cal-brand-accent": d(s["500"]),
          },
          dark: {
            "cal-brand": a["500"],
            "cal-brand-emphasis": a["600"],
            "cal-brand-subtle": a["800"],
            "cal-brand-text": d(a["500"]),
            "cal-brand-accent": d(a["500"]),
          },
        };
      },
      "fallBackHex",
      0,
      function (e, t) {
        return e && s(e) ? e : t ? i : n;
      },
      "isValidHexCode",
      0,
      s,
    ]);
  },
  327255,
  (e) => {
    "use strict";
    var t = e.i(821410),
      r = e.i(271645);
    let n = ["primary", "ring", "primary-foreground"],
      i = new Set([
        t.DEFAULT_LIGHT_BRAND_COLOR.toLowerCase(),
        t.DEFAULT_DARK_BRAND_COLOR.toLowerCase(),
      ]),
      s = r.useEffect;
    s = r.useLayoutEffect;
    let o = (e) => {
        n.forEach((t) => {
          e.removeProperty(`--${t}`);
        });
      },
      a = (e, t) => {
        o(e);
        let r = t.some(([e, t]) => "cal-brand" === e && !i.has(t.toLowerCase()));
        t.forEach(([t, n]) => {
          (e.setProperty(`--${t}`, n),
            r &&
              "cal-brand" === t &&
              (e.setProperty("--primary", n),
              e.setProperty("--ring", `color-mix(in srgb, ${n} 80%, transparent)`)),
            r && "cal-brand-text" === t && e.setProperty("--primary-foreground", n));
        });
      };
    e.s([
      "useCalcomTheme",
      0,
      (e) => {
        s(() => {
          Object.entries(e).forEach(([e, t]) => {
            if (!t) return;
            if ("root" === e) {
              let e = document.documentElement;
              return Object.keys(t).length ? void a(e.style, Object.entries(t)) : void o(e.style);
            }
            let r = document.querySelectorAll(`.${e}`),
              n = Object.entries(t);
            r.forEach((e) => {
              n.length ? a(e.style, n) : o(e.style);
            });
          });
        }, [e]);
      },
    ]);
  },
]);
