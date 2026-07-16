import {
  $ as Rs,
  $a as Ca,
  $b as tc,
  $c as Cc,
  A as ts,
  Aa as Ys,
  Ab as On,
  Ac as ft,
  Ad as $n,
  B as rs,
  Ba as Xs,
  Bb as _n,
  Bc as pt,
  Bd as Jc,
  C as ns,
  Ca as Qs,
  Cb as Mn,
  Cc as mt,
  Cd as Yc,
  D as os,
  Da as ea,
  Db as _a,
  Dc as yt,
  Dd as ye,
  E as is,
  Ea as ta,
  Eb as Ma,
  Ec as gt,
  F as ke,
  Fa as ra,
  Fb as Da,
  Fc as bt,
  G as ss,
  Ga as na,
  Gb as Ba,
  Gc as ic,
  H as ln,
  Ha as oa,
  Hb as Ea,
  Hc as sc,
  I as hn,
  Ia as ia,
  Ib as za,
  Ic as ac,
  J as as,
  Ja as sa,
  Jb as Pa,
  Jc as cc,
  K as cs,
  Ka as aa,
  Kb as La,
  Kc as dc,
  L as ds,
  La as ca,
  Lb as qa,
  Lc as uc,
  M as us,
  Ma as da,
  Mb as $a,
  Mc as lc,
  N as ls,
  Na as ua,
  Nb as Ka,
  Nc as hc,
  O as hs,
  Oa as la,
  Ob as Ua,
  Oc as It,
  P as fs,
  Pa as ha,
  Pb as Fa,
  Pc as fc,
  Q as ps,
  Qa as fa,
  Qb as ja,
  Qc as Ln,
  R as ms,
  Ra as pa,
  Rb as Ha,
  Rc as pc,
  S as ys,
  Sa as ma,
  Sb as Va,
  Sc as mc,
  T as gs,
  Ta as ya,
  Tb as Za,
  Tc as yc,
  U as bs,
  Ua as ga,
  Ub as Ga,
  Uc as gc,
  V as Is,
  Va as ba,
  Vb as Wa,
  Vc as bc,
  W as Ss,
  Wa as Ia,
  Wb as Ja,
  Wc as Ic,
  X as ws,
  Xa as Sa,
  Xb as Ya,
  Xc as Sc,
  Y as vs,
  Ya as wa,
  Yb as Xa,
  Yc as wc,
  Z as xs,
  Za as va,
  Zb as Qa,
  Zc as vc,
  _ as Cs,
  _a as xa,
  _b as ec,
  _c as xc,
  a as Fi,
  aa as As,
  ab as Ra,
  ac as rc,
  ad as Rc,
  b as y,
  ba as Ns,
  bb as Aa,
  bc as nc,
  bd as Ac,
  c as dn,
  ca as ks,
  cb as Na,
  cc as oc,
  cd as Nc,
  d as ji,
  da as Ts,
  db as ce,
  dc as fe,
  dd as kc,
  e as he,
  ea as Os,
  eb as ka,
  ec as ne,
  ed as Tc,
  f as un,
  fa as _s,
  fb as Ta,
  fc as pe,
  fd as Oc,
  ga as Ms,
  gb as fn,
  gc as F,
  gd as _c,
  h as it,
  ha as Ds,
  hb as tr,
  hc as Dn,
  hd as Mc,
  ia as Bs,
  ib as pn,
  ic as Bn,
  id as Dc,
  j as v,
  ja as Es,
  jb as mn,
  jc as En,
  jd as Bc,
  k as Hi,
  ka as zs,
  kb as yn,
  kc as zn,
  kd as Ec,
  l as Qt,
  la as Ps,
  lb as gn,
  lc as Te,
  ld as zc,
  m as er,
  ma as Ls,
  mb as rr,
  mc as Oe,
  md as Pc,
  n as Vi,
  na as qs,
  nb as bn,
  nc as de,
  nd as Lc,
  o as Zi,
  oa as $s,
  ob as In,
  oc as qe,
  od as qn,
  p as Gi,
  pa as Ks,
  pb as Sn,
  pc as $e,
  pd as qc,
  qa as Us,
  qb as wn,
  qc as me,
  qd as $c,
  r as Wi,
  ra as Fs,
  rb as vn,
  rc as Ke,
  rd as Kc,
  sa as js,
  sb as xn,
  sc as st,
  sd as Uc,
  t as Ji,
  ta as Hs,
  tb as Cn,
  tc as at,
  td as Fc,
  ua as Vs,
  ub as Rn,
  uc as ct,
  ud as jc,
  v as Yi,
  vb as An,
  vc as dt,
  vd as Hc,
  wa as Zs,
  wb as Oa,
  wc as ut,
  wd as Vc,
  x as Xi,
  xa as Gs,
  xb as Nn,
  xc as lt,
  xd as Zc,
  y as Qi,
  ya as Ws,
  yb as kn,
  yc as Pn,
  yd as Gc,
  z as es,
  za as Js,
  zb as Tn,
  zc as ht,
  zd as Wc,
} from "chunk-CU22M4B3.mjs";
import {
  a as x,
  b as Jt,
  c as ot,
  d as Le,
  e as Ne,
  f as Yt,
  h as Xt,
  i as $i,
  j as Ki,
  k as an,
  m as cn,
  n as Ui,
} from "chunk-2Q7D34YV.mjs";
import { b as Ae, c as Li, ca as qi } from "chunk-V7MLU2WL.mjs";
import { a as l } from "chunk-425IX65M.mjs";
import { d as nt, j as u, k as I, l as Re, m as sn } from "chunk-CT63CFX7.mjs";
var Xc = [1, 128, 16384, 2097152, 268435456, 34359738368, 4398046511104, 562949953421312],
  _ = class {
    constructor(e) {
      u(this, "buffer", e);
      u(this, "view");
      u(this, "decoder", new TextDecoder());
      u(this, "byteOffset", 0);
      this.view = new DataView(e.buffer, e.byteOffset, e.byteLength);
    }
    align(e) {
      let t = (e - (this.byteOffset % e)) % e;
      this.byteOffset += t;
    }
    endOfFile() {
      return this.byteOffset >= this.buffer.byteLength;
    }
    readUint8() {
      let e = this.view.getUint8(this.byteOffset);
      return ((this.byteOffset += 1), e);
    }
    readUint16() {
      let e = this.view.getUint16(this.byteOffset, !0);
      return ((this.byteOffset += 2), e);
    }
    readUint32() {
      let e = this.view.getUint32(this.byteOffset, !0);
      return ((this.byteOffset += 4), e);
    }
    readFloat64() {
      let e = this.view.getFloat64(this.byteOffset, !0);
      return ((this.byteOffset += 8), e);
    }
    readVarUint() {
      let e = this.buffer,
        t = this.byteOffset,
        n = 0,
        o = 0;
      for (;;) {
        if (t >= e.length) throw new Error("VarUint truncated");
        let i = e[t++];
        if (((n += (i & 127) * Xc[o]), (i & 128) === 0)) break;
        if (((o += 1), o >= Xc.length)) throw new Error("VarUint is too big");
      }
      return ((this.byteOffset = t), n);
    }
    readString() {
      let e = this.readVarUint(),
        t = this.buffer.subarray(this.byteOffset, this.byteOffset + e);
      return ((this.byteOffset += e), this.decoder.decode(t));
    }
    readBytes(e) {
      let t = this.buffer.subarray(this.byteOffset, this.byteOffset + e);
      return ((this.byteOffset += e), t);
    }
    readTypedArray(e) {
      let t = this.readVarUint(),
        n = e.BYTES_PER_ELEMENT;
      this.align(n);
      let o = this.byteOffset + this.buffer.byteOffset,
        i = t * n;
      if (o % n !== 0) {
        let s = new ArrayBuffer(i);
        return (
          new Uint8Array(s).set(new Uint8Array(this.buffer.buffer, o, i)),
          (this.byteOffset += i),
          new e(s, 0, t)
        );
      }
      return ((this.byteOffset += i), new e(this.buffer.buffer, o, t));
    }
  };
var ie = 1024 * 1024,
  D = class {
    constructor() {
      u(this, "encoder", new TextEncoder());
      u(this, "alignmentOrigin", 0);
      u(this, "chunks", [new Uint8Array(ie)]);
      u(this, "scratch", new ArrayBuffer(8));
      u(this, "scratchView", new DataView(this.scratch));
      u(this, "byteOffset", 0);
    }
    align(e) {
      let t = this.byteOffset - this.alignmentOrigin,
        n = (e - (t % e)) % e;
      this.writePadding(n);
    }
    withAlignmentOrigin(e, t) {
      let n = this.alignmentOrigin;
      this.alignmentOrigin = e;
      try {
        return t();
      } finally {
        this.alignmentOrigin = n;
      }
    }
    writeUint8(e) {
      this.remainingInCurrentChunk() === 0 && this.addChunk();
      let t = Math.floor(this.byteOffset / ie);
      ((this.chunks[t][this.byteOffset % ie] = e), (this.byteOffset += 1));
    }
    writeUint16(e) {
      (this.scratchView.setUint16(0, e, !0), this.writeScratch(2));
    }
    writeUint32(e) {
      (this.scratchView.setUint32(0, e, !0), this.writeScratch(4));
    }
    writeFloat64(e) {
      (this.scratchView.setFloat64(0, e, !0), this.writeScratch(8));
    }
    writeFloat64At(e, t) {
      (this.scratchView.setFloat64(0, t, !0),
        this.writeBytesAt(e, new Uint8Array(this.scratch, 0, 8)));
    }
    writeVarUint(e) {
      let t = e;
      for (; t >= 128; ) (this.writeUint8((t % 128) | 128), (t = Math.floor(t / 128)));
      this.writeUint8(t);
    }
    writePaddedVarUint(e) {
      this.writeBytes(Qc(e));
    }
    writePaddedVarUintAt(e, t) {
      this.writeBytesAt(e, Qc(t));
    }
    writeString(e) {
      let t = this.encoder.encode(e);
      (this.writeVarUint(t.length), this.writeBytes(t));
    }
    writeTypedArray(e, t = e.length) {
      this.writeVarUint(t);
      let n = this.preallocateTypedArray(e.BYTES_PER_ELEMENT, t),
        o = new Uint8Array(e.buffer, e.byteOffset, n);
      this.writeBytes(o);
    }
    preallocateTypedArray(e, t) {
      return (this.align(e), t * e);
    }
    writeBytes(e) {
      let t = 0;
      for (; t < e.length; ) {
        this.remainingInCurrentChunk() === 0 && this.addChunk();
        let n = this.currentChunk(),
          o = this.currentChunkOffset(),
          i = Math.min(e.length - t, n.length - o);
        (n.set(e.subarray(t, t + i), o), (t += i), (this.byteOffset += i));
      }
    }
    getBuffer() {
      let e = new Uint8Array(this.byteOffset),
        t = 0;
      for (let n of this.getWrittenChunks()) (e.set(n, t), (t += n.length));
      return e;
    }
    async writeToStream(e) {
      for (let t of this.getWrittenChunks())
        e.write(t) || (await new Promise((n) => e.once("drain", n)));
      return this.byteOffset;
    }
    writeScratch(e) {
      this.writeBytes(new Uint8Array(this.scratch, 0, e));
    }
    writeBytesAt(e, t) {
      let n = e,
        o = 0;
      for (; o < t.length; ) {
        let { chunk: i, chunkIndex: s } = this.getChunk(n),
          a = s * ie,
          c = n - a,
          d = Math.min(t.length - o, i.length - c);
        (i.set(t.subarray(o, o + d), c), (o += d), (n += d));
      }
    }
    writePadding(e) {
      for (; e > 0; ) {
        this.remainingInCurrentChunk() === 0 && this.addChunk();
        let t = Math.min(e, this.remainingInCurrentChunk());
        ((this.byteOffset += t), (e -= t));
      }
    }
    getWrittenChunks() {
      return this.chunks
        .map((e, t) => {
          let n = t * ie,
            o = Math.min(e.length, Math.max(0, this.byteOffset - n));
          return e.subarray(0, o);
        })
        .filter((e) => e.length > 0);
    }
    currentChunk() {
      return this.getChunk(this.byteOffset).chunk;
    }
    currentChunkOffset() {
      return this.byteOffset % ie;
    }
    remainingInCurrentChunk() {
      return this.byteOffset === this.chunks.length * ie ? 0 : ie - this.currentChunkOffset();
    }
    addChunk() {
      this.chunks.push(new Uint8Array(ie));
    }
    getChunk(e) {
      let t = Math.floor(e / ie),
        n = this.chunks[t];
      if (n) return { chunk: n, chunkIndex: t };
      throw new Error(`Invalid byte offset: ${e}`);
    }
  };
u(D, "paddedVarUintWidth", 8);
function Qc(r) {
  if (!Number.isSafeInteger(r) || r < 0)
    throw new Error(`padded varint requires a non-negative safe integer, got ${r}`);
  let e = D.paddedVarUintWidth,
    t = new Uint8Array(e),
    n = r;
  for (let o = 0; o < e; ++o) {
    let i = o === e - 1;
    ((t[o] = (n % 128) | (i ? 0 : 128)), (n = Math.floor(n / 128)));
  }
  return (l(n === 0, "value doesn't fit in bytes"), t);
}
function St(r) {
  if (r === Uint8Array) return "U8";
  if (r === Uint16Array) return "U16";
  if (r === Uint32Array) return "U32";
  if (r === Float64Array) return "F64";
  throw new Error("Invalid array name");
}
var m = Symbol("deleted"),
  B = Symbol("keep"),
  ed = Symbol("does-not-exist"),
  O = "$keep",
  q = "$deleted",
  nr = new Map([
    [void 0, "undefined"],
    [m, "Symbol(deleted)"],
    [B, "Symbol(keep)"],
  ]);
function T(r) {
  return nr.has(r);
}
var Kn = "__$$framerCrdtNativeField$$__",
  zl = new Map([...nr].map(([r, e]) => [e, r]));
function A(r) {
  return typeof r == "object" && r !== null && Kn in r;
}
function k(r) {
  return { [Kn]: nr.get(r) };
}
function N(r) {
  return zl.get(r[Kn]);
}
var Pl = ["client", "seq", "id", "key", "value", "user"],
  Un = class {
    encode(e, t) {
      let n = e.main;
      for (let o of Pl) {
        let i = n.columns[o];
        (t.writeString(o), t.writeString(i.type), i.serialize(t));
      }
    }
    decode(e, t) {
      let n = e.main;
      for (; !t.endOfFile(); ) {
        let o = t.readString(),
          i = n.columns[o];
        l(i, () => `Column ${o} not found`);
        let s = t.readString();
        (l(s === i.type, () => `Column type does not match: ${s} (actual) != ${i.type} (expected)`),
          i.deserialize(t));
      }
    }
    fromSerializableRow(e) {
      let t = A(e.value) ? N(e.value) : e.value;
      return {
        client: e.client,
        seq: e.seq,
        id: e.id,
        key: e.key,
        value: t,
        user: e.user,
        batch: 0,
      };
    }
    toSerializableRow(e) {
      let t = e.value;
      return (
        T(t) && (t = k(t)),
        { client: e.client, seq: e.seq, id: e.id, key: e.key, value: t, user: e.user }
      );
    }
  },
  td = { description: "Sets up migration with initial codec", migrate() {}, codec: new Un() };
var or = "$deleted",
  Fn = "$keep_value";
function Ll(r) {
  let e = r.main.columns,
    t = new Set(),
    n = ql(e);
  for (let o = 0; o < n.length; o++) {
    let i = n[o],
      s = e.key.get(i),
      a = e.id.get(i),
      c = e.client.get(i);
    if (s === "parentid") {
      let h = e.value.get(i);
      if (h === null) {
        e.id._set(i, or);
        continue;
      }
      if ((l(typeof h == "string", () => `parentid is not a string for row: ${i}`), jn(h)))
        continue;
      let p = new Map(),
        g;
      for (let S = o + 1; S < n.length; S++) {
        let R = n[S];
        if (e.client.get(R) !== c) continue;
        let M = e.seq.get(R);
        if (g !== void 0 && M > g) break;
        let re = e.key.get(R),
          oe = e.id.get(R),
          Ce = e.value.get(R);
        if (t.has(R) || typeof re != "number" || oe !== `${h}.children` || Ce === or || Ce === Fn)
          continue;
        g === void 0 && (g = M);
        let le = nd(Ce);
        (l(le, () => `should be a valid object reference: ${JSON.stringify(Ce)}`),
          le === a ? e.value._set(i, rd(h, re)) : p.set(le, re),
          t.add(R));
      }
      for (let S of p.keys()) {
        let R;
        for (let Z = o + 1; Z < n.length; Z++) {
          let M = n[Z];
          if (e.client.get(M) !== c) continue;
          let oe = e.id.get(M),
            Ce = e.key.get(M),
            le = e.value.get(M);
          if (!(oe !== S || Ce !== "parentid" || le !== h)) {
            if (jn(le)) break;
            R = M;
            break;
          }
        }
        (l(R !== void 0, () => `failed to find parentid row for ${S}`),
          e.value._set(R, rd(h, p.get(S))));
      }
      continue;
    }
    if (s === "children") {
      e.value._set(i, Fn);
      continue;
    }
    let d = e.value.get(i);
    if (a.endsWith(".children") && d === Fn) {
      t.add(i);
      continue;
    }
    if (a.endsWith(".children") && d === or) {
      t.add(i);
      continue;
    }
    let f = nd(d);
    if (!t.has(i) && a.endsWith(".children") && f && typeof s == "number") {
      let h = e.seq.get(i),
        p = !1;
      for (let g = o + 1; g < n.length; g++) {
        let S = n[g];
        if (e.client.get(S) !== c) continue;
        if (e.seq.get(S) !== h) break;
        let M = e.key.get(S),
          re = e.id.get(S);
        if (M !== "parentid" || re !== f) continue;
        let oe = e.value.get(S);
        if (
          !jn(oe) &&
          (l(typeof oe == "string", () => `expecting value to be a string for rowIdx ${S}`),
          a.startsWith(oe))
        ) {
          ((p = !0), e.value._set(S, `${oe}@${s}`), t.add(i));
          break;
        }
      }
      if (!p) {
        let g = a.split(".", 2)[0];
        (e.id._set(i, f), e.key._set(i, "parentid"), e.value._set(i, `${g}@${s}`));
      }
    }
  }
  for (let o of t) e.id.get(o).endsWith(".children") && e.id._set(o, or);
}
var od = {
  description: "Migrates multi-seq rows for hierarchy changes to `{parentid}@{position}`",
  migrate: Ll,
};
function ql(r) {
  let e = [];
  for (let t = 0; t < r.client.length; t++) {
    let n = r.key.get(t);
    if (n === "parentid" || n === "children") {
      e.push(t);
      continue;
    }
    r.id.get(t).endsWith(".children") && e.push(t);
  }
  return (
    e.sort((t, n) => {
      let o = r.seq.get(t),
        i = r.seq.get(n);
      return o === i ? r.client.get(t) - r.client.get(n) : o - i;
    }),
    e
  );
}
function jn(r) {
  return typeof r == "string" && r.split("@").length === 2;
}
function rd(r, e) {
  return `${r}@${e.toString()}`;
}
function nd(r) {
  if (typeof r == "string" && r.startsWith("obj(")) return r.slice(4, -1);
}
var _e = class {
  constructor(e, t, n) {
    u(this, "capacity", e);
    u(this, "buffer");
    u(this, "length", 0);
    n
      ? ((this.buffer = n.buffer),
        (this.length = n.length),
        l(
          this.buffer.length === this.capacity,
          () => `Buffer capacity mismatch: ${this.buffer.length} != ${this.capacity}`
        ))
      : (this.buffer = new t(e));
  }
  push(e) {
    ((this.buffer[this.length] = e), (this.length += 1));
  }
};
var $l = 2 ** 17,
  be = class {
    constructor(e, t = $l) {
      u(this, "arrayConstructor", e);
      u(this, "bucketSize", t);
      u(this, "buckets", []);
      u(this, "_length", 0);
      u(this, "bucketShift");
      u(this, "bucketMask");
      (l((t & (t - 1)) === 0, `Bucket size must be a power of 2, got: ${t}`),
        (this.bucketShift = Math.log2(t)),
        (this.bucketMask = t - 1));
    }
    get type() {
      return `BucketedColumn(${St(this.arrayConstructor)})`;
    }
    add(e) {
      let t = this.buckets[this.buckets.length - 1];
      ((!t || t.length >= t.capacity) &&
        ((t = new _e(this.bucketSize, this.arrayConstructor)), this.buckets.push(t)),
        t.push(e));
      let n = this._length;
      return ((this._length += 1), n);
    }
    get(e) {
      l(
        e >= 0 && e < this._length,
        () => `index ${e} out of bounds (column size: ${this._length})`
      );
      let t = e >> this.bucketShift,
        n = e & this.bucketMask,
        o = this.buckets[t];
      return (l(o, "invalid bucket index"), o.buffer[n]);
    }
    _set(e, t) {
      l(
        e >= 0 && e < this._length,
        () => `index ${e} out of bounds (column size: ${this._length})`
      );
      let n = e >> this.bucketShift,
        o = e & this.bucketMask,
        i = this.buckets[n];
      (l(i, "invalid bucket index"), (i.buffer[o] = t));
    }
    get length() {
      return this._length;
    }
    *writeSlices(e) {
      let t = Math.ceil(e / this.bucketSize);
      for (; this.buckets.length < t; )
        this.buckets.push(new _e(this.bucketSize, this.arrayConstructor));
      let n = 0;
      for (let o = 0; o < t; o++) {
        let i = this.buckets[o],
          s = e - n,
          a = s < i.capacity ? s : i.capacity;
        (yield i.buffer.subarray(0, a), (i.length = a), (n += a));
      }
      this._length = e;
    }
    *readSlices() {
      for (let e of this.buckets) yield e.buffer.subarray(0, e.length);
    }
    slice(e, t) {
      (e < 0 && (e = this.length + e),
        t < 0 && (t = this.length + t),
        t > this.length && (t = this.length));
      let n = e >> this.bucketShift,
        o = t >> this.bucketShift,
        i = t - e;
      if (i <= 0) return [];
      let s = Array.from({ length: i }),
        a = 0,
        c = e & this.bucketMask,
        d = this.buckets[n];
      if (n === o) {
        let p = t & this.bucketMask;
        for (let g = c; g < p; ++g) s[a++] = d.buffer[g];
        return s;
      }
      for (let p = c; p < this.bucketSize; ++p) s[a++] = d.buffer[p];
      for (let p = n + 1; p < o; ++p) {
        let g = this.buckets[p];
        for (let S = 0; S < g.length; ++S) s[a++] = g.buffer[S];
      }
      let f = t & this.bucketMask,
        h = this.buckets[o];
      if (h) for (let p = 0; p < f; ++p) s[a++] = h.buffer[p];
      return s;
    }
    serialize(e) {
      (e.writeVarUint(this.length),
        e.preallocateTypedArray(this.arrayConstructor.BYTES_PER_ELEMENT, this.length));
      for (let t of this.buckets)
        e.writeBytes(
          new Uint8Array(
            t.buffer.buffer,
            t.buffer.byteOffset,
            t.length * this.arrayConstructor.BYTES_PER_ELEMENT
          )
        );
    }
    deserialize(e) {
      let t = e.readTypedArray(this.arrayConstructor);
      this._length = t.length;
      let n = 0;
      for (n = 0; n < t.length - this.bucketSize; n += this.bucketSize) {
        let o = t.slice(n, n + this.bucketSize);
        this.buckets.push(
          new _e(this.bucketSize, this.arrayConstructor, { buffer: o, length: o.length })
        );
      }
      if (n < t.length) {
        let o = new _e(this.bucketSize, this.arrayConstructor);
        for (; n < t.length; ++n) o.push(t[n]);
        this.buckets.push(o);
      }
    }
  };
var G = class r {
  constructor(e, t) {
    u(this, "arrayConstructor", e);
    u(this, "uniques", []);
    u(this, "maxUniques");
    u(this, "indices");
    u(this, "count", 0);
    u(this, "lookup");
    u(this, "cursor", 0);
    if (((this.indices = new be(e, t)), e === Uint8Array)) this.maxUniques = 2 ** 8 - 1;
    else if (e === Uint16Array) this.maxUniques = 2 ** 16 - 1;
    else if (e === Uint32Array) this.maxUniques = 2 ** 32 - 1;
    else if (e === Float64Array) this.maxUniques = Number.MAX_SAFE_INTEGER;
    else throw new Error(`Unsupported array constructor: ${e.name}`);
  }
  get type() {
    return `LazyNormalizedBucketedColumn(ref: ${St(this.arrayConstructor)})`;
  }
  static withBuckets({ buffer: e, size: t }) {
    return { create: () => new r(e, t) };
  }
  hydrateThrough(e) {
    for (this.lookup || (this.lookup = new Map()); this.cursor <= e; ++this.cursor) {
      let t = this.uniques[this.cursor];
      this.lookup.set(t, this.cursor);
    }
  }
  indexOfExisting(e) {
    if (this.lookup?.has(e)) return this.lookup.get(e);
    for (; this.cursor < this.uniques.length; ++this.cursor) {
      let t = this.uniques[this.cursor];
      if (((this.lookup ??= new Map()), this.lookup.set(t, this.cursor), Object.is(t, e)))
        return this.cursor;
    }
  }
  addUnique(e) {
    l(this.uniques.length < this.maxUniques, "limit reached for unique values");
    let t = this.uniques.length;
    return (
      this.uniques.push(e),
      (this.lookup ??= new Map()),
      this.lookup.set(e, t),
      (this.cursor = this.uniques.length),
      t
    );
  }
  add(e) {
    let t = this.indexOfExisting(e);
    t === void 0 && (t = this.addUnique(e));
    let n = this.count;
    return (this.indices.add(t), (this.count = n + 1), n);
  }
  get(e) {
    l(e >= 0 && e < this.count, "index out of bounds");
    let t = this.indices.get(e);
    return this.uniques[t];
  }
  _set(e, t) {
    l(e >= 0 && e < this.count, "index out of bounds");
    let n = this.indexOfExisting(t);
    (n === void 0 && (n = this.addUnique(t)), this.indices._set(e, n));
  }
  slice(e, t) {
    let n = Math.max(0, t - e),
      o = Array.from({ length: n }),
      i = this.indices.slice(e, t);
    for (let s = 0; s < n; ++s) o[s] = this.uniques[i[s]];
    return o;
  }
  get length() {
    return this.count;
  }
  serialize(e) {
    (e.writeString(JSON.stringify(this.uniques, (t, n) => (T(n) ? k(n) : n))),
      this.indices.serialize(e));
  }
  deserialize(e) {
    this.uniques = JSON.parse(e.readString());
    for (let t = 0; t < this.uniques.length; ++t) {
      let n = this.uniques[t];
      if (A(n)) {
        let o = N(n);
        this.uniques[t] = o;
      }
    }
    (this.indices.deserialize(e),
      (this.count = this.indices.length),
      (this.lookup = void 0),
      (this.cursor = 0));
  }
  rehydrate() {
    this.cursor < this.uniques.length && this.hydrateThrough(this.uniques.length - 1);
  }
  releaseLookup() {
    ((this.lookup = void 0), (this.cursor = 0));
  }
};
var Hn = (1 << 29) - 24,
  id = new TextEncoder(),
  ad = new TextDecoder();
function cd(r, e) {
  return Array.isArray(e) ? e.map((t) => (T(t) ? k(t) : t)) : T(e) ? k(e) : e;
}
function dd(r) {
  let e = typeof r;
  return e === "string" || e === "number" || e === "boolean" || r === null;
}
function Kl(r) {
  for (let e = 0; e < r.length; ++e) if (!dd(r[e])) return !1;
  return !0;
}
function Ul(r) {
  return dd(r) ? JSON.stringify(r) : (JSON.stringify(r, cd) ?? "null");
}
function ud(r) {
  if (Array.isArray(r)) {
    for (let e = 0; e < r.length; ++e) A(r[e]) && (r[e] = N(r[e]));
    return r;
  }
  return A(r) ? N(r) : r;
}
var Vn = 91,
  Me = 93,
  Fl = 123,
  jl = 125,
  ld = 34,
  Hl = 92,
  ir = 44,
  Vl = 64 * 1024 * 1024,
  Zl = 16 * 1024 * 1024,
  Gl = Wl() ?? 4 * 1024 * 1024;
function Wl() {
  if (typeof process > "u") return;
  let r = Number(process.env.UNIQUES_BATCH_BYTES);
  return Number.isFinite(r) && r > 0 ? Math.min(r, Hn - 2) : void 0;
}
function hd(r, e, t) {
  if (t && (t?.bodyBytes > Hn || (t.mixed && t.bodyBytes >= Vl))) {
    sd(r, e);
    return;
  }
  try {
    let n = Kl(e) ? JSON.stringify(e) : JSON.stringify(e, cd);
    r.writeString(n);
  } catch (n) {
    if (n instanceof RangeError) {
      sd(r, e);
      return;
    }
    throw n;
  }
}
function sd(r, e) {
  let t = r.byteOffset;
  r.writePaddedVarUint(0);
  let n = r.byteOffset;
  r.writeUint8(Vn);
  let o = new Uint8Array(64 * 1024);
  for (let i = 0; i < e.length; ++i) {
    i > 0 && r.writeUint8(ir);
    let s = Ul(e[i]),
      a = s.length * 3;
    if (a > Zl) {
      r.writeBytes(id.encode(s));
      continue;
    }
    a > o.length && (o = new Uint8Array(a));
    let { written: c } = id.encodeInto(s, o);
    r.writeBytes(o.subarray(0, c));
  }
  (r.writeUint8(Me), r.writePaddedVarUintAt(t, r.byteOffset - n));
}
function fd(r, e) {
  let t = r.readVarUint(),
    n = r.readBytes(t);
  if (n.length > Hn) return (e && ((e.mixed = void 0), (e.bodyBytes = n.length)), Jl(n));
  let o = JSON.parse(ad.decode(n)),
    i = !1;
  for (let s = 0; s < o.length; ++s) {
    let a = o[s];
    (typeof a == "object" && a !== null && (i = !0), (o[s] = ud(a)));
  }
  return (e && ((e.mixed = i), (e.bodyBytes = n.length)), o);
}
function Jl(r, e = Gl) {
  let t = [],
    n = 0;
  if (((n = wt(r, n)), r[n] !== Vn))
    throw new Error(`uniques array: expected '[' at byte ${n} of ${r.length}`);
  if (((n += 1), (n = wt(r, n)), r[n] === Me)) n += 1;
  else {
    let o = !1;
    for (; n < r.length; ) {
      let i = n,
        s = n,
        a;
      for (; n < r.length; ) {
        let c = Xl(r, n);
        ((s = c), (n = wt(r, c)));
        let d = r[n];
        if (d === ir) {
          if (((a = ir), (n += 1), (n = wt(r, n)), r[n] === Me))
            throw new Error(`uniques array: unexpected ',' before ']' at byte ${n} of ${r.length}`);
          if (c - i >= e) break;
          continue;
        }
        if (d === Me) {
          ((a = Me), (n += 1));
          break;
        }
        throw new Error(`uniques array: expected ',' or ']' at byte ${n} of ${r.length}`);
      }
      if ((Yl(t, r, i, s), a === Me)) {
        o = !0;
        break;
      }
      if (a === void 0) break;
    }
    if (!o) throw new Error(`uniques array: unterminated array (${r.length} bytes)`);
  }
  if (((n = wt(r, n)), n !== r.length))
    throw new Error(`uniques array: unexpected trailing bytes at ${n} of ${r.length}`);
  return t;
}
function Yl(r, e, t, n) {
  try {
    let o = "[" + ad.decode(e.subarray(t, n)) + "]",
      i = JSON.parse(o);
    for (let s = 0; s < i.length; ++s) r.push(ud(i[s]));
  } catch (o) {
    throw new Error(`uniques array: invalid element JSON at bytes ${t}-${n} of ${e.length}`, {
      cause: o,
    });
  }
}
function Xl(r, e) {
  let t = 0,
    n = e;
  for (; n < r.length; ) {
    switch (r[n]) {
      case ld:
        n = Ql(r, n);
        continue;
      case Fl:
      case Vn:
        t += 1;
        break;
      case jl:
      case Me:
        if (t === 0) return n;
        t -= 1;
        break;
      case ir:
        if (t === 0) return n;
        break;
      default:
        break;
    }
    n += 1;
  }
  if (t !== 0) throw new Error(`uniques array: unterminated value from byte ${e} of ${r.length}`);
  return r.length;
}
function Ql(r, e) {
  let t = e + 1;
  for (;;) {
    let n = r.indexOf(ld, t);
    if (n === -1)
      throw new Error(`uniques array: unterminated string from byte ${e} of ${r.length}`);
    let o = 0;
    for (let i = n - 1; i > e && r[i] === Hl; --i) o += 1;
    if (o % 2 === 0) return n + 1;
    t = n + 1;
  }
}
function wt(r, e) {
  let t = e;
  for (; t < r.length; ) {
    let n = r[t];
    if (n === 32 || n === 9 || n === 10 || n === 13) t += 1;
    else break;
  }
  return t;
}
var se = class {
  constructor(e = 1024) {
    u(this, "uniques", []);
    u(this, "indices");
    u(this, "count", 0);
    u(this, "lookup");
    u(this, "cursor", 0);
    u(this, "uniquesHints");
    this.indices = new Uint32Array(e);
  }
  get type() {
    return "LazyNormalizedColumn";
  }
  ensureCapacity(e) {
    if (e <= this.indices.length) return;
    let t = this.indices.length || 1;
    for (; t < e; ) t <<= 1;
    let n = new Uint32Array(t);
    (n.set(this.indices), (this.indices = n));
  }
  hydrateThrough(e) {
    for (this.lookup || (this.lookup = new Map()); this.cursor <= e; ++this.cursor) {
      let t = this.uniques[this.cursor];
      this.lookup.set(t, this.cursor);
    }
  }
  indexOfExisting(e) {
    if (this.lookup?.has(e)) return this.lookup.get(e);
    for (; this.cursor < this.uniques.length; ++this.cursor) {
      let t = this.uniques[this.cursor];
      if (((this.lookup ??= new Map()), this.lookup.set(t, this.cursor), Object.is(t, e)))
        return this.cursor;
    }
  }
  addUnique(e) {
    let t = this.uniques.length;
    return (
      this.uniques.push(e),
      (this.lookup ??= new Map()),
      this.lookup.set(e, t),
      (this.cursor = this.uniques.length),
      t
    );
  }
  add(e) {
    let t = this.indexOfExisting(e);
    t === void 0 && (t = this.addUnique(e));
    let n = this.count;
    return (this.ensureCapacity(n + 1), (this.indices[n] = t), (this.count = n + 1), n);
  }
  get(e) {
    if (e < 0 || e >= this.count) throw RangeError("index out of bounds");
    return this.uniques[this.indices[e]];
  }
  _set(e, t) {
    if (e < 0 || e >= this.count) throw RangeError("index out of bounds");
    let n = this.indexOfExisting(t);
    (n === void 0 && (n = this.addUnique(t)), (this.indices[e] = n));
  }
  slice(e, t) {
    let n = Math.max(0, t - e),
      o = Array.from({ length: n });
    for (let i = 0; i < n; ++i) o[i] = this.uniques[this.indices[e + i]];
    return o;
  }
  get length() {
    return this.count;
  }
  serialize(e) {
    (hd(e, this.uniques, this.uniquesHints),
      e.writeTypedArray(this.indices.subarray(0, this.count)));
  }
  deserialize(e) {
    let t = { mixed: void 0, bodyBytes: 0 };
    ((this.uniques = fd(e, t)), (this.uniquesHints = t));
    let n = e.readTypedArray(Uint32Array);
    ((this.indices = new Uint32Array(n)),
      (this.count = this.indices.length),
      (this.lookup = void 0),
      (this.cursor = 0));
  }
  rehydrate() {
    this.cursor < this.uniques.length && this.hydrateThrough(this.uniques.length - 1);
  }
  releaseLookup() {
    ((this.lookup = void 0), (this.cursor = 0));
  }
};
var pd = "$keep_value",
  md = "$deleted",
  yd = {
    description: "Replace deleted and keep values with symbols",
    migrate(r) {
      let e = r.main.columns;
      if (e.value instanceof se || e.value instanceof G) {
        let t = e.value.uniques;
        for (let n in t) t[n] === md ? (t[n] = m) : t[n] === pd && (t[n] = B);
      } else
        for (let t = 0; t < e.length; ++t) {
          let n = e.value.get(t);
          n === md ? e.value._set(t, m) : n === pd && e.value._set(t, B);
        }
    },
  };
