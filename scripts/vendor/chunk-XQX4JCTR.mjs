import { a as xe, b as De, c as Ie, g as Me, h as Ne, l as Fe, qa as le } from "./chunk-PPMMTNWW.mjs";
import { a as Q } from "./chunk-XS3TYHUF.mjs";
import { g as he, i as me } from "./chunk-ZAADFPOQ.mjs";
import { Fg as ke, Hh as H } from "./chunk-RYAQJ2V7.mjs";
import { e as Y, h as K, k as Le } from "./chunk-C4EY2TIT.mjs";
import { b as Ue } from "./chunk-HEVPYMM6.mjs";
import { f as P } from "./chunk-BL7YLPCC.mjs";
import { Nh as ce, Oh as V, Qh as Re, ai as Ee } from "./chunk-H6ES2254.mjs";
import { k as de } from "./chunk-IZHBIYUK.mjs";
import { a as be, g as we } from "./chunk-2Q7D34YV.mjs";
import { e as Ce } from "./chunk-G6GJM6IQ.mjs";
import { a as X } from "./chunk-HYVDAETN.mjs";
import { jd as J, jo as Te } from "./chunk-AHICRW35.mjs";
import { a as k } from "./chunk-VKWF2PPO.mjs";
import { b as ve } from "./chunk-X3QW56PA.mjs";
import { o as Se } from "./chunk-CFUM4JW5.mjs";
import { b as ye } from "./chunk-DYNCKUFC.mjs";
import { a as ge } from "./chunk-4I6ENMO3.mjs";
import { j as F } from "./chunk-GX2Q2FIZ.mjs";
import { Y as W, Z as B, ia as C } from "./chunk-V7MLU2WL.mjs";
import { a as h, b as pe } from "./chunk-425IX65M.mjs";
import { e as fe, j as d } from "./chunk-CT63CFX7.mjs";
function Z(c) {
  let { appEnvironment: t, session: e, seq: r, count: n, reasons: o, changes: i } = c;
  return { appEnvironment: t, session: e, seq: r, changes: i, count: n, reasons: o };
}
function Ve(c, t) {
  return { ...c, next: t };
}
function Ae(c) {
  return "rows" in c;
}
var M = C("remote:sync"),
  Ke = 5e4,
  ee = class {
    constructor(t, e = Ke) {
      d(this, "committer", t);
      d(this, "maxRowsPerMessage", e);
      d(this, "session", 0);
      d(this, "treeVersion", 0);
      d(this, "updatesSeen", 0);
      d(this, "init", 0);
      d(this, "expectingInitialUpdates", 0);
      d(this, "hasError", !1);
      d(this, "waitingForTree", !1);
      d(this, "messageSeq", 0);
      d(this, "unconfirmedCrdtUpdates", new Map());
      d(this, "appEnvironment");
    }
    get waitingForInitialUpdates() {
      return this.expectingInitialUpdates > this.updatesSeen;
    }
    get isLoading() {
      return this.waitingForTree || this.waitingForInitialUpdates;
    }
    get isReady() {
      return !(this.hasError || this.waitingForTree || this.waitingForInitialUpdates);
    }
    error(t, e) {
      return ((this.hasError = !0), Error(t, { cause: e }));
    }
    recordHistoricTree(t, e) {
      this.committer.recordHistoricTree(t, {
        containsLocalEdits: this.committer.hasLocalEdits() || this.unconfirmedCrdtUpdates.size > 0,
        hasHierarchyChanges: e,
      });
    }
    hasHierarchyChangesAfterVersion(t) {
      if (this.committer.hasHierarchyChangesAfterVersion(t)) return !0;
      for (let e of this.unconfirmedCrdtUpdates.values())
        if (e.rows.some((r) => r.key === "parentid")) return !0;
      return !1;
    }
    checkRemoteVersion(t, e, r = this.treeVersion) {
      return (
        h(Number.isFinite(t), `${e === "confirm" ? "Confirm" : "Update"} must have tree version`),
        t <= r ? (M.debug(`ignoring old ${e}:`, t, " <= ", r), "ignore") : "apply"
      );
    }
    verify(t, e) {
      let r = this.committer.getTreeForVersion(t);
      if (!r) return (M.debug("verify: unable to find tree with version", t), !0);
      if (r.containsLocalEdits)
        return (M.debug("verify: unable verify an entry with local edits"), !0);
      let n = r.tree,
        o = n.computeTreeHash();
      if (o !== e) {
        if ((M.warn("verify: failed", o, "!==", e), e === 0)) return !0;
        M.reportError("Tree verification failed", {
          localHash: o,
          serverHash: e,
          treeVersion: t,
          treeSize: n.size(),
        });
      } else M.debug("verify: passed; hash:", e);
      return o === e;
    }
    setTree(t, e, r) {
      (M.info("setTree", e),
        this.committer.reset(t, r),
        (this.treeVersion = e),
        (this.waitingForTree = !1),
        (this.hasError = !1),
        this.unconfirmedCrdtUpdates.clear(),
        this.recordHistoricTree(e, !1));
    }
    resetSession() {
      ((this.messageSeq = 0),
        this.unconfirmedCrdtUpdates.clear(),
        (this.treeVersion = 0),
        (this.waitingForTree = !1));
    }
    debugResetSessionAndTree(t) {
      (this.resetSession(), this.setTree(t, 0));
    }
    handleInit(t, e) {
      return (
        (this.init += 1),
        this.init === 1 && (Y("wsTreeInitMessages"), K(e)),
        M.info("init", this.init, {
          treeVersion: t,
          initialUpdates: e,
          localTreeVersion: this.treeVersion,
        }),
        (this.hasError = !1),
        (this.expectingInitialUpdates = e),
        (this.updatesSeen = 0),
        this.treeVersion !== t || this.waitingForTree
          ? ((this.waitingForTree = !0), !0)
          : ((this.committer.remoteTreeVersion = t), this.recordHistoricTree(t, !1), !1)
      );
    }
    hasMessageForRemote() {
      return this.committer.hasLocalEdits();
    }
    hasOnlyEmptyChangesForRemote() {
      return this.committer.hasLocalEdits() ? this.committer.hasOnlyEmptyChangesForRemote() : !0;
    }
    onLoadedFirstData() {
      this.committer.resetLastSeqTaken();
    }
    createMessages(t) {
      let e = this.committer.takePendingRows(t);
      if (e.length <= 0) return [];
      let r = this.committer.getEditReasons();
      if (e.length <= this.maxRowsPerMessage) return [this.createMessage(e, r)];
      let n = [],
        o = 0,
        i = 0,
        s = e.at(0);
      h(s);
      for (let a = 1; a <= e.length; a++) {
        let l = e[a];
        (l && we(s, l)) ||
          (i > o &&
            a - o > this.maxRowsPerMessage &&
            (n.push(this.createMessage(e.slice(o, i), r)), (o = i)),
          (i = a),
          l && (s = l));
      }
      return (n.push(this.createMessage(e.slice(o), r)), n);
    }
    createMessage(t, e) {
      let r = {
        seq: ++this.messageSeq,
        rows: t,
        reasons: e,
        ts: Date.now(),
        appEnvironment: this.appEnvironment,
      };
      return (
        M.debug(
          "create CRDT rows message:",
          t.length,
          "inflight:",
          this.unconfirmedCrdtUpdates.size,
          r.seq
        ),
        this.unconfirmedCrdtUpdates.set(r.seq, r),
        r
      );
    }
    hasUnconfirmedChanges() {
      return this.unconfirmedCrdtUpdates.size > 0;
    }
    createUnconfirmedMessages() {
      h(this.isReady);
      let t = Array.from(this.unconfirmedCrdtUpdates.values());
      return (
        this.unconfirmedCrdtUpdates.clear(),
        t.map((e) => {
          let r = { ...e, seq: ++this.messageSeq };
          return (this.unconfirmedCrdtUpdates.set(r.seq, r), r);
        })
      );
    }
    handleConfirmMessage(t) {
      if (this.hasError || this.waitingForTree) return;
      let e = t.seq,
        r = this.unconfirmedCrdtUpdates.get(e);
      h(r, () => `update not found for seq: ${e}`);
      let n = r.rows.some((o) => o.key === "parentid");
      (this.unconfirmedCrdtUpdates.delete(e),
        this.checkRemoteVersion(t.next, "confirm") === "apply" &&
          ((this.treeVersion = t.next),
          this.committer.handleRemoteConfirm(t.next, {
            containsLocalEdits:
              this.committer.hasLocalEdits() || this.unconfirmedCrdtUpdates.size > 0,
            hasHierarchyChanges: n,
          })));
    }
    handleRemotePatches(t, e, r, n = !1) {
      if (
        !(this.hasError || this.waitingForTree) &&
        !(!n && this.checkRemoteVersion(e, "update") !== "apply")
      )
        return (
          (this.treeVersion = e),
          this.committer.handleRemotePatches(t, e, {
            containsLocalEdits:
              this.committer.hasLocalEdits() || this.unconfirmedCrdtUpdates.size > 0,
            hasHierarchyChanges: r,
          })
        );
    }
    loadedAllScopes() {
      this.committer.loadedAllScopes({
        containsLocalEdits: this.committer.hasLocalEdits() || this.unconfirmedCrdtUpdates.size > 0,
        hasHierarchyChanges: !1,
      });
    }
    loadOneScope(t, e) {
      return this.committer.loadOneScope(t, e);
    }
  };
