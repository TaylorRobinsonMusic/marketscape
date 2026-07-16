(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  821410,
  (e) => {
    "use strict";
    let t;
    var n = e.i(247167);
    function r(e) {
      return e ? (e.startsWith("http://") || e.startsWith("https://") ? e : `https://${e}`) : "";
    }
    (n.default.env.RAILWAY_STATIC_URL && n.default.env.RAILWAY_STATIC_URL,
      n.default.env.RENDER_EXTERNAL_URL && n.default.env.RENDER_EXTERNAL_URL);
    let o = "production" === (n.default.env.CALCOM_ENV || "production");
    (n.default.env.ORGANIZER_EMAIL_EXEMPT_DOMAINS,
      n.default.env.__MSTEAMS_DEDICATED_VIDEO_MEETING_ORG_IDS?.trim() &&
        n.default.env.__MSTEAMS_DEDICATED_VIDEO_MEETING_ORG_IDS
          .split(",")
          .map((e) => Number(e.trim()))
          .filter((e) => Number.isInteger(e) && e > 0));
    let a = n.default.env.NEXT_PUBLIC_SINGLE_ORG_SLUG,
      l = r("https://app.cal.com") || "https://cal-h65pui31b-cal.vercel.app",
      i = r("https://cal.com") || "https://cal.com";
    n.default.env.EMAIL_FROM_NAME;
    let s = new URL(l).hostname.endsWith(".vercel.app") ? l : r("https://cal.com") || l,
      d =
        l &&
        (new URL(l).hostname.endsWith("cal.com") ||
          new URL(l).hostname.endsWith("cal.dev") ||
          new URL(l).hostname.endsWith("cal.qa") ||
          new URL(l).hostname.endsWith("cal-staging.com") ||
          new URL(l).hostname.endsWith("cal.eu"));
    l && new URL(l).hostname.endsWith("cal.eu");
    let c =
        new URL(l).hostname.endsWith(".cal.dev") ||
        new URL(l).hostname.endsWith(".cal.qa") ||
        new URL(l).hostname.endsWith(".cal-staging.com")
          ? "https://console.cal.dev"
          : "https://console.cal.com",
      u = new URL(l).hostname,
      E = ![".cal.com", ".cal.dev", ".cal.eu", ".cal.qa"].some((e) => u.endsWith(e)),
      _ = n.default.env.NEXT_PUBLIC_EMBED_LIB_URL || `${l}/embed/embed.js`,
      p = n.default.env.NEXT_PUBLIC_HOSTED_CAL_FEATURES || !E,
      f = parseInt(n.default.env.NEXT_PUBLIC_QUERY_RESERVATION_INTERVAL_SECONDS ?? "", 10) || 30,
      v = parseInt(n.default.env.NEXT_PUBLIC_QUERY_RESERVATION_STALE_TIME_SECONDS ?? "", 10) || 20,
      h =
        parseInt(n.default.env.NEXT_PUBLIC_QUERY_AVAILABLE_SLOTS_INTERVAL_SECONDS ?? "", 10) || 300,
      m = parseInt("0", 10) || 0;
    (n.default.env.STRIPE_CLIENT_ID && n.default.env.STRIPE_PRIVATE_KEY,
      n.default.env.NEXT_PUBLIC_ENABLE_PROFILE_SWITCHER);
    let T = JSON.parse(`[${n.default.env.ALLOWED_HOSTNAMES || ""}]`),
      I = JSON.parse(`[${n.default.env.RESERVED_SUBDOMAINS || ""}]`),
      R = JSON.parse(`[${n.default.env.ALLOWED_REDIRECT_ORIGINS || ""}]`);
    (parseFloat(n.default.env.NEXT_PUBLIC_ORGANIZATIONS_SELF_SERVE_PRICE_NEW || "37"),
      "1" === n.default.env.E2E_TEST_MAILPIT_ENABLED || n.default.env.E2E_TEST_MAILHOG_ENABLED,
      n.default.env.CALCOM_CREDENTIAL_SYNC_SECRET &&
        n.default.env.CALCOM_APP_CREDENTIAL_ENCRYPTION_KEY,
      n.default.env.CALCOM_CREDENTIAL_SYNC_SECRET,
      n.default.env.CALCOM_CREDENTIAL_SYNC_HEADER_NAME,
      n.default.env.CALCOM_CREDENTIAL_SYNC_ENDPOINT,
      n.default.env.CALCOM_SERVICE_ACCOUNT_ENCRYPTION_KEY,
      d || n.default.env.NEXT_PUBLIC_IS_E2E);
    let L = !!globalThis.window?.Meticulous?.isRunningAsTest;
    (parseInt(n.default.env.NEXT_PUBLIC_BOOKER_NUMBER_OF_DAYS_TO_LOAD ?? "0", 10),
      n.default.env.CALCOM_PRIVATE_API_ROUTE);
    let b = n.default.env.NEXT_PUBLIC_WEBSITE_PRIVACY_POLICY_URL || "https://cal.com/privacy",
      A = n.default.env.NEXT_PUBLIC_WEBSITE_TERMS_URL || "https://cal.com/terms";
    n.default.env.LINGO_DOT_DEV_API_KEY;
    let N = o ? `${l}/sparkles-red.svg` : "https://app.cal.com/sparkles-red.svg",
      C = o ? `${l}/sparkles.svg` : "https://app.cal.com/sparkles.svg",
      S = o ? `${l}/start-recording.svg` : "https://app.cal.com/start-recording.svg",
      O = o ? `${l}/stop-recording.svg` : "https://app.cal.com/stop-recording.svg";
    n.default.env.DIRECTORY_IDS_TO_LOG?.split(",");
    let g = !!(!E && n.default.env.IFFY_API_KEY);
    (n.default.env.CLOUDFLARE_URL_SCANNER_API_TOKEN && n.default.env.CLOUDFLARE_ACCOUNT_ID,
      n.default.env.DUB_SMS_DOMAIN,
      n.default.env.DUB_SMS_FOLDER_ID,
      n.default.env.CAL_VIDEO_MEETING_LINK_FOR_TESTING,
      parseInt(n.default.env.DATABASE_CHUNK_SIZE || "25", 10));
    let x = Number.isFinite((t = "" !== "5".trim() ? Number("5") : NaN)) ? t : 5,
      D = "true" === n.default.env.RETELL_AI_TEST_MODE,
      w = (() => {
        if (!n.default.env.RETELL_AI_TEST_EVENT_TYPE_MAP) return null;
        try {
          return JSON.parse(n.default.env.RETELL_AI_TEST_EVENT_TYPE_MAP);
        } catch (e) {
          return (console.warn("Failed to parse RETELL_AI_TEST_EVENT_TYPE_MAP", e), null);
        }
      })();
    (n.default.env._CAL_INTERNAL_PAST_BOOKING_RESCHEDULE_CHANGE_TEAM_IDS,
      n.default.env.STRIPE_ORG_TRIAL_DAYS && parseInt(n.default.env.STRIPE_ORG_TRIAL_DAYS, 10),
      n.default.env.IS_E2E,
      "true" === n.default.env.ENABLE_ASYNC_TASKER && n.default.env.NEXT_PUBLIC_IS_E2E);
    let y = !E && "true" === n.default.env.NEXT_PUBLIC_RESTRICT_REDIRECT_URLS;
    e.s([
      "ALLOWED_HOSTNAMES",
      0,
      T,
      "ALLOWED_REDIRECT_ORIGINS",
      0,
      R,
      "API_NAME_LENGTH_MAX_LIMIT",
      0,
      80,
      "APP_NAME",
      0,
      "Cal.com",
      "AVATAR_FALLBACK",
      0,
      "/avatar.svg",
      "CALCOM_VERSION",
      0,
      "6.7.0-hotfix1",
      "CAL_AI_PHONE_NUMBER_MONTHLY_PRICE",
      0,
      x,
      "CAL_URL",
      0,
      s,
      "CITY_TIMEZONE_HASH",
      0,
      "58b6ead3",
      "CLOUDFLARE_SITE_ID",
      0,
      "0x4AAAAAAAb88ltKXqpTgH2P",
      "CLOUDFLARE_USE_TURNSTILE_IN_BOOKER",
      0,
      "0",
      "COMPANY_NAME",
      0,
      "Cal.com, Inc.",
      "CONSOLE_URL",
      0,
      c,
      "DEFAULT_DARK_BRAND_COLOR",
      0,
      "#fafafa",
      "DEFAULT_LIGHT_BRAND_COLOR",
      0,
      "#292929",
      "DOCS_URL",
      0,
      "https://cal.com/docs",
      "EMBED_LIB_URL",
      0,
      _,
      "FULL_NAME_LENGTH_MAX_LIMIT",
      0,
      50,
      "HOSTED_CAL_FEATURES",
      0,
      p,
      "IS_CALCOM",
      0,
      d,
      "IS_DUB_REFERRALS_ENABLED",
      0,
      !0,
      "IS_PRODUCTION",
      0,
      o,
      "IS_SELF_HOSTED",
      0,
      E,
      "IS_SMS_CREDITS_ENABLED",
      0,
      !0,
      "IS_TEAM_BILLING_ENABLED_CLIENT",
      0,
      p,
      "IS_VISUAL_REGRESSION_TESTING",
      0,
      L,
      "MAX_EVENT_DURATION_MINUTES",
      0,
      1440,
      "MAX_NB_INVITES",
      0,
      100,
      "MAX_SEATS_PER_TIME_SLOT",
      0,
      1e3,
      "MINUTES_TO_BOOK",
      0,
      "2",
      "MIN_EVENT_DURATION_MINUTES",
      0,
      1,
      "POWERED_BY_URL",
      0,
      "https://go.cal.com/booking",
      "PUBLIC_INVALIDATE_AVAILABLE_SLOTS_ON_BOOKING_FORM",
      0,
      !0,
      "PUBLIC_QUERY_AVAILABLE_SLOTS_INTERVAL_SECONDS",
      0,
      h,
      "PUBLIC_QUERY_RESERVATION_INTERVAL_SECONDS",
      0,
      f,
      "PUBLIC_QUERY_RESERVATION_STALE_TIME_SECONDS",
      0,
      v,
      "PUBLIC_QUICK_AVAILABILITY_ROLLOUT",
      0,
      m,
      "RECORDING_DEFAULT_ICON",
      0,
      S,
      "RECORDING_IN_PROGRESS_ICON",
      0,
      O,
      "RESERVED_SUBDOMAINS",
      0,
      I,
      "RESTRICT_REDIRECT_URLS",
      0,
      y,
      "RETELL_AI_TEST_EVENT_TYPE_MAP",
      0,
      w,
      "RETELL_AI_TEST_MODE",
      0,
      D,
      "ROADMAP",
      0,
      "https://cal.com/roadmap",
      "ROLLING_WINDOW_PERIOD_MAX_DAYS_TO_CHECK",
      0,
      61,
      "SCANNING_WORKFLOW_STEPS",
      0,
      g,
      "SENDER_ID",
      0,
      "Calcom",
      "SENDER_NAME",
      0,
      "Cal.com",
      "SINGLE_ORG_SLUG",
      0,
      a,
      "SUPPORT_MAIL_ADDRESS",
      0,
      "help@cal.com",
      "TRANSCRIPTION_STARTED_ICON",
      0,
      N,
      "TRANSCRIPTION_STOPPED_ICON",
      0,
      C,
      "URL_PROTOCOL_REGEX",
      0,
      /(^\w+:|^)\/\//,
      "WEBAPP_URL",
      0,
      l,
      "WEBSITE_PRIVACY_POLICY_URL",
      0,
      b,
      "WEBSITE_TERMS_URL",
      0,
      A,
      "WEBSITE_URL",
      0,
      i,
    ]);
  },
  944815,
  (e) => {
    "use strict";
    let t = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
      n = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return t
          .flat(1 / 0)
          .filter(Boolean)
          .join(" ");
      };
    e.s([
      "cva",
      0,
      (e, r) => (o) => {
        var a;
        if ((null == r ? void 0 : r.variants) == null)
          return n(e, null == o ? void 0 : o.class, null == o ? void 0 : o.className);
        let { variants: l, defaultVariants: i } = r,
          s = Object.keys(l).map((e) => {
            let n = null == o ? void 0 : o[e],
              r = null == i ? void 0 : i[e];
            if (null === n) return null;
            let a = t(n) || t(r);
            return l[e][a];
          }),
          d =
            o &&
            Object.entries(o).reduce((e, t) => {
              let [n, r] = t;
              return (void 0 === r || (e[n] = r), e);
            }, {});
        return n(
          e,
          s,
          null == r || null == (a = r.compoundVariants)
            ? void 0
            : a.reduce((e, t) => {
                let { class: n, className: r, ...o } = t;
                return Object.entries(o).every((e) => {
                  let [t, n] = e;
                  return Array.isArray(n) ? n.includes({ ...i, ...d }[t]) : { ...i, ...d }[t] === n;
                })
                  ? [...e, n, r]
                  : e;
              }, []),
          null == o ? void 0 : o.class,
          null == o ? void 0 : o.className
        );
      },
    ]);
  },
  959411,
  (e) => {
    "use strict";
    var t = e.i(931067),
      n = e.i(271645),
      r = e.i(248425);
    let o = (0, n.forwardRef)((e, o) =>
      (0, n.createElement)(
        r.Primitive.span,
        (0, t.default)({}, e, {
          ref: o,
          style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style,
          },
        })
      )
    );
    e.s(["Root", 0, o]);
  },
  113919,
  186336,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(255889),
      r = e.i(931067),
      o = e.i(271645),
      a = e.i(981140),
      l = e.i(820783),
      i = e.i(30030),
      s = e.i(726330),
      d = e.i(610772),
      c = e.i(853660),
      u = e.i(174080),
      E = e.i(248425);
    let _ = (0, o.forwardRef)((e, t) => {
      var n;
      let {
        container: a = null == globalThis || null == (n = globalThis.document) ? void 0 : n.body,
        ...l
      } = e;
      return a
        ? u.default.createPortal(
            (0, o.createElement)(E.Primitive.div, (0, r.default)({}, l, { ref: t })),
            a
          )
        : null;
    });
    var p = e.i(296626);
    (0, o.forwardRef)((e, t) => {
      let { children: n, ...a } = e,
        l = o.Children.toArray(n),
        i = l.find(h);
      if (i) {
        let e = i.props.children,
          n = l.map((t) =>
            t !== i
              ? t
              : o.Children.count(e) > 1
                ? o.Children.only(null)
                : (0, o.isValidElement)(e)
                  ? e.props.children
                  : null
          );
        return (0, o.createElement)(
          f,
          (0, r.default)({}, a, { ref: t }),
          (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, n) : null
        );
      }
      return (0, o.createElement)(f, (0, r.default)({}, a, { ref: t }), n);
    }).displayName = "Slot";
    let f = (0, o.forwardRef)((e, t) => {
      let { children: n, ...r } = e;
      return (0, o.isValidElement)(n)
        ? (0, o.cloneElement)(n, {
            ...(function (e, t) {
              let n = { ...t };
              for (let r in t) {
                let o = e[r],
                  a = t[r];
                /^on[A-Z]/.test(r)
                  ? o && a
                    ? (n[r] = (...e) => {
                        (a(...e), o(...e));
                      })
                    : o && (n[r] = o)
                  : "style" === r
                    ? (n[r] = { ...o, ...a })
                    : "className" === r && (n[r] = [o, a].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(r, n.props),
            ref: t ? (0, l.composeRefs)(t, n.ref) : n.ref,
          })
        : o.Children.count(n) > 1
          ? o.Children.only(null)
          : null;
    });
    f.displayName = "SlotClone";
    let v = ({ children: e }) => (0, o.createElement)(o.Fragment, null, e);
    function h(e) {
      return (0, o.isValidElement)(e) && e.type === v;
    }
    var m = e.i(369340),
      T = e.i(959411);
    let [I, R] = (0, i.createContextScope)("Tooltip", [c.createPopperScope]),
      L = (0, c.createPopperScope)(),
      b = "tooltip.open",
      [A, N] = I("TooltipProvider"),
      C = (e) => {
        let {
            __scopeTooltip: t,
            delayDuration: n = 700,
            skipDelayDuration: r = 300,
            disableHoverableContent: a = !1,
            children: l,
          } = e,
          [i, s] = (0, o.useState)(!0),
          d = (0, o.useRef)(!1),
          c = (0, o.useRef)(0);
        return (
          (0, o.useEffect)(() => {
            let e = c.current;
            return () => window.clearTimeout(e);
          }, []),
          (0, o.createElement)(
            A,
            {
              scope: t,
              isOpenDelayed: i,
              delayDuration: n,
              onOpen: (0, o.useCallback)(() => {
                (window.clearTimeout(c.current), s(!1));
              }, []),
              onClose: (0, o.useCallback)(() => {
                (window.clearTimeout(c.current), (c.current = window.setTimeout(() => s(!0), r)));
              }, [r]),
              isPointerInTransitRef: d,
              onPointerInTransitChange: (0, o.useCallback)((e) => {
                d.current = e;
              }, []),
              disableHoverableContent: a,
            },
            l
          )
        );
      },
      S = "Tooltip",
      [O, g] = I(S),
      x = "TooltipTrigger",
      D = (0, o.forwardRef)((e, t) => {
        let { __scopeTooltip: n, ...i } = e,
          s = g(x, n),
          d = N(x, n),
          u = L(n),
          _ = (0, o.useRef)(null),
          p = (0, l.useComposedRefs)(t, _, s.onTriggerChange),
          f = (0, o.useRef)(!1),
          v = (0, o.useRef)(!1),
          h = (0, o.useCallback)(() => (f.current = !1), []);
        return (
          (0, o.useEffect)(() => () => document.removeEventListener("pointerup", h), [h]),
          (0, o.createElement)(
            c.Anchor,
            (0, r.default)({ asChild: !0 }, u),
            (0, o.createElement)(
              E.Primitive.button,
              (0, r.default)(
                {
                  "aria-describedby": s.open ? s.contentId : void 0,
                  "data-state": s.stateAttribute,
                },
                i,
                {
                  ref: p,
                  onPointerMove: (0, a.composeEventHandlers)(e.onPointerMove, (e) => {
                    "touch" !== e.pointerType &&
                      (v.current ||
                        d.isPointerInTransitRef.current ||
                        (s.onTriggerEnter(), (v.current = !0)));
                  }),
                  onPointerLeave: (0, a.composeEventHandlers)(e.onPointerLeave, () => {
                    (s.onTriggerLeave(), (v.current = !1));
                  }),
                  onPointerDown: (0, a.composeEventHandlers)(e.onPointerDown, () => {
                    ((f.current = !0), document.addEventListener("pointerup", h, { once: !0 }));
                  }),
                  onFocus: (0, a.composeEventHandlers)(e.onFocus, () => {
                    f.current || s.onOpen();
                  }),
                  onBlur: (0, a.composeEventHandlers)(e.onBlur, s.onClose),
                  onClick: (0, a.composeEventHandlers)(e.onClick, s.onClose),
                }
              )
            )
          )
        );
      }),
      w = "TooltipPortal",
      [y, P] = I(w, { forceMount: void 0 }),
      U = "TooltipContent",
      M = (0, o.forwardRef)((e, t) => {
        let n = P(U, e.__scopeTooltip),
          { forceMount: a = n.forceMount, side: l = "top", ...i } = e,
          s = g(U, e.__scopeTooltip);
        return (0, o.createElement)(
          p.Presence,
          { present: a || s.open },
          s.disableHoverableContent
            ? (0, o.createElement)(Y, (0, r.default)({ side: l }, i, { ref: t }))
            : (0, o.createElement)(B, (0, r.default)({ side: l }, i, { ref: t }))
        );
      }),
      B = (0, o.forwardRef)((e, t) => {
        let n = g(U, e.__scopeTooltip),
          a = N(U, e.__scopeTooltip),
          i = (0, o.useRef)(null),
          s = (0, l.useComposedRefs)(t, i),
          [d, c] = (0, o.useState)(null),
          { trigger: u, onClose: E } = n,
          _ = i.current,
          { onPointerInTransitChange: p } = a,
          f = (0, o.useCallback)(() => {
            (c(null), p(!1));
          }, [p]),
          v = (0, o.useCallback)(
            (e, t) => {
              let n,
                r = e.currentTarget,
                o = { x: e.clientX, y: e.clientY },
                a = (function (e, t) {
                  let n = Math.abs(t.top - e.y),
                    r = Math.abs(t.bottom - e.y),
                    o = Math.abs(t.right - e.x),
                    a = Math.abs(t.left - e.x);
                  switch (Math.min(n, r, o, a)) {
                    case a:
                      return "left";
                    case o:
                      return "right";
                    case n:
                      return "top";
                    case r:
                      return "bottom";
                    default:
                      throw Error("unreachable");
                  }
                })(o, r.getBoundingClientRect());
              (c(
                ((n = [
                  ...(function (e, t, n = 5) {
                    let r = [];
                    switch (t) {
                      case "top":
                        r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
                        break;
                      case "bottom":
                        r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
                        break;
                      case "left":
                        r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
                        break;
                      case "right":
                        r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
                    }
                    return r;
                  })(o, a),
                  ...(function (e) {
                    let { top: t, right: n, bottom: r, left: o } = e;
                    return [
                      { x: o, y: t },
                      { x: n, y: t },
                      { x: n, y: r },
                      { x: o, y: r },
                    ];
                  })(t.getBoundingClientRect()),
                ].slice()).sort((e, t) =>
                  e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : 1 * !!(e.y > t.y)
                ),
                (function (e) {
                  if (e.length <= 1) return e.slice();
                  let t = [];
                  for (let n = 0; n < e.length; n++) {
                    let r = e[n];
                    for (; t.length >= 2; ) {
                      let e = t[t.length - 1],
                        n = t[t.length - 2];
                      if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
                      else break;
                    }
                    t.push(r);
                  }
                  t.pop();
                  let n = [];
                  for (let t = e.length - 1; t >= 0; t--) {
                    let r = e[t];
                    for (; n.length >= 2; ) {
                      let e = n[n.length - 1],
                        t = n[n.length - 2];
                      if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
                      else break;
                    }
                    n.push(r);
                  }
                  return (n.pop(),
                  1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y)
                    ? t
                    : t.concat(n);
                })(n))
              ),
                p(!0));
            },
            [p]
          );
        return (
          (0, o.useEffect)(() => () => f(), [f]),
          (0, o.useEffect)(() => {
            if (u && _) {
              let e = (e) => v(e, _),
                t = (e) => v(e, u);
              return (
                u.addEventListener("pointerleave", e),
                _.addEventListener("pointerleave", t),
                () => {
                  (u.removeEventListener("pointerleave", e),
                    _.removeEventListener("pointerleave", t));
                }
              );
            }
          }, [u, _, v, f]),
          (0, o.useEffect)(() => {
            if (d) {
              let e = (e) => {
                let t = e.target,
                  n = { x: e.clientX, y: e.clientY },
                  r = (null == u ? void 0 : u.contains(t)) || (null == _ ? void 0 : _.contains(t)),
                  o = !(function (e, t) {
                    let { x: n, y: r } = e,
                      o = !1;
                    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                      let l = t[e].x,
                        i = t[e].y,
                        s = t[a].x,
                        d = t[a].y;
                      i > r != d > r && n < ((s - l) * (r - i)) / (d - i) + l && (o = !o);
                    }
                    return o;
                  })(n, d);
                r ? f() : o && (f(), E());
              };
              return (
                document.addEventListener("pointermove", e),
                () => document.removeEventListener("pointermove", e)
              );
            }
          }, [u, _, d, E, f]),
          (0, o.createElement)(Y, (0, r.default)({}, e, { ref: s }))
        );
      }),
      [V, k] = I(S, { isInside: !1 }),
      Y = (0, o.forwardRef)((e, t) => {
        let {
            __scopeTooltip: n,
            children: a,
            "aria-label": l,
            onEscapeKeyDown: i,
            onPointerDownOutside: d,
            ...u
          } = e,
          E = g(U, n),
          _ = L(n),
          { onClose: p } = E;
        return (
          (0, o.useEffect)(
            () => (document.addEventListener(b, p), () => document.removeEventListener(b, p)),
            [p]
          ),
          (0, o.useEffect)(() => {
            if (E.trigger) {
              let e = (e) => {
                let t = e.target;
                null != t && t.contains(E.trigger) && p();
              };
              return (
                window.addEventListener("scroll", e, { capture: !0 }),
                () => window.removeEventListener("scroll", e, { capture: !0 })
              );
            }
          }, [E.trigger, p]),
          (0, o.createElement)(
            s.DismissableLayer,
            {
              asChild: !0,
              disableOutsidePointerEvents: !1,
              onEscapeKeyDown: i,
              onPointerDownOutside: d,
              onFocusOutside: (e) => e.preventDefault(),
              onDismiss: p,
            },
            (0, o.createElement)(
              c.Content,
              (0, r.default)({ "data-state": E.stateAttribute }, _, u, {
                ref: t,
                style: {
                  ...u.style,
                  "--radix-tooltip-content-transform-origin":
                    "var(--radix-popper-transform-origin)",
                  "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-tooltip-content-available-height":
                    "var(--radix-popper-available-height)",
                  "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)",
                },
              }),
              (0, o.createElement)(v, null, a),
              (0, o.createElement)(
                V,
                { scope: n, isInside: !0 },
                (0, o.createElement)(T.Root, { id: E.contentId, role: "tooltip" }, l || a)
              )
            )
          )
        );
      }),
      F = (e) => {
        let {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: a = !1,
            onOpenChange: l,
            disableHoverableContent: i,
            delayDuration: s,
          } = e,
          u = N(S, e.__scopeTooltip),
          E = L(t),
          [_, p] = (0, o.useState)(null),
          f = (0, d.useId)(),
          v = (0, o.useRef)(0),
          h = null != i ? i : u.disableHoverableContent,
          T = null != s ? s : u.delayDuration,
          I = (0, o.useRef)(!1),
          [R = !1, A] = (0, m.useControllableState)({
            prop: r,
            defaultProp: a,
            onChange: (e) => {
              (e ? (u.onOpen(), document.dispatchEvent(new CustomEvent(b))) : u.onClose(),
                null == l || l(e));
            },
          }),
          C = (0, o.useMemo)(
            () => (R ? (I.current ? "delayed-open" : "instant-open") : "closed"),
            [R]
          ),
          g = (0, o.useCallback)(() => {
            (window.clearTimeout(v.current), (I.current = !1), A(!0));
          }, [A]),
          x = (0, o.useCallback)(() => {
            (window.clearTimeout(v.current), A(!1));
          }, [A]),
          D = (0, o.useCallback)(() => {
            (window.clearTimeout(v.current),
              (v.current = window.setTimeout(() => {
                ((I.current = !0), A(!0));
              }, T)));
          }, [T, A]);
        return (
          (0, o.useEffect)(() => () => window.clearTimeout(v.current), []),
          (0, o.createElement)(
            c.Root,
            E,
            (0, o.createElement)(
              O,
              {
                scope: t,
                contentId: f,
                open: R,
                stateAttribute: C,
                trigger: _,
                onTriggerChange: p,
                onTriggerEnter: (0, o.useCallback)(() => {
                  u.isOpenDelayed ? D() : g();
                }, [u.isOpenDelayed, D, g]),
                onTriggerLeave: (0, o.useCallback)(() => {
                  h ? x() : window.clearTimeout(v.current);
                }, [x, h]),
                onOpen: g,
                onClose: x,
                disableHoverableContent: h,
              },
              n
            )
          )
        );
      },
      G = (e) => {
        let { __scopeTooltip: t, forceMount: n, children: r, container: a } = e,
          l = g(w, t);
        return (0, o.createElement)(
          y,
          { scope: t, forceMount: n },
          (0, o.createElement)(
            p.Presence,
            { present: n || l.open },
            (0, o.createElement)(_, { asChild: !0, container: a }, r)
          )
        );
      };
    function W({
      children: e,
      content: r,
      open: o,
      defaultOpen: a,
      onOpenChange: l,
      delayDuration: i,
      side: s = "top",
      align: d = "center",
      ...c
    }) {
      let u = (0, t.jsx)(M, {
        ...c,
        className: (0, n.default)(
          "calcom-tooltip",
          "top" === s && "-mt-7",
          "left" === s && "mr-2",
          "right" === s && "ml-2",
          "bg-inverted text-inverted relative z-50 rounded-sm px-2 py-1 text-xs font-semibold shadow-lg",
          c.className && `${c.className}`
        ),
        side: s,
        align: d,
        children: r,
      });
      return (0, t.jsxs)(F, {
        delayDuration: i || 50,
        open: o,
        defaultOpen: a,
        onOpenChange: l,
        children: [(0, t.jsx)(D, { asChild: !0, children: e }), (0, t.jsx)(G, { children: u })],
      });
    }
    (e.s(
      [
        "Content",
        0,
        M,
        "Portal",
        0,
        G,
        "Provider",
        0,
        C,
        "Root",
        0,
        F,
        "TooltipProvider",
        0,
        C,
        "Trigger",
        0,
        D,
      ],
      186336
    ),
      e.s(["Tooltip", 0, W, "default", 0, W], 113919));
  },
  857739,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(255889),
      r = e.i(320937),
      o = e.i(944815),
      a = e.i(522016),
      l = e.i(271645),
      i = e.i(113919);
    let s = (0, o.cva)(
        "group whitespace-nowrap inline-flex items-center text-sm font-medium relative rounded-lg transition cursor-pointer disabled:cursor-not-allowed gap-1",
        {
          variants: {
            variant: {
              button: "",
              icon: "flex justify-center",
              fab: "min-w-14 min-h-14 md:min-w-min md:min-h-min rounded-full justify-center md:rounded-lg radix-state-open:rotate-45 md:radix-state-open:rotate-0 radix-state-open:shadown-none radix-state-open:ring-0",
            },
            color: {
              primary: [
                "bg-brand-default",
                "text-brand",
                "not-disabled:hover:bg-brand-emphasis",
                "focus-visible:outline-none",
                "focus-visible:ring-0",
                "focus-visible:shadow-button-solid-brand-focused",
                "border border-brand-default",
                "disabled:opacity-30",
                "shadow-button-solid-brand-default",
                "not-disabled:active:shadow-button-solid-brand-active",
                "not-disabled:hover:shadow-button-solid-brand-hover",
                "transition-shadow",
                "transition-transform",
                "duration-100",
              ],
              secondary: [
                "bg-default",
                "text-default",
                "border",
                "border-default",
                "not-disabled:hover:bg-cal-muted",
                "not-disabled:hover:text-emphasis",
                "disabled:opacity-30",
                "focus-visible:bg-subtle",
                "focus-visible:outline-none",
                "focus-visible:ring-0",
                "focus-visible:shadow-outline-gray-focused",
                "shadow-outline-gray-rested",
                "not-disabled:hover:shadow-outline-gray-hover",
                "not-disabled:active:shadow-outline-gray-active",
                "transition-shadow",
                "duration-200",
              ],
              minimal: [
                "text-subtle",
                "border border-transparent",
                "not-disabled:hover:bg-subtle",
                "not-disabled:hover:text-emphasis",
                "not-disabled:hover:border-subtle hover:border",
                "disabled:opacity-30",
                "focus-visible:bg-subtle",
                "focus-visible:outline-none",
                "focus-visible:ring-0",
                "focus-visible:border-subtle",
                "focus-visible:shadow-button-outline-gray-focused",
                "not-disabled:active:shadow-outline-gray-active",
                "transition-shadow",
                "duration-200",
              ],
              destructive: [
                "border",
                "border-default",
                "text-error",
                "dark:hover:text-red-400",
                "hover:border-semantic-error",
                "hover:bg-error",
                "focus-visible:text-red-700",
                "focus-visible:bg-error",
                "focus-visible:outline-none",
                "focus-visible:ring-0",
                "focus-visible:shadow-button-outline-red-focused",
                "disabled:bg-red-100",
                "disabled:border-red-200",
                "disabled:text-red-700",
                "disabled:hover:border-red-200",
                "disabled:opacity-30",
                "shadow-outline-red-rested",
                "not-disabled:hover:shadow-outline-red-hover",
                "not-disabled:active:shadow-outline-red-active",
                "transition-shadow",
                "duration-200",
              ],
            },
            size: {
              xs: "h-6 p-2 leading-none text-xs rounded-md",
              sm: "h-7 px-2 py-1.5 leading-none text-sm",
              base: "px-2.5 py-2 text-sm leading-none",
              lg: "px-3 py-2.5 ",
            },
            loading: { true: "cursor-wait" },
          },
          compoundVariants: [
            { loading: !0, color: "primary", className: "opacity-30" },
            { loading: !0, color: "secondary", className: "bg-subtle text-emphasis/80" },
            { loading: !0, color: "minimal", className: "bg-subtle text-emphasis/30" },
            {
              loading: !0,
              color: "destructive",
              className:
                "text-red-700/30 dark:text-red-700/30 hover:text-red-700/30  border border-default text-emphasis",
            },
            {
              variant: "icon",
              size: "base",
              className: "min-h-[36px] min-w-[36px] p-2! hover:border-default",
            },
            { variant: "icon", size: "xs", className: "h-5 w-5 p-1! rounded-md" },
            { variant: "icon", size: "sm", className: "h-6 w-6 p-1! rounded-md" },
            { variant: "icon", size: "lg", className: "h-10 w-10 p-1!" },
            { variant: "fab", size: "base", className: "md:px-4 md:py-2.5" },
          ],
          defaultVariants: { variant: "button", color: "primary", size: "base" },
        }
      ),
      d = (0, l.forwardRef)(function (e, o) {
        let {
            loading: l = !1,
            color: i = "primary",
            size: d,
            variant: u = "button",
            type: E = "button",
            tooltipSide: _ = "top",
            tooltipOffset: p = 4,
            tooltipClassName: f,
            StartIcon: v,
            CustomStartIcon: h,
            EndIcon: m,
            shallow: T,
            ...I
          } = e,
          R = e.disabled || l || !1,
          L = void 0 !== e.href,
          b = (0, n.default)(s({ color: i, size: d, loading: l, variant: u }), e.className),
          A = R
            ? (e) => {
                e.preventDefault();
              }
            : e.onClick,
          N = (e, n) => (0, t.jsx)(e, { className: n }),
          C = (0, t.jsxs)(t.Fragment, {
            children: [
              h ||
                (v &&
                  (0, t.jsx)(t.Fragment, {
                    children:
                      "fab" === u
                        ? (0, t.jsxs)(t.Fragment, {
                            children: [
                              N(v, "hidden h-4 w-4 shrink-0 stroke-[1.5px]  md:inline-flex"),
                              (0, t.jsx)(r.PlusIcon, {
                                "data-testid": "plus",
                                size: 24,
                                className: "inline shrink-0 md:hidden",
                              }),
                            ],
                          })
                        : N(
                            v,
                            (0, n.default)(
                              "shrink-0",
                              l ? "invisible" : "visible",
                              "button-icon group-[:not(div):active]:translate-y-[0.5px]",
                              "icon" === u && "h-4 w-4",
                              "button" === u && "h-4 w-4 stroke-[1.5px] "
                            )
                          ),
                  })),
              (0, t.jsx)("div", {
                className: (0, n.default)(
                  "contents",
                  l ? "invisible" : "visible",
                  "fab" === u ? "hidden md:contents" : "",
                  "group-[:not(div):active]:translate-y-[0.5px]"
                ),
                children: e.children,
              }),
              l &&
                (0, t.jsx)("div", {
                  className:
                    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform",
                  children: (0, t.jsxs)("svg", {
                    className: (0, n.default)(
                      "mx-4 h-5 w-5 animate-spin",
                      "primary" === i ? "text-inverted" : "text-emphasis"
                    ),
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                      (0, t.jsx)("circle", {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4",
                      }),
                      (0, t.jsx)("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                      }),
                    ],
                  }),
                }),
              m &&
                (0, t.jsx)(t.Fragment, {
                  children:
                    "fab" === u
                      ? (0, t.jsxs)(t.Fragment, {
                          children: [
                            N(m, "hidden h-4 w-4 shrink-0 stroke-[1.5px] md:inline-flex"),
                            (0, t.jsx)(r.PlusIcon, {
                              "data-testid": "plus",
                              size: 24,
                              className: "inline shrink-0 md:hidden",
                            }),
                          ],
                        })
                      : N(
                          m,
                          (0, n.default)(
                            "shrink-0",
                            l ? "invisible" : "visible",
                            "group-[:not(div):active]:translate-y-[0.5px]",
                            "icon" === u && "h-4 w-4",
                            "button" === u && "h-4 w-4 stroke-[1.5px] "
                          )
                        ),
                }),
            ],
          });
        return L
          ? (0, t.jsx)(a.default, { ...I, shallow: T && T, className: b, onClick: A, children: C })
          : (0, t.jsx)(c, {
              "data-testid": "wrapper",
              tooltip: e.tooltip,
              tooltipSide: _,
              tooltipOffset: p,
              tooltipClassName: f,
              children: (0, t.jsx)("button", {
                ...I,
                ref: o,
                disabled: R,
                type: E,
                className: b,
                onClick: A,
                children: C,
              }),
            });
      }),
      c = ({ children: e, tooltip: n, tooltipSide: r, tooltipOffset: o, tooltipClassName: a }) =>
        n
          ? (0, t.jsx)(i.Tooltip, {
              "data-testid": "tooltip",
              className: a,
              content: n,
              side: r,
              sideOffset: o,
              children: e,
            })
          : (0, t.jsx)(t.Fragment, { children: e });
    ((d.displayName = "Button"), e.s(["Button", 0, d, "buttonClasses", 0, s]));
  },
]);