function eh(r) {
  let e = r.main.columns;
  if (e.client instanceof se || e.client instanceof G) {
    let t = e.client.uniques;
    for (let n in t) t[n] = gd(t[n]);
  } else
    for (let t = 0; t < e.length; ++t) {
      let n = e.client.get(t);
      e.client._set(t, gd(n));
    }
}
var bd = { description: "Migrates row `client` to u32", migrate: eh };
function gd(r) {
  return r >>> 0;
}
var Ue = 62,
  Zn = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  Id = {};
for (let r = 0; r < Zn.length; r++) Id[Zn[r]] = r;
function Gn(r, e) {
  if (
    (l(r >= 0, () => `Cannot encode negative number: ${r}`),
    l(Number.isInteger(r), () => `Cannot encode non-integer: ${r}`),
    r === 0)
  )
    return "0".repeat(e);
  let t = [],
    n = r;
  for (; n > 0; ) (t.push(Zn[n % Ue]), (n = Math.floor(n / Ue)));
  let o = t.reverse().join("");
  return (
    l(o.length <= e, () => `Encoded value exceeds width: ${o} from ${r} width ${e}`),
    o.padStart(e, "0")
  );
}
function Wn(r) {
  l(r.length > 0, "Cannot decode empty string");
  let e = 0;
  for (let t = 0; t < r.length; t++) {
    let n = r[t],
      o = Id[n];
    (l(o !== void 0, () => `Invalid base62 character: ${n} in string ${r}`), (e = e * Ue + o));
  }
  return (l(e <= Number.MAX_SAFE_INTEGER, "Decoded number exceeds MAX_SAFE_INTEGER"), e);
}
var De = 5,
  Sd = 6,
  Jn = De + Sd;
function th(r) {
  let e = Gn(r.position, De),
    t = Gn(r.client, Sd);
  return e + t;
}
function rh(r) {
  l(r.length === Jn, () => `Component string must be ${Jn} chars, got ${r.length}`);
  let e = r.slice(0, De),
    t = r.slice(De);
  return { position: Wn(e), client: Wn(t) };
}
var Yn = ":";
function Ie(r) {
  return r.map(th).join(Yn);
}
function Be(r) {
  l(r.length > 0, "Position ID is empty");
  let e = r.split(Yn);
  return (l(e.length > 0, "Position ID has no parts"), e.map(rh));
}
function Ee(r) {
  if (typeof r != "string" || r.length === 0) return !1;
  let e = r.split(Yn);
  for (let t of e) if (t.length !== Jn) return !1;
  return !0;
}
var nh = 0,
  oh = 62 ** 5,
  ih = 0,
  sh = Number.MAX_SAFE_INTEGER;
function sr(r, e, t) {
  r &&
    e &&
    (l(r <= e, () => `Invalid boundaries: ${r} > ${e}`),
    l(
      r !== e,
      () => `Trying to allocate between equal boundarys (same position, same client): ${r}`
    ));
  let n = r ? Be(r) : [],
    o = e ? Be(e) : [],
    i = ah(n, o, t);
  return Ie(i);
}
var wd;
function ah(r, e, t) {
  let n = [],
    o = 0,
    i = !1;
  for (;;) {
    l(o < 2e3, "Infinite loop");
    let s = o < r.length,
      a = o < e.length,
      c = s ? r[o] : { position: nh, client: ih },
      d = a && !i ? e[o] : { position: oh, client: sh };
    if (d.position - c.position > 1) {
      let f;
      wd
        ? (f = wd)
        : e.length === 0
          ? (f = (p, g) => vd(p, g, 4096, 2))
          : i
            ? (f = (p, g) => vd(p, g, 8192, 2))
            : (f = ch);
      let h = f(c.position + 1, d.position - 1);
      return (n.push({ position: h, client: t }), n);
    }
    if ((n.push({ ...c }), !i)) {
      let f = c.position < d.position,
        h = a && c.position === d.position && c.client < d.client;
      i = f || h;
    }
    o++;
  }
}
function vd(r, e, t, n) {
  l(r <= e, () => `Invalid range: ${r} > ${e}`);
  let o = Math.min(e, r + n),
    i = Math.min(e, o + t);
  return xd(o, i);
}
function ch(r, e) {
  l(r <= e, () => `Invalid range: ${r} > ${e}`);
  let t = Math.floor((r + e) / 2),
    n = Math.min(8, Math.floor((e - r) / 4)),
    o = Math.max(r, t - n),
    i = Math.min(e, t + n);
  return xd(o, i);
}
function xd(r, e) {
  let t = e - r + 1;
  return Math.floor(Math.random() * t) + r;
}
var vt = "$deleted",
  uh = "$keep",
  ar = Ue ** De - 1;
function lh(r) {
  let e = r.main.columns;
  (hh(e), fh(e), ph(e), gh(e));
}
var Cd = {
  description: "Migrates array positions from fraction indices to Logoot-style position ids",
  migrate: lh,
};
function hh(r) {
  let e = new Set();
  for (let t = 0; t < r.client.length; t++) {
    let n = r.id.get(t);
    if (n === vt) continue;
    let o = r.key.get(t);
    if (o !== "parentid") continue;
    let i = r.value.get(t);
    if (i === m) continue;
    if ((l(typeof i == "string"), i.split("@").length === 1)) {
      r.id._set(t, vt);
      continue;
    }
    let a = r.client.get(t),
      c = r.seq.get(t),
      d = `${n}/${o}/${i}${a}/${c}`;
    if (e.has(d)) {
      r.id._set(t, vt);
      continue;
    }
    e.add(d);
  }
}
function fh(r) {
  for (let e = 0; e < r.client.length; e++)
    r.key.get(e) !== -1 || r.value.get(e) !== B || r.key._set(e, uh);
}
function ph(r) {
  let e = mh(r);
  for (let [t, n] of e) {
    let o = Array.from(n.keys()).sort((s, a) => s - a),
      i = Math.floor(ar / (o.length + 3));
    l(i > 0, "step must be positive");
    for (let s = 0; s < o.length; s++) {
      let a = (s + 1) * i;
      l(a <= ar, "position exceeds max position");
      let c = o[s],
        d = n.get(c);
      d.sort((h, p) => yh(r, h, p));
      let f = [];
      for (let h of d) {
        if (r.value.get(h) === m) {
          let g = f.pop();
          (l(g, "expected to have a previous position to delete"), r.key._set(h, g));
          continue;
        }
        let p = Ie([{ position: a, client: r.client.get(h) }]);
        (r.key._set(h, p), f.push(p));
      }
    }
  }
}
function mh(r) {
  let e = new Map();
  for (let t = 0; t < r.client.length; t++) {
    let n = r.id.get(t);
    if (n === vt) continue;
    let o = r.key.get(t);
    if (typeof o != "number") continue;
    let i = e.get(n);
    i || ((i = new Map()), e.set(n, i));
    let s = i.get(o);
    (s || ((s = []), i.set(o, s)), s.push(t));
  }
  return e;
}
function yh(r, e, t) {
  let n = r.seq.get(e),
    o = r.seq.get(t);
  if (n < o) return -1;
  if (n > o) return 1;
  let i = r.client.get(e),
    s = r.client.get(t);
  return i < s ? -1 : i > s ? 1 : 0;
}
function gh(r) {
  let e = bh(r);
  for (let [t, n] of e) {
    let o = n.sort((s, a) => Ih(r, s, a)),
      i = Math.floor(ar / (o.length + 3));
    l(i > 0, "step must be positive");
    for (let s = 0; s < o.length; s++) {
      let a = (s + 1) * i;
      l(a <= ar, "position exceeds max position");
      let { rowIdx: c } = o[s];
      Sh(r, c, t, a);
    }
  }
}
function bh(r) {
  let e = new Map();
  for (let t = 0; t < r.client.length; t++) {
    if (r.id.get(t) === vt || r.key.get(t) !== "parentid") continue;
    let i = r.value.get(t);
    if (i === m) continue;
    l(typeof i == "string");
    let s = i.split("@");
    l(s.length === 2, "invalid hierarchy key");
    let a = s[0],
      c = parseFloat(s[1]),
      d = e.get(a);
    (d || ((d = []), e.set(a, d)), d.push({ rowIdx: t, value: c }));
  }
  return e;
}
function Ih(r, e, t) {
  if (e.value < t.value) return -1;
  if (e.value > t.value) return 1;
  let n = r.seq.get(e.rowIdx),
    o = r.seq.get(t.rowIdx);
  if (n > o) return -1;
  if (n < o) return 1;
  let i = r.client.get(e.rowIdx),
    s = r.client.get(t.rowIdx);
  return i > s ? -1 : i < s ? 1 : 0;
}
function Sh(r, e, t, n) {
  let o = Ie([{ position: n, client: r.client.get(e) }]);
  r.value._set(e, `${t}@${o}`);
}
var Rd = 27,
  Ad = 2 ** Rd - 1,
  Xn = 1,
  wh = 26,
  Nd = 2 ** wh - 1,
  Qn = 1,
  eo = 2 ** Rd;
function Fe({ batchNo: r, rowCount: e }) {
  return (
    l(e >= Xn && e <= Ad, () => `rowCount out of range: ${e}`),
    l(r >= Qn && r <= Nd, () => `batchNo out of range: ${r}`),
    l(Number.isSafeInteger(r), () => `batchNo is not a safe integer: ${r}`),
    l(Number.isSafeInteger(e), () => `rowCount is not a safe integer: ${e}`),
    r * eo + e
  );
}
function cr(r) {
  return (
    l(Number.isSafeInteger(r), () => `batchId not safe integer: ${r}`),
    l(r >= 0, () => `batchId is negative: ${r}`),
    Math.floor(r / eo)
  );
}
function to(r) {
  let e = cr(r);
  return { rowCount: r - e * eo, batchNo: e };
}
var wm = {
  ROW_COUNT_MIN: Xn,
  ROW_COUNT_MAX: Ad,
  BATCH_NO_MIN: Qn,
  BATCH_NO_MAX: Nd,
  MIN_BATCH_ID: Fe({ batchNo: Qn, rowCount: Xn }),
};
var vh = ["client", "seq", "batch", "id", "key", "value", "user"],
  ro = class {
    encode(e, t) {
      let n = e.main;
      for (let o of vh) {
        let i = n.columns[o];
        (t.writeString(o), t.writeString(i.type), i.serialize(t));
      }
    }
    decode(e, t) {
      let n = e.main;
      for (; !t.endOfFile(); ) {
        let o = t.readString(),
          i = n.columns[o];
        l(i, () => `Column ${o} not found`);
        let s = t.readString();
        (l(s === i.type, () => `Column type does not match: ${s} (actual) != ${i.type} (expected)`),
          i.deserialize(t));
      }
    }
    fromSerializableRow(e) {
      let t = A(e.value) ? N(e.value) : e.value;
      return {
        client: e.client,
        seq: e.seq,
        id: e.id,
        key: e.key,
        value: t,
        user: e.user,
        batch: e.batch ?? 0,
      };
    }
    toSerializableRow(e) {
      let t = e.value;
      return (
        T(t) && (t = k(t)),
        {
          client: e.client,
          seq: e.seq,
          id: e.id,
          key: e.key,
          value: t,
          user: e.user,
          batch: e.batch,
        }
      );
    }
  };
function xh(r) {
  let e = r.main.columns,
    t = new Map();
  for (let i = 0; i < e.client.length; i++) {
    let s = e.client.get(i),
      a = t.get(s);
    a === void 0 ? t.set(s, 1) : t.set(s, a + 1);
  }
  let n = new Map();
  for (let [i, s] of t) n.set(i, Fe({ batchNo: 1, rowCount: s }));
  let o = G.withBuckets({ buffer: Uint32Array }).create();
  for (let i = 0; i < e.client.length; i++) {
    let s = e.client.get(i),
      a = n.get(s);
    o.add(a);
  }
  e.batch = o;
}
var kd = {
  description: "Adds batch column and populates initial value",
  codec: new ro(),
  migrate: xh,
};
function Ch(r) {
  let e = r.main.columns;
  Rh(e);
  let t = new Map();
  for (let n = 0; n < e.length; n++) {
    if (e.id.get(n) === q) continue;
    let i = e.value.get(n);
    if (typeof i != "string" || !i.startsWith("arr(")) continue;
    let s = i.slice(4, -1),
      a = t.get(s);
    if (a) {
      a.referenceRowIdx.push(n);
      continue;
    }
    t.set(s, { itemRowIdxs: [], referenceRowIdx: [n], keepRowIdx: -1, isAtomic: !1 });
  }
  for (let n = 0; n < e.length; n++) {
    let o = e.id.get(n);
    if (!t.has(o)) continue;
    let i = t.get(o);
    if (e.key.get(n) === O) {
      (l(i.keepRowIdx === -1, () => `array has multiple keep rows: ${o}`), (i.keepRowIdx = n));
      continue;
    }
    let a = e.value.get(n);
    if (typeof a == "string" && (a.startsWith("arr(") || a.startsWith("obj("))) {
      l(i.itemRowIdxs.length === 0, () => `array has mixed primitive/reference items: ${o}`);
      continue;
    }
    (!i.isAtomic && a === m) || ((i.isAtomic = !0), i.itemRowIdxs.push(n));
  }
  for (let [n, o] of t) {
    if (!o.isAtomic) continue;
    for (let f of o.referenceRowIdx) e.id._set(f, q);
    o.itemRowIdxs.sort((f, h) => {
      let p = e.seq.get(f),
        g = e.seq.get(h);
      if (p < g) return -1;
      if (p > g) return 1;
      let S = e.client.get(f),
        R = e.client.get(h);
      return S < R ? -1 : S > R ? 1 : 0;
    });
    let i = n.split(".");
    l(i.length >= 2, () => `invalid array reference id: ${n}`);
    let s = i.pop(),
      a = i.join("."),
      c = [],
      d = o.keepRowIdx;
    (l(d !== -1, () => `array reference has no keep row: ${n}`),
      e.id._set(d, a),
      e.key._set(d, s),
      e.value._set(d, []));
    for (let f of o.itemRowIdxs) {
      e.id._set(f, a);
      let h = e.key.get(f),
        p = e.value.get(f);
      if (p === m) {
        let g = c.findIndex((S) => S.key === h);
        g !== -1 && c.splice(g, 1);
      } else {
        let g = c.findIndex((S) => S.key > h);
        g !== -1 ? c.splice(g, 0, { key: h, value: p }) : c.push({ key: h, value: p });
      }
      (e.key._set(f, s),
        e.value._set(
          f,
          c.map(({ value: g }) => g)
        ));
    }
  }
}
function Rh(r) {
  let e = new Set();
  for (let t = 0; t < r.client.length; t++) {
    let n = r.id.get(t);
    if (n === q) continue;
    let o = r.key.get(t),
      i = r.client.get(t),
      s = r.seq.get(t),
      a = r.value.get(t);
    typeof a == "symbol" && (a = a.toString());
    let c = `${n}/${o}/${a}/${i}/${s}`;
    if (e.has(c)) {
      r.id._set(t, q);
      continue;
    }
    e.add(c);
  }
}
var Td = { description: "Migrates arrays of primitives to atomic array values", migrate: Ch };
var Od = "$keep",
  no = "$deleted";
function Ah(r) {
  let e = r.main.columns,
    t = kh(e),
    n = Th(e, t);
  for (let [o, i] of n) {
    i.sort((c, d) => Oh(e, c, d));
    let s = new Map(),
      a = new Map();
    for (let c = 0; c < i.length; c++) {
      let d = i[c],
        f = e.id.get(d);
      l(f === o, () => `array reference id does not match row id: ${f}`);
      let h = e.key.get(d);
      l(h !== Od, () => `array reference key cannot be $keep: ${h}`);
      let p = e.value.get(d);
      if (
        (l(
          p === m || oo(p),
          () => `array reference value must be object reference: ${JSON.stringify(p)}`
        ),
        p === m)
      )
        continue;
      let g = p.slice(4, -1);
      (s.set(g, h), a.set(h, g));
    }
    for (let c = 0; c < i.length; c++) {
      let d = i[c],
        f = e.key.get(d),
        h = e.value.get(d);
      if (h === m) {
        let g = a.get(f);
        if (g === void 0) {
          e.id._set(d, no);
          continue;
        }
        let S = s.get(g);
        f === S ? e.key._set(d, g) : e.id._set(d, no);
        continue;
      }
      l(oo(h), () => `array reference value must be object reference: ${JSON.stringify(h)}`);
      let p = h.slice(4, -1);
      (e.key._set(d, p), e.value._set(d, f));
    }
  }
}
function Nh(r) {
  return typeof r == "string" && r.startsWith("arr(");
}
function kh(r) {
  let e = new Set();
  for (let t = 0; t < r.client.length; t++) {
    if (r.id.get(t) === no) continue;
    let o = r.value.get(t);
    if (!Nh(o)) continue;
    let i = o.slice(4, -1);
    e.add(i);
  }
  return e;
}
function oo(r) {
  return typeof r == "string" && r.startsWith("obj(");
}
function Th(r, e) {
  let t = new Map([...e].map((n) => [n, []]));
  for (let n = 0; n < r.client.length; n++) {
    let o = r.id.get(n);
    if (!t.has(o) || r.key.get(n) === Od) continue;
    let s = r.value.get(n);
    (l(s === m || oo(s), "only DELETED_VALUE and object references can be reference array items"),
      t.get(o).push(n));
  }
  return t;
}
function Oh(r, e, t) {
  let n = r.seq.get(e),
    o = r.seq.get(t);
  if (n < o) return -1;
  if (n > o) return 1;
  let i = r.client.get(e),
    s = r.client.get(t);
  return i < s ? -1 : i > s ? 1 : 0;
}
var _d = {
  description: "Migrates array of objects to invert index from position-keyed to id-keyed",
  migrate: Ah,
};
var W = class r {
  constructor(e, t) {
    u(this, "parentHistory", e);
    u(this, "parentOverrides", t);
  }
  clone() {
    let e = new Map();
    for (let [t, n] of this.parentOverrides) {
      let o = new Map();
      for (let [i, s] of n) {
        let a = new Map();
        for (let [c, d] of s) a.set(c, { ...d });
        o.set(i, a);
      }
      e.set(t, o);
    }
    return new r([...this.parentHistory], e);
  }
};
var _h = 1e3,
  Mh = 1e4,
  Dh = 512,
  io = _h,
  Bh = Dh,
  J = class {
    constructor(e) {
      u(this, "seqs", []);
      u(this, "idxs", []);
      u(this, "_maxSize", io);
      let t = e?.maxSize ?? io;
      this._maxSize = Li(t, io, Mh);
    }
    get maxSize() {
      return this._maxSize;
    }
    clear() {
      ((this.seqs = []), (this.idxs = []));
    }
    load(e, t) {
      let n = e.length === t.length && e.length <= this._maxSize;
      ((this.seqs = n ? e : []), (this.idxs = n ? t : []));
    }
    get(e) {
      let t = this.seqs.length;
      if (t === 0) return 0;
      let n = Ae(this.seqs, e, Md);
      return n < t && this.seqs[n] === e ? this.idxs[n] : 0;
    }
    add(e, t) {
      let n = Ae(this.seqs, e, Md);
      if (n < this.seqs.length && this.seqs[n] === e) {
        t < this.idxs[n] && ((this.idxs[n] = t), this.propagateLeftFrom(n));
        return;
      }
      if (this.maxSize > 0 && this.seqs.length >= this.maxSize) {
        let i = this.seqs[this.seqs.length - this.maxSize];
        if (i !== void 0 && i > e) return;
      }
      (this.seqs.splice(n, 0, e),
        this.idxs.splice(n, 0, t),
        n + 1 < this.idxs.length && (this.idxs[n] = Math.min(this.idxs[n], this.idxs[n + 1])),
        this.propagateLeftFrom(n),
        this.seqs.length > this.maxSize + Bh && this.trimToMaxSize());
    }
    trimToMaxSize() {
      if (this.maxSize) {
        let e = this.seqs.length - this.maxSize;
        e > 0 && (this.seqs.splice(0, e), this.idxs.splice(0, e));
      }
    }
    propagateLeftFrom(e) {
      let t = this.idxs[e];
      for (let n = e - 1; n >= 0 && !(this.idxs[n] <= t); n--) this.idxs[n] = t;
    }
    __snapshot() {
      return this.seqs.map((e, t) => ({ seq: e, idx: this.idxs[t] }));
    }
  };
function Md(r, e) {
  return r - e;
}
var P = class r {
  constructor(e = []) {
    u(this, "values", e);
  }
  get count() {
    return this.values.length;
  }
  add(e) {
    let t = Dd(this.values, e);
    return t >= 0 ? !1 : (this.values.splice(-(t + 1), 0, e), !0);
  }
  has(e) {
    return Dd(this.values, e) >= 0;
  }
  clone() {
    return new r([...this.values]);
  }
  copyIntoBitmap(e) {
    for (let t of this.values) e.add(t);
  }
  *[Symbol.iterator]() {
    yield* this.values;
  }
  serialize(e) {
    let t = new Uint16Array(this.values.length);
    for (let n = 0; n < t.length; ++n) t[n] = this.values[n];
    e.writeTypedArray(t);
  }
  deserialize(e) {
    l(this.values.length === 0, "ArrayContainer deserialize must be called with empty array");
    let t = e.readTypedArray(Uint16Array);
    for (let n = 0; n < t.length; ++n) this.values[n] = t[n];
  }
};
function Dd(r, e) {
  let t = 0,
    n = r.length - 1;
  for (; t <= n; ) {
    let o = (t + n) >>> 1,
      i = r[o];
    if (i < e) {
      t = o + 1;
      continue;
    }
    if (i > e) {
      n = o - 1;
      continue;
    }
    return o;
  }
  return -(t + 1);
}
var xt = 2048,
  j = class r {
    constructor(e = new Uint32Array(xt), t = 0) {
      u(this, "words", e);
      u(this, "_count", t);
    }
    get count() {
      return this._count;
    }
    add(e) {
      let t = e >>> 5,
        n = this.words[t],
        i = 1 << (e & 31);
      return n & i ? !1 : ((this.words[t] = n | i), (this._count += 1), !0);
    }
    has(e) {
      let t = e >>> 5,
        n = this.words[t],
        i = 1 << (e & 31);
      return !!(n & i);
    }
    clone() {
      return new r(this.words.slice(), this._count);
    }
    *[Symbol.iterator]() {
      for (let e = 0; e < this.words.length; e++) {
        let t = this.words[e] ?? 0,
          n = e << 5;
        for (; t !== 0; ) {
          let o = t & -t,
            i = 31 - Math.clz32(o);
          (yield n + i, (t &= t - 1));
        }
      }
    }
    copyIntoArray(e) {
      for (let t of this) e.values.push(t);
    }
    serialize(e) {
      (e.writeUint32(this.count), e.writeTypedArray(this.words));
    }
    deserialize(e) {
      (l(this.count === 0, "BitmapContainer deserialize should be called with an empty bitmap"),
        (this._count = e.readUint32()));
      let t = e.readTypedArray(Uint32Array);
      (l(t.length === xt, () => `unexpected bitmap word count: ${t.length}`), this.words.set(t));
    }
  };
var Ct = { Array: 0, Bitmap: 1 };
function Bd(r, e) {
  if (r instanceof P && e instanceof P) return Eh(r, e);
  if (r instanceof P && e instanceof j) return zh(r, e);
  if (r instanceof j && e instanceof P) return Ph(r, e);
  if (r instanceof j && e instanceof j) return Lh(r, e);
}
function Eh(r, e) {
  let t = [],
    n = r.values,
    o = e.values,
    i = 0,
    s = 0;
  for (; i < n.length && s < o.length; ) {
    let a = n[i],
      c = o[s];
    if (a === c) {
      ((i += 1), (s += 1));
      continue;
    }
    if (a < c) {
      (t.push(a), (i += 1));
      continue;
    }
    s += 1;
  }
  for (; i < n.length; i++) t.push(n[i]);
  if (t.length !== 0) return new P(t);
}
function zh(r, e) {
  let t = r.values.filter((n) => !e.has(n));
  if (t.length !== 0) return new P(t);
}
function Ph(r, e) {
  let t = r.words.slice(),
    n = r.count;
  for (let o of e.values) {
    let i = o >>> 5,
      s = 1 << (o & 31),
      a = t[i];
    a & s && ((t[i] = a & ~s), (n -= 1));
  }
  if (n !== 0) return new j(t, n);
}
function Lh(r, e) {
  let t = new Uint32Array(xt),
    n = 0;
  for (let o = 0; o < xt; o++) {
    let i = (r.words[o] ?? 0) & ~(e.words[o] ?? 0);
    ((t[o] = i), (n += qh(i)));
  }
  if (n !== 0) return new j(t, n);
}
function qh(r) {
  let e = r >>> 0,
    t = 0;
  for (; e !== 0; ) ((e &= e - 1), (t += 1));
  return t;
}
var Ed = 4096,
  so = 16,
  zd = 65535,
  Rt = class r {
    constructor() {
      u(this, "containers", new Map());
      u(this, "_count", 0);
    }
    get count() {
      return this._count;
    }
    get keys() {
      return Array.from(this.containers.keys()).sort((e, t) => e - t);
    }
    add(e) {
      At(e, "value");
      let t = e >>> so,
        n = e & zd,
        o = this.containers.get(t);
      return o
        ? o.add(n)
          ? ((this._count += 1),
            o instanceof P && o.count > Ed && this.containers.set(t, $h(o)),
            !0)
          : !1
        : (this.containers.set(t, new P([n])), (this._count += 1), !0);
    }
    has(e) {
      At(e, "value");
      let t = e >>> so,
        n = e & zd,
        o = this.containers.get(t);
      return o ? o.has(n) : !1;
    }
    andNot(e) {
      let t = new r();
      for (let n of this.keys) {
        let o = this.containers.get(n);
        if (!o) continue;
        let i = e.containers.get(n);
        if (!i) {
          let a = o.clone();
          (t.containers.set(n, a), (t._count += a.count));
          continue;
        }
        let s = Bd(o, i);
        s &&
          (s instanceof j && s.count <= Ed && (s = Kh(s)),
          t.containers.set(n, s),
          (t._count += s.count));
      }
      return t;
    }
    clone() {
      let e = new r();
      for (let t of this.keys) {
        let n = this.containers.get(t);
        n && e.containers.set(t, n.clone());
      }
      return ((e._count = this._count), e);
    }
    *[Symbol.iterator]() {
      for (let e of this.keys) {
        let t = this.containers.get(e);
        if (t) for (let n of t) yield (((e << so) >>> 0) + n) >>> 0;
      }
    }
    serialize(e) {
      (e.writeUint32(this._count), e.writeUint32(this.containers.size));
      for (let t of this.keys) {
        let n = this.containers.get(t);
        (l(n, () => `missing container for key ${t}`),
          e.writeUint16(t),
          e.writeUint8(n instanceof P ? Ct.Array : Ct.Bitmap),
          n.serialize(e));
      }
    }
    deserialize(e) {
      (l(this.containers.size === 0, "RoaringBitmap32 deserialize must be called when empty"),
        (this._count = e.readUint32()));
      let t = e.readUint32();
      for (let n = 0; n < t; n++) {
        let o = e.readUint16(),
          i = e.readUint8(),
          s;
        (i === Ct.Array ? (s = new P()) : i === Ct.Bitmap && (s = new j()),
          l(s, () => `invalid container type: ${i}`),
          s.deserialize(e),
          this.containers.set(o, s));
      }
    }
  };
function $h(r) {
  let e = new j();
  return (r.copyIntoBitmap(e), e);
}
function Kh(r) {
  let e = new P();
  return (r.copyIntoArray(e), e);
}
var Uh = 4294967295;
function At(r, e) {
  l(
    Number.isInteger(r) && r >= 0 && r <= Uh,
    () => `${e} must be an unsigned 32-bit integer, received: ${r}`
  );
}
var Nt = class r {
  constructor() {
    u(this, "seqMapByClient", new Map());
    u(this, "_count", 0);
  }
  get count() {
    return this._count;
  }
  add(e, t) {
    (At(e, "client"), Pd(t, "seq"));
    let { seqHigh: n, seqLow: o } = Ld(t),
      i = this.seqMapByClient.get(e);
    i || ((i = new Map()), this.seqMapByClient.set(e, i));
    let s = i.get(n);
    s || ((s = new Rt()), i.set(n, s));
    let a = s.add(o);
    return (a && (this._count += 1), a);
  }
  has(e, t) {
    (At(e, "client"), Pd(t, "seq"));
    let { seqHigh: n, seqLow: o } = Ld(t),
      i = this.seqMapByClient.get(e);
    if (!i) return !1;
    let s = i.get(n);
    return s ? s.has(o) : !1;
  }
  hasClient(e) {
    return this.seqMapByClient.has(e);
  }
  andNot(e) {
    let t = new r();
    for (let n of ue(this.seqMapByClient)) {
      let o = this.seqMapByClient.get(n);
      if (!o) continue;
      let i = e.seqMapByClient.get(n),
        s = new Map(),
        a = 0;
      for (let c of ue(o)) {
        let d = o.get(c);
        if (!d) continue;
        let f = i?.get(c),
          h = f ? d.andNot(f) : d.clone();
        h.count <= 0 || (s.set(c, h), (a += h.count));
      }
      a > 0 && (t.seqMapByClient.set(n, s), (t._count += a));
    }
    return t;
  }
  *[Symbol.iterator]() {
    for (let e of ue(this.seqMapByClient)) {
      let t = this.seqMapByClient.get(e);
      if (t)
        for (let n of ue(t)) {
          let o = t.get(n);
          if (o) for (let i of o) yield { client: e, seq: Fh(n, i) };
        }
    }
  }
  toArray() {
    return [...this];
  }
  serialize(e) {
    (e.writeFloat64(this._count), e.writeFloat64(this.seqMapByClient.size));
    let t = ue(this.seqMapByClient);
    for (let n of t) {
      e.writeUint32(n);
      let o = this.seqMapByClient.get(n);
      (l(o, "seqMap must exist"), e.writeUint32(o.size));
      let i = ue(o);
      for (let s of i) {
        e.writeUint32(s);
        let a = o.get(s);
        (l(a, "seqLowBitmap must exist"), a.serialize(e));
      }
    }
  }
  deserialize(e) {
    (l(this.seqMapByClient.size === 0, "TimestampSet deserialize must be called when empty"),
      (this._count = e.readFloat64()));
    let t = e.readFloat64();
    for (let n = 0; n < t; n++) {
      let o = e.readUint32(),
        i = new Map(),
        s = e.readUint32();
      for (let a = 0; a < s; a++) {
        let c = e.readUint32(),
          d = new Rt();
        (d.deserialize(e), i.set(c, d));
      }
      this.seqMapByClient.set(o, i);
    }
  }
};
function ue(r) {
  return Array.from(r.keys()).sort((e, t) => e - t);
}
var ao = 4294967296;
function Pd(r, e) {
  l(
    Number.isInteger(r) && r >= 0 && r <= Number.MAX_SAFE_INTEGER,
    () => `${e} must be a safe unsigned integer, received: ${r}`
  );
}
function Ld(r) {
  let e = Math.trunc(r / ao),
    t = r % ao;
  return { seqHigh: e, seqLow: t };
}
function Fh(r, e) {
  return r * ao + e;
}
function Kd(r) {
  let e = new Map();
  for (let { client: t, seq: n } of r) {
    let o = e.get(t);
    (o || ((o = new Set()), e.set(t, o)), o.add(n));
  }
  return e;
}
var H = class r {
    constructor() {
      u(this, "timestamps");
      u(this, "clientState", new Map());
      this.timestamps = new Nt();
    }
    get count() {
      return this.timestamps.count;
    }
    addTimestamp(e, t) {
      return this.timestamps.add(e, t);
    }
    updateClientState(e, t, n) {
      let o = this.clientState.get(e);
      o
        ? ((o.maxSeq = Math.max(t, o.maxSeq)), (o.batch = Math.max(n, o.batch)))
        : ((o = { maxSeq: t, batch: n }), this.clientState.set(e, o));
    }
    copyClientStateFrom(e) {
      for (let [t, n] of e.clientState) this.updateClientState(t, n.maxSeq, n.batch);
    }
    hasTimestamp(e, t) {
      return this.timestamps.has(e, t);
    }
    hasClient(e) {
      return this.timestamps.hasClient(e);
    }
    getBatch(e) {
      return this.clientState.get(e)?.batch;
    }
    getMaxSeq(e) {
      return this.clientState.get(e)?.maxSeq;
    }
    toMaxSeqArray() {
      let e = [];
      for (let t of ue(this.clientState)) {
        let n = this.clientState.get(t).maxSeq;
        e.push([t, n]);
      }
      return e;
    }
    compare(e) {
      return {
        extra: this.timestamps.andNot(e.timestamps).toArray(),
        missing: e.timestamps.andNot(this.timestamps).toArray(),
      };
    }
    serialize(e) {
      (e.writeUint32(qd),
        e.writeUint16($d),
        this.timestamps.serialize(e),
        e.writeUint32(this.clientState.size));
      for (let t of ue(this.clientState)) {
        let n = this.clientState.get(t);
        (e.writeUint32(t), e.writeFloat64(n.batch), e.writeFloat64(n.maxSeq));
      }
    }
    deserialize(e) {
      (l(this.timestamps.count === 0, "Manifest deserialize must be called when empty"),
        l(e.readUint32() === qd, "Manifest magic mismatch"),
        l(e.readUint16() === $d, "Manifest version mismatch"),
        (this.timestamps = new Nt()),
        this.timestamps.deserialize(e),
        this.clientState.clear());
      let t = e.readUint32();
      for (let n = 0; n < t; n++) {
        let o = e.readUint32(),
          i = e.readFloat64(),
          s = e.readFloat64();
        this.clientState.set(o, { batch: i, maxSeq: s });
      }
    }
    toBuffer() {
      let e = new D();
      return (this.serialize(e), e.getBuffer());
    }
    static fromBuffer(e) {
      let t = new _(e),
        n = new r();
      return (n.deserialize(t), n);
    }
  },
  qd = 1414743629,
  $d = 1;
