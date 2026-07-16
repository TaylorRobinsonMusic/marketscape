import { d as Be } from "chunk-FJOWY2A6.mjs";
import { b as _e } from "chunk-Y3KD6FPJ.mjs";
import { j as _, r as ze, s as Oe, v as Ae } from "chunk-5C32A4K3.mjs";
import { a as B } from "chunk-PZOSHBCO.mjs";
import { i as De, j as S } from "chunk-43ZTSTYE.mjs";
import { Bo as Ve, Co as Me, dp as Ne, pi as Le } from "chunk-ODCA7OFJ.mjs";
import { i as de } from "chunk-M5RSXAYK.mjs";
import {
  Fa as oe,
  Ga as k,
  H as D,
  Ha as ne,
  Ia as L,
  Ka as y,
  Mg as ue,
  Ml as ve,
  Na as ie,
  Nc as A,
  Ng as he,
  Og as Ce,
  Pd as le,
  Qd as me,
  S as z,
  Sl as Pe,
  Vg as ye,
  Wt as ke,
  Yn as Te,
  et as we,
  ja as re,
  jh as ge,
  kh as be,
  kt as Ie,
  ml as Re,
  nc as pe,
  ph as xe,
  qr as Se,
  qv as Ee,
  sv as Fe,
  u as ee,
  up as E,
  wf as ce,
  yf as fe,
} from "chunk-AHICRW35.mjs";
import { a as O } from "chunk-VKWF2PPO.mjs";
import { Ue as te } from "chunk-2S627D2L.mjs";
import { a as f } from "chunk-T77QJFCJ.mjs";
import { b as g, f as ae, h as se } from "chunk-DYNCKUFC.mjs";
import { a as v } from "chunk-4I6ENMO3.mjs";
import { Ba as Q, ia as J, sa as Z, ta as Y, ua as N, x as X } from "chunk-V7MLU2WL.mjs";
import { e as m, j as T } from "chunk-CT63CFX7.mjs";
var Ot = "groundNodeWrapper",
  At = "d197x122",
  _t = "dpj2ndz",
  Bt = "d1tskyf",
  Wt = "d74qriz",
  Ut = "dyirmfz",
  Ht = "gh7q592",
  jt = "c880hsu";
var W = m(f(), 1);
function Yt({ tree: e, componentLoader: t, node: r, richTextProps: i, children: n }) {
  let o = r.getComponentPresets(),
    a = {},
    p = Be();
  for (let [d, s] of o) {
    let l = e.get(s);
    if (!l) continue;
    l.linkTo(r.id);
    let c = t.reactComponentForIdentifier(l.componentIdentifier);
    if (((l.cache.isComponentLoaded = !!c), !c)) continue;
    let u = l.getRawControlProps(),
      h = Ne(c, "onlyPresets"),
      C = we(h, u);
    a[d] = Ee(
      h,
      C,
      Fe({
        assetResolverWithHash: p,
        variableValueResolver: l.cache,
        getVariableControlByReference: (R) => l.cache.getVariableControlByReference(R),
        getResolvedFetchDataValue: void 0,
        getCanvasTree: () => e,
        componentLoader: t,
      })
    );
  }
  return (0, W.jsx)(ce, { presets: a, children: (0, W.jsx)(ye, { ...i, children: n }) });
}
function F(e) {
  return !(
    e.hasAttribute("data-debug") ||
    e.hasAttribute("data-frame-border") ||
    e.hasAttribute("data-empty-state") ||
    e.hasAttribute("data-framer-background-image-wrapper")
  );
}
function We(e) {
  if (!e) return [];
  let t = Array.from(e.children),
    r = t.length;
  if (r === 0) return [];
  let i = t.map((a) => Array.from(a.children).filter(F)),
    n = i.reduce((a, p) => a + p.length, 0),
    o = [];
  for (let a = 0; o.length < n; a++) {
    let p = ue(r, a),
      d = i[p];
    if (d && d.length > 0) {
      let s = d.shift();
      if (!s) continue;
      o.push(s);
    }
  }
  return o;
}
var U = m(v(), 1),
  H = m(f(), 1);
