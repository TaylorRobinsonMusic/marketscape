(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
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
      a = e.r(144256),
      o = e.r(309885),
      i = e.r(543369);
    function l({ moduleIds: e }) {
      if ("u" > typeof window) return null;
      let t = a.workAsyncStorage.getStore();
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
      let u = (0, i.getAssetTokenQuery)();
      return (0, n.jsx)(n.Fragment, {
        children: r.map((e) => {
          let r = `${t.assetPrefix}/_next/${(0, o.encodeURIPath)(e)}${u}`;
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
      a = e.r(978292),
      o = e.r(652157);
    function i(e) {
      return { default: e && "default" in e ? e.default : e };
    }
    let l = { loader: () => Promise.resolve(i(() => null)), loading: null, ssr: !0 },
      u = function (e) {
        let t = { ...l, ...e },
          r = (0, s.lazy)(() => t.loader().then(i)),
          u = t.loading;
        function d(e) {
          let i = u ? (0, n.jsx)(u, { isLoading: !0, pastDelay: !0, error: null }) : null,
            l = !t.ssr || !!t.loading,
            d = l ? s.Suspense : s.Fragment,
            c = t.ssr
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    "u" < typeof window
                      ? (0, n.jsx)(o.PreloadChunks, { moduleIds: t.modules })
                      : null,
                    (0, n.jsx)(r, { ...e }),
                  ],
                })
              : (0, n.jsx)(a.BailoutToCSR, {
                  reason: "next/dynamic",
                  children: (0, n.jsx)(r, { ...e }),
                });
          return (0, n.jsx)(d, { ...(l ? { fallback: i } : {}), children: c });
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
        () => F,
        "useEmbedNonStylesConfig",
        () => k,
        "useEmbedStyles",
        () => T,
        "useEmbedType",
        () => R,
        "useEmbedUiConfig",
        () => P,
        "useIsBackgroundTransparent",
        () => q,
        "useIsEmbed",
        () => L,
      ],
      436864
    );
    var r,
      n = e.i(271645),
      s = e.i(247167);
    function a(e) {
      return !!e.isEmbed && !!e.getEmbedNamespace && !!e.getEmbedTheme;
    }
    function o(e, t) {
      let r = new window.CustomEvent(e, { detail: t });
      window.dispatchEvent(r);
    }
    let i = null;
    function l(e) {
      return setTimeout(e, 50);
    }
    function u() {
      return "slotsDone" === window._embedBookerState;
    }
    ((t = (function (e) {
      if (a(e)) return e;
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
        !a(e))
      )
        throw Error("EmbedInitIframe failed to initialize all required embed functions on window");
      return e;
    })(window)),
      (i = new (class {
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
          (o(r, n), o(this.getFullActionName("*"), n));
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
      e.s(["embedWindow", 0, t, "sdkActionManager", 0, i], 111914));
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
      let { form: s, ...a } = e,
        o = await fetch("/api/routing-forms/queued-response", {
          method: "POST",
          body: JSON.stringify({ queuedFormResponseId: n, params: a }),
        });
      if (!o.ok) return null;
      let i = (await o.json()).data.formResponseId;
      return (i && (r = i), r);
    };
    function h(...e) {
      {
        let r = t?.getEmbedNamespace() ?? null,
          n = new URL(document.URL).searchParams,
          a = (window.CalEmbed.__logQueue = window.CalEmbed.__logQueue || []);
        (e.push({ ns: r, url: document.URL }),
          e.unshift("CAL:"),
          a.push(e),
          (n.get("debug") || "true" === s.default.env.INTEGRATION_TEST_MODE) &&
            console.log("Child:", ...e));
      }
    }
    var f =
      (((r = {})[(r.NOT_INITIALIZED = 0)] = "NOT_INITIALIZED"),
      (r[(r.INITIALIZED = 1)] = "INITIALIZED"),
      r);
    let p = {
      connectVersion: 0,
      renderState: null,
      router: {
        ensureQueryParamsInUrl({ toBeThereParams: e, toRemoveParams: t }) {
          let r = !1,
            { hasChanged: n } = (function n() {
              if (r) return { hasChanged: !1 };
              let s = new URL(document.URL),
                a = !1;
              for (let [t, r] of Object.entries(e))
                (a = !(function ({ param: e, value: t, container: r }) {
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
                    a = Array.isArray(t) ? t : [t];
                  return a.length === s.length && a.every((e) => s.includes(e));
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
                (a = a || t.length > 0) && window.history.replaceState({}, "", s.toString()),
                l(n),
                { hasChanged: a }
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
    function g(e) {
      return p.pageData.eventsState[e].hasFired;
    }
    function y(e, t) {
      p.pageData.eventsState[e].hasFired = t;
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
        let n = p.viewId;
        !d() &&
          n &&
          ((({ eventId: e, eventSlug: t, slotsLoaded: r }) => {
            var n;
            let s = 1 === p.viewId,
              a = p.pageData.reloadInitiated
                ? "bookerReloaded"
                : s
                  ? "bookerViewed"
                  : "bookerReopened";
            g(a) ||
              (y((n = a), !0),
              r
                ? e && t
                  ? i?.fire(n, { eventId: e, eventSlug: t, slotsLoaded: !0 })
                  : console.error(
                      "BookerViewed event not fired because slotsLoaded is true but eventId or eventSlug are falsy"
                    )
                : i?.fire(n, { eventId: null, eventSlug: null, slotsLoaded: !1 }));
          })({ eventId: e, eventSlug: t, slotsLoaded: r.isSuccess }),
          e &&
            t &&
            (({ eventId: e, eventSlug: t, slotsLoaded: r }) => {
              r &&
                (g("bookerReady") ||
                  (i?.fire("bookerReady", { eventId: e, eventSlug: t }), y("bookerReady", !0)));
            })({ eventId: e, eventSlug: t, slotsLoaded: r.isSuccess }));
      },
      v = () => {
        let e = L(),
          t = (0, w.default)("(max-width: 768px)"),
          r = P();
        return !!e && !!t && (r.useSlotsViewOnSmallScreen ?? !1);
      },
      E = ["__iframeReady", "__dimensionChanged", "__connectInitiated", "linkPrerendered"];
    {
      ((window.CalEmbed = window?.CalEmbed || {}),
        (window.CalEmbed.embedStore = p),
        (window.CalEmbed.sdkActionManager = i));
      let e = navigator.userAgent.toLowerCase();
      e.includes("safari") &&
        !e.includes("chrome") &&
        h("Safari Detected: Using setTimeout instead of rAF");
    }
    let C = (e) =>
        e.styles
          ? ((p.reactStylesStateSetters[e.elementName] = e.setState),
            e.setState(p.styles || {}),
            () => {
              delete p.reactStylesStateSetters[e.elementName];
            })
          : ((p.reactNonStylesStateSetters[e.elementName] = e.setState),
            e.setState(p.nonStyles || {}),
            () => {
              delete p.reactNonStylesStateSetters[e.elementName];
            }),
      P = () => {
        let [e, t] = (0, n.useState)(p.uiConfig || {});
        return (
          p.setUiConfig.push(t),
          (0, n.useEffect)(() => () => {
            let e = p.setUiConfig.findIndex((e) => e === t);
            p.setUiConfig.splice(e, 1);
          }),
          e
        );
      },
      T = (e) => {
        let [, t] = (0, n.useState)({});
        return (
          (0, n.useEffect)(() => C({ elementName: e, setState: t, styles: !0 }), []),
          (p.styles || {})[e] || {}
        );
      },
      k = (e) => {
        let [, t] = (0, n.useState)({});
        return (
          (0, n.useEffect)(() => C({ elementName: e, setState: t, styles: !1 }), []),
          (p.nonStyles || {})[e] || {}
        );
      },
      q = () => {
        let e = !1;
        return ("transparent" === T("body").background && (e = !0), e);
      },
      L = () => {
        let e = t?.isEmbed() || !1,
          [r, s] = (0, n.useState)(e);
        return (
          (0, n.useEffect)(() => {
            let e =
              null !=
              (function () {
                if (null != p.namespace) return p.namespace;
                {
                  let e = t?.getEmbedNamespace() ?? null;
                  return ((p.namespace = e), e);
                }
              })();
            (parent === window ||
              e ||
              h(
                "Looks like you have iframed cal.com but not using Embed Snippet. Directly using an iframe isn't recommended."
              ),
              s(t?.isEmbed() || !1));
          }, []),
          r
        );
      },
      R = () => {
        let [e, t] = (0, n.useState)(null);
        return (
          (0, n.useEffect)(() => {
            t(
              p.embedType
                ? p.embedType
                : (p.embedType = new URL(document.URL).searchParams.get("embedType"))
            );
          }, []),
          e
        );
      };
    function I() {
      "u" > typeof document &&
        document.body &&
        ("visible" !== document.body.style.visibility &&
          (document.body.style.visibility = "visible"),
        "1" !== document.body.style.opacity && (document.body.style.opacity = "1"),
        l(() => {
          I();
        }));
    }
    async function O({ newlyRecordedResponseId: e, toBeThereParams: t, toRemoveParams: r }) {
      let { stopEnsuringQueryParamsInUrl: n } = p.router.ensureQueryParamsInUrl({
        toBeThereParams: { ...t, "cal.routingFormResponseId": e.toString() },
        toRemoveParams: r,
      });
      n();
    }
    async function A() {
      return new Promise((e) => {
        !(function t() {
          "completed" !== p.renderState ? l(t) : e();
        })();
      });
    }
    let x = {
      ui: function (e) {
        let t;
        h("Method: ui called", e);
        let r = e.styles;
        (r &&
          console.warn(
            "Cal.com Embed: `styles` prop is deprecated. Use `cssVarsPerTheme` instead to achieve the same effect. Here is a list of CSS variables that are supported. https://github.com/calcom/cal.com/blob/main/packages/config/tailwind-preset.js#L19"
          ),
          r?.body?.background && (document.body.style.background = r.body.background),
          e.theme && ((p.theme = e.theme), p.setTheme && p.setTheme(e.theme)));
        let n = p.uiConfig?.cssVarsPerTheme,
          s = e.cssVarsPerTheme;
        if (n || s)
          for (let e of ((t = {}),
          Array.from(new Set([...(n ? Object.keys(n) : []), ...(s ? Object.keys(s) : [])]))))
            t[e] = { ...n?.[e], ...s?.[e] };
        let a = e;
        if ((e = { ...p.uiConfig, ...a, ...(t ? { cssVarsPerTheme: t } : {}) }).cssVarsPerTheme) {
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
        (e.colorScheme && N(e.colorScheme),
          p.setUiConfig && ((p.uiConfig = o = e), p.setUiConfig.forEach((e) => e(o))));
        var o,
          i = r || {};
        for (let [, e] of ((p.styles = i), Object.entries(p.reactStylesStateSetters)))
          e((e) => ({ ...e, ...i }));
        var l = r || {};
        for (let [, e] of ((p.nonStyles = l), Object.entries(p.reactStylesStateSetters)))
          e((e) => ({ ...e, ...l }));
      },
      parentKnowsIframeReady: (e) => {
        (h("Method: `parentKnowsIframeReady` called"),
          l(function e() {
            c({ embedStore: p })
              ? M()
                ? _(window.CalComPageStatus)
                : (I(),
                  h("renderState is 'completed'"),
                  (p.renderState = "completed"),
                  d() ? i?.fire("linkPrerendered", {}) : i?.fire("linkReady", {}))
              : l(e);
          }));
      },
      connect: async function ({ config: e, params: t }) {
        (i?.fire("__connectInitiated", {}),
          h("Method: connect, requested with params", { config: e, params: t }));
        let { iframeAttrs: r, "cal.embed.noSlotsFetchOnConnect": n, ...s } = e;
        ((p.providedCorrectHeightToParent = !1),
          "true" !== n &&
            (h("Method: connect, noSlotsFetchOnConnect is false. Requesting slots re-fetch"),
            (p.connectVersion = p.connectVersion + 1)));
        let a = p.connectVersion,
          o = { ...t, ...s, "cal.embed.connectVersion": a.toString() },
          l = ["preload", "prerender", "cal.skipSlotsFetch"];
        (await A(),
          h("Method: connect, renderState is completed. Connecting"),
          await U({ toBeThereParams: o, toRemoveParams: l }));
        let u = await m(t);
        "number" == typeof u &&
          (await O({ newlyRecordedResponseId: u, toBeThereParams: o, toRemoveParams: l }));
      },
      __reloadInitiated: function (e) {
        (h("Method: __reloadInitiated called"), (p.pageData.reloadInitiated = !0));
      },
    };
    function M() {
      let e = window.CalComPageStatus;
      return !!(e && "200" != e);
    }
    function _(e) {
      i?.fire("linkFailed", {
        code: e,
        msg: "Problem loading the link",
        data: { url: document.URL },
      });
    }
    function N(e) {
      e && (document.documentElement.style.colorScheme = e);
    }
    async function U({ toBeThereParams: e, toRemoveParams: t }) {
      let { hasChanged: r, stopEnsuringQueryParamsInUrl: n } = p.router.ensureQueryParamsInUrl({
          toBeThereParams: e,
          toRemoveParams: t,
        }),
        s = 0;
      return (
        u() && r && (s = 2),
        await new Promise((e) => {
          l(function t() {
            if (!c({ embedStore: p }) || s > 0) {
              (s--, l(t));
              return;
            }
            if (M()) {
              (_(window.CalComPageStatus), e());
              return;
            }
            (n(), i?.fire("__connectCompleted", {}), i?.fire("linkReady", {}), e());
          });
        }),
        { stopEnsuringQueryParamsInUrl: n }
      );
    }
    function F({ bookerState: e, slotsQuery: t }) {
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
      h("Embed SDK loaded", { isEmbed: t?.isEmbed() || !1 });
      let e = new URL(document.URL);
      p.theme = t?.getEmbedTheme();
      let r = e.searchParams.get("ui.autoscroll"),
        n = e.searchParams.get("useSlotsViewOnSmallScreen"),
        s = e.searchParams.get("showTimezoneWhenEventDetailsHidden");
      if (
        ((p.uiConfig = {
          colorScheme: e.searchParams.get("ui.color-scheme"),
          layout: e.searchParams.get("layout"),
          disableAutoScroll: "false" === r,
          useSlotsViewOnSmallScreen: (n ?? "false") === "true",
          showTimezoneWhenEventDetailsHidden: (s ?? "false") === "true",
        }),
        N(p.uiConfig.colorScheme),
        top === window)
      ) {
        (I(),
          "transparent" === document.body.style.background && (document.body.style.background = ""),
          h("Embed SDK Skipped as we are in top"));
        return;
      }
      let a = "true" !== e.searchParams.get("cal.skipSlotsFetch");
      (h(`Slots will ${a ? "" : "NOT "}be fetched`),
        window.addEventListener("message", (e) => {
          let t = e.data;
          if (!t) return;
          let r = t.method;
          "CAL" === t.originator && "string" == typeof r && x[r]?.(t.arg);
        }),
        document.addEventListener("click", (e) => {
          if (!e.target || !(e.target instanceof Node)) return;
          let t =
            document.getElementsByClassName("main")[0] ||
            document.getElementsByTagName("main")[0] ||
            document.documentElement;
          e.target.contains(t) && i?.fire("__closeIframe", {});
        }),
        i?.on("linkReady", () => {
          !d() &&
            (h("Resetting page data"),
            (p.pageData = {
              eventsState: {
                bookerViewed: { hasFired: !1 },
                bookerReopened: { hasFired: !1 },
                bookerReloaded: { hasFired: !1 },
                bookerReady: { hasFired: !1 },
              },
              reloadInitiated: !1,
            }),
            p.viewId ? p.viewId++ : (p.viewId = 1));
        }),
        i?.on("*", (e) => {
          if (d() && !E.includes(e.detail.type)) return;
          let t = e.detail;
          (h(t), parent.postMessage({ originator: "CAL", ...t }, "*"));
        }),
        "true" !== e.searchParams.get("preload") && t?.isEmbed()
          ? (function () {
              if (
                (i?.fire("__iframeReady", { isPrerendering: d() }),
                (p.renderState = "inProgress"),
                p.state !== f.NOT_INITIALIZED)
              )
                return h("Embed Iframe already initialized");
              ((p.state = f.INITIALIZED), h("Initializing embed-iframe"));
              let e = window.CalComPageStatus;
              M()
                ? _(e)
                : (function ({ embedStore: e }) {
                    let t = null,
                      r = null,
                      n = !0,
                      s = !1;
                    l(function a() {
                      if ("u" < typeof document) return;
                      if ("complete" !== document.readyState) return void l(a);
                      if (!s)
                        return void setTimeout(() => {
                          ((s = !0), a());
                        }, 100);
                      (e.windowLoadEventFired || i?.fire("__windowLoadComplete", {}),
                        (e.windowLoadEventFired = !0));
                      let o =
                          document.getElementsByClassName("main")[0] ||
                          document.getElementsByTagName("main")[0] ||
                          document.documentElement,
                        u = document.documentElement.scrollHeight,
                        d = document.documentElement.scrollWidth;
                      if (!(o instanceof HTMLElement))
                        throw Error("Main element should be an HTMLElement");
                      let c = getComputedStyle(o),
                        m = Math.ceil(
                          parseFloat(c.height) +
                            parseFloat(c.marginTop) +
                            parseFloat(c.marginBottom)
                        ),
                        h = Math.ceil(
                          parseFloat(c.width) + parseFloat(c.marginLeft) + parseFloat(c.marginRight)
                        ),
                        f = n ? u : m,
                        p = n ? d : h;
                      (f &&
                        p &&
                        ((t === f && r === p && e.providedCorrectHeightToParent) ||
                          ((t = f),
                          (r = p),
                          i?.fire("__dimensionChanged", {
                            iframeHeight: f,
                            iframeWidth: p,
                            isFirstTime: n,
                          })),
                        n || (e.providedCorrectHeightToParent = !0),
                        (n = !1)),
                        l(a));
                    });
                  })({ embedStore: p });
            })()
          : h(
              "Preloaded scenario - Skipping initialization and setup as only assets need to be loaded"
            ));
    })();
  },
  278587,
  (e) => {
    "use strict";
    var t = e.i(271645);
    let r = ["light", "dark"],
      n = "(prefers-color-scheme: dark)",
      s = "u" < typeof window,
      a = (0, t.createContext)(void 0),
      o = { setTheme: (e) => {}, themes: [] },
      i = ({
        forcedTheme: e,
        disableTransitionOnChange: s = !1,
        enableSystem: o = !0,
        enableColorScheme: i = !0,
        storageKey: m = "theme",
        themes: h = ["light", "dark"],
        defaultTheme: f = o ? "system" : "light",
        attribute: p = "data-theme",
        value: g,
        children: y,
        nonce: b,
      }) => {
        let [w, S] = (0, t.useState)(() => u(m, f)),
          [v, E] = (0, t.useState)(() => u(m)),
          C = g ? Object.values(g) : h,
          P = (0, t.useCallback)((e) => {
            let t = e;
            if (!t) return;
            "system" === e && o && (t = c());
            let n = g ? g[t] : t,
              a = s ? d() : null,
              l = document.documentElement;
            if (
              ("class" === p
                ? (l.classList.remove(...C), n && l.classList.add(n))
                : n
                  ? l.setAttribute(p, n)
                  : l.removeAttribute(p),
              i)
            ) {
              let e = r.includes(f) ? f : null,
                n = r.includes(t) ? t : e;
              l.style.colorScheme = n;
            }
            null == a || a();
          }, []),
          T = (0, t.useCallback)(
            (e) => {
              S(e);
              try {
                localStorage.setItem(m, e);
              } catch (e) {}
            },
            [e]
          ),
          k = (0, t.useCallback)(
            (t) => {
              (E(c(t)), "system" === w && o && !e && P("system"));
            },
            [w, e]
          );
        return (
          (0, t.useEffect)(() => {
            let e = window.matchMedia(n);
            return (e.addListener(k), k(e), () => e.removeListener(k));
          }, [k]),
          (0, t.useEffect)(() => {
            let e = (e) => {
              e.key === m && T(e.newValue || f);
            };
            return (
              window.addEventListener("storage", e),
              () => window.removeEventListener("storage", e)
            );
          }, [T]),
          (0, t.useEffect)(() => {
            P(null != e ? e : w);
          }, [e, w]),
          t.default.createElement(
            a.Provider,
            {
              value: {
                theme: w,
                setTheme: T,
                forcedTheme: e,
                resolvedTheme: "system" === w ? v : w,
                themes: o ? [...h, "system"] : h,
                systemTheme: o ? v : void 0,
              },
            },
            t.default.createElement(l, {
              forcedTheme: e,
              disableTransitionOnChange: s,
              enableSystem: o,
              enableColorScheme: i,
              storageKey: m,
              themes: h,
              defaultTheme: f,
              attribute: p,
              value: g,
              children: y,
              attrs: C,
              nonce: b,
            }),
            y
          )
        );
      },
      l = (0, t.memo)(
        ({
          forcedTheme: e,
          storageKey: s,
          attribute: a,
          enableSystem: o,
          enableColorScheme: i,
          defaultTheme: l,
          value: u,
          attrs: d,
          nonce: c,
        }) => {
          let m = "system" === l,
            h =
              "class" === a
                ? `var d=document.documentElement,c=d.classList;c.remove(${d.map((e) => `'${e}'`).join(",")});`
                : `var d=document.documentElement,n='${a}',s='setAttribute';`,
            f = i
              ? r.includes(l) && l
                ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`
                : "if(e==='light'||e==='dark')d.style.colorScheme=e"
              : "",
            p = (e, t = !1, n = !0) => {
              let s = u ? u[e] : e,
                o = t ? e + "|| ''" : `'${s}'`,
                l = "";
              return (
                i && n && !t && r.includes(e) && (l += `d.style.colorScheme = '${e}';`),
                "class" === a ? (l += t || s ? `c.add(${o})` : "null") : s && (l += `d[s](n,${o})`),
                l
              );
            },
            g = e
              ? `!function(){${h}${p(e)}}()`
              : o
                ? `!function(){try{${h}var e=localStorage.getItem('${s}');if('system'===e||(!e&&${m})){var t='${n}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${u ? `var x=${JSON.stringify(u)};` : ""}${p(u ? "x[e]" : "e", !0)}}${m ? "" : "else{" + p(l, !1, !1) + "}"}${f}}catch(e){}}()`
                : `!function(){try{${h}var e=localStorage.getItem('${s}');if(e){${u ? `var x=${JSON.stringify(u)};` : ""}${p(u ? "x[e]" : "e", !0)}}else{${p(l, !1, !1)};}${f}}catch(t){}}();`;
          return t.default.createElement("script", {
            nonce: c,
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
      d = () => {
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
      c = (e) => (e || (e = window.matchMedia(n)), e.matches ? "dark" : "light");
    e.s([
      "ThemeProvider",
      0,
      (e) =>
        (0, t.useContext)(a)
          ? t.default.createElement(t.Fragment, null, e.children)
          : t.default.createElement(i, e),
      "useTheme",
      0,
      () => {
        var e;
        return null != (e = (0, t.useContext)(a)) ? e : o;
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
    function a(e) {
      return `[nuqs] ${s[e]}
  See https://nuqs.dev/NUQS-${e}`;
    }
    let o = (0, t.createContext)({
      useAdapter() {
        throw Error(a(404));
      },
    });
    function i(e) {
      return { method: "throttle", timeMs: e };
    }
    ((o.displayName = "NuqsAdapterContext"),
      r &&
        "u" > typeof window &&
        (window.__NuqsAdapterContext && window.__NuqsAdapterContext !== o && console.error(a(303)),
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
            return ({ children: r, defaultOptions: n, processUrlSearchParams: s, ...a }) =>
              (0, t.createElement)(
                o.Provider,
                { ...a, value: { useAdapter: e, defaultOptions: n, processUrlSearchParams: s } },
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
            if (!("useAdapter" in r)) throw Error(a(404));
            return r.useAdapter(e);
          },
          "s",
          0,
          a,
        ],
        924540
      ));
    let l = i(
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
    function d() {
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
    function c(e, t, r) {
      let n = setTimeout(function () {
        (e(), r.removeEventListener("abort", s));
      }, t);
      function s() {
        (clearTimeout(n), r.removeEventListener("abort", s));
      }
      r.addEventListener("abort", s);
    }
    function m() {
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
    function h() {
      return new URLSearchParams(location.search);
    }
    var f = class {
      updateMap = new Map();
      options = { history: "replace", scroll: !1, shallow: !0 };
      timeMs = l.timeMs;
      transitions = new Set();
      resolvers = null;
      controller = null;
      lastFlushedAt = 0;
      resetQueueOnNextPush = !1;
      push({ key: e, query: t, options: r }, s = l.timeMs) {
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
      getPendingPromise({ getSearchParamsSnapshot: e = h }) {
        return this.resolvers?.promise ?? Promise.resolve(e());
      }
      flush({ getSearchParamsSnapshot: e = h, rateLimitFactor: t = 1, ...r }, s) {
        if (((this.controller ??= new AbortController()), !Number.isFinite(this.timeMs)))
          return (n("[nuqs gtq] Skipping flush due to throttleMs=Infinity"), Promise.resolve(e()));
        if (this.resolvers) return this.resolvers.promise;
        this.resolvers = m();
        let a = () => {
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
              0 === s ? a() : c(a, s, this.controller.signal));
          };
        return (c(o, 0, this.controller.signal), this.resolvers.promise);
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
          (this.timeMs = l.timeMs),
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
        let i = Array.from(this.updateMap.entries()),
          l = { ...this.options },
          d = Array.from(this.transitions);
        for (let [t, r] of (e.autoResetQueueOnUpdate && this.reset(),
        n("[nuqs gtq] Flushing queue %O with options %O", i, l),
        i))
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
            })(d, () => {
              r(o, l);
            }),
            [o, null]
          );
        } catch (e) {
          return (console.error(a(429), i.map(([e]) => e).join(), e), [o, e]);
        }
      }
    };
    let p = new f();
    var g = class {
      callback;
      resolvers = m();
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
          c(
            () => {
              let t = this.resolvers;
              try {
                n("[nuqs dq] Flushing debounce queue", e);
                let r = this.callback(e);
                (n("[nuqs dq] Reset debounce queue %O", this.queuedValue),
                  (this.queuedValue = void 0),
                  (this.resolvers = m()),
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
    let y = new (class {
      throttleQueue;
      queues = new Map();
      queuedQuerySync = d();
      constructor(e = new f()) {
        this.throttleQueue = e;
      }
      useQueuedQueries(e) {
        var r, n;
        let s, a;
        return (
          (r = (e, t) => this.queuedQuerySync.on(e, t)),
          (n = (e) => this.getQueuedQuery(e)),
          (s = (0, t.useCallback)(() => {
            let t = Object.fromEntries(e.map((e) => [e, n(e)]));
            return [JSON.stringify(t), t];
          }, [e.join(","), n])),
          null === (a = (0, t.useRef)(null)).current && (a.current = s()),
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
              return a.current[0] === e ? a.current[1] : ((a.current = [e, t]), t);
            },
            () => a.current[1]
          )
        );
      }
      push(e, t, r) {
        if (!Number.isFinite(t)) return Promise.resolve((r.getSearchParamsSnapshot ?? h)());
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
        let a = this.queues.get(s).push(e, t);
        return (this.queuedQuerySync.emit(s), a);
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
    })(p);
    e.s(
      [
        "a",
        0,
        u,
        "c",
        0,
        i,
        "i",
        0,
        function (e) {
          return null === e || (Array.isArray(e) && 0 === e.length);
        },
        "n",
        0,
        p,
        "o",
        0,
        function (e) {
          return { method: "debounce", timeMs: e };
        },
        "r",
        0,
        d,
        "s",
        0,
        l,
        "t",
        0,
        y,
      ],
      784150
    );
  },
]);