var Ud = ["client", "seq", "batch", "id", "key", "value", "user"];
var co = class {
  encode(e, t) {
    let n = e.main;
    (this.writeSection(1296389185, t, (i) => {
      Gh(n.metadata, i);
    }),
      this.writeSection(1296125510, t, (i) => {
        Jh(n.manifest, i);
      }),
      this.writeSection(1129270355, t, (i) => {
        this.encodeColumns(n.columns, i);
      }));
    let o = n.hierarchyData;
    (o &&
      this.writeSection(1212761426, t, (i) => {
        Vh(o, i);
      }),
      this.writeSection(1296649816, t, (i) => {
        jh(n.minIndexCache, i);
      }));
  }
  decode(e, t) {
    let n = e.main;
    for (; !t.endOfFile(); ) {
      let o = t.readUint32(),
        i = t.readFloat64(),
        s = new _(t.readBytes(i));
      switch (o) {
        case 1129270355:
          this.decodeColumns(n.columns, s);
          break;
        case 1296649816: {
          n.minIndexCache = Hh(s);
          break;
        }
        case 1212761426:
          n.hierarchyData = Zh(s);
          break;
        case 1296125510:
          n.manifest = Yh(s);
          break;
        case 1296389185:
          n.metadata = Wh(s);
          break;
        default:
          break;
      }
    }
  }
  fromSerializableRow(e) {
    let t = A(e.value) ? N(e.value) : e.value;
    return {
      client: e.client,
      seq: e.seq,
      id: e.id,
      key: e.key,
      value: t,
      user: e.user,
      batch: e.batch ?? 0,
    };
  }
  toSerializableRow(e) {
    let t = e.value;
    return (
      T(t) && (t = k(t)),
      { client: e.client, seq: e.seq, id: e.id, key: e.key, value: t, user: e.user, batch: e.batch }
    );
  }
  encodeColumns(e, t) {
    t.writeUint32(Ud.length);
    for (let n of Ud) {
      let o = e[n];
      (t.writeString(n), t.writeString(o.type), o.serialize(t));
    }
  }
  decodeColumns(e, t) {
    let n = t.readUint32();
    for (let o = 0; o < n; o++) {
      let i = t.readString(),
        s = e[i];
      l(s, () => `Column ${i} not found`);
      let a = t.readString();
      if (a !== s.type)
        throw new Error(`Column type does not match: ${a} (actual) != ${s.type} (expected)`);
      s.deserialize(t);
    }
  }
  writeSection(e, t, n) {
    let o = new D();
    n(o);
    let i = o.getBuffer();
    (t.writeUint32(e), t.writeFloat64(i.length), t.writeBytes(i));
  }
};
function jh(r, e) {
  let t = r;
  (e.writeTypedArray(new Float64Array(t.seqs)),
    e.writeTypedArray(new Float64Array(t.idxs)),
    e.writeUint32(t.maxSize ?? 0));
}
function Hh(r) {
  let e = Array.from(r.readTypedArray(Float64Array)),
    t = Array.from(r.readTypedArray(Float64Array)),
    n = r.readUint32(),
    o = new J({ maxSize: n });
  return (o.load(e, t), o);
}
function Vh(r, e) {
  let t = JSON.stringify(
    [...r.parentOverrides].map(([n, o]) => [
      n,
      [...o].map(([i, s]) => [
        i,
        Object.fromEntries(
          [...s].map(([a, c]) => {
            let d = { ...c, rowIdx: c.rowIdx };
            return (
              T(d.parentFrom) && (d.parentFrom = k(d.parentFrom)),
              T(d.parentTo) && (d.parentTo = k(d.parentTo)),
              [a, d]
            );
          })
        ),
      ]),
    ])
  );
  (e.writeString(t), e.writeTypedArray(new Uint32Array(r.parentHistory)));
}
function Zh(r) {
  let e = JSON.parse(r.readString()),
    t = new Map();
  for (let [o, i] of e) {
    let s = new Map();
    for (let [a, c] of i) {
      let d = new Map();
      for (let f in c) {
        let h = c[f];
        (A(h.parentFrom) && (h.parentFrom = N(h.parentFrom)),
          A(h.parentTo) && (h.parentTo = N(h.parentTo)),
          d.set(Number(f), h));
      }
      s.set(a, d);
    }
    t.set(o, s);
  }
  let n = Array.from(r.readTypedArray(Uint32Array));
  return new W(n, t);
}
function Gh(r, e) {
  e.writeFloat64(r.seq);
}
function Wh(r) {
  return { seq: r.readFloat64(), compactedAt: 0, compactedLength: 0 };
}
function Jh(r, e) {
  r.serialize(e);
}
function Yh(r) {
  let e = new H();
  return (e.deserialize(r), e);
}
var Fd = { description: "Adds named sections to binary documents", codec: new co(), migrate() {} };
var je = class {
    constructor() {
      u(this, "values", new be(Float64Array));
    }
    get type() {
      return "DeltaEncodedSeqColumn(F64)";
    }
    get length() {
      return this.values.length;
    }
    add(e) {
      return this.values.add(e);
    }
    get(e) {
      return this.values.get(e);
    }
    _set(e, t) {
      this.values._set(e, t);
    }
    slice(e, t) {
      return this.values.slice(e, t);
    }
    serialize(e) {
      e.writeVarUint(this.values.length);
      let t = 0;
      for (let n of this.values.readSlices())
        for (let o = 0; o < n.length; o++) {
          let i = n[o];
          (e.writeVarUint(Xh(i - t)), (t = i));
        }
    }
    deserialize(e) {
      let t = e.readVarUint(),
        n = 0;
      for (let o of this.values.writeSlices(t))
        for (let i = 0; i < o.length; i++) {
          let s = n + Qh(e.readVarUint());
          ((o[i] = s), (n = s));
        }
    }
  },
  jd = 2 ** 52;
function Xh(r) {
  return (
    l(r >= -jd && r <= jd, () => `seq delta out of zigzag-safe range: ${r}`),
    r >= 0 ? r * 2 : -r * 2 - 1
  );
}
function Qh(r) {
  return r % 2 === 0 ? r / 2 : -(r + 1) / 2;
}
var kt = 16,
  uo = {
    description: "Convert the seq column to delta encoding on every branch",
    migrate: (r) => {
      for (let e of r.branches.values()) {
        let t = e.columns.seq,
          n = new je();
        for (let o = 0; o < t.length; o++) n.add(t.get(o));
        e.columns.seq = n;
      }
    },
  };
var Hd = {
  forVersion(r) {
    return r >= kt ? new je() : new be(Float64Array);
  },
};
var lo = class {
    constructor(e) {
      u(this, "client", G.withBuckets({ buffer: Uint32Array }).create());
      u(this, "seq");
      u(this, "batch", G.withBuckets({ buffer: Uint32Array }).create());
      u(this, "id", new se());
      u(this, "key", new se());
      u(this, "value", new se());
      u(this, "user", G.withBuckets({ buffer: Uint8Array }).create());
      this.seq = Hd.forVersion(e);
    }
    get length() {
      return this.client.length;
    }
    releaseLookups() {
      for (let e of [this.client, this.seq, this.batch, this.id, this.key, this.value, this.user])
        e.releaseLookup?.();
    }
  },
  E = class {
    constructor(e, t, n) {
      u(this, "codec", e);
      u(this, "columns");
      u(this, "minIndexCache", new J({ maxSize: 1e3 }));
      u(this, "hierarchyData");
      u(this, "manifest", new H());
      u(this, "metadata");
      ((this.columns = new lo(n)),
        (this.metadata = { seq: 1, branchId: t, compactedAt: 0, compactedLength: 0 }));
    }
    addRows(e) {
      for (let t of e) this.addRow(t);
    }
    addRow(e) {
      return (
        this.columns.seq.add(e.seq),
        this.columns.id.add(e.id),
        this.columns.key.add(e.key),
        this.columns.value.add(e.value),
        this.columns.user.add(e.user),
        this.columns.batch.add(e.batch),
        this.columns.client.add(e.client)
      );
    }
    addSerializableRow(e) {
      let t = this.codec;
      this.addRow(t.fromSerializableRow(e));
    }
    addSerializableRows(e) {
      for (let t of e) this.addSerializableRow(t);
    }
    getRowInternal(e) {
      return {
        client: this.columns.client.get(e),
        seq: this.columns.seq.get(e),
        id: this.columns.id.get(e),
        key: this.columns.key.get(e),
        value: this.columns.value.get(e),
        user: this.columns.user.get(e),
        batch: this.columns.batch.get(e),
      };
    }
    getRow(e) {
      if (e < 0 || e >= this.columns.client.length) throw new Error("Index out of bounds");
      return this.getRowInternal(e);
    }
    getRows(e = 0, t = this.columns.client.length) {
      if (e < 0 || t > this.columns.client.length || e > t) throw new Error("Index out of bounds");
      let n = Array.from({ length: t - e });
      for (let o = e; o < t; o++) n[o - e] = this.getRowInternal(o);
      return n;
    }
    getSerializableRow(e) {
      let t = this.codec;
      if (e < 0 || e >= this.columns.client.length) throw new Error("Index out of bounds");
      let n = this.getRowInternal(e);
      return t.toSerializableRow(n);
    }
    getSerializableRows(e = 0, t = this.columns.client.length) {
      let n = this.codec;
      if (e < 0 || t > this.columns.client.length || e > t) throw new Error("Index out of bounds");
      let o = Array.from({ length: t - e });
      for (let i = e; i < t; ++i) {
        let s = this.getRowInternal(i);
        o[i - e] = n.toSerializableRow(s);
      }
      return o;
    }
    getSerializableRowsAfterManifest(e) {
      let t = this.codec,
        n = [];
      for (let o = 0; o < this.columns.client.length; o++) {
        let i = this.columns.seq.get(o),
          s = this.columns.client.get(o),
          a = e.getMaxSeq(s) ?? -1;
        if (i <= a) continue;
        let c = t.toSerializableRow(this.getRowInternal(o));
        n.push(c);
      }
      return n;
    }
    buildManifest() {
      if (!(this.manifest.count > 0))
        for (let e = 0; e < this.columns.client.length; e++)
          this.manifest.addTimestamp(this.columns.client.get(e), this.columns.seq.get(e));
    }
    compare(e) {
      return this.manifest.compare(e);
    }
    getExtraSerializableRows(e) {
      let t = this.compare(e);
      if (!t.extra.length) return [];
      let n = Kd(t.extra),
        o = [];
      for (let i = 0; i < this.columns.client.length; i++) {
        let s = n.get(this.columns.client.get(i));
        !s || !s.has(this.columns.seq.get(i)) || o.push(this.getSerializableRow(i));
      }
      return o;
    }
  };
var Vd = ["client", "seq", "batch", "id", "key", "value", "user"];
var ho = class {
  encode(e, t) {
    let n = e.branches;
    t.writeUint32(n.size);
    for (let [o, i] of n) {
      t.writeString(o);
      let s = new D();
      (this.writeSection(1296389185, s, (d) => {
        of(i.metadata, d);
      }),
        this.writeSection(1296125510, s, (d) => {
          af(i.manifest, d);
        }),
        this.writeSection(1129270355, s, (d) => {
          this.encodeColumns(i.columns, d);
        }));
      let a = i.hierarchyData;
      (a &&
        this.writeSection(1212761426, s, (d) => {
          rf(a, d);
        }),
        this.writeSection(1296649816, s, (d) => {
          ef(i.minIndexCache, d);
        }));
      let c = s.getBuffer();
      (t.writeFloat64(c.length), t.writeBytes(c));
    }
  }
  decode(e, t) {
    let n = t.readUint32(),
      o = new Map();
    for (let i = 0; i < n; i++) {
      let s = t.readString(),
        a = new E(this, s, e.version),
        c = t.readFloat64(),
        d = new _(t.readBytes(c));
      for (; !d.endOfFile(); ) {
        let f = d.readUint32(),
          h = d.readFloat64(),
          p = new _(d.readBytes(h));
        switch (f) {
          case 1129270355:
            this.decodeColumns(a.columns, p);
            break;
          case 1296649816:
            a.minIndexCache = tf(p);
            break;
          case 1212761426:
            a.hierarchyData = nf(p);
            break;
          case 1296125510:
            a.manifest = cf(p);
            break;
          case 1296389185:
            a.metadata = sf(p);
            break;
          default:
            break;
        }
      }
      ((a.metadata.branchId = a.metadata.branchId ?? s), o.set(s, a));
    }
    ((e.branches = o), e.branches.has(x) || e.branches.set(x, new E(this, x, e.version)));
  }
  fromSerializableRow(e) {
    let t = A(e.value) ? N(e.value) : e.value;
    return {
      client: e.client,
      seq: e.seq,
      id: e.id,
      key: e.key,
      value: t,
      user: e.user,
      batch: e.batch ?? 0,
    };
  }
  toSerializableRow(e) {
    let t = e.value;
    return (
      T(t) && (t = k(t)),
      { client: e.client, seq: e.seq, id: e.id, key: e.key, value: t, user: e.user, batch: e.batch }
    );
  }
  encodeColumns(e, t) {
    t.writeUint32(Vd.length);
    for (let n of Vd) {
      let o = e[n];
      (t.writeString(n), t.writeString(o.type), o.serialize(t));
    }
  }
  decodeColumns(e, t) {
    let n = t.readUint32();
    for (let o = 0; o < n; o++) {
      let i = t.readString(),
        s = e[i];
      l(s, () => `Column ${i} not found`);
      let a = t.readString();
      if (a !== s.type)
        throw new Error(`Column type does not match: ${a} (actual) != ${s.type} (expected)`);
      s.deserialize(t);
    }
  }
  writeSection(e, t, n) {
    let o = new D();
    n(o);
    let i = o.getBuffer();
    (t.writeUint32(e), t.writeFloat64(i.length), t.writeBytes(i));
  }
};
function ef(r, e) {
  (e.writeTypedArray(new Float64Array(r.seqs)),
    e.writeTypedArray(new Float64Array(r.idxs)),
    e.writeUint32(r.maxSize ?? 0));
}
function tf(r) {
  let e = Array.from(r.readTypedArray(Float64Array)),
    t = Array.from(r.readTypedArray(Float64Array)),
    n = r.readUint32(),
    o = new J({ maxSize: n });
  return (o.load(e, t), o);
}
function rf(r, e) {
  let t = JSON.stringify(
    [...r.parentOverrides].map(([n, o]) => [
      n,
      [...o].map(([i, s]) => [
        i,
        Object.fromEntries(
          [...s].map(([a, c]) => {
            let d = { ...c, rowIdx: c.rowIdx };
            return (
              T(d.parentFrom) && (d.parentFrom = k(d.parentFrom)),
              T(d.parentTo) && (d.parentTo = k(d.parentTo)),
              [a, d]
            );
          })
        ),
      ]),
    ])
  );
  (e.writeString(t), e.writeTypedArray(new Uint32Array(r.parentHistory)));
}
function nf(r) {
  let e = JSON.parse(r.readString()),
    t = new Map();
  for (let [o, i] of e) {
    let s = new Map();
    for (let [a, c] of i) {
      let d = new Map();
      for (let f in c) {
        let h = c[f];
        (A(h.parentFrom) && (h.parentFrom = N(h.parentFrom)),
          A(h.parentTo) && (h.parentTo = N(h.parentTo)),
          d.set(Number(f), h));
      }
      s.set(a, d);
    }
    t.set(o, s);
  }
  let n = Array.from(r.readTypedArray(Uint32Array));
  return new W(n, t);
}
function of(r, e) {
  (e.writeFloat64(r.seq), e.writeString(r.branchId ?? x));
}
function sf(r) {
  let e = r.readFloat64(),
    t = r.readString();
  return { seq: e, branchId: t, compactedAt: 0, compactedLength: 0 };
}
function af(r, e) {
  r.serialize(e);
}
function cf(r) {
  let e = new H();
  return (e.deserialize(r), e);
}
var Zd = { description: "Stores table data by branches", codec: new ho(), migrate() {} };
var Gd = ["client", "seq", "batch", "id", "key", "value", "user"];
var fo = class {
  encode(e, t) {
    let n = e.branches;
    t.writeUint32(n.size);
    for (let [o, i] of n) {
      t.writeString(o);
      let s = t.byteOffset;
      t.writeFloat64(0);
      let a = t.byteOffset;
      (t.withAlignmentOrigin(a, () => {
        (this.writeSection(1296389185, t, (d) => {
          ff(i.metadata, d);
        }),
          this.writeSection(1296125510, t, (d) => {
            mf(i.manifest, d);
          }),
          this.writeSection(1129270355, t, (d) => {
            this.encodeColumns(i.columns, d);
          }));
        let c = i.hierarchyData;
        (c &&
          this.writeSection(1212761426, t, (d) => {
            lf(c, d);
          }),
          this.writeSection(1296649816, t, (d) => {
            df(i.minIndexCache, d);
          }));
      }),
        t.writeFloat64At(s, t.byteOffset - a));
    }
  }
  decode(e, t) {
    let n = t.readUint32(),
      o = new Map();
    for (let i = 0; i < n; i++) {
      let s = t.readString(),
        a = new E(this, s, e.version),
        c = t.readFloat64(),
        d = new _(t.readBytes(c));
      for (; !d.endOfFile(); ) {
        let f = d.readUint32(),
          h = d.readFloat64(),
          p = new _(d.readBytes(h));
        switch (f) {
          case 1129270355:
            this.decodeColumns(a.columns, p, s);
            break;
          case 1296649816:
            a.minIndexCache = uf(p);
            break;
          case 1212761426:
            a.hierarchyData = hf(p);
            break;
          case 1296125510:
            a.manifest = yf(p);
            break;
          case 1296389185:
            a.metadata = pf(p);
            break;
          default:
            break;
        }
      }
      ((a.metadata.branchId = a.metadata.branchId ?? s), o.set(s, a));
    }
    ((e.branches = o), e.branches.has(x) || e.branches.set(x, new E(this, x, e.version)));
  }
  fromSerializableRow(e) {
    let t = A(e.value) ? N(e.value) : e.value;
    return {
      client: e.client,
      seq: e.seq,
      id: e.id,
      key: e.key,
      value: t,
      user: e.user,
      batch: e.batch ?? 0,
    };
  }
  toSerializableRow(e) {
    let t = e.value;
    return (
      T(t) && (t = k(t)),
      { client: e.client, seq: e.seq, id: e.id, key: e.key, value: t, user: e.user, batch: e.batch }
    );
  }
  encodeColumns(e, t) {
    t.writeUint32(Gd.length);
    for (let n of Gd) {
      let o = e[n];
      (t.writeString(n), t.writeString(o.type), o.serialize(t));
    }
  }
  decodeColumns(e, t, n) {
    let o = t.readUint32();
    for (let i = 0; i < o; i++) {
      let s = t.readString(),
        a = e[s];
      l(a, () => `Column ${s} not found`);
      let c = t.readString();
      if (c !== a.type)
        throw new Error(
          `Column type does not match in branch "${n}": ${c} (actual) != ${a.type} (expected)`
        );
      a.deserialize(t);
    }
  }
  writeSection(e, t, n) {
    t.writeUint32(e);
    let o = t.byteOffset;
    t.writeFloat64(0);
    let i = t.byteOffset;
    (t.withAlignmentOrigin(i, () => {
      n(t);
    }),
      t.writeFloat64At(o, t.byteOffset - i));
  }
};
function df(r, e) {
  (r.trimToMaxSize(),
    e.writeTypedArray(new Float64Array(r.seqs)),
    e.writeTypedArray(new Float64Array(r.idxs)),
    e.writeUint32(r.maxSize ?? 0));
}
function uf(r) {
  let e = Array.from(r.readTypedArray(Float64Array)),
    t = Array.from(r.readTypedArray(Float64Array)),
    n = r.readUint32(),
    o = new J({ maxSize: n });
  return (o.load(e, t), o);
}
function lf(r, e) {
  let t = JSON.stringify(
    [...r.parentOverrides].map(([n, o]) => [
      n,
      [...o].map(([i, s]) => [
        i,
        Object.fromEntries(
          [...s].map(([a, c]) => {
            let d = { ...c, rowIdx: c.rowIdx };
            return (
              T(d.parentFrom) && (d.parentFrom = k(d.parentFrom)),
              T(d.parentTo) && (d.parentTo = k(d.parentTo)),
              [a, d]
            );
          })
        ),
      ]),
    ])
  );
  (e.writeString(t), e.writeTypedArray(new Uint32Array(r.parentHistory)));
}
function hf(r) {
  let e = JSON.parse(r.readString()),
    t = new Map();
  for (let [o, i] of e) {
    let s = new Map();
    for (let [a, c] of i) {
      let d = new Map();
      for (let f in c) {
        let h = c[f];
        (A(h.parentFrom) && (h.parentFrom = N(h.parentFrom)),
          A(h.parentTo) && (h.parentTo = N(h.parentTo)),
          d.set(Number(f), h));
      }
      s.set(a, d);
    }
    t.set(o, s);
  }
  let n = Array.from(r.readTypedArray(Uint32Array));
  return new W(n, t);
}
function ff(r, e) {
  (e.writeFloat64(r.seq),
    e.writeString(r.branchId ?? x),
    e.writeFloat64(r.compactedAt),
    e.writeFloat64(r.compactedLength));
}
function pf(r) {
  let e = r.readFloat64(),
    t = r.readString(),
    n = r.readFloat64(),
    o = r.readFloat64();
  return { seq: e, branchId: t, compactedAt: n, compactedLength: o };
}
function mf(r, e) {
  r.serialize(e);
}
function yf(r) {
  let e = new H();
  return (e.deserialize(r), e);
}
function gf(r) {
  let e = Date.now();
  for (let t of r.branches.values())
    ((t.metadata.compactedAt = e), (t.metadata.compactedLength = t.columns.length));
}
var Wd = {
  description: "Adds compactedAt and compactedLength to branch metadata",
  codec: new fo(),
  migrate: gf,
};
var Jd = {
  description: "Clear caches to fix wrong hierarchy data",
  migrate: (r) => {
    for (let e of r.branches.values())
      ((e.hierarchyData = void 0),
        (e.minIndexCache = new J({ maxSize: 1e3 })),
        (e.metadata.seq = 0),
        (e.manifest = new H()));
  },
};
var Yd = {
  description: "Merge double-escaped __deleted keys back into _deleted",
  migrate: (r) => {
    for (let e of r.branches.values()) {
      let t = e.columns.id,
        n = e.columns.key,
        o = e.columns.value,
        i = e.columns.seq,
        s = e.columns.client,
        a = new Set();
      for (let d = 0; d < n.length; d++)
        if (n.get(d) === "__deleted") {
          let h = t.get(d);
          if (!h.includes("replicaInfo.overrides")) continue;
          a.add(h);
        }
      let c = new Map();
      for (let d = 0; d < n.length; d++) {
        let f = t.get(d);
        if (a.has(f)) {
          let h = n.get(d);
          if (h === "_deleted") {
            let p = c.get(f);
            p === void 0 && ((p = {}), c.set(f, p));
            let g = p._deleted;
            (g === void 0 || Ne(i.get(d), s.get(d), i.get(g.row), s.get(g.row))) &&
              (p._deleted = { row: d, value: o.get(d) });
          } else if (h === "__deleted") {
            let p = c.get(f);
            p === void 0 && ((p = {}), c.set(f, p));
            let g = p.__deleted;
            ((g === void 0 || Ne(i.get(d), s.get(d), i.get(g.row), s.get(g.row))) &&
              (p.__deleted = { row: d, value: o.get(d) }),
              e.columns.key._set(d, "_deleted"));
          }
        }
      }
      for (let d of c.values()) {
        let f = d.__deleted;
        if (f !== void 0 && d._deleted !== void 0) {
          let h = d._deleted;
          if (Array.isArray(f.value) && Array.isArray(h.value)) {
            let p = Array.from(new Set([...f.value, ...h.value]));
            (e.columns.value._set(h.row, p), e.columns.value._set(f.row, p));
          } else
            Array.isArray(f.value)
              ? e.columns.value._set(h.row, f.value)
              : Array.isArray(h.value)
                ? e.columns.value._set(f.row, h.value)
                : (e.columns.value._set(f.row, m), e.columns.value._set(h.row, m));
        }
      }
    }
  },
};
var Xd = { migrate() {}, description: "Dummy migration. Does nothing" };
var He = {
  m1_2: td,
  m2_3: od,
  m3_4: yd,
  m4_5: bd,
  m5_6: Cd,
  m6_7: kd,
  m7_8: Td,
  m8_9: _d,
  m9_10: Xd,
  m10_11: Fd,
  m11_12: Zd,
  m12_13: Wd,
  m13_14: Jd,
  m14_15: Yd,
  m15_16: uo,
};
l(
  He[`m${kt - 1}_${kt}`] === uo,
  "Delta seq migration not registered at the DELTA_SEQ_SCHEMA_VERSION boundary"
);
var Se = Object.keys(He).reduce((r, e) => {
  let [, t] = e.split("_");
  l(typeof t == "string", () => `Invalid migration key: ${e}`);
  let n = Number.parseInt(t, 10);
  return (l(Number.isFinite(n), () => `Invalid migration version: ${e}`), Math.max(r, n));
}, Number.NEGATIVE_INFINITY);
l(Number.isFinite(Se), "No migrations found");
var Qd = "FRAMERCRDT";
function Tt(r) {
  let e = r.readString();
  return (l(e === Qd, () => `Not a framer document: ${e}`), { version: r.readUint16() });
}
function Ot(r, e) {
  (e.writeString(Qd), e.writeUint16(r));
}
function dr(r, e) {
  let t = `m${r}_${e}`;
  return (l(He[t], () => `Migration from ${r} to ${e} does not exist`), He[t]);
}
function Ve(r, e = 1) {
  for (let t = Math.max(r, 2); t > e; --t) {
    let n = dr(t - 1, t);
    if (n.codec) return n.codec;
  }
}
var ur = class ur {
  constructor(e = Se) {
    u(this, "version", e);
    u(this, "branches");
    u(this, "codec");
    let t = Ve(e);
    (l(t, () => `Codec not found for version ${e}`),
      (this.codec = t),
      (this.branches = new Map([[x, new E(this.codec, x, e)]])));
  }
  getBranch(e) {
    let t = this.branches.get(e);
    return (l(t, () => `Branch ${e} does not exist`), t);
  }
  getOrCreateBranch(e) {
    let t = this.branches.get(e);
    return (t || ((t = new E(this.codec, e, this.version)), this.branches.set(e, t)), t);
  }
  get main() {
    return this.getBranch(x);
  }
  addSerializableRows(e) {
    for (let t of e) this.getOrCreateBranch(t.branchId ?? x).addSerializableRow(t);
  }
  releaseColumnLookups() {
    for (let e of this.branches.values()) e.columns.releaseLookups();
  }
  toBuffer() {
    let e = new D();
    return (Ot(this.version, e), this.codec.encode(this, e), e.getBuffer());
  }
  async writeToStream(e) {
    let t = new D();
    return (Ot(this.version, t), this.codec.encode(this, t), t.writeToStream(e));
  }
  static loadVersionFromBuffer(e) {
    let t = new _(e),
      { version: n } = Tt(t);
    return n;
  }
  static fromBuffer(e) {
    let t = new _(e),
      { version: n } = Tt(t),
      o = new ur(n);
    return (o.decode(t), o);
  }
  decode(e) {
    this.codec.decode(this, e);
  }
};
u(ur, "MAGIC", "FRAMERCRDT");
var Y = ur;
function po(r, e = Se) {
  let t = new _(r),
    { version: n } = Tt(t);
  if (n === e) return { migrated: !1, version: e };
  l(n < e, () => `Binary document version is newer than current version (${n} > ${e})`);
  let o = Ve(n);
  l(o, () => `Codec not found for version ${n}`);
  let i = Ve(e, n);
  i || (i = o);
  let s = new E(o, x, n),
    a = { version: n, branches: new Map([[x, s]]), main: s };
  o.decode(a, t);
  for (let d = n; d < e; ++d) (dr(d, d + 1).migrate(a), (a.version = d + 1));
  let c = new D();
  return (Ot(e, c), i.encode(a, c), { migrated: !0, from: n, to: e, buffer: c.getBuffer() });
}
function bf(r, e, t = []) {
  if (r.length === 0) return [];
  let n = new Y(e),
    o = n.getBranch(x);
  o.addSerializableRows(t);
  let i = t.length;
  o.addSerializableRows(r);
  let s = n.toBuffer(),
    a = po(s),
    c = Y.fromBuffer(a.migrated ? a.buffer : s);
  return a.migrated ? c.getBranch(x).getRows(i) : o.getRows(i);
}
var mo = class {
    constructor(e) {
      u(this, "nodeId", e);
      u(this, "hasParentIdOwnWrite", !1);
      u(this, "latestPropertyRowIndexByStoreId", new Map());
    }
    recordPropertyOwnWrite(e, t, n, o) {
      let i = this.getOrCreateLatestRowIndexByPropertyKey(t),
        s = i.get(n);
      (s === void 0 || Yt(e, o, s)) && i.set(n, o);
    }
    getOrCreateLatestRowIndexByPropertyKey(e) {
      let t = this.latestPropertyRowIndexByStoreId.get(e);
      if (t) return t;
      let n = new Map();
      return (this.latestPropertyRowIndexByStoreId.set(e, n), n);
    }
  },
  lr = class {
    constructor(e) {
      u(this, "branchData", e);
      u(this, "touchedNodeIdByRowIndex", []);
      u(this, "ownWriteSummaryByNodeId", new Map());
      u(this, "nodeIdsWithParentIdOwnWrites", new Set());
    }
    indexOwnRow(e) {
      let t = this.branchData.columns,
        n = t.id.get(e),
        o = t.key.get(e),
        i = hr(n, o);
      if (((this.touchedNodeIdByRowIndex[e] = i), !i)) return;
      let s = this.getOrCreateOwnWriteSummary(i);
      o === "parentid"
        ? ((s.hasParentIdOwnWrite = !0), this.nodeIdsWithParentIdOwnWrites.add(i))
        : s.recordPropertyOwnWrite(t, n, o, e);
    }
    getNodeIdsTouchedByRows(e, t) {
      let n = new Set();
      for (let o = e; o < t; o++) {
        let i = this.touchedNodeIdByRowIndex[o];
        i && n.add(i);
      }
      return n;
    }
    getNodeIdsWithOwnWrites() {
      return this.ownWriteSummaryByNodeId.keys();
    }
    getNodeIdsWithParentIdOwnWrites() {
      return this.nodeIdsWithParentIdOwnWrites.values();
    }
    getOwnWriteSummary(e) {
      return this.ownWriteSummaryByNodeId.get(e);
    }
    getOrCreateOwnWriteSummary(e) {
      let t = this.ownWriteSummaryByNodeId.get(e);
      if (t) return t;
      let n = new mo(e);
      return (this.ownWriteSummaryByNodeId.set(e, n), n);
    }
  };