var $ = class {
  constructor() {
    d(this, "rowArrays", []);
    d(this, "rowCount", 0);
  }
  get length() {
    return this.rowCount;
  }
  add(t) {
    t.length !== 0 && (this.rowArrays.push(t), (this.rowCount += t.length));
  }
  toArray() {
    return Array.from(this);
  }
  some(t) {
    for (let e of this.rowArrays) for (let r of e) if (t(r)) return !0;
    return !1;
  }
  *[Symbol.iterator]() {
    for (let t of this.rowArrays) yield* t;
  }
};
var Qe = { children: !0, contentHash: !0, parentid: !0, $keep: !0 };
function Ze(c, t) {
  if (c !== "cached") return t;
}
function Pe(c) {
  if (c === void 0) return;
  let t = JSON.stringify(c, Ze);
  if (t !== void 0) return JSON.parse(t);
}
function et(c, t) {
  return k(c, t) ? !1 : c === void 0 || t === void 0 ? !0 : !k(Pe(c), Pe(t));
}
function Oe(c, t, e) {
  let r = c.getHierarchy(),
    n = t.getHierarchy(),
    o = new Set(),
    i = !1;
  function s(m, f) {
    if ((o.add(m), (f += "." + m), !n.has(m))) ((i = !0), e.push("-node: " + f));
    else {
      let g = [],
        y = r.getChildrenIds(m),
        b = n.getChildrenIds(m);
      k(y, b) || g.push(` .children: [${y.join(",")}] != [${b.join(",")}]`);
      let se = c.getLatest(m),
        p = t.getLatest(m),
        S = new Set();
      for (let w of se?.keys() ?? []) S.add(w);
      for (let w of p?.keys() ?? []) S.add(w);
      for (let w of S) {
        if (w in Qe) continue;
        let I = c.getObjectKey(m, w),
          L = t.getObjectKey(m, w);
        et(I, L) && g.push(` .${w}: ${JSON.stringify(I)} != ${JSON.stringify(L)}`);
      }
      if (g.length > 0) {
        ((i = !0), e.push("!node: " + f));
        for (let w of g) e.push(w);
      }
    }
    for (let g of r.getChildrenIds(m)) s(g, f);
  }
  function a(m, f) {
    ((f += "." + m), o.has(m) || ((i = !0), e.push("+node: " + f)));
    for (let g of n.getChildrenIds(m)) a(g, f);
  }
  let l = r.getRootId();
  l && s(l, "");
  let u = n.getRootId();
  return (u && a(u, ""), i);
}
var O = C("remote:connection"),
  T = C("remote:verify"),
  tt = /Version-(\d+)/u,
  rt = /\d+\.crdt.*/u,
  nt = 5,
  ue = class {
    constructor(t, e, r, n, o, i, s) {
      d(this, "componentLoader", e);
      d(this, "userId", r);
      d(this, "projectId", n);
      d(this, "callbacks", o);
      d(this, "localCache", i);
      d(this, "treeSync");
      d(this, "remoteUpdates", []);
      d(this, "ignoreTreeVerifies", !1);
      d(this, "ignoreTreeVerifyVersion", 0);
      d(this, "shouldCrashFromDebug", !1);
      d(this, "pendingTreeVerify");
      d(this, "documentHidden", !1);
      d(this, "loader");
      d(this, "documentSize", 0);
      d(this, "loaderPromise");
      d(this, "recorder");
      (h(t instanceof Fe, "tree updater must be a CrdtTreeCommitter"),
        (this.treeSync = new ee(t)),
        (this.treeSync.appEnvironment = s),
        (this.treeSync.waitingForTree = !0),
        !F.benchmarkSkipTreeVerify &&
          Se.isOn("verifyTreeOnCommit") &&
          (t.onCommitVerifyError = this.handleCommitVerifyError.bind(this)),
        Object.defineProperty(window, "store", { configurable: !0, get: () => this.store }));
    }
    get verifyIsBlockedByLoader() {
      return !!(this.loader?.activelyLoadingScope || this.treeSync.committer.isPartialLoading);
    }
    get unconfirmedCrdtUpdates() {
      return this.treeSync.unconfirmedCrdtUpdates;
    }
    get treeVersion() {
      return this.treeSync.treeVersion;
    }
    get isReady() {
      return this.treeSync.isReady;
    }
    get waitingForTree() {
      return this.treeSync.waitingForTree;
    }
    get store() {
      return this.treeSync.committer.store;
    }
    get isLoading() {
      return this.treeSync.isLoading;
    }
    get localUpdatesInFlight() {
      return [];
    }
    get localUpdatesAtInit() {
      return [];
    }
    get hasError() {
      return this.treeSync.hasError;
    }
    get init() {
      return this.treeSync.init;
    }
    get session() {
      return this.treeSync.session;
    }
    setTree(t, e, r) {
      this.treeSync.setTree(t, e, r);
    }
    get hasUpdatesToProcess() {
      return !this.waitingForTree && this.remoteUpdates.length > 0;
    }
    resetSession() {
      ((this.pendingTreeVerify = void 0), this.treeSync.resetSession());
    }
    setDocumentHidden(t) {
      let e = this.documentHidden;
      ((this.documentHidden = t), e && !t && this.maybeEvaluatePendingTreeVerify());
    }
    maybeEvaluatePendingTreeVerify() {
      let t = this.pendingTreeVerify;
      t !== void 0 &&
        (this.documentHidden ||
          this.treeSync.hasError ||
          (this.treeSync.isReady &&
            (this.remoteUpdates.length > 0 ||
              this.verifyIsBlockedByLoader ||
              this.treeSync.treeVersion < t.version ||
              ((this.pendingTreeVerify = void 0),
              this.handleTreeVerify(t.url, t.version, t.hash)))));
    }
    debugResetSessionAndTree(t) {
      this.treeSync.debugResetSessionAndTree(t);
    }
    debugCrash() {
      this.shouldCrashFromDebug = !0;
    }
    canProcessChanges() {
      if (!this.treeSync.isReady || this.shouldCrashFromDebug) {
        if (this.treeSync.hasOnlyEmptyChangesForRemote() || this.treeSync.waitingForTree) return !1;
        let t = "is not ready";
        throw (
          this.treeSync.hasError
            ? (t = "had an error")
            : this.treeSync.waitingForTree
              ? (t = "is waiting for tree data")
              : this.treeSync.waitingForInitialUpdates
                ? (t = "is waiting for initial updates")
                : this.shouldCrashFromDebug &&
                  ((this.shouldCrashFromDebug = !1), (t = "is doing a deliberate crash test")),
          this.treeSync.error("cannot create local updates when the document " + t)
        );
      }
      return !0;
    }
    processViewOnly() {
      this.store.seq <= 0 ||
        (this.treeSync.onLoadedFirstData(),
        O.warn("cannot create local updates when the user is a viewer"));
    }
    handleRows(t, e) {
      this.remoteUpdates.push(e);
    }
    handleConfirmRows(t) {
      this.remoteUpdates.push(t);
    }
    handleInit(t, e) {
      return (
        (this.remoteUpdates.length = 0),
        (this.pendingTreeVerify = void 0),
        { needsDownload: this.treeSync.handleInit(t, e) }
      );
    }
    handleTreeUpdate() {
      throw new Error("Json tree updates cannot be handled by Crdt data handler");
    }
    handleTreeVerify(t, e, r) {
      if (!this.treeSync.isReady || this.ignoreTreeVerifies || this.ignoreTreeVerifyVersion === e)
        return;
      if (this.documentHidden) {
        (T.debug("remote tree verify deferred while document hidden", {
          version: e,
          clientVersion: this.treeSync.treeVersion,
          queuedUpdates: this.remoteUpdates.length,
        }),
          (this.pendingTreeVerify = { url: t, version: e, hash: r }));
        return;
      }
      if (this.verifyIsBlockedByLoader) {
        (T.debug("remote tree verify deferred while loader is integrating scopes", {
          version: e,
          clientVersion: this.treeSync.treeVersion,
          queuedUpdates: this.remoteUpdates.length,
          activelyLoadingScope: this.loader?.activelyLoadingScope ?? !1,
          isPartialLoading: this.treeSync.committer.isPartialLoading,
        }),
          (this.pendingTreeVerify = { url: t, version: e, hash: r }));
        return;
      }
      if (this.treeSync.hasHierarchyChangesAfterVersion(e)) {
        (T.debug("remote tree verify skipped due to later hierarchy changes", {
          version: e,
          hash: r,
        }),
          this.verifyStoreTreeWithCanvasTree(r));
        return;
      }
      let o = this.treeSync.committer.branches.getStore(be).getHierarchy().computeTreeHash();
      if (o !== r) {
        (T.error("remote tree verify failed", { version: e, hash: r, localHash: o }),
          this.localCache?.abortAndClearCache(),
          this.verifyLocalTreeWithServer(t, e));
        let a = new Error("Local document out of sync with document on server.");
        ((this.remoteUpdates.length = 0), (this.treeSync.hasError = !0), this.callbacks.error(a));
        return;
      }
      if (!this.verifyStoreTreeWithCanvasTree(r)) return;
      T.debug("tree verify passed", { version: e, hash: r });
      let i = X(),
        s = B.isDevelopment || B.isLocal;
      (i || s) && this.verifyLocalTreeWithServer(t, e);
    }
    verifyStoreTreeWithCanvasTree(t) {
      let e = this.treeSync.committer.verifyTree();
      if (!e) return !0;
      let r = {
        version: this.treeSync.treeVersion,
        hash: t,
        queuedUpdates: this.remoteUpdates.length,
        activelyLoadingScope: this.loader?.activelyLoadingScope ?? !1,
        isPartialLoading: this.treeSync.committer.isPartialLoading,
        documentHidden: this.documentHidden,
        hadPendingTreeVerify: this.pendingTreeVerify !== void 0,
        treeSize: this.treeSync.committer.tree.size(),
        detail: e.message,
      };
      return (T.error("local tree verify failed", r), this.crashFromTreeVerifyFailure(e, r), !1);
    }
    crashFromTreeVerifyFailure(t, e) {
      (T.reportError(t, e),
        (this.remoteUpdates.length = 0),
        (this.treeSync.hasError = !0),
        this.callbacks.error(new Error(`Tree out of sync with store. ${t.message}`)));
    }
    handleCommitVerifyError(t, e) {
      let r = {
        version: this.treeSync.treeVersion,
        queuedUpdates: this.remoteUpdates.length,
        isPartialLoading: this.treeSync.committer.isPartialLoading,
        documentHidden: this.documentHidden,
        treeSize: this.treeSync.committer.tree.size(),
        ...e,
      };
      (T.error("commit tree verify failed", r), this.crashFromTreeVerifyFailure(t, r));
    }
    applyCollectedRows(t, e) {
      if (t.length === 0) return;
      let r = this.treeSync.committer,
        n = Me(r.branches, t, r.effectiveViewBranchId);
      Ne(r.effectiveViewStore, r.tree, n);
      let o = t.some((s) => s.key === "parentid"),
        i = this.treeSync.handleRemotePatches(n, e, o, !0);
      (i && this.loader?.addNodeChanges(i),
        this.recorder && this.recorder({ source: "remote", rows: t.toArray() }));
    }
    processRemoteUpdates() {
      if (
        (O.debug(
          "processRemoteUpdates: starting - waitingForTree:",
          this.treeSync.waitingForTree,
          "waitingForInitialUpdates:",
          this.treeSync.waitingForInitialUpdates,
          "hasError:",
          this.treeSync.hasError,
          "isReady:",
          this.isReady,
          "remoteUpdates.length:",
          this.remoteUpdates.length
        ),
        this.treeSync.waitingForTree)
      ) {
        O.debug("processRemoteUpdates: exiting early - waitingForTree=true");
        return;
      }
      if (this.loader?.activelyLoadingScope) {
        O.debug("processRemoteUpdates: exiting early - activelyLoadingScope=true");
        return;
      }
      let t;
      try {
        if (
          (h(
            !this.treeSync.committer.tree.hasUncommittedChanges(),
            "tree must not have uncommitted changes"
          ),
          this.shouldCrashFromDebug)
        )
          throw ((this.shouldCrashFromDebug = !1), Error("RemoteDocument CrashTest"));
        let e = new $(),
          r = this.treeSync.treeVersion;
        for (; this.remoteUpdates.length > 0; ) {
          let n = this.remoteUpdates.shift();
          if (!n) break;
          if (((t = n), !Ae(n))) {
            (this.applyCollectedRows(e, r), (e = new $()), (r = this.treeSync.treeVersion));
            let o = this.treeSync.unconfirmedCrdtUpdates.get(n.seq)?.rows,
              i = this.treeSync.treeVersion;
            if (
              (this.treeSync.handleConfirmMessage(n),
              this.localCache &&
                o &&
                this.treeSync.treeVersion > i &&
                this.localCache.addRows(o, this.treeSync.treeVersion),
              (r = this.treeSync.treeVersion),
              this.treeSync.waitingForTree)
            )
              break;
            continue;
          }
          if (
            (h(typeof n.next == "number", "Update must have tree version"),
            this.treeSync.checkRemoteVersion(n.next, "update", r) === "ignore")
          ) {
            this.treeSync.updatesSeen += 1;
            continue;
          }
          (de.verifyBatches(n.rows),
            (r = n.next),
            e.add(n.rows),
            this.localCache?.addRows(n.rows, n.next),
            (this.treeSync.updatesSeen += 1));
        }
        if ((this.applyCollectedRows(e, r), this.loader)) {
          let n = this.treeSync.committer.tree.root.children;
          if (!n.some((i) => H(i) && i.isValid())) {
            O.info("cannot show any page, forcing load of next page");
            let i = n.find((a) => H(a));
            if (!i) throw Error("No scope to load");
            let s = this.loader.loadScope(i.id);
            if (!s) throw Error("Unable to load scope");
            this.treeSync.loadOneScope(s, !1);
          }
        }
        this.callbacks.updateProcessed(this.treeSync.committer.tree);
      } catch (e) {
        let r = W(e);
        throw (
          (this.remoteUpdates.length = 0),
          O.error("Error processing remote updates:", r),
          O.debug("Last update:", t),
          this.callbacks.errorRecoverable(),
          this.treeSync.error(r.message),
          r
        );
      }
      this.maybeEvaluatePendingTreeVerify();
    }
    get hasPendingTreeVerify() {
      return this.pendingTreeVerify !== void 0;
    }
    async verifyTreeWithServer() {
      let t = `/projects/${this.projectId}/tree/latest?forceSnapshot=true`,
        e = new URL(le(t)),
        r;
      try {
        ((this.ignoreTreeVerifies = !0), (r = await fetch(e, await P.withAuthorizationHeader({}))));
      } finally {
        this.ignoreTreeVerifies = !1;
      }
      if (!r.ok) throw Error(`unable to fetch document json: ${r.status} ${r.statusText}`);
      let n = r.headers.get("etag") || "",
        o = Number.parseInt(n.match(tt)?.[1] ?? "0", 10);
      if (!Number.isFinite(o) || o <= 0)
        throw Error(`unable to parse document tree version from: ${n}`);
      let i = this.treeSync.treeVersion - o;
      this.ignoreTreeVerifyVersion = o;
      let s = new Uint8Array(await r.arrayBuffer()),
        a = this.compareLocalStoreWithServerCrdt(s, o);
      if (a) throw a;
      if (!this.verifyStoreTreeWithCanvasTree(0)) throw Error("Tree out of sync with store.");
      return i;
    }
    flushUpdates(t) {
      let e = this.treeSync.createMessages(this.userId);
      for (let r of e) t.sendMessage({ type: "rows", value: r });
      return e.length > 0;
    }
    resendUnconfirmedUpdates(t) {
      let e = this.treeSync.createUnconfirmedMessages();
      for (let r of e) t.sendMessage({ type: "rows", value: r });
    }
    handleNetworkReady(t) {
      return (this.resendUnconfirmedUpdates(t), this.maybeSend(t));
    }
    getDocumentURL() {
      return new URL(le(`/projects/${this.projectId}/tree/latest`));
    }
    cancelAndClearLoader() {
      (this.loader?.scheduler.cancel(), (this.loader = void 0));
    }
    maybeSend(t) {
      if (!this.treeSync.isReady || !this.treeSync.hasMessageForRemote()) return "nothingToSend";
      if (this.treeSync.unconfirmedCrdtUpdates.size >= nt) return "postpone";
      let r = this.treeSync.createMessages(this.userId);
      if (r.length === 0) return "nothingToSend";
      for (let n of r) t.sendMessage({ type: "rows", value: n });
      return "didSend";
    }
    createLoader(t, e, r) {
      this.loader?.scheduler.cancel();
      let n = new me(
        this.treeSync.committer.createStagedDocumentLoaderStoreTarget(),
        this.projectId,
        this.componentLoader,
        e,
        t,
        r
      );
      return (
        (this.loader = n),
        n.on("loadedFirstData", () => {
          this.treeSync.onLoadedFirstData();
        }),
        this.loader
      );
    }
    finishLoading() {
      this.loader = void 0;
    }
    compareLocalStoreWithServerCrdt(t, e) {
      let { remoteStore: r, compareResult: n } = this.createRemoteStore(t);
      T.debug(
        "local:",
        this.store.getHierarchy().computeTreeHash(),
        this.store.getHierarchy().sizeWithoutReplicas(),
        "remote:",
        r.getHierarchy().computeTreeHash(),
        r.getHierarchy().sizeWithoutReplicas(),
        "version:",
        e
      );
      let o,
        i = [];
      return (
        Oe(this.store, r, i)
          ? (T.warn(
              `stores are different
` +
                i.join(`
`)
            ),
            (o = Error("Local document different from server document.")),
            T.reportError(o, {
              differences: i,
              localOnlyRows: n.extra.length,
              remoteOnlyRows: n.missing.length,
            }))
          : n.extra.length > 0 || n.missing.length > 0
            ? T.debug("stores are same after reconciling rows", {
                localOnlyRows: n.extra.length,
                remoteOnlyRows: n.missing.length,
              })
            : T.debug("stores are same"),
        o
      );
    }
    createRemoteStore(t) {
      let e = new de({ client: 0, user: "" });
      e.fromBuffer(t);
      let r = this.treeSync.committer.branches,
        n = new ke(e),
        o = r.activeBranchId,
        i = e,
        s = { extra: [], missing: [] };
      for (let a of r.getBranchPath(o)) {
        let l = r.getStore(a);
        i = n.getStore(a);
        let u = l.compare(i.manifest);
        for (let m of u.extra) s.extra.push(m);
        for (let m of u.missing) s.missing.push(m);
        this.appendLocalRowsMissingFromServer(l, i, u.extra);
      }
      return { remoteStore: i, compareResult: s };
    }
    appendLocalRowsMissingFromServer(t, e, r) {
      if (r.length === 0) return;
      let n = new Map();
      for (let i of t.getSerializableRows()) {
        let s = `${i.client}:${i.seq}`,
          a = n.get(s);
        if (a) {
          a.push(i);
          continue;
        }
        n.set(s, [i]);
      }
      let o = [];
      for (let i of r) {
        let s = n.get(`${i.client}:${i.seq}`);
        h(s, () => `unable to find local rows for timestamp ${i.client} ${i.seq}`);
        for (let a of s) o.push(a);
      }
      e.addSerializableRows(o);
    }
    async verifyLocalTreeWithServer(t, e) {
      try {
        let r = t.replace(rt, e + ".crdt"),
          n = new URL(r);
        T.debug("verifying local tree with server crdt:", n);
        let o = await fetch(n, await P.withAuthorizationHeader({}));
        if (!o.ok)
          if (o.status === 404) {
            let a = this.getDocumentURL();
            if (
              (T.debug("404, retrying crdt with:", a),
              (o = await fetch(a, await P.withAuthorizationHeader({}))),
              o.ok)
            ) {
              if (!o.headers.get("etag")?.includes(e.toString()))
                throw Error(`lastest tree version does not match: ${o.headers.get("etag")} ${e}`);
            } else throw Error(`unable to fetch latest crdt document: ${o.status} ${o.statusText}`);
          } else throw Error(`unable to fetch crdt document: ${o.status} ${o.statusText}`);
        let i = new Uint8Array(await o.arrayBuffer());
        T.debug("using crdt from server");
        let s = this.compareLocalStoreWithServerCrdt(i, e);
        if (s) throw s;
      } catch (r) {
        (T.error("Error:", r), this.callbacks.error(W(r)));
      }
    }
    getRowsToSend() {
      return this.treeSync.committer.takePendingRows(this.userId);
    }
    loadedAllScopes() {
      (this.treeSync.loadedAllScopes(), this.maybeEvaluatePendingTreeVerify());
    }
    loadOneScope(t, e) {
      let r = this.treeSync.loadOneScope(t, e);
      return (this.maybeEvaluatePendingTreeVerify(), r);
    }
    remoteUpdateCount() {
      return this.remoteUpdates.length;
    }
    hasUnconfirmedChanges() {
      return this.treeSync.hasUnconfirmedChanges();
    }
    resetTreesForRecovery(t) {
      if (!this.loader) {
        let e = [],
          r = this.store.getObject(this.treeSync.committer.tree.root.id);
        return Le({ version: Ce, root: r }, this.componentLoader, e);
      }
      return this.loader.resetForCrashRecovery(t);
    }
    error(t, e) {
      return this.treeSync.error(t, e);
    }
  };