function Ue(e, t) {
  let i = U.default.Children.toArray(e).filter(
    (n) => U.default.isValidElement(n) && (n.props.visible ?? !0)
  );
  if (t) {
    let n = 0;
    for (let {
      index: o,
      attributes: { width: a, height: p, style: d },
    } of t) {
      let s = (0, H.jsx)(ct, { width: a, height: p, style: d }, n);
      ((n += 1), i.splice(o, 0, s));
    }
  }
  return i;
}
function ct({ width: e, height: t, style: r }) {
  return (0, H.jsx)(y, {
    width: e,
    height: t,
    style: { position: "relative", ...r },
    background: de.tint,
    opacity: 0.1,
  });
}
var P = m(v(), 1);
var w = m(f(), 1),
  ft = he(y),
  gr = P.default.forwardRef(function (t, r) {
    let {
        visible: i,
        placeholders: n,
        children: o,
        _needsMeasure: a,
        isRepeater: p = !1,
        style: d,
        ...s
      } = t,
      l = P.default.useContext(k),
      c = P.default.useRef(null),
      u = r ?? c,
      h = t.node && A(t.node) ? We : ut;
    L(t, u, h);
    let C = Ue(o, n);
    if ((X() && ((C = ht(C)), He(d || {})), i === !1)) return null;
    let R = t.node && A(t.node) ? ft : y;
    return l
      ? (0, w.jsx)(z, {
          parentSize: 1,
          children: (0, w.jsx)(R, { ...s, style: d, ref: u, children: C }),
        })
      : (0, w.jsx)(z, {
          parentSize: p ? 1 : 2,
          children: (0, w.jsx)(R, { ...s, style: d, ref: u, children: C }),
        });
  });
function ut(e) {
  return e ? Array.from(e.children).filter(F) : [];
}
function He(e) {
  (!("rotate" in e) || e.rotate === 0) && (e.rotate = "0deg");
}
function ht(e) {
  return e.map((t) => {
    if (!P.default.isValidElement(t)) return t;
    let r = t.props.style || {};
    return (He(r), P.default.cloneElement(t, { style: r }));
  });
}
var je = m(v(), 1);
function Sr() {
  return { selectorCache: new Map(), breakpointCache: new Map() };
}
function Ct(e, t, r) {
  if (!t) return [];
  if (!e) return [];
  let i = r.get(e) ?? JSON.parse(e);
  return (r.set(e, i), i[t]);
}
function yt(e, t) {
  if (!e) return;
  let r = t.get(e) ?? JSON.parse(e);
  if (Pe(r)) return (t.set(e, r), r);
}
function wr(e, t, r, i) {
  let n = e.componentForIdentifier(t)?.annotations,
    o = n?.framerBreakpoints,
    a = n?.framerDefaultVariant,
    p = n?.framerHitTargets;
  return (0, je.useMemo)(() => {
    if (r === void 0) return;
    let d = yt(o, i.breakpointCache),
      s = ve(d, r) ?? a;
    if (s)
      return {
        activeVariant: s,
        selectors: Ct(p, s, i.selectorCache),
        className: d?.[s]?.canvasClassName,
        minHeight: d?.[s]?.minHeight ?? 1e3,
        rootFontSize: d?.[s]?.rootFontSize ?? xe,
      };
  }, [o, p, a, r, i]);
}
var x = m(v(), 1);
var V = m(v(), 1);
var I = m(f(), 1),
  gt = J("SandboxComponentError");
