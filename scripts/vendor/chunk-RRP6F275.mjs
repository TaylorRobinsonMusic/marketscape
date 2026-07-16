import { a as _ } from "./chunk-BPIKMQQV.mjs";
import { h as K, i as V } from "./chunk-MPNC2VAR.mjs";
import { a as D } from "./chunk-SN4BP6PY.mjs";
import { Qa as L } from "./chunk-PPMMTNWW.mjs";
import { Bh as B, Ch as $ } from "./chunk-RYAQJ2V7.mjs";
import { d as C } from "./chunk-ZONRPRQ6.mjs";
import { c as H, d as G } from "./chunk-U6UX6PUS.mjs";
import { c as J } from "./chunk-OAXSFRCO.mjs";
import { b as M } from "./chunk-HEVPYMM6.mjs";
import { b as o } from "./chunk-5D5WEAJK.mjs";
import { f as z } from "./chunk-BL7YLPCC.mjs";
import { a as R } from "./chunk-RNHTTH2C.mjs";
import { a as O } from "./chunk-T77QJFCJ.mjs";
import { o as S } from "./chunk-CFUM4JW5.mjs";
import { l as W } from "./chunk-DYNCKUFC.mjs";
import { a as x } from "./chunk-4I6ENMO3.mjs";
import { f as N } from "./chunk-NHVEFQOW.mjs";
import { ia as T } from "./chunk-V7MLU2WL.mjs";
import { a as F, b as U } from "./chunk-425IX65M.mjs";
import { a as w } from "./chunk-HMF7T2NG.mjs";
import { e as A, j as d } from "./chunk-CT63CFX7.mjs";
var l = A(x(), 1);
var q = A(O(), 1),
  y = class n {
    constructor(e) {
      d(this, "result", e);
      Object.assign(this, e);
    }
    isCanceled() {
      return !this.result.ok && this.result.error === "cancelled";
    }
    isEmpty() {
      return !this.result.ok && this.result.error === "empty";
    }
    isFiles() {
      return this.result.ok && Array.isArray(this.result.value) && this.result.value.length > 0;
    }
    static canceled() {
      return new n($("cancelled"));
    }
    static empty() {
      return new n($("empty"));
    }
    static files(e) {
      return new n(B(e));
    }
  };
