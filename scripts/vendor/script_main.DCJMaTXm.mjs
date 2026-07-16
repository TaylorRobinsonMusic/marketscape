import { t as e } from "./rolldown-runtime.BB3S47xo.mjs";
import {
  A as t,
  F as n,
  L as r,
  M as i,
  N as a,
  O as o,
  P as s,
  R as c,
  S as l,
  _ as u,
  a as d,
  c as f,
  g as p,
  i as m,
  j as h,
  l as g,
  m as _,
  n as v,
  o as y,
  p as b,
  r as x,
  s as S,
  t as ee,
  u as C,
  v as w,
  w as T,
  y as E,
  z as D,
} from "./react.Cxf1BSD4.mjs";
import { C as O, a as k, n as te, r as A, t as j } from "./motion.BxtCy6Qp.mjs";
import {
  $ as M,
  D as ne,
  E as re,
  Et as ie,
  G as N,
  J as ae,
  K as oe,
  L as P,
  Lt as se,
  Mt as ce,
  N as F,
  Nt as le,
  O as I,
  Ot as L,
  P as R,
  Pt as ue,
  Q as de,
  S as fe,
  St as pe,
  Tt as me,
  Z as he,
  _ as ge,
  _t as _e,
  a as z,
  at as ve,
  c as ye,
  ct as be,
  dt as xe,
  et as Se,
  f as Ce,
  ft as B,
  g as we,
  gt as Te,
  h as Ee,
  ht as De,
  j as V,
  jt as Oe,
  k as H,
  kt as U,
  mt as ke,
  o as Ae,
  ot as je,
  p as Me,
  rt as Ne,
  s as W,
  tt as G,
  ut as Pe,
  v as Fe,
  w as Ie,
  x as Le,
  xt as Re,
  y as ze,
  yt as K,
  z as q,
} from "./framer.DwtIulwr.mjs";
import { i as Be, n as Ve, r as He, t as Ue } from "./Bo2HZoBjr.ysB5lyAs.mjs";
import { n as We, t as Ge } from "./Kc_VruPtK.TNJgsVmM.mjs";
import { n as Ke, t as qe } from "./MVGBYZO38.D638P-ks.mjs";
import { a as Je, i as Ye, o as Xe, r as Ze } from "./shared-lib.CQP05-fP.mjs";
import {
  a as Qe,
  c as $e,
  i as et,
  n as tt,
  o as nt,
  r as rt,
  s as it,
  t as at,
} from "./dXsx8iVCg.B24QAjan.mjs";
import { i as ot, n as st, r as ct, t as lt } from "./LBghXxOCz.B2PXqWgJ.mjs";
import { n as ut, t as dt } from "./sUGexSIpr.D_EfkaXL.mjs";
import { n as ft, t as pt } from "./InteractiveASCII_Prod.CfcAmBEK.mjs";
import { i as mt, n as ht, r as gt, t as _t } from "./rhzuGFsMS.mTPFT97O.mjs";
import { i as vt, n as J, r as yt, t as bt } from "./r8upVcmwX.DF73NUKj.mjs";
function xt({ blur: e, borderRadius: t, direction: n, transition: r }) {
  return f(`div`, {
    style: { position: `absolute`, inset: 0, overflow: `hidden` },
    children: h(
      () => [
        {
          blur: `${e / 2 / 2 / 2 / 2 / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%`,
        },
        {
          blur: `${e / 2 / 2 / 2 / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%`,
        },
        {
          blur: `${e / 2 / 2 / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%`,
        },
        {
          blur: `${e / 2 / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%`,
        },
        {
          blur: `${e / 2 / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%`,
        },
        {
          blur: `${e / 2 / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%`,
        },
        {
          blur: `${e / 2}px`,
          gradient: `rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%`,
        },
        { blur: `${e}px`, gradient: `rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%` },
      ],
      [e]
    ).map((e, i) =>
      f(
        O.div,
        {
          transition: r,
          initial: { backdropFilter: `blur(${e.blur})` },
          animate: { backdropFilter: `blur(${e.blur})` },
          style: {
            opacity: 1,
            position: `absolute`,
            inset: 0,
            zIndex: i + 1,
            maskImage: `linear-gradient(${n}, ${e.gradient})`,
            WebkitMaskImage: `linear-gradient(${n}, ${e.gradient})`,
            borderRadius: t,
            pointerEvents: `none`,
          },
        },
        i
      )
    ),
  });
}
var St,
  Ct = e(() => {
    (y(),
      T(),
      j(),
      M(),
      (xt.defaultProps = {
        blur: 10,
        borderRadius: `0px`,
        direction: `toBottom`,
        transition: { duration: 0.3 },
      }),
      R(xt, {
        blur: {
          title: `Blur`,
          type: W.Number,
          defaultValue: 10,
          min: 0,
          max: 100,
          step: 1,
          description: `Large blur values (10<) can impact performance.`,
        },
        borderRadius: {
          title: `Radius`,
          type: W.BorderRadius,
          defaultValue: `0px`,
          description: `Blur Gradient component's parent frame can't have border radius (it will break the component). If you need corner radius, apply it directly to the Blur Gradient component here.`,
        },
        direction: {
          title: `Direction`,
          type: W.SegmentedEnum,
          options: [`to bottom`, `to top`, `to left`, `to right`],
          optionTitles: [`↓`, `↑`, `←`, `→`],
          defaultValue: `to bottom`,
        },
        transition: {
          type: W.Transition,
          defaultValue: { duration: 0.3 },
          title: `Transition`,
          description: `Control how the blur animates when used on hover states or any othe interaction.

More components at [Framer University](https://frameruni.link/cc).`,
        },
      }),
      (xt.displayName = `Blur Gradient`),
      (St = xt));
  }),
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt = e(() => {
    (y(),
      M(),
      T(),
      (wt = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g d="M 82.11 3.069 C 86.203 -1.023 92.838 -1.023 96.931 3.069 C 101.023 7.162 101.023 13.797 96.931 17.89 L 17.89 96.931 C 13.797 101.023 7.162 101.023 3.069 96.931 C -1.023 92.838 -1.023 86.203 3.069 82.11 Z M 3.069 3.069 C 7.162 -1.023 13.797 -1.023 17.89 3.069 L 96.931 82.11 C 101.023 86.203 101.023 92.838 96.931 96.931 C 92.838 101.023 86.203 101.023 82.11 96.931 L 3.069 17.89 C -1.023 13.797 -1.023 7.162 3.069 3.069 Z" fill="transparent" height="100.00000071340011px" id="MTwjZpzhV" transform="translate(0 0)" width="99.99999843289923px"><path d="M 0 10.479 C 0 4.692 4.692 0 10.479 0 C 16.267 0 20.959 4.692 20.959 10.479 L 20.959 122.26 C 20.959 128.048 16.267 132.74 10.479 132.74 C 4.692 132.74 0 128.048 0 122.26 Z" fill="var(--62mhw, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="132.73988081941218px" id="QcTqe9I3M" transform="translate(39.521 -16.37) rotate(45 10.479 66.37)" width="20.958928550433313px"/><path d="M 0 10.479 C 0 4.692 4.692 0 10.479 0 L 122.26 0 C 128.048 0 132.74 4.692 132.74 10.479 C 132.74 16.267 128.048 20.959 122.26 20.959 L 10.479 20.959 C 4.692 20.959 0 16.267 0 10.479 Z" fill="var(--62mhw, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="20.958928550433455px" id="H0aXdZDtK" transform="translate(-16.37 39.521) rotate(45 66.37 10.479)" width="132.73988081941212px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Tt = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? f(O.div, { ...a, layoutId: r, ref: t }) : f(`div`, { ...a, ref: t });
      })),
      (Et = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        kfNzCWrbt:
          e ?? i.kfNzCWrbt ?? `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (Dt = U(
        u(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, kfNzCWrbt: o, ...s } = Et(e);
          return f(Tt, {
            ...s,
            className: P(`framer-7f90O`, r),
            layoutId: i,
            ref: t,
            style: { "--62mhw": o, ...n },
          });
        }),
        [
          `.framer-7f90O { -webkit-mask: ${wt}; aspect-ratio: 1; background-color: var(--62mhw); mask: ${wt}; width: 100px; }`,
        ],
        `framer-7f90O`
      )),
      (Dt.displayName = `Close X`),
      (Ot = Dt),
      R(Dt, {
        kfNzCWrbt: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: W.Color,
        },
      }));
  });
function At(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht = e(() => {
    (y(),
      M(),
      j(),
      T(),
      kt(),
      Ke(),
      (jt = [`ytn0II0h0`, `f8rfqW1w2`]),
      (Mt = `framer-e8X8k`),
      (Nt = { f8rfqW1w2: `framer-v-z56xen`, ytn0II0h0: `framer-v-1iwgchh` }),
      ve(),
      (Pt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ft = ({ value: e, children: n }) => {
        let r = t(k),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(k.Provider, { value: a, children: n });
      }),
      (It = { Close: `f8rfqW1w2`, Open: `ytn0II0h0` }),
      (Lt = O.create(s)),
      (Rt = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        god0NnfkT: e ?? i.god0NnfkT,
        variant: It[i.variant] ?? i.variant ?? `ytn0II0h0`,
      })),
      (zt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Bt = U(
        u(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = E(),
            { activeLocale: a, setLocale: s } = K();
          B();
          let { style: c, className: l, layoutId: u, variant: d, god0NnfkT: p, ...m } = Rt(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: b,
              setGestureState: x,
              setVariant: S,
              variants: ee,
            } = L({
              cycleOrder: jt,
              defaultVariant: `ytn0II0h0`,
              ref: r,
              variant: d,
              variantClassNames: Nt,
            }),
            C = zt(e, ee),
            { activeVariantCallback: w, delay: T } = xe(h),
            D = w(async (...e) => {
              if ((x({ isPressed: !1 }), p && (await p(...e)) === !1)) return !1;
            }),
            k = P(Mt);
          return f(A, {
            id: u ?? i,
            children: f(Lt, {
              animate: ee,
              initial: !1,
              children: f(Ft, {
                value: Pt,
                children: f(O.button, {
                  ...m,
                  ...v,
                  className: P(k, `framer-1iwgchh`, l, g),
                  "data-border": !0,
                  "data-framer-name": `Open`,
                  "data-highlight": !0,
                  "data-reset": `button`,
                  layoutDependency: C,
                  layoutId: `ytn0II0h0`,
                  onTap: D,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-c501e0d1-c10e-4ef2-baa7-db83ded46808, rgba(0, 0, 0, 0.1))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    "--corner-shape-fallback": 0.796,
                    backgroundColor: `var(--token-fe732e94-f30f-4945-91af-015cdcf1f937, rgba(0, 0, 0, 0.05))`,
                    borderBottomLeftRadius: `calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderBottomRightRadius: `calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderTopLeftRadius: `calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderTopRightRadius: `calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    cornerShape: `superellipse(1.4)`,
                    ...c,
                  },
                  ...At({ f8rfqW1w2: { "data-framer-name": `Close` } }, h, y),
                  children: f(we, {
                    animated: !0,
                    className: `framer-ywx3q2`,
                    Component: qe,
                    layoutDependency: C,
                    layoutId: `v1WmvHuD8`,
                    style: {
                      "--62mhw": `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
                    },
                    ...At({ f8rfqW1w2: { Component: Ot } }, h, y),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-e8X8k.framer-8b7wrl, .framer-e8X8k .framer-8b7wrl { display: block; }`,
          `.framer-e8X8k.framer-1iwgchh { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 8px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-e8X8k .framer-ywx3q2 { flex: none; height: var(--framer-aspect-ratio-supported, 12px); position: relative; width: 12px; }`,
          `.framer-e8X8k[data-border="true"]::after, .framer-e8X8k [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-e8X8k`
      )),
      (Vt = Bt),
      (Bt.displayName = `Phone Menu Button`),
      (Bt.defaultProps = { height: 28, width: 28 }),
      R(Bt, {
        variant: {
          options: [`ytn0II0h0`, `f8rfqW1w2`],
          optionTitles: [`Open`, `Close`],
          title: `Variant`,
          type: W.Enum,
        },
        god0NnfkT: { title: `Click`, type: W.EventHandler },
      }),
      F(Bt, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function Ut(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn = e(() => {
    (y(),
      M(),
      j(),
      T(),
      (Wt = [
        `ix_AVL_oE`,
        `sdSbN56j2`,
        `cxzVsnrBx`,
        `h7AoQLCAb`,
        `Va0w4c8kk`,
        `wty_1cI1m`,
        `Y2u3isiEr`,
        `G5M2NL8CV`,
        `KjiLKY9bF`,
      ]),
      (Gt = `framer-jro2V`),
      (Kt = {
        cxzVsnrBx: `framer-v-hr8j5d`,
        G5M2NL8CV: `framer-v-15cblfr`,
        h7AoQLCAb: `framer-v-i2vseb`,
        ix_AVL_oE: `framer-v-bobhha`,
        KjiLKY9bF: `framer-v-rpu57b`,
        sdSbN56j2: `framer-v-1mdzciq`,
        Va0w4c8kk: `framer-v-1dzrlx0`,
        wty_1cI1m: `framer-v-4rzmmc`,
        Y2u3isiEr: `framer-v-ms3ilh`,
      }),
      (qt = { bounce: 0, delay: 0, duration: 0.6, type: `spring` }),
      ve(),
      (Jt = ({ value: e, children: n }) => {
        let r = t(k),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(k.Provider, { value: a, children: n });
      }),
      (Yt = {
        "Grid Transition 1": `cxzVsnrBx`,
        "Grid Transition 2": `Va0w4c8kk`,
        "Grid Transition 3": `Y2u3isiEr`,
        "Grid Transition 4": `KjiLKY9bF`,
        "Horizontal Stack Bottom Top": `h7AoQLCAb`,
        "Horizontal Stack Top Bottom": `G5M2NL8CV`,
        "Vertical Stack Left Right": `sdSbN56j2`,
        "Vertical Stack Right Left": `wty_1cI1m`,
        Base: `ix_AVL_oE`,
      }),
      (Xt = O.create(s)),
      (Zt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Yt[r.variant] ?? r.variant ?? `ix_AVL_oE`,
      })),
      (Qt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($t = U(
        u(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = E(),
            { activeLocale: a, setLocale: s } = K();
          B();
          let { style: c, className: l, layoutId: u, variant: d, ...p } = Zt(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: b,
              setGestureState: x,
              setVariant: S,
              variants: ee,
            } = L({
              cycleOrder: Wt,
              defaultVariant: `ix_AVL_oE`,
              ref: r,
              variant: d,
              variantClassNames: Kt,
            }),
            C = Qt(e, ee),
            { activeVariantCallback: w, delay: T } = xe(m),
            D = w(async (...e) => {
              await T(() => S(`sdSbN56j2`, !0), 750);
            }),
            k = w(async (...e) => {
              await T(() => S(`cxzVsnrBx`, !0), 750);
            }),
            te = w(async (...e) => {
              await T(() => S(`h7AoQLCAb`, !0), 750);
            }),
            j = w(async (...e) => {
              await T(() => S(`Va0w4c8kk`, !0), 750);
            }),
            M = w(async (...e) => {
              await T(() => S(`wty_1cI1m`, !0), 750);
            }),
            ne = w(async (...e) => {
              await T(() => S(`Y2u3isiEr`, !0), 750);
            }),
            re = w(async (...e) => {
              await T(() => S(`G5M2NL8CV`, !0), 750);
            });
          Re(m, {
            cxzVsnrBx: te,
            default: D,
            G5M2NL8CV: w(async (...e) => {
              await T(() => S(`KjiLKY9bF`, !0), 750);
            }),
            h7AoQLCAb: j,
            sdSbN56j2: k,
            Va0w4c8kk: M,
            wty_1cI1m: ne,
            Y2u3isiEr: re,
          });
          let ie = P(Gt);
          return f(A, {
            id: u ?? i,
            children: f(Xt, {
              animate: ee,
              initial: !1,
              children: f(Jt, {
                value: qt,
                children: g(O.div, {
                  ...p,
                  ...v,
                  className: P(ie, `framer-bobhha`, l, h),
                  "data-framer-name": `Base`,
                  "data-highlight": !0,
                  layoutDependency: C,
                  layoutId: `ix_AVL_oE`,
                  ref: r,
                  style: { ...c },
                  ...Ut(
                    {
                      cxzVsnrBx: { "data-framer-name": `Grid Transition 1` },
                      G5M2NL8CV: { "data-framer-name": `Horizontal Stack Top Bottom` },
                      h7AoQLCAb: { "data-framer-name": `Horizontal Stack Bottom Top` },
                      KjiLKY9bF: { "data-framer-name": `Grid Transition 4` },
                      sdSbN56j2: { "data-framer-name": `Vertical Stack Left Right` },
                      Va0w4c8kk: { "data-framer-name": `Grid Transition 2` },
                      wty_1cI1m: { "data-framer-name": `Vertical Stack Right Left` },
                      Y2u3isiEr: { "data-framer-name": `Grid Transition 3` },
                    },
                    m,
                    y
                  ),
                  children: [
                    f(O.div, {
                      className: `framer-145lr1b`,
                      "data-framer-name": `TL`,
                      layoutDependency: C,
                      layoutId: `e1WbN7hEv`,
                      style: {
                        "--corner-shape-fallback": 0.796,
                        backgroundColor: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
                        borderBottomLeftRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderBottomRightRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderTopLeftRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderTopRightRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        cornerShape: `superellipse(1.4)`,
                        filter: `blur(0px)`,
                        opacity: 1,
                        WebkitFilter: `blur(0px)`,
                      },
                      variants: {
                        G5M2NL8CV: {
                          borderBottomLeftRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          borderTopLeftRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          opacity: 1,
                        },
                        h7AoQLCAb: {
                          filter: `blur(1.5px)`,
                          opacity: 0,
                          WebkitFilter: `blur(1.5px)`,
                        },
                        KjiLKY9bF: { opacity: 1 },
                        sdSbN56j2: {
                          borderTopLeftRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          borderTopRightRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        },
                        Va0w4c8kk: { opacity: 1 },
                        wty_1cI1m: {
                          filter: `blur(1.5px)`,
                          opacity: 0,
                          WebkitFilter: `blur(1.5px)`,
                        },
                        Y2u3isiEr: { opacity: 1 },
                      },
                    }),
                    f(O.div, {
                      className: `framer-mz0smt`,
                      "data-framer-name": `TR`,
                      layoutDependency: C,
                      layoutId: `oLLdgtMs6`,
                      style: {
                        "--corner-shape-fallback": 0.796,
                        backgroundColor: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
                        borderBottomLeftRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderBottomRightRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderTopLeftRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderTopRightRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        cornerShape: `superellipse(1.4)`,
                        filter: `blur(0px)`,
                        opacity: 1,
                        WebkitFilter: `blur(0px)`,
                      },
                      variants: {
                        cxzVsnrBx: { opacity: 1 },
                        G5M2NL8CV: {
                          borderBottomRightRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          borderTopRightRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          opacity: 1,
                        },
                        h7AoQLCAb: {
                          filter: `blur(1.5px)`,
                          opacity: 0,
                          WebkitFilter: `blur(1.5px)`,
                        },
                        KjiLKY9bF: { opacity: 1 },
                        sdSbN56j2: {
                          filter: `blur(1.5px)`,
                          opacity: 0,
                          WebkitFilter: `blur(1.5px)`,
                        },
                        Va0w4c8kk: { opacity: 1 },
                        wty_1cI1m: {
                          borderTopLeftRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          borderTopRightRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          opacity: 1,
                        },
                        Y2u3isiEr: { opacity: 1 },
                      },
                    }),
                    f(O.div, {
                      className: `framer-k59rfm`,
                      "data-framer-name": `BL`,
                      layoutDependency: C,
                      layoutId: `TBMYyBpKY`,
                      style: {
                        "--corner-shape-fallback": 0.796,
                        backgroundColor: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
                        borderBottomLeftRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderBottomRightRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderTopLeftRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderTopRightRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        cornerShape: `superellipse(1.4)`,
                        filter: `blur(0px)`,
                        opacity: 1,
                        WebkitFilter: `blur(0px)`,
                      },
                      variants: {
                        G5M2NL8CV: {
                          filter: `blur(1.5px)`,
                          opacity: 0,
                          WebkitFilter: `blur(1.5px)`,
                        },
                        h7AoQLCAb: {
                          borderBottomLeftRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          borderTopLeftRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        },
                        KjiLKY9bF: { opacity: 1 },
                        sdSbN56j2: {
                          borderBottomLeftRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          borderBottomRightRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        },
                        wty_1cI1m: {
                          filter: `blur(1.5px)`,
                          opacity: 0,
                          WebkitFilter: `blur(1.5px)`,
                        },
                        Y2u3isiEr: { opacity: 1 },
                      },
                    }),
                    f(O.div, {
                      className: `framer-ctkz1u`,
                      "data-framer-name": `BR`,
                      layoutDependency: C,
                      layoutId: `FsDUjDx8G`,
                      style: {
                        "--corner-shape-fallback": 0.796,
                        backgroundColor: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
                        borderBottomLeftRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderBottomRightRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderTopLeftRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        borderTopRightRadius: `calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                        cornerShape: `superellipse(1.4)`,
                        filter: `blur(0px)`,
                        opacity: 1,
                        WebkitFilter: `blur(0px)`,
                      },
                      variants: {
                        cxzVsnrBx: { opacity: 1 },
                        G5M2NL8CV: {
                          filter: `blur(1.5px)`,
                          opacity: 0,
                          WebkitFilter: `blur(1.5px)`,
                        },
                        h7AoQLCAb: {
                          borderBottomRightRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          borderTopRightRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          opacity: 1,
                        },
                        KjiLKY9bF: { opacity: 1 },
                        sdSbN56j2: {
                          filter: `blur(1.5px)`,
                          opacity: 0,
                          WebkitFilter: `blur(1.5px)`,
                        },
                        Va0w4c8kk: { opacity: 1 },
                        wty_1cI1m: {
                          borderBottomLeftRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          borderBottomRightRadius: `calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          opacity: 1,
                        },
                        Y2u3isiEr: { opacity: 1 },
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-jro2V.framer-vf0jp3, .framer-jro2V .framer-vf0jp3 { display: block; }`,
          `.framer-jro2V.framer-bobhha { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: wrap; gap: 2px 2px; height: 22px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 22px; }`,
          `.framer-jro2V .framer-145lr1b { flex: none; height: 10px; left: calc(22.727272727272748% - 10px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(22.727272727272748% - 10px / 2); width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-jro2V .framer-mz0smt { flex: none; height: 10px; left: calc(77.2727272727273% - 10px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(22.727272727272748% - 10px / 2); width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-jro2V .framer-k59rfm { flex: none; height: 10px; left: calc(22.727272727272748% - 10px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(77.2727272727273% - 10px / 2); width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-jro2V .framer-ctkz1u { flex: none; height: 10px; left: calc(77.2727272727273% - 10px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(77.2727272727273% - 10px / 2); width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-jro2V.framer-v-1mdzciq .framer-145lr1b, .framer-jro2V.framer-v-1mdzciq .framer-k59rfm, .framer-jro2V.framer-v-4rzmmc .framer-mz0smt, .framer-jro2V.framer-v-4rzmmc .framer-ctkz1u { left: calc(50.00000000000002% - 22px / 2); width: 22px; }`,
          `.framer-jro2V.framer-v-1mdzciq .framer-mz0smt { height: 6px; left: calc(100.00000000000003% - 1px / 2); top: calc(22.727272727272748% - 6px / 2); width: 1px; }`,
          `.framer-jro2V.framer-v-1mdzciq .framer-ctkz1u { height: 6px; left: calc(100.00000000000003% - 1px / 2); top: calc(77.2727272727273% - 6px / 2); width: 1px; }`,
          `.framer-jro2V.framer-v-i2vseb .framer-145lr1b { height: 1px; left: calc(22.727272727272748% - 5px / 2); top: calc(2.220446049250313e-14% - 1px / 2); width: 5px; }`,
          `.framer-jro2V.framer-v-i2vseb .framer-mz0smt { height: 1px; left: calc(77.2727272727273% - 5px / 2); top: calc(2.220446049250313e-14% - 1px / 2); width: 5px; }`,
          `.framer-jro2V.framer-v-i2vseb .framer-k59rfm, .framer-jro2V.framer-v-i2vseb .framer-ctkz1u, .framer-jro2V.framer-v-15cblfr .framer-145lr1b, .framer-jro2V.framer-v-15cblfr .framer-mz0smt { height: 22px; top: calc(50.00000000000002% - 22px / 2); }`,
          `.framer-jro2V.framer-v-4rzmmc .framer-145lr1b { height: 5px; left: calc(2.220446049250313e-14% - 1px / 2); top: calc(22.727272727272748% - 5px / 2); width: 1px; }`,
          `.framer-jro2V.framer-v-4rzmmc .framer-k59rfm { height: 5px; left: calc(2.220446049250313e-14% - 1px / 2); top: calc(77.2727272727273% - 5px / 2); width: 1px; }`,
          `.framer-jro2V.framer-v-15cblfr .framer-k59rfm { height: 1px; left: calc(22.727272727272748% - 5px / 2); top: calc(95.45454545454548% - 1px / 2); width: 5px; }`,
          `.framer-jro2V.framer-v-15cblfr .framer-ctkz1u { height: 1px; left: calc(77.2727272727273% - 5px / 2); top: calc(95.45454545454548% - 1px / 2); width: 5px; }`,
        ],
        `framer-jro2V`
      )),
      (en = $t),
      ($t.displayName = `Logo Animation`),
      ($t.defaultProps = { height: 22, width: 22 }),
      R($t, {
        variant: {
          options: [
            `ix_AVL_oE`,
            `sdSbN56j2`,
            `cxzVsnrBx`,
            `h7AoQLCAb`,
            `Va0w4c8kk`,
            `wty_1cI1m`,
            `Y2u3isiEr`,
            `G5M2NL8CV`,
            `KjiLKY9bF`,
          ],
          optionTitles: [
            `Base`,
            `Vertical Stack Left Right`,
            `Grid Transition 1`,
            `Horizontal Stack Bottom Top`,
            `Grid Transition 2`,
            `Vertical Stack Right Left`,
            `Grid Transition 3`,
            `Horizontal Stack Top Bottom`,
            `Grid Transition 4`,
          ],
          title: `Variant`,
          type: W.Enum,
        },
      }),
      F($t, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function nn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn = e(() => {
    (y(),
      M(),
      j(),
      T(),
      Xe(),
      (rn = Oe(H)),
      (an = { qB5pg8Ij8: { hover: !0 } }),
      (on = [`qB5pg8Ij8`, `CUYG_Qlu5`]),
      (sn = `framer-x8U9c`),
      (cn = { CUYG_Qlu5: `framer-v-vzrzat`, qB5pg8Ij8: `framer-v-jxkc1m` }),
      ve(),
      (ln = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (un = { delay: 0, duration: 4, ease: [0, 0, 1, 1], type: `tween` }),
      (dn = {
        opacity: 0.7,
        rotate: 0,
        rotateX: 360,
        rotateY: 0,
        scale: 0.9,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (fn = (e, t) => `translateY(-50%) ${t}`),
      (pn = ({ value: e, children: n }) => {
        let r = t(k),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(k.Provider, { value: a, children: n });
      }),
      (mn = { Active: `CUYG_Qlu5`, Base: `qB5pg8Ij8` }),
      (hn = O.create(s)),
      (gn = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        J6WxF2MzP: n ?? a.J6WxF2MzP,
        KBMqEnldG: r ?? a.KBMqEnldG ?? `About`,
        variant: mn[a.variant] ?? a.variant ?? `qB5pg8Ij8`,
      })),
      (_n = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (vn = U(
        u(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = E(),
            { activeLocale: a, setLocale: c } = K();
          B();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              KBMqEnldG: m,
              J6WxF2MzP: h,
              ..._
            } = gn(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: ee,
              setGestureState: C,
              setVariant: w,
              variants: T,
            } = L({
              cycleOrder: on,
              defaultVariant: `qB5pg8Ij8`,
              enabledGestures: an,
              ref: r,
              variant: p,
              variantClassNames: cn,
            }),
            D = _n(e, T),
            k = P(sn, Ze),
            te = () => v !== `CUYG_Qlu5`;
          return f(A, {
            id: d ?? i,
            children: f(hn, {
              animate: T,
              initial: !1,
              children: f(pn, {
                value: ln,
                children: f(ze, {
                  href: h,
                  motionChild: !0,
                  nodeId: `qB5pg8Ij8`,
                  openInNewTab: !1,
                  scopeId: `xFNeFwpmq`,
                  smoothScroll: !0,
                  children: g(O.a, {
                    ..._,
                    ...x,
                    className: `${P(k, `framer-jxkc1m`, u, y)} framer-h5u78t`,
                    "data-framer-name": `Base`,
                    draggable: `false`,
                    layoutDependency: D,
                    layoutId: `qB5pg8Ij8`,
                    ref: r,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `rgba(0, 0, 0, 0)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      "--corner-shape-fallback": 0.796,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                      borderBottomLeftRadius: `calc(18px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      borderBottomRightRadius: `calc(18px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      borderTopLeftRadius: `calc(18px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      borderTopRightRadius: `calc(18px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      cornerShape: `superellipse(1.4)`,
                      ...l,
                    },
                    variants: {
                      "qB5pg8Ij8-hover": {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                      CUYG_Qlu5: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-95a8f7e0-de26-4a21-abd8-7324f048c094, rgb(189, 189, 189))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `dashed`,
                        "--border-top-width": `1px`,
                        backgroundColor: `var(--token-fe732e94-f30f-4945-91af-015cdcf1f937, rgba(0, 0, 0, 0.05))`,
                      },
                    },
                    ...nn(
                      {
                        "qB5pg8Ij8-hover": { "data-framer-name": void 0 },
                        CUYG_Qlu5: { "data-border": !0, "data-framer-name": `Active` },
                      },
                      v,
                      S
                    ),
                    children: [
                      f(rn, {
                        __fromCanvasComponent: !0,
                        children: f(s, {
                          children: f(O.p, {
                            className: `framer-styles-preset-1i4fe7d`,
                            "data-styles-preset": `NbDFs5rgP`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84)))`,
                            },
                            children: `About`,
                          }),
                        }),
                        className: `framer-1hiziu2`,
                        fonts: [`Inter`],
                        layoutDependency: D,
                        layoutId: `PsaRafRTO`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: m,
                        variants: {
                          "qB5pg8Ij8-hover": {
                            "--extracted-r6o4lv": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                          },
                          CUYG_Qlu5: {
                            "--extracted-r6o4lv": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...nn(
                          {
                            "qB5pg8Ij8-hover": {
                              children: f(s, {
                                children: f(O.p, {
                                  className: `framer-styles-preset-1i4fe7d`,
                                  "data-styles-preset": `NbDFs5rgP`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0)))`,
                                  },
                                  children: `About`,
                                }),
                              }),
                            },
                            CUYG_Qlu5: {
                              __framer__loop: dn,
                              __framer__loopEffectEnabled: !0,
                              __framer__loopPauseOffscreen: !0,
                              __framer__loopRepeatDelay: 0,
                              __framer__loopRepeatType: `mirror`,
                              __framer__loopTransition: un,
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              children: f(s, {
                                children: f(O.p, {
                                  className: `framer-styles-preset-1i4fe7d`,
                                  "data-styles-preset": `NbDFs5rgP`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0)))`,
                                  },
                                  children: `About`,
                                }),
                              }),
                            },
                          },
                          v,
                          S
                        ),
                      }),
                      te() &&
                        f(H, {
                          __fromCanvasComponent: !0,
                          children: f(s, {
                            children: f(O.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `R0Y7R29vZ2xlIFNhbnMgRmxleC12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJREU0TENBaWQyUjBhQ0lnTVRBd0xDQWlkMmRvZENJZ05ESTFMQ0FpUjFKQlJDSWdNQ3dnSWxKUFRrUWlJREFzSUNKemJHNTBJaUF3`,
                                "--framer-font-family": `"Google Sans Flex Variable", "Google Sans Flex Variable Placeholder", sans-serif`,
                                "--framer-font-size": `13px`,
                                "--framer-font-variation-axes": `var(--extracted-2gg91v, "opsz" 18, "wdth" 100, "wght" 425, "GRAD" 0, "ROND" 0, "slnt" 0)`,
                                "--framer-letter-spacing": `0.01em`,
                                "--framer-line-height": `1.6em`,
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99)))`,
                              },
                              children: `[`,
                            }),
                          }),
                          className: `framer-1gf40pe`,
                          fonts: [`GF;Google Sans Flex-variable-regular`],
                          layoutDependency: D,
                          layoutId: `YHNUNAhfh`,
                          style: {
                            "--extracted-2gg91v": `"opsz" 18, "wdth" 100, "wght" 425, "GRAD" 0, "ROND" 0, "slnt" 0`,
                            "--extracted-r6o4lv": `var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          transformTemplate: fn,
                          variants: {
                            "qB5pg8Ij8-hover": {
                              "--extracted-r6o4lv": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...nn(
                            {
                              "qB5pg8Ij8-hover": {
                                children: f(s, {
                                  children: f(O.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7R29vZ2xlIFNhbnMgRmxleC12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJREU0TENBaWQyUjBhQ0lnTVRBd0xDQWlkMmRvZENJZ05ESTFMQ0FpUjFKQlJDSWdNQ3dnSWxKUFRrUWlJREFzSUNKemJHNTBJaUF3`,
                                      "--framer-font-family": `"Google Sans Flex Variable", "Google Sans Flex Variable Placeholder", sans-serif`,
                                      "--framer-font-size": `13px`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, "opsz" 18, "wdth" 100, "wght" 425, "GRAD" 0, "ROND" 0, "slnt" 0)`,
                                      "--framer-letter-spacing": `0.01em`,
                                      "--framer-line-height": `1.6em`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0)))`,
                                    },
                                    children: `[`,
                                  }),
                                }),
                              },
                            },
                            v,
                            S
                          ),
                        }),
                      te() &&
                        f(H, {
                          __fromCanvasComponent: !0,
                          children: f(s, {
                            children: f(O.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `R0Y7R29vZ2xlIFNhbnMgRmxleC12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJREU0TENBaWQyUjBhQ0lnTVRBd0xDQWlkMmRvZENJZ05ESTFMQ0FpUjFKQlJDSWdNQ3dnSWxKUFRrUWlJREFzSUNKemJHNTBJaUF3`,
                                "--framer-font-family": `"Google Sans Flex Variable", "Google Sans Flex Variable Placeholder", sans-serif`,
                                "--framer-font-size": `13px`,
                                "--framer-font-variation-axes": `var(--extracted-2gg91v, "opsz" 18, "wdth" 100, "wght" 425, "GRAD" 0, "ROND" 0, "slnt" 0)`,
                                "--framer-letter-spacing": `0.01em`,
                                "--framer-line-height": `1.6em`,
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99)))`,
                              },
                              children: `]`,
                            }),
                          }),
                          className: `framer-1acvs8d`,
                          fonts: [`GF;Google Sans Flex-variable-regular`],
                          layoutDependency: D,
                          layoutId: `PvsiyTInn`,
                          style: {
                            "--extracted-2gg91v": `"opsz" 18, "wdth" 100, "wght" 425, "GRAD" 0, "ROND" 0, "slnt" 0`,
                            "--extracted-r6o4lv": `var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          transformTemplate: fn,
                          variants: {
                            "qB5pg8Ij8-hover": {
                              "--extracted-r6o4lv": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...nn(
                            {
                              "qB5pg8Ij8-hover": {
                                children: f(s, {
                                  children: f(O.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7R29vZ2xlIFNhbnMgRmxleC12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJREU0TENBaWQyUjBhQ0lnTVRBd0xDQWlkMmRvZENJZ05ESTFMQ0FpUjFKQlJDSWdNQ3dnSWxKUFRrUWlJREFzSUNKemJHNTBJaUF3`,
                                      "--framer-font-family": `"Google Sans Flex Variable", "Google Sans Flex Variable Placeholder", sans-serif`,
                                      "--framer-font-size": `13px`,
                                      "--framer-font-variation-axes": `var(--extracted-2gg91v, "opsz" 18, "wdth" 100, "wght" 425, "GRAD" 0, "ROND" 0, "slnt" 0)`,
                                      "--framer-letter-spacing": `0.01em`,
                                      "--framer-line-height": `1.6em`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0)))`,
                                    },
                                    children: `]`,
                                  }),
                                }),
                              },
                            },
                            v,
                            S
                          ),
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-x8U9c.framer-h5u78t, .framer-x8U9c .framer-h5u78t { display: block; }`,
          `.framer-x8U9c.framer-jxkc1m { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px 10px 4px 10px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-x8U9c .framer-1hiziu2 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-x8U9c .framer-1gf40pe { -webkit-user-select: none; flex: none; height: auto; left: 4px; pointer-events: none; position: absolute; top: 49%; user-select: none; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-x8U9c .framer-1acvs8d { -webkit-user-select: none; flex: none; height: auto; pointer-events: none; position: absolute; right: 4px; top: 49%; user-select: none; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-x8U9c.framer-v-vzrzat.framer-jxkc1m { cursor: default; }`,
          `.framer-x8U9c.framer-v-jxkc1m.hover .framer-1gf40pe { left: 0px; }`,
          `.framer-x8U9c.framer-v-jxkc1m.hover .framer-1acvs8d { right: 0px; }`,
          ...Ye,
          `.framer-x8U9c[data-border="true"]::after, .framer-x8U9c [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-x8U9c`
      )),
      (yn = vn),
      (vn.displayName = `Navigation Link`),
      (vn.defaultProps = { height: 30.5, width: 60 }),
      R(vn, {
        variant: {
          options: [`qB5pg8Ij8`, `CUYG_Qlu5`],
          optionTitles: [`Base`, `Active`],
          title: `Variant`,
          type: W.Enum,
        },
        KBMqEnldG: { defaultValue: `About`, displayTextArea: !1, title: `Title`, type: W.String },
        onKBMqEnldGChange: { changes: `KBMqEnldG`, type: W.ChangeHandler },
        J6WxF2MzP: { title: `Link`, type: W.Link },
      }),
      F(
        vn,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Google Sans Flex Variable`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Google Sans Flex`,
                url: `https://fonts.gstatic.com/s/googlesansflex/v21/t5t7IQcYNIWbFgDgAAzZ34auoVyXip6sfhcat2c.woff2`,
                variationAxes: [
                  {
                    defaultValue: 18,
                    maxValue: 144,
                    minValue: 6,
                    name: `Optical Size`,
                    tag: `opsz`,
                  },
                  { defaultValue: 100, maxValue: 151, minValue: 25, name: `Width`, tag: `wdth` },
                  { defaultValue: 400, maxValue: 1e3, minValue: 1, name: `Weight`, tag: `wght` },
                  { defaultValue: 0, maxValue: 100, minValue: 0, name: `Grade`, tag: `GRAD` },
                  { defaultValue: 0, maxValue: 100, minValue: 0, name: `Roundness`, tag: `ROND` },
                  { defaultValue: 0, maxValue: 0, minValue: -10, name: `Slant`, tag: `slnt` },
                ],
                weight: `400`,
              },
            ],
          },
          ...oe(Je),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Y(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn = e(() => {
    (y(),
      M(),
      j(),
      T(),
      We(),
      Ht(),
      tn(),
      bn(),
      (xn = N(yn)),
      (Sn = N(en)),
      (Cn = N(Ge)),
      (wn = N(Vt)),
      (Tn = [`OECEM5TdI`, `HApJ7U0UN`, `ZjcOy4Cib`, `bc2YXHwMc`]),
      (En = `framer-amPzj`),
      (Dn = {
        bc2YXHwMc: `framer-v-ks8b7i`,
        HApJ7U0UN: `framer-v-mm42p5`,
        OECEM5TdI: `framer-v-wl7jcf`,
        ZjcOy4Cib: `framer-v-19k9xp4`,
      }),
      (On = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (kn = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e.toLowerCase() === t.toLowerCase()
          : e === t),
      (An = (e, t) => (e ? `CUYG_Qlu5` : `qB5pg8Ij8`)),
      (jn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Mn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.8,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0, duration: 0.4, type: `spring` },
      }),
      (Nn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.75,
        skewX: 0,
        skewY: 0,
        transition: On,
      }),
      (Pn = ({ value: e, children: n }) => {
        let r = t(k),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(k.Provider, { value: a, children: n });
      }),
      (Fn = {
        "Small Menu Closed": `ZjcOy4Cib`,
        "Small Menu Open": `bc2YXHwMc`,
        Large: `OECEM5TdI`,
        Medium: `HApJ7U0UN`,
      }),
      (In = O.create(s)),
      (Ln = {
        "Case Studies": `tvf2Rcv44`,
        About: `t1T96jyoV`,
        Contact: `SxGmqKUGH`,
        Others: `RXhpLCgbr`,
        Pricing: `glgEnQfoK`,
      }),
      (Rn = ({ currentPage: e, height: t, id: n, togglePhoneMenu: r, width: i, ...a }) => ({
        ...a,
        GTsNoximw: r ?? a.GTsNoximw,
        mX633isTE: Ln[e] ?? e ?? a.mX633isTE ?? `RXhpLCgbr`,
        variant: Fn[a.variant] ?? a.variant ?? `OECEM5TdI`,
      })),
      (zn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Bn = U(
        u(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = E(),
            { activeLocale: a, setLocale: s } = K(),
            c = B(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              mX633isTE: m,
              GTsNoximw: h,
              ..._
            } = Rn(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: ee,
              setGestureState: C,
              setVariant: w,
              variants: T,
            } = L({
              cycleOrder: Tn,
              defaultVariant: `OECEM5TdI`,
              ref: r,
              variant: p,
              variantClassNames: Dn,
            }),
            D = zn(e, T),
            { activeVariantCallback: k, delay: te } = xe(v),
            j = k(async (...e) => {
              if (h && (await h(...e)) === !1) return !1;
            }),
            M = P(En),
            ne = () => ![`ZjcOy4Cib`, `bc2YXHwMc`].includes(v);
          me();
          let re = () => !![`ZjcOy4Cib`, `bc2YXHwMc`].includes(v);
          return f(A, {
            id: d ?? i,
            children: f(In, {
              animate: T,
              initial: !1,
              children: f(Pn, {
                value: On,
                children: f(O.nav, {
                  ..._,
                  ...x,
                  className: P(M, `framer-wl7jcf`, u, y),
                  "data-framer-name": `Large`,
                  layoutDependency: D,
                  layoutId: `OECEM5TdI`,
                  ref: r,
                  style: { ...l },
                  ...Y(
                    {
                      bc2YXHwMc: { "data-framer-name": `Small Menu Open` },
                      HApJ7U0UN: { "data-framer-name": `Medium` },
                      ZjcOy4Cib: { "data-framer-name": `Small Menu Closed` },
                    },
                    v,
                    S
                  ),
                  children: g(O.div, {
                    className: `framer-1uuh4hs`,
                    "data-border": !0,
                    "data-framer-name": `Content`,
                    layoutDependency: D,
                    layoutId: `l1yYakfxe`,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      backgroundColor: `var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, rgb(245, 245, 245))`,
                    },
                    children: [
                      ne() &&
                        g(O.div, {
                          className: `framer-1nb70iu`,
                          "data-framer-name": `Links`,
                          layoutDependency: D,
                          layoutId: `pN_Rt8IdY`,
                          children: [
                            f(I, {
                              links: [
                                {
                                  href: { hash: `:dMa3I_0FQ`, webPageId: `augiA20Il` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `:dMa3I_0FQ`, webPageId: `augiA20Il` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                f(z, {
                                  height: 30,
                                  y:
                                    (c?.y || 0) +
                                    (0 +
                                      ((c?.height || 70) - 0 - ((c?.height || 70) - 0) * 1) / 2) +
                                    (0 + (((c?.height || 70) - 0) * 1 - 0 - 30) / 2) +
                                    0,
                                  children: f(V, {
                                    className: `framer-q19tcp-container`,
                                    layoutDependency: D,
                                    layoutId: `T8vSDGAsP-container`,
                                    nodeId: `T8vSDGAsP`,
                                    rendersWithMotion: !0,
                                    scopeId: `fb0_pR65E`,
                                    children: f(yn, {
                                      height: `100%`,
                                      id: `T8vSDGAsP`,
                                      J6WxF2MzP: e[0],
                                      KBMqEnldG: `How it works`,
                                      layoutId: `T8vSDGAsP`,
                                      variant: jn(An(kn(m, `t1T96jyoV`), a)),
                                      width: `100%`,
                                      ...Y({ HApJ7U0UN: { J6WxF2MzP: e[1] } }, v, S),
                                    }),
                                  }),
                                }),
                            }),
                            f(I, {
                              links: [
                                {
                                  href: { hash: `:wHPteuBSd`, webPageId: `augiA20Il` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `:wHPteuBSd`, webPageId: `augiA20Il` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                f(z, {
                                  height: 30,
                                  y:
                                    (c?.y || 0) +
                                    (0 +
                                      ((c?.height || 70) - 0 - ((c?.height || 70) - 0) * 1) / 2) +
                                    (0 + (((c?.height || 70) - 0) * 1 - 0 - 30) / 2) +
                                    0,
                                  children: f(V, {
                                    className: `framer-btbdi1-container`,
                                    layoutDependency: D,
                                    layoutId: `vLzsDBvFc-container`,
                                    nodeId: `vLzsDBvFc`,
                                    rendersWithMotion: !0,
                                    scopeId: `fb0_pR65E`,
                                    children: f(yn, {
                                      height: `100%`,
                                      id: `vLzsDBvFc`,
                                      J6WxF2MzP: e[0],
                                      KBMqEnldG: `The edge`,
                                      layoutId: `vLzsDBvFc`,
                                      variant: jn(An(kn(m, `glgEnQfoK`), a)),
                                      width: `100%`,
                                      ...Y({ HApJ7U0UN: { J6WxF2MzP: e[1] } }, v, S),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                      f(ze, {
                        href: { webPageId: `augiA20Il` },
                        motionChild: !0,
                        nodeId: `WSAouRBgI`,
                        openInNewTab: !1,
                        scopeId: `fb0_pR65E`,
                        children: f(O.a, {
                          "aria-label": `Home Page Logo Link`,
                          className: `framer-g3w6q6 framer-xkaqe6`,
                          "data-framer-name": `Logo`,
                          draggable: `false`,
                          layoutDependency: D,
                          layoutId: `WSAouRBgI`,
                          children: f(z, {
                            height: 22,
                            width: `22px`,
                            y:
                              (c?.y || 0) +
                              (0 + ((c?.height || 70) - 0 - ((c?.height || 70) - 0) * 1) / 2) +
                              (((c?.height || 70) - 0) * 1 * 0.5000000000000002 - 11) +
                              0,
                            ...Y(
                              {
                                bc2YXHwMc: {
                                  y:
                                    (c?.y || 0) +
                                    (0 +
                                      ((c?.height || 70) - 0 - ((c?.height || 70) - 0) * 1) / 2) +
                                    (0 + (((c?.height || 70) - 0) * 1 - 0 - 22) / 2) +
                                    0,
                                },
                                ZjcOy4Cib: {
                                  y:
                                    (c?.y || 0) +
                                    (0 +
                                      ((c?.height || 70) - 0 - ((c?.height || 70) - 0) * 1) / 2) +
                                    (0 + (((c?.height || 70) - 0) * 1 - 0 - 22) / 2) +
                                    0,
                                },
                              },
                              v,
                              S
                            ),
                            children: f(V, {
                              className: `framer-11azskw-container`,
                              layoutDependency: D,
                              layoutId: `qqfiyq9h1-container`,
                              nodeId: `qqfiyq9h1`,
                              rendersWithMotion: !0,
                              scopeId: `fb0_pR65E`,
                              whileHover: Mn,
                              whileTap: Nn,
                              children: f(en, {
                                height: `100%`,
                                id: `qqfiyq9h1`,
                                layoutId: `qqfiyq9h1`,
                                style: { width: `100%` },
                                variant: jn(`ix_AVL_oE`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                      ne() &&
                        f(O.div, {
                          className: `framer-1ck6rat`,
                          "data-framer-name": `Spacer`,
                          layoutDependency: D,
                          layoutId: `eS_pn97hr`,
                        }),
                      ne() &&
                        g(O.div, {
                          className: `framer-9z2jr8`,
                          "data-framer-name": `Links`,
                          layoutDependency: D,
                          layoutId: `VsnQQgHQJ`,
                          children: [
                            f(I, {
                              links: [
                                {
                                  href: { hash: `:IEzvAGyIY`, webPageId: `augiA20Il` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `:IEzvAGyIY`, webPageId: `augiA20Il` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                f(z, {
                                  height: 30,
                                  y:
                                    (c?.y || 0) +
                                    (0 +
                                      ((c?.height || 70) - 0 - ((c?.height || 70) - 0) * 1) / 2) +
                                    (0 + (((c?.height || 70) - 0) * 1 - 0 - 31) / 2) +
                                    0.5,
                                  children: f(V, {
                                    className: `framer-1p6qu0m-container`,
                                    layoutDependency: D,
                                    layoutId: `Hz5DM7jnt-container`,
                                    nodeId: `Hz5DM7jnt`,
                                    rendersWithMotion: !0,
                                    scopeId: `fb0_pR65E`,
                                    children: f(yn, {
                                      height: `100%`,
                                      id: `Hz5DM7jnt`,
                                      J6WxF2MzP: e[0],
                                      KBMqEnldG: `Engagements`,
                                      layoutId: `Hz5DM7jnt`,
                                      variant: jn(An(kn(m, `tvf2Rcv44`), a)),
                                      width: `100%`,
                                      ...Y({ HApJ7U0UN: { J6WxF2MzP: e[1] } }, v, S),
                                    }),
                                  }),
                                }),
                            }),
                            f(I, {
                              links: [
                                {
                                  href: { hash: `:LC8uHYUKO`, webPageId: `augiA20Il` },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { hash: `:LC8uHYUKO`, webPageId: `augiA20Il` },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                f(z, {
                                  height: 31,
                                  y:
                                    (c?.y || 0) +
                                    (0 +
                                      ((c?.height || 70) - 0 - ((c?.height || 70) - 0) * 1) / 2) +
                                    (0 + (((c?.height || 70) - 0) * 1 - 0 - 31) / 2) +
                                    0,
                                  children: f(V, {
                                    className: `framer-5xjbbm-container`,
                                    layoutDependency: D,
                                    layoutId: `heuejimjG-container`,
                                    nodeId: `heuejimjG`,
                                    rendersWithMotion: !0,
                                    scopeId: `fb0_pR65E`,
                                    children: f(Ge, {
                                      height: `100%`,
                                      id: `heuejimjG`,
                                      JvqpmmvGw: e[0],
                                      layoutId: `heuejimjG`,
                                      vA9NXfDIM: `Request access`,
                                      variant: jn(`kWnN_xkUt`),
                                      width: `100%`,
                                      ...Y({ HApJ7U0UN: { JvqpmmvGw: e[1] } }, v, S),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                      re() &&
                        f(z, {
                          ...Y(
                            {
                              bc2YXHwMc: {
                                height: 28,
                                y:
                                  (c?.y || 0) +
                                  (0 + ((c?.height || 70) - 0 - ((c?.height || 70) - 0) * 1) / 2) +
                                  (0 + (((c?.height || 70) - 0) * 1 - 0 - 28) / 2),
                              },
                              ZjcOy4Cib: {
                                height: 28,
                                y:
                                  (c?.y || 0) +
                                  (0 + ((c?.height || 70) - 0 - ((c?.height || 70) - 0) * 1) / 2) +
                                  (0 + (((c?.height || 70) - 0) * 1 - 0 - 28) / 2),
                              },
                            },
                            v,
                            S
                          ),
                          children: f(V, {
                            className: `framer-pu3uca-container`,
                            layoutDependency: D,
                            layoutId: `bIYoxwuxF-container`,
                            nodeId: `bIYoxwuxF`,
                            rendersWithMotion: !0,
                            scopeId: `fb0_pR65E`,
                            children: f(Vt, {
                              height: `100%`,
                              id: `bIYoxwuxF`,
                              layoutId: `bIYoxwuxF`,
                              variant: jn(`ytn0II0h0`),
                              width: `100%`,
                              ...Y(
                                {
                                  bc2YXHwMc: { god0NnfkT: j, variant: jn(`f8rfqW1w2`) },
                                  ZjcOy4Cib: { god0NnfkT: j },
                                },
                                v,
                                S
                              ),
                            }),
                          }),
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-amPzj.framer-xkaqe6, .framer-amPzj .framer-xkaqe6 { display: block; }`,
          `.framer-amPzj.framer-wl7jcf { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 70px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1000px; }`,
          `.framer-amPzj .framer-1uuh4hs { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; max-width: 1180px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 28px 0px 28px; position: relative; width: 1px; }`,
          `.framer-amPzj .framer-1nb70iu { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-amPzj .framer-q19tcp-container, .framer-amPzj .framer-btbdi1-container, .framer-amPzj .framer-1p6qu0m-container, .framer-amPzj .framer-5xjbbm-container, .framer-amPzj .framer-pu3uca-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-amPzj .framer-g3w6q6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 22px; justify-content: center; left: calc(50.00000000000002% - 22px / 2); overflow: visible; padding: 0px; position: absolute; text-decoration: none; top: calc(50.00000000000002% - 22px / 2); width: 22px; }`,
          `.framer-amPzj .framer-11azskw-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
          `.framer-amPzj .framer-1ck6rat { flex: none; height: 100%; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; width: 100px; }`,
          `.framer-amPzj .framer-9z2jr8 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-amPzj.framer-v-mm42p5 .framer-1uuh4hs { max-width: 780px; }`,
          `.framer-amPzj.framer-v-19k9xp4.framer-wl7jcf, .framer-amPzj.framer-v-ks8b7i.framer-wl7jcf { width: 366px; }`,
          `.framer-amPzj.framer-v-19k9xp4 .framer-1uuh4hs, .framer-amPzj.framer-v-ks8b7i .framer-1uuh4hs { gap: unset; justify-content: space-between; max-width: 600px; }`,
          `.framer-amPzj.framer-v-19k9xp4 .framer-g3w6q6, .framer-amPzj.framer-v-ks8b7i .framer-g3w6q6 { left: unset; position: relative; top: unset; z-index: 1; }`,
          `.framer-amPzj[data-border="true"]::after, .framer-amPzj [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-amPzj`
      )),
      (Vn = Bn),
      (Bn.displayName = `Navigation`),
      (Bn.defaultProps = { height: 70, width: 1e3 }),
      R(Bn, {
        variant: {
          options: [`OECEM5TdI`, `HApJ7U0UN`, `ZjcOy4Cib`, `bc2YXHwMc`],
          optionTitles: [`Large`, `Medium`, `Small Menu Closed`, `Small Menu Open`],
          title: `Variant`,
          type: W.Enum,
        },
        mX633isTE: {
          defaultValue: `RXhpLCgbr`,
          options: [`t1T96jyoV`, `glgEnQfoK`, `tvf2Rcv44`, `SxGmqKUGH`, `RXhpLCgbr`],
          optionTitles: [`About`, `Pricing`, `Case Studies`, `Contact`, `Others`],
          title: `Current Page`,
          type: W.Enum,
        },
        onmX633isTEChange: { changes: `mX633isTE`, type: W.ChangeHandler },
        GTsNoximw: { title: `Toggle Phone Menu`, type: W.EventHandler },
      }),
      F(Bn, [{ explicitInter: !0, fonts: [] }, ...xn, ...Sn, ...Cn, ...wn], {
        supportsExplicitInterCodegen: !0,
      }),
      (Bn.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([q(yn, {}, t), q(en, {}, t), q(Ge, {}, t), q(Vt, {}, t)])
        ),
      }));
  }),
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  X,
  Zn = e(() => {
    (y(),
      M(),
      j(),
      T(),
      ot(),
      (Un = `framer-W2P6K`),
      (Wn = { VDn9J1DDX: `framer-v-q6ml10` }),
      (Gn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Kn = ({ value: e, children: n }) => {
        let r = t(k),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(k.Provider, { value: a, children: n });
      }),
      (qn = O.create(s)),
      (Jn = ({ click: e, height: t, id: n, link: r, title: i, width: a, ...o }) => ({
        ...o,
        LAQQ0HHHX: e ?? o.LAQQ0HHHX,
        T4TN0TPWG: r ?? o.T4TN0TPWG,
        WbspzAGED: i ?? o.WbspzAGED ?? `Home`,
      })),
      (Yn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Xn = U(
        u(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = E(),
            { activeLocale: a, setLocale: c } = K();
          B();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              WbspzAGED: m,
              T4TN0TPWG: h,
              LAQQ0HHHX: g,
              ..._
            } = Jn(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: ee,
              setGestureState: C,
              setVariant: w,
              variants: T,
            } = L({ defaultVariant: `VDn9J1DDX`, ref: r, variant: p, variantClassNames: Wn }),
            D = Yn(e, T),
            { activeVariantCallback: k, delay: te } = xe(v),
            j = k(async (...e) => {
              if ((C({ isPressed: !1 }), g && (await g(...e)) === !1)) return !1;
            }),
            M = P(Un, lt);
          return f(A, {
            id: d ?? i,
            children: f(qn, {
              animate: T,
              initial: !1,
              children: f(Kn, {
                value: Gn,
                children: f(ze, {
                  href: h,
                  motionChild: !0,
                  nodeId: `VDn9J1DDX`,
                  openInNewTab: !1,
                  scopeId: `qBv3f0KBz`,
                  children: f(O.a, {
                    ..._,
                    ...x,
                    className: `${P(M, `framer-q6ml10`, u, y)} framer-1fm2n88`,
                    "data-framer-name": `Primary`,
                    "data-highlight": !0,
                    layoutDependency: D,
                    layoutId: `VDn9J1DDX`,
                    onTap: j,
                    ref: r,
                    style: { ...l },
                    children: f(H, {
                      __fromCanvasComponent: !0,
                      children: f(s, {
                        children: f(O.p, {
                          className: `framer-styles-preset-1217b5x`,
                          "data-styles-preset": `LBghXxOCz`,
                          dir: `auto`,
                          style: {
                            "--framer-text-alignment": `left`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0)))`,
                          },
                          children: `Home`,
                        }),
                      }),
                      className: `framer-7uzgw9`,
                      fonts: [`Inter`],
                      layoutDependency: D,
                      layoutId: `lGaLCcXhY`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: m,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-W2P6K.framer-1fm2n88, .framer-W2P6K .framer-1fm2n88 { display: block; }`,
          `.framer-W2P6K.framer-q6ml10 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 334px; }`,
          `.framer-W2P6K .framer-7uzgw9 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          ...st,
        ],
        `framer-W2P6K`
      )),
      (X = Xn),
      (Xn.displayName = `Phone Menu Link`),
      (Xn.defaultProps = { height: 51, width: 334 }),
      R(Xn, {
        WbspzAGED: { defaultValue: `Home`, displayTextArea: !1, title: `Title`, type: W.String },
        onWbspzAGEDChange: { changes: `WbspzAGED`, type: W.ChangeHandler },
        T4TN0TPWG: { title: `Link`, type: W.Link },
        LAQQ0HHHX: { title: `Click`, type: W.EventHandler },
      }),
      F(
        Xn,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...oe(ct),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr = e(() => {
    (y(),
      M(),
      j(),
      T(),
      $e(),
      Zn(),
      dt(),
      (Qn = N(X)),
      ($n = N(ut)),
      (er = le(Oe(O.div))),
      (tr = `framer-eYMa6`),
      (nr = { eCVKP5cLb: `framer-v-1wnscys` }),
      (rr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ir = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0.6, duration: 0.6, type: `spring` },
        x: 0,
        y: 0,
      }),
      (ar = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (or = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (sr = ({ value: e, children: n }) => {
        let r = t(k),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(k.Provider, { value: a, children: n });
      }),
      (cr = O.create(s)),
      (lr = ({ closeOverlay: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        Ny8O4YToJ: e ?? i.Ny8O4YToJ,
      })),
      (ur = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (dr = U(
        u(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = E(),
            { activeLocale: a, setLocale: c } = K(),
            l = B(),
            { style: u, className: d, layoutId: p, variant: m, Ny8O4YToJ: h, ..._ } = lr(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: ee,
              setGestureState: C,
              setVariant: w,
              variants: T,
            } = L({ defaultVariant: `eCVKP5cLb`, ref: r, variant: m, variantClassNames: nr }),
            D = ur(e, T),
            { activeVariantCallback: k, delay: te } = xe(v),
            j = k(async (...e) => {
              if (h && (await te(() => {}, 100), (await h(...e)) === !1)) return !1;
            }),
            M = P(tr, Qe);
          return (
            me(),
            f(A, {
              id: p ?? i,
              children: f(cr, {
                animate: T,
                initial: !1,
                children: f(sr, {
                  value: rr,
                  children: f(O.div, {
                    ..._,
                    ...x,
                    className: P(M, `framer-1wnscys`, d, y),
                    "data-border": !0,
                    "data-framer-name": `Primary`,
                    "data-hide-scrollbars": !0,
                    layoutDependency: D,
                    layoutId: `eCVKP5cLb`,
                    ref: r,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      backgroundColor: `var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, rgb(250, 250, 250))`,
                      ...u,
                    },
                    children: g(er, {
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      animate: ir,
                      className: `framer-g4xq83`,
                      "data-framer-appear-id": `g4xq83`,
                      "data-framer-name": `Content`,
                      initial: ar,
                      layoutDependency: D,
                      layoutId: `DpVnI92Q2`,
                      optimized: !0,
                      children: [
                        g(O.div, {
                          className: `framer-x7fx7v`,
                          "data-framer-name": `Pages`,
                          layoutDependency: D,
                          layoutId: `tuWu7bnmt`,
                          children: [
                            f(H, {
                              __fromCanvasComponent: !0,
                              children: f(s, {
                                children: f(O.p, {
                                  className: `framer-styles-preset-79bu04`,
                                  "data-styles-preset": `GMp6ZDbq7`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, rgb(120, 120, 120)))`,
                                  },
                                  children: `Pages`,
                                }),
                              }),
                              className: `framer-1223hxr`,
                              fonts: [`Inter`],
                              layoutDependency: D,
                              layoutId: `Ojx9Bgwm2`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, rgb(120, 120, 120))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            g(O.div, {
                              className: `framer-yijvx0`,
                              "data-framer-name": `Links`,
                              layoutDependency: D,
                              layoutId: `X4y72Jpap`,
                              children: [
                                f(I, {
                                  links: [
                                    {
                                      href: { webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(z, {
                                      height: 51,
                                      width: `calc(${l?.width || `100vw`} - 56px)`,
                                      y: (l?.y || 0) + 100 + 0 + 0 + 0 + 0 + 138 + 0 + 0,
                                      children: f(V, {
                                        className: `framer-1wb3b87-container`,
                                        layoutDependency: D,
                                        layoutId: `PH1btO39o-container`,
                                        nodeId: `PH1btO39o`,
                                        rendersWithMotion: !0,
                                        scopeId: `KB3ubcGXn`,
                                        children: f(X, {
                                          height: `100%`,
                                          id: `PH1btO39o`,
                                          LAQQ0HHHX: j,
                                          layoutId: `PH1btO39o`,
                                          style: { width: `100%` },
                                          T4TN0TPWG: e[0],
                                          WbspzAGED: `Home`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                                f(I, {
                                  links: [
                                    {
                                      href: { hash: `:dMa3I_0FQ`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(z, {
                                      height: 51,
                                      width: `calc(${l?.width || `100vw`} - 56px)`,
                                      y: (l?.y || 0) + 100 + 0 + 0 + 0 + 0 + 138 + 0 + 51,
                                      children: f(V, {
                                        className: `framer-gd2kun-container`,
                                        layoutDependency: D,
                                        layoutId: `eXlbZLDaL-container`,
                                        nodeId: `eXlbZLDaL`,
                                        rendersWithMotion: !0,
                                        scopeId: `KB3ubcGXn`,
                                        children: f(X, {
                                          height: `100%`,
                                          id: `eXlbZLDaL`,
                                          LAQQ0HHHX: j,
                                          layoutId: `eXlbZLDaL`,
                                          style: { width: `100%` },
                                          T4TN0TPWG: e[0],
                                          WbspzAGED: `How it works`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                                f(I, {
                                  links: [
                                    {
                                      href: { hash: `:wHPteuBSd`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(z, {
                                      height: 51,
                                      width: `calc(${l?.width || `100vw`} - 56px)`,
                                      y: (l?.y || 0) + 100 + 0 + 0 + 0 + 0 + 138 + 0 + 102,
                                      children: f(V, {
                                        className: `framer-fczvd6-container`,
                                        layoutDependency: D,
                                        layoutId: `uzTKa2OId-container`,
                                        nodeId: `uzTKa2OId`,
                                        rendersWithMotion: !0,
                                        scopeId: `KB3ubcGXn`,
                                        children: f(X, {
                                          height: `100%`,
                                          id: `uzTKa2OId`,
                                          LAQQ0HHHX: j,
                                          layoutId: `uzTKa2OId`,
                                          style: { width: `100%` },
                                          T4TN0TPWG: e[0],
                                          WbspzAGED: `The edge`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                                f(I, {
                                  links: [
                                    {
                                      href: { hash: `:IEzvAGyIY`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(z, {
                                      height: 51,
                                      width: `calc(${l?.width || `100vw`} - 56px)`,
                                      y: (l?.y || 0) + 100 + 0 + 0 + 0 + 0 + 138 + 0 + 153,
                                      children: f(V, {
                                        className: `framer-26km4a-container`,
                                        layoutDependency: D,
                                        layoutId: `CtmIXSZYH-container`,
                                        nodeId: `CtmIXSZYH`,
                                        rendersWithMotion: !0,
                                        scopeId: `KB3ubcGXn`,
                                        children: f(X, {
                                          height: `100%`,
                                          id: `CtmIXSZYH`,
                                          LAQQ0HHHX: j,
                                          layoutId: `CtmIXSZYH`,
                                          style: { width: `100%` },
                                          T4TN0TPWG: e[0],
                                          WbspzAGED: `Engagements`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                                f(I, {
                                  links: [
                                    {
                                      href: { hash: `:LC8uHYUKO`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(z, {
                                      height: 51,
                                      width: `calc(${l?.width || `100vw`} - 56px)`,
                                      y: (l?.y || 0) + 100 + 0 + 0 + 0 + 0 + 138 + 0 + 204,
                                      children: f(V, {
                                        className: `framer-gux1iz-container`,
                                        layoutDependency: D,
                                        layoutId: `sczzhF95t-container`,
                                        nodeId: `sczzhF95t`,
                                        rendersWithMotion: !0,
                                        scopeId: `KB3ubcGXn`,
                                        children: f(X, {
                                          height: `100%`,
                                          id: `sczzhF95t`,
                                          LAQQ0HHHX: j,
                                          layoutId: `sczzhF95t`,
                                          style: { width: `100%` },
                                          T4TN0TPWG: e[0],
                                          WbspzAGED: `Request access`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        f(z, {
                          height: 1,
                          width: `calc(${l?.width || `100vw`} - 56px)`,
                          y: (l?.y || 0) + 100 + 0 + 0 + 413,
                          children: f(V, {
                            className: `framer-db4lbn-container`,
                            layoutDependency: D,
                            layoutId: `wOok2NVW8-container`,
                            nodeId: `wOok2NVW8`,
                            rendersWithMotion: !0,
                            scopeId: `KB3ubcGXn`,
                            children: f(ut, {
                              height: `100%`,
                              id: `wOok2NVW8`,
                              layoutId: `wOok2NVW8`,
                              style: { height: `100%`, width: `100%` },
                              variant: or(`uu1kgFfPS`),
                              width: `100%`,
                            }),
                          }),
                        }),
                        g(O.div, {
                          className: `framer-1wxv36z`,
                          "data-framer-name": `Support`,
                          layoutDependency: D,
                          layoutId: `URBD0bAol`,
                          children: [
                            f(H, {
                              __fromCanvasComponent: !0,
                              children: f(s, {
                                children: f(O.p, {
                                  className: `framer-styles-preset-79bu04`,
                                  "data-styles-preset": `GMp6ZDbq7`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, rgb(120, 120, 120)))`,
                                  },
                                  children: `Support`,
                                }),
                              }),
                              className: `framer-ss3miy`,
                              fonts: [`Inter`],
                              layoutDependency: D,
                              layoutId: `Ik2YXPWEe`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, rgb(120, 120, 120))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            g(O.div, {
                              className: `framer-1him64n`,
                              "data-framer-name": `Links`,
                              layoutDependency: D,
                              layoutId: `r9WDGEdWQ`,
                              children: [
                                f(I, {
                                  links: [
                                    {
                                      href: { webPageId: `ssA6QOcex` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(z, {
                                      height: 51,
                                      width: `calc(${l?.width || `100vw`} - 56px)`,
                                      y: (l?.y || 0) + 100 + 0 + 0 + 434 + 0 + 138 + 0 + 0,
                                      children: f(V, {
                                        className: `framer-2uc7fc-container`,
                                        layoutDependency: D,
                                        layoutId: `QniXHc4k0-container`,
                                        nodeId: `QniXHc4k0`,
                                        rendersWithMotion: !0,
                                        scopeId: `KB3ubcGXn`,
                                        children: f(X, {
                                          height: `100%`,
                                          id: `QniXHc4k0`,
                                          LAQQ0HHHX: j,
                                          layoutId: `QniXHc4k0`,
                                          style: { width: `100%` },
                                          T4TN0TPWG: e[0],
                                          WbspzAGED: `Privacy`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                                f(I, {
                                  links: [
                                    {
                                      href: { webPageId: `P_hYK51BA` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(z, {
                                      height: 51,
                                      width: `calc(${l?.width || `100vw`} - 56px)`,
                                      y: (l?.y || 0) + 100 + 0 + 0 + 434 + 0 + 138 + 0 + 51,
                                      children: f(V, {
                                        className: `framer-1izjcra-container`,
                                        layoutDependency: D,
                                        layoutId: `PX3j2pDdh-container`,
                                        nodeId: `PX3j2pDdh`,
                                        rendersWithMotion: !0,
                                        scopeId: `KB3ubcGXn`,
                                        children: f(X, {
                                          height: `100%`,
                                          id: `PX3j2pDdh`,
                                          LAQQ0HHHX: j,
                                          layoutId: `PX3j2pDdh`,
                                          style: { width: `100%` },
                                          T4TN0TPWG: e[0],
                                          WbspzAGED: `Terms`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                                f(I, {
                                  links: [
                                    {
                                      href: { webPageId: `fnocoQUFP` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    f(z, {
                                      height: 51,
                                      width: `calc(${l?.width || `100vw`} - 56px)`,
                                      y: (l?.y || 0) + 100 + 0 + 0 + 434 + 0 + 138 + 0 + 102,
                                      children: f(V, {
                                        className: `framer-kuflit-container`,
                                        layoutDependency: D,
                                        layoutId: `hFsmlKqZ6-container`,
                                        nodeId: `hFsmlKqZ6`,
                                        rendersWithMotion: !0,
                                        scopeId: `KB3ubcGXn`,
                                        children: f(X, {
                                          height: `100%`,
                                          id: `hFsmlKqZ6`,
                                          LAQQ0HHHX: j,
                                          layoutId: `hFsmlKqZ6`,
                                          style: { width: `100%` },
                                          T4TN0TPWG: e[0],
                                          WbspzAGED: `Acceptable Use`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-eYMa6.framer-1foqyv2, .framer-eYMa6 .framer-1foqyv2 { display: block; }`,
          `.framer-eYMa6.framer-1wnscys { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 844px; justify-content: flex-start; overflow: auto; padding: 100px 28px 0px 28px; position: relative; width: 390px; }`,
          `.framer-eYMa6 .framer-g4xq83 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-eYMa6 .framer-x7fx7v, .framer-eYMa6 .framer-1wxv36z { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-eYMa6 .framer-1223hxr, .framer-eYMa6 .framer-ss3miy { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-eYMa6 .framer-yijvx0, .framer-eYMa6 .framer-1him64n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-eYMa6 .framer-1wb3b87-container, .framer-eYMa6 .framer-gd2kun-container, .framer-eYMa6 .framer-fczvd6-container, .framer-eYMa6 .framer-26km4a-container, .framer-eYMa6 .framer-gux1iz-container, .framer-eYMa6 .framer-2uc7fc-container, .framer-eYMa6 .framer-1izjcra-container, .framer-eYMa6 .framer-kuflit-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-eYMa6 .framer-db4lbn-container { flex: none; height: 1px; position: relative; width: 100%; }`,
          ...nt,
          `.framer-eYMa6[data-border="true"]::after, .framer-eYMa6 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
          `.framer-eYMa6[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-eYMa6 [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
          `.framer-eYMa6[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-eYMa6 [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
          `.framer-eYMa6[data-hide-scrollbars="true"], .framer-eYMa6 [data-hide-scrollbars="true"] { scrollbar-width: none; }`,
        ],
        `framer-eYMa6`
      )),
      (fr = dr),
      (dr.displayName = `Phone Menu`),
      (dr.defaultProps = { height: 844, width: 390 }),
      R(dr, { Ny8O4YToJ: { title: `Close Overlay`, type: W.EventHandler } }),
      F(
        dr,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Qn,
          ...$n,
          ...oe(it),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (dr.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([q(X, {}, t), q(ut, {}, t)])),
      }));
  }),
  mr,
  hr,
  gr,
  _r,
  vr,
  yr = e(() => {
    (y(),
      M(),
      T(),
      (mr = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g d="M 67.634 99.477 C 52.37 99.703 36.357 101.19 21.28 97.84 C 8.129 94.802 1.579 84.201 0.579 71.313 C 0.204 53.749 -1.572 35.31 3.829 18.346 C 11.205 -1.731 28.881 0.819 46.508 0.044 C 55.208 0.432 64.097 -0.868 72.672 1.269 C 82.961 2.832 92.549 10.17 95.649 20.271 C 97.312 24.409 97.312 28.971 97.662 33.334 C 98.137 43.723 98.349 54.111 98.099 64.499 C 96.924 85.464 90.799 99.052 67.634 99.477 Z M 54.333 45.715 L 75.184 22 L 69 22 L 51 41.5 L 37.677 22 L 21 22 L 42 52 L 20 78 L 25.939 78 L 45.054 56.255 L 60.323 78 L 77 78 M 29.5 26.5 L 34.5 26.5 L 69 73.5 L 63.5 73.5 Z" fill="transparent" height="100px" id="q87c1RKKh" width="98.20513082046168px"><path d="M 67.634 99.477 C 52.37 99.703 36.357 101.19 21.28 97.84 C 8.129 94.802 1.579 84.201 0.579 71.313 C 0.204 53.749 -1.572 35.31 3.829 18.346 C 11.205 -1.731 28.881 0.819 46.508 0.044 C 55.208 0.432 64.097 -0.868 72.672 1.269 C 82.961 2.832 92.549 10.17 95.649 20.271 C 97.312 24.409 97.312 28.971 97.662 33.334 C 98.137 43.723 98.349 54.111 98.099 64.499 C 96.924 85.464 90.799 99.052 67.634 99.477 Z M 54.333 45.715 L 75.184 22 L 69 22 L 51 41.5 L 37.677 22 L 21 22 L 42 52 L 20 78 L 25.939 78 L 45.054 56.255 L 60.323 78 L 77 78 M 29.5 26.5 L 34.5 26.5 L 69 73.5 L 63.5 73.5 Z" fill="var(--62mhw, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="100px" id="uqARW67qu" transform="translate(0 0)" width="98.20513082046202px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (hr = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? f(O.div, { ...a, layoutId: r, ref: t }) : f(`div`, { ...a, ref: t });
      })),
      (gr = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        kfNzCWrbt:
          e ?? i.kfNzCWrbt ?? `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (_r = U(
        u(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, kfNzCWrbt: o, ...s } = gr(e);
          return f(hr, {
            ...s,
            className: P(`framer-OJFXs`, r),
            layoutId: i,
            ref: t,
            style: { "--62mhw": o, ...n },
          });
        }),
        [
          `.framer-OJFXs { -webkit-mask: ${mr}; aspect-ratio: 1; background-color: var(--62mhw); mask: ${mr}; width: 100px; }`,
        ],
        `framer-OJFXs`
      )),
      (_r.displayName = `X Twitter`),
      (vr = _r),
      R(_r, {
        kfNzCWrbt: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: W.Color,
        },
      }));
  }),
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr = e(() => {
    (y(),
      M(),
      T(),
      (br = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g d="M 100 35.002 C 100 35.002 100 51.276 97.909 59.072 C 96.749 63.385 93.381 66.753 89.068 67.913 C 81.273 70.003 50 70.003 50 70.003 C 50 70.003 18.727 70.003 10.932 67.913 C 6.619 66.753 3.251 63.384 2.091 59.072 C 0 51.276 0 35.001 0 35.001 C 0 35.001 0 18.727 2.091 10.932 C 3.251 6.62 6.619 3.251 10.932 2.091 C 18.727 0 50 0 50 0 C 50 0 81.273 0 89.068 2.091 C 93.381 3.251 96.749 6.619 97.909 10.932 C 99.991 18.727 100 35.002 100 35.002 Z M 39.99 50.002 L 65.971 35.003 L 39.99 20.005 Z" fill="transparent" height="70.00349095719594px" id="AhzSdgBzx" transform="translate(0 15)" width="100px"><path d="M 100 35.002 C 100 35.002 100 51.276 97.909 59.072 C 96.749 63.385 93.381 66.753 89.068 67.913 C 81.273 70.003 50 70.003 50 70.003 C 50 70.003 18.727 70.003 10.932 67.913 C 6.619 66.753 3.251 63.384 2.091 59.072 C 0 51.276 0 35.001 0 35.001 C 0 35.001 0 18.727 2.091 10.932 C 3.251 6.62 6.619 3.251 10.932 2.091 C 18.727 0 50 0 50 0 C 50 0 81.273 0 89.068 2.091 C 93.381 3.251 96.749 6.619 97.909 10.932 C 99.991 18.727 100 35.002 100 35.002 Z M 39.99 50.002 L 65.971 35.003 L 39.99 20.005 Z" fill="var(--62mhw, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="70.00349095719594px" id="NNThSmLpj" width="100px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (xr = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? f(O.div, { ...a, layoutId: r, ref: t }) : f(`div`, { ...a, ref: t });
      })),
      (Sr = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        kfNzCWrbt:
          e ?? i.kfNzCWrbt ?? `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (Cr = U(
        u(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, kfNzCWrbt: o, ...s } = Sr(e);
          return f(xr, {
            ...s,
            className: P(`framer-bHJSy`, r),
            layoutId: i,
            ref: t,
            style: { "--62mhw": o, ...n },
          });
        }),
        [
          `.framer-bHJSy { -webkit-mask: ${br}; aspect-ratio: 1; background-color: var(--62mhw); mask: ${br}; width: 100px; }`,
        ],
        `framer-bHJSy`
      )),
      (Cr.displayName = `YouTube`),
      (wr = Cr),
      R(Cr, {
        kfNzCWrbt: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: W.Color,
        },
      }));
  }),
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr = e(() => {
    (y(),
      M(),
      T(),
      (Er = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 17.455 0.001 C 18.025 0.002 18.595 0.001 19.165 0 C 20.122 0 21.078 0.001 22.034 0.002 C 23.133 0.004 24.232 0.003 25.33 0.002 C 26.281 0 27.232 0 28.183 0.001 C 28.748 0.001 29.312 0.001 29.877 0 C 34.785 -0.009 39.54 0.277 43.317 3.8 C 46.88 7.583 47.009 12.573 46.999 17.455 C 46.998 18.025 46.999 18.595 47 19.165 C 47 20.122 46.999 21.078 46.998 22.034 C 46.996 23.133 46.997 24.232 46.998 25.33 C 47 26.281 47 27.232 46.999 28.183 C 46.999 28.748 46.999 29.312 47 29.877 C 47.009 34.785 46.723 39.54 43.2 43.317 C 39.417 46.88 34.427 47.009 29.545 46.999 C 28.975 46.998 28.405 46.999 27.835 47 C 26.878 47 25.922 46.999 24.966 46.998 C 23.867 46.996 22.768 46.997 21.67 46.998 C 20.719 47 19.768 47 18.817 46.999 C 18.252 46.999 17.688 46.999 17.123 47 C 12.215 47.009 7.46 46.723 3.683 43.2 C 0.12 39.417 -0.009 34.427 0.001 29.545 C 0.002 28.975 0.001 28.405 0 27.835 C 0 26.878 0.001 25.922 0.002 24.966 C 0.004 23.867 0.003 22.768 0.002 21.67 C 0 20.719 0 19.768 0.001 18.817 C 0.001 18.252 0.001 17.688 0 17.123 C -0.009 12.215 0.277 7.46 3.8 3.683 C 7.583 0.12 12.573 -0.009 17.455 0.001 Z" fill="var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))" height="47px" id="YdD1EudGL" transform="translate(0 0)" width="47px"/><path d="M 17.455 0.001 C 18.025 0.002 18.595 0.001 19.165 0 C 20.122 0 21.078 0.001 22.034 0.002 C 23.133 0.004 24.232 0.003 25.33 0.002 C 26.281 0 27.232 0 28.183 0.001 C 28.748 0.001 29.312 0.001 29.877 0 C 34.785 -0.009 39.54 0.277 43.317 3.8 C 46.88 7.583 47.009 12.573 46.999 17.455 C 46.998 18.025 46.999 18.595 47 19.165 C 47 20.122 46.999 21.078 46.998 22.034 C 46.996 23.133 46.997 24.232 46.998 25.33 C 47 26.281 47 27.232 46.999 28.183 C 46.999 28.748 46.999 29.312 47 29.877 C 47.009 34.785 46.723 39.54 43.2 43.317 C 39.417 46.88 34.427 47.009 29.545 46.999 C 28.975 46.998 28.405 46.999 27.835 47 C 26.878 47 25.922 46.999 24.966 46.998 C 23.867 46.996 22.768 46.997 21.67 46.998 C 20.719 47 19.768 47 18.817 46.999 C 18.252 46.999 17.688 46.999 17.123 47 C 12.215 47.009 7.46 46.723 3.683 43.2 C 0.12 39.417 -0.009 34.427 0.001 29.545 C 0.002 28.975 0.001 28.405 0 27.835 C 0 26.878 0.001 25.922 0.002 24.966 C 0.004 23.867 0.003 22.768 0.002 21.67 C 0 20.719 0 19.768 0.001 18.817 C 0.001 18.252 0.001 17.688 0 17.123 C -0.009 12.215 0.277 7.46 3.8 3.683 C 7.583 0.12 12.573 -0.009 17.455 0.001 Z" fill="var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))" height="47px" id="bcfWC3Ofj" transform="translate(53 0)" width="47px"/><path d="M 17.455 0.001 C 18.025 0.002 18.595 0.001 19.165 0 C 20.122 0 21.078 0.001 22.034 0.002 C 23.133 0.004 24.232 0.003 25.33 0.002 C 26.281 0 27.232 0 28.183 0.001 C 28.748 0.001 29.312 0.001 29.877 0 C 34.785 -0.009 39.54 0.277 43.317 3.8 C 46.88 7.583 47.009 12.573 46.999 17.455 C 46.998 18.025 46.999 18.595 47 19.165 C 47 20.122 46.999 21.078 46.998 22.034 C 46.996 23.133 46.997 24.232 46.998 25.33 C 47 26.281 47 27.232 46.999 28.183 C 46.999 28.748 46.999 29.312 47 29.877 C 47.009 34.785 46.723 39.54 43.2 43.317 C 39.417 46.88 34.427 47.009 29.545 46.999 C 28.975 46.998 28.405 46.999 27.835 47 C 26.878 47 25.922 46.999 24.966 46.998 C 23.867 46.996 22.768 46.997 21.67 46.998 C 20.719 47 19.768 47 18.817 46.999 C 18.252 46.999 17.688 46.999 17.123 47 C 12.215 47.009 7.46 46.723 3.683 43.2 C 0.12 39.417 -0.009 34.427 0.001 29.545 C 0.002 28.975 0.001 28.405 0 27.835 C 0 26.878 0.001 25.922 0.002 24.966 C 0.004 23.867 0.003 22.768 0.002 21.67 C 0 20.719 0 19.768 0.001 18.817 C 0.001 18.252 0.001 17.688 0 17.123 C -0.009 12.215 0.277 7.46 3.8 3.683 C 7.583 0.12 12.573 -0.009 17.455 0.001 Z" fill="var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))" height="47px" id="gpyitmvM_" transform="translate(53 53)" width="47px"/><path d="M 17.455 0.001 C 18.025 0.002 18.595 0.001 19.165 0 C 20.122 0 21.078 0.001 22.034 0.002 C 23.133 0.004 24.232 0.003 25.33 0.002 C 26.281 0 27.232 0 28.183 0.001 C 28.748 0.001 29.312 0.001 29.877 0 C 34.785 -0.009 39.54 0.277 43.317 3.8 C 46.88 7.583 47.009 12.573 46.999 17.455 C 46.998 18.025 46.999 18.595 47 19.165 C 47 20.122 46.999 21.078 46.998 22.034 C 46.996 23.133 46.997 24.232 46.998 25.33 C 47 26.281 47 27.232 46.999 28.183 C 46.999 28.748 46.999 29.312 47 29.877 C 47.009 34.785 46.723 39.54 43.2 43.317 C 39.417 46.88 34.427 47.009 29.545 46.999 C 28.975 46.998 28.405 46.999 27.835 47 C 26.878 47 25.922 46.999 24.966 46.998 C 23.867 46.996 22.768 46.997 21.67 46.998 C 20.719 47 19.768 47 18.817 46.999 C 18.252 46.999 17.688 46.999 17.123 47 C 12.215 47.009 7.46 46.723 3.683 43.2 C 0.12 39.417 -0.009 34.427 0.001 29.545 C 0.002 28.975 0.001 28.405 0 27.835 C 0 26.878 0.001 25.922 0.002 24.966 C 0.004 23.867 0.003 22.768 0.002 21.67 C 0 20.719 0 19.768 0.001 18.817 C 0.001 18.252 0.001 17.688 0 17.123 C -0.009 12.215 0.277 7.46 3.8 3.683 C 7.583 0.12 12.573 -0.009 17.455 0.001 Z" fill="var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))" height="47px" id="T5FJudsVg" transform="translate(0 53)" width="47px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Dr = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? f(O.div, { ...a, layoutId: r, ref: t }) : f(`div`, { ...a, ref: t });
      })),
      (Or = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (kr = U(
        u(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, ...o } = Or(e);
          return f(Dr, {
            ...o,
            className: P(`framer-DPOTx`, r),
            layoutId: i,
            ref: t,
            style: { ...n },
          });
        }),
        [
          `.framer-DPOTx { -webkit-mask: ${Er}; aspect-ratio: 1; background-color: var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, #000000); mask: ${Er}; width: 100px; }`,
        ],
        `framer-DPOTx`
      )),
      (kr.displayName = `Logo Black`),
      (Ar = kr));
  }),
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr = e(() => {
    (y(),
      M(),
      j(),
      T(),
      Be(),
      jr(),
      (Mr = N(Ar)),
      (Nr = `framer-ga7Sd`),
      (Pr = { XlFAtjHr2: `framer-v-j4pb56` }),
      (Fr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ir = ({ value: e, children: n }) => {
        let r = t(k),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(k.Provider, { value: a, children: n });
      }),
      (Lr = O.create(s)),
      (Rr = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (zr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Br = U(
        u(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = E(),
            { activeLocale: a, setLocale: c } = K();
          B();
          let { style: l, className: u, layoutId: d, variant: p, ...m } = Rr(e),
            {
              baseVariant: h,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: x,
              setGestureState: S,
              setVariant: ee,
              variants: C,
            } = L({ defaultVariant: `XlFAtjHr2`, ref: r, variant: p, variantClassNames: Pr }),
            w = zr(e, C),
            T = P(Nr, Ue);
          return f(A, {
            id: d ?? i,
            children: f(Lr, {
              animate: C,
              initial: !1,
              children: f(Ir, {
                value: Fr,
                children: g(O.div, {
                  ...m,
                  ...y,
                  className: P(T, `framer-j4pb56`, u, _),
                  "data-framer-name": `Primary`,
                  layoutDependency: w,
                  layoutId: `XlFAtjHr2`,
                  ref: r,
                  style: { ...l },
                  children: [
                    f(Ar, {
                      animated: !0,
                      className: `framer-fg5ueq`,
                      layoutDependency: w,
                      layoutId: `qr5Fa6JuE`,
                    }),
                    f(H, {
                      __fromCanvasComponent: !0,
                      children: f(s, {
                        children: f(O.p, {
                          className: `framer-styles-preset-ccv9s9`,
                          "data-styles-preset": `Bo2HZoBjr`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0)))`,
                          },
                          children: `Marketscape`,
                        }),
                      }),
                      className: `framer-1sanuqc`,
                      fonts: [`Inter`],
                      layoutDependency: w,
                      layoutId: `BJtfPpsBt`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-ga7Sd.framer-1q9a6i9, .framer-ga7Sd .framer-1q9a6i9 { display: block; }`,
          `.framer-ga7Sd.framer-j4pb56 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-ga7Sd .framer-fg5ueq { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }`,
          `.framer-ga7Sd .framer-1sanuqc { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...Ve,
        ],
        `framer-ga7Sd`
      )),
      (Vr = Br),
      (Br.displayName = `Footer Company Logo`),
      (Br.defaultProps = { height: 20, width: 110 }),
      F(
        Br,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Mr,
          ...oe(He),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Ur(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  Z,
  ni = e(() => {
    (y(),
      M(),
      j(),
      T(),
      et(),
      (Wr = { V0BQS2WGL: { hover: !0 } }),
      (Gr = [`V0BQS2WGL`, `B3jq_oq0c`]),
      (Kr = `framer-8wlZ9`),
      (qr = { B3jq_oq0c: `framer-v-ia48f0`, V0BQS2WGL: `framer-v-7n30o9` }),
      (Jr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Yr = (e, t) => `translateY(-50%) ${t}`),
      (Xr = ({ value: e, children: n }) => {
        let r = t(k),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(k.Provider, { value: a, children: n });
      }),
      (Zr = { Primary: `V0BQS2WGL`, Secondary: `B3jq_oq0c` }),
      (Qr = O.create(s)),
      ($r = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        RoGNZ4BdA: r ?? a.RoGNZ4BdA ?? `Home`,
        variant: Zr[a.variant] ?? a.variant ?? `V0BQS2WGL`,
        YzPGzetae: n ?? a.YzPGzetae,
      })),
      (ei = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ti = U(
        u(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = E(),
            { activeLocale: a, setLocale: c } = K();
          B();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              RoGNZ4BdA: m,
              YzPGzetae: h,
              ..._
            } = $r(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: ee,
              setGestureState: C,
              setVariant: w,
              variants: T,
            } = L({
              cycleOrder: Gr,
              defaultVariant: `V0BQS2WGL`,
              enabledGestures: Wr,
              ref: r,
              variant: p,
              variantClassNames: qr,
            }),
            D = ei(e, T),
            k = P(Kr, at);
          return f(A, {
            id: d ?? i,
            children: f(Qr, {
              animate: T,
              initial: !1,
              children: f(Xr, {
                value: Jr,
                children: f(ze, {
                  href: h,
                  motionChild: !0,
                  nodeId: `V0BQS2WGL`,
                  openInNewTab: !1,
                  scopeId: `ZZ2BeHrPX`,
                  children: g(O.a, {
                    ..._,
                    ...x,
                    className: `${P(k, `framer-7n30o9`, u, y)} framer-sn78q0`,
                    "data-framer-name": `Primary`,
                    layoutDependency: D,
                    layoutId: `V0BQS2WGL`,
                    ref: r,
                    style: { ...l },
                    ...Ur(
                      {
                        "V0BQS2WGL-hover": { "data-framer-name": void 0 },
                        B3jq_oq0c: { "data-framer-name": `Secondary` },
                      },
                      v,
                      S
                    ),
                    children: [
                      f(H, {
                        __fromCanvasComponent: !0,
                        children: f(s, {
                          children: f(O.p, {
                            className: `framer-styles-preset-kmsqt2`,
                            "data-styles-preset": `dXsx8iVCg`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99)))`,
                            },
                            children: `[`,
                          }),
                        }),
                        className: `framer-1s5qv8x`,
                        fonts: [`Inter`],
                        layoutDependency: D,
                        layoutId: `p4YpdmDDk`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        transformTemplate: Yr,
                        variants: {
                          "V0BQS2WGL-hover": {
                            "--extracted-r6o4lv": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Ur(
                          {
                            "V0BQS2WGL-hover": {
                              children: f(s, {
                                children: f(O.p, {
                                  className: `framer-styles-preset-kmsqt2`,
                                  "data-styles-preset": `dXsx8iVCg`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0)))`,
                                  },
                                  children: `[`,
                                }),
                              }),
                            },
                          },
                          v,
                          S
                        ),
                      }),
                      f(H, {
                        __fromCanvasComponent: !0,
                        children: f(s, {
                          children: f(O.p, {
                            className: `framer-styles-preset-kmsqt2`,
                            "data-styles-preset": `dXsx8iVCg`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99)))`,
                            },
                            children: `Home`,
                          }),
                        }),
                        className: `framer-u1o1ko`,
                        fonts: [`Inter`],
                        layoutDependency: D,
                        layoutId: `lV5JaC1LY`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: m,
                        variants: {
                          "V0BQS2WGL-hover": {
                            "--extracted-r6o4lv": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Ur(
                          {
                            "V0BQS2WGL-hover": {
                              children: f(s, {
                                children: f(O.p, {
                                  className: `framer-styles-preset-kmsqt2`,
                                  "data-styles-preset": `dXsx8iVCg`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0)))`,
                                  },
                                  children: `Home`,
                                }),
                              }),
                            },
                          },
                          v,
                          S
                        ),
                      }),
                      f(H, {
                        __fromCanvasComponent: !0,
                        children: f(s, {
                          children: f(O.p, {
                            className: `framer-styles-preset-kmsqt2`,
                            "data-styles-preset": `dXsx8iVCg`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99)))`,
                            },
                            children: `]`,
                          }),
                        }),
                        className: `framer-1uzyz0m`,
                        fonts: [`Inter`],
                        layoutDependency: D,
                        layoutId: `YmvVBJe6p`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        transformTemplate: Yr,
                        variants: {
                          "V0BQS2WGL-hover": {
                            "--extracted-r6o4lv": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Ur(
                          {
                            "V0BQS2WGL-hover": {
                              children: f(s, {
                                children: f(O.p, {
                                  className: `framer-styles-preset-kmsqt2`,
                                  "data-styles-preset": `dXsx8iVCg`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0)))`,
                                  },
                                  children: `]`,
                                }),
                              }),
                            },
                          },
                          v,
                          S
                        ),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-8wlZ9.framer-sn78q0, .framer-8wlZ9 .framer-sn78q0 { display: block; }`,
          `.framer-8wlZ9.framer-7n30o9 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 5px 0px 5px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-8wlZ9 .framer-1s5qv8x { -webkit-user-select: none; flex: none; height: auto; left: 0px; pointer-events: none; position: absolute; top: 52%; user-select: none; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-8wlZ9 .framer-u1o1ko { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-8wlZ9 .framer-1uzyz0m { -webkit-user-select: none; flex: none; height: auto; pointer-events: none; position: absolute; right: 0px; top: 52%; user-select: none; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-8wlZ9.framer-v-ia48f0.framer-7n30o9 { cursor: unset; }`,
          `.framer-8wlZ9.framer-v-7n30o9.hover .framer-1s5qv8x { left: -4px; }`,
          `.framer-8wlZ9.framer-v-7n30o9.hover .framer-1uzyz0m { right: -4px; }`,
          ...tt,
        ],
        `framer-8wlZ9`
      )),
      (Z = ti),
      (ti.displayName = `Footer Link`),
      (ti.defaultProps = { height: 21, width: 46 }),
      R(ti, {
        variant: {
          options: [`V0BQS2WGL`, `B3jq_oq0c`],
          optionTitles: [`Primary`, `Secondary`],
          title: `Variant`,
          type: W.Enum,
        },
        RoGNZ4BdA: { defaultValue: `Home`, displayTextArea: !1, title: `Title`, type: W.String },
        onRoGNZ4BdAChange: { changes: `RoGNZ4BdA`, type: W.ChangeHandler },
        YzPGzetae: { title: `Link`, type: W.Link },
      }),
      F(
        ti,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...oe(rt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  $,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi = e(() => {
    (y(),
      M(),
      j(),
      T(),
      ft(),
      et(),
      mt(),
      yr(),
      vt(),
      Tr(),
      Hr(),
      bt(),
      ni(),
      (ri = N(Vr)),
      (ii = N(J)),
      (ai = N(Z)),
      (oi = N(pt)),
      (si = Oe(V)),
      (ci = [`gahOmwpYJ`, `wkMH7mmBD`, `HrO0jOo0f`]),
      (li = `framer-LwWYI`),
      (ui = {
        gahOmwpYJ: `framer-v-q8p10r`,
        HrO0jOo0f: `framer-v-thsjqa`,
        wkMH7mmBD: `framer-v-1sa6s2u`,
      }),
      (di = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      ($ = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (fi = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (pi = ({ value: e, children: n }) => {
        let r = t(k),
          i = e ?? r.transition,
          a = h(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(k.Provider, { value: a, children: n });
      }),
      (mi = { Desktop: `gahOmwpYJ`, Phone: `HrO0jOo0f`, Tablet: `wkMH7mmBD` }),
      (hi = O.create(s)),
      (gi = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: mi[r.variant] ?? r.variant ?? `gahOmwpYJ`,
      })),
      (_i = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (vi = U(
        u(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = E(),
            { activeLocale: a, setLocale: c } = K(),
            l = B(),
            { style: u, className: d, layoutId: p, variant: m, ...h } = gi(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: S,
              setGestureState: ee,
              setVariant: C,
              variants: w,
            } = L({
              cycleOrder: ci,
              defaultVariant: `gahOmwpYJ`,
              ref: r,
              variant: m,
              variantClassNames: ui,
            }),
            T = _i(e, w),
            D = P(li, at, _t),
            k = () => _ !== `HrO0jOo0f`;
          me();
          let te = () => _ === `HrO0jOo0f`;
          return f(A, {
            id: p ?? i,
            children: f(hi, {
              animate: w,
              initial: !1,
              children: f(pi, {
                value: di,
                children: f(O.footer, {
                  ...h,
                  ...b,
                  className: P(D, `framer-q8p10r`, d, v),
                  "data-framer-name": `Desktop`,
                  layoutDependency: T,
                  layoutId: `gahOmwpYJ`,
                  ref: r,
                  style: { ...u },
                  ...Q(
                    {
                      HrO0jOo0f: { "data-framer-name": `Phone` },
                      wkMH7mmBD: { "data-framer-name": `Tablet` },
                    },
                    _,
                    x
                  ),
                  children: g(O.div, {
                    className: `framer-1jojyrz`,
                    "data-border": !0,
                    "data-framer-name": `Content`,
                    layoutDependency: T,
                    layoutId: `nbENvzEdD`,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(209, 209, 209))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                    },
                    children: [
                      g(O.div, {
                        className: `framer-1xnb8da`,
                        "data-framer-name": `Content`,
                        layoutDependency: T,
                        layoutId: `em_rCFlSq`,
                        children: [
                          g(O.div, {
                            className: `framer-154igax`,
                            "data-framer-name": `Company & Socials`,
                            layoutDependency: T,
                            layoutId: `P2mE_M8W5`,
                            children: [
                              g(O.div, {
                                className: `framer-dnjvib`,
                                "data-framer-name": `Company`,
                                layoutDependency: T,
                                layoutId: `uMGLa8GeP`,
                                children: [
                                  f(z, {
                                    height: 20,
                                    y:
                                      (l?.y || 0) +
                                      0 +
                                      (((l?.height || 713) - 0 - 400) / 2 + 0 + 0) +
                                      -0.1404 +
                                      0 +
                                      100 +
                                      0 +
                                      0 +
                                      0 +
                                      0,
                                    ...Q(
                                      {
                                        HrO0jOo0f: {
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            ((Math.max(0, ((l?.height || 1280) - 0 - 0) / 1) * 1 -
                                              0 -
                                              (Math.max(
                                                0,
                                                (Math.max(0, ((l?.height || 1280) - 0 - 0) / 1) *
                                                  1 -
                                                  0 -
                                                  0) /
                                                  1
                                              ) *
                                                1 +
                                                0)) /
                                              2 +
                                              0 +
                                              0) +
                                            0 +
                                            0 +
                                            50 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                        wkMH7mmBD: {
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            (((l?.height || 505) - 0 - 400) / 2 + 0 + 0) +
                                            -0.1404 +
                                            0 +
                                            100 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                      },
                                      _,
                                      x
                                    ),
                                    children: f(V, {
                                      className: `framer-pocbs9-container`,
                                      layoutDependency: T,
                                      layoutId: `S9V_NWPNo-container`,
                                      nodeId: `S9V_NWPNo`,
                                      rendersWithMotion: !0,
                                      scopeId: `WRdmfpjW1`,
                                      children: f(Vr, {
                                        height: `100%`,
                                        id: `S9V_NWPNo`,
                                        layoutId: `S9V_NWPNo`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  f(H, {
                                    __fromCanvasComponent: !0,
                                    children: f(s, {
                                      children: f(O.p, {
                                        className: `framer-styles-preset-kmsqt2`,
                                        "data-styles-preset": `dXsx8iVCg`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99)))`,
                                        },
                                        children: `This is just some description, I am not sure what to put here really.`,
                                      }),
                                    }),
                                    className: `framer-l0ze4l`,
                                    fonts: [`Inter`],
                                    layoutDependency: T,
                                    layoutId: `khLcAj7pj`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              k() &&
                                g(O.div, {
                                  className: `framer-17s13au`,
                                  "data-framer-name": `Legal & Socials`,
                                  layoutDependency: T,
                                  layoutId: `ewTsflQhr`,
                                  children: [
                                    g(O.div, {
                                      className: `framer-s94fdt`,
                                      "data-framer-name": `Social Links`,
                                      layoutDependency: T,
                                      layoutId: `BsJlWrRt2`,
                                      children: [
                                        f(z, {
                                          height: 24,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            (((l?.height || 713) - 0 - 400) / 2 + 0 + 0) +
                                            -0.1404 +
                                            0 +
                                            100 +
                                            0 +
                                            108 +
                                            0 +
                                            0 +
                                            0,
                                          ...Q(
                                            {
                                              wkMH7mmBD: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  (((l?.height || 505) - 0 - 400) / 2 + 0 + 0) +
                                                  -0.1404 +
                                                  0 +
                                                  100 +
                                                  0 +
                                                  108 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            _,
                                            x
                                          ),
                                          children: f(V, {
                                            className: `framer-b5u8nw-container`,
                                            layoutDependency: T,
                                            layoutId: `q7FPSU50d-container`,
                                            nodeId: `q7FPSU50d`,
                                            rendersWithMotion: !0,
                                            scopeId: `WRdmfpjW1`,
                                            children: f(J, {
                                              A0zSsv2ON: yt,
                                              height: `100%`,
                                              id: `q7FPSU50d`,
                                              layoutId: `q7FPSU50d`,
                                              width: `100%`,
                                              YgfVXmht2: `https://www.linkedin.com/in/krutik-maru/`,
                                            }),
                                          }),
                                        }),
                                        f(z, {
                                          height: 24,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            (((l?.height || 713) - 0 - 400) / 2 + 0 + 0) +
                                            -0.1404 +
                                            0 +
                                            100 +
                                            0 +
                                            108 +
                                            0 +
                                            0 +
                                            0,
                                          ...Q(
                                            {
                                              wkMH7mmBD: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  (((l?.height || 505) - 0 - 400) / 2 + 0 + 0) +
                                                  -0.1404 +
                                                  0 +
                                                  100 +
                                                  0 +
                                                  108 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            _,
                                            x
                                          ),
                                          children: f(V, {
                                            className: `framer-1yjntau-container`,
                                            layoutDependency: T,
                                            layoutId: `yqVrjMPJt-container`,
                                            nodeId: `yqVrjMPJt`,
                                            rendersWithMotion: !0,
                                            scopeId: `WRdmfpjW1`,
                                            children: f(J, {
                                              A0zSsv2ON: vr,
                                              height: `100%`,
                                              id: `yqVrjMPJt`,
                                              layoutId: `yqVrjMPJt`,
                                              width: `100%`,
                                              YgfVXmht2: `https://x.com/krutikmaru_18`,
                                            }),
                                          }),
                                        }),
                                        f(z, {
                                          height: 24,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            (((l?.height || 713) - 0 - 400) / 2 + 0 + 0) +
                                            -0.1404 +
                                            0 +
                                            100 +
                                            0 +
                                            108 +
                                            0 +
                                            0 +
                                            0,
                                          ...Q(
                                            {
                                              wkMH7mmBD: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  (((l?.height || 505) - 0 - 400) / 2 + 0 + 0) +
                                                  -0.1404 +
                                                  0 +
                                                  100 +
                                                  0 +
                                                  108 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            _,
                                            x
                                          ),
                                          children: f(V, {
                                            className: `framer-1y40718-container`,
                                            layoutDependency: T,
                                            layoutId: `mUjUgv69c-container`,
                                            nodeId: `mUjUgv69c`,
                                            rendersWithMotion: !0,
                                            scopeId: `WRdmfpjW1`,
                                            children: f(J, {
                                              A0zSsv2ON: wr,
                                              height: `100%`,
                                              id: `mUjUgv69c`,
                                              layoutId: `mUjUgv69c`,
                                              width: `100%`,
                                              YgfVXmht2: `https://youtube.com/`,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    f(H, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(O.p, {
                                          className: `framer-styles-preset-kmsqt2`,
                                          "data-styles-preset": `dXsx8iVCg`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99)))`,
                                          },
                                          children: `©️ Marketscape. All Rights Reserved.`,
                                        }),
                                      }),
                                      className: `framer-9ecnlo`,
                                      fonts: [`Inter`],
                                      layoutDependency: T,
                                      layoutId: `Q56GaTIUA`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          k() &&
                            f(O.div, {
                              className: `framer-1u0qu6u`,
                              "data-framer-name": `Spacer`,
                              layoutDependency: T,
                              layoutId: `LEqNKqvTB`,
                            }),
                          g(O.div, {
                            className: `framer-qhdvoe`,
                            "data-framer-name": `Links`,
                            layoutDependency: T,
                            layoutId: `KmkN4noum`,
                            children: [
                              g(O.div, {
                                className: `framer-xjp70x`,
                                "data-framer-name": `Pages`,
                                layoutDependency: T,
                                layoutId: `VfSI_gnQV`,
                                children: [
                                  f(H, {
                                    __fromCanvasComponent: !0,
                                    children: f(s, {
                                      children: f(O.p, {
                                        className: `framer-styles-preset-13o8gvd`,
                                        "data-styles-preset": `rhzuGFsMS`,
                                        dir: `auto`,
                                        children: `Pages`,
                                      }),
                                    }),
                                    className: `framer-16bm8pr`,
                                    fonts: [`Inter`],
                                    layoutDependency: T,
                                    layoutId: `GSwwx8PtJ`,
                                    style: {
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  f(I, {
                                    links: [
                                      {
                                        href: { webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(z, {
                                        height: 21,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 713) - 0 - 400) / 2 + 0 + 0) +
                                          -0.1404 +
                                          0 +
                                          100 +
                                          0 +
                                          0 +
                                          0 +
                                          30.8,
                                        ...Q(
                                          {
                                            HrO0jOo0f: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                ((Math.max(0, ((l?.height || 1280) - 0 - 0) / 1) *
                                                  1 -
                                                  0 -
                                                  (Math.max(
                                                    0,
                                                    (Math.max(
                                                      0,
                                                      ((l?.height || 1280) - 0 - 0) / 1
                                                    ) *
                                                      1 -
                                                      0 -
                                                      0) /
                                                      1
                                                  ) *
                                                    1 +
                                                    0)) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                0 +
                                                214 +
                                                0 +
                                                0 +
                                                0 +
                                                114,
                                            },
                                            wkMH7mmBD: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 505) - 0 - 400) / 2 + 0 + 0) +
                                                -0.1404 +
                                                0 +
                                                -14.6 +
                                                0 +
                                                0 +
                                                0 +
                                                30.8,
                                            },
                                          },
                                          _,
                                          x
                                        ),
                                        children: f(V, {
                                          className: `framer-brj0yw-container`,
                                          layoutDependency: T,
                                          layoutId: `fnCnT76Zo-container`,
                                          nodeId: `fnCnT76Zo`,
                                          rendersWithMotion: !0,
                                          scopeId: `WRdmfpjW1`,
                                          children: f(Z, {
                                            height: `100%`,
                                            id: `fnCnT76Zo`,
                                            layoutId: `fnCnT76Zo`,
                                            RoGNZ4BdA: `Home`,
                                            variant: $(`V0BQS2WGL`),
                                            width: `100%`,
                                            YzPGzetae: e[0],
                                            ...Q(
                                              {
                                                HrO0jOo0f: {
                                                  variant: $(`B3jq_oq0c`),
                                                  YzPGzetae: e[2],
                                                },
                                                wkMH7mmBD: { YzPGzetae: e[1] },
                                              },
                                              _,
                                              x
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  f(I, {
                                    links: [
                                      {
                                        href: { webPageId: `TG4v3XDvb` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `TG4v3XDvb` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `TG4v3XDvb` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(z, {
                                        height: 21,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 713) - 0 - 400) / 2 + 0 + 0) +
                                          -0.1404 +
                                          0 +
                                          100 +
                                          0 +
                                          0 +
                                          0 +
                                          61.8,
                                        ...Q(
                                          {
                                            HrO0jOo0f: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                ((Math.max(0, ((l?.height || 1280) - 0 - 0) / 1) *
                                                  1 -
                                                  0 -
                                                  (Math.max(
                                                    0,
                                                    (Math.max(
                                                      0,
                                                      ((l?.height || 1280) - 0 - 0) / 1
                                                    ) *
                                                      1 -
                                                      0 -
                                                      0) /
                                                      1
                                                  ) *
                                                    1 +
                                                    0)) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                0 +
                                                214 +
                                                0 +
                                                0 +
                                                0 +
                                                145,
                                            },
                                            wkMH7mmBD: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 505) - 0 - 400) / 2 + 0 + 0) +
                                                -0.1404 +
                                                0 +
                                                -14.6 +
                                                0 +
                                                0 +
                                                0 +
                                                61.8,
                                            },
                                          },
                                          _,
                                          x
                                        ),
                                        children: f(V, {
                                          className: `framer-1ejobl0-container`,
                                          layoutDependency: T,
                                          layoutId: `CuI2Qki6P-container`,
                                          nodeId: `CuI2Qki6P`,
                                          rendersWithMotion: !0,
                                          scopeId: `WRdmfpjW1`,
                                          children: f(Z, {
                                            height: `100%`,
                                            id: `CuI2Qki6P`,
                                            layoutId: `CuI2Qki6P`,
                                            RoGNZ4BdA: `About`,
                                            variant: $(`V0BQS2WGL`),
                                            width: `100%`,
                                            YzPGzetae: e[0],
                                            ...Q(
                                              {
                                                HrO0jOo0f: {
                                                  variant: $(`B3jq_oq0c`),
                                                  YzPGzetae: e[2],
                                                },
                                                wkMH7mmBD: { YzPGzetae: e[1] },
                                              },
                                              _,
                                              x
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  f(I, {
                                    links: [
                                      {
                                        href: { hash: `:IEzvAGyIY`, webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { hash: `:IEzvAGyIY`, webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { hash: `:IEzvAGyIY`, webPageId: `augiA20Il` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(z, {
                                        height: 21,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 713) - 0 - 400) / 2 + 0 + 0) +
                                          -0.1404 +
                                          0 +
                                          100 +
                                          0 +
                                          0 +
                                          0 +
                                          92.8,
                                        ...Q(
                                          {
                                            HrO0jOo0f: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                ((Math.max(0, ((l?.height || 1280) - 0 - 0) / 1) *
                                                  1 -
                                                  0 -
                                                  (Math.max(
                                                    0,
                                                    (Math.max(
                                                      0,
                                                      ((l?.height || 1280) - 0 - 0) / 1
                                                    ) *
                                                      1 -
                                                      0 -
                                                      0) /
                                                      1
                                                  ) *
                                                    1 +
                                                    0)) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                0 +
                                                214 +
                                                0 +
                                                0 +
                                                0 +
                                                176,
                                            },
                                            wkMH7mmBD: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 505) - 0 - 400) / 2 + 0 + 0) +
                                                -0.1404 +
                                                0 +
                                                -14.6 +
                                                0 +
                                                0 +
                                                0 +
                                                92.8,
                                            },
                                          },
                                          _,
                                          x
                                        ),
                                        children: f(V, {
                                          className: `framer-qa8vob-container`,
                                          layoutDependency: T,
                                          layoutId: `IDHhpMXaW-container`,
                                          nodeId: `IDHhpMXaW`,
                                          rendersWithMotion: !0,
                                          scopeId: `WRdmfpjW1`,
                                          children: f(Z, {
                                            height: `100%`,
                                            id: `IDHhpMXaW`,
                                            layoutId: `IDHhpMXaW`,
                                            RoGNZ4BdA: `Pricing`,
                                            variant: $(`V0BQS2WGL`),
                                            width: `100%`,
                                            YzPGzetae: e[0],
                                            ...Q(
                                              {
                                                HrO0jOo0f: {
                                                  variant: $(`B3jq_oq0c`),
                                                  YzPGzetae: e[2],
                                                },
                                                wkMH7mmBD: { YzPGzetae: e[1] },
                                              },
                                              _,
                                              x
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  f(I, {
                                    links: [
                                      {
                                        href: { webPageId: `IcLi543Pr` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `IcLi543Pr` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `IcLi543Pr` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(z, {
                                        height: 21,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 713) - 0 - 400) / 2 + 0 + 0) +
                                          -0.1404 +
                                          0 +
                                          100 +
                                          0 +
                                          0 +
                                          0 +
                                          123.8,
                                        ...Q(
                                          {
                                            HrO0jOo0f: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                ((Math.max(0, ((l?.height || 1280) - 0 - 0) / 1) *
                                                  1 -
                                                  0 -
                                                  (Math.max(
                                                    0,
                                                    (Math.max(
                                                      0,
                                                      ((l?.height || 1280) - 0 - 0) / 1
                                                    ) *
                                                      1 -
                                                      0 -
                                                      0) /
                                                      1
                                                  ) *
                                                    1 +
                                                    0)) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                0 +
                                                214 +
                                                0 +
                                                0 +
                                                0 +
                                                207,
                                            },
                                            wkMH7mmBD: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 505) - 0 - 400) / 2 + 0 + 0) +
                                                -0.1404 +
                                                0 +
                                                -14.6 +
                                                0 +
                                                0 +
                                                0 +
                                                123.8,
                                            },
                                          },
                                          _,
                                          x
                                        ),
                                        children: f(V, {
                                          className: `framer-129ypya-container`,
                                          layoutDependency: T,
                                          layoutId: `hq2cjuiBG-container`,
                                          nodeId: `hq2cjuiBG`,
                                          rendersWithMotion: !0,
                                          scopeId: `WRdmfpjW1`,
                                          children: f(Z, {
                                            height: `100%`,
                                            id: `hq2cjuiBG`,
                                            layoutId: `hq2cjuiBG`,
                                            RoGNZ4BdA: `Case Studies`,
                                            variant: $(`V0BQS2WGL`),
                                            width: `100%`,
                                            YzPGzetae: e[0],
                                            ...Q(
                                              {
                                                HrO0jOo0f: {
                                                  variant: $(`B3jq_oq0c`),
                                                  YzPGzetae: e[2],
                                                },
                                                wkMH7mmBD: { YzPGzetae: e[1] },
                                              },
                                              _,
                                              x
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  f(I, {
                                    links: [
                                      {
                                        href: { webPageId: `JFNr7AzSy` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `JFNr7AzSy` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `JFNr7AzSy` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(z, {
                                        height: 21,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 713) - 0 - 400) / 2 + 0 + 0) +
                                          -0.1404 +
                                          0 +
                                          100 +
                                          0 +
                                          0 +
                                          0 +
                                          154.8,
                                        ...Q(
                                          {
                                            HrO0jOo0f: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                ((Math.max(0, ((l?.height || 1280) - 0 - 0) / 1) *
                                                  1 -
                                                  0 -
                                                  (Math.max(
                                                    0,
                                                    (Math.max(
                                                      0,
                                                      ((l?.height || 1280) - 0 - 0) / 1
                                                    ) *
                                                      1 -
                                                      0 -
                                                      0) /
                                                      1
                                                  ) *
                                                    1 +
                                                    0)) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                0 +
                                                214 +
                                                0 +
                                                0 +
                                                0 +
                                                238,
                                            },
                                            wkMH7mmBD: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 505) - 0 - 400) / 2 + 0 + 0) +
                                                -0.1404 +
                                                0 +
                                                -14.6 +
                                                0 +
                                                0 +
                                                0 +
                                                154.8,
                                            },
                                          },
                                          _,
                                          x
                                        ),
                                        children: f(V, {
                                          className: `framer-1ur52f1-container`,
                                          layoutDependency: T,
                                          layoutId: `VPU1yeQ4g-container`,
                                          nodeId: `VPU1yeQ4g`,
                                          rendersWithMotion: !0,
                                          scopeId: `WRdmfpjW1`,
                                          children: f(Z, {
                                            height: `100%`,
                                            id: `VPU1yeQ4g`,
                                            layoutId: `VPU1yeQ4g`,
                                            RoGNZ4BdA: `Careers`,
                                            variant: $(`V0BQS2WGL`),
                                            width: `100%`,
                                            YzPGzetae: e[0],
                                            ...Q(
                                              {
                                                HrO0jOo0f: {
                                                  variant: $(`B3jq_oq0c`),
                                                  YzPGzetae: e[2],
                                                },
                                                wkMH7mmBD: { YzPGzetae: e[1] },
                                              },
                                              _,
                                              x
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                              g(O.div, {
                                className: `framer-1bag3d8`,
                                "data-framer-name": `Support`,
                                layoutDependency: T,
                                layoutId: `tDgljo6jm`,
                                children: [
                                  f(H, {
                                    __fromCanvasComponent: !0,
                                    children: f(s, {
                                      children: f(O.p, {
                                        className: `framer-styles-preset-13o8gvd`,
                                        "data-styles-preset": `rhzuGFsMS`,
                                        dir: `auto`,
                                        children: `Support`,
                                      }),
                                    }),
                                    className: `framer-a651m7`,
                                    fonts: [`Inter`],
                                    layoutDependency: T,
                                    layoutId: `p1YrbwQwG`,
                                    style: {
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  f(I, {
                                    links: [
                                      {
                                        href: { webPageId: `jL2GUUASB` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `jL2GUUASB` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `jL2GUUASB` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(z, {
                                        height: 21,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 713) - 0 - 400) / 2 + 0 + 0) +
                                          -0.1404 +
                                          0 +
                                          100 +
                                          0 +
                                          225.8 +
                                          0 +
                                          30.8,
                                        ...Q(
                                          {
                                            HrO0jOo0f: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                ((Math.max(0, ((l?.height || 1280) - 0 - 0) / 1) *
                                                  1 -
                                                  0 -
                                                  (Math.max(
                                                    0,
                                                    (Math.max(
                                                      0,
                                                      ((l?.height || 1280) - 0 - 0) / 1
                                                    ) *
                                                      1 -
                                                      0 -
                                                      0) /
                                                      1
                                                  ) *
                                                    1 +
                                                    0)) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                0 +
                                                214 +
                                                0 +
                                                309 +
                                                0 +
                                                114,
                                            },
                                            wkMH7mmBD: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 505) - 0 - 400) / 2 + 0 + 0) +
                                                -0.1404 +
                                                0 +
                                                -14.6 +
                                                0 +
                                                225.8 +
                                                0 +
                                                30.8,
                                            },
                                          },
                                          _,
                                          x
                                        ),
                                        children: f(V, {
                                          className: `framer-7uka7z-container`,
                                          layoutDependency: T,
                                          layoutId: `KAd6A6eJi-container`,
                                          nodeId: `KAd6A6eJi`,
                                          rendersWithMotion: !0,
                                          scopeId: `WRdmfpjW1`,
                                          children: f(Z, {
                                            height: `100%`,
                                            id: `KAd6A6eJi`,
                                            layoutId: `KAd6A6eJi`,
                                            RoGNZ4BdA: `Contact`,
                                            variant: $(`V0BQS2WGL`),
                                            width: `100%`,
                                            YzPGzetae: e[0],
                                            ...Q(
                                              {
                                                HrO0jOo0f: {
                                                  variant: $(`B3jq_oq0c`),
                                                  YzPGzetae: e[2],
                                                },
                                                wkMH7mmBD: { YzPGzetae: e[1] },
                                              },
                                              _,
                                              x
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  f(I, {
                                    links: [
                                      {
                                        href: { webPageId: `ssA6QOcex` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `ssA6QOcex` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `ssA6QOcex` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(z, {
                                        height: 21,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 713) - 0 - 400) / 2 + 0 + 0) +
                                          -0.1404 +
                                          0 +
                                          100 +
                                          0 +
                                          225.8 +
                                          0 +
                                          61.8,
                                        ...Q(
                                          {
                                            HrO0jOo0f: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                ((Math.max(0, ((l?.height || 1280) - 0 - 0) / 1) *
                                                  1 -
                                                  0 -
                                                  (Math.max(
                                                    0,
                                                    (Math.max(
                                                      0,
                                                      ((l?.height || 1280) - 0 - 0) / 1
                                                    ) *
                                                      1 -
                                                      0 -
                                                      0) /
                                                      1
                                                  ) *
                                                    1 +
                                                    0)) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                0 +
                                                214 +
                                                0 +
                                                309 +
                                                0 +
                                                145,
                                            },
                                            wkMH7mmBD: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 505) - 0 - 400) / 2 + 0 + 0) +
                                                -0.1404 +
                                                0 +
                                                -14.6 +
                                                0 +
                                                225.8 +
                                                0 +
                                                61.8,
                                            },
                                          },
                                          _,
                                          x
                                        ),
                                        children: f(V, {
                                          className: `framer-13z0b1a-container`,
                                          layoutDependency: T,
                                          layoutId: `jU7r9ADHM-container`,
                                          nodeId: `jU7r9ADHM`,
                                          rendersWithMotion: !0,
                                          scopeId: `WRdmfpjW1`,
                                          children: f(Z, {
                                            height: `100%`,
                                            id: `jU7r9ADHM`,
                                            layoutId: `jU7r9ADHM`,
                                            RoGNZ4BdA: `Privacy Policy`,
                                            variant: $(`V0BQS2WGL`),
                                            width: `100%`,
                                            YzPGzetae: e[0],
                                            ...Q(
                                              {
                                                HrO0jOo0f: {
                                                  variant: $(`B3jq_oq0c`),
                                                  YzPGzetae: e[2],
                                                },
                                                wkMH7mmBD: { YzPGzetae: e[1] },
                                              },
                                              _,
                                              x
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  f(I, {
                                    links: [
                                      {
                                        href: { webPageId: `P_hYK51BA` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `P_hYK51BA` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `P_hYK51BA` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(z, {
                                        height: 21,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 713) - 0 - 400) / 2 + 0 + 0) +
                                          -0.1404 +
                                          0 +
                                          100 +
                                          0 +
                                          225.8 +
                                          0 +
                                          92.8,
                                        ...Q(
                                          {
                                            HrO0jOo0f: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                ((Math.max(0, ((l?.height || 1280) - 0 - 0) / 1) *
                                                  1 -
                                                  0 -
                                                  (Math.max(
                                                    0,
                                                    (Math.max(
                                                      0,
                                                      ((l?.height || 1280) - 0 - 0) / 1
                                                    ) *
                                                      1 -
                                                      0 -
                                                      0) /
                                                      1
                                                  ) *
                                                    1 +
                                                    0)) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                0 +
                                                214 +
                                                0 +
                                                309 +
                                                0 +
                                                176,
                                            },
                                            wkMH7mmBD: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 505) - 0 - 400) / 2 + 0 + 0) +
                                                -0.1404 +
                                                0 +
                                                -14.6 +
                                                0 +
                                                225.8 +
                                                0 +
                                                92.8,
                                            },
                                          },
                                          _,
                                          x
                                        ),
                                        children: f(V, {
                                          className: `framer-ypv2ma-container`,
                                          layoutDependency: T,
                                          layoutId: `rQQQjArbD-container`,
                                          nodeId: `rQQQjArbD`,
                                          rendersWithMotion: !0,
                                          scopeId: `WRdmfpjW1`,
                                          children: f(Z, {
                                            height: `100%`,
                                            id: `rQQQjArbD`,
                                            layoutId: `rQQQjArbD`,
                                            RoGNZ4BdA: `Terms & Conditions`,
                                            variant: $(`V0BQS2WGL`),
                                            width: `100%`,
                                            YzPGzetae: e[0],
                                            ...Q(
                                              {
                                                HrO0jOo0f: {
                                                  variant: $(`B3jq_oq0c`),
                                                  YzPGzetae: e[2],
                                                },
                                                wkMH7mmBD: { YzPGzetae: e[1] },
                                              },
                                              _,
                                              x
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                  f(I, {
                                    links: [
                                      {
                                        href: { webPageId: `fnocoQUFP` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `fnocoQUFP` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `fnocoQUFP` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      f(z, {
                                        height: 21,
                                        y:
                                          (l?.y || 0) +
                                          0 +
                                          (((l?.height || 713) - 0 - 400) / 2 + 0 + 0) +
                                          -0.1404 +
                                          0 +
                                          100 +
                                          0 +
                                          225.8 +
                                          0 +
                                          123.8,
                                        ...Q(
                                          {
                                            HrO0jOo0f: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                ((Math.max(0, ((l?.height || 1280) - 0 - 0) / 1) *
                                                  1 -
                                                  0 -
                                                  (Math.max(
                                                    0,
                                                    (Math.max(
                                                      0,
                                                      ((l?.height || 1280) - 0 - 0) / 1
                                                    ) *
                                                      1 -
                                                      0 -
                                                      0) /
                                                      1
                                                  ) *
                                                    1 +
                                                    0)) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                0 +
                                                214 +
                                                0 +
                                                309 +
                                                0 +
                                                207,
                                            },
                                            wkMH7mmBD: {
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                (((l?.height || 505) - 0 - 400) / 2 + 0 + 0) +
                                                -0.1404 +
                                                0 +
                                                -14.6 +
                                                0 +
                                                225.8 +
                                                0 +
                                                123.8,
                                            },
                                          },
                                          _,
                                          x
                                        ),
                                        children: f(V, {
                                          className: `framer-w6ebry-container`,
                                          layoutDependency: T,
                                          layoutId: `JAIh0Naa6-container`,
                                          nodeId: `JAIh0Naa6`,
                                          rendersWithMotion: !0,
                                          scopeId: `WRdmfpjW1`,
                                          children: f(Z, {
                                            height: `100%`,
                                            id: `JAIh0Naa6`,
                                            layoutId: `JAIh0Naa6`,
                                            RoGNZ4BdA: `Acceptable Use`,
                                            variant: $(`V0BQS2WGL`),
                                            width: `100%`,
                                            YzPGzetae: e[0],
                                            ...Q(
                                              {
                                                HrO0jOo0f: {
                                                  variant: $(`B3jq_oq0c`),
                                                  YzPGzetae: e[2],
                                                },
                                                wkMH7mmBD: { YzPGzetae: e[1] },
                                              },
                                              _,
                                              x
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                              te() &&
                                g(O.div, {
                                  className: `framer-1i8pz36`,
                                  "data-framer-name": `Legal & Socials`,
                                  layoutDependency: T,
                                  layoutId: `sXYx0m5s3`,
                                  children: [
                                    g(O.div, {
                                      className: `framer-g982c9`,
                                      "data-framer-name": `Social Links`,
                                      layoutDependency: T,
                                      layoutId: `SPanhQFqJ`,
                                      children: [
                                        f(z, {
                                          height: 24,
                                          ...Q(
                                            {
                                              HrO0jOo0f: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  ((Math.max(0, ((l?.height || 1280) - 0 - 0) / 1) *
                                                    1 -
                                                    0 -
                                                    (Math.max(
                                                      0,
                                                      (Math.max(
                                                        0,
                                                        ((l?.height || 1280) - 0 - 0) / 1
                                                      ) *
                                                        1 -
                                                        0 -
                                                        0) /
                                                        1
                                                    ) *
                                                      1 +
                                                      0)) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  0 +
                                                  214 +
                                                  0 +
                                                  587 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            _,
                                            x
                                          ),
                                          children: f(V, {
                                            className: `framer-1ijuon1-container`,
                                            layoutDependency: T,
                                            layoutId: `p8B1ZGvkw-container`,
                                            nodeId: `p8B1ZGvkw`,
                                            rendersWithMotion: !0,
                                            scopeId: `WRdmfpjW1`,
                                            children: f(J, {
                                              A0zSsv2ON: yt,
                                              height: `100%`,
                                              id: `p8B1ZGvkw`,
                                              layoutId: `p8B1ZGvkw`,
                                              width: `100%`,
                                              YgfVXmht2: `https://www.linkedin.com/in/krutik-maru/`,
                                            }),
                                          }),
                                        }),
                                        f(z, {
                                          height: 24,
                                          ...Q(
                                            {
                                              HrO0jOo0f: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  ((Math.max(0, ((l?.height || 1280) - 0 - 0) / 1) *
                                                    1 -
                                                    0 -
                                                    (Math.max(
                                                      0,
                                                      (Math.max(
                                                        0,
                                                        ((l?.height || 1280) - 0 - 0) / 1
                                                      ) *
                                                        1 -
                                                        0 -
                                                        0) /
                                                        1
                                                    ) *
                                                      1 +
                                                      0)) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  0 +
                                                  214 +
                                                  0 +
                                                  587 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            _,
                                            x
                                          ),
                                          children: f(V, {
                                            className: `framer-xq6bac-container`,
                                            layoutDependency: T,
                                            layoutId: `UFYgsov05-container`,
                                            nodeId: `UFYgsov05`,
                                            rendersWithMotion: !0,
                                            scopeId: `WRdmfpjW1`,
                                            children: f(J, {
                                              A0zSsv2ON: vr,
                                              height: `100%`,
                                              id: `UFYgsov05`,
                                              layoutId: `UFYgsov05`,
                                              width: `100%`,
                                              YgfVXmht2: `https://x.com/krutikmaru_18`,
                                            }),
                                          }),
                                        }),
                                        f(z, {
                                          height: 24,
                                          ...Q(
                                            {
                                              HrO0jOo0f: {
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  ((Math.max(0, ((l?.height || 1280) - 0 - 0) / 1) *
                                                    1 -
                                                    0 -
                                                    (Math.max(
                                                      0,
                                                      (Math.max(
                                                        0,
                                                        ((l?.height || 1280) - 0 - 0) / 1
                                                      ) *
                                                        1 -
                                                        0 -
                                                        0) /
                                                        1
                                                    ) *
                                                      1 +
                                                      0)) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  0 +
                                                  214 +
                                                  0 +
                                                  587 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            _,
                                            x
                                          ),
                                          children: f(V, {
                                            className: `framer-ydqktq-container`,
                                            layoutDependency: T,
                                            layoutId: `gfXqfiA6d-container`,
                                            nodeId: `gfXqfiA6d`,
                                            rendersWithMotion: !0,
                                            scopeId: `WRdmfpjW1`,
                                            children: f(J, {
                                              A0zSsv2ON: wr,
                                              height: `100%`,
                                              id: `gfXqfiA6d`,
                                              layoutId: `gfXqfiA6d`,
                                              width: `100%`,
                                              YgfVXmht2: `https://youtube.com/`,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    f(H, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(O.p, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7R29vZ2xlIFNhbnMgRmxleC12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJREU0TENBaWQyUjBhQ0lnTVRBd0xDQWlkMmRvZENJZ05ESTFMQ0FpUjFKQlJDSWdNQ3dnSWxKUFRrUWlJREFzSUNKemJHNTBJaUF3`,
                                            "--framer-font-family": `"Google Sans Flex Variable", "Google Sans Flex Variable Placeholder", sans-serif`,
                                            "--framer-font-size": `13px`,
                                            "--framer-font-variation-axes": `var(--extracted-2gg91v, "opsz" 18, "wdth" 100, "wght" 425, "GRAD" 0, "ROND" 0, "slnt" 0)`,
                                            "--framer-letter-spacing": `0.01em`,
                                            "--framer-line-height": `1.6em`,
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99)))`,
                                          },
                                          children: `©️ Stackgrid. All Rights Reserved.`,
                                        }),
                                      }),
                                      className: `framer-yfd8re`,
                                      fonts: [`GF;Google Sans Flex-variable-regular`],
                                      layoutDependency: T,
                                      layoutId: `L419d21fC`,
                                      style: {
                                        "--extracted-2gg91v": `"opsz" 18, "wdth" 100, "wght" 425, "GRAD" 0, "ROND" 0, "slnt" 0`,
                                        "--extracted-r6o4lv": `var(--token-813ec4a8-3f64-40f4-ae75-c758ceafa922, rgb(99, 99, 99))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                      f(z, {
                        children: f(si, {
                          __framer__spring: {
                            damping: 60,
                            delay: 0,
                            duration: 0.3,
                            ease: [0.44, 0, 0.56, 1],
                            mass: 1,
                            stagger: 0,
                            stiffness: 500,
                            type: `spring`,
                          },
                          __framer__styleTransformEffectEnabled: !0,
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 100,
                              },
                            },
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                          ],
                          __framer__transformTrigger: `onInView`,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-7r7yj2-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: T,
                          layoutId: `xfhwXWFBs-container`,
                          nodeId: `xfhwXWFBs`,
                          rendersWithMotion: !0,
                          scopeId: `WRdmfpjW1`,
                          children: f(pt, {
                            blur: 0,
                            brightness: 52,
                            characterSet: `blocks`,
                            color: {
                              color: `rgb(176, 176, 176)`,
                              color1: `rgb(255, 255, 255)`,
                              color1Point: 0,
                              color2: `rgba(107, 107, 107, 0)`,
                              color2Point: 100,
                              mode: `color`,
                              threshold: 50,
                            },
                            contrast: 0,
                            customCharacterSet: `@%#*+=-:.`,
                            ditheringMode: `none`,
                            font: {
                              fontFamily: `"Fragment Mono", monospace`,
                              fontSize: `10px`,
                              fontStyle: `normal`,
                              fontWeight: 400,
                              letterSpacing: `0em`,
                              lineHeight: `1em`,
                            },
                            glow: { blur: 11, opacity: 1 },
                            height: `100%`,
                            id: `xfhwXWFBs`,
                            image: fi(
                              {
                                pixelHeight: 1024,
                                pixelWidth: 1536,
                                src: `../../assets/images/pqpbvKiigJ9pgoJTfHCvlonvQ.png`,
                                srcSet: `../../assets/images/pqpbvKiigJ9pgoJTfHCvlonvQ.png?scale-down-to=512&width=1536&height=1024 512w,../../assets/images/pqpbvKiigJ9pgoJTfHCvlonvQ.png?scale-down-to=1024&width=1536&height=1024 1024w,../../assets/images/pqpbvKiigJ9pgoJTfHCvlonvQ.png 1536w`,
                              },
                              `Hand Holding Star Icon`
                            ),
                            invertColors: !1,
                            layoutId: `xfhwXWFBs`,
                            outputWidth: 170,
                            radius: `0px`,
                            sizing: `fit`,
                            staticEffect: { interval: 0.1, preview: !0 },
                            style: { width: `100%` },
                            whiteMode: `ignore`,
                            width: `100%`,
                            ...Q(
                              {
                                HrO0jOo0f: {
                                  sizing: `fill`,
                                  style: { height: `100%`, width: `100%` },
                                },
                              },
                              _,
                              x
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-LwWYI.framer-jlkv7n, .framer-LwWYI .framer-jlkv7n { display: block; }`,
          `.framer-LwWYI.framer-q8p10r { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1100px; }`,
          `.framer-LwWYI .framer-1jojyrz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-LwWYI .framer-1xnb8da { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; left: calc(50.00000000000002% - 100% / 2); overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: calc(49.96491228070178% - 100% / 2); width: 100%; z-index: 1; }`,
          `.framer-LwWYI .framer-154igax { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 75%; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 44px 28px; position: relative; width: 1px; }`,
          `.framer-LwWYI .framer-dnjvib { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-LwWYI .framer-pocbs9-container, .framer-LwWYI .framer-b5u8nw-container, .framer-LwWYI .framer-1yjntau-container, .framer-LwWYI .framer-1y40718-container, .framer-LwWYI .framer-brj0yw-container, .framer-LwWYI .framer-1ejobl0-container, .framer-LwWYI .framer-qa8vob-container, .framer-LwWYI .framer-129ypya-container, .framer-LwWYI .framer-1ur52f1-container, .framer-LwWYI .framer-7uka7z-container, .framer-LwWYI .framer-13z0b1a-container, .framer-LwWYI .framer-ypv2ma-container, .framer-LwWYI .framer-w6ebry-container, .framer-LwWYI .framer-1ijuon1-container, .framer-LwWYI .framer-xq6bac-container, .framer-LwWYI .framer-ydqktq-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-LwWYI .framer-l0ze4l, .framer-LwWYI .framer-yfd8re { flex: none; height: auto; max-width: 270px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-LwWYI .framer-17s13au, .framer-LwWYI .framer-1i8pz36 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-LwWYI .framer-s94fdt, .framer-LwWYI .framer-g982c9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-LwWYI .framer-9ecnlo { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-LwWYI .framer-1u0qu6u { flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; width: 25%; }`,
          `.framer-LwWYI .framer-qhdvoe { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: 75%; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-LwWYI .framer-xjp70x, .framer-LwWYI .framer-1bag3d8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-width: 150px; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-LwWYI .framer-16bm8pr, .framer-LwWYI .framer-a651m7 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-LwWYI .framer-7r7yj2-container { -webkit-user-select: none; flex: none; height: auto; pointer-events: none; position: relative; user-select: none; width: 100%; }`,
          `.framer-LwWYI.framer-v-1sa6s2u.framer-q8p10r { width: 810px; }`,
          `.framer-LwWYI.framer-v-1sa6s2u .framer-1jojyrz { max-width: 780px; }`,
          `.framer-LwWYI.framer-v-1sa6s2u .framer-qhdvoe { height: min-content; padding: 0px 0px 44px 0px; }`,
          `.framer-LwWYI.framer-v-thsjqa.framer-q8p10r { height: 1280px; justify-content: flex-start; padding: 0px 12px 0px 12px; width: 390px; }`,
          `.framer-LwWYI.framer-v-thsjqa .framer-1jojyrz { flex: 1 0 0px; height: 1px; max-width: 600px; order: 0; }`,
          `.framer-LwWYI.framer-v-thsjqa .framer-1xnb8da { align-content: center; align-items: center; flex: 1 0 0px; flex-direction: column; gap: 30px; height: 1px; justify-content: flex-start; left: unset; position: relative; top: unset; }`,
          `.framer-LwWYI.framer-v-thsjqa .framer-154igax { flex: none; gap: 0px; height: min-content; justify-content: center; padding: 50px 28px 0px 28px; width: 100%; }`,
          `.framer-LwWYI.framer-v-thsjqa .framer-qhdvoe { flex: none; height: min-content; padding: 0px 28px 0px 28px; width: 100%; }`,
          `.framer-LwWYI.framer-v-thsjqa .framer-xjp70x, .framer-LwWYI.framer-v-thsjqa .framer-1bag3d8 { width: 100%; }`,
          `.framer-LwWYI.framer-v-thsjqa .framer-16bm8pr, .framer-LwWYI.framer-v-thsjqa .framer-a651m7 { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-LwWYI.framer-v-thsjqa .framer-7r7yj2-container { bottom: 0px; height: 800px; left: 0px; position: absolute; right: 0px; width: unset; z-index: 1; }`,
          ...tt,
          ...ht,
          `.framer-LwWYI[data-border="true"]::after, .framer-LwWYI [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-LwWYI`
      )),
      (yi = vi),
      (vi.displayName = `Footer`),
      (vi.defaultProps = { height: 713, width: 1100 }),
      R(vi, {
        variant: {
          options: [`gahOmwpYJ`, `wkMH7mmBD`, `HrO0jOo0f`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: W.Enum,
        },
      }),
      F(
        vi,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Google Sans Flex Variable`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Google Sans Flex`,
                url: `https://fonts.gstatic.com/s/googlesansflex/v21/t5t7IQcYNIWbFgDgAAzZ34auoVyXip6sfhcat2c.woff2`,
                variationAxes: [
                  {
                    defaultValue: 18,
                    maxValue: 144,
                    minValue: 6,
                    name: `Optical Size`,
                    tag: `opsz`,
                  },
                  { defaultValue: 100, maxValue: 151, minValue: 25, name: `Width`, tag: `wdth` },
                  { defaultValue: 400, maxValue: 1e3, minValue: 1, name: `Weight`, tag: `wght` },
                  { defaultValue: 0, maxValue: 100, minValue: 0, name: `Grade`, tag: `GRAD` },
                  { defaultValue: 0, maxValue: 100, minValue: 0, name: `Roundness`, tag: `ROND` },
                  { defaultValue: 0, maxValue: 0, minValue: -10, name: `Slant`, tag: `slnt` },
                ],
                weight: `400`,
              },
              {
                cssFamilyName: `Fragment Mono`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Fragment Mono`,
                url: `https://fonts.gstatic.com/s/fragmentmono/v6/4iCr6K5wfMRRjxp0DA6-2CLnN4FNh4UI_1U.woff2`,
                weight: `400`,
              },
            ],
          },
          ...ri,
          ...ii,
          ...ai,
          ...oi,
          ...oe(rt),
          ...oe(gt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (vi.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([q(Vr, {}, t), q(J, {}, t), q(Z, {}, t)])),
      }));
  }),
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi = e(() => {
    (y(),
      M(),
      j(),
      T(),
      d(),
      Ct(),
      Hn(),
      pr(),
      bi(),
      (xi = N(Vn)),
      (Si = N(fr)),
      (Ci = N(St)),
      (wi = Oe(Ae)),
      (Ti = N(yi)),
      (Ei = ce(O.div)),
      (Di = ae(Vn)),
      (Oi = {
        LnUkg64NQ: `(min-width: 1200px)`,
        OImjYT545: `(min-width: 810px) and (max-width: 1199.98px)`,
        zMpfjH6oL: `(max-width: 809.98px)`,
      }),
      (ki = () => typeof document < `u`),
      (Ai = `framer-LqpOF`),
      (ji = {
        LnUkg64NQ: `framer-v-yqpees`,
        OImjYT545: `framer-v-1pxqvew`,
        zMpfjH6oL: `framer-v-1xn8rl8`,
      }),
      (Mi = { bounce: 0, delay: 0, duration: 0.4, type: `spring` }),
      (Ni = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Pi = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0, duration: 0.2, ease: [0.12, 0.23, 0.5, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (Fi = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0, duration: 0.6, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Ii = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -860,
      }),
      (Li = () =>
        document.querySelector(`#template-overlay`) ??
        document.querySelector(`#overlay`) ??
        document.body),
      (Ri = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
        let [i, a] = pe({ blockDocumentScrolling: t, dismissWithEsc: r && n });
        return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
      }),
      (zi = {
        zMpfjH6oL: [
          `.framer-LqpOF .framer-sfzdwg-container { left: 12px; right: 12px; width: unset; }`,
        ],
      }),
      (Bi = Object.keys(zi)),
      (Vi = { zMpfjH6oL: `.framer-1xn8rl8-override` }),
      (Hi = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-LqpOF.framer-7fmlcf, .framer-LqpOF .framer-7fmlcf { display: block; }`,
        `.framer-LqpOF.framer-yqpees { --selection-background-color: var(--token-4a1e7493-0681-4389-9ee4-885b715421ed, rgba(91, 156, 252, 0.2)) /* {"name":"Blue Dimmed"} */; --selection-color: var(--token-19bed0b5-c586-49d3-b40e-9867aec7f20a, #5b9cfc) /* {"name":"Blue"} */; align-content: center; align-items: center; background-color: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, #f5f5f5); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-LqpOF .framer-sfzdwg-container { flex: none; height: 70px; left: calc(50.00000000000002% - 100% / 2); order: -1000; position: var(--framer-canvas-fixed-position, fixed); top: 0px; width: 100%; z-index: 10; }`,
        `.framer-LqpOF.framer-1w73dgk { inset: 0px; position: fixed; user-select: none; }`,
        `.framer-LqpOF.framer-13ncolp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; left: 0px; overflow: visible; padding: 0px 12px 0px 12px; position: fixed; top: 0px; width: 100%; z-index: 9; }`,
        `.framer-LqpOF .framer-130i9u6-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-LqpOF .framer-tg3zgh { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-LqpOF .framer-12ffj3x-container { bottom: calc(calc(100% - min(var(--framer-viewport-height, 100%), 100%)) + 0px); flex: none; height: 240px; left: 0px; order: 1002; pointer-events: none; position: var(--framer-canvas-fixed-position, fixed); width: 100%; z-index: 10; }`,
        `.framer-LqpOF .framer-1pg213s-container { flex: none; height: auto; order: 1003; position: relative; width: 100%; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
        `.framer-LqpOF[data-selection="true"] * ::selection, .framer-LqpOF [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
      ]),
      (Ui = {
        LnUkg64NQ: `(min-width: 1200px)`,
        OImjYT545: `(min-width: 810px) and (max-width: 1199.98px)`,
        zMpfjH6oL: `(max-width: 809.98px)`,
      }),
      (Wi = { Desktop: `LnUkg64NQ`, Phone: `zMpfjH6oL`, Tablet: `OImjYT545` }),
      (Gi = ({ value: e }) =>
        _e()
          ? null
          : f(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (Ki = {
        "Case Studies": `tvf2Rcv44`,
        About: `t1T96jyoV`,
        Contact: `SxGmqKUGH`,
        Others: `RXhpLCgbr`,
        Pricing: `glgEnQfoK`,
      }),
      (qi = ({
        currentPage: e,
        height: t,
        id: n,
        removeBlurAfter: r,
        showBottomBlur: i,
        width: a,
        ...o
      }) => ({
        ...o,
        MxPmvoD87: r ?? o.MxPmvoD87,
        pYEeIV4Va: i ?? o.pYEeIV4Va ?? !0,
        QMLrZfOdm: Ki[e] ?? e ?? o.QMLrZfOdm ?? `RXhpLCgbr`,
        variant: Wi[o.variant] ?? o.variant ?? `LnUkg64NQ`,
      })),
      (Ji = u(function (e, t) {
        let n = o(null),
          r = t ?? n,
          i = E(),
          { activeLocale: a, setLocale: s } = K(),
          {
            style: c,
            className: l,
            layoutId: u,
            variant: d,
            QMLrZfOdm: p,
            pYEeIV4Va: h,
            MxPmvoD87: _,
            children: v,
            ...y
          } = qi(e),
          [b, x] = Te(d, Oi, !1),
          { activeVariantCallback: ee, delay: C } = xe(void 0),
          w = ({ overlay: e }) =>
            ee(async (...t) => {
              e.toggle();
            }),
          T = ({ overlay: e }) =>
            ee(async (...t) => {
              e.hide();
            }),
          D = P(Ai),
          k = () => !ki() || b === `zMpfjH6oL`;
        return (
          De({}),
          f(Ce.Provider, {
            value: {
              activeVariantId: b,
              humanReadableVariantMap: Wi,
              isLayoutTemplate: !0,
              primaryVariantId: `LnUkg64NQ`,
              variantClassNames: ji,
            },
            children: g(A, {
              id: u ?? i,
              children: [
                f(Gi, {
                  value: `:root body { background: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, rgb(245, 245, 245)); }`,
                }),
                g(Ei, {
                  ...y,
                  className: P(D, `framer-yqpees`, l),
                  "data-layout-template": !0,
                  "data-selection": !0,
                  flowEffectEnabled: !0,
                  flowEffectTransition: Mi,
                  isNestedFlowEffect: !1,
                  ref: r,
                  style: { ...c },
                  children: [
                    f(Ri, {
                      dismissWithEsc: !0,
                      enabled: k(),
                      children: (e) =>
                        f(S, {
                          children: f(Ie, {
                            breakpoint: b,
                            overrides: { zMpfjH6oL: { width: `calc(100vw - 24px)` } },
                            children: f(z, {
                              height: 70,
                              width: `100vw`,
                              y: 0,
                              children: g(Ae, {
                                className: `framer-sfzdwg-container`,
                                layout: `position`,
                                layoutScroll: !0,
                                nodeId: `s2NE3irgq`,
                                rendersWithMotion: !0,
                                scopeId: `pKMITaPwi`,
                                children: [
                                  f(Ie, {
                                    breakpoint: b,
                                    overrides: {
                                      OImjYT545: { variant: Ni(`HApJ7U0UN`) },
                                      zMpfjH6oL: {
                                        variant: Ni(
                                          e.visible && `bc2YXHwMc`,
                                          e.visible ? `bc2YXHwMc` : `ZjcOy4Cib`
                                        ),
                                      },
                                    },
                                    children: f(Vn, {
                                      GTsNoximw: w({ overlay: e }),
                                      height: `100%`,
                                      id: `s2NE3irgq`,
                                      layoutId: `s2NE3irgq`,
                                      mX633isTE: p,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Ni(`OECEM5TdI`),
                                      width: `100%`,
                                    }),
                                  }),
                                  k() &&
                                    f(te, {
                                      children:
                                        e.visible &&
                                        f(S, {
                                          children: m(
                                            f(Ee, {
                                              children: g(ne, {
                                                children: [
                                                  f(
                                                    O.div,
                                                    {
                                                      animate: {
                                                        opacity: 1,
                                                        transition: {
                                                          delay: 0,
                                                          duration: 0.2,
                                                          ease: [0.5, 0, 0.88, 0.77],
                                                          type: `tween`,
                                                        },
                                                      },
                                                      className: `${P(D, `framer-1w73dgk`)} hidden-yqpees hidden-1pxqvew`,
                                                      exit: {
                                                        opacity: 0,
                                                        transition: {
                                                          delay: 0,
                                                          duration: 0.1,
                                                          ease: [0.12, 0.23, 0.5, 1],
                                                          type: `tween`,
                                                        },
                                                      },
                                                      initial: { opacity: 0 },
                                                      onTap: () => e.hide(),
                                                    },
                                                    `l624WcqFc`
                                                  ),
                                                  f(O.div, {
                                                    className: P(D, `framer-13ncolp`),
                                                    "data-framer-name": `Content`,
                                                    children: f(Ie, {
                                                      breakpoint: b,
                                                      overrides: {
                                                        zMpfjH6oL: {
                                                          width: `max(100vw - 24px, 1px)`,
                                                        },
                                                      },
                                                      children: f(z, {
                                                        children: f(Ae, {
                                                          animate: Fi,
                                                          className: `framer-130i9u6-container`,
                                                          exit: Pi,
                                                          inComponentSlot: !0,
                                                          initial: Ii,
                                                          nodeId: `LUh8paxV3`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `pKMITaPwi`,
                                                          children: f(fr, {
                                                            height: `100%`,
                                                            id: `LUh8paxV3`,
                                                            layoutId: `LUh8paxV3`,
                                                            Ny8O4YToJ: T({ overlay: e }),
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
                                                            width: `100%`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            }),
                                            Li()
                                          ),
                                        }),
                                    }),
                                ],
                              }),
                            }),
                          }),
                        }),
                    }),
                    v,
                    f(`div`, { className: `framer-tg3zgh` }),
                    h !== !1 &&
                      f(z, {
                        children: f(wi, {
                          __framer__spring: {
                            damping: 60,
                            delay: 0,
                            duration: 0.3,
                            ease: [0.44, 0, 0.56, 1],
                            mass: 1,
                            stagger: 0,
                            stiffness: 500,
                            type: `spring`,
                          },
                          __framer__styleTransformEffectEnabled: !0,
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                            {
                              ref: _,
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 250,
                              },
                            },
                          ],
                          __framer__transformTrigger: `onScrollTarget`,
                          __framer__transformViewportThreshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-12ffj3x-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layout: `position`,
                          layoutScroll: !0,
                          nodeId: `gG7UwOsGK`,
                          rendersWithMotion: !0,
                          scopeId: `pKMITaPwi`,
                          children: f(St, {
                            blur: 10,
                            borderRadius: `0px`,
                            direction: `to bottom`,
                            height: `100%`,
                            id: `gG7UwOsGK`,
                            layoutId: `gG7UwOsGK`,
                            style: { height: `100%`, width: `100%` },
                            transition: {
                              delay: 0,
                              duration: 0.3,
                              ease: [0.44, 0, 0.56, 1],
                              type: `tween`,
                            },
                            width: `100%`,
                          }),
                        }),
                      }),
                    f(z, {
                      height: 712,
                      width: `100vw`,
                      y: 1e3,
                      children: f(Ae, {
                        className: `framer-1pg213s-container`,
                        layout: `position`,
                        nodeId: `b0Gwi8l7H`,
                        rendersWithMotion: !0,
                        scopeId: `pKMITaPwi`,
                        children: f(Ie, {
                          breakpoint: b,
                          overrides: {
                            OImjYT545: { variant: Ni(`wkMH7mmBD`) },
                            zMpfjH6oL: { variant: Ni(`HrO0jOo0f`) },
                          },
                          children: f(yi, {
                            height: `100%`,
                            id: `b0Gwi8l7H`,
                            layoutId: `b0Gwi8l7H`,
                            style: { width: `100%` },
                            variant: Ni(`gahOmwpYJ`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                f(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Yi = (e) =>
        e === re.canvas || e === re.export
          ? [
              ...Hi,
              ...Bi.flatMap((e) => {
                let t = Vi[e];
                return zi[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...Hi, ...Bi.map((e) => `@media ${Ui[e]} { ${zi[e].join(` `)} }`)]),
      (Xi = U(Ji, Yi, `framer-LqpOF`)),
      (Zi = Xi),
      (Xi.displayName = `Root`),
      (Xi.defaultProps = { height: 2e3, width: 1200 }),
      R(Xi, {
        QMLrZfOdm: Di?.mX633isTE && {
          ...Di.mX633isTE,
          defaultValue: `RXhpLCgbr`,
          description: void 0,
          hidden: void 0,
          title: `Current Page`,
        },
        pYEeIV4Va: { defaultValue: !0, title: `Show Bottom Blur`, type: W.Boolean },
        MxPmvoD87: { title: `Remove Blur After`, type: W.ScrollSectionRef },
      }),
      F(Xi, [{ explicitInter: !0, fonts: [] }, ...xi, ...Si, ...Ci, ...Ti], {
        supportsExplicitInterCodegen: !0,
      }),
      (Xi.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([q(Vn, {}, t), q(fr, {}, t), q(yi, {}, t)])),
      }));
  });
function $i({ webPageId: e, children: t, style: n, ...r }) {
  let i = {
      MxPmvoD87: { href: { hash: `:LC8uHYUKO`, webPageId: `augiA20Il` }, refKey: !0 },
      pYEeIV4Va: !0,
      QMLrZfOdm: `RXhpLCgbr`,
    },
    a = { ...i, MxPmvoD87: { href: { hash: `:NOCX6Xdyw`, webPageId: `MCl1zxt1X` }, refKey: !0 } },
    o = {
      ...i,
      MxPmvoD87: { href: { hash: `:SxR0CVCd9`, webPageId: `TG4v3XDvb` }, refKey: !0 },
      QMLrZfOdm: `t1T96jyoV`,
    },
    s = {
      ...i,
      MxPmvoD87: { href: { hash: `:SxR0CVCd9`, webPageId: `ssA6QOcex` }, refKey: !0 },
      pYEeIV4Va: !1,
    },
    c = {
      ...i,
      MxPmvoD87: { href: { hash: `:SxR0CVCd9`, webPageId: `fnocoQUFP` }, refKey: !0 },
      pYEeIV4Va: !1,
    },
    l = {
      ...i,
      MxPmvoD87: { href: { hash: `:SxR0CVCd9`, webPageId: `P_hYK51BA` }, refKey: !0 },
      pYEeIV4Va: !1,
    },
    u = {
      ...i,
      MxPmvoD87: { href: { hash: `:tZXUF60fM`, webPageId: `jL2GUUASB` }, refKey: !0 },
      QMLrZfOdm: `SxGmqKUGH`,
    },
    d = {
      ...i,
      MxPmvoD87: { href: { hash: `:NiOM68_OU`, webPageId: `IcLi543Pr` }, refKey: !0 },
      QMLrZfOdm: `tvf2Rcv44`,
    },
    f = { ...i, MxPmvoD87: void 0 },
    p = { ...i, MxPmvoD87: { href: { hash: `:T5kladmpb`, webPageId: `sXNmQkfHo` }, refKey: !0 } },
    m = ie(),
    h =
      {
        augiA20Il: i,
        fnocoQUFP: c,
        IcLi543Pr: d,
        JFNr7AzSy: f,
        jL2GUUASB: u,
        MCl1zxt1X: a,
        P_hYK51BA: l,
        ssA6QOcex: s,
        sXNmQkfHo: p,
        TG4v3XDvb: o,
        wUl6IQ99K: f,
      }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `MCl1zxt1X`:
    case `TG4v3XDvb`:
    case `ssA6QOcex`:
    case `fnocoQUFP`:
    case `P_hYK51BA`:
    case `jL2GUUASB`:
    case `IcLi543Pr`:
    case `JFNr7AzSy`:
    case `sXNmQkfHo`:
    case `wUl6IQ99K`:
      return C(I, { links: [h.MxPmvoD87] }, (e) =>
        C(Zi, { ...h, key: `Root`, MxPmvoD87: m(e[0]), style: n }, t(!0))
      );
    default:
      return t(!1);
  }
}
function ea(e) {
  switch (e) {
    case `augiA20Il`:
    case `MCl1zxt1X`:
    case `TG4v3XDvb`:
    case `ssA6QOcex`:
    case `fnocoQUFP`:
    case `P_hYK51BA`:
    case `jL2GUUASB`:
    case `IcLi543Pr`:
    case `JFNr7AzSy`:
    case `sXNmQkfHo`:
    case `wUl6IQ99K`:
      return [
        { hash: `1xn8rl8`, mediaQuery: `(max-width: 809.98px)` },
        { hash: `1pxqvew`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `yqpees`, mediaQuery: `(min-width: 1200px)` },
      ];
    default:
      return;
  }
}
async function ta({ routeId: e, pathVariables: t, localeId: r, collectionItemId: c }) {
  let u = ia[e].page.preload(),
    d = C(Le, {
      children: C(Me, {
        children: C(Fe, {
          children: C(fe, {
            isWebsite: !0,
            environment: `site`,
            routeId: e,
            pathVariables: t,
            routes: ia,
            collectionUtils: oa,
            framerSiteId: sa,
            notFoundPage: G(
              () => import(`./TJb56fbYI77eoraFznPh14G3ujWSsLbnTUI4UmY4D3M.BNlwCZ0U.mjs`)
            ),
            isReducedMotion: void 0,
            localeId: r,
            locales: aa,
            preserveQueryParams: void 0,
            siteCanonicalURL: `https://conscientious-encounter-651018.framer.app`,
            EditorBar:
              D === void 0
                ? void 0
                : (() => {
                    if (la) {
                      console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                      return;
                    }
                    return G(async () => {
                      D.__framer_editorBarDependencies = {
                        __version: 3,
                        framer: { useCurrentRoute: ke, useLocaleInfo: K, useRouter: me },
                        react: {
                          createElement: C,
                          Fragment: s,
                          memo: p,
                          useCallback: i,
                          useEffect: a,
                          useRef: o,
                          useState: n,
                          useLayoutEffect: l,
                        },
                        "react-dom": { createPortal: m },
                      };
                      let { createEditorBar: e } = await import(`init.mjs`);
                      return { default: e() };
                    });
                  })(),
            adaptLayoutToTextDirection: !0,
            LayoutTemplate: $i,
            loadSnippetsModule: new ge(
              () => import(`./K7pgq0Ny6nQPcweFywO-5IZs8g5l3E-DjdJv5rG6dj0.DjZMCITs.mjs`)
            ),
            initialCollectionItemId: c,
          }),
          value: {
            autobahnNavigation: !0,
            disableCustomCode: !1,
            editorBarDisableFrameAncestorsSecurity: !1,
            motionDivToDiv: !1,
            onPageLocalizationSupport: !0,
            onPageMoveTool: !0,
            synchronousNavigationOnDesktop: !1,
            yieldOnTap: !1,
          },
        }),
      }),
      value: { routes: {} },
    });
  return (await u, d);
}
function na() {
  ca && D.__framer_events.push(arguments);
}
async function ra(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || D.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    na(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, o, s;
    if (e)
      ((s = JSON.parse(t.dataset.framerHydrateV2)),
        (r = s.routeId),
        (i = s.localeId),
        (a = s.pathVariables),
        (o = s.breakpoints),
        (r = je(ia, r)));
    else {
      je(ia, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((a ??= {}), (a[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = he(ia, decodeURIComponent(location.pathname), !0, aa);
        ((r = e.routeId), (i = e.localeId), (a = e.pathVariables));
      }
    }
    let c = ta({
      routeId: r,
      localeId: i,
      pathVariables: a,
      collectionItemId: s?.collectionItemId,
    });
    D !== void 0 &&
      (async () => {
        let e = ia[r],
          t = aa.find(({ id: e }) => (i ? e === i : e === `default`)).code,
          n = s?.collectionItemId ?? null;
        if (n === null && e?.collectionId && oa) {
          let r = await oa[e.collectionId]?.(),
            [i] = Object.values(a);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let o = Intl.DateTimeFormat().resolvedOptions(),
          c = o.timeZone,
          l = o.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          D.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: sa ?? null,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: D.location.href,
              hostname: D.location.hostname || null,
              pathname: D.location.pathname || null,
              hash: D.location.hash || null,
              search: D.location.search || null,
              timezone: c,
              locale: l,
            },
            `eager`,
          ]),
          await se({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let l = await c;
    e
      ? (ue(`framer-rewrite-breakpoints`, () => {
          (be(o), D.__framer_onRewriteBreakpoints?.(o));
        }),
        (la ? (e) => e() : w)(() => {
          (Ne(), Pe(), ee(t, l, { onRecoverableError: n }));
        }))
      : x(t, { onRecoverableError: n }).render(l);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var ia, aa, oa, sa, ca, la;
e(() => {
  if (
    (r(),
    M(),
    T(),
    d(),
    v(),
    Qi(),
    (ia = {
      augiA20Il: {
        elements: {
          dMa3I_0FQ: `the-solution`,
          IEzvAGyIY: `pricing`,
          LC8uHYUKO: `request-access`,
          rMkm87RAJ: `the-data`,
          wHPteuBSd: `the-edge`,
        },
        page: G(() => import(`./_hLt4hg9tgys6lgcWPLlQAG0A2detOfMMyQjWFMQefI.DSbPMurY.mjs`)),
        path: `/`,
      },
      MCl1zxt1X: {
        elements: { NOCX6Xdyw: `main-1` },
        page: G(() => import(`./TJb56fbYI77eoraFznPh14G3ujWSsLbnTUI4UmY4D3M.BNlwCZ0U.mjs`)),
        path: `/404`,
      },
      TG4v3XDvb: {
        elements: { fjLeeXjVd: `hero-scroll-trigger`, SxR0CVCd9: `Book A Call` },
        page: G(() => import(`./4mXScpUdPorPqng0gLTWyWdocOrYpDmzoitwk0KkwcU.DVXB4Vz1.mjs`)),
        path: `/about`,
      },
      ssA6QOcex: {
        elements: {},
        page: G(() => import(`./yesvFfBRsZhSui7zrpO_zMR3jjwfeYI5WZQPezqWfWI.DkEy6Lbd.mjs`)),
        path: `/privacy-policy`,
      },
      fnocoQUFP: {
        elements: {},
        page: G(() => import(`./UsiJtR8woVg36MlkZUescs3BVsUS80BvYuem0HJJLwY.B38dy5y2.mjs`)),
        path: `/acceptable-use`,
      },
      P_hYK51BA: {
        elements: {},
        page: G(() => import(`./i8yNtfnjNHcCJZOWp0jKrW_YrY9JlmW0PUBL7CfU_ZQ.ycGcMKR9.mjs`)),
        path: `/terms-and-conditions`,
      },
      jL2GUUASB: {
        elements: { tZXUF60fM: `Book A Call` },
        page: G(() => import(`./PwR7bGGCEzpLZ6NdjcCtPJLEU3DSbawLfpWPAeCIWvA.B3uZcV0r.mjs`)),
        path: `/contact`,
      },
      IcLi543Pr: {
        elements: { NiOM68_OU: `case-studies` },
        page: G(() => import(`./qQDKXELJXzLHeuMAlvvUuyzKoOf7QS4J7RjP9DS_0do.BrDU1ney.mjs`)),
        path: `/case-studies`,
      },
      JFNr7AzSy: {
        elements: { EK08Qvqdt: `jobs` },
        page: G(() => import(`./5IJ3X_rY2mzNdOgK2g04NshUTQGv2BL89M6v1Bf8JzM.DUn0rtW8.mjs`)),
        path: `/careers`,
      },
      sXNmQkfHo: {
        collectionId: `lLZsS_En3`,
        elements: { oFYw5Ybkh: `metrics`, T5kladmpb: `Book A Call` },
        page: G(() => import(`./5XHfiStr-T3VT1p7OzbNXoBFxf_oOwf4SK8PECwjRdA.DOq8z5e7.mjs`)),
        path: `/case-studies/:yKuZxAi18`,
      },
      wUl6IQ99K: {
        collectionId: `vQ037hWUX`,
        elements: {},
        page: G(() => import(`./PwopH5xOrBINH6cHtIgd8fGD8MBU4HBampewLcfnS7s.CNEzPHpt.mjs`)),
        path: `/careers/:PLBkt8VbJ`,
      },
    }),
    (aa = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (oa = {
      lLZsS_En3: async () =>
        (await import(`./zw6a-uIYgIA8yp5PMvHqUAuFl6xNn7WE13IqnkPRdRo.BogH8ekS.mjs`))?.utils,
      vQ037hWUX: async () =>
        (await import(`./NixXGD5YuZU-kDUku8JEuuP_Xj8FAvdCPW-yi1VBODg.CxjG90S5.mjs`))?.utils,
    }),
    (sa = `0ea6aefe97eaf50ab975d34367fa980556b92e4102d35c7acbe055f1c4a07410`),
    (ca = typeof document < `u`),
    (la = ca && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(c.userAgent)),
    ca)
  ) {
    ((D.__framer_importFromPackage = (e, t) => () =>
      C(ye, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (D.__framer_events = D.__framer_events || []),
      de(),
      Se());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? ra(!0, e) : ra(!1, e);
  }
  (function () {
    ca &&
      w(() => {
        ee(
          document.getElementById(`__framer-badge-container`),
          C(_, {}, C(b(() => import(`./PX9hIOIVM.CIjbPugW.mjs`))))
        );
      });
  })();
})();
export { ea as getLayoutTemplateBreakpoints, ta as getPageRoot };
//# sourceMappingURL=script_main.DCJMaTXm.mjs.map
