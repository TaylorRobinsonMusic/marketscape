(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  651855,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(255889),
      n = e.i(857739);
    e.s([
      "EmptyScreen",
      0,
      function ({
        Icon: e,
        customIcon: s,
        avatar: i,
        headline: o,
        description: l,
        buttonText: a,
        buttonOnClick: u,
        buttonRaw: c,
        border: d = !0,
        dashedBorder: h = !0,
        className: p,
        iconClassName: m,
        iconWrapperClassName: f,
        limitWidth: g = !0,
      }) {
        var v;
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsxs)("div", {
            "data-testid": "empty-screen",
            className: (0, r.default)(
              "flex w-full select-none flex-col items-center justify-center rounded-lg p-7 lg:p-20",
              d && "border-subtle border",
              h && "border-dashed",
              p
            ),
            children: [
              i
                ? (0, t.jsx)("div", {
                    className: "flex h-[72px] w-[72px] items-center justify-center rounded-full",
                    children: i,
                  })
                : null,
              e
                ? (0, t.jsx)("div", {
                    className: (0, r.default)(
                      "bg-emphasis flex h-[72px] w-[72px] items-center justify-center rounded-full ",
                      f
                    ),
                    children:
                      ((v = (0, r.default)(
                        "text-default inline-block h-10 w-10 stroke-[1.3px]",
                        m
                      )),
                      (0, t.jsx)(e, { className: v })),
                  })
                : null,
              s ? (0, t.jsx)(t.Fragment, { children: s }) : null,
              (0, t.jsxs)("div", {
                className: `flex ${g ? "max-w-[420px]" : ""}  flex-col items-center`,
                children: [
                  (0, t.jsx)("h2", {
                    className: (0, r.default)(
                      "font-heading text-emphasis text-center text-xl normal-nums",
                      e && "mt-6",
                      !l && "mb-8"
                    ),
                    children: o,
                  }),
                  l &&
                    (0, t.jsx)("div", {
                      className: "text-default mb-8 mt-3 text-center text-sm font-normal leading-6",
                      "data-testid": "empty-screen-description",
                      children: l,
                    }),
                  u && a && (0, t.jsx)(n.Button, { onClick: (e) => u(e), children: a }),
                  c,
                ],
              }),
            ],
          }),
        });
      },
    ]);
  },
  621918,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(476186),
      n = e.i(857739),
      s = e.i(651855),
      i = e.i(320937),
      o = e.i(217255),
      l = e.i(271645);
    let a = ({ children: e, as: a = "", ...u }) => {
      let c = (0, o.useSession)(),
        { t: d } = (0, r.useLocale)(),
        h = a || l.Fragment,
        p = c.data ? c.data.hasValidLicense : null;
      return (
        (0, l.useEffect)(() => {}, []),
        (0, t.jsx)(h, {
          ...u,
          children:
            null === p || p
              ? e
              : (0, t.jsx)(s.EmptyScreen, {
                  Icon: i.TriangleAlertIcon,
                  headline: d("enterprise_license"),
                  buttonRaw: (0, t.jsx)(n.Button, {
                    color: "secondary",
                    href: "https://go.cal.com/get-license",
                    children: d("contact_sales"),
                  }),
                  description: d("enterprise_license_sales"),
                }),
        })
      );
    };
    e.s([
      "default",
      0,
      a,
      "withLicenseRequired",
      0,
      (e) => (r) =>
        (0, t.jsx)("div", { children: (0, t.jsx)(a, { children: (0, t.jsx)(e, { ...r }) }) }),
    ]);
  },
  673610,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645);
    let n = (e) => {
      let t;
      if (!e || "string" != typeof e) return [e].filter(Boolean);
      if (!/<[a-z][\s\S]*>/i.test(e)) return [e];
      let s = e,
        i = {};
      if (
        ([
          { tag: "strong", component: "strong" },
          { tag: "b", component: "b" },
          { tag: "i", component: "i" },
          { tag: "em", component: "em" },
          { tag: "p", component: "p" },
          { tag: "br", component: "br", selfClosing: !0 },
          { tag: "div", component: "div" },
          { tag: "span", component: "span" },
          { tag: "ul", component: "ul" },
          { tag: "ol", component: "ol" },
          { tag: "li", component: "li" },
        ].forEach(({ tag: e, component: t, selfClosing: o }) => {
          if (o) {
            let n = RegExp(`<${e}\\s*\\/>`, "g");
            s = s.replace(n, (n) => {
              let s = `__HTML_${e}_${Math.random().toString(36).substring(2)}__`;
              return ((i[s] = (0, r.createElement)(t, { key: s })), s);
            });
          } else {
            let o = RegExp(`<${e}>(.*?)<\\/${e}>`, "gs");
            s = s.replace(o, (s, o) => {
              let l = `__HTML_${e}_${Math.random().toString(36).substring(2)}__`,
                a = n(o);
              return ((i[l] = (0, r.createElement)(t, { key: l }, ...(a.length > 1 ? a : [o]))), l);
            });
          }
        }),
        0 === Object.keys(i).length)
      )
        return [s];
      let o = [],
        l = 0,
        a = /__HTML_[^_]+_[a-z0-9]+__/g;
      for (; null !== (t = a.exec(s)); ) {
        let [e] = t,
          r = t.index;
        (r > l && o.push(s.substring(l, r)), i[e] && o.push(i[e]), (l = r + e.length));
      }
      return (l < s.length && o.push(s.substring(l)), o.length > 0 ? o : [s]);
    };
    e.s([
      "default",
      0,
      ({ i18nKey: e, components: s = [], t: i, values: o = {}, children: l, parent: a }) => {
        var u, c;
        let d,
          h,
          p,
          m,
          f,
          g = i(e, { ...o, interpolation: { escapeValue: !1 } });
        return !g && l
          ? (0, t.jsx)(t.Fragment, { children: l })
          : g
            ? ((f =
                Array.isArray(s) && s.length > 0
                  ? ((u = g),
                    (c = s),
                    (d = []),
                    (h = ""),
                    (p = (e, t) => {
                      let r = 1,
                        n = "";
                      for (let s = 0; s < e.length; s++) {
                        if (
                          "<" === e[s] &&
                          e.substring(s + 1, s + 1 + t.length) === t &&
                          ">" === e[s + 1 + t.length]
                        ) {
                          (r++, (n += e.substring(s, s + 2 + t.length)), (s += 1 + t.length));
                          continue;
                        }
                        if (
                          "<" === e[s] &&
                          e.substring(s + 1, s + 2 + t.length) === `/${t}` &&
                          ">" === e[s + 2 + t.length]
                        ) {
                          if (0 == --r) return n;
                          ((n += e.substring(s, s + 3 + t.length)), (s += 2 + t.length));
                          continue;
                        }
                        n += e[s];
                      }
                      return null;
                    }),
                    ((e) => {
                      for (let t = 0; t < e.length; t++) {
                        if ("<" === e[t] && /\d/.test(e[t + 1])) {
                          let s = "",
                            i = t + 1;
                          for (; i < e.length && /\d/.test(e[i]); ) ((s += e[i]), i++);
                          if (i < e.length && ">" === e[i]) {
                            h && (d.push(...n(h)), (h = ""));
                            let o = `</${s}>`,
                              l = p(e.substring(i + 1), s);
                            if (null !== l) {
                              let e = parseInt(s, 10);
                              if (e < c.length) {
                                let t = c[e];
                                (0, r.isValidElement)(t)
                                  ? d.push(
                                      (0, r.cloneElement)(
                                        t,
                                        { ...(t.props || {}), key: t.key || `comp-${e}` },
                                        ...n(l)
                                      )
                                    )
                                  : d.push(...n(l));
                              } else d.push(...n(l));
                              t = i + l.length + o.length;
                              continue;
                            }
                          }
                        }
                        h += e[t];
                      }
                      h && d.push(...n(h));
                    })(u),
                    d.length > 0 ? d : [u])
                  : null !== (m = s) &&
                      "object" == typeof m &&
                      !Array.isArray(m) &&
                      Object.keys(s).length > 0
                    ? ((e, t) => {
                        let s,
                          i = e,
                          o = {};
                        (Object.keys(t).forEach((e) => {
                          let n = RegExp(`{{\\s*${e}\\s*}}`, "g");
                          i = i.replace(n, (n) => {
                            let s = `__INTERP_${e}_${Math.random().toString(36).substring(2)}__`;
                            return (
                              (0, r.isValidElement)(t[e]) &&
                                (o[s] = (0, r.cloneElement)(t[e], {
                                  ...(t[e].props || {}),
                                  key: t[e].key || `interp-${e}`,
                                })),
                              s
                            );
                          });
                        }),
                          Object.keys(t).forEach((e) => {
                            let s = RegExp(`<${e}>(.*?)<\\/${e}>`, "gs");
                            i = i.replace(s, (s, i) => {
                              let l = `__TAG_${e}_${Math.random().toString(36).substring(2)}__`;
                              if ((0, r.isValidElement)(t[e])) {
                                let s = n(i);
                                o[l] = (0, r.cloneElement)(
                                  t[e],
                                  { ...(t[e].props || {}), key: t[e].key || `tag-${e}` },
                                  ...(s.length > 1 ? s : [i])
                                );
                              }
                              return l;
                            });
                          }));
                        let l = [],
                          a = 0,
                          u = /__(?:INTERP|TAG)_[^_]+_[a-z0-9]+__/g;
                        for (; null !== (s = u.exec(i)); ) {
                          let [e] = s,
                            t = s.index;
                          if (t > a) {
                            let e = i.substring(a, t);
                            l.push(...n(e));
                          }
                          (o[e] && l.push(o[e]), (a = t + e.length));
                        }
                        if (a < i.length) {
                          let e = i.substring(a);
                          l.push(...n(e));
                        }
                        return l.length > 0 ? l : [i];
                      })(g, s)
                    : n(g)),
              a)
              ? (0, t.jsx)(a, { children: f })
              : (0, t.jsx)(t.Fragment, { children: f })
            : (0, t.jsx)(t.Fragment, {});
      },
    ]);
  },
  117032,
  (e) => {
    "use strict";
    var t = e.i(271645);
    let r = (0, t.createContext)(null);
    e.s([
      "FeatureProvider",
      0,
      function (e) {
        return (0, t.createElement)(r.Provider, { value: e.value }, e.children);
      },
      "useFlagMap",
      0,
      function () {
        let e = (0, t.useContext)(r);
        if (null === e) throw Error("Error: useFlagMap was used outside of FeatureProvider.");
        return e;
      },
    ]);
  },
  270236,
  (e) => {
    "use strict";
    var t = e.i(271645);
    let r = (0, t.createContext)(null);
    e.s([
      "OrgBrandingProvider",
      0,
      function (e) {
        return (0, t.createElement)(r.Provider, { value: e.value }, e.children);
      },
      "useOrgBranding",
      0,
      function () {
        let e = (0, t.useContext)(r);
        if (!e) throw Error("Error: useOrgBranding was used outside of OrgBrandingProvider.");
        return e.orgBrand;
      },
    ]);
  },
  784150,
  924540,
  (e) => {
    "use strict";
    e.i(247167);
    var t = e.i(271645);
    let r = (function () {
      try {
        let e = "nuqs-localStorage-test";
        if ("u" < typeof localStorage) return !1;
        localStorage.setItem(e, e);
        let t = localStorage.getItem(e) === e;
        return (
          localStorage.removeItem(e),
          t && (localStorage.getItem("debug") || "").includes("nuqs")
        );
      } catch {
        return !1;
      }
    })();
    function n(e, ...t) {
      if (!r) return;
      let s = (function (e, ...t) {
        return e.replace(/%[sfdO]/g, (e) => {
          let r = t.shift();
          return "%O" === e && r ? JSON.stringify(r).replace(/"([^"]+)":/g, "$1:") : String(r);
        });
      })(e, ...t);
      performance.mark(s);
      try {
        console.log(e, ...t);
      } catch {
        console.log(s);
      }
    }
    let s = {
      303: "Multiple adapter contexts detected. This might happen in monorepos.",
      404: "nuqs requires an adapter to work with your framework.",
      409: "Multiple versions of the library are loaded. This may lead to unexpected behavior. Currently using `%s`, but `%s` (via the %s adapter) was about to load on top.",
      414: "Max safe URL length exceeded. Some browsers may not be able to accept this URL. Consider limiting the amount of state stored in the URL.",
      422: "Invalid options combination: `limitUrlUpdates: debounce` should be used in SSR scenarios, with `shallow: false`",
      429: "URL update rate-limited by the browser. Consider increasing `throttleMs` for key(s) `%s`. %O",
      500: "Empty search params cache. Search params can't be accessed in Layouts.",
      501: "Search params cache already populated. Have you called `parse` twice?",
    };
    function i(e) {
      return `[nuqs] ${s[e]}
  See https://nuqs.dev/NUQS-${e}`;
    }
    let o = (0, t.createContext)({
      useAdapter() {
        throw Error(i(404));
      },
    });
    function l(e) {
      return { method: "throttle", timeMs: e };
    }
    ((o.displayName = "NuqsAdapterContext"),
      r &&
        "u" > typeof window &&
        (window.__NuqsAdapterContext && window.__NuqsAdapterContext !== o && console.error(i(303)),
        (window.__NuqsAdapterContext = o)),
      e.s(
        [
          "a",
          0,
          () => (0, t.useContext)(o).processUrlSearchParams,
          "c",
          0,
          n,
          "i",
          0,
          () => (0, t.useContext)(o).defaultOptions,
          "l",
          0,
          function (e, ...t) {
            r && console.warn(e, ...t);
          },
          "n",
          0,
          function (e) {
            return ({ children: r, defaultOptions: n, processUrlSearchParams: s, ...i }) =>
              (0, t.createElement)(
                o.Provider,
                { ...i, value: { useAdapter: e, defaultOptions: n, processUrlSearchParams: s } },
                r
              );
          },
          "o",
          0,
          function (e) {
            if (0 === e.size) return "";
            let t = [];
            for (let [r, n] of e.entries()) {
              let e = r
                .replace(/#/g, "%23")
                .replace(/&/g, "%26")
                .replace(/\+/g, "%2B")
                .replace(/=/g, "%3D")
                .replace(/\?/g, "%3F");
              t.push(
                `${e}=${n
                  .replace(/%/g, "%25")
                  .replace(/\+/g, "%2B")
                  .replace(/ /g, "+")
                  .replace(/#/g, "%23")
                  .replace(/&/g, "%26")
                  .replace(/"/g, "%22")
                  .replace(/'/g, "%27")
                  .replace(/`/g, "%60")
                  .replace(/</g, "%3C")
                  .replace(/>/g, "%3E")
                  .replace(/[\x00-\x1F]/g, (e) => encodeURIComponent(e))}`
              );
            }
            return "?" + t.join("&");
          },
          "r",
          0,
          function (e) {
            let r = (0, t.useContext)(o);
            if (!("useAdapter" in r)) throw Error(i(404));
            return r.useAdapter(e);
          },
          "s",
          0,
          i,
        ],
        924540
      ));
    let a = l(
      (function () {
        if ("u" < typeof window || !window.GestureEvent) return 50;
        try {
          let e = navigator.userAgent?.match(/version\/([\d\.]+) safari/i);
          return parseFloat(e[1]) >= 17 ? 120 : 320;
        } catch {
          return 320;
        }
      })()
    );
    function u(e, t, r) {
      if ("string" == typeof e) r.set(t, e);
      else {
        for (let n of (r.delete(t), e)) r.append(t, n);
        r.has(t) || r.set(t, "");
      }
      return r;
    }
    function c() {
      let e = new Map();
      return {
        on(t, r) {
          let n = e.get(t) || [];
          return (n.push(r), e.set(t, n), () => this.off(t, r));
        },
        off(t, r) {
          let n = e.get(t);
          n &&
            e.set(
              t,
              n.filter((e) => e !== r)
            );
        },
        emit(t, r) {
          e.get(t)?.forEach((e) => e(r));
        },
      };
    }
    function d(e, t, r) {
      let n = setTimeout(function () {
        (e(), r.removeEventListener("abort", s));
      }, t);
      function s() {
        (clearTimeout(n), r.removeEventListener("abort", s));
      }
      r.addEventListener("abort", s);
    }
    function h() {
      let e = Promise;
      if (Promise.hasOwnProperty("withResolvers")) return Promise.withResolvers();
      let t = () => {},
        r = () => {};
      return {
        promise: new e((e, n) => {
          ((t = e), (r = n));
        }),
        resolve: t,
        reject: r,
      };
    }
    function p() {
      return new URLSearchParams(location.search);
    }
    var m = class {
      updateMap = new Map();
      options = { history: "replace", scroll: !1, shallow: !0 };
      timeMs = a.timeMs;
      transitions = new Set();
      resolvers = null;
      controller = null;
      lastFlushedAt = 0;
      resetQueueOnNextPush = !1;
      push({ key: e, query: t, options: r }, s = a.timeMs) {
        (this.resetQueueOnNextPush && (this.reset(), (this.resetQueueOnNextPush = !1)),
          n("[nuqs gtq] Enqueueing %s=%s %O", e, t, r),
          this.updateMap.set(e, t),
          "push" === r.history && (this.options.history = "push"),
          r.scroll && (this.options.scroll = !0),
          !1 === r.shallow && (this.options.shallow = !1),
          r.startTransition && this.transitions.add(r.startTransition),
          (!Number.isFinite(this.timeMs) || s > this.timeMs) && (this.timeMs = s));
      }
      getQueuedQuery(e) {
        return this.updateMap.get(e);
      }
      getPendingPromise({ getSearchParamsSnapshot: e = p }) {
        return this.resolvers?.promise ?? Promise.resolve(e());
      }
      flush({ getSearchParamsSnapshot: e = p, rateLimitFactor: t = 1, ...r }, s) {
        if (((this.controller ??= new AbortController()), !Number.isFinite(this.timeMs)))
          return (n("[nuqs gtq] Skipping flush due to throttleMs=Infinity"), Promise.resolve(e()));
        if (this.resolvers) return this.resolvers.promise;
        this.resolvers = h();
        let i = () => {
            this.lastFlushedAt = performance.now();
            let [t, n] = this.applyPendingUpdates(
              {
                ...r,
                autoResetQueueOnUpdate: r.autoResetQueueOnUpdate ?? !0,
                getSearchParamsSnapshot: e,
              },
              s
            );
            (null === n
              ? (this.resolvers.resolve(t), (this.resetQueueOnNextPush = !0))
              : this.resolvers.reject(t),
              (this.resolvers = null));
          },
          o = () => {
            let e = performance.now() - this.lastFlushedAt,
              r = this.timeMs,
              s = t * Math.max(0, r - e);
            (n("[nuqs gtq] Scheduling flush in %f ms. Throttled at %f ms (x%f)", s, r, t),
              0 === s ? i() : d(i, s, this.controller.signal));
          };
        return (d(o, 0, this.controller.signal), this.resolvers.promise);
      }
      abort() {
        return (
          this.controller?.abort(),
          (this.controller = new AbortController()),
          this.resolvers?.resolve(new URLSearchParams()),
          (this.resolvers = null),
          this.reset()
        );
      }
      reset() {
        let e = Array.from(this.updateMap.keys());
        return (
          n("[nuqs gtq] Resetting queue %s", JSON.stringify(Object.fromEntries(this.updateMap))),
          this.updateMap.clear(),
          this.transitions.clear(),
          (this.options = { history: "replace", scroll: !1, shallow: !0 }),
          (this.timeMs = a.timeMs),
          e
        );
      }
      applyPendingUpdates(e, t) {
        let { updateUrl: r, getSearchParamsSnapshot: s } = e,
          o = s();
        if (
          (n(
            "[nuqs gtq] Applying %d pending update(s) on top of %s",
            this.updateMap.size,
            o.toString()
          ),
          0 === this.updateMap.size)
        )
          return [o, null];
        let l = Array.from(this.updateMap.entries()),
          a = { ...this.options },
          c = Array.from(this.transitions);
        for (let [t, r] of (e.autoResetQueueOnUpdate && this.reset(),
        n("[nuqs gtq] Flushing queue %O with options %O", l, a),
        l))
          null === r ? o.delete(t) : (o = u(r, t, o));
        t && (o = t(o));
        try {
          return (
            !(function (e, t) {
              let r = t;
              for (let t = e.length - 1; t >= 0; t--) {
                let n = e[t];
                if (!n) continue;
                let s = r;
                r = () => n(s);
              }
              r();
            })(c, () => {
              r(o, a);
            }),
            [o, null]
          );
        } catch (e) {
          return (console.error(i(429), l.map(([e]) => e).join(), e), [o, e]);
        }
      }
    };
    let f = new m();
    var g = class {
      callback;
      resolvers = h();
      controller = new AbortController();
      queuedValue = void 0;
      constructor(e) {
        this.callback = e;
      }
      abort() {
        (this.controller.abort(), (this.queuedValue = void 0));
      }
      push(e, t) {
        return (
          (this.queuedValue = e),
          this.controller.abort(),
          (this.controller = new AbortController()),
          d(
            () => {
              let t = this.resolvers;
              try {
                n("[nuqs dq] Flushing debounce queue", e);
                let r = this.callback(e);
                (n("[nuqs dq] Reset debounce queue %O", this.queuedValue),
                  (this.queuedValue = void 0),
                  (this.resolvers = h()),
                  r.then((e) => t.resolve(e)).catch((e) => t.reject(e)));
              } catch (e) {
                ((this.queuedValue = void 0), t.reject(e));
              }
            },
            t,
            this.controller.signal
          ),
          this.resolvers.promise
        );
      }
    };
    let v = new (class {
      throttleQueue;
      queues = new Map();
      queuedQuerySync = c();
      constructor(e = new m()) {
        this.throttleQueue = e;
      }
      useQueuedQueries(e) {
        var r, n;
        let s, i;
        return (
          (r = (e, t) => this.queuedQuerySync.on(e, t)),
          (n = (e) => this.getQueuedQuery(e)),
          (s = (0, t.useCallback)(() => {
            let t = Object.fromEntries(e.map((e) => [e, n(e)]));
            return [JSON.stringify(t), t];
          }, [e.join(","), n])),
          null === (i = (0, t.useRef)(null)).current && (i.current = s()),
          (0, t.useSyncExternalStore)(
            (0, t.useCallback)(
              (t) => {
                let n = e.map((e) => r(e, t));
                return () => n.forEach((e) => e());
              },
              [e.join(","), r]
            ),
            () => {
              let [e, t] = s();
              return i.current[0] === e ? i.current[1] : ((i.current = [e, t]), t);
            },
            () => i.current[1]
          )
        );
      }
      push(e, t, r) {
        if (!Number.isFinite(t)) return Promise.resolve((r.getSearchParamsSnapshot ?? p)());
        let s = e.key;
        if (!this.queues.has(s)) {
          n("[nuqs dqc] Creating debounce queue for `%s`", s);
          let e = new g(
            (e) => (
              this.throttleQueue.push(e),
              this.throttleQueue.flush(r).finally(() => {
                (this.queues.get(e.key)?.queuedValue === void 0 &&
                  (n("[nuqs dqc] Cleaning up empty queue for `%s`", e.key),
                  this.queues.delete(e.key)),
                  this.queuedQuerySync.emit(e.key));
              })
            )
          );
          this.queues.set(s, e);
        }
        n("[nuqs dqc] Enqueueing debounce update %O", e);
        let i = this.queues.get(s).push(e, t);
        return (this.queuedQuerySync.emit(s), i);
      }
      abort(e) {
        let t = this.queues.get(e);
        return t
          ? (n("[nuqs dqc] Aborting debounce queue %s=%s", e, t.queuedValue?.query),
            this.queues.delete(e),
            t.abort(),
            this.queuedQuerySync.emit(e),
            (e) => (e.then(t.resolvers.resolve, t.resolvers.reject), e))
          : (e) => e;
      }
      abortAll() {
        for (let [e, t] of this.queues.entries())
          (n("[nuqs dqc] Aborting debounce queue %s=%s", e, t.queuedValue?.query),
            t.abort(),
            t.resolvers.resolve(new URLSearchParams()),
            this.queuedQuerySync.emit(e));
        this.queues.clear();
      }
      getQueuedQuery(e) {
        let t = this.queues.get(e)?.queuedValue?.query;
        return void 0 !== t ? t : this.throttleQueue.getQueuedQuery(e);
      }
    })(f);
    e.s(
      [
        "a",
        0,
        u,
        "c",
        0,
        l,
        "i",
        0,
        function (e) {
          return null === e || (Array.isArray(e) && 0 === e.length);
        },
        "n",
        0,
        f,
        "o",
        0,
        function (e) {
          return { method: "debounce", timeMs: e };
        },
        "r",
        0,
        c,
        "s",
        0,
        a,
        "t",
        0,
        v,
      ],
      784150
    );
  },
  278587,
  (e) => {
    "use strict";
    var t = e.i(271645);
    let r = ["light", "dark"],
      n = "(prefers-color-scheme: dark)",
      s = "u" < typeof window,
      i = (0, t.createContext)(void 0),
      o = { setTheme: (e) => {}, themes: [] },
      l = ({
        forcedTheme: e,
        disableTransitionOnChange: s = !1,
        enableSystem: o = !0,
        enableColorScheme: l = !0,
        storageKey: h = "theme",
        themes: p = ["light", "dark"],
        defaultTheme: m = o ? "system" : "light",
        attribute: f = "data-theme",
        value: g,
        children: v,
        nonce: y,
      }) => {
        let [x, b] = (0, t.useState)(() => u(h, m)),
          [_, S] = (0, t.useState)(() => u(h)),
          E = g ? Object.values(g) : p,
          w = (0, t.useCallback)((e) => {
            let t = e;
            if (!t) return;
            "system" === e && o && (t = d());
            let n = g ? g[t] : t,
              i = s ? c() : null,
              a = document.documentElement;
            if (
              ("class" === f
                ? (a.classList.remove(...E), n && a.classList.add(n))
                : n
                  ? a.setAttribute(f, n)
                  : a.removeAttribute(f),
              l)
            ) {
              let e = r.includes(m) ? m : null,
                n = r.includes(t) ? t : e;
              a.style.colorScheme = n;
            }
            null == i || i();
          }, []),
          j = (0, t.useCallback)(
            (e) => {
              b(e);
              try {
                localStorage.setItem(h, e);
              } catch (e) {}
            },
            [e]
          ),
          T = (0, t.useCallback)(
            (t) => {
              (S(d(t)), "system" === x && o && !e && w("system"));
            },
            [x, e]
          );
        return (
          (0, t.useEffect)(() => {
            let e = window.matchMedia(n);
            return (e.addListener(T), T(e), () => e.removeListener(T));
          }, [T]),
          (0, t.useEffect)(() => {
            let e = (e) => {
              e.key === h && j(e.newValue || m);
            };
            return (
              window.addEventListener("storage", e),
              () => window.removeEventListener("storage", e)
            );
          }, [j]),
          (0, t.useEffect)(() => {
            w(null != e ? e : x);
          }, [e, x]),
          t.default.createElement(
            i.Provider,
            {
              value: {
                theme: x,
                setTheme: j,
                forcedTheme: e,
                resolvedTheme: "system" === x ? _ : x,
                themes: o ? [...p, "system"] : p,
                systemTheme: o ? _ : void 0,
              },
            },
            t.default.createElement(a, {
              forcedTheme: e,
              disableTransitionOnChange: s,
              enableSystem: o,
              enableColorScheme: l,
              storageKey: h,
              themes: p,
              defaultTheme: m,
              attribute: f,
              value: g,
              children: v,
              attrs: E,
              nonce: y,
            }),
            v
          )
        );
      },
      a = (0, t.memo)(
        ({
          forcedTheme: e,
          storageKey: s,
          attribute: i,
          enableSystem: o,
          enableColorScheme: l,
          defaultTheme: a,
          value: u,
          attrs: c,
          nonce: d,
        }) => {
          let h = "system" === a,
            p =
              "class" === i
                ? `var d=document.documentElement,c=d.classList;c.remove(${c.map((e) => `'${e}'`).join(",")});`
                : `var d=document.documentElement,n='${i}',s='setAttribute';`,
            m = l
              ? r.includes(a) && a
                ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`
                : "if(e==='light'||e==='dark')d.style.colorScheme=e"
              : "",
            f = (e, t = !1, n = !0) => {
              let s = u ? u[e] : e,
                o = t ? e + "|| ''" : `'${s}'`,
                a = "";
              return (
                l && n && !t && r.includes(e) && (a += `d.style.colorScheme = '${e}';`),
                "class" === i ? (a += t || s ? `c.add(${o})` : "null") : s && (a += `d[s](n,${o})`),
                a
              );
            },
            g = e
              ? `!function(){${p}${f(e)}}()`
              : o
                ? `!function(){try{${p}var e=localStorage.getItem('${s}');if('system'===e||(!e&&${h})){var t='${n}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${u ? `var x=${JSON.stringify(u)};` : ""}${f(u ? "x[e]" : "e", !0)}}${h ? "" : "else{" + f(a, !1, !1) + "}"}${m}}catch(e){}}()`
                : `!function(){try{${p}var e=localStorage.getItem('${s}');if(e){${u ? `var x=${JSON.stringify(u)};` : ""}${f(u ? "x[e]" : "e", !0)}}else{${f(a, !1, !1)};}${m}}catch(t){}}();`;
          return t.default.createElement("script", {
            nonce: d,
            dangerouslySetInnerHTML: { __html: g },
          });
        },
        () => !0
      ),
      u = (e, t) => {
        let r;
        if (!s) {
          try {
            r = localStorage.getItem(e) || void 0;
          } catch (e) {}
          return r || t;
        }
      },
      c = () => {
        let e = document.createElement("style");
        return (
          e.appendChild(
            document.createTextNode(
              "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
            )
          ),
          document.head.appendChild(e),
          () => {
            (window.getComputedStyle(document.body),
              setTimeout(() => {
                document.head.removeChild(e);
              }, 1));
          }
        );
      },
      d = (e) => (e || (e = window.matchMedia(n)), e.matches ? "dark" : "light");
    e.s([
      "ThemeProvider",
      0,
      (e) =>
        (0, t.useContext)(i)
          ? t.default.createElement(t.Fragment, null, e.children)
          : t.default.createElement(l, e),
      "useTheme",
      0,
      () => {
        var e;
        return null != (e = (0, t.useContext)(i)) ? e : o;
      },
    ]);
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
  83026,
  342471,
  (e) => {
    "use strict";
    var t = e.i(247167),
      r = e.i(821410),
      n = e.i(270308),
      s = e.i(684219);
    function i() {
      if (!r.IS_PRODUCTION && t.default.env.LOCAL_TESTING_DOMAIN_VERCEL)
        return t.default.env.LOCAL_TESTING_DOMAIN_VERCEL;
      let e = r.WEBAPP_URL.replace("https://", "")?.replace("http://", "").split(".");
      return 3 === e.length ? e.slice(1).join(".") : e.join(".");
    }
    e.s(["subdomainSuffix", 0, i], 342471);
    let o = s.default.getSubLogger({ prefix: ["orgDomains.ts"] });
    e.s(
      [
        "getOrgDomainConfigFromHostname",
        0,
        function ({ hostname: e, fallback: n, forcedSlug: s }) {
          let i = (function (e, n) {
              if (n) {
                if (t.default.env.NEXT_PUBLIC_IS_E2E || t.default.env.INTEGRATION_TEST_MODE)
                  return (
                    o.debug("Using provided forcedSlug in E2E/Integration Test mode", {
                      forcedSlug: n,
                    }),
                    n
                  );
                o.debug("Ignoring forcedSlug in non-test mode", { forcedSlug: n });
              }
              if (r.SINGLE_ORG_SLUG)
                return (
                  o.debug("In Single Org Mode, using SINGLE_ORG_SLUG as the Org slug", {
                    SINGLE_ORG_SLUG: r.SINGLE_ORG_SLUG,
                  }),
                  r.SINGLE_ORG_SLUG
                );
              if (!e.includes("."))
                return (
                  o.warn('Org support not enabled for hostname without "."', { hostname: e }),
                  null
                );
              let s = r.ALLOWED_HOSTNAMES.find((e) => {
                let t = new URL(r.WEBAPP_URL);
                return `${t.hostname}${t.port ? `:${t.port}` : ""}`.endsWith(`.${e}`);
              });
              if (!s)
                return (
                  o.warn("Match of WEBAPP_URL with ALLOWED_HOSTNAMES failed", {
                    WEBAPP_URL: r.WEBAPP_URL,
                    ALLOWED_HOSTNAMES: r.ALLOWED_HOSTNAMES,
                  }),
                  null
                );
              let i = e.replace(s ? `.${s}` : "", "");
              return -1 === i.indexOf(".")
                ? i
                : (o.warn(
                    "Derived slug ended up having dots, so not considering it an org domain",
                    { slug: i }
                  ),
                  null);
            })(e, s),
            l = null !== i && !r.RESERVED_SUBDOMAINS.includes(i);
          if (l || !n) return { currentOrgDomain: l ? i : null, isValidOrgDomain: l };
          let a = !r.RESERVED_SUBDOMAINS.includes(n);
          return { currentOrgDomain: a ? n : null, isValidOrgDomain: a };
        },
        "getOrgFullOrigin",
        0,
        function (e, t = { protocol: !0 }) {
          if (!e) {
            let e =
              (0, n.getTldPlus1)(new URL(r.WEBSITE_URL).hostname) !==
              (0, n.getTldPlus1)(new URL(r.WEBAPP_URL).hostname)
                ? r.WEBAPP_URL
                : r.WEBSITE_URL;
            return t.protocol ? e : e.replace("https://", "").replace("http://", "");
          }
          return `${t.protocol ? `${new URL(r.WEBSITE_URL).protocol}//` : ""}${e}.${i()}`;
        },
      ],
      83026
    );
  },
  988138,
  (e) => {
    "use strict";
    var t = e.i(931067),
      r = e.i(271645),
      n = e.i(981140),
      s = e.i(820783),
      i = e.i(30030),
      o = e.i(726330),
      l = e.i(610772),
      a = e.i(853660),
      u = e.i(174080),
      c = e.i(248425);
    let d = (0, r.forwardRef)((e, n) => {
      var s;
      let {
        container: i = null == globalThis || null == (s = globalThis.document) ? void 0 : s.body,
        ...o
      } = e;
      return i
        ? u.default.createPortal(
            (0, r.createElement)(c.Primitive.div, (0, t.default)({}, o, { ref: n })),
            i
          )
        : null;
    });
    var h = e.i(296626);
    (0, r.forwardRef)((e, n) => {
      let { children: s, ...i } = e,
        o = r.Children.toArray(s),
        l = o.find(f);
      if (l) {
        let e = l.props.children,
          s = o.map((t) =>
            t !== l
              ? t
              : r.Children.count(e) > 1
                ? r.Children.only(null)
                : (0, r.isValidElement)(e)
                  ? e.props.children
                  : null
          );
        return (0, r.createElement)(
          p,
          (0, t.default)({}, i, { ref: n }),
          (0, r.isValidElement)(e) ? (0, r.cloneElement)(e, void 0, s) : null
        );
      }
      return (0, r.createElement)(p, (0, t.default)({}, i, { ref: n }), s);
    }).displayName = "Slot";
    let p = (0, r.forwardRef)((e, t) => {
      let { children: n, ...i } = e;
      return (0, r.isValidElement)(n)
        ? (0, r.cloneElement)(n, {
            ...(function (e, t) {
              let r = { ...t };
              for (let n in t) {
                let s = e[n],
                  i = t[n];
                /^on[A-Z]/.test(n)
                  ? s && i
                    ? (r[n] = (...e) => {
                        (i(...e), s(...e));
                      })
                    : s && (r[n] = s)
                  : "style" === n
                    ? (r[n] = { ...s, ...i })
                    : "className" === n && (r[n] = [s, i].filter(Boolean).join(" "));
              }
              return { ...e, ...r };
            })(i, n.props),
            ref: t ? (0, s.composeRefs)(t, n.ref) : n.ref,
          })
        : r.Children.count(n) > 1
          ? r.Children.only(null)
          : null;
    });
    p.displayName = "SlotClone";
    let m = ({ children: e }) => (0, r.createElement)(r.Fragment, null, e);
    function f(e) {
      return (0, r.isValidElement)(e) && e.type === m;
    }
    var g = e.i(369340),
      v = e.i(959411);
    let [y, x] = (0, i.createContextScope)("Tooltip", [a.createPopperScope]),
      b = (0, a.createPopperScope)(),
      _ = "tooltip.open",
      [S, E] = y("TooltipProvider"),
      w = (e) => {
        let {
            __scopeTooltip: t,
            delayDuration: n = 700,
            skipDelayDuration: s = 300,
            disableHoverableContent: i = !1,
            children: o,
          } = e,
          [l, a] = (0, r.useState)(!0),
          u = (0, r.useRef)(!1),
          c = (0, r.useRef)(0);
        return (
          (0, r.useEffect)(() => {
            let e = c.current;
            return () => window.clearTimeout(e);
          }, []),
          (0, r.createElement)(
            S,
            {
              scope: t,
              isOpenDelayed: l,
              delayDuration: n,
              onOpen: (0, r.useCallback)(() => {
                (window.clearTimeout(c.current), a(!1));
              }, []),
              onClose: (0, r.useCallback)(() => {
                (window.clearTimeout(c.current), (c.current = window.setTimeout(() => a(!0), s)));
              }, [s]),
              isPointerInTransitRef: u,
              onPointerInTransitChange: (0, r.useCallback)((e) => {
                u.current = e;
              }, []),
              disableHoverableContent: i,
            },
            o
          )
        );
      },
      j = "Tooltip",
      [T, C] = y(j),
      R = "TooltipTrigger",
      k = (0, r.forwardRef)((e, i) => {
        let { __scopeTooltip: o, ...l } = e,
          u = C(R, o),
          d = E(R, o),
          h = b(o),
          p = (0, r.useRef)(null),
          m = (0, s.useComposedRefs)(i, p, u.onTriggerChange),
          f = (0, r.useRef)(!1),
          g = (0, r.useRef)(!1),
          v = (0, r.useCallback)(() => (f.current = !1), []);
        return (
          (0, r.useEffect)(() => () => document.removeEventListener("pointerup", v), [v]),
          (0, r.createElement)(
            a.Anchor,
            (0, t.default)({ asChild: !0 }, h),
            (0, r.createElement)(
              c.Primitive.button,
              (0, t.default)(
                {
                  "aria-describedby": u.open ? u.contentId : void 0,
                  "data-state": u.stateAttribute,
                },
                l,
                {
                  ref: m,
                  onPointerMove: (0, n.composeEventHandlers)(e.onPointerMove, (e) => {
                    "touch" !== e.pointerType &&
                      (g.current ||
                        d.isPointerInTransitRef.current ||
                        (u.onTriggerEnter(), (g.current = !0)));
                  }),
                  onPointerLeave: (0, n.composeEventHandlers)(e.onPointerLeave, () => {
                    (u.onTriggerLeave(), (g.current = !1));
                  }),
                  onPointerDown: (0, n.composeEventHandlers)(e.onPointerDown, () => {
                    ((f.current = !0), document.addEventListener("pointerup", v, { once: !0 }));
                  }),
                  onFocus: (0, n.composeEventHandlers)(e.onFocus, () => {
                    f.current || u.onOpen();
                  }),
                  onBlur: (0, n.composeEventHandlers)(e.onBlur, u.onClose),
                  onClick: (0, n.composeEventHandlers)(e.onClick, u.onClose),
                }
              )
            )
          )
        );
      }),
      L = "TooltipPortal",
      [P, O] = y(L, { forceMount: void 0 }),
      N = "TooltipContent",
      q = (0, r.forwardRef)((e, n) => {
        let s = O(N, e.__scopeTooltip),
          { forceMount: i = s.forceMount, side: o = "top", ...l } = e,
          a = C(N, e.__scopeTooltip);
        return (0, r.createElement)(
          h.Presence,
          { present: i || a.open },
          a.disableHoverableContent
            ? (0, r.createElement)(F, (0, t.default)({ side: o }, l, { ref: n }))
            : (0, r.createElement)(A, (0, t.default)({ side: o }, l, { ref: n }))
        );
      }),
      A = (0, r.forwardRef)((e, n) => {
        let i = C(N, e.__scopeTooltip),
          o = E(N, e.__scopeTooltip),
          l = (0, r.useRef)(null),
          a = (0, s.useComposedRefs)(n, l),
          [u, c] = (0, r.useState)(null),
          { trigger: d, onClose: h } = i,
          p = l.current,
          { onPointerInTransitChange: m } = o,
          f = (0, r.useCallback)(() => {
            (c(null), m(!1));
          }, [m]),
          g = (0, r.useCallback)(
            (e, t) => {
              let r,
                n = e.currentTarget,
                s = { x: e.clientX, y: e.clientY },
                i = (function (e, t) {
                  let r = Math.abs(t.top - e.y),
                    n = Math.abs(t.bottom - e.y),
                    s = Math.abs(t.right - e.x),
                    i = Math.abs(t.left - e.x);
                  switch (Math.min(r, n, s, i)) {
                    case i:
                      return "left";
                    case s:
                      return "right";
                    case r:
                      return "top";
                    case n:
                      return "bottom";
                    default:
                      throw Error("unreachable");
                  }
                })(s, n.getBoundingClientRect());
              (c(
                ((r = [
                  ...(function (e, t, r = 5) {
                    let n = [];
                    switch (t) {
                      case "top":
                        n.push({ x: e.x - r, y: e.y + r }, { x: e.x + r, y: e.y + r });
                        break;
                      case "bottom":
                        n.push({ x: e.x - r, y: e.y - r }, { x: e.x + r, y: e.y - r });
                        break;
                      case "left":
                        n.push({ x: e.x + r, y: e.y - r }, { x: e.x + r, y: e.y + r });
                        break;
                      case "right":
                        n.push({ x: e.x - r, y: e.y - r }, { x: e.x - r, y: e.y + r });
                    }
                    return n;
                  })(s, i),
                  ...(function (e) {
                    let { top: t, right: r, bottom: n, left: s } = e;
                    return [
                      { x: s, y: t },
                      { x: r, y: t },
                      { x: r, y: n },
                      { x: s, y: n },
                    ];
                  })(t.getBoundingClientRect()),
                ].slice()).sort((e, t) =>
                  e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : 1 * !!(e.y > t.y)
                ),
                (function (e) {
                  if (e.length <= 1) return e.slice();
                  let t = [];
                  for (let r = 0; r < e.length; r++) {
                    let n = e[r];
                    for (; t.length >= 2; ) {
                      let e = t[t.length - 1],
                        r = t[t.length - 2];
                      if ((e.x - r.x) * (n.y - r.y) >= (e.y - r.y) * (n.x - r.x)) t.pop();
                      else break;
                    }
                    t.push(n);
                  }
                  t.pop();
                  let r = [];
                  for (let t = e.length - 1; t >= 0; t--) {
                    let n = e[t];
                    for (; r.length >= 2; ) {
                      let e = r[r.length - 1],
                        t = r[r.length - 2];
                      if ((e.x - t.x) * (n.y - t.y) >= (e.y - t.y) * (n.x - t.x)) r.pop();
                      else break;
                    }
                    r.push(n);
                  }
                  return (r.pop(),
                  1 === t.length && 1 === r.length && t[0].x === r[0].x && t[0].y === r[0].y)
                    ? t
                    : t.concat(r);
                })(r))
              ),
                m(!0));
            },
            [m]
          );
        return (
          (0, r.useEffect)(() => () => f(), [f]),
          (0, r.useEffect)(() => {
            if (d && p) {
              let e = (e) => g(e, p),
                t = (e) => g(e, d);
              return (
                d.addEventListener("pointerleave", e),
                p.addEventListener("pointerleave", t),
                () => {
                  (d.removeEventListener("pointerleave", e),
                    p.removeEventListener("pointerleave", t));
                }
              );
            }
          }, [d, p, g, f]),
          (0, r.useEffect)(() => {
            if (u) {
              let e = (e) => {
                let t = e.target,
                  r = { x: e.clientX, y: e.clientY },
                  n = (null == d ? void 0 : d.contains(t)) || (null == p ? void 0 : p.contains(t)),
                  s = !(function (e, t) {
                    let { x: r, y: n } = e,
                      s = !1;
                    for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                      let o = t[e].x,
                        l = t[e].y,
                        a = t[i].x,
                        u = t[i].y;
                      l > n != u > n && r < ((a - o) * (n - l)) / (u - l) + o && (s = !s);
                    }
                    return s;
                  })(r, u);
                n ? f() : s && (f(), h());
              };
              return (
                document.addEventListener("pointermove", e),
                () => document.removeEventListener("pointermove", e)
              );
            }
          }, [d, p, u, h, f]),
          (0, r.createElement)(F, (0, t.default)({}, e, { ref: a }))
        );
      }),
      [$, I] = y(j, { isInside: !1 }),
      F = (0, r.forwardRef)((e, n) => {
        let {
            __scopeTooltip: s,
            children: i,
            "aria-label": l,
            onEscapeKeyDown: u,
            onPointerDownOutside: c,
            ...d
          } = e,
          h = C(N, s),
          p = b(s),
          { onClose: f } = h;
        return (
          (0, r.useEffect)(
            () => (document.addEventListener(_, f), () => document.removeEventListener(_, f)),
            [f]
          ),
          (0, r.useEffect)(() => {
            if (h.trigger) {
              let e = (e) => {
                let t = e.target;
                null != t && t.contains(h.trigger) && f();
              };
              return (
                window.addEventListener("scroll", e, { capture: !0 }),
                () => window.removeEventListener("scroll", e, { capture: !0 })
              );
            }
          }, [h.trigger, f]),
          (0, r.createElement)(
            o.DismissableLayer,
            {
              asChild: !0,
              disableOutsidePointerEvents: !1,
              onEscapeKeyDown: u,
              onPointerDownOutside: c,
              onFocusOutside: (e) => e.preventDefault(),
              onDismiss: f,
            },
            (0, r.createElement)(
              a.Content,
              (0, t.default)({ "data-state": h.stateAttribute }, p, d, {
                ref: n,
                style: {
                  ...d.style,
                  "--radix-tooltip-content-transform-origin":
                    "var(--radix-popper-transform-origin)",
                  "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-tooltip-content-available-height":
                    "var(--radix-popper-available-height)",
                  "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)",
                },
              }),
              (0, r.createElement)(m, null, i),
              (0, r.createElement)(
                $,
                { scope: s, isInside: !0 },
                (0, r.createElement)(v.Root, { id: h.contentId, role: "tooltip" }, l || i)
              )
            )
          )
        );
      }),
      M = (0, r.forwardRef)((e, n) => {
        let { __scopeTooltip: s, ...i } = e,
          o = b(s);
        return I("TooltipArrow", s).isInside
          ? null
          : (0, r.createElement)(a.Arrow, (0, t.default)({}, o, i, { ref: n }));
      });
    e.s(
      [
        "Arrow",
        0,
        M,
        "Content",
        0,
        q,
        "Portal",
        0,
        (e) => {
          let { __scopeTooltip: t, forceMount: n, children: s, container: i } = e,
            o = C(L, t);
          return (0, r.createElement)(
            P,
            { scope: t, forceMount: n },
            (0, r.createElement)(
              h.Presence,
              { present: n || o.open },
              (0, r.createElement)(d, { asChild: !0, container: i }, s)
            )
          );
        },
        "Provider",
        0,
        w,
        "Root",
        0,
        (e) => {
          let {
              __scopeTooltip: t,
              children: n,
              open: s,
              defaultOpen: i = !1,
              onOpenChange: o,
              disableHoverableContent: u,
              delayDuration: c,
            } = e,
            d = E(j, e.__scopeTooltip),
            h = b(t),
            [p, m] = (0, r.useState)(null),
            f = (0, l.useId)(),
            v = (0, r.useRef)(0),
            y = null != u ? u : d.disableHoverableContent,
            x = null != c ? c : d.delayDuration,
            S = (0, r.useRef)(!1),
            [w = !1, C] = (0, g.useControllableState)({
              prop: s,
              defaultProp: i,
              onChange: (e) => {
                (e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(_))) : d.onClose(),
                  null == o || o(e));
              },
            }),
            R = (0, r.useMemo)(
              () => (w ? (S.current ? "delayed-open" : "instant-open") : "closed"),
              [w]
            ),
            k = (0, r.useCallback)(() => {
              (window.clearTimeout(v.current), (S.current = !1), C(!0));
            }, [C]),
            L = (0, r.useCallback)(() => {
              (window.clearTimeout(v.current), C(!1));
            }, [C]),
            P = (0, r.useCallback)(() => {
              (window.clearTimeout(v.current),
                (v.current = window.setTimeout(() => {
                  ((S.current = !0), C(!0));
                }, x)));
            }, [x, C]);
          return (
            (0, r.useEffect)(() => () => window.clearTimeout(v.current), []),
            (0, r.createElement)(
              a.Root,
              h,
              (0, r.createElement)(
                T,
                {
                  scope: t,
                  contentId: f,
                  open: w,
                  stateAttribute: R,
                  trigger: p,
                  onTriggerChange: m,
                  onTriggerEnter: (0, r.useCallback)(() => {
                    d.isOpenDelayed ? P() : k();
                  }, [d.isOpenDelayed, P, k]),
                  onTriggerLeave: (0, r.useCallback)(() => {
                    y ? L() : window.clearTimeout(v.current);
                  }, [L, y]),
                  onOpen: k,
                  onClose: L,
                  disableHoverableContent: y,
                },
                n
              )
            )
          );
        },
        "TooltipProvider",
        0,
        w,
        "Trigger",
        0,
        k,
        "createTooltipScope",
        0,
        x,
      ],
      988138
    );
  },
  528773,
  (e) => {
    "use strict";
    var t,
      r = e.i(821410);
    let n = r.EMBED_LIB_URL,
      s = `${r.WEBAPP_URL}/embed/preview.html`;
    var i = (((t = {}).auto = "auto"), (t.light = "light"), (t.dark = "dark"), t);
    e.s(["EMBED_PREVIEW_HTML_URL", 0, s, "EmbedTheme", () => i, "embedLibUrl", 0, n]);
  },
  516015,
  (e, t, r) => {},
  898547,
  (e, t, r) => {
    var n = e.i(247167);
    e.r(516015);
    var s = e.r(271645),
      i = s && "object" == typeof s && "default" in s ? s : { default: s },
      o = void 0 !== n.default && n.default.env && !0,
      l = function (e) {
        return "[object String]" === Object.prototype.toString.call(e);
      },
      a = (function () {
        function e(e) {
          var t = void 0 === e ? {} : e,
            r = t.name,
            n = void 0 === r ? "stylesheet" : r,
            s = t.optimizeForSpeed,
            i = void 0 === s ? o : s;
          (u(l(n), "`name` must be a string"),
            (this._name = n),
            (this._deletedRulePlaceholder = "#" + n + "-deleted-rule____{}"),
            u("boolean" == typeof i, "`optimizeForSpeed` must be a boolean"),
            (this._optimizeForSpeed = i),
            (this._serverSheet = void 0),
            (this._tags = []),
            (this._injected = !1),
            (this._rulesCount = 0));
          var a = "u" > typeof window && document.querySelector('meta[property="csp-nonce"]');
          this._nonce = a ? a.getAttribute("content") : null;
        }
        var t,
          r = e.prototype;
        return (
          (r.setOptimizeForSpeed = function (e) {
            (u("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"),
              u(
                0 === this._rulesCount,
                "optimizeForSpeed cannot be when rules have already been inserted"
              ),
              this.flush(),
              (this._optimizeForSpeed = e),
              this.inject());
          }),
          (r.isOptimizeForSpeed = function () {
            return this._optimizeForSpeed;
          }),
          (r.inject = function () {
            var e = this;
            if (
              (u(!this._injected, "sheet already injected"),
              (this._injected = !0),
              "u" > typeof window && this._optimizeForSpeed)
            ) {
              ((this._tags[0] = this.makeStyleTag(this._name)),
                (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                this._optimizeForSpeed ||
                  (o ||
                    console.warn(
                      "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                    ),
                  this.flush(),
                  (this._injected = !0)));
              return;
            }
            this._serverSheet = {
              cssRules: [],
              insertRule: function (t, r) {
                return (
                  "number" == typeof r
                    ? (e._serverSheet.cssRules[r] = { cssText: t })
                    : e._serverSheet.cssRules.push({ cssText: t }),
                  r
                );
              },
              deleteRule: function (t) {
                e._serverSheet.cssRules[t] = null;
              },
            };
          }),
          (r.getSheetForTag = function (e) {
            if (e.sheet) return e.sheet;
            for (var t = 0; t < document.styleSheets.length; t++)
              if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
          }),
          (r.getSheet = function () {
            return this.getSheetForTag(this._tags[this._tags.length - 1]);
          }),
          (r.insertRule = function (e, t) {
            if ((u(l(e), "`insertRule` accepts only strings"), "u" < typeof window))
              return (
                "number" != typeof t && (t = this._serverSheet.cssRules.length),
                this._serverSheet.insertRule(e, t),
                this._rulesCount++
              );
            if (this._optimizeForSpeed) {
              var r = this.getSheet();
              "number" != typeof t && (t = r.cssRules.length);
              try {
                r.insertRule(e, t);
              } catch (t) {
                return (
                  o ||
                    console.warn(
                      "StyleSheet: illegal rule: \n\n" +
                        e +
                        "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                    ),
                  -1
                );
              }
            } else {
              var n = this._tags[t];
              this._tags.push(this.makeStyleTag(this._name, e, n));
            }
            return this._rulesCount++;
          }),
          (r.replaceRule = function (e, t) {
            if (this._optimizeForSpeed || "u" < typeof window) {
              var r = "u" > typeof window ? this.getSheet() : this._serverSheet;
              if ((t.trim() || (t = this._deletedRulePlaceholder), !r.cssRules[e])) return e;
              r.deleteRule(e);
              try {
                r.insertRule(t, e);
              } catch (n) {
                (o ||
                  console.warn(
                    "StyleSheet: illegal rule: \n\n" +
                      t +
                      "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                  ),
                  r.insertRule(this._deletedRulePlaceholder, e));
              }
            } else {
              var n = this._tags[e];
              (u(n, "old rule at index `" + e + "` not found"), (n.textContent = t));
            }
            return e;
          }),
          (r.deleteRule = function (e) {
            if ("u" < typeof window) return void this._serverSheet.deleteRule(e);
            if (this._optimizeForSpeed) this.replaceRule(e, "");
            else {
              var t = this._tags[e];
              (u(t, "rule at index `" + e + "` not found"),
                t.parentNode.removeChild(t),
                (this._tags[e] = null));
            }
          }),
          (r.flush = function () {
            ((this._injected = !1),
              (this._rulesCount = 0),
              "u" > typeof window
                ? (this._tags.forEach(function (e) {
                    return e && e.parentNode.removeChild(e);
                  }),
                  (this._tags = []))
                : (this._serverSheet.cssRules = []));
          }),
          (r.cssRules = function () {
            var e = this;
            return "u" < typeof window
              ? this._serverSheet.cssRules
              : this._tags.reduce(function (t, r) {
                  return (
                    r
                      ? (t = t.concat(
                          Array.prototype.map.call(e.getSheetForTag(r).cssRules, function (t) {
                            return t.cssText === e._deletedRulePlaceholder ? null : t;
                          })
                        ))
                      : t.push(null),
                    t
                  );
                }, []);
          }),
          (r.makeStyleTag = function (e, t, r) {
            t && u(l(t), "makeStyleTag accepts only strings as second parameter");
            var n = document.createElement("style");
            (this._nonce && n.setAttribute("nonce", this._nonce),
              (n.type = "text/css"),
              n.setAttribute("data-" + e, ""),
              t && n.appendChild(document.createTextNode(t)));
            var s = document.head || document.getElementsByTagName("head")[0];
            return (r ? s.insertBefore(n, r) : s.appendChild(n), n);
          }),
          (t = [
            {
              key: "length",
              get: function () {
                return this._rulesCount;
              },
            },
          ]),
          (function (e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              ((n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n));
            }
          })(e.prototype, t),
          e
        );
      })();
    function u(e, t) {
      if (!e) throw Error("StyleSheet: " + t + ".");
    }
    var c = function (e) {
        for (var t = 5381, r = e.length; r; ) t = (33 * t) ^ e.charCodeAt(--r);
        return t >>> 0;
      },
      d = {};
    function h(e, t) {
      if (!t) return "jsx-" + e;
      var r = String(t),
        n = e + r;
      return (d[n] || (d[n] = "jsx-" + c(e + "-" + r)), d[n]);
    }
    function p(e, t) {
      "u" < typeof window && (t = t.replace(/\/style/gi, "\\/style"));
      var r = e + t;
      return (d[r] || (d[r] = t.replace(/__jsx-style-dynamic-selector/g, e)), d[r]);
    }
    var m = (function () {
        function e(e) {
          var t = void 0 === e ? {} : e,
            r = t.styleSheet,
            n = void 0 === r ? null : r,
            s = t.optimizeForSpeed,
            i = void 0 !== s && s;
          ((this._sheet = n || new a({ name: "styled-jsx", optimizeForSpeed: i })),
            this._sheet.inject(),
            n &&
              "boolean" == typeof i &&
              (this._sheet.setOptimizeForSpeed(i),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
            (this._fromServer = void 0),
            (this._indices = {}),
            (this._instancesCounts = {}));
        }
        var t = e.prototype;
        return (
          (t.add = function (e) {
            var t = this;
            (void 0 === this._optimizeForSpeed &&
              ((this._optimizeForSpeed = Array.isArray(e.children)),
              this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              "u" > typeof window &&
                !this._fromServer &&
                ((this._fromServer = this.selectFromServer()),
                (this._instancesCounts = Object.keys(this._fromServer).reduce(function (e, t) {
                  return ((e[t] = 0), e);
                }, {}))));
            var r = this.getIdAndRules(e),
              n = r.styleId,
              s = r.rules;
            if (n in this._instancesCounts) {
              this._instancesCounts[n] += 1;
              return;
            }
            var i = s
              .map(function (e) {
                return t._sheet.insertRule(e);
              })
              .filter(function (e) {
                return -1 !== e;
              });
            ((this._indices[n] = i), (this._instancesCounts[n] = 1));
          }),
          (t.remove = function (e) {
            var t = this,
              r = this.getIdAndRules(e).styleId;
            if (
              ((function (e, t) {
                if (!e) throw Error("StyleSheetRegistry: " + t + ".");
              })(r in this._instancesCounts, "styleId: `" + r + "` not found"),
              (this._instancesCounts[r] -= 1),
              this._instancesCounts[r] < 1)
            ) {
              var n = this._fromServer && this._fromServer[r];
              (n
                ? (n.parentNode.removeChild(n), delete this._fromServer[r])
                : (this._indices[r].forEach(function (e) {
                    return t._sheet.deleteRule(e);
                  }),
                  delete this._indices[r]),
                delete this._instancesCounts[r]);
            }
          }),
          (t.update = function (e, t) {
            (this.add(t), this.remove(e));
          }),
          (t.flush = function () {
            (this._sheet.flush(),
              this._sheet.inject(),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {}));
          }),
          (t.cssRules = function () {
            var e = this,
              t = this._fromServer
                ? Object.keys(this._fromServer).map(function (t) {
                    return [t, e._fromServer[t]];
                  })
                : [],
              r = this._sheet.cssRules();
            return t.concat(
              Object.keys(this._indices)
                .map(function (t) {
                  return [
                    t,
                    e._indices[t]
                      .map(function (e) {
                        return r[e].cssText;
                      })
                      .join(e._optimizeForSpeed ? "" : "\n"),
                  ];
                })
                .filter(function (e) {
                  return !!e[1];
                })
            );
          }),
          (t.styles = function (e) {
            var t, r;
            return (
              (t = this.cssRules()),
              void 0 === (r = e) && (r = {}),
              t.map(function (e) {
                var t = e[0],
                  n = e[1];
                return i.default.createElement("style", {
                  id: "__" + t,
                  key: "__" + t,
                  nonce: r.nonce ? r.nonce : void 0,
                  dangerouslySetInnerHTML: { __html: n },
                });
              })
            );
          }),
          (t.getIdAndRules = function (e) {
            var t = e.children,
              r = e.dynamic,
              n = e.id;
            if (r) {
              var s = h(n, r);
              return {
                styleId: s,
                rules: Array.isArray(t)
                  ? t.map(function (e) {
                      return p(s, e);
                    })
                  : [p(s, t)],
              };
            }
            return { styleId: h(n), rules: Array.isArray(t) ? t : [t] };
          }),
          (t.selectFromServer = function () {
            return Array.prototype.slice
              .call(document.querySelectorAll('[id^="__jsx-"]'))
              .reduce(function (e, t) {
                return ((e[t.id.slice(2)] = t), e);
              }, {});
          }),
          e
        );
      })(),
      f = s.createContext(null);
    function g() {
      return new m();
    }
    function v() {
      return s.useContext(f);
    }
    f.displayName = "StyleSheetContext";
    var y = i.default.useInsertionEffect || i.default.useLayoutEffect,
      x = "u" > typeof window ? g() : void 0;
    function b(e) {
      var t = x || v();
      return (
        t &&
          ("u" < typeof window
            ? t.add(e)
            : y(
                function () {
                  return (
                    t.add(e),
                    function () {
                      t.remove(e);
                    }
                  );
                },
                [e.id, String(e.dynamic)]
              )),
        null
      );
    }
    ((b.dynamic = function (e) {
      return e
        .map(function (e) {
          return h(e[0], e[1]);
        })
        .join(" ");
    }),
      (r.StyleRegistry = function (e) {
        var t = e.registry,
          r = e.children,
          n = s.useContext(f),
          o = s.useState(function () {
            return n || t || g();
          })[0];
        return i.default.createElement(f.Provider, { value: o }, r);
      }),
      (r.createStyleRegistry = g),
      (r.style = b),
      (r.useStyleRegistry = v));
  },
  437902,
  (e, t, r) => {
    t.exports = e.r(898547).style;
  },
  327211,
  (e) => {
    "use strict";
    let t = /[^A-Za-z0-9_\-:.@+%]/g;
    e.s([
      "sanitizeThemeStorageKey",
      0,
      function (e) {
        return e.replace(t, "_");
      },
    ]);
  },
  478052,
  (e) => {
    "use strict";
    var t = e.i(247167),
      r = e.i(273446);
    let n = {
      organizations: !1,
      teams: !1,
      "calendar-cache": !1,
      "calendar-cache-serve": !1,
      emails: !1,
      insights: !1,
      webhooks: !1,
      workflows: !1,
      "email-verification": !1,
      "email-smtp-failover": !1,
      "google-workspace-directory": !1,
      "disable-signup": !1,
      attributes: !1,
      "organizer-request-email-v2": !1,
      "salesforce-crm-tasker": !1,
      "workflow-smtp-emails": !1,
      "cal-video-log-in-overlay": !1,
      "use-api-v2-for-team-slots": !1,
      pbac: !1,
      "restriction-schedule": !1,
      "team-booking-page-cache": !1,
      "cal-ai-voice-agents": !1,
      "tiered-support-chat": !1,
      "calendar-watch": !1,
      "booker-botid": !1,
      "bookings-v3": !1,
      "booking-audit": !1,
      "monthly-proration": !1,
      "hwm-seating": !1,
      "active-user-billing": !1,
      "sidebar-tips": !1,
      "abuse-scoring": !1,
      "dunning-enforcement": !1,
      "signup-watchlist-review": !1,
      "custom-smtp-for-orgs": !1,
      "sink-shortener": !1,
      "otel-elastic-export": !1,
      "audit-log": !1,
      "workflow-reminder-links": !1,
      "app-push-notifications": !1,
      "enable-fuzzy-domain-matching": !1,
      "booking-window": !1,
      "account-lockout": !1,
      "schedule-limits": !1,
      "phishing-gate-enforce": !1,
      "isolated-availability": !1,
    };
    (t.default.env.NEXT_PUBLIC_IS_E2E && ((n.organizations = !0), (n.teams = !0)),
      e.s([
        "useFlags",
        0,
        function () {
          return r.trpc.viewer.features.map.useQuery().data ?? n;
        },
      ]));
  },
  842589,
  (e) => {
    "use strict";
    var t = e.i(843476);
    e.i(436864);
    var r = e.i(621918),
      n = e.i(437902),
      s = e.i(270236),
      i = e.i(117032),
      o = e.i(247167),
      l = e.i(770703),
      a = e.i(271645);
    let u = o.default.env.NEXT_PUBLIC_HELPSCOUT_KEY
        ? (0, l.default)(() => e.A(14723), { loadableGenerated: { modules: [131452] } })
        : a.Fragment,
      c = (0, l.default)(() => e.A(771570), { loadableGenerated: { modules: [453618] }, ssr: !1 });
    var d = e.i(478052),
      h = e.i(173233),
      p = e.i(618566);
    let m = ["/auth/setup"];
    function f(e) {
      let t = new URLSearchParams(e),
        r = Array.from(t.entries());
      return (
        r.forEach(([e]) => t.delete(e)),
        r
          .sort(([e], [t]) => ("uid" === e ? -1 : "uid" === t ? 1 : e.localeCompare(t)))
          .forEach(([e, r]) => t.append(e, r)),
        t
      );
    }
    var g = e.i(186336),
      v = e.i(988138),
      y = e.i(217255),
      x = e.i(278587),
      b = e.i(924540),
      _ = e.i(784150);
    function S() {
      ((0, b.c)("[nuqs] Aborting queues"),
        _.t.abortAll(),
        _.n.abort().forEach((e) => _.t.queuedQuerySync.emit(e)));
    }
    let E = 0;
    function w() {
      ((E = 0), S());
    }
    function j() {
      --E <= 0 && ((E = 0), queueMicrotask(S));
    }
    function T() {
      return (
        (0, a.useEffect)(
          () => (
            !(function () {
              var e;
              if (
                ((e = "next/app"),
                "u" < typeof history ||
                  (history.nuqs?.version && "2.8.2" !== history.nuqs.version
                    ? (console.error((0, b.s)(409), history.nuqs.version, "2.8.2", e), !0)
                    : !!history.nuqs?.adapters?.includes(e)))
              )
                return;
              let t = history.replaceState,
                r = history.pushState;
              ((history.replaceState = function (e, r, n) {
                return (j(), t.call(history, e, r, n));
              }),
                (history.pushState = function (e, t, n) {
                  return (j(), r.call(history, e, t, n));
                }),
                (history.nuqs = history.nuqs ?? { version: "2.8.2", adapters: [] }),
                history.nuqs.adapters.push("next/app"));
            })(),
            window.addEventListener("popstate", w),
            () => window.removeEventListener("popstate", w)
          ),
          []
        ),
        null
      );
    }
    let C = (0, b.n)(function () {
      let e = (0, p.useRouter)(),
        [t, r] = (0, a.useOptimistic)((0, p.useSearchParams)());
      return {
        searchParams: t,
        updateUrl: (0, a.useCallback)((t, n) => {
          (0, a.startTransition)(() => {
            n.shallow || r(t);
            let s = (function (e) {
              let { origin: t, pathname: r, hash: n } = location;
              return t + r + (0, b.o)(e) + n;
            })(t);
            (0, b.c)("[nuqs next/app] Updating url: %s", s);
            let i = "push" === n.history ? history.pushState : history.replaceState;
            ((E = 3),
              i.call(history, null, "", s),
              n.scroll && window.scrollTo(0, 0),
              n.shallow || e.replace(s, { scroll: !1 }));
          });
        }, []),
        rateLimitFactor: 3,
        autoResetQueueOnUpdate: !1,
      };
    });
    function R({ children: e, ...t }) {
      return (0, a.createElement)(C, {
        ...t,
        children: [
          (0, a.createElement)(a.Suspense, {
            key: "nuqs-adapter-suspense-navspy",
            children: (0, a.createElement)(T),
          }),
          e,
        ],
      });
    }
    let k = (0, l.default)(() => e.A(667579), {
        loadableGenerated: { modules: [132693] },
        ssr: !1,
      }),
      L = (0, l.default)(() => e.A(321994), { loadableGenerated: { modules: [17567] } });
    var P = e.i(50270),
      O = e.i(528773),
      N = e.i(327211);
    let q = new Set(["booking", "d", "forms", "success"]),
      A = (e) => {
        let r,
          s = (0, p.useSearchParams)(),
          i = s ? window.getEmbedNamespace() : null,
          o = "string" == typeof i,
          l = (0, p.usePathname)();
        if (
          !o &&
          e.isBookingPage &&
          (r = l?.split("/").filter(Boolean) ?? []).length &&
          "embed" !== r.at(-1) &&
          ("team" === r[0]
            ? r.length >= 3
            : "org" === r[0] && "team" === r[2]
              ? r.length >= 5
              : "org" === r[0]
                ? r.length >= 4
                : !q.has(r[0]) && r.length >= 2)
        )
          return (0, t.jsx)(t.Fragment, { children: e.children });
        let { key: a, ...u } = (function ({
          props: e,
          isEmbedMode: t,
          embedNamespace: r,
          pathname: n,
          searchParams: s,
        }) {
          let i = e.isBookingPage
              ? "bookingConfigured"
              : !1 === e.isThemeSupported
                ? "none"
                : "appConfigured",
            o = s?.get("theme") ?? "",
            l = P.z.enum(["light", "dark", "system", "auto"]).safeParse(o),
            a = o.length > 0 && !l.success,
            u = "none" === i || a ? "light" : void 0;
          if (u)
            return {
              key: "forcedThemeKey",
              storageKey: "forcedThemeKey",
              forcedTheme: u,
              attribute: "class",
              nonce: e.nonce,
              enableColorScheme: !1,
              enableSystem: "none" !== i,
            };
          let c = "bookingConfigured" === i,
            d = n
              ? (function ({ pathname: e }) {
                  if ("/" === e) return "/";
                  let t = e.split("/").slice(1),
                    r = "team" === t[0],
                    n = "forms" === t[0],
                    s = "d" === t[0],
                    i = t[0].toLowerCase().split(/\+|%2B/).length > 1;
                  return n || s ? t[1] : i ? t[0] : r ? t[1] : t[0];
                })({ pathname: n })
              : null;
          (c || t) &&
            !d &&
            console.error("`themeBasis` is nullish. This should not happen.", { pathname: n });
          let h = d ? `:${d}` : "",
            p = t && o && o !== O.EmbedTheme.auto ? `:${o}` : "",
            m = t
              ? `embed-theme-${r ?? ""}${h}${p}`
              : "appConfigured" === i
                ? "app-theme"
                : c
                  ? `booking-theme${h}`
                  : void 0,
            f = m ? (0, N.sanitizeThemeStorageKey)(m) : m,
            g = s?.get("onboardingEmbed") === "true";
          return {
            storageKey: f,
            forcedTheme:
              (t || g) && l.success && "auto" !== l.data && "system" !== l.data ? l.data : void 0,
            nonce: e.nonce,
            enableColorScheme: !1,
            enableSystem: "none" !== i,
            key: f,
            attribute: "class",
          };
        })({ props: e, isEmbedMode: o, embedNamespace: i, pathname: l, searchParams: s });
        return (0, t.jsxs)(
          x.ThemeProvider,
          {
            ...u,
            children: [
              !o &&
                (0, t.jsx)(n.default, {
                  id: "437a69cba65ccf50",
                  children:
                    ".dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}",
                }),
              e.children,
            ],
          },
          a
        );
      };
    function $({ children: e }) {
      let r = (0, d.useFlags)();
      return (0, t.jsx)(i.FeatureProvider, { value: r, children: e });
    }
    function I({ children: e }) {
      let r,
        n = ((r = (0, y.useSession)()), r?.data?.user.org);
      return (0, t.jsx)(s.OrgBrandingProvider, { value: { orgBrand: n }, children: e });
    }
    let F = (e) => {
      let r,
        n,
        s,
        i = (0, h.default)(),
        o = ((r = (0, p.usePathname)()), !m.some((e) => r?.startsWith(e))),
        l =
          ((n = (0, p.usePathname)()),
          (s = n?.startsWith("/bookings/")),
          (0, a.useMemo)(() => (s ? { processUrlSearchParams: f } : {}), [s])),
        d = (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(g.TooltipProvider, {
            children: (0, t.jsx)(v.TooltipProvider, {
              children: (0, t.jsx)(A, {
                nonce: e.nonce,
                isThemeSupported: o,
                isBookingPage: e.isBookingPage || i,
                children: (0, t.jsx)(R, {
                  ...l,
                  children: (0, t.jsx)($, {
                    children:
                      e.isBookingPage || i
                        ? (0, t.jsx)(I, { children: e.children })
                        : (0, t.jsx)(c, { children: (0, t.jsx)(I, { children: e.children }) }),
                  }),
                }),
              }),
            }),
          }),
        });
      return e.isBookingPage || i
        ? d
        : (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)(u, {
              children: (0, t.jsxs)(L, { children: [(0, t.jsx)(k, {}), d] }),
            }),
          });
    };
    e.s(
      [
        "default",
        0,
        function (e) {
          let n = e.nonce ? "" : void 0,
            s = { ...e, nonce: n };
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)(F, {
              ...s,
              children: (0, t.jsx)(t.Fragment, {
                children: e.requiresLicense
                  ? (0, t.jsx)(r.default, { children: e.children })
                  : (0, t.jsx)(t.Fragment, { children: e.children }),
              }),
            }),
          });
        },
      ],
      842589
    );
  },
  503033,
  (e) => {
    "use strict";
    var t,
      r = e.i(843476),
      n = e.i(83026),
      s = e.i(342471),
      i = e.i(476186),
      o = e.i(673610),
      l = e.i(821410),
      a = e.i(320937),
      u = e.i(522016),
      c = e.i(618566),
      d = e.i(271645),
      h =
        (((t = h || {}).ORG = "ORG"), (t.TEAM = "TEAM"), (t.USER = "USER"), (t.OTHER = "OTHER"), t);
    e.s([
      "NotFound",
      0,
      function ({ host: e }) {
        let { t } = (0, i.useLocale)(),
          h = (0, c.usePathname)() ?? "",
          {
            username: p,
            pageType: m,
            url: f,
          } = (function (e, t) {
            let { isValidOrgDomain: r, currentOrgDomain: s } = (0,
              n.getOrgDomainConfigFromHostname)({ hostname: t }),
              [i] = e?.replace("%20", "-").split(/[?#]/) ?? [];
            if (!i || (r && s))
              return {
                username: s ?? "",
                pageType: "ORG",
                url: `${l.WEBSITE_URL}/signup?callbackUrl=settings/organizations/new%3Fslug%3D${s?.replace("/", "") ?? ""}`,
              };
            {
              let e = i.split("/");
              return "team" === e[1] && 3 === e.length
                ? {
                    username: e[2],
                    pageType: "TEAM",
                    url: `${l.WEBSITE_URL}/signup?callbackUrl=settings/teams/new%3Fslug%3D${e[2].replace("/", "")}`,
                  }
                : {
                    username: i,
                    pageType: "USER",
                    url: `${l.WEBSITE_URL}/signup?username=${i.replace("/", "")}`,
                  };
            }
          })(h, e),
          g = h?.startsWith("/booking"),
          v = h?.includes("/", 2) || g,
          y = h?.startsWith("/insights");
        (0, d.useLayoutEffect)(() => {
          window.CalComPageStatus = "404";
        }, []);
        let x = [
          {
            title: t("enterprise"),
            description: "Learn more about organizations and subdomains in our enterprise plan.",
            icon: a.ShieldIcon,
            href: `${l.WEBSITE_URL}/enterprise`,
          },
          {
            title: t("documentation"),
            description: t("documentation_description"),
            icon: a.FileTextIcon,
            href: l.DOCS_URL,
          },
          {
            title: t("blog"),
            description: t("blog_description"),
            icon: a.BookOpenIcon,
            href: `${l.WEBSITE_URL}/blog`,
          },
        ];
        return y
          ? (0, r.jsx)("div", {
              className: "min-h-screen bg-white px-4",
              "data-testid": "404-page",
              children: (0, r.jsxs)("main", {
                className: "mx-auto max-w-xl pb-6 pt-16 sm:pt-24",
                children: [
                  (0, r.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, r.jsx)("p", {
                        className: "text-sm font-semibold uppercase tracking-wide text-black",
                        children: t("error_404"),
                      }),
                      (0, r.jsx)("h1", {
                        className:
                          "font-heading mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl",
                        children:
                          t("feature_currently_disabled") ?? "Feature is currently disabled",
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "mt-12",
                    children: (0, r.jsx)("div", {
                      className: "mt-8",
                      children: (0, r.jsxs)(u.default, {
                        href: l.WEBSITE_URL,
                        className: "text-base font-medium text-black hover:text-gray-500",
                        children: [
                          t("or_go_back_home"),
                          (0, r.jsx)("span", { "aria-hidden": "true", children: " →" }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            })
          : (0, r.jsx)("div", {
              className: "bg-default min-h-screen px-4",
              "data-testid": "404-page",
              children: (0, r.jsxs)("main", {
                className: "mx-auto max-w-xl pb-6 pt-16 sm:pt-24",
                children: [
                  (0, r.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, r.jsx)("p", {
                        className: "text-emphasis text-sm font-semibold uppercase tracking-wide",
                        children: t("error_404"),
                      }),
                      v && "TEAM" !== m
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)("h1", {
                                className:
                                  "font-heading text-emphasis mt-2 text-4xl font-extrabold sm:text-5xl",
                                children: g ? "Booking not found" : t("page_doesnt_exist"),
                              }),
                              (0, r.jsx)("span", {
                                className: "mt-2 inline-block text-lg",
                                children: t("check_spelling_mistakes_or_go_back"),
                              }),
                            ],
                          })
                        : (l.IS_CALCOM,
                          (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)("span", {
                                className: "text-emphasis mt-2 inline-block text-lg",
                                children: t("page_doesnt_exist"),
                              }),
                              (0, r.jsx)("h1", {
                                className:
                                  "font-cal text-emphasis mt-2 text-4xl font-extrabold sm:text-5xl",
                                children: (0, r.jsx)(o.default, {
                                  t: t,
                                  i18nKey: "username_still_available",
                                  values: {
                                    pageType: t(`404_the_${m.toLowerCase()}`),
                                    username: p ?? "",
                                  },
                                  components: [
                                    (0, r.jsx)("strong", {}, "username"),
                                    (0, r.jsx)(
                                      "span",
                                      { className: "text-green-500" },
                                      "available"
                                    ),
                                  ],
                                }),
                              }),
                              (0, r.jsxs)("a", {
                                target: "_blank",
                                href: f,
                                rel: "noreferrer",
                                className: "mt-2 inline-block text-lg font-semibold text-blue-500",
                                children: [t("register_now"), "→"],
                              }),
                            ],
                          })),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "mt-12",
                    children: [
                      ((!v && l.IS_CALCOM) || "ORG" === m || "TEAM" === m) &&
                        (0, r.jsx)("ul", {
                          role: "list",
                          className: "my-4",
                          children: (0, r.jsx)("li", {
                            className: "border-2 border-green-500 px-4 py-2",
                            children: (0, r.jsxs)("a", {
                              href: f,
                              target: "_blank",
                              className:
                                "relative flex items-start space-x-4 py-6 rtl:space-x-reverse",
                              rel: "noreferrer",
                              children: [
                                (0, r.jsx)("div", {
                                  className: "shrink-0",
                                  children: (0, r.jsx)("span", {
                                    className:
                                      "flex h-12 w-12 items-center justify-center rounded-lg bg-green-50",
                                    children: (0, r.jsx)(a.CheckIcon, {
                                      size: 24,
                                      className: "text-green-500",
                                      "aria-hidden": "true",
                                    }),
                                  }),
                                }),
                                (0, r.jsxs)("div", {
                                  className: "min-w-0 flex-1",
                                  children: [
                                    (0, r.jsx)("h3", {
                                      className: "text-emphasis text-base font-medium",
                                      children: (0, r.jsx)("span", {
                                        className:
                                          "focus-within:ring-empthasis rounded-sm focus-within:ring-2 focus-within:ring-offset-2",
                                        children: (0, r.jsxs)("span", {
                                          className: "focus:outline-none",
                                          children: [
                                            (0, r.jsx)("span", {
                                              className: "absolute inset-0",
                                              "aria-hidden": "true",
                                            }),
                                            t("register"),
                                            " ",
                                            (0, r.jsx)("strong", {
                                              className: "text-green-500",
                                              children: `${"TEAM" === m ? `${new URL(l.WEBSITE_URL).host}/team/` : ""}${p}${"ORG" === m ? `.${(0, s.subdomainSuffix)()}` : ""}`,
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                    (0, r.jsx)("p", {
                                      className: "text-subtle text-base",
                                      children: t(`404_claim_entity_${m.toLowerCase()}`),
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("div", {
                                  className: "shrink-0 self-center",
                                  children: (0, r.jsx)(a.ChevronRightIcon, {
                                    size: 20,
                                    className: "text-muted",
                                    "aria-hidden": "true",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      (0, r.jsx)("h2", {
                        className: "text-subtle text-sm font-semibold uppercase tracking-wide",
                        children: t("popular_pages"),
                      }),
                      (0, r.jsx)("ul", {
                        role: "list",
                        className: "border-subtle divide-subtle divide-y",
                        children: x
                          .filter((e, t) => "ORG" === m || 0 !== t)
                          .map((e, t) => {
                            let n = e.icon;
                            return (0, r.jsx)(
                              "li",
                              {
                                className: "px-4 py-2",
                                children: (0, r.jsxs)("a", {
                                  href: e.href,
                                  className:
                                    "relative flex items-start space-x-4 py-6 rtl:space-x-reverse",
                                  children: [
                                    (0, r.jsx)("div", {
                                      className: "shrink-0",
                                      children: (0, r.jsx)("span", {
                                        className:
                                          "bg-cal-muted flex h-12 w-12 items-center justify-center rounded-lg",
                                        children: (0, r.jsx)(n, {
                                          size: 24,
                                          className: "text-default",
                                          "aria-hidden": "true",
                                        }),
                                      }),
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "min-w-0 flex-1",
                                      children: [
                                        (0, r.jsx)("h3", {
                                          className: "text-emphasis text-base font-medium",
                                          children: (0, r.jsxs)("span", {
                                            className:
                                              "focus-within:ring-empthasis rounded-sm focus-within:ring-2 focus-within:ring-offset-2",
                                            children: [
                                              (0, r.jsx)("span", {
                                                className: "absolute inset-0",
                                                "aria-hidden": "true",
                                              }),
                                              e.title,
                                            ],
                                          }),
                                        }),
                                        (0, r.jsx)("p", {
                                          className: "text-subtle text-base",
                                          children: e.description,
                                        }),
                                      ],
                                    }),
                                    (0, r.jsx)("div", {
                                      className: "shrink-0 self-center",
                                      children: (0, r.jsx)(a.ChevronRightIcon, {
                                        size: 20,
                                        className: "text-muted",
                                        "aria-hidden": "true",
                                      }),
                                    }),
                                  ],
                                }),
                              },
                              t
                            );
                          }),
                      }),
                      (0, r.jsx)("div", {
                        className: "mt-8",
                        children: (0, r.jsxs)(u.default, {
                          href: l.WEBSITE_URL,
                          className: "hover:text-subtle text-emphasis text-base font-medium",
                          children: [
                            t("or_go_back_home"),
                            (0, r.jsx)("span", { "aria-hidden": "true", children: " →" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            });
      },
    ]);
  },
  14723,
  (e) => {
    e.v((t) =>
      Promise.all(["static/chunks/0rz5a4rzwi8qq.js"].map((t) => e.l(t))).then(() => t(131452))
    );
  },
  771570,
  (e) => {
    e.v((t) =>
      Promise.all(
        [
          "static/chunks/0_mtser9-ksas.js",
          "static/chunks/0s526~4qlb.f0.js",
          "static/chunks/0yw-i2k4xto-5.js",
        ].map((t) => e.l(t))
      ).then(() => t(453618))
    );
  },
  667579,
  (e) => {
    e.v((t) =>
      Promise.all(
        ["static/chunks/136t5k.2nt4et.js", "static/chunks/05g9eq~4-erv3.js"].map((t) => e.l(t))
      ).then(() => t(132693))
    );
  },
  321994,
  (e) => {
    e.v((t) =>
      Promise.all(
        ["static/chunks/0ci9eraraf-mv.js", "static/chunks/05g9eq~4-erv3.js"].map((t) => e.l(t))
      ).then(() => t(17567))
    );
  },
]);
