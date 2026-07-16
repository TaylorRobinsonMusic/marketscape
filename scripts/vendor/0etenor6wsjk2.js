(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  347637,
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
            let t = r[e] || "";
            ("string" == typeof t ? t.split("/") : t).forEach((t) => {
              n.append(e, t);
            });
          }),
          new t.ReadonlyURLSearchParams(n)
        );
      },
    ]);
  },
  98864,
  29309,
  (e) => {
    "use strict";
    (e.i(944362), e.i(707749));
    var t = e.i(94802),
      r = e.i(271645),
      n = e.i(431300),
      i = e.i(70773),
      a = e.i(455111);
    (e.i(385283),
      e.s(
        [
          "createTRPCReact",
          0,
          function (e) {
            var s;
            return (
              (s = (0, a.createRootHooks)(e)),
              (0, t.createFlatProxy)((e) =>
                "useContext" === e || "useUtils" === e
                  ? () => {
                      let e = s.useUtils();
                      return r.useMemo(() => (0, i.createReactQueryUtils)(e), [e]);
                    }
                  : s.hasOwnProperty(e)
                    ? s[e]
                    : (0, n.createReactDecoration)(e, s)
              )
            );
          },
        ],
        29309
      ),
      e.i(607309),
      e.s([], 98864));
  },
  173233,
  (e) => {
    "use strict";
    var t = e.i(618566),
      r = e.i(347637);
    e.s([
      "default",
      0,
      function () {
        let e = (0, t.usePathname)(),
          n = [
            "/booking",
            "/cancel",
            "/reschedule",
            "/instant-meeting",
            "/team",
            "/d",
            "/apps/routing-forms/routing-link",
            "/forms/",
            "/router",
          ].some((t) => e?.startsWith(t)),
          i = ["/upcoming", "/unconfirmed", "/recurring", "/cancelled", "/past"].some((t) =>
            e?.endsWith(t)
          ),
          a = (0, r.useCompatSearchParams)(),
          s = !!a?.get("user"),
          o = !!(a?.get("user") && a?.get("type"));
        return (n && !i) || s || o;
      },
    ]);
  },
  621998,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(645141);
    e.i(785269);
    var n = e.i(200071),
      i = e.i(402607);
    let a = !1;
    e.s([
      "I18nExtend",
      0,
      function ({ children: e, translations: n, ns: i }) {
        let a = r.default.language ?? "en";
        return (
          r.default.addResourceBundle(a, i, n, !0, !0),
          (0, t.jsx)(t.Fragment, { children: e })
        );
      },
      "I18nProvider",
      0,
      function ({ children: e, translations: s, locale: o, ns: c }) {
        return (
          !(function (e, t, n) {
            if (!a) {
              (r.default
                .use(i.initReactI18next)
                .init({
                  lng: e,
                  resources: { [e]: { [t]: n } },
                  defaultNS: t,
                  fallbackNS: "common",
                  interpolation: { escapeValue: !1 },
                  react: { nsMode: "fallback" },
                }),
                (a = !0));
              return;
            }
            (r.default.addResourceBundle(e, t, n, !0, !0),
              r.default.language !== e && r.default.changeLanguage(e));
          })(o, c, s),
          (0, t.jsx)(n.I18nextProvider, { i18n: r.default, children: e })
        );
      },
    ]);
  },
  380814,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645);
    let n = (0, r.createContext)(void 0);
    e.s([
      "GeoProvider",
      0,
      function ({ country: e, children: r }) {
        return (0, t.jsx)(n.Provider, { value: { country: e }, children: r });
      },
      "useGeo",
      0,
      function () {
        let e = (0, r.useContext)(n);
        if (void 0 === e) throw Error("useGeo must be used within a GeoProvider");
        return e;
      },
    ]);
  },
  454295,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645),
      n = e.i(273446),
      i = e.i(62420);
    let a = (0, r.createContext)(null);
    e.s([
      "WebPushContext",
      0,
      a,
      "WebPushProvider",
      0,
      function ({ children: e }) {
        let [s, o] = (0, r.useState)(() =>
            "Notification" in window ? Notification.permission : "denied"
          ),
          [c, u] = (0, r.useState)(null),
          [l, d] = (0, r.useState)(!1),
          [p, f] = (0, r.useState)(!1),
          { mutate: m } =
            n.trpc.viewer.loggedInViewerRouter.addNotificationsSubscription.useMutation(),
          { mutate: v } =
            n.trpc.viewer.loggedInViewerRouter.removeNotificationsSubscription.useMutation();
        (0, r.useEffect)(() => {
          "serviceWorker" in navigator &&
            navigator.serviceWorker
              .register("/service-worker.js")
              .then(async (e) => {
                "pushManager" in e &&
                  (u(e.pushManager), f(!!(await e.pushManager.getSubscription())));
              })
              .catch((e) => {
                console.error("Service Worker registration failed:", e);
              });
        }, []);
        let h = (0, r.useMemo)(
          () => ({
            permission: s,
            isLoading: l,
            isSubscribed: p,
            subscribe: async () => {
              try {
                d(!0);
                let e = await Notification.requestPermission();
                if ((o(e), "granted" === e && c)) {
                  let e = await c.subscribe({
                    userVisibleOnly: !0,
                    applicationServerKey: ((e) => {
                      let t = "=".repeat((4 - (e.length % 4)) % 4),
                        r = (e + t).replace(/\-/g, "+").replace(/_/g, "/"),
                        n = window.atob(r),
                        i = new Uint8Array(n.length);
                      for (let e = 0; e < n.length; ++e) i[e] = n.charCodeAt(e);
                      return i;
                    })(
                      "BDmAry-HZ2ad1AV9HES7cUHQ4bsv09Ls0yJ_ko-YUz7BNDM2s7dUQwKstRfEX91HbmmeNRBvE7DOedlAFt8aKnU"
                    ),
                  });
                  (m({ subscription: JSON.stringify(e) }),
                    f(!0),
                    i.toastManager.add({
                      title: "Notifications enabled successfully",
                      type: "success",
                    }));
                }
              } catch (e) {
                (console.error("Failed to subscribe:", e),
                  e instanceof DOMException &&
                  "InvalidAccessError" === e.name &&
                  e.message.includes("applicationServerKey")
                    ? i.toastManager.add({
                        title: "Please enable Google services for push messaging and try again",
                        type: "error",
                      })
                    : i.toastManager.add({
                        title: "Failed to enable notifications",
                        type: "error",
                      }));
              } finally {
                d(!1);
              }
            },
            unsubscribe: async () => {
              if (c)
                try {
                  d(!0);
                  let e = await c.getSubscription();
                  if (e) {
                    let t = JSON.stringify(e);
                    (await e.unsubscribe(),
                      v({ subscription: t }),
                      f(!1),
                      i.toastManager.add({
                        title: "Notifications disabled successfully",
                        type: "success",
                      }));
                  }
                } catch (e) {
                  (console.error("Failed to unsubscribe:", e),
                    i.toastManager.add({
                      title: "Failed to disable notifications",
                      type: "error",
                    }));
                } finally {
                  d(!1);
                }
            },
          }),
          [s, l, p, c, m, v]
        );
        return (0, t.jsx)(a.Provider, { value: h, children: e });
      },
    ]);
  },
  45744,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645);
    function n() {
      let e = (0, r.useRef)(null),
        t = (0, r.useRef)(null),
        n = (0, r.useRef)(null),
        i = async () => {
          try {
            if (
              ((e.current && "closed" !== e.current.state) ||
                (e.current = new (window.AudioContext || window.webkitAudioContext)()),
              "suspended" === e.current.state && (await e.current.resume()),
              !n.current)
            ) {
              let t = await fetch("/ring.mp3"),
                r = await t.arrayBuffer();
              n.current = await e.current.decodeAudioData(r);
            }
            return !0;
          } catch (e) {
            return (console.error("Failed to initialize audio system:", e), !1);
          }
        },
        a = async () => {
          try {
            if (((!e.current || "closed" === e.current.state) && !(await i())) || !e.current)
              return;
            ("suspended" === e.current.state && (await e.current.resume()),
              t.current && (t.current.stop(), t.current.disconnect(), (t.current = null)));
            let r = e.current.createBufferSource();
            ((r.buffer = n.current),
              r.connect(e.current.destination),
              (t.current = r),
              (r.loop = !0),
              r.start(0),
              setTimeout(() => {
                t.current === r && (r.stop(), r.disconnect(), (t.current = null));
              }, 7e3));
          } catch (t) {
            (console.error("Error playing sound:", t), (e.current = null), (n.current = null));
          }
        },
        s = () => {
          t.current && (t.current.stop(), t.current.disconnect(), (t.current = null));
        };
      return (
        (0, r.useEffect)(
          () => () => {
            (s(),
              e.current && "closed" !== e.current.state && e.current.close(),
              (e.current = null),
              (n.current = null));
          },
          []
        ),
        (0, r.useEffect)(() => {
          if (!("serviceWorker" in navigator))
            return void console.warn("ServiceWorker not available");
          let e = async (e) => {
            ("PLAY_NOTIFICATION_SOUND" === e.data.type && (n.current || (await i()), await a()),
              "STOP_NOTIFICATION_SOUND" === e.data.type && s());
          };
          return (
            navigator.serviceWorker.addEventListener("message", e),
            () => navigator.serviceWorker.removeEventListener("message", e)
          );
        }, []),
        (0, r.useEffect)(() => {
          let e = async () => {
            (n.current || (await i()),
              document.removeEventListener("click", e),
              document.removeEventListener("touchstart", e));
          };
          return (
            document.addEventListener("click", e),
            document.addEventListener("touchstart", e),
            () => {
              (document.removeEventListener("click", e),
                document.removeEventListener("touchstart", e));
            }
          );
        }, []),
        null
      );
    }
    var i = e.i(454295),
      a = e.i(62420),
      s = e.i(173233),
      o = e.i(912598),
      c = e.i(317751);
    e.i(944362);
    var u = e.i(541730);
    let l = new c.QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1e3,
          retry(e, t) {
            if (t instanceof u.TRPCClientError && t.data) {
              let { code: e } = t.data;
              if ("BAD_REQUEST" === e || "FORBIDDEN" === e || "UNAUTHORIZED" === e) return !1;
            }
            return e < 3;
          },
        },
      },
    });
    e.i(98864);
    let d = (0, e.i(29309).createTRPCReact)({});
    e.i(247167);
    var p = e.i(287402),
      f = e.i(886117),
      m = e.i(911712),
      v = e.i(632082),
      h = e.i(156346),
      g = e.i(357892),
      b = e.i(39732),
      y = e.i(654291);
    let w = (e) => (t) => {
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
      P = "/api/trpc",
      S = d.createClient({
        links: [
          () =>
            ({ next: e, op: t }) => {
              let r = performance.now();
              return (0, b.observable)((n) =>
                e(t).subscribe({
                  next(e) {
                    n.next(e);
                  },
                  error(e) {
                    let i = performance.now() - r;
                    (f.metrics.distribution("trpc.client.duration_ms", i, {
                      attributes: { path: t.path, type: t.type, status: "error" },
                    }),
                      f.metrics.count("trpc.client.error", 1, {
                        attributes: { path: t.path, type: t.type },
                      }),
                      n.error(e));
                  },
                  complete() {
                    let e = performance.now() - r;
                    (f.metrics.distribution("trpc.client.duration_ms", e, {
                      attributes: { path: t.path, type: t.type, status: "ok" },
                    }),
                      n.complete());
                  },
                })
              );
            },
          (0, h.loggerLink)({
            enabled: (e) => "down" === e.direction && e.result instanceof Error,
          }),
          (0, g.splitLink)({
            condition: (e) => !!e.context.skipBatch,
            true: (e) =>
              w(
                Object.fromEntries(
                  p.ENDPOINTS.map((t) => [t, (0, v.httpLink)({ url: `${P}/${t}` })(e)])
                )
              ),
            false: (e) =>
              w(
                Object.fromEntries(
                  p.ENDPOINTS.map((t) => [t, (0, m.httpBatchLink)({ url: `${P}/${t}` })(e)])
                )
              ),
          }),
        ],
        transformer: y.default,
      }),
      E = ({ children: e }) =>
        (0, t.jsx)(d.Provider, {
          client: S,
          queryClient: l,
          children: (0, t.jsx)(o.QueryClientProvider, { client: l, children: e }),
        });
    var x = e.i(217255),
      R = e.i(380814);
    e.s(
      [
        "Providers",
        0,
        function ({ isEmbed: e, children: r, country: o }) {
          let c = (0, s.default)();
          return (0, t.jsx)(R.GeoProvider, {
            country: o,
            children: (0, t.jsx)(x.SessionProvider, {
              children: (0, t.jsx)(E, {
                children: (0, t.jsx)(a.ToastProvider, {
                  position: "bottom-center",
                  children: (0, t.jsxs)(a.AnchoredToastProvider, {
                    children: [
                      !e && !c && (0, t.jsx)(n, {}),
                      (0, t.jsx)(i.WebPushProvider, { children: r }),
                    ],
                  }),
                }),
              }),
            }),
          });
        },
      ],
      45744
    );
  },
  852441,
  (e) => {
    e.v((t) =>
      Promise.all(["static/chunks/0~..nmvgtm5mm.js"].map((t) => e.l(t))).then(() => t(68428))
    );
  },
]);
