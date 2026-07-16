import { k as ve } from "./chunk-PPMMTNWW.mjs";
import { Nd as Ie, U as ge, jb as Ce } from "./chunk-H6ES2254.mjs";
import { a as Se } from "./chunk-IZHBIYUK.mjs";
import { a as y } from "./chunk-AWPQ2FI2.mjs";
import { e as fe } from "./chunk-G6GJM6IQ.mjs";
import {
  $b as X,
  Mb as z,
  Mc as le,
  Nb as B,
  Ob as R,
  Pb as V,
  Rb as Q,
  Tb as v,
  Ub as $,
  Vb as G,
  Wb as H,
  Xb as q,
  Yb as W,
  _b as N,
  bc as K,
  cc as Y,
  dc as Z,
  ec as J,
  fc as ee,
  gc as te,
  hc as T,
  ic as ne,
  jc as re,
  kc as ie,
  lc as oe,
  mc as se,
  nc as ae,
  oc as ce,
  pc as ue,
  qc as de,
  rc as he,
} from "./chunk-PBNCD2KE.mjs";
import { Qg as me, Tn as ye, _n as ke } from "./chunk-ODCA7OFJ.mjs";
import { a as b, b as f } from "./chunk-ZJ7GHIS6.mjs";
import { Zt as x, hl as L, oo as pe } from "./chunk-AHICRW35.mjs";
import { a as I, c as S, o as g } from "./chunk-CFUM4JW5.mjs";
import { X as _, Ya as U, ia as j, k as P } from "./chunk-V7MLU2WL.mjs";
import { a as p } from "./chunk-425IX65M.mjs";
import { j as a } from "./chunk-CT63CFX7.mjs";
var Ae = 3,
  c = j("PartialTreeSender"),
  E = P();
