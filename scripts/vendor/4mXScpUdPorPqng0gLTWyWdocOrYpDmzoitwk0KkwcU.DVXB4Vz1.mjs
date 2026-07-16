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
  w as l,
  y as u,
} from "./react.Cxf1BSD4.mjs";
import { C as d, a as f, r as p, t as m } from "./motion.BxtCy6Qp.mjs";
import {
  $ as h,
  Et as g,
  Ft as _,
  G as v,
  It as y,
  K as b,
  L as x,
  M as S,
  N as C,
  O as w,
  Ot as T,
  P as E,
  Tt as ee,
  _t as te,
  a as D,
  bt as ne,
  f as O,
  ft as k,
  g as A,
  gt as re,
  ht as ie,
  j,
  jt as ae,
  k as M,
  kt as N,
  m as oe,
  o as P,
  q as F,
  s as I,
  w as L,
  wt as se,
  yt as R,
  z,
} from "./framer.DwtIulwr.mjs";
import { i as ce, n as le, r as ue, t as de } from "./Bo2HZoBjr.ysB5lyAs.mjs";
import { n as fe, t as pe } from "./Kc_VruPtK.TNJgsVmM.mjs";
import { a as me, i as he, o as ge, r as _e } from "./shared-lib.CQP05-fP.mjs";
import { i as ve, n as ye, r as be, t as xe } from "./LBghXxOCz.B2PXqWgJ.mjs";
import { n as Se, t as B } from "./InteractiveASCII_Prod.CfcAmBEK.mjs";
import { i as Ce, n as we, r as Te, t as Ee } from "./r8upVcmwX.DF73NUKj.mjs";
import { a as V, i as De, n as Oe, o as ke, r as Ae, t as je } from "./uZRRtWbaF.LXjQgqUe.mjs";
import { i as Me, n as Ne, r as Pe, t as Fe } from "./gfNbT0EVI.CeOFpiEW.mjs";
import { i as Ie, n as Le, r as Re, t as ze } from "./xv81tUXg1.CGM_jtyj.mjs";
import { n as Be, r as Ve } from "./uWHdr3sGD.LCqC2ega.mjs";
import { n as He, t as Ue } from "./R4gLqdumy.CkEzaCyt.mjs";
import { i as We, n as Ge, r as Ke, t as qe } from "./Ln16zqbJH.CnR_5lMV.mjs";
import { n as Je, r as Ye } from "./TG4v3XDvb.DDDphC-n.mjs";
function Xe(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  H,
  lt,
  ut = e(() => {
    (c(),
      h(),
      m(),
      l(),
      Se(),
      (Ze = v(B)),
      (Qe = ae(j)),
      ($e = [`tEiFBdhbi`, `d5OcObZF8`]),
      (et = `framer-SDq3u`),
      (tt = { d5OcObZF8: `framer-v-17lavx8`, tEiFBdhbi: `framer-v-cc0t59` }),
      (nt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (rt = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (it = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: s, children: n });
      }),
      (at = { Primary: `tEiFBdhbi`, Secondary: `d5OcObZF8` }),
      (ot = d.create(r)),
      (st = ({ height: e, id: t, scrollSection: n, width: r, ...i }) => ({
        ...i,
        ruRSyINV8: n ?? i.ruRSyINV8,
        variant: at[i.variant] ?? i.variant ?? `tEiFBdhbi`,
      })),
      (ct = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (H = N(
        i(function (e, t) {
          let r = n(null),
            i = t ?? r,
            o = u(),
            { activeLocale: c, setLocale: l } = R();
          k();
          let { style: f, className: m, layoutId: h, variant: g, ruRSyINV8: _, ...v } = st(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: E,
              setGestureState: ee,
              setVariant: te,
              variants: ne,
            } = T({
              cycleOrder: $e,
              defaultVariant: `tEiFBdhbi`,
              ref: i,
              variant: g,
              variantClassNames: tt,
            }),
            O = ct(e, ne),
            A = x(et);
          return a(p, {
            id: h ?? o,
            children: a(ot, {
              animate: ne,
              initial: !1,
              children: a(it, {
                value: nt,
                children: s(d.div, {
                  ...v,
                  ...C,
                  className: x(A, `framer-cc0t59`, m, b),
                  "data-framer-name": `Primary`,
                  layoutDependency: O,
                  layoutId: `tEiFBdhbi`,
                  ref: i,
                  style: { ...f },
                  ...Xe({ d5OcObZF8: { "data-framer-name": `Secondary` } }, y, w),
                  children: [
                    a(D, {
                      children: a(Qe, {
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
                              x: -100,
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
                              y: 0,
                            },
                          },
                        ],
                        __framer__transformTrigger: `onScrollTarget`,
                        __framer__transformViewportThreshold: 1,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-17xm3yh-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: O,
                        layoutId: `pubnQBHKl-container`,
                        nodeId: `pubnQBHKl`,
                        rendersWithMotion: !0,
                        scopeId: `lYCaaFXQL`,
                        children: a(B, {
                          blur: 0,
                          brightness: 8,
                          characterSet: `hex`,
                          color: {
                            color: `var(--token-19bed0b5-c586-49d3-b40e-9867aec7f20a, rgb(91, 156, 252))`,
                            color1: `rgb(255, 0, 0)`,
                            color1Point: 0,
                            color2: `rgb(0, 255, 94)`,
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
                          glow: { blur: 10, opacity: 1 },
                          height: `100%`,
                          id: `pubnQBHKl`,
                          image: rt(
                            {
                              pixelHeight: 2664,
                              pixelWidth: 2360,
                              src: `../../assets/images/av7LDbMXNg9n5vWds5YYvLuwqU.png`,
                              srcSet: `../../assets/images/av7LDbMXNg9n5vWds5YYvLuwqU.png?scale-down-to=1024&width=2360&height=2664 907w,../../assets/images/av7LDbMXNg9n5vWds5YYvLuwqU.png?scale-down-to=2048&width=2360&height=2664 1814w,../../assets/images/av7LDbMXNg9n5vWds5YYvLuwqU.png 2360w`,
                            },
                            `Blocks Left`
                          ),
                          invertColors: !0,
                          layoutId: `pubnQBHKl`,
                          outputWidth: 103,
                          radius: `0px`,
                          sizing: `fit`,
                          staticEffect: { interval: 0.05, preview: !1 },
                          style: { width: `100%` },
                          whiteMode: `ignore`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    a(D, {
                      children: a(Qe, {
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
                              scale: 1.1,
                              skewX: 0,
                              skewY: 0,
                              x: 0,
                              y: 0,
                            },
                          },
                        ],
                        __framer__transformTrigger: `onScrollTarget`,
                        __framer__transformViewportThreshold: 1,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-xh7nt8-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: O,
                        layoutId: `mzobVHFP1-container`,
                        nodeId: `mzobVHFP1`,
                        rendersWithMotion: !0,
                        scopeId: `lYCaaFXQL`,
                        children: a(B, {
                          blur: 0,
                          brightness: 8,
                          characterSet: `hex`,
                          color: {
                            color: `var(--token-19bed0b5-c586-49d3-b40e-9867aec7f20a, rgb(91, 156, 252))`,
                            color1: `rgb(255, 0, 0)`,
                            color1Point: 0,
                            color2: `rgb(0, 255, 94)`,
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
                          glow: { blur: 10, opacity: 1 },
                          height: `100%`,
                          id: `mzobVHFP1`,
                          image: rt(
                            {
                              pixelHeight: 2664,
                              pixelWidth: 2364,
                              src: `../../assets/images/MC7sHrO1z7n94lPfxnWAjxRbI48.png`,
                              srcSet: `../../assets/images/MC7sHrO1z7n94lPfxnWAjxRbI48.png?scale-down-to=1024&width=2364&height=2664 908w,../../assets/images/MC7sHrO1z7n94lPfxnWAjxRbI48.png?scale-down-to=2048&width=2364&height=2664 1817w,../../assets/images/MC7sHrO1z7n94lPfxnWAjxRbI48.png 2364w`,
                            },
                            `Blocks Center`
                          ),
                          invertColors: !0,
                          layoutId: `mzobVHFP1`,
                          outputWidth: 103,
                          radius: `0px`,
                          sizing: `fit`,
                          staticEffect: { interval: 0.05, preview: !1 },
                          style: { height: `100%`, width: `100%` },
                          whiteMode: `ignore`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    a(D, {
                      children: a(Qe, {
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
                              x: 100,
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
                              y: 0,
                            },
                          },
                        ],
                        __framer__transformTrigger: `onScrollTarget`,
                        __framer__transformViewportThreshold: 1,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-1qlvr1f-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: O,
                        layoutId: `VLPyu3vvk-container`,
                        nodeId: `VLPyu3vvk`,
                        rendersWithMotion: !0,
                        scopeId: `lYCaaFXQL`,
                        children: a(B, {
                          blur: 0,
                          brightness: 8,
                          characterSet: `hex`,
                          color: {
                            color: `var(--token-19bed0b5-c586-49d3-b40e-9867aec7f20a, rgb(91, 156, 252))`,
                            color1: `rgb(255, 0, 0)`,
                            color1Point: 0,
                            color2: `rgb(0, 255, 94)`,
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
                          glow: { blur: 10, opacity: 1 },
                          height: `100%`,
                          id: `VLPyu3vvk`,
                          image: rt(
                            {
                              pixelHeight: 2664,
                              pixelWidth: 2364,
                              src: `../../assets/images/V7adlbqyIU2Yg9W6Sd4V8LdU.png`,
                              srcSet: `../../assets/images/V7adlbqyIU2Yg9W6Sd4V8LdU.png?scale-down-to=1024&width=2364&height=2664 908w,../../assets/images/V7adlbqyIU2Yg9W6Sd4V8LdU.png?scale-down-to=2048&width=2364&height=2664 1817w,../../assets/images/V7adlbqyIU2Yg9W6Sd4V8LdU.png 2364w`,
                            },
                            `Blocks Right`
                          ),
                          invertColors: !0,
                          layoutId: `VLPyu3vvk`,
                          outputWidth: 103,
                          radius: `0px`,
                          sizing: `fit`,
                          staticEffect: { interval: 0.05, preview: !1 },
                          style: { height: `100%`, width: `100%` },
                          whiteMode: `ignore`,
                          width: `100%`,
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
          `.framer-SDq3u.framer-1p77ots, .framer-SDq3u .framer-1p77ots { display: block; }`,
          `.framer-SDq3u.framer-cc0t59 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-SDq3u .framer-17xm3yh-container { flex: none; height: auto; position: relative; width: 605px; }`,
          `.framer-SDq3u .framer-xh7nt8-container, .framer-SDq3u .framer-1qlvr1f-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-SDq3u.framer-v-17lavx8 .framer-17xm3yh-container { width: 327px; }`,
        ],
        `framer-SDq3u`
      )),
      (lt = H),
      (H.displayName = `Blocks Square Animation`),
      (H.defaultProps = { height: 666, width: 605 }),
      E(H, {
        variant: {
          options: [`tEiFBdhbi`, `d5OcObZF8`],
          optionTitles: [`Primary`, `Secondary`],
          title: `Variant`,
          type: I.Enum,
        },
        ruRSyINV8: { title: `Scroll Section`, type: I.ScrollSectionRef },
      }),
      C(
        H,
        [
          {
            explicitInter: !0,
            fonts: [
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
          ...Ze,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  U,
  W,
  bt = e(() => {
    (c(),
      h(),
      m(),
      l(),
      ve(),
      ge(),
      (dt = `framer-hguIJ`),
      (ft = { GK_G6Vs_5: `framer-v-z3im2w` }),
      (pt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (mt = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? t + e
          : typeof e == `string`
            ? e
            : typeof t == `string`
              ? t
              : ``),
      (ht = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e + t
          : typeof e == `string`
            ? e
            : typeof t == `string`
              ? t
              : ``),
      (gt = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: s, children: n });
      }),
      (_t = d.create(r)),
      (vt = ({ height: e, id: t, tagline: n, title: r, width: i, ...a }) => ({
        ...a,
        fY0znXa8I: n ?? a.fY0znXa8I ?? `Operational Capital Saved for Clients`,
        jqXUg3wiy: r ?? a.jqXUg3wiy ?? `$140M+`,
      })),
      (yt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (U = N(
        i(function (e, t) {
          let i = n(null),
            o = t ?? i,
            c = u(),
            { activeLocale: l, setLocale: f } = R();
          k();
          let {
              style: m,
              className: h,
              layoutId: g,
              variant: _,
              jqXUg3wiy: v,
              fY0znXa8I: y,
              ...b
            } = vt(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: E,
              gestureVariant: ee,
              isLoading: te,
              setGestureState: D,
              setVariant: ne,
              variants: O,
            } = T({ defaultVariant: `GK_G6Vs_5`, ref: o, variant: _, variantClassNames: ft }),
            A = yt(e, O),
            re = x(dt, _e, xe),
            ie = ht(mt(v, `[ `), ` ]`);
          return a(p, {
            id: g ?? c,
            children: a(_t, {
              animate: O,
              initial: !1,
              children: a(gt, {
                value: pt,
                children: s(d.div, {
                  ...b,
                  ...E,
                  className: x(re, `framer-z3im2w`, h, C),
                  "data-border": !0,
                  "data-framer-name": `Base`,
                  layoutDependency: A,
                  layoutId: `GK_G6Vs_5`,
                  ref: o,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `dashed`,
                    "--border-top-width": `1px`,
                    ...m,
                  },
                  children: [
                    a(M, {
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
                          children: `Operational Capital Saved for Clients`,
                        }),
                      }),
                      className: `framer-17naw6x`,
                      fonts: [`Inter`],
                      layoutDependency: A,
                      layoutId: `aaZ6G_hL1`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: y,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    a(M, {
                      __fromCanvasComponent: !0,
                      children: a(r, {
                        children: a(d.h5, {
                          className: `framer-styles-preset-1217b5x`,
                          "data-styles-preset": `LBghXxOCz`,
                          dir: `auto`,
                          children: `[ $140M+ ]`,
                        }),
                      }),
                      className: `framer-1oiv6tz`,
                      fonts: [`Inter`],
                      layoutDependency: A,
                      layoutId: `EzTZIAVRT`,
                      style: {
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: ie,
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
          `.framer-hguIJ.framer-1c4bfs1, .framer-hguIJ .framer-1c4bfs1 { display: block; }`,
          `.framer-hguIJ.framer-z3im2w { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; height: 160px; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 28px; position: relative; width: 274px; }`,
          `.framer-hguIJ .framer-17naw6x, .framer-hguIJ .framer-1oiv6tz { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          ...he,
          ...ye,
          `.framer-hguIJ[data-border="true"]::after, .framer-hguIJ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-hguIJ`
      )),
      (W = U),
      (U.displayName = `Company Statistics Card`),
      (U.defaultProps = { height: 160, width: 273.5 }),
      E(U, {
        jqXUg3wiy: { defaultValue: `$140M+`, displayTextArea: !1, title: `Title`, type: I.String },
        onjqXUg3wiyChange: { changes: `jqXUg3wiy`, type: I.ChangeHandler },
        fY0znXa8I: {
          defaultValue: `Operational Capital Saved for Clients`,
          displayTextArea: !0,
          title: `Tagline`,
          type: I.String,
        },
        onfY0znXa8IChange: { changes: `fY0znXa8I`, type: I.ChangeHandler },
      }),
      C(
        U,
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
          ...b(me),
          ...b(be),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function xt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  G,
  kt,
  At,
  jt,
  Mt,
  Nt,
  K,
  Pt,
  Ft = e(() => {
    (c(),
      h(),
      m(),
      l(),
      Se(),
      ce(),
      ge(),
      Ce(),
      Ee(),
      (St = v(B)),
      (Ct = v(we)),
      (wt = { LMGyVJGaj: { hover: !0 }, yhakTAwEk: { hover: !0 } }),
      (Tt = [`yhakTAwEk`, `LMGyVJGaj`, `uzH6vVjQj`, `LLtx89EnO`]),
      (Et = `framer-FUdMQ`),
      (Dt = {
        LLtx89EnO: `framer-v-j122f8`,
        LMGyVJGaj: `framer-v-oxbt1e`,
        uzH6vVjQj: `framer-v-14fvl2p`,
        yhakTAwEk: `framer-v-1uivnp8`,
      }),
      (Ot = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (G = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (kt = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: s, children: n });
      }),
      (At = {
        Final: `LLtx89EnO`,
        Primary: `yhakTAwEk`,
        Secondary: `LMGyVJGaj`,
        Tertiary: `uzH6vVjQj`,
      }),
      (jt = d.create(r)),
      (Mt = ({
        border: e,
        height: t,
        id: n,
        image: r,
        linkedin: i,
        name1: a,
        position: o,
        width: s,
        ...c
      }) => ({
        ...c,
        RH4S6daPn: a ?? c.RH4S6daPn ?? `Shruhad Goswami`,
        uN4YoSUOg: o ?? c.uN4YoSUOg ?? `Founder & CEO`,
        UWKjGQOoK: i ?? c.UWKjGQOoK,
        variant: At[c.variant] ?? c.variant ?? `yhakTAwEk`,
        WGe5gFbtF: e ??
          c.WGe5gFbtF ?? {
            borderColor: `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222)) /* {"name":"Border 200"} */`,
            borderStyle: `dashed`,
            borderWidth: 1,
          },
        ytjyVENte: r ??
          c.ytjyVENte ?? {
            pixelHeight: 1080,
            pixelWidth: 1080,
            src: `https://framerusercontent.com/images/FRVQyKzEsIpD2SexXUrUPJzWFkc.jpg?width=1080&height=1080`,
            srcSet: `https://framerusercontent.com/images/FRVQyKzEsIpD2SexXUrUPJzWFkc.jpg?scale-down-to=512&width=1080&height=1080 512w,https://framerusercontent.com/images/FRVQyKzEsIpD2SexXUrUPJzWFkc.jpg?scale-down-to=1024&width=1080&height=1080 1024w,https://framerusercontent.com/images/FRVQyKzEsIpD2SexXUrUPJzWFkc.jpg?width=1080&height=1080 1080w`,
          },
      })),
      (Nt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = N(
        i(function (e, t) {
          let i = n(null),
            o = t ?? i,
            c = u(),
            { activeLocale: l, setLocale: f } = R(),
            m = k(),
            {
              style: h,
              className: g,
              layoutId: _,
              variant: v,
              ytjyVENte: y,
              RH4S6daPn: b,
              uN4YoSUOg: S,
              UWKjGQOoK: C,
              WGe5gFbtF: w,
              ...E
            } = Mt(e),
            {
              baseVariant: ee,
              classNames: te,
              clearLoadingGesture: ne,
              gestureHandlers: O,
              gestureVariant: A,
              isLoading: re,
              setGestureState: ie,
              setVariant: ae,
              variants: N,
            } = T({
              cycleOrder: Tt,
              defaultVariant: `yhakTAwEk`,
              enabledGestures: wt,
              ref: o,
              variant: v,
              variantClassNames: Dt,
            }),
            P = Nt(e, N),
            I = x(Et, de, _e);
          return a(p, {
            id: _ ?? c,
            children: a(jt, {
              animate: N,
              initial: !1,
              children: a(kt, {
                value: Ot,
                children: s(d.div, {
                  ...E,
                  ...O,
                  className: x(I, `framer-1uivnp8`, g, te),
                  "data-border": !0,
                  "data-framer-name": `Primary`,
                  layoutDependency: P,
                  layoutId: `yhakTAwEk`,
                  ref: o,
                  style: {
                    "--border-bottom-width": (w?.borderBottomWidth ?? w?.borderWidth) + `px`,
                    "--border-color": w?.borderColor,
                    "--border-left-width": (w?.borderLeftWidth ?? w?.borderWidth) + `px`,
                    "--border-right-width": (w?.borderRightWidth ?? w?.borderWidth) + `px`,
                    "--border-style": w?.borderStyle,
                    "--border-top-width": (w?.borderTopWidth ?? w?.borderWidth) + `px`,
                    ...h,
                  },
                  ...xt(
                    {
                      "LMGyVJGaj-hover": { "data-framer-name": void 0 },
                      "yhakTAwEk-hover": { "data-framer-name": void 0 },
                      LLtx89EnO: { "data-framer-name": `Final` },
                      LMGyVJGaj: { "data-framer-name": `Secondary` },
                      uzH6vVjQj: { "data-framer-name": `Tertiary` },
                    },
                    ee,
                    A
                  ),
                  children: [
                    s(d.div, {
                      className: `framer-5otypz`,
                      "data-framer-name": `Profile`,
                      layoutDependency: P,
                      layoutId: `pBLEOfe4L`,
                      children: [
                        a(D, {
                          children: a(j, {
                            className: `framer-wlsr9j-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: P,
                            layoutId: `oY1v5HFNq-container`,
                            nodeId: `oY1v5HFNq`,
                            rendersWithMotion: !0,
                            scopeId: `rWl8hhulA`,
                            children: a(B, {
                              blur: 0,
                              brightness: 52,
                              characterSet: `blocks`,
                              color: {
                                color: `rgb(128, 128, 128)`,
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
                              id: `oY1v5HFNq`,
                              image: G(y),
                              invertColors: !1,
                              layoutId: `oY1v5HFNq`,
                              outputWidth: 137,
                              radius: `0px`,
                              sizing: `fill`,
                              staticEffect: { interval: 0.1, preview: !1 },
                              style: { height: `100%`, width: `100%` },
                              whiteMode: `ignore`,
                              width: `100%`,
                            }),
                          }),
                        }),
                        a(oe, {
                          as: `figure`,
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: F(
                              (m?.y || 0) + 28 + (((m?.height || 418) - 56 - 530) / 2 + 0 + 0) + 0
                            ),
                            pixelHeight: 1080,
                            pixelWidth: 1080,
                            sizes: `calc(${m?.width || `100vw`} - 56px)`,
                            ...G(y),
                          },
                          className: `framer-19s0usg`,
                          draggable: `false`,
                          layoutDependency: P,
                          layoutId: `OJcjATiCG`,
                          style: { opacity: 0 },
                          variants: {
                            "LMGyVJGaj-hover": { opacity: 1 },
                            "yhakTAwEk-hover": { opacity: 1 },
                            LLtx89EnO: { opacity: 1 },
                          },
                          ...xt(
                            {
                              LLtx89EnO: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: F(
                                    (m?.y || 0) +
                                      20 +
                                      (((m?.height || 418) - 40 - 530) / 2 + 0 + 0) +
                                      0
                                  ),
                                  pixelHeight: 1080,
                                  pixelWidth: 1080,
                                  sizes: `calc(${m?.width || `100vw`} - 40px)`,
                                  ...G(y),
                                },
                              },
                              LMGyVJGaj: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: F(
                                    (m?.y || 0) +
                                      20 +
                                      (((m?.height || 418) - 40 - 530) / 2 + 0 + 0) +
                                      0
                                  ),
                                  pixelHeight: 1080,
                                  pixelWidth: 1080,
                                  sizes: `calc(${m?.width || `100vw`} - 40px)`,
                                  ...G(y),
                                },
                              },
                              uzH6vVjQj: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: F(
                                    (m?.y || 0) +
                                      20 +
                                      (((m?.height || 418) - 40 - 530) / 2 + 0 + 0) +
                                      0
                                  ),
                                  pixelHeight: 1080,
                                  pixelWidth: 1080,
                                  sizes: `calc(${m?.width || `100vw`} - 40px)`,
                                  ...G(y),
                                },
                              },
                            },
                            ee,
                            A
                          ),
                        }),
                      ],
                    }),
                    s(d.div, {
                      className: `framer-1rig8m9`,
                      "data-framer-name": `Body`,
                      layoutDependency: P,
                      layoutId: `rx8XT6VLy`,
                      children: [
                        a(M, {
                          __fromCanvasComponent: !0,
                          children: a(r, {
                            children: a(d.p, {
                              className: `framer-styles-preset-ccv9s9`,
                              "data-styles-preset": `Bo2HZoBjr`,
                              dir: `auto`,
                              style: { "--framer-text-alignment": `left` },
                              children: `Shruhad Goswami`,
                            }),
                          }),
                          className: `framer-1fvxb93`,
                          fonts: [`Inter`],
                          layoutDependency: P,
                          layoutId: `kw7ddrLjd`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: b,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        a(M, {
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
                              children: `Founder & CEO`,
                            }),
                          }),
                          className: `framer-8uk9h8`,
                          fonts: [`Inter`],
                          layoutDependency: P,
                          layoutId: `N594cdIeZ`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: S,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    a(D, {
                      height: 24,
                      y: (m?.y || 0) + 28 + (((m?.height || 418) - 56 - 530) / 2 + 458 + 48),
                      ...xt(
                        {
                          LLtx89EnO: {
                            y: (m?.y || 0) + 20 + (((m?.height || 418) - 40 - 530) / 2 + 458 + 48),
                          },
                          LMGyVJGaj: {
                            y: (m?.y || 0) + 20 + (((m?.height || 418) - 40 - 530) / 2 + 458 + 48),
                          },
                          uzH6vVjQj: {
                            y: (m?.y || 0) + 20 + (((m?.height || 418) - 40 - 530) / 2 + 458 + 48),
                          },
                        },
                        ee,
                        A
                      ),
                      children: a(j, {
                        className: `framer-1y0v1im-container`,
                        layoutDependency: P,
                        layoutId: `wBJA7W_L2-container`,
                        nodeId: `wBJA7W_L2`,
                        rendersWithMotion: !0,
                        scopeId: `rWl8hhulA`,
                        children: a(we, {
                          A0zSsv2ON: Te,
                          height: `100%`,
                          id: `wBJA7W_L2`,
                          layoutId: `wBJA7W_L2`,
                          width: `100%`,
                          YgfVXmht2: C,
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
          `.framer-FUdMQ.framer-apuajz, .framer-FUdMQ .framer-apuajz { display: block; }`,
          `.framer-FUdMQ.framer-1uivnp8 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 28px; position: relative; width: 300px; }`,
          `.framer-FUdMQ .framer-5otypz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-FUdMQ .framer-wlsr9j-container { aspect-ratio: 1 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 244px); position: relative; width: 1px; z-index: 1; }`,
          `.framer-FUdMQ .framer-19s0usg { flex: none; height: 100%; left: 0px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; top: 0px; width: 100%; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
          `.framer-FUdMQ .framer-1rig8m9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-FUdMQ .framer-1fvxb93 { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 2; display: -webkit-box; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-FUdMQ .framer-8uk9h8 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-FUdMQ .framer-1y0v1im-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-FUdMQ.framer-v-oxbt1e.framer-1uivnp8 { padding: 20px; }`,
          `.framer-FUdMQ.framer-v-oxbt1e .framer-wlsr9j-container, .framer-FUdMQ.framer-v-14fvl2p .framer-wlsr9j-container, .framer-FUdMQ.framer-v-j122f8 .framer-wlsr9j-container { height: var(--framer-aspect-ratio-supported, 260px); }`,
          `.framer-FUdMQ.framer-v-14fvl2p.framer-1uivnp8, .framer-FUdMQ.framer-v-j122f8.framer-1uivnp8 { cursor: unset; padding: 20px; }`,
          ...le,
          ...he,
          `.framer-FUdMQ[data-border="true"]::after, .framer-FUdMQ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-FUdMQ`
      )),
      (Pt = K),
      (K.displayName = `Team Member Card`),
      (K.defaultProps = { height: 418, width: 300 }),
      E(K, {
        variant: {
          options: [`yhakTAwEk`, `LMGyVJGaj`, `uzH6vVjQj`, `LLtx89EnO`],
          optionTitles: [`Primary`, `Secondary`, `Tertiary`, `Final`],
          title: `Variant`,
          type: I.Enum,
        },
        ytjyVENte: {
          __defaultAssetReference: `data:framer/asset-reference,FRVQyKzEsIpD2SexXUrUPJzWFkc.jpg?originalFilename=583173922_18089186201306874_5765644316865766997_n.jpg&width=1080&height=1080`,
          title: `Image`,
          type: I.ResponsiveImage,
        },
        RH4S6daPn: {
          defaultValue: `Shruhad Goswami`,
          displayTextArea: !0,
          title: `Name`,
          type: I.String,
        },
        onRH4S6daPnChange: { changes: `RH4S6daPn`, type: I.ChangeHandler },
        uN4YoSUOg: {
          defaultValue: `Founder & CEO`,
          displayTextArea: !0,
          title: `Position`,
          type: I.String,
        },
        onuN4YoSUOgChange: { changes: `uN4YoSUOg`, type: I.ChangeHandler },
        UWKjGQOoK: { title: `Linkedin`, type: I.Link },
        WGe5gFbtF: {
          defaultValue: {
            borderColor: `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222)) /* {"name":"Border 200"} */`,
            borderStyle: `dashed`,
            borderWidth: 1,
          },
          title: `Border`,
          type: I.Border,
        },
      }),
      C(
        K,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Fragment Mono`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Fragment Mono`,
                url: `https://fonts.gstatic.com/s/fragmentmono/v6/4iCr6K5wfMRRjxp0DA6-2CLnN4FNh4UI_1U.woff2`,
                weight: `400`,
              },
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
          ...St,
          ...Ct,
          ...b(ue),
          ...b(me),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (K.loader = { load: (e, t) => (t.locale, Promise.allSettled([z(we, {}, t)])) }));
  }),
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt = e(() => {
    (c(),
      h(),
      l(),
      (It = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 16.558 17.092 C 19.647 19.602 20.806 19.411 26.611 19.022 L 81.329 15.738 C 82.488 15.738 81.523 14.579 81.138 14.389 L 72.046 7.979 C 70.112 6.629 67.992 5.66 63.351 6.05 L 11.73 10.186 C 9.801 10.381 9.411 11.345 10.182 12.115 Z M 19.842 29.845 L 19.842 87.416 C 19.842 90.509 21.386 91.668 24.868 91.473 L 85.001 87.995 C 88.484 87.805 88.873 85.677 88.873 83.163 L 88.873 25.978 C 88.873 23.469 87.908 22.115 85.776 22.305 L 22.935 25.978 C 20.616 26.173 19.842 27.332 19.842 29.845 Z M 6.791 4.501 L 65.16 0.166 C 72.124 -0.414 73.855 0.551 76.766 2.675 L 92.815 14.074 C 94.744 15.424 95.324 15.813 95.324 17.357 L 95.324 88.948 C 95.324 93.2 93.779 95.713 88.364 96.098 L 24.363 99.966 C 20.305 100.16 18.368 99.581 16.239 96.873 L 3.283 80.062 C 0.965 76.969 0 74.654 0 71.946 L 0 11.73 C 0 8.252 1.544 5.354 6.77 4.501 Z M 77.805 32 C 78.19 33.739 77.805 35.478 76.065 35.677 L 73.167 36.256 L 64 78.755 C 61.483 80.109 59.434 80.883 57.5 80.883 C 54.403 80.883 54.319 79.964 52 77.07 L 35.1 39.57 L 29.083 39.151 C 28.693 37.412 29.662 34.903 32.366 34.708 L 46.676 33.743 L 57.5 63.882 L 66.401 37.217 L 61.371 36.637 C 60.986 34.509 62.53 32.965 64.464 32.774 Z" fill="var(--1ltz67d, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="100px" id="Ay58Y3ST8" transform="translate(2 0)" width="95.32387836151747px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Lt = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n ? a(d.div, { ...o, layoutId: r, ref: t }) : a(`div`, { ...o, ref: t });
      })),
      (Rt = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mhW1kRRt8:
          e ?? i.mhW1kRRt8 ?? `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (zt = N(
        i(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: o, mhW1kRRt8: s, ...c } = Rt(e);
          return a(Lt, {
            ...c,
            className: x(`framer-01q0c`, r),
            layoutId: i,
            ref: t,
            style: { "--1ltz67d": s, ...n },
          });
        }),
        [
          `.framer-01q0c { -webkit-mask: ${It}; aspect-ratio: 1; background-color: var(--1ltz67d); mask: ${It}; width: 100px; }`,
        ],
        `framer-01q0c`
      )),
      (zt.displayName = `Votion`),
      (Bt = zt),
      E(zt, {
        mhW1kRRt8: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: I.Color,
        },
      }));
  }),
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt = e(() => {
    (c(),
      h(),
      l(),
      (Ht = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 5.364 72.409 C 1.954 65.682 0 58.091 0 50 C 0 41.909 1.954 34.318 5.364 27.591 C 13.591 11.227 30.455 0 50 0 C 63.5 0 74.773 4.955 83.455 13.046 L 69.136 27.364 C 63.909 22.455 57.364 19.909 50 19.909 C 37 19.909 25.955 28.682 22 40.5 C 21 43.5 20.409 46.682 20.409 50 C 20.409 53.318 21 56.5 22 59.5 L 21.941 59.545 L 22 59.545 C 25.955 71.364 37 80.136 50 80.136 C 56.727 80.136 62.409 78.318 66.864 75.318 C 72.182 71.773 75.727 66.5 76.909 60.273 L 55 60.273 C 52.239 60.273 50 58.034 50 55.273 L 50 45.909 C 50 43.148 52.239 40.909 55 40.909 L 97.091 40.909 C 97.682 44.182 98 47.591 98 51.136 C 98 66.364 92.545 79.182 83.091 87.909 C 74.818 95.545 63.5 100 50 100 C 30.455 100 13.591 88.773 5.364 72.455 Z" fill="var(--1ltz67d, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="100px" id="mwGa3qYu_" transform="translate(1 0)" width="97.99999609374231px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Ut = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n ? a(d.div, { ...o, layoutId: r, ref: t }) : a(`div`, { ...o, ref: t });
      })),
      (Wt = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mhW1kRRt8:
          e ?? i.mhW1kRRt8 ?? `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (Gt = N(
        i(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: o, mhW1kRRt8: s, ...c } = Wt(e);
          return a(Ut, {
            ...c,
            className: x(`framer-iHtPj`, r),
            layoutId: i,
            ref: t,
            style: { "--1ltz67d": s, ...n },
          });
        }),
        [
          `.framer-iHtPj { -webkit-mask: ${Ht}; aspect-ratio: 1; background-color: var(--1ltz67d); mask: ${Ht}; width: 100px; }`,
        ],
        `framer-iHtPj`
      )),
      (Gt.displayName = `Search App`),
      (Kt = Gt),
      E(Gt, {
        mhW1kRRt8: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: I.Color,
        },
      }));
  }),
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t = e(() => {
    (c(),
      h(),
      l(),
      (Jt = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 6.478 40.92 C 4.218 34.109 5.001 26.654 8.628 20.461 C 14.083 10.966 25.047 6.082 35.754 8.378 C 41.786 1.667 50.939 -1.318 59.767 0.546 C 68.596 2.409 75.761 8.839 78.567 17.415 C 85.6 18.857 91.671 23.261 95.225 29.499 C 100.74 38.979 99.488 50.938 92.129 59.07 C 94.401 65.879 93.627 73.336 90.004 79.533 C 84.542 89.031 73.571 93.915 62.858 91.616 C 58.094 96.984 51.248 100.039 44.07 100 C 33.096 100.01 23.373 92.925 20.02 82.474 C 12.989 81.029 6.921 76.626 3.366 70.391 C -2.082 60.928 -0.826 49.035 6.478 40.92 Z M 44.07 93.458 C 48.45 93.465 52.692 91.931 56.054 89.124 L 55.466 88.787 L 35.554 77.295 C 34.547 76.703 33.927 75.625 33.92 74.458 L 33.92 46.386 L 25.504 51.253 C 25.419 51.296 25.36 51.376 25.345 51.47 L 25.345 74.733 C 25.368 85.065 33.738 93.435 44.07 93.458 Z M 84.321 76.266 C 86.519 72.473 87.308 68.026 86.55 63.708 L 85.958 64.062 L 66.029 75.558 C 65.026 76.146 63.782 76.146 62.779 75.558 L 38.433 61.52 L 38.433 71.237 C 38.436 71.339 38.487 71.435 38.57 71.495 L 58.737 83.124 C 67.698 88.283 79.142 85.215 84.321 76.266 Z M 89.571 32.899 C 87.359 29.08 83.866 26.168 79.713 24.678 L 79.713 48.332 C 79.727 49.496 79.108 50.575 78.096 51.149 L 53.866 65.128 L 62.283 69.995 C 62.376 70.044 62.486 70.044 62.579 69.995 L 82.704 58.387 C 91.651 53.205 94.721 41.763 89.571 32.799 Z M 20.416 48.961 L 44.72 34.849 L 36.304 29.999 C 36.212 29.951 36.103 29.951 36.012 29.999 L 15.883 41.632 C 9.6 45.256 5.975 52.182 6.578 59.409 C 7.181 66.637 11.903 72.867 18.699 75.399 L 18.699 51.745 C 18.735 50.584 19.379 49.528 20.395 48.966 Z M 12.041 36.365 L 12.628 36.011 L 32.52 24.42 C 33.53 23.827 34.781 23.827 35.791 24.42 L 60.116 38.457 L 60.116 28.736 C 60.127 28.637 60.082 28.539 60 28.482 L 39.875 16.869 C 33.577 13.245 25.753 13.585 19.794 17.742 C 13.835 21.899 10.814 29.125 12.041 36.286 Z M 64.708 53.595 L 73.125 48.745 C 73.211 48.693 73.269 48.606 73.283 48.507 L 73.283 25.311 C 73.269 18.048 69.062 11.447 62.484 8.367 C 55.906 5.287 48.141 6.283 42.554 10.924 L 43.145 11.257 L 63.054 22.749 C 64.062 23.339 64.684 24.418 64.692 25.586 Z M 60.137 43.741 L 49.296 37.491 L 38.433 43.741 L 38.433 56.237 L 49.254 62.487 L 60.116 56.237 Z" fill="var(--1ltz67d, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="100px" id="adyFIQMA4" transform="translate(1 0)" width="98.64237781933947px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Yt = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n ? a(d.div, { ...o, layoutId: r, ref: t }) : a(`div`, { ...o, ref: t });
      })),
      (Xt = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mhW1kRRt8:
          e ?? i.mhW1kRRt8 ?? `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (Zt = N(
        i(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: o, mhW1kRRt8: s, ...c } = Xt(e);
          return a(Yt, {
            ...c,
            className: x(`framer-Nt3pe`, r),
            layoutId: i,
            ref: t,
            style: { "--1ltz67d": s, ...n },
          });
        }),
        [
          `.framer-Nt3pe { -webkit-mask: ${Jt}; aspect-ratio: 1; background-color: var(--1ltz67d); mask: ${Jt}; width: 100px; }`,
        ],
        `framer-Nt3pe`
      )),
      (Zt.displayName = `Openly AI`),
      (Qt = Zt),
      E(Zt, {
        mhW1kRRt8: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: I.Color,
        },
      }));
  }),
  en,
  tn,
  nn,
  rn,
  an,
  on = e(() => {
    (c(),
      h(),
      l(),
      (en = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 48.169 38.125 C 39.119 34.767 34.186 32.183 34.186 28.087 C 34.186 24.625 37.031 22.65 42.106 22.65 C 51.386 22.65 60.919 26.225 67.481 29.446 C 74.044 32.667 76.394 9.046 71.19 6.554 C 65.986 4.062 55.34 0 40.623 0 C 30.215 0 21.556 2.725 15.369 7.8 C 8.936 13.112 5.59 20.8 5.59 30.075 C 5.59 46.904 15.869 54.075 32.573 60.154 C 43.344 63.987 46.927 66.712 46.927 70.917 C 46.927 75 43.427 77.354 37.119 77.354 C 29.306 77.354 16.431 73.517 7.994 68.567 C -0.444 63.617 -3.01 87.633 4.244 91.712 C 11.498 95.792 24.873 100 38.744 100 C 49.748 100 58.923 97.4 65.111 92.446 C 72.044 87.008 75.631 78.962 75.631 68.562 C 75.631 51.362 65.115 44.183 48.169 38.125 Z" fill="var(--1ltz67d, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="100px" id="MeNUr19yN" transform="translate(9.756 0)" width="75.63137922430234px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (tn = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n ? a(d.div, { ...o, layoutId: r, ref: t }) : a(`div`, { ...o, ref: t });
      })),
      (nn = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mhW1kRRt8:
          e ?? i.mhW1kRRt8 ?? `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (rn = N(
        i(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: o, mhW1kRRt8: s, ...c } = nn(e);
          return a(tn, {
            ...c,
            className: x(`framer-uqrBb`, r),
            layoutId: i,
            ref: t,
            style: { "--1ltz67d": s, ...n },
          });
        }),
        [
          `.framer-uqrBb { -webkit-mask: ${en}; aspect-ratio: 1; background-color: var(--1ltz67d); mask: ${en}; width: 100px; }`,
        ],
        `framer-uqrBb`
      )),
      (rn.displayName = `Stries`),
      (an = rn),
      E(rn, {
        mhW1kRRt8: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: I.Color,
        },
      }));
  }),
  sn,
  cn,
  ln,
  un,
  dn,
  fn = e(() => {
    (c(),
      h(),
      l(),
      (sn = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 103.033 85.135 C 105.693 89.802 102.324 95.602 96.952 95.602 L 12.048 95.602 C 6.676 95.602 3.307 89.802 5.967 85.135 L 48.419 10.668 C 51.104 5.957 57.896 5.957 60.581 10.668 Z" fill="var(--1ltz67d, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="95.60208333333313px" id="kb_cZ8wKd" transform="translate(-4 -2)" width="109px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (cn = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n ? a(d.div, { ...o, layoutId: r, ref: t }) : a(`div`, { ...o, ref: t });
      })),
      (ln = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mhW1kRRt8:
          e ?? i.mhW1kRRt8 ?? `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (un = N(
        i(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: o, mhW1kRRt8: s, ...c } = ln(e);
          return a(cn, {
            ...c,
            className: x(`framer-vgOAx`, r),
            layoutId: i,
            ref: t,
            style: { "--1ltz67d": s, ...n },
          });
        }),
        [
          `.framer-vgOAx { -webkit-mask: ${sn}; aspect-ratio: 1; background-color: var(--1ltz67d); mask: ${sn}; width: 100px; }`,
        ],
        `framer-vgOAx`
      )),
      (un.displayName = `Vercex`),
      (dn = un),
      E(un, {
        mhW1kRRt8: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: I.Color,
        },
      }));
  }),
  pn,
  mn,
  hn,
  gn,
  _n,
  vn = e(() => {
    (c(),
      h(),
      l(),
      (pn = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 39.767 41.605 L 3.186 0 L 14.035 0 L 45.614 34.211 L 68.988 0 L 98.246 0 L 61.404 52.632 L 100 98.246 L 89.58 98.246 L 56.046 60.096 L 29.258 98.246 L 0 98.246 M 83.333 7.895 L 74.561 7.895 L 14.035 90.351 L 23.684 90.351 Z" fill="var(--1ltz67d, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="98.2456140350889px" id="FyiRtsn2E" transform="translate(0 1)" width="100px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (mn = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n ? a(d.div, { ...o, layoutId: r, ref: t }) : a(`div`, { ...o, ref: t });
      })),
      (hn = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mhW1kRRt8:
          e ?? i.mhW1kRRt8 ?? `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (gn = N(
        i(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: o, mhW1kRRt8: s, ...c } = hn(e);
          return a(mn, {
            ...c,
            className: x(`framer-kClcp`, r),
            layoutId: i,
            ref: t,
            style: { "--1ltz67d": s, ...n },
          });
        }),
        [
          `.framer-kClcp { -webkit-mask: ${pn}; aspect-ratio: 1; background-color: var(--1ltz67d); mask: ${pn}; width: 100px; }`,
        ],
        `framer-kClcp`
      )),
      (gn.displayName = `XYZ`),
      (_n = gn),
      E(gn, {
        mhW1kRRt8: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: I.Color,
        },
      }));
  }),
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn = e(() => {
    (c(),
      h(),
      l(),
      (yn = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g d="M 0 0 L 100 0 L 100 100 L 0 100 Z M 47 79 L 53 79 L 53 21 L 47 21 Z" fill="transparent" height="100px" id="EFilwgMA9" width="100px"><path d="M 0 0 L 100 0 L 100 100 L 0 100 Z M 47 79 L 53 79 L 53 21 L 47 21 Z" fill="var(--1ltz67d, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="100px" id="yg8CfvRHH" width="100px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (bn = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n ? a(d.div, { ...o, layoutId: r, ref: t }) : a(`div`, { ...o, ref: t });
      })),
      (xn = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mhW1kRRt8:
          e ?? i.mhW1kRRt8 ?? `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (Sn = N(
        i(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: o, mhW1kRRt8: s, ...c } = xn(e);
          return a(bn, {
            ...c,
            className: x(`framer-FHGKr`, r),
            layoutId: i,
            ref: t,
            style: { "--1ltz67d": s, ...n },
          });
        }),
        [
          `.framer-FHGKr { -webkit-mask: ${yn}; aspect-ratio: 1; background-color: var(--1ltz67d); mask: ${yn}; width: 100px; }`,
        ],
        `framer-FHGKr`
      )),
      (Sn.displayName = `I Combinatior`),
      (Cn = Sn),
      E(Sn, {
        mhW1kRRt8: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: I.Color,
        },
      }));
  }),
  Tn,
  En,
  Dn,
  On,
  kn,
  An = e(() => {
    (c(),
      h(),
      l(),
      (Tn = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 87.086 16.377 C 87.611 16.961 87.584 17.854 87.025 18.405 L 18.405 87.024 C 17.85 87.579 16.958 87.614 16.378 87.086 C 6.316 77.931 0 64.73 0 50.055 C 0.001 22.41 22.41 0 50.055 0 C 64.73 0 77.931 6.315 87.086 16.377 Z M 95.663 29.401 C 95.914 29.961 95.791 30.618 95.354 31.049 L 31.049 95.355 C 30.615 95.789 29.959 95.918 29.401 95.663 C 27.92 94.992 26.473 94.248 25.064 93.436 C 24.23 92.953 24.102 91.815 24.784 91.135 L 91.133 24.782 C 91.813 24.102 92.951 24.229 93.434 25.063 C 94.247 26.471 94.991 27.918 95.662 29.399 Z M 99.565 47.815 C 99.867 47.515 100.024 47.099 99.997 46.674 C 99.865 44.684 99.616 42.726 99.257 40.806 C 99.042 39.656 97.636 39.256 96.808 40.084 L 40.084 96.809 C 39.256 97.636 39.655 99.043 40.806 99.258 C 42.746 99.62 44.705 99.867 46.673 99.998 C 47.098 100.025 47.514 99.867 47.814 99.565 L 99.564 47.814 Z M 96.084 61.783 C 97.117 60.749 98.785 61.64 98.406 63.051 C 93.795 80.25 80.25 93.795 63.05 98.406 C 61.64 98.786 60.749 97.117 61.782 96.084 Z" fill="var(--1ltz67d, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="100.00094075091957px" id="e1wArHz48" transform="rotate(-45 50 50)" width="99.99999957131902px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (En = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n ? a(d.div, { ...o, layoutId: r, ref: t }) : a(`div`, { ...o, ref: t });
      })),
      (Dn = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        mhW1kRRt8:
          e ?? i.mhW1kRRt8 ?? `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (On = N(
        i(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: o, mhW1kRRt8: s, ...c } = Dn(e);
          return a(En, {
            ...c,
            className: x(`framer-ato1m`, r),
            layoutId: i,
            ref: t,
            style: { "--1ltz67d": s, ...n },
          });
        }),
        [
          `.framer-ato1m { -webkit-mask: ${Tn}; aspect-ratio: 1; background-color: var(--1ltz67d); mask: ${Tn}; width: 100px; }`,
        ],
        `framer-ato1m`
      )),
      (On.displayName = `Radial`),
      (kn = On),
      E(On, {
        mhW1kRRt8: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: I.Color,
        },
      }));
  }),
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  q,
  J,
  Rn = e(() => {
    (c(),
      h(),
      m(),
      l(),
      $t(),
      (jn = `framer-a1eCr`),
      (Mn = { tG43csBE8: `framer-v-18evtqt` }),
      (Nn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Pn = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: s, children: n });
      }),
      (Fn = d.create(r)),
      (In = ({ height: e, icon: t, id: n, name1: r, width: i, ...a }) => ({
        ...a,
        mJj5I7mtx: r ?? a.mJj5I7mtx ?? `Chat Me`,
        w2bbQZnL4: t ?? a.w2bbQZnL4 ?? Qt,
      })),
      (Ln = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = N(
        i(function (e, t) {
          let i = n(null),
            o = t ?? i,
            c = u(),
            { activeLocale: l, setLocale: f } = R();
          k();
          let {
              style: m,
              className: h,
              layoutId: g,
              variant: _,
              w2bbQZnL4: v,
              mJj5I7mtx: y,
              ...b
            } = In(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: E,
              gestureVariant: ee,
              isLoading: te,
              setGestureState: D,
              setVariant: ne,
              variants: O,
            } = T({ defaultVariant: `tG43csBE8`, ref: o, variant: _, variantClassNames: Mn }),
            re = Ln(e, O),
            ie = x(jn);
          return a(p, {
            id: g ?? c,
            children: a(Fn, {
              animate: O,
              initial: !1,
              children: a(Pn, {
                value: Nn,
                children: s(d.div, {
                  ...b,
                  ...E,
                  className: x(ie, `framer-18evtqt`, h, C),
                  "data-framer-name": `Base`,
                  layoutDependency: re,
                  layoutId: `tG43csBE8`,
                  ref: o,
                  style: { ...m },
                  children: [
                    a(A, {
                      animated: !0,
                      className: `framer-r2xvmq`,
                      Component: v,
                      layoutDependency: re,
                      layoutId: `W4_LuRvOE`,
                      style: {
                        "--1ltz67d": `var(--token-ee24881a-d59f-4831-81c5-31b2a73efdd2, rgb(120, 120, 120))`,
                      },
                    }),
                    a(M, {
                      __fromCanvasComponent: !0,
                      children: a(r, {
                        children: a(d.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `R0Y7R29vZ2xlIFNhbnMgRmxleC12YXJpYWJsZS1yZWd1bGFyVkY9SW05d2Mzb2lJREU0TENBaWQyUjBhQ0lnTVRBd0xDQWlkMmRvZENJZ05USTFMQ0FpUjFKQlJDSWdNQ3dnSWxKUFRrUWlJREFzSUNKemJHNTBJaUF3`,
                            "--framer-font-family": `"Google Sans Flex Variable", "Google Sans Flex Variable Placeholder", sans-serif`,
                            "--framer-font-size": `14px`,
                            "--framer-font-variation-axes": `var(--extracted-2gg91v, "opsz" 18, "wdth" 100, "wght" 525, "GRAD" 0, "ROND" 0, "slnt" 0)`,
                            "--framer-letter-spacing": `0.01em`,
                            "--framer-line-height": `1.5em`,
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84)))`,
                          },
                          children: `Chat Me`,
                        }),
                      }),
                      className: `framer-ar8vtt`,
                      fonts: [`GF;Google Sans Flex-variable-regular`],
                      layoutDependency: re,
                      layoutId: `JnNlPwpdy`,
                      style: {
                        "--extracted-2gg91v": `"opsz" 18, "wdth" 100, "wght" 525, "GRAD" 0, "ROND" 0, "slnt" 0`,
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
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-a1eCr.framer-1wevceg, .framer-a1eCr .framer-1wevceg { display: block; }`,
          `.framer-a1eCr.framer-18evtqt { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-a1eCr .framer-r2xvmq { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); position: relative; width: 20px; }`,
          `.framer-a1eCr .framer-ar8vtt { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ],
        `framer-a1eCr`
      )),
      (J = q),
      (q.displayName = `Company Ticker Item`),
      (q.defaultProps = { height: 21, width: 82 }),
      E(q, {
        w2bbQZnL4: {
          defaultValue: {
            identifier: `local-module:vector/LTilDaoWC:default`,
            moduleId: `U6VwGthBSNjvfbv4wG8w`,
          },
          setModuleId: `gECQGfbSRWNaRWeVcH0g`,
          title: `Icon`,
          type: I.VectorSetItem,
        },
        mJj5I7mtx: { defaultValue: `Chat Me`, displayTextArea: !1, title: `Name`, type: I.String },
        onmJj5I7mtxChange: { changes: `mJj5I7mtx`, type: I.ChangeHandler },
      }),
      C(
        q,
        [
          {
            explicitInter: !0,
            fonts: [
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
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Y,
  Jn,
  Yn = e(() => {
    (c(),
      h(),
      m(),
      l(),
      Vt(),
      qt(),
      $t(),
      on(),
      fn(),
      vn(),
      wn(),
      An(),
      Rn(),
      (zn = v(J)),
      (Bn = _(d.div)),
      (Vn = `framer-HcaMc`),
      (Hn = { ZGm_oQ5ds: `framer-v-1jnljjh` }),
      (Un = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Wn = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: s, children: n });
      }),
      (Gn = d.create(r)),
      (Kn = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (qn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = N(
        i(function (e, t) {
          let r = n(null),
            i = t ?? r,
            o = u(),
            { activeLocale: c, setLocale: l } = R(),
            d = k(),
            { style: f, className: m, layoutId: h, variant: g, ..._ } = Kn(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: E,
              setGestureState: ee,
              setVariant: te,
              variants: ne,
            } = T({ defaultVariant: `ZGm_oQ5ds`, ref: i, variant: g, variantClassNames: Hn }),
            O = qn(e, ne),
            A = x(Vn);
          return a(p, {
            id: h ?? o,
            children: a(Gn, {
              animate: ne,
              initial: !1,
              children: a(Wn, {
                value: Un,
                children: s(Bn, {
                  ..._,
                  ...C,
                  className: x(A, `framer-1jnljjh`, m, y),
                  "data-framer-name": `Base`,
                  layoutDependency: O,
                  layoutId: `ZGm_oQ5ds`,
                  ref: i,
                  style: {
                    mask: `linear-gradient(270deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 9.932980599647266%, rgb(0, 0, 0) 90.48042328042328%, rgba(0, 0, 0, 0) 100%) add`,
                    WebkitMask: `linear-gradient(270deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 9.932980599647266%, rgb(0, 0, 0) 90.48042328042328%, rgba(0, 0, 0, 0) 100%) add`,
                    ...f,
                  },
                  tickerEffectAlign: `center`,
                  tickerEffectDirectionModifier: `default`,
                  tickerEffectDraggable: !0,
                  tickerEffectEnabled: !0,
                  tickerEffectGap: `50px`,
                  tickerEffectHoverModifier: 100,
                  tickerEffectOverflow: `clip`,
                  tickerEffectPosition: `absolute`,
                  tickerEffectStackDirection: `row`,
                  tickerEffectVelocity: 50,
                  children: [
                    a(S, {
                      children: a(D, {
                        height: 21,
                        y: (d?.y || 0) + (0 + ((d?.height || 21) - 0 - 21) / 2),
                        children: a(j, {
                          className: `framer-171czl7-container`,
                          layoutDependency: O,
                          layoutId: `oR0y9caE5-container`,
                          nodeId: `oR0y9caE5`,
                          rendersWithMotion: !0,
                          scopeId: `WtJYLBLUJ`,
                          children: a(J, {
                            height: `100%`,
                            id: `oR0y9caE5`,
                            layoutId: `oR0y9caE5`,
                            mJj5I7mtx: `Openly AI`,
                            w2bbQZnL4: Qt,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    a(S, {
                      children: a(D, {
                        height: 21,
                        y: (d?.y || 0) + (0 + ((d?.height || 21) - 0 - 21) / 2),
                        children: a(j, {
                          className: `framer-184gaqa-container`,
                          layoutDependency: O,
                          layoutId: `wpkAKwKAT-container`,
                          nodeId: `wpkAKwKAT`,
                          rendersWithMotion: !0,
                          scopeId: `WtJYLBLUJ`,
                          children: a(J, {
                            height: `100%`,
                            id: `wpkAKwKAT`,
                            layoutId: `wpkAKwKAT`,
                            mJj5I7mtx: `Stries`,
                            w2bbQZnL4: an,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    a(S, {
                      children: a(D, {
                        height: 21,
                        y: (d?.y || 0) + (0 + ((d?.height || 21) - 0 - 21) / 2),
                        children: a(j, {
                          className: `framer-pf6dc-container`,
                          layoutDependency: O,
                          layoutId: `dbYqAzo4c-container`,
                          nodeId: `dbYqAzo4c`,
                          rendersWithMotion: !0,
                          scopeId: `WtJYLBLUJ`,
                          children: a(J, {
                            height: `100%`,
                            id: `dbYqAzo4c`,
                            layoutId: `dbYqAzo4c`,
                            mJj5I7mtx: `I Combinator`,
                            w2bbQZnL4: Cn,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    a(S, {
                      children: a(D, {
                        height: 21,
                        y: (d?.y || 0) + (0 + ((d?.height || 21) - 0 - 21) / 2),
                        children: a(j, {
                          className: `framer-1of2nyf-container`,
                          layoutDependency: O,
                          layoutId: `s0lN0Cvw8-container`,
                          nodeId: `s0lN0Cvw8`,
                          rendersWithMotion: !0,
                          scopeId: `WtJYLBLUJ`,
                          children: a(J, {
                            height: `100%`,
                            id: `s0lN0Cvw8`,
                            layoutId: `s0lN0Cvw8`,
                            mJj5I7mtx: `Radial`,
                            w2bbQZnL4: kn,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    a(S, {
                      children: a(D, {
                        height: 21,
                        y: (d?.y || 0) + (0 + ((d?.height || 21) - 0 - 21) / 2),
                        children: a(j, {
                          className: `framer-1ujvt10-container`,
                          layoutDependency: O,
                          layoutId: `fd2T0TBca-container`,
                          nodeId: `fd2T0TBca`,
                          rendersWithMotion: !0,
                          scopeId: `WtJYLBLUJ`,
                          children: a(J, {
                            height: `100%`,
                            id: `fd2T0TBca`,
                            layoutId: `fd2T0TBca`,
                            mJj5I7mtx: `Vercex`,
                            w2bbQZnL4: dn,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    a(S, {
                      children: a(D, {
                        height: 21,
                        y: (d?.y || 0) + (0 + ((d?.height || 21) - 0 - 21) / 2),
                        children: a(j, {
                          className: `framer-1x4c5z0-container`,
                          layoutDependency: O,
                          layoutId: `Bv8ENd2ka-container`,
                          nodeId: `Bv8ENd2ka`,
                          rendersWithMotion: !0,
                          scopeId: `WtJYLBLUJ`,
                          children: a(J, {
                            height: `100%`,
                            id: `Bv8ENd2ka`,
                            layoutId: `Bv8ENd2ka`,
                            mJj5I7mtx: `Votion`,
                            w2bbQZnL4: Bt,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    a(S, {
                      children: a(D, {
                        height: 21,
                        y: (d?.y || 0) + (0 + ((d?.height || 21) - 0 - 21) / 2),
                        children: a(j, {
                          className: `framer-q3fhgw-container`,
                          layoutDependency: O,
                          layoutId: `V7guiUR4Q-container`,
                          nodeId: `V7guiUR4Q`,
                          rendersWithMotion: !0,
                          scopeId: `WtJYLBLUJ`,
                          children: a(J, {
                            height: `100%`,
                            id: `V7guiUR4Q`,
                            layoutId: `V7guiUR4Q`,
                            mJj5I7mtx: `XYZ`,
                            w2bbQZnL4: _n,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    a(S, {
                      children: a(D, {
                        height: 21,
                        y: (d?.y || 0) + (0 + ((d?.height || 21) - 0 - 21) / 2),
                        children: a(j, {
                          className: `framer-rqqkwe-container`,
                          layoutDependency: O,
                          layoutId: `iZWnQZ7_3-container`,
                          nodeId: `iZWnQZ7_3`,
                          rendersWithMotion: !0,
                          scopeId: `WtJYLBLUJ`,
                          children: a(J, {
                            height: `100%`,
                            id: `iZWnQZ7_3`,
                            layoutId: `iZWnQZ7_3`,
                            mJj5I7mtx: `Search App`,
                            w2bbQZnL4: Kt,
                            width: `100%`,
                          }),
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
          `.framer-HcaMc.framer-1ldwci7, .framer-HcaMc .framer-1ldwci7 { display: block; }`,
          `.framer-HcaMc.framer-1jnljjh { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: auto; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 900px; }`,
          `.framer-HcaMc .framer-171czl7-container, .framer-HcaMc .framer-184gaqa-container, .framer-HcaMc .framer-pf6dc-container, .framer-HcaMc .framer-1of2nyf-container, .framer-HcaMc .framer-1ujvt10-container, .framer-HcaMc .framer-1x4c5z0-container, .framer-HcaMc .framer-q3fhgw-container, .framer-HcaMc .framer-rqqkwe-container { flex: none; height: auto; position: relative; width: auto; }`,
        ],
        `framer-HcaMc`
      )),
      (Jn = Y),
      (Y.displayName = `Companies Ticker`),
      (Y.defaultProps = { height: 21, width: 900 }),
      C(Y, [{ explicitInter: !0, fonts: [] }, ...zn], { supportsExplicitInterCodegen: !0 }),
      (Y.loader = { load: (e, t) => (t.locale, Promise.allSettled([z(J, {}, t)])) }));
  }),
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  X,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  Z,
  Q,
  cr,
  lr,
  ur,
  $,
  dr,
  fr;
e(() => {
  (c(),
    h(),
    m(),
    l(),
    ke(),
    fe(),
    ut(),
    bt(),
    He(),
    Ft(),
    Yn(),
    Me(),
    We(),
    ge(),
    Ie(),
    De(),
    Be(),
    je(),
    Je(),
    (Xn = v(pe)),
    (Zn = v(lt)),
    (Qn = v(Jn)),
    ($n = v(V)),
    (er = v(W)),
    (tr = v(Pt)),
    (X = y(Pt)),
    (nr = v(Ue)),
    (rr = {
      AlI4mqGsD: `(min-width: 810px) and (max-width: 1199.98px)`,
      CaIsJf7VM: `(max-width: 809.98px)`,
      jW62C3M8S: `(min-width: 1200px)`,
    }),
    (ir = []),
    (ar = `framer-DN3Aj`),
    (or = {
      AlI4mqGsD: `framer-v-14j2ou3`,
      CaIsJf7VM: `framer-v-33rzvb`,
      jW62C3M8S: `framer-v-1o75qfl`,
    }),
    (sr = (e, t, n) => (e && t ? `position` : n)),
    (Z = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Q = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (cr = { Desktop: `jW62C3M8S`, Phone: `CaIsJf7VM`, Tablet: `AlI4mqGsD` }),
    (lr = ({ value: e }) =>
      te()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (ur = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: cr[r.variant] ?? r.variant ?? `jW62C3M8S`,
    })),
    ($ = N(
      i(function (e, i) {
        let c = n(null),
          l = i ?? c,
          m = u(),
          { activeLocale: h, setLocale: _ } = R(),
          v = k(),
          { style: y, className: b, layoutId: S, variant: C, ...T } = ur(e);
        ne(o(() => Ye({}, h), [h]));
        let [E, te] = re(C, rr, !1),
          A = x(ar, Fe, _e, qe, ze),
          j = t(O)?.isLayoutTemplate,
          ae = sr(j, !!t(f)?.transition?.layout);
        ee();
        let N = n(null),
          oe = se(`fjLeeXjVd`),
          F = se(`SxR0CVCd9`),
          I = g();
        return (
          ie({}),
          a(O.Provider, {
            value: {
              activeVariantId: E,
              humanReadableVariantMap: cr,
              primaryVariantId: `jW62C3M8S`,
              variantClassNames: or,
            },
            children: s(p, {
              id: S ?? m,
              children: [
                a(lr, {
                  value: `html body { background: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, rgb(245, 245, 245)); }`,
                }),
                a(d.div, {
                  ...T,
                  className: x(A, `framer-1o75qfl`, b),
                  "data-selection": !0,
                  ref: l,
                  style: { ...y },
                  children: s(d.main, {
                    className: `framer-1sysic6`,
                    "data-framer-name": `Main`,
                    layout: ae,
                    children: [
                      s(`section`, {
                        className: `framer-icvn7m`,
                        "data-border": !0,
                        "data-framer-name": `Hero`,
                        children: [
                          s(`div`, {
                            className: `framer-bviqs`,
                            "data-framer-name": `Header`,
                            children: [
                              s(`div`, {
                                className: `framer-1h4cvke`,
                                "data-framer-name": `Text`,
                                children: [
                                  a(L, {
                                    breakpoint: E,
                                    overrides: {
                                      CaIsJf7VM: {
                                        children: a(r, {
                                          children: a(`h1`, {
                                            className: `framer-styles-preset-1xgagrl`,
                                            "data-styles-preset": `gfNbT0EVI`,
                                            dir: `auto`,
                                            children: `We engineer systems, not slide decks.`,
                                          }),
                                        }),
                                      },
                                    },
                                    children: a(M, {
                                      __fromCanvasComponent: !0,
                                      children: a(r, {
                                        children: s(`h1`, {
                                          className: `framer-styles-preset-1xgagrl`,
                                          "data-styles-preset": `gfNbT0EVI`,
                                          dir: `auto`,
                                          children: [
                                            `We engineer systems, `,
                                            a(`br`, {}),
                                            `not slide decks.`,
                                          ],
                                        }),
                                      }),
                                      className: `framer-1p4uso5`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  a(M, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`p`, {
                                        className: `framer-styles-preset-1i4fe7d`,
                                        "data-styles-preset": `NbDFs5rgP`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                        },
                                        children: `Stackgrid was built on a single, uncompromising premise: traditional consulting is broken. We do not charge retainers to deliver theoretical roadmaps.`,
                                      }),
                                    }),
                                    className: `framer-vez7gl`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              a(`div`, {
                                className: `framer-1irm0ro`,
                                "data-framer-name": `Actions`,
                                children: a(w, {
                                  links: [
                                    {
                                      href: { hash: `:SxR0CVCd9`, webPageId: `TG4v3XDvb` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { hash: `:SxR0CVCd9`, webPageId: `TG4v3XDvb` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { hash: `:SxR0CVCd9`, webPageId: `TG4v3XDvb` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    a(D, {
                                      height: 31,
                                      y: (v?.y || 0) + 0 + 0 + 0 + 0 + 140 + 0 + 0 + 201.8 + 0,
                                      children: a(P, {
                                        className: `framer-1nz9tfx-container`,
                                        nodeId: `q172J1_dq`,
                                        scopeId: `TG4v3XDvb`,
                                        children: a(L, {
                                          breakpoint: E,
                                          overrides: {
                                            AlI4mqGsD: { JvqpmmvGw: e[1] },
                                            CaIsJf7VM: { JvqpmmvGw: e[2] },
                                          },
                                          children: a(pe, {
                                            height: `100%`,
                                            id: `q172J1_dq`,
                                            JvqpmmvGw: e[0],
                                            layoutId: `q172J1_dq`,
                                            vA9NXfDIM: `Book now`,
                                            variant: Z(`kWnN_xkUt`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                              }),
                            ],
                          }),
                          a(D, {
                            height: 666,
                            y: (v?.y || 0) + 0 + 0 + 0 + 0 + 140 + 232.8,
                            children: a(P, {
                              className: `framer-1kthemv-container`,
                              nodeId: `GFx7B0Idk`,
                              scopeId: `TG4v3XDvb`,
                              children: a(L, {
                                breakpoint: E,
                                overrides: { CaIsJf7VM: { variant: Z(`d5OcObZF8`) } },
                                children: a(lt, {
                                  height: `100%`,
                                  id: `GFx7B0Idk`,
                                  layoutId: `GFx7B0Idk`,
                                  ruRSyINV8: N,
                                  variant: Z(`tEiFBdhbi`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          a(`div`, {
                            className: `framer-yck10c`,
                            "data-framer-name": `Scroll Trigger`,
                            id: oe,
                            ref: N,
                          }),
                        ],
                      }),
                      s(`section`, {
                        className: `framer-1g8ghjc`,
                        "data-border": !0,
                        "data-framer-name": `Customers`,
                        children: [
                          a(M, {
                            __fromCanvasComponent: !0,
                            children: a(r, {
                              children: a(`p`, {
                                className: `framer-styles-preset-11ql9k5`,
                                "data-styles-preset": `Ln16zqbJH`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                },
                                children: `Trusted by people at`,
                              }),
                            }),
                            className: `framer-bdqkl6`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          a(L, {
                            breakpoint: E,
                            overrides: {
                              AlI4mqGsD: {
                                width: `calc(min(min(${v?.width || `100vw`}, 1300px), 780px) * 0.9)`,
                              },
                              CaIsJf7VM: {
                                width: `calc(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) * 0.9)`,
                                y: (v?.y || 0) + 0 + 0 + 0 + 1088.8 + 50 + 142,
                              },
                            },
                            children: a(D, {
                              height: 35,
                              width: `calc(min(min(${v?.width || `100vw`}, 1300px), 1180px) * 0.9)`,
                              y: (v?.y || 0) + 0 + 0 + 0 + 1148.8 + 50 + 142,
                              children: a(P, {
                                className: `framer-1nfj3kf-container`,
                                nodeId: `JLvj08jVI`,
                                scopeId: `TG4v3XDvb`,
                                children: a(Jn, {
                                  height: `100%`,
                                  id: `JLvj08jVI`,
                                  layoutId: `JLvj08jVI`,
                                  style: { height: `100%`, width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      s(`section`, {
                        className: `framer-14z4pcr`,
                        "data-border": !0,
                        "data-framer-name": `Process`,
                        children: [
                          s(`div`, {
                            className: `framer-tr1k9l`,
                            "data-framer-name": `Text`,
                            children: [
                              a(M, {
                                __fromCanvasComponent: !0,
                                children: a(r, {
                                  children: a(`h3`, {
                                    className: `framer-styles-preset-or66bk`,
                                    "data-styles-preset": `xv81tUXg1`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `left` },
                                    children: `The process`,
                                  }),
                                }),
                                className: `framer-yti6is`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(M, {
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
                                    children: `How we take your enterprise from fractured, manual data silos to production-grade automation with absolute structural precision.`,
                                  }),
                                }),
                                className: `framer-1eoqerh`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-e9u6z3`,
                            "data-framer-name": `Micro Trust Elements`,
                            children: [
                              a(L, {
                                breakpoint: E,
                                overrides: {
                                  AlI4mqGsD: {
                                    width: `max((min(min(${v?.width || `100vw`}, 1300px), 780px) - 86px) / 1.5, 1px)`,
                                  },
                                  CaIsJf7VM: {
                                    width: `calc(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                    y: (v?.y || 0) + 0 + 0 + 0 + 1365.8 + 50 + 199.8 + 0 + 0,
                                  },
                                },
                                children: a(D, {
                                  height: 55,
                                  width: `max((min(min(${v?.width || `100vw`}, 1300px), 1180px) - 86px) / 1.5, 1px)`,
                                  y: (v?.y || 0) + 0 + 0 + 0 + 1425.8 + 50 + 0 + 0,
                                  children: a(P, {
                                    className: `framer-lrx723-container`,
                                    nodeId: `jL1zCr5nq`,
                                    scopeId: `TG4v3XDvb`,
                                    children: a(V, {
                                      height: `100%`,
                                      id: `jL1zCr5nq`,
                                      layoutId: `jL1zCr5nq`,
                                      mQrslU2vj: `Architecture Audit`,
                                      qcvPqy1Lq: !0,
                                      style: { width: `100%` },
                                      variant: Z(`aHiweL8fe`),
                                      vE6Ulm4Jw: Ae,
                                      VJBFLDEGc: `We map your existing data silos, legacy APIs, and operational bottlenecks to define exact integration points with zero guesswork.`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              a(L, {
                                breakpoint: E,
                                overrides: {
                                  AlI4mqGsD: {
                                    width: `max((min(min(${v?.width || `100vw`}, 1300px), 780px) - 86px) / 1.5, 1px)`,
                                  },
                                  CaIsJf7VM: {
                                    width: `calc(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                    y: (v?.y || 0) + 0 + 0 + 0 + 1365.8 + 50 + 199.8 + 0 + 65,
                                  },
                                },
                                children: a(D, {
                                  height: 55,
                                  width: `max((min(min(${v?.width || `100vw`}, 1300px), 1180px) - 86px) / 1.5, 1px)`,
                                  y: (v?.y || 0) + 0 + 0 + 0 + 1425.8 + 50 + 0 + 65,
                                  children: a(P, {
                                    className: `framer-kth3u1-container`,
                                    nodeId: `NkTscGJKd`,
                                    scopeId: `TG4v3XDvb`,
                                    children: a(V, {
                                      height: `100%`,
                                      id: `NkTscGJKd`,
                                      layoutId: `NkTscGJKd`,
                                      mQrslU2vj: `Secure Prototyping`,
                                      qcvPqy1Lq: !0,
                                      style: { width: `100%` },
                                      variant: Z(`aHiweL8fe`),
                                      vE6Ulm4Jw: Ve,
                                      VJBFLDEGc: `We build the initial LLM agents and middleware in a ring-fenced sandbox, rigorously testing for hallucination, latency, and strict security compliance.`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              a(L, {
                                breakpoint: E,
                                overrides: {
                                  AlI4mqGsD: {
                                    width: `max((min(min(${v?.width || `100vw`}, 1300px), 780px) - 86px) / 1.5, 1px)`,
                                  },
                                  CaIsJf7VM: {
                                    width: `calc(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                    y: (v?.y || 0) + 0 + 0 + 0 + 1365.8 + 50 + 199.8 + 0 + 130,
                                  },
                                },
                                children: a(D, {
                                  height: 55,
                                  width: `max((min(min(${v?.width || `100vw`}, 1300px), 1180px) - 86px) / 1.5, 1px)`,
                                  y: (v?.y || 0) + 0 + 0 + 0 + 1425.8 + 50 + 0 + 130,
                                  children: a(P, {
                                    className: `framer-15xfzba-container`,
                                    nodeId: `yjBRxWO_B`,
                                    scopeId: `TG4v3XDvb`,
                                    children: a(V, {
                                      height: `100%`,
                                      id: `yjBRxWO_B`,
                                      layoutId: `yjBRxWO_B`,
                                      mQrslU2vj: `Production & Handoff`,
                                      qcvPqy1Lq: !0,
                                      style: { width: `100%` },
                                      variant: Z(`aHiweL8fe`),
                                      vE6Ulm4Jw: Oe,
                                      VJBFLDEGc: `Live deployment into your cloud infrastructure. We provide full documentation, employee training, and ongoing SLA maintenance to ensure zero downtime.`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      s(`section`, {
                        className: `framer-dvl0qz`,
                        "data-border": !0,
                        "data-framer-name": `Statistics`,
                        children: [
                          a(`div`, {
                            className: `framer-ehbwy`,
                            "data-framer-name": `Text`,
                            children: a(M, {
                              __fromCanvasComponent: !0,
                              children: a(r, {
                                children: a(`h3`, {
                                  className: `framer-styles-preset-or66bk`,
                                  "data-styles-preset": `xv81tUXg1`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `center` },
                                  children: `The Company in Numbers`,
                                }),
                              }),
                              className: `framer-d2wym`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          s(`div`, {
                            className: `framer-se333h`,
                            children: [
                              a(`div`, {
                                className: `framer-94zhed`,
                                "data-framer-name": `Sider`,
                                children: a(`div`, {
                                  className: `framer-8rpfn0`,
                                  "data-border": !0,
                                  "data-framer-name": `Handle`,
                                }),
                              }),
                              s(`div`, {
                                className: `framer-7oksu3`,
                                "data-framer-name": `Micro Trust Elements`,
                                children: [
                                  a(L, {
                                    breakpoint: E,
                                    overrides: {
                                      AlI4mqGsD: { height: 160 },
                                      CaIsJf7VM: {
                                        height: 160,
                                        width: `max(min(min(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px, 800px), 700px), 50px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          1850.6 +
                                          50 +
                                          82.8 +
                                          0 +
                                          30 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: a(D, {
                                      height: 190,
                                      y: (v?.y || 0) + 0 + 0 + 0 + 1710.8 + 50 + 82.8 + 0 + 0 + 0,
                                      children: a(P, {
                                        className: `framer-ze85oe-container`,
                                        nodeId: `M3LP3YXH2`,
                                        scopeId: `TG4v3XDvb`,
                                        children: a(L, {
                                          breakpoint: E,
                                          overrides: {
                                            AlI4mqGsD: { style: { width: `100%` } },
                                            CaIsJf7VM: { style: { width: `100%` } },
                                          },
                                          children: a(W, {
                                            fY0znXa8I: `Operational Capital Saved for Clients`,
                                            height: `100%`,
                                            id: `M3LP3YXH2`,
                                            jqXUg3wiy: `$140M+`,
                                            layoutId: `M3LP3YXH2`,
                                            style: { height: `100%`, width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(L, {
                                    breakpoint: E,
                                    overrides: {
                                      AlI4mqGsD: { height: 160 },
                                      CaIsJf7VM: {
                                        height: 160,
                                        width: `max(min(min(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px, 800px), 700px), 50px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          1850.6 +
                                          50 +
                                          82.8 +
                                          0 +
                                          30 +
                                          0 +
                                          170,
                                      },
                                    },
                                    children: a(D, {
                                      height: 190,
                                      y: (v?.y || 0) + 0 + 0 + 0 + 1710.8 + 50 + 82.8 + 0 + 0 + 0,
                                      children: a(P, {
                                        className: `framer-k9g6st-container`,
                                        nodeId: `WIGwvhc0N`,
                                        scopeId: `TG4v3XDvb`,
                                        children: a(L, {
                                          breakpoint: E,
                                          overrides: {
                                            AlI4mqGsD: { style: { width: `100%` } },
                                            CaIsJf7VM: { style: { width: `100%` } },
                                          },
                                          children: a(W, {
                                            fY0znXa8I: `Enterprise Pipelines Deployed`,
                                            height: `100%`,
                                            id: `WIGwvhc0N`,
                                            jqXUg3wiy: `45+`,
                                            layoutId: `WIGwvhc0N`,
                                            style: { height: `100%`, width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(L, {
                                    breakpoint: E,
                                    overrides: {
                                      AlI4mqGsD: {
                                        height: 160,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          1710.8 +
                                          50 +
                                          82.8 +
                                          0 +
                                          0 +
                                          170,
                                      },
                                      CaIsJf7VM: {
                                        height: 160,
                                        width: `max(min(min(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px, 800px), 700px), 50px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          1850.6 +
                                          50 +
                                          82.8 +
                                          0 +
                                          30 +
                                          0 +
                                          340,
                                      },
                                    },
                                    children: a(D, {
                                      height: 190,
                                      y: (v?.y || 0) + 0 + 0 + 0 + 1710.8 + 50 + 82.8 + 0 + 0 + 200,
                                      children: a(P, {
                                        className: `framer-1rk51ef-container`,
                                        nodeId: `NDjHsz8A5`,
                                        scopeId: `TG4v3XDvb`,
                                        children: a(L, {
                                          breakpoint: E,
                                          overrides: {
                                            AlI4mqGsD: { style: { width: `100%` } },
                                            CaIsJf7VM: { style: { width: `100%` } },
                                          },
                                          children: a(W, {
                                            fY0znXa8I: `Specialized Machine Learning Engineers`,
                                            height: `100%`,
                                            id: `NDjHsz8A5`,
                                            jqXUg3wiy: `12`,
                                            layoutId: `NDjHsz8A5`,
                                            style: { height: `100%`, width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(L, {
                                    breakpoint: E,
                                    overrides: {
                                      AlI4mqGsD: {
                                        height: 160,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          1710.8 +
                                          50 +
                                          82.8 +
                                          0 +
                                          0 +
                                          170,
                                      },
                                      CaIsJf7VM: {
                                        height: 160,
                                        width: `max(min(min(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px, 800px), 700px), 50px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          1850.6 +
                                          50 +
                                          82.8 +
                                          0 +
                                          30 +
                                          0 +
                                          510,
                                      },
                                    },
                                    children: a(D, {
                                      height: 190,
                                      y: (v?.y || 0) + 0 + 0 + 0 + 1710.8 + 50 + 82.8 + 0 + 0 + 200,
                                      children: a(P, {
                                        className: `framer-la0gv7-container`,
                                        nodeId: `Jt2jDzdjE`,
                                        scopeId: `TG4v3XDvb`,
                                        children: a(L, {
                                          breakpoint: E,
                                          overrides: {
                                            AlI4mqGsD: { style: { width: `100%` } },
                                            CaIsJf7VM: { style: { width: `100%` } },
                                          },
                                          children: a(W, {
                                            fY0znXa8I: `Public Data Leaks`,
                                            height: `100%`,
                                            id: `Jt2jDzdjE`,
                                            jqXUg3wiy: `0`,
                                            layoutId: `Jt2jDzdjE`,
                                            style: { height: `100%`, width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              a(`div`, {
                                className: `framer-nz1giq`,
                                "data-framer-name": `Sider`,
                                children: a(`div`, {
                                  className: `framer-1579siv`,
                                  "data-border": !0,
                                  "data-framer-name": `Handle`,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      s(`section`, {
                        className: `framer-1k26g66`,
                        "data-border": !0,
                        "data-framer-name": `Team`,
                        children: [
                          s(`div`, {
                            className: `framer-qi098i`,
                            "data-framer-name": `Main`,
                            children: [
                              s(`div`, {
                                className: `framer-1655tiz`,
                                "data-framer-name": `Text`,
                                children: [
                                  a(M, {
                                    __fromCanvasComponent: !0,
                                    children: a(r, {
                                      children: a(`h3`, {
                                        className: `framer-styles-preset-or66bk`,
                                        "data-styles-preset": `xv81tUXg1`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `Our team`,
                                      }),
                                    }),
                                    className: `framer-1fjtyje`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(M, {
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
                                        children: `The engineering cell behind your infrastructure. A dense team of systems architects, data specialists, and interaction developers focused entirely on scaling your operational leverage.`,
                                      }),
                                    }),
                                    className: `framer-1y2qtz7`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              s(`div`, {
                                className: `framer-1pix12r`,
                                "data-framer-name": `Members`,
                                children: [
                                  a(L, {
                                    breakpoint: E,
                                    overrides: {
                                      AlI4mqGsD: {
                                        width: `max(min(max((min(min(${v?.width || `100vw`}, 1300px), 780px) - 66px) / 1.5, 1px), 780px) / 2, 50px)`,
                                        y: (v?.y || 0) + 0 + 0 + 0 + 2223.6 + 50 + 0 + 0 + 0 + 0,
                                      },
                                      CaIsJf7VM: {
                                        width: `max(min(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px, 600px), 50px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          2763.4 +
                                          50 +
                                          0 +
                                          0 +
                                          199.8 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: a(D, {
                                      height: 418,
                                      width: `max(min(max((min(min(${v?.width || `100vw`}, 1300px), 1180px) - 66px) / 1.5, 1px), 1180px) / 2, 50px)`,
                                      y: (v?.y || 0) + 0 + 0 + 0 + 2283.6 + 50 + 0 + 0 + 0 + 0,
                                      children: a(P, {
                                        className: `framer-1xvyd0p-container`,
                                        nodeId: `oLOY_n64W`,
                                        rendersWithMotion: !0,
                                        scopeId: `TG4v3XDvb`,
                                        children: a(L, {
                                          breakpoint: E,
                                          overrides: {
                                            AlI4mqGsD: { variant: Z(`LMGyVJGaj`) },
                                            CaIsJf7VM: {
                                              __framer__animateOnce: !1,
                                              __framer__obscuredVariantId: `uzH6vVjQj`,
                                              __framer__threshold: 0.5,
                                              __framer__variantAppearEffectEnabled: !0,
                                              __framer__visibleVariantId: `LLtx89EnO`,
                                              variant: Z(`uzH6vVjQj`),
                                            },
                                          },
                                          children: a(X, {
                                            height: `100%`,
                                            id: `oLOY_n64W`,
                                            layoutId: `oLOY_n64W`,
                                            RH4S6daPn: `Stefan Holm`,
                                            style: { width: `100%` },
                                            uN4YoSUOg: `CEO & Co-Founder`,
                                            UWKjGQOoK: `https://www.linkedin.com/in/krutik-maru/`,
                                            variant: Z(`yhakTAwEk`),
                                            WGe5gFbtF: {
                                              borderColor: `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                                              borderStyle: `dashed`,
                                              borderWidth: 1,
                                            },
                                            width: `100%`,
                                            ytjyVENte: Q(
                                              {
                                                pixelHeight: 1150,
                                                pixelWidth: 736,
                                                src: `../../assets/images/cNKfggBZTabUmXNcpkkJh4aPFnU.png`,
                                                srcSet: `../../assets/images/cNKfggBZTabUmXNcpkkJh4aPFnU.png 655w,../../assets/images/cNKfggBZTabUmXNcpkkJh4aPFnU.png 736w`,
                                              },
                                              ``
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(L, {
                                    breakpoint: E,
                                    overrides: {
                                      AlI4mqGsD: {
                                        width: `max(min(max((min(min(${v?.width || `100vw`}, 1300px), 780px) - 66px) / 1.5, 1px), 780px) / 2, 50px)`,
                                        y: (v?.y || 0) + 0 + 0 + 0 + 2223.6 + 50 + 0 + 0 + 0 + 0,
                                      },
                                      CaIsJf7VM: {
                                        width: `max(min(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px, 600px), 50px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          2763.4 +
                                          50 +
                                          0 +
                                          0 +
                                          199.8 +
                                          0 +
                                          418,
                                      },
                                    },
                                    children: a(D, {
                                      height: 418,
                                      width: `max(min(max((min(min(${v?.width || `100vw`}, 1300px), 1180px) - 66px) / 1.5, 1px), 1180px) / 2, 50px)`,
                                      y: (v?.y || 0) + 0 + 0 + 0 + 2283.6 + 50 + 0 + 0 + 0 + 0,
                                      children: a(P, {
                                        className: `framer-kxkp9i-container`,
                                        nodeId: `ePiJ2Wo2r`,
                                        rendersWithMotion: !0,
                                        scopeId: `TG4v3XDvb`,
                                        children: a(L, {
                                          breakpoint: E,
                                          overrides: {
                                            AlI4mqGsD: { variant: Z(`LMGyVJGaj`) },
                                            CaIsJf7VM: {
                                              __framer__animateOnce: !1,
                                              __framer__obscuredVariantId: `uzH6vVjQj`,
                                              __framer__threshold: 0.5,
                                              __framer__variantAppearEffectEnabled: !0,
                                              __framer__visibleVariantId: `LLtx89EnO`,
                                              variant: Z(`uzH6vVjQj`),
                                              WGe5gFbtF: {
                                                borderBottomWidth: 1,
                                                borderColor: `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                                                borderLeftWidth: 1,
                                                borderRightWidth: 1,
                                                borderStyle: `dashed`,
                                                borderTopWidth: 0,
                                              },
                                            },
                                          },
                                          children: a(X, {
                                            height: `100%`,
                                            id: `ePiJ2Wo2r`,
                                            layoutId: `ePiJ2Wo2r`,
                                            RH4S6daPn: `Ron Bilevich`,
                                            style: { width: `100%` },
                                            uN4YoSUOg: `Lead Systems Architect`,
                                            UWKjGQOoK: `https://www.linkedin.com/in/krutik-maru/`,
                                            variant: Z(`yhakTAwEk`),
                                            WGe5gFbtF: {
                                              borderBottomWidth: 1,
                                              borderColor: `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                                              borderLeftWidth: 0,
                                              borderRightWidth: 1,
                                              borderStyle: `dashed`,
                                              borderTopWidth: 1,
                                            },
                                            width: `100%`,
                                            ytjyVENte: Q(
                                              {
                                                pixelHeight: 890,
                                                pixelWidth: 736,
                                                src: `../../assets/images/W79djdhXUhF5kreEGCzi5UnPu0c.png`,
                                                srcSet: `../../assets/images/W79djdhXUhF5kreEGCzi5UnPu0c.png 736w`,
                                              },
                                              ``
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(L, {
                                    breakpoint: E,
                                    overrides: {
                                      AlI4mqGsD: {
                                        width: `max(min(max((min(min(${v?.width || `100vw`}, 1300px), 780px) - 66px) / 1.5, 1px), 780px) / 2, 50px)`,
                                        y: (v?.y || 0) + 0 + 0 + 0 + 2223.6 + 50 + 0 + 0 + 0 + 418,
                                      },
                                      CaIsJf7VM: {
                                        width: `max(min(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px, 600px), 50px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          2763.4 +
                                          50 +
                                          0 +
                                          0 +
                                          199.8 +
                                          0 +
                                          836,
                                      },
                                    },
                                    children: a(D, {
                                      height: 418,
                                      width: `max(min(max((min(min(${v?.width || `100vw`}, 1300px), 1180px) - 66px) / 1.5, 1px), 1180px) / 2, 50px)`,
                                      y: (v?.y || 0) + 0 + 0 + 0 + 2283.6 + 50 + 0 + 0 + 0 + 418,
                                      children: a(P, {
                                        className: `framer-1b39q43-container`,
                                        nodeId: `SO8Yludoz`,
                                        rendersWithMotion: !0,
                                        scopeId: `TG4v3XDvb`,
                                        children: a(L, {
                                          breakpoint: E,
                                          overrides: {
                                            AlI4mqGsD: { variant: Z(`LMGyVJGaj`) },
                                            CaIsJf7VM: {
                                              __framer__animateOnce: !1,
                                              __framer__obscuredVariantId: `uzH6vVjQj`,
                                              __framer__threshold: 0.5,
                                              __framer__variantAppearEffectEnabled: !0,
                                              __framer__visibleVariantId: `LLtx89EnO`,
                                              variant: Z(`uzH6vVjQj`),
                                              WGe5gFbtF: {
                                                borderBottomWidth: 1,
                                                borderColor: `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                                                borderLeftWidth: 1,
                                                borderRightWidth: 1,
                                                borderStyle: `dashed`,
                                                borderTopWidth: 0,
                                              },
                                            },
                                          },
                                          children: a(X, {
                                            height: `100%`,
                                            id: `SO8Yludoz`,
                                            layoutId: `SO8Yludoz`,
                                            RH4S6daPn: `Marek Novak`,
                                            style: { width: `100%` },
                                            uN4YoSUOg: `Principal Data & AI Infrastructure Engineer`,
                                            UWKjGQOoK: `https://www.linkedin.com/in/krutik-maru/`,
                                            variant: Z(`yhakTAwEk`),
                                            WGe5gFbtF: {
                                              borderBottomWidth: 1,
                                              borderColor: `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                                              borderLeftWidth: 1,
                                              borderRightWidth: 1,
                                              borderStyle: `dashed`,
                                              borderTopWidth: 1,
                                            },
                                            width: `100%`,
                                            ytjyVENte: Q(
                                              {
                                                pixelHeight: 1104,
                                                pixelWidth: 736,
                                                src: `../../assets/images/Ci0D2qZhhoYjQyrSF6eziAE10.png`,
                                                srcSet: `../../assets/images/Ci0D2qZhhoYjQyrSF6eziAE10.png?scale-down-to=1024&width=736&height=1104 682w,../../assets/images/Ci0D2qZhhoYjQyrSF6eziAE10.png 736w`,
                                              },
                                              ``
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(L, {
                                    breakpoint: E,
                                    overrides: {
                                      AlI4mqGsD: {
                                        width: `max(min(max((min(min(${v?.width || `100vw`}, 1300px), 780px) - 66px) / 1.5, 1px), 780px) / 2, 50px)`,
                                        y: (v?.y || 0) + 0 + 0 + 0 + 2223.6 + 50 + 0 + 0 + 0 + 418,
                                      },
                                      CaIsJf7VM: {
                                        width: `max(min(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px, 600px), 50px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          2763.4 +
                                          50 +
                                          0 +
                                          0 +
                                          199.8 +
                                          0 +
                                          1254,
                                      },
                                    },
                                    children: a(D, {
                                      height: 418,
                                      width: `max(min(max((min(min(${v?.width || `100vw`}, 1300px), 1180px) - 66px) / 1.5, 1px), 1180px) / 2, 50px)`,
                                      y: (v?.y || 0) + 0 + 0 + 0 + 2283.6 + 50 + 0 + 0 + 0 + 418,
                                      children: a(P, {
                                        className: `framer-qfsb1w-container`,
                                        nodeId: `Ou5vmrjAc`,
                                        rendersWithMotion: !0,
                                        scopeId: `TG4v3XDvb`,
                                        children: a(L, {
                                          breakpoint: E,
                                          overrides: {
                                            AlI4mqGsD: { variant: Z(`LMGyVJGaj`) },
                                            CaIsJf7VM: {
                                              __framer__animateOnce: !1,
                                              __framer__obscuredVariantId: `uzH6vVjQj`,
                                              __framer__threshold: 0.5,
                                              __framer__variantAppearEffectEnabled: !0,
                                              __framer__visibleVariantId: `LLtx89EnO`,
                                              variant: Z(`uzH6vVjQj`),
                                              WGe5gFbtF: {
                                                borderBottomWidth: 1,
                                                borderColor: `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                                                borderLeftWidth: 1,
                                                borderRightWidth: 1,
                                                borderStyle: `dashed`,
                                                borderTopWidth: 0,
                                              },
                                            },
                                          },
                                          children: a(X, {
                                            height: `100%`,
                                            id: `Ou5vmrjAc`,
                                            layoutId: `Ou5vmrjAc`,
                                            RH4S6daPn: `Lukas Weber`,
                                            style: { width: `100%` },
                                            uN4YoSUOg: `Senior Full-Stack Interaction Developer`,
                                            UWKjGQOoK: `https://www.linkedin.com/in/krutik-maru/`,
                                            variant: Z(`yhakTAwEk`),
                                            WGe5gFbtF: {
                                              borderBottomWidth: 1,
                                              borderColor: `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                                              borderLeftWidth: 0,
                                              borderRightWidth: 1,
                                              borderStyle: `dashed`,
                                              borderTopWidth: 1,
                                            },
                                            width: `100%`,
                                            ytjyVENte: Q(
                                              {
                                                pixelHeight: 1104,
                                                pixelWidth: 736,
                                                src: `../../assets/images/J8vfAYD9siSiBKF1elDrRzGdM.png`,
                                                srcSet: `../../assets/images/J8vfAYD9siSiBKF1elDrRzGdM.png?scale-down-to=1024&width=736&height=1104 682w,../../assets/images/J8vfAYD9siSiBKF1elDrRzGdM.png 736w`,
                                              },
                                              ``
                                            ),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          s(`div`, {
                            className: `framer-17vcuo`,
                            "data-framer-name": `Members`,
                            children: [
                              a(L, {
                                breakpoint: E,
                                overrides: {
                                  AlI4mqGsD: {
                                    width: `max(min(min(min(${v?.width || `100vw`}, 1300px), 780px) - 56px, 780px) / 4, 50px)`,
                                    y: (v?.y || 0) + 0 + 0 + 0 + 2223.6 + 50 + 866 + 0 + 0,
                                  },
                                  CaIsJf7VM: {
                                    width: `max(min(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px, 600px), 50px)`,
                                    y: (v?.y || 0) + 0 + 0 + 0 + 2763.4 + 50 + 1871.8 + 0 + 0,
                                  },
                                },
                                children: a(D, {
                                  height: 418,
                                  width: `max(min(min(min(${v?.width || `100vw`}, 1300px), 1180px) - 56px, 1180px) / 4, 50px)`,
                                  y: (v?.y || 0) + 0 + 0 + 0 + 2283.6 + 50 + 866 + 0 + 0,
                                  children: a(P, {
                                    className: `framer-1e992zb-container`,
                                    nodeId: `es0lmSLUg`,
                                    rendersWithMotion: !0,
                                    scopeId: `TG4v3XDvb`,
                                    children: a(L, {
                                      breakpoint: E,
                                      overrides: {
                                        AlI4mqGsD: { variant: Z(`LMGyVJGaj`) },
                                        CaIsJf7VM: {
                                          __framer__animateOnce: !1,
                                          __framer__obscuredVariantId: `uzH6vVjQj`,
                                          __framer__threshold: 0.5,
                                          __framer__variantAppearEffectEnabled: !0,
                                          __framer__visibleVariantId: `LLtx89EnO`,
                                          variant: Z(`uzH6vVjQj`),
                                          WGe5gFbtF: {
                                            borderBottomWidth: 1,
                                            borderColor: `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                                            borderLeftWidth: 1,
                                            borderRightWidth: 1,
                                            borderStyle: `dashed`,
                                            borderTopWidth: 0,
                                          },
                                        },
                                      },
                                      children: a(X, {
                                        height: `100%`,
                                        id: `es0lmSLUg`,
                                        layoutId: `es0lmSLUg`,
                                        RH4S6daPn: `Anders Jensen`,
                                        style: { width: `100%` },
                                        uN4YoSUOg: `Cloud Infrastructure Specialist`,
                                        UWKjGQOoK: `https://www.linkedin.com/in/krutik-maru/`,
                                        variant: Z(`yhakTAwEk`),
                                        WGe5gFbtF: {
                                          borderColor: `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                                          borderStyle: `dashed`,
                                          borderWidth: 1,
                                        },
                                        width: `100%`,
                                        ytjyVENte: Q(
                                          {
                                            pixelHeight: 1150,
                                            pixelWidth: 736,
                                            src: `../../assets/images/cNKfggBZTabUmXNcpkkJh4aPFnU.png`,
                                            srcSet: `../../assets/images/cNKfggBZTabUmXNcpkkJh4aPFnU.png 655w,../../assets/images/cNKfggBZTabUmXNcpkkJh4aPFnU.png 736w`,
                                          },
                                          ``
                                        ),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              a(L, {
                                breakpoint: E,
                                overrides: {
                                  AlI4mqGsD: {
                                    width: `max(min(min(min(${v?.width || `100vw`}, 1300px), 780px) - 56px, 780px) / 4, 50px)`,
                                    y: (v?.y || 0) + 0 + 0 + 0 + 2223.6 + 50 + 866 + 0 + 0,
                                  },
                                  CaIsJf7VM: {
                                    width: `max(min(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px, 600px), 50px)`,
                                    y: (v?.y || 0) + 0 + 0 + 0 + 2763.4 + 50 + 1871.8 + 0 + 418,
                                  },
                                },
                                children: a(D, {
                                  height: 418,
                                  width: `max(min(min(min(${v?.width || `100vw`}, 1300px), 1180px) - 56px, 1180px) / 4, 50px)`,
                                  y: (v?.y || 0) + 0 + 0 + 0 + 2283.6 + 50 + 866 + 0 + 0,
                                  children: a(P, {
                                    className: `framer-1p58bzd-container`,
                                    nodeId: `AUl00mQ3H`,
                                    rendersWithMotion: !0,
                                    scopeId: `TG4v3XDvb`,
                                    children: a(L, {
                                      breakpoint: E,
                                      overrides: {
                                        AlI4mqGsD: { variant: Z(`LMGyVJGaj`) },
                                        CaIsJf7VM: {
                                          __framer__animateOnce: !1,
                                          __framer__obscuredVariantId: `uzH6vVjQj`,
                                          __framer__threshold: 0.5,
                                          __framer__variantAppearEffectEnabled: !0,
                                          __framer__visibleVariantId: `LLtx89EnO`,
                                          variant: Z(`uzH6vVjQj`),
                                          WGe5gFbtF: {
                                            borderBottomWidth: 1,
                                            borderColor: `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                                            borderLeftWidth: 1,
                                            borderRightWidth: 1,
                                            borderStyle: `dashed`,
                                            borderTopWidth: 0,
                                          },
                                        },
                                      },
                                      children: a(X, {
                                        height: `100%`,
                                        id: `AUl00mQ3H`,
                                        layoutId: `AUl00mQ3H`,
                                        RH4S6daPn: `Mateo Silva`,
                                        style: { width: `100%` },
                                        uN4YoSUOg: `Frontend Interaction Engineer`,
                                        UWKjGQOoK: `https://www.linkedin.com/in/krutik-maru/`,
                                        variant: Z(`yhakTAwEk`),
                                        WGe5gFbtF: {
                                          borderBottomWidth: 1,
                                          borderColor: `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                                          borderLeftWidth: 0,
                                          borderRightWidth: 1,
                                          borderStyle: `dashed`,
                                          borderTopWidth: 1,
                                        },
                                        width: `100%`,
                                        ytjyVENte: Q(
                                          {
                                            pixelHeight: 890,
                                            pixelWidth: 736,
                                            src: `../../assets/images/W79djdhXUhF5kreEGCzi5UnPu0c.png`,
                                            srcSet: `../../assets/images/W79djdhXUhF5kreEGCzi5UnPu0c.png 736w`,
                                          },
                                          ``
                                        ),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              a(L, {
                                breakpoint: E,
                                overrides: {
                                  AlI4mqGsD: {
                                    width: `max(min(min(min(${v?.width || `100vw`}, 1300px), 780px) - 56px, 780px) / 4, 50px)`,
                                    y: (v?.y || 0) + 0 + 0 + 0 + 2223.6 + 50 + 866 + 0 + 0,
                                  },
                                  CaIsJf7VM: {
                                    width: `max(min(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px, 600px), 50px)`,
                                    y: (v?.y || 0) + 0 + 0 + 0 + 2763.4 + 50 + 1871.8 + 0 + 836,
                                  },
                                },
                                children: a(D, {
                                  height: 418,
                                  width: `max(min(min(min(${v?.width || `100vw`}, 1300px), 1180px) - 56px, 1180px) / 4, 50px)`,
                                  y: (v?.y || 0) + 0 + 0 + 0 + 2283.6 + 50 + 866 + 0 + 0,
                                  children: a(P, {
                                    className: `framer-1jx6mjh-container`,
                                    nodeId: `it4YbUwsm`,
                                    rendersWithMotion: !0,
                                    scopeId: `TG4v3XDvb`,
                                    children: a(L, {
                                      breakpoint: E,
                                      overrides: {
                                        AlI4mqGsD: { variant: Z(`LMGyVJGaj`) },
                                        CaIsJf7VM: {
                                          __framer__animateOnce: !1,
                                          __framer__obscuredVariantId: `uzH6vVjQj`,
                                          __framer__threshold: 0.5,
                                          __framer__variantAppearEffectEnabled: !0,
                                          __framer__visibleVariantId: `LLtx89EnO`,
                                          variant: Z(`uzH6vVjQj`),
                                          WGe5gFbtF: {
                                            borderBottomWidth: 1,
                                            borderColor: `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                                            borderLeftWidth: 1,
                                            borderRightWidth: 1,
                                            borderStyle: `dashed`,
                                            borderTopWidth: 0,
                                          },
                                        },
                                      },
                                      children: a(X, {
                                        height: `100%`,
                                        id: `it4YbUwsm`,
                                        layoutId: `it4YbUwsm`,
                                        RH4S6daPn: `Julian Krause`,
                                        style: { width: `100%` },
                                        uN4YoSUOg: `Technical Project Manager`,
                                        UWKjGQOoK: `https://www.linkedin.com/in/krutik-maru/`,
                                        variant: Z(`yhakTAwEk`),
                                        WGe5gFbtF: {
                                          borderBottomWidth: 1,
                                          borderColor: `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                                          borderLeftWidth: 1,
                                          borderRightWidth: 1,
                                          borderStyle: `dashed`,
                                          borderTopWidth: 1,
                                        },
                                        width: `100%`,
                                        ytjyVENte: Q(
                                          {
                                            pixelHeight: 1104,
                                            pixelWidth: 736,
                                            src: `../../assets/images/Ci0D2qZhhoYjQyrSF6eziAE10.png`,
                                            srcSet: `../../assets/images/Ci0D2qZhhoYjQyrSF6eziAE10.png?scale-down-to=1024&width=736&height=1104 682w,../../assets/images/Ci0D2qZhhoYjQyrSF6eziAE10.png 736w`,
                                          },
                                          ``
                                        ),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              a(L, {
                                breakpoint: E,
                                overrides: {
                                  AlI4mqGsD: {
                                    width: `max(min(min(min(${v?.width || `100vw`}, 1300px), 780px) - 56px, 780px) / 4, 50px)`,
                                    y: (v?.y || 0) + 0 + 0 + 0 + 2223.6 + 50 + 866 + 0 + 0,
                                  },
                                  CaIsJf7VM: {
                                    width: `max(min(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px, 600px), 50px)`,
                                    y: (v?.y || 0) + 0 + 0 + 0 + 2763.4 + 50 + 1871.8 + 0 + 1254,
                                  },
                                },
                                children: a(D, {
                                  height: 418,
                                  width: `max(min(min(min(${v?.width || `100vw`}, 1300px), 1180px) - 56px, 1180px) / 4, 50px)`,
                                  y: (v?.y || 0) + 0 + 0 + 0 + 2283.6 + 50 + 866 + 0 + 0,
                                  children: a(P, {
                                    className: `framer-1ig7c90-container`,
                                    nodeId: `HGHyDQP60`,
                                    rendersWithMotion: !0,
                                    scopeId: `TG4v3XDvb`,
                                    children: a(L, {
                                      breakpoint: E,
                                      overrides: {
                                        AlI4mqGsD: { variant: Z(`LMGyVJGaj`) },
                                        CaIsJf7VM: {
                                          __framer__animateOnce: !1,
                                          __framer__obscuredVariantId: `uzH6vVjQj`,
                                          __framer__threshold: 0.5,
                                          __framer__variantAppearEffectEnabled: !0,
                                          __framer__visibleVariantId: `LLtx89EnO`,
                                          variant: Z(`uzH6vVjQj`),
                                          WGe5gFbtF: {
                                            borderBottomWidth: 1,
                                            borderColor: `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                                            borderLeftWidth: 1,
                                            borderRightWidth: 1,
                                            borderStyle: `dashed`,
                                            borderTopWidth: 0,
                                          },
                                        },
                                      },
                                      children: a(X, {
                                        height: `100%`,
                                        id: `HGHyDQP60`,
                                        layoutId: `HGHyDQP60`,
                                        RH4S6daPn: `Thomas Wright`,
                                        style: { width: `100%` },
                                        uN4YoSUOg: `Backend Systems Developer`,
                                        UWKjGQOoK: `https://www.linkedin.com/in/krutik-maru/`,
                                        variant: Z(`yhakTAwEk`),
                                        WGe5gFbtF: {
                                          borderBottomWidth: 1,
                                          borderColor: `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                                          borderLeftWidth: 0,
                                          borderRightWidth: 1,
                                          borderStyle: `dashed`,
                                          borderTopWidth: 1,
                                        },
                                        width: `100%`,
                                        ytjyVENte: Q(
                                          {
                                            pixelHeight: 1104,
                                            pixelWidth: 736,
                                            src: `../../assets/images/J8vfAYD9siSiBKF1elDrRzGdM.png`,
                                            srcSet: `../../assets/images/J8vfAYD9siSiBKF1elDrRzGdM.png?scale-down-to=1024&width=736&height=1104 682w,../../assets/images/J8vfAYD9siSiBKF1elDrRzGdM.png 736w`,
                                          },
                                          ``
                                        ),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      s(`section`, {
                        className: `framer-72lipz`,
                        "data-border": !0,
                        "data-framer-name": `Book A Call`,
                        id: F,
                        ref: I(F),
                        children: [
                          s(`div`, {
                            className: `framer-187x5mb`,
                            "data-framer-name": `Content`,
                            children: [
                              s(`div`, {
                                className: `framer-y3ip40`,
                                "data-framer-name": `Text`,
                                children: [
                                  a(M, {
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
                                    className: `framer-1o0ppv4`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(M, {
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
                                    className: `framer-165pwso`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              s(`div`, {
                                className: `framer-1gi2ife`,
                                "data-framer-name": `Micro Trust Elements`,
                                children: [
                                  a(L, {
                                    breakpoint: E,
                                    overrides: {
                                      AlI4mqGsD: {
                                        width: `max((min(min(${v?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          3607.6 +
                                          145.6 +
                                          0 +
                                          198.8 +
                                          0 +
                                          0,
                                      },
                                      CaIsJf7VM: {
                                        width: `calc(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          6407.2 +
                                          50 +
                                          0 +
                                          0 +
                                          198.8 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: a(D, {
                                      height: 55,
                                      width: `max((min(min(${v?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                                      y:
                                        (v?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        3667.6 +
                                        145.6 +
                                        0 +
                                        198.8 +
                                        0 +
                                        0,
                                      children: a(P, {
                                        className: `framer-ndhfyu-container`,
                                        nodeId: `oYZGpqA4v`,
                                        scopeId: `TG4v3XDvb`,
                                        children: a(V, {
                                          height: `100%`,
                                          id: `oYZGpqA4v`,
                                          layoutId: `oYZGpqA4v`,
                                          mQrslU2vj: `No aggressive sales pitches.`,
                                          qcvPqy1Lq: !0,
                                          style: { width: `100%` },
                                          variant: Z(`LxBtIKFqa`),
                                          vE6Ulm4Jw: Ae,
                                          VJBFLDEGc: `This is just some description, I am not sure what to put here really.`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(L, {
                                    breakpoint: E,
                                    overrides: {
                                      AlI4mqGsD: {
                                        width: `max((min(min(${v?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          3607.6 +
                                          145.6 +
                                          0 +
                                          198.8 +
                                          0 +
                                          65,
                                      },
                                      CaIsJf7VM: {
                                        width: `calc(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          6407.2 +
                                          50 +
                                          0 +
                                          0 +
                                          198.8 +
                                          0 +
                                          65,
                                      },
                                    },
                                    children: a(D, {
                                      height: 55,
                                      width: `max((min(min(${v?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                                      y:
                                        (v?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        3667.6 +
                                        145.6 +
                                        0 +
                                        198.8 +
                                        0 +
                                        65,
                                      children: a(P, {
                                        className: `framer-1uvgcay-container`,
                                        nodeId: `zU4BIqhoe`,
                                        scopeId: `TG4v3XDvb`,
                                        children: a(V, {
                                          height: `100%`,
                                          id: `zU4BIqhoe`,
                                          layoutId: `zU4BIqhoe`,
                                          mQrslU2vj: `Speak directly with a lead engineer.`,
                                          qcvPqy1Lq: !0,
                                          style: { width: `100%` },
                                          variant: Z(`LxBtIKFqa`),
                                          vE6Ulm4Jw: Ve,
                                          VJBFLDEGc: `This is just some description, I am not sure what to put here really.`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(L, {
                                    breakpoint: E,
                                    overrides: {
                                      AlI4mqGsD: {
                                        width: `max((min(min(${v?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          3607.6 +
                                          145.6 +
                                          0 +
                                          198.8 +
                                          0 +
                                          130,
                                      },
                                      CaIsJf7VM: {
                                        width: `calc(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          6407.2 +
                                          50 +
                                          0 +
                                          0 +
                                          198.8 +
                                          0 +
                                          130,
                                      },
                                    },
                                    children: a(D, {
                                      height: 55,
                                      width: `max((min(min(${v?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                                      y:
                                        (v?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        3667.6 +
                                        145.6 +
                                        0 +
                                        198.8 +
                                        0 +
                                        130,
                                      children: a(P, {
                                        className: `framer-sja5ed-container`,
                                        nodeId: `WPhB8C6I7`,
                                        scopeId: `TG4v3XDvb`,
                                        children: a(V, {
                                          height: `100%`,
                                          id: `WPhB8C6I7`,
                                          layoutId: `WPhB8C6I7`,
                                          mQrslU2vj: `Receive a clear deployment roadmap.`,
                                          qcvPqy1Lq: !0,
                                          style: { width: `100%` },
                                          variant: Z(`LxBtIKFqa`),
                                          vE6Ulm4Jw: Oe,
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
                          a(L, {
                            breakpoint: E,
                            overrides: {
                              AlI4mqGsD: {
                                width: `max((min(min(${v?.width || `100vw`}, 1300px), 780px) - 86px) / 2, 1px)`,
                                y: (v?.y || 0) + 0 + 0 + 0 + 3607.6 + 50,
                              },
                              CaIsJf7VM: {
                                width: `calc(min(min(${v?.width || `100vw`}, 1300px) - 24px, 600px) - 56px)`,
                                y: (v?.y || 0) + 0 + 0 + 0 + 6407.2 + 50 + 413.8,
                              },
                            },
                            children: a(D, {
                              height: 575,
                              width: `max((min(min(${v?.width || `100vw`}, 1300px), 1180px) - 86px) / 2, 1px)`,
                              y: (v?.y || 0) + 0 + 0 + 0 + 3667.6 + 50,
                              children: a(P, {
                                className: `framer-1i25rwa-container`,
                                nodeId: `lMc6A3rlS`,
                                scopeId: `TG4v3XDvb`,
                                children: a(Ue, {
                                  height: `100%`,
                                  id: `lMc6A3rlS`,
                                  layoutId: `lMc6A3rlS`,
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
        `.framer-DN3Aj.framer-59bg8z, .framer-DN3Aj .framer-59bg8z { display: block; }`,
        `.framer-DN3Aj.framer-1o75qfl { --selection-background-color: rgba(0, 153, 255, 0.15); --selection-color: #0099FF; align-content: center; align-items: center; background-color: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, #f5f5f5); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-DN3Aj .framer-1sysic6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1300px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-DN3Aj .framer-icvn7m { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; max-width: 1180px; overflow: var(--overflow-clip-fallback, clip); padding: 140px 28px 110px 28px; position: relative; width: 100%; }`,
        `.framer-DN3Aj .framer-bviqs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-DN3Aj .framer-1h4cvke { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-DN3Aj .framer-1p4uso5, .framer-DN3Aj .framer-yti6is, .framer-DN3Aj .framer-d2wym, .framer-DN3Aj .framer-1fjtyje, .framer-DN3Aj .framer-1o0ppv4 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-DN3Aj .framer-vez7gl, .framer-DN3Aj .framer-165pwso { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 380px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-DN3Aj .framer-1irm0ro { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-DN3Aj .framer-1nz9tfx-container, .framer-DN3Aj .framer-1kthemv-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-DN3Aj .framer-yck10c { flex: none; height: 600px; left: 0px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; right: 0px; top: calc(118.59063514140011% - 600px / 2); z-index: 1; }`,
        `.framer-DN3Aj .framer-1g8ghjc { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 0px 50px 0px; position: relative; width: 100%; }`,
        `.framer-DN3Aj .framer-bdqkl6, .framer-DN3Aj .framer-1eoqerh, .framer-DN3Aj .framer-1y2qtz7 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 270px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-DN3Aj .framer-1nfj3kf-container { flex: none; height: 35px; position: relative; width: 90%; }`,
        `.framer-DN3Aj .framer-14z4pcr { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 28px 50px 28px; position: relative; width: 100%; }`,
        `.framer-DN3Aj .framer-tr1k9l, .framer-DN3Aj .framer-1655tiz { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 28px 0px 28px; position: sticky; top: 100px; width: 1px; z-index: 1; }`,
        `.framer-DN3Aj .framer-e9u6z3 { align-content: flex-start; align-items: flex-start; display: flex; flex: 2 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-DN3Aj .framer-lrx723-container, .framer-DN3Aj .framer-kth3u1-container, .framer-DN3Aj .framer-15xfzba-container, .framer-DN3Aj .framer-ndhfyu-container, .framer-DN3Aj .framer-1uvgcay-container, .framer-DN3Aj .framer-sja5ed-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-DN3Aj .framer-dvl0qz { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 28px 50px 28px; position: relative; width: 100%; }`,
        `.framer-DN3Aj .framer-ehbwy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 28px 0px 28px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-DN3Aj .framer-se333h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 800px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-DN3Aj .framer-94zhed, .framer-DN3Aj .framer-nz1giq { -webkit-user-select: none; align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 0px 100px 0px; pointer-events: none; position: relative; user-select: none; width: min-content; }`,
        `.framer-DN3Aj .framer-8rpfn0 { --border-bottom-width: 1px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #dedede); --border-left-width: 1px; --border-right-width: 0px; --border-style: dashed; --border-top-width: 1px; flex: none; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 20px; }`,
        `.framer-DN3Aj .framer-7oksu3 { display: grid; flex: 1 0 0px; gap: 10px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; max-width: 700px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-DN3Aj .framer-ze85oe-container, .framer-DN3Aj .framer-k9g6st-container, .framer-DN3Aj .framer-1rk51ef-container, .framer-DN3Aj .framer-la0gv7-container { align-self: start; flex: none; height: 190px; justify-self: start; position: relative; width: 100%; }`,
        `.framer-DN3Aj .framer-1579siv { --border-bottom-width: 1px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #dedede); --border-left-width: 0px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; flex: none; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 20px; }`,
        `.framer-DN3Aj .framer-1k26g66 { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 28px 50px 28px; position: relative; width: 100%; }`,
        `.framer-DN3Aj .framer-qi098i { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-DN3Aj .framer-1pix12r { display: grid; flex: 2 0 0px; gap: 0px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-DN3Aj .framer-1xvyd0p-container, .framer-DN3Aj .framer-kxkp9i-container, .framer-DN3Aj .framer-1b39q43-container, .framer-DN3Aj .framer-qfsb1w-container, .framer-DN3Aj .framer-1e992zb-container, .framer-DN3Aj .framer-1p58bzd-container, .framer-DN3Aj .framer-1jx6mjh-container, .framer-DN3Aj .framer-1ig7c90-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-DN3Aj .framer-17vcuo { display: grid; flex: none; gap: 0px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-DN3Aj .framer-72lipz { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1180px; overflow: visible; padding: 50px 28px 50px 28px; position: relative; scroll-margin-top: 60px; width: 100%; }`,
        `.framer-DN3Aj .framer-187x5mb { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-DN3Aj .framer-y3ip40, .framer-DN3Aj .framer-1gi2ife { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-DN3Aj .framer-1i25rwa-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        ...Ne,
        ...he,
        ...Ge,
        ...Le,
        `.framer-DN3Aj[data-selection="true"] * ::selection, .framer-DN3Aj [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
        `.framer-DN3Aj[data-border="true"]::after, .framer-DN3Aj [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-DN3Aj.framer-1o75qfl { width: 810px; } .framer-DN3Aj .framer-icvn7m, .framer-DN3Aj .framer-1g8ghjc, .framer-DN3Aj .framer-14z4pcr, .framer-DN3Aj .framer-dvl0qz, .framer-DN3Aj .framer-1k26g66, .framer-DN3Aj .framer-1pix12r, .framer-DN3Aj .framer-17vcuo, .framer-DN3Aj .framer-72lipz { max-width: 780px; } .framer-DN3Aj .framer-ze85oe-container, .framer-DN3Aj .framer-k9g6st-container, .framer-DN3Aj .framer-1rk51ef-container, .framer-DN3Aj .framer-la0gv7-container { height: auto; }}`,
        `@media (max-width: 809.98px) { .framer-DN3Aj.framer-1o75qfl { width: 390px; } .framer-DN3Aj .framer-1sysic6 { padding: 0px 12px 0px 12px; } .framer-DN3Aj .framer-icvn7m { max-width: 600px; padding: 140px 28px 50px 28px; } .framer-DN3Aj .framer-yck10c { height: 350px; top: calc(107.31382978723407% - 350px / 2); } .framer-DN3Aj .framer-1g8ghjc, .framer-DN3Aj .framer-dvl0qz { max-width: 600px; } .framer-DN3Aj .framer-14z4pcr, .framer-DN3Aj .framer-72lipz { flex-direction: column; max-width: 600px; } .framer-DN3Aj .framer-tr1k9l, .framer-DN3Aj .framer-1655tiz { flex: none; padding: 0px; position: relative; top: unset; width: 100%; } .framer-DN3Aj .framer-e9u6z3, .framer-DN3Aj .framer-187x5mb, .framer-DN3Aj .framer-1i25rwa-container { flex: none; width: 100%; } .framer-DN3Aj .framer-ehbwy { padding: 0px; } .framer-DN3Aj .framer-se333h { flex-direction: column; } .framer-DN3Aj .framer-94zhed, .framer-DN3Aj .framer-nz1giq { align-self: unset; height: 20px; padding: 0px 50px 0px 50px; width: 100%; } .framer-DN3Aj .framer-8rpfn0 { --border-bottom-width: 0px; --border-right-width: 1px; flex: 1 0 0px; height: 20px; width: 1px; } .framer-DN3Aj .framer-7oksu3 { flex: none; grid-template-columns: repeat(1, minmax(50px, 1fr)); width: 100%; } .framer-DN3Aj .framer-ze85oe-container, .framer-DN3Aj .framer-k9g6st-container, .framer-DN3Aj .framer-1rk51ef-container, .framer-DN3Aj .framer-la0gv7-container { height: auto; } .framer-DN3Aj .framer-1579siv { --border-left-width: 1px; --border-top-width: 0px; flex: 1 0 0px; width: 1px; } .framer-DN3Aj .framer-1k26g66 { gap: 0px; max-width: 600px; } .framer-DN3Aj .framer-qi098i { flex-direction: column; gap: 30px; } .framer-DN3Aj .framer-1pix12r { flex: none; grid-template-columns: repeat(1, minmax(50px, 1fr)); max-width: 600px; width: 100%; } .framer-DN3Aj .framer-17vcuo { grid-template-columns: repeat(1, minmax(50px, 1fr)); max-width: 600px; }}`,
      ],
      `framer-DN3Aj`
    )),
    (dr = $),
    ($.displayName = `Home`),
    ($.defaultProps = { height: 5284.5, width: 1200 }),
    C(
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
        ...Xn,
        ...Zn,
        ...Qn,
        ...$n,
        ...er,
        ...tr,
        ...nr,
        ...b(Pe),
        ...b(me),
        ...b(Ke),
        ...b(Re),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          z(pe, {}, t),
          z(lt, {}, t),
          z(Jn, {}, t),
          z(V, {}, t),
          z(W, {}, t),
          z(Pt, {}, t),
          z(Ue, {}, t),
        ])
      ),
    }),
    (fr = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerTG4v3XDvb`,
          slots: [],
          annotations: {
            framerLayoutTemplateFlowEffect: `true`,
            framerResponsiveScreen: `true`,
            framerContractVersion: `1`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicHeight: `5284.5`,
            framerIntrinsicWidth: `1200`,
            framerDisplayContentsDiv: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"AlI4mqGsD":{"layout":["fixed","auto"]},"CaIsJf7VM":{"layout":["fixed","auto"]}}}`,
            framerImmutableVariables: `true`,
            framerAutoSizeImages: `true`,
            framerScrollSections: `{"fjLeeXjVd":{"pattern":":fjLeeXjVd","name":"hero-scroll-trigger"},"SxR0CVCd9":{"pattern":":SxR0CVCd9","name":"Book A Call"}}`,
            framerComponentViewportWidth: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { fr as __FramerMetadata__, dr as default, ir as queryParamNames };
//# sourceMappingURL=4mXScpUdPorPqng0gLTWyWdocOrYpDmzoitwk0KkwcU.DVXB4Vz1.mjs.map
