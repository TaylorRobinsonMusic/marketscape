(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  313069,
  (e) => {
    "use strict";
    var t = e.i(271645);
    let r = () => {};
    e.s([
      "default",
      0,
      (e) => {
        let n = (0, t.useCallback)(
            (t) => {
              let r = window.matchMedia(e);
              return (r.addEventListener("change", t), () => r.removeEventListener("change", t));
            },
            [e]
          ),
          s = (0, t.useCallback)(() => window.matchMedia(e).matches, [e]);
        return (0, t.useSyncExternalStore)(n, s, r) ?? !1;
      },
    ]);
  },
  478618,
  (e) => {
    "use strict";
    var t = e.i(618566);
    e.s([
      "useCompatSearchParams",
      0,
      () => {
        let e = (0, t.useSearchParams)() ?? new URLSearchParams(),
          r = (0, t.useParams)() ?? {},
          n = new URLSearchParams(e.toString());
        return (
          Object.getOwnPropertyNames(r).forEach((e) => {
            n.delete(e);
            let t = r[e],
              s = "string" == typeof t ? t.split("/") : t;
            s?.forEach((t) => {
              n.append(e, t);
            });
          }),
          new t.ReadonlyURLSearchParams(n)
        );
      },
    ]);
  },
  436864,
  111914,
  867426,
  (e) => {
    "use strict";
    let t;
    e.s(
      [
        "updateEmbedBookerState",
        () => U,
        "useEmbedNonStylesConfig",
        () => C,
        "useEmbedStyles",
        () => P,
        "useEmbedType",
        () => N,
        "useEmbedUiConfig",
        () => L,
        "useIsBackgroundTransparent",
        () => k,
        "useIsEmbed",
        () => T,
      ],
      436864
    );
    var r,
      n = e.i(271645),
      s = e.i(247167);
    function i(e) {
      return !!e.isEmbed && !!e.getEmbedNamespace && !!e.getEmbedTheme;
    }
    function a(e, t) {
      let r = new window.CustomEvent(e, { detail: t });
      window.dispatchEvent(r);
    }
    let o = null;
    function l(e) {
      return setTimeout(e, 50);
    }
    function u() {
      return "slotsDone" === window._embedBookerState;
    }
    ((t = (function (e) {
      if (i(e)) return e;
      let t = new URL(document.URL),
        r = t.searchParams.get("embed"),
        n = t.pathname.endsWith("/embed"),
        s =
          "string" == typeof r
            ? r
            : e.name.includes("cal-embed=")
              ? e.name.replace(/cal-embed=(.*)/, "$1").trim()
              : n
                ? ""
                : null;
      if (
        ((e.isEmbed = () => "string" == typeof s),
        (e.getEmbedTheme = () =>
          e.CalEmbed.embedStore.theme
            ? e.CalEmbed.embedStore.theme
            : new URL(document.URL).searchParams.get("theme")),
        (e.getEmbedNamespace = () => s),
        (e.CalEmbed = e.CalEmbed || {}),
        (e.CalEmbed.applyCssVars = (e) => {
          let t = [];
          if (e)
            for (let [r, n] of Object.entries(e)) {
              for (let [e, s] of (t.push(`.${r} {`), Object.entries(n)))
                t.push(`--${e}: ${s} !important;`);
              t.push("}");
            }
          let r = document.head.querySelector("#embed-css-vars");
          if (r) {
            (console.warn("Existing embed CSS Vars are being reset"), (r.innerText = t.join("\n")));
            return;
          }
          let n = document.createElement("style");
          ((n.id = "embed-css-vars"), (n.innerText = t.join("\n")), document.head.appendChild(n));
        }),
        !i(e))
      )
        throw Error("EmbedInitIframe failed to initialize all required embed functions on window");
      return e;
    })(window)),
      (o = new (class {
        namespace;
        static parseAction(e) {
          if (!e) return null;
          let [t, r, n] = e.split(":");
          return "CAL" !== t ? null : { ns: r, type: n };
        }
        getFullActionName(e) {
          return this.namespace ? `CAL:${this.namespace}:${e}` : `CAL::${e}`;
        }
        fire(e, t) {
          let r = this.getFullActionName(e),
            n = { type: e, namespace: this.namespace, fullType: r, data: t };
          (a(r, n), a(this.getFullActionName("*"), n));
        }
        on(e, t) {
          let r = this.getFullActionName(e);
          window.addEventListener(r, t);
        }
        off(e, t) {
          let r = this.getFullActionName(e);
          window.removeEventListener(r, t);
        }
        constructor(e) {
          ((e = e || ""), (this.namespace = e));
        }
      })(t.getEmbedNamespace())),
      e.s(["embedWindow", 0, t, "sdkActionManager", 0, o], 111914));
    let d = () => "true" === new URL(document.URL).searchParams.get("prerender");
    function c({ embedStore: e }) {
      return (
        !!e.providedCorrectHeightToParent &&
        (!(
          window._embedBookerState && new URL(document.URL).searchParams.get("cal.embed.pageType")
        ) ||
          u())
      );
    }
    let m = async (e) => {
      let t = new URL(document.URL),
        r = null,
        n = t.searchParams.get("cal.queuedFormResponseId");
      if (!n) return null;
      if (
        "00000000-0000-0000-0000-000000000000" === n ||
        "true" === t.searchParams.get("cal.isBookingDryRun")
      )
        return 0;
      let { form: s, ...i } = e,
        a = await fetch("/api/routing-forms/queued-response", {
          method: "POST",
          body: JSON.stringify({ queuedFormResponseId: n, params: i }),
        });
      if (!a.ok) return null;
      let o = (await a.json()).data.formResponseId;
      return (o && (r = o), r);
    };
    function g(...e) {
      {
        let r = t?.getEmbedNamespace() ?? null,
          n = new URL(document.URL).searchParams,
          i = (window.CalEmbed.__logQueue = window.CalEmbed.__logQueue || []);
        (e.push({ ns: r, url: document.URL }),
          e.unshift("CAL:"),
          i.push(e),
          (n.get("debug") || "true" === s.default.env.INTEGRATION_TEST_MODE) &&
            console.log("Child:", ...e));
      }
    }
    var f =
      (((r = {})[(r.NOT_INITIALIZED = 0)] = "NOT_INITIALIZED"),
      (r[(r.INITIALIZED = 1)] = "INITIALIZED"),
      r);
    let h = {
      connectVersion: 0,
      renderState: null,
      router: {
        ensureQueryParamsInUrl({ toBeThereParams: e, toRemoveParams: t }) {
          let r = !1,
            { hasChanged: n } = (function n() {
              if (r) return { hasChanged: !1 };
              let s = new URL(document.URL),
                i = !1;
              for (let [t, r] of Object.entries(e))
                (i = !(function ({ param: e, value: t, container: r }) {
                  let n = (function (e) {
                    let t = {};
                    if (null === e) return t;
                    for (let [r, n] of e)
                      if (t.hasOwnProperty(r)) {
                        let e = t[r];
                        (Array.isArray(e) || (e = [e]), e.push(n), (t[r] = e));
                      } else t[r] = n;
                    return t;
                  })(r.entries());
                  if (!r.has(e)) return !1;
                  let s = n[e],
                    i = Array.isArray(t) ? t : [t];
                  return i.length === s.length && i.every((e) => s.includes(e));
                })({ param: t, value: r, container: s.searchParams })) &&
                  (function ({ key: e, value: t, url: r }) {
                    (r.searchParams.delete(e),
                      (Array.isArray(t) ? t : [t]).forEach((t) => {
                        r.searchParams.append(e, t);
                      }));
                  })({ key: t, value: r, url: s });
              return (
                (function ({ keys: e, url: t }) {
                  for (let r of e) t.searchParams.delete(r);
                })({ keys: t, url: s }),
                (i = i || t.length > 0) && window.history.replaceState({}, "", s.toString()),
                l(n),
                { hasChanged: i }
              );
            })();
          return {
            stopEnsuringQueryParamsInUrl: () => {
              r = !0;
            },
            hasChanged: n,
          };
        },
      },
      state: 0,
      styles: {},
      nonStyles: {},
      namespace: null,
      embedType: void 0,
      reactStylesStateSetters: {},
      reactNonStylesStateSetters: {},
      providedCorrectHeightToParent: !1,
      windowLoadEventFired: !1,
      setTheme: void 0,
      theme: void 0,
      uiConfig: void 0,
      setUiConfig: [],
      viewId: null,
      pageData: {
        eventsState: {
          bookerViewed: { hasFired: !1 },
          bookerReopened: { hasFired: !1 },
          bookerReloaded: { hasFired: !1 },
          bookerReady: { hasFired: !1 },
        },
        reloadInitiated: !1,
      },
    };
    function p(e) {
      return h.pageData.eventsState[e].hasFired;
    }
    function y(e, t) {
      h.pageData.eventsState[e].hasFired = t;
    }
    let b = {
      "cal-radius": "radius",
      "cal-radius-sm": "radius-sm",
      "cal-radius-md": "radius-md",
      "cal-radius-lg": "radius-lg",
      "cal-radius-xl": "radius-xl",
      "cal-radius-2xl": "radius-2xl",
      "cal-radius-3xl": "radius-3xl",
      "cal-radius-full": "radius-full",
      "cal-radius-none": "radius-none",
      "cal-spacing-px": "spacing",
    };
    (e.i(478618),
      e.s(["useBookerEmbedEvents", () => S, "useSlotsViewOnSmallScreen", () => v], 867426));
    var w = e.i(313069);
    let S = ({ eventId: e, eventSlug: t, schedule: r }) => {
        let n = h.viewId;
        !d() &&
          n &&
          ((({ eventId: e, eventSlug: t, slotsLoaded: r }) => {
            var n;
            let s = 1 === h.viewId,
              i = h.pageData.reloadInitiated
                ? "bookerReloaded"
                : s
                  ? "bookerViewed"
                  : "bookerReopened";
            p(i) ||
              (y((n = i), !0),
              r
                ? e && t
                  ? o?.fire(n, { eventId: e, eventSlug: t, slotsLoaded: !0 })
                  : console.error(
                      "BookerViewed event not fired because slotsLoaded is true but eventId or eventSlug are falsy"
                    )
                : o?.fire(n, { eventId: null, eventSlug: null, slotsLoaded: !1 }));
          })({ eventId: e, eventSlug: t, slotsLoaded: r.isSuccess }),
          e &&
            t &&
            (({ eventId: e, eventSlug: t, slotsLoaded: r }) => {
              r &&
                (p("bookerReady") ||
                  (o?.fire("bookerReady", { eventId: e, eventSlug: t }), y("bookerReady", !0)));
            })({ eventId: e, eventSlug: t, slotsLoaded: r.isSuccess }));
      },
      v = () => {
        let e = T(),
          t = (0, w.default)("(max-width: 768px)"),
          r = L();
        return !!e && !!t && (r.useSlotsViewOnSmallScreen ?? !1);
      },
      E = ["__iframeReady", "__dimensionChanged", "__connectInitiated", "linkPrerendered"];
    {
      ((window.CalEmbed = window?.CalEmbed || {}),
        (window.CalEmbed.embedStore = h),
        (window.CalEmbed.sdkActionManager = o));
      let e = navigator.userAgent.toLowerCase();
      e.includes("safari") &&
        !e.includes("chrome") &&
        g("Safari Detected: Using setTimeout instead of rAF");
    }
    let O = (e) =>
        e.styles
          ? ((h.reactStylesStateSetters[e.elementName] = e.setState),
            e.setState(h.styles || {}),
            () => {
              delete h.reactStylesStateSetters[e.elementName];
            })
          : ((h.reactNonStylesStateSetters[e.elementName] = e.setState),
            e.setState(h.nonStyles || {}),
            () => {
              delete h.reactNonStylesStateSetters[e.elementName];
            }),
      L = () => {
        let [e, t] = (0, n.useState)(h.uiConfig || {});
        return (
          h.setUiConfig.push(t),
          (0, n.useEffect)(() => () => {
            let e = h.setUiConfig.findIndex((e) => e === t);
            h.setUiConfig.splice(e, 1);
          }),
          e
        );
      },
      P = (e) => {
        let [, t] = (0, n.useState)({});
        return (
          (0, n.useEffect)(() => O({ elementName: e, setState: t, styles: !0 }), []),
          (h.styles || {})[e] || {}
        );
      },
      C = (e) => {
        let [, t] = (0, n.useState)({});
        return (
          (0, n.useEffect)(() => O({ elementName: e, setState: t, styles: !1 }), []),
          (h.nonStyles || {})[e] || {}
        );
      },
      k = () => {
        let e = !1;
        return ("transparent" === P("body").background && (e = !0), e);
      },
      T = () => {
        let e = t?.isEmbed() || !1,
          [r, s] = (0, n.useState)(e);
        return (
          (0, n.useEffect)(() => {
            let e =
              null !=
              (function () {
                if (null != h.namespace) return h.namespace;
                {
                  let e = t?.getEmbedNamespace() ?? null;
                  return ((h.namespace = e), e);
                }
              })();
            (parent === window ||
              e ||
              g(
                "Looks like you have iframed cal.com but not using Embed Snippet. Directly using an iframe isn't recommended."
              ),
              s(t?.isEmbed() || !1));
          }, []),
          r
        );
      },
      N = () => {
        let [e, t] = (0, n.useState)(null);
        return (
          (0, n.useEffect)(() => {
            t(
              h.embedType
                ? h.embedType
                : (h.embedType = new URL(document.URL).searchParams.get("embedType"))
            );
          }, []),
          e
        );
      };
    function j() {
      "u" > typeof document &&
        document.body &&
        ("visible" !== document.body.style.visibility &&
          (document.body.style.visibility = "visible"),
        "1" !== document.body.style.opacity && (document.body.style.opacity = "1"),
        l(() => {
          j();
        }));
    }
    async function I({ newlyRecordedResponseId: e, toBeThereParams: t, toRemoveParams: r }) {
      let { stopEnsuringQueryParamsInUrl: n } = h.router.ensureQueryParamsInUrl({
        toBeThereParams: { ...t, "cal.routingFormResponseId": e.toString() },
        toRemoveParams: r,
      });
      n();
    }
    async function R() {
      return new Promise((e) => {
        !(function t() {
          "completed" !== h.renderState ? l(t) : e();
        })();
      });
    }
    let A = {
      ui: function (e) {
        let t;
        g("Method: ui called", e);
        let r = e.styles;
        (r &&
          console.warn(
            "Cal.com Embed: `styles` prop is deprecated. Use `cssVarsPerTheme` instead to achieve the same effect. Here is a list of CSS variables that are supported. https://github.com/calcom/cal.com/blob/main/packages/config/tailwind-preset.js#L19"
          ),
          r?.body?.background && (document.body.style.background = r.body.background),
          e.theme && ((h.theme = e.theme), h.setTheme && h.setTheme(e.theme)));
        let n = h.uiConfig?.cssVarsPerTheme,
          s = e.cssVarsPerTheme;
        if (n || s)
          for (let e of ((t = {}),
          Array.from(new Set([...(n ? Object.keys(n) : []), ...(s ? Object.keys(s) : [])]))))
            t[e] = { ...n?.[e], ...s?.[e] };
        let i = e;
        if ((e = { ...h.uiConfig, ...i, ...(t ? { cssVarsPerTheme: t } : {}) }).cssVarsPerTheme) {
          let t = (function (e) {
            if (!e) return e;
            let t = {};
            for (let [r, n] of Object.entries(e))
              for (let [e, s] of ((t[r] = {}), Object.entries(n))) {
                let n = b[e];
                if (!n) {
                  t[r][e] = s;
                  continue;
                }
                (console.log("Mapped variable:", e, "to", n), (t[r][n] = s));
              }
            return t;
          })(e.cssVarsPerTheme);
          window.CalEmbed.applyCssVars(t);
        }
        (e.colorScheme && F(e.colorScheme),
          h.setUiConfig && ((h.uiConfig = a = e), h.setUiConfig.forEach((e) => e(a))));
        var a,
          o = r || {};
        for (let [, e] of ((h.styles = o), Object.entries(h.reactStylesStateSetters)))
          e((e) => ({ ...e, ...o }));
        var l = r || {};
        for (let [, e] of ((h.nonStyles = l), Object.entries(h.reactStylesStateSetters)))
          e((e) => ({ ...e, ...l }));
      },
      parentKnowsIframeReady: (e) => {
        (g("Method: `parentKnowsIframeReady` called"),
          l(function e() {
            c({ embedStore: h })
              ? _()
                ? M(window.CalComPageStatus)
                : (j(),
                  g("renderState is 'completed'"),
                  (h.renderState = "completed"),
                  d() ? o?.fire("linkPrerendered", {}) : o?.fire("linkReady", {}))
              : l(e);
          }));
      },
      connect: async function ({ config: e, params: t }) {
        (o?.fire("__connectInitiated", {}),
          g("Method: connect, requested with params", { config: e, params: t }));
        let { iframeAttrs: r, "cal.embed.noSlotsFetchOnConnect": n, ...s } = e;
        ((h.providedCorrectHeightToParent = !1),
          "true" !== n &&
            (g("Method: connect, noSlotsFetchOnConnect is false. Requesting slots re-fetch"),
            (h.connectVersion = h.connectVersion + 1)));
        let i = h.connectVersion,
          a = { ...t, ...s, "cal.embed.connectVersion": i.toString() },
          l = ["preload", "prerender", "cal.skipSlotsFetch"];
        (await R(),
          g("Method: connect, renderState is completed. Connecting"),
          await x({ toBeThereParams: a, toRemoveParams: l }));
        let u = await m(t);
        "number" == typeof u &&
          (await I({ newlyRecordedResponseId: u, toBeThereParams: a, toRemoveParams: l }));
      },
      __reloadInitiated: function (e) {
        (g("Method: __reloadInitiated called"), (h.pageData.reloadInitiated = !0));
      },
    };
    function _() {
      let e = window.CalComPageStatus;
      return !!(e && "200" != e);
    }
    function M(e) {
      o?.fire("linkFailed", {
        code: e,
        msg: "Problem loading the link",
        data: { url: document.URL },
      });
    }
    function F(e) {
      e && (document.documentElement.style.colorScheme = e);
    }
    async function x({ toBeThereParams: e, toRemoveParams: t }) {
      let { hasChanged: r, stopEnsuringQueryParamsInUrl: n } = h.router.ensureQueryParamsInUrl({
          toBeThereParams: e,
          toRemoveParams: t,
        }),
        s = 0;
      return (
        u() && r && (s = 2),
        await new Promise((e) => {
          l(function t() {
            if (!c({ embedStore: h }) || s > 0) {
              (s--, l(t));
              return;
            }
            if (_()) {
              (M(window.CalComPageStatus), e());
              return;
            }
            (n(), o?.fire("__connectCompleted", {}), o?.fire("linkReady", {}), e());
          });
        }),
        { stopEnsuringQueryParamsInUrl: n }
      );
    }
    function U({ bookerState: e, slotsQuery: t }) {
      window._embedBookerState = (function ({ bookerState: e, slotsQuery: t }) {
        return "loading" === e
          ? "initializing"
          : t.isLoading
            ? "slotsLoading"
            : t.isPending || t.isSuccess
              ? "slotsDone"
              : t.isError
                ? "slotsLoadingError"
                : "slotsPending";
      })({ bookerState: e, slotsQuery: t });
    }
    !(function () {
      g("Embed SDK loaded", { isEmbed: t?.isEmbed() || !1 });
      let e = new URL(document.URL);
      h.theme = t?.getEmbedTheme();
      let r = e.searchParams.get("ui.autoscroll"),
        n = e.searchParams.get("useSlotsViewOnSmallScreen"),
        s = e.searchParams.get("showTimezoneWhenEventDetailsHidden");
      if (
        ((h.uiConfig = {
          colorScheme: e.searchParams.get("ui.color-scheme"),
          layout: e.searchParams.get("layout"),
          disableAutoScroll: "false" === r,
          useSlotsViewOnSmallScreen: (n ?? "false") === "true",
          showTimezoneWhenEventDetailsHidden: (s ?? "false") === "true",
        }),
        F(h.uiConfig.colorScheme),
        top === window)
      ) {
        (j(),
          "transparent" === document.body.style.background && (document.body.style.background = ""),
          g("Embed SDK Skipped as we are in top"));
        return;
      }
      let i = "true" !== e.searchParams.get("cal.skipSlotsFetch");
      (g(`Slots will ${i ? "" : "NOT "}be fetched`),
        window.addEventListener("message", (e) => {
          let t = e.data;
          if (!t) return;
          let r = t.method;
          "CAL" === t.originator && "string" == typeof r && A[r]?.(t.arg);
        }),
        document.addEventListener("click", (e) => {
          if (!e.target || !(e.target instanceof Node)) return;
          let t =
            document.getElementsByClassName("main")[0] ||
            document.getElementsByTagName("main")[0] ||
            document.documentElement;
          e.target.contains(t) && o?.fire("__closeIframe", {});
        }),
        o?.on("linkReady", () => {
          !d() &&
            (g("Resetting page data"),
            (h.pageData = {
              eventsState: {
                bookerViewed: { hasFired: !1 },
                bookerReopened: { hasFired: !1 },
                bookerReloaded: { hasFired: !1 },
                bookerReady: { hasFired: !1 },
              },
              reloadInitiated: !1,
            }),
            h.viewId ? h.viewId++ : (h.viewId = 1));
        }),
        o?.on("*", (e) => {
          if (d() && !E.includes(e.detail.type)) return;
          let t = e.detail;
          (g(t), parent.postMessage({ originator: "CAL", ...t }, "*"));
        }),
        "true" !== e.searchParams.get("preload") && t?.isEmbed()
          ? (function () {
              if (
                (o?.fire("__iframeReady", { isPrerendering: d() }),
                (h.renderState = "inProgress"),
                h.state !== f.NOT_INITIALIZED)
              )
                return g("Embed Iframe already initialized");
              ((h.state = f.INITIALIZED), g("Initializing embed-iframe"));
              let e = window.CalComPageStatus;
              _()
                ? M(e)
                : (function ({ embedStore: e }) {
                    let t = null,
                      r = null,
                      n = !0,
                      s = !1;
                    l(function i() {
                      if ("u" < typeof document) return;
                      if ("complete" !== document.readyState) return void l(i);
                      if (!s)
                        return void setTimeout(() => {
                          ((s = !0), i());
                        }, 100);
                      (e.windowLoadEventFired || o?.fire("__windowLoadComplete", {}),
                        (e.windowLoadEventFired = !0));
                      let a =
                          document.getElementsByClassName("main")[0] ||
                          document.getElementsByTagName("main")[0] ||
                          document.documentElement,
                        u = document.documentElement.scrollHeight,
                        d = document.documentElement.scrollWidth;
                      if (!(a instanceof HTMLElement))
                        throw Error("Main element should be an HTMLElement");
                      let c = getComputedStyle(a),
                        m = Math.ceil(
                          parseFloat(c.height) +
                            parseFloat(c.marginTop) +
                            parseFloat(c.marginBottom)
                        ),
                        g = Math.ceil(
                          parseFloat(c.width) + parseFloat(c.marginLeft) + parseFloat(c.marginRight)
                        ),
                        f = n ? u : m,
                        h = n ? d : g;
                      (f &&
                        h &&
                        ((t === f && r === h && e.providedCorrectHeightToParent) ||
                          ((t = f),
                          (r = h),
                          o?.fire("__dimensionChanged", {
                            iframeHeight: f,
                            iframeWidth: h,
                            isFirstTime: n,
                          })),
                        n || (e.providedCorrectHeightToParent = !0),
                        (n = !1)),
                        l(i));
                    });
                  })({ embedStore: h });
            })()
          : g(
              "Preloaded scenario - Skipping initialization and setup as only assets need to be loaded"
            ));
    })();
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
    function r(e, n, s, i = !1) {
      let a = String(n),
        o = (e, t) => `\u001b[${t[0]}m${e}\u001b[${t[1]}m`,
        l = (e, r) =>
          null != r && "string" == typeof r
            ? o(e, t[r])
            : null != r && Array.isArray(r)
              ? r.reduce((e, t) => l(e, t), e)
              : null != r && null != r[e.trim()]
                ? l(e, r[e.trim()])
                : null != r && null != r["*"]
                  ? l(e, r["*"])
                  : e;
      return a.replace(/{{(.+?)}}/g, (r, n) => {
        let a = null != s[n] ? String(s[n]) : i ? "" : r;
        return e.stylePrettyLogs ? l(a, e?.prettyLogStyles?.[n] ?? null) + o("", t.reset) : a;
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
    function s(e) {
      let t = new Set();
      return JSON.stringify(e, (e, r) => {
        if ("object" == typeof r && null !== r) {
          if (t.has(r)) return "[Circular]";
          t.add(r);
        }
        return r;
      });
    }
    function i(e, t) {
      let r = { seen: [], stylize: o };
      return (
        null != t && v(r, t),
        a(r.showHidden) && (r.showHidden = !1),
        a(r.depth) && (r.depth = 2),
        a(r.colors) && (r.colors = !0),
        a(r.customInspect) && (r.customInspect = !0),
        r.colors && (r.stylize = l),
        b(r, e, r.depth)
      );
    }
    function a(e) {
      return void 0 === e;
    }
    function o(e) {
      return e;
    }
    function l(e, t) {
      let r = i.styles[t];
      return null != r && i?.colors?.[r]?.[0] != null && i?.colors?.[r]?.[1] != null
        ? "\x1b[" + i.colors[r][0] + "m" + e + "\x1b[" + i.colors[r][1] + "m"
        : e;
    }
    function u(e) {
      return "function" == typeof e;
    }
    function d(e) {
      return "string" == typeof e;
    }
    ((i.colors = t),
      (i.styles = {
        special: "cyan",
        number: "yellow",
        boolean: "yellow",
        undefined: "grey",
        null: "bold",
        string: "green",
        date: "magenta",
        regexp: "red",
      }));
    function c(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    function m(e) {
      return g(e) && "[object RegExp]" === p(e);
    }
    function g(e) {
      return "object" == typeof e && null !== e;
    }
    function f(e) {
      return g(e) && ("[object Error]" === p(e) || e instanceof Error);
    }
    function h(e) {
      return g(e) && "[object Date]" === p(e);
    }
    function p(e) {
      return Object.prototype.toString.call(e);
    }
    function y(e) {
      return "[" + Error.prototype.toString.call(e) + "]";
    }
    function b(e, t, r = 0) {
      var n, s, a;
      let o, l;
      if (
        e.customInspect &&
        null != t &&
        u(t) &&
        t?.inspect !== i &&
        !(t?.constructor && t?.constructor.prototype === t)
      ) {
        if ("function" != typeof t.inspect && null != t.toString) return t.toString();
        let n = t?.inspect(r, e);
        return (d(n) || (n = b(e, n, r)), n);
      }
      let g = S(e, t);
      if (g) return g;
      let p = Object.keys(t),
        v =
          ((l = {}),
          p.forEach((e) => {
            l[e] = !0;
          }),
          l);
      try {
        e.showHidden && Object.getOwnPropertyNames && (p = Object.getOwnPropertyNames(t));
      } catch (e) {}
      if (f(t) && (p.indexOf("message") >= 0 || p.indexOf("description") >= 0)) return y(t);
      if (0 === p.length)
        if (!u(e.stylize)) return t;
        else {
          if (u(t)) {
            let r = t.name ? ": " + t.name : "";
            return e.stylize("[Function" + r + "]", "special");
          }
          if (m(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
          if (h(t)) return e.stylize(Date.prototype.toISOString.call(t), "date");
          if (f(t)) return y(t);
        }
      let E = "",
        O = !1,
        L = ["{\n", "\n}"];
      if (
        (Array.isArray(t) && ((O = !0), (L = ["[\n", "\n]"])),
        u(t) && (E = " [Function" + (t.name ? ": " + t.name : "") + "]"),
        m(t) && (E = " " + RegExp.prototype.toString.call(t)),
        h(t) && (E = " " + Date.prototype.toUTCString.call(t)),
        f(t) && (E = " " + y(t)),
        0 === p.length && (!O || 0 == t.length))
      )
        return L[0] + E + L[1];
      if (r < 0)
        if (m(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
        else return e.stylize("[Object]", "special");
      return (
        e.seen.push(t),
        (o = O
          ? (function (e, t, r, n, s) {
              let i = [];
              for (let s = 0, a = t.length; s < a; ++s)
                c(t, String(s)) ? i.push(w(e, t, r, n, String(s), !0)) : i.push("");
              return (
                s.forEach((s) => {
                  s.match(/^\d+$/) || i.push(w(e, t, r, n, s, !0));
                }),
                i
              );
            })(e, t, r, v, p)
          : p.map((n) => w(e, t, r, v, n, O))),
        e.seen.pop(),
        (n = o),
        (s = E),
        (a = L)[0] + ("" === s ? "" : s + "\n") + "  " + n.join(",\n  ") + " " + a[1]
      );
    }
    function w(e, t, r, n, s, i) {
      let o,
        l,
        u = { value: void 0 };
      try {
        u.value = t[s];
      } catch (e) {}
      try {
        Object.getOwnPropertyDescriptor && (u = Object.getOwnPropertyDescriptor(t, s) || u);
      } catch (e) {}
      if (
        (u.get
          ? (l = u.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special"))
          : u.set && (l = e.stylize("[Setter]", "special")),
        c(n, s) || (o = "[" + s + "]"),
        !l &&
          (0 > e.seen.indexOf(u.value)
            ? (l = null === r ? b(e, u.value, void 0) : b(e, u.value, r - 1)).indexOf("\n") > -1 &&
              (l = i
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
        a(o))
      ) {
        if (i && s.match(/^\d+$/)) return l;
        (o = JSON.stringify("" + s)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
          ? ((o = o.substr(1, o.length - 2)), (o = e.stylize(o, "name")))
          : ((o = o
              .replace(/'/g, "\\'")
              .replace(/\\"/g, "\\'")
              .replace(/(^"|"$)/g, "'")),
            (o = e.stylize(o, "string")));
      }
      return o + ": " + l;
    }
    function S(e, t) {
      if (a(t)) return e.stylize("undefined", "undefined");
      if (d(t)) {
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
    function v(e, t) {
      if (!t || !g(t)) return e;
      let r = { ...e },
        n = { ...t },
        s = Object.keys(t),
        i = s.length;
      for (; i--; ) r[s[i]] = n[s[i]];
      return e;
    }
    let E = {
        getCallerStackFrame: P,
        getErrorTrace: C,
        getMeta: function (e, t, r, n, s, i) {
          return Object.assign({}, O, {
            name: s,
            parentNames: i,
            date: new Date(),
            logLevelId: e,
            logLevelName: t,
            path: n ? void 0 : P(r),
          });
        },
        transportJSON: function (e) {
          console.log(s(e));
        },
        transportFormatted: function (e, t, r, n) {
          let a = (r.length > 0 && t.length > 0 ? "\n" : "") + r.join("\n");
          ((n.prettyInspectOptions.colors = n.stylePrettyLogs),
            console.log(
              e +
                (function (e, ...t) {
                  let r = { seen: [], stylize: o };
                  null != e && v(r, e);
                  let n = t[0],
                    a = 0,
                    l = "",
                    u = "";
                  if ("string" == typeof n) {
                    let o;
                    if (1 === t.length) return n;
                    let d = 0;
                    for (let u = 0; u < n.length - 1; u++)
                      if (37 === n.charCodeAt(u)) {
                        let c = n.charCodeAt(++u);
                        if (a + 1 !== t.length) {
                          switch (c) {
                            case 115: {
                              let n = t[++a];
                              o =
                                "number" == typeof n || "bigint" == typeof n
                                  ? S(r, n)
                                  : "object" != typeof n || null === n
                                    ? String(n)
                                    : i(n, { ...e, compact: 3, colors: !1, depth: 0 });
                              break;
                            }
                            case 106:
                              o = s(t[++a]);
                              break;
                            case 100: {
                              let e = t[++a];
                              o =
                                "bigint" == typeof e
                                  ? S(r, e)
                                  : "symbol" == typeof e
                                    ? "NaN"
                                    : S(r, e);
                              break;
                            }
                            case 79:
                              o = i(t[++a], e);
                              break;
                            case 111:
                              o = i(t[++a], { ...e, showHidden: !0, showProxy: !0, depth: 4 });
                              break;
                            case 105: {
                              let e = t[++a];
                              o =
                                "bigint" == typeof e
                                  ? S(r, e)
                                  : "symbol" == typeof e
                                    ? "NaN"
                                    : S(r, parseInt(o));
                              break;
                            }
                            case 102: {
                              let e = t[++a];
                              o = "symbol" == typeof e ? "NaN" : S(r, parseInt(e));
                              break;
                            }
                            case 99:
                              ((a += 1), (o = ""));
                              break;
                            case 37:
                              ((l += n.slice(d, u)), (d = u + 1));
                              continue;
                            default:
                              continue;
                          }
                          (d !== u - 1 && (l += n.slice(d, u - 1)), (l += o), (d = u + 1));
                        } else 37 === c && ((l += n.slice(d, u)), (d = u + 1));
                      }
                    0 !== d && (a++, (u = " "), d < n.length && (l += n.slice(d)));
                  }
                  for (; a < t.length; ) {
                    let r = t[a];
                    ((l += u), (l += "string" != typeof r ? i(r, e) : r), (u = " "), a++);
                  }
                  return l;
                })(n.prettyInspectOptions, ...t) +
                a
            ));
        },
        isBuffer: function (e) {
          return !e && !1;
        },
        isError: T,
        prettyFormatLogObj: function (e, t) {
          return e.reduce((e, r) => (T(r) ? e.errors.push(N(r, t)) : e.args.push(r), e), {
            args: [],
            errors: [],
          });
        },
        prettyFormatErrorObj: N,
      },
      O = {
        runtime: [typeof window, typeof document].includes("undefined") ? "Generic" : "Browser",
        browser: globalThis?.navigator?.userAgent,
      },
      L =
        /(?:(?:file|https?|global code|[^@]+)@)?(?:file:)?((?:\/[^:/]+){2,})(?::(\d+))?(?::(\d+))?/;
    function P(e, t = Error()) {
      return k(t?.stack?.split("\n")?.filter((e) => !e.includes("Error: "))?.[e]);
    }
    function C(e) {
      return e?.stack
        ?.split("\n")
        ?.filter((e) => !e.includes("Error: "))
        ?.reduce((e, t) => (e.push(k(t)), e), []);
    }
    function k(e) {
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
        let n = e.match(L);
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
    function T(e) {
      return e instanceof Error;
    }
    function N(e, t) {
      let n = C(e).map((e) => r(t, t.prettyErrorStackTemplate, { ...e }, !0)),
        s = {
          errorName: ` ${e.name} `,
          errorMessage: Object.getOwnPropertyNames(e)
            .reduce((t, r) => ("stack" !== r && t.push(e[r]), t), [])
            .join(", "),
          errorStack: n.join("\n"),
        };
      return r(t, t.prettyErrorTemplate, s);
    }
    class j {
      constructor(e, t, r = 4) {
        ((this.logObj = t),
          (this.stackDepthLevel = r),
          (this.runtime = E),
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
        let n, s;
        if (e < this.settings.minLevel) return;
        let i = [...this.settings.prefix, ...r],
          a =
            this.settings.overwrite?.mask != null
              ? this.settings.overwrite?.mask(i)
              : null != this.settings.maskValuesOfKeys && this.settings.maskValuesOfKeys.length > 0
                ? this._mask(i)
                : i,
          o = null != this.logObj ? this._recursiveCloneAndExecuteFunctions(this.logObj) : void 0,
          l =
            this.settings.overwrite?.toLogObj != null
              ? this.settings.overwrite?.toLogObj(a, o)
              : this._toLogObj(a, o),
          u =
            this.settings.overwrite?.addMeta != null
              ? this.settings.overwrite?.addMeta(l, e, t)
              : this._addMetaToLogObj(l, e, t);
        return (
          this.settings.overwrite?.formatMeta != null &&
            (n = this.settings.overwrite?.formatMeta(u?.[this.settings.metaProperty])),
          this.settings.overwrite?.formatLogObj != null &&
            (s = this.settings.overwrite?.formatLogObj(a, this.settings)),
          "pretty" === this.settings.type &&
            ((n = n ?? this._prettyFormatLogObjMeta(u?.[this.settings.metaProperty])),
            (s = s ?? this.runtime.prettyFormatLogObj(a, this.settings))),
          null != n && null != s
            ? this.settings.overwrite?.transportFormatted != null
              ? this.settings.overwrite?.transportFormatted(n, s.args, s.errors, this.settings)
              : this.runtime.transportFormatted(n, s.args, s.errors, this.settings)
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
            (n, s) => (
              (n[s] = t.includes(
                this.settings?.maskValuesOfKeysCaseInsensitive !== !0 ? s : s.toLowerCase()
              )
                ? this.settings.maskPlaceholder
                : this._recursiveCloneAndMaskValuesOfKeys(e[s], t, r)),
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
                      let s = Object.getOwnPropertyDescriptor(e, n);
                      if (s) {
                        Object.defineProperty(r, n, s);
                        let i = e[n];
                        r[n] =
                          "function" == typeof i
                            ? i()
                            : this._recursiveCloneAndExecuteFunctions(i, t);
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
          s = {};
        t.includes("{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}")
          ? (t = t.replace("{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}", "{{dateIsoStr}}"))
          : "UTC" === this.settings.prettyLogTimeZone
            ? ((s.yyyy = e?.date?.getUTCFullYear() ?? "----"),
              (s.mm = n(e?.date?.getUTCMonth(), 2, 1)),
              (s.dd = n(e?.date?.getUTCDate(), 2)),
              (s.hh = n(e?.date?.getUTCHours(), 2)),
              (s.MM = n(e?.date?.getUTCMinutes(), 2)),
              (s.ss = n(e?.date?.getUTCSeconds(), 2)),
              (s.ms = n(e?.date?.getUTCMilliseconds(), 3)))
            : ((s.yyyy = e?.date?.getFullYear() ?? "----"),
              (s.mm = n(e?.date?.getMonth(), 2, 1)),
              (s.dd = n(e?.date?.getDate(), 2)),
              (s.hh = n(e?.date?.getHours(), 2)),
              (s.MM = n(e?.date?.getMinutes(), 2)),
              (s.ss = n(e?.date?.getSeconds(), 2)),
              (s.ms = n(e?.date?.getMilliseconds(), 3)));
        let i =
          "UTC" === this.settings.prettyLogTimeZone
            ? e?.date
            : new Date(e?.date?.getTime() - e?.date?.getTimezoneOffset() * 6e4);
        ((s.rawIsoStr = i?.toISOString()),
          (s.dateIsoStr = i?.toISOString().replace("T", " ").replace("Z", "")),
          (s.logLevelName = e?.logLevelName),
          (s.fileNameWithLine = e?.path?.fileNameWithLine ?? ""),
          (s.filePathWithLine = e?.path?.filePathWithLine ?? ""),
          (s.fullFilePath = e?.path?.fullFilePath ?? ""));
        let a = this.settings.parentNames?.join(this.settings.prettyErrorParentNamesSeparator);
        return (
          (a =
            null != a && e?.name != null
              ? a + this.settings.prettyErrorParentNamesSeparator
              : void 0),
          (s.name = e?.name != null || null != a ? ((a ?? "") + e?.name ?? "") : ""),
          (s.nameWithDelimiterPrefix =
            s.name.length > 0 ? this.settings.prettyErrorLoggerNameDelimiter + s.name : ""),
          (s.nameWithDelimiterSuffix =
            s.name.length > 0 ? s.name + this.settings.prettyErrorLoggerNameDelimiter : ""),
          this.settings.overwrite?.addPlaceholders != null &&
            this.settings.overwrite?.addPlaceholders(e, s),
          r(this.settings, t, s)
        );
      }
    }
    var I = e.i(821410);
    let R = {
        minLevel: parseInt("3"),
        maskValuesOfKeys: ["password", "passwordConfirmation", "credentials", "credential"],
        prettyLogTimeZone: I.IS_PRODUCTION ? "UTC" : "local",
        prettyErrorStackTemplate: "  • {{fileName}}	{{method}}\n	{{filePathWithLine}}",
        prettyErrorTemplate: "\n{{errorName}} {{errorMessage}}\nerror stack:\n{{errorStack}}",
        prettyLogTemplate: "{{hh}}:{{MM}}:{{ss}}:{{ms}} [{{logLevelName}}] ",
        stylePrettyLogs: !I.IS_PRODUCTION,
        prettyLogStyles: { name: "yellow", dateIsoStr: "blue" },
        type: I.IS_PRODUCTION ? "json" : "pretty",
      },
      A = new (class extends j {
        constructor(e, t) {
          const r = "u" > typeof window && "u" > typeof document,
            n =
              !!r &&
              void 0 !== window.chrome &&
              void 0 !== window.CSS &&
              window.CSS.supports("color", "green"),
            s = !!r && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
          (((e = e || {}).stylePrettyLogs = (!e.stylePrettyLogs || !r || !!n) && e.stylePrettyLogs),
            super(e, t, s ? 4 : 5));
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
      })(R);
    e.s(["default", 0, A], 684219);
  },
  50270,
  (e) => {
    "use strict";
    var t = e.i(788685);
    e.s(["z", 0, t]);
  },
  978292,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "BailoutToCSR", {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    let n = e.r(132061);
    function s({ reason: e, children: t }) {
      if ("u" < typeof window)
        throw Object.defineProperty(new n.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
          value: "E394",
          enumerable: !1,
          configurable: !0,
        });
      return t;
    }
  },
  652157,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "PreloadChunks", {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    let n = e.r(843476),
      s = e.r(174080),
      i = e.r(144256),
      a = e.r(309885),
      o = e.r(543369);
    function l({ moduleIds: e }) {
      if ("u" > typeof window) return null;
      let t = i.workAsyncStorage.getStore();
      if (void 0 === t) return null;
      let r = [];
      if (t.reactLoadableManifest && e) {
        let n = t.reactLoadableManifest;
        for (let t of e) {
          if (!n[t]) continue;
          let e = n[t].files;
          r.push(...e);
        }
      }
      if (0 === r.length) return null;
      let u = (0, o.getAssetTokenQuery)();
      return (0, n.jsx)(n.Fragment, {
        children: r.map((e) => {
          let r = `${t.assetPrefix}/_next/${(0, a.encodeURIPath)(e)}${u}`;
          return e.endsWith(".css")
            ? (0, n.jsx)(
                "link",
                { precedence: "dynamic", href: r, rel: "stylesheet", as: "style", nonce: t.nonce },
                e
              )
            : ((0, s.preload)(r, { as: "script", fetchPriority: "low", nonce: t.nonce }), null);
        }),
      });
    }
  },
  869093,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    let n = e.r(843476),
      s = e.r(271645),
      i = e.r(978292),
      a = e.r(652157);
    function o(e) {
      return { default: e && "default" in e ? e.default : e };
    }
    let l = { loader: () => Promise.resolve(o(() => null)), loading: null, ssr: !0 },
      u = function (e) {
        let t = { ...l, ...e },
          r = (0, s.lazy)(() => t.loader().then(o)),
          u = t.loading;
        function d(e) {
          let o = u ? (0, n.jsx)(u, { isLoading: !0, pastDelay: !0, error: null }) : null,
            l = !t.ssr || !!t.loading,
            d = l ? s.Suspense : s.Fragment,
            c = t.ssr
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    "u" < typeof window
                      ? (0, n.jsx)(a.PreloadChunks, { moduleIds: t.modules })
                      : null,
                    (0, n.jsx)(r, { ...e }),
                  ],
                })
              : (0, n.jsx)(i.BailoutToCSR, {
                  reason: "next/dynamic",
                  children: (0, n.jsx)(r, { ...e }),
                });
          return (0, n.jsx)(d, { ...(l ? { fallback: o } : {}), children: c });
        }
        return ((d.displayName = "LoadableComponent"), d);
      };
  },
  770703,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    let n = e.r(555682)._(e.r(869093));
    function s(e, t) {
      let r = {};
      "function" == typeof e && (r.loader = e);
      let s = { ...r, ...t };
      return (0, n.default)({ ...s, modules: s.loadableGenerated?.modules });
    }
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
]);
