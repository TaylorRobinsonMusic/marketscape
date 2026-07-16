(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  755838,
  (e, t, n) => {
    "use strict";
    var r = e.r(271645),
      i =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
            },
      s = r.useState,
      u = r.useEffect,
      o = r.useLayoutEffect,
      a = r.useDebugValue;
    function l(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !i(e, n);
      } catch (e) {
        return !0;
      }
    }
    var c =
      "u" < typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
            return t();
          }
        : function (e, t) {
            var n = t(),
              r = s({ inst: { value: n, getSnapshot: t } }),
              i = r[0].inst,
              c = r[1];
            return (
              o(
                function () {
                  ((i.value = n), (i.getSnapshot = t), l(i) && c({ inst: i }));
                },
                [e, n, t]
              ),
              u(
                function () {
                  return (
                    l(i) && c({ inst: i }),
                    e(function () {
                      l(i) && c({ inst: i });
                    })
                  );
                },
                [e]
              ),
              a(n),
              n
            );
          };
    n.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c;
  },
  802239,
  (e, t, n) => {
    "use strict";
    t.exports = e.r(755838);
  },
  449055,
  (e) => {
    "use strict";
    e.s([
      "ARROW_DOWN",
      0,
      "ArrowDown",
      "ARROW_LEFT",
      0,
      "ArrowLeft",
      "ARROW_RIGHT",
      0,
      "ArrowRight",
      "ARROW_UP",
      0,
      "ArrowUp",
      "FOCUSABLE_ATTRIBUTE",
      0,
      "data-base-ui-focusable",
      "TYPEABLE_SELECTOR",
      0,
      "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])",
    ]);
  },
  222178,
  (e) => {
    "use strict";
    var t = e.i(958321);
    e.s([
      "inertValue",
      0,
      function (e) {
        return (0, t.isReactVersionAtLeast)(19) ? e : e ? "true" : void 0;
      },
    ]);
  },
  343084,
  (e) => {
    "use strict";
    let t = ["top", "right", "bottom", "left"],
      n = t.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
      r = Math.min,
      i = Math.max,
      s = Math.round,
      u = Math.floor,
      o = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function a(e) {
      return e.split("-")[0];
    }
    function l(e) {
      return e.split("-")[1];
    }
    function c(e) {
      return "x" === e ? "y" : "x";
    }
    function d(e) {
      return "y" === e ? "height" : "width";
    }
    function f(e) {
      let t = e[0];
      return "t" === t || "b" === t ? "y" : "x";
    }
    function h(e) {
      return c(f(e));
    }
    function p(e) {
      return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
    }
    let g = ["left", "right"],
      b = ["right", "left"],
      m = ["top", "bottom"],
      E = ["bottom", "top"];
    function v(e) {
      let t = a(e);
      return o[t] + e.slice(t.length);
    }
    e.s([
      "clamp",
      0,
      function (e, t, n) {
        return i(e, r(t, n));
      },
      "createCoords",
      0,
      (e) => ({ x: e, y: e }),
      "evaluate",
      0,
      function (e, t) {
        return "function" == typeof e ? e(t) : e;
      },
      "floor",
      0,
      u,
      "getAlignment",
      0,
      l,
      "getAlignmentAxis",
      0,
      h,
      "getAlignmentSides",
      0,
      function (e, t, n) {
        void 0 === n && (n = !1);
        let r = l(e),
          i = h(e),
          s = d(i),
          u =
            "x" === i
              ? r === (n ? "end" : "start")
                ? "right"
                : "left"
              : "start" === r
                ? "bottom"
                : "top";
        return (t.reference[s] > t.floating[s] && (u = v(u)), [u, v(u)]);
      },
      "getAxisLength",
      0,
      d,
      "getExpandedPlacements",
      0,
      function (e) {
        let t = v(e);
        return [p(e), t, p(t)];
      },
      "getOppositeAlignmentPlacement",
      0,
      p,
      "getOppositeAxis",
      0,
      c,
      "getOppositeAxisPlacements",
      0,
      function (e, t, n, r) {
        let i = l(e),
          s = (function (e, t, n) {
            switch (e) {
              case "top":
              case "bottom":
                if (n) return t ? b : g;
                return t ? g : b;
              case "left":
              case "right":
                return t ? m : E;
              default:
                return [];
            }
          })(a(e), "start" === n, r);
        return (i && ((s = s.map((e) => e + "-" + i)), t && (s = s.concat(s.map(p)))), s);
      },
      "getOppositePlacement",
      0,
      v,
      "getPaddingObject",
      0,
      function (e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      },
      "getSide",
      0,
      a,
      "getSideAxis",
      0,
      f,
      "max",
      0,
      i,
      "min",
      0,
      r,
      "placements",
      0,
      n,
      "rectToClientRect",
      0,
      function (e) {
        let { x: t, y: n, width: r, height: i } = e;
        return { width: r, height: i, top: n, left: t, right: t + r, bottom: n + i, x: t, y: n };
      },
      "round",
      0,
      s,
      "sides",
      0,
      t,
    ]);
  },
  621082,
  (e) => {
    "use strict";
    var t = e.i(343084),
      n = e.i(229315),
      r = e.i(157940),
      i = e.i(449055);
    function s(e, t, n) {
      return Math.floor(e / t) !== n;
    }
    function u(e, t) {
      return t < 0 || t >= e.length;
    }
    function o(
      e,
      { startingIndex: t = -1, decrement: n = !1, disabledIndices: r, amount: i = 1 } = {}
    ) {
      let s = t;
      do s += n ? -i : i;
      while (s >= 0 && s <= e.length - 1 && a(e, s, r));
      return s;
    }
    function a(e, t, n) {
      if ("function" == typeof n ? n(t) : (n?.includes(t) ?? !1)) return !0;
      let r = e[t];
      return (
        !!r &&
        (!l(r) ||
          (!n && (r.hasAttribute("disabled") || "true" === r.getAttribute("aria-disabled"))))
      );
    }
    function l(e, t = e ? (0, n.getComputedStyle)(e) : null) {
      var r;
      return (
        !!e &&
        !!e.isConnected &&
        !!t &&
        "hidden" !== (r = t).visibility &&
        "collapse" !== r.visibility &&
        ("function" == typeof e.checkVisibility
          ? e.checkVisibility()
          : "none" !== t.display && "contents" !== t.display)
      );
    }
    e.s([
      "findNonDisabledListIndex",
      0,
      o,
      "getGridNavigatedIndex",
      0,
      function (
        e,
        {
          event: n,
          orientation: l,
          loopFocus: c,
          onLoop: d,
          rtl: f,
          cols: h,
          disabledIndices: p,
          minIndex: g,
          maxIndex: b,
          prevIndex: m,
          stopEvent: E = !1,
        }
      ) {
        let v,
          S = m;
        if ((n.key === i.ARROW_UP ? (v = "up") : n.key === i.ARROW_DOWN && (v = "down"), v)) {
          let i = [],
            s = [],
            l = !1,
            f = 0;
          {
            let t = null,
              n = -1;
            e.forEach((e, r) => {
              if (null == e) return;
              f += 1;
              let u = e.closest('[role="row"]');
              (u && (l = !0),
                (u !== t || -1 === n) && ((t = u), (i[(n += 1)] = [])),
                i[n].push(r),
                (s[r] = n));
            });
          }
          let y = !1,
            x = 0;
          if (l)
            for (let e of i) {
              let t = e.length;
              (t > x && (x = t), t !== h && (y = !0));
            }
          let I = y && f < e.length,
            R = x || h;
          E && (0, r.stopEvent)(n);
          let A =
            ((t) => {
              if (!y || -1 === m) return;
              let r = s[m];
              if (null == r) return;
              let u = i[r].indexOf(m),
                o = "up" === t ? -1 : 1;
              for (let t = r + o, l = 0; l < i.length; l += 1, t += o) {
                if (t < 0 || t >= i.length) {
                  if (!c || I) return;
                  if (((t = t < 0 ? i.length - 1 : 0), d)) {
                    let e = Math.min(u, i[t].length - 1);
                    t = s[d(n, m, i[t][e] ?? i[t][0])] ?? t;
                  }
                }
                let r = i[t];
                for (let t = Math.min(u, r.length - 1); t >= 0; t -= 1) {
                  let n = r[t];
                  if (!a(e, n, p)) return n;
                }
              }
            })(v) ??
            ((n) => {
              if (!I || -1 === m) return;
              let r = m % R,
                i = "up" === n ? -R : R,
                s = b - (b % R),
                u = (0, t.floor)(b / R) + 1;
              for (let t = m - r + i, n = 0; n < u; n += 1, t += i) {
                if (t < 0 || t > b) {
                  if (!c) return;
                  t = t < 0 ? s : 0;
                }
                let n = Math.min(t + R - 1, b);
                for (let i = Math.min(t + r, n); i >= t; i -= 1) if (!a(e, i, p)) return i;
              }
            })(v);
          if (void 0 !== A) S = A;
          else if (-1 === m) S = "up" === v ? b : g;
          else if (
            ((S = o(e, { startingIndex: m, amount: R, decrement: "up" === v, disabledIndices: p })),
            c)
          ) {
            if ("up" === v && (m - R < g || S < 0)) {
              let e = m % R,
                t = b % R,
                r = b - (t - e);
              ((S = t === e ? b : t > e ? r : r - R), d && (S = d(n, m, S)));
            }
            "down" === v &&
              m + R > b &&
              ((S = o(e, { startingIndex: (m % R) - R, amount: R, disabledIndices: p })),
              d && (S = d(n, m, S)));
          }
          u(e, S) && (S = m);
        }
        if ("both" === l) {
          let a = (0, t.floor)(m / h);
          (n.key === (f ? i.ARROW_LEFT : i.ARROW_RIGHT) &&
            (E && (0, r.stopEvent)(n),
            m % h != h - 1
              ? ((S = o(e, { startingIndex: m, disabledIndices: p })),
                c &&
                  s(S, h, a) &&
                  ((S = o(e, { startingIndex: m - (m % h) - 1, disabledIndices: p })),
                  d && (S = d(n, m, S))))
              : c &&
                ((S = o(e, { startingIndex: m - (m % h) - 1, disabledIndices: p })),
                d && (S = d(n, m, S))),
            s(S, h, a) && (S = m)),
            n.key === (f ? i.ARROW_RIGHT : i.ARROW_LEFT) &&
              (E && (0, r.stopEvent)(n),
              m % h != 0
                ? ((S = o(e, { startingIndex: m, decrement: !0, disabledIndices: p })),
                  c &&
                    s(S, h, a) &&
                    ((S = o(e, {
                      startingIndex: m + (h - (m % h)),
                      decrement: !0,
                      disabledIndices: p,
                    })),
                    d && (S = d(n, m, S))))
                : c &&
                  ((S = o(e, {
                    startingIndex: m + (h - (m % h)),
                    decrement: !0,
                    disabledIndices: p,
                  })),
                  d && (S = d(n, m, S))),
              s(S, h, a) && (S = m)));
          let l = (0, t.floor)(b / h) === a;
          u(e, S) &&
            (c && l
              ? ((S =
                  n.key === (f ? i.ARROW_RIGHT : i.ARROW_LEFT)
                    ? b
                    : o(e, { startingIndex: m - (m % h) - 1, disabledIndices: p })),
                d && (S = d(n, m, S)))
              : (S = m));
        }
        return S;
      },
      "getMaxListIndex",
      0,
      function (e, t) {
        return o(e.current, { decrement: !0, startingIndex: e.current.length, disabledIndices: t });
      },
      "getMinListIndex",
      0,
      function (e, t) {
        return o(e.current, { disabledIndices: t });
      },
      "isElementVisible",
      0,
      l,
      "isIndexOutOfListBounds",
      0,
      u,
      "isListIndexDisabled",
      0,
      a,
    ]);
  },
  209407,
  (e) => {
    "use strict";
    var t;
    let n =
        (((t = {}).startingStyle = "data-starting-style"),
        (t.endingStyle = "data-ending-style"),
        t),
      r = { [n.startingStyle]: "" },
      i = { [n.endingStyle]: "" };
    e.s([
      "TransitionStatusDataAttributes",
      0,
      n,
      "transitionStatusMapping",
      0,
      { transitionStatus: (e) => ("starting" === e ? r : "ending" === e ? i : null) },
    ]);
  },
  708445,
  (e) => {
    "use strict";
    var t = e.i(388940),
      n = e.i(626300);
    let r = new (class {
      callbacks = [];
      callbacksCount = 0;
      nextId = 1;
      startId = 1;
      isScheduled = !1;
      tick = (e) => {
        this.isScheduled = !1;
        let t = this.callbacks,
          n = this.callbacksCount;
        if (((this.callbacks = []), (this.callbacksCount = 0), (this.startId = this.nextId), n > 0))
          for (let n = 0; n < t.length; n += 1) t[n]?.(e);
      };
      request(e) {
        let t = this.nextId;
        return (
          (this.nextId += 1),
          this.callbacks.push(e),
          (this.callbacksCount += 1),
          this.isScheduled || (requestAnimationFrame(this.tick), (this.isScheduled = !0)),
          t
        );
      }
      cancel(e) {
        let t = e - this.startId;
        t < 0 ||
          t >= this.callbacks.length ||
          ((this.callbacks[t] = null), (this.callbacksCount -= 1));
      }
    })();
    class i {
      static create() {
        return new i();
      }
      static request(e) {
        return r.request(e);
      }
      static cancel(e) {
        return r.cancel(e);
      }
      currentId = null;
      request(e) {
        (this.cancel(),
          (this.currentId = r.request(() => {
            ((this.currentId = null), e());
          })));
      }
      cancel = () => {
        null !== this.currentId && (r.cancel(this.currentId), (this.currentId = null));
      };
      disposeEffect = () => this.cancel;
    }
    e.s([
      "AnimationFrame",
      0,
      i,
      "useAnimationFrame",
      0,
      function () {
        let e = (0, t.useRefWithInit)(i.create).current;
        return ((0, n.useOnMount)(e.disposeEffect), e);
      },
    ]);
  },
  594603,
  (e) => {
    "use strict";
    e.s([
      "resolveRef",
      0,
      function (e) {
        return null == e ? e : "current" in e ? e.current : e;
      },
    ]);
  },
  137584,
  222640,
  (e) => {
    "use strict";
    var t = e.i(271645),
      n = e.i(667865),
      r = e.i(174080),
      i = e.i(708445),
      s = e.i(594603),
      u = e.i(209407);
    function o(e, t = !1, a = !0) {
      let l = (0, i.useAnimationFrame)();
      return (0, n.useStableCallback)((n, i = null) => {
        l.cancel();
        let o = (0, s.resolveRef)(e);
        if (null == o) return;
        let c = () => {
          r.flushSync(n);
        };
        if ("function" != typeof o.getAnimations || globalThis.BASE_UI_ANIMATIONS_DISABLED)
          return void n();
        function d() {
          Promise.all(o.getAnimations().map((e) => e.finished))
            .then(() => {
              i?.aborted || c();
            })
            .catch(() => {
              if (a) {
                i?.aborted || c();
                return;
              }
              let e = o.getAnimations();
              !i?.aborted &&
                e.length > 0 &&
                e.some((e) => e.pending || "finished" !== e.playState) &&
                d();
            });
        }
        if (t) {
          let e = u.TransitionStatusDataAttributes.startingStyle;
          if (!o.hasAttribute(e)) return void l.request(d);
          let t = new MutationObserver(() => {
            o.hasAttribute(e) || (t.disconnect(), d());
          });
          return (
            t.observe(o, { attributes: !0, attributeFilter: [e] }),
            void i?.addEventListener("abort", () => t.disconnect(), { once: !0 })
          );
        }
        l.request(d);
      });
    }
    (e.s(["useAnimationsFinished", 0, o], 222640),
      e.s(
        [
          "useOpenChangeComplete",
          0,
          function (e) {
            let { enabled: r = !0, open: i, ref: s, onComplete: u } = e,
              a = (0, n.useStableCallback)(u),
              l = o(s, i, !1);
            t.useEffect(() => {
              if (!r) return;
              let e = new AbortController();
              return (
                l(a, e.signal),
                () => {
                  e.abort();
                }
              );
            }, [r, i, a, l]);
          },
        ],
        137584
      ));
  },
  108868,
  (e) => {
    "use strict";
    e.s([
      "ownerDocument",
      0,
      function (e) {
        return e?.ownerDocument || document;
      },
    ]);
  },
  675606,
  (e) => {
    "use strict";
    var t = e.i(956789);
    e.s([
      "createChangeEventDetails",
      0,
      function (e, n, r, i) {
        let s = !1,
          u = !1,
          o = i ?? t.EMPTY_OBJECT;
        return {
          reason: e,
          event: n ?? new Event("base-ui"),
          cancel() {
            s = !0;
          },
          allowPropagation() {
            u = !0;
          },
          get isCanceled() {
            return s;
          },
          get isPropagationAllowed() {
            return u;
          },
          trigger: r,
          ...o,
        };
      },
      "createGenericEventDetails",
      0,
      function (e, n, r) {
        let i = r ?? t.EMPTY_OBJECT;
        return { reason: e, event: n ?? new Event("base-ui"), ...i };
      },
    ]);
  },
  56434,
  (e) => {
    "use strict";
    e.s(
      [
        "cancelOpen",
        0,
        "cancel-open",
        "chipRemovePress",
        0,
        "chip-remove-press",
        "clearPress",
        0,
        "clear-press",
        "closePress",
        0,
        "close-press",
        "closeWatcher",
        0,
        "close-watcher",
        "decrementPress",
        0,
        "decrement-press",
        "disabled",
        0,
        "disabled",
        "drag",
        0,
        "drag",
        "escapeKey",
        0,
        "escape-key",
        "focusOut",
        0,
        "focus-out",
        "imperativeAction",
        0,
        "imperative-action",
        "incrementPress",
        0,
        "increment-press",
        "initial",
        0,
        "initial",
        "inputBlur",
        0,
        "input-blur",
        "inputChange",
        0,
        "input-change",
        "inputClear",
        0,
        "input-clear",
        "inputPaste",
        0,
        "input-paste",
        "inputPress",
        0,
        "input-press",
        "itemPress",
        0,
        "item-press",
        "keyboard",
        0,
        "keyboard",
        "linkPress",
        0,
        "link-press",
        "listNavigation",
        0,
        "list-navigation",
        "missing",
        0,
        "missing",
        "none",
        0,
        "none",
        "outsidePress",
        0,
        "outside-press",
        "pointer",
        0,
        "pointer",
        "scrub",
        0,
        "scrub",
        "siblingOpen",
        0,
        "sibling-open",
        "swipe",
        0,
        "swipe",
        "trackPress",
        0,
        "track-press",
        "triggerFocus",
        0,
        "trigger-focus",
        "triggerHover",
        0,
        "trigger-hover",
        "triggerPress",
        0,
        "trigger-press",
        "wheel",
        0,
        "wheel",
        "windowResize",
        0,
        "window-resize",
      ],
      216856
    );
    var t = e.i(216856);
    e.s(["REASONS", 0, t], 56434);
  },
  502077,
  (e) => {
    "use strict";
    let t = {
        clipPath: "inset(50%)",
        overflow: "hidden",
        whiteSpace: "nowrap",
        border: 0,
        padding: 0,
        width: 1,
        height: 1,
        margin: -1,
      },
      n = { ...t, position: "fixed", top: 0, left: 0 },
      r = { ...t, position: "absolute" };
    e.s(["visuallyHidden", 0, n, "visuallyHiddenInput", 0, r]);
  },
  333848,
  (e) => {
    "use strict";
    var t = e.i(229315);
    e.s(["ownerWindow", () => t.getWindow]);
  },
  157940,
  (e) => {
    "use strict";
    var t = e.i(328744);
    e.s([
      "isClickLikeEvent",
      0,
      function (e) {
        let t = e.type;
        return "click" === t || "mousedown" === t || "keydown" === t || "keyup" === t;
      },
      "isMouseLikePointerType",
      0,
      function (e, t) {
        let n = ["mouse", "pen"];
        return (t || n.push("", void 0), n.includes(e));
      },
      "isReactEvent",
      0,
      function (e) {
        return "nativeEvent" in e;
      },
      "isVirtualClick",
      0,
      function (e) {
        return (
          ("" === e.pointerType && !!e.isTrusted) ||
          (t.platform.os.android && e.pointerType
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)
        );
      },
      "isVirtualPointerEvent",
      0,
      function (e) {
        return (
          !t.platform.env.jsdom &&
          ((!t.platform.os.android && 0 === e.width && 0 === e.height) ||
            (t.platform.os.android &&
              1 === e.width &&
              1 === e.height &&
              0 === e.pressure &&
              0 === e.detail &&
              "mouse" === e.pointerType) ||
            (e.width < 1 &&
              e.height < 1 &&
              0 === e.pressure &&
              0 === e.detail &&
              "touch" === e.pointerType))
        );
      },
      "stopEvent",
      0,
      function (e) {
        (e.preventDefault(), e.stopPropagation());
      },
    ]);
  },
  446265,
  (e) => {
    "use strict";
    var t = e.i(146376),
      n = e.i(388940);
    function r(e) {
      let t = {
        current: e,
        next: e,
        effect: () => {
          t.current = t.next;
        },
      };
      return t;
    }
    e.s([
      "useValueAsRef",
      0,
      function (e) {
        let i = (0, n.useRefWithInit)(r, e).current;
        return ((i.next = e), (0, t.useIsoLayoutEffect)(i.effect), i);
      },
    ]);
  },
  752822,
  (e, t, n) => {
    "use strict";
    var r = e.r(271645),
      i = e.r(802239),
      s =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
            },
      u = i.useSyncExternalStore,
      o = r.useRef,
      a = r.useEffect,
      l = r.useMemo,
      c = r.useDebugValue;
    n.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
      var d = o(null);
      if (null === d.current) {
        var f = { hasValue: !1, value: null };
        d.current = f;
      } else f = d.current;
      var h = u(
        e,
        (d = l(
          function () {
            function e(e) {
              if (!a) {
                if (((a = !0), (u = e), (e = r(e)), void 0 !== i && f.hasValue)) {
                  var t = f.value;
                  if (i(t, e)) return (o = t);
                }
                return (o = e);
              }
              if (((t = o), s(u, e))) return t;
              var n = r(e);
              return void 0 !== i && i(t, n) ? ((u = e), t) : ((u = e), (o = n));
            }
            var u,
              o,
              a = !1,
              l = void 0 === n ? null : n;
            return [
              function () {
                return e(t());
              },
              null === l
                ? void 0
                : function () {
                    return e(l());
                  },
            ];
          },
          [t, n, r, i]
        ))[0],
        d[1]
      );
      return (
        a(
          function () {
            ((f.hasValue = !0), (f.value = h));
          },
          [h]
        ),
        c(h),
        h
      );
    };
  },
  430224,
  (e, t, n) => {
    "use strict";
    t.exports = e.r(752822);
  },
  896499,
  (e) => {
    "use strict";
    let t;
    var n = e.i(271645),
      r = e.i(388940);
    let i = [];
    function s(e) {
      let n = (n, s) => {
        let o,
          a = (0, r.useRefWithInit)(u).current;
        try {
          for (let e of ((t = a), i)) e.before(a);
          for (let t of ((o = e(n, s)), i)) t.after(a);
          a.didInitialize = !0;
        } finally {
          t = void 0;
        }
        return o;
      };
      return ((n.displayName = e.displayName || e.name), n);
    }
    function u() {
      return { didInitialize: !1 };
    }
    e.s([
      "fastComponent",
      0,
      s,
      "fastComponentRef",
      0,
      function (e) {
        return n.forwardRef(s(e));
      },
      "getInstance",
      0,
      function () {
        return t;
      },
      "register",
      0,
      function (e) {
        i.push(e);
      },
    ]);
  },
  714935,
  334346,
  (e) => {
    "use strict";
    var t = e.i(271645),
      n = e.i(802239),
      r = e.i(430224),
      i = e.i(958321),
      s = e.i(896499);
    let u = (0, i.isReactVersionAtLeast)(19)
      ? function (e, r, i, u, o) {
          let a,
            l = (0, s.getInstance)();
          if (!l) {
            let s;
            return (
              (s = t.useCallback(() => r(e.getSnapshot(), i, u, o), [e, r, i, u, o])),
              (0, n.useSyncExternalStore)(e.subscribe, s, s)
            );
          }
          let c = l.syncIndex;
          return (
            (l.syncIndex += 1),
            l.didInitialize
              ? ((a = l.syncHooks[c]).store === e &&
                  a.selector === r &&
                  Object.is(a.a1, i) &&
                  Object.is(a.a2, u) &&
                  Object.is(a.a3, o)) ||
                (a.store !== e && (l.didChangeStore = !0),
                (a.store = e),
                (a.selector = r),
                (a.a1 = i),
                (a.a2 = u),
                (a.a3 = o),
                (a.value = r(e.getSnapshot(), i, u, o)))
              : ((a = {
                  store: e,
                  selector: r,
                  a1: i,
                  a2: u,
                  a3: o,
                  value: r(e.getSnapshot(), i, u, o),
                }),
                l.syncHooks.push(a)),
            a.value
          );
        }
      : function (e, t, n, i, s) {
          return (0, r.useSyncExternalStoreWithSelector)(
            e.subscribe,
            e.getSnapshot,
            e.getSnapshot,
            (e) => t(e, n, i, s)
          );
        };
    function o(e, t, n, r, i) {
      return u(e, t, n, r, i);
    }
    ((0, s.register)({
      before(e) {
        ((e.syncIndex = 0),
          e.didInitialize ||
            ((e.syncTick = 1),
            (e.syncHooks = []),
            (e.didChangeStore = !0),
            (e.getSnapshot = () => {
              let t = !1;
              for (let n = 0; n < e.syncHooks.length; n += 1) {
                let r = e.syncHooks[n],
                  i = r.selector(r.store.state, r.a1, r.a2, r.a3);
                Object.is(r.value, i) || ((t = !0), (r.value = i));
              }
              return (t && (e.syncTick += 1), e.syncTick);
            })));
      },
      after(e) {
        e.syncHooks.length > 0 &&
          (e.didChangeStore &&
            ((e.didChangeStore = !1),
            (e.subscribe = (t) => {
              let n = new Set();
              for (let t of e.syncHooks) n.add(t.store);
              let r = [];
              for (let e of n) r.push(e.subscribe(t));
              return () => {
                for (let e of r) e();
              };
            })),
          (0, n.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getSnapshot));
      },
    }),
      e.s(["useStore", 0, o], 334346),
      e.s(
        [
          "Store",
          0,
          class {
            constructor(e) {
              ((this.state = e), (this.listeners = new Set()), (this.updateTick = 0));
            }
            subscribe = (e) => (
              this.listeners.add(e),
              () => {
                this.listeners.delete(e);
              }
            );
            getSnapshot = () => this.state;
            setState(e) {
              if (this.state === e) return;
              ((this.state = e), (this.updateTick += 1));
              let t = this.updateTick;
              for (let n of this.listeners) {
                if (t !== this.updateTick) return;
                n(e);
              }
            }
            update(e) {
              for (let t in e)
                if (!Object.is(this.state[t], e[t]))
                  return void this.setState({ ...this.state, ...e });
            }
            set(e, t) {
              Object.is(this.state[e], t) || this.setState({ ...this.state, [e]: t });
            }
            notifyAll() {
              let e = { ...this.state };
              this.setState(e);
            }
            use(e, t, n, r) {
              return o(this, e, t, n, r);
            }
          },
        ],
        714935
      ));
  },
  301252,
  (e) => {
    "use strict";
    var t = e.i(271645),
      n = e.i(714935),
      r = e.i(334346),
      i = e.i(667865),
      s = e.i(146376),
      u = e.i(956789);
    class o extends n.Store {
      constructor(e, t = {}, n) {
        (super(e), (this.context = t), (this.selectors = n));
      }
      useSyncedValue(e, n) {
        t.useDebugValue(e);
        let r = this;
        (0, s.useIsoLayoutEffect)(() => {
          r.state[e] !== n && r.set(e, n);
        }, [r, e, n]);
      }
      useSyncedValueWithCleanup(e, t) {
        let n = this;
        (0, s.useIsoLayoutEffect)(
          () => (
            n.state[e] !== t && n.set(e, t),
            () => {
              n.set(e, void 0);
            }
          ),
          [n, e, t]
        );
      }
      useSyncedValues(e) {
        let t = this,
          n = Object.values(e);
        (0, s.useIsoLayoutEffect)(() => {
          t.update(e);
        }, [t, ...n]);
      }
      useControlledProp(e, n) {
        t.useDebugValue(e);
        let r = this,
          i = void 0 !== n;
        (0, s.useIsoLayoutEffect)(() => {
          i && !Object.is(r.state[e], n) && r.setState({ ...r.state, [e]: n });
        }, [r, e, n, i]);
      }
      select(e, t, n, r) {
        return (0, this.selectors[e])(this.state, t, n, r);
      }
      useState(e, n, i, s) {
        return (t.useDebugValue(e), (0, r.useStore)(this, this.selectors[e], n, i, s));
      }
      useContextCallback(e, n) {
        t.useDebugValue(e);
        let r = (0, i.useStableCallback)(n ?? u.NOOP);
        this.context[e] = r;
      }
      useStateSetter(e) {
        let n = t.useRef(void 0);
        return (
          void 0 === n.current &&
            (n.current = (t) => {
              this.set(e, t);
            }),
          n.current
        );
      }
      observe(e, t) {
        let n,
          r = (n = "function" == typeof e ? e : this.selectors[e])(this.state);
        return (
          t(r, r, this),
          this.subscribe((e) => {
            let i = n(e);
            if (!Object.is(r, i)) {
              let e = r;
              ((r = i), t(i, e, this));
            }
          })
        );
      }
    }
    e.s(["ReactStore", 0, o]);
  },
  616269,
  (e) => {
    "use strict";
    var t = e.i(733332);
    e.s([
      "createSelector",
      0,
      (e, n, r, i, s, u, ...o) => {
        let a;
        if (o.length > 0) throw Error((0, t.default)(1));
        if (e && n && r && i && s && u)
          a = (t, o, a, l) =>
            u(e(t, o, a, l), n(t, o, a, l), r(t, o, a, l), i(t, o, a, l), s(t, o, a, l), o, a, l);
        else if (e && n && r && i && s)
          a = (t, u, o, a) =>
            s(e(t, u, o, a), n(t, u, o, a), r(t, u, o, a), i(t, u, o, a), u, o, a);
        else if (e && n && r && i)
          a = (t, s, u, o) => i(e(t, s, u, o), n(t, s, u, o), r(t, s, u, o), s, u, o);
        else if (e && n && r) a = (t, i, s, u) => r(e(t, i, s, u), n(t, i, s, u), i, s, u);
        else if (e && n) a = (t, r, i, s) => n(e(t, r, i, s), r, i, s);
        else if (e) a = e;
        else throw Error("Missing arguments");
        return a;
      },
    ]);
  },
  596296,
  (e) => {
    "use strict";
    var t = e.i(229315),
      n = e.i(328744),
      r = e.i(449055),
      i = e.i(647554);
    function s(e) {
      return (0, t.isHTMLElement)(e) && e.matches(r.TYPEABLE_SELECTOR);
    }
    e.s([
      "getFloatingFocusElement",
      0,
      function (e) {
        return e
          ? e.hasAttribute(r.FOCUSABLE_ATTRIBUTE)
            ? e
            : e.querySelector(`[${r.FOCUSABLE_ATTRIBUTE}]`) || e
          : null;
      },
      "isEventTargetWithin",
      0,
      function (e, t) {
        return (
          null != t &&
          ("composedPath" in e
            ? e.composedPath().includes(t)
            : null != e.target && t.contains(e.target))
        );
      },
      "isInteractiveElement",
      0,
      function (e) {
        return (
          e?.closest(
            `button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${r.TYPEABLE_SELECTOR}`
          ) != null
        );
      },
      "isRootElement",
      0,
      function (e) {
        return e.matches("html,body");
      },
      "isTargetInsideEnabledTrigger",
      0,
      function (e, n) {
        if (!(0, t.isElement)(e)) return !1;
        if (n.hasElement(e)) return !e.hasAttribute("data-trigger-disabled");
        for (let [, t] of n.entries())
          if ((0, i.contains)(t, e)) return !t.hasAttribute("data-trigger-disabled");
        return !1;
      },
      "isTypeableCombobox",
      0,
      function (e) {
        return !!e && "combobox" === e.getAttribute("role") && s(e);
      },
      "isTypeableElement",
      0,
      s,
      "matchesFocusVisible",
      0,
      function (e) {
        if (!e || n.platform.env.jsdom) return !0;
        try {
          return e.matches(":focus-visible");
        } catch (e) {
          return !0;
        }
      },
    ]);
  },
  365420,
  (e) => {
    "use strict";
    e.s([
      "mergeCleanups",
      0,
      function (...e) {
        return () => {
          for (let t = 0; t < e.length; t += 1) {
            let n = e[t];
            n && n();
          }
        };
      },
    ]);
  },
  152535,
  (e) => {
    "use strict";
    var t = e.i(271645),
      n = e.i(146376),
      r = e.i(328744),
      i = e.i(502077),
      s = e.i(843476);
    let u = t.forwardRef(function (e, u) {
      let [o, a] = t.useState();
      return (
        (0, n.useIsoLayoutEffect)(() => {
          r.platform.screenReader.voiceOver && r.platform.engine.webkit && a("button");
        }, []),
        (0, s.jsx)("span", {
          ...e,
          ref: u,
          style: i.visuallyHidden,
          "aria-hidden": !o || void 0,
          ...{ tabIndex: 0, role: o },
          "data-base-ui-focus-guard": "",
        })
      );
    });
    e.s(["FocusGuard", 0, u]);
  },
  638396,
  (e) => {
    "use strict";
    e.s([
      "BASE_UI_SWIPE_IGNORE_SELECTOR",
      0,
      "[data-base-ui-swipe-ignore]",
      "CLICK_TRIGGER_IDENTIFIER",
      0,
      "data-base-ui-click-trigger",
      "DISABLED_TRANSITIONS_STYLE",
      0,
      { style: { transition: "none" } },
      "DROPDOWN_COLLISION_AVOIDANCE",
      0,
      { fallbackAxisSide: "none" },
      "LEGACY_SWIPE_IGNORE_SELECTOR",
      0,
      "[data-swipe-ignore]",
      "PATIENT_CLICK_THRESHOLD",
      0,
      500,
      "POPUP_COLLISION_AVOIDANCE",
      0,
      { fallbackAxisSide: "end" },
      "TYPEAHEAD_RESET_MS",
      0,
      500,
      "ownerVisuallyHidden",
      0,
      { clipPath: "inset(50%)", position: "fixed", top: 0, left: 0 },
    ]);
  },
  383976,
  (e) => {
    "use strict";
    var t = e.i(229315),
      n = e.i(108868),
      r = e.i(647554),
      i = e.i(621082);
    function s(e) {
      for (let n of Array.from(e.children)) if ("summary" === (0, t.getNodeName)(n)) return n;
      return null;
    }
    function u(e) {
      let n = e ? (0, t.getNodeName)(e) : "";
      return (
        null != e &&
        e.matches(
          'a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]'
        ) &&
        ("summary" !== n ||
          (null != e.parentElement &&
            "details" === (0, t.getNodeName)(e.parentElement) &&
            s(e.parentElement) === e)) &&
        ("details" !== n || null == s(e)) &&
        ("input" !== n || "hidden" !== e.type)
      );
    }
    function o(e) {
      if (!u(e) || !e.isConnected || e.matches(":disabled")) return !1;
      for (
        let n = e;
        n;
        n = (function (e) {
          let n = e.assignedSlot;
          if (n) return n;
          if (e.parentElement) return e.parentElement;
          let r = e.getRootNode();
          return (0, t.isShadowRoot)(r) ? r.host : null;
        })(n)
      ) {
        let u = n !== e,
          o = "slot" === (0, t.getNodeName)(n);
        if (
          n.hasAttribute("inert") ||
          (u &&
            "details" === (0, t.getNodeName)(n) &&
            !n.open &&
            !(function (e, t) {
              let n = s(t);
              return !!n && (e === n || (0, r.contains)(n, e));
            })(e, n)) ||
          n.hasAttribute("hidden") ||
          (!o &&
            !(function (e, n) {
              let r = (0, t.getComputedStyle)(e);
              return n ? "none" !== r.display : (0, i.isElementVisible)(e, r);
            })(n, u))
        )
          return !1;
      }
      return !0;
    }
    function a(e) {
      let n = e.tabIndex;
      if (n < 0) {
        let n = (0, t.getNodeName)(e);
        if (
          "details" === n ||
          "audio" === n ||
          "video" === n ||
          ((0, t.isHTMLElement)(e) && e.isContentEditable)
        )
          return 0;
      }
      return n;
    }
    function l(e) {
      return "input" !== (0, t.getNodeName)(e)
        ? null
        : "radio" === e.type && "" !== e.name
          ? e
          : null;
    }
    function c(e) {
      if ((0, t.isHTMLElement)(e) && "slot" === (0, t.getNodeName)(e)) {
        let t = e.assignedElements({ flatten: !0 });
        if (t.length > 0) return t;
      }
      return (0, t.isHTMLElement)(e) && e.shadowRoot
        ? Array.from(e.shadowRoot.children)
        : Array.from(e.children);
    }
    function d(e) {
      let t = [];
      return (
        !(function e(t, n) {
          c(t).forEach((t) => {
            (u(t) && n.push(t), e(t, n));
          });
        })(e, t),
        t.filter(o)
      );
    }
    function f(e) {
      let t = d(e);
      return t.filter(
        (e) =>
          a(e) >= 0 &&
          (function (e, t) {
            let n = l(e);
            if (!n) return !0;
            let r = t.find((e) => {
              let t = l(e);
              return t?.name === n.name && t.form === n.form && t.checked;
            });
            return r
              ? r === n
              : t.find((e) => {
                  let t = l(e);
                  return t?.name === n.name && t.form === n.form;
                }) === n;
          })(e, t)
      );
    }
    function h(e, t) {
      let i = f(e),
        s = i.length;
      if (0 === s) return;
      let u = (0, r.activeElement)((0, n.ownerDocument)(e)),
        o = i.indexOf(u);
      return i[-1 === o ? (1 === t ? 0 : s - 1) : o + t];
    }
    function p(e, t) {
      if (!e) return null;
      let r = f((0, n.ownerDocument)(e).body),
        i = r.length;
      if (0 === i) return null;
      let s = r.indexOf(e);
      return -1 === s ? null : r[(s + t + i) % i];
    }
    e.s([
      "disableFocusInside",
      0,
      function (e) {
        f(e).forEach((e) => {
          ((e.dataset.tabindex = e.getAttribute("tabindex") || ""),
            e.setAttribute("tabindex", "-1"));
        });
      },
      "enableFocusInside",
      0,
      function (e) {
        let n = [];
        (!(function e(n, r, i) {
          c(n).forEach((n) => {
            ((0, t.isHTMLElement)(n) && n.matches(r) && i.push(n), e(n, r, i));
          });
        })(e, "[data-tabindex]", n),
          n.forEach((e) => {
            let t = e.dataset.tabindex;
            (delete e.dataset.tabindex,
              t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex"));
          }));
      },
      "focusable",
      0,
      d,
      "getNextTabbable",
      0,
      function (e) {
        return h((0, n.ownerDocument)(e).body, 1) || e;
      },
      "getPreviousTabbable",
      0,
      function (e) {
        return h((0, n.ownerDocument)(e).body, -1) || e;
      },
      "getTabbableAfterElement",
      0,
      function (e) {
        return p(e, 1);
      },
      "getTabbableBeforeElement",
      0,
      function (e) {
        return p(e, -1);
      },
      "isOutsideEvent",
      0,
      function (e, t) {
        let n = t || e.currentTarget,
          i = e.relatedTarget;
        return !i || !(0, r.contains)(n, i);
      },
      "isTabbable",
      0,
      function (e) {
        return o(e) && a(e) >= 0;
      },
      "tabbable",
      0,
      f,
    ]);
  },
  451321,
  (e) => {
    "use strict";
    e.s([
      "createAttribute",
      0,
      function (e) {
        return `data-base-ui-${e}`;
      },
    ]);
  },
  726674,
  (e) => {
    "use strict";
    var t = e.i(271645),
      n = e.i(174080),
      r = e.i(229315),
      i = e.i(574735),
      s = e.i(365420),
      u = e.i(883977),
      o = e.i(146376),
      a = e.i(667865),
      l = e.i(956789),
      c = e.i(152535),
      d = e.i(383976),
      f = e.i(675606),
      h = e.i(56434),
      p = e.i(451321),
      g = e.i(552245),
      b = e.i(638396),
      m = e.i(843476);
    let E = t.createContext(null),
      v = () => t.useContext(E),
      S = (0, p.createAttribute)("portal");
    function y(e = {}) {
      let { ref: i, container: s, componentProps: c = l.EMPTY_OBJECT, elementProps: d } = e,
        f = (0, u.useId)(),
        h = v(),
        p = h?.portalNode,
        [b, m] = t.useState(null),
        [E, x] = t.useState(null),
        I = (0, a.useStableCallback)((e) => {
          null !== e && x(e);
        }),
        R = t.useRef(null);
      (0, o.useIsoLayoutEffect)(() => {
        if (null === s) {
          R.current && ((R.current = null), x(null), m(null));
          return;
        }
        if (null == f) return;
        let e = (s && ((0, r.isNode)(s) ? s : s.current)) ?? p ?? document.body;
        if (null == e) {
          R.current && ((R.current = null), x(null), m(null));
          return;
        }
        R.current !== e && ((R.current = e), x(null), m(e));
      }, [s, p, f]);
      let A = (0, g.useRenderElement)("div", c, { ref: [i, I], props: [{ id: f, [S]: "" }, d] });
      return { portalNode: E, portalSubtree: b && A ? n.createPortal(A, b) : null };
    }
    let x = t.forwardRef(function (e, r) {
      let {
          render: u,
          className: a,
          style: l,
          children: p,
          container: g,
          renderGuards: v,
          ...S
        } = e,
        { portalNode: x, portalSubtree: I } = y({
          container: g,
          ref: r,
          componentProps: e,
          elementProps: S,
        }),
        R = t.useRef(null),
        A = t.useRef(null),
        O = t.useRef(null),
        T = t.useRef(null),
        [C, w] = t.useState(null),
        k = t.useRef(!1),
        P = C?.modal,
        L = C?.open,
        N = "boolean" == typeof v ? v : !!C && !C.modal && C.open && !!x;
      (t.useEffect(() => {
        if (x && !P)
          return (0, s.mergeCleanups)(
            (0, i.addEventListener)(x, "focusin", e, !0),
            (0, i.addEventListener)(x, "focusout", e, !0)
          );
        function e(e) {
          x &&
            e.relatedTarget &&
            (0, d.isOutsideEvent)(e) &&
            ("focusin" === e.type
              ? k.current && ((0, d.enableFocusInside)(x), (k.current = !1))
              : ((0, d.disableFocusInside)(x), (k.current = !0)));
        }
      }, [x, P]),
        (0, o.useIsoLayoutEffect)(() => {
          x && !0 === L && k.current && ((0, d.enableFocusInside)(x), (k.current = !1));
        }, [L, x]));
      let M = t.useMemo(
        () => ({
          beforeOutsideRef: R,
          afterOutsideRef: A,
          beforeInsideRef: O,
          afterInsideRef: T,
          portalNode: x,
          setFocusManagerState: w,
        }),
        [x]
      );
      return (0, m.jsxs)(t.Fragment, {
        children: [
          I,
          (0, m.jsxs)(E.Provider, {
            value: M,
            children: [
              N &&
                x &&
                (0, m.jsx)(c.FocusGuard, {
                  "data-type": "outside",
                  ref: R,
                  onFocus: (e) => {
                    if ((0, d.isOutsideEvent)(e, x)) O.current?.focus();
                    else {
                      let e = C ? C.domReference : null,
                        t = (0, d.getPreviousTabbable)(e);
                      t?.focus();
                    }
                  },
                }),
              N && x && (0, m.jsx)("span", { "aria-owns": x.id, style: b.ownerVisuallyHidden }),
              x && n.createPortal(p, x),
              N &&
                x &&
                (0, m.jsx)(c.FocusGuard, {
                  "data-type": "outside",
                  ref: A,
                  onFocus: (e) => {
                    if ((0, d.isOutsideEvent)(e, x)) T.current?.focus();
                    else {
                      let t = C ? C.domReference : null,
                        n = (0, d.getNextTabbable)(t);
                      (n?.focus(),
                        C?.closeOnFocusOut &&
                          C?.onOpenChange(
                            !1,
                            (0, f.createChangeEventDetails)(h.REASONS.focusOut, e.nativeEvent)
                          ));
                    }
                  },
                }),
            ],
          }),
        ],
      });
    });
    e.s(["FloatingPortal", 0, x, "useFloatingPortalNode", 0, y, "usePortalContext", 0, v]);
  },
  46420,
  661286,
  379248,
  (e) => {
    "use strict";
    e.i(247167);
    var t = e.i(271645),
      n = e.i(883977),
      r = e.i(146376),
      i = e.i(388940);
    function s() {
      let e = new Map();
      return {
        emit(t, n) {
          e.get(t)?.forEach((e) => e(n));
        },
        on(t, n) {
          (e.has(t) || e.set(t, new Set()), e.get(t).add(n));
        },
        off(t, n) {
          e.get(t)?.delete(n);
        },
      };
    }
    e.s(["createEventEmitter", 0, s], 661286);
    class u {
      nodesRef = { current: [] };
      events = s();
      addNode(e) {
        this.nodesRef.current.push(e);
      }
      removeNode(e) {
        let t = this.nodesRef.current.findIndex((t) => t === e);
        -1 !== t && this.nodesRef.current.splice(t, 1);
      }
    }
    e.s(["FloatingTreeStore", 0, u], 379248);
    var o = e.i(843476);
    let a = t.createContext(null),
      l = t.createContext(null),
      c = () => t.useContext(a)?.id || null,
      d = (e) => {
        let n = t.useContext(l);
        return e ?? n;
      };
    e.s(
      [
        "FloatingNode",
        0,
        function (e) {
          let { children: n, id: r } = e,
            i = c();
          return (0, o.jsx)(a.Provider, {
            value: t.useMemo(() => ({ id: r, parentId: i }), [r, i]),
            children: n,
          });
        },
        "FloatingTree",
        0,
        function (e) {
          let { children: t, externalTree: n } = e,
            r = (0, i.useRefWithInit)(() => n ?? new u()).current;
          return (0, o.jsx)(l.Provider, { value: r, children: t });
        },
        "useFloatingNodeId",
        0,
        function (e) {
          let t = (0, n.useId)(),
            i = d(e),
            s = c();
          return (
            (0, r.useIsoLayoutEffect)(() => {
              if (!t) return;
              let e = { id: t, parentId: s };
              return (
                i?.addNode(e),
                () => {
                  i?.removeNode(e);
                }
              );
            }, [i, t, s]),
            t
          );
        },
        "useFloatingParentNodeId",
        0,
        c,
        "useFloatingTree",
        0,
        d,
      ],
      46420
    );
  },
  990627,
  (e) => {
    "use strict";
    e.s([
      "PopupTriggerMap",
      0,
      class {
        constructor() {
          ((this.elementsSet = new Set()), (this.idMap = new Map()));
        }
        add(e, t) {
          let n = this.idMap.get(e);
          n !== t &&
            (void 0 !== n && this.elementsSet.delete(n),
            this.elementsSet.add(t),
            this.idMap.set(e, t));
        }
        delete(e) {
          let t = this.idMap.get(e);
          t && (this.elementsSet.delete(t), this.idMap.delete(e));
        }
        hasElement(e) {
          return this.elementsSet.has(e);
        }
        hasMatchingElement(e) {
          for (let t of this.elementsSet) if (e(t)) return !0;
          return !1;
        }
        getById(e) {
          return this.idMap.get(e);
        }
        entries() {
          return this.idMap.entries();
        }
        elements() {
          return this.elementsSet.values();
        }
        get size() {
          return this.idMap.size;
        }
      },
    ]);
  },
  156341,
  (e) => {
    "use strict";
    var t = e.i(616269),
      n = e.i(301252),
      r = e.i(661286),
      i = e.i(157940);
    let s = {
      open: (0, t.createSelector)((e) => e.open),
      transitionStatus: (0, t.createSelector)((e) => e.transitionStatus),
      domReferenceElement: (0, t.createSelector)((e) => e.domReferenceElement),
      referenceElement: (0, t.createSelector)((e) => e.positionReference ?? e.referenceElement),
      floatingElement: (0, t.createSelector)((e) => e.floatingElement),
      floatingId: (0, t.createSelector)((e) => e.floatingId),
    };
    class u extends n.ReactStore {
      constructor(e) {
        const { syncOnly: t, nested: n, onOpenChange: i, triggerElements: u, ...o } = e;
        (super(
          { ...o, positionReference: o.referenceElement, domReferenceElement: o.referenceElement },
          {
            onOpenChange: i,
            dataRef: { current: {} },
            events: (0, r.createEventEmitter)(),
            nested: n,
            triggerElements: u,
          },
          s
        ),
          (this.syncOnly = t));
      }
      syncOpenEvent = (e, t) => {
        (!e || !this.state.open || (null != t && (0, i.isClickLikeEvent)(t))) &&
          (this.context.dataRef.current.openEvent = e ? t : void 0);
      };
      dispatchOpenChange = (e, t) => {
        this.syncOpenEvent(e, t.event);
        let n = {
          open: e,
          reason: t.reason,
          nativeEvent: t.event,
          nested: this.context.nested,
          triggerElement: t.trigger,
        };
        this.context.events.emit("openchange", n);
      };
      setOpen = (e, t) => {
        (this.syncOnly || this.dispatchOpenChange(e, t), this.context.onOpenChange?.(e, t));
      };
    }
    e.s(["FloatingRootStore", 0, u]);
  },
  405005,
  (e) => {
    "use strict";
    var t,
      n,
      r = e.i(209407);
    let i =
        (((t = {}).open = "data-open"),
        (t.closed = "data-closed"),
        (t[(t.startingStyle = r.TransitionStatusDataAttributes.startingStyle)] = "startingStyle"),
        (t[(t.endingStyle = r.TransitionStatusDataAttributes.endingStyle)] = "endingStyle"),
        (t.anchorHidden = "data-anchor-hidden"),
        (t.side = "data-side"),
        (t.align = "data-align"),
        t),
      s = (((n = {}).popupOpen = "data-popup-open"), (n.pressed = "data-pressed"), n),
      u = { [s.popupOpen]: "" },
      o = { [s.popupOpen]: "", [s.pressed]: "" },
      a = { [i.open]: "" },
      l = { [i.closed]: "" },
      c = { [i.anchorHidden]: "" };
    e.s([
      "CommonPopupDataAttributes",
      0,
      i,
      "CommonTriggerDataAttributes",
      0,
      s,
      "popupStateMapping",
      0,
      { open: (e) => (e ? a : l), anchorHidden: (e) => (e ? c : null) },
      "pressableTriggerOpenStateMapping",
      0,
      { open: (e) => (e ? o : null) },
      "triggerOpenStateMapping",
      0,
      { open: (e) => (e ? u : null) },
    ]);
  },
]);