function bt(e, t) {
  let r = Q(e);
  return Z(r)
    ? _e(r)
      ? !0
      : t === "canvasComponent"
    : !!(Y(r) && (r.type === "canvasComponent" || r.type === "screen"));
}
var xt = /\s*(?:at|in) (\S+)/;
function Rt(e, t) {
  let r = [];
  for (let i of e.split(`
`)) {
    if (!i) continue;
    if (i.match(xt)?.[1] === t.name) break;
    r.push(i);
  }
  return r;
}
function Ge(e) {
  class t extends V.default.Component {
    constructor() {
      super(...arguments);
      T(this, "logsToSentry", !1);
      T(this, "lastComponentIdentifier");
      T(this, "state", { isOverBudget: !1 });
      T(this, "scheduledTimer");
    }
    shouldLogToSentry(n, o) {
      return this.lastComponentIdentifier === n
        ? this.logsToSentry
        : ((this.lastComponentIdentifier = n), (this.logsToSentry = bt(n, o)));
    }
    scheduleRerenderDueToBudget() {
      this.scheduledTimer ||
        (this.scheduledTimer = window.setTimeout(() => {
          ((this.scheduledTimer = void 0), this.setState({ isOverBudget: !1 }));
        }, 0));
    }
    static getDerivedStateFromError(n) {
      return { lastError: { error: n } };
    }
    componentDidCatch(n, o) {
      if (n instanceof ee) {
        (this.setState({ isOverBudget: !0 }), this.scheduleRerenderDueToBudget());
        return;
      }
      let a = o.componentStack ? Rt(o.componentStack, this.constructor) : void 0;
      this.setState({ lastError: { error: n, stack: a } });
    }
    renderErrorPlaceholder(n) {
      let o = {};
      return (
        this.props.widthType === 2 && ((o.width = 200), (o.widthType = 0)),
        this.props.heightType === 2 && ((o.height = 200), (o.heightType = 0)),
        (0, I.jsx)(y, {
          ...this.props,
          layoutId: void 0,
          layoutIdKey: void 0,
          ...o,
          background: null,
          children: (0, I.jsx)(ie, { error: n }),
        })
      );
    }
    componentDidUpdate(n, o) {
      (this.props.__rendering?.setLastRenderingError(this.state.lastError?.error ?? null),
        this.state.lastError !== void 0 &&
          o.lastError === this.state.lastError &&
          this.setState({ lastError: void 0 }));
    }
    render() {
      let {
          componentLoader: n,
          __logger: o = gt,
          __externalModuleType: a,
          __rendering: p,
          forwardedRef: d,
          ...s
        } = this.props,
        l = this.props.componentIdentifier,
        { lastError: c } = this.state;
      if (vt(this.props.children)) {
        let u = n.errorForIdentifier(l);
        if (u) {
          let h = B(u, void 0);
          return this.renderErrorPlaceholder(h);
        }
      }
      if (this.state.isOverBudget) return this.renderErrorPlaceholder({ message: "", title: "" });
      if (c) {
        let u = n.componentForIdentifier(l),
          h = B(u, c.error);
        if (this.shouldLogToSentry(l, a)) {
          let C = u ? u.file : "???";
          o.reportErrorOncePerMinute(c.error, { file: C, stack: c.stack });
        }
        return this.renderErrorPlaceholder(h);
      }
      return (0, I.jsx)(e, { ...s, ref: d });
    }
  }
  return V.default.forwardRef((r, i) => (0, I.jsx)(t, { ...r, forwardedRef: i }));
}
function vt(e) {
  if (!e) return !0;
  if (Array.isArray(e)) {
    let t = V.default.Children.count(e);
    if (t === 0) return !0;
    let [r] = e;
    if (r === null && t === 1) return !0;
  }
  return !1;
}
var j = m(v(), 1),
  $e = m(f(), 1),
  Ke = (e) =>
    j.default.forwardRef((t, r) => {
      let { innerRef: i, ...n } = t,
        o = j.default.useRef(null),
        a = i ?? o;
      return (L(n, a, ne), (0, $e.jsx)(e, { ...t, innerRef: a, ref: r }));
    });
