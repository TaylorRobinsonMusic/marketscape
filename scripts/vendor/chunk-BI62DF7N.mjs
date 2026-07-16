import {
  $g as te,
  Bh as Is,
  Ch as Es,
  Gf as ts,
  Te as $o,
  _g as Qt,
  ah as gs,
  bh as Ne,
  ch as fs,
  dh as Le,
  fh as ys,
  uh as Cs,
  yh as Ms,
  zg as ss,
  zh as vs,
} from "./chunk-RYAQJ2V7.mjs";
import {
  c as Eo,
  d as So,
  e as we,
  g as Bo,
  i as Qo,
  l as ls,
  m as ps,
  n as cs,
  o as Et,
  p as Z,
  q as us,
  r as St,
  s as ms,
  x as As,
  y as Bt,
} from "./chunk-FKWB3ID3.mjs";
import { o as is, p as as, t as rs, u as ds, w as vt } from "./chunk-AMYECL4X.mjs";
import { e as Mt } from "./chunk-C4EY2TIT.mjs";
import { b as It } from "./chunk-ZONRPRQ6.mjs";
import { h as Yo } from "./chunk-Q3WX3LWW.mjs";
import { a as ns } from "./chunk-D3SZBJZX.mjs";
import { b as L } from "./chunk-HEVPYMM6.mjs";
import { na as mo, oa as Ao } from "./chunk-WGS5WK5D.mjs";
import { qb as Ho, rb as zo, vb as qo } from "./chunk-H6ES2254.mjs";
import { f as Vo } from "./chunk-4DDFUFU6.mjs";
import { lh as ae } from "./chunk-PBNCD2KE.mjs";
import {
  $n as ue,
  Hf as xo,
  If as To,
  Jf as No,
  Lf as mt,
  Mf as Lo,
  Nf as ko,
  _n as X,
  ao as P,
  co as Te,
  l as bo,
} from "./chunk-ODCA7OFJ.mjs";
import { i as wo } from "./chunk-L2QYKMOJ.mjs";
import { f as Io } from "./chunk-KYPY4QS7.mjs";
import { c as xe } from "./chunk-IOMYA5AY.mjs";
import { a as ut } from "./chunk-RNHTTH2C.mjs";
import { a as ee, b as wt } from "./chunk-ZWKF4AND.mjs";
import { b as Xo, c as Zo, e as es, f as D, g as hs } from "./chunk-B6EMBTP4.mjs";
import { a as os } from "./chunk-5AZDIYNN.mjs";
import {
  Ad as Qe,
  Au as _o,
  Bu as G,
  Cu as k,
  Eu as ft,
  Fu as jo,
  Gd as fo,
  Gu as yt,
  Hu as Jo,
  Kc as ho,
  Kd as yo,
  Ld as Co,
  Oi as re,
  Ou as be,
  Pu as Ct,
  Qu as B,
  Ru as De,
  Vu as ce,
  Wu as Wo,
  Xl as vo,
  du as Po,
  fu as de,
  gu as le,
  ho as Do,
  hu as At,
  iu as ht,
  ju as Ro,
  kd as go,
  ku as Fo,
  lu as Uo,
  ob as ct,
  su as H,
  tu as pe,
  uu as Ko,
  ve as Mo,
  vu as Oo,
  wu as gt,
  zu as Go,
} from "./chunk-AHICRW35.mjs";
import { c as Dn } from "./chunk-YSYEFSR3.mjs";
import { f as rt, j as dt } from "./chunk-SSHL25ZI.mjs";
import { a as lt } from "./chunk-VKWF2PPO.mjs";
import { a as at } from "./chunk-XD24P57D.mjs";
import { jg as Be } from "./chunk-2S627D2L.mjs";
import { a as ao } from "./chunk-T77QJFCJ.mjs";
import { o as ie } from "./chunk-CFUM4JW5.mjs";
import { b as O, e as ro, g as pt, l as lo, m as po, o as co, t as uo } from "./chunk-DYNCKUFC.mjs";
import { c as Se } from "./chunk-NHVEFQOW.mjs";
import {
  Ba as $,
  Ga as Ee,
  Ja as it,
  Ka as oo,
  La as W,
  Ma as so,
  Na as no,
  X as K,
  Ya as io,
  ia as Y,
  k as Xt,
  ta as Ie,
  ua as Zt,
  wa as nt,
  ya as eo,
  za as to,
} from "./chunk-V7MLU2WL.mjs";
import { a as M, b as U } from "./chunk-425IX65M.mjs";
import { a as V } from "./chunk-HMF7T2NG.mjs";
import { c as ne, e as Me, j as h, k as ve, l as ot, o as st } from "./chunk-CT63CFX7.mjs";
var ge = ne((j) => {
  "use strict";
  j.removeLeadingAndTrailingHTTPWhitespace = (s) =>
    s.replace(/^[ \t\n\r]+/u, "").replace(/[ \t\n\r]+$/u, "");
  j.removeTrailingHTTPWhitespace = (s) => s.replace(/[ \t\n\r]+$/u, "");
  j.isHTTPWhitespaceChar = (s) =>
    s === " " ||
    s === "	" ||
    s ===
      `
` ||
    s === "\r";
  j.solelyContainsHTTPTokenCodePoints = (s) => /^[-!#$%&'*+.^_`|~A-Za-z0-9]*$/u.test(s);
  j.soleyContainsHTTPQuotedStringTokenCodePoints = (s) =>
    /^[\t\u0020-\u007E\u0080-\u00FF]*$/u.test(s);
  j.asciiLowercase = (s) => s.replace(/[A-Z]/gu, (e) => e.toLowerCase());
  j.collectAnHTTPQuotedString = (s, e) => {
    let t = "";
    for (e++; ; ) {
      for (; e < s.length && s[e] !== '"' && s[e] !== "\\"; ) ((t += s[e]), ++e);
      if (e >= s.length) break;
      let o = s[e];
      if ((++e, o === "\\")) {
        if (e >= s.length) {
          t += "\\";
          break;
        }
        ((t += s[e]), ++e);
      } else break;
    }
    return [t, e];
  };
});
var on = ne((Ol, tn) => {
  "use strict";
  var {
    asciiLowercase: We,
    solelyContainsHTTPTokenCodePoints: oa,
    soleyContainsHTTPQuotedStringTokenCodePoints: sa,
  } = ge();
  tn.exports = class {
    constructor(e) {
      this._map = e;
    }
    get size() {
      return this._map.size;
    }
    get(e) {
      return ((e = We(String(e))), this._map.get(e));
    }
    has(e) {
      return ((e = We(String(e))), this._map.has(e));
    }
    set(e, t) {
      if (((e = We(String(e))), (t = String(t)), !oa(e)))
        throw new Error(
          `Invalid MIME type parameter name "${e}": only HTTP token code points are valid.`
        );
      if (!sa(t))
        throw new Error(
          `Invalid MIME type parameter value "${t}": only HTTP quoted-string token code points are valid.`
        );
      return this._map.set(e, t);
    }
    clear() {
      this._map.clear();
    }
    delete(e) {
      return ((e = We(String(e))), this._map.delete(e));
    }
    forEach(e, t) {
      this._map.forEach(e, t);
    }
    keys() {
      return this._map.keys();
    }
    values() {
      return this._map.values();
    }
    entries() {
      return this._map.entries();
    }
    [Symbol.iterator]() {
      return this._map[Symbol.iterator]();
    }
  };
});
var an = ne((Gl, nn) => {
  "use strict";
  var {
    removeLeadingAndTrailingHTTPWhitespace: na,
    removeTrailingHTTPWhitespace: sn,
    isHTTPWhitespaceChar: ia,
    solelyContainsHTTPTokenCodePoints: Gt,
    soleyContainsHTTPQuotedStringTokenCodePoints: aa,
    asciiLowercase: _t,
    collectAnHTTPQuotedString: ra,
  } = ge();
  nn.exports = (s) => {
    s = na(s);
    let e = 0,
      t = "";
    for (; e < s.length && s[e] !== "/"; ) ((t += s[e]), ++e);
    if (t.length === 0 || !Gt(t) || e >= s.length) return null;
    ++e;
    let o = "";
    for (; e < s.length && s[e] !== ";"; ) ((o += s[e]), ++e);
    if (((o = sn(o)), o.length === 0 || !Gt(o))) return null;
    let n = { type: _t(t), subtype: _t(o), parameters: new Map() };
    for (; e < s.length; ) {
      for (++e; ia(s[e]); ) ++e;
      let i = "";
      for (; e < s.length && s[e] !== ";" && s[e] !== "="; ) ((i += s[e]), ++e);
      if (((i = _t(i)), e < s.length)) {
        if (s[e] === ";") continue;
        ++e;
      }
      let a = null;
      if (s[e] === '"') for ([a, e] = ra(s, e); e < s.length && s[e] !== ";"; ) ++e;
      else {
        for (a = ""; e < s.length && s[e] !== ";"; ) ((a += s[e]), ++e);
        if (((a = sn(a)), a === "")) continue;
      }
      i.length > 0 && Gt(i) && aa(a) && !n.parameters.has(i) && n.parameters.set(i, a);
    }
    return n;
  };
});
var dn = ne((_l, rn) => {
  "use strict";
  var { solelyContainsHTTPTokenCodePoints: da } = ge();
  rn.exports = (s) => {
    let e = `${s.type}/${s.subtype}`;
    if (s.parameters.size === 0) return e;
    for (let [t, o] of s.parameters)
      ((e += ";"),
        (e += t),
        (e += "="),
        (!da(o) || o.length === 0) && ((o = o.replace(/(["\\])/gu, "\\$1")), (o = `"${o}"`)),
        (e += o));
    return e;
  };
});
var un = ne((Jl, cn) => {
  "use strict";
  var la = on(),
    pa = an(),
    ca = dn(),
    { asciiLowercase: ln, solelyContainsHTTPTokenCodePoints: pn } = ge();
  cn.exports = class {
    constructor(e) {
      e = String(e);
      let t = pa(e);
      if (t === null) throw new Error(`Could not parse MIME type string "${e}"`);
      ((this._type = t.type),
        (this._subtype = t.subtype),
        (this._parameters = new la(t.parameters)));
    }
    static parse(e) {
      try {
        return new this(e);
      } catch {
        return null;
      }
    }
    get essence() {
      return `${this.type}/${this.subtype}`;
    }
    get type() {
      return this._type;
    }
    set type(e) {
      if (((e = ln(String(e))), e.length === 0))
        throw new Error("Invalid type: must be a non-empty string");
      if (!pn(e)) throw new Error(`Invalid type ${e}: must contain only HTTP token code points`);
      this._type = e;
    }
    get subtype() {
      return this._subtype;
    }
    set subtype(e) {
      if (((e = ln(String(e))), e.length === 0))
        throw new Error("Invalid subtype: must be a non-empty string");
      if (!pn(e)) throw new Error(`Invalid subtype ${e}: must contain only HTTP token code points`);
      this._subtype = e;
    }
    get parameters() {
      return this._parameters;
    }
    toString() {
      return ca(this);
    }
    isJavaScript({ prohibitParameters: e = !1 } = {}) {
      switch (this._type) {
        case "text":
          switch (this._subtype) {
            case "ecmascript":
            case "javascript":
            case "javascript1.0":
            case "javascript1.1":
            case "javascript1.2":
            case "javascript1.3":
            case "javascript1.4":
            case "javascript1.5":
            case "jscript":
            case "livescript":
            case "x-ecmascript":
            case "x-javascript":
              return !e || this._parameters.size === 0;
            default:
              return !1;
          }
        case "application":
          switch (this._subtype) {
            case "ecmascript":
            case "javascript":
            case "x-ecmascript":
            case "x-javascript":
              return !e || this._parameters.size === 0;
            default:
              return !1;
          }
        default:
          return !1;
      }
    }
    isXML() {
      return (
        (this._subtype === "xml" && (this._type === "text" || this._type === "application")) ||
        this._subtype.endsWith("+xml")
      );
    }
    isHTML() {
      return this._subtype === "html" && this._type === "text";
    }
  };
});
function Ss(s, e) {
  let t = s.stores.projectStore.resourceLimits?.fileUploadLimitInMB;
  if ((M(typeof t == "number", "fileUploadLimitInMB is not a number"), e / It >= Yo))
    return s.stores.modalStore.set({
      type: "UpsellEnterprise",
      source: "upsell",
      description:
        "Sign up for an Enterprise plan to increase your file upload limit to 150MB and unlock other powerful features that help scale your site.",
      upsell: "file-limit-enterprise-upsell",
      upsellFeatures: [
        "Advanced Permissions",
        "Custom Limits",
        "Custom Hosting",
        "Custom Proxy Support",
        "Enterprise Security",
        "Dedicated Support",
      ],
    });
  let o = t.toLocaleString() + "MB",
    n =
      (e / It).toLocaleString(void 0, { minimumFractionDigits: 0, maximumFractionDigits: 1 }) +
      "MB";
  return s.stores.modalStore.set({
    source: "upsell",
    type: "UpsellFeature",
    upsellFeature: "fileUploadLimitInMB",
    title: "File Upload Limit",
    description: `Your current plan limits file uploads to ${o}, and you\u2019re trying to upload a file that\u2019s ${n}. Upgrade your site to increase the limit and upload your file.`,
  });
}
var Bs = Y("UploadUserAssetsService");
function xn(s) {
  let e = s.properties?.image?.width,
    t = s.properties?.image?.height;
  return (
    M(e !== void 0 && t !== void 0, "Image asset missing width/height"),
    { naturalWidth: e, naturalHeight: t }
  );
}
var bt = class {
    constructor(e) {
      h(this, "api", e);
    }
    async uploadImage(e, { silent: t = !1, maxFileSize: o, onExceedsCustomMaxSize: n } = {}) {
      try {
        let i = t ? ut : (r) => L(r);
        if (!xe.includes(e.type)) {
          i({
            variant: "error",
            icon: "error",
            duration: 1 / 0,
            primaryText: "Unsupported image type.",
            secondaryText: "Try png or jpg.",
            type: "add",
          });
          return;
        }
        if (e.type === "image/svg+xml") {
          let r = await e.text();
          if (rs(r)) return;
        }
        let a = await this.api.uploadUserAsset(e, {
          maxFileSize: o,
          onExceedsCustomMaxSize: n,
          onToast: i,
        });
        return a
          ? {
              type: "image",
              asset: a,
              filename: rt(a),
              originalFilename: a.name,
              url: dt(a),
              imageSize: xn(a),
            }
          : void 0;
      } catch (i) {
        if (t) throw i;
        (L({
          variant: "error",
          icon: "error",
          duration: 1 / 0,
          primaryText: "Couldn\u2019t add image.",
          secondaryText: "It may be too large.",
          type: "add",
        }),
          Bs.reportError(i, { fileName: e.name, fileSize: e.size, fileType: e.type }));
      }
    }
    async uploadVideo(e, { silent: t = !1, maxFileSize: o, onExceedsCustomMaxSize: n } = {}) {
      try {
        let i = t ? ut : (d) => L(d),
          [a, r] = await Promise.all([
            Nn(is(e), 1e4, "Measuring the video took more than 10 seconds"),
            this.api.uploadUserAsset(e, { maxFileSize: o, onExceedsCustomMaxSize: n, onToast: i }),
          ]);
        return r
          ? {
              type: "video",
              asset: r,
              filename: rt(r),
              originalFilename: r.name,
              url: dt(r),
              dimensions: a,
            }
          : void 0;
      } catch (i) {
        if (t) throw i;
        (L({
          variant: "error",
          icon: "error",
          duration: 1 / 0,
          primaryText: "Couldn't add video.",
          secondaryText: "Please retry.",
          type: "add",
        }),
          Bs.reportError(i, { fileName: e.name, fileSize: e.size, fileType: e.type }));
      }
    }
    async uploadFile(e, t = {}) {
      throw new Error("UploadUserAssetsService.uploadFile is not supported; use uploadImage.");
    }
    async uploadAssetByURL(e, t = {}) {
      throw new Error(
        "UploadUserAssetsService.uploadAssetByURL is not supported; use uploadImage."
      );
    }
  },
  { service: Qs, resolve: Tn } = as();
function sr(s) {
  Tn(new bt(s));
}
function Nn(s, e, t = "timed out") {
  return new Promise((o, n) => {
    (setTimeout(() => {
      n(Error(t));
    }, e),
      s.then(o, n));
  });
}
var oe,
  me,
  se = class {
    constructor(e) {
      h(this, "limit", e);
      ot(this, oe, 0);
      ot(this, me, []);
    }
    async run(e, t) {
      if (ve(this, oe) === this.limit) {
        let o = new Promise((n) => {
          ve(this, me).push(n);
        });
        (t && (o = Promise.race([o, Ln(t)])), await o);
      }
      (bs(t), st(this, oe)._++);
      try {
        return await e();
      } finally {
        (st(this, oe)._--, ve(this, me).shift()?.());
      }
    }
  };
((oe = new WeakMap()), (me = new WeakMap()));
var ws = new WeakMap();
function Ln(s) {
  let e = ws.get(s);
  return (
    e ||
      (bs(s),
      (e = new Promise((t, o) => {
        s.addEventListener(
          "abort",
          () => {
            o(s.reason);
          },
          { once: !0 }
        );
      })),
      ws.set(s, e)),
    e
  );
}
function bs(s) {
  if (s?.aborted) throw s.reason;
}
function kn(s) {
  let e = s.type || "unknown type";
  return s.size === 0
    ? `Failed to upload file (empty file, ${e})`
    : `Failed to upload file (${e}, ${s.size} bytes)`;
}
var ke = class {
  constructor(e, { concurrency: t = 5, silent: o = !1, assetOwnerType: n = "project" } = {}) {
    h(this, "engine", e);
    h(this, "uploads", new Map());
    h(this, "completed", 0);
    h(this, "failed", 0);
    h(this, "generating", !1);
    h(this, "resolveStatusUpdate");
    h(this, "limiter");
    h(this, "silent");
    h(this, "assetUploadService");
    h(this, "assetOwnerType");
    ((this.limiter = new se(t)),
      (this.silent = o),
      (this.assetOwnerType = n),
      (this.assetUploadService = n === "user" ? Qs : vt));
  }
  add(e) {
    return this.createTask(e, (t) => t)();
  }
  createTask(e, t) {
    let o = this.uploads.get(e);
    o ||
      ((o = {
        task: async () => {
          try {
            return typeof e == "string"
              ? e.startsWith("data:")
                ? await this.uploadFile(await ns(e, "imported"))
                : await this.assetUploadService.uploadAssetByURL(e, {
                    silent: this.silent,
                    refreshAssetService: !1,
                  })
              : await this.uploadFile(e);
          } catch (a) {
            throw (this.failed++, a);
          } finally {
            (this.completed++, this.resolveStatusUpdate?.());
          }
        },
      }),
      this.uploads.set(e, o));
    let n = o;
    return async () => {
      n.resultPromise ||
        ((n.resultPromise = this.limiter.run(n.task)), this.resolveStatusUpdate?.());
      let i = await n.resultPromise;
      return (
        this.assetOwnerType === "project" &&
          this.engine.stores.assetStore.assetService?.addAssets([i.asset]),
        t(i)
      );
    };
  }
  async uploadFile(e) {
    let t = this.engine.stores.projectStore.resourceLimits?.fileUploadLimitInMB ?? void 0,
      o = {
        silent: this.silent,
        maxFileSize: t,
        onExceedsCustomMaxSize: (i) => Ss(this.engine, i),
        refreshAssetService: !1,
      },
      n;
    if (
      (e.type.startsWith("image/")
        ? (n = await this.assetUploadService.uploadImage(e, o))
        : e.type.startsWith("video/")
          ? (n = await this.assetUploadService.uploadVideo(e, o))
          : (n = await vt.uploadFile(e, o)),
      !n)
    )
      throw Error(kn(e));
    return n;
  }
  get active() {
    return [...this.uploads.values()].map(({ resultPromise: e }) => e).filter(po);
  }
  get status() {
    let { active: e, completed: t, failed: o } = this;
    return { started: e.length, completed: t, failed: o };
  }
  async *statusUpdates() {
    if (this.generating) throw Error("`statusUpdates` is in use by another call");
    for (this.generating = !0, yield this.status; this.completed < this.active.length; )
      (await new Promise((e) => {
        this.resolveStatusUpdate = () => {
          (e(), (this.resolveStatusUpdate = void 0));
        };
      }),
        yield this.status);
    (await this.engine.stores.assetStore.assetService?.refresh().catch(K), (this.generating = !1));
  }
  async results() {
    let e = await Promise.allSettled(this.active).then((t) => t.filter(uo).map((o) => o.value));
    return (await this.engine.stores.assetStore.assetService?.refresh().catch(K), e);
  }
};
var Ds = Me(Dn(), 1);
var _ = Me(ao(), 1);
async function Ir(s, e, t = 1 / 0, o) {
  o ??= new ke(s, { silent: !0 });
  let n = [],
    i = [],
    a = [];
  for (let d of e) {
    if (a.length >= t) {
      i.push(d);
      continue;
    }
    if (!xe.includes(d.type)) {
      n.push(d);
      continue;
    }
    let l = o.add(d);
    a.push(l);
  }
  return (
    n.length > 0 &&
      L({
        type: "add",
        key: "importUploadImagesUnsupported",
        variant: "warning",
        primaryText: (0, _.jsxs)("span", { className: ae, children: ["Skipped ", n.length] }),
        secondaryText: "unsupported images.",
        duration: 1e4,
      }),
    i.length > 0 &&
      L({
        type: "add",
        key: "importUploadImagesSkipped",
        variant: "warning",
        primaryText: (0, _.jsxs)("span", { className: ae, children: ["Skipped ", i.length] }),
        secondaryText: "images over field limit.",
        duration: 1e4,
      }),
    Pn(o, a).catch(() => {}),
    (await Promise.all(a)).filter(ds)
  );
}
async function Pn(s, e) {
  let t = "uploadEmbeddedImagesByUrl",
    o = {
      type: "add",
      key: t,
      variant: "progress",
      icon: "image",
      duration: 1 / 0,
      showCloseButton: "never",
    };
  for await (let { completed: n, started: i } of s.statusUpdates())
    L({
      ...o,
      text: (0, _.jsxs)("span", {
        className: "toast-progress-row",
        children: [
          (0, _.jsx)("span", {
            className: "toast-progress-label toast-emphasis",
            children: "Adding images\u2026",
          }),
          (0, _.jsxs)("span", { className: `toast-progress-value ${ae}`, children: [n, "/", i] }),
        ],
      }),
    });
  (await Promise.allSettled(e), Rn(s.status.failed), L({ type: "remove", key: t }));
}
function Rn(s) {
  s <= 0 ||
    L({
      type: "add",
      key: "importUploadImagesFailed",
      variant: "warning",
      primaryText: "Failed to upload",
      secondaryText: (0, _.jsxs)("span", {
        className: ae,
        children: [s, " ", (0, Ds.default)("image", s), "."],
      }),
      duration: 5e3,
    });
}
var Fn = /["&'<>`]/g,
  Un = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  Kn = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
  On = /[|\\{}()[\]^$+*?.]/g,
  xs = new WeakMap();
function Ts(s, e) {
  if (((s = s.replace(e.subset ? Gn(e.subset) : Fn, o)), e.subset || e.escapeOnly)) return s;
  return s.replace(Un, t).replace(Kn, o);
  function t(n, i, a) {
    return e.format(
      (n.charCodeAt(0) - 55296) * 1024 + n.charCodeAt(1) - 56320 + 65536,
      a.charCodeAt(i + 2),
      e
    );
  }
  function o(n, i, a) {
    return e.format(n.charCodeAt(0), a.charCodeAt(i + 1), e);
  }
}
function Gn(s) {
  let e = xs.get(s);
  return (e || ((e = _n(s)), xs.set(s, e)), e);
}
function _n(s) {
  let e = [],
    t = -1;
  for (; ++t < s.length; ) e.push(s[t].replace(On, "\\$&"));
  return new RegExp("(?:" + e.join("|") + ")", "g");
}
var jn = /[\dA-Fa-f]/;
function Ns(s, e, t) {
  let o = "&#x" + s.toString(16).toUpperCase();
  return t && e && !jn.test(String.fromCharCode(e)) ? o : o + ";";
}
var Jn = /\d/;
function Ls(s, e, t) {
  let o = "&#" + String(s);
  return t && e && !Jn.test(String.fromCharCode(e)) ? o : o + ";";
}
var ks = [
  "AElig",
  "AMP",
  "Aacute",
  "Acirc",
  "Agrave",
  "Aring",
  "Atilde",
  "Auml",
  "COPY",
  "Ccedil",
  "ETH",
  "Eacute",
  "Ecirc",
  "Egrave",
  "Euml",
  "GT",
  "Iacute",
  "Icirc",
  "Igrave",
  "Iuml",
  "LT",
  "Ntilde",
  "Oacute",
  "Ocirc",
  "Ograve",
  "Oslash",
  "Otilde",
  "Ouml",
  "QUOT",
  "REG",
  "THORN",
  "Uacute",
  "Ucirc",
  "Ugrave",
  "Uuml",
  "Yacute",
  "aacute",
  "acirc",
  "acute",
  "aelig",
  "agrave",
  "amp",
  "aring",
  "atilde",
  "auml",
  "brvbar",
  "ccedil",
  "cedil",
  "cent",
  "copy",
  "curren",
  "deg",
  "divide",
  "eacute",
  "ecirc",
  "egrave",
  "eth",
  "euml",
  "frac12",
  "frac14",
  "frac34",
  "gt",
  "iacute",
  "icirc",
  "iexcl",
  "igrave",
  "iquest",
  "iuml",
  "laquo",
  "lt",
  "macr",
  "micro",
  "middot",
  "nbsp",
  "not",
  "ntilde",
  "oacute",
  "ocirc",
  "ograve",
  "ordf",
  "ordm",
  "oslash",
  "otilde",
  "ouml",
  "para",
  "plusmn",
  "pound",
  "quot",
  "raquo",
  "reg",
  "sect",
  "shy",
  "sup1",
  "sup2",
  "sup3",
  "szlig",
  "thorn",
  "times",
  "uacute",
  "ucirc",
  "ugrave",
  "uml",
  "uuml",
  "yacute",
  "yen",
  "yuml",
];
var Pe = {
  nbsp: "\xA0",
  iexcl: "\xA1",
  cent: "\xA2",
  pound: "\xA3",
  curren: "\xA4",
  yen: "\xA5",
  brvbar: "\xA6",
  sect: "\xA7",
  uml: "\xA8",
  copy: "\xA9",
  ordf: "\xAA",
  laquo: "\xAB",
  not: "\xAC",
  shy: "\xAD",
  reg: "\xAE",
  macr: "\xAF",
  deg: "\xB0",
  plusmn: "\xB1",
  sup2: "\xB2",
  sup3: "\xB3",
  acute: "\xB4",
  micro: "\xB5",
  para: "\xB6",
  middot: "\xB7",
  cedil: "\xB8",
  sup1: "\xB9",
  ordm: "\xBA",
  raquo: "\xBB",
  frac14: "\xBC",
  frac12: "\xBD",
  frac34: "\xBE",
  iquest: "\xBF",
  Agrave: "\xC0",
  Aacute: "\xC1",
  Acirc: "\xC2",
  Atilde: "\xC3",
  Auml: "\xC4",
  Aring: "\xC5",
  AElig: "\xC6",
  Ccedil: "\xC7",
  Egrave: "\xC8",
  Eacute: "\xC9",
  Ecirc: "\xCA",
  Euml: "\xCB",
  Igrave: "\xCC",
  Iacute: "\xCD",
  Icirc: "\xCE",
  Iuml: "\xCF",
  ETH: "\xD0",
  Ntilde: "\xD1",
  Ograve: "\xD2",
  Oacute: "\xD3",
  Ocirc: "\xD4",
  Otilde: "\xD5",
  Ouml: "\xD6",
  times: "\xD7",
  Oslash: "\xD8",
  Ugrave: "\xD9",
  Uacute: "\xDA",
  Ucirc: "\xDB",
  Uuml: "\xDC",
  Yacute: "\xDD",
  THORN: "\xDE",
  szlig: "\xDF",
  agrave: "\xE0",
  aacute: "\xE1",
  acirc: "\xE2",
  atilde: "\xE3",
  auml: "\xE4",
  aring: "\xE5",
  aelig: "\xE6",
  ccedil: "\xE7",
  egrave: "\xE8",
  eacute: "\xE9",
  ecirc: "\xEA",
  euml: "\xEB",
  igrave: "\xEC",
  iacute: "\xED",
  icirc: "\xEE",
  iuml: "\xEF",
  eth: "\xF0",
  ntilde: "\xF1",
  ograve: "\xF2",
  oacute: "\xF3",
  ocirc: "\xF4",
  otilde: "\xF5",
  ouml: "\xF6",
  divide: "\xF7",
  oslash: "\xF8",
  ugrave: "\xF9",
  uacute: "\xFA",
  ucirc: "\xFB",
  uuml: "\xFC",
  yacute: "\xFD",
  thorn: "\xFE",
  yuml: "\xFF",
  fnof: "\u0192",
  Alpha: "\u0391",
  Beta: "\u0392",
  Gamma: "\u0393",
  Delta: "\u0394",
  Epsilon: "\u0395",
  Zeta: "\u0396",
  Eta: "\u0397",
  Theta: "\u0398",
  Iota: "\u0399",
  Kappa: "\u039A",
  Lambda: "\u039B",
  Mu: "\u039C",
  Nu: "\u039D",
  Xi: "\u039E",
  Omicron: "\u039F",
  Pi: "\u03A0",
  Rho: "\u03A1",
  Sigma: "\u03A3",
  Tau: "\u03A4",
  Upsilon: "\u03A5",
  Phi: "\u03A6",
  Chi: "\u03A7",
  Psi: "\u03A8",
  Omega: "\u03A9",
  alpha: "\u03B1",
  beta: "\u03B2",
  gamma: "\u03B3",
  delta: "\u03B4",
  epsilon: "\u03B5",
  zeta: "\u03B6",
  eta: "\u03B7",
  theta: "\u03B8",
  iota: "\u03B9",
  kappa: "\u03BA",
  lambda: "\u03BB",
  mu: "\u03BC",
  nu: "\u03BD",
  xi: "\u03BE",
  omicron: "\u03BF",
  pi: "\u03C0",
  rho: "\u03C1",
  sigmaf: "\u03C2",
  sigma: "\u03C3",
  tau: "\u03C4",
  upsilon: "\u03C5",
  phi: "\u03C6",
  chi: "\u03C7",
  psi: "\u03C8",
  omega: "\u03C9",
  thetasym: "\u03D1",
  upsih: "\u03D2",
  piv: "\u03D6",
  bull: "\u2022",
  hellip: "\u2026",
  prime: "\u2032",
  Prime: "\u2033",
  oline: "\u203E",
  frasl: "\u2044",
  weierp: "\u2118",
  image: "\u2111",
  real: "\u211C",
  trade: "\u2122",
  alefsym: "\u2135",
  larr: "\u2190",
  uarr: "\u2191",
  rarr: "\u2192",
  darr: "\u2193",
  harr: "\u2194",
  crarr: "\u21B5",
  lArr: "\u21D0",
  uArr: "\u21D1",
  rArr: "\u21D2",
  dArr: "\u21D3",
  hArr: "\u21D4",
  forall: "\u2200",
  part: "\u2202",
  exist: "\u2203",
  empty: "\u2205",
  nabla: "\u2207",
  isin: "\u2208",
  notin: "\u2209",
  ni: "\u220B",
  prod: "\u220F",
  sum: "\u2211",
  minus: "\u2212",
  lowast: "\u2217",
  radic: "\u221A",
  prop: "\u221D",
  infin: "\u221E",
  ang: "\u2220",
  and: "\u2227",
  or: "\u2228",
  cap: "\u2229",
  cup: "\u222A",
  int: "\u222B",
  there4: "\u2234",
  sim: "\u223C",
  cong: "\u2245",
  asymp: "\u2248",
  ne: "\u2260",
  equiv: "\u2261",
  le: "\u2264",
  ge: "\u2265",
  sub: "\u2282",
  sup: "\u2283",
  nsub: "\u2284",
  sube: "\u2286",
  supe: "\u2287",
  oplus: "\u2295",
  otimes: "\u2297",
  perp: "\u22A5",
  sdot: "\u22C5",
  lceil: "\u2308",
  rceil: "\u2309",
  lfloor: "\u230A",
  rfloor: "\u230B",
  lang: "\u2329",
  rang: "\u232A",
  loz: "\u25CA",
  spades: "\u2660",
  clubs: "\u2663",
  hearts: "\u2665",
  diams: "\u2666",
  quot: '"',
  amp: "&",
  lt: "<",
  gt: ">",
  OElig: "\u0152",
  oelig: "\u0153",
  Scaron: "\u0160",
  scaron: "\u0161",
  Yuml: "\u0178",
  circ: "\u02C6",
  tilde: "\u02DC",
  ensp: "\u2002",
  emsp: "\u2003",
  thinsp: "\u2009",
  zwnj: "\u200C",
  zwj: "\u200D",
  lrm: "\u200E",
  rlm: "\u200F",
  ndash: "\u2013",
  mdash: "\u2014",
  lsquo: "\u2018",
  rsquo: "\u2019",
  sbquo: "\u201A",
  ldquo: "\u201C",
  rdquo: "\u201D",
  bdquo: "\u201E",
  dagger: "\u2020",
  Dagger: "\u2021",
  permil: "\u2030",
  lsaquo: "\u2039",
  rsaquo: "\u203A",
  euro: "\u20AC",
};
var Ps = ["cent", "copy", "divide", "gt", "lt", "not", "para", "times"];
var Rs = {}.hasOwnProperty,
  Dt = {},
  Re;
for (Re in Pe) Rs.call(Pe, Re) && (Dt[Pe[Re]] = Re);
var Wn = /[^\dA-Za-z]/;
function Fs(s, e, t, o) {
  let n = String.fromCharCode(s);
  if (Rs.call(Dt, n)) {
    let i = Dt[n],
      a = "&" + i;
    return t &&
      ks.includes(i) &&
      !Ps.includes(i) &&
      (!o || (e && e !== 61 && Wn.test(String.fromCharCode(e))))
      ? a
      : a + ";";
  }
  return "";
}
function Us(s, e, t) {
  let o = Ns(s, e, t.omitOptionalSemicolons),
    n;
  if (
    ((t.useNamedReferences || t.useShortestReferences) &&
      (n = Fs(s, e, t.omitOptionalSemicolons, t.attribute)),
    (t.useShortestReferences || !n) && t.useShortestReferences)
  ) {
    let i = Ls(s, e, t.omitOptionalSemicolons);
    i.length < o.length && (o = i);
  }
  return n && (!t.useShortestReferences || n.length < o.length) ? n : o;
}
function R(s, e) {
  return Ts(s, Object.assign({ format: Us }, e));
}
var Hn = /^>|^->|<!--|-->|--!>|<!-$/g,
  zn = [">"],
  qn = ["<", ">"];
function Ks(s, e, t, o) {
  return o.settings.bogusComments
    ? "<?" + R(s.value, Object.assign({}, o.settings.characterReferences, { subset: zn })) + ">"
    : "<!--" + s.value.replace(Hn, n) + "-->";
  function n(i) {
    return R(i, Object.assign({}, o.settings.characterReferences, { subset: qn }));
  }
}
function Os(s, e, t, o) {
  return (
    "<!" +
    (o.settings.upperDoctype ? "DOCTYPE" : "doctype") +
    (o.settings.tightDoctype ? "" : " ") +
    "html>"
  );
}
var T = Gs(1),
  xt = Gs(-1),
  Vn = [];
function Gs(s) {
  return e;
  function e(t, o, n) {
    let i = t ? t.children : Vn,
      a = (o || 0) + s,
      r = i[a];
    if (!n) for (; r && Z(r); ) ((a += s), (r = i[a]));
    return r;
  }
}
var Yn = {}.hasOwnProperty;
function Fe(s) {
  return e;
  function e(t, o, n) {
    return Yn.call(s, t.tagName) && s[t.tagName](t, o, n);
  }
}
var Ae = Fe({
  body: Xn,
  caption: Tt,
  colgroup: Tt,
  dd: oi,
  dt: ti,
  head: Tt,
  html: $n,
  li: ei,
  optgroup: si,
  option: ni,
  p: Zn,
  rp: _s,
  rt: _s,
  tbody: ai,
  td: js,
  tfoot: ri,
  th: js,
  thead: ii,
  tr: di,
});
function Tt(s, e, t) {
  let o = T(t, e, !0);
  return !o || (o.type !== "comment" && !(o.type === "text" && Z(o.value.charAt(0))));
}
function $n(s, e, t) {
  let o = T(t, e);
  return !o || o.type !== "comment";
}
function Xn(s, e, t) {
  let o = T(t, e);
  return !o || o.type !== "comment";
}
function Zn(s, e, t) {
  let o = T(t, e);
  return o
    ? o.type === "element" &&
        (o.tagName === "address" ||
          o.tagName === "article" ||
          o.tagName === "aside" ||
          o.tagName === "blockquote" ||
          o.tagName === "details" ||
          o.tagName === "div" ||
          o.tagName === "dl" ||
          o.tagName === "fieldset" ||
          o.tagName === "figcaption" ||
          o.tagName === "figure" ||
          o.tagName === "footer" ||
          o.tagName === "form" ||
          o.tagName === "h1" ||
          o.tagName === "h2" ||
          o.tagName === "h3" ||
          o.tagName === "h4" ||
          o.tagName === "h5" ||
          o.tagName === "h6" ||
          o.tagName === "header" ||
          o.tagName === "hgroup" ||
          o.tagName === "hr" ||
          o.tagName === "main" ||
          o.tagName === "menu" ||
          o.tagName === "nav" ||
          o.tagName === "ol" ||
          o.tagName === "p" ||
          o.tagName === "pre" ||
          o.tagName === "section" ||
          o.tagName === "table" ||
          o.tagName === "ul")
    : !t ||
        !(
          t.type === "element" &&
          (t.tagName === "a" ||
            t.tagName === "audio" ||
            t.tagName === "del" ||
            t.tagName === "ins" ||
            t.tagName === "map" ||
            t.tagName === "noscript" ||
            t.tagName === "video")
        );
}
function ei(s, e, t) {
  let o = T(t, e);
  return !o || (o.type === "element" && o.tagName === "li");
}
function ti(s, e, t) {
  let o = T(t, e);
  return !!(o && o.type === "element" && (o.tagName === "dt" || o.tagName === "dd"));
}
function oi(s, e, t) {
  let o = T(t, e);
  return !o || (o.type === "element" && (o.tagName === "dt" || o.tagName === "dd"));
}
function _s(s, e, t) {
  let o = T(t, e);
  return !o || (o.type === "element" && (o.tagName === "rp" || o.tagName === "rt"));
}
function si(s, e, t) {
  let o = T(t, e);
  return !o || (o.type === "element" && o.tagName === "optgroup");
}
function ni(s, e, t) {
  let o = T(t, e);
  return !o || (o.type === "element" && (o.tagName === "option" || o.tagName === "optgroup"));
}
function ii(s, e, t) {
  let o = T(t, e);
  return !!(o && o.type === "element" && (o.tagName === "tbody" || o.tagName === "tfoot"));
}
function ai(s, e, t) {
  let o = T(t, e);
  return !o || (o.type === "element" && (o.tagName === "tbody" || o.tagName === "tfoot"));
}
function ri(s, e, t) {
  return !T(t, e);
}
function di(s, e, t) {
  let o = T(t, e);
  return !o || (o.type === "element" && o.tagName === "tr");
}
function js(s, e, t) {
  let o = T(t, e);
  return !o || (o.type === "element" && (o.tagName === "td" || o.tagName === "th"));
}
var Js = Fe({ body: ci, colgroup: ui, head: pi, html: li, tbody: mi });
function li(s) {
  let e = T(s, -1);
  return !e || e.type !== "comment";
}
function pi(s) {
  let e = new Set();
  for (let o of s.children)
    if (o.type === "element" && (o.tagName === "base" || o.tagName === "title")) {
      if (e.has(o.tagName)) return !1;
      e.add(o.tagName);
    }
  let t = s.children[0];
  return !t || t.type === "element";
}
function ci(s) {
  let e = T(s, -1, !0);
  return (
    !e ||
    (e.type !== "comment" &&
      !(e.type === "text" && Z(e.value.charAt(0))) &&
      !(
        e.type === "element" &&
        (e.tagName === "meta" ||
          e.tagName === "link" ||
          e.tagName === "script" ||
          e.tagName === "style" ||
          e.tagName === "template")
      ))
  );
}
function ui(s, e, t) {
  let o = xt(t, e),
    n = T(s, -1, !0);
  return t &&
    o &&
    o.type === "element" &&
    o.tagName === "colgroup" &&
    Ae(o, t.children.indexOf(o), t)
    ? !1
    : !!(n && n.type === "element" && n.tagName === "col");
}
function mi(s, e, t) {
  let o = xt(t, e),
    n = T(s, -1);
  return t &&
    o &&
    o.type === "element" &&
    (o.tagName === "thead" || o.tagName === "tbody") &&
    Ae(o, t.children.indexOf(o), t)
    ? !1
    : !!(n && n.type === "element" && n.tagName === "tr");
}
var Ue = {
  name: [
    [
      `	
\f\r &/=>`.split(""),
      `	
\f\r "&'/=>\``.split(""),
    ],
    [
      `\0	
\f\r "&'/<=>`.split(""),
      `\0	
\f\r "&'/<=>\``.split(""),
    ],
  ],
  unquoted: [
    [
      `	
\f\r &>`.split(""),
      `\0	
\f\r "&'<=>\``.split(""),
    ],
    [
      `\0	
\f\r "&'<=>\``.split(""),
      `\0	
\f\r "&'<=>\``.split(""),
    ],
  ],
  single: [
    ["&'".split(""), "\"&'`".split("")],
    ["\0&'".split(""), "\0\"&'`".split("")],
  ],
  double: [
    ['"&'.split(""), "\"&'`".split("")],
    ['\0"&'.split(""), "\0\"&'`".split("")],
  ],
};
function Ws(s, e, t, o) {
  let n = o.schema,
    i = n.space === "svg" ? !1 : o.settings.omitOptionalTags,
    a =
      n.space === "svg"
        ? o.settings.closeEmptyElements
        : o.settings.voids.includes(s.tagName.toLowerCase()),
    r = [],
    d;
  n.space === "html" && s.tagName === "svg" && (o.schema = we);
  let l = Ai(o, s.properties),
    p = o.all(n.space === "html" && s.tagName === "template" ? s.content : s);
  return (
    (o.schema = n),
    p && (a = !1),
    (l || !i || !Js(s, e, t)) &&
      (r.push("<", s.tagName, l ? " " + l : ""),
      a &&
        (n.space === "svg" || o.settings.closeSelfClosing) &&
        ((d = l.charAt(l.length - 1)),
        (!o.settings.tightSelfClosing || d === "/" || (d && d !== '"' && d !== "'")) && r.push(" "),
        r.push("/")),
      r.push(">")),
    r.push(p),
    !a && (!i || !Ae(s, e, t)) && r.push("</" + s.tagName + ">"),
    r.join("")
  );
}
function Ai(s, e) {
  let t = [],
    o = -1,
    n;
  if (e) {
    for (n in e)
      if (e[n] !== null && e[n] !== void 0) {
        let i = hi(s, n, e[n]);
        i && t.push(i);
      }
  }
  for (; ++o < t.length; ) {
    let i = s.settings.tightAttributes ? t[o].charAt(t[o].length - 1) : void 0;
    o !== t.length - 1 && i !== '"' && i !== "'" && (t[o] += " ");
  }
  return t.join("");
}
function hi(s, e, t) {
  let o = Eo(s.schema, e),
    n = s.settings.allowParseErrors && s.schema.space === "html" ? 0 : 1,
    i = s.settings.allowDangerousCharacters ? 0 : 1,
    a = s.quote,
    r;
  if (
    (o.overloadedBoolean && (t === o.attribute || t === "")
      ? (t = !0)
      : (o.boolean || o.overloadedBoolean) &&
        (typeof t != "string" || t === o.attribute || t === "") &&
        (t = !!t),
    t == null || t === !1 || (typeof t == "number" && Number.isNaN(t)))
  )
    return "";
  let d = R(
    o.attribute,
    Object.assign({}, s.settings.characterReferences, { subset: Ue.name[n][i] })
  );
  return t === !0 ||
    ((t = Array.isArray(t)
      ? (o.commaSeparated ? Bo : Qo)(t, { padLeft: !s.settings.tightCommaSeparatedLists })
      : String(t)),
    s.settings.collapseEmptyAttributes && !t)
    ? d
    : (s.settings.preferUnquoted &&
        (r = R(
          t,
          Object.assign({}, s.settings.characterReferences, {
            attribute: !0,
            subset: Ue.unquoted[n][i],
          })
        )),
      r !== t &&
        (s.settings.quoteSmart && Et(t, a) > Et(t, s.alternative) && (a = s.alternative),
        (r =
          a +
          R(
            t,
            Object.assign({}, s.settings.characterReferences, {
              subset: (a === "'" ? Ue.single : Ue.double)[n][i],
              attribute: !0,
            })
          ) +
          a)),
      d + (r && "=" + r));
}
var gi = ["<", "&"];
function Ke(s, e, t, o) {
  return t && t.type === "element" && (t.tagName === "script" || t.tagName === "style")
    ? s.value
    : R(s.value, Object.assign({}, o.settings.characterReferences, { subset: gi }));
}
function Hs(s, e, t, o) {
  return o.settings.allowDangerousHtml ? s.value : Ke(s, e, t, o);
}
function zs(s, e, t, o) {
  return o.all(s);
}
var qs = wo("type", {
  invalid: fi,
  unknown: yi,
  handlers: { comment: Ks, doctype: Os, element: Ws, raw: Hs, root: zs, text: Ke },
});
function fi(s) {
  throw new Error("Expected node, not `" + s + "`");
}
function yi(s) {
  let e = s;
  throw new Error("Cannot compile unknown node `" + e.type + "`");
}
var Ci = {},
  Mi = {},
  vi = [];
function Nt(s, e) {
  let t = e || Ci,
    o = t.quote || '"',
    n = o === '"' ? "'" : '"';
  if (o !== '"' && o !== "'") throw new Error("Invalid quote `" + o + "`, expected `'` or `\"`");
  return {
    one: Ii,
    all: Ei,
    settings: {
      omitOptionalTags: t.omitOptionalTags || !1,
      allowParseErrors: t.allowParseErrors || !1,
      allowDangerousCharacters: t.allowDangerousCharacters || !1,
      quoteSmart: t.quoteSmart || !1,
      preferUnquoted: t.preferUnquoted || !1,
      tightAttributes: t.tightAttributes || !1,
      upperDoctype: t.upperDoctype || !1,
      tightDoctype: t.tightDoctype || !1,
      bogusComments: t.bogusComments || !1,
      tightCommaSeparatedLists: t.tightCommaSeparatedLists || !1,
      tightSelfClosing: t.tightSelfClosing || !1,
      collapseEmptyAttributes: t.collapseEmptyAttributes || !1,
      allowDangerousHtml: t.allowDangerousHtml || !1,
      voids: t.voids || cs,
      characterReferences: t.characterReferences || Mi,
      closeSelfClosing: t.closeSelfClosing || !1,
      closeEmptyElements: t.closeEmptyElements || !1,
    },
    schema: t.space === "svg" ? we : So,
    quote: o,
    alternative: n,
  }.one(Array.isArray(s) ? { type: "root", children: s } : s, void 0, void 0);
}
function Ii(s, e, t) {
  return qs(s, e, t, this);
}
function Ei(s) {
  let e = [],
    t = (s && s.children) || vi,
    o = -1;
  for (; ++o < t.length; ) e[o] = this.one(t[o], o, s);
  return e.join("");
}
function Oe(s) {
  let e = this,
    t = { ...e.data("settings"), ...s };
  e.compiler = o;
  function o(n) {
    return Nt(n, t);
  }
}
function Lt(s) {
  us(s, [/\r?\n|\r/g, Si]);
}
function Si() {
  return { type: "break" };
}
function Ge() {
  return function (s) {
    Lt(s);
  };
}
function _e(s) {
  let e = this;
  e.compiler = t;
  function t(o) {
    return ps(o, { ...e.data("settings"), ...s, extensions: e.data("toMarkdownExtensions") || [] });
  }
}
var Bi = /^(#{1,6})\s+(.+)$/m,
  Qi = /\*\*(.*?)\*\*/,
  wi = /\*(.*?)\*/,
  bi = /^\s*[-*+]\s+(.+)$/m,
  Di = /^\s*(\d+)\.\s+(.+)$/m,
  xi = /^>\s+(.+)$/m,
  Ti = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/,
  Ni = /`([^`]+)`/,
  Li = /```[\s\S]*?```/,
  ki = /^\s*\|(.+\|)+\s*$/m,
  Pi = /~~(.*?)~~/,
  Ri = /^\s*[-*+]\s+\[[ x]\]\s+\S/m,
  Fi = /^(-{3,}|_{3,})\s*$/m,
  Ui = /!\[([^\]]*)\]\((https?:\/\/[^)]+)\)/,
  Ki = /<(https?:\/\/[^>]+)>/;
function Oi(s) {
  return !s || s.length === 0
    ? !1
    : [Bi, Qi, wi, bi, Di, xi, Ti, Ni, Li, ki, Pi, Ri, Fi, Ui, Ki].some((t) => t.test(s));
}
function tl(s) {
  return Oi(s) ? Vs(s) : s;
}
function Vs(s) {
  return Bt()
    .use(ms)
    .use(Ge)
    .use(St)
    .use(As, {
      allowDangerousHtml: !0,
      handlers: {
        break: function (t, o) {
          let n = { type: "element", tagName: "br", properties: {}, children: [] };
          return (t.patch(o, n), [t.applyData(o, n)]);
        },
      },
    })
    .use(Oe, { allowDangerousHtml: !0 })
    .processSync(s)
    .toString();
}
function ol(s, e) {
  let t = Vs(s),
    o = document.createElement("div");
  return ((o.innerHTML = t), Io.fromSchema(e).parseSlice(o, { preserveWhitespace: !0 }));
}
function sl(s, e, t) {
  let o = {},
    n;
  for (n in t.nodes) {
    let d = t.nodes[n].spec.toMarkdown;
    o[n] = (...l) => d(...l, e);
  }
  let i = {},
    a;
  for (a in t.marks) {
    let d = t.marks[a].spec.toMarkdown;
    i[a] = (...l) => d(...l, e);
  }
  let r = bo(s, { schema: t, nodeHandlers: o, markHandlers: i });
  return Bt()
    .use(St)
    .use(_e, {
      handlers: {
        text(...d) {
          let [l] = d;
          return l.data?.avoidEscaping ? l.value : ls.text(...d);
        },
      },
      bullet: "-",
      emphasis: "_",
    })
    .stringify(r);
}
var je = class {
  constructor(e, t) {
    h(this, "changeset");
    h(this, "ensureBranchBeforeDocumentEdit");
    ((this.changeset = e), (this.ensureBranchBeforeDocumentEdit = t));
  }
  getChangeset() {
    return this.changeset;
  }
  update(e) {
    this.changeset = e;
  }
};
var Ys;
(function (s) {
  ((s[(s.Static = 1)] = "Static"),
    (s[(s.Dynamic = 2)] = "Dynamic"),
    (s[(s.ImportMeta = 3)] = "ImportMeta"),
    (s[(s.StaticSourcePhase = 4)] = "StaticSourcePhase"),
    (s[(s.DynamicSourcePhase = 5)] = "DynamicSourcePhase"));
})(Ys || (Ys = {}));
var Gi = new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
function Pt(s, e = "@") {
  if (!Q) return Rt.then(() => Pt(s));
  let t = s.length + 1,
    o = (Q.__heap_base.value || Q.__heap_base) + 4 * t - Q.memory.buffer.byteLength;
  o > 0 && Q.memory.grow(Math.ceil(o / 65536));
  let n = Q.sa(t - 1);
  if (((Gi ? ji : _i)(s, new Uint16Array(Q.memory.buffer, n, t)), !Q.parse()))
    throw Object.assign(
      new Error(
        `Parse error ${e}:${
          s.slice(0, Q.e()).split(`
`).length
        }:${
          Q.e() -
          s.lastIndexOf(
            `
`,
            Q.e() - 1
          )
        }`
      ),
      { idx: Q.e() }
    );
  let i = [],
    a = [];
  for (; Q.ri(); ) {
    let d = Q.is(),
      l = Q.ie(),
      p = Q.it(),
      c = Q.ai(),
      g = Q.id(),
      A = Q.ss(),
      u = Q.se(),
      C;
    (Q.ip() && (C = r(s.slice(g === -1 ? d - 1 : d, g === -1 ? l + 1 : l))),
      i.push({ n: C, t: p, s: d, e: l, ss: A, se: u, d: g, a: c }));
  }
  for (; Q.re(); ) {
    let d = Q.es(),
      l = Q.ee(),
      p = Q.els(),
      c = Q.ele(),
      g = s.slice(d, l),
      A = g[0],
      u = p < 0 ? void 0 : s.slice(p, c),
      C = u ? u[0] : "";
    a.push({
      s: d,
      e: l,
      ls: p,
      le: c,
      n: A === '"' || A === "'" ? r(g) : g,
      ln: C === '"' || C === "'" ? r(u) : u,
    });
  }
  function r(d) {
    try {
      return (0, eval)(d);
    } catch {}
  }
  return [i, a, !!Q.f(), !!Q.ms()];
}
function _i(s, e) {
  let t = s.length,
    o = 0;
  for (; o < t; ) {
    let n = s.charCodeAt(o);
    e[o++] = ((255 & n) << 8) | (n >>> 8);
  }
}
function ji(s, e) {
  let t = s.length,
    o = 0;
  for (; o < t; ) e[o] = s.charCodeAt(o++);
}
var Q,
  Rt = WebAssembly.compile(
    ((kt =
      "AGFzbQEAAAABKwhgAX8Bf2AEf39/fwBgAAF/YAAAYAF/AGADf39/AX9gAn9/AX9gA39/fwADMTAAAQECAgICAgICAgICAgICAgICAgIAAwMDBAQAAAUAAAAAAAMDAwAGAAAABwAGAgUEBQFwAQEBBQMBAAEGDwJ/AUHA8gALfwBBwPIACwd6FQZtZW1vcnkCAAJzYQAAAWUAAwJpcwAEAmllAAUCc3MABgJzZQAHAml0AAgCYWkACQJpZAAKAmlwAAsCZXMADAJlZQANA2VscwAOA2VsZQAPAnJpABACcmUAEQFmABICbXMAEwVwYXJzZQAUC19faGVhcF9iYXNlAwEKm0EwaAEBf0EAIAA2AoAKQQAoAtwJIgEgAEEBdGoiAEEAOwEAQQAgAEECaiIANgKECkEAIAA2AogKQQBBADYC4AlBAEEANgLwCUEAQQA2AugJQQBBADYC5AlBAEEANgL4CUEAQQA2AuwJIAEL0wEBA39BACgC8AkhBEEAQQAoAogKIgU2AvAJQQAgBDYC9AlBACAFQSRqNgKICiAEQSBqQeAJIAQbIAU2AgBBACgC1AkhBEEAKALQCSEGIAUgATYCACAFIAA2AgggBSACIAJBAmpBACAGIANGIgAbIAQgA0YiBBs2AgwgBSADNgIUIAVBADYCECAFIAI2AgQgBUEANgIgIAVBA0EBQQIgABsgBBs2AhwgBUEAKALQCSADRiICOgAYAkACQCACDQBBACgC1AkgA0cNAQtBAEEBOgCMCgsLXgEBf0EAKAL4CSIEQRBqQeQJIAQbQQAoAogKIgQ2AgBBACAENgL4CUEAIARBFGo2AogKQQBBAToAjAogBEEANgIQIAQgAzYCDCAEIAI2AgggBCABNgIEIAQgADYCAAsIAEEAKAKQCgsVAEEAKALoCSgCAEEAKALcCWtBAXULHgEBf0EAKALoCSgCBCIAQQAoAtwJa0EBdUF/IAAbCxUAQQAoAugJKAIIQQAoAtwJa0EBdQseAQF/QQAoAugJKAIMIgBBACgC3AlrQQF1QX8gABsLCwBBACgC6AkoAhwLHgEBf0EAKALoCSgCECIAQQAoAtwJa0EBdUF/IAAbCzsBAX8CQEEAKALoCSgCFCIAQQAoAtAJRw0AQX8PCwJAIABBACgC1AlHDQBBfg8LIABBACgC3AlrQQF1CwsAQQAoAugJLQAYCxUAQQAoAuwJKAIAQQAoAtwJa0EBdQsVAEEAKALsCSgCBEEAKALcCWtBAXULHgEBf0EAKALsCSgCCCIAQQAoAtwJa0EBdUF/IAAbCx4BAX9BACgC7AkoAgwiAEEAKALcCWtBAXVBfyAAGwslAQF/QQBBACgC6AkiAEEgakHgCSAAGygCACIANgLoCSAAQQBHCyUBAX9BAEEAKALsCSIAQRBqQeQJIAAbKAIAIgA2AuwJIABBAEcLCABBAC0AlAoLCABBAC0AjAoL3Q0BBX8jAEGA0ABrIgAkAEEAQQE6AJQKQQBBACgC2Ak2ApwKQQBBACgC3AlBfmoiATYCsApBACABQQAoAoAKQQF0aiICNgK0CkEAQQA6AIwKQQBBADsBlgpBAEEAOwGYCkEAQQA6AKAKQQBBADYCkApBAEEAOgD8CUEAIABBgBBqNgKkCkEAIAA2AqgKQQBBADoArAoCQAJAAkACQANAQQAgAUECaiIDNgKwCiABIAJPDQECQCADLwEAIgJBd2pBBUkNAAJAAkACQAJAAkAgAkGbf2oOBQEICAgCAAsgAkEgRg0EIAJBL0YNAyACQTtGDQIMBwtBAC8BmAoNASADEBVFDQEgAUEEakGCCEEKEC8NARAWQQAtAJQKDQFBAEEAKAKwCiIBNgKcCgwHCyADEBVFDQAgAUEEakGMCEEKEC8NABAXC0EAQQAoArAKNgKcCgwBCwJAIAEvAQQiA0EqRg0AIANBL0cNBBAYDAELQQEQGQtBACgCtAohAkEAKAKwCiEBDAALC0EAIQIgAyEBQQAtAPwJDQIMAQtBACABNgKwCkEAQQA6AJQKCwNAQQAgAUECaiIDNgKwCgJAAkACQAJAAkACQAJAIAFBACgCtApPDQAgAy8BACICQXdqQQVJDQYCQAJAAkACQAJAAkACQAJAAkACQCACQWBqDgoQDwYPDw8PBQECAAsCQAJAAkACQCACQaB/ag4KCxISAxIBEhISAgALIAJBhX9qDgMFEQYJC0EALwGYCg0QIAMQFUUNECABQQRqQYIIQQoQLw0QEBYMEAsgAxAVRQ0PIAFBBGpBjAhBChAvDQ8QFwwPCyADEBVFDQ4gASkABELsgISDsI7AOVINDiABLwEMIgNBd2oiAUEXSw0MQQEgAXRBn4CABHFFDQwMDQtBAEEALwGYCiIBQQFqOwGYCkEAKAKkCiABQQN0aiIBQQE2AgAgAUEAKAKcCjYCBAwNC0EALwGYCiIDRQ0JQQAgA0F/aiIDOwGYCkEALwGWCiICRQ0MQQAoAqQKIANB//8DcUEDdGooAgBBBUcNDAJAIAJBAnRBACgCqApqQXxqKAIAIgMoAgQNACADQQAoApwKQQJqNgIEC0EAIAJBf2o7AZYKIAMgAUEEajYCDAwMCwJAQQAoApwKIgEvAQBBKUcNAEEAKALwCSIDRQ0AIAMoAgQgAUcNAEEAQQAoAvQJIgM2AvAJAkAgA0UNACADQQA2AiAMAQtBAEEANgLgCQtBAEEALwGYCiIDQQFqOwGYCkEAKAKkCiADQQN0aiIDQQZBAkEALQCsChs2AgAgAyABNgIEQQBBADoArAoMCwtBAC8BmAoiAUUNB0EAIAFBf2oiATsBmApBACgCpAogAUH//wNxQQN0aigCAEEERg0EDAoLQScQGgwJC0EiEBoMCAsgAkEvRw0HAkACQCABLwEEIgFBKkYNACABQS9HDQEQGAwKC0EBEBkMCQsCQAJAAkACQEEAKAKcCiIBLwEAIgMQG0UNAAJAAkAgA0FVag4EAAkBAwkLIAFBfmovAQBBK0YNAwwICyABQX5qLwEAQS1GDQIMBwsgA0EpRw0BQQAoAqQKQQAvAZgKIgJBA3RqKAIEEBxFDQIMBgsgAUF+ai8BAEFQakH//wNxQQpPDQULQQAvAZgKIQILAkACQCACQf//A3EiAkUNACADQeYARw0AQQAoAqQKIAJBf2pBA3RqIgQoAgBBAUcNACABQX5qLwEAQe8ARw0BIAQoAgRBlghBAxAdRQ0BDAULIANB/QBHDQBBACgCpAogAkEDdGoiAigCBBAeDQQgAigCAEEGRg0ECyABEB8NAyADRQ0DIANBL0ZBAC0AoApBAEdxDQMCQEEAKAL4CSICRQ0AIAEgAigCAEkNACABIAIoAgRNDQQLIAFBfmohAUEAKALcCSECAkADQCABQQJqIgQgAk0NAUEAIAE2ApwKIAEvAQAhAyABQX5qIgQhASADECBFDQALIARBAmohBAsCQCADQf//A3EQIUUNACAEQX5qIQECQANAIAFBAmoiAyACTQ0BQQAgATYCnAogAS8BACEDIAFBfmoiBCEBIAMQIQ0ACyAEQQJqIQMLIAMQIg0EC0EAQQE6AKAKDAcLQQAoAqQKQQAvAZgKIgFBA3QiA2pBACgCnAo2AgRBACABQQFqOwGYCkEAKAKkCiADakEDNgIACxAjDAULQQAtAPwJQQAvAZYKQQAvAZgKcnJFIQIMBwsQJEEAQQA6AKAKDAMLECVBACECDAULIANBoAFHDQELQQBBAToArAoLQQBBACgCsAo2ApwKC0EAKAKwCiEBDAALCyAAQYDQAGokACACCxoAAkBBACgC3AkgAEcNAEEBDwsgAEF+ahAmC/4KAQZ/QQBBACgCsAoiAEEMaiIBNgKwCkEAKAL4CSECQQEQKSEDAkACQAJAAkACQAJAAkACQAJAQQAoArAKIgQgAUcNACADEChFDQELAkACQAJAAkACQAJAAkAgA0EqRg0AIANB+wBHDQFBACAEQQJqNgKwCkEBECkhA0EAKAKwCiEEA0ACQAJAIANB//8DcSIDQSJGDQAgA0EnRg0AIAMQLBpBACgCsAohAwwBCyADEBpBAEEAKAKwCkECaiIDNgKwCgtBARApGgJAIAQgAxAtIgNBLEcNAEEAQQAoArAKQQJqNgKwCkEBECkhAwsgA0H9AEYNA0EAKAKwCiIFIARGDQ8gBSEEIAVBACgCtApNDQAMDwsLQQAgBEECajYCsApBARApGkEAKAKwCiIDIAMQLRoMAgtBAEEAOgCUCgJAAkACQAJAAkACQCADQZ9/ag4MAgsEAQsDCwsLCwsFAAsgA0H2AEYNBAwKC0EAIARBDmoiAzYCsAoCQAJAAkBBARApQZ9/ag4GABICEhIBEgtBACgCsAoiBSkAAkLzgOSD4I3AMVINESAFLwEKECFFDRFBACAFQQpqNgKwCkEAECkaC0EAKAKwCiIFQQJqQbIIQQ4QLw0QIAUvARAiAkF3aiIBQRdLDQ1BASABdEGfgIAEcUUNDQwOC0EAKAKwCiIFKQACQuyAhIOwjsA5Ug0PIAUvAQoiAkF3aiIBQRdNDQYMCgtBACAEQQpqNgKwCkEAECkaQQAoArAKIQQLQQAgBEEQajYCsAoCQEEBECkiBEEqRw0AQQBBACgCsApBAmo2ArAKQQEQKSEEC0EAKAKwCiEDIAQQLBogA0EAKAKwCiIEIAMgBBACQQBBACgCsApBfmo2ArAKDwsCQCAEKQACQuyAhIOwjsA5Ug0AIAQvAQoQIEUNAEEAIARBCmo2ArAKQQEQKSEEQQAoArAKIQMgBBAsGiADQQAoArAKIgQgAyAEEAJBAEEAKAKwCkF+ajYCsAoPC0EAIARBBGoiBDYCsAoLQQAgBEEGajYCsApBAEEAOgCUCkEBECkhBEEAKAKwCiEDIAQQLCEEQQAoArAKIQIgBEHf/wNxIgFB2wBHDQNBACACQQJqNgKwCkEBECkhBUEAKAKwCiEDQQAhBAwEC0EAQQE6AIwKQQBBACgCsApBAmo2ArAKC0EBECkhBEEAKAKwCiEDAkAgBEHmAEcNACADQQJqQawIQQYQLw0AQQAgA0EIajYCsAogAEEBEClBABArIAJBEGpB5AkgAhshAwNAIAMoAgAiA0UNBSADQgA3AgggA0EQaiEDDAALC0EAIANBfmo2ArAKDAMLQQEgAXRBn4CABHFFDQMMBAtBASEECwNAAkACQCAEDgIAAQELIAVB//8DcRAsGkEBIQQMAQsCQAJAQQAoArAKIgQgA0YNACADIAQgAyAEEAJBARApIQQCQCABQdsARw0AIARBIHJB/QBGDQQLQQAoArAKIQMCQCAEQSxHDQBBACADQQJqNgKwCkEBECkhBUEAKAKwCiEDIAVBIHJB+wBHDQILQQAgA0F+ajYCsAoLIAFB2wBHDQJBACACQX5qNgKwCg8LQQAhBAwACwsPCyACQaABRg0AIAJB+wBHDQQLQQAgBUEKajYCsApBARApIgVB+wBGDQMMAgsCQCACQVhqDgMBAwEACyACQaABRw0CC0EAIAVBEGo2ArAKAkBBARApIgVBKkcNAEEAQQAoArAKQQJqNgKwCkEBECkhBQsgBUEoRg0BC0EAKAKwCiEBIAUQLBpBACgCsAoiBSABTQ0AIAQgAyABIAUQAkEAQQAoArAKQX5qNgKwCg8LIAQgA0EAQQAQAkEAIARBDGo2ArAKDwsQJQvcCAEGf0EAIQBBAEEAKAKwCiIBQQxqIgI2ArAKQQEQKSEDQQAoArAKIQQCQAJAAkACQAJAAkACQAJAIANBLkcNAEEAIARBAmo2ArAKAkBBARApIgNB8wBGDQAgA0HtAEcNB0EAKAKwCiIDQQJqQZwIQQYQLw0HAkBBACgCnAoiBBAqDQAgBC8BAEEuRg0ICyABIAEgA0EIakEAKALUCRABDwtBACgCsAoiA0ECakGiCEEKEC8NBgJAQQAoApwKIgQQKg0AIAQvAQBBLkYNBwsgA0EMaiEDDAELIANB8wBHDQEgBCACTQ0BQQYhAEEAIQIgBEECakGiCEEKEC8NAiAEQQxqIQMCQCAELwEMIgVBd2oiBEEXSw0AQQEgBHRBn4CABHENAQsgBUGgAUcNAgtBACADNgKwCkEBIQBBARApIQMLAkACQAJAAkAgA0H7AEYNACADQShHDQFBACgCpApBAC8BmAoiA0EDdGoiBEEAKAKwCjYCBEEAIANBAWo7AZgKIARBBTYCAEEAKAKcCi8BAEEuRg0HQQBBACgCsAoiBEECajYCsApBARApIQMgAUEAKAKwCkEAIAQQAQJAAkAgAA0AQQAoAvAJIQQMAQtBACgC8AkiBEEFNgIcC0EAQQAvAZYKIgBBAWo7AZYKQQAoAqgKIABBAnRqIAQ2AgACQCADQSJGDQAgA0EnRg0AQQBBACgCsApBfmo2ArAKDwsgAxAaQQBBACgCsApBAmoiAzYCsAoCQAJAAkBBARApQVdqDgQBAgIAAgtBAEEAKAKwCkECajYCsApBARApGkEAKALwCSIEIAM2AgQgBEEBOgAYIARBACgCsAoiAzYCEEEAIANBfmo2ArAKDwtBACgC8AkiBCADNgIEIARBAToAGEEAQQAvAZgKQX9qOwGYCiAEQQAoArAKQQJqNgIMQQBBAC8BlgpBf2o7AZYKDwtBAEEAKAKwCkF+ajYCsAoPCyAADQJBACgCsAohA0EALwGYCg0BA0ACQAJAAkAgA0EAKAK0Ck8NAEEBECkiA0EiRg0BIANBJ0YNASADQf0ARw0CQQBBACgCsApBAmo2ArAKC0EBECkhBEEAKAKwCiEDAkAgBEHmAEcNACADQQJqQawIQQYQLw0JC0EAIANBCGo2ArAKAkBBARApIgNBIkYNACADQSdHDQkLIAEgA0EAECsPCyADEBoLQQBBACgCsApBAmoiAzYCsAoMAAsLIAANAUEGIQBBACECAkAgA0FZag4EBAMDBAALIANBIkYNAwwCC0EAIANBfmo2ArAKDwtBDCEAQQEhAgtBACgCsAoiAyABIABBAXRqRw0AQQAgA0F+ajYCsAoPC0EALwGYCg0CQQAoArAKIQNBACgCtAohAANAIAMgAE8NAQJAAkAgAy8BACIEQSdGDQAgBEEiRw0BCyABIAQgAhArDwtBACADQQJqIgM2ArAKDAALCxAlCw8LQQBBACgCsApBfmo2ArAKC0cBA39BACgCsApBAmohAEEAKAK0CiEBAkADQCAAIgJBfmogAU8NASACQQJqIQAgAi8BAEF2ag4EAQAAAQALC0EAIAI2ArAKC5gBAQN/QQBBACgCsAoiAUECajYCsAogAUEGaiEBQQAoArQKIQIDQAJAAkACQCABQXxqIAJPDQAgAUF+ai8BACEDAkACQCAADQAgA0EqRg0BIANBdmoOBAIEBAIECyADQSpHDQMLIAEvAQBBL0cNAkEAIAFBfmo2ArAKDAELIAFBfmohAQtBACABNgKwCg8LIAFBAmohAQwACwuIAQEEf0EAKAKwCiEBQQAoArQKIQICQAJAA0AgASIDQQJqIQEgAyACTw0BIAEvAQAiBCAARg0CAkAgBEHcAEYNACAEQXZqDgQCAQECAQsgA0EEaiEBIAMvAQRBDUcNACADQQZqIAEgAy8BBkEKRhshAQwACwtBACABNgKwChAlDwtBACABNgKwCgtsAQF/AkACQCAAQV9qIgFBBUsNAEEBIAF0QTFxDQELIABBRmpB//8DcUEGSQ0AIABBKUcgAEFYakH//wNxQQdJcQ0AAkAgAEGlf2oOBAEAAAEACyAAQf0ARyAAQYV/akH//wNxQQRJcQ8LQQELLgEBf0EBIQECQCAAQaYJQQUQHQ0AIABBlghBAxAdDQAgAEGwCUECEB0hAQsgAQtGAQN/QQAhAwJAIAAgAkEBdCICayIEQQJqIgBBACgC3AkiBUkNACAAIAEgAhAvDQACQCAAIAVHDQBBAQ8LIAQQJiEDCyADC4MBAQJ/QQEhAQJAAkACQAJAAkACQCAALwEAIgJBRWoOBAUEBAEACwJAIAJBm39qDgQDBAQCAAsgAkEpRg0EIAJB+QBHDQMgAEF+akG8CUEGEB0PCyAAQX5qLwEAQT1GDwsgAEF+akG0CUEEEB0PCyAAQX5qQcgJQQMQHQ8LQQAhAQsgAQu0AwECf0EAIQECQAJAAkACQAJAAkACQAJAAkACQCAALwEAQZx/ag4UAAECCQkJCQMJCQQFCQkGCQcJCQgJCwJAAkAgAEF+ai8BAEGXf2oOBAAKCgEKCyAAQXxqQcoIQQIQHQ8LIABBfGpBzghBAxAdDwsCQAJAAkAgAEF+ai8BAEGNf2oOAwABAgoLAkAgAEF8ai8BACICQeEARg0AIAJB7ABHDQogAEF6akHlABAnDwsgAEF6akHjABAnDwsgAEF8akHUCEEEEB0PCyAAQXxqQdwIQQYQHQ8LIABBfmovAQBB7wBHDQYgAEF8ai8BAEHlAEcNBgJAIABBemovAQAiAkHwAEYNACACQeMARw0HIABBeGpB6AhBBhAdDwsgAEF4akH0CEECEB0PCyAAQX5qQfgIQQQQHQ8LQQEhASAAQX5qIgBB6QAQJw0EIABBgAlBBRAdDwsgAEF+akHkABAnDwsgAEF+akGKCUEHEB0PCyAAQX5qQZgJQQQQHQ8LAkAgAEF+ai8BACICQe8ARg0AIAJB5QBHDQEgAEF8akHuABAnDwsgAEF8akGgCUEDEB0hAQsgAQs0AQF/QQEhAQJAIABBd2pB//8DcUEFSQ0AIABBgAFyQaABRg0AIABBLkcgABAocSEBCyABCzABAX8CQAJAIABBd2oiAUEXSw0AQQEgAXRBjYCABHENAQsgAEGgAUYNAEEADwtBAQtOAQJ/QQAhAQJAAkAgAC8BACICQeUARg0AIAJB6wBHDQEgAEF+akH4CEEEEB0PCyAAQX5qLwEAQfUARw0AIABBfGpB3AhBBhAdIQELIAEL3gEBBH9BACgCsAohAEEAKAK0CiEBAkACQAJAA0AgACICQQJqIQAgAiABTw0BAkACQAJAIAAvAQAiA0Gkf2oOBQIDAwMBAAsgA0EkRw0CIAIvAQRB+wBHDQJBACACQQRqIgA2ArAKQQBBAC8BmAoiAkEBajsBmApBACgCpAogAkEDdGoiAkEENgIAIAIgADYCBA8LQQAgADYCsApBAEEALwGYCkF/aiIAOwGYCkEAKAKkCiAAQf//A3FBA3RqKAIAQQNHDQMMBAsgAkEEaiEADAALC0EAIAA2ArAKCxAlCwtwAQJ/AkACQANAQQBBACgCsAoiAEECaiIBNgKwCiAAQQAoArQKTw0BAkACQAJAIAEvAQAiAUGlf2oOAgECAAsCQCABQXZqDgQEAwMEAAsgAUEvRw0CDAQLEC4aDAELQQAgAEEEajYCsAoMAAsLECULCzUBAX9BAEEBOgD8CUEAKAKwCiEAQQBBACgCtApBAmo2ArAKQQAgAEEAKALcCWtBAXU2ApAKC0MBAn9BASEBAkAgAC8BACICQXdqQf//A3FBBUkNACACQYABckGgAUYNAEEAIQEgAhAoRQ0AIAJBLkcgABAqcg8LIAELPQECf0EAIQICQEEAKALcCSIDIABLDQAgAC8BACABRw0AAkAgAyAARw0AQQEPCyAAQX5qLwEAECAhAgsgAgtoAQJ/QQEhAQJAAkAgAEFfaiICQQVLDQBBASACdEExcQ0BCyAAQfj/A3FBKEYNACAAQUZqQf//A3FBBkkNAAJAIABBpX9qIgJBA0sNACACQQFHDQELIABBhX9qQf//A3FBBEkhAQsgAQucAQEDf0EAKAKwCiEBAkADQAJAAkAgAS8BACICQS9HDQACQCABLwECIgFBKkYNACABQS9HDQQQGAwCCyAAEBkMAQsCQAJAIABFDQAgAkF3aiIBQRdLDQFBASABdEGfgIAEcUUNAQwCCyACECFFDQMMAQsgAkGgAUcNAgtBAEEAKAKwCiIDQQJqIgE2ArAKIANBACgCtApJDQALCyACCzEBAX9BACEBAkAgAC8BAEEuRw0AIABBfmovAQBBLkcNACAAQXxqLwEAQS5GIQELIAELnAQBAX8CQCABQSJGDQAgAUEnRg0AECUPC0EAKAKwCiEDIAEQGiAAIANBAmpBACgCsApBACgC0AkQAQJAIAJFDQBBACgC8AlBBDYCHAtBAEEAKAKwCkECajYCsAoCQAJAAkACQEEAECkiAUHhAEYNACABQfcARg0BQQAoArAKIQEMAgtBACgCsAoiAUECakHACEEKEC8NAUEGIQAMAgtBACgCsAoiAS8BAkHpAEcNACABLwEEQfQARw0AQQQhACABLwEGQegARg0BC0EAIAFBfmo2ArAKDwtBACABIABBAXRqNgKwCgJAQQEQKUH7AEYNAEEAIAE2ArAKDwtBACgCsAoiAiEAA0BBACAAQQJqNgKwCgJAAkACQEEBECkiAEEiRg0AIABBJ0cNAUEnEBpBAEEAKAKwCkECajYCsApBARApIQAMAgtBIhAaQQBBACgCsApBAmo2ArAKQQEQKSEADAELIAAQLCEACwJAIABBOkYNAEEAIAE2ArAKDwtBAEEAKAKwCkECajYCsAoCQEEBECkiAEEiRg0AIABBJ0YNAEEAIAE2ArAKDwsgABAaQQBBACgCsApBAmo2ArAKAkACQEEBECkiAEEsRg0AIABB/QBGDQFBACABNgKwCg8LQQBBACgCsApBAmo2ArAKQQEQKUH9AEYNAEEAKAKwCiEADAELC0EAKALwCSIBIAI2AhAgAUEAKAKwCkECajYCDAttAQJ/AkACQANAAkAgAEH//wNxIgFBd2oiAkEXSw0AQQEgAnRBn4CABHENAgsgAUGgAUYNASAAIQIgARAoDQJBACECQQBBACgCsAoiAEECajYCsAogAC8BAiIADQAMAgsLIAAhAgsgAkH//wNxC6sBAQR/AkACQEEAKAKwCiICLwEAIgNB4QBGDQAgASEEIAAhBQwBC0EAIAJBBGo2ArAKQQEQKSECQQAoArAKIQUCQAJAIAJBIkYNACACQSdGDQAgAhAsGkEAKAKwCiEEDAELIAIQGkEAQQAoArAKQQJqIgQ2ArAKC0EBECkhA0EAKAKwCiECCwJAIAIgBUYNACAFIARBACAAIAAgAUYiAhtBACABIAIbEAILIAMLcgEEf0EAKAKwCiEAQQAoArQKIQECQAJAA0AgAEECaiECIAAgAU8NAQJAAkAgAi8BACIDQaR/ag4CAQQACyACIQAgA0F2ag4EAgEBAgELIABBBGohAAwACwtBACACNgKwChAlQQAPC0EAIAI2ArAKQd0AC0kBA39BACEDAkAgAkUNAAJAA0AgAC0AACIEIAEtAAAiBUcNASABQQFqIQEgAEEBaiEAIAJBf2oiAg0ADAILCyAEIAVrIQMLIAMLC+wBAgBBgAgLzgEAAHgAcABvAHIAdABtAHAAbwByAHQAZgBvAHIAZQB0AGEAbwB1AHIAYwBlAHIAbwBtAHUAbgBjAHQAaQBvAG4AcwBzAGUAcgB0AHYAbwB5AGkAZQBkAGUAbABlAGMAbwBuAHQAaQBuAGkAbgBzAHQAYQBuAHQAeQBiAHIAZQBhAHIAZQB0AHUAcgBkAGUAYgB1AGcAZwBlAGEAdwBhAGkAdABoAHIAdwBoAGkAbABlAGkAZgBjAGEAdABjAGYAaQBuAGEAbABsAGUAbABzAABB0AkLEAEAAAACAAAAAAQAAEA5AAA="),
    typeof Buffer < "u"
      ? Buffer.from(kt, "base64")
      : Uint8Array.from(atob(kt), (s) => s.charCodeAt(0)))
  )
    .then(WebAssembly.instantiate)
    .then(({ exports: s }) => {
      Q = s;
    }),
  kt;
var Ji = /^\s*(['"](\..*)['"])\s*$/mu,
  he = class extends Error {
    constructor(t) {
      super();
      h(this, "persistedMissingRelativeImports", t);
      this.name = "RewriteRelativeImportsError";
    }
  };
function Je(s) {
  return s instanceof he;
}
async function Zs(s, e) {
  await Rt;
  let [t] = Pt(s),
    o = s,
    n = new Set(),
    i = [...t].reverse();
  for (let { s: a, e: r, d } of i) {
    if (d === -2) continue;
    if (d === -1) {
      let y = s.substring(a, r);
      if (!y.startsWith(".")) continue;
      let f = e[y];
      (f === void 0 && (n.add(y), (f = Xs(y))), (o = $s(o, f, a, r)));
      continue;
    }
    let l = s.substring(a, r),
      c = l
        .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "$1")
        .trim()
        .match(Ji);
    if (!c) continue;
    let g = c[1],
      A = c[2];
    if (g === void 0 || A === void 0) continue;
    let u = e[A];
    u === void 0 && (n.add(A), (u = Xs(A)));
    let C = l.replace(new RegExp(Ft(g), "g"), JSON.stringify(u));
    o = $s(o, C, a, r);
  }
  return n.size > 0
    ? Es({ partiallyProcessedCode: o, unresolvedRelativeImports: n, parsedImports: t })
    : Is(o);
}
function en(
  s,
  e,
  {
    findPersistedModuleByTypeSlashName: t,
    findSaveIdByTypeSlashName: o,
    findDependencyModuleFilenameByTypeSlashName: n,
    shouldSkipTypeSlashName: i,
    submodules: a,
    usesImportMapEntries: r,
  }
) {
  let d = {},
    { modulesCDN: l } = V();
  for (let p of a ?? []) {
    let c = Zo(p);
    d[c] = c;
  }
  for (let p of e) {
    if (p in d) continue;
    let c = be(p, s);
    if (!c || i?.(c)) continue;
    let g = t(c);
    at(g, `Dependency module ${c} must exist to replace relative import`);
    let { id: A, files: u, localId: C } = g,
      y = o?.(c) ?? g.saveId,
      f = n?.(c) ?? u.module;
    (at(O(f), "Must have a module file name to build a local module import map specifier."),
      (d[p] = r ? Ee(C, f) : `${l}/${A}/${y}/${f}`));
  }
  return d;
}
function $s(s, e, t, o) {
  return s.slice(0, t) + e + s.slice(o);
}
function Ft(s) {
  return s.replace(/[.*+\-?^${}()|[\]\\]/gu, "\\$&");
}
function Xs(s) {
  return `!missing/${s}`;
}
var Ut = window?.framerUser;
function Il(s) {
  switch (s) {
    case "verifiedEmail":
      return {
        type: "verifiedEmail",
        emails: [{ email: Ut.email, verified: !0 }],
        name: "Framer",
        subject: Zi,
        body: ea,
        id: Be(),
      };
    case "webhook":
      return { type: "webhook", webhookUrl: void 0, secret: "", fallbackEmail: Ut.email, id: Be() };
    case "googlesheet":
      return {
        type: "googlesheet",
        fallbackEmail: Ut.email,
        documentId: void 0,
        documentName: void 0,
        id: Be(),
      };
    default:
      U(s);
  }
}
function El(s) {
  return s.type === "verifiedEmail";
}
var Sl = "--encrypted--";
function Bl(s) {
  return s.type === "webhook";
}
function Ql(s) {
  return s.type === "googlesheet";
}
function Wi(s) {
  if (s === "spam_protection")
    return { provider: "spam_protection", mode: "basic", filtering: "pass" };
  U(s);
}
function wl(s = Xt()) {
  return { configs: s };
}
function bl() {
  return ["spam_protection"];
}
function Hi(s, e) {
  if (e.length === 0) return [];
  let t = s.find((o) => o.provider === "spam_protection");
  return t ? [t] : [Wi("spam_protection")];
}
function Dl(s, e, t) {
  let o = Hi(s, e);
  return t ? o : o.map((n) => zi(n, t));
}
function zi(s, e) {
  return e || s.provider !== "spam_protection" || s.mode !== "advanced"
    ? s
    : { ...s, mode: "basic" };
}
var Kt = "type",
  qi = "provider",
  Vi = { type: !0, id: !0, emails: !0, subject: !0, body: !0, name: !0 };
function xl(s) {
  for (let e in s) if ((e === Kt && s[e] !== "verifiedEmail") || !(e in Vi)) return !1;
  return !0;
}
var Yi = { type: !0, id: !0, webhookUrl: !0, fallbackEmail: !0, secret: !0 };
function Tl(s) {
  for (let e in s) if ((e === Kt && s[e] !== "webhook") || !(e in Yi)) return !1;
  return !0;
}
var $i = { type: !0, id: !0, documentName: !0, documentId: !0, fallbackEmail: !0 };
function Nl(s) {
  for (let e in s) if ((e === Kt && s[e] !== "googlesheet") || !(e in $i)) return !1;
  return !0;
}
var Xi = { provider: !0, filtering: !0, mode: !0 };
function Ll(s) {
  for (let e in s) if ((e === qi && s[e] !== "spam_protection") || !(e in Xi)) return !1;
  return !0;
}
var Zi = "New Submission",
  ea = "You\u2019ve just received a new submission.";
function Pl(s, e) {
  let t = e.getItemIds(s.id);
  if (t) return t[0];
}
var ta = {
  "3g2": "video/3gpp2",
  "3gp": "video/3gpp",
  "3gpp": "video/3gpp",
  "3mf": "model/3mf",
  aac: "audio/aac",
  ac: "application/pkix-attr-cert",
  adp: "audio/adpcm",
  adts: "audio/aac",
  ai: "application/postscript",
  aml: "application/automationml-aml+xml",
  amlx: "application/automationml-amlx+zip",
  amr: "audio/amr",
  apng: "image/apng",
  appcache: "text/cache-manifest",
  appinstaller: "application/appinstaller",
  appx: "application/appx",
  appxbundle: "application/appxbundle",
  asc: "application/pgp-keys",
  atom: "application/atom+xml",
  atomcat: "application/atomcat+xml",
  atomdeleted: "application/atomdeleted+xml",
  atomsvc: "application/atomsvc+xml",
  au: "audio/basic",
  avci: "image/avci",
  avcs: "image/avcs",
  avif: "image/avif",
  aw: "application/applixware",
  bdoc: "application/bdoc",
  bin: "application/octet-stream",
  bmp: "image/bmp",
  bpk: "application/octet-stream",
  btf: "image/prs.btif",
  btif: "image/prs.btif",
  buffer: "application/octet-stream",
  ccxml: "application/ccxml+xml",
  cdfx: "application/cdfx+xml",
  cdmia: "application/cdmi-capability",
  cdmic: "application/cdmi-container",
  cdmid: "application/cdmi-domain",
  cdmio: "application/cdmi-object",
  cdmiq: "application/cdmi-queue",
  cer: "application/pkix-cert",
  cgm: "image/cgm",
  cjs: "application/node",
  class: "application/java-vm",
  coffee: "text/coffeescript",
  conf: "text/plain",
  cpl: "application/cpl+xml",
  cpt: "application/mac-compactpro",
  crl: "application/pkix-crl",
  css: "text/css",
  csv: "text/csv",
  cu: "application/cu-seeme",
  cwl: "application/cwl",
  cww: "application/prs.cww",
  davmount: "application/davmount+xml",
  dbk: "application/docbook+xml",
  deb: "application/octet-stream",
  def: "text/plain",
  deploy: "application/octet-stream",
  dib: "image/bmp",
  "disposition-notification": "message/disposition-notification",
  dist: "application/octet-stream",
  distz: "application/octet-stream",
  dll: "application/octet-stream",
  dmg: "application/octet-stream",
  dms: "application/octet-stream",
  doc: "application/msword",
  dot: "application/msword",
  dpx: "image/dpx",
  drle: "image/dicom-rle",
  dsc: "text/prs.lines.tag",
  dssc: "application/dssc+der",
  dtd: "application/xml-dtd",
  dump: "application/octet-stream",
  dwd: "application/atsc-dwd+xml",
  ear: "application/java-archive",
  ecma: "application/ecmascript",
  elc: "application/octet-stream",
  emf: "image/emf",
  eml: "message/rfc822",
  emma: "application/emma+xml",
  emotionml: "application/emotionml+xml",
  eps: "application/postscript",
  epub: "application/epub+zip",
  exe: "application/octet-stream",
  exi: "application/exi",
  exp: "application/express",
  exr: "image/aces",
  ez: "application/andrew-inset",
  fdf: "application/fdf",
  fdt: "application/fdt+xml",
  fits: "image/fits",
  g3: "image/g3fax",
  gbr: "application/rpki-ghostbusters",
  geojson: "application/geo+json",
  gif: "image/gif",
  glb: "model/gltf-binary",
  gltf: "model/gltf+json",
  gml: "application/gml+xml",
  gpx: "application/gpx+xml",
  gram: "application/srgs",
  grxml: "application/srgs+xml",
  gxf: "application/gxf",
  gz: "application/gzip",
  h261: "video/h261",
  h263: "video/h263",
  h264: "video/h264",
  heic: "image/heic",
  heics: "image/heic-sequence",
  heif: "image/heif",
  heifs: "image/heif-sequence",
  hej2: "image/hej2k",
  held: "application/atsc-held+xml",
  hjson: "application/hjson",
  hlp: "application/winhlp",
  hqx: "application/mac-binhex40",
  hsj2: "image/hsj2",
  htm: "text/html",
  html: "text/html",
  ics: "text/calendar",
  ief: "image/ief",
  ifb: "text/calendar",
  iges: "model/iges",
  igs: "model/iges",
  img: "application/octet-stream",
  in: "text/plain",
  ini: "text/plain",
  ink: "application/inkml+xml",
  inkml: "application/inkml+xml",
  ipfix: "application/ipfix",
  iso: "application/octet-stream",
  its: "application/its+xml",
  jade: "text/jade",
  jar: "application/java-archive",
  jhc: "image/jphc",
  jls: "image/jls",
  jp2: "image/jp2",
  jpe: "image/jpeg",
  jpeg: "image/jpeg",
  jpf: "image/jpx",
  jpg: "image/jpeg",
  jpg2: "image/jp2",
  jpgm: "image/jpm",
  jpgv: "video/jpeg",
  jph: "image/jph",
  jpm: "image/jpm",
  jpx: "image/jpx",
  js: "text/javascript",
  json: "application/json",
  json5: "application/json5",
  jsonld: "application/ld+json",
  jsonml: "application/jsonml+json",
  jsx: "text/jsx",
  jt: "model/jt",
  jxl: "image/jxl",
  jxr: "image/jxr",
  jxra: "image/jxra",
  jxrs: "image/jxrs",
  jxs: "image/jxs",
  jxsc: "image/jxsc",
  jxsi: "image/jxsi",
  jxss: "image/jxss",
  kar: "audio/midi",
  ktx: "image/ktx",
  ktx2: "image/ktx2",
  less: "text/less",
  lgr: "application/lgr+xml",
  list: "text/plain",
  litcoffee: "text/coffeescript",
  log: "text/plain",
  lostxml: "application/lost+xml",
  lrf: "application/octet-stream",
  m1v: "video/mpeg",
  m21: "application/mp21",
  m2a: "audio/mpeg",
  m2t: "video/mp2t",
  m2ts: "video/mp2t",
  m2v: "video/mpeg",
  m3a: "audio/mpeg",
  m4a: "audio/mp4",
  m4p: "application/mp4",
  m4s: "video/iso.segment",
  ma: "application/mathematica",
  mads: "application/mads+xml",
  maei: "application/mmt-aei+xml",
  man: "text/troff",
  manifest: "text/cache-manifest",
  map: "application/json",
  mar: "application/octet-stream",
  markdown: "text/markdown",
  mathml: "application/mathml+xml",
  mb: "application/mathematica",
  mbox: "application/mbox",
  md: "text/markdown",
  mdx: "text/mdx",
  me: "text/troff",
  mesh: "model/mesh",
  meta4: "application/metalink4+xml",
  metalink: "application/metalink+xml",
  mets: "application/mets+xml",
  mft: "application/rpki-manifest",
  mid: "audio/midi",
  midi: "audio/midi",
  mime: "message/rfc822",
  mj2: "video/mj2",
  mjp2: "video/mj2",
  mjs: "text/javascript",
  mml: "text/mathml",
  mods: "application/mods+xml",
  mov: "video/quicktime",
  mp2: "audio/mpeg",
  mp21: "application/mp21",
  mp2a: "audio/mpeg",
  mp3: "audio/mpeg",
  mp4: "video/mp4",
  mp4a: "audio/mp4",
  mp4s: "application/mp4",
  mp4v: "video/mp4",
  mpd: "application/dash+xml",
  mpe: "video/mpeg",
  mpeg: "video/mpeg",
  mpf: "application/media-policy-dataset+xml",
  mpg: "video/mpeg",
  mpg4: "video/mp4",
  mpga: "audio/mpeg",
  mpp: "application/dash-patch+xml",
  mrc: "application/marc",
  mrcx: "application/marcxml+xml",
  ms: "text/troff",
  mscml: "application/mediaservercontrol+xml",
  msh: "model/mesh",
  msi: "application/octet-stream",
  msix: "application/msix",
  msixbundle: "application/msixbundle",
  msm: "application/octet-stream",
  msp: "application/octet-stream",
  mtl: "model/mtl",
  mts: "video/mp2t",
  musd: "application/mmt-usd+xml",
  mxf: "application/mxf",
  mxmf: "audio/mobile-xmf",
  mxml: "application/xv+xml",
  n3: "text/n3",
  nb: "application/mathematica",
  nq: "application/n-quads",
  nt: "application/n-triples",
  obj: "model/obj",
  oda: "application/oda",
  oga: "audio/ogg",
  ogg: "audio/ogg",
  ogv: "video/ogg",
  ogx: "application/ogg",
  omdoc: "application/omdoc+xml",
  onepkg: "application/onenote",
  onetmp: "application/onenote",
  onetoc: "application/onenote",
  onetoc2: "application/onenote",
  opf: "application/oebps-package+xml",
  opus: "audio/ogg",
  otf: "font/otf",
  owl: "application/rdf+xml",
  oxps: "application/oxps",
  p10: "application/pkcs10",
  p7c: "application/pkcs7-mime",
  p7m: "application/pkcs7-mime",
  p7s: "application/pkcs7-signature",
  p8: "application/pkcs8",
  pdf: "application/pdf",
  pfr: "application/font-tdpfr",
  pgp: "application/pgp-encrypted",
  pkg: "application/octet-stream",
  pki: "application/pkixcmp",
  pkipath: "application/pkix-pkipath",
  pls: "application/pls+xml",
  png: "image/png",
  prc: "model/prc",
  prf: "application/pics-rules",
  provx: "application/provenance+xml",
  ps: "application/postscript",
  pskcxml: "application/pskc+xml",
  pti: "image/prs.pti",
  qt: "video/quicktime",
  raml: "application/raml+yaml",
  rapd: "application/route-apd+xml",
  rdf: "application/rdf+xml",
  relo: "application/p2p-overlay+xml",
  rif: "application/reginfo+xml",
  rl: "application/resource-lists+xml",
  rld: "application/resource-lists-diff+xml",
  rmi: "audio/midi",
  rnc: "application/relax-ng-compact-syntax",
  rng: "application/xml",
  roa: "application/rpki-roa",
  roff: "text/troff",
  rq: "application/sparql-query",
  rs: "application/rls-services+xml",
  rsat: "application/atsc-rsat+xml",
  rsd: "application/rsd+xml",
  rsheet: "application/urc-ressheet+xml",
  rss: "application/rss+xml",
  rtf: "text/rtf",
  rtx: "text/richtext",
  rusd: "application/route-usd+xml",
  s3m: "audio/s3m",
  sbml: "application/sbml+xml",
  scq: "application/scvp-cv-request",
  scs: "application/scvp-cv-response",
  sdp: "application/sdp",
  senmlx: "application/senml+xml",
  sensmlx: "application/sensml+xml",
  ser: "application/java-serialized-object",
  setpay: "application/set-payment-initiation",
  setreg: "application/set-registration-initiation",
  sgi: "image/sgi",
  sgm: "text/sgml",
  sgml: "text/sgml",
  shex: "text/shex",
  shf: "application/shf+xml",
  shtml: "text/html",
  sieve: "application/sieve",
  sig: "application/pgp-signature",
  sil: "audio/silk",
  silo: "model/mesh",
  siv: "application/sieve",
  slim: "text/slim",
  slm: "text/slim",
  sls: "application/route-s-tsid+xml",
  smi: "application/smil+xml",
  smil: "application/smil+xml",
  snd: "audio/basic",
  so: "application/octet-stream",
  spdx: "text/spdx",
  spp: "application/scvp-vp-response",
  spq: "application/scvp-vp-request",
  spx: "audio/ogg",
  sql: "application/sql",
  sru: "application/sru+xml",
  srx: "application/sparql-results+xml",
  ssdl: "application/ssdl+xml",
  ssml: "application/ssml+xml",
  stk: "application/hyperstudio",
  stl: "model/stl",
  stpx: "model/step+xml",
  stpxz: "model/step-xml+zip",
  stpz: "model/step+zip",
  styl: "text/stylus",
  stylus: "text/stylus",
  svg: "image/svg+xml",
  svgz: "image/svg+xml",
  swidtag: "application/swid+xml",
  t: "text/troff",
  t38: "image/t38",
  td: "application/urc-targetdesc+xml",
  tei: "application/tei+xml",
  teicorpus: "application/tei+xml",
  text: "text/plain",
  tfi: "application/thraud+xml",
  tfx: "image/tiff-fx",
  tif: "image/tiff",
  tiff: "image/tiff",
  toml: "application/toml",
  tr: "text/troff",
  trig: "application/trig",
  ts: "video/mp2t",
  tsd: "application/timestamped-data",
  tsv: "text/tab-separated-values",
  ttc: "font/collection",
  ttf: "font/ttf",
  ttl: "text/turtle",
  ttml: "application/ttml+xml",
  txt: "text/plain",
  u3d: "model/u3d",
  u8dsn: "message/global-delivery-status",
  u8hdr: "message/global-headers",
  u8mdn: "message/global-disposition-notification",
  u8msg: "message/global",
  ubj: "application/ubjson",
  uri: "text/uri-list",
  uris: "text/uri-list",
  urls: "text/uri-list",
  vcard: "text/vcard",
  vrml: "model/vrml",
  vtt: "text/vtt",
  vxml: "application/voicexml+xml",
  war: "application/java-archive",
  wasm: "application/wasm",
  wav: "audio/wav",
  weba: "audio/webm",
  webm: "video/webm",
  webmanifest: "application/manifest+json",
  webp: "image/webp",
  wgsl: "text/wgsl",
  wgt: "application/widget",
  wif: "application/watcherinfo+xml",
  wmf: "image/wmf",
  woff: "font/woff",
  woff2: "font/woff2",
  wrl: "model/vrml",
  wsdl: "application/wsdl+xml",
  wspolicy: "application/wspolicy+xml",
  x3d: "model/x3d+xml",
  x3db: "model/x3d+fastinfoset",
  x3dbz: "model/x3d+binary",
  x3dv: "model/x3d-vrml",
  x3dvz: "model/x3d+vrml",
  x3dz: "model/x3d+xml",
  xaml: "application/xaml+xml",
  xav: "application/xcap-att+xml",
  xca: "application/xcap-caps+xml",
  xcs: "application/calendar+xml",
  xdf: "application/xcap-diff+xml",
  xdssc: "application/dssc+xml",
  xel: "application/xcap-el+xml",
  xenc: "application/xenc+xml",
  xer: "application/patch-ops-error+xml",
  xfdf: "application/xfdf",
  xht: "application/xhtml+xml",
  xhtml: "application/xhtml+xml",
  xhvml: "application/xv+xml",
  xlf: "application/xliff+xml",
  xm: "audio/xm",
  xml: "text/xml",
  xns: "application/xcap-ns+xml",
  xop: "application/xop+xml",
  xpl: "application/xproc+xml",
  xsd: "application/xml",
  xsf: "application/prs.xsf+xml",
  xsl: "application/xml",
  xslt: "application/xml",
  xspf: "application/xspf+xml",
  xvm: "application/xv+xml",
  xvml: "application/xv+xml",
  yaml: "text/yaml",
  yang: "application/yang",
  yin: "application/yin+xml",
  yml: "text/yaml",
  zip: "application/zip",
};
function Ot(s) {
  let e = ("" + s).trim().toLowerCase(),
    t = e.lastIndexOf(".");
  return ta[~t ? e.substring(++t) : e];
}
function jt(s) {
  let e = new Set();
  if (!s) return e;
  if (Qe(s) && vo(s)) {
    let t = mn(s.layoutTemplateIdentifier);
    t && e.add(t);
  }
  for (let { node: t, skipChildren: o } of s.walkWithSkipChildren()) {
    if (!fo(t)) continue;
    if (go(t)) {
      o();
      continue;
    }
    let n = mn(t.codeComponentIdentifier);
    n && e.add(n);
  }
  return e;
}
function mn(s) {
  let e = $(s);
  if (!(!e || !Ie(e))) return B({ type: e.type, name: e.localIdName });
}
function Jt(s) {
  try {
    let e = JSON.parse(s);
    if (ua(e)) return e;
  } catch {}
}
function An(s) {
  return JSON.stringify(s);
}
function ua(s) {
  return pt(s, "analysis") && pt(s, "packageConfigs");
}
var fe = Y("modules-divergence-reporter"),
  Aa = 2,
  ha = [1e3, 2e3, 4e3, 8e3, 16e3, 32e3],
  ga = 10 * 6e4,
  fa = 1e4;
function ya(s) {
  return `${s.localId}|${s.treeSaveId ?? ""}|${s.backendSaveId ?? ""}`;
}
var He = class {
  constructor(e) {
    h(this, "sample");
    h(this, "runWhenIdle");
    h(this, "abortSignal");
    h(this, "consecutiveThreshold");
    h(this, "settleBackoffMs");
    h(this, "slowIntervalMs");
    h(this, "fastIntervalMs");
    h(this, "pendingTimer", null);
    h(this, "settleAttempt", 0);
    h(this, "started", !1);
    h(this, "counters", new Map());
    h(this, "sessionLoggedKeys", new Set());
    ((this.sample = e.sample),
      (this.runWhenIdle = e.runWhenIdle),
      (this.abortSignal = e.abortSignal),
      (this.consecutiveThreshold = e.consecutiveThreshold ?? Aa),
      (this.settleBackoffMs = e.settleBackoffMs ?? ha),
      (this.slowIntervalMs = e.slowIntervalMs ?? ga),
      (this.fastIntervalMs = e.fastIntervalMs ?? fa),
      this.abortSignal?.addEventListener("abort", () => {
        this.pendingTimer !== null && (clearTimeout(this.pendingTimer), (this.pendingTimer = null));
      }));
  }
  start() {
    this.started ||
      ((this.started = !0),
      fe.debug("started", {
        threshold: this.consecutiveThreshold,
        slowIntervalMs: this.slowIntervalMs,
        fastIntervalMs: this.fastIntervalMs,
      }),
      this.scheduleNext(0));
  }
  sampleNow() {
    this.scheduleNext(0);
  }
  scheduleNext(e) {
    this.abortSignal?.aborted ||
      (this.pendingTimer !== null && clearTimeout(this.pendingTimer),
      (this.pendingTimer = setTimeout(() => {
        ((this.pendingTimer = null),
          !this.abortSignal?.aborted &&
            this.runWhenIdle(() => {
              this.abortSignal?.aborted || this.runSample().catch(K);
            }));
      }, e)));
  }
  async runSample() {
    let e;
    try {
      e = await this.sample();
    } catch (t) {
      if (this.abortSignal?.aborted) return;
      (fe.debug("failed to sample modules divergence", { error: t }), this.handleNotSettled());
      return;
    }
    if (!this.abortSignal?.aborted)
      switch (e.kind) {
        case "notSettled":
          this.handleNotSettled();
          return;
        case "sampled":
          ((this.settleAttempt = 0), this.handleSampled(e.divergences));
          return;
      }
  }
  handleNotSettled() {
    let e = this.settleBackoffMs[this.settleAttempt];
    if (e === void 0) {
      (fe.debug("sample notSettled, backoff exhausted, waiting slow interval", {
        nextDelayMs: this.slowIntervalMs,
      }),
        (this.settleAttempt = 0),
        this.scheduleNext(this.slowIntervalMs));
      return;
    }
    (fe.debug("sample notSettled, retrying with backoff", {
      attempt: this.settleAttempt,
      nextDelayMs: e,
    }),
      (this.settleAttempt += 1),
      this.scheduleNext(e));
  }
  handleSampled(e) {
    let t = new Set(),
      o = [],
      n = [];
    for (let r of e) {
      let d = ya(r);
      if (this.sessionLoggedKeys.has(d)) {
        n.push(r);
        continue;
      }
      (o.push(r), t.add(d));
      let l = this.counters.get(d);
      l ? (l.count += 1) : this.counters.set(d, { entry: r, count: 1 });
    }
    for (let r of this.counters.keys()) t.has(r) || this.counters.delete(r);
    let i = [];
    for (let [r, d] of this.counters.entries())
      d.count >= this.consecutiveThreshold &&
        (this.sessionLoggedKeys.add(r), this.counters.delete(r), i.push(d.entry));
    let a = this.counters.size > 0 ? this.fastIntervalMs : this.slowIntervalMs;
    (this.scheduleNext(a),
      fe.debug("sampled", {
        sampledDivergences: o,
        settledDivergences: i,
        alreadySeenDivergences: n,
        nextDelayMs: a,
      }));
  }
};
function hn(s, e) {
  let t = new Map(),
    o = new Map();
  for (let r of s) {
    let d = r.id;
    (t.set(d, r.save.saveId), o.set(d, r.save.moduleId));
  }
  let n = new Map(),
    i = new Map();
  for (let r of e) {
    let d = r.localId;
    (n.set(d, r.saveId), i.set(d, r.id));
  }
  let a = [];
  for (let [r, d] of n) {
    let l = t.get(r);
    if (l === void 0) a.push({ localId: r, treeSaveId: null, backendSaveId: d });
    else if (l !== d) {
      let p = o.get(r),
        c = i.get(r);
      if (p !== void 0 && c !== void 0 && p !== c) continue;
      a.push({ localId: r, treeSaveId: l, backendSaveId: d });
    }
  }
  for (let [r, d] of t) n.has(r) || a.push({ localId: r, treeSaveId: d, backendSaveId: null });
  return a;
}
var ze = class {
  constructor() {
    h(this, "versions", new Map());
  }
  rememberPrunedDependencies(e, t, o) {
    if (!e || !t) return;
    let n = e.dependencies,
      i = t.dependencies;
    for (let a of Object.keys(n)) {
      if (a in i) continue;
      let r = this.getResolvedVersion(o, a);
      r && this.versions.set(a, r);
    }
  }
  rememberPrunedDependenciesFromModuleContent(e, t, o) {
    !t || !o || this.rememberPrunedDependencies(k(t), k(o), e ? G(e) : void 0);
  }
  getPrunedVersion(e) {
    return this.versions.get(e);
  }
  has(e) {
    return this.versions.has(e);
  }
  withPrunedVersion(e) {
    let t = Ca(e),
      o = this.getPrunedVersion(t);
    return o ? Ma(e, t, o) : e;
  }
  getResolvedDependencyVersionOptions(e) {
    let t = Object.fromEntries(this.versions);
    if ((Object.assign(t, e.dependencies), Object.keys(t).length !== 0))
      return { localDependencies: t };
  }
  addRememberedDependencies(e, t) {
    for (let [o, n] of this.versions) {
      if (o in e) continue;
      let i = this.getImportUrlForDependency(t, o);
      if (!i) continue;
      let a = le(i)?.version;
      a && (e[o] = a === n ? n : a);
    }
  }
  getImportUrlForDependency(e, t) {
    let o = e.imports[t];
    if (o) return o;
    let n = Object.keys(e.imports).find((i) => va(i, t));
    return n === void 0 ? void 0 : e.imports[n];
  }
  getResolvedVersion(e, t) {
    if (!e) return;
    let o = this.getImportUrlForDependency(e, t);
    return o ? le(o)?.version : void 0;
  }
};
function Ca(s) {
  let e = s.target.indexOf("@", 1);
  return e === -1 ? s.target : s.target.slice(0, e);
}
function Ma(s, e, t) {
  return { ...s, target: `${e}@${t}` };
}
function va(s, e) {
  return s === e || s.startsWith(`${e}/`);
}
var v = Y("modules-storage");
function Ea(s) {
  return (s instanceof mo || s instanceof Se) && s.status === Ao.NotFound;
}
var fn = Object.freeze({}),
  yn = Object.freeze({});
function Zp(s) {
  return s && (s.type === "codeFile" || s.type === "shader")
    ? (M(O(s.sourceContent), `${s.type} module entry is missing source content`), !0)
    : !1;
}
function Wt(s) {
  return s.name === it && s.type === oo;
}
function Sa(s) {
  return s.id === W;
}
function Cn(s, e) {
  return !!s && s.saveId === e.saveId && s.id === e.moduleId;
}
var Ba = 1e4,
  Ve = class extends Error {
    constructor() {
      (super("A circular dependency was detected."), (this.name = "CircularDependencyError"));
    }
  },
  qe = "update-modules-storage",
  Qa = 0;
async function b(s) {
  let e = performance.now(),
    t = `acquire-modules-storage-lock-${Qa++}`;
  return wt.request(qe, () => {
    let o = performance.now(),
      n = o - e;
    return (
      os(t, e, o, "vekter"),
      v.debug("\u{1F513} Acquired the", qe, "lock in", n.toFixed(2), "ms"),
      n > 1e3 &&
        v.warn("\u2757 Long wait: it took", n.toFixed(0), "ms to acquire the", qe, "lock."),
      s()
    );
  });
}
var Ye = class {
    constructor(e, t, o, n) {
      h(this, "storage", e);
      h(this, "localId", t);
      h(this, "type", o);
      h(this, "debugModuleStoreAndComponentLoaderRevisionsMatch", n);
    }
    isValid() {
      return (
        this.storage.getTransientSaveByLocalId(this.localId) !== void 0 ||
        this.storage.getPersistedModuleByLocalId(this.localId) !== void 0
      );
    }
    get id() {
      let e = this.storage.getPersistedModuleByLocalId(this.localId);
      if (e) return e.id;
      let t = this.storage.getModuleTreeData(this.localId);
      return (M(t, "Module must exist"), t.moduleId);
    }
    get saveId() {
      let e = this.storage.getTransientSaveByLocalId(this.localId);
      if (e) return e.saveId;
      let t = this.storage.getPersistedModuleByLocalId(this.localId);
      return (M(t, "Module must exist"), t.saveId);
    }
    get transientSVGIcon() {
      let e = this.storage.getTransientSaveByLocalId(this.localId);
      if (e) return e.svgIcon;
    }
    get lastPublish() {
      return this.storage.getPersistedModuleByLocalId(this.localId)?.lastPublish ?? null;
    }
    externalModuleIdentifier(e = "default") {
      let t = this.storage.getTransientSaveByLocalId(this.localId);
      if (t) {
        let n = ee(t.name);
        return nt(this.id, t.saveId, n.module, e);
      }
      let o = this.storage.getPersistedModuleByLocalId(this.localId);
      return (
        M(o?.files.module, "ModulesStorage: Expected module typed file in persisted module."),
        nt(this.id, o.saveId, o.files.module, e)
      );
    }
    delete(e) {
      return this.storage.delete(this.localId, e);
    }
    publish(e, t, o) {
      return this.storage.publish(this.localId, { namespace: e, name: t, version: o });
    }
    sourceRevision() {
      let e = this.storage.getTransientSaveByLocalId(this.localId);
      if (e) return e.sourceRevision;
      let t = this.storage.getPersistedModuleByLocalId(this.localId);
      if (t) return $t(t);
    }
    annotations(e, t) {
      let o = this.storage.getModuleTreeData(this.localId),
        n = this.storage.usesCrdt() && o ? o.annotations : this.annotationsFromTransientSave();
      return (
        e && this.debugModuleStoreAndComponentLoaderRevisionsMatch() && wa(n, e),
        t ? n?.[t] : n
      );
    }
    annotationsFromTransientSave() {
      let e = this.storage.getTransientSaveByLocalId(this.localId);
      return e?.annotations
        ? ce(e.annotations)
        : this.storage.getModuleTreeData(this.localId)?.annotations;
    }
  },
  qt = class extends Ye {
    constructor(t, o, n, i, a) {
      super(t, o, n, i);
      h(this, "name", a);
    }
    currentSourceEquals(t, o) {
      let n = this.storage.getPersistedModuleByLocalId(this.localId);
      return !n || n.submodules.length || o.submodules?.size ? !1 : n.sourceContent === t;
    }
    updateSource(t, o = {}) {
      return this.storage.updateSources([
        { localId: this.localId, source: t, options: { ...o, stableName: !0 } },
      ]);
    }
    persist(t, o) {
      return this.storage.upsert(this.localId, { ...t, type: this.type, name: this.name }, o);
    }
  };
function wa(s, e) {
  if (!s) return;
  let t = $(e.identifier);
  (M(Ie(t) && Zt(t), "Entity must have an identifier."),
    e.annotations &&
      t.exportSpecifier in s &&
      !lt(s[t.exportSpecifier], ce({ default: e.annotations }).default, !0) &&
      v.reportError("Static annotations are not synchronized with runtime annotations.", {
        identifier: e.identifier,
      }));
}
function Qn(s) {
  let e = s.sourceRevision;
  return ro(e) ? e : void 0;
}
function $t(s) {
  return Qn(s.metadata);
}
var Vt = class extends Ye {
    updateSource(e, t) {
      return this.storage.updateSources([{ localId: this.localId, source: e, options: t ?? {} }]);
    }
    persist(e, t) {
      return this.storage.update(this.localId, e, t);
    }
    rename(e) {
      return this.storage.rename(this.localId, e);
    }
  },
  Mn = class {
    constructor(e, t, o = () => !0) {
      h(this, "storage", e);
      h(this, "type", t);
      h(this, "moduleStoreAndComponentLoaderRevisionsMatch", o);
    }
    async create(e, t) {
      return this.storage.create({ ...e, type: this.type }, t);
    }
    getByStableName(e) {
      return new qt(
        this.storage,
        eo(this.type, e),
        this.type,
        this.moduleStoreAndComponentLoaderRevisionsMatch,
        e
      );
    }
    getByLocalId(e) {
      return new Vt(this.storage, e, this.type, this.moduleStoreAndComponentLoaderRevisionsMatch);
    }
    getUniqueName(e) {
      return this.storage.getUniqueNameForType(this.type, e);
    }
  };
function ba(s) {
  let e = s.target.indexOf("@", 1);
  return e === -1 ? s.target : s.target.slice(0, e);
}
var $e = class $e {
  constructor(e, t, o, n, i, a, r, d, l, p, c) {
    h(this, "getModulesService", e);
    h(this, "compile", t);
    h(this, "process", o);
    h(this, "processWhenReady", n);
    h(this, "markCurrentCommitHasUserModuleEdit", i);
    h(this, "runWhenIdle", a);
    h(this, "scheduleAgentChanges", r);
    h(this, "treeStore", d);
    h(this, "getActiveScope", l);
    h(this, "makeDocumentReadOnly", p);
    h(this, "abortSignal", c);
    h(this, "useTreeAsLocalModuleList", !1);
    h(this, "detached", !1);
    h(this, "dependenciesModule");
    h(this, "prunedDependencySessionMemory", new ze());
    h(this, "persistedModules", new Map());
    h(this, "persistedLocalIdsByTypeSlashNameCache", new WeakMap());
    h(this, "transientSaves", new Map());
    h(this, "lastSnapshot", {
      dependenciesModule: void 0,
      modules: new Map(),
      depsGraph: {},
      initialized: !1,
      modulesReloading: !1,
    });
    h(this, "modulesService");
    h(this, "lazyServerModulesForTransientSaves", new Map());
    h(this, "backgroundJob", null);
    h(this, "backgroundAbortController", null);
    h(this, "initialized", !1);
    h(this, "initializationStarted", !1);
    h(this, "readOnlyTree", !1);
    h(this, "modulesReloading", !1);
    h(this, "moduleReloadSyncsInFlight", 0);
    h(this, "modulesReloadingTimeout");
    h(this, "resolveInitialization", () => {
      throw new Error("initializationPromise has not executed yet");
    });
    h(this, "rejectInitialization", () => {
      throw new Error("initializationPromise has not executed yet");
    });
    h(
      this,
      "initializationPromise",
      new Promise((e, t) => {
        ((this.resolveInitialization = e), (this.rejectInitialization = t));
      })
    );
    h(this, "didSetupModuleEventStream", !1);
    h(this, "transientInfo", null);
    h(this, "divergenceReporter");
    h(this, "previousLocalModuleNodes");
    h(this, "treeNodesToUpdate", new Map());
    h(this, "treeNodesToDelete", []);
    h(this, "listeners", new Set());
    h(this, "transientSaveRetries", new Map());
    h(this, "transientSaveRelativeImportRetries", new Set());
    h(this, "downloadQueue", new se(1200));
    this.abortSignal?.addEventListener("abort", this.clearModulesReloadingTimeout.bind(this), {
      once: !0,
    });
  }
  hasPendingServerModules() {
    return this.lazyServerModulesForTransientSaves.size > 0;
  }
  processOnePendingServerModule() {
    return this.lazyServerModulesForTransientSaves.size === 0
      ? Promise.resolve(!1)
      : b(async () => {
          for (let [, e] of this.lazyServerModulesForTransientSaves)
            for (let t of e) {
              let o = this.persistedModules.get(t)?.localId;
              if (!o) continue;
              let n = this.persistedModules.get(o);
              if (n?.kind !== "server") continue;
              v.debug("\u{1F343} Process one server \u2192 local module", t);
              let i = await this.createLocalModuleFromModule(n),
                a = D(this.persistedModules, (r) => {
                  r.set(n.localId, i);
                });
              return (
                this.setNextInternalState({
                  dependenciesModule: this.dependenciesModule,
                  persistedModules: a,
                  depsGraph: this.lastSnapshot.depsGraph,
                  didRemoteChange: !1,
                  transientSaves: this.transientSaves,
                }),
                !0
              );
            }
          return !1;
        });
  }
  async changeScope(e) {
    if (!this.hasPendingServerModules()) return;
    let t = jt(e);
    !t ||
      t.size === 0 ||
      (await b(async () => {
        let o = new Set(),
          n = this.lastSnapshot.depsGraph;
        for (let [d, l] of this.lazyServerModulesForTransientSaves) Le(n, d, l, t, o);
        let i = [];
        for (let d of o) {
          let l = this.getModuleWithTypeSlashName(d);
          l?.kind === "server" && i.push(this.createLocalModuleFromModule(l));
        }
        if (
          (v.debug(
            "\u{1F343} Prioritizing making visible modules local after changing scope:",
            e.id,
            "/ Visible:",
            t,
            "/ Visible Dependencies:",
            o,
            "/ Server modules:",
            i.length
          ),
          i.length === 0)
        )
          return;
        let a = await Promise.all(i),
          r = D(this.persistedModules, (d) => {
            for (let l of a) d.set(l.localId, l);
          });
        this.setNextInternalState({
          dependenciesModule: this.dependenciesModule,
          persistedModules: r,
          depsGraph: n,
          didRemoteChange: !1,
          transientSaves: this.transientSaves,
        });
      }),
      this.makeLazyServerModulesLocalWhenIdle().catch(K));
  }
  async makeVisibleDependentServerModulesLocal(e) {
    if (!ie.isOn("prioritizedModuleEvaluation")) return;
    let t = this.getActiveScope(),
      o = new Set(),
      n = jt(t),
      i = new Set();
    for (let d of e) {
      let l = this.typeAndNameFromLocalId(d.localId, d.options.stableName),
        p = B(l),
        c = this.lastSnapshot.depsGraph;
      (Le(c, p, i, n, o), this.lazyServerModulesForTransientSaves.set(p, i), o.delete(p));
    }
    let a = [];
    for (let d of o) {
      let l = this.getModuleWithTypeSlashName(d);
      l?.kind === "server" && a.push(this.createLocalModuleFromModule(l));
    }
    v.debug(
      "\u{1F343} Prioritizing dependent server modules after updating:",
      e.map((d) => d.localId),
      "/ Visible:",
      o,
      "/ Lazy:",
      i,
      "/ Server modules:",
      a.length
    );
    let r = this.persistedModules;
    if (a.length > 0) {
      let d = await Promise.all(a);
      r = D(r, (l) => {
        for (let p of d) l.set(p.localId, p);
      });
    }
    this.persistedModules = r;
  }
  async makeLazyServerModulesLocalWhenIdle() {
    (this.cancelBackgroundJob(), (this.backgroundAbortController = new AbortController()));
    let { signal: e } = this.backgroundAbortController;
    return (
      (this.backgroundJob = (async () => {
        try {
          for (; this.hasPendingServerModules() && !e.aborted; ) {
            let t = new io();
            if (
              (this.runWhenIdle(() => {
                if (e.aborted) {
                  t.resolve(!1);
                  return;
                }
                this.processOnePendingServerModule().then(t.resolve, t.reject);
              }),
              !(await t))
            )
              break;
          }
        } finally {
          ((this.backgroundJob = null), (this.backgroundAbortController = null));
        }
      })()),
      this.backgroundJob
    );
  }
  cancelBackgroundJob() {
    this.backgroundAbortController && this.backgroundAbortController.abort();
  }
  usesCrdt() {
    return this.treeStore.mode === "crdt" && ie.isOn("transientLocalModuleTreeData");
  }
  getTransientSave(e) {
    return this.transientSaves.get(e);
  }
  isReadOnly() {
    return this.readOnlyTree;
  }
  isReloadingModules() {
    return this.modulesReloading;
  }
  clearModulesReloadingTimeout() {
    this.modulesReloadingTimeout &&
      (clearTimeout(this.modulesReloadingTimeout), (this.modulesReloadingTimeout = void 0));
  }
  finishModulesReloadingAfterTimeout() {
    this.setModulesReloading(!1);
  }
  scheduleModulesReloadingTimeout() {
    (this.clearModulesReloadingTimeout(),
      (this.modulesReloadingTimeout = setTimeout(
        this.finishModulesReloadingAfterTimeout.bind(this),
        Ba
      )));
  }
  setModulesReloading(e) {
    if (this.modulesReloading === e) {
      e && this.scheduleModulesReloadingTimeout();
      return;
    }
    ((this.modulesReloading = e),
      e ? this.scheduleModulesReloadingTimeout() : this.clearModulesReloadingTimeout());
    let t = Ht(
      this.dependenciesModule,
      this.lastSnapshot.dependenciesModule,
      this.persistedModules,
      this.transientSaves,
      this.lastSnapshot.depsGraph,
      this.lastSnapshot.modules,
      this.initialized,
      !1,
      !1,
      this.modulesReloading
    );
    ((this.lastSnapshot = {
      dependenciesModule: t.dependenciesModule,
      modules: t.modules,
      depsGraph: t.depsGraph,
      initialized: t.initialized,
      modulesReloading: t.modulesReloading,
    }),
      this.notifyListeners(t));
  }
  resetModuleStateAndPermissions(e) {
    ((this.readOnlyTree = e === "readonly"),
      (this.useTreeAsLocalModuleList =
        e === "readonly" || e === "readwrite-detached" || this.treeStore.tree.has(X)),
      (this.detached = e === "readwrite-detached"),
      this.setModulesReloading(this.useTreeAsLocalModuleList),
      !this.useTreeAsLocalModuleList &&
        this.modulesService &&
        this.setupModuleEventStreamIfNeeded(),
      this.treeNodesToUpdate.clear(),
      (this.treeNodesToDelete = []),
      this.transientSaves.size > 0 &&
        (v.reportErrorOncePerMinute(new Error("Discarding transient saves"), {
          count: this.transientSaves.size,
        }),
        this.setNextInternalState({
          dependenciesModule: this.dependenciesModule,
          persistedModules: this.persistedModules,
          transientSaves: new Map(),
          depsGraph: this.lastSnapshot.depsGraph,
          didRemoteChange: !0,
        })));
  }
  async waitForModulesToSave() {
    let e = Array.from(this.transientSaves.keys());
    for (let o of e) this.transientSaves.has(o) && (await this.update(o, {}));
    let t = this.transientSaves.size;
    t > 0 && v.warn("waitForModulesToSave: transientSaves seems to be growing, ignoring rest:", t);
  }
  async initialize() {
    return this.initializationStarted
      ? this.initializationPromise
      : ((this.initializationStarted = !0),
        this.initializeInternal().then(this.resolveInitialization, (e) => {
          (v.reportError(e, { context: "Failed to initialize ModulesStorage: " }),
            this.rejectInitialization(e));
        }),
        this.initializationPromise);
  }
  setupModuleEventStreamIfNeeded() {
    this.didSetupModuleEventStream ||
      ((this.didSetupModuleEventStream = !0),
      M(
        this.modulesService,
        "ModulesStorage.useModuleEventStream: expected modules service to be initialized"
      ),
      this.modulesService
        .moduleEventsStream()
        .read(async ({ events: e }) => {
          let t = e.filter(Ta);
          this.handleRemoteModuleSaveEvents(t).catch(v.reportError);
          let o = e.filter(Na);
          this.handleRemoteModuleDeleteEvents(o).catch(v.reportError);
        })
        .catch((e) => {
          v.reportError(e, { context: "Failed to read ModulesAPI event stream: " });
        }));
  }
  async initializeInternal() {
    if (((this.modulesService = await this.getModulesService()), !this.modulesService)) return;
    let e = ue.get(this.treeStore.tree)?.children;
    ((this.useTreeAsLocalModuleList = this.treeStore.tree.has(X)),
      this.useTreeAsLocalModuleList ||
        (v.reportError(
          "Can't useTreeAsLocalModuleList in a project that doesn't have a local modules list node"
        ),
        this.setupModuleEventStreamIfNeeded()));
    let t,
      o = performance.now();
    if (this.useTreeAsLocalModuleList)
      if (
        (v.info("init from tree data"), (this.previousLocalModuleNodes = e), !e || e.length === 0)
      )
        t = { data: [] };
      else {
        let l = e.map((p) => ({ moduleId: p.save.moduleId, saveId: p.save.saveId }));
        t = await this.modulesService.lookUpModules({ queries: l });
      }
    else (v.info("init from module list"), (t = await this.modulesService.list({})));
    (Mt("modulesStorageInit"), v.debug("listing modules took:", performance.now() - o, "millis"));
    let n = t.data.find(Wt);
    n && (await this.updateDependenciesModule(n));
    let i = new Map(),
      a = 0,
      r = new Set();
    await Promise.all(
      t.data.map(async (l) => {
        if (B(l) === W) return;
        let p = await this.createServerModuleFromData(l);
        (v.trace("init - create module", p.localId, p.id, p.saveId, p.savedAt),
          i.set(p.localId, p),
          e && ka(e, l) && (a += 1),
          r.add(p.localId));
      })
    );
    let d = this.createDependencyGraph(i);
    ((this.initialized = !0),
      this.setNextInternalState({
        dependenciesModule: this.dependenciesModule,
        persistedModules: i,
        transientSaves: this.transientSaves,
        depsGraph: d,
        didRemoteChange: !0,
      }),
      Mt("modulesStorageFirstPublish"),
      this.processTreeUpdates({ writeTreeData: !0 }),
      a > 0 &&
        v.reportError("Data loss detected based on modules saves and modules in tree.", {
          dataLossCount: a,
        }));
  }
  startDivergenceReporter() {
    this.divergenceReporter ||
      (this.treeStore.tree.has(X) &&
        ((this.divergenceReporter = new He({
          sample: () => this.sampleModulesTreeBackendDivergences(),
          runWhenIdle: (e) => this.runWhenIdle(e),
          abortSignal: this.abortSignal,
        })),
        this.divergenceReporter.start()));
  }
  sampleDivergencesNow() {
    this.divergenceReporter?.sampleNow();
  }
  async sampleModulesTreeBackendDivergences() {
    return b(async () => {
      if (
        !this.initialized ||
        !this.modulesService ||
        this.transientSaves.size > 0 ||
        this.hasPendingTreeData() ||
        this.treeStore.tree.isViewOnly ||
        this.detached
      )
        return { kind: "notSettled" };
      let e = ue.getModuleNodes(this.treeStore.tree),
        { data: t } = await this.modulesService.list({});
      return { kind: "sampled", divergences: hn(e, t) };
    });
  }
  createDependencyGraph(e) {
    let t = [];
    for (let o of e.values()) {
      let n = B(o),
        i = o.imports.relative;
      t.push([n, i]);
    }
    return Qt(t);
  }
  hasPendingTreeData() {
    return this.treeNodesToUpdate.size > 0 || this.treeNodesToDelete.length > 0;
  }
  hasPendingUserInitiatedTreeData() {
    for (let { editSource: e } of this.treeNodesToUpdate.values())
      if (e?.kind === "user") return !0;
    return !1;
  }
  processTreeUpdates({ writeTreeData: e }) {
    this.initialized &&
      (this.syncLocalModulesWithReloadTracking().catch((t) => {
        v.reportError(new Error("Failed to sync local modules from tree", { cause: t }));
      }),
      e && this.tryWriteTreeData());
  }
  async syncLocalModulesWithReloadTracking() {
    this.moduleReloadSyncsInFlight += 1;
    try {
      await this.syncLocalModules();
    } finally {
      ((this.moduleReloadSyncsInFlight -= 1),
        this.moduleReloadSyncsInFlight === 0 && this.setModulesReloading(!1));
    }
  }
  async syncLocalModules() {
    if (!this.useTreeAsLocalModuleList) return;
    let e = ue.get(this.treeStore.tree)?.children;
    if (!e || this.previousLocalModuleNodes === e) return;
    let t = [],
      o = new Map();
    (this.previousLocalModuleNodes?.forEach((n) => {
      o.set(n.id, n);
    }),
      (this.previousLocalModuleNodes = e));
    for (let n of e) {
      let i = o.get(n.id);
      if ((o.delete(n.id), i === n)) continue;
      let a = n.save,
        r = this.persistedModules.get(n.id),
        d = !!a.name && (r?.name !== a.name || r?.title !== a.title);
      (Cn(r, a) && !d) ||
        (Sa(n) && Cn(this.dependenciesModule, a)) ||
        (t.push({ moduleId: a.moduleId, saveId: a.saveId }),
        v.debug("syncLocalModules to update:", n.id));
    }
    if (
      (o.size > 0 &&
        (v.debug("syncLocalModules removing:", o.keys()),
        await this.handleRemoteModuleDeletes(Array.from(o.values()).map((n) => n.save.moduleId))),
      t.length > 0)
    ) {
      (v.debug("syncLocalModules updating:", t),
        M(
          this.modulesService,
          "ModulesStorage.refresh: expected modules service to be initialized"
        ));
      let n = performance.now(),
        i = await this.modulesService.lookUpModules({ queries: t });
      (v.debug("lookupModules took:", performance.now() - n, "millis"),
        await this.handleRemoteModuleSaves(i.data));
    }
  }
  canWriteTree() {
    return !this.treeStore.tree.isViewOnly;
  }
  tryWriteTreeData() {
    this.canWriteTree() &&
      this.hasPendingTreeData() &&
      this.processWhenReady(
        () => {
          this.canWriteTree() && this.writeTreeData();
        },
        this.hasPendingUserInitiatedTreeData() ? void 0 : "nonUserEvent"
      );
  }
  writeTreeData() {
    if (!this.hasPendingTreeData()) return;
    if (!this.canWriteTree()) throw new Error("Cannot write tree data");
    let e = this.treeStore.tree;
    (e.lineage.setEditReason("localmodules"), this.createLocalModulesListNodeIfNeeded(e));
    for (let t of this.treeNodesToDelete)
      this.persistedModules.get(t) || (v.debug("tryWriteTreeData, remove:", t), e.remove(t));
    this.treeNodesToDelete = [];
    for (let [
      t,
      { treeVersion: o, errors: n, persistedModule: i, editSource: a },
    ] of this.treeNodesToUpdate.entries()) {
      let r = t;
      if (this.persistedModules.get(r)?.saveId !== i.saveId) {
        this.transientSaves.has(r) ||
          this.treeStore.localOnlyOverlays.discard(P.localOnlyOverlayLayerKey(t));
        continue;
      }
      v.debug("tryWriteTreeData, write:", t, o, i.id, i.saveId, n);
      let d = () => {
          (this.treeStore.localOnlyOverlays.promote(P.localOnlyOverlayLayerKey(t)),
            this.updateNode(this.treeStore.tree, t, o, i, n));
        },
        l = a?.kind === "agent" ? a.changeset.getChangeset() : void 0;
      l ? l.append(d) : (a?.kind === "user" && this.markCurrentCommitHasUserModuleEdit(), d());
    }
    this.treeNodesToUpdate.clear();
  }
  runTreeWrite(e, t) {
    if (!e || e.kind === "system") {
      this.process(() => {
        t();
      }, "nonUserEvent");
      return;
    }
    switch (e.kind) {
      case "agent":
        this.scheduleAgentChanges(e.changeset, () => {
          t();
        });
        return;
      case "user":
        this.process(() => {
          t() && this.markCurrentCommitHasUserModuleEdit();
        });
        return;
      default:
        U(e);
    }
  }
  updateTreeNodeWithOwnTreeVersion(e, t, o) {
    this.runTreeWrite(o, () => {
      if (!this.canWriteTree())
        return (v.debug("updateTreeNodeWithOwnTreeVersion - readonly, dropping change"), !1);
      (this.treeStore.tree.lineage.setEditReason("localmodules"),
        this.createLocalModulesListNodeIfNeeded(this.treeStore.tree));
      let i = this.treeStore.tree.get(e)?.save.treeVersion ?? this.treeStore.remoteTreeVersion;
      return (
        v.debug("updateTreeNodeWithOwnTreeVersion:", e, i, t.id, t.saveId),
        this.transientSaves.has(e) ||
          this.treeStore.localOnlyOverlays.promote(P.localOnlyOverlayLayerKey(e)),
        this.updateNode(this.treeStore.tree, e, i, t),
        !0
      );
    });
  }
  updateTreeNode(e, t, o, n, i) {
    return this.canWriteTree()
      ? (this.runTreeWrite(
          i,
          () => (
            this.treeStore.tree.lineage.setEditReason("localmodules"),
            this.createLocalModulesListNodeIfNeeded(this.treeStore.tree),
            v.debug("updateTreeNode:", e, t, o.id, o.saveId),
            this.treeStore.localOnlyOverlays.promote(P.localOnlyOverlayLayerKey(e)),
            this.updateNode(this.treeStore.tree, e, t, o, n),
            !0
          )
        ),
        !0)
      : (v.debug("updateTreeNode - readonly, buffering change"),
        this.treeNodesToUpdate.set(e, {
          treeVersion: t,
          persistedModule: o,
          errors: n,
          editSource: i,
        }),
        !0);
  }
  removeTreeNode(e, t) {
    this.canWriteTree()
      ? this.runTreeWrite(
          t,
          () => (v.debug("removeTreeNode:", e), this.treeStore.tree.remove(e), !0)
        )
      : this.treeNodesToDelete.push(e);
  }
  updateNode(e, t, o, n, i) {
    let a = e.get(t)?.asDraft() ?? new P({ id: t });
    M(a instanceof P);
    let r = n.metadata.pluginId,
      d = n.annotations ? ce(n.annotations) : a.save.annotations,
      l = ts(d?.default?.framerTrackingIds);
    l && (d.default.framerTrackingIds = l);
    let p = {
      treeVersion: o,
      moduleId: n.id,
      saveId: n.saveId,
      imports: n.imports?.relative,
      title: n.title,
      name: n.name,
      type: n.type,
      sourceRevision: n.sourceRevision ?? Qn(n.metadata),
      annotations: d,
      pluginId: O(r) ? r : a.save.pluginId,
    };
    (a.set({ save: p }), a.tree() || e.insertNode(a, X));
    let c = ss(n);
    if (!e.has(c) || !i) return;
    let g = e.get(Ho);
    if (
      (v.debug("Writing serialization errors from artifacts to tree for", c),
      g?.children?.forEach((u) => {
        let C = u.sourceNodeId ?? u.scopeId,
          y = lo(u.sourceNodeModuleType) || n.type === u.sourceNodeModuleType;
        !C || C !== c || !y || !qo(u.type) || e.remove(u.id);
      }),
      i.length === 0)
    )
      return;
    let A = zo.ensure(e);
    i.forEach((u) => e.insertNode(u, A.id));
  }
  getModuleTreeData(e) {
    return this.treeStore.tree.getNodeWithTrait(e, Te)?.save;
  }
  createLocalModulesListNodeIfNeeded(e) {
    if (e.has(X) || !this.canWriteTree()) return;
    (v.debug("ensureAllModulesExistInTree:", this.persistedModules.size), e.insertNode(new ue()));
    let t = this.treeStore.remoteTreeVersion;
    (this.persistedModules.forEach((o) => {
      this.updateNode(e, o.localId, t, o);
    }),
      this.dependenciesModule && this.updateNode(e, W, t, this.dependenciesModule));
  }
  getModuleWithTypeSlashName(e) {
    let t = this.findPersistedModuleLocalIdByTypeSlashName(this.persistedModules, e);
    if (t) return this.persistedModules.get(t);
  }
  async updateDependenciesModule(e) {
    M(Wt(e), "updateDependenciesModule called with non dependencies module data");
    let t = await this.getDependenciesFiles(e),
      o = t.importMapContent,
      n = t?.dependenciesMapContent;
    if (!n) {
      let a = G(t.importMapContent),
        r = At(a);
      if (((n = JSON.stringify(r)), this.readOnlyTree))
        v.reportError(new Error("modules storage is read only"), {
          context: "modules storage is read only while calling updateDependenciesModule",
        });
      else {
        let d = await this.updateDependenciesLocked({ newImportMap: a, newDependenciesMap: r });
        ((o = d.importMapContent),
          (n = d.dependenciesMapContent),
          v.info("The missing dependencies file has now been created."));
      }
    }
    let i = {
      kind: "dependencies",
      ...e,
      id: e.id,
      localId: e.localId,
      type: "config",
      name: e.name,
      importMapContent: o,
      dependenciesMapContent: n,
      generatorTraceCacheContent: void 0,
    };
    (this.prunedDependencySessionMemory.rememberPrunedDependenciesFromModuleContent(
      this.dependenciesModule?.importMapContent,
      this.dependenciesModule?.dependenciesMapContent,
      i.dependenciesMapContent
    ),
      (this.dependenciesModule = i));
  }
  withCurrentNameFromTree(e) {
    if (!this.useTreeAsLocalModuleList) return e;
    let t = this.treeStore.tree.getNodeWithTrait(e.localId, Te);
    if (!t) return e;
    let { save: o } = t;
    return o.moduleId !== e.id ||
      o.saveId !== e.saveId ||
      !o.name ||
      (o.name === e.name && o.title === e.title)
      ? e
      : { ...e, name: o.name, title: o.title ?? e.title };
  }
  moduleWithSaveFromPersisted(e, t) {
    if (e.kind === "local") {
      let {
        kind: l,
        moduleURL: p,
        update: c,
        sourceContent: g,
        moduleContent: A,
        sourceMapContent: u,
        submoduleContents: C,
        binaryAssetContents: y,
        annotations: f,
        metadata: m,
        ...I
      } = e;
      return { ...I, name: t, metadata: m };
    }
    let { kind: o, moduleURL: n, update: i, sourceContent: a, metadata: r, ...d } = e;
    return { ...d, name: t, metadata: r };
  }
  async createServerModuleFromData(e) {
    e = this.withCurrentNameFromTree(e);
    let t = {
      kind: "server",
      ...e,
      id: e.id,
      localId: e.localId,
      moduleURL: e.baseURL + (e.type === "kit" ? e.files.source : e.files.module),
      update: performance.now(),
    };
    if (
      ((t.type === "codeFile" || t.type === "shader" || t.type === "webPageMetadata") &&
        (t.sourceContent = await this.fetchSourceContentFromData(e)),
      vs(t) && Ms(t) === 0)
    ) {
      t.sourceContent = await this.fetchSourceContentFromData(e);
      let o = t.sourceContent.includes("useQueryData") ? 1 : 0;
      t.metadata = { ...t.metadata, compatibleCmsVersion: o };
    }
    return t;
  }
  async fetchSourceContentFromData(e) {
    return this.downloadQueue.run(async () => {
      let t = e.baseURL + e.files.source;
      return (await fetch(t)).text();
    });
  }
  async refresh() {
    if (this.initialized && !this.useTreeAsLocalModuleList)
      return (v.debug("refresh: acquiring lock"), b(() => this.refreshLocked()));
  }
  async refreshLocked() {
    (v.debug("refresh: start"),
      M(this.modulesService, "ModulesStorage.refresh: expected modules service to be initialized"));
    let { data: e } = await this.modulesService.list({});
    v.debug("refresh: there's", e.length, "modules to process");
    let t = new Map(),
      o = new Set();
    await Promise.all(
      e.map(async (i) => {
        let a = i.localId;
        if (Wt(i)) {
          this.dependenciesModule?.saveId !== i.saveId && (await this.updateDependenciesModule(i));
          return;
        }
        let r = this.persistedModules.get(a);
        if (r?.saveId === i.saveId) t.set(a, r);
        else {
          let d = await this.createServerModuleFromData(i);
          (v.debug("refresh - updating module", d.localId, d.id, d.saveId, d.savedAt), t.set(a, d));
        }
        o.add(a);
      })
    );
    let n = this.createDependencyGraph(t);
    (this.setNextInternalState({
      dependenciesModule: this.dependenciesModule,
      persistedModules: t,
      transientSaves: this.transientSaves,
      depsGraph: n,
      didRemoteChange: !0,
    }),
      v.debug("refresh: finish"));
  }
  whenInitialized() {
    return this.initializationPromise;
  }
  async whenIdle() {
    await Promise.all([this.whenInitialized(), b(() => {})]);
  }
  isProcessing() {
    return !!(!this.initialized || this.transientSaves.size > 0 || wt.isLocked(qe));
  }
  hasLocalChanges() {
    return this.transientSaves.size > 0;
  }
  hasLocalCodeFileChanges() {
    if (this.transientSaves.size === 0) return !1;
    for (let e of this.transientSaves.values())
      if (e.type === "codeFile" || e.type === "shader" || e.type === "config") return !0;
    return !1;
  }
  addListener(e) {
    this.listeners.add(e);
  }
  removeListener(e) {
    this.listeners.delete(e);
  }
  notifyListeners(e) {
    this.listeners.forEach((t) => {
      try {
        t(e);
      } catch (o) {
        v.reportError(o);
      }
    });
  }
  subscribe(e) {
    return (
      this.addListener(e),
      e(
        Ht(
          this.dependenciesModule,
          void 0,
          this.persistedModules,
          this.transientSaves,
          this.lastSnapshot.depsGraph,
          new Map(),
          this.initialized,
          !1,
          !1,
          this.modulesReloading
        )
      ),
      () => this.removeListener(e)
    );
  }
  getDependentsOfModule(e) {
    return this.lastSnapshot.depsGraph[e]?.dependents;
  }
  getUniqueNameForType(e, t) {
    let o = new Set();
    for (let n of this.persistedModules.values()) n.type === e && o.add(n.name);
    return Cs(o, t);
  }
  async updateSources(e) {
    return b(async () => {
      let t = !1;
      for (let { localId: o, source: n, options: i } of e) {
        let a = Date.now();
        try {
          (await this.updateSourceLocked(o, { ...i, source: n }), (t = !0));
        } catch (r) {
          (r instanceof Ve &&
            L({
              type: "add",
              variant: "error",
              primaryText: "Self-nested components",
              secondaryText: "won\u2019t update.",
              key: "component-circular-dependency",
              icon: "error",
              duration: Number.POSITIVE_INFINITY,
            }),
            v.reportError(r));
        } finally {
          let r = Date.now() - a;
          v.debug("\u23F1 update source", o, "in", r, "ms");
        }
      }
      return (
        await this.makeVisibleDependentServerModulesLocal(e),
        this.setNextInternalState({
          dependenciesModule: this.dependenciesModule,
          persistedModules: this.persistedModules,
          transientSaves: this.transientSaves,
          depsGraph: this.lastSnapshot.depsGraph,
          didRemoteChange: !1,
        }),
        this.makeLazyServerModulesLocalWhenIdle().catch(K),
        t
      );
    });
  }
  async updateDependenciesSource(e, t, o) {
    await b(async () => {
      M(this.dependenciesModule, "Dependency files must already exist to be updated.");
      let n = e === so ? t : this.dependenciesModule.importMapContent,
        i = e === no ? t : this.dependenciesModule.dependenciesMapContent;
      await this.updateDependenciesLocked({
        newImportMap: G(n),
        newDependenciesMap: k(i),
        editSource: o,
      });
    });
  }
  async compileSubmodules(e, t) {
    let o = {};
    return (
      await Promise.all(
        [...t].map(async ([n, i]) => {
          let a = await this.compile({
            name: n,
            source: i,
            type: e,
            includeSourceMap: !1,
            addFramerMetadata: !1,
          });
          for (let d of a.imports.relative) {
            let l = es(d);
            if (!(l && t.has(l)))
              throw new Error("Submodules only support relative imports of other submodules");
          }
          let r = Xo(n);
          o[r] = a.code;
        })
      ),
      o
    );
  }
  typeAndNameFromLocalId(e, t = !1) {
    if (t) return to(e);
    for (let o of this.lastSnapshot.modules.values()) if (o?.localId === e) return o;
    throw new Error(`Module entry for local id ${e} missing in internal snapshot`);
  }
  async updateSourceLocked(
    e,
    {
      source: t,
      submodules: o,
      binaryAssets: n = yn,
      stableName: i = !1,
      assets: a,
      preventCircularImports: r,
      telemetrySession: d,
      treeVersion: l,
      sourceRevision: p,
      svgIcon: c,
    }
  ) {
    await this.whenInitialized();
    let g = this.typeAndNameFromLocalId(e, i),
      A = B(g),
      u = await this.compile({
        localId: e,
        name: A,
        source: t,
        type: g.type,
        includeSourceMap: zt(g.type),
        telemetrySession: d,
      }),
      C = fn;
    o && (C = await this.compileSubmodules(g.type, o));
    let y = te(this.lastSnapshot.depsGraph, A, u.imports.relative);
    if (r && ys(y, A)) throw new Ve();
    let f = La(g.type, u.annotations),
      m = D(this.transientSaves, (E) => {
        let S = E.get(e),
          w,
          N = f?.framerIntrinsicWidth;
        N && (w = { ...w, intrinsicWidth: Number.parseInt(N, 10) });
        let z = f?.framerIntrinsicHeight;
        if (
          (z && (w = { ...w, intrinsicHeight: Number.parseInt(z, 10) }),
          (w = {
            ...w,
            compilerContractVersion: 1,
            treeAnnotations: !0,
            localModuleImportMapEntries: this.moduleUsesLocalImportMapSpecifiers(A),
          }),
          S)
        )
          ((S.saveId = F()),
            (S.moduleContent = u.code),
            (S.sourceContent = t),
            (S.sourceMapContent = u.sourceMap),
            (S.submoduleContents = C),
            (S.binaryAssetContents = n),
            (S.imports = u.imports),
            (S.exports = u.exportedNames),
            (S.reExportedModules = u.reExportedModules),
            (S.treeVersion = l ?? this.treeStore.remoteTreeVersion),
            (S.sourceRevision = p ?? S.sourceRevision),
            (S.annotations = u.annotations),
            (S.svgIcon = c ?? S.svgIcon),
            (S.update = performance.now()),
            a && (S.assets = Array.from(a)),
            w && (S.metadata = { ...S.metadata, ...w }));
        else {
          let J = {
            localId: e,
            type: g.type,
            name: g.name,
            saveId: F(),
            moduleContent: u.code,
            sourceContent: t,
            sourceMapContent: u.sourceMap,
            submoduleContents: C,
            binaryAssetContents: n,
            imports: u.imports,
            exports: u.exportedNames,
            reExportedModules: u.reExportedModules,
            treeVersion: l,
            sourceRevision: p,
            svgIcon: c,
            annotations: u.annotations,
            update: performance.now(),
          };
          (a && (J.assets = Array.from(a)), w && (J.metadata = w), E.set(e, J));
        }
      });
    if (
      ((this.transientInfo ||= new Set()),
      this.transientInfo.add(e),
      (this.transientSaves = m),
      (this.lastSnapshot = { ...this.lastSnapshot, depsGraph: y }),
      this.readOnlyTree || !this.usesCrdt() || !this.getModuleTreeData(e))
    )
      return;
    let I = this.transientSaves.get(e);
    if (!I) return;
    let x = ce(u.annotations);
    lt(this.getModuleTreeData(e)?.annotations, x) ||
      this.process(() => {
        this.readOnlyTree ||
          (this.transientSaves.get(e)?.saveId === I.saveId &&
            this.treeStore.localOnlyOverlays.write(P.localOnlyOverlayLayerKey(e), (E) => {
              E.updateNestedObject([e, "save"], { annotations: x });
            }));
      }, "nonUserEvent");
  }
  async create(e, t) {
    return b(() => this.createLocked(e, t));
  }
  async createLocked(e, t) {
    await this.whenInitialized();
    let { type: o, name: n, source: i, sourceRevision: a, ...r } = e,
      d = B({ type: o, name: n }),
      l = await this.compile({ name: d, source: i, type: o, includeSourceMap: zt(o) }),
      p = {
        localId: void 0,
        type: o,
        name: n,
        saveId: F(),
        moduleContent: l.code,
        sourceContent: i,
        sourceMapContent: l.sourceMap,
        submoduleContents: fn,
        binaryAssetContents: yn,
        imports: l.imports,
        exports: l.exportedNames,
        reExportedModules: l.reExportedModules,
        treeVersion: e.treeVersion || this.treeStore.remoteTreeVersion,
        sourceRevision: a,
        svgIcon: e.svgIcon,
        annotations: l.annotations,
        update: performance.now(),
      },
      c = await this.createBatchSaveForUpdatedModule(
        "$new",
        p,
        this.persistedModules,
        new Map(),
        new Map(),
        { type: o, name: n, ...r }
      );
    (M(!this.readOnlyTree, "modules storage is read only"), M(this.modulesService));
    let { data: g } = await this.modulesService.saveBatch({
        batch: [c],
        copyOnWrite: this.detached,
      }),
      { updatedModuleLocalId: A, nextPersistedModules: u } = this.processTransientSaveData(
        { nextPersistedModules: this.persistedModules, transientSave: p, data: g },
        void 0,
        t
      ),
      C = te(this.lastSnapshot.depsGraph, d, l.imports.relative);
    return (
      this.setNextInternalState({
        dependenciesModule: this.dependenciesModule,
        persistedModules: u,
        transientSaves: this.transientSaves,
        depsGraph: C,
        didRemoteChange: !0,
      }),
      A
    );
  }
  async update(e, t, o) {
    let n = this.persistedModules.get(e);
    return (
      M(n, () => `Trying to update an unknown module with localId: ${e}`),
      b(async () => {
        let i = Date.now();
        try {
          return (
            await this.whenInitialized(),
            await this.upsertBatchLocked({ [e]: { ...t, name: n.name, type: n.type } }, o)
          );
        } finally {
          let a = Date.now() - i;
          v.debug("\u23F1 update", e, "in", a, "ms");
        }
      })
    );
  }
  async rename(e, t) {
    return b(() => this.renameLocked(e, t));
  }
  async renameLocked(e, t) {
    await this.whenInitialized();
    let o = this.persistedModules,
      n = this.lastSnapshot.depsGraph,
      i = o.get(e);
    M(i, () => `Trying to rename an unknown module with localId: ${e}`);
    let a = this.treeStore.remoteTreeVersion,
      r = B(i);
    (M(!this.readOnlyTree, "modules storage is read only"),
      M(
        !this.detached || this.useTreeAsLocalModuleList,
        "detached rename requires modules-in-tree"
      ),
      M(this.modulesService));
    let d = this.detached
      ? this.moduleWithSaveFromPersisted(i, t)
      : await this.modulesService.update({ moduleId: i.id, name: t });
    M(d, "invalid update reply");
    let l = n[r]?.dependents,
      p = [],
      c = {},
      g = B(d);
    if ((r !== g && ((n = Ne(n, r)), (n = te(n, g, i.imports.relative))), l)) {
      let A = [],
        u = [];
      for (let f of o.values()) {
        let m = B(f);
        l.has(m) && (f.kind === "local" ? A.push(f) : u.push(f));
      }
      if (u.length > 0) {
        let f = await Promise.all(u.map((m) => this.createLocalModuleFromModule(m)));
        o = D(o, (m) => {
          for (let I of f) (m.set(I.localId, I), A.push(I));
        });
      }
      let C = [];
      for (let f of A) {
        let m = B(f),
          I = Ct(m, `${i.type}/${t}`);
        M(I, () => `Failed to create relative path to ${i.type}/${t}`);
        let x = Ct(m, r);
        M(x);
        let E = f.imports.relative.indexOf(x);
        if (E === -1) {
          v.warn(f.localId, "doesn't import", x);
          continue;
        }
        let S = [...f.imports.relative];
        S[E] = I;
        let w = { absolute: f.imports.absolute, bare: f.imports.bare, relative: S },
          N = Sn(f.sourceContent, x, I),
          z = Sn(f.moduleContent, x, I);
        ((c[f.localId] = { sourceContent: N, moduleContent: z, imports: w }), M(f.files.source));
        let J = {
          type: f.type,
          moduleId: f.id,
          name: f.name,
          saveId: F(),
          patchSaveId: f.saveId,
          files: [{ name: f.files.source, type: "source", content: N }],
          imports: w,
          detached: this.detached,
        };
        C.push(J);
      }
      M(!this.readOnlyTree, "modules storage is read only");
      let { data: y } = await this.modulesService.saveBatch({
        batch: C,
        copyOnWrite: this.detached,
      });
      p = y;
    }
    ((o = D(o, (A) => {
      if (this.updateTreeNode(e, a, d)) {
        i.kind === "server"
          ? A.set(e, {
              ...d,
              kind: "server",
              localId: d.localId,
              id: d.id,
              moduleURL: d.baseURL + d.files.module,
              sourceContent: i.sourceContent,
              update: performance.now(),
            })
          : A.set(e, {
              ...d,
              kind: "local",
              localId: d.localId,
              id: d.id,
              moduleURL: d.baseURL + d.files.module,
              sourceContent: i.sourceContent,
              moduleContent: i.moduleContent,
              sourceMapContent: i.sourceMapContent,
              submoduleContents: i.submoduleContents,
              binaryAssetContents: i.binaryAssetContents,
              update: performance.now(),
            });
        for (let C of p) {
          let y = C.localId,
            f = A.get(y);
          M(f?.kind === "local", () => `dependent module must be local: ${y}`);
          let m = c[y];
          (M(m, () => `dependent module update must exist: ${y}`),
            this.updateTreeNode(y, a, C) &&
              (A.set(y, {
                ...C,
                kind: "local",
                localId: y,
                id: C.id,
                moduleURL: C.baseURL + C.files.module,
                moduleContent: m.moduleContent,
                sourceContent: m.sourceContent,
                sourceMapContent: f.sourceMapContent,
                submoduleContents: f.submoduleContents,
                binaryAssetContents: f.binaryAssetContents,
                imports: m.imports,
                exports: C.exports,
                reExportedModules: C.reExportedModules,
                submodules: C.submodules,
                binaryAssets: C.binaryAssets,
                sourceRevision: f.sourceRevision,
                update: f.update,
              }),
              (n = te(n, B(C), m.imports.relative))));
        }
      }
    })),
      this.setNextInternalState({
        dependenciesModule: this.dependenciesModule,
        persistedModules: o,
        transientSaves: this.transientSaves,
        depsGraph: n,
        didRemoteChange: !0,
      }));
  }
  async upsert(e, t, o) {
    return b(async () => {
      let n = Date.now();
      try {
        return (await this.whenInitialized(), await this.upsertBatchLocked({ [e]: t }, o));
      } finally {
        let i = Date.now() - n;
        v.debug("\u23F1 upsert", e, "in", i, "ms");
      }
    });
  }
  async upsertBatch(e) {
    return b(async () => {
      let t = Date.now();
      try {
        return (await this.whenInitialized(), await this.upsertBatchLocked(e));
      } finally {
        let o = Date.now() - t;
        v.debug("\u23F1 upsert batch in", o, "ms");
      }
    });
  }
  async delete(e, t) {
    return b(() => this.deleteLocked(e, t));
  }
  async deleteLocked(e, t) {
    let o = Array.isArray(e) ? e : [e];
    if (!o.length) return;
    await this.whenInitialized();
    let n = o.map((p) => {
        let c = this.persistedModules.get(p);
        return (M(c, () => `Trying to delete an unknown module ${p}. It was never persisted.`), c);
      }),
      { modulesService: i } = this;
    M(i);
    let a = [];
    (await Promise.all(
      n.map(async (p) => {
        try {
          (await i.delete({ moduleId: p.id }), a.push(p));
        } catch (c) {
          if ((v.warn(String(c)), Ea(c))) {
            a.push(p);
            return;
          }
        }
      })
    ),
      M(a.length > 0, "Failed to delete module(s)"));
    let r = this.lastSnapshot.depsGraph;
    for (let p of a) {
      let c = B(p);
      r = Ne(r, c);
    }
    let d = D(this.persistedModules, (p) => {
        for (let { localId: c } of a) (p.delete(c), this.removeTreeNode(c, t));
      }),
      l = D(this.transientSaves, (p) => {
        for (let { localId: c } of a) p.delete(c);
      });
    this.setNextInternalState({
      dependenciesModule: this.dependenciesModule,
      persistedModules: d,
      transientSaves: l,
      depsGraph: r,
      didRemoteChange: !0,
    });
  }
  async restore(e, t) {
    return b(() => this.restoreLocked(e, t));
  }
  async restoreLocked(e, t) {
    await this.whenInitialized();
    let { modulesService: o } = this;
    M(o);
    let n = await o.restore({ moduleId: e, name: t }),
      i = await this.createServerModuleFromData(n),
      a = B(i),
      r = i.localId,
      d = D(this.persistedModules, (p) => {
        p.set(r, i);
      }),
      l = te(this.lastSnapshot.depsGraph, a, i.imports.relative);
    return (
      this.setNextInternalState({
        dependenciesModule: this.dependenciesModule,
        persistedModules: d,
        transientSaves: this.transientSaves,
        depsGraph: l,
        didRemoteChange: !0,
      }),
      this.updateTreeNodeWithOwnTreeVersion(r, i),
      i
    );
  }
  async publish(e, t) {
    return b(() => this.publishLocked(e, t));
  }
  async publishLocked(e, { namespace: t, name: o, version: n }) {
    await this.whenInitialized();
    let i = this.persistedModules.get(e);
    (M(i, () => `Trying to publish an unknown module ${e}. It was never persisted.`),
      M(!this.readOnlyTree, "modules storage is read only"),
      M(this.modulesService));
    let a = await this.modulesService.publish({
        moduleId: i.id,
        saveId: i.saveId,
        namespace: t,
        name: o,
        version: n,
      }),
      r = D(this.persistedModules, (d) => {
        let l = d.get(e);
        l &&
          d.set(e, {
            ...l,
            lastPublish: {
              namespaceId: a.namespaceId,
              name: a.name,
              version: a.version,
              importURL: a.importURL,
            },
          });
      });
    return (
      this.setNextInternalState({
        dependenciesModule: this.dependenciesModule,
        persistedModules: r,
        transientSaves: this.transientSaves,
        depsGraph: this.lastSnapshot.depsGraph,
        didRemoteChange: !0,
      }),
      a
    );
  }
  async addNpmDependencies(e) {
    return b(async () => {
      await this.whenInitialized();
      let t;
      this.dependenciesModule?.importMapContent
        ? (t = G(this.dependenciesModule.importMapContent))
        : (t = { imports: {} });
      let o;
      this.dependenciesModule?.dependenciesMapContent
        ? (o = k(this.dependenciesModule.dependenciesMapContent))
        : (o = { dependencies: {} });
      let n = new Set(Object.keys(t.imports).filter((g) => g.endsWith("/"))),
        i = (g) => {
          let A = g.indexOf("/");
          for (; A !== -1; ) {
            let u = g.slice(0, A + 1);
            if (n.has(u)) return !0;
            A = g.indexOf("/", A + 1);
          }
          return !1;
        },
        a = Array.isArray(e) ? e : [e];
      if (
        ((a = a.filter((g) => {
          if (H.has(g.target) || Oo(g.target)) return !1;
          let A = Po(g);
          return !(t.imports?.[A] || i(A));
        })),
        a.length === 0)
      )
        return { dependenciesMap: o };
      a = a.map((g) => {
        let A = ba(g),
          u = o.dependencies[A];
        if (u) {
          let f = this.prunedDependencySessionMemory.getImportUrlForDependency(t, A);
          if (ie.isOn("importMapPruning") && !f) return { ...g, target: `${A}@${u}` };
          M(f, "Import map must contain all dependencies from dependencies map");
          let m = le(f)?.version;
          return m ? { ...g, target: `${A}@${m}` } : g;
        }
        let C = this.prunedDependencySessionMemory.withPrunedVersion(g);
        if (C !== g) return C;
        let y = pe[A];
        return y ? { ...g, target: `${A}@${y}` } : g;
      });
      let r = await this.getGeneratorTraceCacheForNpmOperation(),
        { importMap: d, resolvedDependencies: l, cache: p } = await Ko(t, a, H, pe, r),
        c = await this.extendCurrentDependenciesMap(l);
      return (
        l.forEach(({ name: g, version: A }) => Vo("npm_dependency_add", { name: g, semver: A })),
        v.debug({ newImportMap: d, newDependenciesMap: c }),
        await this.updateDependenciesLocked({
          newImportMap: d,
          newDependenciesMap: c,
          generatorTraceCache: p,
        }),
        { dependenciesMap: c }
      );
    });
  }
  async uninstallBlockedNpmDependencies() {
    return b(async () => {
      let { currentImportMap: e, currentDependenciesMap: t } = this.getCurrentDependencies(),
        o = gt(t),
        n = await this.getGeneratorTraceCacheForNpmOperation(),
        { importMap: i, cache: a } = await Go(e, n);
      return (
        await this.updateDependenciesLocked({
          newImportMap: i,
          newDependenciesMap: o,
          generatorTraceCache: a,
        }),
        i
      );
    });
  }
  async clearNpmDependencies() {
    return b(async () => {
      await this.updateDependenciesLocked({
        newImportMap: { imports: {} },
        newDependenciesMap: { dependencies: {} },
      });
    });
  }
  async removeBlockedNpmDependencies() {
    return b(async () => {
      let { currentImportMap: e, currentDependenciesMap: t } = this.getCurrentDependencies(),
        o = gt(t);
      return (await this.updateDependenciesLocked({ newImportMap: e, newDependenciesMap: o }), o);
    });
  }
  getLocalModuleBareImports() {
    let e = new Set();
    for (let t of this.persistedModules.values()) for (let o of t.imports.bare) e.add(o);
    return e;
  }
  getComposedProjectImportMap() {
    let e = Jo();
    if (this.dependenciesModule?.importMapContent) {
      let o = G(this.dependenciesModule.importMapContent);
      e = de(e, o, "source-wins");
    }
    let t = this.createLocalModuleImportMap();
    return ((e = de(e, t, "source-wins")), e);
  }
  createLocalModuleImportMap() {
    let e = {};
    for (let t of this.persistedModules.values()) {
      let o = t;
      if (O(o.files.module)) {
        let n = Ee(o.localId, o.files.module);
        e[n] = o.moduleURL;
      }
    }
    return { imports: e };
  }
  async scopeExternalImportMap(e, t) {
    let o = await this.getGeneratorTraceCacheForNpmOperation(),
      { importMap: n } = await yt(e, H, pe, t, o);
    return n;
  }
  async generatePrunedImportMapFromEntryPoints(e, t, o) {
    let n = await this.getGeneratorTraceCacheForNpmOperation(),
      { importMap: i, cache: a } = await yt(e, H, pe, t, n, o),
      { modulesCDN: r } = V(),
      d = Uo(i, { providedDependencyNames: H, localScopeUrls: ht(t, r) });
    return (_o(d), { importMap: d, cache: a });
  }
  async pruneProjectImportMapFromEntryPoints(e, t = {}) {
    return b(async () => {
      let o = this.getComposedProjectImportMap(),
        n;
      if (t.additionalImportMap) {
        let { modulesCDN: u } = V(),
          C = ht(o, u),
          { importMap: y, linkedScopes: f } = Ro(o, C, H),
          m = de(y, t.additionalImportMap, "source-wins");
        n = Fo(m, f);
      } else n = o;
      let i = this.dependenciesModule?.dependenciesMapContent,
        a = i ? k(i) : { dependencies: {} },
        r = this.prunedDependencySessionMemory.getResolvedDependencyVersionOptions(a),
        { importMap: d, cache: l } = await this.generatePrunedImportMapFromEntryPoints(e, n, r),
        p = a.dependencies ?? {},
        c = {};
      for (let u of Object.keys(p)) {
        if (!this.prunedDependencySessionMemory.getImportUrlForDependency(d, u)) continue;
        let C = p[u];
        C !== void 0 && (c[u] = C);
      }
      this.prunedDependencySessionMemory.addRememberedDependencies(c, d);
      let g = a.prePruneSaveId ?? this.dependenciesModule?.saveId,
        A = { dependencies: c, ...(g ? { prePruneSaveId: g } : {}) };
      return (
        t.dryRun
          ? (v.info("Dry run import map", d), v.info("Dry run dependencies map", A))
          : (this.prunedDependencySessionMemory.rememberPrunedDependencies(a, A, n),
            await this.updateDependenciesLocked({
              newImportMap: d,
              newDependenciesMap: A,
              generatorTraceCache: l,
            })),
        d
      );
    });
  }
  async unsafeUpgradeDependency(e, t, o) {
    return b(async () => {
      let { currentImportMap: n, currentDependenciesMap: i } = this.getCurrentDependencies(),
        a = await jo(n, e, t, o),
        r = At(a),
        d = ft(r, i);
      return (await this.updateDependenciesLocked({ newImportMap: a, newDependenciesMap: d }), a);
    });
  }
  async extendCurrentImportMap(e, t) {
    return b(async () => {
      let { currentImportMap: o, currentDependenciesMap: n } = this.getCurrentDependencies(),
        i = de(o, e),
        a = ft(n, t);
      await this.updateDependenciesLocked({ newImportMap: i, newDependenciesMap: a });
    });
  }
  async extendCurrentDependenciesMap(e) {
    let t = {};
    for (let n of e) t[n.name] = n.version;
    let o = this.dependenciesModule?.dependenciesMapContent
      ? k(this.dependenciesModule.dependenciesMapContent)
      : { dependencies: {} };
    return ((o.dependencies = Object.assign(t, o.dependencies)), o);
  }
  getCurrentDependencies() {
    let e = this.dependenciesModule?.importMapContent
        ? G(this.dependenciesModule.importMapContent)
        : { imports: {} },
      t = this.dependenciesModule?.dependenciesMapContent
        ? k(this.dependenciesModule.dependenciesMapContent)
        : { dependencies: {} };
    return { currentImportMap: e, currentDependenciesMap: t };
  }
  async updateDependenciesLocked({
    newImportMap: e,
    newDependenciesMap: t,
    generatorTraceCache: o,
    editSource: n,
  }) {
    ((e.imports ??= {}), (t.dependencies ??= {}));
    let i = JSON.stringify(e, null, 4),
      a = JSON.stringify(t, null, 4),
      r = { importMapContent: i, dependenciesMapContent: a },
      d;
    o && (d = An(o));
    let l =
      this.dependenciesModule?.generatorTraceCacheContent !== void 0 ||
      this.dependenciesModule?.files.importMapCache !== void 0;
    if (
      i === this.dependenciesModule?.importMapContent &&
      a === this.dependenciesModule?.dependenciesMapContent &&
      !(d !== void 0 && !l)
    )
      return r;
    let g = [
      { name: "importMap.json", type: "importMap", content: i },
      { name: "dependencies.json", type: "dependencies", content: a },
    ];
    d && g.push({ name: $e.traceCacheFilename, type: "importMapCache", content: d });
    let A = d === void 0 && l,
      u = this.dependenciesModule?.id ?? "$upsertName";
    A && M(u !== "$upsertName", "patchSaveId for dependencies requires a persisted module id");
    let C = {
      moduleId: u,
      name: it,
      saveId: F(),
      type: "config",
      files: g,
      imports: { absolute: [], relative: [], bare: [] },
      detached: this.detached,
      ...(A && { patchSaveId: this.dependenciesModule?.saveId }),
    };
    (M(!this.readOnlyTree, "modules storage is read only"), M(this.modulesService));
    let {
      data: [y],
    } = await this.modulesService.saveBatch({ batch: [C], copyOnWrite: this.detached });
    (M(y, "Modules API must return an updated import map after savebatch"),
      this.updateTreeNodeWithOwnTreeVersion(W, y, n));
    let f = {
      kind: "dependencies",
      importMapContent: i,
      dependenciesMapContent: a,
      generatorTraceCacheContent: d ?? this.dependenciesModule?.generatorTraceCacheContent,
      ...y,
      id: y.id,
      localId: y.localId,
      type: y.type,
      name: y.name,
    };
    return (
      this.setNextInternalState({
        dependenciesModule: f,
        persistedModules: this.persistedModules,
        transientSaves: this.transientSaves,
        depsGraph: this.lastSnapshot.depsGraph,
        didRemoteChange: !0,
      }),
      r
    );
  }
  getPersistedDependenciesModule() {
    return this.dependenciesModule;
  }
  getPersistedModuleByGlobalId(e) {
    for (let t of this.persistedModules.values()) if (t.id === e) return t;
  }
  getPersistedModuleByLocalId(e) {
    return this.persistedModules.get(e);
  }
  getTransientSaveByLocalId(e) {
    return this.transientSaves.get(e);
  }
  async handleRemoteModuleDeleteEvents(e) {
    if (!this.useTreeAsLocalModuleList) return this.handleRemoteModuleDeletes(e.map((t) => t.id));
  }
  async handleRemoteModuleDeletes(e) {
    await b(async () => {
      let t = [],
        o = [];
      for (let r of e) {
        let d = this.getPersistedModuleByGlobalId(r);
        d && (o.push(B(d)), t.push(d.localId));
      }
      let n = D(this.persistedModules, (r) => {
          for (let d of t) r.delete(d);
        }),
        i = D(this.transientSaves, (r) => {
          for (let d of t) r.delete(d);
        }),
        a = fs(this.lastSnapshot.depsGraph, o);
      this.setNextInternalState({
        dependenciesModule: this.dependenciesModule,
        persistedModules: n,
        transientSaves: i,
        depsGraph: a,
        didRemoteChange: !0,
      });
    });
  }
  async handleRemoteModuleSaveEvents(e) {
    if (!this.useTreeAsLocalModuleList) return this.handleRemoteModuleSaves(e.map((t) => t.module));
  }
  async handleRemoteModuleSaves(e) {
    let t = [],
      o = [];
    for (let a of e) B(a) === W ? t.push(a) : o.push(a);
    let n,
      i = t.length > 0 ? t[t.length - 1] : void 0;
    if (i) {
      let { importMapContent: a, dependenciesMapContent: r } = await this.getDependenciesFiles(i);
      (M(r, "No dependencies file exists for the remote update!"),
        (n = {
          kind: "dependencies",
          ...i,
          id: i.id,
          localId: i.localId,
          type: "config",
          name: i.name,
          importMapContent: a,
          dependenciesMapContent: r,
          generatorTraceCacheContent: void 0,
        }));
    }
    await b(async () => {
      n &&
        (this.prunedDependencySessionMemory.rememberPrunedDependenciesFromModuleContent(
          this.dependenciesModule?.importMapContent,
          this.dependenciesModule?.dependenciesMapContent,
          n.dependenciesMapContent
        ),
        (this.dependenciesModule = n));
      let a = this.persistedModules,
        r = this.lastSnapshot.depsGraph,
        d = await Promise.all(o.map((p) => this.createServerModuleFromData(p)));
      d.length > 0 &&
        (a = D(this.persistedModules, (p) => {
          for (let c of d) p.set(c.localId, c);
        }));
      let l = [];
      for (let p of d) {
        if (this.transientSaves.has(p.localId)) continue;
        let c = this.persistedModules.get(p.localId);
        (c && B(c) !== B(p) && (r = Ne(r, B(c))),
          l.push({ moduleTypeSlashName: B(p), dependencies: p.imports.relative }));
      }
      (l.length > 0 && (r = gs(r, l)),
        this.setNextInternalState({
          dependenciesModule: this.dependenciesModule,
          persistedModules: a,
          transientSaves: this.transientSaves,
          depsGraph: r,
          didRemoteChange: !0,
          multiplayerChange: !0,
        }));
    });
  }
  getPatchTransientSave(e, t, o) {
    return {
      saveId: o,
      type: t.type,
      name: t.name,
      localId: e,
      moduleContent: t.moduleContent,
      sourceContent: t.sourceContent,
      sourceMapContent: t.sourceMapContent,
      submoduleContents: t.submoduleContents,
      binaryAssetContents: t.binaryAssetContents,
      imports: t.imports,
      exports: t.exports,
      reExportedModules: t.reExportedModules,
      sourceRevision: t.sourceRevision,
      update: t.update,
    };
  }
  async upsertBatchLocked(e, t) {
    if (this.readOnlyTree) return;
    let o = this.persistedModules,
      n = new Map(),
      i = [],
      a = new Map();
    for (let A of o.values()) {
      let u = B(A);
      (a.set(u, A.localId), i.push([u, A.imports.relative]));
    }
    let r = new Map();
    for (let A in e) {
      let u = A,
        C = e[u];
      M(C, () => `No persist params found for ${u}`);
      let y = this.transientSaves.get(u),
        f = y ?? o.get(u);
      M(f, () => `No module found for ${u}`);
      let m = B(f);
      (r.set(m, y?.saveId ?? F()),
        n.set(m, ee(C.name)),
        a.set(m, u),
        y && i.push([m, y.imports.relative]));
    }
    let d = Qt(i),
      l = new Map(),
      p = D(this.transientSaves, (A) => {
        for (let u in e) A.delete(u);
      }),
      c,
      g = !1;
    try {
      let {
        primaryBatch: A,
        dependentBatch: u,
        repairLocalIdWaves: C,
        nextPersistedModules: y,
      } = await this.createBatch(e, l, o, d, a, r, n);
      (M(!this.readOnlyTree, "modules storage is read only"), M(this.modulesService));
      let f = A.concat(u),
        { data: m } = await this.modulesService.saveBatch({ batch: f, copyOnWrite: this.detached });
      if (((g = !0), C.length > 0 && this.didSaveBatchRemapModuleIds(f, m))) {
        let I = this.applyBatchSaveDataWithoutTreeUpdates(y, m, l),
          x = this.createRepairSaveIdsForWaves(r, C, I),
          E = [];
        for (let S of C) {
          let w = await this.createBatchSavesForDependentModules(S, I, x, n),
            { data: N } = await this.modulesService.saveBatch({
              batch: w,
              copyOnWrite: this.detached,
            });
          (E.push(...N), (I = this.applyDependentSaveDataWithoutTreeUpdates(I, N)));
        }
        o = this.applyBatchSaveDataToPersistedModules({
          nextPersistedModules: y,
          data: this.combineLatestSaveData(m, E),
          transientSaves: l,
          sources: e,
          editSource: t,
        });
      } else
        o = this.applyBatchSaveDataToPersistedModules({
          nextPersistedModules: y,
          data: m,
          transientSaves: l,
          sources: e,
          editSource: t,
        });
    } catch (A) {
      o = this.persistedModules;
      let u = this.getTransientSavesBatchId(l),
        C = this.transientSaveRetries.get(u) ?? 0,
        y = t?.kind === "agent" ? t.changeset.getChangeset() : void 0,
        f = y ? { kind: "agent", changeset: new je(y) } : t?.kind === "agent" ? void 0 : t,
        { error: m, dropTransient: I } = this.handlePersistenceError(A, C, () => {
          (this.transientSaveRetries.set(u, C + 1),
            setTimeout(
              () => {
                this.retryPersistingBatch({
                  sources: e,
                  transientSaves: l,
                  batchId: u,
                  retryCount: C,
                  error: m,
                  regenerateSaveIds: g,
                  editSource: f,
                }).catch((x) => {
                  v.reportError(x, { context: "ModulesStorage: retryPersistingBatch failed." });
                });
              },
              1e3 + C * 1e3
            ));
        });
      if (!I) return;
      c = m;
    }
    if (
      (this.setNextInternalState({
        dependenciesModule: this.dependenciesModule,
        persistedModules: o,
        transientSaves: p,
        depsGraph: this.lastSnapshot.depsGraph,
        didRemoteChange: !0,
      }),
      this.transientSaveRetries.delete(this.getTransientSavesBatchId(l)),
      c)
    )
      throw c;
  }
  getTransientSavesBatchId(e) {
    return Array.from(e.values())
      .map((t) => t.saveId)
      .join("-");
  }
  async retryPersistingBatch({
    sources: e,
    transientSaves: t,
    batchId: o,
    retryCount: n,
    error: i,
    regenerateSaveIds: a,
    editSource: r,
  }) {
    (Je(i) && (this.transientSaveRelativeImportRetries.add(o), await this.refresh()),
      await b(async () => {
        if (a) {
          let d = this.regenerateTransientSaveIdsForRetry(t);
          if (!d) return;
          (this.transientSaveRetries.delete(o),
            this.transientSaveRetries.set(d, n + 1),
            v.debug("retrying saving batchId with fresh save ids:", o),
            await this.upsertBatchLocked(e, r));
          return;
        }
        this.areTransientSavesUnchanged(t) &&
          (v.debug("retrying saving batchId with same save ids:", o),
          await this.upsertBatchLocked(e, r));
      }));
  }
  areTransientSavesUnchanged(e) {
    for (let [t, o] of e) {
      let n = this.transientSaves.get(t);
      if (!n || n.saveId !== o.saveId) return !1;
    }
    return !0;
  }
  regenerateTransientSaveIdsForRetry(e) {
    let t = !0,
      o = D(this.transientSaves, (i) => {
        for (let [a, r] of e) {
          let d = i.get(a);
          if (!d || d.saveId !== r.saveId) {
            t = !1;
            return;
          }
        }
        for (let a of e.keys()) {
          let r = i.get(a);
          (M(r, () => `Expected transient save while regenerating save IDs: ${a}`),
            (r.saveId = F()),
            (r.update = performance.now()));
        }
      });
    if (!t) return;
    this.setNextInternalState({
      dependenciesModule: this.dependenciesModule,
      persistedModules: this.persistedModules,
      transientSaves: o,
      depsGraph: this.lastSnapshot.depsGraph,
      didRemoteChange: !1,
    });
    let n = new Map();
    for (let i of e.keys()) {
      let a = o.get(i);
      (M(a, () => `Expected regenerated transient save ID: ${i}`), n.set(i, a));
    }
    return this.getTransientSavesBatchId(n);
  }
  async createBatchSavesForDependentModules(e, t, o, n) {
    let i = [];
    for (let a of e) i.push(await this.createBatchSaveForDependentModule(a, t, o, n));
    return i;
  }
  didSaveBatchRemapModuleIds(e, t) {
    let o = new Map(t.map((n) => [n.saveId, n]));
    return e.some((n) => {
      if (n.moduleId === "$new" || n.moduleId === "$upsertName") return !1;
      let i = o.get(n.saveId);
      return i !== void 0 && i.id !== n.moduleId;
    });
  }
  createRepairSaveIdsForWaves(e, t, o) {
    let n = new Map(e);
    for (let i of t)
      for (let a of i) {
        let r = o.get(a);
        (M(r, () => `${a} is not found in persistedModules`), n.set(B(r), F()));
      }
    return n;
  }
  combineLatestSaveData(e, t) {
    let o = new Map();
    for (let n of e) o.set(n.localId, n);
    for (let n of t) o.set(n.localId, n);
    return Array.from(o.values());
  }
  applyBatchSaveDataWithoutTreeUpdates(e, t, o) {
    return D(e, (n) => {
      for (let i of t) {
        let a = i.localId,
          r = o.get(a);
        if (r) n.set(a, this.createPersistedLocalModuleFromSaveData(i, r));
        else {
          let d = n.get(a);
          (M(d, () => `${a} is not in persistedModules`), this.applyDependentModuleSaveData(d, i));
        }
      }
    });
  }
  applyDependentSaveDataWithoutTreeUpdates(e, t) {
    return D(e, (o) => {
      for (let n of t) {
        let i = n.localId,
          a = o.get(i);
        (M(a, () => `${i} is not in persistedModules`), this.applyDependentModuleSaveData(a, n));
      }
    });
  }
  applyBatchSaveDataToPersistedModules({
    nextPersistedModules: e,
    data: t,
    transientSaves: o,
    sources: n,
    editSource: i,
  }) {
    return D(e, (a) => {
      for (let r of t) {
        let d = r.localId,
          l = o.get(d);
        if (!l) {
          let u = a.get(d);
          (M(u, () => `${d} is not in persistedModules`),
            this.updateTreeNodeWithOwnTreeVersion(d, r, i),
            this.applyDependentModuleSaveData(u, r));
          continue;
        }
        let p = this.createPersistedLocalModuleFromSaveData(r, l),
          c = n[d]?.errors,
          g = l.treeVersion ?? this.treeStore.remoteTreeVersion;
        if (!this.updateTreeNode(r.localId, g, p, c, i)) return;
        a.set(d, p);
      }
    });
  }
  createPersistedLocalModuleFromSaveData(e, t) {
    return {
      kind: "local",
      ...e,
      id: e.id,
      localId: e.localId,
      imports: t.imports,
      moduleURL: e.baseURL + e.files.module,
      sourceContent: t.sourceContent,
      sourceMapContent: t.sourceMapContent,
      moduleContent: t.moduleContent,
      submoduleContents: t.submoduleContents,
      binaryAssetContents: t.binaryAssetContents,
      sourceRevision: t.sourceRevision,
      annotations: t.annotations,
      update: t.update,
    };
  }
  applyDependentModuleSaveData(e, t) {
    ((e.id = t.id),
      (e.saveId = t.saveId),
      (e.moduleURL = t.baseURL + t.files.module),
      (e.baseURL = t.baseURL));
  }
  async createBatch(e, t, o, n, i, a, r) {
    let d = [],
      l = [],
      p = new Set();
    for (let C in e) {
      let y = C,
        f = e[y];
      M(f, () => `No persist params found for ${y}`);
      let m = this.transientSaves.get(y);
      if (!m) {
        let E = o.get(y);
        (M(
          E,
          `Trying to persist ${y} but it doesn't have neither a corresponding transient save nor an existing persisted module.`
        ),
          E.kind === "server" &&
            ((E = await this.createLocalModuleFromModule(E)),
            (o = D(o, (w) => {
              E && w.set(E.localId, E);
            }))));
        let S = a.get(y);
        (M(S, () => `No save id found for ${y}`), (m = this.getPatchTransientSave(y, E, S)));
      }
      t.set(y, m);
      let I = B(m);
      m.imports.relative.length > 0 && !this.moduleUsesLocalImportMapSpecifiers(I) && p.add(I);
      let x = await this.createBatchSaveForUpdatedModule(
        this.persistedModules.get(y)?.id ?? "$upsertName",
        m,
        o,
        a,
        r,
        f
      );
      d.push(x);
    }
    let c = new Map();
    for (let C in e) {
      let y = C,
        f = e[y];
      M(f, () => `No persist params found for ${y}`);
      let m = B(f),
        I = new Set();
      (Le(n, m, I), c.set(y, I));
    }
    let g = [];
    for (let C of c.values())
      for (let y of C) {
        let f = i.get(y);
        M(f, () => `Cannot find localId for ${y}`);
        let m = o.get(f);
        m?.kind === "server" && g.push(this.createLocalModuleFromModule(m));
      }
    if (g.length > 0) {
      let C = await Promise.all(g);
      o = D(o, (y) => {
        for (let f of C) y.set(f.localId, f);
      });
    }
    for (let C of c.values()) for (let y of C) a.has(y) || a.set(y, F());
    let A = new Set();
    for (let [C, y] of c) {
      let [f] = De(C);
      for (let m of y) {
        let I = i.get(m);
        if (
          (M(I, () => `Cannot find localId for ${m}`),
          t.has(I) ||
            A.has(m) ||
            (o.get(I)?.metadata.localModuleImportMapEntries === !0 &&
              this.moduleUsesLocalImportMapSpecifiers(m) &&
              (f !== "codeFile" || !n[m]?.dependencies.has(C))))
        )
          continue;
        (A.add(m), p.add(m));
        let S = await this.createBatchSaveForDependentModule(I, o, a, r);
        l.push(S);
      }
    }
    let u = this.createRepairLocalIdWaves(Array.from(p), n, i);
    return { primaryBatch: d, dependentBatch: l, repairLocalIdWaves: u, nextPersistedModules: o };
  }
  createRepairLocalIdWaves(e, t, o) {
    let n = new Set(e),
      i = new Map(),
      a = new Set(),
      r = (l) => {
        let p = i.get(l);
        if (p !== void 0) return p;
        if (a.has(l)) return 1;
        a.add(l);
        let c = 1;
        for (let g of t[l]?.dependencies ?? []) n.has(g) && (c = Math.max(c, r(g) + 1));
        return (a.delete(l), i.set(l, c), c);
      },
      d = [];
    for (let l of e) {
      let p = r(l),
        c = o.get(l);
      M(c, () => `Cannot find localId for ${l}`);
      let g = d[p - 1] ?? [];
      (g.push(c), (d[p - 1] = g));
    }
    return d.filter((l) => l.length > 0);
  }
  handlePersistenceError(e, t, o) {
    let n = e instanceof Error ? e.message : "",
      i = e instanceof Se ? e.code : 0,
      a = e instanceof Se ? e.status : 0,
      r = i === 1002,
      d = i === -1e3,
      l = a >= 300 && a !== 400 && a !== 401 && a !== 403,
      p = d || l || Je(e),
      c = 20,
      g = 2;
    if (Je(e))
      return !p || t >= g
        ? (v.reportError(
            "Relative imports error, exceeded max retries, making document read only:",
            { missing: e.persistedMissingRelativeImports }
          ),
          this.makeDocumentReadOnly(),
          L({
            type: "add",
            variant: "warning",
            primaryText: "Cannot save changes.",
            secondaryText: "Please reload.",
            key: "client-outdated",
            duration: Number.POSITIVE_INFINITY,
            icon: "warning",
            showCloseButton: "never",
            action: {
              title: "Reload",
              onClick: () => {
                (v.reportError("ModulesStorage: Reloaded due to relative imports error.", {
                  missing: e.persistedMissingRelativeImports,
                }),
                  window.top.location.reload());
              },
            },
          }),
          { error: e, dropTransient: !0 })
        : (v.debug("Relative imports error, will retry:", {
            missing: e.persistedMissingRelativeImports,
          }),
          o(),
          { error: e, dropTransient: !1 });
    if (r && t > 0) v.debug("Ignoring duplicated save id.");
    else {
      if (r)
        return (
          v.debug("Duplicate save id error, will drop transient save:", e),
          { error: e, dropTransient: !0 }
        );
      if (p && t < c)
        return (
          v.info("Connection error, will retry:", {
            message: n,
            code: i,
            status: a,
            retryCount: t,
          }),
          o(),
          { dropTransient: !1 }
        );
      if (p)
        v.error("Error saving: too many retries, will drop transient save:", {
          message: n,
          code: i,
          status: a,
          retryCount: t,
        });
      else
        return (
          v.debug("Error saving, will drop transient save:", e),
          { error: e, dropTransient: !0 }
        );
    }
    return { dropTransient: !1 };
  }
  moduleUsesLocalImportMapSpecifiers(e) {
    let [t, o] = De(e);
    if (
      t === "layoutTemplate" ||
      t === "webPageMetadata" ||
      t === "siteMetadata" ||
      t === "snippets"
    )
      return !0;
    if (t === "collection") return ie.isOn("collectionLocalModuleImportMapEntries");
    if (t === "screen") {
      let n = this.treeStore.tree.get(o);
      if (co(n) || Qe(n)) return !0;
    }
    return !1;
  }
  processTransientSaveData({ nextPersistedModules: e, transientSave: t, data: o }, n, i) {
    let a = t.treeVersion ?? this.treeStore.remoteTreeVersion,
      r;
    return (
      (e = D(e, (d) => {
        let l = o.values(),
          p = l.next().value;
        r = p.localId;
        let c = this.createPersistedLocalModuleFromSaveData(p, t);
        if (this.updateTreeNode(p.localId, a, c, n, i)) {
          d.set(r, c);
          for (let A of l) {
            let u = d.get(A.localId);
            (M(u, () => `${A.localId} is not in persistedModules`),
              this.updateTreeNodeWithOwnTreeVersion(A.localId, A, i),
              this.applyDependentModuleSaveData(u, A));
          }
        }
      })),
      M(r, () => `Updated module ${JSON.stringify(t)} is not found in the response`),
      { nextPersistedModules: e, updatedModuleLocalId: r }
    );
  }
  setNextInternalState({
    dependenciesModule: e,
    persistedModules: t,
    transientSaves: o,
    depsGraph: n,
    didRemoteChange: i,
    multiplayerChange: a = !1,
  }) {
    for (let p of this.transientSaves.keys())
      o.has(p) ||
        this.treeNodesToUpdate.has(p) ||
        this.treeStore.localOnlyOverlays.discard(P.localOnlyOverlayLayerKey(p));
    ((this.dependenciesModule = e), (this.persistedModules = t), (this.transientSaves = o));
    let r = Ht(
        e,
        this.lastSnapshot.dependenciesModule,
        t,
        o,
        n,
        this.lastSnapshot.modules,
        this.initialized,
        i,
        a,
        this.modulesReloading
      ),
      d = this.lastSnapshot.initialized,
      l = this.lastSnapshot.modulesReloading;
    ((this.lastSnapshot = {
      dependenciesModule: r.dependenciesModule,
      modules: r.modules,
      depsGraph: r.depsGraph,
      initialized: r.initialized,
      modulesReloading: r.modulesReloading,
    }),
      !(r.metadata.patches.length === 0 && r.initialized === d && r.modulesReloading === l) &&
        this.notifyListeners(r));
  }
  async createLocalModuleFromModule(e) {
    v.debug("compiling server module:", e.localId);
    let t = e.sourceContent;
    t || (t = await this.fetchSourceContentFromData(e));
    let o = {},
      n = {},
      i = this.downloadQueue,
      a = new Array();
    for (let l of e.submodules)
      a.push(
        i.run(async () => {
          let p = await fetch(e.baseURL + l);
          o[l] = await p.text();
        })
      );
    for (let l of e.binaryAssets)
      a.push(
        i.run(async () => {
          let c = await (await fetch(e.baseURL + l)).arrayBuffer();
          n[l] = new Uint8Array(c);
        })
      );
    await Promise.all(a);
    let r = B(e),
      d = await this.compile({
        localId: e.localId,
        name: r,
        source: t,
        type: e.type,
        includeSourceMap: zt(e.type),
      });
    for (let [l, p] of this.lazyServerModulesForTransientSaves)
      (p.delete(r), p.size === 0 && this.lazyServerModulesForTransientSaves.delete(l));
    return {
      ...e,
      kind: "local",
      id: e.id,
      localId: e.localId,
      sourceContent: t,
      moduleContent: d.code,
      sourceMapContent: d.sourceMap,
      submoduleContents: o,
      binaryAssetContents: n,
      imports: d.imports,
      sourceRevision: $t(e),
      annotations: d.annotations,
    };
  }
  async createBatchSaveForUpdatedModule(e, t, o, n, i, a) {
    let r = B(t),
      {
        localId: d,
        moduleContent: l,
        sourceContent: p,
        sourceMapContent: c,
        submoduleContents: g = {},
        binaryAssetContents: A = {},
        metadata: u,
        sourceRevision: C,
        imports: y,
        type: f,
        name: m,
        annotations: I,
        update: x,
        ...E
      } = t;
    e === "$new"
      ? M(d === void 0, `Attempted to create ${r} but it already has localId: ${d}`)
      : M(d !== void 0, `The transient save for the provided moduleId: ${e} doesn't have localId`);
    let { type: S, name: w, metadata: N, files: z, ...J } = a;
    M(
      S === f && w === m,
      `Mismatched type/name between save and parameters: ${S}/${w} !== ${f}/${m}`
    );
    let ye = ee(w),
      Ze = l;
    (y.relative.length > 0 &&
      (Ze = await this.replaceRelativeImportsWithAbsolute(r, l, y.relative, o, n, ct(g), i)),
      c &&
        (Ze += `
//# sourceMappingURL=./${ye.sourceMap}`));
    let Ce = (z ?? []).concat([
      { name: ye.module, type: "module", content: Ze },
      { name: ye.source, type: "source", content: p },
    ]);
    c && Ce.push({ name: ye.sourceMap, type: "sourceMap", content: c });
    for (let [q, tt] of Object.entries(g)) Ce.push({ name: q, type: "submodule", content: tt });
    for (let [q, tt] of Object.entries(A)) Ce.push({ name: q, type: "binaryAsset", bytes: tt });
    let et = {};
    if (u || N || C !== void 0)
      if (d) {
        let q = o.get(d);
        (M(q || e === "$upsertName", `Cannot safely update metadata for ${e} (${d})`),
          (et.metadata = { ...q?.metadata, ...u, ...N, sourceRevision: C }));
      } else et.metadata = { ...u, ...N, sourceRevision: C };
    return {
      ...E,
      moduleId: e,
      type: S,
      name: w,
      files: Ce,
      imports: y,
      detached: this.detached,
      ...J,
      ...et,
    };
  }
  async createBatchSaveForDependentModule(e, t, o, n) {
    let i = t.get(e);
    (M(i, () => `${e} is not found in persistedModules`),
      M(i.kind === "local", "persisted module is not a local module"));
    let a = B(i),
      r = ee(i.name),
      d = i.imports,
      l = i.moduleContent;
    d.relative.length > 0 &&
      (l = await this.replaceRelativeImportsWithAbsolute(
        a,
        i.moduleContent,
        d.relative,
        t,
        o,
        ct(i.submoduleContents),
        n
      ));
    let p = o.get(a);
    M(p, () => `newSaveIds don't contain saveId for ${a}`);
    let c = {},
      g = this.moduleUsesLocalImportMapSpecifiers(a);
    return (
      i.metadata.localModuleImportMapEntries !== g &&
        (c.metadata = { ...i.metadata, localModuleImportMapEntries: g }),
      {
        type: i.type,
        moduleId: i.id,
        name: i.name,
        saveId: p,
        patchSaveId: i.saveId,
        files: [{ name: r.module, type: "module", content: l }],
        imports: d,
        detached: this.detached,
        ...c,
      }
    );
  }
  findPersistedModuleLocalIdByTypeSlashName(e, t) {
    return this.ensurePersistedLocalIdsByTypeSlashNameCacheFor(e).get(t);
  }
  ensurePersistedLocalIdsByTypeSlashNameCacheFor(e) {
    let t = this.persistedLocalIdsByTypeSlashNameCache.get(e);
    return (t || ((t = wn(e)), this.persistedLocalIdsByTypeSlashNameCache.set(e, t)), t);
  }
  async replaceRelativeImportsWithAbsolute(e, t, o, n, i, a, r) {
    let d = (A) => {
        let u = this.findPersistedModuleLocalIdByTypeSlashName(n, A);
        return (u || v.error(`Cannot resolve ${A} from ${e}`), u);
      },
      l = en(e, o, {
        findDependencyModuleFilenameByTypeSlashName: (A) => r?.get(A)?.module,
        findPersistedModuleByTypeSlashName: (A) => {
          let u = d(A);
          if (u) return n.get(u);
        },
        findSaveIdByTypeSlashName: (A) => i.get(A),
        shouldSkipTypeSlashName: (A) => d(A) === void 0,
        submodules: a,
        usesImportMapEntries: this.moduleUsesLocalImportMapSpecifiers(e),
      }),
      p = await Zs(t, l);
    if (p.ok) return p.value;
    if (e.startsWith("codeFile")) return p.error.partiallyProcessedCode;
    let c = new Set(),
      g = this.treeStore.tree;
    for (let A of p.error.unresolvedRelativeImports) {
      let u = be(A, e);
      if (!u) continue;
      let [C] = De(u);
      if (!(C === "codeFile" || !g.getNodeWithTrait(u, Te))) {
        c.add(u);
        break;
      }
    }
    if (c.size === 0)
      return (
        v.reportError(
          "Failed to rewrite relative imports due to unpersisted relative dependencies",
          { relativeImports: o, unresolved: Array.from(p.error.unresolvedRelativeImports) }
        ),
        p.error.partiallyProcessedCode
      );
    throw (
      v.reportError("Failed to rewrite relative imports", {
        typeSlashName: e,
        missing: Array.from(c),
      }),
      new he(c)
    );
  }
  async getDependenciesFiles({ baseURL: e, files: t }) {
    let [o, n] = await Promise.allSettled([
      this.downloadQueue.run(async () => {
        let r = await fetch(e + t.importMap);
        if (r.ok !== !0) throw new Error("failed to load importMap file");
        return r.text();
      }),
      this.downloadQueue.run(async () => {
        let r = await fetch(e + t.dependencies);
        if (r.ok !== !0) throw new Error("failed to load dependencies file");
        return r.text();
      }),
    ]);
    M(o.status === "fulfilled", "The importMap has to exist on the module");
    let i = o.value,
      a;
    return (
      n.status === "fulfilled" ? (a = n.value) : v.warn("No dependencies file was found!"),
      { importMapContent: i, dependenciesMapContent: a }
    );
  }
  async getImportMapTraceCacheText() {
    return b(async () => {
      if (!this.dependenciesModule?.files.importMapCache) return;
      if (this.dependenciesModule.generatorTraceCacheContent)
        return this.dependenciesModule.generatorTraceCacheContent;
      let e = await this.fetchImportMapTraceCacheText();
      if (!(!e || !this.dependenciesModule))
        return (
          (this.dependenciesModule = { ...this.dependenciesModule, generatorTraceCacheContent: e }),
          e
        );
    });
  }
  async fetchImportMapTraceCacheText() {
    if (!this.dependenciesModule?.files.importMapCache) return;
    let e = this.dependenciesModule.baseURL,
      t = this.dependenciesModule.files.importMapCache;
    try {
      return await this.downloadQueue.run(async () => {
        let o = await fetch(e + t);
        if (o.ok) return o.text();
      });
    } catch {
      return;
    }
  }
  async getGeneratorTraceCacheForNpmOperation() {
    if (this.dependenciesModule?.generatorTraceCacheContent) {
      let o = Jt(this.dependenciesModule.generatorTraceCacheContent);
      if (o) return o;
      (v.warn("Ignoring invalid import map trace cache"),
        (this.dependenciesModule = {
          ...this.dependenciesModule,
          generatorTraceCacheContent: void 0,
        }));
    }
    let e = await this.fetchImportMapTraceCacheText();
    if (!e || !this.dependenciesModule) return;
    let t = Jt(e);
    if (!t) {
      v.warn("Ignoring invalid import map trace cache");
      return;
    }
    return (
      (this.dependenciesModule = { ...this.dependenciesModule, generatorTraceCacheContent: e }),
      t
    );
  }
  takeSnapshot() {
    return new Yt(this.persistedModules);
  }
};
h($e, "traceCacheFilename", "trace-cache.json");
var vn = $e;
function Da(s, e) {
  return `${V().modulesCDN}/${e.id}/${s.saveId}/${e.files.module}`;
}
function Ht(s, e, t, o, n, i, a, r, d, l) {
  let p = new Set(i.keys()),
    c = new Set(o.keys()),
    g = [],
    [A, u] = hs(i, (f) => {
      for (let m of t.values()) {
        let I = m.localId,
          x = B(m),
          E = o.get(I),
          S = E?.type ?? m.type;
        if (!Wo(S)) continue;
        let w;
        if (E)
          w = {
            kind: "local",
            localId: I,
            type: E.type,
            name: E.name,
            moduleURL: Da(E, m),
            moduleContent: E.moduleContent,
            sourceContent: E.sourceContent,
            sourceMapContent: E.sourceMapContent,
            submoduleContents: E.submoduleContents,
            binaryAssetContents: E.binaryAssetContents,
            relativeImports: E.imports.relative,
            files: m.files,
            sourceRevision: E.sourceRevision,
            svgIcon: E.svgIcon,
            update: E.update,
          };
        else {
          let N = $t(m);
          w =
            m.kind === "local"
              ? {
                  kind: "local",
                  localId: I,
                  type: m.type,
                  name: m.name,
                  moduleURL: m.moduleURL,
                  moduleContent: m.moduleContent,
                  sourceContent: m.sourceContent,
                  sourceMapContent: m.sourceMapContent,
                  submoduleContents: m.submoduleContents,
                  binaryAssetContents: m.binaryAssetContents,
                  relativeImports: m.imports.relative,
                  files: m.files,
                  sourceRevision: N,
                  svgIcon: void 0,
                  update: m.update,
                }
              : {
                  kind: "server",
                  localId: I,
                  type: m.type,
                  name: m.name,
                  moduleURL: m.moduleURL,
                  sourceContent: m.sourceContent,
                  relativeImports: m.imports.relative,
                  files: m.files,
                  sourceRevision: N,
                  update: m.update,
                };
        }
        (In(f, x, w), c.delete(I), p.delete(x));
      }
      for (let m of c) {
        let I = o.get(m);
        if ((M(I), !I.localId)) continue;
        let x = ee(I.name),
          E = {
            kind: "local",
            localId: I.localId,
            type: I.type,
            name: I.name,
            moduleURL: `./transient/${I.saveId}/${x.module}`,
            moduleContent: I.moduleContent,
            sourceContent: I.sourceContent,
            sourceMapContent: I.sourceMapContent,
            submoduleContents: I.submoduleContents,
            binaryAssetContents: I.binaryAssetContents,
            relativeImports: I.imports.relative,
            files: x,
            sourceRevision: I.sourceRevision,
            svgIcon: I.svgIcon,
            update: I.update,
          };
        (In(f, m, E), p.delete(B(E)));
      }
      for (let m of p) (f.delete(m), g.push(m));
    }),
    C = {};
  for (let f of g) {
    let m = i.get(f);
    m && (C[f] = m.localId);
  }
  let y = D(e, (f) => {
    if (s) {
      if (!f)
        return {
          kind: "dependencies",
          localId: W,
          type: s.type,
          name: s.name,
          importMapContent: s.importMapContent,
          dependenciesMapContent: s.dependenciesMapContent,
        };
      ((f.importMapContent = s.importMapContent),
        (f.dependenciesMapContent = s.dependenciesMapContent));
    }
  });
  return (
    y && y !== e && u.push({ op: e ? "replace" : "add", path: [B(y)], value: y }),
    {
      dependenciesModule: y,
      modules: A,
      deletedLocalIdsByTypeSlashNames: C,
      depsGraph: n,
      initialized: a,
      modulesReloading: l,
      metadata: {
        patches: u,
        hasLocalChanges: o.size > 0,
        didRemoteChange: r,
        multiplayerChange: d,
      },
    }
  );
}
function In(s, e, t) {
  let o = s.get(e);
  if (!o) {
    s.set(e, t);
    return;
  }
  if (o.kind !== t.kind) {
    s.set(e, t);
    return;
  }
  if (o.kind === "server") {
    (M(t.kind === "server"), En(o, t));
    return;
  }
  (M(t.kind === "local"),
    xa(o.relativeImports, t.relativeImports) || (o.relativeImports = t.relativeImports),
    Do(o.files, t.files) || (o.files = t.files));
  let { relativeImports: n, files: i, ...a } = t;
  En(o, a);
}
function En(s, e) {
  Object.assign(s, e);
}
function xa(s, e) {
  if (!s && !e) return !0;
  if (s && e) {
    let t = s.length;
    if (t !== e.length) return !1;
    for (let o = 0; o < t; o++) if (s[o] !== e[o]) return !1;
    return !0;
  } else return !1;
}
function Ta(s) {
  return s.type === "save";
}
function Na(s) {
  return s.type === "delete";
}
function F() {
  return $o();
}
function zt(s) {
  return s === "codeFile" || s === "canvasComponent" || s === "shader";
}
function Sn(s, e, t) {
  return s.replace(new RegExp(`\\b(from\\s*)(["'])${Ft(e)}\\2`, "g"), `$1${JSON.stringify(t)}`);
}
function La(s, e) {
  switch (s) {
    case "canvasComponent":
    case "layoutTemplate":
    case "screen":
    case "prototype":
    case "collection":
    case "draftCollection":
    case "webPageMetadata":
    case "siteMetadata":
    case "snippets":
    case "vector":
    case "vectorSet":
    case "kit":
    case "shader":
      return e.default;
    case "codeFile":
    case "css":
    case "componentPresets":
    case "config":
    case "localization":
    case "design":
      return Object.values(e)[0];
    default:
      U(s);
  }
}
var Bn = {
  start: new Date("2025-09-03T10:00:00Z").getTime(),
  end: new Date("2025-09-07T13:00:00Z").getTime(),
};
function ka(s, e) {
  for (let t of s) {
    if (t.id !== e.localId) continue;
    if (t.save.saveId === e.saveId) return !1;
    let o = new Date(e.savedAt).getTime();
    return Number.isNaN(o) ? !1 : o > Bn.start && o < Bn.end;
  }
  return !1;
}
function wn(s) {
  let e = new Map();
  for (let [t, o] of s.entries()) e.set(B(o), t);
  return e;
}
var Yt = class {
  constructor(e) {
    h(this, "persistedModules", e);
    h(this, "persistedLocalIdsByTypeSlashName");
    this.persistedLocalIdsByTypeSlashName = wn(e);
  }
  getPersistedModuleByLocalId(e) {
    return this.persistedModules.get(e);
  }
  getModuleWithTypeSlashName(e) {
    let t = this.persistedLocalIdsByTypeSlashName.get(e);
    if (t) return this.persistedModules.get(t);
  }
};
var Xe = Me(un(), 1);
function Ra(s, e) {
  return e.some((t) => {
    t === "*" && (t = "*/*");
    let o = Xe.default.parse(t);
    if (!o) {
      let n = Ot(t);
      o = n ? Xe.default.parse(n) : null;
    }
    return o
      ? (o.type === "*" || o.type === s.type) && (o.subtype === "*" || o.subtype === s.subtype)
      : !1;
  });
}
function Fa(s, e) {
  if (e.length === 0) return !0;
  let t = Ot(s) ?? s,
    o = Xe.default.parse(t);
  return o && Ra(o, e) ? !0 : e.some((n) => n === "*" || n === "*/*" || s === n || s === `.${n}`);
}
function ic(s, e) {
  return s.type !== "file"
    ? !1
    : (M(e, "allowedFileTypes should always be defined for ControlType.File"),
      s.allowedFileTypes.every(({ extension: t }) => Fa(t, e)));
}
function cc(s, e, t) {
  let o = Ua(e);
  return !t || !o
    ? t
    : t.type === "collectionreference" && O(t.value) && !bn(s, o, t.value)
      ? { ...t, value: void 0 }
      : t.type === "multicollectionreference" && Array.isArray(t.value)
        ? { ...t, value: t.value.filter((n) => bn(s, o, n)) }
        : t;
}
function Ua(s) {
  if (s.type !== "collectionreference" && s.type !== "multicollectionreference") return null;
  let e = $(s.dataIdentifier);
  return e?.kind !== "localModuleExport" ? null : e.value;
}
function bn(s, e, t) {
  let o = s.getNodeWithTrait(t, Co),
    n = o && s.getNodeParent(o);
  return yo(n) && n.instanceIdentifier === e;
}
function yc(s, e = "relative") {
  if (Mo(s)) return !0;
  if (!ho(s)) return !1;
  switch (e) {
    case "relative":
    case "sticky":
      return !0;
    case "absolute":
    case "fixed":
      return !1;
    default:
      U(e);
  }
}
function Cc(s, e, t) {
  if ((mt(s, e) || (t.onlyNodesWithPositionFixed = !1), e.__unsafeIsSlotPropertyChildNode(s))) {
    t.positionTypes.add("relative");
    return;
  }
  if (mt(s, e) && xo(e)) {
    t.positionTypes.add("fixed");
    return;
  }
  if (ko(e) && No(e)) {
    (t.positionTypes.add("sticky"),
      re("positionStickyTop", t, e),
      re("positionStickyRight", t, e),
      re("positionStickyBottom", t, e),
      re("positionStickyLeft", t, e));
    return;
  }
  if (Lo(e) && To(e)) {
    t.positionTypes.add("absolute");
    return;
  }
  if (e.cache.parentDirected) {
    t.positionTypes.add("relative");
    return;
  }
  t.positionTypes.add("absolute");
}
export {
  Pl as a,
  Qs as b,
  sr as c,
  ke as d,
  Ir as e,
  Pn as f,
  Rn as g,
  Ot as h,
  un as i,
  Nt as j,
  Ge as k,
  Oi as l,
  tl as m,
  Vs as n,
  ol as o,
  sl as p,
  je as q,
  jt as r,
  Zs as s,
  en as t,
  Ft as u,
  Zp as v,
  Mn as w,
  vn as x,
  Fa as y,
  ic as z,
  cc as A,
  Ua as B,
  bn as C,
  yc as D,
  Cc as E,
  Il as F,
  El as G,
  Sl as H,
  Bl as I,
  Ql as J,
  Wi as K,
  wl as L,
  bl as M,
  Dl as N,
  xl as O,
  Tl as P,
  Nl as Q,
  Ll as R,
  Zi as S,
  ea as T,
};
//# sourceMappingURL=chunk-BI62DF7N.mjs.map
