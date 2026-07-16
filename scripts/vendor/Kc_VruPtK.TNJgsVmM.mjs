import { t as e } from "./rolldown-runtime.BB3S47xo.mjs";
import {
  A as t,
  O as n,
  P as r,
  _ as i,
  c as a,
  j as o,
  o as s,
  w as c,
  y as l,
} from "./react.Cxf1BSD4.mjs";
import { C as u, a as d, r as f, t as p } from "./motion.BxtCy6Qp.mjs";
import {
  $ as m,
  K as h,
  L as g,
  N as _,
  Ot as v,
  P as y,
  at as b,
  dt as x,
  ft as S,
  k as C,
  kt as w,
  s as T,
  y as E,
  yt as D,
} from "./framer.DwtIulwr.mjs";
import { i as O, n as k, r as A, t as j } from "./Bo2HZoBjr.ysB5lyAs.mjs";
import { i as M, n as N, r as P, t as F } from "./zp59s7qXk.DwQj358A.mjs";
function I(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var L,
  R,
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
  Y = e(() => {
    (s(),
      m(),
      p(),
      c(),
      O(),
      M(),
      (L = { FoS6XZPxY: { hover: !0 }, kWnN_xkUt: { hover: !0 }, UCzWgVJt3: { hover: !0 } }),
      (R = [`kWnN_xkUt`, `FoS6XZPxY`, `UCzWgVJt3`]),
      (z = `framer-pS2R3`),
      (B = {
        FoS6XZPxY: `framer-v-3ewdrp`,
        kWnN_xkUt: `framer-v-fbgx0u`,
        UCzWgVJt3: `framer-v-1ut5x8`,
      }),
      b(),
      (V = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (H = ({ value: e, children: n }) => {
        let r = t(d),
          i = e ?? r.transition,
          s = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(d.Provider, { value: s, children: n });
      }),
      (U = { Primary: `kWnN_xkUt`, Secondary: `FoS6XZPxY`, Tint: `UCzWgVJt3` }),
      (W = u.create(r)),
      (G = ({ click: e, height: t, id: n, link: r, title: i, width: a, ...o }) => ({
        ...o,
        JvqpmmvGw: r ?? o.JvqpmmvGw,
        S6PqTgm2A: e ?? o.S6PqTgm2A,
        vA9NXfDIM: i ?? o.vA9NXfDIM ?? `Button`,
        variant: U[o.variant] ?? o.variant ?? `kWnN_xkUt`,
      })),
      (K = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = w(
        i(function (e, t) {
          let i = n(null),
            o = t ?? i,
            s = l(),
            { activeLocale: c, setLocale: d } = D();
          S();
          let {
              style: p,
              className: m,
              layoutId: h,
              variant: _,
              JvqpmmvGw: y,
              vA9NXfDIM: b,
              S6PqTgm2A: w,
              ...T
            } = G(e),
            {
              baseVariant: O,
              classNames: k,
              clearLoadingGesture: A,
              gestureHandlers: M,
              gestureVariant: N,
              isLoading: P,
              setGestureState: U,
              setVariant: q,
              variants: J,
            } = v({
              cycleOrder: R,
              defaultVariant: `kWnN_xkUt`,
              enabledGestures: L,
              ref: o,
              variant: _,
              variantClassNames: B,
            }),
            Y = K(e, J),
            { activeVariantCallback: X, delay: Z } = x(O),
            Q = X(async (...e) => {
              if ((U({ isPressed: !1 }), w && (await w(...e)) === !1)) return !1;
            }),
            $ = g(z, F, j);
          return a(f, {
            id: h ?? s,
            children: a(W, {
              animate: J,
              initial: !1,
              children: a(H, {
                value: V,
                children: a(E, {
                  href: y,
                  motionChild: !0,
                  nodeId: `kWnN_xkUt`,
                  openInNewTab: !1,
                  scopeId: `Kc_VruPtK`,
                  smoothScroll: !0,
                  children: a(u.a, {
                    ...T,
                    ...M,
                    className: `${g($, `framer-fbgx0u`, m, k)} framer-1oo1od2`,
                    "data-framer-name": `Primary`,
                    "data-highlight": !0,
                    layoutDependency: Y,
                    layoutId: `kWnN_xkUt`,
                    onTap: Q,
                    ref: o,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `rgba(0, 0, 0, 0)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      "--corner-shape-fallback": 0.796,
                      backgroundColor: `var(--token-285ef153-d569-42f5-b925-84d6d4b8fa63, rgb(0, 0, 0))`,
                      borderBottomLeftRadius: `calc(18px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      borderBottomRightRadius: `calc(18px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      borderTopLeftRadius: `calc(18px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      borderTopRightRadius: `calc(18px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      cornerShape: `superellipse(1.4)`,
                      ...p,
                    },
                    variants: {
                      "FoS6XZPxY-hover": {
                        backgroundColor: `var(--token-71d4309d-2a6d-4aaa-bb59-7fc6ce2d6262, rgba(0, 0, 0, 0.1))`,
                      },
                      "kWnN_xkUt-hover": {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `var(--token-8a48a509-d30c-45be-ab76-ca7d93a6ff7a, rgb(51, 51, 51))`,
                      },
                      "UCzWgVJt3-hover": {
                        backgroundColor: `var(--token-74f0a186-517f-42e6-9594-419eaad265e0, rgb(52, 85, 250))`,
                      },
                      FoS6XZPxY: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-c501e0d1-c10e-4ef2-baa7-db83ded46808, rgba(0, 0, 0, 0.1))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `var(--token-fe732e94-f30f-4945-91af-015cdcf1f937, rgba(0, 0, 0, 0.05))`,
                      },
                      UCzWgVJt3: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `var(--token-2035a202-617c-4af0-aa75-ad99be73f16c, rgb(52, 85, 250))`,
                      },
                    },
                    ...I(
                      {
                        "FoS6XZPxY-hover": { "data-framer-name": void 0 },
                        "kWnN_xkUt-hover": { "data-framer-name": void 0 },
                        "UCzWgVJt3-hover": { "data-framer-name": void 0 },
                        FoS6XZPxY: { "data-border": !0, "data-framer-name": `Secondary` },
                        UCzWgVJt3: { "data-framer-name": `Tint` },
                      },
                      O,
                      N
                    ),
                    children: a(C, {
                      __fromCanvasComponent: !0,
                      children: a(r, {
                        children: a(u.p, {
                          className: `framer-styles-preset-1ro81ui`,
                          "data-styles-preset": `zp59s7qXk`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-358f9ea8-35a8-474d-aea3-3d32a4090f35, rgb(255, 255, 255)))`,
                          },
                          children: `Button`,
                        }),
                      }),
                      className: `framer-v0hfab`,
                      fonts: [`Inter`],
                      layoutDependency: Y,
                      layoutId: `cJcLIVu7u`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-358f9ea8-35a8-474d-aea3-3d32a4090f35, rgb(255, 255, 255))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: b,
                      variants: {
                        FoS6XZPxY: {
                          "--extracted-r6o4lv": `var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...I(
                        {
                          FoS6XZPxY: {
                            children: a(r, {
                              children: a(u.p, {
                                className: `framer-styles-preset-ccv9s9`,
                                "data-styles-preset": `Bo2HZoBjr`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6e6e337d-28cc-44d1-a0da-bb7b5b6c59e1, rgb(0, 0, 0)))`,
                                },
                                children: `Button`,
                              }),
                            }),
                          },
                        },
                        O,
                        N
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-pS2R3.framer-1oo1od2, .framer-pS2R3 .framer-1oo1od2 { display: block; }`,
          `.framer-pS2R3.framer-fbgx0u { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 6px 10px 6px 10px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-pS2R3 .framer-v0hfab { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          ...N,
          ...k,
          `.framer-pS2R3[data-border="true"]::after, .framer-pS2R3 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-pS2R3`
      )),
      (J = q),
      (q.displayName = `Button`),
      (q.defaultProps = { height: 31, width: 64 }),
      y(q, {
        variant: {
          options: [`kWnN_xkUt`, `FoS6XZPxY`, `UCzWgVJt3`],
          optionTitles: [`Primary`, `Secondary`, `Tint`],
          title: `Variant`,
          type: T.Enum,
        },
        JvqpmmvGw: { title: `Link`, type: T.Link },
        vA9NXfDIM: { defaultValue: `Button`, displayTextArea: !1, title: `Title`, type: T.String },
        onvA9NXfDIMChange: { changes: `vA9NXfDIM`, type: T.ChangeHandler },
        S6PqTgm2A: { title: `Click`, type: T.EventHandler },
      }),
      _(
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
          ...h(P),
          ...h(A),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { Y as n, J as t };
//# sourceMappingURL=Kc_VruPtK.TNJgsVmM.mjs.map
