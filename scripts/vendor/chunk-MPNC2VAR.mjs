import { a as Ue } from "chunk-GV7RWGSE.mjs";
import { Rh as we, Sh as je } from "chunk-RYAQJ2V7.mjs";
import { a as q, b as G } from "chunk-U6UX6PUS.mjs";
import { b as $ } from "chunk-5D5WEAJK.mjs";
import { na as Ie } from "chunk-WGS5WK5D.mjs";
import { d as Ne } from "chunk-LM76R6UX.mjs";
import { Jb as pe, gg as he, kf as ge, pe as fe } from "chunk-PBNCD2KE.mjs";
import { Qg as te, ia as xe } from "chunk-ODCA7OFJ.mjs";
import {
  Ad as be,
  En as H,
  Mm as ve,
  Nm as Re,
  Om as D,
  Pm as k,
  Pn as Ce,
  Um as Te,
  _t as Ee,
  dv as We,
  ev as Me,
  fb as Pe,
  hv as Be,
  mo as M,
  po as De,
  si as ye,
  uo as ee,
  vb as Le,
  yo as Ve,
} from "chunk-AHICRW35.mjs";
import { a as Se, b as ke } from "chunk-X3QW56PA.mjs";
import { a as F } from "chunk-T77QJFCJ.mjs";
import { b as Z, l as ue, o as me } from "chunk-DYNCKUFC.mjs";
import { a as Y } from "chunk-4I6ENMO3.mjs";
import { ia as V, l as ce, m as W, pa as de } from "chunk-V7MLU2WL.mjs";
import { a as X } from "chunk-425IX65M.mjs";
import { e as C } from "chunk-CT63CFX7.mjs";
var B = C(Y(), 1);
var st = V("usePreloadedScope");
function Oe(e, o) {
  if (!o || !Z(e)) return;
  let t = o.tree.get(e);
  !te(t) || t.isLoaded() || (st.debug("Loading scope node", e), t.load());
}
function Ae(e, o) {
  if (!o || !Z(e)) return !1;
  let t = o.tree.get(e);
  return te(t) && !t.isLoaded();
}
function vt(e) {
  let o = ke(),
    t = Ae(e, o);
  (0, B.useEffect)(() => {
    t && Oe(e, o);
  }, [e, o, t]);
}
function Fe(e) {
  let o = (0, B.useContext)(Se),
    t = Ae(e, o);
  (0, B.useEffect)(() => {
    t && Oe(e, o);
  }, [e, o, t]);
}
function He(e) {
  return e === "" || e.startsWith("/") ? e : `/${e}`;
}
function z(e, o, t) {
  return e.replace(Pe, (r, n) => (n === o.id ? t.slug : `:${o.name.toLowerCase()}`));
}
function $e(e, o, t, r = "Home", n) {
  let s = D(o) && !n ? we(o) : void 0,
    i = D(o) ? je(e, o) : null;
  if (!o || !ve(o) || !i) return;
  let d = "";
  if (t && t !== Ce) {
    let a = e.root.getNonDefaultLocale(t);
    a?.slug && (d = "/" + a.slug);
  }
  if (i.id === e.root.homePageNodeId) return d ? d + "/" : r;
  let l = Be(e, i);
  if (l) {
    if (s?.identifier) {
      let a = ee(e, s.identifier);
      if (a) {
        let c = M(e, t),
          u = a.getItemToSlug(c)[s.collectionItemId];
        if (u) {
          let f = a.getSlugVariable();
          if (f) {
            let I = { id: s.collectionItemId, slug: u };
            return d + z(l, f, I);
          }
        }
      }
      return;
    }
    if (be(i) && i.dataIdentifier) {
      let a = ee(e, i.dataIdentifier);
      if (a && !s) {
        let c = a.getSlugVariable();
        if (c) {
          let m = M(e, t),
            u = a.getItemToSlug(m);
          return d + We(l, u, c);
        }
      }
    }
    return d + l;
  }
}
function qe(e) {
  Fe(D(e) ? e.webPageId : void 0);
}
var h = C(Y(), 1);
var Ge = "c1vnemam";
var v = C(Y(), 1);
var ze = C(F(), 1),
  re = (0, v.createContext)(null);
