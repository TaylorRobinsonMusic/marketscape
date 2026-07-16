import { b as ae, bb as me, cb as fe, n as ce, x as de } from "./chunk-3AHCWATK.mjs";
import { Da as ue, i as se, j as le, oa as pe } from "./chunk-D6J3IU7E.mjs";
import { K as ie } from "./chunk-V7NJOVNA.mjs";
import { b as M } from "./chunk-Q3MJV42B.mjs";
import { a as N } from "./chunk-T7INYWRU.mjs";
import { Yg as ne } from "./chunk-RYAQJ2V7.mjs";
import { R as $ } from "./chunk-WGS5WK5D.mjs";
import { Qd as q } from "./chunk-PBNCD2KE.mjs";
import { _ as re, aa as te, oa as T } from "./chunk-ODCA7OFJ.mjs";
import { b as _ } from "./chunk-NT76EEPR.mjs";
import { i as w } from "./chunk-M5RSXAYK.mjs";
import {
  Ad as X,
  Mm as b,
  Om as K,
  Pm as ee,
  Rm as oe,
  kb as J,
  qc as Q,
  rc as C,
  tb as v,
  ub as L,
} from "./chunk-AHICRW35.mjs";
import { c as Y } from "./chunk-2NQVBTOC.mjs";
import { b as Z } from "./chunk-X3QW56PA.mjs";
import { a as O } from "./chunk-T77QJFCJ.mjs";
import { b as P, l as j } from "./chunk-DYNCKUFC.mjs";
import { a as U } from "./chunk-4I6ENMO3.mjs";
import { oa as G, pa as x } from "./chunk-V7MLU2WL.mjs";
import { e as k } from "./chunk-CT63CFX7.mjs";
var ge = k(U(), 1),
  Le = {
    type: "add",
    variant: "info",
    icon: "color-wheel",
    action: { title: "Install", onClick: $ },
    primaryText: "Use latest desktop app",
    secondaryText: "to sample colors.",
    key: "install-desktop-app",
    duration: 5e3,
    showCloseButton: "never",
  };
function Ne({ channel: r, toast: o }) {
  (0, ge.useEffect)(() => {
    if (!r) return;
    let e,
      d = {
        async sampleColor() {
          if (window.EyeDropper) {
            e?.abort();
            let u = new AbortController();
            e = u;
            let i = new window.EyeDropper();
            try {
              return {
                color: (
                  await i.open({ signal: u.signal }).catch((g) => {
                    if (g?.name === "AbortError") return { sRGBHex: void 0 };
                    throw g;
                  })
                ).sRGBHex,
              };
            } finally {
              e === u && (e = void 0);
            }
          }
          return (o(Le), {});
        },
      },
      m = N.on(r).register(d);
    return () => {
      (e?.abort(), m());
    };
  }, [r, o]);
}
var h = k(U(), 1);
var s = k(O(), 1),
  V = "link",
  be = ["*"];
