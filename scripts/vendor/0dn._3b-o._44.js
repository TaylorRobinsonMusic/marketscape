(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  651855,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(255889),
      r = e.i(857739);
    e.s([
      "EmptyScreen",
      0,
      function ({
        Icon: e,
        customIcon: i,
        avatar: o,
        headline: s,
        description: l,
        buttonText: a,
        buttonOnClick: u,
        buttonRaw: c,
        border: d = !0,
        dashedBorder: h = !0,
        className: p,
        iconClassName: f,
        iconWrapperClassName: m,
        limitWidth: g = !0,
      }) {
        var v;
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsxs)("div", {
            "data-testid": "empty-screen",
            className: (0, n.default)(
              "flex w-full select-none flex-col items-center justify-center rounded-lg p-7 lg:p-20",
              d && "border-subtle border",
              h && "border-dashed",
              p
            ),
            children: [
              o
                ? (0, t.jsx)("div", {
                    className: "flex h-[72px] w-[72px] items-center justify-center rounded-full",
                    children: o,
                  })
                : null,
              e
                ? (0, t.jsx)("div", {
                    className: (0, n.default)(
                      "bg-emphasis flex h-[72px] w-[72px] items-center justify-center rounded-full ",
                      m
                    ),
                    children:
                      ((v = (0, n.default)(
                        "text-default inline-block h-10 w-10 stroke-[1.3px]",
                        f
                      )),
                      (0, t.jsx)(e, { className: v })),
                  })
                : null,
              i ? (0, t.jsx)(t.Fragment, { children: i }) : null,
              (0, t.jsxs)("div", {
                className: `flex ${g ? "max-w-[420px]" : ""}  flex-col items-center`,
                children: [
                  (0, t.jsx)("h2", {
                    className: (0, n.default)(
                      "font-heading text-emphasis text-center text-xl normal-nums",
                      e && "mt-6",
                      !l && "mb-8"
                    ),
                    children: s,
                  }),
                  l &&
                    (0, t.jsx)("div", {
                      className: "text-default mb-8 mt-3 text-center text-sm font-normal leading-6",
                      "data-testid": "empty-screen-description",
                      children: l,
                    }),
                  u && a && (0, t.jsx)(r.Button, { onClick: (e) => u(e), children: a }),
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
      n = e.i(476186),
      r = e.i(857739),
      i = e.i(651855),
      o = e.i(320937),
      s = e.i(217255),
      l = e.i(271645);
    let a = ({ children: e, as: a = "", ...u }) => {
      let c = (0, s.useSession)(),
        { t: d } = (0, n.useLocale)(),
        h = a || l.Fragment,
        p = c.data ? c.data.hasValidLicense : null;
      return (
        (0, l.useEffect)(() => {}, []),
        (0, t.jsx)(h, {
          ...u,
          children:
            null === p || p
              ? e
              : (0, t.jsx)(i.EmptyScreen, {
                  Icon: o.TriangleAlertIcon,
                  headline: d("enterprise_license"),
                  buttonRaw: (0, t.jsx)(r.Button, {
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
      (e) => (n) =>
        (0, t.jsx)("div", { children: (0, t.jsx)(a, { children: (0, t.jsx)(e, { ...n }) }) }),
    ]);
  },
  988138,
  (e) => {
    "use strict";
    var t = e.i(931067),
      n = e.i(271645),
      r = e.i(981140),
      i = e.i(820783),
      o = e.i(30030),
      s = e.i(726330),
      l = e.i(610772),
      a = e.i(853660),
      u = e.i(174080),
      c = e.i(248425);
    let d = (0, n.forwardRef)((e, r) => {
      var i;
      let {
        container: o = null == globalThis || null == (i = globalThis.document) ? void 0 : i.body,
        ...s
      } = e;
      return o
        ? u.default.createPortal(
            (0, n.createElement)(c.Primitive.div, (0, t.default)({}, s, { ref: r })),
            o
          )
        : null;
    });
    var h = e.i(296626);
    (0, n.forwardRef)((e, r) => {
      let { children: i, ...o } = e,
        s = n.Children.toArray(i),
        l = s.find(m);
      if (l) {
        let e = l.props.children,
          i = s.map((t) =>
            t !== l
              ? t
              : n.Children.count(e) > 1
                ? n.Children.only(null)
                : (0, n.isValidElement)(e)
                  ? e.props.children
                  : null
          );
        return (0, n.createElement)(
          p,
          (0, t.default)({}, o, { ref: r }),
          (0, n.isValidElement)(e) ? (0, n.cloneElement)(e, void 0, i) : null
        );
      }
      return (0, n.createElement)(p, (0, t.default)({}, o, { ref: r }), i);
    }).displayName = "Slot";
    let p = (0, n.forwardRef)((e, t) => {
      let { children: r, ...o } = e;
      return (0, n.isValidElement)(r)
        ? (0, n.cloneElement)(r, {
            ...(function (e, t) {
              let n = { ...t };
              for (let r in t) {
                let i = e[r],
                  o = t[r];
                /^on[A-Z]/.test(r)
                  ? i && o
                    ? (n[r] = (...e) => {
                        (o(...e), i(...e));
                      })
                    : i && (n[r] = i)
                  : "style" === r
                    ? (n[r] = { ...i, ...o })
                    : "className" === r && (n[r] = [i, o].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(o, r.props),
            ref: t ? (0, i.composeRefs)(t, r.ref) : r.ref,
          })
        : n.Children.count(r) > 1
          ? n.Children.only(null)
          : null;
    });
    p.displayName = "SlotClone";
    let f = ({ children: e }) => (0, n.createElement)(n.Fragment, null, e);
    function m(e) {
      return (0, n.isValidElement)(e) && e.type === f;
    }
    var g = e.i(369340),
      v = e.i(959411);
    let [y, _] = (0, o.createContextScope)("Tooltip", [a.createPopperScope]),
      b = (0, a.createPopperScope)(),
      x = "tooltip.open",
      [S, w] = y("TooltipProvider"),
      E = (e) => {
        let {
            __scopeTooltip: t,
            delayDuration: r = 700,
            skipDelayDuration: i = 300,
            disableHoverableContent: o = !1,
            children: s,
          } = e,
          [l, a] = (0, n.useState)(!0),
          u = (0, n.useRef)(!1),
          c = (0, n.useRef)(0);
        return (
          (0, n.useEffect)(() => {
            let e = c.current;
            return () => window.clearTimeout(e);
          }, []),
          (0, n.createElement)(
            S,
            {
              scope: t,
              isOpenDelayed: l,
              delayDuration: r,
              onOpen: (0, n.useCallback)(() => {
                (window.clearTimeout(c.current), a(!1));
              }, []),
              onClose: (0, n.useCallback)(() => {
                (window.clearTimeout(c.current), (c.current = window.setTimeout(() => a(!0), i)));
              }, [i]),
              isPointerInTransitRef: u,
              onPointerInTransitChange: (0, n.useCallback)((e) => {
                u.current = e;
              }, []),
              disableHoverableContent: o,
            },
            s
          )
        );
      },
      C = "Tooltip",
      [T, k] = y(C),
      R = "TooltipTrigger",
      j = (0, n.forwardRef)((e, o) => {
        let { __scopeTooltip: s, ...l } = e,
          u = k(R, s),
          d = w(R, s),
          h = b(s),
          p = (0, n.useRef)(null),
          f = (0, i.useComposedRefs)(o, p, u.onTriggerChange),
          m = (0, n.useRef)(!1),
          g = (0, n.useRef)(!1),
          v = (0, n.useCallback)(() => (m.current = !1), []);
        return (
          (0, n.useEffect)(() => () => document.removeEventListener("pointerup", v), [v]),
          (0, n.createElement)(
            a.Anchor,
            (0, t.default)({ asChild: !0 }, h),
            (0, n.createElement)(
              c.Primitive.button,
              (0, t.default)(
                {
                  "aria-describedby": u.open ? u.contentId : void 0,
                  "data-state": u.stateAttribute,
                },
                l,
                {
                  ref: f,
                  onPointerMove: (0, r.composeEventHandlers)(e.onPointerMove, (e) => {
                    "touch" !== e.pointerType &&
                      (g.current ||
                        d.isPointerInTransitRef.current ||
                        (u.onTriggerEnter(), (g.current = !0)));
                  }),
                  onPointerLeave: (0, r.composeEventHandlers)(e.onPointerLeave, () => {
                    (u.onTriggerLeave(), (g.current = !1));
                  }),
                  onPointerDown: (0, r.composeEventHandlers)(e.onPointerDown, () => {
                    ((m.current = !0), document.addEventListener("pointerup", v, { once: !0 }));
                  }),
                  onFocus: (0, r.composeEventHandlers)(e.onFocus, () => {
                    m.current || u.onOpen();
                  }),
                  onBlur: (0, r.composeEventHandlers)(e.onBlur, u.onClose),
                  onClick: (0, r.composeEventHandlers)(e.onClick, u.onClose),
                }
              )
            )
          )
        );
      }),
      P = "TooltipPortal",
      [F, z] = y(P, { forceMount: void 0 }),
      A = "TooltipContent",
      L = (0, n.forwardRef)((e, r) => {
        let i = z(A, e.__scopeTooltip),
          { forceMount: o = i.forceMount, side: s = "top", ...l } = e,
          a = k(A, e.__scopeTooltip);
        return (0, n.createElement)(
          h.Presence,
          { present: o || a.open },
          a.disableHoverableContent
            ? (0, n.createElement)(q, (0, t.default)({ side: s }, l, { ref: r }))
            : (0, n.createElement)(O, (0, t.default)({ side: s }, l, { ref: r }))
        );
      }),
      O = (0, n.forwardRef)((e, r) => {
        let o = k(A, e.__scopeTooltip),
          s = w(A, e.__scopeTooltip),
          l = (0, n.useRef)(null),
          a = (0, i.useComposedRefs)(r, l),
          [u, c] = (0, n.useState)(null),
          { trigger: d, onClose: h } = o,
          p = l.current,
          { onPointerInTransitChange: f } = s,
          m = (0, n.useCallback)(() => {
            (c(null), f(!1));
          }, [f]),
          g = (0, n.useCallback)(
            (e, t) => {
              let n,
                r = e.currentTarget,
                i = { x: e.clientX, y: e.clientY },
                o = (function (e, t) {
                  let n = Math.abs(t.top - e.y),
                    r = Math.abs(t.bottom - e.y),
                    i = Math.abs(t.right - e.x),
                    o = Math.abs(t.left - e.x);
                  switch (Math.min(n, r, i, o)) {
                    case o:
                      return "left";
                    case i:
                      return "right";
                    case n:
                      return "top";
                    case r:
                      return "bottom";
                    default:
                      throw Error("unreachable");
                  }
                })(i, r.getBoundingClientRect());
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
                  })(i, o),
                  ...(function (e) {
                    let { top: t, right: n, bottom: r, left: i } = e;
                    return [
                      { x: i, y: t },
                      { x: n, y: t },
                      { x: n, y: r },
                      { x: i, y: r },
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
                f(!0));
            },
            [f]
          );
        return (
          (0, n.useEffect)(() => () => m(), [m]),
          (0, n.useEffect)(() => {
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
          }, [d, p, g, m]),
          (0, n.useEffect)(() => {
            if (u) {
              let e = (e) => {
                let t = e.target,
                  n = { x: e.clientX, y: e.clientY },
                  r = (null == d ? void 0 : d.contains(t)) || (null == p ? void 0 : p.contains(t)),
                  i = !(function (e, t) {
                    let { x: n, y: r } = e,
                      i = !1;
                    for (let e = 0, o = t.length - 1; e < t.length; o = e++) {
                      let s = t[e].x,
                        l = t[e].y,
                        a = t[o].x,
                        u = t[o].y;
                      l > r != u > r && n < ((a - s) * (r - l)) / (u - l) + s && (i = !i);
                    }
                    return i;
                  })(n, u);
                r ? m() : i && (m(), h());
              };
              return (
                document.addEventListener("pointermove", e),
                () => document.removeEventListener("pointermove", e)
              );
            }
          }, [d, p, u, h, m]),
          (0, n.createElement)(q, (0, t.default)({}, e, { ref: a }))
        );
      }),
      [I, B] = y(C, { isInside: !1 }),
      q = (0, n.forwardRef)((e, r) => {
        let {
            __scopeTooltip: i,
            children: o,
            "aria-label": l,
            onEscapeKeyDown: u,
            onPointerDownOutside: c,
            ...d
          } = e,
          h = k(A, i),
          p = b(i),
          { onClose: m } = h;
        return (
          (0, n.useEffect)(
            () => (document.addEventListener(x, m), () => document.removeEventListener(x, m)),
            [m]
          ),
          (0, n.useEffect)(() => {
            if (h.trigger) {
              let e = (e) => {
                let t = e.target;
                null != t && t.contains(h.trigger) && m();
              };
              return (
                window.addEventListener("scroll", e, { capture: !0 }),
                () => window.removeEventListener("scroll", e, { capture: !0 })
              );
            }
          }, [h.trigger, m]),
          (0, n.createElement)(
            s.DismissableLayer,
            {
              asChild: !0,
              disableOutsidePointerEvents: !1,
              onEscapeKeyDown: u,
              onPointerDownOutside: c,
              onFocusOutside: (e) => e.preventDefault(),
              onDismiss: m,
            },
            (0, n.createElement)(
              a.Content,
              (0, t.default)({ "data-state": h.stateAttribute }, p, d, {
                ref: r,
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
              (0, n.createElement)(f, null, o),
              (0, n.createElement)(
                I,
                { scope: i, isInside: !0 },
                (0, n.createElement)(v.Root, { id: h.contentId, role: "tooltip" }, l || o)
              )
            )
          )
        );
      }),
      D = (0, n.forwardRef)((e, r) => {
        let { __scopeTooltip: i, ...o } = e,
          s = b(i);
        return B("TooltipArrow", i).isInside
          ? null
          : (0, n.createElement)(a.Arrow, (0, t.default)({}, s, o, { ref: r }));
      });
    e.s(
      [
        "Arrow",
        0,
        D,
        "Content",
        0,
        L,
        "Portal",
        0,
        (e) => {
          let { __scopeTooltip: t, forceMount: r, children: i, container: o } = e,
            s = k(P, t);
          return (0, n.createElement)(
            F,
            { scope: t, forceMount: r },
            (0, n.createElement)(
              h.Presence,
              { present: r || s.open },
              (0, n.createElement)(d, { asChild: !0, container: o }, i)
            )
          );
        },
        "Provider",
        0,
        E,
        "Root",
        0,
        (e) => {
          let {
              __scopeTooltip: t,
              children: r,
              open: i,
              defaultOpen: o = !1,
              onOpenChange: s,
              disableHoverableContent: u,
              delayDuration: c,
            } = e,
            d = w(C, e.__scopeTooltip),
            h = b(t),
            [p, f] = (0, n.useState)(null),
            m = (0, l.useId)(),
            v = (0, n.useRef)(0),
            y = null != u ? u : d.disableHoverableContent,
            _ = null != c ? c : d.delayDuration,
            S = (0, n.useRef)(!1),
            [E = !1, k] = (0, g.useControllableState)({
              prop: i,
              defaultProp: o,
              onChange: (e) => {
                (e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(x))) : d.onClose(),
                  null == s || s(e));
              },
            }),
            R = (0, n.useMemo)(
              () => (E ? (S.current ? "delayed-open" : "instant-open") : "closed"),
              [E]
            ),
            j = (0, n.useCallback)(() => {
              (window.clearTimeout(v.current), (S.current = !1), k(!0));
            }, [k]),
            P = (0, n.useCallback)(() => {
              (window.clearTimeout(v.current), k(!1));
            }, [k]),
            F = (0, n.useCallback)(() => {
              (window.clearTimeout(v.current),
                (v.current = window.setTimeout(() => {
                  ((S.current = !0), k(!0));
                }, _)));
            }, [_, k]);
          return (
            (0, n.useEffect)(() => () => window.clearTimeout(v.current), []),
            (0, n.createElement)(
              a.Root,
              h,
              (0, n.createElement)(
                T,
                {
                  scope: t,
                  contentId: m,
                  open: E,
                  stateAttribute: R,
                  trigger: p,
                  onTriggerChange: f,
                  onTriggerEnter: (0, n.useCallback)(() => {
                    d.isOpenDelayed ? F() : j();
                  }, [d.isOpenDelayed, F, j]),
                  onTriggerLeave: (0, n.useCallback)(() => {
                    y ? P() : window.clearTimeout(v.current);
                  }, [P, y]),
                  onOpen: j,
                  onClose: P,
                  disableHoverableContent: y,
                },
                r
              )
            )
          );
        },
        "TooltipProvider",
        0,
        E,
        "Trigger",
        0,
        j,
        "createTooltipScope",
        0,
        _,
      ],
      988138
    );
  },
  528773,
  (e) => {
    "use strict";
    var t,
      n = e.i(821410);
    let r = n.EMBED_LIB_URL,
      i = `${n.WEBAPP_URL}/embed/preview.html`;
    var o = (((t = {}).auto = "auto"), (t.light = "light"), (t.dark = "dark"), t);
    e.s(["EMBED_PREVIEW_HTML_URL", 0, i, "EmbedTheme", () => o, "embedLibUrl", 0, r]);
  },
  516015,
  (e, t, n) => {},
  898547,
  (e, t, n) => {
    var r = e.i(247167);
    e.r(516015);
    var i = e.r(271645),
      o = i && "object" == typeof i && "default" in i ? i : { default: i },
      s = void 0 !== r.default && r.default.env && !0,
      l = function (e) {
        return "[object String]" === Object.prototype.toString.call(e);
      },
      a = (function () {
        function e(e) {
          var t = void 0 === e ? {} : e,
            n = t.name,
            r = void 0 === n ? "stylesheet" : n,
            i = t.optimizeForSpeed,
            o = void 0 === i ? s : i;
          (u(l(r), "`name` must be a string"),
            (this._name = r),
            (this._deletedRulePlaceholder = "#" + r + "-deleted-rule____{}"),
            u("boolean" == typeof o, "`optimizeForSpeed` must be a boolean"),
            (this._optimizeForSpeed = o),
            (this._serverSheet = void 0),
            (this._tags = []),
            (this._injected = !1),
            (this._rulesCount = 0));
          var a = "u" > typeof window && document.querySelector('meta[property="csp-nonce"]');
          this._nonce = a ? a.getAttribute("content") : null;
        }
        var t,
          n = e.prototype;
        return (
          (n.setOptimizeForSpeed = function (e) {
            (u("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"),
              u(
                0 === this._rulesCount,
                "optimizeForSpeed cannot be when rules have already been inserted"
              ),
              this.flush(),
              (this._optimizeForSpeed = e),
              this.inject());
          }),
          (n.isOptimizeForSpeed = function () {
            return this._optimizeForSpeed;
          }),
          (n.inject = function () {
            var e = this;
            if (
              (u(!this._injected, "sheet already injected"),
              (this._injected = !0),
              "u" > typeof window && this._optimizeForSpeed)
            ) {
              ((this._tags[0] = this.makeStyleTag(this._name)),
                (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                this._optimizeForSpeed ||
                  (s ||
                    console.warn(
                      "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                    ),
                  this.flush(),
                  (this._injected = !0)));
              return;
            }
            this._serverSheet = {
              cssRules: [],
              insertRule: function (t, n) {
                return (
                  "number" == typeof n
                    ? (e._serverSheet.cssRules[n] = { cssText: t })
                    : e._serverSheet.cssRules.push({ cssText: t }),
                  n
                );
              },
              deleteRule: function (t) {
                e._serverSheet.cssRules[t] = null;
              },
            };
          }),
          (n.getSheetForTag = function (e) {
            if (e.sheet) return e.sheet;
            for (var t = 0; t < document.styleSheets.length; t++)
              if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
          }),
          (n.getSheet = function () {
            return this.getSheetForTag(this._tags[this._tags.length - 1]);
          }),
          (n.insertRule = function (e, t) {
            if ((u(l(e), "`insertRule` accepts only strings"), "u" < typeof window))
              return (
                "number" != typeof t && (t = this._serverSheet.cssRules.length),
                this._serverSheet.insertRule(e, t),
                this._rulesCount++
              );
            if (this._optimizeForSpeed) {
              var n = this.getSheet();
              "number" != typeof t && (t = n.cssRules.length);
              try {
                n.insertRule(e, t);
              } catch (t) {
                return (
                  s ||
                    console.warn(
                      "StyleSheet: illegal rule: \n\n" +
                        e +
                        "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                    ),
                  -1
                );
              }
            } else {
              var r = this._tags[t];
              this._tags.push(this.makeStyleTag(this._name, e, r));
            }
            return this._rulesCount++;
          }),
          (n.replaceRule = function (e, t) {
            if (this._optimizeForSpeed || "u" < typeof window) {
              var n = "u" > typeof window ? this.getSheet() : this._serverSheet;
              if ((t.trim() || (t = this._deletedRulePlaceholder), !n.cssRules[e])) return e;
              n.deleteRule(e);
              try {
                n.insertRule(t, e);
              } catch (r) {
                (s ||
                  console.warn(
                    "StyleSheet: illegal rule: \n\n" +
                      t +
                      "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                  ),
                  n.insertRule(this._deletedRulePlaceholder, e));
              }
            } else {
              var r = this._tags[e];
              (u(r, "old rule at index `" + e + "` not found"), (r.textContent = t));
            }
            return e;
          }),
          (n.deleteRule = function (e) {
            if ("u" < typeof window) return void this._serverSheet.deleteRule(e);
            if (this._optimizeForSpeed) this.replaceRule(e, "");
            else {
              var t = this._tags[e];
              (u(t, "rule at index `" + e + "` not found"),
                t.parentNode.removeChild(t),
                (this._tags[e] = null));
            }
          }),
          (n.flush = function () {
            ((this._injected = !1),
              (this._rulesCount = 0),
              "u" > typeof window
                ? (this._tags.forEach(function (e) {
                    return e && e.parentNode.removeChild(e);
                  }),
                  (this._tags = []))
                : (this._serverSheet.cssRules = []));
          }),
          (n.cssRules = function () {
            var e = this;
            return "u" < typeof window
              ? this._serverSheet.cssRules
              : this._tags.reduce(function (t, n) {
                  return (
                    n
                      ? (t = t.concat(
                          Array.prototype.map.call(e.getSheetForTag(n).cssRules, function (t) {
                            return t.cssText === e._deletedRulePlaceholder ? null : t;
                          })
                        ))
                      : t.push(null),
                    t
                  );
                }, []);
          }),
          (n.makeStyleTag = function (e, t, n) {
            t && u(l(t), "makeStyleTag accepts only strings as second parameter");
            var r = document.createElement("style");
            (this._nonce && r.setAttribute("nonce", this._nonce),
              (r.type = "text/css"),
              r.setAttribute("data-" + e, ""),
              t && r.appendChild(document.createTextNode(t)));
            var i = document.head || document.getElementsByTagName("head")[0];
            return (n ? i.insertBefore(r, n) : i.appendChild(r), r);
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
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              ((r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r));
            }
          })(e.prototype, t),
          e
        );
      })();
    function u(e, t) {
      if (!e) throw Error("StyleSheet: " + t + ".");
    }
    var c = function (e) {
        for (var t = 5381, n = e.length; n; ) t = (33 * t) ^ e.charCodeAt(--n);
        return t >>> 0;
      },
      d = {};
    function h(e, t) {
      if (!t) return "jsx-" + e;
      var n = String(t),
        r = e + n;
      return (d[r] || (d[r] = "jsx-" + c(e + "-" + n)), d[r]);
    }
    function p(e, t) {
      "u" < typeof window && (t = t.replace(/\/style/gi, "\\/style"));
      var n = e + t;
      return (d[n] || (d[n] = t.replace(/__jsx-style-dynamic-selector/g, e)), d[n]);
    }
    var f = (function () {
        function e(e) {
          var t = void 0 === e ? {} : e,
            n = t.styleSheet,
            r = void 0 === n ? null : n,
            i = t.optimizeForSpeed,
            o = void 0 !== i && i;
          ((this._sheet = r || new a({ name: "styled-jsx", optimizeForSpeed: o })),
            this._sheet.inject(),
            r &&
              "boolean" == typeof o &&
              (this._sheet.setOptimizeForSpeed(o),
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
            var n = this.getIdAndRules(e),
              r = n.styleId,
              i = n.rules;
            if (r in this._instancesCounts) {
              this._instancesCounts[r] += 1;
              return;
            }
            var o = i
              .map(function (e) {
                return t._sheet.insertRule(e);
              })
              .filter(function (e) {
                return -1 !== e;
              });
            ((this._indices[r] = o), (this._instancesCounts[r] = 1));
          }),
          (t.remove = function (e) {
            var t = this,
              n = this.getIdAndRules(e).styleId;
            if (
              ((function (e, t) {
                if (!e) throw Error("StyleSheetRegistry: " + t + ".");
              })(n in this._instancesCounts, "styleId: `" + n + "` not found"),
              (this._instancesCounts[n] -= 1),
              this._instancesCounts[n] < 1)
            ) {
              var r = this._fromServer && this._fromServer[n];
              (r
                ? (r.parentNode.removeChild(r), delete this._fromServer[n])
                : (this._indices[n].forEach(function (e) {
                    return t._sheet.deleteRule(e);
                  }),
                  delete this._indices[n]),
                delete this._instancesCounts[n]);
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
              n = this._sheet.cssRules();
            return t.concat(
              Object.keys(this._indices)
                .map(function (t) {
                  return [
                    t,
                    e._indices[t]
                      .map(function (e) {
                        return n[e].cssText;
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
            var t, n;
            return (
              (t = this.cssRules()),
              void 0 === (n = e) && (n = {}),
              t.map(function (e) {
                var t = e[0],
                  r = e[1];
                return o.default.createElement("style", {
                  id: "__" + t,
                  key: "__" + t,
                  nonce: n.nonce ? n.nonce : void 0,
                  dangerouslySetInnerHTML: { __html: r },
                });
              })
            );
          }),
          (t.getIdAndRules = function (e) {
            var t = e.children,
              n = e.dynamic,
              r = e.id;
            if (n) {
              var i = h(r, n);
              return {
                styleId: i,
                rules: Array.isArray(t)
                  ? t.map(function (e) {
                      return p(i, e);
                    })
                  : [p(i, t)],
              };
            }
            return { styleId: h(r), rules: Array.isArray(t) ? t : [t] };
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
      m = i.createContext(null);
    function g() {
      return new f();
    }
    function v() {
      return i.useContext(m);
    }
    m.displayName = "StyleSheetContext";
    var y = o.default.useInsertionEffect || o.default.useLayoutEffect,
      _ = "u" > typeof window ? g() : void 0;
    function b(e) {
      var t = _ || v();
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
      (n.StyleRegistry = function (e) {
        var t = e.registry,
          n = e.children,
          r = i.useContext(m),
          s = i.useState(function () {
            return r || t || g();
          })[0];
        return o.default.createElement(m.Provider, { value: s }, n);
      }),
      (n.createStyleRegistry = g),
      (n.style = b),
      (n.useStyleRegistry = v));
  },
  437902,
  (e, t, n) => {
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
      n = e.i(273446);
    let r = {
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
    (t.default.env.NEXT_PUBLIC_IS_E2E && ((r.organizations = !0), (r.teams = !0)),
      e.s([
        "useFlags",
        0,
        function () {
          return n.trpc.viewer.features.map.useQuery().data ?? r;
        },
      ]));
  },
  842589,
  (e) => {
    "use strict";
    var t = e.i(843476);
    e.i(436864);
    var n = e.i(621918),
      r = e.i(437902),
      i = e.i(270236),
      o = e.i(117032),
      s = e.i(247167),
      l = e.i(770703),
      a = e.i(271645);
    let u = s.default.env.NEXT_PUBLIC_HELPSCOUT_KEY
        ? (0, l.default)(() => e.A(14723), { loadableGenerated: { modules: [131452] } })
        : a.Fragment,
      c = (0, l.default)(() => e.A(771570), { loadableGenerated: { modules: [453618] }, ssr: !1 });
    var d = e.i(478052),
      h = e.i(173233),
      p = e.i(618566);
    let f = ["/auth/setup"];
    function m(e) {
      let t = new URLSearchParams(e),
        n = Array.from(t.entries());
      return (
        n.forEach(([e]) => t.delete(e)),
        n
          .sort(([e], [t]) => ("uid" === e ? -1 : "uid" === t ? 1 : e.localeCompare(t)))
          .forEach(([e, n]) => t.append(e, n)),
        t
      );
    }
    var g = e.i(186336),
      v = e.i(988138),
      y = e.i(217255),
      _ = e.i(278587),
      b = e.i(924540),
      x = e.i(784150);
    function S() {
      ((0, b.c)("[nuqs] Aborting queues"),
        x.t.abortAll(),
        x.n.abort().forEach((e) => x.t.queuedQuerySync.emit(e)));
    }
    let w = 0;
    function E() {
      ((w = 0), S());
    }
    function C() {
      --w <= 0 && ((w = 0), queueMicrotask(S));
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
                n = history.pushState;
              ((history.replaceState = function (e, n, r) {
                return (C(), t.call(history, e, n, r));
              }),
                (history.pushState = function (e, t, r) {
                  return (C(), n.call(history, e, t, r));
                }),
                (history.nuqs = history.nuqs ?? { version: "2.8.2", adapters: [] }),
                history.nuqs.adapters.push("next/app"));
            })(),
            window.addEventListener("popstate", E),
            () => window.removeEventListener("popstate", E)
          ),
          []
        ),
        null
      );
    }
    let k = (0, b.n)(function () {
      let e = (0, p.useRouter)(),
        [t, n] = (0, a.useOptimistic)((0, p.useSearchParams)());
      return {
        searchParams: t,
        updateUrl: (0, a.useCallback)((t, r) => {
          (0, a.startTransition)(() => {
            r.shallow || n(t);
            let i = (function (e) {
              let { origin: t, pathname: n, hash: r } = location;
              return t + n + (0, b.o)(e) + r;
            })(t);
            (0, b.c)("[nuqs next/app] Updating url: %s", i);
            let o = "push" === r.history ? history.pushState : history.replaceState;
            ((w = 3),
              o.call(history, null, "", i),
              r.scroll && window.scrollTo(0, 0),
              r.shallow || e.replace(i, { scroll: !1 }));
          });
        }, []),
        rateLimitFactor: 3,
        autoResetQueueOnUpdate: !1,
      };
    });
    function R({ children: e, ...t }) {
      return (0, a.createElement)(k, {
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
    let j = (0, l.default)(() => e.A(667579), {
        loadableGenerated: { modules: [132693] },
        ssr: !1,
      }),
      P = (0, l.default)(() => e.A(321994), { loadableGenerated: { modules: [17567] } });
    var F = e.i(50270),
      z = e.i(528773),
      A = e.i(327211);
    let L = new Set(["booking", "d", "forms", "success"]),
      O = (e) => {
        let n,
          i = (0, p.useSearchParams)(),
          o = i ? window.getEmbedNamespace() : null,
          s = "string" == typeof o,
          l = (0, p.usePathname)();
        if (
          !s &&
          e.isBookingPage &&
          (n = l?.split("/").filter(Boolean) ?? []).length &&
          "embed" !== n.at(-1) &&
          ("team" === n[0]
            ? n.length >= 3
            : "org" === n[0] && "team" === n[2]
              ? n.length >= 5
              : "org" === n[0]
                ? n.length >= 4
                : !L.has(n[0]) && n.length >= 2)
        )
          return (0, t.jsx)(t.Fragment, { children: e.children });
        let { key: a, ...u } = (function ({
          props: e,
          isEmbedMode: t,
          embedNamespace: n,
          pathname: r,
          searchParams: i,
        }) {
          let o = e.isBookingPage
              ? "bookingConfigured"
              : !1 === e.isThemeSupported
                ? "none"
                : "appConfigured",
            s = i?.get("theme") ?? "",
            l = F.z.enum(["light", "dark", "system", "auto"]).safeParse(s),
            a = s.length > 0 && !l.success,
            u = "none" === o || a ? "light" : void 0;
          if (u)
            return {
              key: "forcedThemeKey",
              storageKey: "forcedThemeKey",
              forcedTheme: u,
              attribute: "class",
              nonce: e.nonce,
              enableColorScheme: !1,
              enableSystem: "none" !== o,
            };
          let c = "bookingConfigured" === o,
            d = r
              ? (function ({ pathname: e }) {
                  if ("/" === e) return "/";
                  let t = e.split("/").slice(1),
                    n = "team" === t[0],
                    r = "forms" === t[0],
                    i = "d" === t[0],
                    o = t[0].toLowerCase().split(/\+|%2B/).length > 1;
                  return r || i ? t[1] : o ? t[0] : n ? t[1] : t[0];
                })({ pathname: r })
              : null;
          (c || t) &&
            !d &&
            console.error("`themeBasis` is nullish. This should not happen.", { pathname: r });
          let h = d ? `:${d}` : "",
            p = t && s && s !== z.EmbedTheme.auto ? `:${s}` : "",
            f = t
              ? `embed-theme-${n ?? ""}${h}${p}`
              : "appConfigured" === o
                ? "app-theme"
                : c
                  ? `booking-theme${h}`
                  : void 0,
            m = f ? (0, A.sanitizeThemeStorageKey)(f) : f,
            g = i?.get("onboardingEmbed") === "true";
          return {
            storageKey: m,
            forcedTheme:
              (t || g) && l.success && "auto" !== l.data && "system" !== l.data ? l.data : void 0,
            nonce: e.nonce,
            enableColorScheme: !1,
            enableSystem: "none" !== o,
            key: m,
            attribute: "class",
          };
        })({ props: e, isEmbedMode: s, embedNamespace: o, pathname: l, searchParams: i });
        return (0, t.jsxs)(
          _.ThemeProvider,
          {
            ...u,
            children: [
              !s &&
                (0, t.jsx)(r.default, {
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
    function I({ children: e }) {
      let n = (0, d.useFlags)();
      return (0, t.jsx)(o.FeatureProvider, { value: n, children: e });
    }
    function B({ children: e }) {
      let n,
        r = ((n = (0, y.useSession)()), n?.data?.user.org);
      return (0, t.jsx)(i.OrgBrandingProvider, { value: { orgBrand: r }, children: e });
    }
    let q = (e) => {
      let n,
        r,
        i,
        o = (0, h.default)(),
        s = ((n = (0, p.usePathname)()), !f.some((e) => n?.startsWith(e))),
        l =
          ((r = (0, p.usePathname)()),
          (i = r?.startsWith("/bookings/")),
          (0, a.useMemo)(() => (i ? { processUrlSearchParams: m } : {}), [i])),
        d = (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(g.TooltipProvider, {
            children: (0, t.jsx)(v.TooltipProvider, {
              children: (0, t.jsx)(O, {
                nonce: e.nonce,
                isThemeSupported: s,
                isBookingPage: e.isBookingPage || o,
                children: (0, t.jsx)(R, {
                  ...l,
                  children: (0, t.jsx)(I, {
                    children:
                      e.isBookingPage || o
                        ? (0, t.jsx)(B, { children: e.children })
                        : (0, t.jsx)(c, { children: (0, t.jsx)(B, { children: e.children }) }),
                  }),
                }),
              }),
            }),
          }),
        });
      return e.isBookingPage || o
        ? d
        : (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)(u, {
              children: (0, t.jsxs)(P, { children: [(0, t.jsx)(j, {}), d] }),
            }),
          });
    };
    e.s(
      [
        "default",
        0,
        function (e) {
          let r = e.nonce ? "" : void 0,
            i = { ...e, nonce: r };
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)(q, {
              ...i,
              children: (0, t.jsx)(t.Fragment, {
                children: e.requiresLicense
                  ? (0, t.jsx)(n.default, { children: e.children })
                  : (0, t.jsx)(t.Fragment, { children: e.children }),
              }),
            }),
          });
        },
      ],
      842589
    );
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