function hr(r, e) {
  if (r === q || e === "children" || e === O) return;
  let t = r.indexOf(".");
  return t < 0 ? r : r.slice(0, t);
}
var fr = class {
    constructor(e, t) {
      u(this, "store", e);
      u(this, "dependencyNodeIds", t);
    }
    getParentId(e) {
      let t = this.store.getParentId(e);
      return typeof t == "string" ? t : void 0;
    }
    getObjectKey(e, t) {
      let n = hr(e, t);
      return (n && this.dependencyNodeIds.add(n), this.store.getObjectKey(e, t));
    }
  },
  pr = class {
    constructor() {
      u(this, "groupKeysByChangedNodeId", new Map());
      u(this, "changedNodeIdsByGroupKey", new Map());
    }
    setGroupsForChangedNode(e, t) {
      if ((this.deleteGroupsForChangedNode(e), t.size !== 0)) {
        this.groupKeysByChangedNodeId.set(e, t);
        for (let n of t) {
          let o = this.changedNodeIdsByGroupKey.get(n);
          (o || ((o = new Set()), this.changedNodeIdsByGroupKey.set(n, o)), o.add(e));
        }
      }
    }
    deleteGroupsForChangedNode(e) {
      let t = this.groupKeysByChangedNodeId.get(e);
      if (t) {
        this.groupKeysByChangedNodeId.delete(e);
        for (let n of t) {
          let o = this.changedNodeIdsByGroupKey.get(n);
          o && (o.delete(e), o.size === 0 && this.changedNodeIdsByGroupKey.delete(n));
        }
      }
    }
    hasChangeGroup(e) {
      let t = this.getChangedNodeIdsForGroup(e);
      return t !== void 0 && t.size > 0;
    }
    getChangedNodeIdsForGroup(e) {
      return this.changedNodeIdsByGroupKey.get(e);
    }
    *entries() {
      yield* this.changedNodeIdsByGroupKey;
    }
  },
  mr = class {
    constructor() {
      u(this, "dependencyNodeIdsByChangedNodeId", new Map());
      u(this, "changedNodeIdsByDependencyNodeId", new Map());
    }
    setDependenciesForChangedNode(e, t) {
      if ((this.deleteDependenciesForChangedNode(e), t.size !== 0)) {
        this.dependencyNodeIdsByChangedNodeId.set(e, t);
        for (let n of t) {
          let o = this.changedNodeIdsByDependencyNodeId.get(n);
          (o || ((o = new Set()), this.changedNodeIdsByDependencyNodeId.set(n, o)), o.add(e));
        }
      }
    }
    deleteDependenciesForChangedNode(e) {
      let t = this.dependencyNodeIdsByChangedNodeId.get(e);
      if (t) {
        this.dependencyNodeIdsByChangedNodeId.delete(e);
        for (let n of t) {
          let o = this.changedNodeIdsByDependencyNodeId.get(n);
          o && (o.delete(e), o.size === 0 && this.changedNodeIdsByDependencyNodeId.delete(n));
        }
      }
    }
    addChangedNodeIdsForDependency(e, t) {
      let n = this.changedNodeIdsByDependencyNodeId.get(e);
      if (n) for (let o of n) t.add(o);
    }
  },
  yr = class {
    constructor(e, t, n) {
      u(this, "groupKey", e);
      u(this, "nodeChangeByNodeId", t);
      u(this, "changedNodeIds", n);
    }
    get nodeChangeCount() {
      return this.changedNodeIds.size;
    }
    hasNodeChange(e) {
      return this.changedNodeIds.has(e);
    }
    getNodeChange(e) {
      if (this.hasNodeChange(e)) return this.nodeChangeByNodeId.get(e);
    }
    *nodeChanges() {
      for (let e of this.changedNodeIds) {
        let t = this.nodeChangeByNodeId.get(e);
        (l(t, () => `Missing node change for group index: ${e}`), yield t);
      }
    }
  },
  yo = class {
    constructor(e, t) {
      u(this, "nodeChangeByNodeId", e);
      u(this, "nodeChangeGroupIndex", t);
    }
    get nodeChangeCount() {
      return this.nodeChangeByNodeId.size;
    }
    hasNodeChange(e) {
      return this.nodeChangeByNodeId.has(e);
    }
    getNodeChange(e) {
      return this.nodeChangeByNodeId.get(e);
    }
    nodeChanges() {
      return this.nodeChangeByNodeId.values();
    }
    hasChangeGroup(e) {
      return this.nodeChangeGroupIndex.hasChangeGroup(e);
    }
    getChangeGroup(e) {
      let t = this.nodeChangeGroupIndex.getChangedNodeIdsForGroup(e);
      if (!(!t || t.size === 0)) return new yr(e, this.nodeChangeByNodeId, t);
    }
    *changeGroups() {
      for (let [e, t] of this.nodeChangeGroupIndex.entries())
        yield new yr(e, this.nodeChangeByNodeId, t);
    }
  },
  gr = class {
    constructor(e, t) {
      u(this, "store", e);
      u(this, "baseStore");
      u(this, "nodeChangeResolver");
      u(this, "resolveGroup");
      u(this, "nodeChanges");
      u(this, "branchCursor");
      u(this, "baseStoreCursors", []);
      u(this, "nodeChangeByNodeId", new Map());
      u(this, "nodeChangeGroupIndex", new pr());
      u(this, "nodeChangeDependencyIndex", new mr());
      let n = e.base;
      (l(n, "Can't read node changes for main branch"),
        (this.baseStore = n),
        (this.resolveGroup = t.resolveGroup));
      let o = new Set(t.ignoredPropertyKeys);
      this.nodeChangeResolver = new go(e, o);
    }
    read() {
      if (!this.nodeChanges) return this.rebuildChanges();
      let e = bo(this.store),
        t = eu(this.store);
      return this.cursorsAreCurrent(e, t)
        ? this.nodeChanges
        : this.canUpdateIncrementally(e, t)
          ? (this.updateIncrementally(e, t), this.nodeChanges)
          : this.rebuildChanges();
    }
    cursorsAreCurrent(e, t) {
      let n = this.branchCursor;
      if (!n || !tu(n, e) || this.baseStoreCursors.length !== t.length) return !1;
      for (let o = 0; o < t.length; o++) {
        let i = this.baseStoreCursors[o],
          s = t[o];
        if (!i || !s || !tu(i, s)) return !1;
      }
      return !0;
    }
    canUpdateIncrementally(e, t) {
      let n = this.branchCursor;
      if (!n || !ru(n, e) || this.baseStoreCursors.length !== t.length) return !1;
      for (let o = 0; o < t.length; o++) {
        let i = this.baseStoreCursors[o],
          s = t[o];
        if (!i || !s || !ru(i, s)) return !1;
      }
      return !0;
    }
    rebuildChanges() {
      ((this.nodeChangeByNodeId = new Map()),
        (this.nodeChangeGroupIndex = new pr()),
        (this.nodeChangeDependencyIndex = new mr()),
        (this.nodeChanges = new yo(this.nodeChangeByNodeId, this.nodeChangeGroupIndex)));
      let e = this.store.getBranchOwnWriteIndex();
      for (let t of e.getNodeIdsWithOwnWrites()) {
        let n = this.nodeChangeResolver.resolveNodeChange(t);
        n && this.addNodeChange(n);
      }
      return (
        (this.branchCursor = bo(this.store)),
        (this.baseStoreCursors = eu(this.store)),
        this.nodeChanges
      );
    }
    updateIncrementally(e, t) {
      let n = this.branchCursor;
      if (!n) throw new Error("Missing branch node change reader cursor");
      let o = new Set(),
        i = new Set();
      (this.collectRowChanges(this.store, n.length, e.length, o, i),
        this.collectHierarchyChanges(this.store, n.hierarchyCursor, o, i));
      for (let s = 0; s < t.length; s++) {
        let a = this.baseStoreCursors[s],
          c = t[s];
        if (!a || !c) continue;
        let d = new Set();
        (this.collectRowChanges(c.store, a.length, c.length, o, d),
          this.collectHierarchyChanges(c.store, a.hierarchyCursor, o, d),
          this.collectOwnWriteNodeIdsInSubtrees(c.store, d, o));
        for (let f of d) i.add(f);
      }
      this.collectOwnWriteNodeIdsInSubtrees(this.store, i, o);
      for (let s of o) this.nodeChangeDependencyIndex.addChangedNodeIdsForDependency(s, o);
      (this.recomputeNodeChanges(o), (this.branchCursor = e), (this.baseStoreCursors = t));
    }
    collectRowChanges(e, t, n, o, i) {
      let s = e.branchData.columns;
      for (let a = t; a < n; a++) {
        let c = s.id.get(a),
          d = s.key.get(a),
          f = hr(c, d);
        f &&
          (o.add(f),
          this.nodeChangeDependencyIndex.addChangedNodeIdsForDependency(f, o),
          i && d === "parentid" && i.add(f));
      }
    }
    collectHierarchyChanges(e, t, n, o) {
      let i =
        e.getHierarchy().getInvalidatedNodeIdsSince(t) ??
        this.store.getBranchOwnWriteIndex().getNodeIdsWithOwnWrites();
      for (let s of i) (n.add(s), o.add(s));
    }
    collectOwnWriteNodeIdsInSubtrees(e, t, n) {
      let o = this.store.getBranchOwnWriteIndex(),
        i = new Set(t);
      for (let s of i) {
        o.getOwnWriteSummary(s) && n.add(s);
        for (let a of e.getChildrenIds(s)) i.add(a);
      }
    }
    recomputeNodeChanges(e) {
      if (e.size !== 0)
        for (let t of e) {
          this.removeNodeChange(t);
          let n = this.nodeChangeResolver.resolveNodeChange(t);
          n && this.addNodeChange(n);
        }
    }
    addNodeChange(e) {
      let t = new Set(),
        n = { branch: new fr(this.store, t), base: new fr(this.baseStore, t) },
        o = this.resolveNodeChangeGroups(e, n);
      (this.nodeChangeByNodeId.set(e.nodeId, e),
        this.nodeChangeGroupIndex.setGroupsForChangedNode(e.nodeId, o),
        this.nodeChangeDependencyIndex.setDependenciesForChangedNode(e.nodeId, t));
    }
    removeNodeChange(e) {
      (this.nodeChangeByNodeId.delete(e),
        this.nodeChangeGroupIndex.deleteGroupsForChangedNode(e),
        this.nodeChangeDependencyIndex.deleteDependenciesForChangedNode(e));
    }
    resolveNodeChangeGroups(e, t) {
      let n = this.resolveGroup(e, t);
      if (typeof n == "string") {
        let o = new Set();
        return (o.add(n), o);
      }
      return n instanceof Set ? n : new Set(n);
    }
  },
  go = class {
    constructor(e, t) {
      u(this, "store", e);
      u(this, "ignoredPropertyKeys", t);
      u(this, "baseStore");
      let n = e.base;
      (l(n, "Can't get node changes for main branch"), (this.baseStore = n));
    }
    resolveNodeChange(e) {
      let t = this.store.getBranchOwnWriteIndex().getOwnWriteSummary(e);
      if (!t) return;
      let n = new Set();
      if (t.hasParentIdOwnWrite) return this.resolveHierarchyNodeChange(t, n);
      let o = this.store.getHierarchy().getParentId(t.nodeId);
      return this.createNodeChangeUpdated(t, typeof o == "string" ? o : void 0, n);
    }
    resolveHierarchyNodeChange(e, t) {
      let n = e.nodeId,
        o = this.store.getHierarchy(),
        i = o.getOwnParentRowIdx(n);
      l(i !== void 0, () => `Can't find parentId row index for ${n}`);
      let a = this.store.branchData.columns.user.get(i),
        c = this.baseStore.getHierarchy().getParentId(n),
        d = o.getParentId(n);
      if (typeof c == "string" && typeof d == "string")
        return (t.add(a), this.createNodeChangeMoved(e, c, d, t));
      if (typeof c == "string") return (t.add(a), this.createNodeChangeRemoved(e, c, t));
      if (typeof d == "string") return (t.add(a), this.createNodeChangeAdded(e, d, t));
    }
    resolveChangedKeys(e, t) {
      if (!this.store.getHierarchy().inTree(e.nodeId)) return;
      let n = this.store.branchData.columns,
        o = new Map();
      for (let [i, s] of e.latestPropertyRowIndexByStoreId) {
        let a = new Map();
        for (let [c, d] of s) {
          if (this.ignoredPropertyKeys.has(c)) continue;
          let f = n.value.get(d),
            h = this.baseStore.getCurrentValue(i, c);
          if (If(f, h)) continue;
          let p = n.user.get(d);
          (t.add(p), a.set(c, p));
        }
        a.size > 0 && o.set(i, a);
      }
      if (o.size > 0) return o;
    }
    createNodeChangeAdded(e, t, n) {
      return {
        type: "added",
        nodeId: e.nodeId,
        ...this.resolveNodeMeta(e.nodeId),
        toParentId: t,
        actors: n,
        changedKeys: this.resolveChangedKeys(e, n) ?? new Map(),
      };
    }
    createNodeChangeRemoved(e, t, n) {
      return {
        type: "removed",
        nodeId: e.nodeId,
        ...this.resolveNodeMeta(e.nodeId),
        fromParentId: t,
        actors: n,
      };
    }
    createNodeChangeMoved(e, t, n, o) {
      return {
        type: "moved",
        nodeId: e.nodeId,
        ...this.resolveNodeMeta(e.nodeId),
        fromParentId: t,
        toParentId: n,
        actors: o,
        changedKeys: this.resolveChangedKeys(e, o),
      };
    }
    createNodeChangeUpdated(e, t, n) {
      let o = this.resolveChangedKeys(e, n);
      if (o)
        return {
          type: "updated",
          nodeId: e.nodeId,
          ...this.resolveNodeMeta(e.nodeId),
          parentId: t,
          actors: n,
          changedKeys: o,
        };
    }
    resolveNodeMeta(e) {
      let t = this.resolveNodeMetaValue(e, "__class");
      l(t, () => `Can't find __class for ${e}`);
      let n = this.resolveNodeMetaValue(e, "name");
      return { __class: t, name: n };
    }
    resolveNodeMetaValue(e, t) {
      let n = this.store.getCurrentValue(e, t);
      if (
        typeof n == "string" ||
        ((n = this.baseStore.getCurrentValue(e, t)), typeof n == "string")
      )
        return n;
    }
  };
function eu(r) {
  let e = [],
    t = r.base;
  for (; t; ) {
    let n = bo(t);
    (e.push(n), (t = t.base));
  }
  return e;
}
function bo(r) {
  return {
    store: r,
    branchData: r.branchData,
    length: r.length,
    hierarchyCursor: r.getHierarchy().getInvalidationCursor(),
  };
}
function tu(r, e) {
  return (
    r.store === e.store &&
    r.branchData === e.branchData &&
    r.length === e.length &&
    r.hierarchyCursor === e.hierarchyCursor
  );
}
function ru(r, e) {
  return (
    r.store === e.store &&
    r.branchData === e.branchData &&
    r.length <= e.length &&
    r.hierarchyCursor <= e.hierarchyCursor
  );
}
function If(r, e) {
  return !!(
    e === r ||
    ((e === void 0 || e === m) && (r === void 0 || r === m)) ||
    (Array.isArray(e) && Array.isArray(r) && Xt(e, r))
  );
}
var br = "@";
function nu(r) {
  if (r === m) return !0;
  if (typeof r != "string") return !1;
  let e = r.lastIndexOf(br);
  return e > 0 && e < r.length - 1;
}
function Ir(r, e) {
  return `${r}${br}${e}`;
}
function Sr(r) {
  l(r !== m, "trying to get positionId of deleted child");
  let e = r.lastIndexOf(br);
  return r.slice(e + 1);
}
function $(r) {
  if (r === m) return m;
  let e = r.lastIndexOf(br);
  return r.slice(0, e);
}
function we(r) {
  return typeof r == "string" && r.startsWith("arr(") && r.endsWith(")");
}
function ve(r) {
  return typeof r == "string" && r.startsWith("obj(") && r.endsWith(")");
}
function _t(r) {
  return typeof r == "string" && r.startsWith("aob(") && r.endsWith(")");
}
function K(r) {
  return r.slice(4, -1);
}
function Io(r) {
  return `arr(${r})`;
}
function So(r) {
  return `obj(${r})`;
}
function ou(r) {
  return `aob(${r})`;
}
var wr = class r {
  constructor(e, t, n, o, i) {
    u(this, "source", e);
    u(this, "target", t);
    u(this, "windowStartIdx", n);
    u(this, "hierarchy");
    u(this, "parentHistory", []);
    u(this, "parentOverrides", new Map());
    u(this, "visited", new Set());
    u(this, "emittedParentIdRowIndexes", new Set());
    u(this, "retainedNodeIds");
    u(this, "tombstoneAnchorNodeIds");
    ((this.hierarchy = e.getHierarchy()),
      (this.retainedNodeIds = o),
      (this.tombstoneAnchorNodeIds = i));
  }
  static run(e, t, n, o = new Set(), i = new Set()) {
    return new r(e, t, n, o, i).run();
  }
  run() {
    (l(
      this.source.branchId === this.target.branchId,
      () =>
        `Cannot compact data from different branches: ${this.source.branchId} != ${this.target.branchId}`
    ),
      this.emitObjectRows(xe));
    let e = this.source.getRoot();
    (l(e, "Store has no root"), this.emitObjectRows(e));
    for (let t of this.hierarchy.getChildrenIds(e)) this.depthFirstWalk(t);
    return (
      this.emitOwnDeletedNodes(),
      this.emitOwnRevivedNodes(),
      this.emitRetainedNodes(),
      this.emitRowsWithTombstoneAnchors(),
      this.emitRecoverableOrphans(),
      this.emitInWindowParentIdRows(),
      this.emitTombstoneAnchors(),
      this.sortParentHistory(),
      (this.target.branchData.hierarchyData = new W(this.parentHistory, this.parentOverrides)),
      this.target.manifest.copyClientStateFrom(this.source.manifest),
      this.target.updateCaches(this.target.branchData.hierarchyData),
      (this.target.branchData.metadata.seq = this.source.branchData.metadata.seq),
      this.target
    );
  }
  sortParentHistory() {
    let e = this.target.branchData.columns;
    this.parentHistory.sort((t, n) => {
      let o = e.seq.get(t),
        i = e.seq.get(n);
      return o === i ? e.client.get(t) - e.client.get(n) : o - i;
    });
  }
  depthFirstWalk(e) {
    (this.emitObjectRows(e), this.emitResolvedParent(e));
    for (let t of this.hierarchy.getChildrenIds(e)) this.depthFirstWalk(t);
  }
  emitInWindowParentIdRows() {
    let e = this.source,
      t = this.hierarchy;
    for (let n = this.windowStartIdx; n < e.length; n++) {
      if (e.branchData.columns.key.get(n) !== "parentid" || this.emittedParentIdRowIndexes.has(n))
        continue;
      let i = e.branchData.getRow(n),
        s = i.id,
        a = t.getOwnParentRowIdx(s),
        c = t.getParentId(s) === m;
      if (!(c && a !== void 0 && a < this.windowStartIdx)) {
        if (c && a === n) {
          (this.emitObjectRows(s), this.emitResolvedParent(s));
          continue;
        }
        (!this.visited.has(s) && !c && !t.inTree(s)) || this.emitParentIdRow(i, n);
      }
    }
  }
  emitRow(e) {
    return (
      this.target.branchData.manifest.addTimestamp(e.client, e.seq),
      this.target.branchData.addRow(e)
    );
  }
  emitParentIdRow(e, t) {
    (this.emittedParentIdRowIndexes.add(t),
      this.source.base && e.id !== q && e.value !== m && this.retainedNodeIds.add(e.id));
    let n = this.emitRow(e);
    (this.parentHistory.push(n), this.maybeEmitOverride(e, n));
  }
  emitOwnRevivedNodes() {
    if (!this.source.base) return;
    let e = this.source.getHierarchy(),
      t = new Set(),
      n = new Set();
    for (let o of e.parentHistory) {
      let i = this.source.branchData.columns.id.get(o);
      t.has(i) ||
        (t.add(i),
        this.source.base.getParentId(i) === m &&
          e.getOwnParentId(i) !== m &&
          e.inTree(i) &&
          wo(this.hierarchy, i, this.retainedNodeIds, n));
    }
  }
  emitOwnDeletedNodes() {
    if (!this.source.base) return;
    let e = this.source.getHierarchy(),
      t = new Set();
    for (let n of e.parentHistory) {
      let o = this.source.branchData.columns.id.get(n);
      if (t.has(o) || (t.add(o), e.getOwnParentId(o) !== m)) continue;
      let i = this.source.base.getParentId(o) === void 0,
        s = e.getOwnNodeData(o)?.resolvedParentId,
        a = s !== void 0 && s < this.windowStartIdx;
      if (i && a) {
        this.emitResolvedParent(o);
        continue;
      }
      (this.emitObjectRows(o), this.emitResolvedParent(o));
    }
  }
  emitRetainedNodes() {
    for (let e of this.retainedNodeIds)
      this.visited.has(e) || (this.emitObjectRows(e), this.emitResolvedParent(e));
  }
  emitRowsWithTombstoneAnchors() {
    if (!this.source.base) return;
    let e = new Map();
    for (let t of this.source.latest.keys()) {
      if (this.visited.has(t) || !this.source.latest.getOwnLatest(t)) continue;
      let n = au(this.hierarchy, t);
      if (n === void 0 || vo(this.source, n)) continue;
      let o = e.get(n);
      (e.has(n) ||
        ((o = cu(this.source, n)), e.set(n, o), o !== void 0 && this.tombstoneAnchorNodeIds.add(o)),
        o !== void 0 &&
          (this.emitObjectRows(t),
          t === n && this.hierarchy.getOwnParentId(t) !== m && this.emitResolvedParent(t)));
    }
  }
  emitTombstoneAnchors() {
    let e = [];
    for (let t of this.tombstoneAnchorNodeIds)
      this.hierarchy.getOwnParentId(t) === m && (this.emitResolvedParent(t), e.push(t));
    for (let t of e) this.tombstoneAnchorNodeIds.delete(t);
  }
  emitRecoverableOrphans() {
    let e = this.hierarchy,
      t = this.source.branchData.columns.id,
      n = new Set();
    for (let o of e.parentHistory) {
      let i = t.get(o);
      if (n.has(i) || (n.add(i), this.visited.has(i)) || e.getOwnParentId(i) === m || e.inTree(i))
        continue;
      let s = su(e, i);
      if (s)
        for (let a of s)
          (e.getParentId(a) === m && this.tombstoneAnchorNodeIds.add(a),
            !this.visited.has(a) && (this.emitObjectRows(a), this.emitResolvedParent(a)));
    }
  }
  emitObjectRows(e) {
    if (this.visited.has(e)) return;
    this.visited.add(e);
    let t = this.source.latest.getOwnLatest(e);
    if (t)
      for (let o of t.ownValues()) {
        let i = this.source.branchData.getRow(o);
        this.emitRow(i);
      }
    let n = this.source.latest.getLatest(e);
    if (n)
      for (let o of n.keys()) {
        let i = this.source.getCurrentValue(e, o);
        (typeof i != "string" && !Array.isArray(i)) || this.followReferences(i);
      }
  }
  emitMergeableArrayRows(e) {
    if (this.visited.has(e)) return;
    this.visited.add(e);
    let t = this.source.latest.getOwnLatest(e);
    if (t)
      for (let [o, i] of t.ownEntries()) {
        let s = this.source.branchData.getRow(i);
        this.emitRow(s);
      }
    let n = this.source.latest.getLatest(e);
    if (n)
      for (let o of n.keys())
        o !== O && this.source.getCurrentValue(e, o) !== m && this.emitObjectRows(o);
  }
  followReferences(e) {
    if (ve(e) || _t(e)) {
      this.emitObjectRows(K(e));
      return;
    }
    if (we(e)) {
      this.emitMergeableArrayRows(K(e));
      return;
    }
    if (Array.isArray(e)) for (let t of e) this.followReferences(t);
  }
  emitResolvedParent(e) {
    let n = this.hierarchy.getOwnNodeData(e)?.resolvedParentId;
    if (n === void 0) return;
    let o = this.source.branchData.getRow(n);
    (this.emittedParentIdRowIndexes.has(n) || this.emitParentIdRow(o, n),
      n >= this.windowStartIdx && this.emitPreWindowAnchor(o));
  }
  emitPreWindowAnchor(e) {
    let t = this.source.getHierarchy(),
      n = t.getOwnParentBySeq(e.id, e.seq, !1);
    for (; n && n.index >= this.windowStartIdx; ) n = t.getOwnParentBySeq(n.id, n.seq, !1);
    if (!n || this.emittedParentIdRowIndexes.has(n.index)) return;
    let o = this.source.branchData.getRow(n.index);
    this.emitParentIdRow(o, n.index);
  }
  maybeEmitOverride(e, t) {
    let n = this.hierarchy.getParentOverride(e.id, e.seq, e.client);
    if (!n) return;
    let o = { ...n, rowIdx: t };
    this.addParentOverride(e, o);
    let i = this.source.getHierarchy(),
      s = i.getOwnParentBySeq(e.id, e.seq, !1);
    for (; s && $(s.value) !== $(o.parentTo); ) s = i.getOwnParentBySeq(s.id, s.seq, !1);
    if (!s || this.emittedParentIdRowIndexes.has(s.index)) return;
    let a = this.source.branchData.getRow(s.index);
    this.emitParentIdRow(a, s.index);
  }
  addParentOverride(e, t) {
    let n = this.parentOverrides.get(e.id);
    n || ((n = new Map()), this.parentOverrides.set(e.id, n));
    let o = n.get(e.seq);
    (o || ((o = new Map()), n.set(e.seq, o)), o.set(e.client, t));
  }
};
function iu(r, e, t) {
  (Sf(r, e), wf(r, t));
}
function Sf(r, e) {
  let t = r.getHierarchy(),
    n = new Set(),
    o = new Set();
  for (let i of t.parentHistory) {
    let s = r.branchData.columns.id.get(i);
    n.has(s) ||
      (n.add(s),
      t.getOwnParentId(s) !== m &&
        (e.add(s), r.base?.getParentId(s) === m && t.inTree(s) && wo(t, s, e, o)));
  }
}
function wo(r, e, t, n) {
  if (!n.has(e)) {
    n.add(e);
    for (let o of r.getChildrenIds(e))
      (r.getOwnParentRowIdx(o) === void 0 && t.add(o), wo(r, o, t, n));
  }
}
function wf(r, e) {
  if (!r.base) return;
  let t = new Set();
  for (let n of r.latest.keys()) {
    if (!r.latest.getOwnLatest(n)) continue;
    let o = au(r.getHierarchy(), n);
    if (o === void 0 || t.has(o) || (t.add(o), vo(r, o))) continue;
    let i = cu(r, o);
    i !== void 0 && e.add(i);
  }
  vf(r, e);
}
function vf(r, e) {
  let t = r.getHierarchy(),
    n = new Set();
  for (let o of t.parentHistory) {
    let i = r.branchData.columns.id.get(o);
    if (n.has(i) || (n.add(i), t.getOwnParentId(i) === m) || t.inTree(i)) continue;
    let s = su(t, i);
    if (s) for (let a of s) t.getParentId(a) === m && e.add(a);
  }
}
function su(r, e) {
  let t = [e],
    n = new Set([e]),
    o = e;
  for (;;) {
    let i = r.getParentId(o);
    if (i === void 0) return;
    if (i === m) return t;
    if (n.has(i) || r.inTree(i)) return;
    (t.push(i), n.add(i), (o = i));
  }
}
function vo(r, e) {
  return r.getHierarchy().getOwnParentId(e) === m;
}
function au(r, e) {
  if (e === q) return;
  if (r.getNodeData(e)) return e;
  let t = e.indexOf("."),
    n = 0;
  for (; t >= 0; ) {
    let o = e.slice(0, t);
    if (r.getNodeData(o)) return o;
    ((n = t + 1), (t = e.indexOf(".", n)));
  }
}
function cu(r, e) {
  if (!r.base || vo(r, e)) return;
  if (r.base.getParentId(e) === m) return e;
  let t = new Set([e]),
    n = r.getParentId(e);
  for (; n !== void 0 && n !== m; ) {
    if (t.has(n)) return;
    if ((t.add(n), r.getParentId(n) === m)) return n;
    n = r.getParentId(n);
  }
}
var X,
  Q,
  ee,
  Ze = class {
    constructor(e) {
      Re(this, X, new Set());
      Re(this, Q, new Set());
      Re(this, ee);
      sn(this, ee, e);
    }
    add(e) {
      return (I(this, Q).delete(e), I(this, X).add(e), this);
    }
    delete(e) {
      let t = I(this, X).delete(e);
      if (I(this, ee)?.has(e)) {
        let n = I(this, Q).has(e);
        return (I(this, Q).add(e), t || !n);
      }
      return t;
    }
    reset(e) {
      (I(this, X).delete(e), I(this, Q).delete(e));
    }
    has(e) {
      return I(this, X).has(e) ? !0 : I(this, Q).has(e) ? !1 : (I(this, ee)?.has(e) ?? !1);
    }
    clear() {
      if ((I(this, X).clear(), I(this, Q).clear(), I(this, ee)))
        for (let e of I(this, ee)) I(this, Q).add(e);
    }
    get size() {
      let e = I(this, X).size;
      if (!I(this, ee)) return e;
      for (let t of I(this, ee)) !I(this, X).has(t) && !I(this, Q).has(t) && (e += 1);
      return e;
    }
    *values() {
      for (let e of I(this, X)) yield e;
      if (I(this, ee))
        for (let e of I(this, ee)) I(this, X).has(e) || I(this, Q).has(e) || (yield e);
    }
    keys() {
      return this.values();
    }
    *entries() {
      for (let e of this.values()) yield [e, e];
    }
    forEach(e, t) {
      for (let n of this.values()) e.call(t, n, n, this);
    }
    [Symbol.iterator]() {
      return this.values();
    }
  };