function Z(n) {
  return n.startsWith("text") || n === "application/json";
}
function ee(n, e, s) {
  let t = n / 1e6;
  return Z(s) ? t <= e : !0;
}
function se(
  {
    disabled: n,
    name: e,
    maxSizeInMB: s,
    shouldCheckFileSize: t,
    onMaxSizeExceeded: r,
    performantLimitInMB: a = 5,
  },
  i
) {
  let p = (0, l.useRef)(null),
    c = (0, l.useRef)(null),
    u = (0, l.useRef)(null);
  (0, l.useImperativeHandle)(i, () => ({
    show(m, g) {
      return new Promise((b, I) => {
        if (u.current) {
          let [, P] = u.current;
          P(Error("Multiple calls to show()"));
        }
        if (
          ((u.current = [b, I]),
          (!window.event || !window.event.isTrusted) &&
            console.warn("FilePicker\u2018s show() must be called from trusted event"),
          !c.current)
        ) {
          ((u.current = null), b(y.canceled()));
          return;
        }
        (m ? (c.current.accept = m.join(",")) : c.current.removeAttribute("accept"),
          g ? (c.current.multiple = !0) : c.current.removeAttribute("multiple"),
          c.current.click());
      });
    },
  }));
  let k = (0, l.useCallback)(
      (m) => {
        if (!u.current) return;
        let [g] = u.current;
        u.current = null;
        let { files: b } = m.currentTarget;
        if (!b || b.length === 0) {
          g(y.empty());
          return;
        }
        let I = [];
        for (let P of b)
          s === void 0 || ee(P.size, s, P.type)
            ? (P.size / 1e6 > a &&
                P.type === "application/json" &&
                M({
                  type: "add",
                  variant: "warning",
                  key: "file-picker-large-file-detected",
                  primaryText: "Adding large files",
                  secondaryText: "can impact performance.",
                  duration: 6e3,
                  action: {
                    title: "OK",
                    onClick: () => M({ type: "remove", key: "file-picker-large-file-detected" }),
                  },
                }),
              I.push(P))
            : r
              ? r(P.size / 1e3)
              : M({
                  type: "add",
                  variant: "error",
                  primaryText: "Exceeded max file size",
                  secondaryText: `of ${s} MB.`,
                });
        (I.length > 0 ? g(y.files(I)) : g(y.empty()), p.current?.reset());
      },
      [s, r, t]
    ),
    [v, j] = (0, l.useState)(null),
    X = (0, l.useCallback)((m) => {
      ((c.current = m), j(m));
    }, []);
  return (
    (0, l.useEffect)(() => {
      if (!v) return;
      let m = new AbortController();
      return (
        v.addEventListener(
          "cancel",
          () => {
            if (!u.current) return;
            let [g] = u.current;
            ((u.current = null), g(y.canceled()));
          },
          { signal: m.signal }
        ),
        () => {
          m.abort();
        }
      );
    }, [v]),
    (0, q.jsx)("form", {
      ref: p,
      style: { display: "none" },
      children: (0, q.jsx)("input", {
        disabled: n,
        name: e,
        onChange: k,
        ref: X,
        style: { display: "none" },
        type: "file",
      }),
    })
  );
}
var ie = (0, l.forwardRef)(se);
var Y = class {
  constructor(e, s) {
    d(this, "api", e);
    d(this, "socket", s);
    d(this, "emitter", new N());
    s.onMessage(async (t) => {
      if (t.type !== "moduleEvents" || !this.emitter.hasStreams()) return;
      let r = await Promise.all(
        t.value.events.map(async (a) => {
          switch (a.type) {
            case "delete":
              return a;
            case "save":
              return { type: "save", module: await e.getModule({ moduleId: a.id }) };
            default:
              U(a);
          }
        })
      );
      this.emitter.emit({ events: r });
    });
  }
  notify(e) {
    this.socket.send({ type: "moduleEvents", value: { events: e } });
  }
  async create(e) {
    let s = await this.api.createModule(e);
    return (this.notify([{ type: "save", id: s.id, saveId: s.saveId }]), s);
  }
  async delete(e) {
    (await this.api.deleteModule(e), this.notify([{ type: "delete", id: e.moduleId }]));
  }
  async restore(e) {
    let s = await this.api.restoreModule(e);
    return (this.notify([{ type: "save", id: s.id, saveId: s.saveId }]), s);
  }
  async getModuleDependencies(e) {
    return this.api.getModuleDependencies(e);
  }
  async list(e) {
    return this.api.listModules(e);
  }
  async listNamespaces() {
    return this.api.listNamespaces();
  }
  async listPublishedModules(e) {
    return this.api.listPublishedModules(e);
  }
  async lookUpModules(e) {
    return this.api.lookUpModules(e);
  }
  async publish(e) {
    return this.api.publishModule(e);
  }
  async save(e) {
    let s = await this.api.saveModule(e);
    return (this.notify([{ type: "save", id: s.id, saveId: s.saveId }]), s);
  }
  async saveBatch(e) {
    let s = await this.api.saveModules(e);
    return (this.notify(s.data.map((t) => ({ type: "save", id: t.id, saveId: t.saveId }))), s);
  }
  async update(e) {
    let s = await this.api.updateModule(e);
    return (this.notify([{ type: "save", id: s.id, saveId: s.saveId }]), s);
  }
  moduleEventsStream(e) {
    return this.emitter.newStream(e);
  }
  async createNamespace(e) {
    return this.api.createNamespace(e);
  }
};
var f = A(x(), 1);
async function Q(n, e, s, t) {
  let r = `upload${Math.random()}`;
  try {
    t({
      type: "add",
      key: r,
      variant: "progress",
      icon: s,
      primaryText: "Uploading remote file\u2026",
      duration: 1 / 0,
      showCloseButton: "never",
    });
    let a = await o.post(n, { url: e });
    return (
      t({
        type: "add",
        key: r,
        variant: "success",
        primaryText: "Your file",
        secondaryText: "has been uploaded.",
        duration: 1e4,
        icon: "success",
        moveToTop: !0,
      }),
      a
    );
  } catch (a) {
    throw (
      t({
        type: "add",
        key: r,
        variant: "error",
        primaryText: "Error uploading file.",
        secondaryText: "Please try again.",
        duration: 3e4,
        icon: "error",
        moveToTop: !0,
      }),
      a
    );
  }
}
var h = T("useAPI"),
  E = class {
    constructor(e, s, t = R) {
      d(this, "socket", e);
      d(this, "projectId", s);
      d(this, "dispatch", t);
      d(this, "apiBaseURL", w().api);
      d(this, "packagesPerPage", 36);
    }
    wait(e) {
      o.wait(e);
    }
    normalizeRole(e) {
      return e === "contentCollaborator" && !S.isOn("contentEditor") ? "collaborator" : e;
    }
    getACL() {
      o.get(`/web/projects/${this.projectId}/acl/`, {
        contentCollaboratorEnabled: S.isOn("contentEditor"),
      })
        .then(({ users: e, invites: s, accessRequests: t }) => {
          let r = e.map((i) => ({
              ...i,
              kind: "user",
              role: this.normalizeRole(i.role),
              permissions: i.permissions,
            })),
            a = s.map((i) => ({
              ...i,
              kind: "invite",
              role: this.normalizeRole(i.role),
              permissions: i.permissions,
            }));
          this.dispatch({
            type: "resetACL",
            acl: [...r, ...a],
            accessRequests: t.map((i) => ({ ...i, kind: "accessRequest" })),
          });
        })
        .catch((e) => h.error("Failed to get ACL:", e));
    }
    setInitialProject(e) {
      e.then((s) => {
        this.dispatch({ type: "setProject", project: s });
      }).catch((s) => h.error("Failed to set initial project:", s));
    }
    getProject() {
      o.get(`/web/projects/${this.projectId}`, {
        includeUsageDataV2: "true",
        includeAiCreditLimit: "true",
      })
        .then((e) => {
          this.dispatch({ type: "setProject", project: e });
        })
        .catch((e) => h.error("Failed to get project:", e));
    }
    async pollProject({ intervalMillis: e, attempts: s, stopCondition: t }) {
      let r = await D(this.projectId, { intervalMillis: e, attempts: s, stopCondition: t });
      return (
        r.status === 0 &&
          (this.dispatch({ type: "setProject", project: r.project }),
          this.notifyProjectChange("metadata")),
        r
      );
    }
    async invite(e) {
      let s = await K(this.projectId, e);
      return (
        s.status === 0 &&
          (this.dispatch({ type: "updateACL", acl: [s.aclEntry] }),
          this.notifyProjectChange("acl")),
        s
      );
    }
    async removeInvite({ id: e }) {
      (await o.deleteRaw(`/web/projects/${this.projectId}/invites/${e}`),
        this.notifyProjectChange("acl"),
        this.getACL());
    }
    async updateUserPermissions(e) {
      let s = await V(this.projectId, e);
      return (s.status === 0 && (this.notifyProjectChange("acl"), this.getACL()), s);
    }
    async requestAccess(e) {
      let s = await _(e);
      return (this.notifyProjectChange("acl"), s);
    }
    async grantProjectAccessRequest({ id: e }) {
      let s = await H(e);
      return (s.status === 0 && (this.notifyProjectChange("acl"), this.getACL()), s);
    }
    async denyProjectAccessRequest({ id: e }) {
      let s = await G(e);
      return (s.status === 0 && (this.notifyProjectChange("acl"), this.getACL()), s);
    }
    async forceRefreshACL() {
      (this.notifyProjectChange("acl"), this.getACL());
    }
    async removeUserPermissions({ id: e }) {
      (await o.deleteRaw(`/web/projects/${this.projectId}/acl/${e}`),
        this.notifyProjectChange("acl"),
        this.getACL());
    }
    async updateProject(e, s = !0) {
      s && this.dispatch({ type: "updateProject", changes: e });
      try {
        (await J(this.projectId, e), this.getProject(), this.notifyProjectChange("metadata"));
      } catch (t) {
        throw (h.error("Failed to update project:", t), t);
      }
    }
    async subscribeToNotifications() {
      await o.postRaw(`/web/projects/${this.projectId}/threads/notifications/subscribe`);
    }
    async unsubscribeFromNotifications() {
      await o.postRaw(`/web/projects/${this.projectId}/threads/notifications/unsubscribe`);
    }
    async getAssets(e = {}) {
      let { updatedFrom: s } = e,
        t = `/web/v2/projects/${this.projectId}/assets/`;
      if (s) {
        let a = new URLSearchParams({ updatedFrom: s });
        t += `?${a.toString()}`;
      }
      let r = await o.get(t);
      if (!Array.isArray(r.assets)) {
        let a = new Error("malformed /projects/./assets/ response");
        throw (h.reportError(a, r), a);
      }
      return r;
    }
    async uploadAsset(e, { maxFileSize: s, onExceedsCustomMaxSize: t, onToast: r = R } = {}) {
      let a = new URL(`/web/projects/${this.projectId}/assets`, this.apiBaseURL).href,
        i = await C({
          endpoint: a,
          fieldName: "file",
          file: e,
          icon: "image",
          onToast: r,
          customMaxSize: s,
          onExceedsCustomMaxSize: t,
        });
      return (i && this.notifyProjectChange("assets"), i);
    }
    async uploadUserAsset(e, { maxFileSize: s, onExceedsCustomMaxSize: t, onToast: r = R } = {}) {
      let a = new URL("/web/users/assets", this.apiBaseURL).href;
      return C({
        endpoint: a,
        fieldName: "file",
        file: e,
        icon: "image",
        onToast: r,
        customMaxSize: s,
        onExceedsCustomMaxSize: t,
      });
    }
    async uploadAssetByURL(e, s = R) {
      let t = await Q(`/web/projects/${this.projectId}/assets/fetch`, e, "image", s);
      return (t && this.notifyProjectChange("assets"), t);
    }
    async duplicateAssets(e, s) {
      if (this.projectId === s)
        return (h.warn("Attempted to duplicate assets for current project"), []);
      let t = await o.post(`/web/projects/${this.projectId}/assets/duplicate`, {
        sourceProjectId: s,
        keys: e,
      });
      return (t && this.notifyProjectChange("assets"), t.assets);
    }
    async duplicateWorkspaceAssets(e, s) {
      let t = await o.post(`/web/projects/${this.projectId}/assets/duplicate`, {
        sourceTeamId: s,
        keys: e,
      });
      return (t && this.notifyProjectChange("assets"), t.assets);
    }
    async duplicateModuleAssets(e, s, t) {
      let r = { moduleId: e, saveId: s };
      t && t.length > 0 && (r.keys = t);
      let a = await o.post(`/web/projects/${this.projectId}/assets/duplicate-module`, r);
      return (a && this.notifyProjectChange("assets"), a.assets);
    }
    async deleteAssets(e) {
      let s = await o.delete(`/web/projects/${this.projectId}/assets/batch`, { keys: e });
      return (this.notifyProjectChange("assetsInvalidated"), s);
    }
    async createModule(e) {
      let s = new FormData();
      return (
        this.addModuleRequestToForm(e, s),
        await o.postRaw("/modules/v1/modules/", s).then((r) => r.json())
      );
    }
    async deleteModule({ moduleId: e }) {
      await o.deleteRaw(`/modules/v1/modules/${e}${this.modulesCopyOnWriteParam()}`);
    }
    async restoreModule({ moduleId: e, name: s }) {
      let t = {};
      return (s !== void 0 && (t.name = s), await o.post(`/modules/v1/modules/${e}/restore`, t));
    }
    async getModule({ moduleId: e, saveId: s }) {
      let t;
      return (
        s ? (t = `/modules/v1/modules/${e}/saves/${s}`) : (t = `/modules/v1/modules/${e}`),
        o.get(t)
      );
    }
    async getModuleDependencies({ moduleId: e, saveId: s }) {
      return o.get(`/modules/v1/modules/${e}/saves/${s}/dependencies/`);
    }
    async listModules({ types: e } = {}) {
      let s = new URLSearchParams();
      if (e) for (let r of e) s.append("type", r);
      return await o.get(`/modules/v1/modules/?${s.toString()}`, { projectId: this.projectId });
    }
    async listNamespaces() {
      return await o.get("/modules/v1/namespaces/");
    }
    async createNamespace(e) {
      return await o.post("/modules/v1/namespaces/", e);
    }
    async listPublishedModules({ namespace: e }) {
      let s = `/modules/v1/modules/namespaces/${encodeURIComponent(e)}/published/`;
      return await o.get(s);
    }
    async lookUpModules(e) {
      return o.post("/modules/v1/modules/batch/lookup/?respectIncludeStatus=true", e);
    }
    async publishModule({ namespace: e, name: s, ...t }) {
      let r = `/modules/v1/namespaces/${encodeURIComponent(e)}/published/${encodeURIComponent(s)}`;
      return await o.post(r, t);
    }
    async updateModule({ moduleId: e, ...s }) {
      return await o.post(`/modules/v1/modules/${e}${this.modulesCopyOnWriteParam()}`, s);
    }
    async saveModule(e) {
      let s = new FormData();
      return (
        await this.addModuleRequestToForm(e, s),
        await o
          .postRaw(`/modules/v1/modules/${e.moduleId}/saves/${this.modulesCopyOnWriteParam()}`, s)
          .then((r) => r.json())
      );
    }
    async saveModules({ batch: e }) {
      let s = new FormData();
      return (
        await Promise.all(e.map((r) => this.addModuleRequestToForm(r, s))),
        await o
          .postRaw(`/modules/v1/modules/batch/saves/${this.modulesCopyOnWriteParam()}`, s)
          .then((r) => r.json())
      );
    }
    async addModuleRequestToForm(e, s) {
      let { files: t, ...r } = e,
        a = s.getAll("metadata").length;
      (L && window.CompressionStream && (r.transferEncoding = "gzip"),
        s.append(
          "metadata",
          JSON.stringify({
            ...r,
            projectId: this.projectId,
            files: t.map(({ content: i, bytes: p, ...c }) => c),
          })
        ),
        await Promise.all(
          t.map(async (i) => {
            let p = i.content ?? i.bytes;
            F(!W(p), "File needs content or bytes");
            let c = new Blob([p]);
            if (L && window.CompressionStream) {
              let u = new window.CompressionStream("gzip"),
                k = c.stream();
              c = await new Response(k.pipeThrough(u)).blob();
              let v = p.length - c.size,
                j = (v / p.length) * 100;
              h.debug("Saved", v, "bytes", `(${j.toFixed(1)}%)`, "compressing", i.name);
            }
            s.append(`files[${a}]`, new File([c], i.name));
          })
        ));
    }
    modulesCopyOnWriteParam() {
      return `?copyOnWrite=${this.projectId}`;
    }
    async requestAgentScreenshot(e) {
      return o.post("/web/agents/screenshot", e);
    }
    async getFileList() {
      return o.getRaw(`/web/vekter/projects/${this.projectId}/files`);
    }
    async getFile(e) {
      return o.getRaw(`/web/vekter/projects/${this.projectId}/files/${e}`);
    }
    async saveFile(e, s) {
      let t = new FormData(),
        r = new File([s], e, { type: "text/plain" });
      return (
        t.set("file", r),
        o.postRaw(`/web/vekter/projects/${this.projectId}/files/${e}`, t, void 0)
      );
    }
    async deleteFile(e) {
      return o.deleteRaw(`/web/vekter/projects/${this.projectId}/files/${e}`);
    }
    async getBuildOutput(e) {
      return o.getRaw(`/web/projects/${this.projectId}/files/${e}`);
    }
    async getPackage(e) {
      let { fromPublicPackages: s, packageName: t } = e;
      return o.get(`/store/packages${s ? "" : "/private"}/${t}`);
    }
    async deletePackage(e) {
      let { fromPublicPackages: s, packageName: t } = e;
      await o.deleteRaw(`/store/packages${s ? "" : "/private"}/${t}`);
    }
    async getPackageVersionStatus(e) {
      let { isPrivate: s, packageName: t, version: r } = e;
      return o.get(`/store/packages${s ? "/private" : ""}/${t}/version/${r}`);
    }
    async preflightPackage(e) {
      let { fromPublicPackages: s, body: t } = e;
      return o.post(`/store/packages${s ? "" : "/private"}/preflight`, t);
    }
    async findPackage(e) {
      let { fromPublicPackages: s, friendlyName: t, spaceId: r } = e;
      return o.getRaw(`/store/packages${s ? "" : "/private"}/find-by-slugify`, {
        name: t,
        spaceId: r,
      });
    }
    async findPackages(e) {
      let { fromPublicPackages: s, query: t, offset: r, spaceIds: a } = e;
      return o.getRaw(`/store/packages${s ? "" : "/private"}/search`, {
        query: t,
        offset: r,
        limit: this.packagesPerPage,
        spaceIds: a,
      });
    }
    async favoritePackage(e) {
      let { fromPublicPackages: s, packageName: t } = e;
      return o.postRaw(`/store/packages${s ? "" : "/private"}/${t}/favorite`);
    }
    async unfavoritePackage(e) {
      let { fromPublicPackages: s, packageName: t } = e;
      return o.deleteRaw(`/store/packages${s ? "" : "/private"}/${t}/favorite`);
    }
    async getPackages(e) {
      let { fromPublicPackages: s, section: t, offset: r, spaceIds: a } = e;
      return o.getRaw(`/store/packages${s ? "" : "/private"}/${t || ""}`, {
        offset: r,
        limit: this.packagesPerPage,
        spaceIds: a,
      });
    }
    async getPopularPackages(e) {
      let { fromPublicPackages: s, offset: t, days: r, spaceIds: a } = e;
      return o.getRaw(`/store/packages${s ? "" : "/private"}/popular`, {
        offset: t,
        days: r,
        limit: this.packagesPerPage,
        spaceIds: a,
      });
    }
    async getFeaturedPackages(e) {
      let { fromPublicPackages: s, offset: t } = e;
      return o.getRaw(`/store/packages${s ? "" : "/private"}/`, {
        featured: !0,
        offset: t,
        limit: this.packagesPerPage,
      });
    }
    async getPublisherPackages(e) {
      let { publisherId: s, offset: t } = e;
      return o.getRaw(`/store/packages/published-by/${s}`, {
        offset: t,
        limit: this.packagesPerPage,
      });
    }
    async getTrendingPackages() {
      return o.getRaw("/store/packages/trending");
    }
    async getPackagesMetadata(e) {
      return o.post("/store/meta/get-many", e);
    }
    async listPhotos(e) {
      return o.get("/web/unsplash/photos", e);
    }
    async searchPhotos(e) {
      return o.get("/web/unsplash/search/photos", e);
    }
    async getRandomPhoto(e) {
      return o.get("/web/unsplash/photos/random", e);
    }
    async downloadPhoto(e) {
      return o.get(`/web/unsplash/photos/${e.id}/download`);
    }
    async checkControlRequest() {
      return o.get("/auth/analysis/account-sharing");
    }
    async takeControl(e) {
      return o.post("/auth/analysis/account-sharing/take-control", e);
    }
    async linkUserAttachmentAssetToProject(e) {
      (await o.post(`/web/projects/${this.projectId}/assets/duplicate-from-user`, { keys: [e] })) &&
        this.notifyProjectChange("assets");
    }
    notifyProjectChange(e) {
      this.socket.send({ type: "notifyProjectChange", value: { scope: e } });
    }
  };
