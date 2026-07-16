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
  G as g,
  K as _,
  L as v,
  N as y,
  Ot as b,
  P as x,
  ft as S,
  k as C,
  kt as w,
  s as T,
  yt as E,
} from "./framer.DwtIulwr.mjs";
import { i as D, n as O, r as k, t as A } from "./dXsx8iVCg.B24QAjan.mjs";
import { i as j, n as M, r as N, t as P } from "./rhzuGFsMS.mTPFT97O.mjs";
import { n as F, t as I } from "./qC66tMLTE.D34mii4K.mjs";
function L(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z = e(() => {
    (c(),
      h(),
      m(),
      l(),
      D(),
      j(),
      I(),
      (R = g(F)),
      (z = { LBX2RY6YR: { hover: !0 }, wjdnMwXds: { hover: !0 } }),
      (B = [`wjdnMwXds`, `LBX2RY6YR`]),
      (V = `framer-huSOA`),
      (H = { LBX2RY6YR: `framer-v-1tzflot`, wjdnMwXds: `framer-v-1lec0pg` }),
      (U = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (W = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: s, children: n });
      }),
      (G = { Primary: `wjdnMwXds`, Secondary: `LBX2RY6YR` }),
      (K = d.create(r)),
      (q = ({ height: e, id: t, showPlusIcons: n, title: r, width: i, ...a }) => ({
        ...a,
        KPDdVnbJ9: r ?? a.KPDdVnbJ9 ?? `Tag Title`,
        nHzYRdzoI: n ?? a.nHzYRdzoI ?? !0,
        variant: G[a.variant] ?? a.variant ?? `wjdnMwXds`,
      })),
      (J = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = w(
        i(function (e, t) {
          let i = n(null),
            o = t ?? i,
            c = u(),
            { activeLocale: l, setLocale: f } = E();
          S();
          let {
              style: m,
              className: h,
              layoutId: g,
              variant: _,
              KPDdVnbJ9: y,
              nHzYRdzoI: x,
              ...w
            } = q(e),
            {
              baseVariant: T,
              classNames: D,
              clearLoadingGesture: O,
              gestureHandlers: k,
              gestureVariant: j,
              isLoading: M,
              setGestureState: N,
              setVariant: I,
              variants: R,
            } = b({
              cycleOrder: B,
              defaultVariant: `wjdnMwXds`,
              enabledGestures: z,
              ref: o,
              variant: _,
              variantClassNames: H,
            }),
            G = J(e, R),
            Y = v(V, A, P);
          return a(p, {
            id: g ?? c,
            children: a(K, {
              animate: R,
              initial: !1,
              children: a(W, {
                value: U,
                children: s(d.div, {
                  ...w,
                  ...k,
                  className: v(Y, `framer-1lec0pg`, h, D),
                  "data-framer-name": `Primary`,
                  layoutDependency: G,
                  layoutId: `wjdnMwXds`,
                  ref: o,
                  style: {
                    backgroundColor: `var(--token-285ef153-d569-42f5-b925-84d6d4b8fa63, rgb(0, 0, 0))`,
                    ...m,
                  },
                  variants: {
                    LBX2RY6YR: {
                      backgroundColor: `var(--token-487debdd-9588-4cf5-b389-1f7017cbcedd, rgb(232, 232, 232))`,
                    },
                  },
                  ...L(
                    {
                      "LBX2RY6YR-hover": { "data-framer-name": void 0 },
                      "wjdnMwXds-hover": { "data-framer-name": void 0 },
                      LBX2RY6YR: { "data-framer-name": `Secondary` },
                    },
                    T,
                    j
                  ),
                  children: [
                    a(C, {
                      __fromCanvasComponent: !0,
                      children: a(r, {
                        children: a(d.p, {
                          className: `framer-styles-preset-kmsqt2`,
                          "data-styles-preset": `dXsx8iVCg`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-358f9ea8-35a8-474d-aea3-3d32a4090f35, rgb(255, 255, 255)))`,
                          },
                          children: `Tag Title`,
                        }),
                      }),
                      className: `framer-ur553k`,
                      fonts: [`Inter`],
                      layoutDependency: G,
                      layoutId: `PP4H4s0ja`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-358f9ea8-35a8-474d-aea3-3d32a4090f35, rgb(255, 255, 255))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: y,
                      variants: {
                        LBX2RY6YR: {
                          "--extracted-r6o4lv": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...L(
                        {
                          LBX2RY6YR: {
                            children: a(r, {
                              children: a(d.p, {
                                className: `framer-styles-preset-13o8gvd`,
                                "data-styles-preset": `rhzuGFsMS`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0)))`,
                                },
                                children: `Tag Title`,
                              }),
                            }),
                          },
                        },
                        T,
                        j
                      ),
                    }),
                    x !== !1 &&
                      a(F, {
                        animated: !0,
                        className: `framer-awp7gh`,
                        layoutDependency: G,
                        layoutId: `Y0tfkYL5q`,
                        style: {
                          "--62mhw": `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
                          rotate: 0,
                        },
                        variants: {
                          "LBX2RY6YR-hover": { rotate: 90 },
                          "wjdnMwXds-hover": { rotate: 90 },
                          LBX2RY6YR: {
                            "--62mhw": `var(--token-67254f3c-b607-431f-8193-1d669a2bdcca, rgb(161, 161, 161))`,
                          },
                        },
                      }),
                    x !== !1 &&
                      a(F, {
                        animated: !0,
                        className: `framer-13ogpqw`,
                        layoutDependency: G,
                        layoutId: `ujJpgUFiJ`,
                        style: {
                          "--62mhw": `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
                          rotate: 0,
                        },
                        variants: {
                          "LBX2RY6YR-hover": { rotate: -90 },
                          "wjdnMwXds-hover": { rotate: -90 },
                          LBX2RY6YR: {
                            "--62mhw": `var(--token-67254f3c-b607-431f-8193-1d669a2bdcca, rgb(161, 161, 161))`,
                          },
                        },
                      }),
                    x !== !1 &&
                      a(F, {
                        animated: !0,
                        className: `framer-k3y952`,
                        layoutDependency: G,
                        layoutId: `OEmpUTcLC`,
                        style: {
                          "--62mhw": `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
                          rotate: 0,
                        },
                        variants: {
                          "LBX2RY6YR-hover": { rotate: -90 },
                          "wjdnMwXds-hover": { rotate: -90 },
                          LBX2RY6YR: {
                            "--62mhw": `var(--token-67254f3c-b607-431f-8193-1d669a2bdcca, rgb(161, 161, 161))`,
                          },
                        },
                      }),
                    x !== !1 &&
                      a(F, {
                        animated: !0,
                        className: `framer-17oil3r`,
                        layoutDependency: G,
                        layoutId: `l14pFi5Cr`,
                        style: {
                          "--62mhw": `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
                          rotate: 0,
                        },
                        variants: {
                          "LBX2RY6YR-hover": { rotate: 90 },
                          "wjdnMwXds-hover": { rotate: 90 },
                          LBX2RY6YR: {
                            "--62mhw": `var(--token-67254f3c-b607-431f-8193-1d669a2bdcca, rgb(161, 161, 161))`,
                          },
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
          `.framer-huSOA.framer-tr9v8i, .framer-huSOA .framer-tr9v8i { display: block; }`,
          `.framer-huSOA.framer-1lec0pg { align-content: center; align-items: center; cursor: default; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 2px 8px 2px 8px; position: relative; width: min-content; }`,
          `.framer-huSOA .framer-ur553k { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-huSOA .framer-awp7gh { aspect-ratio: 1.0077519379844961 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 8px); left: -8px; position: absolute; top: -8px; width: 8px; z-index: 1; }`,
          `.framer-huSOA .framer-13ogpqw { aspect-ratio: 1 / 1; bottom: -8px; flex: none; height: var(--framer-aspect-ratio-supported, 8px); left: -8px; position: absolute; width: 8px; z-index: 1; }`,
          `.framer-huSOA .framer-k3y952 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 8px); position: absolute; right: -8px; top: -8px; width: 8px; z-index: 1; }`,
          `.framer-huSOA .framer-17oil3r { aspect-ratio: 1 / 1; bottom: -8px; flex: none; height: var(--framer-aspect-ratio-supported, 8px); position: absolute; right: -8px; width: 8px; z-index: 1; }`,
          ...O,
          ...M,
        ],
        `framer-huSOA`
      )),
      (X = Y),
      (Y.displayName = `Tag`),
      (Y.defaultProps = { height: 25, width: 66 }),
      x(Y, {
        variant: {
          options: [`wjdnMwXds`, `LBX2RY6YR`],
          optionTitles: [`Primary`, `Secondary`],
          title: `Variant`,
          type: T.Enum,
        },
        KPDdVnbJ9: {
          defaultValue: `Tag Title`,
          displayTextArea: !1,
          title: `Title`,
          type: T.String,
        },
        onKPDdVnbJ9Change: { changes: `KPDdVnbJ9`, type: T.ChangeHandler },
        nHzYRdzoI: { defaultValue: !0, title: `Show Plus Icons`, type: T.Boolean },
        onnHzYRdzoIChange: { changes: `nHzYRdzoI`, type: T.ChangeHandler },
      }),
      y(
        Y,
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
          ...R,
          ..._(k),
          ..._(N),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { Z as n, X as t };
//# sourceMappingURL=FTPd3knIm.sZ-PmHOe.mjs.map
