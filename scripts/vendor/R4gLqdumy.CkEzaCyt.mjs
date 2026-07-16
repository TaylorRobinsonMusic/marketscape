import { t as e } from "./rolldown-runtime.BB3S47xo.mjs";
import {
  A as t,
  F as n,
  L as r,
  N as i,
  O as a,
  P as o,
  _ as s,
  c,
  j as l,
  o as u,
  w as d,
  x as f,
  y as p,
  z as m,
} from "./react.Cxf1BSD4.mjs";
import { C as h, a as g, r as _, t as v } from "./motion.BxtCy6Qp.mjs";
import {
  $ as y,
  E as b,
  G as x,
  L as S,
  N as C,
  Ot as w,
  P as T,
  a as ee,
  ft as te,
  j as E,
  kt as D,
  s as O,
  yt as k,
} from "./framer.DwtIulwr.mjs";
function A(e = N) {
  return (
    (function (e, t, n) {
      let r = function (e, t) {
          e.q.push(t);
        },
        i = e.document;
      e.Cal =
        e.Cal ||
        function () {
          let a = e.Cal,
            o = arguments;
          if (
            ((a.loaded ||=
              ((a.ns = {}),
              (a.q = a.q || []),
              (i.head.appendChild(i.createElement(`script`)).src = t),
              !0)),
            o[0] !== n)
          )
            r(a, o);
          else {
            let e = function () {
                r(e, arguments);
              },
              t = o[1];
            ((e.q = e.q || []), typeof t == `string` ? (a.ns[t] = e) && r(e, o) : r(a, o));
          }
        };
    })(m, e, `init`),
    m.Cal
  );
}
function j(e) {
  let [t, r] = n();
  return (
    i(() => {
      r(() => A(e));
    }, []),
    t
  );
}
function M() {
  if (L) return I;
  L = 1;
  var e = f,
    t = Symbol.for(`react.element`),
    n = Symbol.for(`react.fragment`),
    r = Object.prototype.hasOwnProperty,
    i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(e, n, o) {
    var s,
      c = {},
      l = null,
      u = null;
    for (s in (o !== void 0 && (l = `` + o),
    n.key !== void 0 && (l = `` + n.key),
    n.ref !== void 0 && (u = n.ref),
    n))
      r.call(n, s) && !a.hasOwnProperty(s) && (c[s] = n[s]);
    if (e && e.defaultProps) for (s in ((n = e.defaultProps), n)) c[s] === void 0 && (c[s] = n[s]);
    return { $$typeof: t, type: e, key: l, ref: u, props: c, _owner: i.current };
  }
  return ((I.Fragment = n), (I.jsx = o), (I.jsxs = o), I);
}
var N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H = e(() => {
    (r(),
      d(),
      (N = `embed.js`),
      A.toString(),
      (P = {}),
      (F = {
        get exports() {
          return P;
        },
        set exports(e) {
          P = e;
        },
      }),
      (I = {}),
      (function (e) {
        e.exports = M();
      })(F),
      (R = P.jsx),
      (z = function (e) {
        let { calLink: t, calOrigin: n, config: r, initConfig: o = {}, embedJsUrl: s, ...c } = e;
        if (!t) throw Error(`calLink is required`);
        let l = a(!1),
          u = j(s),
          d = a(null);
        return (
          i(() => {
            if (!u || l.current) return;
            l.current = !0;
            let e = d.current;
            (u(`init`, { ...o, origin: n }),
              u(`inline`, { elementOrSelector: e, calLink: t, config: r }));
          }, [u, t, r, n, o]),
          u ? R(`div`, { ref: d, ...c }) : null
        );
      }),
      (B = z),
      (V = () =>
        new Promise(function e(t) {
          A();
          let n = m.Cal;
          n
            ? t(n)
            : setTimeout(() => {
                e(t);
              }, 50);
        })));
  });