function Ne(n, e, s) {
  let t = (0, f.useMemo)(() => new E(n, e.projectId, s), [n, e.projectId, s]);
  (0, f.useEffect)(() => {
    t.getACL();
  }, [t]);
  let r = (0, f.useRef)(e);
  return (
    (r.current = e),
    (0, f.useEffect)(
      () =>
        n.onMessage((a) => {
          let i = r.current;
          if (a.type === "join") {
            if (i.aclById[a.id]) return;
          } else if (a.type === "welcome") {
            if (i.acl.length === 0) return;
            let p = !1;
            for (let c of i.activeIds)
              if (!i.aclById[c]) {
                p = !0;
                break;
              }
            if (!p) return;
          } else return;
          t.getACL();
        }),
      [t, n]
    ),
    t
  );
}
async function ze() {
  let n = await z.getAccessToken();
  if (n) return ["framer.bearer.v1", n];
}
function He(n) {
  let e = w(),
    s = new URL(e.app);
  return (
    (s.protocol = s.protocol === "http:" ? "ws:" : "wss:"),
    (s.pathname = `/projects/${n}/socket`),
    s.href
  );
}
export { ie as a, Y as b, E as c, Ne as d, ze as e, He as f };
//# sourceMappingURL=chunk-RRP6F275.mjs.map