re.displayName = "LinkInputSharedDataContext";
function lo({ tree: e, children: o, localeId: t, homePageName: r, variableInfo: n }) {
  let s = ae();
  X(s === null, "LinkInputSharedDataProvider must be the root provider");
  let i = ie({ tree: e, localeId: t, homePageName: r, variableInfo: n, enabled: !0 });
  return (0, ze.jsx)(re.Provider, { value: i, children: o });
}
function ae() {
  return (0, v.useContext)(re);
}
function ie({ tree: e, localeId: o, homePageName: t = "Home", variableInfo: r, enabled: n }) {
  let s = n ? Ee(e) : null,
    i = M(e, o),
    d = n ? De(e).getWebPageIdToRawPathMap(e) : void 0,
    l = n ? e.root.getDataIdentifierByWebPageIdMap() : W(),
    a = n ? s?.getSlugVariableByIdentifierMap() : void 0,
    c = n ? s?.getItemToSlugByIdentifierMap(i) : void 0,
    m = n ? r?.ids : void 0,
    u = ct(m, d, l, n),
    {
      pageLinksWithSlugValues: f,
      pageLinksWithoutSlugValues: I,
      collectionPageLinksWithSlugInScope: g,
    } = (0, v.useMemo)(() => {
      if (!n)
        return {
          pageLinksWithSlugValues: W(),
          pageLinksWithoutSlugValues: W(),
          collectionPageLinksWithSlugInScope: W(),
        };
      let P = {
        webPageIdToRawPathMap: d,
        dataIdentifierByWebPageIdMap: l,
        slugVariableByIdentifierMap: a,
        itemToSlugByIdentifierMap: c,
        collectionPagesWithVariablesInScope: u,
        routerLocale: i,
        homePageName: t,
        variableInfo: r,
      };
      return {
        pageLinksWithSlugValues: ne({ ...P, collectionPageType: "showSlugValues" }),
        pageLinksWithoutSlugValues: ne({ ...P, collectionPageType: "noSlugInScope" }),
        collectionPageLinksWithSlugInScope: ne({ ...P, collectionPageType: "slugInScope" }),
      };
    }, [n, d, l, a, c, u, i, t, r]);
  return (0, v.useMemo)(
    () => ({
      homePageName: t,
      routerLocale: i,
      webPageIdToRawPathMap: d,
      dataIdentifierByWebPageIdMap: l,
      slugVariableByIdentifierMap: a,
      itemToSlugByIdentifierMap: c,
      collectionPagesWithVariablesInScope: u,
      pageLinksWithSlugValues: f,
      pageLinksWithoutSlugValues: I,
      collectionPageLinksWithSlugInScope: g,
    }),
    [t, i, d, l, a, c, u, f, I, g]
  );
}
function ct(e, o, t, r) {
  return (0, v.useMemo)(() => {
    if (!r) return ce();
    let n = new Set();
    if (!e || !o) return n;
    for (let s of t.keys()) {
      let i = o.get(s);
      !i ||
        !Ve(i).every((a) => {
          if (!a) return !1;
          for (let c of e) if (c.endsWith(a)) return !0;
          return !1;
        }) ||
        n.add(s);
    }
    return n;
  }, [r, e, o, t]);
}
function dt(e, o) {
  if (e.variableSourceIdentifiers)
    for (let t in e.variableSourceIdentifiers) {
      if (e.variableSourceIdentifiers[t] === o) return t;
      let r = e.combined.get(t);
      if (r) {
        for (let [, n] of r)
          if (n.type === "collectionreference" && n.dataIdentifier === o) return t;
      }
    }
}
function ne({
  webPageIdToRawPathMap: e,
  dataIdentifierByWebPageIdMap: o,
  slugVariableByIdentifierMap: t,
  itemToSlugByIdentifierMap: r,
  collectionPagesWithVariablesInScope: n,
  routerLocale: s,
  variableInfo: i,
  homePageName: d,
  collectionPageType: l,
}) {
  let a = new Map();
  if (!e || (l === "slugInScope" && n.size === 0)) return a;
  let c = s.slug ? `/${s.slug}` : "";
  for (let [m, u] of e.entries()) {
    let f = u === "/",
      I = H(u);
    if (f) {
      if (l === "slugInScope") continue;
      let p = k({ webPageId: m }),
        b = c ? c + I : (d ?? I);
      a.set(b, p);
      continue;
    }
    let g = o.get(m);
    if (!g) {
      if (l === "slugInScope") continue;
      let p = k({ webPageId: m });
      a.set(c + I, p);
      continue;
    }
    let P = t?.get(g);
    if (!P) continue;
    let L = P.id,
      w = L;
    if (i && !i.ids.has(L)) {
      for (let p of i.ids)
        if (xe(p, L)) {
          w = p;
          break;
        }
    }
    let y = r?.get(g);
    if (l === "slugInScope" || l === "noSlugInScope") {
      let p = n.has(m),
        b = H(Me(u, P));
      if (l === "slugInScope" && p) {
        X(i, "variableInfo should exist when inScope");
        let S = dt(i, g),
          R = S ? { [L]: Le(w, S) } : void 0,
          T = k({ webPageId: m, pathVariables: R });
        a.set(c + b, T);
      } else if (l === "noSlugInScope" && !p) {
        if (!y) continue;
        let S = Ne(y);
        if (!S) continue;
        let [R, T] = S,
          x = { identifier: g, collectionItemId: R, key: L, value: T },
          K = k({ webPageId: m, pathVariables: { [L]: x } });
        a.set(c + b, K);
      }
      continue;
    }
    if (y)
      for (let p of Object.keys(y)) {
        let b = y[p];
        if (!b) continue;
        let R = H(z(u, P, { id: p, slug: b })),
          T = { identifier: g, collectionItemId: p, key: L, value: b },
          x = k({ webPageId: m, pathVariables: { [L]: T } });
        a.set(c + R, x);
      }
  }
  return a;
}
var N = C(F(), 1),
  ut = /\W+/u;
