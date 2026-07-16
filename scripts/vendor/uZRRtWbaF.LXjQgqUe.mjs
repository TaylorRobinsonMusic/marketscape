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
  y as ee,
} from "./react.Cxf1BSD4.mjs";
import { C as u, a as d, r as f, t as p } from "./motion.BxtCy6Qp.mjs";
import {
  $ as m,
  K as h,
  L as g,
  N as _,
  Ot as te,
  P as v,
  ft as y,
  g as b,
  k as x,
  kt as S,
  s as C,
  yt as ne,
} from "./framer.DwtIulwr.mjs";
import { i as w, n as T, r as E, t as re } from "./Bo2HZoBjr.ysB5lyAs.mjs";
import { n as D, t as ie } from "./MVGBYZO38.D638P-ks.mjs";
import { a as O, i as k, o as ae, r as A } from "./shared-lib.CQP05-fP.mjs";
function j(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U = e(() => {
    (c(),
      m(),
      p(),
      l(),
      w(),
      ae(),
      D(),
      (M = [`LxBtIKFqa`, `aHiweL8fe`]),
      (N = `framer-KimqN`),
      (P = { aHiweL8fe: `framer-v-boaw6`, LxBtIKFqa: `framer-v-13vmhjr` }),
      (F = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (I = ({ value: e, children: n }) => {
        let r = t(d),
          i = e ?? r.transition,
          s = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(d.Provider, { value: s, children: n });
      }),
      (L = { Primary: `LxBtIKFqa`, Secondary: `aHiweL8fe` }),
      (R = u.create(r)),
      (z = ({
        description: e,
        height: t,
        icon: n,
        id: r,
        showIcon: i,
        title: a,
        width: o,
        ...s
      }) => ({
        ...s,
        mQrslU2vj: a ?? s.mQrslU2vj ?? `Review of your current manual tasks`,
        qcvPqy1Lq: i ?? s.qcvPqy1Lq ?? !0,
        variant: L[s.variant] ?? s.variant ?? `LxBtIKFqa`,
        vE6Ulm4Jw: n ?? s.vE6Ulm4Jw ?? ie,
        VJBFLDEGc:
          e ??
          s.VJBFLDEGc ??
          `This is just some description, I am not sure what to put here really.`,
      })),
      (B = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (V = S(
        i(function (e, t) {
          let i = n(null),
            o = t ?? i,
            c = ee(),
            { activeLocale: l, setLocale: d } = ne();
          y();
          let {
              style: p,
              className: m,
              layoutId: h,
              variant: _,
              mQrslU2vj: v,
              VJBFLDEGc: S,
              qcvPqy1Lq: C,
              vE6Ulm4Jw: w,
              ...T
            } = z(e),
            {
              baseVariant: E,
              classNames: D,
              clearLoadingGesture: ie,
              gestureHandlers: O,
              gestureVariant: k,
              isLoading: ae,
              setGestureState: L,
              setVariant: V,
              variants: H,
            } = te({
              cycleOrder: M,
              defaultVariant: `LxBtIKFqa`,
              ref: o,
              variant: _,
              variantClassNames: P,
            }),
            U = B(e, H),
            W = g(N, re, A),
            G = () => E === `aHiweL8fe`;
          return a(f, {
            id: h ?? c,
            children: a(R, {
              animate: H,
              initial: !1,
              children: a(I, {
                value: F,
                children: s(u.div, {
                  ...T,
                  ...O,
                  className: g(W, `framer-13vmhjr`, m, D),
                  "data-border": !0,
                  "data-framer-name": `Primary`,
                  layoutDependency: U,
                  layoutId: `LxBtIKFqa`,
                  ref: o,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, rgb(222, 222, 222))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `dashed`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-88de8be5-fdc6-43ad-98d5-dc2e7d77e5cc, rgb(247, 247, 247))`,
                    ...p,
                  },
                  ...j({ aHiweL8fe: { "data-framer-name": `Secondary` } }, E, k),
                  children: [
                    s(u.div, {
                      className: `framer-1iq869f`,
                      "data-framer-name": `Title`,
                      layoutDependency: U,
                      layoutId: `ihWgT4J46`,
                      children: [
                        C !== !1 &&
                          a(b, {
                            animated: !0,
                            className: `framer-1kc3int`,
                            Component: w,
                            layoutDependency: U,
                            layoutId: `WSgCFaXGC`,
                            style: {
                              "--62mhw": `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
                            },
                          }),
                        a(x, {
                          __fromCanvasComponent: !0,
                          children: a(r, {
                            children: a(u.p, {
                              className: `framer-styles-preset-ccv9s9`,
                              "data-styles-preset": `Bo2HZoBjr`,
                              dir: `auto`,
                              style: { "--framer-text-alignment": `left` },
                              children: `Review of your current manual tasks`,
                            }),
                          }),
                          className: `framer-1juypq9`,
                          fonts: [`Inter`],
                          layoutDependency: U,
                          layoutId: `lIwKZVEK4`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: v,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    G() &&
                      s(u.div, {
                        className: `framer-1jkgejy`,
                        "data-framer-name": `Description`,
                        layoutDependency: U,
                        layoutId: `sXyizvqI5`,
                        children: [
                          a(u.div, {
                            className: `framer-apgi2r`,
                            "data-framer-name": `Placeholder`,
                            layoutDependency: U,
                            layoutId: `LxmffVL0Q`,
                          }),
                          a(x, {
                            __fromCanvasComponent: !0,
                            children: a(r, {
                              children: a(u.p, {
                                className: `framer-styles-preset-1i4fe7d`,
                                "data-styles-preset": `NbDFs5rgP`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84)))`,
                                },
                                children: `This is just some description, I am not sure what to put here really.`,
                              }),
                            }),
                            className: `framer-mgmxmm`,
                            fonts: [`Inter`],
                            layoutDependency: U,
                            layoutId: `wF70aDN5S`,
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
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-KimqN.framer-1gr9qa9, .framer-KimqN .framer-1gr9qa9 { display: block; }`,
          `.framer-KimqN.framer-13vmhjr { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 18px; position: relative; width: 343px; }`,
          `.framer-KimqN .framer-1iq869f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-KimqN .framer-1kc3int { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 12px); position: relative; width: 12px; }`,
          `.framer-KimqN .framer-1juypq9 { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 2; display: -webkit-box; flex: 1 0 0px; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-KimqN .framer-1jkgejy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-KimqN .framer-apgi2r { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 12px); overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; width: 12px; }`,
          `.framer-KimqN .framer-mgmxmm { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          ...T,
          ...k,
          `.framer-KimqN[data-border="true"]::after, .framer-KimqN [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-KimqN`
      )),
      (H = V),
      (V.displayName = `Point Card`),
      (V.defaultProps = { height: 55.5, width: 342.5 }),
      v(V, {
        variant: {
          options: [`LxBtIKFqa`, `aHiweL8fe`],
          optionTitles: [`Primary`, `Secondary`],
          title: `Variant`,
          type: C.Enum,
        },
        mQrslU2vj: {
          defaultValue: `Review of your current manual tasks`,
          displayTextArea: !0,
          title: `Title`,
          type: C.String,
        },
        onmQrslU2vjChange: { changes: `mQrslU2vj`, type: C.ChangeHandler },
        VJBFLDEGc: {
          defaultValue: `This is just some description, I am not sure what to put here really.`,
          displayTextArea: !0,
          title: `Description`,
          type: C.String,
        },
        onVJBFLDEGcChange: { changes: `VJBFLDEGc`, type: C.ChangeHandler },
        qcvPqy1Lq: { defaultValue: !0, title: `Show Icon`, type: C.Boolean },
        onqcvPqy1LqChange: { changes: `qcvPqy1Lq`, type: C.ChangeHandler },
        vE6Ulm4Jw: {
          defaultValue: {
            identifier: `local-module:vector/MVGBYZO38:default`,
            moduleId: `RX2izvb4d7iG54PUwzit`,
          },
          setModuleId: `bFCrGSomAwxwjp4GIoDy`,
          title: `Icon`,
          type: C.VectorSetItem,
        },
      }),
      _(
        V,
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
          ...h(E),
          ...h(O),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  W,
  G,
  K,
  q,
  J,
  oe = e(() => {
    (c(),
      m(),
      l(),
      (W = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 59.248 0.386 C 62.275 0.79 65.007 1.687 67.2 3.884 C 69.398 6.077 70.294 8.81 70.699 11.836 C 70.978 13.889 71.055 18.8 71.075 23.017 C 80.819 23.335 86.675 24.472 90.737 28.54 C 96.386 34.183 96.386 43.272 96.386 61.446 C 96.386 79.619 96.386 88.708 90.737 94.352 C 85.094 100 76.005 100 57.831 100 L 38.554 100 C 20.381 100 11.292 100 5.648 94.352 C 0 88.708 0 79.619 0 61.446 C 0 43.272 0 34.183 5.648 28.54 C 9.711 24.472 15.566 23.335 25.311 23.012 C 25.33 18.8 25.412 13.889 25.687 11.831 C 26.092 8.81 26.988 6.077 29.186 3.88 C 31.378 1.687 34.111 0.79 37.137 0.386 C 40 0 43.61 0 47.942 0 L 48.443 0 C 52.771 0 56.386 0 59.248 0.386 Z M 63.846 22.901 C 63.822 18.819 63.754 14.429 63.537 12.795 C 63.234 10.573 62.718 9.619 62.092 8.993 C 61.465 8.366 60.511 7.851 58.284 7.547 C 55.961 7.239 52.839 7.229 48.193 7.229 C 43.547 7.229 40.424 7.239 38.096 7.552 C 35.875 7.851 34.92 8.366 34.294 8.998 C 33.667 9.624 33.152 10.573 32.848 12.795 C 32.631 14.434 32.559 18.819 32.54 22.901 C 34.424 22.892 36.434 22.892 38.554 22.892 L 57.831 22.892 C 59.957 22.892 61.961 22.892 63.846 22.901 Z M 44.578 42.169 L 44.578 42.217 C 39.33 43.537 34.94 47.677 34.94 53.412 C 34.94 60.434 41.518 65.06 48.193 65.06 C 52.164 65.06 54.217 67.629 54.217 69.48 C 54.217 71.33 52.164 73.894 48.193 73.894 C 44.222 73.894 42.169 71.33 42.169 69.48 C 42.169 67.483 40.55 65.865 38.554 65.865 C 36.558 65.865 34.94 67.483 34.94 69.48 C 34.94 75.214 39.33 79.354 44.578 80.675 L 44.578 80.723 C 44.578 82.719 46.197 84.337 48.193 84.337 C 50.189 84.337 51.807 82.719 51.807 80.723 L 51.807 80.675 C 57.055 79.349 61.446 75.214 61.446 69.48 C 61.446 62.458 54.867 57.831 48.193 57.831 C 44.222 57.831 42.169 55.263 42.169 53.412 C 42.169 51.561 44.222 48.998 48.193 48.998 C 52.164 48.998 54.217 51.561 54.217 53.412 C 54.217 55.408 55.835 57.027 57.831 57.027 C 59.828 57.027 61.446 55.408 61.446 53.412 C 61.446 47.677 57.055 43.537 51.807 42.217 L 51.807 42.169 C 51.807 40.172 50.189 38.554 48.193 38.554 C 46.197 38.554 44.578 40.172 44.578 42.169 Z" fill="var(--62mhw, var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)))" height="100px" id="afJiZHJAS" transform="translate(2 0)" width="96.38554216867499px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (G = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n ? a(u.div, { ...o, layoutId: r, ref: t }) : a(`div`, { ...o, ref: t });
      })),
      (K = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        kfNzCWrbt:
          e ?? i.kfNzCWrbt ?? `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (q = S(
        i(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: o, kfNzCWrbt: s, ...c } = K(e);
          return a(G, {
            ...c,
            className: g(`framer-ObMmC`, r),
            layoutId: i,
            ref: t,
            style: { "--62mhw": s, ...n },
          });
        }),
        [
          `.framer-ObMmC { -webkit-mask: ${W}; aspect-ratio: 1; background-color: var(--62mhw); mask: ${W}; width: 100px; }`,
        ],
        `framer-ObMmC`
      )),
      (q.displayName = `Money Bag`),
      (J = q),
      v(q, {
        kfNzCWrbt: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: C.Color,
        },
      }));
  }),
  Y,
  X,
  Z,
  Q,
  $,
  se = e(() => {
    (c(),
      m(),
      l(),
      (Y = `var(--framer-icon-mask)`),
      (X = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...o } = e;
        return n ? a(u.img, { ...o, layoutId: r, ref: t }) : a(`img`, { ...o, ref: t });
      })),
      (Z = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        kfNzCWrbt:
          e ?? i.kfNzCWrbt ?? `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0))`,
      })),
      (Q = S(
        i(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: o, kfNzCWrbt: s, ...c } = Z(e);
          return a(X, {
            ...c,
            alt: ``,
            className: g(`framer-QM3n8`, r),
            layoutId: i,
            ref: t,
            src: `data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 84.696 4.513 C 84.131 1.692 81.875 0 79.054 0 L 55.924 0 L 57.052 16.925 L 43.512 16.925 L 44.641 0 L 20.946 0 C 18.125 0 15.869 2.257 15.304 4.513 L 0.072 83.495 C -0.492 86.88 2.329 90.265 5.714 90.265 L 38.999 90.265 L 40.691 62.057 L 59.873 62.057 L 61.565 90.265 L 94.286 90.265 C 97.671 90.265 100.492 86.88 99.928 83.495 L 84.696 4.513 M 41.256 50.774 L 42.384 28.208 L 57.052 28.208 L 58.18 50.774 Z" fill="rgb(0, 0, 0)" height="90.26487091533448px" id="AvKBS1GVe" transform="translate(0 5)" width="100px"/></svg>`,
            style: { ...n },
          });
        }),
        [
          `.framer-QM3n8 { -webkit-mask: ${Y}; aspect-ratio: 1; display: block; mask: ${Y}; user-select: none; width: 100px; }`,
        ],
        `framer-QM3n8`
      )),
      (Q.displayName = `Road`),
      ($ = Q),
      v(Q, {
        kfNzCWrbt: {
          defaultValue: `var(--token-d8ccb723-1f35-4e56-aba6-0694e1de791e, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !0,
          title: `Color`,
          type: C.Color,
        },
      }));
  });
export { H as a, oe as i, $ as n, U as o, J as r, se as t };
//# sourceMappingURL=uZRRtWbaF.LXjQgqUe.mjs.map