((X = new WeakMap()), (Q = new WeakMap()), (ee = new WeakMap()));
var L,
  te,
  V,
  Ge = class {
    constructor(e) {
      Re(this, L, new Map());
      Re(this, te, new Set());
      Re(this, V);
      sn(this, V, e);
    }
    get(e) {
      if (I(this, L).has(e)) return I(this, L).get(e);
      if (!I(this, te).has(e)) return I(this, V)?.get(e);
    }
    has(e) {
      return I(this, L).has(e) ? !0 : I(this, te).has(e) ? !1 : (I(this, V)?.has(e) ?? !1);
    }
    set(e, t) {
      return (I(this, te).delete(e), I(this, L).set(e, t), this);
    }
    delete(e) {
      let t = I(this, L).delete(e);
      if (I(this, V)?.has(e)) {
        let n = I(this, te).has(e);
        return (I(this, te).add(e), t || !n);
      }
      return t;
    }
    clear() {
      if ((I(this, L).clear(), I(this, te).clear(), I(this, V)))
        for (let e of I(this, V).keys()) I(this, te).add(e);
    }
    get size() {
      let e = I(this, L).size;
      if (!I(this, V)) return e;
      for (let t of I(this, V).keys()) !I(this, L).has(t) && !I(this, te).has(t) && (e += 1);
      return e;
    }
    *entries() {
      for (let e of I(this, L).entries()) yield e;
      if (I(this, V))
        for (let [e, t] of I(this, V).entries())
          I(this, L).has(e) || I(this, te).has(e) || (yield [e, t]);
    }
    *keys() {
      for (let [e] of this.entries()) yield e;
    }
    *values() {
      for (let [, e] of this.entries()) yield e;
    }
    forEach(e, t) {
      for (let [n, o] of this.entries()) e.call(t, o, n, this);
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    getOwned(e) {
      return I(this, L).get(e);
    }
    ensureOwned(e, t) {
      let n = I(this, L).get(e);
      if (n !== void 0) return n;
      let o = t(this.get(e));
      return (this.set(e, o), o);
    }
  };
((L = new WeakMap()), (te = new WeakMap()), (V = new WeakMap()));
var vr = class {
    constructor() {
      u(this, "classToIds", new Map());
      u(this, "masterIdToReplicaIds", new Map());
      u(this, "formContainerIds", new Set());
      u(this, "withDataIdentifierIds", new Set());
      u(this, "dataIdentifierToIds", new Map());
    }
    getMutableIndexSet(e, t) {
      let n = e.get(t);
      return (n || ((n = new Set()), e.set(t, n)), n);
    }
    removeFromIndexSet(e, t, n, o = !1) {
      let i = e.get(t);
      i && (i.delete(n), o && i.size === 0 && e.delete(t));
    }
    syncAddedClass(e, t) {
      this.getMutableIndexSet(this.classToIds, e).add(t);
    }
    syncRemovedClass(e, t) {
      this.removeFromIndexSet(this.classToIds, e, t);
    }
    syncAddedFormContainer(e) {
      this.formContainerIds.add(e);
    }
    syncRemovedFormContainer(e) {
      this.formContainerIds.delete(e);
    }
    syncAddedWithDataIdentifier(e) {
      this.withDataIdentifierIds.add(e);
    }
    syncRemovedWithDataIdentifier(e) {
      this.withDataIdentifierIds.delete(e);
    }
    syncAddedDataIdentifier(e, t) {
      this.getMutableIndexSet(this.dataIdentifierToIds, e).add(t);
    }
    syncRemovedDataIdentifier(e, t) {
      this.removeFromIndexSet(this.dataIdentifierToIds, e, t, !0);
    }
    syncAddedReplicaOwner(e, t) {
      this.getMutableIndexSet(this.masterIdToReplicaIds, e).add(t);
    }
    syncRemovedReplicaOwner(e, t) {
      this.removeFromIndexSet(this.masterIdToReplicaIds, e, t);
    }
    syncAddedNodeIndexes(e, t) {
      t.inTree &&
        (t.__class && this.syncAddedClass(t.__class, e),
        t.isFormContainer && this.syncAddedFormContainer(e),
        t.dataIdentifier !== void 0 && this.syncAddedWithDataIdentifier(e),
        t.dataIdentifier && this.syncAddedDataIdentifier(t.dataIdentifier, e));
    }
    syncRemovedNodeIndexes(e, t) {
      (t.__class && this.syncRemovedClass(t.__class, e),
        this.syncRemovedFormContainer(e),
        this.syncRemovedWithDataIdentifier(e),
        t.dataIdentifier && this.syncRemovedDataIdentifier(t.dataIdentifier, e));
    }
  },
  xr = class {
    constructor(e) {
      u(this, "base", e);
      u(this, "classToIds");
      u(this, "masterIdToReplicaIds");
      u(this, "formContainerIds");
      u(this, "withDataIdentifierIds");
      u(this, "dataIdentifierToIds");
      ((this.classToIds = new Ge(this.base.classToIds)),
        (this.masterIdToReplicaIds = new Ge(this.base.masterIdToReplicaIds)),
        (this.formContainerIds = new Ze(this.base.formContainerIds)),
        (this.withDataIdentifierIds = new Ze(this.base.withDataIdentifierIds)),
        (this.dataIdentifierToIds = new Ge(this.base.dataIdentifierToIds)));
    }
    getMutableIndexSet(e, t) {
      return e.ensureOwned(t, (n) => new Ze(n));
    }
    removeFromIndexSet(e, t, n, o = !1) {
      if (!e.get(t)) return;
      this.getMutableIndexSet(e, t).delete(n);
    }
    syncAddedSetIndex(e, t, n) {
      t ? e.reset(n) : e.add(n);
    }
    syncRemovedSetIndex(e, t, n) {
      t ? e.delete(n) : e.reset(n);
    }
    syncAddedMapSetIndex(e, t, n, o, i = !1) {
      if (!i && (t.get(n)?.has(o) ?? !1)) {
        e.getOwned(n)?.reset(o);
        return;
      }
      this.getMutableIndexSet(e, n).add(o);
    }
    syncRemovedMapSetIndex(e, t, n, o, i = !1, s = !1) {
      let a = !i && (t.get(n)?.has(o) ?? !1),
        c = !i && t.has(n);
      if (a) {
        this.getMutableIndexSet(e, n).delete(o);
        return;
      }
      let d = e.getOwned(n);
      (d?.reset(o), s && d?.size === 0 && !c && e.delete(n));
    }
    syncAddedClass(e, t, n = !1) {
      this.syncAddedMapSetIndex(this.classToIds, this.base.classToIds, e, t, n);
    }
    syncRemovedClass(e, t, n = !1) {
      this.syncRemovedMapSetIndex(this.classToIds, this.base.classToIds, e, t, n);
    }
    syncAddedFormContainer(e, t = !1) {
      this.syncAddedSetIndex(this.formContainerIds, !t && this.base.formContainerIds.has(e), e);
    }
    syncRemovedFormContainer(e, t = !1) {
      this.syncRemovedSetIndex(this.formContainerIds, !t && this.base.formContainerIds.has(e), e);
    }
    syncAddedWithDataIdentifier(e, t = !1) {
      this.syncAddedSetIndex(
        this.withDataIdentifierIds,
        !t && this.base.withDataIdentifierIds.has(e),
        e
      );
    }
    syncRemovedWithDataIdentifier(e, t = !1) {
      this.syncRemovedSetIndex(
        this.withDataIdentifierIds,
        !t && this.base.withDataIdentifierIds.has(e),
        e
      );
    }
    syncAddedDataIdentifier(e, t, n = !1) {
      this.syncAddedMapSetIndex(this.dataIdentifierToIds, this.base.dataIdentifierToIds, e, t, n);
    }
    syncRemovedDataIdentifier(e, t, n = !1) {
      this.syncRemovedMapSetIndex(
        this.dataIdentifierToIds,
        this.base.dataIdentifierToIds,
        e,
        t,
        n,
        !0
      );
    }
    syncAddedReplicaOwner(e, t) {
      this.getMutableIndexSet(this.masterIdToReplicaIds, e).add(t);
    }
    syncRemovedReplicaOwner(e, t) {
      this.removeFromIndexSet(this.masterIdToReplicaIds, e, t);
    }
    syncAddedNodeIndexes(e, t, n = !1) {
      (t.__class && this.syncAddedClass(t.__class, e, n),
        t.isFormContainer && this.syncAddedFormContainer(e, n),
        t.dataIdentifier !== void 0 && this.syncAddedWithDataIdentifier(e, n),
        t.dataIdentifier && this.syncAddedDataIdentifier(t.dataIdentifier, e, n));
    }
    syncRemovedNodeIndexes(e, t, n = !1) {
      (t.__class && this.syncRemovedClass(t.__class, e, n),
        this.syncRemovedFormContainer(e, n),
        this.syncRemovedWithDataIdentifier(e, n),
        t.dataIdentifier && this.syncRemovedDataIdentifier(t.dataIdentifier, e, n));
    }
  };
var xf = 1e3,
  xo = class {
    constructor(e) {
      u(this, "base");
      u(this, "id", "");
      u(this, "parentIdHistory", []);
      u(this, "resolvedParentId");
      u(this, "childrenById");
      u(this, "cachedChildren");
      u(this, "cachedChildrenSorted", !1);
      u(this, "cachedChildrenLastCounter", 0);
      u(this, "cachedChildrenCurrentCounter", 0);
      u(this, "cachedChildrenBaseCounter", 0);
      u(this, "inTree", !1);
      u(this, "inMaster");
      u(this, "___class");
      u(this, "_isMaster", !1);
      u(this, "_isFormContainer", !1);
      u(this, "_dataIdentifier");
      u(this, "_replicaInfoMaster");
      e && (this.base = { data: e, overrides: new Set() });
    }
    get __class() {
      return !this.base || this.base.overrides.has("__class")
        ? this.___class
        : this.base.data.__class;
    }
    set __class(e) {
      (this.base?.overrides.add("__class"), (this.___class = e));
    }
    get isMaster() {
      return !this.base || this.base.overrides.has("isMaster")
        ? this._isMaster
        : this.base.data.isMaster;
    }
    set isMaster(e) {
      (this.base?.overrides.add("isMaster"), (this._isMaster = e));
    }
    get isFormContainer() {
      return !this.base || this.base.overrides.has("isFormContainer")
        ? this._isFormContainer
        : this.base.data.isFormContainer;
    }
    set isFormContainer(e) {
      (this.base?.overrides.add("isFormContainer"), (this._isFormContainer = e));
    }
    get dataIdentifier() {
      return !this.base || this.base.overrides.has("dataIdentifier")
        ? this._dataIdentifier
        : this.base.data.dataIdentifier;
    }
    set dataIdentifier(e) {
      (this.base?.overrides.add("dataIdentifier"), (this._dataIdentifier = e));
    }
    get replicaInfoMaster() {
      return !this.base || this.base.overrides.has("replicaInfoMaster")
        ? this._replicaInfoMaster
        : this.base.data.replicaInfoMaster;
    }
    set replicaInfoMaster(e) {
      (this.base?.overrides.add("replicaInfoMaster"), (this._replicaInfoMaster = e));
    }
  },
  Mt = class {
    constructor(e, t, n) {
      u(this, "store", e);
      u(this, "latest", t);
      u(this, "base", n);
      u(this, "rootNodeId");
      u(this, "indexes");
      u(this, "hierarchyChanged", !1);
      u(this, "hierarchyInvalidationsTrimmed", 0);
      u(this, "hierarchyInvalidations", []);
      u(this, "nodeData", new Map());
      u(this, "parentHistory", []);
      u(this, "parentOverrides", new Map());
      u(this, "branchData");
      u(this, "cachedInTreeCount", 0);
      ((this.branchData = e.branchData),
        this.base
          ? ((this.indexes = new xr(this.base.indexes)), (this.rootNodeId = this.base.rootNodeId))
          : (this.indexes = new vr()));
    }
    get classToIds() {
      return this.indexes.classToIds;
    }
    get masterIdToReplicaIds() {
      return this.indexes.masterIdToReplicaIds;
    }
    get formContainerIds() {
      return this.indexes.formContainerIds;
    }
    get withDataIdentifierIds() {
      return this.indexes.withDataIdentifierIds;
    }
    get dataIdentifierToIds() {
      return this.indexes.dataIdentifierToIds;
    }
    getRootId() {
      return this.rootNodeId;
    }
    get inTreeCount() {
      if (!this.base) return this.cachedInTreeCount;
      let e = this.base?.inTreeCount ?? 0;
      for (let [t, n] of this.nodeData) {
        if (t === this.rootNodeId) continue;
        let o = this.base?.inTree(t) ?? !1;
        e += Number(n.inTree) - Number(o);
      }
      return e;
    }
    sizeWithoutReplicas() {
      return this.inTreeCount + 1;
    }
    getInvalidationCursor() {
      return this.hierarchyInvalidationsTrimmed + this.hierarchyInvalidations.length;
    }
    getInvalidatedNodeIdsSince(e) {
      if (e < this.hierarchyInvalidationsTrimmed) return;
      let t = new Set(),
        n = e - this.hierarchyInvalidationsTrimmed;
      for (let o = n; o < this.hierarchyInvalidations.length; o++) {
        let i = this.hierarchyInvalidations[o];
        if (i) for (let s of i) t.add(s);
      }
      return t;
    }
    recordInvalidation(e) {
      e.size !== 0 && (this.hierarchyInvalidations.push(e), this.trimHierarchyInvalidations());
    }
    trimHierarchyInvalidations() {
      let e = this.hierarchyInvalidations.length - xf;
      e <= 0 ||
        ((this.hierarchyInvalidationsTrimmed += e), this.hierarchyInvalidations.splice(0, e));
    }
    has(e) {
      return !!(e === this.rootNodeId || this.inTree(e) || this.getLatestReplicaChild(e));
    }
    inTree(e) {
      let t = this.getOwnNodeData(e);
      return t ? t.inTree : (this.base?.inTree(e) ?? !1);
    }
    getNodeData(e) {
      let t = this.nodeData.get(e);
      return t || this.base?.getNodeData(e);
    }
    getOwnNodeData(e) {
      return this.nodeData.get(e);
    }
    ensureNodeData(e) {
      let t = this.nodeData.get(e);
      if (!t) {
        let n = this.base?.ensureNodeData(e);
        ((t = new xo(n)),
          (t.id = e),
          n && ((t.inTree = n.inTree), (t.inMaster = n.inMaster)),
          this.nodeData.set(e, t));
      }
      return t;
    }
    getLatestReplicaChild(e) {
      if (e.length < 11) return;
      let n = e.slice(0, 9),
        o = this.getNodeData(n);
      if (o && this.inTree(n)) {
        if (!o.replicaInfoMaster) return;
        let i = o.replicaInfoMaster,
          s = e.slice(9),
          a = this.getNodeData(s);
        return !a || !this.inTree(s) || a.inMaster !== i ? void 0 : [n, o, s, a];
      }
      for (let i = 7; i < e.length - 9 + 2; i++)
        if (i !== 9 && ((n = e.slice(0, i)), (o = this.getNodeData(n)), o && this.inTree(n))) {
          if (!o?.replicaInfoMaster) return;
          let s = o.replicaInfoMaster,
            a = e.slice(i),
            c = this.getNodeData(a);
          return !c || !this.inTree(a) || c.inMaster !== s ? void 0 : [n, o, a, c];
        }
    }
    computeTreeHash() {
      let e = 0,
        t = this;
      function n(o) {
        e = qi(o, e);
        let i = t.getChildrenIds(o);
        for (let s of i) n(s);
      }
      return (this.rootNodeId && n(this.rootNodeId), e);
    }
    addChild(e, t, n, o = !1) {
      if (
        ((e.childrenById ??= new Map()),
        e.childrenById.set(t, n),
        !o || !e.cachedChildrenSorted || !e.cachedChildren || this.isChildrenCacheDirty(e.id))
      ) {
        e.cachedChildrenCurrentCounter += 1;
        return;
      }
      e.cachedChildrenCurrentCounter += 1;
      let i = e.cachedChildren,
        s = Ae(i, t, (a, c) => {
          let d = this.getHierarchyKey(a);
          l(d !== void 0 && d !== m, () => `invalid key in hierarchy, row ${a}`);
          let f = this.getHierarchyKey(c);
          if ((l(f !== void 0 && f !== m, () => `invalid key in hierarchy, row ${c}`), d < f))
            return -1;
          if (d > f) return 1;
          if (this.store.optimizedReading) return a < c ? -1 : a > c ? 1 : 0;
          throw new Error("Hierarchy keys should be unique:" + d);
        });
      (i.splice(s, 0, t), (e.cachedChildrenLastCounter = e.cachedChildrenCurrentCounter));
    }
    removeChild(e, t) {
      let n = this.ensureNodeData(e);
      (n.childrenById?.delete(t), (n.cachedChildrenCurrentCounter += 1));
    }
    updateReachability(e, t, n) {
      (e.inTree === t && e.inMaster === n) ||
        (!this.base &&
          e.id !== this.rootNodeId &&
          e.inTree !== t &&
          (this.cachedInTreeCount += Number(t) - Number(e.inTree)),
        (e.inTree = t),
        (e.inMaster = n));
    }
    markInTree(e, t, n, o = new Set(), i = !1) {
      if (e.inTree && !o.has(n)) {
        (o.add(n),
          this.updateReachability(t, !0, e.isMaster ? e.id : e.inMaster),
          this.indexes.syncAddedNodeIndexes(n, t, i));
        for (let s of this.getCachedChildrenIds(n)) {
          let a = this.ensureNodeData(s);
          a.inTree || this.markInTree(t, a, s, o, i);
        }
      }
    }
    clearInTree(e, t, n = new Set()) {
      if (!n.has(t)) {
        (n.add(t),
          e.inTree && this.updateReachability(e, !1, void 0),
          this.indexes.syncRemovedNodeIndexes(t, e));
        for (let o of this.getCachedChildrenIds(t)) {
          let i = this.ensureNodeData(o);
          this.clearInTree(i, o, n);
        }
      }
    }
    applyMasterState(e) {
      let t = e.isMaster ? e.id : e.inMaster;
      for (let n of this.getCachedChildrenIds(e.id)) {
        let o = this.ensureNodeData(n);
        (this.updateReachability(o, o.inTree, t), this.applyMasterState(o));
      }
    }
    updateParent(e, t, n, o, i) {
      i && i !== m && this.removeChild(i, t);
      let s = $(n);
      if (s !== m) {
        let a = this.ensureNodeData(s);
        (this.addChild(a, t, o, !0),
          a.inTree ? this.markInTree(a, e, t, void 0, !0) : this.clearInTree(e, t));
      } else this.clearInTree(e, t);
    }
    getChildrenCounter(e) {
      let t = this.getOwnNodeData(e);
      return t ? t.cachedChildrenCurrentCounter : (this.base?.getChildrenCounter(e) ?? 0);
    }
    isChildrenCacheDirty(e) {
      let t = this.getOwnNodeData(e);
      if (!t?.cachedChildren || t.cachedChildrenLastCounter !== t.cachedChildrenCurrentCounter)
        return !0;
      if (this.base) {
        let n = this.base.getChildrenCounter(e);
        if (t.cachedChildrenBaseCounter !== n || this.base.isChildrenCacheDirty(e)) return !0;
      }
      return !1;
    }
    getSubtreeCount(e) {
      let t = 1;
      for (let n of this.getCachedChildrenIds(e)) t += this.getSubtreeCount(n);
      return t;
    }
    getCachedChildrenIds(e) {
      let t = this.ensureNodeData(e);
      if (!this.isChildrenCacheDirty(e)) return t.cachedChildren ?? [];
      let n = new Set();
      for (let i of this.base?.getCachedChildrenIds(e) ?? []) e === this.getParentId(i) && n.add(i);
      if (t.childrenById) for (let i of t.childrenById.keys()) n.add(i);
      let o = Array.from(n);
      return (
        (t.cachedChildren = o),
        (t.cachedChildrenSorted = !1),
        t.cachedChildrenLastCounter === t.cachedChildrenCurrentCounter &&
          (t.cachedChildrenCurrentCounter += 1),
        (t.cachedChildrenLastCounter = t.cachedChildrenCurrentCounter),
        (t.cachedChildrenBaseCounter = this.base?.getChildrenCounter(e) ?? 0),
        o
      );
    }
    getChildrenIds(e) {
      let t = this.ensureNodeData(e),
        n = this.getCachedChildrenIds(e);
      return (
        t.cachedChildrenSorted ||
          (n.sort((o, i) => {
            let s = this.getHierarchyKey(o);
            l(s !== void 0 && s !== m, () => `invalid key in hierarchy, row ${o}`);
            let a = this.getHierarchyKey(i);
            if ((l(a !== void 0 && a !== m, () => `invalid key in hierarchy, row ${i}`), s < a))
              return -1;
            if (s > a) return 1;
            if (this.store.optimizedReading) return o < i ? -1 : o > i ? 1 : 0;
            throw new Error("Hierarchy keys should be unique:" + s);
          }),
          (t.cachedChildrenSorted = !0)),
        n
      );
    }
    updateLatestValue(e, t, n) {
      let o = this.branchData.columns.value;
      switch (t) {
        case "__class": {
          let i = o.get(n);
          if (typeof i != "string") return;
          let s = this.ensureNodeData(e);
          if (
            i === "RootNode" &&
            ((this.rootNodeId = e), this.updateReachability(s, !0, void 0), s.childrenById)
          )
            for (let a of s.childrenById.keys()) {
              let c = this.getNodeData(a);
              c && this.markInTree(s, c, a);
            }
          (s.__class !== i && s.__class && this.indexes.syncRemovedClass(s.__class, e),
            (s.__class = i),
            s.inTree && this.indexes.syncAddedNodeIndexes(e, s));
          break;
        }
        case "isMaster": {
          let i = o.get(n);
          if (typeof i != "boolean") return;
          let s = this.ensureNodeData(e);
          ((s.isMaster = i), s.inTree && this.applyMasterState(s), this.broadcastIsMaster(e));
          break;
        }
        case "isFormContainer": {
          let i = o.get(n),
            s = this.ensureNodeData(e),
            a = i === !0,
            c = s.isFormContainer;
          if (c === a) return;
          ((s.isFormContainer = a),
            s.inTree &&
              (a
                ? this.indexes.syncAddedFormContainer(e)
                : this.indexes.syncRemovedFormContainer(e)),
            this.broadcastInheritedIsFormContainerChange(e, c, a));
          break;
        }
        case "replicaInfo": {
          let i = o.get(n);
          if (typeof i != "string" || i.length === 0) {
            let s = this.ensureNodeData(e);
            s.replicaInfoMaster &&
              (this.indexes.syncRemovedReplicaOwner(s.replicaInfoMaster, e),
              (s.replicaInfoMaster = void 0));
          }
          break;
        }
        case "master": {
          let i = o.get(n),
            a = e.length - "replicaInfo".length;
          if (e.substring(a) !== "replicaInfo") return;
          e = e.substring(0, a - 1);
          let c = i,
            d = this.ensureNodeData(e);
          if (c === d.replicaInfoMaster) return;
          if (
            (d.replicaInfoMaster && this.indexes.syncRemovedReplicaOwner(d.replicaInfoMaster, e),
            !c || typeof c != "string")
          ) {
            d.replicaInfoMaster = void 0;
            return;
          }
          (this.indexes.syncAddedReplicaOwner(c, e), (d.replicaInfoMaster = c));
          break;
        }
        case "dataIdentifier": {
          let i = o.get(n),
            s = this.ensureNodeData(e),
            a = typeof i == "string" ? i : void 0,
            c = s.dataIdentifier;
          if (c === a) return;
          (c && this.indexes.syncRemovedDataIdentifier(c, e),
            (s.dataIdentifier = a),
            s.inTree &&
              (c === void 0 && a !== void 0
                ? this.indexes.syncAddedWithDataIdentifier(e)
                : c !== void 0 && a === void 0 && this.indexes.syncRemovedWithDataIdentifier(e),
              a && this.indexes.syncAddedDataIdentifier(a, e)),
            this.broadcastInheritedDataIdentifierChange(e, c, a));
          break;
        }
      }
    }
    rehydrate(e) {
      ((this.parentHistory = e.parentHistory), (this.parentOverrides = e.parentOverrides));
      let t = new Map();
      for (let [n, o] of this.parentOverrides)
        for (let [i, s] of o) for (let [a, c] of s) t.set(c.rowIdx, c);
      this.replayParentHistory(t);
    }
    broadcastParentId(e) {
      for (let t of this.store.branches) {
        let n = t.getHierarchy(),
          o = n.ensureNodeData(e),
          i = n.getParentId(e);
        if (i && i !== m) {
          let s = n.ensureNodeData(i);
          if (s.inTree) {
            (n.markInTree(s, o, e), n.broadcastParentId(e));
            continue;
          }
        }
        (n.clearInTree(o, e), n.broadcastParentId(e));
      }
    }
    broadcastIsMaster(e) {
      for (let t of this.store.branches) {
        let n = t.getHierarchy();
        if (n.store.hasOwnRow(e, "isMaster")) continue;
        let o = n.ensureNodeData(e);
        (o.inTree && n.applyMasterState(o), n.broadcastIsMaster(e));
      }
    }
    broadcastInheritedIsFormContainerChange(e, t, n) {
      for (let o of this.store.branches) {
        let i = o.getHierarchy();
        i.store.hasOwnRow(e, "isFormContainer") ||
          (i.applyInheritedIsFormContainerIndexChange(e, t, n),
          i.broadcastInheritedIsFormContainerChange(e, t, n));
      }
    }
    applyInheritedIsFormContainerIndexChange(e, t, n) {
      let o = this.getNodeData(e);
      if (o) {
        if (!o.inTree) {
          (t || n) && this.indexes.syncRemovedFormContainer(e);
          return;
        }
        (t && this.indexes.syncRemovedFormContainer(e),
          n && this.indexes.syncAddedFormContainer(e));
      }
    }
    broadcastInheritedDataIdentifierChange(e, t, n) {
      for (let o of this.store.branches) {
        let i = o.getHierarchy();
        i.store.hasOwnRow(e, "dataIdentifier") ||
          (i.applyInheritedDataIdentifierIndexChange(e, t, n),
          i.broadcastInheritedDataIdentifierChange(e, t, n));
      }
    }
    applyInheritedDataIdentifierIndexChange(e, t, n) {
      let o = this.getNodeData(e);
      if (o) {
        if (!o.inTree) {
          ((t !== void 0 || n !== void 0) && this.indexes.syncRemovedWithDataIdentifier(e),
            t && this.indexes.syncRemovedDataIdentifier(t, e),
            n && this.indexes.syncRemovedDataIdentifier(n, e));
          return;
        }
        (t !== void 0 && n === void 0
          ? this.indexes.syncRemovedWithDataIdentifier(e)
          : t === void 0 && n !== void 0 && this.indexes.syncAddedWithDataIdentifier(e),
          t && this.indexes.syncRemovedDataIdentifier(t, e),
          n && this.indexes.syncAddedDataIdentifier(n, e));
      }
    }
    updateParentId(e, t) {
      ((this.hierarchyChanged = !0),
        this.applyParentIdRow(e, t),
        this.parentHistory.push(t),
        this.broadcastParentId(e));
    }
    replayParentHistory(e) {
      if (this.parentHistory.length === 0) return;
      this.hierarchyChanged = !0;
      let t = this.branchData.columns.id;
      for (let n of this.parentHistory) {
        let o = t.get(n);
        this.applyParentIdRow(o, n, e.get(n));
      }
    }
    getParentOverride(e, t, n) {
      return this.parentOverrides.get(e)?.get(t)?.get(n);
    }
    applyParentIdRow(e, t, n) {
      let o = this.ensureNodeData(e),
        i = this.getParentId(e),
        s = o.resolvedParentId,
        a = this.branchData.columns,
        c = a.seq.get(t),
        d = a.client.get(t);
      if (s === void 0 || Ne(c, d, a.seq.get(s), a.client.get(s))) {
        let h = n?.parentTo ?? a.value.get(t);
        ((o.resolvedParentId = t), this.updateParent(o, e, h, t, i));
      }
      o.parentIdHistory.push(t);
    }
    getParentRowIdx(e) {
      return this.getOwnNodeData(e)?.resolvedParentId ?? this.base?.getParentRowIdx(e);
    }
    getOwnParentRowIdx(e) {
      return this.getOwnNodeData(e)?.resolvedParentId;
    }
    getParentIdSeq(e) {
      let t = this.getOwnNodeData(e)?.resolvedParentId;
      return t !== void 0 ? this.branchData.columns.seq.get(t) : this.base?.getParentIdSeq(e);
    }
    getOwnHierarchyKey(e) {
      let t = this.getOwnNodeData(e)?.resolvedParentId;
      if (t === void 0) return;
      let n = this.branchData.columns,
        o = n.seq.get(t),
        i = n.client.get(t);
      return this.getParentOverride(e, o, i)?.parentTo ?? n.value.get(t);
    }
    getHierarchyKey(e) {
      let t = this.getOwnHierarchyKey(e);
      return t === void 0 ? this.base?.getHierarchyKey(e) : t;
    }
    getChildIndex(e, t) {
      let n = this.getChildrenIds(e),
        o = this.getHierarchyKey(t);
      if (typeof o != "string") return -1;
      let i = Ae(n, o, (s, a) => {
        let c = this.getHierarchyKey(s);
        return c < a ? -1 : c > a ? 1 : 0;
      });
      return n[i] === t ? i : -1;
    }
    getPositionIndex(e, t) {
      let n = this.getChildrenIds(e);
      return Ae(n, t, (o, i) => {
        let s = this.getHierarchyKey(o);
        return s < i ? -1 : s > i ? 1 : 0;
      });
    }
    getChildPosition(e) {
      let t = this.getHierarchyKey(e);
      if (t !== void 0) return Sr(t);
    }
    getParentId(e) {
      let t = this.getHierarchyKey(e);
      if (t !== void 0) return $(t);
    }
    getOwnParentId(e) {
      let t = this.getOwnHierarchyKey(e);
      if (t !== void 0) return $(t);
    }
    getOwnParentBySeq(e, t, n) {
      let o = this.getOwnNodeData(e);
      if (!o) return;
      let i = this.branchData.columns,
        s;
      for (let a of o.parentIdHistory) {
        let c = i.seq.get(a);
        if (c > t || (!n && c === t)) continue;
        let d = i.client.get(a);
        if (!s || c > s.seq || (c === s.seq && d > s.client)) {
          let f = i.id.get(a),
            h = this.getParentOverride(f, c, d);
          s = {
            id: f,
            seq: c,
            client: d,
            key: "parentid",
            value: h?.parentTo ?? i.value.get(a),
            index: a,
          };
        }
      }
      return s;
    }
    getParentBySeq(e, t) {
      let n = this.getOwnParentBySeq(e, t, !0);
      if (n) return n;
      if (this.getOwnNodeData(e)?.parentIdHistory?.length) return;
      let o = this.base;
      for (; !n && o; ) ((n = o.getOwnParentBySeq(e, o.store.seq, !0)), (o = o.base));
      return n;
    }
    findAncestorIdsBefore(e, t, n) {
      let o = new Set();
      for (;;) {
        if (e === t) return o;
        if (e === void 0 || e === m || o.has(e) || (o.add(e), !this.getNodeData(e))) return;
        let i = this.getParentBySeq(e, n);
        if (!i) return;
        e = $(i.value);
      }
    }
    clearParentOverrides(e, t) {
      let n = [],
        o = [],
        i = new Set();
      for (let [s, a] of this.parentOverrides)
        if (!(t && !t.has(s))) {
          for (let [c, d] of a)
            if (!(c < e)) {
              a.delete(c);
              for (let [f, h] of d) {
                let p = h.rowIdx,
                  g = this.getNodeData(s);
                if (!g || !(g.resolvedParentId === p)) continue;
                (n.push(h), i.add(h.nodeId));
                let R = $(h.parentTo);
                R !== m && (this.removeChild(R, s), i.add(R));
                let Z = $(h.parentFrom);
                if (Z !== m) {
                  let M = this.ensureNodeData(Z);
                  if (this.base && M.childrenById)
                    for (let re of M.childrenById.values()) {
                      let oe = this.branchData.columns.id.get(re);
                      if (this.getHierarchyKey(oe) === h.parentFrom) {
                        let le = {
                          ...h,
                          parentTo: this.createOverrideHierarchyKey(h.parentFrom, s),
                        };
                        o.push(le);
                      }
                    }
                  (this.addChild(M, s, p, !1), this.markInTree(M, g, s), i.add(Z));
                } else this.clearInTree(g, s);
              }
            }
        }
      this.recordInvalidation(i);
      for (let s of o) this.setParentOverride(s);
      return n;
    }
    setParentOverride(e) {
      let t = this.branchData.columns,
        n = e.rowIdx,
        o = t.client.get(n),
        i = t.seq.get(n),
        s = e.nodeId,
        a = this.parentOverrides.get(s);
      a || ((a = new Map()), this.parentOverrides.set(s, a));
      let c = a.get(i);
      (c || ((c = new Map()), a.set(i, c)), c.set(o, e));
    }
    createOverrideHierarchyKey(e, t) {
      let n = Sr(e),
        o = $(e);
      l(o !== m, "deleted parentid, cannot override hierarchyKey");
      let i = Be(n),
        s = i[i.length - 1];
      function a(h) {
        if (h.length !== i.length) return !1;
        for (let p = 0; p < i.length - 1; p++) {
          let g = i[p],
            S = h[p];
          if (g.position !== S.position || g.client !== S.client) return !1;
        }
        return !0;
      }
      let c = new Set(),
        d = this.getNodeData(o)?.childrenById;
      if (d)
        for (let h of d.keys()) {
          if (h === t) continue;
          let p = this.getHierarchyKey(h);
          l(typeof p == "string", "sibling must be a valid, non-deleted, hierarchy key");
          let g = Be(Sr(p));
          if (!a(g)) continue;
          let S = g[g.length - 1];
          S.position === s.position && c.add(S.client);
        }
      let f = Ki.find((h) => !c.has(h));
      return (
        l(f !== void 0, () => `override clients exhausted for node ${t}`),
        (s.client = f),
        Ir(o, Ie(i))
      );
    }
    postProcess(e) {
      if (this.hierarchyChanged) return ((this.hierarchyChanged = !1), this.resolveCycles(e));
    }
    resolveCycles(e) {
      if (this.base)
        for (let i of this.parentOverrides.values()) for (let s of i.keys()) s < e && (e = s);
      let t = this.clearParentOverrides(e),
        n = [],
        o = this.branchData.columns;
      this.parentHistory.sort((i, s) => {
        let a = o.seq.get(i),
          c = o.seq.get(s);
        return a === c ? o.client.get(i) - o.client.get(s) : a - c;
      });
      for (let i of this.parentHistory) this.resolveCycleForRow(i, e, n);
      return { prevOverrides: t, nextOverrides: n };
    }
    resolveCycleForRow(e, t, n) {
      let o = this.branchData.columns,
        i = o.id.get(e),
        s = o.seq.get(e);
      if (s < t) return;
      let a = o.value.get(e);
      l(a, () => `parentid without a value, index: ${e}`);
      let c = $(a),
        d = this.findAncestorIdsBefore(c, i, s);
      if (d) {
        let f = this.getNodeData(i);
        l(f, () => `node not in tree, id: ${i}`);
        let h = this.getOwnParentBySeq(i, s, !1),
          p;
        h && !this.findAncestorIdsBefore($(h.value), i, s) && (p = h);
        let S = f.resolvedParentId === e,
          R = S ? this.getParentId(i) : void 0,
          Z = {
            nodeId: i,
            parentFrom: a,
            parentTo: p && p.value !== m ? this.createOverrideHierarchyKey(p.value, i) : m,
            rowIdx: e,
          };
        if ((this.setParentOverride(Z), S))
          if (
            (l(R && R !== m, () => `unable to resolve parent of ${i}`),
            this.removeChild(R, i),
            p && p.value !== m)
          ) {
            let M = $(p.value),
              re = this.ensureNodeData(M);
            (this.addChild(re, i, p.index), this.markInTree(re, f, i));
          } else this.clearInTree(f, i);
        (n.push(Z), this.broadcastParentId(i), this.recordInvalidation(d));
      }
    }
  };
var Cr = class {
    constructor() {
      u(this, "map", new Map());
      u(this, "update", 0);
      u(this, "cache");
    }
    keys() {
      return this.map.keys();
    }
    ownKeys() {
      return this.map.keys();
    }
    values() {
      return this.map.values();
    }
    ownValues() {
      return this.map.values();
    }
    entries() {
      return this.map.entries();
    }
    ownEntries() {
      return this.map.entries();
    }
    has(e) {
      return this.map.has(e);
    }
    get(e) {
      return this.map.get(e);
    }
    ownGet(e) {
      return this.map.get(e);
    }
    set(e, t) {
      (this.updated(), this.map.set(e, t));
    }
    updated() {
      this.update++;
    }
    materialized() {
      return this.map.size > 0;
    }
  },
  Dt = class {
    constructor() {
      u(this, "map", new Map());
    }
    getLatestOrCreateGhost(e) {
      let t = this.map.get(e);
      return (t || ((t = new Cr()), this.map.set(e, t)), t);
    }
    *keys() {
      for (let [e, t] of this.map) t.materialized() && (yield e);
    }
    *values() {
      for (let e of this.map.values()) e.materialized() && (yield e);
    }
    set(e, t, n) {
      let o = this.map.get(e);
      (o || ((o = new Cr()), this.map.set(e, o)), o.set(t, n));
    }
    getLatest(e) {
      let t = this.map.get(e);
      if (t?.materialized()) return t;
    }
    getOwnLatest(e) {
      return this.getLatest(e);
    }
    get(e, t) {
      return this.map.get(e)?.get(t);
    }
    clear() {
      this.map.clear();
    }
    has(e, t) {
      return !!this.map.get(e)?.has(t);
    }
  },
  Co = class {
    constructor(e) {
      u(this, "base", e);
      u(this, "ownMap");
      u(this, "ownUpdate", 0);
      u(this, "cache");
    }
    get update() {
      return this.ownUpdate + this.base.update;
    }
    *keys() {
      let e = new Set();
      if (this.ownMap) for (let t of this.ownMap.keys()) (e.add(t), yield t);
      for (let t of this.base.keys()) e.has(t) || (yield t);
    }
    ownKeys() {
      return (l(this.ownMap, "Object is not materialized"), this.ownMap.keys());
    }
    *values() {
      for (let e of this.keys()) {
        let t = this.get(e);
        t !== void 0 && (yield t);
      }
    }
    *ownValues() {
      if (this.ownMap) for (let e of this.ownMap.values()) yield e;
    }
    *entries() {
      for (let e of this.keys()) {
        let t = this.get(e);
        t !== void 0 && (yield [e, t]);
      }
    }
    *ownEntries() {
      if (this.ownMap) for (let e of this.ownMap.entries()) yield e;
    }
    has(e) {
      return !!this.ownMap?.has(e) || this.base.has(e);
    }
    get(e) {
      return this.ownMap?.get(e) ?? this.base.get(e);
    }
    ownGet(e) {
      return this.ownMap?.get(e);
    }
    set(e, t) {
      (this.ownMap || (this.ownMap = new Map()), this.ownMap.set(e, t), this.updated());
    }
    updated() {
      this.ownUpdate++;
    }
    materialized() {
      return !!this.ownMap;
    }
  },
  Bt = class {
    constructor(e) {
      u(this, "base", e);
      u(this, "ownMap", new Map());
    }
    getLatestOrCreateGhost(e) {
      let t = this.ownMap.get(e);
      return (t || ((t = new Co(this.base.getLatestOrCreateGhost(e))), this.ownMap.set(e, t)), t);
    }
    *keys() {
      let e = new Set();
      for (let [t, n] of this.ownMap) n.materialized() && (e.add(t), yield t);
      for (let t of this.base.keys()) e.has(t) || (yield t);
    }
    *values() {
      for (let e of this.keys()) {
        let t = this.getLatest(e);
        t && (yield t);
      }
    }
    set(e, t, n) {
      this.getLatestOrCreateGhost(e).set(t, n);
    }
    getLatest(e) {
      return this.getOwnLatest(e) ?? this.base.getLatest(e);
    }
    getOwnLatest(e) {
      let t = this.ownMap.get(e);
      if (t?.materialized()) return t;
    }
    get(e, t) {
      let n = this.ownMap.get(e);
      return n ? n.get(t) : this.base.get(e, t);
    }
    clear() {
      this.ownMap.clear();
    }
    has(e, t) {
      return !!this.ownMap.get(e)?.has(t) || this.base.has(e, t);
    }
  };
var Rr = class {
  constructor(e, t, n) {
    u(this, "latest", e);
    u(this, "getCurrentValue", t);
    u(this, "base", n);
    u(this, "arrays", new Map());
  }
  getState(e) {
    let t = this.arrays.get(e);
    return (
      t ||
        ((t = { array: [], lastCounter: -1, currentCounter: 0, baseCounter: 0 }),
        this.arrays.set(e, t)),
      t
    );
  }
  getCounter(e) {
    return this.getState(e).currentCounter;
  }
  isDirty(e) {
    let t = this.getState(e);
    return this.base
      ? t.lastCounter !== t.currentCounter ||
          t.baseCounter !== this.base.getCounter(e) ||
          this.base.isDirty(e)
      : t.lastCounter !== t.currentCounter;
  }
  isMergeableArray(e, t) {
    if (t.length === 0) return !1;
    if (t.length === 1) return t[0] === O;
    for (let n of t) {
      let o = this.getCurrentValue(e, n);
      if (o !== m && o !== B) return Ee(o);
    }
    return !0;
  }
  getItemIds(e) {
    let t = this.getState(e);
    if (this.isDirty(e)) {
      let n = new Map();
      for (let i of this.base?.getItemIds(e) ?? []) {
        let s = this.getCurrentValue(e, i);
        Ee(s) && n.set(i, s);
      }
      let o = this.latest.getOwnLatest(e);
      if (o)
        for (let i of o.ownKeys()) {
          if (i === O) continue;
          let s = this.getCurrentValue(e, i);
          if (s === m || !Ee(s)) {
            n.delete(i);
            continue;
          }
          n.set(i, s);
        }
      ((t.array = Array.from(n.keys()).sort((i, s) => {
        let a = n.get(i),
          c = n.get(s);
        return a < c ? -1 : a > c ? 1 : 0;
      })),
        (t.baseCounter = this.base?.getCounter(e) ?? 0),
        (t.lastCounter = t.currentCounter));
    }
    return t.array;
  }
  invalidate(e) {
    let t = this.arrays.get(e);
    t && (t.currentCounter += 1);
  }
  clear() {
    this.arrays.clear();
  }
};
function du(r, e, t, n) {
  r !== "relaxed" &&
    l(Af(e, t, n), () => `Atomic arrays must only contain primitives: ${JSON.stringify(e)}`);
}
function Cf(r, e, t, n) {
  return r.some((o) => o(e, t, n));
}
var Rf = [Nf, kf, uu, _f, Mf, Bf, Ef, zf, Df, Tf, Of];
function Af(r, e, t) {
  if (Pf(r, e) || !r.some(Et)) return !0;
  let n = r.every((o) => o === null || (Et(o) && uu(o, e)));
  return r.every((o) => (o === null ? n : Et(o) && Cf(Rf, o, e, t)));
}
function Nf(r) {
  return "key" in r || ("offset" in r && "style" in r);
}
function kf(r) {
  return "_id" in r || "_layerId" in r;
}
function uu(r, e) {
  return e === "content" && ("field" in r || "text" in r);
}
function Tf(r) {
  return "type" in r && "property" in r && "fieldPath" in r;
}
function Of(r, e) {
  return e === "formSelectOptions";
}
function _f(r) {
  return "themeToken" in r;
}
function Mf(r) {
  return "__class" in r && r.__class === "PathSegment";
}
function Df(r) {
  return "__class" in r && r.__class === "GradientColorStop";
}
function Bf(r) {
  return "ids" in r && "targets" in r;
}
function Ef(r, e, t) {
  return e === "allowedFileTypes" && "extension" in r && t.includes("variables");
}
function zf(r) {
  return (
    ("id" in r && typeof r.id == "string") || ("identifier" in r && typeof r.identifier == "string")
  );
}
function Pf(r, e) {
  return e === "items" && r.some(lu) && r.every(Lf);
}
function Lf(r) {
  return !Et(r) || !("name" in r) || typeof r.name != "string"
    ? !1
    : !("id" in r) && !("moduleId" in r)
      ? !0
      : lu(r);
}
function lu(r) {
  return (
    Et(r) &&
    "id" in r &&
    typeof r.id == "string" &&
    "moduleId" in r &&
    typeof r.moduleId == "string"
  );
}
function Et(r) {
  return typeof r == "object" && r !== null;
}
var Ro = "$$atomic-",
  hu = 9,
  qf = Ro.length + hu;
function fu() {
  let r = $i();
  return (l(r.length === hu, "suffix must be 9 characters long"), Ro + r);
}
function $f(r) {
  return r.length === qf && r.startsWith(Ro);
}
var zt = class {
  constructor(e) {
    u(this, "value", e);
  }
};
function Ao(r, e) {
  let t = r.length,
    n = e.length,
    o = Array.from({ length: t + 1 }, () => new Array(n + 1).fill(0));
  for (let c = t - 1; c >= 0; --c)
    for (let d = n - 1; d >= 0; --d)
      r[c] === e[d]
        ? (o[c][d] = o[c + 1][d + 1] + 1)
        : (o[c][d] = Math.max(o[c + 1][d], o[c][d + 1]));
  let i = [],
    s = 0,
    a = 0;
  for (; s < t && a < n; )
    r[s] === e[a]
      ? ((s += 1), (a += 1))
      : o[s + 1][a] > o[s][a + 1]
        ? (i.push({ operation: "delete", index: s, value: r[s] }), (s += 1))
        : (i.push({ operation: "insert", index: a, value: e[a] }), (a += 1));
  for (; s < t; ) (i.push({ operation: "delete", index: s, value: r[s] }), (s += 1));
  for (; a < n; ) (i.push({ operation: "insert", index: a, value: e[a] }), (a += 1));
  return i;
}
var xe = "meta",
  We = { ROOT_ID: "rootId", VERSION: "version" };
function Kf(r, e) {
  return r.seq === e.seq ? r.client - e.client : r.seq - e.seq;
}
function pu(r) {
  if (!Array.isArray(r) || r.length === 0) return !1;
  let e,
    t = new Set(),
    n = !1;
  for (let o of r) {
    if (typeof o != "object" || o === null || mu(o)) return !1;
    Uf(o) && (n = !0);
    let i =
      typeof o.id == "string" ? "id" : typeof o.identifier == "string" ? "identifier" : void 0;
    if (!i) return !1;
    (e &&
      l(e === i, () => `Mergeable arrays must have consistent id/identifier: ${JSON.stringify(r)}`),
      (e = i));
    let s = o[e];
    if (!s) return !1;
    (n || l(!t.has(s), () => `Mergeable arrays must have unique ids: ${JSON.stringify(r)}`),
      t.add(s));
  }
  return !0;
}
function Uf(r) {
  return "__class" in r && r.__class === "PathSegment";
}
function mu(r) {
  return Ff(r) || jf(r);
}
function Ff(r) {
  return "id" in r && typeof r.id == "string" && "type" in r && r.type === "eventhandler";
}
function jf(r) {
  return !("id" in r) ||
    typeof r.id != "string" ||
    !("type" in r) ||
    r.type !== "object" ||
    !("value" in r) ||
    !Le(r.value)
    ? !1
    : Object.values(r.value).some(
        (e) => Le(e) && "type" in e && e.type === "image" && "value" in e
      );
}
function Hf(r, e, t = 0) {
  let n = {},
    o = n;
  for (let s = t; s < r.length - 1; ++s) {
    let a = r[s],
      c = {};
    ((o[a] = c), (o = c));
  }
  let i = r[r.length - 1];
  return ((o[i] = e), n);
}
function No(r) {
  return `${r.client}/${r.seq}/${r.id}/${r.key}/${JSON.stringify(r.value)}/${r.batch}`;
}
var Pt = class r {
  constructor({
    client: e,
    user: t,
    atomicArrays: n = "strict",
    branchId: o = x,
    base: i,
    table: s,
    extractIdFromObject: a,
    useHierarchyCache: c = !0,
  }) {
    u(this, "table");
    u(this, "branchData");
    u(this, "latest");
    u(this, "hierarchy");
    u(this, "sortedArrayCache");
    u(this, "branchOwnWriteIndex");
    u(this, "client");
    u(this, "user");
    u(this, "branchId");
    u(this, "base");
    u(this, "branches", []);
    u(this, "ownPermanentError", null);
    u(this, "atomicArrays");
    u(this, "extractIdFromObject");
    u(this, "positionClientId");
    u(this, "optimizedReading", !1);
    u(this, "inserting", !1);
    u(this, "batchStartIdx");
    u(this, "batchNo", 0);
    ((this.client = e),
      (this.user = t),
      (this.atomicArrays = n),
      (this.branchId = o),
      (this.base = i),
      (this.table = s ?? i?.table ?? new Y()),
      (this.branchData = this.table.getOrCreateBranch(this.branchId)),
      (this.positionClientId = Ui(this.branchId, this.client)),
      (this.latest = this.base ? new Bt(this.base.latest) : new Dt()),
      (this.extractIdFromObject = a),
      this.init(c),
      this.branchId !== x &&
        this.branchData.columns.length === 0 &&
        this.setObjectKey(this.branchId, O, B));
  }
  get manifest() {
    return this.branchData.manifest;
  }
  get minIndexCache() {
    return this.branchData.minIndexCache;
  }
  init(e = !0) {
    ((this.batchNo = 0),
      (this.batchStartIdx = void 0),
      (this.ownPermanentError = null),
      (this.branchData = this.table.getOrCreateBranch(this.branchId)),
      (this.branches.length = 0),
      (this.latest = this.base ? new Bt(this.base.latest) : new Dt()),
      (this.hierarchy = new Mt(this, this.latest, this.base?.hierarchy)),
      (this.branchOwnWriteIndex = this.base ? new lr(this.branchData) : void 0),
      (this.sortedArrayCache = new Rr(
        this.latest,
        (t, n) => this.getCurrentValue(t, n),
        this.base?.sortedArrayCache
      )),
      this.branchData.hierarchyData && e
        ? this.updateCaches(this.branchData.hierarchyData)
        : ((this.branchData.hierarchyData = new W(
            this.hierarchy.parentHistory,
            this.hierarchy.parentOverrides
          )),
          this.indexRowsOptimized(),
          this.hierarchy.postProcess(0)));
  }
  reset() {
    (l(this.branchId === x, "Cannot call reset on non main branches"),
      (this.table = new Y()),
      this.init());
  }
  static resetBranchDataForTesting(e) {
    (l(e.branchId !== x, "Cannot reset main branch data for testing"),
      e.table.branches.set(e.branchId, new E(e.branchData.codec, e.branchId, e.table.version)),
      e.init());
  }
  get permanentError() {
    for (let e = this; e; e = e.base) if (e.ownPermanentError) return e.ownPermanentError;
    return null;
  }
  throwIfPermanentError() {
    let e = this.permanentError;
    if (e) throw new Error("Store is permanently broken due to a previous error", { cause: e });
  }
  fromBuffer(e, t = !0) {
    (l(this.branchId === x, "Cannot call fromBuffer on non main branches"),
      (this.table = Y.fromBuffer(e)),
      this.init(t));
  }
  branch(e, t = !0) {
    let n = new r({
      client: this.client,
      user: this.user,
      atomicArrays: this.atomicArrays,
      branchId: e,
      base: this,
      table: this.table,
      extractIdFromObject: this.extractIdFromObject,
      useHierarchyCache: t,
    });
    return (this.branches.push(n), n);
  }
  updateCaches(e) {
    let t = this.manifest.getBatch(this.client);
    this.batchNo = t !== void 0 ? cr(t) : 0;
    let n = this.branchData.columns;
    for (let o = this.length - 1; o >= 0; o--) {
      let i = n.id.get(o);
      if (i === q) continue;
      this.branchOwnWriteIndex?.indexOwnRow(o);
      let s = n.key.get(o);
      if (s === "parentid") continue;
      let a = this.latest.getOwnLatest(i)?.ownGet(s);
      (a === void 0 || Yt(n, o, a)) &&
        (this.latest.set(i, s, o), this.hierarchy.updateLatestValue(i, s, o));
    }
    this.getHierarchy().rehydrate(e);
  }
  compare(e) {
    return this.manifest.compare(e);
  }
  setRoot(e) {
    this.setObjectKey(xe, We.ROOT_ID, e);
  }
  getRoot() {
    return this.getCurrentValue(xe, We.ROOT_ID);
  }
  getVersion() {
    return this.getCurrentValue(xe, We.VERSION);
  }
  setVersion(e) {
    this.setObjectKey(xe, We.VERSION, e);
  }
  isRoot(e) {
    return this.getCurrentValue(xe, We.ROOT_ID) === e;
  }
  get seq() {
    return this.branchData.metadata.seq;
  }
  set seq(e) {
    this.branchData.metadata.seq = e;
  }
  ensureMinSeq(e) {
    l(cn(e), () => `invalid seq: ${e}`);
    let t = this.seq;
    return (e > t && (this.seq = e), { from: t, to: this.seq });
  }
  getLastBatchNo() {
    return this.batchNo;
  }
  getSerializableRows(e, t) {
    return this.branchData.getSerializableRows(e, t);
  }
  getSerializableRowsAfterManifest(e) {
    return this.branchData.getSerializableRowsAfterManifest(e);
  }
  getRows(e, t) {
    return this.branchData.getRows(e, t);
  }
  getRowsSorted() {
    return this.getRows().sort(Kf);
  }
  getFirstRowForSeq(e) {
    return this.minIndexCache.get(e);
  }
  indexRowsOptimized() {
    let { client: e, id: t, key: n, seq: o, value: i, batch: s } = this.branchData.columns;
    this.optimizedReading = !0;
    for (let a = this.length - 1; a >= 0; a--)
      this.updateRowIndex(a, o.get(a), t.get(a), n.get(a), i.get(a), e.get(a), s.get(a));
    this.optimizedReading = !1;
  }
  merge(e) {
    return this.mergeRows(e.getRows());
  }
  mergeRows(e) {
    this.throwIfPermanentError();
    let t = new Set(this.getRows().map((o) => No(o))),
      n = 1 / 0;
    for (let o of e) {
      let i = No(o);
      t.has(i) ||
        (t.add(i),
        this.addRowData(o.id, o.key, o.value, o.client, o.seq, o.user, o.batch),
        (n = Math.min(n, o.seq)));
    }
    return (this.sortedArrayCache.clear(), this.hierarchy.postProcess(n), n);
  }
  append(e) {
    return this.addRows(e.getRows());
  }
  addSerializableRows(e) {
    this.throwIfPermanentError();
    let t = 1 / 0;
    for (let n of e) {
      let o = n.value;
      (A(o) && (o = N(o)),
        this.addRowData(n.id, n.key, o, n.client, n.seq, n.user, n.batch),
        (t = Math.min(t, n.seq)));
    }
    (this.sortedArrayCache.clear(), this.hierarchy.postProcess(this.base ? 0 : t));
  }
  addRows(e) {
    this.throwIfPermanentError();
    let t = 1 / 0;
    for (let o of e)
      (this.addRowData(o.id, o.key, o.value, o.client, o.seq, o.user, o.batch),
        (t = Math.min(t, o.seq)));
    this.sortedArrayCache.clear();
    let n = this.hierarchy.postProcess(t);
    return { minSeq: t, cycleResolutions: n };
  }
  replayRowList(e) {
    let t = { supersededRows: [], addedNodeIds: [] };
    if (e.length === 0) return t;
    let n = new Map(),
      o = new Set(),
      i = new Set(),
      s = (a) => {
        let c = n.get(a);
        if (c !== void 0) return c;
        let d = this.latest.getLatest(a) !== void 0;
        return (n.set(a, d), d);
      };
    return (
      this.batch(() => {
        let a = this.seq,
          c = a;
        for (let d of e) {
          if (!s(d.id)) o.add(d.id);
          else {
            let f = `${d.id}\0${d.key}`;
            if (!i.has(f)) {
              i.add(f);
              let h =
                d.key === "parentid"
                  ? this.hierarchy.getParentId(d.id) !== void 0
                  : this.latest.has(d.id, d.key);
              t.supersededRows.push({
                id: d.id,
                key: d.key,
                value: h ? this.getReplayableValue(d.id, d.key) : m,
              });
            }
          }
          this.addRowData(d.id, d.key, d.value, this.client, a++, d.user ?? this.user);
        }
        (this.sortedArrayCache.clear(), this.hierarchy.postProcess(c));
      }),
      (t.addedNodeIds = [...o]),
      t
    );
  }
  batch(e) {
    (this.throwIfPermanentError(), l(this.batchStartIdx === void 0, "You cannot nest batches"));
    let t = this.branchData.columns;
    this.batchStartIdx = t.client.length;
    try {
      let n = e(),
        o = t.client.length - this.batchStartIdx;
      if (o === 0) return n;
      this.batchNo++;
      let i = Fe({ batchNo: this.batchNo, rowCount: o });
      this.manifest.updateClientState(this.client, this.seq - 1, i);
      for (let s = this.batchStartIdx; s < this.batchStartIdx + o; s++) t.batch.add(i);
      return n;
    } catch (n) {
      throw (
        (this.ownPermanentError = n instanceof Error ? n : new Error(String(n), { cause: n })),
        n
      );
    } finally {
      this.batchStartIdx = void 0;
    }
  }
  updateKeyValue(e, t, n) {
    if (this.batchStartIdx === void 0) {
      this.batch(() => {
        this.updateKeyValue(e, t, n);
      });
      return;
    }
    this.addRowData(e, t, n, this.client, this.seq, this.user);
  }
  addRowData(e, t, n, o, i, s, a) {
    if (!this.shouldAddRow(e, t, n, i, o)) return;
    let c = this.branchData.columns;
    (c.client.add(o),
      c.seq.add(i),
      c.id.add(e),
      c.key.add(t),
      c.value.add(n),
      c.user.add(s),
      a && c.batch.add(a));
    let d = c.client.length - 1;
    this.updateRowIndex(d, i, e, t, n, o, a);
  }
  shouldAddRow(e, t, n, o, i) {
    let s =
      t === "parentid"
        ? this.hierarchy.getOwnParentRowIdx(e)
        : this.latest.getOwnLatest(e)?.ownGet(t);
    if (s === void 0 || s >= this.length) return !0;
    let a = this.branchData.columns;
    if (a.value.get(s) !== n) return !0;
    let d = a.seq.get(s),
      f = a.client.get(s);
    return !(d === o && f === i);
  }
  updateRowIndex(e, t, n, o, i, s, a) {
    if (a !== void 0 && s === this.client) {
      let f = cr(a);
      this.batchNo = Math.max(this.batchNo, f);
    }
    if (
      (a !== void 0 && this.manifest.updateClientState(s, t, a),
      this.manifest.addTimestamp(s, t),
      t >= this.seq && (this.seq = t + 1),
      n === q)
    )
      return;
    let c = this.latest.getOwnLatest(n)?.ownGet(o),
      d = this.branchData.columns;
    if ((this.branchOwnWriteIndex?.indexOwnRow(e), o === "parentid")) {
      if (!nu(i)) return;
      this.hierarchy.updateParentId(n, e);
    } else
      (c === void 0 || Ne(t, s, d.seq.get(c), d.client.get(c))) &&
        (this.latest.set(n, o, e), this.hierarchy.updateLatestValue(n, o, e));
    if (!this.optimizedReading) {
      let f = n.indexOf(".");
      f !== -1 && this.latest.getLatest(n.slice(0, f))?.updated();
    }
    (this.sortedArrayCache.invalidate(n), this.minIndexCache.add(t, e));
  }
  getParentId(e) {
    return this.hierarchy.getParentId(e);
  }
  getHierarchy() {
    return this.hierarchy;
  }
  getBranchOwnWriteIndex() {
    return (
      l(this.branchOwnWriteIndex, "Branch own write index is only available for branch stores"),
      this.branchOwnWriteIndex
    );
  }
  _getIdFromObject(e) {
    return this.extractIdFromObject?.(e);
  }
  createStoreId(e, t) {
    return `${e}.${t}`;
  }
  getReferenceValue(e) {
    return Array.isArray(e)
      ? e.map((t) => this.getReferenceValue(t))
      : we(e)
        ? (this.getMergeableArray(K(e)) ?? [])
        : ve(e)
          ? this.getObjectInner(K(e))
          : _t(e)
            ? this.getObjectInner(K(e))
            : e;
  }
  getCurrentValue(e, t) {
    if (t === "parentid") return this.hierarchy.getParentId(e);
    let n = this.latest.getOwnLatest(e)?.ownGet(t);
    return n !== void 0 ? this.branchData.columns.value.get(n) : this.base?.getCurrentValue(e, t);
  }
  hasOwnRow(e, t) {
    return t === "parentid"
      ? this.hierarchy.getOwnParentRowIdx(e) !== void 0
      : this.latest.getOwnLatest(e)?.ownGet(t) !== void 0;
  }
  getParentIdSeq(e) {
    return this.hierarchy.getParentIdSeq(e);
  }
  validateObjectUpdate(e, t) {
    if (!Le(t)) throw new Error("Store.setObject: object is not an object");
    let n = this._getIdFromObject(t);
    if (n && n !== e)
      throw new Error(
        `Mismatch between provided id and id extracted from the store: ${n} !== ${e}`
      );
    return e;
  }
  deleteRemovedKeys(e, t) {
    let n = this.latest.getLatest(e);
    if (n) for (let o of n.keys()) o !== O && (o in t || this.setObjectKey(e, o, m));
  }
  createHierarchyKey(e, t, n = -1) {
    let o = this.getChildrenIds(t),
      i = this.hierarchy.getChildIndex(t, e);
    if (n < 0) {
      let g = i >= 0 ? o.length : o.length + 1;
      n = Math.max(g + n, 0);
    }
    i >= 0 && n > i && (n += 1);
    let s = Math.min(n, o.length),
      a = s > 0 ? o[s - 1] : void 0,
      c = o[s],
      d = a ? this.hierarchy.getChildPosition(a) : void 0,
      f = c ? this.hierarchy.getChildPosition(c) : void 0,
      h = sr(d, f, this.positionClientId);
    return Ir(t, h);
  }
  ensureHasChildren(e) {
    this.getCurrentValue(e, "children") !== B && this.setObjectKey(e, "children", B);
  }
  insertNode(e, t, n) {
    l(typeof e?.id == "string", "inserting node without a valid id");
    let o = this.inserting;
    this.inserting = !0;
    try {
      (this.setObject(e.id, e), this.ensureHasChildren(t));
      let i = this.createHierarchyKey(e.id, t, n);
      this.setObjectKey(e.id, "parentid", i);
    } finally {
      this.inserting = o;
    }
  }
  removeNode(e) {
    (l(
      this.latest.get(e, "id") !== void 0,
      () => `trying to remove a node that doesn't exist: ${e}`
    ),
      this.setObjectKey(e, "parentid", m));
  }
  updateNode(e, t) {
    l(
      this.latest.get(e, "id") !== void 0,
      () => `trying to update a node that doesn't exist: ${e}`
    );
    for (let n in t) n !== "parentid" && this.setObjectKey(e, n, t[n]);
  }
  updateNestedObject(e, t) {
    let [n, ...o] = e;
    l(
      this.latest.get(n, "id") !== void 0,
      () => `trying to update nested properties on node doesn't exist: ${n}`
    );
    for (let i in t) i !== "parentid" && this.setObjectKeyPath(n, [...o, i], t[i]);
  }
  moveNode(e, t, n) {
    (l(this.latest.get(e, "id") !== void 0, () => `trying to move a node that doesn't exist: ${e}`),
      this.ensureHasChildren(t));
    let o = this.createHierarchyKey(e, t, n);
    this.setObjectKey(e, "parentid", o);
  }
  setObject(e, t) {
    let n = this.validateObjectUpdate(e, t);
    if ((this.deleteRemovedKeys(n, t), Object.keys(t).length === 0)) {
      this.setObjectKey(n, O, B);
      return;
    }
    for (let o in t) o === "children" || o === "parentid" || this.setObjectKey(n, o, t[o]);
    if (!(!("children" in t) || !Array.isArray(t.children))) {
      this.setObjectKey(n, "children", B);
      for (let o of t.children) this.insertNode(o, n);
    }
  }
  resolveObjectInArrayReference(e, t, n) {
    let o = this._getIdFromObject(t);
    if (o === void 0) {
      let a;
      (mu(t)
        ? (a = `__${n}_${this.client.toString(36)}`)
        : typeof t.id == "string"
          ? (a = t.id)
          : typeof t.identifier == "string"
            ? (a = t.identifier)
            : (a = `__${n}_${this.client.toString(36)}`),
        (o = this.createStoreId(e, a)));
    }
    let i = this.getCurrentValue(e, o) === m,
      s = this.inserting;
    this.inserting = this.inserting || i;
    try {
      this.setObject(o, t);
    } finally {
      this.inserting = s;
    }
    return So(o);
  }
  createAtomicArray(e, t) {
    let n = [];
    for (let o = 0; o < t.length; o++) {
      let i = t[o];
      if (Le(i)) n.push(this.resolveObjectInArrayReference(e, i, o));
      else if (pu(i)) {
        let s = this.createStoreId(e, o.toString());
        (this.setMergeableArray(s, i), n.push(Io(s)));
      } else
        Array.isArray(i) ? n.push(this.createAtomicArray(e + "." + o.toString(), i)) : n.push(i);
    }
    return n;
  }
  cleanExistingReferenceValue(e, t) {
    (t !== null && typeof t == "object" && !Array.isArray(t)) ||
      ((ve(e) || we(e)) && this.deleteRemovedKeys(K(e), {}));
  }
  setObjectKey(e, t, n) {
    let o = this.getCurrentValue(e, t);
    if (n instanceof zt) {
      let a = fu(),
        c = this.createStoreId(e, `${t}.${a}`);
      (this.setObject(c, n.value), this.updateKeyValue(e, t, ou(c)));
      return;
    }
    if (Le(n)) {
      let a = ve(o) ? K(o) : void 0,
        c = a ?? this._getIdFromObject(n) ?? this.createStoreId(e, t);
      (this.setObject(c, n), (!a || this.inserting) && this.updateKeyValue(e, t, So(c)));
      return;
    }
    if (!Array.isArray(n)) {
      (o !== n || this.inserting) &&
        (typeof o == "string" && this.cleanExistingReferenceValue(o, n),
        this.updateKeyValue(e, t, n));
      return;
    }
    if (pu(n) || (n.length === 0 && we(o))) {
      let a = we(o) ? K(o) : void 0,
        c = a ?? this.createStoreId(e, t),
        d = o === m,
        f = this.inserting;
      this.inserting = this.inserting || d;
      try {
        (this.setMergeableArray(c, n), (!a || this.inserting) && this.updateKeyValue(e, t, Io(c)));
      } finally {
        this.inserting = f;
      }
      return;
    }
    (du(this.atomicArrays, n, t, e),
      typeof o == "string" && this.cleanExistingReferenceValue(o, n));
    let i = this.createStoreId(e, t),
      s = this.createAtomicArray(i, n);
    (!this.inserting && Array.isArray(o) && Xt(s, o)) || this.updateKeyValue(e, t, s);
  }
  setObjectKeyPath(e, t, n) {
    if (!t[0]) return;
    let o = e;
    for (let s = 0; s < t.length - 1; ++s) {
      let a = t[s],
        c = this.getCurrentValue(o, a);
      if (c === m) {
        let d = Hf(t.slice(s + 1), n);
        this.setObjectKey(o, a, d);
        return;
      }
      if ((c || (this.setObjectKey(o, a, {}), (c = this.getCurrentValue(o, a))), !ve(c))) {
        let d = t.slice(0, s + 1);
        throw new Error(`${d.join(".")} is not an object`);
      }
      o = K(c);
    }
    let i = t[t.length - 1];
    this.setObjectKey(o, i, n);
  }
  getChildrenIds(e) {
    return this.hierarchy.getChildrenIds(e);
  }
  getSubtreeIds(e) {
    let t = new Set();
    for (let n of e) this.collectSubtreeObject(n, t);
    return t;
  }
  collectSubtreeObject(e, t) {
    if (t.has(e)) return;
    t.add(e);
    let n = this.getLatest(e);
    if (!n) return;
    let o = Array.from(n.keys());
    if (o.length > 0) {
      let i = this.sortedArrayCache.isMergeableArray(e, o);
      for (let s of o)
        if (s !== O)
          if (i) this.collectSubtreeObject(s, t);
          else {
            let a = this.getCurrentValue(e, s);
            this.collectSubtreeValue(a, t);
          }
    }
    for (let i of this.hierarchy.getCachedChildrenIds(e)) this.collectSubtreeObject(i, t);
  }
  collectSubtreeValue(e, t) {
    if (ve(e) || _t(e)) {
      this.collectSubtreeObject(K(e), t);
      return;
    }
    if (we(e)) {
      this.collectSubtreeObject(K(e), t);
      return;
    }
    if (Array.isArray(e)) for (let n of e) this.collectSubtreeValue(n, t);
  }
  getLatest(e) {
    return this.latest.getLatest(e);
  }
  has(e) {
    return this.latest.getLatest(e) !== void 0;
  }
  getObjectKey(e, t) {
    if (this.getCurrentValue(e, O) === m) return;
    let n = this.getCurrentValue(e, t);
    if (n !== m) return this.getReferenceValue(n);
  }
  getReplayableValue(e, t) {
    return t === "parentid" ? this.hierarchy.getHierarchyKey(e) : this.getCurrentValue(e, t);
  }
  getRawObjectKey(e, t) {
    if (this.latest.get(e, t) === void 0) return ed;
    let o = this.getCurrentValue(e, t);
    return o === m ? o : this.getReferenceValue(o);
  }
  getObject(e) {
    return (this.throwIfPermanentError(), this.getObjectInner(e));
  }
  getObjectWithShallowChildren(e, t) {
    return (this.throwIfPermanentError(), this.getObjectInner(e, t));
  }
  getObjectInner(e, t = 1 / 0) {
    let n = [{ depth: 0, id: e, parent: void 0 }],
      o,
      i = new Set();
    for (; n.length > 0; ) {
      let { id: s, depth: a, parent: c } = n.pop();
      if (i.has(s)) continue;
      i.add(s);
      let d = this.latest.getLatest(s);
      if ((!d && this.hierarchy.getParentRowIdx(s) === void 0) || this.getCurrentValue(s, O) === m)
        continue;
      let f = {};
      if ((o === void 0 && (o = f), c && c.children.push(f), this.isRoot(s))) f.parentid = null;
      else {
        let h = this.getParentId(s);
        h && (f.parentid = h);
      }
      if (d) {
        for (let h of d.keys()) {
          if (h === O) continue;
          let p = this.getCurrentValue(s, h);
          p !== m && (h === "children" || h === "parentid" || (f[h] = this.getReferenceValue(p)));
        }
        if (a < t && d.has("children")) {
          let h = this.getChildrenIds(s);
          f.children = [];
          for (let p = h.length - 1; p >= 0; --p) {
            let g = h[p];
            n.push({ id: g, depth: a + 1, parent: f });
          }
        }
      }
    }
    return o;
  }
  getObjectKeys(e, t) {
    let n = this.latest.getLatest(e);
    if (!n) return [];
    let o = [];
    for (let i of n.keys()) t(i) && o.push(i);
    return o;
  }
  applyArrayEdits(e, t, n, o) {
    if (n.length === 0) return;
    let i = new Set(o),
      s = t.map((c) => this.getCurrentValue(e, c)),
      a = 0;
    for (let c of n) {
      let d = c.value;
      switch (c.operation) {
        case "delete":
          (s.splice(c.index + a, 1), i.has(c.value) || this.updateKeyValue(e, d, m), a--);
          break;
        case "insert": {
          let f = sr(s[c.index - 1], s[c.index], this.positionClientId);
          (this.updateKeyValue(e, d, f), s.splice(c.index, 0, f), a++);
          break;
        }
      }
    }
  }
  setMergeableArray(e, t) {
    let n = this.getMergeableArrayIds(e),
      o = !n;
    if (!n) {
      let a = this.latest.getLatest(e);
      if (a) for (let c of a.keys()) this.updateKeyValue(e, c, m);
      n = [];
    }
    (o || this.inserting) && this.updateKeyValue(e, O, B);
    let i = [];
    for (let a = 0; a < t.length; a++) {
      let c = this.resolveObjectInArrayReference(e, t[a], a);
      i.push(K(c));
    }
    let s = Ao(n, i);
    if ((this.applyArrayEdits(e, n, s, i), this.inserting)) {
      let a = new Set(n);
      for (let c of i) {
        if (!a.has(c)) continue;
        let d = this.getCurrentValue(e, c);
        this.updateKeyValue(e, c, d);
      }
    }
  }
  getMergeableArrayItemPosition(e, t) {
    let n = this.getCurrentValue(e, this.createStoreId(e, t));
    return Ee(n) ? n : void 0;
  }
  getMergeableArray(e) {
    let t = this.getLatest(e)?.keys(),
      n = t ? Array.from(t) : [];
    if (!this.sortedArrayCache.isMergeableArray(e, n))
      return this.base ? this.base.getMergeableArray(e) : void 0;
    let o = this.sortedArrayCache.getItemIds(e),
      i = [];
    for (let s of o) {
      let a = this.getObjectInner(s);
      a && i.push(a);
    }
    return i;
  }
  getMergeableArrayIds(e) {
    let t = this.getLatest(e)?.keys(),
      n = t ? Array.from(t) : [];
    return this.sortedArrayCache.isMergeableArray(e, n)
      ? this.sortedArrayCache.getItemIds(e)
      : this.base?.getMergeableArrayIds(e);
  }
  get length() {
    return this.branchData.columns.client.length;
  }
  static verifyBatches(e) {
    let t = new Map(),
      n = new Set();
    for (let o of e) {
      let i = o.branchId ?? x,
        s = `${i}/${No(o)}`;
      if (n.has(s)) continue;
      n.add(s);
      let a = t.get(o.client);
      a || ((a = new Map()), t.set(o.client, a));
      let c = a.get(i);
      c || ((c = new Map()), a.set(i, c));
      let d = c.get(o.batch) ?? 0;
      c.set(o.batch, d + 1);
    }
    for (let [o, i] of t)
      for (let [s, a] of i)
        for (let [c, d] of a) {
          let { rowCount: f } = to(c);
          l(
            f === d,
            () =>
              `Update row count does not match batch row count. Batch: ${c} Update count: ${d} Batch count: ${f}`
          );
        }
  }
  createBranchNodeChangeReader(e) {
    return (
      l(this.base, "Can't create a branch node change reader for a main store"),
      new gr(this, e)
    );
  }
  *childBranchIds() {
    for (let e of this.hierarchy.getCachedChildrenIds(Jt)) {
      if (e === x) continue;
      let t = this.getObjectKey(e, ot);
      (l(typeof t == "string", () => `Branch has no baseId: ${e}`),
        t === this.branchId && (yield e));
    }
  }
  compactBranch(e, t, n, o) {
    let i = new Set(),
      s = new Set(),
      a = !1;
    for (let f of this.childBranchIds()) {
      let h = this.branch(f);
      h.getHierarchy().resolveCycles(0);
      let p = new Set(),
        g = new Set(),
        S = h.compactBranch(e, p, g, o);
      a ||= S !== h;
      for (let R of p) i.add(R);
      for (let R of g) s.add(R);
    }
    if (!a && this.branchData.metadata.compactedLength === this.length) {
      ((this.branchData.metadata.compactedAt = o),
        e.branches.set(this.branchId, this.branchData),
        iu(this, t, n));
      for (let f of i) t.add(f);
      for (let f of s) n.add(f);
      return this;
    }
    let c = new r({
        user: this.user,
        client: this.client,
        atomicArrays: this.atomicArrays,
        branchId: this.branchId,
        base: this.base,
        table: e,
        extractIdFromObject: this.extractIdFromObject,
      }),
      d = this.branchData.metadata.compactedLength;
    (wr.run(this, c, d, i, s),
      (c.branchData.metadata.compactedAt = o),
      (c.branchData.metadata.compactedLength = c.length));
    for (let f of i) t.add(f);
    for (let f of s) n.add(f);
    return c;
  }
  compact(e = Date.now()) {
    l(this.branchId === x, "Cannot call compact on non main branches");
    let t = new Y(this.table.version);
    return this.compactBranch(t, new Set(), new Set(), e);
  }
  toBuffer() {
    return this.table.toBuffer();
  }
  async writeToStream(e) {
    return this.table.writeToStream(e);
  }
  releaseColumnLookups() {
    this.table.releaseColumnLookups();
  }
};
var yu = {
  RootNode: !0,
  FrameNode: !0,
  ShapeContainerNode: !0,
  CanvasPageNode: !0,
  DesignPageNode: !0,
  PathNode: !0,
  BooleanShapeNode: !0,
  SVGNode: !0,
  TextNode: !0,
  RichTextNode: !0,
  RectangleShapeNode: !0,
  OvalShapeNode: !0,
  OverlayNode: !0,
  PolygonShapeNode: !0,
  StarShapeNode: !0,
  ShapeGroupNode: !0,
  SmartComponentNode: !0,
  WebPageNode: !0,
  CodeComponentNode: !0,
  ColorStyleTokenListNode: !0,
  ColorStyleTokenNode: !0,
  ErrorListNode: !0,
  ErrorNode: !0,
  ExternalModuleNode: !0,
  ExternalModulesListNode: !0,
  LocalModulesListNode: !0,
  LocalModuleNode: !0,
  ContentManagementNode: !0,
  CollectionNode: !0,
  CollectionItemNode: !0,
  ComponentPresetNode: !0,
  PresetsListNode: !0,
  BlockquoteStylePresetNode: !0,
  TableStylePresetNode: !0,
  TextStylePresetNode: !0,
  LinkStylePresetNode: !0,
  InlineCodeStylePresetNode: !0,
  ImageStylePresetNode: !0,
  RoutesNode: !0,
  RedirectRouteNode: !0,
  RewriteRouteNode: !0,
  RouteSegmentNode: !0,
  RouteSegmentRootNode: !0,
  FormPlainTextInputNode: !0,
  FormBooleanInputNode: !0,
  FormSelectNode: !0,
  ProxyRouteNode: !0,
  LayoutTemplateNode: !0,
  SlotNode: !0,
  SlotPropertyNode: !0,
  EntityFolderNode: !0,
  EntityReferenceNode: !0,
  EntityRootNode: !0,
  BlockquoteEntityTypeRootNode: !0,
  InlineCodeEntityTypeRootNode: !0,
  LinkEntityTypeRootNode: !0,
  TextEntityTypeRootNode: !0,
  ColorEntityTypeRootNode: !0,
  CMSEntityTypeRootNode: !0,
  CodeFileEntityTypeRootNode: !0,
  ComponentEntityTypeRootNode: !0,
  LayoutTemplateEntityTypeRootNode: !0,
  VectorSetEntityTypeRootNode: !0,
  FunnelsEntityTypeRootNode: !0,
  AbTestsEntityTypeRootNode: !0,
  ContentManagementEntityTypeRootNode: !0,
  DesignPageEntityTypeRootNode: !0,
  VectorSetNode: !0,
  AnalyticsScopeNode: !0,
  FunnelNode: !0,
  FunnelStepNode: !0,
  FunnelStepActionNode: !0,
  LocalizationGlossaryNode: !0,
  LocalizationGlossaryItemNode: !0,
  HeaderRouteNode: !0,
  BranchesNode: !0,
  BranchNode: !0,
  CustomCodeScopeNode: !0,
  CustomCodeNode: !0,
  ShaderNode: !0,
};
function Vf(r) {
  return r in yu;
}
var Zf = (r) => (typeof r.__class == "string" && Vf(r.__class) ? r.id : void 0);
function Gf(r, e = an(), t = {}) {
  return new Pt({ atomicArrays: "strict", ...t, client: e, user: r, extractIdFromObject: Zf });
}
function gu(r) {
  return Map.groupBy(r, (e) => e.branchId ?? x);
}
var Pi = {};
nt(Pi, {
  $brand: () => dn,
  $input: () => Aa,
  $output: () => Ra,
  NEVER: () => Fi,
  TimePrecision: () => _a,
  ZodAny: () => Yo,
  ZodArray: () => ti,
  ZodBase64: () => Vr,
  ZodBase64URL: () => Zr,
  ZodBigInt: () => rt,
  ZodBigIntFormat: () => Jr,
  ZodBoolean: () => tt,
  ZodCIDRv4: () => jr,
  ZodCIDRv6: () => Hr,
  ZodCUID: () => Pr,
  ZodCUID2: () => Lr,
  ZodCatch: () => xi,
  ZodCodec: () => on,
  ZodCustom: () => Wt,
  ZodCustomStringFormat: () => Qe,
  ZodDate: () => jt,
  ZodDefault: () => gi,
  ZodDiscriminatedUnion: () => ni,
  ZodE164: () => Gr,
  ZodEmail: () => Br,
  ZodEmoji: () => Er,
  ZodEnum: () => Ye,
  ZodError: () => Wf,
  ZodExactOptional: () => pi,
  ZodFile: () => hi,
  ZodFirstPartyTypeKind: () => Ei,
  ZodFunction: () => Mi,
  ZodGUID: () => qt,
  ZodIPv4: () => Ur,
  ZodIPv6: () => Fr,
  ZodISODate: () => kr,
  ZodISODateTime: () => Nr,
  ZodISODuration: () => Or,
  ZodISOTime: () => Tr,
  ZodIntersection: () => oi,
  ZodIssueCode: () => Yf,
  ZodJWT: () => Wr,
  ZodKSUID: () => Kr,
  ZodLazy: () => Ti,
  ZodLiteral: () => li,
  ZodMAC: () => jo,
  ZodMap: () => di,
  ZodNaN: () => Ri,
  ZodNanoID: () => zr,
  ZodNever: () => Qo,
  ZodNonOptional: () => rn,
  ZodNull: () => Wo,
  ZodNullable: () => yi,
  ZodNumber: () => et,
  ZodNumberFormat: () => Pe,
  ZodObject: () => Vt,
  ZodOptional: () => tn,
  ZodPipe: () => nn,
  ZodPrefault: () => Ii,
  ZodPromise: () => _i,
  ZodReadonly: () => Ai,
  ZodRealError: () => U,
  ZodRecord: () => Gt,
  ZodSet: () => ui,
  ZodString: () => Xe,
  ZodStringFormat: () => C,
  ZodSuccess: () => vi,
  ZodSymbol: () => Zo,
  ZodTemplateLiteral: () => ki,
  ZodTransform: () => fi,
  ZodTuple: () => si,
  ZodType: () => w,
  ZodULID: () => qr,
  ZodURL: () => Ft,
  ZodUUID: () => ae,
  ZodUndefined: () => Go,
  ZodUnion: () => Zt,
  ZodUnknown: () => Xo,
  ZodVoid: () => ei,
  ZodXID: () => $r,
  ZodXor: () => ri,
  _ZodString: () => Dr,
  _default: () => bi,
  _function: () => Cl,
  any: () => rl,
  array: () => Ht,
  base64: () => qu,
  base64url: () => $u,
  bigint: () => Yu,
  boolean: () => Vo,
  catch: () => Ci,
  check: () => Rl,
  cidrv4: () => Pu,
  cidrv6: () => Lu,
  clone: () => it,
  codec: () => wl,
  coerce: () => zi,
  config: () => he,
  core: () => ye,
  cuid: () => Tu,
  cuid2: () => Ou,
  custom: () => Al,
  date: () => ol,
  decode: () => Po,
  decodeAsync: () => qo,
  describe: () => Nl,
  discriminatedUnion: () => ul,
  e164: () => Ku,
  email: () => Iu,
  emoji: () => Nu,
  encode: () => zo,
  encodeAsync: () => Lo,
  endsWith: () => lt,
  enum: () => Qr,
  exactOptional: () => mi,
  file: () => gl,
  flattenError: () => Qt,
  float32: () => Zu,
  float64: () => Gu,
  formatError: () => er,
  fromJSONSchema: () => Bl,
  function: () => Cl,
  getErrorMap: () => Qf,
  globalRegistry: () => ce,
  gt: () => pe,
  gte: () => F,
  guid: () => Su,
  hash: () => Vu,
  hex: () => Hu,
  hostname: () => ju,
  httpUrl: () => Au,
  includes: () => dt,
  instanceof: () => Tl,
  int: () => Mr,
  int32: () => Wu,
  int64: () => Xu,
  intersection: () => ii,
  ipv4: () => Bu,
  ipv6: () => zu,
  iso: () => Je,
  json: () => _l,
  jwt: () => Uu,
  keyof: () => il,
  ksuid: () => Du,
  lazy: () => Oi,
  length: () => Ke,
  literal: () => yl,
  locales: () => Ca,
  looseObject: () => cl,
  looseRecord: () => hl,
  lowercase: () => at,
  lt: () => fe,
  lte: () => ne,
  mac: () => Eu,
  map: () => fl,
  maxLength: () => $e,
  maxSize: () => Oe,
  meta: () => kl,
  mime: () => ht,
  minLength: () => me,
  minSize: () => de,
  multipleOf: () => Te,
  nan: () => Sl,
  nanoid: () => ku,
  nativeEnum: () => ml,
  negative: () => Bn,
  never: () => Yr,
  nonnegative: () => zn,
  nonoptional: () => wi,
  nonpositive: () => En,
  normalize: () => pt,
  null: () => Jo,
  nullable: () => Kt,
  nullish: () => bl,
  number: () => Ho,
  object: () => sl,
  optional: () => $t,
  overwrite: () => ft,
  parse: () => Mo,
  parseAsync: () => Do,
  partialRecord: () => ll,
  pipe: () => Ut,
  positive: () => Dn,
  prefault: () => Si,
  preprocess: () => Ml,
  prettifyError: () => Zi,
  promise: () => xl,
  property: () => Pn,
  readonly: () => Ni,
  record: () => ci,
  refine: () => Di,
  regex: () => st,
  regexes: () => ke,
  registry: () => Na,
  safeDecode: () => Ko,
  safeDecodeAsync: () => Fo,
  safeEncode: () => $o,
  safeEncodeAsync: () => Uo,
  safeParse: () => Bo,
  safeParseAsync: () => Eo,
  set: () => pl,
  setErrorMap: () => Xf,
  size: () => qe,
  slugify: () => bt,
  startsWith: () => ut,
  strictObject: () => al,
  string: () => _r,
  stringFormat: () => Fu,
  stringbool: () => Ol,
  success: () => Il,
  superRefine: () => Bi,
  symbol: () => el,
  templateLiteral: () => vl,
  toJSONSchema: () => Yc,
  toLowerCase: () => yt,
  toUpperCase: () => gt,
  transform: () => en,
  treeifyError: () => Vi,
  trim: () => mt,
  tuple: () => ai,
  uint32: () => Ju,
  uint64: () => Qu,
  ulid: () => _u,
  undefined: () => tl,
  union: () => Xr,
  unknown: () => ze,
  uppercase: () => ct,
  url: () => Ru,
  util: () => v,
  uuid: () => wu,
  uuidv4: () => vu,
  uuidv6: () => xu,
  uuidv7: () => Cu,
  void: () => nl,
  xid: () => Mu,
  xor: () => dl,
});
var Lt = {};
nt(Lt, {
  ZodAny: () => Yo,
  ZodArray: () => ti,
  ZodBase64: () => Vr,
  ZodBase64URL: () => Zr,
  ZodBigInt: () => rt,
  ZodBigIntFormat: () => Jr,
  ZodBoolean: () => tt,
  ZodCIDRv4: () => jr,
  ZodCIDRv6: () => Hr,
  ZodCUID: () => Pr,
  ZodCUID2: () => Lr,
  ZodCatch: () => xi,
  ZodCodec: () => on,
  ZodCustom: () => Wt,
  ZodCustomStringFormat: () => Qe,
  ZodDate: () => jt,
  ZodDefault: () => gi,
  ZodDiscriminatedUnion: () => ni,
  ZodE164: () => Gr,
  ZodEmail: () => Br,
  ZodEmoji: () => Er,
  ZodEnum: () => Ye,
  ZodExactOptional: () => pi,
  ZodFile: () => hi,
  ZodFunction: () => Mi,
  ZodGUID: () => qt,
  ZodIPv4: () => Ur,
  ZodIPv6: () => Fr,
  ZodIntersection: () => oi,
  ZodJWT: () => Wr,
  ZodKSUID: () => Kr,
  ZodLazy: () => Ti,
  ZodLiteral: () => li,
  ZodMAC: () => jo,
  ZodMap: () => di,
  ZodNaN: () => Ri,
  ZodNanoID: () => zr,
  ZodNever: () => Qo,
  ZodNonOptional: () => rn,
  ZodNull: () => Wo,
  ZodNullable: () => yi,
  ZodNumber: () => et,
  ZodNumberFormat: () => Pe,
  ZodObject: () => Vt,
  ZodOptional: () => tn,
  ZodPipe: () => nn,
  ZodPrefault: () => Ii,
  ZodPromise: () => _i,
  ZodReadonly: () => Ai,
  ZodRecord: () => Gt,
  ZodSet: () => ui,
  ZodString: () => Xe,
  ZodStringFormat: () => C,
  ZodSuccess: () => vi,
  ZodSymbol: () => Zo,
  ZodTemplateLiteral: () => ki,
  ZodTransform: () => fi,
  ZodTuple: () => si,
  ZodType: () => w,
  ZodULID: () => qr,
  ZodURL: () => Ft,
  ZodUUID: () => ae,
  ZodUndefined: () => Go,
  ZodUnion: () => Zt,
  ZodUnknown: () => Xo,
  ZodVoid: () => ei,
  ZodXID: () => $r,
  ZodXor: () => ri,
  _ZodString: () => Dr,
  _default: () => bi,
  _function: () => Cl,
  any: () => rl,
  array: () => Ht,
  base64: () => qu,
  base64url: () => $u,
  bigint: () => Yu,
  boolean: () => Vo,
  catch: () => Ci,
  check: () => Rl,
  cidrv4: () => Pu,
  cidrv6: () => Lu,
  codec: () => wl,
  cuid: () => Tu,
  cuid2: () => Ou,
  custom: () => Al,
  date: () => ol,
  describe: () => Nl,
  discriminatedUnion: () => ul,
  e164: () => Ku,
  email: () => Iu,
  emoji: () => Nu,
  enum: () => Qr,
  exactOptional: () => mi,
  file: () => gl,
  float32: () => Zu,
  float64: () => Gu,
  function: () => Cl,
  guid: () => Su,
  hash: () => Vu,
  hex: () => Hu,
  hostname: () => ju,
  httpUrl: () => Au,
  instanceof: () => Tl,
  int: () => Mr,
  int32: () => Wu,
  int64: () => Xu,
  intersection: () => ii,
  ipv4: () => Bu,
  ipv6: () => zu,
  json: () => _l,
  jwt: () => Uu,
  keyof: () => il,
  ksuid: () => Du,
  lazy: () => Oi,
  literal: () => yl,
  looseObject: () => cl,
  looseRecord: () => hl,
  mac: () => Eu,
  map: () => fl,
  meta: () => kl,
  nan: () => Sl,
  nanoid: () => ku,
  nativeEnum: () => ml,
  never: () => Yr,
  nonoptional: () => wi,
  null: () => Jo,
  nullable: () => Kt,
  nullish: () => bl,
  number: () => Ho,
  object: () => sl,
  optional: () => $t,
  partialRecord: () => ll,
  pipe: () => Ut,
  prefault: () => Si,
  preprocess: () => Ml,
  promise: () => xl,
  readonly: () => Ni,
  record: () => ci,
  refine: () => Di,
  set: () => pl,
  strictObject: () => al,
  string: () => _r,
  stringFormat: () => Fu,
  stringbool: () => Ol,
  success: () => Il,
  superRefine: () => Bi,
  symbol: () => el,
  templateLiteral: () => vl,
  transform: () => en,
  tuple: () => ai,
  uint32: () => Ju,
  uint64: () => Qu,
  ulid: () => _u,
  undefined: () => tl,
  union: () => Xr,
  unknown: () => ze,
  url: () => Ru,
  uuid: () => wu,
  uuidv4: () => vu,
  uuidv6: () => xu,
  uuidv7: () => Cu,
  void: () => nl,
  xid: () => Mu,
  xor: () => dl,
});
var Ar = {};
nt(Ar, {
  endsWith: () => lt,
  gt: () => pe,
  gte: () => F,
  includes: () => dt,
  length: () => Ke,
  lowercase: () => at,
  lt: () => fe,
  lte: () => ne,
  maxLength: () => $e,
  maxSize: () => Oe,
  mime: () => ht,
  minLength: () => me,
  minSize: () => de,
  multipleOf: () => Te,
  negative: () => Bn,
  nonnegative: () => zn,
  nonpositive: () => En,
  normalize: () => pt,
  overwrite: () => ft,
  positive: () => Dn,
  property: () => Pn,
  regex: () => st,
  size: () => qe,
  slugify: () => bt,
  startsWith: () => ut,
  toLowerCase: () => yt,
  toUpperCase: () => gt,
  trim: () => mt,
  uppercase: () => ct,
});
var Je = {};
nt(Je, {
  ZodISODate: () => kr,
  ZodISODateTime: () => Nr,
  ZodISODuration: () => Or,
  ZodISOTime: () => Tr,
  date: () => To,
  datetime: () => ko,
  duration: () => _o,
  time: () => Oo,
});
var Nr = y("ZodISODateTime", (r, e) => {
  (Is.init(r, e), C.init(r, e));
});
function ko(r) {
  return Ma(Nr, r);
}
var kr = y("ZodISODate", (r, e) => {
  (Ss.init(r, e), C.init(r, e));
});
function To(r) {
  return Da(kr, r);
}
var Tr = y("ZodISOTime", (r, e) => {
  (ws.init(r, e), C.init(r, e));
});
function Oo(r) {
  return Ba(Tr, r);
}
var Or = y("ZodISODuration", (r, e) => {
  (vs.init(r, e), C.init(r, e));
});
function _o(r) {
  return Ea(Or, r);
}
var bu = (r, e) => {
    (Hi.init(r, e),
      (r.name = "ZodError"),
      Object.defineProperties(r, {
        format: { value: (t) => er(r, t) },
        flatten: { value: (t) => Qt(r, t) },
        addIssue: {
          value: (t) => {
            (r.issues.push(t), (r.message = JSON.stringify(r.issues, un, 2)));
          },
        },
        addIssues: {
          value: (t) => {
            (r.issues.push(...t), (r.message = JSON.stringify(r.issues, un, 2)));
          },
        },
        isEmpty: {
          get() {
            return r.issues.length === 0;
          },
        },
      }));
  },
  Wf = y("ZodError", bu),
  U = y("ZodError", bu, { Parent: Error });
var Mo = Gi(U),
  Do = Wi(U),
  Bo = Ji(U),
  Eo = Yi(U),
  zo = Xi(U),
  Po = Qi(U),
  Lo = es(U),
  qo = ts(U),
  $o = rs(U),
  Ko = ns(U),
  Uo = os(U),
  Fo = is(U);
var w = y(
    "ZodType",
    (r, e) => (
      ln.init(r, e),
      Object.assign(r["~standard"], {
        jsonSchema: { input: Ln(r, "input"), output: Ln(r, "output") },
      }),
      (r.toJSONSchema = fc(r, {})),
      (r.def = e),
      (r.type = e.type),
      Object.defineProperty(r, "_def", { value: e }),
      (r.check = (...t) =>
        r.clone(
          v.mergeDefs(e, {
            checks: [
              ...(e.checks ?? []),
              ...t.map((n) =>
                typeof n == "function"
                  ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } }
                  : n
              ),
            ],
          }),
          { parent: !0 }
        )),
      (r.with = r.check),
      (r.clone = (t, n) => it(r, t, n)),
      (r.brand = () => r),
      (r.register = (t, n) => (t.add(r, n), r)),
      (r.parse = (t, n) => Mo(r, t, n, { callee: r.parse })),
      (r.safeParse = (t, n) => Bo(r, t, n)),
      (r.parseAsync = async (t, n) => Do(r, t, n, { callee: r.parseAsync })),
      (r.safeParseAsync = async (t, n) => Eo(r, t, n)),
      (r.spa = r.safeParseAsync),
      (r.encode = (t, n) => zo(r, t, n)),
      (r.decode = (t, n) => Po(r, t, n)),
      (r.encodeAsync = async (t, n) => Lo(r, t, n)),
      (r.decodeAsync = async (t, n) => qo(r, t, n)),
      (r.safeEncode = (t, n) => $o(r, t, n)),
      (r.safeDecode = (t, n) => Ko(r, t, n)),
      (r.safeEncodeAsync = async (t, n) => Uo(r, t, n)),
      (r.safeDecodeAsync = async (t, n) => Fo(r, t, n)),
      (r.refine = (t, n) => r.check(Di(t, n))),
      (r.superRefine = (t) => r.check(Bi(t))),
      (r.overwrite = (t) => r.check(ft(t))),
      (r.optional = () => $t(r)),
      (r.exactOptional = () => mi(r)),
      (r.nullable = () => Kt(r)),
      (r.nullish = () => $t(Kt(r))),
      (r.nonoptional = (t) => wi(r, t)),
      (r.array = () => Ht(r)),
      (r.or = (t) => Xr([r, t])),
      (r.and = (t) => ii(r, t)),
      (r.transform = (t) => Ut(r, en(t))),
      (r.default = (t) => bi(r, t)),
      (r.prefault = (t) => Si(r, t)),
      (r.catch = (t) => Ci(r, t)),
      (r.pipe = (t) => Ut(r, t)),
      (r.readonly = () => Ni(r)),
      (r.describe = (t) => {
        let n = r.clone();
        return (ce.add(n, { description: t }), n);
      }),
      Object.defineProperty(r, "description", {
        get() {
          return ce.get(r)?.description;
        },
        configurable: !0,
      }),
      (r.meta = (...t) => {
        if (t.length === 0) return ce.get(r);
        let n = r.clone();
        return (ce.add(n, t[0]), n);
      }),
      (r.isOptional = () => r.safeParse(void 0).success),
      (r.isNullable = () => r.safeParse(null).success),
      (r.apply = (t) => t(r)),
      r
    )
  ),
  Dr = y("_ZodString", (r, e) => {
    (hn.init(r, e), w.init(r, e), (r._zod.processJSONSchema = (n, o, i) => pc(r, n, o, i)));
    let t = r._zod.bag;
    ((r.format = t.format ?? null),
      (r.minLength = t.minimum ?? null),
      (r.maxLength = t.maximum ?? null),
      (r.regex = (...n) => r.check(st(...n))),
      (r.includes = (...n) => r.check(dt(...n))),
      (r.startsWith = (...n) => r.check(ut(...n))),
      (r.endsWith = (...n) => r.check(lt(...n))),
      (r.min = (...n) => r.check(me(...n))),
      (r.max = (...n) => r.check($e(...n))),
      (r.length = (...n) => r.check(Ke(...n))),
      (r.nonempty = (...n) => r.check(me(1, ...n))),
      (r.lowercase = (n) => r.check(at(n))),
      (r.uppercase = (n) => r.check(ct(n))),
      (r.trim = () => r.check(mt())),
      (r.normalize = (...n) => r.check(pt(...n))),
      (r.toLowerCase = () => r.check(yt())),
      (r.toUpperCase = () => r.check(gt())),
      (r.slugify = () => r.check(bt())));
  }),
  Xe = y("ZodString", (r, e) => {
    (hn.init(r, e),
      Dr.init(r, e),
      (r.email = (t) => r.check(fn(Br, t))),
      (r.url = (t) => r.check(rr(Ft, t))),
      (r.jwt = (t) => r.check(Mn(Wr, t))),
      (r.emoji = (t) => r.check(bn(Er, t))),
      (r.guid = (t) => r.check(tr(qt, t))),
      (r.uuid = (t) => r.check(pn(ae, t))),
      (r.uuidv4 = (t) => r.check(mn(ae, t))),
      (r.uuidv6 = (t) => r.check(yn(ae, t))),
      (r.uuidv7 = (t) => r.check(gn(ae, t))),
      (r.nanoid = (t) => r.check(In(zr, t))),
      (r.guid = (t) => r.check(tr(qt, t))),
      (r.cuid = (t) => r.check(Sn(Pr, t))),
      (r.cuid2 = (t) => r.check(wn(Lr, t))),
      (r.ulid = (t) => r.check(vn(qr, t))),
      (r.base64 = (t) => r.check(Tn(Vr, t))),
      (r.base64url = (t) => r.check(On(Zr, t))),
      (r.xid = (t) => r.check(xn($r, t))),
      (r.ksuid = (t) => r.check(Cn(Kr, t))),
      (r.ipv4 = (t) => r.check(Rn(Ur, t))),
      (r.ipv6 = (t) => r.check(An(Fr, t))),
      (r.cidrv4 = (t) => r.check(Nn(jr, t))),
      (r.cidrv6 = (t) => r.check(kn(Hr, t))),
      (r.e164 = (t) => r.check(_n(Gr, t))),
      (r.datetime = (t) => r.check(ko(t))),
      (r.date = (t) => r.check(To(t))),
      (r.time = (t) => r.check(Oo(t))),
      (r.duration = (t) => r.check(_o(t))));
  });