var A = fe(ge(), 1);
var _e = Symbol("uninitialized");
function rr(c, t, e, r = {}) {
  let n = ve(),
    { deepEqual: o = !1 } = r,
    i = Array.isArray(e) ? e : [e],
    s = (0, A.useCallback)((m) => {
      let f = [...i, m],
        g = n.scheduler.changes.observe(...f);
      return () => n.scheduler.changes.removeObserver(g);
    }, i),
    a = (0, A.useCallback)(c, t),
    l = (0, A.useRef)(_e),
    u = (0, A.useCallback)(() => {
      let m = l.current,
        f;
      return m === _e
        ? ((f = a()), (l.current = f), f)
        : ((f = a()), (o ? k(m, f) : Te(m, f)) ? m : ((l.current = f), f));
    }, [o, a]);
  return (0, A.useSyncExternalStore)(s, u);
}
var Be = class {
  constructor() {
    d(this, "undoBuffer", []);
    d(this, "redoBuffer", []);
    d(this, "undoGroup", []);
    d(this, "scheduledEndUndoGroup");
  }
  canUndo(t) {
    return !!this.undoBuffer.at(-1)?.canApply(t);
  }
  peekUndo() {
    return this.undoBuffer.at(-1);
  }
  undo(t, e) {
    let r = this.peekUndo();
    if (!r?.canApply(t)) return;
    (this.undoBuffer.pop(), r.undo(t));
    let n = He(r);
    (e && (n.metadata = { ...n.metadata, ...e }), this.redoBuffer.push(n));
    let o = this.undoBuffer.length;
    return (
      this.undoGroup.forEach((i, s) => {
        this.undoGroup[s] = Math.min(i, o);
      }),
      r
    );
  }
  canRedo(t) {
    return this.redoBuffer.at(-1)?.canApply(t) === !0;
  }
  peekRedo() {
    return this.redoBuffer.at(-1);
  }
  redo(t, e) {
    let r = this.peekRedo();
    if (!r?.canApply(t)) return;
    (this.redoBuffer.pop(), r.redo(t));
    let n = He(r);
    return (e && (n.metadata = { ...n.metadata, ...e }), this.undoBuffer.push(n), r);
  }
  beginUndoGroup() {
    this.undoGroup.push(this.undoBuffer.length);
  }
  discardUndoGroup(t) {
    let e = this.undoGroup.pop();
    if (e === void 0 || e >= this.undoBuffer.length) return;
    let r = this.undoBuffer.splice(e);
    for (let n = r.length - 1; n >= 0; n--) r[n]?.undo(t);
    return r[0];
  }
  scheduleEndUndoGroup() {
    let t = this.undoGroup.pop();
    t !== void 0 && (t >= this.undoBuffer.length || (this.scheduledEndUndoGroup = t));
  }
  clearUndoStack() {
    ((this.undoBuffer.length = 0),
      (this.redoBuffer.length = 0),
      (this.undoGroup.length = 0),
      (this.scheduledEndUndoGroup = void 0));
  }
  addUndoEntry(t) {
    (this.undoBuffer.push(t), (this.redoBuffer.length = 0));
  }
  getUndoBufferSize() {
    return this.undoBuffer.length;
  }
};
function He(c) {
  return Object.assign(Object.create(Object.getPrototypeOf(c)), c);
}
var v = fe(ge(), 1);
var ot = 0,
  te = class {
    constructor() {
      d(this, "id", ++ot);
      d(this, "currentRtt", NaN);
      d(this, "rtts", []);
      d(this, "rttIndex", 0);
      d(
        this,
        "pending",
        Array.from(Array(128), () => ({ type: "", time: 0 }))
      );
      d(this, "start", 0);
      d(this, "end", 0);
      d(this, "overflow", 0);
      d(this, "lastSendTime", 0);
      d(this, "bytesSent", 0);
      d(this, "bytesReceived", 0);
    }
    read() {
      let { bytesSent: t, bytesReceived: e, id: r } = this;
      return ((this.bytesSent = 0), (this.bytesReceived = 0), [t, e, this.rtt(), r]);
    }
    computeRtt() {
      let t = this.rtts.length;
      if (t === 0) {
        this.currentRtt = NaN;
        return;
      }
      let e = 0;
      for (let r of this.rtts) e += r;
      this.currentRtt = e / t;
    }
    lastSend() {
      return this.lastSendTime;
    }
    rtt() {
      return (
        Number.isNaN(this.currentRtt) && this.computeRtt(),
        Math.max(this.currentRtt || 0, this.pendingRtt())
      );
    }
    pendingRtt() {
      if (this.start === this.end) return 0;
      let t = this.pending[this.start];
      return performance.now() - t.time;
    }
    pendingCount(t) {
      if (!t) return this.start > this.end ? 128 - this.start + this.end : this.end - this.start;
      let e = 0;
      for (let r = this.start; r !== this.end; r = (r + 1) & 127) this.pending[r].type === t && e++;
      return e;
    }
    sent(t, e) {
      ((this.bytesSent += e.length),
        this.end === (this.start === 0 ? 127 : this.start - 1) &&
          ((this.start = (this.start + 1) & 127), this.overflow++));
      let r = this.pending[this.end];
      ((r.type = t),
        (r.time = performance.now()),
        (this.end = (this.end + 1) & 127),
        (this.lastSendTime = r.time));
    }
    received(t) {
      this.bytesReceived += t.length;
    }
    reset() {
      ((this.start = 0),
        (this.end = 0),
        (this.overflow = 0),
        (this.rtts = []),
        (this.rttIndex = 0),
        (this.currentRtt = NaN));
    }
    acked() {
      if (this.start === this.end) {
        console.warn("Called SocketStats.acked() with empty buffer");
        return;
      }
      if (this.overflow > 0) {
        this.overflow--;
        return;
      }
      let t = this.pending[this.start],
        e = performance.now() - t.time;
      (this.rtts.length < 32
        ? this.rtts.push(e)
        : ((this.rtts[this.rttIndex] = e), (this.rttIndex = (this.rttIndex + 1) & 31)),
        (this.start = (this.start + 1) & 127),
        (this.currentRtt = NaN));
    }
  };
