import { t as e } from "./rolldown-runtime.BB3S47xo.mjs";
import {
  A as t,
  O as n,
  P as r,
  _ as i,
  c as a,
  j as o,
  l as s,
  o as c,
  s as ee,
  w as l,
  y as u,
} from "./react.Cxf1BSD4.mjs";
import { C as d, a as f, r as te, t as p } from "./motion.BxtCy6Qp.mjs";
import {
  $ as m,
  Et as h,
  G as g,
  K as _,
  L as v,
  Mt as y,
  N as b,
  Ot as x,
  P as S,
  _t as C,
  a as w,
  at as T,
  bt as ne,
  dt as re,
  f as ie,
  ft as ae,
  g as oe,
  gt as E,
  ht as se,
  j as D,
  k as O,
  kt as k,
  l as A,
  o as j,
  s as M,
  u as N,
  w as P,
  wt as ce,
  y as le,
  yt as F,
  z as I,
} from "./framer.DwtIulwr.mjs";
import { i as L, n as ue, r as de, t as fe } from "./Bo2HZoBjr.ysB5lyAs.mjs";
import { a as pe, i as me, o as he, r as ge } from "./shared-lib.CQP05-fP.mjs";
import { i as _e, n as ve, r as ye, t as be } from "./dXsx8iVCg.B24QAjan.mjs";
import { a as R, i as xe, n as Se, o as Ce, r as we, t as Te } from "./uZRRtWbaF.LXjQgqUe.mjs";
import { a as Ee, i as z, n as De, o as Oe, r as ke, t as B } from "./DceBCnOwO.B9SMLZsp.mjs";
import { n as Ae, t as V } from "./P5vT9Lyjc.CTBR89wC.mjs";
import { i as je, n as Me, r as Ne, t as Pe } from "./gfNbT0EVI.CeOFpiEW.mjs";
import { i as Fe, n as Ie, r as Le, t as Re } from "./xv81tUXg1.CGM_jtyj.mjs";
import { n as ze, r as Be } from "./uWHdr3sGD.LCqC2ega.mjs";
import { n as Ve, t as H } from "./R4gLqdumy.CkEzaCyt.mjs";
import { n as He, r as Ue } from "./jL2GUUASB.BQhwr7zY.mjs";
function U(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var We,
  Ge,
  Ke,
  qe,
  Je,
  W,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  G,
  K,
  et = e(() => {
    (c(),
      m(),
      p(),
      l(),
      De(),
      (We = g(B)),
      (Ge = [`c5MM3vmch`, `r6ALyprsQ`, `k95iDUfJ2`, `y_HzQL1zO`, `WANa3QH5r`, `pQWS6VDN9`]),
      (Ke = `framer-h1MvN`),
      (qe = {
        c5MM3vmch: `framer-v-ejk4k4`,
        k95iDUfJ2: `framer-v-1m0hzuj`,
        pQWS6VDN9: `framer-v-revpc2`,
        r6ALyprsQ: `framer-v-3bi7l9`,
        WANa3QH5r: `framer-v-1rn1as8`,
        y_HzQL1zO: `framer-v-pkmcoe`,
      }),
      (Je = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (W = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ye = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: s, children: n });
      }),
      (Xe = {
        "1 Open": `r6ALyprsQ`,
        "2 Open": `k95iDUfJ2`,
        "3 Open": `y_HzQL1zO`,
        "4 Open": `WANa3QH5r`,
        "5 Open": `pQWS6VDN9`,
        "All Closed": `c5MM3vmch`,
      }),
      (Ze = d.create(r)),
      (Qe = ({
        click: e,
        click2: t,
        click3: n,
        click4: r,
        click5: i,
        height: a,
        id: o,
        width: s,
        ...c
      }) => ({
        ...c,
        A1eQ2lnGU: t ?? c.A1eQ2lnGU,
        bRPEtAnta: i ?? c.bRPEtAnta,
        HtEL_3zBh: n ?? c.HtEL_3zBh,
        rh_fVC34M: e ?? c.rh_fVC34M,
        S2jRcYwpE: r ?? c.S2jRcYwpE,
        variant: Xe[c.variant] ?? c.variant ?? `c5MM3vmch`,
      })),
      ($e = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = k(
        i(function (e, t) {
          let r = n(null),
            i = t ?? r,
            o = u(),
            { activeLocale: c, setLocale: ee } = F(),
            l = ae(),
            {
              style: f,
              className: p,
              layoutId: m,
              variant: h,
              rh_fVC34M: g,
              A1eQ2lnGU: _,
              HtEL_3zBh: y,
              S2jRcYwpE: b,
              bRPEtAnta: S,
              ...C
            } = Qe(e),
            {
              baseVariant: T,
              classNames: ne,
              clearLoadingGesture: ie,
              gestureHandlers: oe,
              gestureVariant: E,
              isLoading: se,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = x({
              cycleOrder: Ge,
              defaultVariant: `c5MM3vmch`,
              ref: i,
              variant: h,
              variantClassNames: qe,
            }),
            j = $e(e, A),
            { activeVariantCallback: M, delay: N } = re(T),
            P = M(async (...e) => {
              if (g && (await g(...e)) === !1) return !1;
              k(`r6ALyprsQ`);
            }),
            ce = M(async (...e) => {
              if (_ && (await _(...e)) === !1) return !1;
              k(`k95iDUfJ2`);
            }),
            le = M(async (...e) => {
              if (y && (await y(...e)) === !1) return !1;
              k(`y_HzQL1zO`);
            }),
            I = M(async (...e) => {
              if (b && (await b(...e)) === !1) return !1;
              k(`WANa3QH5r`);
            }),
            L = M(async (...e) => {
              if (S && (await S(...e)) === !1) return !1;
              k(`pQWS6VDN9`);
            }),
            ue = v(Ke);
          return a(te, {
            id: m ?? o,
            children: a(Ze, {
              animate: A,
              initial: !1,
              children: a(Ye, {
                value: Je,
                children: s(d.div, {
                  ...C,
                  ...oe,
                  className: v(ue, `framer-ejk4k4`, p, ne),
                  "data-framer-name": `All Closed`,
                  layoutDependency: j,
                  layoutId: `c5MM3vmch`,
                  ref: i,
                  style: { ...f },
                  ...U(
                    {
                      k95iDUfJ2: { "data-framer-name": `2 Open` },
                      pQWS6VDN9: { "data-framer-name": `5 Open` },
                      r6ALyprsQ: { "data-framer-name": `1 Open` },
                      WANa3QH5r: { "data-framer-name": `4 Open` },
                      y_HzQL1zO: { "data-framer-name": `3 Open` },
                    },
                    T,
                    E
                  ),
                  children: [
                    a(w, {
                      height: 138,
                      width: l?.width || `100vw`,
                      y: (l?.y || 0) + 0 + (((l?.height || 499) - 0 - 730) / 2 + 0 + 0),
                      ...U(
                        {
                          k95iDUfJ2: {
                            y: (l?.y || 0) + 0 + (((l?.height || 575) - 0 - 730) / 2 + 0 + 0),
                          },
                          pQWS6VDN9: {
                            y: (l?.y || 0) + 0 + (((l?.height || 530.5) - 0 - 730) / 2 + 0 + 0),
                          },
                          r6ALyprsQ: {
                            y: (l?.y || 0) + 0 + (((l?.height || 556) - 0 - 730) / 2 + 0 + 0),
                          },
                          WANa3QH5r: {
                            y: (l?.y || 0) + 0 + (((l?.height || 553) - 0 - 730) / 2 + 0 + 0),
                          },
                          y_HzQL1zO: {
                            y: (l?.y || 0) + 0 + (((l?.height || 575) - 0 - 730) / 2 + 0 + 0),
                          },
                        },
                        T,
                        E
                      ),
                      children: a(D, {
                        className: `framer-1ojsz8q-container`,
                        layoutDependency: j,
                        layoutId: `BXxmgSzdi-container`,
                        nodeId: `BXxmgSzdi`,
                        rendersWithMotion: !0,
                        scopeId: `fvPO2JrtF`,
                        children: a(B, {
                          height: `100%`,
                          id: `BXxmgSzdi`,
                          layoutId: `BXxmgSzdi`,
                          qY77pdGfk: P,
                          style: { width: `100%` },
                          variant: W(`NeriRO7TR`),
                          width: `100%`,
                          wkkhRw0xc: `No. We do not employ traditional salespeople. Your initial 30-minute discovery call will be conducted directly with a Lead Systems Architect.`,
                          wTHxi2jJc: `Will I be speaking with a sales representative?`,
                          ...U({ r6ALyprsQ: { variant: W(`iPbUXRQy9`) } }, T, E),
                        }),
                      }),
                    }),
                    a(w, {
                      height: 138,
                      width: l?.width || `100vw`,
                      y: (l?.y || 0) + 0 + (((l?.height || 499) - 0 - 730) / 2 + 138 + 10),
                      ...U(
                        {
                          k95iDUfJ2: {
                            y: (l?.y || 0) + 0 + (((l?.height || 575) - 0 - 730) / 2 + 138 + 10),
                          },
                          pQWS6VDN9: {
                            y: (l?.y || 0) + 0 + (((l?.height || 530.5) - 0 - 730) / 2 + 138 + 10),
                          },
                          r6ALyprsQ: {
                            y: (l?.y || 0) + 0 + (((l?.height || 556) - 0 - 730) / 2 + 138 + 10),
                          },
                          WANa3QH5r: {
                            y: (l?.y || 0) + 0 + (((l?.height || 553) - 0 - 730) / 2 + 138 + 10),
                          },
                          y_HzQL1zO: {
                            y: (l?.y || 0) + 0 + (((l?.height || 575) - 0 - 730) / 2 + 138 + 10),
                          },
                        },
                        T,
                        E
                      ),
                      children: a(D, {
                        className: `framer-omb3v1-container`,
                        layoutDependency: j,
                        layoutId: `focv0MAcl-container`,
                        nodeId: `focv0MAcl`,
                        rendersWithMotion: !0,
                        scopeId: `fvPO2JrtF`,
                        children: a(B, {
                          height: `100%`,
                          id: `focv0MAcl`,
                          layoutId: `focv0MAcl`,
                          qY77pdGfk: ce,
                          style: { width: `100%` },
                          variant: W(`NeriRO7TR`),
                          width: `100%`,
                          wkkhRw0xc: `Upon booking, you will receive a brief technical questionnaire regarding your current software stack and manual bottlenecks. We require this to be completed 24 hours prior to our meeting so we can bypass generic introductions and get straight to architectural solutions.`,
                          wTHxi2jJc: `What do I need to prepare for our initial assessment?`,
                          ...U({ k95iDUfJ2: { variant: W(`iPbUXRQy9`) } }, T, E),
                        }),
                      }),
                    }),
                    a(w, {
                      height: 138,
                      width: l?.width || `100vw`,
                      y: (l?.y || 0) + 0 + (((l?.height || 499) - 0 - 730) / 2 + 276 + 20),
                      ...U(
                        {
                          k95iDUfJ2: {
                            y: (l?.y || 0) + 0 + (((l?.height || 575) - 0 - 730) / 2 + 276 + 20),
                          },
                          pQWS6VDN9: {
                            y: (l?.y || 0) + 0 + (((l?.height || 530.5) - 0 - 730) / 2 + 276 + 20),
                          },
                          r6ALyprsQ: {
                            y: (l?.y || 0) + 0 + (((l?.height || 556) - 0 - 730) / 2 + 276 + 20),
                          },
                          WANa3QH5r: {
                            y: (l?.y || 0) + 0 + (((l?.height || 553) - 0 - 730) / 2 + 276 + 20),
                          },
                          y_HzQL1zO: {
                            y: (l?.y || 0) + 0 + (((l?.height || 575) - 0 - 730) / 2 + 276 + 20),
                          },
                        },
                        T,
                        E
                      ),
                      children: a(D, {
                        className: `framer-1qinoyt-container`,
                        layoutDependency: j,
                        layoutId: `yphc6zv5q-container`,
                        nodeId: `yphc6zv5q`,
                        rendersWithMotion: !0,
                        scopeId: `fvPO2JrtF`,
                        children: a(B, {
                          height: `100%`,
                          id: `yphc6zv5q`,
                          layoutId: `yphc6zv5q`,
                          qY77pdGfk: le,
                          style: { width: `100%` },
                          variant: W(`NeriRO7TR`),
                          width: `100%`,
                          wkkhRw0xc: `Absolutely. We understand we are dealing with highly sensitive operational data. A standard mutual Non-Disclosure Agreement (NDA) is automatically attached to your calendar booking confirmation, fully executed before we speak.`,
                          wTHxi2jJc: `Will you sign an NDA before we discuss our internal processes?`,
                          ...U({ y_HzQL1zO: { variant: W(`iPbUXRQy9`) } }, T, E),
                        }),
                      }),
                    }),
                    a(w, {
                      height: 138,
                      width: l?.width || `100vw`,
                      y: (l?.y || 0) + 0 + (((l?.height || 499) - 0 - 730) / 2 + 414 + 30),
                      ...U(
                        {
                          k95iDUfJ2: {
                            y: (l?.y || 0) + 0 + (((l?.height || 575) - 0 - 730) / 2 + 414 + 30),
                          },
                          pQWS6VDN9: {
                            y: (l?.y || 0) + 0 + (((l?.height || 530.5) - 0 - 730) / 2 + 414 + 30),
                          },
                          r6ALyprsQ: {
                            y: (l?.y || 0) + 0 + (((l?.height || 556) - 0 - 730) / 2 + 414 + 30),
                          },
                          WANa3QH5r: {
                            y: (l?.y || 0) + 0 + (((l?.height || 553) - 0 - 730) / 2 + 414 + 30),
                          },
                          y_HzQL1zO: {
                            y: (l?.y || 0) + 0 + (((l?.height || 575) - 0 - 730) / 2 + 414 + 30),
                          },
                        },
                        T,
                        E
                      ),
                      children: a(D, {
                        className: `framer-vt43sk-container`,
                        layoutDependency: j,
                        layoutId: `SL_rUauvE-container`,
                        nodeId: `SL_rUauvE`,
                        rendersWithMotion: !0,
                        scopeId: `fvPO2JrtF`,
                        children: a(B, {
                          height: `100%`,
                          id: `SL_rUauvE`,
                          layoutId: `SL_rUauvE`,
                          qY77pdGfk: I,
                          style: { width: `100%` },
                          variant: W(`NeriRO7TR`),
                          width: `100%`,
                          wkkhRw0xc: `The introductory 30-minute feasibility call is completely free. If we determine your infrastructure is ready for automation, we will then propose a flat-fee Infrastructure Audit as the formal Phase 01 engagement.`,
                          wTHxi2jJc: `Do you charge for the initial discovery call?`,
                          ...U({ WANa3QH5r: { variant: W(`iPbUXRQy9`) } }, T, E),
                        }),
                      }),
                    }),
                    a(w, {
                      height: 138,
                      width: l?.width || `100vw`,
                      y: (l?.y || 0) + 0 + (((l?.height || 499) - 0 - 730) / 2 + 552 + 40),
                      ...U(
                        {
                          k95iDUfJ2: {
                            y: (l?.y || 0) + 0 + (((l?.height || 575) - 0 - 730) / 2 + 552 + 40),
                          },
                          pQWS6VDN9: {
                            y: (l?.y || 0) + 0 + (((l?.height || 530.5) - 0 - 730) / 2 + 552 + 40),
                          },
                          r6ALyprsQ: {
                            y: (l?.y || 0) + 0 + (((l?.height || 556) - 0 - 730) / 2 + 552 + 40),
                          },
                          WANa3QH5r: {
                            y: (l?.y || 0) + 0 + (((l?.height || 553) - 0 - 730) / 2 + 552 + 40),
                          },
                          y_HzQL1zO: {
                            y: (l?.y || 0) + 0 + (((l?.height || 575) - 0 - 730) / 2 + 552 + 40),
                          },
                        },
                        T,
                        E
                      ),
                      children: a(D, {
                        className: `framer-kj5mp3-container`,
                        layoutDependency: j,
                        layoutId: `WnEGR3eJ0-container`,
                        nodeId: `WnEGR3eJ0`,
                        rendersWithMotion: !0,
                        scopeId: `fvPO2JrtF`,
                        children: a(B, {
                          height: `100%`,
                          id: `WnEGR3eJ0`,
                          layoutId: `WnEGR3eJ0`,
                          qY77pdGfk: L,
                          style: { width: `100%` },
                          variant: W(`NeriRO7TR`),
                          width: `100%`,
                          wkkhRw0xc: `No. We do not touch your live production environment during the build phase. We engineer, train, and stress-test your custom AI agents and middleware in a completely secure, parallel sandbox. You experience absolute zero downtime. We only execute the final switchover once the system is fully verified and your staff is completely trained on the new workflow.`,
                          wTHxi2jJc: `Will deploying this infrastructure disrupt our current daily operations?`,
                          ...U({ pQWS6VDN9: { variant: W(`iPbUXRQy9`) } }, T, E),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-h1MvN.framer-v464bm, .framer-h1MvN .framer-v464bm { display: block; }`,
          `.framer-h1MvN.framer-ejk4k4 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 547px; }`,
          `.framer-h1MvN .framer-1ojsz8q-container, .framer-h1MvN .framer-omb3v1-container, .framer-h1MvN .framer-1qinoyt-container, .framer-h1MvN .framer-vt43sk-container, .framer-h1MvN .framer-kj5mp3-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ],
        `framer-h1MvN`
      )),
      (K = G),
      (G.displayName = `Contact FAQ`),
      (G.defaultProps = { height: 499, width: 547 }),
      S(G, {
        variant: {
          options: [`c5MM3vmch`, `r6ALyprsQ`, `k95iDUfJ2`, `y_HzQL1zO`, `WANa3QH5r`, `pQWS6VDN9`],
          optionTitles: [`All Closed`, `1 Open`, `2 Open`, `3 Open`, `4 Open`, `5 Open`],
          title: `Variant`,
          type: M.Enum,
        },
        rh_fVC34M: { title: `Click`, type: M.EventHandler },
        A1eQ2lnGU: { title: `Click 2`, type: M.EventHandler },
        HtEL_3zBh: { title: `Click 3`, type: M.EventHandler },
        S2jRcYwpE: { title: `Click 4`, type: M.EventHandler },
        bRPEtAnta: { title: `Click 5`, type: M.EventHandler },
      }),
      b(G, [{ explicitInter: !0, fonts: [] }, ...We], { supportsExplicitInterCodegen: !0 }),
      (G.loader = { load: (e, t) => (t.locale, Promise.allSettled([I(B, {}, t)])) }));
  });
function tt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  q,
  J,
  ut = e(() => {
    (c(),
      m(),
      p(),
      l(),
      L(),
      he(),
      Ee(),
      (nt = { AexFo3p1G: { hover: !0 } }),
      (rt = `framer-semHW`),
      (it = { AexFo3p1G: `framer-v-eikyl6` }),
      (at = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ot = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: s, children: n });
      }),
      (st = d.create(r)),
      (ct = ({ height: e, icon: t, id: n, link: r, title: i, value: a, width: o, ...s }) => ({
        ...s,
        EW5SdV5XM: r ?? s.EW5SdV5XM,
        GS4n_oaZ6: i ?? s.GS4n_oaZ6 ?? `Email`,
        prLvWmivG: a ?? s.prLvWmivG ?? `support@stackgrid.framer.website.`,
        XyooiHWrm: t ?? s.XyooiHWrm ?? Oe,
      })),
      (lt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = k(
        i(function (e, t) {
          let i = n(null),
            o = t ?? i,
            c = u(),
            { activeLocale: ee, setLocale: l } = F();
          ae();
          let {
              style: f,
              className: p,
              layoutId: m,
              variant: h,
              XyooiHWrm: g,
              GS4n_oaZ6: _,
              prLvWmivG: y,
              EW5SdV5XM: b,
              ...S
            } = ct(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: ne,
              gestureVariant: re,
              isLoading: ie,
              setGestureState: E,
              setVariant: se,
              variants: D,
            } = x({
              defaultVariant: `AexFo3p1G`,
              enabledGestures: nt,
              ref: o,
              variant: h,
              variantClassNames: it,
            }),
            k = lt(e, D),
            A = v(rt, fe, ge);
          return a(te, {
            id: m ?? c,
            children: a(st, {
              animate: D,
              initial: !1,
              children: a(ot, {
                value: at,
                children: a(le, {
                  href: b,
                  motionChild: !0,
                  nodeId: `AexFo3p1G`,
                  openInNewTab: !1,
                  scopeId: `qdrtkRfll`,
                  children: s(d.a, {
                    ...S,
                    ...ne,
                    className: `${v(A, `framer-eikyl6`, p, w)} framer-kox2rs`,
                    "data-border": !0,
                    "data-framer-name": `Primary`,
                    layoutDependency: k,
                    layoutId: `AexFo3p1G`,
                    ref: o,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `dashed`,
                      "--border-top-width": `1px`,
                      backgroundColor: `rgba(247, 247, 247, 0)`,
                      ...f,
                    },
                    variants: {
                      "AexFo3p1G-hover": {
                        backgroundColor: `var(--token-88de8be5-fdc6-43ad-98d5-dc2e7d77e5cc, rgb(247, 247, 247))`,
                      },
                    },
                    ...tt({ "AexFo3p1G-hover": { "data-framer-name": void 0 } }, C, re),
                    children: [
                      s(d.div, {
                        className: `framer-1gecn19`,
                        "data-framer-name": `Header`,
                        layoutDependency: k,
                        layoutId: `AnO9fhIAp`,
                        children: [
                          a(oe, {
                            animated: !0,
                            className: `framer-e7hi3z`,
                            Component: g,
                            layoutDependency: k,
                            layoutId: `Dt87lNON6`,
                            style: {
                              "--62mhw": `var(--token-ee24881a-d59f-4831-81c5-31b2a73efdd2, rgb(120, 120, 120))`,
                            },
                          }),
                          a(O, {
                            __fromCanvasComponent: !0,
                            children: a(r, {
                              children: a(d.p, {
                                className: `framer-styles-preset-ccv9s9`,
                                "data-styles-preset": `Bo2HZoBjr`,
                                dir: `auto`,
                                style: { "--framer-text-alignment": `left` },
                                children: `Email`,
                              }),
                            }),
                            className: `framer-1c78twn`,
                            fonts: [`Inter`],
                            layoutDependency: k,
                            layoutId: `gBdzuXs8R`,
                            style: {
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: _,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      a(O, {
                        __fromCanvasComponent: !0,
                        children: a(r, {
                          children: a(d.p, {
                            className: `framer-styles-preset-1i4fe7d`,
                            "data-styles-preset": `NbDFs5rgP`,
                            dir: `auto`,
                            style: {
                              "--framer-text-alignment": `left`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84)))`,
                            },
                            children: `support@stackgrid.framer.website.`,
                          }),
                        }),
                        className: `framer-fz8aqd`,
                        fonts: [`Inter`],
                        layoutDependency: k,
                        layoutId: `joCl72Z7C`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: y,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
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
          `.framer-semHW.framer-kox2rs, .framer-semHW .framer-kox2rs { display: block; }`,
          `.framer-semHW.framer-eikyl6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; height: 180px; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 28px; position: relative; text-decoration: none; width: 368px; }`,
          `.framer-semHW .framer-1gecn19 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-semHW .framer-e7hi3z { flex: none; height: var(--framer-aspect-ratio-supported, 34px); position: relative; width: 34px; }`,
          `.framer-semHW .framer-1c78twn, .framer-semHW .framer-fz8aqd { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          ...ue,
          ...me,
          `.framer-semHW[data-border="true"]::after, .framer-semHW [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-semHW`
      )),
      (J = q),
      (q.displayName = `Contact Card`),
      (q.defaultProps = { height: 180, width: 368 }),
      S(q, {
        XyooiHWrm: {
          defaultValue: {
            identifier: `local-module:vector/zuDi13M7T:default`,
            moduleId: `AwkV9kWdR9KCLS0mXzyP`,
          },
          setModuleId: `bFCrGSomAwxwjp4GIoDy`,
          title: `Icon`,
          type: M.VectorSetItem,
        },
        GS4n_oaZ6: { defaultValue: `Email`, displayTextArea: !1, title: `Title`, type: M.String },
        onGS4n_oaZ6Change: { changes: `GS4n_oaZ6`, type: M.ChangeHandler },
        prLvWmivG: {
          defaultValue: `support@stackgrid.framer.website.`,
          displayTextArea: !1,
          title: `Value`,
          type: M.String,
        },
        onprLvWmivGChange: { changes: `prLvWmivG`, type: M.ChangeHandler },
        EW5SdV5XM: { title: `Link`, type: M.Link },
      }),
      b(
        q,
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
          ..._(de),
          ..._(pe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  dt,
  ft,
  pt,
  Y,
  mt,
  ht = e(() => {
    (c(),
      m(),
      l(),
      (dt = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 67.634 99.477 C 52.37 99.703 36.357 101.19 21.28 97.84 C 8.129 94.802 1.579 84.201 0.579 71.313 C 0.204 53.749 -1.572 35.31 3.829 18.346 C 11.205 -1.731 28.881 0.819 46.508 0.044 C 55.208 0.432 64.097 -0.868 72.672 1.269 C 82.961 2.832 92.549 10.17 95.649 20.271 C 97.312 24.409 97.312 28.971 97.662 33.334 C 98.137 43.723 98.349 54.111 98.099 64.499 C 96.924 85.464 90.799 99.052 67.634 99.477 Z M 73.296 40.373 C 70.338 27.359 58.986 21.5 49.014 21.5 L 48.986 21.5 C 39.042 21.5 27.662 27.331 24.704 40.345 C 21.408 54.88 30.31 67.19 38.366 74.937 C 41.222 77.701 45.04 79.246 49.014 79.247 C 52.845 79.247 56.676 77.81 59.634 74.937 C 67.69 67.19 76.592 54.909 73.296 40.373 Z M 49.014 54.486 C 44.114 54.486 40.141 50.513 40.141 45.613 C 40.141 40.712 44.114 36.739 49.014 36.739 C 53.915 36.739 57.887 40.712 57.887 45.613 C 57.887 50.513 53.915 54.486 49.014 54.486 Z" fill="var(--62mhw, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="100px" id="WhqrNXNW1" width="98.20513082046156px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (ft = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n ? a(d.div, { ...o, layoutId: r, ref: t }) : a(`div`, { ...o, ref: t });
      })),
      (pt = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        kfNzCWrbt:
          e ?? i.kfNzCWrbt ?? `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (Y = k(
        i(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: o, kfNzCWrbt: s, ...c } = pt(e);
          return a(ft, {
            ...c,
            className: v(`framer-fk9Ra`, r),
            layoutId: i,
            ref: t,
            style: { "--62mhw": s, ...n },
          });
        }),
        [
          `.framer-fk9Ra { -webkit-mask: ${dt}; aspect-ratio: 1; background-color: var(--62mhw); mask: ${dt}; width: 100px; }`,
        ],
        `framer-fk9Ra`
      )),
      (Y.displayName = `Location Pin Square`),
      (mt = Y),
      S(Y, {
        kfNzCWrbt: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: M.Color,
        },
      }));
  }),
  gt,
  _t,
  vt,
  X,
  yt,
  bt = e(() => {
    (c(),
      m(),
      l(),
      (gt = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 67.634 99.477 C 52.37 99.703 36.357 101.19 21.28 97.84 C 8.129 94.802 1.579 84.201 0.579 71.313 C 0.204 53.749 -1.572 35.31 3.829 18.346 C 11.205 -1.731 28.881 0.819 46.508 0.044 C 55.208 0.432 64.097 -0.868 72.672 1.269 C 82.961 2.832 92.549 10.17 95.649 20.271 C 97.312 24.409 97.312 28.971 97.662 33.334 C 98.137 43.723 98.349 54.111 98.099 64.499 C 96.924 85.464 90.799 99.052 67.634 99.477 Z M 60.856 58.353 L 59.339 59.863 C 59.339 59.863 55.729 63.45 45.879 53.656 C 36.029 43.863 39.639 40.276 39.639 40.276 L 40.593 39.323 C 42.949 36.983 43.173 33.223 41.116 30.477 L 36.916 24.867 C 34.369 21.467 29.453 21.017 26.536 23.917 L 21.303 29.117 C 19.86 30.557 18.893 32.417 19.01 34.483 C 19.31 39.773 21.703 51.15 35.049 64.423 C 49.206 78.496 62.489 79.056 67.919 78.55 C 69.639 78.39 71.133 77.516 72.336 76.316 L 77.069 71.61 C 80.269 68.433 79.369 62.983 75.276 60.76 L 68.909 57.296 C 66.223 55.836 62.953 56.266 60.853 58.353 Z" fill="var(--62mhw, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="100px" id="DaXsbfEe3" width="98.20513082046156px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (_t = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n ? a(d.div, { ...o, layoutId: r, ref: t }) : a(`div`, { ...o, ref: t });
      })),
      (vt = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        kfNzCWrbt:
          e ?? i.kfNzCWrbt ?? `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (X = k(
        i(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: o, kfNzCWrbt: s, ...c } = vt(e);
          return a(_t, {
            ...c,
            className: v(`framer-ouahe`, r),
            layoutId: i,
            ref: t,
            style: { "--62mhw": s, ...n },
          });
        }),
        [
          `.framer-ouahe { -webkit-mask: ${gt}; aspect-ratio: 1; background-color: var(--62mhw); mask: ${gt}; width: 100px; }`,
        ],
        `framer-ouahe`
      )),
      (X.displayName = `Phone`),
      (yt = X),
      S(X, {
        kfNzCWrbt: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: M.Color,
        },
      }));
  }),
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Z,
  Pt,
  Q,
  Ft,
  It,
  Lt,
  Rt,
  $,
  zt,
  Bt;
e(() => {
  (c(),
    m(),
    p(),
    l(),
    et(),
    Ce(),
    ke(),
    Ae(),
    ut(),
    Ve(),
    _e(),
    je(),
    he(),
    Fe(),
    ht(),
    xe(),
    bt(),
    ze(),
    Te(),
    Ee(),
    He(),
    (xt = g(V)),
    (St = g(J)),
    (Ct = g(z)),
    (wt = y(d.div)),
    (Tt = g(K)),
    (Et = y(d.section)),
    (Dt = g(R)),
    (Ot = g(H)),
    (kt = {
      jdh3eR9ws: `(min-width: 810px) and (max-width: 1199.98px)`,
      nvBf40gBC: `(max-width: 809.98px)`,
      qjJN_kPWN: `(min-width: 1200px)`,
    }),
    (At = () => typeof document < `u`),
    (jt = []),
    (Mt = `framer-Da2do`),
    (Nt = {
      jdh3eR9ws: `framer-v-1ykrwx5`,
      nvBf40gBC: `framer-v-incvt1`,
      qjJN_kPWN: `framer-v-1chx7yg`,
    }),
    (Z = { bounce: 0, delay: 0, duration: 0.6, type: `spring` }),
    (Pt = (e, t, n) => (e && t ? `position` : n)),
    T(),
    (Q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Ft = (e, t, n) => {
      switch (e.state) {
        case `success`:
          return t.success ?? n;
        case `pending`:
          return t.pending ?? n;
        case `error`:
          return t.error ?? n;
        case `incomplete`:
          return t.incomplete ?? n;
        default:
          return n;
      }
    }),
    (It = { Desktop: `qjJN_kPWN`, Phone: `nvBf40gBC`, Tablet: `jdh3eR9ws` }),
    (Lt = ({ value: e }) =>
      C()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Rt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: It[r.variant] ?? r.variant ?? `qjJN_kPWN`,
    })),
    ($ = k(
      i(function (e, i) {
        let c = n(null),
          l = i ?? c,
          p = u(),
          { activeLocale: m, setLocale: g } = F(),
          _ = ae(),
          { style: y, className: b, layoutId: x, variant: S, ...C } = Rt(e);
        ne(o(() => Ue({}, m), [m]));
        let [T, re] = E(S, kt, !1),
          oe = v(Mt, Pe, ge, be, Re),
          D = t(ie)?.isLayoutTemplate,
          k = Pt(D, !!t(f)?.transition?.layout),
          M = () => (At() ? T !== `nvBf40gBC` : !0),
          le = () => !At() || T === `nvBf40gBC`,
          I = ce(`tZXUF60fM`),
          L = h();
        return (
          se({}),
          a(ie.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: It,
              primaryVariantId: `qjJN_kPWN`,
              variantClassNames: Nt,
            },
            children: s(te, {
              id: x ?? p,
              children: [
                a(Lt, {
                  value: `html body { background: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, rgb(245, 245, 245)); }`,
                }),
                a(d.div, {
                  ...C,
                  className: v(oe, `framer-1chx7yg`, b),
                  "data-selection": !0,
                  ref: l,
                  style: { ...y },
                  children: s(wt, {
                    className: `framer-omowpm`,
                    "data-framer-name": `Main`,
                    flowEffectEnabled: !0,
                    flowEffectTransition: Z,
                    isNestedFlowEffect: !1,
                    layout: k,
                    children: [
                      a(d.section, {
                        className: `framer-3xxcgd`,
                        "data-border": !0,
                        "data-framer-name": `Hero`,
                        layout: `position`,
                        children: s(`div`, {
                          className: `framer-q4tkj2`,
                          "data-framer-name": `Header`,
                          children: [
                            s(`div`, {
                              className: `framer-12b5z73`,
                              "data-framer-name": `Text`,
                              children: [
                                a(O, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(`h1`, {
                                      className: `framer-styles-preset-1xgagrl`,
                                      "data-styles-preset": `gfNbT0EVI`,
                                      dir: `auto`,
                                      children: `Contact us`,
                                    }),
                                  }),
                                  className: `framer-ms6st6`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(O, {
                                  __fromCanvasComponent: !0,
                                  children: a(r, {
                                    children: a(`p`, {
                                      className: `framer-styles-preset-1i4fe7d`,
                                      "data-styles-preset": `NbDFs5rgP`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                      },
                                      children: `Drop your technical parameters below, and an engineering lead will review your architecture layout within 24 hours.`,
                                    }),
                                  }),
                                  className: `framer-1di93xn`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            a(`div`, {
                              className: `framer-klbdz8`,
                              "data-framer-name": `Form`,
                              children: a(A, {
                                action: `https://api.framer.com/forms/v1/forms/d8c9939a-e05d-4799-a521-4a7cab62f45a/submit`,
                                className: `framer-1k6vaia`,
                                "data-border": !0,
                                nodeId: `DZkKgU_Oi`,
                                children: (e) =>
                                  s(ee, {
                                    children: [
                                      s(`div`, {
                                        className: `framer-u7vkrz`,
                                        "data-framer-name": `Name`,
                                        children: [
                                          s(`label`, {
                                            className: `framer-kiop3f`,
                                            children: [
                                              a(O, {
                                                __fromCanvasComponent: !0,
                                                children: a(r, {
                                                  children: a(`p`, {
                                                    className: `framer-styles-preset-kmsqt2`,
                                                    "data-styles-preset": `dXsx8iVCg`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, rgb(120, 120, 120))`,
                                                    },
                                                    children: `First Name`,
                                                  }),
                                                }),
                                                className: `framer-xu3tqp`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              a(N, {
                                                className: `framer-tebyuj`,
                                                inputName: `First Name`,
                                                placeholder: `Krutik`,
                                                required: !0,
                                                type: `text`,
                                              }),
                                            ],
                                          }),
                                          s(`label`, {
                                            className: `framer-2h2y75`,
                                            children: [
                                              a(O, {
                                                __fromCanvasComponent: !0,
                                                children: a(r, {
                                                  children: a(`p`, {
                                                    className: `framer-styles-preset-kmsqt2`,
                                                    "data-styles-preset": `dXsx8iVCg`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, rgb(120, 120, 120))`,
                                                    },
                                                    children: `Last Name`,
                                                  }),
                                                }),
                                                className: `framer-1h1u4q9`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              a(N, {
                                                className: `framer-1rwr5yw`,
                                                inputName: `Last Name`,
                                                placeholder: `Maru`,
                                                required: !0,
                                                type: `text`,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      s(`label`, {
                                        className: `framer-9poh5`,
                                        children: [
                                          a(O, {
                                            __fromCanvasComponent: !0,
                                            children: a(r, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-kmsqt2`,
                                                "data-styles-preset": `dXsx8iVCg`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, rgb(120, 120, 120))`,
                                                },
                                                children: `Email`,
                                              }),
                                            }),
                                            className: `framer-octj00`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(N, {
                                            className: `framer-xc38zy`,
                                            inputName: `Email`,
                                            placeholder: `krutik@framer.com`,
                                            required: !0,
                                            type: `email`,
                                          }),
                                        ],
                                      }),
                                      s(`label`, {
                                        className: `framer-miuvzg`,
                                        children: [
                                          a(O, {
                                            __fromCanvasComponent: !0,
                                            children: a(r, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-kmsqt2`,
                                                "data-styles-preset": `dXsx8iVCg`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, rgb(120, 120, 120))`,
                                                },
                                                children: `Phone`,
                                              }),
                                            }),
                                            className: `framer-1q1f7ss`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(N, {
                                            className: `framer-of3wmh`,
                                            inputName: `Phone`,
                                            placeholder: `+1-555-010-2345`,
                                            required: !0,
                                            type: `tel`,
                                          }),
                                        ],
                                      }),
                                      s(`label`, {
                                        className: `framer-1vce17j`,
                                        children: [
                                          a(O, {
                                            __fromCanvasComponent: !0,
                                            children: a(r, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-kmsqt2`,
                                                "data-styles-preset": `dXsx8iVCg`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, rgb(120, 120, 120))`,
                                                },
                                                children: `Message`,
                                              }),
                                            }),
                                            className: `framer-hhgtp`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(N, {
                                            className: `framer-v0o5fv`,
                                            inputName: `Message`,
                                            placeholder: `Type your message here...`,
                                            required: !1,
                                            type: `textarea`,
                                          }),
                                        ],
                                      }),
                                      a(P, {
                                        breakpoint: T,
                                        overrides: {
                                          jdh3eR9ws: {
                                            width: `calc(min(max(min(min(${_?.width || `100vw`}, 1300px), 780px) - 56px, 1px), 500px) - 80px)`,
                                          },
                                          nvBf40gBC: {
                                            width: `calc(min(max(min(min(${_?.width || `100vw`}, 1300px) - 24px, 790px) - 56px, 1px), 500px) - 40px)`,
                                          },
                                        },
                                        children: a(w, {
                                          height: 40,
                                          width: `calc(min(max(min(min(${_?.width || `100vw`}, 1300px), 1180px) - 56px, 1px), 500px) - 80px)`,
                                          children: a(j, {
                                            className: `framer-1b5dcw-container`,
                                            nodeId: `gEExCQK5I`,
                                            scopeId: `jL2GUUASB`,
                                            children: a(V, {
                                              arpT9QFmV: `Thank you`,
                                              height: `100%`,
                                              id: `gEExCQK5I`,
                                              layoutId: `gEExCQK5I`,
                                              style: { height: `100%`, width: `100%` },
                                              type: `submit`,
                                              variant: Ft(
                                                e,
                                                {
                                                  error: `PPljyH5_r`,
                                                  incomplete: `WRb6p8jNW`,
                                                  pending: `UPQmYyUya`,
                                                  success: `jG0My5y6_`,
                                                },
                                                Q(`rIkqgLzeQ`)
                                              ),
                                              w5DnkIBNM: `Submit`,
                                              width: `100%`,
                                              Z86Zq0Wki: `Something went wrong`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      s(d.section, {
                        className: `framer-14iogy1`,
                        "data-border": !0,
                        "data-framer-name": `Contact Options`,
                        layout: `position`,
                        children: [
                          s(`div`, {
                            className: `framer-qp03h0`,
                            "data-framer-name": `Text`,
                            children: [
                              a(O, {
                                __fromCanvasComponent: !0,
                                children: a(r, {
                                  children: a(`h3`, {
                                    className: `framer-styles-preset-or66bk`,
                                    "data-styles-preset": `xv81tUXg1`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `center` },
                                    children: `Reach out to us`,
                                  }),
                                }),
                                className: `framer-176ktxt`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(O, {
                                __fromCanvasComponent: !0,
                                children: a(r, {
                                  children: a(`p`, {
                                    className: `framer-styles-preset-1i4fe7d`,
                                    "data-styles-preset": `NbDFs5rgP`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                    },
                                    children: `You can reach out to us via our support email or phone number or even an office visit`,
                                  }),
                                }),
                                className: `framer-16ur2ke`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-qhhjv5`,
                            "data-framer-name": `Contact Cards`,
                            children: [
                              a(P, {
                                breakpoint: T,
                                overrides: {
                                  jdh3eR9ws: {
                                    width: `min(min(min(${_?.width || `100vw`}, 1300px), 780px) - 56px, 400px)`,
                                  },
                                  nvBf40gBC: {
                                    width: `min(min(min(${_?.width || `100vw`}, 1300px) - 24px, 600px) - 56px, 890px)`,
                                  },
                                },
                                children: a(w, {
                                  height: 180,
                                  width: `max((min(min(min(${_?.width || `100vw`}, 1300px), 1180px) - 56px, 890px) - 20px) / 3, 1px)`,
                                  children: a(j, {
                                    className: `framer-d1rrrp-container`,
                                    nodeId: `m3EINO3Nu`,
                                    scopeId: `jL2GUUASB`,
                                    children: a(J, {
                                      EW5SdV5XM: `mailto:krutikmaru18@gmail.com`,
                                      GS4n_oaZ6: `Email`,
                                      height: `100%`,
                                      id: `m3EINO3Nu`,
                                      layoutId: `m3EINO3Nu`,
                                      prLvWmivG: `support@stackgrid.framer.website.`,
                                      style: { height: `100%`, width: `100%` },
                                      width: `100%`,
                                      XyooiHWrm: Oe,
                                    }),
                                  }),
                                }),
                              }),
                              a(P, {
                                breakpoint: T,
                                overrides: {
                                  jdh3eR9ws: {
                                    width: `min(min(min(${_?.width || `100vw`}, 1300px), 780px) - 56px, 400px)`,
                                  },
                                  nvBf40gBC: {
                                    width: `min(min(min(${_?.width || `100vw`}, 1300px) - 24px, 600px) - 56px, 890px)`,
                                  },
                                },
                                children: a(w, {
                                  height: 180,
                                  width: `max((min(min(min(${_?.width || `100vw`}, 1300px), 1180px) - 56px, 890px) - 20px) / 3, 1px)`,
                                  children: a(j, {
                                    className: `framer-1xuuzjp-container`,
                                    nodeId: `sPpcy4Lpz`,
                                    scopeId: `jL2GUUASB`,
                                    children: a(J, {
                                      EW5SdV5XM: `tel:+1-555-010-2345`,
                                      GS4n_oaZ6: `Phone`,
                                      height: `100%`,
                                      id: `sPpcy4Lpz`,
                                      layoutId: `sPpcy4Lpz`,
                                      prLvWmivG: `+1-555-010-2345`,
                                      style: { height: `100%`, width: `100%` },
                                      width: `100%`,
                                      XyooiHWrm: yt,
                                    }),
                                  }),
                                }),
                              }),
                              a(P, {
                                breakpoint: T,
                                overrides: {
                                  jdh3eR9ws: {
                                    width: `min(min(min(${_?.width || `100vw`}, 1300px), 780px) - 56px, 400px)`,
                                  },
                                  nvBf40gBC: {
                                    width: `min(min(min(${_?.width || `100vw`}, 1300px) - 24px, 600px) - 56px, 890px)`,
                                  },
                                },
                                children: a(w, {
                                  height: 180,
                                  width: `max((min(min(min(${_?.width || `100vw`}, 1300px), 1180px) - 56px, 890px) - 20px) / 3, 1px)`,
                                  children: a(j, {
                                    className: `framer-gyjq5q-container`,
                                    nodeId: `kONV4vL6X`,
                                    scopeId: `jL2GUUASB`,
                                    children: a(J, {
                                      EW5SdV5XM: `https://maps.app.goo.gl/oGCseRSfhvmrKRpD6`,
                                      GS4n_oaZ6: `Office`,
                                      height: `100%`,
                                      id: `kONV4vL6X`,
                                      layoutId: `kONV4vL6X`,
                                      prLvWmivG: `1016 LZ Amsterdam, Netherlands`,
                                      style: { height: `100%`, width: `100%` },
                                      width: `100%`,
                                      XyooiHWrm: mt,
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      s(Et, {
                        className: `framer-1cdhef9`,
                        "data-border": !0,
                        "data-framer-name": `Frequently Asked Questions`,
                        flowEffectEnabled: !0,
                        flowEffectTransition: Z,
                        isNestedFlowEffect: !0,
                        layout: `position`,
                        children: [
                          s(wt, {
                            className: `framer-1aiunxz`,
                            "data-framer-name": `Text & Email`,
                            flowEffectEnabled: !0,
                            flowEffectTransition: Z,
                            isNestedFlowEffect: !0,
                            layout: `position`,
                            children: [
                              s(d.div, {
                                className: `framer-suxpn1`,
                                "data-framer-name": `Text`,
                                layout: `position`,
                                children: [
                                  a(O, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`h3`, {
                                        className: `framer-styles-preset-or66bk`,
                                        "data-styles-preset": `xv81tUXg1`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `Frequently Asked Questions`,
                                      }),
                                    }),
                                    className: `framer-1xflvn4`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(O, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`p`, {
                                        className: `framer-styles-preset-1i4fe7d`,
                                        "data-styles-preset": `NbDFs5rgP`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                        },
                                        children: `Answers to immediate onboarding parameters, engineering timelines, and technical requirements before launching your initial infrastructure audit.`,
                                      }),
                                    }),
                                    className: `framer-1ynov1a`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              M() &&
                                a(w, {
                                  height: 25,
                                  children: a(j, {
                                    className: `framer-skdmct-container hidden-incvt1`,
                                    layout: `position`,
                                    nodeId: `m0VF_8R5c`,
                                    rendersWithMotion: !0,
                                    scopeId: `jL2GUUASB`,
                                    children: a(z, {
                                      AHhpNBfRr: `mailto:krutikmaru18@gmail.com`,
                                      height: `100%`,
                                      id: `m0VF_8R5c`,
                                      KPDdVnbJ9: `support@stackgrid.framer.website`,
                                      layoutId: `m0VF_8R5c`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                            ],
                          }),
                          a(P, {
                            breakpoint: T,
                            overrides: {
                              jdh3eR9ws: {
                                width: `max((min(min(${_?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                              },
                              nvBf40gBC: {
                                width: `calc(min(min(${_?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                              },
                            },
                            children: a(w, {
                              height: 499,
                              width: `max((min(min(${_?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                              children: a(j, {
                                className: `framer-1wln2mj-container`,
                                layout: `position`,
                                nodeId: `uq9kIQpjE`,
                                rendersWithMotion: !0,
                                scopeId: `jL2GUUASB`,
                                children: a(K, {
                                  height: `100%`,
                                  id: `uq9kIQpjE`,
                                  layoutId: `uq9kIQpjE`,
                                  style: { width: `100%` },
                                  variant: Q(`c5MM3vmch`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          le() &&
                            a(d.div, {
                              className: `framer-1togwk6 hidden-1chx7yg hidden-1ykrwx5`,
                              "data-framer-name": `Support Email`,
                              layout: `position`,
                              children: a(w, {
                                height: 25,
                                children: a(j, {
                                  className: `framer-a5z91p-container`,
                                  nodeId: `bcKthaYWg`,
                                  scopeId: `jL2GUUASB`,
                                  children: a(z, {
                                    AHhpNBfRr: `mailto:krutikmaru18@gmail.com`,
                                    height: `100%`,
                                    id: `bcKthaYWg`,
                                    KPDdVnbJ9: `support@stackgrid.framer.website`,
                                    layoutId: `bcKthaYWg`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                        ],
                      }),
                      s(d.section, {
                        className: `framer-1qrf7ms`,
                        "data-border": !0,
                        "data-framer-name": `Book A Call`,
                        id: I,
                        layout: `position`,
                        ref: L(I),
                        children: [
                          s(`div`, {
                            className: `framer-u3bbhb`,
                            "data-framer-name": `Content`,
                            children: [
                              s(`div`, {
                                className: `framer-1aezro6`,
                                "data-framer-name": `Text`,
                                children: [
                                  a(O, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`h3`, {
                                        className: `framer-styles-preset-or66bk`,
                                        "data-styles-preset": `xv81tUXg1`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `Scale Your Infrastructure.`,
                                      }),
                                    }),
                                    className: `framer-1fe38qt`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(O, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`p`, {
                                        className: `framer-styles-preset-1i4fe7d`,
                                        "data-styles-preset": `NbDFs5rgP`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                        },
                                        children: `Book a 30-minute technical assessment. We will audit your current manual workflows and tell you exactly which processes can be automated using AI.`,
                                      }),
                                    }),
                                    className: `framer-o317q8`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              s(`div`, {
                                className: `framer-1lkz1ck`,
                                "data-framer-name": `Micro Trust Elements`,
                                children: [
                                  a(P, {
                                    breakpoint: T,
                                    overrides: {
                                      jdh3eR9ws: {
                                        width: `max((min(min(${_?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                                      },
                                      nvBf40gBC: {
                                        width: `calc(min(min(${_?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                      },
                                    },
                                    children: a(w, {
                                      height: 55,
                                      width: `max((min(min(${_?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                                      children: a(j, {
                                        className: `framer-1osajdi-container`,
                                        nodeId: `M8sGF2Wg0`,
                                        scopeId: `jL2GUUASB`,
                                        children: a(R, {
                                          height: `100%`,
                                          id: `M8sGF2Wg0`,
                                          layoutId: `M8sGF2Wg0`,
                                          mQrslU2vj: `No aggressive sales pitches.`,
                                          qcvPqy1Lq: !0,
                                          style: { width: `100%` },
                                          variant: Q(`LxBtIKFqa`),
                                          vE6Ulm4Jw: we,
                                          VJBFLDEGc: `This is just some description, I am not sure what to put here really.`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(P, {
                                    breakpoint: T,
                                    overrides: {
                                      jdh3eR9ws: {
                                        width: `max((min(min(${_?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                                      },
                                      nvBf40gBC: {
                                        width: `calc(min(min(${_?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                      },
                                    },
                                    children: a(w, {
                                      height: 55,
                                      width: `max((min(min(${_?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                                      children: a(j, {
                                        className: `framer-138b97l-container`,
                                        nodeId: `l4ekgCUTR`,
                                        scopeId: `jL2GUUASB`,
                                        children: a(R, {
                                          height: `100%`,
                                          id: `l4ekgCUTR`,
                                          layoutId: `l4ekgCUTR`,
                                          mQrslU2vj: `Speak directly with a lead engineer.`,
                                          qcvPqy1Lq: !0,
                                          style: { width: `100%` },
                                          variant: Q(`LxBtIKFqa`),
                                          vE6Ulm4Jw: Be,
                                          VJBFLDEGc: `This is just some description, I am not sure what to put here really.`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(P, {
                                    breakpoint: T,
                                    overrides: {
                                      jdh3eR9ws: {
                                        width: `max((min(min(${_?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                                      },
                                      nvBf40gBC: {
                                        width: `calc(min(min(${_?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                      },
                                    },
                                    children: a(w, {
                                      height: 55,
                                      width: `max((min(min(${_?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                                      children: a(j, {
                                        className: `framer-1n1drvf-container`,
                                        nodeId: `gPaks_jf0`,
                                        scopeId: `jL2GUUASB`,
                                        children: a(R, {
                                          height: `100%`,
                                          id: `gPaks_jf0`,
                                          layoutId: `gPaks_jf0`,
                                          mQrslU2vj: `Receive a clear deployment roadmap.`,
                                          qcvPqy1Lq: !0,
                                          style: { width: `100%` },
                                          variant: Q(`LxBtIKFqa`),
                                          vE6Ulm4Jw: Se,
                                          VJBFLDEGc: `This is just some description, I am not sure what to put here really.`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a(P, {
                            breakpoint: T,
                            overrides: {
                              jdh3eR9ws: {
                                width: `max((min(min(${_?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                              },
                              nvBf40gBC: {
                                width: `calc(min(min(${_?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                              },
                            },
                            children: a(w, {
                              height: 575,
                              width: `max((min(min(${_?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                              children: a(j, {
                                className: `framer-6q20w4-container`,
                                nodeId: `Iow0MtRYx`,
                                scopeId: `jL2GUUASB`,
                                children: a(H, {
                                  height: `100%`,
                                  id: `Iow0MtRYx`,
                                  layoutId: `Iow0MtRYx`,
                                  style: { width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-Da2do.framer-11wszz4, .framer-Da2do .framer-11wszz4 { display: block; }`,
        `.framer-Da2do.framer-1chx7yg { --selection-background-color: rgba(0, 153, 255, 0.15); --selection-color: #0099FF; align-content: center; align-items: center; background-color: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, #f5f5f5); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-Da2do .framer-omowpm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1300px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Da2do .framer-3xxcgd { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; max-width: 1180px; overflow: visible; padding: 140px 28px 110px 28px; position: relative; width: 100%; }`,
        `.framer-Da2do .framer-q4tkj2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Da2do .framer-12b5z73 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Da2do .framer-ms6st6, .framer-Da2do .framer-176ktxt, .framer-Da2do .framer-1xflvn4, .framer-Da2do .framer-1fe38qt { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Da2do .framer-1di93xn, .framer-Da2do .framer-16ur2ke, .framer-Da2do .framer-1ynov1a { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 270px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Da2do .framer-klbdz8, .framer-Da2do .framer-u7vkrz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Da2do .framer-1k6vaia { --border-bottom-width: 1px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #dedede); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 500px; overflow: hidden; padding: 40px; position: relative; width: 1px; }`,
        `.framer-Da2do .framer-kiop3f, .framer-Da2do .framer-2h2y75 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Da2do .framer-xu3tqp, .framer-Da2do .framer-1h1u4q9, .framer-Da2do .framer-octj00, .framer-Da2do .framer-1q1f7ss, .framer-Da2do .framer-hhgtp { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Da2do .framer-tebyuj, .framer-Da2do .framer-1rwr5yw, .framer-Da2do .framer-xc38zy, .framer-Da2do .framer-of3wmh { --corner-shape-fallback: 0.796; --framer-input-background: var(--token-88de8be5-fdc6-43ad-98d5-dc2e7d77e5cc, #f7f7f7); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #dedede); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-bottom-right: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-left: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-right: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-corner-shape: superellipse(1.4); --framer-input-focused-border-color: var(--token-19bed0b5-c586-49d3-b40e-9867aec7f20a, #5b9cfc); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1.5px; --framer-input-focused-transition: all 0.15s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, #000000); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 12px; --framer-input-placeholder-color: var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, #787878); flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-Da2do .framer-9poh5, .framer-Da2do .framer-miuvzg, .framer-Da2do .framer-1vce17j { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Da2do .framer-v0o5fv { --corner-shape-fallback: 0.796; --framer-input-background: var(--token-88de8be5-fdc6-43ad-98d5-dc2e7d77e5cc, #f7f7f7); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #dedede); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-bottom-right: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-left: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-right: calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-corner-shape: superellipse(1.4); --framer-input-focused-border-color: var(--token-19bed0b5-c586-49d3-b40e-9867aec7f20a, #5b9cfc); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1.5px; --framer-input-focused-transition: all 0.15s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, #000000); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 12px; --framer-input-placeholder-color: var(--token-184dcff3-e572-4075-ade0-8c6d8e309c5e, #787878); --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 100px; position: relative; width: 100%; }`,
        `.framer-Da2do .framer-1b5dcw-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-Da2do .framer-14iogy1 { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 28px 50px 28px; position: relative; width: 100%; }`,
        `.framer-Da2do .framer-qp03h0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 28px 0px 28px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Da2do .framer-qhhjv5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 890px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Da2do .framer-d1rrrp-container, .framer-Da2do .framer-1xuuzjp-container, .framer-Da2do .framer-gyjq5q-container { flex: 1 0 0px; height: 180px; position: relative; width: 1px; }`,
        `.framer-Da2do .framer-1cdhef9 { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 28px 50px 28px; position: relative; width: 100%; }`,
        `.framer-Da2do .framer-1aiunxz { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Da2do .framer-suxpn1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Da2do .framer-skdmct-container, .framer-Da2do .framer-a5z91p-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-Da2do .framer-1wln2mj-container, .framer-Da2do .framer-6q20w4-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-Da2do .framer-1togwk6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 30px 0px 0px 0px; position: relative; width: min-content; }`,
        `.framer-Da2do .framer-1qrf7ms { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 28px 50px 28px; position: relative; width: 100%; }`,
        `.framer-Da2do .framer-u3bbhb { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Da2do .framer-1aezro6, .framer-Da2do .framer-1lkz1ck { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Da2do .framer-o317q8 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 380px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Da2do .framer-1osajdi-container, .framer-Da2do .framer-138b97l-container, .framer-Da2do .framer-1n1drvf-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...Me,
        ...me,
        ...ve,
        ...Ie,
        `.framer-Da2do[data-selection="true"] * ::selection, .framer-Da2do [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
        `.framer-Da2do[data-border="true"]::after, .framer-Da2do [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-Da2do.framer-1chx7yg { width: 810px; } .framer-Da2do .framer-3xxcgd, .framer-Da2do .framer-14iogy1, .framer-Da2do .framer-1cdhef9, .framer-Da2do .framer-1qrf7ms { max-width: 780px; } .framer-Da2do .framer-qhhjv5 { flex-direction: column; max-width: 400px; } .framer-Da2do .framer-d1rrrp-container, .framer-Da2do .framer-1xuuzjp-container, .framer-Da2do .framer-gyjq5q-container { flex: none; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-Da2do.framer-1chx7yg { width: 390px; } .framer-Da2do .framer-omowpm { padding: 0px 12px 0px 12px; } .framer-Da2do .framer-3xxcgd { max-width: 790px; padding: 140px 28px 100px 28px; } .framer-Da2do .framer-1k6vaia { padding: 20px; } .framer-Da2do .framer-u7vkrz { flex-direction: column; gap: 20px; } .framer-Da2do .framer-kiop3f, .framer-Da2do .framer-2h2y75, .framer-Da2do .framer-d1rrrp-container, .framer-Da2do .framer-1xuuzjp-container, .framer-Da2do .framer-gyjq5q-container, .framer-Da2do .framer-1wln2mj-container, .framer-Da2do .framer-u3bbhb, .framer-Da2do .framer-6q20w4-container { flex: none; width: 100%; } .framer-Da2do .framer-14iogy1 { max-width: 600px; } .framer-Da2do .framer-qp03h0 { padding: 0px; } .framer-Da2do .framer-qhhjv5 { flex-direction: column; } .framer-Da2do .framer-1cdhef9, .framer-Da2do .framer-1qrf7ms { flex-direction: column; max-width: 600px; } .framer-Da2do .framer-1aiunxz { align-self: unset; flex: none; gap: 0px; height: min-content; justify-content: center; width: 100%; }}`,
      ],
      `framer-Da2do`
    )),
    (zt = $),
    ($.displayName = `About`),
    ($.defaultProps = { height: 2659.5, width: 1200 }),
    b(
      $,
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
        ...xt,
        ...St,
        ...Ct,
        ...Tt,
        ...Dt,
        ...Ot,
        ..._(Ne),
        ..._(pe),
        ..._(ye),
        ..._(Le),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          I(V, {}, t),
          I(J, {}, t),
          I(z, {}, t),
          I(K, {}, t),
          I(R, {}, t),
          I(H, {}, t),
        ])
      ),
    }),
    (Bt = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerjL2GUUASB`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `1200`,
            framerComponentViewportWidth: `true`,
            framerAutoSizeImages: `true`,
            framerResponsiveScreen: `true`,
            framerScrollSections: `{"tZXUF60fM":{"pattern":":tZXUF60fM","name":"Book A Call"}}`,
            framerColorSyntax: `true`,
            framerIntrinsicHeight: `2659.5`,
            framerAcceptsLayoutTemplate: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"jdh3eR9ws":{"layout":["fixed","auto"]},"nvBf40gBC":{"layout":["fixed","auto"]}}}`,
            framerContractVersion: `1`,
            framerDisplayContentsDiv: `false`,
            framerImmutableVariables: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Bt as __FramerMetadata__, zt as default, jt as queryParamNames };
//# sourceMappingURL=PwR7bGGCEzpLZ6NdjcCtPJLEU3DSbawLfpWPAeCIWvA.B3uZcV0r.mjs.map