function _r(r) {
  return ka(Xe, r);
}
var C = y("ZodStringFormat", (r, e) => {
    (as.init(r, e), Dr.init(r, e));
  }),
  Br = y("ZodEmail", (r, e) => {
    (us.init(r, e), C.init(r, e));
  });
function Iu(r) {
  return fn(Br, r);
}
var qt = y("ZodGUID", (r, e) => {
  (cs.init(r, e), C.init(r, e));
});
function Su(r) {
  return tr(qt, r);
}
var ae = y("ZodUUID", (r, e) => {
  (ds.init(r, e), C.init(r, e));
});
function wu(r) {
  return pn(ae, r);
}
function vu(r) {
  return mn(ae, r);
}
function xu(r) {
  return yn(ae, r);
}
function Cu(r) {
  return gn(ae, r);
}
var Ft = y("ZodURL", (r, e) => {
  (ls.init(r, e), C.init(r, e));
});
function Ru(r) {
  return rr(Ft, r);
}
function Au(r) {
  return rr(Ft, { protocol: /^https?$/, hostname: ke.domain, ...v.normalizeParams(r) });
}
var Er = y("ZodEmoji", (r, e) => {
  (hs.init(r, e), C.init(r, e));
});
function Nu(r) {
  return bn(Er, r);
}
var zr = y("ZodNanoID", (r, e) => {
  (fs.init(r, e), C.init(r, e));
});
function ku(r) {
  return In(zr, r);
}
var Pr = y("ZodCUID", (r, e) => {
  (ps.init(r, e), C.init(r, e));
});
function Tu(r) {
  return Sn(Pr, r);
}
var Lr = y("ZodCUID2", (r, e) => {
  (ms.init(r, e), C.init(r, e));
});
function Ou(r) {
  return wn(Lr, r);
}
var qr = y("ZodULID", (r, e) => {
  (ys.init(r, e), C.init(r, e));
});
function _u(r) {
  return vn(qr, r);
}
var $r = y("ZodXID", (r, e) => {
  (gs.init(r, e), C.init(r, e));
});
function Mu(r) {
  return xn($r, r);
}
var Kr = y("ZodKSUID", (r, e) => {
  (bs.init(r, e), C.init(r, e));
});
function Du(r) {
  return Cn(Kr, r);
}
var Ur = y("ZodIPv4", (r, e) => {
  (xs.init(r, e), C.init(r, e));
});
function Bu(r) {
  return Rn(Ur, r);
}
var jo = y("ZodMAC", (r, e) => {
  (Rs.init(r, e), C.init(r, e));
});
function Eu(r) {
  return Oa(jo, r);
}
var Fr = y("ZodIPv6", (r, e) => {
  (Cs.init(r, e), C.init(r, e));
});
function zu(r) {
  return An(Fr, r);
}
var jr = y("ZodCIDRv4", (r, e) => {
  (As.init(r, e), C.init(r, e));
});
function Pu(r) {
  return Nn(jr, r);
}
var Hr = y("ZodCIDRv6", (r, e) => {
  (Ns.init(r, e), C.init(r, e));
});
function Lu(r) {
  return kn(Hr, r);
}
var Vr = y("ZodBase64", (r, e) => {
  (ks.init(r, e), C.init(r, e));
});
function qu(r) {
  return Tn(Vr, r);
}
var Zr = y("ZodBase64URL", (r, e) => {
  (Ts.init(r, e), C.init(r, e));
});
function $u(r) {
  return On(Zr, r);
}
var Gr = y("ZodE164", (r, e) => {
  (Os.init(r, e), C.init(r, e));
});
function Ku(r) {
  return _n(Gr, r);
}
var Wr = y("ZodJWT", (r, e) => {
  (_s.init(r, e), C.init(r, e));
});
function Uu(r) {
  return Mn(Wr, r);
}
var Qe = y("ZodCustomStringFormat", (r, e) => {
  (Ms.init(r, e), C.init(r, e));
});
function Fu(r, e, t = {}) {
  return It(Qe, r, e, t);
}
function ju(r) {
  return It(Qe, "hostname", ke.hostname, r);
}
function Hu(r) {
  return It(Qe, "hex", ke.hex, r);
}
function Vu(r, e) {
  let t = e?.enc ?? "hex",
    n = `${r}_${t}`,
    o = ke[n];
  if (!o) throw new Error(`Unrecognized hash format: ${n}`);
  return It(Qe, n, o, e);
}
var et = y("ZodNumber", (r, e) => {
  (Ds.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (n, o, i) => mc(r, n, o, i)),
    (r.gt = (n, o) => r.check(pe(n, o))),
    (r.gte = (n, o) => r.check(F(n, o))),
    (r.min = (n, o) => r.check(F(n, o))),
    (r.lt = (n, o) => r.check(fe(n, o))),
    (r.lte = (n, o) => r.check(ne(n, o))),
    (r.max = (n, o) => r.check(ne(n, o))),
    (r.int = (n) => r.check(Mr(n))),
    (r.safe = (n) => r.check(Mr(n))),
    (r.positive = (n) => r.check(pe(0, n))),
    (r.nonnegative = (n) => r.check(F(0, n))),
    (r.negative = (n) => r.check(fe(0, n))),
    (r.nonpositive = (n) => r.check(ne(0, n))),
    (r.multipleOf = (n, o) => r.check(Te(n, o))),
    (r.step = (n, o) => r.check(Te(n, o))),
    (r.finite = () => r));
  let t = r._zod.bag;
  ((r.minValue =
    Math.max(
      t.minimum ?? Number.NEGATIVE_INFINITY,
      t.exclusiveMinimum ?? Number.NEGATIVE_INFINITY
    ) ?? null),
    (r.maxValue =
      Math.min(
        t.maximum ?? Number.POSITIVE_INFINITY,
        t.exclusiveMaximum ?? Number.POSITIVE_INFINITY
      ) ?? null),
    (r.isInt = (t.format ?? "").includes("int") || Number.isSafeInteger(t.multipleOf ?? 0.5)),
    (r.isFinite = !0),
    (r.format = t.format ?? null));
});
function Ho(r) {
  return za(et, r);
}
var Pe = y("ZodNumberFormat", (r, e) => {
  (Bs.init(r, e), et.init(r, e));
});
function Mr(r) {
  return La(Pe, r);
}
function Zu(r) {
  return qa(Pe, r);
}
function Gu(r) {
  return $a(Pe, r);
}
function Wu(r) {
  return Ka(Pe, r);
}
function Ju(r) {
  return Ua(Pe, r);
}
var tt = y("ZodBoolean", (r, e) => {
  (Es.init(r, e), w.init(r, e), (r._zod.processJSONSchema = (t, n, o) => yc(r, t, n, o)));
});
function Vo(r) {
  return Fa(tt, r);
}
var rt = y("ZodBigInt", (r, e) => {
  (zs.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (n, o, i) => gc(r, n, o, i)),
    (r.gte = (n, o) => r.check(F(n, o))),
    (r.min = (n, o) => r.check(F(n, o))),
    (r.gt = (n, o) => r.check(pe(n, o))),
    (r.gte = (n, o) => r.check(F(n, o))),
    (r.min = (n, o) => r.check(F(n, o))),
    (r.lt = (n, o) => r.check(fe(n, o))),
    (r.lte = (n, o) => r.check(ne(n, o))),
    (r.max = (n, o) => r.check(ne(n, o))),
    (r.positive = (n) => r.check(pe(BigInt(0), n))),
    (r.negative = (n) => r.check(fe(BigInt(0), n))),
    (r.nonpositive = (n) => r.check(ne(BigInt(0), n))),
    (r.nonnegative = (n) => r.check(F(BigInt(0), n))),
    (r.multipleOf = (n, o) => r.check(Te(n, o))));
  let t = r._zod.bag;
  ((r.minValue = t.minimum ?? null),
    (r.maxValue = t.maximum ?? null),
    (r.format = t.format ?? null));
});
function Yu(r) {
  return Ha(rt, r);
}
var Jr = y("ZodBigIntFormat", (r, e) => {
  (Ps.init(r, e), rt.init(r, e));
});
function Xu(r) {
  return Za(Jr, r);
}
function Qu(r) {
  return Ga(Jr, r);
}
var Zo = y("ZodSymbol", (r, e) => {
  (Ls.init(r, e), w.init(r, e), (r._zod.processJSONSchema = (t, n, o) => bc(r, t, n, o)));
});
function el(r) {
  return Wa(Zo, r);
}
var Go = y("ZodUndefined", (r, e) => {
  (qs.init(r, e), w.init(r, e), (r._zod.processJSONSchema = (t, n, o) => Sc(r, t, n, o)));
});
function tl(r) {
  return Ja(Go, r);
}
var Wo = y("ZodNull", (r, e) => {
  ($s.init(r, e), w.init(r, e), (r._zod.processJSONSchema = (t, n, o) => Ic(r, t, n, o)));
});
function Jo(r) {
  return Ya(Wo, r);
}
var Yo = y("ZodAny", (r, e) => {
  (Ks.init(r, e), w.init(r, e), (r._zod.processJSONSchema = (t, n, o) => xc(r, t, n, o)));
});
function rl() {
  return Xa(Yo);
}
var Xo = y("ZodUnknown", (r, e) => {
  (Us.init(r, e), w.init(r, e), (r._zod.processJSONSchema = (t, n, o) => Cc(r, t, n, o)));
});
function ze() {
  return Qa(Xo);
}
var Qo = y("ZodNever", (r, e) => {
  (Fs.init(r, e), w.init(r, e), (r._zod.processJSONSchema = (t, n, o) => vc(r, t, n, o)));
});
function Yr(r) {
  return ec(Qo, r);
}
var ei = y("ZodVoid", (r, e) => {
  (js.init(r, e), w.init(r, e), (r._zod.processJSONSchema = (t, n, o) => wc(r, t, n, o)));
});
function nl(r) {
  return tc(ei, r);
}
var jt = y("ZodDate", (r, e) => {
  (Hs.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (n, o, i) => Rc(r, n, o, i)),
    (r.min = (n, o) => r.check(F(n, o))),
    (r.max = (n, o) => r.check(ne(n, o))));
  let t = r._zod.bag;
  ((r.minDate = t.minimum ? new Date(t.minimum) : null),
    (r.maxDate = t.maximum ? new Date(t.maximum) : null));
});
function ol(r) {
  return rc(jt, r);
}
var ti = y("ZodArray", (r, e) => {
  (Vs.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Pc(r, t, n, o)),
    (r.element = e.element),
    (r.min = (t, n) => r.check(me(t, n))),
    (r.nonempty = (t) => r.check(me(1, t))),
    (r.max = (t, n) => r.check($e(t, n))),
    (r.length = (t, n) => r.check(Ke(t, n))),
    (r.unwrap = () => r.element));
});
function Ht(r, e) {
  return ic(ti, r, e);
}
function il(r) {
  let e = r._zod.def.shape;
  return Qr(Object.keys(e));
}
var Vt = y("ZodObject", (r, e) => {
  (Zs.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Lc(r, t, n, o)),
    v.defineLazy(r, "shape", () => e.shape),
    (r.keyof = () => Qr(Object.keys(r._zod.def.shape))),
    (r.catchall = (t) => r.clone({ ...r._zod.def, catchall: t })),
    (r.passthrough = () => r.clone({ ...r._zod.def, catchall: ze() })),
    (r.loose = () => r.clone({ ...r._zod.def, catchall: ze() })),
    (r.strict = () => r.clone({ ...r._zod.def, catchall: Yr() })),
    (r.strip = () => r.clone({ ...r._zod.def, catchall: void 0 })),
    (r.extend = (t) => v.extend(r, t)),
    (r.safeExtend = (t) => v.safeExtend(r, t)),
    (r.merge = (t) => v.merge(r, t)),
    (r.pick = (t) => v.pick(r, t)),
    (r.omit = (t) => v.omit(r, t)),
    (r.partial = (...t) => v.partial(tn, r, t[0])),
    (r.required = (...t) => v.required(rn, r, t[0])));
});
function sl(r, e) {
  let t = { type: "object", shape: r ?? {}, ...v.normalizeParams(e) };
  return new Vt(t);
}
function al(r, e) {
  return new Vt({ type: "object", shape: r, catchall: Yr(), ...v.normalizeParams(e) });
}
function cl(r, e) {
  return new Vt({ type: "object", shape: r, catchall: ze(), ...v.normalizeParams(e) });
}
var Zt = y("ZodUnion", (r, e) => {
  (Gs.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => qn(r, t, n, o)),
    (r.options = e.options));
});
function Xr(r, e) {
  return new Zt({ type: "union", options: r, ...v.normalizeParams(e) });
}
var ri = y("ZodXor", (r, e) => {
  (Zt.init(r, e),
    Ws.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => qn(r, t, n, o)),
    (r.options = e.options));
});
function dl(r, e) {
  return new ri({ type: "union", options: r, inclusive: !1, ...v.normalizeParams(e) });
}
var ni = y("ZodDiscriminatedUnion", (r, e) => {
  (Zt.init(r, e), Js.init(r, e));
});
function ul(r, e, t) {
  return new ni({ type: "union", options: e, discriminator: r, ...v.normalizeParams(t) });
}
var oi = y("ZodIntersection", (r, e) => {
  (Ys.init(r, e), w.init(r, e), (r._zod.processJSONSchema = (t, n, o) => qc(r, t, n, o)));
});
function ii(r, e) {
  return new oi({ type: "intersection", left: r, right: e });
}
var si = y("ZodTuple", (r, e) => {
  (Xs.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => $c(r, t, n, o)),
    (r.rest = (t) => r.clone({ ...r._zod.def, rest: t })));
});
function ai(r, e, t) {
  let n = e instanceof ln,
    o = n ? t : e,
    i = n ? e : null;
  return new si({ type: "tuple", items: r, rest: i, ...v.normalizeParams(o) });
}
var Gt = y("ZodRecord", (r, e) => {
  (Qs.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Kc(r, t, n, o)),
    (r.keyType = e.keyType),
    (r.valueType = e.valueType));
});
function ci(r, e, t) {
  return new Gt({ type: "record", keyType: r, valueType: e, ...v.normalizeParams(t) });
}
function ll(r, e, t) {
  let n = it(r);
  return (
    (n._zod.values = void 0),
    new Gt({ type: "record", keyType: n, valueType: e, ...v.normalizeParams(t) })
  );
}
function hl(r, e, t) {
  return new Gt({
    type: "record",
    keyType: r,
    valueType: e,
    mode: "loose",
    ...v.normalizeParams(t),
  });
}
var di = y("ZodMap", (r, e) => {
  (ea.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Ec(r, t, n, o)),
    (r.keyType = e.keyType),
    (r.valueType = e.valueType),
    (r.min = (...t) => r.check(de(...t))),
    (r.nonempty = (t) => r.check(de(1, t))),
    (r.max = (...t) => r.check(Oe(...t))),
    (r.size = (...t) => r.check(qe(...t))));
});
function fl(r, e, t) {
  return new di({ type: "map", keyType: r, valueType: e, ...v.normalizeParams(t) });
}
var ui = y("ZodSet", (r, e) => {
  (ta.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => zc(r, t, n, o)),
    (r.min = (...t) => r.check(de(...t))),
    (r.nonempty = (t) => r.check(de(1, t))),
    (r.max = (...t) => r.check(Oe(...t))),
    (r.size = (...t) => r.check(qe(...t))));
});
function pl(r, e) {
  return new ui({ type: "set", valueType: r, ...v.normalizeParams(e) });
}
var Ye = y("ZodEnum", (r, e) => {
  (ra.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (n, o, i) => Ac(r, n, o, i)),
    (r.enum = e.entries),
    (r.options = Object.values(e.entries)));
  let t = new Set(Object.keys(e.entries));
  ((r.extract = (n, o) => {
    let i = {};
    for (let s of n)
      if (t.has(s)) i[s] = e.entries[s];
      else throw new Error(`Key ${s} not found in enum`);
    return new Ye({ ...e, checks: [], ...v.normalizeParams(o), entries: i });
  }),
    (r.exclude = (n, o) => {
      let i = { ...e.entries };
      for (let s of n)
        if (t.has(s)) delete i[s];
        else throw new Error(`Key ${s} not found in enum`);
      return new Ye({ ...e, checks: [], ...v.normalizeParams(o), entries: i });
    }));
});
function Qr(r, e) {
  let t = Array.isArray(r) ? Object.fromEntries(r.map((n) => [n, n])) : r;
  return new Ye({ type: "enum", entries: t, ...v.normalizeParams(e) });
}
function ml(r, e) {
  return new Ye({ type: "enum", entries: r, ...v.normalizeParams(e) });
}
var li = y("ZodLiteral", (r, e) => {
  (na.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Nc(r, t, n, o)),
    (r.values = new Set(e.values)),
    Object.defineProperty(r, "value", {
      get() {
        if (e.values.length > 1)
          throw new Error(
            "This schema contains multiple valid literal values. Use `.values` instead."
          );
        return e.values[0];
      },
    }));
});
function yl(r, e) {
  return new li({ type: "literal", values: Array.isArray(r) ? r : [r], ...v.normalizeParams(e) });
}
var hi = y("ZodFile", (r, e) => {
  (oa.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Oc(r, t, n, o)),
    (r.min = (t, n) => r.check(de(t, n))),
    (r.max = (t, n) => r.check(Oe(t, n))),
    (r.mime = (t, n) => r.check(ht(Array.isArray(t) ? t : [t], n))));
});
function gl(r) {
  return sc(hi, r);
}
var fi = y("ZodTransform", (r, e) => {
  (ia.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Bc(r, t, n, o)),
    (r._zod.parse = (t, n) => {
      if (n.direction === "backward") throw new ji(r.constructor.name);
      t.addIssue = (i) => {
        if (typeof i == "string") t.issues.push(v.issue(i, t.value, e));
        else {
          let s = i;
          (s.fatal && (s.continue = !1),
            s.code ?? (s.code = "custom"),
            s.input ?? (s.input = t.value),
            s.inst ?? (s.inst = r),
            t.issues.push(v.issue(s)));
        }
      };
      let o = e.transform(t.value, t);
      return o instanceof Promise ? o.then((i) => ((t.value = i), t)) : ((t.value = o), t);
    }));
});
function en(r) {
  return new fi({ type: "transform", transform: r });
}
var tn = y("ZodOptional", (r, e) => {
  (sa.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => $n(r, t, n, o)),
    (r.unwrap = () => r._zod.def.innerType));
});
function $t(r) {
  return new tn({ type: "optional", innerType: r });
}
var pi = y("ZodExactOptional", (r, e) => {
  (aa.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => $n(r, t, n, o)),
    (r.unwrap = () => r._zod.def.innerType));
});
function mi(r) {
  return new pi({ type: "optional", innerType: r });
}
var yi = y("ZodNullable", (r, e) => {
  (ca.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Uc(r, t, n, o)),
    (r.unwrap = () => r._zod.def.innerType));
});
function Kt(r) {
  return new yi({ type: "nullable", innerType: r });
}
function bl(r) {
  return $t(Kt(r));
}
var gi = y("ZodDefault", (r, e) => {
  (da.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => jc(r, t, n, o)),
    (r.unwrap = () => r._zod.def.innerType),
    (r.removeDefault = r.unwrap));
});
function bi(r, e) {
  return new gi({
    type: "default",
    innerType: r,
    get defaultValue() {
      return typeof e == "function" ? e() : v.shallowClone(e);
    },
  });
}
var Ii = y("ZodPrefault", (r, e) => {
  (ua.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Hc(r, t, n, o)),
    (r.unwrap = () => r._zod.def.innerType));
});
function Si(r, e) {
  return new Ii({
    type: "prefault",
    innerType: r,
    get defaultValue() {
      return typeof e == "function" ? e() : v.shallowClone(e);
    },
  });
}
var rn = y("ZodNonOptional", (r, e) => {
  (la.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Fc(r, t, n, o)),
    (r.unwrap = () => r._zod.def.innerType));
});
function wi(r, e) {
  return new rn({ type: "nonoptional", innerType: r, ...v.normalizeParams(e) });
}
var vi = y("ZodSuccess", (r, e) => {
  (ha.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => _c(r, t, n, o)),
    (r.unwrap = () => r._zod.def.innerType));
});
function Il(r) {
  return new vi({ type: "success", innerType: r });
}
var xi = y("ZodCatch", (r, e) => {
  (fa.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Vc(r, t, n, o)),
    (r.unwrap = () => r._zod.def.innerType),
    (r.removeCatch = r.unwrap));
});
function Ci(r, e) {
  return new xi({ type: "catch", innerType: r, catchValue: typeof e == "function" ? e : () => e });
}
var Ri = y("ZodNaN", (r, e) => {
  (pa.init(r, e), w.init(r, e), (r._zod.processJSONSchema = (t, n, o) => kc(r, t, n, o)));
});
function Sl(r) {
  return oc(Ri, r);
}
var nn = y("ZodPipe", (r, e) => {
  (ma.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Zc(r, t, n, o)),
    (r.in = e.in),
    (r.out = e.out));
});
function Ut(r, e) {
  return new nn({ type: "pipe", in: r, out: e });
}
var on = y("ZodCodec", (r, e) => {
  (nn.init(r, e), ya.init(r, e));
});
function wl(r, e, t) {
  return new on({ type: "pipe", in: r, out: e, transform: t.decode, reverseTransform: t.encode });
}
var Ai = y("ZodReadonly", (r, e) => {
  (ga.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Gc(r, t, n, o)),
    (r.unwrap = () => r._zod.def.innerType));
});
function Ni(r) {
  return new Ai({ type: "readonly", innerType: r });
}
var ki = y("ZodTemplateLiteral", (r, e) => {
  (ba.init(r, e), w.init(r, e), (r._zod.processJSONSchema = (t, n, o) => Tc(r, t, n, o)));
});
function vl(r, e) {
  return new ki({ type: "template_literal", parts: r, ...v.normalizeParams(e) });
}
var Ti = y("ZodLazy", (r, e) => {
  (wa.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Jc(r, t, n, o)),
    (r.unwrap = () => r._zod.def.getter()));
});
function Oi(r) {
  return new Ti({ type: "lazy", getter: r });
}
var _i = y("ZodPromise", (r, e) => {
  (Sa.init(r, e),
    w.init(r, e),
    (r._zod.processJSONSchema = (t, n, o) => Wc(r, t, n, o)),
    (r.unwrap = () => r._zod.def.innerType));
});
function xl(r) {
  return new _i({ type: "promise", innerType: r });
}
var Mi = y("ZodFunction", (r, e) => {
  (Ia.init(r, e), w.init(r, e), (r._zod.processJSONSchema = (t, n, o) => Dc(r, t, n, o)));
});
function Cl(r) {
  return new Mi({
    type: "function",
    input: Array.isArray(r?.input) ? ai(r?.input) : (r?.input ?? Ht(ze())),
    output: r?.output ?? ze(),
  });
}
var Wt = y("ZodCustom", (r, e) => {
  (va.init(r, e), w.init(r, e), (r._zod.processJSONSchema = (t, n, o) => Mc(r, t, n, o)));
});
function Rl(r) {
  let e = new ss({ check: "custom" });
  return ((e._zod.check = r), e);
}
function Al(r, e) {
  return ac(Wt, r ?? (() => !0), e);
}
function Di(r, e = {}) {
  return cc(Wt, r, e);
}
function Bi(r) {
  return dc(r);
}
var Nl = uc,
  kl = lc;