var x = C("remote:socket"),
  it = 25,
  st = 50,
  qe = 5e3,
  je = 0.1,
  at = 5e3,
  dt = 42;
function ct(c) {
  switch (c) {
    case "AccessDenied":
    case "ClientNeedsUpdate":
    case "ClientTooNew":
    case "DocumentNotFound":
    case "UnsupportedSchema":
    case "Maintenance":
    case "UnknownPermanentError":
    case "ClientSidePermanentError":
    case "CrdtMigrationFailed":
    case "TreeModeMismatch":
      return !1;
    case "ReconnectToNewServer":
    case "UnknownRecoverableError":
    case "ClientSideRecoverableError":
      return !0;
    default:
      return pe(c);
  }
}
function lt(c) {
  return Math.min(it * 2 ** c, qe);
}
function ze(c, t) {
  let e = 1 - je + t() * je * 2;
  return Math.min(Math.round(c * e), qe);
}
function ht(c, t, e = Math.random) {
  return c === "ReconnectToNewServer"
    ? { delay: ze(st, e), nextReconnectAttempt: t }
    : { delay: ze(lt(t), e), nextReconnectAttempt: t + 1 };
}
function fr({ url: c, documentConnection: t, tunnel: e = void 0, getSubprotocols: r }) {
  let n = (0, v.useRef)(null),
    o = (0, v.useRef)(!0),
    i = (0, v.useRef)({ onConnect: new Set(), onDisconnect: new Set(), onMessage: new Set() }),
    s = (0, v.useRef)(c),
    a = (0, v.useRef)(!0),
    l = (0, v.useRef)(void 0),
    u = (0, v.useRef)(0),
    m = (0, v.useRef)(r);
  m.current = r;
  function f() {
    l.current !== void 0 && (window.clearTimeout(l.current), (l.current = void 0));
  }
  let g = (0, v.useCallback)(() => {
      a.current = !1;
      let p = n.current;
      p && p.ws.readyState < WebSocket.CLOSING && ((p.clientClosed = !0), p.ws.close());
    }, []),
    y = (0, v.useCallback)(async () => {
      if ((f(), !a.current || n.current)) return;
      function p(R) {
        l.current === void 0 &&
          (l.current = window.setTimeout(() => {
            ((l.current = void 0),
              navigator.onLine && ((document.hidden && !F.isApiPlugin) || y()));
          }, R));
      }
      let S = new URL(s.current);
      if (
        (S.searchParams.set("v", dt.toString()),
        S.searchParams.set("tunnel", e || ""),
        S.searchParams.set("source", "project"),
        Ee() && S.searchParams.set("mode", "crdt"),
        t.treeSchema <= 0)
      )
        return;
      (S.searchParams.set("treeSchema", t.treeSchema.toString()),
        S.searchParams.set("treeVersion", t.treeVersion.toString()));
      let w = await m.current?.().catch((R) => {
        x.warn("Error resolving websocket subprotocols:", R);
      });
      if (!a.current || n.current) return;
      x.debug("connecting to", S.href);
      let I = new WebSocket(S.href, w),
        L = new te(),
        ae = { ws: I, stats: L, clientClosed: !1 };
      t.setSocketStats(L);
      let G = 0,
        z = 0;
      (I.addEventListener("open", () => {
        (x.debug("open"),
          (z = window.setTimeout(() => {
            ((u.current = 0), (z = 0));
          }, at)),
          (G = window.setInterval(() => {
            if (
              performance.now() - L.lastSend() < 1e3 ||
              L.pendingCount("ping") > 1 ||
              I.readyState !== WebSocket.OPEN
            )
              return;
            let R = "ping {}";
            (I.send(R), L.sent("ping", R));
          }, 1e3)));
        for (let R of i.current.onConnect)
          try {
            R(o.current);
          } catch (E) {
            x.warn("Error in onConnect handler:", E);
          }
        o.current = !1;
      }),
        I.addEventListener("close", (R) => {
          let E = ut(R);
          if (
            (x.debug("close:", E, "clientClosed:", ae.clientClosed, R),
            G !== 0 && (clearInterval(G), (G = 0)),
            z !== 0 && (clearTimeout(z), (z = 0)),
            n.current === ae)
          ) {
            ct(E) || (a.current = !1);
            for (let N of i.current.onDisconnect)
              try {
                N(E);
              } catch (q) {
                x.warn("Error in onDisconnect handler:", q);
              }
            if (((n.current = null), a.current)) {
              let { delay: N, nextReconnectAttempt: q } = ht(E, u.current);
              ((u.current = q), p(N));
            }
          }
        }),
        I.addEventListener("message", (R) => {
          try {
            let E = R.data;
            L.received(E);
            let N = ft(E);
            if (N.type === "ack") {
              L.acked();
              return;
            } else N.type === "redirect" && (s.current = N.value.url);
            for (let q of i.current.onMessage)
              try {
                q(N);
              } catch (Ye) {
                x.warn("Error in onMessage handler:", Ye);
              }
          } catch (E) {
            x.warn("Error receiving:", E);
          }
        }),
        (n.current = ae));
    }, [t]);
  (0, v.useEffect)(() => {
    y();
  }, [y]);
  let b = (0, v.useCallback)(
    ({ online: p, visible: S }) => {
      p && (S || F.isApiPlugin) ? y() : F.isApiPlugin || f();
    },
    [y]
  );
  return (
    mt(b),
    (0, v.useMemo)(
      () => ({
        getSocketStats() {
          return n.current?.stats;
        },
        connect() {
          ((a.current = !0), y());
        },
        disconnect() {
          g();
        },
        onConnect(p) {
          return (
            i.current.onConnect.add(p),
            () => {
              i.current.onConnect.delete(p);
            }
          );
        },
        onDisconnect(p) {
          return (
            i.current.onDisconnect.add(p),
            () => {
              i.current.onDisconnect.delete(p);
            }
          );
        },
        onMessage(p) {
          return (
            i.current.onMessage.add(p),
            () => {
              i.current.onMessage.delete(p);
            }
          );
        },
        send(p) {
          if (!n.current || n.current.ws.readyState !== 1) {
            p.type !== "state" && x.warn("Dropping", p.type, "message.");
            return;
          }
          try {
            let S = `${p.type} ${JSON.stringify(p.value)}`;
            (n.current.ws.send(S), n.current.stats.sent(p.type, S));
          } catch (S) {
            x.warn("Error sending", p.type, "message:", S);
          }
        },
        forceReconnect() {
          (n.current &&
            (n.current.stats.reset(),
            (n.current.clientClosed = !0),
            n.current.ws.close(),
            (n.current = null)),
            (a.current = !0),
            y());
        },
      }),
      [y, g]
    )
  );
}
function mt(c) {
  (0, v.useEffect)(() => {
    (document.addEventListener("visibilitychange", t),
      window.addEventListener("online", t),
      window.addEventListener("offline", t));
    function t() {
      c({ online: navigator.onLine, visible: !document.hidden });
    }
    return () => {
      (document.removeEventListener("visibilitychange", t),
        window.removeEventListener("online", t),
        window.removeEventListener("offline", t));
    };
  }, [c]);
}
function ut(c) {
  switch (c.reason) {
    case "ERR_RECONNECT_TO_NEW_SERVER":
      return "ReconnectToNewServer";
    case "ERR_ACCESS_DENIED":
      return "AccessDenied";
    case "ERR_CLIENT_NEEDS_UPDATE":
      return "ClientNeedsUpdate";
    case "ERR_DOCUMENT_NOT_FOUND":
      return "DocumentNotFound";
    case "ERR_UNSUPPORTED_SCHEMA_VERSION":
      return "UnsupportedSchema";
    case "ERR_MAINTENANCE":
      return "Maintenance";
    case "ERR_INVALID_OPERATION":
      return "ClientSidePermanentError";
    case "ERR_CRDT_MIGRATION_FAILED":
      return "CrdtMigrationFailed";
    case "ERR_UNKNOWN":
      return "UnknownPermanentError";
  }
  return c.code === 1011 ? "ClientNeedsUpdate" : "UnknownRecoverableError";
}
function ft(c) {
  let t = c.indexOf(" "),
    e = c.indexOf(" ", t + 1);
  h(t >= 0 && e >= 0, "Invalid data");
  let r = c.substring(0, t),
    n = c.substring(t + 1, e),
    o = c.substring(e + 1),
    i = JSON.parse(o);
  return { id: r, type: n, value: i };
}
function yr(c) {
  Ue({
    type: "add",
    variant: "warning",
    primaryText: "Project format updated.",
    secondaryText: "Reload to continue.",
    key: "tree-mode-mismatch",
    duration: Number.POSITIVE_INFINITY,
    icon: "warning",
    showCloseButton: "never",
    action: c ?? { title: "Reload", onClick: () => window.top.location.reload() },
  });
}
function We(c) {
  return typeof c == "object" && c !== null && "next" in c;
}
function re(c) {
  return We(c) && "session" in c;
}
function ne(c) {
  return We(c) && "changes" in c && Array.isArray(c.changes);
}
var D = C("remote:sync"),
  $e = 2 ** 52,
  oe = class {
    constructor(t, e, r = 0, n) {
      d(this, "timeline", t);
      d(this, "componentLoader", e);
      d(this, "rollingDiff", null);
      d(this, "session", Math.floor(Math.random() * $e));
      d(this, "seq", 0);
      d(this, "treeVersion", 0);
      d(this, "updatesSeen", 0);
      d(this, "init", 0);
      d(this, "expectingInitialUpdates", 0);
      d(this, "localUpdatesInFlight", []);
      d(this, "localUpdatesAtInit", []);
      d(this, "hasError", !1);
      d(this, "waitingForTree", !1);
      this.setTree(t.tree, r, n);
    }
    get waitingForInitialUpdates() {
      return this.expectingInitialUpdates > this.updatesSeen;
    }
    get isLoading() {
      return this.waitingForTree || this.waitingForInitialUpdates;
    }
    get isReady() {
      return !(this.hasError || this.waitingForTree || this.waitingForInitialUpdates);
    }
    get tree() {
      return this.timeline.tree;
    }
    error(t, e) {
      return ((this.hasError = !0), Error(t, { cause: e }));
    }
    verify(t, e) {
      let r = this.timeline.getTreeForVersion(t);
      if (!r) return (D.info("verify: unable to find tree with version", t), !0);
      let n = r.computeTreeHash();
      if (n !== e) {
        if ((D.warn("verify: failed", n, "!==", e), e === 0)) return !0;
        D.reportError("Tree verification failed", {
          localHash: n,
          serverHash: e,
          treeVersion: t,
          treeSize: r.size(),
        });
      } else D.debug("verify: passed; hash:", e);
      return n === e;
    }
    setTree(t, e, r) {
      (D.info("setTree", e),
        this.timeline.reset(t, r),
        this.setRemoteTreeVersion(e),
        r?.isLoading &&
          ((this.rollingDiff = new xe()), this.rollingDiff.addChanges(r?.initialChanges)),
        (this.treeVersion = e),
        (this.waitingForTree = !1),
        (this.hasError = !1),
        (this.localUpdatesInFlight = []));
    }
    resetSession() {
      ((this.treeVersion = 0),
        (this.session = Math.floor(Math.random() * $e)),
        (this.localUpdatesInFlight = []),
        (this.localUpdatesAtInit = []));
    }
    debugResetSessionAndTree(t) {
      (this.resetSession(), this.setTree(t, 0));
    }
    handleInit(t, e) {
      return (
        (this.init += 1),
        this.init === 1 && (Y("wsTreeInitMessages"), K(e)),
        D.info("init", this.init, {
          treeVersion: t,
          initialUpdates: e,
          localTreeVersion: this.treeVersion,
        }),
        D.debug("init updates:", {
          seen: this.updatesSeen,
          inFlight: this.localUpdatesInFlight.length,
          previous: this.localUpdatesAtInit.length,
        }),
        (this.hasError = !1),
        (this.expectingInitialUpdates = e),
        (this.updatesSeen = 0),
        (this.localUpdatesAtInit = this.localUpdatesInFlight.slice()),
        this.treeVersion !== t || this.waitingForTree ? ((this.waitingForTree = !0), !0) : !1
      );
    }
    trimForShallowLoading() {
      let t = this.timeline,
        e = this.getRemoteIndex() - 3;
      e <= 0 ||
        ((t.trimmed += e),
        D.debug(
          "trim",
          e,
          "new offset:",
          t.trimmed,
          "entries.length:",
          t.entries.length,
          "after load"
        ),
        t.entries.splice(0, e),
        h(
          this.timeline.remoteTreeIndex === 0 || this.getRemoteIndex() >= 0,
          "must have some buffer before remoteTreeIndex"
        ));
    }
    loadedAllScopes() {
      let t = this.timeline;
      (D.info(
        "done loading, took:",
        Math.round((performance.now() - t.resetTime) / 100) / 10,
        "seconds"
      ),
        h(t.isPartialLoading, "Must be in loading mode"),
        (t.isPartialLoading = !1),
        (this.rollingDiff = null));
      let e = this.getRemoteEntry();
      e && ((e.version = t.remoteTreeVersion), this.trimForShallowLoading());
    }
    loadOneScope(t, e) {
      let r = this.timeline;
      (D.debug("loadOneScope:", t.id),
        h(r.isPartialLoading, "Must be loading"),
        h(!t.cache.isShallowLoad, "Scope must not be shallow"));
      let n = this.getRemoteEntry();
      h(n, "remote tree is missing");
      let o = r.tree.isViewOnly;
      ((n.tree.editClosed = !1),
        (n.tree.isViewOnly = !1),
        (n.tree.inEditor = !1),
        n.tree.makeLatest());
      let i = new Set(),
        s = n.tree.root.children.findIndex((l) => l.id === t.id);
      if (t.__class === "WebPageNode" || t.__class === "SmartComponentNode") {
        (Ie(t), (n.tree = n.tree.commitWithLoadedScope(this.componentLoader, t)));
        for (let l of t.walk()) (r.trackChange(l.id), i.add(l.id));
      } else (n.tree.remove(t.id), n.tree.insertNode(t, n.tree.root.id, s));
      if (this.rollingDiff) {
        let l = this.rollingDiff.getChanges();
        i.size > 0 ? ce(l, i) && V(n.tree, l) : V(n.tree, l);
      } else {
        let l = 0,
          u = i.size > 0,
          m = this.getRemoteIndex();
        for (let f of r.entries) {
          if (l > m) break;
          (l++,
            !f.wasScopeInsert && ((u && !ce(f.changes, i)) || ((u = !1), V(n.tree, f.changes))));
        }
      }
      s === -1
        ? h(!n.tree.get(t.id), "Scope must have been deleted by remote diffs")
        : n.tree.loadReplicasAndCodeComponents(t);
      let a = n.tree.commit(this.componentLoader, (l, u) => {
        let m = l?.id ?? u?.id;
        m && r.trackChange(m);
      });
      return (
        (n.tree.inEditor = !0),
        (a.inEditor = !0),
        this.incrementRemoteTreeIndex(),
        e || (r.latestReversibleNodeChanges = null),
        this.addTreeToTimeline(a),
        r.legacyMode && r.invalidateAllCursors(),
        (r.tree.isViewOnly = o),
        this.rollingDiff && this.trimForShallowLoading(),
        r.tree
      );
    }
    getRemoteEntry() {
      return this.timeline.getEntry(this.getRemoteIndex());
    }
    setRemoteTreeVersion(t) {
      if (((this.timeline.remoteTreeVersion = t), this.timeline.isPartialLoading)) return;
      let e = this.getRemoteEntry();
      (h(e, "remote tree is missing"), (e.version = t));
    }
  };