function Ne() {
  return new Promise((h, e) => {
    if (typeof MessageChannel < "u") {
      let t = new MessageChannel();
      ((t.port1.onmessage = () => h()),
        (t.port1.onmessageerror = () => e()),
        t.port2.postMessage(null));
    } else setTimeout(h, 0);
  });
}
var Te = class {
  constructor(e, t, n) {
    a(this, "timeline", e);
    a(this, "name");
    a(this, "currentScopeId", "");
    a(this, "timelineCursor");
    a(this, "scopeBufferMap", new Map());
    a(this, "chunkQueue", []);
    a(this, "chunkIndex", 0);
    a(this, "chunkingConfig");
    a(this, "drainingPromise");
    ((this.name = t + "-" + String(Math.round(Math.random() * 1e3))),
      (this.chunkingConfig = { maxNodesPerChunk: n?.maxNodesPerChunk ?? 1e3 }));
  }
  get crdtStore() {
    if (ve(this.timeline)) return this.timeline.store;
  }
  getScopeAsValue(e, t) {
    let n = e.get(t);
    if (n) return this.scopeAsValue(n, e.root.id, e.getService("metadata")?.version !== void 0);
  }
  scopeAsValue(e, t, n) {
    (p(e.parentid === t, "Scope must be a direct child of the root"),
      me(e) && p(e.isLoaded(), "Scope must be loaded"));
    let i = e.cache.getSerializedCache(e);
    if (i) return i;
    if (!n) {
      let r = this.crdtStore,
        o = e.cache.serialized?.hadError;
      if (r && !o) {
        let s = r.getObject(e.id);
        if (s && s.parentid !== Se) return s;
      }
    }
    return ge.valueFromNode(e);
  }
  shouldUseChunking(e, t) {
    if (this.timelineCursor) return !1;
    let n = e.chunkingHints;
    if (!n || n.size === 0) return !1;
    let i = k();
    t && i.add(t);
    for (let r of i)
      if (n.has(r)) return (c.debug(this.name, `chunking required - large page hint: ${r}`), !0);
    return !1;
  }
  serializeTreeChunks(e, t) {
    let n = [],
      i = crypto.randomUUID(),
      r = new Map(),
      o = new Map(),
      s = 0,
      u = k();
    t && u.add(t);
    let l = () => {
        r.size > 0 &&
          (n.push({
            name: this.name,
            timestamp: Date.now(),
            treeChunks: {
              chunkId: i,
              chunkIndex: n.length,
              totalChunks: -1,
              nodes: r,
              childrenMap: o,
              rootId: n.length === 0 ? e.root.id : void 0,
            },
          }),
          (r = new Map()),
          (o = new Map()));
      },
      M = (d) => {
        let F = d.children ?? E;
        (r.set(d.id, { ...d, children: E }),
          o.set(
            d.id,
            F.map((C) => C.id)
          ),
          s++,
          r.size >= this.chunkingConfig.maxNodesPerChunk && l());
        for (let C of F) M(C);
      },
      D = e.root,
      m,
      w = {};
    for (m in D) L[m] || (w[m] = D[m]);
    let O = e.getNodes(u),
      be = { ...w, __class: "RootNode", id: e.root.id, children: E };
    (r.set(e.root.id, be),
      o.set(
        e.root.id,
        O.map((d) => d.id)
      ),
      s++,
      r.size >= this.chunkingConfig.maxNodesPerChunk && l());
    for (let d of O)
      M(this.scopeAsValue(d, e.root.id, e.getService("metadata")?.version !== void 0));
    l();
    let Ee = n.length;
    for (let d of n) d.treeChunks.totalChunks = Ee;
    return (
      c.debug(this.name, `directly chunked tree into ${n.length} chunks with ${s} total nodes`),
      n
    );
  }
  getNextChunk() {
    if (this.chunkQueue.length === 0) return;
    let e = this.chunkQueue[this.chunkIndex];
    return (
      this.chunkIndex++,
      this.chunkIndex >= this.chunkQueue.length && ((this.chunkQueue = []), (this.chunkIndex = 0)),
      e
    );
  }
  hasMoreChunks() {
    return (
      p(this.chunkIndex >= 0, "Chunk index should not be negative"),
      p(this.chunkIndex <= this.chunkQueue.length, "Chunk index should not exceed queue length"),
      this.chunkIndex < this.chunkQueue.length
    );
  }
  async *drainChunks(e) {
    if (!this.hasMoreChunks()) return;
    let t = this.drainingPromise;
    ((this.drainingPromise = new U()),
      t &&
        (c.debug(this.name, "drainChunks already in progress, waiting for it to finish"), await t),
      c.debug(this.name, "drainChunks started"));
    let n = 0,
      i = performance.now();
    try {
      for (; this.hasMoreChunks(); ) {
        if (e?.aborted) {
          (c.debug(this.name, "drainChunks aborted, clearing chunk queue"),
            (this.chunkQueue = []),
            (this.chunkIndex = 0));
          return;
        }
        let r = this.getNextChunk();
        (r &&
          (n++,
          c.debug(
            this.name,
            `sending chunk ${r.treeChunks.chunkIndex + 1} of ${r.treeChunks.totalChunks}`
          ),
          yield r),
          await Ne());
      }
    } finally {
      (await Ne(), (this.timelineCursor = this.timeline.getChangeTrackingCursor()));
      let r = performance.now() - i,
        o = r > 1e3 ? `${(r / 1e3).toFixed(2)}s` : `${Math.round(r)}ms`;
      (c.debug(this.name, `completed sending ${n} chunks in ${o}`),
        c.debug(this.name, "drainChunks completed"),
        this.drainingPromise?.resolve(),
        (this.drainingPromise = void 0));
    }
  }
  resetScopeBuffer(e) {
    (this.scopeBufferMap.clear(),
      (this.currentScopeId = e ?? ""),
      e && ((this.timelineCursor = void 0), this.scopeBufferMap.set(e, performance.now())));
  }
  updateScopeBuffer(e) {
    if (this.currentScopeId === e) return [void 0, void 0];
    if (e === x) return [void 0, void 0];
    if (((this.currentScopeId = e), this.scopeBufferMap.has(this.currentScopeId)))
      return (this.scopeBufferMap.set(this.currentScopeId, performance.now()), [void 0, void 0]);
    let t;
    if (this.scopeBufferMap.size >= Ae) {
      let n = k(),
        i = 1 / 0,
        r;
      for (let [o, s] of this.scopeBufferMap) n.has(o) || (i > s && ((i = s), (r = o)));
      r && (this.scopeBufferMap.delete(r), (t = r));
    }
    return (this.scopeBufferMap.set(this.currentScopeId, performance.now()), [t, e]);
  }
  reset(e) {
    let t = this.timeline.tree;
    if ((this.resetScopeBuffer(e), this.shouldUseChunking(t, e)))
      return (
        (this.chunkQueue = this.serializeTreeChunks(t, e)),
        (this.chunkIndex = 0),
        c.debug(this.name, "initiated direct chunked transfer for tree"),
        null
      );
    let n = this.serializeTree(t, e);
    return ((this.chunkQueue = []), (this.chunkIndex = 0), n);
  }
  update(e) {
    if (!e) return {};
    if (this.hasMoreChunks()) return {};
    let t = this.timeline.tree,
      n = this.timeline.fetchForwardChanges(this.timelineCursor);
    if (!n) {
      if (this.timeline.invalidatedByLoadCompletedDocument(this.timelineCursor))
        return (
          c.debug(
            this.name,
            "cursor invalidated, sending empty update for load completed document"
          ),
          (this.timelineCursor = this.timeline.getChangeTrackingCursor()),
          {}
        );
      if ((this.resetScopeBuffer(e), this.shouldUseChunking(t, e))) {
        ((this.chunkQueue = this.serializeTreeChunks(t, e)), (this.chunkIndex = 0));
        let u = this.getNextChunk();
        if (u)
          return (
            c.debug(
              this.name,
              `starting direct chunked resend with ${this.chunkQueue.length} chunks`
            ),
            u
          );
      }
      let s = this.serializeTree(t, e);
      return (
        c.debug(this.name, "cursor invalidated, sending tree with scope:", e),
        (this.timelineCursor = this.timeline.getChangeTrackingCursor()),
        { name: this.name, tree: s, timestamp: Date.now() }
      );
    }
    let [i, r] = this.updateScopeBuffer(e);
    (i && (c.debug(this.name, "deleting scope by diff:", i), Le(i, n)),
      n.length === 0 && (n = void 0));
    let o;
    if (
      (r && (c.debug(this.name, "adding scope by subtree:", r), (o = this.getScopeAsValue(t, r))),
      n)
    ) {
      let s = this.getAffectedScopeIDsAfterCrossScopeMove(t, n);
      for (let u of s) {
        if (u !== this.currentScopeId) {
          this.scopeBufferMap.has(u) &&
            (c.debug(this.name, "deleting scope due to cross-scope move:", u),
            Le(u, n),
            this.scopeBufferMap.delete(u));
          continue;
        }
        o ||
          (c.debug(this.name, "resending tree with scope due to cross-scope move:", u),
          (o = this.getScopeAsValue(t, u)));
      }
    }
    return { changes: n, scopes: o ? [o] : void 0, timestamp: Date.now() };
  }
  serializeTree(e, t) {
    let n = k();
    t && n.add(t);
    let i = [];
    for (let u of n) {
      let l = this.getScopeAsValue(e, u);
      l && i.push(l);
    }
    let r = e.root,
      o,
      s = {};
    for (o in r) L[o] || (s[o] = r[o]);
    return { version: fe, root: { ...s, __class: "RootNode", id: e.root.id, children: i } };
  }
  getAffectedScopeIDsAfterCrossScopeMove(e, t) {
    let n = new Set();
    for (let i of t) {
      if (!i.previousScope || !i.to.parentid) continue;
      let r = e.get(i.id),
        o = e.getScopeNodeFor(r);
      o && n.add(o.id);
    }
    return n;
  }
};
function Le(h, e) {
  e.push({ id: h, removed: "CanvasNode", to: {} });
}
function k() {
  return new Set([Ie, Ce, pe, ke, ye, x]);
}
var A = class {
    constructor(e) {
      a(this, "callbacks", e);
      a(this, "experimentListeners", new Map());
      a(this, "employeesOnlySettingsListeners", new Map());
      a(this, "projectFeaturesListeners", new Map());
    }
    startUpdatesStream() {
      (Object.keys(S).forEach((e) => {
        let t = (n) => {
          this.callbacks.updateExperiments({ [e]: n });
        };
        (g.addListener(e, t), this.experimentListeners.set(e, t));
      }),
        Object.keys(I).forEach((e) => {
          let t = (n) => {
            this.callbacks.updateEmployeesOnlySettings({ [e]: n });
          };
          (y.addListener(e, t), this.employeesOnlySettingsListeners.set(e, t));
        }));
    }
    getInitialExperiments() {
      let e = {};
      return (
        Object.keys(S).forEach((t) => {
          e[t] = g.get(t);
        }),
        e
      );
    }
    getInitialEmployeesOnlySettings() {
      let e = {};
      return (
        Object.keys(I).forEach((t) => {
          e[t] = y.get(t);
        }),
        e
      );
    }
    initProjectFeatures() {
      f.updated
        .then(() => {
          let e = {};
          (Object.keys(b).forEach((t) => {
            e[t] = f.get(t);
          }),
            this.callbacks.updateProjectFeatures(e),
            this.projectFeaturesListeners.size === 0 &&
              Object.keys(b).forEach((t) => {
                let n = (i) => {
                  this.callbacks.updateProjectFeatures({ [t]: i });
                };
                (f.addListener(t, n), this.projectFeaturesListeners.set(t, n));
              }));
        })
        .catch(_);
    }
    stopUpdatesStream() {
      for (let [e, t] of this.experimentListeners) g.removeListener(e, t);
      for (let [e, t] of this.employeesOnlySettingsListeners) y.removeListener(e, t);
      for (let [e, t] of this.projectFeaturesListeners) f.removeListener(e, t);
      (this.experimentListeners.clear(),
        this.employeesOnlySettingsListeners.clear(),
        this.projectFeaturesListeners.clear());
    }
  },
  xe = class {
    constructor(e, t) {
      a(this, "remoteFlags", e);
      let n = new A(this.remoteFlags);
      (n.startUpdatesStream(),
        this.remoteFlags.updateExperiments(n.getInitialExperiments()),
        this.remoteFlags.updateEmployeesOnlySettings(n.getInitialEmployeesOnlySettings()),
        t?.addEventListener("abort", () => n.stopUpdatesStream(), { once: !0 }));
    }
  };
var Je = {
  component: Q,
  label: X,
  checkbox: R,
  radio: ee,
  breakpoint: B,
  grid: q,
  masonry: K,
  frame: H,
  "frame-round": T,
  stack: re,
  "stack-horizontal": ie,
  "stack-with-data": oe,
  "stack-wrap-horizontal": se,
  "stack-wrap-vertical": ae,
  form: v,
  "form-container": v,
  "form-input": $,
  "form-select": G,
  text: ue,
  svg: N,
  path: Y,
  placeholder: Z,
  boolean: z,
  star: ce,
  polygon: J,
  oval: T,
  overlay: le,
  rectangle: te,
  image: N,
  group: W,
  "collection-item": V,
  "view-box": he,
  vector: de,
  shader: ne,
};
export { A as a, xe as b, Te as c, Je as d };
//# sourceMappingURL=chunk-PJY7BB5K.mjs.map