var b = m(f(), 1);
function Pt(e) {
  return e ? e === "framer/Page" || e === "framer/Scroll" : !1;
}
var G = class extends x.default.Component {
    shouldComponentUpdate(t) {
      return !O(this.props, t, !0);
    }
    render() {
      return this.props.children;
    }
  },
  K = class extends x.default.Component {
    shouldComponentUpdate(t) {
      let r = D.current() !== D.canvas;
      return t._needsMeasure || !O(this.props, t, r);
    }
    render() {
      let {
          children: t,
          innerRef: r,
          forwardedRef: i,
          componentIdentifier: n,
          __withWidth: o,
          isSlotContainer: a,
          ...p
        } = this.props,
        d = this.props.layoutId,
        s = re(),
        l = !Pt(n),
        { frameProps: c, childProps: u = {} } = St(p, {
          layoutId: d,
          forwardedRef: i,
          onCanvas: s,
        });
      (o && (u.width = p.width), window.__checkComponentBudget__?.());
      let h = t;
      return (
        (!s || o) &&
          (h = x.default.Children.map(t, (C) =>
            x.default.isValidElement(C) ? x.default.cloneElement(C, u) : C
          )),
        s
          ? (h = (0, b.jsx)(G, { children: h }))
          : l &&
            (h = (0, b.jsx)(te, {
              inherit: !1,
              id: d,
              children: (0, b.jsx)(oe, { enabled: !1, children: h }),
            })),
        (0, b.jsx)(k.Provider, {
          value: !a,
          children: (0, b.jsx)(y, {
            "data-framer-component-container": !0,
            background: null,
            overflow: "visible",
            ref: r,
            ...c,
            "data-framer-component-type": "ComponentContainer",
            style: { ...c.style, pointerEvents: void 0 },
            children: h,
          }),
        })
      );
    }
  },
  Tt = x.default.forwardRef((e, t) => (0, b.jsx)(K, { ...e, forwardedRef: t })),
  Qr = Ge(fe(Ke(Tt)));
function St(e, { layoutId: t, forwardedRef: r, onCanvas: i }) {
  if (i) return { frameProps: e };
  let {
    opacity: n,
    children: o,
    left: a,
    right: p,
    top: d,
    bottom: s,
    center: l,
    centerX: c,
    centerY: u,
    aspectRatio: h,
    parentSize: C,
    width: R,
    height: Je,
    rotation: Ze,
    visible: Ye,
    _constraints: Qe,
    _initialStyle: et,
    name: tt,
    positionSticky: rt,
    positionStickyTop: ot,
    positionStickyRight: nt,
    positionStickyBottom: it,
    positionStickyLeft: at,
    style: st,
    duplicatedFrom: dt,
    widthType: pt,
    heightType: lt,
    ...mt
  } = e;
  return {
    childProps: Object.assign(mt, { ref: r }),
    frameProps: {
      id: e.id + "-container",
      layoutId: t,
      style: st,
      _constraints: Qe,
      _initialStyle: et,
      left: a,
      right: p,
      top: d,
      bottom: s,
      center: l,
      centerX: c,
      centerY: u,
      aspectRatio: h,
      parentSize: C,
      width: R,
      height: Je,
      rotation: Ze,
      visible: Ye,
      name: tt,
      duplicatedFrom: dt,
      widthType: pt,
      heightType: lt,
      positionSticky: rt,
      positionStickyTop: ot,
      positionStickyRight: nt,
      positionStickyBottom: it,
      positionStickyLeft: at,
    },
  };
}
var $ = m(f(), 1),
  qe = "framer-viewport-portal-root";
function ro(e) {
  return e.id.startsWith(qe);
}
function wt(e, t = "none") {
  return `${qe}-${e}-${t}`;
}
var oo = ({ id: e, viewportHeight: t, type: r }) =>
    (0, $.jsx)("div", {
      id: wt(e, r),
      style: { top: 0, left: 0, right: 0, position: "absolute", height: t, maxHeight: "100%" },
    }),
  It = "framer-portal-root";
function kt(e, t = "none") {
  return `${It}-${e}-${t}`;
}
var no = ({ id: e, type: t }) =>
  (0, $.jsx)("div", {
    id: kt(e, t),
    style: { position: "fixed", width: "100%", height: "100%", top: 0, left: 0, zIndex: Ie },
  });