var U = C("remote:sync"),
  ie = class extends oe {
    constructor() {
      super(...arguments);
      d(this, "appEnvironment");
      d(this, "localChangesSentToRemote", 0);
    }
    setTree(e, r, n) {
      (super.setTree(e, r, n), (this.localChangesSentToRemote = 0));
    }
    handleRemoteUpdate(e) {
      if (this.hasError || this.waitingForTree) return;
      h(typeof e.next == "number", "must be a valid tree update");
      let r = e.next;
      if (
        (U.trace("this:", this.session, this.seq, "at:", this.treeVersion, "update:", e),
        r !== this.treeVersion + 1)
      ) {
        if (r <= this.treeVersion) {
          U.debug("ignoring old update:", r, " <= ", this.treeVersion);
          return;
        }
        throw this.error("missing update: " + this.treeVersion + " + 1 != " + r);
      }
      if (((this.updatesSeen += 1), (this.treeVersion = r), re(e) && e.session === this.session)) {
        let n = this.localUpdatesInFlight[0];
        if (n?.seq === e.seq)
          (this.localUpdatesInFlight.shift(),
            this.confirmLocalChangesByRemote(n.count, r),
            (n.confirmed = !0));
        else {
          let o = this.localUpdatesAtInit.find((i) => i.seq === e.seq);
          if (o) (this.insertRemoteChanges(o.changes, r), (o.confirmed = !0));
          else {
            let i = this.localUpdatesInFlight.findIndex((a) => a.seq === e.seq),
              s =
                i === -1
                  ? "unknown local update: " + e.seq + " != " + n?.seq
                  : "missing local update: " + e.seq + " != " + n?.seq + ", is index: " + i;
            throw this.error(s);
          }
        }
      } else
        ne(e)
          ? e.changes.length > 0 && this.insertRemoteChanges(e.changes, r)
          : U.reportErrorOncePerMinute(new Error("Unknown remote update"), { update: e });
    }
    confirmLocalChangesByRemote(e, r = 0) {
      let n = this.timeline;
      if (
        (h(e >= 1, "cannot confirm less than one change"),
        h(
          this.localChangesSentToRemote >= e,
          "cannot confirm local changes that have not been sent"
        ),
        h(n.remoteTreeIndex < n.localTreeIndex, "must have unconfirmed local changes"),
        this.rollingDiff)
      )
        for (let o = 1; o <= e; o++)
          this.rollingDiff.addChanges(n.getEntry(n.remoteTreeIndex + o)?.changes);
      return (
        (this.localChangesSentToRemote -= e),
        n.incrementRemoteTreeIndex(e),
        this.setRemoteTreeVersion(r),
        n.tree
      );
    }
    insertRemoteChanges(e, r = 0) {
      let n = this.timeline;
      (U.debug("insertRemoteChanges:", e.length),
        h(n.tree === n.getLastEntry().tree, "tree out of sync"),
        h(n.remoteTreeIndex <= n.localTreeIndex, "remote tree too far ahead"),
        this.rollingDiff && this.rollingDiff.addChanges(e));
      let o = this.getRemoteEntry();
      h(o, "remote tree is missing");
      let i = n.tree.isViewOnly;
      ((o.tree.editClosed = !1),
        (o.tree.isViewOnly = !1),
        o.tree.makeLatest(),
        o.tree.beginAllowPartialScopeAccess(),
        V(o.tree, e));
      let s = o.tree.commitDiffs(this.componentLoader);
      for (let l of e) n.trackChange(l.id, l);
      for (let l of o.tree.getNodesChangedByCommit()) n.trackChange(l.id);
      (n.incrementRemoteTreeIndex(1), (n.latestReversibleNodeChanges = null));
      let a = n.entries.length - this.getRemoteIndex();
      return (
        h(a >= 0, "computed rebase is off"),
        a === 0 ? this.addRemoteTreeWithChanges(s, e) : this.rebaseRemoteTreeWithChanges(s, e, a),
        this.trim(),
        this.setRemoteTreeVersion(r),
        o.tree.endAllowPartialScopeAccess(),
        (n.tree.isViewOnly = i),
        n.tree
      );
    }
    addRemoteTreeWithChanges(e, r) {
      U.trace("addRemoteTreeWithChanges:", r.length);
      let n = this.timeline.getLastEntry();
      return (
        h(e.lineage === n.tree.lineage, "Trees must belong to the same line."),
        h(!e.hasUncommittedChanges(), "Tree cannot have uncommitted changes."),
        n.tree !== e && n.tree.releaseMemory(),
        this.timeline.addEntry(e, r)
      );
    }
    rebaseRemoteTreeWithChanges(e, r, n) {
      let o = this.timeline;
      (U.debug("rebaseRemoteTreeWithChanges:", n, "changes:", r.length),
        h(e.lineage === o.getLastEntry().tree.lineage, "Trees must belong to the same line."),
        h(!e.hasUncommittedChanges(), "Tree cannot have uncommitted changes."),
        h(o.entries.length >= n, () => `rebase ${n} > commits ${o.entries.length}`));
      let i = o.entries.splice(o.entries.length - n, n);
      h(i.length === n, () => `must have ${n} entries to process`);
      let s = o.addEntry(e, r, [], !0),
        a = e;
      for (let l = 0; l < n; l++) {
        let u = i[l];
        (V(e, u.changes), (e = e.commitDiffs(this.componentLoader)));
        for (let m of u.changes) o.trackChange(m.id, m);
        for (let m of a.getNodesChangedByCommit()) o.trackChange(m.id);
        (o.addEntry(e, u.changes, u.editReasons, u.wasRebase),
          e !== a && (a.releaseMemory(), (a = e)));
      }
      return ((o.tree = e), s);
    }
    addTreeToTimeline(e) {
      let n = this.timeline.entries.length - this.getRemoteIndex();
      h(n >= 0, "computed rebase is off");
      let o;
      (n === 0
        ? (o = this.addRemoteTreeWithChanges(e, []))
        : (o = this.rebaseRemoteTreeWithChanges(e, [], n)),
        (o.wasScopeInsert = !0));
    }
    loadCompleteTree(e, r = 0) {
      let n = this.timeline;
      (U.debug(
        "load complete tree:",
        n.tree.sizeAtStart(),
        "->",
        e.size(),
        "entries:",
        n.entries.length
      ),
        h(n.trimmed === 0, "cannot load complete tree while having local changes"),
        h(!e.hasUncommittedChanges(), "tree should be clean"),
        n.entries.forEach((a, l) => {
          l > n.remoteTreeIndex || V(e, a.changes);
        }),
        e.hasUncommittedChanges() && (e = e.commitDiffs(this.componentLoader)));
      let o = [],
        i = n.tree;
      if (i.sizeAtStart() * 2 > e.size()) {
        let a = {};
        for (let l of e.root.walk()) {
          let u = i.getNodeAtStart(l.id) || void 0,
            m = Re(u, l);
          (m && (a[m.id] = m), n.trackChange(l.id, m));
        }
        ((o = Object.values(a)), U.debug("load complete tree, diff:", o.length));
      } else (n.invalidateAllCursors(), U.debug("load complete tree, resending:", n.tree.size()));
      (n.incrementRemoteTreeIndex(1), (n.latestReversibleNodeChanges = null));
      let s = n.entries.length - n.remoteTreeIndex;
      return (
        h(s >= 0, "computed rebase is off"),
        e.lineage !== n.tree.lineage
          ? (n.reset(e), this.setRemoteTreeVersion(r), n.tree)
          : (s === 0
              ? this.addRemoteTreeWithChanges(e, o)
              : this.rebaseRemoteTreeWithChanges(e, o, s),
            this.setRemoteTreeVersion(r),
            this.trim(),
            n.tree.forEachNode((a) => n.trackChange(a.id)),
            n.tree)
      );
    }
    incrementRemoteTreeIndex() {
      this.timeline.incrementRemoteTreeIndex(1);
    }
    getRemoteIndex() {
      return this.timeline.remoteTreeIndex - this.timeline.trimmed;
    }
    getUnconfirmedChangeCount() {
      return this.timeline.localTreeIndex - this.timeline.remoteTreeIndex;
    }
    hasChangesForRemote() {
      let e = this.timeline.remoteTreeIndex + this.localChangesSentToRemote,
        r = this.timeline.localTreeIndex;
      return (h(e <= r, "inconsistency in getting local changes to send"), e < r);
    }
    hasOnlyEmptyChangesForRemote() {
      let e = this.timeline.remoteTreeIndex + this.localChangesSentToRemote,
        r = this.timeline.localTreeIndex;
      return e >= r ? !0 : this.timeline.computeForwardChanges(e, r).length === 0;
    }
    createUpdateToSend() {
      if (!this.isReady) throw Error("cannot create updates while not ready");
      if (!this.hasChangesForRemote()) return null;
      let { changes: e, count: r, reasons: n } = this.getForwardChangesForRemote(),
        o = ++this.seq,
        i = {
          appEnvironment: this.appEnvironment,
          session: this.session,
          seq: o,
          changes: e,
          count: r,
          reasons: n,
          confirmed: !1,
        };
      return (this.localUpdatesInFlight.push(i), i);
    }
    getForwardChangesForRemote() {
      let e = this.timeline.remoteTreeIndex + this.localChangesSentToRemote,
        r = this.timeline.localTreeIndex,
        n = this.timeline.getChangesBetweenEntries(e, r);
      return ((this.localChangesSentToRemote += n.count), n);
    }
    commitAndCreateUpdate(e = 0) {
      (h(F.isTest), this.timeline.commitLocalTree());
      let r = this.createUpdateToSend();
      return r ? Ve(r, e) : null;
    }
    resetTreesForRecovery() {
      return (
        U.info(
          "reset trees for recovery, remote:",
          this.getRemoteIndex(),
          "last index:",
          this.timeline.localTreeIndex,
          "number of entries to reapply to remote tree",
          this.localChangesSentToRemote
        ),
        this.timeline.resetTreesForRecovery(this.getRemoteIndex(), this.localChangesSentToRemote)
      );
    }
    trim() {
      if (this.timeline.isPartialLoading) return;
      let e = 0;
      (this.timeline.remoteTreeIndex > 0
        ? (e = this.getRemoteIndex() - 100)
        : (e = this.timeline.localTreeIndex - this.timeline.trimmed - 100),
        !(e <= 75) &&
          ((this.timeline.trimmed += e),
          U.debug(
            "trim",
            e,
            "new offset:",
            this.timeline.trimmed,
            "entries.length:",
            this.timeline.entries.length
          ),
          this.timeline.entries.splice(0, e),
          h(
            this.timeline.remoteTreeIndex === 0 || this.getRemoteIndex() >= 0,
            "must have some buffer before remoteTreeIndex"
          )));
    }
  };
