import { t as e } from "./rolldown-runtime.BB3S47xo.mjs";
import {
  A as t,
  O as n,
  P as r,
  _ as i,
  c as a,
  j as ee,
  l as o,
  o as s,
  s as te,
  w as c,
  y as l,
} from "./react.Cxf1BSD4.mjs";
import { C as u, a as ne, r as d, t as f } from "./motion.BxtCy6Qp.mjs";
import {
  $ as p,
  C as re,
  Ct as ie,
  K as m,
  L as h,
  N as g,
  _t as _,
  bt as ae,
  f as v,
  ft as oe,
  gt as se,
  ht as ce,
  k as y,
  kt as b,
  n as le,
  st as x,
  yt as ue,
} from "./framer.DwtIulwr.mjs";
import { a as S, i as de, o as C, r as fe } from "./shared-lib.CQP05-fP.mjs";
import { i as w, n as T, r as pe, t as E } from "./JDyypIjWz.qzBAyaF-.mjs";
import { n as D, t as O } from "./qQzBoJMop.DSc1yP4o.mjs";
import { i as k, n as A, r as j, t as M } from "./cz5F3xMDV.C_9bagy8.mjs";
import { i as N, n as P, r as F, t as I } from "./gyeBsN4cF.CVbbb2nD.mjs";
import { i as L, n as R, r as z, t as me } from "./RHKJWGVab.DB6gaQfz.mjs";
import { n as he, r as ge } from "./fnocoQUFP.DkhOeheh.mjs";
var B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (s(),
    p(),
    f(),
    c(),
    O(),
    k(),
    N(),
    w(),
    C(),
    L(),
    he(),
    (B = {
      SI7X3Lw4K: `(min-width: 1200px)`,
      U1ucKC1OD: `(max-width: 809.98px)`,
      WnmJD2EF2: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (V = []),
    (H = `framer-wQBeb`),
    (U = {
      SI7X3Lw4K: `framer-v-74w9kj`,
      U1ucKC1OD: `framer-v-1qlmdej`,
      WnmJD2EF2: `framer-v-1i02hdj`,
    }),
    (W = (e, t, n) => (e && t ? `position` : n)),
    (G = (e, t) =>
      typeof e == `string` && typeof t == `string` ? e.toLowerCase() === t.toLowerCase() : e === t),
    (K = () => ({
      from: { alias: `BBP5t_CQd`, data: D, type: `Collection` },
      select: [
        { collection: `BBP5t_CQd`, name: `zH4tK0Xr9`, type: `Identifier` },
        { collection: `BBP5t_CQd`, name: `lmOHDeIEY`, type: `Identifier` },
        { collection: `BBP5t_CQd`, name: `hj3sUMZDX`, type: `Identifier` },
        { collection: `BBP5t_CQd`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `BBP5t_CQd`, name: `vU2tk9qoD`, type: `Identifier` },
        operator: `==`,
        right: { type: `LiteralValue`, value: `L6pZrpY4j` },
        type: `BinaryOperation`,
      },
    })),
    (q = ({ query: e, pageSize: t, children: n }) => n(ie(e))),
    (J = { Desktop: `SI7X3Lw4K`, Phone: `U1ucKC1OD`, Tablet: `WnmJD2EF2` }),
    (Y = ({ value: e }) =>
      _()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (X = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: J[r.variant] ?? r.variant ?? `SI7X3Lw4K`,
    })),
    (Z = b(
      i(function (e, i) {
        let s = n(null),
          c = i ?? s,
          f = l(),
          { activeLocale: p, setLocale: ie } = ue();
        oe();
        let { style: m, className: g, layoutId: _, variant: b, ...x } = X(e);
        ae(ee(() => ge({}, p), [p]));
        let [S, de] = se(b, B, !1),
          C = h(H, me, fe, E, M, I),
          w = t(v)?.isLayoutTemplate,
          T = W(w, !!t(ne)?.transition?.layout);
        return (
          ce({}),
          a(v.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: J,
              primaryVariantId: `SI7X3Lw4K`,
              variantClassNames: U,
            },
            children: o(d, {
              id: _ ?? f,
              children: [
                a(Y, {
                  value: `html body { background: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, rgb(245, 245, 245)); }`,
                }),
                a(u.div, {
                  ...x,
                  className: h(C, `framer-74w9kj`, g),
                  "data-selection": !0,
                  ref: c,
                  style: { ...m },
                  children: a(u.main, {
                    className: `framer-5alxwj`,
                    "data-framer-name": `Main`,
                    layout: T,
                    children: a(`section`, {
                      className: `framer-1bcmm8i`,
                      "data-border": !0,
                      "data-framer-name": `Content`,
                      children: o(`div`, {
                        className: `framer-19ne7t4`,
                        "data-framer-name": `Body`,
                        children: [
                          o(`div`, {
                            className: `framer-iaf6h7`,
                            "data-framer-name": `Header`,
                            children: [
                              a(y, {
                                __fromCanvasComponent: !0,
                                children: a(r, {
                                  children: a(`h1`, {
                                    className: `framer-styles-preset-1r2j15k`,
                                    "data-styles-preset": `RHKJWGVab`,
                                    dir: `auto`,
                                    children: `Acceptable Use Policy`,
                                  }),
                                }),
                                className: `framer-x3zcko`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(y, {
                                __fromCanvasComponent: !0,
                                children: o(r, {
                                  children: [
                                    a(`p`, {
                                      className: `framer-styles-preset-1i4fe7d`,
                                      "data-styles-preset": `NbDFs5rgP`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                      },
                                      children: `This Acceptable Use Policy ("AUP") outlines the strict rules and behavioral boundaries governing the use of any custom software, Large Language Model (LLM) architectures, automated middleware, API integrations, and ongoing server environments engineered, deployed, or maintained by Stackgrid ("we," "us," "our").`,
                                    }),
                                    a(`p`, {
                                      className: `framer-styles-preset-1i4fe7d`,
                                      "data-styles-preset": `NbDFs5rgP`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--token-66b6d7ff-ba33-4d69-8906-b2633b6d4a86, rgb(84, 84, 84))`,
                                      },
                                      children: `This policy applies universally to the entity engaging our services ("Client," "you," "your") and any end-users, employees, or customers accessing the applications built by Stackgrid. By utilizing our deployed infrastructure, you agree to absolute compliance with this AUP.`,
                                    }),
                                  ],
                                }),
                                className: `framer-svjm0m`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          a(`div`, { className: `framer-piy5oh`, "data-framer-name": `Divider` }),
                          a(`div`, {
                            className: `framer-ir44w8`,
                            children: a(le, {
                              children: a(q, {
                                query: K(),
                                children: (e, t, n) => {
                                  let i = G(e?.length ?? 0, 0);
                                  return o(te, {
                                    children: [
                                      e?.map(
                                        (
                                          { hj3sUMZDX: e, id: t, lmOHDeIEY: n, zH4tK0Xr9: i },
                                          ee
                                        ) => (
                                          (i ??= ``),
                                          (n ??= ``),
                                          (e ??= ``),
                                          a(
                                            d,
                                            {
                                              id: `BBP5t_CQd-${t}`,
                                              children: a(re.Provider, {
                                                value: { hj3sUMZDX: e },
                                                children: o(`div`, {
                                                  className: `framer-1wdoaoz`,
                                                  children: [
                                                    a(y, {
                                                      __fromCanvasComponent: !0,
                                                      children: a(r, {
                                                        children: a(`h6`, {
                                                          className: `framer-styles-preset-c7r8r4`,
                                                          "data-styles-preset": `JDyypIjWz`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-alignment": `left`,
                                                          },
                                                          children: `Prohibited Operational Activities`,
                                                        }),
                                                      }),
                                                      className: `framer-11zdk79`,
                                                      fonts: [`Inter`],
                                                      text: i,
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    a(y, {
                                                      __fromCanvasComponent: !0,
                                                      children: n,
                                                      className: `framer-ijunra`,
                                                      fonts: [`Inter`],
                                                      stylesPresetsClassNames: {
                                                        a: `framer-styles-preset-1ovk18f`,
                                                        p: `framer-styles-preset-l66ocq`,
                                                      },
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            },
                                            t
                                          )
                                        )
                                      ),
                                      i !== !1 &&
                                        a(`div`, {
                                          className: `framer-yaa3bk`,
                                          "data-border": !0,
                                          "data-framer-name": `Empty State`,
                                          children: a(y, {
                                            __fromCanvasComponent: !0,
                                            children: a(r, {
                                              children: a(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `rgb(153, 153, 153)`,
                                                },
                                                children: `No items`,
                                              }),
                                            }),
                                            className: `framer-bz3f0g`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                    ],
                                  });
                                },
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
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
        `.framer-wQBeb.framer-e88ucb, .framer-wQBeb .framer-e88ucb { display: block; }`,
        `.framer-wQBeb.framer-74w9kj { --selection-background-color: rgba(0, 153, 255, 0.15); --selection-color: #0099FF; align-content: center; align-items: center; background-color: var(--token-6c8d10ba-463b-4990-b64f-32918ca2d4f2, #f5f5f5); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-wQBeb .framer-5alxwj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1300px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-wQBeb .framer-1bcmm8i { --border-bottom-width: 0px; --border-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #d1d1d1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; max-width: 1180px; overflow: var(--overflow-clip-fallback, clip); padding: 140px 28px 110px 28px; position: relative; width: 100%; }`,
        `.framer-wQBeb .framer-19ne7t4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 800px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-wQBeb .framer-iaf6h7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-wQBeb .framer-x3zcko, .framer-wQBeb .framer-svjm0m { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-wQBeb .framer-piy5oh { background-color: var(--token-7e7d9213-6afe-4309-afa8-7dccf478cb0d, #dedede); flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-wQBeb .framer-ir44w8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-wQBeb .framer-1wdoaoz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-wQBeb .framer-11zdk79, .framer-wQBeb .framer-ijunra { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-wQBeb .framer-yaa3bk { --border-bottom-width: 1px; --border-color: rgba(136, 136, 136, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(204, 204, 204, 0.2); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100px; justify-content: center; min-height: 100%; min-width: 100%; padding: 10px; position: relative; width: min-content; }`,
        `.framer-wQBeb .framer-bz3f0g { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ...R,
        ...de,
        ...T,
        ...A,
        ...P,
        `.framer-wQBeb[data-selection="true"] * ::selection, .framer-wQBeb [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
        `.framer-wQBeb[data-border="true"]::after, .framer-wQBeb [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-wQBeb.framer-74w9kj { width: 810px; } .framer-wQBeb .framer-1bcmm8i { max-width: 780px; }}`,
        `@media (max-width: 809.98px) { .framer-wQBeb.framer-74w9kj { width: 390px; } .framer-wQBeb .framer-5alxwj { padding: 0px 12px 0px 12px; } .framer-wQBeb .framer-1bcmm8i { max-width: 600px; padding: 100px 28px 50px 28px; }}`,
      ],
      `framer-wQBeb`
    )),
    (Q = Z),
    (Z.displayName = `Privacy Policy`),
    (Z.defaultProps = { height: 2745.5, width: 1200 }),
    g(
      Z,
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
        ...m(z),
        ...m(S),
        ...m(pe),
        ...m(j),
        ...m(F),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Z.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = x.get(K(), n);
        return Promise.allSettled([r.preload()]);
      },
    }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerfnocoQUFP`,
          slots: [],
          annotations: {
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"WnmJD2EF2":{"layout":["fixed","auto"]},"U1ucKC1OD":{"layout":["fixed","auto"]}}}`,
            framerImmutableVariables: `true`,
            framerResponsiveScreen: `true`,
            framerDisplayContentsDiv: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1200`,
            framerScrollSections: `false`,
            framerIntrinsicHeight: `2745.5`,
            framerLayoutTemplateFlowEffect: `true`,
            framerComponentViewportWidth: `true`,
            framerContractVersion: `1`,
            framerColorSyntax: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, V as queryParamNames };
//# sourceMappingURL=UsiJtR8woVg36MlkZUescs3BVsUS80BvYuem0HJJLwY.B38dy5y2.mjs.map