function U(e) {
  let {
      layout: t,
      eventLink: r,
      darkTheme: o,
      lightTheme: s,
      theme: u,
      showEventTypeDetails: d,
      namespace: f = ``,
    } = e,
    p = a(null),
    m = b.current() === b.canvas,
    h = a(f || `cal-${Math.random().toString(36).slice(2)}`).current,
    [g, _] = n({ origin: ``, username: ``, eventTypeSlug: ``, teamEventTypeSlug: `` }),
    [v, y] = n(!1);
  (i(() => {
    let e;
    try {
      let t = r?.trim() || ``;
      (/^https?:\/\//i.test(t) || (t = `https://` + t), (e = new URL(t)));
    } catch (e) {
      console.error(`Incorrect URL: ${r}`, e);
      return;
    }
    let [t, n = ``, i = ``] = e.pathname.slice(1).split(`/`);
    if (!t) {
      console.error(`URL must include at least a username.`);
      return;
    }
    _({ origin: e.origin, username: t, eventTypeSlug: n, teamEventTypeSlug: i });
  }, [r]),
    i(() => {
      let e = (e) => {
        y(!0);
      };
      return (
        (async () => {
          v ||
            ((p.current = await V({ namespace: h })),
            p.current(`on`, { action: `linkReady`, callback: e }));
        })(),
        () => {
          p.current && p.current(`off`, { action: `linkReady`, callback: e });
        }
      );
    }, [h, v]),
    i(() => {
      (async () => {
        !v ||
          !p.current ||
          p.current(`ui`, {
            cssVarsPerTheme: { light: { "cal-brand": s }, dark: { "cal-brand": o } },
            hideEventTypeDetails: !d,
            layout: t,
            theme: u,
          });
      })();
    }, [v, s, o, d, t, u, h]));
  let x = l(() => {
    if (!g.username) return ``;
    let e = `${g.username}/${g.eventTypeSlug}`;
    return (g.teamEventTypeSlug && (e += `/${g.teamEventTypeSlug}`), e);
  }, [g]);
  return x
    ? c(
        B,
        {
          namespace: h,
          calLink: x,
          calOrigin: g.origin,
          style: m
            ? { height: `100%`, overflow: `clip` }
            : { width: `100%`, height: `100%`, overflow: `scroll` },
          config: { layout: t, theme: u },
        },
        `${r}-${h}`
      )
    : null;
}
var ne = e(() => {
    (u(),
      y(),
      H(),
      d(),
      T(U, {
        eventLink: {
          title: `Event Link`,
          type: O.String,
          defaultValue: `https://cal.com/framer-placeholder/default`,
        },
        theme: {
          type: O.Enum,
          options: [`auto`, `light`, `dark`],
          optionTitles: [`Auto`, `Light`, `Dark`],
          defaultValue: `auto`,
        },
        lightTheme: { type: O.Color, defaultValue: `#292929`, title: `Light Color` },
        darkTheme: { type: O.Color, defaultValue: `#fafafa`, title: `Dark Color` },
        showEventTypeDetails: {
          type: O.Enum,
          title: `Event Info`,
          defaultValue: !0,
          displaySegmentedControl: !0,
          segmentedControlDirection: `horizontal`,
          options: [!0, !1],
          optionTitles: [`Show`, `Hide`],
        },
        layout: {
          type: O.Enum,
          options: [`month_view`, `column_view`, `week_view`],
          optionTitles: [`Month View`, `Column View`, `Week View`],
          defaultValue: `month_view`,
        },
      }),
      (U.displayName = `Cal.com`));
  }),
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  $,
  re = e(() => {
    (u(),
      y(),
      v(),
      d(),
      ne(),
      (W = x(U)),
      (G = `framer-iG2Tq`),
      (K = { ZlYmtOekk: `framer-v-11o9aae` }),
      (q = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (J = ({ value: e, children: n }) => {
        let r = t(g),
          i = e ?? r.transition,
          a = l(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(g.Provider, { value: a, children: n });
      }),
      (Y = h.create(o)),
      (X = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Z = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = D(
        s(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = p(),
            { activeLocale: o, setLocale: s } = k();
          te();
          let { style: l, className: u, layoutId: d, variant: f, ...m } = X(e),
            {
              baseVariant: g,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: C,
              setGestureState: T,
              setVariant: D,
              variants: O,
            } = w({ defaultVariant: `ZlYmtOekk`, ref: r, variant: f, variantClassNames: K }),
            A = Z(e, O),
            j = S(G);
          return c(_, {
            id: d ?? i,
            children: c(Y, {
              animate: O,
              initial: !1,
              children: c(J, {
                value: q,
                children: c(h.div, {
                  ...m,
                  ...b,
                  className: S(j, `framer-11o9aae`, u, v),
                  "data-border": !0,
                  "data-framer-name": `Primary`,
                  layoutDependency: A,
                  layoutId: `ZlYmtOekk`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `dashed`,
                    "--border-top-width": `1px`,
                    ...l,
                  },
                  children: c(ee, {
                    children: c(E, {
                      className: `framer-1qkxwy4-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: A,
                      layoutId: `nMqcTN8Na-container`,
                      nodeId: `nMqcTN8Na`,
                      rendersWithMotion: !0,
                      scopeId: `R4gLqdumy`,
                      children: c(U, {
                        darkTheme: `var(--token-18b15b83-4ec0-475b-b37c-540277e0faa8, rgb(255, 255, 255))`,
                        eventLink: `https://cal.com/framer-placeholder/default`,
                        height: `100%`,
                        id: `nMqcTN8Na`,
                        layout: `month_view`,
                        layoutId: `nMqcTN8Na`,
                        lightTheme: `var(--token-18b15b83-4ec0-475b-b37c-540277e0faa8, rgb(255, 255, 255))`,
                        showEventTypeDetails: !1,
                        style: { height: `100%`, width: `100%` },
                        theme: `auto`,
                        width: `100%`,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-iG2Tq.framer-1wp4ucb, .framer-iG2Tq .framer-1wp4ucb { display: block; }`,
          `.framer-iG2Tq.framer-11o9aae { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 547px; }`,
          `.framer-iG2Tq .framer-1qkxwy4-container { flex: 1 0 0px; height: 575px; position: relative; width: 1px; }`,
          `.framer-iG2Tq[data-border="true"]::after, .framer-iG2Tq [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-iG2Tq`
      )),
      ($ = Q),
      (Q.displayName = `Cal Booking`),
      (Q.defaultProps = { height: 575, width: 547 }),
      C(Q, [{ explicitInter: !0, fonts: [] }, ...W], { supportsExplicitInterCodegen: !0 }));
  });
export { re as n, $ as t };
//# sourceMappingURL=R4gLqdumy.CkEzaCyt.mjs.map