function Tl(r, e = {}) {
  let t = new Wt({
    type: "custom",
    check: "custom",
    fn: (n) => n instanceof r,
    abort: !0,
    ...v.normalizeParams(e),
  });
  return (
    (t._zod.bag.Class = r),
    (t._zod.check = (n) => {
      n.value instanceof r ||
        n.issues.push({
          code: "invalid_type",
          expected: r.name,
          input: n.value,
          inst: t,
          path: [...(t._zod.def.path ?? [])],
        });
    }),
    t
  );
}
var Ol = (...r) => hc({ Codec: on, Boolean: tt, String: Xe }, ...r);
function _l(r) {
  let e = Oi(() => Xr([_r(r), Ho(), Vo(), Jo(), Ht(e), ci(_r(), e)]));
  return e;
}
function Ml(r, e) {
  return Ut(en(r), e);
}
var Yf = {
  invalid_type: "invalid_type",
  too_big: "too_big",
  too_small: "too_small",
  invalid_format: "invalid_format",
  not_multiple_of: "not_multiple_of",
  unrecognized_keys: "unrecognized_keys",
  invalid_union: "invalid_union",
  invalid_key: "invalid_key",
  invalid_element: "invalid_element",
  invalid_value: "invalid_value",
  custom: "custom",
};
function Xf(r) {
  he({ customError: r });
}
function Qf() {
  return he().customError;
}
var Ei;
Ei || (Ei = {});
var b = { ...Lt, ...Ar, iso: Je },
  ep = new Set([
    "$schema",
    "$ref",
    "$defs",
    "definitions",
    "$id",
    "id",
    "$comment",
    "$anchor",
    "$vocabulary",
    "$dynamicRef",
    "$dynamicAnchor",
    "type",
    "enum",
    "const",
    "anyOf",
    "oneOf",
    "allOf",
    "not",
    "properties",
    "required",
    "additionalProperties",
    "patternProperties",
    "propertyNames",
    "minProperties",
    "maxProperties",
    "items",
    "prefixItems",
    "additionalItems",
    "minItems",
    "maxItems",
    "uniqueItems",
    "contains",
    "minContains",
    "maxContains",
    "minLength",
    "maxLength",
    "pattern",
    "format",
    "minimum",
    "maximum",
    "exclusiveMinimum",
    "exclusiveMaximum",
    "multipleOf",
    "description",
    "default",
    "contentEncoding",
    "contentMediaType",
    "contentSchema",
    "unevaluatedItems",
    "unevaluatedProperties",
    "if",
    "then",
    "else",
    "dependentSchemas",
    "dependentRequired",
    "nullable",
    "readOnly",
  ]);