function mt(e) {
  (e.preventDefault(), e.stopPropagation());
}
function pt(e) {
  return new Set(e.split(ut));
}
var So = ({
    tree: e,
    link: o,
    localeId: t,
    hideSlugValues: r = !1,
    homePageName: n = "Home",
    variableInfo: s,
    ...i
  }) => {
    qe(o);
    let d = ae(),
      l = ie({ tree: e, localeId: t, homePageName: n, variableInfo: s, enabled: d == null }),
      a = d ?? l,
      c = Te(o, a.webPageIdToRawPathMap),
      m = Re(o) ? o.url : "",
      u = c ? "" : m,
      f = $e(e, o, t, n, r) ?? u;
    return (0, N.jsx)(ft, {
      ...i,
      link: o,
      readableLink: f,
      variableInfo: s,
      hideSlugValues: r,
      selectedPageMissing: c,
      sharedData: a,
    });
  },
  ft = (0, h.memo)(function ({
    id: o,
    placeholder: t,
    link: r,
    onChange: n,
    constantChange: s,
    rightChevron: i,
    supportsPageLinks: d,
    hideSlugValues: l,
    supportsVariables: a,
    variableInfo: c,
    autoFocus: m,
    openCompletionsOnFocus: u,
    className: f,
    inputClassName: I,
    enabled: g,
    readOnly: P,
    tabIndex: L,
    onMouseDown: w,
    onClear: y,
    menuOffset: p,
    menuWidth: b,
    menuClassName: S,
    onOpenChange: R,
    backdropEnabled: T,
    linkListStickySectionHeaders: x,
    hasError: K,
    onBlur: Qe,
    "aria-label": _e,
    readableLink: j,
    selectedPageMissing: Je,
    sharedData: Q,
    prependSlashForPathLikeInput: se = !1,
  }) {
    let le = Je || !!K,
      Xe = Ue(),
      [_, Ye] = (0, h.useState)(() => Ke(j)),
      U = l ? Q.pageLinksWithoutSlugValues : Q.pageLinksWithSlugValues,
      O = Q.collectionPageLinksWithSlugInScope,
      Ze = (0, h.useCallback)(
        (A, J) => {
          let E = se && d ? He(A) : A;
          if (J || s) {
            if (E === j) return;
            let it = U.get(E) ?? O.get(E) ?? k({ url: E });
            if ((n(it, J), J)) return;
          }
          let at = Ke(E);
          Ye(at);
        },
        [s, se, j, d, U, O, n]
      ),
      et = (0, h.useMemo)(() => It(U, O, _), [U, O, _]),
      tt = !!c?.idOfMutableVariableProvider,
      ot = a && tt,
      nt = (0, h.useContext)(he) === null,
      [rt] = (0, h.useState)(() => (me(r) || ue(r) || ye(r)) && !ot && nt);
    return (0, N.jsx)(ge, {
      id: o,
      "aria-label": _e,
      clearSelectionOnEmptySearch: !0,
      autoCompleteEnabled: d,
      showAllWhenOpened: D(r),
      tabIndex: L,
      onMouseDown: w,
      searchItemValue: !!_,
      items: et,
      value: j,
      placeholder: t || gt(r, le, d),
      constantChange: !0,
      rightChevron: i,
      onChange: Ze,
      autoFocus: m ?? rt,
      openOnFocus: u,
      menuOffset: p,
      enabled: g,
      readOnly: P,
      hasError: le,
      getSearchTokens: pt,
      className: I,
      wrapperClassName: f,
      onBlur: Qe,
      rightSlot: y
        ? (0, N.jsx)(fe, {
            variant: "clean",
            type: "button",
            className: Ge,
            onMouseDown: mt,
            onClick: (A) => {
              (A.stopPropagation(), y());
            },
            "aria-label": "Clear page link",
            title: "Remove Link",
            children: (0, N.jsx)(pe, {}),
          })
        : void 0,
      onOpenChange: R,
      backdropEnabled: T,
      menuWidth: b,
      menuWithin: Xe,
      menuClassName: S,
      unsaturated: !0,
      stickySectionHeaders: x,
      containOverscroll: !0,
    });
  });
