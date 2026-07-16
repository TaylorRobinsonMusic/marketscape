(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  464557,
  (e) => {
    "use strict";
    let t = (0, e.i(166748).createWithEqualityFn)((e) => ({
      overlayBusyDates: void 0,
      setOverlayBusyDates: (t) => {
        e({ overlayBusyDates: t });
      },
      isOverlayCalendarEnabled: !1,
      setIsOverlayCalendarEnabled: (t) => {
        e({ isOverlayCalendarEnabled: t });
      },
      calendarSettingsOverlayModal: !1,
      setCalendarSettingsOverlayModal: (t) => {
        e({ calendarSettingsOverlayModal: t });
      },
      continueWithProviderModal: !1,
      setContinueWithProviderModal: (t) => {
        e({ continueWithProviderModal: t });
      },
    }));
    e.s(["useOverlayCalendarStore", 0, t]);
  },
  94509,
  (e) => {
    "use strict";
    e.s([
      "useEmbedStyles",
      0,
      (e) => ({}),
      "useEmbedType",
      0,
      () => void 0,
      "useEmbedUiConfig",
      0,
      () => ({}),
      "useIsEmbed",
      0,
      () => {
        try {
          return window.parent !== window;
        } catch {
          return !0;
        }
      },
      "useSlotsViewOnSmallScreen",
      0,
      () => !1,
    ]);
  },
  516570,
  (e) => {
    "use strict";
    var t = e.i(450608),
      a = e.i(808342),
      n = e.i(870934),
      r = e.i(742083);
    e.s([
      "useBookerTime",
      0,
      () => {
        let [e] = (0, n.useBookerStoreContext)((e) => [e.timezone], t.shallow),
          { timezone: o, timeFormat: i } = (0, a.useTimePreferences)();
        return {
          timezone: (0, r.getBookerTimezone)({ storeTimezone: e, bookerUserPreferredTimezone: o }),
          timeFormat: i,
          timezoneFromBookerStore: e,
          timezoneFromTimePreferences: o,
        };
      },
    ]);
  },
  234452,
  (e) => {
    "use strict";
    var t = e.i(870934),
      a = e.i(516570),
      n = e.i(271645),
      r = e.i(347637),
      o = e.i(273446),
      i = e.i(423105),
      l = e.i(450608);
    e.s(
      [
        "useEvent",
        0,
        (e) => {
          let [a, n, r, i] = (0, t.useBookerStoreContext)(
              (e) => [e.username, e.eventSlug, e.isTeamEvent, e.org],
              l.shallow
            ),
            s = o.trpc.viewer.public.event.useQuery(
              {
                username: a ?? "",
                eventSlug: n ?? "",
                isTeamEvent: r,
                org: i ?? null,
                fromRedirectOfNonOrgLink: e?.fromRedirectOfNonOrgLink,
              },
              { refetchOnWindowFocus: !1, enabled: !e?.disabled && !!a && !!n }
            );
          return {
            data: s?.data,
            isSuccess: s?.isSuccess,
            isError: s?.isError,
            isPending: s?.isPending,
          };
        },
        "useScheduleForEvent",
        0,
        ({
          username: e,
          eventSlug: o,
          eventId: s,
          month: d,
          duration: u,
          dayCount: c,
          selectedDate: m,
          orgSlug: f,
          teamMemberEmail: p,
          isTeamEvent: h,
          useApiV2: y = !0,
          bookerLayout: g,
          restrictionSchedule: v,
          _isSettingsPreview: b,
          _previewOverrides: x,
          _previewSchedule: w,
        }) => {
          let D,
            { timezone: E } = (0, a.useBookerTime)(),
            [O, C, T, k] = (0, t.useBookerStoreContext)(
              (e) => [e.username, e.eventSlug, e.month, e.selectedDuration],
              l.shallow
            ),
            S =
              ((D = (0, n.useRef)(E)),
              v?.id != null && v.id > 0 && !1 === v.useBookerTimezone ? D.current : E),
            P = (0, r.useCompatSearchParams)(),
            j = P?.get("rescheduleUid"),
            N = (0, i.useSchedule)({
              username: O ?? e,
              eventSlug: C ?? o,
              eventId: s,
              timezone: S,
              selectedDate: m,
              dayCount: c,
              rescheduleUid: j,
              month: T ?? d,
              duration: k ?? u,
              isTeamEvent: h,
              orgSlug: f,
              teamMemberEmail: p,
              useApiV2: y,
              bookerLayout: g,
              _isSettingsPreview: b,
              _previewOverrides: x,
              _previewSchedule: w,
            }),
            M = (0, t.useBookerStoreContext)((e) => e.setCrmOwnerRRFallbackActive),
            _ = N?.data?.crmOwnerRRFallbackActive;
          return (
            (0, n.useEffect)(() => {
              M(_);
            }, [_, M]),
            {
              data: N?.data,
              isPending: N?.isPending,
              isError: N?.isError,
              isSuccess: N?.isSuccess,
              isLoading: N?.isLoading,
              invalidate: N?.invalidate,
              dataUpdatedAt: N?.dataUpdatedAt,
            }
          );
        },
      ],
      234452
    );
  },
  377119,
  (e) => {
    "use strict";
    var t = e.i(271645);
    e.s([
      "useNonEmptyScheduleDays",
      0,
      (e) =>
        (0, t.useMemo)(
          () =>
            ((e) => {
              if (void 0 === e) return [];
              let t = [];
              return (
                Object.keys(e).forEach((a) => {
                  e[a].some(
                    (t) => !(t?.away && !t.toUser && !t.showNotePublicly) && e[a].length > 0
                  ) && t.push(a);
                }),
                t
              );
            })(e),
          [e]
        ),
    ]);
  },
  247379,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(459881),
      n = e.i(271645),
      r = e.i(261254),
      o = e.i(552759);
    let i = ({ children: e, tooltipText: a }) =>
      a
        ? (0, t.jsx)(o.Tooltip, {
            delayDuration: 150,
            sideOffset: 12,
            side: "bottom",
            content: a,
            children: e,
          })
        : (0, t.jsx)(t.Fragment, { children: e });
    e.s([
      "ToggleGroup",
      0,
      ({
        options: e,
        onValueChange: o,
        isFullWidth: l,
        orientation: s = "horizontal",
        customClassNames: d,
        defaultValue: u,
        ...c
      }) => {
        let m = void 0 !== c.value,
          [f, p] = (0, n.useState)(u ?? "");
        return (0, t.jsx)(a.Root, {
          type: "single",
          ...c,
          ...(m ? { value: c.value } : { value: f }),
          orientation: s,
          onValueChange: (e) => {
            e && (m || p(e), o?.(e));
          },
          style: {
            "--toggle-group-shadow":
              "0px 2px 3px 0px rgba(0, 0, 0, 0.03), 0px 2px 2px -1px rgba(0, 0, 0, 0.03)",
          },
          className: (0, r.cn)(
            "bg-muted rounded-lg p-0.5",
            "horizontal" === s && "inline-flex gap-0.5 rtl:flex-row-reverse",
            "vertical" === s && "flex w-fit flex-col gap-0.5",
            c.className,
            l && "w-full",
            d
          ),
          children: e.map((e) =>
            (0, t.jsx)(
              i,
              {
                tooltipText: e.tooltip,
                children: (0, t.jsx)(a.Item, {
                  disabled: e.disabled,
                  onClick: e?.onClick,
                  value: e.value,
                  "data-testid": e.dataTestId ?? `toggle-group-item-${e.value}`,
                  className: (0, r.cn)(
                    "aria-checked:bg-default aria-checked:border-subtle rounded-lg border border-transparent p-1.5 text-sm leading-none transition aria-checked:shadow-[0px_2px_3px_0px_rgba(0,0,0,0.03),0px_2px_2px_-1px_rgba(0,0,0,0.03)]",
                    e.disabled
                      ? "text-gray-400 hover:cursor-not-allowed"
                      : "text-default [&[aria-checked='false']]:hover:text-emphasis [&[aria-checked='false']]:hover:bg-subtle cursor-pointer",
                    l && "w-full"
                  ),
                  children: (0, t.jsxs)("div", {
                    className: (0, r.cn)(
                      "flex items-center gap-1",
                      "horizontal" === s && "justify-center",
                      "vertical" === s && "justify-start"
                    ),
                    children: [
                      e.iconLeft &&
                        (0, t.jsx)("span", {
                          className: "flex h-4 w-4 items-center",
                          children: e.iconLeft,
                        }),
                      e.label,
                    ],
                  }),
                }),
              },
              e.value
            )
          ),
        });
      },
    ]);
  },
  908746,
  (e) => {
    "use strict";
    var t = e.i(577192);
    let a = { long: "MMMM", short: "MMM", numeric: "M", "2-digit": "MM", narrow: "MMM" },
      n = {
        full: "dddd, MMMM D, YYYY",
        long: "MMMM D, YYYY",
        medium: "MMM D, YYYY",
        short: "M/D/YY",
      },
      r = new Map(),
      o = new Map();
    function i(e) {
      if (!e) return !1;
      let t = r.get(e);
      return (
        void 0 === t && ((t = Intl.DateTimeFormat.supportedLocalesOf([e]).length > 0), r.set(e, t)),
        t
      );
    }
    function l(e, t) {
      let a = `${e}|${JSON.stringify(t)}`,
        n = o.get(a);
      return (
        n || (o.size >= 1e3 && o.clear(), (n = new Intl.DateTimeFormat(e, t)), o.set(a, n)),
        n
      );
    }
    function s(e, t = !0) {
      let { timeZone: a, dateStyle: n, timeStyle: r, month: o, hour12: i } = e;
      return {
        ...(a && { timeZone: a }),
        ...(n && { dateStyle: n }),
        ...(r && { timeStyle: r }),
        ...(t && o && { month: o }),
        ...(void 0 !== i && { hour12: i }),
      };
    }
    function d(e, r) {
      let { locale: o, dateStyle: i, timeStyle: l, month: s, hour12: d, timeZone: u } = r,
        c = o || "en",
        m = u ? (0, t.default)(e).tz(u).locale(c) : (0, t.default)(e).locale(c);
      if (s) {
        let e = m.format(a[s] || "MMM");
        return "narrow" === s ? e.charAt(0) : e;
      }
      let f = [];
      return (
        i && f.push(n[i]),
        l && f.push(d ? "h:mm A" : "HH:mm"),
        m.format(f.join(" ") || "YYYY-MM-DD HH:mm")
      );
    }
    e.s([
      "formatDateTime",
      0,
      function (e, t) {
        return i(t.locale) ? l(t.locale, s(t)).format(e) : d(e, t);
      },
      "formatDateTimeRange",
      0,
      function (e, t, a) {
        return i(a.locale) ? l(a.locale, s(a, !1)).formatRange(e, t) : `${d(e, a)} — ${d(t, a)}`;
      },
    ]);
  },
  383116,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(127011),
      n = e.i(247379),
      r = e.i(790405),
      o = e.i(808342);
    e.s([
      "TimeFormatToggle",
      0,
      ({ customClassName: e }) => {
        let i = (0, o.useTimePreferences)((e) => e.timeFormat),
          l = (0, o.useTimePreferences)((e) => e.setTimeFormat),
          { t: s } = (0, a.useAtomsLocale)();
        return (0, t.jsx)(n.ToggleGroup, {
          customClassNames: e,
          onValueChange: (e) => {
            e && e !== i && l(e);
          },
          defaultValue: i,
          value: i,
          "aria-label": s("time_format"),
          options: [
            { value: r.TimeFormat.TWELVE_HOUR, label: s("12_hour_short") },
            { value: r.TimeFormat.TWENTY_FOUR_HOUR, label: s("24_hour_short") },
          ],
        });
      },
    ]);
  },
  63775,
  (e) => {
    "use strict";
    var t = e.i(271645);
    e.s([
      "useSlotsForAvailableDates",
      0,
      (e, a) => {
        let [n, r] = (0, t.useState)([]),
          o = (0, t.useCallback)((e) => {
            r((t) =>
              t.map(({ date: t, slots: a }) => ({
                date: t,
                slots: a.map((t) => ({
                  ...t,
                  showConfirmButton: t.time === e.time && !e?.showConfirmButton,
                })),
              }))
            );
          }, []);
        return (
          (0, t.useEffect)(() => {
            void 0 === a
              ? r([])
              : r(e.filter((e) => null !== e).map((e) => ({ slots: a[`${e}`] || [], date: e })));
          }, [JSON.stringify(e), JSON.stringify(a)]),
          { slotsPerDay: n, setSlotsPerDay: r, toggleConfirmButton: o }
        );
      },
      "useSlotsForDate",
      0,
      (e, a) => (0, t.useMemo)(() => (e && void 0 !== a && a[e]) || [], [e, a]),
    ]);
  },
  608546,
  (e) => {
    "use strict";
    let t, a;
    var n = e.i(931067),
      r = e.i(271645),
      o = e.i(981140),
      i = e.i(30030),
      l = e.i(369340),
      s = e.i(820783),
      d = e.i(258950),
      u = e.i(953760),
      c = e.i(553289),
      m = e.i(248425),
      f = e.i(30207),
      p = e.i(934620),
      h = e.i(635804);
    let y = "Popper",
      [g, v] = (0, i.createContextScope)(y),
      [b, x] = g(y),
      w = (0, r.forwardRef)((e, t) => {
        let { __scopePopper: a, virtualRef: o, ...i } = e,
          l = x("PopperAnchor", a),
          d = (0, r.useRef)(null),
          u = (0, s.useComposedRefs)(t, d);
        return (
          (0, r.useEffect)(() => {
            l.onAnchorChange((null == o ? void 0 : o.current) || d.current);
          }),
          o ? null : (0, r.createElement)(m.Primitive.div, (0, n.default)({}, i, { ref: u }))
        );
      }),
      D = "PopperContent",
      [E, O] = g(D),
      C = (0, r.forwardRef)((e, t) => {
        var a, o, i, l, c, y, g, v;
        let {
            __scopePopper: b,
            side: w = "bottom",
            sideOffset: O = 0,
            align: C = "center",
            alignOffset: T = 0,
            arrowPadding: k = 0,
            avoidCollisions: N = !0,
            collisionBoundary: M = [],
            collisionPadding: _ = 0,
            sticky: R = "partial",
            hideWhenDetached: Y = !1,
            updatePositionStrategy: A = "optimized",
            onPlaced: B,
            ...I
          } = e,
          L = x(D, b),
          [z, F] = (0, r.useState)(null),
          H = (0, s.useComposedRefs)(t, (e) => F(e)),
          [$, W] = (0, r.useState)(null),
          U = (0, h.useSize)($),
          V = null != (a = null == U ? void 0 : U.width) ? a : 0,
          G = null != (o = null == U ? void 0 : U.height) ? o : 0,
          K = "number" == typeof _ ? _ : { top: 0, right: 0, bottom: 0, left: 0, ..._ },
          X = Array.isArray(M) ? M : [M],
          Z = X.length > 0,
          J = { padding: K, boundary: X.filter(S), altBoundary: Z },
          {
            refs: q,
            floatingStyles: Q,
            placement: ee,
            isPositioned: et,
            middlewareData: ea,
          } = (0, d.useFloating)({
            strategy: "fixed",
            placement: w + ("center" !== C ? "-" + C : ""),
            whileElementsMounted: (...e) =>
              (0, u.autoUpdate)(...e, { animationFrame: "always" === A }),
            elements: { reference: L.anchor },
            middleware: [
              (0, d.offset)({ mainAxis: O + G, alignmentAxis: T }),
              N &&
                (0, d.shift)({
                  mainAxis: !0,
                  crossAxis: !1,
                  limiter: "partial" === R ? (0, d.limitShift)() : void 0,
                  ...J,
                }),
              N && (0, d.flip)({ ...J }),
              (0, d.size)({
                ...J,
                apply: ({ elements: e, rects: t, availableWidth: a, availableHeight: n }) => {
                  let { width: r, height: o } = t.reference,
                    i = e.floating.style;
                  (i.setProperty("--radix-popper-available-width", `${a}px`),
                    i.setProperty("--radix-popper-available-height", `${n}px`),
                    i.setProperty("--radix-popper-anchor-width", `${r}px`),
                    i.setProperty("--radix-popper-anchor-height", `${o}px`));
                },
              }),
              $ && (0, d.arrow)({ element: $, padding: k }),
              P({ arrowWidth: V, arrowHeight: G }),
              Y && (0, d.hide)({ strategy: "referenceHidden", ...J }),
            ],
          }),
          [en, er] = j(ee),
          eo = (0, f.useCallbackRef)(B);
        (0, p.useLayoutEffect)(() => {
          et && (null == eo || eo());
        }, [et, eo]);
        let ei = null == (i = ea.arrow) ? void 0 : i.x,
          el = null == (l = ea.arrow) ? void 0 : l.y,
          es = (null == (c = ea.arrow) ? void 0 : c.centerOffset) !== 0,
          [ed, eu] = (0, r.useState)();
        return (
          (0, p.useLayoutEffect)(() => {
            z && eu(window.getComputedStyle(z).zIndex);
          }, [z]),
          (0, r.createElement)(
            "div",
            {
              ref: q.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...Q,
                transform: et ? Q.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: ed,
                "--radix-popper-transform-origin": [
                  null == (y = ea.transformOrigin) ? void 0 : y.x,
                  null == (g = ea.transformOrigin) ? void 0 : g.y,
                ].join(" "),
              },
              dir: e.dir,
            },
            (0, r.createElement)(
              E,
              {
                scope: b,
                placedSide: en,
                onArrowChange: W,
                arrowX: ei,
                arrowY: el,
                shouldHideArrow: es,
              },
              (0, r.createElement)(
                m.Primitive.div,
                (0, n.default)({ "data-side": en, "data-align": er }, I, {
                  ref: H,
                  style: {
                    ...I.style,
                    animation: et ? void 0 : "none",
                    opacity: null != (v = ea.hide) && v.referenceHidden ? 0 : void 0,
                  },
                })
              )
            )
          )
        );
      }),
      T = { top: "bottom", right: "left", bottom: "top", left: "right" },
      k = (0, r.forwardRef)(function (e, t) {
        let { __scopePopper: a, ...o } = e,
          i = O("PopperArrow", a),
          l = T[i.placedSide];
        return (0, r.createElement)(
          "span",
          {
            ref: i.onArrowChange,
            style: {
              position: "absolute",
              left: i.arrowX,
              top: i.arrowY,
              [l]: 0,
              transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[
                i.placedSide
              ],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)",
              }[i.placedSide],
              visibility: i.shouldHideArrow ? "hidden" : void 0,
            },
          },
          (0, r.createElement)(
            c.Root,
            (0, n.default)({}, o, { ref: t, style: { ...o.style, display: "block" } })
          )
        );
      });
    function S(e) {
      return null !== e;
    }
    let P = (e) => ({
      name: "transformOrigin",
      options: e,
      fn(t) {
        var a, n, r, o, i;
        let { placement: l, rects: s, middlewareData: d } = t,
          u = (null == (a = d.arrow) ? void 0 : a.centerOffset) !== 0,
          c = u ? 0 : e.arrowWidth,
          m = u ? 0 : e.arrowHeight,
          [f, p] = j(l),
          h = { start: "0%", center: "50%", end: "100%" }[p],
          y = (null != (n = null == (r = d.arrow) ? void 0 : r.x) ? n : 0) + c / 2,
          g = (null != (o = null == (i = d.arrow) ? void 0 : i.y) ? o : 0) + m / 2,
          v = "",
          b = "";
        return (
          "bottom" === f
            ? ((v = u ? h : `${y}px`), (b = `${-m}px`))
            : "top" === f
              ? ((v = u ? h : `${y}px`), (b = `${s.floating.height + m}px`))
              : "right" === f
                ? ((v = `${-m}px`), (b = u ? h : `${g}px`))
                : "left" === f && ((v = `${s.floating.width + m}px`), (b = u ? h : `${g}px`)),
          { data: { x: v, y: b } }
        );
      },
    });
    function j(e) {
      let [t, a = "center"] = e.split("-");
      return [t, a];
    }
    let N = (e) => {
      let { __scopePopper: t, children: a } = e,
        [n, o] = (0, r.useState)(null);
      return (0, r.createElement)(b, { scope: t, anchor: n, onAnchorChange: o }, a);
    };
    var M = e.i(174080);
    let _ = (0, r.forwardRef)((e, t) => {
      var a;
      let {
        container: o = null == globalThis || null == (a = globalThis.document) ? void 0 : a.body,
        ...i
      } = e;
      return o
        ? M.default.createPortal(
            (0, r.createElement)(m.Primitive.div, (0, n.default)({}, i, { ref: t })),
            o
          )
        : null;
    });
    var R = e.i(296626),
      Y = e.i(126083);
    let A = "dismissableLayer.update",
      B = (0, r.createContext)({
        layers: new Set(),
        layersWithOutsidePointerEventsDisabled: new Set(),
        branches: new Set(),
      }),
      I = (0, r.forwardRef)((e, a) => {
        var i;
        let {
            disableOutsidePointerEvents: l = !1,
            onEscapeKeyDown: d,
            onPointerDownOutside: u,
            onFocusOutside: c,
            onInteractOutside: p,
            onDismiss: h,
            ...y
          } = e,
          g = (0, r.useContext)(B),
          [v, b] = (0, r.useState)(null),
          x =
            null != (i = null == v ? void 0 : v.ownerDocument)
              ? i
              : null == globalThis
                ? void 0
                : globalThis.document,
          [, w] = (0, r.useState)({}),
          D = (0, s.useComposedRefs)(a, (e) => b(e)),
          E = Array.from(g.layers),
          [O] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1),
          C = E.indexOf(O),
          T = v ? E.indexOf(v) : -1,
          k = g.layersWithOutsidePointerEventsDisabled.size > 0,
          S = T >= C,
          P = (function (e, t = null == globalThis ? void 0 : globalThis.document) {
            let a = (0, f.useCallbackRef)(e),
              n = (0, r.useRef)(!1),
              o = (0, r.useRef)(() => {});
            return (
              (0, r.useEffect)(() => {
                let e = (e) => {
                    if (e.target && !n.current) {
                      let n = { originalEvent: e };
                      function r() {
                        z("dismissableLayer.pointerDownOutside", a, n, { discrete: !0 });
                      }
                      "touch" === e.pointerType
                        ? (t.removeEventListener("click", o.current),
                          (o.current = r),
                          t.addEventListener("click", o.current, { once: !0 }))
                        : r();
                    } else t.removeEventListener("click", o.current);
                    n.current = !1;
                  },
                  r = window.setTimeout(() => {
                    t.addEventListener("pointerdown", e);
                  }, 0);
                return () => {
                  (window.clearTimeout(r),
                    t.removeEventListener("pointerdown", e),
                    t.removeEventListener("click", o.current));
                };
              }, [t, a]),
              { onPointerDownCapture: () => (n.current = !0) }
            );
          })((e) => {
            let t = e.target,
              a = [...g.branches].some((e) => e.contains(t));
            S &&
              !a &&
              (null == u || u(e), null == p || p(e), e.defaultPrevented || null == h || h());
          }, x),
          j = (function (e, t = null == globalThis ? void 0 : globalThis.document) {
            let a = (0, f.useCallbackRef)(e),
              n = (0, r.useRef)(!1);
            return (
              (0, r.useEffect)(() => {
                let e = (e) => {
                  e.target &&
                    !n.current &&
                    z("dismissableLayer.focusOutside", a, { originalEvent: e }, { discrete: !1 });
                };
                return (
                  t.addEventListener("focusin", e),
                  () => t.removeEventListener("focusin", e)
                );
              }, [t, a]),
              { onFocusCapture: () => (n.current = !0), onBlurCapture: () => (n.current = !1) }
            );
          })((e) => {
            let t = e.target;
            ![...g.branches].some((e) => e.contains(t)) &&
              (null == c || c(e), null == p || p(e), e.defaultPrevented || null == h || h());
          }, x);
        return (
          (0, Y.useEscapeKeydown)((e) => {
            T === g.layers.size - 1 &&
              (null == d || d(e), !e.defaultPrevented && h && (e.preventDefault(), h()));
          }, x),
          (0, r.useEffect)(() => {
            if (v)
              return (
                l &&
                  (0 === g.layersWithOutsidePointerEventsDisabled.size &&
                    ((t = x.body.style.pointerEvents), (x.body.style.pointerEvents = "none")),
                  g.layersWithOutsidePointerEventsDisabled.add(v)),
                g.layers.add(v),
                L(),
                () => {
                  l &&
                    1 === g.layersWithOutsidePointerEventsDisabled.size &&
                    (x.body.style.pointerEvents = t);
                }
              );
          }, [v, x, l, g]),
          (0, r.useEffect)(
            () => () => {
              v && (g.layers.delete(v), g.layersWithOutsidePointerEventsDisabled.delete(v), L());
            },
            [v, g]
          ),
          (0, r.useEffect)(() => {
            let e = () => w({});
            return (document.addEventListener(A, e), () => document.removeEventListener(A, e));
          }, []),
          (0, r.createElement)(
            m.Primitive.div,
            (0, n.default)({}, y, {
              ref: D,
              style: { pointerEvents: k ? (S ? "auto" : "none") : void 0, ...e.style },
              onFocusCapture: (0, o.composeEventHandlers)(e.onFocusCapture, j.onFocusCapture),
              onBlurCapture: (0, o.composeEventHandlers)(e.onBlurCapture, j.onBlurCapture),
              onPointerDownCapture: (0, o.composeEventHandlers)(
                e.onPointerDownCapture,
                P.onPointerDownCapture
              ),
            })
          )
        );
      });
    function L() {
      let e = new CustomEvent(A);
      document.dispatchEvent(e);
    }
    function z(e, t, a, { discrete: n }) {
      let r = a.originalEvent.target,
        o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: a });
      (t && r.addEventListener(e, t, { once: !0 }),
        n ? (0, m.dispatchDiscreteCustomEvent)(r, o) : r.dispatchEvent(o));
    }
    let F = "HoverCard",
      [H, $] = (0, i.createContextScope)(F, [v]),
      W = v(),
      [U, V] = H(F),
      G = (0, r.forwardRef)((e, t) => {
        let { __scopeHoverCard: a, ...i } = e,
          l = V("HoverCardTrigger", a),
          s = W(a);
        return (0, r.createElement)(
          w,
          (0, n.default)({ asChild: !0 }, s),
          (0, r.createElement)(
            m.Primitive.a,
            (0, n.default)({ "data-state": l.open ? "open" : "closed" }, i, {
              ref: t,
              onPointerEnter: (0, o.composeEventHandlers)(e.onPointerEnter, ee(l.onOpen)),
              onPointerLeave: (0, o.composeEventHandlers)(e.onPointerLeave, ee(l.onClose)),
              onFocus: (0, o.composeEventHandlers)(e.onFocus, l.onOpen),
              onBlur: (0, o.composeEventHandlers)(e.onBlur, l.onClose),
              onTouchStart: (0, o.composeEventHandlers)(e.onTouchStart, (e) => e.preventDefault()),
            })
          )
        );
      }),
      K = "HoverCardPortal",
      [X, Z] = H(K, { forceMount: void 0 }),
      J = "HoverCardContent",
      q = (0, r.forwardRef)((e, t) => {
        let a = Z(J, e.__scopeHoverCard),
          { forceMount: i = a.forceMount, ...l } = e,
          s = V(J, e.__scopeHoverCard);
        return (0, r.createElement)(
          R.Presence,
          { present: i || s.open },
          (0, r.createElement)(
            Q,
            (0, n.default)({ "data-state": s.open ? "open" : "closed" }, l, {
              onPointerEnter: (0, o.composeEventHandlers)(e.onPointerEnter, ee(s.onOpen)),
              onPointerLeave: (0, o.composeEventHandlers)(e.onPointerLeave, ee(s.onClose)),
              ref: t,
            })
          )
        );
      }),
      Q = (0, r.forwardRef)((e, t) => {
        let {
            __scopeHoverCard: i,
            onEscapeKeyDown: l,
            onPointerDownOutside: d,
            onFocusOutside: u,
            onInteractOutside: c,
            ...m
          } = e,
          f = V(J, i),
          p = W(i),
          h = (0, r.useRef)(null),
          y = (0, s.useComposedRefs)(t, h),
          [g, v] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            if (g) {
              let e = document.body;
              return (
                (a = e.style.userSelect || e.style.webkitUserSelect),
                (e.style.userSelect = "none"),
                (e.style.webkitUserSelect = "none"),
                () => {
                  ((e.style.userSelect = a), (e.style.webkitUserSelect = a));
                }
              );
            }
          }, [g]),
          (0, r.useEffect)(() => {
            if (h.current) {
              let e = () => {
                (v(!1),
                  (f.isPointerDownOnContentRef.current = !1),
                  setTimeout(() => {
                    var e;
                    (null == (e = document.getSelection()) ? void 0 : e.toString()) !== "" &&
                      (f.hasSelectionRef.current = !0);
                  }));
              };
              return (
                document.addEventListener("pointerup", e),
                () => {
                  (document.removeEventListener("pointerup", e),
                    (f.hasSelectionRef.current = !1),
                    (f.isPointerDownOnContentRef.current = !1));
                }
              );
            }
          }, [f.isPointerDownOnContentRef, f.hasSelectionRef]),
          (0, r.useEffect)(() => {
            h.current &&
              (function (e) {
                let t = [],
                  a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                    acceptNode: (e) =>
                      e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
                  });
                for (; a.nextNode(); ) t.push(a.currentNode);
                return t;
              })(h.current).forEach((e) => e.setAttribute("tabindex", "-1"));
          }),
          (0, r.createElement)(
            I,
            {
              asChild: !0,
              disableOutsidePointerEvents: !1,
              onInteractOutside: c,
              onEscapeKeyDown: l,
              onPointerDownOutside: d,
              onFocusOutside: (0, o.composeEventHandlers)(u, (e) => {
                e.preventDefault();
              }),
              onDismiss: f.onDismiss,
            },
            (0, r.createElement)(
              C,
              (0, n.default)({}, p, m, {
                onPointerDown: (0, o.composeEventHandlers)(m.onPointerDown, (e) => {
                  (e.currentTarget.contains(e.target) && v(!0),
                    (f.hasSelectionRef.current = !1),
                    (f.isPointerDownOnContentRef.current = !0));
                }),
                ref: y,
                style: {
                  ...m.style,
                  userSelect: g ? "text" : void 0,
                  WebkitUserSelect: g ? "text" : void 0,
                  "--radix-hover-card-content-transform-origin":
                    "var(--radix-popper-transform-origin)",
                  "--radix-hover-card-content-available-width":
                    "var(--radix-popper-available-width)",
                  "--radix-hover-card-content-available-height":
                    "var(--radix-popper-available-height)",
                  "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)",
                },
              })
            )
          )
        );
      });
    function ee(e) {
      return (t) => ("touch" === t.pointerType ? void 0 : e());
    }
    e.s(
      [
        "Content",
        0,
        q,
        "Portal",
        0,
        (e) => {
          let { __scopeHoverCard: t, forceMount: a, children: n, container: o } = e,
            i = V(K, t);
          return (0, r.createElement)(
            X,
            { scope: t, forceMount: a },
            (0, r.createElement)(
              R.Presence,
              { present: a || i.open },
              (0, r.createElement)(_, { asChild: !0, container: o }, n)
            )
          );
        },
        "Root",
        0,
        (e) => {
          let {
              __scopeHoverCard: t,
              children: a,
              open: n,
              defaultOpen: o,
              onOpenChange: i,
              openDelay: s = 700,
              closeDelay: d = 300,
            } = e,
            u = W(t),
            c = (0, r.useRef)(0),
            m = (0, r.useRef)(0),
            f = (0, r.useRef)(!1),
            p = (0, r.useRef)(!1),
            [h = !1, y] = (0, l.useControllableState)({ prop: n, defaultProp: o, onChange: i }),
            g = (0, r.useCallback)(() => {
              (clearTimeout(m.current), (c.current = window.setTimeout(() => y(!0), s)));
            }, [s, y]),
            v = (0, r.useCallback)(() => {
              (clearTimeout(c.current),
                f.current || p.current || (m.current = window.setTimeout(() => y(!1), d)));
            }, [d, y]),
            b = (0, r.useCallback)(() => y(!1), [y]);
          return (
            (0, r.useEffect)(
              () => () => {
                (clearTimeout(c.current), clearTimeout(m.current));
              },
              []
            ),
            (0, r.createElement)(
              U,
              {
                scope: t,
                open: h,
                onOpenChange: y,
                onOpen: g,
                onClose: v,
                onDismiss: b,
                hasSelectionRef: f,
                isPointerDownOnContentRef: p,
              },
              (0, r.createElement)(N, u, a)
            )
          );
        },
        "Trigger",
        0,
        G,
      ],
      608546
    );
  },
  762164,
  (e) => {
    "use strict";
    var t = e.i(843476);
    e.i(127011);
    var a = e.i(261254);
    e.s([
      "SkeletonContainer",
      0,
      ({ children: e, as: n, className: r }) =>
        (0, t.jsx)(n || "div", { className: (0, a.cn)("animate-pulse", r), children: e }),
      "SkeletonText",
      0,
      ({ className: e = "", invisible: n = !1, style: r }) =>
        (0, t.jsx)("span", {
          style: r,
          className: (0, a.cn)(
            "font-size-0 bg-emphasis inline-block animate-pulse rounded-md empty:before:inline-block empty:before:content-['']",
            e,
            n ? "invisible" : ""
          ),
        }),
    ]);
  },
  711592,
  (e) => {
    "use strict";
    e.s([
      "checkForMultiplePaymentApps",
      0,
      function (e, t = !1) {
        let a = 0;
        for (let t in e?.apps) {
          let n = e?.apps[t];
          n &&
            (n.appCategories && n.appCategories.includes("payment") && n.enabled
              ? a++
              : "price" in n && n.enabled && a++);
        }
        return t ? a >= 1 : a > 1;
      },
      "getPaymentAppData",
      0,
      function (e, t) {
        let a = e.metadata?.apps;
        if (!a) return { enabled: !1, price: 0, currency: "usd", appId: null };
        for (let t of Object.keys(a)) {
          let n = a[t];
          if (n && n.enabled && n.price)
            return {
              enabled: !!n.enabled,
              price: e.price || n.price || 0,
              currency: e.currency || n.currency || "usd",
              appId: t,
              paymentOption: n.paymentOption ?? "ON_BOOKING",
              credentialId: n.credentialId,
              refundPolicy: n.refundPolicy,
              refundDaysCount: n.refundDaysCount,
              refundCountCalendarDays: n.refundCountCalendarDays,
            };
        }
        return {
          enabled: !1,
          price: 0,
          currency: "usd",
          appId: null,
          paymentOption: "ON_BOOKING",
          credentialId: void 0,
          refundPolicy: void 0,
          refundDaysCount: void 0,
          refundCountCalendarDays: void 0,
        };
      },
    ]);
  },
  912224,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(608546),
      n = e.i(88653),
      r = e.i(309453),
      o = e.i(271645),
      i = e.i(127011),
      l = e.i(538173),
      s = e.i(833414),
      d = e.i(762164),
      u = e.i(261254),
      c = e.i(577192),
      m = e.i(711592),
      f = e.i(196268),
      p = e.i(790405),
      h = e.i(207597),
      y = e.i(870934),
      g = e.i(516570),
      v = e.i(464557);
    function b(e) {
      let t = e.getHours().toString().padStart(2, "0"),
        a = e.getMinutes().toString().padStart(2, "0");
      return `${t}:${a}`;
    }
    var x = e.i(142992);
    let w = ({ showExact: e = !0, bookedSeats: a, totalSeats: n, variant: r = "whole" }) => {
        let { t: o } = (0, i.useAtomsLocale)(),
          l = n - a;
        return (0, t.jsx)("span", {
          className: "truncate",
          children: e
            ? `${l}${"fraction" === r ? ` / ${n}` : ""} ${o("seats_available", { count: l })}`
            : a / n >= 0.83
              ? o("seats_nearly_full")
              : a / n >= 0.5
                ? o("seats_half_full")
                : o("seats_available", { count: l }),
        });
      },
      D = ({
        slot: e,
        seatsPerTimeSlot: s,
        selectedSlots: d,
        onTimeSelect: x,
        showAvailableSeatsCount: D,
        event: E,
        customClassNames: O,
        loadingStates: C,
        renderConfirmNotVerifyEmailButtonCond: T,
        isVerificationCodeSending: k,
        skipConfirmStep: S,
        shouldRenderCaptcha: P,
        watchedCfToken: j,
        handleSlotClick: N,
        onTentativeTimeSelect: M,
        unavailableTimeSlots: _ = [],
        confirmButtonDisabled: R,
        confirmStepClassNames: Y,
      }) => {
        let { t: A } = (0, i.useAtomsLocale)(),
          { data: B } = E,
          I = (0, o.useMemo)(() => {
            if (!B?.price) return !1;
            let e = (0, m.getPaymentAppData)(B);
            return B?.price > 0 && !Number.isNaN(e.price) && e.price > 0;
          }, [B]),
          L =
            "true" === (0, f.getQueryParam)("overlayCalendar") ||
            h.localStorage.getItem("overlayCalendarSwitchDefault"),
          { timeFormat: z, timezone: F } = (0, g.useBookerTime)(),
          H = (0, y.useBookerStoreContext)((e) => e.bookingData),
          $ = (0, y.useBookerStoreContext)((e) => e.layout),
          W = !!s,
          U = c.default.utc(e.time).tz(F),
          V = !!(W && e.attendees && e.attendees >= s),
          G = e.attendees && s && e.attendees / s >= 0.5,
          K = e.attendees && s && e.attendees / s >= 0.83,
          X = (0, c.default)(),
          Z = (X.tz(F).utcOffset() - X.utcOffset()) / 60,
          J = (0, y.useBookerStoreContext)((e) => e.selectedTimeslot),
          {
            isOverlapping: q,
            overlappingTimeEnd: Q,
            overlappingTimeStart: ee,
          } = (function ({ start: e, selectedDuration: t, offset: a }) {
            let n = (0, v.useOverlayCalendarStore)((e) => e.overlayBusyDates),
              r = null,
              o = null;
            return {
              isOverlapping:
                n &&
                n.some((n) => {
                  let i = (0, c.default)(n.start),
                    l = (0, c.default)(n.end),
                    s = (0, c.default)(e.add(a, "hours")).add(t ?? 0, "minute"),
                    d = (s.isSame(i) || s.isAfter(i)) && e.add(a, "hours") < l && s > i;
                  return ((r = d ? b(i.toDate()) : null), (o = d ? b(l.toDate()) : null), d);
                }),
              overlappingTimeStart: r,
              overlappingTimeEnd: o,
            };
          })({ start: U, selectedDuration: B?.length ?? 0, offset: Z }),
          et = void 0 !== e.bypassed,
          ea = !0 === e.bypassed,
          en = _.includes(e.time);
        return (0, t.jsx)(n.AnimatePresence, {
          children: (0, t.jsxs)("div", {
            className: "mb-2 flex items-center gap-2",
            children: [
              (0, t.jsxs)(
                l.Button,
                {
                  disabled:
                    V ||
                    !!(e.bookingUid && e.bookingUid === H?.uid) ||
                    C?.creatingBooking ||
                    C?.creatingRecurringBooking ||
                    k ||
                    C?.creatingInstantBooking ||
                    (S && !!P && !j) ||
                    en,
                  "data-testid": "time",
                  "data-disabled": V,
                  "data-time": e.time,
                  onClick: () => {
                    (N && N(e, q),
                      M && M({ time: e.time, attendees: e.attendees || 0, seatsPerTimeSlot: s }));
                  },
                  className: (0, u.cn)(
                    "hover:border-brand-default min-h-9 flex h-auto w-full grow flex-col justify-center py-2",
                    d?.includes(e.time) && "border-brand-default",
                    `${O}`
                  ),
                  color: "secondary",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        !W &&
                          et &&
                          (0, t.jsx)("span", {
                            "data-testid": "host-reschedule-indicator",
                            "data-busy": ea ? "true" : "false",
                            className: (0, u.cn)(
                              "inline-block h-2 w-2 rounded-full",
                              ea ? "bg-rose-600" : "bg-emerald-400"
                            ),
                          }),
                        !W &&
                          L &&
                          !et &&
                          (0, t.jsx)("span", {
                            className: (0, u.cn)(
                              "inline-block h-2 w-2 rounded-full",
                              q ? "bg-rose-600" : "bg-emerald-400"
                            ),
                          }),
                        (0, t.jsx)("span", {
                          className: (0, u.cn)(
                            "tabular-nums text-center",
                            z === p.TimeFormat.TWELVE_HOUR && "min-w-[4rem] "
                          ),
                          children: U.format(z),
                        }),
                      ],
                    }),
                    V && (0, t.jsx)("p", { className: "text-sm", children: A("booking_full") }),
                    W &&
                      !V &&
                      (0, t.jsxs)("p", {
                        className: "flex items-center text-sm",
                        children: [
                          (0, t.jsx)("span", {
                            className: (0, u.cn)(
                              K ? "bg-rose-600" : G ? "bg-yellow-500" : "bg-emerald-400",
                              "mr-1 inline-block h-2 w-2 rounded-full"
                            ),
                            "aria-hidden": !0,
                          }),
                          (0, t.jsx)(w, {
                            showExact: !!D,
                            totalSeats: s,
                            bookedSeats: e.attendees || 0,
                          }),
                        ],
                      }),
                  ],
                },
                e.time
              ),
              !!e.showConfirmButton &&
                (0, t.jsxs)(a.Root, {
                  children: [
                    (0, t.jsx)(a.Trigger, {
                      asChild: !0,
                      children: (0, t.jsx)(
                        r.m.div,
                        {
                          className: "shrink-0",
                          initial: { width: 0 },
                          animate: { width: "auto" },
                          exit: { width: 0 },
                          children: (0, t.jsx)(l.Button, {
                            variant: "column_view" === $ ? "icon" : "button",
                            StartIcon: "column_view" === $ ? "chevron-right" : void 0,
                            type: "button",
                            className: (0, u.cn)("whitespace-nowrap", Y?.confirmButton),
                            onClick: () => x && x(e.time, e?.attendees || 0, s, e.bookingUid),
                            "data-testid": "skip-confirm-book-button",
                            disabled:
                              en ||
                              (!!P && !j) ||
                              C?.creatingBooking ||
                              C?.creatingRecurringBooking ||
                              k ||
                              C?.creatingInstantBooking ||
                              R,
                            color: "primary",
                            loading:
                              (J === e.time && C?.creatingBooking) ||
                              C?.creatingRecurringBooking ||
                              k ||
                              C?.creatingInstantBooking,
                            children:
                              "column_view" === $
                                ? ""
                                : A(
                                    en
                                      ? "timeslot_unavailable_short"
                                      : T
                                        ? I
                                          ? "pay_and_book"
                                          : "confirm"
                                        : "verify_email_button"
                                  ),
                          }),
                        },
                        e.time
                      ),
                    }),
                    q &&
                      (0, t.jsx)(a.Portal, {
                        children: (0, t.jsx)(a.Content, {
                          side: "top",
                          align: "end",
                          sideOffset: 2,
                          children: (0, t.jsxs)("div", {
                            className:
                              "text-emphasis bg-inverted w-(--booker-timeslots-width) rounded-md p-3",
                            children: [
                              (0, t.jsx)("div", {
                                className: "flex items-center gap-2",
                                children: (0, t.jsx)("p", { children: A("busy_time.busy") }),
                              }),
                              (0, t.jsxs)("p", {
                                className: "text-muted",
                                children: [ee, " - ", Q],
                              }),
                            ],
                          }),
                        }),
                      }),
                  ],
                }),
            ],
          }),
        });
      },
      E = (e) => {
        let {
          fromUser: a,
          toUser: n,
          reason: r,
          emoji: o,
          notes: i,
          showNotePublicly: l,
          time: s,
          className: d = "",
          isPlatform: u = !1,
        } = e;
        return u
          ? (0, t.jsx)(t.Fragment, {})
          : (0, t.jsx)(x.OutOfOfficeInSlots, {
              fromUser: a,
              toUser: n,
              date: (0, c.default)(s).format("YYYY-MM-DD"),
              reason: r,
              emoji: o,
              notes: i,
              showNotePublicly: l,
              borderDashed: !0,
              className: d,
            });
      };
    e.s(
      [
        "AvailableTimes",
        0,
        ({ slots: e, showTimeFormatToggle: a = !0, className: n, isPlatform: r = !1, ...o }) => {
          let { t: l } = (0, i.useAtomsLocale)();
          if (e.every((e) => e.away)) return (0, t.jsx)(E, { ...e[0], isPlatform: r });
          let d = e[0] && e[0].away,
            c = e[e.length - 1] && e[e.length - 1].away;
          return (0, t.jsx)("div", {
            className: (0, u.cn)("text-default flex flex-col", n),
            children: (0, t.jsxs)("div", {
              className: "h-full pb-4",
              children: [
                !e.length &&
                  (0, t.jsxs)("div", {
                    "data-testId": "no-slots-available",
                    className:
                      "bg-subtle border-subtle flex h-full flex-col items-center rounded-md border p-6 dark:bg-transparent",
                    children: [
                      (0, t.jsx)(s.Icon, {
                        name: "calendar-x-2",
                        className: "text-muted mb-2 h-4 w-4",
                      }),
                      (0, t.jsx)("p", {
                        className: (0, u.cn)("text-muted", a ? "-mt-1 text-lg" : "text-sm"),
                        children: l("all_booked_today"),
                      }),
                    ],
                  }),
                d && !c && (0, t.jsx)(E, { ...e[0], isPlatform: r }),
                e.map((e) => (e.away ? null : (0, t.jsx)(D, { slot: e, ...o }, e.time))),
                c && !d && (0, t.jsx)(E, { ...e[e.length - 1], className: "pb-0", isPlatform: r }),
              ],
            }),
          });
        },
        "AvailableTimesSkeleton",
        0,
        () =>
          (0, t.jsx)("div", {
            className: "flex w-[20%] flex-col only:w-full",
            children: Array.from({ length: Math.floor(6 * Math.random()) + 1 }).map((e, a) =>
              (0, t.jsx)(d.SkeletonText, { className: "mb-4 h-6 w-full" }, a)
            ),
          }),
      ],
      912224
    );
  },
  434685,
  (e) => {
    "use strict";
    let t = Date.UTC(2024, 0, 7);
    function a(e) {
      return Array.isArray(e) ? e[0] || "en" : e || "en";
    }
    e.s([
      "nameOfDay",
      0,
      function (e, n, r = "long") {
        let o = a(e);
        return new Intl.DateTimeFormat(o, { weekday: r, timeZone: "UTC" }).format(
          new Date(t + (((n % 7) + 7) % 7) * 864e5)
        );
      },
      "weekdayNames",
      0,
      function (e, n = 0, r = "long") {
        let o = a(e),
          i = new Intl.DateTimeFormat(o, { weekday: r, timeZone: "UTC" }),
          l = [];
        for (let e = 0; e < 7; e++) l.push(i.format(new Date(t + 24 * e * 36e5)));
        return [...l.slice(n), ...l.slice(0, n)];
      },
    ]);
  },
  785313,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(450608),
      n = e.i(993012),
      r = e.i(127011),
      o = e.i(261254),
      i = e.i(577192),
      l = e.i(434685),
      s = e.i(870934),
      d = e.i(516570),
      u = e.i(383116);
    e.s([
      "AvailableTimesHeader",
      0,
      ({ date: e, showTimeFormatToggle: c = !0, availableMonth: m, customClassNames: f }) => {
        let { i18n: p } = (0, r.useAtomsLocale)(),
          [h] = (0, s.useBookerStoreContext)((e) => [e.layout], a.shallow),
          y = h === n.BookerLayouts.COLUMN_VIEW,
          g = h === n.BookerLayouts.MONTH_VIEW,
          { timezone: v } = (0, d.useBookerTime)(),
          b =
            (v ? (0, i.default)().tz(v) : (0, i.default)()).format("YYYY-MM-DD") ===
            e.format("YYYY-MM-DD");
        return (0, t.jsxs)("header", {
          className: (0, o.cn)(
            "dark:bg-cal-muted dark:before:bg-cal-muted mb-3 flex w-full flex-row items-center font-medium",
            "bg-default before:bg-default",
            f?.availableTimeSlotsHeaderContainer
          ),
          children: [
            (0, t.jsxs)("span", {
              className: (0, o.cn)(
                y && "w-full text-center",
                y ? "text-subtle text-xs uppercase" : "text-emphasis font-semibold"
              ),
              children: [
                (0, t.jsx)("span", {
                  className: (0, o.cn)(
                    b && !f?.availableTimeSlotsTitle && "!text-default",
                    f?.availableTimeSlotsTitle
                  ),
                  children: (0, l.nameOfDay)(p.language, Number(e.format("d")), "short"),
                }),
                (0, t.jsxs)("span", {
                  className: (0, o.cn)(
                    y && b && "bg-brand-default text-brand ml-2",
                    "inline-flex items-center justify-center rounded-3xl px-1 pt-0.5 font-medium",
                    g
                      ? `text-default text-sm ${f?.availableTimeSlotsTitle ?? ""}`
                      : `text-xs ${f?.availableTimeSlotsTitle ?? ""}`
                  ),
                  children: [e.format("DD"), m && `, ${m}`],
                }),
              ],
            }),
            c &&
              (0, t.jsx)("div", {
                className: "ml-auto rtl:mr-auto",
                children: (0, t.jsx)(u.TimeFormatToggle, {
                  customClassName: f?.availableTimeSlotsTimeFormatToggle,
                }),
              }),
          ],
        });
      },
    ]);
  },
  511369,
  (e) => {
    "use strict";
    var t = e.i(577192);
    e.s([
      "daysInMonth",
      0,
      (e) => {
        let [t, a] = e instanceof Date ? [e.getFullYear(), e.getMonth()] : [e.year(), e.month()];
        return new Date(t, a + 1, 0).getDate();
      },
      "yyyymmdd",
      0,
      (e) => (e instanceof Date ? (0, t.default)(e).format("YYYY-MM-DD") : e.format("YYYY-MM-DD")),
    ]);
  },
  20803,
  (e) => {
    "use strict";
    var t = e.i(577192),
      a = e.i(511369);
    e.s([
      "getAvailableDatesInMonth",
      0,
      function ({ browsingDate: e, minDate: n, includedDates: r, timezone: o }) {
        let i = n
            ? (0, a.yyyymmdd)(n)
            : o
              ? (0, t.default)().tz(o).format("YYYY-MM-DD")
              : (0, a.yyyymmdd)(new Date()),
          l = [],
          s = (0, a.daysInMonth)(e),
          d = e.getFullYear(),
          u = e.getMonth();
        for (let e = 1; e <= s; e++) {
          let t = (0, a.yyyymmdd)(new Date(d, u, e));
          !(t < i) && (!r || r.includes(t)) && l.push(t);
        }
        return l;
      },
    ]);
  },
  604888,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(623101),
      n = e.i(271645),
      r = e.i(450608),
      o = e.i(870934),
      i = e.i(94509),
      l = e.i(516570),
      s = e.i(127011),
      d = e.i(538173),
      u = e.i(762164),
      c = e.i(552759),
      m = e.i(261254),
      f = e.i(577192),
      p = e.i(511369),
      h = e.i(908746),
      y = e.i(20803),
      g = e.i(434685),
      v = e.i(775161),
      b = e.i(158554);
    let x = ({ month: e, nextMonthButton: a, description: r, noFutureAvailability: o = !1 }) => {
        let { t: i } = (0, s.useAtomsLocale)(),
          [l, u] = (0, n.useState)(!0);
        return (0, t.jsx)(v.Dialog, {
          open: l,
          onOpenChange: (e) => u(e),
          children: (0, t.jsxs)(b.DialogContent, {
            enableOverflow: !0,
            children: [
              (0, t.jsxs)(b.DialogHeader, {
                className: "mb-4",
                children: [
                  (0, t.jsx)(b.DialogTitle, {
                    "data-testid": "dialog-title",
                    className: "text-emphasis font-heading mb-1 text-xl",
                    children: i("no_availability_in_month", { month: e }),
                  }),
                  r
                    ? (0, t.jsx)(b.DialogDescription, {
                        className: "text-subtle text-sm",
                        "data-testid": "dialog-subtitle",
                        children: r,
                      })
                    : null,
                ],
              }),
              (0, t.jsx)("div", {
                className:
                  "bg-cal-muted border-muted sticky bottom-0 -mx-8 mt-10 rounded-b-2xl border",
                children: (0, t.jsxs)("div", {
                  className: "flex justify-end space-x-2 px-8 py-4 font-sans rtl:space-x-reverse",
                  children: [
                    (0, t.jsx)(b.DialogClose, {
                      color: o ? "primary" : "secondary",
                      onClick: () => u(!1),
                      "data-testid": "close_dialog_button",
                      children: i("close"),
                    }),
                    !o &&
                      (0, t.jsx)(d.Button, {
                        color: "primary",
                        onClick: a,
                        "data-testid": "view_next_month",
                        EndIcon: "arrow-right",
                        children: i("view_next_month"),
                      }),
                  ],
                }),
              }),
            ],
          }),
        });
      },
      w = ({
        date: e,
        active: a,
        disabled: n,
        away: r,
        emoji: o,
        customClassName: l,
        showMonthTooltip: d,
        isFirstDayOfNextMonth: u,
        isToday: f,
        locale: p,
        ...y
      }) => {
        let { i18n: g, t: v } = (0, s.useAtomsLocale)(),
          b = (0, i.useEmbedStyles)("enabledDateButton"),
          x = (0, i.useEmbedStyles)("disabledDateButton"),
          w = p || g.language,
          D = new Date(e.year(), e.month()),
          E = (0, h.formatDateTime)(D, { locale: w, month: "long" }),
          O = (0, h.formatDateTime)(D, { locale: w, month: "short" }),
          C = (0, t.jsxs)("button", {
            type: "button",
            style: n ? { ...x } : { ...b },
            className: (0, m.cn)(
              "disabled:text-bookinglighter absolute bottom-0 left-0 right-0 top-0 mx-auto w-full rounded-md border-2 border-transparent text-center text-sm font-medium transition disabled:cursor-default disabled:border-transparent disabled:font-light",
              a
                ? "bg-brand-default text-brand"
                : n
                  ? l
                    ? ""
                    : " text-mute"
                  : l?.dayActive
                    ? `hover:border-brand-default ${l.dayActive}`
                    : "hover:border-brand-default text-emphasis bg-emphasis"
            ),
            "data-testid": "day",
            "data-disabled": n,
            disabled: n,
            ...y,
            children: [
              r && (0, t.jsx)("span", { "data-testid": "away-emoji", children: o }),
              !r && e.date(),
              f &&
                (0, t.jsx)("span", {
                  className: (0, m.cn)(
                    "bg-brand-default absolute left-1/2 top-1/2 flex h-[5px] w-[5px] -translate-x-1/2 translate-y-[8px] items-center justify-center rounded-full align-middle sm:translate-y-[12px]",
                    a && "bg-brand-accent"
                  ),
                  children: (0, t.jsx)("span", { className: "sr-only", children: v("today") }),
                }),
            ],
          }),
          T = d ? (0, t.jsx)(c.Tooltip, { content: E, children: C }) : C;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            u &&
              (0, t.jsx)("div", {
                className: (0, m.cn)(
                  "absolute top-0 z-10 mx-auto w-fit rounded-full font-semibold uppercase tracking-wide",
                  a ? "text-white" : "text-default",
                  n && "bg-emphasis"
                ),
                style: {
                  fontSize: "10px",
                  lineHeight: "13px",
                  padding: n ? "0 3px" : "3px 3px 3px 4px",
                },
                children: O,
              }),
            T,
          ],
        });
      },
      D = ({
        minDate: e,
        excludedDates: a = [],
        browsingDate: s,
        weekStart: d,
        DayComponent: c = w,
        selected: m,
        month: h,
        nextMonthButton: g,
        eventSlug: v,
        slots: b,
        customClassName: D,
        isBookingInPast: E,
        isCompact: O,
        showNoAvailabilityDialog: C = !0,
        noFutureAvailability: T = !1,
        noAvailabilityDescription: k,
        slotsViewOnSmallScreen: S,
        locale: P,
        ...j
      }) => {
        let N = (0, i.useSlotsViewOnSmallScreen)(),
          M = S ?? N;
        (0, o.useBookerStoreContext)((e) => e.layout);
        let { timezone: _ } = (0, l.useBookerTime)(),
          R = _ ? (0, f.default)().tz(_) : (0, f.default)(),
          Y = R.format("YYYY-MM-DD"),
          A = (0, y.getAvailableDatesInMonth)({
            browsingDate: s.toDate(),
            minDate: e,
            includedDates: j.includedDates,
            timezone: _,
          }),
          B = s.startOf("month"),
          I = R.isAfter(B.add(2, "week")),
          L = [],
          z = (e) => (s.set("date", e).day() - d + 7) % 7,
          F = (0, p.daysInMonth)(s),
          H = j.showExtraDays ?? !0,
          $ = I && !O && H;
        if ($) {
          L = Array(z(8)).fill(null);
          for (let e = 8; e <= F; e++) L.push(s.set("date", e));
          let e = L.length % 7,
            t = (e > 0 ? 7 - e : 0) + 7,
            a = s.add(1, "month");
          for (let e = 0; e < t; e++) L.push(a.set("date", 1 + e));
        } else {
          L = Array(z(1)).fill(null);
          for (let e = 1; e <= F; e++) L.push(s.set("date", e));
        }
        let [W] = (0, o.useBookerStoreContext)((e) => [e.selectedDatesAndTimes], r.shallow),
          U = L.map((e) => {
            if (!e) return { day: null, disabled: !0 };
            let t = (0, p.yyyymmdd)(e),
              n = b?.[t] || [],
              r = n.find((e) => e.away) || null,
              o = e.month() !== s.month(),
              i = I && !O && o && 1 === e.date(),
              l = A?.includes(t),
              d = a.includes(t),
              u = n.some((e) => !e.away),
              c = n.length > 0 && n.every((e) => e.away),
              m = r?.toUser || r?.showNotePublicly;
            return {
              day: e,
              disabled: c ? !m : o ? !u : !l || d,
              away: c,
              emoji: r?.emoji,
              isFirstDayOfNextMonth: i,
            };
          });
        return (
          (0, n.useEffect)(() => {
            if (M || m instanceof Array) return;
            let e = U.find((e) => !e.disabled)?.day,
              t =
                !!m &&
                U.some(({ day: e, disabled: t }) => {
                  if (e && (0, p.yyyymmdd)(e) === (0, p.yyyymmdd)(m) && !t) return !0;
                });
            if (!t && e) {
              let t = !m?.isValid();
              j.onChange(e, t);
            }
            (t && j.onChange((0, f.default)(m), !0), e || j.onChange(null));
          }),
          (0, t.jsxs)(t.Fragment, {
            children: [
              U.map(({ day: e, disabled: a, away: n, emoji: r, isFirstDayOfNextMonth: o }, i) =>
                (0, t.jsx)(
                  "div",
                  {
                    className: "relative w-full pt-[100%]",
                    children:
                      null === e
                        ? (0, t.jsx)("div", {}, `e-${i}`)
                        : j.isLoading
                          ? (0, t.jsx)(
                              "button",
                              {
                                className:
                                  "bg-cal-muted text-muted absolute bottom-0 left-0 right-0 top-0 mx-auto flex w-full items-center justify-center rounded-sm border-transparent text-center font-medium opacity-90 transition",
                                disabled: !0,
                                children: (0, t.jsx)(u.SkeletonText, { className: "h-8 w-9" }),
                              },
                              `e-${i}`
                            )
                          : (0, t.jsx)(c, {
                              customClassName: {
                                dayContainer: D?.datePickerDate,
                                dayActive: D?.datePickerDateActive,
                              },
                              date: e,
                              onClick: () => {
                                (j.onChange(e), j?.scrollToTimeSlots?.());
                              },
                              disabled: a,
                              active: Array.isArray(m)
                                ? Array.isArray(m) &&
                                  m?.some((t) => (0, p.yyyymmdd)(t) === (0, p.yyyymmdd)(e))
                                : (!!m && (0, p.yyyymmdd)(m) === (0, p.yyyymmdd)(e)) ||
                                  (!!v &&
                                    !!W &&
                                    !!W[v] &&
                                    Object.keys(W[v]).length > 0 &&
                                    Object.keys(W[v]).some(
                                      (t) =>
                                        (0, p.yyyymmdd)((0, f.default)(t)) === (0, p.yyyymmdd)(e)
                                    )),
                              away: n,
                              emoji: r,
                              showMonthTooltip: $ && !a && e.month() !== s.month(),
                              isFirstDayOfNextMonth: o,
                              isToday: Y === (0, p.yyyymmdd)(e),
                              locale: P,
                            }),
                  },
                  null === e ? `e-${i}` : `day-${e.format()}`
                )
              ),
              !j.isLoading &&
                !E &&
                A &&
                A?.length === 0 &&
                C &&
                (0, t.jsx)(x, {
                  month: h,
                  nextMonthButton: g,
                  description: k,
                  noFutureAvailability: T,
                }),
            ],
          })
        );
      },
      E = ({
        weekStart: e = 0,
        className: a,
        locale: n,
        selected: r,
        onMonthChange: i,
        slots: c,
        customClassNames: p,
        includedDates: y,
        isCompact: v,
        showNoAvailabilityDialog: b,
        noFutureAvailability: x,
        noAvailabilityDescription: w,
        slotsViewOnSmallScreen: E,
        ...O
      }) => {
        let C = O.minDate,
          T = O.browsingDate || (0, f.default)().startOf("month"),
          k = C && T.valueOf() < C.valueOf() ? (0, f.default)(C) : T,
          { i18n: S, t: P } = (0, s.useAtomsLocale)(),
          j = (0, o.useBookerStoreContext)((e) => e.bookingData),
          { timezone: N } = (0, l.useBookerTime)(),
          M = N ? (0, f.default)().tz(N) : (0, f.default)(),
          _ = !!j && new Date(j.endTime) < new Date(),
          R = (e) => {
            i && i(k.add(e, "month"));
          },
          Y = k
            ? (0, h.formatDateTime)(new Date(k.year(), k.month()), {
                locale: n || S.language,
                month: "long",
              })
            : null;
        return (0, t.jsxs)("div", {
          className: a,
          children: [
            (0, t.jsxs)("div", {
              className: "mb-1 flex items-center justify-between text-xl",
              children: [
                (0, t.jsx)("span", {
                  className: "text-default w-1/2 text-base",
                  children: k
                    ? (0, t.jsxs)("time", {
                        dateTime: k.format("YYYY-MM"),
                        "data-testid": "selected-month-label",
                        children: [
                          (0, t.jsx)("strong", {
                            className: (0, m.cn)("text-emphasis font-semibold", p?.datePickerTitle),
                            children: Y,
                          }),
                          " ",
                          (0, t.jsx)("span", {
                            className: (0, m.cn)("text-subtle font-medium", p?.datePickerTitle),
                            children: k.format("YYYY"),
                          }),
                        ],
                      })
                    : (0, t.jsx)(u.SkeletonText, { className: "h-8 w-24" }),
                }),
                (0, t.jsx)("div", {
                  className: "text-emphasis",
                  children: (0, t.jsxs)("div", {
                    className: "flex",
                    children: [
                      (0, t.jsx)(d.Button, {
                        className: (0, m.cn)(
                          "group p-1 opacity-70 transition hover:opacity-100 rtl:rotate-180",
                          !k.isAfter(M) &&
                            "disabled:text-bookinglighter hover:bg-background hover:opacity-70",
                          p?.datePickerToggle
                        ),
                        onClick: () => R(-1),
                        disabled: !k.isAfter(M),
                        "data-testid": "decrementMonth",
                        color: "minimal",
                        variant: "icon",
                        StartIcon: "chevron-left",
                        "aria-label": P("view_previous_month"),
                      }),
                      (0, t.jsx)(d.Button, {
                        className: (0, m.cn)(
                          "group p-1 opacity-70 transition hover:opacity-100 rtl:rotate-180",
                          `${p?.datePickerToggle ?? ""}`
                        ),
                        onClick: () => R(1),
                        "data-testid": "incrementMonth",
                        color: "minimal",
                        variant: "icon",
                        StartIcon: "chevron-right",
                        "aria-label": P("view_next_month"),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className:
                "border-subtle mb-2 grid grid-cols-7 gap-4 border-b border-t text-center md:mb-0 md:border-0",
              children: (0, g.weekdayNames)(n, e, "short").map((e) =>
                (0, t.jsx)(
                  "div",
                  {
                    className: (0, m.cn)(
                      "text-emphasis my-4 text-xs font-medium uppercase tracking-widest",
                      p?.datePickerDays
                    ),
                    children: e,
                  },
                  e
                )
              ),
            }),
            (0, t.jsx)("div", {
              className: "relative grid grid-cols-7 grid-rows-6 gap-1 text-center",
              children: (0, t.jsx)(D, {
                customClassName: {
                  datePickerDate: p?.datePickersDates,
                  datePickerDateActive: p?.datePickerDatesActive,
                },
                weekStart: e,
                locale: n || S.language,
                selected: r,
                ...O,
                browsingDate: k,
                month: Y,
                nextMonthButton: () => R(1),
                slots: c,
                includedDates: y,
                isBookingInPast: _,
                isCompact: v,
                showNoAvailabilityDialog: b,
                noFutureAvailability: x,
                noAvailabilityDescription: w,
                slotsViewOnSmallScreen: E,
              }),
            }),
          ],
        });
      };
    var O = e.i(476186),
      C = e.i(331597),
      T = e.i(821410),
      k = e.i(684219),
      S = e.i(900802);
    let P = ({
      periodData: e = {
        periodStartDate: null,
        periodEndDate: null,
        periodCountCalendarDays: null,
        periodDays: null,
        periodType: "UNLIMITED",
      },
      ...n
    }) => {
      let r = ((e, t) => {
          let {
              periodDays: n,
              periodType: r,
              periodCountCalendarDays: o,
              periodEndDate: i,
              periodStartDate: l,
            } = t,
            s = (function ({
              periodType: e,
              periodDays: t,
              periodCountCalendarDays: n,
              periodStartDate: r,
              periodEndDate: o,
              allDatesWithBookabilityStatusInBookerTz: i,
              eventUtcOffset: l,
              bookerUtcOffset: s,
              _skipRollingWindowCheck: d,
            }) {
              let u = (0, a.default)(),
                c = u.utcOffset(l),
                m = u.utcOffset(s);
              switch (
                ((t = t || 0),
                k.default
                  .getSubLogger({ prefix: ["calculatePeriodLimits"] })
                  .debug(
                    (0, S.safeStringify)({
                      periodType: e,
                      periodDays: t,
                      periodCountCalendarDays: n,
                      periodStartDate: r,
                      periodEndDate: o,
                      currentTime: c.format(),
                    })
                  ),
                e)
              ) {
                case C.PeriodType.ROLLING:
                  return {
                    endOfRollingPeriodEndDayInBookerTz: (n
                      ? m.add(t, "days")
                      : m.businessDaysAdd(t)
                    ).endOf("day"),
                    startOfRangeStartDayInEventTz: null,
                    endOfRangeEndDayInEventTz: null,
                  };
                case C.PeriodType.ROLLING_WINDOW:
                  if (d) break;
                  if (!i) throw Error("`allDatesWithBookabilityStatus` is required");
                  return {
                    endOfRollingPeriodEndDayInBookerTz: (function ({
                      startDateInBookerTz: e,
                      daysNeeded: t,
                      allDatesWithBookabilityStatusInBookerTz: a,
                      countNonBusinessDays: n,
                    }) {
                      let r,
                        o = k.default.getSubLogger({ prefix: ["getRollingWindowEndDate"] });
                      o.debug(
                        "called:",
                        (0, S.safeStringify)({ startDay: e.format(), daysNeeded: t })
                      );
                      let i = 1,
                        l = e.startOf("day"),
                        s = T.ROLLING_WINDOW_PERIOD_MAX_DAYS_TO_CHECK,
                        d = 0,
                        u = l;
                      for (; d < t && !(i > s); ) {
                        let e = u.format("YYYY-MM-DD"),
                          t = !!a[e]?.isBookable;
                        (t && (d++, (r = u)),
                          o.silly(
                            `Loop Iteration: ${i}`,
                            (0, S.safeStringify)({
                              iterationDayBeginning: u.format(),
                              isBookable: t,
                              bookableDaysCount: d,
                              rollingEndDay: r?.format(),
                              allDatesWithBookabilityStatusInBookerTz: a,
                            })
                          ),
                          (u = n ? u.add(1, "days") : u.businessDaysAdd(1)),
                          i++);
                      }
                      let c = (r ?? u).endOf("day");
                      return (o.debug("Returning rollingEndDay", c.format()), c);
                    })({
                      startDateInBookerTz: m,
                      daysNeeded: t,
                      allDatesWithBookabilityStatusInBookerTz: i,
                      countNonBusinessDays: n,
                    }),
                    startOfRangeStartDayInEventTz: null,
                    endOfRangeEndDayInEventTz: null,
                  };
                case C.PeriodType.RANGE: {
                  let e,
                    t,
                    n = a.default.utc(r),
                    i = a.default.utc(o),
                    s = (e) =>
                      0 === e.hour() &&
                      0 === e.minute() &&
                      0 === e.second() &&
                      0 === e.millisecond();
                  if (s(n) && s(i)) {
                    let r = n.format("YYYY-MM-DD"),
                      o = i.format("YYYY-MM-DD");
                    ((e = a.default.utc(`${r}T00:00:00Z`).subtract(l, "minute").utcOffset(l)),
                      (t = a.default
                        .utc(`${o}T00:00:00Z`)
                        .subtract(l, "minute")
                        .utcOffset(l)
                        .endOf("day")));
                  } else
                    ((e = (0, a.default)(r).utcOffset(l).startOf("day")),
                      (t = (0, a.default)(o).utcOffset(l).endOf("day")));
                  return {
                    endOfRollingPeriodEndDayInBookerTz: null,
                    startOfRangeStartDayInEventTz: e,
                    endOfRangeEndDayInEventTz: t,
                  };
                }
              }
              return {
                endOfRollingPeriodEndDayInBookerTz: null,
                startOfRangeStartDayInEventTz: null,
                endOfRangeEndDayInEventTz: null,
              };
            })({
              periodType: r,
              periodDays: n,
              periodCountCalendarDays: o,
              periodStartDate: l,
              periodEndDate: i,
              allDatesWithBookabilityStatusInBookerTz: null,
              _skipRollingWindowCheck: !0,
              eventUtcOffset: 0,
              bookerUtcOffset: 0,
            });
          return (function ({ time: e, periodLimits: t }) {
            let a = new Date(e);
            if (t.endOfRollingPeriodEndDayInBookerTz)
              return a.valueOf() > t.endOfRollingPeriodEndDayInBookerTz.valueOf();
            if (t.startOfRangeStartDayInEventTz && t.endOfRangeEndDayInEventTz) {
              let e = a.valueOf() < t.startOfRangeStartDayInEventTz.valueOf(),
                n = a.valueOf() > t.endOfRangeEndDayInEventTz.valueOf();
              return e || n;
            }
            return !1;
          })({ time: e.add(1, "month").startOf("month").toDate(), periodLimits: s });
        })(n.browsingDate || (0, a.default)().startOf("month"), e),
        o = ((e, t) => {
          let { t: n } = (0, O.useLocale)();
          if (!e) return "";
          if ("ROLLING" === t.periodType) {
            let e = n(t.periodCountCalendarDays ? "calendar_days" : "business_days");
            return n("no_availability_rolling", { days: `${t.periodDays} ${e}` });
          }
          return "RANGE" === t.periodType
            ? n("no_availability_range", {
                date: (0, a.default)(t.periodEndDate).format("MMMM D YYYY"),
              })
            : "";
        })(r, e);
      return (0, t.jsx)(E, { ...n, noFutureAvailability: r, noAvailabilityDescription: o });
    };
    e.s(["DatePicker", 0, P, "default", 0, P], 604888);
  },
]);