var pt = { cache: !0, update: !0, mutable: !0, children: !0 };
function gt(c, t) {
  if (c !== "cached") return t;
}
function Ge(c) {
  return JSON.parse(JSON.stringify(c, gt));
}
function Je(c, t, e) {
  let r = new Set(),
    n = !1;
  function o(s, a) {
    (r.add(s.id), (a += "." + s.id));
    let l = t.get(s.id);
    if (!l) ((n = !0), e.push("-node: " + a + (J(s) ? " (replica child)" : "")));
    else {
      let u = [],
        m = s.children?.map((g) => g.id).join(","),
        f = l.children?.map((g) => g.id).join(",");
      m !== f && u.push(" .children: [" + m + "] != [" + f + "]");
      for (let [g, y] of s.entries()) {
        if (g in pt) continue;
        let b = l[g];
        k(y, b)
          ? y &&
            typeof y == "object" &&
            y.__proto__ !==
              (typeof b == "object" && b && "__proto__" in b ? b.__proto__ : void 0) &&
            u.push(" ." + g + ": different prototypes")
          : (y === void 0 || b === void 0 || !k(Ge(y), Ge(b))) &&
            g !== "contentHash" &&
            u.push(" ." + g + ": " + JSON.stringify(y) + " != " + JSON.stringify(b));
      }
      u.length > 0 &&
        ((n = !0), e.push("!node: " + a + (J(s) ? " (replica child)" : "")), e.push(...u));
    }
    for (let u of s.children ?? []) o(u, a);
  }
  function i(s, a) {
    ((a += "." + s.id),
      r.has(s.id) || ((n = !0), e.push("+node: " + a + (J(s) ? " (replica child)" : ""))));
    for (let l of s.children ?? []) i(l, a);
  }
  return (o(c.root, ""), i(t.root, ""), n);
}
var j = C("remote:connection"),
  _ = C("remote:verify"),
  yt = 5,
  Xe = class {
    constructor(t, e, r, n, o) {
      d(this, "componentLoader", e);
      d(this, "projectId", r);
      d(this, "callbacks", n);
      d(this, "treeSync");
      d(this, "remoteUpdates", []);
      d(this, "ignoreTreeVerifies", !1);
      d(this, "ignoreTreeVerifyVersion", 0);
      d(this, "shouldCrashFromDebug", !1);
      d(this, "loader");
      (h(t instanceof De, "timeline must be a TreeTimeline"),
        (this.treeSync = new ie(t, e)),
        (this.treeSync.appEnvironment = o),
        (this.treeSync.waitingForTree = !0));
    }
    get init() {
      return this.treeSync.init;
    }
    setTree(t, e, r) {
      this.treeSync.setTree(t, e, r);
    }
    get timeline() {
      return this.treeSync.timeline;
    }
    get treeVersion() {
      return this.treeSync.treeVersion;
    }
    get isReady() {
      return this.treeSync.isReady;
    }
    get waitingForTree() {
      return this.treeSync.waitingForTree;
    }
    get isLoading() {
      return this.treeSync.isLoading;
    }
    get session() {
      return this.treeSync.session;
    }
    resetSession() {
      this.treeSync.resetSession();
    }
    debugResetSessionAndTree(t) {
      this.treeSync.debugResetSessionAndTree(t);
    }
    debugCrash() {
      this.shouldCrashFromDebug = !0;
    }
    canProcessChanges() {
      if ((this.treeSync.trim(), !this.treeSync.isReady || this.shouldCrashFromDebug)) {
        if (this.treeSync.hasOnlyEmptyChangesForRemote()) return !1;
        let t = "is not ready";
        throw (
          this.treeSync.hasError
            ? (t = "had an error")
            : this.treeSync.waitingForTree
              ? (t = "is waiting for tree data")
              : this.treeSync.waitingForInitialUpdates
                ? (t = "is waiting for initial updates")
                : this.shouldCrashFromDebug &&
                  ((this.shouldCrashFromDebug = !1), (t = "is doing a deliberate crash test")),
          this.treeSync.error("cannot create local updates when the document " + t)
        );
      }
      return !0;
    }
    processViewOnly() {
      if (!this.treeSync.hasChangesForRemote()) return;
      let { changes: t, count: e } = this.treeSync.getForwardChangesForRemote();
      (j.warn("cannot create local updates when the user is a viewer, ignoring:", t),
        this.treeSync.confirmLocalChangesByRemote(e));
    }
    maybeSend(t) {
      if (!this.treeSync.isReady || !this.treeSync.hasChangesForRemote()) return "nothingToSend";
      let e = this.treeSync.localUpdatesInFlight.length;
      if (e >= yt) return "postpone";
      let r = this.treeSync.createUpdateToSend();
      return r
        ? (j.debug("sending update:", e, r.changes.length, r.reasons),
          t.sendMessage({ type: "treeUpdate", value: Z(r) }),
          "didSend")
        : "nothingToSend";
    }
    handleRows() {
      throw Error("Crdt tree updates cannot be handled by Json data handler");
    }
    handleConfirmRows() {
      throw Error("Crdt tree updates cannot be handled by Json data handler");
    }
    get hasUpdatesToProcess() {
      return !this.waitingForTree && this.remoteUpdates.length > 0;
    }
    handleInit(t, e) {
      return ((this.remoteUpdates.length = 0), { needsDownload: this.treeSync.handleInit(t, e) });
    }
    handleTreeVerify(t, e, r) {
      if (!this.treeSync.isReady || this.ignoreTreeVerifies || this.ignoreTreeVerifyVersion === e)
        return;
      if (!this.treeSync.verify(e, r)) {
        let i = this.treeSync.timeline.getTreeForVersion(e);
        if (i) {
          let a = this.treeSync.timeline.entries.slice();
          this.verifyLocalTreeWithServer(t, i, e, a);
        }
        ((this.remoteUpdates.length = 0), (this.treeSync.hasError = !0));
        let s = new Error("Local document out of sync with document on server.");
        this.callbacks.error(s);
        return;
      }
      let n = X(),
        o = B.isDevelopment || B.isLocal;
      if (n || o) {
        let i = this.treeSync.timeline.getTreeForVersion(e);
        if (i) {
          let s = this.treeSync.timeline.entries.slice();
          this.verifyLocalTreeWithServer(t, i, e, s);
        }
      }
    }
    async verifyLocalTreeWithServer(t, e, r, n) {
      try {
        let o = t.replace(/\d+\.json/u, r + ".json"),
          i = await fetch(o, await P.withAuthorizationHeader({}));
        if (!i.ok) throw Error(`unable to fetch document json: ${i.status} ${i.statusText}`);
        let s = await i.text(),
          a = await this.loadServerTree(s, o, r);
        this.compareTreeWithServerJson(e, a, r, n);
      } catch (o) {
        _.error("Error:", o);
      }
    }
    compareTreeWithServerJson(t, e, r, n) {
      _.debug(
        "local:",
        t.computeTreeHash(),
        t.size(),
        "remote:",
        e.computeTreeHash(),
        e.size(),
        "version:",
        r
      );
      let o,
        i = [];
      return (
        Je(t, e, i)
          ? (_.warn(
              `trees are different
` +
                i.join(`
`)
            ),
            n && _.debug("timeline.entries", n),
            (o = Error("Local document different from server document.")),
            _.reportError(o, { differences: i, changes: n?.slice(-25).map((a) => a.changes) }))
          : i.length > 0
            ? _.debug(
                `trees have warnings:
` +
                  i.join(`
`)
              )
            : _.debug("trees are same"),
        o
      );
    }
    handleTreeUpdate(t) {
      this.remoteUpdates.push(t);
    }
    processRemoteUpdates() {
      if (this.treeSync.waitingForTree) return;
      let t;
      try {
        if (
          (h(!this.timeline.tree.hasUncommittedChanges(), "tree must not have uncommitted changes"),
          this.shouldCrashFromDebug)
        )
          throw ((this.shouldCrashFromDebug = !1), Error("RemoteDocument CrashTest"));
        for (; this.remoteUpdates.length > 0; ) {
          let e = this.remoteUpdates.shift();
          if (!e) break;
          ((t = e),
            this.ensureAllScopesAreLoaded(e),
            this.treeSync.handleRemoteUpdate(e),
            this.loader && !re(e) && this.loader.addNodeChanges(e.changes));
        }
        if (this.loader) {
          let e = this.timeline.tree.root.children;
          if (!e.some((n) => H(n) && n.isValid())) {
            j.info("cannot show any page, forcing load of next page");
            let n = e.find((i) => H(i));
            if (!n) throw Error("No scope to load");
            let o = this.loader.loadScope(n.id);
            if (!o) throw Error("Unable to load scope");
            this.treeSync.loadOneScope(o, !1);
          }
        }
        this.callbacks.updateProcessed(this.timeline.tree);
      } catch (e) {
        let r = W(e);
        throw (
          (this.remoteUpdates.length = 0),
          j.error("Error processing remote updates:", r),
          j.debug("Last update:", t),
          this.treeSync.error(r.message),
          this.callbacks.errorRecoverable(),
          r
        );
      }
    }
    ensureAllScopesAreLoaded(t) {
      if (!this.loader || !ne(t)) return;
      let e = new Set();
      for (let r of t.changes) r.previousScope && (e.add(r.previousScope), e.add(r.to.parentid));
      for (let r of e) {
        if (this.loader.hasLoadedScope(r)) continue;
        let n = this.loader.loadScope(r);
        n && this.treeSync.loadOneScope(n, !1);
      }
    }
    createLoader(t, e, r) {
      this.loader?.scheduler.cancel();
      let n = new he(this.componentLoader, e, t, r);
      return ((this.loader = n), this.loader);
    }
    async verifyTreeWithServer() {
      let t = `/projects/${this.projectId}/tree/latest?forceSnapshot=true`,
        e = new URL(t, window.location.href),
        r;
      try {
        ((this.ignoreTreeVerifies = !0), (r = await fetch(e, await P.withAuthorizationHeader({}))));
      } finally {
        this.ignoreTreeVerifies = !1;
      }
      if (!r.ok) throw Error(`unable to fetch document json: ${r.status} ${r.statusText}`);
      let n = r.headers.get("etag") || "",
        o = Number.parseInt(n.match(/Version-(\d+)/u)?.[1] ?? "0", 10);
      if (!Number.isFinite(o) || o <= 0)
        throw Error(`unable to parse document tree version from: ${n}`);
      let i = this.treeSync.treeVersion - o,
        s = this.treeSync.timeline.getTreeForVersion(o);
      if (!s) throw Error(`unable to get the local tree for version ${o}`);
      this.ignoreTreeVerifyVersion = o;
      let a = await r.text(),
        l = await this.loadServerTree(a, e.toString(), o),
        u = this.compareTreeWithServerJson(s, l, o);
      if (u) throw u;
      return i;
    }
    async loadServerTree(t, e, r) {
      h(!t || ye(t), "treeData must be a string");
      let n,
        o = new he(this.componentLoader, r, e, {
          partialParsing: !0,
          loadInBackground: !0,
          loadedData: t,
          isUserIdleCallback: this.callbacks.isUserIdleCallback,
        });
      return (
        o.on("loadedFirstData", (i) => {
          (o.on("loadedScope", (s) => {
            let a = i.root.children.findIndex((l) => l.id === s.id);
            (i.remove(s.id), i.insertNode(s, i.root.id, a), (i = i.commit(this.componentLoader)));
          }),
            o.on("loadedAllData", () => {
              n = i;
            }));
        }),
        await o.start(),
        h(n, "loadedAllData not called"),
        n
      );
    }
    get localUpdatesInFlight() {
      return this.treeSync.localUpdatesInFlight;
    }
    get localUpdatesAtInit() {
      return this.treeSync.localUpdatesAtInit;
    }
    get hasError() {
      return this.treeSync.hasError;
    }
    flushUpdates(t) {
      if (this.localUpdatesInFlight.length === 0) return !1;
      let e = this.treeSync.createUpdateToSend();
      return (e && t.sendMessage({ type: "treeUpdate", value: Z(e) }), !0);
    }
    resendUnconfirmedUpdates(t) {
      h(this.isReady);
      let e = this.localUpdatesAtInit.filter((r) => !r.confirmed);
      if (e.length !== 0) {
        j.debug("resending local updates:", e.length);
        for (let r of e) t.sendMessage({ type: "treeUpdate", value: Z(r) });
      }
    }
    handleNetworkReady(t) {
      return (this.resendUnconfirmedUpdates(t), "nothingToSend");
    }
    getDocumentURL() {
      return new URL(`/projects/${this.projectId}/tree/latest`, window.location.href);
    }
    cancelAndClearLoader() {
      (this.loader?.scheduler.cancel(), (this.loader = void 0));
    }
    finishLoading() {
      this.loader = void 0;
    }
    loadOneScope(t, e) {
      return this.treeSync.loadOneScope(t, e);
    }
    loadedAllScopes() {
      this.treeSync.loadedAllScopes();
    }
    hasUnconfirmedChanges() {
      return this.treeSync.getUnconfirmedChangeCount() > 0;
    }
    remoteUpdateCount() {
      return this.remoteUpdates.length;
    }
    resetTreesForRecovery(t) {
      return this.treeSync.resetTreesForRecovery();
    }
    error(t) {
      return this.treeSync.error(t);
    }
  };
var St = { Today: 0, Yesterday: 1, "Last 7 days": 7, "Last 30 days": 30, "Last 90 days": 90 };
function Zr(c) {
  let t = St[c],
    e = Q(0);
  if (c === "Yesterday") {
    let r = Q(-1);
    return [r, r];
  }
  return t === 0 ? [e, e] : [Q(-t), e];
}
export {
  St as a,
  Zr as b,
  rr as c,
  Be as d,
  te as e,
  at as f,
  dt as g,
  ct as h,
  ht as i,
  fr as j,
  ut as k,
  ft as l,
  yr as m,
  Xe as n,
  ue as o,
};
//# sourceMappingURL=chunk-XQX4JCTR.mjs.map
