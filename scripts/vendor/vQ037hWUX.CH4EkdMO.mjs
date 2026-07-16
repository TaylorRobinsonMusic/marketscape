import { t as e } from "./rolldown-runtime.BB3S47xo.mjs";
import {
  L as t,
  P as n,
  c as r,
  f as i,
  o as a,
  u as o,
  w as s,
  z as c,
} from "./react.Cxf1BSD4.mjs";
import { C as l } from "./motion.BxtCy6Qp.mjs";
import { $ as u, P as d, T as ee, i as te, s as f, t as ne, y as re } from "./framer.DwtIulwr.mjs";
function p(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function m(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function h(e) {
  throw Error(`Unexpected value: ${e}`);
}
function g(e, t, n, r) {
  (m(e >= t, e, `outside lower bound for`, r), m(e <= n, e, `outside upper bound for`, r));
}
function _(e) {
  return typeof e == `string`;
}
function v(e) {
  return Number.isFinite(e);
}
function y(e) {
  return e === null;
}
function b(e) {
  if (y(e)) return 0;
  switch (e.type) {
    case f.Array:
      return 1;
    case f.Boolean:
      return 2;
    case f.Color:
      return 3;
    case f.Date:
      return 4;
    case f.Enum:
      return 5;
    case f.File:
      return 6;
    case f.ResponsiveImage:
      return 10;
    case f.Link:
      return 7;
    case f.Number:
      return 8;
    case f.Object:
      return 9;
    case f.RichText:
      return 11;
    case f.String:
      return 12;
    case f.VectorSetItem:
      return 13;
    default:
      h(e);
  }
}
function ie(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = C.read(e);
    n.push(t);
  }
  return { type: f.Array, value: n };
}
function ae(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) C.write(e, n);
}
function oe(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = C.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function se(e) {
  return { type: f.Boolean, value: e.readUint8() !== 0 };
}
function ce(e, t) {
  e.writeUint8(t.value ? 1 : 0);
}
function le(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function ue(e) {
  return { type: f.Color, value: e.readString() };
}
function de(e, t) {
  e.writeString(t.value);
}
function fe(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function pe(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: f.Date, value: n.toISOString() };
}
function me(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function he(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function ge(e) {
  return { type: f.Enum, value: e.readString() };
}
function _e(e, t) {
  e.writeString(t.value);
}
function ve(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function ye(e) {
  return { type: f.File, value: e.readString() };
}
function be(e, t) {
  e.writeString(t.value);
}
function xe(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Se(e) {
  return { type: f.Link, value: e.readJson() };
}
function Ce(e, t) {
  e.writeJson(t.value);
}
function we(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Te(e) {
  return { type: f.Number, value: e.readFloat64() };
}
function Ee(e, t) {
  e.writeFloat64(t.value);
}
function De(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Oe(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = C.read(e);
  }
  return { type: f.Object, value: n };
}
function ke(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), C.write(e, r));
}
function Ae(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = C.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function je(e) {
  return { type: f.ResponsiveImage, value: e.readJson() };
}
function Me(e, t) {
  e.writeJson(t.value);
}
function Ne(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Pe(e) {
  let t = e.readInt8();
  if (t === 0) return { type: f.RichText, value: e.readUint32() };
  if (t === 1) return { type: f.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Fe(e, t) {
  if (v(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (_(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function Ie(e, t) {
  let n = e.value,
    r = t.value;
  if ((v(n) && v(r)) || (_(n) && _(r))) return n < r ? -1 : n > r ? 1 : 0;
  throw Error(`Invalid rich text pointer`);
}
function Le(e) {
  return { type: f.String, value: e.readString() };
}
function Re(e, t) {
  e.writeString(t.value);
}
function ze(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : r > i ? 1 : 0
  );
}
function Be(e) {
  return { type: f.VectorSetItem, value: e.readUint32() };
}
function Ve(e, t) {
  e.writeUint32(t.value);
}
function He(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
async function Ue(e) {
  let t = Math.floor($e * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function x(e, t) {
  let n = We(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await V(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new tt(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function S(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function We(e) {
  m(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
var C,
  w,
  T,
  E,
  D,
  O,
  k,
  A,
  Ge,
  Ke,
  qe,
  j,
  Je,
  M,
  N,
  Ye,
  Xe,
  P,
  F,
  I,
  L,
  R,
  Ze,
  z,
  Qe,
  B,
  $e,
  et,
  V,
  tt,
  H,
  U,
  nt,
  rt,
  it = e(() => {
    (t(),
      u(),
      (w = Object.create),
      (T = Object.defineProperty),
      (E = Object.getOwnPropertyDescriptor),
      (D = Object.getOwnPropertyNames),
      (O = Object.getPrototypeOf),
      (k = Object.prototype.hasOwnProperty),
      (A = (e, t, n) =>
        t in e
          ? T(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
          : (e[t] = n)),
      (Ge = (e, t) =>
        function () {
          return (t || (0, e[D(e)[0]])((t = { exports: {} }).exports, t), t.exports);
        }),
      (Ke = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of D(t))
            k.call(e, i) ||
              i === n ||
              T(e, i, { get: () => t[i], enumerable: !(r = E(t, i)) || r.enumerable });
        return e;
      }),
      (qe = (e, t, n) => (
        (n = e == null ? {} : w(O(e))),
        Ke(!t && e && e.__esModule ? n : T(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (j = (e, t, n) => A(e, typeof t == `symbol` ? t : t + ``, n)),
      (Je = qe(
        Ge({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e)
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1
      )),
      (M = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (N = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = M.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return ((this.offset += e), t);
        }
        readUint16() {
          let e = M.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return ((this.offset += e), t);
        }
        readUint32() {
          let e = M.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return ((this.offset += e), t);
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = M.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return ((this.offset += e), t);
        }
        readInt8() {
          let e = M.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return ((this.offset += e), t);
        }
        readInt16() {
          let e = M.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return ((this.offset += e), t);
        }
        readInt32() {
          let e = M.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return ((this.offset += e), t);
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = M.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return ((this.offset += e), t);
        }
        readFloat32() {
          let e = M.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return ((this.offset += e), t);
        }
        readFloat64() {
          let e = M.Float64;
          this.ensureLength(e);
          let t = this.view.getFloat64(this.offset);
          return ((this.offset += e), t);
        }
        readBytes(e) {
          let t = this.offset,
            n = t + e,
            r = this.bytes.subarray(t, n);
          return ((this.offset = n), r);
        }
        readString() {
          let e = this.readUint32(),
            t = this.readBytes(e);
          return this.decoder.decode(t);
        }
        readJson() {
          let e = this.readString();
          return JSON.parse(e);
        }
        constructor(e) {
          ((this.bytes = e),
            j(this, `offset`, 0),
            j(this, `view`),
            j(this, `decoder`, new TextDecoder()),
            (this.view = p(this.bytes)));
        }
      }),
      c !== void 0 && c.requestIdleCallback,
      (Ye = 1024),
      (Xe = 1.5),
      (P = (e) => 2 ** e - 1),
      (F = (e) => -(2 ** (e - 1))),
      (I = (e) => 2 ** (e - 1) - 1),
      (L = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: F(8),
        Int16: F(16),
        Int32: F(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (R = {
        Uint8: P(8),
        Uint16: P(16),
        Uint32: P(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: I(8),
        Int16: I(16),
        Int32: I(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (Ze = class {
        getOffset() {
          return this.offset;
        }
        slice(e = 0, t = this.offset) {
          return this.bytes.slice(e, t);
        }
        subarray(e = 0, t = this.offset) {
          return this.bytes.subarray(e, t);
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (this.offset + e <= t) return;
          let n = new Uint8Array(Math.ceil(t * Xe) + e);
          (n.set(this.bytes), (this.bytes = n), (this.view = p(n)));
        }
        writeUint8(e) {
          g(e, L.Uint8, R.Uint8, `Uint8`);
          let t = M.Uint8;
          (this.ensureLength(t), this.view.setUint8(this.offset, e), (this.offset += t));
        }
        writeUint16(e) {
          g(e, L.Uint16, R.Uint16, `Uint16`);
          let t = M.Uint16;
          (this.ensureLength(t), this.view.setUint16(this.offset, e), (this.offset += t));
        }
        writeUint32(e) {
          g(e, L.Uint32, R.Uint32, `Uint32`);
          let t = M.Uint32;
          (this.ensureLength(t), this.view.setUint32(this.offset, e), (this.offset += t));
        }
        writeUint64(e) {
          g(e, L.Uint64, R.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          g(e, L.BigUint64, R.BigUint64, `BigUint64`);
          let t = M.BigUint64;
          (this.ensureLength(t), this.view.setBigUint64(this.offset, e), (this.offset += t));
        }
        writeInt8(e) {
          g(e, L.Int8, R.Int8, `Int8`);
          let t = M.Int8;
          (this.ensureLength(t), this.view.setInt8(this.offset, e), (this.offset += t));
        }
        writeInt16(e) {
          g(e, L.Int16, R.Int16, `Int16`);
          let t = M.Int16;
          (this.ensureLength(t), this.view.setInt16(this.offset, e), (this.offset += t));
        }
        writeInt32(e) {
          g(e, L.Int32, R.Int32, `Int32`);
          let t = M.Int32;
          (this.ensureLength(t), this.view.setInt32(this.offset, e), (this.offset += t));
        }
        writeInt64(e) {
          g(e, L.Int64, R.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          g(e, L.BigInt64, R.BigInt64, `BigInt64`);
          let t = M.BigInt64;
          (this.ensureLength(t), this.view.setBigInt64(this.offset, e), (this.offset += t));
        }
        writeFloat32(e) {
          let t = M.Float32;
          (this.ensureLength(t), this.view.setFloat32(this.offset, e), (this.offset += t));
        }
        writeFloat64(e) {
          let t = M.Float64;
          (this.ensureLength(t), this.view.setFloat64(this.offset, e), (this.offset += t));
        }
        writeBytes(e) {
          let t = e.length;
          (this.ensureLength(t), this.bytes.set(e, this.offset), (this.offset += t));
        }
        encodeString(e) {
          let t = this.encodedStrings.get(e);
          if (t) return t;
          let n = this.encoder.encode(e);
          return (this.encodedStrings.set(e, n), n);
        }
        writeString(e) {
          let t = this.encodeString(e),
            n = t.length;
          (this.writeUint32(n), this.writeBytes(t));
        }
        writeJson(e) {
          let t = JSON.stringify(e);
          this.writeString(t);
        }
        constructor() {
          (j(this, `offset`, 0),
            j(this, `bytes`, new Uint8Array(Ye)),
            j(this, `view`, p(this.bytes)),
            j(this, `encoder`, new TextEncoder()),
            j(this, `encodedStrings`, new Map()));
        }
      }),
      (z = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            m(v(n), `Invalid chunkId`),
            m(v(r), `Invalid offset`),
            m(v(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          return new e(t.readUint16(), t.readUint32(), t.readUint32());
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (m(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          ((this.chunkId = e), (this.offset = t), (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return ie(e);
            case 2:
              return se(e);
            case 3:
              return ue(e);
            case 4:
              return pe(e);
            case 5:
              return ge(e);
            case 6:
              return ye(e);
            case 7:
              return Se(e);
            case 8:
              return Te(e);
            case 9:
              return Oe(e);
            case 10:
              return je(e);
            case 11:
              return Pe(e);
            case 12:
              return Le(e);
            case 13:
              return Be(e);
            default:
              h(t);
          }
        }),
          (e.write = function (e, t) {
            let n = b(t);
            if ((e.writeUint8(n), !y(t)))
              switch (t.type) {
                case f.Array:
                  return ae(e, t);
                case f.Boolean:
                  return ce(e, t);
                case f.Color:
                  return de(e, t);
                case f.Date:
                  return me(e, t);
                case f.Enum:
                  return _e(e, t);
                case f.File:
                  return be(e, t);
                case f.Link:
                  return Ce(e, t);
                case f.Number:
                  return Ee(e, t);
                case f.Object:
                  return ke(e, t);
                case f.ResponsiveImage:
                  return Me(e, t);
                case f.RichText:
                  return Fe(e, t);
                case f.VectorSetItem:
                  return Ve(e, t);
                case f.String:
                  return Re(e, t);
                default:
                  h(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = b(e),
              i = b(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (y(e) || y(t)) return 0;
            switch (e.type) {
              case f.Array:
                return (m(t.type === f.Array), oe(e, t, n));
              case f.Boolean:
                return (m(t.type === f.Boolean), le(e, t));
              case f.Color:
                return (m(t.type === f.Color), fe(e, t));
              case f.Date:
                return (m(t.type === f.Date), he(e, t));
              case f.Enum:
                return (m(t.type === f.Enum), ve(e, t));
              case f.File:
                return (m(t.type === f.File), xe(e, t));
              case f.Link:
                return (m(t.type === f.Link), we(e, t));
              case f.Number:
                return (m(t.type === f.Number), De(e, t));
              case f.Object:
                return (m(t.type === f.Object), Ae(e, t, n));
              case f.ResponsiveImage:
                return (m(t.type === f.ResponsiveImage), Ne(e, t));
              case f.RichText:
                return (m(t.type === f.RichText), Ie(e, t));
              case f.VectorSetItem:
                return (m(t.type === f.VectorSetItem), He(e, t));
              case f.String:
                return (m(t.type === f.String), ze(e, t, n));
              default:
                h(e);
            }
          }));
      })((C ||= {})),
      (Qe = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = C.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static deserialize(t) {
          let n = new N(t),
            r = n.readJson(),
            i = n.readUint8(),
            a = [];
          for (let e = 0; e < i; e++) {
            let e = n.readString();
            a.push(e);
          }
          let o = new e(a, { collation: r }),
            s = n.readUint32();
          for (let e = 0; e < s; e++) {
            let e = [];
            for (let t = 0; t < i; t++) {
              let t = C.read(n);
              e.push(t);
            }
            let t = z.read(n);
            o.entries.push({ values: e, pointer: t });
          }
          return o;
        }
        serialize() {
          let e = new Ze();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(), e.writeUint32(this.entries.length), this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) C.write(e, t);
            r.write(e);
          }
          return e.subarray();
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          ((this.fieldNames = e), (this.options = t), j(this, `entries`, []));
        }
      }),
      (B = 3),
      ($e = 250),
      (et = [408, 429, 500, 502, 503, 504]),
      (V = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!et.includes(r.status) || ++n > B) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > B) throw e;
          }
          await Ue(n);
        }
      }),
      (tt = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((m(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = S(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((m(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = S(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          j(this, `chunks`, []);
        }
      }),
      (H = class {
        async loadModel() {
          let [e] = await x(this.options.url, [this.options.range]);
          return (m(e, `Failed to load model`), Qe.deserialize(e));
        }
        async getModel() {
          return (
            (this.modelPromise ??= this.loadModel()),
            (this.model ??= await this.modelPromise),
            this.model
          );
        }
        async lookupItems(e) {
          m(e.length === this.fields.length, `Invalid query length`);
          let t = await this.getModel(),
            n = e.reduce(
              (e, t, n) =>
                e.flatMap((e) => {
                  switch (t.type) {
                    case `All`:
                      return [e];
                    case `Equals`:
                      return this.queryEquals(e, t, n);
                    case `NotEquals`:
                      return this.queryNotEquals(e, t, n);
                    case `LessThan`:
                      return this.queryLessThan(e, t, n);
                    case `GreaterThan`:
                      return this.queryGreaterThan(e, t, n);
                    case `Contains`:
                      return this.queryContains(e, t, n);
                    case `StartsWith`:
                      return this.queryStartsWith(e, t, n);
                    case `EndsWith`:
                      return this.queryEndsWith(e, t, n);
                    default:
                      h(t);
                  }
                }),
              [t.entries]
            ),
            r = [];
          for (let e of n)
            for (let t of e) {
              let e = {};
              for (let n = 0; n < this.options.fieldNames.length; n++) {
                let r = this.options.fieldNames[n];
                e[r] = t.values[n];
              }
              r.push({ pointer: t.pointer.toString(), data: e });
            }
          return r;
        }
        queryEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = e.slice(r, i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryNotEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = [],
            o = e.slice(0, r);
          o.length > 0 && a.push(o);
          let s = e.slice(i + 1);
          return (s.length > 0 && a.push(s), a);
        }
        queryLessThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getRightMost(e, n, t.value),
              i = e.slice(0, r + 1);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getLeftMost(e, n, t.value),
            a = e.slice(0, i);
          return a.length > 0 ? [a] : [];
        }
        queryGreaterThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getLeftMost(e, n, t.value),
              i = e.slice(r);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getRightMost(e, n, t.value),
            a = e.slice(i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryContains(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== f.String || t.value?.type !== f.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.includes(r)
            );
          });
        }
        queryStartsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== f.String || t.value?.type !== f.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.startsWith(r)
            );
          });
        }
        queryEndsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== f.String || t.value?.type !== f.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.endsWith(r)
            );
          });
        }
        getLeftMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i; ) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            0 > C.compare(o, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i; ) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            C.compare(o, n, this.collation) > 0 ? (i = a) : (r = a + 1);
          }
          return i - 1;
        }
        findItems(e, t, n) {
          let r = [],
            i = 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a].values[t];
            if (!n(o)) {
              if (i < a) {
                let t = e.slice(i, a);
                r.push(t);
              }
              i = a + 1;
            }
          }
          if (i < e.length) {
            let t = e.slice(i);
            r.push(t);
          }
          return r;
        }
        constructor(e) {
          ((this.options = e),
            j(this, `schema`),
            j(this, `fields`),
            j(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            j(this, `modelPromise`),
            j(this, `model`),
            j(this, `collation`));
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            (m(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e }));
          }
          ((this.schema = t), (this.fields = n), (this.collation = this.options.collation));
        }
      }),
      (U = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = C.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            (e.writeString(t), C.write(e, n));
        }
        getData() {
          let e = {};
          for (let [t, n] of this.fields) e[t] = n;
          return e;
        }
        setField(e, t) {
          this.fields.set(e, t);
        }
        getField(e) {
          return this.fields.get(e);
        }
        constructor() {
          j(this, `fields`, new Map());
        }
      }),
      (nt = class {
        scanItems() {
          return (
            (this.itemsPromise ??= V(this.url).then(async (e) => {
              if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new N(new Uint8Array(t)),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  t = U.read(n),
                  i = n.getOffset() - e,
                  a = new z(this.id, e, i).toString(),
                  o = { pointer: a, data: t.getData() };
                (this.itemLoader.prime(a, o), r.push(o));
              }
              return r;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          ((this.id = e),
            (this.url = t),
            j(this, `itemsPromise`),
            j(
              this,
              `itemLoader`,
              new Je.default(
                async (e) => {
                  let t = e.map((e) => {
                    let t = z.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  });
                  return (await x(this.url, t)).map((t, n) => {
                    let r = new N(t),
                      i = U.read(r),
                      a = e[n];
                    return (m(a, `Missing pointer`), { pointer: a, data: i.getData() });
                  });
                },
                { maxBatchSize: 250 }
              )
            ));
        }
      }),
      (rt = class {
        async scanItems() {
          return (await Promise.all(this.chunks.map(async (e) => e.scanItems()))).flat();
        }
        resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = z.fromString(e),
                n = this.chunks[t.chunkId];
              return (m(n, `Missing chunk`), n.resolveItem(e));
            })
          );
        }
        compareItems(e, t) {
          let n = z.fromString(e.pointer),
            r = z.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return C.compare(e, t, n);
        }
        constructor(e) {
          ((this.options = e),
            j(this, `id`),
            j(this, `schema`),
            j(this, `indexes`),
            j(this, `resolveRichText`),
            j(this, `resolveVectorSetItem`),
            j(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new nt(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function at(e) {
  return typeof e == `object` && !!e && !i(e) && ct in e;
}
function ot(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function st(e) {
  let t = new Map();
  return (i) => {
    let a = t.get(i);
    if (a) return a;
    let s = (function t(i) {
      switch (i[0]) {
        case 1: {
          let [, ...e] = i;
          return o(n, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...n] = i;
          return o(re, e, ...n.map(t));
        }
        case 3: {
          let [, n, a, o, s] = i;
          for (let e of o) {
            let n = a[e];
            n && (a[e] = t(n));
          }
          for (let t of s) {
            let n = a[t];
            if (typeof n != `string`) continue;
            let r = e[n];
            r && (at(r) && r.preload(), (a[t] = r));
          }
          let c = e[n];
          return (
            ot(c, `Module not found`),
            at(c) && c.preload(),
            r(te, {
              componentIdentifier: n,
              children: (e) => r(ne, { component: c, props: { ...e, ...a } }),
            })
          );
        }
        case 4: {
          let [, e, n, ...r] = i,
            a = r.map(t);
          return o(e === `a` ? l.a : e, n, ...a);
        }
        case 5: {
          let [, e] = i;
          return e;
        }
      }
    })(JSON.parse(i));
    return (t.set(i, s), s);
  };
}
var W,
  ct,
  lt,
  ut = e(() => {
    (t(),
      a(),
      u(),
      s(),
      c !== void 0 && c.requestIdleCallback,
      (ct = `preload`),
      (lt =
        (((W = lt || {})[(W.Fragment = 1)] = `Fragment`),
        (W[(W.Link = 2)] = `Link`),
        (W[(W.Module = 3)] = `Module`),
        (W[(W.Tag = 4)] = `Tag`),
        (W[(W.Text = 5)] = `Text`),
        W)));
  }),
  G,
  dt,
  K,
  ft,
  pt,
  mt,
  ht,
  gt,
  q,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  J,
  Y,
  X,
  kt,
  Z,
  Q,
  At,
  jt,
  $,
  Mt = e(() => {
    (u(),
      it(),
      ut(),
      (G = {
        createdAt: { isNullable: !0, type: f.Date },
        guYfOdOQq: { isNullable: !0, type: f.String },
        id: { isNullable: !1, type: f.String },
        iXCuLNPva: { isNullable: !0, type: f.Enum },
        JdvV5b351: { isNullable: !0, type: f.String },
        nextItemId: { isNullable: !0, type: f.String },
        olL7Dgy7x: { isNullable: !0, type: f.String },
        p56gKhXkF: { isNullable: !0, type: f.Link },
        PLBkt8VbJ: { isNullable: !0, type: f.String },
        pOVpIXKAs: { isNullable: !0, type: f.String },
        previousItemId: { isNullable: !0, type: f.String },
        QcYzZ0Djr: { isNullable: !0, type: f.Enum },
        SY7T7kRHC: { isNullable: !0, type: f.RichText },
        tT1wKi2C7: { isNullable: !0, type: f.RichText },
        updatedAt: { isNullable: !0, type: f.Date },
        Z8FHGxukM: {
          definition: { isNullable: !0, type: f.String },
          isNullable: !0,
          type: f.Array,
        },
      }),
      (dt = [`id`]),
      (K = { type: 1 }),
      (ft = [`previousItemId`]),
      (pt = [`nextItemId`]),
      (mt = [`id`, `PLBkt8VbJ`]),
      (ht = [`PLBkt8VbJ`, `id`]),
      (gt = [`pOVpIXKAs`]),
      (q = { type: 0 }),
      (_t = [`PLBkt8VbJ`]),
      (vt = [`iXCuLNPva`]),
      (yt = [`QcYzZ0Djr`]),
      (bt = [`guYfOdOQq`]),
      (xt = [`JdvV5b351`]),
      (St = [`olL7Dgy7x`]),
      (Ct = [`tT1wKi2C7`]),
      (wt = [`SY7T7kRHC`]),
      (Tt = [`Z8FHGxukM`]),
      (Et = [`p56gKhXkF`]),
      (Dt = []),
      (Ot = (e) => {
        let t = Dt[e];
        if (t) return t().then((e) => e.default);
      }),
      (J = st({})),
      (Y = new ee()),
      (X = {
        collectionByLocaleId: {
          default: new rt({
            chunks: [
              new URL(
                `./vQ037hWUX-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/z7eZa6q0vDNm2qKp6OG9/4hSy92yDHLOxtP17aQX6/vQ037hWUX.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `1e568a7b-4ee3-4f48-8318-dcd897e62fafdefault`,
            indexes: [
              new H({
                collation: K,
                collectionSchema: G,
                fieldNames: dt,
                range: { from: 0, to: 97 },
                url: new URL(
                  `./vQ037hWUX-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/z7eZa6q0vDNm2qKp6OG9/4hSy92yDHLOxtP17aQX6/vQ037hWUX.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new H({
                collation: K,
                collectionSchema: G,
                fieldNames: ft,
                range: { from: 97, to: 193 },
                url: new URL(
                  `./vQ037hWUX-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/z7eZa6q0vDNm2qKp6OG9/4hSy92yDHLOxtP17aQX6/vQ037hWUX.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new H({
                collation: K,
                collectionSchema: G,
                fieldNames: pt,
                range: { from: 193, to: 285 },
                url: new URL(
                  `./vQ037hWUX-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/z7eZa6q0vDNm2qKp6OG9/4hSy92yDHLOxtP17aQX6/vQ037hWUX.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new H({
                collation: K,
                collectionSchema: G,
                fieldNames: mt,
                range: { from: 285, to: 517 },
                url: new URL(
                  `./vQ037hWUX-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/z7eZa6q0vDNm2qKp6OG9/4hSy92yDHLOxtP17aQX6/vQ037hWUX.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new H({
                collation: K,
                collectionSchema: G,
                fieldNames: ht,
                range: { from: 517, to: 749 },
                url: new URL(
                  `./vQ037hWUX-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/z7eZa6q0vDNm2qKp6OG9/4hSy92yDHLOxtP17aQX6/vQ037hWUX.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new H({
                collation: q,
                collectionSchema: G,
                fieldNames: gt,
                range: { from: 749, to: 935 },
                url: new URL(
                  `./vQ037hWUX-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/z7eZa6q0vDNm2qKp6OG9/4hSy92yDHLOxtP17aQX6/vQ037hWUX.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new H({
                collation: q,
                collectionSchema: G,
                fieldNames: _t,
                range: { from: 935, to: 1119 },
                url: new URL(
                  `./vQ037hWUX-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/z7eZa6q0vDNm2qKp6OG9/4hSy92yDHLOxtP17aQX6/vQ037hWUX.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new H({
                collation: q,
                collectionSchema: G,
                fieldNames: vt,
                range: { from: 1119, to: 1223 },
                url: new URL(
                  `./vQ037hWUX-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/z7eZa6q0vDNm2qKp6OG9/4hSy92yDHLOxtP17aQX6/vQ037hWUX.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new H({
                collation: q,
                collectionSchema: G,
                fieldNames: yt,
                range: { from: 1223, to: 1327 },
                url: new URL(
                  `./vQ037hWUX-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/z7eZa6q0vDNm2qKp6OG9/4hSy92yDHLOxtP17aQX6/vQ037hWUX.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new H({
                collation: q,
                collectionSchema: G,
                fieldNames: bt,
                range: { from: 1327, to: 1569 },
                url: new URL(
                  `./vQ037hWUX-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/z7eZa6q0vDNm2qKp6OG9/4hSy92yDHLOxtP17aQX6/vQ037hWUX.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new H({
                collation: q,
                collectionSchema: G,
                fieldNames: xt,
                range: { from: 1569, to: 2099 },
                url: new URL(
                  `./vQ037hWUX-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/z7eZa6q0vDNm2qKp6OG9/4hSy92yDHLOxtP17aQX6/vQ037hWUX.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new H({
                collation: q,
                collectionSchema: G,
                fieldNames: St,
                range: { from: 2099, to: 3644 },
                url: new URL(
                  `./vQ037hWUX-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/z7eZa6q0vDNm2qKp6OG9/4hSy92yDHLOxtP17aQX6/vQ037hWUX.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new H({
                collation: q,
                collectionSchema: G,
                fieldNames: Ct,
                range: { from: 3644, to: 6925 },
                url: new URL(
                  `./vQ037hWUX-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/z7eZa6q0vDNm2qKp6OG9/4hSy92yDHLOxtP17aQX6/vQ037hWUX.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new H({
                collation: q,
                collectionSchema: G,
                fieldNames: wt,
                range: { from: 6925, to: 9699 },
                url: new URL(
                  `./vQ037hWUX-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/z7eZa6q0vDNm2qKp6OG9/4hSy92yDHLOxtP17aQX6/vQ037hWUX.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new H({
                collation: q,
                collectionSchema: G,
                fieldNames: Tt,
                range: { from: 9699, to: 9812 },
                url: new URL(
                  `./vQ037hWUX-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/z7eZa6q0vDNm2qKp6OG9/4hSy92yDHLOxtP17aQX6/vQ037hWUX.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new H({
                collation: q,
                collectionSchema: G,
                fieldNames: Et,
                range: { from: 9812, to: 9985 },
                url: new URL(
                  `./vQ037hWUX-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/z7eZa6q0vDNm2qKp6OG9/4hSy92yDHLOxtP17aQX6/vQ037hWUX.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: J,
            resolveVectorSetItem: Ot,
            schema: G,
          }),
        },
        displayName: `Careers`,
        id: `1e568a7b-4ee3-4f48-8318-dcd897e62faf`,
      }),
      (kt = X),
      d(X, {
        pOVpIXKAs: { defaultValue: ``, title: `Job Title`, type: f.String },
        PLBkt8VbJ: { preventLocalization: !1, title: `Slug`, type: f.String },
        iXCuLNPva: {
          defaultValue: `p807nogPf`,
          options: [`p807nogPf`, `OKQI5bsp7`, `D476x9BUt`],
          optionTitles: [`Engineering`, `Data Architecture`, `UI/UX Interaction`],
          title: `Department`,
          type: f.Enum,
        },
        QcYzZ0Djr: {
          defaultValue: `YDMXI4Ge4`,
          options: [`YDMXI4Ge4`, `WoWp9AMp9`, `PQijSWzwl`],
          optionTitles: [`On Site`, `Hybrid`, `Remote`],
          title: `Location`,
          type: f.Enum,
        },
        guYfOdOQq: { defaultValue: ``, title: `Compensation Range`, type: f.String },
        JdvV5b351: { defaultValue: ``, displayTextArea: !0, title: `Overview`, type: f.String },
        olL7Dgy7x: { defaultValue: ``, displayTextArea: !0, title: `Mission`, type: f.String },
        tT1wKi2C7: { defaultValue: ``, title: `Responsibilities`, type: f.RichText },
        SY7T7kRHC: { defaultValue: ``, title: `Requirements`, type: f.RichText },
        Z8FHGxukM: {
          dataIdentifier: `local-module:collection/wxhejvlYk:default`,
          title: `Tech Stack`,
          type: f.MultiCollectionReference,
        },
        p56gKhXkF: { title: `Application Link`, type: f.Link },
        createdAt: { title: `Created`, type: f.Date },
        updatedAt: { title: `Updated`, type: f.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/vQ037hWUX:default`,
          title: `Previous`,
          type: f.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/vQ037hWUX:default`,
          title: `Next`,
          type: f.CollectionReference,
        },
      }),
      (Z = (e, t) => {
        switch ((t?.fallback, e)) {
          case `p807nogPf`:
            return `Engineering`;
          case `OKQI5bsp7`:
            return `Data Architecture`;
          case `D476x9BUt`:
            return `UI/UX Interaction`;
          default:
            return ``;
        }
      }),
      (Q = (e, t) => {
        switch ((t?.fallback, e)) {
          case `YDMXI4Ge4`:
            return `On Site`;
          case `WoWp9AMp9`:
            return `Hybrid`;
          case `PQijSWzwl`:
            return `Remote`;
          default:
            return ``;
        }
      }),
      (At = { iXCuLNPva: Z, QcYzZ0Djr: Q }),
      (jt = {
        async getSlugByRecordId(e, t) {
          let [n] = await Y.query(
            {
              from: { data: X, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `PLBkt8VbJ`, type: `Identifier` }],
              where: {
                left: { name: `id`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          );
          return n?.PLBkt8VbJ;
        },
        async getRecordIdBySlug(e, t) {
          let [n] = await Y.query(
            {
              from: { data: X, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `id`, type: `Identifier` }],
              where: {
                left: { name: `PLBkt8VbJ`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          );
          return n?.id;
        },
      }),
      ($ = {
        exports: {
          QcYzZ0DjrToDisplayName: { type: `variable`, annotations: { framerContractVersion: `1` } },
          enumToDisplayNameFunctions: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          utils: { type: `variable`, annotations: { framerContractVersion: `1` } },
          iXCuLNPvaToDisplayName: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `data`,
            name: `data`,
            annotations: {
              framerSlug: `PLBkt8VbJ`,
              framerContractVersion: `1`,
              framerColorSyntax: `false`,
              framerRecordIdKey: `id`,
              framerCollectionId: `vQ037hWUX`,
              framerData: `true`,
              framerAutoSizeImages: `true`,
              framerEnumToDisplayNameUtils: `2`,
              framerCollectionUtils: `1`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { Mt as a, Z as i, $ as n, jt as o, At as r, kt as s, Q as t };
//# sourceMappingURL=vQ037hWUX.CH4EkdMO.mjs.map