function gt(e, o, t) {
  return o ? "Missing" : de(e) ? "Multiple\u2026" : t ? "Page or URL\u2026" : "URL\u2026";
}
function Ke(e) {
  let o = e.trim(),
    t = o.indexOf("/:");
  t !== -1 && (o = o.substring(t));
  let r = o.split("/").filter(Boolean);
  for (; r.length > 0; ) {
    let n = r.join("/") + "/",
      s = "/" + n;
    if (o.startsWith(s) || o.startsWith(n)) return s;
    r.pop();
  }
  return null;
}
var ht = /\/$/u;
function It(e, o, t) {
  let r = [],
    n = Array.from(e.keys()),
    s = Array.from(o.keys());
  if (t) {
    let i = [];
    [...s, ...n].forEach((a) => {
      if (!a.startsWith(t)) return;
      let c = a.replace(t, ".../");
      i.push({ type: "option", value: a, title: c });
    });
    let l = t.replace(ht, "");
    return (r.push({ type: "section", value: l, title: l, items: i }), r);
  }
  return (
    s.length > 0 &&
      r.push({
        type: "section",
        value: "CMS",
        items: s.map((i) => ({ type: "option", value: i })),
      }),
    n.length > 0 &&
      r.push({
        type: "section",
        value: "Pages",
        items: n.map((i) => ({ type: "option", value: i })),
      }),
    r
  );
}
var Pt = V("invite");
async function Vo(e, o) {
  try {
    let t = await $.post(`/web/projects/${e}/acl`, { ...o, permissions: o.permissions ?? void 0 });
    return { status: 0, aclEntry: { ...t, kind: t.pending ? "invite" : "user" } };
  } catch (t) {
    return q(t)
      ? {
          status: 1,
          editorLimit: t.data.editorLimit,
          licenseType: t.data.licenseType,
          teamId: t.data.teamId,
          teamName: t.data.teamName,
        }
      : G(t)
        ? {
            status: 4,
            projectId: t.data.projectId,
            licenseType: t.data.licenseType,
            editorLimit: t.data.editorLimit,
          }
        : (Pt.reportError(t), { status: t instanceof Ie && t.isTemporary ? 2 : 3 });
  }
}
var Lt = V("invite");
async function Bo(e, { id: o, role: t, permissions: r }) {
  try {
    return (
      await $.post(`/web/projects/${e}/acl/${o}`, { role: t, permissions: r ?? void 0 }),
      { status: 0 }
    );
  } catch (n) {
    return q(n)
      ? {
          status: 1,
          editorLimit: n.data.editorLimit,
          licenseType: n.data.licenseType,
          teamId: n.data.teamId,
          teamName: n.data.teamName,
        }
      : G(n)
        ? {
            status: 3,
            projectId: n.data.projectId,
            licenseType: n.data.licenseType,
            editorLimit: n.data.editorLimit,
          }
        : (Lt.reportError(n), { status: 2 });
  }
}
var jo = () => ({ icon: null, title: void 0, body: "No search results" });
export { $e as a, vt as b, qe as c, Ge as d, lo as e, He as f, So as g, Vo as h, Bo as i, jo as j };
//# sourceMappingURL=chunk-MPNC2VAR.mjs.map
