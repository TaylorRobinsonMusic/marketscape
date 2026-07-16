import { t as e } from "./rolldown-runtime.BB3S47xo.mjs";
import {
  A as t,
  C as n,
  D as r,
  F as i,
  I as a,
  L as o,
  M as s,
  N as c,
  O as l,
  P as u,
  R as d,
  S as f,
  T as p,
  _ as m,
  a as h,
  b as g,
  c as _,
  d as v,
  f as y,
  g as b,
  h as x,
  i as S,
  j as C,
  k as w,
  l as T,
  m as E,
  o as D,
  s as O,
  u as ee,
  v as k,
  w as A,
  x as j,
  y as te,
  z as M,
} from "./react.Cxf1BSD4.mjs";
import {
  $ as ne,
  A as N,
  B as re,
  C as P,
  D as ie,
  E as ae,
  F as oe,
  G as se,
  H as ce,
  I as le,
  J as ue,
  K as de,
  L as fe,
  M as pe,
  N as me,
  O as he,
  P as ge,
  Q as F,
  R as _e,
  S as ve,
  T as ye,
  U as be,
  V as xe,
  W as Se,
  X as Ce,
  Y as we,
  Z as Te,
  _ as Ee,
  a as De,
  at as Oe,
  b as ke,
  c as Ae,
  ct as je,
  d as Me,
  dt as Ne,
  et as Pe,
  f as Fe,
  ft as Ie,
  g as Le,
  h as Re,
  i as ze,
  it as Be,
  j as Ve,
  k as He,
  l as Ue,
  lt as I,
  m as We,
  n as Ge,
  nt as Ke,
  o as qe,
  ot as L,
  p as Je,
  q as Ye,
  r as Xe,
  rt as Ze,
  s as Qe,
  st as $e,
  tt as et,
  u as tt,
  ut as nt,
  v as rt,
  w as it,
  x as at,
  y as ot,
  z as st,
} from "./motion.BxtCy6Qp.mjs";
function ct(e) {
  return typeof e == `function`;
}
function lt(e) {
  return typeof e == `boolean`;
}
function R(e) {
  return typeof e == `string`;
}
function z(e) {
  return Number.isFinite(e);
}
function ut(e) {
  return Array.isArray(e);
}
function B(e) {
  return typeof e == `object` && !!e && !ut(e);
}
function dt(e) {
  for (let t in e) return !1;
  return !0;
}
function ft(e) {
  return e === void 0;
}
function pt(e) {
  return e === null;
}
function mt(e) {
  return e == null;
}
function ht(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function gt(e) {
  return B(e) && ct(e.return);
}
function _t(e) {
  return B(e) && ct(e.then);
}
function vt(e) {
  return e instanceof Promise;
}
function yt(e) {
  return `url('${bt(e)}')`;
}
function bt(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function xt(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${
    e
      ? `${e}
`
      : ``
  }In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${
    n
      ? `:
${n}`
      : `.`
  }`;
}
function St() {
  if (!Qg) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = import(n)
      .then((t) => (a_.set(e, t), t))
      .catch((t) => {
        throw (a_.delete(e), console.warn(`Failed to import lazy module: ${n}`, t), t);
      });
    (r.catch(Zg), a_.set(e, r));
  }
}
function Ct(e) {
  return typeof e == `object` && !!e && !y(e) && s_ in e;
}
function wt(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function Tt(e, t = `default`, n) {
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !a_.has(n)) return;
      let e = a_.get(n);
      vt(e) ? s(() => e) : (i = wt(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = wt(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    l = !1,
    u = m(function (t, r) {
      if (
        (c(() => {
          l = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && o_ !== void 0 && o_.add(n), !i)) throw s(e);
      return _(i, { ref: r, ...t });
    });
  return (
    (u.preload = () => (o(), s(e))),
    (u.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: l })),
    u
  );
}
function Et(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Dt(e) {
  return e === null || !(l_ in e) ? !1 : typeof e.equals == `function`;
}
function Ot(e, t) {
  return e === t ? !0 : e !== e && t !== t;
}
function kt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!Ot(e[r], t[r])) return !1;
  return !0;
}
function At(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!It(e[r], t[r], !0)) return !1;
  return !0;
}
function jt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Ot(r, t.get(n))) return !1;
  return !0;
}
function Mt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!It(r, t.get(n), !0)) return !1;
  return !0;
}
function Nt(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function Pt(e, t) {
  let n = c_(e);
  if (n.length !== c_(t).length) return !1;
  for (let r of n)
    if (!Et(t, r) || (!(r === `_owner` && Et(e, `$$typeof`) && e.$$typeof) && !Ot(e[r], t[r])))
      return !1;
  return !0;
}
function Ft(e, t) {
  let n = c_(e);
  if (n.length !== c_(t).length) return !1;
  for (let r of n)
    if (!Et(t, r) || (!(r === `_owner` && Et(e, `$$typeof`) && e.$$typeof) && !It(e[r], t[r], !0)))
      return !1;
  return !0;
}
function It(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? At(e, t) : kt(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? Mt(e, t) : jt(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return Nt(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? Dt(e) && Dt(t)
        ? e.equals(t)
        : n
          ? Ft(e, t)
          : Pt(e, t)
      : !1;
}
function Lt(e, t, n = !0) {
  try {
    return It(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function Rt(e) {
  return j.useCallback((t) => e[t], [e]);
}
function zt({ api: e, children: t }) {
  return _(u_.Provider, { value: e, children: t });
}
function Bt() {
  return j.useContext(u_);
}
function Vt({ routes: e, children: t }) {
  let n = Rt(e),
    r = C(() => ({ getRoute: n }), [n]);
  return _(u_.Provider, { value: r, children: t });
}
function Ht() {
  let e = Bt(),
    n = t(d_),
    r = n?.routeId ?? e.currentRouteId,
    i = n?.routeId ? n.pathVariables : e.currentPathVariables,
    a = r ? e.getRoute?.(r) : void 0;
  return C(() => {
    if (!(!r || !a)) return { ...a, id: r, pathVariables: i };
  }, [r, i, a]);
}
function Ut() {
  let e = Ht();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Wt(e) {
  let t = Ht(),
    n = j.useRef(t);
  Lt(n.current, t) || !t || ((n.current = t), e(t));
}
function Gt(e) {
  let t = Bt();
  if (e) return t.getRoute?.(e);
}
function Kt(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function qt(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function Jt(e, t) {
  let n = Ht(),
    r = Gt(t) ?? n;
  return j.useMemo(() => (r ? Kt(r, e) : e), [e, r]);
}
function Yt() {
  return Ht()?.pathVariables;
}
function V(e, ...t) {
  if (e) return;
  let n = Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function H(e, t) {
  throw t instanceof Error
    ? t
    : t === void 0
      ? Error(e ? `Unexpected value: ${e}` : `Application entered invalid state`)
      : Error(String(t));
}
function Xt(e) {
  return e === null || (typeof e != `object` && typeof e != `function`);
}
function Zt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === k_
  );
}
function Qt(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function $t(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e < ` ` ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}` : ``;
  }
}
function en(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = $t(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function tn(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function nn(e) {
  return A_.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function rn(e) {
  return !(!Number.isInteger(e) || e < 0 || e > D_);
}
function an(e) {
  return !(!Number.isInteger(e) || e < 0 || e > E_);
}
function on(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return rn(+e);
}
function sn(e) {
  let t = Object.keys(e);
  for (var n = t.length - 1; n >= 0 && !on(t[n]); n--);
  return ((t.length = n + 1), t);
}
function cn(e) {
  return new Uint8Array(e).toBase64();
}
function ln(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function un(e) {
  return Buffer.from(e).toString(`base64`);
}
function dn(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function fn(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function pn(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function mn(e, t) {
  return hn(JSON.parse(e), t);
}
function hn(e, t) {
  if (typeof e == `number`) return a(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let n = e,
    r = Array(n.length),
    i = null;
  function a(e, o = !1) {
    if (e === y_) return;
    if (e === x_) return NaN;
    if (e === S_) return 1 / 0;
    if (e === C_) return -1 / 0;
    if (e === w_) return -0;
    if (o || typeof e != `number`) throw Error(`Invalid input`);
    if (e in r) return r[e];
    let s = n[e];
    if (!s || typeof s != `object`) r[e] = s;
    else if (Array.isArray(s))
      if (typeof s[0] == `string`) {
        let o = s[0],
          c = t && Object.hasOwn(t, o) ? t[o] : void 0;
        if (c) {
          let t = s[1];
          if ((typeof t != `number` && (t = n.push(s[1]) - 1), (i ??= new Set()), i.has(t)))
            throw Error(`Invalid circular reference`);
          return (i.add(t), (r[e] = c(a(t))), i.delete(t), r[e]);
        }
        switch (o) {
          case `Date`:
            r[e] = new Date(s[1]);
            break;
          case `Set`:
            let t = new Set();
            r[e] = t;
            for (let e = 1; e < s.length; e += 1) t.add(a(s[e]));
            break;
          case `Map`:
            let i = new Map();
            r[e] = i;
            for (let e = 1; e < s.length; e += 2) i.set(a(s[e]), a(s[e + 1]));
            break;
          case `RegExp`:
            r[e] = new RegExp(s[1], s[2]);
            break;
          case `Object`: {
            let t = s[1];
            if (typeof n[t] == `object` && n[t][0] !== `BigInt`) throw Error(`Invalid input`);
            r[e] = Object(a(t));
            break;
          }
          case `BigInt`:
            r[e] = BigInt(s[1]);
            break;
          case `null`:
            let c = Object.create(null);
            r[e] = c;
            for (let e = 1; e < s.length; e += 2) {
              if (s[e] === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              c[s[e]] = a(s[e + 1]);
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Float16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`:
          case `DataView`: {
            if (n[s[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = globalThis[o],
              i = a(s[1]);
            r[e] = s[2] === void 0 ? new t(i) : new t(i, s[2], s[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = s[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            r[e] = P_(t);
            break;
          }
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`: {
            let t = o.slice(9);
            r[e] = Temporal[t].from(s[1]);
            break;
          }
          case `URL`:
            r[e] = new URL(s[1]);
            break;
          case `URLSearchParams`:
            r[e] = new URLSearchParams(s[1]);
            break;
          default:
            throw Error(`Unknown type ${o}`);
        }
      } else if (s[0] === T_) {
        let t = s[1];
        if (!an(t)) throw Error(`Invalid input`);
        let n = [];
        ((r[e] = n), (n[D_] = void 0), delete n[D_]);
        for (let e = 2; e < s.length; e += 2) {
          let r = s[e];
          if (!rn(r) || r >= t) throw Error(`Invalid input`);
          n[r] = a(s[e + 1]);
        }
        n.length = t;
      } else {
        let t = Array(s.length);
        r[e] = t;
        for (let e = 0; e < s.length; e += 1) {
          let n = s[e];
          n !== b_ && (t[e] = a(n));
        }
      }
    else {
      let t = {};
      r[e] = t;
      for (let e of Object.keys(s)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        let n = s[e];
        t[e] = a(n);
      }
    }
    return r[e];
  }
  return a(0);
}
function gn(e, t) {
  let n = _n(!1, e, t);
  return typeof n == `string` ? n : `[${n.join(`,`)}]`;
}
function _n(e, t, n) {
  let r = [],
    i = new Map(),
    a = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) a.push({ key: e, fn: n[e] });
  let o = [],
    s = 0;
  function c(n, l) {
    if (n === void 0) return y_;
    if (Number.isNaN(n)) return x_;
    if (n === 1 / 0) return S_;
    if (n === -1 / 0) return C_;
    if (n === 0 && 1 / n < 0) return w_;
    if (i.has(n)) return i.get(n);
    ((l ??= s++), i.set(n, l));
    for (let { key: e, fn: t } of a) {
      let i = t(n);
      if (i) return ((r[l] = `["${e}",${c(i)}]`), l);
    }
    if (typeof n == `function`) throw new O_(`Cannot stringify a function`, o, n, t);
    if (typeof n == `symbol`) throw new O_(`Cannot stringify a Symbol primitive`, o, n, t);
    let u = ``;
    if (Xt(n)) u = vn(n);
    else if (typeof n.then == `function`) {
      if (!e)
        throw new O_(
          `Cannot stringify a Promise or thenable — use stringifyAsync instead`,
          o,
          n,
          t
        );
      u = Promise.resolve(n).then((e) => {
        let t = c(e, l);
        t < 0 && (r[l] = t);
      });
    } else {
      let e = Qt(n);
      switch (e) {
        case `Number`:
        case `String`:
        case `Boolean`:
        case `BigInt`:
          u = `["Object",${c(n.valueOf())}]`;
          break;
        case `Date`:
          u = `["Date","${isNaN(n.getDate()) ? `` : n.toISOString()}"]`;
          break;
        case `URL`:
          u = `["URL",${en(n.toString())}]`;
          break;
        case `URLSearchParams`:
          u = `["URLSearchParams",${en(n.toString())}]`;
          break;
        case `RegExp`:
          let { source: r, flags: i } = n;
          u = i ? `["RegExp",${en(r)},"${i}"]` : `["RegExp",${en(r)}]`;
          break;
        case `Array`: {
          let e = !1;
          u = `[`;
          for (let t = 0; t < n.length; t += 1)
            if ((t > 0 && (u += `,`), Object.hasOwn(n, t)))
              (o.push(`[${t}]`), (u += c(n[t])), o.pop());
            else if (e) u += b_;
            else {
              let t = sn(n),
                r = t.length,
                i = String(n.length).length;
              if ((n.length - r) * 3 > 4 + i + r * (i + 1)) {
                u = `[` + T_ + `,` + n.length;
                for (let e = 0; e < t.length; e++) {
                  let r = t[e];
                  (o.push(`[${r}]`), (u += `,` + r + `,` + c(n[r])), o.pop());
                }
                break;
              } else ((e = !0), (u += b_));
            }
          u += `]`;
          break;
        }
        case `Set`:
          u = `["Set"`;
          for (let e of n) u += `,${c(e)}`;
          u += `]`;
          break;
        case `Map`:
          u = `["Map"`;
          for (let [e, t] of n)
            (o.push(`.get(${Xt(e) ? vn(e) : `...`})`), (u += `,${c(e)},${c(t)}`), o.pop());
          u += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Float16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`:
        case `DataView`: {
          let t = n;
          ((u = `["` + e + `",` + c(t.buffer)),
            t.byteLength !== t.buffer.byteLength && (u += `,${t.byteOffset},${t.length}`),
            (u += `]`));
          break;
        }
        case `ArrayBuffer`:
          u = `["ArrayBuffer","${N_(n)}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          u = `["${e}",${en(n.toString())}]`;
          break;
        default:
          if (!Zt(n)) throw new O_(`Cannot stringify arbitrary non-POJOs`, o, n, t);
          if (tn(n).length > 0) throw new O_(`Cannot stringify POJOs with symbolic keys`, o, n, t);
          if (Object.getPrototypeOf(n) === null) {
            u = `["null"`;
            for (let e of Object.keys(n)) {
              if (e === `__proto__`)
                throw new O_(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (o.push(nn(e)), (u += `,${en(e)},${c(n[e])}`), o.pop());
            }
            u += `]`;
          } else {
            u = `{`;
            let e = !1;
            for (let r of Object.keys(n)) {
              if (r === `__proto__`)
                throw new O_(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (e && (u += `,`), (e = !0), o.push(nn(r)), (u += `${en(r)}:${c(n[r])}`), o.pop());
            }
            u += `}`;
          }
      }
    }
    return ((r[l] = u), l);
  }
  let l = c(t);
  return l < 0 ? `${l}` : r;
}
function vn(e) {
  let t = typeof e;
  return t === `string`
    ? en(e)
    : e === void 0
      ? y_.toString()
      : e === 0 && 1 / e < 0
        ? w_.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function yn(e, t, n = `lazy`) {
  switch ((K.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e } })
        );
      break;
    }
  }
}
function bn(e) {
  return R(e) && (e === `` || I_.test(e));
}
function xn() {
  return { [L_.QueryCache]: new Map(), [L_.CollectionUtilsCache]: new Map() };
}
function Sn() {
  if (!Qg) return;
  if (R_ !== void 0) return R_;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      R_ = mn(e.text) ?? xn();
    } catch (e) {
      ((R_ = xn()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      t_(() => {
        (e?.remove(), (e = null));
      }),
      R_
    );
  }
}
function Cn(e, t) {
  if (
    (console.warn(
      xt(
        `Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`
      )
    ),
    Math.random() < 0.01)
  ) {
    let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
    yn(`published_site_load_error`, { message: String(e), stack: t });
  }
}
function wn(e, t) {
  let n = Sn();
  return n ? n[e].has(t) : !1;
}
function Tn(e, t) {
  let n = Sn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function En(e) {
  return e?.id ?? g_;
}
function Dn(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function On(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (H_.has(n)) return H_.get(n);
    let r = new W_(n, t);
    return (H_.set(n, r), r);
  };
}
function kn({ children: e, collectionUtils: t }) {
  let n = C(() => ({ get: On(t) }), [t]);
  return _(U_.Provider, { value: n, children: e });
}
function An() {
  return t(U_);
}
function jn(e) {
  return `scheduler` in e;
}
function Mn() {
  for (let e of J_) e();
  J_.clear();
}
function Nn(e) {
  return new Promise((t) => {
    if ((J_.add(t), document.hidden)) {
      Mn();
      return;
    }
    (document.addEventListener(`visibilitychange`, Mn),
      document.addEventListener(`pagehide`, Mn),
      Le.read(() => {
        Fn(e).then(() => {
          (J_.delete(t), !e?.signal?.aborted && t());
        });
      }));
  });
}
function Pn(e) {
  return new Promise((t) => {
    (setTimeout(t, 100),
      Le.read(
        () => {
          Fn(e).then(t);
        },
        !1,
        !0
      ));
  });
}
function Fn(e) {
  let t = e?.priority;
  return K_ || q_
    ? t === `background`
      ? new Promise((e) => {
          setTimeout(e, 1);
        })
      : K_
        ? G_.yield(e).catch(Zg)
        : G_.postTask(() => {}, e).catch(Zg)
    : t === `user-blocking`
      ? Promise.resolve()
      : new Promise((e) => {
          setTimeout(e, t === `background` ? 1 : 0);
        });
}
function In(e) {
  let { continueAfter: t, ensureContinueBeforeUnload: n, ...r } = e ?? {};
  return n ? Nn(r) : t === `paint` ? Pn(r) : Fn(r);
}
function Ln() {
  let e = An(),
    { autobahnNavigation: t } = h_(),
    { getRoute: n } = Bt();
  return s(
    (r, i, a = !0, o = !0) => {
      if (!r || !n) return;
      let s = n(r),
        { pathVariables: c, locale: l } = i;
      return zn(s, { routeId: r, pathVariables: c, locale: l, collectionUtils: e }, a, o && t);
    },
    [n, e, t]
  );
}
function Rn(e, t = !0) {
  let n = Ln();
  c(() => {
    if (!(!t || !Y_)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function zn(e, t, n = !0, r = !0) {
  if (!Y_ || !e) return;
  let i = e.page;
  if (!(!i || !Ct(i))) {
    n && (await In());
    try {
      let e = await i.preload();
      r && t && e && (await Bn(e, t));
    } catch {}
  }
}
async function Bn(e, t) {
  let n = e.loader;
  if (!n?.load) return;
  let r = {
    signal: t.signal ?? new AbortController().signal,
    pathVariables: t.pathVariables ?? {},
    routeId: t.routeId,
    locale: t.locale,
    collectionUtils: t.collectionUtils,
  };
  try {
    await n.load({}, r);
  } catch {}
}
function Vn(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = Hn(e),
    [r, i] = Hn(t),
    a = Un(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function Hn(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function Un(e, t) {
  if (e === t || ((e = `/` + Wn(e)), (t = `/` + Wn(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = Q_(e, 1 + s);
    if (n !== Q_(t, 1 + s)) break;
    n === Z_ && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (Q_(t, 1 + s) === Z_) return ev(t, 1 + s + 1);
      if (s === 0) return ev(t, 1 + s);
    } else r > a && (Q_(e, 1 + s) === Z_ ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || Q_(e, s) === Z_) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${ev(t, 1 + o)}`;
}
function Wn(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = Q_(e, o);
    else if (rv(a)) break;
    else a = Z_;
    if (rv(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || Q_(t, t.length - 1) !== X_ || Q_(t, t.length - 2) !== X_) {
            if (t.length > 2) {
              let e = $_(t, nv);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = ev(t, 0, e)), (n = t.length - 1 - $_(t, nv))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          tv && ((t += t.length > 0 ? `${nv}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${nv}${ev(e, r + 1, o)}`) : (t = ev(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === X_ && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function Gn(e, t) {
  return e.replace(av, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function Kn(e, t = !1) {
  let n = ``;
  if (M !== void 0)
    if (t) n = M.location.search;
    else {
      let e = M.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? M.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? qn(n, e) : e;
}
function qn(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== ov && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function Jn(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(av)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !R(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = vt(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = vt(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = vt(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      })
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    !t ||
      !n ||
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
async function Yn({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await Jn(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (t.slug && (u.path = `/` + t.slug + u.path), o && u.path && (u.path = Kn(u.path, !0)), u);
}
function Xn(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || M.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function Zn({ children: e, value: t }) {
  return _(sv.Provider, { value: t, children: e });
}
function Qn() {
  return j.useContext(sv);
}
function $n(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function er(e) {
  let t = cv,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < lv; ) ((n = e.next(t)), r.push(n.value), (t += cv));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - cv }
  );
}
function tr(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function nr(e) {
  let { innerWidth: t, innerHeight: n } = M,
    [r, i] = tr(e.x),
    [a, o] = tr(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function rr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function ir(e) {
  return e ? dv[e] : void 0;
}
function ar(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (or(t)) {
    let { easing: e, duration: n } = er(
      Ve({ keyframes: [0, 1], ...sr(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = ir(n?.mask?.type),
    o = rr(n, `start`, e, a),
    s = rr({ ...fv, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function or(e) {
  return e.type === `spring`;
}
function sr(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function cr({ exit: e = mv, enter: t }) {
  let n = document.createElement(`style`);
  n.id = pv;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += ar(`exit`, e)),
    (r += ar(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function lr() {
  t_(() => {
    Le.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(pv);
      e && document.head.removeChild(e);
    });
  });
}
function ur() {
  return !!document.startViewTransition;
}
function dr(e) {
  return new Promise((t) => {
    Le.render(() => {
      (performance.mark(`framer-vt-style`), cr(e), t());
    });
  });
}
async function fr(e, t, n) {
  if (!ur()) {
    e();
    return;
  }
  if ((await dr(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(hv),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), lr());
      })
      .catch(hv),
    r
  );
}
function pr() {
  let e = Qn(),
    t = l(void 0);
  return (
    c(() => {
      t.current &&= (t.current(), void 0);
    }),
    s(
      (n, r, i, a) => {
        let o = $n(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return fr(
            async () => {
              (i(), await e);
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function mr(e, t) {
  t_(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function hr(e, t, n, r = f) {
  r(() => {
    let t = async (e) => (await In({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function gr(e) {
  let t = l(void 0);
  return (
    hr(
      () => {
        t.current &&= (t.current(), void 0);
      },
      void 0,
      { priority: `user-blocking` }
    ),
    s(
      (n) => {
        let r = new Promise((e) => {
          t.current = e;
        });
        if (!e) return { promise: r, measureDetail: n, ignore: null };
        let i = `${e}-start`,
          a = `${e}-end`,
          o = !1;
        return (
          performance.mark(i),
          r
            .finally(() => {
              o || (performance.mark(a), performance.measure(e, { start: i, end: a, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: r,
            measureDetail: n,
            ignore: () => {
              ((o = !0), t.current?.(), (t.current = void 0));
            },
          }
        );
      },
      [e]
    )
  );
}
async function _r(
  e,
  t,
  {
    currentRoutePath: n,
    currentRoutePathLocalized: r,
    currentPathVariables: i,
    hash: a,
    pathVariables: o,
    localeId: s,
    preserveQueryParams: c,
    siteCanonicalURL: l,
  },
  u = !1
) {
  let { path: d } = t;
  if (!d) return;
  let f = wr(t, {
      currentRoutePath: n,
      currentRoutePathLocalized: r,
      currentPathVariables: i,
      hash: a,
      pathVariables: o,
      preserveQueryParams: c,
      siteCanonicalURL: l,
      localeId: s,
    }),
    p = n !== void 0 && n === d,
    m = vr(M.history.state) ? M.history.state : void 0,
    h = p ? m?.queryParamBackAnchorSearch : void 0;
  try {
    return await br(
      { routeId: e, hash: a, pathVariables: o, localeId: s, queryParamBackAnchorSearch: h },
      f,
      u
    );
  } catch {}
}
function vr(e) {
  return B(e) && R(e.routeId);
}
function yr(e, t, n = !1) {
  (performance.mark(`framer-history-replace`),
    t && mr(t, M.location.href),
    (n ? M.history.__proto__.replaceState : M.history.replaceState).call(M.history, e, ``, t));
}
async function br(e, t, n = !1) {
  if ((performance.mark(`framer-history-push`), mr(t, M.location.href), !n)) {
    M.history.pushState(e, ``, t);
    return;
  }
  let r = !1,
    i;
  (vv &&
    ((i = () => {
      if (((r = !0), yv)) return;
      let e = `Popstate called after intercept(). Please report this to the Framer team.`;
      (console.error(e), yn(`published_site_load_recoverable_error`, { message: e }));
    }),
    M.addEventListener(`popstate`, i, { once: !0 })),
    yv && vv
      ? M.history.__proto__.pushState.call(M.history, e, ``, t)
      : M.history.pushState(e, ``, t),
    vv &&
      queueMicrotask(() => {
        r || ((vv = !1), M.removeEventListener(`popstate`, i));
      }));
}
function xr({ disabled: e, routeId: t, initialPathVariables: n, initialLocaleId: r }) {
  f(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let i = B(M.history.state) ? M.history.state : {},
      a = M.location.hash ? M.location.hash.slice(1) : void 0;
    yr({ ...i, routeId: t, hash: a, pathVariables: n, localeId: r }, void 0, !0);
  }, []);
}
function Sr(e, t) {
  let n = pr(),
    r = gr(`framer-route-change`),
    i = l(void 0),
    a = s(
      async ({ state: a }) => {
        if (
          (M.navigation?.transition && M.navigation?.transition?.navigationType !== `traverse`) ||
          !B(a)
        )
          return;
        let { routeId: o, hash: s, pathVariables: c, localeId: l } = a;
        if (!R(o)) return;
        let u = r({ popstate: !0 }),
          d = qt();
        u.promise.finally(d);
        let f = await n(e.current, o, () => {
            t(
              o,
              R(l) ? l : void 0,
              R(s) ? s : void 0,
              M.location.pathname + M.location.search + M.location.hash,
              B(c) ? c : void 0,
              !0,
              u,
              !1
            );
          }),
          p = M.navigation?.transition;
        (await (f?.updateCallbackDone ?? Promise.resolve())
          .then(i.current?.resolve)
          .catch(i.current?.reject),
          await u.promise);
        try {
          await p?.finished;
        } catch (e) {
          console.warn(`Popstate transition failed`, e);
        }
        (_v(), mr(M.location.href));
      },
      [e, r, t, n]
    ),
    o = s((e) => {
      e.navigationType !== `traverse` ||
        !e.canIntercept ||
        e.intercept({
          async handler() {
            (await new Promise((e, t) => {
              i.current = { resolve: e, reject: t };
            }),
              (i.current = void 0));
          },
          scroll: `after-transition`,
        });
    }, []);
  c(
    () => (
      M.addEventListener(`popstate`, a),
      bv && M.navigation.addEventListener(`navigate`, o),
      () => {
        (M.removeEventListener(`popstate`, a),
          bv && M.navigation.removeEventListener(`navigate`, o));
      }
    ),
    [a, o]
  );
}
function Cr(e, t, n) {
  let r = Kt(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(av, (e, t) => i[t] ?? e);
}
function wr(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: c,
    onlyHash: l = !1,
    siteCanonicalURL: u,
    localeId: d,
  }
) {
  let f = Cr(i, e, o);
  if (l) return f ?? ``;
  let p = t ?? `/`;
  (n && d && (p = n[d] ?? p), r && (p = p.replace(av, (e, t) => String(r[t] || e))));
  let m = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
  a && (m = m.replace(av, (e, t) => String(a[t] || e)));
  let h = !!(p === m && f),
    g = !h && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && p !== m;
  if (s)
    if (iv.has(p) && M !== void 0) {
      let e = Xn(u);
      m = Vn(M.location.pathname, e + m);
    } else m = Vn(p, m);
  let _ = h || g;
  return ((c || _) && (m = Kn(m, _)), f && (m = `${m}#${f}`), m);
}
async function Tr(e, t, n) {
  if (!e.path || !t) return !1;
  let r = `${n.slug ? `/${n.slug}` : ``}${Gn(e.path, t)}`;
  return (await fetch(r, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((M.location.href = M.location.origin + r), !0)
    : !1;
}
function Er() {
  let e = An();
  return s((t) => Dr({ ...t, collectionUtils: e }), [e]);
}
async function Dr(e) {
  let t = await Yn(e);
  if (t) {
    try {
      localStorage.preferredLocale = e.nextLocale.code;
    } catch {}
    try {
      if (!R(t.path)) throw Error(`Expected result.path to be a string`);
      if (t.isMissingInLocale && (await Tr(e.route, t.pathVariables, e.nextLocale))) return;
    } catch {}
    return t;
  }
}
function Or() {
  let e = l(Promise.resolve()),
    t = l(),
    n = s((n) => {
      if (n.navigationType === `traverse` || !n.canIntercept) return;
      let r = t.current;
      (r?.signal.addEventListener(`abort`, () => {
        r.abort(`user aborted`);
      }),
        n.intercept({ handler: () => e.current }));
    }, []);
  return s(
    (r, i, a) => {
      if (!bv) {
        i();
        return;
      }
      ((e.current = r),
        (t.current = a),
        M.navigation.addEventListener(`navigate`, n),
        i(!0),
        r.finally(() => {
          M.navigation.removeEventListener(`navigate`, n);
        }));
    },
    [n]
  );
}
function kr(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`; ) t++;
  for (; n > t && e[n - 1] === `-`; ) n--;
  return e.slice(t, n);
}
function Ar(e) {
  return kr(e.trim().toLowerCase().replace(xv, `-`));
}
function jr({ children: e, value: t }) {
  return _(Cv.Provider, { value: t, children: e });
}
function Mr() {
  return t(Cv);
}
function Nr(e, t) {
  let n = i(() => ({ inputs: t, result: e() }))[0],
    r = l(!0),
    a = l(n),
    o =
      r.current || (t && a.current.inputs && Lt(t, a.current.inputs, !1))
        ? a.current
        : { inputs: t, result: e() };
  return (
    c(() => {
      ((r.current = !1), (a.current = o));
    }, [o]),
    o.result
  );
}
function Pr(e, t) {
  return Nr(() => e, t);
}
function Fr() {
  return j.useContext(Ev);
}
function Ir() {
  return Fr().activeLocale?.code ?? `en-US`;
}
function Lr() {
  return j.useContext(Dv);
}
function Rr() {
  return M.location.search;
}
function zr() {
  return ``;
}
function Br(e) {
  return (
    Ov.add(e),
    M.addEventListener(`popstate`, e),
    () => {
      (Ov.delete(e), M.removeEventListener(`popstate`, e));
    }
  );
}
function Vr() {
  for (let e of Ov) e();
}
function Hr({ children: e }) {
  let t = Mr() === `preview`,
    [n, a] = i(``),
    o = r(g(Br, Rr, zr));
  Bt();
  let c = t ? n : o,
    l = s(
      async (e) => {
        if (t) {
          k(() => {
            a((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        await In({ continueAfter: `paint` });
        let n = M.history.state,
          r = new URL(M.location.href),
          i = e(r.searchParams).toString();
        r.search = i;
        let o = n?.queryParamBackAnchorSearch,
          s = M.location.search.slice(1),
          c = o === void 0 && i !== s,
          l = o !== void 0 && i === o,
          u = { ...n, queryParamBackAnchorSearch: l ? void 0 : (o ?? (c ? s : void 0)) },
          d = r.toString();
        (c || l ? await br(u, d) : yr(u, d), Vr());
      },
      [t]
    ),
    u = Nr(() => ({ urlSearchParams: new URLSearchParams(c), replaceSearchParams: l }), [c, l]);
  return _(kv.Provider, { value: u, children: e });
}
function Ur({ parameterName: e }) {
  let n = l(e),
    { urlSearchParams: r, replaceSearchParams: i } = t(kv);
  return [
    C(() => r.getAll(n.current), [r]),
    s(
      async (e) => {
        ut(e) &&
          (await i((t) => {
            let r = n.current,
              i = new URLSearchParams(),
              a = !1;
            for (let [n, o] of t.entries()) {
              if (n !== r) {
                i.append(n, o);
                continue;
              }
              if (!a) {
                a = !0;
                for (let t of e) R(t) && i.append(r, t);
              }
            }
            if (!a) for (let t of e) R(t) && i.append(r, t);
            return i;
          }));
      },
      [i]
    ),
  ];
}
function Wr({ initialValue: e, parameterName: t, optional: n }) {
  let r = l(n ? void 0 : R(e) ? e : ``),
    [i, a] = Ur({ parameterName: t });
  return [
    C(() => (i.length === 0 ? r.current : (i[0] ?? ``)), [i]),
    s(
      async (e) => {
        if (e === r.current) return a(f_);
        if (R(e)) return a([e]);
      },
      [a]
    ),
  ];
}
function Gr() {
  let e = new Event(`change`, { bubbles: !0 });
  return ((e[Av] = 1), e);
}
function Kr() {
  let e = new MouseEvent(`click`, { bubbles: !0 });
  return ((e[Av] = 1), e);
}
function qr(e) {
  return e instanceof HTMLInputElement && (e.type === `checkbox` || e.type === `radio`)
    ? `checked`
    : `value`;
}
function Jr(e) {
  return Av in e && e[Av] === 1;
}
function Yr(e) {
  return jv in e.nativeEvent && e.nativeEvent[jv] === 1;
}
function Xr(e) {
  let t = l(!1),
    n = l(null),
    r = g(n_, i_, Mv);
  return (
    c(() => {
      if (!r) return;
      let i = n.current;
      if (t.current || !i) return;
      t.current = !0;
      let a = qr(i),
        o = i[a];
      if (o === e) return;
      if (i.type === `radio` && o === !0) {
        ((i.checked = !1), i.dispatchEvent(Kr()));
        return;
      }
      if (a === `checked`) {
        let e = Kr();
        ((e[jv] = 1), i.dispatchEvent(e), i.dispatchEvent(Kr()));
        return;
      }
      if (i.nodeName === `SELECT`) {
        i.dispatchEvent(Gr());
        return;
      }
      let s = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(i), a)?.set;
      if (!s) return;
      s.call(i, ``);
      let c = Gr();
      ((c[jv] = 1),
        i.dispatchEvent(c),
        queueMicrotask(() => {
          (s.call(i, o), i.dispatchEvent(Gr()));
        }));
    }, [r]),
    n
  );
}
function Zr() {
  if (!Nv) return;
  ((Fv = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  Nv.forEach((n) => t.addEventListener(n, Pv, e));
}
function Qr() {
  return (
    c(() => {
      if (!Fv || !Nv) return;
      let e = { capture: !0 },
        t = document.body;
      (Nv.forEach((n) => t.removeEventListener(n, Pv, e)),
        (Nv = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function $r(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function ei(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function ti() {
  ((ty = new ey()), ty.render.markStart());
}
function ni() {
  (n(() => {
    ty?.useInsertionEffects.markRouterStart();
  }, []),
    f(() => {
      ty?.useLayoutEffects.markRouterStart();
    }, []),
    c(() => {
      ty?.useEffects.markRouterStart();
    }, []));
}
function ri() {
  (n(() => {
    (ty?.render.markEnd(), ty?.useInsertionEffects.markStart());
  }, []),
    f(() => {
      if ((ty?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        ny = !0;
        return;
      }
      Le.read(() => {
        (ty?.browserRendering.requestAnimationFrame.markStart(),
          ty?.unattributedHydrationOverhead.measure());
      });
    }, []),
    c(() => {
      (ty?.useEffects.markStart(),
        ty?.browserRendering.hasStarted ||
          (ty?.mutationEffects.measure(), ty?.useEffects.markAreSynchronous()));
    }, []));
}
function ii() {
  (n(() => {
    ty?.useInsertionEffects.markEnd();
  }, []),
    f(() => {
      (ty?.useLayoutEffects.markEnd(),
        !(ny || document.visibilityState !== `visible`) &&
          Le.read(() => {
            (ty?.browserRendering.requestAnimationFrame.markEnd(),
              In().then(() => {
                ty?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    c(() => {
      ty?.useEffects.markEnd();
    }, []));
}
function ai() {
  return (ri(), null);
}
function oi() {
  return (ii(), null);
}
function si(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return j.isValidElement(e) ? j.cloneElement(e, n) : _(e, { ...n });
}
function ci() {
  return oy;
}
function li(e) {
  if (sy?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      V(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: fi(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          V(t, `localizedPath must be defined`);
          let i = fi(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    for (let e in ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e), n)) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    sy = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: sy.pathRoutes,
    paths: sy.paths,
    pathRoutesLocalized: sy.pathRoutesLocalized,
    pathsLocalized: sy.pathsLocalized,
  };
}
function ui(e, t, n = !0, r = ci()) {
  return di(e, t, r, n);
}
function di(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = li(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = pi(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = pi(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = pi(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = pi(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function fi(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function pi(e, t) {
  let n = [],
    r = mi(t).replace(av, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
      continue;
    }
    if (r === void 0) throw Error(`Path variable values cannot be undefined`);
    o[t] = r;
  }
  return { isMatch: !0, pathVariables: o };
}
function mi(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function hi() {
  if (`PerformanceServerTiming` in M) {
    let e = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
    if (!e || e.length === 0) return new URLSearchParams();
    let t = e.find((e) => e.name === `abtests`);
    return t ? new URLSearchParams(t.description) : new URLSearchParams();
  }
  return new URLSearchParams();
}
function gi(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n;
  if (!e[i]) return;
  let { abTestingParentId: a, ...o } = r,
    s = e[i].elements || r.elements ? { ...e[i].elements, ...r.elements } : void 0;
  e[i] = { ...o, elements: s, abTestingVariantId: n, abTestId: t };
}
function _i(e, t) {
  for (let [n, r] of t) gi(e, n, r);
}
function vi(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function yi(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    { abTestingParentId: r, ...i } = e[t],
    a = e[n]?.elements || i.elements ? { ...e[n]?.elements, ...i.elements } : void 0;
  e[n] = { ...i, elements: a, abTestingVariantId: t };
}
function bi(e, t) {
  if (M === void 0) return t;
  let n = t;
  if (t) {
    yi(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (_i(e, hi()), vi(e), n);
}
function xi(e) {
  (c(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    n(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function Si(e, ...t) {
  cy.has(e) || (cy.add(e), console.warn(e, ...t));
}
function Ci(e, t, n) {
  Si(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function wi(e) {
  return (
    typeof e == `object` &&
    !!e &&
    dy in e &&
    e[dy] instanceof Function &&
    fy in e &&
    e[fy] instanceof Function
  );
}
function Ti(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = uy(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function Ei(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Di(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Oi(e) {
  return Math.round(e * 2) / 2;
}
function ki(e, t) {
  return { x: e, y: t };
}
function Ai(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0)
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  return u;
}
function ji(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Mi(e) {
  let t = Ni(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function Ni(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function Pi(e, t, n) {
  return (
    (hy.rgb_r = e / 255),
    (hy.rgb_g = t / 255),
    (hy.rgb_b = n / 255),
    hy.rgbToHsluv(),
    { h: hy.hsluv_h, s: hy.hsluv_s, l: hy.hsluv_l }
  );
}
function Fi(e, t, n, r = 1) {
  return (
    (hy.hsluv_h = e),
    (hy.hsluv_s = t),
    (hy.hsluv_l = n),
    hy.hsluvToRgb(),
    { r: hy.rgb_r * 255, g: hy.rgb_g * 255, b: hy.rgb_b * 255, a: r }
  );
}
function Ii(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function Li(e, t, n) {
  return {
    r: ji(e) ? Wi(e, 255) * 255 : 0,
    g: ji(t) ? Wi(t, 255) * 255 : 0,
    b: ji(n) ? Wi(n, 255) * 255 : 0,
  };
}
function Ri(e, t, n, r) {
  let i = [
    qi(Math.round(e).toString(16)),
    qi(Math.round(t).toString(16)),
    qi(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function zi(e, t, n) {
  let r,
    i,
    a = Wi(e, 255),
    o = Wi(t, 255),
    s = Wi(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function Bi(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function Vi(e, t, n) {
  let r, i, a;
  if (((e = Wi(e, 360)), (t = Wi(t * 100, 100)), (n = Wi(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = Bi(s, o, e + 1 / 3)), (i = Bi(s, o, e)), (a = Bi(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function Hi(e, t, n) {
  ((e = Wi(e, 255)), (t = Wi(t, 255)), (n = Wi(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function Ui(e, t, n) {
  ((e = Wi(e, 360) * 6), (t = Wi(t * 100, 100)), (n = Wi(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function Wi(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    Gi(e) && (e = `100%`);
    let t = Ki(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function Gi(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function Ki(e) {
  return typeof e == `string` && e.includes(`%`);
}
function qi(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function Ji(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = my[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = gy.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = gy.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = gy.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: Mi(r[2] ?? ``), l: Mi(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = gy.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: Mi(r[2] ?? ``),
              l: Mi(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = gy.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: Mi(r[2] ?? ``), v: Mi(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = gy.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: Mi(r[2] ?? ``),
                  v: Mi(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = gy.hex8.exec(t))
                ? {
                    r: Yi(r[1] ?? ``),
                    g: Yi(r[2] ?? ``),
                    b: Yi(r[3] ?? ``),
                    a: Xi(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = gy.hex6.exec(t))
                  ? {
                      r: Yi(r[1] ?? ``),
                      g: Yi(r[2] ?? ``),
                      b: Yi(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = gy.hex4.exec(t))
                    ? {
                        r: Yi(`${r[1]}${r[1]}`),
                        g: Yi(`${r[2]}${r[2]}`),
                        b: Yi(`${r[3]}${r[3]}`),
                        a: Xi(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = gy.hex3.exec(t))
                      ? {
                          r: Yi(`${r[1]}${r[1]}`),
                          g: Yi(`${r[2]}${r[2]}`),
                          b: Yi(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function Yi(e) {
  return parseInt(e, 16);
}
function Xi(e) {
  return Yi(e) / 255;
}
function Zi(e) {
  let t = _y.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function Qi(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function $i({ r: e, g: t, b: n, a: r }) {
  return { r: Qi(e), g: Qi(t), b: Qi(n), a: r };
}
function ea(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function ta({ r: e, g: t, b: n, a: r }) {
  return { r: ea(e), g: ea(t), b: ea(n), a: r };
}
function na({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function ra(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function ia({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = ra(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function aa(e) {
  return xy(by(e));
}
function oa(e) {
  return yy(vy(e));
}
function sa(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = ua({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = ca(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? ua(e)
              : da(e)),
    i
  );
}
function ca(e) {
  let t = Ji(e);
  if (t) return t.format === `hsl` ? da(t) : t.format === `hsv` ? la(t) : ua(t);
}
function la(e) {
  let t = Ui(e.h, e.s, e.v);
  return { ...zi(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : fa(e.a) };
}
function ua(e) {
  let t = Li(e.r, e.g, e.b);
  return { ...zi(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : fa(e.a) };
}
function da(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = ji(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = ji(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = Ni(e.s)),
    (r = ji(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = Ni(e.l)),
    (i = Vi(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function fa(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function pa() {
  return K.location.origin === `https://screenshot.framer.invalid`;
}
function ma() {
  Fy || ((Fy = !0), Me(zy));
}
function ha(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
function ga(e, t) {
  return `${Iy}${e}%${Ly}${t.join(Ly)}`;
}
function _a({ children: e }) {
  if (t(By).top) return _(O, { children: e });
  let n = l({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = l({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    i = l(new Set()).current,
    a = l({
      getLayoutId: s(({ id: e, name: t, duplicatedFrom: a }) => {
        if (!e) return null;
        let o = t ? `byName` : `byId`,
          s = n.current[o][e];
        if (s) return s;
        let c = t || e;
        if (!a && !i.has(c) && (!n.current.byLayoutId[c] || n.current.byLayoutId[c] === c))
          return (
            n.current.count[o][c] === void 0 &&
              ((n.current.count[o][c] = 0), (n.current.byLayoutId[c] = c), (r.current[o][e] = c)),
            i.add(c),
            c
          );
        let l;
        if (a?.length)
          for (let s = a.length - 1; s >= 0; s--) {
            let c = a[s];
            V(!!c, `duplicatedId must be defined`);
            let u = n.current[o][c],
              d = n.current.byLastId[c];
            if (d && !l) {
              let e = n.current.byLayoutId[d],
                r = !e || e === t;
              d && !i.has(d) && (!t || r) && (l = [d, c]);
            }
            let f = u ? n.current.byLayoutId[u] : void 0,
              p = !f || f === t;
            if (u && !i.has(u) && (!t || p))
              return ((r.current[o][e] = u), (r.current.byLastId[c] = u), i.add(u), u);
          }
        let u = n.current.byLastId[e];
        if (u && !i.has(u)) return (i.add(u), (r.current.byId[e] = u), u);
        if (l) {
          let [t, n] = l;
          return ((r.current[o][e] = t), (r.current.byLastId[n] = t), i.add(t), t);
        }
        let d = n.current.byPossibleId[e];
        if (d && !i.has(d)) return (i.add(d), (r.current.byId[e] = d), d);
        let f = a?.[0],
          p = t || f || e,
          { layoutId: m, value: h } = va(p, (n.current.count[o][p] ?? -1) + 1, i);
        if (((n.current.count[o][p] = h), (r.current[o][e] = m), a?.length && !t)) {
          let e = a[a.length - 1];
          if ((e && (r.current.byLastId[e] = m), a.length > 1))
            for (let e = 0; e < a.length - 1; e++) {
              let t = a[e];
              t !== void 0 && (r.current.byPossibleId[t] || (r.current.byPossibleId[t] = m));
            }
        }
        return ((r.current.byLayoutId[m] = c), i.add(m), m);
      }, []),
      persistLayoutIdCache: s(() => {
        ((n.current = {
          byId: { ...n.current.byId, ...r.current.byId },
          byLastId: { ...n.current.byLastId, ...r.current.byLastId },
          byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
          byName: { ...n.current.byName, ...r.current.byName },
          byLastName: { ...n.current.byLastName, ...r.current.byLastName },
          byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
          count: { ...n.current.count, byName: {} },
        }),
          (r.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
          }),
          i.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return _(By.Provider, { value: a, children: e });
}
function va(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function ya({ enabled: e = !0, ...n }) {
  let r = t(By),
    i = C(() => ({ ...r, enabled: e }), [e]);
  return _(By.Provider, { ...n, value: i });
}
function ba(e) {
  let t = l(null);
  return (t.current === null && (t.current = e()), t.current);
}
function xa(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Sa(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return T(`div`, {
    style: Hy,
    children: [
      _(`div`, { className: `text`, style: Wy, children: r }),
      i && _(`div`, { className: `text`, style: Gy, children: i }),
    ],
  });
}
function Sa(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function U(e) {
  return Number.isFinite(e);
}
function Ca(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function wa(e) {
  return typeof e != `string` && typeof e != `number`;
}
function Ta(e) {
  return e != null && typeof e != `boolean` && !Ca(e);
}
function Ea(e) {
  return e * (Math.PI / 180);
}
function Da(e) {
  return ft(e) ? !1 : e === 2 || e === 5;
}
function Oa(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function ka(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return Aa(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function Aa(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      H(e, `unknown constraint key`);
  }
}
function ja(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(ka(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(ka(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function Ma(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(ka(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(ka(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function Na(e, t, n, r, i) {
  let a = Ma(U(e) ? e : Xy, n, r, i),
    o = ja(U(t) ? t : Zy, n, r, i);
  return (
    U(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (U(n.left) && U(n.right)
        ? (o = a / n.aspectRatio)
        : (U(n.top) && U(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function Pa(e, t) {
  return !U(e) || !U(t) ? null : e + t;
}
function Fa(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function Ia(e) {
  return !e._constraints || Fa(e) ? !1 : e._constraints.enabled;
}
function La(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    U(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    U(n) && U(r) ? { width: n, height: r } : null
  );
}
function Ra(e) {
  let t = La(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return U(n) && U(r) ? { x: n, y: r, ...t } : null;
}
function za(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Ia(e) || r) return Ra(e);
  let i = Ba(e),
    a = Va(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return Yy.toRect(i, o, null, n, null);
}
function Ba(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = Jy.quickfix({
      left: U(t),
      right: U(n),
      top: U(r),
      bottom: U(i),
      widthType: Oa(c),
      heightType: Oa(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function Va(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Ha() {
  return j.useContext(Qy).parentSize;
}
function Ua(e) {
  return typeof e == `object`;
}
function Wa(e) {
  return Ua(e) ? e.width : e;
}
function Ga(e) {
  return Ua(e) ? e.height : e;
}
function Ka(e, t) {
  return _($y, { parentSize: t, children: e });
}
function qa(e) {
  return za(e, Ha(), !0);
}
function Ja({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function Ya() {
  return d === void 0 ? void 0 : d;
}
function Xa() {
  let e = Ya();
  return e ? tb.test(e.platform) : !1;
}
function Za() {
  let e = Ya();
  return e
    ? nb.test(e.platform)
      ? !0
      : rb.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function Qa() {
  return Xa() || Za();
}
function $a() {
  let e = Ya();
  return e ? ib.test(e.userAgent) : !1;
}
function eo() {
  let e = Ya();
  return e ? ab.test(e.userAgent) && ob.test(e.vendor) && !$a() : !1;
}
function to() {
  let e = Ya();
  return e ? sb.test(e.userAgent) && cb.test(e.vendor) : !1;
}
function no() {
  let e = Ya();
  return e ? lb.test(e.userAgent) : !1;
}
function ro() {
  return typeof document == `object`;
}
function io() {
  let e = Ya();
  return e ? ub.test(e.userAgent) : !1;
}
function ao() {
  return !1;
}
function oo() {
  let e = Ya();
  return e && db.test(e.userAgent) ? `tablet` : e && fb.test(e.userAgent) ? `phone` : `desktop`;
}
function so() {
  return oo() === `desktop`;
}
function co(e) {
  return Qa() ? e.metaKey : e.ctrlKey;
}
function lo(e, t, n = mb) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!hb) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) hb = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = hb;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function uo() {
  return pa() ? J.preview : J.current();
}
function fo() {
  if (Sb !== void 0) return Sb;
  let e = document.createElement(`div`);
  (Object.assign(e.style, {
    position: `absolute`,
    display: `flex`,
    flexDirection: `column`,
    rowGap: `1px`,
  }),
    e.appendChild(document.createElement(`div`)),
    e.appendChild(document.createElement(`div`)),
    document.body.appendChild(e));
  let t = e.scrollHeight === 1;
  return (e.parentNode && e.parentNode.removeChild(e), (Sb = t), t);
}
function po() {
  wb || ((wb = !0), !fo() && document.body.classList.add(Cb));
}
function mo(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? Z.variable(e) : e === `` ? `""` : e;
}
function ho(e) {
  return e !== Fb && e !== Ib;
}
function go(e) {
  for (let t in e) if (ho(t) && e?.[t] === !0) return !0;
  return !1;
}
function _o(e, t, n, r, i) {
  let a = j.useRef(null),
    o = j.useCallback(
      (e) => {
        t &&
          a.current !== !1 &&
          ((a.current = !1),
          e.currentTarget.setCustomValidity(` `),
          e.currentTarget.reportValidity(),
          t(e));
      },
      [t]
    ),
    s = j.useCallback(
      (r) => {
        if ((n?.(r), !t && !e)) return;
        let i = r.target.validity;
        a.current === !1 &&
          !go(i) &&
          (r.currentTarget.setCustomValidity(``),
          r.target.reportValidity(),
          (a.current = !0),
          e?.());
      },
      [t, e, n]
    ),
    c = j.useCallback(
      (e) => {
        if (!t) {
          r?.(e);
          return;
        }
        if (a.current === !1) return;
        let n = e.currentTarget.validity;
        if (go(n)) {
          o(e);
          return;
        }
        r?.(e);
      },
      [o, r, t]
    );
  return j.useMemo(() => ({ onInvalid: o, onChange: s, onBlur: c, onFocus: i }), [o, s, c, i]);
}
function vo(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return yo(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return bo(r);
    case `lower-roman`:
    case `upper-roman`:
      return So(r);
    default:
      return yo(r);
  }
}
function yo(e) {
  return String(e).length;
}
function bo(e) {
  let t = 1;
  for (; xo(t) < e; ) t++;
  return t;
}
function xo(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function So(e) {
  let t = 0;
  for (let n of Wb) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function Co(e, t) {
  return Z.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function wo(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function To() {
  return J.current() === J.preview ? Lx : Ix;
}
function Eo(e) {
  return yb(e, To, `framer-lib-combinedCSSRules`);
}
function Do(e) {
  return B(e) || ct(e);
}
function Oo(e) {
  return !!e && Rx in e && e[Rx] === !0;
}
function ko(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
        return R(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return lt(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return ft(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return ut(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return ut(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = B(e.defaultValue) ? e.defaultValue : {};
        return (B(e.controls) && Ao(t, e.controls), t);
      }
      case `array`:
        return ut(e.defaultValue) ? e.defaultValue : void 0;
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function Ao(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!ft(i) || Oo(r)) continue;
    let a = ko(r);
    ft(a) || (e[n] = a);
  }
}
function jo(e) {
  if (B(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function Mo(e, t) {
  Do(e) && Ao(jo(e), t);
}
function No(e, t) {
  (Object.assign(e, { propertyControls: t }), Mo(e, t));
}
function Po(e) {
  return e.propertyControls;
}
function Fo() {
  let e = J.current();
  return e === J.canvas || e === J.export;
}
function Io() {
  let [e] = i(() => Fo());
  return e;
}
function Lo(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function Ro(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of Yx) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function zo(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function Bo(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < Xx) continue;
    let n = zo(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${zo(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function Vo(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of Jx) {
    let n = zo(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function Ho(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = Vo(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: Bo(n, t, Ro(t.pixelWidth, t.pixelHeight)) };
}
function Uo() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: yt(Kx.imagePlaceholderSvg),
  };
}
function Wo(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function Go(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function Ko(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...qx,
    objectPosition: Go(e.positionX, e.positionY),
    objectFit: Wo(e.fit),
  };
}
function qo(e) {
  let t = j.useRef(e ? `auto` : `async`),
    n = s((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = s(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    i = s(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function Jo({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = Kx.useImageSource(e, t, n),
    s = Ko(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = qo(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : Ho(e.nodeFixedSize, e, o);
  return _(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function Yo({ image: e, containerSize: t, nodeId: n }) {
  let r = j.useRef(null),
    i = Kx.useImageElement(e, t, n),
    a = Ko(e);
  return (
    j.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    _(`div`, { ref: r, style: { display: `contents`, ...qx } })
  );
}
function Xo({ nodeId: e, image: t, containerSize: n }) {
  let r = j.useRef(null),
    i = Kx.useImageSource(t, n, e);
  return (
    j.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = Ko(t);
      Kx.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    _(`div`, { ref: r, style: { display: `contents`, ...qx } })
  );
}
function Zo({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (R(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = z(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = Oi(e * (t.pixelWidth / 2)),
        s = Kx.useImageSource(t, n);
      ((r = {
        ...Zx,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: Go(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        J.current() === J.canvas
          ? Kx.canRenderOptimizedCanvasImage(Kx.useImageSource(t))
            ? _(Xo, { image: t, ...n })
            : _(Yo, { image: t, ...n })
          : _(Jo, { image: t, avoidAsyncDecoding: J.current() === J.export, ...n });
  let o = a ? Zx : (r ?? { ...Zx, ...Uo() });
  return i
    ? _(P.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : _(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function Qo(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  if (
    (typeof r == `number`
      ? (o = s = c = l = r)
      : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    !(o === 0 && s === 0 && c === 0 && l === 0))
  ) {
    if (n && o === s && o === c && o === l) {
      t.border = `${o}px ${i} ${a}`;
      return;
    }
    ((t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${o}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${c}px`),
      (t.borderRightWidth = `${l}px`));
  }
}
function $o(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...qx,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), _(P.div, { style: n }))
    : (Qo(e, n, !1), _(P.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function es(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function ts(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !$x.isImageObject(t)) return;
  let r = null;
  if (((r = R(n) ? { alt: ``, src: n } : uy.get(t, null)), $x.isImageObject(r))) return es(r, e);
}
function ns(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function rs(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? P[e] : P.div;
}
function is(e, t) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` ? !0 : void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` ? !0 : void 0));
}
function as(e) {
  let t = {};
  return (!e || !eS || J.current() !== J.canvas || is(t, e), t);
}
function os(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function ss(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = j.Children.map(t, (e) =>
        j.isValidElement(e) ? j.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function cs(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function ls(e, { specificLayoutId: n, postfix: r } = {}) {
  let { name: i, layoutIdKey: a, duplicatedFrom: o, __fromCodeComponentNode: s = !1, drag: c } = e,
    { getLayoutId: l, enabled: u } = t(By);
  return C(() => {
    if (!u) return e.layoutId;
    let t = n || e.layoutId;
    if (!t && (c || !a || s)) return;
    let d = t || l({ id: a, name: i, duplicatedFrom: o });
    if (d) return r ? `${d}-${r}` : d;
  }, [u]);
}
function us() {
  let [e, t] = j.useState(0);
  return j.useCallback(() => t((e) => e + 1), []);
}
function ds(e) {
  let t = us();
  c(() => {
    let n = e?.current;
    if (n)
      return (
        iS?.observeElementWithCallback(e.current, t),
        () => {
          iS?.unobserve(n);
        }
      );
  }, [e, t]);
}
function fs(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(aS)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(ps)
    .map(ms);
}
function ps(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function ms(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(ps);
  return t ? ms(t) : e;
}
function hs(e, n, r = () => [], i = {}) {
  let { id: a, visible: o, _needsMeasure: s } = e,
    { skipHook: c = !1 } = i,
    l = t(nS),
    u = J.current() === J.canvas;
  tS(() => {
    !u ||
      l ||
      c ||
      (n.current && a && o && s && Kx.queueMeasureRequest(os(a), n.current, r(n.current)));
  });
}
function gs(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && Kx.queueMeasureRequest(os(t.id), t, fs(t));
}
function _s(e) {
  e.willChange = `transform`;
  let t = J.current() === J.canvas;
  cS && t && (e.translateZ = oS);
}
function vs(e) {
  ((e.willChange = `transform`), ys(e, !0));
}
function ys(e, t) {
  let n = J.current() === J.canvas;
  if (!cS || !n) return;
  let r = (R(e.transform) && e.transform) || ``;
  t ? r.includes(sS) || (e.transform = r + sS) : (e.transform = r.replace(sS, ``));
}
function bs(e, t, n, r = !0) {
  if (!e) return;
  let i = zx(e.style),
    a = n || i[t],
    o = () => {
      xs(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function xs(e) {
  return R(e) || z(e) || pt(e);
}
function Ss(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function Cs(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  Ss(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function ws(e, t) {
  let n = [e, t];
  return fS.test(e) ? e : Cs(1e3, pS, n, () => dS.multiplyAlpha(e, t));
}
function Ts(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: ws(e.value, t) }))
  );
}
function Es(e, t) {
  let n = 0;
  return (
    Ts(e, t).forEach((e) => {
      n ^= uS(e.value) ^ e.position;
    }),
    n
  );
}
function Ds(e) {
  return e && mS.every((t) => t in e);
}
function Os(e) {
  return e && hS.every((t) => t in e);
}
function ks({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || wy(t)
      ? (n.backgroundColor = t)
      : q.isColorObject(e) && (n.backgroundColor = e.initialValue || q.toRgbString(e))
    : e &&
      ((e = uy.get(e, null)),
      typeof e == `string` || wy(e)
        ? (n.background = e)
        : _S.isLinearGradient(e)
          ? (n.background = _S.toCSS(e))
          : yS.isRadialGradient(e)
            ? (n.background = yS.toCSS(e))
            : q.isColorObject(e) && (n.backgroundColor = e.initialValue || q.toRgbString(e)));
}
function W(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function As(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function js(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function Ms(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    at(n)
      ? (t.cornerShape = ge(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    W(e, `size`, t),
    W(e, `width`, t),
    W(e, `height`, t),
    W(e, `minWidth`, t),
    W(e, `minHeight`, t),
    W(e, `top`, t),
    W(e, `right`, t),
    W(e, `bottom`, t),
    W(e, `left`, t),
    W(e, `position`, t),
    W(e, `overflow`, t),
    W(e, `opacity`, t),
    (!e._border || !e._border.borderWidth) && W(e, `border`, t),
    W(e, `borderRadius`, t),
    W(e, `radius`, t, `borderRadius`),
    W(e, `color`, t),
    W(e, `shadow`, t, `boxShadow`),
    W(e, `x`, t),
    W(e, `y`, t),
    W(e, `z`, t),
    W(e, `rotate`, t),
    W(e, `rotateX`, t),
    W(e, `rotateY`, t),
    W(e, `rotateZ`, t),
    W(e, `scale`, t),
    W(e, `scaleX`, t),
    W(e, `scaleY`, t),
    W(e, `skew`, t),
    W(e, `skewX`, t),
    W(e, `skewY`, t),
    W(e, `originX`, t),
    W(e, `originY`, t),
    W(e, `originZ`, t),
    ks(e, t),
    t
  );
}
function Ns(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof zx(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function Ps(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (xS.has(t)) return `pointer`;
}
function Fs(e) {
  return Is(e) ? !0 : e.style ? !!Is(e.style) : !1;
}
function Is(e) {
  return SS in e && (e[SS] === `scroll` || e[SS] === `auto`);
}
function Ls(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = He(e.minWidth),
    h = He(e.minHeight),
    g = He(e.maxWidth),
    _ = He(e.maxHeight);
  return {
    top: He(n),
    left: He(t),
    bottom: He(r),
    right: He(i),
    width: He(a),
    height: He(o),
    size: He(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function Rs(e) {
  let n = t(nS),
    { style: r, _initialStyle: i, __fromCanvasComponent: a, size: o } = e,
    s = Ls(e),
    c = qa(s),
    l = {
      display: `block`,
      flex: r?.flex ?? `0 0 auto`,
      userSelect: J.current() === J.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let u = !Ns(e) && !e.__fromCanvasComponent && !Fs(e),
    d = e.style ? !(`pointerEvents` in e.style) : !0;
  u && d && (l.pointerEvents = `none`);
  let f = j.Children.count(e.children) > 0 &&
      j.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    p = Ms(e);
  (o === void 0 && !a && (As(p) || (l.width = CS.width), js(p) || (l.height = CS.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight));
  let m = {};
  (Ia(s) &&
    c &&
    !Ja(e) &&
    (m = { left: c.x, top: c.y, width: c.width, height: c.height, right: void 0, bottom: void 0 }),
    Object.assign(l, f, i, p, m, r),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    lS.applyWillChange(e, l, !0));
  let h = l;
  l.transform || (h = { x: 0, y: 0, ...l });
  let g = Fo();
  return (
    e.positionSticky
      ? (!g || Kx.isOnPageCanvas || n) &&
        ((h.position = `sticky`),
        (h.willChange = `transform`),
        (h.top = e.positionStickyTop),
        (h.right = e.positionStickyRight),
        (h.bottom = e.positionStickyBottom),
        (h.left = e.positionStickyLeft))
      : g &&
        (e.positionFixed
          ? (h.position = Kx.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (h.position = `absolute`)),
    `rotate` in h && h.rotate === void 0 && delete h.rotate,
    [h, c]
  );
}
function zs(e) {
  let t = {};
  for (let n in e)
    (ve(n) || Vx(n)) && !wS.has(n)
      ? (t[n] = zx(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof zx(e)[n] != `boolean` && !e.transition && (t.transition = zx(e)[n]));
  return t;
}
function Bs(e) {
  return `data-framer-name` in e;
}
function Vs(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function Hs(e) {
  return _(P.div, { layoutId: DS, style: AS, children: e.children });
}
function Us(e, t) {
  ct(e) ? e(t) : Ws(e) && (e.current = t);
}
function Ws(e) {
  return B(e) && `current` in e;
}
function Gs() {
  let e = ba(() => new Set()),
    t = ba(() => new Map());
  return ba(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      if (i !== n.current) {
        if (
          ((n.current = i),
          r && r(i),
          t.forEach((e, t) => {
            e ? e() : t(null);
          }),
          i === null)
        ) {
          (t.clear(), e.clear());
          return;
        }
        e.forEach((e) => {
          let n = e(i);
          t.set(e, n);
        });
      }
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function Ks(e) {
  let t = l(null),
    n = Gs();
  return ba(() => (Ws(e) ? n(e) : ct(e) ? n(t, e) : n(t)));
}
function qs(e, t, n) {
  let r = l(),
    i = l();
  (Nr(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function Js(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new jS({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function Ys(e, n, r) {
  let i = ba(() => `${r.rootMargin}`),
    a = t(MS),
    { enabled: o, root: s, rootMargin: c, threshold: l } = r;
  qs(
    e,
    (e) => {
      if (o && e !== null) return Js(a, i, e, s, n, c, l);
    },
    [o, n, s, c, l]
  );
}
function Xs(e, t, n) {
  let r = j.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n;
  NS(
    e,
    j.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = Qs(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
          return;
        }
        if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
          return;
        }
      },
      [a, o?.y, t]
    ),
    { threshold: PS, rootMargin: s, enabled: i ?? !0 }
  );
}
function Zs(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, K.innerHeight);
}
function Qs({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && Zs(t, e) >= r;
}
function $s() {
  return new Map();
}
function ec() {
  return ba($s);
}
function tc(e, n = []) {
  let { register: r, deregister: i } = t(zS);
  c(() => {
    if (e) return (r(e), () => i(e));
  }, [r, i, ...n]);
}
function nc(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function rc(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (U(t.originX) && (r.originX = t.originX),
      U(t.originY) && (r.originY = t.originY),
      U(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (U(n.originX) && (r.originX = n.originX),
      U(n.originY) && (r.originY = n.originY),
      U(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function ic(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function ac(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return GS.PushLeft;
    case `left`:
      return GS.PushRight;
    case `bottom`:
      return GS.PushUp;
    case `top`:
      return GS.PushDown;
  }
}
function oc(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return GS.OverlayLeft;
    case `left`:
      return GS.OverlayRight;
    case `bottom`:
      return GS.OverlayUp;
    case `top`:
      return GS.OverlayDown;
  }
}
function sc(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return GS.FlipLeft;
    case `left`:
      return GS.FlipRight;
    case `bottom`:
      return GS.FlipUp;
    case `top`:
      return GS.FlipDown;
  }
}
function cc(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return uc(e, t.transition, t.component);
    case `removeOverlay`:
      return dc(e);
    case `add`:
      return fc(e, t.key, t.transition, t.component);
    case `remove`:
      return hc(e);
    case `update`:
      return lc(e, t.key, t.component);
    case `back`:
      return pc(e);
    case `forward`:
      return mc(e);
    default:
      return;
  }
}
function lc(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function uc(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function dc(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function fc(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i && i.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? bc(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = vc(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = gc(e, t, c),
    p = yc(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function pc(e) {
  let t = { ...e.containers },
    n = hc(e);
  if (n) return ((n.containers = t), n);
}
function mc(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = fc(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function hc(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (V(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = _c(e, r, n),
    u = yc(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function gc(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function _c(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function vc(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function yc(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = xc(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function bc(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1
        ? !0
        : !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function xc(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return Sc(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return Sc(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return Sc(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return Sc(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function Sc(e, t, n) {
  let r = {},
    i = {};
  return (
    qS.forEach((e) => {
      ((r[e] = HS[e]), (i[e] = { ...n, from: HS[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${zx(HS)[a]}%` : zx(HS)[a];
        ((zx(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function Cc(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function wc({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function Tc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
      ? t.transition.animation
      : ZS;
}
function Ec({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function Dc(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function Oc(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  } else if (e < n) {
    let t = r[e + 1];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  } else {
    let t = r[e];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  }
}
function kc(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function Ac(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function jc(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let t = r[e + 1];
      if (t && t.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t && t.transition) return t.transition.enter;
    }
}
function Mc(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t && t.transition.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t && t.transition.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return ZS;
}
function Nc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function Pc(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function Fc(e) {
  return j.Children.map(e.component, (t) => {
    if (!Ta(t) || !wa(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? B(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      j.cloneElement(t, n)
    );
  });
}
function Ic(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function Lc(e) {
  let t = we(),
    n = re();
  return _(XS, { ...e, resetProjection: t, skipLayoutAnimation: n, children: e.children });
}
function Rc(e) {
  return iC in e;
}
function zc(e, t) {
  if (!Rc(e)) return;
  let n = uy.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function Bc(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function Vc(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function Hc(e, t) {
  let n = [];
  (U(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    U(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    U(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    U(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    U(e.invert) && n.push(`invert(${e.invert / 100})`),
    U(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    U(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    U(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Bc(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function Uc(e, t) {
  U(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Wc(e, t) {
  (Uc(e, t), Hc(e, t));
}
function Gc(e, t) {
  let n,
    r = (...r) => {
      (K.clearTimeout(n), (n = K.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      K.clearTimeout(n);
    }),
    r
  );
}
function Kc(...e) {
  return e.filter(Boolean).join(` `);
}
function qc(e, t) {
  let n = {},
    r = {};
  for (let i in e) {
    let a = Jc(i);
    if (a && t.has(a)) {
      n[a] = e[i];
      continue;
    }
    r[i] = e[i];
  }
  return [n, r];
}
function Jc(e) {
  if (e.startsWith(lC)) return e.substr(uC);
}
function Yc(e, t, n) {
  let r = p.map(e, (e) => (y(e) ? w(e, t) : e));
  return n ? r : _(O, { children: r });
}
function Xc(e) {
  let t = ba(() => Zc(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function Zc(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = Qc(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = Qc(t)));
    },
    r = !1;
  function i(i, a) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (r = !0),
      p.count(i) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      p.map(i, (e) => {
        if (y(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = ct(a) ? a(e.props) : a;
          return w(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let a = function (e, t) {
    return _(O, { children: i(e, t) });
  };
  return (
    (a.cloneAsArray = i),
    {
      useSetup: (e) => {
        ((r = !1), n(e, t.childRef));
      },
      cloneAsElement: a,
    }
  );
}
function Qc(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (Us(n, e), Us(t, e));
  };
}
function $c(e, t, n, r, i, a, o, s) {
  let c = j.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !j.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !rl(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = nl([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let f = nl([i, ...d], a);
  f.length && u.unshift({ variants: f });
  let p = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = _(
        fC.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = tl(e, a, r);
    (f.length
      ? (V(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = _(
          `div`,
          { className: `${pC} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : V(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      p.push(d));
  }
  return (
    V(!s || p.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? p : [...p, _(`div`, { className: mC }, `property-overrides-separator`)]
  );
}
function el(e) {
  return e.split(`-`)[2];
}
function tl(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${el(a)}`);
  }
  return r;
}
function nl(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function rl(e, t) {
  for (let n of Object.keys(t)) if (!Lt(e[n], t[n], !0)) return !0;
  return !1;
}
function il(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function al(e) {
  return j.forwardRef(({ optimized: t, ...n }, r) => {
    let i = j.useContext(dC),
      a = j.useContext(fC)?.variants,
      o = n[CC];
    o && !ro() && xC.setAll(o, a, t ? n : null, i);
    let s = TC(n);
    return _(e, { ref: r, ...n, ...s });
  });
}
function ol(e) {
  return R(e) || Array.isArray(e);
}
function sl(e) {
  return e in OC;
}
function cl(e, t) {
  let n = ba(() => ({ values: DC(t ? e : void 0) }));
  return (
    j.useEffect(() => {
      if (!t)
        for (let e of EC) {
          let t = OC[e];
          ft(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function ll(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: t,
    loopTransition: n,
    loopRepeatType: r,
    loop: a,
    loopPauseOffscreen: o,
  },
  u
) {
  let d = ue(),
    f = ba(DC),
    p = l(!1),
    m = MC(),
    h = l(null),
    g = s(async () => {
      if (!a) return;
      let e = n || void 0,
        t = p.current && r === `mirror`,
        i = t ? OC : a,
        o = t ? a : OC;
      return (
        (p.current = !p.current),
        (h.current = Promise.all(
          EC.map((t) => {
            if (!(d && t !== `opacity`))
              return (
                f[t].jump(o[t] ?? OC[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    a = i[t] ?? o[t];
                  typeof a == `number` && Fe(f[t], a, r);
                })
              );
          })
        )),
        h.current
      );
    }, [a, r, n, d]),
    [_, v] = i(!1),
    y = l(!1),
    b = s(async () => {
      !e || !y.current || (await g(), await m(t ?? 0), b());
    }, [g, m, e, t]),
    x = s(() => {
      y.current || ((y.current = !0), k(() => v(!0)), b());
    }, [b]),
    S = s((e = !0) => {
      (EC.forEach((e) => {
        f[e].stop();
      }),
        EC.forEach((e) => {
          f[e].set(OC[e]);
        }),
        (p.current = !1),
        e && ((y.current = !1), k(() => v(!1))));
    }, []),
    w = e && a,
    T = s(() => {
      document.hidden ? S(!1) : y.current && ((y.current = !1), x());
    }, [x, S]);
  (c(() => {
    if (w)
      return (
        document.addEventListener(`visibilitychange`, T),
        () => {
          document.removeEventListener(`visibilitychange`, T);
        }
      );
  }, [w, T]),
    c(() => {
      (w && o) || (w ? x() : S());
    }, [x, S, o, w]),
    c(() => () => S(), [S]));
  let E = l(!1),
    D = s(async () => {
      h.current && (await h.current, !E.current && S());
    }, [S]);
  NS(
    u,
    s(
      (e) => {
        e.isIntersecting ? ((E.current = !0), x()) : ((E.current = !1), D());
      },
      [x, D]
    ),
    { enabled: w && o }
  );
  let O = _ || !o;
  return C(() => ({ values: f, style: w && O ? kC : AC }), [w, O]);
}
function ul(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function dl(e, n, r) {
  let { speed: i = 100, offset: a = 0, adjustPosition: o = !1, parallaxTransformEnabled: s } = e,
    c = j.useRef(null),
    l = ue(),
    u = j.useCallback(
      (e) => (c.current === null || i === 100 ? 0 : ul(e, c.current, i, a, o)),
      [i, a, o]
    ),
    { scrollY: d } = Ce(),
    f = F(d, u),
    p = be(o && c.current === null ? `hidden` : r),
    m = be(0),
    h = t(MS);
  return (
    qs(
      n,
      (e) => {
        if (e === null || !s) return;
        let t = Js(h, `undefined`, e, null, (e) => {
          ((c.current = e.boundingClientRect.top),
            Le.update(() => {
              (f.set(u(d.get())), o && p.set(r ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [o, s]
    ),
    Wt(() => {
      s && f.set(0);
    }),
    { values: { y: l || !s ? m : f }, style: s ? { ...kC, visibility: p } : AC }
  );
}
function fl(e) {
  return typeof e == `object` && !!e;
}
function pl(e) {
  if (fl(e)) return e?.transition;
}
function ml(e, t, n, r, i, a) {
  let o = pl(e);
  return Promise.all(
    EC.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = fl(e) ? (e?.[s] ?? OC[s]) : OC[s];
          if ((at(u) && (u = u.get()), !z(u))) return c();
          let d = ne.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (R(i) && !l?.hasAnimated && K.MotionHandoffAnimation) {
            let e = K.MotionHandoffAnimation(i, s, Le);
            e && (f = e);
          }
          a ? l.set(u) : Fe(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function hl(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a },
  o,
  s,
  c,
  u
) {
  let d = r ?? e,
    f = i ?? t,
    p = a ?? n,
    [m, h] = de(),
    g = l({ lastPresence: !1, lastAnimate: f, hasMounted: !1, running: !1 }),
    _ = ba(() => {
      let e = d ?? c;
      if (!B(e)) return { values: DC() };
      let t = {};
      for (let n in e) {
        let r = B(e) ? e[n] : void 0;
        z(r) && (t[n] = r);
      }
      return { values: DC(t) };
    });
  qs(
    o,
    (e) => {
      let { hasMounted: t } = g.current;
      if (t && f) return;
      let n = ne.get(e);
      if (n)
        for (let e in (Object.assign(g.current, { hasMounted: !0 }), _.values)) {
          if (!sl(e)) continue;
          let t = c?.[e];
          n.setBaseTarget(e, z(t) ? t : OC[e]);
        }
    },
    [f]
  );
  let v = ue();
  qs(o, (e) => {
    if (!s) {
      h?.();
      return;
    }
    if (e === null) return;
    if (m !== g.current.lastPresence) {
      (Object.assign(g.current, { lastPresence: m }),
        m
          ? d &&
            f &&
            (Object.assign(g.current, { running: !0 }),
            ml(f, _, v, o, u).then(() => Object.assign(g.current, { running: !1 })))
          : p
            ? (Object.assign(g.current, { running: !0 }),
              ml(p, _, v, o, u)
                .then(() => Object.assign(g.current, { running: !1 }))
                .then(() => h()))
            : h());
      return;
    }
    let { lastAnimate: t, running: n } = g.current;
    Lt(f, t) ||
      !f ||
      (Object.assign(g.current, { lastAnimate: f }),
      ml(f, _, v, o, u, !n).then(() => Object.assign(g.current, { running: !1 })));
  });
  let y = s && f;
  return C(() => ({ values: _.values, style: y ? kC : AC }), [y]);
}
function gl(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement; ) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function _l(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o || !o.current) continue;
    let c = gl(o.current, document.documentElement) - FC - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function vl(e, t = 0) {
  return e < t ? `up` : `down`;
}
function yl(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = Ut();
  j.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return N((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = vl(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < IC) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function bl(e, t, n) {
  let r = _l(e, t),
    i = [...RC],
    a = r[0];
  if (!z(a)) return zC;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!z(e)) return zC;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function xl(e) {
  return {
    x: e?.x ?? OC.x,
    y: e?.y ?? OC.y,
    scale: e?.scale ?? OC.scale,
    opacity: e?.opacity ?? OC.opacity,
    transformPerspective: e?.transformPerspective ?? OC.transformPerspective,
    rotate: e?.rotate ?? OC.rotate,
    rotateX: e?.rotateX ?? OC.rotateX,
    rotateY: e?.rotateY ?? OC.rotateY,
    skewX: e?.skewX ?? OC.skewX,
    skewY: e?.skewY ?? OC.skewY,
    transition: e?.transition ?? void 0,
  };
}
function Sl({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return j.useMemo(
    () => ({
      initial: r ?? xl({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? xl({ opacity: t }),
      exit: i ?? xl(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function Cl(e, t) {
  let n = ue(),
    r = Sl(e),
    i = e.styleAppearEffectEnabled,
    a = cl(i ? r.initial : r.animate, i),
    o = j.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    s = Ut(),
    c = j.useRef(),
    l = j.useCallback(async ({ transition: i, ...o }, s) => {
      let l = i ?? r.animate.transition ?? e.transition;
      await c.current;
      let u = ne.get(t.current);
      c.current = Promise.all(
        EC.map((e) => {
          s && a.values[e].set(r.initial[e] ?? OC[e]);
          let t = o[e] ?? OC[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (z(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...l, onComplete: () => r() };
                typeof t == `number` && Fe(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    u = e.animateOnce && o.current.lastAppearState === !0;
  Xs(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = o.current;
      if (t) {
        o.current.scheduledAppearState = e;
        return;
      }
      ((o.current.scheduledAppearState = void 0),
        (o.current.lastAppearState = e),
        n !== e && l(e ? r.animate : r.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !u,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let d = e.targets && i && !e.scrollDirection;
  return (
    j.useEffect(() => {
      if (!d) return;
      let t = { initial: !0 },
        n = `initial`;
      return N((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = bl(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let u = me(a.current, s, c);
        if ((e.animateOnce && t[u]) || ((t[u] = !0), n === u)) return;
        n = u;
        let d = zx(r)[u];
        d && l(d);
      });
    }, [s, d]),
    yl(e.scrollDirection, (e) => void l(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    Wt(() => {
      if (i && !(!e.targets && !e.scrollDirection))
        for (let e of EC) a.values[e].set(r.initial?.[e] ?? OC[e]);
    }),
    C(() => ({ values: a.values, style: i ? kC : AC }), [i])
  );
}
function wl(e, t) {
  let n = j.useRef({});
  j.useEffect(() => {
    if (t !== void 0)
      for (let r of c_(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = Je({
                keyframes: [a.get(), s],
                velocity: a.getVelocity(),
                ...t,
                restDelta: 0.001,
                onUpdate: o,
              })));
          },
          a = e[r],
          o,
          s;
        a.attach((e, t) => ((s = e), (o = t), Le.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function Tl(e, t) {
  let n = HC();
  return {
    inputRange: _l(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of EC) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function El(e) {
  let t = HC();
  for (let { target: n } of e) for (let e of EC) t[e]?.push(n[e]);
  return t;
}
function Dl(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: i = 0,
  },
  a
) {
  let o = ue(),
    s = cl(VC(n, o), t),
    c = !t || !n,
    l = e === `onScrollTarget`,
    u = Ut();
  return (
    f(() => {
      if (!(c || !l))
        return N((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: a } = Tl(n, i * t.containerLength);
          if (r.length !== 0)
            for (let e of EC)
              (o && e !== `opacity`) ||
                (r.length === a[e].length &&
                  a[e][0] !== void 0 &&
                  s.values[e].set(me(t.current, r, a[e])));
        });
    }, [o, l, i, n, c]),
    qs(
      a,
      (t) => {
        if (c || l || t === null) return;
        let r = El(n);
        return N(
          (e, { y: t }) => {
            for (let e of EC)
              (o && e !== `opacity`) ||
                (UC.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  s.values[e].set(me(t.progress, UC, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [u, o, e, l, n, c]
    ),
    wl(s.values, r),
    Wt(() => {
      if (c) return;
      let e = VC(n, o);
      for (let t of EC) s.values[t].set(e?.[t] ?? OC[t]);
    }),
    j.useMemo(() => ({ values: s.values, style: t ? kC : AC }), [t])
  );
}
function Ol(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function kl(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`) continue;
    let r = Jc(n);
    if (r) {
      for (let i of GC)
        if (WC[i]?.has(r)) {
          t[i][r] = zx(e)[n];
          break;
        }
    } else t.forwardedProps[n] = zx(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = Ol(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = Ol(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function Al(e) {
  return B(e) && JC in e;
}
function jl(e, t) {
  if (!e || !B(e)) return t;
  for (let n in e) {
    let r = e[n];
    !at(r) || !sl(n) || (z(r.get()) && t[n].push(r));
  }
}
function Ml(e) {
  return R(e) || Array.isArray(e);
}
function Nl({ componentIdentifier: e, children: n }) {
  return n(t(XC)[e] ?? {});
}
function Pl() {
  return j.useContext(ZC);
}
function Fl(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function Il() {
  if (M === void 0 || ew)
    return _(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw nw;
}
function Ll({ children: e }) {
  return t(iw) ? _(O, { children: e }) : _(E, { fallback: rw, children: e });
}
function Rl() {
  return _(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function zl(e, t) {
  if (!Qg || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  yn(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Bl(...e) {
  console.error(...e);
}
function Vl() {
  return J.current() !== J.canvas;
}
function Hl({ getErrorMessage: e, fallback: t, children: n }) {
  return Vl()
    ? _(Ul, { fallback: t, children: _(ow, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function Ul({ children: e, fallback: t = aw }) {
  return M === void 0 ? _(E, { fallback: t, children: e }) : _(Ll, { children: e });
}
function Wl() {
  return j.useContext(cw);
}
function Gl() {
  let e = Wl();
  return j.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0; ) t = t.parent;
    return t;
  }, [e]);
}
function Kl({ children: e, scopeId: t, nodeId: n }) {
  let r = Wl(),
    i = j.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return _(cw.Provider, { value: i, children: e });
}
function ql(e, t) {
  return `${lw}${e}:${t}`;
}
function Jl(e, t) {
  return Xl(`component`, e, t);
}
function Yl(e, t) {
  return Xl(`override`, e, t);
}
function Xl(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${ql(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function Zl(e, t, n, r, i, a) {
  let o = $l(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function Ql(e, t, n, r) {
  return $l(e, t, n, r);
}
function $l(e, t, n, r) {
  return !!(ft(n) || (n === 1 && r && e === t));
}
function eu(e, t, n, r, i, a) {
  let o = Wl(),
    { disableCustomCode: s } = h_();
  return ft(t) || ft(n)
    ? _(sw, { children: e })
    : s && r
      ? _(`div`, {
          style: {
            padding: `12px 16px`,
            borderWidth: 1,
            borderRadius: 6,
            borderStyle: `solid`,
            borderColor: `rgba(149, 149, 149, 0.15)`,
            backgroundColor: `rgba(149, 149, 149, 0.1)`,
            fontSize: 12,
            color: `#a5a5a5`,
          },
          children: `Code component disabled`,
        })
      : (Zl(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
          (e = _(Hl, { getErrorMessage: Jl.bind(null, t, n), fallback: null, children: e })),
        i && (e = _(Kl, { scopeId: t, nodeId: n, children: e })),
        e);
}
function tu(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function nu(e) {
  return !(!e || e.placement || e.alignment);
}
function ru(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      H(e);
  }
}
function iu(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${ru(t)}, -100%`;
    case `right`:
      return `0%, ${ru(t)}`;
    case `bottom`:
      return `${ru(t)}, 0%`;
    case `left`:
      return `-100%, ${ru(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function au(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n; ) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(vw)) {
      let e = n.getAttribute(vw);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function ou(e) {
  let { registerCursors: n } = t(fw),
    r = ba(() => e),
    i = te();
  f(() => n(r, i), [n, i]);
}
function su(e) {
  return !!(e && typeof e == `object` && bw in e);
}
function cu(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function lu() {
  return J.current() === J.canvas;
}
function uu(e) {
  return e === void 0 ? !1 : !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function du(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function fu(e, t, n, r) {
  if (R(e)) {
    let i = uu(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    let { routeId: s } = ui(t.routes, o, void 0, r);
    return t.getRoute(s);
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function pu(e) {
  return R(e) && e.startsWith(`data:${Dw}`);
}
function mu(e) {
  if (pu(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(Dw.length),
        r = t.searchParams,
        i = r.has(Cw) ? r.get(Cw) : void 0,
        a,
        o = r.get(ww),
        s = r.get(Tw),
        c = r.get(Ew);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function hu(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = mu(e);
    if (!n || !n.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function gu(e) {
  if (!pu(e)) return e;
  let t = mu(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: _u(i) };
}
function _u(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function vu({ children: e }) {
  return _(Ow.Provider, { value: void 0, children: e });
}
function yu(e, n, r, i, a, o) {
  let c = t(Ow),
    l = Gl(),
    u = C(() => ({ scopeId: n, nodeId: r, furthestExternalComponent: l }), [n, r, l]),
    d = Bt(),
    f = Ht(),
    { locales: m } = Fr(),
    h = C(() => {
      let e = su(i) ? i : gu(i);
      if (e) return fu(e, d, f, m);
    }, [f, i, d, m]),
    g = !!(!lu() && c?.nodeId && u.nodeId),
    v = s(
      (e) => {
        if (a.href) {
          if ((e.preventDefault(), e.stopPropagation(), co(e))) {
            Su(a.href, ``, `_blank`);
            return;
          }
          h ? a.navigate?.() : Su(a.href, a.rel, a.target);
        }
      },
      [a, h]
    ),
    y = s(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), Su(a.href, ``, `_blank`));
      },
      [a]
    ),
    b = s(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          h ? a.navigate?.() : Su(a.href, a.rel, a.target));
      },
      [a, h]
    );
  qs(
    o,
    (e) => {
      e !== null && g && (e.dataset.hydrated = `true`);
    },
    [g]
  );
  let x = e;
  return (
    g &&
      (p.forEach(e, (e) => {
        xu(e) &&
          (V(
            bu(c),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          V(
            bu(u),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          Sw.collectNestedLink(c, u));
      }),
      (x = p.map(e, (e) => {
        if (!xu(e)) return e;
        let t = Cu(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: v,
            onAuxClick: y,
            onKeyDown: b,
            as: r.as && Cu(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return ee(t, { ...i, ref: a }, n);
      }))),
    _(Ow.Provider, { value: u, children: x })
  );
}
function bu(e) {
  return !ft(e?.nodeId);
}
function xu(e) {
  return y(e) && (Cu(e.type) !== e.type || Cu(e.props.as) !== e.props.as);
}
function Su(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function Cu(e) {
  return e === `a` ? `span` : ke(e) && oe(e) === `a` ? P.span : e;
}
function wu(e) {
  e &&
    Le.read(() => {
      let t = document.getElementById(e);
      if (!t) return;
      let n = getComputedStyle(t),
        r = n.getPropertyValue(`--selection-color`).trim(),
        i = n.getPropertyValue(`--selection-background-color`).trim();
      Le.render(() => {
        let t = document.querySelectorAll(`[data-framer-portal-id="${e}"]`);
        t.length !== 0 &&
          (r && t.forEach((e) => e.style.setProperty(kw, r)),
          i && t.forEach((e) => e.style.setProperty(Aw, i)));
      });
    });
}
function Tu(e) {
  return [
    `[data-framer-portal-id="${e}"] * ::selection {
    color: var(${kw});
    background-color: var(${Aw});
}`,
  ];
}
function Eu({ triggerId: e, children: t }) {
  return (
    j.useLayoutEffect(() => {
      e && wu(e);
    }, [e]),
    t
  );
}
function Du({ component: e, props: n }) {
  let r = t(dC),
    i = ee(e, n);
  if ((`variant` in n && n.variant != null) || !r) return i;
  let { activeVariantId: a, humanReadableVariantMap: o } = r;
  if (!a || !o) return i;
  let s = {};
  for (let [e, t] of Object.entries(o)) s[t] = { variant: e };
  return _(gC, { overrides: s, breakpoint: a, children: i });
}
function Ou(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : Ou(e.parentElement, t)
      : null;
}
function ku({ children: e }) {
  return _(Ll, { children: e });
}
function Au(e) {
  return m(function (t, n) {
    return _(ku, { children: _(e, { ...t, ref: n }) });
  });
}
function ju(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return Nu(e, t, o, s, a, c, l, i, r);
}
function Mu(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && uu(t))
    try {
      let [i, a] = t.split(`#`, 2);
      V(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      V(o !== void 0, `A href must have a defined pathname.`);
      let { routeId: s, pathVariables: c, localeId: l } = ui(e.routes, o, void 0, r),
        u = e.getRoute(s);
      if (u)
        return {
          routeId: s,
          route: u,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, c),
          locale: l ? r?.find(({ id: e }) => e === l) : void 0,
        };
    } catch {}
}
function Nu(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = wr(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function Pu() {
  let e = t(Lw),
    n = Ht()?.pathVariables;
  return e || n;
}
function Fu(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(Iw)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Iu() {
  let e = d.connection || d.mozConnection || d.webkitConnection || {},
    t = d.deviceMemory && d.deviceMemory > Bw,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? Vw : Hw));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(l, { threshold: zw }),
    s = 0;
  async function c(e, t) {
    if (r) return;
    let { id: n, preload: i } = e,
      a = Gw.get(n);
    if (!a?.size || Ww.has(n)) return;
    (++s, Ww.add(n));
    let c = i()?.catch(() => {});
    (o.unobserve(t), Uw.delete(t));
    for (let e of a) (o.unobserve(e), Uw.delete(e));
    (a.clear(), Gw.delete(n), await c, --s);
  }
  function l(e) {
    for (let t of e) {
      let e = t.target,
        n = Uw.get(e);
      if (!n || Ww.has(n.id)) {
        (o.unobserve(e), Uw.delete(e));
        continue;
      }
      let r = n.id,
        a = Gw.get(r),
        l = Gw.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (s >= i) continue;
        (a ? a.add(e) : Gw.set(r, new Set([e])), setTimeout(c, Rw, n, e));
      } else (a && a.delete(e), l <= 1 && Gw.delete(r));
    }
  }
  return (e, t, n) => {
    if (!Ww.has(n))
      return (
        Uw.set(e, { id: n, preload: t }),
        o.observe(e),
        () => {
          (Uw.delete(e), o.unobserve(e));
        }
      );
  };
}
function Lu(e, t) {
  let n = uu(e),
    r = {
      href: e === `` || du(e, n) ? e : `https://${e}`,
      target: Ru(t?.openInNewTab, n),
      rel: n ? void 0 : zu(`noopener`, t?.rel),
    };
  return (
    t?.preserveParams && ((r.href = Kn(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function Ru(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function zu(e, t) {
  if (e && !t) return e;
  if (!e && t) return t;
  if (e && t) return `${e} ${t}`;
}
function Bu(e, t) {
  console.warn(
    xt(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function Vu(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return Bu(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return vt(i) ? i.catch(Bu) : i;
  } catch (e) {
    Bu(e);
  }
}
async function Hu(e, t, n, r) {
  async function i(e) {
    if (!e) return {};
    let t = {};
    for (let i in e) {
      let a = e[i];
      V(a, `unresolvedSlug should be defined`);
      let o = Vu(a, r, n),
        s = vt(o) ? await o : o;
      s && (t[i] = s);
    }
    return t;
  }
  let [a, o] = await Promise.allSettled([i(e), i(t)]);
  return {
    path: a.status === `fulfilled` ? a.value : void 0,
    hash: o.status === `fulfilled` ? o.value : void 0,
  };
}
function Uu(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = Vu(o, r, n);
      vt(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function Wu() {
  let e = An();
  return s((t, n, r, i = []) => Uu(t, n, r, e, i), [e]);
}
function Gu({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = An();
  return s(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = su(r) ? r : gu(r);
      if (!su(c))
        return yn(
          `published_site_click`,
          {
            ...s,
            href: o ? Ku(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (R(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (vt(n) ? await n : n) ?? null;
        }
      }
      return yn(
        `published_site_click`,
        {
          ...s,
          href: o ? Ku(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, t, n, r, i, a]
  );
}
function Ku(e) {
  try {
    let t = new URL(e, K.document.baseURI);
    return t.origin === K.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function qu(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function Ju(e, t, n) {
  return async (r) => {
    let i = co(r),
      a = Ou(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await In({
        priority: `user-blocking`,
        ensureContinueBeforeUnload: !0,
        continueAfter: `paint`,
      }),
        c());
      return;
    }
    (r.preventDefault(), n(c));
  };
}
function Yu(e, t, n, r, i, a, o, s) {
  if (!n) return Lu(e, r);
  let c = Mu(t, e, s, o);
  if (!c) return Lu(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return Lu(e, r);
  let m = wr(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !$g,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = Ru(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = { pathVariables: f, locale: p },
    v = (e) => qu(t, l, () => i(l, _, !1, !g), d, f, r.smoothScroll, e);
  return {
    href: m,
    target: h,
    onClick: Ju(m, r.trackLinkClick, v),
    navigate: v,
    "data-framer-page-link-current":
      (n && Fu(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () => i(l, _, !0, !g),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
  };
}
function Xu(e, t, n) {
  let r = Zu(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (ct(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (ct(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function Zu(e, t) {
  let n = B(e) ? e : void 0,
    r = n && !dt(n),
    i = t && !dt(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function Qu(e, t, n) {
  if (!(t && Za())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: $u } : { ...i, onTap: r }) : e;
}
function $u(e) {
  let t = Ou(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function ed(e, t, n, r, i, a) {
  let o = su(e) ? e : gu(e);
  if (!su(o)) return R(e) ? Lu(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if (vt(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash),
    v = wr(m, {
      currentRoutePath: s?.path,
      currentRoutePathLocalized: s?.pathLocalized,
      currentPathVariables: t.currentPathVariables,
      hash: l,
      pathVariables: g,
      hashVariables: _,
      relative: !1,
      preserveQueryParams: t.preserveQueryParams,
      onlyHash: r,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: i?.id,
    });
  return r ? v : (i?.slug ? `/${i.slug}` : ``) + v;
}
function td() {
  return function () {
    async function e(e) {
      let t = new TextEncoder().encode(e),
        n = await crypto.subtle.digest(`SHA-256`, t);
      return Array.from(new Uint8Array(n))
        .map((e) => e.toString(16).padStart(2, `0`))
        .join(``);
    }
    function t(e) {
      let t = ``;
      for (let n = 0; n < e; n++)
        t += `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(
          Math.floor(Math.random() * 62)
        );
      return t;
    }
    addEventListener(`message`, async (n) => {
      let { salt: r, difficulty: i, tokenLength: a, maxTime: o } = n.data,
        s = `0`.repeat(i),
        c = performance.now(),
        l = !0;
      for (; l; ) {
        if (performance.now() - c > o) {
          ((l = !1), postMessage({ success: !1 }));
          return;
        }
        let n = t(a),
          i = `${Date.now()}:${n}`,
          u = await e(r + i);
        if (u.startsWith(s)) {
          postMessage({ success: !0, secret: i, hash: u });
          return;
        }
      }
    });
  }.toString();
}
async function nd() {
  return new Promise((e, t) => {
    let n = URL.createObjectURL(new Blob([`(`, td(), `)()`], { type: `application/javascript` })),
      r = new Worker(n);
    ((r.onmessage = (t) => {
      (r.terminate(),
        URL.revokeObjectURL(n),
        t.data.success ? e({ secret: t.data.secret, hash: t.data.hash }) : e(void 0));
    }),
      (r.onerror = (e) => {
        (r.terminate(), URL.revokeObjectURL(n), t(e));
      }),
      r.postMessage({ salt: Jw, difficulty: Yw, tokenLength: Xw, maxTime: Zw }));
  });
}
function rd(e) {
  return Array.from(e.keys()).map(encodeURIComponent).join(`,`);
}
function id(e, t) {
  try {
    let n = t.cookie.match(`(^|;) ?framerFormsUTMTags=([^;]*)(;|$)`);
    if (n !== null && n[2]) {
      let t = JSON.parse(decodeURIComponent(n[2]));
      if (!t || typeof t != `object`) return;
      [`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`].forEach(
        (n) => {
          typeof t[n] == `string` && e.append(n, t[n]);
        }
      );
    }
  } catch {}
}
function ad() {
  let e = j.useContext(dT),
    t = j.useMemo(
      () =>
        eT.map((e) => ({
          inputRef: j.createRef(),
          originalName: e,
          methodsUsed: { setAttribute: !1, valueProperty: !1 },
        })),
      []
    );
  return {
    states: t,
    convertHoneypotFieldsForSubmission: j.useCallback(() => {
      t.forEach((e) => {
        let t = e.inputRef.current;
        t && (t.name = `${$w}_${e.originalName}`);
      });
    }, [t]),
    replaceHoneypotWithMetadata: j.useCallback(
      (n) => {
        let r = t.length,
          i = 0,
          a = [];
        (t.forEach((e) => {
          let t = e.inputRef.current;
          if (t) {
            let r = t.name,
              o = t.value;
            if (o) {
              i++;
              let t = {
                [nT.name]: e.originalName,
                [nT.value]: o,
                [nT.setAttribute]: e.methodsUsed.setAttribute,
                [nT.valueProperty]: e.methodsUsed.valueProperty,
                [nT.isInputEventTrusted]: e.methodsUsed.isInputEventTrusted,
                [nT.inputChangeTimeSinceModuleLoad]: e.methodsUsed.inputChangeTimeSinceModuleLoad,
                [nT.wasFilledBeforeHydration]: e.methodsUsed.wasFilledBeforeHydration,
              };
              a.push(JSON.stringify(t));
            }
            (n.delete(r), (t.name = e.originalName));
          }
        }),
          n.append(`${$w}_${rT.fieldData}`, `[${a.join(`,`)}]`),
          n.append(`${$w}_${rT.fieldCount}`, r.toString()),
          n.append(`${$w}_${rT.fieldFilledCount}`, i.toString()),
          n.append(`${$w}_${rT.hpVersion}`, Qw),
          n.append(`${$w}_${rT.siteId}`, e || ``),
          n.append(`${$w}_${rT.timeToSubmissionSinceModuleLoad}`, iT()));
      },
      [t, e]
    ),
  };
}
function od({ states: e }) {
  return _(O, { children: e.map((e) => _(aT, { inputStateRef: e }, `hp_${e.originalName}`)) });
}
function sd({ router: e, nodeId: t, submitTrackingId: n }) {
  e?.pageviewEventData?.current &&
    (e.pageviewEventData.current instanceof Promise
      ? e.pageviewEventData.current.then((e) => {
          cd(e, t, n);
        })
      : cd(e.pageviewEventData.current, t, n));
}
function cd(e, t, n) {
  return yn(
    `published_site_form_submit`,
    { ...e, nodeId: t ?? null, trackingId: n || null },
    `eager`
  );
}
function ld({ state: e }, { type: t }) {
  switch (t) {
    case `complete`:
      return e === `error` ? uT : lT;
    case `incomplete`:
      return e === `error` ? uT : cT;
    case `submit`:
      return oT;
    case `success`:
      return sT;
    case `error`:
      return uT;
    default:
      H(t);
  }
}
function ud({ state: e }) {
  return e === `incomplete` || e === `complete`;
}
function dd(e) {
  e.preventDefault();
}
function fd(e, t) {
  let n = du(e, !1) ? e : `https://${e}`,
    r = document.createElement(`a`);
  ((r.href = n),
    (r.target = `_self`),
    (r.style.display = `none`),
    `current` in t && t.current && (t.current.appendChild(r), r.click(), r.remove()));
}
function pd(e) {
  if (e.children.length === 0) return !1;
  for (let t of e.children)
    if (
      t instanceof HTMLInputElement ||
      t instanceof HTMLTextAreaElement ||
      t instanceof HTMLSelectElement
    ) {
      if (t.required && t.value === ``) return !0;
    } else if (pd(t)) return !0;
  return !1;
}
async function md(e, t, n) {
  let r = await nd();
  if (!r) throw Error(`Failed to calculate proof of work`);
  let i = { "Framer-Site-Id": n, "Framer-POW": r.secret, "Framer-Form-Fields": rd(t) },
    a = await fetch(e, { body: t, method: `POST`, headers: i });
  if (a.ok) return a;
  {
    let e = await a.json(),
      t = `Failed to submit form`;
    throw hd(e) ? Error(`${t} - ${e.error.message}`) : Error(t);
  }
}
function hd(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `error` in e &&
    B(e.error) &&
    `message` in e.error &&
    typeof e.error.message == `string`
  );
}
function gd({ EditorBar: e, fast: n = !1 }) {
  let r = h_(),
    i = t(dT),
    a = g(n_, n ? hT : gT, i_),
    o = C(() => {
      let e = {},
        t;
      for (t in r)
        r.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = r[t]);
      return e;
    }, [r]);
  return !e || !i || !a
    ? null
    : _(mT, { children: _(E, { children: _(e, { framerSiteId: i, features: o }) }) });
}
function _d({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = l(),
    a = l(),
    o = l(t),
    s = l(null);
  ((o.current = t),
    c(() => {
      e && ((r.current ??= new Set()), r.current.add(e), a.current?.(e));
    }, [e]));
  let [u] = i(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? new Set(),
      getCurrentRoutePath: () =>
        o.current ? yd(o.current, o.current.currentRouteId, o.current.currentPathVariables) : ``,
      resolveRoute: (e) => (o.current ? yd(o.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        a.current = e;
      },
      sendTrackingEvent: async (e) => {
        o.current && vd(o.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: s,
  }));
  return _(_T.Provider, { value: u, children: n });
}
async function vd(e, t) {
  if (!bn(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    yn(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function yd(e, t, n) {
  let r = e.getRoute(t);
  return !r || !r.path ? `` : n ? Gn(r.path, n) : r.path;
}
function bd({ children: e, loadSnippetsModule: t }) {
  return _(OT.Provider, { value: t, children: e });
}
function xd() {
  return j.useContext(OT);
}
function Sd(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function Cd(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (V(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (V(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      H(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await wd(a.createContextualFragment(e), r, i));
}
async function wd(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = Td(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await wd(r, e, null)));
  }
}
function Td(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return Ed(r, t, n);
}
function Ed(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function Dd(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = wT), (n = TT));
      break;
    case `bodyEnd`:
      ((t = ET), (n = DT));
      break;
    case `headStart`:
      ((t = bT), (n = xT));
      break;
    case `headEnd`:
      ((t = ST), (n = CT));
      break;
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function Od(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = Sd(e),
    s = t.nextSibling;
  for (; s && s !== n; ) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function kd(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = Dd(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = Od(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((Ad(t, o), s)) {
      await Cd(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = Sd(e.id),
      u = `${c}
${e.code}
${l}`,
      d = Md(e.id, n, r, i);
    d ? await Cd(u, d, `afterend`) : await Cd(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function Ad(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t; ) {
    let e = n.nextSibling;
    (jd(n) && n.remove(), (n = e));
  }
}
function jd(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function Md(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = Od(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function Nd() {
  let e = xd();
  return s(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(vT),
        o = a && a.dataset[yT] !== void 0;
      if (i && o) return;
      let { getSnippets: s, snippetsSorting: c } = await e.readMaybeAsync(),
        l = await s(t, n, r);
      for (let e in l) {
        let t = e,
          n = l[t],
          r = c[t];
        await kd(t, n, r);
      }
    },
    [e]
  );
}
function Pd(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function Fd() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((kT = e.timeZone), (AT = e.locale));
}
function Id() {
  let [e, t] = j.useState(0);
  return [e, j.useCallback(() => t((e) => e + 1), [])];
}
function Ld(e, t, n) {
  let r = e && document.getElementById(e);
  if (r) {
    Ud(r, t);
    return;
  }
  n || M.scrollTo(0, 0);
}
function Rd(e) {
  let t = l([]);
  return (
    f(() => {
      t.current?.length && (t.current.forEach((e) => e()), (t.current = []));
    }, [e]),
    s((e) => {
      t.current.push(e);
    }, [])
  );
}
function zd(e) {
  if (!e) return Zg;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function Bd() {
  let e = Or(),
    t = l(void 0);
  return s(
    async (n, r, i, a = !0) => {
      let o = i !== void 0;
      t.current?.abort();
      let s = a ? new AbortController() : void 0;
      t.current = s;
      let c = s?.signal,
        l = qt(c);
      if ((r.promise.finally(l), !o)) return ((t.current = void 0), n(c), r.promise);
      n(c);
      let u;
      if (
        (e(
          new Promise((e, t) => {
            ((u = e), c?.addEventListener(`abort`, t));
          }).catch(Zg),
          i,
          s
        ),
        await r.promise,
        c?.aborted)
      )
        return;
      let d = M.navigation?.transition;
      u();
      try {
        await d?.finished;
      } catch (e) {
        console.error(`Navigation transition failed`, e);
      }
      c?.aborted || _v();
    },
    [e]
  );
}
function Vd({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: i,
  collectionUtils: a,
  routes: o,
  initialLocaleId: d,
  initialCollectionItemId: p,
  locales: m = f_,
  preserveQueryParams: h = !1,
  LayoutTemplate: g,
  EditorBar: v,
  siteCanonicalURL: y,
  adaptLayoutToTextDirection: b,
}) {
  (ni(), xr({ disabled: t, routeId: r, initialPathVariables: n, initialLocaleId: d }));
  let x = pr(),
    [S, w] = Id(),
    E = Rd(S),
    D = Bd(),
    O = gr(`framer-route-change`),
    { synchronousNavigationOnDesktop: ee } = h_(),
    A = C(() => (!ee || !so() ? k : (e) => e()), [ee]),
    j = Nd(),
    te = l(!0),
    ne = l(),
    N = l(r),
    re = l(n),
    P = l(d),
    ie = P.current,
    ae = C(() => m.find(({ id: e }) => (ie ? e === ie : e === g_)) ?? null, [ie, m]),
    oe = ae?.textDirection ?? `ltr`,
    se = b ? oe : `ltr`;
  f(() => {
    b && document.documentElement.setAttribute(`dir`, oe);
  }, [oe, b]);
  let ce = Er(),
    le = C(
      () => ({
        activeLocale: ae,
        locales: m,
        setLocale: async (e) => {
          let t = O({ localized: !0 });
          await In({ priority: `user-blocking`, continueAfter: `paint` });
          let n;
          R(e) ? (n = e) : B(e) && (n = e.id);
          let r = m.find(({ id: e }) => e === g_),
            i = m.find(({ id: e }) => e === n);
          if (!i) return;
          let a = N.current,
            s = o[a];
          if (s)
            try {
              let e = await ce({
                currentLocale: ae,
                nextLocale: i,
                route: s,
                routeId: a,
                defaultLocale: r,
                pathVariables: re.current,
                preserveQueryParams: h,
              });
              if (!e) return;
              let n = vr(M.history.state) ? M.history.state.paginationInfo : void 0,
                o = e.path;
              ((te.current = !1),
                (re.current = e.pathVariables),
                (P.current = i.id),
                D(
                  () => {
                    x(a, a, () => A(w));
                  },
                  t,
                  async (t = !1) => {
                    if (o)
                      return br(
                        {
                          routeId: a,
                          pathVariables: e.pathVariables,
                          localeId: i.id,
                          paginationInfo: n,
                        },
                        o,
                        t
                      );
                  },
                  !1
                ));
            } catch {}
        },
      }),
      [ae, w, m, h, o, D, x, O, A, ce]
    ),
    ue = s(
      (e, t, n, r, i, a, o, s = !1, c) => {
        te.current = !1;
        let l = N.current;
        if (
          ((N.current = e),
          (re.current = i),
          (P.current = t),
          (ne.current = r),
          E(() => {
            Ld(n, s, a);
          }),
          a)
        ) {
          A(w);
          return;
        }
        D(
          (t) => {
            x(l, e, () => A(w), t);
          },
          o,
          c,
          !0
        );
      },
      [w, E, D, x, A]
    );
  Sr(N, ue);
  let de = s(
      async (e, n, r, i, a) => {
        let s = o[e],
          c = Ct(s?.page) ? s.page.getStatus() : void 0,
          l = c?.hasRendered,
          u = O({ cached: l, preloaded: l ? void 0 : c?.hasLoaded }),
          d = zd(a);
        if (
          (In({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(d),
          await In({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = s?.path ?? `/`;
          for (let n of t.matchAll(av)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let f = Kt(s, n),
          p = re.current,
          m = P.current;
        if (Pd({ routeId: N.current, pathVariables: p }, { routeId: e, pathVariables: r })) {
          u.ignore?.();
          let a = o[e];
          (M.history.state?.hash !== n &&
            !t &&
            a &&
            (d(),
            await _r(e, a, {
              currentRoutePath: a.path,
              currentPathVariables: p,
              pathVariables: r,
              hash: n,
              localeId: m,
              preserveQueryParams: h,
              siteCanonicalURL: y,
              currentRoutePathLocalized: a.pathLocalized,
            })),
            Ld(f, i, !1));
          return;
        }
        if (!s) return;
        let g = o[N.current];
        ue(
          e,
          m,
          f,
          Xn(y) +
            wr(s, {
              currentRoutePath: g?.path,
              currentRoutePathLocalized: g?.pathLocalized,
              currentPathVariables: p,
              hash: n,
              pathVariables: r,
              localeId: m,
              preserveQueryParams: h,
              siteCanonicalURL: y,
              relative: !1,
            }),
          r,
          !1,
          u,
          i,
          t
            ? void 0
            : async (t = !1) => (
                d(),
                _r(
                  e,
                  s,
                  {
                    currentRoutePath: g?.path,
                    currentPathVariables: p,
                    currentRoutePathLocalized: g?.pathLocalized,
                    hash: n,
                    pathVariables: r,
                    localeId: m,
                    preserveQueryParams: h,
                    siteCanonicalURL: y,
                  },
                  t
                )
              )
        );
      },
      [o, ue, t, h, y, O]
    ),
    fe = Rt(o),
    pe = N.current,
    me = ne.current,
    he = re.current,
    ge = o[pe],
    F = ge?.path,
    _e = jT(ge, pe, me, he, ae, p),
    ve = te.current;
  c(() => {
    j(pe, he ?? {}, le.activeLocale, ve);
  }, [j, pe, he, le, ve]);
  let ye = C(
    () => ({
      navigate: de,
      getRoute: fe,
      currentRouteId: pe,
      currentPathVariables: he,
      routes: o,
      collectionUtils: a,
      preserveQueryParams: h,
      pageviewEventData: _e,
      siteCanonicalURL: y,
      isInitialNavigation: ve,
    }),
    [de, fe, pe, he, o, a, h, y, _e, ve]
  );
  if (!ge) throw Error(`Router cannot find route for ${pe}`);
  let be = !ae || !ge.includedLocales || ge.includedLocales.includes(ae.id),
    xe = F && he ? Gn(F, he) : F,
    Se = String(ie) + xe,
    Ce = ba(() => ({ ...e, display: `contents` }));
  return _(zt, {
    api: ye,
    children: _(Ev.Provider, {
      value: le,
      children: _(Dv.Provider, {
        value: se,
        children: _(gw, {
          children: _(Hr, {
            children: T(_d, {
              currentRoutePath: xe,
              routerAPI: ye,
              children: [
                v && _(gd, { EditorBar: v, fast: !0 }),
                _(tw, {
                  children: T(Ll, {
                    children: [
                      T(ay, {
                        notFoundPage: i,
                        defaultPageStyle: e,
                        forceUpdateKey: S,
                        children: [
                          _(ry.Start, {}),
                          _(Hd, {
                            LayoutTemplate: g,
                            webPageId: ge?.abTestingVariantId ?? pe,
                            style: e,
                            children: (t) =>
                              _(u, { children: be ? si(ge.page, t ? Ce : e) : i && si(i, e) }, Se),
                          }),
                        ],
                      }),
                      v && _(gd, { EditorBar: v }),
                      _(Qr, {}),
                      _(ry.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function Hd({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? _(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function Ud(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function Wd(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function Gd(e) {
  return typeof e == `object` && !!e;
}
function Kd(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!Gd(r)) return;
    r = r[e];
  }
  return r;
}
function qd(e) {
  return `${e.credentials}:${e.url}`;
}
function Jd(e) {
  return R(e) && !Number.isNaN(Number(e));
}
function Yd(e, t) {
  switch (e) {
    case `string`:
      return R(t) || z(t);
    case `color`:
      return R(t);
    case `boolean`:
      return lt(t);
    case `number`:
      return z(t) || Jd(t);
    case `link`:
    case `image`:
      return R(t) && du(t, !1);
    default:
      return !1;
  }
}
function Xd(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = Kd(e.data, t.resultKeyPath);
  if (ft(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!Yd(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function Zd(e, t) {
  if (J.current() === J.canvas) return !1;
  let n = Math.max(t * 1e3, NT);
  return Date.now() >= e + n;
}
function Qd(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    routes: s,
    collectionUtils: c,
    notFoundPage: l,
    isReducedMotion: u = !1,
    skipAnimations: d = !1,
    includeDataObserver: f = !1,
    localeId: p,
    locales: m,
    preserveQueryParams: h,
    EditorBar: g,
    defaultPageStyle: v,
    disableHistory: y,
    LayoutTemplate: b,
    siteCanonicalURL: x,
    adaptLayoutToTextDirection: S,
    loadSnippetsModule: C,
    initialCollectionItemId: w,
  } = e;
  return (
    j.useEffect(() => {
      n || My.start();
    }, []),
    n
      ? _(jr, {
          value: r ?? `preview`,
          children: _(ze, {
            reducedMotion: d ? `always` : u ? `user` : `never`,
            skipAnimations: d,
            children: _(kn, {
              collectionUtils: c,
              children: _(GT, {
                children: _(dT.Provider, {
                  value: a,
                  children: _(bd, {
                    loadSnippetsModule: C,
                    children: _(Vd, {
                      initialRoute: i,
                      initialPathVariables: o,
                      initialLocaleId: p,
                      initialCollectionItemId: w,
                      routes: s,
                      collectionUtils: c,
                      notFoundPage: l,
                      locales: m,
                      defaultPageStyle: v ?? { minHeight: `100vh`, width: `auto` },
                      preserveQueryParams: h,
                      EditorBar: g,
                      disableHistory: y,
                      LayoutTemplate: b,
                      siteCanonicalURL: x,
                      adaptLayoutToTextDirection: S,
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      : _(f ? cC : j.Fragment, {
          children: _(Vt, {
            routes: s,
            children: _(QS, { children: j.isValidElement(t) ? t : j.createElement(t, { key: i }) }),
          }),
        })
  );
}
function $d(e) {
  return {
    trace(...t) {
      return Kx.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return Kx.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return Kx.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return Kx.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return Kx.getLogger(e)?.error(...t);
    },
    get enabled() {
      return Kx.getLogger(e) !== void 0;
    },
  };
}
function ef(e) {
  let t = e.next();
  return (V(t.done, `Generator must not yield`), t.value);
}
async function tf(e, t = e.next()) {
  for (; !t.done; ) {
    let n = await t.value;
    t = e.next(n);
  }
  return t.value;
}
function nf(e) {
  let t = e.next();
  return t.done ? t.value : tf(e, t);
}
function* rf(e) {
  let t = {},
    n = Object.keys(e),
    r = [];
  for (let i of n) {
    let n = e[i];
    if (gt(n)) {
      let e = n.next();
      e.done
        ? (t[i] = e.value)
        : r.push(
            tf(n, e).then((e) => {
              t[i] = e;
            })
          );
    } else t[i] = n;
  }
  return (r.length > 0 && (yield Promise.all(r)), t);
}
function* af(e) {
  let t = [],
    n = e.keys(),
    r = [];
  for (let i of n) {
    let n = e[i];
    if (gt(n)) {
      let e = n.next();
      e.done
        ? (t[i] = e.value)
        : r.push(
            tf(n, e).then((e) => {
              t[i] = e;
            })
          );
    } else t[i] = n;
  }
  return (r.length > 0 && (yield Promise.all(r)), t);
}
function of(e) {
  return lf(e) || ff(e);
}
function sf(e) {
  return ut(e) && e.every(B);
}
function cf(e) {
  return B(e) && ct(e.read) && ct(e.preload);
}
function lf(e) {
  return sf(e) || cf(e);
}
function uf(e) {
  return B(e) && B(e.schema);
}
function df(e) {
  return B(e) && B(e.collectionByLocaleId);
}
function ff(e) {
  return uf(e) || df(e);
}
function pf(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = Hf(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function mf(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => qT.cast(e, t.definition)) };
  }
  return null;
}
function hf(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function gf(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function _f(e) {
  return gf(e)?.value ?? !1;
}
function vf(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function yf(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function bf(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function xf(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return ht(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function Sf(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Cf(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function wf(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Tf(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function Ef(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Df(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function Of(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function kf(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function Af(e) {
  return kf(e)?.value ?? null;
}
function jf(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = Hf(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function Mf(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = qT.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function Nf(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Pf(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function Ff(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
function If(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function Lf(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
function Rf(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function zf(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : r > i ? 1 : 0
  );
}
function Bf(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function Vf(e) {
  return Bf(e)?.value ?? null;
}
function Hf(e, t, n) {
  if (pt(e) || pt(t)) return (V(e === t), 0);
  switch (e.type) {
    case `array`:
      return (V(e.type === t.type), pf(e, t, n));
    case `boolean`:
      return (V(e.type === t.type), hf(e, t));
    case `color`:
      return (V(e.type === t.type), vf(e, t));
    case `date`:
      return (V(e.type === t.type), bf(e, t));
    case `enum`:
      return (V(e.type === t.type), Sf(e, t));
    case `file`:
      return (V(e.type === t.type), wf(e, t));
    case `link`:
      return (V(e.type === t.type), Ef(e, t));
    case `number`:
      return (V(e.type === t.type), Of(e, t));
    case `object`:
      return (V(e.type === t.type), jf(e, t, n));
    case `responsiveimage`:
      return (V(e.type === t.type), Nf(e, t));
    case `richtext`:
      return (V(e.type === t.type), Ff(e, t));
    case `vectorsetitem`:
      return (V(e.type === t.type), Lf(e, t));
    case `string`:
      return (V(e.type === t.type), zf(e, t, n));
    default:
      H(e);
  }
}
async function Uf(e, t) {
  return cf(e) ? (await e.preload(t), e.read(t)) : e;
}
function Wf(e) {
  return e.includes(QT);
}
function Gf(e) {
  if (!ff(e) || !e.id) return;
  let t = XT.get(e.id);
  if (!t) return (XT.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function Kf(e) {
  let t = Gf(e);
  if (t) return t;
  let n = ZT.get(e);
  if (n) return n;
  let r = `${QT}${Math.random().toString(16).slice(2)}`;
  return (ZT.set(e, r), r);
}
function qf(e, t) {
  if (lf(e)) {
    let n = Kf(e) + (t?.id ?? g_),
      r = $T.get(n);
    if (r) return r;
    let i = new YT(e, t);
    return ($T.set(n, i), i);
  }
  if (uf(e)) return e;
  if (df(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  H(e, `Unsupported collection type`);
}
function Jf() {
  return 25;
}
function Yf() {
  return 12500;
}
function Xf(e) {
  return e;
}
function Zf(e) {
  return e;
}
function Qf(e) {
  return B(e) && ct(e.getHash);
}
function G(e, ...t) {
  return Zf(
    `${e}(${t.map((e) => (V(!(e instanceof cE), `Pass CollectionMetadata.id instead`), V(!(e instanceof dE), `Pass FieldMetadata.id instead`), V(!(e instanceof lE), `Pass IndexMetadata.id instead`), V(!(e instanceof iE), `Pass RelationalNode.group.id instead`), V(!(e instanceof tE), `Pass Group.id instead`), Qf(e) ? e.getHash() : JSON.stringify(e))).join(`, `)})`
  );
}
function $f(e, t) {
  return { collectionId: Kf(e), pointer: t };
}
function ep(e) {
  return B(e) && R(e.collectionId);
}
function tp(e, t) {
  return { collectionId: Kf(e), pointer: t };
}
function np(e) {
  return B(e) && R(e.collectionId);
}
function rp(e, t) {
  let n = new Map();
  function r(e) {
    if (B(e))
      if (e.type === `Collection` && of(e.data)) {
        let r = qf(e.data, t),
          i = Kf(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if (ut(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function ip(e) {
  return e;
}
function ap(e) {
  return e;
}
function op(e) {
  return e;
}
function sp(e) {
  return Array(e).fill({ type: `All` });
}
function cp(e, ...t) {
  if (e) return;
  let n = Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function lp(e) {
  let t = new Set();
  if (!e) return t;
  cp(e.type === `array`, `ScalarIntersection expects an array, got:`, e.type);
  for (let n of e.value)
    n &&
      (cp(
        n.type === `string`,
        `ScalarIntersection expects an array of strings, got an array with:`,
        n.type
      ),
      t.add(n.value));
  return t;
}
function up(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function dp(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function fp(e) {
  return `${e.functionName}(${e.arguments.map((e) => _p(e)).join(`, `)})`;
}
function pp(e) {
  let t = `CASE`;
  e.value && (t += ` ${_p(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${_p(n.when)} THEN ${_p(n.then)}`;
  return (e.else && (t += ` ELSE ${_p(e.else)}`), (t += ` END`), t);
}
function mp(e) {
  let t = _p(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function hp(e) {
  let t = _p(e.left),
    n = _p(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function gp(e) {
  return `CAST(${_p(e.value)} as ${e.dataType})`;
}
function _p(e) {
  switch (e.type) {
    case `Identifier`:
      return up(e);
    case `LiteralValue`:
      return dp(e);
    case `FunctionCall`:
      return fp(e);
    case `Case`:
      return pp(e);
    case `UnaryOperation`:
      return mp(e);
    case `BinaryOperation`:
      return hp(e);
    case `TypeCast`:
      return gp(e);
    case `Select`:
      return `${Sp(e)}`;
    default:
      H(e);
  }
}
function vp(e) {
  return uf(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function yp(e) {
  let t = `${bp(e.left)} LEFT JOIN ${bp(e.right)}`;
  return (e.constraint && (t += ` ON ${_p(e.constraint)}`), t);
}
function bp(e) {
  switch (e.type) {
    case `Collection`:
      return vp(e);
    case `LeftJoin`:
      return yp(e);
    default:
      H(e);
  }
}
function xp(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `
${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `
	${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function Sp(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = _p(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${bp(e.from)}`),
    e.where && (t += ` WHERE ${_p(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${_p(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${_p(e.limit)}`),
    e.offset && (t += ` OFFSET ${_p(e.offset)}`),
    xp(t)
  );
}
function Cp(e) {
  return B(e) && e.type === `Collection`;
}
function wp(e, t) {
  return Cp(t) && of(t.data) ? Kf(t.data) : t;
}
function Tp(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, wp) + n;
}
function Ep(e) {
  let { activeLocale: t } = Fr();
  return SD.get(e, t).use();
}
function Dp(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(ft(e) || B(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function Op(e) {
  let t = l(e);
  return (
    n(() => {
      t.current = e;
    }, [e]),
    Pr((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function kp(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function Ap() {
  return new Set();
}
function jp(e) {
  let t = ba(Ap),
    n = ba(Ap);
  return (
    tc(() => () => kp(n, t)),
    c(() => () => kp(n, t), []),
    c(() => {
      kp(n, t);
    }, [e]),
    l({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function Mp(e, t, n) {
  return j.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function Np(e) {
  for (let [t, n] of Object.entries(e)) if (K.matchMedia(n).matches) return t;
}
function Pp(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && K.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function Fp(e, n, r = !0) {
  let i = t(YS),
    a = Io(),
    o = pa(),
    u = ro() && (!a || o),
    d = l(u ? (Np(n) ?? e) : e),
    f = l(r && i ? e : d.current),
    p = us(),
    m = xe(),
    h = s(
      (e) => {
        if (e !== d.current || e !== f.current) {
          let t = function () {
            ((d.current = f.current = e),
              k(() => {
                p();
              }));
          };
          a
            ? t()
            : m(() => {
                t();
              });
        }
      },
      [m, p, a]
    );
  return (
    tS(() => {
      if (a) {
        if (o) {
          h(Np(n) ?? e);
          return;
        }
        h(e);
      }
    }, [e, o, a, n, h]),
    tS(() => {
      !r || i !== !0 || h(d.current);
    }, []),
    c(() => {
      if (!u || o) return;
      let e = [];
      for (let [t, r] of Object.entries(n)) {
        let n = K.matchMedia(r),
          i = (e) => {
            e.matches && h(t);
          };
        (Ip(n, i), e.push([n, i]));
      }
      return () => e.forEach(([e, t]) => Lp(e, t));
    }, [o, n, h, u]),
    [d.current, f.current]
  );
}
function Ip(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function Lp(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function Rp(e) {
  setTimeout(e, 1);
}
function zp(e) {
  let t = new Set(),
    n = Pp(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (Bp(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (e_ ? K.requestIdleCallback : Rp)(() => {
    document.querySelector(CD)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (Bp(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    Vp(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function Bp(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function Vp(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function Hp() {
  let e = Ht(),
    { activeLocale: t } = Fr(),
    n = C(
      () =>
        wr(e, {
          currentRoutePath: e?.path,
          currentRoutePathLocalized: e?.pathLocalized,
          currentPathVariables: e?.pathVariables,
          preserveQueryParams: !1,
          relative: !1,
          siteCanonicalURL: void 0,
          localeId: t?.id,
        }),
      [e, t?.id]
    );
  return j.useCallback(
    (e) => {
      if (!e) return;
      let t = `${n}-${e}`,
        r = wD.get(t);
      if (r) return r;
      let i = x();
      return (wD.set(t, i), i);
    },
    [n]
  );
}
function Up(e, t) {
  if (e[t]) return e[t];
  if (!(t in e)) return e.default;
}
function Wp(e, t) {
  if (Fo()) return;
  let n = j.useRef(!0),
    r = j.useRef(t);
  (tc((t, i) => {
    let a = t && !i;
    if (!n.current && a) {
      let t = Up(r.current, e);
      t && t();
    }
    n.current = a;
  }, []),
    j.useEffect(() => {
      if (n.current) {
        let t = Up(r.current, e);
        t && t();
      }
    }, [e]));
}
function Gp(e, t) {
  e !== !1 &&
    Le.render(() => {
      let e = document.documentElement.style;
      t ? e.setProperty(`overflow`, `hidden`) : e.removeProperty(`overflow`);
    });
}
function Kp({ blockDocumentScrolling: e = !0, dismissWithEsc: t = !1 } = {}) {
  let [n, r] = j.useState(!1),
    i = j.useCallback(
      async (t) => {
        (await In({ priority: `user-blocking`, continueAfter: `paint` }), k(() => r(t)), Gp(e, t));
      },
      [e]
    );
  return (
    j.useEffect(
      () => () => {
        In({ priority: `user-blocking`, continueAfter: `paint` }).then(() => {
          Gp(e, !1);
        });
      },
      [e]
    ),
    j.useEffect(() => {
      if (!t) return;
      let e = (e) => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), i(!1));
      };
      return (K.addEventListener(`keydown`, e), () => K.removeEventListener(`keydown`, e));
    }, [t, i]),
    [n, i]
  );
}
function qp(e) {
  return B(e) && TD in e && e.page !== void 0;
}
function Jp(e, t) {
  return `${e}-${t}`;
}
function Yp(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (V(r !== void 0, `nextVariant should be defined`), r);
}
function Xp(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function Zp(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function Qp(e, t) {
  return t[e] || `framer-v-${e}`;
}
function $p(e, t, n) {
  return e && n.has(e) ? e : t;
}
function em() {
  let e = l(),
    t = l(),
    n = s(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    c(
      () => () => {
        n();
      },
      [n]
    ),
    s(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n]
    )
  );
}
function tm() {
  let e = l(),
    n = l(!1),
    r = l(),
    i = t(MS);
  return (
    c(
      () => () => {
        (e.current?.(), (r.current = void 0), (e.current = void 0));
      },
      []
    ),
    s(
      (t, a) => {
        if (!a?.current || n.current) {
          t();
          return;
        }
        if (((r.current = t), e.current)) return;
        let o = !1;
        e.current = Js(i, `undefined`, a.current, null, (e) => {
          ((n.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), n.current && r.current?.());
              })));
        });
      },
      [i]
    )
  );
}
function nm(e) {
  let t = em(),
    n = tm();
  return s(
    (r, i = !1) => {
      if ($g) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function rm() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (OD = () => {
        (e(), (t = void 0));
      }));
  });
}
function im(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (DD = rm()));
}
function am() {
  (performance.mark(`click-received-listener`), (DD = void 0), OD?.(), (OD = void 0));
}
function om(e = !1) {
  c(() => {
    e &&
      (document.addEventListener(`pointerup`, im, !0),
      document.__proto__.addEventListener.call(document, `click`, am, !0));
  }, [e]);
}
function sm({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: o = {},
  ref: c,
}) {
  let u = us(),
    d = lu(),
    f = ba(() => new Set(i)),
    { yieldOnTap: p } = h_();
  om(p);
  let m = nm(c),
    h = l({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: $p(e, t, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    g = s((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = h.current,
        o = $p(e, a, f),
        s = Zp(i?.[o], t, n, !1, r);
      return [o, s ? Jp(o, s) : void 0];
    }, []),
    _ = s(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = g(r);
        if (o === e && s === t) return;
        (a && (h.current.isError = !1),
          (h.current.baseVariant = o || n),
          (h.current.gestureVariant = s));
        let c = p && h.current.isPressedHasUpdated;
        (c &&
          DD &&
          (performance.mark(`wait-for-tap-start`),
          await DD,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await In({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: l,
          isPressed: d,
          isHoveredHasUpdated: f,
          isPressedHasUpdated: _,
        } = h.current;
        if (l || f || d || _) {
          k(u);
          return;
        }
        m(() => k(u), i);
      },
      [g, u, m, p]
    ),
    v = s(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        let r = t !== h.current.isPressed,
          i = e !== h.current.isHovered;
        (e !== void 0 && (h.current.isHovered = e),
          t !== void 0 && (h.current.isPressed = t),
          n !== void 0 && (h.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = h.current;
        ((h.current.isPressedHasUpdated = r),
          (h.current.isHoveredHasUpdated = i),
          _(a, o, s, a, !1));
      },
      [_]
    ),
    y = s(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = h.current;
        _(i, a, n, e === ED ? Yp(r || [], i || n) : e, t, !0);
      },
      [_]
    ),
    b = s(() => {
      let { baseVariant: e } = h.current;
      ((h.current.loadedBaseVariant[e] = !0), m(() => k(u), !0));
    }, [u, m]);
  if (e !== h.current.lastVariant) {
    let [t, n] = g(e);
    ((h.current.lastVariant = t),
      (t !== h.current.baseVariant || n !== h.current.gestureVariant) &&
        ((h.current.baseVariant = t), (h.current.gestureVariant = n)));
  }
  let {
      baseVariant: x,
      gestureVariant: S,
      defaultVariant: w,
      enabledGestures: T,
      isHovered: E,
      isPressed: D,
      isError: O,
      loadedBaseVariant: ee,
    } = h.current,
    A = Mp(h.current.baseVariant, h.current.gestureVariant, a);
  return C(() => {
    let e = [];
    x !== w && e.push(x);
    let t = T?.[x]?.loading,
      n = !O && !d && !!t && !ee[x],
      r = n ? Jp(x, `loading`) : S;
    r && e.push(r);
    let i = T?.[x],
      a = { onMouseEnter: () => v({ isHovered: !0 }), onMouseLeave: () => v({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => v({ isPressed: !0 }),
          onTapCancel: () => v({ isPressed: !1 }),
          onTap: () => v({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: x,
        gestureVariant: r,
        isLoading: n,
        transition: Xp(h.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: A,
        gestureHandlers: a,
        classNames: Kc(Qp(x, o), Zp(i, E, D, n, O)),
      }
    );
  }, [x, S, E, D, ee, A, y, w, T, v, b, o]);
}
function cm(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!Vl()) return r(e);
  let a = lm(e, r),
    o = !1;
  function s(r, s) {
    let { disableCustomCode: c } = h_(),
      l = Wl();
    if (c) return _(e, { ...r, ref: s });
    if (Ql(t, l?.scopeId, l?.level, i ?? !1))
      return a.status === `success`
        ? _(Sv.Provider, {
            value: n,
            children: _(Hl, {
              getErrorMessage: Yl.bind(null, t, n),
              fallback: _(e, { ...r, ref: s }),
              children: _(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (Bl(a.error), Bl(Yl(t, n)), zl(a.error), !0)), _(e, { ...r, ref: s }));
    if (a.status === `success`)
      return _(Sv.Provider, { value: n, children: _(a.Component, { ...r, ref: s }) });
    throw a.error;
  }
  return j.forwardRef(s);
}
function lm(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function um(e) {
  let t = [];
  return (
    p.forEach(e, (e) => {
      y(e) && e.type === u ? t.push(...um(e.props.children)) : e && t.push(e);
    }),
    t
  );
}
function dm(e, t, n) {
  let r = Math.floor(e / n),
    i = r * n,
    a = 0;
  for (let n = 0; n < t.length; n++) {
    let { end: r } = t[n];
    if (((a = n), r + i > e)) break;
  }
  return a + r * t.length;
}
function fm(e, t, n, r) {
  if (t.length === 0) return 0;
  let i = t[t.length - 1].end + n,
    a = r ?? e + (t[0]?.end ?? 0),
    o = dm(e, t, i) + 1,
    s = 0,
    c = !1;
  for (; !c; ) {
    let { start: e, end: n } = t[Pe(0, t.length, o)],
      r = Math.floor(o / t.length) * i;
    ((s = e + r), n + r > a ? (c = !0) : o++);
  }
  return s;
}
function pm(e, t, n, r, i) {
  if (t.length === 0) return 0;
  let a = t[t.length - 1].end + n,
    o = r ?? e - (i ?? 0),
    s = dm(e, t, a),
    c = e,
    l = !1;
  for (; !l; ) {
    let { start: r, end: u } = t[Pe(0, t.length, s)],
      d = u - r,
      f = r + Math.floor(s / t.length) * a;
    o <= f + n || f >= e
      ? ((c = f), s--)
      : o <= f
        ? ((c = f), (l = !0))
        : (((i && d > i) || (c === e && o >= f)) && (c = f), (l = !0));
  }
  return c;
}
function mm() {
  let e = t(kD);
  return (Om(!!e, `useTicker must be used within a Ticker component`), e);
}
function hm() {
  let e = t(AD);
  return (Om(!!e, `useTickerItem must be used within a TickerItem`), e);
}
function gm(e, t) {
  return (t?.offsetWidth ?? M.innerWidth) - (e.offsetLeft + e.offsetWidth);
}
function _m(e, t) {
  return e === `y` ? ND : t === `ltr` ? MD : PD;
}
function vm({
  children: e,
  offset: t,
  axis: n,
  listSize: r = 0,
  numItems: i = 0,
  itemIndex: a,
  cloneIndex: o,
  bounds: s,
  alignItems: c,
  reproject: l = !0,
  size: u = `auto`,
  safeMargin: d,
}) {
  let { start: f, end: p } = s,
    { visibleLength: m, direction: h, inset: g } = mm(),
    { sign: v } = _m(n, h),
    y = F(() => {
      if (!l) return 0;
      let e = t.get();
      if ((!f && !p) || !r) return 0;
      if (e * v + s.end <= -g - d) return r * v;
      if (d > 0) {
        let t = m - d - g;
        if (e * v + s.start >= t) return -r * v;
      }
      return 0;
    }),
    b = F(() => {
      let e = t.get(),
        n = y.get();
      return (!f && !p) || !r ? 0 : e * v + f + n * v;
    }),
    x =
      o === void 0
        ? { "aria-hidden": !1, "aria-posinset": a + 1, "aria-setsize": i }
        : { "aria-hidden": !0 },
    S = u === `fill`,
    C = c === `stretch` ? `100%` : `fit-content`,
    w = {
      className: o === void 0 ? `ticker-item` : `clone-item`,
      style: {
        flexGrow: 0,
        flexShrink: 0,
        position: `relative`,
        flexBasis: u === `fill` ? `100%` : void 0,
        display: S ? `grid` : void 0,
        gridTemplateColumns: S ? `1fr` : void 0,
        gridTemplateRows: S ? `1fr` : void 0,
        minWidth: S ? 0 : void 0,
        minHeight: S ? 0 : void 0,
        height: n === `x` ? C : void 0,
        width: n === `y` ? C : void 0,
        x: n === `x` ? y : 0,
        y: n === `y` ? y : 0,
      },
      ...x,
    };
  return _(AD.Provider, {
    value: { start: f, end: p, offset: b, projection: y, itemIndex: a, cloneIndex: o, props: w },
    children: u === `manual` ? e : _(ym, { children: e }),
  });
}
function ym({ children: e }) {
  let { props: t } = hm();
  return _(P.li, { ...t, children: e });
}
function bm(e, t, n, r, i) {
  let a = l(!1);
  c(() => {
    let o = e.current;
    if (!o) return;
    let s = !1,
      c = new AbortController(),
      l = { signal: c.signal },
      u = { ...l, capture: !0 },
      d = t === `x` ? `scrollLeft` : `scrollTop`,
      f = t === `x` ? `offsetLeft` : `offsetTop`,
      p = t === `x` ? `ArrowLeft` : `ArrowUp`,
      m = t === `x` ? `ArrowRight` : `ArrowDown`,
      h = [],
      g = 0,
      _ = () => {
        let e = h[g];
        e &&
          (e.focus({ preventScroll: !0 }),
          n.set(-e[f]),
          (o[d] = 0),
          Le.render(() => {
            o[d] = 0;
          }));
      },
      v = (e) => {
        if (e.key === `Tab`) {
          (e.preventDefault(), x());
          let t = Array.from(
            document.querySelectorAll(
              `a, button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`
            )
          ).filter(Sm);
          t.sort(xm);
          let n = t[e.shiftKey ? 0 : t.length - 1],
            r = e.shiftKey ? t.length - 1 : 0;
          if (o.contains(n)) {
            t[r].focus();
            return;
          } else {
            let n = t.indexOf(h[g]),
              r = e.shiftKey ? -1 : 1;
            for (let e = n; e < t.length && e >= 0; e += r) {
              let n = t[e];
              if (!o.contains(n)) {
                n.focus();
                return;
              }
            }
          }
          return;
        } else e.key === p ? g-- : e.key === m && g++;
        ((g = Pe(0, h.length, g)), _());
      },
      y = () => {
        a.current ||
          ((h = Array.from(
            o.querySelectorAll(
              `.ticker-item a, .ticker-item button, .ticker-item input, .ticker-item textarea, .ticker-item select, .ticker-item [tabindex]:not([tabindex="-1"]), .ticker-item [contenteditable="true"]`
            )
          ).filter(Sm)),
          (g = 0),
          h.length &&
            (i(!0),
            (a.current = !0),
            _(),
            M.addEventListener(`focus`, b, u),
            M.addEventListener(`blur`, b, u),
            o.addEventListener(`keydown`, v, l)));
      },
      b = (e) => {
        (!e.target || !(e.target instanceof HTMLElement) || !o.contains(e.target)) && x();
      },
      x = () => {
        a.current &&
          ((a.current = !1),
          i(!1),
          r.set(n.get()),
          M.removeEventListener(`focus`, b),
          M.removeEventListener(`blur`, b),
          o.removeEventListener(`keydown`, v));
      },
      S = (e) => {
        let { target: t } = e;
        Sm(t) && (a.current || y());
      },
      C = () => {
        s || ((s = !0), o.addEventListener(`focus`, S, u), M.addEventListener(`pointermove`, w, l));
      },
      w = () => {
        s &&
          ((s = !1),
          o.removeEventListener(`focus`, S, !0),
          M.removeEventListener(`pointermove`, w, l));
      };
    return (
      M.addEventListener(`keydown`, C, l),
      o.addEventListener(
        `pointerdown`,
        (e) => {
          let t = e.target.closest(`[aria-hidden="true"]`);
          t && t.removeAttribute(`aria-hidden`);
        },
        l
      ),
      o.addEventListener(
        `scroll`,
        () => {
          ((o.scrollLeft = 0), (o.scrollTop = 0));
        },
        l
      ),
      () => {
        (c.abort(), x());
      }
    );
  }, []);
}
function xm(e, t) {
  return e.tabIndex >= 1 && t.tabIndex >= 1
    ? e.tabIndex - t.tabIndex
    : e.tabIndex >= 1 && t.tabIndex <= 0
      ? -1
      : t.tabIndex >= 1 && e.tabIndex <= 0
        ? 1
        : 0;
}
function Sm(e) {
  return e instanceof HTMLElement;
}
function Cm(e) {
  return e.end - e.start;
}
function wm(e) {
  return e[e.length - 1].end - e[0].start;
}
function Tm(e, t, n) {
  let r = wm(t),
    i = Math.max(...t.map(Cm)),
    a = 0,
    o = 0;
  for (; o < e; ) ((o = (r + n) * (a + 1) - i), a++);
  return Math.max(a - 1, 0);
}
function Em(
  {
    items: e,
    velocity: t = 50,
    hoverFactor: n = 1,
    gap: r = 10,
    axis: a = `x`,
    align: o = `center`,
    offset: c,
    isStatic: u = !1,
    itemSize: d = `auto`,
    overflow: f = !1,
    loop: p = !0,
    children: m,
    as: h = `div`,
    snap: g,
    safeMargin: v = 0,
    fade: y = 0,
    fadeTransition: b,
    pageTransition: x,
    ...S
  },
  w
) {
  let T = l(null),
    E = _e(w, T),
    D = l(null),
    [O, ee] = i({
      direction: `ltr`,
      visibleLength: 0,
      inset: 0,
      totalItemLength: 0,
      containerLength: 0,
      itemPositions: [],
      isMeasured: !1,
      maxInset: null,
    }),
    k = FD[o] || o,
    { sign: A } = _m(a, O.direction);
  if (u) {
    let t = be(0);
    return _(kD.Provider, {
      value: { ...O, gap: r, clampOffset: ye, offset: t, renderedOffset: t },
      children: _(Dm, {
        containerProps: S,
        containerRef: E,
        children: m,
        gap: r,
        axis: a,
        alignItems: k,
        offset: t,
        renderedOffset: t,
        items: e,
        itemSize: d,
        state: O,
        overflow: f,
        safeMargin: v,
        isStatic: !0,
        as: h,
        fade: y,
        sign: A,
      }),
    });
  }
  let [j, te] = i(!1),
    ne = be(1),
    N = be(0);
  c ??= N;
  let re = F(() =>
      O.direction === `rtl` && a === `x`
        ? Pe(O.totalItemLength + r + O.inset, O.inset, c.get())
        : Pe(-O.totalItemLength - r - O.inset, -O.inset, c.get())
    ),
    P = be(0),
    ie = j ? P : p ? re : c,
    ae = st(T, { margin: `100px` }),
    oe = se(),
    le = ae && oe,
    ue = Ye(),
    de = () => {
      if (!T.current || !D.current) return;
      let e = M.getComputedStyle(T.current).direction,
        { measureItem: t, lengthProp: n, viewportLengthProp: r, getCumulativeInset: i } = _m(a, e),
        o = a === `x` ? `paddingLeft` : `paddingTop`,
        s = a === `x` ? `paddingRight` : `paddingBottom`,
        c = T.current,
        l = D.current.querySelectorAll(`.ticker-item`);
      if (!l.length) return;
      let u = !1,
        d = [];
      for (let e = 0; e < l.length; e++) {
        let n = t(l[e], c);
        d.push(n);
        let r = O.itemPositions[e];
        (!r || n.start !== r.start || n.end !== r.end) && (u = !0);
      }
      let m = Math.min(c[n], M[r]),
        h = f ? M[r] : m;
      v > 0 && (h += v * 2);
      let g = wm(d),
        _ = M.getComputedStyle(c),
        y = parseInt(_[o] ?? 0),
        b = parseInt(_[s] ?? 0),
        x = f ? i(l[0]) : y,
        S = p === !1 ? Math.max(0, g - m + y + b) : null;
      (h !== O.visibleLength ||
        g !== O.totalItemLength ||
        x !== O.inset ||
        O.itemPositions.length !== d.length ||
        u) &&
        ee({
          direction: e,
          visibleLength: h,
          itemPositions: d,
          totalItemLength: g,
          inset: x,
          containerLength: m,
          maxInset: S,
          isMeasured: !0,
        });
    };
  ce(() => {
    if (!le || !T.current) return;
    de();
    let e = f ? he(de) : void 0,
      t = he(T.current, de);
    return () => {
      (e?.(), t());
    };
  }, [e, le, f]);
  let pe = O.totalItemLength > 0;
  fe(
    pe && le && c === N && !ue
      ? (e, n) => {
          let r = (n / 1e3) * (t * A * ne.get());
          c.set(c.get() - r);
        }
      : ye
  );
  let me = C(
      () => (!pe || !O.visibleLength ? 0 : Tm(O.visibleLength, O.itemPositions, r)),
      [pe, O]
    ),
    ge = O.totalItemLength === 0 ? 0 : (O.totalItemLength + r) * (me + 1),
    ve = [];
  if (p)
    for (let t = 0; t < me; t++) {
      let n = [];
      e.forEach((i, o) => {
        let s = O.itemPositions[o],
          c = (O.totalItemLength + r) * (t + 1),
          l = s ? { start: s.start + c, end: s.end + c } : LD;
        n.push(
          _(
            vm,
            {
              offset: ie,
              axis: a,
              listSize: ge,
              itemIndex: o,
              cloneIndex: o,
              bounds: l,
              alignItems: k,
              size: d,
              safeMargin: v,
              numItems: e.length,
              children: i,
            },
            `clone-${t}-${o}`
          )
        );
      });
      let i = `ticker-group-${t}`;
      ve.push(_(Xe, { id: i, children: n }, i));
    }
  bm(T, a, P, c, te);
  let xe = s((e) => (O.maxInset === null ? e : Re(-O.maxInset, 0, e)), [O.maxInset]);
  return _(kD.Provider, {
    value: { ...O, gap: r, clampOffset: xe, offset: c, renderedOffset: ie },
    children: _(Dm, {
      containerProps: S,
      children: m,
      containerRef: E,
      listRef: D,
      gap: r,
      axis: a,
      alignItems: k,
      isMeasured: pe,
      isInView: le,
      offset: c,
      renderedOffset: ie,
      items: e,
      itemSize: d,
      clonedItems: ve,
      clampOffset: xe,
      snap: g,
      safeMargin: v,
      onPointerEnter: () => {
        Fe(ne, n);
      },
      onPointerLeave: () => {
        Fe(ne, 1);
      },
      totalListSize: ge,
      state: O,
      overflow: f,
      loop: p,
      as: h,
      fade: y,
      sign: A,
      fadeTransition: b,
      pageTransition: x,
    }),
  });
}
function Dm({
  children: e,
  containerProps: t,
  containerRef: n,
  listRef: r,
  gap: i,
  axis: a,
  alignItems: o,
  isMeasured: s,
  isInView: c,
  isStatic: u,
  items: d,
  offset: f,
  clonedItems: p,
  clampOffset: m,
  renderedOffset: h,
  onPointerEnter: g,
  onPointerLeave: v,
  totalListSize: y,
  itemSize: b,
  overflow: x,
  state: S,
  safeMargin: w,
  snap: E,
  loop: D,
  as: ee,
  fade: k,
  sign: A,
  fadeTransition: j = BD,
  pageTransition: te,
}) {
  let M = C(() => P.create(ee), [ee]),
    ne = {},
    { maxInset: N } = S;
  N !== null &&
    (ne =
      a === `x`
        ? A > 0
          ? { left: N * -1, right: 0 }
          : { right: N, left: 0 }
        : { top: N * -1, bottom: 0 });
  let {
      drag: re,
      _dragX: ie,
      _dragY: ae,
      dragMomentum: oe = !1,
      onDragEnd: se,
      onPointerDown: ce,
      ...le
    } = t,
    ue = a === `x` ? ie : ae,
    de = l(null),
    fe = () => {
      de.current &&= (de.current.stop(), null);
    };
  !se &&
    re &&
    ue &&
    ((ce = () => {
      (ue.jump(f.get()), fe());
    }),
    (se = (e, { velocity: t }) => {
      let n = f.get();
      (fe(),
        Le.postRender(() => {
          let e = n + t[a] * (E ? 0.3 : 0.8);
          if (E)
            if (t[a] < 0) e = -fm(-n, S.itemPositions, i, -e);
            else if (t[a] > 0) e = -pm(-n, S.itemPositions, i, -e, S.containerLength);
            else {
              let t = -fm(-n, S.itemPositions, i, -n),
                r = -pm(-n, S.itemPositions, i, -n, S.containerLength);
              e = Math.abs(n - t) < Math.abs(n - r) ? t : r;
            }
          let r = D
            ? {}
            : A > 0
              ? { max: 0, min: ne[a === `x` ? `left` : `top`] }
              : { min: 0, max: ne.right };
          de.current = Fe(
            ue,
            m(e * A) * A,
            E
              ? te
              : {
                  type: `inertia`,
                  velocity: t[a],
                  modifyTarget: () => e,
                  bounceDamping: 40,
                  bounceStiffness: 400,
                  ...r,
                }
          );
        }));
    }));
  let pe = be(D ? 0 : 1),
    me = be(0),
    he = _m(a, S.direction),
    ge = typeof k == `number` ? `px` : ``,
    _e = F(
      () =>
        `linear-gradient(to ${he.direction}, rgba(0,0,0,${pe.get()}) 0px, black ${k}${ge}, black calc(100% - ${k}${ge}), rgba(0,0,0,${me.get()}) 100%)`
    ),
    ve = k ? { maskImage: _e, WebkitMaskImage: _e } : {},
    ye = l({ start: !0, end: !1 });
  return (
    Se(h, `change`, (e) => {
      if (N === null) return;
      let t = N * -1;
      ((e *= A),
        e < 0
          ? ye.current.start && (Fe(pe, 0, j), (ye.current.start = !1))
          : ye.current.start || (Fe(pe, 1, j), (ye.current.start = !0)),
        e > t
          ? ye.current.end && (Fe(me, 0, j), (ye.current.end = !1))
          : ye.current.end || (Fe(me, 1, j), (ye.current.end = !0)));
    }),
    T(O, {
      children: [
        _(M, {
          ...le,
          ref: n,
          style: {
            overflowX: !x && a === `x` ? `clip` : void 0,
            overflowY: !x && a === `y` ? `clip` : void 0,
            ...RD,
            ...t.style,
            ...ve,
          },
          onPointerEnter: g,
          onPointerLeave: v,
          drag: re,
          _dragX: ie,
          _dragY: ae,
          dragConstraints: ne,
          dragMomentum: oe,
          onPointerDown: ce,
          onDragEnd: se,
          children: T(P.ul, {
            ref: r,
            style: {
              ...zD,
              flexDirection: a === `x` ? `row` : `column`,
              gap: `${i}px`,
              x: a === `x` ? h : 0,
              y: a === `y` ? h : 0,
              opacity: s || u ? 1 : 0,
              alignItems: o,
              willChange: s && c ? `transform` : void 0,
              width: `100%`,
              height: `100%`,
              maxHeight: `100%`,
              maxWidth: `100%`,
            },
            children: [
              d.map((e, t) =>
                _(
                  vm,
                  {
                    axis: a,
                    offset: h,
                    listSize: y,
                    itemIndex: t,
                    bounds: S.itemPositions[t] ?? LD,
                    alignItems: o,
                    size: b,
                    reproject: D,
                    safeMargin: w,
                    numItems: d.length,
                    children: e,
                  },
                  `original-` + t
                )
              ),
              p || null,
            ],
          }),
        }),
        ` `,
        e,
      ],
    })
  );
}
function Om(e, t) {
  if (!e) throw Error(t);
}
function km(e, t) {
  if (U(e)) return e;
  if (!R(e)) return;
  let n = e.split(` `),
    r = n[0],
    i = n[1] ?? n[0];
  if (t === `x` && i) return Am(parseInt(i));
  if (t === `y` && r) return Am(parseInt(r));
}
function Am(e) {
  return Number.isNaN(e) ? void 0 : e;
}
function jm(e, t, n) {
  let r = [],
    i = _l(e, t, (e) => r.unshift(e, e));
  if (n) {
    let e = i[i.length - 1];
    if (!z(e)) return YD;
    (i.push(e + 1), r.push(-1));
  }
  let a = i[0];
  return z(a)
    ? a <= 1
      ? { inputRange: i, outputRange: r }
      : { inputRange: [0, Math.max(a - 1, 0), ...i], outputRange: [-1, -1, ...r] }
    : YD;
}
function Mm(e) {
  return e.weight !== void 0 && e.style !== void 0;
}
function Nm(e, t) {
  let n = t === `normal` ? `Regular` : `Italic`;
  return e === 400 ? n : t === `normal` ? `${iO[e]}` : `${iO[e]} ${n}`;
}
function Pm() {
  return M === void 0 ? {} : oO || ((oO = Fm()), oO);
}
function Fm() {
  let e = M.location,
    t = M?.bootstrap?.services;
  if (t) return t;
  let n;
  try {
    if (((n = M.top.location.origin), (t = M.top?.bootstrap?.services), t)) return t;
  } catch {}
  if (n && n !== e.origin) throw Error(`Unexpectedly embedded by ${n} (expected ${e.origin})`);
  if (e.origin.endsWith(`framer.com`) || e.origin.endsWith(`framer.dev`))
    throw Error(`ServiceMap data was not provided in document`);
  try {
    let n =
      new URLSearchParams(e.search).get(`services`) ||
      new URLSearchParams(e.hash.substring(1)).get(`services`);
    n && (t = JSON.parse(n));
  } catch {}
  if (t && typeof t == `object` && t.api) return t;
  throw Error(`ServiceMap requested but not available`);
}
function Im(e) {
  return e.key + e.extension;
}
function Lm(e) {
  return `${Pm().userContent}/assets/${e}`;
}
function Rm(e) {
  return Lm(Im(e));
}
function zm(e, t) {
  return t ? `${e} ${sO}` : e;
}
function Bm(e, t) {
  switch (t) {
    case `custom`:
      throw Error(`Custom fonts are not supported`);
    default:
      return zm(e.name, e.isVariable);
  }
}
function Vm(e) {
  return !!(e && Array.isArray(e));
}
function Hm(e) {
  if (!e || !Array.isArray(e)) return;
  let t = [];
  for (let n of e)
    Wm(n) &&
      t.push({
        tag: n.tag,
        name: n.name,
        minValue: n.minValue,
        maxValue: n.maxValue,
        defaultValue: n.defaultValue,
      });
  return t;
}
function Um(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`coverage` in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
  );
}
function Wm(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`name` in e && typeof e.name != `string`) ||
    !(`minValue` in e) ||
    typeof e.minValue != `number` ||
    !(`maxValue` in e) ||
    typeof e.maxValue != `number` ||
    !(`defaultValue` in e) ||
    typeof e.defaultValue != `number`
  );
}
function Gm(e) {
  return uO[qm(e)];
}
function Km(e, t) {
  let n = e?.find((e) => e.tag === `wght`)?.defaultValue;
  return n !== void 0 && n >= 1 && n <= 1e3 ? n : (t ?? Gm(`variable`) ?? 500);
}
function qm(e) {
  return e.toLowerCase().replace(/\s+/gu, `-`);
}
function Jm(e) {
  return (
    (e = e.toLowerCase()),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`) ? `italic` : `normal`
  );
}
function Ym(e, t) {
  return { ...Xm(e, t), ...Zm(e, t) };
}
function Xm(e, t) {
  if (t.length === 0)
    return { variantBold: void 0, variantBoldItalic: void 0, variantItalic: void 0 };
  let { weight: n, style: r } = e,
    i = new Map(),
    a = new Map();
  for (let r of t)
    r.isVariable === e.isVariable &&
      (i.set(`${r.weight}-${r.style}`, r),
      !(r.weight <= n) && (a.has(r.style) || a.set(r.style, r)));
  let o = a.get(r),
    s = a.get(`italic`),
    c = e.weight;
  c <= 300
    ? ((o = i.get(`400-${r}`) ?? o), (s = i.get(`400-italic`) ?? s))
    : c <= 500
      ? ((o = i.get(`700-${r}`) ?? o), (s = i.get(`700-italic`) ?? s))
      : ((o = i.get(`900-${r}`) ?? o), (s = i.get(`900-italic`) ?? s));
  let l = i.get(`${n}-italic`);
  return { variantBold: o, variantItalic: l, variantBoldItalic: s };
}
function Zm(e, t) {
  if (t.length === 0) return { variantVariable: void 0, variantVariableItalic: void 0 };
  let n, r, i, a;
  for (let o of t) {
    if (!o.isVariable) continue;
    let t = o.weight === e.weight,
      s = o.weight === 400;
    o.style === `normal`
      ? t
        ? (n = o)
        : s
          ? (i = o)
          : (i ||= o)
      : o.style === `italic` && (t ? (r = o) : s ? (a = o) : (a ||= o));
  }
  return { variantVariable: n ?? i, variantVariableItalic: r ?? a };
}
function Qm(e) {
  return !!e.variationAxes;
}
function $m(e) {
  return eh(e) || th(e);
}
function eh(e) {
  return e.startsWith(pO);
}
function th(e) {
  return e.startsWith(fO);
}
function nh(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r) {
      if (r.owner !== t.owner && r.file === t.file)
        return { existingFont: r, index: n, projectDuplicate: !0 };
      if (r && r.selector === t.selector)
        return { existingFont: r, index: n, projectDuplicate: !1 };
    }
  }
}
function rh(e) {
  let { font: t } = e,
    n = t.fontFamily,
    r = Array.isArray(t.variationAxes);
  if (r && n.toLowerCase().includes(`variable`)) return n;
  let i = r ? sO : t.fontSubFamily.trim();
  return i === `` ? n : `${n} ${i}`;
}
function ih({ fontFamily: e, fontSubFamily: t, variationAxes: n, faceDescriptors: r }) {
  let i = t.trim() || `Regular`,
    a = i.toLocaleLowerCase().includes(`variable`),
    o = Hm(n) && !a ? `Variable ${i}` : i,
    s = `normal`,
    c = 400;
  return (
    r && ((c = r.weight), (s = r.italic || r.oblique ? `italic` : `normal`)),
    { family: e, variant: o, weight: c, style: s }
  );
}
function ah(e) {
  if (!(!e.weight || !e.style))
    return { weight: e.weight, style: e.style, isVariable: Qm(e), selector: e.selector };
}
function oh(e) {
  let t = e.fonts.map((e) => ah(e)).filter((e) => e !== void 0);
  for (let n of e.fonts) {
    let e = ah(n);
    if (!e) continue;
    let r = Ym(e, t);
    ((n.selectorVariable = r.variantVariable?.selector),
      (n.selectorVariableItalic = r.variantVariableItalic?.selector),
      (n.selectorBold = r.variantBold?.selector),
      (n.selectorBoldItalic = r.variantBoldItalic?.selector),
      (n.selectorItalic = r.variantItalic?.selector));
  }
}
function sh(e) {
  return e.ownerTypes.includes(`team`) ? `team` : `project`;
}
async function ch(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-K5SKTAAF.CZxcCTRI.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-IUGQ52HX.BuI8H2c9.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
async function lh(e) {
  switch (e) {
    case `google`:
      return (await import(`./google-VWNPUY4E.Ca8jaXaC.mjs`)).default;
    case `fontshare`:
      return (await import(`./fontshare-W3A7DJCR.C8qXpYAM.mjs`)).default;
    case `framer`:
      return (await import(`./framer-font-OKYJFYGY.QImhcF43.mjs`)).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
function uh(e) {
  return e
    .split(`,`)
    .map((e) => e.trim().toLowerCase())
    .filter(dh);
}
function dh(e) {
  return hO.includes(e);
}
function fh(e) {
  let t = {
      serif: `serif`,
      sans: `sans-serif`,
      slab: `slab`,
      display: `display`,
      handwritten: `handwriting`,
      script: `handwriting`,
    },
    n = uh(e)[0];
  return n && t[n];
}
function ph(e) {
  let t = {
    serif: `serif`,
    "sans-serif": `sans-serif`,
    display: `display`,
    handwriting: `handwriting`,
    monospace: `monospace`,
  };
  if (e) return t[e];
}
function mh(e, t) {
  return e.reduce((e, n) => ((e[t(n)] = n), e), {});
}
async function hh(e, t, n = 0) {
  let { family: r, url: i, stretch: a, unicodeRange: o } = e,
    s = e.weight,
    c = e.style || `normal`,
    l = `${r}-${c}-${s}-${i}`;
  if (!jO.has(l) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: R(s) ? s : s?.toString(),
        style: c,
        stretch: a,
        unicodeRange: o,
      }),
      d = u
        .load()
        .then(() => (t.fonts.add(u), gh(r, c, s)))
        .catch((l) => {
          if (l.name !== `NetworkError`) throw l;
          if (n < kO) return hh(e, t, n + 1);
          throw new AO(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: r, style: c, weight: s, url: i, stretch: a, unicodeRange: o })}`
          );
        });
    jO.set(l, d);
  }
  await jO.get(l);
}
async function gh(e, t, n) {
  let r = `${e}-${t}-${n}`;
  if (!MO.has(r)) {
    let i = new DO.default(e, { style: t, weight: n }).load(null, OO);
    MO.set(r, i);
  }
  try {
    await MO.get(r);
  } catch {
    throw new AO(
      `Failed to check if font is ready (${OO}ms timeout exceeded): ${JSON.stringify({ family: e, style: t, weight: n })}`
    );
  }
}
function _h(e) {
  try {
    if (e === `framer`) return vh(PO) ? PO : void 0;
    {
      let t = (async () => {
        switch (e) {
          case `google`:
            return (await import(`./google-KLGLJHZI.BIQmlR2Q.mjs`)).default;
          case `fontshare`:
            return (await import(`./fontshare-HGQXVJG5.B7TiDnKA.mjs`)).default;
          default:
            H(e);
        }
      })();
      return vh(t) ? t : void 0;
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
function vh(e) {
  return B(e) && Object.values(e).every(bh);
}
function yh(e) {
  return B(e) && R(e.tag);
}
function bh(e) {
  return Array.isArray(e) && e.every(yh);
}
function xh(e, t, n, r = LO) {
  let [i, a] = j.useState(e),
    [o, s] = j.useState(e);
  return (
    t && e !== o && (s(e), a(e)),
    [
      i,
      a,
      j.useCallback(
        (e) => {
          Yr(e) ||
            (t && a(r(e)),
            n &&
              j.startTransition(() => {
                n(e);
              }));
        },
        [r, n, t]
      ),
    ]
  );
}
function Sh(e, t) {
  return !e || t !== `date` ? e : e.includes(`T`) ? e.split(`T`)[0] : e;
}
function Ch() {
  return _(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `8`,
    height: `8`,
    viewBox: `0 0 8 8`,
    "aria-hidden": `true`,
    children: _(`path`, {
      d: `m1.5 6.5 5-5M6.5 6.5l-5-5`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
    }),
  });
}
function wh(e) {
  return e === void 0 ? `__undefined__` : z(e) ? String(e) : e === `` ? `__empty__` : e;
}
function Th(e, t) {
  c(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (M.addEventListener(`keyup`, n), () => M.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function Eh(e, t, n, r) {
  let i = M.innerHeight - r,
    a = Math.min(M.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function Dh(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new M.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function Oh() {
  return document.getElementById(Nw) ?? document.getElementById(Mw) ?? document.body;
}
function kh(e, t) {
  return z(e) ? e : (t ?? 0);
}
function Ah(e) {
  return kh(e?.paddingTop, e?.padding) + kh(e?.paddingBottom, e?.padding);
}
function jh(e) {
  return kh(e?.paddingLeft, e?.padding) + kh(e?.paddingRight, e?.padding);
}
function Mh(e, t) {
  if (!e || !t || !t.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - jh(e)}px)`,
      srcSet: Ho(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function Nh(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in ek)) continue;
    let n = ek[t],
      r = e[t];
    if (!(!z(n) || !z(r)) && n !== r) return !0;
  }
  return !1;
}
function Ph(e) {
  let t = ne.get(e.current);
  if (!t) return !1;
  if (Nh(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (Nh(e.latestValues)) return !0;
  return !1;
}
function Fh(e) {
  return m(function ({ lightbox: n, lightboxClassName: r, onClick: a, ...o }, d) {
    let f = t(De),
      p = t(UD),
      m = !!p,
      h = l(null),
      g = d ?? h,
      v = l(),
      y = C(() => Mh(n, o.background), [n, o.background]),
      [b, x] = i(!1),
      [w, E] = i(),
      D = s(() => {
        if (n) {
          if (b) {
            k(() => {
              x(!0);
            });
            return;
          }
          Le.read(() => {
            if (!g.current) return;
            let e = getComputedStyle(g.current),
              t =
                g.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(g.current, `::after`)
                  : void 0,
              r = g.current.offsetWidth ?? 1,
              i = g.current.offsetHeight ?? 1,
              a = Ph(g) || m ? { duration: 0 } : n.transition;
            k(() => {
              (E({
                borderRadius: e.borderRadius,
                aspectRatio: r / (i || 1),
                borderTop: t?.borderTopWidth,
                borderRight: t?.borderRightWidth,
                borderBottom: t?.borderBottomWidth,
                borderLeft: t?.borderLeftWidth,
                borderStyle: t?.borderStyle,
                borderColor: t?.borderColor,
                transition: a,
                imageRendering: e.imageRendering,
                filter: e.filter,
              }),
                x(!0),
                p?.stop());
            });
          });
        }
      }, [n, b, g, p?.stop, m]),
      ee = w?.aspectRatio ?? 1,
      A = Op(() => {
        if (!n || !y || !y.src) return;
        let e = v.current?.[y.src];
        if (e) return e;
        let t = Eh(ee, n.maxWidth, jh(n), Ah(n)),
          r = Dh(y, { width: t, height: t * ee });
        return ((v.current = { [y.src]: r }), r);
      }),
      j = s(
        async (e) => {
          (a?.(e), !(b || !n || !y) && (await A(), D()));
        },
        [a, D, b, y, n, A]
      ),
      M = s((e) => {
        (e?.stopPropagation(),
          k(() => {
            x(!1);
          }));
      }, []);
    (Th(b, M),
      c(() => {
        if (!n) return;
        let e;
        function t() {
          e = setTimeout(() => {
            A();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = g.current;
        return (
          i?.addEventListener(`mouseenter`, t),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, A),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, t),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, A));
          }
        );
      }, [A, g, n]));
    let ne = te(),
      N = w?.transition ?? o.transition ?? f.transition,
      re = w?.borderRadius,
      ie = w?.imageRendering,
      ae = w?.filter,
      oe = w?.borderTop,
      se = w?.borderRight,
      ce = w?.borderBottom,
      le = w?.borderLeft,
      ue = w?.borderStyle,
      de = w?.borderColor,
      fe = !!(oe || se || ce || le || ue || de),
      pe = fe
        ? {
            "--border-top-width": oe,
            "--border-right-width": se,
            "--border-bottom-width": ce,
            "--border-left-width": le,
            "--border-style": ue,
            "--border-color": de,
          }
        : void 0,
      me = { [vw]: o.id },
      he = kh(n?.paddingTop, n?.padding),
      ge = kh(n?.paddingBottom, n?.padding),
      F = kh(n?.paddingLeft, n?.padding),
      _e = kh(n?.paddingRight, n?.padding),
      ve = w?.borderRadius ? { ...o.style, borderRadius: w.borderRadius } : o.style,
      ye = b ? (o.layoutDependency ? `${o.layoutDependency}-open` : `open`) : o.layoutDependency,
      be = m && b ? void 0 : (o.layoutId ?? (n ? ne : void 0));
    return T(O, {
      children: [
        _(e, {
          ...o,
          style: ve,
          onClick: j,
          layoutId: be,
          ref: g,
          layoutDependency: ye,
          transition: N,
        }),
        _(Ge, {
          onExitComplete: () => {
            k(() => {
              (E(void 0), p?.start());
            });
          },
          children:
            b &&
            n &&
            y &&
            _(
              u,
              {
                children: S(
                  T(O, {
                    children: [
                      _(P.div, {
                        ...me,
                        className: r,
                        onClick: M,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: n.zIndex,
                          backgroundColor: n.backdrop ?? `transparent`,
                        },
                        transition: N,
                        initial: tk,
                        animate: nk,
                        exit: tk,
                      }),
                      _(P.div, {
                        ...me,
                        className: r,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${he}px ${_e}px ${ge}px ${F}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: n.zIndex,
                        },
                        children: _(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: ee,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: n.maxWidth,
                          },
                          children: _(P.div, {
                            layoutId: be,
                            transition: N,
                            onClick: D,
                            className: `framer-lightbox-container`,
                            "data-border": fe,
                            style: {
                              aspectRatio: ee,
                              borderRadius: re,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: ie,
                              filter: ae,
                              ...pe,
                            },
                            children: _(Zo, { image: y, alt: y.alt, draggable: o.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  Oh()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function Ih(e, t) {
  return ak && !t
    ? Document.parseHTMLUnsafe(e)
    : ((ik ??= new DOMParser()), ik.parseFromString(e, t ?? `text/html`));
}
function Lh(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function Rh(e, t, n, r) {
  return e.replace(ok, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = mu(u.replace(/&amp;/gu, `&`));
    if (!d || !d.target) return e;
    let f = t(d.target);
    if (!qp(f) || !qp(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Kt(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = gu(u);
    if (!_ || R(_)) return e;
    Fu(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(Iw, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = Vn(m, v)), i + o + `"${Lh(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function zh(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function Bh(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function Vh(e, t, n) {
  let r = l([]);
  zh(r.current, e) ||
    ((r.current = e),
    IO.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || J.current() !== J.canvas || (e > 0 && gs(n.current));
    }));
}
function Hh() {
  return { current: null };
}
async function Uh(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, `current`, {
      get() {
        return n;
      },
      set(e) {
        if (((n = e), e === null)) {
          t.abort();
          return;
        }
        r(e);
      },
      configurable: !0,
    }),
    i
  );
}
function Wh(e) {
  return e in uk;
}
function Gh(e, t) {
  let n = {};
  for (let r in e) {
    if (!Wh(r)) continue;
    let i = e[r],
      a = uk[r];
    ft(i) || ft(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function Kh(e, t = `character`, n, r, i) {
  if (r) {
    let t = Hh();
    return (n.add(t), _(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r;
        return T(
          u,
          {
            children: [
              _(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match(dk)?.map((e, t) => {
                  let r = Hh();
                  return (n.add(r), _(`span`, { ref: r, style: i, children: e }, e + t));
                }),
              }),
              a ? null : ` `,
            ],
          },
          e + t + a
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r,
          o = Hh();
        return (
          n.add(o),
          T(
            u,
            { children: [_(`span`, { ref: o, style: i, children: e }), a ? null : ` `] },
            e + t + a
          )
        );
      });
    }
    case `element`:
    default:
      return e;
  }
}
function qh(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      H(t);
  }
}
function Jh(e) {
  let t = [];
  return (
    z(e.x) && t.push(`translateX(${e.x}px)`),
    z(e.y) && t.push(`translateY(${e.y}px)`),
    z(e.scale) && t.push(`scale(${e.scale})`),
    z(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    z(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    z(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    z(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    z(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function Yh(e, t, n, r) {
  if (!n || !n.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Jh(n.effect),
              };
        case `line`:
        case `word`:
        case `character`:
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Jh(n.effect),
              };
      }
    default:
      H(i);
  }
}
function Xh(e, t, n) {
  let r = ba(() => new Set()),
    i = Fo(),
    a = n || !i,
    o = ue(),
    s = l({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  s.current.effect = e;
  let u = e?.trigger ?? `onMount`,
    d = e?.target,
    f = e?.threshold;
  c(() => {
    if (!a || n) return;
    s.current.hasMounted = !0;
    function e() {
      let { effect: e } = s.current;
      if (
        !a ||
        !e ||
        (e?.repeat !== !0 && s.current.hasAnimatedOnce) ||
        (e?.type === `appear` && s.current.isAnimating)
      )
        return;
      Object.assign(s.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: i, tokenization: a } = e,
            c = { current: void 0 };
          return (
            Qh(
              a,
              e.effect,
              r,
              t,
              n,
              i,
              o,
              () => {
                Object.assign(s.current, { isAnimating: !1 });
              },
              c
            ),
            () => c.current?.()
          );
        }
        default:
          H(t);
      }
    }
    switch (u) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? Ee(n, e, { amount: f ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = d?.ref?.current;
        return t
          ? Ee(t, e, {
              amount: f ?? 0,
              root: document,
              margin: d?.offset ? `${d.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        H(u);
    }
  }, [a, r, n, t, d, f, u]);
  let p = !!e,
    m = e ? qh(e) : void 0;
  return C(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !p)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = s.current,
          c = Yh(a, n || Zh(e, t, i), s.current.effect, o);
        return {
          text: (e) => Kh(e, m, r, o, c),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = Hh();
            return (r.add(t), { ref: t, style: { ...e, ...c } });
          },
        };
      },
      play: () => {
        let { effect: e } = s.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            Qh(m, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            H(t);
        }
      },
    }),
    [a, p, r, n, m]
  );
}
function Zh(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function Qh(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = Gh(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await $h(n, u);
      if (
        e === null ||
        (Fe(e, l, { ...r, restDelta: 0.001, delay: pe(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        Fe(e, o ? { opacity: t.opacity } : t, {
          ...r,
          restDelta: 0.001,
          delay: pe(r?.delay ?? 0, { startDelay: i }),
        });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await Uh(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (Le.read(() => {
          ((e = eg(n)),
            e.length !== 0 &&
              Le.update(() => {
                let t = e.map((e, t) =>
                  Fe(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          Fe(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      H(e);
  }
}
async function $h(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await Uh(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function eg(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function tg(e) {
  let t = {};
  for (let n in e) (ve(n) || Vx(n)) && (t[n] = e[n]);
  return t;
}
function ng(e) {
  return e.type === u;
}
function rg(e) {
  return e.type === `br`;
}
function ig(e, t, n, r, i = {}, a, o = ng(e) ? -1 : 0) {
  let s = p.toArray(e.props.children);
  ft(n) || (s = s.slice(0, 1));
  let c = !0;
  s = s.map((e) => {
    if (((!y(e) || !rg(e)) && (c = !1), y(e))) return ig(e, t, n, r, i, a, o + 1);
    let s = ft(n) ? e : n;
    return R(s) && a ? a.text(s) : s;
  });
  let { "data-preset-tag": l, ...u } = e.props;
  if (R(e.type) || ke(e.type)) {
    let n = oe(e.type) || e.type,
      d = l || n,
      f = R(d) ? t?.[d] : void 0;
    ((u.className = Kc(`framer-text`, u.className, f)),
      a && o === 0 && !c && Object.assign(u, a.props(u.style)));
    let m = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      h = t?.anchor;
    if (m && h) {
      let e = ag(s, i);
      u.id = e;
      let t = Kc(`framer-text`, h),
        n = _(`a`, { href: `#${e}`, className: t, children: s });
      ((u.style = { ...(u.style ?? {}), scrollMarginTop: r }), (s = [n]));
    }
    d === `ol` &&
      (u.style = {
        ...(u.style ?? {}),
        [Ub]: sg(u.start ?? 1, p.count(u.children), u.style?.[Hb] ?? ``),
      });
  }
  return w(e, u, ...s);
}
function ag(e, t) {
  let n = Ar(e.map(og).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function og(e) {
  return R(e) || z(e)
    ? e.toString()
    : y(e)
      ? og(e.props.children)
      : Array.isArray(e)
        ? e.map(og).join(``)
        : ``;
}
function sg(e, t, n) {
  return vo(Number(e) || 1, t, n);
}
function cg(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = ki(n.x, n.y),
    i = Ky(ki(0.5, 0.5), r),
    a = Y.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: ki.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  V(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !ki.isEqual(e, s) && !ki.isEqual(e, c));
  V(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = Ky.intersection(i, Ky(s, c)),
    f = Ky.intersection(i, Ky(l, u));
  return (V(d && f, `linearGradientLine: Must have a start and end point.`), Ky(d, f));
}
function lg(e, t) {
  let n = cg(e.angle),
    r = Ts(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = Ky.pointAtPercentDistance(n, i),
    s = Ky.pointAtPercentDistance(n, a),
    c = ot([i, a], [0, 1]);
  return {
    id: `id${t}g${_S.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: dS.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function ug(e, t) {
  return {
    id: `id${t}g${yS.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: Ts(e).map((t) => ({
      color: t.value,
      alpha: dS.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function dg(e) {
  if (!R(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return z(parseFloat(t));
}
function fg(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return z(n) ? n : 50;
}
function pg(e) {
  return dg(e) ? fg(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function mg(e) {
  return dg(e) ? fg(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function hg(e, t, n, r) {
  if (((e = uy.get(e, `#09F`)), !$x.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
  let i = e.pixelWidth,
    a = e.pixelHeight,
    o,
    { fit: s } = e,
    c = 1,
    l = 1,
    u = 0,
    d = 0;
  if (s === `fill` || s === `fit` || s === `tile` || !s) {
    let n = 1,
      f = 1,
      p = i / a,
      m = t.height * p,
      h = t.width / p,
      g = m / t.width,
      _ = h / t.height;
    if (s === `tile`) {
      ((e.backgroundSize ??= 1),
        (c = Math.round(e.backgroundSize * (i / 2))),
        (l = Math.round(e.backgroundSize * (a / 2))));
      let n = t.x ?? 0,
        s = t.y ?? 0,
        f = 0,
        p = 0;
      (r && ((f = n), (p = s)),
        (u = (t.width - c) * pg(e.positionX) + f),
        (d = (t.height - l) * mg(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * mg(e.positionY)))
        : ((n = g), (u = (1 - g) * pg(e.positionX))),
        (o = `translate(${u}, ${d}) scale(${n}, ${f})`));
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? ``,
    transform: o,
    width: c,
    height: l,
    offsetX: u,
    offsetY: d,
  };
}
function gg(e) {
  return e.startsWith(`data:${yk}`);
}
function _g(e, t) {
  if (/^\w+:/u.test(e) && !gg(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = J.current() === J.export;
  return Kx.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function vg(e) {
  try {
    let t = Ih(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function yg(e, t) {
  xg(e, bg(t));
}
function bg(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function xg(e, t) {
  (Sg(e, t),
    Array.from(e.children).forEach((e) => {
      xg(e, t);
    }));
}
function Sg(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function Cg(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (Ek[t[2]] || 1));
}
function wg(e) {
  let t = Cg(e.getAttribute(`width`)),
    n = Cg(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function Tg(e) {
  return e.indexOf(`image`) >= 0;
}
function Eg(e) {
  return e.indexOf(`var(--`) >= 0;
}
function Dg(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function Og(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? K,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = Tk.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && Ia(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    U(s) &&
    U(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l && l.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function kg({ height: e, width: t, children: n }) {
  let r = Ag();
  if (!r || !n) return n;
  let { props: i } = r;
  return _(P.li, {
    ...i,
    style: { ...i.style, width: t ?? `fit-content`, height: e ?? `fit-content` },
    children: n,
  });
}
function Ag() {
  try {
    return hm();
  } catch {
    return;
  }
}
function jg(e) {
  return e > jk ? `lazy` : void 0;
}
function Mg(e, t, n) {
  let r = Fg(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function Ng(e) {
  return e ? (e.fonts ?? ci()) : ci();
}
function Pg(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : Fg(e);
}
function Fg(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    Ig(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(Lg) })
      : t.fonts.push(Lg(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function Ig(e) {
  return Mk in e;
}
function Lg(e) {
  let t = Rg(e) || zg(e) ? e : Bg(e);
  return zg(t) ? t : Vg(t);
}
function Rg(e) {
  return `source` in e;
}
function zg(e) {
  return `cssFamilyName` in e;
}
function Bg(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function Vg(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${sO}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function Hg(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function Ug(e) {
  return e.loader;
}
function Wg(e, t, n) {
  let r = Ug(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var Gg,
  Kg,
  qg,
  Jg,
  Yg,
  Xg,
  Zg,
  Qg,
  $g,
  e_,
  t_,
  n_,
  r_,
  i_,
  a_,
  o_,
  s_,
  c_,
  l_,
  u_,
  d_,
  f_,
  p_,
  m_,
  h_,
  g_,
  __,
  v_,
  y_,
  b_,
  x_,
  S_,
  C_,
  w_,
  T_,
  E_,
  D_,
  O_,
  k_,
  A_,
  j_,
  M_,
  N_,
  P_,
  K,
  F_,
  I_,
  L_,
  R_,
  z_,
  B_,
  V_,
  H_,
  U_,
  W_,
  G_,
  K_,
  q_,
  J_,
  Y_,
  X_,
  Z_,
  Q_,
  $_,
  ev,
  tv,
  nv,
  rv,
  iv,
  av,
  ov,
  sv,
  cv,
  lv,
  uv,
  dv,
  fv,
  pv,
  mv,
  hv,
  gv,
  _v,
  vv,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  ay,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  q,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  J,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  Wy,
  Gy,
  Ky,
  Y,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  X,
  Db,
  Ob,
  kb,
  Ab,
  Z,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  ZT,
  QT,
  $T,
  eE,
  Q,
  tE,
  nE,
  rE,
  iE,
  aE,
  oE,
  sE,
  cE,
  lE,
  uE,
  dE,
  $,
  fE,
  pE,
  mE,
  hE,
  gE,
  _E,
  vE,
  yE,
  bE,
  xE,
  SE,
  CE,
  wE,
  TE,
  EE,
  DE,
  OE,
  kE,
  AE,
  jE,
  ME,
  NE,
  PE,
  FE,
  IE,
  LE,
  RE,
  zE,
  BE,
  VE,
  HE,
  UE,
  WE,
  GE,
  KE,
  qE,
  JE,
  YE,
  XE,
  ZE,
  QE,
  $E,
  eD,
  tD,
  nD,
  rD,
  iD,
  aD,
  oD,
  sD,
  cD,
  lD,
  uD,
  dD,
  fD,
  pD,
  mD,
  hD,
  gD,
  _D,
  vD,
  yD,
  bD,
  xD,
  SD,
  CD,
  wD,
  TD,
  ED,
  DD,
  OD,
  kD,
  AD,
  jD,
  MD,
  ND,
  PD,
  FD,
  ID,
  LD,
  RD,
  zD,
  BD,
  VD,
  HD,
  UD,
  WD,
  GD,
  KD,
  qD,
  JD,
  YD,
  XD,
  ZD,
  QD,
  $D,
  eO,
  tO,
  nO,
  rO,
  iO,
  aO,
  oO,
  sO,
  cO,
  lO,
  uO,
  dO,
  fO,
  pO,
  mO,
  hO,
  gO,
  _O,
  vO,
  yO,
  bO,
  xO,
  SO,
  CO,
  wO,
  TO,
  EO,
  DO,
  OO,
  kO,
  AO,
  jO,
  MO,
  NO,
  PO,
  FO,
  IO,
  LO,
  RO,
  zO,
  BO,
  VO,
  HO,
  UO,
  WO,
  GO,
  KO,
  qO,
  JO,
  YO,
  XO,
  ZO,
  QO,
  $O,
  ek,
  tk,
  nk,
  rk,
  ik,
  ak,
  ok,
  sk,
  ck,
  lk,
  uk,
  dk,
  fk,
  pk,
  mk,
  hk,
  gk,
  _k,
  vk,
  yk,
  bk,
  xk,
  Sk,
  Ck,
  wk,
  Tk,
  Ek,
  Dk,
  Ok,
  kk,
  Ak,
  jk,
  Mk,
  Nk = e(() => {
    (o(),
    //! Credit to Astro | MIT License
    /**
     * @license Emotion v11.0.0
     * MIT License
     *
     * Copyright (c) Emotion team and other contributors
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     */
    /*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
      rt(),
      Ie(),
      A(),
      D(),
      h(),
      (Gg = et({
        "../../../node_modules/hsluv/dist/hsluv.cjs"(e) {
          (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.Hsluv = void 0));
          var t = class e {
            constructor() {
              ((this.hex = `#000000`),
                (this.rgb_r = 0),
                (this.rgb_g = 0),
                (this.rgb_b = 0),
                (this.xyz_x = 0),
                (this.xyz_y = 0),
                (this.xyz_z = 0),
                (this.luv_l = 0),
                (this.luv_u = 0),
                (this.luv_v = 0),
                (this.lch_l = 0),
                (this.lch_c = 0),
                (this.lch_h = 0),
                (this.hsluv_h = 0),
                (this.hsluv_s = 0),
                (this.hsluv_l = 0),
                (this.hpluv_h = 0),
                (this.hpluv_p = 0),
                (this.hpluv_l = 0),
                (this.r0s = 0),
                (this.r0i = 0),
                (this.r1s = 0),
                (this.r1i = 0),
                (this.g0s = 0),
                (this.g0i = 0),
                (this.g1s = 0),
                (this.g1i = 0),
                (this.b0s = 0),
                (this.b0i = 0),
                (this.b1s = 0),
                (this.b1i = 0));
            }
            static fromLinear(e) {
              return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
            }
            static toLinear(e) {
              return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
            }
            static yToL(t) {
              return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
            }
            static lToY(t) {
              return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
            }
            static rgbChannelToHex(t) {
              let n = Math.round(t * 255),
                r = n % 16,
                i = ((n - r) / 16) | 0;
              return e.hexChars.charAt(i) + e.hexChars.charAt(r);
            }
            static hexToRgbChannel(t, n) {
              let r = e.hexChars.indexOf(t.charAt(n)),
                i = e.hexChars.indexOf(t.charAt(n + 1));
              return (r * 16 + i) / 255;
            }
            static distanceFromOriginAngle(e, t, n) {
              let r = t / (Math.sin(n) - e * Math.cos(n));
              return r < 0 ? 1 / 0 : r;
            }
            static distanceFromOrigin(e, t) {
              return Math.abs(t) / Math.sqrt(e ** 2 + 1);
            }
            static min6(e, t, n, r, i, a) {
              return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
            }
            rgbToHex() {
              ((this.hex = `#`),
                (this.hex += e.rgbChannelToHex(this.rgb_r)),
                (this.hex += e.rgbChannelToHex(this.rgb_g)),
                (this.hex += e.rgbChannelToHex(this.rgb_b)));
            }
            hexToRgb() {
              ((this.hex = this.hex.toLowerCase()),
                (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
                (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
                (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
            }
            xyzToRgb() {
              ((this.rgb_r = e.fromLinear(
                e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
              )),
                (this.rgb_g = e.fromLinear(
                  e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z
                )),
                (this.rgb_b = e.fromLinear(
                  e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z
                )));
            }
            rgbToXyz() {
              let t = e.toLinear(this.rgb_r),
                n = e.toLinear(this.rgb_g),
                r = e.toLinear(this.rgb_b);
              ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
                (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
                (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
            }
            xyzToLuv() {
              let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
                n = 4 * this.xyz_x,
                r = 9 * this.xyz_y;
              (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
                (this.luv_l = e.yToL(this.xyz_y)),
                this.luv_l === 0
                  ? ((this.luv_u = 0), (this.luv_v = 0))
                  : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                    (this.luv_v = 13 * this.luv_l * (r - e.refV))));
            }
            luvToXyz() {
              if (this.luv_l === 0) {
                ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
                return;
              }
              let t = this.luv_u / (13 * this.luv_l) + e.refU,
                n = this.luv_v / (13 * this.luv_l) + e.refV;
              ((this.xyz_y = e.lToY(this.luv_l)),
                (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
                (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
            }
            luvToLch() {
              ((this.lch_l = this.luv_l),
                (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
                this.lch_c < 1e-8
                  ? (this.lch_h = 0)
                  : ((this.lch_h = (Math.atan2(this.luv_v, this.luv_u) * 180) / Math.PI),
                    this.lch_h < 0 && (this.lch_h = 360 + this.lch_h)));
            }
            lchToLuv() {
              let e = (this.lch_h / 180) * Math.PI;
              ((this.luv_l = this.lch_l),
                (this.luv_u = Math.cos(e) * this.lch_c),
                (this.luv_v = Math.sin(e) * this.lch_c));
            }
            calculateBoundingLines(t) {
              let n = (t + 16) ** 3 / 1560896,
                r = n > e.epsilon ? n : t / e.kappa,
                i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
                a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
                o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
                s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
                c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
                l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
                u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
                d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
                f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
              ((this.r0s = i / o),
                (this.r0i = (a * t) / o),
                (this.r1s = i / (o + 126452)),
                (this.r1i = ((a - 769860) * t) / (o + 126452)),
                (this.g0s = s / l),
                (this.g0i = (c * t) / l),
                (this.g1s = s / (l + 126452)),
                (this.g1i = ((c - 769860) * t) / (l + 126452)),
                (this.b0s = u / f),
                (this.b0i = (d * t) / f),
                (this.b1s = u / (f + 126452)),
                (this.b1i = ((d - 769860) * t) / (f + 126452)));
            }
            calcMaxChromaHpluv() {
              let t = e.distanceFromOrigin(this.r0s, this.r0i),
                n = e.distanceFromOrigin(this.r1s, this.r1i),
                r = e.distanceFromOrigin(this.g0s, this.g0i),
                i = e.distanceFromOrigin(this.g1s, this.g1i),
                a = e.distanceFromOrigin(this.b0s, this.b0i),
                o = e.distanceFromOrigin(this.b1s, this.b1i);
              return e.min6(t, n, r, i, a, o);
            }
            calcMaxChromaHsluv(t) {
              let n = (t / 360) * Math.PI * 2,
                r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
                i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
                a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
                o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
                s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
                c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
              return e.min6(r, i, a, o, s, c);
            }
            hsluvToLch() {
              (this.hsluv_l > 99.9999999
                ? ((this.lch_l = 100), (this.lch_c = 0))
                : this.hsluv_l < 1e-8
                  ? ((this.lch_l = 0), (this.lch_c = 0))
                  : ((this.lch_l = this.hsluv_l),
                    this.calculateBoundingLines(this.hsluv_l),
                    (this.lch_c = (this.calcMaxChromaHsluv(this.hsluv_h) / 100) * this.hsluv_s)),
                (this.lch_h = this.hsluv_h));
            }
            lchToHsluv() {
              if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
              else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHsluv(this.lch_h);
                ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
              }
              this.hsluv_h = this.lch_h;
            }
            hpluvToLch() {
              (this.hpluv_l > 99.9999999
                ? ((this.lch_l = 100), (this.lch_c = 0))
                : this.hpluv_l < 1e-8
                  ? ((this.lch_l = 0), (this.lch_c = 0))
                  : ((this.lch_l = this.hpluv_l),
                    this.calculateBoundingLines(this.hpluv_l),
                    (this.lch_c = (this.calcMaxChromaHpluv() / 100) * this.hpluv_p)),
                (this.lch_h = this.hpluv_h));
            }
            lchToHpluv() {
              if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
              else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHpluv();
                ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
              }
              this.hpluv_h = this.lch_h;
            }
            hsluvToRgb() {
              (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
            }
            hpluvToRgb() {
              (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
            }
            hsluvToHex() {
              (this.hsluvToRgb(), this.rgbToHex());
            }
            hpluvToHex() {
              (this.hpluvToRgb(), this.rgbToHex());
            }
            rgbToHsluv() {
              (this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHsluv());
            }
            rgbToHpluv() {
              (this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHpluv());
            }
            hexToHsluv() {
              (this.hexToRgb(), this.rgbToHsluv());
            }
            hexToHpluv() {
              (this.hexToRgb(), this.rgbToHpluv());
            }
          };
          ((e.Hsluv = t),
            (t.hexChars = `0123456789abcdef`),
            (t.refY = 1),
            (t.refU = 0.19783000664283),
            (t.refV = 0.46831999493879),
            (t.kappa = 903.2962962),
            (t.epsilon = 0.0088564516),
            (t.m_r0 = 3.240969941904521),
            (t.m_r1 = -1.537383177570093),
            (t.m_r2 = -0.498610760293),
            (t.m_g0 = -0.96924363628087),
            (t.m_g1 = 1.87596750150772),
            (t.m_g2 = 0.041555057407175),
            (t.m_b0 = 0.055630079696993),
            (t.m_b1 = -0.20397695888897),
            (t.m_b2 = 1.056971514242878));
        },
      })),
      (Kg = et({
        "../../../node_modules/eventemitter3/index.js"(e, t) {
          var n = Object.prototype.hasOwnProperty,
            r = `~`;
          function i() {}
          Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
          function a(e, t, n) {
            ((this.fn = e), (this.context = t), (this.once = n || !1));
          }
          function o(e, t, n, i, o) {
            if (typeof n != `function`) throw TypeError(`The listener must be a function`);
            var s = new a(n, i || e, o),
              c = r ? r + t : t;
            return (
              e._events[c]
                ? e._events[c].fn
                  ? (e._events[c] = [e._events[c], s])
                  : e._events[c].push(s)
                : ((e._events[c] = s), e._eventsCount++),
              e
            );
          }
          function s(e, t) {
            --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
          }
          function c() {
            ((this._events = new i()), (this._eventsCount = 0));
          }
          ((c.prototype.eventNames = function () {
            var e = [],
              t,
              i;
            if (this._eventsCount === 0) return e;
            for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
          }),
            (c.prototype.listeners = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              if (!n) return [];
              if (n.fn) return [n.fn];
              for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
              return o;
            }),
            (c.prototype.listenerCount = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              return n ? (n.fn ? 1 : n.length) : 0;
            }),
            (c.prototype.emit = function (e, t, n, i, a, o) {
              var s = r ? r + e : e;
              if (!this._events[s]) return !1;
              var c = this._events[s],
                l = arguments.length,
                u,
                d;
              if (c.fn) {
                switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                  case 1:
                    return (c.fn.call(c.context), !0);
                  case 2:
                    return (c.fn.call(c.context, t), !0);
                  case 3:
                    return (c.fn.call(c.context, t, n), !0);
                  case 4:
                    return (c.fn.call(c.context, t, n, i), !0);
                  case 5:
                    return (c.fn.call(c.context, t, n, i, a), !0);
                  case 6:
                    return (c.fn.call(c.context, t, n, i, a, o), !0);
                }
                for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
                c.fn.apply(c.context, u);
              } else {
                var f = c.length,
                  p;
                for (d = 0; d < f; d++)
                  switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                    case 1:
                      c[d].fn.call(c[d].context);
                      break;
                    case 2:
                      c[d].fn.call(c[d].context, t);
                      break;
                    case 3:
                      c[d].fn.call(c[d].context, t, n);
                      break;
                    case 4:
                      c[d].fn.call(c[d].context, t, n, i);
                      break;
                    default:
                      if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                      c[d].fn.apply(c[d].context, u);
                  }
              }
              return !0;
            }),
            (c.prototype.on = function (e, t, n) {
              return o(this, e, t, n, !1);
            }),
            (c.prototype.once = function (e, t, n) {
              return o(this, e, t, n, !0);
            }),
            (c.prototype.removeListener = function (e, t, n, i) {
              var a = r ? r + e : e;
              if (!this._events[a]) return this;
              if (!t) return (s(this, a), this);
              var o = this._events[a];
              if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
              else {
                for (var c = 0, l = [], u = o.length; c < u; c++)
                  (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
                l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
              }
              return this;
            }),
            (c.prototype.removeAllListeners = function (e) {
              var t;
              return (
                e
                  ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                  : ((this._events = new i()), (this._eventsCount = 0)),
                this
              );
            }),
            (c.prototype.off = c.prototype.removeListener),
            (c.prototype.addListener = c.prototype.on),
            (c.prefixed = r),
            (c.EventEmitter = c),
            t !== void 0 && (t.exports = c));
        },
      })),
      (qg = et({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
          e
        ) {
          var t = typeof Symbol == `function` && Symbol.for,
            n = t ? Symbol.for(`react.element`) : 60103,
            r = t ? Symbol.for(`react.portal`) : 60106,
            i = t ? Symbol.for(`react.fragment`) : 60107,
            a = t ? Symbol.for(`react.strict_mode`) : 60108,
            o = t ? Symbol.for(`react.profiler`) : 60114,
            s = t ? Symbol.for(`react.provider`) : 60109,
            c = t ? Symbol.for(`react.context`) : 60110,
            l = t ? Symbol.for(`react.async_mode`) : 60111,
            u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
            d = t ? Symbol.for(`react.forward_ref`) : 60112,
            f = t ? Symbol.for(`react.suspense`) : 60113,
            p = t ? Symbol.for(`react.suspense_list`) : 60120,
            m = t ? Symbol.for(`react.memo`) : 60115,
            h = t ? Symbol.for(`react.lazy`) : 60116,
            g = t ? Symbol.for(`react.block`) : 60121,
            _ = t ? Symbol.for(`react.fundamental`) : 60117,
            v = t ? Symbol.for(`react.responder`) : 60118,
            y = t ? Symbol.for(`react.scope`) : 60119;
          function b(e) {
            if (typeof e == `object` && e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  switch (((e = e.type), e)) {
                    case l:
                    case u:
                    case i:
                    case o:
                    case a:
                    case f:
                      return e;
                    default:
                      switch (((e &&= e.$$typeof), e)) {
                        case c:
                        case d:
                        case h:
                        case m:
                        case s:
                          return e;
                        default:
                          return t;
                      }
                  }
                case r:
                  return t;
              }
            }
          }
          function x(e) {
            return b(e) === u;
          }
          ((e.AsyncMode = l),
            (e.ConcurrentMode = u),
            (e.ContextConsumer = c),
            (e.ContextProvider = s),
            (e.Element = n),
            (e.ForwardRef = d),
            (e.Fragment = i),
            (e.Lazy = h),
            (e.Memo = m),
            (e.Portal = r),
            (e.Profiler = o),
            (e.StrictMode = a),
            (e.Suspense = f),
            (e.isAsyncMode = function (e) {
              return x(e) || b(e) === l;
            }),
            (e.isConcurrentMode = x),
            (e.isContextConsumer = function (e) {
              return b(e) === c;
            }),
            (e.isContextProvider = function (e) {
              return b(e) === s;
            }),
            (e.isElement = function (e) {
              return typeof e == `object` && !!e && e.$$typeof === n;
            }),
            (e.isForwardRef = function (e) {
              return b(e) === d;
            }),
            (e.isFragment = function (e) {
              return b(e) === i;
            }),
            (e.isLazy = function (e) {
              return b(e) === h;
            }),
            (e.isMemo = function (e) {
              return b(e) === m;
            }),
            (e.isPortal = function (e) {
              return b(e) === r;
            }),
            (e.isProfiler = function (e) {
              return b(e) === o;
            }),
            (e.isStrictMode = function (e) {
              return b(e) === a;
            }),
            (e.isSuspense = function (e) {
              return b(e) === f;
            }),
            (e.isValidElementType = function (e) {
              return (
                typeof e == `string` ||
                typeof e == `function` ||
                e === i ||
                e === u ||
                e === o ||
                e === a ||
                e === f ||
                e === p ||
                (typeof e == `object` &&
                  !!e &&
                  (e.$$typeof === h ||
                    e.$$typeof === m ||
                    e.$$typeof === s ||
                    e.$$typeof === c ||
                    e.$$typeof === d ||
                    e.$$typeof === _ ||
                    e.$$typeof === v ||
                    e.$$typeof === y ||
                    e.$$typeof === g))
              );
            }),
            (e.typeOf = b));
        },
      })),
      (Jg = et({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = qg();
        },
      })),
      (Yg = et({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = Jg(),
            r = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            i = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            a = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
            o = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            s = {};
          ((s[n.ForwardRef] = a), (s[n.Memo] = o));
          function c(e) {
            return n.isMemo(e) ? o : s[e.$$typeof] || r;
          }
          var l = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            m = Object.prototype;
          function h(e, t, n) {
            if (typeof t != `string`) {
              if (m) {
                var r = p(t);
                r && r !== m && h(e, r, n);
              }
              var a = u(t);
              d && (a = a.concat(d(t)));
              for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
                var _ = a[g];
                if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
                  var v = f(t, _);
                  try {
                    l(e, _, v);
                  } catch {}
                }
              }
            }
            return e;
          }
          t.exports = h;
        },
      })),
      (Xg = et({
        "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e, t) {
          (function () {
            function e(e, t) {
              document.addEventListener
                ? e.addEventListener(`scroll`, t, !1)
                : e.attachEvent(`scroll`, t);
            }
            function n(e) {
              document.body
                ? e()
                : document.addEventListener
                  ? document.addEventListener(`DOMContentLoaded`, function t() {
                      (document.removeEventListener(`DOMContentLoaded`, t), e());
                    })
                  : document.attachEvent(`onreadystatechange`, function t() {
                      (document.readyState == `interactive` || document.readyState == `complete`) &&
                        (document.detachEvent(`onreadystatechange`, t), e());
                    });
            }
            function r(e) {
              ((this.g = document.createElement(`div`)),
                this.g.setAttribute(`aria-hidden`, `true`),
                this.g.appendChild(document.createTextNode(e)),
                (this.h = document.createElement(`span`)),
                (this.i = document.createElement(`span`)),
                (this.m = document.createElement(`span`)),
                (this.j = document.createElement(`span`)),
                (this.l = -1),
                (this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`),
                this.h.appendChild(this.m),
                this.i.appendChild(this.j),
                this.g.appendChild(this.h),
                this.g.appendChild(this.i));
            }
            function i(e, t) {
              e.g.style.cssText =
                `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` +
                t +
                `;`;
            }
            function a(e) {
              var t = e.g.offsetWidth,
                n = t + 100;
              return (
                (e.j.style.width = n + `px`),
                (e.i.scrollLeft = n),
                (e.h.scrollLeft = e.h.scrollWidth + 100),
                e.l === t ? !1 : ((e.l = t), !0)
              );
            }
            function o(t, n) {
              function r() {
                var e = i;
                a(e) && e.g.parentNode !== null && n(e.l);
              }
              var i = t;
              (e(t.h, r), e(t.i, r), a(t));
            }
            function s(e, t, n) {
              ((t ||= {}),
                (n ||= M),
                (this.family = e),
                (this.style = t.style || `normal`),
                (this.weight = t.weight || `normal`),
                (this.stretch = t.stretch || `normal`),
                (this.context = n));
            }
            var c = null,
              l = null,
              u = null,
              d = null;
            function f(e) {
              return (
                l === null &&
                  (p(e) && /Apple/.test(M.navigator.vendor)
                    ? ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        M.navigator.userAgent
                      )),
                      (l = !!e && 603 > parseInt(e[1], 10)))
                    : (l = !1)),
                l
              );
            }
            function p(e) {
              return (d === null && (d = !!e.document.fonts), d);
            }
            function m(e, t) {
              var n = e.style,
                r = e.weight;
              if (u === null) {
                var i = document.createElement(`div`);
                try {
                  i.style.font = `condensed 100px sans-serif`;
                } catch {}
                u = i.style.font !== ``;
              }
              return [n, r, u ? e.stretch : ``, `100px`, t].join(` `);
            }
            ((s.prototype.load = function (e, t) {
              var a = this,
                s = e || `BESbswy`,
                l = 0,
                u = t || 3e3,
                d = new Date().getTime();
              return new Promise(function (e, t) {
                if (p(a.context) && !f(a.context)) {
                  var h = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - d >= u
                          ? t(Error(`` + u + `ms timeout exceeded`))
                          : a.context.document.fonts
                              .load(m(a, `"` + a.family + `"`), s)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    g = new Promise(function (e, t) {
                      l = setTimeout(function () {
                        t(Error(`` + u + `ms timeout exceeded`));
                      }, u);
                    });
                  Promise.race([g, h]).then(function () {
                    (clearTimeout(l), e(a));
                  }, t);
                } else
                  n(function () {
                    function n() {
                      var t;
                      ((t = (_ != -1 && v != -1) || (_ != -1 && y != -1) || (v != -1 && y != -1)) &&
                        ((t = _ != v && _ != y && v != y) ||
                          (c === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              M.navigator.userAgent
                            )),
                            (c =
                              !!t &&
                              (536 > parseInt(t[1], 10) ||
                                (parseInt(t[1], 10) === 536 && 11 >= parseInt(t[2], 10))))),
                          (t =
                            c &&
                            ((_ == b && v == b && y == b) ||
                              (_ == x && v == x && y == x) ||
                              (_ == S && v == S && y == S)))),
                        (t = !t)),
                        t &&
                          (C.parentNode !== null && C.parentNode.removeChild(C),
                          clearTimeout(l),
                          e(a)));
                    }
                    function f() {
                      if (new Date().getTime() - d >= u)
                        (C.parentNode !== null && C.parentNode.removeChild(C),
                          t(Error(`` + u + `ms timeout exceeded`)));
                      else {
                        var e = a.context.document.hidden;
                        ((!0 === e || e === void 0) &&
                          ((_ = p.g.offsetWidth),
                          (v = h.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          n()),
                          (l = setTimeout(f, 50)));
                      }
                    }
                    var p = new r(s),
                      h = new r(s),
                      g = new r(s),
                      _ = -1,
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = document.createElement(`div`);
                    ((C.dir = `ltr`),
                      i(p, m(a, `sans-serif`)),
                      i(h, m(a, `serif`)),
                      i(g, m(a, `monospace`)),
                      C.appendChild(p.g),
                      C.appendChild(h.g),
                      C.appendChild(g.g),
                      a.context.document.body.appendChild(C),
                      (b = p.g.offsetWidth),
                      (x = h.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      f(),
                      o(p, function (e) {
                        ((_ = e), n());
                      }),
                      i(p, m(a, `"` + a.family + `",sans-serif`)),
                      o(h, function (e) {
                        ((v = e), n());
                      }),
                      i(h, m(a, `"` + a.family + `",serif`)),
                      o(g, function (e) {
                        ((y = e), n());
                      }),
                      i(g, m(a, `"` + a.family + `",monospace`)));
                  });
              });
            }),
              typeof t == `object`
                ? (t.exports = s)
                : ((M.FontFaceObserver = s),
                  (M.FontFaceObserver.prototype.load = s.prototype.load)));
          })();
        },
      })),
      (Zg = () => {}),
      (Qg = M !== void 0),
      ($g = (() =>
        Qg &&
        (d.webdriver ||
          /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(d.userAgent)))()),
      (e_ = Qg && typeof M.requestIdleCallback == `function`),
      (t_ = (() => (e_ ? M.requestIdleCallback : setTimeout))()),
      (n_ = () => () => {}),
      (r_ = () => !0),
      (i_ = () => !1),
      (a_ = new Map()),
      (o_ = Qg ? void 0 : new Set()),
      (s_ = `preload`),
      (c_ = Object.keys),
      (l_ = `equals`),
      (u_ = (() => j.createContext({}))()),
      (d_ = (() => j.createContext({}))()),
      (f_ = []),
      (p_ = j.createContext(void 0)),
      (p_.displayName = `LibraryFeaturesContext`),
      (m_ = (() => p_.Provider)()),
      (h_ = () => j.useContext(p_) ?? {}),
      (g_ = `default`),
      (__ = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (v_ = class e {
        constructor(e, t) {
          (I(this, `resolver`, e),
            I(this, `cacheHash`, t),
            I(this, `promiseState`, __.Pending),
            I(this, `preloadPromise`),
            I(this, `value`),
            I(this, `reason`),
            I(this, `read`, () => {
              if (this.promiseState === __.Fulfilled) return this.value;
              throw this.promiseState === __.Rejected
                ? this.reason
                : Error(`Need to call preload() before read()`);
            }));
        }
        static is(t) {
          return t instanceof e;
        }
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        then(e, t) {
          return this.promiseState === __.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === __.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== __.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && o_ !== void 0 && o_.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = __.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = __.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && a_.has(this.cacheHash) ? a_.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!vt(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (y_ = -1),
      (b_ = -2),
      (x_ = -3),
      (S_ = -4),
      (C_ = -5),
      (w_ = -6),
      (T_ = -7),
      (E_ = 2 ** 32 - 1),
      (D_ = E_ - 1),
      (O_ = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (k_ = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (A_ = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (j_ = typeof Uint8Array.fromBase64 == `function`),
      (M_ = typeof process == `object` && process.versions?.node !== void 0),
      (N_ = j_ ? cn : M_ ? un : fn),
      (P_ = j_ ? ln : M_ ? dn : pn),
      (K = Qg
        ? M
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (F_ = 2),
      (I_ = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (L_ = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (z_ = class {
        constructor() {
          (I(this, `payload`, xn()), I(this, `isEmpty`, !0));
        }
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        toString() {
          if (!this.isEmpty)
            try {
              return gn(this.payload);
            } catch (e) {
              console.error(`Failed to serialize handover data.`, e);
              return;
            }
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (B_ = (() => (Qg ? void 0 : new z_()))()),
      (V_ = (() => L_.CollectionUtilsCache)()),
      (H_ = new WeakMap()),
      (U_ = a(void 0)),
      (W_ = class {
        constructor(e, t) {
          (I(this, `collectionId`, t),
            I(this, `module`),
            I(this, `cacheMap`, new Map()),
            (this.module = new v_(async () => {
              try {
                let t = await e();
                return (V(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(xt(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        callUtilsMethod(e, t, n) {
          let r = En(n),
            i = Dn(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (B_ !== void 0) {
              if (vt(e)) return e.then((e) => (B_.set(V_, i, e), e));
              B_.set(V_, i, e);
            }
            return e;
          }
          if (wn(V_, i)) {
            let e = Tn(V_, i);
            return (this.cacheMap.set(i, new v_(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = vt(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e](t, n)) : a?.[e](t, n);
          } catch (e) {
            (console.error(xt(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (B_ !== void 0 && B_.set(V_, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new v_(() =>
            s
              .then((e) => (B_ !== void 0 && B_.set(V_, i, e), e))
              .catch((e) => {
                console.error(xt(`Failed to call CollectionUtils method.`, e));
              })
          );
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
      }),
      (G_ = (() => (jn(K) ? K.scheduler : void 0))()),
      (K_ = (() => G_ && `yield` in G_)()),
      (q_ = (() => G_ && `postTask` in G_)()),
      (J_ = new Set()),
      (Y_ = !$g),
      (X_ = 46),
      (Z_ = 47),
      (Q_ = (e, t) => e.charCodeAt(t)),
      ($_ = (e, t) => e.lastIndexOf(t)),
      (ev = (e, t, n) => e.slice(t, n)),
      (tv = !1),
      (nv = `/`),
      (rv = (e) => e === Z_),
      (iv = new Set([`/404.html`, `/404`, `/404/`])),
      (av = RegExp(`:([a-z]\\w*)`, `gi`)),
      (ov = `framer_variant`),
      (sv = j.createContext({ global: void 0, routes: {} })),
      (cv = 10),
      (lv = 1e4),
      (uv = (e) => `--view-transition-${e}`),
      (dv = {
        circle: {
          makeKeyframe: (e, t) => {
            let { x: n, y: r } = nr(e);
            return t === `start`
              ? `clip-path: circle(0 at ${n}px ${r}px);`
              : `clip-path: circle(${Math.hypot(Math.max(n, M.innerWidth - n), Math.max(r, M.innerHeight - r))}px at ${n}px ${r}px);`;
          },
        },
        conic: {
          makeKeyframe: (e, t, n) => {
            let r = 0;
            return (
              ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
                (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
                (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
                (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
                (r = (e.sweepAngle / 360) * 100),
              `${uv(`conic-offset`)}: ${r}%;`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${uv(`conic-offset`)})`,
              r =
                (t === `exit` && e.angularDirection === `clockwise`) ||
                (t === `enter` && e.angularDirection === `counter-clockwise`),
              i = r ? `transparent` : `black`,
              a = r ? `black` : `transparent`,
              o = `conic-gradient(from `;
            return (
              (o += `${e.angle}deg at ${e.x} ${e.y}, `),
              (o += `${i} 0%, ${i} ${n}, `),
              (o += `${a} ${n}, ${a} 100%)`),
              `mask-image: ${o}; -webkit-mask-image: ${o};`
            );
          },
          makePropertyRules: () => `
        @property ${uv(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
        },
        inset: {
          makeKeyframe: (e, t) => {
            let { x: n, y: r } = nr(e),
              i = M.innerHeight - r,
              a = M.innerWidth - n;
            return t === `start`
              ? `clip-path: inset(${r}px ${a}px ${i}px ${n}px round ${e.round}px);`
              : `clip-path: inset(0 round 0);`;
          },
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = tr(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${uv(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${uv(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${uv(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = (t === `start` && n === `exit`) || (t === `end` && n === `enter`) ? 1 : 0;
            return `${uv(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${uv(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${uv(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (fv = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (pv = `view-transition-styles`),
      (mv = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (hv = () => {}),
      (_v = () => {
        (gv ||
          ((gv = document.createElement(`div`)),
          gv.setAttribute(`aria-live`, `assertive`),
          gv.setAttribute(`aria-atomic`, `true`),
          (gv.style.position = `absolute`),
          (gv.style.transform = `scale(0)`),
          document.body.append(gv)),
          setTimeout(() => {
            gv.textContent = document.title;
          }, 60));
      }),
      (vv = !0),
      (yv = (() => {
        if (d === void 0) return !1;
        let e = d.userAgent,
          t = e.indexOf(`Chrome/`),
          n = +e.slice(t + 7, e.indexOf(`.`, t));
        return n > 101 && n < 128;
      })()),
      (bv = (() => Qg && typeof M.navigation?.back == `function`)()),
      (xv = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (Sv = j.createContext(null)),
      (Cv = (() => {
        let e = a(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (wv = async () => {}),
      (Tv = { activeLocale: null, locales: [], setLocale: wv }),
      (Ev = (() => {
        let e = j.createContext(Tv);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (Dv = (() => {
        let e = j.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (Ov = new Set()),
      (kv = (() => {
        let e = a({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (Av = `__f_replay`),
      (jv = `__f_replay_ignore`),
      (Mv = () => Qg),
      (Nv =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (Pv = (e) => {
        e.target?.closest?.(`#main`) &&
          (Jr(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (Fv = !1),
      (Qv = [$r]),
      (Zv = [$r]),
      (Xv = [$r]),
      (Yv = [$r]),
      (Jv = [$r]),
      (qv = [$r]),
      (Kv = [$r]),
      (Gv = [$r]),
      (Wv = [$r]),
      (Uv = [$r]),
      (Hv = [$r]),
      (Vv = [$r]),
      (Bv = [$r]),
      (zv = [$r]),
      (Rv = [$r]),
      (Lv = [$r]),
      (Iv = [$r]),
      (ey = class {
        constructor() {
          (nt($v, 5, this),
            I(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            I(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            I(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            I(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            I(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            I(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            I(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            ei(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            ei(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            ));
        }
        markUseLayoutEffectsStart() {
          performance.mark(`framer-hydration-layout-effects-start`);
        }
        markRouterUseLayoutEffectStart() {
          performance.mark(`framer-hydration-router-layout-effect`);
        }
        markUseLayoutEffectsEnd() {
          (performance.mark(`framer-hydration-layout-effects-end`),
            ei(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            ));
        }
        markUseEffectsStart() {
          performance.mark(`framer-hydration-effects-start`);
        }
        markUseEffectsRouterStart() {
          performance.mark(`framer-hydration-router-effect`);
        }
        markUseEffectsAreSynchronous() {
          performance.mark(`framer-hydration-effects-sync`);
        }
        markUseEffectsEnd() {
          (performance.mark(`framer-hydration-effects-end`),
            ei(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`
            ));
        }
        markRafStart() {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        }
        markRafEnd() {
          (performance.mark(`framer-hydration-browser-raf-end`),
            ei(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            ei(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            ei(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          ei(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          ei(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      ($v = Be(null)),
      Ke($v, 1, `markRenderStart`, Qv, ey),
      Ke($v, 1, `markRenderEnd`, Zv, ey),
      Ke($v, 1, `markUseInsertionEffectsStart`, Xv, ey),
      Ke($v, 1, `markUseInsertionEffectRouterStart`, Yv, ey),
      Ke($v, 1, `markUseInsertionEffectsEnd`, Jv, ey),
      Ke($v, 1, `markUseLayoutEffectsStart`, qv, ey),
      Ke($v, 1, `markRouterUseLayoutEffectStart`, Kv, ey),
      Ke($v, 1, `markUseLayoutEffectsEnd`, Gv, ey),
      Ke($v, 1, `markUseEffectsStart`, Wv, ey),
      Ke($v, 1, `markUseEffectsRouterStart`, Uv, ey),
      Ke($v, 1, `markUseEffectsAreSynchronous`, Hv, ey),
      Ke($v, 1, `markUseEffectsEnd`, Vv, ey),
      Ke($v, 1, `markRafStart`, Bv, ey),
      Ke($v, 1, `markRafEnd`, zv, ey),
      Ke($v, 1, `markLayoutStylePaintEnd`, Rv, ey),
      Ke($v, 1, `measureMutationEffects`, Lv, ey),
      Ke($v, 1, `measureUnattributedHydrationOverhead`, Iv, ey),
      Ze($v, ey),
      (ny = !1),
      (ry = { Start: ai, End: oi }),
      (iy = class extends Error {}),
      (ay = class extends v {
        constructor(e) {
          (super(e), (this.state = { error: void 0, forceUpdateKey: e.forceUpdateKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.forceUpdateKey !== t.forceUpdateKey) {
            let n = { forceUpdateKey: e.forceUpdateKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof iy)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return si(e, t);
        }
      }),
      (oy = Object.freeze([])),
      (cy = new Set()),
      (ly = class {
        constructor() {
          (I(this, `observers`, new Set()), I(this, `transactions`, {}));
        }
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (uy = (() => {
        function e(e) {
          return (
            Ci(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            wi(e) ? e : new py(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : wi(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              wi(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (dy = `onUpdate`),
      (fy = `finishTransaction`),
      (py = class {
        constructor(e) {
          (I(this, `value`, e), I(this, `observers`, new ly()));
        }
        static interpolationFor(e, t) {
          if (wi(e)) return Ti(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (wi(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      ((e) => {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Di(e.x, t.x), y: Di(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(t) {
          let n = e.centroid(t),
            r = new Map();
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x));
          }
          return t.sort((e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((ki ||= {})),
      (my = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (hy = new ((() => Gg().Hsluv)())()),
      (gy = (() => {
        let e = `(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`,
          t =
            `[\\s|\\(]+(` +
            e +
            `)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,
          n =
            `[\\s|\\(]+(` +
            e +
            `)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`;
        return {
          rgb: RegExp(`rgb` + t),
          rgba: RegExp(`rgba` + n),
          hsl: RegExp(`hsl` + t),
          hsla: RegExp(`hsla` + n),
          hsv: RegExp(`hsv` + t),
          hsva: RegExp(`hsva` + n),
          hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
          hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
          hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
          hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        };
      })()),
      (_y =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (vy = (e) => {
        let { r: t, g: n, b: r, a: i } = $i(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (yy = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        ta({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (by = (e) => {
        let { r: t, g: n, b: r, a: i } = $i(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (xy = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        ta({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (Sy = class e {
        constructor(e) {
          (I(this, `format`, `p3`),
            I(this, `r`),
            I(this, `g`),
            I(this, `b`),
            I(this, `a`),
            (this.r = e.r ?? 0),
            (this.g = e.g ?? 0),
            (this.b = e.b ?? 0),
            (this.a = e.a ?? 1));
        }
        hsv() {
          return na(this);
        }
        rgb() {
          return oa(this);
        }
        hsl() {
          return zi(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(ia(t));
            case `srgb`:
              return new e(aa(ia(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            aa({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = q(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = Zi(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!R(t) || !q.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (Cy = new Map()),
      (q = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = Cy.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (Cy.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = sa(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          } else return;
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => (typeof e == `string` ? Ji(e) !== !1 : !1)),
          (e.isColorObject = (e) =>
            B(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => Ri(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => (typeof e == `string` ? Sy.isP3String(e) : !1)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...Pi(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = Hi(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = Hi(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = Ri(e.r, e.g, e.b, !0);
            for (let e of Object.keys(my)) if (my[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: Ai(i, [0, 1], [t.r, r.r], a),
                g: Ai(i, [0, 1], [t.g, r.g], a),
                b: Ai(i, [0, 1], [t.b, r.b], a),
                a: Ai(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: Ai(i, [0, 1], [u, u + f], a),
                s: Ai(i, [0, 1], [c.s, l.s], a),
                l: Ai(i, [0, 1], [c.l, l.l], a),
                a: Ai(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(Fi(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => zi(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !!(
              (t.toLowerCase().slice(-5) === `color` || t === `fill` || t === `stroke`) &&
              typeof n == `string` &&
              e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        let r = ot([0, 255], [0, 1]);
        function i(e) {
          e = r(e);
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: r, b: a } = e.toRgb(t);
            return 0.2126 * i(n) + 0.7152 * i(r) + 0.0722 * i(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (wy = (e) => e instanceof Qe),
      (Ty = (() => Kg().EventEmitter)()),
      (Ey = class {
        constructor() {
          I(this, `_emitter`, new Ty());
        }
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (Dy = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (Oy = (() => K.requestAnimationFrame || Dy)()),
      (ky = (e) => Oy(e)),
      (Ay = (() => 1 / 60)()),
      (jy = class extends Ey {
        constructor(e = !1) {
          (super(),
            I(this, `_started`, !1),
            I(this, `_frame`, 0),
            I(this, `_frameTasks`, []),
            I(this, `tick`, () => {
              this._started &&
                (ky(this.tick),
                this.emit(`update`, this._frame, Ay),
                this.emit(`render`, this._frame, Ay),
                this._processFrameTasks(),
                this._frame++);
            }),
            e && this.start());
        }
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          Ay = e;
        }
        static get TimeStep() {
          return Ay;
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), ky(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * Ay;
        }
      }),
      (My = new jy()),
      (Ny = { target: pa() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (J = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => Ny.target,
        hasRestrictions: () => {
          let e = Ny.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (Py = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      Me({
        borderTopWidth: Py(`y`),
        borderLeftWidth: Py(`x`),
        borderRightWidth: Py(`x`),
        borderBottomWidth: Py(`y`),
      }),
      (Fy = !1),
      (Iy = `calc(`),
      (Ly = `*`),
      (Ry = {
        correct: (e, t) => {
          if (!t.target) return e;
          if (typeof e == `string`) {
            if (e.startsWith(Iy)) {
              let [n, ...r] = e.slice(Iy.length).split(Ly);
              if (ft(n) || !ie.test(n.trim())) return e;
              let i = parseFloat(n),
                a = ha(i, t.target.x),
                o = ha(i, t.target.y);
              return `${ga(a, r)} ${ga(o, r)}`;
            }
            if (ie.test(e)) e = parseFloat(e);
            else return e;
          }
          return `${ha(e, t.target.x)}% ${ha(e, t.target.y)}%`;
        },
      }),
      (zy = (() => ({
        borderRadius: {
          ...Ry,
          applyTo: [
            `borderTopLeftRadius`,
            `borderTopRightRadius`,
            `borderBottomLeftRadius`,
            `borderBottomRightRadius`,
          ],
        },
        borderTopLeftRadius: Ry,
        borderTopRightRadius: Ry,
        borderBottomLeftRadius: Ry,
        borderBottomRightRadius: Ry,
      }))()),
      (By = j.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (Vy = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (Hy = (() => ({
        ...Vy,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }))()),
      (Uy = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (Wy = (() => ({ ...Uy, fontWeight: 500 }))()),
      (Gy = (() => ({
        ...Uy,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }))()),
      (Ky = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = Ea(ki.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(ki(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => ki.distance(e.a, e.b)),
          e
        );
      })()),
      (Y = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => Y.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: Ei(e.x, t),
          y: Ei(e.y, t),
          width: Ei(e.width, t),
          height: Ei(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: Y.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: Y.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: ki.distance(t, n), height: ki.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(Y.minX)), y: Math.min(...e.map(Y.minY)) },
            n = { x: Math.max(...e.map(Y.maxX)), y: Math.max(...e.map(Y.maxY)) };
          return Y.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: Y.minX(e), y: Y.minY(e) },
          { x: Y.minX(e), y: Y.maxY(e) },
          { x: Y.maxX(e), y: Y.minY(e) },
          { x: Y.maxX(e), y: Y.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < Y.minX(e) ||
            t.x > Y.maxX(e) ||
            t.y < Y.minY(e) ||
            t.y > Y.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of Y.points(t)) if (!Y.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= Y.maxX(e) || Y.maxX(t) <= e.x || t.y >= Y.maxY(e) || Y.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = Y.maxX(e),
            r = Y.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = Y.maxY(e),
            r = Y.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => t.find((t) => Y.intersects(t, e)) === void 0,
        isEqual: (e, t) => Y.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > Y.maxX(e) && (n = t.x - Y.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > Y.maxY(e) && (r = t.y - Y.maxY(e)),
            ki.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: Y.minX(e), y: Y.minY(e) },
            r = { x: Y.minX(t), y: Y.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = Y.minX(e),
            r = Y.minY(e),
            i = Y.maxX(e),
            a = Y.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = Y.cornerPoints(e);
          return [Ky(t, n), Ky(n, r), Ky(r, i), Ky(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  H(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              H(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  H(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              H(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = Ky(t, Y.center(e)),
            r = Y.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && Ky.intersection(n, t, !0)) {
              let n = qy[e];
              return (V(n, `Invalid edge name`, qy), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          V(r, `Rect array is empty`);
          let i = Y.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            V(o);
            let s = Y.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (qy = [`top`, `right`, `bottom`, `left`]),
      (Jy = {
        quickfix: (e) => (
          (Da(e.widthType) || Da(e.heightType)) && (e.aspectRatio = null),
          U(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || Da(e.widthType) || U(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || Da(e.heightType) || U(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (Yy = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = Jy.quickfix({
              left: U(t) || wi(t),
              right: U(n) || wi(n),
              top: U(r) || wi(r),
              bottom: U(i) || wi(i),
              widthType: Oa(a),
              heightType: Oa(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = uy.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = uy.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? uy.getNumber(t) : null,
              right: d.right ? uy.getNumber(n) : null,
              top: d.top ? uy.getNumber(r) : null,
              bottom: d.bottom ? uy.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? uy.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? uy.getNumber(t?.sizing.height) : null,
            c = Pa(e.left, e.right);
          if (o && U(c)) i = o - c;
          else if (n && Da(e.widthType)) i = n.width;
          else if (U(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                H(e.widthType);
            }
          let l = Pa(e.top, e.bottom);
          if (s && U(l)) a = s - l;
          else if (n && Da(e.heightType)) a = n.height;
          else if (U(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                H(e.heightType);
            }
          return Na(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = Yy.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? uy.getNumber(l.width) : null,
            d = l ? uy.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? Y.pixelAligned(f) : f;
        },
      }),
      (Xy = 200),
      (Zy = 200),
      (Qy = j.createContext({ parentSize: 0 })),
      ($y = (e) => {
        let t = Ha(),
          { parentSize: n, children: r } = e,
          i = j.useMemo(() => ({ parentSize: n }), [Wa(n), Ga(n)]);
        return t === 1
          ? r
            ? _(O, { children: r })
            : null
          : _(Qy.Provider, { value: i, children: r });
      }),
      (eb = ((e) => (
        (e.Boolean = `boolean`),
        (e.Number = `number`),
        (e.String = `string`),
        (e.RichText = `richtext`),
        (e.FusedNumber = `fusednumber`),
        (e.Enum = `enum`),
        (e.SegmentedEnum = `segmentedenum`),
        (e.Color = `color`),
        (e.Image = `image`),
        (e.ResponsiveImage = `responsiveimage`),
        (e.File = `file`),
        (e.ComponentInstance = `componentinstance`),
        (e.Slot = `slot`),
        (e.Array = `array`),
        (e.EventHandler = `eventhandler`),
        (e.ChangeHandler = `changehandler`),
        (e.Transition = `transition`),
        (e.BoxShadow = `boxshadow`),
        (e.Link = `link`),
        (e.Date = `date`),
        (e.Object = `object`),
        (e.Font = `font`),
        (e.PageScope = `pagescope`),
        (e.ScrollSectionRef = `scrollsectionref`),
        (e.CustomCursor = `customcursor`),
        (e.Border = `border`),
        (e.Cursor = `cursor`),
        (e.Padding = `padding`),
        (e.BorderRadius = `borderradius`),
        (e.Gap = `gap`),
        (e.CollectionReference = `collectionreference`),
        (e.MultiCollectionReference = `multicollectionreference`),
        (e.TrackingId = `trackingid`),
        (e.VectorSetItem = `vectorsetitem`),
        (e.LinkRelValues = `linkrelvalues`),
        (e.Location = `location`),
        e
      ))(eb || {})),
      (tb = /Mac/u),
      (nb = /iPhone|iPod|iPad/iu),
      (rb = /MacIntel/iu),
      (ib = /Edg\//u),
      (ab = /Chrome/u),
      (ob = /Google Inc/u),
      (sb = /Safari/u),
      (cb = /Apple Computer/u),
      (lb = /Firefox\/\d+\.\d+$/u),
      (ub = /FramerX/u),
      (db = /tablet|iPad|Nexus 9/iu),
      (fb = /mobi/iu),
      (pb = j.createContext(void 0)),
      (mb = new Set()),
      (gb = `style[data-framer-css-ssr-minified]`),
      (_b = (() => {
        if (!ro()) return new Set();
        let e = document.querySelector(gb)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (vb = `data-framer-css-ssr`),
      (yb = (e, t, r) =>
        j.forwardRef((i, a) => {
          let { sheet: o, cache: s } = j.useContext(pb) ?? {},
            c = r;
          if (!ro()) {
            ct(t) && (t = t(uo(), i));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            xb.add(e, c);
          }
          return (
            n(() => {
              (c && _b.has(c)) ||
                (ct(t)
                  ? t(uo(), i)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && lo(e, o, s));
            }, []),
            _(e, { ...i, ref: a })
          );
        })),
      (bb = class {
        constructor() {
          (I(this, `styles`, new Set()), I(this, `componentIds`, new Set()));
        }
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (xb = new bb()),
      (Cb = `flexbox-gap-not-supported`),
      (wb = !1),
      (Tb = [
        `[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
        `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`,
      ]),
      (Eb = ((e) => (
        (e.Padding = `--framer-input-padding`),
        (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
        (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
        (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
        (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
        (e.CornerShape = `--framer-input-corner-shape`),
        (e.BorderColor = `--framer-input-border-color`),
        (e.BorderTopWidth = `--framer-input-border-top-width`),
        (e.BorderRightWidth = `--framer-input-border-right-width`),
        (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
        (e.BorderLeftWidth = `--framer-input-border-left-width`),
        (e.BorderStyle = `--framer-input-border-style`),
        (e.Background = `--framer-input-background`),
        (e.FontFamily = `--framer-input-font-family`),
        (e.FontWeight = `--framer-input-font-weight`),
        (e.FontSize = `--framer-input-font-size`),
        (e.FontColor = `--framer-input-font-color`),
        (e.FontStyle = `--framer-input-font-style`),
        (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
        (e.FontTextAlignment = `--framer-input-font-text-alignment`),
        (e.FontLineHeight = `--framer-input-font-line-height`),
        (e.FontOpenType = `--framer-input-font-open-type-features`),
        (e.FontVariationAxes = `--framer-input-font-variation-axes`),
        (e.PlaceholderColor = `--framer-input-placeholder-color`),
        (e.BoxShadow = `--framer-input-box-shadow`),
        (e.FocusedBorderColor = `--framer-input-focused-border-color`),
        (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
        (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
        (e.FocusedBackground = `--framer-input-focused-background`),
        (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
        (e.FocusedTransition = `--framer-input-focused-transition`),
        (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
        (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
        (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
        (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
        (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
        (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
        (e.InvalidTextColor = `--framer-input-invalid-text-color`),
        (e.IconBackgroundImage = `--framer-input-icon-image`),
        (e.IconMaskImage = `--framer-input-icon-mask-image`),
        (e.IconColor = `--framer-input-icon-color`),
        (e.IconContent = `--framer-input-icon-content`),
        (e.WrapperHeight = `--framer-input-wrapper-height`),
        e
      ))(Eb || {})),
      (X = Eb),
      (Db = `framer-form-input`),
      (Ob = `framer-form-input-wrapper`),
      (kb = `framer-form-input-empty`),
      (Ab = `framer-form-input-forced-focus`),
      (Z = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (V(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${mo(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            V(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      (jb = (() => [
        Z(`.${Db}`, {
          padding: Z.variable(X.Padding),
          background: `transparent`,
          fontFamily: Z.variable(X.FontFamily),
          fontWeight: Z.variable(X.FontWeight),
          fontSize: Z.variable(X.FontSize),
          fontStyle: Z.variable(X.FontStyle),
          color: Z.variable(X.FontColor),
          fontFeatureSettings: Z.variable(X.FontOpenType),
          fontVariationSettings: Z.variable(X.FontVariationAxes),
          border: `none`,
          textOverflow: `ellipsis`,
          whiteSpace: `nowrap`,
          overflow: `hidden`,
          width: `100%`,
          height: Z.variable(X.WrapperHeight, `100%`),
          letterSpacing: Z.variable(X.FontLetterSpacing),
          textAlign: Z.variable(X.FontTextAlignment),
          lineHeight: Z.variable(X.FontLineHeight),
        }),
        Z(`.${Db}:focus-visible`, { outline: `none` }),
      ])()),
      (Mb = (() => [Z(`.${Ob}`, { overflow: `hidden` })])()),
      (Nb = `var(${X.BorderTopWidth}) var(${X.BorderRightWidth}) var(${X.BorderBottomWidth}) var(${X.BorderLeftWidth})`),
      (Pb = (() => [
        `.${Ob}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${X.BorderRadiusTopLeft});
        border-top-right-radius: var(${X.BorderRadiusTopRight});
        border-bottom-right-radius: var(${X.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${X.BorderRadiusBottomLeft});
        corner-shape: var(${X.CornerShape});
        border-color: var(${X.BorderColor});
        border-top-width: var(${X.BorderTopWidth});
        border-right-width: var(${X.BorderRightWidth});
        border-bottom-width: var(${X.BorderBottomWidth});
        border-left-width: var(${X.BorderLeftWidth});
        border-style: var(${X.BorderStyle});
        transition: var(${X.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`,
      ])()),
      (Fb = `customError`),
      (Ib = `valid`),
      (Lb = 10),
      (Rb = 8),
      (zb = 16),
      (Bb = (() => ({
        backgroundRepeat: `no-repeat`,
        backgroundSize: `${zb}px`,
        maskRepeat: `no-repeat`,
        maskSize: `${zb}px`,
        backgroundColor: Z.variable(X.IconColor),
      }))()),
      (Vb = (() => ({
        content: ``,
        display: `block`,
        position: `absolute`,
        right: 0,
        top: 0,
        bottom: 0,
        width: `${zb}px`,
        boxSizing: `content-box`,
        padding: Z.variable(X.Padding),
        border: `none`,
        pointerEvents: `none`,
        ...Bb,
      }))()),
      (Hb = `--list-style-type`),
      (Ub = `--max-list-digits`),
      (Wb = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (Gb = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (Kb = { display: `inline-block` }),
      (qb = { display: `block` }),
      (Jb = (() => [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${Gb.display};
            flex-direction: ${Gb.flexDirection};
            justify-content: ${Gb.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${Co([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${Co([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${Co([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${Kb.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${Co([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${Co([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Co([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Co([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${Co([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${Co([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${Co([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${Co([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${Co([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${Co([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Co([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${Co([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${Co([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Co([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${Co([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Co([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Co([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${Co([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Co([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${qb.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: none;
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${Ub}, 1) + 1) * 1ch);
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
        `
        ${wo(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ])()),
      (Yb = `--text-truncation-display-inline-for-safari-16`),
      (Xb = `--text-truncation-display-none-for-safari-16`),
      (Zb = `--text-truncation-line-break-for-safari-16`),
      (Qb = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      ($b = `(background: -webkit-named-image(i))`),
      (ex = `(contain-intrinsic-size: inherit)`),
      (tx = (() => [
        `@supports ${$b} and (not ${ex}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${Qb.join(`, `)} { display: var(${Yb}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${Qb.map((e) => `${e}::after`).join(`, `)} { content: var(${Zb}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${Xb}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${Yb}, ${Kb.display}) }
    }`,
      ])()),
      (nx = [`[data-framer-component-type] { position: absolute; }`]),
      (rx = [
        `[data-framer-component-type="Text"] { cursor: inherit; }`,
        `[data-framer-component-text-autosized] * { white-space: pre; }`,
        `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
        `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
        `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
        `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`,
        `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`,
        `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`,
        `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
        `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
      ]),
      (ix = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`),
      (ax = (() => [
        `[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`,
        `.${Cb} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`,
      ])()),
      (ox = (() => `
.${Cb} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`)()),
      (sx = (() => `
.${Cb}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${Cb}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`)()),
      (cx = (() => `
.${Cb}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${Cb}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`)()),
      (lx = (() => [ix, ox, ...ax, sx, cx])()),
      (ux = [
        `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
      ]),
      (dx = [
        `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
        `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
      ]),
      (fx = [
        `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
        `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
        `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
        `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
        `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
        `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
        `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
        `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
      ]),
      (px = [
        `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
      ]),
      (mx = [
        `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
      ]),
      (hx = [
        `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
      ]),
      (gx = [
        `.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
      ]),
      (_x = [
        `[data-framer-cursor="pointer"] { cursor: pointer; }`,
        `[data-framer-cursor="grab"] { cursor: grab; }`,
        `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
      ]),
      (vx = [
        `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
        `[data-framer-generated] * { pointer-events: unset }`,
      ]),
      (yx = [
        `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
      ]),
      (bx = [
        `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
        `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
        `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
      ]),
      (xx = `--framer-will-change-override`),
      (Sx = `--framer-will-change-effect-override`),
      (Cx = `--framer-will-change-filter-override`),
      (wx = `(background: -webkit-named-image(i))`),
      (Tx = `(grid-template-rows: subgrid)`),
      (Ex = `(position-area: top right)`),
      (Dx = (e) =>
        e
          ? [
              `body { ${xx}: none; }`,
              `@supports ${wx} and (not ${Tx}) { body { ${xx}: transform; } }`,
            ]
          : [`body { ${xx}: none; ${Sx}: none; }`]),
      (Ox = (e) =>
        e
          ? [`body { ${Cx}: none; }`, `@supports ${wx} and (not ${Ex}) { body { ${Cx}: filter; } }`]
          : [`body { ${Cx}: none; }`]),
      (kx = (e) => (e ? vx : [])),
      (Ax = [`.svgContainer svg { display: block; }`]),
      (jx = `--overflow-clip-fallback`),
      (Mx = (() => [
        `@supports (not (overflow: clip)) {
        :root { ${jx}: hidden; }
    }`,
      ])()),
      (Nx = `--one-if-corner-shape-supported`),
      (Px = (() => [`@supports (corner-shape: superellipse(2)) { :root { ${Nx}: 1 } }`])()),
      (Fx = (e) => [
        ...Dx(e),
        ...Ox(e),
        ...nx,
        ...rx,
        ...Jb,
        ...Tb,
        ...lx,
        ...ux,
        ...dx,
        ...fx,
        ...mx,
        ...px,
        ...hx,
        ..._x,
        ...kx(e),
        ...Ax,
        ...yx,
        ...bx,
        ...Mx,
        ...gx,
        ...tx,
        ...Px,
      ]),
      (Ix = Fx(!1)),
      (Lx = Fx(!0)),
      (Rx = `optional`),
      (zx = (e) => e),
      (Bx =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (Vx = Lo(
        (e) =>
          Bx.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (Hx = (e) => () => {
        Si(e);
      }),
      (Ux = () => () => {}),
      (Wx = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = Kx.useImageSource(e, t, n);
          return C(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        isOnPageCanvas: !1,
      }),
      (Gx = !1),
      (Kx = new Proxy(Wx, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? Ux()
              : Hx(
                  Gx
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (qx = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (Jx = [1, 2, 2.2]),
      (Yx = [512, 1024, 2048, 4096]),
      (Xx = 512),
      (Zx = (() => ({ position: `absolute`, ...qx, top: 0, right: 0, bottom: 0, left: 0 }))()),
      (Qx = `src`),
      ($x = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && Qx in e;
        },
      }),
      (eS = eo()),
      (tS = typeof document < `u` ? f : c),
      (nS = j.createContext(!1)),
      (rS = class {
        constructor() {
          (I(this, `sharedResizeObserver`),
            I(this, `callbacks`, new WeakMap()),
            (this.sharedResizeObserver = new ResizeObserver(
              this.updateResizedElements.bind(this)
            )));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (iS = (() => (ro() ? new rS() : void 0))()),
      (aS = `data-framer-size-compatibility-wrapper`),
      (oS = `0.000001px`),
      (sS = (() => ` translateZ(${oS})`)()),
      (cS = (() => io() || to() || ao())()),
      (lS = (() => {
        class e extends v {
          constructor() {
            (super(...arguments),
              I(this, `layerElement`, null),
              I(this, `setLayerElement`, (e) => {
                this.layerElement = e;
              }));
          }
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? _s(t) : vs(t));
          }
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Lt(this.props, e);
          }
          componentDidUpdate(e) {
            zx(this.props).clip &&
              zx(this.props).radius === 0 &&
              zx(e).radius !== 0 &&
              bs(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return (I(e, `defaultProps`, {}), e);
      })()),
      (uS = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (dS = {
        hueRotate: (e, t) => q.toHslString(q.hueRotate(q(e), t)),
        setAlpha: (e, t) => q.toRgbString(q.alpha(q(e), t)),
        getAlpha: (e) => {
          let t = Ji(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => q.toRgbString(q.multiplyAlpha(q(e), t)),
        toHexValue: (e) => q.toHex(q(e)).toUpperCase(),
        toHex: (e) => q.toHexString(q(e)).toUpperCase(),
        toRgb: (e) => q.toRgb(q(e)),
        toRgbString: (e) => q.toRgbString(q(e)),
        toHSV: (e) => q.toHsv(q(e)),
        toHSL: (e) => q.toHsl(q(e)),
        toHslString: (e) => q.toHslString(q(e)),
        toHsvString: (e) => q.toHsvString(q(e)),
        hsvToHSLString: (e) => q.toHslString(q(Ii(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => q.toHex(q(Ii(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => q.toHexString(q(Ii(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => q.toRgbString(q(Ii(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => Ii(e.h, e.s, e.v),
        rgbaToString: (e) => q.toRgbString(q(e)),
        rgbToHexValue: (e) => q.toHex(q(e)),
        rgbToHexString: (e) => q.toHexString(q(e)),
        hslToString: (e) => q.toHslString(q(e)),
        hslToRgbString: (e) => q.toRgbString(q(e)),
        toColorPickerSquare: (e) => q.toRgbString(q({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => q(e).isValid !== !1,
        equals: (e, t) =>
          q.isP3String(e) || q.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = q(e)),
              typeof t == `string` && (t = q(t)),
              q.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = q(e);
          return t.a === 1 ? q.toHexString(t) : q.toRgbString(t);
        },
        toFormatString: (e) => (q.isP3String(e) ? e : q.toRgbString(q(e))),
      }),
      (fS = /var\(.+\)/u),
      (pS = new Map()),
      (mS = [`stops`]),
      (hS = [`start`, `end`]),
      (gS = [`angle`, `alpha`]),
      (_S = {
        isLinearGradient: (e) => B(e) && gS.every((t) => t in e) && (Os(e) || Ds(e)),
        hash: (e) => e.angle ^ Es(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = Ts(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (vS = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (yS = {
        isRadialGradient: (e) => B(e) && vS.every((t) => t in e) && (Os(e) || Ds(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ Es(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = Ts(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (bS = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (xS = (() => new Set([...bS, ...bS.map((e) => `${e}Capture`)]))()),
      (SS = `overflow`),
      (CS = { x: 0, y: 0, width: 200, height: 200 }),
      (wS = new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (TS = m(function (e, n) {
        let { name: r, center: i, border: a, _border: o, __portal: s } = e,
          { props: c, children: u } = ss(e),
          d = zs(c),
          f = ls(e),
          p = Ps(e),
          m = l(null),
          h = n ?? m,
          g = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": p,
            "data-framer-highlight": p === `pointer` ? !0 : void 0,
            "data-layoutid": f,
            "data-framer-offset-parent-id": zx(e)[`data-framer-offset-parent-id`],
          };
        !Bs(e) && r && (zx(g)[`data-framer-name`] = r);
        let [v, y] = Rs(c),
          b = Ls(c),
          x = Ja(b);
        (i && !(y && !x && Ia(b))
          ? ((d.transformTemplate ||= cs(i)), Object.assign(g, as(i)))
          : (d.transformTemplate ||= void 0),
          hs(e, h));
        let S = ts(e),
          C = Vs(c, b, y, t(nS)),
          w = Ka(
            T(O, {
              children: [
                S
                  ? _(Zo, {
                      alt: e.alt ?? ``,
                      image: S,
                      containerSize: y ?? void 0,
                      nodeId: e.id && os(e.id),
                      layoutId: f,
                    })
                  : null,
                u,
                _($o, { ...o, border: a, layoutId: f }),
              ],
            }),
            C
          ),
          E = rs(e.as),
          D = ns(S);
        return (
          e.fitImageDimension &&
            D &&
            ((v[e.fitImageDimension] = `auto`), (v.aspectRatio = D.width / D.height)),
          T(E, { ...g, ...d, layoutId: f, style: v, ref: h, children: [w, s] })
        );
      })),
      (ES = Eo(
        m(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? _(TS, { ...e, ref: t }) : null;
        })
      )),
      (DS = `__LAYOUT_TREE_ROOT`),
      (OS = j.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (kS = class extends v {
        constructor() {
          (super(...arguments),
            I(this, `shouldAnimate`, !1),
            I(this, `transition`),
            I(this, `lead`),
            I(this, `follow`),
            I(this, `scheduledPromotion`, !1),
            I(this, `scheduledDidUpdate`, !1),
            I(this, `scheduleProjectionDidUpdate`, () => {
              this.scheduledDidUpdate = !0;
            }),
            I(this, `schedulePromoteTree`, (e, t, n) => {
              ((this.follow = this.lead),
                (this.shouldAnimate = n),
                (this.lead = e),
                (this.transition = t),
                (this.scheduledPromotion = !0));
            }),
            I(this, `initLead`, (e, t) => {
              ((this.follow = this.lead),
                (this.lead = e),
                this.follow && t && (this.follow.layoutMaybeMutated = !0));
            }),
            I(this, `sharedLayoutContext`, {
              schedulePromoteTree: this.schedulePromoteTree,
              scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
              initLead: this.initLead,
            }));
        }
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity: t.options.layoutId === DS && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        render() {
          return _(OS.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (AS = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (jS = class {
        constructor(e) {
          (I(this, `sharedIntersectionObserver`),
            I(this, `callbacks`, new WeakMap()),
            (this.sharedIntersectionObserver = new IntersectionObserver(
              this.intersectionObserverCallback.bind(this),
              e
            )));
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (MS = a(new Map())),
      (NS = typeof IntersectionObserver > `u` ? Zg : Ys),
      (PS = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (FS = j.createContext(null)),
      (IS = class extends v {
        constructor() {
          (super(...arguments),
            I(this, `layoutMaybeMutated`, !1),
            I(this, `projectionNodes`, new Map()),
            I(this, `rootProjectionNode`),
            I(this, `isExiting`),
            I(
              this,
              `shouldPreserveFollowOpacity`,
              (e) => e.options.layoutId === DS && !this.props.isExiting
            ),
            I(this, `switchLayoutGroupContext`, {
              register: (e) => this.addChild(e),
              deregister: (e) => this.removeChild(e),
              transition:
                this.props.isLead !== void 0 && this.props.animatesLayout
                  ? this.props.transition
                  : void 0,
              shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
            }));
        }
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return _(Ue.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (LS = (e) => {
        let t = j.useContext(OS);
        return _(IS, { ...e, sharedLayoutContext: t });
      }),
      (RS = j.createContext(!0)),
      (zS = a({ register: () => {}, deregister: () => {} })),
      (BS = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = ec(),
          i = l({
            register: s(
              (e) => {
                if (r.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                r.set(e, void 0);
              },
              [r]
            ),
            deregister: s(
              (e) => {
                (r.get(e)?.(), r.delete(e));
              },
              [r]
            ),
          }).current;
        return (
          c(
            () => (
              r.forEach((n, i) => {
                let a = i(e, t);
                r.set(i, ct(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r]
          ),
          _(zS.Provider, { value: i, children: n })
        );
      }),
      (VS = j.memo(function ({
        isLayeredContainer: e,
        isCurrent: n,
        isPrevious: r,
        isOverlayed: i = !1,
        visible: a,
        transitionProps: o,
        children: s,
        backdropColor: u,
        onTapBackdrop: d,
        backfaceVisible: f,
        exitBackfaceVisible: p,
        animation: m,
        exitAnimation: h,
        instant: g,
        initialProps: v,
        exitProps: y,
        position: b = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: x,
        index: S,
        areMagicMotionLayersPresent: C,
        id: w,
        isInitial: E,
      }) {
        let D = le(),
          O = t(Ae),
          { persistLayoutIdCache: ee } = t(By),
          k = l({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: rc({}, v, o),
          }),
          A = l(null),
          j = O !== null && !O.isPresent;
        (n && k.current.wasCurrent === void 0 && ee(),
          c(() => {
            if (e || !D) return;
            if (j) {
              k.current = { ...k.current, wasBeingRemoved: j };
              return;
            }
            let { wasPrevious: t, wasCurrent: i } = k.current,
              a = (n && !i) || (!j && k.current.wasBeingRemoved && n),
              s = r && !t,
              c = rc(k.current.origins, v, o),
              l = k.current.wasReset;
            (a || s
              ? (D.stop(), D.start({ zIndex: S, ...c, ...o }), (l = !1))
              : l === !1 && (D.stop(), D.set({ zIndex: S, ...HS, opacity: 0 }), (l = !0)),
              (k.current = {
                wasCurrent: !!n,
                wasPrevious: !!r,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [n, r, j]));
        let te = g ? { type: !1 } : `velocity` in m ? { ...m, velocity: 0 } : m,
          M = g ? { type: !1 } : h || m,
          ne = { ...b };
        ((ne.left === void 0 || ne.right === void 0) && (ne.width = `auto`),
          (ne.top === void 0 || ne.bottom === void 0) && (ne.height = `auto`));
        let N = (ic(o) || ic(v)) && (e || n || r) ? 1200 : void 0,
          re = { ...HS, ...k.current.origins },
          P = e
            ? {
                initial: { ...re, ...v },
                animate: { ...re, ...o, transition: te },
                exit: { ...re, ...y, transition: m },
              }
            : { animate: D, exit: { ...re, ...y, transition: M } },
          ie = !(j || C === !1),
          ae = !!n && ie,
          oe = n && E;
        return T(ES, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || j || (n && x) ? S : void 0,
            pointerEvents: void 0,
            visibility: a ? `visible` : `hidden`,
            perspective: N,
          },
          children: [
            e &&
              _(ES, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: m,
                initial: { opacity: g && a ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: u || `transparent`,
                onTap: j ? void 0 : d,
              }),
            _(ES, {
              ...ne,
              ...P,
              transition: {
                default: te,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: j ? p : f,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!n,
              style: { pointerEvents: void 0, opacity: oe || e || (n && x) ? 1 : 0 },
              "data-is-present": ie ? void 0 : !1,
              ref: A,
              children: _(FS.Provider, {
                value: A,
                children: _(RS.Provider, {
                  value: ae,
                  children: _(BS, {
                    isCurrent: ae,
                    isOverlayed: i,
                    children: _(LS, {
                      isLead: n,
                      animatesLayout: !!x,
                      transition: te,
                      isExiting: !ie,
                      isOverlayed: i,
                      id: w,
                      children: s,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, nc)),
      (HS = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (US = class {
        constructor() {
          (I(this, `warning`, () => {
            Si(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
          }),
            I(this, `goBack`, () => this.warning()),
            I(this, `instant`, () => this.warning()),
            I(this, `fade`, () => this.warning()),
            I(this, `push`, () => this.warning()),
            I(this, `modal`, () => this.warning()),
            I(this, `overlay`, () => this.warning()),
            I(this, `flip`, () => this.warning()),
            I(this, `customTransition`, () => this.warning()),
            I(this, `magicMotion`, () => this.warning()));
        }
      }),
      (WS = a(new US())),
      (GS = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (KS = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (qS = c_(HS)),
      (JS = j.createContext(void 0)),
      (YS = j.createContext(void 0)),
      (XS = (() => {
        var e, t, n, r, i, a, o;
        return (
          (t = class extends v {
            constructor(t) {
              (super(t),
                Oe(this, n),
                Oe(this, e, null),
                I(this, `state`, KS()),
                Oe(this, a, (e) => {
                  if (!this.props.enabled && this.state.history.length > 0) return;
                  let t = cc(this.state, e);
                  if (!t) return;
                  let { skipLayoutAnimation: n } = this.props,
                    r = t.history[t.current],
                    i =
                      (e.type === `add` && e.transition.withMagicMotion) ||
                      (e.type === `forward` && r?.transition.withMagicMotion) ||
                      (e.type === `remove` && !!t.previousTransition),
                    a = () => {
                      (this.setState(t), r?.key && this.context?.(r.key));
                    };
                  n && !i ? n(a) : a();
                }),
                I(this, `goBack`, () => {
                  if (!$e(this, n, i).call(this))
                    return (
                      je(this, e, globalThis.event?.timeStamp || null),
                      this.state.currentOverlay === -1
                        ? L(this, a).call(this, { type: `remove` })
                        : L(this, a).call(this, { type: `removeOverlay` })
                    );
                }));
              let r = this.props.children;
              if (!r || !Ta(r) || !wa(r)) return;
              let o = { ...GS.Instant },
                s = {
                  type: `add`,
                  key: r.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                  transition: o,
                  component: r,
                },
                c = cc(this.state, s);
              c && (this.state = c);
            }
            componentDidMount() {
              let e = this.state.history[this.state.current];
              e && this.context?.(e.key);
            }
            UNSAFE_componentWillReceiveProps(e) {
              let t = e.children;
              if (!Ta(t) || !wa(t)) return;
              let r = t.key?.toString();
              r &&
                (this.state.history.length === 0
                  ? $e(this, n, o).call(this, t, GS.Instant)
                  : L(this, a).call(this, { type: `update`, key: r, component: t }));
            }
            componentWillUnmount() {
              this.props.resetProjection?.();
            }
            instant(e) {
              $e(this, n, o).call(this, e, GS.Instant, void 0);
            }
            fade(e, t) {
              $e(this, n, o).call(this, e, GS.Fade, t);
            }
            push(e, t) {
              $e(this, n, o).call(this, e, ac(t), t);
            }
            modal(e, t) {
              $e(this, n, o).call(this, e, GS.Modal, t);
            }
            overlay(e, t) {
              $e(this, n, o).call(this, e, oc(t), t);
            }
            flip(e, t) {
              $e(this, n, o).call(this, e, sc(t), t);
            }
            magicMotion(e, t) {
              $e(this, n, o).call(this, e, GS.MagicMotion, t);
            }
            customTransition(e, t) {
              $e(this, n, o).call(this, e, t);
            }
            render() {
              let e = $e(this, n, r).call(this, { overCurrentContext: !1 }),
                t = $e(this, n, r).call(this, { overCurrentContext: !0 }),
                i = Cc(t),
                a = t.current > -1,
                o = this.state.history.length === 1,
                s = [];
              for (let [t, n] of Object.entries(this.state.containers)) {
                let r = this.state.containerIndex[t];
                V(r !== void 0, `Container's index must be registered`);
                let i = this.state.containerVisualIndex[t];
                V(i !== void 0, `Container's visual index must be registered`);
                let c = this.state.containerIsRemoved[t],
                  l = this.state.history[r],
                  u = this.state.transitionForContainer[t],
                  d = r === this.state.current,
                  f = r === this.state.previous,
                  p = d ? !1 : c,
                  m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
                s.push(
                  _(
                    VS,
                    {
                      id: t,
                      index: i,
                      isInitial: o,
                      isCurrent: d,
                      isPrevious: f,
                      isOverlayed: a,
                      visible: d || f,
                      position: l?.transition?.position,
                      instant: Nc(r, e),
                      transitionProps: u,
                      animation: Mc(r, e),
                      backfaceVisible: Ac(r, e),
                      exitAnimation: l?.transition?.animation,
                      exitBackfaceVisible: l?.transition?.backfaceVisible,
                      exitProps: l?.transition?.enter,
                      withMagicMotion: m,
                      areMagicMotionLayersPresent: p ? !1 : void 0,
                      children: _(Hs, {
                        children: Fc({ component: n, transition: l?.transition }),
                      }),
                    },
                    t
                  )
                );
              }
              let c = this.state.overlayStack.map((e, n) =>
                _(
                  VS,
                  {
                    isLayeredContainer: !0,
                    isCurrent: n === this.state.currentOverlay,
                    position: e.transition.position,
                    initialProps: kc(n, t),
                    transitionProps: jc(n, t),
                    instant: Nc(n, t, !0),
                    animation: Mc(n, t),
                    exitProps: e.transition.enter,
                    visible: Pc(n, t),
                    backdropColor: Dc(e.transition),
                    backfaceVisible: Oc(n, t),
                    onTapBackdrop: Ic(e.transition, this.goBack),
                    index: this.state.current + 1 + n,
                    children: Fc({ component: e.component, transition: e.transition }),
                  },
                  e.key
                )
              );
              return _(ES, {
                "data-framer-component-type": `NavigationRoot`,
                top: 0,
                left: 0,
                width: `100%`,
                height: `100%`,
                position: `relative`,
                style: {
                  overflow: `hidden`,
                  backgroundColor: `unset`,
                  pointerEvents: void 0,
                  ...this.props.style,
                },
                children: _(WS.Provider, {
                  value: this,
                  children: T(YS.Provider, {
                    value: o,
                    children: [
                      _(VS, {
                        isLayeredContainer: !0,
                        position: void 0,
                        initialProps: {},
                        instant: !1,
                        transitionProps: wc(i),
                        animation: Tc(i),
                        backfaceVisible: Ec(i),
                        visible: !0,
                        backdropColor: void 0,
                        onTapBackdrop: void 0,
                        index: 0,
                        children: _(_a, {
                          children: _(kS, {
                            children: _(Ge, { presenceAffectsLayout: !1, children: s }),
                          }),
                        }),
                      }),
                      _(Ge, { children: c }),
                    ],
                  }),
                }),
              });
            }
          }),
          (e = new WeakMap()),
          (n = new WeakSet()),
          (r = function (e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }),
          (i = function () {
            return globalThis.event ? L(this, e) === globalThis.event.timeStamp : !1;
          }),
          (a = new WeakMap()),
          (o = function (t, r, o) {
            if (
              $e(this, n, i).call(this) ||
              (je(this, e, globalThis.event?.timeStamp || null), !t || !Ta(t) || !wa(t))
            )
              return;
            let s = { ...r, ...o };
            if (s.overCurrentContext)
              return L(this, a).call(this, { type: `addOverlay`, transition: s, component: t });
            let c = t.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            L(this, a).call(this, { type: `add`, key: c, transition: s, component: t });
          }),
          I(t, `defaultProps`, { enabled: !0 }),
          I(t, `contextType`, JS),
          t
        );
      })()),
      (ZS = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (QS = Eo(Lc)),
      Ne(Yg(), 1),
      Ne(Yg(), 1),
      Ne(Yg(), 1),
      ($S = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (eC = Symbol(`private`)),
      (tC = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [eC]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new ly(),
                reset() {
                  for (let t in i)
                    if ($S(i, t)) {
                      let n = $S(e, t) ? zx(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, rC);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[eC].reset()),
          (e.addObserver = (e, t) => e[eC].observers.add(t)),
          e
        );
      })()),
      (nC = class {
        constructor() {
          (I(this, `set`, (e, t, n, r) => {
            if (t === eC) return !1;
            let i = e[eC],
              a,
              o;
            if (
              (wi(n) ? ((a = n), (o = a.get())) : (o = n),
              i.makeAnimatables &&
                typeof n != `function` &&
                typeof n != `object` &&
                !a &&
                (a = uy(n)),
              i.observeAnimatables && a)
            ) {
              let e = i.transactions;
              a.onUpdate({
                update: (t, n) => {
                  (n && e.add(n), i.observers.notify({ value: r }, n));
                },
                finish: (t) => {
                  e.delete(t) && i.observers.finishTransaction(t);
                },
              });
            }
            let s = !1,
              c = !0,
              l = zx(e)[t];
            if (l !== void 0) {
              wi(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (zx(e)[t] = o));
              let n = typeof o == `object` && !!o;
              ((Array.isArray(o) || n) && (c = !0), (s = !0));
            } else (a && (n = a), (s = Reflect.set(e, t, n)));
            return (c && i.observers.notify({ value: r }), s);
          }),
            I(this, `get`, (e, t, n) => {
              if (t === eC) return zx(e)[t];
              let r = Reflect.get(e, t, n);
              return typeof r == `function` ? r.bind(n) : r;
            }));
        }
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[eC].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(eC);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== eC) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (rC = new nC()),
      (iC = `opacity`),
      (aC = (() => {
        function e(t = {}) {
          let n = tC(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => tC.resetObject(e));
          }),
          (e.addObserver = (e, t) => tC.addObserver(e, t)),
          e
        );
      })()),
      (oC = { update: 0 }),
      (sC = j.createContext({ update: NaN })),
      (cC = class extends v {
        constructor() {
          (super(...arguments),
            I(this, `observers`, []),
            I(this, `state`, oC),
            I(this, `taskAdded`, !1),
            I(this, `frameTask`, () => {
              (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
            }),
            I(this, `observer`, () => {
              this.taskAdded || ((this.taskAdded = !0), My.addFrameTask(this.frameTask));
            }));
        }
        componentWillUnmount() {
          (this.observers.map((e) => e()), aC.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            aC._stores.forEach((e) => {
              let t = aC.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            _(sC.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      Ne(Yg(), 1),
      (lC = `__framer__`),
      (uC = (() => lC.length)()),
      (dC = j.createContext(void 0)),
      (fC = j.createContext(void 0)),
      (pC = `ssr-variant`),
      (mC = `ssr-variant-group-separator`),
      (hC = j.forwardRef(function (e, t) {
        let n = Xc(t),
          r = j.useContext(fC),
          i = j.useSyncExternalStore(n_, i_, r_),
          a = ba(() => (i ? (ro() ? 1 : 2) : 0)),
          o = j.useContext(dC);
        return Nr(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, il(t, c, i));
            case 1:
              return $c(i, s, c, u, l, d, n, t);
            case 2:
              return $c(i, s, c, u, l, d, Yc, void 0);
            default:
              H(a);
          }
        }, [o, r, n, e]);
      })),
      (gC = (() => yb(hC, `.${pC} { display: contents }`, `PropertyOverrides`))()),
      (_C = `default`),
      (vC = new Set([_C])),
      (bC = class {
        constructor() {
          (I(this, `entries`, new Map()), Oe(this, yC, {}));
        }
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (V(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (V(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = _C, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return _C;
          let n = L(this, yC)[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (L(this, yC)[e] = el(r)) : _C;
        }
        setAll(e, t = vC, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = ct(n.transformTemplate) ? n.transformTemplate?.({}, SC) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: B(a) ? a : void 0,
              animate: B(o) ? o : void 0,
              transformTemplate: R(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (yC = new WeakMap()),
      (xC = new bC()),
      (SC = `__Appear_Animation_Transform__`),
      (CC = `data-framer-appear-id`),
      (wC = `data-framer-appear-animation`),
      (TC = (e) => {
        if (Fo())
          return {
            animate: ol(e.animate) ? e.animate : void 0,
            initial: ol(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (EC = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (DC = (e) => ({
        x: it(e?.x ?? 0),
        y: it(e?.y ?? 0),
        opacity: it(e?.opacity ?? 1),
        scale: it(e?.scale ?? 1),
        rotate: it(e?.rotate ?? 0),
        rotateX: it(e?.rotateX ?? 0),
        rotateY: it(e?.rotateY ?? 0),
        skewX: it(e?.skewX ?? 0),
        skewY: it(e?.skewY ?? 0),
        transformPerspective: it(e?.transformPerspective ?? 0),
      })),
      (OC = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (kC = { willChange: `transform` }),
      Object.freeze(kC),
      (AC = {}),
      Object.freeze(AC),
      (jC = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (MC = () => {
        let e = l();
        return (
          c(
            () => () => {
              clearTimeout(e.current);
            },
            []
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (NC = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (PC = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (FC = 1),
      (IC = 4),
      (LC = new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (RC = [`animate`, `animate`]),
      (zC = { inputRange: [], outputRange: [] }),
      (BC = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (VC = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (HC = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (UC = [0, 1]),
      (WC = { parallax: NC, styleAppear: LC, styleTransform: BC, loop: jC, presence: PC }),
      (GC = c_(WC)),
      (KC = (e) => e.reduce((e, t) => (e += t), 0)),
      (qC = (e) => e.reduce((e, t) => (e *= t), 1)),
      (JC = `current`),
      (YC = (e) =>
        j.forwardRef((t, n) => {
          if (t.__withFX)
            return _(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let r = TC(t);
          if (r) return _(e, { ...t, ...r, ref: n });
          let {
              parallax: i = {},
              styleAppear: a = {},
              styleTransform: o = {},
              presence: s = {},
              loop: c = {},
              forwardedProps: l,
              targetOpacityValue: u,
              withPerspective: d,
              inSmartComponent: f = !1,
            } = kl(t),
            p = Ks(n),
            { values: m, style: h } = hl(s, p, f, t.style, t[ae]),
            { values: g, style: v } = dl(i, p, t.style?.visibility),
            { values: y, style: b } = Dl(o, p),
            { values: x, style: S } = Cl(a, p),
            { values: C, style: w } = ll(c, p),
            T = j.useMemo(() => {
              let e = new Qe(u ?? 1);
              return {
                scale: [x.scale, C.scale, m.scale, y.scale],
                opacity: [x.opacity, C.opacity, m.opacity, e, y.opacity],
                x: [x.x, C.x, m.x, y.x],
                y: [x.y, C.y, g.y, m.y, y.y],
                rotate: [x.rotate, C.rotate, m.rotate, y.rotate],
                rotateX: [x.rotateX, C.rotateX, m.rotateX, y.rotateX],
                rotateY: [x.rotateY, C.rotateY, m.rotateY, y.rotateY],
                skewX: [x.skewX, C.skewX, m.skewX, y.skewX],
                skewY: [x.skewY, C.skewY, m.skewY, y.skewY],
                transformPerspective: [y.transformPerspective, x.transformPerspective],
              };
            }, [u, y, g, x, C, m]);
          jl(t.style, T);
          let E = F(T.scale, qC),
            D = F(T.opacity, qC),
            O = F(T.x, KC),
            ee = F(T.y, KC),
            k = F(T.rotate, KC),
            A = F(T.rotateX, KC),
            te = F(T.rotateY, KC),
            M = F(T.skewX, KC),
            ne = F(T.skewY, KC),
            N = F(T.transformPerspective, KC),
            { drag: re, dragConstraints: P } = l;
          ds(re && Al(P) ? P : void 0);
          let ie = {
            opacity: D,
            scale: E,
            x: O,
            y: ee,
            rotate: k,
            rotateX: A,
            rotateY: te,
            skewX: M,
            skewY: ne,
          };
          ft(d) && (ie.transformPerspective = N);
          let oe = Ml(t.animate) ? t.animate : void 0,
            se = Ml(t.initial) ? t.initial : void 0,
            ce = Ml(t.exit) ? t.exit : void 0,
            le = f && !s.presenceInitial ? { initial: se, animate: oe, exit: ce } : {};
          return _(e, {
            ...l,
            ...le,
            __withFX: !0,
            style: { ...t.style, ...v, ...b, ...w, ...ie, ...S, ...h },
            values: m,
            ref: p,
          });
        })),
      (XC = a({})),
      (ZC = j.createContext({})),
      (QC = j.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = j.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = Xc(a);
        return _(ZC.Provider, { value: o, children: s(r, i) });
      })),
      ($C = (e) =>
        j.forwardRef((t, n) =>
          _(e, { layoutId: ls(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (ew = !1),
      (tw = class extends v {
        constructor() {
          (super(...arguments), I(this, `state`, { error: void 0 }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!Fl(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              xt(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          yn(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!Fl(e)) throw e;
          return ((ew = !0), this.props.children);
        }
      }),
      (nw = (() => (M === void 0 ? null : new Promise(() => {})))()),
      (rw = _(Il, {})),
      (iw = a(!1)),
      (iw.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (aw = _(Rl, {})),
      (ow = class extends v {
        constructor() {
          (super(...arguments), I(this, `state`, { hasError: !1 }));
        }
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Bl(this.props.getErrorMessage(), t?.componentStack), zl(e, t));
        }
        render() {
          let { children: e, fallback: t = aw } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (sw = class extends v {
        constructor() {
          (super(...arguments), I(this, `state`, { hasError: !1 }));
        }
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            zl(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (cw = (() => j.createContext(void 0))()),
      (lw = `code-crash:`),
      (uw = $C(
        j.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            ...c
          },
          l
        ) {
          let u = ba(() => (t ? `${t}-container` : void 0)),
            d = rs(n),
            f = eu(
              j.Children.map(e, (e) =>
                j.isValidElement(e) ? j.cloneElement(e, { layoutId: t }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return _(d, {
            layoutId: u,
            ...c,
            ref: l,
            children: _(nS.Provider, {
              value: !0,
              children: _(Sv.Provider, {
                value: i ?? null,
                children: _(ya, {
                  enabled: !1,
                  children: _(Xe, { id: t ?? ``, inherit: c.layout ? !0 : `id`, children: f }),
                }),
              }),
            }),
          });
        })
      )),
      (dw = j.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = eu(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = rs(f);
          return _(Sv.Provider, {
            value: a ?? null,
            children: _(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return _(Sv.Provider, {
            value: a ?? null,
            children: _(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (fw = a({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (pw = `framer-cursor-none`),
      (mw = `framer-pointer-events-none`),
      (hw = b(function ({ children: e }) {
        let t = ba(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = tu(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = ue();
        return T(fw.Provider, { value: t, children: [e, !n && _(yw, {})] });
      })),
      (gw = (() =>
        yb(
          hw,
          [
            `.${pw}, .${pw} * { cursor: none !important; }`,
            `.${mw}, .${mw} * { pointer-events: none !important; }`,
          ],
          `framer-lib-cursors-host`
        ))()),
      (_w = (() => ({ position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }))()),
      (vw = `data-framer-portal-id`),
      (yw = b(function () {
        let { onRegisterCursors: e } = t(fw),
          [n, r] = i(!1),
          a = be(0),
          o = be(0),
          u = be(0),
          d = l(null),
          p = l({ cursors: {}, cursorHash: void 0 }),
          m = us();
        (f(() => {
          let e = K.matchMedia(`(any-hover: none)`);
          function t(e) {
            e.matches ? k(() => r(!1)) : r(!0);
          }
          return (
            e.addEventListener(`change`, t),
            e.matches || r(!0),
            () => {
              e.removeEventListener(`change`, t);
            }
          );
        }, []),
          c(() => {
            if (!n) return;
            let e = 0,
              t = 0;
            function r() {
              (a.set(e), o.set(t), Fe(u, 1, { type: `tween`, duration: 0.2 }));
            }
            let i = () => {
              if (dt(p.current.cursors)) return;
              let n = au(e, t);
              n !== p.current.cursorHash && ((p.current.cursorHash = n), Le.update(() => m()));
            };
            function s(n) {
              if (n.pointerType === `touch`) {
                We(i);
                return;
              }
              (Le.read(i, !0), (e = n.clientX), (t = n.clientY), Le.update(r));
            }
            function c(e) {
              if (e.target === d.current || !d.current) return;
              let t = new PointerEvent(e.type, {
                bubbles: !0,
                cancelable: e.cancelable,
                pointerType: e.pointerType,
                pointerId: e.pointerId,
                composed: e.composed,
                isPrimary: e.isPrimary,
                buttons: e.buttons,
                button: e.button,
              });
              Le.update(() => {
                d.current?.dispatchEvent(t);
              });
            }
            return (
              K.addEventListener(`pointermove`, s),
              document.addEventListener(`pointerdown`, c),
              document.addEventListener(`pointerup`, c),
              Le.read(i, !0),
              () => {
                (K.removeEventListener(`pointermove`, s),
                  document.removeEventListener(`pointerdown`, c),
                  document.removeEventListener(`pointerup`, c),
                  We(i));
              }
            );
          }, [u, a, o, m, n]),
          c(() => {
            if (!n) return;
            function e() {
              Fe(u, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              K.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), K.removeEventListener(`blur`, e));
              }
            );
          }, [u, n]),
          f(() => {
            function t(e) {
              ((p.current.cursors = e),
                (p.current.cursorHash = dt(e) ? null : au(a.get(), o.get())),
                m());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(pw, !1));
            };
          }, [a, o, e, m]));
        let { cursors: h, cursorHash: g } = p.current,
          v = g ? h[g] : null,
          y = nu(v);
        f(() => {
          n && document.body.classList.toggle(pw, y);
        }, [y, n]);
        let b = v?.component,
          x = v?.transition ?? { duration: 0 },
          S = x.duration === void 0 ? x : { ...x, duration: x.duration * 1e3 },
          C = Te(a, S),
          w = Te(o, S),
          T = F(() => C.get() + (v?.offset?.x ?? 0)),
          D = F(() => w.get() + (v?.offset?.y ?? 0)),
          O = v?.alignment,
          ee = v?.placement,
          A = s((e, t) => `translate(${iu(ee, O)}) ${t}`, [O, ee]);
        return !n || !v || !b
          ? null
          : _(E, {
              children: _(b, {
                transformTemplate: A,
                style: { ..._w, x: T, y: D, opacity: u },
                globalTapTarget: !0,
                variant: v?.variant,
                ref: d,
                className: mw,
              }),
            });
      })),
      (bw = `webPageId`),
      (xw = class {
        constructor() {
          (I(this, `collectedLinks`, new Map()), I(this, `nestingInfo`, new Map()));
        }
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            V(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (V(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((Qg && !ao()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(cu(e), e), this.collectedLinks.set(cu(t), t));
          let n = this.nestingInfo.get(cu(e)) ?? new Set();
          (n.add(cu(t)), this.nestingInfo.set(cu(e), n));
        }
      }),
      (Sw = new xw()),
      (Cw = `element`),
      (ww = `collection`),
      (Tw = `collectionItemId`),
      (Ew = `pathVariables`),
      (Dw = `framer/page-link,`),
      (Ow = a(void 0)),
      (kw = `--text-selection-color`),
      (Aw = `--text-selection-background-color`),
      (jw = (() => yb(Eu, (e, t) => Tu(t?.triggerId), `InjectSelectionStyle`))()),
      (Mw = `overlay`),
      (Nw = `template-overlay`),
      (Pw = j.forwardRef(function ({ Component: e, ...t }, n) {
        return e ? _(e, { ...t, ref: n }) : null;
      })),
      (Fw = class extends v {
        constructor() {
          (super(...arguments),
            I(this, `state`, { error: void 0 }),
            I(this, `message`, `Made UI non-interactive due to an error.`),
            I(this, `messageFatal`, `Fatal error.`));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((M.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(xt($g ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          yn(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = ($g && document.getElementById(`main`)?.innerHTML) || ``;
          return _(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${xt()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (Iw = /:([a-z]\w*)/gi),
      (Lw = a(void 0)),
      (Rw = 500),
      (zw = 0.9),
      (Bw = 1.7),
      (Vw = 4),
      (Hw = 1 / 0),
      (Uw = new WeakMap()),
      (Ww = new Set()),
      (Gw = new Map()),
      (Kw = !Y_ || typeof IntersectionObserver > `u` ? null : Iu()),
      (qw = Au(
        m(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: r,
            clickTrackingId: i,
            relValues: a,
            preserveParams: o,
            nodeId: s,
            scopeId: c,
            motionChild: l,
            ...u
          },
          d
        ) {
          let f = Bt(),
            p = Ht(),
            m = Pu(),
            { activeLocale: h, locales: g } = Fr(),
            _ = Wu(),
            v = Ln(),
            b = lu(),
            x = Gu({ nodeId: s, clickTrackingId: i, router: f, href: t, activeLocale: h }),
            S = C(() => {
              if (!t) return {};
              let e = su(t) ? t : gu(t);
              if (!e) return {};
              if (R(e))
                return Yu(
                  e,
                  f,
                  p,
                  {
                    openInNewTab: n,
                    trackLinkClick: x,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  v,
                  h?.id,
                  g,
                  m
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = _(i, s, h);
              if (vt(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: y,
                  locale: b,
                } = ju(f, p, e, h, c, m),
                S = Ru(n, !0),
                C = S === `_blank`,
                w = { pathVariables: y, locale: b },
                T = (e) => qu(f, l, () => v(l, w, !1, !C), d, y, r, e);
              return {
                href: u,
                target: S,
                onClick: Ju(u, x, T),
                "data-framer-page-link-current": (p && Fu(p, e, m)) || void 0,
                navigate: T,
                preload: () => v(l, w, !0, !C),
                _routeId: l,
                _pathVariables: y,
                _locale: b,
              };
            }, [t, f, h, m, n, p, r, x, a, g, o, _, v]),
            w = Ks(y(e) && `ref` in e ? e.ref : void 0),
            { navigate: T, preload: E, _routeId: D, _pathVariables: O, _locale: ee, ...k } = S;
          qs(
            w,
            (e) => {
              if (!(e === null || !D || !E || b))
                return Kw?.(e, E, `${D}:${ee?.id}:${JSON.stringify(O)}`);
            },
            [E, D, O, ee]
          );
          let A = !!T;
          return yu(
            Xc(d).cloneAsArray(e, (e) => Xu(e, { ...u, ...Qu(k, l, A) }, w)),
            c,
            s,
            t,
            S,
            w
          );
        })
      )),
      (Jw = `framer`),
      (Yw = 3),
      (Xw = 30),
      (Zw = 1e4),
      (Qw = `3`),
      ($w = `__framer`),
      (eT = [
        `website`,
        `company`,
        `message`,
        `subject`,
        `title`,
        `description`,
        `feedback`,
        `notes`,
        `details`,
        `remarks`,
        `comments`,
      ]),
      (tT = (() => Date.now())()),
      (nT = {
        name: 0,
        value: 1,
        setAttribute: 2,
        valueProperty: 3,
        isInputEventTrusted: 4,
        inputChangeTimeSinceModuleLoad: 5,
        wasFilledBeforeHydration: 6,
      }),
      (rT = {
        fieldData: 0,
        fieldCount: 1,
        fieldFilledCount: 2,
        hpVersion: 3,
        siteId: 4,
        timeToSubmissionSinceModuleLoad: 5,
      }),
      (iT = () => ((Date.now() - tT) / 1e3).toFixed(2)),
      (aT = ({ inputStateRef: e }) => {
        let { inputRef: t, originalName: n } = e;
        return (
          j.useLayoutEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed;
            n.value && (r.wasFilledBeforeHydration = !0);
          }, [t, e]),
          j.useEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed,
              i = Element.prototype.setAttribute,
              a = i.bind(n);
            n.setAttribute = function (e, t) {
              (e === `value` && ((r.setAttribute = !0), (r.inputChangeTimeSinceModuleLoad = iT())),
                a(e, t));
            };
            let o = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, `value`);
            o &&
              Object.defineProperty(n, `value`, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return o.get?.call(this) ?? ``;
                },
                set: function (e) {
                  ((r.valueProperty = !0),
                    (r.inputChangeTimeSinceModuleLoad = iT()),
                    o.set?.call(this, e));
                },
              });
            let s = (e) => {
              ((r.isInputEventTrusted = e.isTrusted), (r.inputChangeTimeSinceModuleLoad = iT()));
            };
            return (
              n.addEventListener(`input`, s),
              () => {
                ((n.setAttribute = i.bind(n)),
                  o && Object.defineProperty(n, `value`, o),
                  n.removeEventListener(`input`, s));
              }
            );
          }, [t, e]),
          _(`input`, {
            ref: t,
            type: `text`,
            name: n,
            suppressHydrationWarning: !0,
            tabIndex: -1,
            autoComplete: `one-time-code`,
            "aria-hidden": `true`,
            style: { position: `absolute`, transform: `scale(0)` },
            defaultValue: ``,
            "data-1p-ignore": !0,
            "data-lpignore": `true`,
            "data-form-type": `other`,
            "data-bwignore": !0,
          })
        );
      }),
      (oT = { state: `pending` }),
      (sT = { state: `success` }),
      (cT = { state: `incomplete` }),
      (lT = { state: `complete` }),
      (uT = { state: `error` }),
      (dT = j.createContext(void 0)),
      (fT = j.forwardRef(function (
        {
          action: e,
          children: n,
          redirectUrl: r,
          onSuccess: i,
          onError: a,
          onLoading: o,
          submitTrackingId: s,
          nodeId: c,
          ...l
        },
        u
      ) {
        let d = j.useRef(null),
          f = u ?? d,
          {
            states: p,
            convertHoneypotFieldsForSubmission: m,
            replaceHoneypotWithMetadata: h,
          } = ad(),
          g = Bt(),
          v = Ht(),
          y = Pu(),
          b = An(),
          [x, S] = j.useReducer(ld, cT),
          { activeLocale: C, locales: w } = Fr(),
          E = t(dT),
          D = j.useRef({ onSuccess: i, onError: a, onLoading: o });
        D.current = { onSuccess: i, onError: a, onLoading: o };
        let O = j.useRef(!1);
        async function ee(e) {
          if (R(e)) {
            let t = Mu(g, e, y, w);
            if (!t) {
              fd(e, f);
              return;
            }
            let { routeId: n, elementId: r, pathVariables: i } = t;
            g.navigate?.(n, r, i);
            return;
          }
          V(su(e), `Expected link to be either a LinkToWebPage or a string`, e);
          let {
            routeId: t,
            elementId: n,
            pathVariables: r,
          } = ju(g, v, e, C, await Hu(e.unresolvedPathSlugs, e.unresolvedHashSlugs, C, b), y);
          g.navigate?.(t, n, r);
        }
        let A = async (t) => {
            if ((t.preventDefault(), !e || !E || O.current)) return;
            ((O.current = !0), m());
            let n = new FormData(t.currentTarget);
            (await In({ priority: `user-visible`, continueAfter: `paint` }),
              h(n),
              k(() => S({ type: `submit` })),
              id(n, K.document));
            for (let [e, t] of n) t instanceof File && n.delete(e);
            try {
              (D.current.onLoading?.(),
                sd({ router: g, nodeId: c, submitTrackingId: s, activeLocale: C }),
                await md(e, n, E),
                k(() => S({ type: `success` })),
                D.current.onSuccess?.(),
                r && (await ee(r)));
            } catch (e) {
              (k(() => S({ type: `error` })), D.current.onError?.(), console.error(e));
            }
            O.current = !1;
          },
          te = (e) => {
            let { target: t, currentTarget: n, key: r } = e;
            t instanceof HTMLTextAreaElement ||
              (r === `Enter` && n.checkValidity() && (e.preventDefault(), A(e)));
          },
          M = async (e) => {
            let t = e.currentTarget;
            (await In({ priority: `background`, continueAfter: `paint` }),
              k(() => S({ type: pd(t) ? `incomplete` : `complete` })));
          };
        return T(P.form, {
          ...l,
          onSubmit: ud(x) ? A : dd,
          onKeyDown: te,
          onChange: M,
          ref: f,
          children: [n(x), _(od, { states: p })],
        });
      })),
      (pT = `__framer_force_showing_editorbar_since`),
      (mT = class extends v {
        constructor() {
          (super(...arguments), I(this, `state`, { error: void 0 }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (hT = () => {
        try {
          return !!localStorage[pT];
        } catch {
          return !1;
        }
      }),
      (gT = () => !hT()),
      (_T = (() => {
        let e = a(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (vT = `main`),
      (yT = `framerGeneratedPage`),
      (bT = `<!-- Start of headStart -->`),
      (xT = `<!-- End of headStart -->`),
      (ST = `<!-- Start of headEnd -->`),
      (CT = `<!-- End of headEnd -->`),
      (wT = `<!-- Start of bodyStart -->`),
      (TT = `<!-- End of bodyStart -->`),
      (ET = `<!-- Start of bodyEnd -->`),
      (DT = `<!-- End of bodyEnd -->`),
      (OT = (() => j.createContext(void 0))()),
      (kT = null),
      (AT = null),
      t_(Fd),
      (jT = (e, n, r, i, a, o) => {
        let s = t(dT),
          u = l(),
          d = An(),
          f = l(!0);
        return (
          c(() => {
            function t() {
              (!kT || !AT) && Fd();
              let t = r ? new URL(K.location.origin + r) : K.location,
                c = {
                  version: F_,
                  abTestId: e?.abTestId,
                  framerSiteId: s ?? null,
                  webPageId: e?.abTestingVariantId ?? n,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: a?.code || null,
                  referrer: null,
                  url: t.href,
                  hostname: t.hostname,
                  pathname: t.pathname,
                  search: t.search || null,
                  hash: t.hash || null,
                  timezone: kT,
                  locale: AT,
                },
                l = f.current && o !== void 0 ? o : void 0;
              return e?.collectionId && i
                ? (async () => {
                    let t = l ?? null;
                    if (l === void 0) {
                      let n = e.collectionId && d?.get(e.collectionId),
                        [r] = Object.values(i);
                      if (n && R(r)) {
                        let e = n.getRecordIdBySlug(r, a || void 0);
                        t = (vt(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...c, collectionItemId: t };
                  })()
                : c;
            }
            (async () => {
              let e = (u.current = t()),
                n = e instanceof Promise ? await e : e;
              ((u.current = n),
                f.current ? (f.current = !1) : yn(`published_site_pageview`, n, `eager`));
            })();
            let c = async (e) => {
              if (e.persisted) {
                let e = (u.current = t()),
                  n = e instanceof Promise ? await e : e;
                ((u.current = n), yn(`published_site_pageview`, n, `eager`));
              }
            };
            return (
              M.addEventListener(`pageshow`, c),
              () => {
                M.removeEventListener(`pageshow`, c);
              }
            );
          }, [e, n, r, i, a, s, d, o]),
          u
        );
      }),
      (MT = { status: `loading`, data: void 0 }),
      (NT = 5e3),
      (PT = () => {}),
      (VT = class e {
        constructor() {
          (I(this, `responseValues`, new Map()),
            Oe(this, FT, new Map()),
            Oe(this, IT, new Set()),
            Oe(this, LT, new Map()),
            Oe(this, RT, new Map()),
            Oe(this, zT, new Map()),
            Oe(this, BT, new Map()),
            I(
              this,
              `persistCache`,
              Gc(() => {
                let t = {};
                for (let [e, n] of this.responseValues) {
                  if (!n || n.status !== `success`) continue;
                  let r = L(this, LT).get(e);
                  if (!r || r === 0) continue;
                  let i = L(this, RT).get(e);
                  i && ((i && Zd(i, r)) || (t[e] = [i, r, n.data]));
                }
                try {
                  localStorage.setItem(e.cacheKey, JSON.stringify(t));
                } catch {}
              }, 500)
            ));
        }
        unmount() {
          for (let [e, t] of L(this, BT)) (clearInterval(t), L(this, BT).delete(e));
        }
        stopQueryRefetching(e) {
          let t = qd(e),
            n = L(this, BT).get(t);
          n && (clearInterval(n), L(this, BT).delete(t));
        }
        startQueryRefetching(e) {
          let t = qd(e),
            n = L(this, BT).get(t),
            r = L(this, LT).get(t);
          if (n || !r) return;
          let i = K.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = L(this, RT).get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          L(this, BT).set(t, i);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              Zd(r, i) ||
                (L(this, RT).set(e, r),
                L(this, LT).set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = L(this, FT).get(e);
          if (n) for (let e of n) e();
        }
        async prefetch(e) {
          if (!ro() || !du(e.url, !1)) return;
          let t = qd(e);
          (L(this, IT).add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = L(this, FT).get(t);
          for (let e of r ?? []) e();
          let i = Xd(n, e);
          return (e.resultOutputType === `image` && R(i) && (await Wd(i).catch(PT)), i);
        }
        async fetchWithCache(e) {
          if (!ro()) return;
          let t = qd(e),
            n = L(this, zT).get(t);
          if (n) return n;
          let r = L(this, RT).get(t),
            i = r && Zd(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, MT);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                L(this, RT).set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            L(this, zT).set(t, a),
            a.finally(() => {
              L(this, zT).delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !L(this, IT).has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!du(r, !1)) return PT;
          let a = qd(e),
            o = L(this, LT).get(a);
          ((!o || i < o) && L(this, LT).set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = L(this, FT).get(a) ?? new Set();
          return (
            s.add(t),
            L(this, FT).set(a, s),
            () => {
              let n = L(this, FT).get(a);
              n &&
                (n.delete(t),
                n.size === 0 && L(this, FT).delete(a),
                L(this, FT).size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (FT = new WeakMap()),
      (IT = new WeakMap()),
      (LT = new WeakMap()),
      (RT = new WeakMap()),
      (zT = new WeakMap()),
      (BT = new WeakMap()),
      I(VT, `cacheKey`, `framer-fetch-client-cache`),
      (HT = VT),
      (UT = a(void 0)),
      (WT = a(!0)),
      (GT = ({ children: e, client: t }) => {
        let [n] = i(() => t ?? new HT()),
          [r, a] = i(!0);
        return (
          c(
            () => (
              n.hydrateCache(),
              k(() => {
                a(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          _(WT.Provider, { value: r, children: _(UT.Provider, { value: n, children: e }) })
        );
      }),
      (qe.WillChange = tt),
      (KT = Au(
        m(function ({ links: e, children: t, ...n }, r) {
          let i = Bt(),
            { activeLocale: a } = Fr(),
            o = Xc(r),
            s = Wu(),
            c = [],
            l = e.map((e) => {
              if (e)
                return R(e)
                  ? ed(e, i, void 0, void 0, a)
                  : ed(e.href, i, e.implicitPathVariables, e.refKey, a, (e, t) => s(e, t, a, c));
            });
          if (c.length > 0) throw Promise.allSettled(c);
          return o(t(l), n);
        })
      )),
      (qT = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return mf(e, t);
            case `boolean`:
              return gf(e);
            case `color`:
              return yf(e);
            case `date`:
              return xf(e);
            case `enum`:
              return Cf(e);
            case `file`:
              return Tf(e);
            case `link`:
              return Df(e);
            case `number`:
              return kf(e);
            case `object`:
              return Mf(e, t);
            case `responsiveimage`:
              return Pf(e);
            case `richtext`:
              return If(e);
            case `string`:
              return Bf(e);
            case `vectorsetitem`:
              return Rf(e);
            case `unknown`:
              return e;
            default:
              H(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return lt(e)
            ? { type: `boolean`, value: e }
            : ht(e)
              ? { type: `date`, value: e.toISOString() }
              : z(e)
                ? { type: `number`, value: e }
                : R(e)
                  ? { type: `string`, value: e }
                  : ut(e)
                    ? { type: `array`, value: e.map(qT.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type ? Hf(e, t, n) === 0 : !1;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type ? Hf(e, t, n) < 0 : !1;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type ? Hf(e, t, n) <= 0 : !1;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type ? Hf(e, t, n) > 0 : !1;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type ? Hf(e, t, n) >= 0 : !1;
        },
        in(e, t, n) {
          return t?.type === `array` ? t.value.some((t) => qT.equal(t, e, n)) : !1;
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => qT.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = Vf(e),
            i = Vf(t);
          return pt(r) || pt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = Vf(e),
            i = Vf(t);
          return pt(r) || pt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = Vf(e),
            i = Vf(t);
          return pt(r) || pt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          switch (e?.type) {
            case `array`:
              return e.value.length;
          }
          return 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(qT.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return R(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              H(e);
          }
        },
      }),
      (JT = { type: `unknown`, isNullable: !0 }),
      (YT = class {
        constructor(e, t) {
          (I(this, `collection`, e),
            I(this, `locale`, t),
            I(this, `schema`),
            I(this, `indexes`, []));
          let n = Po(e);
          V(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (V(n !== `array`, `Array properties are not supported`),
              V(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (mt(i)) continue;
            let a = this.schema[t];
            if (!ft(a)) {
              if ((V(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
                n[t] = { type: a.type, value: { itemIndex: r, key: t } };
                continue;
              }
              n[t] = { type: a.type, value: i };
            }
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await Uf(this.collection, this.locale))[t]?.[n];
          return v_.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems() {
          return (await Uf(this.collection, this.locale)).map((e, t) => {
            let n = String(t);
            return this.getDatabaseItem(e, n);
          });
        }
        async resolveItems(e) {
          let t = await Uf(this.collection, this.locale);
          return e.map((e) => {
            let n = t[Number(e)];
            return (V(n, `Can't find collection item`), this.getDatabaseItem(n, e));
          });
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (XT = new Map()),
      (ZT = new WeakMap()),
      (QT = `$r_`),
      ($T = new Map()),
      (eE = 1e3),
      (Q = class e {
        constructor(e) {
          I(this, `network`, e);
        }
        static estimate(t, n) {
          let r = Jf(),
            i = Yf();
          return new e(t * r + n / i);
        }
        static max(t, n) {
          return new e(Math.max(t.network, n.network));
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : e.network > t.network ? 1 : 0;
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (tE = class {
        constructor(e, t) {
          (I(this, `id`, e),
            I(this, `relational`, t),
            I(this, `nodes`, []),
            I(this, `winners`, new Map()));
        }
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new nE();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          V(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (nE = class {
        constructor() {
          (I(this, `node`), I(this, `cost`, new Q(1 / 0)), I(this, `nodes`, []));
        }
        update(e, t) {
          (this.nodes.push(e), Q.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (rE = class {
        constructor(e) {
          I(this, `isSynchronous`, e);
        }
      }),
      (iE = class extends rE {
        constructor() {
          (super(...arguments), I(this, `group`));
        }
        getGroup() {
          return (V(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (V(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return ef(this.evaluate(void 0));
        }
        evaluateAsync() {
          return tf(this.evaluate(void 0));
        }
      }),
      (aE = class {
        constructor(e, t, n = {}) {
          (I(this, `options`, n),
            I(this, `collections`),
            I(this, `richTextCache`, new WeakMap()),
            I(this, `vectorSetItemCache`, new WeakMap()),
            (this.collections = rp(e, t)));
        }
        *resolveArrayValue(e) {
          return yield* af(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* rf(t);
        }
        loadRichTextValue(e) {
          let t = e.value;
          V(ep(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          V(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = this.options.richTextMode === `raw` ? t.pointer : n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return _t(t) ? yield t : t;
        }
        loadVectorSetItemValue(e) {
          let t = e.value;
          V(np(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (V(n, `Can't find collection for vector set item pointer`),
            V(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return _t(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (oE = `index`),
      (sE = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), G(this.name, ...e));
        }
      }),
      (cE = class {
        constructor(e, t, n) {
          (I(this, `id`, e),
            I(this, `name`, t),
            I(this, `data`, n),
            I(this, `indexes`, new uE()),
            I(this, `fields`, new $()));
        }
      }),
      (lE = class {
        constructor(e, t, n, r, i, a) {
          for (let o in (I(this, `id`, e),
          I(this, `data`, t),
          I(this, `collection`, n),
          I(this, `lookupNodes`, r),
          I(this, `constraint`, i),
          I(this, `ordering`, a),
          I(this, `resolvedFields`, new $()),
          t.schema))
            for (let e of n.fields) e.name === o && this.resolvedFields.add(e);
        }
      }),
      (uE = class extends sE {
        constructor() {
          (super(...arguments), I(this, `name`, `Indexes`));
        }
      }),
      (dE = class {
        constructor(e, t, n, r) {
          (I(this, `id`, e),
            I(this, `name`, t),
            I(this, `definition`, n),
            I(this, `collection`, r));
        }
        getValue(e) {
          V(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          switch (t?.type) {
            case `richtext`:
              return (
                V(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: $f(this.collection.data, t.value) }
              );
            case `vectorsetitem`:
              return (
                V(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: tp(this.collection.data, t.value) }
              );
          }
          return t ?? null;
        }
      }),
      ($ = class extends sE {
        constructor() {
          (super(...arguments), I(this, `name`, `Fields`));
        }
      }),
      (fE = class {
        constructor(e, t = `asc`) {
          (I(this, `field`, e), I(this, `direction`, t));
        }
        getHash() {
          return G(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (pE = class {
        constructor(e) {
          (I(this, `fields`, []), e && this.merge(e));
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return G(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e ? !0 : this.length === e.length ? this.getHash() === e.getHash() : !1;
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== oE) return !1;
          return !0;
        }
      }),
      (mE = class {
        constructor(e, t) {
          (I(this, `ordering`, e), I(this, `resolvedFields`, t));
        }
        getHash() {
          return G(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 ? !0 : e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0
            ? !0
            : e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (hE = class e {
        constructor(e) {
          (I(this, `parent`, e), I(this, `node`), I(this, `ordering`), I(this, `fields`, []));
        }
        takeNode() {
          let e = this.node;
          return (V(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (V(!this.node, `Node already set`), (this.node = e));
        }
        setOrdering(e) {
          this.ordering = e;
        }
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.addField(t);
        }
        resolveField(e, t) {
          let n = [];
          for (let r of this.fields) r.name === e && ((t && r.collectionName !== t) || n.push(r));
          if (n.length === 1) return n[0];
          if (n.length > 1) throw Error(`Ambiguous fields`);
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fields.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new pE();
        }
        getRequiredResolvedFields() {
          let e = new $();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new mE(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          V(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (V(e, `Field must exist`), e.field);
        }
      }),
      (gE = class {
        constructor() {
          (I(this, `pointers`, new Map()), I(this, `values`, new Map()));
        }
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (_E = class e {
        constructor(e, t = []) {
          (I(this, `fields`, e), I(this, `tuples`, t));
        }
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          return new e(t, this.tuples.map(n));
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new $();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new $();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (vE = class {
        constructor(e, t) {
          (I(this, `input`, e), I(this, `field`, t));
        }
        getHash() {
          return G(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (yE = class e extends iE {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            I(this, `input`, e),
            I(this, `projections`, t),
            I(this, `passthrough`, n),
            I(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new $();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new $();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new mE(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new Q(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = Q.max(i, n);
          }
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(
            this.inputGroup.getOptimized(n),
            this.projections.map((e) => new vE(e.input.getOptimized(), e.field)),
            this.passthrough
          );
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* af(
              n.tuples.map((t) =>
                af(
                  this.projections.map((n) => rf({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new gE();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            V(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (bE = { type: 0 }),
      (xE = class extends rE {
        constructor(e, t, n) {
          (super(n),
            I(this, `referencedFields`, e),
            I(this, `referencedOuterFields`, t),
            I(this, `isSynchronous`, n));
        }
        evaluateSync() {
          return ef(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return tf(this.evaluate(void 0, void 0));
        }
      }),
      (SE = { type: 0 }),
      (CE = class {
        constructor(e, t) {
          (I(this, `when`, e), I(this, `then`, t));
        }
        getHash() {
          return G(`CaseCondition`, this.when, this.then);
        }
      }),
      (wE = class e extends xE {
        constructor(e, t, n) {
          let r = new $(),
            i = new $(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            I(this, `input`, e),
            I(this, `conditions`, t),
            I(this, `otherwise`, n),
            I(this, `definition`, { type: `unknown`, isNullable: !0 }));
        }
        getHash() {
          return G(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new Q(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new CE(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* rf({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: af(
              this.conditions.map((n) =>
                rf({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (qT.equal(n, e, SE)) return t;
          } else for (let { when: e, then: t } of r) if (_f(e)) return t;
          return i;
        }
      }),
      (TE = class {
        constructor(e, t, n) {
          (I(this, `normalizer`, e),
            I(this, `query`, t),
            I(this, `locale`, n),
            I(this, `collectionId`, 0),
            I(this, `indexId`, 0),
            I(this, `fieldId`, 0),
            I(this, `subqueries`, []));
        }
        build() {
          let e = new hE();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new $(),
            o;
          if (t.orderBy) {
            o = new pE();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (ft(t)) continue;
                a.add(t.field);
                let r = new fE(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new dE(op(this.fieldId++), void 0, t.definition, void 0),
                  a = new vE(t, r);
                i.push(a);
                let s = new fE(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new $(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (ft(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              V(n.alias, `Subqueries should have an alias`);
              let r = op(this.fieldId++),
                a = n.alias,
                s = new dE(r, a, t.definition, void 0),
                c = new vE(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              H(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = qf(t.data, this.locale),
            i = t.alias,
            a = new cE(ip(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new dE(op(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.fields.add(r));
          }
          {
            let e = new dE(op(this.fieldId++), oE, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: oE, collectionName: i });
            let t = new pE(),
              r = new fE(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new pE(),
              o = new lE(ap(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new pE(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              H(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              H(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(JT, null);
        }
        buildLiteralValue(e) {
          let t = qT.parse(e.value);
          return this.normalizer.newScalarConstant(JT, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (V(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                V(n, `Missing argument`),
                V(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                V(n, `Missing argument`),
                V(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              H(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new EE(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new EE(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new CE(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              H(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              H(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (EE = class {
        constructor(e) {
          (I(this, `inScope`, e),
            I(this, `referencedFields`, new $()),
            I(this, `referencedOuterFields`, new $()));
        }
      }),
      (DE = class e extends iE {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            I(this, `input`, e),
            I(this, `predicate`, t),
            I(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new mE(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.predicate.getOptimized());
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* af(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => _f(n[t] ?? null));
        }
      }),
      (OE = class e extends iE {
        constructor(e, t) {
          (super(!1), I(this, `index`, e), I(this, `query`, t));
        }
        getHash() {
          return G(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return Q.estimate(1, e ? 100 * eE : 50 * eE);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection;
          return new _E(
            this.getOutputFields(),
            (yield e.data.lookupItems(this.query)).map((n) => {
              let r = new gE();
              for (let i of e.resolvedFields) {
                let e = i.getValue(n);
                (r.addPointer(t, n.pointer), r.addValue(i, e));
              }
              return r;
            })
          );
        }
      }),
      (kE = class e extends iE {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            I(this, `left`, e),
            I(this, `right`, t),
            I(this, `leftGroup`),
            I(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return G(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new $(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new mE(new pE(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t);
          return new e(r, this.rightGroup.getOptimized(i));
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* rf({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (AE = class e extends iE {
        constructor(e) {
          (super(!1), I(this, `collection`, e));
        }
        getHash() {
          return G(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.collection.fields);
        }
        optimize() {
          return Q.estimate(1, 200 * eE);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields();
          return new _E(
            t,
            (yield e.data.scanItems()).map((n) => {
              let r = new gE();
              for (let i of t) {
                let t = i.getValue(n);
                (r.addPointer(e, n.pointer), r.addValue(i, t));
              }
              return r;
            })
          );
        }
      }),
      (jE = class e extends iE {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            I(this, `left`, e),
            I(this, `right`, t),
            I(this, `leftGroup`),
            I(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return G(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new $(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new mE(new pE(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t);
          return new e(r, this.rightGroup.getOptimized(i));
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* rf({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (ME = class e extends xE {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            I(this, `left`, e),
            I(this, `right`, t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* rf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: _f(n) && _f(r) };
        }
      }),
      (NE = class extends xE {
        constructor(e, t) {
          let n = new $(),
            r = new $();
          (super(n, r, !0), I(this, `definition`, e), I(this, `value`, t));
        }
        getHash() {
          return G(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (PE = { type: 0 }),
      (FE = class e extends xE {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            I(this, `source`, e),
            I(this, `target`, t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* rf({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: qT.contains(n, r, PE) };
        }
      }),
      (IE = { type: 0 }),
      (LE = class e extends xE {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            I(this, `source`, e),
            I(this, `target`, t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* rf({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: qT.endsWith(n, r, IE) };
        }
      }),
      (RE = class e extends xE {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            I(this, `left`, e),
            I(this, `right`, t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* rf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: qT.equal(n, r, bE) };
        }
      }),
      (zE = class e extends xE {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            I(this, `left`, e),
            I(this, `right`, t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* rf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: qT.greaterThan(n, r, bE) };
        }
      }),
      (BE = class e extends xE {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            I(this, `left`, e),
            I(this, `right`, t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* rf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: qT.greaterThanOrEqual(n, r, bE) };
        }
      }),
      (VE = class e extends xE {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            I(this, `left`, e),
            I(this, `right`, t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* rf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: qT.lessThan(n, r, bE) };
        }
      }),
      (HE = class e extends xE {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            I(this, `left`, e),
            I(this, `right`, t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* rf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: qT.lessThanOrEqual(n, r, bE) };
        }
      }),
      (UE = class e extends xE {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            I(this, `left`, e),
            I(this, `right`, t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* rf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !qT.equal(n, r, bE) };
        }
      }),
      (WE = class e extends xE {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            I(this, `left`, e),
            I(this, `right`, t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* rf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: _f(n) || _f(r) };
        }
      }),
      (GE = { type: 0 }),
      (KE = class e extends xE {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            I(this, `source`, e),
            I(this, `target`, t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* rf({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: qT.startsWith(n, r, GE) };
        }
      }),
      (qE = class {
        constructor(e) {
          (I(this, `normalizer`, e), I(this, `memo`), (this.memo = e.memo));
        }
        explore(e) {
          let t = e.getGroup();
          if (e instanceof DE) {
            if (e.predicate instanceof ME) {
              let n = new kE(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof WE) {
              let n = new jE(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof AE)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new OE(n, sp(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof DE) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof AE)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof RE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof NE &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = sp(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new OE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof UE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof NE &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = sp(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new OE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof VE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof NE &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = sp(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new OE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof HE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof NE &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = sp(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new OE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof zE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof NE &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = sp(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new OE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof BE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof NE &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = sp(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new OE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof FE &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof NE &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = sp(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new OE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof KE &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof NE &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = sp(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new OE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof LE &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof NE &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = sp(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new OE(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (JE = class {
        constructor(e) {
          I(this, `outputFields`, e);
        }
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (YE = class {
        constructor() {
          (I(this, `nodes`, new Map()), I(this, `groups`, []));
        }
        addGroup(e) {
          let t = new tE(Xf(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new JE(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            V(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (XE = class e extends iE {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            I(this, `left`, e),
            I(this, `right`, t),
            I(this, `constraint`, n),
            I(this, `leftGroup`),
            I(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return G(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new $();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new $(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new mE(new pE(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return Q.max(Q.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t);
          return new e(r, this.rightGroup.getOptimized(i), this.constraint.getOptimized());
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new _E(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new gE();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* rf({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof RE) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new _E(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new gE();
              (n.merge(i),
                n.merge(a),
                _f(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (ZE = class e extends iE {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            I(this, `input`, e),
            I(this, `limit`, t),
            I(this, `ordering`, n),
            I(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new mE(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.limit.getOptimized(), this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* rf({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = Af(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (QE = class e extends iE {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            I(this, `input`, e),
            I(this, `offset`, t),
            I(this, `ordering`, n),
            I(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new mE(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.offset.getOptimized(), this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* rf({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = Af(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      ($E = class e extends xE {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            I(this, `input`, e),
            I(this, `namedFields`, t),
            I(this, `ordering`, n),
            I(this, `referencedFields`, r),
            I(this, `referencedOuterFields`, i),
            I(this, `inputGroup`),
            I(this, `definition`),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return G(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new $(),
            t = Object.values(this.namedFields);
          for (let n of t) ft(n.collection) || e.add(n);
          return new mE(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps();
          return new e(
            this.inputGroup.getOptimized(t),
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new gE();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (eD = class e extends xE {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            I(this, `input`, e),
            I(this, `definition`, t),
            V(t.isNullable, `Unsupported non-nullable cast`));
        }
        getHash() {
          return G(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          return new e(this.input.getOptimized(), this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return qT.cast(n, this.definition);
        }
      }),
      (tD = class e extends xE {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            I(this, `input`, e),
            I(this, `field`, t),
            I(this, `ordering`, n),
            I(this, `referencedFields`, r),
            I(this, `referencedOuterFields`, i),
            I(this, `inputGroup`),
            I(this, `definition`),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        getHash() {
          return G(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new $();
          return (ft(this.field.collection) || e.add(this.field), new mE(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps();
          return new e(
            this.inputGroup.getOptimized(t),
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new gE();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (nD = { type: 0 }),
      (rD = class e extends xE {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            I(this, `left`, e),
            I(this, `right`, t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* rf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: qT.in(n, r, nD) };
        }
      }),
      (iD = { type: 1 }),
      (aD = class e extends xE {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            I(this, `source`, e),
            I(this, `target`, t),
            I(this, `definition`, { type: `number`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* rf({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: qT.indexOf(n, r, iD) };
        }
      }),
      (oD = class e extends xE {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            I(this, `left`, e),
            I(this, `right`, t),
            I(this, `definition`, {
              type: `array`,
              definition: { type: `string`, isNullable: !1 },
              isNullable: !1,
            }));
        }
        getHash() {
          return G(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* rf({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = lp(n),
            a = lp(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (sD = class e extends xE {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            I(this, `input`, e),
            I(this, `definition`, { type: `number`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          return new e(this.input.getOptimized());
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: qT.length(n) };
        }
      }),
      (cD = class e extends xE {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            I(this, `input`, e),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          return new e(this.input.getOptimized());
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !_f(yield* this.input.evaluate(e, t)) };
        }
      }),
      (lD = { type: 0 }),
      (uD = class e extends xE {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            I(this, `left`, e),
            I(this, `right`, t),
            I(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return G(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* rf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !qT.in(n, r, lD) };
        }
      }),
      (dD = class extends xE {
        constructor(e, t) {
          V(e.name !== oE, `Invalid field name`);
          let n = new $(),
            r = new $();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            I(this, `field`, e),
            I(this, `isOuterField`, t),
            I(this, `definition`),
            (this.definition = e.definition));
        }
        getHash() {
          return G(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (V(e, `Context must exist`), e.getValue(this.field))
            : (V(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (fD = class {
        constructor(e) {
          I(this, `memo`, e);
        }
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new AE(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new OE(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new XE(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof NE && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof XE && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new DE(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new yE(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof yE &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new ZE(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new QE(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof NE) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new dD(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new NE(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof cD)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof RE) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof UE) return this.newScalarEquals(e.left, e.right);
          if (e instanceof VE) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof HE) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof zE) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof BE) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof ME) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof WE) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new cD(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof NE && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof NE && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof NE && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof NE && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new ME(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof NE && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof NE && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof NE && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof NE && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new WE(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof dD;
          if (t instanceof dD && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new RE(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof dD;
          if (t instanceof dD && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new UE(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof dD;
          if (t instanceof dD && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new VE(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof dD;
          if (t instanceof dD && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new HE(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof dD;
          if (t instanceof dD && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new zE(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof dD;
          if (t instanceof dD && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new BE(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new rD(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new uD(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new CE(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new wE(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new FE(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new KE(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new LE(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new sD(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new aD(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new $E(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new tD(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new oD(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new eD(e, t);
          return this.finishScalar(n);
        }
      }),
      (pD = class extends iE {}),
      (mD = class e extends pD {
        constructor(e, t, n) {
          (super(!1),
            I(this, `input`, e),
            I(this, `fields`, t),
            I(this, `resolver`, n),
            I(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new $();
          return new mE(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return Q.estimate(0, 100 * eE).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          V(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Set();
          for (let e of this.fields)
            (V(e.collection, `Collection required to resolve field`), n.add(e.collection));
          for (let e of t.tuples)
            for (let t of this.fields) {
              let n = e.getValue(t);
              n?.type === `richtext`
                ? this.resolver.preloadRichTextValue(n)
                : n?.type === `vectorsetitem` && this.resolver.preloadVectorSetItemValue(n);
            }
          let r = yield Promise.all(
            Array.from(n).map(async (e) => {
              let n = [];
              for (let r of t.tuples) {
                let t = r.getPointer(e);
                t && n.push(t);
              }
              let r = await e.data.resolveItems(n);
              return (V(r.length === n.length, `Invalid number of items`), [e, r]);
            })
          );
          return t.map(t.fields, (e) => {
            let t = new gE();
            t.merge(e);
            for (let [n, i] of r) {
              let r = e.getPointer(n);
              if (!r) continue;
              let a = i.shift();
              (V(a, `Item not found`), V(a.pointer === r, `Pointer mismatch`));
              for (let e of n.fields) {
                let n = e.getValue(a);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (hD = { type: 0 }),
      (gD = class e extends pD {
        constructor(e, t) {
          (super(e.isSynchronous),
            I(this, `input`, e),
            I(this, `ordering`, t),
            I(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return G(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== oE && (ft(e.collection) || t.add(e));
          return new mE(new pE(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new Q(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === oE) {
                let r = n.collection;
                V(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                V(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                V(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!qT.equal(a, o, hD)) {
                if (pt(a) || qT.lessThan(a, o, hD)) return i ? -1 : 1;
                if (pt(o) || qT.greaterThan(a, o, hD)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (_D = class {
        constructor(e, t, n) {
          (I(this, `query`, e),
            I(this, `locale`, t),
            I(this, `resolver`, n),
            I(this, `memo`, new YE()),
            I(this, `normalizer`, new fD(this.memo)),
            I(this, `explorer`, new qE(this.normalizer)));
        }
        optimize() {
          let e = new TE(this.normalizer, this.query, this.locale).build(),
            t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (V(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new mD(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new gD(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (vD = $d(`query-engine`)),
      (yD = class {
        async evalQuery(e, t, n, r = {}) {
          vD.enabled &&
            vD.debug(`Query:
${Sp(e)}`);
          let i = new aE(e, t, r),
            [a, o] = new _D(e, t, i).optimize(),
            s = await a.evaluateAsync(),
            c = Object.entries(o),
            l = [],
            u = nf(
              af(
                s.tuples.map((e) => {
                  let t = {},
                    r = {};
                  for (let [a, o] of c) {
                    let s = e.getValue(o);
                    ((t[a] = i.resolveValue(s)), n && (r[a] = s));
                  }
                  return (n && l.push(r), rf(t));
                })
              )
            );
          return n ? [vt(u) ? await u : u, l] : u;
        }
        async serializeableQuery(e, t) {
          return this.evalQuery(e, t, !0);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n) {
          let r = new aE(t, n);
          return nf(
            af(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let i = e[n];
                  t[n] = r.resolveValue(i);
                }
                return rf(t);
              })
            )
          );
        }
      }),
      (bD = (() => L_.QueryCache)()),
      (xD = class {
        constructor(e, t = 1 / 0) {
          (I(this, `queryEngine`, e),
            I(this, `maxSize`, t),
            I(this, `cache`, new Map()),
            I(this, `serializedCache`, B_ === void 0 ? void 0 : new Map()));
        }
        clear() {
          (this.cache.clear(), this.serializedCache?.clear());
        }
        prune() {
          if (!(this.cache.size <= this.maxSize))
            for (let [e, t] of this.cache) {
              if (this.cache.size <= this.maxSize) break;
              t.state !== `pending` && (this.cache.delete(e), this.serializedCache?.delete(e));
            }
        }
        get(e, t) {
          let n = Tp(e, t),
            r = this.cache.get(n);
          if (r) {
            if (
              (this.cache.delete(n),
              this.cache.set(n, r),
              B_ !== void 0 && this.serializedCache !== void 0 && !Wf(n) && r.state === `fulfilled`)
            ) {
              let e = this.serializedCache.get(n);
              e !== void 0 && B_.set(bD, n, e);
            }
            return r;
          }
          let i = new v_(() => {
            let r = Wf(n),
              i = r ? void 0 : Tn(bD, n);
            if (i)
              try {
                return this.queryEngine.resolveSerializableQueryResult(i, e, t);
              } catch (e) {
                Cn(e, n);
              }
            return B_ !== void 0 && !r
              ? this.queryEngine
                  .serializeableQuery(e, t)
                  .then(([e, t]) => (this.serializedCache?.set(n, t), B_.set(bD, n, t), e))
              : this.queryEngine.query(e, t);
          });
          return (this.cache.set(n, i), this.prune(), i);
        }
      }),
      (SD = new xD(new yD())),
      (CD = `style[data-framer-breakpoint-css]`),
      (wD = new Map()),
      (TD = `page`),
      (ED = Symbol(`cycle`)),
      (kD = (() => {
        let e = a(null);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (AD = (() => {
        let e = a(void 0);
        return ((e.displayName = `TickerItemContext`), e);
      })()),
      (jD = (e, t, n, r, i) => ({
        sign: 1,
        direction: i,
        lengthProp: t,
        viewportLengthProp: n,
        paddingStartProp: r,
        measureItem: (n) => ({ start: n[e], end: n[e] + n[t] }),
        getCumulativeInset: (t) => {
          let n = 0,
            r = t;
          for (; r; ) ((n += r[e]), (r = r.offsetParent));
          return n;
        },
      })),
      (MD = (() => jD(`offsetLeft`, `offsetWidth`, `innerWidth`, `paddingLeft`, `right`))()),
      (ND = (() => jD(`offsetTop`, `offsetHeight`, `innerHeight`, `paddingTop`, `bottom`))()),
      (PD = (() => ({
        ...MD,
        sign: -1,
        direction: `left`,
        paddingStartProp: `paddingRight`,
        measureItem: (e, t) => {
          let n = e.offsetWidth,
            r = gm(e, t);
          return { start: r, end: r + n };
        },
        getCumulativeInset: (e) => {
          let t = 0,
            n = e;
          for (; n; ) ((t += gm(n, n.offsetParent)), (n = n.offsetParent));
          return t;
        },
      }))()),
      (FD = { start: `flex-start`, end: `flex-end` }),
      (ID = m(Em)),
      (LD = { start: 0, end: 0 }),
      (RD = { display: `flex`, position: `relative` }),
      (zD = {
        display: `flex`,
        position: `relative`,
        willChange: `transform`,
        listStyleType: `none`,
        padding: 0,
        margin: 0,
        justifyContent: `flex-start`,
      }),
      (BD = { duration: 0.2, ease: `linear` }),
      (VD = m(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: c,
            gap: l,
            overflow: u,
            playState: d,
            ...f
          } = e,
          p = r ?? P.div,
          m = Io(),
          h = (d === `paused` ? 0 : (i ?? 100)) * s;
        return _(ID, {
          ref: t,
          as: p,
          ...f,
          gap: l,
          axis: o,
          align: a ?? `center`,
          isStatic: m,
          velocity: h,
          hoverFactor: c,
          itemSize: `manual`,
          overflow: u,
        });
      })),
      (HD = m(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: u,
            gap: d,
            overflow: f,
            playState: p,
            ...m
          } = e,
          h = r ?? P.div,
          g = Lr() === `rtl` && o === `x` ? -1 : 1,
          v = (p === `paused` ? 0 : (i ?? 100)) * s * g,
          y = be(0),
          b = l(0),
          x = l(!1),
          S = l(!1),
          C = l(!1),
          w = (e) => {
            C.current &&
              e.target &&
              e.target !== e.currentTarget &&
              (e.preventDefault(), e.stopPropagation());
          };
        return (
          fe((e, t) => {
            let n = Math.abs(y.getVelocity()),
              r = S.current ? v * u : v;
            if (performance.now() > b.current && (!x.current || n < Math.abs(r))) {
              let e = (t / 1e3) * r,
                n = y.get() - e;
              ((x.current &&= (y.stop(), !1)), y.set(n));
            }
          }),
          c(() => {
            p === `paused` && y.stop();
          }, [p, y]),
          _(ID, {
            ref: t,
            as: h,
            ...m,
            gap: d,
            axis: o,
            align: a ?? `center`,
            itemSize: `manual`,
            overflow: f,
            _dragX: o === `x` ? y : void 0,
            _dragY: o === `y` ? y : void 0,
            offset: y,
            drag: o,
            dragMomentum: !0,
            onClickCapture: w,
            onDragStart: () => {
              C.current = !0;
            },
            onDragEnd: () => {
              ((b.current = performance.now()),
                (x.current = !0),
                setTimeout(() => {
                  C.current = !1;
                }, 5));
            },
            onMouseEnter: () => {
              S.current = !0;
            },
            onMouseLeave: () => {
              S.current = !1;
            },
          })
        );
      })),
      (UD = (() => {
        let e = a(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (WD = ({ onPlayStateChange: e, children: t }) => {
        let n = C(
          () => ({ start: () => k(() => e(`running`)), stop: () => k(() => e(`paused`)) }),
          [e]
        );
        return _(UD.Provider, { value: n, children: t });
      }),
      (GD = m(function (e, t) {
        let {
            children: n,
            tickerEffectDraggable: r,
            tickerEffectStackDirection: a,
            tickerEffectXOverflow: o,
            tickerEffectYOverflow: s,
            tickerEffectOverflow: c,
            tickerEffectGap: l,
            tickerEffectDirectionModifier: u,
            tickerEffectHoverModifier: d,
            tickerEffectPosition: f,
            tickerEffectIsDataRepeater: p,
            style: m,
            ...h
          } = e,
          g = Io(),
          [v, y] = i(`running`),
          b = a?.startsWith(`column`) ? `y` : `x`,
          x = u === `reverse` ? -1 : 1,
          S = U(d) ? d / 100 : 1,
          C = (b === `x` ? (o ?? c ?? `visible`) : (s ?? c ?? `visible`)) === `visible`,
          w = km(l, b),
          T = um(n),
          E = { ...m, "--ticker-cms-total-children": p ? T.length : void 0, position: f };
        return g || !r
          ? _(WD, {
              onPlayStateChange: y,
              children: _(VD, {
                ...h,
                style: E,
                ref: t,
                axis: b,
                gap: w,
                overflow: C,
                directionModifier: x,
                hoverModifier: S,
                items: T,
                playState: v,
              }),
            })
          : _(WD, {
              onPlayStateChange: y,
              children: _(HD, {
                ...h,
                style: E,
                ref: t,
                axis: b,
                gap: w,
                overflow: C,
                directionModifier: x,
                hoverModifier: S,
                items: T,
                playState: v,
              }),
            });
      })),
      (KD = (e) => (t) => (t.tickerEffectEnabled ? _(GD, { ...t, as: e }) : _(e, { ...t }))),
      (qD = (e) =>
        j.forwardRef((t, n) => {
          let {
              flowEffectEnabled: r,
              flowEffectTransition: i,
              isNestedFlowEffect: a,
              transition: o,
              ...s
            } = t,
            c = C(() => (i ? { default: o, layout: i } : o), [o, i]);
          if (!r) return _(e, { ...s, ref: n, transition: o });
          let l = _(e, { ...s, ref: n });
          return (
            i && (l = _(ze, { transition: c, children: l })),
            a || (l = _(Xe, { children: l })),
            l
          );
        })),
      (JD = new Set([
        `visibleVariantId`,
        `obscuredVariantId`,
        `threshold`,
        `animateOnce`,
        `variantAppearEffectEnabled`,
        `targets`,
        `exitTarget`,
        `scrollDirection`,
      ])),
      (YD = { inputRange: [], outputRange: [] }),
      (XD = (e) =>
        j.forwardRef((t, n) => {
          if (J.current() === J.canvas) return _(e, { ...t, ref: n });
          let [r, i] = qc(t, JD),
            {
              visibleVariantId: a,
              obscuredVariantId: o,
              animateOnce: s,
              threshold: c,
              variantAppearEffectEnabled: l,
              targets: u,
              exitTarget: d,
              scrollDirection: f,
            } = r,
            [p, m] = j.useState(o),
            h = j.useRef(!1),
            g = Ks(n);
          Xs(
            g,
            (e) => {
              r.targets ||
                r.scrollDirection ||
                (s && h.current === !0) ||
                (h.current !== e &&
                  ((h.current = e),
                  j.startTransition(() => {
                    m(e ? a : o);
                  })));
            },
            { enabled: l, animateOnce: s, threshold: { y: c } }
          );
          let v = Ut(),
            y = j.useRef(v);
          return (
            j.useEffect(() => {
              if (f || !u) return;
              y.current !== v && ((y.current = v), j.startTransition(() => m(o)));
              let e = {},
                t;
              return N((n, { y: r }) => {
                if (!u[0] || (u[0].ref && !u[0].ref.current)) return;
                let { inputRange: i, outputRange: a } = jm(u, (c ?? 0) * r.containerLength, d);
                if (i.length === 0 || i.length !== a.length) return;
                let o = Math.floor(me(r.current, i, a));
                if (s && e[o]) return;
                e[o] = !0;
                let l = u[o]?.target ?? void 0;
                l !== t &&
                  ((t = l),
                  j.startTransition(() => {
                    m(l);
                  }));
              });
            }, [v, s, c, u, t.variant, f, d]),
            yl(f, (e) => j.startTransition(() => m(e)), { enabled: l, repeat: !s }),
            Wt(() => {
              if (!l) return;
              let e = !r.targets && !r.scrollDirection ? r.obscuredVariantId : void 0;
              j.startTransition(() => m(e));
            }),
            !(`variantAppearEffectEnabled` in r) || l === !0
              ? _(e, { ...i, variant: p ?? t.variant, ref: g })
              : _(e, { ...i })
          );
        })),
      (ZD = j.createContext(void 0)),
      (QD = () => j.useContext(ZD)),
      ($D = {
        Arial: {
          Regular: { selector: `Arial`, weight: void 0 },
          Black: { selector: `Arial-Black`, weight: void 0 },
          Narrow: { selector: `Arial Narrow`, weight: void 0 },
          "Rounded Bold": { selector: `Arial Rounded MT Bold`, weight: void 0 },
        },
        Avenir: {
          Book: { selector: `Avenir`, weight: void 0 },
          Light: { selector: `Avenir-Light`, weight: void 0 },
          Medium: { selector: `Avenir-Medium`, weight: void 0 },
          Heavy: { selector: `Avenir-Heavy`, weight: void 0 },
          Black: { selector: `Avenir-Black`, weight: void 0 },
        },
        "Avenir Next": {
          Regular: { selector: `Avenir Next`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNext-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNext-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNext-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNext-Heavy`, weight: void 0 },
        },
        "Avenir Next Condensed": {
          Regular: { selector: `Avenir Next Condensed`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNextCondensed-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNextCondensed-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNextCondensed-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNextCondensed-Heavy`, weight: void 0 },
        },
        Baskerville: {
          Regular: { selector: `Baskerville`, weight: void 0 },
          "Semi Bold": { selector: `Baskerville-SemiBold`, weight: void 0 },
        },
        "Bodoni 72": {
          Book: { selector: `Bodoni 72`, weight: void 0 },
          Oldstyle: { selector: `Bodoni 72 Oldstyle`, weight: void 0 },
          Smallcaps: { selector: `Bodoni 72 Smallcaps`, weight: void 0 },
        },
        Courier: { Regular: { selector: `Courier`, weight: void 0 } },
        "Courier New": { Regular: { selector: `Courier New`, weight: void 0 } },
        Futura: {
          Medium: { selector: `Futura`, weight: void 0 },
          Condensed: { selector: `Futura-CondensedMedium`, weight: void 0 },
          "Condensed ExtraBold": { selector: `Futura-CondensedExtraBold`, weight: void 0 },
        },
        Georgia: { Regular: { selector: `Georgia`, weight: void 0 } },
        "Gill Sans": {
          Regular: { selector: `Gill Sans`, weight: void 0 },
          Light: { selector: `GillSans-Light`, weight: void 0 },
          SemiBold: { selector: `GillSans-SemiBold`, weight: void 0 },
          UltraBold: { selector: `GillSans-UltraBold`, weight: void 0 },
        },
        Helvetica: {
          Regular: { selector: `Helvetica`, weight: void 0 },
          Light: { selector: `Helvetica-Light`, weight: void 0 },
          Bold: { selector: `Helvetica-Bold`, weight: void 0 },
          Oblique: { selector: `Helvetica-Oblique`, weight: void 0 },
          "Light Oblique": { selector: `Helvetica-LightOblique`, weight: void 0 },
          "Bold Oblique": { selector: `Helvetica-BoldOblique`, weight: void 0 },
        },
        "Helvetica Neue": {
          Regular: { selector: `Helvetica Neue`, weight: void 0 },
          UltraLight: { selector: `HelveticaNeue-UltraLight`, weight: void 0 },
          Thin: { selector: `HelveticaNeue-Thin`, weight: void 0 },
          Light: { selector: `HelveticaNeue-Light`, weight: void 0 },
          Medium: { selector: `HelveticaNeue-Medium`, weight: void 0 },
          Bold: { selector: `HelveticaNeue-Bold`, weight: void 0 },
          Italic: { selector: `HelveticaNeue-Italic`, weight: void 0 },
          "UltraLight Italic": { selector: `HelveticaNeue-UltraLightItalic`, weight: void 0 },
          "Thin Italic": { selector: `HelveticaNeue-ThinItalic`, weight: void 0 },
          "Light Italic": { selector: `HelveticaNeue-LightItalic`, weight: void 0 },
          "Medium Italic": { selector: `HelveticaNeue-MediumItalic`, weight: void 0 },
          "Bold Italic": { selector: `HelveticaNeue-BoldItalic`, weight: void 0 },
          "Condensed Bold": { selector: `HelveticaNeue-CondensedBold`, weight: void 0 },
          "Condensed Black": { selector: `HelveticaNeue-CondensedBlack`, weight: void 0 },
        },
        "Hoefler Text": { Regular: { selector: `Hoefler Text`, weight: void 0 } },
        Impact: { Regular: { selector: `Impact`, weight: void 0 } },
        "Lucida Grande": { Regular: { selector: `Lucida Grande`, weight: void 0 } },
        Menlo: { Regular: { selector: `Menlo`, weight: void 0 } },
        Monaco: { Regular: { selector: `Monaco`, weight: void 0 } },
        Optima: {
          Regular: { selector: `Optima`, weight: void 0 },
          ExtraBlack: { selector: `Optima-ExtraBlack`, weight: void 0 },
        },
        Palatino: { Regular: { selector: `Palatino`, weight: void 0 } },
        "SF Pro Display": {
          Regular: { selector: `__SF-UI-Display-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Black__`, weight: 900 },
          Italic: { selector: `__SF-UI-Display-Italic__`, weight: 400 },
          "Ultralight Italic": { selector: `__SF-UI-Display-Ultralight-Italic__`, weight: 100 },
          "Thin Italic": { selector: `__SF-UI-Display-Thin-Italic__`, weight: 200 },
          "Light Italic": { selector: `__SF-UI-Display-Light-Italic__`, weight: 300 },
          "Medium Italic": { selector: `__SF-UI-Display-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Display-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Display-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Display-Heavy-Italic__`, weight: 800 },
          "Black Italic": { selector: `__SF-UI-Display-Black-Italic__`, weight: 900 },
        },
        "SF Pro Display Condensed": {
          Regular: { selector: `__SF-UI-Display-Condensed-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Condensed-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Condensed-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Condensed-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Condensed-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Condensed-Black__`, weight: 900 },
        },
        "SF Pro Text": {
          Regular: { selector: `__SF-UI-Text-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Heavy__`, weight: 800 },
          Italic: { selector: `__SF-UI-Text-Italic__`, weight: 400 },
          "Light Italic": { selector: `__SF-UI-Text-Light-Italic__`, weight: 200 },
          "Medium Italic": { selector: `__SF-UI-Text-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Text-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Text-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Text-Heavy-Italic__`, weight: 800 },
        },
        "SF Pro Text Condensed": {
          Regular: { selector: `__SF-UI-Text-Condensed-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Condensed-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Condensed-Heavy__`, weight: 800 },
        },
        Tahoma: { Regular: { selector: `Tahoma`, weight: void 0 } },
        Times: { Regular: { selector: `Times`, weight: void 0 } },
        "Times New Roman": { Regular: { selector: `Times New Roman`, weight: void 0 } },
        Trebuchet: { Regular: { selector: `Trebuchet MS`, weight: void 0 } },
        Verdana: { Regular: { selector: `Verdana`, weight: void 0 } },
      }),
      (eO = {
        "__SF-Compact-Display-Regular__": `SFCompactDisplay-Regular|.SFCompactDisplay-Regular`,
        "__SF-Compact-Display-Ultralight__": `SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight`,
        "__SF-Compact-Display-Thin__": `SFCompactDisplay-Thin|.SFCompactDisplay-Thin`,
        "__SF-Compact-Display-Light__": `SFCompactDisplay-Light|.SFCompactDisplay-Light`,
        "__SF-Compact-Display-Medium__": `SFCompactDisplay-Medium|.SFCompactDisplay-Medium`,
        "__SF-Compact-Display-Semibold__": `SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold`,
        "__SF-Compact-Display-Heavy__": `SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy`,
        "__SF-Compact-Display-Black__": `SFCompactDisplay-Black|.SFCompactDisplay-Black`,
        "__SF-Compact-Display-Bold__": `SFCompactDisplay-Bold|.SFCompactDisplay-Bold`,
        "__SF-UI-Text-Regular__": `.SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText`,
        "__SF-UI-Text-Light__": `.SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light`,
        "__SF-UI-Text-Medium__": `.SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium`,
        "__SF-UI-Text-Semibold__": `.SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold`,
        "__SF-UI-Text-Bold__": `.SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold`,
        "__SF-UI-Text-Heavy__": `.SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy`,
        "__SF-UI-Text-Italic__": `.SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic`,
        "__SF-UI-Text-Light-Italic__": `.SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic`,
        "__SF-UI-Text-Medium-Italic__": `.SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic`,
        "__SF-UI-Text-Semibold-Italic__": `.SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic`,
        "__SF-UI-Text-Bold-Italic__": `.SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic`,
        "__SF-UI-Text-Heavy-Italic__": `.SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic`,
        "__SF-Compact-Text-Regular__": `SFCompactText-Regular|.SFCompactText-Regular`,
        "__SF-Compact-Text-Light__": `SFCompactText-Light|.SFCompactText-Light`,
        "__SF-Compact-Text-Medium__": `SFCompactText-Medium|.SFCompactText-Medium`,
        "__SF-Compact-Text-Semibold__": `SFCompactText-Semibold|.SFCompactText-Semibold`,
        "__SF-Compact-Text-Bold__": `SFCompactText-Bold|.SFCompactText-Bold`,
        "__SF-Compact-Text-Heavy__": `SFCompactText-Heavy|.SFCompactText-Heavy`,
        "__SF-Compact-Text-Italic__": `SFCompactText-Italic|.SFCompactText-Italic`,
        "__SF-Compact-Text-Light-Italic__": `SFCompactText-LightItalic|.SFCompactText-LightItalic`,
        "__SF-Compact-Text-Medium-Italic__": `SFCompactText-MediumItalic|.SFCompactText-MediumItalic`,
        "__SF-Compact-Text-Semibold-Italic__": `SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic`,
        "__SF-Compact-Text-Bold-Italic__": `SFCompactText-BoldItalic|.SFCompactText-BoldItalic`,
        "__SF-Compact-Text-Heavy-Italic__": `SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic`,
        "__SF-UI-Display-Condensed-Regular__": `.SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular`,
        "__SF-UI-Display-Condensed-Ultralight__": `.SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight`,
        "__SF-UI-Display-Condensed-Thin__": `.SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin`,
        "__SF-UI-Display-Condensed-Light__": `.SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light`,
        "__SF-UI-Display-Condensed-Medium__": `.SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium`,
        "__SF-UI-Display-Condensed-Semibold__": `.SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold`,
        "__SF-UI-Display-Condensed-Bold__": `.SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold`,
        "__SF-UI-Display-Condensed-Heavy__": `.SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy`,
        "__SF-UI-Display-Condensed-Black__": `.SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black`,
        "__SF-UI-Display-Regular__": `.SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay`,
        "__SF-UI-Display-Ultralight__": `.SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight`,
        "__SF-UI-Display-Thin__": `.SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin`,
        "__SF-UI-Display-Light__": `.SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light`,
        "__SF-UI-Display-Medium__": `.SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium`,
        "__SF-UI-Display-Semibold__": `.SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold`,
        "__SF-UI-Display-Bold__": `.SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold`,
        "__SF-UI-Display-Heavy__": `.SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy`,
        "__SF-UI-Display-Black__": `.SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black`,
        "__SF-UI-Display-Italic__": `.SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic`,
        "__SF-UI-Display-Ultralight-Italic__": `.SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic`,
        "__SF-UI-Display-Thin-Italic__": `.SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic`,
        "__SF-UI-Display-Light-Italic__": `.SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic`,
        "__SF-UI-Display-Medium-Italic__": `.SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic`,
        "__SF-UI-Display-Semibold-Italic__": `.SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic`,
        "__SF-UI-Display-Bold-Italic__": `.SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic`,
        "__SF-UI-Display-Heavy-Italic__": `.SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic`,
        "__SF-UI-Display-Black-Italic__": `.SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic`,
        "__SF-UI-Text-Condensed-Regular__": `.SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular`,
        "__SF-UI-Text-Condensed-Light__": `.SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light`,
        "__SF-UI-Text-Condensed-Medium__": `.SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium`,
        "__SF-UI-Text-Condensed-Semibold__": `.SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold`,
        "__SF-UI-Text-Condensed-Bold__": `.SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold`,
        "__SF-UI-Text-Condensed-Heavy__": `.SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy`,
        "__SF-Compact-Rounded-Regular__": `SFCompactRounded-Regular|.SFCompactRounded-Regular`,
        "__SF-Compact-Rounded-Ultralight__": `SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight`,
        "__SF-Compact-Rounded-Thin__": `SFCompactRounded-Thin|.SFCompactRounded-Thin`,
        "__SF-Compact-Rounded-Light__": `SFCompactRounded-Light|.SFCompactRounded-Light`,
        "__SF-Compact-Rounded-Medium__": `SFCompactRounded-Medium|.SFCompactRounded-Medium`,
        "__SF-Compact-Rounded-Semibold__": `SFCompactRounded-Semibold|.SFCompactRounded-Semibold`,
        "__SF-Compact-Rounded-Bold__": `SFCompactRounded-Bold|.SFCompactRounded-Bold`,
        "__SF-Compact-Rounded-Heavy__": `SFCompactRounded-Heavy|.SFCompactRounded-Heavy`,
        "__SF-Compact-Rounded-Black__": `SFCompactRounded-Black|.SFCompactRounded-Black`,
      }),
      (tO = $D),
      (nO = `System Default`),
      (rO = class {
        constructor() {
          (I(this, `name`, `local`),
            I(this, `fontFamilies`, []),
            I(this, `byFamilyName`, new Map()),
            I(this, `fontAliasBySelector`, new Map()),
            I(this, `fontAliases`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.addFontFamily(t), t);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        importFonts() {
          let e = [];
          for (let t of Object.keys(tO)) {
            let n = tO[t];
            if (!n) continue;
            let r = this.createFontFamily(t);
            for (let e of Object.keys(n)) {
              let t = n[e];
              if (!t) continue;
              let { selector: i, weight: a } = t,
                o = { variant: e, selector: i, weight: a, family: r, cssFamilyName: r.name };
              r.fonts.push(o);
            }
            e.push(...r.fonts);
          }
          for (let [e, t] of Object.entries(eO)) this.addFontAlias(e, t);
          let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
          this.addFontFamily(t);
          for (let [e, t] of n) this.addFontAlias(e, t);
          return (e.push(...t.fonts), e);
        }
        addFontAlias(e, t) {
          (this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e));
        }
        getSystemFontFamily() {
          let e = { name: nO, fonts: [], source: this.name },
            t = new Map(),
            n = [400, 100, 200, 300, 500, 600, 700, 800, 900];
          for (let r of [`normal`, `italic`])
            for (let i of n) {
              let n = Nm(i, r),
                a = `__SystemDefault-${i}-${r}__`,
                o = {
                  variant: n,
                  selector: a,
                  style: r,
                  weight: i,
                  family: e,
                  cssFamilyName: e.name,
                };
              (e.fonts.push(o),
                t.set(
                  a,
                  `system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif`
                ));
            }
          return { fontFamily: e, aliases: t };
        }
        getFontAliasBySelector(e) {
          return this.fontAliasBySelector.get(e) || null;
        }
        getFontSelectorByAlias(e) {
          return this.fontAliases.get(e) || null;
        }
        isFontFamilyAlias(e) {
          return !!(e && /^__.*__$/u.exec(e));
        }
      }),
      (iO = {
        100: `Thin`,
        200: `Extra Light`,
        300: `Light`,
        400: `Normal`,
        500: `Medium`,
        600: `Semi Bold`,
        700: `Bold`,
        800: `Extra Bold`,
        900: `Black`,
      }),
      (aO = class extends Map {
        constructor() {
          (super(...arguments), I(this, `_hash`, 0));
        }
        get hash() {
          return this._hash;
        }
        set(e, t) {
          return (this._hash++, super.set(e, t));
        }
        delete(e) {
          return (this._hash++, super.delete(e));
        }
        clear() {
          return (this._hash++, super.clear());
        }
      }),
      (sO = `Variable`),
      (cO = `BI;`),
      (lO = class {
        constructor() {
          (I(this, `name`, `builtIn`),
            I(this, `fontFamilies`, []),
            I(this, `byFamilyName`, new Map()),
            I(this, `assetByKey`, new Map()));
        }
        importFonts(e) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetByKey.clear());
          let t = [];
          for (let n of e) {
            if (!this.isValidBuiltInFont(n)) continue;
            let { properties: e } = n,
              r = e.font.fontFamily,
              i = this.createFontFamily(r, e.font.foundryName, e.font.fontVersion),
              a = e.font.openTypeData,
              o = e.font.variationAxes,
              s = Array.isArray(o),
              c = s ? `variable` : e.font.fontSubFamily || `regular`,
              l = Rm(n),
              u = Hm(o),
              d = {
                assetKey: n.key,
                family: i,
                selector: this.createSelector(r, c, e.font.fontVersion),
                variant: c,
                file: l,
                hasOpenTypeFeatures: Vm(a),
                variationAxes: u,
                category: e.font.fontCategory,
                weight: s ? Km(u, e.font.faceDescriptors?.weight) : Gm(c),
                style: Jm(c),
                cssFamilyName: zm(r, s),
              };
            (i.fonts.push(d), this.assetByKey.set(n.key, n), t.push(d));
          }
          for (let e of this.fontFamilies)
            e.fonts.sort((e, t) => {
              let n = Gm(e.variant),
                r = Gm(t.variant);
              return !n || !r ? 1 : n - r;
            });
          return t;
        }
        static parseVariant(e) {
          let t = qm(e);
          return {
            weight: t === `variable` || t === `variable-italic` ? 400 : uO[t],
            style: Jm(e),
          };
        }
        getFontBySelector(e) {
          let t = this.parseSelector(e);
          if (!t) return;
          let n = this.getFontFamilyByName(t.name);
          if (n) return n.fonts.find((t) => t.selector === e);
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e, t, n) {
          let r = this.byFamilyName.get(e);
          if (r && r.version === n) return r;
          let i = { source: this.name, name: e, fonts: [], foundryName: t, version: n };
          return (this.addFontFamily(i), i);
        }
        getOpenTypeFeatures(e) {
          V(e.assetKey, `Font must have an asset key`);
          let t = this.assetByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return Vm(t)
            ? t?.map((e) => {
                if (Um(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        isValidBuiltInFont(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font ||
            !e.properties.font.fontVersion ||
            !e.properties.font.fontFamily
            ? !1
            : `fontFamily` in e.properties.font;
        }
        createSelector(e, t, n) {
          return `${cO}${e}/${t}/${n}`;
        }
        parseSelector(e) {
          if (!e.startsWith(cO)) return null;
          let [t, n] = e.split(cO);
          if (n === void 0) return null;
          let [r, i, a] = n.split(`/`);
          return !r || !i || !a
            ? null
            : {
                name: r,
                variant: i,
                source: this.name,
                isVariable: i.toLowerCase().includes(`variable`),
              };
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
      }),
      (uO = {
        ultralight: 100,
        "ultralight-italic": 100,
        thin: 200,
        "thin-italic": 200,
        demi: 200,
        light: 300,
        "light-italic": 300,
        normal: 350,
        base: 400,
        regular: 400,
        classic: 400,
        "regular-slanted": 400,
        italic: 400,
        oblique: 400,
        dense: 400,
        brukt: 300,
        book: 400,
        "book-italic": 400,
        text: 400,
        "text-italic": 400,
        medium: 500,
        solid: 500,
        "medium-oblique": 500,
        "medium-italic": 500,
        mittel: 500,
        semibold: 600,
        "semibold-italic": 600,
        bold: 700,
        "bold-italic": 700,
        "bold-oblique": 700,
        fett: 700,
        ultrabold: 800,
        "ultrabold-italic": 800,
        extrabold: 800,
        "extrabold-italic": 800,
        black: 900,
        extralight: 100,
        "extralight-italic": 100,
        "black-italic": 900,
        "extra-italic": 900,
        "extra-italic-bold": 900,
        satt: 900,
        heavy: 900,
        "heavy-italic": 900,
        serif: 100,
        school: 200,
        expanded: 300,
        gothique: 500,
        "dense-light": 200,
        "dense-regular": 300,
        "dense-medium": 400,
        "dense-bold": 500,
        "solid-light": 600,
        "solid-regular": 700,
        "solid-medium": 800,
        "solid-bold": 900,
        53: 400,
        55: 600,
        "narrow-regular": 350,
        "narrow-black": 850,
        variable: 1e3,
        "variable-italic": 1e3,
      }),
      (dO = $d(`custom-font-source`)),
      (fO = `CUSTOM;`),
      (pO = `CUSTOMV2;`),
      (mO = class e {
        constructor() {
          (I(this, `name`, `custom`),
            I(this, `fontFamilies`, []),
            I(this, `byFamilyName`, new Map()),
            I(this, `assetsByKey`, new Map()));
        }
        deprecatedImportFonts(t) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
          let n = [];
          for (let r of t) {
            if (!this.isValidCustomFontAsset(r)) continue;
            let t = r.properties?.font.variationAxes,
              i = Array.isArray(t),
              a = rh(r.properties),
              o = this.createFontFamily(a),
              s = r.properties?.font.openTypeData,
              c = i ? `variable` : this.inferVariantName(a),
              l = Rm(r),
              u = e.createLegacySelector(a),
              { family: d, variant: f } = ih(r.properties.font),
              p = e.createSelector(d, f),
              m = {
                assetKey: r.key,
                family: o,
                selector: u,
                variant: c,
                file: l,
                hasOpenTypeFeatures: Vm(s),
                variationAxes: Hm(t),
                owner: sh(r),
                cssFamilyName: e.cssFontFamilyFromSelector(u),
                alternativeSelectors: {
                  [p]: { variant: f, cssFamilyName: e.cssFontFamilyFromSelector(p) },
                },
              };
            (o.fonts.push(m), this.assetsByKey.set(r.key, r), n.push(...o.fonts));
          }
          return n;
        }
        importFonts(t, n) {
          if (!n) return this.deprecatedImportFonts(t);
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
          let r = {};
          for (let n of t) {
            if (!this.isValidCustomFontAsset(n)) continue;
            let { family: t, variant: i, weight: a, style: o } = ih(n.properties.font),
              s = n.properties.font.variationAxes,
              c = Array.isArray(s),
              l = n.properties.font.openTypeData,
              u = Rm(n),
              d = sh(n),
              f = rh(n.properties),
              p = e.createLegacySelector(f),
              m = this.createFontFamily(t),
              h = e.createSelector(m.name, i),
              g = {
                assetKey: n.key,
                family: m,
                selector: h,
                variant: i,
                weight: a,
                style: o,
                file: u,
                hasOpenTypeFeatures: Vm(l),
                variationAxes: Hm(s),
                owner: d,
                alternativeSelectors: {
                  [p]: {
                    variant: c ? `variable` : this.inferVariantName(f),
                    cssFamilyName: e.cssFontFamilyFromSelector(p),
                  },
                },
                cssFamilyName: e.cssFontFamilyFromSelector(h),
              },
              _ = nh(m.fonts, g);
            if (_?.projectDuplicate) g.owner === `project` && ((m.fonts[_.index] = g), (r[h] = g));
            else if (_) {
              dO.debug(`Duplicate font found for:`, g, `with existing font:`, _.existingFont);
              let e = _.existingFont,
                t = g.file?.endsWith(`.woff2`) ?? !1,
                n = e.file?.endsWith(`.woff2`) ?? !1;
              t && !n && ((m.fonts[_.index] = g), (r[h] = g));
            } else (m.fonts.push(g), (r[h] = g));
            this.assetsByKey.set(n.key, n);
          }
          for (let e of this.fontFamilies) e.fonts.length > 0 && oh(e);
          return Object.values(r);
        }
        static createSelector(e, t) {
          return `${pO}${e}${t ? ` ${t}` : ``}`;
        }
        static createLegacySelector(e) {
          return `${fO}${e}`;
        }
        static cssFontFamilyFromSelector(e) {
          return (
            V($m(e), `Selector must be a custom font selector`),
            th(e) ? e.slice(fO.length) : e.slice(pO.length)
          );
        }
        isValidCustomFontAsset(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font
            ? !1
            : `fontFamily` in e.properties.font;
        }
        getOpenTypeFeatures(e) {
          V(e.assetKey, `Font must have an asset key`);
          let t = this.assetsByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return Vm(t)
            ? t?.map((e) => {
                if (Um(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        inferVariantName(e) {
          let t = [
              `thin`,
              `ultra light`,
              `extra light`,
              `light`,
              `normal`,
              `medium`,
              `semi bold`,
              `bold`,
              `extra bold`,
              `black`,
            ],
            n = [...t.map((e) => `${e} italic`), ...t],
            r = e.toLowerCase(),
            i = [...r.split(` `), ...r.split(`-`), ...r.split(`_`)],
            a = n.find((e) => i.includes(e) || i.includes(e.replace(/\s+/gu, ``)));
          return a ? a.replace(/^\w|\s\w/gu, (e) => e.toUpperCase()) : `Regular`;
        }
        createFontFamily(e) {
          let t = this.byFamilyName.get(e);
          if (t) return t;
          let n = { source: this.name, name: e, fonts: [] };
          return (this.addFontFamily(n), n);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) || null;
        }
      }),
      (hO = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`]),
      (gO = `FS;`),
      (_O = {
        thin: 100,
        hairline: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        ultra: 800,
        black: 900,
        heavy: 900,
      }),
      (vO = Object.keys(_O)),
      (yO = (() => RegExp(`^(?:${[...vO, `italic`, `variable`].join(`|`)})`, `u`))()),
      (bO = class e {
        constructor() {
          (I(this, `name`, `fontshare`),
            I(this, `fontFamilies`, []),
            I(this, `byFamilyName`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          let t = e.toLowerCase().split(` `),
            n = vO.find((e) => t.includes(e)),
            r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`;
          return { weight: (n && _O[n]) || 400, style: r === `italic` ? r : `normal` };
        }
        parseSelector(e) {
          if (!e.startsWith(gO)) return null;
          let t = e.split(`-`);
          if (t.length !== 2) return null;
          let [n, r] = t;
          return !n || !r
            ? null
            : {
                name: n.replace(gO, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`),
              };
        }
        static createSelector(e, t) {
          return `${gO}${e}-${t.toLowerCase()}`;
        }
        static createMetadataSelector(e) {
          return `${gO}${e}`;
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        async importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = await ch(`fontshare`),
            i = [];
          for (let a of t) {
            let t = a.font_styles
                .filter((e) => {
                  let t = e.name.toLowerCase();
                  return !(!yO.exec(t) || t.split(` `).includes(`wide`));
                })
                .map((t) => ({
                  ...e.parseVariant(t.name),
                  selector: e.createSelector(a.name, t.name),
                  isVariable: t.is_variable,
                  fontshareVariantName: t.name,
                  file: t.file,
                })),
              o = e.createMetadataSelector(a.name),
              s = n?.[o],
              c = a.name,
              l = this.getFontFamilyByName(c);
            l || ((l = { name: c, fonts: [], source: this.name }), this.addFontFamily(l));
            let u = r[e.createMetadataSelector(a.name)];
            for (let e of t) {
              let {
                  variantBold: n,
                  variantBoldItalic: r,
                  variantItalic: o,
                  variantVariable: c,
                  variantVariableItalic: d,
                } = Ym(e, t),
                f = {
                  family: l,
                  variant: e.fontshareVariantName.toLowerCase(),
                  selector: e.selector,
                  selectorBold: n?.selector,
                  selectorBoldItalic: r?.selector,
                  selectorItalic: o?.selector,
                  selectorVariable: c?.selector,
                  selectorVariableItalic: d?.selector,
                  weight: e.weight,
                  style: e.style,
                  file: e.file,
                  category: fh(a.category),
                  hasOpenTypeFeatures: u,
                  variationAxes: e.isVariable ? s : void 0,
                  cssFamilyName: zm(l.name, e.isVariable),
                };
              (l.fonts.push(f), i.push(f));
            }
          }
          return i;
        }
        async getOpenTypeFeatures(t) {
          return (await lh(`fontshare`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (xO = `Inter`),
      (SO = `FR;`),
      (CO = {
        Thin: 100,
        ExtraLight: 200,
        Light: 300,
        "": 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 800,
        Black: 900,
      }),
      (wO = class e {
        constructor() {
          (I(this, `name`, `framer`),
            I(this, `fontFamilies`, []),
            I(this, `byFamilyName`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        static getDraftFontPropertiesBySelector(e) {
          if (!e.startsWith(SO) && !e.startsWith(xO)) return null;
          let [t, n = ``] = e.split(`-`);
          if (!t) return null;
          let r = n.includes(`Italic`) ? `italic` : `normal`,
            i = n.replace(`Italic`, ``);
          return {
            cssFamilyName: t,
            style: r,
            weight: (i && CO[i]) || 400,
            source: `framer`,
            variant: void 0,
            category: `sans-serif`,
          };
        }
        static createMetadataSelector(e) {
          return `${SO}${e}`;
        }
        importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = [];
          return (
            t.forEach((t) => {
              let { uiFamilyName: i, ...a } = t,
                o = e.createMetadataSelector(t.uiFamilyName),
                s = n?.[o],
                c = this.getFontFamilyByName(i);
              c ||= this.addFontFamily(i);
              let l = t.selector === t.selectorVariable || t.selector === t.selectorVariableItalic,
                u = { ...a, family: c, variationAxes: l ? s : void 0 };
              (c.fonts.push(u), r.push(u));
            }),
            r
          );
        }
        async getOpenTypeFeatures(t) {
          return (await lh(`framer`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (TO = `GF;`),
      (EO = class e {
        constructor() {
          (I(this, `name`, `google`),
            I(this, `fontFamilies`, []),
            I(this, `byFamilyName`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          if (e === `regular`) return { style: `normal`, weight: 400 };
          let t = /(\d*)(normal|italic)?/u.exec(e);
          return t
            ? { weight: parseInt(t[1] || `400`), style: t[2] === `italic` ? `italic` : `normal` }
            : {};
        }
        parseSelector(e) {
          if (!e.startsWith(TO)) return null;
          let t = e.includes(`-variable-`),
            n = t ? e.split(`-variable-`) : e.split(`-`);
          if (n.length !== 2) return null;
          let [r, i] = n;
          return !r || !i
            ? null
            : { name: r.replace(TO, ``), variant: i, source: this.name, isVariable: t };
        }
        static createSelector(e, t, n) {
          return `${TO}${e}-${n ? `variable-` : ``}${t}`;
        }
        static createMetadataSelector(e) {
          return `${TO}${e}`;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        async importFonts(t, n, r) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let i = await ch(`google`),
            a = [],
            o = mh(t, (e) => e.family),
            s = mh(n, (e) => e.family);
          for (let t in o) {
            let n = o[t];
            if (!n) continue;
            let c = this.getFontFamilyByName(n.family);
            c ||= this.addFontFamily(n.family);
            let l = n.variants.map((r) => ({
                ...e.parseVariant(r),
                googleFontsVariantName: r,
                selector: e.createSelector(t, r, !1),
                isVariable: !1,
                file: n.files[r],
              })),
              u = s[t],
              d = u?.axes
                ? u.variants.map((n) => ({
                    ...e.parseVariant(n),
                    googleFontsVariantName: n,
                    selector: e.createSelector(t, n, !0),
                    isVariable: !0,
                    file: u.files[n],
                  }))
                : [],
              f = e.createMetadataSelector(n.family),
              p = r?.[f],
              m = [...l, ...d],
              h = m.filter(Mm),
              g = i[e.createMetadataSelector(t)];
            for (let e of m) {
              let { weight: t, style: r, selector: i, googleFontsVariantName: o } = e,
                {
                  variantBold: s,
                  variantItalic: l,
                  variantBoldItalic: u,
                  variantVariable: d,
                  variantVariableItalic: f,
                } = (Mm(e) ? Ym(e, h) : void 0) ?? {},
                m = {
                  family: c,
                  variant: o,
                  selector: i,
                  selectorBold: s?.selector,
                  selectorBoldItalic: u?.selector,
                  selectorItalic: l?.selector,
                  selectorVariable: d?.selector,
                  selectorVariableItalic: f?.selector,
                  weight: t,
                  style: r,
                  category: ph(n.category),
                  file: e.file?.replace(`http://`, `https://`),
                  variationAxes: e.isVariable ? p : void 0,
                  hasOpenTypeFeatures: g,
                  cssFamilyName: zm(c.name, e.isVariable),
                };
              (c.fonts.push(m), a.push(m));
            }
          }
          return a;
        }
        async getOpenTypeFeatures(t) {
          return (await lh(`google`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (DO = Ne(Xg(), 1)),
      (OO = 5e3),
      (kO = 3),
      (AO = class extends Error {
        constructor(e) {
          (super(e), (this.name = `FontLoadingError`));
        }
      }),
      (jO = new Map()),
      (MO = new Map()),
      (NO = (e, t) => hh(e, t)),
      (PO = {
        "FR;Inter": [
          { tag: `opsz`, minValue: 14, maxValue: 32, defaultValue: 14, name: `Optical size` },
          { tag: `wght`, minValue: 100, maxValue: 900, defaultValue: 400, name: `Weight` },
        ],
      }),
      (FO = class {
        constructor() {
          (I(this, `enabled`, !1),
            I(this, `bySelector`, new aO()),
            I(this, `loadedSelectors`, new Set()),
            I(this, `getGoogleFontsListPromise`),
            I(this, `getFontshareFontsListPromise`),
            I(this, `getBuiltInFontsListPromise`),
            I(
              this,
              `customFontsImportPromise`,
              new Promise((e) => {
                this.resolveCustomFontsImportPromise = e;
              })
            ),
            I(this, `local`),
            I(this, `google`),
            I(this, `fontshare`),
            I(this, `builtIn`),
            I(this, `framer`),
            I(this, `custom`),
            I(this, `bySelectorValuesCache`),
            I(this, `testing`, { addFont: this.addFont.bind(this) }),
            (this.local = new rO()),
            (this.google = new EO()),
            (this.fontshare = new bO()),
            (this.framer = new wO()),
            (this.custom = new mO()),
            (this.builtIn = new lO()),
            this.importLocalFonts());
        }
        get hash() {
          return this.bySelector.hash;
        }
        addFont(e) {
          if ((this.bySelector.set(e.selector, e), e.alternativeSelectors))
            for (let t of Object.keys(e.alternativeSelectors)) this.bySelector.set(t, e);
        }
        getAvailableFonts() {
          if (
            !this.bySelectorValuesCache ||
            this.bySelectorValuesCache.hash !== this.bySelector.hash
          ) {
            let e = new Map();
            for (let t of this.bySelector.values()) e.set(t, !0);
            this.bySelectorValuesCache = {
              result: Array.from(e.keys()),
              hash: this.bySelector.hash,
            };
          }
          return this.bySelectorValuesCache.result;
        }
        importLocalFonts() {
          for (let e of this.local.importFonts()) (this.addFont(e), this.loadFont(e.selector));
        }
        async importGoogleFonts() {
          return (
            (this.getGoogleFontsListPromise ||= Promise.resolve().then(async () => {
              let { staticFonts: e, variableFonts: t } = await Kx.fetchGoogleFontsList(),
                n = await _h(`google`);
              for (let r of await this.google.importFonts(e, t, n)) this.addFont(r);
              return { staticFonts: e, variableFonts: t };
            })),
            this.getGoogleFontsListPromise
          );
        }
        async importFontshareFonts() {
          if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = Kx.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise,
              t = await _h(`fontshare`);
            for (let n of await this.fontshare.importFonts(e, t)) this.addFont(n);
          }
          return this.getFontshareFontsListPromise;
        }
        async importAllWebFonts() {
          await Promise.all([
            this.importGoogleFonts(),
            this.importFontshareFonts(),
            this.importBuiltInFonts(),
          ]);
        }
        async importBuiltInFonts() {
          if (!this.getBuiltInFontsListPromise) {
            this.getBuiltInFontsListPromise = Kx.fetchBuiltInFontsList();
            let e = await this.getBuiltInFontsListPromise;
            for (let t of await this.builtIn.importFonts(e)) this.addFont(t);
          }
          return this.getBuiltInFontsListPromise;
        }
        importFramerFonts(e) {
          let t = _h(`framer`);
          this.framer.importFonts(e, t).forEach((e) => {
            this.addFont(e);
          });
        }
        importCustomFonts(e, t) {
          this.bySelector.forEach((e, t) => {
            $m(t) && this.bySelector.delete(t);
          });
          let n = this.custom.importFonts(e, t);
          for (let e of n) this.addFont(e);
          this.resolveCustomFontsImportPromise();
        }
        getCustomFontsImportPromise() {
          return this.customFontsImportPromise;
        }
        getFontFamily(e) {
          return this[e.source].getFontFamilyByName(e.name);
        }
        getFontBySelector(e) {
          if (!e) return;
          let t;
          if (((t = this.bySelector.get(e)), t))
            return t.alternativeSelectors && e in t.alternativeSelectors
              ? { ...t, ...t.alternativeSelectors[e] }
              : t;
        }
        getDraftPropertiesBySelector(e) {
          let t = this.getFontBySelector(e);
          if (t)
            return {
              style: t.style,
              weight: t.weight,
              variant: t.variant,
              cssFamilyName: t.cssFamilyName,
              source: t.family.source,
              category: t.category,
            };
          let n = this.google.parseSelector(e);
          if (n) {
            let e = EO.parseVariant(n.variant);
            if (Mm(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: n.variant,
                cssFamilyName: Bm(n, `google`),
                source: `google`,
                category: void 0,
              };
          }
          let r = this.fontshare.parseSelector(e);
          if (r) {
            let e = bO.parseVariant(r.variant);
            if (Mm(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: r.variant,
                cssFamilyName: Bm(r, `fontshare`),
                source: `fontshare`,
                category: void 0,
              };
          }
          let i = this.builtIn.parseSelector(e);
          if (i) {
            let e = lO.parseVariant(i.variant);
            if (Mm(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: i.variant,
                cssFamilyName: Bm(i, `builtIn`),
                source: `builtIn`,
                category: void 0,
              };
          }
          return wO.getDraftFontPropertiesBySelector(e) || null;
        }
        isSelectorLoaded(e) {
          return this.loadedSelectors.has(e);
        }
        async loadFont(e) {
          let t = this.getFontBySelector(e);
          if (!t) return 2;
          if (this.loadedSelectors.has(e)) return 0;
          let n = t.cssFamilyName,
            r = t.family.source,
            i = Qm(t);
          switch (r) {
            case `local`:
              return (this.loadedSelectors.add(e), 1);
            case `framer`:
              if ((ao() || (await gh(t.family.name, t.style, t.weight)), i)) {
                if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
                await NO({ family: n, url: t.file, weight: t.weight, style: t.style }, document);
              }
              return (this.loadedSelectors.add(e), 1);
            case `google`:
            case `fontshare`:
            case `builtIn`:
            case `custom`:
              return t.file
                ? (await NO({ family: n, url: t.file, weight: t.weight, style: t.style }, document),
                  this.loadedSelectors.add(e),
                  1)
                : Promise.reject(`Unable to load font: ${e}`);
            default:
              H(r);
          }
        }
        async loadFontsFromSelectors(e) {
          if (!this.enabled) return [];
          let t = [];
          (e.some((e) => e.startsWith(gO)) &&
            t.push(
              this.importFontshareFonts().catch((e) => {
                Si(`Failed to load Fontshare fonts:`, e);
              })
            ),
            e.some((e) => e.startsWith(TO)) &&
              t.push(
                this.importGoogleFonts().catch((e) => {
                  Si(`Failed to load Google fonts:`, e);
                })
              ),
            e.some((e) => e.startsWith(cO)) &&
              t.push(
                this.importBuiltInFonts().catch((e) => {
                  Si(`Failed to load built-in fonts:`, e);
                })
              ),
            e.some($m) &&
              t.push(
                this.customFontsImportPromise.catch((e) => {
                  Si(`Failed to load custom fonts:`, e);
                })
              ),
            t.length > 0 && (await Promise.all(t)));
          let n = [];
          for (let t of e) n.push(this.loadFont(t));
          return Promise.allSettled(n);
        }
        async loadFonts(e) {
          return {
            newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
              (e) => e.status === `fulfilled` && e.value === 1
            ).length,
          };
        }
        async loadMissingFonts(e, t) {
          let n = e.filter((e) => !IO.loadedSelectors.has(e));
          n.length !== 0 &&
            (await IO.loadWebFontsFromSelectors(n),
            n.every((e) => IO.loadedSelectors.has(e)) && t && t());
        }
        async loadWebFontsFromSelectors(e) {
          return this.loadFontsFromSelectors(e);
        }
        get defaultFont() {
          let e = this.getFontBySelector(`Inter`);
          return (V(e, `Can’t find Inter font`), e);
        }
      }),
      (IO = new FO()),
      (LO = (e) => e.target.value),
      (RO = {
        "data-1p-ignore": !0,
        "data-lpignore": !0,
        "data-form-type": `other`,
        autocomplete: `off`,
      }),
      (zO = m(function (e, t) {
        let {
            autoFocus: n,
            className: r,
            inputName: i,
            max: a,
            min: o,
            placeholder: c,
            required: l,
            step: u,
            style: d,
            type: f,
            maxLength: p,
            value: m,
            defaultValue: h,
            autofillEnabled: g,
            onChange: v,
            onBlur: y,
            onInvalid: b,
            onFocus: x,
            onValid: S,
            onClear: C,
            ...w
          } = e,
          E = Sh(m ?? h, f),
          [D, O, ee] = xh(E ?? ``, !0, v),
          A = Xr(E),
          j = s(() => {
            (O(``), C && k(() => C()));
          }, [C, O]),
          te = _o(S, b, ee, y, x),
          M = s(
            (e) => {
              e.target === e.currentTarget && A.current?.focus();
            },
            [A]
          );
        if (f === `hidden`) return _(P.input, { type: `hidden`, name: i, defaultValue: h });
        let ne = g === !1 ? RO : void 0,
          N = !!D,
          re = !!C && N,
          ie = Kc(BO, Ob, r, f === `text` && VO, f === `textarea` && HO);
        return T(P.div, {
          ref: t,
          onClick: M,
          style: d,
          className: ie,
          ...w,
          children: [
            f === `textarea`
              ? _(P.textarea, {
                  ref: A,
                  ...ne,
                  ...te,
                  required: l,
                  autoFocus: n,
                  name: i,
                  placeholder: c,
                  className: Db,
                  value: D,
                  maxLength: p,
                })
              : _(P.input, {
                  ref: A,
                  ...ne,
                  ...te,
                  type: f,
                  required: l,
                  autoFocus: n,
                  name: i,
                  placeholder: c,
                  className: Kc(Db, !N && kb),
                  value: D,
                  min: o,
                  max: a,
                  step: u,
                  maxLength: p,
                }),
            re &&
              _(`button`, {
                type: `button`,
                className: UO,
                onClick: j,
                "aria-label": `Clear`,
                children: _(Ch, {}),
              }),
          ],
        });
      })),
      (BO = `framer-form-text-input`),
      (VO = `framer-form-text-input-type`),
      (HO = `framer-form-textarea-input-type`),
      (UO = `framer-form-text-input-clear`),
      (WO = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (GO = `<svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (KO = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`),
      (qO = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`),
      (JO = yb(
        zO,
        (() => [
          ...jb,
          ...Pb,
          ...Mb,
          Z(`.${Ob}`, {
            boxShadow: Z.variable(`--framer-input-box-shadow`),
            borderTopLeftRadius: Z.variable(`--framer-input-border-radius-top-left`),
            borderTopRightRadius: Z.variable(`--framer-input-border-radius-top-right`),
            borderBottomRightRadius: Z.variable(`--framer-input-border-radius-bottom-right`),
            borderBottomLeftRadius: Z.variable(`--framer-input-border-radius-bottom-left`),
            cornerShape: Z.variable(`--framer-input-corner-shape`),
            background: Z.variable(`--framer-input-background`),
            transition: Z.variable(`--framer-input-focused-transition`),
            transitionProperty: `background, box-shadow`,
          }),
          Z(`.${BO} .${Db}::placeholder`, {
            color: Z.variable(`--framer-input-placeholder-color`),
          }),
          Z(`.${BO}`, {
            display: `flex`,
            alignItems: `center`,
            padding: Z.variable(`--framer-input-padding`),
          }),
          Z(`.${BO} .${Db}`, { flex: 1, minWidth: 0, width: `auto`, padding: 0 }),
          Z(`.${BO}.${HO}`, { padding: 0 }),
          Z(`.${BO}.${HO} textarea.${Db}`, {
            width: `100%`,
            padding: Z.variable(`--framer-input-padding`),
          }),
          Z(`.${BO} .${Db}[type="date"], .${BO} .${Db}[type="time"]`, {
            "-webkit-appearance": `none`,
            appearance: `none`,
          }),
          Z(`.${BO} .${Db}::-webkit-date-and-time-value`, { textAlign: `start` }),
          Z(`.${BO} textarea`, {
            display: `flex`,
            resize: Z.variable(`--framer-textarea-resize`),
            overflowY: `auto`,
            minHeight: `inherit`,
            maxHeight: `inherit`,
            whiteSpace: `break-spaces`,
          }),
          Z(`.${BO} textarea::-webkit-resizer`, { background: `no-repeat ${yt(WO)}` }),
          Z(`.${BO}:dir(rtl) textarea::-webkit-resizer`, { background: `no-repeat ${yt(GO)}` }),
          Z(`.${BO} textarea::-webkit-scrollbar`, { cursor: `pointer`, background: `transparent` }),
          Z(`.${BO} textarea::-webkit-scrollbar-thumb:window-inactive`, { opacity: 0 }),
          Z(`.${BO} textarea::-webkit-scrollbar-corner`, {
            background: `none`,
            backgroundColor: `transparent`,
            outline: `none`,
          }),
          Z(`.${BO} .${Db}::-webkit-datetime-edit`, {
            height: Z.variable(`--framer-input-font-line-height`),
          }),
          Z(`.${BO} .${Db}.${kb}::-webkit-datetime-edit`, {
            color: Z.variable(`--framer-input-placeholder-color`),
            "-webkit-text-fill-color": Z.variable(`--framer-input-placeholder-color`),
            overflow: `visible`,
          }),
          Z(`.${BO}.${VO}::before`, {
            content: Z.variable(`--framer-input-icon-content`, `none`),
            display: `block`,
            flexShrink: 0,
            width: `${zb}px`,
            height: `${zb}px`,
            marginRight: `${Rb}px`,
            ...Bb,
            backgroundPosition: `center`,
            maskPosition: `center`,
            maskImage: Z.variable(`--framer-input-icon-mask-image`),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${BO} .${Db}[type="date"]::before, .${BO} .${Db}[type="time"]::before`, {
            ...Vb,
            paddingLeft: `${Lb}px`,
            maskPosition: `${Lb}px center`,
            backgroundPosition: `${Lb}px center`,
          }),
          Z(`.${BO} .${Db}[type="date"]::before`, {
            maskImage: Z.variable(`--framer-input-icon-mask-image`, yt(KO)),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${BO} .${Db}[type="time"]::before`, {
            maskImage: Z.variable(`--framer-input-icon-mask-image`, yt(qO)),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${BO} .${Db}::-webkit-calendar-picker-indicator`, {
            opacity: 0,
            position: `absolute`,
            right: 0,
            top: 0,
            bottom: 0,
            padding: Z.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            width: `${zb}px`,
            height: `100%`,
          }),
          Z(`.${BO}:focus-within, .${BO}.${Ab}`, {
            boxShadow: Z.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
            background: Z.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
          }),
          Z(`.${BO}:focus-within::after, .${BO}.${Ab}::after`, {
            borderColor: Z.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`
            ),
            borderStyle: Z.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`
            ),
            borderWidth: Z.variable(`--framer-input-focused-border-width`, Nb),
          }),
          Z(`.${UO}`, {
            display: `flex`,
            order: 2,
            alignItems: `center`,
            justifyContent: `center`,
            flexShrink: 0,
            width: `${zb}px`,
            height: `${zb}px`,
            marginLeft: `${Rb}px`,
            padding: 0,
            border: `none`,
            background: `transparent`,
            cursor: `pointer`,
            color: Z.variable(`--framer-input-placeholder-color`),
            transition: `color 0.15s ease`,
            outline: `none`,
          }),
          Z(`.${UO}:hover, .${UO}:focus-visible`, {
            color: Z.variable(`--framer-input-font-color`),
          }),
        ])(),
        `framer-lib-form-plain-text-input`
      )),
      (YO = j.forwardRef(function (e, t) {
        let {
            autoFocus: n,
            className: r,
            inputName: i,
            required: a,
            hidden: o,
            defaultValue: s,
            value: c,
            selectOptions: l,
            style: u,
            onValid: d,
            onChange: f,
            onBlur: p,
            onInvalid: m,
            onFocus: h,
            ...g
          } = e,
          v = lu(),
          y = !v && c !== void 0,
          b = c ?? ``,
          [x, , S] = xh(b, y, f),
          C = Xr(y ? b : s),
          w = _o(d, m, S, p, h);
        return o
          ? _(P.input, { type: `hidden`, name: i, defaultValue: s })
          : _(P.div, {
              ref: t,
              style: u,
              className: Kc(Ob, XO, r),
              ...g,
              children: _(
                P.select,
                {
                  ref: C,
                  name: i,
                  autoFocus: n,
                  required: a,
                  className: Db,
                  defaultValue: s,
                  value: y ? x : void 0,
                  ...w,
                  children: l?.map((e, t) => {
                    switch (e.type) {
                      case `divider`:
                        return _(`hr`, {}, t);
                      case `option`:
                        return _(
                          `option`,
                          {
                            value: e.value ?? e.title,
                            disabled: e.disabled,
                            children: e.title ?? e.value,
                          },
                          t
                        );
                      default:
                        return H(e);
                    }
                  }),
                },
                v ? wh(s) : void 0
              ),
            });
      })),
      (XO = `framer-form-select-wrapper`),
      (ZO = 16),
      (QO = (() =>
        `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="${ZO}" height="${ZO}"><path d="M 3.5 6 L 8 10.5 L 12.5 6" fill="transparent" stroke-width="1.5" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round"></path></svg>`)()),
      ($O = yb(
        YO,
        (() => [
          ...jb,
          ...Pb,
          ...Mb,
          Z(`.${XO}`, {
            padding: Z.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            background: Z.variable(`--framer-input-background`),
            borderTopLeftRadius: Z.variable(`--framer-input-border-radius-top-left`),
            borderTopRightRadius: Z.variable(`--framer-input-border-radius-top-right`),
            borderBottomRightRadius: Z.variable(`--framer-input-border-radius-bottom-right`),
            borderBottomLeftRadius: Z.variable(`--framer-input-border-radius-bottom-left`),
            cornerShape: Z.variable(`--framer-input-corner-shape`),
            boxShadow: Z.variable(`--framer-input-box-shadow`),
            transition: Z.variable(`--framer-input-focused-transition`),
            transitionProperty: `background, box-shadow`,
          }),
          Z(`.${XO} select`, {
            appearance: `none`,
            "-webkit-appearance": `none`,
            padding: Z.variable(`--framer-input-padding`),
            background: `transparent`,
          }),
          Z(`.${XO}::before`, {
            ...Vb,
            paddingLeft: `${Lb}px`,
            backgroundPosition: `${Lb}px center`,
            maskPosition: `${Lb}px center`,
            backgroundImage: Z.variable(`--framer-input-icon-image`),
            maskImage: Z.variable(`--framer-input-icon-mask-image`, `url('${QO}')`),
          }),
          Z(`.${XO} select:required:invalid`, {
            color: Z.variable(`--framer-input-invalid-text-color`),
          }),
          Z(`.${XO}:focus-within, .${XO}.${Ab}`, {
            background: Z.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
            boxShadow: Z.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
          }),
          Z(`.${XO}:focus-within::after, .${XO}.${Ab}::after`, {
            borderColor: Z.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`
            ),
            borderStyle: Z.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`
            ),
            borderWidth: Z.variable(`--framer-input-focused-border-width`, Nb),
          }),
          Z(`.${XO} select option`, { color: `#000` }),
          Z(`.${XO} select option:disabled`, { color: `rgba(0, 0, 0, 0.4)` }),
        ])(),
        `framer-lib-form-select`
      )),
      (ek = (() => ({
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }))()),
      (tk = { opacity: 0 }),
      (nk = { opacity: 1 }),
      (rk = Fh(
        j.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: a,
              draggable: o,
              fitImageDimension: s,
              style: c,
              ...l
            } = e,
            u = { ...c },
            d = C(() => ns(n), [n]),
            [f, p] = i();
          j.useLayoutEffect(() => {
            if (!n?.src || !s || d) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                p({ width: e.naturalWidth, height: e.naturalHeight });
            }),
              (e.src = n.src));
          }, [n?.src, s, d]);
          let m = d ?? f;
          return (
            s && m && ((u[s] = `auto`), (u.aspectRatio = m.width / m.height)),
            n && delete u.background,
            T(rs(e.as), {
              ...l,
              style: u,
              ref: t,
              draggable: o,
              children: [n && _(Zo, { image: n, alt: a, draggable: o }), r],
            })
          );
        })
      )),
      (ak = (() =>
        !no() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`)()),
      (ok =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (sk = `{{ text-placeholder }}`),
      (ck = `rich-text-wrapper`),
      (lk = Eo(
        m(function (e, n) {
          let {
              id: r,
              name: i,
              html: a,
              htmlFromDesign: o,
              text: s,
              textFromDesign: u,
              fonts: d = [],
              width: f,
              height: p,
              left: m,
              right: h,
              top: g,
              bottom: v,
              center: y,
              className: b,
              stylesPresetsClassName: x,
              visible: S = !0,
              opacity: w,
              rotation: T = 0,
              verticalAlignment: E = `top`,
              isEditable: D = !1,
              environment: O = J.current,
              withExternalLayout: ee = !1,
              positionSticky: k,
              positionStickyTop: A,
              positionStickyRight: j,
              positionStickyBottom: te,
              positionStickyLeft: M,
              __htmlStructure: ne,
              __fromCanvasComponent: N = !1,
              _forwardedOverrideId: re,
              _forwardedOverrides: ie,
              _usesDOMRect: ae,
              children: oe,
              ...se
            } = e,
            ce = Ha(),
            le = ls(e),
            ue = l(null),
            de = n ?? ue,
            { navigate: fe, getRoute: pe } = Bt(),
            me = Ht();
          (Rn(e.preload ?? []), hs(e, de));
          let he = t(nS),
            ge = lu(),
            F = s,
            _e = re ?? r;
          if (_e && ie) {
            let e = ie[_e];
            typeof e == `string` && (F = e);
          }
          let ve = ``;
          if (F) {
            let e = Lh(F);
            ve = ne ? ne.replace(sk, e) : `<p>${e}</p>`;
          } else if (a) ve = a;
          else if (u) {
            let e = Lh(u);
            ve = ne ? ne.replace(sk, e) : `<p>${e}</p>`;
          } else o && (ve = o);
          let ye = Pu(),
            be = C(() => (ge || !pe || !me ? ve : Rh(ve, pe, me, ye)), [ve, pe, me, ye]);
          if (
            (c(() => {
              let e = de.current;
              if (e === null) return;
              function t(e) {
                let t = Ou(e.target, de.current);
                co(e) ||
                  !fe ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (hu(fe, t, ye) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [fe, ye]),
            Vh(d, N, de),
            !S)
          )
            return null;
          let xe = D && O() === J.canvas,
            Se = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: Bh(E),
              opacity: xe ? 0 : w,
              flexShrink: 0,
            },
            Ce = J.hasRestrictions(),
            we = za(e, ce || 0, !1),
            Te = ae && (f === `auto` || p === `auto`),
            Ee =
              e.transformTemplate || !we || !Ce || N || Te
                ? (e.transformTemplate ?? cs(y))
                : void 0;
          if (!ee) {
            if (we && Ce && !Te) {
              let e = uy.getNumber(T).toFixed(4);
              ((Se.transform = `translate(${we.x}px, ${we.y}px) rotate(${e}deg)`),
                (Se.width = we.width),
                (Se.minWidth = we.width),
                (Se.height = we.height));
            } else
              ((Se.left = m),
                (Se.right = h),
                (Se.top = g),
                (Se.bottom = v),
                (Se.width = f),
                (Se.height = p),
                (Se.rotate = T));
            k
              ? (!ge || he) &&
                ((Se.position = `sticky`),
                (Se.willChange = `transform`),
                (Se.top = A),
                (Se.right = j),
                (Se.bottom = te),
                (Se.left = M))
              : ge && (e.positionFixed || e.positionAbsolute) && (Se.position = `absolute`);
          }
          return (
            Wc(e, Se),
            Vc(e, Se),
            Object.assign(Se, e.style),
            _(P.div, {
              id: r,
              ref: de,
              ...se,
              style: Se,
              layoutId: le,
              "data-framer-name": i,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": y,
              className: Kc(b, x, ck),
              transformTemplate: Ee,
              dangerouslySetInnerHTML: { __html: be },
            })
          );
        })
      )),
      (uk = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (dk = (() =>
        RegExp(
          `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
          `gu`
        ))()),
      (fk = m(function (e, t) {
        return _(`svg`, { ...e, ref: t, children: e.children });
      })),
      (pk = P.create(fk)),
      (mk = m(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return _(pk, {
          ...r,
          ref: i,
          viewBox: t,
          children: _(P.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (hk = []),
      (gk = `RichTextContainer`),
      (_k = m(function (e, n) {
        let {
            __fromCanvasComponent: r = !1,
            _forwardedOverrideId: i,
            _forwardedOverrides: a,
            _usesDOMRect: o,
            anchorLinkOffsetY: s,
            as: c,
            bottom: u,
            center: d,
            children: f,
            environment: p = J.current,
            fonts: m = hk,
            height: h,
            isEditable: g = !1,
            left: v,
            name: y,
            opacity: b,
            positionSticky: x,
            positionStickyBottom: S,
            positionStickyLeft: w,
            positionStickyRight: T,
            positionStickyTop: E,
            right: D,
            rotation: O = 0,
            style: ee,
            _initialStyle: k,
            stylesPresetsClassNames: A,
            text: j,
            top: te,
            verticalAlignment: M = `top`,
            visible: ne = !0,
            width: N,
            withExternalLayout: re = !1,
            viewBox: P,
            viewBoxScale: ie = 1,
            effect: ae,
            ...oe
          } = e,
          se = Ha(),
          ce = p(),
          le = ce === J.canvas,
          ue = le || ce === J.export,
          de = t(nS),
          fe = ls(e),
          pe = l(null),
          me = n ?? pe;
        (hs(e, me), Vh(m, r, me));
        let he = Xh(ae, me),
          ge = C(() => {
            if (f) return ig(f, A, j, s, void 0, he.getTokenizer());
          }, [f, A, j, s, he]);
        if (!ne) return null;
        let F = { opacity: g && le ? 0 : b },
          _e = Bh(M);
        _e !== Gb.justifyContent && (F.justifyContent = _e);
        let ve = {},
          ye = J.hasRestrictions(),
          be = za(e, se || 0, !1),
          xe = o && (N === `auto` || h === `auto`),
          Se =
            e.transformTemplate || !be || !ye || r || xe ? (e.transformTemplate ?? cs(d)) : void 0;
        (re ||
          (be && ye && !xe
            ? ((ve.x = be.x + (z(ee?.x) ? ee.x : 0)),
              (ve.y = be.y + (z(ee?.y) ? ee.y : 0)),
              (ve.left = 0),
              (ve.top = 0),
              (F.rotate = uy.getNumber(O)),
              (F.width = be.width),
              (F.minWidth = be.width),
              (F.height = be.height))
            : ((F.left = v),
              (F.right = D),
              (F.top = te),
              (F.bottom = u),
              (F.width = N),
              (F.height = h),
              (F.rotate = O)),
          x
            ? (!ue || de) &&
              ((F.position = `sticky`),
              (F.willChange = `transform`),
              (F.top = E),
              (F.right = T),
              (F.bottom = S),
              (F.left = w))
            : le && (e.positionFixed || e.positionAbsolute) && (F.position = `absolute`)),
          Wc(e, F),
          Vc(e, F),
          Object.assign(F, k, ee, ve),
          fe && (oe.layout = `preserve-aspect`));
        let Ce = rs(e.as),
          we = oe[`data-framer-name`] ?? y,
          Te = le ? tg(zx(oe)) : oe;
        return R(e.viewBox)
          ? e.as === void 0
            ? _(mk, {
                ...Te,
                ref: me,
                style: F,
                layoutId: fe,
                viewBox: P,
                viewBoxScale: ie,
                transformTemplate: Se,
                "data-framer-name": we,
                "data-framer-component-type": gk,
                children: ge,
              })
            : _(Ce, {
                ...Te,
                ref: me,
                style: F,
                layoutId: fe,
                transformTemplate: Se,
                "data-framer-name": we,
                "data-framer-component-type": gk,
                children: _(mk, {
                  viewBox: P,
                  viewBoxScale: ie,
                  style: { width: `100%`, height: `100%` },
                  children: ge,
                }),
              })
          : _(Ce, {
              ...Te,
              ref: me,
              style: F,
              layoutId: fe,
              transformTemplate: Se,
              "data-framer-name": we,
              "data-framer-component-type": gk,
              children: ge,
            });
      })),
      (vk = Eo(
        m(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (R(a)) {
            !r.stylesPresetsClassName &&
              B(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [R(t) ? `html` : `htmlFromDesign`]: a };
            return _(lk, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && R(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return _(_k, { ...r, ref: i, children: y(a) ? a : void 0 });
        })
      )),
      (yk = `framer/asset-reference,`),
      (bk = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = _g(t);
        return _(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: _(
            `image`,
            {
              width: r ? i : 1,
              height: r ? a : 1,
              href: c,
              preserveAspectRatio: `none`,
              transform: r ? void 0 : n,
              x: r ? 0 : void 0,
              y: r ? 0 : void 0,
            },
            c
          ),
        });
      }),
      (xk = ro()),
      (Sk = class {
        constructor(e, t, n, r, i = 0) {
          (I(this, `id`, e),
            I(this, `svg`, t),
            I(this, `innerHTML`, n),
            I(this, `viewBox`, r),
            I(this, `count`, i));
        }
      }),
      (Ck = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (wk = class {
        constructor() {
          (I(this, `entries`, new Map()), I(this, `vectorSetItems`, new Map()));
        }
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(uS(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = vg(e);
            (s &&
              (t && yg(s, n),
              (s.id = n),
              (o = wg(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (!(!e || e === ``)) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          xk && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = Ck),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          xk && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new Sk(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !xk) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        xk && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${Ck}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(r.includes(`id="${n}"`) ? r : r.replace(/^<svg/, `<svg id="${n}"`));
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (Tk = new wk()),
      (Ek = (() => ({
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 96 / 6,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }))()),
      (Dk = m(function (e, t) {
        let n = Ha(),
          r = ls(e),
          i = j.useRef(null),
          a = t ?? i,
          o = QD();
        return (
          hs(e, i),
          _(kk, { ...e, innerRef: a, parentSize: n, layoutId: r, providedWindow: o })
        );
      })),
      (Ok = 5e4),
      (kk = (() => {
        var e;
        return (
          (e = class extends lS {
            constructor() {
              (super(...arguments),
                I(this, `container`, j.createRef()),
                I(this, `svgElement`, null),
                I(this, `setSVGElement`, (e) => {
                  ((this.svgElement = e), this.setLayerElement(e));
                }),
                I(this, `previouslyRenderedSVG`, ``),
                I(this, `unmountedSVG`, ``));
            }
            static frame(e) {
              return za(e, e.parentSize || 0);
            }
            get frame() {
              return za(this.props, this.props.parentSize || 0);
            }
            componentDidMount() {
              if (this.unmountedSVG) {
                let { svgContentId: e } = this.props,
                  t = e ? `svg${e}` : null;
                (Tk.subscribe(this.unmountedSVG, !e, t),
                  (this.previouslyRenderedSVG = this.unmountedSVG));
              }
              this.props.svgContentId || Og(this.container, this.props);
            }
            componentWillUnmount() {
              (Tk.unsubscribe(this.previouslyRenderedSVG),
                (this.unmountedSVG = this.previouslyRenderedSVG),
                (this.previouslyRenderedSVG = ``));
            }
            componentDidUpdate(e) {
              if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
              let { fill: t } = this.props;
              ($x.isImageObject(t) &&
                $x.isImageObject(e.fill) &&
                t.src !== e.fill.src &&
                bs(this.svgElement, `fill`, null, !1),
                Og(this.container, this.props));
            }
            collectLayout(e, t) {
              if (this.props.withExternalLayout) {
                ((t.width = `100%`), (t.height = `100%`), (t.aspectRatio = `inherit`));
                return;
              }
              let n = this.frame,
                {
                  rotation: r,
                  intrinsicWidth: i,
                  intrinsicHeight: a,
                  width: o,
                  height: s,
                } = this.props,
                c = uy.getNumber(r);
              if (
                ((e.opacity = U(this.props.opacity) ? this.props.opacity : 1),
                J.hasRestrictions() && n)
              ) {
                (Object.assign(e, {
                  transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
                  width: `${n.width}px`,
                  height: `${n.height}px`,
                }),
                  Ia(this.props) && (e.position = `absolute`));
                let r = n.width / (i || 1),
                  o = n.height / (a || 1);
                t.transformOrigin = `top left`;
                let { zoom: s, target: l } = Ny;
                if (l === J.export) {
                  let e = s > 1 ? s : 1;
                  ((t.transform = `scale(${r * e}, ${o * e})`), (t.zoom = 1 / e));
                } else t.transform = `scale(${r}, ${o})`;
                i && a && ((t.width = i), (t.height = a));
                return;
              }
              let { left: l, right: u, top: d, bottom: f } = this.props;
              (Object.assign(e, {
                left: l,
                right: u,
                top: d,
                bottom: f,
                width: o,
                height: s,
                rotate: c,
              }),
                Object.assign(t, { left: 0, top: 0, bottom: 0, right: 0, position: `absolute` }));
            }
            render() {
              let {
                id: e,
                visible: t,
                style: n,
                fill: r,
                svg: i,
                intrinsicHeight: a,
                intrinsicWidth: o,
                title: s,
                description: c,
                layoutId: l,
                className: u,
                variants: d,
                withExternalLayout: f,
                innerRef: p,
                svgContentId: m,
                height: h,
                opacity: g,
                width: v,
                requiresOverflowVisible: y,
                ...b
              } = this.props;
              if (!f && (!t || !e)) return null;
              let x = e ?? l ?? `svg`,
                S = this.frame,
                C = S || { width: o || 100, height: a || 100 },
                w = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
                E = {};
              (this.collectLayout(w, E),
                zc(this.props, w),
                Wc(this.props, w),
                lS.applyWillChange(this.props, w, !1));
              let D = null;
              if (typeof r == `string` || q.isColorObject(r)) {
                let e = q.isColorObject(r) ? r.initialValue || q.toRgbString(r) : r;
                ((w.fill = e), (w.color = e));
              } else if (_S.isLinearGradient(r)) {
                let t = r,
                  n = `${encodeURI(e || ``)}g${_S.hash(t)}`;
                w.fill = `url(#${n})`;
                let { stops: i, x1: a, x2: o, y1: s, y2: c } = lg(t, x);
                D = _(`svg`, {
                  ref: this.setSVGElement,
                  width: `100%`,
                  height: `100%`,
                  style: { position: `absolute` },
                  role: `presentation`,
                  children: _(`linearGradient`, {
                    id: n,
                    x1: a,
                    x2: o,
                    y1: s,
                    y2: c,
                    children: i.map((e, t) =>
                      _(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                    ),
                  }),
                });
              } else if (yS.isRadialGradient(r)) {
                let t = r,
                  n = `${encodeURI(e || ``)}g${yS.hash(t)}`;
                w.fill = `url(#${n})`;
                let i = ug(t, x);
                D = _(`svg`, {
                  ref: this.setSVGElement,
                  width: `100%`,
                  height: `100%`,
                  style: { position: `absolute` },
                  role: `presentation`,
                  children: _(`radialGradient`, {
                    id: n,
                    cy: t.centerAnchorY,
                    cx: t.centerAnchorX,
                    r: t.widthFactor,
                    children: i.stops.map((e, t) =>
                      _(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                    ),
                  }),
                });
              } else if ($x.isImageObject(r)) {
                let e = hg(r, C, x);
                e &&
                  ((w.fill = `url(#${e.id})`),
                  (D = _(`svg`, {
                    ref: this.setSVGElement,
                    width: `100%`,
                    height: `100%`,
                    style: { position: `absolute` },
                    role: `presentation`,
                    children: _(`defs`, { children: _(bk, { ...e }) }),
                  })));
              }
              let ee = { "data-framer-component-type": `SVG` },
                k = !S;
              k && Object.assign(ee, as(this.props.center));
              let A =
                  !y &&
                  !D &&
                  !w.fill &&
                  !w.background &&
                  !w.backgroundImage &&
                  i.length < Ok &&
                  !Tg(i) &&
                  !Eg(i),
                j = null;
              if (A)
                ((w.backgroundSize = `100% 100%`),
                  (w.backgroundImage = yt(i)),
                  Tk.unsubscribe(this.previouslyRenderedSVG),
                  (this.previouslyRenderedSVG = ``));
              else {
                let e = m ? `svg${m}` : null,
                  t = Tk.subscribe(i, !m, e, y);
                (Tk.unsubscribe(this.previouslyRenderedSVG),
                  (this.previouslyRenderedSVG = i),
                  Dg(w) && (w.overflow = `hidden`),
                  (j = T(O, {
                    children: [
                      D,
                      _(
                        `div`,
                        {
                          className: `svgContainer`,
                          style: E,
                          ref: this.container,
                          dangerouslySetInnerHTML: { __html: t },
                        },
                        $x.isImageObject(r) ? r.src : ``
                      ),
                    ],
                  })));
              }
              let te = rs(this.props.as),
                { href: M, target: ne, rel: N, onClick: re, onTap: P } = this.props,
                ie = s || c;
              return _(te, {
                ...ee,
                ...b,
                layoutId: l,
                transformTemplate: k ? cs(this.props.center) : void 0,
                id: e,
                ref: p,
                style: w,
                className: u,
                variants: d,
                tabIndex: this.props.tabIndex,
                role: ie ? `img` : void 0,
                "aria-label": s,
                "aria-description": c,
                "aria-hidden": ie ? void 0 : `true`,
                onTap: P,
                onClick: re,
                href: M,
                target: ne,
                rel: N,
                children: j,
              });
            }
          }),
          I(e, `supportsConstraints`, !0),
          I(e, `defaultSVGProps`, {
            left: void 0,
            right: void 0,
            top: void 0,
            bottom: void 0,
            style: void 0,
            _constraints: { enabled: !0, aspectRatio: null },
            parentSize: 0,
            rotation: 0,
            visible: !0,
            svg: ``,
            shadows: [],
          }),
          I(e, `defaultProps`, { ...lS.defaultProps, ...e.defaultSVGProps }),
          e
        );
      })()),
      (Ak = Eo(Dk)),
      (jk = 1e3),
      (Mk = `explicitInter`),
      (Qe.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = it(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  });
export {
  Nk as $,
  Ak as A,
  cm as At,
  wC as B,
  Lw as C,
  Ep as Ct,
  vu as D,
  Wr as Dt,
  J as E,
  Hp as Et,
  Lx as F,
  KD as Ft,
  Ng as G,
  CC as H,
  xb as I,
  XD as It,
  Po as J,
  Pg as K,
  Kc as L,
  In as Lt,
  kg as M,
  qD as Mt,
  Mg as N,
  al as Nt,
  KT as O,
  sm as Ot,
  No as P,
  Hg as Pt,
  St as Q,
  IO as R,
  Qd as S,
  Kp as St,
  yD as T,
  Bt as Tt,
  SC as U,
  xC as V,
  vb as W,
  B_ as X,
  Dp as Y,
  ui as Z,
  v_ as _,
  lu as _t,
  QC as a,
  ma as at,
  iy as b,
  xi as bt,
  xa as c,
  zp as ct,
  $O as d,
  jp as dt,
  po as et,
  dC as f,
  Pl as ft,
  Pw as g,
  Fp as gt,
  jw as h,
  ou as ht,
  Nl as i,
  Sw as it,
  dw as j,
  YC as jt,
  vk as k,
  yb as kt,
  fT as l,
  Tk as lt,
  rk as m,
  Ht as mt,
  ku as n,
  o_ as nt,
  uw as o,
  bi as ot,
  Fw as p,
  Yt as pt,
  jg as q,
  q as r,
  ti as rt,
  eb as s,
  SD as st,
  Du as t,
  Tt as tt,
  JO as u,
  Zr as ut,
  m_ as v,
  Ir as vt,
  gC as w,
  Jt as wt,
  Zn as x,
  Wp as xt,
  qw as y,
  Fr as yt,
  Wg as z,
};
//# sourceMappingURL=framer.DwtIulwr.mjs.map
