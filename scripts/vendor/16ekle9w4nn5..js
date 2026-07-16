(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  666995,
  147296,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645),
      l = e.i(261254),
      a = e.i(408155),
      s = e.i(806344),
      n = e.i(577192),
      i = e.i(788369);
    function d(e = 0, t, r = 6) {
      for (; t.getDay() !== e; ) t.setDate(t.getDate() - 1);
      return { startDate: t, endDate: new Date(t.getTime() + 24 * r * 36e5) };
    }
    function o({
      day: e,
      gridCellIdx: t,
      totalGridCells: r,
      selectionLength: l,
      startHour: a,
      timezone: s,
    }) {
      return (0, n.default)(e)
        .tz(s)
        .startOf("day")
        .add((((l + 1) * 60) / r) * t, "minutes")
        .add(a, "hours");
    }
    function u(e, t, r) {
      let l = [],
        a = r ? (0, n.default)(e).tz(r).startOf("day") : (0, n.default)(e).startOf("day");
      l.push(a);
      let s = r ? (0, n.default)(t).tz(r).startOf("day") : (0, n.default)(t).startOf("day");
      for (; a.isBefore(s); ) (l.push(a.add(1, "day")), (a = a.add(1, "day")));
      return l.slice(0, 7);
    }
    function c(e, t, r) {
      let l = [],
        a = (0, n.default)("1970-01-01").tz(r).hour(e);
      l.push(a);
      let s = (0, n.default)("1970-01-01").tz(r).hour(t);
      for (; a.isBefore(s); ) (l.push(a.add(1, "hour")), (a = a.add(1, "hour")));
      return l;
    }
    function f(e) {
      e.sort((e, t) => e.start.getTime() - t.start.getTime());
      let t = [];
      for (let r = 0; r < e.length; r++)
        if (0 === t.length) t.push(e[r]);
        else {
          let l = t[t.length - 1],
            a = e[r];
          l.end.getTime() >= a.start.getTime() ? (l.end = a.end) : t.push(a);
        }
      return t;
    }
    e.s(
      [
        "getDaysBetweenDates",
        0,
        u,
        "getHoursToDisplay",
        0,
        c,
        "gridCellToDateTime",
        0,
        o,
        "mergeOverlappingDateRanges",
        0,
        f,
        "weekdayDates",
        0,
        d,
      ],
      147296
    );
    let m = {
        view: "week",
        startDate: d(0, new Date()).startDate,
        endDate: d(0, new Date()).endDate,
        events: [],
        startHour: 0,
        endHour: 23,
        gridCellsPerHour: 4,
        timezone: i.CURRENT_TIMEZONE,
        showBackgroundPattern: !0,
        showBorder: !0,
        borderColor: "default",
        showTimezone: !1,
      },
      x = r.default.createContext(null);
    function h(e, t) {
      let l = r.default.useContext(x);
      if (!l) throw Error("useCalendarStore must be used within a CalendarStoreProvider");
      return (0, s.useStore)(l, e, t);
    }
    var p = e.i(808342);
    function g({ timezone: e, scrollToCurrentTime: l = !0, updateOnFocus: a = !1 }) {
      let { timeFormat: s } = (0, p.useTimePreferences)(),
        i = (0, r.useRef)(null),
        [d, o] = (0, r.useState)(!1),
        [u, c] = (0, r.useState)(null),
        { startHour: f, endHour: m } = h((e) => ({
          startHour: e.startHour || 0,
          endHour: e.endHour || 23,
        })),
        x = (0, r.useCallback)(() => {
          let t = (0, n.default)().tz(e),
            r = t.hour(),
            l = t.minute();
          r > m || r < f ? c(null) : c(60 * r + l - 60 * f);
        }, [e, f, m]);
      return (
        (0, r.useEffect)(() => {
          (x(),
            l &&
              i.current &&
              !d &&
              setTimeout(() => {
                (i?.current?.scrollIntoView({ block: "center" }), o(!0));
              }, 100));
        }, [x, d, l]),
        (0, r.useEffect)(() => {
          if (!a) return;
          let e = () => {
            "visible" === document.visibilityState && x();
          };
          return (
            document.addEventListener("visibilitychange", e),
            () => {
              document.removeEventListener("visibilitychange", e);
            }
          );
        }, [a, x]),
        (0, t.jsxs)("div", {
          ref: i,
          className: "absolute top-0 z-40 flex h-px items-center justify-center text-xs",
          "aria-hidden": "true",
          style: {
            top: `calc(${u}*var(--one-minute-height) + var(--calendar-offset-top))`,
            zIndex: 70,
          },
          children: [
            (0, t.jsx)("div", {
              className: "w-16 pr-2 text-right",
              children: (0, n.default)().tz(e).format(s),
            }),
            (0, t.jsx)("div", { className: "bg-inverted h-3 w-px" }),
            (0, t.jsx)("div", { className: "bg-inverted h-px w-screen" }),
          ],
        })
      );
    }
    var b = e.i(127011);
    function v({ showBorder: e, borderColor: r, days: a, containerNavRef: s }) {
      let { i18n: i } = (0, b.useAtomsLocale)(),
        d = h((e) => e.timezone),
        o = h((e) => e.showTimezone ?? !1);
      return (0, t.jsxs)("div", {
        ref: s,
        className: (0, l.cn)(
          "bg-default dark:bg-cal-muted top-(--calendar-dates-sticky-offset,0px) z-80 sticky flex-none border-b",
          "subtle" === r ? "border-b-subtle" : "border-b-default",
          e && ("subtle" === r ? "border-r-subtle border-r" : "border-r-default border-r")
        ),
        children: [
          (0, t.jsx)("div", {
            className: "text-subtle flex leading-6 sm:hidden",
            "data-dayslength": a.length,
            children: a.map((e) => {
              let r = d
                ? (0, n.default)().tz(d).isSame(e, "day")
                : (0, n.default)().isSame(e, "day");
              return (0, t.jsxs)(
                "button",
                {
                  type: "button",
                  className: "flex flex-1 flex-col items-center pb-3 pt-2",
                  children: [
                    e.format("dd"),
                    " ",
                    (0, t.jsx)("span", {
                      className: (0, l.cn)(
                        "text-emphasis mt-1 flex h-8 w-8 items-center justify-center font-medium",
                        r && "bg-inverted text-inverted rounded-sm"
                      ),
                      children: e.format("D"),
                    }),
                  ],
                },
                e.toString()
              );
            }),
          }),
          (0, t.jsxs)("div", {
            className: "text-subtle -mr-px hidden auto-cols-fr leading-6 sm:flex",
            children: [
              (0, t.jsx)("div", {
                className: (0, l.cn)(
                  "col-end-1 flex w-16 items-center justify-center",
                  e && ("subtle" === r ? "border-l-subtle border-l" : "border-l-default border-l")
                ),
                children:
                  o &&
                  d &&
                  (0, t.jsx)("span", {
                    className: "text-muted text-xs font-medium",
                    children: (() => {
                      if (!o || !d) return null;
                      try {
                        let e = (0, n.default)().tz(d).utcOffset(),
                          t = Math.abs(e / 60);
                        if (0 === e) return "GMT";
                        let r = `${e < 0 ? "-" : "+"}${t}`;
                        return `GMT ${r}`;
                      } catch {
                        return d.split("/").pop()?.replace(/_/g, " ") || d;
                      }
                    })(),
                  }),
              }),
              a.map((e) => {
                let r = d
                  ? (0, n.default)().tz(d).isSame(e, "day")
                  : (0, n.default)().isSame(e, "day");
                return (0, t.jsx)(
                  "div",
                  {
                    className: (0, l.cn)(
                      "flex flex-1 items-center justify-center py-3 text-xs font-medium uppercase",
                      r && "text-default"
                    ),
                    children: (0, t.jsxs)("span", {
                      children: [
                        new Intl.DateTimeFormat(i.language, {
                          timeZone: d,
                          weekday: "short",
                        }).format(e.toDate()),
                        " ",
                        (0, t.jsx)("span", {
                          className: (0, l.cn)(
                            "items-center justify-center p-1",
                            r && "bg-brand-default text-brand ml-1 rounded-md"
                          ),
                          children: e.format("DD"),
                        }),
                      ],
                    }),
                  },
                  e.toString()
                );
              }),
            ],
          }),
        ],
      });
    }
    var j = e.i(552759);
    let y = (0, e.i(202031).cva)(
        "group flex h-full w-full overflow-hidden rounded-[6px] px-[6px] text-xs leading-5 border-default font-medium",
        {
          variants: {
            status: {
              ACCEPTED: "bg-subtle hover:bg-emphasis text-emphasis border-[1px] border-default",
              PENDING: "bg-subtle text-subtle border-[1px] border-dashed border-default",
              REJECTED: "bg-subtle border-[1px] border-dashed text-subtle line-through",
              CANCELLED: "bg-subtle border-[1px] border-dashed text-subtle line-through",
              AWAITING_HOST: "bg-subtle text-emphasis border-[1px] border-dashed border-default",
            },
            disabled: { true: "hover:cursor-default", false: "hover:cursor-pointer" },
            selected: { true: "", false: "" },
            borderOnly: {
              true: "bg-transparent border-[1.5px] border-subtle border-dashed opacity-60",
              false: "",
            },
          },
        }
      ),
      w = {
        ACCEPTED: "bg-green-500",
        PENDING: "bg-orange-500",
        REJECTED: "bg-red-500",
        CANCELLED: "bg-red-500",
        AWAITING_HOST: "bg-blue-500",
      },
      N = (e) => {
        if (e) return w[e];
      };
    function z({
      event: e,
      currentlySelectedEventId: r,
      eventDuration: a,
      disabled: s,
      onEventClick: i,
      isHovered: d = !1,
      timezone: o,
    }) {
      let u = r === e.id,
        { options: c } = e,
        f = c?.color ? void 0 : N(c?.status),
        m = o ? (0, n.default)(e.start).tz(o) : (0, n.default)(e.start),
        x = o ? (0, n.default)(e.end).tz(o) : (0, n.default)(e.end),
        h = `${m.format("HH:mm")} - ${x.format("HH:mm")}`,
        p = m.day(),
        g = c?.tooltipDescription ?? e.description,
        b = (0, t.jsx)("div", {
          className: "flex min-w-[200px] max-w-[300px] flex-col gap-1 py-1",
          children: (0, t.jsxs)("div", {
            className: "flex items-start gap-2",
            children: [
              (c?.color || f) &&
                (0, t.jsx)("div", {
                  className: (0, l.cn)("mt-1 h-3 w-1 shrink-0 rounded-sm", f),
                  style: c?.color ? { backgroundColor: c.color } : void 0,
                }),
              (0, t.jsxs)("div", {
                className: "flex-1",
                children: [
                  (0, t.jsx)("div", {
                    className: "font-semibold leading-tight",
                    children: e.title,
                  }),
                  !e.options?.hideTime &&
                    (0, t.jsx)("div", {
                      className: "text-inverted-muted mt-1 text-xs",
                      children: h,
                    }),
                  g &&
                    (0, t.jsx)("div", {
                      className: "text-inverted-muted mt-1 text-xs leading-snug",
                      children: g,
                    }),
                  c?.status &&
                    "ACCEPTED" !== c.status &&
                    (0, t.jsx)("div", {
                      className: "text-inverted-muted mt-1 text-xs capitalize",
                      children: c.status.toLowerCase().replace("_", " "),
                    }),
                ],
              }),
            ],
          }),
        }),
        v = a < 40 ? "single-line" : a < 45 ? "multi-line" : "full";
      return (0, t.jsx)(j.Tooltip, {
        content: b,
        className: "max-w-none",
        side: p >= 1 && p <= 4 ? "right" : "left",
        children: (0, t.jsxs)(i ? "button" : "div", {
          "data-booking-calendar-event": "true",
          onClick: () => i?.(e),
          ...(c?.bookingUid ? { "data-booking-uid": c.bookingUid } : {}),
          className: (0, l.cn)(
            y({ status: c?.status, disabled: s, selected: u, borderOnly: c?.borderOnly ?? !1 }),
            c?.className,
            (d || u) && "ring-brand-default shadow-lg ring-2 ring-offset-0"
          ),
          style: { transition: "all 100ms ease-out" },
          children: [
            (c?.color || f) &&
              (0, t.jsx)("div", {
                className: (0, l.cn)("-ml-1.5 mr-1.5 h-full w-[3px] shrink-0", f),
                style: c?.color ? { backgroundColor: c.color } : void 0,
              }),
            (0, t.jsxs)("div", {
              className: (0, l.cn)("flex w-full", "single-line" !== v && "flex-col py-1"),
              children: [
                "single-line" === v &&
                  (0, t.jsxs)("div", {
                    className: (0, l.cn)(
                      "flex w-full shrink-0 gap-2 overflow-hidden text-ellipsis whitespace-nowrap text-left leading-4",
                      "items-center"
                    ),
                    children: [
                      (0, t.jsx)("span", { children: e.title }),
                      !e.options?.hideTime &&
                        (0, t.jsx)("p", {
                          className:
                            "text-subtle mt-1 w-full whitespace-nowrap text-left text-[10px] leading-none",
                          children: h,
                        }),
                    ],
                  }),
                "single-line" !== v &&
                  (0, t.jsx)("p", {
                    className: (0, l.cn)("shrink-0 whitespace-nowrap text-left leading-4"),
                    children: e.title,
                  }),
                "single-line" !== v &&
                  !e.options?.hideTime &&
                  (0, t.jsx)("p", {
                    className:
                      "text-subtle mt-1 whitespace-nowrap text-left text-[10px] leading-none",
                    children: h,
                  }),
                "full" === v &&
                  e.description &&
                  (0, t.jsx)("p", {
                    className: "text-subtle mt-1 text-left text-[10px] leading-none",
                    children: e.description,
                  }),
              ],
            }),
          ],
        }),
      });
    }
    let D = (e, t, r) => Math.max(t, Math.min(r, e));
    function k(e, t) {
      let r = (0, n.default)(e.start).tz(t),
        l = (0, n.default)(e.end).tz(t),
        a = r.isSame(l, "day") ? "HH:mm" : "MMM D, HH:mm";
      return `${r.format(a)} – ${l.format(a)}`;
    }
    function C(e, t) {
      if (e.options?.allDay) return !0;
      let r = t ? (0, n.default)(e.start).tz(t) : (0, n.default)(e.start),
        l = t ? (0, n.default)(e.end).tz(t) : (0, n.default)(e.end);
      return !r.isSame(l, "day");
    }
    function E(e, t, r, l) {
      return e.isBefore(l) && t.isAfter(r);
    }
    function S(e) {
      let {
          title: r,
          description: a,
          timeRange: s,
          dataTestId: n,
          containerStyle: i,
          strip: d,
        } = (function ({ span: e, colCount: t, timezone: r }) {
          let {
              event: l,
              startCol: a,
              endCol: s,
              startOffsetInDay: n,
              endOffsetInDay: i,
              lane: d,
            } = e,
            o = a + n,
            u = k(l, r),
            c = l.options?.color ? void 0 : N(l.options?.status),
            f = !!(l.options?.color || c);
          return {
            title: l.title,
            description: l.options?.tooltipDescription ?? l.description,
            timeRange: u,
            dataTestId: l.options?.["data-test-id"],
            containerStyle: {
              left: `calc(${(o / t) * 100}% + 2px)`,
              width: `calc(${((s + i - o) / t) * 100}% - 4px)`,
              top: 4 + 34 * d,
              height: 32,
            },
            strip: f ? { colorClass: c, backgroundColor: l.options?.color } : null,
          };
        })(e),
        o = (0, t.jsxs)("div", {
          className: "flex min-w-[200px] max-w-[300px] flex-col gap-1 py-1",
          children: [
            (0, t.jsx)("div", { className: "font-semibold leading-tight", children: r }),
            (0, t.jsx)("div", { className: "text-inverted-muted text-xs", children: s }),
            a &&
              (0, t.jsx)("div", {
                className: "text-inverted-muted text-xs leading-snug",
                children: a,
              }),
          ],
        });
      return (0, t.jsx)(j.Tooltip, {
        content: o,
        className: "max-w-none",
        children: (0, t.jsxs)("div", {
          "data-testid": n,
          className:
            "bg-subtle text-emphasis border-default absolute flex overflow-hidden rounded-[6px] border px-[6px] text-[11px] font-medium leading-tight",
          style: i,
          children: [
            d &&
              (0, t.jsx)("div", {
                "data-testid": "allday-color-strip",
                className: (0, l.cn)("-ml-1.5 mr-1.5 h-full w-[3px] shrink-0", d.colorClass),
                style: d.backgroundColor ? { backgroundColor: d.backgroundColor } : void 0,
              }),
            (0, t.jsxs)("div", {
              className: "flex min-w-0 flex-1 flex-col justify-center",
              children: [
                (0, t.jsx)("span", { className: "truncate", children: r }),
                (0, t.jsx)("span", { className: "text-subtle truncate text-[10px]", children: s }),
              ],
            }),
          ],
        }),
      });
    }
    function T({ cell: e, day: r }) {
      let { t: l } = (0, b.useAtomsLocale)(),
        a = r.day() >= 1 && 4 >= r.day() ? "right" : "left",
        s = (0, t.jsxs)("div", {
          className: "flex min-w-[220px] max-w-[320px] flex-col gap-1 py-1",
          children: [
            (0, t.jsx)("div", {
              className: "font-semibold leading-tight",
              children: l("why_unavailable"),
            }),
            (0, t.jsx)("div", {
              className: "text-inverted-muted text-xs leading-snug",
              children: l("blocked_by_all_day_event", { eventTitle: e.title }),
            }),
            (0, t.jsx)("div", { className: "text-inverted-muted text-xs", children: e.timeRange }),
            e.description &&
              (0, t.jsx)("div", {
                className: "text-inverted-muted text-xs leading-snug",
                children: e.description,
              }),
          ],
        });
      return (0, t.jsx)(j.Tooltip, {
        content: s,
        className: "max-w-none",
        side: a,
        children: (0, t.jsx)("button", {
          type: "button",
          tabIndex: -1,
          "aria-label": l("why_unavailable"),
          "data-testid": "calendar-unavailable-reason",
          onClick: (e) => e.currentTarget.focus(),
          className:
            "group absolute left-0 z-50 w-[calc(100%-1px)] cursor-help bg-[repeating-linear-gradient(-45deg,var(--disabled-gradient-background),var(--disabled-gradient-background)_2.5px,var(--disabled-gradient-foreground)_2.5px,var(--disabled-gradient-foreground)_5px)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-default",
          style: {
            top: `calc(${e.topOffsetMinutes}*var(--one-minute-height))`,
            height: `calc(${e.durationMinutes}*var(--one-minute-height))`,
          },
        }),
      });
    }
    function M({
      availableSlots: e,
      day: l,
      startHour: a,
      endHour: s,
      gridCellsPerHour: i,
      timezone: d,
    }) {
      let o = h((e) => e.events),
        u = (0, r.useMemo)(
          () =>
            (function ({
              events: e,
              availableSlots: t,
              day: r,
              startHour: l,
              endHour: a,
              gridCellsPerHour: s,
              timezone: i,
            }) {
              let d = r.tz(i).startOf("day").add(l, "hour"),
                o = r
                  .tz(i)
                  .startOf("day")
                  .add(a + 1, "hour"),
                u = s > 0 ? 60 / s : 15,
                c = r.tz(i).format("YYYY-MM-DD"),
                f = t?.[c]?.filter((e) => !e.away) ?? [],
                m = [];
              for (let t of e) {
                if (!C(t, i)) continue;
                let e = (0, n.default)(t.start).tz(i),
                  r = (0, n.default)(t.end).tz(i);
                if (!E(e, r, d, o)) continue;
                let l = e.isAfter(d) ? e : d,
                  a = r.isBefore(o) ? r : o,
                  s = l.diff(d, "minutes"),
                  c = a.diff(l, "minutes");
                if (!(c <= 0))
                  for (let e = s; e < s + c; e += u) {
                    let r = d.add(e, "minutes"),
                      l = r.add(Math.min(u, s + c - e), "minutes");
                    f.some((e) =>
                      E((0, n.default)(e.start).tz(i), (0, n.default)(e.end).tz(i), r, l)
                    ) ||
                      m.push({
                        event: t,
                        topOffsetMinutes: e,
                        durationMinutes: Math.min(u, s + c - e),
                        title: t.title,
                        description: t.options?.tooltipDescription ?? t.description,
                        timeRange: k(t, i),
                      });
                  }
              }
              return m;
            })({
              events: o,
              availableSlots: e,
              day: l,
              startHour: a,
              endHour: s,
              gridCellsPerHour: i,
              timezone: d,
            }),
          [e, l, s, o, i, a, d]
        );
      return 0 === u.length
        ? null
        : (0, t.jsx)(j.TooltipProvider, {
            children: u.map((e) =>
              (0, t.jsx)(
                T,
                { cell: e, day: l },
                `${e.event.id}-${e.topOffsetMinutes}-${e.durationMinutes}`
              )
            ),
          });
    }
    function O(e) {
      let { gridTemplateColumns: r, columns: l } = (function ({ days: e, borderColor: t }) {
        let r = "subtle" === t ? "border-l-subtle border-l" : "border-l-default border-l";
        return {
          gridTemplateColumns: `repeat(${e.length}, 1fr)`,
          columns: e.map((e, t) => ({ key: e.toISOString(), className: t > 0 ? r : "" })),
        };
      })(e);
      return (0, t.jsx)("div", {
        className: "grid h-full auto-cols-fr",
        style: { gridTemplateColumns: r },
        children: l.map(({ key: e, className: r }) => (0, t.jsx)("div", { className: r }, e)),
      });
    }
    function I({ days: e, showBorder: r, borderColor: a, timezone: s }) {
      let { t: i } = (0, b.useAtomsLocale)(),
        {
          spans: d,
          containerHeight: o,
          isEmpty: u,
        } = (function ({ days: e, timezone: t }) {
          let r = (function ({ events: e, days: t, timezone: r }) {
              let l = [];
              for (let t of e) {
                if (!C(t, r)) continue;
                let e = (0, n.default)(t.start).tz(r),
                  a = (0, n.default)(t.end).tz(r);
                l.push({ event: t, eventStart: e, eventEnd: a });
              }
              if (0 === l.length) return [];
              let a = t[0],
                s = t[t.length - 1];
              if (!a || !s) return [];
              let i = t.map((e) => e.tz(r).startOf("day")),
                d = t.map((e) => e.tz(r).endOf("day")),
                o = i[0],
                u = d[d.length - 1],
                c = [];
              for (let { event: e, eventStart: r, eventEnd: a } of l) {
                if (a.isBefore(o) || r.isAfter(u)) continue;
                let l = -1,
                  s = -1;
                for (let e = 0; e < t.length; e++)
                  E(r, a, i[e], d[e]) && (-1 === l && (l = e), (s = e));
                if (-1 === l) continue;
                let n = r.diff(i[l]),
                  f = a.diff(i[s]),
                  m = D(n / 864e5, 0, 1),
                  x = D(f / 864e5, 0, 1);
                c.push({
                  event: e,
                  startCol: l,
                  endCol: s,
                  startOffsetInDay: m,
                  endOffsetInDay: x,
                  lane: 0,
                });
              }
              let f = (function (e) {
                let t = e.map((e, t) => ({ interval: e, i: t }));
                t.sort((e, t) => e.interval.start - t.interval.start);
                let r = [],
                  l = Array(e.length);
                for (let { interval: e, i: a } of t) {
                  let t = r.findIndex((t) => t <= e.start);
                  (-1 === t ? ((t = r.length), r.push(e.end)) : (r[t] = e.end), (l[a] = t));
                }
                return l;
              })(
                c.map((e) => ({
                  start: e.startCol + e.startOffsetInDay,
                  end: e.endCol + e.endOffsetInDay,
                }))
              );
              return (
                c.forEach((e, t) => {
                  e.lane = f[t];
                }),
                c
              );
            })({ events: h((e) => e.events), days: e, timezone: t }),
            l = r.reduce((e, t) => Math.max(e, t.lane + 1), 0);
          return { spans: r, containerHeight: 8 + 32 * l + (l - 1) * 2, isEmpty: 0 === r.length };
        })({ days: e, timezone: s });
      return u
        ? null
        : (0, t.jsxs)("div", {
            className: (0, l.cn)(
              "bg-default dark:bg-cal-muted flex border-b",
              "subtle" === a ? "border-b-subtle" : "border-b-default",
              r && ("subtle" === a ? "border-r-subtle border-r" : "border-r-default border-r")
            ),
            children: [
              (0, t.jsx)("div", {
                "data-testid": "allday-row-label",
                className: (0, l.cn)(
                  "text-emphasis flex w-16 shrink-0 items-center justify-center text-[10px] font-bold",
                  r &&
                    ("subtle" === a
                      ? "border-l-subtle border-r-subtle border-l border-r"
                      : "border-l-default border-r-default border-l border-r")
                ),
                children: i("all_day"),
              }),
              (0, t.jsxs)("div", {
                className: "relative flex-auto",
                style: { height: o },
                children: [
                  (0, t.jsx)(O, { days: e, borderColor: a }),
                  (0, t.jsx)(j.TooltipProvider, {
                    children: (0, t.jsx)("div", {
                      className: "absolute inset-0 px-0.5",
                      children: d.map((r) =>
                        (0, t.jsx)(S, { span: r, colCount: e.length, timezone: s }, r.event.id)
                      ),
                    }),
                  }),
                ],
              }),
            ],
          });
    }
    var H = e.i(450608),
      $ = e.i(961555);
    function P(e) {
      let { t: r } = (0, b.useAtomsLocale)(),
        {
          fromUser: a,
          toUser: s,
          emoji: n = "🏝️",
          reason: i,
          borderDashed: d = !0,
          className: o,
          notes: u,
          showNotePublicly: c,
        } = e,
        f = !a && i;
      return f || a
        ? (0, t.jsx)("div", {
            className: (0, l.cn)("relative h-full pb-5", o),
            children: (0, t.jsxs)("div", {
              className: (0, l.cn)(
                "flex h-full flex-col items-center justify-start rounded-md border bg-white px-4 py-4 font-normal dark:bg-transparent",
                d && "border-dashed"
              ),
              children: [
                (0, t.jsx)("div", {
                  className:
                    "bg-emphasis flex h-14 w-14 flex-col items-center justify-center rounded-full",
                  children: (0, t.jsx)("span", {
                    className: "m-auto text-center text-lg",
                    children: n,
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "stack-y-2 max-h-[300px] w-full overflow-y-auto text-center",
                  children: f
                    ? (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)("p", { className: "mt-2 text-base font-bold", children: i }),
                          (0, t.jsx)("p", {
                            className: "text-subtle text-center text-sm",
                            children: r("holiday_no_availability"),
                          }),
                        ],
                      })
                    : (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)("p", {
                            className: "mt-2 text-base font-bold",
                            children: r("ooo_user_is_ooo", { displayName: a?.displayName }),
                          }),
                          u &&
                            c &&
                            (0, t.jsx)("p", {
                              className:
                                "text-subtle mt-2 max-h-[120px] overflow-y-auto break-words px-2 text-center text-sm italic",
                              children: u,
                            }),
                          a?.displayName &&
                            s?.displayName &&
                            (0, t.jsx)("p", {
                              className: "text-center text-sm",
                              children: (0, t.jsx)($.default, {
                                t: r,
                                i18nKey: "ooo_slots_returning",
                                values: { displayName: s.displayName },
                                components: [
                                  (0, t.jsx)("strong", { children: "username" }, "username"),
                                ],
                              }),
                            }),
                        ],
                      }),
                }),
              ],
            }),
          })
        : null;
    }
    function A(e) {
      let r = o({
          day: e.day,
          gridCellIdx: e.gridCellIdx,
          totalGridCells: e.totalGridCells,
          selectionLength: e.selectionLength,
          startHour: e.startHour,
          timezone: e.timezone,
        }),
        l = (r.hour() - e.startHour) * 60 + r.minute();
      return (0, t.jsx)(_, { topOffsetMinutes: l, timeSlot: (0, n.default)(r).tz(e.timezone) });
    }
    function B({ timezone: e, availableSlots: l, day: a, startHour: s, renderOutOfOffice: i }) {
      let d = a.tz(e).format("YYYY-MM-DD"),
        o = l && l[d],
        u = (0, r.useMemo)(() => {
          let t = [],
            r = -1,
            l = -1,
            a = !0,
            i = 0;
          if (
            (o?.forEach((i, d) => {
              let o = (0, n.default)(i.start).tz(e),
                u = (o.hour() - s) * 60 + o.minute();
              (t.push({ slot: i, topOffsetMinutes: u }),
                i.away ? (-1 === r && (r = d), (l = d)) : (a = !1));
            }),
            a && -1 !== r)
          ) {
            let a = o[r],
              s = o[l];
            return ((i = (0, n.default)(s.end).diff((0, n.default)(a.start), "minutes")),
            null != a.toUser || a.showNotePublicly)
              ? { slots: t, startEndTimeDuration: i, firstSlot: a, timezone: e }
              : null;
          }
          return { slots: t, startEndTimeDuration: i };
        }, [o, s, e]);
      if (null === u) return null;
      if (u.startEndTimeDuration) {
        let { firstSlot: e, startEndTimeDuration: r } = u,
          l = i ?? ((e) => (0, t.jsx)(P, { ...e }));
        return (0, t.jsx)(R, {
          timeSlot: (0, n.default)(e?.start).tz(u.timezone),
          topOffsetMinutes: u.slots[0]?.topOffsetMinutes,
          startEndTimeDuration: r,
          children: l({
            fromUser: e?.fromUser,
            toUser: e?.toUser,
            reason: e?.reason,
            emoji: e?.emoji,
            notes: e?.notes,
            showNotePublicly: e?.showNotePublicly,
            borderDashed: !1,
            date: d,
            className: "pb-0",
          }),
        });
      }
      return (0, t.jsx)(t.Fragment, {
        children: u.slots.map((r, l) =>
          (0, t.jsx)(
            _,
            { timeSlot: (0, n.default)(r.slot.start).tz(e), topOffsetMinutes: r.topOffsetMinutes },
            l
          )
        ),
      });
    }
    function _({ isDisabled: e, topOffsetMinutes: r, timeSlot: a }) {
      let { timeFormat: s } = (0, p.useTimePreferences)(),
        { onEmptyCellClick: n, hoverEventDuration: i } = h(
          (e) => ({
            onEmptyCellClick: e.onEmptyCellClick,
            hoverEventDuration: e.hoverEventDuration,
          }),
          H.shallow
        );
      return (0, t.jsx)("div", {
        className: (0, l.cn)(
          "group flex w-[calc(100%-1px)] items-center justify-center",
          e && "pointer-events-none",
          !e && "bg-default dark:bg-cal-muted",
          r && "absolute"
        ),
        "data-disabled": e,
        "data-slot": a.toISOString(),
        "data-testid": "calendar-empty-cell",
        style: {
          height: `calc(${i}*var(--one-minute-height))`,
          overflow: "visible",
          top: r ? `calc(${r}*var(--one-minute-height))` : void 0,
        },
        onClick: () => {
          n?.(a.toDate());
        },
        children:
          !e &&
          0 !== i &&
          (0, t.jsx)("div", {
            className: (0, l.cn)(
              "bg-brand-default hover:bg-brand-default text-brand dark:border-emphasis absolute hidden rounded-[4px] p-[6px] text-xs font-semibold leading-5 group-hover:flex group-hover:cursor-pointer",
              i && i > 15 && "items-start pt-3",
              i && i < 15 && "items-center"
            ),
            style: {
              height: `calc(${i}*var(--one-minute-height) - 2px)`,
              zIndex: 80,
              width: "calc(100% - 2px)",
            },
            children: (0, t.jsx)("div", {
              className: "text-ellipsis leading-0",
              children: a.format(s),
            }),
          }),
      });
    }
    function R({ timeSlot: e, children: r, topOffsetMinutes: a, startEndTimeDuration: s }) {
      return (0, t.jsx)("div", {
        className: (0, l.cn)(
          "bg-default dark:bg-cal-muted group absolute z-65 flex w-[calc(100%-1px)] items-center justify-center"
        ),
        "data-slot": e.toISOString(),
        style: { top: a ? `calc(${a}*var(--one-minute-height))` : void 0, overflow: "visible" },
        children: (0, t.jsx)("div", {
          className: (0, l.cn)(
            "dark:border-emphasis bg-default dark:bg-cal-muted cursor-pointer rounded-[4px] p-[6px] text-xs font-semibold dark:text-white"
          ),
          style: { height: `calc(${s}*var(--one-minute-height) - 2px)`, width: "calc(100% - 2px)" },
          children: r,
        }),
      });
    }
    let L = { baseZIndex: 60, safetyMarginPercent: 0.5, minWidthPercent: 25, curveExponent: 1.3 };
    function F(e) {
      return Math.floor(1e3 * e) / 1e3;
    }
    function U({ day: e }) {
      let {
          startHour: a,
          events: s,
          eventOnClick: i,
          selectedBookingUid: d,
          timezone: o,
        } = h(
          (e) => ({
            startHour: e.startHour,
            events: e.events,
            eventOnClick: e.onEventClick,
            selectedBookingUid: e.selectedBookingUid,
            timezone: e.timezone,
          }),
          H.shallow
        ),
        [u, c] = (0, r.useState)(null),
        f = (0, r.useMemo)(
          () =>
            s.filter(
              (t) =>
                (o ? (0, n.default)(t.start).tz(o) : (0, n.default)(t.start)).isSame(e, "day") &&
                !C(t, o)
            ),
          [s, e, o]
        ),
        m = (0, r.useMemo)(() => {
          var e;
          let t;
          return (
            (e = (function (e, t = {}) {
              let {
                  baseZIndex: r,
                  safetyMarginPercent: l,
                  minWidthPercent: a,
                  curveExponent: s,
                } = { ...L, ...t },
                i = (function (e) {
                  if (0 === e.length) return [];
                  let t = [],
                    r = [e[0]],
                    l = (0, n.default)(e[0].end);
                  for (let a = 1; a < e.length; a++) {
                    let s = e[a],
                      i = (0, n.default)(s.start),
                      d = (0, n.default)(s.end);
                    i.isBefore(l)
                      ? (r.push(s), d.isAfter(l) && (l = d))
                      : (t.push(r), (r = [s]), (l = d));
                  }
                  return (t.push(r), t);
                })(
                  [...e].sort((e, t) => {
                    let r = (0, n.default)(e.start),
                      l = (0, n.default)(t.start),
                      a = r.diff(l);
                    if (0 !== a) return a;
                    let s = (0, n.default)(e.end);
                    return (0, n.default)(t.end).diff(s);
                  })
                ),
                d = [];
              return (
                i.forEach((e, t) => {
                  let n = e.length,
                    i = (function (e, t, r) {
                      let l, a;
                      if (e <= 1) return [100];
                      2 === e
                        ? ((l = 80), (a = 50))
                        : 3 === e
                          ? ((l = 55), (a = 33))
                          : 4 === e
                            ? ((l = 40), (a = 25))
                            : ((l = Math.max(30, 40 - 3 * (e - 4))), (a = t));
                      let s = [];
                      for (let n = 0; n < e; n++) {
                        let i = a + (l - a) * Math.pow(1 - (e > 1 ? n / (e - 1) : 0), r);
                        s.push(Math.max(t, i));
                      }
                      return s;
                    })(n, a, s),
                    o = 100 - l;
                  if (1 === n) {
                    let l = F(Math.min(i[0], o));
                    d.push({
                      event: e[0],
                      leftOffsetPercent: 0,
                      widthPercent: l,
                      baseZIndex: r,
                      groupIndex: t,
                      indexInGroup: 0,
                    });
                  } else {
                    let l = i[0];
                    e.forEach((e, a) => {
                      let s = Number((l + (a / (n - 1)) * (o - l) - i[a]).toFixed(3)),
                        u = F(Math.max(0, Math.min(i[a], o - s)));
                      d.push({
                        event: e,
                        leftOffsetPercent: s,
                        widthPercent: u,
                        baseZIndex: r + a,
                        groupIndex: t,
                        indexInGroup: a,
                      });
                    });
                  }
                }),
                d
              );
            })(f)),
            (t = new Map()),
            e.forEach((e) => {
              t.set(e.event.id, e);
            }),
            t
          );
        }, [f]),
        x = (0, r.useMemo)(
          () =>
            new Map(
              f.map((e) => {
                let t = o ? (0, n.default)(e.start).tz(o) : (0, n.default)(e.start),
                  r = (o ? (0, n.default)(e.end).tz(o) : (0, n.default)(e.end)).diff(t, "minutes"),
                  l = (t.hour() - (a || 0)) * 60 + t.minute();
                return [e.id, { eventStart: t, eventDuration: r, eventStartDiff: l }];
              })
            ),
          [f, a, o]
        ),
        p = u ? m.get(u) : null,
        g = p?.groupIndex ?? null,
        b = (0, r.useMemo)(() => {
          if (!d) return;
          let e = f.find((e) => e.options?.bookingUid === d);
          return e?.id;
        }, [f, d]);
      return (
        (0, r.useEffect)(() => {
          void 0 !== b &&
            requestAnimationFrame(() => {
              let e = document.querySelector(`[data-calendar-event-id="${b}"]`);
              e && e.scrollIntoView({ behavior: "smooth", block: "nearest" });
            });
        }, [b]),
        (0, t.jsx)(t.Fragment, {
          children: f.map((e) => {
            let r = m.get(e.id);
            if (!r) return null;
            let a = x.get(e.id);
            if (!a) return null;
            let { eventStart: s, eventDuration: n, eventStartDiff: d } = a,
              f = u === e.id,
              h = b === e.id,
              p = null !== g && r.groupIndex === g,
              v = f || h ? 79 : r.baseZIndex;
            return (0, t.jsx)(
              "div",
              {
                className: (0, l.cn)(
                  "absolute transition-all duration-100 ease-out",
                  e.options?.borderOnly && "pointer-events-none"
                ),
                "data-testid": e.options?.["data-test-id"],
                "data-calendar-event-id": e.id,
                "data-calendar-event-source": e.source,
                onMouseEnter: () => c(e.id),
                onMouseLeave: () => c(null),
                style: {
                  left: `${r.leftOffsetPercent}%`,
                  width: `${r.widthPercent}%`,
                  zIndex: v,
                  top: `calc(${d}*var(--one-minute-height))`,
                  height: `max(15px, calc(${n}*var(--one-minute-height)))`,
                  transform: f || h ? "scale(1.02)" : "scale(1)",
                  opacity: null !== g && !f && p ? 0.6 : 1,
                },
                children: (0, t.jsx)(z, {
                  event: e,
                  eventDuration: n,
                  onEventClick: i,
                  isHovered: f,
                  currentlySelectedEventId: b,
                  timezone: o,
                }),
              },
              `${e.id}-${s.toISOString()}`
            );
          }),
        })
      );
    }
    let Y = r.default.forwardRef(function (
      { offsetHeight: e, gridStopsPerDay: r, children: l, zIndex: a },
      s
    ) {
      return (0, t.jsx)("ol", {
        ref: s,
        className:
          "scheduler-grid-row-template col-start-1 col-end-2 row-start-1 grid auto-cols-auto text-[0px] scheduler-wrapper",
        style: { marginTop: e || "var(--gridDefaultSize)", zIndex: a },
        "data-gridstopsperday": r,
        children: l,
      });
    });
    var G = e.i(538173);
    function Z() {
      let {
        startDate: e,
        endDate: r,
        handleDateChange: l,
      } = h((e) => ({
        startDate: (0, n.default)(e.startDate).tz(e.timezone),
        endDate: (0, n.default)(e.endDate).tz(e.timezone),
        handleDateChange: e.handleDateChange,
      }));
      return (0, t.jsxs)("header", {
        className: "flex flex-none flex-col justify-between py-4 sm:flex-row sm:items-center",
        children: [
          (0, t.jsxs)("h1", {
            className: "text-emphasis text-xl font-semibold",
            children: [
              e.format("MMM DD"),
              "-",
              r.format("DD"),
              (0, t.jsxs)("span", { className: "text-subtle", children: [",", e.format("YYYY")] }),
            ],
          }),
          (0, t.jsx)("div", {
            className: "flex items-center space-x-2 rtl:space-x-reverse",
            children: (0, t.jsxs)("div", {
              className: "inline-flex items-center",
              children: [
                (0, t.jsx)(G.Button, {
                  StartIcon: "chevron-left",
                  variant: "icon",
                  color: "secondary",
                  "aria-label": "Previous Week",
                  onClick: () => l("DECREMENT"),
                }),
                (0, t.jsx)(G.Button, {
                  StartIcon: "chevron-right",
                  variant: "icon",
                  color: "secondary",
                  "aria-label": "Next Week",
                  onClick: () => l("INCREMENT"),
                }),
              ],
            }),
          }),
        ],
      });
    }
    let W = ({ hours: e, containerOffsetRef: a, borderColor: s }) => {
        let { timeFormat: n } = (0, p.useTimePreferences)(),
          i = e[e.length - 1].add(1, "hour").minute(0).format(n),
          d = (0, r.useId)();
        return (0, t.jsxs)("div", {
          className: (0, l.cn)(
            "pointer-events-none relative z-60 col-start-1 col-end-2 row-start-1 grid divide-y",
            "subtle" === s ? "divide-subtle" : "divide-default"
          ),
          style: { gridTemplateRows: `repeat(${e.length}, minmax(var(--gridDefaultSize),1fr)` },
          children: [
            (0, t.jsx)("div", { className: "row-end-1 h-(--calendar-offset-top)", ref: a }),
            e.map((e) =>
              (0, t.jsx)(
                "div",
                {
                  children: (0, t.jsx)("div", {
                    className:
                      "text-muted sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 rtl:-mr-14",
                    children: e.minute(0).format(n),
                  }),
                },
                `${d}-${e.get("hour")}`
              )
            ),
            (0, t.jsx)(
              "div",
              {
                children: (0, t.jsx)("div", {
                  className:
                    "text-muted sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 rtl:-mr-14",
                  children: i,
                }),
              },
              `${d}-${i}`
            ),
          ],
        });
      },
      K = ({ className: e }) =>
        (0, t.jsx)("div", {
          className: (0, l.cn)(
            "fixed left-[calc(50%+calc(var(--booker-meta-width,0px)/2))] top-1/2 z-80 h-10 w-10 -translate-x-1/2 -translate-y-1/2",
            e
          ),
          children: (0, t.jsxs)("svg", {
            className: "h-10 w-10",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, t.jsx)("title", { children: "Loading" }),
              (0, t.jsx)("path", {
                className: "fill-default",
                d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
                opacity: ".25",
              }),
              (0, t.jsx)("path", {
                className: "animate-spinning fill-emphasis origin-center",
                d: "M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z",
              }),
            ],
          }),
        }),
      V = ({ days: e, borderColor: r }) => {
        let a = () => {
            let e = "en";
            if ("u" > typeof navigator) {
              let t = navigator.language;
              e = new Intl.Locale(t).language;
            }
            return ["ar", "he", "fa", "ur"].includes(e);
          },
          s = a() ? "rtl" : "ltr";
        return (0, t.jsx)("div", {
          className: (0, l.cn)(
            "pointer-events-none relative z-60 col-start-1 col-end-2 row-start-1 grid auto-cols-auto grid-rows-1 divide-x",
            "subtle" === r ? "divide-subtle" : "divide-default"
          ),
          dir: s,
          style: { direction: s },
          children: e.map((r, l) =>
            (0, t.jsx)(
              "div",
              {
                className: "row-span-full",
                style: { gridColumnStart: a() ? e.length - l : l + 1 },
              },
              `Key_vertical_${l}`
            )
          ),
        });
      };
    function q(e) {
      let a = (0, r.useRef)(null),
        s = (0, r.useRef)(null),
        n = (0, r.useRef)(null),
        i = (0, r.useRef)(null),
        d = h((e) => e.initState),
        o = h((e) => e.startDate),
        f = h((e) => e.endDate),
        m = h((e) => e.startHour || 0),
        x = h((e) => e.endHour || 23),
        p = h((e) => e.gridCellsPerHour || 4),
        b = h((e) => e.availableTimeslots),
        j = h((e) => e.hideHeader),
        y = h((e) => e.timezone),
        w = h((e) => e.showBackgroundPattern),
        N = h((e) => e.showBorder ?? !0),
        z = h((e) => e.borderColor ?? "default"),
        D = h((e) => e.scrollToCurrentTime ?? !0),
        k = h((e) => e.updateCurrentTimeOnFocus ?? !1),
        C = h((e) => e.renderOutOfOffice),
        E = (0, r.useMemo)(() => u(o, f, y), [o, f, y]),
        S = (0, r.useMemo)(() => c(m || 0, x || 23, y), [m, x, y]),
        T = S.length * p;
      return (
        (0, r.useEffect)(() => {
          d(e);
        }, [e, d]),
        (0, t.jsx)(J, {
          children: (0, t.jsxs)("div", {
            className: (0, l.cn)("scheduler-wrapper flex h-full w-full flex-col"),
            style: { "--one-minute-height": "calc(58px/60)", "--gridDefaultSize": "58px" },
            children: [
              !0 !== j && (0, t.jsx)(Z, {}),
              e.isPending && (0, t.jsx)(K, {}),
              (0, t.jsx)("div", {
                ref: a,
                className:
                  "bg-default dark:bg-cal-muted relative isolate flex h-full flex-auto flex-col",
                children: (0, t.jsxs)("div", {
                  style: { width: "165%" },
                  className: "flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "top-(--calendar-dates-sticky-offset,0px) z-80 sticky",
                      children: [
                        (0, t.jsx)(v, {
                          containerNavRef: s,
                          days: E,
                          showBorder: N,
                          borderColor: z,
                        }),
                        (0, t.jsx)(I, { days: E, showBorder: N, borderColor: z, timezone: y }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "relative flex flex-auto",
                      children: [
                        (0, t.jsx)(g, { timezone: y, scrollToCurrentTime: D, updateOnFocus: k }),
                        (0, t.jsx)("div", {
                          className: (0, l.cn)(
                            "bg-default dark:bg-cal-muted ring-muted sticky left-0 z-10 w-16 flex-none ring-1",
                            N &&
                              ("subtle" === z
                                ? "border-subtle border-l border-r"
                                : "border-default border-l border-r")
                          ),
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "grid flex-auto grid-cols-1 grid-rows-1 [--disabled-gradient-background:#F8F9FB] [--disabled-gradient-foreground:#E6E7EB] dark:[--disabled-gradient-background:#262626] dark:[--disabled-gradient-foreground:#393939]",
                          style:
                            !1 === w
                              ? void 0
                              : {
                                  backgroundColor: "var(--disabled-gradient-background)",
                                  background:
                                    "repeating-linear-gradient(-45deg, var(--disabled-gradient-background), var(--disabled-gradient-background) 2.5px, var(--disabled-gradient-foreground) 2.5px, var(--disabled-gradient-foreground) 5px)",
                                },
                          children: [
                            (0, t.jsx)(W, {
                              hours: S,
                              numberOfGridStopsPerCell: p,
                              containerOffsetRef: n,
                              borderColor: z,
                            }),
                            (0, t.jsx)(V, { days: E, borderColor: z }),
                            (0, t.jsx)(Y, {
                              offsetHeight: n.current?.offsetHeight,
                              gridStopsPerDay: T,
                              children: E.map((e, r) =>
                                (0, t.jsx)(
                                  "li",
                                  {
                                    className: "relative",
                                    style: { gridColumnStart: r + 1 },
                                    children: (0, t.jsx)(U, { day: e }),
                                  },
                                  e.toISOString()
                                )
                              ),
                            }),
                            (0, t.jsx)(Y, {
                              ref: i,
                              offsetHeight: n.current?.offsetHeight,
                              gridStopsPerDay: T,
                              children: (0, t.jsx)(t.Fragment, {
                                children: [...Array(E.length)].map((e, r) =>
                                  (0, t.jsx)(
                                    "li",
                                    {
                                      className: "relative",
                                      style: { gridColumnStart: r + 1, gridRow: `1 / span ${T}` },
                                      children: b
                                        ? (0, t.jsxs)(t.Fragment, {
                                            children: [
                                              (0, t.jsx)(
                                                B,
                                                {
                                                  timezone: y,
                                                  day: E[r],
                                                  startHour: m,
                                                  availableSlots: b,
                                                  renderOutOfOffice: C,
                                                },
                                                E[r].toISOString()
                                              ),
                                              (0, t.jsx)(M, {
                                                availableSlots: b,
                                                day: E[r],
                                                startHour: m,
                                                endHour: x,
                                                gridCellsPerHour: p,
                                                timezone: y,
                                              }),
                                            ],
                                          })
                                        : (0, t.jsx)(t.Fragment, {
                                            children: [...Array(T)].map((e, l) => {
                                              let a = `${r}-${l}`;
                                              return (0, t.jsx)(
                                                A,
                                                {
                                                  day: E[r],
                                                  gridCellIdx: l,
                                                  totalGridCells: T,
                                                  selectionLength: x - m,
                                                  startHour: m,
                                                  timezone: y,
                                                },
                                                a
                                              );
                                            }),
                                          }),
                                    },
                                    r
                                  )
                                ),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        })
      );
    }
    let J = ({ children: e }) =>
      (0, t.jsxs)(t.Fragment, {
        children: [
          (0, t.jsxs)("div", {
            className: "flex h-full flex-col items-center justify-center sm:hidden",
            children: [
              (0, t.jsx)("h1", {
                className: "text-2xl font-bold",
                children: "Mobile not supported yet ",
              }),
              (0, t.jsx)("p", {
                className: "text-subtle",
                children: "Please use a desktop browser to view this page",
              }),
            ],
          }),
          (0, t.jsx)("div", { className: "hidden h-full sm:block", children: e }),
        ],
      });
    e.s(
      [
        "Calendar",
        0,
        function (e) {
          let l = (0, r.useRef)(null);
          return (
            l.current ||
              ((l.current = (0, a.createStore)((e) => ({
                ...m,
                ...void 0,
                setView: (t) => e({ view: t }),
                setStartDate: (t) => e({ startDate: t }),
                setEndDate: (t) => e({ endDate: t }),
                setEvents: (t) => e({ events: t }),
                initState: (t) => {
                  let r = t.events;
                  t.sortEvents &&
                    (r = [...t.events].sort(
                      (e, t) =>
                        (0, n.default)(e.start).valueOf() - (0, n.default)(t.start).valueOf()
                    ));
                  let l = f(t.blockingDates || []);
                  e({
                    ...t,
                    blockingDates: l,
                    events: r,
                    selectedBookingUid: t.selectedBookingUid,
                  });
                },
                setSelectedEvent: (t) => e({ selectedEvent: t }),
                handleDateChange: (t) =>
                  e((e) => {
                    let { startDate: r, endDate: l } = e;
                    if ("INCREMENT" === t) {
                      let t = (0, n.default)(r)
                          .tz(e.timezone)
                          .add(1, e.view)
                          .tz(e.timezone, !0)
                          .toDate(),
                        a = (0, n.default)(l)
                          .tz(e.timezone)
                          .add(1, e.view)
                          .tz(e.timezone, !0)
                          .toDate();
                      return (e.minDate && t < e.minDate) || (e.maxDate && a > e.maxDate)
                        ? { startDate: r, endDate: l }
                        : (e.onDateChange?.(t, a), { startDate: t, endDate: a });
                    }
                    let a = (0, n.default)(r)
                        .tz(e.timezone)
                        .subtract(1, e.view)
                        .tz(e.timezone, !0)
                        .toDate(),
                      s = (0, n.default)(l)
                        .tz(e.timezone)
                        .subtract(1, e.view)
                        .tz(e.timezone, !0)
                        .toDate();
                    return (e.onDateChange?.(a, s), { startDate: a, endDate: s });
                  }),
              }))),
              l.current.getState().initState(e)),
            (0, r.useEffect)(() => {
              l.current && l.current.getState().initState(e);
            }, [e]),
            (0, t.jsx)(x.Provider, { value: l.current, children: (0, t.jsx)(q, { ...e }) })
          );
        },
      ],
      666995
    );
  },
]);
