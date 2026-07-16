(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  790405,
  (e) => {
    "use strict";
    let t, a;
    var r,
      l = e.i(207597);
    let o = "timeOption.is24hClock";
    var n = (((r = {}).TWELVE_HOUR = "h:mma"), (r.TWENTY_FOUR_HOUR = "HH:mm"), r);
    let i = (e) => l.localStorage.setItem(o, e.toString()),
      s =
        !0 !== (a = null === (t = l.localStorage.getItem(o)) ? null : "true" === t) &&
        (!1 === a ||
          (new Intl.DateTimeFormat(void 0, { hour: "numeric" }).format(0).match(/M/i)
            ? (i(!1), 1)
            : (i(!0), 0)))
          ? "h:mma"
          : "HH:mm";
    e.s([
      "TimeFormat",
      () => n,
      "detectBrowserTimeFormat",
      0,
      s,
      "setIs24hClockInLocalStorage",
      0,
      i,
    ]);
  },
  788369,
  (e) => {
    "use strict";
    var t = e.i(577192);
    t.default.tz.guess()?.indexOf("Europe");
    let a = "Etc/Unknown" !== t.default.tz.guess() ? t.default.tz.guess() : "Europe/London";
    e.s(["CURRENT_TIMEZONE", 0, a]);
  },
  808342,
  (e) => {
    "use strict";
    var t = e.i(806344),
      a = e.i(790405),
      r = e.i(788369),
      l = e.i(207597);
    let o = "timeOption.preferredTimeZone",
      n = (0, t.create)((e) => ({
        timeFormat: a.detectBrowserTimeFormat,
        setTimeFormat: (t) => {
          ((0, a.setIs24hClockInLocalStorage)(t === a.TimeFormat.TWENTY_FOUR_HOUR),
            e({ timeFormat: t }));
        },
        timezone: l.localStorage.getItem(o) || r.CURRENT_TIMEZONE,
        setTimezone: (t) => {
          (l.localStorage.setItem(o, t), e({ timezone: t }));
        },
      }));
    e.s(["timePreferencesStore", 0, n, "useTimePreferences", 0, n]);
  },
  165704,
  663110,
  (e) => {
    "use strict";
    let t =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
    e.s(
      [
        "default",
        0,
        function (e) {
          return "string" == typeof e && t.test(e);
        },
      ],
      663110
    );
    let a = [];
    for (let e = 0; e < 256; ++e) a.push((e + 256).toString(16).slice(1));
    e.s(
      [
        "unsafeStringify",
        0,
        function (e, t = 0) {
          return (
            a[e[t + 0]] +
            a[e[t + 1]] +
            a[e[t + 2]] +
            a[e[t + 3]] +
            "-" +
            a[e[t + 4]] +
            a[e[t + 5]] +
            "-" +
            a[e[t + 6]] +
            a[e[t + 7]] +
            "-" +
            a[e[t + 8]] +
            a[e[t + 9]] +
            "-" +
            a[e[t + 10]] +
            a[e[t + 11]] +
            a[e[t + 12]] +
            a[e[t + 13]] +
            a[e[t + 14]] +
            a[e[t + 15]]
          ).toLowerCase();
        },
      ],
      165704
    );
  },
  422233,
  (e) => {
    "use strict";
    let t,
      a = "u" > typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto),
      r = new Uint8Array(16);
    var l = e.i(165704);
    e.s(
      [
        "v4",
        0,
        function (e, o, n) {
          if (a && !o && !e) return a();
          let i =
            (e = e || {}).random ??
            e.rng?.() ??
            (function () {
              if (!t) {
                if ("u" < typeof crypto || !crypto.getRandomValues)
                  throw Error(
                    "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                  );
                t = crypto.getRandomValues.bind(crypto);
              }
              return t(r);
            })();
          if (i.length < 16) throw Error("Random bytes length must be >= 16");
          if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), o)) {
            if ((n = n || 0) < 0 || n + 16 > o.length)
              throw RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
            for (let e = 0; e < 16; ++e) o[n + e] = i[e];
            return o;
          }
          return (0, l.unsafeStringify)(i);
        },
      ],
      422233
    );
  },
  885283,
  (e) => {
    "use strict";
    var t = e.i(247167);
    function a(e) {
      return e ? (e.startsWith("http://") || e.startsWith("https://") ? e : `https://${e}`) : "";
    }
    let r = a("https://app.cal.com") || "https://cal-h65pui31b-cal.vercel.app",
      l = a("https://cal.com") || "https://cal.com",
      o = new URL(r).hostname.endsWith(".vercel.app") ? r : a("https://cal.com") || r,
      n = parseInt(t.default.env.NEXT_PUBLIC_BOOKER_NUMBER_OF_DAYS_TO_LOAD ?? "0", 10),
      i = `${l}/terms`,
      s = `${l}/privacy`;
    (t.default.env.NEXT_PUBLIC_CLOUDFLARE_SITE_ID,
      e.s([
        "APP_NAME",
        0,
        "Cal.com",
        "AVATAR_FALLBACK",
        0,
        "/avatar.svg",
        "BOOKER_NUMBER_OF_DAYS_TO_LOAD",
        0,
        n,
        "CAL_URL",
        0,
        o,
        "DEFAULT_GROUP_ID",
        0,
        "default_group_id",
        "WEBAPP_URL",
        0,
        r,
        "WEBSITE_PRIVACY_POLICY_URL",
        0,
        s,
        "WEBSITE_TERMS_URL",
        0,
        i,
        "WEBSITE_URL",
        0,
        l,
      ]));
  },
  196268,
  (e) => {
    "use strict";
    let t = (e, t = !0) => {
      let a = new URL(window.location.href);
      a.searchParams.get(e) &&
        (a.searchParams.delete(e),
        t
          ? window.history.replaceState({ ...window.history.state, as: a.href }, "", a.href)
          : window.history.pushState({ ...window.history.state, as: a.href }, "", a.href));
    };
    e.s([
      "getQueryParam",
      0,
      (e) => new URLSearchParams(window.location.search).get(e),
      "removeQueryParam",
      0,
      t,
      "updateQueryParam",
      0,
      (e, a, r = !0) => {
        let l = new URL(window.location.href);
        if (l.searchParams.get(e) !== a) {
          if ("" === a || "null" === a) return void t(e, r);
          (l.searchParams.set(e, `${a}`),
            r
              ? window.history.replaceState({ ...window.history.state, as: l.href }, "", l.href)
              : window.history.pushState({ ...window.history.state, as: l.href }, "", l.href));
        }
      },
    ]);
  },
  166748,
  (e) => {
    "use strict";
    var t = e.i(271645),
      a = e.i(179849),
      r = e.i(408155);
    let { useDebugValue: l } = t.default,
      { useSyncExternalStoreWithSelector: o } = a.default,
      n = (e, t) => {
        let a = (0, r.createStore)(e),
          n = (e, r = t) =>
            (function (e, t = (e) => e, a) {
              let r = o(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, a);
              return (l(r), r);
            })(a, e, r);
        return (Object.assign(n, a), n);
      };
    e.s(["createWithEqualityFn", 0, (e, t) => (e ? n(e, t) : n)]);
  },
  993012,
  (e) => {
    "use strict";
    var t,
      a,
      r =
        (((t = {}).MONTH_VIEW = "month_view"),
        (t.WEEK_VIEW = "week_view"),
        (t.COLUMN_VIEW = "column_view"),
        t);
    let l = ["month_view", "week_view", "column_view"];
    var o =
      (((a = {}).HOST_AND_ATTENDEE = "HOST_AND_ATTENDEE"), (a.ATTENDEE_ONLY = "ATTENDEE_ONLY"), a);
    e.s([
      "BookerLayouts",
      () => r,
      "DisableCancelRescheduleScope",
      () => o,
      "bookerLayoutOptions",
      0,
      l,
      "defaultBookerLayoutSettings",
      0,
      { defaultLayout: "month_view", enabledLayouts: l },
    ]);
  },
  870934,
  742083,
  902782,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(271645),
      r = e.i(806344),
      l = e.i(422233),
      o = e.i(166748),
      n = e.i(885283),
      i = e.i(993012),
      s = e.i(577192),
      u = e.i(196268),
      d = e.i(808342);
    let m = ({ storeTimezone: e, bookerUserPreferredTimezone: t }) => e ?? t;
    function c(e) {
      return m({
        storeTimezone: e,
        bookerUserPreferredTimezone: d.timePreferencesStore.getState().timezone,
      });
    }
    function f(e) {
      return (0, s.default)().tz(c(e));
    }
    e.s(["getBookerTimezone", 0, m], 742083);
    let h = () =>
        (0, o.createWithEqualityFn)((e, t) => ({
          state: "loading",
          setState: (t) => e({ state: t }),
          layout: i.BookerLayouts.MONTH_VIEW,
          setLayout: (a) => (
            ["week_view", "column_view"].includes(a) &&
              !t().selectedDate &&
              e({ selectedDate: f(t().timezone).format("YYYY-MM-DD") }),
            (!t().isPlatform || t().allowUpdatingUrlParams) && (0, u.updateQueryParam)("layout", a),
            e({ layout: a })
          ),
          selectedDate: (0, u.getQueryParam)("date") || null,
          setSelectedDate: ({
            date: a,
            omitUpdatingParams: r = !1,
            preventMonthSwitching: l = !1,
          }) => {
            if (!a) return void (0, u.removeQueryParam)("date");
            let o = (0, s.default)(t().selectedDate),
              n = (0, s.default)(a);
            (e({ selectedDate: a }),
              r ||
                (t().isPlatform && !t().allowUpdatingUrlParams) ||
                (0, u.updateQueryParam)("date", a ?? ""),
              !l &&
                n.month() !== o.month() &&
                (e({ month: n.format("YYYY-MM") }),
                r ||
                  (t().isPlatform && !t().allowUpdatingUrlParams) ||
                  (0, u.updateQueryParam)("month", n.format("YYYY-MM"))));
          },
          selectedDatesAndTimes: null,
          setSelectedDatesAndTimes: (t) => {
            e({ selectedDatesAndTimes: t });
          },
          addToSelectedDate: (a) => {
            let r = (0, s.default)(t().selectedDate),
              l = r.add(a, "day"),
              o = f(t().timezone).format("YYYY-MM-DD"),
              n = l.format("YYYY-MM-DD") < o ? (0, s.default)(o) : l,
              i = n.format("YYYY-MM-DD");
            (n.month() !== r.month() &&
              (e({ month: n.format("YYYY-MM") }),
              (!t().isPlatform || t().allowUpdatingUrlParams) &&
                (0, u.updateQueryParam)("month", n.format("YYYY-MM"))),
              e({ selectedDate: i }),
              (!t().isPlatform || t().allowUpdatingUrlParams) &&
                (0, u.updateQueryParam)("date", i));
          },
          username: null,
          eventSlug: null,
          eventId: null,
          rescheduledBy: null,
          verifiedEmail: null,
          setVerifiedEmail: (t) => {
            e({ verifiedEmail: t });
          },
          verificationCode: null,
          setVerificationCode: (t) => {
            e({ verificationCode: t });
          },
          month:
            (0, u.getQueryParam)("month") ||
            ((0, u.getQueryParam)("date") && (0, s.default)((0, u.getQueryParam)("date")).isValid()
              ? (0, s.default)((0, u.getQueryParam)("date")).format("YYYY-MM")
              : null) ||
            (0, s.default)()
              .tz(c((0, u.getQueryParam)("cal.tz") ?? null))
              .format("YYYY-MM"),
          setMonth: (a) => {
            a
              ? (e({ month: a, selectedTimeslot: null }),
                (!t().isPlatform || t().allowUpdatingUrlParams) &&
                  (0, u.updateQueryParam)("month", a ?? ""),
                t().setSelectedDate({ date: null }))
              : (0, u.removeQueryParam)("month");
          },
          dayCount: n.BOOKER_NUMBER_OF_DAYS_TO_LOAD > 0 ? n.BOOKER_NUMBER_OF_DAYS_TO_LOAD : null,
          setDayCount: (t) => {
            e({ dayCount: t });
          },
          isTeamEvent: !1,
          seatedEventData: {
            seatsPerTimeSlot: void 0,
            attendees: void 0,
            bookingUid: void 0,
            showAvailableSeatsCount: !0,
          },
          setSeatedEventData: (a) => {
            (e({ seatedEventData: a }),
              (!t().isPlatform || t().allowUpdatingUrlParams) &&
                (0, u.updateQueryParam)("bookingUid", a.bookingUid ?? "null"));
          },
          timezone: (0, u.getQueryParam)("cal.tz") ?? null,
          setTimezone: (t) => {
            e({ timezone: t });
          },
          initialize: ({
            username: a,
            eventSlug: r,
            month: l,
            eventId: o,
            rescheduleUid: n = null,
            rescheduledBy: s = null,
            bookingUid: d = null,
            bookingData: m = null,
            layout: c,
            isTeamEvent: h,
            durationConfig: p,
            org: g,
            isInstantMeeting: y,
            timezone: v = null,
            teamMemberEmail: S,
            crmOwnerRecordType: b,
            crmAppSlug: E,
            crmRecordId: w,
            showCrmOwnerBanner: T,
            pendingCrmTraceId: I,
            isPlatform: O = !1,
            isSettingsPreview: k = !1,
            allowUpdatingUrlParams: R = !0,
            defaultPhoneCountry: P,
          }) => {
            let _ = t().selectedDate;
            if (
              t().username === a &&
              t().eventSlug === r &&
              t().month === l &&
              t().eventId === o &&
              t().rescheduleUid === n &&
              t().bookingUid === d &&
              t().bookingData?.responses.email === m?.responses.email &&
              t().layout === c &&
              t().timezone === v &&
              t().rescheduledBy === s &&
              t().teamMemberEmail === S &&
              t().crmOwnerRecordType === b &&
              t().crmAppSlug === E &&
              t().crmRecordId === w &&
              t().showCrmOwnerBanner === T &&
              t().pendingCrmTraceId === I
            )
              return;
            let U = t().selectedDuration;
            if (p?.includes(Number((0, u.getQueryParam)("duration"))))
              U = Number((0, u.getQueryParam)("duration"));
            else if (n && m && p) {
              var D, C;
              let e, t;
              ((D = m.startTime),
                (C = m.endTime),
                (e = new Date(D)),
                (t = Math.round((new Date(C).getTime() - e.getTime()) / 6e4)),
                (U = p.includes(t) ? t : null) || !(p.length > 0) || (U = p[0]));
            } else (0, u.removeQueryParam)("duration");
            if (
              (e({
                username: a,
                eventSlug: r,
                eventId: o,
                org: g,
                rescheduleUid: n,
                rescheduledBy: s,
                bookingUid: d,
                bookingData: m,
                layout: c || i.BookerLayouts.MONTH_VIEW,
                isTeamEvent: h || !1,
                durationConfig: p,
                selectedDuration: U,
                timezone: v,
                selectedDate:
                  _ ||
                  (["week_view", "column_view"].includes(c) ? f(v).format("YYYY-MM-DD") : null),
                teamMemberEmail: S,
                crmOwnerRecordType: b,
                crmAppSlug: E,
                crmRecordId: w,
                showCrmOwnerBanner: T,
                pendingCrmTraceId: I,
                isPlatform: O,
                isSettingsPreview: k,
                allowUpdatingUrlParams: R,
                defaultPhoneCountry: P,
                bypassHostAvailability: !1,
              }),
              n && m && e({ selectedTimeslot: null }),
              l && e({ month: l }),
              y)
            ) {
              let t = f(v),
                a = t.format("YYYY-MM"),
                r = t.format("YYYY-MM-DD"),
                l = new Date().toISOString();
              (e({ month: a, selectedDate: r, selectedTimeslot: l, isInstantMeeting: y }),
                (!O || R) &&
                  ((0, u.updateQueryParam)("month", a),
                  (0, u.updateQueryParam)("date", r ?? ""),
                  (0, u.updateQueryParam)("slot", l ?? "", !1)));
            }
          },
          durationConfig: null,
          selectedDuration: null,
          setSelectedDuration: (a, r) => {
            (e({ selectedDuration: a }),
              (r?.shouldUpdateUrl ?? !0) &&
                (!t().isPlatform || t().allowUpdatingUrlParams) &&
                (0, u.updateQueryParam)("duration", a ?? ""));
          },
          setBookingData: (t) => {
            e({ bookingData: t ?? null });
          },
          setRescheduleUid: (t) => {
            e({ rescheduleUid: t });
          },
          bypassHostAvailability: !1,
          setBypassHostAvailability: (t) => {
            e({ bypassHostAvailability: t });
          },
          recurringEventCount: null,
          setRecurringEventCount: (t) => e({ recurringEventCount: t }),
          recurringEventCountQueryParam:
            Number((0, u.getQueryParam)("recurringEventCount")) || null,
          setRecurringEventCountQueryParam: (a) => {
            null === a ||
              isNaN(a) ||
              (e({ recurringEventCountQueryParam: a }),
              (!t().isPlatform || t().allowUpdatingUrlParams) &&
                (0, u.updateQueryParam)("recurringEventCount", a));
          },
          rescheduleUid: null,
          bookingData: null,
          bookingUid: null,
          selectedTimeslot: (0, u.getQueryParam)("slot") || null,
          tentativeSelectedTimeslots: [],
          setTentativeSelectedTimeslots: (t) => {
            e({ tentativeSelectedTimeslots: t });
          },
          setSelectedTimeslot: (a) => {
            (e({ selectedTimeslot: a }),
              (!t().isPlatform || t().allowUpdatingUrlParams) &&
                (0, u.updateQueryParam)("slot", a ?? "", !1));
          },
          formValues: {},
          setFormValues: (t) => {
            e({ formValues: t });
          },
          org: null,
          setOrg: (t) => {
            e({ org: t });
          },
          crmOwnerRRFallbackActive: void 0,
          setCrmOwnerRRFallbackActive: (a) => {
            t().crmOwnerRRFallbackActive !== a && e({ crmOwnerRRFallbackActive: a });
          },
          isPlatform: !1,
          isSettingsPreview: !1,
          allowUpdatingUrlParams: !0,
          defaultPhoneCountry: null,
          bookerCorrelationId: (0, l.v4)(),
          isSlotSelectionModalVisible: !1,
          setIsSlotSelectionModalVisible: (t) => {
            e({ isSlotSelectionModalVisible: t });
          },
        })),
      p = h();
    e.s(
      [
        "createBookerStore",
        0,
        h,
        "useBookerStore",
        0,
        p,
        "useInitializeBookerStore",
        0,
        ({
          username: e,
          eventSlug: t,
          month: r,
          eventId: l,
          rescheduleUid: o = null,
          rescheduledBy: n = null,
          bookingData: i = null,
          verifiedEmail: s = null,
          layout: u,
          isTeamEvent: d,
          durationConfig: m,
          org: c,
          isInstantMeeting: f,
          timezone: h = null,
          teamMemberEmail: g,
          crmOwnerRecordType: y,
          crmAppSlug: v,
          crmRecordId: S,
          showCrmOwnerBanner: b,
          pendingCrmTraceId: E,
          isPlatform: w = !1,
          isSettingsPreview: T = !1,
          allowUpdatingUrlParams: I = !0,
          defaultPhoneCountry: O,
        }) => {
          let k = p((e) => e.initialize);
          (0, a.useEffect)(() => {
            k({
              username: e,
              eventSlug: t,
              month: r,
              eventId: l,
              rescheduleUid: o,
              rescheduledBy: n,
              bookingData: i,
              layout: u,
              isTeamEvent: d,
              org: c,
              verifiedEmail: s,
              durationConfig: m,
              isInstantMeeting: f,
              timezone: h,
              teamMemberEmail: g,
              crmOwnerRecordType: y,
              crmAppSlug: v,
              crmRecordId: S,
              showCrmOwnerBanner: b,
              pendingCrmTraceId: E,
              isPlatform: w,
              isSettingsPreview: T,
              allowUpdatingUrlParams: I,
              defaultPhoneCountry: O,
            });
          }, [k, c, e, t, r, l, o, n, i, u, d, s, m, f, h, g, y, v, S, b, E, w, T, I, O]);
        },
      ],
      902782
    );
    let g = (0, a.createContext)(null);
    e.s(
      [
        "BookerStoreContext",
        0,
        g,
        "BookerStoreProvider",
        0,
        ({ children: e }) => {
          let r = (0, a.useRef)(null);
          return (
            r.current || (r.current = h()),
            (0, t.jsx)(g.Provider, { value: r.current, children: e })
          );
        },
        "useBookerStoreContext",
        0,
        (e, t) => {
          let l = (0, a.useContext)(g);
          if (!l) throw Error("useBookerStoreContext must be used within BookerStoreProvider");
          return (0, r.useStore)(l, e, t);
        },
        "useInitializeBookerStoreContext",
        0,
        ({
          username: e,
          eventSlug: t,
          month: l,
          eventId: o,
          rescheduleUid: n = null,
          rescheduledBy: i = null,
          bookingData: s = null,
          verifiedEmail: u = null,
          layout: d,
          isTeamEvent: m,
          durationConfig: c,
          org: f,
          isInstantMeeting: h,
          timezone: p = null,
          teamMemberEmail: y,
          crmOwnerRecordType: v,
          crmAppSlug: S,
          crmRecordId: b,
          showCrmOwnerBanner: E,
          pendingCrmTraceId: w,
          isPlatform: T = !1,
          isSettingsPreview: I = !1,
          allowUpdatingUrlParams: O = !0,
        }) => {
          let k = (0, a.useContext)(g);
          if (!k)
            throw Error("useInitializeBookerStoreContext must be used within BookerStoreProvider");
          let R = (0, r.useStore)(k, (e) => e.initialize);
          (0, a.useEffect)(() => {
            R({
              username: e,
              eventSlug: t,
              month: l,
              eventId: o,
              rescheduleUid: n,
              rescheduledBy: i,
              bookingData: s,
              layout: d,
              isTeamEvent: m,
              org: f,
              verifiedEmail: u,
              durationConfig: c,
              isInstantMeeting: h,
              timezone: p,
              teamMemberEmail: y,
              crmOwnerRecordType: v,
              crmAppSlug: S,
              crmRecordId: b,
              showCrmOwnerBanner: E,
              pendingCrmTraceId: w,
              isPlatform: T,
              isSettingsPreview: I,
              allowUpdatingUrlParams: O,
            });
          }, [R, f, e, t, l, o, n, i, s, d, m, u, c, h, p, y, v, S, b, E, w, T, I, O]);
        },
      ],
      870934
    );
  },
  423105,
  926975,
  (e) => {
    "use strict";
    var t = e.i(436864),
      a = e.i(111914),
      r = e.i(870934),
      l = e.i(902782);
    let o = (e) => "true" === e.get("cal.isBookingDryRun");
    e.s(["isBookingDryRun", 0, o], 926975);
    var n = e.i(852060),
      i = e.i(208893),
      s = e.i(850304),
      u = e.i(331597),
      d = e.i(713811);
    ({
      ...{
        isDynamic: !0,
        isInstantEvent: !1,
        periodCountCalendarDays: !0,
        periodStartDate: null,
        periodEndDate: null,
        beforeEventBuffer: 0,
        afterEventBuffer: 0,
        periodType: u.PeriodType.UNLIMITED,
        periodDays: null,
        slotInterval: null,
        offsetStart: 0,
        locations: [{ type: n.DailyLocationType }],
        customInputs: [],
        disableGuests: !0,
        minimumBookingNotice: 120,
        schedule: null,
        timeZone: null,
        successRedirectUrl: "",
        successRedirectUrlUpdatedAt: null,
        forwardParamsSuccessRedirect: !0,
        teamId: null,
        scheduleId: null,
        availability: [],
        price: 0,
        currency: "usd",
        schedulingType: u.SchedulingType.COLLECTIVE,
        seatsPerTimeSlot: null,
        seatsShowAttendees: null,
        seatsShowAvailabilityCount: null,
        disableCancelling: !1,
        disableCancellingScope: null,
        disableRescheduling: !1,
        disableReschedulingScope: null,
        disableReassignment: !1,
        hideOrganizerInfoOnReassignment: !1,
        requiresCancellationReason: null,
        minimumRescheduleNotice: null,
        onlyShowFirstAvailableSlot: !1,
        useIsolatedAvailability: !1,
        allowReschedulingPastBookings: !1,
        allowReschedulingCancelledBookings: !1,
        hideOrganizerEmail: !1,
        showOptimizedSlots: !1,
        id: 0,
        hideCalendarNotes: !1,
        hideCalendarEventDetails: !1,
        privateNoteEnabled: !1,
        privateNoteMode: null,
        privateNoteTemplate: null,
        recurringEvent: null,
        destinationCalendar: null,
        team: null,
        lockTimeZoneToggleOnBookingPage: !1,
        lockedTimeZone: null,
        requiresConfirmation: !1,
        requiresConfirmationForFreeEmail: !1,
        requiresBookerEmailVerification: !1,
        bookingLimits: null,
        maxActiveBookingsPerBooker: null,
        maxActiveBookingPerBookerOfferReschedule: !1,
        durationLimits: null,
        hidden: !1,
        userId: 0,
        parentId: null,
        parent: null,
        owner: null,
        workflows: [],
        users: [
          {
            metadata: null,
            theme: null,
            credentials: [],
            username: "john.doe",
            timeZone: "",
            bufferTime: 0,
            availability: [],
            id: 0,
            uuid: "00000000-0000-0000-0000-000000000000",
            allSelectedCalendars: [],
            userLevelSelectedCalendars: [],
            schedules: [],
            defaultScheduleId: null,
            locale: "en",
            email: "john.doe@example.com",
            name: "John doe",
            destinationCalendar: null,
            hideBranding: !0,
            brandColor: "#797979",
            darkBrandColor: "#efefef",
            allowDynamicBooking: !0,
            timeFormat: 12,
            travelSchedules: [],
            locked: !1,
            isPlatformManaged: !1,
            bookingLimits: null,
          },
        ],
        hosts: [],
        subsetOfHosts: [],
        metadata: d.EventTypeMetaDataSchema.parse({}),
        bookingFields: [],
        assignAllTeamMembers: !1,
        assignRRMembersUsingSegment: !1,
        rrSegmentQueryValue: null,
        isRRWeightsEnabled: !1,
        rescheduleWithSameRoundRobinHost: !1,
        useEventTypeDestinationCalendarEmail: !1,
        secondaryEmailId: null,
        secondaryEmail: null,
        autoTranslateDescriptionEnabled: !1,
        fieldTranslations: [],
        maxLeadThreshold: null,
        crmRecordOwnerFallbackWindowHours: null,
        crmRecordOwnerFallbackWindowSkipWeekends: !1,
        includeNoShowInRRCalculation: !1,
        useEventLevelSelectedCalendars: !1,
        rrResetInterval: null,
        rrTimestampBasis: null,
        interfaceLanguage: null,
        customReplyToEmail: null,
        restrictionScheduleId: null,
        useBookerTimezone: !1,
        profileId: null,
        profile: null,
        requiresConfirmationWillBlockSlot: !1,
        canSendCalVideoTranscriptionEmails: !1,
        instantMeetingExpiryTimeOffsetInSeconds: 0,
        autoTranslateInstantMeetingTitleEnabled: !0,
        instantMeetingScheduleId: null,
        instantMeetingParameters: [],
        eventTypeColor: null,
        hostGroups: [],
        bookingRequiresAuthentication: !1,
        createdAt: null,
        updatedAt: null,
        rrHostSubsetEnabled: !1,
        enablePerHostLocations: !1,
        shouldMergePhoneSystemFields: !0,
        redirectUrlOnNoRoutingFormResponse: null,
        isSuccessRedirectUrlApproved: !0,
      },
      metadata: i.eventTypeMetaDataSchemaWithTypedApps.parse({
        multipleDuration: [15, 30, 45, 60, 90],
      }),
    });
    var m = e.i(450608),
      c = e.i(623101),
      f = e.i(993012);
    let h = (e, t) => !(isNaN(e) || isNaN(t)) && e !== t;
    var p = e.i(577192);
    let g = (e, t) => {
      let a = e.get(t);
      return "string" == typeof a
        ? a
            .split(",")
            .filter(Boolean)
            .map((e) => parseInt(e, 10))
        : null;
    };
    var y = e.i(821410),
      v = e.i(684219),
      S = e.i(273446),
      b = e.i(662537),
      E = e.i(618566),
      w = e.i(271645),
      T = e.i(266027),
      I = e.i(581949);
    let O = ({ eventId: e, eventSlug: t }) => ({ eventId: e, eventSlug: t });
    e.s(
      [
        "useSchedule",
        0,
        ({
          month: e,
          timezone: n,
          username: i,
          eventSlug: u,
          eventId: d,
          selectedDate: k,
          duration: R,
          dayCount: P,
          rescheduleUid: _,
          isTeamEvent: U,
          orgSlug: D,
          teamMemberEmail: C,
          useApiV2: M = !1,
          enabled: B = !0,
          bookerLayout: A,
          _calendarFetchMode: Y,
          _isSettingsPreview: L,
          _previewOverrides: N,
          _previewSchedule: x,
        }) => {
          let F,
            Q,
            W = (0, l.useBookerStore)((e) => e.state),
            V = (0, r.useBookerStoreContext)((e) => e.bookerCorrelationId),
            j = (0, r.useBookerStoreContext)((e) => e.bypassHostAvailability),
            z = (0, w.useRef)(null),
            [H, $] = (({ month: e, selectedDate: t, dayCount: a, bookerLayout: l }) => {
              let o,
                n,
                [i, s] = (0, r.useBookerStoreContext)((e) => [e.month, e.state], m.shallow),
                u = i ?? e ?? null,
                d = (({ date: e, month: t, bookerLayout: a, bookerState: r }) => {
                  if (!a) return null;
                  let l = (0, c.default)(e).month(),
                    o = (0, c.default)(e).add(1, "month").month(),
                    n = (0, c.default)(e).add(a.extraDays, "day").month(),
                    i = (0, c.default)(e).add(a.columnViewExtraDays.current, "day").month(),
                    s = ((e, t, a, r, l, o, n) => {
                      if (e === f.BookerLayouts.WEEK_VIEW) return !!n && h(a, r);
                      if (e === f.BookerLayouts.COLUMN_VIEW) return h(a, l);
                      if (e === f.BookerLayouts.MONTH_VIEW || "mobile" === e) {
                        let e, a, r, l, n;
                        return (
                          (e = (0, p.default)()),
                          (a = (0, p.default)(t).isValid()),
                          (r = (0, p.default)(o)),
                          (l = e.year() === r.year() && e.month() === r.month()),
                          (n = r.startOf("month").add(2, "week").format("YYYY-MM-DD")),
                          !!(e.format("YYYY-MM-DD") > n) && (!a || !!l)
                        );
                      }
                      return !1;
                    })(a.layout, e, l, n, i, t, a.extraDays);
                  return s
                    ? {
                        monthsToPrefetch:
                          ((e, t, a, r, l) => {
                            let o = !!Number.isFinite(a) && !!Number.isFinite(r) && a !== r,
                              n = e === f.BookerLayouts.WEEK_VIEW,
                              i = e === f.BookerLayouts.COLUMN_VIEW;
                            if (o && (i || (!n && "selecting_time" === t && !l))) return 2;
                          })(a.layout, r, o, i, s) ?? 1,
                      }
                    : null;
                })({
                  date: (0, c.default)(t).format("YYYY-MM-DD"),
                  month: u,
                  bookerLayout: l,
                  bookerState: s,
                }),
                g = (0, c.default)(),
                y = u ? (0, c.default)(u) : g;
              if (a && a > 0)
                t
                  ? ((o = (0, c.default)(t).toISOString()),
                    (n = (0, c.default)(t).add(a, "day").toISOString()))
                  : y.month() === g.month()
                    ? ((o = g.startOf("day").toISOString()),
                      (n = g.startOf("day").add(a, "day").toISOString()))
                    : ((o = y.startOf("month").toISOString()),
                      (n = y.startOf("month").add(a, "day").toISOString()));
              else {
                let e = d?.monthsToPrefetch,
                  t = e ? y.add(e, "month") : null;
                ((o = y.startOf("month").toISOString()),
                  (n = (t || y).endOf("month").toISOString()));
              }
              return [o, n];
            })({ month: e, dayCount: P, selectedDate: k, bookerLayout: A }),
            q = (0, E.useSearchParams)(),
            K = q ? g(new URLSearchParams(q.toString()), "cal.routedTeamMemberIds") : null,
            Z = q
              ? g(new URLSearchParams(q.toString()), "cal.crmRecordOwnerFallbackTeamMemberIds")
              : null,
            G = !!q && "true" === q.get("cal.skipContactOwner"),
            X = q?.get("cal.__useBookingWindow"),
            J = "true" === X || ("false" !== X && void 0),
            ee = S.trpc.useUtils(),
            et = q?.get("cal.routingFormResponseId"),
            ea = q?.get("cal.queuedFormResponseId"),
            er = q?.get("email"),
            el = q?.get("cal.skipSlotsFetch") === "true",
            eo = et ? parseInt(et, 10) : void 0,
            en = q?.get("cal.embed.connectVersion") || "0",
            ei = {
              isTeamEvent: U,
              usernameList:
                ((Q = (Array.isArray((F = i ?? "")) ? F : F ? [F] : [])
                  .flatMap((e) => e.replace(/( |%20|%2b)/gi, "+").split("+"))
                  .filter(Boolean)),
                Array.prototype.concat(...Q.map((e) => (0, s.default)(e)))),
              ...(u ? { eventTypeSlug: u } : { eventTypeId: d ?? 0 }),
              startTime: H,
              endTime: $,
              timeZone: n ?? "PLACEHOLDER_TIMEZONE",
              duration: R ? `${R}` : void 0,
              rescheduleUid: _,
              orgSlug: D,
              teamMemberEmail: C,
              routedTeamMemberIds: K,
              crmRecordOwnerFallbackTeamMemberIds: Z,
              skipContactOwner: G,
              ...(ea ? { queuedFormResponseId: ea } : { routingFormResponseId: eo }),
              email: er,
              ...{ embedConnectVersion: en },
              _isDryRun: !!q && o(q),
              ...(Y ? { _calendarFetchMode: Y } : {}),
              ...(void 0 !== J ? { _useBookingWindow: J } : {}),
              _bookerCorrelationId: V,
              ...(L ? { _isSettingsPreview: !0 } : {}),
            },
            es = {
              ...ei,
              ...(j ? { bypassHostAvailability: !0 } : {}),
              ...(L && N ? { _previewOverrides: N } : {}),
              ...(x ? { _previewSchedule: x } : {}),
            },
            eu = {
              trpc: { context: { skipBatch: !0 } },
              refetchOnWindowFocus: !0,
              refetchInterval: 1e3 * y.PUBLIC_QUERY_AVAILABLE_SLOTS_INTERVAL_SECONDS,
              enabled: !el && !!i && !!e && !!n && (!!u || !!d || 0 === d) && B,
            },
            ed = !!(j || L),
            em = M && !!U && eu.enabled && !ed,
            ec = (({ enabled: e, ...t }) =>
              (0, T.useQuery)({
                queryKey: [
                  "get-available-slots",
                  t.startTime,
                  t.endTime,
                  t.eventTypeId,
                  t.eventTypeSlug,
                  t.isTeamEvent ?? !1,
                  t.teamId ?? !1,
                  t.usernameList,
                  t.routedTeamMemberIds,
                  t.crmRecordOwnerFallbackTeamMemberIds,
                  t.skipContactOwner,
                  t.teamMemberEmail,
                  t.embedConnectVersion ?? !1,
                  t.routingFormResponseId,
                  t.queuedFormResponseId,
                  t._isDryRun ?? !1,
                ],
                queryFn: () =>
                  I.default.get("/api/v2/slots/available", { params: t }).then((e) => {
                    if ("success" === e.data.status) return e.data.data;
                    throw Error(e.data.error.message);
                  }),
                enabled: e,
              }))({
              ...ei,
              enabled: em,
              duration: ei.duration ? Number(ei.duration) : void 0,
              routedTeamMemberIds: ei.routedTeamMemberIds ?? void 0,
              crmRecordOwnerFallbackTeamMemberIds: ei.crmRecordOwnerFallbackTeamMemberIds ?? void 0,
              teamMemberEmail: ei.teamMemberEmail ?? void 0,
              eventTypeId: d ?? void 0,
            }),
            ef = S.trpc.viewer.slots.getScheduleWithOverrides.useQuery(es, {
              ...eu,
              enabled: ed && eu.enabled,
            }),
            eh = S.trpc.viewer.slots.getSchedule.useQuery(ei, {
              ...eu,
              enabled: eu.enabled && !em && !L,
            }),
            ep =
              ed && eu.enabled
                ? (function (e, t) {
                    if (!e || !t) return e;
                    let a = new Set(Object.values(t.slots).flatMap((e) => e.map((e) => e.time)));
                    return {
                      ...e,
                      slots: Object.fromEntries(
                        Object.entries(e.slots).map(([e, t]) => [
                          e,
                          t.map((e) => ({ ...e, bypassed: !a.has(e.time) })),
                        ])
                      ),
                    };
                  })(ef.data, eh.data)
                : void 0,
            {
              isSuccess: eg,
              slots: ey,
              dataUpdatedAt: ev,
            } = ed && eu.enabled
              ? { isSuccess: ef.isSuccess, slots: ep?.slots, dataUpdatedAt: ef.dataUpdatedAt }
              : em && !ec.failureReason
                ? {
                    isSuccess: ec.isSuccess,
                    slots: ec.data?.slots,
                    dataUpdatedAt: ec.dataUpdatedAt,
                  }
                : {
                    isSuccess: eh.isSuccess,
                    slots: eh.data?.slots,
                    dataUpdatedAt: eh.dataUpdatedAt,
                  };
          return ((0, w.useEffect)(() => {
            var e;
            if (a.embedWindow?.isEmbed() && eg && ((e = z.current), ey && e !== ev)) {
              if (null == d || !u) {
                (v.default.warn("slotsFetched fired without event context", {
                  hasEventId: null != d,
                  hasEventSlug: !!u,
                }),
                  (0, b.captureException)(Error("slotsFetched fired without eventId/eventSlug")));
                return;
              }
              ((z.current = ev),
                a.sdkActionManager?.fire("slotsFetched", {
                  eventId: d,
                  eventSlug: u,
                  slots: ((e) => {
                    let t = {};
                    for (let [a, r] of Object.entries(e)) t[a] = r.map((e) => ({ start: e.time }));
                    return t;
                  })(ey ?? {}),
                }));
            }
          }, [eg, ev, ey, d, u]),
          ed && eu.enabled)
            ? ((0, t.updateEmbedBookerState)({ bookerState: W, slotsQuery: ef }),
              ef.isSuccess &&
                d &&
                u &&
                a.sdkActionManager?.fire("availabilityLoaded", O({ eventId: d, eventSlug: u })),
              {
                ...ef,
                data: ep,
                invalidate: () => (
                  ee.viewer.slots.getSchedule.invalidate(ei),
                  ee.viewer.slots.getScheduleWithOverrides.invalidate(es)
                ),
              })
            : em && !ec.failureReason
              ? ((0, t.updateEmbedBookerState)({ bookerState: W, slotsQuery: ec }),
                ec.isSuccess &&
                  d &&
                  u &&
                  a.sdkActionManager?.fire("availabilityLoaded", O({ eventId: d, eventSlug: u })),
                { ...ec, invalidate: () => ec.refetch() })
              : ((0, t.updateEmbedBookerState)({ bookerState: W, slotsQuery: eh }),
                eh.isSuccess &&
                  d &&
                  u &&
                  a.sdkActionManager?.fire("availabilityLoaded", O({ eventId: d, eventSlug: u })),
                { ...eh, invalidate: () => ee.viewer.slots.getSchedule.invalidate(ei) });
        },
      ],
      423105
    );
  },
  142992,
  (e) => {
    "use strict";
    var t = e.i(843476),
      a = e.i(618566),
      r = e.i(127011),
      l = e.i(538173),
      o = e.i(261254),
      n = e.i(961555);
    e.s([
      "OutOfOfficeInSlots",
      0,
      (e) => {
        let { t: i } = (0, r.useAtomsLocale)(),
          {
            fromUser: s,
            toUser: u,
            emoji: d = "🏝️",
            reason: m,
            borderDashed: c = !0,
            date: f,
            className: h,
            notes: p,
            showNotePublicly: g,
          } = e,
          y = (0, a.useSearchParams)(),
          v = (0, a.useRouter)(),
          S = !s && m;
        return S || s
          ? (0, t.jsx)("div", {
              className: (0, o.cn)("relative h-full pb-5", h),
              children: (0, t.jsxs)("div", {
                className: (0, o.cn)(
                  "flex h-full flex-col items-center justify-start rounded-md border bg-white px-4 py-4 font-normal dark:bg-transparent",
                  c && "border-dashed"
                ),
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "bg-emphasis flex h-14 w-14 flex-col items-center justify-center rounded-full",
                    children: (0, t.jsx)("span", {
                      className: "m-auto text-center text-lg",
                      children: d,
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: "stack-y-2 max-h-[300px] w-full overflow-y-auto text-center",
                    children: S
                      ? (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)("p", { className: "mt-2 text-base font-bold", children: m }),
                            (0, t.jsx)("p", {
                              className: "text-subtle text-center text-sm",
                              children: i("holiday_no_availability"),
                            }),
                          ],
                        })
                      : (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)("p", {
                              className: "mt-2 text-base font-bold",
                              children: i("ooo_user_is_ooo", { displayName: s?.displayName }),
                            }),
                            p &&
                              g &&
                              (0, t.jsx)("p", {
                                className:
                                  "text-subtle mt-2 max-h-[120px] overflow-y-auto break-words px-2 text-center text-sm italic",
                                children: p,
                              }),
                            s?.displayName &&
                              u?.displayName &&
                              (0, t.jsx)("p", {
                                className: "text-center text-sm",
                                children: (0, t.jsx)(n.default, {
                                  t: i,
                                  i18nKey: "ooo_slots_returning",
                                  values: { displayName: u.displayName },
                                  components: [
                                    (0, t.jsx)("strong", { children: "username" }, "username"),
                                  ],
                                }),
                              }),
                          ],
                        }),
                  }),
                  !S &&
                    u?.id &&
                    (0, t.jsx)(l.Button, {
                      "data-testid": "ooo-book-with-redirect",
                      className: "mt-8 max-w-[90%]",
                      variant: "button",
                      color: "secondary",
                      onClick: () => {
                        let e = y?.get("month"),
                          t = y?.get("layout"),
                          a = y?.get("date") || f,
                          r = u.orgAwareUsername ?? u.username;
                        v.push(
                          `/${r}?${e ? `month=${e}&` : ""}date=${a}${t ? `&layout=${t}` : ""}`
                        );
                      },
                      children: (0, t.jsx)("span", {
                        className: "block overflow-hidden text-ellipsis whitespace-nowrap",
                        children: i("ooo_slots_book_with", { displayName: u.displayName }),
                      }),
                    }),
                ],
              }),
            })
          : null;
      },
    ]);
  },
]);