function I(r) {
  return `computed-link-${r}`;
}
var Do = h.default.memo(function ({
  control: o,
  controlKey: e,
  controlProp: d,
  onChange: m,
  onContextMenu: u,
  sortable: i,
  traitTypeKeys: f,
  onDelete: g,
  supportsVariables: y = !1,
  supportsComputedValues: R = !1,
  supportsFetchDataValues: S = !1,
  nodeIds: F,
}) {
  let a = Z(),
    E = (0, h.useMemo)(() => F ?? [], [F]),
    ye = (0, h.useMemo)(() => de(e || Y()), [e]),
    { value: l } = d,
    t = C(l) || b(l) ? l : G,
    c = (n) => {
      (m(e, (p) => ({ ...p, value: n }), E), ae(t, n));
    },
    D = (n) => {
      let { defaultValue: p } = o;
      return P(p) ? p : n;
    },
    Ce = () => {
      let n = D();
      j(n) && c(n);
    },
    he = () => {
      c(void 0);
    },
    ke = a.scheduler.wrapHandler((n) => {
      let p = o.title || v(e),
        xe = P(t) ? t : D("");
      a.beginUndoGroup();
      let W = ne({ engine: a, scopeId: n, type: V, name: p, initialValue: xe });
      (W && c(W), a.endUndoGroup());
    }),
    B = a.scheduler.wrapHandler(() => {
      C(t) && c(void 0);
    }),
    Pe = a.scheduler.wrapHandler(() => {
      let n = J({ type: "link", value: b(l) ? l : void 0 }),
        p = Q("link", n, []);
      return (z(p), p);
    }),
    z = a.scheduler.wrapHandler((n) => {
      (c(n), ie.navigation.presentPopout(I(e)));
    }),
    we = i ? void 0 : o.title || v(e),
    H = D(),
    A = !L(t) && !b(t),
    ve = me(a, t),
    Ve = Ie(a, t),
    De = P(H) && b(l) && !oe(l, ee({ url: H }));
  return (0, s.jsx)(pe, {
    title: we,
    onContextMenu: u,
    onResetToDefault: Ce,
    resetToDefaultEnabled: De,
    variableType: M[V],
    allowedFileTypes: be,
    variableCreationType: V,
    onCreateVariable: ke,
    onRemoveDynamicValue: B,
    dynamicValue: C(l) ? l : null,
    onSelectVariable: c,
    traitTypeKeys: f,
    withReorderControl: i,
    reorderColumnCount: 2,
    onDelete: g,
    supportsVariables: y,
    supportsComputedValues: R,
    computedValuePopoutId: I(e),
    onSelectComputedValue: z,
    supportsFetchDataValues: S,
    onSelectFetchDataValue: Pe,
    children: C(t)
      ? (0, s.jsx)(ce, {
          title: o.title || v(e),
          value: t,
          outputControl: o,
          expectedType: M[V],
          allowedFileTypes: be,
          popoutId: I(e),
          onRemove: B,
          onChangeDynamicValue: c,
          nodeIds: E,
          supportsComputedValues: R,
          supportsFetchDataValues: S,
          controlReferenceInfo: void 0,
        })
      : (0, s.jsx)(ue, {
          id: ye,
          sortable: i,
          popout: (0, s.jsx)(fe, {
            link: x(t) ? void 0 : t,
            onChange: c,
            supportsVariables: y,
            supportsPageLinks: Me(a),
            supportsSlugVariables: y,
          }),
          navigationTitle: "Link",
          displayDivider: !0,
          title: x(t) ? "Add\u2026" : ve,
          previewWithoutWrapper: !0,
          preview: (0, s.jsx)(Te, { isSuggestion: A, icon: Ve }),
          onDelete: b(t) ? he : void 0,
          titleColor: A ? w.inputLabel : void 0,
        }),
  });
});
function Te({ isSuggestion: r, icon: o }) {
  let e = r ? w.swatchBackgroundPlaceholderForLink : w.swatchBackgroundForLink;
  return (0, s.jsx)("span", {
    style: { display: "flex", marginLeft: 3, color: e },
    children: o ?? (0, s.jsx)(q, {}),
  });
}
function Me(r) {
  if (!_(r)) return !0;
  let { scopeType: o } = r.stores.scopeStore;
  switch (o) {
    case "CanvasPage":
    case "DesignPage":
      return !1;
    default:
      return !0;
  }
}
function Ie(r, o) {
  if (!K(o)) return;
  let { webPageId: e, pathVariables: d } = o;
  if (!d) return;
  let m = r.tree.getNodeWithTrait(e, X);
  if (!m) return;
  let u = r.componentLoader.dataForIdentifier(m.dataIdentifier);
  if (!u) return;
  let i = u.annotations?.framerSlug;
  if (!i) return;
  let f = d[i];
  if (!L(f)) return;
  let g = T(re, i);
  if (f.id === g) return (0, s.jsx)(le, {});
  let y = T(te, i);
  if (f.id === y) return (0, s.jsx)(se, {});
}
export { Ne as a, Do as b };
//# sourceMappingURL=chunk-AGWFGWPR.mjs.map
