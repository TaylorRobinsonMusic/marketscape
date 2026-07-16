(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  23480,
  (e) => {
    "use strict";
    var r,
      t =
        (((r = {}).Unauthorized = "unauthorized_error"),
        (r.PaymentRequired = "payment_required_error"),
        (r.Forbidden = "forbidden_error"),
        (r.NotFound = "not_found_error"),
        (r.BadRequest = "bad_request_error"),
        (r.InternalServerError = "internal_server_error"),
        (r.PaymentCreationFailure = "payment_not_created_error"),
        (r.PaymentRefundFailure = "payment_refund_failed_error"),
        (r.NoAvailableUsersFound = "no_available_users_found_error"),
        (r.ChargeCardFailure = "couldnt_charge_card_error"),
        (r.CollectCardFailure = "couldnt_collect_card_error"),
        (r.RequestBodyWithouEnd = "request_body_end_time_internal_error"),
        (r.AlreadySignedUpForBooking = "already_signed_up_for_this_booking_error"),
        (r.FixedHostsUnavailableForBooking = "fixed_hosts_unavailable_for_booking"),
        (r.RoundRobinHostsUnavailableForBooking = "round_robin_host_unavailable_for_booking"),
        (r.EventTypeNotFound = "event_type_not_found_error"),
        (r.BookingNotFound = "booking_not_found_error"),
        (r.BookingSeatsFull = "booking_seats_full_error"),
        (r.MissingPaymentCredential = "missing_payment_credential_error"),
        (r.MissingPaymentAppId = "missing_payment_app_id_error"),
        (r.NotEnoughAvailableSeats = "not_enough_available_seats_error"),
        (r.AvailabilityNotFoundInSchedule = "availability_not_found_in_schedule_error"),
        (r.CancelledBookingsCannotBeRescheduled = "cancelled_bookings_cannot_be_rescheduled"),
        (r.UnableToSubscribeToThePlatform = "unable_to_subscribe_to_the_platform"),
        (r.UpdatingOauthClientError = "updating_oauth_client_error"),
        (r.CreatingOauthClientError = "creating_oauth_client_error"),
        (r.BookingTimeOutOfBounds = "booking_time_out_of_bounds_error"),
        (r.BookingConflict = "booking_conflict_error"),
        (r.BookerLimitExceeded = "booker_limit_exceeded_error"),
        (r.BookerLimitExceededReschedule = "booker_limit_exceeded_error_reschedule"),
        (r.BookingNotAllowedByRestrictionSchedule =
          "booking_not_allowed_by_restriction_schedule_error"),
        (r.RestrictionScheduleNotFound = "restriction_schedule_not_found_error"),
        (r.EventTypeNoHosts = "event_type_no_hosts"),
        (r.RequestBodyInvalid = "request_body_invalid_error"),
        (r.PrivateLinkExpired = "private_link_expired"),
        (r.BookerEmailBlocked = "booker_email_blocked"),
        (r.BookerEmailRequiresLogin = "booker_email_requires_login"),
        (r.InvalidVerificationCode = "invalid_verification_code"),
        (r.UnableToValidateVerificationCode = "unable_to_validate_verification_code"),
        r);
    e.s(["ErrorCode", () => t]);
  },
  50929,
  (e) => {
    "use strict";
    var r = e.i(113919);
    e.s(["Tooltip", () => r.default]);
  },
  991918,
  (e) => {
    "use strict";
    var r = e.i(271645);
    function t(e, r) {
      if ("function" == typeof e) return e(r);
      null != e && (e.current = r);
    }
    var n = e.i(843476),
      o = r.forwardRef((e, t) => {
        let { children: o, ...a } = e,
          l = r.Children.toArray(o),
          u = l.find(s);
        if (u) {
          let e = u.props.children,
            o = l.map((t) =>
              t !== u
                ? t
                : r.Children.count(e) > 1
                  ? r.Children.only(null)
                  : r.isValidElement(e)
                    ? e.props.children
                    : null
            );
          return (0, n.jsx)(i, {
            ...a,
            ref: t,
            children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null,
          });
        }
        return (0, n.jsx)(i, { ...a, ref: t, children: o });
      });
    o.displayName = "Slot";
    var i = r.forwardRef((e, n) => {
      let { children: o, ...i } = e;
      if (r.isValidElement(o)) {
        var a;
        let e,
          s,
          l =
            ((a = o),
            (s =
              (e = Object.getOwnPropertyDescriptor(a.props, "ref")?.get) &&
              "isReactWarning" in e &&
              e.isReactWarning)
              ? a.ref
              : (s =
                    (e = Object.getOwnPropertyDescriptor(a, "ref")?.get) &&
                    "isReactWarning" in e &&
                    e.isReactWarning)
                ? a.props.ref
                : a.props.ref || a.ref),
          u = (function (e, r) {
            let t = { ...r };
            for (let n in r) {
              let o = e[n],
                i = r[n];
              /^on[A-Z]/.test(n)
                ? o && i
                  ? (t[n] = (...e) => {
                      (i(...e), o(...e));
                    })
                  : o && (t[n] = o)
                : "style" === n
                  ? (t[n] = { ...o, ...i })
                  : "className" === n && (t[n] = [o, i].filter(Boolean).join(" "));
            }
            return { ...e, ...t };
          })(i, o.props);
        return (
          o.type !== r.Fragment &&
            (u.ref = n
              ? (function (...e) {
                  return (r) => {
                    let n = !1,
                      o = e.map((e) => {
                        let o = t(e, r);
                        return (n || "function" != typeof o || (n = !0), o);
                      });
                    if (n)
                      return () => {
                        for (let r = 0; r < o.length; r++) {
                          let n = o[r];
                          "function" == typeof n ? n() : t(e[r], null);
                        }
                      };
                  };
                })(n, l)
              : l),
          r.cloneElement(o, u)
        );
      }
      return r.Children.count(o) > 1 ? r.Children.only(null) : null;
    });
    i.displayName = "SlotClone";
    var a = ({ children: e }) => (0, n.jsx)(n.Fragment, { children: e });
    function s(e) {
      return r.isValidElement(e) && e.type === a;
    }
    e.s(["Slot", 0, o], 991918);
  },
  769021,
  97456,
  (e) => {
    "use strict";
    var r = e.i(843476),
      t = e.i(821410),
      n = e.i(255889),
      o = e.i(271645),
      i = globalThis?.document ? o.useLayoutEffect : () => {};
    e.i(174080);
    var a = e.i(991918),
      s = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
      ].reduce((e, t) => {
        let n = o.forwardRef((e, n) => {
          let { asChild: o, ...i } = e,
            s = o ? a.Slot : t;
          return (
            "u" > typeof window && (window[Symbol.for("radix-ui")] = !0),
            (0, r.jsx)(s, { ...i, ref: n })
          );
        });
        return ((n.displayName = `Primitive.${t}`), { ...e, [t]: n });
      }, {}),
      l = "Avatar",
      [u, c] = (function (e, t = []) {
        let n = [],
          i = () => {
            let r = n.map((e) => o.createContext(e));
            return function (t) {
              let n = t?.[e] || r;
              return o.useMemo(() => ({ [`__scope${e}`]: { ...t, [e]: n } }), [t, n]);
            };
          };
        return (
          (i.scopeName = e),
          [
            function (t, i) {
              let a = o.createContext(i),
                s = n.length;
              n = [...n, i];
              let l = (t) => {
                let { scope: n, children: i, ...l } = t,
                  u = n?.[e]?.[s] || a,
                  c = o.useMemo(() => l, Object.values(l));
                return (0, r.jsx)(u.Provider, { value: c, children: i });
              };
              return (
                (l.displayName = t + "Provider"),
                [
                  l,
                  function (r, n) {
                    let l = n?.[e]?.[s] || a,
                      u = o.useContext(l);
                    if (u) return u;
                    if (void 0 !== i) return i;
                    throw Error(`\`${r}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let r = e[0];
              if (1 === e.length) return r;
              let t = () => {
                let t = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
                return function (e) {
                  let n = t.reduce((r, { useScope: t, scopeName: n }) => {
                    let o = t(e)[`__scope${n}`];
                    return { ...r, ...o };
                  }, {});
                  return o.useMemo(() => ({ [`__scope${r.scopeName}`]: n }), [n]);
                };
              };
              return ((t.scopeName = r.scopeName), t);
            })(i, ...t),
          ]
        );
      })(l),
      [d, f] = u(l),
      p = o.forwardRef((e, t) => {
        let { __scopeAvatar: n, ...i } = e,
          [a, l] = o.useState("idle");
        return (0, r.jsx)(d, {
          scope: n,
          imageLoadingStatus: a,
          onImageLoadingStatusChange: l,
          children: (0, r.jsx)(s.span, { ...i, ref: t }),
        });
      });
    p.displayName = l;
    var m = "AvatarImage",
      h = o.forwardRef((e, t) => {
        var n;
        let a,
          { __scopeAvatar: l, src: u, onLoadingStatusChange: c = () => {}, ...d } = e,
          p = f(m, l),
          h = (function (e, r) {
            let [t, n] = o.useState("idle");
            return (
              i(() => {
                if (!e) return void n("error");
                let t = !0,
                  o = new window.Image(),
                  i = (e) => () => {
                    t && n(e);
                  };
                return (
                  n("loading"),
                  (o.onload = i("loaded")),
                  (o.onerror = i("error")),
                  (o.src = e),
                  r && (o.referrerPolicy = r),
                  () => {
                    t = !1;
                  }
                );
              }, [e, r]),
              t
            );
          })(u, d.referrerPolicy),
          v =
            ((n = (e) => {
              (c(e), p.onImageLoadingStatusChange(e));
            }),
            (a = o.useRef(n)),
            o.useEffect(() => {
              a.current = n;
            }),
            o.useMemo(
              () =>
                (...e) =>
                  a.current?.(...e),
              []
            ));
        return (
          i(() => {
            "idle" !== h && v(h);
          }, [h, v]),
          "loaded" === h ? (0, r.jsx)(s.img, { ...d, ref: t, src: u }) : null
        );
      });
    h.displayName = m;
    var v = "AvatarFallback",
      g = o.forwardRef((e, t) => {
        let { __scopeAvatar: n, delayMs: i, ...a } = e,
          l = f(v, n),
          [u, c] = o.useState(void 0 === i);
        return (
          o.useEffect(() => {
            if (void 0 !== i) {
              let e = window.setTimeout(() => c(!0), i);
              return () => window.clearTimeout(e);
            }
          }, [i]),
          u && "loaded" !== l.imageLoadingStatus ? (0, r.jsx)(s.span, { ...a, ref: t }) : null
        );
      });
    ((g.displayName = v), e.s(["Fallback", 0, g, "Image", 0, h, "Root", 0, p], 97456));
    var _ = e.i(186336),
      y = e.i(944815),
      b = e.i(522016),
      x = e.i(50929);
    let w = (0, y.cva)(
      "bg-emphasis border-default relative inline-flex aspect-square items-center justify-center border align-top",
      {
        variants: {
          size: {
            xs: "w-4 h-4 min-w-4 min-h-4 max-h-4",
            xsm: "w-5 h-5 min-w-5 min-h-5",
            sm: "w-6 h-6 min-w-6 min-h-6",
            md: "w-8 h-8 min-w-8 min-h-8",
            mdLg: "w-10 h-10 min-w-10 min-h-10",
            lg: "w-16 h-16 min-w-16 min-h-16",
            xl: "w-24 h-24 min-w-24 min-h-24",
          },
          shape: { circle: "rounded-full", square: "" },
        },
        defaultVariants: { size: "md", shape: "circle" },
        compoundVariants: [
          { size: ["xs", "xsm", "sm"], shape: "square", className: "rounded" },
          { size: ["md"], shape: "square", className: "rounded-md" },
          { size: ["mdLg", "lg", "xl"], shape: "square", className: "rounded-lg" },
        ],
      }
    );
    e.s(
      [
        "Avatar",
        0,
        function (e) {
          let { imageSrc: o, size: i = "md", alt: a, title: s, href: l, indicator: u } = e,
            c = w({ size: i, shape: e.shape }),
            d = (0, n.default)("aspect-square rounded-full", c),
            f = (0, r.jsx)(p, {
              "data-testid": e?.["data-testid"],
              className: (0, n.default)(c, u ? "overflow-visible" : "overflow-hidden", e.className),
              children: (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(h, {
                    src: o ?? void 0,
                    alt: a,
                    className: (0, n.default)("aspect-square", c),
                  }),
                  (0, r.jsx)(g, {
                    delayMs: 600,
                    asChild: e.asChild,
                    className: "flex h-full items-center justify-center",
                    children: (0, r.jsx)(r.Fragment, {
                      children: e.fallback
                        ? e.fallback
                        : (0, r.jsx)("img", { src: t.AVATAR_FALLBACK, alt: a, className: d }),
                    }),
                  }),
                  u,
                ],
              }),
            });
          return (
            l &&
              (f = (0, r.jsx)(b.default, { "data-testid": "avatar-href", href: l, children: f })),
            s
              ? (0, r.jsx)(_.Provider, {
                  children: (0, r.jsx)(x.Tooltip, { content: s, children: f }),
                })
              : (0, r.jsx)(r.Fragment, { children: f })
          );
        },
      ],
      769021
    );
  },
  972165,
  (e) => {
    "use strict";
    var r = e.i(653145),
      t = function (e, t, n) {
        if (e && "reportValidity" in e) {
          var o = (0, r.get)(n, t);
          (e.setCustomValidity((o && o.message) || ""), e.reportValidity());
        }
      },
      n = function (e, r) {
        var n = function (n) {
          var o = r.fields[n];
          o && o.ref && "reportValidity" in o.ref
            ? t(o.ref, n, e)
            : o.refs &&
              o.refs.forEach(function (r) {
                return t(r, n, e);
              });
        };
        for (var o in r.fields) n(o);
      },
      o = function (e, t) {
        t.shouldUseNativeValidation && n(e, t);
        var o = {};
        for (var i in e) {
          var a = (0, r.get)(t.fields, i);
          (0, r.set)(o, i, Object.assign(e[i], { ref: a && a.ref }));
        }
        return o;
      },
      i = function (e, t) {
        for (var n = {}; e.length; ) {
          var o = e[0],
            i = o.code,
            a = o.message,
            s = o.path.join(".");
          if (!n[s])
            if ("unionErrors" in o) {
              var l = o.unionErrors[0].errors[0];
              n[s] = { message: l.message, type: l.code };
            } else n[s] = { message: a, type: i };
          if (
            ("unionErrors" in o &&
              o.unionErrors.forEach(function (r) {
                return r.errors.forEach(function (r) {
                  return e.push(r);
                });
              }),
            t)
          ) {
            var u = n[s].types,
              c = u && u[o.code];
            n[s] = (0, r.appendErrors)(s, t, n, i, c ? [].concat(c, o.message) : o.message);
          }
          e.shift();
        }
        return n;
      };
    e.s(
      [
        "zodResolver",
        0,
        function (e, r, t) {
          return (
            void 0 === t && (t = {}),
            function (a, s, l) {
              try {
                return Promise.resolve(
                  (function (o) {
                    try {
                      var i = Promise.resolve(
                        e["sync" === t.mode ? "parse" : "parseAsync"](a, r)
                      ).then(function (e) {
                        return (
                          l.shouldUseNativeValidation && n({}, l),
                          { errors: {}, values: t.rawValues ? a : e }
                        );
                      });
                    } catch (e) {
                      return o(e);
                    }
                    return i && i.then ? i.then(void 0, o) : i;
                  })(function (e) {
                    return {
                      values: {},
                      errors: e.isEmpty
                        ? {}
                        : o(
                            i(e.errors, !l.shouldUseNativeValidation && "all" === l.criteriaMode),
                            l
                          ),
                    };
                  })
                );
              } catch (e) {
                return Promise.reject(e);
              }
            }
          );
        },
      ],
      972165
    );
  },
  57287,
  (e) => {
    "use strict";
    var r = e.i(271645);
    function t(...e) {
      return (r) =>
        e.forEach((e) => {
          "function" == typeof e ? e(r) : null != e && (e.current = r);
        });
    }
    var n = e.i(843476);
    function o(e) {
      let t = r.useRef(e);
      return (
        r.useEffect(() => {
          t.current = e;
        }),
        r.useMemo(
          () =>
            (...e) =>
              t.current?.(...e),
          []
        )
      );
    }
    var i = globalThis?.document ? r.useLayoutEffect : () => {};
    e.i(174080);
    var a = r.forwardRef((e, t) => {
      let { children: o, ...i } = e,
        a = r.Children.toArray(o),
        l = a.find(u);
      if (l) {
        let e = l.props.children,
          o = a.map((t) =>
            t !== l
              ? t
              : r.Children.count(e) > 1
                ? r.Children.only(null)
                : r.isValidElement(e)
                  ? e.props.children
                  : null
          );
        return (0, n.jsx)(s, {
          ...i,
          ref: t,
          children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null,
        });
      }
      return (0, n.jsx)(s, { ...i, ref: t, children: o });
    });
    a.displayName = "Slot";
    var s = r.forwardRef((e, n) => {
      let { children: o, ...i } = e;
      if (r.isValidElement(o)) {
        var a;
        let e,
          s,
          l =
            ((a = o),
            (s =
              (e = Object.getOwnPropertyDescriptor(a.props, "ref")?.get) &&
              "isReactWarning" in e &&
              e.isReactWarning)
              ? a.ref
              : (s =
                    (e = Object.getOwnPropertyDescriptor(a, "ref")?.get) &&
                    "isReactWarning" in e &&
                    e.isReactWarning)
                ? a.props.ref
                : a.props.ref || a.ref);
        return r.cloneElement(o, {
          ...(function (e, r) {
            let t = { ...r };
            for (let n in r) {
              let o = e[n],
                i = r[n];
              /^on[A-Z]/.test(n)
                ? o && i
                  ? (t[n] = (...e) => {
                      (i(...e), o(...e));
                    })
                  : o && (t[n] = o)
                : "style" === n
                  ? (t[n] = { ...o, ...i })
                  : "className" === n && (t[n] = [o, i].filter(Boolean).join(" "));
            }
            return { ...e, ...t };
          })(i, o.props),
          ref: n ? t(n, l) : l,
        });
      }
      return r.Children.count(o) > 1 ? r.Children.only(null) : null;
    });
    s.displayName = "SlotClone";
    var l = ({ children: e }) => (0, n.jsx)(n.Fragment, { children: e });
    function u(e) {
      return r.isValidElement(e) && e.type === l;
    }
    var c = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
      ].reduce((e, t) => {
        let o = r.forwardRef((e, r) => {
          let { asChild: o, ...i } = e,
            s = o ? a : t;
          return (
            "u" > typeof window && (window[Symbol.for("radix-ui")] = !0),
            (0, n.jsx)(s, { ...i, ref: r })
          );
        });
        return ((o.displayName = `Primitive.${t}`), { ...e, [t]: o });
      }, {}),
      d = "Switch",
      [f, p] = (function (e, t = []) {
        let o = [],
          i = () => {
            let t = o.map((e) => r.createContext(e));
            return function (n) {
              let o = n?.[e] || t;
              return r.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: o } }), [n, o]);
            };
          };
        return (
          (i.scopeName = e),
          [
            function (t, i) {
              let a = r.createContext(i),
                s = o.length;
              function l(t) {
                let { scope: o, children: i, ...l } = t,
                  u = o?.[e][s] || a,
                  c = r.useMemo(() => l, Object.values(l));
                return (0, n.jsx)(u.Provider, { value: c, children: i });
              }
              return (
                (o = [...o, i]),
                (l.displayName = t + "Provider"),
                [
                  l,
                  function (n, o) {
                    let l = o?.[e][s] || a,
                      u = r.useContext(l);
                    if (u) return u;
                    if (void 0 !== i) return i;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
                return function (e) {
                  let o = n.reduce((r, { useScope: t, scopeName: n }) => {
                    let o = t(e)[`__scope${n}`];
                    return { ...r, ...o };
                  }, {});
                  return r.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
                };
              };
              return ((n.scopeName = t.scopeName), n);
            })(i, ...t),
          ]
        );
      })(d),
      [m, h] = f(d),
      v = r.forwardRef((e, i) => {
        let {
            __scopeSwitch: a,
            name: s,
            checked: l,
            defaultChecked: u,
            required: d,
            disabled: f,
            value: p = "on",
            onCheckedChange: h,
            ...v
          } = e,
          [g, _] = r.useState(null),
          x = (function (...e) {
            return r.useCallback(t(...e), e);
          })(i, (e) => _(e)),
          w = r.useRef(!1),
          j = !g || !!g.closest("form"),
          [E = !1, N] = (function ({ prop: e, defaultProp: t, onChange: n = () => {} }) {
            let [i, a] = (function ({ defaultProp: e, onChange: t }) {
                let n = r.useState(e),
                  [i] = n,
                  a = r.useRef(i),
                  s = o(t);
                return (
                  r.useEffect(() => {
                    a.current !== i && (s(i), (a.current = i));
                  }, [i, a, s]),
                  n
                );
              })({ defaultProp: t, onChange: n }),
              s = void 0 !== e,
              l = s ? e : i,
              u = o(n);
            return [
              l,
              r.useCallback(
                (r) => {
                  if (s) {
                    let t = "function" == typeof r ? r(e) : r;
                    t !== e && u(t);
                  } else a(r);
                },
                [s, e, a, u]
              ),
            ];
          })({ prop: l, defaultProp: u, onChange: h });
        return (0, n.jsxs)(m, {
          scope: a,
          checked: E,
          disabled: f,
          children: [
            (0, n.jsx)(c.button, {
              type: "button",
              role: "switch",
              "aria-checked": E,
              "aria-required": d,
              "data-state": b(E),
              "data-disabled": f ? "" : void 0,
              disabled: f,
              value: p,
              ...v,
              ref: x,
              onClick: (function (e, r, { checkForDefaultPrevented: t = !0 } = {}) {
                return function (n) {
                  if ((e?.(n), !1 === t || !n.defaultPrevented)) return r?.(n);
                };
              })(e.onClick, (e) => {
                (N((e) => !e),
                  j && ((w.current = e.isPropagationStopped()), w.current || e.stopPropagation()));
              }),
            }),
            j &&
              (0, n.jsx)(y, {
                control: g,
                bubbles: !w.current,
                name: s,
                value: p,
                checked: E,
                required: d,
                disabled: f,
                style: { transform: "translateX(-100%)" },
              }),
          ],
        });
      });
    v.displayName = d;
    var g = "SwitchThumb",
      _ = r.forwardRef((e, r) => {
        let { __scopeSwitch: t, ...o } = e,
          i = h(g, t);
        return (0, n.jsx)(c.span, {
          "data-state": b(i.checked),
          "data-disabled": i.disabled ? "" : void 0,
          ...o,
          ref: r,
        });
      });
    _.displayName = g;
    var y = (e) => {
      let t,
        { control: o, checked: a, bubbles: s = !0, ...l } = e,
        u = r.useRef(null),
        c =
          ((t = r.useRef({ value: a, previous: a })),
          r.useMemo(
            () => (
              t.current.value !== a &&
                ((t.current.previous = t.current.value), (t.current.value = a)),
              t.current.previous
            ),
            [a]
          )),
        d = (function (e) {
          let [t, n] = r.useState(void 0);
          return (
            i(() => {
              if (e) {
                n({ width: e.offsetWidth, height: e.offsetHeight });
                let r = new ResizeObserver((r) => {
                  let t, o;
                  if (!Array.isArray(r) || !r.length) return;
                  let i = r[0];
                  if ("borderBoxSize" in i) {
                    let e = i.borderBoxSize,
                      r = Array.isArray(e) ? e[0] : e;
                    ((t = r.inlineSize), (o = r.blockSize));
                  } else ((t = e.offsetWidth), (o = e.offsetHeight));
                  n({ width: t, height: o });
                });
                return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
              }
              n(void 0);
            }, [e]),
            t
          );
        })(o);
      return (
        r.useEffect(() => {
          let e = u.current,
            r = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
          if (c !== a && r) {
            let t = new Event("click", { bubbles: s });
            (r.call(e, a), e.dispatchEvent(t));
          }
        }, [c, a, s]),
        (0, n.jsx)("input", {
          type: "checkbox",
          "aria-hidden": !0,
          defaultChecked: a,
          ...l,
          tabIndex: -1,
          ref: u,
          style: {
            ...e.style,
            ...d,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0,
          },
        })
      );
    };
    function b(e) {
      return e ? "checked" : "unchecked";
    }
    e.s(["Root", 0, v, "Thumb", 0, _], 57287);
  },
  448185,
  (e) => {
    "use strict";
    var r = e.i(843476),
      t = e.i(645141),
      n = e.i(271645);
    e.i(785269);
    var o = e.i(200071),
      i = e.i(402607);
    e.s([
      "I18nOverride",
      0,
      function ({ children: e, translations: a, locale: s, ns: l }) {
        let u = (0, n.useRef)(null),
          c = (0, n.useRef)(""),
          d = (0, n.useRef)(""),
          f = (0, n.useRef)(a);
        if (u.current)
          (s !== c.current || l !== d.current || a !== f.current) &&
            (u.current.addResourceBundle(s, l, a, !0, !0),
            u.current.language !== s && u.current.changeLanguage(s),
            u.current.options.defaultNS !== l && (u.current.options.defaultNS = l),
            (c.current = s),
            (d.current = l),
            (f.current = a));
        else {
          let e = t.default.createInstance();
          (e
            .use(i.initReactI18next)
            .init({
              lng: s,
              resources: { [s]: { [l]: a } },
              defaultNS: l,
              interpolation: { escapeValue: !1 },
            }),
            (u.current = e),
            (c.current = s),
            (d.current = l),
            (f.current = a));
        }
        return (0, r.jsx)(o.I18nextProvider, { i18n: u.current, children: e });
      },
    ]);
  },
  323758,
  (e) => {
    "use strict";
    var r = e.i(843476),
      t = e.i(271645);
    e.i(436864);
    var n = e.i(605681),
      o = e.i(857739);
    let i = { displayDebug: !1 },
      a = (e) => {
        let { error: t } = e,
          o = [
            ["error.message", t?.message],
            ["error.name", t?.name],
            ["error.class", t instanceof Error ? t.constructor.name : void 0],
            ["http.url", t instanceof n.HttpError ? t.url : void 0],
            ["http.status", t instanceof n.HttpError ? t.statusCode : void 0],
            ["http.cause", t instanceof n.HttpError ? t.cause?.message : void 0],
            ["error.stack", t instanceof Error ? t.stack : void 0],
          ];
        return (0, r.jsx)("div", {
          className: "bg-default overflow-hidden shadow sm:rounded-lg",
          children: (0, r.jsx)("div", {
            className: "border-subtle border-t px-4 py-5 sm:p-0",
            children: (0, r.jsx)("dl", {
              className: "sm:divide-subtle sm:divide-y",
              children: o.map(([e, t]) => {
                if (void 0 !== t)
                  return (0, r.jsxs)(
                    "div",
                    {
                      className: "py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5",
                      children: [
                        (0, r.jsx)("dt", {
                          className: "text-emphasis text-sm font-bold",
                          children: e,
                        }),
                        (0, r.jsx)("dd", {
                          className: "text-emphasis mt-1 text-sm sm:col-span-2 sm:mt-0",
                          children: t,
                        }),
                      ],
                    },
                    e
                  );
              }),
            }),
          }),
        });
      };
    e.s([
      "ErrorPage",
      0,
      (e) => {
        let { message: n, statusCode: s, error: l, displayDebug: u } = { ...i, ...e };
        return (
          (0, t.useLayoutEffect)(() => {
            s && (window.CalComPageStatus = s.toString());
          }, [s]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("div", {
                className: "bg-subtle flex h-screen",
                children: (0, r.jsxs)("div", {
                  className: "rtl: bg-default m-auto rounded-md p-10 text-right ltr:text-left",
                  children: [
                    (0, r.jsx)("h1", {
                      className: "font-heading text-emphasis text-6xl",
                      children: s,
                    }),
                    (0, r.jsx)("h2", {
                      className: "text-emphasis mt-6 max-w-2xl text-2xl font-medium",
                      children: "It's not you, it's us.",
                    }),
                    (0, r.jsx)("p", {
                      className: "text-default mb-6 mt-4 max-w-2xl text-sm",
                      children:
                        "Something went wrong on our end. Get in touch with our support team, and we'll get it fixed right away for you.",
                    }),
                    (0, r.jsxs)("div", {
                      className: "mb-8 flex flex-col",
                      children: [
                        (0, r.jsx)("p", {
                          className: "text-default mb-4 max-w-2xl text-sm",
                          children:
                            "Please provide the following text when contacting support to better help you:",
                        }),
                        (0, r.jsx)("pre", {
                          className:
                            "bg-emphasis text-emphasis w-full max-w-2xl whitespace-normal wrap-break-word rounded-md p-4",
                          children: n,
                        }),
                      ],
                    }),
                    (0, r.jsx)(o.Button, {
                      href: "mailto:support@cal.com",
                      children: "Contact Support",
                    }),
                    (0, r.jsx)(o.Button, {
                      color: "secondary",
                      className: "ml-2",
                      onClick: () => {
                        (window.location.reload(), e.reset?.());
                      },
                      children: "Try again",
                    }),
                  ],
                }),
              }),
              u &&
                (0, r.jsx)("div", {
                  className: "flex-wrap",
                  children: (0, r.jsx)(a, { error: l }),
                }),
            ],
          })
        );
      },
    ]);
  },
  658856,
  (e) => {
    "use strict";
    var r = e.i(255889);
    e.s([
      "getBookerWrapperClasses",
      0,
      function ({ isEmbed: e }) {
        return (0, r.default)(
          "flex h-full items-center justify-center",
          !e && "min-h-[calc(100dvh)]"
        );
      },
    ]);
  },
  248097,
  (e, r, t) => {
    (e.e,
      (function (e, r) {
        "use strict";
        var t = (function (e) {
          if (e && e.__esModule) return e;
          var r = Object.create(null);
          return (
            e &&
              Object.keys(e).forEach(function (t) {
                if ("default" !== t) {
                  var n = Object.getOwnPropertyDescriptor(e, t);
                  Object.defineProperty(
                    r,
                    t,
                    n.get
                      ? n
                      : {
                          enumerable: !0,
                          get: function () {
                            return e[t];
                          },
                        }
                  );
                }
              }),
            (r.default = e),
            Object.freeze(r)
          );
        })(r);
        function n(e, r) {
          return (n =
            Object.setPrototypeOf ||
            function (e, r) {
              return ((e.__proto__ = r), e);
            })(e, r);
        }
        var o = { error: null },
          i = (function (e) {
            function r() {
              for (var r, t = arguments.length, n = Array(t), i = 0; i < t; i++)
                n[i] = arguments[i];
              return (
                ((r = e.call.apply(e, [this].concat(n)) || this).state = o),
                (r.resetErrorBoundary = function () {
                  for (var e, t = arguments.length, n = Array(t), o = 0; o < t; o++)
                    n[o] = arguments[o];
                  (null == r.props.onReset || (e = r.props).onReset.apply(e, n), r.reset());
                }),
                r
              );
            }
            ((r.prototype = Object.create(e.prototype)),
              (r.prototype.constructor = r),
              n(r, e),
              (r.getDerivedStateFromError = function (e) {
                return { error: e };
              }));
            var i = r.prototype;
            return (
              (i.reset = function () {
                this.setState(o);
              }),
              (i.componentDidCatch = function (e, r) {
                var t, n;
                null == (t = (n = this.props).onError) || t.call(n, e, r);
              }),
              (i.componentDidUpdate = function (e, r) {
                var t,
                  n,
                  o,
                  i,
                  a = this.state.error,
                  s = this.props.resetKeys;
                null !== a &&
                  null !== r.error &&
                  (void 0 === (t = e.resetKeys) && (t = []),
                  void 0 === (n = s) && (n = []),
                  t.length !== n.length ||
                    t.some(function (e, r) {
                      return !Object.is(e, n[r]);
                    })) &&
                  (null == (o = (i = this.props).onResetKeysChange) || o.call(i, e.resetKeys, s),
                  this.reset());
              }),
              (i.render = function () {
                var e = this.state.error,
                  r = this.props,
                  n = r.fallbackRender,
                  o = r.FallbackComponent,
                  i = r.fallback;
                if (null !== e) {
                  var a = { error: e, resetErrorBoundary: this.resetErrorBoundary };
                  if (t.isValidElement(i)) return i;
                  if ("function" == typeof n) return n(a);
                  if (o) return t.createElement(o, a);
                  else
                    throw Error(
                      "react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop"
                    );
                }
                return this.props.children;
              }),
              r
            );
          })(t.Component);
        ((e.ErrorBoundary = i),
          (e.useErrorHandler = function (e) {
            var r = t.useState(null),
              n = r[0],
              o = r[1];
            if (null != e) throw e;
            if (null != n) throw n;
            return o;
          }),
          (e.withErrorBoundary = function (e, r) {
            var n = function (n) {
              return t.createElement(i, r, t.createElement(e, n));
            };
            return (
              (n.displayName = "withErrorBoundary(" + (e.displayName || e.name || "Unknown") + ")"),
              n
            );
          }),
          Object.defineProperty(e, "__esModule", { value: !0 }));
      })(t, e.r(271645)));
  },
  255783,
  (e) => {
    "use strict";
    var r = e.i(843476),
      t = e.i(250804),
      n = e.i(662537),
      o = e.i(453288),
      i = e.i(271645),
      a = e.i(248097),
      s = e.i(323758);
    e.s(
      [
        "default",
        0,
        function ({ children: e }) {
          return (0, r.jsx)(a.ErrorBoundary, {
            fallbackRender: ({ error: e, resetErrorBoundary: t }) =>
              (0, r.jsx)(s.ErrorPage, { reset: t, error: e, message: `${e}`, displayDebug: !0 }),
            onError: (e, r) => {
              (console.error(e),
                (function (e, { componentStack: r }) {
                  let a;
                  if (
                    null !== (a = i.version.match(/^([^.]+)/)) &&
                    parseInt(a[0]) >= 17 &&
                    (0, o.isError)(e) &&
                    r
                  ) {
                    let t,
                      n = Error(e.message);
                    ((n.name = `React ErrorBoundary ${e.name}`),
                      (n.stack = r),
                      (t = new WeakSet()),
                      (function e(r, n) {
                        if (!t.has(r)) {
                          if (r.cause) return (t.add(r), e(r.cause, n));
                          r.cause = n;
                        }
                      })(e, n));
                  }
                  (0, t.withScope)(
                    (t) => (
                      t.setContext("react", { componentStack: r }),
                      (0, n.captureException)(e, void 0)
                    )
                  );
                })(e, r));
            },
            children: e,
          });
        },
      ],
      255783
    );
  },
  267574,
  (e) => {
    "use strict";
    var r = e.i(843476),
      t = e.i(618566),
      n = e.i(692969),
      o = e.i(658856),
      i = e.i(255783);
    let a = (e, r, t) => (e ? (e.includes(Number(r)) ? Number(r) : t) : null);
    e.s([
      "default",
      0,
      function ({
        slug: e,
        user: s,
        isEmbed: l,
        booking: u,
        isBrandingHidden: c,
        eventData: d,
        orgBannerUrl: f,
      }) {
        let p = (0, t.useSearchParams)();
        return (0, r.jsx)(i.default, {
          children: (0, r.jsx)("main", {
            className: (0, o.getBookerWrapperClasses)({ isEmbed: !!l }),
            children: (0, r.jsx)(n.BookerWebWrapper, {
              username: s,
              eventSlug: e,
              bookingData: u,
              hideBranding: c,
              eventData: d,
              entity: { ...d.entity, eventTypeId: d?.id },
              durationConfig: d.metadata?.multipleDuration,
              orgBannerUrl: f,
              duration: a(d.metadata?.multipleDuration, p?.get("duration"), d.length),
            }),
          }),
        });
      },
      "getMultipleDurationValue",
      0,
      a,
    ]);
  },
  933503,
  (e) => {
    e.v((r) =>
      Promise.all(
        ["static/chunks/051txqhhpw~p..js", "static/chunks/0w7_-~~zgjuag.js"].map((r) => e.l(r))
      ).then(() => r(993225))
    );
  },
]);