var q = m(f(), 1);
function Lt(e, t, r, i, n, o, a) {
  let p = a ?? e.getProps(t, r),
    d = e.resolveValue("visible", r) !== !1;
  if ((i.setVisible(n, d), me(e)))
    return (0, q.jsx)(be, {
      ...p,
      isRootVectorNode: o,
      children: e.children.map((s) => {
        let l = _(n, s.id);
        return Lt(s, t, r, i, l, !1, void 0);
      }),
    });
  if (Re(e)) {
    if (le(e))
      for (let s of e.walk()) {
        if (s === e) continue;
        let l = _(n, s.id);
        i.setVisible(l, s.resolveValue("visible", r) !== !1);
      }
    return (0, q.jsx)(ge, { ...p, isRootVectorNode: o });
  }
  throw Error(`WARNING: Unknown vector node: ${e.__class}`);
}
function Et(e) {
  let t = e.cache;
  if (
    t.lastUpdate !== e.update &&
    ((t.lastUpdate = e.update), (t.calculatedPaths = null), e.children)
  )
    for (let r of e.children) Et(r);
}
var Xe = m(f(), 1);
function So(e, t, r) {
  if (e.htmlContent) {
    let o = e.resolveValue("htmlContent", t);
    return g(o) ? S(o) : E(o) ? De(o) : o;
  }
  let i = e.html,
    n = Te(r, e.htmlLocalized);
  if (n) {
    let o = Oe(i),
      a = ze(o, n, i);
    a && (i = Ae(e.html, a));
  }
  return S(i);
}
function wo(e, t, r) {
  let i = e.textContent;
  if (!pe(i)) return;
  let n = i.transforms[0],
    o = ke(i, t, e.cache, r);
  if (g(o))
    return (0, Xe.jsx)(Ce, {
      date: o,
      dateFormat: n.format,
      dateStyle: n.dateStyle,
      dateCapitalize: n.capitalize,
      locale: n.locale,
    });
}
function Io(e, t) {
  if (!t?.id || !e.textFitViewBoxSize || !e.textFitViewBoxSizeLocalized) return;
  let r = e.textFitViewBoxSizeLocalized[t.id];
  if (r) return Le(r);
}
function M(e, t, r, i) {
  let n = t.getControlPropSourceIdentifier();
  if (!n) return;
  let o = r.getPropertyControlsForIdentifier(n);
  if (!o) return;
  let a = Ve(r, n);
  for (let p in o) {
    let d = o[p];
    if (!Se(d)) continue;
    let s = a ? Me(a, p) : p,
      l = e[s],
      c = Vt(l, d.control.controls, i);
    c !== l && (e[s] = c);
  }
}
function Vt(e, t, r) {
  if (!se(e)) return e;
  let i;
  for (let n = 0; n < e.length; n++) {
    let o = e[n];
    if (!ae(o)) continue;
    let a;
    for (let p in t) {
      let d = t[p];
      if (!d) continue;
      let s = o[p],
        l = r(d, s);
      l !== s && ((a ??= { ...o }), (a[p] = l));
    }
    a && ((i ??= [...e]), (i[n] = a));
  }
  return i ?? e;
}
function No(e, t, r, i) {
  M(e, t, r, (n, o) => (n.type === "vectorsetitem" && g(o) && N(o) ? i(o) : o));
}
function Do(e, t, r) {
  let i = [];
  return (M(e, t, r, (n, o) => (n.type === "vectorsetitem" && g(o) && N(o) && i.push(o), o)), i);
}
function Uo(e, t, r) {
  M(e, t, r.componentLoader, (i, n) => (i.type === "richtext" ? Mt(n, r) : n));
}
function Mt(e, t) {
  return !g(e) && !E(e)
    ? e
    : S(
        e,
        {
          componentLoader: t.componentLoader,
          resolveVectorSetItem: t.resolveVectorSetItem,
          tree: t.tree,
        },
        t.cacheKey
      );
}
export {
  Yt as a,
  We as b,
  ct as c,
  gr as d,
  ut as e,
  Sr as f,
  wr as g,
  Ge as h,
  Qr as i,
  ro as j,
  wt as k,
  oo as l,
  kt as m,
  no as n,
  Lt as o,
  Et as p,
  So as q,
  wo as r,
  Io as s,
  No as t,
  Do as u,
  Uo as v,
  Mt as w,
  Ot as x,
  At as y,
  _t as z,
  Bt as A,
  Wt as B,
  Ut as C,
  Ht as D,
  jt as E,
};
//# sourceMappingURL=chunk-VUYDNJE5.mjs.map