function tp(r, e) {
  let t = r.$schema;
  return t === "https://json-schema.org/draft/2020-12/schema"
    ? "draft-2020-12"
    : t === "http://json-schema.org/draft-07/schema#"
      ? "draft-7"
      : t === "http://json-schema.org/draft-04/schema#"
        ? "draft-4"
        : (e ?? "draft-2020-12");
}
function rp(r, e) {
  if (!r.startsWith("#"))
    throw new Error("External $ref is not supported, only local refs (#/...) are allowed");
  let t = r.slice(1).split("/").filter(Boolean);
  if (t.length === 0) return e.rootSchema;
  let n = e.version === "draft-2020-12" ? "$defs" : "definitions";
  if (t[0] === n) {
    let o = t[1];
    if (!o || !e.defs[o]) throw new Error(`Reference not found: ${r}`);
    return e.defs[o];
  }
  throw new Error(`Reference not found: ${r}`);
}
function Dl(r, e) {
  if (r.not !== void 0) {
    if (typeof r.not == "object" && Object.keys(r.not).length === 0) return b.never();
    throw new Error("not is not supported in Zod (except { not: {} } for never)");
  }
  if (r.unevaluatedItems !== void 0) throw new Error("unevaluatedItems is not supported");
  if (r.unevaluatedProperties !== void 0) throw new Error("unevaluatedProperties is not supported");
  if (r.if !== void 0 || r.then !== void 0 || r.else !== void 0)
    throw new Error("Conditional schemas (if/then/else) are not supported");
  if (r.dependentSchemas !== void 0 || r.dependentRequired !== void 0)
    throw new Error("dependentSchemas and dependentRequired are not supported");
  if (r.$ref) {
    let o = r.$ref;
    if (e.refs.has(o)) return e.refs.get(o);
    if (e.processing.has(o))
      return b.lazy(() => {
        if (!e.refs.has(o)) throw new Error(`Circular reference not resolved: ${o}`);
        return e.refs.get(o);
      });
    e.processing.add(o);
    let i = rp(o, e),
      s = z(i, e);
    return (e.refs.set(o, s), e.processing.delete(o), s);
  }
  if (r.enum !== void 0) {
    let o = r.enum;
    if (e.version === "openapi-3.0" && r.nullable === !0 && o.length === 1 && o[0] === null)
      return b.null();
    if (o.length === 0) return b.never();
    if (o.length === 1) return b.literal(o[0]);
    if (o.every((s) => typeof s == "string")) return b.enum(o);
    let i = o.map((s) => b.literal(s));
    return i.length < 2 ? i[0] : b.union([i[0], i[1], ...i.slice(2)]);
  }
  if (r.const !== void 0) return b.literal(r.const);
  let t = r.type;
  if (Array.isArray(t)) {
    let o = t.map((i) => {
      let s = { ...r, type: i };
      return Dl(s, e);
    });
    return o.length === 0 ? b.never() : o.length === 1 ? o[0] : b.union(o);
  }
  if (!t) return b.any();
  let n;
  switch (t) {
    case "string": {
      let o = b.string();
      if (r.format) {
        let i = r.format;
        i === "email"
          ? (o = o.check(b.email()))
          : i === "uri" || i === "uri-reference"
            ? (o = o.check(b.url()))
            : i === "uuid" || i === "guid"
              ? (o = o.check(b.uuid()))
              : i === "date-time"
                ? (o = o.check(b.iso.datetime()))
                : i === "date"
                  ? (o = o.check(b.iso.date()))
                  : i === "time"
                    ? (o = o.check(b.iso.time()))
                    : i === "duration"
                      ? (o = o.check(b.iso.duration()))
                      : i === "ipv4"
                        ? (o = o.check(b.ipv4()))
                        : i === "ipv6"
                          ? (o = o.check(b.ipv6()))
                          : i === "mac"
                            ? (o = o.check(b.mac()))
                            : i === "cidr"
                              ? (o = o.check(b.cidrv4()))
                              : i === "cidr-v6"
                                ? (o = o.check(b.cidrv6()))
                                : i === "base64"
                                  ? (o = o.check(b.base64()))
                                  : i === "base64url"
                                    ? (o = o.check(b.base64url()))
                                    : i === "e164"
                                      ? (o = o.check(b.e164()))
                                      : i === "jwt"
                                        ? (o = o.check(b.jwt()))
                                        : i === "emoji"
                                          ? (o = o.check(b.emoji()))
                                          : i === "nanoid"
                                            ? (o = o.check(b.nanoid()))
                                            : i === "cuid"
                                              ? (o = o.check(b.cuid()))
                                              : i === "cuid2"
                                                ? (o = o.check(b.cuid2()))
                                                : i === "ulid"
                                                  ? (o = o.check(b.ulid()))
                                                  : i === "xid"
                                                    ? (o = o.check(b.xid()))
                                                    : i === "ksuid" && (o = o.check(b.ksuid()));
      }
      (typeof r.minLength == "number" && (o = o.min(r.minLength)),
        typeof r.maxLength == "number" && (o = o.max(r.maxLength)),
        r.pattern && (o = o.regex(new RegExp(r.pattern))),
        (n = o));
      break;
    }
    case "number":
    case "integer": {
      let o = t === "integer" ? b.number().int() : b.number();
      (typeof r.minimum == "number" && (o = o.min(r.minimum)),
        typeof r.maximum == "number" && (o = o.max(r.maximum)),
        typeof r.exclusiveMinimum == "number"
          ? (o = o.gt(r.exclusiveMinimum))
          : r.exclusiveMinimum === !0 && typeof r.minimum == "number" && (o = o.gt(r.minimum)),
        typeof r.exclusiveMaximum == "number"
          ? (o = o.lt(r.exclusiveMaximum))
          : r.exclusiveMaximum === !0 && typeof r.maximum == "number" && (o = o.lt(r.maximum)),
        typeof r.multipleOf == "number" && (o = o.multipleOf(r.multipleOf)),
        (n = o));
      break;
    }
    case "boolean": {
      n = b.boolean();
      break;
    }
    case "null": {
      n = b.null();
      break;
    }
    case "object": {
      let o = {},
        i = r.properties || {},
        s = new Set(r.required || []);
      for (let [c, d] of Object.entries(i)) {
        let f = z(d, e);
        o[c] = s.has(c) ? f : f.optional();
      }
      if (r.propertyNames) {
        let c = z(r.propertyNames, e),
          d =
            r.additionalProperties && typeof r.additionalProperties == "object"
              ? z(r.additionalProperties, e)
              : b.any();
        if (Object.keys(o).length === 0) {
          n = b.record(c, d);
          break;
        }
        let f = b.object(o).passthrough(),
          h = b.looseRecord(c, d);
        n = b.intersection(f, h);
        break;
      }
      if (r.patternProperties) {
        let c = r.patternProperties,
          d = Object.keys(c),
          f = [];
        for (let p of d) {
          let g = z(c[p], e),
            S = b.string().regex(new RegExp(p));
          f.push(b.looseRecord(S, g));
        }
        let h = [];
        if (
          (Object.keys(o).length > 0 && h.push(b.object(o).passthrough()),
          h.push(...f),
          h.length === 0)
        )
          n = b.object({}).passthrough();
        else if (h.length === 1) n = h[0];
        else {
          let p = b.intersection(h[0], h[1]);
          for (let g = 2; g < h.length; g++) p = b.intersection(p, h[g]);
          n = p;
        }
        break;
      }
      let a = b.object(o);
      r.additionalProperties === !1
        ? (n = a.strict())
        : typeof r.additionalProperties == "object"
          ? (n = a.catchall(z(r.additionalProperties, e)))
          : (n = a.passthrough());
      break;
    }
    case "array": {
      let o = r.prefixItems,
        i = r.items;
      if (o && Array.isArray(o)) {
        let s = o.map((c) => z(c, e)),
          a = i && typeof i == "object" && !Array.isArray(i) ? z(i, e) : void 0;
        (a ? (n = b.tuple(s).rest(a)) : (n = b.tuple(s)),
          typeof r.minItems == "number" && (n = n.check(b.minLength(r.minItems))),
          typeof r.maxItems == "number" && (n = n.check(b.maxLength(r.maxItems))));
      } else if (Array.isArray(i)) {
        let s = i.map((c) => z(c, e)),
          a =
            r.additionalItems && typeof r.additionalItems == "object"
              ? z(r.additionalItems, e)
              : void 0;
        (a ? (n = b.tuple(s).rest(a)) : (n = b.tuple(s)),
          typeof r.minItems == "number" && (n = n.check(b.minLength(r.minItems))),
          typeof r.maxItems == "number" && (n = n.check(b.maxLength(r.maxItems))));
      } else if (i !== void 0) {
        let s = z(i, e),
          a = b.array(s);
        (typeof r.minItems == "number" && (a = a.min(r.minItems)),
          typeof r.maxItems == "number" && (a = a.max(r.maxItems)),
          (n = a));
      } else n = b.array(b.any());
      break;
    }
    default:
      throw new Error(`Unsupported type: ${t}`);
  }
  return (
    r.description && (n = n.describe(r.description)),
    r.default !== void 0 && (n = n.default(r.default)),
    n
  );
}
function z(r, e) {
  if (typeof r == "boolean") return r ? b.any() : b.never();
  let t = Dl(r, e),
    n = r.type || r.enum !== void 0 || r.const !== void 0;
  if (r.anyOf && Array.isArray(r.anyOf)) {
    let a = r.anyOf.map((d) => z(d, e)),
      c = b.union(a);
    t = n ? b.intersection(t, c) : c;
  }
  if (r.oneOf && Array.isArray(r.oneOf)) {
    let a = r.oneOf.map((d) => z(d, e)),
      c = b.xor(a);
    t = n ? b.intersection(t, c) : c;
  }
  if (r.allOf && Array.isArray(r.allOf))
    if (r.allOf.length === 0) t = n ? t : b.any();
    else {
      let a = n ? t : z(r.allOf[0], e),
        c = n ? 0 : 1;
      for (let d = c; d < r.allOf.length; d++) a = b.intersection(a, z(r.allOf[d], e));
      t = a;
    }
  (r.nullable === !0 && e.version === "openapi-3.0" && (t = b.nullable(t)),
    r.readOnly === !0 && (t = b.readonly(t)));
  let o = {},
    i = ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"];
  for (let a of i) a in r && (o[a] = r[a]);
  let s = ["contentEncoding", "contentMediaType", "contentSchema"];
  for (let a of s) a in r && (o[a] = r[a]);
  for (let a of Object.keys(r)) ep.has(a) || (o[a] = r[a]);
  return (Object.keys(o).length > 0 && e.registry.add(t, o), t);
}
function Bl(r, e) {
  if (typeof r == "boolean") return r ? b.any() : b.never();
  let t = tp(r, e?.defaultTarget),
    n = r.$defs || r.definitions || {},
    o = {
      version: t,
      defs: n,
      refs: new Map(),
      processing: new Set(),
      rootSchema: r,
      registry: e?.registry ?? ce,
    };
  return z(r, o);
}
var zi = {};
nt(zi, { bigint: () => sp, boolean: () => ip, date: () => ap, number: () => op, string: () => np });
function np(r) {
  return Ta(Xe, r);
}
function op(r) {
  return Pa(et, r);
}
function ip(r) {
  return ja(tt, r);
}
function sp(r) {
  return Va(rt, r);
}
function ap(r) {
  return nc(jt, r);
}
he(xa());
var El = Pi;
var _S = El;
export {
  m as a,
  ed as b,
  O as c,
  Se as d,
  Y as e,
  nu as f,
  $ as g,
  $f as h,
  zt as i,
  xe as j,
  Pt as k,
  gu as l,
  po as m,
  bf as n,
  Gf as o,
  Eo as p,
  Pi as q,
  _S as r,
};
//# sourceMappingURL=chunk-IZHBIYUK.mjs.map
